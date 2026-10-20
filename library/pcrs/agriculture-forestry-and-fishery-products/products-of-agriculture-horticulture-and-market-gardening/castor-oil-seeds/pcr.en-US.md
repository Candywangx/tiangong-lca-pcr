---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.castor-oil-seeds
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Castor oil seeds

## 1. Scope and Applicability

This PCR covers managed production of *Ricinus communis* and delivery of harvested, unprocessed castor seed at the producer or primary-conditioning hand-off. It includes annual or short-lived perennial cultivation, repeated picking or one terminal harvest as declared, pod/seed separation, drying, cleaning, grading, and off-specification routing. It excludes castor-oil extraction, crushing, refining, meal or derivative manufacture, and certified planting seed. The operator shall declare route, harvest pattern, moisture basis, and the exact producer or conditioning gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.castor-oil-seeds |
| classification_refs | CPC 3.0: 01447 (classification context); mapping relation: narrower |
| covered_products | Harvested, unprocessed *Ricinus communis* seed after pod separation and required drying, cleaning, and grading |
| excluded_products | Planting seed; intact capsules; castor oil; press cake or meal; refined oil; derivatives; other oilseeds |
| representative_product | Cleaned and graded castor seed for oil extraction, before crushing |
| production_route | Managed annual crop or short-lived perennial stand; repeated picking or terminal harvest; pod/seed separation; drying; cleaning; grading; producer or primary-conditioning hand-off. Annual and perennial routes coexist as alternatives and shall not be combined before route-specific inventories are complete. Manual and mechanical routes are technology alternatives attached to the relevant parent activity. |
| market_state | Harvested unprocessed seed, free of bulk pod material, at declared moisture and grade, before oil extraction |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Castor seed delivered at the declared producer or primary-conditioning hand-off |
| How much | 1,000 kg net seed mass at declared moisture |
| How well | Pod-separated, cleaned and graded; moisture, grade, impurity, route, harvest pattern, and hand-off declared |
| How long or cycle | One annual crop cycle, or reporting year plus establishment/production phase for a perennial stand |
| reference_flow_link | accepted_castor_seed |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Castor Seed `d52055a9-c05b-4edd-ad58-f3271a360458` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Ricinus communis*; harvested unprocessed seed; net mass; moisture and basis; annual/perennial route; repeated-picking/terminal-harvest pattern; grade; impurity; producer/conditioning hand-off; geography; period |

The detail read confirms Product flow, Castor Seed, exact CPC 01447, and Mass. Platform geography, gate, and route fields are blank, so the foreground package shall supply them and shall not infer them from the UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted seed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net seed mass excluding packaging and bulk pod material. |
| `moisture_basis` | capsules, seed, rejects, losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg plus % wet basis | Measure moisture at each hand-off; dry matter = wet mass × (1 − moisture fraction), and disclose conversions. |
| `area_period` | cultivation | area and time | ha and reporting period | Distinguish establishment, productive-year, replacement, and termination records for perennial stands. |
| `energy_consistency` | machinery and drying energy | carrier-appropriate | native unit and MJ | Preserve measured carrier units and use documented conversions. |

## 5. System Boundary

The foreground boundary starts with a declared managed field or perennial stand and ends at accepted seed hand-off. Cultivation, harvest, separation, drying/cleaning, and grading are distinct responsibilities with separate states, losses, inputs, and hand-offs. Repeated pickings link to field block and lot; terminal harvest closes the crop cycle. Oil extraction is outside the boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established field or stand with geography, area, cultivar, route, age or phase, prior land use, and soil-management context declared |
| starting_condition_role | Foreground managed-biological-production start; perennial establishment and termination remain visible through multi-period attribution |
| product_classification_scope | CPC 3.0 01447; classification does not define moisture, gate, route, or grade |
| recursive_input_rule | Purchased castor planting seed is an upstream input distinct from the reference product; purchased harvested seed blended into a lot requires a separate upstream dataset and mass disclosure |
| upstream_dataset_requirement | Purchased planting material, nutrients, water, protection products, energy, and external services require representative upstream datasets after concrete identity resolution |
| disclosure | Declare route, phase, harvest pattern, technology, moisture, internal hand-offs, rejected/reworked paths, and exact gate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_to_seed` | foreground system | Include crop management, capsule capture, seed separation, drying, cleaning, grading, and internal transfers; exclude oil extraction. | `fao-ecocrop-ricinus-communis`; `icar-castor-depodder-2009` |
| `route_separation` | annual and perennial routes | Model route-specific establishment, production, replacement, termination, and input profiles before any weighted mix. | `fao-ecocrop-ricinus-communis` |
| `conditioning_gate` | post-harvest nodes | Include producer conditioning; model an external primary conditioner as foreground or with a transparent upstream process when it supplies the reference product. | `icar-castor-depodder-2009` |
| `material_state_control` | seed and residues | Keep seed, pod residues, rejects, dust, and destinations separate; never presume castor residue is feed. | `fao-ecocrop-ricinus-communis` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cultivation` | Managed castor cultivation | `required` | Annual crop cycle or declared productive period of a perennial stand | Manage Ricinus communis to harvestable capsule maturity | declared field area and period |
| `harvest` | Repeated picking or terminal harvest | `required` | Harvest pattern shall be declared | Capture mature capsules independently from cultivation and conditioning | kg mature capsules captured |
| `pod_seed_separation` | Pod and seed separation | `required` | Harvested capsules precede seed hand-off | Separate seed from capsules by the recorded route | kg capsules received |
| `drying_cleaning` | Seed drying and cleaning | `required` | Active drying may be zero only when incoming moisture meets specification | Stabilize moisture and remove foreign material | kg raw seed received |
| `grading_handoff` | Grading and hand-off | `required` | Every lot is classified as accepted, downgraded/rework, or rejected | Create the declared grade and final accepted state | kg dry cleaned seed received |

Cultivation is recorded by field block and crop cycle or perennial phase. Post-harvest nodes are recorded as lots, campaigns, or continuous periods. Inputs, outputs, cleaning, changeovers, and shared burdens carry the same run or period identifier; no burden is counted both as a campaign total and an allocated lot share.

### Process: Managed castor cultivation (`cultivation`)

#### Inputs

##### Product flows

###### Fertilizer, urea input (`nutrient_supply`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field area and crop cycle or productive period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

###### Fertilizer, monoammonium phosphate input (`nutrient_supply_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field area and crop cycle or productive period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

###### Fertilizer, potassium chloride input (`nutrient_supply_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field area and crop cycle or productive period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

###### Cattle manure, as applied input (`nutrient_supply_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field area and crop cycle or productive period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

###### Agricultural limestone input (`nutrient_supply_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field area and crop cycle or productive period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`

###### Irrigation water supply (`irrigation_water`)

Record supplied irrigation water; rainfall is not a product input.

- Selected flow: Irrigation process water selected from foreground records
- Flow property / unit: Mass / kg
- Amount rule: metered or measured water delivered to the field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field area and declared period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_inputs`
- Range: Irrigation QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000000
  - Unit: kg/ha
  - Basis: per hectare and period; zero is valid for rainfed production
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`cultivation_energy`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field area and declared period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Diesel fuel input (`cultivation_energy_diesel`)

Include this one exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field area and declared period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Harvestable mature capsule crop (`mature_capsules`)

Internal hand-off of mature capsules to harvest; it is not a market reference product.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: calculated harvestable capsule mass from harvest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per field block and period.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lots`
- Range: Capsule-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: kg/ha
  - Basis: wet capsule mass per hectare at measured moisture
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Dinitrogen monoxide, to air (`field_emissions`)

Record Dinitrogen monoxide, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per field area and period.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Measured or method-calculated mass of Dinitrogen monoxide, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output. If reported as N2O-N, convert to N2O once using 44/28.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`

###### Ammonia, to air (`field_emissions_nh3`)

Record Ammonia, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per field area and period.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg NH3
- Amount rule: Measured or method-calculated mass of Ammonia, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`

###### Nitrogen monoxide, to air (`field_emissions_no`)

Record Nitrogen monoxide, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per field area and period.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg NO
- Amount rule: Measured or method-calculated mass of Nitrogen monoxide, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`

###### Nitrate, to water (`field_emissions_nitrate`)

Record Nitrate, to water as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per field area and period.

- Selected flow: Nitrate, to water
- Flow property / unit: Mass / kg NO3-
- Amount rule: Measured or method-calculated mass of Nitrate, to water, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output. If reported as nitrate-N, convert to NO3- once using 62/14.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`

###### Carbon dioxide, fossil, to air (`field_emissions_co2_fossil`)

Record Carbon dioxide, fossil, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per field area and period.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg CO2
- Amount rule: Measured or method-calculated mass of Carbon dioxide, fossil, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`

### Process: Repeated picking or terminal harvest (`harvest`)

#### Inputs

##### Product flows

###### Mature capsule crop from cultivation (`harvest_capsule_input`)

Internal input linking each harvest event to its field block.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: mass assigned to each picking or terminal-harvest event
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest event.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lots`
- Range: Harvest-event reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: percent of field-period mature capsule mass
  - Basis: event shares reconcile to 100% less field loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`harvest_energy`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per kg captured capsules.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Diesel fuel input (`harvest_energy_diesel`)

Include this one exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per kg captured capsules.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Harvested castor capsules (`harvested_capsules`)

Internal captured-capsule state transferred to separation with picking sequence and moisture retained.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured net capsule mass leaving each event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest event.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_lots`
- Range: Harvested-capsule lot size
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1000000
  - Unit: kg/event
  - Basis: wet capsule mass at measured moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Unrecovered castor pods (`harvest_loss`)

Keep field loss and incidental material separate from captured capsules; identity and destination follow observed records.

- Selected flow: Unrecovered castor pods
- Flow property / unit: Mass / kg
- Amount rule: measured, sampled, or mass-balance-derived loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per kg captured capsules.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_lots`
- Range: Harvest-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg captured capsules
  - Basis: loss at matched moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Pod and seed separation (`pod_seed_separation`)

#### Inputs

##### Product flows

###### Harvested capsule input (`separation_capsule_input`)

Internal input linking separation runs to harvested lots.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured capsule mass charged to the run
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per separation run.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lots`
- Range: Separation-run input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1000000
  - Unit: kg/run
  - Basis: capsule mass at measured moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`separation_energy`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per kg raw separated seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Diesel fuel input (`separation_energy_diesel`)

Include this one exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per kg raw separated seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Raw separated castor seed (`raw_separated_seed`)

Internal seed freed from bulk pods but not yet accepted at final moisture, cleanliness, or grade.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured raw seed mass leaving separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per separation run.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lots`
- Range: Raw-seed recovery QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1
  - Unit: kg/kg capsule input
  - Basis: raw seed per kg capsule input at recorded moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Castor pod hulls (`pod_residues`)

Record pod hulls, fragments, and unrecovered material by state and destination; do not presume feed use.

- Selected flow: Castor pod hulls
- Flow property / unit: Mass / kg
- Amount rule: measured residue or mass-balance remainder by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per kg raw separated seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lots`
- Range: Pod-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg raw seed
  - Basis: residue at matched moisture basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Seed drying and cleaning (`drying_cleaning`)

#### Inputs

##### Product flows

###### Raw separated seed input (`drying_seed_input`)

Link the conditioning lot to separation and retain incoming moisture and impurity.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured raw seed mass received
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per drying and cleaning lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lots`
- Range: Conditioning-lot input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: raw seed at measured moisture
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`conditioning_energy`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per kg dry cleaned seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Diesel fuel input (`conditioning_energy_diesel`)

Include this one exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per kg dry cleaned seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Dry cleaned castor seed (`dry_clean_seed`)

Internal output with declared moisture and impurity, ready for grading but not yet accepted.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass after drying and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per conditioning lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_lots`
- Range: Dry-clean recovery QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1
  - Unit: kg/kg raw seed
  - Basis: output per kg input with moisture conversion disclosed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Castor seed cleaning screenings (`cleaning_rejects`)

Record pod fragments, stones, soil, dust, and damaged seeds separately where destinations differ.

- Selected flow: Castor seed cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass excluding moisture removed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per kg dry cleaned seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lots`
- Range: Cleaning-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg output
  - Basis: non-water rejects per kg output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Moisture removed to air (`water_to_air`)

Calculate water removed from matched wet-basis moisture measurements when the data model requires this exchange.

- Selected flow: Unresolved water-to-air identity pending data-package convention
- Flow property / unit: Mass / kg
- Amount rule: Determine supported evaporation on a closed water-mass control volume: incoming material water + actual added water + opening water stock - water in all accepted/co-product/reject/residue exits - separate liquid discharge/exports - closing water stock. Use measured wet mass times wet-basis moisture for each material stream, and compatible density for liquid volumes. Internal recirculation cancels. Retain actual rain/rewetting where relevant; total fresh/dry mass difference is not all water. Independently support all terms and the evaporation pathway; investigate an unexplained or negative balance rather than force it into a vapour release or clip it to zero. Keep water quantities distinct from dry-solids loss and other volatiles. Attribute and normalize the evidenced water release once using the original matched final reference.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per kg dry cleaned seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_lots`
- Range: Removed-moisture QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg water/kg output
  - Basis: zero applies when no drying is required
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grading and hand-off (`grading_handoff`)

#### Inputs

##### Product flows

###### Dry cleaned seed input (`grading_seed_input`)

Internal input linked to its conditioning lot with moisture and impurity retained.

- Selected flow: Internal foreground material state; no external UUID required
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass charged to grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per grading lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Grading-lot input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1000000
  - Unit: kg/lot
  - Basis: dry cleaned mass per lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted castor seed at hand-off (`accepted_castor_seed`)

The only reference product: harvested unprocessed seed after separation, drying as needed, cleaning, and grading, before oil extraction.

- Selected flow: Castor Seed `d52055a9-c05b-4edd-ad58-f3271a360458`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Raw output measurement and reconciliation: 1,000 kg net accepted seed at declared moisture

- Amount rule: 1000 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: one reference flow.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_grading_handoff`
- Range: Reference-flow equality check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: net accepted seed per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded castor seeds (`downgraded_rework_seed`)

Route off-spec seed to one declared internal rework return or external downgraded destination; concrete external identity is deferred.

- Selected flow: Downgraded castor seeds
- Flow property / unit: Mass / kg
- Amount rule: measured mass outside the accepted grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per kg accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Downgrade/rework QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg accepted seed
  - Basis: off-spec mass per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected castor seeds (`grading_rejects`)

Record discarded seed and foreign material by state and destination; exclude them from accepted output.

- Selected flow: Rejected castor seeds
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass leaving grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per kg accepted seed.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_handoff`
- Range: Final-reject QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg accepted seed
  - Basis: rejects per kg accepted output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance_first` | all nodes | Complete physical and dry-matter balances before allocation; keep moisture loss, residues, field loss, rework, downgrade, rejects, and accepted seed visible. |  |
| `allocation_single_intended_product` | crop route | Accepted seed is the sole intended product by default. Residues and rejects retain burdens to their destination; any claimed co-product requires disclosed function and goal-consistent allocation. |  |
| `allocation_rework` | rework loop | Retain burdens through return to separation, cleaning, drying, or grading; count returned mass once and exclude it from accepted output until it passes. |  |
| `allocation_run_period` | shared runs | Assign shared energy, cleaning, and changeover once with a disclosed causal driver; do not count run totals and lot shares together. |  |
| `allocation_multi_period` | perennial route | Separate establishment, production, replacement, and termination; attribute phases over evidenced productive output and prevent double attribution. | `fao-ecocrop-ricinus-communis` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `cultivation` | nutrients and irrigation | invoices, application logs, meters | field_id; route; phase; product; composition; quantity; unit; date | reconcile purchase and field application; Raw aggregation and attribution: sum by field, material, period; retain zero-use | native unit plus kg | every application | crop cycle or productive period | every field | per declared reference flow | invoice, meter, application, calibration |
| `cp_energy_records` | all nodes | fuels and electricity | issues, meters, equipment logs | process_id; run_id; carrier; quantity; unit; equipment; hours; driver | direct measurement or documented calculation; Raw aggregation and attribution: sum by carrier and node; allocate once | native unit and MJ | each run or period | complete foreground period | every field/facility | per declared reference flow | invoice, meter, log, factor |
| `cp_harvest_lots` | `harvest` | capsules and field loss | tickets and samples | field_id; event_id; date; pattern; technology; mass; moisture; loss | weigh every lot; document loss sampling; Raw aggregation and attribution: sum events after moisture reconciliation | kg and % wet basis | every event | all pickings or terminal harvest | every field | per declared reference flow | calibration, sample, trace |
| `cp_field_emissions` | `cultivation` | substances | measurements and calculations | substance; compartment; activity; factor; result; unit; method | measure or use declared method; Raw aggregation and attribution: preserve identity and compartment | kg substance | event or period | full period | every field | per declared reference flow | method, raw data, calculation |
| `cp_conditioning_lots` | `pod_seed_separation`; `drying_cleaning` | seed, residues, moisture | batch sheets and tests | run_id; masses; moisture; residues; rejects; destination; technology ; all input/output water including rejects/residues; actual added/rain water; separate liquid exports; opening/closing water stock; moisture and density; supported evaporation| weigh inputs/outputs and sample moisture; Raw aggregation and attribution: reconcile wet and dry matter by run | kg and % wet basis | every run/lot | all supplying lots | every site | per declared reference flow | scale, moisture method, trace |
| `cp_grading_handoff` | `grading_handoff` | accepted, downgrade, rework, reject | grading and dispatch records | lot_id; masses; grade; impurity; moisture; destinations; gate | weigh each state and link dispatch/rework; Raw aggregation and attribution: accepted only into reference output; rework once | kg and grade measure | every lot | all supplying lots | every site | per declared reference flow | scale, specification, trace |
| `cp_phase1_environment_coverage` | cultivation | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage; site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | material hand-offs | dry matter = wet mass × (1 − wet-basis moisture fraction); target wet mass = dry matter ÷ (1 − target fraction) | mass; measured moisture; target moisture | moisture-consistent mass |  |
| `calc_stage_yield` | all nodes | transferred-output dry matter ÷ input dry matter | linked masses and moisture | stage yield |  |
| `calc_field_yield` | field route | accepted-output dry matter ÷ occupied area, retaining route phase and harvest events | output; moisture; area; period | kg dry matter/ha-period |  |
| `calc_shared_run` | campaign/continuous run | shared burden × lot driver ÷ total run driver | run burden and driver | once-allocated lot burden |  |
| `calc_perennial_attribution` | perennial route | attribute phase burden over evidenced productive output; disclose remaining-stand and termination treatment | phase records and outputs | period burden | `fao-ecocrop-ricinus-communis` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_field_emissions`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Verify species, harvested-unprocessed state, CPC context, grade, moisture, and gate for every lot. | specification, detail evidence, dispatch |
| `dq_traceability` | process graph | Link field, event, separation run, conditioning lot, grading/rework pass, and dispatch without duplicate mass. | identifiers and reconciliation |
| `dq_temporal` | routes | Cover the annual cycle or reported perennial period and identify establishment, replacement, and termination outside it. | dated records |
| `dq_measurement` | mass/moisture | Use calibrated scales and documented moisture method; disclose sampling and gaps. | calibration and test records |
| `dq_completeness` | all cards | Record zero, value, or documented gap for each applicable card and destination. | completed checklist and balance |
| `dq_technology` | alternatives | Identify manual/mechanical harvest and separation and passive/active drying before aggregation. | equipment and run records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require fixed Castor Seed UUID, Mass property/unit group, and all PCR-supplied gate, route, state, and moisture qualifiers. |  |
| `validate_route` | cultivation/harvest | Require one annual or perennial route and one repeated-picking or terminal-harvest declaration per unsegmented record; events reconcile to field total. | `fao-ecocrop-ricinus-communis` |
| `validate_process_chain` | graph | Require cultivation, harvest, separation, drying/cleaning, and grading hand-offs; zero purchased drying energy requires moisture evidence. | `icar-castor-depodder-2009` |
| `validate_mass_moisture` | material nodes | Reconcile wet mass and dry matter and report moisture removed, residues, loss, rework, downgrade, and rejects separately. |  |
| `validate_flow_resolution` | exchanges | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_nutrient_cardinality` | cultivation | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_period_attribution` | perennial route | Require establishment, production, replacement, termination, and remaining-stand treatment; prevent double attribution. | `fao-ecocrop-ricinus-communis` |
| `validate_rework_reject` | post-harvest nodes | Every off-spec state ends in rework, downgrade, recovery, or waste and is excluded from accepted output until passing. |  |
| `validate_run_attribution` | runs | Require run/period identifier and one allocation driver; reject duplicate run totals and lot shares. |  |
| `validate_extraction_exclusion` | system | Reject seed crushing, castor-oil extraction, refining, or derivative manufacture inside the boundary. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dataset for harvested unprocessed castor seed at declared producer or primary-conditioning hand-off |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness review |
| allowed_use | Seed supply before oil extraction; comparisons aligned on moisture, gate, route, grade, and allocation |
| excluded_use | Oil extraction/refining; meal/derivatives; planting-seed certification; safety assessment; undisclosed route mixtures |
| required_metadata | geography; period; cultivar; route; stand phase; harvest pattern; area; technology; drying mode; moisture; grade; impurity; gate; allocation; rework; concrete identities |
| required_quality_disclosure | primary-data share; gaps; uncertainty; Range exceedances; balances; concrete flow identity verification; deferred identity decisions; perennial attribution |
| update_trigger | changed specification, gate, route, harvest pattern, technology, moisture, grade, supplier mix, allocation, concrete flow identity verification|

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-ecocrop-ricinus-communis` | official_guidance | FAO EcoCrop, *Ricinus communis*, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=1866 | Species/seed identity; annual and short-lived perennial context; route and period declarations |
| `icar-castor-depodder-2009` | official_guidance | ICAR News, April–June 2009, “Castor depodder and decorticator”, https://icar.gov.in/sites/default/files/2022-04/ICAR-News-April-June-09.pdf | Pod/seed separation; cleaning/grading; moisture-sensitive mechanical route |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
