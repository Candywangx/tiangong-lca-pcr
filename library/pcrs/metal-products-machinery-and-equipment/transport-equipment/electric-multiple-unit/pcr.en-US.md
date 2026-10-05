---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.electric-multiple-unit
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured overhead-AC electric multiple units

## 1. Scope and Applicability

Manufacturing foreground for one configured new overhead25kV AC passenger electric multiple unit with aluminium double-skin extruded carbodies, controlled friction-stir-welded structural joints, distributed AC traction, motor/trailer bogies and complete permanent passenger/brake/control outfit. Historical Hitachi Class385 and A-Train originals establish an example architecture, not a universal recipe, actual current model mass or factory inventory. Declare the actual trainset formation and car order; the three- and four-car source variants are separate configurations. Existing aluminium semi-product, electrical-motor and track-material PCRs concern upstream stocks/components or infrastructure; they do not cover complete trainset manufacturing integration and net acceptance mass. No existing material complete-EMU record was identified in the worktree manifest scan. Diesel/bi-mode/battery/fuel-cell propulsion, steel-body routes, trams, locomotives, independent unpowered coaches, freight/maintenance vehicles, incomplete cars, repair/refurbishment and separately supplied parts fall outside this selected method. Passenger transport, passenger-km, service traction, track/power infrastructure, lifetime, maintenance and disposal are excluded. Candidate authored methodology awaits independent scientific review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.electric-multiple-unit |
| classification_refs | CPC 3.0 49520; narrower semantic candidate; no accepted mapping |
| covered_products | Complete configured overhead25kV AC aluminium passenger EMU trainset |
| excluded_products | Locomotives, other propulsion/body routes, trams, freight/service/maintenance vehicles, loose or unpowered cars, use/repair |
| representative_product | Class385 historical AC double-skin example; four-car2M2T or separately declared three-car variant; actual accepted configuration governs |
| production_route | Stock machining/FSW; conditional finish; running-gear/electrical/outfit integration; formed trainset tests and acceptance |
| market_state | New complete accepted configured trainset at declared manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of a complete declared passenger EMU trainset |
| How much | 1 kg accepted net complete unit; an accepted trainset has actually verified M kg |
| How well | Meet actual controlled structural/joint, dimensional, brake/electrical/door/control and trainset acceptance plan. Preserve actual criteria, inspection/NDT and test results; no invented acceptance tolerance or statutory certification |
| How long or cycle | One manufacturing delivery; no trip/passenger-km or lifetime unit |
| reference_flow_link | `finished_trainset` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Self-propelled railway or tramway coaches, vans and trucks (except maintenance or service vehicles) `139733ac-97af-4ac2-a637-14daa557b398` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Trainset/car IDs and ordered formation; actual motor/trailer and supplier inclusion scope; gauge/AC voltage/traction architecture; carbody alloy/temper/section and approved joint route; BOM/drawing revision; permanent interior/brake/HVAC/control configuration; actual precharges/retained fluids; factory site/period/test plan; current static wheel/axle weighing method, calibration/raw readings and trainset corrections; signed positive net M kg; excluded people/cargo/service water/ballast/packaging; upstream/transport/waste links |

Declare all qualifiers in dataset metadata or equivalent notes. Public rolling-stock product identity is broader than this method and supplies neither car count nor engineering performance. A kg manufacturing reference does not imply equal passenger transport function.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `electric_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Measure actual energy at each distinct supply interface.1kWh=3.6MJ; normalize MJ per trainset by M. LV factory supply and25kV traction tests stay separate. |

## 5. System Boundary

Receipt of certified unjoined aluminium stocks and supplied finished components starts this foreground; complete configured manufacturing acceptance ends it. Include actual local cutting/machining, fixture-controlled FSW and approved additional joining/inspection, conditional finishing, bogie/motor and electrical/outfit assembly, rework, formation and performed factory tests. Local fusion welds require distinct actual alloy filler and shielding-gas cards if used; FSW does not universally consume either. Approved joining and tool logs determine consumptions. Purchased bogies, motors, converters, doors and HVAC are measured at their actual supplied boundary with internals and precharges counted once. Buying finished carbodies changes this local fabrication route and requires a separate declared make-or-buy model, not simultaneous finished-body and stock inputs. Actual additional brake plumbing, battery, floor/insulation, adhesive, safety/electronic equipment, coolant/refrigerant, lubrication, compressed air, heating, packaging and transports must each be expanded as one specific exchange before claiming complete foreground coverage. Upstream extraction/component manufacture/inbound transport and receiving waste treatment are covered only by matched separately linked datasets; no complete cradle-to-gate claim without those links. Customer operation, infrastructure, maintenance and disposal stay outside.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual unjoined extrusion/sheet and independently scoped purchased parts at plant |
| starting_condition_role | boundary_abstraction |
| product_classification_scope | Configured complete overhead-AC aluminium passenger trainset; narrower CPC49520 |
| recursive_input_rule | Link actual supplied assembly once; match supplier inclusion and do not recursively duplicate internal stocks/components |
| upstream_dataset_requirement | Match alloy/form/temper, component design/property/charges, voltage/supplier geography/period and receiver route |
| disclosure | Manufacturing foreground only; disclose actual make-or-buy, missing BOM/mass/inventory and upstream links |
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_supply` | purchased assemblies | Document each receipt gate and retained charge; remove included constituent receipts and supplier operations from local foreground. Expand actual locally manufactured subassemblies with their own atomic stocks and operations. |  |
| `boundary_tests` | acceptance | Include actual factory static/function and performed energized/yard tests with measured imports, returns, consumables and waste. Keep return energy as a separate measured exchange; actual additional interfaces need specific cards. No operating-life proxy or automatic regeneration credit. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `body` | Aluminium carbody machining and joining | required | Approved extrusion cutting/machining, fixture-controlled FSW, actual additional joints and inspection | foreground | same accepted trainset; q_item / M |
| `finish` | Conditional local coating and finishing | conditional | Only actual documented local finish; unpainted carbody is permissible | foreground | same accepted trainset; q_item / M |
| `running` | Bogie and traction-motor installation | required | Install declared powered/trailer running gear with motor inclusion reconciled | foreground | same accepted trainset; q_item / M |
| `electrical` | High-voltage traction and low-voltage control integration | required | Actual pantograph/transformer/converter/harness/cab systems and electrical checks | foreground | same accepted trainset; q_item / M |
| `outfit` | Brake passenger-cabin and auxiliary-system outfitting | required | Actual complete brake/doors/windows/seating/HVAC/coupler/interior configuration | foreground | same accepted trainset; q_item / M |
| `acceptance` | Trainset formation factory tests and net-mass acceptance | required | Identify every car, complete integration, actual static/function and conditional energized/yard tests, physical net-M record | final_product | finished_trainset; 1 kg |

### Process: Aluminium carbody machining and joining (`body`)

#### Inputs

##### Product flows

###### Aluminium-alloy hollow double-skin extrusion (`hollow_profile`)

One actual certified aluminium-alloy hollow extrusion for double-skin carbody construction, delivered unjoined at plant. Declare alloy, temper, section, finish, supplier and measured receipts/returns/offcuts; public generic structural extrusion identity supplies no alloy, recycled fraction or mass factor. Separate any different stock grade/design.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Aluminium-alloy sheet thicker than 0.2 mm (`aluminium_sheet`)

Only actual local sheet parts in the approved carbody BOM, certified alloy/temper/thickness above0.2mm. Weigh net issues/returns and actual retention, not presumed sheet content. A purchased finished cab structure replaces its included sheet and supplier machining.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Finished tool-steel friction-stir-welding pin and shoulder tool (`fsw_tool`)

Only if the actual approved welding tool is this single tool-steel pin/shoulder design. Attribute measured consumed tool mass or documented purchased tool service to this order using actual weld-length/tool-use logs, replacement and recovery records. No invented tool lifetime, steel grade or one tool per train. Other tooling needs its own card. FSW does not imply shielding gas or filler wire.

- Selected flow: Finished tool-steel friction-stir-welding pin and shoulder tool
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_body`)

Actual attributed stage grid electricity below1kV at the user boundary; adopted identity requires a matching CN grid-average supplier, and other provider geography/voltage requires a separately verified flow, including tool drives, idle and rework within the actual stage. Meter kWh and convert to MJ; allocate only with demonstrated causal records. This low-voltage identity is not the train’s25kV traction supply and does not represent equipment ratings.

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

###### Segregated clean aluminium-alloy manufacturing offcut (`aluminium_offcut`)

Actual segregated uncoated dry extrusion/sheet offcut of one declared alloy stream leaving the plant to the named receiver; weigh net shipment and reconcile stock retention/internal reuse. Public scrap description covers new manufacturing scrap, but synonyms also mention cast/contaminated scrap: match the actual clean new stream and receiver, not an assumed recycling yield. Separate wet swarf/cutting fluid. No avoided-primary-metal credit.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
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

###### Immediate airborne particulate matter without a size fraction (`body_air_dust`)

Only an observed quantified residual atmospheric release from actual cutting/machining/join preparation after installed extraction/control. Use sampled flow/concentration over actual operating time and uncertainty; capture inside a filter is waste, not atmospheric release. The selected elementary identity requires air, unspecified subcompartment and unspecified particle size; measured PM2.5/PM10 need their own specific flow. No universal emission from FSW is asserted.

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

### Process: Conditional local coating and finishing (`finish`)

#### Inputs

##### Product flows

###### Uncured two-component epoxy primer formulation (`epoxy_primer`)

Only when the current approved finishing plan actually requires this single mixed epoxy primer formulation. Weigh supplied component issues/returns and mix quantity, preserving actual resin/hardener/solvent inclusions and cured retention. No mandatory whole-body paint inferred from A-Train: the historical source expressly describes carbodies not requiring paint. Different finishes need separate cards.

- Selected flow: Uncured two-component epoxy primer formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### Uncured two-component polyurethane topcoat formulation (`polyurethane_topcoat`)

Only where the actual finishing plan uses this one supplier-certified mixed polyurethane formulation. Record component/mix mass, solids and volatile constituents, application and recovered residue; do not count included solvent twice. Paint chemistry, dose and atmospheric emissions cannot be inferred from train livery photographs.

- Selected flow: Uncured two-component polyurethane topcoat formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_finish`)

Actual attributed stage grid electricity below1kV at the user boundary; adopted identity requires a matching CN grid-average supplier, and other provider geography/voltage requires a separately verified flow, including tool drives, idle and rework within the actual stage. Meter kWh and convert to MJ; allocate only with demonstrated causal records. This low-voltage identity is not the train’s25kV traction supply and does not represent equipment ratings.

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

###### Contained uncured mixed epoxy-primer residue (`epoxy_residue`)

Only actual unused mixed epoxy-primer residue exported from the conditional finishing operation. Weigh wet residue excluding container, retain formulation/solvent state and receiver. It is not a VOC emission, polyurethane residue, cured sanding dust or cleaning wastewater; these need separate cards when observed.

- Selected flow: Waste paint `584e3dfa-7bc4-47a1-b77e-d68094d1cc7c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Bogie and traction-motor installation (`running`)

#### Inputs

##### Product flows

###### Supplied mechanical powered bogie assembly without traction motors (`powered_bogie`)

One actual rail bogie design delivered at plant, with supplier included wheelsets, suspension, gear, braking equipment and lubricant scope recorded. Powered-bogie card excludes separately received traction motors; trailer-bogie card has no propulsion motor. Measure each supplied net kg and installed count/serial. If a powered bogie arrives with motors installed, replace these split receipts with its complete supplied assembly, removing duplicate motor/gear/brake/fluids. No nominal bogie kg or motor/trailer mass ratio.

- Selected flow: Bogie assembly `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Supplied complete trailer bogie assembly (`trailer_bogie`)

One actual rail bogie design delivered at plant, with supplier included wheelsets, suspension, gear, braking equipment and lubricant scope recorded. Powered-bogie card excludes separately received traction motors; trailer-bogie card has no propulsion motor. Measure each supplied net kg and installed count/serial. If a powered bogie arrives with motors installed, replace these split receipts with its complete supplied assembly, removing duplicate motor/gear/brake/fluids. No nominal bogie kg or motor/trailer mass ratio.

- Selected flow: Bogie assembly `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Finished railway AC traction motor (`traction_motor`)

Actual supplied rail AC traction motor matching the selected train drive design; weigh installed supplied net electric motor mass. Count and serial are traceability fields. Include supplied internals once and exclude motors already contained in bogie receipts. Reject the public comment’s expert-estimated mass share as a quantity source; use actual motor kg, not a percentage of M.

- Selected flow: Traction motor `c1704402-e49d-43aa-baef-c84209588243`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_running`)

Actual attributed stage grid electricity below1kV at the user boundary; adopted identity requires a matching CN grid-average supplier, and other provider geography/voltage requires a separately verified flow, including tool drives, idle and rework within the actual stage. Meter kWh and convert to MJ; allocate only with demonstrated causal records. This low-voltage identity is not the train’s25kV traction supply and does not represent equipment ratings.

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

### Process: High-voltage traction and low-voltage control integration (`electrical`)

#### Inputs

##### Product flows

###### Complete 25 kV AC railway traction transformer (`traction_transformer`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete 25 kV AC railway traction transformer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete railway IGBT traction converter and inverter cabinet (`traction_converter`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete railway IGBT traction converter and inverter cabinet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete railway auxiliary power supply converter (`auxiliary_converter`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete railway auxiliary power supply converter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete railway overhead-contact pantograph (`pantograph`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete railway overhead-contact pantograph
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Insulated copper 25 kV railway traction cable (`traction_cable`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Insulated copper 25 kV railway traction cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete low-voltage insulated copper train control wiring harness (`control_harness`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete low-voltage insulated copper train control wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_electrical`)

Actual attributed stage grid electricity below1kV at the user boundary; adopted identity requires a matching CN grid-average supplier, and other provider geography/voltage requires a separately verified flow, including tool drives, idle and rework within the actual stage. Meter kWh and convert to MJ; allocate only with demonstrated causal records. This low-voltage identity is not the train’s25kV traction supply and does not represent equipment ratings.

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

### Process: Brake passenger-cabin and auxiliary-system outfitting (`outfit`)

#### Inputs

##### Product flows

###### Complete railway pneumatic-brake air compressor module (`brake_compressor`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete railway pneumatic-brake air compressor module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete electrically actuated railway pneumatic-brake controller (`brake_controller`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete electrically actuated railway pneumatic-brake controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete automatic railway end coupler with gangway interface (`coupler`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete automatic railway end coupler with gangway interface
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete exterior sliding passenger door module (`passenger_door`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete exterior sliding passenger door module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete fixed railway passenger seat assembly (`seat`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete fixed railway passenger seat assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete railway heater and chiller air-conditioning module (`hvac`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete railway heater and chiller air-conditioning module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete train driving-cab control desk (`cab_control`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Complete train driving-cab control desk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Finished aluminium passenger-cabin lining panel (`interior_panel`)

One actual approved supplied component design and completeness, measured net at receipt and installation. Retain supplier BOM, included hardware/electronics/finish and retained working-fluid charges; count/serial and car position permit tracing. Use the actual train’s make-or-buy drawing and acceptance criteria. Purchased complete modules replace their included constituents; local fabrication expands specific stocks and operations. The interior panel card applies only to an actual certified aluminium panel; other materials/designs have separate cards. No implied generic railway certification or catalogue mass.

- Selected flow: Finished aluminium passenger-cabin lining panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### Complete bonded laminated-glass railway window unit (`window`)

One actual sealed window unit including frame/seal as supplied, measured net kg and separate drawing dimensions. Public78005a08 describes laminated glass sheet with Area reference property, not the complete framed rail window. Do not replace public Area with Mass or assume kg/m2. If supplied glass alone is modelled separately, retain measured m2 and independently measured supplied kg/configuration for reconciliation, with explicit thickness/interlayer and joining cards.

- Selected flow: Complete bonded laminated-glass railway window unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_outfit`)

Actual attributed stage grid electricity below1kV at the user boundary; adopted identity requires a matching CN grid-average supplier, and other provider geography/voltage requires a separately verified flow, including tool drives, idle and rework within the actual stage. Meter kWh and convert to MJ; allocate only with demonstrated causal records. This low-voltage identity is not the train’s25kV traction supply and does not represent equipment ratings.

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

### Process: Trainset formation factory tests and net-mass acceptance (`acceptance`)

#### Inputs

##### Product flows

###### User-side low-voltage AC factory electricity (`electricity_acceptance`)

Actual attributed stage grid electricity below1kV at the user boundary; adopted identity requires a matching CN grid-average supplier, and other provider geography/voltage requires a separately verified flow, including tool drives, idle and rework within the actual stage. Meter kWh and convert to MJ; allocate only with demonstrated causal records. This low-voltage identity is not the train’s25kV traction supply and does not represent equipment ratings.

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

###### Single-phase 25 kV AC railway traction test electricity (`traction_test_energy`)

Only actual energized traction/function or yard-running acceptance tests for this train. Meter gross imported and separately measured returned electricity at the actual25kV boundary, including actual losses between meters; disclose supply conversion separately. The adopted1–35kV public energy identity contains25kV but requires an actual matching CN grid-average user-side supply and verified single-phase traction interface. Conversion equipment/provider links must match the actual phase and losses; a UK or other regional provider is not silently replaced by CN. Do not subtract theoretical regenerative fractions or customer operation. If testing uses another supply interface, replace this specific card with the actual interface and its matched upstream link.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Potable municipal water for actual factory leak test (`test_water`)

Conditional on an actually performed water-spray/leak test using municipal drinking-quality supply. Measure net supply and recovery separately as kg; volume measurements require actual supported density and temperature, not a default. No service toilet-tank fill is included in net M. Resource abstraction and contaminated discharge are separate exchanges.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete configured overhead-AC electric multiple unit (`finished_trainset`)

One accepted complete configured trainset, all identified motor/trailer cars, permanent installed running/traction/brake/control/interior equipment and retained working fluids included once; no passengers/cargo/service water/test ballast/packaging. Its manufacture is normalized to1kg net M. Public broad rolling-stock product identity is narrowed by explicit AC passenger-trainset configuration; maintenance vehicles, independent unpowered coaches and locomotive traction are excluded.

- Selected flow: Self-propelled railway or tramway coaches, vans and trucks (except maintenance or service vehicles) `139733ac-97af-4ac2-a637-14daa557b398`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Collected spent water-spray leak-test water (`test_wastewater`)

Only actual separately collected test water sent to an identified technosphere sewer/treatment receiver; retain actual contaminant analysis, temperature and mass. Do not classify it as tap water, groundwater extraction or elementary freshwater discharge. Actual release to a natural medium requires separate substance- and compartment-specific cards.

- Selected flow: Collected spent water-spray leak-test water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared manufacturing | Separate order/design/car position and meter each stage before allocation. Use actual weld-machine occupancy, recorded machine energy/time, finishing booth occupancy and performed test time only where a causal relationship is demonstrated. Retain idle/rework and rejected units in the period balance. Motor/trailer cars differ; neither car count nor kg alone is a universal driver. Report totals, accepted denominator and allocation sensitivity; no prescribed shares. |  |
| `allocation_recovery` | single waste streams | Record internal stock reuse/recovery separately from measured receiver exports, maintaining one balance. For actual valuable co-products first use subdivision/causal relations; disclose explicit alternative allocation sensitivity if unavailable. Do not silently apply price allocation, avoided virgin aluminium credit, recovered-paint credit or theoretical regenerative-energy credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | finished_trainset | controlled acceptance mass | configuration; accepted net mass M; trainset/car IDs/order; raw static wheel/axle loads; calibration; actual state and measured corrections; signed M kg; accepted counts | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted trainset/configuration | same actual declared manufacturing reporting period; include rejected/reworked units | declared manufacturing site and identified trainset/order | accepted net mass per unit | current calibrated physical records plus survey_provenance and net_configuration |
| `cp_stock` | body; finish | specific stocks/chemicals/tools | net material issue record | lot/formulation/alloy/temper; net receipt/issue/return kg; stock change; retention/offcut; tool use; accepted same-configuration units | Weigh net receipts, issues and returns by one specific stock/chemical and order. Record mix constituents and recovered material separately; reconcile actual consumption and accepted counts. Track attributable tooling by actual usage, not nominal lifetime. | kg | each lot/order/stage | same actual declared manufacturing reporting period; include rejected/reworked units | declared manufacturing site and identified trainset/order | attributable net material kg / accepted units of the same configuration | calibrated scale/lot/SDS/weld and coating plan; inventory and recovery balance |
| `cp_parts` | running; electrical; outfit | single supplied component | installed supplied mass record | part/car/serial and count; supplier inclusion; measured supplied net kg; retained charges; returns; accepted trainsets | Measure each supplied installed component net kg independently from whole-trainset M. Retain supplier BOM and count/serial; subtract packaging and returns, retain supplied working-fluid scope once. Assembly receipts replace their included constituents. | kg | each receipt/installation/configuration | same actual declared manufacturing reporting period; include rejected/reworked units | declared manufacturing site and identified trainset/order | net installed supplied kg / accepted units of the same configuration | original receipt weights/tare/BOM/charge certificates and car-position reconciliation |
| `cp_energy` | all processes | specific voltage-interface electricity | metered energy record | interface/voltage/provider; meter readings kWh; gross imports/returns; time/idle/rework; causal allocation; accepted units | Read actual stage meters and test-boundary import/return meters. Convert measured kWh using1kWh=3.6MJ, keeping interfaces separate; document shared driver totals and meter losses. Do not infer use from installed ratings or regeneration theory. | MJ | each stage and actual test | same actual declared manufacturing reporting period; include rejected/reworked units | declared manufacturing site and identified trainset/order | attributable measured MJ / accepted units of the same configuration | meter calibration/raw logs, voltage topology and allocation ledger |
| `cp_water` | acceptance | municipal test water | test-water record | supply quality; supplied/recovered kg; actual density/temperature if measured volume; test times; accepted units | Measure actual test water supply and separate reuse/discharge; convert volume to mass only with actual supported density at recorded conditions. | kg | each performed water test | same actual declared manufacturing reporting period; include rejected/reworked units | declared manufacturing site and identified trainset/order | net supplied water kg / accepted units of the same configuration | meter/scale calibration, supply quality and water balance |
| `cp_waste` | body; finish; acceptance | single receiver-bound waste | weighed receiver shipment | single waste composition/state; gross/tare/net kg; internal reuse; receiver route; stock change; accepted units | Weigh each segregated actual waste shipment excluding container; retain state/analysis and receiver record, reconcile source process stock and reuse. Captured dust, paint residue and collected test water stay separate from emissions. | kg | each shipment/reporting period | same actual declared manufacturing reporting period; include rejected/reworked units | declared manufacturing site and identified trainset/order | net exported waste kg / accepted units of the same configuration | scale/tare/receiver tickets and substance balances |
| `cp_emission` | body | single residual air release | sampled atmospheric release | substance/particle fraction/medium; sample concentration/flow/time; controls; detection limit; uncertainty; accepted units | Quantify actual post-control atmospheric residual from matched sampling and operation duration; reconcile collection equipment and reject default emission factors. Absence/not measured/below-detection are distinct documented states, not automatic zero. | kg | each source/control/route change and representative period | same actual declared manufacturing reporting period; include rejected/reworked units | declared manufacturing site and identified trainset/order | actual released kg / accepted units of the same configuration | sampling calibration/lab report/control and uncertainty records |
| `cp_configuration` | all processes | complete trainset scope | as-built and acceptance record | ordered formation/car IDs; full BOM; alloy/joint/finish route; supplier included parts/charges; actual tests; delivery and exclusions | Trace actual controlled as-built BOM, stage procedures, deviations and test results by car and ordered trainset. Record supplier make-or-buy inclusions and all mass-state corrections. Historical specifications do not substitute for current acceptance records. | kg | each configuration and accepted trainset | same actual declared manufacturing reporting period; include rejected/reworked units | declared manufacturing site and identified trainset/order | qualifiers accompany each same-configuration accepted unit | signed drawing/BOM/route/test/deviation and physical-state evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | order records | For one same configuration, attribute actual period exchange totals to accepted finished trainsets using documented causal records. Compute q_item from attributed exchange / accepted trainsets, retain rework/reject burden and all intermediate quantities. Never pool three/four-car or motor/trailer variants without documented weighted configuration model. | cp_stock; cp_parts; cp_energy; cp_mass | q_item |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `survey_provenance` | cp_mass | Controlled acceptance M must originate in the current actual calibrated static rail wheel/axle weighing inspection for every identified car of the complete same-configuration trainset, with original readings, date, zero/tare/calibration, track and coupling/support conditions and uncertainty. Sum distinct verified wheel/axle mass readings only once; if sensors report force in N, preserve the actual metrological force-to-mass conversion and local calibration basis rather than assuming a universal gravity value. Successive measurements must control load redistribution and configuration changes; demonstrate closure against complete-car/trainset weights and an independent supplied-component/retention balance. Dynamic axle limits, catalogue weights, tare labels without originals, payload capacities or arbitrary four-wheel totals cannot substitute. The2012 Schenck article illustrates static wheel/wheelset measuring equipment; it provides neither current records nor a universal whole-trainset protocol or legal mandate. If the actual measurement and balance cannot be established, retain a scientific/measurement gap and do not claim an observed physically complete dataset. | schenck-weight-2012; cp_mass; cp_parts; cp_configuration |
| `net_configuration` | accepted trainset | M includes every accepted declared car and permanent installed mechanical/electrical/interior equipment, pantograph/couplers and retained working lubricants/coolants/refrigerant charges once. Record actual original as-weighed state and separately measured signed add/remove corrections for the same trainset. Exclude passengers/crew/cargo, service water/sewage, temporary test ballast, temporary supply leads, lifting/support fixtures and packaging. Separate supplied assembly mass and included precharge from local fluid top-ups: no double receipt or mass. Independently measured component mass must reconcile with whole-trainset M; vehicle count times a catalogue weight is invalid. | cp_mass; cp_parts; cp_configuration |
| `quality_coverage` | all exchanges | Current full as-built BOM, alloy/joint/finish procedures and supplied inclusions determine actual exchanges. Expand all additional specific stocks, weld/fusion consumables, floor/insulation/adhesive, battery/controls/safety, working fluid, packaging, returned test energy, transport and receiver exchanges before physical-completeness claims. Verify material/energy/water and emission/waste balances, detection limits, uncertainty and representative site/period; actual trial/rework burden remains. No universal yields, paint need, tool life, motor mass share, fluid fill or service-life values. | cp_configuration; cp_stock; cp_parts; cp_energy; cp_waste; cp_emission |
| `quality_evidence_limits` | external sources | Hitachi2017 Class385 pp.104–106 supports historical AC trainset architecture/traction/controls/outfit;2020 article p.53 (header764–765) supports general A-Train double-skin extrusion/FSW without mandatory paint. These are not current production records, universal exact recipes, actual mass or regulatory conformity. Schenck September2012 is historical weighing-method evidence only; its standards claims are not adopted as current requirements. Missing current factory/weighing/supply records remain explicit scientific-review needs. | hitachi-class385-2017; hitachi-atrain-2020; schenck-weight-2012 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify complete ordered formation, positive physical M kg, current original cp_mass evidence and independent survey_provenance/net_configuration. Preserve public reference property/unit and supplied scope; reference product equals finished_trainset selected flow. No mixed configurations, nominal weight or duplicate precharge. |  |
| `validation_route` | all processes | Check certified stocks, approved fixture/joint/FSW records and actual alternative joins, local finish conditions, supplied powered/trailer bogie/motor inclusion, high-voltage supply, full trainset outfitting and actual tests. Reconcile each stage’s receipts/retention/rework/exports and test imports/returns; missing inventory or links prevents complete-boundary claims. |  |
| `validation_identity` | all flow rows | Verify product/substance/type and actual referenceToReferenceFlowProperty, property/unit group, voltage/route/concentration/state/medium, official bilingual name and actual supplier gate. Industrial-robot drive and10/0.4kV transformer are not railway traction modules;35–330kV is not25kV. Glass Area and cable Length must not be rewritten to Mass; legitimate measured conversions require actual physical records. Captured dust/wastewater are not elementary air/water resources. Unresolved identities stay declared by exact row_id. |  |
| `validation_claims` | dataset claims | PCR mechanical pass is not scientific approval, observed factory completeness, railway legal/type approval, passenger capacity equivalence or lifetime validation. Require actual configuration/BOM/raw weights/supply/test/matched links and disclose all remaining gaps before broader dataset claims. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured aluminium overhead-AC passenger EMU manufacturing foreground; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete configured trainset manufacturing scaled by actual net M, with independently matched upstream/supply/transport/receiver links disclosed |
| excluded_use | Passenger-km/service traction, infrastructure, other propulsion/body routes, parts/repair/maintenance/lifetime/disposal and methodological approval |
| required_metadata | Full ordered formation/car IDs, BOM/joint/FSW/finish route, traction voltage and supply gates, actual delivered components/charges, site/period/test plan, raw calibrated static wheel/axle weights and measured state corrections, accepted positive M and independent component balance, allocation and matched links |
| required_quality_disclosure | Identity/configuration/BOM/measurement/link gaps; source vintage/applicability; rework/rejects/internal recovery/exports; uncertainty/detection limits and allocation sensitivity |
| update_trigger | Formation/carbody material/joint/finish, motor/bogie/traction/outfit/supplier inclusion, static weighing/delivery state, manufacturing site/period or actual test/energy-interface change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| hitachi-class385-2017 | handbook | Hitachi, Development of Class385 Semi-customised/Standard Commuter Rolling Stock for Global Markets, Hitachi Review Vol66 No2(2017), printed pp.104–106, physical PDFpp.3–5. https://www.hitachi.com/content/dam/hitachi/global/en/insights/media/hitachihyoron/2017/r2017_02/18-24_R1-02.pdf | Historical25kV AC three/four-car aluminium double-skin architecture, motor/trailer traction, pneumatic brakes, wiring and passenger outfit. No catalogue mass, motor percentage, operating factor or current service claim adopted. |
| hitachi-atrain-2020 | handbook | Hitachi, Hitachi’s Globe-spanning Railway Business and its Development Strategy, Hitachi Review Vol69 No6(2020), printed header764–765/article p.53, physical PDFp.3, section3.1. https://www.hitachi.com/content/dam/hitachi/global/en/insights/media/hitachihyoron/2020/r2020_06/06a01.pdf | Historical general A-Train hollow double-skin aluminium extrusion and FSW manufacturing route; carbody paint is not universally necessary. No universal current factory inventory or lifecycle reduction factor. |
| schenck-weight-2012 | handbook | Schenck Process, MULTIRAIL WheelLoad: Measure wheel contact forces safely, Darmstadt September10 2012, retained Qlar publisher article, static/dynamic measurement paragraphs. https://www.qlar.com/press-and-media/press-releases/multirail-wheelload-measure-wheel-contact-forces-safely | Historical railway-manufacturing static wheel/wheelset contact-force measurement equipment example. Not actual trainset M, a universal whole-trainset protocol, current standard mandate, calibration value or legal conformity. |
