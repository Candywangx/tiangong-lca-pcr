---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.extracts-essences-and-concentrates-of-tea-or-mate-and-preparations-with-a-basis-thereof-d5c511dd
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Extracts, essences and concentrates of tea or maté, and preparations with a basis thereof or with a basis of tea or maté

## 1. Scope and Applicability

This PCR governs foreground data packages for manufacture of an explicitly declared tea-derived or maté-derived extract, essence, concentrate, soluble powder, or preparation. A data package shall declare exactly one botanical route (`tea` from *Camellia sinensis* or `mate` from *Ilex paraguariensis*) and exactly one delivered product state (`liquid_extract`, `liquid_concentrate`, `powder`, `essence`, or `formulated_preparation`). Tea and maté routes, liquid and powder routes, and spray-dried and freeze-dried routes shall not be combined as defaults.

The foreground boundary begins with receipt of the declared tea or maté raw material and ends with packaged product at factory storage. It covers screening, water addition, extraction, solid-liquid separation, clarification or filtration, concentration, applicable aroma recovery, powder drying only for a declared powder route, formulation only for a declared preparation, applicable heat treatment, sanitation, packaging, storage, on-site thermal utilities, and refrigeration. Cultivation, primary tea manufacture, primary maté preparation, ingredient production, packaging-material production, purchased utilities, distribution, retail, consumer preparation, and end of life require linked upstream or downstream datasets and are not silently included in the foreground.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.extracts-essences-and-concentrates-of-tea-or-mate-and-preparations-with-a-basis-thereof-d5c511dd |
| classification_refs | CPC 3.0: 23914 |
| covered_products | Tea or maté extracts, essences and concentrates; soluble tea or maté powders; and preparations whose declared basis is tea extract, maté extract, tea, or maté. |
| excluded_products | Unextracted tea leaves; unextracted maté leaves; ready-to-drink beverages classified elsewhere; coffee products; herbal infusions not based on tea or maté; and products lacking a declared botanical source and delivered state. |
| representative_product | 1 kg of one declared tea-derived or maté-derived product in its delivered liquid, concentrate, powder, essence, or formulated state at factory storage. |
| production_route | Botanical source and product state are mandatory route selectors. Water extraction is the default extraction family; enzymes, ethanol, clarification aids, aroma recovery, spray drying, freeze drying, formulation, heat treatment, on-site fuel use, and refrigeration apply only when declared and operated. |
| market_state | Packaged intermediate ingredient or packaged finished preparation at factory storage, with actual solids or moisture, formulation, packaging, and storage condition declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One declared tea-derived or maté-derived extract, essence, concentrate, soluble powder, or preparation that meets its declared composition and quality specification. |
| How much | 1 kg net product at the factory-storage gate, excluding packaging mass. |
| How well | Delivered product state, botanical source, dry-solids or moisture basis, formulation, aroma-recovery status, heat-treatment status, and packaging configuration are declared and conform to the product specification. |
| How long or cycle | One production batch or campaign ending at release to factory storage; storage duration and temperature are declared when they affect refrigeration or loss. |
| reference_flow_link | Exactly one final-product output row in `packaging_and_storage`, selected by the declared botanical source and product state. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net declared product |
| Reference product flow | Exact Tiangong product flow unresolved; no approximate UUID assigned. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical_source; delivered_product_state; tea_or_mate_type; extract_or_preparation_identity; net_mass; dry_solids_or_moisture_basis; formulation_bom; extraction_solvent; concentration_method; aroma_recovery_status; drying_route; heat_treatment_status; packaging_configuration; storage_temperature; storage_duration; geography; reference_period |

The unresolved reference-product UUID is a publication blocker. The category shall not use the generic Tiangong `Tea` flow as an approximate product identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | final reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every exchange to 1 kg net declared product at factory storage; packaging mass is inventoried separately and is excluded from net product mass. |
| `solids_basis` | extracts, concentrates, powders, and preparations | Mass fraction | kg dry solids/kg product or % w/w | Record measured dry solids or moisture and the test method; conversions between wet and dry bases shall use the same batch result and retain the unrounded measurement. |
| `energy_carrier_separation` | electricity, steam, heat, and fuels | Energy or Mass, as metered or invoiced | kWh, MJ, or kg | Preserve each carrier as a separate atomic exchange. Do not merge electricity, steam, heat, natural gas, or another fuel before normalization. |
| `water_balance` | added water, condensate, wastewater, and product water | Mass or volume with density | kg or m3 | Record water by stream. If volume is converted to mass, retain measured temperature/density or the documented conversion assumption. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | foreground manufacturing | Include raw-material receipt and screening, water addition, extraction, separation, clarification or filtration, concentration, applicable route steps, sanitation, packaging, storage, and directly controlled utilities. | `fao-who-jmpr-boscalid-2019`; `ec-jrc-fdm-bref-2019` |
| `boundary_route_exclusivity` | route selection | Declare one botanical source and one delivered product state; include aroma recovery, spray drying, freeze drying, formulation, heat treatment, fuel combustion, and refrigeration only when the declared route uses them. | `iso-6079-2021`; `dao-et-al-2021-tea-spray-drying` |
| `boundary_complete_exchanges` | process inventory | Record all materially relevant material and energy inputs, wastes, wastewater, and direct elementary flows without collection labels or combined utility rows. | `eu-pef-method-2021`; `ec-jrc-fdm-bref-2019` |
| `boundary_upstream_links` | purchased inputs | Link each purchased raw material, ingredient, aid, filter medium, cleaning chemical, packaging component, refrigerant, and utility to an upstream dataset with matching identity and geography; do not assign zero burden when a provider is missing. | `eu-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Tea or maté raw material received at the extract-manufacturing site, with botanical identity, prior processing state, moisture, supplier, origin, and incoming packaging declared. |
| starting_condition_role | Foreground manufacturing input; cultivation and primary leaf processing are upstream. |
| product_classification_scope | CPC 3.0: 23914, interpreted by the declared product identity rather than by a generic beverage or leaf flow. |
| recursive_input_rule | A purchased tea or maté extract, concentrate, powder, essence, or preparation used as an ingredient remains a visible product input linked to its upstream dataset; do not recursively recreate its production inside this foreground package. |
| upstream_dataset_requirement | Each raw material, ingredient, processing aid, filter medium, cleaning chemical, packaging component, refrigerant, purchased electricity, steam, or heat requires a compatible upstream provider or an explicit unresolved-provider disclosure. |
| disclosure | Declare botanical source, input state, extraction solvent, concentration technology, applicable aroma and drying route, formulation, heat treatment, utilities, packaging, storage, exclusions, provider gaps, and any cut-off. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt` | Raw-material receipt and screening | required | Select exactly one botanical route; do not default both tea and maté. | foreground preparation | per batch and per 1 kg final product |
| `aqueous_extraction` | Water addition and extraction | required | Record the actual solvent system; enzyme or ethanol inputs apply only when used. | foreground extraction | per extraction batch |
| `solid_liquid_separation` | Solid-liquid separation | required | Include actual centrifuge, press, sieve, or equivalent separation operation. | foreground separation | per extraction batch |
| `clarification_filtration` | Clarification and filtration | required | Record only the aids and media actually used. | foreground purification | per clarified-extract batch |
| `concentration` | Concentration | required | Declare evaporation, membrane, or other concentration technology. | foreground concentration | per concentrate batch |
| `aroma_recovery` | Aroma recovery | conditional | Include only when aroma is recovered, separated, returned, or sold. | foreground recovery | per applicable batch |
| `spray_drying` | Spray drying | conditional | Include only for the declared spray-dried powder route. | foreground drying | per spray-dried batch |
| `freeze_drying` | Freeze drying | conditional | Include only for the declared freeze-dried powder route. | foreground drying | per freeze-dried batch |
| `formulation_blending` | Formulation and blending | conditional | Include only for a declared preparation and list every formulation ingredient separately. | foreground formulation | per formulation batch |
| `heat_treatment` | Product heat treatment | conditional | Include only when pasteurization, sterilization, or another product heat treatment is used. | foreground conditioning | per treated batch |
| `thermal_utility_generation` | On-site thermal utility generation | conditional | Include when fuel is combusted on site; purchased steam or heat remains a purchased input to consuming processes. | foreground utility | per utility-metering period |
| `refrigeration` | Refrigeration | conditional | Include when process cooling or cold storage uses a refrigerant system within foreground control. | foreground utility | per refrigerant and metering period |
| `sanitation_wastewater` | Sanitation and wastewater management | required | Include directly controlled cleaning and wastewater or sludge handling. | foreground support | per batch or cleaning cycle |
| `packaging_and_storage` | Packaging and factory storage | required | Record each actual packaging component and storage condition. | foreground finishing | per 1 kg final product |

### Process: Raw-material receipt and screening (`raw_material_receipt`)

#### Inputs

##### Product flows

###### Refined tea raw material (`refined_tea_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Refined tea `3851dbf3-8691-42a1-bb4d-84501a41bc96`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted and rejected incoming mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`

###### Maté leaves raw material (`mate_leaves_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Maté leaves `5e596b14-8d27-4044-a23d-addc9d67163c`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted and rejected incoming mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`

###### Screening electricity (`receipt_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity for receipt, conveying, screening, and size reduction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Waste flows

###### Tea screening reject (`tea_screening_reject`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected tea leaf material
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass; applicable only to the tea route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Maté screening reject (`mate_screening_reject`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected maté leaf material
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass; applicable only to the maté route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Incoming packaging waste (`incoming_packaging_waste`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Waste paper sack
- Flow property / unit: Mass / kg
- Amount rule: measured discarded incoming paper-sack mass; add separate atomic waste rows in the data package for any other actual incoming packaging material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

### Process: Water addition and extraction (`aqueous_extraction`)

#### Inputs

##### Product flows

###### Extraction water (`extraction_water`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered water added to extraction vessels
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `fao-who-jmpr-boscalid-2019`

###### Extraction electricity (`extraction_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered extraction-vessel, agitation, pumping, and control electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Purchased extraction steam (`extraction_purchased_steam`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased steam delivered to extraction; omit when no purchased steam is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Purchased extraction heat (`extraction_purchased_heat`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased non-steam heat delivered to extraction; omit when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Pectinase processing aid (`pectinase_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Pectinase enzyme preparation
- Flow property / unit: Mass / kg
- Amount rule: formulation or dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `dao-et-al-2021-tea-spray-drying`

###### Cellulase processing aid (`cellulase_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Cellulase enzyme preparation
- Flow property / unit: Mass / kg
- Amount rule: formulation or dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `dao-et-al-2021-tea-spray-drying`

###### Ethanol extraction solvent (`ethanol_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Ethanol
- Flow property / unit: Mass / kg
- Amount rule: measured fresh and make-up ethanol; include only for a declared ethanol-assisted route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `dao-et-al-2021-tea-spray-drying`

#### Outputs

##### Product flows

###### Tea extraction liquor (`tea_extraction_liquor`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Tea extraction liquor
- Flow property / unit: Mass / kg
- Amount rule: measured vessel discharge; applicable only to the tea route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`

###### Maté extraction liquor (`mate_extraction_liquor`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Maté extraction liquor
- Flow property / unit: Mass / kg
- Amount rule: measured vessel discharge; applicable only to the maté route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`

### Process: Solid-liquid separation (`solid_liquid_separation`)

#### Inputs

##### Product flows

###### Separation electricity (`separation_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered centrifuge, press, sieve, conveyor, and pump electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Filter cloth (`separation_filter_cloth`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Woven polypropylene filter cloth
- Flow property / unit: Mass / kg
- Amount rule: measured replacement mass allocated over processed batches; include only when used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_separation_records`

#### Outputs

##### Waste flows

###### Spent tea residue (`spent_tea_residue`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Spent tea leaves
- Flow property / unit: Mass / kg
- Amount rule: measured wet and dry residue mass with moisture result; applicable only to the tea route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `fao-who-jmpr-boscalid-2019`

###### Spent maté residue (`spent_mate_residue`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Spent maté leaves
- Flow property / unit: Mass / kg
- Amount rule: measured wet and dry residue mass with moisture result; applicable only to the maté route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

### Process: Clarification and filtration (`clarification_filtration`)

#### Inputs

##### Product flows

###### Clarification electricity (`clarification_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered clarification, filtration, and pumping electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Diatomaceous-earth filter aid (`diatomaceous_earth_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`

###### Activated-carbon clarification aid (`activated_carbon_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Activated carbon
- Flow property / unit: Mass / kg
- Amount rule: dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`

###### Silica-gel clarification aid (`silica_gel_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Silica gel
- Flow property / unit: Mass / kg
- Amount rule: dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`
- Sources: `fao-who-jmpr-boscalid-2019`

###### PVPP clarification aid (`pvpp_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Polyvinylpolypyrrolidone
- Flow property / unit: Mass / kg
- Amount rule: dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`

###### Microfiltration membrane (`microfiltration_membrane`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Cellulose-acetate microfiltration membrane
- Flow property / unit: Mass / kg
- Amount rule: measured replacement mass allocated over processed batches; include only when used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_clarification_records`

#### Outputs

##### Waste flows

###### Clarification filter residue (`clarification_filter_residue`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Clarification filter cake
- Flow property / unit: Mass / kg
- Amount rule: measured wet and dry filter-cake mass with treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Spent filtration membrane (`spent_filtration_membrane`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Waste cellulose-acetate membrane
- Flow property / unit: Mass / kg
- Amount rule: measured discarded membrane mass; include only for the membrane route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

### Process: Concentration (`concentration`)

#### Inputs

##### Product flows

###### Concentration electricity (`concentration_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered evaporator, vacuum, membrane, pump, and control electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Purchased concentration steam (`concentration_purchased_steam`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased steam delivered to concentration; omit when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Purchased concentration heat (`concentration_purchased_heat`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased non-steam heat delivered to concentration; omit when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Tea concentrate intermediate (`tea_concentrate_intermediate`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Tea concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured concentrate mass and dry solids; applicable only to the tea route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`
- Sources: `fao-who-jmpr-boscalid-2019`

###### Maté concentrate intermediate (`mate_concentrate_intermediate`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Maté concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured concentrate mass and dry solids; applicable only to the maté route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_records`

##### Waste flows

###### Tea concentration product loss (`tea_concentration_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Lost tea concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated concentrate retained in equipment, spilled, or rejected; applicable only to the tea route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance_records`


###### Maté concentration product loss (`mate_concentration_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Lost maté concentrate
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated concentrate retained in equipment, spilled, or rejected; applicable only to the maté route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance_records`

###### Concentration condensate wastewater (`concentration_condensate_wastewater`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Concentration condensate wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered or mass-balance-calculated condensate discharged to wastewater; exclude recovered water retained as an internal loop
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance_records`

### Process: Aroma recovery (`aroma_recovery`)

#### Inputs

##### Product flows

###### Aroma-recovery electricity (`aroma_recovery_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered recovery, condensation, vacuum, and pumping electricity; include only when aroma recovery operates
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Recovered tea aroma (`recovered_tea_aroma`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Recovered tea aroma fraction
- Flow property / unit: Mass / kg
- Amount rule: measured recovered mass and destination; tea route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aroma_records`

###### Recovered maté aroma (`recovered_mate_aroma`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Recovered maté aroma fraction
- Flow property / unit: Mass / kg
- Amount rule: measured recovered mass and destination; maté route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aroma_records`

### Process: Spray drying (`spray_drying`)

#### Inputs

##### Product flows

###### Spray-dryer electricity (`spray_dryer_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered atomization, air movement, separation, conveying, and controls; spray-dried powder route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `dao-et-al-2021-tea-spray-drying`

###### Purchased spray-dryer heat (`spray_dryer_purchased_heat`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Purchased heat
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased heat delivered to the spray dryer; omit when heat is generated on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Spray-dried tea powder (`spray_dried_tea_powder`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Spray-dried instant tea powder
- Flow property / unit: Mass / kg
- Amount rule: measured released powder mass and moisture; tea and spray-drying route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `dao-et-al-2021-tea-spray-drying`

###### Spray-dried maté powder (`spray_dried_mate_powder`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Spray-dried instant maté powder
- Flow property / unit: Mass / kg
- Amount rule: measured released powder mass and moisture; maté and spray-drying route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`

##### Waste flows

###### Tea spray-dryer product loss (`tea_spray_dryer_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected spray-dried tea powder
- Flow property / unit: Mass / kg
- Amount rule: measured chamber, cyclone, filter, spill, and rejected powder mass; applicable only to the tea route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`


###### Maté spray-dryer product loss (`mate_spray_dryer_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected spray-dried maté powder
- Flow property / unit: Mass / kg
- Amount rule: measured chamber, cyclone, filter, spill, and rejected powder mass; applicable only to the maté route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

##### Elementary flows

###### Spray-dryer particulate emission (`spray_dryer_particulate_emission`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or calculated concentration-times-flow for the spray-drying exhaust after abatement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ec-jrc-fdm-bref-2019`

### Process: Freeze drying (`freeze_drying`)

#### Inputs

##### Product flows

###### Freeze-dryer electricity (`freeze_dryer_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered freezing, vacuum, heating, condensation, and controls; freeze-dried powder route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Freeze-dried tea powder (`freeze_dried_tea_powder`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Freeze-dried instant tea powder
- Flow property / unit: Mass / kg
- Amount rule: measured released powder mass and moisture; tea and freeze-drying route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`

###### Freeze-dried maté powder (`freeze_dried_mate_powder`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Freeze-dried instant maté powder
- Flow property / unit: Mass / kg
- Amount rule: measured released powder mass and moisture; maté and freeze-drying route only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`

##### Waste flows

###### Tea freeze-dryer product loss (`tea_freeze_dryer_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected freeze-dried tea powder
- Flow property / unit: Mass / kg
- Amount rule: measured retained, spilled, and rejected powder mass; applicable only to the tea route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`


###### Maté freeze-dryer product loss (`mate_freeze_dryer_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected freeze-dried maté powder
- Flow property / unit: Mass / kg
- Amount rule: measured retained, spilled, and rejected powder mass; applicable only to the maté route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

### Process: Formulation and blending (`formulation_blending`)

#### Inputs

##### Product flows

###### Maltodextrin carrier (`maltodextrin_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Maltodextrin
- Flow property / unit: Mass / kg
- Amount rule: batch formulation record; include only when declared in the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `fao-who-jmpr-boscalid-2019`

###### Whey-protein-isolate carrier (`whey_protein_isolate_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Whey protein isolate
- Flow property / unit: Mass / kg
- Amount rule: batch formulation record; include only when declared in the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `dao-et-al-2021-tea-spray-drying`

###### Sucrose ingredient (`sucrose_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: batch formulation record; include only when declared in the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `fao-who-jmpr-boscalid-2019`

###### Glucose-syrup-solids ingredient (`glucose_syrup_solids_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Glucose syrup solids
- Flow property / unit: Mass / kg
- Amount rule: batch formulation record; include only when declared in the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`

###### Aspartame sweetener (`aspartame_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Aspartame
- Flow property / unit: Mass / kg
- Amount rule: batch formulation record; include only when declared in the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`

###### Citric-acid ingredient (`citric_acid_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Citric acid
- Flow property / unit: Mass / kg
- Amount rule: batch formulation record; include only when declared in the formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_records`
- Sources: `fao-who-jmpr-boscalid-2019`

###### Blending electricity (`blending_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered blending, conveying, and control electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Waste flows

###### Tea formulation product loss (`tea_formulation_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected formulated tea preparation
- Flow property / unit: Mass / kg
- Amount rule: measured retained, spilled, and rejected preparation mass; applicable only to the tea route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`


###### Maté formulation product loss (`mate_formulation_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected formulated maté preparation
- Flow property / unit: Mass / kg
- Amount rule: measured retained, spilled, and rejected preparation mass; applicable only to the maté route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

### Process: Product heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Heat-treatment electricity (`heat_treatment_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered treatment, pumping, holding, and control electricity; include only when operated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Purchased heat-treatment steam (`heat_treatment_purchased_steam`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased steam delivered to product heat treatment; omit when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Waste flows

###### Tea heat-treatment product loss (`tea_heat_treatment_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected heat-treated tea product
- Flow property / unit: Mass / kg
- Amount rule: measured retained, spilled, off-specification, and rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`


###### Maté heat-treatment product loss (`mate_heat_treatment_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected heat-treated maté product
- Flow property / unit: Mass / kg
- Amount rule: measured retained, spilled, off-specification, and rejected mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

### Process: On-site thermal utility generation (`thermal_utility_generation`)

#### Inputs

##### Product flows

###### Natural gas fuel (`natural_gas_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel energy; include only when combusted on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

###### Light fuel oil (`light_fuel_oil_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Light fuel oil
- Flow property / unit: Mass / kg
- Amount rule: tank or invoice record; include only when combusted on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

###### Liquefied petroleum gas (`lpg_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: tank or invoice record; include only when combusted on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

###### Diesel fuel (`diesel_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: tank or invoice record; include only when combusted in a stationary on-site thermal unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

###### Wood-pellet fuel (`wood_pellet_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Wood pellets
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoice record; include only when combusted on site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

#### Outputs

##### Elementary flows

###### Fossil carbon-dioxide emission (`fossil_co2_emission`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or fuel-specific calculation from collected fossil-fuel consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Biogenic carbon-dioxide emission (`biogenic_co2_emission`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or fuel-specific calculation from collected biomass-fuel consumption; report separately from fossil carbon dioxide
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Nitrogen-oxides emission (`nox_emission`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or approved fuel-and-equipment factor applied to collected fuel use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Sulfur-dioxide emission (`so2_emission`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or sulfur-content calculation for applicable sulfur-containing fuels
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`

###### Combustion particulate emission (`combustion_particulate_emission`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or approved fuel-and-equipment factor applied to collected fuel use
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources: `ec-jrc-fdm-bref-2019`

### Process: Refrigeration (`refrigeration`)

#### Inputs

##### Product flows

###### Refrigeration electricity (`refrigeration_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered process-cooling and cold-storage electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Ammonia refrigerant make-up (`ammonia_refrigerant_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: service-log make-up mass; include only when the system uses ammonia
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

###### R134a refrigerant make-up (`r134a_refrigerant_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: service-log make-up mass; include only when the system uses R134a
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

###### R404A refrigerant make-up (`r404a_refrigerant_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: service-log make-up mass; include only when the system uses R404A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

#### Outputs

##### Elementary flows

###### Ammonia refrigerant leakage (`ammonia_refrigerant_leak`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: measured leak or inventory-balance loss; ammonia systems only
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R134a refrigerant leakage (`r134a_refrigerant_leak`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: measured leak or inventory-balance loss; R134a systems only
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R404A refrigerant leakage (`r404a_refrigerant_leak`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: measured leak or inventory-balance loss; R404A systems only
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

### Process: Sanitation and wastewater management (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered cleaning and rinse water assigned by cleaning cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Sodium-hydroxide cleaner (`sodium_hydroxide_cleaner`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: chemical issue or dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`

###### Nitric-acid cleaner (`nitric_acid_cleaner`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: chemical issue or dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`

###### Peracetic-acid sanitizer (`peracetic_acid_sanitizer`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: chemical issue or dosing record; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`

#### Outputs

##### Waste flows

###### Process wastewater (`process_wastewater`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge by destination with COD, TSS, nitrogen, phosphorus, pH, and temperature retained when measured
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Wastewater-treatment sludge (`wastewater_sludge`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass, dry solids, and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`

### Process: Packaging and factory storage (`packaging_and_storage`)

#### Inputs

##### Product flows

###### Glass bottle (`glass_bottle_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Glass bottle
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and issued quantity; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### PET bottle (`pet_bottle_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Polyethylene terephthalate bottle
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and issued quantity; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### HDPE closure (`hdpe_closure_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: High-density polyethylene closure
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and issued quantity; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Aluminium can (`aluminium_can_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Aluminium can
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and issued quantity; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Steel drum (`steel_drum_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Steel drum
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and issued quantity; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Multilayer pouch (`multilayer_pouch_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: PET-aluminium-PE laminate pouch
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and issued quantity; include only when this exact laminate is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Paperboard carton (`paperboard_carton_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and issued quantity; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polyethylene liner (`pe_liner_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Low-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials and issued quantity; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Wooden pallet (`wooden_pallet_input`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass allocated by documented trips or one-way use; include only when within the declared packaging configuration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

###### Packaging and storage electricity (`packaging_storage_electricity`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered filling, sealing, conveying, warehouse handling, and non-refrigeration storage electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

#### Outputs

##### Product flows

###### Packaged liquid tea extract (`reference_product_liquid_tea_extract`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Packaged liquid tea extract
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net released product; tea and liquid-extract route only
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`

###### Packaged tea concentrate (`reference_product_tea_concentrate`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Packaged tea concentrate
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net released product; tea and liquid-concentrate route only
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`

###### Packaged instant tea powder (`reference_product_instant_tea_powder`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Packaged instant tea powder
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net released product; tea and powder route only
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`; `iso-6079-2021`

###### Packaged tea-based preparation (`reference_product_tea_preparation`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Packaged tea-based preparation
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net released product; tea and formulated-preparation route only
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`

###### Packaged liquid maté extract (`reference_product_liquid_mate_extract`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Packaged liquid maté extract
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net released product; maté and liquid-extract route only
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`

###### Packaged maté concentrate (`reference_product_mate_concentrate`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Packaged maté concentrate
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net released product; maté and liquid-concentrate route only
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`

###### Packaged instant maté powder (`reference_product_instant_mate_powder`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Packaged instant maté powder
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net released product; maté and powder route only
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`

###### Packaged maté-based preparation (`reference_product_mate_preparation`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Packaged maté-based preparation
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net released product; maté and formulated-preparation route only
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`

##### Waste flows

###### Tea packaging product loss (`tea_packaging_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected packaged tea product
- Flow property / unit: Mass / kg
- Amount rule: measured filling, sealing, inspection, storage, and release-rejection mass; applicable only to the tea route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`


###### Maté packaging product loss (`mate_packaging_product_loss`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Rejected packaged maté product
- Flow property / unit: Mass / kg
- Amount rule: measured filling, sealing, inspection, storage, and release-rejection mass; applicable only to the maté route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Waste glass packaging (`waste_glass_packaging`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Waste glass packaging
- Flow property / unit: Mass / kg
- Amount rule: measured damaged and discarded glass packaging mass; include only when glass is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Waste plastic packaging (`waste_plastic_packaging`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Waste polyethylene terephthalate packaging
- Flow property / unit: Mass / kg
- Amount rule: measured damaged and discarded PET packaging mass; add separate atomic rows for other discarded polymers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Waste metal packaging (`waste_metal_packaging`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Waste aluminium packaging
- Flow property / unit: Mass / kg
- Amount rule: measured damaged and discarded aluminium packaging mass; add a separate atomic row for steel when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

###### Waste paperboard packaging (`waste_paperboard_packaging`)

This atomic exchange is included only when the named flow and declared route apply; it shall not be combined with another botanical source, product state, or material.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: measured damaged and discarded carton mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | botanical, product-state, drying, formulation, utility, and packaging routes | Subdivide meters, batches, and process records before allocation so tea and maté, liquid and powder, spray and freeze drying, and different formulations are not averaged by default. | `eu-pef-method-2021` |
| `allocation_internal_recovery` | recovered water, solvent, aroma, and rework | Treat material returned within the same product system as an internal loop; record make-up and losses and do not create an avoided-burden credit for internal recovery. | `eu-pef-method-2021` |
| `allocation_residue_status` | spent leaves, filter cake, sludge, and product losses | Treat outputs as waste unless a documented specification, transfer, purchaser, and destination demonstrate a co-product. Do not assign a credit solely because a possible use exists. | `eu-pef-method-2021` |
| `allocation_unavoidable_multifunctionality` | jointly produced saleable outputs after subdivision | If allocation remains unavoidable, document the physical relationship that drives the shared process and allocate on that basis; if no defensible physical relationship exists, use economic allocation and disclose prices, period, geography, and sensitivity. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `raw_material_receipt` | tea or maté input and screening | weighbridge, lot, and laboratory records | botanical identity; supplier; origin; input state; gross mass; tare; accepted mass; reject mass; moisture | calibrated scale and lot identity review | kg; % w/w | every lot | representative reporting year | all supplying lots to modelled line | sum masses by botanical route; normalize only within the declared route | calibration, supplier document, lot trace |
| `cp_extraction_records` | `aqueous_extraction` | water, solvent, aids, and extraction liquor | batch sheet and meters | batch id; raw material; water; solvent; enzyme; time; temperature; liquor mass; solids | calibrated meters, dosing logs, and laboratory solids test | kg; °C; min; % w/w | every batch | representative reporting year | all modelled extractors | sum by declared extraction route and divide by released product | meter calibration, batch reconciliation |
| `cp_separation_records` | `solid_liquid_separation` | separation media and operation | maintenance and batch records | medium identity; installed mass; replacement date; processed mass; retained solids | stock issue plus equipment log | kg | every replacement and batch | representative reporting year | all modelled separators | allocate replacement mass over measured processed output | purchase and maintenance records |
| `cp_clarification_records` | `clarification_filtration` | aids, media, filtrate, and filter cake | batch, dosing, and maintenance records | aid identity; dose; medium identity; replacement mass; feed; permeate; cake; solids | dosing system, scale, and laboratory test | kg; % w/w | every batch | representative reporting year | all modelled clarification lines | retain one aid or medium per row; reconcile feed, permeate, and residue | dosing calibration, batch reconciliation |
| `cp_concentration_records` | `concentration` | concentrate output | batch and laboratory records | feed mass; feed solids; concentrate mass; concentrate solids; condensate; technology | calibrated tanks or scales and solids test | kg; % w/w | every batch | representative reporting year | all modelled concentrators | aggregate only compatible technology and botanical routes | calibration and solids method |
| `cp_aroma_records` | `aroma_recovery` | recovered aroma | recovery batch record | botanical route; recovered mass; composition or solids; return, sale, or disposal destination | calibrated receiver and batch trace | kg | every applicable batch | representative reporting year | all modelled recovery equipment | sum by botanical route and destination | calibration and destination record |
| `cp_drying_records` | `spray_drying`; `freeze_drying` | dried product output | dryer batch and laboratory records | drying route; feed mass; feed solids; powder mass; moisture; rejects | calibrated scales and moisture test | kg; % w/w | every batch | representative reporting year | all modelled dryers | never aggregate spray and freeze drying; normalize released output | calibration, moisture method, batch reconciliation |
| `cp_formulation_records` | `formulation_blending` | each declared ingredient | approved formula, issue, and batch records | ingredient identity; supplier; lot; issued mass; returned mass; final formulation | weigh scale and electronic batch record | kg | every batch | representative reporting year | all modelled blending lines | one atomic row per ingredient; reconcile issued, returned, output, and loss | approved formula and scale calibration |
| `cp_energy_records` | all foreground processes | electricity, purchased steam, and purchased heat | submeter and invoice records | carrier identity; meter start/end; energy; process; batch or period; supplier | calibrated submeter preferred; reconciled invoice otherwise | kWh; MJ | batch or monthly | representative reporting year | all modelled equipment | keep carriers separate; allocate shared meters by documented causal driver | calibration, invoice reconciliation |
| `cp_fuel_records` | `thermal_utility_generation` | each on-site fuel | meter, tank, and invoice records | fuel identity; quantity; lower heating value; sulfur; biogenic fraction; unit | calibrated meter or stock reconciliation | kg; m3; MJ | delivery and monthly reconciliation | representative reporting year | all foreground combustion units | one atomic row per fuel and unit; convert with documented properties | invoice, meter calibration, fuel certificate |
| `cp_refrigerant_records` | `refrigeration` | refrigerant make-up and leakage | equipment inventory and service logs | equipment id; refrigerant identity; opening charge; additions; recovery; closing charge; confirmed leaks | mass-balance inventory and service weighing | kg | every service and annual balance | representative reporting year | all foreground cooling systems | calculate loss separately for each refrigerant | service certificate and inventory reconciliation |
| `cp_cleaning_records` | `sanitation_wastewater` | cleaning water and each chemical | CIP or manual cleaning logs | cycle id; equipment; water; chemical identity; concentration; dose; return; discharge | flow meter and chemical dosing record | kg; L | every cleaning cycle | representative reporting year | all foreground cleaning systems | one atomic row per chemical; assign by cleaned equipment or batch | meter and dosing calibration |
| `cp_wastewater_records` | `sanitation_wastewater` | wastewater and sludge | discharge meter, sample, and sludge records | stream; flow; COD; TSS; N; P; pH; sludge wet mass; dry solids; destination | calibrated flow meter, accredited laboratory, and scale | kg; m3; mg/L; % w/w | continuous or batch; representative samples | representative reporting year | all foreground discharges and treatment units | retain streams and destinations; calculate pollutant loads from compatible flow and concentration periods | calibration, chain of custody, laboratory report |
| `cp_packaging_records` | `packaging_and_storage` | each packaging component | packaging BOM, stock issue, and line records | component identity; material; mass per item; items issued; returned; damaged; pallet trips | supplier specification plus calibrated count or scale | kg; item | each packaging run | representative reporting year | all modelled packaging lines | one atomic row per material component; calculate reuse per documented trips | BOM approval, supplier spec, scale check |
| `cp_waste_records` | all foreground processes | residues, filter waste, product loss, and packaging waste | scale, skip, rejection, and destination records | waste identity; botanical identity where relevant; wet mass; dry solids; destination; treatment | calibrated scale and waste transfer record | kg; % w/w | every batch or shipment | representative reporting year | all foreground waste points | never combine different waste identities or destinations | scale calibration and transfer receipt |
| `cp_emission_records` | `spray_drying`; `thermal_utility_generation` | direct air emissions | stack tests, continuous monitoring, and factor calculations | source; pollutant; concentration; gas flow; operating time; fuel; factor; abatement | standard measurement or approved factor with activity data | kg; mg/Nm3 | permit or representative frequency | representative reporting year | all foreground emission points | calculate each pollutant separately and reconcile to operating period | laboratory report, monitor QA, factor reference |
| `cp_mass_balance_records` | all production processes | yields, losses, and condensate | batch mass balance | input; output; water; residue; wastewater; loss; solids | reconciled calibrated measurements | kg; % w/w | every batch | representative reporting year | each declared botanical and product route | input mass plus additions equals products plus wastes, wastewater, emissions, and documented inventory change within uncertainty | signed reconciliation and meter QA |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory row | normalized amount = route-compatible reporting-period amount / net released mass of the same declared final product | exchange amount; net released product mass | amount per 1 kg final product |  |
| `calc_dry_solids_balance` | extraction through packaging | dry solids in = dry solids in products + residues + wastewater + losses + documented inventory change; investigate unreconciled difference | measured masses; measured solids or moisture | dry-solids reconciliation | `fao-who-jmpr-boscalid-2019` |
| `calc_refrigerant_loss` | each refrigerant | loss = opening charge + additions - recovered quantity - closing charge, adjusted for documented equipment transfers | equipment inventory and service masses | refrigerant emission by identity |  |
| `calc_pollutant_load` | wastewater or air pollutant | load = compatible measured concentration × measured stream flow × operating duration, with unit conversion | concentration; flow; time | pollutant mass | `ec-jrc-fdm-bref-2019` |
| `calc_shared_meter` | shared equipment or utility meter | allocate only after subdivision is infeasible and use a documented causal driver such as equipment operating time, measured throughput, or delivered heat; disclose the driver | shared meter; route-specific causal driver | route-specific amount | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | raw materials, intermediates, final product, ingredients, aids, media, fuels, refrigerants, and packaging | Retain supplier, grade, botanical identity where relevant, formulation or material specification, lot, and exact flow-name evidence; unresolved UUIDs remain disclosed. | supplier documents, batch trace, Tiangong direct-read record |
| `dq_route` | all processes | Records shall distinguish tea from maté, liquid from powder, spray drying from freeze drying, each formulation, each fuel, and each refrigerant. | process map, batch and meter tags |
| `dq_measurement` | mass, water, energy, solids, emissions, and waste | Use calibrated instruments or documented reconciled invoices; retain units, conversions, detection limits, and missing-data treatment. | calibration and reconciliation records |
| `dq_temporal` | foreground data | Cover a representative continuous 12-month period or justify a shorter campaign period and seasonal representativeness. | production calendar and coverage report |
| `dq_completeness` | foreground inventory | Reconcile all batches and report excluded processes, missing providers, unmonitored direct emissions, and cut-offs; a missing range is not permission to omit a flow. | completeness and mass-balance check; `eu-pef-method-2021` |
| `dq_representativeness` | dataset publication | Report technology, geography, reference period, product specification, and route share; do not publish an averaged default that merges incompatible routes. | metadata and route-separated calculation workbook |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Exactly one botanical source and one delivered product state are declared, the output row matches them, and no approximate Tiangong reference-product UUID is used. | `unsd-cpc-3-0-2025`; `iso-6079-2021` |
| `validate_reference_mass` | reference amount | Net released product equals exactly 1 kg after normalization and packaging mass is separate. |  |
| `validate_route_exclusivity` | process map | Tea and maté, liquid and powder, spray and freeze drying, and different formulations are not simultaneously defaulted; every conditional process has a declared applicability decision. | `iso-6079-2021`; `dao-et-al-2021-tea-spray-drying` |
| `validate_atomic_inventory` | inventory rows | Every selected flow is one material, carrier, ingredient, aid, medium, waste, or elementary emission; combined collections and selector labels fail validation. | `eu-pef-method-2021` |
| `validate_mass_solids_balance` | production batch | Wet-mass and dry-solids balances reconcile within the site's documented measurement uncertainty, or the difference is investigated and disclosed. | `fao-who-jmpr-boscalid-2019` |
| `validate_energy_fuels` | utilities | Electricity, purchased steam, purchased heat, natural gas, and each other fuel are separately recorded; direct combustion emissions are present when fuel is combusted on site. | `ec-jrc-fdm-bref-2019` |
| `validate_formulation` | preparation route | The approved formulation BOM equals the sum of separately inventoried ingredients and processing aids after returns and losses; undeclared carriers, sugars, sweeteners, or additives fail validation. |  |
| `validate_wastewater_waste` | outputs | Tea residue, maté residue, filter residue, product loss, wastewater, sludge, and each packaging-waste material have separate amounts and destinations when applicable. | `ec-jrc-fdm-bref-2019` |
| `validate_refrigerants` | refrigeration | Each refrigerant identity, make-up, recovery, closing charge, and calculated leak are reconciled; a generic refrigerant row fails validation. | `ec-jrc-fdm-bref-2019` |
| `validate_data_quality` | published dataset | Temporal, technological, geographical, completeness, and precision evidence is retained and the data-quality assessment is reported. | `eu-pef-method-2021` |
| `validate_ranges` | quantitative guidance | No empirical range is accepted unless at least two independent original sources have compatible boundary, unit, and basis evidence; otherwise the range is omitted and the manifest evidence gap remains open. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for one declared tea-derived or maté-derived product route. |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` after review, UUID resolution, provider linking, quality assessment, and closure or acceptance of review blockers. |
| allowed_use | Route-matched LCA process or lifecyclemodel construction for the declared botanical source, product state, technology, formulation, geography, and reference period. |
| excluded_use | Generic substitution across tea and maté; substitution across liquid and powder or spray and freeze drying; comparative claims without equivalent functional and quality specifications; zero-burden treatment of unresolved providers. |
| required_metadata | PCR id; botanical source; delivered state; product specification; solids or moisture; extraction solvent; concentration method; aroma route; drying route; formulation; heat treatment; utility and refrigerant systems; packaging; storage; geography; reference period; allocation; provider links; exclusions. |
| required_quality_disclosure | Coverage, measurement methods, calibration, missing-data treatment, mass and solids reconciliation, wastewater and emissions monitoring, allocation, uncertainty, provider gaps, UUID gaps, and unresolved range evidence. |
| update_trigger | Change in botanical source, input state, extraction solvent, concentration or drying technology, formulation, heat treatment, fuel, refrigerant, packaging, storage, provider dataset, regulation, or evidence that materially changes the inventory. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 23914, https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml (retrieved 2026-08-24) | Official category identity and scope. |
| `iso-6079-2021` | standard | ISO 6079:2021, Instant tea in solid form — Specification, https://www.iso.org/standard/80197.html (retrieved 2026-08-24) | Public scope distinguishes pure solid instant tea from filled, aromatic, decaffeinated, and non-tea products; supports mandatory product-state and formulation qualification. |
| `fao-who-jmpr-boscalid-2019` | official_guidance | FAO/WHO Joint Meeting on Pesticide Residues, Pesticide residues in food 2019 — Boscalid evaluation, pp. 82–84, https://www.fao.org/fileadmin/user_upload/IPM_Pesticide/JMPR/Evaluations/2019_Extra/BOSCALID_221.pdf (retrieved 2026-08-24) | Original verified tea-processing trial documenting hot-water extraction, centrifuge and sieve separation, vacuum concentration, conditional silica gel, maltodextrin, citric acid and sucrose addition, drying, and distinct extract/residue matrices; not used for category-wide ranges. |
| `ec-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-24) | Water, energy, raw-material, cleaning-agent, wastewater, waste, refrigerant, and direct-emission inventory and monitoring requirements. |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-24) | Functional unit and reference flow, completeness, company-specific data, data quality, system boundary, multi-functionality, allocation, and validation. |
| `dao-et-al-2021-tea-spray-drying` | literature | Dao, D.T.A. et al. (2021), Optimization of spray-drying process to manufacture green tea powder and its characters, Food Science & Nutrition 9:6566–6574, https://doi.org/10.1002/fsn3.2597 (full text verified 2026-08-24) | Original process evidence for conditional washing/blanching, water/enzyme and ethanol-assisted extraction, sieving, carrier addition, atomization, hot-air drying, powder separation, and route-specific electricity/heat/material collection; not used for category-wide ranges. |
