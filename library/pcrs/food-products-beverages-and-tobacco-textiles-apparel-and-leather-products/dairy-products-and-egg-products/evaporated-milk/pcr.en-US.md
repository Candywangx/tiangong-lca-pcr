---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.evaporated-milk
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Evaporated milk

## 1. Scope and Applicability

This PCR covers the gate-to-gate production of unsweetened evaporated milk from milk or permitted milk-derived materials, beginning with accepted materials at the dairy plant and ending with packed, heat-stable evaporated milk at the factory gate. It covers whole, partly skimmed, skimmed, and high-fat evaporated milk, including reconstituted products of equivalent composition and characteristics. It is applicable to products for direct consumption or further processing.

The foreground boundary includes receipt and refrigerated storage, clarification or separation when used, composition standardization, heat treatment, concentration, homogenization when used, filling, commercial heat stabilization, cooling, plant cleaning, attributable utilities, process losses, and on-site waste or wastewater handling. Upstream milk production and collection before the declared plant gate, production of packaging and other purchased inputs, outbound distribution, retail, consumer use, and packaging end-of-life are outside the foreground boundary and require separate upstream or downstream datasets when included in a study.

Sweetened condensed milk (CPC 22222), milk or cream covered by CPC 22229, ordinary unconcentrated liquid milk, concentrated cream, milk or cream in solid form, dairy analogues with non-milk-fat substitution, and flavoured products whose identity is not evaporated milk are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.evaporated-milk |
| classification_refs | CPC 3.0: 22221, Evaporated milk (exact mapping context) |
| covered_products | Unsweetened concentrated milk in liquid or paste form; whole, partly skimmed, skimmed, or high-fat evaporated milk; reconstituted unsweetened concentrated milk of equivalent composition and characteristics |
| excluded_products | Sweetened condensed milk (CPC 22222); products in CPC 22229; ordinary unconcentrated liquid milk; concentrated cream; solid milk or cream; dairy analogues with non-milk-fat substitution; flavoured products outside evaporated-milk identity |
| representative_product | Unsweetened, shelf-stable evaporated milk packed for sale or further processing |
| production_route | Accepted milk or permitted milk-derived materials → clarification/separation and standardization → heat treatment → concentration → homogenization as applicable → filling → in-container sterilization or equivalent declared commercial heat-stabilization route → cooling and factory gate |
| market_state | Packed liquid or paste, commercially heat-stable, with declared fat class, composition, sterilization route, and net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of unsweetened evaporated milk at the factory gate |
| How much | 1 kg net evaporated-milk product, excluding packaging mass |
| How well | Product conforms to the declared evaporated-milk fat class and composition specification and is commercially heat-stable under the declared process route |
| How long or cycle | One accepted production lot at factory-gate release; no use-duration function is assigned |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the Tiangong reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net evaporated milk |
| Reference product flow | Evaporated milk / 淡奶 `e59aaeef-61a7-45af-b252-d70036a584d3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | evaporated-milk fat class; milk species and raw-material route; direct-milk, reconstituted, or recombined route; milkfat, total milk solids, and protein-in-solids basis; heat-stabilization route; primary packaging material and format; net fill basis; production geography; production period; allocation status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported quantities to 1 kg of accepted net evaporated-milk product at factory-gate release; exclude primary packaging mass from the reference amount and report it separately. |
| `net_product_mass` | Filled product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass from calibrated filler or check-weigher records, corrected for rejects, start-up/shutdown losses, and nonconforming product; do not use nominal container count alone without a verified mass-per-container conversion. |
| `composition_basis` | Product composition | Mass fraction | kg/kg product | Report milkfat, total milk solids or milk solids-not-fat as applicable, and milk protein in milk solids-not-fat on the declared analytical basis; keep the product subclass and analytical method with the result. |
| `energy_units` | Electricity and thermal energy | Energy | kWh and MJ | Preserve metered electricity in kWh and thermal energy or fuel in its measured unit; document conversion factors and lower/higher heating-value basis before normalization. |
| `water_balance` | Water removal and condensate | Mass | kg | Reconcile removed water as condensate recovered, condensate discharged, water retained in product, and water emitted to air; do not count the same water in more than one output route. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted milk and permitted milk-derived materials, packaging, additives, and utilities delivered to the declared dairy-plant gate, with incoming state and storage condition recorded |
| starting_condition_role | Foreground gate-to-gate starting point for evaporated-milk manufacture |
| product_classification_scope | Unsweetened evaporated milk within the semantic product scope stated in Sections 1 and 2; CPC 3.0 code 22221 is mapping context rather than canonical identity |
| recursive_input_rule | If evaporated milk itself enters as rework or an externally supplied same-category input, record its mass and upstream dataset once at the receiving process, distinguish internal rework from external supply, and do not recursively rebuild it under this PCR |
| upstream_dataset_requirement | Use temporally, geographically, and technologically representative upstream datasets for milk or milk-derived inputs, purchased energy, water supply, packaging, additives, cleaning agents, and inbound transport included in the study |
| disclosure | Declare milk species and source route, reconstitution status, fat class, composition basis, processing and sterilization route, packaging format, plant geography, data period, internal rework, condensate recovery, wastewater destination, co-products, and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | All foreground processes | Include all attributable operations from accepted material receipt through released packed product, including cleaning, utilities, losses, and on-site waste handling; report exclusions and any shared-service allocation. | `codex-cxs-281-1971`, `eu-fdm-bat-2019-2031` |
| `boundary_product_identity` | Product scope | Accept only unsweetened evaporated-milk products of the declared composition and characteristics; route CPC 22222/22229 products, ordinary liquid milk, cream, powder, analogue, or flavoured products to another applicable PCR. | `unsd-cpc-3-22221`, `codex-cxs-281-1971`, `codex-cxs-206-1999` |
| `boundary_waste_routes` | Product losses, cleaning residues, and wastewater | Separate recoverable product or condensate, waste sent to treatment, and elementary releases; model each route once and retain destination evidence. | `eu-fdm-bat-2019-2031` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `milk_receipt_and_storage` | Milk and material receipt and storage | required | Always | Foreground receipt, acceptance, measurement, and refrigerated storage | Per kg accepted milk or milk-derived material and per kg reference product |
| `standardization_and_heat_treatment` | Clarification, standardization, and preliminary heat treatment | required | Always; individual separation or reconstitution steps apply only when used | Foreground preparation and composition control | Per kg standardized heat-treated milk output |
| `concentration_and_homogenization` | Concentration and homogenization | required | Always; homogenization is recorded when used by the declared route | Foreground water removal and physical stabilization | Per kg concentrated milk output and per kg reference product |
| `filling_stabilization_and_cooling` | Filling, commercial heat stabilization, and cooling | required | Always; distinguish in-container sterilization from another declared equivalent route | Foreground packaging and final safety/stability processing | Per kg accepted net evaporated milk |
| `cleaning_and_wastewater_management` | Cleaning and wastewater management | required | Cleaning is always included; on-site wastewater treatment is included only when operated by the reporting site | Foreground hygiene support and residual management | Per kg accepted net evaporated milk |

### Process: Milk and material receipt and storage (`milk_receipt_and_storage`)

#### Inputs

##### Product flows

###### Milk and permitted milk-derived materials (`received_milk_materials`)

Record the accepted mass of milk, milk powders, cream or cream powders, milkfat products, and any permitted protein-adjustment materials delivered to the plant. Keep each materially distinct input as a separate implemented flow row; no non-reference inventory-flow UUID is assigned in this candidate PCR.

- Selected flow: Unresolved Tiangong product flow for each actual milk or milk-derived input
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Accepted scale or calibrated meter quantity, net of rejected deliveries, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `codex-cxs-281-1971`
- Range: Provisional raw-material mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 5.0
  - Unit: kg/kg reference product
  - Basis: broad first-pass accepted milk and milk-derived input mass per 1 kg evaporated milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted milk released to preparation (`accepted_milk_to_preparation`)

Calculate accepted material transferred from receipt records and storage-tank changes, excluding rejected deliveries and documented receipt losses.

- Selected flow: Unresolved intermediate product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: accepted receipts plus opening inventory minus closing inventory, rejects, and documented receipt losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Range: Provisional transfer-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 5.0
  - Unit: kg/kg reference product
  - Basis: broad first-pass accepted material transferred to preparation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected milk and receiving losses (`receiving_losses`)

Record rejected material, spills, tank or line residues not recovered, and sampling losses by actual destination.

- Selected flow: Unresolved Tiangong waste flow by actual material and destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-derived receiving losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_effluent`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional receiving-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: broad first-pass receiving loss per 1 kg evaporated milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Clarification, standardization, and preliminary heat treatment (`standardization_and_heat_treatment`)

#### Inputs

##### Product flows

###### Accepted milk and composition-adjustment inputs (`standardization_inputs`)

Record accepted milk plus cream, skim milk, milk solids, retentate, permeate, lactose, potable water, salt, and technologically justified additives actually used. Preserve the whey-protein-to-casein relationship where the declared product standard requires it.

- Selected flow: Unresolved Tiangong product flow for each actual input
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered, weighed, or batch-recipe quantity reconciled to batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `codex-cxs-281-1971`
- Range: Provisional adjustment-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.0
  - Unit: kg/kg reference product
  - Basis: broad first-pass mass of composition-adjustment inputs in addition to transferred milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standardized heat-treated milk (`standardized_heat_treated_milk`)

Calculate standardized milk transferred to concentration from measured batch inputs, samples, separator outputs, line hold-up, and losses; retain composition and time-temperature control records.

- Selected flow: Unresolved intermediate product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: reconciled mass transferred to the concentration step
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_composition_and_yield`
- Sources: `codex-cxs-281-1971`, `eu-fdm-bat-2019-2031`
- Range: Provisional standardized-milk QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 5.0
  - Unit: kg/kg reference product
  - Basis: broad first-pass standardized milk transferred to concentration
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Separator sediment and preparation losses (`preparation_residues`)

Record separator sediment, filter residues, off-spec preparation material, and unrecovered line residues by actual treatment route.

- Selected flow: Unresolved Tiangong waste flow by actual residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured residue or preparation-step mass-balance difference
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_effluent`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional preparation-residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: broad first-pass preparation residue per 1 kg evaporated milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Concentration and homogenization (`concentration_and_homogenization`)

#### Inputs

##### Product flows

###### Standardized milk to concentration (`milk_to_concentration`)

Record the mass of standardized heat-treated milk entering the evaporator or other declared concentration system.

- Selected flow: Unresolved intermediate product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: transfer-meter or reconciled batch quantity entering concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_composition_and_yield`
- Range: Provisional concentration-feed QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 5.0
  - Unit: kg/kg reference product
  - Basis: broad first-pass concentration feed per 1 kg evaporated milk
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy or fuel for concentration (`concentration_thermal_energy`)

Record steam, hot water, or fuel attributable to heating and concentration. Separate purchased thermal energy from on-site fuel combustion and retain the allocation and heating-value basis.

- Selected flow: Unresolved energy-carrier or fuel flow for the actual supply
- Flow property / unit: Energy / MJ, or as metered with documented conversion
- Amount rule: metered use or engineering allocation from boiler and steam records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional thermal-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 30
  - Unit: MJ/kg reference product
  - Basis: deliberately broad first-pass thermal energy attributable to concentration
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for concentration and homogenization (`concentration_electricity`)

Record metered or allocated electricity for pumps, vacuum systems, evaporation, homogenization, refrigeration, and controls attributable to this process.

- Selected flow: Unresolved electricity product flow for the declared grid or supply
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented engineering allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5.0
  - Unit: kWh/kg reference product
  - Basis: deliberately broad first-pass process electricity attributable to concentration and homogenization
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Concentrated milk transferred to filling (`concentrated_milk_to_filling`)

Calculate concentrated milk output from measured transfer mass and solids data, accounting for samples, retained material, internal rework, and losses.

- Selected flow: Unresolved intermediate product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass reconciled to solids and water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_composition_and_yield`
- Sources: `codex-cxs-281-1971`
- Range: Provisional concentrate-yield QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.5
  - Unit: kg/kg reference product
  - Basis: broad first-pass concentrated milk transferred to final filling
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered evaporator condensate (`recovered_condensate`)

Record condensate recovered for permitted reuse as a separate internal or exported product flow and identify the receiving use; exclude the same quantity from wastewater and elementary release rows.

- Selected flow: Unresolved water product flow for the actual recovered condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: condensate meter reading or water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cleaning`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional recovered-condensate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4.0
  - Unit: kg/kg reference product
  - Basis: broad first-pass condensate recovered from concentration
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Condensate routed to wastewater treatment (`condensate_to_wastewater`)

Record only condensate actually routed to wastewater treatment or sewer, net of recovered condensate.

- Selected flow: Unresolved wastewater flow for condensate destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: meter reading or water-balance remainder by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cleaning`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional condensate-to-wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4.0
  - Unit: kg/kg reference product
  - Basis: broad first-pass condensate routed to wastewater
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct emissions from on-site energy generation (`onsite_energy_emissions`)

When fuel is combusted on-site, implement separate pollutant-specific elementary-flow rows using verified Tiangong flow identities and measured or reviewed fuel-specific emission factors. No aggregate emissions UUID or numerical range is assigned here because the actual fuel and control technology are unresolved.

- Selected flow: Unresolved pollutant-specific elementary flow
- Flow property / unit: Mass / kg for each pollutant
- Amount rule: measured emission or fuel quantity multiplied by a documented reviewed emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Filling, commercial heat stabilization, and cooling (`filling_stabilization_and_cooling`)

#### Inputs

##### Product flows

###### Concentrated milk to filling (`concentrated_milk_input`)

Record concentrated milk entering the declared filling and heat-stabilization route.

- Selected flow: Unresolved intermediate product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calibrated transfer-meter or filler mass entering the line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_packaging`
- Range: Provisional filling-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.5
  - Unit: kg/kg reference product
  - Basis: broad first-pass concentrated milk entering filling
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material by actual mass, including cans, closures, labels, cartons, aseptic packs, or other declared formats; do not include packaging mass in the reference product mass.

- Selected flow: Unresolved Tiangong product flow for each packaging material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchase or issue records reconciled to packed units and packaging scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_packaging`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.50
  - Unit: kg/kg reference product
  - Basis: deliberately broad first-pass total packaging mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Energy for filling, stabilization, and cooling (`final_process_energy`)

Record electricity, steam, hot water, cooling, or fuel attributable to filling, commercial heat stabilization, and cooling as separate implemented energy-carrier rows.

- Selected flow: Unresolved energy-carrier or electricity flow for each actual supply
- Flow property / unit: Energy / kWh or MJ as applicable
- Amount rule: submetered use or documented engineering allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional final-process energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 20
  - Unit: MJ-equivalent/kg reference product
  - Basis: deliberately broad first-pass energy for filling, heat stabilization, and cooling after documented conversion
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted evaporated milk (`evaporated_milk_reference_product`)

This is the quantitative reference output. Determine accepted net product mass after excluding rejects, samples, retained line product, and packaging mass.

- Selected flow: Evaporated milk / 淡奶 `e59aaeef-61a7-45af-b252-d70036a584d3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization from accepted net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_packaging`
- Sources: `codex-cxs-281-1971`
- Range: Reference-output normalization check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1.0
  - Upper: 1.0
  - Unit: kg/kg reference product
  - Basis: normalized accepted reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Off-spec product and filling losses (`final_product_losses`)

Record start-up, shutdown, changeover, overfill, sampling, leakage, and rejected finished product by recovery, rework, treatment, or disposal route.

- Selected flow: Unresolved Tiangong waste flow by actual material and destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: filler and reject records reconciled to product mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_effluent`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional final-product-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg/kg reference product
  - Basis: broad first-pass filling and finished-product loss
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging scrap (`packaging_scrap`)

Record damaged, trimmed, rejected, or unused packaging by material and actual recovery or disposal route.

- Selected flow: Unresolved Tiangong waste flow for each packaging material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: packaging issues minus packed-product packaging and returned usable stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_packaging`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional packaging-scrap QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg reference product
  - Basis: broad first-pass packaging scrap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cleaning and wastewater management (`cleaning_and_wastewater_management`)

#### Inputs

##### Product flows

###### Cleaning and process water (`cleaning_water`)

Record potable or treated water for clean-in-place systems, equipment and area cleaning, cooling make-up, and other attributable uses. Record recovered evaporator condensate separately and credit only its actual reuse.

- Selected flow: Unresolved Tiangong water product flow for the actual supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: submetered water plus documented allocation, net of separately metered recovered-water use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cleaning`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional cleaning-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 30
  - Unit: kg/kg reference product
  - Basis: deliberately broad first-pass attributable process and cleaning water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning agents and disinfectants (`cleaning_chemicals`)

Record each detergent, acid, alkali, sanitizer, and disinfectant by purchased-product mass or volume with concentration and density conversion retained.

- Selected flow: Unresolved Tiangong product flow for each actual chemical
- Flow property / unit: Mass / kg of supplied product
- Amount rule: issue records or dosing-system totals allocated to evaporated-milk production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_cleaning`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional cleaning-chemical QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg supplied product/kg reference product
  - Basis: deliberately broad first-pass attributable cleaning-agent mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Process and cleaning wastewater to treatment (`process_wastewater`)

Record wastewater sent to on-site treatment, an external treatment system, or sewer by destination. Include cleaning water, product-containing rinses, and condensate routed to wastewater, avoiding duplication with separately recovered condensate.

- Selected flow: Unresolved Tiangong wastewater flow for the actual destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: effluent meter or water balance, with destination split and product-loss content disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_effluent`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg reference product
  - Basis: deliberately broad first-pass wastewater sent to treatment or sewer
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment sludge (`wastewater_sludge`)

When on-site treatment is operated, record dewatered sludge or other residuals by measured mass, dry-matter content, and actual recovery or disposal destination.

- Selected flow: Unresolved Tiangong waste flow for the actual sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg wet and dry-matter basis declared
- Amount rule: measured dispatched mass with dry-matter conversion where available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_effluent`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional treatment-sludge QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg wet sludge/kg reference product
  - Basis: broad first-pass on-site treatment residual
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated effluent released to the environment (`treated_effluent_release`)

When the reporting site releases treated effluent directly, implement water and pollutant-specific elementary-flow rows using verified Tiangong identities and measured concentration and discharge-volume records. If wastewater leaves for external treatment, keep it as a waste flow and do not also report a direct elementary release.

- Selected flow: Unresolved water and pollutant-specific elementary flows
- Flow property / unit: Mass / kg for water and each pollutant
- Amount rule: measured discharge volume multiplied by measured pollutant concentration, with unit and density conversions documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net evaporated milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_effluent`
- Sources: `eu-fdm-bat-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_internal_rework` | Internal rework, recovered condensate, and internal intermediate milk | Treat internal recirculation as an internal flow and reconcile it in the mass balance; do not create a co-product credit or double-count upstream burdens. |  |
| `allocation_subdivision_first` | Shared plant operations and utilities | Use direct metering or process subdivision first. Where this is unavailable, allocate shared utilities using a documented causal engineering driver such as metered operating time, steam demand, refrigeration load, or throughput, and report the allocated share. | `eu-pef-2021-2279` |
| `allocation_exported_milk_components` | Cream, skim milk, or other milk-derived outputs exported from the foreground system | Prefer separate process data or physical mass-and-composition tracking. If allocation remains necessary, use a documented physical relationship appropriate to the joint operation, disclose the formula and co-product quantities, and test a materially plausible alternative; do not silently default to economic allocation. | `eu-pef-2021-2279` |
| `allocation_waste_and_recovery` | Product losses, packaging scrap, condensate, sludge, and recovered materials | Classify each output by actual fate. Apply burdens or credits only for documented external treatment, recovery, or substitution; do not credit material that is internally reused and already reduces input demand. | `eu-pef-2021-2279`, `eu-fdm-bat-2019-2031` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `milk_receipt_and_storage`; `standardization_and_heat_treatment` | milk, milk-derived materials, adjustment inputs, rejects | weighbridge, tank meter, receiving inspection, batch issue record | material identity; supplier; lot; accepted mass or volume; density; solids; fat; protein; temperature; reject quantity; opening and closing storage | calibrated weighing or metering reconciled to receiving and batch records | kg; L with density conversion; mass fraction | each delivery and batch | every eligible lot in the declared production period | all receipt and storage points serving the declared product | sum accepted quantities and inventory changes by material; normalize only after lot eligibility and allocation are resolved | calibration records; receiving certificates; laboratory results; stock reconciliation; reject log |
| `cp_composition_and_yield` | `standardization_and_heat_treatment`; `concentration_and_homogenization` | intermediate mass, composition, evaporated water, yield | batch record, transfer meter, laboratory test, evaporator log | input and output mass; fat; total solids; solids-not-fat; protein basis; temperature; time; evaporator feed and concentrate; condensate; samples; rework; line hold-up | calibrated transfer measurement and representative laboratory analysis with batch mass balance | kg; mass fraction; process-control units | each batch or continuous production run | all declared production campaigns | all relevant preparation and concentration lines | reconcile input solids and mass to concentrate, condensate, rework, losses, and inventory change | meter calibration; laboratory method and control samples; signed batch release; mass-and-solids balance closure |
| `cp_energy_and_utilities` | `concentration_and_homogenization`; `filling_stabilization_and_cooling` | electricity, steam, fuel, cooling, and direct emissions | submeter, boiler log, fuel invoice, operating log, emissions record | electricity; steam mass and condition; hot-water quantity and temperature; fuel quantity; heating value basis; operating hours; allocation driver; pollutant measurement or factor | direct submetering preferred; otherwise documented engineering allocation and reviewed emission factor | kWh; MJ; kg steam; fuel-specific units; kg pollutant | continuous or shift/batch total | the declared production period, including all material operating modes | all utility systems serving the declared processes | subtract non-production use; allocate shared supply by causal driver; convert units once; normalize to accepted product | meter calibration; invoice reconciliation; boiler balance; allocation worksheet; factor source and version |
| `cp_output_and_packaging` | `filling_stabilization_and_cooling` | accepted net product, packaging, rejects, and packaging scrap | filler total, check-weigher, packaging issue, finished-goods, reject and release records | filled units; nominal and measured net mass; accepted and rejected units; samples; rework; packaging item mass; packaging issued and returned; heat-stabilization route; release status | calibrated check-weighing and mass reconciliation to released finished goods | kg product; item; kg packaging | each lot and packaging run | all declared production lots | all filling and stabilization lines for the product | accepted net product equals released units times verified mean net mass; reconcile packaging issue to packed units and scrap | check-weigher calibration; release certificate; packaging specification; reject and rework log; container-closure control records |
| `cp_water_and_cleaning` | `concentration_and_homogenization`; `cleaning_and_wastewater_management` | water supply, recovered condensate, cleaning water, and chemicals | water submeter, condensate meter, CIP recipe and dosing log, purchase or issue record | supplied water; condensate generated, recovered and reused; CIP cycle; rinse volume; chemical identity, concentration and dose; destination | submetering and automated CIP logs preferred; otherwise documented equipment-cycle calculation | kg or m3 water; kg or L chemical with density and concentration | each CIP cycle and periodic meter reconciliation | the declared production period, including all material cleaning regimes | all product-contact and attributable service systems | separate fresh water from recovered water; allocate shared cleaning by cycle, equipment volume, or operating time; prevent condensate double counting | meter and dosing calibration; CIP completion record; chemical safety/specification record; periodic water balance |
| `cp_waste_and_effluent` | all foreground processes | product loss, residues, wastewater, sludge, and direct discharge | loss log, waste manifest, effluent meter, laboratory analysis, treatment log | material and route; wet mass; dry matter; wastewater volume; destination; pollutant concentration; treatment status; recovery; disposal | direct weighing or metering; pollutant load calculated from matched volume and concentration | kg; m3; mg/L; kg pollutant | each event or continuous discharge with representative sampling | the declared production period, including material abnormal conditions | all drains, waste stores, treatment and discharge points serving the declared product | segregate by destination; calculate pollutant mass from matched flow and concentration; reconcile product-containing losses to material balance | waste transfer records; meter calibration; accredited or controlled laboratory results; treatment operating record; destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = eligible foreground amount ÷ accepted net evaporated-milk mass; apply the documented shared-process allocation before division | eligible amount; allocation share; accepted net product mass | amount per 1 kg reference product |  |
| `calc_product_mass` | Accepted reference product | accepted net product mass = sum of released units × verified mean net product mass, or direct accepted mass meter total; packaging mass is excluded | released units; check-weigher results or mass meter; rejects; samples | kg accepted net evaporated milk |  |
| `calc_mass_and_solids_balance` | Receipt through concentration | reconcile material input and opening inventory with accepted product, removed water, co-products, waste, rework, samples, and closing inventory; calculate and disclose both total-mass and milk-solids closure | measured masses; composition tests; inventory changes; condensate; losses | mass closure; solids closure; unresolved difference | `codex-cxs-281-1971` |
| `calc_water_routes` | Evaporation, cleaning, and wastewater | removed water = recovered condensate + condensate to treatment + verified water-to-air release + change in process hold-up; wastewater pollutant load = matched discharge volume × concentration after unit conversion | condensate meters; water balance; discharge volume; pollutant concentrations | kg water by route; kg pollutant | `eu-fdm-bat-2019-2031` |
| `calc_energy` | Process energy | convert each metered energy carrier once to the reported unit, retain the original meter unit and conversion basis, then allocate by the documented causal driver | meter totals; steam condition; fuel amount; heating value; operating driver | kWh electricity or MJ thermal energy per reference product | `eu-fdm-bat-2019-2031` |
| `calc_allocation` | Joint or shared operations | allocated amount = shared amount × documented causal or accepted physical allocation fraction; fractions for one shared total must sum to 1 within rounding tolerance | shared amount; allocation driver by product; co-product mass and composition where relevant | allocated foreground amount and allocation fractions | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and inputs | Match the declared product to unsweetened evaporated-milk scope and retain fat class, composition, reconstitution status, milk species, and heat-stabilization route; unresolved non-reference Tiangong flow identities must be reviewed before publication. | product specification; label; batch formula; laboratory release; Tiangong identity review |
| `dq_measurement` | Mass, energy, water, and effluent records | Use calibrated meters or scales where material; retain conversion, density, heating-value, sampling, and allocation calculations. | calibration certificates; meter list; calculation workbook; laboratory method |
| `dq_temporal` | All foreground data | Use a declared period representative of the product and technology, covering every eligible lot or campaign and all material operating modes; identify maintenance, shutdown, start-up, and abnormal events and justify exclusions. | production calendar; meter series; event log; exclusion record; technological, geographical, temporal, and precision review consistent with `eu-pef-2021-2279` |
| `dq_completeness` | Material and utility balance | Include all material measured foreground inputs, outputs, wastes, and direct emissions; explicitly list and justify every omitted flow and never omit hazardous or legally controlled releases through a generic cut-off. | completeness calculation; omitted-flow register; reviewer sign-off; `eu-pef-2021-2279` data-quality review |
| `dq_mass_balance` | Receipt through released product | Define a site- and batch-specific investigation threshold before validation; investigate every unexplained total-mass or milk-solids difference that exceeds that threshold and retain the corrective-action decision. No universal percentage is prescribed by this PCR. | signed mass-and-solids balance; documented site threshold; corrective-action record |
| `dq_source_replacement` | All provisional ranges | Treat every `reasoned_estimate` range as a non-binding candidate QA screen; replace it with foreground empirical distributions or reviewed product-specific evidence before publication-critical use. | range review log; foreground distribution; approved source record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow and dataset metadata | Fail if the product-flow UUID, Mass flow-property UUID, Units of mass UUID, reference unit kg, net-mass basis, or required qualifiers are missing or inconsistent. |  |
| `validate_product_scope` | Product identity | Fail if added sugar/sweetener, concentrated cream, solid milk/cream, non-milk-fat substitution, or another excluded identity is represented as this reference product; verify declared composition against the applicable product specification. | `codex-cxs-281-1971` |
| `validate_process_coverage` | Foreground process map | Fail if receipt, standardization/heat treatment, concentration, final filling/heat stabilization/cooling, or attributable cleaning is omitted without a documented route-specific explanation. | `eu-fdm-bat-2019-2031` |
| `validate_mass_and_solids_balance` | Material balance | Flag total-mass or milk-solids imbalance above the declared site- and batch-specific investigation threshold and fail if the difference is unexplained, if internal rework is double-counted, or if removed water routes overlap. | `codex-cxs-281-1971`, `eu-fdm-bat-2019-2031` |
| `validate_wastewater_route` | Waste and elementary flows | Fail if the same wastewater or condensate is reported both as a waste flow to treatment and as a direct elementary release, or if product-containing losses and cleaning compounds have no destination. | `eu-fdm-bat-2019-2031` |
| `validate_provisional_ranges` | Inventory amounts and QA | Flag any foreground result outside a provisional QA guardrail for investigation, but do not replace the foreground value or treat a `reasoned_estimate` as an allowed range; fail publication review if provisional publication-critical constraints lack accepted evidence. |  |
| `validate_allocation` | Shared operations and co-products | Fail if shared-operation allocation, exported co-products, internal rework, or recovery credits are material but the method, driver, fractions, quantities, and sensitivity are not disclosed and reconciled. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for evaporated milk |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product carbon-footprint or LCA studies that combine this factory-gate dataset with representative upstream milk, material, energy, packaging, transport, and downstream scenarios and preserve the declared product qualifiers |
| excluded_use | Stand-alone cradle-to-grave claim; sweetened condensed milk, concentrated cream, milk powder, dairy analogue, or flavoured-product proxy; comparative assertion without equivalent composition, boundary, allocation, geography, technology, and data period |
| required_metadata | canonical PCR id; reference UUIDs; product subclass and composition; milk species and material route; reconstitution status; plant geography; technology and heat-stabilization route; packaging; production period; boundary; allocation; upstream datasets; data owners; review status |
| required_quality_disclosure | primary-data share; meter and laboratory coverage; temporal and site coverage; mass-and-solids balance closure; water and energy allocation; waste and wastewater destinations; unresolved UUIDs; provisional ranges; exclusions; uncertainty and reviewer decisions |
| update_trigger | material change in formulation, milk source, composition class, concentration or sterilization technology, packaging, plant energy or water system, allocation, waste route, product-flow identity, applicable standard, or a change exceeding the dataset owner's significance threshold |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-22221` | standard | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, subclass 22221, Evaporated milk. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | CPC 22221 inclusion and explicit exclusions for 22222, 22229, and solid milk or cream; classification context only |
| `codex-cxs-281-1971` | standard | FAO and WHO, Codex Alimentarius, CXS 281-1971, *Standard for Evaporated Milks*, revised 1999 and amended through 2023. https://workspace.fao.org/sites/codex/Standards/CXS%20281-1971/CXS_281e.pdf (retrieved 2026-08-12) | Evaporated-milk identity; direct-consumption and further-processing scope; partial-water-removal route; permitted milk-derived material categories; declared composition-class conformance. Composition limits and quality criteria are not used as universal LCI amounts |
| `codex-cxs-206-1999` | standard | FAO and WHO, Codex Alimentarius, CXS 206-1999, *General Standard for the Use of Dairy Terms*, amended 2022. https://workspace.fao.org/sites/codex/Standards/CXS%20206-1999/CXS_206e.pdf (retrieved 2026-08-12) | Milk-product, reconstituted-product, and recombined-product identity; milk-species and processing-route disclosure; prevention of non-milk substitution being treated as evaporated milk |
| `eu-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint method. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Life-cycle dataset modelling, allocation hierarchy, representativeness, precision, disclosure, and data-quality review; no generic PEF numeric value is adopted as a product-specific LCI amount |
| `eu-fdm-bat-2019-2031` | official_guidance | European Commission, Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Dairy-process environmental inventory and monitoring context for water, energy, raw materials, wastewater, waste gas, residues, process flow sheets, and cleaning; BAT performance levels are not adopted as universal LCI values or as a claim of regulatory applicability |
