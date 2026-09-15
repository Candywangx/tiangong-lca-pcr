---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.producer-gas-or-water-gas-generators-acetylene-gas-generators-and-similar-water-process-122c8596
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Producer gas or water gas generators; acetylene gas generators and similar water process gas generators; distilling or rectifying plant; heat exchange units; machinery for liquefying air or gas

## 1. Scope and Applicability

This PCR governs factory-gate foreground data packages for completed industrial equipment whose declared product is a producer-gas or water-gas generator, an acetylene or comparable water-process gas generator, a distilling or rectifying plant, a heat exchange unit, or machinery for liquefying air or another gas. The official CPC 3.0 structure groups these products in subclass 43911, and the International EPD System machinery PCR independently confirms that general-purpose machinery in CPC group 439 is a methodology-bearing category (`un-cpc-3-0-structure-2025`; `epd-international-pcr-2010-08-v4-0-2`).

The common semantic boundary is a completed, tested item of process equipment transferred at the manufacturing-site gate. A data package shall name one concrete equipment subgroup and model; this PCR does not imply that unlike generators, columns, heat exchangers, or cryogenic plants have equivalent function. Use-stage energy, process feed, installation, maintenance, replacement parts, distribution, and end-of-life are excluded from the reference dataset unless a downstream study adds them as separately disclosed modules. Stand-alone replacement parts, gas products, industrial-gas production, construction work, air-conditioning machines, refrigerating equipment, and heat pumps are outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.producer-gas-or-water-gas-generators-acetylene-gas-generators-and-similar-water-process-122c8596 |
| classification_refs | CPC 3.0: 43911 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Completed producer-gas or water-gas generators; acetylene or comparable water-process gas generators; distilling or rectifying plants; heat exchange units; machinery for liquefying air or another gas |
| excluded_products | The gases made or handled by the equipment; parts sold separately; site erection and construction; air-conditioning machines; refrigerating or freezing equipment; heat pumps; unrelated temperature-treatment machinery |
| representative_product | One declared, completed and factory-tested equipment model within a single covered subgroup |
| production_route | Supplier components and metals are received; applicable in-house fabrication, joining and surface preparation are performed; the unit is assembled, tested and released; outbound packaging is added when supplied |
| market_state | Complete equipment at the manufacturing-site gate, dry and empty of customer process fluid except unavoidable test residues, with included auxiliaries and outbound packaging status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared gas-generation, distillation or rectification, heat-transfer, or air/gas-liquefaction equipment function |
| How much | The rated duty delivered by one declared completed equipment item; inventory exchange is normalized to 1 kg of that item at the factory gate |
| How well | At the declared equipment subgroup, model, rated capacity or thermal duty, design pressure, operating-temperature envelope, materials of construction, efficiency or performance criterion, and test/acceptance standard |
| How long or cycle | One completed manufacturing cycle through factory acceptance and gate transfer; service life is not part of this factory-gate reference flow |
| reference_flow_link | One kilogram of the declared completed equipment realizes the mass-normalized reference flow; functional comparison additionally requires equivalent declared duty and performance qualifiers |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Producer gas or water gas generators, acetylene gas generators and similar water process gas generators, distilling or rectifying plant, heat exchange units, machinery for liquefying air or gas `0981e6ca-1eb5-49dd-b1af-cf251bdaef10` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | covered equipment subgroup; manufacturer and model; rated capacity, heat duty, or gas throughput; design pressure; operating-temperature range; working fluid or design medium; materials of construction and bill-of-material completeness; included auxiliaries and controls; production site and reference year; factory-test method and acceptance status; gate condition; packaging inclusion; allocation basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Completed reference equipment | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the shipped equipment configuration or calculate its mass from a reconciled bill of materials. Include installed auxiliaries and supplied packaging only as separately identified masses. Normalize every inventory exchange to 1 kg of completed equipment. |
| `material_mass` | Metal, sealing, chemical, packaging and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured or purchasing-record mass. Where records use pieces, area or volume, retain the count/dimension/density evidence and the conversion calculation. |
| `electrical_energy` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity before normalization. Convert kWh to MJ with 1 kWh = 3.6 MJ; do not mix purchased electricity with onsite fuel. |
| `gaseous_fuel_volume` | Natural-gas row | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered gaseous natural gas at the supplier or meter reference conditions. State temperature, pressure and whether the volume is normal, standard or actual; do not convert volume without those conditions. |
| `water_mass` | Process-water and test-water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record supplied water mass. A volume record may be converted only with a documented density and measurement conditions; reused water is reported separately from gross intake. |

## 5. System Boundary

The foreground boundary begins when purchased materials, components, packaging and delivered utilities cross the manufacturing-site boundary. It ends when the completed tested equipment crosses the factory gate. Supplier production is represented by upstream datasets; onsite fabrication, joining, preparation, assembly, testing, waste handling before transfer, and direct elementary emissions are foreground activities. The boundary follows the supply-chain and foreground-flow identification principles of the EU Product Environmental Footprint method (`eu-pef-recommendation-2021-2279`).

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metals, components, chemicals, packaging and utilities delivered to the manufacturing site, with supplier identity, material specification, quantity and delivery geography recorded |
| starting_condition_role | The upstream production of purchased inputs is represented by linked secondary or supplier-specific datasets and is not recreated inside the foreground manufacturing processes |
| product_classification_scope | One declared completed product within the semantic CPC 3.0 subclass 43911 equipment boundary; the concrete equipment subgroup is mandatory |
| recursive_input_rule | A purchased complete CPC 43911 machine incorporated into a larger delivered plant is recorded once as an upstream product input and is not recursively decomposed unless its supplier-specific foreground inventory replaces that upstream dataset |
| upstream_dataset_requirement | Each purchased input shall link to a geographically and technologically representative upstream dataset with material grade, product form, recycled content where relevant, and delivery boundary disclosed |
| disclosure | Declare equipment subgroup and model, function and duty, pressure/temperature envelope, working medium, bill of materials, included auxiliaries, production site and year, processes actually operated, test residues, packaging status, exclusions, cut-offs and allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | Include purchased inputs, onsite manufacturing and testing, onsite waste outputs and direct elementary flows through release of the completed equipment at the factory gate. Keep installation, use, maintenance and end-of-life outside this reference dataset. | `eu-pef-recommendation-2021-2279`, `alfa-laval-epd-s-p-12165-2024` |
| `boundary_process_applicability` | process_map | Include each conditional process only when production records show that it is performed for the declared model; disclose outsourced operations and represent them with supplier-specific or representative upstream datasets. | `eu-pef-recommendation-2021-2279` |
| `boundary_complete_flows` | foreground_inventory | Identify each foreground co-product, by-product, waste stream and direct elementary flow separately. An excluded flow requires documented screening and shall not be hidden in a combined utility or waste row. | `eu-pef-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `materials_and_components` | Materials and components receipt | `required` | Always include the reconciled bill of materials for the declared equipment configuration | Foreground purchasing and product composition | Per 1 kg completed reference equipment |
| `fabrication_and_joining` | In-house fabrication and joining | `conditional` | Include when plate cutting, forming, machining, welding, brazing or thermal treatment occurs at the reporting site | Foreground manufacture | Per 1 kg completed reference equipment |
| `surface_preparation` | In-house surface preparation and cleaning | `conditional` | Include when alkaline cleaning, rinsing, pickling, passivation or another wet preparation step occurs onsite | Foreground finishing | Per 1 kg completed reference equipment |
| `assembly_and_testing` | Assembly and factory testing | `required` | Always include final assembly and the factory acceptance activities performed for the declared model | Foreground assembly and release | Per 1 kg completed reference equipment |
| `outbound_packaging` | Outbound packaging | `conditional` | Include each packaging item supplied with the factory-gate product | Foreground packing | Per 1 kg completed reference equipment |

### Process: Materials and components receipt (`materials_and_components`)

#### Inputs

##### Product flows

###### Steel plate incorporated in the equipment (`steel_plate`)

Steel plate is recorded when the declared bill of materials contains purchased alloy-steel plate that becomes part of the equipment.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Net purchased steel-plate mass incorporated plus attributable plate losses, reconciled to receiving and bill-of-material records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bill_of_materials`
- Sources: `alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

###### Stainless-steel plate incorporated in the equipment (`stainless_steel_plate`)

Stainless-steel plate is recorded separately when a declared grade is incorporated; its Tiangong identity remains unresolved because audited candidates did not align name, classification and product form.

- Selected flow: Stainless-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Net purchased stainless-steel-plate mass by declared grade incorporated plus attributable plate losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bill_of_materials`
- Sources: `alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased sealing elements (`sealing_elements`)

Purchased gaskets and other sealing elements are recorded when installed in the declared equipment; elastomer chemistry and specification are mandatory qualifiers.

- Selected flow: Sealing elements `a9943e4e-1a21-412c-859e-df09a2b5ee6f`
- Flow property / unit: Mass / kg
- Amount rule: Mass of installed purchased sealing elements, separated by declared elastomer or material specification in the foreground records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bill_of_materials`
- Sources: `alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: In-house fabrication and joining (`fabrication_and_joining`)

#### Inputs

##### Product flows

###### Fabrication electricity (`fabrication_electricity`)

Electricity used by onsite cutting, forming, machining, welding, brazing and associated extraction is metered or allocated to the declared equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered fabrication electricity or an allocation from a documented shared meter using machine time and rated or measured load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas for onsite thermal operations (`fabrication_natural_gas`)

Gaseous natural gas is included only when an onsite fabrication, preheating, stress-relief or similar thermal operation consumes it.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled natural-gas volume attributable to included fabrication operations at declared reference conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_fuel`
- Sources: `eu-pef-recommendation-2021-2279`

###### Process water for machining or fabrication (`fabrication_process_water`)

Process water is included when it is supplied to water-based machining fluid, cutting, cooling or fabrication cleaning within this process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Gross supplied process-water mass less separately documented internal reuse, allocated to included fabrication operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_water`
- Sources: `us-epa-mpm-development-document-2003`, `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap from fabrication (`steel_scrap`)

Ferrous plate offcuts, chips and rejected steel parts leaving the foreground process for recovery or disposal are recorded as steel scrap.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap attributable to the declared equipment, reconciled against material input and incorporated mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_waste`
- Sources: `alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

##### Elementary flows

###### Fossil carbon dioxide from onsite natural-gas combustion (`fabrication_carbon_dioxide_fossil`)

Direct fossil carbon dioxide is included only for natural gas combusted inside the foreground boundary; upstream electricity and supplier emissions are excluded from this elementary-flow row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measured emission or fuel-specific calculation from the included natural-gas record using a documented carbon-content or emission-factor method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-recommendation-2021-2279`

### Process: In-house surface preparation and cleaning (`surface_preparation`)

#### Inputs

##### Product flows

###### Sodium hydroxide for alkaline surface cleaning (`surface_cleaning_sodium_hydroxide`)

Sodium hydroxide is recorded only when it is consumed in an onsite alkaline cleaning bath or solution; solution concentration and replenishment basis are declared.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Mass of sodium hydroxide active substance charged or replenished, calculated from purchased solution mass and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-mpm-development-document-2003`

###### Process water for surface cleaning and rinsing (`surface_cleaning_process_water`)

Process water crossing the site boundary for cleaning-bath make-up or rinsing is recorded when wet surface preparation is performed.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balance gross water supplied to included cleaning and rinse steps, with recovered and recirculated water disclosed separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_water`
- Sources: `us-epa-mpm-development-document-2003`

###### Electricity for surface preparation (`surface_cleaning_electricity`)

Electricity for pumps, agitation, ventilation, heating controls and wastewater-transfer equipment is recorded separately from fabrication electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity or documented shared-meter allocation to the included surface-preparation process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `us-epa-mpm-development-document-2003`, `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater from surface preparation (`surface_finishing_wastewater`)

The concrete aqueous waste stream leaving the cleaning, rinsing, pickling or passivation operation is recorded with its process origin and composition; a Tiangong UUID is not assigned because the audited condensate candidate is not exact.

- Selected flow: Metal surface-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured discharged or offsite-transferred wastewater mass attributable to the declared equipment, with dissolved and suspended contaminant evidence retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_wastewater`
- Sources: `us-epa-mpm-development-document-2003`

##### Elementary flows

### Process: Assembly and factory testing (`assembly_and_testing`)

#### Inputs

##### Product flows

###### Assembly and test electricity (`assembly_electricity`)

Electricity used for assembly tools, handling equipment, control-system configuration, leak testing and factory acceptance is recorded for the declared equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity or documented allocation from equipment test duration and measured or rated load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279`

###### Water supplied for hydrostatic testing (`hydrostatic_test_water`)

Process water is included only when the declared equipment undergoes hydrostatic testing; reused test water and discharged water are distinguished in the records.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Gross make-up water supplied to the test circuit attributable to the declared equipment, excluding internally recirculated volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_testing`
- Sources: `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed factory-gate process equipment (`reference_product`)

The completed, accepted equipment item is the reference-product output. Its concrete subgroup and functional-performance qualifiers are mandatory even though the Tiangong identity represents the whole CPC 43911 product category.

- Selected flow: Producer gas or water gas generators, acetylene gas generators and similar water process gas generators, distilling or rectifying plant, heat exchange units, machinery for liquefying air or gas `0981e6ca-1eb5-49dd-b1af-cf251bdaef10`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg of completed reference equipment after reconciliation to the declared shipped configuration
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

### Process: Outbound packaging (`outbound_packaging`)

#### Inputs

##### Product flows

###### EURO wooden pallet (`euro_wooden_pallet`)

A EURO wooden pallet is recorded only when that specified pallet is supplied with the declared equipment; other pallet specifications require their own atomic flow.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Mass of the supplied EURO pallet allocated to the declared equipment, adjusted for documented reuse only when ownership and reuse cycles are evidenced
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outbound_packaging`
- Sources: `alfa-laval-epd-s-p-12165-2024`

###### Plastic protective film (`plastic_film`)

Plastic film is recorded when it is supplied as protective or transport packaging; polymer, thickness and recycled content are declared.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass / kg
- Amount rule: Net mass of plastic film supplied with the declared equipment from packaging issue or weighed packing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg completed reference equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outbound_packaging`
- Sources: `alfa-laval-epd-s-p-12165-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_manufacturing_processes | First subdivide metered processes, production orders, machine time, test runs and waste records so inputs and outputs are directly attributable to the declared equipment. Use system expansion only when a documented additional function is deliberately included. | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_relation` | residual_shared_inputs_outputs | When subdivision is not possible, use a causal physical parameter such as machine time multiplied by measured load, processed plate area, weld length, test duration or equipment mass. State the chosen key and reconcile allocated totals to site records. | `eu-pef-recommendation-2021-2279`, `alfa-laval-epd-s-p-12165-2024` |
| `allocation_economic_last_resort` | residual_multifunctionality | Use economic allocation only when neither subdivision, system expansion nor a defensible physical relation is possible; disclose prices, reference period, sensitivity and affected flows. | `eu-pef-recommendation-2021-2279` |
| `allocation_scrap_no_avoided_burden` | steel_scrap | Report steel scrap leaving the foreground boundary as a waste output. Do not subtract an avoided virgin-steel burden inside this factory-gate inventory; downstream recycling modelling is a separate disclosed choice. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bill_of_materials` | `materials_and_components` | incorporated purchased material or component | ERP bill of materials, receiving record and as-built release record | item id; material specification; product form; supplier; received mass; installed mass; production order; reject quantity | Reconcile as-built bill of materials to purchasing and receiving records for the declared configuration | kg | Each production order | All units represented by the dataset reference period | Manufacturing site and declared equipment model | Sum installed and attributable loss mass by atomic material or component flow; normalize by accepted equipment mass | Approved bill of materials; material certificates; receiving records; mass reconciliation |
| `cp_process_energy` | `fabrication_and_joining`; `surface_preparation`; `assembly_and_testing` | electricity by process | submeter, machine log and production order | meter start; meter end; machine id; run time; load; process id; production order | Prefer process submetering; otherwise allocate shared metered electricity with documented operating time and measured or rated load | MJ | Per batch or monthly meter period | Representative continuous 12-month period where available | All included production areas at the reporting site | Subtract non-production and excluded-product loads, allocate to production orders, then divide by accepted equipment mass | Calibrated meter record; allocation worksheet; energy invoice reconciliation |
| `cp_process_fuel` | `fabrication_and_joining` | natural gas for included thermal operation | fuel meter, invoice and furnace log | volume; reference temperature; reference pressure; meter period; equipment id; run time; production order | Reconcile meter totals to invoices and allocate only fuel consumed by included operations | m3 | Each meter period | Representative continuous 12-month period where available | Included onsite thermal equipment | Sum attributable reference-condition volume and divide by accepted equipment mass | Meter calibration; invoice reconciliation; stated reference conditions |
| `cp_process_water` | `fabrication_and_joining`; `surface_preparation` | supplied process water | water meter, tank balance and batch log | intake; make-up; return; blowdown; process id; batch id; production order | Meter gross intake and document internal recirculation without counting it as a new boundary input | kg | Per batch or monthly meter period | Representative continuous 12-month period where available | Included water-using processes | Allocate net supplied boundary input to production orders and normalize by accepted equipment mass | Meter calibration; tank-balance reconciliation; reuse log |
| `cp_process_waste` | `fabrication_and_joining` | steel scrap | scrap scale ticket and production order | tare; gross mass; material grade; contamination; destination; production order | Weigh segregated ferrous scrap; allocate mixed collection by documented production records | kg | Each removal or production batch | Same period as material input records | Included fabrication areas | Sum attributable scrap and reconcile material input to incorporated product and other identified outputs | Scale calibration; hauler ticket; mass-balance worksheet |
| `cp_direct_emissions` | `fabrication_and_joining` | direct fossil carbon dioxide | continuous measurement or fuel calculation record | measured emission; fuel volume; reference conditions; fuel carbon content or factor; oxidation basis; calculation version | Use direct measurement when representative; otherwise calculate from the same fuel record with a documented factor method | kg | Each fuel meter period | Same period as fuel consumption | Foreground combustion sources only | Sum direct fossil CO2 and divide by accepted equipment mass | Instrument QA or traceable factor source; calculation worksheet; fuel reconciliation |
| `cp_surface_chemicals` | `surface_preparation` | sodium hydroxide active substance | purchase, bath make-up and concentration record | solution mass; concentration; bath id; replenishment; carryover; production order | Determine active-substance mass from weighed solution and verified concentration | kg | Each bath make-up and replenishment | Same period as surface-preparation production | Included wet preparation lines | Sum active-substance charge attributable to production orders and normalize by accepted equipment mass | Supplier certificate; concentration test; bath log; calculation record |
| `cp_surface_wastewater` | `surface_preparation` | metal surface-finishing wastewater | discharge meter, tank transfer and laboratory record | wastewater mass or volume; density; pH; dissolved metals; suspended solids; treatment state; destination; production order | Measure each concrete waste stream at discharge or offsite transfer and retain representative chemistry | kg | Each discharge or transfer | Same period as surface-preparation inputs | Included cleaning, rinsing, pickling and passivation operations | Sum stream-specific mass after internal reuse; allocate by bath campaign or production records | Meter or scale calibration; laboratory report; transfer document; water balance |
| `cp_factory_testing` | `assembly_and_testing` | hydrostatic-test water | test sheet and water make-up record | equipment serial; internal volume; make-up water; recovered water; discharge; test date; result | Record only boundary-crossing make-up water, not recirculated test-loop inventory | kg | Each tested unit | All represented tested units | Factory test area | Sum make-up water for accepted and attributable failed tests, then divide by accepted equipment mass | Signed test sheet; water balance; instrument calibration |
| `cp_outbound_packaging` | `outbound_packaging` | supplied pallet or film | packing list, issue record and scale record | packaging item; material; specification; issued quantity; mass; reuse status; production order | Weigh or calculate mass from verified item mass and count for each atomic packaging item | kg | Each shipment | All shipments represented by the dataset | Factory-gate packaging operation | Sum packaging supplied with the declared configuration and normalize by accepted equipment mass | Packing list; scale record; supplier specification; reuse evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributable period amount / accepted completed-equipment mass for the same production orders | attributable flow amount; accepted equipment mass | Flow amount per 1 kg completed reference equipment | `eu-pef-recommendation-2021-2279` |
| `calc_electricity_conversion` | electricity rows | electricity in MJ = metered electricity in kWh × 3.6 | metered kWh | MJ of electricity |  |
| `calc_active_sodium_hydroxide` | `surface_cleaning_sodium_hydroxide` | active NaOH mass = solution mass × measured or supplier-certified mass fraction | solution mass; NaOH mass fraction | kg sodium hydroxide | `us-epa-mpm-development-document-2003` |
| `calc_material_reconciliation` | bill of materials and steel scrap | purchased attributable mass = incorporated accepted-product mass + segregated attributable scrap + other separately identified losses, adjusted for opening and closing work in progress | receiving mass; installed mass; scrap mass; other losses; work-in-progress change | Reconciled atomic material flows | `eu-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | The equipment subgroup, model, function, duty, pressure/temperature envelope, working medium, bill of materials and included auxiliaries shall be unambiguous. | Released drawing and bill of materials; datasheet; factory acceptance record |
| `dq_temporal` | foreground activity data | Use one consistent representative period, normally 12 continuous months where production occurs, and disclose any shorter campaign, abnormal shutdown or extrapolation. | Meter periods; production ledger; explanation of representativeness |
| `dq_mass_balance` | material and waste rows | Reconcile major purchased material masses to accepted product, work in progress and separately identified waste or loss; explain residual differences. | Signed mass-balance worksheet; scale and ERP records |
| `dq_meter_allocation` | shared energy and water | Shared-meter allocation shall use a causal driver and reconcile to the meter total without double counting. | Meter export; allocation key; reconciliation and sensitivity check |
| `dq_geography_technology` | upstream datasets | Match material grade, product form, energy mix, supplier region, recycled content and technology where material; disclose proxies and data gaps. | Dataset metadata; supplier documentation; proxy register |
| `dq_completeness` | foreground inventory | Record each atomic utility, material, packaging item, waste stream and direct elementary flow separately. Document exclusions and screening. | Completeness checklist tied to purchasing, meter, waste and emission records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | reference_flow | Reject a data package if the concrete equipment subgroup or any required qualifier is missing, or if the reference product is not normalized to 1 kg of accepted factory-gate equipment. | `un-cpc-3-0-structure-2025`, `eu-pef-recommendation-2021-2279` |
| `validate_process_applicability` | process_inventory | Every conditional process shall be marked applicable or not applicable for the declared model. Applicable processes require their atomic inputs and outputs; outsourced processes require disclosed upstream datasets. | `eu-pef-recommendation-2021-2279` |
| `validate_inventory_reconciliation` | foreground_inventory | Check that collected and calculated rows link to their protocols, units and production period; reconcile shared meters, bill-of-material masses, steel scrap, water balances and accepted output mass. | `eu-pef-recommendation-2021-2279`, `us-epa-mpm-development-document-2003` |
| `validate_direct_emission_scope` | elementary_flows | Fossil CO2 in `fabrication_carbon_dioxide_fossil` shall represent only direct onsite combustion associated with the reported fuel row; upstream and electricity emissions shall remain in upstream datasets. | `eu-pef-recommendation-2021-2279` |
| `validate_no_unsupported_ranges` | amount_ranges | Do not apply an external empirical range unless at least two independent sources have compatible boundary, functional basis and product state. In the absence of such evidence, use the foreground collection rule and disclose the unresolved evidence need. |  |
| `validate_comparability` | comparative_use | Do not compare unlike equipment subgroups or models solely on the 1 kg reference. Comparative use additionally requires equivalent function, rated duty, performance, pressure, temperature, working medium, service assumptions and boundary. | `alfa-laval-epd-s-p-12165-2024`, `eu-pef-recommendation-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` for factory-gate manufacture of one declared CPC 43911 equipment configuration |
| downstream_use | Link the dataset as the supplied-equipment input to a process or lifecycle model that separately models installation, operation, maintenance, replacement and end-of-life where relevant |
| allowed_use | Attributional product-system modelling, supply-chain screening and equipment-manufacturing improvement where the declared model, technology, geography, reference year and factory-gate boundary are representative |
| excluded_use | Direct comparison of unlike equipment subgroups or performance; representation of industrial gas production; use-stage energy modelling; installation or construction; spare parts; unqualified global average claims |
| required_metadata | PCR id and version state; equipment subgroup and model; function and rated duty; pressure and temperature envelope; working medium; shipped mass; bill-of-material scope; included auxiliaries; site and reference year; process applicability; upstream dataset choices; packaging status; allocation and exclusions |
| required_quality_disclosure | Foreground coverage period; meter and scale QA; mass, water and energy reconciliation; allocation keys; supplier-data share; proxy datasets; unresolved UUIDs and range-evidence needs; data gaps and cut-offs |
| update_trigger | Change in model design or bill of materials, production route, site, energy supply, surface chemistry, test method, packaging configuration, allocation key, upstream dataset representativeness, or foreground data older than the declared review interval |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 43911 classification identity and English scope |
| `epd-international-pcr-2010-08-v4-0-2` | `standard` | EPD International, PCR 2010:08 Other special- and general-purpose machinery and parts thereof, version 4.0.2, https://www.environdec.com/pcr-library/pcr2010-08 | Independent confirmation that general-purpose machinery in CPC group 439 is within a machinery PCR scope |
| `alfa-laval-epd-s-p-12165-2024` | `dataset` | Alfa Laval Technologies AB, Environmental Product Declaration S-P-12165, Gasketed Plate Heat Exchanger T10-BFM/AQ4T-BFM, 10 April 2024, https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/b8d9fc22-5379-4973-8795-08dc0c7232d4/Documents | Original-text-verified CPC 43911 heat-exchanger example; declared unit; steel, rubber and plastic composition; packaging; company-specific material, energy, consumable and waste data expectations; physical allocation example |
| `eu-pef-recommendation-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | Functional unit and reference flow, supply-chain boundary, foreground flow identification, company-specific bill of materials and manufacturing data, allocation hierarchy, and data-quality principles |
| `us-epa-mpm-development-document-2003` | `official_guidance` | U.S. Environmental Protection Agency, Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products and Machinery Point Source Category, 2003, https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf | Original-text-verified machining, metal-working-fluid, cleaning, painting, water-use, wastewater and process-monitoring context for conditional foreground operations |
| `cn-mof-tariff-2026` | `official_guidance` | Ministry of Finance of the People's Republic of China, 2026 tariff commodity nomenclature, https://m.mof.gov.cn/czxw/202603/P020260326610286964491.pdf | Verified professional Chinese terminology for distilling or rectifying equipment, heat exchange units, and machinery for liquefying air or other gas |
