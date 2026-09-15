---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.parts-of-the-goods-of-subclass-42310
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of the goods of subclass 42310

## 1. Scope and Applicability

This PCR covers finished physical parts identifiable as being solely or principally for nuclear reactors, including reactor internal and pressure-boundary parts delivered as accepted components. It applies to cradle-to-gate foreground manufacture from receipt of qualified material or a qualified preform through shaping, machining, applicable thermal operations, cleaning, inspection, testing, acceptance and release at the manufacturer's gate.

The category excludes complete nuclear reactors; non-irradiated and spent fuel elements; parts of non-irradiated fuel elements; isotope-separation equipment; steam generators and boiler auxiliaries; generic fasteners, valves, pumps, instruments or structural products not demonstrably dedicated to a nuclear-reactor application; installation at the reactor site; operation, maintenance and decommissioning. CPC 3.0 identifies subclass 42310 as nuclear reactors and subclass 42341 as parts of those goods. The Chinese product terminology is rendered literally as 子类42310所列货物的零件 and described in ordinary technical language as 核反应堆零件, consistent with official Chinese tariff terminology for the corresponding HS 8401 family.

The representative route is manufacture of an accepted low-alloy-steel reactor part from a qualified forging. A dataset for another covered material or fabrication route shall replace the representative material input with each actual bill-of-material flow as a separate atomic exchange and shall declare all route-specific operations; it shall not aggregate different materials, fuels, chemicals, wastes or emissions into collection labels.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.parts-of-the-goods-of-subclass-42310 |
| classification_refs | CPC 3.0: 42341, Parts of the goods of subclass 42310 (exact semantic relation; mapping acceptance is maintained separately) |
| covered_products | Finished nuclear-reactor parts with a declared reactor application, component designation, material specification, manufacturing route and acceptance status |
| excluded_products | Complete reactors; nuclear fuel elements and their parts; isotope-separation equipment; boiler or steam-generator parts; undedicated general-purpose goods; site installation, use, maintenance and end-of-life services |
| representative_product | Accepted low-alloy-steel nuclear-reactor part manufactured from a qualified forging |
| production_route | Qualified forging receipt; material verification; shaping and machining; conditional thermal cutting or heat treatment; conditional alkaline cleaning; non-destructive examination, dimensional inspection, acceptance and release |
| market_state | Finished, clean, inspected, accepted and documented part at the manufacturer's gate, excluding transport packaging and installation fixtures |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished nuclear-reactor part that performs its declared structural, pressure-boundary, support, alignment or reactor-internal function |
| How much | 1 kg net mass of accepted finished part |
| How well | Conforms to the declared drawing revision, material specification, safety classification, dimensional and other critical-characteristic acceptance criteria, with complete manufacturing and inspection traceability |
| How long or cycle | One completed manufacturing and acceptance cycle; service life and reactor operation are outside this cradle-to-gate reference |
| reference_flow_link | The accepted net product mass reported by `final_reactor_part` is normalized to exactly 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished nuclear-reactor part (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part designation and drawing revision; reactor type and intended application; safety class or declared non-safety classification; material grade and forging specification; manufacturing route and special-process status; acceptance criteria and release status; net-mass basis; manufacturing site, geography and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net part mass after final cleaning and inspection. Exclude transport packaging, temporary fixtures, test media and rejected parts from the reference amount. |
| `electricity_energy_conversion` | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter readings and the electricity supply context. Convert kWh to MJ using the exact identity 1 kWh = 3.6 MJ and disclose the conversion. |
| `gas_reference_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | Record metered volume and declare pressure, temperature and dry/wet basis. Do not compare or aggregate volumes reported at incompatible reference conditions. |
| `water_mass_conversion` | process-water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer measured mass. If only volume is metered, retain the volume record and document the density and reference conditions used to calculate mass. |
| `material_balance_basis` | forging, accepted product and machining scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the same calibrated mass basis and reporting period for received forging, accepted product and low-alloy machining chips; document any other retained, recycled internally or disposed solid material. |

## 5. System Boundary

The foreground boundary begins when the qualified low-alloy steel forging is accepted at the component manufacturer's gate. It ends when the finished nuclear-reactor part has passed the declared inspection and acceptance plan and is released at the same manufacturer's gate. Upstream production of the forging, purchased energy, gases, water and chemicals is represented by linked background datasets. The foreground includes on-site shaping, machining, applicable thermal operations, cleaning, direct releases, waste generation, non-destructive examination, hydrostatic testing when required, final acceptance and the share of common services physically attributable to the part.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified low-alloy steel forging received with material identity, heat or lot traceability, specification, mass and acceptance evidence |
| starting_condition_role | Purchased product input and cradle-to-gate foreground starting point |
| product_classification_scope | Finished physical parts solely or principally for nuclear reactors; CPC 3.0 42341 is the reviewed exact classification reference |
| recursive_input_rule | A purchased nuclear-reactor subpart within the same semantic category is recorded once as an individual product input with its own upstream dataset; its manufacture is not recursively reconstructed inside this foreground package |
| upstream_dataset_requirement | Each purchased material, electricity, gas, water and chemical flow requires a geographically, technologically and temporally representative upstream dataset with matching product state and unit |
| disclosure | Declare the part designation, material and safety classification, included and excluded unit operations, outsourced operations, allocation choices, direct-emission basis, waste destinations and whether any same-category subpart enters the boundary |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground system | Include manufacturing and acceptance from receipt of a qualified preform through release of the accepted finished part; exclude reactor-site installation, reactor operation, maintenance and decommissioning. | `un-cpc-3-0-structure-2025`; `iaea-tecdoc-2034`; `iaea-pub2068` |
| `boundary_special_processes` | shaping, machining, welding, forming, cladding, heat treatment, surface treatment and non-destructive testing when performed | Declare every applicable special process, its site or supplier, qualification status and acceptance evidence. Omission is permitted only with an explicit not-applicable justification for the selected part and route. | `iaea-tecdoc-2034`; `iaea-pub2068` |
| `boundary_company_specific` | bill of materials and foreground manufacturing | Collect company-specific bill-of-material, energy, consumable, waste and direct-emission data for the product and manufacturing processes in scope. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_shaping` | Material verification, shaping and machining | required | Always for the representative low-alloy-steel forging route | Foreground material conversion | Per 1 kg accepted finished part |
| `thermal_operations` | Thermal cutting and on-site heat treatment | conditional | Include when thermal cutting or a fuel- or electricity-consuming heat-treatment operation is performed within the foreground boundary | Foreground special process | Per 1 kg accepted finished part |
| `alkaline_cleaning` | Sodium-hydroxide alkaline cleaning | conditional | Include when an aqueous sodium-hydroxide cleaning bath is used within the foreground boundary | Foreground surface preparation | Per 1 kg accepted finished part |
| `inspection_acceptance` | Non-destructive examination, hydrostatic testing, final inspection and release | required | Always; operations not required by the declared acceptance plan are identified as not applicable | Foreground quality control and reference-product release | Per 1 kg accepted finished part |

### Process: Material verification, shaping and machining (`material_shaping`)

#### Inputs

##### Product flows

###### Qualified low-alloy steel forging (`low_alloy_steel_forging`)

Record the qualified low-alloy steel forging that crosses the factory-gate boundary for the representative route. Retain the material grade, heat or lot, forged delivery state, certificate, received mass and acceptance result.

- Selected flow: Low-alloy steel forging (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass of the qualified forging consumed for the declared accepted part output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources: `iaea-tecdoc-2034`; `iaea-pub2068`; `eu-pef-2021-2279`

###### Electricity for shaping and machining (`shaping_electricity`)

Record purchased electricity metered or physically allocated to material verification equipment, forming, cutting, machining, grinding and chip handling in this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity or physically allocated electricity for the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-pef-2021-2279`

###### Process water for shaping and machining (`shaping_process_water`)

Record process water that crosses the boundary for machining, grinding, rinsing or leak-control activities in this process. Exclude closed-loop water that does not cross the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up and once-through process water entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Low-alloy steel machining chips (`low_alloy_machining_scrap`)

Record separated low-alloy steel chips and turnings leaving this process for recycling, treatment or disposal. Do not combine them with stainless steel, non-ferrous metal, grinding sludge or mixed shop waste.

- Selected flow: Steel scrap, low-alloyed (machining chips), at plant `826431d5-0492-4345-9051-8342d1f6c4d5`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of low-alloy steel machining chips leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Direct particulate matter from shaping (`shaping_particulate_to_air`)

Record measured particulate matter released directly to air after installed capture or control equipment. Do not include particulate emissions already contained in upstream electricity or material datasets.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: measured or permit-inventory mass emitted directly from shaping and machining to unspecified air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021-2279`

### Process: Thermal cutting and on-site heat treatment (`thermal_operations`)

#### Inputs

##### Product flows

###### Electricity for thermal operations (`thermal_electricity`)

Record electricity used by thermal cutting, resistance heating, furnace auxiliaries, controls and material handling when this conditional process is included.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity or physically allocated electricity for included thermal operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `iaea-tecdoc-2034`; `eu-pef-2021-2279`

###### Gaseous natural gas for on-site heating (`thermal_natural_gas`)

Record gaseous natural gas entering on-site furnaces or burners for the included thermal operation. Declare composition, supply geography and volume reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gaseous natural gas delivered to the included furnace or burner
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_gas`
- Sources: `iaea-pub2068`; `eu-pef-2021-2279`

###### Industrial oxygen for thermal cutting (`cutting_oxygen`)

Record industrial oxygen supplied to an oxygen-fuel cutting operation when that route is performed. Purity, pressure, supply mode and reference conditions remain foreground qualifiers.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-invoiced industrial oxygen consumed by thermal cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gas`
- Sources: `iaea-pub2068`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from on-site natural gas (`thermal_fossil_co2`)

Record only direct fossil carbon dioxide released by on-site natural-gas combustion in this process. Upstream electricity and fuel-supply emissions remain in their linked background datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or site emissions-inventory mass of direct fossil carbon dioxide from the included on-site burner
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021-2279`

### Process: Sodium-hydroxide alkaline cleaning (`alkaline_cleaning`)

#### Inputs

##### Product flows

###### Electricity for alkaline cleaning (`cleaning_electricity`)

Record electricity used by bath heating, circulation, filtration, ventilation and material handling when this conditional cleaning process is included.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity or physically allocated electricity for the alkaline-cleaning process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-pef-2021-2279`

###### Process water for alkaline cleaning (`cleaning_process_water`)

Record process water used to make up the sodium-hydroxide bath and for associated rinsing. Exclude water recirculated internally without crossing the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up and rinse water entering the included alkaline-cleaning process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eu-pef-2021-2279`

###### Sodium hydroxide for alkaline cleaning (`cleaning_sodium_hydroxide`)

Record the mass of sodium hydroxide product added to the cleaning bath. Declare product state and solution concentration; report sodium-hydroxide mass separately from total solution mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: supplier-invoiced or batch-record mass of sodium hydroxide added to the bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemical`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent alkaline cleaning liquor (`waste_alkaline_liquor`)

Record the spent sodium-hydroxide cleaning bath when it leaves the process for treatment or disposal. Retain pH, sodium-hydroxide origin, principal contaminants, hazardous classification and destination as foreground qualifiers.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of waste alkaline liquor leaving the included cleaning process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

### Process: Non-destructive examination, hydrostatic testing, final inspection and release (`inspection_acceptance`)

#### Inputs

##### Product flows

###### Electricity for inspection and acceptance (`acceptance_electricity`)

Record electricity used by non-destructive examination, dimensional inspection, hydrostatic-test equipment, controls and final acceptance activities within the foreground boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity or physically allocated electricity for inspection and acceptance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `iaea-tecdoc-2034`; `iaea-pub2068`; `eu-pef-2021-2279`

###### Process water for hydrostatic testing (`hydrotest_process_water`)

Record process water added for hydrostatic testing when the declared acceptance plan requires that test. Water reused without crossing the boundary is not counted again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water entering the hydrostatic test system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `iaea-tecdoc-2034`; `iaea-pub2068`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished nuclear-reactor part (`final_reactor_part`)

Record only product mass released after the declared critical characteristics, inspection status and manufacturing records satisfy the acceptance plan. Rejected or unreleased parts are not reference product.

- Selected flow: Finished nuclear-reactor part (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg after normalizing the collected accepted net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished nuclear-reactor part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accepted_output`
- Sources: `un-cpc-3-0-structure-2025`; `iaea-tecdoc-2034`; `iaea-pub2068`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared or multifunctional manufacturing processes | Avoid allocation by subdividing processes or meters so inputs, wastes and direct emissions are assigned to the part and unit operation that caused them. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | common electricity, gas, water, consumables, waste treatment and emissions | When subdivision is not feasible, use a documented causal physical driver such as machine time, metered energy, treated mass or bath loading. Economic allocation is permitted only after subdivision and physical relationships are shown infeasible and the justification is disclosed. | `eu-pef-2021-2279` |
| `allocation_scrap_separate_output` | low-alloy machining chips and other recovered material | Record the actual scrap as a separate waste output at the factory gate. Do not silently subtract its mass, sale revenue or an avoided-primary-material credit from the foreground burdens; any recycling allocation belongs to the declared downstream LCA method. | `eu-pef-2021-2279` |
| `allocation_rework_and_rejects` | rework, rejected parts and destructive-test specimens | Assign measured rework and reject burdens to accepted output from the same reporting period unless a physically separate product system is demonstrated. Disclose excluded abnormal-event campaigns separately. | `eu-pef-2021-2279`; `iaea-tecdoc-2034` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `material_shaping` | qualified forging input | receiving record, bill of material and material certificate | part_id; drawing_revision; heat_or_lot; material_grade; product_state; received_mass_kg; accepted_mass_kg; certificate_id | reconcile receiving scale data, BOM issues and certificate traceability to the accepted part lot | kg | per receipt and production lot | complete declared reference period | all sites supplying the foreground part | sum accepted forging mass consumed; subtract only documented returns that leave unused | calibrated scale record; certificate; material acceptance and traceability record |
| `cp_electricity` | all included processes | process electricity | revenue meter, submeter or equipment energy record | meter_id; process_id; start_reading; end_reading; unit; allocation_driver; accepted_output_kg | prefer process submetering; otherwise physically allocate a common meter using a documented causal driver | kWh and MJ | per batch or monthly | at least 12 consecutive representative months, or the complete campaign for one-off manufacture | all foreground manufacturing and acceptance sites | sum by process and convert kWh to MJ before normalization | meter calibration; bills; allocation worksheet; outage and anomaly log |
| `cp_water` | `material_shaping`; `alkaline_cleaning`; `inspection_acceptance` | process-water input | meter, tank or batch record | source; process_id; volume_or_mass; unit; density; reference_conditions; reuse_volume; discharge_destination | measure boundary-crossing make-up and once-through water; exclude internal recirculation from repeated counting | kg, with original m3 retained when applicable | per batch or monthly | same period as accepted output | all foreground sites using water | sum net boundary input by process and normalize | meter calibration; batch sheet; density or conversion record; water balance |
| `cp_fuel_gas` | `thermal_operations` | natural-gas input | gas meter or supplier invoice | meter_id; volume_m3; pressure; temperature; dry_wet_basis; composition; process_share | meter gas delivered to included burners or physically allocate a common meter | m3 | per batch or monthly | same period as accepted output | included foreground furnaces and burners | sum at a common declared reference condition and normalize | calibrated meter; invoice reconciliation; allocation worksheet |
| `cp_process_gas` | `thermal_operations` | industrial-oxygen input | cylinder, bulk-tank or flowmeter record | supplier; purity; delivery_mode; volume_m3; pressure; temperature; process_id | reconcile supplier deliveries and stock change or use a calibrated process flowmeter | m3 | per batch or delivery period | same period as accepted output | included thermal-cutting operations | deliveries plus opening stock minus closing stock, allocated to the process and normalized | invoices; stock record; meter calibration; reference-condition record |
| `cp_process_chemical` | `alkaline_cleaning` | sodium-hydroxide input | batch formulation and purchasing record | product_state; concentration; solution_mass_kg; sodium_hydroxide_mass_kg; bath_id; additions; carryover | calculate pure sodium-hydroxide product mass from verified product concentration and batch additions | kg | per bath and batch | same period as accepted output | included alkaline-cleaning lines | sum sodium-hydroxide mass, not total solution mass, and normalize | safety data sheet; certificate; calibrated scale; batch sheet; concentration check |
| `cp_waste` | `material_shaping`; `alkaline_cleaning` | separated machining chips or waste alkaline liquor | weighbridge, container scale and waste manifest | row_id; waste_identity; mass_kg; container_tare; date; destination; hazardous_classification; pH_or_contaminants | weigh each separated waste stream before off-site transfer; subtract container tare | kg | per container or shipment | same period as accepted output | all foreground waste collection points | sum by atomic waste identity and destination and normalize | calibrated scale; waste manifest; composition or pH evidence; destination receipt |
| `cp_direct_emissions` | `material_shaping`; `thermal_operations` | direct particulate matter or fossil carbon dioxide | stack test, continuous monitor or regulated site emissions inventory | flow_identity; source_id; concentration; flow_rate; operating_time; measured_mass_kg; control_status; method | use source-specific measurements where available; otherwise use the site's documented emissions inventory without importing upstream emissions | kg | per monitoring event with period aggregation | same period as accepted output and representative operating conditions | all direct foreground emission points | aggregate by elementary-flow identity and source, then normalize | method report; calibration; operating log; control-equipment status; emissions inventory reconciliation |
| `cp_accepted_output` | `inspection_acceptance` | accepted finished part | production release and inspection dossier | part_id; drawing_revision; material_heat_or_lot; safety_class; acceptance_plan; inspection_results; release_status; net_mass_kg; release_date | weigh accepted clean part and reconcile identity to the released manufacturing dossier | kg | per released part or lot | complete declared reference period | all foreground release points | sum only accepted released net mass; use as normalization denominator | calibrated scale; material traceability; inspection and test records; signed release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = reporting-period row amount / reporting-period accepted net product mass | atomic flow amount; accepted net product mass from `cp_accepted_output` | amount per 1 kg accepted finished part | `eu-pef-2021-2279` |
| `calc_electricity_mj` | electricity rows | electricity_MJ = metered_kWh × 3.6 | metered or allocated kWh | electricity in MJ before reference-flow normalization |  |
| `calc_material_reconciliation` | forging, accepted product and solid material outputs | received forging mass = accepted product mass + separated machining-chip mass + other explicitly documented solid destinations ± verified stock change | `cp_material_bom`; `cp_waste`; `cp_accepted_output` | reconciled material balance and unexplained difference | `eu-pef-2021-2279` |
| `calc_shared_resource_allocation` | common meters and shared treatment | assign only the measured common total using a causal physical driver; preserve total conservation across products | common-meter total; machine time, metered energy, treated mass or bath loading by product | product-specific allocated amount and disclosed driver | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve part designation, drawing revision, reactor application, safety class, material heat or lot and accepted release status through all records. | manufacturing dossier and signed release record; `iaea-tecdoc-2034`; `iaea-pub2068` |
| `dq_special_process_traceability` | all special processes | Retain operator and equipment qualification, procedure revision, process parameters, hold or witness points, inspection results and acceptance criteria for each applicable special process. | qualified procedure and personnel records; inspection and test plan; `iaea-tecdoc-2034` |
| `dq_measurement` | meters, scales and analytical measurements | Use calibrated equipment within its valid calibration interval and retain raw readings, units, conversions, uncertainty or resolution and anomaly disposition. | calibration certificates, raw logs and QA review |
| `dq_temporal` | foreground inventory | Cover at least 12 consecutive representative months; for one-off or long-cycle parts, cover the complete manufacturing campaign and disclose why it is representative. | production calendar, meter periods and campaign records |
| `dq_completeness` | all included processes | Reconcile BOM, energy, water, consumables, wastes, direct emissions and accepted output. No flow may be hidden in an umbrella row; omitted applicable operations or flows require an explicit gap statement. | mass and energy reconciliations, source-register review and gap log; `eu-pef-2021-2279` |
| `dq_geography_technology` | upstream links and shared services | Match supply geography, product state, reference conditions, technology and time period, and disclose every proxy or allocation driver. | supplier records, dataset metadata and allocation worksheet |
| `dq_range_status` | all 16 inventory rows | No external typical or QA range is prescribed because two independent original-text sources with compatible boundary, functional unit and product state were not established. Foreground collection is mandatory and the evidence needs remain unresolved in the manifest. | manifest `review_metadata.unresolved.range_evidence_needs` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | product and dataset metadata | Confirm that the output is a physical part solely or principally for a nuclear reactor and is not an excluded fuel element, boiler part, general-purpose good or service. | `un-cpc-3-0-structure-2025`; `china-tariff-2026-nuclear-reactor-parts` |
| `validate_reference_flow` | reference amount | Confirm that accepted clean net product mass is positive and every row is normalized to exactly 1 kg of accepted finished part; packaging, fixtures, test media and rejects are excluded from reference output. | `eu-pef-2021-2279`; `iaea-tecdoc-2034` |
| `validate_uuid_property_unit` | every UUID-bearing inventory row | Confirm the selected Tiangong UUID, flow type, flow property and unit group match the atomic exchange and that volume rows declare reference conditions. UUID-empty rows remain explicit unresolved findings, not proxy matches. |  |
| `validate_process_route` | process map and inventory | Confirm required processes are present, conditional processes match the declared route, and every applicable special process has qualification, parameter, inspection and acceptance evidence. | `iaea-tecdoc-2034`; `iaea-pub2068` |
| `validate_inventory_completeness` | foreground inventory | Confirm that each material, electricity use, gas, water, chemical, waste and direct emission is represented by an atomic row or explicitly documented as not applicable; reconcile material and shared-resource totals. | `eu-pef-2021-2279` |
| `validate_allocation` | multifunctional and shared operations | Confirm subdivision was attempted first, each residual allocation uses a causal physical driver, totals are conserved and any economic relation is separately justified. | `eu-pef-2021-2279` |
| `validate_quality_release` | final product | Confirm critical characteristics, inspection status, manufacturing traceability and release evidence are complete before counting the part as reference product. | `iaea-tecdoc-2034`; `iaea-pub2068` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate foreground dataset that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Nuclear-reactor construction and equipment models requiring an accepted nuclear-reactor part at the manufacturer's gate |
| allowed_use | Product systems matching the declared part function, material grade and state, manufacturing route, safety classification, geography, reference period and factory-gate boundary |
| excluded_use | Complete reactor manufacture; fuel elements; boiler or steam-generator parts; site installation; reactor operation, maintenance or decommissioning; comparison of unlike safety classes or manufacturing routes without harmonization |
| required_metadata | PCR id and version; part designation and drawing revision; reactor application; safety class; material grade, heat or lot and forging state; manufacturing and outsourced process route; acceptance plan and release status; site and geography; reference period; allocation and cut-off decisions; upstream dataset identities |
| required_quality_disclosure | Coverage and calibration of foreground records; mass and energy reconciliation; special-process and acceptance traceability; direct-emission method; waste destinations; proxy and allocation choices; unresolved UUIDs and range-evidence needs |
| update_trigger | Drawing, material specification, safety class, supplier, manufacturing route, site, allocation method, upstream technology, acceptance plan or representative-period change; resolution of either outstanding flow UUID; or availability of compatible independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, hash-verified CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 42310 parent identity as nuclear reactors and CPC 42341 English classification title |
| `china-tariff-2026-nuclear-reactor-parts` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, 2026 tariff schedule: https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf (retrieved 2026-09-05) | Professional Chinese terminology for 核反应堆, 堆内构件 and 其他核反应堆零件 in the corresponding HS 8401 family |
| `iaea-tecdoc-2034` | Official guidance (`official_guidance`) | International Atomic Energy Agency, *Suitability Evaluation of Commercial Grade Products for Use in Nuclear Power Plant Safety Systems*, IAEA-TECDOC-2034, 2023, ISBN 978-92-0-153323-4: https://www-pub.iaea.org/MTCD/Publications/PDF/TE-2034web.pdf (retrieved 2026-09-05) | Critical characteristics, traceability, special-process decomposition, inspection, acceptance and manufacturing quality records |
| `iaea-pub2068` | Official guidance (`official_guidance`) | International Atomic Energy Agency, *Project Management in the Construction of Research Reactors*, IAEA Nuclear Energy Series No. NG-T-5.12, 2024: https://www-pub.iaea.org/MTCD/publications/PDF/p15232-PUB2068_web.pdf (retrieved 2026-09-05) | Material certification, fabrication inputs, staged inspection, documented acceptance and manufacturing records |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279 of 15 December 2021, Annex I Product Environmental Footprint Method: https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-09-05) | Company-specific BOM and manufacturing inventory, data collection, allocation hierarchy, data quality and disclosure |
