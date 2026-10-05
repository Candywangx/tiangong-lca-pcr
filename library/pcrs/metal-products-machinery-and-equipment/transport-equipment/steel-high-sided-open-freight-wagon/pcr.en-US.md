---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.steel-high-sided-open-freight-wagon
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Steel high-sided open railway freight wagon manufacture

## 1. Scope and Applicability

This candidate PCR governs manufacture of a new complete non-self-propelled steel high-sided open railway freight wagon with integral flat floor, fixed end walls, high side walls and side doors, with declared unpowered bogies, brakes and couplings. The Eanoss manufacturer original establishes this substantive body boundary. It is narrower than CPC49533 and does not cover that entire classification leaf. Exclude boxcars, flatcars, hopper wagons and discharge-gate designs, tank/refrigerated wagons, other body architectures, locomotives, passenger vehicles, bare bodies/bogies, rebuilding, repair and freight transport services.

Foreground starts at actual received specified stock and completed supplier modules and ends at accepted configured empty wagon at the declared plant gate. Manufacturing acceptance belongs here only for attributable actual tests; operational loading/unloading/haulage, cargo yield, track infrastructure and life-cycle service are outside. No empirical mass, recipe, process intensity or life is prescribed. Scientific review remains pending. Sources: `tatra-model`, `tatra-factory`, `greenbrier-2022`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.steel-high-sided-open-freight-wagon |
| classification_refs | CPC3.0 49533; narrower context, no accepted mapping asserted |
| covered_products | New complete steel high-sided open freight wagon, integral flat floor/fixed ends/side doors and unpowered bogies |
| excluded_products | Other freight body architectures, powered/passenger vehicles, independent components, reconstruction and service |
| representative_product | One serial-linked empty accepted high-sided open wagon; manufacturer Eanoss architectural example only |
| production_route | Actual cut/form/weld underframe and body; supplier running-gear integration; conditional coating; side-door outfitting; empty-wagon acceptance |
| market_state | Complete configured empty accepted wagon with retained lubricant, without cargo, test loads, loose spares or protection |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a specification-conforming complete high-sided open freight wagon |
| How much | 1 kg accepted net empty wagon output; divide per-unit manufacturing records by actual M |
| How well | Meet actual drawing, body/door, running-gear, brake/coupling and release acceptance criteria. Equal mass does not imply equal payload, strength, loading volume or transport service. Manufacturer model capacities and compliance claims are not imposed. |
| How long or cycle | One manufacture/acceptance cycle; no operational lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete unpowered steel high-sided open railway freight wagon |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | producer/model, serial and drawing/BOM revision; high-sided open body, integral flat floor, fixed ends, side doors and locking/access fittings; steel grades and supplier completion; gauge, bogie/axle/wheelset arrangement, suspension, bearings, brakes and couplings; coating chemistry and actual heater/blasting route; complete empty net M kg and cp_mass, calibrated rail/wheel weighing and signed configuration corrections; retained bearing lubricant; exclude cargo, test loads, personnel, fixtures, packaging and loose spares; actual site/period and gate, supplier inclusions, conditional absence and outsourcing |

M includes the actual integral underframe, floor, high sides/fixed ends, side doors/locks, bogies/wheelsets, suspension/brake/coupling/access fittings, coating and retained bearing lubricant. Cargo/payload, temporary test weights, people, fixtures, removable wrap and loose spares are excluded. The manufacturer separately reports tare, loaded weight and capacity: catalogue tare is a configuration example, never the measured accepted M. Source: `tatra-model`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_origin` | cp_mass | Mass | kg | Require original serial-linked actual empty-wagon calibrated rail weighing or wheel-load measurement, calibration/instrument, all wheels/supports, tare and static procedure. Sequential wheel measurements require checked support coverage and repeatability. Reconcile actual detached integral parts and temporary loads with measured corrections and signed BOM/weight balance. Catalogue tare, payload, gross laden weight, axle rating or sums of nominal component masses do not establish M. |
| `energy_conversion` | electricity | Net calorific value | MJ | Meter attributable electricity intake; verified kWh unit conversion is3.6 MJ/kWh. Nameplate kW is not energy; site/voltage/mix matching is required. |
| `gas_air_volume` | gas; air | Volume | m3 | Retain actual metered reference-temperature/pressure/compressibility volume. Gas supply and compressed-air test media are separate routes; use measured gas composition and physical state for any conversion to mass/energy, never generic density or nominal tank volume. |
| `coating_species` | finish | Mass | kg | Separate actual coating base/hardener/solvent/grit, retained dry coating and waste. Emitted mixed xylenes require actual CAS-specific emission evidence and immediate air medium; total VOC or HAP is not that species. Fossil CO2 requires actual heater fossil-carbon basis, not upstream inventory. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received steel plate/sections and supplier-completed body, running gear and fittings with inclusions declared |
| starting_condition_role | Actual receipt-to-empty-wagon manufacture |
| product_classification_scope | Steel high-sided open railway freight wagon only |
| recursive_input_rule | Bought body/bogie replaces its included fabrication; never recursively manufacture a complete wagon as its own input |
| upstream_dataset_requirement | Link actual provider, stock grade/route and module scope; disclose upstream and outsourced gaps |
| disclosure | producer/model, serial and drawing/BOM revision; high-sided open body, integral flat floor, fixed ends, side doors and locking/access fittings; steel grades and supplier completion; gauge, bogie/axle/wheelset arrangement, suspension, bearings, brakes and couplings; coating chemistry and actual heater/blasting route; complete empty net M kg and cp_mass, calibrated rail/wheel weighing and signed configuration corrections; retained bearing lubricant; exclude cargo, test loads, personnel, fixtures, packaging and loose spares; actual site/period and gate, supplier inclusions, conditional absence and outsourcing |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stages` | all processes | Include actual producer fabrication/assembly and attributable acceptance resources once. Purchased complete bogies/body replace included stock/parts/processes; report conditional absences and omitted actual BOM items before quantitative completion. | `tatra-factory`; `tatra-model` |
| `boundary_use` | acceptance/downstream | Construction-only documented acceptance is inside; revenue haulage, loading/unloading, track works, operation maintenance/rebuild and end-of-life outside. External locomotive trial service, if used, is a separate measured service link, never wagon engine fuel. | `tatra-model` |
| `boundary_upstream` | dataset | This foreground is not automatically complete cradle-to-gate. Declare actual outsourcing and physical transport/service links and require suitable upstream datasets; record gaps without substituting generic exchanges or zeros. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `body` | Underframe and dry-freight body fabrication | conditional | Actual fabrication inside the declared manufacturing boundary. | foreground | one accepted complete unit normalized with M |
| `running_gear` | Running gear, brake and coupling integration | required | Each accepted unpowered high-sided open wagon with the declared bogie and brake configuration. | foreground | one accepted complete unit normalized with M |
| `finish` | Conditional surface preparation and coating | conditional | Actual shot blasting/coating/heating at the reporting plant. | foreground | one accepted complete unit normalized with M |
| `outfit` | Freight fittings and final assembly | required | Each declared complete dry-freight configuration. | foreground | one accepted complete unit normalized with M |
| `acceptance` | Empty-wagon inspection and acceptance | required | Each finished accepted complete empty wagon. | foreground | one accepted complete unit normalized with M |
| `packing` | Conditional delivery protection | conditional | Actual removable protection shipped at the declared gate. | foreground | one accepted complete unit normalized with M |

Actual body fabrication feeds running-gear integration, conditional preparation/coating and side-door fitting, then empty acceptance and conditional protection. Declare actual station order and supplier completion. Required process stages do not require every example chemical/component: each row applies only to an exact actual independent supply or species; add every omitted actual component, heat, chemical, waste and measured emission separately.

### Process: Underframe and dry-freight body fabrication (`body`)

Cut/form/machine specified steel stock and weld underframe and declared integral flat floor, fixed end walls, high side walls and side doors. Bought complete underframe/body replaces included fabrication. Record actual steel grade, filler and shielding recipe and welding quality; no casting/forging/heat treatment assumed in-house.

#### Inputs

##### Product flows

###### Hot-rolled carbon-steel freight-wagon plate (`steel_plate`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Hot-rolled carbon-steel freight-wagon plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_body`
- Sources: `tatra-factory`; `greenbrier-2022`

###### Carbon-steel rolled underframe section (`steel_section`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Carbon-steel rolled underframe section
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_body`
- Sources: `tatra-factory`; `greenbrier-2022`

###### Complete welded steel dry-freight body and underframe assembly (`body_module`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Complete welded steel dry-freight body and underframe assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_body`
- Sources: `tatra-factory`; `greenbrier-2022`

###### Solid carbon-steel arc-welding filler wire (`weld_wire`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Solid carbon-steel arc-welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_body`
- Sources: `tatra-factory`; `greenbrier-2022`

###### Gaseous carbon-dioxide steel-welding shielding supply (`shield_co2`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Gaseous carbon-dioxide steel-welding shielding supply
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_body`
- Sources: `tatra-factory`; `greenbrier-2022`

###### Alternating current (`electricity_body`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different site geography, voltage, supply mix or self-generation needs a distinct compatible flow; European manufacturer examples do not establish reporting-plant geography. Meter each process boundary once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_body`
- Sources: `tatra-factory`; `greenbrier-2022`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_offcut`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_body`
- Sources: `tatra-factory`; `greenbrier-2022`

###### Carbon-steel machining chips transferred for treatment (`steel_chips`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Carbon-steel machining chips transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_body`
- Sources: `tatra-factory`; `greenbrier-2022`

### Process: Running gear, brake and coupling integration (`running_gear`)

Install actual wheelsets/axleboxes, suspension, brake and coupling; complete bogie supply includes its contents once. Independent complete bogie supply replaces included wheelset, axlebox, spring and brake manufacture. Geometry, gauge, axle arrangement, brakes and buffers/couplers are configuration-specific.

#### Inputs

##### Product flows

###### Bogie assembly (`bogie`)

Only a complete purchased unpowered freight-wagon bogie, delivered at plant, with actual drawing/gauge/brake and wheelset/axlebox/spring inclusions recorded. Included constituents are not separate purchased exchanges.

- Selected flow: Bogie assembly `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `tatra-model`

###### Finished steel freight-wagon wheelset (`wheelset`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Finished steel freight-wagon wheelset
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `tatra-model`

###### Complete freight-wagon roller-bearing axlebox (`axlebox`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Complete freight-wagon roller-bearing axlebox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `tatra-model`

###### Finished steel freight-wagon suspension spring (`spring`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Finished steel freight-wagon suspension spring
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `tatra-model`

###### Complete pneumatic freight-wagon brake assembly (`brake`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Complete pneumatic freight-wagon brake assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `tatra-model`

###### Finished steel freight-wagon coupling assembly (`coupler`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Finished steel freight-wagon coupling assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `tatra-model`

###### Petroleum-base lithium-soap rolling-bearing lubricating grease (`grease`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Petroleum-base lithium-soap rolling-bearing lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `tatra-model`

###### Alternating current (`electricity_running_gear`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different site geography, voltage, supply mix or self-generation needs a distinct compatible flow; European manufacturer examples do not establish reporting-plant geography. Meter each process boundary once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_running_gear`
- Sources: `tatra-model`

### Process: Conditional surface preparation and coating (`finish`)

Record actual blasting, cleaning and coating chemistry, application/curing route and air controls. Epoxy/amine and mixed xylenes apply only when matching actual formulation; not a compulsory wagon coating. Gas heating and species emissions require actual metered route and species evidence.

#### Inputs

##### Product flows

###### Steel shot blasting abrasive (`grit`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Steel shot blasting abrasive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### Process Water (`water`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### Epoxy-resin formulated freight-wagon coating base (`epoxy`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Epoxy-resin formulated freight-wagon coating base
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### Polyamine formulated epoxy-coating hardener (`hardener`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Polyamine formulated epoxy-coating hardener
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### Mixed-isomer xylenes coating solvent (`xylene`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Mixed-isomer xylenes coating solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### natural gas in the gaseous state (`gas`)

Only actual fossil gaseous pipeline-delivered consumption-side supply matching the public identity; record reference temperature/pressure/compressibility, actual gas composition and meter corrections. LNG, LPG, raw extraction gas or purchased heat are distinct.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### Alternating current (`electricity_finish`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different site geography, voltage, supply mix or self-generation needs a distinct compatible flow; European manufacturer examples do not establish reporting-plant geography. Meter each process boundary once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

#### Outputs

##### Waste flows

###### Spent steel shot abrasive transferred for treatment (`waste_grit`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Spent steel shot abrasive transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### Uncured epoxy-resin paint residual transferred for treatment (`waste_paint`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Uncured epoxy-resin paint residual transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### Aqueous wagon-surface-cleaning wastewater transferred for treatment (`effluent`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Aqueous wagon-surface-cleaning wastewater transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

#### Outputs

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Only actual speciated CAS1330-20-7 mixed-xylene release at this plant, immediate air unspecified. Do not map total VOC, a specific isomer or worker exposure concentration. Integrate calibrated emission rate and actual operating period with detection limits.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

###### carbon dioxide (fossil) (`co2_air`)

Only actual direct fossil-gas heater combustion at the plant, immediate unspecified air. Use calibrated measured CO2 or measured fossil carbon balance with actual gas composition/oxidation, retain original method. No emission factor or combustion duty is prescribed. Exclude upstream emissions and biological carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish`
- Sources: `greenbrier-2022`

### Process: Freight fittings and final assembly (`outfit`)

Fit declared side doors and locking mechanism, steps and access fittings; no roof or hopper discharge gate belongs to this boundary. Bought body includes integral parts once. Match accepted drawings and customer release configuration.

#### Inputs

##### Product flows

###### Finished steel freight-wagon side-door assembly (`door`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Finished steel freight-wagon side-door assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `tatra-model`

###### Alternating current (`electricity_outfit`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different site geography, voltage, supply mix or self-generation needs a distinct compatible flow; European manufacturer examples do not establish reporting-plant geography. Meter each process boundary once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outfit`
- Sources: `tatra-model`

### Process: Empty-wagon inspection and acceptance (`acceptance`)

Inspect configuration and actual brake/coupling/geometry acceptance and weigh empty completed wagon. Any test haul, compressed-air supply or temporary loads is recorded only when actually attributable. External locomotive test energy is separately disclosed, not invented wagon fuel or engine exhaust.

#### Inputs

##### Product flows

###### Compressed air (`air`)

Only separately supplied compressed-air volume with actual reference pressure/temperature and quality documented. If generated in-house, record actual compressor electricity and intake separately without purchasing the same air twice.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `tatra-model`; `greenbrier-2022`

###### Alternating current (`electricity_acceptance`)

Only actual metered China user-grid-average1–35kV AC matching this identity. Different site geography, voltage, supply mix or self-generation needs a distinct compatible flow; European manufacturer examples do not establish reporting-plant geography. Meter each process boundary once.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `tatra-model`; `greenbrier-2022`

#### Outputs

##### Product flows

###### Accepted complete unpowered steel high-sided open railway freight wagon (`finished_machine`)

Only the exact actual independent exchange matching declared composition, grade and completed supply scope. Measure net issues/returns or recipient transfer records. Supplier-completed constituents are counted once; actual absence is documented and unknown is not zero.

- Selected flow: Accepted complete unpowered steel high-sided open railway freight wagon
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `tatra-model`; `greenbrier-2022`

### Process: Conditional delivery protection (`packing`)

Record actual protection; no universal shipping wrap or cradle. Exclude removable protection from net M; integral load restraint remains in accepted product.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`film`)

Only actual non-adhesive, non-cellular, unreinforced, unsupported and unlaminated PE-LD foil.

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

Only actual metered China user-grid-average1–35kV AC matching this identity. Different site geography, voltage, supply mix or self-generation needs a distinct compatible flow; European manufacturer examples do not establish reporting-plant geography. Meter each process boundary once.

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
| `allocation_orders` | shared resources | Avoid allocation by subdivision and actual order/serial stage metering first. Allocate remaining shared resources by demonstrated causal metered machine time, coated area for an identical coating/operation or measured test use, with original numerator/denominator and sensitivity. Do not assign mixed wagon bodies equally per unit or nominal tare. | `ghg-allocation` |
| `allocation_scrap` | steel offcuts | Measure generated steel offcuts/returns, separate internal recirculation and transferred waste once, preserve recipient/legal treatment state and actual coproduct status. No automatic avoided-virgin-steel or recycling credit. A demonstrated sold coproduct needs independently reviewed allocation with actual causal evidence and consistent upstream boundary. | `ghg-allocation` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete empty-wagon net mass | controlled_acceptance_record | model; configuration; serial number; accepted net mass M; actual original calibrated rail/wheel weigh record; all supports/tare/static procedure; repeatability; retained lubricant; detached integral parts; measured cargo/test-load/persons/fixture/protection exclusions; signed configuration corrections and mass balance | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted wagon | actual manufacturing/acceptance period | declared plant acceptance gate | accepted net mass per unit | original actual calibrated measurements and reconciliation |
| `cp_body` | body | Underframe and dry-freight body fabrication | foreground_record | serial/order and drawing/BOM; accepted count; each exchange identity/composition/property/unit; actual net issues/returns/stock change; supplier included constituents; electricity site/voltage/mix/meter; gas/air temperature/pressure/compressibility; coating/SDS/species/medium; waste recipient; shared driver and denominator; calibration/test coverage | Weigh each net stock/filler/shield-gas issue and actual scrap, reconcile returns and supplier assembly contents by serial order. | actual unit for each row | each order/batch | declared manufacture period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original supplier, weighing, meter, SDS, emission, transfer and test records |
| `cp_running_gear` | running_gear | Running gear, brake and coupling integration | foreground_record | serial/order and drawing/BOM; accepted count; each exchange identity/composition/property/unit; actual net issues/returns/stock change; supplier included constituents; electricity site/voltage/mix/meter; gas/air temperature/pressure/compressibility; coating/SDS/species/medium; waste recipient; shared driver and denominator; calibration/test coverage | Retain serial/module scope and measured net mass; reconcile bogie inclusions versus separately supplied wheelsets/axleboxes/springs/brakes and actual couplings. | actual unit for each row | each order/batch | declared manufacture period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original supplier, weighing, meter, SDS, emission, transfer and test records |
| `cp_finish` | finish | Conditional surface preparation and coating | foreground_record | serial/order and drawing/BOM; accepted count; each exchange identity/composition/property/unit; actual net issues/returns/stock change; supplier included constituents; electricity site/voltage/mix/meter; gas/air temperature/pressure/compressibility; coating/SDS/species/medium; waste recipient; shared driver and denominator; calibration/test coverage | Collect separate coating-component, solvent, grit, water and metered heater gas records, actual dry/retained and transferred residues, SDS and species-specific air measurements. | actual unit for each row | each order/batch | declared manufacture period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original supplier, weighing, meter, SDS, emission, transfer and test records |
| `cp_outfit` | outfit | Freight fittings and final assembly | foreground_record | serial/order and drawing/BOM; accepted count; each exchange identity/composition/property/unit; actual net issues/returns/stock change; supplier included constituents; electricity site/voltage/mix/meter; gas/air temperature/pressure/compressibility; coating/SDS/species/medium; waste recipient; shared driver and denominator; calibration/test coverage | Weigh actual separate fitted mechanisms and retain BOM/drawing revision, supplier inclusions and net returns. | actual unit for each row | each order/batch | declared manufacture period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original supplier, weighing, meter, SDS, emission, transfer and test records |
| `cp_acceptance` | acceptance | Empty-wagon inspection and acceptance | foreground_record | serial/order and drawing/BOM; accepted count; each exchange identity/composition/property/unit; actual net issues/returns/stock change; supplier included constituents; electricity site/voltage/mix/meter; gas/air temperature/pressure/compressibility; coating/SDS/species/medium; waste recipient; shared driver and denominator; calibration/test coverage | Retain actual acceptance/test/weighing records, calibrated meters and resource attribution by wagon serial; do not use payload or gross laden weight as net M. | actual unit for each row | each order/batch | declared manufacture period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original supplier, weighing, meter, SDS, emission, transfer and test records |
| `cp_packing` | packing | Conditional delivery protection | foreground_record | serial/order and drawing/BOM; accepted count; each exchange identity/composition/property/unit; actual net issues/returns/stock change; supplier included constituents; electricity site/voltage/mix/meter; gas/air temperature/pressure/compressibility; coating/SDS/species/medium; waste recipient; shared driver and denominator; calibration/test coverage | Weigh actual dispatched protective film, reconciled returns, excluding its mass from empty-wagon M. | actual unit for each row | each order/batch | declared manufacture period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original supplier, weighing, meter, SDS, emission, transfer and test records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Collect attributable net exchanges by actual serial configuration, subtract returns and inventory changes, justify shared allocation and divide by accepted unit count for q_item, then by the same actual empty net M. Preserve kg/kg, gas/air m3/kg and electricity MJ/kg. For compatible serial wagons with real M variation use total attributable exchanges divided by summed measured accepted net masses, retaining every serial. Separate incompatible body/gauge/bogie/brake/coating and acceptance routes. Unknowns remain gaps.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_origin with actual calibrated complete empty-unit measurement and signed corrections. Missing original measurement method or unbalanced configuration blocks quantitative completion. | original serial/calibration/weight/BOM balance |
| `quality_bom` | all processes | Reconcile underframe/floor/end/side walls/doors, bogies/wheelsets/brakes/couplings/access, coating and retained lubricants. Supplier complete assemblies include constituents once; add omitted actual constituents and resources before completeness claims. | drawings, supplier inclusions, actual records |
| `quality_species` | finish | No compulsory VOC/NOx/species or heater combustion is inferred. Actual formulation, direct outlet, detection limits, operating coverage and measured conversion basis are required; distinguish indoor/soil/long-term/isomer from specified immediate-air species. | SDS/speciated outlet/gas records |
| `quality_evidence` | dataset | Declare site/period/gate, original lineage, empirical QA limits, conditional absence, allocation, uncertainty, identity/quantity/upstream gaps. Establish empirical ranges from actual calibrated records or independently verified compatible evidence, never invented mass/yield/life. PCR check establishes declared relations only, not scientific approval or actual factory records. | source and coverage register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine; cp_mass | Confirm complete steel high-sided open wagon, empty positive actual net M, physical calibrated mass_record_origin, exact configuration and fixed1kg output normalization. Reject cargo/gross laden/catalogue tare as M and other body types. | `tatra-model` |
| `validate_rows` | all inventory rows | Each exchange has one identity/property/unit and exact direction/type, shared denominator and linked protocol/rule. Respect actual public reference property, compartment and route, official Chinese names; blank identities remain review gaps. No generic category row. |  |
| `validate_balance` | all processes | Reconcile stocks, supplier inclusions, assembled accepted mass, retentions and waste, shared driver and actual test scope. No double-counted bought bogie and constituents or recycled steel credit. All unmeasured quantities/conditional routes and missing upstream prevent unqualified completed cradle-to-gate claim. | `ghg-allocation` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured steel high-sided open railway freight-wagon foreground manufacture |
| downstream_use | secondary_dataset; background_dataset after qualified review and upstream linkage |
| allowed_use | Compatible same body, running gear, coating, empty-net-M, site/period/gate manufacturing supply models |
| excluded_use | Whole CPC49533, other body architectures, transport/loading service, equal-mass payload equivalence or unsupported cradle-to-gate |
| required_metadata | producer/model, serial and drawing/BOM revision; high-sided open body, integral flat floor, fixed ends, side doors and locking/access fittings; steel grades and supplier completion; gauge, bogie/axle/wheelset arrangement, suspension, bearings, brakes and couplings; coating chemistry and actual heater/blasting route; complete empty net M kg and cp_mass, calibrated rail/wheel weighing and signed configuration corrections; retained bearing lubricant; exclude cargo, test loads, personnel, fixtures, packaging and loose spares; actual site/period and gate, supplier inclusions, conditional absence and outsourcing |
| required_quality_disclosure | Actual net weighing and quantities, supplier inclusions, identity gaps, conditional stages, uncertainty, empirical limits and missing upstream |
| update_trigger | Body/door/floor, steel grade, bogie/brake/gauge, supplier scope, coating/gas/air route, actual accepted M record or gate/site/period change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `tatra-factory` | literature | [Tatravagonka company profile](https://tatravagonka.sk/company-profile/?lang=en) | Company-profile material cutting and welding paragraphs. Undated manufacturer capability example; no capacity, grade, uniform process depth or intensity adopted. |
| `tatra-model` | literature | [Tatravagonka Eanoss](https://tatravagonka.sk/wagons/eanoss/?lang=en) | Eanoss body paragraph and technical table: whole-metal high-sided body, integral flat floor/fixed fronts/side doors and bogie configuration; distinct tare, laden weight and payload. No nominal mass, numerical capacity, gauge/floor thickness or regulatory/certification claim adopted. |
| `greenbrier-2022` | literature | [Greenbrier 2022 ESG report](https://www.gbrx.com/wp-content/uploads/2022/12/Greenbrier-2022-ESG-Report.pdf) | PDF/printed24,59,61,62: historical2022 welding quality, electricity/natural-gas cutting/heating, paint air and residual/solvent management. Mixed company/facility boundaries, not open-wagon unit intensities. No chart threshold, gas duty, compulsory VOC species, coating recipe, tank-specific inspection or life factor adopted. |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | Printed63/PDF65 tables9.1–9.2 historical avoid/subdivide and causal allocation hierarchy only. Actual causal shared-driver measurement, not numerical wagon allocation factor. |
