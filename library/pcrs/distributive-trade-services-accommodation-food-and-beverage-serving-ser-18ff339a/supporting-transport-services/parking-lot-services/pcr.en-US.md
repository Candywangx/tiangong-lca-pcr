---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.parking-lot-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Parking lot services

## 1. Scope and Applicability

Provision of parking spaces for motor vehicles, motorcycles and bicycles in covered/uncovered lots or garages, and collection of parking fees on streets, roads and public places. Each dataset fixes vehicle class, space extent, actual occupied duration, facility configuration and whether the operator provides the space or only collects fees. Open-air, enclosed/underground, mechanical and curb parking are distinct qualified scenarios. [Source: `un-cpc-parking`]

Exclude monthly/yearly rental of lock-up garages or garage premises (72112) and car-parking/valet services (97990). A season ticket or payment is not itself a physical parking output: actual occupied service must still be recorded; do not disguise an exclusive garage rental as a parking visit. Separate customer vehicle manufacture, approach/departure driving, vehicle charging sold as energy, car washing, repairs and unrelated building uses. A fee-collection-only dataset represents that component and cannot claim the complete parking-space/infrastructure footprint. [Source: `un-cpc-parking`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.parking-lot-services |
| classification_refs | CPC 3.0 67430; exact |
| covered_products | Qualified parking-space provision and explicitly scoped parking-fee collection across stated vehicle/facility modes |
| excluded_products | Lock-up garage rental, valet, vehicle transport/charging supply, washing/repair and unrelated property uses |
| representative_product | One car occupying one specified underground-garage space for one actual hour with actual lighting and ventilation |
| production_route | Observe actual arrival/occupancy → provide declared parking/fee function with actual support → observe departure and reconcile occupied time |
| market_state | Completed measured occupied-space service, not a fee receipt, capacity reservation or assumed average visit |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared parking-space or fee-collection function for one specified occupied vehicle space |
| How much | One defined vehicle-space occupied for one actual hour; one counted one-hour service block |
| How well | Actual declared vehicle fit, access, protection/security and ventilation conditions fulfilled; no universal shelter or safety grade |
| How long or cycle | Exactly one actual occupied hour, derived from measured elapsed occupancy; fractional hours retained without fee rounding |
| reference_flow_link | `parking_block` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | One-hour specified parking-service block |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | vehicle class and dimensions; one-vehicle/one-space extent; actual occupied hours and original arrival/departure/occupancy observations; role space_provision or fee_collection_only; facility/zone/space ID; surface/garage/curb and sheltered/unsheltered configuration; stall and shared circulation area; natural/mechanical ventilation and actual control duty; lighting and mechanical-lift functions; actual access/security/acceptance specification; duration distribution when representing a population; energy supply; EV charging boundary; operator/provider split; asset and maintenance scope; location and period |

One Item(s) counts the physically defined one-vehicle/one-space/one-hour block. Compute observed block quantity from actual occupied hours, including fractional hours; do not assume one visit, one entrance, one payment or one billed hour equals one actual hour. Preserve complete stay duration and transfer event-driven costs by actual events before normalization. A car, motorcycle and bicycle are separate scenarios with actual space geometry; there is no default conversion between them.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| occupied_block | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count one-hour physical parking blocks using cp_activity actual occupancy. Each block has the same declared vehicle/space/conditions; keep partial hours and distinguish fees/entry counts. |
| customer_energy | meter_energy | Energy | kWh | Meter facility overhead and vehicle-delivered charging separately. Retain actual conversion/loss boundaries without assigning customer driving/charging to facility fuel combustion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified occupied parking space and existing customer vehicle; relevant facility/assets and utilities retain upstream burdens |
| starting_condition_role | foreground_start |
| product_classification_scope | Parking-space provision or explicitly limited fee collection, declared separately |
| recursive_input_rule | Subcontracted parking/fee service enters once with compatible vehicle-space-time and scope; remove overlapping owned support and assets |
| upstream_dataset_requirement | Actual electricity/heat/fuel, cleaning materials, pavement/garage/equipment construction, renewal and treatment inventories |
| disclosure | Space/time observations, provider role, ventilation/lighting/lift modes, charging and traffic boundaries, shared areas, lifecycle allocation and evidence gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_operations | Include actual access control, occupied-space operation, lighting, underground/enclosed ventilation, mechanical lifts, drainage, cleaning, operator support and attributable standby. Open-air or unpowered modes retain their actual non-energy activities without assumed fan/lift use. |  |
| boundary_metering | Use actual end-use and facility utility metering with documented allocation and reconcile building versus parking use. General DOE metering guidance supports end-use measurement, not a parking energy factor, ventilation rate or operating requirement. | doe-metering |
| boundary_customer | Keep customer propulsion, idling and charging-supply inventories separate from facility overhead; garage air-quality concentrations are not facility emission mass. Ventilation transfers customer exhaust rather than generating another emission. For an explicitly combined system add customer operations once and disclose that expanded boundary. |  |
| boundary_role | A fee-only operator includes its actual meters/payment/administration and allocated support; parking-space construction and operation supplied by another party remain an explicit upstream component for complete-system claims. Do not allocate the whole road/building to one curb fee or erase actual parking infrastructure because ownership is external. |  |
| boundary_exchange_completeness | Add every actual cleaning chemical, refrigerant, maintenance material, waste stream and pollutant species absent from the initial cards as its own specific conditional exchange, with the applicable property/unit and linked collection protocol. Confirm actual applicability from records; missing identity or quantity is an explicit gap, not zero. Generic mixed-waste or energy labels are not selected flows. |  |

## 6. Process Inventory Structure

Instantiate one qualified facility/vehicle/service-role scenario. Every row is atomic and conditional. Add actual other cleaning chemicals, refrigerants, maintenance materials, wastes and pollutant species separately; unknown is not zero. A generic mixed waste or energy label is not a selected flow. Lighting, fan, lift, drainage and fee-system electricity are distinct measured activities and must not overlap, even when their supply identity is the same.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| parking | Provide the qualified occupied-space parking block | required | Actual declared facility, vehicle and provider-role scenario | foreground_production | per reference flow |

### Process: Provide the qualified occupied-space parking block (`parking`)

#### Inputs

##### Product flows

###### Parking lighting electricity (`lighting`)

Meter actual zone lighting and its controls, including attributable standby; retain supply region/voltage and occupancy/daylight schedule.

- Selected flow: Electricity, alternating current, parking-facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Garage ventilation electricity (`ventilation`)

Conditional on actual mechanical ventilation; meter fan/control electricity and actual duty in the occupied zone. Open-air/bicycle-only modes do not inherit a default garage fan load; never reduce required ventilation just to reduce inventory.

- Selected flow: Electricity, alternating current, parking-facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Mechanical parking lift electricity (`lift_energy`)

Conditional on actual automated platform or vehicle lift use; meter operating/standby load and actual lifting events. This is parking equipment, not valet driving.

- Selected flow: Electricity, alternating current, parking-facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Parking drainage pump electricity (`drain_energy`)

Conditional on actual site drainage pumping; meter actual operation and assign parking share separately from other building uses.

- Selected flow: Electricity, alternating current, parking-facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Parking access and fee-system electricity (`meter_energy`)

Meter actual access barrier, parking meter, payment/security and operator IT demand. Exclude electricity sold or delivered to customer vehicles and avoid overlap with other equipment rows.

- Selected flow: Electricity, alternating current, parking-facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Purchased facility heat (`heat`)

Conditional on actual heated parking facilities or operator service space; meter delivered heat and attribute occupied/function scope. Heating other building uses remains separate.

- Selected flow: Purchased facility heat
- Flow property / unit: Energy / MJ
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Facility generator diesel fuel (`diesel`)

Conditional on actual operator generator/maintenance equipment consuming this grade. Customer vehicle fuel and driving are outside facility combustion.

- Selected flow: Diesel fuel, unblended
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources:

###### Parking cleaning water (`water`)

Conditional on actual pavement/equipment cleaning or sanitary support; measure supply and distinguish rainwater runoff and unrelated car-washing services.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Sodium carbonate cleaner (`cleaner`)

Conditional on this actual cleaning chemical; other chemicals or a formulated cleaner require their own specific identity and measured composition/grade.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Parking-lift hydraulic oil (`hydraulic_oil`)

Conditional on actual mineral-oil hydraulic equipment maintenance; reconcile issued, returned, stock, collected oil and actual leaks.

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

###### Parking pavement asphalt renewal (`asphalt`)

Conditional on actual asphalt surface renewal; collect grade, material mass, work area and actual application machinery separately if required. Do not duplicate renewal already included upstream.

- Selected flow: Hot-mix asphalt pavement material
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_maintenance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`
- Sources:

###### Parking-garage construction share (`building_share`)

Conditional on actual structured/underground parking; identify floor area, structural configuration and construction inventory. Share access/circulation areas transparently; do not also count the same structural slab as separate paving.

- Selected flow: Configured parking-garage structure
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Parking pavement construction share (`pavement_share`)

Conditional on actual asphalt lot or allocated curb-parking surface; identify exact parking area and road/parking boundary. Exclude unrelated carriageway construction and separately recorded renewal.

- Selected flow: Configured asphalt parking pavement
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Mechanical parking-lift manufacture share (`lift_share`)

Conditional on actual parking-lift use; identify model, manufacturing scope, recorded cycles and supported lifetime/cycle denominator; no default lift lifespan.

- Selected flow: Configured mechanical parking lift
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Parking-meter manufacture share (`meter_share`)

Conditional on actual meter use, including on-street fee collection; attribute supported manufacturing share and avoid a second charge within a supplier fee-system inventory.

- Selected flow: Configured parking fee meter
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

##### Product flows

###### One-hour specified parking-service block (`parking_block`)

One block means one vehicle of the declared class occupying one defined space for one actual hour, with declared space-provision or fee-collection-only role and actual facility functions.

- Selected flow: One-hour specified parking-service block
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_activity`
- Sources:

##### Waste flows

###### Used parking-lift hydraulic oil (`used_oil`)

Conditional on actual segregated removed hydraulic oil; weigh and identify treatment. Collected waste oil is distinct from a physical leak to soil/water.

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

###### Contaminated parking-floor washwater (`washwater`)

Conditional on actual collected floor washwater; measure volume and oil/chemical contamination and identify sewer/treatment destination. Uncaptured runoff needs its own actual receiving-compartment/species analysis.

- Selected flow: Contaminated parking-floor washwater
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Removed parking asphalt (`waste_asphalt`)

Conditional on actual pavement removal; weigh this stream and distinguish reuse/treatment and disposal. No automatic recycling or displacement credit.

- Selected flow: Removed asphalt pavement material
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Facility fossil carbon dioxide release (`fossil_co2`)

Conditional on actual facility fuel combustion, measured or derived using verified fuel carbon/oxidation. Customer exhaust ventilated through a garage is not newly generated facility combustion and must not be counted twice.

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

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_time | Subdivide vehicle class, actual space geometry, facility zone and service role. Allocate holding/lighting/space burdens using actual measured occupied space-time and relevant capacity, retaining justified unoccupied support. Allocate access/lift/payment event costs from actual events to their measured stay before hourly normalization. No equal-entry, fee or universal car/bicycle ratio. |  |
| allocate_assets | Use persistent pavement/garage/lift/meter ledgers with supported whole-life service denominators and actual parking shares. Keep structural floors and external asphalt areas non-overlapping; separate initial construction and actual renewals. Observed-period allocation distributes only that period manufacturing/construction share; cumulative shares across all uses/periods may not exceed one or reset annually. Unknown life/denominator requires review and sensitivity. |  |
| allocate_scope | Separate vehicle charging, customer transport, building tenants and any valet service from parking overhead. A supplier support inventory replaces its covered burdens once. Fees and stored customer vehicles are not co-products; actual removed asphalt/oil receives no automatic avoided-production credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | parking | parking_block | Actual occupancy and service-role ledger | vehicle class/dimensions; actual stall area; arrival/departure/occupancy timestamps; actual elapsed occupied hours; zone; provider role; facility functions; lift/access/payment events; fee rounding; stay distribution | Match actual occupancy observations, not just paid tickets or entry counts; compute elapsed occupied hours including partial hours and reconcile clock/occupancy gaps. One counted block is one actual occupied hour for one declared vehicle/space. Retain event burdens and actual duration distribution. | Item(s) | each stay/occupancy change | complete stays and assigned standby/support | identified lot/garage/curb zones | per reference flow | occupancy/entry-exit observations; clock calibration; space map; paid-versus-actual reconciliation |
| cp_energy | parking | lighting; ventilation; lift_energy; drain_energy; meter_energy; heat | End-use energy meter and duty log | separate kWh/MJ; supply region/voltage; lighting schedule; fan duty/zone; lift events; drainage; fee IT; standby; charging delivery and conversion losses; other building use | Submeter actual end uses or reconcile shared meters with measured equipment duty and zone occupancy. Separate EV energy delivered, parking overhead and other tenants; retain safety/ventilation operating conditions and uncertainty, without default energy or ventilation factors. | kWh; MJ | each meter/duty interval and event | all represented operation and standby | actual facility zones and suppliers | per reference flow | meters; measured loads; control logs; customer-energy/tenant reconciliation |
| cp_fuel | parking | diesel | Operator fuel balance | fuel grade; kg; receipts/stocks; generator/maintenance operation; density and temperature if converted; actual consumption | Reconcile actual facility consumption from calibrated mass measurements or traceable batch density. Customer fuel/driving is separate. | kg | each actual use and stock interval | all actual operator fuel use | actual generator/maintenance equipment | per reference flow | fuel meters/invoices; stock balance; actual duty |
| cp_material | parking | water; cleaner; hydraulic_oil | Individual supply/maintenance ledger | actual chemical/material; supplied kg or water m3; composition/grade; issues/returns; stock; cleaning/maintenance event | Meter/weigh each specific exchange and reconcile stocks/returns. Distinguish actual cleaning water from runoff and car washing; capture oil recovery and actual losses. | kg; m3 | each issue/cleaning/service event | all attributable maintenance and support | declared parking facilities | per reference flow | supply records; calibrated meters/scales; maintenance balance |
| cp_maintenance | parking | asphalt | Actual pavement renewal ledger | section/area; material grade; mass; renewal event; machine activity; initial construction/upstream renewal scope; service allocation | Measure actual renewed material and match the affected parking section; add actual application-machine energy separately and remove already included upstream renewal. | kg | each actual renewal | actual work assigned to represented service | identified parking section | per reference flow | work orders; material weighing; area plans; upstream scope |
| cp_assets | parking | building_share; pavement_share; lift_share; meter_share | Persistent asset and utilization ledger | asset ID/configuration; m2 or Item(s); actual parking share; construction/manufacturing boundary; initial/renewal split; actual use; supported lifetime service denominator; cumulative prior fractions; period share; uncertainty | Assign actual asset inventories using supported whole-life utilization and transparent time/space/event drivers. Conserve cumulative shares across all users/periods, avoid structural/pavement overlap, and review unsupported lifetime estimates. | m2; Item(s) | each allocation/asset update | supported whole life and declared observation period | actual parking-related assets | per reference flow | construction/asset records; actual utilization; life evidence; share reconciliation |
| cp_waste | parking | used_oil; washwater; waste_asphalt | Specific waste/treatment ledger | individual stream; measured kg/m3; composition; source event; recipient; treatment; recovered quantity | Weigh removed asphalt/oil separately and meter actual washwater; identify composition and treatment. Uncaptured runoff or a leak requires separate substance/compartment evidence rather than a waste-transfer assumption. | kg; m3 | each actual transfer/discharge | all attributable wastes | facility and treatment gate | per reference flow | waste tickets; composition; water balance; treatment inventories |
| cp_release | parking | fossil_co2 | Facility-specific emission ledger | fuel actually consumed onsite; carbon/oxidation evidence; measured CO2 kg; air compartment; actual duty; customer exhaust boundary | Measure actual facility release or use reviewed fuel-specific calculation evidence. Screen other actual species individually. Customer exhaust concentration monitoring is not emission mass and remains separate from facility combustion. | kg | each emitting operation or representative measurement | all actual facility emissions represented | operator equipment | per reference flow | measurement; documented method; fuel/duty reconciliation; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| occupied_time | parking_block | Sum actual elapsed occupied hours within each declared vehicle/space/facility scenario. One counted block has one actual occupied hour; retain fractional blocks and do not round to billed hours. | cp_activity | actual one-hour block quantity |  |
| parking_attribution | all inventory rows | Assign event-driven actual costs to the observed stay first and holding/support totals by measured space-time/causal use, then divide by actual occupied one-hour blocks in that qualified scenario. Reference output is exactly 1 Item(s). | cp_activity; attributable measured totals | exchange amount per reference flow |  |
| asset_attribution | building_share; pavement_share; lift_share; meter_share | Multiply actual upstream construction/manufacture by the supported reference-block share of whole-life service, preserving period and cumulative conservation and avoiding separately recorded renewal overlap. | cp_assets; cp_maintenance | asset amount per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_duration | parking_block | Verify real occupancy and one-hour block extent, clock alignment, vehicle class, space dimensions and actual duration distribution. Paid duration or entrance count alone is insufficient. | cp_activity |
| quality_operations | all inventory rows | Record actual sheltered/underground/curb configuration, lighting, ventilation and lift duty. Preserve actual safety/operating conditions; no universal fan or energy coefficient. | cp_energy; doe-metering |
| quality_lifecycle | building_share; pavement_share; lift_share; meter_share | Substantiate supported life/service denominators and conserved parking-only shares, with initial/renewal and road/building boundaries. Unknown life/upstream data prevents a complete lifecycle claim. | cp_assets; cp_maintenance |
| quality_gaps | all inventory rows | Disclose customer-energy and exhaust exclusions, provider roles, omitted species/materials, identity/measurement gaps and uncertainty; missing is not zero. | actual records and scope review |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_block | Require unique parking_block output equal to 1 Item(s) with explicit one-vehicle/one-space/one-actual-hour meaning and complete qualifiers. Reject entrance count, fee rounding, reservation time and unlike vehicle/facility pooling as occupied-time evidence. |  |
| validate_scope | Exclude lock-up garage rental and valet. Separate fee-only and full space provision; confirm actual upstream parking infrastructure when a full-system claim is made. | un-cpc-parking |
| validate_customer | Reconcile vehicle charging sold as energy and customer transport/exhaust independently. Facility ventilation electricity is included but customer exhaust is not generated twice or treated as operator fuel use. |  |
| validate_inventory | Require atomic exchanges, actual conditional applicability, conserved asset shares, non-overlapping structural/pavement/renewal scopes and documented waste treatment. Identity and evidence gaps remain explicit; no publication readiness follows from the draft. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | parking_space_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified parking-space/time stage or explicitly limited fee component, with compatible vehicle, duration, facility and provider role |
| excluded_use | Complete vehicle journey/charging footprint, garage-rental/valet footprint, count-only cross-vehicle comparison or fee-based environmental claims |
| required_metadata | vehicle class and dimensions; one-vehicle/one-space extent; actual occupied hours and original arrival/departure/occupancy observations; role space_provision or fee_collection_only; facility/zone/space ID; surface/garage/curb and sheltered/unsheltered configuration; stall and shared circulation area; natural/mechanical ventilation and actual control duty; lighting and mechanical-lift functions; actual access/security/acceptance specification; duration distribution when representing a population; energy supply; EV charging boundary; operator/provider split; asset and maintenance scope; location and period |
| required_quality_disclosure | Actual occupancy/duration and meter gaps; ventilation/lift representativeness; customer-energy/exhaust exclusions; provider/asset boundaries; life and missing upstream uncertainty |
| update_trigger | Changed vehicle/space type, duration population, shelter/ventilation/lift configuration, energy supply, charging boundary, provider role, asset life or allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-parking | official_guidance | UNSD CPC 3.0 subclass 67430 explanatory note; draft PDF p374 consistent. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67430 | Vehicle/motorcycle/bicycle parking and street fee scope; garage-rental/valet exclusions; no factor or default stay duration |
| doe-metering | official_guidance | US DOE FEMP, Metering in Federal Buildings, current web page read 2026-10-23. https://www.energy.gov/cmei/femp/metering-federal-buildings | Building/distribution/end-use energy and water measurement practices; US federal guidance is used for metering rationale only, not a universal parking operating rule or quantitative factor |
