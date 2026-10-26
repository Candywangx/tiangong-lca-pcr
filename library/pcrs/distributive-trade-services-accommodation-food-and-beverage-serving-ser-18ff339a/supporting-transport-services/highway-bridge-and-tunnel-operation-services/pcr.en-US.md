---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.highway-bridge-and-tunnel-operation-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Highway, bridge and tunnel operation services

## 1. Scope and Applicability

Operation of highways, roads, streets, causeways, road bridges and road tunnels. Model one identified facility segment and mode/vehicle class at a time, including availability, traffic control, inspection, cleaning, drainage, winter maintenance and actual lighting/ventilation/support. Toll collection is not the whole service; untolled facilities are included. Parking facilities are excluded. [Source: `un-cpc-67420`]

Exclude customer transport, customer vehicle manufacture/fuel/exhaust, vehicle towing sold separately and construction sold as a separate construction product. Attribute underlying infrastructure life-cycle burdens as service inputs once. A declared transport-system study may add an explicitly separate user-vehicle component, including any modelled pavement/traffic effects, but this is not another operator combustion inventory and must be checked against the consuming transport dataset. The representative output is a completed specified vehicle passage; permitted cycle/pedestrian modes use independently qualified datasets, not an assumed equivalence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.highway-bridge-and-tunnel-operation-services |
| classification_refs | CPC 3.0 67420 |
| covered_products | Operation of specified road/street/causeway/bridge/tunnel segments under declared passage and quality conditions |
| excluded_products | Parking; user transport; separate towing; separate construction product |
| representative_product | One completed specified vehicle passage across the declared segment |
| production_route | Maintain and operate available facility → monitor passage → complete declared endpoint crossing |
| market_state | Delivered facility operating service under recorded traffic and operating conditions |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a maintained operating facility for a declared road-user passage |
| How much | One completed passage over explicitly specified endpoints and segment length |
| How well | Declared mode/vehicle class, mass/axle load where relevant, surface condition, availability, traffic control and actual service acceptance criteria |
| How long or cycle | Observed reporting period supporting the passage; attribute standby/closed-period and maintenance burdens transparently |
| reference_flow_link | `passage_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed qualified facility-operation passage service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | facility/segment ID; road/bridge/tunnel subtype; endpoints and length; lanes/width; direction; mode and vehicle class; gross mass/axle loads; traffic volumes and composition; reporting period/weather; surface condition; actual ventilation/lighting/drainage; availability/closures; maintenance scope; construction/lifetime boundary; electricity supply; operator/user component split |

item is the singular alias of formal Item(s); export Item(s). Count completed passages once at the selected gates, not both entry and exit. A passage over a long road is not equivalent to a short bridge crossing: length, facility, class and functional quality are mandatory. Traffic totals allocate actual operator activity; they do not make one passenger car equal to a heavy truck for pavement wear. Do not use tonne-kilometres as an implicit road-operation output. Zero delivered traffic yields no per-passage result; report facility burdens separately rather than divide by invented demand.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `passage_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_traffic gate-matched completed counts and class/segment records; receipts or entries alone are not completed passages. |
| `extent_quality` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Preserve actual segment length, direction, class and reporting period; separately state road condition and vehicle axle-loading evidence where allocation depends on damage. |
| `deicer_identity` | sodium_chloride; calcium_chloride; magnesium_chloride | Mass | kg | Record each formulation concentration/hydration; applied product, individual ions and receiving compartments have different quantities. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Operating facility segment with existing infrastructure; upstream construction and replacement shares disclosed |
| starting_condition_role | foreground_start |
| product_classification_scope | Road/street/causeway/bridge/tunnel operation; parking and user transport outside the operator module |
| recursive_input_rule | Purchased operating subservice enters once with specified segment/time boundary; exclude its covered utilities/materials from direct duplication |
| upstream_dataset_requirement | Electricity/fuel, actual materials, waste/water treatment, infrastructure construction/maintenance/end-of-life under declared lifetime allocation |
| disclosure | All included facility systems; road-user component split; climate; traffic class mix; lifetime and maintenance evidence; upstream gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_operation` | Include actual power, control, lighting, ventilation, pumping, cleaning, inspection, winter treatment, repair and incident readiness; distinguish open-road, bridge and tunnel configurations. | fhwa-tunnel-operation |
| `boundary_lifecycle` | Screen construction, material supply, maintenance/rehabilitation and end of life; state upstream module boundaries so current repair is not already embedded in an all-life asset dataset. | fhwa-pavement-lca |
| `boundary_user` | Keep customer traction energy and tailpipe releases outside operator combustion. A separately declared user-traffic model must reconcile the same transport inventory once, including any allocated infrastructure already present. |  |
| `boundary_release` | Screen salts, runoff, drainage treatment, sediment, spills and noise. Route each actual species to its real receiver and record treatment before downstream discharge; no assumption that all applied deicer immediately reaches surface water. | epa-road-deicing |

## 6. Process Inventory Structure

The cards are conditional atomic exchanges. Add every present alternative fuel, deicer, lamp, fan, repair material, wastewater, waste and elementary release as its own specific row with a linked protocol. A missing example does not mean zero. Asset aggregate datasets and their included constituents cannot both be counted.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| operate | Operate and maintain declared facility segment | required | Actual facility configuration and row applicability | foreground_production | per reference flow |

### Process: Operate and maintain declared facility segment (`operate`)

#### Inputs

##### Product flows

###### Electricity, alternating current (`electricity`)

Meter actual lighting, tunnel ventilation, pumping, signals, tolling and control loads separately before attribution. Traffic through a tunnel is not evidence of a fixed fan intensity.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_utility.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources:

###### Diesel fuel, petroleum-derived (`diesel`)

Only operator maintenance vehicles or backup generation; exclude customer vehicle fuel. Preserve actual fuel type and idle/return activity.

- Selected flow: Diesel fuel, petroleum-derived
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_utility.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources:

###### Tap water (`water`)

Only actual facility cleaning or wash water; count fresh intake, not circulated drainage throughput.

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

###### Sodium chloride, solid road deicer (`sodium_chloride`)

Conditional on actual NaCl application; record purity, stored stock and road section. Purchased salt is not automatically a freshwater release.

- Selected flow: Sodium chloride, solid road deicer
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Calcium chloride, road deicer (`calcium_chloride`)

Conditional on this actual deicer; declare hydration state and concentration. A brine formulation is a separately specified product, not interchangeable dry mass.

- Selected flow: Calcium chloride, road deicer
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Magnesium chloride, road deicer (`magnesium_chloride`)

Conditional on this actual deicer; retain hydration/concentration and net applied quantity separately from other salts.

- Selected flow: Magnesium chloride, road deicer
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Silica sand, road traction grit (`grit`)

Conditional on actual winter gritting; measure applied and recovered mass. A salt/sand blend requires separate constituent records or one specifically verified formulated product identity.

- Selected flow: Silica sand, road traction grit
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Asphalt concrete paving mixture (`asphalt`)

Only actual maintenance mixture; identify grade, recycled content and production boundary. Initial pavement already inside infrastructure is not counted again as current maintenance.

- Selected flow: Asphalt concrete paving mixture
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Ready-mixed structural concrete (`concrete`)

Conditional on actual bridge/tunnel/road repair; declare strength and mixture design, with upstream production counted once.

- Selected flow: Ready-mixed structural concrete
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Steel reinforcing bar (`steel`)

Conditional on actual repair reinforcement, distinguish from steel already covered in the purchased concrete/asset inventory.

- Selected flow: Steel reinforcing bar
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Paved road infrastructure (`road_asset`)

Only the named road/street/causeway segment; disclose lane width/count, layers and upstream construction/end-of-life boundary. Exclude bridge/tunnel sections counted separately.

- Selected flow: Paved road infrastructure
- Flow property / unit: Length / m
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Road bridge infrastructure (`bridge_asset`)

Conditional on an actual bridge section, with width, loading and construction inventory; prevent overlap with approach road or maintenance repair material.

- Selected flow: Road bridge infrastructure
- Flow property / unit: Length / m
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Road tunnel infrastructure (`tunnel_asset`)

Conditional on actual tunnel, specifying bore, lanes, ventilation/electrical coverage and physical lifetime; do not add initially included fans and lining twice.

- Selected flow: Road tunnel infrastructure
- Flow property / unit: Length / m
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

#### Outputs

##### Product flows

###### Completed facility-operation passage (`passage_service`)

One completed passage satisfying the declared facility, mode/class, endpoints and service acceptance conditions, counted by cp_traffic.

- Selected flow: Completed qualified facility-operation passage service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traffic`
- Sources:

##### Waste flows

###### Reclaimed asphalt pavement (`waste_asphalt`)

Record actual removed material and receiver; distinguish recycling allocation from an assumed avoided-virgin credit.

- Selected flow: Reclaimed asphalt pavement
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Road drainage sediment sludge (`drain_sludge`)

Measure catch-basin cleanout and contamination; declare wet/dry basis and treatment destination.

- Selected flow: Road drainage sediment sludge
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Tunnel washing wastewater (`wash_wastewater`)

Conditional on captured washing wastewater; identify receiver/treatment and do not duplicate species as direct environmental releases.

- Selected flow: Tunnel washing wastewater
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

###### Carbon dioxide, fossil, to air (`co2_air`)

Only operator-controlled combustion; derive from measured fuel carbon/oxidation or exhaust. Customer traffic CO2 belongs to a separately identified transport component.

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

###### Nitrogen monoxide, to air (`no_air`)

Only species-resolved operator exhaust; an aggregate NOx-as-NO2 value cannot establish this mass without justified speciation.

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

###### Nitrogen dioxide, to air (`no2_air`)

Only actual operator exhaust species; no customer tunnel exhaust as a new operator combustion source.

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

###### Chloride ion, to surface water (`chloride_water`)

Only quantified operator-attributable release to a named surface water receptor; account for retention, recovery, treatment and other compartments.

- Selected flow: Chloride ion, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Sodium ion, to surface water (`sodium_water`)

Measure or independently balance sodium release; never repeat whole NaCl product mass as each ionic species.

- Selected flow: Sodium ion, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Calcium ion, to surface water (`calcium_water`)

Conditional on measured/balanced calcium discharge from actual operator materials; separate natural upstream background.

- Selected flow: Calcium ion, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Magnesium ion, to surface water (`magnesium_water`)

Conditional on measured/balanced magnesium discharge; other receiving compartments require distinct flows.

- Selected flow: Magnesium ion, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Particulate matter, aerodynamic diameter below 2.5 micrometres, to air (`pm25_air`)

Only measured or justified operator-combustion fine particulate mass; exclude duplicated total PM, vehicle-user emissions and unmeasured road dust.

- Selected flow: Particulate matter, aerodynamic diameter below 2.5 micrometres, to air
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
| `allocate_activity` | Use segment/circuit meters first; split traffic-independent availability loads and demand-sensitive loads with documented physical drivers, then assign to class-specific completed passages. Reconcile class shares to facility totals. |  |
| `allocate_wear` | For pavement/structure wear, require observed maintenance and justified vehicle loading/damage evidence; no universal axle-power factor or passenger-car equivalence is imposed. Weather/calendar aging remains separately allocated. |  |
| `allocate_life` | Use supported physical service life, lifetime traffic and condition scenarios for construction/end-of-life shares. Separate current maintenance already present in the asset dataset; test uncertain lifetime/traffic explicitly without inventing default years. | fhwa-pavement-lca |
| `allocate_recovery` | Declare actual removed pavement and treatment/recycling boundary; no automatic avoided material or disposal credit. Preserve operator and supplier service boundaries. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_traffic | operate | passage_service | traffic record | segment gates; mode/class; entries/exits; completed counts; length; direction; axle/mass observations; operating/closure period | Match counters/toll/traffic sensors to completed segment passages; validate duplicates, exemptions and class identification. | item | each passage and period | same declared reporting period | named segment and class allocation | per reference flow | counter calibration; gate reconciliation |
| cp_utility | operate | electricity; diesel | utility record | circuit; import/export; fuel stock; deliveries; actual ventilation/lighting/pumping; operator vehicle idle; allocation | Use calibrated meters and fuel balances; reconcile operator-controlled consumption only. | kWh; kg | meter interval | same declared reporting period | named segment and class allocation | per reference flow | meter calibration; utility invoices; fuel stock |
| cp_material | operate | water; sodium_chloride; calcium_chloride; magnesium_chloride; grit; asphalt; concrete; steel | material event | specific formulation; concentration/hydration; issue/return; applied/repaired quantity; segment; date; maintenance boundary | Measure net actual use by product and operation; preserve salt purity, mixture designs and repaired section. | kg; m3 | each application/repair | same declared reporting period | named segment and class allocation | per reference flow | stock records; supplier specifications; work orders |
| cp_asset | operate | road_asset; bridge_asset; tunnel_asset | asset lifecycle | segment; length/width/lanes; upstream module boundary; construction; replacement; life evidence; lifetime traffic; class drivers | Bind physical infrastructure to upstream inventories and documented lifetime traffic/condition scenarios; isolate overlapping maintenance. | m | asset change and annual reconciliation | same declared reporting period | named segment and class allocation | per reference flow | asset registry; construction inventory; inspection/life evidence |
| cp_waste | operate | waste_asphalt; drain_sludge; wash_wastewater | waste transfer | specific waste; amount; moisture; composition; receiver; treatment; period; allocation | Measure each actual waste, preserve wet/dry basis and verify destination/treatment once. | kg; m3 | each transfer | same declared reporting period | named segment and class allocation | per reference flow | waste manifests; receiver records; composition tests |
| cp_release | operate | co2_air; no_air; no2_air; pm25_air; chloride_water; sodium_water; calcium_water; magnesium_water | release measurement | operator source; species; receptor; concentration; discharge volume; upstream background; retention/recovery; fuel/exhaust evidence | Quantify operator releases by measured discharge/species or justified balances; reconcile salt inputs and all recipients without assuming complete immediate runoff. | kg | discharge/event and period | same declared reporting period | named segment and class allocation | per reference flow | sampling/flow reports; mass balance; source attribution |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| passage_denominator | passage_service | N is positive completed passage count for the exact segment, mode/class and period; do not combine entry and exit as two outputs. | cp_traffic | N |  |
| exchange_allocation | all inventory rows | Assign actual numerator using documented segment/class physical shares, then divide by positive N. Retain standby, closure and maintenance burdens over the same service period. | cp_traffic; cp_utility; cp_material; cp_waste | exchange per reference flow |  |
| release_balance | co2_air; no_air; no2_air; pm25_air; chloride_water; sodium_water; calcium_water; magnesium_water | For each source/species/receiver, use actual measured release or an independently justified complete balance; separate background and retained/recovered mass, attribute the operator share, then divide by N. Do not copy salt product mass into ionic species or user emissions into operator exhaust. | cp_release; cp_material; cp_traffic | species per reference flow |  |
| asset_share | road_asset; bridge_asset; tunnel_asset | Allocate evidenced lifecycle inventory by segment and relevant lifetime service utilization/class drivers, then actual reporting-period share per N; document lifetime traffic uncertainty and avoid maintenance overlap. | cp_asset; cp_traffic | infrastructure share per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_function | passage_service | Identify segment, mode/class, length and actual condition/availability; different facilities and vehicle classes are not equivalent by count alone. | cp_traffic |
| dq_balance | all inventory rows | Match facility activity/traffic periods, total shares and upstream boundaries; no arbitrary intensity, default traffic or physical lifetime. | cp_utility; cp_asset; cp_traffic |
| dq_discharge | chloride_water; sodium_water; calcium_water; magnesium_water | Retain species, source, background and receiving-compartment evidence; unresolved runoff is a gap, not zero release. | cp_release |
| dq_identity | all inventory rows | Resolve each actual flow identity before database-linked use; archived support verification is not a fresh flow lookup. | direct identity verification |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Require unique passage_service output, 1 item and positive N with endpoints, length, mode/class, period and acceptance conditions; parking and user freight cannot be relabelled as this service. | un-cpc-67420 |
| `validate_components` | Reconcile road/bridge/tunnel asset segments, current maintenance, operating loads and supplier modules once; user fuel/tailpipe inventory remains separate. |  |
| `validate_atomic` | Reject combined deicer/energy/waste/species labels, whole-salt mass as each ion, unverified receptor assignment and totals duplicated with component releases. |  |
| `validate_coverage` | Require actual facility configuration, asset life/traffic evidence, meter coverage and explicit upstream gaps; partial operator data cannot claim complete transport-system impacts. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process facility operation service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Equivalent declared facility segment, functional quality, mode/class, period and infrastructure/user-component boundaries |
| excluded_use | Universal road/bridge/tunnel factor; parking; user transport; unqualified tonne-kilometres; incompatible facility or vehicle class |
| required_metadata | All passage qualifiers; N; traffic composition; utility/material meters; winter and drainage records; physical lifetime traffic scenarios; supplier coverage |
| required_quality_disclosure | UUID gaps; runoff/speciation uncertainty; asset/maintenance overlap checks; condition/traffic coverage; user component exclusion; upstream omissions |
| update_trigger | Facility/class/traffic/condition change; climate/deicer change; energy or ventilation control; maintenance/lifetime assumptions; contract or data boundary change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-67420 | official_guidance | UNSD CPC3.0 67420. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67420 | Road/bridge/tunnel scope and parking exclusion; no LCA factor. |
| fhwa-pavement-lca | official_guidance | FHWA-HIF-16-014, Pavement Life Cycle Assessment Framework (2016), official publication description. https://www.fhwa.dot.gov/PAVEMENT/pub_details.cfm?id=998 | Life-cycle stage screening only; full framework calculations and numeric defaults not adopted. |
| fhwa-tunnel-operation | official_guidance | FHWA-HRT-12-012, Innovations and Best Practices for Roadway Tunnels (2012). https://www.fhwa.dot.gov/publications/focus/12apr/12apr01.cfm | Facility-specific lighting, inspection, ventilation/emergency-system and maintenance screening; no universal energy factor or current legal requirement inferred. |
| epa-road-deicing | official_guidance | US EPA, Winter is Coming! And with it, tons of salt on our roads (2020). https://www.epa.gov/snep/winter-coming-and-it-tons-salt-our-roads | Separate actual deicer formulations and receiving-environment screening; no reported amount, comparative performance, release fraction or toxicity threshold adopted. |
