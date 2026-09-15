---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tungsten-molybdenum-tantalum-magnesium-cobalt-cadmium-titanium-zirconium-beryllium-gall-65effba7
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wrought special non-ferrous metals and articles; magnesium powder

## 1. Scope and Applicability

This PCR governs foreground data packages for the plant-gate production of one declared wrought product or article made from tungsten, molybdenum, tantalum, magnesium, cobalt, cadmium, titanium, zirconium, beryllium, gallium, hafnium, indium, niobium, rhenium, thallium, germanium, or vanadium, and for magnesium metal powder. The data package shall identify exactly one principal metal or alloy, one product form, one grade or composition, and one production route; it shall not average unlike metals, powder and wrought states, or unrelated article functions.

The foreground boundary begins when declared metal or alloy feedstock enters the reporting facility and ends when the conforming product is ready for dispatch at the plant gate. It includes actual on-site forming, machining, heat treatment, cleaning, surface treatment, and mechanical powder-production operations. Primary ore extraction, concentration, smelting, refining, and chemical powder production are upstream unless they occur at the same site and are explicitly added as separate foreground processes. Use, downstream assembly into a different product, transport after the plant gate, and end-of-life are outside this PCR.

The minimum inventory below uses titanium plate as the representative wrought product and a separate conditional magnesium-powder process. A data package for another covered metal or article shall replace the representative material identities with exact atomic flows and retain the same collection, mass-balance, boundary, and disclosure logic. It shall never relabel titanium or magnesium flows as another metal.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tungsten-molybdenum-tantalum-magnesium-cobalt-cadmium-titanium-zirconium-beryllium-gall-65effba7 |
| classification_refs | CPC 3.0: 41602 |
| covered_products | Wrought forms and articles of the named metals and their declared alloys; magnesium metal powder produced by a declared mechanical route |
| excluded_products | Unwrought metal and non-magnesium metal powders classified outside CPC 41602; ores and concentrates; primary smelting and refining unless explicitly co-located; chemical powder production; waste and scrap as the reference product; products whose principal function places them in a more specific downstream category |
| representative_product | Titanium plate |
| production_route | Forming and fabrication from metal feedstock; conditional mechanical milling, abrading, or atomizing for magnesium powder |
| market_state | Conforming dry product at the reporting facility gate, with grade, composition, dimensions or particle-size distribution, temper or condition, surface finish, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared wrought metal product or article, or magnesium metal powder, meeting the stated commercial specification |
| How much | 1 kg net mass of conforming product |
| How well | Meets the declared grade or alloy composition, geometry or particle-size distribution, temper or condition, surface finish, and quality acceptance criteria |
| How long or cycle | At the plant gate; no use duration is assigned |
| reference_flow_link | `reference_product_mass` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Titanium Plate `f32fc628-252f-40fe-8f8d-fd0efb955e92` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal metal and alloy or grade; product form; dimensions or particle-size distribution; temper, heat-treatment or powder condition; surface finish; recycled-content claim and accounting method; production route; facility geography; technology period; plant-gate packaging state |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The confirmed reference flow is the representative titanium-plate identity only; a different covered product requires an exact product flow rather than semantic reuse of this UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry or as-specified saleable mass after final inspection and before dispatch; disclose whether unavoidable surface films, coatings, and immediate packaging are included. |
| `energy_conversion` | Electricity and fuel records | Net calorific value for energy flows | MJ | Preserve original meter or invoice units, document conversion factors, and report electricity using 1 kWh = 3.6 MJ without treating electricity as fuel combustion. |
| `gas_volume_conditions` | Natural gas and industrial oxygen | Volume | m3 | Record metered volume together with temperature, pressure, and dry or wet basis; convert only with a documented reference condition. |
| `solution_mass_basis` | Process water, cutting fluid, and sodium-hydroxide solution | Mass | kg | Report delivered product or solution mass and separately disclose concentration and make-up water; do not report active chemical mass as solution mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Metal or alloy feedstock received at the reporting facility, identified by metal, composition, physical form, supplier, recycled-content claim, and measured incoming mass |
| starting_condition_role | Upstream product entering plant-gate forming, fabrication, or magnesium-powder production |
| product_classification_scope | One product within CPC 3.0 code 41602; classification is context and does not replace the declared material and product identity |
| recursive_input_rule | A same-category wrought input that already embodies forming burdens shall be recorded as its exact purchased product flow with an upstream dataset and shall not be recursively re-expanded inside this foreground process |
| upstream_dataset_requirement | Each purchased metal, alloy, fuel, electricity, chemical, gas, and water input shall link to a geographically and technologically appropriate upstream dataset or disclose the missing link |
| disclosure | Declare included unit operations, outsourced operations, internal recycle loops, cut-off decisions, on-site treatment, allocation decisions, and whether casting, surface treatment, powder production, and packaging occur inside the boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground product system | Include all actual unit operations from receipt of declared feedstock through final inspection and plant-gate readiness; exclude upstream primary metal production unless co-located and explicitly modelled. | `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989` |
| `boundary_on_site_casting` | Casting before forming | Include on-site casting only when it produces billets, ingots, bars, strip, shot, or another precursor that is subsequently formed on the same site; disclose the mass link to forming. | `us-epa-nfmf-471` |
| `boundary_surface_treatment` | On-site chemical or electrochemical treatment | Include cleaning, etching, and surface treatment performed at the forming site together with their baths, rinse water, wastewater, sludge, and releases. | `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989` |
| `boundary_powder_route` | Magnesium powder | Include declared mechanical milling, abrading, or atomizing and associated conditioning; chemical precipitation and powder produced only as the final refining step require a different upstream methodology. | `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989` |
| `boundary_actual_atomic_flows` | All included operations | Add every actual material, energy, water, gas, waste, and elementary exchange as a separate atomic flow; absence of a template row is not a cut-off permission. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_forming_fabrication` | Metal forming, fabrication, and finishing | required | Always for a wrought product or article; not used for a magnesium-powder-only data package | Foreground conversion of declared metal stock into the conforming wrought product | 1 kg conforming product |
| `magnesium_powder_production` | Mechanical magnesium-powder production and conditioning | conditional | Include only when the reference product is magnesium powder | Foreground milling, abrading, or atomizing and final powder conditioning | 1 kg conforming magnesium powder |

### Process: Metal forming, fabrication, and finishing (`metal_forming_fabrication`)

This representative inventory is for titanium plate. Other covered wrought products shall use exact identities for their declared metal feedstock, product, scrap, wastewater constituents, and elementary releases while retaining the row-level collection logic.

#### Inputs

##### Product flows

###### Titanium billet feedstock (`mf_titanium_billet`)

Record the incoming titanium billet consumed by the representative forming route. Supplier production remains upstream unless co-located.

- Selected flow: Titanium billet
- Flow property / unit: Mass / kg
- Amount rule: measured accepted billet mass charged to the process, net of returned unopened stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `us-epa-nfmf-guidance-1989`

###### Electricity supplied to forming and fabrication (`mf_electricity`)

Record purchased or on-site-supplied electrical energy consumed by forming, machining, finishing, controls, and allocated auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to the included process, converted from kWh where necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Natural gas for direct thermal operations (`mf_natural_gas`)

Record gaseous natural gas only when a furnace, oven, dryer, or other included thermal unit burns it directly.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume attributable to included thermal operations; use `not_applicable` when none is burned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Process water for contact cooling and rinsing (`mf_process_water`)

Record process water that crosses the process boundary for contact cooling, rinsing, bath make-up, or wet cleaning; exclude non-contact recirculation make-up only when separately metered and demonstrably outside the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured water input to included forming and surface-treatment operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989`

###### Cutting fluid for machining and grinding (`mf_cutting_fluid`)

Record cutting-fluid make-up only when machining, grinding, drilling, turning, or a comparable wet metal-removal operation is included.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh cutting-fluid concentrate or delivered product added to the system; disclose dilution water separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_fluid_records`
- Sources: `niosh-metalworking-fluids-1998`

###### Sodium hydroxide for alkaline surface treatment (`mf_sodium_hydroxide`)

Record sodium hydroxide only when an included alkaline cleaning, etching, or wastewater-treatment operation consumes it.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered sodium-hydroxide product or solution mass with concentration disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `us-epa-nfmf-guidance-1989`

###### Industrial oxygen for thermal cutting or heating (`mf_industrial_oxygen`)

Record industrial oxygen only when it is supplied to an included thermal cutting or heating operation; do not use this row for compressed air or inert gas.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered oxygen volume attributable to the included operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_records`
- Sources:

##### Waste flows

No waste input is prescribed. Record an actual externally sourced waste feed only as its own exact flow and disclose how its previous-life burdens are handled.

##### Elementary flows

No elementary input is prescribed for this gate-to-gate process. Resource extractions belong to linked upstream datasets unless they occur inside the declared foreground boundary.

#### Outputs

##### Product flows

###### Conforming titanium plate (`mf_titanium_plate`)

Record only plate that passes the declared product acceptance criteria. This output is the representative reference flow.

- Selected flow: Titanium Plate `f32fc628-252f-40fe-8f8d-fd0efb955e92`
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming product mass; normalize the reported inventory to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_records`
- Sources: `un-cpc-3-structure-2025`

##### Waste flows

###### Titanium offcuts and machining scrap (`mf_titanium_scrap`)

Record titanium offcuts, turnings, and other recoverable solid titanium leaving the process as one segregated waste flow. Internally recycled scrap stays inside the process and is tracked in the mass balance without a boundary exchange.

- Selected flow: Titanium scrap
- Flow property / unit: Mass / kg
- Amount rule: measured titanium scrap mass leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `niosh-metalworking-fluids-1998`

###### Waste cutting oil removed from the system (`mf_waste_cutting_oil`)

Record removed cutting oil that leaves for treatment, recycling, or disposal. Do not combine it with aqueous coolant or other waste oil.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from the cutting-fluid system and transferred off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_fluid_records`
- Sources: `niosh-metalworking-fluids-1998`

###### Acidic titanium-bearing wastewater (`mf_acidic_titanium_wastewater`)

Record the aqueous waste stream from titanium acid etching, pickling, or rinsing only when it leaves the foreground process for on-site or off-site treatment. Declare acid species, titanium concentration, other regulated constituents, pH, and treatment destination.

- Selected flow: Acidic titanium-bearing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass at the transfer point, with composition from representative sampling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989`

##### Elementary flows

###### Fossil carbon dioxide from on-site fuel combustion (`mf_fossil_co2`)

Record direct fossil carbon dioxide released from included natural-gas combustion. Upstream electricity-generation emissions are excluded from this foreground row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or facility-calculated direct fossil carbon-dioxide mass attributable to included combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_records`
- Sources:

###### Titanium particulate released to air (`mf_titanium_particulate`)

Record controlled titanium-bearing particulate crossing the stack or fugitive air boundary. Declare elemental or compound form, particle-size basis, release compartment, and abatement capture basis.

- Selected flow: Titanium particulate to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from captured dust and verified control performance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming titanium plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_records`
- Sources: `niosh-metalworking-fluids-1998`

### Process: Mechanical magnesium-powder production and conditioning (`magnesium_powder_production`)

Use this process only when magnesium powder is the reference product. Declare milling, abrading, wet or dry atomizing, classification, drying, and dust-recovery steps actually operated; add every technology-specific gas, chemical, captured residue, and release as an atomic row.

#### Inputs

##### Product flows

###### Magnesium ingot feedstock (`mp_magnesium_ingot`)

Record the magnesium metal ingot or other declared solid magnesium feed entering mechanical powder production.

- Selected flow: Magnesium ingot
- Flow property / unit: Mass / kg
- Amount rule: measured accepted magnesium feed mass charged to powder production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming magnesium powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989`

###### Electricity supplied to magnesium-powder operations (`mp_electricity`)

Record electricity consumed by milling, abrading, atomizing, classification, drying, ventilation, and allocated auxiliaries actually included.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to the included magnesium-powder process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming magnesium powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `us-epa-nfmf-guidance-1989`

###### Natural gas for magnesium-powder heating or drying (`mp_natural_gas`)

Record gaseous natural gas only when it is burned in an included feed-heating, atomizing, or drying unit.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume attributable to the included powder operation; use `not_applicable` when none is burned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming magnesium powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Process water for wet powder production (`mp_process_water`)

Record water only for a wet milling, wet atomizing, washing, or other water-contact route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water input attributable to magnesium-powder production; use `not_applicable` for a verified dry route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming magnesium powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `us-epa-nfmf-guidance-1989`

##### Waste flows

No waste input is prescribed. Any externally sourced magnesium residue used as feed shall be represented by its exact waste or secondary-product identity and its upstream accounting shall be disclosed.

##### Elementary flows

No elementary input is prescribed. Add actual resource inputs only when extraction occurs within the declared foreground boundary.

#### Outputs

##### Product flows

###### Conforming magnesium metal powder (`mp_magnesium_powder`)

Record only powder meeting the declared magnesium composition, moisture, particle-size distribution, morphology, and contamination limits.

- Selected flow: Magnesium metal powder
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming powder mass; normalize the reported inventory to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming magnesium metal powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_records`
- Sources: `un-cpc-3-structure-2025`; `us-epa-nfmf-guidance-1989`

##### Waste flows

Segregated off-spec powder, captured dust, spent liquid, and treatment residue that cross the boundary shall each be added as an exact atomic waste flow. Internal rework is not an output and shall remain in the process mass balance.

##### Elementary flows

###### Fossil carbon dioxide from magnesium-powder thermal operations (`mp_fossil_co2`)

Record direct fossil carbon dioxide only when an included powder-production unit burns natural gas. Do not include upstream electricity-generation emissions in this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or facility-calculated direct fossil carbon-dioxide mass attributable to included combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming magnesium powder
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared lines and utilities | Subdivide by separately metered process, campaign, line, or product before considering allocation. A data package that cannot establish a causal allocation basis shall disclose the gap and shall not claim full PCR conformance. |  |
| `allocation_internal_recycle` | Internal metal scrap, powder, water, and fluid loops | Keep internal recycle within the foreground system; record gross circulation for process control but count only make-up input and boundary-crossing outputs in the inventory. |  |
| `allocation_recovered_scrap` | Scrap or off-spec product leaving the boundary | Record the measured boundary flow and treatment destination. Do not subtract an avoided-production credit inside the foreground inventory unless the downstream modelling convention is separately declared. |  |
| `allocation_joint_outputs` | Unavoidable joint production | Use direct physical causality where documented. If no defensible causal relationship exists, retain all burdens on the declared reference product pending a reviewed allocation rule rather than silently applying economic allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `metal_forming_fabrication`; `magnesium_powder_production` | Feedstock, conforming product, scrap, internal recycle, and off-spec mass | Scale and production records | timestamp; batch; flow identity; alloy or grade; gross mass; tare; net mass; disposition | Calibrated scales reconciled to batch and warehouse records | kg | Each batch or transfer | At least one representative continuous 12-month period, or the full campaign for campaign production | All included lines and storage transfer points | Sum net boundary masses by exact flow; retain internal recycle separately; normalize by conforming output | Calibration certificates; batch reconciliation; inventory opening and closing balances |
| `cp_energy_records` | `metal_forming_fabrication`; `magnesium_powder_production` | Electricity and natural gas | Meter, invoice, and equipment log | meter id; opening and closing reading; unit; fuel state; reference conditions; operating hours; downtime; allocation driver | Submeter preferred; reconcile to invoices and exclude unrelated loads | Native meter unit | Monthly and each campaign | Same period as product output | All included equipment and shared auxiliaries | Sum included consumption, apply documented conversion, then divide by conforming output mass | Meter calibration; invoice reconciliation; allocation worksheet |
| `cp_water_chemical_records` | `metal_forming_fabrication`; `magnesium_powder_production` | Process water and sodium hydroxide | Meter, batch make-up, purchase, and stock records | water meter readings; chemical product identity; concentration; delivered mass; opening and closing stock; bath make-up; disposal | Meter water and reconcile chemical consumption by inventory balance | kg | Each bath make-up and monthly | Same period as product output | Included cooling, cleaning, etching, rinsing, and treatment systems | Report product or solution mass separately from concentration and dilution water | Meter checks; supplier certificate; bath log; stock reconciliation |
| `cp_cutting_fluid_records` | `metal_forming_fabrication` | Cutting-fluid make-up and waste cutting oil | Fluid-system and waste-transfer records | formulation; concentrate mass; dilution water; sump inventory; change-out mass; recovered mass; destination | Reconcile additions, retained inventory, recovered oil, and transferred waste | kg | Each addition and change-out | Same period as product output | All included machining and grinding systems | Sum fresh product and boundary waste separately; do not combine oil and aqueous coolant | Supplier SDS; fluid log; waste manifest; mass-balance check |
| `cp_gas_records` | `metal_forming_fabrication` | Industrial oxygen | Cylinder inventory or calibrated flow meter | gas identity; purity; pressure; temperature; flow; cylinder opening and closing mass or volume; operation | Meter flow or reconcile cylinder inventory at declared reference conditions | m3 | Each campaign or monthly | Same period as product output | Included thermal cutting and heating equipment | Sum exact gas only and normalize by conforming output | Meter calibration; supplier delivery record; cylinder reconciliation |
| `cp_wastewater_records` | `metal_forming_fabrication` | Acidic titanium-bearing wastewater | Flow meter, tank transfer, and representative sample | transfer mass or volume; density; pH; acid species; titanium concentration; other constituents; treatment destination | Meter each transfer and sample using a documented representative plan | kg | Each transfer; composition at representative frequency | Same period as product output | Every included etching, pickling, rinse, and treatment discharge point | Convert volume with measured density where needed; keep distinct waste streams separate | Meter calibration; laboratory report; chain of custody; treatment manifest |
| `cp_direct_emissions_records` | `metal_forming_fabrication`; `magnesium_powder_production` | Direct fossil CO2 and metal particulate | CEMS, stack test, fuel/emissions calculation, or captured-dust balance | source id; period; measured concentration or mass; gas flow; fuel record; emission compartment; chemical form; particle-size basis; control efficiency; uncertainty | Prefer direct measurement; otherwise use a documented facility calculation from collected records | kg | Continuous, each test, or monthly calculation as applicable | Same period as product output | Every included stationary and fugitive release point | Sum by exact elementary flow and compartment; never include upstream electricity emissions | Calibration and stack-test reports; calculation workbook; control-device records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | Normalized amount = period boundary amount / period conforming product mass | Exact-flow boundary amount; conforming product mass | Amount per 1 kg reference product |  |
| `calc_material_balance` | Metal or magnesium mass | Reconcile accepted feed = conforming product + boundary scrap or residue + closing in-process inventory - opening in-process inventory + documented unmeasured loss; investigate rather than hide a material residual | Feed, product, scrap, residue, and in-process inventory records | Batch and period mass-balance residual |  |
| `calc_energy_conversion` | Electricity | MJ = metered kWh × 3.6 | Metered kWh | Electricity in MJ |  |
| `calc_direct_emissions` | Direct fossil CO2 and particulate | Apply only the documented facility measurement or calculation method to collected source records; report method, factors, uncertainty, and compartment | Fuel, CEMS, stack-test, flow, concentration, and control records | kg of exact elementary flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and all metal-bearing flows | Preserve exact metal, alloy or grade, physical state, product form, and boundary role; do not use a generic heavy-metals, metal-powder, wastewater, or scrap identity. | Product specification; supplier certificate; Tiangong direct-read identity; waste characterization |
| `dq_temporal` | Foreground activity data | Use temporally matched input and output records covering at least one representative continuous 12-month period, or the complete declared campaign when production is campaign-based. | Dated meter, batch, inventory, and production records |
| `dq_completeness` | All included operations | Reconcile material, energy, water, chemical, waste, and release records; disclose missing meters, estimated shares, excluded operations, and residuals. | Reconciliation worksheets; cut-off register; mass balance |
| `dq_technology` | Route-dependent operations | Declare forming sequence, machine type, heat-treatment and surface-treatment steps, powder route, recirculation, abatement, and outsourced steps. | Process flow diagram; equipment list; operating log; supplier record |
| `dq_geography` | Upstream links and direct emissions | Record facility location, energy market, supplier geography, water context, waste destination, and elementary-flow compartment. | Dataset metadata; invoices; permits; transfer manifests |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Confirm one covered metal or magnesium powder, exact product state, mass property, and every required qualifier; reject semantic reuse of the titanium-plate UUID for another product. | `un-cpc-3-structure-2025` |
| `validate_route_boundary` | Process map | Confirm that exactly the applicable wrought or magnesium-powder route is active and that co-located casting, surface treatment, and powder operations follow the declared boundary. | `us-epa-nfmf-471`; `us-epa-nfmf-guidance-1989` |
| `validate_atomic_inventory` | Inventory | Confirm that each row is one atomic exchange, every actual technology-specific flow is present, and generic utilities, fuels, metals, wastes, wastewater, or emissions are not substituted for exact identities. |  |
| `validate_mass_balance` | Metal and product mass | Require a documented feed, product, scrap, residue, and in-process inventory reconciliation; investigate material residuals and disclose unresolved losses. |  |
| `validate_energy_emissions` | Energy and direct emissions | Reconcile electricity and fuel to the production period; exclude upstream electricity emissions from direct rows; verify chemical form and compartment for each elementary flow. |  |
| `validate_foreground_quality` | Data package | Confirm temporal, site, technology, geography, measurement, uncertainty, allocation, and missing-data disclosures before publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Plant-gate foreground product dataset for one declared wrought special non-ferrous metal product or magnesium metal powder |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed for representativeness |
| allowed_use | Product-footprint, process, and lifecycle-model studies that match the declared metal, grade, form, route, geography, technology period, and plant-gate state |
| excluded_use | Proxying another metal, alloy, product form, powder chemistry, particle-size class, route, geography, or use-phase function without explicit review |
| required_metadata | PCR id and version; exact product identity and UUID; grade or composition; geometry or particle size; temper or condition; surface finish; facility geography; technology and period; process map; included and outsourced operations; upstream links; recycled-content method; allocation; data quality; uncertainty |
| required_quality_disclosure | Metering and estimation shares; mass-balance residual; temporal and technological representativeness; unresolved UUIDs and ranges; excluded operations; waste and emission characterization; allocation and cut-off decisions |
| update_trigger | Change in principal metal or alloy, grade, product form, powder route, major equipment, heat or surface treatment, energy supply, abatement, supplier mix, recycled-content accounting, allocation, or a material change in normalized inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-04 | Official CPC 41602 identity and covered product wording |
| `us-epa-nfmf-471` | `official_guidance` | U.S. EPA, Nonferrous Metals Forming and Metal Powders Effluent Guidelines, 40 CFR Part 471 program page, https://www.epa.gov/eg/nonferrous-metals-forming-and-metal-powders-effluent-guidelines, retrieved 2026-09-04 | Category and route boundary, mechanical powder routes, on-site casting, surface treatment, and wastewater scope |
| `us-epa-nfmf-guidance-1989` | `official_guidance` | U.S. EPA, Aluminum, Copper, and Nonferrous Metals Forming and Metal Powders Pretreatment Standards: A Guidance Manual, EPA 800-B-89-001, December 1989, https://www.epa.gov/sites/default/files/2016-08/documents/aluminum-copper-nonferrous-forming_pretreat-guidance_1989.pdf, retrieved 2026-09-04 | Process decomposition, titanium forming and etching, powder production, lubricants, water, wastewater, and ancillary operations |
| `niosh-metalworking-fluids-1998` | `official_guidance` | NIOSH, Criteria for a Recommended Standard: Occupational Exposure to Metalworking Fluids, DHHS (NIOSH) Publication No. 98-102, 1998, https://www.cdc.gov/niosh/media/pdfs/2026/06/98-102_1.pdf, retrieved 2026-09-04 | Cutting-fluid input, machining and grinding roles, chips, swarf, fluid aerosols, and spent-fluid management |
