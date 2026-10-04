---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.front-end-shovel-loaders-self-propelled
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Self-propelled front-end shovel loaders

## 1. Scope and Applicability

This PCR covers complete self-propelled front-end loaders whose principal function is front-bucket excavation, scooping, carrying and loading earth, minerals or similar material. Wheeled, skid-steer and crawler arrangements and diesel, battery-electric or documented hybrid power configurations are included when that principal function and complete-machine interface are established. Size or one manufacturer model does not define the category. Record actual steering, traction, hydraulic, braking, operator protection, bucket/coupler, power and thermal architectures.

Exclude standalone buckets, attachments and parts; bulldozers, graders, scrapers and rollers; 360-degree excavators; and complete backhoe loaders or other mixed excavation architectures whose principal function/classification needs a separate review. An auxiliary fork or ripper supplied with a genuine front-loader does not alone change its principal category, but disclose and inventory its actual supplied content. Do not infer a hybrid classification from a convenient motor UUID. This is factory dataset-production methodology; loading performance, lifetime productivity and downstream service fuel are outside the manufacturing reference.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.front-end-shovel-loaders-self-propelled |
| classification_refs | CPC 3.0 44425 |
| covered_products | Complete self-propelled front-end wheeled or crawler loader; actual power architecture and supplied configuration declared. |
| excluded_products | Separate attachments and parts; backhoe loaders pending separate category review; revolving excavators and adjacent earthmoving principal functions. |
| representative_product | One complete accepted front-loader of one declared configuration; not a fixed model or recipe. |
| production_route | Bought complete modules with conditional onsite cutting, forming, machining, welding and coating, followed by assembly, filling, test and dispatch. |
| market_state | Complete accepted manufactured machine at factory gate; delivered bucket, loose accessories and retained fills identified. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture an accepted complete self-propelled front-end loader. |
| How much | 1 kg of accepted net machine mass; record one accepted complete machine through measured M. |
| How well | Same declared configuration passes documented dimensional, traction, steering, braking, bucket/hydraulic, leak and power-system acceptance requirements; do not invent test loads or thresholds. |
| How long or cycle | One factory production and acceptance period; no assumed service lifetime. |
| reference_flow_link | loader |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Front-end shovel loaders, self-propelled `2282e30c-6b3c-478d-98ce-3f74677c00b5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; serial/configuration; principal function; wheeled/skid-steer/crawler architecture; powertrain; battery chemistry or engine/aftertreatment; bucket/coupler and supplied accessories; fills; accepted net mass M; site; period; make/buy interfaces; actual test and dispatch state. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| native_units | all inventory rows | Actual native property | kg; MJ | Keep each native numerator unit. The electricity reference property is named Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; its verified Units of energy group uses MJ, with 3.6 MJ/kWh for calibrated electricity meter conversion. This legacy property name does not prescribe a fuel-heating-value algorithm. Items or lengths require the actual same-construction conversion only where mass accounting needs it. Gas volume requires actual T/P and density; capacity does not give mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received metal stock and externally supplied complete modules; state, existing coatings, fills and supplier upstream boundary declared. |
| starting_condition_role | foreground_dataset |
| product_classification_scope | Complete self-propelled front-end loader; classification does not impose one supplier BOM. |
| recursive_input_rule | Record an actual same-category bought machine once at its received state; expand only actual site finishing or modification, and do not manufacture the whole input again. |
| upstream_dataset_requirement | Require compatible upstream datasets for actual atomic supplies; include embedded materials/processes once in bought complete modules. |
| disclosure | Site, period, configuration, actual make/buy interface, module contents, excluded operations and missing data. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| factory_boundary | Include actual fabrication, outsourced processing through upstream interfaces, assembly, filling, test/reject/rework and dispatch packing. Separate delivered fills from consumed test media. Exclude customer use and unrelated factory products. | jrc-metal-2020; volvo-l120-electric; cat-track-loaders |
| no_double_count | A bought complete module embeds its materials, coatings and supplier processes once. If a module is made onsite, replace that bought row with actual atomic inputs and processes. Internal transfers have paired equal output/input and cancel for the aggregate machine dataset. | jrc-metal-2020 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Conditional component fabrication and surface finishing | conditional | Actual site route and same accepted configuration only | foreground | loader |
| assembly | Configuration assembly and factory filling | required | Actual site route and same accepted configuration only | foreground | loader |
| test_dispatch | Acceptance test and dispatch | required | Actual site route and same accepted configuration only | foreground | loader |

### Process: Conditional component fabrication and surface finishing (`fabrication`)

#### Inputs

##### Product flows

###### Hot-rolled carbon steel plate (`steel_plate`)

Only actual site-fabricated frame, lift arm or bucket plate; measure grade, thickness and issued mass.

- Selected flow: Hot-rolled carbon steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Steel welding filler wire (`welding_wire`)

Only actual welding route; record wire grade and issued/returned mass.

- Selected flow: Steel welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### oxygen (`oxygen`)

Only actual oxyfuel cutting with matching gaseous cryogenic at-plant supply and purity; no ambient-air proxy.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Carbon dioxide shielding gas (`carbon_dioxide_gas`)

Only actual CO2 shielding supply, separately from emitted CO2; purity and phase required.

- Selected flow: Carbon dioxide shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Argon shielding gas (`argon`)

Only actual argon shielding; split mixed shielding formulations into separately identified atomic supply rows.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Metalworking cutting fluid (`cutting_fluid`)

Only machining at this site; record supplied formulation, dilution, stocks and separate make-up water.

- Selected flow: Metalworking cutting fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Process Water (`water`)

Only matching purchased industrial process water used for cleaning or formulation; actual inlet state and supplier required.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Alternating current (`electricity`)

Conditional CN user-side below 1 kV supply only. Other voltage/geography needs its own qualified atomic identity. Meter fabrication and allocate unassigned shared loads only.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Natural gas fuel (`natural_gas`)

Only actual onsite fuel-fired cutting or coating heat; independently metered fuel and flue emissions.

- Selected flow: Natural gas fuel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Purchased industrial heat (`heat`)

Only actual external heat supply; separate physical carrier from net enthalpy and do not add supplier boiler fuel onsite.

- Selected flow: Purchased industrial heat
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Water-based coating (`paint`)

Only actual water-based coating formulation with compatible chemistry and solids; other resin/solvent formulations require separate rows and evidence.

- Selected flow: Water-based coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Isopropanol (`ipa`)

Only matching CN at-plant chemical supply for actual cleaning; independently verify assay, issued solvent and fate.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

#### Outputs

##### Waste flows

###### Carbon steel fabrication scrap (`steel_scrap`)

Actual separated offcuts/chips with contamination and receiver route declared.

- Selected flow: Carbon steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Metalworking cleaning wastewater (`wastewater`)

Actual collected wastewater, composition and receiving treatment, not an elementary water emission by default.

- Selected flow: Metalworking cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Coating booth paint sludge (`paint_sludge`)

Actual captured sludge; wet mass, dry solids and solvent retention independently measured.

- Selected flow: Coating booth paint sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

##### Elementary flows

###### Particles below 2.5 micrometres to air (`particulates`)

Only measured matching aerodynamic size fraction after control; captured filter dust is waste, not air release.

- Selected flow: Particles below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`

###### isopropanol (`ipa_air`)

Actual IPA release to ordinary unspecified air only; captured, recovered, retained and wastewater IPA cannot be counted as air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`

### Process: Configuration assembly and factory filling (`assembly`)

#### Inputs

##### Product flows

###### Complete diesel engine module (`engine`)

Actual diesel configuration only; engine, cooling and aftertreatment boundaries declared.

- Selected flow: Complete diesel engine module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `cat-track-loaders`

###### Complete loader transmission (`transmission`)

Actual mechanical or hydrostatic supply interface; no raw steel double counting.

- Selected flow: Complete loader transmission
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Complete loader drive axle (`axle`)

Actual wheeled configuration, one axle per atomic exchange identity; construction and brakes declared.

- Selected flow: Complete loader drive axle
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Complete loader hydraulic pump (`pump`)

Actual pump supply; displacement and drive interface required.

- Selected flow: Complete loader hydraulic pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Complete loader hydraulic cylinder (`cylinder`)

Actual steering, lift or tilt cylinder type separately identified; bought complete cylinder is not cylinder-part stock.

- Selected flow: Complete loader hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Hydraulic hose assembly (`hose`)

Actual pressure-rated hose construction and termination, measured installed quantity.

- Selected flow: Hydraulic hose assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Loader pneumatic tyre (`tyre`)

Wheeled configuration only; tyre construction, size and complete bought state declared.

- Selected flow: Loader pneumatic tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Complete loader crawler undercarriage (`track`)

Tracked configuration only; track chains, shoes and rollers embedded once in bought complete module.

- Selected flow: Complete loader crawler undercarriage
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `cat-track-loaders`

###### Complete loader operator cab (`cab`)

Declare glazing, seating, protective structure and HVAC contents; separately count fills not included in supplier dataset.

- Selected flow: Complete loader operator cab
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Complete front-loader bucket (`bucket`)

Only supplied external bucket; exclude if fabricated in fabrication inputs already; declare teeth, edge and coupler inclusion.

- Selected flow: Complete front-loader bucket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Complete LFP traction battery pack (`battery`)

Actual LFP electric architecture only; chemistry, thermal system and pack enclosure declared. Other chemistry requires separate atomic rows.

- Selected flow: Complete LFP traction battery pack
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Complete loader traction motor (`motor`)

Electric configuration only; actual AC/DC architecture and complete supplied drive interface required.

- Selected flow: Complete loader traction motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Complete loader traction inverter (`inverter`)

Actual electric architecture only; voltage and included electronics declared.

- Selected flow: Complete loader traction inverter
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Loader vehicle wiring harness (`wire`)

Actual complete harness construction; power cable cannot substitute for all signal wiring.

- Selected flow: Loader vehicle wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Lead-acid auxiliary battery (`aux_battery`)

Only actual lead-acid auxiliary architecture; record separate identity from traction battery.

- Selected flow: Lead-acid auxiliary battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Hydraulic Fluid (`hydraulic_oil`)

Actual separately supplied matching hydraulic fluid; declare grade and net retained factory fill.

- Selected flow: Hydraulic Fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Lubricating oil (`lubricating_oil`)

Actual gearbox, axle or engine oil grade; separately identify different grades rather than combine them.

- Selected flow: Lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Lubricating grease (`grease`)

Actual grease supplied outside complete modules; issued, recovered and retained masses separate.

- Selected flow: Lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Engine cooling liquid (`coolant`)

Only actual engine or battery thermal-loop formulation; distinguish concentrate and premixed supply.

- Selected flow: Engine cooling liquid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Nitrogen charging gas (`nitrogen`)

Only actual separately charged brake accumulator; pressure, temperature and purity required.

- Selected flow: Nitrogen charging gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Diesel exhaust fluid aqueous urea solution (`urea`)

Only actual SCR equipped diesel machine; exact solution concentration and factory retained/consumed quantities separately measured.

- Selected flow: Diesel exhaust fluid aqueous urea solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `cat-track-loaders`

###### Refrigerant R134a (`r134a`)

Only nameplate-confirmed R134a HVAC; actual retained fill and loss, not catalogue charge.

- Selected flow: Refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Refrigerant R1234yf (`r1234yf`)

Only actual R1234yf HVAC nameplate; never substitute R134a identity.

- Selected flow: Refrigerant R1234yf
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`

#### Outputs

### Process: Acceptance test and dispatch (`test_dispatch`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Diesel flow leaves grade, formulation, density, heating value, refinery and provider unspecified; collect those actual qualifiers independently. Diesel route only: separate test consumption, recoverable return and delivered tank fill; no operating-service fuel default.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `cat-track-loaders`

###### Alternating current (`test_electricity`)

Matching CN below-1kV electricity only; include charging and acceptance-test meter, initial/final battery stored energy and export separately.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `volvo-l120-electric`

###### Wooden load board (`wood`)

Only actual dispatch support for loose accessories or parts; complete loader may ship without a pallet. Packaging is excluded from accepted net machine mass.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`

###### Low-density polyethylene foil (PE-LD) (`pe_film`)

Only actual PE-LD non-self-adhesive noncellular nonreinforced nonlaminated unsupported foil; no arbitrary plastic film.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`

#### Outputs

##### Product flows

###### Front-end shovel loaders, self-propelled (`loader`)

One accepted complete configured self-propelled front-end loader; declare supplied bucket, accessories and retained fills; exclude transport packaging and test load.

- Selected flow: Front-end shovel loaders, self-propelled `2282e30c-6b3c-478d-98ce-3f74677c00b5`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-2025`

##### Waste flows

###### Used hydraulic oil (`oil_waste`)

Actual drained test or rejected-machine oil, condition and receiver treatment required.

- Selected flow: Used hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

###### Rejected complete loader for dismantling (`rejected_machine`)

Only irrecoverable complete reject transferred outside site; kept separate from accepted output denominator and repair loops.

- Selected flow: Rejected complete loader for dismantling
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `jrc-metal-2020`

##### Elementary flows

###### carbon dioxide (fossil) (`co2`)

Only measured fossil carbon combustion emission to ordinary unspecified air; no supplier upstream boiler emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`

###### carbon monoxide (fossil) (`co`)

Actual species-specific post-control test exhaust and independently assessed fugitive release to ordinary air; not carbon closure residual.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`

###### Nitrogen dioxide to air (`no2`)

Actual molecular NO2 measurement only; NOx as NO2-equivalent is not this molecular identity.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_inventory.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| actual_attribution | First separate configuration and process meters/records; allocate only actual common-period unassigned residual services using a documented causal driver. Include attributable scrap, reject, repair and repeated test burdens in accepted production; do not allocate them away as usable co-products. Record scrap recipient and treatment; no automatic avoided-production credit. | jrc-metal-2020 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted serial | Same production period | Declared factory | accepted net mass per machine | Calibration; serial-linked acceptance; supplied-content list |
| cp_inventory | all | atomic exchanges | foreground records | row identity; issued/returned amount; stocks; meters; Naccepted; reject/rework/test logs; native unit; assay; receiver | Measure actual atomic exchanges by calibrated scales/meters and traceable invoices, supplier interfaces and test logs; record each absent route as not_applicable with evidence; unknown is not zero. | kg; MJ | Each batch and test | Same production period | Declared factory | attributable exchange / accepted machines | Calibration; supplier scope; bills; stock and test reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass; cp_inventory | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| same_period | all inventory rows | Use one configuration and period: Qattr includes its attributable reject/rework/test burden, Naccepted counts complete accepted loaders, Dnet sums calibrated accepted net masses, M=Dnet/Naccepted, q_item=Qattr/Naccepted and q_ref=Qattr/Dnet. Exclude transport packaging, reject mass and consumed test-load material from Dnet. Keep distinct configurations separate or disclose justified weighting. | cp_mass; cp_inventory; actual supplier, stock, test, measurement and receiver records |
| bom_completeness | all inventory rows | Reconcile actual serial-linked BOM and supplied configuration: frame/arms, bucket and coupler, traction/steering/brakes, wheels or crawler, operator protection/cab, hydraulics and controls, engine/cooling/aftertreatment or battery/motor/inverter/thermal system, auxiliary power, fasteners, fills and delivered accessories. Every additionally present grade, module, coating component, fuel, gas, packing or waste requires its own atomic row and qualified identity. No example list is a universal recipe. | cp_mass; cp_inventory; actual supplier, stock, test, measurement and receiver records |
| element_balance | all inventory rows | Each physical element balance uses each stream measured gross mass multiplied by its own composition/assay, moisture and wet/dry basis, with stocks, reactions, retained content and returns. Gross alloy, contaminated swarf or sludge is not contained Fe or C. Cancel paired internal transfers. Independently reconcile bought-module contents with actual net mass without expanding supplier burdens twice. | cp_mass; cp_inventory; actual supplier, stock, test, measurement and receiver records |
| water_balance | all inventory rows | Each inlet, coolant/solution, wet sludge and discharge has its own water fraction and measured/documented density at actual temperature; reconcile retention, evaporation, reaction water, return and stock. Count gross water returns once. | cp_mass; cp_inventory; actual supplier, stock, test, measurement and receiver records |
| solvent_fate | all inventory rows | Species-specific solvent input equals actual retained, recovered, captured, destroyed, wastewater/media, air and stock-change fates with uncertainty. Capture is not destruction; unexplained residual is never assigned to air. Use post-control measured species concentration and matched gas flow in the same period/state with actual unit corrections and independent fugitive evidence. Carbon closure cannot derive CO or NOx. | cp_mass; cp_inventory; actual supplier, stock, test, measurement and receiver records |
| utility_balance | all inventory rows | Reconcile common-period purchased electricity plus actual onsite generation minus exports and storage change against fabrication, assembly, test and dispatch meters. Shared services are only unassigned residual; investigate negative residuals and uncertainty without clipping. Thermal net input is supply mass times its own specific enthalpy minus independently measured return mass times its own specific enthalpy on one datum. Deduct gross return once; already-net supply is not reduced twice. Physical steam/return mass is separate from heat. | cp_mass; cp_inventory; actual supplier, stock, test, measurement and receiver records |
| test_accounting | all inventory rows | Collect actual acceptance test duration/load, fuel, charging, oil/coolant and leaks; include failed tests and repairs. Initial/final delivered fuel and battery state are stocks, not assumed consumption. Actual battery cooling/heating is distinct from motor/transmission cooling. Catalogue operating weight, tank capacity, battery rating, productivity, fuel savings and refrigerant service charge do not prescribe factory mass, energy, recipes or emissions. | cp_mass; cp_inventory; actual supplier, stock, test, measurement and receiver records |
| identity_gaps | all inventory rows | Unresolved identities remain explicit candidate gaps. Before dataset use, verify each actual supply or release type, chemistry, supplied state, class, reference property/unit, provider/geography and elementary compartment; reject conflicting identities. Missing data is unknown, absent route is evidenced not_applicable, and measured zero is a separate recorded fact. | cp_mass; cp_inventory; actual supplier, stock, test, measurement and receiver records |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| complete_reference | Require complete accepted machine identity, declared configuration and calibrated net M with explicit per-item to per-kg relationship in both languages. Reject a component, one model proxy, packed weight or downstream performance as the reference. | un-cpc-2025 |
| inventory_closure | Verify all present routes and atomic exchanges, make/buy cancellation, reject/test attribution, material/water/solvent/utility reconciliation, native-unit conversions and evidence. Report performed and skipped checks, errors and unresolved coverage; no gap may silently pass as zero. | jrc-metal-2020; volvo-l120-electric; cat-track-loaders |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Configuration-qualified factory production dataset for compatible process or lifecyclemodel projection. |
| excluded_use | Unqualified universal loader recipe, comparative lifetime loading service, operating-fuel benchmark, or candidate identity treated as reviewed truth. |
| required_metadata | Configuration; geography; period; net mass; actual interfaces; supplied state; production/test boundary; upstream identities. |
| required_quality_disclosure | Missing identities and measurements; assumptions; uncertainty; exclusions; allocation; reconciliation and native conversion evidence. |
| update_trigger | Changed principal function, power architecture, chemistry, supplier boundary, make/buy route, test protocol or evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp. 234–235. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full complete-loader scope, excavator and part neighbours; no BOM quantities. |
| volvo-l120-electric | handbook | Volvo Construction Equipment, Product Guide L120 Electric, document 22-20064945-A, pp. 4–5, 8–9; undated manufacturer edition. https://www.volvoce.com/-/media/aprimo/pdf/electric-large-wheel-loaders/l120-electric-c2/product-guide-l120-electric-en-22-20064945-a.pdf?v=R9J1Pw | Actual wheel-loader electric, drivetrain, hydraulic, cab/fill and equipment architecture; model specifications are not production defaults. |
| cat-track-loaders | handbook | Caterpillar, Cat Track Loaders 953 - 963 - 973, ©2023, pp. 14–15; manufacturer document retained by authorised dealer Gmmco. https://api.gmmco.in/uploads/CM_20231025_a9814_5f435_944b5263ce.pdf | Crawler/diesel and actual conditional aftertreatment, bucket and operator-protection architecture; no catalogue inventory factors. |
| jrc-metal-2020 | literature | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN, 2020, DOI 10.2760/894966, printed pp. 26, 121. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | Conditional metal fabrication, welding, coating and source-control processes; industry practices do not establish one loader factory recipe. |
