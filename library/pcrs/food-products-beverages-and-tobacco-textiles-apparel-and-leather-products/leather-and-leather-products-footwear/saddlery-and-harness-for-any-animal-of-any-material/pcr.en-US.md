---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.saddlery-and-harness-for-any-animal-of-any-material
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Saddlery and harness, for any animal, of any material

## 1. Scope and Applicability

This PCR applies to factory-gate production of saddles, bridles, reins, halters, collars, traces, draft harnesses and comparable animal tack whose primary function is riding support, animal control, restraint or load transfer. It covers leather, coated-textile, synthetic-sheet, webbing and mixed-material constructions.

The foreground starts when finished leather, synthetic materials, webbing, padding, hardware, thread, adhesives, coatings and packaging are received. It includes material preparation, cutting, sewing, hardware assembly, on-site edge or surface finishing when performed, drying, inspection and packaging. Upstream manufacture of leather, polymers, textiles, metals and chemicals is represented by linked supplier-specific or secondary datasets rather than being recreated inside the assembly facility.

Excluded products are luggage and handbags, human belts or protective equipment, veterinary medical devices, animal clothing unrelated to riding/control/load transfer, and sporting articles that are not animal tack. Distribution, retail, use, animal care, repair and end-of-life are outside this factory-gate rule.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.saddlery-and-harness-for-any-animal-of-any-material` |
| classification_refs | CPC 3.0: 29210, exact mapping |
| covered_products | Saddles, bridles, reins, halters, collars, traces, harnesses and comparable animal tack of leather, synthetic materials, textile webbing or mixed construction |
| excluded_products | Luggage; handbags; human apparel, belts or PPE; veterinary devices; unrelated animal clothing; non-tack sporting goods |
| representative_product | A finished, inspected item of saddlery or harness at the factory gate |
| production_route | Leather route, synthetic-sheet route, webbing route, or a documented combination, followed by cutting, assembly and packaging; surface finishing is conditional |
| market_state | Finished product ready to leave the manufacturing facility |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished item of saddlery or harness that provides its declared riding-support, animal-control, restraint or load-transfer function |
| How much | 1 kg net mass of conforming finished product, excluding all packaging mass |
| How well | Conforms to the declared product specification for animal/use class, materials, dimensions, load or restraint duty, stitching, hardware, finish and inspection criteria |
| How long or cycle | One manufacturing reporting period; expected service life may be disclosed but is not imposed by this factory-gate mass reference |
| reference_flow_link | `reference_product_output` in `final_inspection_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Saddlery and harness, for any animal, of any material `850d448a-711c-4151-8745-7aece3fc2acb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; animal and intended use; material bill of materials; product dimensions or size; declared load/restraint class where applicable; construction and stitching; hardware alloys and finishes; coating/adhesive system; packaging configuration; production geography and period |

When constructing a foreground data package, every required qualifier shall be declared in metadata, process notes, the reference-flow comment or an equivalent field. A missing qualifier makes the data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass after final inspection and before packaging; normalize every exchange to exactly 1 kg. |
| `material_mass` | materials, hardware, chemicals, packaging and solid/liquid wastes | Mass | kg | Use calibrated weighing, invoices corrected by stock change, or documented batch reconciliation; keep each material and waste separate. |
| `electricity_energy` | each process electricity input | Energy | kWh | Use submetered consumption where available; otherwise allocate a reconciled facility meter using documented machine time and rated load. |
| `fuel_energy` | natural gas used for on-site drying | Energy | MJ | Convert metered gas to energy with the supplier calorific value for the reporting period and retain the source record. |
| `compressed_air_volume` | compressed air input | Volume | m3 | State pressure and measurement condition; do not report compressor electricity again if compressed air is modelled as a purchased product input. |
| `solvent_balance` | isopropanol input, waste and air emission | Mass | kg | Reconcile solvent input with product retention, recovered solvent, liquid waste and separately calculated or measured air emission. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | finished constituent materials, components and packaging received at the reporting facility |
| starting_condition_role | cradle-to-gate upstream datasets terminate at each purchased input; this PCR foreground models conversion and assembly |
| product_classification_scope | CPC 3.0 subclass 29210 |
| recursive_input_rule | A purchased or transferred item already classified in CPC 29210 remains a visible product input and is linked to its own upstream dataset; do not recursively reconstruct it in this foreground |
| upstream_dataset_requirement | Match material, technology, geography and period; for leather inputs disclose species, tanning system, thickness and finish, and use tanning-background data only upstream unless tanning occurs on site |
| disclosure | Declare included routes, excluded conditional operations, facility boundary, reporting period, allocation and all unresolved upstream proxies |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_finished_inputs` | all routes | Start the foreground at receipt of finished leather, synthetic sheet/fabric, webbing, padding, hardware, thread, chemicals and packaging; link their manufacture to upstream datasets. | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |
| `boundary_include_factory_operations` | reporting facility | Include all on-site preparation, cutting, sewing, hardware assembly, applicable finishing/drying, inspection, utilities, packaging, wastes and emissions. | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |
| `boundary_conditional_finishing` | surface finishing | Include edge coating, topcoating, cleaning, wastewater, drying fuel and emissions only when performed at the facility; document their absence otherwise. | `eu-tanning-bref`; `eu-pef-2021-2279` |
| `boundary_upstream_leather` | leather route | Keep hide preparation and tanning upstream unless physically performed at the reporting facility; disclose the linked leather dataset and its tanning chemistry. | `eu-tanning-bref` |
| `boundary_no_cutoff` | foreground exchanges | Do not omit a known foreground material, utility, packaging component, waste or emission because it is small; record it or document a justified not-applicable determination. | `eu-pef-2021-2279` |
| `boundary_exclude_downstream` | factory-gate result | Exclude distribution, retail, use, animal care, maintenance, repair and end-of-life from this dataset. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | Material preparation and cutting | `required` | All production routes | `foreground_process` | `cut_component_kit_output` |
| `assembly_hardware` | Sewing and hardware assembly | `required` | All production routes; record only hardware actually used | `foreground_process` | `assembled_unfinished_saddlery_output` |
| `surface_finishing` | Edge treatment, surface finishing and drying | `conditional` | Include only when coating, edge treatment, solvent cleaning or thermal drying occurs at the reporting facility | `foreground_process` | `finished_unpacked_saddlery_output` |
| `final_inspection_packaging` | Final inspection and packaging | `required` | All production routes | `foreground_process` | `reference_product_output` |

### Process: Material preparation and cutting (`material_cutting`)

#### Inputs

##### Product flows

###### Finished bovine leather (`finished_bovine_leather_input`)

Finished bovine leather crosses the material preparation and cutting boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Finished bovine leather
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Polyurethane-coated polyester fabric (`polyurethane_coated_polyester_fabric_input`)

Polyurethane-coated polyester fabric crosses the material preparation and cutting boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Polyurethane-coated polyester fabric
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Woven polyester webbing (`woven_polyester_webbing_input`)

Woven polyester webbing crosses the material preparation and cutting boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Woven polyester webbing
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Ethylene-vinyl acetate foam padding (`eva_foam_padding_input`)

Ethylene-vinyl acetate foam padding crosses the material preparation and cutting boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Ethylene-vinyl acetate foam padding
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Marker paper (`marker_paper_input`)

Marker paper crosses the material preparation and cutting boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Marker paper
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Electricity, facility supply (`cutting_electricity_input`)

Electricity, facility supply crosses the material preparation and cutting boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the dedicated meter value or an allocated share of a reconciled facility meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`


##### Waste flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


##### Elementary flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


#### Outputs

##### Product flows

###### Cut saddlery component kit (`cut_component_kit_output`)

Cut saddlery component kit is the separately recorded intermediate output transferred to the next foreground process. Reconcile its quantity with the process material balance.

- Selected flow: Cut saddlery component kit
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or batch-reconciled mass transferred to the next process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### Waste flows

###### Finished bovine leather offcut (`finished_leather_offcut_output`)

Finished bovine leather offcut leaves the material preparation and cutting process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Finished bovine leather offcut
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Polyurethane-coated polyester fabric offcut (`coated_fabric_offcut_output`)

Polyurethane-coated polyester fabric offcut leaves the material preparation and cutting process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Polyurethane-coated polyester fabric offcut
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Woven polyester webbing offcut (`polyester_webbing_offcut_output`)

Woven polyester webbing offcut leaves the material preparation and cutting process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Woven polyester webbing offcut
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Ethylene-vinyl acetate foam offcut (`eva_foam_offcut_output`)

Ethylene-vinyl acetate foam offcut leaves the material preparation and cutting process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Ethylene-vinyl acetate foam offcut
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waste marker paper (`waste_marker_paper_output`)

Waste marker paper leaves the material preparation and cutting process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste marker paper
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_cutting_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### Elementary flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


### Process: Sewing and hardware assembly (`assembly_hardware`)

#### Inputs

##### Product flows

###### Cut saddlery component kit (`cut_component_kit_assembly_input`)

Cut saddlery component kit crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Cut saddlery component kit
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Polyester sewing thread (`polyester_sewing_thread_input`)

Polyester sewing thread crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Stainless steel saddlery buckle (`stainless_steel_buckle_input`)

Stainless steel saddlery buckle crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Stainless steel saddlery buckle
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Stainless steel D-ring (`stainless_steel_d_ring_input`)

Stainless steel D-ring crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Stainless steel D-ring
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Stainless steel saddlery rivet (`stainless_steel_rivet_input`)

Stainless steel saddlery rivet crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Stainless steel saddlery rivet
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Brass saddlery eyelet (`brass_eyelet_input`)

Brass saddlery eyelet crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Brass saddlery eyelet
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waterborne polyurethane adhesive (`waterborne_polyurethane_adhesive_input`)

Waterborne polyurethane adhesive crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Waterborne polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Electricity, facility supply (`assembly_electricity_input`)

Electricity, facility supply crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the dedicated meter value or an allocated share of a reconciled facility meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`

###### Compressed air, facility supply (`compressed_air_input`)

Compressed air, facility supply crosses the sewing and hardware assembly boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Compressed air, facility supply
- Flow property / unit: Volume / m3
- Amount rule: Record the delivered or metered volume at the declared pressure and measurement condition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`


##### Waste flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


##### Elementary flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


#### Outputs

##### Product flows

###### Assembled unfinished saddlery or harness (`assembled_unfinished_saddlery_output`)

Assembled unfinished saddlery or harness is the separately recorded intermediate output transferred to the next foreground process. Reconcile its quantity with the process material balance.

- Selected flow: Assembled unfinished saddlery or harness
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or batch-reconciled mass transferred to the next process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### Waste flows

###### Waste polyester sewing thread (`waste_polyester_thread_output`)

Waste polyester sewing thread leaves the sewing and hardware assembly process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Rejected stainless steel saddlery hardware (`rejected_stainless_steel_hardware_output`)

Rejected stainless steel saddlery hardware leaves the sewing and hardware assembly process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Rejected stainless steel saddlery hardware
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waste waterborne polyurethane adhesive (`waste_waterborne_polyurethane_adhesive_output`)

Waste waterborne polyurethane adhesive leaves the sewing and hardware assembly process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste waterborne polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_hardware_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### Elementary flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


### Process: Edge treatment, surface finishing and drying (`surface_finishing`)

#### Inputs

##### Product flows

###### Assembled unfinished saddlery or harness (`assembled_unfinished_surface_input`)

Assembled unfinished saddlery or harness crosses the edge treatment, surface finishing and drying boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Assembled unfinished saddlery or harness
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waterborne acrylic leather edge coating (`waterborne_acrylic_edge_coating_input`)

Waterborne acrylic leather edge coating crosses the edge treatment, surface finishing and drying boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Waterborne acrylic leather edge coating
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Waterborne polyurethane leather topcoat (`waterborne_polyurethane_topcoat_input`)

Waterborne polyurethane leather topcoat crosses the edge treatment, surface finishing and drying boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Waterborne polyurethane leather topcoat
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Isopropanol (`isopropanol_cleaning_solvent_input`)

Isopropanol crosses the edge treatment, surface finishing and drying boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `eu-tanning-bref`

###### Process water (`process_water_input`)

Process water crosses the edge treatment, surface finishing and drying boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `eu-tanning-bref`

###### Electricity, facility supply (`surface_finishing_electricity_input`)

Electricity, facility supply crosses the edge treatment, surface finishing and drying boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the dedicated meter value or an allocated share of a reconciled facility meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_utility_records`
- Sources: `eu-pef-2021-2279`

###### Natural gas (`natural_gas_drying_input`)

Natural gas crosses the edge treatment, surface finishing and drying boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the dedicated meter value or an allocated share of a reconciled facility meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_utility_records`
- Sources: `eu-pef-2021-2279`


##### Waste flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


##### Elementary flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


#### Outputs

##### Product flows

###### Finished unpacked saddlery or harness (`finished_unpacked_saddlery_output`)

Finished unpacked saddlery or harness is the separately recorded intermediate output transferred to the next foreground process. Reconcile its quantity with the process material balance.

- Selected flow: Finished unpacked saddlery or harness
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or batch-reconciled mass transferred to the next process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### Waste flows

###### Waste waterborne acrylic leather edge coating (`waste_acrylic_edge_coating_output`)

Waste waterborne acrylic leather edge coating leaves the edge treatment, surface finishing and drying process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste waterborne acrylic leather edge coating
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Waste waterborne polyurethane leather topcoat (`waste_polyurethane_topcoat_output`)

Waste waterborne polyurethane leather topcoat leaves the edge treatment, surface finishing and drying process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste waterborne polyurethane leather topcoat
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Waste isopropanol cleaning solvent (`waste_isopropanol_output`)

Waste isopropanol cleaning solvent leaves the edge treatment, surface finishing and drying process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `eu-tanning-bref`

###### Aqueous leather surface-finishing wastewater (`surface_finishing_wastewater_output`)

Aqueous leather surface-finishing wastewater leaves the edge treatment, surface finishing and drying process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Aqueous leather surface-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_finishing_material_records`
- Sources: `eu-pef-2021-2279`, `eu-tanning-bref`


##### Elementary flows

###### Isopropanol, to air (`isopropanol_air_output`)

Isopropanol, to air leaves the edge treatment, surface finishing and drying process as one separately quantified elementary emission; do not combine it with other volatile compounds or combustion species.

- Selected flow: Isopropanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from the measured isopropanol input, separately measured recovery and waste quantities, and any direct emission measurement; document the solvent balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_finishing_emission_records`
- Sources: `eu-pef-2021-2279`, `eu-tanning-bref`

###### Carbon dioxide, fossil, to air (`fossil_co2_air_output`)

Carbon dioxide, fossil, to air leaves the edge treatment, surface finishing and drying process as one separately quantified elementary emission; do not combine it with other volatile compounds or combustion species.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured natural-gas energy and a source-appropriate, cited emission factor or use a direct stack measurement; retain the calculation record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_finishing_emission_records`
- Sources: `eu-pef-2021-2279`

###### Nitrogen dioxide, to air (`nitrogen_dioxide_air_output`)

Nitrogen dioxide, to air leaves the edge treatment, surface finishing and drying process as one separately quantified elementary emission; do not combine it with other volatile compounds or combustion species.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured natural-gas energy and a source-appropriate, cited emission factor or use a direct stack measurement; retain the calculation record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_finishing_emission_records`
- Sources: `eu-pef-2021-2279`


### Process: Final inspection and packaging (`final_inspection_packaging`)

#### Inputs

##### Product flows

###### Finished unpacked saddlery or harness (`finished_unpacked_packaging_input`)

Finished unpacked saddlery or harness crosses the final inspection and packaging boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Finished unpacked saddlery or harness
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Electricity, facility supply (`final_inspection_electricity_input`)

Electricity, facility supply crosses the final inspection and packaging boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the dedicated meter value or an allocated share of a reconciled facility meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`

###### Paper hangtag (`paper_hangtag_input`)

Paper hangtag crosses the final inspection and packaging boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Paper hangtag
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Low-density polyethylene protective bag (`ldpe_protective_bag_input`)

Low-density polyethylene protective bag crosses the final inspection and packaging boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Low-density polyethylene protective bag
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Corrugated paperboard shipping carton (`corrugated_shipping_carton_input`)

Corrugated paperboard shipping carton crosses the final inspection and packaging boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Polypropylene packing tape (`polypropylene_packing_tape_input`)

Polypropylene packing tape crosses the final inspection and packaging boundary as one separately recorded input. Apply this card only when this exact material or utility is used; do not aggregate substitutes or alternatives into it.

- Selected flow: Polypropylene packing tape
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed, invoiced or stock-reconciled quantity crossing this process boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### Waste flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


##### Elementary flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


#### Outputs

##### Product flows

###### Saddlery and harness, for any animal, of any material (`reference_product_output`)

The conforming finished reference product leaves the reporting facility after inspection. Its net product mass excludes hangtag, protective bag, carton and tape mass.

- Selected flow: Saddlery and harness, for any animal, of any material `850d448a-711c-4151-8745-7aece3fc2acb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fixed at 1 kg net mass of conforming finished product; packaging mass is excluded.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_reference_output_records`
- Sources: `un-cpc-official`, `eu-pef-2021-2279`


##### Waste flows

###### Waste corrugated paperboard (`waste_corrugated_paperboard_output`)

Waste corrugated paperboard leaves the final inspection and packaging process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waste low-density polyethylene film (`waste_ldpe_film_output`)

Waste low-density polyethylene film leaves the final inspection and packaging process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waste polypropylene packing tape (`waste_polypropylene_tape_output`)

Waste polypropylene packing tape leaves the final inspection and packaging process as one separately identified waste stream. Keep its composition, contamination state and actual treatment destination in the foreground record.

- Selected flow: Waste polypropylene packing tape
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or container-reconciled quantity leaving the process and its actual treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging_records`
- Sources: `eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### Elementary flows

No direct exchanges of this flow type are expected; document any exception as a separate atomic row.


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | distinct products, routes and batches | Prefer separate meters, batch records and process subdivision so burdens are directly assigned before any allocation. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | unavoidable shared utilities and wastes | Allocate by a documented causal physical driver such as machine time, metered energy, treated area or processed mass. | `eu-pef-2021-2279` |
| `allocation_economic_last_resort` | shared burdens without a defensible physical driver | Use economic allocation only as a last resort and disclose prices, period, sensitivity and affected exchanges. | `eu-pef-2021-2279` |
| `allocation_no_avoided_burden_scrap` | offcuts and rejected hardware | Record actual waste treatment or sale at the boundary; do not apply an avoided-burden recycling credit inside the foreground result. | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_cutting_records` | `material_cutting` | material, electricity, intermediate and offcut rows | purchase/stock, cutting batch, submeter and waste records | flow name; material specification; opening/closing stock; purchases; batch issue; output; waste; kWh; timestamp | reconcile stock and batch issues; weigh output/offcuts; read meter or allocate reconciled meter | kg; kWh | each batch, aggregated monthly | same reporting period as reference output | reporting facility | sum atomic rows, then divide by conforming reference-product mass | calibration, invoices, stock ledger, batch sheet, meter record and waste ticket |
| `cp_assembly_hardware_records` | `assembly_hardware` | thread, each hardware item, adhesive, electricity, compressed air, intermediate and waste rows | bill of materials, issue/return, machine, meter and waste records | atomic item; alloy/formulation; quantity; mass; batch; machine time; kWh; m3; waste; destination | reconcile BOM with issue/return and batch output; separately meter or allocate utilities | kg; kWh; m3 | each batch, aggregated monthly | same reporting period | reporting facility | sum by atomic flow and normalize to reference mass | approved BOM, supplier specification, batch record, meter record and waste ticket |
| `cp_surface_finishing_material_records` | `surface_finishing` | coating, solvent, water, intermediate and waste/wastewater rows | formulation, issue/return, batch, water meter and waste records | formulation; solids; input mass; returned mass; water; output; waste; wastewater; destination | reconcile issued and returned chemicals; weigh waste; meter water; document route applicability | kg | each finishing batch | same reporting period | finishing area at reporting facility | sum each atomic flow and normalize to reference mass | supplier SDS/specification, batch sheet, water record, waste manifest and wastewater record |
| `cp_surface_finishing_utility_records` | `surface_finishing` | electricity and natural-gas rows | submeter, gas invoice and equipment log | kWh; gas volume; calorific value; MJ; machine time; batch; timestamp | read submeter and gas meter; convert gas using period supplier calorific value | kWh; MJ | each batch or meter interval, aggregated monthly | same reporting period | finishing/drying equipment | direct sum or causal allocation documented by machine time | meter calibration, invoices and equipment logs |
| `cp_surface_finishing_emission_records` | `surface_finishing` | isopropanol, fossil CO2 and nitrogen dioxide air rows | solvent balance, stack measurement or emission-factor calculation | measured inputs; recovery; waste; retained mass; gas MJ; factor; measured concentration; flow; duration | calculate solvent residual and combustion emissions or use direct measurement; cite every factor | kg | each campaign or reporting period | same reporting period | finishing/drying emission points | aggregate each chemical species separately | calculation sheet, factor citation, sampling report and mass-balance closure |
| `cp_final_packaging_records` | `final_inspection_packaging` | unpacked product, electricity, each package component and package waste | inspection, packaging BOM, issue/return, meter and waste records | accepted/rejected mass; packaging item; issued/returned mass; kWh; waste; destination | reconcile accepted output and each packaging component; weigh package waste; read or allocate electricity meter | kg; kWh | each batch, aggregated monthly | same reporting period | inspection and packing area | sum atomic rows and normalize to accepted net product mass | inspection release, packaging specification, stock record, meter record and waste ticket |
| `cp_reference_output_records` | `final_inspection_packaging` | reference product | final release and net-mass records | product subtype; qualifiers; accepted units; net mass; packaging tare; batch; date | weigh conforming product before packaging and reconcile with final release records | kg | each released batch | same reporting period | reporting facility | sum accepted net mass; normalize to exactly 1 kg | calibrated scale record, batch release and declared qualifiers |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = reporting-period atomic-flow amount / reporting-period accepted net reference-product mass | collected exchange amount; accepted net product mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_material_balance` | each material route and process | input mass = transferred product + retained mass + separately identified waste + separately identified emissions + documented stock change, within stated measurement uncertainty | material inputs; intermediates; wastes; emissions; stock change | reconciled mass-balance statement | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |
| `calc_shared_utility_allocation` | electricity and compressed air without submetering | allocated quantity = reconciled facility quantity × documented causal driver share | facility meter; machine time or other causal driver | process-specific utility amount | `eu-pef-2021-2279` |
| `calc_solvent_air_emission` | isopropanol to air | input isopropanol − product retention − recovered isopropanol − liquid-waste isopropanol − documented stock change | measured solvent input, recovery, waste, retention and stock | isopropanol emitted to air | `eu-pef-2021-2279`; `eu-tanning-bref` |
| `calc_combustion_emissions` | fossil CO2 and nitrogen dioxide | measured natural-gas energy × a documented source-appropriate factor, unless direct stack measurement is used | gas energy; cited factor or measurement | each combustion species as a separate mass flow | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_primary_foreground` | manufacturing processes | Use company-specific records for the reporting facility and period; disclose any gap, proxy and allocation. | meters, invoices, stock ledgers, BOMs, batch sheets and waste records |
| `dq_bom_specificity` | product materials and components | Preserve product-specific material identity, supplier grade, amount, hardware alloy/finish and package specification. | approved BOM and supplier technical specifications |
| `dq_upstream_match` | linked background datasets | Match technology, material, geography and time; leather data shall disclose species, tanning system and finish. | dataset metadata and documented selection rationale |
| `dq_completeness` | all foreground exchanges | Reconcile material, solvent and packaging balances and explain every missing or not-applicable atomic row. | balance worksheets and applicability log |
| `dq_temporal_representativeness` | reporting period | Use a representative continuous period, normally twelve months where available, and explain shorter periods or atypical operation. | dated raw records and production log |
| `dq_traceability` | calculations and factors | Retain raw fields, unit conversions, factor citations, allocation drivers and versioned calculation sheets. | auditable calculation package |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | dataset identity | CPC code, product title, declared qualifiers and canonical PCR id shall be present and mutually consistent. | `un-cpc-official` |
| `validate_reference_flow` | quantitative reference | The reference product shall use flow `850d448a-711c-4151-8745-7aece3fc2acb`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and exactly 1 kg net product mass excluding packaging. | `un-cpc-official` |
| `validate_atomic_inventory` | inventory | Every exchange shall be one concrete flow; materials, utilities, packaging, wastes and each air emission shall remain separate. | `eu-pef-2021-2279` |
| `validate_route_completeness` | route declaration | The data package shall state leather, synthetic, webbing or mixed route and explain every conditional or not-applicable card. | `apparel-footwear-pefcr-v3.1` |
| `validate_mass_balance` | material and solvent balances | Cutting, assembly, finishing and packaging balances shall reconcile within documented measurement uncertainty without an unexplained residual. | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |
| `validate_finishing_boundary` | surface finishing | If finishing occurs on site, coatings, solvent, water, electricity, drying fuel, wastes, wastewater and separately quantified emissions shall be present; otherwise the exclusion shall be documented. | `eu-tanning-bref`; `eu-pef-2021-2279` |
| `validate_allocation` | shared burdens | Every allocated exchange shall identify the shared total, causal driver, allocation share and sensitivity where material. | `eu-pef-2021-2279` |
| `validate_data_quality` | evidence package | Each foreground row shall link to its protocol and raw evidence; every background dataset and calculation factor shall have a selection rationale and citation. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for a declared saddlery or harness product |
| downstream_use | LCA process datasets, product systems, footprint studies and supplier data exchange |
| allowed_use | Products within CPC 29210 whose route and required qualifiers match the dataset |
| excluded_use | Different tack constructions without documented representativeness; tanning-only datasets; distribution, use or end-of-life claims |
| required_metadata | canonical PCR id; CPC code; product subtype; animal/use; net reference mass; BOM; route; facility geography; reporting period; included operations; packaging; allocation; background dataset versions |
| required_quality_disclosure | primary-data coverage; meter and balance quality; proxies; unresolved UUIDs; allocation; temporal/geographical/technological representativeness; exclusions and not-applicable rows |
| update_trigger | material or supplier change; hardware/coating/adhesive change; process or energy-source change; facility/geography change; packaging redesign; allocation change; data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-official` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC), official portal: https://unstats.un.org/unsd/classifications/Econ/CPC; official repository raw CSV supplies the exact CPC 3.0 subclass title | product category identity and exact CPC 29210 scope |
| `eu-pef-2021-2279` | method_factor | European Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method: https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | product-specific BOM, company-specific manufacturing data, LCI completeness, allocation, transparency and data quality |
| `eu-tanning-bref` | official_guidance | European Commission JRC, BAT Reference Document for the Tanning of Hides and Skins: https://eippcb.jrc.ec.europa.eu/reference/tanning-hides-and-skins-0 | upstream leather dataset disclosure and conditional leather-finishing chemical, wastewater and emission background; not a basis for forcing tanning into an assembly plant |
| `apparel-footwear-pefcr-v3.1` | method_factor | Apparel & Footwear Product Environmental Footprint Category Rules, Version 3.1, official text verified by orchestration | organization of product BOM, manufacturing losses, packaging and process-specific foreground records; no default quantity is imported |
