---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.road-vehicle-brake-assembly
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured road-vehicle hydraulic brake caliper assemblies

## 1. Scope and Applicability

This narrower PCR covers new complete fixed hydraulic opposed-piston brake calipers for road passenger cars, using a received monobloc cast-aluminium body blank, certified aluminium pistons and EPDM pressure seals. These material/design qualifiers select a specific foreground route; they are not asserted as universal automotive recipes. The configured caliper is delivered drained after the actual factory acceptance plan. Discs, friction pads, floating-caliper brackets/guide mechanisms, drum brakes, electromechanical parking actuators, motorcycle/rail/aircraft brakes, remanufacturing and other49129 accessories are outside this route.

Foreground manufacture starts at the stated cast-body/finished-component gates and includes actual machining, deburring, cleaning/drying, assembly, inspection and configuration/mass acceptance; solvent cleaning and packing are conditional. This is not a complete cradle-to-gate inventory. The historical Brembo plant description includes foundry, manufacturing and assembly; earlier casting/heat-treatment and component manufacture need matching upstream inventories even when they occur on the same site. Vehicle assembly, road braking/dust in use, travel services, maintenance and disposal in use are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.road-vehicle-brake-assembly |
| classification_refs | CPC 3.0:49129; narrower |
| covered_products | Complete configured drained cast-aluminium fixed opposed-piston road-car hydraulic brake caliper |
| excluded_products | Separate rotor/pads; drum/floating/parking brake routes; motorcycle/rail/aircraft brakes; other49129 parts; remanufactured and incomplete kits |
| representative_product | One declared fixed monobloc aluminium caliper with certified aluminium pistons and EPDM seals, drained delivery; source opposed-piston examples do not prescribe piston count |
| production_route | Cast blank receipt; actual finish machining/deburring; qualified aqueous wash/dry; finished-part assembly; approved factory checks and net weighing; conditional final clean/pack |
| market_state | New accepted complete caliper, drained with declared actual retained lubrication/film and optional installed hardware |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of the accepted configured complete brake caliper assembly |
| How much | 1 kg |
| How well | Current controlled drawing/BOM and actual signed factory dimensional, cleanliness, leak/function and configuration acceptance; no road-service equivalence |
| How long or cycle | One manufacturing campaign; no assumed service life, stopping cycles or wear interval |
| reference_flow_link | finished_caliper |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted drained aluminium-body opposed-piston road-car brake caliper assembly |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/drawing/lot/serial; road-car fitment and handedness; fixed opposed-piston and bore/count; certified body/piston alloy, seal compound and coating; complete BOM/make-or-buy/gates; installed hardware; drained/retained-fluid state; actual net M kg; actual acceptance protocol; site/period; rotor/pad/test-fixture/packaging exclusions |

Required qualifiers must accompany the data package; missing qualifiers leave the reference definition incomplete. M is measured per accepted complete same-configuration caliper, never inferred from a catalogue or vehicle weight.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `material_mass` | mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record q_item as measured exchange kg per one accepted finished unit; apply normalize_mass with reference_mass and the stated protocol. |
| `electric_energy` | electricity rows | Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Collect attributable electricity kWh at the actual supplier interface; convert measured kWh to MJ by multiplying by 3.6, then obtain q_item per accepted unit and apply normalize_mass. Never assign Mass to electrical energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Certified cast-body blank and separately supplied finished piston/seal/hardware receipts |
| starting_condition_role | upstream_abstraction |
| product_classification_scope | CPC 3.0:49129; narrower |
| recursive_input_rule | Do not input a complete same-category caliper to manufacture that same caliper; use actual lower-stage stock/components. Rework loops are internal, not duplicated purchases. |
| upstream_dataset_requirement | Match actual casting/heat-treatment/surface treatment, piston/seal/component manufacture and utility supply gate. Disclose any unlinked earlier on-site stages, inbound transport and exported waste receiver. |
| disclosure | Foreground machining and assembly only; blank/component abstraction is not complete cradle-to-gate coverage. Local additional coating/machining of bought parts must be individually modelled with actual chemicals/operations; otherwise excluded route. |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | all_processes | Include actual attributable required stages plus conditional operations only when performed. Record rejects, rework, cleaning/control and actual idle utilities. Washing and assembly gates require current operation evidence, not inferred recipes from marketing sources. | akebono-opposed-caliper; akebono-automotive-brakes; brembo-escobedo-2023 |
| `boundary_exclusions` | use and delivery | Exclude vehicle operation, friction-pad wear/brake dust in road use, road-distance services and customer servicing. Packaging and loose delivery parts are outside net M and separate exchanges. Direct factory releases belong only to actual measured chemical/medium records. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machining` | Caliper-body finish machining and deburring | required | Received cast monobloc blank; actual bore, seal-groove, hydraulic-passage and mounting-interface operations | foreground | 1 kg finished_caliper |
| `washing` | Machined-body washing and drying | required | Actual qualified aqueous cleaning/rinsing and drying for this route; bath chemistry from current records | foreground | 1 kg finished_caliper |
| `assembly` | Piston seal and retention-component assembly | required | Controlled complete component BOM for one opposed-piston fixed caliper configuration | foreground | 1 kg finished_caliper |
| `acceptance` | Factory leak/function checks and net-mass release | required | Actually approved acceptance tests and drained complete configuration weighing | foreground | 1 kg finished_caliper |
| `cleaning` | Conditional final isopropanol cleaning | conditional | Only actual approved performed CAS67-63-0 cleaning | foreground | 1 kg finished_caliper |
| `packing` | Conditional dispatch packing | conditional | Only actual supplied separate dispatch packaging | foreground | 1 kg finished_caliper |

### Process: Caliper-body finish machining and deburring (`machining`)

#### Inputs

##### Product flows

###### Cast aluminium-alloy monobloc caliper-body blank (`body_blank`)

One cast aluminium body design of the declared road-car fixed opposed-piston caliper crosses the machining gate. Record certified alloy, casting/heat-treatment and received surface state, blank kg, returns and rejects; do not substitute primary aluminium ingot for an already cast body. The upstream casting is required as a linked actual process, not represented by this machining foreground.

- Selected flow: Cast aluminium-alloy monobloc caliper-body blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### Supplied aqueous mineral-oil machining emulsion (`cutting_emulsion`)

Conditional on actual wet machining using one documented supplied premixed mineral-oil emulsion. Record SDS, oil/additive concentration and net issue kg; internal recirculation is not fresh input. If concentrate is mixed locally, split the concentrate and added water and account mixing instead of counting both premix and its constituents. Dry machining is recorded as absent, not a zero-valued invented fluid.

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

###### User-side low-voltage AC factory electricity (`electricity_machining`)

Measure attributable actual stage equipment, drying/test pumps, idle and rework electricity at the user meter; record supplier, geography, voltage and period. A high-voltage grid or generation-only flow does not establish this supply gate. Do not infer fuel combustion emissions from purchased electricity; actual compressed-air or heat utilities need their own attributable provider/process records and physical exchanges.

- Selected flow: User-side low-voltage AC factory electricity
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

###### Collected aluminium-alloy machining chips (`aluminium_chips`)

Measure actual exported dry-metal kg with declared alloy and separately measured entrained emulsion; distinguish casting returns, saleable chips, internal remelt and waste transfer. No universal scrap yield or avoided-primary-metal credit.

- Selected flow: Collected aluminium-alloy machining chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Collected spent aqueous mineral-oil machining emulsion (`spent_emulsion`)

Actual exported spent wet emulsion kg and analysed oil/water/metal composition, with identified receiver. Recirculated bath is not exported waste and chip metal is not included twice.

- Selected flow: Collected spent aqueous mineral-oil machining emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Machined-body washing and drying (`washing`)

#### Inputs

##### Product flows

###### Supplied industrial washing water (`wash_water`)

Actual supplied water entering aqueous washing/rinsing, measured delivered kg with quality and provider records; distinguish fresh supply from loop recirculation. This is technosphere water, not a natural freshwater extraction or a wastewater discharge. Washing is required for this declared machined-body route but no universal water quantity or chemistry is prescribed.

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

###### Supplied anhydrous sodium carbonate washing reagent (`wash_carbonate`)

Conditional only if actual qualified aqueous cleaning uses anhydrous sodium carbonate CAS497-19-8. Measure reagent kg, assay and bath concentration; other actually approved cleaners require individual specific cards rather than this recipe. Do not infer sodium carbonate from an unidentified alkaline cleaner or force it as a necessary industry operation.

- Selected flow: Supplied anhydrous sodium carbonate washing reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_washing`)

Measure attributable actual stage equipment, drying/test pumps, idle and rework electricity at the user meter; record supplier, geography, voltage and period. A high-voltage grid or generation-only flow does not establish this supply gate. Do not infer fuel combustion emissions from purchased electricity; actual compressed-air or heat utilities need their own attributable provider/process records and physical exchanges.

- Selected flow: User-side low-voltage AC factory electricity
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

###### Collected spent aqueous sodium-carbonate washing liquor (`washing_effluent`)

Conditional on the sodium-carbonate washing route: record wet kg and actual carbonate/oil/metal concentrations and destination. This collected wastewater is not elementary freshwater or an untreated direct river discharge. Other bath chemistry needs its own actual wastewater card.

- Selected flow: Collected spent aqueous sodium-carbonate washing liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Piston seal and retention-component assembly (`assembly`)

#### Inputs

##### Product flows

###### Finished aluminium-alloy hydraulic caliper piston (`piston`)

One finished physical component design separately supplied for the declared configuration. Record actual drawing/grade, coating/compound and net received kg, installed count, returns and rejected kg. Aluminium piston and EPDM seals define this narrow route and require actual certification; other metals/compounds require separately supported rows and a disclosed route extension. No default number of pistons or seal recipe is inferred from the source example. Dust boots, pins and spring apply only where installed; exclude parts already included in another received assembly.

- Selected flow: Finished aluminium-alloy hydraulic caliper piston
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished EPDM hydraulic caliper piston seal (`pressure_seal`)

One finished physical component design separately supplied for the declared configuration. Record actual drawing/grade, coating/compound and net received kg, installed count, returns and rejected kg. Aluminium piston and EPDM seals define this narrow route and require actual certification; other metals/compounds require separately supported rows and a disclosed route extension. No default number of pistons or seal recipe is inferred from the source example. Dust boots, pins and spring apply only where installed; exclude parts already included in another received assembly.

- Selected flow: Finished EPDM hydraulic caliper piston seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished EPDM caliper piston dust boot (`dust_boot`)

One finished physical component design separately supplied for the declared configuration. Record actual drawing/grade, coating/compound and net received kg, installed count, returns and rejected kg. Aluminium piston and EPDM seals define this narrow route and require actual certification; other metals/compounds require separately supported rows and a disclosed route extension. No default number of pistons or seal recipe is inferred from the source example. Dust boots, pins and spring apply only where installed; exclude parts already included in another received assembly.

- Selected flow: Finished EPDM caliper piston dust boot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel caliper bleed screw (`bleed_screw`)

One finished physical component design separately supplied for the declared configuration. Record actual drawing/grade, coating/compound and net received kg, installed count, returns and rejected kg. Aluminium piston and EPDM seals define this narrow route and require actual certification; other metals/compounds require separately supported rows and a disclosed route extension. No default number of pistons or seal recipe is inferred from the source example. Dust boots, pins and spring apply only where installed; exclude parts already included in another received assembly.

- Selected flow: Finished steel caliper bleed screw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel brake-pad retaining pin (`pad_pin`)

One finished physical component design separately supplied for the declared configuration. Record actual drawing/grade, coating/compound and net received kg, installed count, returns and rejected kg. Aluminium piston and EPDM seals define this narrow route and require actual certification; other metals/compounds require separately supported rows and a disclosed route extension. No default number of pistons or seal recipe is inferred from the source example. Dust boots, pins and spring apply only where installed; exclude parts already included in another received assembly.

- Selected flow: Finished steel brake-pad retaining pin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel caliper pad-retention spring (`retention_spring`)

One finished physical component design separately supplied for the declared configuration. Record actual drawing/grade, coating/compound and net received kg, installed count, returns and rejected kg. Aluminium piston and EPDM seals define this narrow route and require actual certification; other metals/compounds require separately supported rows and a disclosed route extension. No default number of pistons or seal recipe is inferred from the source example. Dust boots, pins and spring apply only where installed; exclude parts already included in another received assembly.

- Selected flow: Finished steel caliper pad-retention spring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_parts`
- Sources:

###### Supplied silicone-based caliper assembly grease (`assembly_grease`)

Conditional on actual design-approved silicone-based assembly grease compatible with the certified seals and fluid. Record the single formulation, supplied kg, applied/returned/residual kg; compatibility must be demonstrated by actual approval, not assumed from silicone naming. Do not impose this chemistry on an alternative assembly-lubrication route.

- Selected flow: Supplied silicone-based caliper assembly grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_assembly`)

Measure attributable actual stage equipment, drying/test pumps, idle and rework electricity at the user meter; record supplier, geography, voltage and period. A high-voltage grid or generation-only flow does not establish this supply gate. Do not infer fuel combustion emissions from purchased electricity; actual compressed-air or heat utilities need their own attributable provider/process records and physical exchanges.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

### Process: Factory leak/function checks and net-mass release (`acceptance`)

#### Inputs

##### Product flows

###### Supplied glycol-ether hydraulic brake test-fluid formulation (`test_fluid`)

Conditional on an actual qualified hydraulic factory test using one documented glycol-ether formulation. Record approved composition, concentration and fresh make-up kg, recovery, exported spent liquid and actual retained film. Count net fresh input, not repeated tank circulation. Pneumatic leak-test routes are not converted to this fluid and need actual air-generation utility records. This candidate reference product is drained: a deliberately wet-filled delivery is a different declared state.

- Selected flow: Supplied glycol-ether hydraulic brake test-fluid formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_acceptance`)

Measure attributable actual stage equipment, drying/test pumps, idle and rework electricity at the user meter; record supplier, geography, voltage and period. A high-voltage grid or generation-only flow does not establish this supply gate. Do not infer fuel combustion emissions from purchased electricity; actual compressed-air or heat utilities need their own attributable provider/process records and physical exchanges.

- Selected flow: User-side low-voltage AC factory electricity
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

###### Accepted drained aluminium-body opposed-piston road-car brake caliper assembly (`finished_caliper`)

One complete fixed hydraulic caliper of the declared monobloc cast-aluminium body, installed certified aluminium pistons, EPDM pressure seals and actual dust/retention hardware. Declare piston count, bore/side/handedness, coating, mounting interface and net drained delivery state. Include actual retained lubricant/film once; exclude rotor, friction pads, vehicle/master-cylinder/ABS/hoses, loose spares, plugs used only as test fixtures and transport packaging. No stopping-distance or service-life equivalence is asserted.

- Selected flow: Accepted drained aluminium-body opposed-piston road-car brake caliper assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Collected spent glycol-ether hydraulic brake test fluid (`spent_test_fluid`)

Conditional actual exported contaminated test liquid: measured wet kg and certified composition, drains/returns and receiver; no default loss per test and no use-phase brake-fluid replacement.

- Selected flow: Collected spent glycol-ether hydraulic brake test fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Irreparable drained aluminium-body caliper assembly for disposal (`rejected_caliper`)

Only actual irreparable factory reject exported to a declared receiver, net kg and inclusion/contamination state. Supplier returns and rework are separate from disposal; never count returned assemblies as both finished output and disposal.

- Selected flow: Irreparable drained aluminium-body caliper assembly for disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Conditional final isopropanol cleaning (`cleaning`)

#### Inputs

##### Product flows

###### Supplied liquid isopropanol final-cleaning formulation (`ipa_cleaner`)

Conditional on actually performed approved final cleaning with a specific CAS67-63-0 formulation. Record purity/water concentration and net issue, recovery, residue and retention kg. Do not assume necessary solvent cleaning or complete evaporation; aqueous pre-assembly washing is a separate stage.

- Selected flow: Supplied liquid isopropanol final-cleaning formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_cleaning`)

Measure attributable actual stage equipment, drying/test pumps, idle and rework electricity at the user meter; record supplier, geography, voltage and period. A high-voltage grid or generation-only flow does not establish this supply gate. Do not infer fuel combustion emissions from purchased electricity; actual compressed-air or heat utilities need their own attributable provider/process records and physical exchanges.

- Selected flow: User-side low-voltage AC factory electricity
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

###### Collected spent isopropanol cleaning solution (`spent_ipa`)

Actual exported wet cleaning liquid kg and analysed IPA/water/contaminants. Account recovered liquid and measured emissions separately; no generic mixed-waste identity.

- Selected flow: Collected spent isopropanol cleaning solution
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

###### Immediate isopropanol release to unspecified outdoor air (`ipa_air`)

Only actually observed compound-specific post-control residual CAS67-63-0 release to unspecified outdoor air. Use matched concentration, flow/time sampling or documented closed solvent balance resolving recovery, residue and retention. Preserve detection limits and uncertainty; distinguish no cleaning, no release, unmeasured and below detection. Reject indoor-air, soil/long-term, n-propanol and generic VOC matches.

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

### Process: Conditional dispatch packing (`packing`)

#### Inputs

##### Product flows

###### Finished paperboard caliper shipping folding box (`shipping_box`)

Conditional on actually supplied individual empty folding box of the declared specification, measured kg outside M. Other actual cushioning, wrap, pallet or reusable return container needs its own specific exchange and documented reuse allocation; no assumed packaging recipe.

- Selected flow: Finished paperboard caliper shipping folding box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Sources:

###### User-side low-voltage AC factory electricity (`electricity_packing`)

Measure attributable actual stage equipment, drying/test pumps, idle and rework electricity at the user meter; record supplier, geography, voltage and period. A high-voltage grid or generation-only flow does not establish this supply gate. Do not infer fuel combustion emissions from purchased electricity; actual compressed-air or heat utilities need their own attributable provider/process records and physical exchanges.

- Selected flow: User-side low-voltage AC factory electricity
- Flow property / unit: Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | all_processes | First subdivide actual line/process meters, job cards, stock and waste records by caliper model/configuration. For shared machinery allocate using documented causal operation time with actual load/setup/idle evidence; washing use actual bath cycles/load evidence. A simple output mass share is allowed only with a demonstrated physical relationship and sensitivity disclosure. No unsupported universal allocation fraction. |  |
| `allocation_rejects` | rejects and chips | Keep actual reject/rework burdens in attributable campaign inputs divided by accepted units. Declare whether exported metal chips are waste or a saleable co-product based on actual contracts/state. Avoid allocating both a waste treatment credit and a saleable output benefit to the same chip mass; no automatic avoided-primary-aluminium credit. Document chosen allocation rationale, prices/time basis where applicable and sensitivity; science review remains pending. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | complete configured caliper | calibrated complete-unit net weighing | model; configuration; serial; accepted net mass M; kg; zero/tare; raw readings; installed piston/seal/hardware kg; retained film and excluded fixtures/packaging; accepted count | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each unit or controlled representative same-configuration lot with actual individual measurements | actual declared representative production period | declared plant and attributable stage/supply gates | accepted net mass per unit | original calibrated scale readings, zero/tare and signed complete configuration acceptance |
| `cp_stock` | all_processes | blank and process inputs | actual stock issue/return and consumption | lot; named compound/formulation/grade; blank kg; issue/return kg; stock change; concentration; actual operation; retained/removed liquid; accepted count | Measure actual attributable net stock input including rejects/rework, with receipts, returns and stock reconciliation; distinguish supplied emulsion from locally mixed constituents and fresh makeup from circulation. Record actual stage and concentration; conditional inputs require performed operation evidence. | kg | each issue/return and actual campaign | actual declared representative production period | declared plant and attributable stage/supply gates | actual attributable input kg / accepted units of the same configuration | calibrated weighing/stock balance, SDS and operation records |
| `cp_parts` | assembly | finished supplied components | component receipts and installed-mass reconciliation | drawing; supplier; material/compound/coating; actual component kg; installed count; included parts/prefill; returns/rejects; accepted count | Independently weigh one design of separately received component in kg; counts provide traceability rather than an invented piece mass. Reconcile installed component net mass and full BOM against complete M; net consumption includes attributable rejects and rework. | kg | each lot/configuration and campaign | actual declared representative production period | declared plant and attributable stage/supply gates | actual attributable component kg / accepted units of the same configuration | drawing/certified compound, supplier and installed component weight records |
| `cp_energy` | all_processes | stage electricity | actual user-side electrical meter | stage; meter; kWh; actual period; provider/voltage/geography; shared-load allocation; accepted count | Read calibrated actual user-interface stage meters and attribute actual idle, drying, test and rework loads using documented causal records. Convert kWh to MJ using 3.6 MJ/kWh before unit normalization; rated machine power is not measured consumption. | MJ | actual representative campaign | actual declared representative production period | declared plant and attributable stage/supply gates | actual attributable electricity MJ / accepted units of the same configuration | calibration/original meter records, causal load and supply identity |
| `cp_waste` | all_processes | actual exported waste | export weighing, composition and receiver records | specific waste; wet/dry kg; entrained liquid; analysis; receiver; export/return/reuse; accepted count | Measure each actual exported named waste separately and retain composition and receiver; reconcile metal/liquid splits and internal recovery without double counting. Waste treatment/discharge must use the actual linked receiver, not an assumed untreated elementary release. | kg | each export and actual campaign | actual declared representative production period | declared plant and attributable stage/supply gates | actual exported waste kg / accepted units of the same configuration | calibrated weights, composition, waste manifests and receiver |
| `cp_emission` | cleaning | conditional IPA air release | compound-specific sampling or closed solvent balance | CAS; outdoor air submedium; concentration; actual airflow/time; recovery/residue/retention; detection limit/uncertainty; accepted count | Quantify actual residual release by matched sampling or a documented closed IPA issue/recovery/residue/retention balance. Preserve unmeasured and below-detection states; no generic VOC factor or assumption of complete evaporation. | kg | actual representative cleaning/control period | actual declared representative production period | declared plant and attributable stage/supply gates | actual released kg / accepted units of the same configuration | sampling/calibration/lab records and solvent balance |
| `cp_configuration` | all_processes | configured accepted caliper | controlled as-built and acceptance records | model/drawing/serial; piston/bore/count; body/piston grade; seal compound; coating; full BOM/gates; actual dimensional/cleanliness/leak/function tests and disposition; drained delivery state | Trace controlled drawings, full supplier inclusions and actual qualified operation plan. Record actual acceptance tests, thresholds, calibration and dispositions approved for this specific part; manufacturer examples prescribe no universal test pressures or limits. Declare optional hardware and delivered net state. | kg | each model/lot/configuration change | actual declared representative production period | declared plant and attributable stage/supply gates | qualifiers accompany each accepted same-configuration unit | signed drawings/BOM, certified materials and factory acceptance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | period records | Attribute actual stock/meter/export totals to one accepted configuration using current causal records; divide attributable exchange totals by the actual accepted count to obtain q_item. Preserve reject/rework burdens in the numerator. Different bores/piston counts/coatings/seal compounds must not be silently pooled. | cp_stock; cp_parts; cp_energy; cp_mass | q_item |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | Positive M requires current actual calibrated complete net weighing: scale capacity/resolution/calibration, original readings, tare and signed configuration/serial. Independently weigh machined body and installed component designs, reconcile their mass plus actual retained lubricant/film against complete M. Do not use vehicle mass, brake-kit catalogue weight or generic item-to-kg factor. | cp_mass; cp_parts; cp_configuration |
| `net_configuration` | finished_caliper | M includes actual permanently installed body, pistons, seals and declared hardware once, plus measured retained film/lubricant in the drained delivered state. Exclude rotor, pads, vehicle mounting hardware not supplied as part of this caliper, loose spares, temporary test fittings and shipping box. Deliberate wet prefill changes the reference state; independently reconcile fluid retained/exported without duplicate circulation or premixed-constituent inputs. | cp_mass; cp_stock; cp_configuration |
| `completeness_balance` | all exchanges | Expand full actual BOM and operation records before a complete factory claim: extra plugs, fittings, connectors, seals, fasteners, packaging, actual bath additives, coating operations and compressed-air/heat utility each need a specific exchange if present. Reconcile blank-to-body/chips/rejects, components-to-installed/returns and all wet-fluid balances; identify receiver/upstream/transport links and document cut-offs, uncertainty and allocation sensitivity. No default material yield or universal chemistry/emission. | cp_stock; cp_parts; cp_waste; cp_energy; cp_emission |
| `source_limits` | external sources | Akebono describes automotive opposed-piston architecture, not actual grades/compounds, manufacturing quantities or acceptance thresholds. Brembo2023 is a historical plant-stage statement only; no capacity, investment or employment number is an inventory factor. Publishers are independent of each other but neither document measures this configured foreground. Current actual certified material, factory records and independent scientific review remain necessary. | akebono-opposed-caliper; akebono-automotive-brakes; brembo-escobedo-2023 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Verify exact finished_caliper name against reference product, complete cast-body opposed-piston road-car configuration, positive physical M kg and original independent component/mass reconciliation. Candidate empty reference UUID is a declared identity gap, not licence to reuse a broad/incompatible brake or material flow. |  |
| `validation_process` | all_processes | Verify actual machining, washing, assembly and accepted tests against controlled job/configuration records, including reject/rework and conditional operations. Certified aluminium piston and EPDM compound must be demonstrated; actual alternatives need a supported route expansion. Source product descriptions do not establish current lawful fitment or safety approval. | akebono-opposed-caliper; akebono-automotive-brakes; brembo-escobedo-2023 |
| `validation_identity` | flow rows | Check public state100 originals, type, actual reference-property/group/unit, route, composition and medium/submedium. Preserve public Number/Volume/Energy properties rather than rewrite Mass. Purchased water, collected effluent and natural water are distinct; outdoor immediate IPA is neither purchased cleaner nor indoor/long-term release. Register exact unresolved row_ids and official Chinese names. |  |
| `validation_claims` | claims | Mechanical check pass does not establish actual measurements, full cradle-to-gate completeness, scientific approval, stopping performance or lifetime. Disclose reference/component identity gaps, actual missing BOM/utility/upstream links and source/measurement limits. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured road-car cast-aluminium fixed hydraulic caliper machining/assembly manufacturing foreground; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same configured complete drained caliper manufacture normalized by actual M, with matching body/component upstream gates and actual operations |
| excluded_use | Road braking services or wear emissions, stopping-distance/life comparisons, other brake architectures, repair/remanufacturing and regulatory approval |
| required_metadata | Drawing/model/serial/lot, fitment/handedness, piston/bore/count, certified body/piston alloy/seal compound/coating, complete BOM/gates, actual operation/test/disposition records, net M kg originals and independent component/fluid balance, exclusions/accessories, site/period/provider, allocation and upstream/receiver links |
| required_quality_disclosure | Identity/BOM/operation/measurement/link gaps; actual rejects/rework/returns/recovery; source historic applicability; detection/uncertainty/cut-off and allocation sensitivity |
| update_trigger | Body/piston/seal/coating, hydraulic geometry/fitment, supply/local operation gates, test/drain state, weighing configuration, plant/period/provider or packaging changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| akebono-automotive-brakes | handbook | Akebono Brake Industry, Brakes for Automobiles, undated official page, Brakes for Automobiles and Disc Brakes sections. https://www.akebono-brake.com/english/product_technology/product/automotive/index.html | Automotive disc/drum and friction-material distinction; no quantitative recipe. |
| akebono-opposed-caliper | handbook | Akebono Brake Industry, Opposed Piston Type Disc Brakes, undated official page, Opposed Piston Type Disc Brakes section. https://www.akebono-brake.com/english/product_technology/product/automotive/disc/opposed.html | Opposed-piston architecture and possible configured piston counts; no default count or material compound adopted. |
| brembo-escobedo-2023 | handbook | Brembo North America, Brembo completes expansion of Escobedo, Mexico caliper plant,12May2023, final operational-expansion paragraph; publisher press release hosted by PRNewswire. https://www.prnewswire.com/news-releases/brembo-completes-expansion-of-escobedo-mexico-caliper-plant-301823690.html | Historical aluminium-caliper plant stages from foundry through manufacturing/assembly only. Publisher-authored HTML supports the stated historical stage boundary only. |
