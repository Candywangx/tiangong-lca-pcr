---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.externally-powered-electric-locomotive
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Overhead AC-supplied electric locomotive manufacture

## 1. Scope and Applicability

Manufacture of new complete steel-bodied electric locomotives powered by overhead AC supply with traction transformer, power converter and asynchronous traction motors, from declared stock or bought-in bodies/modules to configuration-specific manufacturing acceptance. This is a narrower route within CPC 49511. Required running-gear/traction/outfit integration and acceptance are distinguished from optional in-house body fabrication, coating and packing. No transport service is supplied by the reference flow.

Exclude DC-only/third-rail supply, multisystem DC-capable variants, diesel-electric/dual-mode/off-wire traction-battery configurations, self-propelled passenger coaches or EMUs, incomplete bodies/bogies, retrofits, repair, resale, operation, maintenance and end of life. Auxiliary control batteries do not expand the boundary to traction batteries. Mass alone does not establish equivalent power, haulage capacity or train-service performance.

Akiem lists an AC-only configuration and asynchronous traction motors. Siemens distinguishes AC, DC and multisystem variants; its historical 2013 brochure identifies optional converter water-cooling and transformer ester. Alstom 2019 provides a DC locomotive multi-site assembly example only. Neither source supplies a universal recipe, actual current mass, lifetime or manufacturing intensity. Foreground alone is receipt-to-release manufacture; complete cradle-to-gate requires disclosed, compatible supplier upstream linkage. Scientific review remains pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.externally-powered-electric-locomotive |
| classification_refs | CPC 3.0 49511; narrower overhead AC-only route; context only |
| covered_products | Manufacture of new complete steel-bodied electric locomotives powered by overhead AC supply with traction transformer, power converter and asynchronous traction motors, from declared stock or bought-in bodies/modules to configuration-specific manufacturing acceptance. This is a narrower route within CPC 49511. Required running-gear/traction/outfit integration and acceptance are distinguished from optional in-house body fabrication, coating and packing. No transport service is supplied by the reference flow. |
| excluded_products | Exclude DC-only/third-rail supply, multisystem DC-capable variants, diesel-electric/dual-mode/off-wire traction-battery configurations, self-propelled passenger coaches or EMUs, incomplete bodies/bogies, retrofits, repair, resale, operation, maintenance and end of life. Auxiliary control batteries do not expand the boundary to traction batteries. Mass alone does not establish equivalent power, haulage capacity or train-service performance. |
| representative_product | One serial/configuration-linked accepted complete overhead AC electric locomotive with measured net M |
| production_route | Conditional body preparation/joining and coating, running gear and AC traction installation, outfitting, manufacturing acceptance, conditional protection |
| market_state | New accepted complete configured locomotive at declared manufacturing gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete configured overhead AC-supplied electric locomotive |
| How much | 1 kg accepted complete net locomotive mass; actual per-unit exchanges normalized with positive measured M |
| How well | Actual vehicle-specific structural, electrical, brake and release requirements with applicable acceptance evidence; no equal-mass haulage equivalence |
| How long or cycle | One manufacture and manufacturing-acceptance cycle; no operating lifetime assumed |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Rail locomotives powered from an external source of electricity `1532ccb7-1703-4ca3-bd21-bfe65dac7ded` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | builder/model/serial and drawing revision; overhead AC voltage/frequency and pantograph configuration; transformer/converter/motor type, rating, cooling and supplier completeness; body steel grade/route; bogie/wheelset/gear/brake configuration; cab/control/auxiliary battery chemistry; actual first-filled fluids and fixed ballast; accepted complete net M in kg from traceable actual weighing records; packaging, persons, loose consumables, sand and temporary test/transport fixture exclusions; physically measured detached integral delivered fittings; acceptance test/gate/site/period; supplier upstream and shared-resource scope |

Declare every qualifier. Public broad finished-locomotive identity is used only for the narrower actual configuration. M includes installed body, running gear, traction/control/auxiliary assemblies, declared service-fluid fills and fixed design ballast. Exclude persons, loose sand/consumables, spares, removable protection and temporary test/transport loads. Separate physically measured integral detached delivery parts from separately sold spares. Catalogue mass, nominal axle load multiplied by axle count or hauled train weight cannot establish M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Retain original current calibrated actual complete-vehicle weighing or documented wheel/axle-load weighing covering all wheels of the same vehicle on the stated level method, with calibration, zero/tare, repeatability, serial/date/operator and uncertainty. Sum actual simultaneously applicable wheel/axle measurements, reconcile accepted configuration, measured fluid fills/fixed ballast and itemized temporary loads. Convert a working-order measurement to declared net scope only using traceable separately measured additions/deductions. No catalogue weight, design axle-load limit, gross/train weight or unexplained acceptance figure substitutes. |
| `unit_conversion` | utilities and chemicals | original measured property | actual row unit | Keep Mass, Volume, energy and count distinct. Meter electricity in kWh; 1 kWh = 3.6 MJ from the verified energy unit group. Convert volume or purchased item count to mass only with actual same-formulation density/temperature or measured same-configuration item mass; retain original data. No assumed fluid density or component mass. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified steel stock, bought-in complete bodies, bogies and traction/auxiliary modules with declared supplier scope |
| starting_condition_role | Foreground receipt-to-accepted manufacturing-gate release |
| product_classification_scope | Complete overhead AC-only electric locomotive, not train service |
| recursive_input_rule | Do not generate the finished locomotive as its own input. Bought-in bodies/modules bypass included operations; actual in-house parts require their own measured component inventories |
| upstream_dataset_requirement | Match actual material/formulation, electrical configuration, module completeness/property, site/period and supplier production; disclose unlinked upstream |
| disclosure | builder/model/serial and drawing revision; overhead AC voltage/frequency and pantograph configuration; transformer/converter/motor type, rating, cooling and supplier completeness; body steel grade/route; bogie/wheelset/gear/brake configuration; cab/control/auxiliary battery chemistry; actual first-filled fluids and fixed ballast; accepted complete net M in kg from traceable actual weighing records; packaging, persons, loose consumables, sand and temporary test/transport fixture exclusions; physically measured detached integral delivered fittings; acceptance test/gate/site/period; supplier upstream and shared-resource scope |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all stages | Include actual manufacture, attributable rework and pre-gate factory acceptance runs. Treat test electricity, sand, support heat and waste separately when present. Exclude commercial hauling, post-gate delivery, fleet maintenance and lifetime regeneration. Include outsourced fabrication/support service only with explicit supplier scope, service unit and attribution; add each service separately. |  |
| `boundary_completeness` | purchased assemblies | Count each received physical assembly with its included constituent parts and fluids once. A complete bogie containing traction motors replaces duplicate motor/wheel/brake inputs. A received complete body replaces its included stock and processing, requiring a separately documented body input. Finish all actual BOM, fluid, gas, solvent, refrigerant, tooling and waste/emission identities before a completed dataset; these candidate cards are not a universal exhaustive bill. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `body_fabrication` | Carbody stock preparation and joining | conditional | Actual in-house steel carbody fabrication. | foreground | one accepted configured locomotive, normalized using M |
| `surface_finish` | Surface preparation and protective coating | conditional | Actual foreground cleaning, blasting or coating. | foreground | one accepted configured locomotive, normalized using M |
| `running_gear` | Bogie and running-gear integration | required | Every complete accepted locomotive. | foreground | one accepted configured locomotive, normalized using M |
| `traction_install` | Overhead AC traction-system installation | required | Covered overhead AC-supplied configuration. | foreground | one accepted configured locomotive, normalized using M |
| `outfitting` | Brake, cab and auxiliary integration | required | Complete declared accepted configuration. | foreground | one accepted configured locomotive, normalized using M |
| `acceptance` | Electrical, mechanical and complete-configuration acceptance | required | Before declared manufacturing release gate. | foreground | one accepted configured locomotive, normalized using M |
| `packing` | Delivery protection and detached integral fittings | conditional | Actual removable protection or delivery-detached integral fittings. | foreground | one accepted configured locomotive, normalized using M |

Body fabrication feeds optional finish and running-gear/traction/outfit integration, followed by complete-configuration acceptance and conditional protection. Stages may overlap; resources are assigned once. All exchange cards are conditional on actual composition/configuration, even within required stages. Each is one physical or chemical exchange; no emission or welding/coating recipe is compulsory.

### Process: Carbody stock preparation and joining (`body_fabrication`)

Cut/form actual certified plate and profiles, assemble underframe/body and roof, join to documented weld procedures and inspect dimensions/joints. A bought-in complete body replaces its contained stock/fabrication. Solid-wire and shielding-gas cards apply only to the actual route; other cutting/welding consumables must be separate.

#### Inputs

##### Product flows

###### Hot-rolled low-alloy steel locomotive carbody plate (`body_plate`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Hot-rolled low-alloy steel locomotive carbody plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_fabrication`
- Sources: `siemens-electric`

###### Hot-rolled steel locomotive underframe structural profile (`body_profile`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Hot-rolled steel locomotive underframe structural profile
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_fabrication`
- Sources: `siemens-electric`

###### Solid low-alloy steel gas-shielded welding wire (`solid_wire`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Solid low-alloy steel gas-shielded welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_fabrication`
- Sources: `siemens-electric`

###### Carbon dioxide (`co2_shield`)

Only pure supplied CO2 for actual Chinese plant welding matching the public route; not argon premix or an assumed fossil elementary release.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_fabrication`
- Sources: `siemens-electric`

###### Argon/carbon-dioxide premixed welding shielding gas (`argon_mix`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Argon/carbon-dioxide premixed welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_fabrication`
- Sources: `siemens-electric`

###### Alternating-current electricity at factory intake (`body_fabrication_electricity`)

Meter actual attributable electricity in kWh and convert 1 kWh = 3.6 MJ within the energy unit group; test import/export and onsite generation remain separately measured.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_fabrication`
- Sources: `siemens-electric`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Weigh segregated untreated cutting offcuts exported after internal reuse; retain recipient and exclude downstream treatment/avoided-production credit.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_fabrication`
- Sources: `siemens-electric`

###### Captured iron-oxide-rich welding filter dust (`weld_dust`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Captured iron-oxide-rich welding filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_body_fabrication`
- Sources: `siemens-electric`

### Process: Surface preparation and protective coating (`surface_finish`)

Record actual coating formulation, application area/layers and preparation. Epoxy base/hardener are conditional formulations, not mandatory technology. Prefinished supplier assemblies replace duplicate coating; captured waste is not an elementary airborne release.

#### Inputs

##### Product flows

###### Process Water (`clean_water`)

Actual purchased treated process water for cleaning, not an environmental water resource or internally recirculated water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `siemens-electric`

###### Spherical cast-steel blasting shot (`abrasive`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Spherical cast-steel blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `siemens-electric`

###### Formulated epoxy rail-vehicle coating base component (`epoxy_base`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Formulated epoxy rail-vehicle coating base component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `siemens-electric`

###### Polyamine rail-vehicle epoxy coating hardener formulation (`epoxy_hardener`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Polyamine rail-vehicle epoxy coating hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `siemens-electric`

###### Alternating-current electricity at factory intake (`surface_finish_electricity`)

Meter actual attributable electricity in kWh and convert 1 kWh = 3.6 MJ within the energy unit group; test import/export and onsite generation remain separately measured.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `siemens-electric`

#### Outputs

##### Waste flows

###### Spent steel blasting shot with removed coating residue (`spent_abrasive`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Spent steel blasting shot with removed coating residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `siemens-electric`

###### Aqueous steel-carbody cleaning effluent transferred for treatment (`clean_effluent`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Aqueous steel-carbody cleaning effluent transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_surface_finish.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish`
- Sources: `siemens-electric`

### Process: Bogie and running-gear integration (`running_gear`)

Install documented bogies/wheelsets, suspension and mechanical drive, align and inspect. A purchased bogie is one physically complete assembly; record whether it includes wheels, motors, gearing and brakes and suppress duplicate constituent inputs. If fabricated in house, replace the assembly with measured component processes and exchanges.

#### Inputs

##### Product flows

###### Complete finished steel locomotive carbody with underframe and roof (`body_received`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Complete finished steel locomotive carbody with underframe and roof
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_running_gear`
- Sources: `siemens-electric`

###### Bogie assembly (`bogie_received`)

Purchased complete locomotive bogie assembly of recorded configuration: declare wheelsets, brakes, traction motors and gearbox inclusions; count included parts once. Public generic bogie identity does not supply manufacturing factors or certify axle layout.

- Selected flow: Bogie assembly `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_running_gear`
- Sources: `siemens-electric`

###### Finished forged-steel locomotive wheelset with axle and wheels (`wheelset`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Finished forged-steel locomotive wheelset with axle and wheels
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_running_gear`
- Sources: `siemens-electric`

###### Lubricating oil (`gear_oil`)

Only separately issued petroleum-derived formulated lubricating oil actually first-filled in the gearbox; record grade and exclude any supplier prefill already in an assembly.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_running_gear`
- Sources: `siemens-electric`

###### Alternating-current electricity at factory intake (`running_gear_electricity`)

Meter actual attributable electricity in kWh and convert 1 kWh = 3.6 MJ within the energy unit group; test import/export and onsite generation remain separately measured.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running_gear.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_running_gear`
- Sources: `siemens-electric`

### Process: Overhead AC traction-system installation (`traction_install`)

Integrate actual pantograph, main breaker, traction transformer, power converter and asynchronous traction motors with documented high-voltage isolation, cooling and control. Bought-in assemblies count prefills once. Historical Siemens ester/water-cooling examples support optional route recognition only; mineral/synthetic ester and cooling variants require actual SDS and dedicated exchanges.

#### Inputs

##### Product flows

###### Complete overhead-wire locomotive pantograph current collector (`pantograph`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Complete overhead-wire locomotive pantograph current collector
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction_install.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traction_install`
- Sources: `siemens-environment`

###### Complete rail-locomotive high-voltage vacuum main circuit breaker (`main_breaker`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Complete rail-locomotive high-voltage vacuum main circuit breaker
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction_install.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traction_install`
- Sources: `siemens-environment`

###### Complete oil-filled overhead-AC locomotive traction transformer (`traction_transformer`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Complete oil-filled overhead-AC locomotive traction transformer
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction_install.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traction_install`
- Sources: `siemens-environment`

###### Complete locomotive IGBT traction converter assembly (`traction_converter`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Complete locomotive IGBT traction converter assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction_install.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traction_install`
- Sources: `siemens-environment`

###### Traction motor (`traction_motor`)

Actual complete asynchronous locomotive traction motor supplied separately; omit when already inside the received bogie. Generic public rail traction motor is narrowed by actual type/power/cooling records; no candidate comment mass-share estimate is adopted.

- Selected flow: Traction motor `c1704402-e49d-43aa-baef-c84209588243`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction_install.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traction_install`
- Sources: `siemens-environment`

###### Synthetic-ester transformer insulating liquid formulation (`ester_fill`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Synthetic-ester transformer insulating liquid formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction_install.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traction_install`
- Sources: `siemens-environment`

###### Inhibited ethylene-glycol/water traction-cooling fluid formulation (`coolant_fill`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Inhibited ethylene-glycol/water traction-cooling fluid formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction_install.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traction_install`
- Sources: `siemens-environment`

###### Alternating-current electricity at factory intake (`traction_install_electricity`)

Meter actual attributable electricity in kWh and convert 1 kWh = 3.6 MJ within the energy unit group; test import/export and onsite generation remain separately measured.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction_install.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_traction_install`
- Sources: `siemens-environment`

### Process: Brake, cab and auxiliary integration (`outfitting`)

Install actual pneumatic braking, compressor, couplers, cab glazing, wiring, control electronics and auxiliary systems. Auxiliary battery is control/start-up support only; traction battery and diesel off-wire power are excluded. Nickel-cadmium and lead-acid are separate conditional chemistry cards. Add every actual omitted cabin fitting, insulation, fastener, hose and control cabinet independently, with supplier completeness.

#### Inputs

##### Product flows

###### Insulated copper rail-locomotive cable harness (`copper_cable`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Insulated copper rail-locomotive cable harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `siemens-electric`

###### Filled lead-acid locomotive auxiliary-control battery (`aux_lead_battery`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Filled lead-acid locomotive auxiliary-control battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `siemens-electric`

###### Filled nickel-cadmium locomotive auxiliary-control battery (`aux_nicd_battery`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Filled nickel-cadmium locomotive auxiliary-control battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `siemens-electric`

###### Complete electric locomotive brake-air compressor unit (`air_compressor`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Complete electric locomotive brake-air compressor unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `siemens-electric`

###### Complete pneumatic locomotive brake-control valve block (`brake_valve`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Complete pneumatic locomotive brake-control valve block
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `siemens-electric`

###### Laminated safety-glass locomotive cab windscreen (`cab_glass`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Laminated safety-glass locomotive cab windscreen
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `siemens-electric`

###### Finished steel locomotive automatic coupler assembly (`coupler`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Finished steel locomotive automatic coupler assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `siemens-electric`

###### Alternating-current electricity at factory intake (`outfitting_electricity`)

Meter actual attributable electricity in kWh and convert 1 kWh = 3.6 MJ within the energy unit group; test import/export and onsite generation remain separately measured.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfitting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outfitting`
- Sources: `siemens-electric`

### Process: Electrical, mechanical and complete-configuration acceptance (`acceptance`)

Trace actual insulation/functional/brake tests and attributable manufacturing acceptance runs and rework. Trial traction electricity is included only before gate; operational train-haulage energy and lifetime regeneration are excluded. Meter actual test import/export separately; no catalogue regeneration saving or mandatory exhaust assumed for this electric locomotive. Optional factory-burner support has distinct fuel and evidenced species cards.

#### Inputs

##### Product flows

###### Dry graded quartz locomotive adhesion sand (`adhesion_sand`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Dry graded quartz locomotive adhesion sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `siemens-electric`

###### Methane-rich fossil pipeline natural gas supplied to factory burner (`burner_gas`)

Only this actual specified physical exchange where present; retain supplier specification/completeness and independently measured net issue or transfer. Demonstrated absence is not_applicable; missing quantity is a gap. Add different actual variants separately.

- Selected flow: Methane-rich fossil pipeline natural gas supplied to factory burner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `siemens-electric`

###### Alternating-current electricity at factory intake (`acceptance_electricity`)

Meter actual attributable electricity in kWh and convert 1 kWh = 3.6 MJ within the energy unit group; test import/export and onsite generation remain separately measured.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `siemens-electric`

#### Outputs

##### Product flows

###### Rail locomotives powered from an external source of electricity (`finished_machine`)

Accepted complete overhead AC-supplied electric locomotive with actual configuration and positive measured net M. Public broad locomotive identity is narrowed by all required qualifiers; no train service or locomotive mass is inferred.

- Selected flow: Rail locomotives powered from an external source of electricity `1532ccb7-1703-4ca3-bd21-bfe65dac7ded`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `siemens-electric`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`burner_co2`)

Only independently evidenced fossil CO2 from attributable optional factory support combustion to air, unspecified, immediate release. Record actual species/method/outlet; no locomotive exhaust or total-NOx substitution.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `siemens-electric`

###### nitrogen monoxide (`burner_no`)

Only independently evidenced NO from attributable optional factory support combustion to air, unspecified, immediate release. Record actual species/method/outlet; no locomotive exhaust or total-NOx substitution.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `siemens-electric`

###### nitrogen dioxide (`burner_no2`)

Only independently evidenced NO2 from attributable optional factory support combustion to air, unspecified, immediate release. Record actual species/method/outlet; no locomotive exhaust or total-NOx substitution.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `siemens-electric`

### Process: Delivery protection and detached integral fittings (`packing`)

Measure removable protection separately and exclude it from M. Detached integral fittings must be separately physically measured and reconciled to the same accepted locomotive configuration. Spares, transport fixtures and post-gate delivery are excluded.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`pe_protection`)

Only actual unlaminated non-adhesive LDPE protective film; independently weigh and exclude from M. Other packaging materials require separate exact cards.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `siemens-electric`

###### Alternating-current electricity at factory intake (`packing_electricity`)

Meter actual attributable electricity in kWh and convert 1 kWh = 3.6 MJ within the energy unit group; test import/export and onsite generation remain separately measured.

- Selected flow: Alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `siemens-electric`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | Separate serial/configuration orders; directly attribute measured issues/returns, meters, work hours, tests and rework first. For inseparable shared utilities use demonstrated measured causal operating time/load or coating area/layer requirement: share = order driver / sum of drivers over all covered orders. Keep period, denominator and causality. Equal vehicle count, nominal traction power or axle load is not an automatic allocation rule. |  |
| `allocation_recovery` | reuse and exported exchanges | Internal stock/water reuse is a transfer, not fresh input or automatic credit. Exported waste retains recipient and measured transfer, without presumed avoided production. Measure actual test electricity imports and exports separately; subtract export only under an explicit matching meter/system-boundary accounting rule with provider and timing, without a lifetime regeneration factor. Reconcile rejected/reworked units and work in progress to accepted output. Separate saleable co-products before reviewed residual allocation. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted complete locomotive net mass | traceable_weighing_record | model; configuration; serial; accepted net mass M; original weighing record/date/method; calibrated instrument; wheel/axle measurements if used; measured fills/fixed ballast; measured additions/deductions; excluded persons/sand/test fixtures/packaging; detached integral parts; signed reconciliation; uncertainty | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | each accepted unit | actual manufacturing/acceptance period | declared manufacturing acceptance gate | accepted net mass per unit | original calibrated physical measurements and signed configuration mass balance |
| `cp_body_fabrication` | body_fabrication | Carbody stock preparation and joining | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh and intake/test import/export; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect serial/configuration-linked drawings, supplier completeness, weighed issues/returns, calibrated meters, work orders and test/acceptance originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_surface_finish` | surface_finish | Surface preparation and protective coating | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh and intake/test import/export; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect serial/configuration-linked drawings, supplier completeness, weighed issues/returns, calibrated meters, work orders and test/acceptance originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_running_gear` | running_gear | Bogie and running-gear integration | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh and intake/test import/export; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect serial/configuration-linked drawings, supplier completeness, weighed issues/returns, calibrated meters, work orders and test/acceptance originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_traction_install` | traction_install | Overhead AC traction-system installation | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh and intake/test import/export; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect serial/configuration-linked drawings, supplier completeness, weighed issues/returns, calibrated meters, work orders and test/acceptance originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_outfitting` | outfitting | Brake, cab and auxiliary integration | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh and intake/test import/export; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect serial/configuration-linked drawings, supplier completeness, weighed issues/returns, calibrated meters, work orders and test/acceptance originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_acceptance` | acceptance | Electrical, mechanical and complete-configuration acceptance | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh and intake/test import/export; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect serial/configuration-linked drawings, supplier completeness, weighed issues/returns, calibrated meters, work orders and test/acceptance originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |
| `cp_packing` | packing | Delivery protection and detached integral fittings | foreground_record | serial/order/configuration; accepted count; exact exchange/formulation/property/unit; issues/returns/stock change; measured component masses; supplier inclusions/prefills; electricity kWh and intake/test import/export; species/outlet; waste recipient; shared driver/denominator; method/calibration | Collect serial/configuration-linked drawings, supplier completeness, weighed issues/returns, calibrated meters, work orders and test/acceptance originals. | actual unit for each row | each order/batch | declared manufacturing period | declared plant and disclosed subcontractors | attributable exchange amount / accepted units | original weighing/meter/supplier receipt/test/transfer records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each compatible configuration, net issues minus recorded returns/inventory change and justified shared allocation give attributable totals; divide by accepted unit count for q_item, then by the same measured net M for q_ref. Keep mass exchanges kg/kg and electricity MJ/kg. For mass-varying compatible serial units use attributable totals divided by summed measured accepted net masses with all serial records retained. Separate different supply voltages, traction/cooling, bogie layout, body/finish and supplier completeness. Unknown amount is a gap, never zero; no traction-power, nominal axle-load or catalogue-mass conversion is inferred.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_provenance using actual current traceable physical weighing and itemized net-configuration reconciliation. Every included wheel/axle belongs to the same unit and state; reconcile measured detachable fittings/fills and ensure no omitted/double-counted weight. Missing original method, calibration, state correction or positive M blocks a complete quantitative dataset and requires review/new measurement. | original weighing and configuration correction ledger |
| `quality_bom` | complete configuration | Reconcile all actual body, bogie/wheelset, traction, brake, auxiliary/cab/control and service-fluid masses to accepted net M. Record purchased assembly inclusions; no duplicated motors in bogies or transformer/cooling prefills. Add actual omitted parts and exchanges before completion. | complete drawings/BOM/receipts/weighing/SDS |
| `quality_balance` | amounts and species | Retain calibration, energy meters, issues/returns/reuse, measured fluid composition/density, waste manifests and actual emission method/species/medium. Define empirical QA limits from applicable measured records or verified comparable sources. No universal manufacturing intensity, vehicle mass or burner emission factor is supplied. | actual meter/stock/mass balances and uncertainty |
| `quality_coverage` | dataset | Disclose period/site/configurations, conditional absence, subcontracting, identity/quantity uncertainty, range gaps and missing supplier upstream. Historical product/production examples do not establish present product certification or this locomotive M. This PCR specifies future record requirements; no actual locomotive weighing or plant inventory has been certified. | coverage and evidence limitations register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require covered complete overhead AC configuration and positive actual net M from cp_mass with mass_record_provenance. Reject nominal axle load, catalogue mass, train weight, operating-service equivalents and missing configuration corrections. Missing actual record evidence requires scientific/data review before a completed quantitative dataset. |  |
| `validate_atomic` | all exchanges | Verify atomic physical/chemical identity, public reference property/unit group, route/composition/state and supplier boundary. Pantograph is not battery foil, traction transformer is not a rated distribution transformer, motor inside bogie is not a second input, ester is not mineral oil, process water is not environmental withdrawal/effluent. Keep unsupported UUID blank. |  |
| `validate_measurement` | all amounts | Verify amount, original unit, collection and q_item/M conversion, same serial/configuration/site/period, accepted count, calibration and justified allocation denominator. Energy, volume and item count never become mass by renaming the property. Unknown is not zero. |  |
| `validate_species` | conditional elementary releases | Require actual attributable factory-support species and medium. Selected fossil CO2, NO and NO2 are immediate air-unspecified releases; verify fossil provenance for CO2. Do not substitute total NOx, N2O, nitrogen/nitrite, biogenic CO2, water/soil or long-term flows. Captured filter dust is a waste; no exhaust is mandatory for this electric traction route. |  |
| `validate_release` | vehicle acceptance | Trace actual structural/electrical/brake test procedures, results, rework and release authorization for the same configuration and applicable jurisdiction when claimed. Historical brochure or other manufacturer/model certificate does not certify this vehicle. No universal voltage, brake threshold or test-energy saving is imposed. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific complete electric locomotive foreground manufacture |
| downstream_use | secondary_dataset; background_dataset after qualified review and declared upstream linkage |
| allowed_use | Manufacturing supply-chain models matching AC traction, complete configuration, measured net scope, supplier boundary, gate/site/period |
| excluded_use | Train-service/lifetime footprint, equal-mass haulage comparison, other power routes, or unsupported complete cradle-to-gate |
| required_metadata | builder/model/serial and drawing revision; overhead AC voltage/frequency and pantograph configuration; transformer/converter/motor type, rating, cooling and supplier completeness; body steel grade/route; bogie/wheelset/gear/brake configuration; cab/control/auxiliary battery chemistry; actual first-filled fluids and fixed ballast; accepted complete net M in kg from traceable actual weighing records; packaging, persons, loose consumables, sand and temporary test/transport fixture exclusions; physically measured detached integral delivered fittings; acceptance test/gate/site/period; supplier upstream and shared-resource scope |
| required_quality_disclosure | Identity/quantity/mass-provenance gaps, uncertainty, absence evidence, full BOM, allocation, acceptance and unlinked upstream |
| update_trigger | Supply/traction/cooling/auxiliary chemistry, body/bogie/finish, supplier completeness, measured M corrections, test boundary and manufacturing site/period changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `siemens-electric` | literature | [Siemens Vectron X AC/DC/MS](https://www.mobility.siemens.com/global/en/portfolio/rail/rolling-stock/locomotives/vectron/ac-dc-ms.html) | Publisher headings and paragraphs on AC/DC/MS variants, separated AC/DC main components and accessible control cables. Product-configuration context only; actual site records define this narrower AC route. No catalogue mass/rating or environmental factor adopted. |
| `siemens-environment` | literature | [Siemens: Locomotives, Sustainability on track (2013)](https://static.dc.siemens.com/mobility/webfeature/green-mobility/files/brochure/brochure-locomotives-sustainability-on-track.pdf) | PDF/printed p.4 optional converter water-cooling and transformer ester; p.8 states features need individual contract confirmation. Historical design example only, not a current universal requirement. No 85 t example, recyclability, lifetime or regenerative-saving percentage adopted. |
| `akiem-vectron` | literature | [Akiem: Vectron BR 193 technical sheet](https://www.akiem.com/wp-content/uploads/2020/09/Fiche-Technique-Vectron-EN.pdf) | PDF p.1 technical table identifies asynchronous traction motors and distinguishes the AC-only B18 column from multisystem columns. Operator/lessor product example only; do not transfer working-order 90 t, motor count, voltage, ratings or homologations to a generic locomotive or net M. |
| `alstom-production` | literature | [Alstom: First Prima M4 for ONCF, 30 December 2019](https://www.alstom.com/sites/alstom.com/files/2019/12/30/20191230_PR_Locos_Morocco_EN_0.pdf) | PDF p.1 manufacturing/assembly and named site responsibilities for bogies, motors, traction components and electronics. Historical DC model is outside the covered AC route: used only to distinguish received modules, assembly and downstream testing/maintenance. No DC voltage, rated power or inferred recipe adopted. |
