---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.portable-electric-lamps-designed-to-function-by-their-own-source-of-energy-except-those-8a00f87c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Portable electric lamps, lighting fittings, non-electrical lamps, and illuminated signs

## 1. Scope and Applicability

This PCR governs foreground factory-gate data production for complete lighting or illuminated-identification products within the semantic boundary stated below. It covers product-specific material and component receipt, optional on-site surface finishing, assembly, final testing, packing, and release at the manufacturing gate. The product instance must be declared; this PCR does not treat the listed product forms as interchangeable.

Use-stage electricity or fuel, installation, maintenance, distribution after the factory gate, and end-of-life are outside the foreground boundary. Upstream production of purchased materials, components, electricity, fuels, water, and packaging remains connected through supplier or background datasets. Manufacture of separate lamps or light sources, Christmas-tree lighting sets, LED-only luminaires classified separately, public-space or thoroughfare lighting fittings, vehicle or cycle lamps, and separately traded parts are excluded.

The representative route is assembly and factory testing of one finished electric luminaire from purchased mechanical, optical, and electrical components. Surface finishing, a primary battery, a non-electrical fuel reservoir and wick, and an illuminated-sign face panel are conditional elements. This common route avoids enumerating every product-form and material combination.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.portable-electric-lamps-designed-to-function-by-their-own-source-of-energy-except-those-8a00f87c |
| classification_refs | CPC 3.0: 46531 |
| covered_products | Self-powered portable electric lamps other than cycle or motor-vehicle lamps; ceiling or wall electric lighting fittings other than fittings for public open spaces or thoroughfares; electric table, desk, bedside, and floor-standing lamps; non-electrical lamps and lighting fittings; illuminated signs, illuminated name-plates, and like finished goods. |
| excluded_products | Cycle and motor-vehicle lamps; public-space or thoroughfare lighting fittings; Christmas-tree lighting sets; luminaires designed solely for LED light sources when classified separately; separately traded lamps/light sources; and separately traded parts. |
| representative_product | One complete electric indoor luminaire assembled from a mechanical chassis, optical component, wiring, control gear, and declared light-source module, factory-tested and packed for sale. |
| production_route | Purchased-component receipt; conditional chassis surface finishing; mechanical/electrical or fuel-system assembly; performance and safety testing; packing; factory-gate release. |
| market_state | Complete finished and packed product at the manufacturer's gate, with the light source, control gear, battery, fuel reservoir, wick, mounting hardware, and sign panel included or excluded exactly as sold and declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared complete finished lighting or illuminated-identification product ready for its intended operation. |
| How much | 1 kg of finished product. |
| How well | Conforms to the declared product subtype, outgoing luminous flux or illuminated visual area, rated electrical or fuel-system characteristics, included components, safety/performance test criteria, and packaging state. |
| How long or cycle | One factory production cycle to the manufacturing gate; assigned service life and replaceable-component assumptions must be declared for any downstream functional comparison. |
| reference_flow_link | Exactly 1 kg of accepted packed finished-product output from `final_testing_and_packaging`; item count and packaging mass are mandatory qualifiers. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished packaged lighting or illuminated-identification product within this PCR scope |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; electric or non-electrical design; mounting or portability form; model and bill-of-material revision; outgoing luminous flux or illuminated visual area; rated power, voltage and frequency where applicable; light-source technology and whether included/replaceable; control-gear inclusion; battery chemistry, capacity and inclusion where applicable; fuel type and reservoir capacity where applicable; assigned service life; product net mass; packed gross mass; production site and period; packaging configuration |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The mass-based reference amount is a factory-production accounting basis, not a claim of functional equivalence across product subtypes. Comparative lighting studies must normalize products to compatible light output, service life, operating pattern, and delivered function.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg of accepted complete product in the declared sale configuration. Record item count, net product mass, and packed gross mass for each model or production-weighted model group. |
| `mu_mass_bom` | material, component, intermediate, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert piece counts to dry as-supplied mass from verified component weights; preserve measured moisture or coating-solids basis where it changes mass balance. |
| `mu_electricity` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy and convert from kWh using 1 kWh = 3.6 MJ; disclose voltage level, grid geography, and allocation method. |
| `mu_gas_volume` | natural-gas row | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the temperature, pressure, wet/dry basis, and supplier conversion used for metered gas volume; do not combine natural gas with other fuels. |
| `mu_water_mass` | process-water row | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert a volume meter to mass only with a documented density and the same temporal aggregation as the finishing batch. |
| `mu_internal_transfer` | foreground intermediates | Mass | kg | The output mass of each internal intermediate must equal the quantity transferred to the next process plus separately recorded loss, inventory change, or rework. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased chassis, optical, electrical, fuel-system, sign-panel, finishing, utility, and packaging inputs are received at the reporting facility in the actual as-supplied state used for the declared product. |
| starting_condition_role | The foreground begins at receipt of purchased inputs and covers only transformations, assembly, tests, packing, and losses controlled by the reporting manufacturer. |
| product_classification_scope | One declared finished product instance within the semantic scope of this PCR; adjacent CPC lighting products and separately traded parts remain outside. |
| recursive_input_rule | If a complete product within this same PCR category is purchased and incorporated, record it once as a distinct product input with an upstream dataset and do not recursively expand its manufacture inside this foreground dataset. |
| upstream_dataset_requirement | Every purchased material, component, energy carrier, water flow, and packaging item crossing the boundary requires an upstream dataset matching substance or product identity, geography, technology, and delivery state. |
| disclosure | Declare outsourced versus on-site operations, included components, coating route, test procedures, rejected-product handling, packaging state, cut-offs, data gaps, and any process shared with other products. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_boundary` | all foreground processes | Include receipt-to-factory-gate activities controlled by the manufacturer: applicable finishing, assembly, factory tests, packing, rework, rejects, and on-site waste generation. Exclude installation, downstream distribution, use, maintenance, and end-of-life. | `pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012` |
| `sb_component_completeness` | product bill of materials | Include every component delivered with the product or needed for the declared sale configuration, and state explicitly whether the light source, control gear, battery, mounting parts, fuel reservoir, wick, or sign panel is supplied. | `pep-ecopassport-psr-0014-2023`, `us-doe-luminaires-definition` |
| `sb_upstream_connection` | purchased inputs | Model upstream raw-material, component, energy, water, and packaging production in linked background datasets; do not count those upstream processes again as foreground manufacturing. | `us-doe-led-lca-part2-2012` |
| `sb_variant_condition` | conditional routes | Instantiate only the rows and processes physically present for the declared product. Mark demonstrably absent conditional rows `not_applicable`; never substitute another material, battery chemistry, fuel, or component. | `un-cpc-3-structure-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `surface_finishing` | Chassis pretreatment and powder coating | `conditional` | Include when metal chassis pretreatment or powder coating is performed under the reporting facility's control. | foreground finishing | kg coated chassis transferred to assembly |
| `product_assembly` | Mechanical, optical, electrical, fuel-system, or sign assembly | `required` | Include the actual assembly operations and only the subtype-specific component rows present in the declared product. | foreground assembly | accepted unpacked assemblies |
| `final_testing_and_packaging` | Final test, packing, and factory-gate release | `required` | Include acceptance tests, rework/reject disposition, primary sales packaging, and release for every declared product. | foreground testing and packing | 1 kg accepted packed finished product |

### Process: Chassis pretreatment and powder coating (`surface_finishing`)

#### Inputs

##### Product flows

###### Uncoated metal chassis (`uncoated_metal_chassis`)

Record the one product-specific metal chassis entering on-site pretreatment or coating.

- Selected flow: Uncoated metal lighting-product chassis
- Flow property / unit: Mass / kg
- Amount rule: Weighed or BOM-derived mass entering the finishing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_materials`
- Sources: `pep-ecopassport-psr-0014-2023`

###### Thermoset powder coating (`powder_coating_material`)

Record the specific powder coating formulation consumed; do not combine it with liquid paint or pretreatment chemicals.

- Selected flow: Thermoset polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus receipts minus closing stock and separately recovered powder
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_materials`
- Sources:

###### Alkaline pretreatment chemical (`finish_sodium_hydroxide`)

Include only when sodium hydroxide is actually added to the metal-pretreatment bath.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: As-supplied sodium hydroxide product mass issued to the finishing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_materials`
- Sources:

###### Finishing water (`finish_process_water`)

Record process water supplied to pretreatment, rinsing, or booth cleaning within this process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or tank-balance water entering the finishing process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_materials`
- Sources:

###### Finishing electricity (`finish_electricity`)

Record electricity supplied to pretreatment pumps, ventilation, powder application, and curing equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Submetered electricity or documented equipment-runtime allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_energy`
- Sources:

###### Curing natural gas (`finish_natural_gas`)

Include only when gaseous natural gas is burned in an on-site curing oven.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered gas allocated to the declared finishing batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Coated chassis (`coated_chassis`)

Record the one product-specific coated chassis transferred to assembly.

- Selected flow: Powder-coated metal lighting-product chassis
- Flow property / unit: Mass / kg
- Amount rule: Accepted coated chassis mass transferred to `product_assembly`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_outputs`
- Sources:

##### Waste flows

###### Pretreatment wastewater (`pretreatment_wastewater`)

Record the aqueous metal-pretreatment effluent transferred to the actual on-site or off-site treatment route.

- Selected flow: Metal-pretreatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or tank balance, excluding clean stormwater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_outputs`
- Sources:

###### Spent coating powder (`spent_coating_powder`)

Record unrecovered thermoset powder-coating waste leaving the process.

- Selected flow: Spent thermoset polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Weighed collected powder sent to its documented waste route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_outputs`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from curing (`finish_fossil_co2`)

Include direct fossil carbon dioxide only for on-site natural-gas combustion; upstream grid emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculate from allocated gas quantity, supplier carbon factor, and documented oxidation factor using `calc_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_energy`
- Sources:

### Process: Mechanical, optical, electrical, fuel-system, or sign assembly (`product_assembly`)

#### Inputs

##### Product flows

###### Uncoated chassis entering assembly (`uncoated_chassis_for_assembly`)

Use this row when the declared product is assembled without the on-site finishing process.

- Selected flow: Uncoated metal lighting-product chassis ready for assembly
- Flow property / unit: Mass / kg
- Amount rule: Weighed or BOM-derived mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `pep-ecopassport-psr-0014-2023`

###### Coated chassis entering assembly (`coated_chassis_for_assembly`)

Use this row only when `surface_finishing` produces the coated chassis.

- Selected flow: Powder-coated metal lighting-product chassis ready for assembly
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `coated_chassis`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Glass optical component (`glass_optical_component`)

Include the product-specific glass lens, diffuser, shade, or chimney when supplied with the declared product.

- Selected flow: Formed soda-lime glass optical component
- Flow property / unit: Mass / kg
- Amount rule: Verified BOM quantity multiplied by measured component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `us-doe-luminaires-definition`, `us-doe-led-lca-part2-2012`

###### Polycarbonate optical component (`polycarbonate_optical_component`)

Include the one polycarbonate lens or diffuser actually supplied; do not combine it with other polymers.

- Selected flow: Injection-moulded polycarbonate optical component
- Flow property / unit: Mass / kg
- Amount rule: Verified BOM quantity multiplied by measured component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `us-doe-luminaires-definition`

###### Steel mounting component (`steel_mounting_component`)

Include the steel bracket or mounting plate delivered with the declared finished product.

- Selected flow: Zinc-coated steel mounting bracket
- Flow property / unit: Mass / kg
- Amount rule: Verified BOM quantity multiplied by measured component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `us-doe-luminaires-definition`

###### Copper wire (`copper_wire`)

Include insulated copper wire cut and installed in an electric product.

- Selected flow: PVC-insulated copper wire
- Flow property / unit: Mass / kg
- Amount rule: Issued length multiplied by verified mass per metre, net of recorded offcuts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `us-doe-luminaires-definition`

###### LED module (`led_module`)

Include only when an LED module is delivered as part of the declared product.

- Selected flow: LED module
- Flow property / unit: Mass / kg
- Amount rule: Verified BOM quantity multiplied by measured module mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012`

###### Electronic control gear (`electronic_control_gear`)

Include the specific driver, ballast, or control gear supplied with the product.

- Selected flow: Electronic luminaire control gear
- Flow property / unit: Mass / kg
- Amount rule: Verified BOM quantity multiplied by measured control-gear mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `pep-ecopassport-psr-0014-2023`, `us-doe-luminaires-definition`

###### Primary battery (`primary_battery`)

Include one declared battery chemistry only when the portable electric lamp is sold with that battery.

- Selected flow: Alkaline manganese primary battery
- Flow property / unit: Mass / kg
- Amount rule: Supplied battery count multiplied by measured as-sold battery mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Fuel reservoir (`fuel_reservoir`)

Include the reservoir when a non-electrical lamp is sold with a liquid-fuel container.

- Selected flow: Steel liquid-fuel lamp reservoir
- Flow property / unit: Mass / kg
- Amount rule: Verified BOM quantity multiplied by measured empty reservoir mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Lamp wick (`wick`)

Include the wick only when supplied with the non-electrical lamp.

- Selected flow: Braided cotton lamp wick
- Flow property / unit: Mass / kg
- Amount rule: Supplied wick count or length multiplied by verified mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Illuminated-sign face panel (`illuminated_sign_face_panel`)

Include the one product-specific sign or name-plate face panel supplied with an illuminated-sign product.

- Selected flow: Printed acrylic illuminated-sign face panel
- Flow property / unit: Mass / kg
- Amount rule: Verified BOM quantity multiplied by measured panel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Epoxy adhesive (`epoxy_adhesive`)

Record the as-supplied two-part epoxy adhesive consumed in assembly.

- Selected flow: Two-part epoxy adhesive
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus receipts minus closing stock and separately weighed uncured waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `us-doe-led-lca-part2-2012`

###### Lead-free solder paste (`solder_paste`)

Include only when soldering is performed under foreground control.

- Selected flow: Tin-silver-copper lead-free solder paste
- Flow property / unit: Mass / kg
- Amount rule: Issued paste mass minus returned usable paste, allocated to accepted assemblies
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `us-doe-led-lca-part2-2012`

###### Assembly electricity (`assembly_electricity`)

Record electricity for assembly tools, soldering, local extraction, and assembly-line support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Submetered electricity or documented runtime allocation to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled unpacked product (`assembled_unpacked_product`)

Record each accepted assembled product transferred to final test before sales packaging.

- Selected flow: Assembled unpacked lighting product
- Flow property / unit: Mass / kg
- Amount rule: Accepted assembly count multiplied by measured unpacked product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_outputs`
- Sources:

##### Waste flows

###### Solder dross (`solder_dross`)

Record oxidized lead-free solder dross leaving the soldering operation.

- Selected flow: Tin-silver-copper solder dross
- Flow property / unit: Mass / kg
- Amount rule: Weighed dross transferred to the documented recycling or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_outputs`
- Sources:

###### Rejected electronic assembly (`rejected_electronic_assembly`)

Record a failed populated electronic lighting assembly only when it leaves foreground control as waste.

- Selected flow: Rejected populated luminaire electronic assembly
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected electronic assemblies sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_outputs`
- Sources:

##### Elementary flows

### Process: Final test, packing, and factory-gate release (`final_testing_and_packaging`)

#### Inputs

##### Product flows

###### Assembled product entering test (`assembled_product_for_test`)

Record the unpacked assembled product received from `product_assembly`.

- Selected flow: Assembled unpacked lighting product entering final test
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred from `assembled_unpacked_product`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_pack_inputs`
- Sources:

###### Testing electricity (`testing_electricity`)

Record electricity used for burn-in, electrical safety, photometric, sign illumination, and packing equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Submetered test and packing electricity or documented test-power × duration allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_energy`
- Sources:

###### Corrugated carton (`corrugated_board_carton`)

Include the corrugated fibreboard carton delivered with the product.

- Selected flow: Corrugated fibreboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Carton count multiplied by verified dry carton mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_pack_inputs`
- Sources: `pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012`

###### Polyethylene film bag (`polyethylene_film_bag`)

Include the one low-density polyethylene film bag supplied as primary protective packaging.

- Selected flow: Low-density polyethylene protective film bag
- Flow property / unit: Mass / kg
- Amount rule: Bag count multiplied by verified film-bag mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_pack_inputs`
- Sources: `pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished lighting product (`finished_lighting_product`)

This is the declared reference-product output after acceptance testing and packing.

- Selected flow: Finished packaged lighting or illuminated-identification product within this PCR scope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg of accepted finished product; record corresponding item count and packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_outputs`
- Sources: `un-cpc-3-structure-2025`

##### Waste flows

###### Rejected finished product (`rejected_finished_product`)

Record a failed complete lighting product only when it leaves foreground control as waste rather than being reworked.

- Selected flow: Rejected finished lighting product
- Flow property / unit: Mass / kg
- Amount rule: Weighed failed finished products sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_outputs`
- Sources:

###### Corrugated carton scrap (`corrugated_board_scrap`)

Record corrugated fibreboard offcuts or damaged cartons leaving packing as waste.

- Selected flow: Corrugated fibreboard carton scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed carton scrap sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_outputs`
- Sources:

###### Polyethylene film scrap (`polyethylene_film_scrap`)

Record low-density polyethylene film offcuts or rejected bags leaving packing as waste.

- Selected flow: Low-density polyethylene packaging film scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed film scrap sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged lighting product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_outputs`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | shared manufacturing lines | Prefer subdivision, submetering, job records, or equipment-runtime records before allocation. | `pep-ecopassport-psr-0014-2023` |
| `al_physical` | residual shared inputs and outputs | Allocate unresolved shared foreground quantities by a documented physical driver that causes the burden, such as machine time, coated surface area, test duration, or mass throughput. | `pep-ecopassport-psr-0014-2023` |
| `al_mass_fallback` | co-products without a better causal driver | Apply output-mass allocation only when subdivision and a more specific physical relationship are not feasible; disclose all allocated products and the factor. | `pep-ecopassport-psr-0014-2023` |
| `al_scrap` | production scrap and recovered material | Record scrap mass and its actual treatment or recycling input without avoided-burden credit inside the foreground gate; any substitution credit belongs to a separately declared downstream model. | `us-doe-led-lca-part2-2012` |
| `al_rework` | reworked units | Keep rework materials and energy in the foreground numerator and count only the finally accepted item in the reference output. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_finish_materials` | `surface_finishing` | chassis, coating, sodium hydroxide, and water inputs | purchase, issue, stock, BOM, scale, and meter records | material identity; lot; opening stock; receipts; issues; returns; closing stock; chassis count and mass; water meter | reconcile stock balance to finishing batches and verified BOM | kg | each batch; monthly reconciliation | representative continuous 12 months or declared campaign | all finishing lines serving declared product | net consumed quantity divided by kg of accepted reference product | calibrated scale/meter records; stock reconciliation; batch traveller |
| `cp_finish_energy` | `surface_finishing` | electricity and natural gas inputs and direct combustion CO2 | utility submeters, invoices, runtime logs, and supplier fuel data | meter start/end; kWh; m3; reference conditions; equipment runtime; product throughput; carbon factor; oxidation factor | submeter or allocate by documented equipment runtime and throughput | MJ; m3; kg | each batch or monthly meter period | same period as production denominator | all finishing utilities and curing equipment | allocated utility divided by kg of accepted reference product; calculate direct CO2 separately | meter calibration; invoice reconciliation; supplier fuel specification |
| `cp_finish_outputs` | `surface_finishing` | coated chassis and finishing wastes | transfer count, scale, effluent meter, tank, and waste manifest records | accepted chassis count and mass; effluent mass or volume; powder waste mass; destination | reconcile output, inventory change, and waste to input material balance | kg | each batch and each waste shipment | same period as finishing inputs | all finishing outputs under site control | total output or waste divided by kg of accepted reference product | transfer tickets; scale checks; discharge meter; waste manifests |
| `cp_assembly_bom` | `product_assembly` | product-specific assembly inputs | controlled BOM, issue/return, component count, mass and length records | model; BOM revision; component identity; quantity; unit mass; wire length and mass per metre; opening/closing consumable stock | verify BOM against as-built sample and reconcile issued consumables | kg | each model revision; each production batch | representative 12 months or declared campaign | all assembly lines serving declared product | net component or consumable mass divided by kg of accepted reference product | approved BOM; change control; calibrated component weights; stock reconciliation |
| `cp_assembly_energy` | `product_assembly` | assembly electricity | submeter and equipment-runtime records | kWh; meter period; equipment power; runtime; line throughput | submeter or allocate by documented runtime | MJ | batch or monthly | same period as assembly output | all assembly equipment and local extraction | allocated electricity divided by accepted assemblies | meter calibration; runtime log; invoice reconciliation |
| `cp_assembly_outputs` | `product_assembly` | accepted assemblies and assembly wastes | production count, mass, reject and waste records | accepted count; unpacked mass; solder dross mass; rejected assembly mass; disposition | reconcile transfers, rework, rejects, and waste to issued inputs | kg | each batch and each waste shipment | same period as assembly inputs | all assembly outputs under site control | output or waste divided by kg of accepted reference product | batch traveller; calibrated scale; reject log; waste manifest |
| `cp_test_pack_inputs` | `final_testing_and_packaging` | assembled product and packaging inputs | transfer count, packaging BOM, issue and component-weight records | assembly count/mass; carton count/mass; bag count/mass; packaging revision | reconcile issued packaging to packed output and packaging scrap | kg | each batch | representative 12 months or declared campaign | all final-test and packing lines | net input divided by kg of accepted packed product | packing BOM; component weight checks; issue/return records |
| `cp_test_energy` | `final_testing_and_packaging` | testing and packing electricity | test logs, submeter and equipment power-time records | kWh; test type; power; duration; tested units; packing runtime | submeter or calculate power × time and reconcile to the meter | MJ | each test batch or monthly | same period as accepted packed output | all test rigs and packing equipment | allocated electricity divided by kg of accepted packed product | test-system calibration; meter record; test log |
| `cp_final_outputs` | `final_testing_and_packaging` | accepted reference product and final wastes | acceptance, packing, scale, reject and waste records | accepted item count; net and gross mass; failed count/mass; rework; carton scrap; film scrap; destination | count accepted products and weigh each segregated waste stream | item; kg | each batch and each waste shipment | representative 12 months or declared campaign | all factory-gate outputs for declared product | exactly 1 kg accepted product as reference; each waste divided by accepted product mass | acceptance report; scale calibration; reject disposition; waste manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_bom_mass` | counted components | component mass per kg reference product = net component count × verified unit mass ÷ accepted finished-product mass in kg | BOM quantity; unit mass; accepted finished-product mass | kg component per kg reference product |  |
| `calc_stock_consumption` | coating, adhesive, and solder | consumed mass = opening stock + receipts − returns − closing stock − separately recovered reusable material | stock and issue records | kg consumed per kg reference product |  |
| `calc_energy_allocation` | shared equipment energy | allocated energy = metered period energy × declared causal allocation factor ÷ accepted finished-product mass in kg | meter reading; runtime or throughput driver; accepted finished-product mass | MJ per kg reference product | `pep-ecopassport-psr-0014-2023` |
| `calc_fossil_co2` | on-site natural-gas combustion | direct fossil CO2 = allocated gas quantity × documented supplier carbon factor × oxidation factor; preserve factor units and reference conditions | gas volume; carbon factor; oxidation factor | kg fossil CO2 per kg reference product |  |
| `calc_transfer_balance` | internal intermediates | prior-process accepted output = next-process input + separately recorded inventory change + rework + loss | transfer and inventory records | reconciled kg internal intermediate |  |
| `calc_final_yield` | final product and rejects | first-pass and final yield must be calculated from tested, reworked, rejected, and accepted unit counts; the reference output remains one finally accepted item | test and disposition counts | item yield disclosure and kg reject per accepted item |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | declared product | Freeze the model/BOM/packaging revision and all required qualifiers for the reporting period; aggregate models only with a disclosed production-weighting method. | approved specifications, BOM, model list, and production volumes |
| `dq_completeness` | inventory | Reconcile every purchased component and consumable in the sale configuration, each energy meter, each internal transfer, and each segregated output; explain zero, excluded, and unavailable rows. | mass/energy reconciliation and completeness checklist |
| `dq_measurement` | measured quantities | Use calibrated meters and scales or document equipment-runtime estimates and their uncertainty when direct measurement is unavailable. | calibration certificates, meter logs, and estimation records |
| `dq_temporal` | foreground data | Use a continuous representative 12-month period when available; otherwise disclose the campaign dates, seasonality, downtime, and extrapolation. | dated production, utility, and waste records |
| `dq_supplier_match` | upstream datasets | Match purchased flows to actual material, component, chemistry, geography, technology, and delivery state; disclose every proxy. | supplier specifications and dataset mapping review |
| `dq_conditional_routes` | category variants | Demonstrate why each conditional process or row is present or absent for the declared product; do not average incompatible electric, battery, fuel, sign, or optical configurations. | route declaration and signed BOM review |
| `dq_uuid_status` | Tiangong identities | Preserve UUID-empty rows as unresolved until a public state-100 identity is audited; do not promote a parts flow or technology-specific component as the finished reference product. | manifest unresolved list and finalized UUID-search receipt |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | reference flow | Verify exactly 1 kg of accepted finished product, matching model/BOM/packaging revision, is the quantitative reference and that item count and packaging mass are declared. | `un-cpc-3-structure-2025` |
| `vr_scope` | product identity | Confirm the declared product is within the covered product list and is not a vehicle/cycle lamp, public-space/thoroughfare fitting, separate light source, Christmas-tree set, separately classified LED-only luminaire, or part. | `un-cpc-3-structure-2025` |
| `vr_component_set` | sale configuration | Confirm included light source, control gear, battery, mounting parts, fuel reservoir, wick, sign panel, and packaging match the product actually sold. | `pep-ecopassport-psr-0014-2023`, `us-doe-luminaires-definition` |
| `vr_atomic_flows` | process inventory | Reject any row that combines materials, utilities, fuels, packaging, wastes, or emissions; every selected flow must denote one atomic exchange. |  |
| `vr_balance` | foreground processes | Reconcile material inputs, internal transfers, product, rework, inventory change, and segregated wastes; investigate unexplained imbalance before publication. |  |
| `vr_energy` | electricity and natural gas | Check meter period, production denominator, unit conversion, grid geography, gas reference conditions, and allocation driver. |  |
| `vr_conditional` | conditional processes and rows | Require an explicit applicability result for finishing, LED module, control gear, battery, fuel reservoir, wick, sign panel, and each packaging component. |  |
| `vr_comparability` | downstream use | Reject comparative claims based only on mass; require compatible light output or illuminated function, lifetime, operating pattern, product state, and system boundary. | `pep-ecopassport-psr-0014-2023`, `us-doe-led-lca-part2-2012` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may be used as `background_dataset` only for the declared product configuration and geography |
| downstream_use | Foreground product-footprint construction and downstream process or lifecyclemodel projections for a matching finished lighting or illuminated-identification product |
| allowed_use | Factory-gate modelling when product subtype, BOM, included components, performance qualifiers, mass, packaging, technology, geography, and period match the intended use |
| excluded_use | Functional comparison across unlike product subtypes; unqualified substitution for separate light sources, parts, LED-only luminaires classified elsewhere, public-space lighting, vehicle/cycle lamps, use-stage electricity/fuel, installation, maintenance, or end-of-life |
| required_metadata | canonical PCR id; model/BOM/packaging revisions; all reference-flow qualifiers; production site and period; foreground boundary; conditional-route decisions; allocation; accepted item count; net/gross mass; data-source mapping; unresolved UUIDs and ranges |
| required_quality_disclosure | meter and scale coverage; temporal and site representativeness; mass/energy reconciliation; supplier-data quality; proxies; cut-offs; rework and reject treatment; background-dataset versions; uncertainty and data gaps |
| update_trigger | Change in product subtype, BOM, light source/control gear/battery/fuel system, sign panel, finishing route, packaging, site, energy supply, allocation, service-life declaration, or a cumulative production mix change that makes the dataset unrepresentative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 46531 identity, inclusions, exclusions, and distinction from adjacent lighting products. |
| `pep-ecopassport-psr-0014-2023` | `standard` | PEP ecopassport, PSR-0014-ed2-EN-2023 07 13, Product Specific Rules for Luminaires. https://register.pep-ecopassport.org/documents (retrieved 2026-09-04) | Grid-connected luminaire subset definition; reference-flow qualifiers; component completeness; manufacturing-stage boundary; co-product allocation. |
| `us-doe-led-lca-part2-2012` | `official_guidance` | U.S. Department of Energy, Life-Cycle Assessment of Energy and Environmental Impacts of LED Lighting Products, Part 2: LED Manufacturing and Performance, PNNL-21443, June 2012. https://www.energy.gov/documents/2012ledlca-pt2pdf-0 (retrieved 2026-09-04) | Lamp manufacturing boundary, raw materials and components, assembly/manufacturing energy, packaging, and performance normalization context. |
| `us-doe-luminaires-definition` | `official_guidance` | U.S. Department of Energy, Luminaires. https://www.energy.gov/cmei/buildings/luminaires (retrieved 2026-09-04) | Functional definition and mechanical, optical, electrical, and electronic luminaire component types. |
