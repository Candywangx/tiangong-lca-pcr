---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.insulated-winding-wire
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Insulated winding wire

## 1. Scope and Applicability

This PCR governs gate-to-gate foreground data packages for manufacturing insulated winding wire. It covers metallic conductors intended for electromagnetic windings, including round and rectangular products insulated by enamel, paper or other tape, glass fibre, or another declared insulation system. The conductor may be copper, aluminium, copper-clad aluminium, brass, or another explicitly declared metal when the resulting product remains within CPC 46310.

The product boundary is semantic rather than material- or voltage-specific. It excludes bare wire, coaxial cable, ignition wiring sets, general insulated electric conductors outside winding-wire use, optical-fibre cable, wound coils, transformer or motor assembly, winding operations, final-equipment manufacture, and field use. Product specifications and test methods may use the applicable IEC 60317 and IEC 60851 parts or an equivalent declared specification.

The default reporting gate begins when bare conductor rod, wire, strip, or a purchased dimensioned conductor is received by the foreground facility. It ends when conforming insulated winding wire has been tested, spooled, and made ready for dispatch. Packaging is inventoried but excluded from the 1 kg reference-product mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.insulated-winding-wire |
| classification_refs | CPC 3.0: 46310 Insulated winding wire |
| covered_products | Insulated metallic winding conductors, including round or rectangular enamelled, paper- or tape-covered, fibre-covered, or otherwise declared winding wire |
| excluded_products | Bare conductor; coaxial cable; ignition wiring sets; other insulated conductors not made for windings; optical-fibre cable; wound coils; motors; transformers; winding, impregnation, assembly, and use-stage operations |
| representative_product | Saleable insulated winding wire meeting its declared conductor, geometry, insulation, thermal-class, dimensional, and electrical requirements |
| production_route | Conductor preparation where performed on site; insulation application and curing or setting; route-conditional off-gas treatment; finishing, testing, spooling, and packing |
| market_state | Accepted net winding wire at the manufacturing plant gate, before downstream winding or component assembly |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Insulated metallic conductor manufactured and accepted for use as winding wire |
| How much | 1 kg net accepted winding wire, excluding spool, reel, pallet, and other packaging |
| How well | Conforms to the declared product specification, conductor material and geometry, insulation system and grade, thermal class, dimensional tolerances, electrical tests, and acceptance criteria |
| How long or cycle | One declared production campaign or another documented representative period, normalized to accepted output |
| reference_flow_link | The functional unit is represented by the verified TianGong Product flow Magnet wire / 电磁线 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Magnet wire / 电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | conductor material; conductor shape and nominal dimensions; average diameter class when applicable; insulation system and material; insulation grade or build; thermal class; governing product specification and test methods; production route; production geography; production period; accepted net-mass and yield basis; coating and lubrication technique where applicable; packaging exclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1 kg of accepted net insulated winding wire; exclude the mass of reels, spools, pallets, wrapping, and other packaging. |
| `accepted_output_mass` | accepted product and yield | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated weighing or a documented length-to-mass conversion based on measured conductor dimensions, density, and insulation build; reconcile the conversion against periodic mass checks. |
| `conductor_and_insulation_mass` | conductor, insulation, solvents, lubricants, scrap, and coating waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve original mass records and state wet, dry, solids, or as-supplied basis; do not mix formulation mass with coating-solids mass. |
| `energy_measurement` | electricity and fuels | Energy | kWh or MJ | Preserve the metered energy carrier and unit. Convert only with a documented physical conversion; report electricity and fuels separately. |
| `area_based_lubricant` | area-based lubricant application | Mass per surface area | mg/m2 | Calculate wire surface area from measured geometry and produced length, then convert to mass per reference product without assuming a circular section for rectangular wire. |
| `voc_measurement` | total volatile organic compounds | Mass or mass concentration | g/kg product or mg C/Nm3 | State whether the value is a solvent mass balance, direct mass emission, or waste-gas concentration; record dry or wet gas basis, reference oxygen where used, averaging period, and treatment status. |

## 5. System Boundary

The foreground system includes all on-site activities needed to convert the declared incoming conductor condition into accepted insulated winding wire: material receipt and storage; drawing or rolling and annealing or cleaning when on site; insulation preparation, application, drying, curing, impregnation, wrapping, or setting as applicable; lubricant application; route-conditional VOC capture and treatment; testing; spooling; internal handling; and packing. Include on-site electricity, fuels, process gases, water, direct releases, wastes, rejects, and treatment consumables.

Purchased conductor, insulation materials, solvents, fuels, electricity, water, packaging, and waste-treatment services cross the boundary as linked product or service inputs. Their upstream production is not recreated inside the foreground gate. Downstream winding, impregnation performed by the component manufacturer, coil or equipment assembly, distribution, use, and end-of-life are outside this gate-to-gate PCR.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | foreground manufacturing gate | Include all on-site conductor preparation, insulation application or covering, curing or setting, finishing, testing, spooling, internal treatment, and packing activities that are physically required for the declared product route. | `jrc-sts-bref-2020` |
| `system_boundary_rule_2` | purchased inputs and services | Represent upstream production and external treatment with linked datasets that match the declared material, technology, geography, and period; do not duplicate them as foreground operations. | `eu-environmental-footprint-2021` |
| `system_boundary_rule_3` | downstream operations | Exclude winding, coil impregnation performed downstream, component or final-equipment assembly, distribution, use, and end-of-life unless a broader study adds them outside this foreground data package. | `un-cpc-3-2023` |
| `system_boundary_rule_4` | route-specific operations | Include only the drawing, annealing, coating, covering, impregnation, lubrication, and off-gas-treatment steps that occur for the declared product and site; explicitly mark non-applicable steps. | `jrc-sts-bref-2020` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | bare conductor rod, wire, or strip received at the foreground facility, or purchased dimensioned conductor when sizing is performed upstream |
| starting_condition_role | product input to conductor preparation or directly to insulation application |
| product_classification_scope | CPC 46310 insulated winding wire, independent of conductor metal, geometry, insulation technology, voltage application, or end-use equipment subtype when the product remains winding wire |
| recursive_input_rule | an insulated winding-wire input used for rework or further coating remains an explicit product input with its own upstream dataset and declared incoming insulation state; it is not relabelled as bare conductor |
| upstream_dataset_requirement | link each purchased conductor, insulation, solvent, lubricant, energy carrier, packaging material, and external treatment service to the most specific available dataset matching material, route, geography, and period |
| disclosure | declare incoming conductor condition, purchased-versus-on-site sizing and annealing, product route, line technology, treatment configuration, excluded operations, cut-offs, and all upstream proxy choices |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `conductor_preparation` | Conductor preparation | `required` | Record receipt and the actual sizing, drawing, rolling, cleaning, and annealing steps; when dimensioned conductor is purchased, keep the process as a receipt and verification step and link its upstream preparation. | Establish the declared metallic conductor condition entering insulation application. | measured mass of prepared conforming conductor transferred to insulation application |
| `insulation_application_and_curing` | Insulation application and curing or setting | `required` | Select the declared enamel, paper or tape, fibre, composite, or other insulation route and record all repeated applications and thermal or chemical setting steps. | Apply the declared insulation system and produce testable insulated wire. | measured mass of insulated intermediate transferred to finishing |
| `voc_capture_and_treatment` | VOC capture and treatment | `conditional` | Include when solvent-bearing enamel, lubricant, cleaning, or another operation produces captured off-gas or uses integrated catalytic or thermal treatment. | Track capture, destruction, residual releases, treatment energy, catalyst, and recovered heat without hiding them in a net factor. | treated off-gas and associated records for the declared production campaign |
| `finishing_testing_and_packing` | Finishing, testing, and packing | `required` | Include lubrication where applicable, dimensional and electrical testing, rejection, spooling, internal handling, and packaging. | Establish accepted saleable output and its packaging exclusion. | 1 kg accepted net insulated winding wire |

### Process: Conductor preparation (`conductor_preparation`)

#### Inputs

##### Product flows

###### Received metallic conductor (`received_metallic_conductor`)

Record the actual copper, aluminium, copper-clad aluminium, brass, or other declared metallic conductor crossing the facility gate, together with its form, dimensions, temper, and surface condition.

- Selected flow: Declared bare metallic conductor
- Flow property / unit: Mass / kg
- Amount rule: measured received mass assigned to the production campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conductor_and_yield`
- Sources:

###### Drawing and forming consumables (`drawing_and_forming_consumables`)

Record drawing lubricants, cleaning agents, dies or other consumables only when consumed in the foreground conductor-preparation route.

- Selected flow: Declared drawing, forming, and cleaning consumables
- Flow property / unit: Mass / kg
- Amount rule: measured issue less documented return or recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conductor_and_yield`
- Sources: `jrc-sts-bref-2020`

###### Conductor-preparation electricity (`conductor_preparation_electricity`)

Record electricity for drawing, rolling, annealing, cleaning, ventilation, and directly attributable auxiliaries.

- Selected flow: Electricity, declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: directly metered consumption or calculated allocation from a metered line total
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

###### Conductor-preparation fuel (`conductor_preparation_fuel`)

Record each fuel or other thermal-energy carrier separately when annealing, cleaning, or heating uses direct combustion.

- Selected flow: Declared fuel or thermal-energy carrier
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoice-reconciled consumption allocated by the energy-allocation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

###### Cooling and process water for conductor preparation (`conductor_preparation_water`)

Record make-up and discharged water separately from recirculated volume; do not report the recirculating loop total as water withdrawal.

- Selected flow: Declared process-water supply
- Flow property / unit: Volume / m3
- Amount rule: measured make-up water assigned to conductor preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cooling`
- Sources: `jrc-sts-bref-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared conductor intermediate (`prepared_conductor_intermediate`)

Record conforming conductor transferred to insulation application. Preserve material, shape, dimensions, and surface-condition identity.

- Selected flow: Prepared winding-wire conductor intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or reconciled mass calculated from accepted length and measured linear density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output transferred to insulation application
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conductor_and_yield`
- Sources:

##### Waste flows

###### Conductor scrap and offcuts (`conductor_scrap_and_offcuts`)

Record start-up wire, breaks, offcuts, and other metallic scrap by material and destination. Do not credit recycling inside this gate-to-gate inventory.

- Selected flow: Declared metallic conductor scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass, reconciled with transfer and stock-change records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_recycling`
- Sources: `jrc-sts-bref-2020`

###### Used drawing emulsion and filter media (`used_drawing_emulsion_and_filter_media`)

Record purged emulsion, filters, sludge, and contaminated cleaning materials by measured mass and actual treatment route.

- Selected flow: Declared drawing-process waste
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched waste plus documented stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_recycling`
- Sources: `jrc-sts-bref-2020`

###### Conductor-preparation wastewater (`conductor_preparation_wastewater`)

Record discharged blowdown, cleaning water, or other wastewater only when it crosses the foreground boundary. A closed-loop system does not justify a zero value without water-balance evidence.

- Selected flow: Declared conductor-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume assigned to the production campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cooling`
- Sources:

##### Elementary flows

###### Direct annealing combustion emissions (`direct_annealing_combustion_emissions`)

Record measured or legally reported direct air emissions from on-site annealing combustion separately by substance when fuel is burned.

- Selected flow: Declared direct air-emission substances
- Flow property / unit: Mass / kg
- Amount rule: monitored mass emission or calculation from measured fuel and an approved factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources:

### Process: Insulation application and curing or setting (`insulation_application_and_curing`)

#### Inputs

##### Product flows

###### Prepared conductor input (`prepared_conductor_input`)

Carry the prepared-conductor identity and mass from `conductor_preparation`; do not substitute a generic cable conductor.

- Selected flow: Prepared winding-wire conductor intermediate
- Flow property / unit: Mass / kg
- Amount rule: linked transfer mass from conductor preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conductor_and_yield`
- Sources:

###### Insulation material (`insulation_material`)

Record each enamel resin or varnish, paper or tape, glass fibre, impregnant, adhesive, additive, and other insulation constituent separately on its actual as-supplied and solids basis.

- Selected flow: Declared winding-wire insulation material
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass less documented returns and recovered material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_insulation_and_solvent`
- Sources: `jrc-sts-bref-2020`

###### Organic solvent and cleaning agent (`organic_solvent_and_cleaning_agent`)

For solvent-bearing routes, record virgin and recovered solvent separately, including formulation solvent, viscosity adjustment, and cleaning use. The BREF reports conventional enamel formulations containing 55–80 % organic solvent by mass; this is a formulation-context check, not a default dataset value.

- Selected flow: Declared organic solvent or cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: site solvent balance using purchases, opening and closing stocks, recovered solvent, product retention, wastes, and measured releases
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_insulation_and_solvent`
- Sources: `jrc-sts-bref-2020`

###### Insulation-line electricity (`insulation_line_electricity`)

Record electricity for coating or covering equipment, drives, ovens, ventilation, controls, cooling, and directly attributable auxiliaries.

- Selected flow: Electricity, declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: directly metered consumption or calculated allocation from a metered line total
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `jrc-sts-bref-2020`

###### Insulation-line fuel (`insulation_line_fuel`)

Record each direct fuel or thermal-energy carrier used for drying, curing, setting, or integrated off-gas treatment.

- Selected flow: Declared fuel or thermal-energy carrier
- Flow property / unit: Energy / MJ
- Amount rule: metered or invoice-reconciled consumption allocated by the energy-allocation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `jrc-sts-bref-2020`

###### Insulation-line cooling water (`insulation_line_cooling_water`)

Record make-up water and discharge separately. Do not count closed-loop recirculation as withdrawal.

- Selected flow: Declared process-water supply
- Flow property / unit: Volume / m3
- Amount rule: measured make-up water assigned to insulation application
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cooling`
- Sources: `jrc-sts-bref-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Insulated wire intermediate (`insulated_wire_intermediate`)

Record the wire transferred to finishing with declared insulation system, number of applications or covering build, geometry, and test status.

- Selected flow: Insulated winding-wire intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or reconciled mass calculated from accepted length and linear density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_mass_and_quality`
- Sources:

##### Waste flows

###### Residual coating, spent solvent, and contaminated materials (`residual_coating_spent_solvent_and_contaminated_materials`)

Record residual enamel, spent solvent, wipes, felts, filters, and related sludge separately by waste type and treatment route.

- Selected flow: Declared coating and solvent waste
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass plus documented stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_recycling`
- Sources: `jrc-sts-bref-2020`
- Range: Waste paint, varnish, and sludge screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 13
  - Upper: 30
  - Unit: g
  - Basis: per kg solvent input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `jrc-sts-bref-2020`

###### Insulation-stage off-specification wire (`insulation_stage_off_specification_wire`)

Record rejected or stripped wire by conductor metal, insulation condition, rework status, and actual destination.

- Selected flow: Declared off-specification insulated wire
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass adjusted for documented internal rework
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_recycling`
- Sources: `jrc-sts-bref-2020`

###### Insulation-stage wastewater (`insulation_stage_wastewater`)

Record wastewater only when it is generated and crosses the boundary. The absence of a normal enamelling-process discharge may be reported only with site water-balance and operating evidence.

- Selected flow: Declared insulation-stage wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge assigned to the production campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cooling`
- Sources: `jrc-sts-bref-2020`

##### Elementary flows

###### Volatile organic compounds before external treatment boundary (`volatile_organic_compounds_before_treatment`)

Calculate total VOC released from solvent-bearing insulation and cleaning operations by a reconciled solvent mass balance. When treatment is modelled as the separate conditional process below, this row represents captured loading transferred to treatment plus uncaptured direct release; avoid double counting.

- Selected flow: Declared volatile organic compound substances or total VOC
- Flow property / unit: Mass / kg
- Amount rule: solvent mass balance reconciled to product retention, recovered solvent, waste, captured loading, and direct release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020`

###### Curing and combustion air emissions (`curing_and_combustion_air_emissions`)

Record substance-specific direct emissions such as nitrogen oxides and carbon monoxide where monitored, legally reported, or calculated from measured fuel using an approved factor.

- Selected flow: Declared direct air-emission substances
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculation from monitored concentration and standardized gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-sts-bref-2020`

### Process: VOC capture and treatment (`voc_capture_and_treatment`)

#### Inputs

##### Product flows

###### Captured solvent-bearing off-gas (`captured_solvent_bearing_off_gas`)

Record the VOC loading routed from insulation, cleaning, or lubricant application to the actual treatment system.

- Selected flow: Solvent-bearing process off-gas for treatment
- Flow property / unit: Mass / kg VOC
- Amount rule: measured or mass-balance-derived VOC loading at the treatment inlet
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020`

###### VOC-treatment electricity and fuel (`voc_treatment_energy`)

Record treatment electricity and supplemental fuel separately from the production-line energy total.

- Selected flow: Declared electricity and fuel inputs
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered treatment-system consumption, net of no unverified recovered-heat credit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered heat used on site (`recovered_heat_used_on_site`)

Record recovered heat separately only when it is metered and demonstrably substitutes a measured on-site energy input in the same accounting period.

- Selected flow: Recovered process heat
- Flow property / unit: Energy / MJ
- Amount rule: metered useful heat delivered to the receiving process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020`

##### Waste flows

###### Spent treatment catalyst and residues (`spent_treatment_catalyst_and_residues`)

Record catalyst replacement and treatment residues in the period in which they are removed, using a representative multi-year allocation when replacement is infrequent.

- Selected flow: Declared spent catalyst and treatment residues
- Flow property / unit: Mass / kg
- Amount rule: measured replacement or disposal mass allocated over treated production for the catalyst service period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_recycling`
- Sources: `jrc-sts-bref-2020`

##### Elementary flows

###### Residual VOC to air after treatment (`residual_voc_to_air_after_treatment`)

Record residual total VOC and, where required, substance-specific emissions after treatment. Apply the ranges only when the legal and technical conditions stated in the cited BAT conclusions are met.

- Selected flow: Declared volatile organic compound substances or total VOC
- Flow property / unit: Mass / kg
- Amount rule: monitored mass emission or calculation from standardized concentration and waste-gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-bat-conclusions-sts-2020`
- Range: BAT-AEL total VOC solvent-mass-balance range for winding wire with average diameter above 0.1 mm
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3.3
  - Unit: g
  - Basis: per kg coated winding wire, only for the stated BAT applicability conditions
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-bat-conclusions-sts-2020`
- Range: BAT-AEL waste-gas TVOC concentration range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 40
  - Unit: mg C/Nm3
  - Basis: treated waste-gas concentration under the stated BAT monitoring and applicability conditions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-bat-conclusions-sts-2020`

###### Treatment combustion emissions (`treatment_combustion_emissions`)

Record nitrogen oxides, carbon monoxide, and other direct emissions from catalytic or thermal treatment where measured or required.

- Selected flow: Declared treatment air-emission substances
- Flow property / unit: Mass / kg
- Amount rule: monitored mass emission or calculation from standardized concentration and waste-gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-sts-bref-2020`

### Process: Finishing, testing, and packing (`finishing_testing_and_packing`)

#### Inputs

##### Product flows

###### Insulated wire input to finishing (`insulated_wire_input_to_finishing`)

Carry the declared insulation and geometry identity and linked transfer mass from the insulation process.

- Selected flow: Insulated winding-wire intermediate
- Flow property / unit: Mass / kg
- Amount rule: linked transfer mass from insulation application
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_mass_and_quality`
- Sources:

###### Finishing lubricant (`finishing_lubricant`)

Record the actual lubricant or self-lubricating coating route. Do not apply round-wire lubricant ranges to rectangular wire; the BREF reports no lubrication for the rectangular-wire route described there.

- Selected flow: Declared winding-wire finishing lubricant
- Flow property / unit: Mass / kg
- Amount rule: measured issue less return, or calculated from validated surface area and application rate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_packaging`
- Sources: `jrc-sts-bref-2020`
- Range: Fine and ultrafine round-wire lubricant application
  - Range role: Typical range (`typical_range`)
  - Lower: 5
  - Upper: 10
  - Unit: mg/m2
  - Basis: wire surface area for round wire with diameter below 0.10 mm
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `jrc-sts-bref-2020`
- Range: Medium and thick round-wire lubricant application
  - Range role: Typical range (`typical_range`)
  - Lower: 30
  - Upper: 60
  - Unit: mg/m2
  - Basis: wire surface area for medium and thick round wire
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `jrc-sts-bref-2020`

###### Packaging materials (`packaging_materials`)

Record reels, spools, drums, wrapping, labels, pallets, and other packaging by material and reuse status. Packaging is not part of the reference-product mass.

- Selected flow: Declared packaging materials
- Flow property / unit: Mass or item / kg or item
- Amount rule: measured issued packaging assigned to accepted product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_and_packaging`
- Sources:

###### Finishing and test electricity (`finishing_and_test_electricity`)

Record directly metered or allocated electricity for test equipment, drives, handling, ventilation, and packing.

- Selected flow: Electricity, declared supply mix
- Flow property / unit: Energy / kWh
- Amount rule: directly metered consumption or calculated allocation from a metered line total
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted insulated winding wire (`accepted_insulated_winding_wire`)

This is the quantitative reference output. It must carry all required qualifiers and the verified product-flow, Mass-property, and unit-group identities.

- Selected flow: Magnet wire / 电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg accepted net product, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Final-test rejected wire (`final_test_rejected_wire`)

Record failed electrical, dimensional, mechanical, or visual-test output by actual rework, stripping, recycling, or disposal route.

- Selected flow: Declared rejected insulated winding wire
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass adjusted for documented re-entry into the same production campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_recycling`
- Sources:

###### Packaging waste generated on site (`packaging_waste_generated_on_site`)

Record packaging waste from incoming materials and rejected or damaged outbound packaging by material and destination.

- Selected flow: Declared packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass plus documented stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net insulated winding wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastes_and_recycling`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | separable products, lines, and campaigns | Avoid allocation by subdividing independently metered lines, product families, conductor metals, insulation routes, and production campaigns whenever records permit. | `eu-environmental-footprint-2021` |
| `allocation_rule_2` | shared electricity, fuel, water, ventilation, and treatment | Allocate shared utilities first by direct submetering, then by a documented causal driver such as machine time, oven loading, standardized gas flow, or treated solvent loading. | `eu-environmental-footprint-2021` |
| `allocation_rule_3` | remaining non-causal shared burdens | Use accepted net product mass only when no defensible causal driver exists; disclose the affected flows, period, numerator, denominator, and sensitivity. |  |
| `allocation_rule_4` | internal rework | Return documented same-campaign rework to the originating process without counting it as a new external input or accepted output; retain the associated energy, material loss, and emissions. |  |
| `allocation_rule_5` | metallic scrap and recovered solvent | Record gross scrap, recovered solvent, and external treatment or recycling outputs. Do not subtract an avoided-production credit inside this gate-to-gate inventory; disclose any broader-study substitution or end-of-life method separately. | `jrc-sts-bref-2020` |
| `allocation_rule_6` | recovered heat | Credit recovered heat against an on-site energy input only when useful delivery and displaced input are metered for the same accounting period; otherwise report recovered heat separately without a credit. | `eu-bat-conclusions-sts-2020` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_mass_and_quality` | insulation_application_and_curing; finishing_testing_and_packing | transferred intermediate and accepted reference product | production, test, and disposition record | product code; conductor material; shape; nominal dimensions; average diameter class; insulation system; grade; thermal class; specification; produced length; linear density; gross mass; packaging mass; accepted mass; rejected mass; test result; timestamp | calibrated scale plus validated length-to-mass conversion and linked quality records | kg; m; kg/m | each reel or production lot | declared representative campaign and at least the full averaging period | declared line and facility | sum accepted net mass after removing packaging; retain lot-level qualifier and disposition links | scale calibration; linear-density check; test certificate; batch reconciliation |
| `cp_conductor_and_yield` | conductor_preparation | received conductor, consumables, prepared conductor, and yield | receiving, stock, issue, transfer, and scrap record | material id; supplier lot; material; form; dimensions; opening stock; receipts; issues; returns; closing stock; transfer mass; scrap mass; timestamp | calibrated weighing and stock reconciliation by material and campaign | kg | each receipt, issue, transfer, and campaign close | same period as reference-product data | declared facility and line | opening stock plus receipts minus closing stock, returns, and documented transfers; normalize to accepted output | scale calibration; supplier certificate; stock ledger; mass-balance closure |
| `cp_insulation_and_solvent` | insulation_application_and_curing | insulation constituents, solvents, and coating balance | formulation, purchase, stock, issue, recovery, cleaning, and waste record | material id; formulation; solids fraction; solvent fraction; opening stock; purchase; issue; return; recovered solvent; closing stock; waste; retained coating; timestamp | batch tickets, calibrated weighing, supplier composition, and solvent mass balance | kg; % by mass | each formulation batch and campaign close | same period as reference-product and emission data | declared line, mixing area, and solvent system | reconcile each constituent and solvent over the averaging period; normalize to accepted output | supplier specification; batch ticket; scale calibration; solvent-balance closure |
| `cp_energy_and_fuel` | conductor_preparation; insulation_application_and_curing; voc_capture_and_treatment; finishing_testing_and_packing | electricity, fuels, thermal energy, and recovered heat | meter, invoice, operating-time, and heat-recovery record | meter id; carrier; opening reading; closing reading; energy; operating time; product family; treatment status; recovered heat; timestamp | calibrated submeter or reconciled facility meter with documented causal allocation | kWh; MJ | continuous or each shift, aggregated monthly and by campaign | same representative period as production | declared meters, lines, ovens, and treatment units | direct meter first; otherwise apply the declared causal allocation driver and normalize to accepted output | calibration; invoice reconciliation; meter coverage map; allocation worksheet |
| `cp_water_and_cooling` | conductor_preparation; insulation_application_and_curing | withdrawal, make-up, recirculation, and discharge | water meter, tank, discharge, and operating record | source; meter id; make-up; recirculation; discharge; evaporation estimate; stock change; destination; timestamp | calibrated meters and site water balance | m3 | continuous or each shift, aggregated by campaign | same representative period as production | declared line, cooling loop, and discharge point | report make-up and discharge; keep recirculation separate; normalize to accepted output | calibration; water-balance closure; discharge record |
| `cp_direct_air_emissions` | conductor_preparation; insulation_application_and_curing; voc_capture_and_treatment | VOC and other direct air emissions | solvent balance, stack test, continuous monitor, standardized gas-flow, and fuel record | substance; concentration; carbon basis; gas flow; temperature; pressure; moisture basis; oxygen basis; operating state; treatment state; duration; captured loading; solvent-balance inputs; timestamp | approved monitoring method or reconciled mass balance aligned with production operation | kg; g/kg; mg C/Nm3; Nm3 | legally required frequency and each representative campaign | same averaging period as production and solvent records | each declared source, capture point, bypass, and stack | calculate mass from concentration times standardized gas volume or by closed solvent balance; prevent captured and residual double counting | method report; instrument calibration; laboratory QA; solvent-balance closure; operating log |
| `cp_wastes_and_recycling` | conductor_preparation; insulation_application_and_curing; voc_capture_and_treatment; finishing_testing_and_packing | scrap, rejects, coating waste, solvent waste, catalyst, wastewater, and packaging waste | weighing, manifest, stock, rework, and destination record | waste id; material; hazardous status; gross and tare mass; internal rework; recovered quantity; opening stock; closing stock; carrier; destination; treatment; date | calibrated weighing, waste manifest, rework log, and stock reconciliation | kg; m3 | each movement and campaign close | same representative period as production | declared facility and each storage or dispatch point | gross generation minus documented same-campaign re-entry; retain destination without avoided-production credit | scale calibration; manifest; recycler receipt; rework record; stock-balance closure |
| `cp_finishing_and_packaging` | finishing_testing_and_packing | lubricant, surface area, packaging, and final disposition | formulation, issue, geometry, length, item-count, reuse, and packing record | lubricant id; issue; return; wire shape; dimensions; produced length; calculated surface area; package material; package mass or count; reuse status; accepted output; timestamp | calibrated weighing, dimensional measurement, production counter, and packaging bill of materials | kg; mg/m2; m2; item | each lot or packing batch | same representative period as accepted output | declared finishing and packing line | calculate geometry-specific surface area; reconcile lubricant and packaging issues; normalize to accepted net output | scale calibration; dimension gauge; counter verification; packaging specification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all foreground exchanges | normalized exchange = period exchange / period accepted net product mass | collected period exchange; cp_product_mass_and_quality accepted net mass | exchange per 1 kg accepted net insulated winding wire |  |
| `conductor_mass_balance` | conductor preparation and product yield | opening conductor stock + receipts = closing stock + prepared transfer + measured scrap + other documented destinations; investigate unresolved difference before normalization | cp_conductor_and_yield records | reconciled conductor input, transfer, scrap, and closure difference |  |
| `insulation_solvent_balance` | insulation and VOC inventory | opening stock + purchases + recovered inflow = closing stock + product retention + recovered outflow + waste + measured or calculated release; preserve each substance or declared solvent group | cp_insulation_and_solvent; cp_direct_air_emissions; cp_wastes_and_recycling | reconciled solvent and coating inventory with residual | `jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020` |
| `surface_area_lubricant_conversion` | finishing lubricant | lubricant per reference mass = application rate times measured geometry-specific surface area per produced length times accepted length / accepted net product mass | cp_finishing_and_packaging geometry, length, application rate, and accepted mass | kg lubricant per kg accepted product | `jrc-sts-bref-2020` |
| `stack_mass_emission` | monitored waste-gas emissions | mass emission = concentration on the declared basis times standardized dry or wet gas volume over the aligned operating period; apply unit and carbon-to-substance conversions explicitly | cp_direct_air_emissions concentration, standardized gas flow, duration, basis, and substance identity | kg emission per kg accepted product | `eu-bat-conclusions-sts-2020` |
| `shared_energy_allocation` | shared energy meters | allocated energy = metered period energy times the declared causal-driver share; mass share is permitted only under allocation_rule_3 | cp_energy_and_fuel meter and driver records | kWh or MJ per kg accepted product by process and carrier |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve conductor material, geometry and dimensions, insulation system and grade, thermal class, governing specification, test method, and acceptance result for each represented product family. | product specification, batch record, and test certificate |
| `dq_temporal_alignment` | all foreground records | Use the same representative production period for product, materials, energy, water, emissions, wastes, and stock changes; explain shutdowns, trials, bypasses, and abnormal operation. | period-coverage matrix and operating log |
| `dq_mass_closure` | conductor, coating, solvent, product, scrap, and waste | Reconcile conductor and solvent balances and report residuals; unresolved material discrepancies require correction or an explicit data-quality limitation. | signed mass-balance worksheets and stock reconciliation |
| `dq_meter_and_test_quality` | mass, energy, water, dimensions, electrical tests, and emissions | Use calibrated instruments and preserve calibration status, method, detection limit where relevant, and sampling or averaging period. | calibration certificates, method reports, and laboratory QA |
| `dq_technology_representativeness` | production route | Match drawing or purchased-conductor starting state, conductor metal and shape, insulation technique, number of coating or covering applications, curing technology, lubricant route, line speed, and treatment system. | line description, formulation, production settings, and equipment record |
| `dq_geographic_representativeness` | energy, water, upstream materials, and treatment | Match the declared site and supply geography or document each proxy and its expected influence. | supplier geography, grid and fuel records, and proxy register |
| `dq_completeness` | process map and inventory | Cover every required and applicable conditional process and all material, energy, water, emission, waste, reject, and packaging flows that cross the boundary; list justified exclusions. | process-flow diagram, meter coverage map, inventory checklist, and cut-off log |
| `dq_source_provenance` | linked upstream and secondary data | Record dataset identity, version, geography, technology, reference year, access date, mapping rationale, and any substitution or aggregation. | dataset register and reviewed mapping record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR and product identity | The foreground data package identifies CPC 46310 insulated winding wire and does not substitute a bare-wire, coaxial-cable, ignition-wiring-set, general-cable, coil, motor, transformer, or other narrower or different product. | `un-cpc-3-2023` |
| `validation_rule_2` | reference flow identity | The quantitative reference uses Product flow `2bf8a4db-b29e-404a-ae6c-402adbb77af4`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. | `ilcd-units-of-mass` |
| `validation_rule_3` | reference amount and qualifiers | The quantitative reference is exactly 1 kg accepted net insulated winding wire excluding packaging, and every required qualifier is populated. | `iec-60317-0-1-2013-amd1-2019`; `iec-60317-0-3-2024`; `iec-60851-1-2021-amd1-2025` |
| `validation_rule_4` | process completeness | Conductor preparation, insulation application and curing or setting, and finishing, testing, and packing are present; VOC capture and treatment is present whenever its inclusion condition applies. | `jrc-sts-bref-2020` |
| `validation_rule_5` | route applicability | Every included coating, covering, impregnation, curing, lubrication, or treatment step matches the declared route, and every non-applicable conditional step is explicitly marked rather than assigned zero by assumption. | `jrc-sts-bref-2020` |
| `validation_rule_6` | material and product mass balance | Conductor receipt, transfer, accepted output, scrap, rejects, coating retention, coating waste, and stock changes are reconciled for the reporting period; residuals and corrections are disclosed. |  |
| `validation_rule_7` | solvent and VOC balance | A solvent-bearing route has a closed solvent balance covering virgin and recovered solvent, stocks, product retention, wastes, captured loading, treatment, bypasses, and residual release without double counting. | `jrc-sts-bref-2020`; `eu-bat-conclusions-sts-2020` |
| `validation_rule_8` | BAT range applicability | The 1–3.3 g VOC/kg coated-wire range is applied only to winding wire with average diameter above 0.1 mm and under the stated BAT applicability and averaging conditions; the 5–40 mg C/Nm3 range is used only for the corresponding treated waste-gas condition. | `eu-bat-conclusions-sts-2020` |
| `validation_rule_9` | lubricant range applicability | The 5–10 mg/m2 range is used only for fine and ultrafine round wire below 0.10 mm, the 30–60 mg/m2 range only for medium and thick round wire, and neither range is assigned to rectangular wire without product-specific evidence. | `jrc-sts-bref-2020` |
| `validation_rule_10` | water reporting | Water make-up, recirculation, and discharge are distinguished. A zero wastewater value is accepted only with a site water balance and evidence that no discharge crossed the foreground boundary. | `jrc-sts-bref-2020` |
| `validation_rule_11` | allocation | The data package records subdivision, direct measurement, causal drivers, any mass-based fallback, internal rework, and treatment of scrap, recovered solvent, and recovered heat in accordance with Section 7. |  |
| `validation_rule_12` | external dataset matching | Each linked input and treatment dataset records identity, geography, technology, period, and mapping rationale; known mismatches are disclosed. | `eu-environmental-footprint-2021` |
| `validation_rule_13` | evidence and UUID discipline | No unverified UUID, fabricated value, search-result snippet, private command trace, or authoring note is used as source evidence; unresolved inventory identities remain descriptive until separately verified. |  |
| `validation_rule_14` | bilingual and projection consistency | English and Chinese rule ids, process ids, row ids, controlled tokens, UUIDs, source ids, and quantities are aligned, and structured.yaml is regenerated from the canonical English Markdown. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process or aggregated gate-to-gate manufacturing dataset for insulated winding wire |
| downstream_use | input to foreground data packages and downstream process or lifecyclemodel projections for coils, motors, transformers, reactors, and other products that consume declared winding wire |
| allowed_use | manufacturing studies whose conductor material, geometry, insulation system, thermal class, product specification, route, geography, period, and plant gate match or are transparently adapted |
| excluded_use | bare wire, general cable, coaxial cable, ignition wiring sets, wound coils, final electrical equipment, use-stage performance, comparative claims without a broader reviewed method, or any product whose required qualifiers are absent |
| required_metadata | PCR id; verified reference flow; all required qualifiers; starting condition; process map; geography; period; technology; allocation; cut-offs; linked datasets; collection coverage; data-quality assessment |
| required_quality_disclosure | primary-data share and period; meter and test coverage; conductor and solvent balance residuals; route-specific exclusions; proxy datasets; treatment and bypass status; uncertainty and unresolved limitations |
| update_trigger | material change in conductor metal or geometry, insulation chemistry or grade, thermal class, product specification, production or curing technology, lubricant route, VOC treatment, geography, energy supply, allocation, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2023` | standard | https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf | Official CPC 3.0 identity and distinction of 46310 from adjacent wire and cable classes |
| `iec-60317-0-1-2013-amd1-2019` | standard | IEC 60317-0-1:2013 with AMD1:2019, https://webstore.iec.ch/en/publication/1346 | General requirements and declared specification context for enamelled round copper winding wire |
| `iec-60317-0-3-2024` | standard | IEC 60317-0-3:2024, https://webstore.iec.ch/en/publication/82305 | General requirements and declared specification context for enamelled round aluminium winding wire |
| `iec-60317-32-2015` | standard | IEC 60317-32:2015, https://webstore.iec.ch/en/publication/23564 | Scope evidence for glass-fibre-wound, impregnated rectangular copper winding wire |
| `iec-60317-27-3-2019-amd1-2024` | standard | IEC 60317-27-3:2019 with AMD1:2024, https://webstore.iec.ch/en/publication/95842 | Scope evidence for paper-tape-covered rectangular copper winding wire |
| `iec-60317-27-4-2020-amd1-2024` | standard | IEC 60317-27-4:2020 with AMD1:2024, https://webstore.iec.ch/en/publication/95843 | Scope evidence for paper-tape-covered rectangular aluminium winding wire |
| `iec-60851-1-2021-amd1-2025` | standard | IEC 60851-1:2021 with AMD1:2025, https://webstore.iec.ch/en/publication/104694 | General test-method identity and product-quality record requirements |
| `iec-60851-5-2008-amd1-2011-amd2-2019` | standard | IEC 60851-5:2008 with AMD1:2011 and AMD2:2019, https://webstore.iec.ch/en/publication/3699 | Electrical test-method identity for winding wire |
| `jrc-sts-bref-2020` | official_guidance | European Commission Joint Research Centre, Surface Treatment Using Organic Solvents including Preservation of Wood and Wood Products with Chemicals, 2020, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf | Winding-wire manufacturing route, coating and solvent context, energy and water context, waste types, lubricant ranges, VOC controls, and foreground collection design |
| `eu-bat-conclusions-sts-2020` | standard | Commission Implementing Decision (EU) 2020/2009, https://eur-lex.europa.eu/eli/dec_impl/2020/2009/oj/eng | BAT 27 applicability, VOC mass-balance and waste-gas concentration ranges, treatment and heat-recovery controls |
| `eu-environmental-footprint-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, https://environment.ec.europa.eu/document/download/cb899bd7-bb06-491d-9989-c856a401fcd0_en | Life-cycle data quality, supply-chain dataset matching, traceability, and verification context |
| `ilcd-units-of-mass` | dataset | European Commission ILCD Unit Group data set, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, https://eplca.jrc.ec.europa.eu/EF-node/showUnitgroup.xhtml?stock=EF3_1_background_processes&uuid=93a60a57-a4c8-11da-a746-0800200c9a66&version=03.00.003 | Units-of-mass identity and kg reference unit |
