---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-headgear-except-headgear-of-rubber-or-of-plastics-safety-headgear-and-asbestos-he-6479f76c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other headgear except headgear of rubber or of plastics, safety headgear and asbestos headgear; head-bands, linings, covers, hat foundations, hat frames, peaks and chinstraps, for headgear

## 1. Scope and Applicability

This PCR applies to factory-gate production of the products and parts explicitly covered by CPC 3.0 subclass 28269. It covers a declared finished other-headgear article within that subclass or a declared head-band, lining, cover, hat foundation, hat frame, peak, or chinstrap for headgear. The data package shall identify the exact article or part and shall not use the subclass label as a substitute for a product-specific bill of materials.

The foreground boundary starts with received materials and components carrying upstream datasets and ends with 1 kg net mass of conforming product at the manufacturing plant. Material preparation, cutting, forming, joining or attachment, steam or heat shaping, inspection, and primary or secondary packaging are included when performed by the reporting facility. Upstream extraction and production of received inputs, outbound distribution, use, maintenance, and end of life are outside the foreground boundary but remain linked through upstream or downstream datasets as appropriate.

Headgear of rubber or plastics, safety headgear, asbestos headgear, and products assigned to adjacent CPC 28261 or 28262 are excluded. A facility making several headgear products shall report a product-specific bill of materials, route, utilities, losses, direct emissions, and packaging for the declared CPC 28269 product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-headgear-except-headgear-of-rubber-or-of-plastics-safety-headgear-and-asbestos-he-6479f76c |
| classification_refs | CPC 3.0: 28269, exact |
| covered_products | Other headgear within CPC 28269 and head-bands, linings, covers, hat foundations, hat frames, peaks, and chinstraps for headgear |
| excluded_products | Rubber or plastic headgear; safety headgear; asbestos headgear; hat forms, bodies, hoods, and shapes in CPC 28261; felt, plaited, knitted, crocheted, lace or piece-textile hats and hair-nets in CPC 28262; upstream materials sold without transformation into a declared CPC 28269 product |
| representative_product | A product-specific production mix, at plant, for one declared finished CPC 28269 headgear article or headgear part |
| production_route | Receipt of product-specific materials and components; cutting or forming; joining or attachment; conditional steam, purchased-heat, or on-site-fuel shaping; finishing and inspection; packaging |
| market_state | Conforming finished product at the manufacturing plant, with net product mass and packaging mass reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a conforming finished other-headgear article or headgear part within CPC 28269 |
| How much | 1 kg net mass of conforming product, excluding packaging |
| How well | Meets the declared article or part specification, material composition, dimensions or size, workmanship, and acceptance criteria |
| How long or cycle | One completed production lot at the factory gate; use-stage service duration is not represented |
| reference_flow_link | The reference amount is the net mass of conforming CPC 28269 output from the declared foreground route |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other headgear except headgear of rubber or of plastics, safety headgear and asbestos headgear, head-bands, linings, covers, hat foundations, hat frames, peaks and chinstraps, for headgear `0300f33f-f723-4c63-901f-6f0d58ebfbb7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact article or part type; CPC 28269 inclusion statement; material composition and mass fractions; construction and joining route; size or dimensional specification; net product mass method; finished and packaged state; manufacturing location; reporting period; forming applicability; steam applicability; purchased-heat applicability; fuel applicability; adhesive applicability; water applicability; controlled-cooling applicability; packaging specification; yield treatment; scrap treatment; reject treatment; rework treatment |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory values to 1 kg of accepted net product mass. Exclude primary and secondary packaging from reference product mass and record each packaging material separately. |
| `component_mass_conversion` | purchased materials and components recorded by item, length, or area | Mass | kg | Convert to dry or as-received mass using product-specific measured piece mass, linear density, areal density, or weighbridge records. Retain the conversion evidence and moisture basis. |
| `energy_carrier_separation` | electricity, purchased steam, purchased heat, and fuel | Energy or mass as invoiced | kWh, MJ, or kg | Preserve the invoiced unit, convert with a documented factor, and report electricity, purchased steam, purchased heat, and each fuel as separate exchanges. Do not merge them into one energy row. |
| `water_mass_conversion` | process water | Mass | kg | Convert metered volume using the measured density or 1 kg/L only when ordinary water near ambient conditions is documented. Keep steam and liquid water separate. |
| `mass_balance` | manufacturing lot | Mass | kg | Reconcile received material mass with product, recoverable co-product if any, separately identified waste, inventory change, and measured or estimated emissions on the same lot and moisture basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Product-specific materials and components are received at the reporting plant with supplier identity, mass, composition, and upstream dataset references |
| starting_condition_role | Upstream production is represented by linked datasets; the foreground collects only transformations and losses under the reporting facility's operational control |
| product_classification_scope | Exact CPC 3.0 subclass 28269; adjacent CPC 28261 and 28262 products and the expressly excluded rubber/plastic, safety, and asbestos headgear are outside scope |
| recursive_input_rule | If a CPC 28269 product is used as an input to another CPC 28269 product, record it as one product input and terminate foreground recursion at that purchase; require a separate upstream dataset for the input |
| upstream_dataset_requirement | Every material, component, electricity supply, steam, purchased heat, fuel, water, packaging material, and treatment service crossing the boundary requires an upstream dataset or an explicitly disclosed data gap |
| disclosure | Declare product form, bill of materials, route, outsourced operations, allocation, cut-offs, packaging, rejects and rework, utilities, direct emissions, refrigerants, temporal coverage, and site coverage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all datasets | Include all product-specific material and component inputs, in-plant manufacturing operations, product losses, direct emissions, and packaging up to the plant gate. | `eu-pef-2021-2279`; `ncci-hat-manufacturing-2014` |
| `boundary_route_specificity` | route selection | Include cutting, forming, sewing, attachment, steam or heat shaping, pressing, trimming, inspection, and packing only when they occur for the declared article or part; disclose every omitted stage and any outsourced stage. | `ncci-hat-manufacturing-2014` |
| `boundary_atomic_bom` | bill of materials | Record every actual material and component as its own atomic product flow. The named rows below are common route candidates, not permission to aggregate unlisted materials. | `eu-pef-2021-2279` |
| `boundary_upstream_linkage` | received inputs | Do not recreate upstream extraction or material production in the foreground. Link an upstream dataset for each received input and report supplier or proxy limitations. | `eu-pef-2021-2279` |
| `boundary_complete_interventions` | all included processes | Record all material and energy inputs, wastes, and elementary emissions associated with each included process; a zero or not-applicable assertion requires route evidence. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_forming_assembly` | Component preparation, forming, joining, finishing, and inspection | `required` | Always; individual cutting, forming, joining, adhesive, water, steam, heat, and cooling flows remain conditional on the declared route | Foreground manufacturing | kg of conforming unpackaged product |
| `onsite_thermal_supply` | On-site natural-gas thermal supply | `conditional` | Include only when natural gas is combusted on site for shaping, pressing, drying, or space/process heat allocated to the product | Foreground utility generation | MJ of useful process heat delivered |
| `product_packaging` | Product packaging | `required` | Always describe the packaging state; rows may be not applicable only for a documented unpackaged factory-gate product | Foreground packaging | kg of net conforming reference product packaged |

### Process: Component preparation, forming, joining, finishing, and inspection (`component_forming_assembly`)

This process represents the product-specific sequence that transforms received materials and components into conforming unpackaged headgear or a headgear part. The route shall declare which atomic rows apply and shall add a separate atomic row for every actual material, component, utility, waste, or emission not already shown.

#### Inputs

##### Product flows

###### Woven cotton fabric for a lining, cover, or band (`cotton_fabric_input`)

Record woven cotton fabric only when it is an actual material of the declared product.

- Selected flow: Woven cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: supplier receipts adjusted for inventory change and assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Paperboard sheet for a foundation or peak (`paperboard_sheet_input`)

Record paperboard sheet only when it is cut or formed into the declared foundation, frame component, or peak.

- Selected flow: Paperboard sheet
- Flow property / unit: Mass / kg
- Amount rule: supplier receipts adjusted for inventory change and assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Mild steel wire for a hat frame (`steel_wire_input`)

Record mild steel wire only when it is formed into the declared hat frame or reinforcement.

- Selected flow: Mild steel wire
- Flow property / unit: Mass / kg
- Amount rule: supplier receipts adjusted for inventory change and assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Polyester elastic webbing for a head-band or chinstrap (`polyester_webbing_input`)

Record polyester elastic webbing only when it is incorporated into the declared head-band or chinstrap.

- Selected flow: Polyester elastic webbing
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated mass of issued webbing assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Polyester sewing thread (`polyester_thread_input`)

Record polyester sewing thread when sewing joins or finishes the declared product.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: issued spool mass less closing inventory, assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ncci-hat-manufacturing-2014`; `eu-pef-2021-2279`

###### Stainless steel buckle (`stainless_steel_buckle_input`)

Record a stainless steel buckle only when it is attached to the declared head-band or chinstrap.

- Selected flow: Stainless steel buckle
- Flow property / unit: Mass / kg
- Amount rule: accepted component count multiplied by measured unit mass, plus recorded component rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Water-based polyurethane adhesive (`waterborne_pu_adhesive_input`)

Record water-based polyurethane adhesive only when it is applied during assembly or finishing.

- Selected flow: Water-based polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: issued container mass less returned material and closing inventory, assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Purchased electricity (`manufacturing_electricity_input`)

Record metered purchased electricity for cutting, forming, sewing, pressing, inspection, ventilation, and allocated plant services.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: product-line or facility meter reading allocated to the declared lot using documented machine time or another causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_energy`
- Sources: `eu-pef-2021-2279`

###### Purchased steam (`purchased_steam_input`)

Record purchased steam separately when it is used for shaping, blocking, pressing, or finishing.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: steam meter or invoice quantity converted to delivered energy using documented pressure and enthalpy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_energy`
- Sources: `ncci-hat-manufacturing-2014`; `eu-pef-2021-2279`

###### Purchased process heat (`purchased_heat_input`)

Record purchased heat separately when heat is delivered without purchased steam.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: heat meter or invoice quantity assigned to the declared production lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_energy`
- Sources: `eu-pef-2021-2279`

###### Process water (`process_water_input`)

Record liquid process water separately when used for steam conditioning, cleaning, or a declared wet forming step.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: submeter reading or documented allocation of the facility water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_water`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming unpackaged CPC 28269 product (`unpackaged_product_output`)

The declared article or part is weighed after final manufacturing inspection and before packaging.

- Selected flow: Declared conforming unpackaged CPC 28269 product
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per manufacturing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_reject_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Cotton fabric cutting offcuts (`cotton_fabric_offcut_waste`)

Record clean and contaminated cotton fabric offcuts separately from other waste materials.

- Selected flow: Cotton fabric cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing waste mass plus closing accumulation less opening accumulation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_waste`
- Sources: `bhuiyan-2023-apparel-cutting-waste`

###### Paperboard cutting offcuts (`paperboard_offcut_waste`)

Record paperboard offcuts separately when paperboard foundations or peaks are cut or formed.

- Selected flow: Paperboard cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing waste mass plus closing accumulation less opening accumulation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_waste`
- Sources: `eu-pef-2021-2279`

###### Mild steel wire offcuts (`steel_wire_offcut_waste`)

Record mild steel wire offcuts separately when frames or reinforcements are formed.

- Selected flow: Mild steel wire offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing waste mass plus closing accumulation less opening accumulation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_waste`
- Sources: `eu-pef-2021-2279`

###### Polyester elastic webbing offcuts (`polyester_webbing_offcut_waste`)

Record polyester elastic webbing offcuts separately from cotton fabric and other textile wastes.

- Selected flow: Polyester elastic webbing offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing waste mass plus closing accumulation less opening accumulation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_waste`
- Sources: `bhuiyan-2023-apparel-cutting-waste`

###### Rejected declared CPC 28269 product (`rejected_product_waste`)

Record rejected finished product separately from material offcuts and disclose whether it is reworked, recycled, or disposed.

- Selected flow: Rejected declared CPC 28269 product
- Flow property / unit: Mass / kg
- Amount rule: measured rejected product mass leaving the rework loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_reject_mass`
- Sources: `bhuiyan-2023-apparel-cutting-waste`; `eu-pef-2021-2279`

###### Manufacturing wastewater (`manufacturing_wastewater_output`)

Record wastewater only when liquid water or steam condensate is discharged from the declared route.

- Selected flow: Manufacturing wastewater
- Flow property / unit: Mass / kg
- Amount rule: effluent meter reading or documented site water-balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_water`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`nmvoc_to_air`)

Record non-methane volatile organic compounds to air when adhesive, coating, ink, or cleaning-agent records and emission controls demonstrate an applicable source.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: product-specific material balance or measured emission multiplied by operating time, net of documented capture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021-2279`

###### Refrigerant R-410A to air (`r410a_to_air`)

Record this row only for equipment containing R-410A. Every other refrigerant shall be represented by its own chemically specific row.

- Selected flow: Refrigerant R-410A to air
- Flow property / unit: Mass / kg
- Amount rule: beginning charge plus additions minus recovered charge and ending charge, allocated to the declared production lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-pef-2021-2279`

### Process: On-site natural-gas thermal supply (`onsite_thermal_supply`)

Include this process only when natural gas is combusted on site. Do not also record the same useful heat as purchased heat or purchased steam.

#### Inputs

##### Product flows

###### Natural gas (`natural_gas_input`)

Record natural gas consumed by the boiler, heater, dryer, or press serving the declared route.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: fuel meter or invoice quantity converted using documented lower or higher heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_fuel`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Useful process heat (`useful_process_heat_output`)

Record useful heat delivered to the manufacturing process without assigning an external product credit.

- Selected flow: Useful process heat
- Flow property / unit: Energy / MJ
- Amount rule: measured delivered heat or fuel input multiplied by documented boiler efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_fuel`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_to_air`)

Calculate direct fossil carbon dioxide from the site-specific natural-gas record and a documented fuel carbon or emission factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: natural gas quantity multiplied by the documented site, supplier, or jurisdictional emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_fuel`
- Sources: `eu-pef-2021-2279`

###### Nitrogen oxides to air (`nox_to_air`)

Calculate direct nitrogen oxides from stack measurements or a documented source-specific factor.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or natural gas quantity multiplied by a documented NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming unpackaged product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_fuel`
- Sources: `eu-pef-2021-2279`

### Process: Product packaging (`product_packaging`)

Package the conforming product according to the declared factory-gate state. Primary and secondary packaging remain outside the net reference product mass.

#### Inputs

##### Product flows

###### Conforming unpackaged CPC 28269 product (`unpackaged_product_input`)

Transfer the accepted unpackaged product from manufacturing without adding its mass a second time to the foreground balance.

- Selected flow: Declared conforming unpackaged CPC 28269 product
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_reject_mass`
- Sources: `eu-pef-2021-2279`

###### Corrugated paperboard carton (`corrugated_carton_input`)

Record corrugated paperboard cartons separately from plastic film and other packaging.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: carton count multiplied by measured unit mass, adjusted for packaging rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene packaging film (`ldpe_film_input`)

Record low-density polyethylene film separately when used as a bag, wrap, or liner.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: film count or length multiplied by measured unit mass, adjusted for packaging rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `eu-pef-2021-2279`

###### Packaging electricity (`packaging_electricity_input`)

Record electricity for packaging equipment separately from manufacturing electricity when separately metered; otherwise allocate once and disclose the boundary.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: packaging-line meter reading or documented machine-time allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_energy`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged reference product (`reference_product_output`)

The flow quantity is the net conforming product mass; packaging mass is not included in the reference amount.

- Selected flow: Other headgear except headgear of rubber or of plastics, safety headgear and asbestos headgear, head-bands, linings, covers, hat foundations, hat frames, peaks and chinstraps, for headgear `0300f33f-f723-4c63-901f-6f0d58ebfbb7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming product; report packaging as separate input mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Corrugated paperboard packaging scrap (`corrugated_packaging_scrap`)

Record damaged cartons and carton trimming scrap separately from manufacturing paperboard offcuts.

- Selected flow: Corrugated paperboard packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured packaging scrap assigned to the packaging lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene packaging film scrap (`ldpe_packaging_scrap`)

Record rejected or trimmed LDPE packaging film separately from paperboard scrap.

- Selected flow: Low-density polyethylene packaging film scrap
- Flow property / unit: Mass / kg
- Amount rule: measured packaging scrap assigned to the packaging lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared lines and utilities | First use product-specific meters, production orders, machine time, material issues, and waste records to subdivide the inventory. | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | residual shared inputs and outputs | When subdivision is not possible, allocate by a documented causal physical relationship such as machine time, delivered heat, or net product mass. Do not use revenue merely because it is available. | `eu-pef-2021-2279` |
| `allocation_rework` | internal rework | Keep material and energy used for rework in the declared product inventory; count only rejects leaving the rework loop as waste. | `eu-pef-2021-2279` |
| `allocation_scrap_and_recycling` | sold or recycled scrap | Record each scrap stream at its measured mass. Do not subtract scrap revenue or an avoided-product credit from the factory-gate inventory unless a separately declared downstream recycling model applies. | `eu-pef-2021-2279`; `bhuiyan-2023-apparel-cutting-waste` |
| `allocation_disclosure` | all allocation | Report the shared process, allocation driver, numerator, denominator, period, and sensitivity when allocation materially affects the result. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `component_forming_assembly` | atomic material and component input | purchase, issue, inventory, and specification records | material identity; composition; supplier; opening and closing inventory; issued quantity; unit mass or conversion factor; lot | reconcile purchasing and stores records to the product order | kg | each production lot, aggregated monthly | representative continuous 12-month period or full shorter campaign | all lines making the declared product | inputs = issues + allocated inventory change; normalize by accepted net product mass | invoices; issue slips; weighed unit samples; specifications; inventory reconciliation |
| `cp_manufacturing_energy` | `component_forming_assembly`; `product_packaging` | purchased electricity, steam, and heat | meter, invoice, machine-hour, pressure, and temperature records | carrier; meter start/end; delivered unit; pressure; temperature; machine time; allocation driver | read submeter where available; otherwise reconcile invoice and allocate causally | kWh or MJ | monthly and each campaign | same period as production data | all included manufacturing and packaging operations | keep each carrier separate; no double counting between process and facility meters | calibrated meter record; invoice; allocation worksheet |
| `cp_process_water` | `component_forming_assembly` | process water and wastewater | water and effluent meter or balance records | inlet volume; discharge volume; density; steam condensate; inventory change | read meters or construct a documented site water balance | kg | monthly and each wet campaign | same period as production data | all included wet, steam, cleaning, and discharge points | normalize inlet and discharge separately by accepted net product mass | meter calibration; water bill; balance closure |
| `cp_manufacturing_waste` | `component_forming_assembly` | each atomic offcut waste | segregated waste-bin and dispatch records | material identity; bin mass; contamination; destination; opening and closing accumulation | weigh each waste stream before internal reuse or dispatch | kg | each lot or waste pickup | same period as production data | all cutting, forming, and trimming operations | opening accumulation + generated - closing accumulation; allocate by product order or causal driver | scale calibration; waste transfer note; segregation inspection |
| `cp_product_and_reject_mass` | `component_forming_assembly`; `product_packaging` | accepted product and rejected product | scale, inspection, and rework records | gross mass; tare; net accepted mass; rejected mass; rework return; article or part identity | weigh accepted and rejected outputs after inspection | kg | each lot | every included production lot | final inspection and packaging | accepted net mass is denominator; exclude packaging and rejects | scale calibration; inspection release; rework log |
| `cp_direct_emissions` | `component_forming_assembly` | NMVOC to air | material safety data, volatile-content, capture, and stack records | material input; volatile fraction; retained fraction; captured mass; measured concentration; flow and time | use measured release where available; otherwise close a product-specific material balance | kg | each campaign and annual stack test where applicable | same period as production data | all adhesive, coating, ink, and cleaning emission points | emitted mass = volatile input - retained - recovered - captured | supplier composition; stack report; control-device log |
| `cp_refrigerant_balance` | `component_forming_assembly` | each chemically specific refrigerant to air | equipment charge and service records | refrigerant identity; beginning charge; additions; recovered mass; ending charge; equipment allocation | mass balance each refrigerant separately | kg | each service event and annually | same period as production data | cooling equipment serving included operations | loss = beginning + additions - recovered - ending; allocate by causal cooling service | service invoice; charge log; leak test |
| `cp_onsite_fuel` | `onsite_thermal_supply` | natural gas, useful heat, fossil CO2, and NOx | fuel meter, heating value, efficiency, stack, and factor records | fuel volume or mass; heating value basis; delivered heat; boiler efficiency; emission factor; stack result | reconcile fuel meter and boiler operating records | MJ and kg | monthly | same period as production data | boilers or heaters serving included operations | calculate useful heat and each emission separately; avoid duplicate purchased heat | meter calibration; fuel invoice; factor source; stack test |
| `cp_packaging_materials` | `product_packaging` | each packaging material and scrap | packaging specification, issue, count, unit-mass, and scrap records | packaging identity; count; measured unit mass; issued quantity; rejects; scrap | weigh representative packaging units and reconcile issued quantities | kg | each packaging specification and lot | same period as production data | all packaging stations for the declared product | normalize each packaging material and its scrap separately by net product mass | packaging specification; scale record; issue and scrap log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_input` | each material or component | (issued mass + allocated inventory decrease - returned unused mass) / accepted net product mass | issue, return, inventory, and accepted-product records | kg input/kg reference product | `eu-pef-2021-2279` |
| `calc_count_to_mass` | buckles and packaging pieces | accepted or issued item count × measured representative unit mass / accepted net product mass | count, sampling plan, unit mass, accepted-product mass | kg input/kg reference product | `eu-pef-2021-2279` |
| `calc_energy_intensity` | each electricity, steam, heat, or fuel row | attributable carrier quantity / accepted net product mass, preserving carrier identity | meter or invoice, allocation driver, accepted-product mass | kWh or MJ/kg reference product | `eu-pef-2021-2279` |
| `calc_waste_intensity` | each waste stream | (opening accumulation + generated or dispatched mass - closing accumulation) / accepted net product mass | waste-bin, dispatch, accumulation, and product records | kg waste/kg reference product | `bhuiyan-2023-apparel-cutting-waste`; `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | each refrigerant | (beginning charge + additions - recovered charge - ending charge) × allocation share / accepted net product mass | charge and service records, allocation share, product mass | kg refrigerant to air/kg reference product | `eu-pef-2021-2279` |
| `calc_fuel_emission` | each direct combustion emission | fuel quantity × documented source-specific emission factor / accepted net product mass | fuel record, factor identity and basis, product mass | kg emission/kg reference product | `eu-pef-2021-2279` |
| `calc_mass_balance_closure` | manufacturing lot | received input mass = accepted product + rejects + each waste + measured or estimated emissions + closing inventory increase - opening inventory increase | all material, product, waste, emission, and inventory records | mass-balance difference and percent closure | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | The product description and order shall demonstrate CPC 28269 inclusion and identify the exact article or part, composition, size or dimensions, and route. | product specification; order; classification review |
| `dq_bom_completeness` | material and component inputs | Product-specific bill of materials shall reconcile with issued-material records; every actual material and component requires a separate atomic row. | approved BoM; issue slips; inventory reconciliation |
| `dq_route_completeness` | process map | The declared route shall state whether cutting, forming, joining, adhesive use, steam, purchased heat, on-site fuel, water, controlled cooling, and packaging apply. | process map; work instruction; equipment list |
| `dq_temporal_representativeness` | all foreground data | Use a representative continuous 12-month period where production is continuous or the complete campaign for shorter production; disclose seasonality and abnormal downtime. | production calendar; meter periods; campaign records |
| `dq_meter_and_scale_control` | mass, water, energy, and emissions | Retain calibration or verification status and quantify allocation where direct measurement is unavailable. | calibration certificate; meter register; allocation worksheet |
| `dq_waste_destination` | each waste flow | Record material identity, contamination, mass, and actual treatment or recipient; do not merge textile, metal, paperboard, plastic, wastewater, or rejected product. | transfer note; recycler receipt; waste register |
| `dq_range_use` | all provisional ranges | Broad `reasoned_estimate` ranges are screening aids only and shall not replace foreground values. Replacement with an empirical range requires at least two independent, boundary-compatible original sources or a reviewed multi-period foreground dataset. | range review record; original sources; foreground dataset |
| `dq_source_traceability` | factors and upstream datasets | Retain source identity, version, geography, technology, temporal coverage, and any proxy rationale. | dataset metadata; factor document; supplier declaration |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_identity` | product identity | Fail when the product is not demonstrably within CPC 28269 or is rubber/plastic headgear, safety headgear, asbestos headgear, or an adjacent CPC 28261/28262 product. | `unsd-cpc-3-explanatory-notes-2025` |
| `validate_reference_flow` | reference flow | Require exactly 1 kg net conforming product with the declared Tiangong product flow, Mass property, Units of mass group, and kg reference unit. | `unsd-cpc-3-explanatory-notes-2025` |
| `validate_required_qualifiers` | data package metadata | Fail when any required qualifier, product-specific BoM, route, or packaging state is missing. | `eu-pef-2021-2279` |
| `validate_atomic_inventory` | every inventory row | Fail any plural collection, combined carrier, unspecified packaging group, combined waste group, or refrigerant selector. Each selected flow shall be one material, carrier, waste, or elementary emission. | `eu-pef-2021-2279` |
| `validate_energy_separation` | utilities | Require separate rows for purchased electricity, purchased steam, purchased heat, natural gas, and every other actual fuel; reject double counting of on-site useful heat and purchased heat. | `eu-pef-2021-2279` |
| `validate_material_balance` | manufacturing lot | Require a documented mass-balance calculation and explanation of residual difference; packaging shall not be included in reference product mass. | `eu-pef-2021-2279` |
| `validate_waste_separation` | waste | Require each actual offcut, packaging scrap, wastewater, and rejected product stream to be separately identified and linked to a destination. | `bhuiyan-2023-apparel-cutting-waste`; `eu-pef-2021-2279` |
| `validate_direct_emissions` | direct emissions | Require separate chemically or physically specific rows for each applicable combustion emission, NMVOC release, particulate release, and refrigerant. A zero assertion requires equipment, material, or monitoring evidence. | `eu-pef-2021-2279` |
| `validate_allocation` | shared processes | Require subdivision evidence or a causal physical allocation driver and full disclosure of the allocation period and denominator. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | amount ranges | Reject lower-equals-upper empirical ranges and reject any source-backed empirical range inferred from fewer than two independent boundary-compatible original sources. Broad source-free ranges shall remain labelled `reasoned_estimate`. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific factory-gate `secondary_dataset` or `background_dataset` derived from reviewed foreground records |
| downstream_use | Modelling manufacturing of a declared CPC 28269 headgear article or part and linking it to downstream distribution, assembly, use, or end-of-life models |
| allowed_use | Use for the declared article or part, composition, route, site, geography, technology, and reporting period, with packaging and allocation disclosures retained |
| excluded_use | Do not use for rubber/plastic headgear, safety headgear, asbestos headgear, CPC 28261/28262 products, a materially different bill of materials or route, or comparative claims without additional review |
| required_metadata | PCR id; CPC code; Tiangong reference-flow UUIDs; exact product type; BoM; dimensions or size; net mass; route; site and geography; period; utilities; fuel and refrigerant applicability; packaging; allocation; upstream dataset versions; waste destinations |
| required_quality_disclosure | Meter and scale quality; sampling and conversions; mass-balance closure; data coverage; proxy datasets; allocation shares; outsourced operations; abnormal production; unresolved inventory UUIDs; provisional range use |
| update_trigger | Change in product scope, BoM, component supplier, forming or joining route, steam/heat/fuel system, refrigerant, packaging, site, allocation, waste treatment, or a material change in measured intensities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-explanatory-notes-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-20) | Exact CPC 28269 category identity and exclusions |
| `ncci-hat-manufacturing-2014` | Handbook (`handbook`) | National Council on Compensation Insurance, Item B-1428, *Revisions to Basic Manual Classifications and Appendix E—Classifications by Hazard Group*, hat-manufacturing description, 2014, https://www.mwcia.org/Media/Default/PDF/NewsFeed/Circulars/15-1672.pdf (retrieved 2026-08-20) | Target-specific process decomposition: received materials and parts, cutting, sewing, steaming, blocking or pressing, trimming, inspection, and packing |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-20) | Product-specific BoM and manufacturing data, inventory completeness, company-specific collection, allocation hierarchy, packaging, data quality, and validation |
| `bhuiyan-2023-apparel-cutting-waste` | Literature (`literature`) | Bhuiyan, M. A. R. et al., “Recycling of cotton apparel waste and its utilization as a thermal insulation layer in high performance clothing,” *Fashion and Textiles* 10, 22 (2023), https://doi.org/10.1186/s40691-023-00342-y (full text retrieved 2026-08-20) | Separate identification of cutting and sewing waste, rejected fabric, and other pre-consumer apparel waste; no quantitative range copied |
