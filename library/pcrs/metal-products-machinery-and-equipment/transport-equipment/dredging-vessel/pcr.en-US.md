---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.dredging-vessel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Steel-hulled diesel stationary cutter suction dredger manufacture

## 1. Scope and Applicability

This candidate PCR covers new complete steel-hulled diesel non-self-propelled stationary cutter suction dredgers. It narrows CPC49319 to one manufacturing architecture: installed cutter/ladder, slurry pump and onboard pipes, positioning spuds/winches, diesel/hydraulic power and control/safety outfitting. Exclude self-propelled dredgers, trailing suction hopper, grab/bucket/backhoe dredgers, floating cranes/docks, warships, drilling platforms, separate external discharge pipelines/boosters/workboats, bare pontoons, repairs/conversions and dredging services. One accepted finished unit means one complete vessel; Chinese 设备 has the same measurement meaning.

Collect actual receipt-to-builder-delivery hull fabrication/joining, conditional coating, power and dredging integration, outfitting, launch and attributable assembly/afloat acceptance trials. Include measured temporary testing only when part of manufacturing acceptance. Sediment excavation/placement, ecosystem changes, operational dredging throughput, customer towing voyages, maintenance and end of life are excluded. Manufacturer originals support architecture and configuration dependence, not universal recipes, mass, performance or intensity. Missing supplier-production links prevent complete cradle-to-gate claims; scientific review is pending. [Sources: damen-csd350; ihc-beaver50-2023]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.dredging-vessel |
| classification_refs | CPC3.0 49319; narrower context only, no accepted mapping |
| covered_products | Complete steel-hulled diesel non-self-propelled cutter suction dredgers |
| excluded_products | Other dredger architectures, self-propelled vessels, platforms and other floating machinery; external pipeline/support craft; intermediates, repairs and services |
| representative_product | One accepted serial-linked complete dredger in documented net delivery configuration |
| production_route | Conditional stock forming; steel hull joining; conditional coating; diesel/hydraulic, cutter/pump/positioning integration; controls/safety; launch and acceptance |
| market_state | New accepted complete configured dredger; installed working fluids included, temporary/operational consumables and external equipment excluded from M |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the declared complete configured stationary cutter suction dredger |
| How much | 1 kg accepted net vessel output, with per-vessel exchange records divided by actual M |
| How well | Meet actual hull/module connection, pump/drive, cutter/ladder/positioning, hydraulic/electrical/safety and vessel-specific release criteria under documented test conditions. Equal mass does not establish equal soil type, dredging depth, pump output or service performance. No brochure capacity or power becomes a manufacturing factor. |
| How long or cycle | One manufacture and construction-acceptance cycle; no assumed operating lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete steel-hulled diesel stationary cutter suction dredger |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model; hull serial/drawing revision; steel hull/module completeness; non-self-propelled diesel cutter-suction route; actual cutter/head drive, ladder, slurry pump/wear materials and onboard piping; spuds, winches, fixed-spud or carriage positioning; control/electrical/safety scope and retained working fluids; actual assembly/trial criteria and net delivery state; controlled positive M kg from current physical lightship/weight inspection with original measured inputs, calibration and signed correction balance; exclude external pipeline/booster/workboat, fuel/fresh water/ballast/persons, temporary test sediment/weights, protection and separate spares; actual site/period, supplier inclusions and gate |

M is the controlled actual net mass of this complete accepted configuration, including installed hull, drive and dredging machinery, outfitting, actual retained hydraulic/lubricating/cooling fluids and integral delivered parts. Exclude test sediment, persons, consumable fuel/fresh water/ballast, temporary trial weights and external pipes, spares, protection and external support craft. Do not equate survey displacement or catalogue tonnage with net M; retain current original physical lightship/weight inspection and itemized measured corrections to the exact net delivery scope below. No whole-ship platform scale is assumed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | controlled acceptance mass records | Mass | kg | Controlled acceptance mass is an acquisition interface, not proof of measurement. Require current original actual lightship/weight inspection, serial/configuration and delivery-state records, a traceable measured/checking method and itemized mass balance. Reconcile additions/deductions and installed service fluids to this PCR net scope. For survey-derived records retain observed draught/freeboard, actual water density, verified hull hydrostatics, instrument calibration and measured temporary/tank contents; no uncorrected displacement or design estimate replaces net M. The historical Norwegian procedure is a method example, not a current universal legal threshold. [Source: nma-lightship] |
| `engine_count` | marine_engine | Number of items | Item(s) | Count independent supplied engines in Item(s), retaining marine specification and independently measured installed mass for M/BOM reconciliation. A purchased complete genset replaces included engine count. No fixed engine mass is assumed. |
| `energy_conversion` | electricity | Net calorific value | MJ | Actual measured kWh converts by verified unit identity 3.6 MJ/kWh; retain intake voltage and site route. Engine/motor nameplate kW is not measured energy. |
| `formulation_mass` | liquid formulations | Mass | kg | Weigh the actual coating base, hardener, fuel or service-fluid formulation separately. Volume-to-mass requires measured density at declared composition/state/temperature; no tank capacity or brochure coating coverage factor. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified stock/blocks and machinery/outfitting modules, with actual supplier inclusions |
| starting_condition_role | Foreground receipt-to-accepted-vessel delivery manufacture |
| product_classification_scope | Steel-hulled diesel stationary cutter suction dredger with installed cutter/ladder/slurry-pump/positioning systems |
| recursive_input_rule | No complete stationary cutter suction dredger recursively generated as its own input; bought-in finished blocks/modules bypass included operations |
| upstream_dataset_requirement | Match actual grades/formulations/module completeness/pump drive, period/geography and property; disclose missing supplier production |
| disclosure | builder/model; hull serial/drawing revision; steel hull/module completeness; non-self-propelled diesel cutter-suction route; actual cutter/head drive, ladder, slurry pump/wear materials and onboard piping; spuds, winches, fixed-spud or carriage positioning; control/electrical/safety scope and retained working fluids; actual assembly/trial criteria and net delivery state; controlled positive M kg from current physical lightship/weight inspection with original measured inputs, calibration and signed correction balance; exclude external pipeline/booster/workboat, fuel/fresh water/ballast/persons, temporary test sediment/weights, protection and separate spares; actual site/period, supplier inclusions and gate |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | Include actual manufacture, attributable rework, launching and construction commissioning to declared acceptance gate. Allocate independently measured production-support trial resources; exclude operational dredging/excavation service and research/operational maintenance. Add every actual tug/dock/crane service or fuel as a separate declared exchange when included, with service boundary/duration and supplier scope. No lifetime voyage burden is inferred. |  |
| `boundary_modules` | purchased components | Count finished hull blocks, power packages and fitted control/safety modules once with constituents and prefills. Replace constituent cards for included supply. Actual in-house manufacture needs measured component inventories. Complete the full actual BOM, all conditional chemistries and demonstrated species before dataset release; the candidate cards are not an exhaustive vessel bill. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | Hull stock cutting and forming | conditional | Unformed hull stock is processed inside the reporting shipyard boundary. | foreground | one accepted configured stationary cutter suction dredger, normalized with M |
| `hull_join` | Hull/block joining and structural completion | required | Each new complete steel-hulled stationary cutter suction dredger. | foreground | one accepted configured stationary cutter suction dredger, normalized with M |
| `surface_finish` | Conditional surface preparation and coating | conditional | Actual preparation/coating occurs in the reporting foreground. | foreground | one accepted configured stationary cutter suction dredger, normalized with M |
| `machinery` | Diesel drive and hydraulic power installation | required | Every declared complete diesel stationary cutter suction dredger. | foreground | one accepted configured stationary cutter suction dredger, normalized with M |
| `dredging` | Cutter, ladder, pump and positioning integration | required | Every declared complete diesel stationary cutter suction dredger. | foreground | one accepted configured stationary cutter suction dredger, normalized with M |
| `outfit` | Control, electrical and safety outfitting | required | Every declared complete diesel stationary cutter suction dredger. | foreground | one accepted configured stationary cutter suction dredger, normalized with M |
| `acceptance` | Launch, commissioning and vessel acceptance | required | Each complete vessel released at the declared shipyard delivery gate. | foreground | one accepted configured stationary cutter suction dredger, normalized with M |
| `packing` | Conditional removable delivery protection | conditional | Actual removable protection supplied with the stationary cutter suction dredger. | foreground | one accepted configured stationary cutter suction dredger, normalized with M |

Actual stock forming feeds hull joining and conditional finishing, machinery/outfitting and launch/commissioning/acceptance, then conditional delivery protection. Stages may overlap; assign resources once to actual operations and supplier scope. Every card is conditional on exact composition/state/configuration, even in required stages. Add each actual omitted component/fuel/chemical and demonstrated waste/emission independently. No universal welding/coating recipe or obligatory emission is claimed.

### Process: Hull stock cutting and forming (`stock_form`)

Cut/form declared plate and profiles from serial-linked approved structural drawings. Track grade, thickness, material certification, issues/returns and offcuts. Bought-in fabricated blocks replace their included stock and completed fabrication once. Actual cutting gases, lubricants and other fabrication consumables need separate chemistry-specific cards. The actual job records must establish each fabrication operation; manufacturer architecture evidence does not establish a universal recipe.

#### Inputs

##### Product flows

###### Hot-rolled normal-strength certified shipbuilding steel plate (`normal_hull_plate`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Hot-rolled normal-strength certified shipbuilding steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `damen-csd350`

###### Steel Plate (`hsla_plate`)

Only actual hot-rolled low-alloy high-strength thick plate matching the public physical route, grade and thickness. Shipbuilding suitability/material approval must be independently established from actual drawings and supplier records; this identity is not a marine approval. Other steel grades require separate rows.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `damen-csd350`

###### Hot-rolled steel ship-hull stiffener profile (`hull_profile`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Hot-rolled steel ship-hull stiffener profile
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `damen-csd350`

###### Alternating current (`electricity_stock_form`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `damen-csd350`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Segregated untreated steel cutting offcuts leaving after internal reuse; weigh actual amount and retain recipient without included treatment.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock_form`
- Sources: `damen-csd350`

### Process: Hull/block joining and structural completion (`hull_join`)

Assemble/join hull sections, bulkheads, decks and superstructure according to the declared construction route, joining procedures and acceptance records. Record actual welding method, filler/gas, distortion corrections, structural inspections and rework. Purchased blocks bypass their performed constituent manufacture; intermediate block mass is not finished vessel M. Welding variants do not imply all fillers/gases are present.

#### Inputs

##### Product flows

###### Solid low-alloy steel gas-shielded welding wire (`solid_wire`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Solid low-alloy steel gas-shielded welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `damen-csd350`

###### Carbon dioxide (`co2_shield`)

Only supplied pure CO2 shielding gas actually used in the at-plant China route matching this identity. Collect measured consumed mass; no argon premix, liquid-state substitution or presumed fossil release.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `damen-csd350`

###### Argon/carbon-dioxide premixed welding shielding gas (`argon_mix`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Argon/carbon-dioxide premixed welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `damen-csd350`

###### Alternating current (`electricity_hull_join`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `damen-csd350`

#### Outputs

##### Waste flows

###### Captured iron-oxide-rich hull-welding filter dust (`weld_dust`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Captured iron-oxide-rich hull-welding filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hull_join`
- Sources: `damen-csd350`

### Process: Conditional surface preparation and coating (`surface_finish`)

Collect actual cleaning/blasting, coating base and hardener separately, antifouling where applied, curing and waste outlets. Supplier-painted blocks bypass finished layers. Epoxy and Cu2O antifouling are conditional exact-chemistry examples, not compulsory recipes. Add alternative layers and actual thinner/cleaner species individually. Captured abrasive/paint residues are waste; actual measured environmental releases require separate elemental/species cards.

#### Inputs

##### Product flows

###### Process Water (`clean_water`)

Actual supplied treated industrial process water for cleaning; exclude internal circulation and environmental resource withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-csd350`

###### Spherical cast-steel hull-blasting shot (`abrasive`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Spherical cast-steel hull-blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-csd350`

###### Formulated epoxy marine-coating base component (`epoxy_base`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Formulated epoxy marine-coating base component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-csd350`

###### Polyamine marine-epoxy coating hardener formulation (`epoxy_hardener`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Polyamine marine-epoxy coating hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-csd350`

###### Cuprous-oxide self-polishing marine antifouling paint formulation (`cu2o_paint`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Cuprous-oxide self-polishing marine antifouling paint formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-csd350`

###### Alternating current (`electricity_surface_finish`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-csd350`

#### Outputs

##### Waste flows

###### Spent steel blasting shot with removed hull-coating residue (`spent_abrasive`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Spent steel blasting shot with removed hull-coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-csd350`

###### Aqueous steel-hull cleaning effluent transferred for treatment (`clean_effluent`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Aqueous steel-hull cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-csd350`

### Process: Diesel drive and hydraulic power installation (`machinery`)

Install actual independent diesel engines, pump-drive clutch/reduction/bearing block and hydraulic power units, with documented cooling/exhaust/control and first fills. A bought complete power package replaces included engine/gear/hydraulic constituents. No propeller or propulsion train is assumed: this scope is non-self-propelled. Document any separately supplied auxiliary generator and its contents once. Supplier assemblies do not imply in-yard foundry or engine manufacture.

#### Inputs

##### Product flows

###### Diesel engine (`marine_engine`)

Only an independently supplied assembled compression-ignition marine piston engine within public non-motor-vehicle/non-aircraft scope. Collect actual Item(s) count and separately measured installed mass for vessel M; count is not mass. Omit this input inside a purchased complete genset or propulsion package.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `ihc-beaver50-2023`

###### Complete diesel dredge-pump reduction-and-clutch assembly (`pump_drive`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete diesel dredge-pump reduction-and-clutch assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `ihc-beaver50-2023`

###### Complete oil-hydraulic cutter/positioning power unit (`hydraulic_unit`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete oil-hydraulic cutter/positioning power unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `ihc-beaver50-2023`

###### Complete water-cooled diesel-engine heat-exchanger assembly (`engine_cooling`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete water-cooled diesel-engine heat-exchanger assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `ihc-beaver50-2023`

###### Hydraulic Fluid (`hydraulic_oil`)

Only actual supplied mineral-base formulated hydraulic fluid matching the public at-plant vacuum-distillation/hydrogenation/refining route and supplier additive/composition records. Preserve Mass reference property rather than secondary Volume, weigh first-fill issue/return/retained balance; do not add inside supplier-prefilled hydraulic unit. Synthetic/water-based fluid or unmatched route requires separate exact identity.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `ihc-beaver50-2023`

###### Alternating current (`electricity_machinery`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `ihc-beaver50-2023`

### Process: Cutter, ladder, pump and positioning integration (`dredging`)

Fit the actual cutter head/drive, ladder and hoisting gear, abrasion-compatible slurry pump, onboard suction/discharge piping, spuds and swing positioning winches/anchors. Record fixed-spud versus optional spud-carriage configuration independently. Pump materials, cutter teeth, liners, drive mechanism and onboard pipe dimensions follow actual supplier drawings; the historical Beaver example is not a universal design. Installed integral modules belong to net M, including detached delivered pontoon/ladder/spud parts reconciled to accepted configuration. External discharge pipelines, booster craft and workboats remain separate products.

#### Inputs

##### Product flows

###### Complete rotary dredging cutter-head assembly (`cutter`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete rotary dredging cutter-head assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Complete steel cutter-suction dredger ladder assembly (`ladder`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete steel cutter-suction dredger ladder assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Complete abrasion-resistant centrifugal dredging-slurry pump (`slurry_pump`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete abrasion-resistant centrifugal dredging-slurry pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Finished steel onboard dredge-slurry pipe spool (`onboard_pipe`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Finished steel onboard dredge-slurry pipe spool
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Finished steel dredger positioning spud (`spud`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Finished steel dredger positioning spud
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Complete hydraulic dredger swing winch (`winch`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete hydraulic dredger swing winch
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Finished steel dredger swing wire rope (`wire_rope`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Finished steel dredger swing wire rope
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Finished steel dredger swing anchor (`anchor`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Finished steel dredger swing anchor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Complete steel dredger spud-carriage assembly (`spud_carriage`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete steel dredger spud-carriage assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

###### Alternating current (`electricity_dredging`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dredging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dredging`
- Sources: `ihc-beaver50-2023`

### Process: Control, electrical and safety outfitting (`outfit`)

Install fitted control cabin, electrical distribution/cabling, actual pump-pressure/instrumentation and safety/bilge systems. Deck cranes, air conditioning, navigation and automation packages are conditional actual fitted assemblies. No accommodation or remote monitoring subscription is automatically part of vessel manufacture. Count complete modules once and add all omitted actual hardware/pipe species before dataset completion.

#### Inputs

##### Product flows

###### Insulated-copper marine electrical cable (`cable`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Insulated-copper marine electrical cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `ihc-beaver50-2023`

###### Filled lead-acid marine starter battery (`starter_battery`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Filled lead-acid marine starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `ihc-beaver50-2023`

###### Laminated safety-glass marine window pane (`window`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Laminated safety-glass marine window pane
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `ihc-beaver50-2023`

###### Finished marine centrifugal bilge-water pump (`bilge_pump`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine centrifugal bilge-water pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `ihc-beaver50-2023`

###### Finished carbon-steel marine bilge pipe (`bilge_pipe`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished carbon-steel marine bilge pipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `ihc-beaver50-2023`

###### Complete steel dredger control-cabin module (`control_cabin`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete steel dredger control-cabin module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `ihc-beaver50-2023`

###### Complete dredge-slurry pressure-transducer assembly (`pressure_sensor`)

Only the actual independently supplied configured component; record supplier inclusions, physical specification and weighed net issues/returns. Do not double count inside a complete module.

- Selected flow: Complete dredge-slurry pressure-transducer assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `ihc-beaver50-2023`

###### Alternating current (`electricity_outfit`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `ihc-beaver50-2023`

### Process: Launch, commissioning and vessel acceptance (`acceptance`)

Collect actual launch and afloat assembly, pump/drive, cutter/ladder, spud/winch, hydraulic/control and safety acceptance tests and attributable rework against configuration-specific release criteria. No universal duration, route, dredged volume, soil type or load is assumed. Record actual temporary test water/sand, circulation/makeup/recovery and waste recipient; exclude later operational excavation/soil placement/ecosystem change. Distinguish fuel issue/return/consumption from fuel retained for owner operations. Temporary medium, fuel/fresh water/ballast/persons and external pipes are excluded from net M; retained integral service fluids and delivered modules reconcile to net configuration. Claimed flag/class acceptance needs actual applicable original records.

#### Inputs

##### Product flows

###### Petroleum-fraction marine lubricating oil formulation (`mineral_oil`)

Only actual petroleum-fraction lubricating oil matching independently supplied first-fill formulation. Record net issue and retained installed amount for M; no second fill if supplier included, and descriptive calorific value is not a manufacturing factor. Different actual oil formulations require independent rows.

- Selected flow: Petroleum-fraction marine lubricating oil formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### Inhibited ethylene-glycol/water marine-engine coolant premix (`coolant`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Inhibited ethylene-glycol/water marine-engine coolant premix
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### Fossil low-sulphur marine diesel fuel supplied for commissioning (`test_diesel`)

Only actual fossil low-sulphur marine diesel grade consumed in attributable construction trials. Retain supplier specification and fossil provenance, calibrated issue/return and tank sounding/density under actual conditions; distinguish trial consumption from unused fuel and fuel retained solely for later owner voyages. Remaining owner fuel is outside manufactured net M and is not trial consumption. No default sulphur percentage, heating value or emission factor is assumed.

- Selected flow: Fossil low-sulphur marine diesel fuel supplied for commissioning
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### Silicon-dioxide quartz sand for commissioning tests (`test_quartz`)

Only if weighed actual quartz sand is used in attributable acceptance pump/cutter testing; record composition, grain distribution and recovery. No universal slurry test medium is mandated; natural contaminated sediment requires distinct measured constituents and scope.

- Selected flow: Silicon-dioxide quartz sand for commissioning tests
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### Process Water (`trial_water`)

Actual supplied process-water makeup for commissioning; circulation counted once, not environmental water withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### Alternating current (`electricity_acceptance`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

#### Outputs

##### Product flows

###### Accepted complete steel-hulled diesel stationary cutter suction dredger (`finished_machine`)

One kg of accepted complete net configured dredger; reconcile hull, installed dredging/drive/control systems and retained working fluids, exclude test sediment, consumable fuel/fresh water/ballast, external discharge pipeline, workboat and removable protection. No dredging service output or excavated-volume denominator.

- Selected flow: Accepted complete steel-hulled diesel stationary cutter suction dredger
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `nma-lightship`

#### Outputs

##### Waste flows

###### Spent petroleum lubricating oil transferred for treatment (`spent_oil`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Spent petroleum lubricating oil transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### Aqueous quartz-sand commissioning slurry transferred for treatment (`quartz_test_slurry`)

Only measured outgoing water/quartz test suspension; record dry solids, liquid composition, recipient and recoveries. Do not also count its contained water or quartz as separate outgoing masses. No routine operational dredged spoil is included.

- Selected flow: Aqueous quartz-sand commissioning slurry transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only attributable measured fossil-fuel commissioning CO2 released to air, unspecified subcompartment, with demonstrated fossil provenance; no inferred shielding-gas or operational-lifetime factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### nitrogen monoxide (`nitric_oxide`)

Only independently measured commissioning NO released to air, unspecified subcompartment. A total NOx result without species split does not establish this amount; no obligatory emission is assumed.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only independently measured commissioning NO2 released to air, unspecified subcompartment. A total NOx result without species split does not establish this amount; no obligatory emission is assumed.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `nma-lightship`

### Process: Conditional removable delivery protection (`packing`)

Measure each actual protection material separately and exclude it from M. Delivery-detached integral parts are weighed and reconciled with complete vessel configuration; separately sold spares, external tow/support craft and transport fixtures are excluded.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only removable non-self-adhesive, non-cellular, unreinforced/unlaminated PE-LD protection foil; weigh actual issue-return balance, exclude from M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packing`
- Sources:

###### Alternating current (`electricity_packing`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared shipyard resources | Separate hull orders/configurations and directly attribute measured stock issues/returns, machinery receipts, work hours, meters, trials and rework first. Inseparable shared resources use a demonstrated measured causal driver such as operation time/load or coating area/layer requirement: share = order driver / sum of drivers for all covered orders. Retain period, denominator and causality; tonnage, nominal displacement or equal vessel count is not an automatic causal driver. | `ghg-product-allocation-2011` |
| `allocation_recovery` | internal reuse and waste | Internal reused stock/water/test fuel is a transfer, not repeated fresh input or an automatic credit. Exported waste retains its measured quantity and recipient with no assumed avoided-production benefit. Separate saleable co-products before a documented reviewed residual allocation. Reconcile rejected/reworked construction and work in progress to accepted output during the reporting period. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete-vessel net mass | controlled_acceptance_record | model; configuration; serial number; accepted net mass M; original acceptance/weight-report id/date; actual lightship/weight-inspection method; instrument/calibration; delivery state; installed service fluids; itemized added/deducted masses; cargo/persons/fuel/fresh water/ballast/testing-load exclusions; detached integral parts; verifier; mass balance | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted vessel | actual construction/acceptance period of that vessel | declared shipyard acceptance gate | accepted net mass per unit | original actual inspection, configuration correction, mass-balance and verification records |
| `cp_stock_form` | stock_form | Hull stock cutting and forming | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect material certificates/drawing revisions, weighed issues/returns/offcuts, actual forming/cutting operations and station meters. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_hull_join` | hull_join | Hull/block joining and structural completion | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain block scope, weld procedures/inspection, filler/gas issues and actual meters; reconcile outsourced joining once. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_surface_finish` | surface_finish | Conditional surface preparation and coating | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain layer SDS/base-hardener ratio, measured issues/returns, coated area/layer scope, water, captured residues and actual species measurements. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_machinery` | machinery | Diesel drive and hydraulic power installation | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain engine/module serials, supplier inclusions, actual independent counts and installed mass, alignment and hydraulic/engine circuit and fill balances. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_dredging` | dredging | Cutter, ladder, pump and positioning integration | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain supplier assemblies/constituents, actual cutter/pump/ladder/spud scope, independently weighed installed masses, connection drawings, hydraulic settings and assembly/positioning acceptance records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_outfit` | outfit | Control, electrical and safety outfitting | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect control/electrical drawings, module receipts/inclusions, weigh fitted items, retain actual instruments/calibration and safety/functional test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_acceptance` | acceptance | Launch, commissioning and vessel acceptance | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain builder acceptance/weight report originals, actual lightweight survey/weight inspection, calibration/configuration and additions/deductions, tests/fills, fuel origin and measured species/outlets. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_packing` | packing | Conditional removable delivery protection | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Weigh actual protection issues/returns and reconcile delivered integral parts. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each hull/configuration order collect attributable net stock issues, independent modules, utilities, construction trial consumption, wastes and actual emissions; subtract recorded returns and inventory change and apply justified shared allocation, then divide by accepted vessel count to obtain q_item and by the same controlled measured net M. Preserve engine exchanges Item(s)/kg, independently measured engine mass for vessel completeness, mass exchanges kg/kg and electricity MJ/kg. Compatible serial vessels with measured mass variation may use attributable totals divided by summed accepted net masses, retaining all serial records. Separate incompatible pump drive, hull, outfitting, coating and trial scope. Unknown is a gap, never zero. No tonnage/capacity/rated-power or lifetime conversion is inferred.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | The original current vessel acceptance mass record must implement mass_record_provenance. Retain actual physical lightship/weight inspection, observable method inputs/calibration and a signed item-level reconciliation to delivered net configuration; reconcile independently weighed installed modules and fluids. A catalogue or unexplained displacement/tonnage record is insufficient. Missing method, uncertain correction or configuration change prevents a complete quantitative dataset; resolve by new measurement/reconciliation, never an assumed weight. | originals/correction ledger; nma-lightship is a method example only |
| `quality_bom` | complete vessel | Reconcile drawings/BOM and installed hull/machinery/pump drive, piping/electrical, control/safety/navigation and actual service-fluid masses, supplier scope and detached delivered parts. Add all actual missing components before completion; received complete modules count once. | original drawings, weighing and supplier scope |
| `quality_balances` | flows and trials | Retain calibration, material issues/returns/reuse, actual formulation/density, commissioning consumed versus retained fuel and measured species/medium/outlets. Define QA limits from applicable actual records or verified comparable evidence; no invented yield, intensity range or universal commissioning consumption. | stock, meters, SDS, trial and transfer records |
| `quality_dredging` | dredging; acceptance | Retain actual hull/module drawings and supplier assembly inclusions, cutter/ladder/pump/wear-material design, positioning arrangement, installed pipe/hydraulic circuits and measured mass. Retain afloat trial conditions: temporary versus retained contents, test medium composition/particle distribution, circulation/makeup/recovery/waste transfer, cutter and positioning actions, actual pump pressures/flow/load, duration and calibrated meters. No brochure soil-density/pump-output curve, nominal power or default test duration converts to exchange quantities. Dismantled delivery reconciles all integral modules to the same accepted net M; external pipelines remain excluded. Missing actual test/mass balances are scientific data gaps. | actual drawings, weighing and calibrated trial reports |
| `quality_coverage` | dataset | Disclose actual geography/period/configurations, conditional absence, outsourcing, identity/quantity uncertainty, empirical range gaps, missing upstream and applicable acceptance regime. Historical manufacturer/authority examples do not prove present certificates, current legal completeness or the actual M of this vessel. PCR checking validates the declared relationship, not a real ship record or scientific approval. | coverage/evidence limitations register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require complete configured steel-hulled diesel stationary cutter suction dredger and positive actual net M from controlled records implementing mass_record_provenance. Exclude operational sediment/persons/fuel/fresh water/ballast and temporary loads, retain declared installed service fluids. Reject tonnage, deadweight, catalogue/full-load displacement or full-fuel mass substitution. Missing underlying method or balance requires review and blocks completed quantitative data. |  |
| `validate_identity` | all rows | Check each atomic physical/chemical exchange, public reference property/unit group, route/state and supplier scope. Engine item count is not mass; a genset includes its engine once; CuO is not Cu2O paint; water supply is not effluent or resource withdrawal. Keep unsupported identity blank and add actual species/components before completion. |  |
| `validate_measurement` | all rows | Verify every amount/collection/conversion against same configuration, actual period/site, accepted count and net M. Reconcile installed prefills, consumed trial fuel and supplier constituents without duplication; verify calibration, density/unit conversions and shared denominator. Unknown is never zero. |  |
| `validate_species` | elementary rows | Use only demonstrated attributable construction-trial species and actual environmental medium. These CO2/NO/NO2 identities are air-unspecified immediate releases; fossil CO2 requires fossil provenance. Total NOx without species split, N2O, nitrogen/nitrite, biogenic CO2, water/soil and long-term releases cannot substitute. Captured dust remains waste. |  |
| `validate_acceptance` | claimed flag/class acceptance | Trace actual vessel-specific surveys/certificates and applicable administration/class regime when claimed. Generic manufacturer certification does not certify this stationary cutter suction dredger; no universal numerical standard/test/load is adopted. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete steel-hulled diesel stationary cutter suction dredger foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching hull/pump drive/outfitting/coating, controlled net-mass scope, trial boundary, gate/site/period |
| excluded_use | Operational dredging/excavation service or lifetime comparison, equal-mass capacity equivalence, other dredger architectures/materials and unsupported complete cradle-to-gate claims |
| required_metadata | builder/model; hull serial/drawing revision; steel hull/module completeness; non-self-propelled diesel cutter-suction route; actual cutter/head drive, ladder, slurry pump/wear materials and onboard piping; spuds, winches, fixed-spud or carriage positioning; control/electrical/safety scope and retained working fluids; actual assembly/trial criteria and net delivery state; controlled positive M kg from current physical lightship/weight inspection with original measured inputs, calibration and signed correction balance; exclude external pipeline/booster/workboat, fuel/fresh water/ballast/persons, temporary test sediment/weights, protection and separate spares; actual site/period, supplier inclusions and gate |
| required_quality_disclosure | Identity/quantity and mass-provenance gaps, uncertainty, conditional absences, full BOM, allocation, actual acceptance scope and unlinked upstream |
| update_trigger | Hull/pump drive/outfitting/coating, supplier modules, actual M evidence/corrections, trial state/boundary, manufacturing/acceptance regime, site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `damen-csd350` | literature | [Damen CSD350](https://www.damen.com/vessels/dredging-and-dredging-equipment/cutter-suction-dredgers/csd350) | Product-description and option paragraphs: dismountable modular architecture, cutter/pump and optional positioning/navigation packages. Undated publisher snapshot. No catalogue mass, power, depth, capacity, lifetime or manufacturing recipe adopted. |
| `ihc-beaver50-2023` | literature | [Royal IHC Beaver50 RevA110569933 July2023](https://www.royalihc.com/sites/default/files/documents/%E2%80%A2RIHC%20Dredging%20Productsheet%20Beaver%2050_110569933.pdf) | PDF1–2: diesel cutter suction architecture, non-self-propelled model, pump/drive, hydraulic and positioning systems, assembly/afloat testing, detachable delivery and optional auxiliaries. Historical model example only; no present certificate, emissions compliance, recipe, nominal spud weight, fuel-consumption or pump-output factor adopted. Page2 curve limitations show performance dependence on material/site conditions. |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E, Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/printed pp.5–7, sections3.1–3.4: ship identification, inspection state, completion/deduction weights, water density, tanks and draught/freeboard. Historical Norwegian method example; current actual vessel method and signed net-configuration corrections are required. No historical tank/trim thresholds or global legal requirement adopted. Retained original examined. |
| `ghg-product-allocation-2011` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, 2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | Printed63/PDF65 tables9.1–9.2: historical allocation hierarchy only; require actual causal-driver evidence, no universal vessel allocation factor. Retained original examined. |
