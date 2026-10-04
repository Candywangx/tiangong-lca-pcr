---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.fishing-vessel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured diesel shrimp fishing trawlers

## 1. Scope and Applicability

New complete welded-steel mono-hull shrimp trawler manufacture with diesel mechanical shaft propulsion, fixed deck trawling equipment, sheltered catch handling, horizontal plate freezer and refrigerated storage. This narrower CPC49315 boundary owns shipbuilding, supply completeness, commissioning and physically verified net ship mass; it excludes separate factory-processing carriers, other fisheries/propulsion/hull routes, incomplete hulls, repair/refit and loose ship parts. Existing wiring, sails and propeller records do not cover complete-ship integration. Damen stock/standard p.1 supports a model-specific outfitting and loose-gear exclusion example; it is not proof of universal steel grade, fabrication recipe, refrigerant or actual factory measurements. Fishing trips, fish catches/yields, commercial onboard processing/freezing, use fuel, transport services, maintenance, lifetime and end of life are outside. Fixed processing equipment manufacture is included, without modelling fish production.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.fishing-vessel |
| classification_refs | CPC 3.0 49315; narrower candidate scope; no accepted mapping asserted |
| covered_products | Configured new complete steel diesel mechanically propelled shrimp trawlers with fixed freezing/storage plant |
| excluded_products | Other fishing/factory vessels; other hull/propulsion routes; loose parts/gear; incomplete hulls; repair/refit; fish production/use/services |
| representative_product | One accepted declared steel diesel shrimp trawler with fixed-pitch propeller, winch/derrick outfit, fixed plate freezer and refrigerated hold; stock2607 is an architecture example only |
| production_route | Receipt and make-or-buy control; actual steel hull construction; actual surface preparation/coating; machinery/deck/cold-storage/accommodation outfitting; launch and actual tests; measured net-mass reconciliation and acceptance |
| market_state | Accepted complete configured new ship at declared yard delivery gate; loose operational gear and tank consumables excluded from net reference |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one complete declared diesel shrimp trawler configuration |
| How much | 1 kg accepted net complete unit; one accepted complete unit has physically verified M kg |
| How well | Meet actual approved drawings/BOM and yard acceptance plan for hull joints/watertightness, shaft/rudder/deck equipment, electrical/safety/cold-plant function and mass configuration. Preserve actual criteria/results and applicable approvals; no universal tolerances or regulatory conformity assumed |
| How long or cycle | One ship manufacturing delivery; no tonne-catch, sea-day or life unit |
| reference_flow_link | `finished_vessel` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fishing vessels, factory ships and other vessels for processing or preserving fishery products `30092dc1-499d-4dac-80e0-30a02bf8fc04` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Ship/hull number; drawings/BOM revision; actual steel grade and welding/coating procedure; hull/propulsion/fishing/freezing/cold-storage/accommodation/navigation/safety configuration; supplier completeness and included fluids; actual test scope/results; site/period; survey method/date/raw measurements/hydrostatics/water density/tank condition; signed lightship and delivery correction ledger; measured positive M kg; exclusions and retained working fluids; gate/upstream/receiver coverage |

Declare every qualifier in dataset metadata or equivalent process/flow notes. The broad public finished-ship identity is narrowed by these qualifiers to the single configured trawler; it does not authorize modelling every CPC49315 vessel.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `survey_provenance` | finished_vessel | Mass | kg | cp_mass acceptance records must originate in a current actual lightweight/weight survey for this hull number. Require original draft/freeboard observations, survey water density, verified as-built hydrostatic geometry and trim corrections, tank soundings/composition/density, witnessed completeness and measured additions/removals. Reconcile certified lightship condition to this accepted net configuration with signed traceable kg corrections and uncertainty, checked against actual installed-component mass balance. Do not replace net M by a nominal displacement, deadweight, GT/NT, catalogue estimate or full-fuel weight. No whole-ship platform scale is presumed. Historical NMA pp.3,5–7 supports the survey method context; use actual vessel-appropriate approved method and records. |
| `net_configuration` | finished_vessel | Mass | kg | Include permanent installed hull/outfit and actual retained lubricating, cooling, hydraulic and refrigeration charge in closed machinery systems. Exclude fuel and fresh-water storage contents, ballast, sewage/bilge contents, catch/cargo/ice/packaging, people, loose fishing gear/tools/stores, temporary construction/test equipment and loads. Record each tank/system inventory and physical correction to net acceptance state. A fuel residual supplied with delivery is a separate ancillary output, outside this net ship reference; expand its receipt/output cards if included in the dataset. No service-tank capacity substitutes for measured correction. |
| `engine_count` | marine_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Retain actual supplied installed engine count, with unchanged public Number of items. Independently measure supplied engine kg per actual configuration/lot and supplier-prefilled scope to reconcile ship M; this physical kg/count relation is not a replacement exchange property. Road/aircraft propulsion engines are excluded from the selected class43110 identity. |
| `electrical_energy` | electricity_hull; electricity_finishing; electricity_outfitting; electricity_acceptance | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain actual metered kWh;1 kWh =3.6 MJ. Installed power is not factory consumption. |
| `hydraulic_volume` | hydraulic_oil | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain net supplied formulation volume;1 L =0.001 m3. Physical retained mass reconciliation uses measured density at recorded temperature, without changing public Volume or assuming nominal fills. |
| `species_and_formulations` | hull_assembly; hull_plate; frame_section; welding_wire; welding_co2; offcut; weld_slag; blast_shot; epoxy_coating; cleaning_water; spent_shot; captured_dust; paint_waste; wash_waste; air_dust; reduction_gear; propeller_shaft; propeller; rudder; anchor; trawl_winch; steel_bolt; hydraulic_hose; genset; bilge_pump; electrical_cable; starter_battery; radar; plate_freezer; hold_refrigerator; hold_insulation; engine_oil; coolant; test_diesel; used_oil; air_co2; air_co; air_no; air_no2; finished_vessel | Mass | kg | Use whole specified formulation/component mass for kg exchanges. Constituents already in bought mixtures/assemblies are not duplicate receipts. Each measured emission is one chemical species/origin/medium; separate NO/NO2 and fossil/biogenic carbon. Metered volume-to-mass needs actual density/conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased specified steel or hull and complete ship machinery/outfit at the declared yard receipt gate |
| starting_condition_role | Foreground receipt boundary; upstream manufacture and inbound transport linked separately |
| product_classification_scope | Declared steel diesel mechanically propelled shrimp-trawler subset of CPC49315 |
| recursive_input_rule | Bought hull/engine/cold plant replaces included internals, consumed supplier materials and supplier operations; internal hull-section transfers are not receipts |
| upstream_dataset_requirement | Match actual shipbuilding steel/weld/coating grade/state, marine engine duty, ship equipment completeness, refrigeration formulation/precharge, source electricity and waste receiver |
| disclosure | Configured ship manufacturing foreground; disclose bought/local/outsourced construction, launch services, transport, receiver links and omissions. No complete cradle-to-gate claim |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | hull; finishing | Local hull route tracks nesting/cutting/forming, joint preparation, qualified welding, panel/block erection and inspection/rework from actual plans. Optional actual blasting/cleaning/coating is separately metered. Purchased hull scope replaces those stocks and stages. Expand actual launch crane/tug/slipway, dry-dock, compressed air, heating and outsourced surface work as separate services/exchanges using measured causal activity; never infer whole equipment consumption per ship. |  |
| `boundary_outfit` | outfitting; acceptance | Track propulsion alignment, rudder/steering, fishing derricks/winches, fuel/bilge/cooling piping, electrical distribution, communications, accommodation/sanitary and safety equipment, and fixed processing/plate-freezer/refrigerated-hold integration. Trace actual completed BOM and add every missing component/formulation before declaring completeness. Bought charged cold plant replaces included compressor, heat exchangers, electrical internals, oils/refrigerant; separately supplied charge or actual leakage requires one species/formulation card with supplier/SDS or monitoring evidence, not an invented refrigerant. | damen-shrimp-trawler-stock |
| `boundary_trials` | acceptance | Include actual yard-controlled launch, dock and sea commissioning required by the contract, their consumed fuel, measured emissions, rework and commissioning wastes. Separate subsequent fishing operation/catch/freezing, demonstration voyages and delivery transport. A test load is excluded from M; actual food used only for commissioning is a separate receipt/output, not marketed catch or a production co-product. No catalogue test consumption or duration adopted. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hull` | Steel hull fabrication and erection | conditional | Only actual local plate/section cutting, forming, joint preparation, welding and erection; bought hull replaces them | foreground | per 1 kg reference flow |
| `finishing` | Hull surface preparation and coating | conditional | Actual local blasting/cleaning/coating specification; bought coated hull excludes its supplier work | foreground | per 1 kg reference flow |
| `outfitting` | Propulsion fishing and ship-system outfitting | required | Integrate the declared complete ship including fixed freezing/storage plant and actual supplier inclusions | foreground | per 1 kg reference flow |
| `acceptance` | Launch commissioning and ship acceptance | required | Actual launch/dock/sea checks as performed; surveyed net-mass configuration reconciliation and acceptance | foreground | per 1 kg reference flow |

### Process: Steel hull fabrication and erection (`hull`)

#### Inputs

##### Product flows

###### One complete uncoated welded-steel shrimp-trawler hull and superstructure (`hull_assembly`)

Only an actual supplied hull of the declared as-built configuration. Weigh or use verified measured supplier hull mass and retain included fittings, joints and surface state. This receipt replaces its included stock and supplier hull fabrication; local remaining construction/coating is separately measured. A partially supplied block has its own scope/card.

- Selected flow: One complete uncoated welded-steel shrimp-trawler hull and superstructure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Certified hot-rolled shipbuilding steel plate (`hull_plate`)

One actual certified shipbuilding grade/thickness and delivery condition for local hull/deck/bulkhead construction. Weigh net issues/returns. A bought hull replaces included stock and supplier fabrication. No universal grade or plate thickness follows from a builder certificate.

- Selected flow: Certified hot-rolled shipbuilding steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Certified hot-rolled steel angle for hull framing (`frame_section`)

One actual angle section grade/size for frames and stiffeners, measured on net issue. Other section profiles have distinct cards. Trace actual forming, cutting and joining drawings; no universal fraction of ship mass.

- Selected flow: Certified hot-rolled steel angle for hull framing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Qualified gas-shielded flux-cored steel welding wire (`welding_wire`)

Only if the actual qualified welding procedure uses this single specified consumable. Weigh issues/returns and unused spool mass; distinguish deposited wire, slag, spatter and emissions. Other procedures require distinct consumable cards.

- Selected flow: Qualified gas-shielded flux-cored steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Pure industrial carbon-dioxide shielding gas (`welding_co2`)

Conditional on the actual welding procedure specifying pure CO2; mixtures are separate products. Weigh cylinders before/after or meter with measured gas conditions. A fossil air emission is not purchased shielding gas.

- Selected flow: Pure industrial carbon-dioxide shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage grid electricity (`electricity_hull`)

Meter actual attributable stage electricity including rework/idle. Restrict public identity to grid-average user-side AC below1kV; different voltage/generation needs another card. Equipment ratings do not measure consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Clean untreated shipbuilding-steel offcut (`offcut`)

Actual segregated untreated post-industrial steel export of one declared alloy, weighed with contamination evidence. Internal reuse is not an export; no automatic avoided-steel credit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Collected flux-cored steel-welding slag (`weld_slag`)

Only actual separate contained slag export from the selected welding procedure. Weigh dry/wet basis, retain flux/metal composition and receiver. Captured dust and airborne species are separate exchanges.

- Selected flow: Collected flux-cored steel-welding slag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Hull surface preparation and coating (`finishing`)

#### Inputs

##### Product flows

###### User-side low-voltage grid electricity (`electricity_finishing`)

Meter actual attributable stage electricity including rework/idle. Restrict public identity to grid-average user-side AC below1kV; different voltage/generation needs another card. Equipment ratings do not measure consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Specified cast-steel blasting shot (`blast_shot`)

Only actual local steel-shot preparation of hull steel. Weigh fresh make-up and recovery, with single alloy/size/hardness certificate. Purchased prepared/coated hull excludes supplier preparation; other abrasives need cards.

- Selected flow: Specified cast-steel blasting shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### One mixed two-component marine epoxy coating formulation (`epoxy_coating`)

Only if the actual approved newbuild coating specification uses this single mixed formulation. Weigh complete mixed product issues/returns, retained cured coating and solids/solvent balance; upstream constituent components are not repeated. Other primers/antifouling/finishes need separate formulations.

- Selected flow: One mixed two-component marine epoxy coating formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Supplied drinking-quality cleaning water (`cleaning_water`)

Actual drinking-quality supplied tap-water make-up only, weighed or metered with actual density/temperature. Recirculated water is not a fresh receipt; the same water is not also direct resource abstraction.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

#### Outputs

##### Waste flows

###### Collected spent steel blasting shot (`spent_shot`)

Only actual separately collected export of this single waste; weigh on declared wet/dry basis, determine metal/paint/water contamination and treatment receiver. Internal recovery is separate; no inferred direct discharge.

- Selected flow: Collected spent steel blasting shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Captured dry shipbuilding-steel blasting dust (`captured_dust`)

Only actual separately collected export of this single waste; weigh on declared wet/dry basis, determine metal/paint/water contamination and treatment receiver. Internal recovery is separate; no inferred direct discharge.

- Selected flow: Captured dry shipbuilding-steel blasting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Collected uncured marine epoxy coating waste (`paint_waste`)

Only actual separately collected export of this single waste; weigh on declared wet/dry basis, determine metal/paint/water contamination and treatment receiver. Internal recovery is separate; no inferred direct discharge.

- Selected flow: Collected uncured marine epoxy coating waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Contained spent aqueous hull-cleaning solution (`wash_waste`)

Only actual separately collected export of this single waste; weigh on declared wet/dry basis, determine metal/paint/water contamination and treatment receiver. Internal recovery is separate; no inferred direct discharge.

- Selected flow: Contained spent aqueous hull-cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Air particulate of unspecified size (`air_dust`)

Only actual measured post-control particulate release, particle size unspecified and immediate air submedium unspecified. Match concentration/exhaust volume conditions; captured material is waste. Size-resolved or other submedia need matching identities.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Propulsion fishing and ship-system outfitting (`outfitting`)

#### Inputs

##### Product flows

###### User-side low-voltage grid electricity (`electricity_outfitting`)

Meter actual attributable stage electricity including rework/idle. Restrict public identity to grid-average user-side AC below1kV; different voltage/generation needs another card. Equipment ratings do not measure consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: damen-shrimp-trawler-stock

###### One assembled marine compression-ignition propulsion engine (`marine_engine`)

One actual assembled marine piston diesel engine accepted for mechanical shaft propulsion; class43110 excludes road/aircraft engines and is applicable only to the verified marine duty. Count supplied installed engines, preserving public Number of items; independently weigh the actual supplied engine and prefilled fluid scope for physical ship-mass reconciliation. Separate reduction gear/genset and included auxiliaries; no catalogue kg/item.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_count.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_count`
- Sources: damen-shrimp-trawler-stock

###### One finished marine reduction gearbox (`reduction_gear`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One finished marine reduction gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished steel marine propeller shaft (`propeller_shaft`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One finished steel marine propeller shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished fixed-pitch ship propeller (`propeller`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: Ships' propellers and blades therefor `8f01d846-f812-4209-a4c1-9f2daa531e79`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished balanced steel ship rudder (`rudder`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One finished balanced steel ship rudder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished steel ship anchor (`anchor`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One finished steel ship anchor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished multi-drum trawl winch (`trawl_winch`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: Pulley tackle and hoists other than skip hoists, winches and capstans, jacks `7984041f-134f-4b73-89b9-30d9be48684f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished hexagonal-head steel equipment bolt (`steel_bolt`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: Steel fasteners `cad280ce-7850-46a1-9060-4f8b68bf5532`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished steel-reinforced vulcanised-rubber hydraulic hose (`hydraulic_hose`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One complete diesel electrical generator set (`genset`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One complete diesel electrical generator set
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished marine centrifugal bilge-water pump (`bilge_pump`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One finished marine centrifugal bilge-water pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One PVC-insulated copper low-voltage ship cable (`electrical_cable`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One PVC-insulated copper low-voltage ship cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished lead-acid engine-starting battery (`starter_battery`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One finished lead-acid engine-starting battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One finished marine radar apparatus (`radar`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: Radar apparatus, radio navigational aid apparatus and radio remote control apparatus `1423adf5-00aa-48ab-a228-5935b58a21ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One complete marine horizontal plate-freezer unit (`plate_freezer`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One complete marine horizontal plate-freezer unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One complete fish-hold refrigeration unit (`hold_refrigerator`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One complete fish-hold refrigeration unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One rigid polyurethane fish-hold insulation panel (`hold_insulation`)

One actual declared supplied design/size/material and completeness, measured net at receipt/installation. Purchased complete assemblies exclude separately counted included internals and fluids. Retain drawings, supply gate and actual make-or-buy route; expand local manufacture if present. No universal component mass or count.

- Selected flow: One rigid polyurethane fish-hold insulation panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: damen-shrimp-trawler-stock

###### One formulated mineral hydraulic fluid (`hydraulic_oil`)

Only actual separately supplied mineral hydraulic formulation with at least70% petroleum oil matching public composition, net metered m3 for the declared deck/steering circuit. Other circuits/formulations have separate cards. Reconcile supplier-prefilled amounts and actual retained density/temperature mass without changing Volume.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources: damen-shrimp-trawler-stock

###### One formulated mineral marine engine lubricating oil (`engine_oil`)

Actual separately supplied single grade/formulation for engine commissioning and retained operating charge. Weigh net supply/recovery and exclude engine-prefilled duplicates. Do not infer fill from oil-tank capacity.

- Selected flow: One formulated mineral marine engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: damen-shrimp-trawler-stock

###### 50 wt% ethylene-glycol aqueous inhibited engine coolant (`coolant`)

Conditional only on actual supplier-certified50 wt% formulated coolant. Weigh whole mixture; record additives/density and exclude engine-prefilled scope. Other concentrations/chemistry require their own cards; no separate water/ethylene-glycol receipt for this supplied mixture.

- Selected flow: 50 wt% ethylene-glycol aqueous inhibited engine coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources: damen-shrimp-trawler-stock

### Process: Launch commissioning and ship acceptance (`acceptance`)

#### Inputs

##### Product flows

###### User-side low-voltage grid electricity (`electricity_acceptance`)

Meter actual attributable stage electricity including rework/idle. Restrict public identity to grid-average user-side AC below1kV; different voltage/generation needs another card. Equipment ratings do not measure consumption.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### One fossil petroleum diesel grade consumed in acceptance tests (`test_diesel`)

Only measured actual consumed dock/sea acceptance-test fuel of one certified pure fossil diesel formulation. Reconcile fills/returns/residuals and engine/genset consumption; not tank capacity, catalogue cruise consumption or rated-power estimate. Delivered service-tank residual is outside net M and must be separately disclosed as an ancillary supply.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete diesel shrimp trawler (`finished_vessel`)

One complete declared new steel-hulled diesel mechanically propelled shrimp trawler with installed hull, propulsion, deck fishing equipment, accommodation, electrical/navigation/safety equipment and fixed processing/freezing/storage plant. Output1kg of accepted net complete M under surveyed configuration; excludes loose fishing gear, catch/cargo, people, consumable tank contents and temporary equipment.

- Selected flow: Fishing vessels, factory ships and other vessels for processing or preserving fishery products `30092dc1-499d-4dac-80e0-30a02bf8fc04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: damen-shrimp-trawler-stock

##### Waste flows

###### Contained used petroleum lubricating oil (`used_oil`)

Only actual separately exported contaminated used petroleum-based commissioning oil. Weigh actual receiver-bound mass with water/composition evidence; unused drained fresh fluid is not automatically used oil. Internal recovered oil is not waste export.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from actual acceptance testing (`air_co2`)

Only measured actual post-control release of this single species to immediate air, submedium unspecified, over attributable acceptance tests. Match measured concentration/exhaust volume conditions; verify fossil origin for CO2/CO and separate NO/NO2. NOx-equivalent values, N2O, long-term air, soil or limit values cannot supply this exchange.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon monoxide from actual acceptance testing (`air_co`)

Only measured actual post-control release of this single species to immediate air, submedium unspecified, over attributable acceptance tests. Match measured concentration/exhaust volume conditions; verify fossil origin for CO2/CO and separate NO/NO2. NOx-equivalent values, N2O, long-term air, soil or limit values cannot supply this exchange.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen monoxide from actual acceptance testing (`air_no`)

Only measured actual post-control release of this single species to immediate air, submedium unspecified, over attributable acceptance tests. Match measured concentration/exhaust volume conditions; verify fossil origin for CO2/CO and separate NO/NO2. NOx-equivalent values, N2O, long-term air, soil or limit values cannot supply this exchange.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide from actual acceptance testing (`air_no2`)

Only measured actual post-control release of this single species to immediate air, submedium unspecified, over attributable acceptance tests. Match measured concentration/exhaust volume conditions; verify fossil origin for CO2/CO and separate NO/NO2. NOx-equivalent values, N2O, long-term air, soil or limit values cannot supply this exchange.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared_operations | Separate hull numbers/configurations by direct records first. Shared fabrication, crane/dock, coating, outfitting and test burdens use actual causal metered loads/activity/time and served orders, retaining idle/rework/reject burden and uncertainty/sensitivity. Unequal ships are not equally allocated by count. No universal mass/time factor; provide foreground evidence for the driver. |  |
| `allocation_completeness` | bought_assemblies | Bought/customer-supplied hull, engine, winch and refrigeration plant retain actual upstream burdens; no zero-burden assumption. Exclude supplier-included internals/precharges from separate receipts. Reusable fixtures/dock/tug services need causal utilization/replacement records, not whole-item consumption for each ship. |  |
| `allocation_balance` | mass_and_exports | Reconcile net stock/parts, installed retained mass, WIP/returns/recovery, coating solvent/slag and each waste/emission on the same hull and period. Counted engine and Volume hydraulic fluid require independent physical mass reconciliation. Fuel consumed in trials is separate from excluded delivery tank contents. Real joint output manufacture needs explicit allocation evidence; no automatic avoided-material or treatment credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | reference_product | controlled survey-derived acceptance mass | model; configuration; serial number; accepted net mass M; hull number; survey method/raw report; net configuration correction; retained working charge; signed acceptance | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted complete ship | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | accepted net mass per machine | current actual lightweight survey; raw measurements and corrections; signed mass balance; survey_provenance; net_configuration |
| cp_configuration | hull; finishing; outfitting; acceptance | configuration | as-built BOM/supplier and acceptance ledger | hull/model/drawing/BOM; actual steel/weld/coating; main engine marine duty; shaft/propeller/rudder; winch/derricks; freezing/storage; accommodation/safety/electrics/navigation; supplied internals/charges; criteria/results; gate/period | Crosswalk every actual installed BOM item and operation to a single atomic card or justified exclusion. Record complete configuration, supplier inclusions, launch/test route and acceptance state; expand all missing cards including nozzle, mounts/bearings/seals, pipes/tanks, derricks, hatches/windows, sanitary, furniture, safety and communications. Verify actual refrigerant/charge and fill scope without choosing a nominal chemistry. | kg | each build revision/acceptance | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | one complete traceable accepted configuration | approved drawings/BOM; supply certificates; checks/results; mass corrections |
| cp_stock | hull; finishing; outfitting | single stock/formulation | net issues and formulation weighing | single grade/design/formulation; state; net kg; issues/returns/recovery; actual composition/density/temperature; supplied inclusions; hull orders | Weigh each actual plate, angle, weld consumable, shielding gas, shot, coating, supplied water and separate machinery fluid on its actual whole-product basis. Record actual density/conditions if metered by volume; subtract returns and exclude supplier-preincluded fluids and mixture constituents. No catalogue tank capacity or generic mixture factor. | kg | each issue/return and hull batch | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | attributable net mass / accepted units of the same configuration | scale/certificate/SDS; issues/returns; formulation and supply scope |
| cp_parts | hull; outfitting | single installed component | net component mass and supply completeness | single component/design; received/installed kg; actual count; supplier-included internals/charges; measured lot mass; hull number | Weigh each actual specified supplied component or use verified current lot-specific measured mass/count records. Measure complete supplied refrigeration-unit mass and included charge scope; neither nominal cooling rating nor empty unit mass establishes installed mass. Distinguish bought assemblies from local fabrication and installed versus temporary items. | kg | each supply lot/installation | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | attributable installed component mass / accepted units of the same configuration | scale; actual lot measurements; BOM/supplier completeness |
| cp_count | outfitting | marine_engine | marine engine count and independent kg | actual installed engine count; marine duty/model; measured supplied engine kg; calibration; included auxiliaries/prefilled fluids; hull number | Count actual installed engines of the single marine design. Independently weigh the actual supplied engine, identifying included mounts/auxiliaries and prefilled fluids; verify measured kg/item against the installed engine and ship mass ledger. Preserve Item(s) exchange property; no default engine mass or duplicate supplied engine fluids. | Item(s) | each actual engine supply/installation | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | attributable installed engine count / accepted units of the same configuration | marine-duty certificate; count ledger; calibrated engine kg/lot; included-fluid evidence |
| cp_volume | outfitting | hydraulic_oil | metered formulated-fluid volume | single mineral formulation/petroleum fraction; L/m3; fills/returns/recovery; prefill; retained charge; measured density/temperature | Meter actual net supplied mineral hydraulic formulation volume; convert1 L =0.001 m3. Reconcile actual retained charge with measured density at recorded temperature for physical kg in M, without replacing public Volume or duplicating prefilled fluid. | m3 | each metered fill/return | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | attributable supplied volume / accepted units of the same configuration | meter; SDS/composition; density/temperature; charge balance |
| cp_energy | hull; finishing; outfitting; acceptance | electricity | stage-metered electric energy | stage/order/site; kWh/MJ; meter interval/calibration; load/idle/rework; served hulls | Meter actual stage electricity. Convert1 kWh =3.6 MJ; justify shared causal drivers and separate auxiliary generator testing from purchased grid power. Installed engine/equipment ratings are not electricity consumption. | MJ | each metered interval/order | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | attributable electricity / accepted units of the same configuration | meter calibration; bill; causal order ledger |
| cp_fuel | acceptance | test_diesel | consumed test-fuel balance | single grade/fossil carbon certificate; fills/returns/stock; main/genset tests; measured consumed kg; residual delivery kg outside M; density/temperature; actual intervals | Weigh or meter fuel with actual density/temperature and reconcile fills, supplied fuel, consumption, recovery and residual at actual dock/sea test intervals. Allocate actual consumption to acceptance; subsequent voyages are separate. Preserve residual tank inventory for net-mass exclusions and ancillary supply disclosure; no nominal full tank or brochure hourly consumption. | kg | each actual dock/sea test | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | attributable consumed test-fuel kg / accepted units of the same configuration | meter/scale; fuel origin; actual test and tank balance |
| cp_waste | hull; finishing; acceptance | single exported waste | segregated waste export | single waste/alloy/formulation; wet/dry; composition; exported kg; recovery; receiver | Weigh each actual segregated offcut, slag, spent shot, captured dust, uncured coating, contained cleaning solution and used oil separately. Record water/metal/paint/oil contamination and receiver gate. Recovery is not export; contained liquids are not direct aquatic emissions. | kg | each export and order | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | attributable exported waste mass / accepted units of the same configuration | scale; composition; receiver/treatment receipt |
| cp_emission | finishing; acceptance | single air species | species-specific actual monitoring | species/origin; immediate medium/submedium; particle size; concentration/exhaust volume/time; matched conditions; controls/background; attributable interval | Measure actual post-control concentration and exhaust volume on identical reference conditions, integrate over attributable intervals and correct background with uncertainty. Verify fossil carbon and separate NO/NO2 speciation; NOx as NO2 equivalent cannot identify them. Selected air submedium and dust size are unspecified; specific measured media/size require matching separate identities. No necessary emission or limit-derived quantity. | kg | representative actual emitting intervals | same declared shipbuilding/test period; disclose gaps | declared yard and controlled dock/sea trials | attributable measured species kg / accepted units of the same configuration | monitoring/flow calibration; speciation/carbon/medium evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | finished_vessel | Require positive physically verified M and current raw survey/weight records for the same completed hull/configuration. Acceptance-record collection alone is insufficient without survey_provenance and net_configuration; disclose missing survey/corrections and do not present a physically complete dataset until resolved. Reconcile counted supplied engine kg, installed bought charged refrigeration kg and metered-fluid retained mass, avoiding supplier-precharge duplication. | cp_mass; cp_parts; cp_count; cp_volume; nma-lightship-2020 |
| `quality_coverage` | inventory_and_links | Actual as-built BOM, supplier scope, stock/route records, qualified weld/coating plans and acceptance tests determine coverage. Expand missing components, service/resource/chemical/refrigerant/emission cards and upstream/transport/receiver links before completeness claims. No universal yield/grade/part mass, fill, refrigerant, trial duration/emission, life or allocation factor. No current ship measurements are supplied by this methodology. | cp_configuration; cp_stock; cp_parts; cp_fuel; cp_waste; cp_emission |
| `quality_source_limits` | architecture_and_method | Damen undated stock/standard p.1 is one model example with similar-vessel picture, builder certificate only and loose fishing gear exclusion. It establishes neither material grade nor factory inventory/M. NMA Rev.07.01.2020 p.3 explicitly includes fishing vessels; pp.5–7 describe survey completeness, tanks and draft/hydrostatic context. Use as a historical method example, not current law; no thresholds, nominal masses or catalogue performance factors adopted. | damen-shrimp-trawler-stock; nma-lightship-2020 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require complete declared ship configuration, positive surveyed net M kg, cp_mass and independent survey/configuration evidence; normalize each numerator by M with unchanged public properties. One kg manufactured ship is not equal fishing capacity or lifetime. |  |
| `validation_completeness` | inventory | Cross-check hull grades/sections/welds/coatings, engine/shaft/propeller/rudder, deck equipment, refrigeration/freezer, installed charges, accommodation/sanitary, piping/tanks/electrics/navigation/safety and actual launch/tests with as-built records. Track fuel/tank-content exclusions, supplier precharge and actual missing cards; no complete cradle-to-gate claim without matched links. |  |
| `validation_identity` | all inventory rows | Verify public substance/type/property/unit group and actual design/route/state/completeness/geography; use official bilingual names. Marine engine is not a road class43123 engine; Number of items stays Item(s). Pure shielding gas is not an elementary emission, contained waste not resource water, NO not NO2/N2O and immediate air not soil/long-term. Unresolved identity remains an explicit gap. |  |
| `validation_claims` | dataset_claims | Manufacturing methodology and mechanical check do not establish scientific approval, current legal/class conformity, fishing service efficiency or measured factory completeness. Physical survey/configuration gaps prevent an asserted complete dataset. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured shrimp-trawler manufacturing foreground; section title does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same configured complete ship manufacture scaled by surveyed net M, with matched upstream/transport/receiver links disclosed separately |
| excluded_use | Fishing/catch/processing/freezing services, voyage transport, use/maintenance/lifetime/end of life, other ship routes or methodological approval |
| required_metadata | All reference qualifiers; actual as-built hull/outfit/charged-equipment configuration and gates; survey original method/observations/corrections/densities/tank inventories/signatures/net M; engine count with independent supplied kg; fuel consumption/residual separation; site/period/orders; actual launch/tests, allocation and links |
| required_quality_disclosure | Identity/BOM/route/survey/mass/measurement/link gaps; source dates/limits, rework/recovery/exports, uncertainty and allocation sensitivity |
| update_trigger | Hull/material/joint/finish route, propulsion/deck/cold plant configuration, supplier charge/completeness, mass survey/delivery state, yard/test plan, period or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| damen-shrimp-trawler-stock | handbook | Damen, Shrimp Trawler2607 Stock / Standard, undated public product sheet with appended presentation; physical p.1 (unnumbered). https://medialibrary.damen.com/m/1ca5a40fe0d02808/original/shrimp-trawler-2607-damen-trading-07813.pdf | Model-specific mechanical propulsion, deck/plate-freezer/cold-storage/navigation/accommodation outfit and loose-gear delivery exclusion. Similar-vessel image and builder certificate only. No numerical inventory, material grade, recipe, refrigerant, actual M, regulatory approval or operational performance adopted. |
| nma-lightship-2020 | standard | Norwegian Maritime Authority, KS-0179-1E OTI, Procedures for determination of light ship displacement and centre of gravity of Norwegian ships, Rev.07.01.2020, printed/physical pp.3,5–7. https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf | Historical ship-survey method example, expressly including fishing ships on p.3; completeness/tank/draft/hydrostatic context pp.5–7. Supports requirement for actual controlled survey originals and net-configuration reconciliation; not a current legal obligation, vessel measurement, numeric limit or M conversion factor. |
