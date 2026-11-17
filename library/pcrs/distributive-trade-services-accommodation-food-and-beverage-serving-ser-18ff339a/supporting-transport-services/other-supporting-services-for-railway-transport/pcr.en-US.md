---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-railway-transport
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other supporting services for railway transport

## 1. Scope and Applicability

Railway passenger terminals, railway infrastructure and related facilities, non-handling cargo terminals, technical back-up points, railway fuel stops and other specifically identified railway-support functions excluding intermediation. Each dataset selects one function and a physically defined completed service block. Different blocks are separate scenarios, not equivalent outputs merely because both use a count unit. [Source: `un-cpc-rail-support`]

Exclude containerized/non-containerized freight and passenger baggage handling (67110/67190), railway pushing/towing or shunting (67310), passenger/freight transport, passenger/freight intermediation (85610/85630), rolling-stock manufacture/major overhaul and unrelated retail/property activities. Ticket sale by a terminal is included; independent booking brokerage is not. Left-luggage custody is distinct from baggage handling. A bundled terminal contract must separate excluded activities instead of assigning them zero burdens. [Source: `un-cpc-rail-support`]

| service_family | Counted block | Mandatory physical definition |
| --- | --- | --- |
| passenger_terminal | One completed defined passenger-terminal transaction or visit | Fix passenger count, ticket/assistance/left-luggage function, station footprint, actual duration and acceptance. Left-luggage scope includes identified pieces/mass and custody time; exclude baggage loading/unloading. |
| infrastructure | One completed defined access passage or facility-availability block | Fix line/segment, exact length, train/class/axle load, passage or availability duration, operational limits, signalling and asset coverage. Select one passage or one timed availability block per dataset; never equate them. |
| freight_terminal | One completed defined non-handling terminal-support transaction | Fix train/consignment population, access/administrative function, actual dwell and terminal footprint; exclude cargo loading/unloading and shunting. |
| technical_support | One completed defined technical-support task | Fix work order, train/equipment configuration, actual checks/facilities provided, duration and signed completion; major rolling-stock overhaul/manufacture is outside this support task. |
| refuelling_stop | One completed defined train-refuelling transaction | Fix actual fuel type and metered transferred mass/volume plus density, connected train, duration and delivery gate; count only facility overhead here, not fuel consumed later by the train. |
| other_support | One completed specifically named railway-support function | Provide its physical extent, duration, acceptance and non-intermediation boundary using the same measured protocols; an unspecified other-service invoice is unavailable for this methodology. |

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-railway-transport |
| classification_refs | CPC 3.0 67390; exact |
| covered_products | Specified non-intermediation railway-support service blocks across the declared service families |
| excluded_products | Rail transport, shunting, cargo/baggage handling, brokerage, manufacture/major overhaul and unrelated commerce |
| representative_product | One completed non-handling freight-terminal support transaction for a specified arriving train and recorded terminal dwell |
| production_route | Define function/extent → operate actual relevant facility and support → record completed service with its accepted physical extent |
| market_state | Accepted measurable support function; fee, ticket value or fuel resale is not the functional quantity |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver one precisely specified railway-support function using the declared facility |
| How much | One completed block with the service-family-specific counted object and physical extent required by validate_family_passenger_terminal, validate_family_infrastructure, validate_family_freight_terminal, validate_family_technical_support, validate_family_refuelling_stop or validate_family_other_support |
| How well | Actual access, availability, custody or technical acceptance requirements fulfilled and evidenced; no universal quality grade |
| How long or cycle | Explicit start/end timestamps and actual duration of the defined block; include attributable standby and retries |
| reference_flow_link | `support_block` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed specified railway support service block |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | service family and one specific function; block definition and exact physical extent; station/line/terminal/technical point/fuel-stop ID; start/end interfaces and timestamps; actual served passenger/train/consignment population; actual duration; track length and train/axle configuration when relevant; cargo/baggage exclusion; transferred customer fuel/water/electricity; operator/provider split; energy supply and traction separation; facility and asset scope; actual quality/safety specification and completion; period and geography |

Item(s) counts one accepted defined case. Declare the actual train/passenger count, duration, length, supplied fuel quantity or baggage-custody quantity applicable to that case; none is inferred from a fee. Unlike functions or extent values cannot be pooled, compared or converted by a generic service factor. An availability block requires exact capacity and duration rather than an unspecified facility-year. A freight-terminal block is not a tonne-kilometre of transport.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| block_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count accepted blocks with cp_activity, preserving physical extent. Subtasks/retries and a second invoice do not create another whole output. |
| unit_separation | support_block | Number of items | Item(s) | Retain time, track length, passenger/train counts and delivered-fuel quantities as explicit extent measurements; no cross-family unit equivalence. |
| fuel_custody | diesel | Mass | kg | Use actual site-consumed fuel; volume-to-mass requires traceable grade/batch density and temperature. Customer fuel dispensing is separately metered pass-through custody. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified support task/facility block with existing train, passengers and goods; facility and utility upstream burdens are retained |
| starting_condition_role | foreground_start |
| product_classification_scope | Declared railway-support function excluding transport, shunting, handling and intermediation |
| recursive_input_rule | Subcontracted same-function support enters once with exact physical extent and upstream inventory; remove overlapping operator resources/assets |
| upstream_dataset_requirement | Actual facility energy, consumables, relevant infrastructure/equipment construction, renewal and waste-treatment inventories |
| disclosure | Service-family block and extent, gates/times, excluded services, customer-energy custody, provider split, initial/renewal assets, allocation and evidence gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_functions | Include only actual operations needed for the declared block: passenger terminal administration/custody, infrastructure access/signalling, non-handling freight-terminal support, technical-point support or fuel-stop operation. Select and document the real function rather than assuming every block uses every facility. | un-cpc-rail-support |
| boundary_traction | Separate traction electricity delivered to trains from support-facility electricity and identify actual distribution losses. Metered customer traction is a distinct energy account; UK billing practice is evidence of this interface, not a global tariff or emission factor. | networkrail-metering |
| boundary_custody | Customer fuel, train water and baggage/goods remain separately metered custody deliveries; they do not become site combustion or consumed commodity production merely by passing through the facility. Integrated fuel/energy-supply datasets retain their physical input/output exchanges and upstream burdens separately; this support-only service cannot claim that entire integrated footprint. |  |
| boundary_actual | Include actual attributable standby, failed attempts, cleaning, maintenance, utilities and construction shares. Screen every real fuel, refrigerant, pollutant species and waste stream; add a specific row when present. No assumed zero burden for unlisted operations or upstream gaps. |  |

## 6. Process Inventory Structure

The single process is instantiated for one service-family block; apply the activity-specific conditions in section 1. Rows are conditional examples of individual exchanges. Track construction and actual renewals must have non-overlapping boundaries. Diesel, refrigerant and emissions are not presumed for an entirely electric/digital block. Every other actual fuel grade, maintenance material, pollutant or waste requires its own named exchange; an aggregate energy, NOx, VOC or waste label is not a selected flow.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| support | Provide the specified railway-support service block | required | One selected function and fixed physical extent; individual row conditions apply | foreground_production | per reference flow |

### Process: Provide the specified railway-support service block (`support`)

#### Inputs

##### Product flows

###### Electricity, alternating current, railway-support facility supply (`electricity`)

Meter actual station lighting, lifts, IT, signalling, technical equipment and refuelling pumps according to the selected service. Exclude traction electricity delivered to trains; reconcile any distribution losses assigned to infrastructure operation separately.

- Selected flow: Electricity, alternating current, railway-support facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Purchased space heat (`heat`)

Conditional on actual purchased station/facility heating; measure delivered heat and occupied/service-area attribution. Do not add the supplier boiler combustion again.

- Selected flow: Purchased space heat
- Flow property / unit: Energy / MJ
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Diesel fuel, unblended, facility operation (`diesel`)

Conditional on actual support-facility generators or maintenance machines burning this fuel. Fuel merely dispensed into a customer locomotive is custody delivery, not this consumption. Other fuels/blends require distinct rows.

- Selected flow: Diesel fuel, unblended, facility operation
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources:

###### Tap water (`water`)

Conditional on actual passenger facilities, cleaning or technical support; record train water delivery separately from facility consumption and preserve the supplier boundary.

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

###### Thermal ticket paper (`ticket_paper`)

Conditional on actual physical ticket printing; meter issued/unused paper and printing waste. A digital transaction requires no invented paper.

- Selected flow: Thermal ticket paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Sodium carbonate cleaning agent (`cleaner`)

Conditional on this specific cleaning substance actually used; formulated cleaners need composition and their own specific product identity.

- Selected flow: Sodium carbonate cleaning agent
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

Conditional on actual support-equipment maintenance; reconcile fresh use, returned stock and collected used oil. Do not include locomotive fuel or lubrication outside the selected support service.

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

###### Railway rail, steel (`rail_steel`)

Conditional on actual rail renewal attributable to the infrastructure service. Record grade, section, issued/removed mass and assigned service interval; exclude replacement already embedded in the track upstream dataset.

- Selected flow: Railway rail, steel
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_maintenance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`
- Sources:

###### Crushed-stone railway ballast (`ballast`)

Conditional on actual ballast addition/renewal; weigh fresh and reused stone separately, identify composition, and exclude already embedded renewal.

- Selected flow: Crushed-stone railway ballast
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_maintenance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`
- Sources:

###### Concrete railway sleeper (`sleeper`)

Conditional on actual concrete-sleeper renewal; identify design and count actual replacements. Timber/steel sleepers require separate rows, not substitution under this name.

- Selected flow: Concrete railway sleeper
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_maintenance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`
- Sources:

###### Configured railway station building (`building_share`)

Conditional on actual station/terminal building use; attribute supported construction share by identified floor area, whole-life service/occupancy and actual block use.

- Selected flow: Configured railway station building
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured railway track section (`track_share`)

Conditional on infrastructure operation; identify exact section, gauge, construction components and length. Keep initial construction separate from separately recorded actual renewals; do not count a full line per passage.

- Selected flow: Configured railway track section
- Flow property / unit: Length / m
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured railway signalling controller (`signal_share`)

Conditional on actual controller use; support its manufacturing share with asset ID and measured utilization, distinguishing shared signalling scope from track construction.

- Selected flow: Configured railway signalling controller
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured railway refuelling dispenser (`pump_share`)

Conditional on actual railway-stop fuel dispensing; specify dispenser and its manufacturing inventory. Customer locomotive manufacture is outside this asset.

- Selected flow: Configured railway refuelling dispenser
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### 1,1,1,2-Tetrafluoroethane, refrigerant (`hfc_charge`)

Conditional on actual HFC-134a circuit servicing for support-facility cooling. Other refrigerants require separately named chemical rows.

- Selected flow: 1,1,1,2-Tetrafluoroethane, refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources:

#### Outputs

##### Product flows

###### Completed specified railway support service block (`support_block`)

One completed block fixes exactly one function, physical extent and acceptance interface from the service-definition table. It is not an abstract interchangeable railway-service unit.

- Selected flow: Completed specified railway support service block
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

###### Used mineral lubricating oil (`used_oil`)

Conditional on actual segregated removed oil; weigh and identify treatment. Do not count the same collected oil as an environmental release.

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

###### Discarded thermal ticket paper (`waste_paper`)

Conditional on actual ticket-stock waste from the support operator; weigh separately, identify treatment and do not assume recyclability.

- Selected flow: Discarded thermal ticket paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Removed contaminated railway ballast (`waste_ballast`)

Conditional on actual removed ballast; characterize contamination and distinguish reused material, treatment and final waste; no automatic displacement credit.

- Selected flow: Removed contaminated railway ballast
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Sanitary sewage (`sewage`)

Conditional on actual station/facility sanitary discharge; measure or reconcile water balance and actual treatment. Fuel-contaminated washwater needs another specific stream, not this row.

- Selected flow: Sanitary sewage
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

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Conditional on actual support-facility fossil combustion; use measured release or verified fuel/carbon/oxidation evidence. Do not turn customer fuel deliveries or train traction into facility emissions.

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

###### n-Hexane, to air (`hexane_air`)

Conditional on actual n-hexane vapor release in a fuel-transfer/maintenance activity; quantify the specific species, control route and air compartment. Other actual species require separate rows; total VOC is not n-hexane.

- Selected flow: n-Hexane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### 1,1,1,2-Tetrafluoroethane, to air (`hfc_air`)

Conditional on actual HFC-134a leakage; reconcile circuit additions, initial/final charge and recovered material. Purchased refrigerant is not automatically emitted.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_functions | Subdivide service families and physical extent first. Allocate shared electricity/heat/support with measured load-time, occupied area-time, facility use and block logs; reconcile all uses and retain standby. Do not divide unlike passenger visits, train passages and refuelling transactions by one combined count. |  |
| allocate_assets | Use persistent construction/manufacturing ledgers and supported whole-life service denominators. Track passenger-floor use, infrastructure train/axle use and technical/fuel equipment use separately. Period accounting distributes only the already attributed period share; cumulative fractions across all blocks/customers/periods cannot exceed one or reset annually. Unknown life/denominator requires review and sensitivity. |  |
| allocate_renewals | Distinguish initial track/facility construction from separately recorded actual renewal steel, ballast and sleepers. Use either an upstream inventory already covering a renewal or explicit renewal rows for that same activity, never both. Separate actual recovered materials and no automatic recycling credit. |  |
| allocate_scope | A provider inventory replaces its covered resources/assets once. Customer fuel/energy, ticket revenue, custody goods and passenger transport are not co-products of this support count. Allocate a true service bundle by traced component work, preserving the whole bundle only if its exact components and extent are fixed. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | support | support_block | Accepted service/block ledger | service family; exact function; physical extent; passengers/trains/consignments; baggage pieces/mass and custody time; track segment/length; axle class; availability capacity/time; work order; fuel delivery; gates/timestamps; acceptance | Verify the completed function against the matching validate_family_* rule; record actual extent and separate component/whole bundle identities. Count only homogeneous accepted blocks and retain failed work in their inventory. | Item(s) | each block | full defined block and allocated support | declared facilities and providers | per reference flow | work orders; station/access logs; custody records; signed acceptance; exact population reconciliation |
| cp_energy | support | electricity; heat | Energy and customer-delivery ledger | actual kWh and MJ separately; meter; voltage/region; times; task; measured load; standby; traction delivery and actual distribution losses; provider coverage | Submeter actual support functions, reconcile building/signalling/pump utilities and customer traction separately; allocate shared support from measured causal use, not ticket price. | kWh; MJ | each task/meter interval | full block and assigned standby | actual facilities | per reference flow | meters; task/duty logs; supplier/customer energy reconciliation |
| cp_fuel | support | diesel | Consumed-fuel versus delivered-fuel balance | fuel grade; facility consumption; generator/machine duty; receipts/stocks; metered customer transfers; density/temperature; actual losses | Reconcile facility fuel consumption independently from customer dispensing and stored fuel. Use calibrated mass or traceable measured density conversion; keep customer-delivery supply outside site combustion. | kg | each use/transfer and stock period | all actual included consumption | facility fuel equipment | per reference flow | tank/dispensing meters; stock balance; actual duty logs |
| cp_material | support | water; ticket_paper; cleaner; lubricant | Specific-material ledger | individual material; actual kg or m3; issued/returned stock; function; composition; customer water transfer; event | Measure each named exchange separately and reconcile stock/returns; separate custody water and actual consumption. Add every other present chemical/material individually. | kg; m3 | each issue/use and monitoring period | all actual support work | included sites and operators | per reference flow | meters/scales; purchase and maintenance logs; material balance |
| cp_maintenance | support | rail_steel; ballast; sleeper | Identified infrastructure renewal ledger | section; renewal event; rail grade/mass; stone mass; sleeper design/count; removed/reused quantities; original asset scope; service interval | Weigh steel/ballast and count concrete sleepers by actual work order. Reconcile initial construction and upstream renewal coverage; distribute only the supported service share. | kg; Item(s) | each renewal event | actual renewals attributable to represented service | identified rail sections | per reference flow | work orders; weighing; component counts; upstream boundary; allocation ledger |
| cp_assets | support | building_share; track_share; signal_share; pump_share | Persistent construction/equipment ledger | asset ID; m2/m/items; configuration; construction/manufacture inventory; actual use; whole-life utilization denominator; prior cumulative shares; period share; sensitivity | Match the real asset and supported service life to the selected function. Keep initial construction/renewal scopes separate; conserve cumulative allocation across all users/periods. Unknown denominator requires explicit review. | m2; m; Item(s) | each allocation and asset update | supported whole life and declared observation period | actual selected facilities/assets | per reference flow | engineering/asset records; actual use; supported life; cumulative conservation |
| cp_refrigerant | support | hfc_charge; hfc_air | HFC-134a circuit balance | circuit; initial/final charge; additions; recovery; disposal; leak test; function share | Reconcile actual chemical-specific charge transfers and supported leakage; other refrigerants are separate identities and balances. | kg | each service event and monitoring period | represented facility cooling | actual circuit | per reference flow | service records; charge weighing; leak tests; balance |
| cp_waste | support | used_oil; waste_paper; waste_ballast; sewage | Segregated waste/treatment ledger | individual stream; actual kg or m3; contamination; service/renewal event; recipient; treatment; recovered quantities | Weigh each solid/oil waste and meter sanitary discharge separately. Keep contaminated washwater and other actual wastes distinct; record treatment and no automatic recovery credit. | kg; m3 | each transfer/discharge period | all actual attributable wastes | operator and treatment gate | per reference flow | weigh/transfer tickets; waste analysis; water balance; treatment inventory |
| cp_release | support | fossil_co2; hexane_air | Species-specific emission ledger | specific species; kg; compartment; actual fuel consumed; vapor composition; controls; actual equipment/load; method scope | Measure actual release or apply a reviewed chemical/fuel/equipment-specific method. Separate custody transfer, vapor loss, recovered material and facility combustion; add other actual pollutant species separately. | kg | each operation plus representative monitoring | all actual emitting activities | actual support facility | per reference flow | species measurements; fuel/duty logs; documented method; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| block_attribution | all inventory rows | Assign actual exchange totals to a homogeneous function/extent scenario, then divide by its actual accepted block count. Keep failed work and standby in the attributed totals. Reference output is exactly 1 Item(s). | cp_activity; attributable measured totals | exchange amount per reference flow |  |
| asset_attribution | building_share; track_share; signal_share; pump_share | Apply the supported block fraction to actual construction/manufacturing inventories and conserve whole-life fractions. Separate initial asset and explicit renewal scope, with no annually reset full asset. | cp_assets; cp_maintenance; actual function utilization | asset amount per reference flow |  |
| customer_energy_reconciliation | diesel; electricity | Reconcile actual facility consumption separately from customer fuel/electricity delivery and actual distribution losses. No delivered litre or traction kWh becomes a facility combustion quantity. | cp_fuel; cp_energy; custody meters | facility exchange amount per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_extent | support_block | Fix one service family/function and exact extent, start/end and acceptance; retain original passenger/train/time/length/fuel records. No undefined generic block. | cp_activity |
| quality_scope | all inventory rows | Audit excluded transport/handling/intermediation and customer-energy boundaries; document component/bundle and owned/provider overlaps. | un-cpc-rail-support; cp_activity; cp_energy; cp_fuel |
| quality_lifecycle | building_share; track_share; signal_share; pump_share | Support asset life, initial/renewal boundary and conserved cross-period allocation. Unresolved lifetime or upstream inventory prevents a complete lifecycle claim. | cp_assets; cp_maintenance |
| quality_gaps | all inventory rows | Disclose identity, measurement, species, control and upstream gaps; missing values are not zero. Preserve actual geography/period and no unsupported default factors. | actual records and applicability review |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_block | Require unique support_block output equal to 1 Item(s), one fixed function/extent, exact interface times and acceptance. Reject fees, tickets sold alone without function definition, passenger-km and tonne-km as service-count equivalents. |  |
| validate_classification | Check the selected terminal/infrastructure/technical/fuel support function against the official scope and exclude separately modelled cargo/baggage handling, shunting and intermediation. | un-cpc-rail-support |
| validate_energy | Reconcile site versus customer fuel/traction energy; do not burn all dispensed fuel in the support model. Keep facility use, pass-through custody, actual losses and upstream supply distinct. |  |
| validate_atomic_lifecycle | Require every inventory row to be a specific exchange with actual applicability. Verify conserved asset shares, non-overlapping renewals, provider scope and actual waste/pollutant treatment. Unresolved identities or evidence remain explicit and no publication readiness is inferred. |  |
| `validate_family_passenger_terminal` | For service_family=passenger_terminal, count one completed defined passenger-terminal transaction or visit. Fix passenger count, ticket/assistance/left-luggage function, station footprint, actual duration and acceptance. Left-luggage scope includes identified pieces/mass and custody time; exclude baggage loading/unloading. |  |
| `validate_family_infrastructure` | For service_family=infrastructure, count one completed defined access passage or facility-availability block. Fix line/segment, exact length, train/class/axle load, passage or availability duration, operational limits, signalling and asset coverage. Select one passage or one timed availability block per dataset; never equate them. |  |
| `validate_family_freight_terminal` | For service_family=freight_terminal, count one completed defined non-handling terminal-support transaction. Fix train/consignment population, access/administrative function, actual dwell and terminal footprint; exclude cargo loading/unloading and shunting. |  |
| `validate_family_technical_support` | For service_family=technical_support, count one completed defined technical-support task. Fix work order, train/equipment configuration, actual checks/facilities provided, duration and signed completion; major rolling-stock overhaul/manufacture is outside this support task. |  |
| `validate_family_refuelling_stop` | For service_family=refuelling_stop, count one completed defined train-refuelling transaction. Fix actual fuel type and metered transferred mass/volume plus density, connected train, duration and delivery gate; count only facility overhead here, not fuel consumed later by the train. |  |
| `validate_family_other_support` | For service_family=other_support, count one completed specifically named railway-support function. Provide its physical extent, duration, acceptance and non-intermediation boundary using the same measured protocols; an unspecified other-service invoice is unavailable for this methodology. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | railway_support_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | The specified railway-support function component with compatible physical extent and custody/access gates |
| excluded_use | Complete rail transport/traction or fuel-supply footprint; unqualified comparison/pooling across function families; implied technical/safety approval |
| required_metadata | service family and one specific function; block definition and exact physical extent; station/line/terminal/technical point/fuel-stop ID; start/end interfaces and timestamps; actual served passenger/train/consignment population; actual duration; track length and train/axle configuration when relevant; cargo/baggage exclusion; transferred customer fuel/water/electricity; operator/provider split; energy supply and traction separation; facility and asset scope; actual quality/safety specification and completion; period and geography |
| required_quality_disclosure | Identity and measurement gaps; function/extent limits; customer-energy and provider boundary; asset life/renewal uncertainty; omitted upstream scope |
| update_trigger | Changed function/extent, facility/line configuration, support equipment, customer-energy interface, service quality, asset life or allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-rail-support | official_guidance | UNSD CPC 3.0 subclass 67390 explanatory note; consistent with draft explanatory PDF p373. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67390 | Passenger terminal, infrastructure, non-handling cargo terminal, technical point and fuel-stop scope/exclusions; no factors or universal event equivalence |
| networkrail-metering | official_guidance | Network Rail, On-train metering, current web page read 2026-10-23. https://www.networkrail.co.uk/industry-and-commercial/information-for-operators/on-train-metering/ | Distinct traction-energy account and actual metered usage; UK operator interface evidence only, no tariff, loss uplift or global LCA factor adopted |
