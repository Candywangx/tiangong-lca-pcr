---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-incubation-and-brooding-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Poultry incubation and brooding machinery manufacturing

## 1. Scope and Applicability

Manufacture of complete electric poultry egg incubators, including setters and hatchers, and electric contact/radiant brooders. Define each model independently by heating method, circulation, turning, humidity provision and included control/supply assemblies. A forced-air automatic-turning incubator and a low-voltage contact brooder are distinct configurations; neither is assumed to contain the other’s parts. Brinsea examples support these distinctions, not a universal material recipe.

Exclude gas-fired brooders, general room/building heating and ventilation, egg handling unrelated to incubation, poultry feeding/watering machinery, separately sold parts, eggs/chicks, hatchery/brooding services, farm operation, biological hatchability/survival, growth, maintenance and end-of-life. No animal-output or heating-service reference is defined.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.poultry-incubation-and-brooding-machinery |
| classification_refs | CPC 3.0 44193; narrower electric-appliance manufacturing scope; no mapping acceptance |
| covered_products | Complete electric poultry setters/hatchers and contact/radiant brooders, configured separately. |
| excluded_products | Gas brooders, general heaters/fans, separately sold parts and animal-production services. |
| representative_product | One accepted empty electric incubator with declared heating, circulation, tray/turner and humidity configuration; brooder datasets retain actual panel/legs/matched power unit. |
| production_route | Received stock/parts → conditional on-site molding, sheet fabrication, frame welding and coating → configuration-controlled assembly → factory acceptance/rework → dispatch. |
| market_state | New complete accepted appliance, dry and empty of eggs/chicks/test water; supplied detachable parts included; shipping packaging recorded separately. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacturing delivery of a complete appliance for declared electric poultry egg incubation/hatching or electric brooding; biological operation is outside the dataset. |
| How much | 1 kg of accepted net complete machine of one specified configuration; a normalized share of the complete product, not an independently usable kilogram component. |
| How well | Conforms to released BOM/drawings and actual model acceptance criteria for installed heat/control, air circulation, turning, humidity provision and electrical safety. Do not substitute an egg-hatching trial or chick outcome for machine conformity. |
| How long or cycle | One manufacturing and acceptance cycle; no service life, number of incubation batches or brooding weeks specified. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Poultry incubators and brooders `f4726903-5715-4f8c-832b-7eeaf33d03c8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/revision; serial/batch; setter/hatcher/brooder; electric heating method and rating; natural/forced circulation; manual/automatic/no turning; tray and linkage supply; humidification route and accessories; cabinet/panel materials; controller/sensor boundary; matched power supply/cables/legs; voltage; complete supplied detachable items; dry empty state; acceptance criteria; measured net M; factory/period; make-or-buy; upstream/provider coverage; packaging exclusion |

Declare all qualifiers in dataset metadata or reference-flow comments. This broad public product identity is narrowed by the actual electric-machine configuration; it does not authorize pooling setters, hatchers and brooders as functionally equivalent products.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| electricity_units | molding_power; fabrication_power; welding_power; coating_power; assembly_power; test_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert measured kWh to MJ using 3.6 MJ/kWh before normalization; retain energy numerator units and the actual supplied voltage/geography. |

Measure M on the dry empty accepted appliance. Include supplied trays, covers/linkages, legs, matching detached power unit and cables, using traceable component weights if not on the same scale. Exclude eggs/chicks, water, litter, shipping packaging and externally installed farm equipment. Count data are collected with an actual measured net mass for each configuration; no assumed machine or component weight is supplied.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased stock and finished components received at the manufacturing site; their supplier production is not automatically foreground-covered. |
| starting_condition_role | Declared material/assembly starting point for a manufacturing module. |
| product_classification_scope | Complete dedicated electric poultry incubators/hatchers and brooders; CPC context narrower than all heat-source routes. |
| recursive_input_rule | Purchased cabinet/panel/fan/control assemblies carry explicit included-part and upstream boundaries; do not recursively duplicate their contained materials or manufacture. |
| upstream_dataset_requirement | Expanded studies separately link compatible actual supplier/material datasets, inbound transport and waste treatment, with geography, grade and technology disclosed. Missing providers remain gaps. |
| disclosure | Report site/period, make-or-buy, outsourced manufacture, test configuration, packaging, transport/treatment coverage and omissions. This manufacturing module alone does not establish complete cradle-to-gate coverage. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacturing | foreground | Include actual site receipt-to-release activities, attributable utilities, losses and rework. Conditional processes apply only when work orders show they occur. |  |
| boundary_configuration | complete_machine | Include all supplied parts, including incubator trays/link/covers and brooder panel/adjustable legs/matched power unit. Model-specific instructions illustrate supply boundaries; no universal materials or quantities transferred. | brinsea-ovation; brinsea-ecoglow |
| boundary_exclusions | downstream | Exclude incubation/brooding operating energy, eggs/chicks, mortality, litter, feed, cleaning between farm cycles and animal emissions. Record actual factory test burdens only; test eggs or artificial loads used by a site need separate measured specific exchanges. |  |
| boundary_emissions | elementary_outputs | Record actual measured substances and receiving media after controls. Waste liquid sent to treatment is a waste exchange, not water-resource consumption or receiving-water discharge; unknown quantities are gaps, not zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| molding | Housing polymer molding | conditional | Only actual on-site molding; purchased enclosures replace this operation. | foreground_production | per 1 kg reference flow |
| fabrication | Metal cutting, folding and drilling | conditional | Only actual metal cabinet/frame fabrication on site. | foreground_production | per 1 kg reference flow |
| welding | Support-frame welding | conditional | Only actual welded frames; other joining routes require additional atomic exchanges. | foreground_production | per 1 kg reference flow |
| coating | Metal powder coating | conditional | Only the actual site finishing route; uncoated or purchased finished parts omit it. | foreground_production | per 1 kg reference flow |
| assembly | Configured poultry appliance assembly | required | All products; specific installed components differ between incubators and brooders. | foreground_production | per 1 kg reference flow |
| acceptance | Factory functional acceptance and rework | required | All products; actual release test plan defines relevant functions and test-water use. | foreground_production | per 1 kg reference flow |
| packing | Dispatch protection and packaging | conditional | Only actual factory-applied packaging. | foreground_production | per 1 kg reference flow |

Reconcile cabinet/top/base, insulation, window, trays, pan covers and linkages, heater, fan/guard, turner, humidity hardware, controls/sensors, cables and mounting parts to the exact incubator BOM; for brooders reconcile the heater panel, legs, cables and matched power unit. Actual materials must be confirmed by supplier/BOM, not pictures. Add every missing physical component, adhesive/chemical, waste and measured emission as its own atomic exchange. Purchased finished components replace corresponding site fabrication; internal transfers are not external inputs. Conditional absence requires route evidence.

### Process: Housing polymer molding (`molding`)

Only actual on-site molding; purchased enclosures replace this operation.

#### Inputs

##### Product flows

###### acrylonitrile-butadiene-styrene granulate (ABS) (`abs_granulate`)

Only ABS granulate actually consumed in site molding; the public identity specifies granulate and Mass, without a supplied grade or geography. Record current supplier, injection grade, additives and color composition; any separately added color masterbatch or adhesive needs its own measured formulation-specific row. A finished housing is not a resin input.

- Selected flow: acrylonitrile-butadiene-styrene granulate (ABS) `4f197be0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

###### Alternating current (`molding_power`)

Meter molding, cooling and trimming demand only if performed on site; grid-average delivered electricity below 1 kV, actual geography and provider required.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

#### Outputs

##### Waste flows

###### Discarded ABS molding trim (`abs_trim`)

Weigh externally discarded trim of one documented ABS recipe; internally reground clean trim is an internal loop, not another purchased resin or waste output.

- Selected flow: Discarded ABS molding trim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_molding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_molding`

### Process: Metal cutting, folding and drilling (`fabrication`)

Only actual metal cabinet/frame fabrication on site.

#### Inputs

##### Product flows

###### Cold-rolled stainless-steel sheet (`stainless_sheet`)

Conditional on on-site cabinet or tray fabrication; retain alloy, thickness, cut plan and stock issues net of reusable returns. No universal cabinet material is assumed.

- Selected flow: Cold-rolled stainless-steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Hot-rolled carbon-steel plate (`carbon_plate`)

Only if this specific stock is actually fabricated for a support frame; record grade, thickness and net stock issue. Separate stainless-steel and carbon-steel stocks and wastes.

- Selected flow: Hot-rolled carbon-steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Alternating current (`fabrication_power`)

Meter cutting, folding and drilling with attributable extraction and compressed-air electricity; only delivered grid-average supply below 1 kV.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_offcuts`)

Only untreated carbon-steel offcuts/chips actually exported; separate oily chips and stainless fractions; reused stock is not waste.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Untreated stainless-steel sheet offcuts (`stainless_offcuts`)

Weigh the actual alloy-specific sheet offcuts separately from carbon-steel scrap; retain destination and treatment boundary.

- Selected flow: Untreated stainless-steel sheet offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

### Process: Support-frame welding (`welding`)

Only actual welded frames; other joining routes require additional atomic exchanges.

#### Inputs

##### Product flows

###### Flux Cored Wire (`welding_wire`)

Conditional on documented self-shielded carbon-steel flux-cored welding of a frame. Other weld methods require separate grade-specific wire and shielding-gas rows; this is not a stainless welding identity.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

###### Alternating current (`welding_power`)

Meter actual frame welding and fume-extraction demand at below-1-kV grid-average supply. Omit the operation when no site weldments are made.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

#### Outputs

##### Elementary flows

###### Particulate matter, particle size unspecified (`welding_pm_air`)

Only measured particulate matter emitted to outdoor air after capture, with particle size and air subcompartment unspecified. Document controls and sampling coverage; not every welding operation is presumed to emit this recorded quantity. Captured dust is waste.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

### Process: Metal powder coating (`coating`)

Only the actual site finishing route; uncoated or purchased finished parts omit it.

#### Inputs

##### Product flows

###### Powder Coating (`powder_paint`)

Only actual powder coating of fabricated metal parts; specify one formulation, resin, color and consumption net of powder returned to stock. No cure schedule, material fraction or film thickness is imposed.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Alternating current (`coating_power`)

Meter actual coating and electric curing; this row does not cover a fuel-fired oven. Add the actual fuel and measured species separately if that route occurs. Grid-average delivered below 1 kV.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

#### Outputs

##### Waste flows

###### Discarded polyester coating powder (`powder_waste`)

Conditional on polyester powder being the actual discarded formulation; weigh overspray separately from cured chips and internal recovered powder. Other formulations need separate rows.

- Selected flow: Discarded polyester coating powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

### Process: Configured poultry appliance assembly (`assembly`)

All products; specific installed components differ between incubators and brooders.

#### Inputs

##### Product flows

###### Finished incubator enclosure (`cabinet`)

Only a purchased complete enclosure with specified material, door/top/base and included insulation boundary; replace on-site stock fabrication/molding for the same part.

- Selected flow: Finished incubator enclosure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished electric resistance heater module (`heater`)

Only the purchased electric resistance heating element of the installed incubator voltage/rating and released design. This broad public purchased-component identity is narrowed by actual resistance-heater specification and net mass; it does not identify the complete brooder panel. Do not duplicate an element already included in a supplied panel.

- Selected flow: Finished electric resistance heater module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished low-voltage brooder heating panel (`brooder_panel`)

Only for contact/radiant electric brooders; record supplied sealed panel mass, voltage and included heating element. Do not separately count its contained heater.

- Selected flow: Finished low-voltage brooder heating panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished incubator circulation fan assembly (`fan`)

Only if installed; retain motor/impeller/guard assembly boundary, voltage and net mass; a purchased assembly must not duplicate an included motor. Natural-convection machines omit this part.

- Selected flow: Finished incubator circulation fan assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished egg-turning geared drive (`turner`)

Only automatic-turning setters; record gearmotor/drive boundary, part number and mass. Manual-turning machines and hatchers without a turner omit this exchange.

- Selected flow: Finished egg-turning geared drive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished polypropylene egg tray (`egg_tray`)

Only when supplier/BOM verifies polypropylene; record tray type, installed count and each net mass. No polymer type is inferred from the manual illustration.

- Selected flow: Finished polypropylene egg tray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished temperature-control electronic board (`controller`)

Only where installed; identify assembled-board boundary including firmware and connectors, mass and actual control functions; standalone sensors remain separate only if not included.

- Selected flow: Finished temperature-control electronic board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished temperature-and-relative-humidity sensor module (`sensor`)

One physically assembled combined sensor module, not two interchangeable substances. Record actual part and mass; if temperature and humidity sensors are separate, replace with two physical part rows.

- Selected flow: Finished temperature-and-relative-humidity sensor module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished mains-to-low-voltage brooder power supply (`power_supply`)

Include the matched power unit supplied as part of the accepted brooder even if detached during shipment; retain output voltage, cable boundary and mass. It cannot be excluded as external farm infrastructure.

- Selected flow: Finished mains-to-low-voltage brooder power supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished insulated copper wiring harness (`harness`)

Record one supplied harness boundary, connectors, conductor/insulation specification and mass; no duplicate copper or insulation input for the purchased harness.

- Selected flow: Finished insulated copper wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished adjustable brooder support leg (`legs`)

One specified leg design per row; collect installed count and net part mass, actual polymer/metal grade and attachment; do not infer material from an illustration.

- Selected flow: Finished adjustable brooder support leg
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished polypropylene incubator water pan (`water_pan`)

Only separate purchased PP pans verified by supplier BOM; integral channels in an included molded base are not another input. Pan covers/linkages not already included need their own rows.

- Selected flow: Finished polypropylene incubator water pan
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished silicone-rubber door gasket (`gasket`)

Only the installed specified silicone formulation and profile; record length and net mass. Machines with another seal material need its own material-specific part.

- Selected flow: Finished silicone-rubber door gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel hexagon bolt (`bolt`)

Specify grade, coating, installed count and mass; nuts/washers actually supplied require separate atomic exchanges if not already in a defined assembly.

- Selected flow: Finished steel hexagon bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_power`)

Meter actual assembly and attributable powered tools using delivered below-1-kV grid-average electricity. Record included cable/electronic assembly boundaries.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

### Process: Factory functional acceptance and rework (`acceptance`)

All products; actual release test plan defines relevant functions and test-water use.

#### Inputs

##### Product flows

###### Alternating current (`test_power`)

Measure electricity actually consumed during factory heat/control, circulation, turning and electrical-safety tests of the installed configuration, including failed tests and rework. Do not use incubation-day or brooding-week operation as manufacturing demand.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Tap water (`test_water`)

Only mains water actually added during factory humidification/leak tests; collect make-up mass or volume with measured density and temperature. Reuse is internal; farm water is excluded.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Poultry incubators and brooders (`finished_machine`)

Accepted complete machine of the declared electric incubator/hatcher or electric brooder configuration: no eggs/chicks, litter, process water or transport packaging in net mass; supplied detachable trays, legs and matched power unit are included.

- Selected flow: Poultry incubators and brooders `f4726903-5715-4f8c-832b-7eeaf33d03c8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Spent incubator humidification-test water (`test_wastewater`)

Only liquid actually exported to treatment after factory tests; quantify mass and composition separately from tap-water make-up, retained water and evaporation. No equality to water input is presumed.

- Selected flow: Spent incubator humidification-test water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

### Process: Dispatch protection and packaging (`packing`)

Only actual factory-applied packaging.

#### Inputs

##### Product flows

###### Polyethylene film (`film`)

Only PE film actually applied; record polymer grade and net issue after returns, separately from board and any foam.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Corrugated cardboard (`board`)

Applicable only when supplied board matches C/E/F flute and at least 80% fibre as defined by this public record. Document actual recycled content and configuration; other board grades require their own identity. This is a flow-matching condition, not a mandatory packaging specification.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | Use directly metered or work-order-issued exchanges first. Under cp_allocation, partition remaining shared utility by measured causal driver: machining/welding machine operating time with measured power; molding heater time/load with measured batch demand; coating loaded area with measured batch consumption; assembly/test station time with measured station demand. Document driver coverage and reconcile total allocated plus excluded demand to the original meter. |  |
| allocation_variants | product_mix | Do not allocate all production by machine count when variants have different energy demand or configurations. A fallback mass or economic basis needs documented foreground justification, sensitivity and review; it is not a default imposed by this PCR. |  |
| allocation_scrap | steel_offcuts | Keep virgin/material inputs and separately measured scrap outputs without an automatic avoided-steel credit. Report scrap price and destination when relevant; any co-product classification or recycling credit requires a separately declared reviewed model to prevent double credit. Recovered powder recirculated internally is not a saleable co-product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration and sampled serial with traceable coverage | same manufacturing period as activity records | accepted complete supply at one declared site | accepted net mass per machine | scale calibration; dry empty appliance; supplied power-unit/part boundary; detachable-part weights; acceptance sign-off |
| cp_molding | molding | each atomic row in this process | measurement | resin grade/form; issues/returns; molding/cooling kWh; trim mass; internal regrind; accepted part count | Weigh individual resin inputs and external trim; meter actual molding/cooling; reconcile internal reclaim and stock. Retain actual work instructions and part/BOM boundaries. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_fabrication | fabrication | each atomic row in this process | measurement | stock alloy/grade/thickness; issues/returns; part mass; separate carbon/stainless offcuts; kWh; work order | Weigh each stock and outgoing alloy fraction, meter operations and reconcile internal parts, unused returned stock and losses. Actual wet machining requires separate cutting-fluid and waste rows. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_welding | welding | each atomic row in this process | measurement | wire specification; spool issues/returns; kWh; measured particulate species/medium; collected filter waste; control coverage | Use approved actual welding work orders and meters; measure outdoor particulate after controls where relevant. Record captured dust as a separate specified waste before closing inventory. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_coating | coating | each atomic row in this process | measurement | powder formulation; issues/returns/reclaim; retained coating; discarded powder; electrical oven kWh; work order | Weigh actual formulation and external losses, meter coating/curing and reconcile retained coating and internal recovery. Any pretreatment chemical, rinse effluent, liquid paint or fuel-fired heating requires additional concrete rows and actual records. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_assembly | assembly | each atomic row in this process | measurement | configuration/BOM revision; part number/material; supplied assembly boundary; installed count; individual part mass; issues/returns; kWh | Reconcile received/issued/returned parts to installed configured appliance; weigh each part type and avoid included-assembly duplication. Include detached supplied power unit/trays/legs. No assumptions about polymer grade from pictures. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_acceptance | acceptance | each atomic row in this process | measurement | model/serial/configuration; released test plan; test duration; temperature/control response; circulation; turner operation; humidity/leak checks; electrical safety; pass/fail/rework; kWh; test water make-up; reused/retained/removed water; effluent composition; measured M | Use signed model-specific release test procedures and recorded acceptance results. Meter actual factory electricity and water, including failed tests/rework; record actual test loads separately. Thermal setpoints, test duration and safety limits come from approved current foreground specifications, not husbandry advice in historical manuals. | kg; MJ | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_packing | packing | each atomic row in this process | measurement | PE film mass; board flute/fibre/recycled content; issue/return; serial shipment | Weigh each actual packaging part, reconcile returns and shipments; exclude packaging from M. Additional foam, wooden supports or metal protectors need distinct single-material/component rows. | kg | each batch/work order; each test; reconcile monthly | one complete declared production year or justified shorter complete batch; same period as accepted counts | same site and configuration; include outsourced-work boundary explicitly | attributable exchange amount / accepted machines | calibration; supplier specification; stock reconciliation; accepted count; excluded demand; missing-record disclosure |
| cp_allocation | manufacturing | shared_demand | measurement | total utility; measured power/load; operating time; coated area; accepted configuration counts; excluded demand | Submeter where possible; measure load and causal drivers for shared machines/ovens/stations and document why the driver represents each shared exchange. | MJ; h; m2 | each shared batch and monthly reconciliation | same production interval | all consuming products and excluded operations at this site | partition total by measured causal demand; then aggregate attributable amount / accepted machines | submeter agreement; total closure; driver uncertainty; sensitivity; approval record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | abs_granulate; molding_power; abs_trim; stainless_sheet; carbon_plate; fabrication_power; steel_offcuts; stainless_offcuts; welding_wire; welding_power; welding_pm_air; powder_paint; coating_power; powder_waste; cabinet; heater; brooder_panel; fan; turner; egg_tray; controller; sensor; power_supply; harness; legs; water_pan; gasket; bolt; assembly_power; test_power; test_water; test_wastewater; film; board | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Before applying normalize_mass, retain one declared configuration and matched period. Derive each q_item from its protocol: net stock/part issues minus valid returns, attributable meter use or measured waste/emission divided by accepted machine count for that same configuration. Include rejects and rework in manufacturing burdens carried by accepted output; never divide by all starts. Mass-weight datasets with different measured M values only after keeping configuration-specific records. Unit conversion and allocation are performed on raw records and retained as separate calculation evidence; no universal consumption range, density or emissions factor is supplied.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all_flows | Match actual part/material grade, supplied state, concentration, geography, reference property and units. A UUID is identity only, not amount evidence or a provider dataset. Resolve blanks before treating an exchange as fully linked. | supplier sheet; flow/property/unit records; identity review |
| quality_completeness | complete_machine | Reconcile all configured BOM components, supplied detachable items and power units to M; inventory actual utilities, chemicals, each waste and emission. Measure missing parts rather than infer them as the residual of M. Report coverage and any unlinked provider. | BOM revision; weigh sheets; material balances; missing-data register |
| quality_period | production_records | Use one declared factory and complete representative period; record model changes, seasonality, idle demand, outsourcing and rework; quantify primary coverage and uncertainty. Historic product cases cannot substitute for current production records. | work orders; acceptance ledger; meter calibration; source limits |
| quality_test | acceptance | Use actual released model acceptance criteria for installed heating/control, air circulation, egg turning, humidity hardware and electrical safety; brooders use their own panel/supply conformity checks. No biological hatchability, survival or arbitrary durability threshold. | signed test plan and serial/configuration-linked results |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require 1 kg reference output, measured M from cp_mass, complete electric-machine configuration and supplied detachable parts, dry empty state and packaging exclusion. Missing mass or acceptance evidence prevents a complete dataset claim. |  |
| validation_normalization | inventory | Every applicable non-reference row uses normalize_mass and a declared protocol; check q_item and M share configuration/period, correct division direction and preserved energy/volume/item numerator units. |  |
| validation_route | processes | Match make-or-buy, actual molding, metal fabrication, joining and coating to work orders; do not duplicate raw stock and bought-in finished parts, included heaters/motors and their assemblies, or internal reclaim. |  |
| validation_species | elementary_flows | Check fossil/biogenic carbon, NO2 versus NO/NOx/N2O, particle size, outdoor air subcompartment and control boundary. Unknown species or media remain gaps; wastewater treatment transfer is not a freshwater emission. |  |
| validation_coverage | dataset | Disclose measured, calculated, estimated, excluded, not-applicable and missing quantities distinctly; reconcile accepted outputs, scrap, stock and allocation closure. A method check or valid projection does not approve scientific methodology or establish cradle-to-gate completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A documented manufacturing module for the exact configured machine and period; upstream-connected assessment only after supplier/transport/treatment coverage is established. |
| excluded_use | Poultry incubation/brooding services, hatchability/survival comparisons, lifespan-normalized claims, generic equivalence between appliance configurations, and unsupported complete cradle-to-gate claims. |
| required_metadata | PCR id; model/configuration/BOM and serial scope; measured M and dry empty supply state; acceptance standard; site/period; make-or-buy and process route; reference basis; providers and transport; packaging; allocation; data sources; version. |
| required_quality_disclosure | Measured coverage, missing identities/providers and quantities, route exclusions, source age/limits, conversion conditions, allocation evidence, emissions monitoring gaps, uncertainty and independent review status. |
| update_trigger | BOM or configuration change; revised acceptance test; changed supplier/process/coating or energy supply; new representative production period; resolved identity or evidence gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| brinsea-ovation | handbook | Brinsea Ovation 56 Eco instructions, AG45 US Issue 01 (historical PDF metadata 2016), PDF/printed p.5 Part quantities, p.12 Display and p.18 Cleaning up. https://www.brinsea.com/Manuals/Ovation56EcoUS.pdf | Model-specific supplied top/base, carriers/link/covers and heater/turning/circulation architecture only; no polymer grade, capacity, farm temperature/humidity/turning interval, drying duration, factory acceptance threshold, mass or lifetime adopted. Current BOM and release procedures govern datasets. |
| brinsea-ecoglow | handbook | Brinsea EcoGlow Safety 2000 instructions, HD603 US Issue 01 (historical PDF metadata 2019), PDF p.1 supply warning, introduction and Assembly. https://www.brinsea.com/Manuals/EcoGlow2000manual.pdf | Model-specific sealed low-voltage heater panel, supplied matched power unit and adjustable corner legs; no chick capacity, farm energy savings, claimed warranty/life or general safety-test limit transferred to manufacturing. |
