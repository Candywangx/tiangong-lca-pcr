---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.bulk-liquid-or-gas-storage-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Bulk liquid or gas storage services

## 1. Scope and Applicability

Bulk custody storage of liquids and gases, including oil, petroleum products, wine and other bulk substances. Each dataset fixes the substance/composition, phase, temperature and pressure regime, containment type and custody interval. Atmospheric tanks, pressure vessels, refrigerated/cryogenic containment and actual underground gas storage use conditional operations and their actual inventories; they are not interchangeable average services. [Source: `un-cpc-bulk-storage`]

Include receipt/withdrawal at declared storage-facility gates, ordinary storage support, necessary pressure/temperature maintenance, actual evaporation/leak control and attributable cleaning/maintenance. Separate initial liquefaction, product refining/blending/fermentation, downstream regasification, pipeline or vehicle transport and separately sold cargo-handling services. Internal vapor recondensation or recompression solely maintaining storage belongs to storage; standalone commodity conversion has its own inventory and cannot be counted again. Stored commodity and working/cushion inventory remain custody stock, not consumed inputs or newly manufactured outputs. Explicitly disclose initial cushion-gas requirements, actual losses and contractual replacement responsibility; any attributed replacement production is a separate specific upstream input, not the entire stored mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.bulk-liquid-or-gas-storage-services |
| classification_refs | CPC 3.0 67220; exact |
| covered_products | Bulk liquid and gas custody storage with declared composition, thermodynamic conditions and containment |
| excluded_products | Commodity production/conversion; separate transport; regasification/liquefaction outside storage maintenance; unrelated warehousing or handling |
| representative_product | One tonne-day of a declared petroleum liquid in an identified tank at recorded storage conditions |
| production_route | Accept metered custody stock → maintain specified containment and storage conditions → meter withdrawal and reconcile remaining stock |
| market_state | Completed measurable storage service with auditable custody, stock-time and loss records |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Maintain bulk substance custody within declared composition, phase, containment and condition limits |
| How much | One tonne-day of actual stored mass integrated over custody time |
| How well | Satisfy actual contracted integrity, composition, temperature and pressure specifications; disclose losses and excursions |
| How long or cycle | Actual custody interval; prorate partial days using event timestamps, including required pre/post custody support allocated transparently |
| reference_flow_link | `storage_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bulk storage service for the declared substance and conditions |
| Reference flow property | Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` |
| Reference unit group | Units of mass*time `59f191d6-5dd3-4553-af88-1a32accfe308` |
| Reference unit | tday |
| Required qualifiers | substance and actual composition; liquid/gas phase; custody stock ownership; actual stored mass history; temperature and pressure including absolute/gauge convention; tank/vessel/cavern ID, capacity and construction; insulation/roof/seal/control type; receipt/withdrawal gates and times; storage duration; ambient conditions; thermal and pressure maintenance route; throughput; heel/cushion inventory; vent/recovery/flare route; metering and density basis; electricity supply; asset scope; provider split; quality excursions and losses |

tday is an explicit ASCII display token for one metric tonne multiplied by one day, mapped to the real unit-group unit t*d. It is not a named unit in that group. A day is 24 h, a tonne is 1000 kg; fractional elapsed time is retained. The reference is mass-time, not daily throughput, empty tank capacity, one shipment, gas standard volume or refrigeration capacity. Unlike substances, phases and conditions require separate datasets. Storage mass is measured inventory mass, not the total mass received during the period.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| storage_basis | reference product | Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` | tday | Use cp_storage to integrate actual mass over elapsed custody time; tday maps exactly to t*d. Normalize actual attributable exchanges to one such reference flow. |
| density_basis | storage_service | Mass | kg | Mass derived from liquid volume requires measured substance/batch density at recorded temperature and pressure. Gas volume additionally requires absolute pressure, temperature, composition and applicable compressibility. Never assume a generic oil/wine/gas density. |
| stock_reconciliation | storage_service | Mass*time | tday | Reconcile initial stock, actual receipts/withdrawals, final stock, losses and cushion/heel stock; distinguish customer stored stock from fuel used onsite. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing bulk substance accepted at storage gate and installed containment; inherited commodity production is outside the storage-only service while actual utilities and assets retain upstream burdens |
| starting_condition_role | foreground_start |
| product_classification_scope | Bulk liquids and gases storage, with composition/conditions-specific datasets |
| recursive_input_rule | Subcontracted storage enters once with defined stock-time and complete upstream scope; remove overlapping owned utilities/assets. Internal transfers within one custody boundary do not create another full storage output. |
| upstream_dataset_requirement | Actual electricity/heat/fuel, nitrogen, water, chemical, tank/pump/compressor/cavern construction and waste-treatment inventories appropriate to the declared scenario |
| disclosure | Actual gates, stock-time population, fill/empty operations, conditioning, heel/cushion inventory, losses, species, provider/asset boundaries, upstream omissions and conversion exclusions |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_storage | Include actual acceptance, storage, withdrawal, meters, standby, pressure/temperature maintenance, vapor recovery and attributable cleaning/maintenance; separate production liquefaction and downstream regasification. | un-cpc-bulk-storage |
| boundary_vapors | Screen tank heating, actual composition, changing levels, nitrogen blanket, vapor controls and cleaning. Use chemical-specific data; EPA organic-liquid guidance does not establish cryogenic-gas losses or universal control performance. | epa-tanks-faq |
| boundary_fate | Trace each actual component from generation to capture, internal return, product export, flare and atmosphere. Internal boil-off return is not an exported product or elementary release. Only actual residual component discharge enters an air row; flare CO2 and unburned methane are separate. |  |
| boundary_complete | Screen actual refrigerants, chemicals, fuels, maintenance wastes and storage-specific assets. Add every present exchange individually; unknown composition, loss or asset denominator is a declared gap rather than zero. |  |

## 6. Process Inventory Structure

Every card represents one exchange, with applicability decided from the actual substance and plant. Add other actual chemical species, refrigerants, wastes, fuels and asset types as separate cards. Aggregate VOC, total gases, boil-off gas or flared gas are collection observations, not valid selected atomic flows. Speciate actual mixtures with measured composition and reconcile component sums; do not assume vapor composition equals liquid composition. Pressure relief events and abnormal losses are retained and disclosed. Actual hydrogen, oxygen, carbon dioxide, wine volatiles or other gases require their own precise species/compartment records when relevant; the example species below are not an exhaustive or mandatory mixture.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| storage | Receive, maintain and withdraw bulk custody inventory | required | Actual liquid/gas containment scenario; individual row conditions apply | foreground_production | per reference flow |

### Process: Receive, maintain and withdraw bulk custody inventory (`storage`)

#### Inputs

##### Product flows

###### Electricity, alternating current, storage-site supply (`electricity`)

Meter actual pumps, compressors, cooling, controls, lighting and standby separately by activity; retain region, voltage and electricity-generation coverage.

- Selected flow: Electricity, alternating current, storage-site supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Purchased process heat (`heat`)

Conditional on purchased heat used to maintain declared storage temperature; collect actual delivered energy and return-condensate boundary, not nominal boiler capacity.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Methane fuel (`methane_fuel`)

Conditional on actual methane consumption for onsite storage heating or flare pilots. Natural-gas mixtures need additional named component rows based on measured composition; exclude combustion already included in purchased heat.

- Selected flow: Methane fuel
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources:

###### Nitrogen, supplied for tank blanketing (`nitrogen`)

Conditional on actual nitrogen blanketing or inerting; measure supplied mass and source. Blanketing is not evidence of zero organic loss.

- Selected flow: Nitrogen, supplied for tank blanketing
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Tap water (`water`)

Conditional on actual cleaning, cooling makeup or hygiene support; distinguish consumption from recirculating flow and record wastewater destination.

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

###### Activated carbon, granular (`activated_carbon`)

Conditional on actual vapor treatment by carbon adsorption; collect fresh/replacement carbon and actual regeneration boundaries.

- Selected flow: Activated carbon, granular
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Mineral lubricating oil (`lubricant`)

Conditional on actual pump/compressor lubrication; reconcile issues, stock, recovered oil and actual leaks.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Ammonia refrigerant, anhydrous (`ammonia_charge`)

Conditional on an actual ammonia refrigeration circuit. Other refrigerants require separate chemical rows; never apply ammonia identity to a refrigerant blend.

- Selected flow: Ammonia refrigerant, anhydrous
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources:

###### Configured bulk storage tank (`tank_share`)

Conditional on an actual tank or pressure vessel; identify material, insulation, capacity, pressure rating and construction inventory. One dataset specifies one actual tank configuration.

- Selected flow: Configured bulk storage tank
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured liquid transfer pump (`pump_share`)

Conditional on actual liquid pumping. Compressors and other equipment types require their own specific manufacturing rows rather than being hidden in this pump row.

- Selected flow: Configured liquid transfer pump
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured storage-gas compressor (`compressor_share`)

Conditional on actual gas-pressure maintenance or vapor recovery; exclude upstream production compression and separate liquefaction.

- Selected flow: Configured storage-gas compressor
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured underground gas-storage cavern (`cavern_share`)

Conditional on actual underground bulk-gas storage; identify effective cavern volume, construction inventory, pressure cycling and allocated lifetime service. Do not add a tank for the same cavern.

- Selected flow: Configured underground gas-storage cavern
- Flow property / unit: Volume / m3
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

###### Bulk storage service for the declared substance and conditions (`storage_service`)

One tonne-day of actual stored mass integrated over custody time, for one specified composition, phase, temperature, pressure and containment configuration.

- Selected flow: Bulk storage service for the declared substance and conditions
- Flow property / unit: Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` / tday
- Amount rule: 1 tday
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage`
- Sources:

##### Waste flows

###### Spent granular activated carbon (`spent_carbon`)

Conditional on actual spent adsorbent transfer; identify captured chemicals, treatment and actual regeneration share; no automatic recovery credit.

- Selected flow: Spent granular activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Used mineral lubricating oil (`used_oil`)

Conditional on actual segregated lubricating-oil removal; weigh and identify treatment separately from emitted oil.

- Selected flow: Used mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Contaminated storage-tank washwater (`tank_washwater`)

Conditional on actual cleaning; identify contamination, measured volume and destination. Different incompatible wastewaters are distinct flows, not a mixed collection label.

- Selected flow: Contaminated storage-tank washwater
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

###### Methane, to air (`methane_air`)

Conditional on this actual species in fugitive leakage, venting, evaporation or residual flare exhaust. Measure species quantity and distinguish generation, capture, internal recovery, export and actual release; do not use total VOC or boil-off gas as this species.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Ethane, to air (`ethane_air`)

Conditional on this actual species in fugitive leakage, venting, evaporation or residual flare exhaust. Measure species quantity and distinguish generation, capture, internal recovery, export and actual release; do not use total VOC or boil-off gas as this species.

- Selected flow: Ethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Propane, to air (`propane_air`)

Conditional on this actual species in fugitive leakage, venting, evaporation or residual flare exhaust. Measure species quantity and distinguish generation, capture, internal recovery, export and actual release; do not use total VOC or boil-off gas as this species.

- Selected flow: Propane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### n-Butane, to air (`butane_air`)

Conditional on this actual species in fugitive leakage, venting, evaporation or residual flare exhaust. Measure species quantity and distinguish generation, capture, internal recovery, export and actual release; do not use total VOC or boil-off gas as this species.

- Selected flow: n-Butane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Ethanol, to air (`ethanol_air`)

Conditional on this actual species in fugitive leakage, venting, evaporation or residual flare exhaust. Measure species quantity and distinguish generation, capture, internal recovery, export and actual release; do not use total VOC or boil-off gas as this species.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Benzene, to air (`benzene_air`)

Conditional on this actual species in fugitive leakage, venting, evaporation or residual flare exhaust. Measure species quantity and distinguish generation, capture, internal recovery, export and actual release; do not use total VOC or boil-off gas as this species.

- Selected flow: Benzene, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Toluene, to air (`toluene_air`)

Conditional on this actual species in fugitive leakage, venting, evaporation or residual flare exhaust. Measure species quantity and distinguish generation, capture, internal recovery, export and actual release; do not use total VOC or boil-off gas as this species.

- Selected flow: Toluene, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### n-Hexane, to air (`hexane_air`)

Conditional on this actual species in fugitive leakage, venting, evaporation or residual flare exhaust. Measure species quantity and distinguish generation, capture, internal recovery, export and actual release; do not use total VOC or boil-off gas as this species.

- Selected flow: n-Hexane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Ammonia, to air (`ammonia_air`)

Conditional on actual ammonia-circuit leakage; reconcile initial/final charge and additions/recovery. Other refrigerants need separate identities and actual mass balances.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources:

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Conditional on actual fossil-fuel combustion or flare conversion; calculate from verified component-specific carbon and actual oxidation or measure directly; separate unburned methane.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Carbon monoxide, to air (`carbon_monoxide`)

Conditional on actual combustion/flare release; use species-specific measurement or supported equipment and operating conditions, not an assumed destruction efficiency.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_direct | Subdivide tanks, substance batches and operating regimes first. Assign receipt/withdrawal energy from actual transfers, holding energy from actual condition-maintenance activity, and shared support from measured causal utilization; reconcile the full facility total before stock-time normalization. Stock-time alone cannot represent pumping or vapor-control work. |  |
| allocate_assets | Use a persistent asset ledger for tank, pump, compressor and cavern. Allocate construction/manufacture and actual renewals by supported whole-life service utilization, with cycle and calendar limits disclosed. Period accounting distributes only the already attributed period share; cumulative shares across customers and periods may not exceed one or reset annually. Unknown life/denominator requires review and sensitivity. |  |
| allocate_losses | Retain actual losses, capture and flare within the storage route. Customer commodity is not a service co-product. Exported recovered material requires actual identity, composition and measured quantity plus a justified allocation convention; do not claim avoided-production credit by default. Internal recovery retains its burden and creates no independent product output. |  |
| allocate_provider | Remove any utilities, maintenance or assets already included in a supplier service inventory. Allocate empty-tank standby, cleaning and terminal support transparently across the supported storage service population; no default price-based split. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_storage | storage | storage_service | Custody and stock-time ledger | substance/batch; composition; mass timestamps; initial/final stock; receipts; withdrawals; losses; phase; temperature; pressure; density; heel/cushion inventory; actual gate timestamps | Use calibrated custody mass meters, weighing or calibrated level/volume with measured batch density. Gas conversion also records absolute pressure, temperature and applicable compressibility. Integrate actual inventory mass over elapsed custody time; resolve events sufficiently to represent filling and withdrawal. Reconcile material balance. | tday | every stock change plus justified monitoring intervals | complete declared custody interval including partial days | declared tanks/vessels/caverns and all operators | per reference flow | calibration; stock records; measured density/composition; event timing; balance reconciliation |
| cp_energy | storage | electricity; heat | Energy meter and operation log | separate kWh and MJ; supply; timestamps; pump/compressor/cooling/heating duty; standby; actual shared allocation | Meter each actual energy carrier separately. Assign transfer versus holding tasks by measured causal activity and preserve both original units. | kWh; MJ | each meter interval and transfer | all actual included support and operation | declared storage facility | per reference flow | meters; duty logs; supplier scope; facility totals |
| cp_fuel | storage | methane_fuel | Fuel component balance | fuel mass; actual gas composition; pilot/heating duty; gas removed from stock; meter; stock difference | Meter actual supplied/consumed methane and each additional fuel component; distinguish stock withdrawal for fuel from commercial stored stock and reconcile carbon fate. | kg | each fuel issue/operating interval | all actual onsite fuel use | actual heating and control equipment | per reference flow | fuel meters; composition analysis; stock records |
| cp_material | storage | nitrogen; water; activated_carbon; lubricant | Individual material ledger | individual substance; supplied mass or volume; stock change; cleaning/control event; actual return/recovery | Measure each named material separately; record composition and any density conversion, reconcile reuse and stock change. | kg; m3 | each supply/use and stock interval | full actual service support | declared equipment and operators | per reference flow | invoices; calibrated meters/scales; stock and maintenance records |
| cp_refrigerant | storage | ammonia_charge; ammonia_air | Refrigerant-specific charge balance | ammonia initial/final circuit charge; additions; recovery; disposal; repairs; measured loss | Reconcile each actual circuit charge and transfer; additions alone do not prove leakage. Assign verified loss to the specific chemical and air compartment; other refrigerants require separate records. | kg | each service event and monitoring period | complete represented refrigeration operation | actual refrigeration circuit | per reference flow | service records; charge weighing; leak tests; mass balance |
| cp_assets | storage | tank_share; pump_share; compressor_share; cavern_share | Persistent asset ledger | asset ID/configuration; actual item or effective cavern m3; construction inventory; actual use; supported lifetime utilization; capacity constraints; prior cumulative fraction; current period share; renewals | Link actual manufacturing/construction inventory to a supported life-service denominator and persistent allocation ledger. Assign only the relevant observed period share, conserve lifetime fractions and report unsupported life estimates and sensitivity. | Item(s); m3 | each allocation and asset update | whole supported life with declared observation period | identified physical containment and equipment | per reference flow | asset/engineering records; utilization evidence; supported life; cumulative share reconciliation |
| cp_waste | storage | spent_carbon; used_oil; tank_washwater | Segregated waste transfer | stream composition; individual kg or m3; event; storage scenario; recipient; treatment; actual regeneration | Weigh or meter each stream separately and identify contamination and treatment. Exclude captured substance counted again as an air release. | kg; m3 | each actual transfer | all attributable cleaning/maintenance | storage and treatment handover | per reference flow | transfer tickets; composition; waste balance; treatment inventory |
| cp_species | storage | methane_air; ethane_air; propane_air; butane_air; ethanol_air; benzene_air; toluene_air; hexane_air; fossil_co2; carbon_monoxide | Component-specific fate ledger | actual composition; vapor/air sampling; temperature; pressure; fill/withdrawal cycles; capture; return; vent; flare; oxidation/slip; pollutant species; mass; compartment; actual method applicability | Measure actual species releases or apply a reviewed method valid for the declared substance, phase and controls. Speciate vapor using valid observed or supported vapor composition; reconcile all destinations and control activity. EPA liquid guidance is not a blanket cryogenic-gas model. | kg | each event plus representative monitored interval | routine, cleaning, abnormal and emergency events represented | all actual storage/control equipment | per reference flow | species analysis; calibrated flow meters; method scope; fate/carbon balance; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| stock_time | storage_service | Integrate actual stock mass in tonnes over elapsed days; the result is actual t*d storage activity. Use event-resolved or justified interpolated stock records and retain partial days. tday maps to t*d; no fixed occupancy or density. | cp_storage; measured mass history; elapsed time | tday activity |  |
| service_normalization | all inventory rows | Assign attributable actual exchanges to the represented homogeneous storage scenario, then divide by its measured stock-time activity. Retain all allocated support and losses. Reference output is exactly 1 tday. | cp_storage; attributable exchange totals | exchange amount per reference flow |  |
| component_fate | methane_air; ethane_air; propane_air; butane_air; ethanol_air; benzene_air; toluene_air; hexane_air; fossil_co2; carbon_monoxide | Use species-specific measured composition and destination balances. Internal return is not release; captured material and destruction are not both emitted. Derive combustion products only from actual feed carbon and supported oxidation/slip, recording method and uncertainty. | cp_species; cp_fuel; measured control performance | individual chemical release per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_basis | storage_service | Require measured stock-time and composition/thermodynamic configuration. Distinguish throughput, capacity and actual custody mass; do not infer gas mass from unqualified standard volume. | cp_storage |
| quality_species | all inventory rows | Identify every actual loss species and control fate; aggregated VOC/BOG remains unresolved until speciated. Record method applicability and uncertainty; no universal leak, flare or evaporation factor. | cp_species; epa-tanks-faq |
| quality_assets | tank_share; pump_share; compressor_share; cavern_share | Support life/service denominator and conserved allocation ledger; unknown asset life or upstream inventory prevents a complete lifecycle claim. | cp_assets |
| quality_representative | all inventory rows | Disclose facility, period, substance/phase, actual support coverage, extreme events, omissions and identity gaps. Do not transfer a liquid organic method to gas/cryogenic or inorganic scenarios without independent evidence. | cp_storage; cp_energy; cp_species |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_reference | Require unique storage_service output equal to 1 tday, corresponding to one t*d of measured mass-time and explicit substance/conditions. Reject nominal capacity, throughput, billable time alone and unqualified volume as substitute denominator. |  |
| validate_balance | Reconcile custody stock, receipts, withdrawals, heel/cushion inventory and losses. Separate onsite consumed fuel, commodity production, liquefaction/regasification, transport and storage-only support without omissions or duplication. |  |
| validate_species | Check every actual emission, vent/BOG route and control destination with component identities. Reject VOC, gases and boil-off-gas aggregate selected flows; do not assume zero loss or perfect flaring. | epa-tanks-faq |
| validate_lifecycle | Check asset cumulative shares at most one, justified life/service denominators, actual upstream scope and provider overlap. Identity/measurement/factor gaps stay explicit; draft methodology and count checks are not publication approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | bulk_storage_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A specified bulk-storage stage of a traceable supply chain with compatible substance, phase, conditions and custody gates |
| excluded_use | Complete commodity footprint; production liquefaction/regasification/transport; unqualified oil/wine/gas pooling; implied safety or methodology approval |
| required_metadata | All reference qualifiers; measured stock-time; exact unit mapping; actual routes and species; asset/provider coverage; loss/replacement responsibility; upstream versions; allocation |
| required_quality_disclosure | Identity and measurement gaps; vapor-method limits; unmeasured species/control efficiency; density uncertainty; asset life and missing upstream data |
| update_trigger | Changed substance/composition/phase; temperature/pressure; containment; fill cycles; loss/control route; utility supply; asset life or custody scope |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-bulk-storage | official_guidance | UNSD CPC 3.0 code 67220 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67220 | Bulk liquid and gas storage including oil/products/wine; classification scope only, no mass-time denominator or factors |
| epa-tanks-faq | official_guidance | US EPA AP-42 Chapter 7: TANKS Software Frequent Questions, heated tanks, speciated emissions, nitrogen blanket, controls, cleaning and variable liquids; current web statement read 2026-10-23. https://www.epa.gov/air-emissions-factors-and-quantification/ap-42-chapter-7-tanks-software-frequent-questions | Organic-liquid vapor properties/composition and controls require explicit conditions; no quantitative factor, gas/cryogenic model or generic zero-loss claim adopted |
