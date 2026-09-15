---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.motors-of-an-output-not-exceeding-37-5-w-other-dc-motors-dc-generators-other-than-photo-ffdf4167
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Motors of an output not exceeding 37.5 W; other DC motors; DC generators other than photovoltaic generators

## 1. Scope and Applicability

This PCR covers factory-gate production of complete electric motors with rated output not exceeding 37.5 W, other direct-current motors, and direct-current generators other than photovoltaic generators. It applies to brushed, brushless, permanent-magnet, and wound-field designs only when the finished product meets the declared category identity. The English boundary follows the official CPC 3.0 structure (`un-cpc-3-0-structure-2025`).

Photovoltaic generators, AC-only motors and alternators, generating sets, rotary converters, motor-driven equipment as a whole, and standalone replacement parts are excluded. Use and maintenance electricity, installation, distribution after the declared factory gate, and end-of-life treatment are outside the default boundary. A data package may extend those stages, but must report them separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.motors-of-an-output-not-exceeding-37-5-w-other-dc-motors-dc-generators-other-than-photo-ffdf4167 |
| classification_refs | CPC 3.0: 46111 (exact classification context; mapping acceptance remains separately governed) |
| covered_products | complete motors of rated output not exceeding 37.5 W; other complete DC motors; complete DC generators other than photovoltaic generators |
| excluded_products | photovoltaic generators; AC-only motors and generators; generating sets; rotary converters; standalone parts; products whose electrical machine is not the saleable reference product |
| representative_product | a packed, factory-tested complete DC motor or DC generator ready for dispatch |
| production_route | purchased-material and component preparation, magnetic-core and shaft fabrication where performed, winding and insulation, rotor/commutation assembly, impregnation and curing where used, final assembly, testing, finishing, and packing |
| market_state | new complete product at the manufacturing facility gate, with rated output, motor/generator function, commutation technology, magnet technology, cooling arrangement, enclosure, mass, and packing state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | a complete CPC 46111 electric motor or DC generator meeting the declared technical specification |
| How much | 1 kg of packed finished product at the factory gate |
| How well | passed the manufacturer's declared final electrical, mechanical, and safety inspection, with tested characteristics and test basis retained |
| How long or cycle | one production reporting period; service life and use-stage output are not part of this reference flow |
| reference_flow_link | `finished_motor_generator` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Electric motors `a17dfc74-85fa-4cdc-bd1f-61c543d349f2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | motor or generator function; rated output and rating basis; DC or universal supply characteristic where relevant; brushed, brushless, or other commutation technology; permanent-magnet chemistry or wound-field design; pole count; rated voltage; duty and duty type; efficiency or loss test method when reported; cooling arrangement; enclosure and protection class; embedded controller inclusion; product mass basis; packing state; production geography; reporting period; factory gate |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The broad Tiangong reference flow does not supply product-specific technology, rating, geography, or packing facts.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net finished-machine mass and included dispatch packaging separately, then report their sum as the packed reference product; normalize every exchange to exactly 1 kg packed product and disclose both masses. |
| `energy_conversion` | purchased electricity and natural gas | energy for electricity; volume for gaseous natural gas | MJ for electricity; m3 for natural gas | Preserve metered source units and reference conditions. Convert electricity to MJ using 1 kWh = 3.6 MJ; disclose the temperature and pressure basis for gas volume and do not infer it from mass without a documented composition and conversion. |
| `rated_output_basis` | category eligibility and product metadata | rated mechanical output for motors or rated electrical output for generators | W or kW | Record the nameplate rating and rating basis. Apply the 37.5 W threshold only to the first category branch; do not apply it to the separate “other DC motors” or “DC generators” branches. |
| `scrap_mass_balance` | steel, copper, and aluminium inputs and scrap outputs | Mass | kg | Reconcile input mass to incorporated material, saleable co-product if any, waste scrap, and measured stock change over the reporting period without netting recycled scrap from virgin or purchased input. |

## 5. System Boundary

The foreground boundary is gate-to-gate manufacture. Purchased materials and components cross the starting gate; component preparation, winding, rotor and stator assembly, impregnation or curing where performed, final assembly, testing, finishing, and packing remain foreground operations. The manufacturing-chain decomposition and the need to link gate-to-gate records to upstream datasets are supported by `nordelof-tillman-2018-motor-manufacturing`.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all foreground processes | Include all operations under the reporting manufacturer's operational control from receipt of purchased materials or components through release of the packed finished motor or generator; disclose outsourced steps and do not silently omit them. | `nordelof-tillman-2018-motor-manufacturing` |
| `boundary_upstream_inputs` | purchased product inputs | Link each purchased material, component, electricity supply, and fuel to an upstream dataset matching material grade, product state, technology, geography, and delivery boundary; do not count upstream emissions as direct factory emissions. | `nordelof-tillman-2018-motor-manufacturing` |
| `boundary_route_condition` | conditional technologies | Include permanent magnets only for the declared permanent-magnet route, carbon brushes only for a brushed commutated route, and direct-fired curing gas and its direct fossil carbon dioxide only when those operations occur at the reporting site. |  |
| `boundary_additional_exchanges` | facility inventory completeness | Add any additional crossing exchange as a separate substance- or product-specific row with its own identity, property, amount method, and evidence; never replace missing detail with a collective material, utility, waste, or emissions label. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | purchased materials and components received at the reporting manufacturing facility gate, with the in-house versus purchased-subassembly split declared |
| starting_condition_role | foreground gate-to-gate starting condition; upstream production remains represented by linked datasets |
| product_classification_scope | complete products meeting the semantic CPC 46111 boundary, independent of any one route or nameplate rating within the three covered branches |
| recursive_input_rule | a purchased motor or generator incorporated into another covered product is recorded as a separate same-category product input with its own upstream dataset and is not recursively re-expanded inside this foreground package |
| upstream_dataset_requirement | every purchased material, component, packaging item, electricity supply, and fuel requires a geography-, technology-, grade-, and product-state-compatible upstream dataset |
| disclosure | disclose the product branch, technology, rated output, production geography, reporting period, operations performed in-house, outsourced operations, packaging inclusion, cut-offs, allocation, and all missing upstream datasets |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Component preparation and mechanical fabrication | `required` | Record purchased finished components as inputs and set unperformed in-house fabrication exchanges to not applicable with evidence. | foreground material preparation, lamination cutting or stacking, shaft and housing preparation | kg of accepted components transferred to electromagnetic assembly per 1 kg packed finished product |
| `electromagnetic_assembly` | Winding, insulation, rotor/stator assembly, and curing | `required` | Magnet, brush, and direct-fired curing rows apply only to the declared technology. | foreground electrical and magnetic assembly | kg of accepted electromagnetic assembly transferred to final assembly per 1 kg packed finished product |
| `final_assembly_testing_packing` | Final assembly, testing, and packing | `required` | All saleable products require final assembly and release inspection; packing reflects the declared dispatch state. | foreground completion and reference-product output | 1 kg packed finished reference product |

### Process: Component preparation and mechanical fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Electrical steel sheet for laminations (`electrical_steel_sheet`)

Record silicon electrical-steel sheet crossing the factory boundary for stator or rotor laminations; grade, coating, thickness, and purchased-lamination status are foreground qualifiers.

- Selected flow: Electrical steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured mass received and consumed, reconciled to stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources:

###### Steel bar for the shaft (`shaft_steel_bar`)

Record the specific alloy-steel or non-alloy-steel bar consumed for an in-house machined shaft; purchased finished shafts must be recorded separately in the foreground package.

- Selected flow: Steel bar for motor shaft
- Flow property / unit: Mass / kg
- Amount rule: measured bar mass issued to shaft machining, adjusted for stock return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources:

###### Die-cast aluminium motor housing (`aluminum_motor_housing`)

Record purchased or internally cast aluminium housing bodies and end-bells that enter the product; alloy and purchased-versus-cast state are required qualifiers.

- Selected flow: Die-cast aluminium motor housing
- Flow property / unit: Mass / kg
- Amount rule: measured accepted housing mass consumed, including parts later rejected within the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources:

###### Component-fabrication electricity (`component_electricity`)

Record metered electricity for lamination cutting or stacking, shaft and housing machining, compressed air, and allocated technical building services within this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submetered electricity attributed to component fabrication
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Ferrous lamination and machining scrap (`electrical_steel_scrap`)

Record segregated electrical-steel and other ferrous offcuts leaving the process as one steel-scrap stream only when they share the same downstream handling.

- Selected flow: Steel scrap `b82f6725-9112-4121-abe1-f94420e7c684`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing ferrous scrap plus inventory change, before any avoided-burden credit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_scrap`
- Sources:

###### Aluminium housing machining scrap (`aluminum_scrap`)

Record aluminium chips and offcuts from housing preparation as a mass-based scrap stream; keep dross or contaminated swarf separate when present.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing aluminium scrap plus inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_scrap`
- Sources:

##### Elementary flows

### Process: Winding, insulation, rotor/stator assembly, and curing (`electromagnetic_assembly`)

#### Inputs

##### Product flows

###### NdFeB permanent magnets (`ndfeb_magnet`)

Include only when an NdFeB permanent-magnet rotor is manufactured or assembled within the declared product route.

- Selected flow: NdFeB magnet `a598b760-108c-4d70-93f9-59098959141e`
- Flow property / unit: Mass / kg
- Amount rule: measured installed and rejected NdFeB magnet mass issued to the production route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed finished product for the NdFeB route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electromagnetic_materials`
- Sources:

###### Ferrite permanent magnets (`ferrite_magnet`)

Include only when a ceramic or ferrite permanent-magnet rotor is manufactured or assembled within the declared product route.

- Selected flow: Permanent ceramic or ferrite magnets `59fbfc86-a725-413c-b3df-d6f7683036d5`
- Flow property / unit: Mass / kg
- Amount rule: measured installed and rejected ferrite magnet mass issued to the production route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed finished product for the ferrite route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electromagnetic_materials`
- Sources:

###### Insulated copper winding wire (`magnet_wire`)

Record magnet wire consumed in stator or rotor windings, including wire in rejected windings and subtracting verified stock returns.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: measured magnet-wire mass issued less returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electromagnetic_materials`
- Sources:

###### PET electrical-insulation film (`pet_insulation_film`)

Record polyethylene-terephthalate slot, phase, or winding insulation film where used; thickness, grade, and laminate composition must be declared.

- Selected flow: Polyethylene terephthalate `1ce0d026-923b-4339-a8ca-31e228475c75`
- Flow property / unit: Mass / kg
- Amount rule: measured PET insulation-film mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed finished product for routes using PET film
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electromagnetic_materials`
- Sources:

###### Epoxy winding impregnation resin (`epoxy_impregnation_resin`)

Record epoxy resin retained in the winding and production losses when epoxy impregnation is performed; formulation, solvent content, and curing system must be declared.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Amount rule: measured epoxy resin issued less recovered reusable resin and stock return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed finished product for epoxy-impregnated routes
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electromagnetic_materials`
- Sources:

###### Electromagnetic-assembly electricity (`electromagnetic_electricity`)

Record electricity used for winding, insertion, joining, impregnation, curing, rotor assembly, balancing, compressed air, and allocated technical building services.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submetered electricity attributed to electromagnetic assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electromagnetic_energy`
- Sources:

###### Natural gas for direct-fired curing (`curing_natural_gas`)

Include only when gaseous natural gas crosses the foreground boundary to supply direct-fired curing heat; exclude upstream gas-supply emissions from direct factory emissions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume at declared reference conditions attributed to curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed finished product for direct-fired natural-gas curing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electromagnetic_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Copper winding scrap (`copper_scrap`)

Record clean copper winding offcuts and rejected copper wire leaving as copper scrap; mixed or insulated waste wire must be reported separately if its treatment differs.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing copper scrap plus inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electromagnetic_scrap_emissions`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide from curing (`curing_fossil_co2`)

Include only direct fossil carbon dioxide emitted by on-site natural-gas curing. Do not include power-grid or upstream fuel emissions in this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or calculated direct combustion emission from metered gas using a documented site-specific carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed finished product for direct-fired natural-gas curing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electromagnetic_scrap_emissions`
- Sources:

### Process: Final assembly, testing, and packing (`final_assembly_testing_packing`)

#### Inputs

##### Product flows

###### Ball or roller bearings (`motor_bearing`)

Record complete bearings installed in the motor or generator; bearing type, material, sealing, and size remain product qualifiers.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of accepted and rejected bearings issued to assembly less stock return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_components_packaging`
- Sources:

###### Electrical carbon brushes (`carbon_brush`)

Include only for a brushed commutated DC route and record the concrete brush grade and holder inclusion; do not use household-brush or electrolysis-anode identities.

- Selected flow: Electrical carbon brush
- Flow property / unit: Mass / kg
- Amount rule: measured mass of carbon brushes installed and rejected less stock return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg packed finished product for brushed routes
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_components_packaging`
- Sources:

###### Corrugated board dispatch box (`corrugated_board_box`)

Record corrugated board boxes included in the declared packed product; reusable transport packaging outside the saleable dispatch unit must be modelled separately.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-box mass consumed for dispatched conforming products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_components_packaging`
- Sources:

###### Final assembly and test electricity (`final_assembly_electricity`)

Record electricity for presses and tools, final electrical and mechanical tests, finishing equipment, packing, compressed air, and allocated technical building services.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submetered electricity attributed to final assembly, testing, finishing, and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed finished motor or DC generator (`finished_motor_generator`)

This is the quantitative reference output. Rejects and rework do not enter the reference-product mass until they pass the declared release inspection.

- Selected flow: Electric motors `a17dfc74-85fa-4cdc-bd1f-61c543d349f2`
- Flow property / unit: Mass / kg
- Amount rule: normalized mass of conforming packed finished product released at the factory gate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg packed finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_output`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | mixed products, routes, or production lines | First subdivide metered processes, batches, and material issues by product family, technology route, and reporting period wherever physically separate records exist. |  |
| `allocation_causal` | remaining shared energy and auxiliary operations | Allocate remaining shared burdens using a documented causal driver such as machine time, metered energy, throughput mass, or test time; mass allocation is permitted only when it reasonably represents the physical cause. |  |
| `allocation_scrap` | steel, copper, and aluminium scrap | Report scrap mass and destination explicitly. Do not subtract scrap revenue, recycled-content credit, or avoided primary production from foreground inputs or direct emissions; any end-of-life or substitution credit must be a separately disclosed scenario. |  |
| `allocation_no_double_count` | purchased subassemblies and outsourced operations | Do not include both an upstream purchased-subassembly dataset and the same subassembly's fabrication burdens inside the foreground system unless the boundary split and non-overlap are demonstrated. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | electrical steel, shaft bar, and aluminium housing inputs | purchase, receiving, issue, return, stock, and bill-of-material records | product code; material grade; product state; mass received; mass issued; mass returned; opening stock; closing stock; batch; date | calibrated scale records reconciled to enterprise material records | kg | per receipt and issue; aggregate monthly | at least 12 consecutive representative months or the full production campaign | all reporting-site component operations and relevant outsourced steps | consumed mass = opening stock + receipts - closing stock - verified returns; normalize by conforming packed output mass | scale calibration; invoice or delivery record; stock reconciliation; bill of materials; batch trace |
| `cp_component_energy` | `component_fabrication` | electricity | utility meter and submeter records | meter id; opening reading; closing reading; multiplier; process assignment; downtime; reporting dates | calibrated meter or documented facility allocation | kWh, converted to MJ | continuous or shift readings; aggregate monthly | same period as output | component-fabrication equipment and allocated services | sum verified meter increments, remove documented non-production loads, allocate residual shared loads causally, convert to MJ, divide by packed output kg | meter calibration; utility invoice reconciliation; allocation worksheet |
| `cp_component_scrap` | `component_fabrication` | ferrous and aluminium scrap | weigh ticket, scrap-bin, and stock records | material identity; contamination state; mass; destination; opening stock; closing stock; date | calibrated scale and destination documentation | kg | each shipment or bin clearance; aggregate monthly | same period as output | all component-fabrication scrap points | outgoing mass + closing stock - opening stock, separated by metal and treatment route, divided by packed output kg | weigh ticket; scale calibration; recycler receipt; mass-balance reconciliation |
| `cp_electromagnetic_materials` | `electromagnetic_assembly` | magnets, magnet wire, PET film, and epoxy resin | issue, return, formulation, batch, and bill-of-material records | product code; chemistry or grade; mass issued; mass returned; recovered reusable material; rejected amount; batch; route | calibrated weighing and production issue reconciliation | kg | per batch or material issue; aggregate monthly | same period as output | winding, insulation, rotor/stator assembly, and impregnation areas | net consumed mass = issued - verified return - recovered reusable material; keep route-specific totals; divide by packed output kg | scale calibration; batch traveller; formulation record; stock reconciliation |
| `cp_electromagnetic_energy` | `electromagnetic_assembly` | electricity and natural gas | electricity and gas meter records | meter id; readings; electricity multiplier; gas volume; gas reference temperature and pressure; process assignment; reporting dates | calibrated meter or documented facility allocation | kWh and m3 | continuous or shift readings; aggregate monthly | same period as output | electromagnetic assembly and curing equipment plus allocated services | sum verified increments by carrier and route; convert electricity to MJ; retain gas in m3 at declared reference conditions; divide each by packed output kg | meter calibration; invoice reconciliation; route and oven log; allocation worksheet |
| `cp_electromagnetic_scrap_emissions` | `electromagnetic_assembly` | copper scrap and direct curing carbon dioxide | scrap weigh records, stack measurements, and fuel-carbon calculation records | copper scrap mass; destination; stack CO2 mass; metered gas; carbon factor; oxidation factor; calculation version; reporting dates | calibrated scale; direct stack measurement where available; otherwise documented calculation from metered fuel | kg | each scrap shipment and each emissions reporting interval; aggregate monthly | same period as output | winding and on-site curing operations only | calculate copper scrap by stock balance; use measured direct CO2 or metered fuel multiplied by documented site factor; exclude upstream emissions; divide by packed output kg | weigh tickets; analyser calibration; gas meter record; factor provenance; calculation audit trail |
| `cp_final_components_packaging` | `final_assembly_testing_packing` | bearings, carbon brushes, and corrugated boxes | component issue, return, bill-of-material, and packaging records | product code; component type; brush route; mass issued; mass returned; rejects; packed unit count; packaging mass | calibrated weighing and traceable material issues | kg | per batch or issue; aggregate monthly | same period as output | final assembly and packing areas | net consumed mass by atomic component = issued - verified return; divide by packed output kg and retain technology applicability | bill of materials; route traveller; scale calibration; packaging specification |
| `cp_final_energy` | `final_assembly_testing_packing` | final assembly and test electricity | utility meter, test-rig, and equipment runtime records | meter readings; test-rig energy; runtime; product family; rejected test; reporting dates | calibrated submeter or documented causal allocation | kWh, converted to MJ | per test where available and monthly meter reconciliation | same period as output | final assembly, finishing, test, and packing equipment plus allocated services | sum direct readings and causally allocated shared load; include failed tests; convert to MJ; divide by packed output kg | meter calibration; test log; invoice reconciliation; allocation worksheet |
| `cp_finished_output` | `final_assembly_testing_packing` | packed finished reference product | final inspection, release, packing, and dispatch records | product id; branch; rating; technology; net product mass; packaging mass; accepted quantity; reject quantity; release date | calibrated weighing linked to release inspection | kg | each released batch; aggregate monthly | same period as all inputs | all conforming product released from the reporting factory | packed output mass = accepted net product mass + included dispatch packaging mass; normalize the package to exactly 1 kg | scale calibration; signed inspection record; nameplate record; packing specification; dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_normalization` | every mass-based product input and scrap output | normalized exchange = reconciled net exchange mass / conforming packed output mass | applicable material or scrap protocol; `cp_finished_output` | kg exchange per 1 kg packed finished product |  |
| `calc_electricity_normalization` | each electricity row | normalized electricity = reconciled kWh × 3.6 / conforming packed output mass | applicable energy protocol; `cp_finished_output` | MJ electricity per 1 kg packed finished product |  |
| `calc_gas_normalization` | `curing_natural_gas` | normalized gas = metered m3 at declared reference conditions / conforming packed output mass | `cp_electromagnetic_energy`; `cp_finished_output` | m3 natural gas per 1 kg packed finished product |  |
| `calc_direct_co2` | `curing_fossil_co2` | use measured direct stack CO2 where valid; otherwise multiply metered gas by a documented site-specific fossil-carbon factor and oxidation basis, then divide by conforming packed output mass | `cp_electromagnetic_scrap_emissions`; `cp_finished_output` | kg direct fossil CO2 per 1 kg packed finished product |  |
| `calc_reference_output` | `finished_motor_generator` | divide every exchange by conforming packed output mass so the quantitative reference output equals exactly 1 kg | `cp_finished_output` | 1 kg packed finished product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and route-conditional rows | Retain product branch, nameplate rated output and basis, commutation and magnet technology, duty, rated voltage, cooling, enclosure, embedded-controller inclusion, product mass, packing state, and factory gate. | nameplate, product specification, bill of materials, route traveller, and release record; motor terminology and test context may be checked against `iea-4e-peet-motor-regulations-2022` |
| `dq_temporal` | all foreground records | Use one common representative period, normally at least 12 consecutive months; if a shorter campaign is used, justify seasonality, start-up, shutdown, maintenance, and product-mix effects. | dated meter, stock, production, inspection, and dispatch records |
| `dq_completeness` | all crossing exchanges | Reconcile material, energy, scrap, direct-emission, reject, and output records. Report every additional exchange atomically and disclose missing upstream datasets or records. | mass-balance worksheet, energy reconciliation, emissions register, and completeness checklist |
| `dq_measurement` | metered and weighed values | Identify instrument, unit, calibration state, coverage, estimation or allocation, and any conversion factor; do not replace missing foreground records with the unresolved external ranges listed in review metadata. | calibration certificates, meter logs, weigh tickets, and calculation audit trail |
| `dq_geography_technology` | foreground and linked upstream datasets | Match production geography, electricity supply, material grade, product state, component technology, and delivery boundary; justify every proxy. | supplier declarations, dataset metadata, procurement records, and proxy-justification record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | reference product | Confirm that the saleable reference product is a complete product within one of the three covered branches and is not a photovoltaic generator, AC-only machine, generating set, rotary converter, standalone part, or larger host equipment. | `un-cpc-3-0-structure-2025` |
| `validate_reference_mass` | quantitative reference | Confirm that accepted net product mass plus included dispatch packaging mass equals the denominator used to normalize all rows to exactly 1 kg; report both component masses. |  |
| `validate_route_applicability` | conditional rows | Confirm that NdFeB and ferrite magnet rows, carbon brushes, natural-gas curing, and direct fossil CO2 are present only for applicable declared routes, and that mutually exclusive magnet rows are not both populated unless the product actually contains both chemistries. |  |
| `validate_atomic_inventory` | process inventory | Confirm that every additional material, component, energy carrier, waste, and elementary emission is represented by one concrete atomic exchange with its own property, unit, amount method, and identity resolution status. |  |
| `validate_mass_energy_reconciliation` | foreground records | Reconcile material issues, stock changes, incorporated mass, scrap, rejects, packed output, electricity, and gas to the common reporting period; investigate and document residuals. |  |
| `validate_uuid_semantics` | UUID-bearing rows | Confirm public state-100 identity, English and Chinese baseName, flow type, classification, reference property, unit group, product state, geography, technology, and generalComment before reuse; blank UUID rows remain unresolved rather than proxied. |  |
| `validate_allocation` | shared processes and scrap | Confirm subdivision was attempted first, every residual allocation has a causal driver and disclosed fraction, scrap is reported gross, and no upstream or recycling burden is double-counted. |  |
| `validate_source_boundary` | direct and upstream emissions | Confirm that only on-site emissions are direct foreground elementary flows and that grid and fuel-supply emissions remain in linked upstream datasets. | `nordelof-tillman-2018-motor-manufacturing` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset; foreground component in a lifecyclemodel |
| allowed_use | factory-gate production of complete CPC 46111 products with matching branch, technology, rating basis, geography, reporting period, boundary, product mass, and packing state |
| excluded_use | photovoltaic generators; AC-only machines; generating sets; rotary converters; standalone parts; use-stage electricity or lifetime performance; products or geographies represented only by an undisclosed proxy |
| required_metadata | canonical PCR id; reference UUID; product branch; rated output and basis; motor/generator function; commutation and magnet technology; duty; rated voltage; cooling; enclosure; embedded-controller inclusion; net and packed masses; geography; reporting period; operations in-house and outsourced; packaging state; allocation; cut-offs; data-quality rating |
| required_quality_disclosure | foreground record coverage; instrument calibration; temporal representativeness; material and energy reconciliation; route applicability; upstream dataset matches and proxies; unresolved UUIDs; unresolved range evidence; direct-versus-upstream emissions split |
| update_trigger | material change in product branch, design or bill of materials, magnet or commutation technology, rated output basis, production route, site, electricity or fuel supply, allocation, packaging, reporting period, or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | official CPC 3.0 category identity, neighbouring exclusions, and the photovoltaic-generator exclusion |
| `un-cpc-v1-1-chinese-2004` | `official_guidance` | https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | established official Chinese CPC terminology for the 46111 category; the CPC 3.0 photovoltaic exclusion is translated from the current English source |
| `nordelof-tillman-2018-motor-manufacturing` | `literature` | https://doi.org/10.1007/s11367-017-1309-8 | peer-reviewed full-text evidence for motor-factory process decomposition, component fabrication, winding, impregnation, assembly, testing, and gate-to-gate/upstream-linking logic; route and scale differences require foreground qualification |
| `iea-4e-peet-motor-regulations-2022` | `official_guidance` | https://www.iea-4e.org/peet/publications/4e-peet-status-of-electric-motor-regulations-2022/ | institutional terminology for DC motors, duty and duty type, technology scope, and the need to retain test and performance bases |
