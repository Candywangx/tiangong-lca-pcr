---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.refrigerated-cargo-vessel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Steel-hulled diesel refrigerated cargo vessel manufacture

## 1. Scope and Applicability

This candidate PCR covers new complete steel-hulled diesel refrigerated cargo ships, with fixed insulated refrigerated holds and actual R717 anhydrous-ammonia refrigeration. Mechanical-diesel and diesel-electric arrangements, direct ammonia and secondary-brine systems are separate declared configurations. The boundary is narrower than CPC 49313. Exclude tankers, fishing/catching or onboard-processing vessels, passenger ships, container-only refrigeration vessels, other hull materials, alternative-fuel/hybrid propulsion, non-ammonia refrigeration, bare hulls, conversion/repair and transport service. One accepted finished unit means one complete vessel, with Chinese 设备 carrying the same measurement meaning.

Collect actual receipt-to-shipyard-delivery fabrication, joining, coating, machinery/outfitting, fixed cold-hold integration, launch and attributable construction trials/rework. Supplier production requires explicit links before any complete cradle-to-gate claim. Exclude cargo production, voyages, customer refrigeration energy, freight output, maintenance and end of life; no lifetime or tonne-distance equivalence. Shipyard and independent equipment-manufacturer originals establish possible architecture only, not mandatory chemistry, manufacturing intensity or current certificates. Scientific review remains pending. [Sources: kyokuyo-reefer; gea-reefer]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.refrigerated-cargo-vessel |
| classification_refs | CPC 3.0 49313; narrower context only, no accepted mapping |
| covered_products | Complete steel-hulled diesel fixed-hold refrigerated cargo ships with actual R717 refrigeration |
| excluded_products | Tankers, fishing/processing, passenger and container-only vessels; other hull/propulsion/refrigerants; intermediates, repairs and services |
| representative_product | One accepted serial-linked complete vessel in its declared corrected net delivery configuration |
| production_route | Conditional stock forming, hull joining, conditional surface finishing, machinery, insulated holds and refrigeration, cargo/safety outfitting, launch and acceptance |
| market_state | New complete accepted shipyard-delivery vessel; installed refrigeration charge and service fluids included, operational consumables excluded from M |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the declared complete configured refrigerated cargo vessel |
| How much | 1 kg accepted net vessel output, with per-vessel exchange records divided by actual M |
| How well | Meet vessel-specific structural, machinery, safety, refrigeration tightness, thermal/airflow and release criteria under documented actual test conditions. Equal mass is not equal cargo capacity, temperature performance or freight service. No catalogue temperature, hold capacity or marketing energy benefit is prescribed. |
| How long or cycle | One manufacture and construction-acceptance cycle; no assumed operating lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Refrigerator vessels (ships), except tankers `331ba65e-48c0-492e-b791-96b2a30831e8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model; hull serial and drawing revision; fixed refrigerated cargo hold arrangement, steel grades and block completeness; declared mechanical-diesel or diesel-electric propulsion; actual R717 ammonia refrigeration, direct or secondary-brine circuit, refrigerant purity/charge and retained service fluids; insulation chemistry/blowing agent, liner/vapour barrier, hold closures, air distribution and fitted handling equipment; actual test criteria and thermal design; controlled positive net M in kg, current original actual lightship/weight survey and signed net-configuration correction balance; exclusion of cargo, persons, consumable fuel/fresh water/ballast, temporary trial loads, cargo pallets and reefer containers; actual shipyard/site/period/route, supplier boundaries and delivery gate |

M is the controlled actual net mass of this complete accepted configuration, including installed hull, machinery, cold-hold envelope, outfitting, actual retained refrigerant/brine/oil and integral delivered parts. Exclude cargo, persons, consumable fuel/fresh water/ballast, temporary trial weights, loose pallets/containers, spares, protection and external support craft. Do not equate survey displacement or catalogue tonnage with net M; retain current original physical lightship/weight inspection and itemized measured corrections to the exact net delivery scope below. No whole-ship platform scale is assumed.

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
| product_classification_scope | Steel-hulled diesel refrigerated cargo vessel with fixed insulated holds and R717 refrigeration |
| recursive_input_rule | No complete refrigerated cargo vessel recursively generated as its own input; bought-in finished blocks/modules bypass included operations |
| upstream_dataset_requirement | Match actual grades/formulations/module completeness/propulsion, period/geography and property; disclose missing supplier production |
| disclosure | builder/model; hull serial and drawing revision; fixed refrigerated cargo hold arrangement, steel grades and block completeness; declared mechanical-diesel or diesel-electric propulsion; actual R717 ammonia refrigeration, direct or secondary-brine circuit, refrigerant purity/charge and retained service fluids; insulation chemistry/blowing agent, liner/vapour barrier, hold closures, air distribution and fitted handling equipment; actual test criteria and thermal design; controlled positive net M in kg, current original actual lightship/weight survey and signed net-configuration correction balance; exclusion of cargo, persons, consumable fuel/fresh water/ballast, temporary trial loads, cargo pallets and reefer containers; actual shipyard/site/period/route, supplier boundaries and delivery gate |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | Include actual manufacture, attributable rework, launching and construction commissioning to declared acceptance gate. Allocate independently measured production-support trial resources; exclude cargo refrigeration/freight service and research/operational maintenance. Add every actual tug/dock/crane service or fuel as a separate declared exchange when included, with service boundary/duration and supplier scope. No lifetime voyage burden is inferred. |  |
| `boundary_modules` | purchased components | Count finished hull blocks, gensets/thrusters and fitted accommodation/safety modules once with constituents and prefills. Replace constituent cards for included supply. Actual in-house manufacture needs measured component inventories. Complete the full actual BOM, all conditional chemistries and demonstrated species before dataset release; the candidate cards are not an exhaustive vessel bill. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | Hull stock cutting and forming | conditional | Unformed hull stock is processed inside the reporting shipyard boundary. | foreground | one accepted configured refrigerated cargo vessel, normalized with M |
| `hull_join` | Hull/block joining and structural completion | required | Each new complete steel-hulled refrigerated cargo vessel. | foreground | one accepted configured refrigerated cargo vessel, normalized with M |
| `surface_finish` | Conditional surface preparation and coating | conditional | Actual preparation/coating occurs in the reporting foreground. | foreground | one accepted configured refrigerated cargo vessel, normalized with M |
| `machinery` | Propulsion and machinery installation | required | Each declared diesel-powered refrigerated cargo vessel configuration. | foreground | one accepted configured refrigerated cargo vessel, normalized with M |
| `refrigeration` | Cold-hold insulation and refrigeration integration | required | Every declared fixed-refrigerated-hold vessel; this PCR narrows refrigeration to actual anhydrous-ammonia systems. | foreground | one accepted configured refrigerated cargo vessel, normalized with M |
| `outfit` | Electrical, cargo-handling and safety outfitting | required | Every complete configured refrigerated cargo vessel. | foreground | one accepted configured refrigerated cargo vessel, normalized with M |
| `acceptance` | Launch, commissioning and vessel acceptance | required | Each complete vessel released at the declared shipyard delivery gate. | foreground | one accepted configured refrigerated cargo vessel, normalized with M |
| `packing` | Conditional removable delivery protection | conditional | Actual removable protection supplied with the refrigerated cargo vessel. | foreground | one accepted configured refrigerated cargo vessel, normalized with M |

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

### Process: Propulsion and machinery installation (`machinery`)

Install the actual diesel propulsion route: mechanical drive uses independently supplied engines, reduction/shaft/propeller scope; diesel-electric uses generating sets, distribution/converters and propulsion motors/thrusters. These are alternatives. Bought-in complete gensets or thrusters replace included engine/motor/gear constituents; marine engine item count is independent of weighed installed mass. Add steering, cooling, exhaust, fuel and every actual pump/pipe/auxiliary module separately when not included. In-house component manufacture needs its own measured module.

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
- Sources: `kyokuyo-reefer`

###### Finished marine propulsion reduction gearbox (`reduction`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine propulsion reduction gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `kyokuyo-reefer`

###### Finished steel marine propeller shaft (`shaft`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished steel marine propeller shaft
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `kyokuyo-reefer`

###### Finished nickel-aluminium-bronze marine propeller (`propeller`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished nickel-aluminium-bronze marine propeller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `kyokuyo-reefer`

###### Finished marine diesel electrical generating set (`diesel_genset`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine diesel electrical generating set
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `kyokuyo-reefer`

###### Finished marine electric propulsion motor (`propulsion_motor`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine electric propulsion motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `kyokuyo-reefer`

###### Finished marine centrifugal bilge-water pump (`bilge_pump`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine centrifugal bilge-water pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `kyokuyo-reefer`

###### Finished carbon-steel marine bilge pipe (`bilge_pipe`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished carbon-steel marine bilge pipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_machinery`
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

### Process: Cold-hold insulation and refrigeration integration (`refrigeration`)

Install actual insulated hold envelope, vapour barrier, liner, closures, compressors, condensers, evaporators, refrigerant pipework and air distribution with the signed thermal design. Record actual direct-ammonia or secondary-brine arrangement separately. GEA documents both grated floors and a floor-independent cooler alternative; neither is universally required. Purchased complete refrigeration skids replace included constituents and charge. The actual R717 purity, circuit pressure/state, charge/recovery and retained fluid are supplier/foreground records, not inferred from GEA marketing. Other refrigerants, onboard fish processing and container-only cooling vessels are excluded.

#### Inputs

##### Product flows

###### Finished rigid-polyurethane closed-cell cold-hold insulation board (`pu_board`)

Only actual supplier-confirmed board with composition/blowing agent/fire specification, measured net issues and fitted mass; insulation chemistry is not inferred from the shipyard source. Separate onsite foam component chemistry if that route is used.

- Selected flow: Finished rigid-polyurethane closed-cell cold-hold insulation board
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Finished stainless-steel refrigerated-hold lining sheet (`liner`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished stainless-steel refrigerated-hold lining sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Aluminium-foil vapour-barrier sheet for cold-hold envelope (`vapour_barrier`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Aluminium-foil vapour-barrier sheet for cold-hold envelope
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Complete insulated steel refrigerated-cargo-hold access door (`door`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Complete insulated steel refrigerated-cargo-hold access door
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Complete marine R717 screw-compressor assembly (`compressor`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Complete marine R717 screw-compressor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Complete seawater-cooled R717 shell-and-tube condenser (`condenser`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Complete seawater-cooled R717 shell-and-tube condenser
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Complete R717 refrigerated-hold air-cooler assembly (`cooler`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Complete R717 refrigerated-hold air-cooler assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Finished welded carbon-steel R717 refrigeration pipe (`refrigerant_pipe`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished welded carbon-steel R717 refrigeration pipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Ammonia, anhydrous, liquid (`ammonia_charge`)

Only actual supplied anhydrous liquid NH3 matching the declared R717 circuit and supplier purity/state. Weigh cylinder issue minus returned/recovered mass, retain installed charge and note prefills included in a purchased skid. Ammonia is not aqueous ammonia, fuel or an emission; no charge per volume assumption.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Inhibited calcium-chloride aqueous refrigeration brine premix (`brine`)

Only actual secondary-brine configuration; record supplied concentration, inhibitor, temperature, density and retained first-fill mass. A direct-ammonia system need not use brine; alternatives need separate exact rows.

- Selected flow: Inhibited calcium-chloride aqueous refrigeration brine premix
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Alternating current (`electricity_refrigeration`)

Only actual purchased user-side China grid-average1–35kV AC supply matching public identity; meter attributable station electricity and shared drivers, preserve actual intake/site/period. Other geography, voltage, own generation or contracted mix needs a separate compatible row, not this identity. Internal distribution is not a second purchased input; nameplate kW is not energy.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

#### Outputs

##### Waste flows

###### Segregated rigid-polyurethane insulation-board offcut waste (`pu_offcut`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Segregated rigid-polyurethane insulation-board offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

###### Recovered anhydrous ammonia refrigerant transferred for treatment (`recovered_ammonia`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Recovered anhydrous ammonia refrigerant transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

#### Outputs

##### Elementary flows

###### ammonia (`ammonia_air`)

Only independently measured attributable NH3 release during factory charging/leak testing/commissioning to prompt external air, unspecified subcompartment. A charge deficit alone does not prove atmospheric emission; distinguish retained charge, return, recovery and waste. No mandatory leak or default percentage.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigeration.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_refrigeration`
- Sources: `gea-reefer`

### Process: Electrical, cargo-handling and safety outfitting (`outfit`)

Install the declared electrical, navigation, crew accommodation, bilge, fire and lifesaving equipment. Cargo derricks/cranes and hold closures are recorded only as fitted configured assemblies; no universal handling system is mandated. Each complete supplied assembly includes its constituents once. Separately identify sensors, ventilation, pipes, winches and other actual components before dataset completion. Cargo pallets, cargo, reefer containers and ship operation are outside manufacture of this complete fixed-hold vessel.

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

###### Finished marine navigation radar assembly (`radar`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine navigation radar assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `kyokuyo-reefer`

###### Packed inflatable marine liferaft (`liferaft`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Packed inflatable marine liferaft
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `kyokuyo-reefer`

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
- Sources: `kyokuyo-reefer`

### Process: Launch, commissioning and vessel acceptance (`acceptance`)

Collect actual launching, harbour/sea commissioning trials, rework and release against configuration-specific criteria. No universal duration, route, distance or test load is assumed. Keep test fuel issue/return/consumption and remaining dispatch contents separately; consumable fuel, fresh water, ballast, persons/crew and cargo are excluded from net manufactured M. Permanently installed service fluids and integral delivered safety equipment belong in the declared configuration and mass reconciliation. Any actual marine propulsion fuel species/origin and emissions are independent measured rows, not lifetime operation. Claimed flag/class acceptance must be traceable to the applicable regime.

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

###### Refrigerator vessels (ships), except tankers (`finished_machine`)

One kg of accepted configured complete steel-hulled diesel refrigerated cargo vessel at the declared shipyard gate, with installed equipment/service fluids reconciled and consumable cargo/fuel/water/ballast excluded from net M. Generic public vessel identity needs all refrigerated cargo vessel qualifiers; no transport service or complete upstream claim.

- Selected flow: Refrigerator vessels (ships), except tankers `331ba65e-48c0-492e-b791-96b2a30831e8`
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
| `cp_machinery` | machinery | Propulsion and machinery installation | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Trace machinery BOM/serial, marine rating and supplier inclusions, actual engine count and separate installed mass, alignment, connection and first-fill records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_refrigeration` | refrigeration | Cold-hold insulation and refrigeration integration | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain hold-envelope drawings and area, each material formulation and weighed installation/waste, machinery serial and skid inclusions, refrigerant charge/recovery/retained mass, coolant composition, hold sensors and actual trial criteria/results. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_outfit` | outfit | Electrical, cargo-handling and safety outfitting | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain wiring/cargo-handling/safety drawings, marine supplier certificates when claimed, measured module receipts, supplier boundaries and installation/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_acceptance` | acceptance | Launch, commissioning and vessel acceptance | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain builder acceptance/weight report originals, actual lightweight survey/weight inspection, calibration/configuration and additions/deductions, tests/fills, fuel origin and measured species/outlets. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_packing` | packing | Conditional removable delivery protection | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Weigh actual protection issues/returns and reconcile delivered integral parts. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each hull/configuration order collect attributable net stock issues, independent modules, utilities, construction trial consumption, wastes and actual emissions; subtract recorded returns and inventory change and apply justified shared allocation, then divide by accepted vessel count to obtain q_item and by the same controlled measured net M. Preserve engine exchanges Item(s)/kg, independently measured engine mass for vessel completeness, mass exchanges kg/kg and electricity MJ/kg. Compatible serial vessels with measured mass variation may use attributable totals divided by summed accepted net masses, retaining all serial records. Separate incompatible propulsion, hull, outfitting, coating and trial scope. Unknown is a gap, never zero. No tonnage/capacity/rated-power or lifetime conversion is inferred.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | The original current vessel acceptance mass record must implement mass_record_provenance. Retain actual physical lightship/weight inspection, observable method inputs/calibration and a signed item-level reconciliation to delivered net configuration; reconcile independently weighed installed modules and fluids. A catalogue or unexplained displacement/tonnage record is insufficient. Missing method, uncertain correction or configuration change prevents a complete quantitative dataset; resolve by new measurement/reconciliation, never an assumed weight. | originals/correction ledger; nma-lightship is a method example only |
| `quality_bom` | complete vessel | Reconcile drawings/BOM and installed hull/machinery/propulsion, piping/electrical, crew/safety/navigation and actual service-fluid masses, supplier scope and detached delivered parts. Add all actual missing components before completion; received complete modules count once. | original drawings, weighing and supplier scope |
| `quality_balances` | flows and trials | Retain calibration, material issues/returns/reuse, actual formulation/density, commissioning consumed versus retained fuel and measured species/medium/outlets. Define QA limits from applicable actual records or verified comparable evidence; no invented yield, intensity range or universal commissioning consumption. | stock, meters, SDS, trial and transfer records |
| `quality_refrigeration` | refrigeration; acceptance | Require actual circuit/hold design, compressor/condenser/cooler/skid inclusions, vapour barrier and insulation composition, charge purity/state and measured installed mass. Retain calibrated leakage/tightness and thermal commissioning protocols: ambient/hold conditions, empty or temporary test loading, temperatures, airflow, duration, meter start/end, refrigerant issue/return/recovery/waste/retention and any independently measured species/outlet. Temporary test cargo and its refrigeration energy are attributable construction trial inputs only, not operational freight. No universal hold temperature, leak percentage or refrigerant-charge intensity is adopted. Missing balance or undocumented test conditions remain scientific data gaps. | actual drawings, SDS, calibration and commissioning reports |
| `quality_coverage` | dataset | Disclose actual geography/period/configurations, conditional absence, outsourcing, identity/quantity uncertainty, empirical range gaps, missing upstream and applicable acceptance regime. Historical manufacturer/authority examples do not prove present certificates, current legal completeness or the actual M of this vessel. PCR checking validates the declared relationship, not a real ship record or scientific approval. | coverage/evidence limitations register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require complete configured steel-hulled diesel refrigerated cargo vessel and positive actual net M from controlled records implementing mass_record_provenance. Exclude operational cargo/persons/fuel/fresh water/ballast and temporary loads, retain declared installed service fluids. Reject tonnage, deadweight, catalogue/full-load displacement or full-fuel mass substitution. Missing underlying method or balance requires review and blocks completed quantitative data. |  |
| `validate_identity` | all rows | Check each atomic physical/chemical exchange, public reference property/unit group, route/state and supplier scope. Engine item count is not mass; a genset includes its engine once; CuO is not Cu2O paint; water supply is not effluent or resource withdrawal. Keep unsupported identity blank and add actual species/components before completion. |  |
| `validate_measurement` | all rows | Verify every amount/collection/conversion against same configuration, actual period/site, accepted count and net M. Reconcile installed prefills, consumed trial fuel and supplier constituents without duplication; verify calibration, density/unit conversions and shared denominator. Unknown is never zero. |  |
| `validate_species` | elementary rows | Use only demonstrated attributable construction-trial species and actual environmental medium. These CO2/NO/NO2 identities are air-unspecified immediate releases; fossil CO2 requires fossil provenance. Total NOx without species split, N2O, nitrogen/nitrite, biogenic CO2, water/soil and long-term releases cannot substitute. Captured dust remains waste. |  |
| `validate_acceptance` | claimed flag/class acceptance | Trace actual vessel-specific surveys/certificates and applicable administration/class regime when claimed. Generic manufacturer certification does not certify this refrigerated cargo vessel; no universal numerical standard/test/load is adopted. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete steel-hulled diesel refrigerated cargo vessel foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching hull/propulsion/outfitting/coating, controlled net-mass scope, trial boundary, gate/site/period |
| excluded_use | Cargo refrigeration/freight service or lifetime comparison, equal-mass capacity equivalence, other propulsion/materials and unsupported complete cradle-to-gate claims |
| required_metadata | builder/model; hull serial and drawing revision; fixed refrigerated cargo hold arrangement, steel grades and block completeness; declared mechanical-diesel or diesel-electric propulsion; actual R717 ammonia refrigeration, direct or secondary-brine circuit, refrigerant purity/charge and retained service fluids; insulation chemistry/blowing agent, liner/vapour barrier, hold closures, air distribution and fitted handling equipment; actual test criteria and thermal design; controlled positive net M in kg, current original actual lightship/weight survey and signed net-configuration correction balance; exclusion of cargo, persons, consumable fuel/fresh water/ballast, temporary trial loads, cargo pallets and reefer containers; actual shipyard/site/period/route, supplier boundaries and delivery gate |
| required_quality_disclosure | Identity/quantity and mass-provenance gaps, uncertainty, conditional absences, full BOM, allocation, actual acceptance scope and unlinked upstream |
| update_trigger | Hull/propulsion/outfitting/coating, supplier modules, actual M evidence/corrections, trial state/boundary, manufacturing/acceptance regime, site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `kyokuyo-reefer` | literature | [Kyokuyo Shipyard: Reefer Ship](https://www.kyokuyoshipyard.com/en/products/reefer) | Fresh Food Transporter and Customization At Will paragraphs: actual shipyard product architecture, thermal protection/airflow design and configuration dependence. Undated retained publisher snapshot, retrieved 2026-10-05. No capacity, temperature, vessel weight, recipe, certification or manufacturing intensity adopted. |
| `gea-reefer` | literature | [GEA: Reefer ships](https://www.gea.com/en/heating-refrigeration/marine/reefer-ships/) | Cost Saving Solution and Focus on Sustainability paragraphs: conventional grating-floor and alternative cooler layouts, ammonia/CO2 refrigerant alternatives. Only ammonia architecture enters this narrower PCR; actual purity, machinery, circuit and charge need foreground records. No compulsory floor, universal refrigerant, energy savings or emission/leak factor. Undated retained snapshot, retrieved 2026-10-05. |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E, Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/printed pp.5–7, sections3.1–3.4: ship identification, inspection state, completion/deduction weights, water density, tanks and draught/freeboard. Historical Norwegian method example; current actual vessel method and signed net-configuration corrections are required. No historical tank/trim thresholds or global legal requirement adopted. Retrieved shared original and verified 2026-10-05. |
| `ghg-product-allocation-2011` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, 2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | Printed63/PDF65 tables9.1–9.2: historical allocation hierarchy only; require actual causal-driver evidence, no universal vessel allocation factor. Shared original read and verified2026-10-05. |
