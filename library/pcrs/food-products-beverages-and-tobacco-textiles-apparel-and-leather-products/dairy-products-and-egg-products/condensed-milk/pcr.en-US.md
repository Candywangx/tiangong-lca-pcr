---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.condensed-milk
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Condensed milk

## 1. Scope and Applicability

This PCR applies only to sweetened condensed milk made by partially removing water from milk while adding sugar, or by an equivalent process that produces the same composition and characteristics. It covers whole, skimmed, partly skimmed, and high-fat sweetened condensed milk supplied in retail, food-service, or bulk industrial formats. The foreground result is a factory-gate product; the declared package format may be a consumer package, a transport container, or bulk dispatch.

Evaporated milk without added sugar (CPC 22221), milk and cream products in CPC 22229, dried milk and cream powders, ordinary unconcentrated liquid milk, infant formula, formulated dairy desserts, non-dairy condensed beverages, and downstream use or consumption are excluded. Upstream production of milk, sugar, other ingredients, packaging, fuels, electricity, water, and purchased treatment services is represented by linked upstream datasets rather than recreated inside the condensed-milk foreground process.

Codex composition limits, quality factors, and dairy naming rules are used only to define or validate the declared product identity. BAT performance levels and associated monitoring provisions are used only to establish relevant foreground streams and quality evidence. None of these source values is a generic LCI amount; actual amounts come from representative site and lot records or from the explicit provisional `reasoned_estimate` QA guardrails below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.condensed-milk |
| classification_refs | CPC 3.0: 22222 Condensed milk |
| covered_products | Sweetened condensed whole milk; sweetened condensed skimmed milk; sweetened condensed partly skimmed milk; sweetened condensed high-fat milk |
| excluded_products | CPC 22221 evaporated milk; CPC 22229 milk and cream products; milk and cream powders; ordinary unconcentrated liquid milk; infant formula; formulated dairy desserts; non-dairy condensed beverages |
| representative_product | Sweetened condensed whole milk |
| production_route | Milk reception and standardization; heat treatment; vacuum concentration; sugar and ingredient addition; cooling or lactose crystallization control; filling or bulk dispatch; cleaning and site wastewater handling |
| market_state | Shelf-stable or otherwise declared condensed milk at the manufacturing gate, in the actual sale or bulk-dispatch package |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Condensed milk meeting the declared product subtype and composition specification |
| How much | 1 kg net condensed milk product |
| How well | Conforming to the declared milkfat, total milk solids, milk-protein-in-solids-not-fat, sweetener, quality, and package specifications |
| How long or cycle | One production lot at the manufacturing gate; no use-duration service is claimed |
| reference_flow_link | Net saleable product output of `final_packaging_and_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Condensed Milk `5db242cb-3e7b-46fc-89cc-d676dd2a1fd3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; sweetener type and mass fraction; milkfat mass fraction; total milk-solids mass fraction; milk protein in milk-solids-not-fat; package or bulk-dispatch format and net mass; production technology; production geography; reference period; allocation method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory amounts to 1 kg of net saleable condensed milk; exclude primary, secondary, and transport packaging mass from the reference product mass. |
| `wet_mass_basis` | milk, dairy ingredients, sugar, water, product, losses, and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet as-received or as-discharged mass unless a row explicitly states a dry-matter basis; retain the measured solids or moisture fraction used for conversion. |
| `composition_mass_fraction` | product subtype and composition | Mass fraction | kg/kg product | Determine milkfat, total milk solids, and milk protein in milk-solids-not-fat from lot-specific laboratory or release records on a consistent mass basis. |
| `energy_conversion` | purchased electricity and thermal energy | Energy | kWh for electricity; MJ for thermal energy | Preserve metered units and conversion factors; convert electricity with 1 kWh = 3.6 MJ only when a common energy unit is required, without combining electricity and fuel inventories. |
| `water_volume_conversion` | water and aqueous wastewater | Mass or volume | kg or m3 | Prefer direct mass or volume records; when converting volume to mass, use measured or documented density and temperature rather than an undeclared density assumption. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground manufacturing | Include milk reception, storage losses, standardization, heat treatment, concentration, formulation, cooling or crystallization control, filling or bulk dispatch, process cleaning, on-site utilities directly serving these operations, and on-site wastewater handling when operated by the reporting facility. | `codex-cxs-282-1971`; `eu-fdm-bat-2019-2031` |
| `boundary_purchased_inputs` | upstream product inputs | Keep raw milk, dairy ingredients, sugar, additives, packaging, fuels, electricity, water, cleaning agents, and purchased waste or wastewater treatment as visible product or waste exchanges linked to representative upstream datasets. | `codex-cxs-282-1971`; `eu-pef-2021-2279` |
| `boundary_exclusions` | downstream and capital goods | Exclude distribution beyond the factory gate, retail refrigeration, consumer use, and end-of-life of product packaging unless the study goal explicitly extends the system; disclose excluded capital goods and infrastructure consistently. | `eu-pef-2021-2279` |
| `boundary_losses_and_emissions` | material and emission closure | Record milk or product losses, off-spec product, condensate disposition, wastewater, packaging waste, and measured direct releases; do not hide them in a yield factor or net input. | `eu-fdm-bat-2019-2031` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Milk and other dairy ingredients received at the manufacturing-site gate with mass, composition, temperature or preservation state, supplier geography, and upstream dataset identity declared |
| starting_condition_role | Purchased product input and start of foreground custody |
| product_classification_scope | Condensed milk corresponding to CPC 3.0 code 22222, with product subtype and composition qualifiers declared |
| recursive_input_rule | Condensed milk rework entering the same product category remains a separately quantified product input; identify its originating lot or upstream dataset and do not recursively recreate its prior manufacture |
| upstream_dataset_requirement | Link milk, dairy ingredients, sugar, additives, packaging, energy carriers, electricity, water, cleaning agents, and off-site treatment services to geographically and temporally representative upstream datasets |
| disclosure | Declare product subtype and composition, raw-material state, rework, included site operations, technology, package or bulk format, reference period, geography, allocation method, losses, wastewater route, and every exclusion or proxy dataset |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_and_standardization` | Milk reception and standardization | `required` | Always included | Foreground receipt, storage, composition adjustment, and preparation | kg standardized milk intermediate delivered to concentration |
| `concentration_and_formulation` | Heat treatment, concentration, and formulation | `required` | Always included | Foreground water removal, sugar or ingredient addition, and bulk condensed-milk production | kg bulk condensed milk delivered to finishing |
| `final_packaging_and_dispatch` | Cooling, finishing, packaging, and dispatch | `required` | Always included, including declared bulk dispatch | Foreground final conditioning and reference-product output | 1 kg net saleable condensed milk at factory gate |

### Process: Milk reception and standardization (`milk_reception_and_standardization`)

#### Inputs

##### Product flows

###### Raw milk and dairy ingredients (`received_milk_and_dairy_ingredients`)

Record each received milk, milk powder, cream, milkfat product, milk retentate, milk permeate, lactose, or other declared dairy ingredient separately when it crosses site custody. The selected Tiangong flow UUIDs are unresolved and must be verified before activation.

- Selected flow: Raw milk and applicable dairy ingredients; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass consumed by the represented lots, corrected for inventory change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Sources: `codex-cxs-282-1971`
- Range: Provisional milk-and-dairy-input mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 6
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass wet-mass screen; replace with reviewed product-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reception and standardization water (`reception_standardization_water`)

Record water added to product or used in directly attributable reception and standardization operations, excluding water already included in received milk.

- Selected flow: Process water; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or batch-recorded water consumed in the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional reception-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass site water screen; replace with metered evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required. Record externally treated rework or returned material as a separate waste or product input according to legal ownership and the selected treatment model.

##### Elementary flows

No elementary input is prescribed for this process; upstream resource extraction belongs to linked input datasets.

#### Outputs

##### Product flows

###### Standardized milk intermediate (`standardized_milk_intermediate`)

Record the mass transferred to the concentration process, with composition and internal transfer lot retained.

- Selected flow: Standardized milk intermediate; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Range: Provisional intermediate-yield QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 6
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass wet-mass screen; replace with batch mass-balance evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Exported separated milk components (`exported_milk_components`)

Record cream, skim milk, or other standardized components only when they leave this product system as saleable co-products; internal transfers remain intermediates.

- Selected flow: Separated milk component; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured exported co-product mass, zero when no component leaves the system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Range: Provisional exported-component QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass co-product screen; replace with batch evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Reception losses and wastewater (`reception_losses_and_wastewater`)

Record spilled or rejected milk, cleaning liquid, and other reception losses by actual destination; split materially different treatment routes.

- Selected flow: Dairy loss or wastewater by treatment route; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-calculated waste sent to each treatment route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_losses`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional reception-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass combined loss and cleaning-liquid screen; replace with route-specific records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No direct elementary output is prescribed for this process. Any measured direct release must be added as a separately identified elementary flow with a verified Tiangong UUID.

### Process: Heat treatment, concentration, and formulation (`concentration_and_formulation`)

#### Inputs

##### Product flows

###### Standardized milk received for concentration (`standardized_milk_input`)

Record the measured internal transfer from milk reception and standardization.

- Selected flow: Standardized milk intermediate; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured standardized milk transferred into the represented batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg bulk condensed milk output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Range: Provisional concentration-feed QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 6
  - Unit: kg/kg bulk condensed milk
  - Basis: broad first-pass wet-feed screen; replace with batch records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sugar and other permitted ingredients (`sugar_and_other_ingredients`)

Record sugar separately from potable water, sodium chloride, composition-adjusting dairy ingredients, and permitted additives. Ingredient identity and use must match the declared product specification and applicable market rules.

- Selected flow: Sugar and each other ingredient; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured issued mass minus documented returns for each represented ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Sources: `codex-cxs-282-1971`
- Range: Provisional sugar-and-ingredient QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass combined-ingredient screen; replace with formulation records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased thermal energy carriers or steam (`thermal_energy_input`)

Record fuel by mass or volume and purchased steam by delivered energy; retain lower or higher heating value basis and supplier dataset.

- Selected flow: Fuel or purchased steam by carrier; Tiangong flow UUID unresolved
- Flow property / unit: Energy / MJ delivered to the process
- Amount rule: metered thermal energy allocated to represented heat treatment and concentration operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional thermal-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 15
  - Unit: MJ/kg net saleable condensed milk
  - Basis: broad first-pass process-energy screen; replace with metered technology-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity (`concentration_electricity`)

Record metered electricity for pumps, vacuum generation, concentration, cooling, and directly attributable auxiliaries without combining it with thermal energy.

- Selected flow: Electricity, declared grid or supplier mix; Tiangong flow UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: metered or engineering-allocated electricity consumed by represented operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 3
  - Unit: kWh/kg net saleable condensed milk
  - Basis: broad first-pass electricity screen; replace with metered evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Concentration and cleaning water (`concentration_cleaning_water`)

Record process water and clean-in-place water attributable to represented batches, net of separately metered recovered condensate reused in the same system.

- Selected flow: Process water; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered water intake allocated to concentration and formulation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional concentration-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass process and cleaning water screen; replace with metered evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required. Purchased waste treatment is represented against the corresponding waste output, not as an unlinked input.

##### Elementary flows

No elementary input is prescribed; upstream resources and emissions remain in linked energy and material datasets.

#### Outputs

##### Product flows

###### Bulk condensed milk intermediate (`bulk_condensed_milk`)

Record bulk condensed milk transferred to final cooling, finishing, and dispatch with lot composition and mass retained.

- Selected flow: Bulk condensed milk intermediate; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg bulk condensed milk output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials`
- Range: Bulk-output normalization check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg bulk condensed milk
  - Basis: exact process-output normalization
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Recovered condensate (`recovered_condensate`)

Record evaporator condensate as an internal or exported product flow only when its quantity and destination are measured; otherwise route it consistently to wastewater.

- Selected flow: Recovered process water; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured condensate reused or exported, split by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Range: Provisional recovered-condensate QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass recovery screen; replace with metered evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Concentration wastewater and product losses (`concentration_wastewater_and_losses`)

Record cleaning wastewater, unrecovered condensate routed to treatment, off-spec bulk product, and other losses separately by treatment destination when material.

- Selected flow: Wastewater or dairy-product loss by treatment route; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharge plus mass-balance-calculated product loss, split by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_losses`
- Sources: `eu-fdm-bat-2019-2031`
- Range: Provisional concentration-waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass combined wastewater and loss screen; replace with route-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct combustion carbon dioxide (`direct_fossil_co2`)

Include this row only when fuel is combusted inside the foreground boundary. Determine the emission from fuel records and a documented factor, and replace the unresolved Tiangong flow identity before activation.

- Selected flow: Carbon dioxide, fossil, to air; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fuel quantity multiplied by the documented carrier-specific carbon dioxide factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Range: Provisional direct fossil carbon-dioxide QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg CO2/kg net saleable condensed milk
  - Basis: broad first-pass direct-combustion screen; replace with fuel-specific calculation evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cooling, finishing, packaging, and dispatch (`final_packaging_and_dispatch`)

#### Inputs

##### Product flows

###### Bulk condensed milk received for finishing (`bulk_condensed_milk_input`)

Record the measured internal transfer from concentration and formulation.

- Selected flow: Bulk condensed milk intermediate; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured bulk transfer mass attributable to saleable and rejected units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_output`
- Range: Provisional bulk-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass filling-yield screen; replace with line records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and attributable transport packaging separately by material and supplier dataset; for bulk dispatch, record the actual container treatment and reuse convention.

- Selected flow: Packaging material by material type; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued packaging minus documented unused returns, including expected line rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_output`
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass package-format screen; replace with bill-of-material evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and packaging electricity (`packaging_electricity`)

Record electricity used for cooling, agitation or crystallization control, filling, sealing, coding, and directly attributable packaging-line auxiliaries.

- Selected flow: Electricity, declared grid or supplier mix; Tiangong flow UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: metered or engineering-allocated electricity consumed by represented operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Range: Provisional finishing-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg net saleable condensed milk
  - Basis: broad first-pass finishing and packaging screen; replace with metered evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required.

##### Elementary flows

No elementary input is prescribed; upstream burdens remain in linked product datasets.

#### Outputs

##### Product flows

###### Net saleable condensed milk (`reference_condensed_milk`)

This is the sole reference product output. Normalize the completed inventory to exactly 1 kg net product while retaining the actual gross production and reject records used in the calculation.

- Selected flow: Condensed Milk `5db242cb-3e7b-46fc-89cc-d676dd2a1fd3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output of 1 kg net saleable condensed milk
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Range: Exact reference-flow normalization
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: reference product output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Off-spec product and packaging waste (`offspec_product_and_packaging_waste`)

Record off-spec condensed milk and packaging rejects separately by material and treatment route; do not subtract them silently from inputs.

- Selected flow: Off-spec dairy product or packaging waste by treatment route; Tiangong flow UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected mass sent to each reuse, recycling, recovery, or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable condensed milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_output`
- Range: Provisional finishing-waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net saleable condensed milk
  - Basis: broad first-pass combined reject screen; replace with material- and route-specific records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No direct elementary output is prescribed for this process. Add any measured refrigerant loss or other direct release as a separately identified elementary flow with a verified Tiangong UUID and documented calculation.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | separable operations and product lines | Avoid allocation by subdividing independently metered reception, concentration, finishing, utility, and treatment operations wherever technically feasible. | `eu-pef-2021-2279` |
| `allocation_internal_intermediates` | standardized milk, bulk condensed milk, rework, and recovered condensate | Internal transfers carry their measured upstream burdens and are not co-products. Rework must retain the burden of its originating lot; recovered condensate used internally reduces gross purchased-water demand without an avoided-product credit. | `eu-pef-2021-2279` |
| `allocation_exported_milk_components` | cream, skim milk, or other exported dairy co-products | After subdivision, allocate remaining shared burdens using a documented physical relationship that reflects the causal mass or solids transformation; if no defensible physical relationship exists, use economic allocation with contemporaneous prices and report a physical-allocation sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste_and_recycling` | waste treatment, recovered material, and exported condensate | Keep treatment burdens with the generating system unless the selected downstream dataset implements another disclosed convention; do not claim avoided burdens or recycling credits twice. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_materials` | `milk_reception_and_standardization`; `concentration_and_formulation` | received materials, internal transfers, formulation ingredients, composition, and exported dairy components | weighbridge, calibrated tank or line meter, batch sheet, inventory ledger, laboratory release record | material id; supplier; lot; opening and closing inventory; received, issued, returned, transferred, and exported mass; milkfat; total milk solids; protein in milk-solids-not-fat; sweetener fraction | reconcile physical meter or scale records with batch and inventory records | kg; kg/kg | each lot, aggregated monthly or annually | at least 12 representative consecutive months or the full campaign when shorter | all included lines and storage tanks | sum net consumed or transferred mass by material and lot, then divide by net saleable reference-product mass | calibration records; inventory reconciliation; lot traceability; laboratory method and quality-control results |
| `cp_utilities` | all process ids | electricity, fuels, steam, water, and recovered condensate | fiscal or submeter reading, fuel invoice, boiler log, utility allocation record | meter id; opening and closing reading; unit; fuel quantity; heating-value basis; steam conditions; condensate quantity; allocation driver; downtime | prefer process submeters; otherwise allocate a reconciled site total using documented operating hours, throughput, or engineering load | kWh; MJ; kg; m3 | continuous or per shift, aggregated monthly | same reference period as production | all included utilities and directly attributable auxiliaries | subtract verified non-PCR uses and divide the remaining amount by net saleable product; retain the allocation driver | meter calibration; invoice reconciliation; site energy and water balance; allocation worksheet |
| `cp_wastewater_and_losses` | `milk_reception_and_standardization`; `concentration_and_formulation` | product loss, cleaning liquid, condensate disposition, wastewater, and treatment route | effluent meter, waste ticket, batch deviation, mass-balance record, laboratory analysis | stream id; origin; mass or volume; density; product solids; COD or other reported pollutant; destination; treatment; date | measure each material route; calculate unmeasured product loss only as a disclosed residual | kg; m3; kg pollutant | per batch or daily, aggregated monthly | same reference period as production | every included discharge and loss route | sum by stream and destination, convert with measured density where needed, and normalize to reference output | meter calibration; chain-of-custody or treatment ticket; laboratory result; signed mass-balance review |
| `cp_packaging_and_output` | `final_packaging_and_dispatch` | packaging input, gross product, net saleable output, off-spec product, and packaging reject | bill of materials, line counter, checkweigher, warehouse release, reject log | product lot; package material; units issued, returned, filled, accepted, and rejected; declared net mass; bulk dispatch mass; waste destination | reconcile packaging issue and line-output records to released product and rejects | kg; item | each packaging lot or production shift | same reference period as production | every included package or bulk-dispatch format | calculate net saleable product from accepted units and verified net mass; aggregate materials and rejects by type | checkweigher calibration; bill of materials; warehouse reconciliation; reject disposition record |
| `cp_direct_emissions` | `concentration_and_formulation` | direct fuel-combustion and other measured releases | fuel record, continuous monitor, stack test, leak log, emission calculation | fuel quantity; carbon content or factor; oxidation factor; monitored concentration and flow; operating time; refrigerant added and recovered | use monitored mass where available; otherwise calculate from collected activity and a cited carrier-specific factor | kg; kg/h; concentration unit | per fuel lot, monitoring interval, test, or maintenance event | same reference period as production | all in-boundary combustion and direct release points | calculate by source, sum over the reference period, and divide by net saleable output without including upstream emissions | meter or monitor calibration; laboratory report; factor reference; calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_consumption` | each material input | net consumed mass = opening inventory + receipts - closing inventory - documented returns or transfers out | inventory and movement records from `cp_batch_materials` or `cp_packaging_and_output` | kg material consumed | `mass-balance-identity` |
| `calc_reference_output` | reference product | net saleable mass = accepted package count × verified net mass per package + metered accepted bulk-dispatch mass | accepted unit count; checkweigher result; bulk meter from `cp_packaging_and_output` | kg net saleable condensed milk | `mass-balance-identity` |
| `calc_normalized_inventory` | every inventory row | normalized amount = period amount attributable to this PCR divided by net saleable condensed-milk mass in the same period | collected or calculated period amount; `calc_reference_output` | amount per 1 kg reference product | `eu-pef-2021-2279`; `mass-balance-identity` |
| `calc_mass_balance` | each process and reporting period | mass-balance residual = total wet-mass inputs - measured product and co-product outputs - measured waste and wastewater outputs - quantified water vapour or other measured releases; investigate and disclose material residuals | batch materials; product output; condensate; waste; wastewater; emissions | kg and percent residual | `mass-balance-identity` |
| `calc_energy` | purchased energy | delivered energy = metered energy or fuel quantity × documented heating value; keep electricity and each fuel carrier separate | utility records from `cp_utilities` | kWh electricity and MJ thermal energy per reference product | `eu-fdm-bat-2019-2031` |
| `calc_allocation_factor` | exported co-products | allocation factor = selected documented physical or economic indicator for one output divided by the sum of that indicator across jointly produced outputs | output quantities and solids or contemporaneous price records | dimensionless burden share | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and every inventory exchange | Use the verified condensed-milk reference UUID and resolve every non-reference Tiangong flow UUID before activation; retain product subtype, composition, package, geography, technology, and period qualifiers. | Tiangong exact readback; product specification; lot and supplier records |
| `dq_temporal` | foreground activity data | Use at least 12 representative consecutive months unless production is a shorter campaign; explain shutdowns, abnormal lots, and extrapolation. | dated meter, batch, inventory, and release records |
| `dq_completeness` | material, energy, water, waste, wastewater, and direct emissions | Reconcile all included processes and report coverage by mass, energy, and operating time; do not omit a material stream solely because its Tiangong UUID remains unresolved. | mass, energy, and water balances; source register; unresolved-identity register |
| `dq_measurement` | foreground records and calculations | Retain calibration, laboratory methods, meter hierarchy, conversion factors, allocation drivers, and calculation worksheets sufficient for independent reproduction. | calibration certificates; laboratory QA; signed calculation review |
| `dq_representativeness` | upstream datasets and foreground aggregation | Match geography, technology, product state, and reference period; disclose every proxy and assess sensitivity for raw milk, sugar, packaging, and energy proxies. | dataset metadata and proxy assessment |
| `dq_reasoned_ranges` | every `reasoned_estimate` range | Treat the range only as a provisional QA screen; never substitute its midpoint for a foreground value without explicit scenario justification, and replace it with reviewed foreground or source-backed evidence before publication-critical use. | range-evidence review log and replacement decision |
| `dq_source_value_limits` | Codex specifications and BAT performance information | Use composition limits, quality factors, naming provisions, BAT-associated performance levels, and monitoring frequencies only for identity, applicability, compliance context, or data-quality checks; never insert them as generic LCI amounts. | product specification and source-use review against `codex-cxs-282-1971`, `codex-cxs-206-1999`, and `eu-fdm-bat-2019-2031` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require exactly one reference output of 1 kg using Condensed Milk UUID `5db242cb-3e7b-46fc-89cc-d676dd2a1fd3`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validate_product_scope` | product identity and composition | Require CPC 3.0 code 22222 and declared subtype, sweetener, milkfat, total milk solids, and milk protein in milk-solids-not-fat; reject CPC 22221, CPC 22229, milk powders, and ordinary liquid milk, and require dairy terms to match the declared product. | `unsd-cpc-3-0-22222`; `codex-cxs-282-1971`; `codex-cxs-206-1999` |
| `validate_process_coverage` | foreground process map | Require all three process ids and evidence that cleaning, directly serving utilities, losses, wastewater routes, and direct site emissions were included or explicitly demonstrated not applicable. | `eu-fdm-bat-2019-2031` |
| `validate_mass_and_yield` | process and overall mass balance | Require measured net output, input and output reconciliation, and a reviewed explanation for every material residual; reasoned-estimate ranges are warnings, not replacement values. | `mass-balance-identity` |
| `validate_allocation` | multi-output operations | Require subdivision evidence or a declared allocation method, indicator values, factors summing to one, and sensitivity when economic allocation is used. | `eu-pef-2021-2279` |
| `validate_data_quality` | reporting period and source package | Require aligned temporal coverage, calibration and laboratory evidence, upstream dataset metadata, proxy disclosure, and an explicit list of unresolved identities or range evidence. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_no_double_counting` | energy, water recovery, rework, waste, and recycling | Reject double counting between site totals and process submeters, between fuel combustion and purchased heat, between recovered condensate and purchased water, or between waste treatment and recycling credits. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground condensed-milk production dataset at the manufacturing gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, UUID resolution, and representative upstream linking |
| allowed_use | LCA process and lifecyclemodel construction for the declared condensed-milk subtype, composition, technology, geography, package format, and reference period |
| excluded_use | Evaporated milk, milk powder, infant formula, non-dairy condensed beverages, undeclared product subtypes, or geography and technology outside the documented representativeness without sensitivity analysis |
| required_metadata | PCR id and version state; CPC code; product subtype; composition; package or bulk format; reference UUIDs; site geography; technology; reference period; capacity and utilization context; allocation; included operations; upstream datasets; data owner and review status |
| required_quality_disclosure | Coverage and reconciliation; calibration and laboratory evidence; temporal, geographic, and technological representativeness; proxy datasets; allocation sensitivity; losses and wastewater routes; unresolved UUIDs; all reasoned-estimate ranges and their replacement status |
| update_trigger | Change in product subtype or composition, milk sourcing, concentration technology, energy or water system, package format, allocation, wastewater route, site geography, material throughput, applicable standard, reference-flow identity, or evidence that invalidates a QA guardrail |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-22222` | `official_guidance` | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, Explanatory Notes, subclass 22222 Condensed milk; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Classification identity and explicit inclusions and exclusions; no quantitative LCI use |
| `codex-cxs-282-1971` | `standard` | Codex Alimentarius, CXS 282-1971, Standard for Sweetened Condensed Milks, revised 1999 and amended 2010; https://www.fao.org/input/download/standards/173/CXS_282e.pdf (retrieved 2026-08-12) | Sweetened-condensed-milk definition, scope, permitted raw materials and ingredients, subtypes, and composition qualifiers; composition values are not generic LCI amounts |
| `codex-cxs-206-1999` | `standard` | Codex Alimentarius, CXS 206-1999, General Standard for the Use of Dairy Terms, adopted 1999 and amended 2022; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B206-1999%2FCXS_206e.pdf (retrieved 2026-08-12) | Dairy product identity, terminology, and naming disclosure; no quantitative LCI use |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, Annexes I and II; https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-12) | Functional-unit and reference-flow framing, system-boundary disclosure, company-specific foreground data, data quality, allocation, proxies, and validation |
| `eu-fdm-bat-2019-2031` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 of 12 November 2019 establishing BAT conclusions for the food, drink and milk industries; https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Inventory and monitoring of water, energy, raw materials, wastewater, waste gas, losses, and direct releases; BAT performance values are not generic LCI amounts |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass identity applied to measured foreground inputs, outputs, stocks, losses, and transfers; deterministic PCR calculation method | Net consumption, reference-output normalization, process mass balance, and exact reference-flow checks |
