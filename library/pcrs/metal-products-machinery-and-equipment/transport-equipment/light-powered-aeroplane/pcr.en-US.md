---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.light-powered-aeroplane
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Light metallic piston-propeller aeroplane manufacturing

## 1. Scope and Applicability

Manufacture of a new complete manned fixed-wing single spark-ignition reciprocating piston-propeller aeroplane with sheet-aluminium wing and metallic fuselage structure, including declared steel-tube portions, actual cut/form/drill/rivet and qualified joining, supplied powerplant integration, fixed tricycle landing gear, flight-control/interior/electrical installation and bounded manufacturing acceptance. Riveting and tube joining follow actual released drawings; no particular alloy or joining technique is imposed on every product. Classification applicability requires independently established unladen weight not exceeding2000kg. This narrower route does not cover every aircraft in CPC49622.

Exclude unmanned aircraft, helicopters/rotorcraft, unpowered or powered gliders, turbine/turboshaft/turbofan propulsion, electric/hybrid propulsion, primarily composite airframes, kits, separately sold engines/parts/propellers, repairs/overhauls and air transport service. Exclude training/commercial flight, passenger-km, routine maintenance, airports and end of life. Actual factory acceptance flight belongs to declared manufacturing endpoints only, with measured attributable support inputs and release compartments; no lifetime or complete cradle-to-gate claim follows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.light-powered-aeroplane |
| classification_refs | CPC:3.0:49622; narrower |
| covered_products | Manufacture of a new complete manned fixed-wing single spark-ignition reciprocating piston-propeller aeroplane with sheet-aluminium wing and metallic fuselage structure, including declared steel-tube portions, actual cut/form/drill/rivet and qualified joining, supplied powerplant integration, fixed tricycle landing gear, flight-control/interior/electrical installation and bounded manufacturing acceptance. Riveting and tube joining follow actual released drawings; no particular alloy or joining technique is imposed on every product. Classification applicability requires independently established unladen weight not exceeding2000kg. This narrower route does not cover every aircraft in CPC49622. |
| excluded_products | Exclude unmanned aircraft, helicopters/rotorcraft, unpowered or powered gliders, turbine/turboshaft/turbofan propulsion, electric/hybrid propulsion, primarily composite airframes, kits, separately sold engines/parts/propellers, repairs/overhauls and air transport service. Exclude training/commercial flight, passenger-km, routine maintenance, airports and end of life. Actual factory acceptance flight belongs to declared manufacturing endpoints only, with measured attributable support inputs and release compartments; no lifetime or complete cradle-to-gate claim follows. |
| representative_product | One complete accepted metallic fixed-wing piston-propeller aeroplane, actual installed fit-list. Archived P92 Eaglet is a physical route case, not a required model or current approval. |
| production_route | Metallic airframe fabrication and joining; Surface treatment and coating; Powerplant, landing gear and flight-system installation; Bounded factory tests, weighing and acceptance |
| market_state | Complete accepted installed aircraft, technical lubricant/coolant/hydraulic fluid/electrolyte contained once as declared; all fuel, persons/baggage, detached spares/packaging/test fixtures excluded from M. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of the complete declared manned metallic piston aeroplane. |
| How much | 1kg accepted net manufacturing output from actual measured M kg per same complete unit. |
| How well | Actual released design/configuration and current applicable aircraft-specific conformity/acceptance records; no generic marketing performance threshold. |
| How long or cycle | One documented manufacturing/acceptance cycle, not lifetime aircraft operation; no life invented. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Aeroplanes and other powered aircraft, , except unmanned aircraft, of an unladen weight not exceeding 2000 kg `48b19d5d-42e6-401e-acda-6a641309a090` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | aircraft model/revision/serial and released equipment list; manned fixed-wing piston route; structure grades/tempers/thickness and joining work orders; supplied engine/propeller/gear/control/avionics fit-list and contained prefill; aircraft-specific approved fuel/fluids and actual trial plan; manufacturing sites/periods/accepted count/rework; current calibrated complete-aircraft weighing originals/tare/configuration and measured excluded-fuel/stock corrections; independent installed-component mass reconciliation and uncertainty; net M kg distinct from basic empty weight/MTOW and independently documented CPC unladen state<=2000kg; purchased utility/transport/treatment coverage and gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_energy | frame_power; coat_power; system_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual electrical energy; kWh multiplied by3.6MJ/kWh, no rated-power-times-assumed-time substitution. |
| scrap_volume | al_scrap | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Measure loose bulk volume including voids for this waste reference property. Keep independent scrap kg for metal balance; no100kg/m3 default conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified received metallic stock and supplied finished aircraft engine/propeller/gear/system modules at actual fabrication and assembly sites. |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC:3.0:49622; narrower |
| recursive_input_rule | Purchased complete airframe is an upstream package, only actual added installation/acceptance foreground. Never recopy stock fabrication into an already fabricated package. |
| upstream_dataset_requirement | Actual compatible stock/engine/propeller/system, utility/transport/treatment modules with supplied configuration, property and prefill scope declared before extending beyond foreground. |
| disclosure | Make-or-buy start/sites/period, actual subcontracted work/testing, package contents, utilities/support movements, net-state corrections, exclusions and upstream gaps. Foreground alone is not complete cradle-to-gate. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_package | systems | Supplied engine includes only documented accessories/reduction gear/prefill. Independently supplied propeller, mount, cooling or exhaust parts and fluids get separate rows; contained items not counted twice. Current actual in-house component manufacture must expand physical stocks/work rather than pretending bought kg. | tecnam-eaglet |
| boundary_trials | acceptance | Separate factory ground run/acceptance flight from customer training/operation; record endpoints/duration/fuel and actual ground cart/tug/compressed-air/electric support. Ground equipment is not installed aircraft propulsion. Test loads and returned fuel stock do not enter net M. |  |
| boundary_fuel | finished_machine | All fuel is excluded from this manufacturing net M, including unusable/residual fuel. Aircraft basic empty-weight records may include residual fuel and differ on oil. Use signed measured state-specific corrections and retain both original aviation value and manufacturing M, never change an airworthiness record. | faa-weight-2016 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `airframe` | Metallic airframe fabrication and joining | required | Actual cut/form/drill/rivet/join and inspection to released work orders; supplier-complete structures replace contained manufacturing. | foreground_manufacturing | 1kg accepted output; conditional exchanges only if actually used |
| `coat` | Surface treatment and coating | conditional | Only actual specified pretreatment/primer/finish and curing; exact chemicals separately collected. | foreground_manufacturing | 1kg accepted output; conditional exchanges only if actually used |
| `systems` | Powerplant, landing gear and flight-system installation | required | Actual purchased aircraft piston engine/propeller, fixed gear and complete declared controls/interior/electrical fit-list; record component containment. | foreground_manufacturing | 1kg accepted output; conditional exchanges only if actually used |
| `acceptance` | Bounded factory tests, weighing and acceptance | required | Actual configuration-specific inspections/function/leak/ground-run checks and acceptance flight if performed, rework and measured net-mass acceptance. | foreground_manufacturing | 1kg accepted output; conditional exchanges only if actually used |

### Process: Metallic airframe fabrication and joining (`airframe`)

Actual cut/form/drill/rivet/join and inspection to released work orders; supplier-complete structures replace contained manufacturing.

#### Inputs

##### Product flows

###### aluminium sheet (`sheet`)

Actual alloy/temper/cladding/thickness>0.2mm certified for released structure; issued minus returned mass, cutting/forming/drilling rework and retained stock separated.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_airframe`
- Sources:

###### Aircraft chromium-molybdenum steel structural tube (`steel_tube`)

Actual tube grade/heat, dimensions and joining procedure for fuselage or engine mount; purchased welded frame replaces contained stock/work.

- Selected flow: Aircraft chromium-molybdenum steel structural tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_airframe`
- Sources:

###### Solid aluminium-alloy aircraft rivet (`solid_rivet`)

Actual alloy/head/diameter/length and traceable issued/returned kg; count retained independently; released drawings determine riveting, not a universal supplier requirement.

- Selected flow: Solid aluminium-alloy aircraft rivet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_airframe`
- Sources:

###### Alternating current (`frame_power`)

Actual below1kV grid-user cutting/forming/drilling/joining/jigging demand; compressed-air generation electricity included once. Actual tube welding consumables/gas get separate chemical rows when performed.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_airframe`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Aluminium scrap, new, loose (`al_scrap`)

Actual loose uncompacted new offcuts leaving plant, collected bulk volume m3 including voids; calibrated container dimensions/fill and original observations per accepted unit. Independently weigh scrap kg for metal balance; do not apply public default bulk density100kg/m3.

- Selected flow: Aluminium scrap, new, loose `0f5a6a98-22cc-4549-af43-6ed44014e5de`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_airframe`
- Sources:

##### Elementary flows

###### Particulate matter, particle size unspecified (`particle_air`)

Only actual post-control particle release to immediate air unspecified submedium/size, with sampling/exhaust flow/time; captured chips/dust are waste, not emission. Measured size fractions require exact separate identities.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_airframe.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_airframe`
- Sources:

### Process: Surface treatment and coating (`coat`)

Only actual specified pretreatment/primer/finish and curing; exact chemicals separately collected.

#### Inputs

##### Product flows

###### Formulated epoxy aircraft corrosion-protection primer (`epoxy_primer`)

Conditional actual formulation/SDS wet kg/solids and retained cure film; chromate content cannot be presumed. Other actual pretreatment/finish requires separate chemical rows.

- Selected flow: Formulated epoxy aircraft corrosion-protection primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

###### Tap water (`coat_water`)

Conditional actual municipal product-water cleaning makeup; recycle transfer separate; wastewater chemistry/destination separately collected if generated.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

###### Alternating current (`coat_power`)

Actual below1kV cleaning/coating/ventilation/electric curing demand; other actually used curing fuel separately recorded.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste paint (`paint_residue`)

Actual wet primer overspray/residue sent to declared treatment, not captured dust, cleaning sludge or direct air emission.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Only actual CAS1330-20-7 xylene released after controls to immediate unspecified air. TotalVOC and solvent issue are not this exchange.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

### Process: Powerplant, landing gear and flight-system installation (`systems`)

Actual purchased aircraft piston engine/propeller, fixed gear and complete declared controls/interior/electrical fit-list; record component containment.

#### Inputs

##### Product flows

###### Spark-ignition reciprocating or rotary internal combustion piston engines for aircraft (`piston_engine`)

One actual supplied reciprocating spark-ignition aircraft propulsion engine, installed supplied-engine kg, model/serial and contained reduction gear/accessories/prefill declared. Count only traceability. Independent engine mass reconciles complete aircraft M. No excluded generic diesel identity.

- Selected flow: Spark-ignition reciprocating or rotary internal combustion piston engines for aircraft `c2f3c29e-d5cd-4267-a518-74b0131a7914`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Finished fixed-pitch wood-composite aircraft propeller assembly (`propeller`)

One released supplied model kg including declared hub; separately supplied spinner and fasteners not automatically contained. No marine bronze propeller substitute.

- Selected flow: Finished fixed-pitch wood-composite aircraft propeller assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Finished fixed tricycle aircraft landing-gear assembly (`landing_gear`)

Actual spring-steel main gear and nose-gear package kg, supplier fit-list identifies included wheels/tyres/brakes; separately supplied items not counted twice.

- Selected flow: Finished fixed tricycle aircraft landing-gear assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Finished aircraft hydraulic disc-brake unit (`brake_unit`)

Conditional separately supplied one brake unit kg outside gear package; actual hydraulic fluid chemistry/charge separately when not contained.

- Selected flow: Finished aircraft hydraulic disc-brake unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Finished PMMA aircraft windshield (`windshield`)

Conditional actual shaped PMMA one windshield kg and drawing/thickness/traceable supplied certification; polycarbonate or glass is a different card.

- Selected flow: Finished PMMA aircraft windshield
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Finished upholstered aircraft seat with installed restraint (`seat`)

One actual supplied seat/restraint model kg; configuration and seat count recorded independently, no universal two/four seat assumption.

- Selected flow: Finished upholstered aircraft seat with installed restraint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Finished aircraft VHF communication radio (`radio`)

Conditional actual one installed VHF radio model kg; navigation receiver/EFIS/antenna separately supplied are separate physical cards.

- Selected flow: Finished aircraft VHF communication radio
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships (`harness`)

One actual supplied finished aircraft auxiliary wiring harness kg with connector/termination content and insulation specification; contained engine ignition wires not counted again.

- Selected flow: Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Finished lead-acid aircraft starter battery (`battery`)

Conditional actual model installed supplied kg including electrolyte once, voltage/capacity/dry-wet state recorded.

- Selected flow: Finished lead-acid aircraft starter battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Formulated aircraft piston-engine lubricating oil (`engine_oil`)

One actual approved formulation added beyond supplier prefill, issued/returned/removed/retained kg separately; no universal oil grade/amount.

- Selected flow: Formulated aircraft piston-engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Formulated ethylene-glycol aircraft-engine coolant (`coolant`)

Conditional actual liquid-cooled engine requiring this exact formulation/concentration, added beyond supplier-prefilled kg; air-cooled configurations not charged by default.

- Selected flow: Formulated ethylene-glycol aircraft-engine coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

###### Alternating current (`system_power`)

Actual below1kV installation, alignment, controls rigging, leak and electrical function testing electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_systems`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Bounded factory tests, weighing and acceptance (`acceptance`)

Actual configuration-specific inspections/function/leak/ground-run checks and acceptance flight if performed, rework and measured net-mass acceptance.

#### Inputs

##### Product flows

###### Aviation gasoline (`test_gasoline`)

Conditional actual approved aviation-gasoline grade used for bounded factory engine ground run and acceptance flight; certificate/SDS lead content and issue-return-retained measured. Automotive gasoline is not this row. No 100LL mandate. Fuel delivered as operational stock excluded from M, not counted consumed.

- Selected flow: Aviation gasoline `60324705-7a75-4213-82e6-30e7b9a24bc9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### Alternating current (`test_power`)

Actual below1kV hangar test equipment/weighing/charging demand; purchased aircraft fuel is separate from grid electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`film`)

Conditional actual noncellular nonadhesive protective film kg outside M; actual crate/pallet gets separate material cards.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Aeroplanes and other powered aircraft, , except unmanned aircraft, of an unladen weight not exceeding 2000 kg (`finished_machine`)

1kg share of complete accepted manned fixed-wing piston-propeller metallic aircraft configuration with corrected measured net M, permanent technical fluids once, all fuel excluded; classification unladen record independent.

- Selected flow: Aeroplanes and other powered aircraft, , except unmanned aircraft, of an unladen weight not exceeding 2000 kg `48b19d5d-42e6-401e-acda-6a641309a090`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Used lubricating oil (`used_oil`)

Conditional actual segregated spent mineral lubricating oil from factory testing sent to treatment, no coolant/solvent mixture. Synthetic oil uses matching different identity.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Only actual fossil CO2 from measured test fuel carbon balance including recovered/unburned carbon and uncertainty or measured species; immediate unspecified air release. No assumed generic combustion factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### nitrogen monoxide (`no_air`)

Only individually measured NO CAS10102-43-9 immediate unspecified air from actual bounded test; NO2/N2O/totalNOx not converted without species evidence. Acceptance-flight altitude/compartment needs compatible separate identity if outside unspecified-air scope.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | Prefer actual configuration work orders and metered issue/return/test attribution. Match reporting accepted counts to complete output; include actual reject/rework burdens, no dilution by sales or differing configurations. |  |
| allocation_shared | shared operations | First separate processes. Where inseparable, use actual causal machine occupancy, joint length/work time, conditioned surface and test/support energy as appropriate, reconcile common meter totals, record driver units and compare plausible alternatives. No unmeasured equal-per-aircraft or mass share for fixed avionics testing. |  |
| allocation_scrap | waste | No automatic avoided virgin aluminium, recyclable material or returned fuel credit. Keep internal transfers, outgoing wastes, treatment and real co-products distinct. Economic allocation only for documented genuine co-products when causal physical basis unavailable, retaining actual price period and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | accepted complete output | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | every accepted aircraft | matched manufacture/acceptance period | actual acceptance/weighing hangar | accepted net mass per unit | current aircraft-specific method; calibrated all-support scale readings/tare; measured fuel-state corrections and fit-list |
| cp_airframe | airframe | independent atomic exchanges | foreground_record | grade/temper/heat; sheet/tube/rivet issues and returns; cutting/forming/joining work orders; metered kWh; loose scrap measured bulk m3 and independent kg; actual exhaust sampling | Record each actual exchange independently by supplier issue/return, calibrated installed supplied component mass, utility metering or sampled species with measured exhaust flow/time. For al_scrap measure loose bulk m3 including voids, independently weigh kg for balance. Record aircraft/configuration work orders, accepted count, stock/rework and destination. | kg; MJ; m3 | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | certificate/SDS, metering/sampling uncertainty, issue-return-stock and count closure |
| cp_coat | coat | independent atomic exchanges | foreground_record | formulation/SDS/solids; wet primer issues/returns/retained film; product water makeup; energy; separate residues and actual sampled species | Record each actual exchange independently by supplier issue/return, calibrated installed supplied component mass, utility metering or sampled species with measured exhaust flow/time. For al_scrap measure loose bulk m3 including voids, independently weigh kg for balance. Record aircraft/configuration work orders, accepted count, stock/rework and destination. | kg; MJ; m3 | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | certificate/SDS, metering/sampling uncertainty, issue-return-stock and count closure |
| cp_systems | systems | independent atomic exchanges | foreground_record | supplied engine/propeller/gear/control/seat/avionics/harness model/serial; installed supplied kg; contained reduction gear/accessories/fluids; separately added oil/coolant; installation electricity | Record each actual exchange independently by supplier issue/return, calibrated installed supplied component mass, utility metering or sampled species with measured exhaust flow/time. For al_scrap measure loose bulk m3 including voids, independently weigh kg for balance. Record aircraft/configuration work orders, accepted count, stock/rework and destination. | kg; MJ; m3 | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | certificate/SDS, metering/sampling uncertainty, issue-return-stock and count closure |
| cp_acceptance | acceptance | independent atomic exchanges | foreground_record | aircraft serial/configuration; current released ground/flight test endpoints/time; fuel certificate/lead and metered issues/returns/retained stocks; measured species/compartment; calibrated weighing/tare/net corrections and independent component mass balance | Record each actual exchange independently by supplier issue/return, calibrated installed supplied component mass, utility metering or sampled species with measured exhaust flow/time. For al_scrap measure loose bulk m3 including voids, independently weigh kg for balance. Record aircraft/configuration work orders, accepted count, stock/rework and destination. | kg; MJ; m3 | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | certificate/SDS, metering/sampling uncertainty, issue-return-stock and count closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | sheet; steel_tube; solid_rivet; frame_power; al_scrap; particle_air; epoxy_primer; coat_water; coat_power; paint_residue; xylene_air; piston_engine; propeller; landing_gear; brake_unit; windshield; seat; radio; harness; battery; engine_oil; coolant; system_power; test_gasoline; test_power; used_oil; fossil_co2_air; no_air; film | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is actual attributed exchange after measured returns/stock/recovery and rework divided by matched accepted unit count. Preserve kg, MJ or m3 numerator: m3/kg for loose scrap, MJ/kg for electricity. Engine q_item is installed supplied-engine kg, not Item(s). Any count/volume conversion needs actual same-item mass/geometry/state evidence and uncertainty. Do not use catalogue aircraft/engine mass, standard fuel density or MTOW.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | Use current applicable manufacturer weighing procedure, complete equipment list and calibrated scales at all actual aircraft weighing points, indoors without wind, with original readings/tare, level/configuration, date/calibration/uncertainty and repeat closure. Independently measured installed airframe/engine/propeller/gear/system/retained-fluid masses reconcile net M. Missing physical originals block dataset use; FAA2016 illustrates method only, not current authorization or a prescribed calibration interval. | faa-weight-2016; current original weighing records |
| quality_net | finished_machine | Keep measured as-weighed condition and signed physical correction schedule. Remove all actual fuel including unusable/residual fuel, people/baggage, temporary fixtures, detached spares and packaging. Include installed permanent ballast and declared retained technical lubricant/coolant/hydraulic fluid/electrolyte once. Trace residual-fuel corrections to current aircraft-specific draining/measurement records; never zero them by assumption or use FAA nominal density. Preserve original basic empty-weight/CG record separately and bridge states; no net M invented from BOM or catalogue estimates. | faa-weight-2016; signed fuel/stock corrections and supplier containment |
| quality_classification | finished_machine | Independently document CPC/HS unladen condition for the actual manned aircraft and <=2000kg applicability, with original classification basis and state bridge to manufacturing M. MTOW, design payload or a historical brochure is not evidence of actual unladen mass. Reject outside-scope aircraft rather than automatically treating manufacturing M as classification unladen weight. | actual classification/configuration records; public class49622 flow |
| quality_identity | all flows | One exact grade/model/chemical/state per exchange. Installed propulsion is aviation spark-ignition reciprocating engine class43131, not class43110 excluding aircraft nor road diesel/turbine/ground-cart engine. Supplied engine kg and complete M independently reconcile; contained prefill not also external oil. Respect actual property reference, including loose-scrap Volume/m3 without public default density. | actual supplier certificates/fit-list and direct public identity/property |
| quality_release | elementary | Collect only physically evidenced actual release with chemical/CAS, immediate medium/submedium, post-control species concentration/flow/time or actual fuel carbon balance. PM size unspecified is not captured dust; xylene not totalVOC; fossil CO2 not biogenic; NO not NO2/N2O/NOx. Separately characterise other actual combustion species and actual lead compounds if leaded fuel is used; no unavoidable lead species/factor assumed. Flight emissions need actual altitude/compartment applicability, not generic ground-air substitution. | original species sampling, actual fuel/SDS/carbon and control records |
| quality_acceptance | acceptance | Keep current applicable released structural/joint conformity, flight-control travel/rigging, gear/brake, fuel/oil/cooling leak, electrical/avionics and actual ground/flight acceptance results including rework. Only verified actual aircraft approvals may be claimed; historical brochure equipment/power/speed/capacity/warranty does not set method thresholds. | current aircraft-specific released plans/results |
| quality_completeness | dataset | Reconcile complete released installed fit-list with stock/supplier/utility totals. Add actual separate spars/extrusions, firewall, cowling/fairings, weld filler/shielding gas, fasteners/sealants, controls/linkages, tanks/pumps/hoses, coolers/exhaust, wheels/tyres, restraints, switches/antennas/instruments, coatings, treatment wastewater and packaging when not contained. Each added physical/chemical exchange gets its own card and protocol; no pooled inputs. State measured/calculated/estimated/missing/excluded/not-applicable status, uncertainty, supplier upstream/support/transport/treatment gaps. | complete fit-list and independently closed stock/meter/package records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Exactly1kg complete accepted declared aircraft, measured cp_mass net M and independent component mass balance, same configuration and fuel correction originals. Formula consistency is not physical weighing or methodology approval. |  |
| validation_basis | inventory | All rows link valid lowercase IDs/protocols and normalize_mass; match accepted count/period/numerator units. Reject mixed configurations, invalid quantity enum, Mass/Volume/Energy substitution or catalogue conversion. |  |
| validation_scope | dataset | Require actual independent classification unladen condition<=2000kg, aircraft engine route, bounded manufacturing support/trials and disclosed identities/upstream gaps. No transport function or cradle-to-gate completeness claim from foreground alone. |  |
| validation_release | elementary | Verify chemical/CAS/medium/time and actual conditional quantity; purchased water is product, outgoing wastewater treatment is waste, resource abstraction and direct emissions are separate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of a new complete manned fixed-wing single spark-ignition reciprocating piston-propeller aeroplane with sheet-aluminium wing and metallic fuselage structure, including declared steel-tube portions, actual cut/form/drill/rivet and qualified joining, supplied powerplant integration, fixed tricycle landing gear, flight-control/interior/electrical installation and bounded manufacturing acceptance. Riveting and tube joining follow actual released drawings; no particular alloy or joining technique is imposed on every product. Classification applicability requires independently established unladen weight not exceeding2000kg. This narrower route does not cover every aircraft in CPC49622. |
| excluded_use | Exclude unmanned aircraft, helicopters/rotorcraft, unpowered or powered gliders, turbine/turboshaft/turbofan propulsion, electric/hybrid propulsion, primarily composite airframes, kits, separately sold engines/parts/propellers, repairs/overhauls and air transport service. Exclude training/commercial flight, passenger-km, routine maintenance, airports and end of life. Actual factory acceptance flight belongs to declared manufacturing endpoints only, with measured attributable support inputs and release compartments; no lifetime or complete cradle-to-gate claim follows. |
| required_metadata | aircraft model/revision/serial and released equipment list; manned fixed-wing piston route; structure grades/tempers/thickness and joining work orders; supplied engine/propeller/gear/control/avionics fit-list and contained prefill; aircraft-specific approved fuel/fluids and actual trial plan; manufacturing sites/periods/accepted count/rework; current calibrated complete-aircraft weighing originals/tare/configuration and measured excluded-fuel/stock corrections; independent installed-component mass reconciliation and uncertainty; net M kg distinct from basic empty weight/MTOW and independently documented CPC unladen state<=2000kg; purchased utility/transport/treatment coverage and gaps |
| required_quality_disclosure | Exact aircraft fit-list/engine route/supplier prefill and independent classification state; actual measured net M/raw corrections and component mass/uncertainty; actual period/site/count/rework/test endpoints; causal allocation/sensitivity; missing identities/physical records and upstream/treatment/support coverage; scientific review pending. |
| update_trigger | Structure/joining/finish or propulsion/gear/avionics configuration, supplier/make-or-buy/site/period, fluid/fuel chemistry, trial scope, weighing/delivery state, classification basis and new identity/evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| tecnam-eaglet | handbook | Tecnam, P92 Eaglet, undated archived manufacturer brochure, PDFp3 printed148 Construction/Engine and Propeller/Landing Gear/Interior; p4 equipment. https://www.tecnamair.com/wp-content/uploads/2015/05/P92-Eaglet.pdf | Historical metallic/mixed tube-and-sheet piston aircraft route only. No current approval, compulsory model, output weight, performance, manufacturing quantities, warranty life or every join technique adopted. Actual released drawings and foreground records govern current route. |
| faa-weight-2016 | official_guidance | FAA, Aircraft Weight and Balance Handbook FAA-H-8083-1B2016, ch3 printed3-3–3-6 (PDF35–38), preparation, equipment/fuel/fluid and weighing/tare. https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-1.pdf | Historical weighing-method and empty-weight state illustration only. Current actual manufacturer procedure/calibration and measured corrections required. No handbook nominal fluid density, example weight, calibration interval or present legal requirement adopted; aviation empty weight not automatically CPC unladen or net M. |
