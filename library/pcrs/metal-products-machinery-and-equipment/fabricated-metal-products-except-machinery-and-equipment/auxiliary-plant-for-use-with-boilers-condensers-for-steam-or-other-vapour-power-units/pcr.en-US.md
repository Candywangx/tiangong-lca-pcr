---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.auxiliary-plant-for-use-with-boilers-condensers-for-steam-or-other-vapour-power-units
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Auxiliary plant for use with boilers; condensers for steam or other vapour power units

## 1. Scope and Applicability

This PCR applies to complete boiler auxiliary plant and complete condensers for steam or other vapour power units supplied at the manufacturer's factory gate. Covered equipment includes economisers, superheaters, soot removers, gas recoverers, steam-turbine condensers, vent-steam condensers, and comparable complete heat-exchange or boiler-support assemblies within the reviewed product boundary. Product-specific pressure, temperature, duty, materials, cooling medium, and conformity requirements must be declared.

The PCR excludes steam or other vapour-generating boilers, central-heating boilers, nuclear reactors, steam turbines, valves, standalone pumps or fans, and separately supplied replacement parts. Installation, commissioning at the customer site, operation, maintenance, retrofit, and end-of-life are outside the default cradle-to-gate boundary. The official CPC structure and HS heading establish the distinction between complete equipment, boilers, and parts (`un-cpc-3-0-2025`, `un-hs-2017-heading-8404`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.auxiliary-plant-for-use-with-boilers-condensers-for-steam-or-other-vapour-power-units |
| classification_refs | CPC 3.0: 42330, exact |
| covered_products | Complete boiler auxiliary plant; complete condensers for steam or other vapour power units |
| excluded_products | Boilers; nuclear reactors; steam turbines; valves; standalone pumps and fans; separately supplied parts; site installation services |
| representative_product | A factory-accepted economiser, superheater, soot-removal or gas-recovery assembly, or a steam-power-unit condenser |
| production_route | Receipt of specified materials and bought-in components; cutting, forming and machining; permanent joining and assembly; conditional cleaning, heat treatment and protective packing; inspection, NDT and required pressure or leak testing |
| market_state | Complete factory-gate equipment, identified by model or project designation, net mass, technical specification and acceptance status; removable transport packaging is reported separately |

The professional Chinese category title follows the official Chinese tariff terms for boiler auxiliary equipment and condensers for steam or other vapour power units (`china-mofcom-hs-8404-nomenclature`).

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of complete boiler auxiliary plant or a complete condenser for a steam or other vapour power unit |
| How much | 1 kg net mass of factory-accepted equipment at the manufacturer's gate |
| How well | Meets the declared purchaser specification, design code or conformity regime, inspection status and factory acceptance criteria |
| How long or cycle | Cradle-to-gate product output; design service life is declared as metadata but does not change the 1 kg normalization |
| reference_flow_link | 1 kg of the reference product output row `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Auxiliary plant for use with boilers, condensers for steam or other vapour power units `44b3e5f4-4272-4369-8001-a48717bf1dfe` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype and equipment designation; project or model; pressure-bearing status; design code and conformity regime; maximum allowable pressure and temperature where applicable; thermal duty; principal material grades; tube material and dimensions where applicable; cooling-medium quality where applicable; manufacturing site and geography; factory-acceptance and test regime; net product mass; removable-packaging exclusion; data period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to the measured net mass of complete factory-accepted equipment. Exclude removable transport packaging from reference product mass and report its inputs separately. |
| `electricity_energy_conversion` | `manufacturing_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity before conversion; convert kWh to MJ using 1 kWh = 3.6 MJ and disclose grid geography, voltage and loss boundary. |
| `gas_volume_conditions` | `natural_gas` and `industrial_oxygen` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the reference temperature and pressure for each gas volume. Do not convert natural-gas volume to energy without a documented net calorific value applicable to the supplied gas. |
| `water_mass_basis` | `process_water` and `hydrostatic_test_wastewater` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass or convert measured volume with a documented density and retain the original volume, density and conditions. |
| `material_mass_reconciliation` | material inputs, reference product and metal scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile received material, net product, returned material, measured scrap and inventory change over the same production order and period; explain unreconciled differences. |

## 5. System Boundary

The default boundary begins when purchased materials, bought-in components, energy carriers, water and process consumables cross the manufacturing-site boundary. It includes material preparation, forming and machining, permanent joining, assembly, conditional cleaning and heat treatment, inspection, NDT, factory pressure or leak testing, and protective packing. It ends with accepted complete equipment at the factory gate. The process sequence and pressure-equipment quality controls are supported by official pressure-equipment and NDT guidance (`uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4`).

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased plates, tubes, welding consumables, bought-in components, gases, energy, water and packaging materials at the manufacturing-site gate, with specification, mass and supplier geography declared |
| starting_condition_role | Upstream product inputs with complete upstream datasets; no unreported embedded production is treated as foreground |
| product_classification_scope | Complete equipment within the CPC 42330 semantic boundary; boilers, turbines and separately supplied parts remain outside this PCR |
| recursive_input_rule | A purchased complete CPC 42330 unit incorporated into a larger deliverable is recorded once as a product input with an upstream dataset and is not recursively decomposed by this foreground process |
| upstream_dataset_requirement | Each purchased material, component, fuel, gas, electricity supply, water supply and packaging input requires a geographically and technologically representative upstream dataset or an explicit data gap |
| disclosure | Declare manufacturing route, outsourced steps, cut-offs, site and period, material grades, product subtype, test route, packaging boundary, allocation drivers and any installation or use stages intentionally added |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include all in-factory preparation, joining, assembly, conditioning, inspection, testing and packing attributable to the accepted product; exclude customer-site installation and use unless separately modelled and disclosed. | `uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment` |
| `boundary_pressure_controls` | pressure-bearing products | Include the actual permanent-joining qualification, NDT, final inspection and pressure or leak-test activities required by the declared design code or conformity regime. | `uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4` |
| `boundary_recursive_equipment` | same-category purchased equipment | Stop recursive foreground tracing at the purchased complete equipment boundary and require a separate upstream dataset for that input. |  |
| `boundary_direct_emissions` | site energy and treatment | Report only direct site emissions in this foreground inventory; keep upstream emissions within the corresponding purchased-input datasets. |  |

## 6. Process Inventory Structure

The integrated process avoids artificial internal intermediates while retaining operation-level records. It covers the common factory route described above; each conditional row is included only when that exact exchange occurs. Steam-condenser type, tube selection and cooling-medium conditions remain product-specific qualifiers (`doosan-steam-condensers-heat-exchangers`).

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `equipment_manufacturing_and_acceptance` | Equipment fabrication, assembly, testing and factory acceptance | `required` | Always required for complete factory-gate equipment; individual route-specific exchanges below remain conditional | foreground production | 1 kg net mass of accepted reference product |

### Process: Equipment fabrication, assembly, testing and factory acceptance (`equipment_manufacturing_and_acceptance`)

#### Inputs

##### Product flows

###### Carbon-steel pressure-equipment plate (`carbon_steel_pressure_plate`)

Record carbon or non-alloy steel plate entering fabrication when it appears in the product bill of materials. Grade, delivery state, dimensions, certification and supplier geography are mandatory qualifiers; the Tiangong UUID remains unresolved because no exact audited candidate was found.

- Selected flow: Carbon-steel pressure-equipment plate
- Flow property / unit: Mass / kg
- Amount rule: measured consumed mass from receiving, issue, return and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `uk-hse-ndt-pressure-equipment`

###### Stainless-steel pressure-equipment plate (`stainless_steel_pressure_plate`)

Record stainless-steel plate only when it appears in the product bill of materials. Alloy grade, delivery state, dimensions, certification and supplier geography are mandatory qualifiers; the Tiangong UUID remains unresolved because no exact audited candidate was found.

- Selected flow: Stainless-steel pressure-equipment plate
- Flow property / unit: Mass / kg
- Amount rule: measured consumed mass from receiving, issue, return and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `uk-hse-ndt-pressure-equipment`

###### Copper tubing for heat-transfer surfaces (`copper_tubing`)

Record copper tubing only for products whose declared tube material is copper or copper alloy. Grade, dimensions, supplier and cooling-medium compatibility are retained with the foreground record.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: measured consumed tube mass from bill-of-material, issue and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `doosan-steam-condensers-heat-exchangers`

###### Purchased electricity (`manufacturing_electricity`)

Record metered electricity attributable to cutting, forming, machining, joining, assembly, ventilation, inspection, testing and packing. Facility overhead is included only through the documented allocation rule.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or allocated purchased electricity converted from retained kWh records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`

###### Industrial oxygen (`industrial_oxygen`)

Record purchased industrial oxygen only when it crosses the foreground boundary for oxy-fuel cutting or another documented manufacturing operation. Do not include oxygen generated inside an upstream supplied-service dataset as a separate input.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-invoiced oxygen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference product for products using purchased oxygen
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`

###### Flux-cored welding wire (`flux_cored_welding_wire`)

Record flux-cored welding wire only when that consumable route is used. Retain classification, alloy, diameter, shielding arrangement, welding procedure and returned or discarded consumable quantities.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: issued mass less unopened returns, reconciled to welding procedure and production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference product for the flux-cored-wire route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment`

###### Natural gas (`natural_gas`)

Record gaseous natural gas only when combusted on site for heat treatment, drying or a documented fuel-gas manufacturing operation. Keep supply geography, composition, net calorific value and reference conditions with the record.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-invoiced volume attributable to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference product for the on-site gas-combustion route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`

###### Process water (`process_water`)

Record water supplied for cleaning, flushing or hydrostatic testing when it crosses the manufacturing boundary. Declare source, quality, reuse, test volume, additives and measurement basis.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water entering cleaning and test operations, net of documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product for water-using operations
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide only when a documented alkaline cleaning bath or solution is used. Report active sodium-hydroxide mass, supplied concentration, make-up and bath-disposal boundary.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active sodium-hydroxide mass calculated from weighed solution and supplier concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net accepted reference product for the alkaline-cleaning route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_and_packaging_records`

###### Kiln-dried sawn coniferous timber (`softwood_packaging`)

Record kiln-dried coniferous sawn timber only when used in a product-specific transport frame, skid or crate delivered with the product. Declare treatment, moisture, reuse and recovery arrangements.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass / kg
- Amount rule: weighed or supplier-documented timber installed in delivered transport packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product when timber packaging is supplied
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`

###### Low-density polyethylene protective film (`ldpe_packaging_film`)

Record low-density polyethylene film only when used to wrap or protect the delivered equipment. Retain thickness, recycled content and supplier information.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: weighed or supplier-documented film applied to delivered equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference product when LDPE film is supplied
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`

##### Waste flows

No waste flow is expected as an input to the integrated manufacturing process.

##### Elementary flows

No elementary flow is expected as an input to the integrated manufacturing process.

#### Outputs

##### Product flows

###### Accepted reference equipment (`reference_product_output`)

The output is the complete accepted item within this PCR boundary. Removable transport packaging is excluded from its net mass even when packaging burdens are included in the foreground process.

- Selected flow: Auxiliary plant for use with boilers, condensers for steam or other vapour power units `44b3e5f4-4272-4369-8001-a48717bf1dfe`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output of 1 kg net accepted equipment
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`

##### Waste flows

###### Steel fabrication scrap (`steel_scrap`)

Record measured ferrous plate, section and machining offcuts leaving the process as scrap. Keep grade segregation, contamination, internal return, external receiver and recycling or treatment route with the record.

- Selected flow: Scrap steel `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- Flow property / unit: Mass / kg
- Amount rule: measured scrap transferred off site after subtracting material returned to stock or reused in the same product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_records`

###### Hydrostatic-test wastewater (`hydrostatic_test_wastewater`)

Record water leaving cleaning, flushing or hydrostatic testing as wastewater only when it is discharged or transferred for treatment. Declare origin, additives, contamination, reuse, destination and treatment route.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured water discharged or transferred after subtracting documented reuse and retained water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product for water-using test or cleaning routes
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`carbon_dioxide_fossil`)

Record only direct fossil carbon dioxide from natural gas combusted inside the foreground site. Exclude upstream gas-supply and purchased-electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated from collected natural-gas volume and a documented site- and period-specific emission factor or carbon balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference product for the on-site gas-combustion route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | product orders and distinguishable operations | Avoid allocation by submetering and assigning material issues, machine records, test records, scrap and packaging directly to the production order. |  |
| `allocation_shared_operations` | shared electricity, gas, water and common operations | When direct assignment is not possible, use a documented physical driver that reflects causation, such as measured machine energy, machine hours, weld length, test volume or net processed mass; do not use revenue unless no defensible physical driver exists. |  |
| `allocation_scrap` | steel scrap | Treat measured scrap as a waste output at the point it leaves the foreground process. Do not credit avoided primary metal in the foreground result; model receiving recycling or treatment separately under the chosen background convention. |  |
| `allocation_packaging` | product-specific timber and film | Assign product-specific packaging directly to the delivered order; allocate shared packaging by measured packaging mass or net packaged product mass. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging_records` | `equipment_manufacturing_and_acceptance` | metal inputs, welding wire, cleaning chemical, timber and LDPE film | receiving tickets, certified material records, bill of materials, stores issues and returns, supplier invoices | production_order; material_code; grade_or_formula; supplied_mass; concentration; issued_mass; returned_mass; packaging_mass; supplier; geography | reconcile certified bill-of-material and stores transactions to the accepted production order | kg and mass fraction | each issue and return; aggregate per accepted order | full manufacturing period for the order | all owned and contracted operations included in the boundary | consumed mass = received or issued mass minus verified return, with concentration conversion where applicable; normalize by accepted net product mass | material certificate, invoice, calibrated scale record, stores ledger and approved bill of materials |
| `cp_energy_and_gas_records` | `equipment_manufacturing_and_acceptance` | electricity, industrial oxygen and natural gas | submeters, utility meters, cylinder or bulk-gas invoices and production logs | timestamp; meter_start; meter_end; unit; production_order; machine_hours; gas_volume; reference_temperature; reference_pressure; grid_or_supplier | direct submetering preferred; otherwise allocate contemporaneous meter totals with the approved physical driver | kWh, MJ and m3 | each shift or batch; monthly utility reconciliation | representative order period, with at least one complete production cycle | manufacturing site and declared contracted operations | subtract unrelated loads, apply documented allocation, convert electricity with 3.6 MJ/kWh and normalize by accepted net product mass | meter calibration, invoices, shift logs and allocation worksheet |
| `cp_water_records` | `equipment_manufacturing_and_acceptance` | process water and hydrostatic-test wastewater | water meters, test sheets, tank-volume records, discharge manifests and reuse logs | source; input_volume_or_mass; test_volume; reused_volume_or_mass; retained_water; discharged_volume_or_mass; density; additives; destination | meter or weigh each fill, reuse and discharge; reconcile water balance by test campaign | kg and m3 | each cleaning or test campaign | full manufacturing and acceptance-test period | all water-using operations in the foreground boundary | convert volume with documented density where needed; input = reuse + discharge + retained water + explained loss; normalize by accepted net product mass | calibrated meter, signed test sheet, discharge record and balance check |
| `cp_output_and_waste_records` | `equipment_manufacturing_and_acceptance` | reference product and steel scrap | final weighing, acceptance certificate, scrap scales, stock-return notes and waste transfer records | production_order; accepted_product_mass; packaging_mass; scrap_mass; returned_to_stock_mass; receiver; treatment_route | weigh accepted equipment without removable packaging and weigh each scrap transfer | kg | each accepted product and scrap transfer | full production order | manufacturing site and included contractors | sum accepted net product and attributable scrap over the same order; normalize all flows to 1 kg product | calibrated scale certificate, acceptance record, scrap ticket and receiver documentation |
| `cp_direct_combustion_records` | `equipment_manufacturing_and_acceptance` | fossil carbon dioxide | natural-gas records, supplier fuel properties, approved factor or carbon-balance worksheet | gas_volume; reference_conditions; net_calorific_value_if_used; carbon_content_or_co2_factor; factor_source; oxidation_assumption; production_order | calculate only direct site CO2 from collected gas consumption and a cited factor applicable to the site and period | kg CO2 and m3 gas | each reporting period containing on-site gas combustion | same period as gas consumption | combustion inside foreground site only | CO2 = attributable gas quantity multiplied by documented applicable factor, then normalized by accepted net product mass | gas meter, supplier specification, factor citation and calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | all inventory rows | normalized amount = attributable order amount / accepted net product mass | attributable flow amount; accepted product mass excluding removable packaging | amount per 1 kg reference product |  |
| `calc_electricity_mj` | `manufacturing_electricity` | electricity_MJ = retained_metered_kWh × 3.6 | metered kWh | MJ electricity |  |
| `calc_active_sodium_hydroxide` | `sodium_hydroxide` | active NaOH mass = supplied solution mass × supplier-certified NaOH mass fraction | solution mass; NaOH mass fraction | kg active sodium hydroxide |  |
| `calc_water_mass` | `process_water`, `hydrostatic_test_wastewater` | water mass = measured volume × documented density at stated conditions | volume; density; temperature | kg water or wastewater |  |
| `calc_direct_fossil_co2` | `carbon_dioxide_fossil` | direct fossil CO2 = attributable natural-gas quantity × documented site- and period-applicable CO2 factor or equivalent carbon balance | natural-gas quantity; factor or carbon content; oxidation assumption | kg direct fossil CO2 |  |
| `calc_material_balance` | metal inputs, product and steel scrap | reconcile consumed metal inputs with net metal in product, measured scrap, stock returns and explained inventory or process losses over one production order | material issues; returns; accepted product BOM; scrap tickets; inventory change | material-balance discrepancy and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare subtype, designation, pressure-bearing status, technical specification, design code, material grades, test status and net mass so the complete-equipment boundary can be reviewed. | accepted drawing list, data sheet, nameplate or conformity record and acceptance certificate |
| `dq_material_traceability` | pressure-boundary materials and permanent joining | Retain material certificates, heat or batch traceability, welding procedure and consumable identity applicable to the manufactured item. | certified material records, weld map, procedure qualification and stores records |
| `dq_measurement` | all measured flows | Use calibrated or verified meters and scales; retain original units and conversion inputs; document estimates and allocation separately from direct measurements. | calibration records, invoices, meter logs and calculation workbook |
| `dq_temporal_scope` | foreground dataset | Cover a complete representative production order or a documented set of orders; align all numerator flows and accepted product mass to the same period. | production schedule, order closeout and temporal reconciliation |
| `dq_completeness` | foreground inventory | Reconcile bill-of-material, energy, water, waste and direct-emission records; identify excluded operations and quantify or justify each cut-off. | completeness checklist, balances and signed exclusion record |
| `dq_outsourced_operations` | contracted fabrication, heat treatment, coating or testing | Include contracted operation inputs and outputs or use a representative upstream service dataset; do not omit them because they occur off site. | purchase order, contractor records and boundary statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference flow | Confirm exactly one 1 kg reference-product output uses the audited CPC 42330 UUID, Mass property and kg unit, and that removable packaging is excluded from net product mass. | `un-cpc-3-0-2025` |
| `validate_identity_qualifiers` | dataset metadata | Fail completeness when product subtype, designation, technical specification, material grades, manufacturing geography, factory-acceptance state or applicable pressure/design qualifiers are missing. | `uk-pressure-equipment-guidance-2025`, `doosan-steam-condensers-heat-exchangers` |
| `validate_atomic_inventory` | process inventory | Confirm each inventory row is one atomic exchange; each conditional row has a documented applicable route; UUID-bearing rows match flow type, property and unit; unresolved plate UUIDs remain explicitly flagged. |  |
| `validate_mass_balance` | metal inputs, product and scrap | Review the order-level material reconciliation and require an explanation for differences exceeding the site's documented measurement uncertainty. |  |
| `validate_energy_water_balance` | electricity, gases and water | Confirm meters, allocation drivers, reference conditions, density conversions, water reuse and normalization all refer to the same production period and accepted output. |  |
| `validate_direct_emissions` | fossil carbon dioxide | Confirm the row includes direct on-site natural-gas combustion only and that the factor or carbon balance is cited and applicable to the foreground site and period. |  |
| `validate_pressure_controls` | pressure-bearing equipment | Confirm required joining qualifications, NDT, final inspection and pressure or leak-test evidence are retained for the declared conformity route. | `uk-pressure-equipment-guidance-2025`, `uk-hse-ndt-pressure-equipment`, `uk-hse-pressure-testing-gs4` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after methodology review and dataset verification |
| downstream_use | Cradle-to-gate process datasets and lifecycle-model inputs for complete CPC 42330 boiler auxiliary plant or steam/vapour power-unit condensers |
| allowed_use | Product- and route-matched equipment with comparable pressure status, design/conformity basis, material system, manufacturing geography, factory-gate condition and packaging boundary |
| excluded_use | Boilers, turbines, valves, standalone pumps or fans, separately supplied parts, customer-site installation, operational performance, maintenance, retrofit and end-of-life without added scenario data |
| required_metadata | PCR id and version; product subtype; model or project; technical specification; pressure/design qualifiers; material grades; net product mass; manufacturing site and period; route and outsourced operations; allocation; data sources; cut-offs; packaging and test boundary |
| required_quality_disclosure | Primary-data share; measurement and allocation methods; unresolved UUIDs; missing two-source ranges; material, energy and water reconciliation; factor citations; representativeness; uncertainty and verification status |
| update_trigger | Material change in product design, mass or grade; manufacturing route, supplier, site, energy mix, test regime, packaging, allocation, applicable conformity requirement, foreground period or background data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official CPC 42330 identity and neighbouring complete-equipment/parts distinction |
| `un-hs-2017-heading-8404` | `official_guidance` | United Nations Statistics Division, HS 2017 heading 8404 detail, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/en/2089/84 (retrieved 2026-09-05) | Boiler-auxiliary examples and steam or other vapour power-unit condenser boundary |
| `china-mofcom-hs-8404-nomenclature` | `official_guidance` | Ministry of Commerce of the People's Republic of China, tariff nomenclature entries 84041010 and 84042000, https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=9727 (retrieved 2026-09-05) | Verification of professional Chinese product terminology |
| `uk-pressure-equipment-guidance-2025` | `official_guidance` | UK Office for Product Safety and Standards, Pressure Equipment (Safety) Regulations 2016: Great Britain, March 2025, https://www.gov.uk/government/publications/pressure-equipment-safety-regulations-2016/pressure-equipment-safety-regulations-2016-great-britain (retrieved 2026-09-05) | Pressure-equipment scope, manufacturer documentation, conformity, permanent joining and NDT controls |
| `uk-hse-ndt-pressure-equipment` | `official_guidance` | UK Health and Safety Executive, Inspection/Non Destructive Testing, https://www.hse.gov.uk/comah/sragtech/techmeasndt.htm (retrieved 2026-09-05) | Forming and chamfering, permanent joints, NDT, final inspection and pressure-test process decomposition |
| `uk-hse-pressure-testing-gs4` | `official_guidance` | UK Health and Safety Executive, Safety requirements for pressure testing, GS4, fourth edition, 2012, https://www.hse.gov.uk/pubns/gs4.htm (retrieved 2026-09-05) | Factory pressure-testing boundary and test-record quality requirements |
| `doosan-steam-condensers-heat-exchangers` | `handbook` | Doosan Enerbility, Turbine and Generator Technologies — Condensers and heat exchangers, https://www.doosanenerbility.com/heavy_file/business/data/fire_power/Doosan_STG_Brochure.pdf (retrieved 2026-09-05) | Steam-condenser variants, tube-material/cooling-water qualifiers and pressure-equipment design-code disclosure |
