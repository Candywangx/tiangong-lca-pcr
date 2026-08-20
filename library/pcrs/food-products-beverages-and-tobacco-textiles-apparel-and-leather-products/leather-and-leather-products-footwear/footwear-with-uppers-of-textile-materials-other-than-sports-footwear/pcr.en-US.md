---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-textile-materials-other-than-sports-footwear
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Footwear with uppers of textile materials, other than sports footwear

## 1. Scope and Applicability

This PCR governs foreground manufacturing data packages for finished footwear whose upper is made of textile material and that is not sports footwear. It covers open- or closed-toed non-sports footwear when the finished product is classified in CPC 3.0 subclass 29340. It applies to a declared product style, size basis, bill of materials (BOM), manufacturing route, site, and reporting period.

The default foreground boundary starts with purchased finished materials and components received at the footwear manufacturing site and ends with conforming finished footwear and its sales packaging ready for dispatch at the plant gate. On-site component production is included when performed by the reporting facility. Upstream production of purchased textile, polymer, rubber, adhesive, packaging, and other inputs is represented by linked upstream datasets rather than being silently absorbed into the foreground process.

Sports footwear in CPC group 294, footwear with uppers of leather, footwear with both outer soles and uppers of rubber or plastics, protective-metal-toe footwear classified outside CPC 29340, orthopaedic footwear, skating boots, footwear parts sold separately, retail, use, repair, and end-of-life are excluded from the default foreground boundary. A study may model those downstream stages separately, but it must not present the extended system as this gate-to-gate foreground data package.

The process inventory below describes a representative cemented casual shoe with a woven polyester upper, polyester lining, rubber outsole, EVA foam bottom components, and polyurethane adhesive. A conforming data package must replace or supplement representative BOM rows with one atomic flow card for each actual material and component; it must not substitute a plural material family or a route selector for a real exchange.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-textile-materials-other-than-sports-footwear |
| classification_refs | CPC 3.0: 29340, exact |
| covered_products | Finished footwear with uppers of textile materials, other than sports footwear |
| excluded_products | Sports footwear; footwear with leather uppers; footwear with rubber or plastic uppers; protective-metal-toe footwear outside CPC 29340; orthopaedic footwear; skating boots; separately sold footwear parts |
| representative_product | One pair of non-sports closed-toed casual shoes with woven polyester textile uppers and cemented rubber outsoles |
| production_route | Textile upper cutting and sewing; bottom-component manufacture or receipt; lasting, adhesive activation, sole attachment, finishing, inspection, and packing |
| market_state | Conforming finished product at the footwear factory gate, before distribution |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide non-sports footwear with textile-material uppers that protects the feet from the ground and meets the declared product specification |
| How much | One pair of footwear defined by the product BOM and declared reference size |
| How well | Conforming and in good condition for its intended non-sports use, with declared construction, size, quality specification, and durability evidence |
| How long or cycle | One use; the product duration of service and number of uses are declared separately when the data package is used in a full life-cycle study |
| reference_flow_link | The reference flow is the measured mass `m_pair` in kg of one conforming finished pair, excluding detachable sales packaging; inventory is reported per pair and normalized per 1 kg of the same finished product |

| Field | Value |
| --- | --- |
| Reference amount | `m_pair` kg, the measured mass of one conforming finished pair |
| Reference product flow | Footwear with uppers of textile materials, other than sports footwear `f6098cff-2e83-4867-ace9-6b24b50b0ccd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 29340 confirmation; textile upper material and construction; non-sports intended use; open- or closed-toed style; adult/child/infant segment; sex or unisex size segment; reference size; pair mass excluding sales packaging; sole and midsole materials; lining material; assembly route; manufacturing site and geography; reporting period; product quality specification; rejected-pair treatment |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_pair_mass` | conforming finished pair | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the complete left-and-right pair after finishing and conditioning, exclude detachable sales packaging, record the reference size and scale resolution, and use the arithmetic mean of conforming measured pairs for `m_pair`. |
| `pair_mass_conversion` | conversion between pair and mass reporting | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/pair | Convert a per-pair inventory to a per-kg inventory by dividing every exchange by `m_pair`; retain `m_pair`, sample count, and reference size so the conversion is reversible. |
| `component_mass_basis` | BOM materials, components, finished product, and solid waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross input, conforming incorporated mass, recoverable offcut, reject, and disposed mass without mixing wet and dry bases; document moisture or conditioning state when material mass can change materially. |
| `energy_unit_preservation` | electricity and fuel inputs | Energy | kWh for electricity; MJ for fuel | Preserve metered units and conversion factors. Do not combine electricity, purchased heat, steam, or fuel into one inventory exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished materials and purchased components received, identified, and accepted at the footwear manufacturing site gate |
| starting_condition_role | Foreground gate-to-gate starting condition for footwear component preparation and final manufacturing |
| product_classification_scope | CPC 3.0 subclass 29340 only |
| recursive_input_rule | If a partially finished or finished CPC 29340 footwear product enters the foreground system, record it as one explicit product input, link its own upstream dataset, and do not recursively recreate the same category inside this PCR boundary. |
| upstream_dataset_requirement | Each purchased material, component, energy carrier, packaging item, and waste-treatment service requires a geographically and technologically representative upstream dataset or a disclosed data gap. |
| disclosure | Declare which component-making steps are on-site, which components are purchased, all contract manufacturing, the BOM and reference size, process and assembly loss treatment, energy allocation, rejected-pair fate, sales-packaging inclusion, and every excluded process. |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground footwear manufacturing | Include receipt and internal handling of purchased inputs, upper cutting and sewing, on-site bottom-component manufacture when applicable, lasting, cementing or other declared sole attachment, finishing, inspection, and packing through conforming product at the plant gate. | `afw-pefcr-v3-1-2025`; `oliver-footwear-manufacturing-2021`; `unido-ilo-footwear-1982` |
| `boundary_bom_and_losses` | material and component accounting | Disaggregate manufacturing into declared steps and record the BOM input, manufacturing leftover, process loss, reject, and conforming output for each step; do not hide losses in a single yield factor when step data are available. | `afw-pefcr-v3-1-2025` |
| `boundary_purchased_inputs` | purchased materials and components | Keep each purchased input visible as an atomic product flow and link it to an upstream dataset; on-site manufacture is included only when the activity occurs inside the reporting boundary. | `afw-pefcr-v3-1-2025`; `iso-14044-2006` |
| `boundary_exclusion_disclosure` | exclusions and cut-offs | Report every excluded attributable flow, the reason, and the expected effect; missing data remain disclosed gaps and are not represented as zero. | `afw-pefcr-v3-1-2025`; `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `upper_component_manufacturing` | Textile upper cutting, preparation, and sewing | required | Always included for CPC 29340 footwear; contract work is represented with supplier-specific foreground data or a linked upstream process. | foreground component manufacturing | kg stitched textile upper assembly delivered to final assembly |
| `bottom_component_manufacturing` | Bottom-component forming and preparation | conditional | Include when outsole, midsole, or insole manufacture or preparation occurs at the reporting site; otherwise record the purchased components directly in final assembly. | foreground component manufacturing | kg conforming bottom component by component type |
| `final_assembly_and_packaging` | Lasting, cementing, finishing, inspection, and packing | required | Always included through conforming finished footwear at the plant gate. | foreground final manufacturing | one conforming pair and its measured product mass in kg |

### Process: Textile upper cutting, preparation, and sewing (`upper_component_manufacturing`)

#### Inputs

##### Product flows

###### Woven polyester upper fabric (`upper_polyester_fabric_input`)

Record the dyed woven polyester fabric cut into exterior upper panels for the representative route. For another textile, add a separate atomic card using the actual fibre and fabric construction.

- Selected flow: Woven polyester fabric, dyed
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass issued to upper cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyester lining fabric (`upper_lining_fabric_input`)

Record the specific polyester lining fabric issued to the upper line.

- Selected flow: Polyester lining fabric, knitted
- Flow property / unit: Mass / kg
- Amount rule: measured accepted lining mass issued to cutting and sewing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyester sewing thread (`upper_sewing_thread_input`)

Record sewing thread actually consumed in joining the upper and lining panels.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts minus closing stock, reconciled to the product order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`
- Sources: `unido-ilo-footwear-1982`

###### Thermoplastic polyurethane toe stiffener (`upper_toe_stiffener_input`)

Record the thermoplastic polyurethane toe puff when it is part of the declared non-protective construction; this is not a protective metal toe cap.

- Selected flow: Thermoplastic polyurethane toe stiffener
- Flow property / unit: Mass / kg
- Amount rule: measured mass of accepted toe stiffeners incorporated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `unido-ilo-footwear-1982`

###### Electricity for upper operations (`upper_electricity_input`)

Record electricity for cutting, edge preparation, sewing, local extraction, and directly attributable upper-line auxiliaries.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: process-submeter reading, or allocated site meter reading using documented machine operating time and rated load when no submeter exists
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stitched textile upper assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stitched textile upper assembly (`stitched_textile_upper_output`)

Record only assemblies that pass the declared upper inspection and enter lasting.

- Selected flow: Stitched textile upper assembly
- Flow property / unit: Mass / kg
- Amount rule: measured conforming stitched-upper mass transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per upper-manufacturing reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `oliver-footwear-manufacturing-2021`; `unido-ilo-footwear-1982`

##### Waste flows

###### Polyester upper cutting scrap (`upper_polyester_cutting_scrap_output`)

Keep usable offcuts, internally reused pieces, externally recycled material, and disposed scrap distinguishable in fate records.

- Selected flow: Polyester woven-fabric cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap from cutting the woven polyester upper fabric, by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stitched textile upper assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

###### Polyester lining cutting scrap (`upper_lining_cutting_scrap_output`)

Record lining scrap separately from exterior upper-fabric scrap.

- Selected flow: Polyester knitted-fabric cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap from cutting the polyester lining fabric, by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stitched textile upper assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Bottom-component forming and preparation (`bottom_component_manufacturing`)

#### Inputs

##### Product flows

###### Styrene-butadiene rubber compound (`bottom_sbr_compound_input`)

Record this flow only when the representative synthetic-rubber outsole is formed on site.

- Selected flow: Styrene-butadiene rubber compound
- Flow property / unit: Mass / kg
- Amount rule: measured accepted compound charged to outsole forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming rubber outsole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Ethylene-vinyl acetate foam sheet (`bottom_eva_foam_input`)

Record EVA foam issued to midsole or insole cutting as one specific material input.

- Selected flow: Ethylene-vinyl acetate foam sheet
- Flow property / unit: Mass / kg
- Amount rule: measured accepted EVA foam issued to cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming EVA bottom-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity for bottom-component operations (`bottom_electricity_input`)

Record electricity for compound forming, cutting, trimming, and preparation performed within this process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered process electricity or documented allocation from the site meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming bottom-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `afw-pefcr-v3-1-2025`

###### Natural gas for outsole curing heat (`bottom_natural_gas_input`)

Record natural gas only when directly burned for on-site outsole curing or forming heat; do not combine it with electricity or purchased heat.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured fuel volume converted with the recorded net calorific value and allocated to the outsole line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming rubber outsole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `afw-pefcr-v3-1-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed rubber outsole (`bottom_rubber_outsole_output`)

Record conforming styrene-butadiene rubber outsoles transferred to final assembly.

- Selected flow: Styrene-butadiene rubber outsole
- Flow property / unit: Mass / kg
- Amount rule: measured conforming outsole mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-component reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `oliver-footwear-manufacturing-2021`

###### Cut EVA midsole (`bottom_eva_midsole_output`)

Record conforming EVA midsoles transferred to final assembly.

- Selected flow: Ethylene-vinyl acetate foam midsole
- Flow property / unit: Mass / kg
- Amount rule: measured conforming EVA midsole mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-component reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `afw-pefcr-v3-1-2025`

###### Cut EVA insole (`bottom_eva_insole_output`)

Record conforming EVA insoles transferred to final assembly.

- Selected flow: Ethylene-vinyl acetate foam insole
- Flow property / unit: Mass / kg
- Amount rule: measured conforming EVA insole mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per bottom-component reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `unido-ilo-footwear-1982`

##### Waste flows

###### Rubber outsole trimming scrap (`bottom_rubber_scrap_output`)

Record trimming and rejected SBR material separately by recycling, recovery, or disposal fate.

- Selected flow: Styrene-butadiene rubber trimming scrap
- Flow property / unit: Mass / kg
- Amount rule: measured SBR trimming and reject mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming rubber outsole output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

###### EVA foam cutting scrap (`bottom_eva_scrap_output`)

Record EVA midsole and insole cutting scrap as one chemically specific waste flow, with fate split in the underlying records.

- Selected flow: Ethylene-vinyl acetate foam cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: measured EVA cutting and reject mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming EVA bottom-component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

##### Elementary flows

### Process: Lasting, cementing, finishing, inspection, and packing (`final_assembly_and_packaging`)

#### Inputs

##### Product flows

###### Stitched textile upper (`assembly_stitched_upper_input`)

Record the conforming stitched upper entering lasting, whether made on site or purchased.

- Selected flow: Stitched textile upper assembly
- Flow property / unit: Mass / kg
- Amount rule: measured accepted stitched-upper mass issued to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_materials`
- Sources: `oliver-footwear-manufacturing-2021`; `unido-ilo-footwear-1982`

###### Rubber outsole (`assembly_rubber_outsole_input`)

Record the accepted SBR outsole issued to sole attachment.

- Selected flow: Styrene-butadiene rubber outsole
- Flow property / unit: Mass / kg
- Amount rule: measured accepted outsole mass issued to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_materials`
- Sources: `oliver-footwear-manufacturing-2021`

###### EVA midsole (`assembly_eva_midsole_input`)

Record the accepted EVA midsole incorporated in the finished shoe.

- Selected flow: Ethylene-vinyl acetate foam midsole
- Flow property / unit: Mass / kg
- Amount rule: measured accepted midsole mass issued to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### EVA insole (`assembly_eva_insole_input`)

Record the accepted EVA insole incorporated in the finished shoe.

- Selected flow: Ethylene-vinyl acetate foam insole
- Flow property / unit: Mass / kg
- Amount rule: measured accepted insole mass issued to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_materials`
- Sources: `unido-ilo-footwear-1982`

###### Polyurethane footwear adhesive (`assembly_pu_adhesive_input`)

Record formulated polyurethane adhesive used for lasting or sole attachment; do not combine adhesive with cleaner, primer, or finish.

- Selected flow: Polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts minus closing stock and separately measured recovered adhesive, reconciled to the product order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_assembly_materials`
- Sources: `simoes-footwear-adhesive-2024`; `oliver-footwear-manufacturing-2021`

###### Polyester shoelace (`assembly_polyester_shoelace_input`)

Record polyester laces only for laced styles; styles without laces mark this card not applicable rather than substituting another fastening component.

- Selected flow: Polyester shoelace
- Flow property / unit: Mass / kg
- Amount rule: measured mass of accepted shoelaces incorporated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_materials`
- Sources: `unido-ilo-footwear-1982`

###### Cardboard shoe box (`assembly_cardboard_box_input`)

Record the corrugated or solid-board shoe box separately from wrapping tissue.

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
- Amount rule: measured tissue mass multiplied by sheets consumed, including damaged sheets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming finished pair packed for sale
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `afw-pefcr-v3-1-2025`

###### Electricity for final assembly (`assembly_electricity_input`)

Record electricity for lasting, adhesive application and activation, pressing, finishing, inspection, and packing.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: process-submeter reading or documented allocation from site meter records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `afw-pefcr-v3-1-2025`

###### Tap water for final cleaning (`assembly_cleaning_water_input`)

Record tap water only when water cleaning occurs inside final assembly; do not combine it with wastewater.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: submetered water or batch-volume record allocated to the product order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_water`
- Sources: `iso-14044-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished CPC 29340 footwear (`finished_footwear_output`)

This is the sole reference-product output. Record conforming left-and-right pairs after finishing and inspection; detachable sales packaging is not included in the product mass.

- Selected flow: Footwear with uppers of textile materials, other than sports footwear `f6098cff-2e83-4867-ace9-6b24b50b0ccd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conforming finished-pair mass `m_pair`, with pair count retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one conforming finished pair at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `un-cpc-3-0-2025`; `afw-pefcr-v3-1-2025`

##### Waste flows

###### Cured polyurethane adhesive waste (`assembly_pu_adhesive_waste_output`)

Record cured residual adhesive and rejected cured adhesive separately from liquid solvent or cleaner waste.

- Selected flow: Cured polyurethane adhesive waste
- Flow property / unit: Mass / kg
- Amount rule: measured collected cured adhesive waste by treatment fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `simoes-footwear-adhesive-2024`

###### Waste cardboard shoe boxes (`assembly_cardboard_waste_output`)

Record damaged or discarded shoe boxes before product dispatch; do not include boxes shipped with the product as waste.

- Selected flow: Waste cardboard shoe box
- Flow property / unit: Mass / kg
- Amount rule: measured discarded box mass by treatment fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming finished pair packed for sale
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `afw-pefcr-v3-1-2025`

###### Final-cleaning wastewater (`assembly_cleaning_wastewater_output`)

Record wastewater only when water cleaning occurs and the wastewater crosses the process boundary to treatment.

- Selected flow: Footwear final-cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume or water-input balance corrected for documented evaporation and retention
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_water`
- Sources: `iso-14044-2006`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`assembly_nmvoc_air_output`)

Record direct NMVOC emissions from solvent-bearing adhesive, primer, cleaner, or finish only when those substances are used; retain substance-specific records whenever available.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: stack or workplace-extraction measurement, permit inventory, or documented solvent mass balance for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished footwear output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `simoes-footwear-adhesive-2024`; `iso-14044-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multi-product or shared foreground operations | Subdivide by process line, product order, style, and reporting period whenever separate measurements exist before applying allocation. | `iso-14044-2006`; `afw-pefcr-v3-1-2025` |
| `allocation_process_driver` | shared component and manufacturing processes | Apply the PEFCR process driver when subdivision is not possible: unit allocation for sewing and final assembly, and mass allocation for die-cutting, compound forming, insole production, stockfitting, and finishing; document the denominator and all co-produced output. | `afw-pefcr-v3-1-2025` |
| `allocation_energy` | shared site electricity and fuel | Prefer product- or line-specific metering. Otherwise allocate measured energy by a documented causal driver such as machine operating time multiplied by measured or rated load; if only multi-site electricity data exist, use a production-mass-weighted mix and disclose the limitation. | `afw-pefcr-v3-1-2025` |
| `allocation_recycling_no_credit` | manufacturing scrap sent to recovery | Report the scrap mass and treatment route without assigning an avoided-burden credit inside this foreground package; any circular-footprint or substitution treatment belongs to the downstream life-cycle model and must be declared separately. | `afw-pefcr-v3-1-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference_product` | `final_assembly_and_packaging` | finished reference product | scale and production record | product code; CPC confirmation; reference size; pair count; individual or batch pair mass; scale id; resolution; calibration date; reject count | calibrated scale linked to the production order and final inspection release | kg and pair | each measured sample or released batch | representative reporting period, normally 12 consecutive months | each reporting footwear site | sum conforming mass and pair count; calculate mean kg/pair; exclude packaging and rejects | scale calibration; inspection release; product specification; sampling record |
| `cp_bom_materials` | `upper_component_manufacturing`; `bottom_component_manufacturing` | specific material or component input | BOM, receipt, issue, and stock record | material id; chemical or fibre identity; construction; supplier; gross received mass; issued mass; returns; opening stock; closing stock; lot; product order | reconcile BOM and product order with calibrated weighing, invoices, warehouse issues, and stock change | kg | each lot and product order | same period as output, with stock reconciliation | each site and contract facility in scope | material consumed = opening stock + receipts - closing stock - documented returns; keep each material separate | supplier specification; invoice; weigh ticket; stock ledger; BOM revision |
| `cp_final_assembly_materials` | `final_assembly_and_packaging` | specific component, adhesive, or accessory input | BOM, issue, stock, and batch record | component id; material identity; issue quantity or mass; opening stock; receipts; closing stock; returned material; product order | weigh representative components and reconcile counts or stock changes to the production order | kg and item count | each product order, reconciled monthly | same period as finished product | each final-assembly site | convert item counts to mass with measured component mass; calculate stock-balance consumption for adhesive; no grouping across materials | BOM; batch sheet; component weigh record; adhesive stock ledger |
| `cp_packaging_materials` | `final_assembly_and_packaging` | shoe box or tissue paper input | packaging specification and issue record | packaging id; material; unit mass; units issued; units shipped; damaged units; product order | weigh packaging units and reconcile issued, shipped, and damaged counts | kg and item count | each packaging specification and product order | same period as packed output | each packing site | unit mass multiplied by units consumed; keep box and tissue paper separate | packaging specification; scale record; packing log |
| `cp_process_energy` | `upper_component_manufacturing`; `bottom_component_manufacturing`; `final_assembly_and_packaging` | electricity or natural-gas input | meter, invoice, and machine log | meter id; opening and closing reading; energy carrier; voltage or calorific value; machine id; operating time; product order; allocation denominator | submeter first; otherwise reconcile utility invoice and allocate with documented process driver | kWh or MJ | continuous meter or each shift; reconcile monthly | representative reporting period, normally 12 consecutive months | each process line and site | subtract documented non-production use; allocate each energy carrier separately; normalize to conforming output | meter calibration; invoice; machine log; allocation worksheet; electricity-supply evidence |
| `cp_process_outputs` | `upper_component_manufacturing`; `bottom_component_manufacturing` | conforming intermediate output | scale, transfer, and inspection record | intermediate id; material; batch; mass; item count; pass/fail; destination process | weigh accepted output at process transfer and reconcile to production orders | kg and item count | each batch | same period as input and waste records | each component-making site | sum conforming transferred mass by atomic intermediate product | calibrated scale; transfer ticket; inspection record |
| `cp_waste_and_emissions` | `upper_component_manufacturing`; `bottom_component_manufacturing`; `final_assembly_and_packaging` | specific solid waste or NMVOC emission | waste weigh ticket, container log, treatment receipt, measurement, permit, or solvent balance | waste id; chemical or material identity; mass; destination; treatment; date; product order; measured NMVOC; solvent input; retained solvent; recovered solvent | weigh each waste stream; use measured emissions or a documented substance mass balance without combining pollutants | kg | each collection or emission measurement; reconcile monthly | same period as production | each process and site | sum by atomic waste or elementary flow and treatment fate; reconcile material balance | weigh ticket; licensed treatment receipt; measurement report; permit return; mass-balance worksheet |
| `cp_process_water` | `final_assembly_and_packaging` | tap-water input or final-cleaning wastewater | water meter, batch sheet, and discharge record | meter id; water input; batch volume; discharge volume; evaporation; retained water; product order | submeter or batch-volume record; reconcile input and discharge | m3 | each batch or monthly meter reading | same period as production | each cleaning operation and site | allocate only water directly attributable to product cleaning; calculate wastewater from measured discharge or documented balance | meter record; batch sheet; discharge record; balance check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_pair_mass` | reference flow | `m_pair = conforming finished footwear mass / conforming pair count`; packaging and rejected pairs are excluded. | conforming mass; conforming pair count | kg per pair | `afw-pefcr-v3-1-2025` |
| `calc_reference_normalization` | every inventory exchange | `normalized exchange = exchange amount / conforming finished footwear mass`; report the per-pair amount by multiplying the normalized value by `m_pair`. | exchange amount; conforming mass; `m_pair` | exchange per kg reference product and exchange per pair | `iso-14044-2006` |
| `calc_stock_balance` | thread, adhesive, and other stock-managed inputs | `consumption = opening stock + receipts - closing stock - documented returns - recovered material`; unexplained imbalance is reported. | opening stock; receipts; closing stock; returns; recovered material | consumed input mass | `iso-14044-2006` |
| `calc_step_loss` | each material at each manufacturing step | `step loss rate = (material input - conforming material output - measured recoverable stock transfer) / material input`; report the mass and fate, not only the percentage. | atomic material input; conforming output; recoverable transfer; waste mass | step-specific material loss rate and mass balance | `afw-pefcr-v3-1-2025` |
| `calc_energy_allocation` | shared metered energy | Allocate each carrier using the declared process driver; for machine-time allocation use `allocated energy = shared metered energy × product machine-load-hours / total machine-load-hours`. | meter reading; machine time; measured or rated load; product order | allocated kWh or MJ | `afw-pefcr-v3-1-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and every flow | Preserve product code, CPC 29340 decision, material or chemical identity, flow direction, unit, site, route applicability, supplier, and treatment fate. A data gap is not zero. | product specification; BOM; supplier specification; flow mapping record; waste receipt |
| `dq_temporal` | foreground records | Use one coherent representative period, normally 12 consecutive months; disclose seasonal or campaign coverage and reconcile opening and closing stocks to that period. | reporting-period statement; dated meters, invoices, stock records, and production logs |
| `dq_geography_technology` | site and linked datasets | Declare each manufacturing geography and technology; linked datasets must represent the actual material, electricity mix, process technology, and waste route, or the proxy limitation must be stated. | site register; technology pack; electricity evidence; dataset metadata; proxy justification |
| `dq_completeness` | BOM, energy, water, wastes, and emissions | Reconcile atomic inputs, outputs, stock changes, process losses, rejects, and treatment destinations. Report missing exchanges and exclusions explicitly. | mass-balance worksheet; production reconciliation; completeness checklist |
| `dq_measurement` | scales, meters, and calculations | Retain instrument identity, calibration or verification, resolution, sampling method, allocation denominator, unit conversions, and formula version. | calibration certificate; meter record; sampling plan; calculation workbook |
| `dq_dqr` | company-specific datasets | Assess and report technological, geographical, and time representativeness and precision before aggregation, consistent with the PEFCR data-quality approach. | DQR worksheet and supporting records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category` | reference product identity | Confirm the output has textile-material uppers, is not sports footwear, and is classified in CPC 3.0 subclass 29340; reject a package that relies only on a generic shoe label. | `un-cpc-3-0-2025` |
| `validate_reference_flow` | functional unit and reference flow | Confirm one conforming pair, its reference size, pair count, measured `m_pair`, Mass UUID, Units of mass UUID, kg reference unit, and the exact Tiangong product-flow UUID are present and mutually consistent. | `afw-pefcr-v3-1-2025` |
| `validate_atomic_inventory` | process inventory | Confirm every selected flow is one material, component, energy carrier, waste, or elementary emission; reject plural collections, combined utilities, route selectors, and an `other` exchange. | `iso-14044-2006` |
| `validate_process_coverage` | foreground boundary | Confirm upper cutting/preparation/sewing and final lasting/sole attachment/finishing/inspection/packing are represented; confirm bottom-component manufacture is either included or represented by explicit purchased-component inputs. | `afw-pefcr-v3-1-2025`; `oliver-footwear-manufacturing-2021`; `unido-ilo-footwear-1982` |
| `validate_mass_balance` | every material-bearing process | Reconcile atomic material inputs with conforming outputs, recoverable transfers, stock change, offcuts, rejects, and other losses; investigate rather than force-close unexplained imbalance. | `afw-pefcr-v3-1-2025`; `iso-14044-2006` |
| `validate_energy_allocation` | electricity and fuel | Confirm each energy carrier is separate, meter period matches production, allocation driver is causal and reproducible, and site or supply mix evidence is retained. | `afw-pefcr-v3-1-2025` |
| `validate_no_unsupported_range` | inventory amount metadata | Confirm no single case value, repeated lower/upper value, abstract-only value, or unverified estimate is represented as an empirical range; absence of sufficient compatible evidence remains a disclosed range gap. | `iso-14044-2006` |
| `validate_bilingual_identity` | Chinese rendering | Confirm every UUID, process id, row id, controlled token, source id, and normative rule id matches the English source, and the reference flow uses the exact Tiangong Chinese `baseName`. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate manufacturing data package for CPC 29340 footwear |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product-specific LCA, product carbon footprint, PEF-aligned modelling, supplier data exchange, process improvement, and downstream process or lifecyclemodel construction when the declared product, route, geography, and period match |
| excluded_use | Sports footwear; leather-upper or rubber/plastic-upper footwear; unsupported category averages; consumer-use or end-of-life claims; comparative assertions without a complete aligned method; use of missing data as zero |
| required_metadata | PCR id and version; CPC decision; product style and construction; textile upper identity; reference size and segment; pair mass; BOM; site and geography; reporting period; included and purchased processes; energy sources; allocation; waste fate; data gaps; source and dataset versions |
| required_quality_disclosure | DQR criteria; primary-data share; measurement and calibration evidence; sampling and temporal coverage; mass-balance residuals; allocation drivers; proxy datasets; exclusions; unresolved UUIDs; rejected-pair and scrap treatment |
| update_trigger | BOM, upper material, sole system, adhesive chemistry, component sourcing, assembly route, site, electricity supply, allocation method, waste treatment, reference flow identity, classification scope, or evidence contract changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division. *Central Product Classification (CPC), Version 3.0, Explanatory Notes*, subclass 29340, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-20). | exact category scope and exclusions |
| `afw-pefcr-v3-1-2025` | official_guidance | Technical Secretariat of the Product Environmental Footprint Category Rules for Apparel and Footwear. *Product Environmental Footprint Category Rules: Apparel and Footwear*, Version 3.1, 29 April 2025, valid through 31 December 2027. https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (direct PDF verified at https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf; retrieved 2026-08-20). | functional unit; exact footwear subclass coverage; BOM; manufacturing boundary and process decomposition; losses; allocation; electricity; collection; DQR; packaging |
| `iso-14040-2006` | standard | ISO 14040:2006. *Environmental management — Life cycle assessment — Principles and framework*. https://www.iso.org/standard/37456.html (retrieved 2026-08-20). | LCA and LCI framework |
| `iso-14044-2006` | standard | ISO 14044:2006. *Environmental management — Life cycle assessment — Requirements and guidelines*. https://www.iso.org/standard/38498.html (retrieved 2026-08-20). | goal and scope, inventory, allocation, data quality, reporting, and validation framework |
| `oliver-footwear-manufacturing-2021` | literature | Oliver, G., Gil, P., Gomez, J.F. et al. *Towards footwear manufacturing 4.0: shoe sole robotic grasping in assembling operations*. International Journal of Advanced Manufacturing Technology 114, 811–827 (2021). https://doi.org/10.1007/s00170-021-06697-0. | peer-reviewed full-text verification of cutting, stitching, lasting/shaping, adhesive application, sole assembly, pressing, and finishing operations |
| `unido-ilo-footwear-1982` | handbook | UNIDO and ILO. *Small-scale Manufacture of Footwear*, Technical Memorandum No. 2, 1982. https://www.unido.org/publications/ot/9648584/pdf (retrieved 2026-08-20). | original full-text process sequence, component identities, lasting, cementing, finishing, inspection, and packaging |
| `simoes-footwear-adhesive-2024` | literature | Simões, C.L., Aguiar, A., Marques, A.C. et al. *Environmental assessment of an innovative adhesive for the footwear industry: road map for product development*. International Journal of Life Cycle Assessment 29, 1264–1278 (2024). https://doi.org/10.1007/s11367-024-02314-w. | peer-reviewed full-text support for polyurethane adhesive as a distinct footwear-industry input and solvent-related inventory attention |
