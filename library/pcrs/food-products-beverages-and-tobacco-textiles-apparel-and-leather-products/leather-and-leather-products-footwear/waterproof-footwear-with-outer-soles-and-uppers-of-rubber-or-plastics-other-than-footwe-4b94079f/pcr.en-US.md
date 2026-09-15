---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.waterproof-footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-footwe-4b94079f
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Waterproof footwear with rubber or plastic outer soles and uppers, without a protective metal toe-cap

## 1. Scope and Applicability

This PCR applies to factory-gate production of waterproof footwear whose outer sole and upper are rubber or plastics and that does not incorporate a protective metal toe-cap. It covers integral moulded footwear and separately formed waterproof uppers and soles, including declared linings, sealing systems, finishes, and sales packaging. It excludes protective-metal-toe footwear, non-waterproof footwear, products outside the declared upper/sole materials, and downstream distribution, use, repair, and end-of-life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.waterproof-footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-footwe-4b94079f |
| classification_refs | CPC 3.0: 29310, exact classification reference |
| covered_products | Waterproof boots and other waterproof footwear with rubber or plastic outer soles and uppers, made by integral moulding, component forming and assembly, dipping, vulcanization, or an equivalent declared route. |
| excluded_products | Footwear incorporating a protective metal toe-cap; non-waterproof footwear; footwear without both a rubber-or-plastic upper and a rubber-or-plastic outer sole; upstream operations not performed at the reporting site; downstream distribution, use, and end-of-life. |
| representative_product | Quality-accepted factory-gate waterproof footwear with declared size, construction, upper and sole polymers, lining, finish, sealing system, and packaging. |
| production_route | Purchased or on-site compounded materials → upper, sole, or integral-shell forming → lining, assembly, and sealing → finishing and waterproof testing → final inspection and packaging. |
| market_state | Finished, quality-accepted, packaged factory-gate footwear; packaging is separate from net reference-product mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate supply of waterproof footwear with rubber or plastic outer soles and uppers and no protective metal toe-cap. |
| How much | 1 kg net mass of quality-accepted finished footwear, excluding separately inventoried packaging. |
| How well | Meets the declared product specification and waterproof quality test, with declared construction, polymer composition, size basis, and absence of a protective metal toe-cap. |
| How long or cycle | One factory-gate manufacturing output; no service-life or wear-duration claim. |
| reference_flow_link | `reference_footwear_output` in process `p5_packaging`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Waterproof footwear, with outer soles and uppers of rubber or plastics, other than footwear incorporating a protective metal toe-cap `c419cb3e-b7f4-44b5-9f7c-ed1ebfc6260b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | footwear form; size range and count represented by 1 kg; upper polymer; outer-sole polymer; integral or assembled construction; compound source; lining; sealing system; finish; waterproof test and acceptance criterion; confirmation of no protective metal toe-cap; packaging; site; geography; technology; reporting period |

All Required qualifiers shall be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass after final conditioning and acceptance but before packaging; normalize all exchanges to exactly 1 kg reference output. |
| `count_to_mass` | pair or unit records | Mass and count | kg and pair or unit | Convert counts with product- and size-specific measured mass; retain sampling, scale calibration, size weighting, and calculation evidence. |
| `material_mass` | materials, chemicals, components, packaging, products, and solid wastes | Mass | kg | Use calibrated batch, warehouse, scale, or specification records; keep individual materials and waste streams separate. |
| `utility_measurement` | electricity, steam, natural gas, compressed air, and water | Energy, mass, or volume | kWh, MJ, kg, or m3 | Prefer sub-metering; otherwise allocate a complete reporting-period total using Section 7. |
| `conditioning_basis` | product, lining, and compound mass | Mass | kg | Declare conditioning and moisture basis; do not mix wet, conditioned, and dry masses without a documented conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare whether each material enters as an individual compound ingredient, ready-to-form compound, granulate, formed upper or sole, integral shell, lining, or another named component. |
| starting_condition_role | Fixes the first foreground transformation and prevents double counting of supplier operations. |
| product_classification_scope | Finished waterproof footwear in the reviewed semantic scope corresponding exactly to CPC 3.0 code 29310. |
| recursive_input_rule | If finished footwear in the same category enters, record one supplier product input and its supplier dataset; do not recursively unpack it into the same foreground processes. |
| upstream_dataset_requirement | Use traceable upstream datasets for purchased materials, components, utilities, packaging, transport, and waste treatment. Finished leather lining requires supplier data covering tanning; do not add tanning to the footwear foreground unless the site performs it. |
| disclosure | Declare starting condition, routes, supplier-embedded operations, waterproof test, rework, waste destinations, allocation, upstream datasets, exclusions, and data gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground manufacturing | Include every applicable on-site operation from declared inputs through compounding, forming, assembly, sealing, finishing, waterproof testing, inspection, and packaging, with direct utilities, wastes, and emissions. | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `boundary_rule_2` | product scope | Require rubber or plastic outer soles and uppers, declared waterproof performance, and no protective metal toe-cap. | un-cpc-3-0 |
| `boundary_rule_3` | upstream materials | Model supplier production with traceable upstream datasets instead of duplicating supplier operations in the footwear factory foreground. | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `boundary_rule_4` | conditional leather input | A finished-leather lining dataset shall cover relevant tanning chemistry, energy, water, waste, and emissions; tanning is not a mandatory footwear foreground process. | jrc-tanning-bref |
| `boundary_rule_5` | completeness | Record all applicable raw materials, energy, products, wastes, and direct releases to air and water; unresolved UUIDs do not justify omission. | ec-pef-method-2021 |
| `boundary_rule_6` | downstream stages | Exclude distribution, retail, use, repair, and end-of-life unless a downstream lifecyclemodel adds them without double counting. | ec-pef-method-2021; af-pefcr-3-1-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p1_compounding` | On-site polymer and rubber compounding | conditional | Include when individual PVC or rubber ingredients are compounded on site; omit when only purchased ready-to-form compounds are used. | Produce the named accepted output and record direct inputs, wastes, and emissions. | kg accepted compound |
| `p2_component_forming` | Upper, sole, and integral-shell forming | required | Include the actual moulding, dipping, calendering, or vulcanization operations; mark each inapplicable atomic route card not applicable. | Produce the named accepted output and record direct inputs, wastes, and emissions. | kg accepted formed component |
| `p3_assembly_sealing` | Lining, assembly, and waterproof sealing | required | Include actual joining, lining, stitching, bonding, sealing, and curing; integral shells include only completion operations that occur. | Produce the named accepted output and record direct inputs, wastes, and emissions. | kg accepted assembled footwear |
| `p4_finishing_testing` | Surface finishing and waterproof quality testing | required | Include actual cleaning, coating, curing, trimming, inspection, and waterproof testing. | Produce the named accepted output and record direct inputs, wastes, and emissions. | kg accepted footwear before packaging |
| `p5_packaging` | Final inspection and packaging | required | Include final mass determination, pairing or unit counting, packaging, and actual on-site handling fuel. | Produce the named accepted output and record direct inputs, wastes, and emissions. | 1 kg reference product |

### Process: On-site polymer and rubber compounding (`p1_compounding`)

#### Inputs

##### Product flows

###### Polyvinyl chloride resin (`pvc_resin_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Polyvinyl chloride resin
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Acrylonitrile-butadiene rubber (`nbr_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Acrylonitrile-butadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Natural rubber (`natural_rubber_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Natural rubber
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Dioctyl terephthalate (`dotp_plasticizer_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Dioctyl terephthalate
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Calcium carbonate (`calcium_carbonate_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Calcium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Carbon black (`carbon_black_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Carbon black
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Zinc oxide (`zinc_oxide_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Zinc oxide
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Sulfur (`sulfur_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Sulfur
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Electricity, medium voltage (`compounding_electricity_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with documented equipment-time and verified-load records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_compounding_records`

###### Natural gas (`compounding_natural_gas_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced fuel use converted with a documented net calorific value and allocated to the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_compounding_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Plasticized polyvinyl chloride compound for footwear (`plasticized_pvc_compound_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Plasticized polyvinyl chloride compound for footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Compounded rubber for footwear (`rubber_compound_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Compounded rubber for footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

##### Waste flows

###### Waste plasticized polyvinyl chloride compound (`offspec_pvc_compound_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste plasticized polyvinyl chloride compound
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`

###### Waste compounded rubber (`offspec_rubber_compound_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste compounded rubber
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_compounding_records`
##### Elementary flows

###### Particulate matter to air (`compounding_dust_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_compounding_records`

###### Non-methane volatile organic compounds to air (`compounding_nmvoc_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted compound
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_compounding_records`


### Process: Upper, sole, and integral-shell forming (`p2_component_forming`)

#### Inputs

##### Product flows

###### Plasticized polyvinyl chloride compound for footwear (`pvc_compound_forming_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Plasticized polyvinyl chloride compound for footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

###### Compounded rubber for footwear (`rubber_compound_forming_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Compounded rubber for footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

###### Ethylene-vinyl acetate granules (`eva_granules_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Ethylene-vinyl acetate granules
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

###### Thermoplastic polyurethane granules (`tpu_granules_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Thermoplastic polyurethane granules
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

###### Electricity, medium voltage (`forming_electricity_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with documented equipment-time and verified-load records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`

###### Steam (`forming_steam_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered steam or supplier record allocated to the process; declare pressure and condensate treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`

###### Natural gas (`forming_natural_gas_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced fuel use converted with a documented net calorific value and allocated to the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`

###### Process water (`forming_process_water_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process-water volume or a complete water balance allocated to the operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`

###### Aqueous silicone mold-release agent (`silicone_mold_release_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Aqueous silicone mold-release agent
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

###### Refrigerant R-410A (`forming_r410a_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Refrigerant R-410A
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus purchases minus closing stock, recovered amount, and documented transfers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molded waterproof footwear upper (`molded_upper_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Molded waterproof footwear upper
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

###### Molded waterproof footwear outer sole (`molded_outer_sole_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Molded waterproof footwear outer sole
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

###### Integral molded waterproof footwear shell (`integral_footwear_shell_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Integral molded waterproof footwear shell
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

##### Waste flows

###### Waste polyvinyl chloride footwear scrap (`pvc_forming_scrap_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste polyvinyl chloride footwear scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`

###### Waste rubber footwear scrap (`rubber_forming_scrap_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste rubber footwear scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_forming_records`
##### Elementary flows

###### Non-methane volatile organic compounds to air (`forming_nmvoc_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`

###### Refrigerant R-410A to air (`forming_r410a_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Refrigerant R-410A to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`

###### Carbon dioxide, fossil, to air (`forming_co2_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`

###### Nitrogen oxides to air (`forming_nox_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted formed component
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_forming_records`


### Process: Lining, assembly, and waterproof sealing (`p3_assembly_sealing`)

#### Inputs

##### Product flows

###### Molded waterproof footwear upper (`molded_upper_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Molded waterproof footwear upper
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Molded waterproof footwear outer sole (`molded_outer_sole_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Molded waterproof footwear outer sole
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Integral molded waterproof footwear shell (`integral_shell_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Integral molded waterproof footwear shell
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Polyester knitted footwear lining (`polyester_lining_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Polyester knitted footwear lining
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Finished bovine leather footwear lining (`leather_lining_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent. Tanning remains upstream unless it is actually performed at the reporting footwear site.

- Selected flow: Finished bovine leather footwear lining
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass; declare species, finish, supplier, and an upstream dataset covering tanning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`
- Sources: `jrc-tanning-bref`

###### Polyester sewing thread (`polyester_thread_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Vulcanized rubber footwear sealing strip (`rubber_sealing_strip_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Vulcanized rubber footwear sealing strip
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Polyurethane footwear adhesive (`pu_adhesive_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Polyisocyanate adhesive hardener (`isocyanate_hardener_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Polyisocyanate adhesive hardener
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Electricity, medium voltage (`assembly_electricity_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with documented equipment-time and verified-load records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_assembly_records`

###### Compressed air, 700 kPa (`assembly_compressed_air_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Compressed air, 700 kPa
- Flow property / unit: Volume / m3
- Amount rule: Metered volume or calculated volume from verified compressor runtime, load, and delivery records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_assembly_records`

###### Natural gas (`assembly_natural_gas_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced fuel use converted with a documented net calorific value and allocated to the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_assembly_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled waterproof footwear before finishing (`assembled_footwear_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Assembled waterproof footwear before finishing
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

##### Waste flows

###### Waste polyester lining offcuts (`assembly_textile_offcuts_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste polyester lining offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Waste finished bovine leather offcuts (`assembly_leather_offcuts_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste finished bovine leather offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Waste polyurethane footwear adhesive (`assembly_adhesive_waste_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`

###### Defective assembled waterproof footwear (`assembly_reject_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Defective assembled waterproof footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_assembly_records`
##### Elementary flows

###### Non-methane volatile organic compounds to air (`assembly_nmvoc_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_assembly_records`

###### Nitrogen oxides to air (`assembly_nox_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted assembled footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_assembly_records`


### Process: Surface finishing and waterproof quality testing (`p4_finishing_testing`)

#### Inputs

##### Product flows

###### Assembled waterproof footwear before finishing (`assembled_footwear_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Assembled waterproof footwear before finishing
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_testing_records`

###### Process water (`testing_process_water_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process-water volume or a complete water balance allocated to the operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_testing_records`

###### Electricity, medium voltage (`finishing_electricity_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with documented equipment-time and verified-load records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_testing_records`

###### Steam (`finishing_steam_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered steam or supplier record allocated to the process; declare pressure and condensate treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_testing_records`

###### Isopropanol (`isopropanol_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_testing_records`

###### Waterborne polyurethane footwear coating (`waterborne_pu_coating_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waterborne polyurethane footwear coating
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued mass from batch formulation and stock records; retain chemical identity and concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_testing_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished waterproof footwear before packaging (`finished_footwear_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Finished waterproof footwear before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_testing_records`

##### Waste flows

###### Wastewater from waterproof footwear testing (`testing_wastewater_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Wastewater from waterproof footwear testing
- Flow property / unit: Volume / m3
- Amount rule: Measured discharged volume, kept distinct from sampled pollutant concentrations and treatment records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_testing_records`

###### Waste isopropanol (`waste_isopropanol_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_testing_records`

###### Waste waterborne polyurethane coating (`waste_pu_coating_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste waterborne polyurethane coating
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_testing_records`

###### Defective finished waterproof footwear (`finishing_reject_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Defective finished waterproof footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_finishing_testing_records`
##### Elementary flows

###### Non-methane volatile organic compounds to air (`finishing_nmvoc_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted footwear before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_finishing_testing_records`


### Process: Final inspection and packaging (`p5_packaging`)

#### Inputs

##### Product flows

###### Finished waterproof footwear before packaging (`finished_footwear_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Finished waterproof footwear before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured net issued or transferred mass from lot-level warehouse, BOM, and process records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`

###### Electricity, medium voltage (`packaging_electricity_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with documented equipment-time and verified-load records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`

###### Low-sulphur diesel fuel (`packaging_diesel_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Low-sulphur diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoiced fuel use converted with a documented net calorific value and allocated to the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`

###### Low-density polyethylene footwear bag (`ldpe_bag_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Low-density polyethylene footwear bag
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`

###### Corrugated paperboard footwear box (`corrugated_box_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Corrugated paperboard footwear box
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`

###### Paper footwear wrapping tissue (`paper_tissue_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Paper footwear wrapping tissue
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`

###### Paper footwear hangtag (`paper_hangtag_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Paper footwear hangtag
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`

###### Polypropylene packaging strap (`polypropylene_strapping_input`)

Record this one named exchange entering the process when applicable; document not-applicable status when it is absent.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows


###### Finished CPC 29310 waterproof footwear (`reference_footwear_output`)

This is the quality-accepted factory-gate output; packaging mass is inventoried separately and the product incorporates no protective metal toe-cap.

- Selected flow: Waterproof footwear, with outer soles and uppers of rubber or plastics, other than footwear incorporating a protective metal toe-cap `c419cb3e-b7f4-44b5-9f7c-ed1ebfc6260b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg in Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net mass of quality-accepted finished footwear.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Waste low-density polyethylene film (`waste_ldpe_film_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`

###### Waste corrugated paperboard (`waste_corrugated_box_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`

###### Waste paper (`waste_paper_output`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Waste paper
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-transfer mass by material and destination, net of documented in-process reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`
##### Elementary flows

###### Carbon dioxide, fossil, to air (`packaging_co2_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`

###### Nitrogen oxides to air (`packaging_nox_air`)

Record this one named exchange leaving the process when applicable; document not-applicable status when it is absent.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated release from monitored activity and a documented emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | all foreground processes | Avoid allocation by separately metering and subdividing compounding, forming, assembly, finishing, and packaging. | ec-pef-method-2021 |
| `allocation_rule_2` | materials and wastes | Assign batch-specific materials, rejects, rework, and material-specific scrap directly to the product route that caused them. | af-pefcr-3-1-2025 |
| `allocation_rule_3` | shared utilities | Allocate unresolved totals with a physical driver such as metered share or machine time multiplied by verified load; disclose driver and shares. | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `allocation_rule_4` | sizes and styles | Convert counts to measured mass by style and size, then production-weight inventory; do not use unweighted counts when unit masses differ materially. | af-pefcr-3-1-2025 |
| `allocation_rule_5` | internal reuse and recycling | Keep gross input, recovered material, internal reuse, exported waste, and final output visible; do not apply an avoided-burden credit unless a downstream model explicitly requires it. | ec-pef-method-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p1_compounding_records` | `p1_compounding` | ingredients, utilities, compound, waste, emissions | batch sheets; stocks; meters; waste records | batch; formulation; identity; issued mass; output; waste; electricity; fuel; emission activity | Reconcile each formulation batch to material issues and accepted compound. | kg; kWh; MJ; m3 | each batch and monthly | representative period, normally 12 months unless justified | all compounding lines | Normalize reconciled batches to accepted compound. | calibrated scales/meters; batch approval; mass balance |
| `cp_p2_forming_records` | `p2_component_forming` | forming materials, utilities, components, scrap, emissions | machine logs; meters; maintenance logs | machine; mould; material; runtime; utilities; accepted mass; scrap; refrigerant balance | Match materials and utilities to forming batches. | kg; kWh; MJ; m3 | batch or shift | representative period | all forming equipment | Aggregate by component and route, then normalize to accepted mass. | traceability; calibration; scrap destination; refrigerant reconciliation |
| `cp_p3_assembly_records` | `p3_assembly_sealing` | components, linings, joining materials, utilities, waste | BOM; issue and line records; adhesive logs | style; size; component masses; joining materials; utilities; output; waste | Link product BOM and net issue to line output and waste. | kg; kWh; MJ; m3 | lot or shift | representative period | all assembly lines | Preserve integral, assembled, leather-lined, and textile-lined routes. | BOM revision; lot traceability; line balance; waste receipts |
| `cp_p4_finishing_testing_records` | `p4_finishing_testing` | chemicals, test water, utilities, product, wastewater, rejects | recipes; test logs; meters; stocks | lot; chemical; test method; tested/accepted units; utilities; wastewater; rejects | Match finishing and waterproof-test records to accepted output. | kg; unit; kWh; MJ; m3 | each lot and monthly | representative period | all finishing/test stations | Calculate use, discharge, and rejects per accepted mass. | test and meter calibration; recipes; wastewater records |
| `cp_p5_packaging_records` | `p5_packaging` | final mass, counts, packaging, fuel, waste | inspection; scales; packaging specs; invoices | style; size; count; net mass; each packaging mass; electricity; diesel; waste | Measure net product and each packaging item separately. | kg; count; kWh; MJ | each lot and period | representative period | all packing/handling | Normalize to exactly 1 kg net accepted footwear. | scale calibration; specifications; count-to-mass sample; invoices |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all exchanges | normalized exchange = reporting-period exchange × attribution share ÷ net accepted reference mass | exchange; share; mass | exchange per kg | ec-pef-method-2021 |
| `calc_bom_reconciliation` | materials | issued material = accepted incorporation + waste + stock change + recovered material + residual | BOM; issues; output; waste; stocks | material balance | af-pefcr-3-1-2025 |
| `calc_count_to_mass` | count records | product mass = sum of accepted count by style/size × measured mean unit mass | counts; sample masses | kg accepted product | af-pefcr-3-1-2025 |
| `calc_shared_electricity` | shared electricity | allocated electricity = complete meter total × documented meter or machine-time/load share | meter; runtime; load/share | kWh by process | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `calc_fuel_use` | fuels | energy = measured fuel quantity × documented net calorific value | quantity; factor | MJ by process | ec-pef-method-2021 |
| `calc_refrigerant_loss` | R-410A | loss = opening + purchases − closing − recovered − transfers | service/stock records | kg loss | ec-pef-method-2021 |
| `calc_wastewater_pollutant` | wastewater pollutant | load = discharged volume × representative measured concentration with unit conversion | volume; concentration | kg to water | ec-pef-method-2021 |
| `calc_production_weighting` | products and routes | weighted exchange = sum of route exchange × accepted-mass share | route exchange; mass | weighted exchange | af-pefcr-3-1-2025 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and inputs | Preserve classification, material/chemical identity, grade, composition, and verified reference UUIDs; keep non-reference UUID gaps explicit. | specification; SDS; supplier record; manifest |
| `dq_bom` | materials | Use the applicable product-specific BOM and reconcile it to actual issue and manufacturing loss. | BOM; issues; balance |
| `dq_temporal` | foreground data | Use one representative period and disclose exceptions, shutdowns, start-ups, and seasonality. | logs; invoices; register |
| `dq_measurement` | measured flows | Retain calibration, meter boundary, sampling, conversion factors, and limitations. | certificates; meter map; reports |
| `dq_completeness` | LCI | Cover applicable raw materials, energy, products, wastes, and air/water releases; explain residuals and exclusions. | checklist; balances |
| `dq_route` | product routes | Keep integral/assembled, rubber/plastic, lined/unlined routes distinguishable before weighting. | route; machine; batch records |
| `dq_leather` | leather lining | Confirm supplier data cover tanning and the footwear inventory does not duplicate it. | supplier scope; declaration; site map |
| `dq_transparency` | publication | Disclose allocation, datasets, destinations, gaps, unresolved UUIDs, exclusions, uncertainty, and review status. | report; review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference identity | Require the verified product-flow, Mass-property, and Units-of-mass UUIDs with kg. |  |
| `validation_rule_2` | scope | Reject protective-metal-toe footwear, products not declared waterproof, or products lacking both a rubber-or-plastic upper and outer sole. | un-cpc-3-0 |
| `validation_rule_3` | reference amount | Require exactly 1 kg net accepted footwear and separate packaging inputs. | ec-pef-method-2021 |
| `validation_rule_4` | process applicability | Include every actual process and justify each route-dependent atomic card marked not applicable. | af-pefcr-3-1-2025 |
| `validation_rule_5` | atomic inventory | Reject collection labels and combined utilities, materials, wastes, chemicals, packaging, or emissions. |  |
| `validation_rule_6` | material balance | Reconcile issue, output, stock change, recovery, and each waste stream; investigate residuals. | ec-pef-method-2021; af-pefcr-3-1-2025 |
| `validation_rule_7` | allocation | Verify complete totals, physical drivers, shares summing to source totals, and normalization. | ec-pef-method-2021 |
| `validation_rule_8` | waterproof test | Require method, criterion, amount tested, failures, retests, and treatment of test water. | af-pefcr-3-1-2025 |
| `validation_rule_9` | evidence gaps | Reject invented quantities and unconfirmed UUIDs; keep missing values as collection requirements. | ec-pef-method-2021 |
| `validation_rule_10` | double counting | Do not duplicate supplier compounding, component forming, tanning, packaging production, transport, or waste treatment. | ec-pef-method-2021; jrc-tanning-bref |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for CPC 29310 waterproof footwear. |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` after identity, completeness, quality, and review gates pass. |
| allowed_use | Factory-gate modelling of a declared footwear form, size, polymer composition, construction, lining, sealing, finish, site, technology, period, and packaging. |
| excluded_use | Protective-toe or non-waterproof footwear; products outside declared upper/sole materials; use, durability, or lifetime claims; undisclosed route; comparisons outside represented conditions. |
| required_metadata | PCR id/version; UUIDs; footwear form; size/count basis; upper/sole polymers; construction; compound source; lining; sealing; finish; waterproof test; no protective metal toe-cap; packaging; site; technology; period; boundary; allocation; datasets; waste destinations; review. |
| required_quality_disclosure | Primary-data/BOM coverage; metering/allocation; balances; route coverage; gaps; UUID gaps; representativeness; exclusions; uncertainty; test evidence; verification. |
| update_trigger | Change in scope, identity, formulation, construction, test, lining, adhesive/finish, technology, utility, packaging, allocation, regulation, source method, or representativeness period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 official entry and official raw structure title for subclass 29310. https://unstats.un.org/unsd/classifications/Econ/CPC (verified source package, 2026-08-13). | Exact category scope and protective-metal-toe exclusion. |
| `ec-pef-method-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (official full text verified in supplied source package). | Product-specific BOM; company-specific manufacturing data; complete LCI; allocation; completeness; transparency; quality. |
| `jrc-tanning-bref` | `official_guidance` | European Commission JRC/EIPPCB, BAT Reference Document for the Tanning of Hides and Skins. https://eippcb.jrc.ec.europa.eu/reference/tanning-hides-and-skins-0 (official full text verified in supplied source package). | Conditional leather-lining upstream scope only; tanning is not forced into a footwear site that does not tan. |
| `af-pefcr-3-1-2025` | `standard` | Apparel and Footwear Product Environmental Footprint Category Rules, version 3.1, 29 April 2025. https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (full text verified in supplied source package). | BOM, manufacturing loss, packaging, process-data organization, production weighting, and quality; no numerical default imported. |
