---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.excavator-boom-assembly
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of independently delivered welded steel excavator boom assemblies

## 1. Scope and Applicability

This candidate authored methodology covers manufacture of a new independently accepted passive welded steel box-section main boom for a hydraulic earthmoving excavator. The declared unit transfers load through the excavator-frame, stick and cylinder mounting interfaces. Its complete drawing-specific supply scope comprises the welded box and declared fitted pivot bosses/bushings/permanently retained pins; supply completeness is verified, not inferred from catalogue wording. The representative route starts at purchased plate and prepared boss/part supply gates, includes mechanical cutting, conditional forming, fit-up, controlled solid-wire arc welding, interface machining, bushing installation and final net-mass/acceptance before coating and transport packing. Other welding, cutting or finishing routes need actual additional exchanges and evidence before applying the dataset.

A machinery-specific methodology is needed to reconcile welded-box yield and rework with bore alignment, separate frame/stick/cylinder interfaces, drawing revision and installed-versus-loose pivot parts at an independent boom gate. Existing43580 bucket methodology covers a digging receptacle, not a boom. Existing whole-excavator manufacture has a complete propelled machine reference and excludes independently supplied attachments;42190 structural-metal methodology excludes machinery-specific assemblies classified elsewhere. No equivalent material boom PCR was identified in the current manifest/scope review. This narrower44461 context creates no accepted mapping.

Exclude bucket, stick, whole excavator, other crane booms, hydraulic cylinders, hoses, complete hydraulic power groups, repair/remanufacturing services, excavating performance, service life, site fuel and disposal after use. Later coating, assembly into the excavator and use belong to separate disclosed stages. Manufacturer construction examples support box/weld/interface distinctions only; they provide no plant inventory, mandatory steel grade, stress or heat-treatment rule. Independent scientific review remains pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.excavator-boom-assembly |
| classification_refs | CPC 3.0:44461; narrower;43580 bucket excluded |
| covered_products | New independently accepted welded steel hydraulic-excavator main box boom, one declared drawing/configuration |
| excluded_products | Buckets, sticks, whole machines, crane booms, cylinders, hoses, power groups, repairs and unrelated steel structures |
| representative_product | Uncoated accepted steel box boom with declared fitted bushings, pins only if permanently retained |
| production_route | Purchased certified plate and prepared parts; mechanical cut/conditional form; solid-wire arc weld; machine interfaces; install declared pivots; accept before coating/packing |
| market_state | Same drawing/revision and configured installed parts; actual uncoated net factory-gate mass; no hydraulic functional system |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted independently delivered welded steel excavator boom assembly |
| How much | 1 kg net accepted complete boom |
| How well | Current drawing/revision, interface positions/bore fits, weld/inspection disposition and supplied completeness accepted against actual approved requirements |
| How long or cycle | One completed manufacture/acceptance; no service-life assumption |
| reference_flow_link | finished_boom |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted independently delivered welded steel excavator boom assembly |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Drawing/revision/serial; excavator/frame/stick/cylinder mating interfaces; box geometry and actual plate/boss certificates; weld procedure and inspection; machined bore/fit/alignment; fitted bushing/liner/pin supply scope; uncoated gate; original box and complete M kg records; declared cleaning and retained residues; plant/period/allocation; upstream and receiver links |

Required qualifiers accompany every data package; missing qualifiers make applicability incomplete. Symbolic M is actual measured complete boom net kg for the same configured acceptance state, not excavator operating mass, a catalogue estimate or invented part mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `material_mass` | mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect actual q_item kg per one accepted finished unit using named protocols. Record as-supplied composition and temperature/state; counts are additional traceability, never an assumed piece mass. Apply normalize_mass. |
| `electric_energy` | electricity rows | Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use actual metered kWh and convert using1 kWh=3.6 MJ before per-unit collection; apply normalize_mass. Nameplate power is not energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased plate and supplied prepared steel bosses/pivot parts at the actual boom-manufacturing input gate |
| starting_condition_role | upstream_abstraction |
| product_classification_scope | CPC 3.0:44461; narrower passive excavator boom |
| recursive_input_rule | Purchased preassembled same-category boom must retain its prior supplier fabrication gate; do not model receipt as new plate fabrication. Site-made bosses are linked at their actual preceding operation gate once; internal transfers are not duplicated final outputs. |
| upstream_dataset_requirement | Link matching plate route/grade/state, supplied boss and bearing/pin scope, solid wire and gas formulation, electricity voltage/provider, chemicals and inbound supply. Earlier same-site part production and subcontract machining/coating are disclosed linked gates, not assumed free or outsourced. |
| disclosure | Manufacturing foreground before coating/packing only; disclose missing links, actual utilities and additional operations; no complete cradle-to-gate claim without full actual upstream/supply integration |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | all_processes | Include attributable receipt, cutting, actual forming, weld fit-up/welding, handling/extraction, post-weld bore machining, dimensional/weld inspection, installed pivot assembly, actual cleaning and final acceptance; include consumed rejects/rework. Do not impose robot welding, stress relief or heat treatment from promotional prose. If actually required by the drawing/procedure, add and measure their concrete inputs/outputs. | cat320-boom; cat311-historical |
| `boundary_supply` | finished_boom | Acceptance is an independently supplied passive boom, not successful whole-machine digging. Declare frame root pivot, stick-end pivot, boom-cylinder and stick-cylinder attachment interfaces separately. Drawing/BOM decides fitted bushes, liners, retained pins and plugs; cylinder rod-eye bearings inside a bought actuator are not automatically boom parts. Exclude cylinders, hoses and complete power groups even when shown next to the boom. | catboom-supply; catbushing-interface |
| `boundary_emissions` | elementary rows | Only actual species-specific releases crossing the foreground environment boundary are elementary exchanges. Captured weld dust/spatter and washing liquids are collected wastes; upstream power emissions remain upstream. No compulsory welding emission species or solvent evaporation factor. Expand actual fume chemistry and outdoor submedium only with measurement or matched source evidence. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Plate receipt, mechanical cutting and conditional forming | `required` | Declared drawing-specific boom route; exchanges apply to actual operations and supply scope | foreground manufacturing | 1 kg; finished_boom |
| `weld` | Box fit-up and controlled arc welding | `required` | Declared drawing-specific boom route; exchanges apply to actual operations and supply scope | foreground manufacturing | 1 kg; finished_boom |
| `machine` | Interface-bore machining and dimensional inspection | `required` | Declared drawing-specific boom route; exchanges apply to actual operations and supply scope | foreground manufacturing | 1 kg; finished_boom |
| `assembly` | Declared bushing and pin installation | `required` | Declared drawing-specific boom route; exchanges apply to actual operations and supply scope | foreground manufacturing | 1 kg; finished_boom |
| `cleaning` | Conditional IPA or water cleaning | `conditional` | Only actual documented cleaning route | foreground manufacturing | 1 kg; finished_boom |
| `acceptance` | Configured boom net-mass and final acceptance | `required` | Declared drawing-specific boom route; exchanges apply to actual operations and supply scope | foreground manufacturing | 1 kg; finished_boom |

### Process: Plate receipt, mechanical cutting and conditional forming (`prepare`)

#### Inputs

##### Product flows

###### Hot-rolled low-alloy high-strength steel plate (`steel_plate`)

One actual certified plate specification for upper, lower, side or internal baffle plates. This adopted identity is limited to hot-rolled low-alloy high-strength plate; no grade is prescribed and other grades/states need separate matching rows. Record actual thickness/heat/certificate and net issued kg; do not add purchased finished bosses as plate again.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Low-voltage grid electricity for Plate receipt, mechanical cutting and conditional forming (`prepare_electricity`)

Actual user-side <1kV grid electricity for this operation, including attributable setup, idle, extraction/handling and rework. Collect original metered kWh, convert to MJ using3.6 MJ/kWh, then collect q_item per accepted same-configuration unit. Conditional process electricity exists only if performed; avoid double-counting shared meters.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Clean steel plate offcut (`plate_offcut`)

Actual unprocessed segregated steel production waste leaving the plant. Measure net kg, grade/contamination, drain retained coolant separately, and record receiver/status; internally reused offcuts remain stock and do not cross as waste. Do not merge this physical fraction with slag or contaminated dust.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Box fit-up and controlled arc welding (`weld`)

#### Inputs

##### Product flows

###### Machined steel boom pivot boss (`pivot_boss`)

One drawing-specific supplied steel boss including its initial bore and supply machining state, before welding into the box. Record material and measured supplied kg, not an assumed universal boss grade. If fabricated from site stock, link its preceding local manufacture once and avoid counting both the complete boss and its constituent stock.

- Selected flow: Machined steel boom pivot boss
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Solid low-alloy steel arc-welding wire (`welding_wire`)

Representative solid-wire route only: record the actual approved consumable specification, chemistry, issued/recovered kg and welding procedure used for this drawing. No amperage, pass count, preheat or fatigue limit is prescribed. Self-shielded flux-cored wire is a different physical consumable from this solid wire. Other actual welding routes require separately specified consumables and exchanges.

- Selected flow: Solid low-alloy steel arc-welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Argon–carbon dioxide welding shielding gas mixture (`shielding_gas`)

One actual purchased Ar/CO2 premix, with declared composition, cylinder net issue/return kg and gas supplier state. Include only for the actual gas-shielded weld procedure. It is one physically defined supplied gas mixture; do not duplicate its constituents as purchased pure gases. Record residual/recovered gas and actual releases separately; industrial CO2 origin is not presumed fossil.

- Selected flow: Argon–carbon dioxide welding shielding gas mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Low-voltage grid electricity for Box fit-up and controlled arc welding (`weld_electricity`)

Actual user-side <1kV grid electricity for this operation, including attributable setup, idle, extraction/handling and rework. Collect original metered kWh, convert to MJ using3.6 MJ/kWh, then collect q_item per accepted same-configuration unit. Conditional process electricity exists only if performed; avoid double-counting shared meters.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected solid steel welding spatter (`weld_spatter`)

Only separately collected actual steel weld spatter leaving as waste; weigh net kg and contamination. No fixed spatter yield. Any flux slag, spent grinding abrasive or extracted mixed dust needs its own composition-specific exchange if generated.

- Selected flow: Collected solid steel welding spatter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Interface-bore machining and dimensional inspection (`machine`)

#### Inputs

##### Product flows

###### Supplied oil-in-water cutting-fluid emulsion (`cutting_fluid`)

Conditional wet bore machining uses one actual supplied oil-in-water formulation with SDS and concentration. Measure net supplied kg; if concentrate is diluted on site, replace this premix card by separately identified concentrate and make-up water rather than counting dilution water twice. Dry machining has no compulsory fluid.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Low-voltage grid electricity for Interface-bore machining and dimensional inspection (`machine_electricity`)

Actual user-side <1kV grid electricity for this operation, including attributable setup, idle, extraction/handling and rework. Collect original metered kWh, convert to MJ using3.6 MJ/kWh, then collect q_item per accepted same-configuration unit. Conditional process electricity exists only if performed; avoid double-counting shared meters.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Separated steel machining chip (`steel_chip`)

Actual unprocessed segregated steel production waste leaving the plant. Measure net kg, grade/contamination, drain retained coolant separately, and record receiver/status; internally reused offcuts remain stock and do not cross as waste. Do not merge this physical fraction with slag or contaminated dust.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent oil-in-water cutting-fluid emulsion (`spent_coolant`)

Conditional wet machining output only, with actual oil/water concentration, metal contamination and off-site receiver. Measure drained waste kg and residual fluid separately; recirculation is internal, not repeated water intake or emission to water.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Declared bushing and pin installation (`assembly`)

#### Inputs

##### Product flows

###### Finished steel boom pivot sleeve bushing (`steel_bushing`)

One supplied steel sleeve-bushing drawing/part specification, including actual liner, surface treatment and supplier lubricant scope. Match bore, fit, mating pin and cylinder or stick interface from the controlled assembly drawing. Record independently measured installed kg and counts. A generic Sleeve flow does not establish linkage bearing construction or liner scope.

- Selected flow: Finished steel boom pivot sleeve bushing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel boom articulation pin (`steel_pin`)

Conditional on an actual permanently retained pin in the independently accepted boom configuration. Record one actual pin geometry/material/finish and net installed kg. Loose installation pins, fit-test pins and separately delivered spares are excluded from M and this finished-product configuration; declare their separate supply boundary instead of silently including them.

- Selected flow: Finished steel boom articulation pin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Low-voltage grid electricity for Declared bushing and pin installation (`assembly_electricity`)

Actual user-side <1kV grid electricity for this operation, including attributable setup, idle, extraction/handling and rework. Collect original metered kWh, convert to MJ using3.6 MJ/kWh, then collect q_item per accepted same-configuration unit. Conditional process electricity exists only if performed; avoid double-counting shared meters.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

### Process: Conditional IPA or water cleaning (`cleaning`)

#### Inputs

##### Product flows

###### Liquid isopropanol, CAS67-63-0 (`ipa_liquid`)

Only actual IPA cleaning before acceptance. One declared purity and liquid supplied state; measure net issue/return kg and retained residue/recovery. Purchased IPA is a technosphere input, not the elementary air flow. No compulsory solvent cleaning is inferred from a boom catalogue.

- Selected flow: Liquid isopropanol, CAS67-63-0
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Supplied industrial washing water (`industrial_water`)

Only actual aqueous cleaning, excluding water already inside purchased cutting-fluid emulsion. Record supplied water kg by calibrated mass measurement or documented metering with actual temperature/density conversion; no default density. This is supplied technosphere water, not direct freshwater extraction.

- Selected flow: Water for industrial use `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Low-voltage grid electricity for Conditional IPA or water cleaning (`cleaning_electricity`)

Actual user-side <1kV grid electricity for this operation, including attributable setup, idle, extraction/handling and rework. Collect original metered kWh, convert to MJ using3.6 MJ/kWh, then collect q_item per accepted same-configuration unit. Conditional process electricity exists only if performed; avoid double-counting shared meters.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Collected spent liquid isopropanol cleaning solvent (`spent_ipa`)

Only actual collected IPA solvent waste sent to a declared receiver; record composition and kg. Do not use an elementary IPA release or a different halogenated solvent identity. Recovered reusable IPA is a return, not automatic waste.

- Selected flow: Collected spent liquid isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Collected steel-boom aqueous washing effluent (`wash_effluent`)

Only actual separately collected wash effluent with its measured composition and off-site treatment receiver. It is a technosphere waste mixture, not unspecified elementary water or source freshwater. On-site treatment requires separate treatment exchanges and actual species/submedium release records.

- Selected flow: Collected steel-boom aqueous washing effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Immediate isopropanol release to unspecified air (`ipa_air`)

Conditional measured residual IPA, CAS67-63-0, released outside the plant into actual unspecified air. Collect species-specific sampled concentration/flow/time or a closed issue/recovery/residue/retention balance, with uncertainty. Do not assume complete evaporation or assign unexplained mass imbalance to air; workplace exposure and captured solvent are not this outdoor release. Other actual submedia need their matching identity.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

### Process: Configured boom net-mass and final acceptance (`acceptance`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity for Configured boom net-mass and final acceptance (`acceptance_electricity`)

Actual user-side <1kV grid electricity for this operation, including attributable setup, idle, extraction/handling and rework. Collect original metered kWh, convert to MJ using3.6 MJ/kWh, then collect q_item per accepted same-configuration unit. Conditional process electricity exists only if performed; avoid double-counting shared meters.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Accepted independently delivered welded steel excavator boom assembly (`finished_boom`)

Configured passive steel box boom, accepted to one drawing/revision, with declared installed bushings and permanently retained pins. Independent body and complete delivered boom net kg are reconciled. No cylinders, hoses, hydraulic power group, stick or bucket are implicitly included. Representative acceptance gate is uncoated before transport packing; later coating is a disclosed linked stage, never omitted while claiming a coated gate.

- Selected flow: Accepted independently delivered welded steel excavator boom assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared manufacture | First subdivide by actual drawing/revision and job/meter/stock records. Attribute shared cutting/weld/bore/hoist/inspection loads using observed machine time and actual setup/idle/load evidence, not boom sales mass by default. Supplier prepared-part burdens use that supplier boundary. If subdivision fails, document the actual physical causal basis; economic allocation requires actual prices/period and sensitivity, never a fixed author percentage. |  |
| `allocation_rework` | rejects scrap returns | Consumed rejects and rework remain in actual campaign exchange totals divided by accepted same-configuration units. Segregate reusable offcuts and supplier returns from waste. Document scrap legal/product status and receiver route; no automatic avoided virgin-steel credit, no simultaneous coproduct allocation and duplicate recycling benefit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | finished_boom | original calibrated net weights and signed acceptance | configuration; accepted net mass M; drawing/revision/serial; installed bush/pin scope; calibrated scale capacity/resolution; zero/tare/net M kg; independent welded-box kg; acceptance state | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit/configuration | actual declared representative period | declared boom plant and actual supply gates | accepted net mass per unit | original calibration/weights/acceptance |
| `cp_stock` | all_processes | stock chemical gas | actual issue return stock and SDS records | drawing/job; one plate or chemical/gas specification; composition/state; calibrated issue/return kg; stock change; accepted count | Measure net material issued after returns and stock correction in kg. Preserve actual premix scope and SDS concentration; for metered water/gas retain original volume, conditions and independently documented matched mass conversion. | kg | actual attributable campaign | actual declared representative period | declared boom plant and actual supply gates | actual attributed input kg / accepted units of the same configuration | stock balance/SDS/meter and scale calibration |
| `cp_parts` | all_processes | supplied pivot components | supplier BOM and original independent component weights | drawing/revision/serial; boss/bushing/pin specification; liner/finish/prefill; actual installed kg and count; returns; accepted count | Weigh supplied physical components and record installed kg independently of counts. Reconcile supplier inclusions, same drawing interface, retained versus temporary/loose parts and separate supplied lubricant. | kg | each delivery and configuration | actual declared representative period | declared boom plant and actual supply gates | actual installed supplied kg / accepted units of the same configuration | part certificates/BOM/original weights |
| `cp_energy` | all_processes | electricity | actual calibrated operation meters | job/process; meter voltage/provider; kWh start/end; setup/idle/rework/extraction; observed time/load; accepted count | Read actual meter coverage; convert kWh to MJ using3.6 MJ/kWh and attribute shared consumption once using documented causal operation records. | MJ | actual campaign and each shared load change | actual declared representative period | declared boom plant and actual supply gates | actual attributed MJ / accepted units of the same configuration | meter calibration and allocation observations |
| `cp_waste` | all_processes | segregated specific waste | original receiver manifests and weights | one steel/solvent/effluent fraction; measured composition; net kg; drainage/recovery; legal status/receiver; accepted count | Weigh each distinct waste fraction after controlled tare; record retained fluid, receiver and stock/recovery separately. Effluent is collected waste, not elementary water. | kg | each transfer and actual campaign | actual declared representative period | declared boom plant and actual supply gates | actual transferred waste kg / accepted units of the same configuration | scale records/composition/receiver receipts |
| `cp_emission` | cleaning | ipa_air | matched species sampling or closed solvent balance | CAS67-63-0; concentration/flow/time; actual air submedium; issue/recovery/retention/residue; detection/uncertainty; accepted count | Measure actual outdoor residual IPA by matched species sampling or documented closed issue/recovery/residue/retention balance. Unexplained residual is not assumed air release. | kg | actual cleaning campaign | actual declared representative period | declared boom plant and actual supply gates | actual released kg / accepted units of the same configuration | sampling calibration and complete solvent balance |
| `cp_configuration` | all_processes | complete accepted passive boom | controlled drawings inspection and supply acceptance | drawing/revision/serial; box/baffle geometry; actual certificates; root/stick/cylinder interface dimensions; fitted bush/pin/liner inclusions; approved weld/machining/inspection disposition | Reconcile current drawing and supplied BOM to actual manufactured box, post-weld interface dimensions and accepted installed components. Collect only tests/criteria actually required by the current approved plan; no universal proof load or weld acceptance threshold inferred from brochures. | kg | each drawing/configuration and accepted unit | actual declared representative period | declared boom plant and actual supply gates | qualifiers accompany each accepted unit | signed drawing/BOM/inspection disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `net_mass_configuration` | cp_mass; finished_boom | Here complete unit means the independently accepted boom, not the excavator. Use a calibrated scale suitable for actual boom mass/geometry with original capacity/resolution/calibration and zero/tare/net records. Independently weigh the welded box and installed bushes/pins; reconcile box kg plus actual retained components/residues to positive complete M kg. Exclude packaging, lifting fixtures, temporary test pins, loose installation pins, spares, cylinders, hoses and power group. No assumed dry mass, catalogue shipping mass, dimensions-times-default-density or whole-machine weight substitutes. | cp_mass; cp_parts; cp_configuration |
| `interfaces_acceptance` | finished_boom | Declare distinct root-frame pivot, stick pivot and each cylinder attachment interface using current drawing/revision, bore/axis/fit records and signed disposition. Record actual weld-inspection coverage/method and post-weld machining state; additional load/proof/NDT/stress-relief processes apply only if actually specified and performed. No universal steel grade, weld parameter, test load, treatment temperature or life is prescribed. | actual drawing, approved procedure and original acceptance |
| `period_collection` | all protocols | Attribute actual campaign totals to a single drawing/configuration using causal records; divide by actual accepted units to collect q_item in original kg or MJ. Consumed rejects/rework stay in numerator. Corresponding complete M is physically measured for the same population and supplied state; do not pool different box, bearing or pin configurations. | actual accepted counts/job/meter/stock records |
| `mass_and_chemical_balance` | all exchanges | Close purchased stock/parts/wire to accepted installed mass, returns, stock change and individually segregated waste, with actual uncertainty. Reconcile machining emulsion and IPA issue/recovery/residue/retention/release separately. No fixed yield, hidden zero, full evaporation or unexplained-residual emission. Expand additional actual seals, retaining clips, lubricants, abrasives, inspection reagents, compressed air/heat and captured fume fractions as their own concrete exchanges before claiming full plant coverage. | all primary protocols and actual operation register |
| `evidence_limits` | external evidence | Cat320 exact boom paragraphs support welded steel box architecture; mixed322 wording elsewhere is not adopted. Historical311C supports a historical construction example only. Cat605-3310 supports separate catalogue supply, but contains generic sleeve-bearing prose and cannot certify its supplied pin/cylinder scope. Cat384-2393 supports an interface example; its mini-excavator dimensions/material statements are not transferred to another boom. UNSD printed/PDF235 gives broad44461 parts identity, not an explicit boom-only classification decision. No source provides measured manufacturing inventory; original foreground records and independent scientific review remain required. | cat320-boom; cat311-historical; catboom-supply; catbushing-interface; unsd-cpc3 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify exact reference name equals finished_boom, same drawing/configuration and physically measured positive complete M kg. Reconcile independent welded-box mass and installed component additions; verify excluded loose pins and actuators. |  |
| `validation_boundary` | all_processes | Verify actual plate route/certificates, prepared-part supply gates, weld/machining order, interface records and uncoated acceptance state. If coating or other downstream stages are included in a product claim, their actual linked burdens and matching gate are mandatory before that claim. |  |
| `validation_identity` | all flow rows | Verify actual public state100 type/reference property/group/unit and official bilingual names. Match chemical/state/route and elementary actual immediate outdoor air submedium; supplied industrial water and collected wastewater are distinct. Reject crane body plus hydraulic system as passive excavator boom, generic sleeve as specified bearing, and flux-cored wire as solid wire. Keep specific unresolved rows, never force a UUID. |  |
| `validation_claims` | claims | PCR mechanical pass verifies authored consistency, not actual plant measurements, whole-machine performance, complete cradle-to-gate coverage, publication or scientific approval. Disclose BOM/identity/link/measurement/source gaps and distinguish unknown, not-applicable and below-detection. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Independently accepted passive steel excavator box-boom manufacturing foreground before coating/packing; heading implies no publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching configured independent boom manufacture or linked supplied boom input to a complete excavator model, scaled by actual M |
| excluded_use | Bucket or whole excavator manufacture, digging service, hydraulic power system, generic building steel structure, repair and lifetime claims |
| required_metadata | Drawing/revision/model/serial, root/stick/cylinder interfaces, actual material/part certificates, box and complete net M, installed bushes/pins/liners/prefill scope, uncoated gate, actual weld/machining/inspection records, plant/period/accepted count/allocation, upstream and waste receivers |
| required_quality_disclosure | All identity, original measurement, actual BOM/utility, supplier/receiver and independent scientific-evidence gaps; yield/rework/balance uncertainty and allocation sensitivity |
| update_trigger | Drawing/interface/material/weld or bore route, bushing/pin supply state, coating gate, plant/provider/meter/acceptance changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, printed/PDF235:44461; printed/PDF226:43580. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Broad parts identity; bucket separately named. Narrow boom interpretation remains authored and review-required. |
| cat320-boom | handbook | Caterpillar,320D3 Hydraulic Excavator, official undated page, Designed For Uptime and High Productivity boom paragraphs. https://www.cat.com/en_IN/products/new/equipment/excavators/medium-excavators/129160.html | Robotically welded boom and steel box with internal baffles; no grade/parameter/quantity/lifetime transferred. |
| cat311-historical | handbook | Caterpillar,Cat311C Utility, publisher-retained historical-model page, Boom and Boom and Stick Construction. https://h-cpc.cat.com/cmms/v2?cid=406&f=product&gid=265&it=product&lid=nl&nc=1&pid=752135&sc=L120 | Historical upper/lower/side plate and welded box example only, not present universal route. |
| catboom-supply | handbook | Caterpillar Parts Store,605-3310 Boom Assembly-Bearing, official undated page, heavy fabrication category and Compatible Models. https://parts.cat.com/en/catcorp/product/605-3310 | Independent supplied boom catalogue example; generic bearing prose and supplier completeness limitations; no catalogue kg reused. |
| catbushing-interface | handbook | Caterpillar Parts Store,384-2393 Boom Linkage Bushing, official undated page, Description and Applications. https://parts.cat.com/en/catcorp/product/384-2393 | Mating pin/bushing/mounting-surface interface example; mini-excavator dimensions and liner construction not generalized. |
