---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-storage-and-warehousing-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other storage and warehousing services

## 1. Scope and Applicability

This PCR covers grain storage and other nonrefrigerated storage/warehousing, including packaged goods, dry bulk grain and self-storage goods, when actual net stored mass and residence time are known. Facility, commodity, moisture, packaging and security requirements define separate scenarios rather than one generic warehouse average. The CPC 67290 note explicitly includes grain storage and other storage/warehousing. [Source: `un-cpc3-67290`]

Exclude refrigerated/frozen storage (67210), bulk liquid/gas storage (67220), goods manufacture, separately sold drying/processing, freight transport and separately sold cargo handling. Include receipt, put-away, internal relocation, preservation and dispatch only to the extent attributable to the storage contract. Empty rented area without measured stored mass cannot become a mass-time service through an invented loading density. Grain aeration is an actual conditional preservation operation; refrigerated storage remains excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-storage-and-warehousing-services |
| classification_refs | CPC 3.0 67290 |
| covered_products | Nonrefrigerated storage of grain and other goods, with measured mass and duration and separately qualified scenarios |
| excluded_products | Refrigerated storage; bulk liquid/gas storage; goods processing; line-haul freight; empty-area service without mass evidence |
| representative_product | 1 tonne-day of specified nonrefrigerated warehousing |
| production_route | Receipt and weigh → put away → actual storage/preservation and internal handling → release and inventory reconciliation |
| market_state | Contracted custody service for identified goods under documented conditions |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Preserve identified goods in the declared nonrefrigerated store |
| How much | 1 tonne-day of measured net stored mass integrated over actual residence time |
| How well | Declared commodity-specific moisture, temperature, humidity, safety/security and acceptance conditions; no universal storage limit invented |
| How long or cycle | Actual elapsed custody interval between receipt and release; partial days retained |
| reference_flow_link | `storage_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Nonrefrigerated warehousing service |
| Reference flow property | Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` |
| Reference unit group | Units of mass*time `59f191d6-5dd3-4553-af88-1a32accfe308` |
| Reference unit | tday |
| Required qualifiers | site and reporting period; commodity and hazard class; net-mass/moisture basis; packaging state; measured stock changes; receipt/release timestamps; temperature/humidity/ventilation; pest control and food-safety requirements; security level; throughput and internal movements; area/rack occupancy; loss cause and fate; asset scope; subcontract boundary; electricity region/voltage |

tday is the explicit display/parser alias for the verified unit t*d: one tonne stored for one day, equivalently 1,000 kg × 24 h. The archive lists t*d with conversion to its kg*a reference; the alias is not claimed as a new database unit. Integrate batch net mass over actual storage intervals and retain partial days and stock changes. No default conversion from pallet, m3, floor area, fee, inbound throughput or internal move count to tday. Equal mass-time does not establish equivalent preservation function across goods.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `storage_mass_time` | reference product | Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` | tday | Collect cp_stock batch mass and timestamps; integrate actual net stored mass over residence time. Separate commodities and storage conditions. |
| `no_density_default` | reference product | Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` | tday | Pallet/volume/area contracts require measured contents mass and time. Do not infer mass using a generic density or rated capacity; internal moves do not create additional stored mass-time. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified goods accepted into the declared warehouse; prior manufacture and transport remain upstream context, not new storage production |
| starting_condition_role | foreground_start |
| product_classification_scope | Other nonrefrigerated storage and warehousing, including grains |
| recursive_input_rule | Outsourced same-category custody enters as a traceable service input with supplier scope; do not duplicate its utilities, facilities and handling |
| upstream_dataset_requirement | Verified energy, material, asset manufacture/retirement and treatment datasets; explicit exclusions and omissions |
| disclosure | Custody interval; occupied space; commodity/moisture basis; preservation route; handling split; goods loss; asset denominator; missing upstream coverage |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_storage` | Include attributable receipt/release checking, in-store movements, lighting, ventilation, humidity control, cleaning, maintenance and actual preservation. Grain aeration depends on ambient conditions and moisture; it is not mandatory for all grain. | fao-grain-aeration |
| `boundary_energy` | Screen actual lighting, space heating, equipment drives, charging and control loads. The EIA building survey is contextual evidence only; no national energy intensity or end-use share is imposed on a site. | eia-warehouse-energy |
| `boundary_assets` | Include allocated manufacture, maintenance and retirement of actual building, racks and handling/preservation equipment. Declare whether building upstream inventory already includes components to prevent double counting. |  |
| `boundary_atomic` | Add every actually present separate fuel, refrigerant, pesticide formulation, maintenance part, packaging component, pollutant and waste as one atomic exchange. This list is not permission to omit an actual exchange; absent operations require documented applicability. |  |

## 6. Process Inventory Structure

Common custody operations are modelled once below. Grain stores may use aeration/pest treatment; pallet warehouses may use racking and forklifts; personal self-storage needs actual contents mass. These scenarios cannot be pooled without a declared composition and a justified allocation. Customer goods remain in custody and are not service-production inputs or manufactured outputs.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| storage | Receive, store, preserve and release goods | required | Actual warehouse scenario and each conditional row | foreground_production | per reference flow |

### Process: Receive, store, preserve and release goods (`storage`)

#### Inputs

##### Product flows

###### Low-voltage alternating current electricity (`electricity`)

Meter actual warehouse lighting, controls, ventilation, aeration, humidity control and charging. Exclude separately metered refrigeration. Record region and supply voltage.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Diesel fuel (`diesel`)

Conditional on actual diesel forklift or standby generation; reconcile fuel issue/return and stock changes, including attributable idle operation.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Natural gas (`natural_gas`)

Conditional on actual warehouse heating needed for the declared storage condition. Record composition and meter basis; no assumed volume-to-mass factor.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Tap water (`water`)

Actual attributable cleaning and humidity-control water; separately identify non-consumed firefighting reserve and unrelated sanitary use.

- Selected flow: Tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Hydraulic lubricating oil (`hydraulic_oil`)

Conditional on actual maintenance make-up/replacement for identified handling equipment; distinguish stock, additions and drained oil.

- Selected flow: Hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Low-density polyethylene stretch film (`stretch_film`)

Conditional on new film consumed by the warehouse; distinguish customer-owned incoming wrapping and measure issued/returned mass.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Sawn-wood pallet (`wood_pallet`)

Conditional on actual warehouse-supplied wooden pallet; allocate documented reuse and repair rather than charging a new pallet for each internal move.

- Selected flow: Sawn-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Aluminium-phosphide fumigation tablet (`aluminium_phosphide`)

Only where actually used in permitted grain-storage pest treatment; record exact formulation and active-ingredient content, application record, recovery and specialist service boundary. Measure the whole formulated-tablet mass and record its active fraction; never treat formulation mass as pure aluminium phosphide. No mandatory chemical or dosage is prescribed.

- Selected flow: Aluminium-phosphide fumigation tablet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Non-refrigerated warehouse building (`building`)

Production and retirement share of the actual building, with construction scope and documented life/area-time utilization; exclude rack and equipment burdens if separately modelled.

- Selected flow: Non-refrigerated warehouse building
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Steel pallet-storage rack (`rack`)

Conditional on actual rack use; retain configuration, load capacity, manufacturing inventory, maintenance and supported lifetime utilization.

- Selected flow: Steel pallet-storage rack
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Counterbalanced forklift (`forklift`)

Actual powertrain/model production share using operating-hour ledger and supported lifetime hours; no default power, equipment mass or life.

- Selected flow: Counterbalanced forklift
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Grain-aeration fan (`grain_fan`)

Conditional on actual grain aeration; allocate manufacturing share from actual use and lifetime denominator, separately from its metered electricity.

- Selected flow: Grain-aeration fan
- Flow property / unit: Number of items / item
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

###### Nonrefrigerated warehousing service (`storage_output`)

The completed observed storage activity integrated from batch records; count actual stored mass-time once, not each internal relocation.

- Selected flow: Nonrefrigerated warehousing service
- Flow property / unit: Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` / tday
- Amount rule: 1 tday
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

##### Waste flows

###### Discarded low-density polyethylene stretch film (`waste_film`)

Segregate actual discarded film; record treatment and contamination, without a default recycling credit.

- Selected flow: Discarded low-density polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded sawn-wood pallet (`waste_pallet`)

Record actual irreparable pallet mass and destination; repair stock or returned circulating pallets are not waste.

- Selected flow: Discarded sawn-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Waste hydraulic oil (`waste_oil`)

Conditional on segregated drained maintenance oil, with treatment evidence and no overlap with oil still held in equipment.

- Selected flow: Waste hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent aluminium-phosphide fumigation tablet residue (`spent_fumigant`)

Conditional on actual use of the tablet and generated residue; record post-reaction composition, unreacted active ingredient, measured mass and specialist treatment destination. Do not presume residue harmless or duplicate phosphine releases.

- Selected flow: Spent aluminium-phosphide fumigation tablet residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Warehouse cleaning wastewater (`wastewater`)

Actual collected cleaning wastewater sent to treatment; identify contaminants and distinguish water evaporation and stormwater.

- Selected flow: Warehouse cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spoiled wheat grain (`spoiled_wheat`)

Only in an actual wheat scenario with losses; other goods require their own specific loss flow. Record custody, cause, fate and treatment, without treating moisture loss as spoiled dry matter.

- Selected flow: Spoiled wheat grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Actual onsite fossil combustion only, from measurement or a documented fuel-specific carbon balance; upstream fuel supply counted separately and once.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Carbon dioxide, biogenic, to air (`biogenic_co2`)

Conditional on actual grain respiration or biological deterioration supported by measurement/mass balance; do not assume zero or carbon neutrality.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Phosphine, to air (`phosphine_air`)

Conditional on verified grain fumigation release; retain treatment formulation, containment, measured recovery/release and compartment. Chemical input mass is not release mass.

- Selected flow: Phosphine, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_tasks` | Use direct meters and task records first. Handling energy follows actual lifts, hours and load; preservation energy follows measured zone/commodity use. Mass-time allocation is allowed only within equivalent declared conditions when the causal basis is justified. |  |
| `allocate_space` | Common lighting/building burdens may use measured occupied area-time where causal, then normalize on measured mass-time. Keep standby/empty-space burdens attributable to the operating storage system; do not erase low occupancy by counting only powered hours. |  |
| `allocate_assets` | Attribute each asset by actual use over a documented lifetime utilization denominator, reconcile previous/current shares and cap cumulative attribution at one full asset life. Rented assets and outsourced service burdens require the same boundary reconciliation. |  |
| `allocate_goods_loss` | Goods ownership and embodied manufacture remain separate from the service reference. Record actual loss, moisture change, customer/operator responsibility and treatment. Additional replacement-production scenarios must be separately declared; no automatic credit or full inventory of all stored goods is assigned to storage. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stock | storage | storage_output | stock_time_record | batch; commodity; measured net mass; moisture basis; receipt/release time; stock corrections; condition log; losses | Calibrated weighing and inventory reconciliation with timestamped batch balances. Integrate net tonnes over elapsed days; retain partial intervals and actual stock changes. Do not add output for internal moves. | tday | each batch event | full declared custody/reporting period | one commodity/condition scenario | per reference flow | scale calibration; stock ledger; time logs |
| cp_utilities | storage | electricity; diesel; natural_gas; water | meter_record | row; meter readings; unit; stock; task; zone; temperature; humidity; occupancy; operating hours | Submeter or measured task attribution reconciled to supplier bills and stock; keep utilities separate. Fuel density/composition conversion requires actual evidence. | row unit | matched billing/task period | same period as stock integral | storage and actual support | per reference flow | calibration; bills; zone records |
| cp_materials | storage | hydraulic_oil; stretch_film; wood_pallet; aluminium_phosphide | issue_return_record | specific material; formulation; issued/returned mass; reuse; repair; treatment record; task | Weigh actual material issue/return and record stock/reuse allocation. For pest treatment retain exact active ingredient, actual authorization and service coverage; no dosage default. | kg | each issue and period | same period as stock integral | actual warehouse materials | per reference flow | issue record; stock and reuse ledger |
| cp_assets | storage | building; rack; forklift; grain_fan | asset_record | asset ID; configuration; manufacturing scope; construction quantity; lifetime utilization; actual use; prior shares; maintenance; retirement | Reconcile asset register, construction scope, occupied area-time and hour meters with supported lifetime denominators and supplier coverage. | item | asset change and period | asset life plus reporting period | used building and equipment | per reference flow | register; building bill; denominator evidence |
| cp_waste | storage | waste_film; waste_pallet; waste_oil; spent_fumigant; wastewater; spoiled_wheat | waste_record | row; mass; composition; contamination; destination; loss cause; custody; treatment; date | Weigh segregated streams and reconcile disposal manifests; distinguish customer goods, moisture loss and operator consumables. | kg | each waste event | same period as stock integral | attributable storage losses and waste | per reference flow | scale; manifests; responsibility records |
| cp_emissions | storage | fossil_co2; biogenic_co2; phosphine_air | emission_record | species; source; compartment; activity; measurement; carbon balance; formulation; recovery; model/factor source | Measure the actual species or apply a traceable cited site-specific model and activity. Keep respiration, combustion and treatment distinct; do not equate chemical input with emitted mass. | kg | test and activity period | same period as stock integral | onsite actual sources | per reference flow | tests; model and factor documentation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stock_integral` | storage_output | For every batch interval multiply actual net mass in tonnes by elapsed days, then sum intervals once. Reconcile ingress, egress, moisture change and stock corrections. Divide attributable period exchanges by the resulting number of tday reference flows. | cp_stock | per reference flow |  |
| `calc_utilities` | electricity; diesel; natural_gas; water | Apply allocate_tasks and allocate_space to metered period amounts, retaining standby and shared scope; normalize on cp_stock. No energy-from-floor-area or pallet-mass default. | cp_utilities; cp_stock | per reference flow |  |
| `calc_asset_share` | building; rack; forklift; grain_fan | Allocate supported asset production/retirement inventory by actual-use/lifetime-use share; cap cumulative life attribution and normalize the period share on cp_stock. Unknown life or utilization remains a stated review gap. | cp_assets; cp_stock | per reference flow |  |
| `calc_emission_species` | fossil_co2; biogenic_co2; phosphine_air | Use observed species masses or a cited method with measured activity and actual capture/recovery. Record carbon origin and compartment and preserve measurement units; no default respiration, fumigation release or carbon-neutral assumption. | cp_emissions; cp_stock | per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_stock | storage_output | Mass/time ledger must reconcile batch events and inventory; moisture basis cannot silently switch from wet to dry. No mass inference from pallet count or rated capacity. | cp_stock |
| dq_preservation | all inventory rows | Retain actual commodity, condition and period coverage; record failed preservation and losses rather than treating all received goods as successfully preserved. | cp_stock; condition records |
| dq_assets | building; rack; forklift; grain_fan | Require supported lifetime/utilization and component boundaries; disclose uncertainty and missing upstream burdens. | cp_assets |
| dq_identity | all inventory rows | Confirm exact flow/property/unit and Chinese names before adoption. Atomic missing UUIDs remain explicit; name similarity or a successful parser does not prove database identity. | Direct-read evidence and identity gaps |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_mass_time` | Require one storage_output product flow of 1 tday linked to measured mass-time, qualifiers and custody intervals. Reject throughput, internal move counts, empty area and tonne-kilometres as reference substitutes. |  |
| `validate_scope` | Check commodity-specific grain/general warehouse route. Exclude refrigerated and bulk liquid/gas storage; additional separately sold handling and processing must have reconciled boundaries. | un-cpc3-67290 |
| `validate_atomicity` | Each present exchange has one specific identity, collection record and same reference denominator. Verify asset/manufacturing overlap, custody loss and chemical recovery; disclose every missing UUID/factor before complete lifecycle claims. |  |
| `validate_unit_export` | Treat tday only as the local display alias of the formal Mass*time unit t*d: 1 tday = 1 t*d. Export the formal unit t*d, retaining the same physical quantity and reference denominator. If a receiving system requires the unit-group reference kg*a, apply the verified unit-group conversion once and retain its factor and provenance; never relabel an unchanged number as kg*a or normalize an already per-reference quantity again. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | storage_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified storage component in a traced product or logistics chain with matching commodity, conditions and duration |
| excluded_use | Universal warehouse average; refrigerated or tank storage; goods manufacture or complete product footprint; area-only rental equivalence |
| required_metadata | Reference qualifiers; commodity and moisture basis; stock-time records; occupancy; throughput; custody/supplier boundaries; asset denominator and upstream dataset identities |
| required_quality_disclosure | Missing UUIDs; mass/time uncertainty; preservation and loss performance; asset lifetime sensitivity; upstream omissions; allocation and emission-method limits |
| update_trigger | Change of goods, conditions, warehouse configuration, preservation treatment, energy supply, utilization denominator or custody contract |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-67290 | official_guidance | UNSD CPC Version 3.0, subclass 67290 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67290 | Grain and other warehouse scope, not environmental factors |
| fao-grain-aeration | handbook | FAO, Grain storage techniques, Bulk storage: Aeration, Ambient Aeration. https://www.fao.org/4/t1838e/T1838E1b.htm | Conditional ambient aeration, moisture/temperature and actual fan management; no numerical default adopted |
| eia-warehouse-energy | official_guidance | US EIA, 2018 CBECS: Principal Building Activities, Warehouse and Storage, Energy use. https://www.eia.gov/consumption/commercial/pba/warehouse-and-storage.php | Warehouse lighting/heating/equipment energy screening; US survey context, not site factor or full lifecycle method |
