---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43230-parts-of-fans-and-ventilating-or-recycling-hoods-430a0d30
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclass 43230; parts of fans and ventilating or recycling hoods incorporating a fan

## 1. Scope and Applicability

This PCR applies to saleable parts made for air or vacuum pumps, air or other gas compressors, fans, and ventilating or recycling hoods incorporating a fan. It covers product-specific fabrication from received semi-finished material or polymer granulate, conditional aqueous surface treatment, conditional powder coating, final inspection, and conditional corrugated-box packing at the reporting site.

The PCR does not cover complete pumps, compressors, fans, or hoods; generic motors, bearings, transmissions, controls, filters, or fasteners sold independently under another product identity; installation; use, maintenance, or end-of-life of the equipment; capital equipment; or employee travel. A foreground data package shall identify the exact saleable part and include only the material and finishing routes actually used.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43230-parts-of-fans-and-ventilating-or-recycling-hoods-430a0d30 |
| classification_refs | CPC 3.0 43253 (exact semantic scope; accepted mapping is governed separately) |
| covered_products | Saleable compressor or air/vacuum-pump parts; fan impellers, stators, inlet or outlet aerodynamic elements, guards and supporting structural parts; and parts of ventilating or recycling hoods incorporating a fan |
| excluded_products | Complete equipment; liquid-pump parts; standalone generic components classified elsewhere; repair or installation services; non-saleable internal intermediates |
| representative_product | A drawing-controlled, saleable fan impeller or compressor/fan housing component |
| production_route | Product-specific metal forming or machining, aluminium fabrication, or polymer moulding; with aqueous preparation, powder coating, and packaging only when performed |
| market_state | Accepted saleable part at the reporting-site factory gate, in the declared coated/uncoated and packaged/unpackaged state |

The CPC identity is verified from the official CPC 3.0 structure and explanatory notes. Regulation (EU) 2024/1834 is used only to clarify examples of significant fan elements and spare parts; it does not narrow the CPC category to regulated fans.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a drawing- or specification-conforming saleable part for an air/vacuum pump, gas compressor, fan, or fan-containing ventilating or recycling hood |
| How much | 1 kg net mass of accepted saleable part |
| How well | Meets the declared material grade, dimensions and tolerances, balance or fit requirements where applicable, surface condition, and acceptance test |
| How long or cycle | One production and release cycle to the reporting-site factory gate; service life is not part of this mass-based functional unit |
| reference_flow_link | The reference product output row `reference_product_output` equals the 1 kg reference flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts for the goods of subclass 43230, parts of fans and ventilating or recycling hoods incorporating a fan `dcfd2be0-e784-4045-9407-9e9d782120c3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact part name and drawing/model identifier; intended equipment type; material and grade; manufacturing route; coated/uncoated state and coating system; packaged/unpackaged state; accepted net mass; production site and geography; reporting period; recycled-content claim where relevant |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted saleable output net of reusable transport fixtures. Include disposable packaging in its own inventory row, not in the 1 kg reference amount. |
| `input_mass_normalization` | material, chemical, waste, and packaging rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize measured net consumption or generation to 1 kg accepted saleable part using the same reporting period and product allocation basis. |
| `electricity_energy_conversion` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter readings in kWh and convert to MJ using 1 kWh = 3.6 MJ; report the grid, voltage level, geography, and included losses. |
| `gas_volume_conditions` | natural-gas rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered gas volume with temperature, pressure, wet/dry basis, and meter correction; do not combine gas with electricity or purchased heat. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Semi-finished material, polymer granulate, process chemicals, utilities, and packaging are received at the reporting-site boundary with supplier identity and upstream dataset links |
| starting_condition_role | Gate-to-gate foreground starting condition for saleable-part manufacture |
| product_classification_scope | Saleable parts within CPC 3.0 43253; the exact part design and intended equipment are mandatory foreground qualifiers |
| recursive_input_rule | A purchased input that itself meets this PCR is recorded once as an upstream product input linked to a separate dataset; do not reopen or duplicate its manufacturing inventory inside the consuming process |
| upstream_dataset_requirement | Link every purchased material, utility, chemical, and packaging input to a geographically and technologically representative upstream dataset; disclose missing links |
| disclosure | Declare site, period, production quantity, accepted and rejected mass, material route, finishing route, packaging state, outsourced operations, allocation, and excluded activities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | all foreground processes | Include activities under operational control from receipt of the declared starting inputs through release of the saleable part at the reporting-site factory gate. | `un-cpc-3-0-structure-2025` |
| `boundary_actual_routes` | material and finishing routes | Include only routes actually used for the declared part; record every additional actual material, chemical, waste, or elementary emission as its own atomic exchange. | `eu-stm-bref-2006` |
| `boundary_outsourced_operation` | outsourced forming, machining, treatment, coating, testing, or packing | Record the transferred semi-product and the outsourced service or process dataset without duplicating burdens; disclose the transfer boundary and geography. |  |
| `boundary_fan_part_identity` | fan-part declarations | Identify the supplied element and intended fan or hood; examples include impellers, stators, aerodynamic elements, guards, and supporting structural parts. | `eu-fan-regulation-2024-1834` |
| `boundary_exclusions` | downstream and capital activities | Exclude complete-equipment assembly outside the reporting site, installation, use, maintenance, end-of-life, capital equipment, and employee travel unless the study goal explicitly expands the boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Component fabrication | required | Always; include only the actual forming, machining, moulding, joining, heat-treatment, and cleaning operations performed | Foreground conversion of received materials into the declared part | Per 1 kg accepted saleable part |
| `aqueous_surface_treatment` | Aqueous surface preparation or treatment | conditional | Include when an aqueous chemical or electrochemical bath or rinse is used at the reporting site | Foreground cleaning, conversion coating, pickling, or related aqueous treatment | Per 1 kg accepted saleable part treated |
| `powder_coating` | Powder-coating application and cure | conditional | Include when powder coating is applied or cured at the reporting site | Foreground protective or decorative coating | Per 1 kg accepted saleable coated part |
| `final_release` | Final inspection and release | required | Always; packaging exchanges apply only when disposable packing is supplied with the part | Foreground inspection, packing where applicable, and saleable-product release | 1 kg accepted saleable part |

Internal transfers between these foreground stages are not separate technosphere exchanges when they remain under the same reporting-site ownership and mass balance. If a transfer crosses a site or ownership boundary, record the specific transferred product and link the supplying dataset.

### Process: Component fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled steel sheet for a steel-sheet route (`cold_rolled_steel_sheet`)

Record this row only when cold-rolled steel sheet is actually consumed for the declared part. The flow UUID remains unresolved because the best candidate has conflicting English and Chinese identities.

- Selected flow: Cold-rolled steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net sheet mass consumed, including attributable offcuts, normalized to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources:

###### Primary aluminium alloy sheet for an aluminium-sheet route (`primary_aluminium_alloy_sheet`)

Record this row only when primary aluminium alloy sheet is actually consumed. Declare alloy, temper, thickness, supplier, and recycled-content claim.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net alloy-sheet mass consumed, including attributable offcuts, normalized to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources:

###### Polypropylene granulate for a moulded route (`polypropylene_granulate`)

Record this row only when polypropylene granulate is actually moulded into the declared part. Declare grade, additives, colour, and recycled content.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net granulate issued to the moulding route, less verified closed-loop return to inventory, normalized to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources:

###### Cutting fluid for a machining route (`cutting_fluid`)

Record fresh make-up cutting fluid crossing the site boundary when machining uses it. Do not count internally recirculated fluid again.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or issued make-up mass minus documented return to inventory, normalized to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources:

###### Fabrication electricity (`fabrication_electricity`)

Record electrical energy metered or defensibly submetered to the actual fabrication operations.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered kWh converted to MJ and allocated to accepted product using documented operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_energy_water`
- Sources:

###### Natural gas for direct fabrication heat (`fabrication_natural_gas`)

Record this row only when natural gas is burned on site for heat treatment, drying, or another fabrication duty. Keep meter reference conditions explicit.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: corrected metered gas volume attributable to fabrication, normalized to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_energy_water`
- Sources:

###### Process water for fabrication (`fabrication_process_water`)

Record process water crossing the site boundary for actual fabrication cleaning or cooling. Do not count recirculated water repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or tank-balanced make-up water mass attributable to fabrication, normalized to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_energy_water`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap from fabrication (`post_industrial_steel_scrap`)

Record segregated steel offcuts, chips, and rejected steel material leaving the foreground system as waste; do not net recycling credits into this row.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred to the declared treatment or recycling destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

###### Aluminium scrap from fabrication (`aluminium_scrap`)

Record aluminium offcuts, chips, and rejected aluminium material leaving the foreground system as waste, segregated from steel and other metals.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred to the declared treatment or recycling destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

###### Polypropylene waste from moulding (`polypropylene_waste`)

Record polypropylene runners, purge, off-spec parts, or other polypropylene material that leaves the closed-loop regrind system as waste.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured polypropylene waste mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`fabrication_fossil_co2`)

Record direct fossil carbon dioxide to air only when natural gas is burned inside the foreground boundary. Upstream electricity emissions remain in the electricity dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: site-measured emission or calculation from collected fuel carbon, oxidation, and flue-gas records; do not prescribe a generic emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

### Process: Aqueous surface preparation or treatment (`aqueous_surface_treatment`)

#### Inputs

##### Product flows

###### Sodium hydroxide for an alkaline bath (`surface_sodium_hydroxide`)

Record sodium hydroxide only when used in an alkaline cleaning, etching, or treatment bath. Declare purchased concentration and convert solution records to delivered product mass consistently.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: net purchased sodium-hydroxide product mass charged or replenished, normalized to accepted treated output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted saleable part treated
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_inputs`
- Sources: `eu-stm-bref-2006`

###### Process water for baths and rinsing (`surface_process_water`)

Record make-up water supplied to aqueous baths and rinses; do not count internally recirculated water repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered make-up water mass for the declared bath and rinse sequence, normalized to accepted treated output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted saleable part treated
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_inputs`
- Sources: `eu-stm-bref-2006`

###### Surface-treatment electricity (`surface_electricity`)

Record electricity for pumps, rectifiers, bath heating, ventilation, and associated on-site treatment when these loads are inside the declared route.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered kWh converted to MJ and normalized to accepted treated output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted saleable part treated
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_inputs`
- Sources: `eu-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater from surface treatment (`surface_treatment_wastewater`)

Record wastewater transferred to on-site or off-site treatment with its origin, composition indicators, and destination. This row does not stand for sludge or spent bath, which must be separate atomic rows when present.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharged or transferred wastewater mass, normalized to accepted treated output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted saleable part treated
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_wastewater`
- Sources: `eu-stm-bref-2006`

##### Elementary flows

### Process: Powder-coating application and cure (`powder_coating`)

#### Inputs

##### Product flows

###### Powder-coating material (`powder_coating_material`)

Record the actual powder coating issued to the line, net of verified same-specification reclaimed powder returned to use. Declare chemistry, colour, and cure schedule.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued coating mass minus documented same-specification return to inventory, normalized to accepted coated output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable coated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_inputs`
- Sources: `us-epa-ap42-4-2-2-1`

###### Powder-coating electricity (`coating_electricity`)

Record electricity for application, booth ventilation, recovery, and electric cure loads inside the route.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered kWh converted to MJ and normalized to accepted coated output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted saleable coated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_inputs`
- Sources: `us-epa-ap42-4-2-2-1`

###### Natural gas for powder-coating cure (`coating_natural_gas`)

Record this row only when natural gas is burned in a coating cure oven inside the foreground boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: corrected metered gas volume attributable to the cure oven, normalized to accepted coated output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted saleable coated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_inputs`
- Sources: `us-epa-ap42-4-2-2-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Powder-coating waste (`powder_coating_waste`)

Record overspray, colour-change purge, filter catch, or off-spec powder that leaves the reclaim loop as powder-coating waste.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured powder-coating waste mass transferred to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted saleable coated part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_waste`
- Sources: `us-epa-ap42-4-2-2-1`

##### Elementary flows

### Process: Final inspection and release (`final_release`)

#### Inputs

##### Product flows

###### Corrugated board box supplied with the part (`corrugated_board_box`)

Record corrugated boxes only when disposable boxes leave the factory with the declared part. Reusable transport fixtures are disclosed but excluded from this row.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured box mass issued to accepted shipped product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- Sources:

###### Final inspection and packing electricity (`release_electricity`)

Record electricity for inspection and packing equipment under site control; exclude complete-equipment performance testing performed downstream.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered kWh converted to MJ and normalized to accepted released output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted saleable part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted saleable reference product (`reference_product_output`)

Record only parts that pass the declared release criteria. Rejected parts remain in the appropriate material-specific waste row or are reworked without double counting.

- Selected flow: Parts for the goods of subclass 43230, parts of fans and ventilating or recycling hoods incorporating a fan `dcfd2be0-e784-4045-9407-9e9d782120c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg accepted saleable part
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared lines and utilities | First subdivide by process stage, meter, production order, machine time, or other causal record before applying allocation. |  |
| `allocation_physical_relation` | unavoidable shared burdens | Allocate by a documented physical relation that reflects burden causality, such as machine time, coated area, treated mass, or accepted mass; economic allocation is allowed only when no defensible physical relation exists and must be disclosed. |  |
| `allocation_scrap_no_credit` | steel, aluminium, polypropylene, and coating wastes | Report waste mass and destination separately. Do not subtract avoided virgin-material or recycling credits inside the foreground inventory; model them only in a separately declared downstream scenario. | `mass-balance-identity` |
| `allocation_rework` | rework and rejects | Attribute rework inputs to accepted output and prevent double counting of material that returns internally; material leaving the system is reported once in the matching atomic waste row. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_inputs` | `component_fabrication` | material and cutting-fluid inputs | purchase, issue, return, stock, and production-order records | material identity; grade; opening stock; receipts; issues; returns; closing stock; order; accepted mass | reconcile ERP/material-issue records to stock movement and production orders | kg | each lot or order; reconcile monthly | representative reporting year or declared campaign | all in-scope fabrication lines at reporting site | net consumption divided by accepted allocated output mass | supplier certificate; issue/return tickets; stock reconciliation; scale calibration |
| `cp_fabrication_energy_water` | `component_fabrication` | electricity, natural gas, and process-water inputs | meters, submeters, run time, and production records | meter start/end; correction factor; kWh; gas m3; gas conditions; water mass or volume; run time; accepted mass | read calibrated meters; allocate only residual shared loads by documented causal driver | kWh, m3, kg | continuous or each shift; reconcile monthly | representative reporting year or declared campaign | in-scope fabrication equipment and directly associated utilities | corrected quantity divided by accepted allocated output mass; electricity converted to MJ | meter calibration; bills; submeter map; downtime and allocation log |
| `cp_fabrication_wastes` | `component_fabrication` | material-specific wastes | segregated bin weights, transfer notes, and production records | waste identity; origin; gross/tare/net mass; destination; order; accepted mass | weigh each segregated transfer and reconcile to material balance | kg | each transfer; reconcile monthly | representative reporting year or declared campaign | in-scope fabrication lines | net waste mass divided by accepted allocated output mass | calibrated scale; waste transfer note; segregation audit |
| `cp_combustion_emissions` | `component_fabrication` | direct fossil carbon dioxide | stack measurement or site fuel-carbon calculation records | fuel quantity; composition or carbon content; oxidation basis; measured CO2 where available; operating period; accepted mass | use site measurement or documented site calculation; retain factor provenance and do not use electricity emissions here | kg | each test or reporting period | same period as attributed gas use | on-site combustion inside foreground boundary | direct fossil CO2 divided by accepted allocated output mass | monitoring report; laboratory result; calculation workbook; permit record |
| `cp_surface_inputs` | `aqueous_surface_treatment` | sodium hydroxide, water, and electricity | bath additions, concentration tests, meters, and treated-production records | chemical concentration; solution mass; NaOH product mass; water; kWh; bath and rinse id; treated accepted mass | reconcile chemical issues and bath additions; read meters; convert electricity to MJ | kg, kWh | each addition and shift; reconcile monthly | representative reporting year or declared campaign | in-scope aqueous line and associated treatment | quantity divided by accepted treated and allocated output mass | chemical certificate; titration result; meter calibration; bath log |
| `cp_surface_wastewater` | `aqueous_surface_treatment` | wastewater output | effluent meter, tank transfer, sampling, and destination records | flow or mass; density if converted; bath/rinse origin; pH and declared analytes; destination; treated accepted mass | measure discharge or transfer and reconcile with bath/rinse water balance | kg | each discharge or continuous meter; reconcile monthly | same period as surface inputs | aqueous line and included on-site treatment | wastewater mass divided by accepted treated and allocated output mass | effluent meter calibration; sample chain of custody; transfer note; water balance |
| `cp_coating_inputs` | `powder_coating` | powder coating, electricity, and cure gas | coating issue/return, meters, oven, and production records | coating identity; issued and returned mass; kWh; gas m3 and conditions; cure schedule; accepted coated mass | reconcile same-specification reclaim separately; meter line and oven energy | kg, kWh, m3 | each batch or shift; reconcile monthly | representative reporting year or declared campaign | in-scope coating line and cure oven | net coating and energy divided by accepted coated and allocated output mass | coating certificate; issue/return log; meter calibration; cure record |
| `cp_coating_waste` | `powder_coating` | powder-coating waste | segregated catch, purge, filter, transfer, and production records | waste identity; source; gross/tare/net mass; reclaim status; destination; accepted coated mass | weigh material leaving the reclaim loop and reconcile to coating mass balance | kg | each transfer; reconcile monthly | same period as coating inputs | in-scope powder-coating line | waste mass divided by accepted coated and allocated output mass | calibrated scale; transfer note; coating mass balance |
| `cp_release_records` | `final_release` | packaging, inspection electricity, and accepted product | packing issue, electricity, inspection, rejection, and shipment records | box identity and mass; kWh; accepted net product mass; rejected mass; drawing/model; shipment state | reconcile packing issues and release records; weigh accepted output net of reusable fixtures | kg, kWh | each order or shipment; reconcile monthly | representative reporting year or declared campaign | final inspection and packing under site control | inputs divided by accepted released mass; reference output set to 1 kg | release certificate; scale and meter calibration; packing list; rejection log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_consumption` | materials and chemicals | Net consumption = opening stock + receipts - closing stock - documented return to supplier or inventory; internal recirculation is not counted again. | stock, receipt, issue, and return records | net input mass | `mass-balance-identity` |
| `calc_reference_normalization` | all non-reference rows | Normalized amount = allocated reporting-period amount / allocated accepted saleable-part mass. | allocated row amount; accepted output mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calc_electricity_mj` | electricity rows | Electricity in MJ = metered electricity in kWh × 3.6. | metered kWh | MJ of electricity | `energy-unit-identity` |
| `calc_mass_balance` | each declared material route | Reconcile received net material with accepted product content, internal stock change, documented return, and each material-specific waste; investigate unexplained imbalance. | material input; stock change; accepted product composition; returns; wastes | route mass-balance check | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Identify the exact part, drawing/model revision, intended equipment, material/grade, finish, and market state. | release certificate, drawing, bill of materials, product specification |
| `dq_route_completeness` | process map | Declare every actual forming, machining, moulding, joining, heat-treatment, aqueous-treatment, coating, inspection, and packing operation, including outsourced steps. | route sheet, work instructions, supplier processing records |
| `dq_mass_completeness` | material and waste rows | Reconcile at least 95% of input material mass by route; explain the residual and any moisture or stock effect rather than forcing balance. | signed mass-balance workbook and stock reconciliation |
| `dq_metering` | electricity, gas, and water | Use calibrated meters or a documented submeter/allocation hierarchy; report meter coverage and uncertainty or estimation share. | calibration certificates, utility bills, meter map, allocation log |
| `dq_temporal_geographic` | all foreground data | Use one coherent reporting period and disclose site, geography, technology, capacity use, abnormal operations, and any proxy period. | production and environmental reporting records |
| `dq_atomic_wastes_emissions` | wastes and elementary emissions | Report each actual material-specific waste and emitted substance separately; wastewater does not substitute for sludge, spent bath, or an elementary water emission. | waste register, transfer notes, monitoring and sampling records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm that `reference_product_output` is exactly 1 kg accepted saleable part and that required qualifiers are present. | `un-cpc-3-0-structure-2025` |
| `validate_route_applicability` | conditional rows and processes | Every conditional row is either supported by actual route records or explicitly marked not applicable; no absent route may receive a zero-valued pseudo-record. |  |
| `validate_atomic_inventory` | all inventory rows | Reject combined carriers, material families, mixed wastes, and aggregate emissions; each selected flow shall be one physical, chemical, waste, or energy exchange. |  |
| `validate_uuid_identity` | UUID-bearing flows | Confirm public state 100, English and Chinese baseName, flow type, classification, property, unit group, reference unit, product state, and foreground qualifiers before use. |  |
| `validate_balance_and_allocation` | materials, wastes, and shared utilities | Verify route mass-balance reconciliation and that allocation drivers reproduce reporting-period totals without double counting internal returns or recycling credits. | `mass-balance-identity` |
| `validate_source_boundary` | source-backed rules | Confirm that cited evidence is used only for its verified scope; AP-42 coating rules do not supply an empirical product-specific amount range. | `us-epa-ap42-4-2-2-1` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review; the authored PCR itself remains candidate methodology |
| downstream_use | Foreground process models for saleable CPC 43253 parts and lifecycle models of pumps, compressors, fans, or fan-containing hoods that consume the declared part |
| allowed_use | Use for the exact declared part, material route, finish, factory gate, geography, technology, reporting period, and packaging state; combine with representative upstream input datasets |
| excluded_use | Complete equipment, a different part design or material without adaptation, installation/use/end-of-life, or an undisclosed industry-average proxy |
| required_metadata | PCR id; reference-flow UUID; drawing/model; intended equipment; material and grade; route; finish; packaging state; site/geography; period; technology; allocation; meter coverage; upstream dataset links |
| required_quality_disclosure | mass-balance result; accepted/rejected mass; data coverage; estimation share; meter and scale calibration; supplier data quality; unresolved UUID or range-evidence needs; deviations |
| update_trigger | drawing or material change; route, coating, packaging, supplier, site, or energy-system change; material allocation change; reporting data older than the study requirement; corrected Tiangong identity; or new independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43253 product identity and English title |
| `un-cpc-1-1-chinese-2002` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Professional Chinese terminology cross-check for the same classification wording; not quantitative evidence |
| `eu-fan-regulation-2024-1834` | `standard` | Commission Regulation (EU) 2024/1834, ELI http://data.europa.eu/eli/reg/2024/1834/oj (consolidated text checked 2026-09-05) | Fan-element and spare-part examples and identity qualifiers |
| `eu-stm-bref-2006` | `official_guidance` | European Commission, Surface Treatment of Metals and Plastics BREF, adopted August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-05) | Conditional aqueous surface-treatment process boundary, water-based bath/rinse context, and associated activities |
| `us-epa-ap42-4-2-2-1` | `method_factor` | U.S. EPA, AP-42 Section 4.2.2.1 General Industrial Surface Coating, https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2a.pdf (retrieved 2026-09-05) | Powder/liquid coating process distinction, application/cure decomposition, and coating material-balance context; no product-specific range inferred |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass identity as implemented by this PCR's foreground collection and calculation rules | Net-consumption, mass-balance, waste, allocation, and 1 kg reference normalization rules |
| `energy-unit-identity` | `method_factor` | Exact SI energy conversion: 1 kWh = 3.6 MJ | Electricity unit conversion only |
