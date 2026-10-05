---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.railway-passenger-coach
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-self-propelled stainless-steel railway passenger coach manufacturing

## 1. Scope and Applicability

Manufacture of a new complete locomotive-hauled seated air-conditioned railway passenger coach with welded stainless-steel carbody: actual underframe/body fabrication and surface finishing, supplied non-powered bogie/body mating, interior/brake/electrical/HVAC installation, bounded factory tests and corrected net-mass acceptance. One released model/revision, gauge, seating/door/brake/HVAC and supplied-package configuration defines applicability. Non-stainless portions of the actual underframe are declared separately. This product subset is narrower than CPC49532; it is a manufacturing module, not passenger transport performance.

Exclude self-propelled EMU/DMU vehicles, locomotives, powered tramcars, complete trainsets, driving-cab/control coaches, sleeping/dining/mail/luggage-only special coaches, maintenance/service vehicles, parts sold separately, overhaul/rebuild and other body routes such as aluminium FSW. Exclude passenger-km, towing-locomotive manufacture/operating fuel, passenger service energy/water, in-service maintenance, railway infrastructure and end of life. No operational service is supplied by this reference. Actual contracted manufacturing and acceptance movements require explicit endpoints and attributable support inputs; do not silently omit them or claim complete cradle-to-gate coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.railway-passenger-coach |
| classification_refs | CPC:3.0:49532; narrower |
| covered_products | Manufacture of a new complete locomotive-hauled seated air-conditioned railway passenger coach with welded stainless-steel carbody: actual underframe/body fabrication and surface finishing, supplied non-powered bogie/body mating, interior/brake/electrical/HVAC installation, bounded factory tests and corrected net-mass acceptance. One released model/revision, gauge, seating/door/brake/HVAC and supplied-package configuration defines applicability. Non-stainless portions of the actual underframe are declared separately. This product subset is narrower than CPC49532; it is a manufacturing module, not passenger transport performance. |
| excluded_products | Exclude self-propelled EMU/DMU vehicles, locomotives, powered tramcars, complete trainsets, driving-cab/control coaches, sleeping/dining/mail/luggage-only special coaches, maintenance/service vehicles, parts sold separately, overhaul/rebuild and other body routes such as aluminium FSW. Exclude passenger-km, towing-locomotive manufacture/operating fuel, passenger service energy/water, in-service maintenance, railway infrastructure and end of life. No operational service is supplied by this reference. Actual contracted manufacturing and acceptance movements require explicit endpoints and attributable support inputs; do not silently omit them or claim complete cradle-to-gate coverage. |
| representative_product | One accepted new stainless-steel seated coach with declared non-powered bogies, actual HVAC/window/door and auxiliary configurations. No universal gauge, seat count or tare mass. |
| production_route | Underframe and stainless carbody fabrication; Surface preparation and coating; Non-powered bogie mating and braking interfaces; Passenger interior and auxiliary-system installation; Factory inspection, testing and net-mass acceptance |
| market_state | Complete accepted coach including installed fit-list and retained technical prefill once; passengers/luggage/potable water/toilet service stocks, packaging, detached spares and temporary testing equipment excluded from net M. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of the complete declared non-self-propelled passenger coach. |
| How much | 1 kg accepted net manufacturing output derived from actual M kg per same complete accepted unit. |
| How well | Released design, supplier configuration and current actual contract/authority acceptance records; no manufacturer marketing figures as generic threshold. |
| How long or cycle | One documented manufacturing/acceptance cycle, not a lifetime passenger service. No useful life invented. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Railway or tramway passenger coaches, not self-propelled, luggage vans, post office coaches and other special-purpose railway or tramway coaches, not self-propelled (except maintenance or service vehicles) `125d4ce1-c7db-4b0a-bcf6-82c0b0385d13` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | coach identifier/model and released design/revision; locomotive-hauled non-powered state; carbody/underframe grades, sheet thickness, joining and finish; gauge/bogie/axle/brake/coupler configuration; seat/door/window/floor/HVAC/toilet/battery/electrical fit-list; actual HVAC refrigerant/charge and supplier prefill; make-or-buy module contents; technical fluids versus service/test stocks and net delivery state; site/period/accepted count/rework; current acceptance test plan and actual bounded support movements; calibrated complete-unit wheel/axle weighing originals, corrections and measured net M kg; independently measured installed BOM mass and uncertainty; upstream/provider/utility/transport/treatment coverage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_energy | body_power; coat_power; running_power; outfit_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve actual electrical-energy numerator; convert metered kWh by 3.6 MJ/kWh. Do not add internally transferred energy as a second purchased supply. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified received sheets/underframe stock and finished purchased non-powered bogies/fit-out components at declared fabrication/assembly sites. Primary smelting or manufacturing contained in supplied packages is not automatically foreground. |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC:3.0:49532; narrower |
| recursive_input_rule | A purchased complete coach/shell is an identified upstream input with supplied state; only actual additional assembly/rework is foreground. This stock-to-complete-coach route cannot be recursively copied into an already complete unit. |
| upstream_dataset_requirement | Compatible supplier modules for actual materials/bogies/interiors/HVAC, utilities, transport and waste treatment with property/configuration/contained prefill declared before extending beyond foreground. |
| disclosure | Actual make-or-buy start, sites/period, subprocesses, supplier contents, utilities/testing/support transfers, technical versus service stocks, exclusions/gaps and upstream coverage. Never label the foreground record complete cradle-to-gate by default. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_actual | manufacture | Follow released actual drawings/work orders for stock fabrication, qualified joining and supplier-package integration. Each actual additional material/utility/treatment gets its own atomic row and linked records; conditional example chemistry is not prescribed. |  |
| boundary_package | running; outfit | Complete supplied bogies include declared wheelsets/suspension/brakes; complete HVAC/door/seat packages include contained parts/fluids. Record only additional independent stocks, no double counting. Actual in-house bogie/component manufacture must expand its physical work; purchased kg cannot stand in for unrecorded factory work. |  |
| boundary_trials | acceptance | Declare static/brake/electrical/HVAC/water-leak tests and actual acceptance movements. For tow trials retain support-vehicle supplier/activity and measured attributable fuel/energy or contracted transport module. Passenger operation and towing locomotives remain outside reference output. |  |
| boundary_net | finished_machine | Deliver the complete installed configuration and technical fluids once; actual measured service/test water, persons, luggage, load substitutes, packaging and temporary attachments are removed by signed corrections. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `body` | Underframe and stainless carbody fabrication | required | Actual received stock, cut/form/join to released drawings and process qualifications; supplier-prefabricated modules replace contained work. | foreground_manufacturing | 1kg accepted output; same configuration |
| `coat` | Surface preparation and coating | conditional | Include only actual cleaning and separately supplied coats/cure where performed; stainless surfaces need not all be painted. | foreground_manufacturing | 1kg accepted output; same configuration |
| `running` | Non-powered bogie mating and braking interfaces | required | One exact purchased non-powered bogie supply contains declared wheels, suspension and bogie brakes; integrate body-side coupler/valve/reservoir. In-house bogie manufacture requires separate atomic stock/process expansion. | foreground_manufacturing | 1kg accepted output; same configuration |
| `outfit` | Passenger interior and auxiliary-system installation | required | Install actual seats, windows, doors and configured floor/insulation/HVAC/electrical/toilet fit-list. Purchased complete packages replace contained parts and prefill. | foreground_manufacturing | 1kg accepted output; same configuration |
| `acceptance` | Factory inspection, testing and net-mass acceptance | required | Current actual configuration-specific static/function/leak/brake checks, bounded trials if required, rework and calibrated net weighing. | foreground_manufacturing | 1kg accepted output; same configuration |

Rows are specific initial exchange candidates, not a fixed exhaustive bill of materials. Extend actual fit-list with separate grades/components/chemicals/packaging and measured releases. Conditional absence needs records, not invented zero. Internal modules/transfers are not additional external products.

### Process: Underframe and stainless carbody fabrication (`body`)

Actual received stock, cut/form/join to released drawings and process qualifications; supplier-prefabricated modules replace contained work.

#### Inputs

##### Product flows

###### Cold-rolled stainless-steel coach carbody sheet (`stainless_sheet`)

Actual released grade, thickness, finish and heat; issued less returned sheet, cut/form/weld rework included. No assumed all-stainless underframe.

- Selected flow: Cold-rolled stainless-steel coach carbody sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_body`
- Sources:

###### Hot-rolled low-alloy steel coach underframe plate (`underframe_plate`)

Conditional actual non-stainless underframe supply grade/thickness and scope; supplier-made underframe replaces contained raw stock/work.

- Selected flow: Hot-rolled low-alloy steel coach underframe plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_body`
- Sources:

###### Solid stainless-steel gas-shielded welding wire (`stainless_wire`)

Include only actual welding procedure with exact wire chemistry/diameter; supplied wire mass issued/returned and retained weld versus loss. Separate actual covered electrodes.

- Selected flow: Solid stainless-steel gas-shielded welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_body`
- Sources:

###### Argon welding shielding gas (`shield_argon`)

Conditional actual pure argon supply and metered kg or measured state-specific volume/density; no assumed mixture or prescribed consumption.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_body`
- Sources:

###### Alternating current (`body_power`)

Actual below1kV grid-user cutting/forming/joining/lifting/ventilation demand; own compressed-air production energy included, no free utility.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_body`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated coach stainless-steel sheet offcuts (`stainless_scrap`)

Actual alloy-specific untreated offcuts leaving site; internal reusable stock transfers not outgoing waste.

- Selected flow: Segregated coach stainless-steel sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_body`
- Sources:

###### Post-industrial steel scrap (`steel_scrap`)

Conditional actual dry segregated non-stainless underframe offcuts leaving plant untreated; painted/oily streams separate.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_body`
- Sources:

##### Elementary flows

###### Particulate matter, particle size unspecified (`particle_air`)

Conditional measured post-control particle release to immediate air unspecified submedium/size. Captured metal dust is waste, not this release; measured size fractions replace unspecified row.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_body`
- Sources:

### Process: Surface preparation and coating (`coat`)

Include only actual cleaning and separately supplied coats/cure where performed; stainless surfaces need not all be painted.

#### Inputs

##### Product flows

###### Formulated epoxy coach anticorrosion primer (`primer`)

Conditional actual formulated supply, solids/SDS and finish scope, wet kg; no universal painting of stainless surfaces.

- Selected flow: Formulated epoxy coach anticorrosion primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

###### Formulated polyurethane coach exterior topcoat (`topcoat`)

Actual one supplied topcoat wet mass, returns/overspray and cured retained film; include site curing demand if performed.

- Selected flow: Formulated polyurethane coach exterior topcoat
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

Conditional actual municipal product water cleaning makeup; volume conversion requires actual density/state, recycle transfers separate.

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

Actual below1kV cleaning/coating/extraction/electric curing including rework. Direct fuel curing must add one fuel row and actual species.

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

Actual separate wet coating overspray/residue sent to declared treatment; filters and washing sludge separate.

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

###### Coach surface-washing wastewater sent to treatment (`wash_waste`)

Actual aqueous cleaning discharge with measured chemistry and destination; not freshwater resource or direct elementary wastewater.

- Selected flow: Coach surface-washing wastewater sent to treatment
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

Only actual xylene CAS1330-20-7 released after controls to immediate air unspecified submedium. TotalVOC is not xylene; no inevitable solvent emission.

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

### Process: Non-powered bogie mating and braking interfaces (`running`)

One exact purchased non-powered bogie supply contains declared wheels, suspension and bogie brakes; integrate body-side coupler/valve/reservoir. In-house bogie manufacture requires separate atomic stock/process expansion.

#### Inputs

##### Product flows

###### Bogie assembly (`bogie`)

Actual supplied non-powered bogie model, gauge, suspension, axleboxes/wheelsets/disc brakes included in received/installed package kg; no traction motor. Do not also list contained wheelsets/brakes as external inputs.

- Selected flow: Bogie assembly `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_running`
- Sources:

###### Finished railway passenger coach coupler with draft gear (`coupler`)

One complete supplied coupling unit with actual interface/model and contained draft gear mass; already in body package omit duplicate.

- Selected flow: Finished railway passenger coach coupler with draft gear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_running`
- Sources:

###### Finished railway coach pneumatic brake control valve (`brake_valve`)

Actual body-mounted supplied valve kg beyond bogie-contained braking, pressure/interface and identification recorded.

- Selected flow: Finished railway coach pneumatic brake control valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_running`
- Sources:

###### Finished railway coach steel compressed-air reservoir (`air_reservoir`)

Actual certified supplied pressure-vessel configuration kg, no assumed generic compressor manufactured in this non-powered coach.

- Selected flow: Finished railway coach steel compressed-air reservoir
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_running`
- Sources:

###### Formulated lithium-soap railway bearing grease (`grease`)

Conditional actually added bearing grease beyond prefilled bogie; one composition, retained versus returned/removed documented.

- Selected flow: Formulated lithium-soap railway bearing grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_running`
- Sources:

###### Alternating current (`running_power`)

Actual below1kV bogie/body mating, alignment, lifting and brake plumbing electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_running`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Passenger interior and auxiliary-system installation (`outfit`)

Install actual seats, windows, doors and configured floor/insulation/HVAC/electrical/toilet fit-list. Purchased complete packages replace contained parts and prefill.

#### Inputs

##### Product flows

###### Finished upholstered reclining railway passenger seat assembly (`seat`)

Actual supplied individual-seat type with frame/cushion/cover and installed mounting included kg; actual count retained, no universal72seat configuration.

- Selected flow: Finished upholstered reclining railway passenger seat assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Finished double-glazed tempered railway coach window assembly (`window`)

Only declared actual double-glazed tempered window package with frame/seals; record measured supplied kg and dimensions; no laminate-pane identity substitution.

- Selected flow: Finished double-glazed tempered railway coach window assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### rock wool (`insulation`)

Conditional actual unfaced rock wool kg, grade/density and separately supplied facing; contained supplier panel insulation omitted.

- Selected flow: rock wool `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Fire-retardant hardwood plywood coach floor panel (`floor`)

Conditional actual hardwood veneer/glue/retardant supplied floor panel kg and independently recorded thickness/moisture; exact configuration may require another physical card.

- Selected flow: Fire-retardant hardwood plywood coach floor panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Finished electrically actuated sliding railway passenger entrance door assembly (`door`)

Actual one supplied complete entrance door module kg including drive/control; internal interconnector door distinct if fitted and separately supplied.

- Selected flow: Finished electrically actuated sliding railway passenger entrance door assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Finished railway passenger coach roof-mounted air-conditioning unit (`hvac`)

Actual supplied complete non-traction HVAC model kg, refrigerant chemistry/charge and prefilled lubricant contained once; supplier scope recorded, no universal refrigerant or capacity.

- Selected flow: Finished railway passenger coach roof-mounted air-conditioning unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### R134a refrigerant for initial coach factory charging (`r134a_fill`)

Conditional actual R134a CAS811-97-2 charged beyond supplier-prefilled unit, separately metered issued/returned/recovered/retained. Other actual refrigerant uses its own chemistry row.

- Selected flow: R134a refrigerant for initial coach factory charging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V (`board`)

One actual supplied low-voltage auxiliary distribution switchboard kg and rated voltage≤1000V; not a traction high-voltage cabinet.

- Selected flow: Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Finished insulated copper railway coach auxiliary power cable (`cable`)

Actual supplier cable gauge/insulation/fire specification/voltage and measured kg installed after cutoffs; no automatic length-to-mass factor.

- Selected flow: Finished insulated copper railway coach auxiliary power cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Finished lead-acid railway coach auxiliary battery (`battery`)

Actual non-traction supplied battery kg, contained electrolyte once, voltage/capacity and testing recorded.

- Selected flow: Finished lead-acid railway coach auxiliary battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Finished railway coach vacuum toilet unit (`toilet`)

Conditional actually fitted model kg and supplied containment; actual freshwater tank separately characterised, service water stock excluded from M.

- Selected flow: Finished railway coach vacuum toilet unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

###### Alternating current (`outfit_power`)

Actual below1kV interior installation, electrical/HVAC function tests and rework demand; no passenger use air-conditioning energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### HFC-134a (`r134a_air`)

Conditional actually measured unrecovered factory R134a CAS811-97-2 release to immediate air unspecified submedium, separate from retained charge and recovered stock; no assumed lifecycle leakage factor.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_outfit`
- Sources:

### Process: Factory inspection, testing and net-mass acceptance (`acceptance`)

Current actual configuration-specific static/function/leak/brake checks, bounded trials if required, rework and calibrated net weighing.

#### Inputs

##### Product flows

###### Tap water (`test_water`)

Actual municipal rain/leak/pressure-test water consumed or discharged, recycled transfers separately; retained potable tank stock excluded from net output.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
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

Actual below1kV static acceptance/weighing/test equipment demand and attributable contracted trials. No traction-electricity exchange for this non-powered product.

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

Conditional actual non-cellular non-self-adhesive PE-LD protective film kg, excluded from M; separately supplied cardboard/timber get distinct cards when used.

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

###### Railway or tramway passenger coaches, not self-propelled, luggage vans, post office coaches and other special-purpose railway or tramway coaches, not self-propelled (except maintenance or service vehicles) (`finished_machine`)

1kg share of complete accepted new non-powered seated air-conditioned stainless railway coach, including declared installed equipment and technical prefill once, actual corrected net M.

- Selected flow: Railway or tramway passenger coaches, not self-propelled, luggage vans, post office coaches and other special-purpose railway or tramway coaches, not self-propelled (except maintenance or service vehicles) `125d4ce1-c7db-4b0a-bcf6-82c0b0385d13`
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

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | Prefer configuration/work-order metering and direct stock/test attribution. Rework and actual rejected-coach production burdens stay in matched accepted output; report rejects/returns, no hiding under sales totals. |  |
| allocation_shared | shared operations | Partition shared cutting/welding/coating/assembly/test demand by measured machine occupancy, weld time/length, actual conditioned volume/time or test energy as causally appropriate, reconciled to common meter/work orders. State actual driver units and uncertainty, compare plausible alternatives; no unmeasured equal-per-coach or mass allocation for fixed tests. |  |
| allocation_scrap | waste | No automatic avoided virgin steel or recovered-refrigerant credit. Keep alloy-specific waste/treatment route, actual ownership and downstream modelling separate; internal recovered gas/water is a transfer with loss measured once. Economic allocation only for documented real co-products after physical causality is unavailable, with actual price period and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | accepted complete output | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | every accepted coach | matched manufacturing/acceptance period | actual acceptance/weighing site | accepted net mass per unit | calibration/raw complete wheel-axle weighing; signed net corrections; same fit-list |
| cp_body | body | separate atomic exchanges for this process | foreground_record | stock grade/thickness/heat and returns; released cut/form/weld work orders; joining material/gas; kWh meter; alloy-specific offcuts; actual outlet species/flow | Record each actual exchange independently by supplier issue/return, calibrated mass/energy meter or sampled species concentration times measured exhaust flow/time; match work orders and accepted configuration. Keep count and kg separately, technical prefill containment, stock/rework and outgoing transfer destinations. | kg; MJ | per batch/unit/test and complete period | same configuration manufacture and acceptance cycle | actual fabrication/assembly and declared contracted sites | attributable process exchange / accepted units | supplier identity/SDS; meter sampling uncertainty; issue-return-stock and accepted count closure |
| cp_coat | coat | separate atomic exchanges for this process | foreground_record | surface/formulation/SDS/solids; coat issues/returns/retained film; cleaning makeup; energy; residues/wastewater composition; post-control sampled xylene | Record each actual exchange independently by supplier issue/return, calibrated mass/energy meter or sampled species concentration times measured exhaust flow/time; match work orders and accepted configuration. Keep count and kg separately, technical prefill containment, stock/rework and outgoing transfer destinations. | kg; MJ | per batch/unit/test and complete period | same configuration manufacture and acceptance cycle | actual fabrication/assembly and declared contracted sites | attributable process exchange / accepted units | supplier identity/SDS; meter sampling uncertainty; issue-return-stock and accepted count closure |
| cp_running | running | separate atomic exchanges for this process | foreground_record | bogie model/gauge and contained wheel/brake/suspension parts; actual received/installed kg; body-side coupler/valve/reservoir; prefilled versus separately added grease | Record each actual exchange independently by supplier issue/return, calibrated mass/energy meter or sampled species concentration times measured exhaust flow/time; match work orders and accepted configuration. Keep count and kg separately, technical prefill containment, stock/rework and outgoing transfer destinations. | kg; MJ | per batch/unit/test and complete period | same configuration manufacture and acceptance cycle | actual fabrication/assembly and declared contracted sites | attributable process exchange / accepted units | supplier identity/SDS; meter sampling uncertainty; issue-return-stock and accepted count closure |
| cp_outfit | outfit | separate atomic exchanges for this process | foreground_record | seat/door/window/floor/HVAC/auxiliary battery and electrical model fit-list; supplied kg/actual count; contained technical fluids/refrigerant; installation and testing demands | Record each actual exchange independently by supplier issue/return, calibrated mass/energy meter or sampled species concentration times measured exhaust flow/time; match work orders and accepted configuration. Keep count and kg separately, technical prefill containment, stock/rework and outgoing transfer destinations. | kg; MJ | per batch/unit/test and complete period | same configuration manufacture and acceptance cycle | actual fabrication/assembly and declared contracted sites | attributable process exchange / accepted units | supplier identity/SDS; meter sampling uncertainty; issue-return-stock and accepted count closure |
| cp_acceptance | acceptance | separate atomic exchanges for this process | foreground_record | coach serial/design; current tests/endpoints; municipal product water; support electricity; service/test stock corrections; complete-unit calibrated wheel/axle weighing readings and independent mass balance | Record each actual exchange independently by supplier issue/return, calibrated mass/energy meter or sampled species concentration times measured exhaust flow/time; match work orders and accepted configuration. Keep count and kg separately, technical prefill containment, stock/rework and outgoing transfer destinations. | kg; MJ | per batch/unit/test and complete period | same configuration manufacture and acceptance cycle | actual fabrication/assembly and declared contracted sites | attributable process exchange / accepted units | supplier identity/SDS; meter sampling uncertainty; issue-return-stock and accepted count closure |
| cp_shared | all processes | shared service attribution | measured_activity | shared meter totals; work-order hours; actual causal driver; accepted configurations/counts | Retain measured causal driver before dividing attributable demand by matched accepted count; reconcile sum to common totals and actual rework. | kg; MJ | each allocation period | matched reporting period | all served manufacturing configurations | partition demand; attributable amount / accepted units | common meter/work-order closure, driver evidence and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | stainless_sheet; underframe_plate; stainless_wire; shield_argon; body_power; stainless_scrap; steel_scrap; particle_air; primer; topcoat; coat_water; coat_power; paint_residue; wash_waste; xylene_air; bogie; coupler; brake_valve; air_reservoir; grease; running_power; seat; window; insulation; floor; door; hvac; r134a_fill; board; cable; battery; toilet; outfit_power; r134a_air; test_water; test_power; film | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is the attributable measured exchange, corrected for returns, inventories/recovery and rework, divided by matched accepted count. Preserve actual kg or MJ numerator. Count-to-kg, volume-to-kg or concentration conversions need actual same-product/configuration/state physical evidence and uncertainty; no universal coach weight, assumed density, rated power or axle-load limit conversion.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | Obtain actual current accepted coach weighing on calibrated rail scale or traceable complete wheel/axle measuring system appropriate to its actual static/dynamic method. Keep coach serial/configuration, date/instrument/calibration/tare, all wheels/axles once, raw readings and repeat checks, units and method conditions. If readings are forces retain certified force-to-mass interpretation/local measurement conditions rather than assumed constants. Signed corrections remove measured actual excluded stocks and temporary fixtures; independently measured supplied installed body/bogies/interiors/HVAC/fluid masses reconcile full fit-list with uncertainty. Missing originals/corrections block dataset use. Catalogue tare, axle-load limit times axle count, capacity, design/BOM estimate or loaded-service mass cannot replace measured net M. | qlar-wheel-2012; current original calibration/axle observations and signed mass balance |
| quality_delivery | finished_machine | Net configuration includes installed non-powered bogies and complete released fit-list, retained technical grease/refrigerant/electrolyte once. Exclude passengers/luggage, potable water and toilet service stocks, substitute loads, packaging, detached spares and temporary test equipment. Document dry/wet supplied modules, actual tanks and measured corrections; do not assume empty/full water tanks. A delivered separate accessory is outside this output unless explicitly installed and requalified. | released fit-list; supplier containment/prefill; tank/correction records |
| quality_identity | all flows | Verify one supplied grade/route/state per row with actual certificates/SDS. Non-powered supplied bogie scope excludes traction; do not multiply count by catalogue mass. Tempered double-glazed window assembly differs from laminated glass pane; hardwood treated floor differs from bamboo generic plywood. Low-voltage cables need exact property and actual conversion; never relabel Length/Energy Mass. Conditional R134a requires actual installed chemistry; its air flow CAS811-97-2 immediate unspecified air has no public Chinese baseName, retained HFC-134a is not an invented official translation. | supplier certificates/configuration/chemical identity; exact public flow references |
| quality_release | elementary | Collect only actual measured/physically supported post-control release. Match PM size/medium, xylene CAS1330-20-7 versus totalVOC, R134a versus other refrigerants and recovered/retained charge; immediate air unspecified is not indoor/soil/long-term release. No prescribed leakage, fumes or other unavoidable emissions. Expand separately evidenced metals/NO/NO2 or other species, never pool into these cards. | original sampling species/flow/time and controls; refrigerant cylinder/charge recovery balance |
| quality_acceptance | acceptance | Keep current actual released weld/dimensional, bogie/brake/pneumatic, electrical insulation, door/HVAC function, water-leak and complete coach acceptance evidence as applicable. Trial plan identifies static versus towed movement, dates/endpoints/duration/load and actual support energy, rework and net delivery state. Current approvals are only claimed when actually verified. Historical manufacturer features do not establish generic fire/speed/gauge/life thresholds. | current coach-specific released plans/results and support records |
| quality_coverage | dataset | Reconcile actual supplied packages with complete installed BOM and utilities/stock totals. Add separate actual fasteners, brake tubing/hoses, dampers/air springs when not contained, gangway/bellows, interior panels, fire-specific flooring/sealants, passenger information/lighting, sanitation/water tanks and actual packaging/treatment/support modules. Disclose measured/calculated/estimated/missing/excluded/not-applicable status for every route item, with uncertainty. Foreground-only coverage and identity gaps remain explicit until compatible upstream modules and actual physical records exist. | full fit-list, stock/meter/supplier scope closure and evidence-gap disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require exactly1kg accepted complete same configuration and cp_mass actual corrected net weighing with independent mass reconciliation. Declared formula consistency cannot prove physical weighing or methodology approval. |  |
| validation_basis | inventory | Match accepted unit count/configuration, period, numerator units and linked protocol to normalize_mass; reject mixed configurations or fabricated mass/count factors. |  |
| validation_packages | running; outfit | Check non-powered state and one supplier scope for bogies/windows/seats/doors/HVAC/prefill against independently supplied items. Verify actual tempered/laminated construction, chemical charge and grade/property before adopting identities. |  |
| validation_boundary | dataset | Require current original weighing/corrections, released acceptance and fit-list closure, actual utility/support/transport/treatment coverage and all gaps. No passenger-km or complete cradle-to-gate claim from this foreground manufacturing module alone. |  |
| validation_emissions | elementary | Verify chemical/CAS, post-control actual amount, medium/submedium/time and absence/conditional evidence. Elementary resource water is not purchased tap water; treatment-directed wastewater is not direct water emission. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of a new complete locomotive-hauled seated air-conditioned railway passenger coach with welded stainless-steel carbody: actual underframe/body fabrication and surface finishing, supplied non-powered bogie/body mating, interior/brake/electrical/HVAC installation, bounded factory tests and corrected net-mass acceptance. One released model/revision, gauge, seating/door/brake/HVAC and supplied-package configuration defines applicability. Non-stainless portions of the actual underframe are declared separately. This product subset is narrower than CPC49532; it is a manufacturing module, not passenger transport performance. |
| excluded_use | Exclude self-propelled EMU/DMU vehicles, locomotives, powered tramcars, complete trainsets, driving-cab/control coaches, sleeping/dining/mail/luggage-only special coaches, maintenance/service vehicles, parts sold separately, overhaul/rebuild and other body routes such as aluminium FSW. Exclude passenger-km, towing-locomotive manufacture/operating fuel, passenger service energy/water, in-service maintenance, railway infrastructure and end of life. No operational service is supplied by this reference. Actual contracted manufacturing and acceptance movements require explicit endpoints and attributable support inputs; do not silently omit them or claim complete cradle-to-gate coverage. |
| required_metadata | coach identifier/model and released design/revision; locomotive-hauled non-powered state; carbody/underframe grades, sheet thickness, joining and finish; gauge/bogie/axle/brake/coupler configuration; seat/door/window/floor/HVAC/toilet/battery/electrical fit-list; actual HVAC refrigerant/charge and supplier prefill; make-or-buy module contents; technical fluids versus service/test stocks and net delivery state; site/period/accepted count/rework; current acceptance test plan and actual bounded support movements; calibrated complete-unit wheel/axle weighing originals, corrections and measured net M kg; independently measured installed BOM mass and uncertainty; upstream/provider/utility/transport/treatment coverage |
| required_quality_disclosure | Actual configured non-powered unit and package contents; current calibrated net weighing originals/delivery corrections, installed independent mass balance/uncertainty; actual period/sites/count/rework; actual tests/support movements/energy; measured causal allocation with sensitivity; identity and upstream gaps, conditional releases and scientific review state. |
| update_trigger | Body material/joining/finish, non-powered configuration/gauge/bogie/brake, interior/window/HVAC chemistry, make-or-buy scope, suppliers/sites/periods, trial/weighing or delivery-state changes and new physical evidence/identities. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| inka-coach | handbook | PT INKA, Economic Coaches Stainless Steel New Generation, undated official HTML; Passenger Coach description and New Feature table, unpaginated. https://www.inka.co.id/produk/kereta-kelas-ekonomi-stainless-steel-new-generation?locale=en | Specific stainless seated passenger coach case; actual supplier configurations required. No fixed seat count, geometry, gauge, axle load, HVAC capacity, speed or lifetime adopted; tempered double glazing not laminated pane. |
| pib-stainless-2016 | official_guidance | Government of India Ministry of Railways, Stainless Steel Coaches,23November2016, MAINLINE COACHING STOCK, unpaginated. https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=154161 | Historical material-route distinction stainless LHB versus Corten ICF only. No present mandate, weight/capacity ratio, economic factor or lifetime inferred. |
| qlar-wheel-2012 | handbook | Schenck Process/now Qlar, MULTIRAIL WheelLoad: Measure wheel contact forces safely,10September2012; static/dynamic rail-vehicle manufacturing measurement paragraphs, unpaginated. https://www.qlar.com/press-and-media/press-releases/multirail-wheelload-measure-wheel-contact-forces-safely | Historical physical weighing-method example, not a current standard. Actual calibrated all-wheel/axle observation and method-specific mass interpretation, net corrections and independent fit-list evidence required; no catalogue mass adopted. |
