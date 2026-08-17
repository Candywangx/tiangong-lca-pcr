---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-ot-3fe2fc05
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Chocolate and other food preparations containing cocoa (except sweetened cocoa powder), other than in bulk forms

## 1. Scope and Applicability

This PCR guides production of a foreground data package for finished chocolate and other cocoa-containing food preparations supplied in non-bulk forms. It covers dark, milk, white, filled, coated, moulded, portioned, flaked, vermicelli, praline, and comparable finished preparations when cocoa materials define the product category. The exact marketed product, formulation class, cocoa-content declaration, physical form, inclusions or filling, and packaging configuration must be declared. Product identity and composition are interpreted using Codex CXS 87-1981 (`codex-cxs-87-1981`).

The default foreground boundary begins when cocoa materials, sugar or sweeteners, dairy ingredients, fats, inclusions, additives, and packaging materials are received at the manufacturing site. It ends with 1 kg net edible product in its declared non-bulk market form at the factory gate. If dried cocoa beans rather than cocoa liquor, cocoa butter, cocoa powder, or another intermediate are received, on-site bean cleaning, roasting, winnowing, grinding, and any pressing or powder grinding must also be included. The manufacturing sequence is based on the chocolate process decomposition reported by Bianchi et al. (`bianchi-2020-chocolate-lca`).

Excluded products are sweetened cocoa powder, cocoa beans, cocoa liquor/paste, cocoa butter, cocoa powder, and bulk chocolate sold as intermediate materials; cocoa-free sugar confectionery; prepared cocoa beverages; and downstream distribution, retail refrigeration, consumer use, and end-of-life operations. Upstream production of every purchased material and energy carrier remains outside the foreground process inventory but requires a representative upstream dataset for downstream life-cycle use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-ot-3fe2fc05 |
| classification_refs | CPC 3.0 `23660`, Chocolate and other food preparations containing cocoa (except sweetened cocoa powder), other than in bulk forms |
| covered_products | Finished chocolate and cocoa-containing food preparations supplied as non-bulk units or portions, including declared plain, milk, white, filled, coated, moulded, flaked, vermicelli, praline, and inclusion-containing forms |
| excluded_products | Sweetened cocoa powder; cocoa beans; cocoa liquor/paste, cocoa butter, cocoa powder, and bulk chocolate sold as intermediates; cocoa-free confectionery; prepared cocoa beverages |
| representative_product | Packaged finished chocolate in a declared non-bulk market form |
| production_route | Received cocoa materials and other ingredients -> dosing and formulation -> refining/conching -> tempering, forming, filling or finishing -> cooling -> non-bulk packaging; add on-site cocoa-bean processing when applicable |
| market_state | Net edible product in a declared solid or semi-solid non-bulk form, packaged and released at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of finished chocolate or another cocoa-containing food preparation in its declared non-bulk market form at the factory gate |
| How much | 1 kg net edible product, excluding packaging mass |
| How well | Product subtype, formulation class, cocoa-content declaration, ingredient and allergen profile, physical form, filling or inclusions, quality specification, and packaging configuration are declared |
| How long or cycle | One released production batch at factory gate; no use duration is assigned |
| reference_flow_link | 1 kg of the category-defining Chocolate product flow, with the required product qualifiers declared |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net edible product |
| Reference product flow | Chocolate `4c4a6e1b-a4a8-4d16-ac36-1e5492e752a3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; formulation class; total cocoa solids or applicable cocoa-content declaration; dairy status; filling or inclusion type; physical form; net edible mass; packaging configuration; starting cocoa-material condition; production geography; reference year; factory gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference flow as net edible product mass at factory gate; do not include packaging mass. |
| `packaging_mass_separation` | packaging inputs and outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure packaging separately from edible product and report each material class without adding it to reference product mass. |
| `ingredient_mass_basis` | cocoa and other ingredient inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received mass and retain dry-matter, moisture, cocoa-solids, or concentration data when required to reconcile formulations. |
| `rework_mass_tracking` | off-spec product and internal rework | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record generation and re-entry of internal rework separately; count only material leaving the foreground boundary as waste or co-product. |
| `utility_unit_preservation` | electricity, heat, cooling, fuels, and water | activity-specific property | kWh, MJ, kg, or m3 as metered | Preserve the metered unit and conversion factor; do not combine electricity, thermal energy, cooling service, fuel mass, and water mass into one undifferentiated quantity. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_default_gate` | foreground starting and ending gates | Begin at site receipt of cocoa materials, other ingredients, and packaging; end with released non-bulk product and separately recorded packaging at factory gate. Require upstream datasets for purchased inputs. | `ec-pef-2021-2279`; `bianchi-2020-chocolate-lca` |
| `boundary_on_site_cocoa_processing` | sites receiving dried cocoa beans | Include cleaning and selection, roasting, winnowing, milling, and any on-site pressing or cake grinding used to produce cocoa liquor, butter, or powder. | `bianchi-2020-chocolate-lca` |
| `boundary_environmental_inventory` | all foreground processes | Inventory raw materials, water, energy, waste water, waste gas, solid waste, and relevant direct emissions; retain a process flow sheet showing where emissions arise. | `eu-fdm-bat-2019` |
| `boundary_downstream_separation` | distribution, use, and end of life | Exclude downstream stages from this foreground package but keep product and packaging outputs suitable for connection to a downstream cradle-to-grave model. | `ec-pef-2021-2279` |
| `boundary_no_double_counting` | shared utilities and internal intermediates | Assign each input, emission, waste, and intermediate transfer once; where site totals are allocated to processes, do not also add the same submetered quantity. | `ec-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | received_cocoa_materials_and_other_ingredients; declare whether cocoa enters as dried beans, liquor/paste, butter, powder, chocolate, or another cocoa preparation |
| starting_condition_role | foreground manufacturing gate and determinant of whether cocoa-bean primary processing is included |
| product_classification_scope | CPC 3.0 `23660`; finished non-bulk chocolate and other cocoa-containing food preparations, excluding sweetened cocoa powder |
| recursive_input_rule | A purchased input already within this product category, such as chocolate used for coating or filling, is recorded as a separate product input with its own upstream dataset and is not recursively expanded inside the same foreground package. |
| upstream_dataset_requirement | Representative upstream datasets are required for each cocoa derivative, sugar or sweetener, dairy ingredient, fat, inclusion, additive, packaging material, fuel, electricity mix, water supply, and external waste treatment service. |
| disclosure | Declare formulation and cocoa-content basis, starting cocoa-material condition, included unit operations, geography, reference year, technology, batch scope, internal rework, co-products, packaging configuration, utility allocation, cut-offs, and omitted flows. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cocoa_bean_processing | On-site cocoa-bean processing | conditional | Include when the site receives dried cocoa beans and produces cocoa liquor, butter, or powder used in the reference product. | foreground cocoa intermediate production | kg cocoa intermediates transferred to formulation |
| ingredient_formulation | Ingredient receipt, dosing, and formulation | required |  | foreground material preparation | kg formulated chocolate mix |
| refining_conching | Refining and conching | required |  | foreground particle-size reduction, mixing, flavour development, and moisture/volatile removal | kg refined chocolate mass |
| tempering_forming_finishing | Tempering, forming, filling, coating, and cooling | required | Include only the finishing operations used by the declared product subtype. | foreground final product formation | kg finished edible product before packaging |
| non_bulk_packaging | Non-bulk packaging | required |  | foreground packaging and release | kg net edible product plus separately measured packaging |
| site_utilities_environmental_control | Site utilities, cleaning, and environmental control | required |  | shared foreground support and environmental-flow accounting | site utility and emission totals normalized to kg reference product |

### Process: On-site cocoa-bean processing (`cocoa_bean_processing`)

#### Inputs

##### Product flows

###### Dried cocoa beans received for on-site transformation (`cocoa_bean_input`)

Record dried cocoa beans only when bean cleaning, roasting, winnowing, milling, pressing, or cake grinding occurs inside the foreground site.

- Selected flow: Dried cocoa beans
- Flow property / unit: Mass / kg
- Amount rule: measured as-received cocoa bean mass attributable to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_bean_inputs`
- Sources:
- Range: Provisional cocoa-bean input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg net edible product
  - Basis: broad first-pass screening estimate; replace with batch mass-balance evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Cocoa intermediates transferred to formulation (`cocoa_intermediate_output`)

Record cocoa liquor, cocoa butter, cocoa powder, or other cocoa intermediates separately by actual material identity and transferred mass.

- Selected flow: Cocoa liquor, cocoa butter, or cocoa powder as applicable
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by cocoa intermediate type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoa_intermediate_outputs`
- Sources:

##### Waste flows

###### Cocoa shells, screenings, and rejected beans leaving the site (`cocoa_processing_residues`)

Record each residue route separately; internal reuse is an internal transfer and must not be counted as an avoided product.

- Selected flow: Cocoa processing residues
- Flow property / unit: Mass / kg
- Amount rule: measured residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

### Process: Ingredient receipt, dosing, and formulation (`ingredient_formulation`)

#### Inputs

##### Product flows

###### Cocoa-derived materials used in the formulation (`cocoa_material_inputs`)

Record each purchased or internally transferred cocoa liquor, cocoa butter, cocoa powder, chocolate, or other cocoa preparation separately.

- Selected flow: Declared cocoa-derived material
- Flow property / unit: Mass / kg
- Amount rule: measured batch issue mass by ingredient and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_inputs`
- Sources:
- Range: Provisional cocoa-material input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1.2
  - Unit: kg/kg net edible product
  - Basis: broad product-family screening estimate; replace with formulation and mass-balance evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sugar, dairy, fats, inclusions, additives, and other ingredients (`other_ingredient_inputs`)

Record ingredient masses separately by material identity; retain concentration or dry-matter information where formulation reconciliation needs it.

- Selected flow: Declared non-cocoa ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured batch issue mass by ingredient and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_inputs`
- Sources:
- Range: Provisional non-cocoa ingredient screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.2
  - Unit: kg/kg net edible product
  - Basis: broad product-family screening estimate; replace with formulation and mass-balance evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Formulated chocolate mix transferred to refining (`formulated_mix_output`)

Record the reconciled mass of formulated mix transferred to the refining/conching stage.

- Selected flow: Formulated chocolate mix
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated ingredient sum adjusted for measured losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation_inputs`
- Sources:

### Process: Refining and conching (`refining_conching`)

#### Inputs

##### Product flows

###### Formulated mix supplied to refining and conching (`formulated_mix_input`)

Record the mass transferred from formulation without creating a second upstream burden for the same internal intermediate.

- Selected flow: Formulated chocolate mix
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_transfers`
- Sources:

#### Outputs

##### Product flows

###### Refined and conched chocolate mass (`refined_chocolate_mass`)

Record the mass leaving the declared refining/conching sequence. Bianchi et al. identify refining and conching as central chocolate-manufacturing operations (`bianchi-2020-chocolate-lca`).

- Selected flow: Refined chocolate mass
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after refining/conching
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_transfers`
- Sources: `bianchi-2020-chocolate-lca`
- Range: Provisional refined-mass yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.2
  - Unit: kg/kg net edible product
  - Basis: broad first-pass mass-balance screening estimate; replace with batch evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Off-spec chocolate not internally reworked (`off_spec_chocolate`)

Record only material that leaves the foreground system as waste or a separately marketed co-product; track internal rework as an internal loop.

- Selected flow: Off-spec chocolate
- Flow property / unit: Mass / kg
- Amount rule: measured off-spec mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:
- Range: Provisional off-spec output screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg net edible product
  - Basis: broad first-pass screening estimate; replace with disposition records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Tempering, forming, filling, coating, and cooling (`tempering_forming_finishing`)

#### Inputs

##### Product flows

###### Refined chocolate and declared fillings or inclusions (`finishing_material_inputs`)

Record internal refined chocolate transfer and any separately purchased or produced filling, coating, or inclusion not already captured in formulation.

- Selected flow: Refined chocolate, filling, coating, or inclusion as applicable
- Flow property / unit: Mass / kg
- Amount rule: measured transfer or batch issue mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_transfers`
- Sources:

#### Outputs

##### Product flows

###### Finished edible product before packaging (`finished_unpacked_product`)

Record the conforming product after tempering, forming, filling or coating, and cooling, before packaging.

- Selected flow: Finished unpacked chocolate or cocoa-containing preparation
- Flow property / unit: Mass / kg
- Amount rule: measured conforming unpacked product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_mass`
- Sources:

### Process: Non-bulk packaging (`non_bulk_packaging`)

#### Inputs

##### Product flows

###### Primary and secondary packaging materials (`packaging_material_inputs`)

Record each wrapper, film, foil, paper, board, tray, carton, label, adhesive, and other packaging material separately by actual mass and material.

- Selected flow: Declared packaging material
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-and-stock-reconciled packaging consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources:
- Range: Provisional packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg net edible product
  - Basis: broad non-bulk packaging screening estimate; replace with bill-of-material and issue records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Released packaged reference product (`reference_product_output`)

The edible portion is the quantitative reference; packaging is connected separately and is not included in the 1 kg reference amount.

- Selected flow: Chocolate `4c4a6e1b-a4a8-4d16-ac36-1e5492e752a3`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg measured net edible product after release reconciliation
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Packaging scrap and rejected packaging (`packaging_waste`)

Record packaging scrap by material and actual treatment or recovery destination.

- Selected flow: Packaging waste by material
- Flow property / unit: Mass / kg
- Amount rule: measured packaging scrap mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:
- Range: Provisional packaging-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net edible product
  - Basis: broad first-pass screening estimate; replace with waste records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Site utilities, cleaning, and environmental control (`site_utilities_environmental_control`)

#### Inputs

##### Product flows

###### Site electricity used by foreground production (`site_electricity`)

Use process submetering where available; otherwise allocate a complete site electricity balance to products with the disclosed rule.

- Selected flow: Electricity, declared grid or supplier mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to the foreground production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh/kg net edible product
  - Basis: broad first-pass site electricity estimate; replace with submeter or invoice reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Site thermal energy or fuel used by foreground production (`site_thermal_energy`)

Record purchased heat and each direct fuel separately; do not double count fuel energy and purchased heat.

- Selected flow: Declared fuel or purchased thermal energy
- Flow property / unit: Energy or mass / MJ or kg
- Amount rule: metered purchased heat or reconciled fuel consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional thermal-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg net edible product
  - Basis: broad first-pass thermal-energy estimate; replace with meter or fuel records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling energy or service used by foreground production (`site_cooling_energy`)

Record cooling electricity or purchased cooling service and state whether it is already included in site electricity.

- Selected flow: Cooling electricity or cooling service
- Flow property / unit: Energy / kWh
- Amount rule: submetered or engineering-allocated cooling energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_utilities`
- Sources:
- Range: Provisional cooling-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg net edible product
  - Basis: broad first-pass cooling estimate; replace with submetering or equipment calculation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water used for cleaning and process support (`cleaning_water`)

Record water by source and purpose; dry cleaning with zero water must be explicitly documented rather than omitted.

- Selected flow: Water supply by source
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered or reconciled water use attributable to foreground production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional water-use screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net edible product
  - Basis: broad first-pass cleaning and support-water estimate; replace with water balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Waste flows

###### Process and cleaning wastewater sent to treatment (`process_wastewater`)

Record wastewater quantity, treatment destination, and relevant monitored characteristics; a documented zero-discharge route is allowed.

- Selected flow: Wastewater to declared treatment
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered or water-balance-derived wastewater quantity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net edible product
  - Basis: broad first-pass wastewater estimate; replace with flow monitoring or water balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct air and water emissions from on-site operations (`direct_site_emissions`)

Record measured or calculated direct emissions from combustion, roasting, dust control, refrigeration losses, wastewater discharge, and other foreground sources. Do not duplicate emissions already represented by purchased energy or off-site treatment datasets.

- Selected flow: Relevant elementary flow by substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured concentration and flow, mass-balance loss, or fuel-factor calculation by source
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net edible reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional direct-emission screening interval
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg substance/kg net edible product
  - Basis: deliberately broad first-pass screen for each reported substance; replace with monitored or factor-based evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground burdens | Avoid allocation by subdividing processes, separately metering unit operations, and tracking internal intermediates and rework. | `ec-pef-2021-2279` |
| `allocation_internal_rework` | internal rework | Treat rework that returns to the same foreground system as an internal loop; do not credit it as an avoided product and do not count it as waste unless it leaves the boundary. |  |
| `allocation_physical_relation` | unavoidable co-product allocation | Use a demonstrable physical relationship that reflects how inputs and outputs change; disclose the relationship, factor, and affected flows. | `ec-pef-2021-2279`; `bianchi-2020-chocolate-lca` |
| `allocation_fallback_sensitivity` | cocoa liquor, butter, powder, or other jointly produced outputs | If no more representative physical relation is available, use dry mass as the provisional allocation basis and test an energy-content or economic alternative when the result is material. | `bianchi-2020-chocolate-lca` |
| `allocation_shared_utilities` | site totals not directly metered to products | Allocate using documented causal drivers such as equipment energy, operating time, throughput, or production mass; reconcile allocated totals to the site record and prevent double counting. | `ec-pef-2021-2279`; `eu-fdm-bat-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cocoa_bean_inputs` | cocoa_bean_processing | dried cocoa beans | receiving and batch issue records | lot id; supplier; origin; mass; moisture; receiving date; batch id | calibrated scale or weighbridge reconciled to inventory | kg | per lot and batch | representative production period, normally at least 12 consecutive months | all lines receiving beans for covered products | sum attributable bean mass and normalize to released net product | scale calibration; lot traceability; inventory reconciliation |
| `cp_cocoa_intermediate_outputs` | cocoa_bean_processing | cocoa liquor, butter, powder, and residues | transfer and yield records | batch id; intermediate identity; input mass; output mass; moisture or solids; destination | calibrated scale plus batch mass balance | kg | per batch | same period as reference product | all on-site bean-processing lines | sum outputs by identity and reconcile to bean input and residues | scale calibration; batch yield report; reconciliation |
| `cp_formulation_inputs` | ingredient_formulation | cocoa and non-cocoa formulation inputs | recipe, batch issue, and inventory records | product code; batch id; ingredient id; lot id; issued mass; return mass; moisture or concentration | calibrated dosing system and inventory reconciliation | kg | per batch | same period as reference product | all formulation lines for covered products | net issued mass by ingredient divided by released net product | recipe version; dosing calibration; lot and stock reconciliation |
| `cp_process_transfers` | refining_conching | internal formulated and refined chocolate transfers | batch transfer records | batch id; source process; destination process; material identity; gross mass; tare; timestamp | calibrated vessel, load-cell, or mass-balance transfer record | kg | per transfer or batch | same period as reference product | all covered refining, conching, and finishing lines | reconcile incoming and outgoing transfers without adding upstream burdens twice | equipment calibration; batch genealogy; transfer reconciliation |
| `cp_finished_product_mass` | tempering_forming_finishing | conforming finished edible product | production and release records | product code; batch id; gross mass; packaging tare; net edible mass; rejects; release status | calibrated checkweigher or reconciled production scale | kg | per batch and packaging run | same period as reference product | all covered forming and finishing lines | sum released net edible mass; exclude packaging and unreleased rejects | scale calibration; release record; net-content reconciliation |
| `cp_packaging_materials` | non_bulk_packaging | packaging consumption | bill of materials, issue, return, and stock records | packaging material id; composition; issued mass; returned mass; packaged units; scrap | measured issue/return or supplier mass verified by sampling | kg | per packaging run and monthly reconciliation | same period as reference product | all non-bulk packaging lines | net consumed packaging mass by material divided by released net product | bill-of-material revision; stock reconciliation; sample weighing |
| `cp_waste_outputs` | non_bulk_packaging | food and packaging wastes | waste logs and transfer documents | waste type; source process; mass; date; destination; treatment route; rework status | calibrated waste scale and contractor records | kg | per collection and monthly reconciliation | same period as reference product | all foreground processes | sum only waste crossing the site boundary by type and route | scale calibration; transfer note; rework reconciliation |
| `cp_site_utilities` | site_utilities_environmental_control | electricity, heat, fuels, and cooling | meters, invoices, fuel receipts, and production logs | meter id; opening and closing readings; fuel quantity; calorific value; production period; line operating hours | revenue meter, submeter, or reconciled engineering allocation | native meter unit, kWh, MJ, or kg | continuous or per invoice; aggregate monthly | representative production period, normally at least 12 consecutive months | complete site and all covered production lines | subtract excluded uses, allocate with disclosed driver, and reconcile to site total | meter calibration; invoices; allocation worksheet; site-total reconciliation |
| `cp_water_wastewater` | site_utilities_environmental_control | water and wastewater | supply and discharge meters, water balance, and monitoring records | source; inflow; use area; discharge route; flow; pH; temperature; monitored pollutant loads | meters and documented water balance; accredited analysis where applicable | kg, m3, and substance-specific units | continuous or monthly flow; monitoring frequency appropriate to permit and source | same period as reference product | complete site water system | reconcile inflow, consumption, product incorporation, evaporation, and discharge | meter calibration; water-balance closure; laboratory reports |
| `cp_direct_emissions` | site_utilities_environmental_control | direct emissions to air and water | stack, fugitive, refrigerant, wastewater, and fuel records | source id; substance; concentration; flow; operating time; fuel use; factor; refrigerant additions; compartment | direct monitoring or transparent calculation from collected activity data | kg substance and source-specific measurement units | by monitoring plan and per material event | same period as reference product | all foreground emission sources | concentration x flow x time or collected activity x documented factor, then normalize | calibration; laboratory report; factor citation; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground inventory rows | normalized amount = attributable period amount / released net edible product kg | protocol-specific attributable amount; `cp_finished_product_mass` | amount per 1 kg net edible reference product |  |
| `calc_formulation_balance` | ingredient formulation | net ingredient input = issued mass - returned unused mass; reconcile sum of net inputs to internal transfers, measured losses, and wastes | `cp_formulation_inputs`; `cp_process_transfers`; `cp_waste_outputs` | reconciled kg ingredient by type per reference flow | `codex-cxs-87-1981` |
| `calc_packaging_consumption` | packaging | net packaging consumed = issued mass - unused return; reconcile to packaged units and packaging scrap | `cp_packaging_materials`; `cp_waste_outputs` | kg packaging material by type per reference flow |  |
| `calc_utility_allocation` | shared site utilities | attributable utility = complete site utility total - excluded uses, multiplied by disclosed causal allocation share; sum of shares must equal the allocable total | `cp_site_utilities`; operating hours; throughput; submeter data | kWh, MJ, or kg utility per reference flow | `ec-pef-2021-2279`; `eu-fdm-bat-2019` |
| `calc_water_balance` | water and wastewater | water input = product incorporation + evaporation + wastewater + other measured losses within documented uncertainty | `cp_water_wastewater` | reconciled water input and wastewater per reference flow | `eu-fdm-bat-2019` |
| `calc_direct_emissions` | direct emissions | emission mass = measured concentration x standardized volumetric flow x operating time, or collected activity x cited emission factor | `cp_direct_emissions` | kg substance by compartment per reference flow | `eu-fdm-bat-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain product code, subtype, recipe version, cocoa-content declaration, physical form, filling or inclusions, packaging configuration, batch id, and release status. | product specification; recipe; release record; `codex-cxs-87-1981` |
| `dq_mass_measurement` | all material inputs and outputs | Use calibrated weighing systems and reconcile ingredient, intermediate, product, rework, waste, and packaging masses for the same production population. | calibration records; batch and period mass balances |
| `dq_temporal_coverage` | foreground activity data | Use a representative continuous period, normally at least 12 months, or disclose seasonality, campaign duration, start-up, shutdown, and other departures. | dated raw records; coverage statement |
| `dq_geography_technology` | site and upstream links | Declare site geography, production technology, cocoa-material starting condition, energy supply, wastewater treatment, and representativeness of upstream datasets. | site description; supplier and dataset metadata |
| `dq_environmental_completeness` | utilities, wastes, wastewater, and emissions | Maintain a complete inventory of water, energy, raw materials, waste water, waste gas, solid waste, and relevant direct emissions, with justified zeroes and omissions. | process flow sheet; inventories and monitoring plan; `eu-fdm-bat-2019` |
| `dq_allocation` | shared processes and co-products | Retain subdivision attempts, allocation drivers, factors, reconciliations, and sensitivity results for material allocation choices. | allocation worksheet; meter reconciliation; sensitivity result |
| `dq_estimate_replacement` | provisional reasoned ranges | Treat every `reasoned_estimate` range as a replaceable QA screen, never as a published default; replace or explicitly review it before methodology activation. | review record and source-backed or foreground range evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require Chocolate UUID `4c4a6e1b-a4a8-4d16-ac36-1e5492e752a3`, Product flow type, reference property Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validate_scope` | product identity | Require a non-bulk finished cocoa-containing preparation and reject sweetened cocoa powder, bulk cocoa/chocolate intermediates, cocoa-free confectionery, and prepared beverages. | `codex-cxs-87-1981` |
| `validate_qualifiers` | reference product metadata | Fail completeness when any required qualifier in section 3 is absent. | `codex-cxs-87-1981` |
| `validate_starting_condition` | system boundary | Require the incoming cocoa-material condition and inclusion or exclusion of on-site cocoa-bean processing to be explicit and consistent with process inventory. | `bianchi-2020-chocolate-lca` |
| `validate_process_coverage` | process map and inventory | Require formulation, refining/conching, declared finishing operations, non-bulk packaging, and site utilities; require cocoa-bean processing when beans enter the site. | `bianchi-2020-chocolate-lca`; `eu-fdm-bat-2019` |
| `validate_mass_balance` | material inventory | Reconcile ingredients and internal transfers to released edible product, packaging, wastes, emissions, and inventory change within disclosed uncertainty. |  |
| `validate_environmental_inventory` | site utilities and releases | Require complete water, energy, raw-material, wastewater, waste-gas, solid-waste, and relevant direct-emission records, with zeroes and omissions justified. | `eu-fdm-bat-2019` |
| `validate_allocation` | shared utilities and co-products | Require allocation avoidance evidence, disclosed causal driver or fallback basis, complete total reconciliation, and no duplicate utility or intermediate burden. | `ec-pef-2021-2279`; `bianchi-2020-chocolate-lca` |
| `validate_reasoned_estimates` | QA ranges | Flag every `reasoned_estimate` as provisional and fail activation if a publication-critical allowed range still relies on unreviewed reasoned evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process data package for finished non-bulk chocolate and cocoa-containing food preparations |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections |
| allowed_use | Products matching CPC 3.0 `23660` and the declared formulation, physical form, starting condition, geography, technology, packaging, and factory-gate boundary |
| excluded_use | Sweetened cocoa powder; bulk cocoa/chocolate intermediates; cocoa-free confectionery; prepared beverages; products with materially different starting conditions or unit operations; comparative consumer claims without a separately justified functional equivalence |
| required_metadata | canonical PCR id; reference UUID and mass basis; product subtype; formulation and cocoa-content declaration; dairy, filling, and inclusion status; physical form; starting cocoa material; site geography; reference year; technology; process coverage; packaging bill; allocation; cut-offs; upstream dataset identities |
| required_quality_disclosure | raw-record coverage; calibration; mass, water, and utility reconciliation; data gaps; estimated shares; reasoned-estimate replacements; allocation and sensitivity; wastewater and direct-emission monitoring; upstream representativeness |
| update_trigger | material recipe or cocoa-content change; new starting cocoa material; changed process route, equipment, energy mix, packaging, geography, allocation, environmental control, regulatory requirement, or data period; replacement of a material provisional estimate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-87-1981` | standard | Codex Alimentarius, CXS 87-1981, Standard for Chocolate and Chocolate Products, amended 2025 with 2026 corrigendum, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B87-1981%2FCXS_087e.pdf (retrieved 2026-08-10) | Product scope, chocolate types, composition and cocoa-content qualifiers, identity validation |
| `ec-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annexes I-II, https://environment.ec.europa.eu/publications/recommendation-use-environmental-footprint-methods_en (retrieved 2026-08-10) | Functional unit and reference flow framing, life-cycle boundary, inventory completeness, allocation hierarchy, data quality and robustness |
| `eu-fdm-bat-2019` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-10) | Process flow sheets and inventories of water, energy, raw materials, wastewater, waste gas, solid waste and emissions; monitoring and quality evidence |
| `bianchi-2020-chocolate-lca` | literature | Bianchi, F. R. et al. (2020), Environmental analysis along the supply chain of dark, milk and white chocolate: a life cycle comparison, The International Journal of Life Cycle Assessment, https://doi.org/10.1007/s11367-020-01817-6 | Chocolate manufacturing process decomposition, ingredient and packaging relevance, energy/cooling context, co-product allocation sensitivity |
