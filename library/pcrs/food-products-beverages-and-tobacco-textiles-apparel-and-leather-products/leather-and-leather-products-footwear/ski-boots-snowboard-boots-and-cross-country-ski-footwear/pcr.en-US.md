---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.ski-boots-snowboard-boots-and-cross-country-ski-footwear
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ski-boots, snowboard boots and cross-country ski footwear

## 1. Scope and Applicability

This PCR applies to factory-gate production of ski-boots, snowboard boots, and cross-country ski footwear classified in CPC 3.0 subclass 29410. It covers hard-shell and soft-upper constructions and requires the producer to declare the footwear subtype and the actual component route.

The foreground boundary begins with received resins, foam sheets or components, textile or leather materials, closure hardware, adhesives, chemicals, utilities, refrigerant servicing attributable to production, and sale-packaging materials. It ends with accepted finished footwear at the manufacturing facility gate. Upstream raw-material production and downstream distribution, use, repair, and end of life require separate datasets.

Every process inventory card is one atomic exchange. Conditional materials, technologies, fuels, chemicals, refrigerants, and emissions are recorded only when they occur and are supported by foreground records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.ski-boots-snowboard-boots-and-cross-country-ski-footwear |
| classification_refs | CPC 3.0: 29410, exact |
| covered_products | Alpine ski-boots; snowboard boots; cross-country ski footwear; hard-shell and soft-upper models within CPC 29410 |
| excluded_products | Skating boots; general sports shoes; ordinary walking or hiking footwear; upstream material production; distribution, use, repair, and end of life |
| representative_product | A conforming ski-boot, snowboard boot, or cross-country ski footwear model identified by size, pair or single-article convention, net mass, construction, principal materials, sole system, closure, and intended ski discipline |
| production_route | Component moulding or cutting; upper and liner fabrication; stockfitting and final assembly; final inspection and sale packaging |
| market_state | Accepted finished footwear at the manufacturing facility gate, with sale-packaging inclusion declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide conforming ski-boots, snowboard boots, or cross-country ski footwear at the manufacturing facility gate. |
| How much | 1 kg accepted net finished footwear mass. |
| How well | Meets the declared model specification for subtype, size, construction, sole-binding interface where relevant, closure, flex or stiffness, materials, and quality acceptance. |
| How long or cycle | One completed production output event; use-stage lifetime is outside this gate-to-gate reference. |
| reference_flow_link | The functional unit is realized by the verified CPC 29410 product flow normalized to 1 kg accepted output. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Ski-boots, snowboard boots and cross-country ski footwear `6e39a9ed-f49c-4ddc-8869-7d4c47551bbf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | footwear subtype; intended ski discipline; pair or single-article reporting convention; reference size and size mix; net finished mass; shell and cuff material; upper and liner construction; outsole and midsole system; closure and buckle system; adhesive and solvent route; component-moulding and cooling route; facility and country; production period; accepted quantity; sale-packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and material exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize inventory to 1 kg accepted net finished footwear mass; record sale packaging separately and do not include it in net footwear mass. |
| `pair_single_conversion` | Product and component records reported by pair or item | Mass | kg | Declare whether counts refer to a pair or one article, convert using product-specific measured average mass, and retain the count and sampling record. |
| `component_count_to_mass` | Eyelets, buckles, outsoles, midsoles, labels, cartons, and other count records | Mass | kg | Convert counts with measured or supplier-specified unit mass and retain the component specification and sample basis. |
| `utility_energy_measurement` | Electricity, purchased steam, hot water, and natural gas | Energy or mass as stated | kWh; MJ; kg | Preserve original meter units, conversion factors, temperatures, pressure or calorific basis, and allocation denominator; never combine energy carriers. |
| `refrigerant_mass_measurement` | R134a replenishment and release | Mass | kg | Use equipment-specific service records and close the refrigerant mass balance before reporting a release. |
| `reference_output_reconciliation` | Accepted output, rejects, rework, and work in progress | Mass | kg | Reconcile accepted finished mass for the declared period and disclose rework and inventory change. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received resins, sheets, panels, leather, hardware, chemicals, components, packaging, utilities, and attributable refrigerant service records, with identity, quantity, supplier geography when available, and opening stock declared. |
| starting_condition_role | Gate-to-gate foreground starting condition for CPC 29410 footwear manufacture. |
| product_classification_scope | CPC 3.0 subclass 29410 only, with ski-boot, snowboard-boot, or cross-country-ski-footwear subtype declared. |
| recursive_input_rule | If an input is already finished CPC 29410 footwear, record it once as a purchased product input with supplier dataset and do not recursively reproduce its foreground manufacture. |
| upstream_dataset_requirement | Every received material, component, chemical, utility, refrigerant, and packaging input requires a geographically and technologically representative upstream dataset or a disclosed unresolved data gap. |
| disclosure | Declare product subtype, pair or single convention, model and size, construction route, conditional steps, facility geography, production period, meter and stock boundaries, allocation, rework, waste destinations, direct-emission basis, and packaging inclusion. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_model | Include component moulding or cutting, upper and liner fabrication, stockfitting and final assembly, final inspection, and sale packaging performed for the declared product; keep upstream material manufacture and downstream distribution, use, and end of life outside this foreground boundary. | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `boundary_product_route` | all_product_subtypes | Declare ski-boot, snowboard-boot, or cross-country-ski-footwear subtype and record only the hard-shell, soft-upper, liner, outsole, closure, and curing routes that actually occur. | `afw-pefcr-v3-1-2025` |
| `boundary_atomic_inventory` | all_foreground_processes | Record each material, component, adhesive, chemical, energy carrier, refrigerant, packaging material, waste stream, and direct emission as a separate exchange. | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `boundary_step_losses` | manufacturing_steps | Reconcile material inputs, accepted transfers, rejects, offcuts, residues, rework, and stock change at each manufacturing step; do not substitute an uncited default loss percentage. | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `boundary_direct_releases` | combustion_solvent_and_refrigerant_sources | Record air, water, or soil releases only from monitoring, verified mass balance, or an approved facility emissions ledger and identify the receiving compartment. | `eu-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_manufacturing_and_cutting` | Component moulding, cutting, and preparation | `required` | Record the actual hard-shell, sole, foam, textile, or leather component routes used for the declared footwear. | Foreground component manufacture and preparation | kg accepted component output |
| `upper_liner_fabrication` | Upper, liner, and closure fabrication | `required` | Include sewing, eyelet or webbing installation, and bonding only when used by the declared construction. | Foreground upper and liner fabrication | kg accepted upper-and-liner assembly |
| `stockfitting_and_final_assembly` | Stockfitting and final assembly | `required` | Record the actual outsole, midsole, shell, buckle, adhesive, and assembly route for the footwear subtype. | Foreground footwear consolidation and final assembly | kg accepted assembled footwear |
| `inspection_and_sale_packaging` | Final inspection and sale packaging | `required` | Inspection is required; each packaging card applies only when that material leaves the facility with the product. | Foreground completion and packaging | 1 kg accepted reference product |

### Process: Component moulding, cutting, and preparation (`component_manufacturing_and_cutting`)

#### Inputs

##### Product flows

###### Thermoplastic polyurethane granulate（`thermoplastic_polyurethane_granulate_input`）

Record Thermoplastic polyurethane granulate as one separate exchange when the declared route moulds a thermoplastic polyurethane shell, cuff, or structural part. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Thermoplastic polyurethane granulate
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass from batch issue, return, receipt, and closing-stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Ethylene-vinyl acetate foam sheet（`eva_foam_sheet_input`）

Record Ethylene-vinyl acetate foam sheet as one separate exchange when the declared liner, padding, or midsole route uses EVA foam sheet. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Ethylene-vinyl acetate foam sheet
- Flow property / unit: Mass / kg
- Amount rule: Net issued sheet mass from batch material and stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polyester woven fabric（`polyester_woven_fabric_input`）

Record Polyester woven fabric as one separate exchange when the snowboard-boot or cross-country-ski footwear upper or liner uses woven polyester. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Polyester woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Net issued fabric mass from roll issue, return, and stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Finished bovine leather（`finished_bovine_leather_input`）

Record Finished bovine leather as one separate exchange when the declared footwear upper or reinforcement uses finished bovine leather. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Finished bovine leather
- Flow property / unit: Mass / kg
- Amount rule: Net issued leather mass from hide or sheet issue, return, and stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Electricity for component manufacturing（`electricity_component_manufacturing_input`）

Record Electricity as one separate exchange when moulding, cutting, skiving, milling, pressing, or local extraction equipment uses electricity. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated allocation from a component-area submeter
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_component_utility_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Purchased steam for component heating（`purchased_steam_component_heating_input`）

Record Purchased steam as one separate exchange when purchased steam supplies heat to an in-scope forming or conditioning operation. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Supplier-metered steam mass converted using documented pressure and enthalpy
- Value mode: Calculated value（`calculated_value`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_component_utility_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Hot water for component heating（`hot_water_component_heating_input`）

Record Hot water as one separate exchange when hot water crosses the component-process boundary as a supplied heat-transfer medium. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Hot water
- Flow property / unit: Mass / kg
- Amount rule: Metered hot-water mass with supply and return temperatures retained
- Value mode: Foreground record（`foreground_record`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_utility_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Natural gas for component heating（`natural_gas_component_heating_input`）

Record Natural gas as one separate exchange when an on-site heater or oven combusts natural gas for moulding or conditioning. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas use allocated from the documented heater or production-area meter
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_component_utility_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### R134a refrigerant replenishment（`r134a_refrigerant_replenishment_input`）

Record 1,1,1,2-Tetrafluoroethane as one separate exchange when component cooling equipment uses R134a and receives refrigerant during the reporting period. The amount is obtained from the stated foreground record or calculation.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: Measured maintenance recharge assigned to the component cooling equipment and reporting period
- Value mode: Foreground record（`foreground_record`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_refrigerant_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Moulded thermoplastic polyurethane shell component（`moulded_tpu_shell_component_output`）

Record Moulded thermoplastic polyurethane ski-boot shell component as one accepted product transfer when a hard-shell ski-boot route produces accepted shell or cuff components. The amount is obtained from the stated foreground record.

- Selected flow: Moulded thermoplastic polyurethane ski-boot shell component
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass of moulded shell components
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Cut EVA foam liner component（`cut_eva_liner_component_output`）

Record Cut ethylene-vinyl acetate foam liner component as one accepted product transfer when EVA foam is cut for a liner, tongue, padding, or midsole component. The amount is obtained from the stated foreground record.

- Selected flow: Cut ethylene-vinyl acetate foam liner component
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass of cut EVA foam liner components
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Cut polyester upper panel（`cut_polyester_upper_panel_output`）

Record Cut polyester woven footwear upper panel as one accepted product transfer when woven polyester is cut into footwear upper or liner panels. The amount is obtained from the stated foreground record.

- Selected flow: Cut polyester woven footwear upper panel
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass of cut polyester upper panels
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Cut bovine-leather upper panel（`cut_leather_upper_panel_output`）

Record Cut bovine-leather footwear upper panel as one accepted product transfer when finished bovine leather is cut into upper or reinforcement panels. The amount is obtained from the stated foreground record.

- Selected flow: Cut bovine-leather footwear upper panel
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass of cut leather upper panels
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

###### TPU moulding scrap（`tpu_moulding_scrap_output`）

Record Thermoplastic polyurethane moulding scrap separately when TPU moulding generates material leaving the process as waste. Retain its measured mass, composition, and treatment destination.

- Selected flow: Thermoplastic polyurethane moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed sprue, runner, purge, and rejected-part mass not internally returned to the same batch
- Value mode: Foreground record（`foreground_record`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### EVA foam offcut（`eva_foam_offcut_output`）

Record Ethylene-vinyl acetate foam cutting offcut separately when EVA foam cutting produces segregated offcuts. Retain its measured mass, composition, and treatment destination.

- Selected flow: Ethylene-vinyl acetate foam cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Weighed EVA foam offcut mass from cutting records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polyester fabric offcut（`polyester_fabric_offcut_output`）

Record Polyester woven fabric cutting offcut separately when polyester panel cutting produces segregated textile offcuts. Retain its measured mass, composition, and treatment destination.

- Selected flow: Polyester woven fabric cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Weighed polyester fabric offcut mass from cutting records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Bovine-leather offcut（`bovine_leather_offcut_output`）

Record Finished bovine-leather cutting offcut separately when leather cutting produces segregated offcuts. Retain its measured mass, composition, and treatment destination.

- Selected flow: Finished bovine-leather cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Weighed bovine-leather offcut mass from cutting records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_component_material_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### Elementary flows

###### Fossil carbon dioxide from component heat（`fossil_co2_component_heat_output`）

Record Carbon dioxide, fossil, to air only when natural gas is combusted inside this process boundary and a verified emission record exists. Do not infer the release solely from the presence of an input.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Process-attributed mass from monitoring or a verified facility emissions ledger
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_direct_emissions_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Nitrogen oxides from component heat（`nitrogen_oxides_component_heat_output`）

Record Nitrogen oxides to air only when on-site component heating has pollutant-specific monitoring or permit data. Do not infer the release solely from the presence of an input.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Process-attributed mass from monitoring or a verified facility emissions ledger
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_direct_emissions_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### R134a released to air（`r134a_to_air_output`）

Record 1,1,1,2-Tetrafluoroethane to air only when R134a equipment has measured recharge, recovery, opening charge, and closing charge records. Do not infer the release solely from the presence of an input.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Verified refrigerant mass balance for the affected equipment and reporting period
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted component output
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_refrigerant_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

### Process: Upper, liner, and closure fabrication (`upper_liner_fabrication`)

#### Inputs

##### Product flows

###### Cut EVA foam liner component（`cut_eva_liner_component_input`）

Record Cut ethylene-vinyl acetate foam liner component as one separate exchange when the declared construction uses a cut EVA liner, tongue, or padding component. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Cut ethylene-vinyl acetate foam liner component
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass received by upper and liner fabrication
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Cut polyester upper panel（`cut_polyester_upper_panel_input`）

Record Cut polyester woven footwear upper panel as one separate exchange when the declared upper or liner uses cut polyester panels. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Cut polyester woven footwear upper panel
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass received by upper and liner fabrication
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Cut bovine-leather upper panel（`cut_leather_upper_panel_input`）

Record Cut bovine-leather footwear upper panel as one separate exchange when the declared upper or reinforcement uses cut bovine-leather panels. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Cut bovine-leather footwear upper panel
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass received by upper and liner fabrication
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyester sewing thread（`polyester_sewing_thread_input`）

Record Polyester sewing thread as one separate exchange when polyester thread is used for the declared stitching construction. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Net issued thread mass from cone issue, return, and closing-stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polyester closure webbing（`polyester_webbing_input`）

Record Polyester woven webbing as one separate exchange when polyester webbing forms a closure, pull loop, strap, or reinforcement. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Polyester woven webbing
- Flow property / unit: Mass / kg
- Amount rule: Net issued webbing mass from roll issue, return, and closing-stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Stainless steel eyelet（`stainless_steel_eyelet_input`）

Record Stainless steel footwear eyelet as one separate exchange when the declared closure system uses stainless steel eyelets. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Stainless steel footwear eyelet
- Flow property / unit: Mass / kg
- Amount rule: Issued eyelet count multiplied by measured or supplier-specified unit mass, less returns
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polyurethane adhesive for upper fabrication（`polyurethane_adhesive_upper_input`）

Record Polyurethane footwear adhesive as one separate exchange when the upper or liner route uses polyurethane adhesive. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Net issued adhesive mass from container issue, return, and closing-stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_chemical_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Ethyl acetate for upper fabrication（`ethyl_acetate_upper_input`）

Record Ethyl acetate as one separate exchange when ethyl acetate is documented as a process solvent or cleaning chemical. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Ethyl acetate
- Flow property / unit: Mass / kg
- Amount rule: Net issued ethyl-acetate mass from container issue, return, and closing-stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_chemical_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Electricity for upper and liner fabrication（`electricity_upper_liner_input`）

Record Electricity as one separate exchange when sewing, skiving, eyelet setting, adhesive application, ventilation, or handling uses electricity. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated allocation from an upper-line submeter
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_upper_liner_utility_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared ski-footwear upper and liner assembly（`prepared_upper_liner_output`）

Record Prepared ski-footwear upper and liner assembly as one accepted product transfer when the upper and liner pass the declared in-process quality gate. The amount is obtained from the stated foreground record.

- Selected flow: Prepared ski-footwear upper and liner assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass to final assembly
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

###### Polyester sewing-thread waste（`polyester_sewing_thread_waste_output`）

Record Waste polyester sewing thread separately when thread waste leaves the upper-line process. Retain its measured mass, composition, and treatment destination.

- Selected flow: Waste polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Weighed thread ends, damaged thread, and unrecoverable cone residue
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polyester webbing offcut（`polyester_webbing_offcut_output`）

Record Polyester woven webbing offcut separately when closure-webbing cutting produces segregated offcuts. Retain its measured mass, composition, and treatment destination.

- Selected flow: Polyester woven webbing offcut
- Flow property / unit: Mass / kg
- Amount rule: Weighed webbing cut-end and rejected-piece mass
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Stainless steel eyelet scrap（`stainless_steel_eyelet_scrap_output`）

Record Stainless steel footwear eyelet scrap separately when damaged or surplus eyelets leave the process as segregated metal scrap. Retain its measured mass, composition, and treatment destination.

- Selected flow: Stainless steel footwear eyelet scrap
- Flow property / unit: Mass / kg
- Amount rule: Rejected eyelet count multiplied by unit mass or directly weighed scrap mass
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polyurethane adhesive waste from upper fabrication（`polyurethane_adhesive_waste_upper_output`）

Record Waste polyurethane footwear adhesive separately when polyurethane adhesive residue leaves the upper-line boundary. Retain its measured mass, composition, and treatment destination.

- Selected flow: Waste polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Weighed unused, expired, spilled, or cured adhesive transferred to waste management
- Value mode: Foreground record（`foreground_record`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_chemical_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Ethyl-acetate-contaminated cleaning wipe（`ethyl_acetate_contaminated_wipe_output`）

Record Ethyl-acetate-contaminated cleaning wipe separately when ethyl-acetate cleaning generates solvent-bearing solid waste. Retain its measured mass, composition, and treatment destination.

- Selected flow: Ethyl-acetate-contaminated cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Weighed contaminated wipes transferred from the process to waste storage
- Value mode: Foreground record（`foreground_record`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_chemical_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Rejected upper and liner assembly（`rejected_upper_liner_output`）

Record Rejected ski-footwear upper and liner assembly separately when a rejected upper or liner leaves work in progress. Retain its measured mass, composition, and treatment destination.

- Selected flow: Rejected ski-footwear upper and liner assembly
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected assembly mass not returned for rework
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_upper_liner_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### Elementary flows

###### Ethyl acetate released to air（`ethyl_acetate_to_air_output`）

Record Ethyl acetate to air only when the facility has monitoring or a verified ethyl-acetate mass balance. Do not infer the release solely from the presence of an input.

- Selected flow: Ethyl acetate to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or verified solvent-balance loss attributed to the upper-line batch
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted upper-and-liner assembly
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_direct_emissions_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

### Process: Stockfitting and final assembly (`stockfitting_and_final_assembly`)

#### Inputs

##### Product flows

###### Prepared ski-footwear upper and liner assembly（`prepared_upper_liner_input`）

Record Prepared ski-footwear upper and liner assembly as one separate exchange when the accepted upper-and-liner assembly enters stockfitting or final assembly. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Prepared ski-footwear upper and liner assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass received by final assembly
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Moulded thermoplastic polyurethane shell component（`moulded_tpu_shell_component_input`）

Record Moulded thermoplastic polyurethane ski-boot shell component as one separate exchange when a hard-shell ski-boot route uses moulded TPU shell or cuff components. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Moulded thermoplastic polyurethane ski-boot shell component
- Flow property / unit: Mass / kg
- Amount rule: Measured shell and cuff component mass received by final assembly
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Synthetic rubber outsole（`synthetic_rubber_outsole_input`）

Record Synthetic rubber ski-footwear outsole as one separate exchange when the declared footwear uses a synthetic-rubber outsole. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Synthetic rubber ski-footwear outsole
- Flow property / unit: Mass / kg
- Amount rule: Net issued outsole mass from count and unit-mass or direct weighment records
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### EVA midsole component（`eva_midsole_component_input`）

Record Ethylene-vinyl acetate ski-footwear midsole component as one separate exchange when the declared construction uses an EVA midsole component. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Ethylene-vinyl acetate ski-footwear midsole component
- Flow property / unit: Mass / kg
- Amount rule: Net issued midsole mass from count and unit-mass or direct weighment records
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Stainless steel buckle（`stainless_steel_buckle_input`）

Record Stainless steel ski-boot buckle as one separate exchange when the declared closure system uses a stainless steel buckle. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Stainless steel ski-boot buckle
- Flow property / unit: Mass / kg
- Amount rule: Issued buckle count multiplied by measured or supplier-specified unit mass, less returns
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polyurethane adhesive for final assembly（`polyurethane_adhesive_assembly_input`）

Record Polyurethane footwear adhesive as one separate exchange when stockfitting or final assembly uses polyurethane adhesive. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Net issued adhesive mass from container issue, return, and closing-stock records
- Value mode: Foreground record（`foreground_record`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_final_assembly_chemical_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Electricity for final assembly（`electricity_final_assembly_input`）

Record Electricity as one separate exchange when pressing, stockfitting, fastening, curing, testing, ventilation, or handling uses electricity. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated allocation from a final-assembly submeter
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_final_assembly_utility_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Natural gas for final-assembly heating（`natural_gas_final_assembly_input`）

Record Natural gas as one separate exchange when an on-site press heater or curing oven combusts natural gas. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas use allocated from the documented press, oven, or area meter
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_final_assembly_utility_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled ski footwear before packaging（`assembled_ski_footwear_output`）

Record Assembled ski footwear before packaging as one accepted product transfer when the completed footwear passes the declared assembly quality gate. The amount is obtained from the stated foreground record.

- Selected flow: Assembled ski footwear before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass to final inspection
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

###### Synthetic rubber outsole trim waste（`synthetic_rubber_trim_waste_output`）

Record Synthetic rubber outsole trimming waste separately when outsole fitting or trimming generates segregated rubber waste. Retain its measured mass, composition, and treatment destination.

- Selected flow: Synthetic rubber outsole trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed outsole trimming and rejected rubber-piece mass
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polyurethane adhesive waste from final assembly（`polyurethane_adhesive_waste_assembly_output`）

Record Waste polyurethane footwear adhesive separately when polyurethane adhesive residue leaves the final-assembly boundary. Retain its measured mass, composition, and treatment destination.

- Selected flow: Waste polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Weighed unused, expired, spilled, or cured adhesive transferred to waste management
- Value mode: Foreground record（`foreground_record`）
- Specificity: Technology-specific（`technology_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_final_assembly_chemical_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Stainless steel buckle scrap（`stainless_steel_buckle_scrap_output`）

Record Stainless steel ski-boot buckle scrap separately when damaged or surplus buckles leave final assembly as segregated metal scrap. Retain its measured mass, composition, and treatment destination.

- Selected flow: Stainless steel ski-boot buckle scrap
- Flow property / unit: Mass / kg
- Amount rule: Rejected buckle count multiplied by unit mass or directly weighed scrap mass
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Rejected assembled ski footwear（`rejected_footwear_assembly_output`）

Record Rejected assembled ski footwear separately when a rejected boot or shoe leaves work in progress. Retain its measured mass, composition, and treatment destination.

- Selected flow: Rejected assembled ski footwear
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected assembly mass not returned for rework
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_final_assembly_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### Elementary flows

###### Fossil carbon dioxide from assembly heat（`fossil_co2_assembly_heat_output`）

Record Carbon dioxide, fossil, to air only when natural gas is combusted inside final assembly and a verified emission record exists. Do not infer the release solely from the presence of an input.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Process-attributed mass from monitoring or a verified facility emissions ledger
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_direct_emissions_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Nitrogen oxides from assembly heat（`nitrogen_oxides_assembly_heat_output`）

Record Nitrogen oxides to air only when on-site final-assembly heating has pollutant-specific monitoring or permit data. Do not infer the release solely from the presence of an input.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Process-attributed mass from monitoring or a verified facility emissions ledger
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted assembled footwear
- Basis kind: Process output（`process_output`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_direct_emissions_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

### Process: Final inspection and sale packaging (`inspection_and_sale_packaging`)

#### Inputs

##### Product flows

###### Assembled ski footwear before packaging（`assembled_ski_footwear_input`）

Record Assembled ski footwear before packaging as one separate exchange when accepted assembled footwear enters final inspection and packing. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Assembled ski footwear before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass entering final inspection
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity for inspection and packaging（`electricity_inspection_packaging_input`）

Record Electricity as one separate exchange when inspection, testing, labelling, sealing, or handling equipment uses electricity. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or calculated allocation from a finishing-area submeter
- Value mode: Calculated value（`calculated_value`）
- Specificity: Site-specific（`site_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_packaging_utility_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Paper wrapping tissue（`paper_tissue_input`）

Record Paper wrapping tissue as one separate exchange when paper tissue leaves the facility around or inside the declared product package. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Paper wrapping tissue
- Flow property / unit: Mass / kg
- Amount rule: Issued sheet count multiplied by measured or supplier-specified unit mass, less returns
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Corrugated fibreboard footwear carton（`corrugated_carton_input`）

Record Corrugated fibreboard footwear carton as one separate exchange when the sale or shipping carton leaves the facility with the declared footwear. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Corrugated fibreboard footwear carton
- Flow property / unit: Mass / kg
- Amount rule: Issued carton count multiplied by measured or supplier-specified unit mass, allocated to accepted product
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Paper product label（`paper_label_input`）

Record Paper product label as one separate exchange when a paper product label or hangtag leaves the facility with the footwear. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Paper product label
- Flow property / unit: Mass / kg
- Amount rule: Issued label count multiplied by measured or supplier-specified unit mass, less returns
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polypropylene adhesive tape（`polypropylene_tape_input`）

Record Polypropylene adhesive tape as one separate exchange when polypropylene tape seals the declared carton or sale package. The amount is obtained from the stated foreground record or calculation.

- Selected flow: Polypropylene adhesive tape
- Flow property / unit: Mass / kg
- Amount rule: Measured roll-mass consumption or issued length multiplied by product-specific mass per length
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted ski-boots, snowboard boots and cross-country ski footwear（`accepted_reference_product_output`）

Record Ski-boots, snowboard boots and cross-country ski footwear as one accepted product transfer when the accepted factory-gate product realizes the reference flow. The amount is obtained from the stated foreground record.

- Selected flow: Ski-boots, snowboard boots and cross-country ski footwear `6e39a9ed-f49c-4ddc-8869-7d4c47551bbf`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg accepted net finished footwear mass
- Value mode: Fixed value（`fixed_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Identity reference（`identity_reference`）
- Sources: `unsd-cpc-3-0-29410`

##### Waste flows

###### Rejected finished ski footwear（`rejected_finished_ski_footwear_output`）

Record Rejected finished ski footwear separately when a finished reject leaves work in progress after final inspection. Retain its measured mass, composition, and treatment destination.

- Selected flow: Rejected finished ski footwear
- Flow property / unit: Mass / kg
- Amount rule: Weighed final-inspection reject mass not returned for rework
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Paper wrapping-tissue scrap（`paper_tissue_scrap_output`）

Record Paper wrapping-tissue scrap separately when paper tissue is damaged, trimmed, or unused during packing. Retain its measured mass, composition, and treatment destination.

- Selected flow: Paper wrapping-tissue scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed damaged, trimmed, or unused tissue transferred to waste management
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Corrugated fibreboard carton scrap（`corrugated_carton_scrap_output`）

Record Corrugated fibreboard carton scrap separately when a rejected or damaged carton leaves the packaging process. Retain its measured mass, composition, and treatment destination.

- Selected flow: Corrugated fibreboard carton scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected or damaged carton mass
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Paper label scrap（`paper_label_scrap_output`）

Record Paper product-label scrap separately when rejected or surplus paper labels leave the process. Retain its measured mass, composition, and treatment destination.

- Selected flow: Paper product-label scrap
- Flow property / unit: Mass / kg
- Amount rule: Rejected label count multiplied by unit mass or directly weighed scrap mass
- Value mode: Calculated value（`calculated_value`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Calculated from collection（`calculated_from_collection`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### Polypropylene adhesive-tape scrap（`polypropylene_tape_scrap_output`）

Record Polypropylene adhesive-tape scrap separately when discarded tape or roll ends leave the packaging process. Retain its measured mass, composition, and treatment destination.

- Selected flow: Polypropylene adhesive-tape scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded tape and unusable roll-end mass
- Value mode: Foreground record（`foreground_record`）
- Specificity: Product-specific（`product_specific`）
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow（`reference_flow`）
- Evidence kind: Collected record（`collected_record`）
- Collection protocol: `cp_packaging_batch_records`
- Sources: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_measured` | shared_foreground_processes | Prefer subdivision, submetering, batch records, and direct mass tracing before allocation. | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `allocation_materials_by_batch` | materials_components_chemicals_packaging | Assign net issues directly to the declared product batch; where direct assignment is impossible, use a documented causal driver and disclose the share. | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `allocation_energy_by_carrier` | electricity_steam_hot_water_and_fuel | Allocate every energy carrier separately using submeter readings, measured equipment demand and operating time, or another documented causal driver; never allocate a combined energy total. | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `allocation_refrigerant` | r134a_equipment | Allocate refrigerant replenishment and release to the serviced equipment and production period before normalizing to accepted component output. | `eu-recommendation-2021-2279` |
| `allocation_waste_and_emissions` | waste_and_direct_releases | Segregate waste and pollutants by material or substance before allocation; use measured batch mass, verified solvent or refrigerant balance, or the generating process driver. | `eu-recommendation-2021-2279` |
| `allocation_no_avoided_credit` | waste_sent_to_recovery | Report physical waste output and destination without subtracting avoided-product credit inside this gate-to-gate foreground dataset. | `afw-pefcr-v3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_material_records` | `component_manufacturing_and_cutting` | Component materials, accepted components, and segregated offcuts | BOM, issue, return, stock, weighment, transfer, and waste records | batch_id; model; size; material_id; specification; opening_stock; receipts; issued_mass; returned_mass; closing_stock; accepted_transfer_mass; offcut_mass; waste_destination | Reconcile net material issues and weigh every accepted component and segregated waste stream | kg | Each batch; summarized monthly | Representative production period, normally 12 months or the full shorter run | All component suppliers and in-scope component operations | Sum each atomic material, transfer, and waste by batch; normalize to accepted component output | Approved BOM; calibrated scales; stock reconciliation; transfer note; waste ticket |
| `cp_component_utility_records` | `component_manufacturing_and_cutting` | Electricity, purchased steam, hot water, and natural gas | Utility meters, invoices, temperature and pressure logs, and equipment records | meter_id; carrier; opening_reading; closing_reading; unit; pressure; supply_temperature; return_temperature; enthalpy; equipment_id; operating_time; accepted_output_mass | Use dedicated meters where available; otherwise allocate a documented submeter total using measured equipment demand and operating time | kWh; MJ; kg | Meter interval and each batch | Same period as component output | Component moulding, cutting, conditioning, and extraction equipment only | Keep every carrier separate; convert with documented factors and normalize to accepted output | Meter calibration; invoice reconciliation; equipment log; conversion worksheet |
| `cp_refrigerant_records` | `component_manufacturing_and_cutting` | R134a replenishment and release | Equipment register and refrigerant service records | equipment_id; refrigerant; opening_charge; recharge_mass; recovered_mass; closing_charge; disposal_mass; service_date; production_period; accepted_output_mass | Reconcile equipment-level refrigerant mass balance from certified service records | kg | Every service event and annual close | Same period as component production | Cooling equipment serving in-scope operations | Allocate verified loss to serviced equipment and period; normalize to accepted component output | Service certificate; cylinder weighment; leak-test record; equipment register |
| `cp_upper_liner_batch_records` | `upper_liner_fabrication` | Panels, foam, thread, webbing, eyelets, accepted assembly, and solid wastes | BOM, issue, return, count, unit-mass, stock, transfer, quality, and waste records | batch_id; model; size; component_id; issued_mass_or_count; unit_mass; returned_mass_or_count; closing_stock; accepted_output_mass; reject_mass; waste_mass; destination | Reconcile net issues, convert counts with measured unit mass, and weigh accepted and rejected outputs | kg; count | Each batch; summarized monthly | Representative production period | All upper and liner lines in scope | Sum each atomic exchange by batch and normalize to accepted upper-and-liner output | BOM; calibrated scales; count-to-mass sample; inspection disposition; waste ticket |
| `cp_upper_liner_chemical_records` | `upper_liner_fabrication` | Polyurethane adhesive, ethyl acetate, and chemical wastes | SDS, formulation, container issue, return, stock, wipe, spill, and waste records | batch_id; chemical_id; formulation; purity_or_solids; opening_stock; receipts; issued_mass; returned_mass; closing_stock; waste_mass; retained_solvent; destination | Reconcile each chemical independently and weigh each chemical-bearing waste stream | kg | Each formulation or production batch | Same period as upper and liner production | Adhesive application, cleaning, curing, and local storage in scope | Calculate net issue and chemical-specific waste separately; normalize to accepted output | Approved SDS; container weights; stock reconciliation; hazardous-waste manifest |
| `cp_upper_liner_utility_records` | `upper_liner_fabrication` | Upper and liner electricity | Electricity submeter and equipment operating records | meter_id; opening_reading; closing_reading; machine_id; measured_demand; operating_time; batch_id; accepted_output_mass | Use submeter readings or allocate measured line electricity using equipment time and demand | kWh | Meter interval and each batch | Same period as upper and liner production | Sewing, skiving, eyelet setting, adhesive, ventilation, and handling equipment | Subtract documented non-production load and normalize causal allocation to accepted output | Meter calibration; machine log; allocation worksheet |
| `cp_final_assembly_batch_records` | `stockfitting_and_final_assembly` | Uppers, shells, outsoles, midsoles, buckles, accepted footwear, and solid wastes | BOM, issue, return, count, unit-mass, transfer, inspection, rework, and waste records | batch_id; model; size; component_id; issued_mass_or_count; unit_mass; returned_quantity; accepted_output_mass; reject_mass; rework_mass; waste_mass; destination | Reconcile each component, convert counts using unit mass, and weigh accepted, rejected, and reworked footwear | kg; count | Each batch; summarized monthly | Representative production period | All stockfitting and final assembly lines in scope | Sum each atomic exchange by batch and normalize to accepted assembled footwear | BOM; calibrated scales; component sample weights; quality disposition; waste ticket |
| `cp_final_assembly_chemical_records` | `stockfitting_and_final_assembly` | Polyurethane adhesive and adhesive waste | SDS, formulation, container issue, return, stock, spill, and waste records | batch_id; chemical_id; formulation; solids; opening_stock; receipts; issued_mass; returned_mass; closing_stock; waste_mass; destination | Reconcile adhesive independently and weigh liquid and cured waste | kg | Each production batch | Same period as final assembly | Adhesive application, curing, and local storage in scope | Calculate net adhesive issue and waste separately; normalize to accepted output | Approved SDS; container weights; stock reconciliation; waste manifest |
| `cp_final_assembly_utility_records` | `stockfitting_and_final_assembly` | Final-assembly electricity and natural gas | Utility meters, oven or press logs, and production records | meter_id; carrier; opening_reading; closing_reading; unit; equipment_id; operating_time; batch_id; accepted_output_mass | Use carrier-specific meters or allocate documented area totals using equipment operation | kWh; MJ | Meter interval and each batch | Same period as assembled footwear | Pressing, stockfitting, curing, testing, ventilation, and handling equipment | Keep electricity and natural gas separate; normalize each to accepted output | Meter calibration; utility invoice; equipment log; allocation worksheet |
| `cp_direct_emissions_records` | `component_manufacturing_and_cutting`; `upper_liner_fabrication`; `stockfitting_and_final_assembly` | Fuel, solvent, and refrigerant releases | Stack monitoring, solvent balance, permit ledger, and refrigerant records | source_id; substance; compartment; concentration; gas_flow; operating_time; chemical_input; recovered_mass; waste_retention; product_retention; control_efficiency; batch_id | Use substance-specific monitoring or a verified mass balance; do not infer unmeasured species | kg | Monitoring or service interval and reporting batch | Same period as the generating process | Only direct sources inside the declared foreground boundary | Attribute each substance separately using monitored operation or verified balance; normalize to accepted output | Calibration and QA records; permit report; chemical reconciliation; service certificate |
| `cp_packaging_batch_records` | `inspection_and_sale_packaging` | Accepted footwear, packaging inputs, final rejects, and packaging scraps | Inspection, package issue and return, count-to-mass, packing, reject, and waste records | batch_id; model; size; pair_or_single; accepted_input_mass; reference_output_mass; reject_mass; package_material_id; issued_count_or_mass; unit_mass; returned_quantity; scrap_mass; packed_quantity | Weigh footwear and scraps and convert packaging counts with product-specific unit mass | kg; count | Each packing batch | Representative production period | All final inspection and packing stations in scope | Reconcile accepted input to reference output, rejects, and stock change; normalize packaging to accepted net footwear mass | Calibrated scales; inspection disposition; package specification; packing list; waste ticket |
| `cp_packaging_utility_records` | `inspection_and_sale_packaging` | Inspection and packaging electricity | Electricity meter and equipment operating records | meter_id; opening_reading; closing_reading; equipment_id; measured_demand; operating_time; batch_id; reference_output_mass | Use a finishing-area submeter or allocate measured electricity by causal equipment activity | kWh | Meter interval and each packing batch | Same period as packed production | Inspection, testing, labelling, sealing, and packing equipment only | Subtract documented non-production load and normalize to accepted reference product | Meter calibration; equipment log; allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_issue` | materials_components_chemicals_packaging | Net issue = opening stock + receipts - returns - closing stock, restricted to the declared product batch and adjusted for documented transfers. | Stock, issue, return, and transfer fields | kg net input per batch | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `calc_count_to_mass` | eyelets_buckles_outsoles_midsoles_and_packaging | Mass = issued or accepted count multiplied by product-specific measured average unit mass; retain sampling basis and uncertainty. | Count and unit-mass record | kg exchange | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `calc_utility_allocation` | shared_utility_meters | Carrier amount = metered total minus documented non-production load, multiplied by the causal share from submeter, measured equipment demand and operating time, or accepted process output. Calculate each carrier separately. | Meter readings, exclusions, and causal driver | kWh, MJ, or kg by carrier | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `calc_refrigerant_balance` | r134a_equipment | R134a release = opening charge + recharge - recovered mass - closing charge - documented disposal, only when the service record closes the equipment balance. | Equipment charge and service fields | kg R134a released | `eu-recommendation-2021-2279` |
| `calc_process_mass_balance` | each_manufacturing_process | Reconcile material and component inputs with accepted product output, material-specific wastes, measured direct releases, rework, and inventory change; investigate rather than assign unexplained residuals. | Atomic exchanges, rework, and stock fields | Mass-balance residual and completeness finding | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `calc_solvent_release` | ethyl_acetate | Ethyl acetate to air = net ethyl-acetate input - product retention - recovered solvent - liquid waste solvent - solvent retained in solid waste, only when a verified balance is available. | Chemical issue, recovery, retention, and waste fields | kg ethyl acetate to air | `eu-recommendation-2021-2279` |
| `calc_reference_normalization` | all_inventory_exchanges | Normalized exchange = reporting-period exchange divided by accepted net finished footwear mass; set the reference product output to exactly 1 kg. | Reporting-period exchange and accepted reference output | Exchange per 1 kg reference product | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference_product | Document footwear subtype, pair or single-article convention, size, net mass, intended ski discipline, construction, closure, sole system, and CPC 29410 inclusion. | Product specification; BOM; classification review; reference-flow record |
| `dq_bom_coverage` | materials_and_components | Use product-specific BOM and component specifications; disclose every uncovered mass share and proxy without inventing composition. | BOM coverage calculation; supplier specification; proxy log |
| `dq_temporal_representativeness` | all_foreground_records | Use records representative of the declared period, normally 12 consecutive months or the full shorter run, and disclose shutdowns, campaigns, and missing intervals. | Dated meter, batch, stock, quality, service, and waste records |
| `dq_geography_technology` | utilities_and_upstream_datasets | Match manufacturing country, energy supply, component technology, formulation, and material specification as closely as available; disclose every substitution. | Facility address; supplier geography; process technology; dataset metadata |
| `dq_measurement_control` | measured_quantities | Retain calibration or verification status and document conversions from count, length, area, volume, steam mass, or fuel volume to mass or energy. | Calibration certificates; sample records; conversion worksheets |
| `dq_atomic_completeness` | inventory | Report every included material, component, chemical, energy carrier, refrigerant, packaging material, waste, and direct emission separately and document route applicability. | Atomic inventory export; route matrix; manifest unresolved-flow review |
| `dq_mass_balance` | each_process | Investigate unexplained mass-balance residuals and disclose rework, work in progress, internal recycling, and stock treatment. | Process mass-balance worksheet; corrective-action record |
| `dq_uuid_resolution` | tiangong_linked_flows | Use a UUID only after candidate identity confirmation and public state-100 direct read; keep unresolved non-reference identities blank with row-specific review metadata. | State-100 verification record; manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Require product flow `6e39a9ed-f49c-4ddc-8869-7d4c47551bbf`, Product flow type, exact CPC 29410, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg reference unit. | `unsd-cpc-3-0-29410` |
| `validate_required_qualifiers` | foreground_data_package | Fail completeness when footwear subtype, pair or single-article convention, size, net mass, BOM, construction route, facility, production period, or packaging inclusion is missing. | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `validate_atomic_flows` | process_inventory | Reject collection labels and combined exchanges; every material, component, chemical, energy carrier, refrigerant, packaging material, waste, and emission shall remain separate. | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `validate_bom_and_losses` | materials_and_manufacturing_losses | Require product-specific BOM, accepted transfers, material-specific offcuts, rejects, rework, stock change, and step-level loss reconciliation. | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `validate_utilities` | electricity_steam_hot_water_natural_gas | Require carrier-specific meters, conversion records, boundary definitions, and allocation drivers; do not accept a combined energy amount. | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `validate_chemicals_and_emissions` | adhesive_solvent_combustion_and_refrigerant | Require chemical-specific issue and waste records; direct emissions require monitoring or verified balance and cannot be inferred from input presence alone. | `eu-recommendation-2021-2279` |
| `validate_packaging` | sale_packaging | Require each included packaging material to reconcile with packing records and disclose packaging excluded from the reference product mass. | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `validate_uuid_resolution` | tiangong_references | Reject any non-reference UUID that lacks both candidate identity confirmation and a public state-100 direct read; unresolved identities remain blank with row-specific manifest metadata. |  |
| `validate_translation_alignment` | bilingual_pcr | Require identical ordered process_id, row_id, Selected flow, controlled-token, source-id, boundary-rule, allocation-rule, and validation-rule sequences in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for CPC 29410 ski-boots, snowboard boots, or cross-country ski footwear. |
| downstream_use | `secondary_dataset`; `background_dataset` only when product identity, geography, technology, representativeness, allocation, and unresolved-flow limitations match the downstream study. |
| allowed_use | Factory-gate LCI modelling, supplier-specific data exchange, product-footprint modelling, and downstream process or lifecycle-model projection with required qualifiers preserved. |
| excluded_use | Representation of skating boots or general sports footwear; unqualified comparison across materially different constructions; use-stage or end-of-life claims; performance or safety certification; automatic filling of unresolved UUIDs or quantities. |
| required_metadata | PCR id and version; subtype and ski discipline; pair or single convention; model and size; net mass; BOM and material specifications; construction route; facility and country; production period; meter and stock boundaries; allocation; rework; waste destinations; direct-emission basis; packaging inclusion; source and proxy list. |
| required_quality_disclosure | Primary-data coverage; temporal, geographic, and technological representativeness; calibration status; mass-balance residuals; allocation shares; conditional-route omissions; unresolved Tiangong identities; upstream dataset substitutions; data gaps and uncertainty. |
| update_trigger | Change in CPC scope, reference-flow identity, product subtype, principal material, construction or binding interface, facility, utility supply, adhesive or solvent, cooling refrigerant, packaging, allocation driver, or material foreground evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-29410` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 29410, official structure entry and CPC_Ver_3.0_Structure_30Jun2025.csv. https://unstats.un.org/unsd/classifications/Econ | Exact scope and title for ski-boots, snowboard boots, and cross-country ski footwear |
| `eu-recommendation-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific BOM and manufacturing data; LCI inputs of raw materials and energy; products, waste, and releases to air, water, and soil; completeness, quality, and transparency rules |
| `afw-pefcr-v3-1-2025` | Standard (`standard`) | Product Environmental Footprint Category Rules for Apparel and Footwear, Version 3.1, 29 April 2025. https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ | Footwear BOM, component manufacturing, compound forming, die-cutting, sewing, stockfitting, assembly, manufacturing losses, sale packaging, electricity, allocation, and company-specific data structure |
