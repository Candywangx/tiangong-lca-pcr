---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.medical-surgical-dental-or-veterinary-furniture-barbers-chairs-and-similar-chairs-havin-528e83f7
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Medical, surgical, dental or veterinary furniture; barbers' chairs and similar chairs, having rotating as well as both reclining and elevating movements

## 1. Scope and Applicability

This PCR covers cradle-to-factory-gate production of one complete item of special-purpose medical, surgical, dental or veterinary furniture. It also covers a complete barber's chair or similar chair only when the chair has rotating, reclining and elevating movements. Covered examples include operating and examination tables, mechanically adjustable hospital beds, dental chairs, treatment couches and corresponding veterinary furniture when their special furniture function determines product identity.

The PCR applies to manually, hydraulically, pneumatically or electrically adjusted products and to products with upholstered or non-upholstered contact surfaces. Product configuration, intended use, adjustment mechanism, load/performance class, net mass and market state must be declared. The foreground boundary includes purchased-material receipt, component preparation, fabrication, in-house surface treatment where applicable, final assembly, factory testing and packaging.

Ordinary domestic or office furniture without the special-purpose function, wheelchairs, standalone medical or dental instruments, diagnostic apparatus, sterilizers, separately sold replacement parts, building installation, distribution, use, maintenance, repair and end-of-life are excluded. A supplied dental chair that incorporates dental equipment remains in scope as furniture only for the furniture manufacturing inventory; separately modelled dental equipment must use its own applicable methodology. Source `un-cpc-3-0-structure-2025` establishes the CPC identity, while `epd-norway-npcr-026-2024` supports the complete-furniture, component, electrically operated furniture and surface-treatment context.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.medical-surgical-dental-or-veterinary-furniture-barbers-chairs-and-similar-chairs-havin-528e83f7 |
| classification_refs | CPC 3.0: 48180 — Medical, surgical, dental or veterinary furniture; barbers' chairs and similar chairs, having rotating as well as both reclining and elevating movements |
| covered_products | Complete medical, surgical, dental or veterinary furniture; complete barber's or similar chairs with rotating, reclining and elevating movements |
| excluded_products | Ordinary furniture; wheelchairs; standalone instruments, diagnostic apparatus and sterilizers; parts sold separately; distribution, use and end-of-life services |
| representative_product | One market-ready complete adjustable furniture item at the manufacturer's factory gate |
| production_route | Purchased materials and components → component preparation and fabrication → conditional surface treatment → assembly, factory testing and packaging |
| market_state | Finished, quality-released, packaged product at factory gate; new production unless a remanufactured route is separately declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision at the factory gate of one complete furniture item that performs the declared medical, surgical, dental, veterinary or qualifying multi-motion chair function |
| How much | One finished item |
| How well | Meets the manufacturer's declared intended use, adjustment functions, load/performance class, dimensional specification and quality-release criteria |
| How long or cycle | One manufacturing batch; service life and use-stage performance are outside this cradle-to-gate reference and must be declared separately if used downstream |
| reference_flow_link | The measured net product mass of the one finished item links the count-based declared unit to the mass-based TianGong reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | Measured net mass in kg of one quality-released finished item, excluding transport packaging |
| Reference product flow | Medical, surgical, dental or veterinary furniture, barbers' chairs and similar chairs, having rotating as well as both reclining and elevating movements `e39dcb5d-76b1-4daa-b234-4016b382ad57` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype and intended use; model/configuration; manual, hydraulic, pneumatic or electric adjustment route; included electrical/electronic and dental-equipment components; upholstery and surface-finish specification; load/performance class; net product mass; packaging configuration and mass; manufacturing site and geography; reporting period; new or declared remanufactured market state |

When constructing a foreground data package, every `Required qualifiers` item must be declared in dataset metadata, process notes, the reference-flow comment, product description or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the net mass of one quality-released product after final assembly and testing and before transport packaging; record packaging separately. |
| `component_count_to_mass` | purchased components and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert purchase counts to dry supplied mass using batch-specific weighing or documented supplier mass; retain count and conversion evidence. |
| `electricity_energy_basis` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter readings and convert billed electrical energy to MJ with the declared exact unit identity; disclose grid geography, voltage level and loss boundary. |
| `gas_volume_basis` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered gas volume and the billing or reference temperature and pressure; do not mix uncorrected and standard volumes. |
| `one_item_normalization` | all inventory rows | row-specific | row-specific | Allocate or calculate each exchange for the same reporting period, then normalize to one conforming finished item and disclose its net mass. |

## 5. System Boundary

The foreground system begins when purchased materials, components, packaging, electricity, fuel and process water cross the manufacturing-site gate. It ends when the complete item has passed factory testing and is packaged for dispatch. Upstream production datasets for every purchased input are linked as background; they are not recreated inside the foreground process.

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_include_manufacturing` | cradle-to-gate foreground | Include onsite component preparation, cutting/forming/machining/welding, conditional surface treatment, assembly, factory testing, rework attributable to conforming output and packaging. | epd-norway-npcr-026-2024 |
| `boundary_include_surface_treatments` | any applied finish | Declare each applied surface-treatment material and its onsite utilities, wastes and direct emissions even when the treatment is a small share of product mass. | epd-norway-npcr-026-2024 |
| `boundary_exclude_downstream` | downstream stages | Exclude distribution after the factory gate, installation, use, maintenance, repair, replacement and end-of-life from this dataset; disclose any downstream scenario separately. | epd-norway-npcr-026-2024 |
| `boundary_no_capital_goods` | manufacturing infrastructure | Exclude capital equipment and buildings unless the study goal explicitly requires them and the departure is disclosed. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, finished components, packaging, electricity, fuel and process water received at the manufacturing-site gate, with supplier and supplied-state records |
| starting_condition_role | Foreground manufacturing gate; upstream production remains in linked background datasets |
| product_classification_scope | Complete products within the reviewed CPC 48180 semantic boundary, independent of the external code as canonical identity |
| recursive_input_rule | If a complete item in the same product category enters refurbishment or remanufacture, record it once as a supplied product input at the declared starting condition and do not recursively expand its prior manufacturing in this foreground dataset |
| upstream_dataset_requirement | Link geography-, technology- and supplied-state-representative upstream datasets for every purchased material, component, energy carrier, water and packaging input |
| disclosure | Declare new or remanufactured route, product configuration, included mechanisms/electronics, net mass, surface-treatment route, packaging, site geography, reporting period, allocation and all excluded stages |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_fabrication` | Material and component preparation and fabrication | `required` | Always; record only atomic materials and components present in the declared bill of materials | Foreground frame, panel, upholstery and mechanism preparation | One conforming item leaving fabrication |
| `surface_treatment` | Surface preparation and coating | `conditional` | Include when degreasing, rinsing, coating or thermal curing occurs within the reporting-site boundary | Foreground finishing | One conforming set of treated parts |
| `assembly_testing_packaging` | Final assembly, factory testing and packaging | `required` | Always; conditional packaging rows apply only when the named component is used | Foreground completion and reference-product output | One quality-released packaged item |

### Process: Material and component preparation and fabrication (`material_fabrication`)

#### Inputs

##### Product flows

###### Hot-rolled strip steel (`hot_rolled_strip_steel`)

Record purchased hot-rolled non-alloy strip steel that is cut, formed or welded into the product.

- Selected flow: Hot rolled strip steel `984781e6-5296-48d7-a630-553209cd51c5`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused return for one conforming item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one quality-released finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_components`
- Sources:

###### Stainless-steel sheet (`stainless_steel_sheet`)

Record stainless-steel sheet only when it is present in the declared product bill of materials; the TianGong UUID remains unresolved.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused return for one conforming item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one quality-released finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_components`
- Sources:

###### Aluminium extrusion profile (`aluminium_extrusion_profile`)

Record purchased aluminium extrusion profile only when used in the frame or support structure.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus documented unused return for one conforming item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one quality-released finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_components`
- Sources:

###### Flexible polyurethane foam (`flexible_polyurethane_foam`)

Record flexible polyurethane cushioning foam only for upholstered configurations; the TianGong UUID remains unresolved.

- Selected flow: Flexible polyurethane foam
- Flow property / unit: Mass / kg
- Amount rule: measured foam mass incorporated in one conforming item, including attributable cutting loss before waste segregation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one quality-released upholstered item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_components`
- Sources:

###### PVC-coated polyester fabric (`pvc_coated_polyester_fabric`)

Record supplied PVC-coated polyester upholstery fabric only when used; the TianGong UUID remains unresolved.

- Selected flow: PVC-coated polyester fabric
- Flow property / unit: Mass / kg
- Amount rule: measured supplied fabric mass incorporated in one conforming item plus attributable cutting loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one quality-released upholstered item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_components`
- Sources:

###### Electric linear actuator (`electric_linear_actuator`)

Record a complete purchased electric linear actuator only for electrically adjusted configurations; the TianGong UUID remains unresolved.

- Selected flow: Electric linear actuator
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-documented mass of actuators installed in one conforming item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one quality-released electrically adjusted item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_components`
- Sources:

###### Hydraulic cylinder (`hydraulic_cylinder`)

Record a complete purchased hydraulic cylinder only for hydraulically adjusted configurations; the TianGong UUID remains unresolved.

- Selected flow: Hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-documented mass of cylinders installed in one conforming item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one quality-released hydraulically adjusted item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_components`
- Sources:

###### Steel screws (`steel_screws`)

Record purchased steel screws incorporated during fabrication or subassembly.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: count installed screws and convert to batch-specific measured or supplier-documented mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one quality-released finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_components`
- Sources:

###### Fabrication electricity (`fabrication_electricity`)

Record purchased electricity used by onsite cutting, forming, machining, welding and fabrication support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or reporting-period meter allocation to conforming fabrication output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one quality-released finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Scrap steel (`scrap_steel`)

Record segregated ferrous steel scrap generated by fabrication and transferred to its declared treatment destination.

- Selected flow: Scrap steel `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap generated net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one quality-released finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_scrap`
- Sources:

###### Aluminium scrap (`aluminium_scrap`)

Record segregated aluminium scrap only when aluminium fabrication occurs and transfer the actual mass to its declared destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap generated net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one quality-released item containing fabricated aluminium
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_scrap`
- Sources:

##### Elementary flows

### Process: Surface preparation and coating (`surface_treatment`)

#### Inputs

##### Product flows

###### Thermoset powder coating (`thermoset_powder_coating`)

Record one formulated thermoset powder-coating product only when onsite powder coating occurs; the TianGong UUID remains unresolved.

- Selected flow: Thermoset powder coating
- Flow property / unit: Mass / kg
- Amount rule: issued coating mass minus recovered coating returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one conforming set of coated parts for one finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_materials`
- Sources: epd-norway-npcr-026-2024

###### Sodium hydroxide (`surface_sodium_hydroxide`)

Record sodium hydroxide only when used in an onsite alkaline cleaning or surface-preparation bath.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active sodium-hydroxide mass added, calculated from solution mass and measured concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one conforming set of treated parts for one finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_materials`
- Sources:

###### Process water (`surface_process_water`)

Record process water supplied to onsite cleaning and rinse stages.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered water mass or volume converted with documented density and allocated to treated parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming set of treated parts for one finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_utilities`
- Sources:

###### Natural gas for curing (`surface_natural_gas`)

Record gaseous natural gas only when combusted onsite for coating-oven heat.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered and reference-condition-corrected gas volume allocated to conforming coated parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one conforming set of treated parts for one finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_utilities`
- Sources:

###### Surface-treatment electricity (`surface_treatment_electricity`)

Record purchased electricity used by cleaning, pumping, ventilation, coating application and curing equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or reporting-period meter allocation to conforming treated parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming set of treated parts for one finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record aqueous wastewater leaving onsite metal cleaning and rinsing before treatment or offsite transfer; the TianGong UUID remains unresolved.

- Selected flow: Metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass or volume converted with documented density and allocated to treated parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming set of treated parts for one finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_wastes`
- Sources:

###### Powder-coating waste (`powder_coating_waste`)

Record spent powder coating and booth/filter residue that leaves the process as a separately managed waste.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: weighed waste transferred to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming set of coated parts for one finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_wastes`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from curing (`surface_fossil_carbon_dioxide`)

Record only direct fossil carbon dioxide emitted by onsite natural-gas combustion; exclude upstream and purchased-electricity emissions from this elementary-flow row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated site fuel-carbon balance allocated to conforming coated parts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming set of treated parts for one finished item
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_direct_emissions`
- Sources:

### Process: Final assembly, factory testing and packaging (`assembly_testing_packaging`)

#### Inputs

##### Product flows

###### Corrugated board boxes (`corrugated_board_boxes`)

Record corrugated-board boxes used to dispatch one finished item.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of boxes consumed for one dispatched item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one packaged finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### PE-LD film (`pe_ld_film`)

Record low-density polyethylene film used to wrap or protect one finished item.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of PE-LD film consumed for one dispatched item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one packaged finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### Wooden pallet (`wooden_pallet`)

Record a wooden pallet only when it is dispatched with the product; declare pallet reuse and allocation.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass multiplied by the documented share assigned to one dispatched item
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one packaged finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### Assembly, testing and packaging electricity (`assembly_packaging_electricity`)

Record purchased electricity used by final assembly tools, adjustment/function tests and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or reporting-period meter allocation to quality-released items
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one quality-released finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-released medical or qualifying multi-motion furniture (`reference_product`)

Record the complete product only after it passes declared factory quality and adjustment-function tests.

- Selected flow: Medical, surgical, dental or veterinary furniture, barbers' chairs and similar chairs, having rotating as well as both reclining and elevating movements `e39dcb5d-76b1-4daa-b234-4016b382ad57`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of one quality-released finished item, excluding transport packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one quality-released finished item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product_release`
- Sources: un-cpc-3-0-structure-2025

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multi-product manufacturing | Subdivide and meter product lines, surface-treatment batches and test cells wherever technically feasible before applying allocation. |  |
| `allocation_shared_utilities` | shared electricity, fuel and water | Use process submeters first; otherwise allocate with a documented physical driver such as machine time, treated area, bath throughput or product mass that causally represents resource use. |  |
| `allocation_scrap` | steel, aluminium and coating wastes | Record the measured outgoing waste at the foreground boundary and its actual destination; do not claim avoided virgin-production credits inside this cradle-to-gate inventory. |  |
| `allocation_rework` | rework and rejects | Assign rework and reject burdens to the reporting-period conforming output that caused them; disclose unusual campaigns and do not omit failed factory tests. |  |
| `allocation_pallet_reuse` | reusable wooden pallets | Allocate pallet mass by the documented number of dispatch uses or another auditable physical reuse record; a single-use assumption must be explicit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_components` | `material_fabrication` | each named purchased material or component | approved bill of materials, issue/return record, supplier specification, check weight | model; lot; item code; count; issued mass; returned mass; installed mass; supplier mass | reconcile production orders to stock issue/return and verify count-to-mass conversions by weighing | kg and count | each production order; monthly reconciliation | representative reporting year or declared campaign | all manufacturing sites in dataset | sum net issued mass for conforming items and normalize by quality-released count | approved BOM revision, calibrated-scale record, supplier certificate, stock reconciliation |
| `cp_process_electricity` | `material_fabrication`; `assembly_testing_packaging` | purchased electricity | submeter, utility meter and production log | meter start/end; multiplier; process; operating time; conforming count | read dedicated submeters or allocate facility meter with documented physical driver | MJ | monthly and at campaign boundaries | same period as production output | reporting-site boundary | subtract documented non-production loads, allocate by process and normalize by conforming item | meter calibration/status, invoice reconciliation, allocation worksheet |
| `cp_fabrication_scrap` | `material_fabrication` | each named metal scrap | scale ticket, scrap-bin log, transfer note | material identity; gross; tare; net mass; internal reuse; destination | weigh segregated scrap and reconcile to material mass balance | kg | each transfer; monthly reconciliation | same period as material consumption | reporting-site fabrication area | sum net external transfer by material and normalize by conforming item | calibrated scale, transfer documentation, mass-balance check |
| `cp_surface_materials` | `surface_treatment` | each named coating or bath chemical | purchase, issue, concentration and recovery record | product identity; solution mass; active concentration; issued mass; recovered mass; batch | reconcile chemical/coating issue and recovery; calculate active mass where applicable | kg | each bath make-up or coating batch | same period as treated output | onsite surface-treatment boundary | sum net consumed mass and allocate to conforming treated parts | SDS/product specification, concentration test, stock reconciliation |
| `cp_surface_utilities` | `surface_treatment` | process water, natural gas and electricity | water/gas/electricity meter and treatment log | meter start/end; correction factor; reference conditions; treated batch; conforming output | use dedicated meters or documented causal allocation | kg, m3 and MJ | per batch where metered; monthly minimum | same period as surface-treated output | onsite surface-treatment boundary | correct units/reference conditions, allocate to conforming treated parts and normalize per item | meter calibration/status, invoices, batch records |
| `cp_surface_wastes` | `surface_treatment` | each named wastewater or coating waste | discharge meter, tank/scale ticket, manifest | waste identity; quantity; density; treatment; destination; date | meter or weigh each segregated waste and reconcile with inputs | kg | each discharge/transfer; monthly reconciliation | same period as surface-treatment inputs | onsite generation to first waste receiver | sum actual outgoing mass by waste identity and normalize per item | discharge record, density measurement, waste manifest, mass-balance check |
| `cp_surface_direct_emissions` | `surface_treatment` | direct fossil carbon dioxide | stack measurement or site fuel-carbon balance | stack flow; concentration; time; gas volume; fuel carbon content; oxidation basis; allocation driver | measure stack mass or calculate from metered fuel and documented carbon balance | kg | per test campaign or reporting period | same period as curing fuel | direct onsite emission boundary | calculate direct fossil CO2 only and allocate to conforming treated parts | instrument calibration, laboratory fuel data, calculation worksheet |
| `cp_packaging_components` | `assembly_testing_packaging` | each named packaging component | packaging BOM, issue record, check weight, reuse log | component identity; count; unit mass; consumed mass; reuse cycles; product count | weigh packaging or multiply issued counts by verified unit mass | kg and count | each packaging configuration; monthly reconciliation | same period as dispatched output | reporting-site packaging boundary | calculate mass assigned to one dispatched item by component and documented reuse | approved packaging BOM, scale record, pallet reuse log |
| `cp_reference_product_release` | `assembly_testing_packaging` | reference product | final quality-release, function-test and scale record | serial/model; configuration; net mass; test result; disposition; date | weigh each model sample or every item as required and count only conforming released output | kg and count | each item or statistically justified batch | full reporting period | all sites and models in dataset | sum released net mass and count; report mass per item and variability | calibrated scale, signed test record, nonconformance log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | named BOM materials | net material input = issued mass − documented unused return; separately report waste rather than subtracting external scrap from the purchased-input exchange | issued mass; return mass; conforming count | kg per item |  |
| `calc_count_to_mass` | screws and packaging | component mass = installed or issued count × batch-specific verified unit mass; reconcile with check weight | count; verified unit mass; check weight | kg per item |  |
| `calc_active_sodium_hydroxide` | sodium hydroxide | active NaOH mass = solution mass × measured mass fraction; retain concentration and solution-state records | solution mass; measured concentration | kg active NaOH per item |  |
| `calc_process_allocation` | shared utility meters | process exchange per item = corrected reporting-period process quantity × causal allocation share ÷ conforming item count | corrected meter quantity; allocation driver; conforming count | row unit per item |  |
| `calc_surface_fossil_co2` | direct curing emission | use measured stack mass, or calculate fossil CO2 from metered gas and documented fuel-carbon balance; exclude upstream supply and electricity emissions | stack data or corrected gas volume; fuel carbon content; oxidation basis; allocation driver | kg fossil CO2 per item |  |
| `calc_mass_balance` | fabrication and surface treatment | reconcile named material inputs with product incorporation, internal return, named waste and documented stock change; investigate unexplained differences | input, return, product, waste and stock-change masses | mass-balance closure and exception record |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve model, intended use, adjustment mechanism, included electronics/equipment, upholstery/finish, performance class, net mass and market state for every represented configuration. | approved specification, BOM, drawings, quality-release record |
| `dq_temporal_match` | all foreground exchanges | Use input, waste, emission and conforming-output records from the same representative year or declared campaign; explain substitutions and shutdown/start-up effects. | dated meters, invoices, production logs, manifests |
| `dq_site_coverage` | multi-site datasets | Include every site performing an in-scope manufacturing step or declare exclusions and their quantitative significance. | site list, process map, consolidated ledger |
| `dq_meter_and_scale` | measured quantities | Record calibration or verification status, resolution, missing-data treatment and unit/reference-condition conversions. | calibration certificate, verification log, calculation workbook |
| `dq_bom_completeness` | materials and packaging | Reconcile the approved material and packaging BOM to the inventory; surface treatments and electrical/electronic components must be explicitly disclosed. | signed BOM reconciliation and exception list |
| `dq_waste_destination` | each waste flow | Preserve waste identity, hazardous status where applicable, first receiver, treatment route and whether material is internally reused. | waste manifest, receiver record, internal reuse log |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm that the output is exactly one quality-released complete item, its measured net mass uses the reference UUID and packaging is excluded from that net mass. | un-cpc-3-0-structure-2025 |
| `validate_scope_identity` | product category | Confirm the declared item has a special medical, surgical, dental or veterinary furniture function, or that a barber/similar chair has rotating, reclining and elevating movements. | un-cpc-3-0-structure-2025 |
| `validate_atomic_inventory` | all inventory rows | Reject collection labels and combined exchanges; each row must retain one concrete flow, one direction, one flow type, one property and one unit. |  |
| `validate_conditional_routes` | route-specific rows | A conditional material, component, surface-treatment, fuel, waste or packaging row must be present only when its named route occurs and must not be silently replaced with a different flow. |  |
| `validate_mass_balance` | fabrication and finishing | Reconcile input, return, product incorporation, named waste and stock change; investigate and disclose unexplained differences before dataset release. |  |
| `validate_direct_emissions` | fossil carbon dioxide | Confirm that the row contains only direct onsite fossil CO2 and excludes upstream natural-gas and purchased-electricity emissions. |  |
| `validate_source_and_uuid_gaps` | unresolved inventory | Preserve UUID-empty rows and range-evidence needs as review metadata; do not substitute proxy UUIDs or unsupported numeric ranges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and site-specific cradle-to-factory-gate foreground dataset suitable for controlled publication as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Supply-chain LCA of medical, surgical, dental or veterinary furniture and qualifying multi-motion chairs; product manufacturing comparison only after reference flow, configuration, boundary and data quality are aligned |
| allowed_use | Use for the declared model/configuration, manufacturing geography, technology, reporting period and new/remanufactured state; aggregate variants only with disclosed production-weighted records |
| excluded_use | Do not represent distribution, installation, service life, clinical use, maintenance, repair, replacement or end-of-life; do not apply to ordinary furniture, standalone equipment or parts sold separately |
| required_metadata | canonical PCR id; product subtype/intended use; model/configuration; mechanism and electronics; upholstery/finish; performance class; net mass; packaging; site/geography; reporting period; market state; allocation; data sources; unresolved identities and range needs |
| required_quality_disclosure | foreground coverage, meter/scale status, BOM reconciliation, temporal and site representativeness, allocation drivers, mass-balance exceptions, waste destinations and any proxy or missing data |
| update_trigger | change in product configuration or mechanism, material/finish/packaging BOM, manufacturing site or route, energy supply, allocation method, waste treatment, reporting period representativeness, reference UUID or resolved inventory UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48180 classification identity and English title |
| `un-cpc-1-1-zh-2002` | `official_guidance` | United Nations, Central Product Classification Version 1.1, Chinese edition, ST/ESA/STAT/SER.M/77/Ver.1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | Verified professional Chinese terminology for the stable 48180 category |
| `epd-norway-npcr-026-2024` | `official_guidance` | The Norwegian EPD Foundation, NPCR 026 Part B for Furniture and components of furniture, version 3.0, issued 8 October 2024, https://www.epd-norge.no/getfile.php/13161869-1741627951/PCRer/NPCR%20026%20%20Furniture_update_2024_v3.0_final-2.pdf | Complete-furniture and component scope, one-piece reference, electrically operated furniture, product-stage surface treatments, material disclosure and downstream-stage separation |
| `eu-ecolabel-furniture-2016` | `standard` | Commission Decision (EU) 2016/1332 of 28 July 2016 establishing ecological criteria for the award of the EU Ecolabel for furniture, https://eur-lex.europa.eu/eli/dec/2016/1332/oj/eng | Furniture definition and atomic component/material terminology including frames, fasteners, textiles, coated fabrics and polyurethane foam |
