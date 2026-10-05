---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.liquid-cargo-tanker
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Double-hull steel diesel oil-product tanker manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete double-hull steel diesel-powered oil-product tankers, with separately declared mechanical-diesel or diesel-electric propulsion. The liquid-cargo manufacturing scope requires actual tank segregation, containment finish, cargo pump/pipe/vent/gauging and safety configuration. Foreground begins at specified stock/blocks and bought-in modules and ends at configuration-specific shipyard acceptance/delivery, including attributable construction tests. Supplier upstream is linked only with adequate evidence; receipt-to-delivery records alone are not complete cradle-to-gate. [Sources: `damen-product-tanker`, `damen-seagoing`]

Exclude crude-oil, chemical-only and liquefied/pressurised/cryogenic-gas carriers, single-hull or non-steel vessels, propulsion using alternative fuels/traction batteries, hull-only intermediates, repair/conversion and freight operations/maintenance/end of life. A dual-certified design used for the declared petroleum-product configuration is within scope, but chemical-cargo service is not modelled. This is narrower than CPC 49312. Cargo containment/outfitting and tanker acceptance require methodology absent from motor-vehicle bodies and passenger-ferry manufacture; existing legacy scaffold remains read-only. Scientific review is pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.liquid-cargo-tanker |
| classification_refs | CPC 3.0 49312; narrower double-hull steel diesel oil-product tanker manufacture |
| covered_products | New complete configured double-hull steel diesel oil-product tankers |
| excluded_products | Exclude crude-oil, chemical-only and liquefied/pressurised/cryogenic-gas carriers, single-hull or non-steel vessels, propulsion using alternative fuels/traction batteries, hull-only intermediates, repair/conversion and freight operations/maintenance/end of life. A dual-certified design used for the declared petroleum-product configuration is within scope, but chemical-cargo service is not modelled. This is narrower than CPC 49312. Cargo containment/outfitting and tanker acceptance require methodology absent from motor-vehicle bodies and passenger-ferry manufacture; existing legacy scaffold remains read-only. Scientific review is pending. |
| representative_product | One hull-serial-linked accepted complete tanker with controlled actual net M |
| production_route | Stock/block structural fabrication, conditional hull and cargo-tank coating, cargo-system integration, propulsion/outfitting, construction tests and acceptance |
| market_state | Complete accepted vessel at shipyard gate; no cargo or operational consumables in net M |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured steel-hulled diesel oil-product tanker |
| How much | 1 kg accepted net complete-vessel mass; actual per-vessel records divided by positive controlled M |
| How well | Vessel-specific structural, installation, commissioning and release criteria; trace applicable flag/class acceptance when claimed. Equal mass is not equal cargo capacity/performance |
| How long or cycle | One manufacturing and construction-acceptance cycle; no assumed tanker lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tankers (ships) `6285cffb-df99-4532-9f3a-8de1c4bb6fde` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model; hull serial and drawing revision; double-hull steel oil-product cargo scope and compartment segregation; mechanical-diesel or diesel-electric architecture; hull/cargo bulkhead grades, thickness and supplier block completeness; cargo/slop pump, pipe/manifold, vent/vapour-return and gauging design; actual cargo-tank coating formulation and compatibility; conditional heating, inert gas, fixed cleaning, ballast treatment and fire/safety equipment; actual claimed flag/class acceptance; positive net M in kg from current controlled acceptance records with original actual lightship/weight inspection, calibration, hydrostatic/physical inputs and item-level net-configuration correction; excluded cargo/slops, persons, consumable fuel/fresh water, ballast and temporary test contents; installed service fluids and integral delivery-detached parts; actual supplier inclusion, manufacturing site/period, commissioning and delivery gate; upstream linkage |

Declare all qualifiers in metadata or equivalent reference comments. The broad public vessel product identity must be narrowed to the actual tanker configuration. Net M includes complete installed hull, machinery, outfitting, integral delivered equipment and declared installed service fluids. Reconcile delivery-detached integral parts by measured mass. Exclude persons, cargo/vehicles, consumable fuel/fresh water, ballast, removable protection and temporary trial loads/fixtures. Gross/net tonnage, deadweight, catalogue mass, loaded displacement and full-fuel condition cannot substitute for M. An actual survey-state measurement can only contribute through the traceable net-configuration correction record required below.

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
| product_classification_scope | Steel-hulled diesel oil-product tanker, declared propulsion and cargo-system variant |
| recursive_input_rule | No complete tanker recursively generated as its own input; bought-in finished blocks/modules bypass included operations |
| upstream_dataset_requirement | Match actual grades/formulations/module completeness/propulsion, period/geography and property; disclose missing supplier production |
| disclosure | builder/model; hull serial and drawing revision; double-hull steel oil-product cargo scope and compartment segregation; mechanical-diesel or diesel-electric architecture; hull/cargo bulkhead grades, thickness and supplier block completeness; cargo/slop pump, pipe/manifold, vent/vapour-return and gauging design; actual cargo-tank coating formulation and compatibility; conditional heating, inert gas, fixed cleaning, ballast treatment and fire/safety equipment; actual claimed flag/class acceptance; positive net M in kg from current controlled acceptance records with original actual lightship/weight inspection, calibration, hydrostatic/physical inputs and item-level net-configuration correction; excluded cargo/slops, persons, consumable fuel/fresh water, ballast and temporary test contents; installed service fluids and integral delivery-detached parts; actual supplier inclusion, manufacturing site/period, commissioning and delivery gate; upstream linkage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | Include actual manufacture, attributable rework, launching and construction commissioning to declared acceptance gate. Allocate independently measured production-support trial resources; exclude cargo service and research/operational maintenance. Add every actual tug/dock/crane service or fuel as a separate declared exchange when included, with service boundary/duration and supplier scope. No lifetime voyage burden is inferred. |  |
| `boundary_modules` | purchased components | Count finished hull blocks, gensets/thrusters and fitted cargo/accommodation/safety modules once with constituents and prefills. Replace constituent cards for included supply. Actual in-house manufacture needs measured component inventories. Complete the full actual BOM, all conditional chemistries and demonstrated species before dataset release; the candidate cards are not an exhaustive vessel bill. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | Hull and cargo-bulkhead stock preparation | conditional | Unformed stock is cut or formed within the reporting shipyard. | foreground | one accepted configured tanker, normalized with M |
| `hull_join` | Double-hull and cargo-tank structural assembly | required | Each complete double-hull product tanker. | foreground | one accepted configured tanker, normalized with M |
| `surface_finish` | Hull surface preparation and protective coating | conditional | Surface treatment occurs in the reporting foreground. | foreground | one accepted configured tanker, normalized with M |
| `cargo_system` | Cargo containment finish and pump/pipe installation | required | Every complete configured oil-product tanker. | foreground | one accepted configured tanker, normalized with M |
| `machinery` | Diesel propulsion and auxiliary machinery installation | required | Actual mechanical-diesel or diesel-electric configuration. | foreground | one accepted configured tanker, normalized with M |
| `outfit` | Electrical, safety and crew outfitting | required | Every complete tanker. | foreground | one accepted configured tanker, normalized with M |
| `acceptance` | Launch, construction trials and net-mass acceptance | required | Each vessel released at declared shipyard gate. | foreground | one accepted configured tanker, normalized with M |
| `packing` | Removable delivery protection | conditional | Protection supplied at delivery. | foreground | one accepted configured tanker, normalized with M |

Actual stock forming feeds double-hull/cargo-tank joining and conditional hull/coating work, cargo-system integration, machinery/outfitting and launch/commissioning/acceptance, then conditional delivery protection. Stages may overlap; assign resources once to actual operations and supplier scope. Every card is conditional on exact composition/state/configuration, even in required stages. Add each actual omitted component/fuel/chemical and demonstrated waste/emission independently. No universal welding/coating recipe or obligatory emission is claimed.

### Process: Hull and cargo-bulkhead stock preparation (`stock_form`)

Trace actual outer/inner hull, double-bottom and cargo bulkhead drawings, steel grades and cutting/forming route. Received complete blocks replace constituent stock and already performed fabrication. Collect actual cutting gases, cutting oils and in-house component processes separately; no universal stock recipe is prescribed.

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

###### Steel Plate (`hsla_plate`)

Only actual hot-rolled low-alloy high-strength thick plate matching the public physical route, grade and thickness. Shipbuilding suitability/material approval must be independently established from actual drawings and supplier records; this identity is not a marine approval. Other steel grades require separate rows.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
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

### Process: Double-hull and cargo-tank structural assembly (`hull_join`)

Join declared hull blocks, inner/outer hull, cargo/slop/segregated ballast bulkheads, deck and superstructure. Record actual joints, welding procedures, inspections, tightness checks and rework. Supplier-completed block work counts once; certification and double-hull dimensions come from actual applicable drawings, not a universal regulatory threshold inferred here. Welding consumables below are conditional alternatives.

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
- Sources: `imo-tankers`

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
- Sources: `imo-tankers`

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
- Sources: `imo-tankers`

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
- Sources: `imo-tankers`

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
- Sources: `imo-tankers`

### Process: Hull surface preparation and protective coating (`surface_finish`)

Trace actual hull/ballast/exterior layers, preparation and curing. Keep base/hardener and antifouling formulations separate. Supplier-completed layers replace duplicate foreground work. The listed epoxy and Cu2O coating examples are conditional, not mandatory formulations. Add actual thinner, cleaner, other layers and measured releases separately.

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
- Sources:

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
- Sources:

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
- Sources:

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
- Sources:

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
- Sources:

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
- Sources:

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
- Sources:

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
- Sources:

### Process: Cargo containment finish and pump/pipe installation (`cargo_system`)

Install the actual fixed liquid-cargo system, including separately supplied cargo/slop pumps, piping/manifolds, vent/vapour return, gauging and tank-cleaning equipment. Tank coating, heating coils and inert-gas equipment apply only to the declared actual design and cargo compatibility/acceptance regime. Purchased systems include their constituent parts once. Collect tank/piping flushing and tightness trials within construction acceptance; no operational cargo voyage or tank-cleaning service. The preliminary Damen sheet is a design example, not proof of this vessel configuration.

#### Inputs

##### Product flows

###### Finished deep-well petroleum-product cargo pump assembly (`cargo_pump`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished deep-well petroleum-product cargo pump assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Finished carbon-steel oil-product cargo pipe spool (`cargo_pipe`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished carbon-steel oil-product cargo pipe spool
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Cargo-tank pressure-vacuum vent valve assembly (`cargo_vent`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Cargo-tank pressure-vacuum vent valve assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Closed marine cargo-tank level-gauging assembly (`cargo_gauge`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Closed marine cargo-tank level-gauging assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Epoxy-phenolic cargo-tank coating base formulation (`cargo_epoxy`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Epoxy-phenolic cargo-tank coating base formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Amine epoxy-phenolic cargo-tank coating hardener formulation (`cargo_hardener`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Amine epoxy-phenolic cargo-tank coating hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Finished stainless-steel liquid-cargo heating coil assembly (`heating_coil`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished stainless-steel liquid-cargo heating coil assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Finished marine inert-gas generator assembly (`inert_gas_unit`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished marine inert-gas generator assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Process Water (`cargo_flush_water`)

Actual supplied treated industrial process water for construction cargo-system flushing or tests; no raw sea-water substitution. Recovered internal circulation is not a second purchase. Identify actual outlet separately.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

###### Alternating-current electricity supplied at the declared shipyard intake (`electricity_cargo_system`)

Collect actual station electricity kWh and shipyard intake voltage/supply route, with measured shared-driver denominator. Nameplate kW is not energy.

- Selected flow: Alternating-current electricity supplied at the declared shipyard intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

#### Outputs

##### Waste flows

###### Aqueous commissioning cargo-pipe flushing effluent transferred for treatment (`cargo_flush_effluent`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Aqueous commissioning cargo-pipe flushing effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cargo_system.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cargo_system`
- Sources: `damen-product-tanker`

### Process: Diesel propulsion and auxiliary machinery installation (`machinery`)

Record independent diesel engines and mechanical drive components for that route, or complete generating sets and propulsion motors/converters for diesel-electric. Complete purchased gensets replace their included engine; engine Item(s) exchange stays distinct from measured installed mass. Add actual steering, cooling, exhaust, fuel, thruster and auxiliary assemblies not supplier-included, with separate supply/manufacture modules.

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
- Sources: `damen-seagoing`

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
- Sources: `damen-seagoing`

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
- Sources: `damen-seagoing`

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
- Sources: `damen-seagoing`

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
- Sources: `damen-seagoing`

###### Finished marine electric propulsion motor (`propulsion_motor`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished marine electric propulsion motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `damen-seagoing`

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
- Sources: `damen-seagoing`

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
- Sources: `damen-seagoing`

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
- Sources: `damen-seagoing`

### Process: Electrical, safety and crew outfitting (`outfit`)

Install actual wiring, crew accommodation, navigation, lifesaving, cargo-deck firefighting and auxiliary pollution-control equipment. Each supplied complete unit is an atomic assembly with declared completeness. Add actual winches, mooring, steering, rescue craft, insulation, furniture, refrigeration chemicals and operating fills before dataset completion. A cargo hose crane, foam system or ballast-treatment unit is conditional on the actual design; no generic manufacturer sheet certifies the real vessel.

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
- Sources: `damen-product-tanker`

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
- Sources: `damen-product-tanker`

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
- Sources: `damen-product-tanker`

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
- Sources: `damen-product-tanker`

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
- Sources: `damen-product-tanker`

###### Finished marine ballast-water treatment unit (`ballast_unit`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Finished marine ballast-water treatment unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-product-tanker`

###### Installed liquid-cargo-deck firefighting foam system assembly (`foam_system`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Installed liquid-cargo-deck firefighting foam system assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-product-tanker`

###### Hydraulically actuated marine cargo-hose handling crane assembly (`hose_crane`)

Only this actual physical/compositional exchange where used; retain supplier scope/specification and independently measured issues/returns or waste transfer mass. Record conditional absence rather than an invented amount; add different actual variants separately.

- Selected flow: Hydraulically actuated marine cargo-hose handling crane assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `damen-product-tanker`

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
- Sources: `damen-product-tanker`

### Process: Launch, construction trials and net-mass acceptance (`acceptance`)

Record actual launch, harbour/sea commissioning, cargo-system construction tests, rework and acceptance. Separate fuel consumed from returned or dispatch-held fuel, and exclude operational cargo, personnel, consumable fuel/fresh water, ballast and temporary test loads from net M. Retain permanent service fluids in declared installed configuration. Actual test media and outlets must be identified separately; raw-water use, flushing residues or gas releases are not presumed. No universal duration/load/fuel use or lifetime factor is adopted.

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
- Sources: `nma-lightship`

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
- Sources: `nma-lightship`

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
- Sources: `nma-lightship`

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
- Sources: `nma-lightship`

#### Outputs

##### Product flows

###### Tankers (ships) (`finished_machine`)

One kg of accepted configured complete double-hull steel diesel oil-product tanker at the declared shipyard gate, with installed equipment/service fluids reconciled and consumable cargo/fuel/water/ballast excluded from net M. Generic public vessel identity needs all tanker qualifiers; no transport service or complete upstream claim.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Tankers (ships) `6285cffb-df99-4532-9f3a-8de1c4bb6fde`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `nma-lightship`

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
- Sources: `nma-lightship`

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
- Sources: `nma-lightship`

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
- Sources: `nma-lightship`

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
- Sources: `nma-lightship`

### Process: Removable delivery protection (`packing`)

Measure each actual removable protection exchange and exclude from M; independently weigh integral delivery-detached parts and reconcile accepted complete configuration. Separately sold spares and external tow/support craft are excluded.

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
| `cp_stock_form` | stock_form | Hull and cargo-bulkhead stock preparation | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain drawing revisions/material certificates, measured stock issues/returns, cutting offcuts and station electricity. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_hull_join` | hull_join | Double-hull and cargo-tank structural assembly | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect block scope, weld inspection/tightness records, actual filler/gas issues and meters. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_surface_finish` | surface_finish | Hull surface preparation and protective coating | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain layer SDS, composition and measured issues/returns, coated area, water, captured residue and outlet records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_cargo_system` | cargo_system | Cargo containment finish and pump/pipe installation | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect cargo-system P&ID, tank segregation/coating schedule, supplier component scope, weighed separate assemblies, formulation records and actual flush/tightness/functional test logs. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_machinery` | machinery | Diesel propulsion and auxiliary machinery installation | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Trace actual propulsion architecture, supplier BOM/serials, counts, independent installed masses, alignment and connection records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_outfit` | outfit | Electrical, safety and crew outfitting | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain installation drawings, actual claimed certificates, supplier boundaries, separately measured module masses and test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_acceptance` | acceptance | Launch, construction trials and net-mass acceptance | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain original current lightweight/weight inspection, controlled acceptance mass/configuration records, calibration and item-level corrections; commissioning issues/returns and measured species/outlets. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_packing` | packing | Removable delivery protection | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Weigh material issues/returns and reconcile delivered integral parts. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each hull/configuration order collect attributable net stock issues, independent modules, utilities, construction trial consumption, wastes and actual emissions; subtract recorded returns and inventory change and apply justified shared allocation, then divide by accepted vessel count to obtain q_item and by the same controlled measured net M. Preserve engine exchanges Item(s)/kg, independently measured engine mass for vessel completeness, mass exchanges kg/kg and electricity MJ/kg. Compatible serial vessels with measured mass variation may use attributable totals divided by summed accepted net masses, retaining all serial records. Separate incompatible propulsion, hull, outfitting, coating and trial scope. Unknown is a gap, never zero. No tonnage/capacity/rated-power or lifetime conversion is inferred.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | The original current vessel acceptance mass record must implement mass_record_provenance. Retain actual physical lightship/weight inspection, observable method inputs/calibration and a signed item-level reconciliation to delivered net configuration; reconcile independently weighed installed modules and fluids. A catalogue or unexplained displacement/tonnage record is insufficient. Missing method, uncertain correction or configuration change prevents a complete quantitative dataset; resolve by new measurement/reconciliation, never an assumed weight. | originals/correction ledger; nma-lightship is a method example only |
| `quality_bom` | complete vessel | Reconcile drawings/BOM and installed hull/machinery/propulsion, piping/electrical, cargo/crew/safety/navigation and actual service-fluid masses, supplier scope and detached delivered parts. Add all actual missing components before completion; received complete modules count once. | original drawings, weighing and supplier scope |
| `quality_balances` | flows and trials | Retain calibration, material issues/returns/reuse, actual formulation/density, commissioning consumed versus retained fuel and measured species/medium/outlets. Define QA limits from applicable actual records or verified comparable evidence; no invented yield, intensity range or universal commissioning consumption. | stock, meters, SDS, trial and transfer records |
| `quality_coverage` | dataset | Disclose actual geography/period/configurations, conditional absence, outsourcing, identity/quantity uncertainty, empirical range gaps, missing upstream and applicable acceptance regime. Historical manufacturer/authority examples do not prove present certificates, current legal completeness or the actual M of this vessel. PCR checking validates the declared relationship, not a real ship record or scientific approval. | coverage/evidence limitations register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require complete configured steel-hulled diesel tanker and positive actual net M from controlled records implementing mass_record_provenance. Exclude operational cargo/persons/fuel/fresh water/ballast and temporary loads, retain declared installed service fluids. Reject tonnage, deadweight, catalogue/full-load displacement or full-fuel mass substitution. Missing underlying method or balance requires review and blocks completed quantitative data. |  |
| `validate_identity` | all rows | Check each atomic physical/chemical exchange, public reference property/unit group, route/state and supplier scope. Engine item count is not mass; a genset includes its engine once; Pure resin is not a formulated cargo-tank coating; CuO is not Cu2O paint; water supply is not effluent or resource withdrawal. Keep unsupported identity blank and add actual species/components before completion. |  |
| `validate_measurement` | all rows | Verify every amount/collection/conversion against same configuration, actual period/site, accepted count and net M. Reconcile installed prefills, consumed trial fuel and supplier constituents without duplication; verify calibration, density/unit conversions and shared denominator. Unknown is never zero. |  |
| `validate_species` | elementary rows | Use only demonstrated attributable construction-trial species and actual environmental medium. These CO2/NO/NO2 identities are air-unspecified immediate releases; fossil CO2 requires fossil provenance. Total NOx without species split, N2O, nitrogen/nitrite, biogenic CO2, water/soil and long-term releases cannot substitute. Captured dust remains waste. |  |
| `validate_cargo_system` | cargo containment and equipment | Reconcile actual cargo/slop segregation, pipe/manifold/vent/gauging drawings and material/coating compatibility with the declared petroleum-product configuration. Trace actual leak/tightness/functional test method, test media and outlets; include attributable construction testing only. Heating, inert-gas, foam and ballast-treatment applicability follows actual design and current verified acceptance requirements; no preliminary brochure count or universal threshold certifies the ship. | `damen-product-tanker` |
| `validate_acceptance` | claimed flag/class acceptance | Trace actual vessel-specific surveys/certificates and applicable administration/class regime when claimed. Generic manufacturer certification or an IMO overview does not certify this tanker; no universal numerical standard/test/load is adopted. | `imo-tankers` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete steel-hulled diesel tanker foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching hull/propulsion/outfitting/coating, controlled net-mass scope, trial boundary, gate/site/period |
| excluded_use | Passenger/freight service or lifetime comparison, equal-mass capacity equivalence, other propulsion/materials and unsupported complete cradle-to-gate claims |
| required_metadata | builder/model; hull serial and drawing revision; double-hull steel oil-product cargo scope and compartment segregation; mechanical-diesel or diesel-electric architecture; hull/cargo bulkhead grades, thickness and supplier block completeness; cargo/slop pump, pipe/manifold, vent/vapour-return and gauging design; actual cargo-tank coating formulation and compatibility; conditional heating, inert gas, fixed cleaning, ballast treatment and fire/safety equipment; actual claimed flag/class acceptance; positive net M in kg from current controlled acceptance records with original actual lightship/weight inspection, calibration, hydrostatic/physical inputs and item-level net-configuration correction; excluded cargo/slops, persons, consumable fuel/fresh water, ballast and temporary test contents; installed service fluids and integral delivery-detached parts; actual supplier inclusion, manufacturing site/period, commissioning and delivery gate; upstream linkage |
| required_quality_disclosure | Identity/quantity and mass-provenance gaps, uncertainty, conditional absences, full BOM, allocation, actual acceptance scope and unlinked upstream |
| update_trigger | Hull/propulsion/outfitting/coating, supplier modules, actual M evidence/corrections, trial state/boundary, manufacturing/acceptance regime, site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `damen-product-tanker` | literature | [Damen: Combi Tanker 6000 preliminary sheet](https://medialibrary.damen.com/m/3a17769dc9b8dc79/original/product-sheet-combi-tanker-5800.pdf) | PDF p.1 cargo systems, propulsion, deck/safety and optional systems; p.1–2 footer states preliminary data subject to change. Filename says 5800, actual document says 6000. Candidate equipment/configuration example only; no counts, flow rates, ratings, cargo capacity, deadweight or GT adopted as manufacturing values or net M. |
| `damen-seagoing` | literature | [Damen: Seagoing Transport](https://medialibrary.damen.com/m/95d5489057a4c08f/original/Seagoing-transport.pdf) | PDF p.5 (printed 8–9) modular approach/building; p.8 (printed 14–15) product-tanker choices alongside separate gas carriers. Descriptive route/options only; no manufacturer performance claim, numerical benchmark or universal recipe adopted. |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/printed pp.5–7 sections 3.2–3.4, ship condition, tank contents, water density and draught/freeboard measurement. Historical Norwegian method example only; original current vessel measurement and net-configuration reconciliation remain required. No historical numerical thresholds or global legal applicability adopted. |
| `imo-tankers` | official_guidance | [IMO: Tanker safety—preventing accidental pollution](https://www.imo.org/en/ourwork/safety/pages/oiltankers.aspx) | Sections Inert gas systems, Double hulls and Revision of Annex I describe safety/containment context and historical changes. Not a complete current legal specification or actual vessel certificate. Use actual applicable regime for each design; no page threshold, universal inert-gas requirement or tank test load is adopted. |
