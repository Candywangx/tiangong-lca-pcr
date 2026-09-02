---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-waterproof-footwe-77c37fd8
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Footwear with outer soles and uppers of rubber or plastics, other than waterproof footwear or sports footwear

## 1. Scope and Applicability

This PCR governs foreground manufacturing data packages for finished footwear whose outer sole and upper are both made of rubber or plastics and that is neither waterproof footwear nor sports footwear. It covers open- or closed-toed non-sports footwear within CPC 3.0 subclass 29320, including separately formed synthetic uppers with moulded or cemented soles and one-piece injection-moulded casual footwear. Each data package shall declare the product style, reference size, bill of materials (BOM), material formulation, manufacturing route, site, geography, and reporting period.

The default foreground boundary begins with purchased polymer or rubber compounds, sheets, finished components, chemicals, energy, water, and packaging received at the manufacturing site. It includes every on-site component-forming step, upper cutting or welding, sole or complete-footwear moulding, curing where used, assembly, finishing, inspection, scrap handling, and sales packaging, and ends with conforming finished footwear ready for dispatch at the factory gate. Upstream production of purchased inputs and off-site waste treatment are represented by linked datasets.

Waterproof footwear, sports footwear, footwear with leather or textile uppers, protective-metal-toe footwear classified elsewhere, orthopaedic footwear, skating boots, and separately sold footwear parts are excluded. Distribution, retail, use, repair, and end-of-life are outside the default foreground boundary. Waterproof performance is not inferred from rubber or plastic construction; any product marketed or tested as waterproof belongs outside this PCR.

The representative route is a closed-toed casual shoe with a PVC-coated, textile-backed plastic upper, an EVA midsole, and a moulded synthetic-rubber outer sole assembled with polyurethane adhesive. The process inventory also includes a conditional one-piece PVC injection-moulding route. A conforming data package shall replace non-applicable representative cards with `not_applicable` and shall add a separate atomic card for every actual material, chemical, utility, waste, and elementary emission.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-waterproof-footwe-77c37fd8 |
| classification_refs | CPC 3.0: 29320, exact |
| covered_products | Finished non-waterproof, non-sports footwear whose outer sole and upper are both rubber or plastics; open- or closed-toed; separately assembled or one-piece moulded |
| excluded_products | Waterproof footwear; sports footwear; footwear with leather or textile uppers; protective-metal-toe footwear outside CPC 29320; orthopaedic footwear; skating boots; separately sold footwear parts |
| representative_product | One pair of closed-toed non-sports casual shoes with a PVC-coated plastic upper, EVA midsole, and synthetic-rubber outer sole |
| production_route | Polymer-sheet cutting or welding and upper forming; rubber or plastic sole forming; lasting or direct assembly; adhesive application; finishing, inspection, and packing; or declared one-piece injection moulding |
| market_state | Conforming finished footwear at the factory gate, before distribution |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide non-waterproof, non-sports footwear with rubber or plastic outer soles and uppers that protects the feet from the ground and meets the declared product specification |
| How much | One pair of footwear defined by the product BOM and declared reference size |
| How well | Conforming and in good condition for the declared casual, town, school, infant, indoor, or equivalent non-sports use, with declared construction and quality test results |
| How long or cycle | One use; duration of service and number of uses are declared separately when the data package supports a full life-cycle study |
| reference_flow_link | The reference flow is one conforming pair; record its measured mass `m_pair` in kg excluding detachable sales packaging, and report inventory per pair with a reversible per-kg normalization |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s), representing one conforming matched pair |
| Reference product flow | Footwear with outer soles and uppers of rubber or plastics, excluding waterproof and sports footwear |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | CPC 29320 confirmation; rubber or plastic upper material and formulation; rubber or plastic outer-sole material and formulation; confirmation that the product is neither waterproof nor sports footwear; open- or closed-toed style; intended use; reference size; pair mass excluding sales packaging; BOM; assembly or moulding route; manufacturing site and geography; reporting period; product quality specification; rejected-pair treatment |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_pair_count` | conforming finished footwear | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count one matched left-and-right pair as one item after final inspection; record single shoes only after matching the left and right shoes into a pair. |
| `reference_pair_mass` | conforming finished pair | Mass | kg | Weigh the complete pair after conditioning, exclude detachable sales packaging, and retain reference size, sample count, arithmetic mean, and scale resolution as `m_pair`. |
| `pair_mass_conversion` | pair-to-mass reporting | Mass | kg/pair | Divide each per-pair exchange by `m_pair` for per-kg reporting; preserve the original pair inventory and `m_pair` so conversion is reversible. |
| `component_mass_basis` | compounds, sheets, components, product, and solid waste | Mass | kg | Record gross input, conforming incorporated mass, recoverable regrind or offcut, reject, and disposed mass by specific material and fate; do not hide losses inside product net mass. |
| `energy_unit_preservation` | electricity and fuel inputs | Energy or net calorific value | kWh for electricity; MJ for fuel | Preserve metered units and conversion factors. Electricity, purchased heat, steam, and each fuel are separate exchanges. |
| `water_unit_preservation` | process and cooling water | Volume | m3 | Record supplied water and discharged water separately by source and treatment route; document any recirculated volume without counting it again as a boundary input. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased rubber or plastic compounds, sheets, finished components, chemicals, utilities, water, and packaging are received, identified, and accepted at the footwear manufacturing site gate |
| starting_condition_role | Foreground gate-to-gate starting condition for component production and final footwear manufacture |
| product_classification_scope | CPC 3.0 subclass 29320 only |
| recursive_input_rule | If partially finished or finished CPC 29320 footwear enters the system, record it as one explicit product input with a linked upstream dataset; do not recreate the same category recursively inside this foreground boundary. |
| upstream_dataset_requirement | Each purchased material, component, chemical, utility, packaging item, and off-site waste-treatment service requires a geographically and technologically representative upstream dataset or a disclosed data gap. |
| disclosure | Declare on-site and purchased component steps, contract manufacturing, BOM and reference size, rubber and plastic formulations, recycled-content and regrind handling, process and assembly losses, energy and water allocation, VOC and particulate controls, reject fate, packaging inclusion, and every excluded process. |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground footwear manufacturing | Include receipt and internal handling, on-site upper and bottom-component formation, one-piece moulding when used, assembly, finishing, inspection, scrap handling, and sales packaging through conforming footwear at the factory gate. | `afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982` |
| `boundary_route_specificity` | manufacturing route | Identify whether the product uses separately formed and assembled components, directly moulded-on soles, or one-piece injection moulding; include only actual steps and keep each purchased component visible. | `unido-ilo-footwear-1982` |
| `boundary_bom_and_losses` | material and component accounting | Maintain a product-specific BOM and disaggregate each manufacturing step with its own input, conforming output, leftover, processing loss, assembly loss, and reject records. | `afw-pefcr-v3-1-2025` |
| `boundary_data_gaps` | exclusions and missing data | Disclose every excluded attributable flow and missing dataset; do not represent a data gap as zero. | `afw-pefcr-v3-1-2025`; `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `polymer_upper_forming` | Plastic or rubber upper cutting, welding, and forming | conditional | Include for separately formed uppers; exclude for a complete one-piece moulded product. | foreground component manufacturing | kg conforming upper assembly |
| `bottom_component_forming` | Rubber or plastic sole and midsole forming | conditional | Include when an outsole, midsole, or other bottom component is formed on site; otherwise record the purchased component at final assembly. | foreground component manufacturing | kg conforming component by material and component type |
| `one_piece_moulding` | One-piece plastic footwear injection moulding | conditional | Include only when the upper and outer sole are produced together in one moulding cycle. | foreground complete-product moulding | one conforming pair and measured pair mass |
| `final_assembly_and_packaging` | Assembly, finishing, inspection, and packing | required | Always include; for one-piece footwear it may contain only trimming, optional fitting, finishing, inspection, and packing. | foreground final manufacturing | one conforming pair and measured pair mass |

### Process: Plastic or rubber upper cutting, welding, and forming (`polymer_upper_forming`)

#### Inputs

##### Product flows

###### PVC-coated synthetic upper sheet (`upper_pvc_sheet_input`)

Record the plasticized PVC sheet used for the exterior upper, including its declared backing and coating construction.

- Selected flow: PVC-coated synthetic upper sheet
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass issued to upper cutting and forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming upper assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982`

###### Polyester upper backing fabric (`upper_polyester_backing_input`)

Record the woven polyester backing only when it is supplied separately from the PVC coating.

- Selected flow: Woven polyester upper backing fabric
- Flow property / unit: Mass / kg
- Amount rule: measured accepted backing-fabric mass issued to lamination or upper forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming upper assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `unido-ilo-footwear-1982`

###### Electricity for upper forming (`upper_electricity_input`)

Record electricity for cutting, high-frequency welding, forming, sewing when present, and local extraction.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: process submeter reading or documented machine-time allocation from the site meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming upper assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `unido-ilo-footwear-1982`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed PVC upper assembly (`formed_pvc_upper_output`)

Record only inspected upper assemblies transferred to final assembly.

- Selected flow: Formed PVC upper assembly
- Flow property / unit: Mass / kg
- Amount rule: measured conforming upper-assembly mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per upper-forming reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `unido-ilo-footwear-1982`

##### Waste flows

###### PVC upper cutting scrap (`pvc_upper_cutting_scrap_output`)

Keep internally reused offcut, external recycling, energy recovery, and disposal quantities distinguishable by fate.

- Selected flow: PVC-coated upper-sheet cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: measured cutting and rejected-upper mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming upper assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Rubber or plastic sole and midsole forming (`bottom_component_forming`)

#### Inputs

##### Product flows

###### Styrene-butadiene rubber outsole compound (`bottom_sbr_compound_input`)

Record the formulated SBR compound only for an on-site synthetic-rubber outsole route.

- Selected flow: Styrene-butadiene rubber outsole compound
- Flow property / unit: Mass / kg
- Amount rule: measured accepted compound charged to outsole forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming SBR outsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### EVA midsole compound (`bottom_eva_compound_input`)

Record EVA compound only when a foam midsole is formed at the reporting site.

- Selected flow: Ethylene-vinyl acetate midsole compound
- Flow property / unit: Mass / kg
- Amount rule: measured accepted EVA compound charged to midsole forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming EVA midsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### PVC outsole compound (`bottom_pvc_compound_input`)

Record PVC compound only for a separately moulded or directly moulded-on PVC outsole.

- Selected flow: Plasticized PVC outsole compound
- Flow property / unit: Mass / kg
- Amount rule: measured accepted PVC compound charged to outsole moulding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming PVC outsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `unido-ilo-footwear-1982`

###### Electricity for bottom-component forming (`bottom_electricity_input`)

Record electricity for mixing, preforming, injection or compression moulding, trimming, and extraction.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: process submeter reading or documented machine-time allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming bottom component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982`

###### Natural gas for curing heat (`bottom_natural_gas_input`)

Record natural gas only when it is directly burned for rubber curing or mould heating; do not combine it with electricity.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured fuel volume converted with the recorded net calorific value and allocated to the line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming cured outsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `unido-ilo-footwear-1982`

###### Cooling water for bottom-component forming (`bottom_cooling_water_input`)

Record make-up cooling water crossing the boundary, excluding recirculated internal volume.

- Selected flow: Process cooling water
- Flow property / unit: Volume / m3
- Amount rule: inlet meter or tank-balance make-up volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming bottom component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed SBR outsole (`formed_sbr_outsole_output`)

Record conforming SBR outsoles transferred from forming to final assembly.

- Selected flow: Formed styrene-butadiene rubber outsole
- Flow property / unit: Mass / kg
- Amount rule: measured conforming SBR outsole mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-component reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `unido-ilo-footwear-1982`

###### Formed EVA midsole (`formed_eva_midsole_output`)

Record conforming EVA midsoles transferred from forming to final assembly.

- Selected flow: Formed ethylene-vinyl acetate midsole
- Flow property / unit: Mass / kg
- Amount rule: measured conforming EVA midsole mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-component reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `afw-pefcr-v3-1-2025`

###### Formed PVC outsole (`formed_pvc_outsole_output`)

Record conforming PVC outsoles transferred from moulding to final assembly.

- Selected flow: Formed plasticized PVC outsole
- Flow property / unit: Mass / kg
- Amount rule: measured conforming PVC outsole mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-component reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `unido-ilo-footwear-1982`

##### Waste flows

###### SBR trimming scrap (`rubber_trimming_scrap_output`)

Record SBR flash, trimming, and rejected outsoles as one material-specific waste flow.

- Selected flow: Styrene-butadiene rubber outsole trimming scrap
- Flow property / unit: Mass / kg
- Amount rule: measured SBR flash, trimming, and rejected-outsole mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming SBR outsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

###### EVA moulding scrap (`eva_moulding_scrap_output`)

Record EVA flash, trimming, and rejected midsoles separately from rubber and PVC wastes.

- Selected flow: Ethylene-vinyl acetate midsole moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: measured EVA flash, trimming, and rejected-midsole mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming EVA midsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

###### PVC outsole moulding scrap (`pvc_moulding_scrap_output`)

Record PVC runners, flash, trimming, and rejected outsoles, including the portion sent to internal regrind.

- Selected flow: Plasticized PVC outsole moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: measured PVC runner, flash, trimming, and rejected-outsole mass by reuse and external fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming PVC outsole
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `unido-ilo-footwear-1982`

###### Bottom-component cooling wastewater (`bottom_cooling_wastewater_output`)

Record cooling-system blowdown or discharged cooling water separately from water that remains in internal recirculation.

- Selected flow: Bottom-component cooling wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured blowdown and discharged cooling-water volume by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming bottom component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-ecolabel-footwear-2016`

##### Elementary flows

### Process: One-piece plastic footwear injection moulding (`one_piece_moulding`)

#### Inputs

##### Product flows

###### PVC compound for one-piece moulding (`moulding_pvc_compound_input`)

Record the specific plasticized PVC formulation used to mould the complete footwear body.

- Selected flow: Plasticized PVC footwear moulding compound
- Flow property / unit: Mass / kg
- Amount rule: measured accepted PVC compound charged to the one-piece footwear mould
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming one-piece PVC footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `unido-ilo-footwear-1982`

###### Electricity for one-piece moulding (`moulding_electricity_input`)

Record electricity consumed by the injection-moulding cell and directly attributable auxiliaries.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: injection-moulding-cell submeter reading or documented machine-time allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming one-piece PVC footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `unido-ilo-footwear-1982`

###### Cooling water for one-piece moulding (`moulding_cooling_water_input`)

Record only cooling-water make-up that crosses the foreground boundary.

- Selected flow: Injection-moulding cooling water
- Flow property / unit: Volume / m3
- Amount rule: measured make-up water crossing the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming one-piece PVC footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `unido-ilo-footwear-1982`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### One-piece PVC footwear (`one_piece_pvc_footwear_output`)

Record complete moulded pairs that pass the moulding-stage inspection.

- Selected flow: One-piece injection-moulded PVC footwear
- Flow property / unit: Number of pairs / pair
- Amount rule: counted conforming pairs and measured pair mass transferred to final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per moulding reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `unido-ilo-footwear-1982`

##### Waste flows

###### One-piece PVC moulding flash (`one_piece_pvc_flash_output`)

Record the PVC runner, sprue, flash, and rejected moulding generated by this route.

- Selected flow: One-piece PVC footwear moulding flash
- Flow property / unit: Mass / kg
- Amount rule: measured runner, sprue, flash, and rejected-moulding mass, separated into internal regrind and each external fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming one-piece PVC footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `unido-ilo-footwear-1982`

###### One-piece moulding cooling wastewater (`moulding_cooling_wastewater_output`)

Record moulding cooling-system blowdown or discharge by its actual treatment route.

- Selected flow: One-piece moulding cooling wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured blowdown and discharged cooling-water volume by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming one-piece PVC footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-ecolabel-footwear-2016`

##### Elementary flows

### Process: Assembly, finishing, inspection, and packing (`final_assembly_and_packaging`)

#### Inputs

##### Product flows

###### Formed PVC upper (`assembly_formed_upper_input`)

Record the conforming formed upper entering lasting or final assembly, whether produced on site or purchased.

- Selected flow: Formed PVC upper assembly
- Flow property / unit: Mass / kg
- Amount rule: measured accepted upper-assembly mass issued to lasting and assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `unido-ilo-footwear-1982`

###### SBR outsole (`assembly_sbr_outsole_input`)

Record the conforming SBR outsole entering final assembly.

- Selected flow: Formed styrene-butadiene rubber outsole
- Flow property / unit: Mass / kg
- Amount rule: measured accepted SBR outsole mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### EVA midsole (`assembly_eva_midsole_input`)

Record the conforming EVA midsole incorporated in the declared product style.

- Selected flow: Formed ethylene-vinyl acetate midsole
- Flow property / unit: Mass / kg
- Amount rule: measured accepted EVA midsole mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### PVC outsole (`assembly_pvc_outsole_input`)

Record the conforming PVC outsole only for styles that use this bottom construction.

- Selected flow: Formed plasticized PVC outsole
- Flow property / unit: Mass / kg
- Amount rule: measured accepted PVC outsole mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `unido-ilo-footwear-1982`

###### Polyurethane footwear adhesive (`assembly_pu_adhesive_input`)

Record formulated polyurethane adhesive separately from primer, cleaner, and finish.

- Selected flow: Polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts minus closing stock and separately measured recovery, reconciled to the product order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_chemicals`
- Sources: `unido-ilo-footwear-1982`; `eu-ecolabel-footwear-2016`

###### Polyurethane footwear primer (`assembly_pu_primer_input`)

Record the specific polyurethane primer used to prepare the upper or sole bonding surface.

- Selected flow: Polyurethane footwear primer
- Flow property / unit: Mass / kg
- Amount rule: stock-balance consumption of primer reconciled to the product order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_chemicals`
- Sources: `unido-ilo-footwear-1982`; `eu-ecolabel-footwear-2016`

###### Polyester shoelace (`assembly_polyester_lace_input`)

Record polyester laces only for laced styles; do not substitute another fastening component in this card.

- Selected flow: Polyester shoelace
- Flow property / unit: Mass / kg
- Amount rule: measured mass of accepted shoelaces incorporated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Cardboard shoe box (`assembly_cardboard_box_input`)

Record the sales shoe box separately from tissue paper and every other packaging component.

- Selected flow: Cardboard shoe box
- Flow property / unit: Mass / kg
- Amount rule: measured box mass multiplied by boxes consumed, including damaged boxes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming finished pair packed for sale
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Tissue wrapping paper (`assembly_tissue_paper_input`)

Record tissue paper separately from the shoe box and any plastic accessory.

- Selected flow: Tissue wrapping paper
- Flow property / unit: Mass / kg
- Amount rule: measured sheet mass multiplied by sheets consumed, including damaged sheets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming finished pair packed for sale
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity for final assembly (`assembly_electricity_input`)

Record electricity for lasting, surface preparation, adhesive activation, pressing, finishing, inspection, and packing.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: process submeter reading or documented allocation from the site meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished rubber-or-plastic footwear (`finished_footwear_output`)

Count only pairs that meet the declared specification and inspection criteria.

- Selected flow: Footwear with outer soles and uppers of rubber or plastics, excluding waterproof and sports footwear
- Flow property / unit: Number of pairs / pair
- Amount rule: counted conforming pairs with measured `m_pair`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one reference pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

###### Rejected rubber-or-plastic footwear (`rejected_footwear_output`)

Record finished pairs that fail the declared specification and leave the process for a stated fate.

- Selected flow: Rejected rubber-and-plastic footwear
- Flow property / unit: Mass / kg
- Amount rule: measured rejected finished-pair mass by repair, rework, material recovery, energy recovery, and disposal fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

###### Spent polyurethane adhesive (`spent_pu_adhesive_output`)

Record cured and uncured polyurethane adhesive residue as a chemical-specific waste flow.

- Selected flow: Spent polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: measured cured and uncured adhesive residue sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-ecolabel-footwear-2016`

##### Elementary flows

###### Volatile organic compounds to air (`assembly_voc_air_output`)

Record NMVOC released from the actual adhesive, primer, cleaner, or finishing route after accounting for capture.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack or workplace-extraction result, or chemical mass balance using product-specific solvent content and captured-waste records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-ecolabel-footwear-2016`

###### Particulate matter from buffing to air (`assembly_particulate_air_output`)

Record particulate matter released by sole or upper buffing after subtracting dust retained by the collection system.

- Selected flow: Particulate matter from footwear buffing to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or material balance after subtracting captured buffing dust
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming finished pair
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `unido-ilo-footwear-1982`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | all foreground processes | Prefer direct measurement, physical subdivision, and separate submetering. Allocate shared inputs or emissions only when subdivision is not feasible. | `eu-pef-method-2021` |
| `allocation_shared_energy` | shared equipment and site utilities | Allocate shared electricity and fuel using causal machine operating time multiplied by measured or rated load; disclose the meter, period, allocation driver, and unallocated balance. | `afw-pefcr-v3-1-2025` |
| `allocation_material_regrind` | internal PVC, EVA, or rubber regrind | Record material sent to regrinding and material returned to a later charge as two linked internal quantities; count only make-up virgin or externally supplied material at the system boundary and disclose quality loss. | `afw-pefcr-v3-1-2025`; `unido-ilo-footwear-1982` |
| `allocation_waste_fate` | scrap, rejects, wastewater, and chemical residue | Split quantities by actual reuse, recycling, recovery, treatment, and disposal fate. Do not give an avoided-product credit inside the gate-to-gate foreground package unless the downstream study explicitly applies an accepted allocation or circular-footprint method. | `afw-pefcr-v3-1-2025`; `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference_product` | `final_assembly_and_packaging` | conforming and rejected pair output | production, inspection, and scale records | style_id; size; conforming_pairs; rejected_pairs; pair_mass_kg; scale_id; disposition | reconcile line count with inspection disposition and weigh a documented sample of conditioned pairs | pair; kg | each lot, aggregated monthly | complete reporting period | all included assembly lines | sum counts; arithmetic mean pair mass by style and reference size; retain rejects separately | signed production reconciliation, calibration record, and inspection log |
| `cp_bom_materials` | all foreground processes | compounds, sheets, components, and trims | approved BOM, issue, return, and stock records | material_id; formulation; supplier; lot; opening_stock; receipts; issue; return; closing_stock; component_mass | reconcile approved BOM to material issue and stock movement by atomic material | kg | each production order, aggregated monthly | complete reporting period | all included component and assembly sites | opening plus receipts minus closing minus documented returns; no cross-material aggregation | approved BOM revision, supplier specification, and stock reconciliation |
| `cp_process_energy` | all foreground processes | electricity and natural gas | submeter, fuel invoice, and machine-hour records | meter_id; start; end; fuel_volume; net_calorific_value; machine_id; operating_hours; rated_load; output | use submetered consumption; otherwise document causal machine-time allocation | kWh; MJ | continuous or each shift, aggregated monthly | complete reporting period | all included processes and shared utilities | subtract verified non-production load; allocate only the remaining shared balance | meter calibration, invoice reconciliation, and allocation worksheet |
| `cp_process_water` | `bottom_component_forming`; `one_piece_moulding` | cooling-water input and wastewater output | inlet meter, make-up tank, blowdown, and discharge records | inlet_m3; recirculated_m3; blowdown_m3; discharge_m3; treatment_route | meter make-up and discharge; identify recirculated water without double counting | m3 | daily or each batch, aggregated monthly | complete reporting period | all included moulding and curing lines | sum boundary make-up and discharge by route; reconcile water balance | meter calibration, water balance, and treatment receipt |
| `cp_process_outputs` | all foreground processes | conforming component output | transfer and inspection records | component_id; material; good_mass; reject_mass; transfer_lot | weigh accepted component transfer and reconcile with rejects | kg; pair | each lot, aggregated monthly | complete reporting period | all included lines | sum conforming output by material and component identity | signed transfer and inspection records |
| `cp_process_chemicals` | `final_assembly_and_packaging` | adhesive and primer consumption | formulation, safety data, stock, and container records | product_id; solvent_fraction; opening_stock; receipts; closing_stock; returned_product; residue | chemical-specific stock balance reconciled with used and waste containers | kg | each production order, aggregated monthly | complete reporting period | all adhesive and primer stations | calculate each chemical separately; never combine adhesive, primer, cleaner, or finish | current formulation/SDS, stock reconciliation, and waste manifest |
| `cp_packaging_materials` | `final_assembly_and_packaging` | cardboard box and tissue paper | packaging BOM, count, mass, and damage records | packaging_id; unit_mass; issued_count; returned_count; damaged_count | weigh each packaging component and reconcile issued counts | kg; item | each packaging order, aggregated monthly | complete reporting period | all packing lines | unit mass times net consumed count, by packaging component | scale calibration and packaging issue record |
| `cp_waste_and_emissions` | all foreground processes | solid waste, chemical residue, VOC, and particulate emission | segregated bin weights, waste manifests, chemical balance, stack or extraction tests | row_id; waste_mass; fate; treatment_provider; solvent_input; solvent_waste; captured_dust; measured_emission | measure each material-specific waste; derive emissions only with a documented calculation rule when direct measurement is unavailable | kg | each collection event or test, aggregated monthly | complete reporting period with representative emission tests | all included processes and control devices | sum by atomic flow and fate; reconcile calculated emissions with inputs and captured output | calibrated scale/test report, chemical composition, waste manifest, and mass-balance worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_pair_mass_normalization` | all exchanges | `amount_per_kg = amount_per_pair / m_pair`; retain the original per-pair result. | exchange amount per pair; `m_pair` | exchange per kg finished footwear | `afw-pefcr-v3-1-2025` |
| `calc_material_reconciliation` | each compound, sheet, component, and chemical | `consumption = opening stock + receipts - closing stock - documented return`; compare with conforming incorporated mass plus each waste fate. | stock movements; output; waste | reconciled material consumption and closure difference | `afw-pefcr-v3-1-2025` |
| `calc_step_yield` | each component-forming step | `yield = conforming output mass / accepted input mass`; report rather than hiding the complementary loss. | accepted input; conforming output; material-specific losses | step yield and unreconciled loss | `afw-pefcr-v3-1-2025` |
| `calc_shared_energy` | shared electricity or fuel | `allocated energy = shared metered energy × causal driver share`; driver share uses machine hours × measured or rated load. | shared meter; operating time; load; output | energy by process and reference pair | `afw-pefcr-v3-1-2025` |
| `calc_water_balance` | cooling-water systems | `balance difference = make-up water - discharge - evaporation - water retained in output`; recirculated water is memorandum information only. | make-up; discharge; evaporation estimate; retained water | water-balance closure | `eu-pef-method-2021` |
| `calc_voc_mass_balance` | adhesive and primer use | `VOC to air = solvent-containing input - solvent in product - captured solvent waste - solvent sent to wastewater`; use direct measurement when available. | chemical consumption and solvent fraction; captured waste; wastewater | NMVOC emission by chemical route | `eu-ecolabel-footwear-2016` |
| `calc_packaging_mass` | each sales-packaging component | `packaging mass = unit mass × net consumed count`; keep damaged items in consumption and waste records. | unit mass; issued, returned, and damaged counts | packaging input per conforming pair | `afw-pefcr-v3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Confirm CPC 29320 scope and document both upper and outer-sole materials, the non-waterproof and non-sports exclusions, style, size, route, and pair mass. | approved product specification, labelling record, BOM, and inspection record |
| `dq_bom_coverage` | product BOM | Provide primary data for at least 95% of BOM mass and 100% of main upper, sole, midsole, lining, metal, and electronic parts; disclose the treatment of every residual share. | BOM coverage calculation and supplier specifications |
| `dq_atomicity` | inventory | Every selected flow is one specific material, component, utility, waste, or elementary emission; route alternatives remain separate cards. | row-level inventory review against issue, meter, and waste records |
| `dq_temporal` | foreground records | Use a complete, representative reporting period, normally 12 consecutive months; disclose shutdowns, start-ups, abnormal batches, and shorter periods. | period reconciliation and production calendar |
| `dq_mass_balance` | each forming and assembly step | Reconcile atomic material input to conforming output, internal regrind, off-site recycling, other recovery, disposal, and unexplained difference. | signed step mass balance |
| `dq_energy_water` | utilities | Reconcile process totals to site meters and invoices; disclose allocation drivers and the residual unallocated balance. | meter, invoice, and allocation reconciliation |
| `dq_emissions` | VOC and particulate emissions | Retain test conditions, chemical composition, control-device status, calculation inputs, and captured-waste evidence; do not report an unmeasured data gap as zero. | accredited or documented test report and mass-balance worksheet |
| `dq_background_links` | purchased inputs and off-site treatment | Link geographically and technologically representative datasets or disclose a specific unresolved dataset gap. | dataset identifiers and representativeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | Fail if both upper and outer sole are not declared as rubber or plastics, or if the product is waterproof footwear, sports footwear, or another excluded category. | `afw-pefcr-v3-1-2025` |
| `validate_reference_flow` | reference flow | Fail if one conforming pair, reference size, `m_pair`, BOM revision, manufacturing route, site, and reporting period are not all declared. | `afw-pefcr-v3-1-2025` |
| `validate_process_route` | process map | Require either the separately formed component route or the one-piece moulding route, plus final inspection and packing; reject mutually inconsistent route selections. | `unido-ilo-footwear-1982` |
| `validate_bom_and_losses` | material inventory | Fail if main materials are aggregated, BOM coverage is below the declared requirement without disclosure, or a process input is not reconciled to conforming output and material-specific loss. | `afw-pefcr-v3-1-2025` |
| `validate_atomic_flows` | all inventory rows | Fail any collection label, combined energy carrier, combined chemical, combined packaging material, combined waste, or combined emission used as a selected flow. | `afw-pefcr-v3-1-2025` |
| `validate_energy_water` | utilities | Require electricity, each fuel, water input, and wastewater output to be separate rows with meter, period, allocation, and normalization evidence. | `afw-pefcr-v3-1-2025`; `eu-pef-method-2021` |
| `validate_voc` | adhesive and primer route | Require separate chemical consumption and VOC calculation or measurement evidence when solvent-containing adhesive, primer, cleaner, or finish is used. | `eu-ecolabel-footwear-2016` |
| `validate_unresolved_identities` | reference and inventory flows | Treat every unresolved Tiangong UUID in manifest review metadata as a publication blocker, but do not substitute a narrower or collection-level flow identity. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site- and product-specific foreground manufacturing dataset for non-waterproof, non-sports rubber-or-plastic footwear |
| downstream_use | May be linked as a `secondary_dataset` or `background_dataset` in product systems whose footwear identity, route, geography, technology, and period are compatible |
| allowed_use | Gate-to-gate manufacturing models; supplier-specific component studies; downstream cradle-to-gate or full life-cycle models that add compatible upstream and downstream stages |
| excluded_use | Waterproof footwear; sports footwear; footwear with leather or textile uppers; generic footwear averages without a representativeness assessment; direct public comparative claims without the applicable PEF/PCR verification |
| required_metadata | Canonical PCR id; CPC scope; product style and intended use; upper and outer-sole formulations; reference size; pair mass; BOM revision and coverage; route and technology; site and geography; reporting period; on-site versus purchased components; allocation methods; regrind and waste fates; unresolved data gaps |
| required_quality_disclosure | Primary-data share; meter and scale coverage; BOM completeness; step mass-balance closure; energy and water allocation; VOC and particulate method; background dataset representativeness; exclusions; uncertainty and unresolved identities |
| update_trigger | Material or formulation change; waterproof or sports-use reclassification; route, site, supplier, technology, energy mix, water system, emission control, allocation, or waste-fate change; reporting period rollover; material data-quality change; or resolution of a Tiangong UUID gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `afw-pefcr-v3-1-2025` | official_guidance | Product Environmental Footprint Category Rules (PEFCR): Apparel and Footwear, Version 3.1, 29 April 2025, Technical Secretariat supported by the European Commission. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf | one-pair functional unit; BOM coverage and sizing; footwear process decomposition; manufacturing losses; foreground data collection; electricity, allocation, packaging, data quality, and verification rules |
| `unido-ilo-footwear-1982` | official_guidance | UNIDO/ILO Technical Memorandum No. 2, Small-scale Manufacture of Footwear, 1982, ISBN 92-2-103079-2. https://www.unido.org/publications/ot/9648584/pdf | welded synthetic-upper and moulded-sole route; stitched synthetic-upper route; one-piece PVC injection moulding; upper, sole, assembly, trimming, regrind, inspection, and packing process decomposition |
| `eu-ecolabel-footwear-2016` | standard | Commission Decision (EU) 2016/1349 of 5 August 2016 establishing ecological criteria for the award of the EU Ecolabel for footwear, with official application materials. https://eur-lex.europa.eu/eli/dec/2016/1349/oj | footwear chemical and production-pollution controls; VOC and wastewater evidence; durability and quality disclosure |
| `eu-pef-method-2021` | standard | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj | system boundary, data gaps, allocation hierarchy, company-specific data, water balance, dataset quality, and verification principles |
