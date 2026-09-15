---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cane-sugar
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cane sugar

## 1. Scope and Applicability

This PCR applies to the foreground manufacture of unrefined cane sugar at a sugar mill, from reception of harvested sugar cane through juice extraction, clarification, evaporation, crystallization, centrifugation, drying, cooling, and bulk dispatch or declared packaging. It covers CPC 3.0 code 23511. Onsite steam and power generation and onsite wastewater treatment are included when operated by the reporting mill; otherwise purchased utilities and transferred wastewater cross the foreground boundary as individual exchanges.

Sugar-cane cultivation and transport to the mill are outside the foreground process map but must be represented by traceable upstream datasets. Beet sugar, refined sugar, flavoured or coloured sugar, syrups, and molasses sold as the reference product are excluded. A refining stage after raw-sugar production requires another product-system rule and must not be hidden inside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cane-sugar` |
| classification_refs | CPC 3.0 `23511` Cane sugar |
| covered_products | Partially purified sucrose crystallized from partially purified sugar-cane juice without further refining, including declared raw or mill-white cane-sugar routes that remain within CPC 23511. |
| excluded_products | Beet sugar; refined sugar; flavoured or coloured sugar; liquid sugar and syrup; molasses as the declared reference product; cultivation-only datasets. |
| representative_product | Conforming cane sugar leaving the sugar mill. |
| production_route | Sugar-cane reception and preparation; milling or diffusion; juice clarification; evaporation; crystallization and centrifugation; drying and cooling; optional packaging. |
| market_state | Bulk or declared packaged mill-gate product, with grade, moisture or polarization basis, and packaging state disclosed. |

The Codex identity for raw cane sugar is used as an identity and quality qualifier, not as a source of inventory quantities. CPC scope controls classification; the declared product specification controls whether a dataset is representative of the intended cane-sugar grade.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cane sugar conforming to the declared grade and specification, produced from sugar cane without a subsequent refinery stage. |
| How much | 1 kg net mass of conforming cane sugar at the mill gate. |
| How well | Declare grade or standard, polarization or sucrose basis, moisture basis, colour or route qualifier when relevant, and whether the product is raw, mill-white, bulk, or packaged. |
| How long or cycle | One full crushing season or at least 12 consecutive months representative of normal operation; disclose shutdowns and atypical campaigns. |
| reference_flow_link | The output row `cane_sugar_output` in process `sugar_finishing`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cane sugar; Tiangong UUID unresolved. |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | Cane source region and upstream dataset; cane delivery condition; declared sugar grade or specification; polarization or sucrose basis; moisture basis; raw or mill-white route; sulphitation or other clarification route; bulk or packaging configuration; site, technology and crushing season; utility configuration; co-product disposition and allocation method. |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | Cane sugar reference output | Mass | kg | Determine net conforming product mass on a calibrated scale, excluding packaging mass, and normalize all exchanges to exactly 1 kg. |
| `measure_material_mass` | Cane, chemicals, fuels, products, co-products, solid wastes, sludge, and air or water emissions | Mass | kg | Use direct mass records where available; otherwise document the measured inputs, density or composition, conversion equation, and uncertainty. |
| `measure_water` | Process water, wash water, condensate, and wastewater | Volume or Mass | m3 or kg | Retain the metered unit in raw records and convert only with a documented density and temperature basis. Do not aggregate freshwater, recovered condensate, and wastewater. |
| `measure_electricity` | Purchased, generated, consumed, and exported electricity | Energy | kWh | Use revenue-grade or calibrated submeter readings and distinguish onsite generation, internal consumption, import, and export. |
| `measure_thermal_energy` | Steam and purchased heat | Energy | MJ | Calculate from measured mass flow, pressure, temperature, condensate condition, and documented enthalpy; do not combine steam with fuels or electricity. |
| `measure_concentration_load` | Wastewater substances | Mass | kg | Calculate discharged load from matched flow and concentration records after treatment; preserve the measured analyte identity and sampling basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Harvested sugar cane received and weighed at the sugar-mill gate. |
| starting_condition_role | Upstream product input to the foreground mill system. |
| product_classification_scope | CPC 3.0 `23511` only. |
| recursive_input_rule | Every purchased material, fuel, electricity, heat, water supply, and packaging component crossing the boundary is linked to a separate upstream dataset; do not recursively include those upstream processes inside the foreground mill map. |
| upstream_dataset_requirement | Use geography-, technology-, and time-representative datasets for cane cultivation and transport, utilities, chemicals, fuels, packaging, and external waste treatment. |
| disclosure | Declare the mill route, internal recirculation, co-product destinations, wastewater route, boiler or CHP configuration, exported energy, and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_mill_gate` | Foreground system | Include cane reception through conforming sugar dispatch and all onsite operations serving those stages. | `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007` |
| `boundary_upstream_cane` | Cane cultivation and transport | Keep cultivation and inbound transport outside the foreground process map but represent them as traceable upstream datasets. | `eu-pef-2021-2279` |
| `boundary_internal_recycling` | Bagasse, condensate, water, steam, electricity, and intermediate juice or syrup | Model internal transfers consistently and do not count an internally reused flow as both an avoided product and an external output. | `eu-pef-2021-2279`, `ifc-sugar-manufacturing-ehs-2007` |
| `boundary_conditional_routes` | CHP, optional clarification chemicals, packaging, and wastewater treatment | Include a conditional process or exchange only when the route operates; document `not_applicable` only with site evidence. | `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cane_reception_extraction` | Cane reception, cleaning, preparation and juice extraction | `required` | Always | Receive cane and separate raw juice, bagasse, cleaning residues, and wastewater. | Net mass of raw cane juice transferred to clarification. |
| `juice_clarification` | Juice heating, clarification and filtration | `required` | Always | Remove suspended and nonsugar matter and produce clarified juice. | Net mass of clarified cane juice transferred to evaporation. |
| `juice_evaporation` | Multiple-effect juice evaporation | `required` | Always | Concentrate clarified juice to cane syrup. | Net mass of concentrated cane syrup transferred to crystallization. |
| `sugar_crystallization` | Vacuum-pan crystallization and centrifugation | `required` | Always | Separate wet cane-sugar crystals and molasses. | Net mass of wet cane-sugar crystals transferred to finishing. |
| `sugar_finishing` | Drying, cooling, grading and dispatch or packaging | `required` | Always | Produce the conforming reference product. | 1 kg net conforming cane sugar. |
| `steam_power_generation` | Onsite boiler or combined heat and power generation | `conditional` | Include when the mill combusts bagasse or another fuel onsite. | Supply steam or electricity and account for fuel, ash, and stack emissions. | Net steam and electricity supplied to foreground processes. |
| `wastewater_treatment` | Onsite cane-sugar mill wastewater treatment | `conditional` | Include when wastewater is treated within the reporting site. | Treat process wastewater and account for effluent, sludge, and treatment emissions. | Volume of wastewater treated. |

### Process: Cane reception, cleaning, preparation and juice extraction (`cane_reception_extraction`)

#### Inputs

##### Product flows

###### Delivered sugar cane (`sugar_cane_input`)

Sugar cane crosses the mill gate and is the principal feedstock. Record weighbridge net mass and link the exchange to a representative cultivation and inbound-transport dataset.

- Selected flow: Sugar cane; Tiangong UUID unresolved.
- Flow property / unit: Mass / kg
- Amount rule: Record delivered net cane mass for the reporting period and normalize to 1 kg conforming cane sugar.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_feed`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Cane washing water (`cane_washing_water_input`)

This row represents only freshwater or supplied water used to wash cane before extraction.

- Selected flow: Cane washing water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered amount when wet cleaning is used; mark not applicable only for a documented dry-cleaning route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_water_energy`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### Imbibition water (`imbibition_water_input`)

Water applied during milling or diffusion to recover residual sucrose is kept separate from cane washing water.

- Selected flow: Imbibition water
- Flow property / unit: Volume / m3
- Amount rule: Record metered imbibition water supplied to extraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_water_energy`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Extraction electricity (`extraction_electricity_input`)

Electricity for cane handling, preparation, milling or diffusion is one separate utility exchange.

- Selected flow: Electricity, medium voltage, at sugar mill
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered electricity consumed by reception, preparation and extraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_water_energy`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Extraction steam (`extraction_steam_input`)

Steam used for extraction conditioning is recorded only where the route uses it.

- Selected flow: Process steam at sugar mill
- Flow property / unit: Energy / MJ
- Amount rule: Calculate supplied steam energy from metered mass and operating state; record not applicable when no steam is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_water_energy`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

#### Outputs

##### Product flows

###### Raw cane juice (`raw_cane_juice_output`)

Extracted juice is transferred to clarification as an internal product flow.

- Selected flow: Raw cane juice (`db15cb0e-919a-4c23-a926-69509fef15e2`)
- Flow property / unit: Mass / kg
- Amount rule: Record measured raw-juice mass or calculate it from flow and density records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_outputs`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Bagasse (`bagasse_output`)

Fibrous cane residue leaves extraction for internal fuel use, sale, or waste management; its destination determines treatment under allocation rules.

- Selected flow: Bagasse (`f13cc16c-a598-48a2-b226-fdd991eac633`)
- Flow property / unit: Mass / kg
- Amount rule: Record bagasse mass and moisture at each distinct destination; do not count internal boiler feed as an exported co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_outputs`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

##### Waste flows

###### Cane leaves from cleaning (`cane_leaves_waste`)

Leaves and tops removed at reception are recorded as a separate solid waste or recovered biomass stream.

- Selected flow: Cane leaves from sugar-mill cleaning
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass by destination and classify as waste unless a documented useful product destination exists.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_outputs`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Soil from cane cleaning (`cane_cleaning_soil_waste`)

Soil removed from delivered cane is not combined with leaves or wastewater solids.

- Selected flow: Soil from sugar-cane cleaning
- Flow property / unit: Mass / kg
- Amount rule: Record collected soil mass and treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_outputs`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Cane washing wastewater (`cane_washing_wastewater_output`)

Wastewater from wet cane cleaning is transferred to treatment or offsite management as one concrete wastewater flow.

- Selected flow: Cane washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered discharge by destination when wet cleaning is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_outputs`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

### Process: Juice heating, clarification and filtration (`juice_clarification`)

#### Inputs

##### Product flows

###### Raw cane juice (`raw_cane_juice_input`)

This internal transfer must match the extraction output after documented storage change or loss.

- Selected flow: Raw cane juice (`db15cb0e-919a-4c23-a926-69509fef15e2`)
- Flow property / unit: Mass / kg
- Amount rule: Record raw juice received by clarification and reconcile it to `raw_cane_juice_output`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_inputs`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Hydrated lime (`hydrated_lime_input`)

Lime used to adjust pH and assist clarification is recorded as a distinct chemical input.

- Selected flow: hydrated lime (`0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`)
- Flow property / unit: Mass / kg
- Amount rule: Record dry-equivalent hydrated-lime mass from batch or dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_inputs`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Phosphoric acid (`phosphoric_acid_input`)

Phosphoric acid is included only for a route that doses it during clarification.

- Selected flow: Phosphoric acid, pure substance
- Flow property / unit: Mass / kg
- Amount rule: Record active-substance mass from solution concentration and metered dose; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_inputs`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Sulfur dioxide (`sulfur_dioxide_clarification_input`)

Sulfur dioxide used as a sulphitation reagent is distinct from sulfur dioxide emitted by combustion.

- Selected flow: Sulfur dioxide, clarification reagent
- Flow property / unit: Mass / kg
- Amount rule: Record active sulfur-dioxide mass supplied to the juice when sulphitation is used; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_inputs`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Polyacrylamide flocculant (`clarification_flocculant_input`)

Polymer flocculant is included only when dosed and is not grouped with lime or phosphoric acid.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Record active-polymer mass from concentration and dosing records; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_inputs`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Clarification steam (`clarification_steam_input`)

Steam supplied for juice heating is kept separate from electricity and fuel.

- Selected flow: Process steam at sugar mill
- Flow property / unit: Energy / MJ
- Amount rule: Calculate steam energy from metered mass and thermodynamic state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_utilities`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Clarification electricity (`clarification_electricity_input`)

Electricity for heaters, pumps, clarifiers, filters, and auxiliaries is recorded separately.

- Selected flow: Electricity, medium voltage, at sugar mill
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered clarification electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_utilities`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Filter wash water (`filter_wash_water_input`)

Water used to wash clarification filter cake is kept separate from other process water.

- Selected flow: Clarification filter wash water
- Flow property / unit: Volume / m3
- Amount rule: Record metered wash water where cake washing is used; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_utilities`
- Sources: `us-epa-ap42-cane-sugar-1997`

#### Outputs

##### Product flows

###### Clarified cane juice (`clarified_cane_juice_output`)

Clarified juice is an internal product flow transferred to evaporation.

- Selected flow: Clarified cane juice (`9d68309c-8623-4e3a-b9c7-ee9c11007ed5`)
- Flow property / unit: Mass / kg
- Amount rule: Record measured clarified-juice mass or calculate from flow and density records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_outputs`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Sugarcane filter cake co-product (`filter_cake_product_output`)

Use this product row only for filter cake with a documented useful destination and market or substituted function.

- Selected flow: Sugarcane filter cake (press mud)
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass, moisture, dry mass, and useful destination; do not also report the same mass as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_outputs`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

##### Waste flows

###### Sugarcane filter cake waste (`filter_cake_waste_output`)

Use this row only for filter cake sent to disposal or waste treatment.

- Selected flow: Sugarcane filter cake waste
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass, moisture, dry mass, and treatment destination; do not also report the same mass as a product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_outputs`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

### Process: Multiple-effect juice evaporation (`juice_evaporation`)

#### Inputs

##### Product flows

###### Clarified cane juice (`clarified_cane_juice_input`)

Clarified juice received by evaporation must reconcile with the preceding process output.

- Selected flow: Clarified cane juice (`9d68309c-8623-4e3a-b9c7-ee9c11007ed5`)
- Flow property / unit: Mass / kg
- Amount rule: Record transferred clarified-juice mass and reconcile storage changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evaporation_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Evaporation steam (`evaporation_steam_input`)

Steam supplied to the multiple-effect evaporators is a separate thermal exchange.

- Selected flow: Process steam at sugar mill
- Flow property / unit: Energy / MJ
- Amount rule: Calculate steam energy from metered mass and thermodynamic state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evaporation_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Evaporation electricity (`evaporation_electricity_input`)

Electricity for pumps, vacuum systems, and evaporator auxiliaries is recorded separately.

- Selected flow: Electricity, medium voltage, at sugar mill
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered evaporation electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evaporation_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

#### Outputs

##### Product flows

###### Concentrated cane syrup (`concentrated_cane_syrup_output`)

Concentrated syrup is transferred to crystallization as an internal product flow.

- Selected flow: Concentrated cane syrup (`38f69d10-beb9-44de-a39f-e9c6bb39be5a`)
- Flow property / unit: Mass / kg
- Amount rule: Record syrup mass or calculate from measured flow, density, and solids concentration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evaporation_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Recovered process condensate (`evaporation_condensate_output`)

Condensate recovered for internal use or discharged is tracked as a distinct water product flow.

- Selected flow: Recovered process condensate
- Flow property / unit: Volume / m3
- Amount rule: Record metered condensate by reuse or discharge destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evaporation_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

### Process: Vacuum-pan crystallization and centrifugation (`sugar_crystallization`)

#### Inputs

##### Product flows

###### Concentrated cane syrup (`concentrated_cane_syrup_input`)

Syrup received by crystallization must reconcile with the evaporator output.

- Selected flow: Concentrated cane syrup (`38f69d10-beb9-44de-a39f-e9c6bb39be5a`)
- Flow property / unit: Mass / kg
- Amount rule: Record transferred syrup mass and reconcile storage changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Crystallization steam (`crystallization_steam_input`)

Steam supplied to vacuum pans is recorded separately from electricity and fuels.

- Selected flow: Process steam at sugar mill
- Flow property / unit: Energy / MJ
- Amount rule: Calculate steam energy from metered mass and thermodynamic state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Crystallization electricity (`crystallization_electricity_input`)

Electricity for vacuum, agitation, centrifuges, and auxiliaries is a separate exchange.

- Selected flow: Electricity, medium voltage, at sugar mill
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered crystallization and centrifugation electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Crystal wash water (`crystal_wash_water_input`)

Water applied in centrifuges to wash sugar crystals is kept separate from other process water.

- Selected flow: Cane-sugar crystal wash water
- Flow property / unit: Volume / m3
- Amount rule: Record metered wash water supplied to centrifuges.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Seed sugar (`seed_sugar_input`)

Sugar used for crystal seeding is recorded when externally supplied or not already included in an internal recycle.

- Selected flow: Seed sugar for cane-sugar crystallization
- Flow property / unit: Mass / kg
- Amount rule: Record net externally supplied seed sugar; exclude closed internal recycle already included in product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Isopropyl alcohol (`isopropyl_alcohol_input`)

Isopropyl alcohol used to prepare a seed slurry is conditional and must not be grouped with seed sugar.

- Selected flow: Isopropyl alcohol
- Flow property / unit: Mass / kg
- Amount rule: Record pure-substance mass when used for seed preparation; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

#### Outputs

##### Product flows

###### Wet cane-sugar crystals (`wet_cane_sugar_output`)

Wet crystals are transferred to drying and cooling as an internal product flow.

- Selected flow: Wet cane-sugar crystals
- Flow property / unit: Mass / kg
- Amount rule: Record wet-crystal mass and moisture at transfer to finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Molasses (`molasses_output`)

Final molasses separated by centrifugation is a separate product or residue flow whose disposition controls allocation.

- Selected flow: Molasses (`dcc60867-03df-4ea1-be73-6d88987911bd`)
- Flow property / unit: Mass / kg
- Amount rule: Record mass, solids or moisture basis, and destination; do not combine with wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

##### Waste flows

###### Crystallization and centrifuge wastewater (`crystallization_wastewater_output`)

Wastewater from pan cleaning, centrifugation, or sugar washing is transferred as a concrete wastewater flow.

- Selected flow: Crystallization and centrifuge wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered wastewater by destination and exclude condensate already reported separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_crystallization_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

### Process: Drying, cooling, grading and dispatch or packaging (`sugar_finishing`)

#### Inputs

##### Product flows

###### Wet cane-sugar crystals (`wet_cane_sugar_input`)

Wet crystals received by finishing must reconcile with crystallization output.

- Selected flow: Wet cane-sugar crystals
- Flow property / unit: Mass / kg
- Amount rule: Record received wet-crystal mass and moisture and reconcile storage changes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Finishing electricity (`finishing_electricity_input`)

Electricity for drying fans, cooling, grading, conveying, and packaging is recorded separately.

- Selected flow: Electricity, medium voltage, at sugar mill
- Flow property / unit: Energy / kWh
- Amount rule: Record submetered finishing electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Finishing steam (`finishing_steam_input`)

Steam used for sugar drying is conditional and kept separate from purchased heat.

- Selected flow: Process steam at sugar mill
- Flow property / unit: Energy / MJ
- Amount rule: Calculate steam energy from measured mass and thermodynamic state; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-ap42-cane-sugar-1997`

###### Purchased drying heat (`purchased_drying_heat_input`)

Purchased heat is reported only when supplied externally and is not combined with onsite steam.

- Selected flow: Purchased process heat for cane-sugar drying
- Flow property / unit: Energy / MJ
- Amount rule: Record metered purchased heat; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Kraft paper sugar sack (`kraft_sack_input`)

Kraft paper sacks are one packaging component and are included only for the declared package configuration.

- Selected flow: Kraft paper sack for cane sugar
- Flow property / unit: Mass / kg
- Amount rule: Record net sack mass consumed, including recorded production loss, when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021-2279`

###### Woven polypropylene sugar sack (`polypropylene_sack_input`)

Woven polypropylene sacks are recorded separately from paper sacks and liners.

- Selected flow: Woven polypropylene sack for cane sugar
- Flow property / unit: Mass / kg
- Amount rule: Record net sack mass consumed, including recorded production loss, when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021-2279`

###### Polyethylene liner (`polyethylene_liner_input`)

An internal polyethylene liner is a distinct packaging component.

- Selected flow: Polyethylene liner for cane-sugar sack
- Flow property / unit: Mass / kg
- Amount rule: Record net liner mass consumed, including recorded production loss, when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Cane sugar reference product (`cane_sugar_output`)

This is the only reference product flow. Packaging mass is excluded from its net mass.

- Selected flow: Cane sugar; Tiangong UUID unresolved.
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) / kg; unit group Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: Set to exactly 1 kg after normalizing all reporting-period exchanges by net conforming cane-sugar output.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_finishing_records`
- Sources: `unsd-cpc-3-0`, `codex-cxs-212-1999`

##### Waste flows

###### Off-specification cane sugar (`off_spec_sugar_waste`)

Rejected sugar not recycled into the measured production system is recorded separately from the reference product.

- Selected flow: Off-specification cane sugar waste
- Flow property / unit: Mass / kg
- Amount rule: Record net mass by recycling, recovery, or disposal destination; exclude internal recycle already reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-pef-2021-2279`

###### Waste kraft paper sack (`waste_kraft_sack_output`)

Packaging loss from kraft sacks is a separate waste exchange.

- Selected flow: Waste kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: Record waste mass and treatment destination when kraft sacks are used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021-2279`

###### Waste woven polypropylene sack (`waste_polypropylene_sack_output`)

Packaging loss from woven polypropylene sacks is not grouped with paper or polyethylene waste.

- Selected flow: Waste woven polypropylene sack
- Flow property / unit: Mass / kg
- Amount rule: Record waste mass and treatment destination when polypropylene sacks are used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021-2279`

###### Waste polyethylene liner (`waste_polyethylene_liner_output`)

Packaging loss from polyethylene liners is a separate waste exchange.

- Selected flow: Waste polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Record waste mass and treatment destination when liners are used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Particulate matter below 10 micrometres (`finishing_pm10_to_air`)

Sugar dust emitted after abatement from drying, cooling, conveying, or packaging is reported as PM10 to air.

- Selected flow: Particulate matter, < 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack or workplace-exhaust measurement adjusted to emitted load; if calculated, disclose airflow, concentration, abatement, and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_air`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

### Process: Onsite boiler or combined heat and power generation (`steam_power_generation`)

#### Inputs

##### Product flows

###### Bagasse boiler fuel (`bagasse_fuel_input`)

Bagasse combusted onsite is an internal product transfer and must match the assigned share of extraction output.

- Selected flow: Bagasse (`f13cc16c-a598-48a2-b226-fdd991eac633`)
- Flow property / unit: Mass / kg
- Amount rule: Record as-fired mass and moisture supplied to boilers and reconcile with `bagasse_output`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_fuels`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Natural gas (`natural_gas_input`)

Natural gas is a conditional fossil fuel and is not grouped with fuel oil or biomass.

- Selected flow: Natural gas, combusted in sugar-mill boiler
- Flow property / unit: Energy / MJ
- Amount rule: Record metered lower-heating-value energy when used; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_fuels`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Fuel oil (`fuel_oil_input`)

Fuel oil used for boiler firing or startup is one separate fuel exchange.

- Selected flow: Residual fuel oil, combusted in sugar-mill boiler
- Flow property / unit: Mass / kg
- Amount rule: Record delivered mass and heating value when used; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_fuels`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Diesel (`diesel_input`)

Diesel used for boiler startup is separated from mobile-equipment diesel outside this process.

- Selected flow: Diesel, combusted in sugar-mill boiler
- Flow property / unit: Mass / kg
- Amount rule: Record boiler-consumed mass when used; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_fuels`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Coal (`coal_input`)

Coal is included only at mills that combust it and is not grouped with bagasse or liquid fuels.

- Selected flow: Coal, combusted in sugar-mill boiler
- Flow property / unit: Mass / kg
- Amount rule: Record as-fired mass, moisture, and heating value when used; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_fuels`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Boiler feedwater (`boiler_feedwater_input`)

Make-up and treated boiler feedwater is recorded separately from process and wash water.

- Selected flow: Boiler feedwater
- Flow property / unit: Volume / m3
- Amount rule: Record metered make-up water supplied to the boiler system net of returned condensate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_fuels`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

#### Outputs

##### Product flows

###### Generated steam (`generated_steam_output`)

Steam supplied to foreground processes is an internal product flow; exported steam is disclosed separately by destination.

- Selected flow: Process steam at sugar mill
- Flow property / unit: Energy / MJ
- Amount rule: Calculate net supplied steam energy from mass flow and thermodynamic state after boiler-house own use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_outputs`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Generated electricity (`generated_electricity_output`)

Gross generation, internal use, import, and export must be metered separately.

- Selected flow: Electricity, generated at sugar mill
- Flow property / unit: Energy / kWh
- Amount rule: Record net electricity supplied to foreground processes and separately disclose any export.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_outputs`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

##### Waste flows

###### Boiler ash (`boiler_ash_output`)

Ash leaving the boiler or particulate-control system is a separate solid waste or useful product stream.

- Selected flow: Sugar-mill boiler ash
- Flow property / unit: Mass / kg
- Amount rule: Record dry and wet mass by destination; classify a useful destination as a product only with supporting evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_outputs`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

##### Elementary flows

###### Biogenic carbon dioxide (`biogenic_carbon_dioxide_to_air`)

Carbon dioxide from bagasse carbon is reported separately from fossil carbon dioxide.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured carbon content and oxidation balance or a disclosed authoritative factor applied to measured bagasse combustion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Fossil carbon dioxide (`fossil_carbon_dioxide_to_air`)

Carbon dioxide from natural gas, fuel oil, diesel, or coal is kept separate from biogenic carbon dioxide.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by fuel from measured consumption, carbon content, and oxidation or use direct measurement; sum only after fuel-specific records are retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Methane from combustion (`combustion_methane_to_air`)

Unburned methane from stationary combustion is reported as a distinct elementary flow.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement or a disclosed fuel- and equipment-specific factor applied to measured fuel use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Nitrous oxide from combustion (`combustion_nitrous_oxide_to_air`)

Nitrous oxide is not grouped with nitrogen monoxide or nitrogen dioxide.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct measurement or a disclosed fuel- and equipment-specific factor applied to measured fuel use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Carbon monoxide (`carbon_monoxide_to_air`)

Carbon monoxide from boiler combustion is one distinct elementary flow.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack measurement or a disclosed fuel- and boiler-specific factor applied to measured fuel use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### Nitrogen monoxide (`nitrogen_monoxide_to_air`)

Measured or calculated nitrogen monoxide is reported separately from nitrogen dioxide.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use speciated stack measurement or a disclosed conversion from measured nitrogen oxides with the speciation basis retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### Nitrogen dioxide (`nitrogen_dioxide_to_air`)

Measured or calculated nitrogen dioxide is reported separately from nitrogen monoxide.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use speciated stack measurement or a disclosed conversion from measured nitrogen oxides with the speciation basis retained.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### Sulfur dioxide from combustion (`combustion_sulfur_dioxide_to_air`)

Combustion sulfur dioxide is distinct from sulfur dioxide used as a clarification reagent.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack measurement or calculate from measured fuel sulfur, retention, and abatement with the basis disclosed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

###### Boiler particulate matter below 10 micrometres (`boiler_pm10_to_air`)

PM10 after the installed control device is reported separately from sugar-drying dust.

- Selected flow: Particulate matter, < 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack measurement or a disclosed fuel-, boiler-, and control-specific factor applied to measured fuel use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack_emissions`
- Sources: `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007`

### Process: Onsite cane-sugar mill wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Waste flows

###### Cane-sugar mill process wastewater (`mill_wastewater_input`)

This row receives the combined, measured process-wastewater flow after internal water reuse has been subtracted.

- Selected flow: Cane-sugar mill process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume by source and reconcile the sum with wastewater transfers from foreground processes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

##### Product flows

###### Wastewater-treatment electricity (`wastewater_electricity_input`)

Electricity for pumping, aeration, mixing, and dewatering is recorded separately.

- Selected flow: Electricity, medium voltage, at sugar mill
- Flow property / unit: Energy / kWh
- Amount rule: Record treatment-system submeter readings.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Sodium hydroxide (`wastewater_sodium_hydroxide_input`)

Sodium hydroxide used for wastewater pH control is a conditional chemical input.

- Selected flow: Sodium hydroxide, pure substance
- Flow property / unit: Mass / kg
- Amount rule: Record active-substance mass from solution concentration and metered dose; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Wastewater-treatment flocculant (`wastewater_flocculant_input`)

Flocculant used in sedimentation or sludge dewatering is distinct from clarification flocculant.

- Selected flow: Polyacrylamide flocculant for wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Record active-polymer mass from concentration and dosing records; otherwise document not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

#### Outputs

##### Product flows

###### Treated water for internal reuse (`treated_water_reuse_output`)

Treated water reused onsite is an internal product flow and must not also be counted as a surface-water discharge.

- Selected flow: Treated sugar-mill water for internal reuse
- Flow property / unit: Volume / m3
- Amount rule: Record metered treated-water volume returned to identified foreground uses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge_output`)

Sludge is recorded separately from clarification filter cake and boiler ash.

- Selected flow: Cane-sugar mill wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass, dry solids, and treatment or useful destination; avoid double counting with filter cake.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

##### Elementary flows

###### Methane from wastewater treatment (`wastewater_methane_to_air`)

Methane released from anaerobic treatment is included when not captured and combusted.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure captured and emitted gas separately or apply a disclosed treatment-specific calculation to measured organic load; otherwise document not applicable for non-anaerobic routes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Biogenic carbon dioxide from wastewater treatment (`wastewater_biogenic_co2_to_air`)

Biogenic carbon dioxide released by biological treatment is kept separate from fossil combustion emissions.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured gas flow and composition or a disclosed carbon balance based on measured wastewater load.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Chemical oxygen demand to surface water (`cod_to_water`)

Residual chemical oxygen demand is a monitored water emission, not a substitute for speciated substances where those data exist.

- Selected flow: Chemical oxygen demand, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply matched treated-effluent volume by laboratory COD concentration and convert to kg discharged.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Nitrate to surface water (`nitrate_to_water`)

Nitrate is reported only when measured or analytically derived as nitrate; do not relabel total nitrogen as nitrate.

- Selected flow: Nitrate, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply matched effluent volume by measured nitrate concentration and convert to kg discharged; otherwise leave unresolved rather than infer from total nitrogen.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Phosphate to surface water (`phosphate_to_water`)

Phosphate is reported only when measured or analytically derived as phosphate; do not relabel total phosphorus as phosphate.

- Selected flow: Phosphate, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply matched effluent volume by measured phosphate concentration and convert to kg discharged; otherwise leave unresolved rather than infer from total phosphorus.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

###### Suspended solids to surface water (`suspended_solids_to_water`)

Residual suspended solids are calculated from matched treated-effluent volume and laboratory concentration.

- Selected flow: Suspended solids, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Multiply matched treated-effluent volume by measured suspended-solids concentration and convert to kg discharged.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cane sugar reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_emissions`
- Sources: `ifc-sugar-manufacturing-ehs-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Multi-output mill and utility processes | First subdivide processes or expand the system where technically feasible and supported by traceable data. | `eu-pef-2021-2279` |
| `allocation_co_product_status` | Bagasse, molasses, filter cake, ash, exported steam, and exported electricity | Determine separately whether each destination is internal reuse, a product with a useful function, or waste. Do not assign a co-product credit or allocation share to waste. | `ifc-sugar-manufacturing-ehs-2007`, `eu-pef-2021-2279` |
| `allocation_physical_relation` | Remaining inseparable co-products | If subdivision or expansion cannot be applied, use a documented physical causal relation that reflects how inputs and emissions change with co-product output. Mass allocation is not automatic. | `eu-pef-2021-2279` |
| `allocation_other_relation` | Co-products without a defensible physical relation | Use another documented relation, such as economic value, only after the preceding options are shown infeasible; disclose prices, geography, period, currency, averaging, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_exported_energy` | Exported steam or electricity | Separate internal supply from export. Apply system expansion or the selected allocation relation consistently and disclose any substituted dataset; do not credit gross generation. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_extraction_feed` | `cane_reception_extraction` | Delivered cane | Weighbridge record | Gross vehicle mass; tare; net cane; supplier; field or region; receipt time | Calibrated weighbridge and delivery reconciliation | kg | Each load | Full crushing season or at least 12 consecutive months | Reporting mill and all cane receiving points | Sum accepted net cane; separately flag rejected loads | Calibration certificate; delivery ledger; reconciliation |
| `cp_extraction_water_energy` | `cane_reception_extraction` | Water, electricity, and steam | Meter and operating record | Meter start/end; route; steam state; downtime | Calibrated meters matched to operating hours | Row unit | Shift or daily | Same period as reference output | Reception, preparation, milling or diffusion | Sum by atomic exchange; subtract only documented return | Meter register; route diagram; operating log |
| `cp_extraction_outputs` | `cane_reception_extraction` | Juice, bagasse, residues, wastewater | Scale, flowmeter, moisture, and destination record | Mass or volume; density; moisture; destination; storage change | Calibrated scales or flowmeters plus laboratory analysis | Row unit | Shift or daily | Same period as reference output | Extraction and cleaning | Sum by exchange and destination; reconcile mass and storage | Calibration; laboratory results; destination tickets |
| `cp_clarification_inputs` | `juice_clarification` | Juice and clarification chemicals | Batch, dosing, and transfer record | Juice flow; chemical purchase; concentration; dose; route | Metered transfer and calibrated dosing equipment | Row unit | Batch or shift | Same period as reference output | Clarification and filtration | Convert solutions to active-substance mass where specified | Dosing calibration; certificates of analysis; route log |
| `cp_clarification_utilities` | `juice_clarification` | Steam, electricity, and filter wash water | Meter record | Energy or volume; steam state; operating time | Submeters and steam balance | Row unit | Shift or daily | Same period as reference output | Clarification and filters | Sum by atomic utility | Meter calibration; steam balance |
| `cp_clarification_outputs` | `juice_clarification` | Clarified juice and filter cake | Flow, mass, moisture, and destination record | Juice flow; density; cake wet mass; dry solids; destination | Calibrated flowmeter or scale and laboratory analysis | kg | Shift or daily | Same period as reference output | Clarification and filters | Sum by destination; prohibit product/waste duplication | Lab results; dispatch or waste records; balance |
| `cp_evaporation_records` | `juice_evaporation` | Juice, syrup, condensate, steam, and electricity | Meter and laboratory record | Flow; density; solids; condensate destination; energy | Calibrated meters and solids analysis | Row unit | Shift or daily | Same period as reference output | Evaporator station | Sum by atomic exchange and reconcile soluble solids | Calibration; laboratory records; evaporation balance |
| `cp_crystallization_records` | `sugar_crystallization` | Syrup, utilities, seed materials, crystals, molasses, and wastewater | Batch, meter, scale, and laboratory record | Batch mass; energy; water; seed; crystal moisture; molasses solids; wastewater | Calibrated batch system, meters, scales, and laboratory analysis | Row unit | Batch or shift | Same period as reference output | Vacuum pans and centrifuges | Sum by atomic exchange and reconcile sugar solids | Batch sheets; calibration; laboratory results |
| `cp_finishing_records` | `sugar_finishing` | Wet sugar, utilities, finished sugar, and off-spec sugar | Scale, meter, grade, and dispatch record | Input mass and moisture; energy; conforming mass; off-spec mass; grade | Calibrated scales and meters; product laboratory testing | Row unit | Batch or shift | Full crushing season or at least 12 consecutive months | Dryer, cooler, grader, silo, dispatch | Net conforming sugar excludes packaging; reconcile off-spec and storage | Scale calibration; certificates of analysis; dispatch ledger |
| `cp_finishing_packaging` | `sugar_finishing` | Packaging inputs and wastes | Purchase, bill-of-material, and waste record | Component identity; unit mass; count; loss; waste destination | Supplier specification verified by sample weighing and inventory balance | kg | Lot or monthly | Same period as reference output | Packaging line | Sum each material separately; reconcile input, packed stock, and waste | Supplier specification; sample weights; waste ticket |
| `cp_finishing_air` | `sugar_finishing` | Sugar-dust PM10 | Stack or exhaust measurement | Airflow; PM10 concentration; operating time; abatement status | Representative measurement using an applicable regulatory method | kg | Test campaign plus operating log | Representative of the reporting period and equipment state | Dryer, cooler, conveyors, packaging exhausts | Convert concentration and airflow to emitted load | Test report; instrument calibration; abatement log |
| `cp_utility_fuels` | `steam_power_generation` | Fuels and feedwater | Fuel meter, scale, purchase, and laboratory record | Fuel quantity; moisture; heating value; sulfur; feedwater; operating time | Calibrated meters or scales and fuel analysis | Row unit | Shift or delivery | Same period as reference output | Onsite boiler and CHP | Sum each fuel separately; reconcile inventory and internal bagasse | Calibration; fuel certificates; stock balance |
| `cp_utility_outputs` | `steam_power_generation` | Steam, electricity, and ash | Meter, thermodynamic, and mass record | Steam mass/state; power generation/use/export; ash mass/moisture/destination | Calibrated meters, scales, and energy balance | Row unit | Shift or daily | Same period as reference output | Boiler, turbine, generator, and control equipment | Calculate net useful outputs after own use; keep export separate | Meter calibration; energy balance; destination evidence |
| `cp_stack_emissions` | `steam_power_generation` | Individual stack emissions | Stack test, continuous monitor, fuel analysis, and operating record | Pollutant concentration; gas flow; oxygen; operating state; fuel; control efficiency | Direct measurement preferred; otherwise disclosed source-specific factor | kg | Applicable test or monitoring frequency | Representative of fuel and boiler states in the reporting period | Each stack and control train | Calculate each named pollutant separately and weight by operating time | Accredited report; calibration; factor reference; uncertainty |
| `cp_wastewater_records` | `wastewater_treatment` | Influent, electricity, chemicals, treated-water reuse, and sludge | Flowmeter, dosing, meter, mass, and laboratory record | Influent/reuse flow; energy; concentration and dose; sludge mass and solids; destination | Calibrated meters, dosing records, scales, and laboratory analysis | Row unit | Daily or batch | Same period as reference output | Onsite treatment plant | Sum atomic inputs and outputs; reconcile hydraulic balance | Calibration; laboratory results; sludge tickets; balance |
| `cp_wastewater_emissions` | `wastewater_treatment` | Air and water emissions | Matched flow, concentration, gas, and treatment-state record | Effluent flow and analyte concentration; gas flow/composition; route and capture | Representative sampling and laboratory analysis; gas measurement or documented carbon balance | kg | Applicable permit frequency or representative campaign | Representative of the reporting period and treatment states | Final discharge and treatment gas points | Match flow and concentration in time; calculate each analyte separately | Laboratory QA/QC; chain of custody; calculation sheet; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_reference_output` | All exchanges | `Q_normalized = Q_reporting_period / M_conforming_cane_sugar_reporting_period` | Reporting-period exchange quantity; net conforming cane-sugar mass | Exchange per 1 kg cane sugar | `eu-pef-2021-2279` |
| `internal_flow_reconciliation` | Juice, syrup, wet sugar, bagasse, condensate, steam, electricity, and wastewater transfers | Output from sending process equals input to receiving process after separately documented storage change, measured loss, export, or other destination. | Sending output; receiving input; storage; loss; destination | Reconciled internal transfer | `eu-pef-2021-2279` |
| `steam_energy` | Steam exchanges | `Q = m × (h_steam - h_return)` using measured pressure, temperature, quality, and condensate state. | Steam mass; steam enthalpy; return enthalpy | MJ supplied | `eu-pef-2021-2279` |
| `effluent_load` | Each named water emission | `Load_kg = volume_m3 × concentration_mg_per_L × 0.001` for matched records. | Effluent volume; analyte concentration | kg emitted | `ifc-sugar-manufacturing-ehs-2007` |
| `combustion_emissions` | Each named boiler emission | Prefer direct measurement; otherwise `Emission = measured fuel activity × disclosed fuel- and technology-specific factor`, with biogenic and fossil carbon separated. | Fuel activity; factor or measured concentration and flow; control state | kg of the named substance | `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007` |
| `co_product_allocation` | Remaining inseparable co-products | Apply the hierarchy in Section 7 and retain the unallocated inventory, allocation key, shares, sensitivity, and product or waste status. | Joint inventory; product quantities or causal parameter; values if used | Allocated inventory | `eu-pef-2021-2279` |
| `mass_balance` | Extraction through finishing and residue management | Reconcile measured mass and dry solids across each process, explicitly including water evaporation, products, residues, wastes, emissions where material, and storage changes. | Input and output masses; moisture or solids; storage | Process balance and unexplained difference | `us-epa-ap42-cane-sugar-1997`, `ifc-sugar-manufacturing-ehs-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and major intermediate flows | Product grade, route, state, flow property, unit, and Tiangong identity must be unambiguous; unresolved UUIDs remain explicit. | Product specification; laboratory certificate; flow lookup record |
| `dq_temporal` | All foreground records | Cover one full crushing season or at least 12 consecutive months representative of normal operation; disclose gaps, shutdowns, and atypical campaigns. | Dated ledgers; operating calendar; gap assessment |
| `dq_technology_geography` | Foreground and upstream datasets | Identify mill technology, clarification route, boiler and wastewater configuration, cane source region, and dataset geography. | Process diagram; equipment list; dataset metadata |
| `dq_completeness` | All process inventories | Account for every listed applicable atomic exchange; document each omitted row as not applicable or unresolved, with evidence and likely effect. | Completeness checklist; route evidence; unresolved-item log |
| `dq_measurement` | Meters, scales, tests, and laboratory data | Use current calibration and QA/QC evidence and retain raw records, units, conversions, detection limits, and uncertainty. | Certificates; chain of custody; QA/QC reports; calculation sheets |
| `dq_balance` | Materials, sucrose solids, water, steam, and electricity | Reconcile process balances and investigate unexplained differences without forcing closure by an invented flow. | Signed balance sheets; investigation notes |
| `dq_allocation` | Co-products and exported energy | Retain product or waste classification, destination, hierarchy decision, allocation relation, inputs, shares, and sensitivity. | Contracts; dispatch records; allocation workbook; sensitivity result |
| `dq_no_double_count` | Internal reuse and waste or co-product destinations | Do not count one physical quantity as both internal input and export, product and waste, reuse and discharge, or gross and net energy. | Cross-process reconciliation and destination ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | Failure condition |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference product | Confirm exactly one `cane_sugar_output` equals 1 kg net conforming cane sugar and uses the fixed Mass and unit-group UUIDs. | Missing, multiple, packaged gross mass, wrong UUID, wrong unit, or amount not 1 kg. |
| `validate_scope_route` | Dataset scope | Confirm CPC 23511 scope, mill-gate start and end, route qualifiers, and inclusion of every applicable conditional process. | Refined or beet sugar is mixed into scope, or an operating CHP, packaging, clarification, or treatment route is omitted. |
| `validate_internal_transfers` | Internal flows | Reconcile matching juice, syrup, wet sugar, bagasse, steam, electricity, condensate, and wastewater transfers after documented storage and loss. | An unexplained mismatch or double count remains. |
| `validate_mass_balance` | Each foreground process | Review mass and dry-solids balances and the disposition of bagasse, molasses, filter cake, wastewater sludge, ash, and off-spec sugar. | A material unexplained difference or missing destination remains. |
| `validate_co_products` | Multi-output processes | Apply and document the Section 7 hierarchy and distinguish internal reuse, product, and waste. | Allocation is automatic, undocumented, applied to waste, or credits gross internal energy. |
| `validate_water_waste` | Water and waste exchanges | Keep washing water, imbibition water, filter wash water, crystal wash water, feedwater, condensate, wastewater, filter cake, sludge, and ash separate. | A grouped placeholder, double count, or missing treatment destination remains. |
| `validate_air_emissions` | Finishing, boiler, and wastewater air releases | Report each applicable named substance separately and retain measurement or factor provenance and abatement state. | Aggregate `air emissions`, `NOx`, `VOC`, or other grouped placeholder is used in place of available atomic substances. |
| `validate_ranges` | All inventory quantities | Do not assert a range unless at least two independent original sources are boundary-, unit-, product-, and basis-compatible; normalization identity is not a range. | A single-source, copied endpoint, equal-endpoint, or unsupported estimated range is present. |
| `validate_uuid_identity` | UUID-bearing flows | Confirm every UUID by public `state_code=100` direct read, flow type, name, property, and unit semantics; keep unresolved identities empty. | A proxy or semantically mismatched UUID is used, including the rejected sugar-cane candidate. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for cane sugar manufacturing at a declared sugar mill. |
| downstream_use | Construction of `process` and `lifecyclemodel` datasets with separately linked upstream and downstream datasets. |
| allowed_use | Mill-gate LCI, supply-chain modelling, hotspot analysis, and scenario analysis when product grade, route, geography, period, allocation, and data quality are compatible. |
| excluded_use | Beet or refined sugar; cultivation-only claims; comparative assertions without harmonized functional equivalence, boundary, allocation, geography, period, and data quality; use of unresolved UUIDs as confirmed identities. |
| required_metadata | All reference-flow qualifiers; site and technology; reporting period; process route; upstream dataset references; co-product destinations and allocation; water, wastewater, boiler and packaging configuration; exclusions and unresolved items. |
| required_quality_disclosure | Primary-data coverage; calibration and laboratory QA/QC; balance results; gap handling; proxy or secondary data; allocation sensitivity; uncertainty; original-source verification scope. |
| update_trigger | Significant change in product grade, cane source, extraction or clarification route, energy or fuel mix, co-product disposition, wastewater route, packaging, allocation method, reporting period, or applicable regulation. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `standard` | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 23511 Cane sugar, official classification portal, https://unstats.un.org/unsd/classifications/Econ/CPC, accessed 2026-08-24. | Classification identity and exclusion of adjacent beet, refined, and flavoured or coloured sugar subclasses. |
| `codex-cxs-212-1999` | `standard` | Codex Alimentarius Commission, CXS 212-1999, Standard for Sugars, official PDF, https://workspace.fao.org/sites/codex/Standards/CXS%20212-1999/CXS_212e.pdf, accessed 2026-08-24. | Raw cane sugar identity and quality-qualifier requirements; no inventory range is taken from the standard. |
| `us-epa-ap42-cane-sugar-1997` | `official_guidance` | U.S. Environmental Protection Agency, AP-42 Section 9.10.1.1 Sugarcane Processing, June 1997, official PDF, https://www.epa.gov/sites/default/files/2020-10/documents/c9s10-1a.pdf, accessed 2026-08-24. | Foreground process sequence, juice extraction and clarification materials, crystallization, bagasse, molasses, filter cake, and air-emission inventory structure. |
| `ifc-sugar-manufacturing-ehs-2007` | `official_guidance` | International Finance Corporation, Environmental, Health, and Safety Guidelines for Sugar Manufacturing, 30 April 2007, official PDF, https://www.ifc.org/content/dam/ifc/doc/2000/2007-sugar-manufacturing-ehs-guidelines-en.pdf, accessed 2026-08-24. | Water, energy, bagasse CHP, solid residues, wastewater treatment, sludge, effluent and air monitoring, and route disclosure. |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, consolidated official text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng, accessed 2026-08-24. | Multi-functionality hierarchy, foreground and upstream dataset separation, inventory completeness, data quality, and transparent calculation rules. |
