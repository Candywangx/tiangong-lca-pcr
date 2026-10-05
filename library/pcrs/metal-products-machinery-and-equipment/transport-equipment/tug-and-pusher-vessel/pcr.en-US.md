---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.tug-and-pusher-vessel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Steel-hulled diesel tug and pusher manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete steel-hulled diesel mechanically propelled harbour/coastal tugs and inland pushers, with separately declared shaft-drive or mechanically driven azimuth-thruster configurations. Towing, pushing and combined deck-equipment designs are distinct configurations. Foreground begins at specified stock/blocks and bought-in modules and ends at configuration-specific shipyard acceptance/delivery, including attributable construction trials. Supplier upstream is linked only when supported; receipt-to-delivery records alone are not complete cradle-to-gate. [Sources: `damen-asd-tug`, `damen-seagoing`]

Exclude non-steel hulls, diesel-electric/traction-battery/hybrid or alternative-fuel propulsion, offshore anchor-handling specialist vessels, passenger/cargo carriers and unpowered barges, hull-only intermediates, repair/conversion/resale and operational towing/pushing/maintenance/end of life. Optional ancillary equipment is included only when installed in the declared tug/pusher, with complete supplier scope. This is narrower than CPC 49316. Towing/pushing foundations, deck gear and performance acceptance differ materially from passenger ferry or liquid-cargo tanker manufacture and material steel PCRs; the legacy leaf remains read-only. Scientific review remains pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.tug-and-pusher-vessel |
| classification_refs | CPC 3.0 49316; narrower steel-hulled mechanical-diesel tug/pusher manufacture, context only |
| covered_products | New complete configured steel-hulled mechanical-diesel harbour/coastal tugs and inland pushers |
| excluded_products | Exclude non-steel hulls, diesel-electric/traction-battery/hybrid or alternative-fuel propulsion, offshore anchor-handling specialist vessels, passenger/cargo carriers and unpowered barges, hull-only intermediates, repair/conversion/resale and operational towing/pushing/maintenance/end of life. Optional ancillary equipment is included only when installed in the declared tug/pusher, with complete supplier scope. This is narrower than CPC 49316. Towing/pushing foundations, deck gear and performance acceptance differ materially from passenger ferry or liquid-cargo tanker manufacture and material steel PCRs; the legacy leaf remains read-only. Scientific review remains pending. |
| representative_product | One hull-serial-linked accepted complete tug or pusher with controlled actual net M |
| production_route | Stock/block structural fabrication, conditional coating, mechanical propulsion, towing/pushing gear and outfitting integration, construction trials and acceptance |
| market_state | Complete accepted vessel at declared shipyard gate; no operational loads or consumables in net M |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured steel-hulled diesel tug or pusher |
| How much | 1 kg accepted net complete-vessel mass; actual per-vessel records divided by positive controlled M |
| How well | Vessel-specific structural, installation, commissioning and release criteria; trace applicable flag/class acceptance when claimed. Equal mass is not equal towing/pushing performance |
| How long or cycle | One manufacturing and construction-acceptance cycle; no assumed tug/pusher lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tugs and pusher craft `f323a122-a4de-4c9d-920f-4c09196c70ae` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model, hull serial/drawing revision, steel grade/thickness and supplier block completeness; mechanically driven diesel shaft or azimuth propulsion and supplier inclusions; actual towing/pushing or combined configuration, foundations, winch/hook/bitt, rope material, fender geometry/composition, push knees and coupling; auxiliary piping/electrical/navigation/safety, coating formulations and actual claimed acceptance regime; positive net M in kg from current controlled acceptance records with original actual lightship/weight inspection, traceable method/calibration/observable inputs and signed item-level configuration reconciliation; installed service fluids and integral delivery-detached parts; excluded persons, cargo, consumable fuel/fresh water, ballast, removable protection and temporary trial loads; actual construction trials, site/period/delivery gate and upstream linkage |

Declare all qualifiers in metadata or equivalent reference comments. The broad public vessel product identity must be narrowed to the actual tug/pusher configuration. Net M includes complete installed hull, machinery, outfitting, integral delivered equipment and declared installed service fluids. Reconcile delivery-detached integral parts by measured mass. Exclude persons, cargo, consumable fuel/fresh water, ballast, removable protection and temporary trial loads/fixtures. Gross/net tonnage, deadweight, catalogue mass, loaded displacement and full-fuel condition cannot substitute for M. An actual survey-state measurement can only contribute through the traceable net-configuration correction record required below.

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
| product_classification_scope | Steel-hulled diesel tug or pusher, declared propulsion and towing/pushing variant |
| recursive_input_rule | No complete tug/pusher recursively generated as its own input; bought-in finished blocks/modules bypass included operations |
| upstream_dataset_requirement | Match actual grades/formulations/module completeness/propulsion, period/geography and property; disclose missing supplier production |
| disclosure | builder/model, hull serial/drawing revision, steel grade/thickness and supplier block completeness; mechanically driven diesel shaft or azimuth propulsion and supplier inclusions; actual towing/pushing or combined configuration, foundations, winch/hook/bitt, rope material, fender geometry/composition, push knees and coupling; auxiliary piping/electrical/navigation/safety, coating formulations and actual claimed acceptance regime; positive net M in kg from current controlled acceptance records with original actual lightship/weight inspection, traceable method/calibration/observable inputs and signed item-level configuration reconciliation; installed service fluids and integral delivery-detached parts; excluded persons, cargo, consumable fuel/fresh water, ballast, removable protection and temporary trial loads; actual construction trials, site/period/delivery gate and upstream linkage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | Include actual manufacture, attributable rework, launching and construction commissioning to declared acceptance gate. Allocate independently measured production-support trial resources; exclude towing/pushing service and research/operational maintenance. Add every actual tug/dock/crane service or fuel as a separate declared exchange when included, with service boundary/duration and supplier scope. No lifetime voyage burden is inferred. |  |
| `boundary_modules` | purchased components | Count finished hull blocks, gensets/thrusters and fitted accommodation/safety modules once with constituents and prefills. Replace constituent cards for included supply. Actual in-house manufacture needs measured component inventories. Complete the full actual BOM, all conditional chemistries and demonstrated species before dataset release; the candidate cards are not an exhaustive vessel bill. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | Hull and towing-foundation stock preparation | conditional | Stock cutting or forming is performed in the reporting shipyard. | foreground | one accepted configured tug/pusher, normalized with M |
| `hull_join` | Hull and load-bearing foundation assembly | required | Every complete vessel. | foreground | one accepted configured tug/pusher, normalized with M |
| `surface_finish` | Hull surface preparation and coating | conditional | Surface treatment is within the declared foreground. | foreground | one accepted configured tug/pusher, normalized with M |
| `machinery` | Mechanical diesel propulsion installation | required | Declared shaft-drive or mechanically driven azimuth-thruster configuration. | foreground | one accepted configured tug/pusher, normalized with M |
| `tow_push_gear` | Towing and pushing equipment integration | required | Actual towing, pushing or combined accepted design. | foreground | one accepted configured tug/pusher, normalized with M |
| `outfit` | Piping, electrical, navigation and safety outfitting | required | Each accepted complete configuration. | foreground | one accepted configured tug/pusher, normalized with M |
| `acceptance` | Launching, construction trials and vessel acceptance | required | Before configuration-specific delivery acceptance. | foreground | one accepted configured tug/pusher, normalized with M |
| `packing` | Delivery protection and integral detached parts | conditional | Actual removable protection or integral delivery-detached parts. | foreground | one accepted configured tug/pusher, normalized with M |

Actual stock forming feeds hull joining and conditional finishing, machinery/outfitting and launch/commissioning/acceptance, then conditional delivery protection. Stages may overlap; assign resources once to actual operations and supplier scope. Every card is conditional on exact composition/state/configuration, even in required stages. Add each actual omitted component/fuel/chemical and demonstrated waste/emission independently. No universal welding/coating recipe or obligatory emission is claimed.

### Process: Hull and towing-foundation stock preparation (`stock_form`)

Trace actual hull, towing/pushing foundations and deck drawings, steel grades and preparation. Received complete blocks replace constituent stock and supplier-completed work. Collect actual cutting gas, machining oil and component fabrication separately. No universal plate grade or material recipe.

#### Inputs

##### Product flows

###### Hot-rolled normal-strength certified shipbuilding steel plate (`normal_hull_plate`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Hot-rolled normal-strength certified shipbuilding steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `damen-seagoing`

###### Hot-rolled low-alloy high-strength thick shipbuilding steel plate (`hsla_plate`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Hot-rolled low-alloy high-strength thick shipbuilding steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `damen-seagoing`

###### Hot-rolled steel ship-hull stiffener profile (`hull_profile`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Hot-rolled steel ship-hull stiffener profile
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `damen-seagoing`

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_stock_form`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `damen-seagoing`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Segregated untreated steel cutting offcuts leaving after internal reuse; weigh actual amount and retain recipient without included treatment.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `damen-seagoing`

### Process: Hull and load-bearing foundation assembly (`hull_join`)

Join actual hull blocks, deck, superstructure and towing/pushing load paths. Record welding procedures, dimensional inspection, tightness checks and rework. Supplier-completed structures count once. Welding gas and wire cards are conditional actual routes.

#### Inputs

##### Product flows

###### Solid low-alloy steel gas-shielded welding wire (`solid_wire`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Solid low-alloy steel gas-shielded welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `damen-seagoing`

###### Carbon dioxide (`co2_shield`)

Only supplied pure CO2 shielding gas actually used in the at-plant China route matching this identity. Collect measured consumed mass; no argon premix, liquid-state substitution or presumed fossil release.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `damen-seagoing`

###### Argon/carbon-dioxide premixed welding shielding gas (`argon_mix`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Argon/carbon-dioxide premixed welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `damen-seagoing`

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_hull_join`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `damen-seagoing`

#### Outputs

##### Waste flows

###### Captured iron-oxide-rich hull-welding filter dust (`weld_dust`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Captured iron-oxide-rich hull-welding filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `damen-seagoing`

### Process: Hull surface preparation and coating (`surface_finish`)

Record actual preparation and coating layers separately, including base and hardener. Supplier coating replaces duplicate work. Listed epoxy and cuprous-oxide paint are conditional examples; add each actual thinner, cleaner, different formulation and measured outlet separately.

#### Inputs

##### Product flows

###### Process Water (`clean_water`)

Actual supplied treated industrial process water for cleaning; exclude internal circulation and environmental resource withdrawal.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-asd-tug`

###### Spherical cast-steel hull-blasting shot (`abrasive`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Spherical cast-steel hull-blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-asd-tug`

###### Formulated epoxy marine-coating base component (`epoxy_base`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Formulated epoxy marine-coating base component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-asd-tug`

###### Polyamine marine-epoxy coating hardener formulation (`epoxy_hardener`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Polyamine marine-epoxy coating hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-asd-tug`

###### Cuprous-oxide self-polishing marine antifouling paint formulation (`cu2o_paint`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Cuprous-oxide self-polishing marine antifouling paint formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-asd-tug`

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_surface_finish`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-asd-tug`

#### Outputs

##### Waste flows

###### Spent steel blasting shot with removed hull-coating residue (`spent_abrasive`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Spent steel blasting shot with removed hull-coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-asd-tug`

###### Aqueous steel-hull cleaning effluent transferred for treatment (`clean_effluent`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Aqueous steel-hull cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `damen-asd-tug`

### Process: Mechanical diesel propulsion installation (`machinery`)

Install independent diesel engines with the actual drive system. A complete purchased azimuth propulsion package replaces included gearbox, shaft and propeller cards. A complete genset replaces its included engine. Preserve independent engine Item(s) and separately measured installed mass. Add actual cooling, steering, exhaust and fuel assemblies not included by suppliers. No diesel-electric or traction-battery propulsion is covered.

#### Inputs

##### Product flows

###### Diesel engine (`marine_engine`)

Only an independently supplied assembled compression-ignition marine piston engine within public non-motor-vehicle/non-aircraft scope. Collect actual Item(s) count and separately measured installed mass for vessel M; count is not mass. Omit this input inside a purchased complete genset or propulsion package.
Public identity retains reference flow property `01846770-4cfe-4a25-8ad9-919d8d378345`, unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` and exchange unit Item(s).

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

###### Finished marine propulsion reduction gearbox (`reduction`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished marine propulsion reduction gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

###### Finished steel marine propeller shaft (`shaft`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished steel marine propeller shaft
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

###### Finished nickel-aluminium-bronze marine propeller (`propeller`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished nickel-aluminium-bronze marine propeller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

###### Finished marine diesel electrical generating set (`diesel_genset`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished marine diesel electrical generating set
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

###### Finished marine centrifugal bilge-water pump (`bilge_pump`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished marine centrifugal bilge-water pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

###### Finished carbon-steel marine bilge pipe (`bilge_pipe`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished carbon-steel marine bilge pipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

###### Finished mechanically driven marine azimuth-thruster assembly (`azimuth`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished mechanically driven marine azimuth-thruster assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_machinery`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-asd-tug`

### Process: Towing and pushing equipment integration (`tow_push_gear`)

Record actual winch or hook/bitt configuration, towing-line material, load-bearing foundation, fender geometry/material, push knees and coupling equipment separately. They are configuration alternatives, not a mandatory combined list. Purchased complete equipment includes its constituent hydraulics and prefill once. In-house fabricated push structures use stock and actual fabrication instead of a second purchased assembly. Manufacturer optional deck gear is not compulsory.

#### Inputs

##### Product flows

###### Finished hydraulically actuated marine towing winch (`towing_winch`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished hydraulically actuated marine towing winch
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tow_push_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tow_push_gear`
- Sources: `damen-asd-tug`

###### Finished forged-steel marine quick-release towing hook (`towing_hook`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished forged-steel marine quick-release towing hook
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tow_push_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tow_push_gear`
- Sources: `damen-asd-tug`

###### Finished polyester-fibre marine towing rope (`towing_rope`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished polyester-fibre marine towing rope
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tow_push_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tow_push_gear`
- Sources: `damen-asd-tug`

###### Finished vulcanised-rubber cylindrical tug fender (`rubber_fender`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished vulcanised-rubber cylindrical tug fender
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tow_push_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tow_push_gear`
- Sources: `damen-asd-tug`

###### Finished fabricated-steel marine push-knee assembly (`push_knee`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished fabricated-steel marine push-knee assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tow_push_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tow_push_gear`
- Sources: `damen-asd-tug`

###### Finished steel pusher-barge coupling winch assembly (`coupling`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished steel pusher-barge coupling winch assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tow_push_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tow_push_gear`
- Sources: `damen-asd-tug`

###### Mineral-base hydraulic oil formulation supplied for marine equipment first fill (`hydraulic_oil`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Mineral-base hydraulic oil formulation supplied for marine equipment first fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tow_push_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tow_push_gear`
- Sources: `damen-asd-tug`

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_tow_push_gear`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tow_push_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tow_push_gear`
- Sources: `damen-asd-tug`

### Process: Piping, electrical, navigation and safety outfitting (`outfit`)

Install actual independent bilge pipe/pump, cables, navigation, accommodation and safety items. Conditional firefighting or crane equipment is recorded only if installed, with exact supplier scope and separate actual inventories. Complete equipment replaces included constituents and fluids. Safety or performance claims require this vessel records.

#### Inputs

##### Product flows

###### Insulated-copper marine electrical cable (`cable`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Insulated-copper marine electrical cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-asd-tug`

###### Filled lead-acid marine starter battery (`starter_battery`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Filled lead-acid marine starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-asd-tug`

###### Laminated safety-glass marine window pane (`window`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Laminated safety-glass marine window pane
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-asd-tug`

###### Finished marine navigation radar assembly (`radar`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished marine navigation radar assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-asd-tug`

###### Packed inflatable marine liferaft (`liferaft`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Packed inflatable marine liferaft
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-asd-tug`

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_outfit`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-asd-tug`

### Process: Launching, construction trials and vessel acceptance (`acceptance`)

Capture actual launching, propulsion, towing/pushing equipment and construction acceptance trials. Bollard pull, brake/load-test forces and coupling performance are separate observed acceptance criteria, never net mass M or inventory conversion factors. Record actual consumed versus retained fuel and service fluids; actual species only with measured evidence. External test support services are declared separately if inside boundary. Exclude operational towing/pushing jobs and vessel lifetime.

#### Inputs

##### Product flows

###### Lubricating oil (`mineral_oil`)

Only actual petroleum-fraction lubricating oil matching independently supplied first-fill formulation. Record net issue and retained installed amount for M; no second fill if supplier included, and descriptive calorific value is not a manufacturing factor. Different actual oil formulations require independent rows.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `damen-asd-tug`

###### Inhibited ethylene-glycol/water marine-engine coolant premix (`coolant`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Inhibited ethylene-glycol/water marine-engine coolant premix
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `damen-asd-tug`

###### Fossil low-sulphur marine diesel fuel supplied for commissioning (`test_diesel`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Fossil low-sulphur marine diesel fuel supplied for commissioning
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `damen-asd-tug`

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_acceptance`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `damen-asd-tug`

#### Outputs

##### Product flows

###### Tugs and pusher craft (`finished_machine`)

One kg of accepted configured complete steel-hulled mechanically propelled diesel tug or pusher at the declared shipyard gate, with installed equipment/service fluids reconciled and consumable cargo/fuel/water/ballast excluded from net M. Generic public vessel identity needs all tug/pusher qualifiers; no transport service or complete upstream claim.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Tugs and pusher craft `f323a122-a4de-4c9d-920f-4c09196c70ae`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `damen-asd-tug`

#### Outputs

##### Waste flows

###### Spent petroleum lubricating oil transferred for treatment (`spent_oil`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Spent petroleum lubricating oil transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `damen-asd-tug`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only attributable measured fossil-fuel commissioning CO2 released to air, unspecified subcompartment, with demonstrated fossil provenance; no inferred shielding-gas or operational-lifetime factor.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `damen-asd-tug`

###### nitrogen monoxide (`nitric_oxide`)

Only independently measured commissioning NO released to air, unspecified subcompartment. A total NOx result without species split does not establish this amount; no obligatory emission is assumed.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `damen-asd-tug`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only independently measured commissioning NO2 released to air, unspecified subcompartment. A total NOx result without species split does not establish this amount; no obligatory emission is assumed.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `damen-asd-tug`

### Process: Delivery protection and integral detached parts (`packing`)

Weigh removable protection separately and exclude it from net M. Independently measure and reconcile integral delivery-detached parts to the accepted complete configuration. Exclude separately sold spares and outside support craft.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only removable non-self-adhesive, non-cellular, unreinforced/unlaminated PE-LD protection foil; weigh actual issue-return balance, exclude from M.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_packing`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared shipyard resources | Separate hull orders/configurations and directly attribute measured stock issues/returns, machinery receipts, work hours, meters, trials and rework first. Inseparable shared resources use a demonstrated measured causal driver such as operation time/load or coating area/layer requirement: share = order driver / sum of drivers for all covered orders. Retain period, denominator and causality; tonnage, nominal displacement or equal vessel count is not an automatic causal driver. |  |
| `allocation_recovery` | internal reuse and waste | Internal reused stock/water/test fuel is a transfer, not repeated fresh input or an automatic credit. Exported waste retains its measured quantity and recipient with no assumed avoided-production benefit. Separate saleable co-products before a documented reviewed residual allocation. Reconcile rejected/reworked construction and work in progress to accepted output during the reporting period. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete-vessel net mass | controlled_acceptance_record | model; configuration; serial number; accepted net mass M; original acceptance/weight-report id/date; actual lightship/weight-inspection method; instrument/calibration; delivery state; installed service fluids; itemized added/deducted masses; cargo/persons/fuel/fresh water/ballast/testing-load exclusions; detached integral parts; verifier; mass balance | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted vessel | actual construction/acceptance period of that vessel | declared shipyard acceptance gate | accepted net mass per unit | original actual inspection, configuration correction, mass-balance and verification records |
| `cp_stock_form` | stock_form | Hull and towing-foundation stock preparation | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect original configuration-linked drawings, supplier scopes, measured issues/returns, station meters and attributable inspection/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_hull_join` | hull_join | Hull and load-bearing foundation assembly | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect original configuration-linked drawings, supplier scopes, measured issues/returns, station meters and attributable inspection/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_surface_finish` | surface_finish | Hull surface preparation and coating | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect original configuration-linked drawings, supplier scopes, measured issues/returns, station meters and attributable inspection/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_machinery` | machinery | Mechanical diesel propulsion installation | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect original configuration-linked drawings, supplier scopes, measured issues/returns, station meters and attributable inspection/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_tow_push_gear` | tow_push_gear | Towing and pushing equipment integration | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect original configuration-linked drawings, supplier scopes, measured issues/returns, station meters and attributable inspection/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_outfit` | outfit | Piping, electrical, navigation and safety outfitting | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect original configuration-linked drawings, supplier scopes, measured issues/returns, station meters and attributable inspection/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_acceptance` | acceptance | Launching, construction trials and vessel acceptance | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect original configuration-linked drawings, supplier scopes, measured issues/returns, station meters and attributable inspection/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_packing` | packing | Delivery protection and integral detached parts | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect original configuration-linked drawings, supplier scopes, measured issues/returns, station meters and attributable inspection/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each hull/configuration order collect attributable net stock issues, independent modules, utilities, construction trial consumption, wastes and actual emissions; subtract recorded returns and inventory change and apply justified shared allocation, then divide by accepted vessel count to obtain q_item and by the same controlled measured net M. Preserve engine exchanges Item(s)/kg, independently measured engine mass for vessel completeness, mass exchanges kg/kg and electricity MJ/kg. Compatible serial vessels with measured mass variation may use attributable totals divided by summed accepted net masses, retaining all serial records. Separate incompatible propulsion, hull, outfitting, coating and trial scope. Unknown is a gap, never zero. No tonnage/capacity/rated-power or lifetime conversion is inferred.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | The original current vessel acceptance mass record must implement mass_record_provenance. Retain actual physical lightship/weight inspection, observable method inputs/calibration and a signed item-level reconciliation to delivered net configuration; reconcile independently weighed installed modules and fluids. A catalogue or unexplained displacement/tonnage record is insufficient. Missing method, uncertain correction or configuration change prevents a complete quantitative dataset; resolve by new measurement/reconciliation, never an assumed weight. | originals/correction ledger; nma-lightship is a method example only |
| `quality_bom` | complete vessel | Reconcile drawings/BOM and installed hull/machinery/propulsion, piping/electrical, towing/pushing/safety/navigation and actual service-fluid masses, supplier scope and detached delivered parts. Add all actual missing components before completion; received complete modules count once. | original drawings, weighing and supplier scope |
| `quality_balances` | flows and trials | Retain calibration, material issues/returns/reuse, actual formulation/density, commissioning consumed versus retained fuel and measured species/medium/outlets. Define QA limits from applicable actual records or verified comparable evidence; no invented yield, intensity range or universal commissioning consumption. | stock, meters, SDS, trial and transfer records |
| `quality_coverage` | dataset | Disclose actual geography/period/configurations, conditional absence, outsourcing, identity/quantity uncertainty, empirical range gaps, missing upstream and applicable acceptance regime. Historical manufacturer/authority examples do not prove present certificates, current legal completeness or the actual M of this vessel. PCR checking validates the declared relationship, not a real ship record or scientific approval. | coverage/evidence limitations register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require complete configured steel-hulled diesel tug/pusher and positive actual net M from controlled records implementing mass_record_provenance. Exclude operational cargo/persons/fuel/fresh water/ballast and temporary loads, retain declared installed service fluids. Reject tonnage, deadweight, catalogue/full-load displacement or full-fuel mass substitution. Missing underlying method or balance requires review and blocks completed quantitative data. |  |
| `validate_identity` | all rows | Check each atomic physical/chemical exchange, public reference property/unit group, route/state and supplier scope. Engine item count is not mass; a genset includes its engine once; CuO is not Cu2O paint; water supply is not effluent or resource withdrawal. Keep unsupported identity blank and add actual species/components before completion. |  |
| `validate_measurement` | all rows | Verify every amount/collection/conversion against same configuration, actual period/site, accepted count and net M. Reconcile installed prefills, consumed trial fuel and supplier constituents without duplication; verify calibration, density/unit conversions and shared denominator. Unknown is never zero. |  |
| `validate_species` | elementary rows | Use only demonstrated attributable construction-trial species and actual environmental medium. These CO2/NO/NO2 identities are air-unspecified immediate releases; fossil CO2 requires fossil provenance. Total NOx without species split, N2O, nitrogen/nitrite, biogenic CO2, water/soil and long-term releases cannot substitute. Captured dust remains waste. |  |
| `validate_tow_push_gear` | towing/pushing configuration | Reconcile actual foundations, towing winch/hook/bitt, line material, fender geometry/composition and pushing/coupling hardware with drawings, supplier completeness and accepted vessel configuration. Retain actual functional and load-test method, calibrated measured force and test-media/outlet records. Bollard pull and brake/coupling ratings describe acceptance performance only; they never supply net M or inventory factors. Manufacturer optional gear and historical used-vessel records do not establish actual installation or current certification. | `damen-asd-tug` |
| `validate_acceptance` | claimed flag/class acceptance | Trace actual vessel-specific surveys/certificates and applicable administration/class regime when claimed. A manufacturer equipment sheet does not certify this particular tug/pusher; no universal numerical standard/test/load is adopted. | `damen-asd-tug` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete steel-hulled diesel tug/pusher foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching hull/propulsion/outfitting/coating, controlled net-mass scope, trial boundary, gate/site/period |
| excluded_use | Passenger/freight service or lifetime comparison, equal-mass capacity equivalence, other propulsion/materials and unsupported complete cradle-to-gate claims |
| required_metadata | builder/model, hull serial/drawing revision, steel grade/thickness and supplier block completeness; mechanically driven diesel shaft or azimuth propulsion and supplier inclusions; actual towing/pushing or combined configuration, foundations, winch/hook/bitt, rope material, fender geometry/composition, push knees and coupling; auxiliary piping/electrical/navigation/safety, coating formulations and actual claimed acceptance regime; positive net M in kg from current controlled acceptance records with original actual lightship/weight inspection, traceable method/calibration/observable inputs and signed item-level configuration reconciliation; installed service fluids and integral delivery-detached parts; excluded persons, cargo, consumable fuel/fresh water, ballast, removable protection and temporary trial loads; actual construction trials, site/period/delivery gate and upstream linkage |
| required_quality_disclosure | Identity/quantity and mass-provenance gaps, uncertainty, conditional absences, full BOM, allocation, actual acceptance scope and unlinked upstream |
| update_trigger | Hull/propulsion/outfitting/coating, supplier modules, actual M evidence/corrections, trial state/boundary, manufacturing/acceptance regime, site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `damen-asd-tug` | literature | [Damen: Azimuth Stern Drive Tug 2813 STOCK](https://medialibrary.damen.com/m/3ffb16484e7ba471/original/product-sheet-asd-tug-2813.pdf) | PDF p.1 functions, propulsion, epoxy painting, deck gear and fender configurations; the optional Ø marker applies to listed options. Undated equipment example only, not an actual delivered vessel specification. No rated forces, counts, dimensions, approximate displacement, GT, fuel capacity, mass or numerical intensity adopted. |
| `damen-tug-pusher` | literature | [Damen Trading: folio 07802 Tug/Pushboat](https://medialibrary.damen.com/m/bcd65829ff4b920/original/tug-pusher-damen-trading-07802.pdf) | PDF p.1 identifies a 1980-built used vessel with later modifications and describes fixed-propeller diesel propulsion, bow push-chair/rubber fender and coupling/towing gear. Historical physical equipment example only. No repair/resale process, current certificate, numeric ratings or displacement figure used as manufacture data or net M. |
| `damen-seagoing` | literature | [Damen: Seagoing Transport](https://medialibrary.damen.com/m/95d5489057a4c08f/original/Seagoing-transport.pdf) | PDF p.5 (printed 8–9) explicitly describes the modular approach as evident in tug building. Manufacturing route context only; no universal material recipe, current ship acceptance or numerical manufacturing factors adopted. |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/printed pp.5–7 sections 3.2–3.4: ship condition, tank contents, water density and draught/freeboard observations. Historical Norwegian method example only; current actual lightship/weight inspection and itemized net-configuration correction remain necessary. No historical numerical thresholds or universal legal applicability adopted. |
