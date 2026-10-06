---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.single-aisle-civil-jet-aeroplane
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Single-aisle twin-turbofan civil passenger aeroplane final assembly

## 1. Scope and Applicability

Candidate authored methodology for new complete single-aisle, twin-high-bypass-turbofan civil passenger aeroplane final assembly. The actual aircraft unladen classification exceeds2000kg, supported by original configuration/weight records. Receive completed equipped supplier airframe sections and wings, integrate declared propulsion/systems and complete customer cabin, perform actual paint and attributable production acceptance, then release at the declared delivery gate. The example Airbus process does not establish a universal aircraft architecture or all-site route.

This is narrower than CPC49623. Exclude widebody aircraft, rotorcraft, unmanned aircraft, piston/turboprop/turboshaft or other propulsion aircraft, bare sections, separately sold engines, partial-cabin development aircraft, conversions, repairs, military-specific aircraft and operating passenger transport. Type-development certification/fatigue campaigns are not automatically series manufacturing acceptance. Aircraft wiring and piston-engine PCRs describe independent upstream products, not this complete aircraft. Scientific review is pending; bilingual alignment and automated checks do not establish methodology approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.single-aisle-civil-jet-aeroplane |
| classification_refs | CPC3.0 49623; narrower evidence-selected product boundary, no accepted mapping asserted |
| covered_products | New accepted complete single-aisle twin-turbofan civil passenger aircraft of the declared complete customer configuration |
| excluded_products | Other airframe/propulsion families; unfinished development cabins; flight transport, repair and type-development campaigns |
| representative_product | Airbus single-aisle FAL equipped-section interface and A321XLR development assembly example, with prototype-specific exclusions; no model weight assumed |
| production_route | Supplier-equipped section receipt → airframe joining → declared gear/systems/propulsion/cabin integration → actual coating → attributable acceptance and measured empty configuration → delivery |
| market_state | New complete accepted configured empty aircraft at declared final-assembly delivery gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted complete single-aisle twin-turbofan civil passenger aeroplane |
| How much | 1 kg of accepted configured complete empty aircraft net mass |
| How well | Released complete drawing/BOM and customer cabin, aircraft-approved configuration and actual serial acceptance; no universal airworthiness or emission threshold invented |
| How long or cycle | One manufacturing/acceptance cycle; no operating lifetime or passenger-km reference |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete single-aisle twin-turbofan civil passenger aeroplane |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | producer/type/model and serial; current drawing/BOM and complete passenger cabin layout; twin high-bypass aircraft turbofan route, engine/nacelle/APU serials and supplier inclusion; equipped airframe section/wing/tail interfaces, landing gear and fitted systems; actual paint/SDS/abatement; actual accepted configured empty net M kg and cp_mass, original calibrated complete-aircraft weighing and signed measured configuration/fluid corrections; retain required installed equipment and declared permanent ballast, operating oil/hydraulic fluid and documented unusable fuel; exclude usable fuel, crew/passengers, cargo, temporary ballast/test instruments, packaging and loose spares; original actual unladen category above2000kg; actual site/period, test ground/flight subcompartment, outsourcing and delivery gate |

Declare every required qualifier in dataset metadata or equivalent source-addressable fields. Equal mass does not imply equal seating, thrust, performance, environmental intensity or transport service. No catalogue empty weight is adopted as M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `exchange_mass` | non-electric inventory rows | Mass | kg | Measure each net physical exchange separately. Count-based supplier statistics require actual measured unit mass or serial assembly weighing; preserve an adopted public count/area property if a compatible identity is later demonstrated, with an explicit supported conversion rather than rewriting it to Mass. |
| `electric_energy` | electricity_airframe; electricity_systems; electricity_propulsion; electricity_cabin; electricity_coating; electricity_acceptance; electricity_protection | Net calorific value | MJ | Actual process electricity kWh × 3.6 MJ/kWh; match supply geography/voltage/mix and preserve the public reference energy property. Allocate shared grid/ground-power consumption once with measured drivers. |
| `species_mass` | xylene_air; co2_air; no_air; no2_air | Mass | kg | Use exact measured chemical species, source and receiving medium; integrate actual concentration and exhaust flow on compatible state/time bases. No mandatory emission or default factor. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mass_record_origin` | cp_mass | Mass | kg | Use original actual complete-aircraft calibrated platform/ramp-wheel or load-cell weighing, following the current applicable aircraft manufacturer procedure. Retain all support readings, tare/zero/calibration and repeatability, clean indoor/level state, equipment list and serial configuration; measured signed additions/removals reconcile the accepted net M. Acceptance records are the collection interface, not a substitute for physical measurement. Nominal operating empty weight, maximum take-off weight, payload, design estimate or fuel-full value cannot substitute. Sources: `faa-weight`; `faa-addendum` |
| `mass_configuration` | cp_mass; finished_machine | Mass | kg | Retain delivered engines, complete cabin, gear, fitted systems, declared permanent ballast and specified operating oil/hydraulic-fluid and unusable-fuel state. Exclude usable fuel, people/cargo, temporary ballast/instrumentation, removable protection and loose spares. Measure quantities and densities at actual temperature/state for any fuel/fluid correction, never copy handbook example densities. Record separately potable water/lavatory charge excluded from this empty reference. Reconcile current manufacturer definition and delivery changes to weighing state; unmeasured corrections block completion. Sources: `faa-weight` |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received supplier-completed equipped airframe sections, wings and separately supplied finished modules at final assembly |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Narrow single-aisle twin-turbofan civil passenger aircraft portion of CPC49623 |
| recursive_input_rule | Do not recursively assume every upstream supplier process inside the final-assembly gate |
| upstream_dataset_requirement | Link applicable complete supplier-section/module, actual consumable, energy, transport, subcontract coating and waste-treatment datasets before a cradle-to-gate claim |
| disclosure | Foreground final assembly, acceptance and release only; upstream completion, omissions and gate explicitly disclosed |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_trials` | acceptance | Include actual manufacturing acceptance ground runs/taxi and production acceptance flights attributable to this serial within the declared gate. Distinguish aircraft fuel, outside ground-equipment fuel and purchased test service. Certification campaign, commercial operation and post-gate ferry are excluded; any different gate needs separate documented scope. | `airbus-assembly` |
| `boundary_completeness` | dataset | This gate is not complete cradle-to-gate by itself. Inventory cards are exact conditional physical exchange examples; enumerate every actual separately supplied material/module/chemical, external heat/gas/test service, packaging, waste and measured release. Disclose omitted or unmeasured links without generic category rows, invented zeros or claims of complete coverage. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `airframe` | Equipped airframe section joining | required | Actual final assembly of the declared single-aisle civil passenger jet. | foreground | one accepted complete unit normalized with M |
| `systems` | Landing gear and aircraft systems integration | required | Each declared complete aircraft configuration. | foreground | one accepted complete unit normalized with M |
| `propulsion` | Turbofan and auxiliary-power installation | required | Declared twin-turbofan passenger jet with its actual auxiliary-power configuration. | foreground | one accepted complete unit normalized with M |
| `cabin` | Complete passenger cabin fit-out | required | Complete accepted customer passenger layout, not a partially furnished development aircraft. | foreground | one accepted complete unit normalized with M |
| `coating` | Conditional exterior cleaning and painting | conditional | Actual painting and cleaning included at the reporting final-assembly gate or disclosed subcontractor. | foreground | one accepted complete unit normalized with M |
| `acceptance` | Configured weighing and attributable acceptance | required | Each complete aircraft accepted at the declared delivery gate. | foreground | one accepted complete unit normalized with M |
| `protection` | Conditional delivery protection | conditional | Actual separately consumed temporary covers at the declared factory delivery gate. | foreground | one accepted complete unit normalized with M |

Equipped-section joining feeds gear/systems, propulsion and complete-cabin integration; actual painting and acceptance precede factory release. Declare actual station order and subcontract boundary. Required stages do not make each example exchange compulsory: conditional chemistry or separately supplied modules require actual records; contained supplier constituents are counted once.

### Process: Equipped airframe section joining (`airframe`)

Receive completed equipped airframe sections and wings, join with actual specified fasteners and seal joints. Declare section interfaces, installed systems and supplier inclusions. No upstream aluminium smelting, composite lay-up, section fabrication or wing manufacture is assumed inside this gate. The developmental A321XLR station sequence is an example, not a universal recipe.

#### Inputs

##### Product flows

###### Completed equipped forward fuselage section (`forward_section`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed equipped forward fuselage section
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_airframe`
- Sources: `airbus-production`; `airbus-assembly`

###### Completed equipped centre fuselage section (`centre_section`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed equipped centre fuselage section
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_airframe`
- Sources: `airbus-production`; `airbus-assembly`

###### Completed equipped aft fuselage section (`aft_section`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed equipped aft fuselage section
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_airframe`
- Sources: `airbus-production`; `airbus-assembly`

###### Completed equipped single-aisle aircraft main-wing assembly (`wing`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed equipped single-aisle aircraft main-wing assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_airframe`
- Sources: `airbus-production`; `airbus-assembly`

###### Solid aluminium-alloy aircraft joining rivet (`rivet`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Solid aluminium-alloy aircraft joining rivet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_airframe`
- Sources: `airbus-production`; `airbus-assembly`

###### Formulated polysulfide aircraft joint sealant (`sealant`)

Only an actually specified polysulfide joint-sealant formulation used on this joining order; retain supplier product/SDS and cured/uncured state, weigh net issues/returns and retained sealant, add separately supplied activator as its own exchange if present. The manufacturer assembly example does not prescribe polysulfide chemistry.

- Selected flow: Formulated polysulfide aircraft joint sealant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_airframe`
- Sources: `airbus-production`; `airbus-assembly`

###### Alternating current (`electricity_airframe`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different geography/voltage/mix, renewable contract or ground generator needs its own compatible exchange. Tianjin manufacture is a possible manufacturer example, not a declaration that every reporting site is Chinese. Meter installed-system test and external ground-power consumption once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_airframe`
- Sources: `airbus-production`; `airbus-assembly`

#### Outputs

##### Waste flows

###### Aluminium-alloy aircraft joining drill chips transferred for treatment (`chips`)

Only actual aluminium-alloy drill chips generated by joining-hole finishing in this FAL, transferred to a named recipient. Weigh net collected chips, record alloy/contamination and treatment route; supplier upstream machining chips are excluded.

- Selected flow: Aluminium-alloy aircraft joining drill chips transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_airframe`
- Sources: `airbus-production`; `airbus-assembly`

### Process: Landing gear and aircraft systems integration (`systems`)

Install the actual landing gear, tail assemblies and separately supplied electrical, hydraulic and air-conditioning modules; connect and test systems. Aircraft air-cycle cooling does not establish refrigerant use. Avoid counting wiring or equipment already included in equipped sections. Gear nitrogen and hydraulic fluid apply only to actual servicing records.

#### Inputs

##### Product flows

###### Completed civil-aircraft nose landing-gear assembly (`nose_gear`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-aircraft nose landing-gear assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Completed civil-aircraft main landing-gear assembly (`main_gear`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-aircraft main landing-gear assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Completed civil-aircraft vertical-tail assembly (`vertical_tail`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-aircraft vertical-tail assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Completed civil-aircraft horizontal-tail assembly (`horizontal_tail`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-aircraft horizontal-tail assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Completed aircraft insulated electrical wiring harness (`harness`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed aircraft insulated electrical wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Completed civil-aircraft weather-radar assembly (`avionics`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-aircraft weather-radar assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Completed civil-aircraft air-cycle air-conditioning pack (`air_pack`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-aircraft air-cycle air-conditioning pack
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Formulated phosphate-ester aircraft hydraulic fluid (`hydraulic_fluid`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Formulated phosphate-ester aircraft hydraulic fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Gaseous nitrogen supplied for aircraft landing-gear servicing (`nitrogen`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Gaseous nitrogen supplied for aircraft landing-gear servicing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

###### Alternating current (`electricity_systems`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different geography/voltage/mix, renewable contract or ground generator needs its own compatible exchange. Tianjin manufacture is a possible manufacturer example, not a declaration that every reporting site is Chinese. Meter installed-system test and external ground-power consumption once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_systems`
- Sources: `airbus-assembly`

### Process: Turbofan and auxiliary-power installation (`propulsion`)

Fit completed aircraft turbofan engines, nacelles and declared auxiliary gas-turbine power unit. Each supplier serial and installed supply boundary must distinguish complete engine, nacelle and pylon contents. Aircraft piston engines, turboshafts and non-aircraft 43110 engines are incompatible with the main turbofan identity; external ground power is separately measured and not an installed engine.

#### Inputs

##### Product flows

###### Completed high-bypass civil-aircraft turbofan engine (`turbofan`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed high-bypass civil-aircraft turbofan engine
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_propulsion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_propulsion`
- Sources: `airbus-assembly`

###### Completed civil-aircraft turbofan nacelle assembly (`nacelle`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-aircraft turbofan nacelle assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_propulsion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_propulsion`
- Sources: `airbus-assembly`

###### Completed aircraft auxiliary gas-turbine power unit (`apu`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed aircraft auxiliary gas-turbine power unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_propulsion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_propulsion`
- Sources: `airbus-assembly`

###### Formulated synthetic-ester aviation turbine lubricating oil (`turbine_oil`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Formulated synthetic-ester aviation turbine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_propulsion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_propulsion`
- Sources: `airbus-assembly`

###### Alternating current (`electricity_propulsion`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different geography/voltage/mix, renewable contract or ground generator needs its own compatible exchange. Tianjin manufacture is a possible manufacturer example, not a declaration that every reporting site is Chinese. Meter installed-system test and external ground-power consumption once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_propulsion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_propulsion`
- Sources: `airbus-assembly`

### Process: Complete passenger cabin fit-out (`cabin`)

Install the declared passenger seats, galleys, lavatories and floor panels only when separately supplied. Declare seating layout, emergency equipment and all fitted monuments. Prototype engineer seats and extra flight-test instrumentation do not substitute for a complete customer cabin and are excluded from delivered M.

#### Inputs

##### Product flows

###### Completed civil-passenger-aircraft seat assembly (`seat`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-passenger-aircraft seat assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cabin.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cabin`
- Sources: `airbus-production`; `airbus-assembly`

###### Completed civil-passenger-aircraft galley monument (`galley`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-passenger-aircraft galley monument
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cabin.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cabin`
- Sources: `airbus-production`; `airbus-assembly`

###### Completed civil-passenger-aircraft lavatory module (`lavatory`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed civil-passenger-aircraft lavatory module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cabin.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cabin`
- Sources: `airbus-production`; `airbus-assembly`

###### Completed aircraft composite honeycomb floor panel (`floor_panel`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Completed aircraft composite honeycomb floor panel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cabin.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cabin`
- Sources: `airbus-production`; `airbus-assembly`

###### Alternating current (`electricity_cabin`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different geography/voltage/mix, renewable contract or ground generator needs its own compatible exchange. Tianjin manufacture is a possible manufacturer example, not a declaration that every reporting site is Chinese. Meter installed-system test and external ground-power consumption once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cabin.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cabin`
- Sources: `airbus-production`; `airbus-assembly`

### Process: Conditional exterior cleaning and painting (`coating`)

Record actual pretreatment, coating formulation, application, curing and abatement. Epoxy primer, polyurethane topcoat and mixed-xylene solvent are individually conditional examples requiring the actual formulation/SDS; no compulsory chromium species, VOC mixture, combustion heating or empirical yield is prescribed.

#### Inputs

##### Product flows

###### Process Water (`water`)

Only actually supplied treated industrial process water matching this product identity; measure net treated-water issues and actual density/state if metered by volume. Not untreated elementary freshwater withdrawal or discharged wastewater.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

###### Formulated epoxy-resin aircraft exterior primer base (`primer`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Formulated epoxy-resin aircraft exterior primer base
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

###### Formulated polyamine epoxy-primer hardener (`primer_hardener`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Formulated polyamine epoxy-primer hardener
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

###### Formulated polyurethane aircraft exterior topcoat base (`topcoat`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Formulated polyurethane aircraft exterior topcoat base
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

###### Formulated polyisocyanate polyurethane-topcoat hardener (`topcoat_hardener`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Formulated polyisocyanate polyurethane-topcoat hardener
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

###### Mixed-isomer xylenes coating solvent (`xylene`)

Only the exact actually supplied physical item at this process interface; collect measured net quantity and supplier inclusion/return records. Add missing actual constituents separately without double counting equipped supplier assemblies.

- Selected flow: Mixed-isomer xylenes coating solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

###### Alternating current (`electricity_coating`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different geography/voltage/mix, renewable contract or ground generator needs its own compatible exchange. Tianjin manufacture is a possible manufacturer example, not a declaration that every reporting site is Chinese. Meter installed-system test and external ground-power consumption once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

#### Outputs

##### Waste flows

###### Uncured polyurethane paint residual transferred for treatment (`waste_paint`)

Only actual uncured polyurethane topcoat residual transferred out for documented treatment, conditional on matching formulation. Weigh the separate wet residue and retain SDS/recipient, distinguish returned reusable paint and dry retained aircraft coating.

- Selected flow: Uncured polyurethane paint residual transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

###### Aqueous aircraft-exterior-cleaning wastewater transferred for treatment (`effluent`)

Only actual aqueous aircraft-exterior-cleaning wastewater transferred for treatment at this gate. Meter/measure net wastewater with actual density/state and recipient/contaminant records; not an elementary freshwater resource or unspecified water emission.

- Selected flow: Aqueous aircraft-exterior-cleaning wastewater transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

#### Outputs

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Only actual speciated CAS1330-20-7 mixed-xylene release from this coating process, immediate air unspecified. Do not map total VOC, occupational exposure or a single isomer. Integrate calibrated outlet concentration/flow and actual operating periods with detection limits; preserve abatement and measured conversion basis.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coating`
- Sources: `airbus-assembly`

### Process: Configured weighing and attributable acceptance (`acceptance`)

Include actual ground systems checks, engine/APU runs, taxi and any production acceptance flight attributable to this serial, with separate ground/flight records. Do not automatically allocate type-development, structural fatigue or certification campaigns to series-unit acceptance. Require actual calibrated complete-aircraft weighing and signed configuration corrections. No flight duration, fuel quantity or emissions is presumed.

#### Inputs

##### Product flows

###### Kerosene-type jet fuel (`jet_fuel`)

Only actual petroleum fossil Jet A-1 grade kerosene-type jet fuel, verified by original supply certificate/SDS and test logs. The public identity covers kerosene blends for flight, not a numerical Jet A-1 manufacturing intensity. Net metered supplies, returns, inventory and accepted retained unusable fuel are reconciled; distinguish consumed ground/production-flight fuel from retained usable fuel excluded from M. SAF/bio blends and alternative fuels require separate compatible identities and carbon-origin accounting; aviation gasoline is incompatible.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-assembly`; `faa-weight`; `faa-addendum`

###### Alternating current (`electricity_acceptance`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different geography/voltage/mix, renewable contract or ground generator needs its own compatible exchange. Tianjin manufacture is a possible manufacturer example, not a declaration that every reporting site is Chinese. Meter installed-system test and external ground-power consumption once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-assembly`; `faa-weight`; `faa-addendum`

#### Outputs

##### Product flows

###### Accepted complete single-aisle twin-turbofan civil passenger aeroplane (`finished_machine`)

One accepted complete aircraft with delivered customer cabin, installed twin turbofans and actual gear/systems/fluid state; net physical M follows cp_mass and independent mass_record_origin/mass_configuration. Output fixed1kg is the manufacturing reference, not one passenger-km or a catalogue aircraft.

- Selected flow: Accepted complete single-aisle twin-turbofan civil passenger aeroplane
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `airbus-assembly`; `faa-weight`; `faa-addendum`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`co2_air`)

Only attributable fossil CO2 actual release to immediate air with unspecified subcompartment. Retain ground-run and production-flight records separately; if a flight altitude establishes a specific subcompartment, use a separately compatible flow/card instead of this unspecified-air row. Use actual measured CO2 or measured fossil carbon balance with verified fuel composition/oxidation; exclude biogenic carbon and upstream emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-assembly`; `faa-weight`; `faa-addendum`

###### nitrogen monoxide (`no_air`)

Only actual separately measured NO CAS10102-43-9 at the ground engine/APU outlet, immediate air unspecified. Not NO2, N2O or NOx reported as NO2 equivalent; retain actual concentration, exhaust-flow and test-duration conversion. No mandatory NO amount inferred.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-assembly`; `faa-weight`; `faa-addendum`

###### nitrogen dioxide (`no2_air`)

Only actual separately measured NO2 CAS10102-44-0 at the ground engine/APU outlet, immediate air unspecified. NO/NOx-as-NO2/N2O cannot substitute; integrate actual calibrated exhaust measurement and period. Flight altitude-specific emissions need independently matching cards.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `airbus-assembly`; `faa-weight`; `faa-addendum`

### Process: Conditional delivery protection (`protection`)

Record actual removable protection separately from the accepted empty aircraft. Do not assume a whole-aircraft polyethylene wrap; reusable covers require their own measured use attribution. Ferry flight after the declared acceptance gate is excluded unless the gate explicitly includes it.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only actual non-adhesive, non-cellular, unreinforced and unlaminated PE-LD protective foil matching this physical identity. Weigh consumed net film and returns separately from M; no whole-aircraft wrapping is presumed.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_protection`
- Sources:

###### Alternating current (`electricity_protection`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different geography/voltage/mix, renewable contract or ground generator needs its own compatible exchange. Tianjin manufacture is a possible manufacturer example, not a declaration that every reporting site is Chinese. Meter installed-system test and external ground-power consumption once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_protection.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_protection`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | Avoid allocation with subdivision and actual serial/order/station metering. Allocate residual shared resources by demonstrated causal measured joining machine-time, actual identical coating area and recipe, or attributable test/ground-power time and load, retaining numerator/denominator and sensitivity. No equal-per-plane allocation across different airframes/cabins/propulsion or nominal aircraft mass. | `ghg-allocation` |
| `allocation_returns` | chips; waste_paint; effluent | Distinguish net supplier returns, reusable tools/protection, internally retained material and transferred waste. Measure actual recipient/treatment state; no automatic avoided-primary-metal or fuel/recycling credit. A genuine coproduct requires separate reviewed causal allocation and matching upstream boundary, not inferred from sale alone. | `ghg-allocation` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete aircraft empty net mass | controlled_acceptance_record | type/model/serial; configuration; delivered cabin and propulsion configuration; accepted net mass M; actual original calibrated platform/wheel/load-cell readings; support/tare/zero/environment/leveling and repeatability; equipment list; measured fuel/oil/fluid/temporary-ballast/test-instrument/protection corrections; signed delivered-state mass reconciliation | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted aircraft | actual manufacturing/acceptance period | declared final-assembly delivery gate | accepted net mass per unit | original calibrated physical weighing and signed configuration reconciliation |
| `cp_airframe` | airframe | Equipped airframe section joining | foreground_record | serial/order and BOM; accepted unit count; each physical identity, composition/property/unit; net issues/returns/inventory and contained supplier constituents; electricity site/voltage/mix/meter; measured component mass and any count conversion; SDS/water and waste recipient; actual ground/flight/test fuel, fossil share, species and medium/altitude/detection limits; causal shared driver and denominator; calibration and source coverage | Retain each section serial/interface and net received mass, supplier completion, rivet issues/returns and actual drilling chips; reconcile installed versus supplied-in-section constituents. | actual unit for each row | each serial order/test event | declared manufacture period | declared final-assembly plant and disclosed contractors | attributable exchange amount / accepted units | original supplier, weighing/meter, SDS, transfer, test and flight records |
| `cp_systems` | systems | Landing gear and aircraft systems integration | foreground_record | serial/order and BOM; accepted unit count; each physical identity, composition/property/unit; net issues/returns/inventory and contained supplier constituents; electricity site/voltage/mix/meter; measured component mass and any count conversion; SDS/water and waste recipient; actual ground/flight/test fuel, fossil share, species and medium/altitude/detection limits; causal shared driver and denominator; calibration and source coverage | Reconcile serialised modules and received/retained masses, included constituent scopes, actual fluid issues and returns, measured gas state and system tests. | actual unit for each row | each serial order/test event | declared manufacture period | declared final-assembly plant and disclosed contractors | attributable exchange amount / accepted units | original supplier, weighing/meter, SDS, transfer, test and flight records |
| `cp_propulsion` | propulsion | Turbofan and auxiliary-power installation | foreground_record | serial/order and BOM; accepted unit count; each physical identity, composition/property/unit; net issues/returns/inventory and contained supplier constituents; electricity site/voltage/mix/meter; measured component mass and any count conversion; SDS/water and waste recipient; actual ground/flight/test fuel, fossil share, species and medium/altitude/detection limits; causal shared driver and denominator; calibration and source coverage | Collect actual engine/nacelle/APU serials, aircraft suitability, supply completion, measured net component masses and actual synthetic-ester oil charge/returns. | actual unit for each row | each serial order/test event | declared manufacture period | declared final-assembly plant and disclosed contractors | attributable exchange amount / accepted units | original supplier, weighing/meter, SDS, transfer, test and flight records |
| `cp_cabin` | cabin | Complete passenger cabin fit-out | foreground_record | serial/order and BOM; accepted unit count; each physical identity, composition/property/unit; net issues/returns/inventory and contained supplier constituents; electricity site/voltage/mix/meter; measured component mass and any count conversion; SDS/water and waste recipient; actual ground/flight/test fuel, fossil share, species and medium/altitude/detection limits; causal shared driver and denominator; calibration and source coverage | Reconcile customer cabin BOM and supplier modules, actual fitted quantities and net masses, final layout revision and acceptance records. | actual unit for each row | each serial order/test event | declared manufacture period | declared final-assembly plant and disclosed contractors | attributable exchange amount / accepted units | original supplier, weighing/meter, SDS, transfer, test and flight records |
| `cp_coating` | coating | Conditional exterior cleaning and painting | foreground_record | serial/order and BOM; accepted unit count; each physical identity, composition/property/unit; net issues/returns/inventory and contained supplier constituents; electricity site/voltage/mix/meter; measured component mass and any count conversion; SDS/water and waste recipient; actual ground/flight/test fuel, fossil share, species and medium/altitude/detection limits; causal shared driver and denominator; calibration and source coverage | Collect separate coating-component/solvent/water issues, returns and retained coating mass; actual wastewater/uncured residue transfers and speciated measured outlet emissions. | actual unit for each row | each serial order/test event | declared manufacture period | declared final-assembly plant and disclosed contractors | attributable exchange amount / accepted units | original supplier, weighing/meter, SDS, transfer, test and flight records |
| `cp_acceptance` | acceptance | Configured weighing and attributable acceptance | foreground_record | serial/order and BOM; accepted unit count; each physical identity, composition/property/unit; net issues/returns/inventory and contained supplier constituents; electricity site/voltage/mix/meter; measured component mass and any count conversion; SDS/water and waste recipient; actual ground/flight/test fuel, fossil share, species and medium/altitude/detection limits; causal shared driver and denominator; calibration and source coverage | Collect serial-specific actual test/flight logs, metered fuel/net returns and fossil composition, emission species and environmental subcompartment, signed weighing/equipment/fluid corrections and accepted count. | actual unit for each row | each serial order/test event | declared manufacture period | declared final-assembly plant and disclosed contractors | attributable exchange amount / accepted units | original supplier, weighing/meter, SDS, transfer, test and flight records |
| `cp_protection` | protection | Conditional delivery protection | foreground_record | serial/order and BOM; accepted unit count; each physical identity, composition/property/unit; net issues/returns/inventory and contained supplier constituents; electricity site/voltage/mix/meter; measured component mass and any count conversion; SDS/water and waste recipient; actual ground/flight/test fuel, fossil share, species and medium/altitude/detection limits; causal shared driver and denominator; calibration and source coverage | Weigh actual separately consumed protective film and returns; retain release configuration and gate. | actual unit for each row | each serial order/test event | declared manufacture period | declared final-assembly plant and disclosed contractors | attributable exchange amount / accepted units | original supplier, weighing/meter, SDS, transfer, test and flight records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Calculate actual attributable net exchange per accepted serial unit q_item after measured returns and stock changes and justified shared attribution, then divide by the same actual M. Compatible serial configuration aggregation uses total attributable exchanges divided by summed measured accepted net masses, with every serial retained. Separate airframe, engine, cabin, paint, gate and test routes that differ materially. Metered volume inputs require actual state/density to get kg; preserve original property and conversion uncertainty. Missing M, density, fossil share or measurement stays a gap.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_origin and mass_configuration with real calibrated complete-aircraft readings and measured corrections. Missing actual weighing method, equipment list or unreconciled cabin/fluid/propulsion state blocks quantitative completion. | original serial weighing/calibration/equipment/fluid reconciliation |
| `quality_bom` | all processes | Reconcile equipped sections/wings/tails, gear, systems, turbine engine versus nacelle/pylon/APU inclusions, complete customer cabin and retained fluids. Actual omitted resources/components are added atomically before any completed dataset claim; supplier and FAL manufacture are not double counted. | current drawing/BOM/serial supplier completion and test records |
| `quality_route` | turbofan; apu; jet_fuel; co2_air; no_air; no2_air; xylene_air | Verify aviation turbofan route and completed supply state, distinguish APU and outside ground engines. Retain actual Jet A-1 fuel grade/fossil share and measured air species/subcompartment; altitude-specific flight emissions need matching identities. Total VOC/NOx or piston/wind-turbine identity cannot substitute. | direct public flow fields, actual supplier SDS and measured test records |
| `quality_evidence` | dataset | Disclose actual site/period/gate, source lineage and coverage, conditional absence, uncertainty, allocation, all identity/quantity/upstream gaps and empirical QA basis. Derive ranges from actual calibrated records or independently verified compatible evidence, never invent mass, yield, life or emission thresholds. This methodology contains no factory observations or scientific approval. | original evidence and gap register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine; cp_mass | Verify single-aisle twin-turbofan complete civil passenger configuration, original unladen category above2000kg, positive actual empty net M and fixed1kg output. Reject partial prototype cabin, catalogue/MTOW/payload mass and unsupported density corrections. | `faa-weight` |
| `validate_rows` | all inventory rows | Every exchange has one actual chemical/physical identity, direction/type, compatible public reference property/unit, shared M and linked legal lowercase protocol/rule. Confirm Chinese official names, source, route and medium. Unresolved exact identities remain declared review gaps; an automated pass cannot establish their suitability. |  |
| `validate_scope_balance` | all processes | Reconcile net stocks, complete supplier inclusions, installed dry material and retained fluids, waste and actual ground/flight/test coverage. Unmeasured quantities, missing actual constituents/acceptance records or upstream datasets prevent an unqualified completed cradle-to-gate claim. | `ghg-allocation` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured single-aisle civil passenger jet foreground final assembly |
| downstream_use | secondary_dataset; background_dataset after qualified review and explicit upstream linkage |
| allowed_use | Compatible airframe, propulsion, cabin, empty-M, supplier completion and gate manufacturing supply models |
| excluded_use | Whole CPC49623, other aircraft power/family, incomplete prototype, flight transport, equal-mass passenger-km equivalence or unsupported full lifecycle |
| required_metadata | producer/type/model and serial; current drawing/BOM and complete passenger cabin layout; twin high-bypass aircraft turbofan route, engine/nacelle/APU serials and supplier inclusion; equipped airframe section/wing/tail interfaces, landing gear and fitted systems; actual paint/SDS/abatement; actual accepted configured empty net M kg and cp_mass, original calibrated complete-aircraft weighing and signed measured configuration/fluid corrections; retain required installed equipment and declared permanent ballast, operating oil/hydraulic fluid and documented unusable fuel; exclude usable fuel, crew/passengers, cargo, temporary ballast/test instruments, packaging and loose spares; original actual unladen category above2000kg; actual site/period, test ground/flight subcompartment, outsourcing and delivery gate |
| required_quality_disclosure | Actual weighing/quantity/calibration, configuration/fluid reconciliation, supplier inclusions, test medium and fossil share, empirical QA and identity/upstream gaps |
| update_trigger | Aircraft/engine/cabin/section architecture, supplier boundary, paint/fluid/test/flight route, actual M origin, current weighing procedure, gate/site/period change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `airbus-production` | literature | [Airbus Production](https://www.airbus.com/en/products-services/commercial-aircraft/the-life-cycle-of-an-aircraft/production) | Sourcing/manufacture and FAL paragraphs: supplier-equipped major sections, cabins/seats/engines and single-aisle sites. Manufacturer process example only; no capacity, supplier-share, per-plane intensity or worldwide site assumption adopted. |
| `airbus-assembly` | literature | [Airbus First A321XLR development aircraft undergoes final assembly,2021-12](https://www.airbus.com/en/newsroom/news/2021-12-first-a321xlr-development-aircraft-undergoes-final-assembly) | Coming together/station/next-steps paragraphs: section joining, wings/gear/tails/systems/cabin and engines/nacelles, painting and ground/flight sequence. Historical development aircraft has partial cabin and special FTI. No rivet counts, XLR tank capacity, fixed cycle time, compulsory chemistry or series certification campaign adopted. Actual series records are required. |
| `faa-weight` | official_guidance | [FAA-H-8083-1B Aircraft Weight and Balance Handbook,2016](https://www.faa.gov/sites/faa.gov/files/2023-09/Weight_Balance_Handbook.pdf) | Printed3-2–3-5/PDF34–37: calibrated platform/ramp-wheel/load-cell weighing, actual equipment configuration, unusable versus usable fuel and oil/other fluid state. Historical physical guidance considered with2025 addendum and current manufacturer procedure. No example density, scale capacity, calibration interval or universal certification regime imposed. |
| `faa-addendum` | official_guidance | [FAA Weight and Balance Handbook Addendum,2025-10-20](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/Weight_Balance_HB_Addendum_(MOSAIC).pdf) | PDF/printed1: correction of chapter2 manufacturer-furnished empty-weight/EWCG record. Not evidence of actual factory weighing or light-sport applicability to this civil jet. |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | Printed63/PDF65 tables9.1–9.2: historical avoid/subdivide and causal allocation hierarchy only; actual foreground measured driver is required, no plane factor adopted. |
