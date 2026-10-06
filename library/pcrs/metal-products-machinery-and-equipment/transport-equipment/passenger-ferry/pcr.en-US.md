---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.passenger-ferry
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Steel-hulled diesel passenger ferry manufacture

## 1. Scope and Applicability

This candidate PCR covers manufacture of new complete steel-hulled diesel-powered passenger ferries, including declared passenger/vehicle RoPax variants. Mechanical-diesel and diesel-electric layouts are separate configurations; hybrid/traction battery and alternative-fuel systems are outside this scope. Foreground starts at documented stock/component receipt and ends at configuration-specific acceptance and the declared shipyard delivery gate, including attributable construction commissioning. Link supplier production only when supported; the collected receipt-to-delivery foreground alone is not complete cradle-to-gate. [Sources: `remontowa-ferries`, `remontowa-steel`]

Exclude cruise/excursion vessels, cargo/fishing/warships, aluminium/composite hulls, LNG/dual-fuel/electric/hybrid propulsion, hull-only intermediates, conversion/repair, passenger/freight operation, owner maintenance and end of life. The manufacturing boundary is narrower than CPC 49311. Existing motor-vehicle body methodology lacks vessel structural/outfitting and lightship acceptance scope; legacy classification scaffolds are not promoted. No passenger transport service or lifetime performance is covered. Scientific review remains pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.passenger-ferry |
| classification_refs | CPC 3.0 49311; narrower steel-hulled diesel ferry manufacture, context only |
| covered_products | New complete configured steel-hulled diesel passenger ferries with declared mechanical/diesel-electric and RoPax variants |
| excluded_products | Other vessel purposes/hull materials/propulsion, repair/conversion and transport services |
| representative_product | One hull-serial-linked accepted complete ferry with controlled actual net M |
| production_route | Conditional stock forming, hull joining, conditional coating, machinery installation, electrical/passenger/safety outfitting, launch/commissioning and acceptance |
| market_state | Complete accepted vessel at declared shipyard gate, no payload/operational consumables in net M |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured steel-hulled diesel passenger ferry |
| How much | 1 kg accepted net complete-vessel mass; actual per-vessel records divided by positive controlled M |
| How well | Vessel-specific structural, installation, commissioning and release criteria; trace applicable flag/class acceptance when claimed. Equal mass is not equal passenger capacity/performance |
| How long or cycle | One manufacturing and construction-acceptance cycle; no assumed ferry lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cruise ships, excursion boats and similar vessels, principally designed for the transport of persons, ferry boats of all kinds `98736d4d-f63f-4887-bcc8-931ed8157cfe` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model; hull serial and drawing revision; ferry/passenger or RoPax configuration, principal dimensions and intended service area; hull/superstructure material grades, thickness and block supplier completeness; mechanical-diesel or diesel-electric propulsion architecture, engine/genset/thruster scope; installed piping/electrical/passenger/safety equipment and actual certificates if claimed; coating base/hardener/antifouling formulation; positive net M in kg from current controlled acceptance mass records; original actual lightweight/weight inspection, method/calibration and configuration correction ledger; exclusion of passengers/crew, cargo/vehicles, consumable fuel/fresh water/ballast, temporary testing loads, removable protection and delivery fixtures; installed service-fluid and detached integral delivered-part masses; commissioning scope and fuel origin; actual manufacturing/outsourcing, shipyard/site/period, delivery gate and supplier upstream linkage |

Declare all qualifiers in metadata or equivalent reference comments. The broad public vessel product identity must be narrowed to the actual ferry configuration. Net M includes complete installed hull, machinery, outfitting, integral delivered equipment and declared installed service fluids. Reconcile delivery-detached integral parts by measured mass. Exclude persons, cargo/vehicles, consumable fuel/fresh water, ballast, removable protection and temporary trial loads/fixtures. Gross/net tonnage, deadweight, catalogue mass, loaded displacement and full-fuel condition cannot substitute for M. An actual survey-state measurement can only contribute through the traceable net-configuration correction record required below.

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
| product_classification_scope | Steel-hulled diesel passenger ferry, declared propulsion and RoPax variant |
| recursive_input_rule | No complete ferry recursively generated as its own input; bought-in finished blocks/modules bypass included operations |
| upstream_dataset_requirement | Match actual grades/formulations/module completeness/propulsion, period/geography and property; disclose missing supplier production |
| disclosure | builder/model; hull serial and drawing revision; ferry/passenger or RoPax configuration, principal dimensions and intended service area; hull/superstructure material grades, thickness and block supplier completeness; mechanical-diesel or diesel-electric propulsion architecture, engine/genset/thruster scope; installed piping/electrical/passenger/safety equipment and actual certificates if claimed; coating base/hardener/antifouling formulation; positive net M in kg from current controlled acceptance mass records; original actual lightweight/weight inspection, method/calibration and configuration correction ledger; exclusion of passengers/crew, cargo/vehicles, consumable fuel/fresh water/ballast, temporary testing loads, removable protection and delivery fixtures; installed service-fluid and detached integral delivered-part masses; commissioning scope and fuel origin; actual manufacturing/outsourcing, shipyard/site/period, delivery gate and supplier upstream linkage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | Include actual manufacture, attributable rework, launching and construction commissioning to declared acceptance gate. Allocate independently measured production-support trial resources; exclude passenger/cargo service and research/operational maintenance. Add every actual tug/dock/crane service or fuel as a separate declared exchange when included, with service boundary/duration and supplier scope. No lifetime voyage burden is inferred. |  |
| `boundary_modules` | purchased components | Count finished hull blocks, gensets/thrusters and fitted accommodation/safety modules once with constituents and prefills. Replace constituent cards for included supply. Actual in-house manufacture needs measured component inventories. Complete the full actual BOM, all conditional chemistries and demonstrated species before dataset release; the candidate cards are not an exhaustive vessel bill. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | Hull stock cutting and forming | conditional | Unformed hull stock is processed inside the reporting shipyard boundary. | foreground | one accepted configured ferry, normalized with M |
| `hull_join` | Hull/block joining and structural completion | required | Each new complete steel-hulled ferry. | foreground | one accepted configured ferry, normalized with M |
| `surface_finish` | Conditional surface preparation and coating | conditional | Actual preparation/coating occurs in the reporting foreground. | foreground | one accepted configured ferry, normalized with M |
| `machinery` | Propulsion and machinery installation | required | Each declared diesel-powered ferry configuration. | foreground | one accepted configured ferry, normalized with M |
| `outfit` | Electrical, passenger and safety outfitting | required | Every complete passenger ferry. | foreground | one accepted configured ferry, normalized with M |
| `acceptance` | Launch, commissioning and vessel acceptance | required | Each complete vessel released at the declared shipyard delivery gate. | foreground | one accepted configured ferry, normalized with M |
| `packing` | Conditional removable delivery protection | conditional | Actual removable protection supplied with the ferry. | foreground | one accepted configured ferry, normalized with M |

Actual stock forming feeds hull joining and conditional finishing, machinery/outfitting and launch/commissioning/acceptance, then conditional delivery protection. Stages may overlap; assign resources once to actual operations and supplier scope. Every card is conditional on exact composition/state/configuration, even in required stages. Add each actual omitted component/fuel/chemical and demonstrated waste/emission independently. No universal welding/coating recipe or obligatory emission is claimed.

### Process: Hull stock cutting and forming (`stock_form`)

Cut/form declared plate and profiles from serial-linked approved structural drawings. Track grade, thickness, material certification, issues/returns and offcuts. Bought-in fabricated blocks replace their included stock and completed fabrication once. Actual cutting gases, lubricants and other fabrication consumables need separate chemistry-specific cards. Historical ferry steel-cutting evidence supports this operation, not a universal recipe or today’s fuel architecture.

#### Inputs

##### Product flows

###### Hot-rolled normal-strength certified shipbuilding steel plate (`normal_hull_plate`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Hot-rolled normal-strength certified shipbuilding steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `remontowa-steel`

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
- Sources: `remontowa-steel`

###### Hot-rolled steel ship-hull stiffener profile (`hull_profile`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Hot-rolled steel ship-hull stiffener profile
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock_form.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock_form`
- Sources: `remontowa-steel`

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
- Sources: `remontowa-steel`

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
- Sources: `remontowa-steel`

### Process: Hull/block joining and structural completion (`hull_join`)

Assemble/join hull sections, bulkheads, decks and superstructure according to the declared construction route, joining procedures and acceptance records. Record actual welding method, filler/gas, distortion corrections, structural inspections and rework. Purchased blocks bypass their performed constituent manufacture; intermediate block mass is not finished vessel M. Welding variants do not imply all fillers/gases are present.

#### Inputs

##### Product flows

###### Solid low-alloy steel gas-shielded welding wire (`solid_wire`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Solid low-alloy steel gas-shielded welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `remontowa-ferries`

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
- Sources: `remontowa-ferries`

###### Argon/carbon-dioxide premixed welding shielding gas (`argon_mix`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Argon/carbon-dioxide premixed welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `remontowa-ferries`

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
- Sources: `remontowa-ferries`

#### Outputs

##### Waste flows

###### Captured iron-oxide-rich hull-welding filter dust (`weld_dust`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Captured iron-oxide-rich hull-welding filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull_join.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hull_join`
- Sources: `remontowa-ferries`

### Process: Conditional surface preparation and coating (`surface_finish`)

Collect actual cleaning/blasting, coating base and hardener separately, antifouling where applied, curing and waste outlets. Supplier-painted blocks bypass finished layers. Epoxy and Cu2O antifouling are conditional exact-chemistry examples, not compulsory recipes. Add alternative layers and actual thinner/cleaner species individually. Captured abrasive/paint residues are waste; actual measured environmental releases require separate elemental/species cards.

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
- Sources: `remontowa-ferries`

###### Spherical cast-steel hull-blasting shot (`abrasive`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Spherical cast-steel hull-blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `remontowa-ferries`

###### Formulated epoxy marine-coating base component (`epoxy_base`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Formulated epoxy marine-coating base component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `remontowa-ferries`

###### Polyamine marine-epoxy coating hardener formulation (`epoxy_hardener`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Polyamine marine-epoxy coating hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `remontowa-ferries`

###### Cuprous-oxide self-polishing marine antifouling paint formulation (`cu2o_paint`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Cuprous-oxide self-polishing marine antifouling paint formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `remontowa-ferries`

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
- Sources: `remontowa-ferries`

#### Outputs

##### Waste flows

###### Spent steel blasting shot with removed hull-coating residue (`spent_abrasive`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Spent steel blasting shot with removed hull-coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `remontowa-ferries`

###### Aqueous steel-hull cleaning effluent transferred for treatment (`clean_effluent`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Aqueous steel-hull cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `remontowa-ferries`

### Process: Propulsion and machinery installation (`machinery`)

Install the actual diesel propulsion route: mechanical drive uses independently supplied engines, reduction/shaft/propeller scope; diesel-electric uses generating sets, distribution/converters and propulsion motors/thrusters. These are alternatives. Bought-in complete gensets or thrusters replace included engine/motor/gear constituents; marine engine item count is independent of weighed installed mass. Add steering, cooling, exhaust, fuel and every actual pump/pipe/auxiliary module separately when not included. In-house component manufacture needs its own measured module.

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
- Sources: `remontowa-ferries`

###### Finished marine propulsion reduction gearbox (`reduction`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine propulsion reduction gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `remontowa-ferries`

###### Finished steel marine propeller shaft (`shaft`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished steel marine propeller shaft
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `remontowa-ferries`

###### Finished nickel-aluminium-bronze marine propeller (`propeller`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished nickel-aluminium-bronze marine propeller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `remontowa-ferries`

###### Finished marine diesel electrical generating set (`diesel_genset`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine diesel electrical generating set
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `remontowa-ferries`

###### Finished marine electric propulsion motor (`propulsion_motor`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine electric propulsion motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `remontowa-ferries`

###### Finished marine centrifugal bilge-water pump (`bilge_pump`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine centrifugal bilge-water pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `remontowa-ferries`

###### Finished carbon-steel marine bilge pipe (`bilge_pipe`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished carbon-steel marine bilge pipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_machinery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_machinery`
- Sources: `remontowa-ferries`

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
- Sources: `remontowa-ferries`

### Process: Electrical, passenger and safety outfitting (`outfit`)

Fit the actual electrical installation, passenger accommodation, windows, navigation, lifesaving, firefighting, bilge and sanitary equipment from the vessel-specific BOM. Each complete supplied module includes its constituents only once. Vehicle decks/ramps are conditional RoPax variants; ramp hardware, actuation and hydraulic fill must be declared separately when not supplier-included. Add each actual furnishing, insulation, controller, refrigerant, firefighting unit and pipework chemistry/design before dataset completion; no universal seat/raft count or certificate is implied.

#### Inputs

##### Product flows

###### Insulated-copper marine electrical cable (`cable`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Insulated-copper marine electrical cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `remontowa-ferries`

###### Filled lead-acid marine starter battery (`starter_battery`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Filled lead-acid marine starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `remontowa-ferries`

###### Finished upholstered passenger-ferry seat (`passenger_seat`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished upholstered passenger-ferry seat
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `remontowa-ferries`

###### Laminated safety-glass marine window pane (`window`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Laminated safety-glass marine window pane
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `remontowa-ferries`

###### Finished marine navigation radar assembly (`radar`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Finished marine navigation radar assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `remontowa-ferries`

###### Packed inflatable marine liferaft (`liferaft`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Packed inflatable marine liferaft
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `remontowa-ferries`

###### Steel hydraulically actuated ferry vehicle-loading ramp assembly (`vehicle_ramp`)

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

- Selected flow: Steel hydraulically actuated ferry vehicle-loading ramp assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfit`
- Sources: `remontowa-ferries`

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
- Sources: `remontowa-ferries`

### Process: Launch, commissioning and vessel acceptance (`acceptance`)

Collect actual launching, harbour/sea commissioning trials, rework and release against configuration-specific criteria. No universal duration, route, distance or test load is assumed. Keep test fuel issue/return/consumption and remaining dispatch contents separately; consumable fuel, fresh water, ballast, passengers/crew and cargo are excluded from net manufactured M. Permanently installed service fluids and integral delivered safety equipment belong in the declared configuration and mass reconciliation. Any actual marine propulsion fuel species/origin and emissions are independent measured rows, not lifetime operation. Claimed flag/class acceptance must be traceable to the applicable regime.

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

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

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

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

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

###### Cruise ships, excursion boats and similar vessels, principally designed for the transport of persons, ferry boats of all kinds (`finished_machine`)

One kg of accepted configured complete steel-hulled diesel passenger ferry at the declared shipyard gate, with installed equipment/service fluids reconciled and consumable cargo/fuel/water/ballast excluded from net M. Generic public vessel identity needs all ferry qualifiers; no transport service or complete upstream claim.
Public identity retains reference flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66` and exchange unit kg.

- Selected flow: Cruise ships, excursion boats and similar vessels, principally designed for the transport of persons, ferry boats of all kinds `98736d4d-f63f-4887-bcc8-931ed8157cfe`
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

Only the precisely declared actual exchange; collect weighed issues/returns or outlet mass, supplier completeness, exact composition/state and recipient.

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

### Process: Conditional removable delivery protection (`packing`)

Measure each actual protection material separately and exclude it from M. Delivery-detached integral parts are weighed and reconciled with complete vessel configuration; separately sold spares, external tow/support craft and transport fixtures are excluded.

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
| `cp_stock_form` | stock_form | Hull stock cutting and forming | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Collect material certificates/drawing revisions, weighed issues/returns/offcuts, actual forming/cutting operations and station meters. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_hull_join` | hull_join | Hull/block joining and structural completion | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain block scope, weld procedures/inspection, filler/gas issues and actual meters; reconcile outsourced joining once. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_surface_finish` | surface_finish | Conditional surface preparation and coating | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain layer SDS/base-hardener ratio, measured issues/returns, coated area/layer scope, water, captured residues and actual species measurements. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_machinery` | machinery | Propulsion and machinery installation | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Trace machinery BOM/serial, marine rating and supplier inclusions, actual engine count and separate installed mass, alignment, connection and first-fill records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
| `cp_outfit` | outfit | Electrical, passenger and safety outfitting | foreground_record | hull serial/order; configuration; accepted count; exchange identity/state/property/unit; issues/returns/stock change; supplier inclusions; engine count and separate installed mass; electricity kWh/intake; fuel issues/returns/consumed/retained; actual species medium; waste recipient; shared driver/denominator; instrument/calibration | Retain accommodation/wiring/safety drawings, marine supplier certificates where claimed, weighed separate module receipts, supplier scope and installation/test records. | actual unit for each row | each order/batch | declared manufacturing period | declared shipyard and disclosed subcontractors | attributable exchange amount / accepted units | originals, weighing, meters, supplier, trial, transfer and acceptance records |
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
| `quality_bom` | complete vessel | Reconcile drawings/BOM and installed hull/machinery/propulsion, piping/electrical, passenger/safety/navigation and actual service-fluid masses, supplier scope and detached delivered parts. Add all actual missing components before completion; received complete modules count once. | original drawings, weighing and supplier scope |
| `quality_balances` | flows and trials | Retain calibration, material issues/returns/reuse, actual formulation/density, commissioning consumed versus retained fuel and measured species/medium/outlets. Define QA limits from applicable actual records or verified comparable evidence; no invented yield, intensity range or universal commissioning consumption. | stock, meters, SDS, trial and transfer records |
| `quality_coverage` | dataset | Disclose actual geography/period/configurations, conditional absence, outsourcing, identity/quantity uncertainty, empirical range gaps, missing upstream and applicable acceptance regime. Historical manufacturer/authority examples do not prove present certificates, current legal completeness or the actual M of this vessel. PCR checking validates the declared relationship, not a real ship record or scientific approval. | coverage/evidence limitations register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | Require complete configured steel-hulled diesel ferry and positive actual net M from controlled records implementing mass_record_provenance. Exclude operational cargo/persons/fuel/fresh water/ballast and temporary loads, retain declared installed service fluids. Reject tonnage, deadweight, catalogue/full-load displacement or full-fuel mass substitution. Missing underlying method or balance requires review and blocks completed quantitative data. |  |
| `validate_identity` | all rows | Check each atomic physical/chemical exchange, public reference property/unit group, route/state and supplier scope. Engine item count is not mass; a genset includes its engine once; CuO is not Cu2O paint; water supply is not effluent or resource withdrawal. Keep unsupported identity blank and add actual species/components before completion. |  |
| `validate_measurement` | all rows | Verify every amount/collection/conversion against same configuration, actual period/site, accepted count and net M. Reconcile installed prefills, consumed trial fuel and supplier constituents without duplication; verify calibration, density/unit conversions and shared denominator. Unknown is never zero. |  |
| `validate_species` | elementary rows | Use only demonstrated attributable construction-trial species and actual environmental medium. These CO2/NO/NO2 identities are air-unspecified immediate releases; fossil CO2 requires fossil provenance. Total NOx without species split, N2O, nitrogen/nitrite, biogenic CO2, water/soil and long-term releases cannot substitute. Captured dust remains waste. |  |
| `validate_acceptance` | claimed flag/class acceptance | Trace actual vessel-specific surveys/certificates and applicable administration/class regime when claimed. Generic manufacturer certification or an IMO overview does not certify this ferry; no universal numerical standard/test/load is adopted. | `imo-surveys` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured complete steel-hulled diesel ferry foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching hull/propulsion/outfitting/coating, controlled net-mass scope, trial boundary, gate/site/period |
| excluded_use | Passenger/freight service or lifetime comparison, equal-mass capacity equivalence, other propulsion/materials and unsupported complete cradle-to-gate claims |
| required_metadata | builder/model; hull serial and drawing revision; ferry/passenger or RoPax configuration, principal dimensions and intended service area; hull/superstructure material grades, thickness and block supplier completeness; mechanical-diesel or diesel-electric propulsion architecture, engine/genset/thruster scope; installed piping/electrical/passenger/safety equipment and actual certificates if claimed; coating base/hardener/antifouling formulation; positive net M in kg from current controlled acceptance mass records; original actual lightweight/weight inspection, method/calibration and configuration correction ledger; exclusion of passengers/crew, cargo/vehicles, consumable fuel/fresh water/ballast, temporary testing loads, removable protection and delivery fixtures; installed service-fluid and detached integral delivered-part masses; commissioning scope and fuel origin; actual manufacturing/outsourcing, shipyard/site/period, delivery gate and supplier upstream linkage |
| required_quality_disclosure | Identity/quantity and mass-provenance gaps, uncertainty, conditional absences, full BOM, allocation, actual acceptance scope and unlinked upstream |
| update_trigger | Hull/propulsion/outfitting/coating, supplier modules, actual M evidence/corrections, trial state/boundary, manufacturing/acceptance regime, site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `remontowa-ferries` | literature | [Remontowa Shipbuilding: Ferries, 2021 file](https://remontowa-rsb.pl/wp-content/uploads/2018/08/FERRIES-2021_Druk-2.pdf) | PDF p.5 (printed 3), General Description: separate outfitting disciplines; p.7 (printed 5) FINNØY and p.12 (printed 10) FILLA: historical diesel-electric versus mechanical propulsion and passenger/safety equipment examples. No rated powers, counts, dimensions, tank capacities, tonnage or weight adopted as factors/current requirements. |
| `remontowa-steel` | literature | [Remontowa: Steel cutting for car-passenger ferry](https://remontowa-rsb.pl/en/aktualnosci/steel-cutting-for-the-construction-of-car-passenger-ferry/) | Opening paragraph reports steel cutting on 10 April 2015. Historical fabrication fact only; dual-fuel product is outside this PCR propulsion scope and supplies no fuel/weight/yield factor. |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E, Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/printed pp.5–7, sections 3.2–3.4: actual survey state, water density, tank contents and draught/freeboard records. Historical Norwegian measurement-method example only; actual current vessel records/approved method must establish corrected net M. No historical numerical tank/trim thresholds or global legal requirement adopted. |
| `imo-surveys` | official_guidance | [IMO: Surveys, Verifications and Certification](https://www.imo.org/en/ourwork/iiis/pages/survey-verification-certification.aspx) | Opening survey/certification paragraphs: flag-administration or authorized-organization responsibility. Overview only, not full applicable regime or this ferry certificate; no universal statutory test threshold inferred. |
