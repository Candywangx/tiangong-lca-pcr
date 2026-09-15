---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.rice-milk
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Rice milk

## 1. Scope and Applicability

This PCR applies to liquid plant beverages manufactured principally from rice (*Oryza* species), including products made from whole or milled rice, broken rice, rice flour, or rice-derived syrup, when rice is the characterising cereal ingredient. It covers plain, sweetened, flavoured, and fortified variants produced as finished beverages. Product-specific formulation, rice form, total-solids or dry-matter content, heat-treatment route, storage regime, and packaging format shall be declared.

The foreground scope begins with receipt of rice or a declared rice-derived ingredient and other formulation materials at the beverage plant and ends with saleable rice milk in its primary packaging at the plant gate. Agricultural production, manufacture of purchased ingredients, utilities, packaging materials, and off-site waste treatment are represented by linked upstream datasets. Distribution, retail, consumer refrigeration, use, and packaging end-of-life are outside the foreground process but may be added in a downstream life-cycle model.

This PCR excludes animal-milk blends or lactose-containing beverages, infant formula, fermented rice drinks marketed as yoghurt or probiotic beverages, culinary rice gruels, rice syrup sold as an ingredient, and mixed plant beverages in which rice is not the characterising cereal ingredient.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.rice-milk |
| classification_refs | CPC 3.0: 24424 Rice milk |
| covered_products | Finished liquid plant beverages manufactured principally from rice, including whole-rice, broken-rice, rice-flour, and rice-syrup routes; plain, sweetened, flavoured, or fortified variants |
| excluded_products | Animal-milk blends; lactose-containing beverages; infant formula; fermented rice yoghurt or probiotic beverages; rice gruel; ingredient rice syrup; mixed plant beverages not characterised by rice |
| representative_product | Marketable rice milk formulated as a stable liquid beverage |
| production_route | Rice receipt and preparation; milling or slurry preparation; optional gelatinisation and enzymatic starch conversion; filtration or separation; formulation and fortification; homogenisation; thermal treatment; filling, primary packaging, and declared storage conditioning |
| market_state | Finished packaged beverage at the manufacturing plant gate, declared as shelf-stable, ambient, chilled, or frozen as applicable |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a finished rice-derived plant beverage suitable for its declared food or beverage use |
| How much | 1 kg of rice milk |
| How well | Saleable product meeting the producer's declared composition, food-safety, stability, and packaging release specifications |
| How long or cycle | One released production output at the plant gate; declared shelf life is reported as a qualifier and no consumer-use duration is modelled |
| reference_flow_link | The functional unit is realised by 1 kg net mass of conforming rice milk, excluding the mass of primary packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Rice milk `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | rice ingredient form and origin; formulation and fortification; total-solids or dry-matter content; heat-treatment route; shelf-stable or chilled state; primary packaging format and net fill; production geography and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference rice milk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net beverage mass excluding primary packaging; convert volume records with a measured or documented batch-specific density and retain the density, temperature, and source record. |
| `ingredient_mass_basis` | Rice, water, additives, enzymes, and other formulation inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received mass and separately report concentration, moisture, or solids content where it affects formulation or comparability; do not silently convert dry matter to as-received mass. |
| `energy_consistency` | Electricity and thermal-energy records | Energy | kWh for electricity; MJ for fuels, steam, or heat | Preserve metered units and conversion factors; do not mix purchased energy with useful process heat without stating efficiency and calculation method. |
| `packaging_separation` | Primary and secondary packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report each packaging material separately per 1 kg net beverage and do not include packaging mass in the reference product amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Rice or a declared rice-derived ingredient, water, formulation materials, utilities, and packaging are received at the beverage manufacturing site with quantity, supplier, geography, and upstream-dataset references; the rice ingredient form and solids or moisture basis are declared. |
| starting_condition_role | Entry condition for foreground gate-to-gate rice-milk manufacturing |
| product_classification_scope | CPC 3.0 code 24424, limited to rice-characterised non-animal liquid milk substitutes |
| recursive_input_rule | Rice milk used as an ingredient shall be represented as a separately referenced upstream product dataset and shall not recursively invoke this foreground manufacturing system. |
| upstream_dataset_requirement | Link upstream datasets for rice or rice-derived ingredients, other food ingredients, enzymes and processing aids, water supply, electricity, fuels or heat, packaging materials, transport to plant when in scope, and waste or wastewater treatment. |
| disclosure | Declare rice ingredient form and origin, formulation, solids content, processing route, thermal treatment, production geography and period, packaging, storage state, excluded stages, allocation choices, and any missing upstream dataset. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Foreground rice-milk production | Include all on-site material and energy use from receipt of rice ingredients through preparation, conversion, separation, formulation, homogenisation, thermal treatment, filling, and release of packaged product; conditionally include only the steps actually used and document omissions. | `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025` |
| `boundary_upstream_links` | Purchased inputs and off-site services | Represent the production and delivery of purchased materials, energy, packaging, and treatment services with linked upstream datasets rather than recreating them inside the foreground process. | `eu-pef-2021` |
| `boundary_downstream_disclosure` | Distribution, retail, use, and end-of-life | Keep downstream stages outside this foreground dataset, disclose the exclusion, and add them explicitly when the dataset is used in a cradle-to-grave life-cycle model. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `rice_preparation` | Rice ingredient receiving and preparation | required | Always; operations not used for pre-cleaned flour or syrup are recorded as not applicable | Foreground raw-material preparation | kg prepared rice ingredient transferred forward |
| `slurry_conversion` | Slurry preparation and starch conversion | required | Always; gelatinisation and enzyme use are conditional on the declared rice ingredient and recipe | Foreground extraction and conversion | kg converted rice slurry |
| `separation_formulation` | Separation, blending, and fortification | required | Always; physical separation is recorded as not applicable for routes without insoluble-residue removal | Foreground formulation | kg formulated beverage base |
| `stabilisation_treatment` | Homogenisation and thermal treatment | required | Always; record the actual homogenisation and pasteurisation, sterilisation, or UHT route | Foreground product stabilisation and food-safety treatment | kg treated rice milk |
| `filling_storage` | Filling, packaging, cooling, and plant storage | required | Always; cooling and refrigerated storage apply only to chilled products | Foreground finishing | kg saleable rice milk at plant gate |

### Process: Rice ingredient receiving and preparation (`rice_preparation`)

#### Inputs

##### Product flows

###### Rice ingredient (`rice_input`)

Record the actual rice, broken rice, rice flour, or rice syrup entering production, including supplier, origin, as-received mass, and solids or moisture basis.

- Selected flow: Rice or declared rice-derived ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass consumed by released production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_preparation_batch`
- Sources: `sahni-cereal-beverages-2023`
- Range: Provisional rice-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 0.30
  - Unit: kg/kg rice milk
  - Basis: broad initial estimate per 1 kg saleable rice milk; replace with formulation and batch records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared rice ingredient (`prepared_rice`)

Transfer the measured prepared rice, flour, syrup, or milled material to slurry preparation and retain any moisture or solids adjustment.

- Selected flow: Prepared rice ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated dry-matter-equivalent transfer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared rice ingredient transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rice_preparation_batch`
- Sources: `sahni-cereal-beverages-2023`

##### Waste flows

###### Rejected rice and cleaning residues (`rice_preparation_rejects`)

Record rejected grain, foreign material, dust, and other cleaning residues leaving the process, with destination and treatment route.

- Selected flow: Rice preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rice_preparation_batch`
- Range: Provisional reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg rice milk
  - Basis: broad initial reject fraction per 1 kg saleable rice milk; replace with site records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Slurry preparation and starch conversion (`slurry_conversion`)

#### Inputs

##### Product flows

###### Prepared rice ingredient (`conversion_rice_input`)

Record the prepared rice ingredient transferred from the preceding process.

- Selected flow: Prepared rice ingredient
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg converted slurry output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slurry_conversion_batch`
- Sources: `sahni-cereal-beverages-2023`

###### Process and formulation water (`conversion_water`)

Record water added for slurry formation, washing within this process, dilution, and enzyme reactions; keep cleaning-in-place water in its own utility record when separately metered.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-recipe water consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slurry_conversion_batch`
- Sources: `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`
- Range: Provisional water-input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.70
  - Upper: 1.50
  - Unit: kg/kg rice milk
  - Basis: broad initial formulation and process-water estimate per 1 kg saleable rice milk; replace with recipe and meter records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Processing enzymes (`conversion_enzymes`)

Record alpha-amylase, glucoamylase, or other enzymes when used, including commercial preparation mass, activity, and carrier concentration.

- Selected flow: Food-processing enzyme preparation
- Flow property / unit: Mass / kg
- Amount rule: measured commercial enzyme preparation consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg converted slurry output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slurry_conversion_batch`
- Sources: `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`

###### Conversion electricity (`conversion_electricity`)

Record electricity used for milling, pumping, agitation, and conversion equipment, allocated from submetered or documented equipment records.

- Selected flow: Electricity, supplied to rice-milk conversion
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated equipment load multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slurry_conversion_batch`
- Range: Provisional electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1.00
  - Unit: kWh/kg rice milk
  - Basis: broad initial conversion-electricity estimate per 1 kg saleable rice milk; replace with metered data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conversion heat (`conversion_heat`)

Record fuel, steam, or purchased heat used for roasting when applied, gelatinisation, liquefaction, and saccharification temperature control.

- Selected flow: Process heat supplied to rice-milk conversion
- Flow property / unit: Energy / MJ
- Amount rule: metered heat or fuel use converted with documented net calorific value and efficiency
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slurry_conversion_batch`
- Sources: `tu-rice-milk-processing-2025`
- Range: Provisional process-heat screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.10
  - Upper: 5.00
  - Unit: MJ/kg rice milk
  - Basis: broad initial thermal-energy estimate per 1 kg saleable rice milk; replace with metered fuel, steam, or heat records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Converted rice slurry (`converted_slurry`)

Record the mass and solids content of converted slurry transferred to separation and formulation.

- Selected flow: Converted rice slurry
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass with solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg converted slurry output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slurry_conversion_batch`
- Sources: `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`

##### Waste flows

###### Conversion losses and cleaning wastewater (`conversion_wastewater`)

Record drained slurry, off-spec material, and wastewater from this process separately where meters or batch records permit; report treatment destination.

- Selected flow: Rice-processing wastewater and conversion losses
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass or volume converted using measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slurry_conversion_batch`
- Range: Provisional wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.00
  - Unit: kg/kg rice milk
  - Basis: broad initial process wastewater estimate per 1 kg saleable rice milk; replace with discharge records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Separation, blending, and fortification (`separation_formulation`)

#### Inputs

##### Product flows

###### Converted rice slurry (`formulation_slurry_input`)

Record converted slurry received from starch conversion.

- Selected flow: Converted rice slurry
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated beverage base
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`

###### Formulation and fortification ingredients (`formulation_ingredients`)

Record vegetable oil, sweeteners, salt, flavours, stabilisers, emulsifiers, vitamins, minerals, and other recipe ingredients separately with commercial concentration and supplier data.

- Selected flow: Declared formulation ingredients
- Flow property / unit: Mass / kg
- Amount rule: measured quantity of each commercial ingredient added
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources: `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`

#### Outputs

##### Product flows

###### Formulated rice beverage base (`formulated_base`)

Record the mass, solids content, and formulation identifier of the beverage base sent to stabilisation and thermal treatment.

- Selected flow: Formulated rice beverage base
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg formulated beverage base
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`

##### Waste flows

###### Insoluble rice residue and filtration losses (`separation_residue`)

Record retained solids, filter losses, and their destination; distinguish marketable co-product from waste sent to treatment.

- Selected flow: Insoluble rice residue
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass with dry-matter content and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources: `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025`
- Range: Provisional residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg wet residue/kg rice milk
  - Basis: broad initial wet-residue estimate per 1 kg saleable rice milk; replace with measured residue mass and dry matter
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Homogenisation and thermal treatment (`stabilisation_treatment`)

#### Inputs

##### Product flows

###### Formulated rice beverage base (`treatment_base_input`)

Record the formulated base entering homogenisation and heat treatment.

- Selected flow: Formulated rice beverage base
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated rice milk
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_batch`

###### Treatment electricity (`treatment_electricity`)

Record electricity for homogenisation, pumps, control systems, and thermal-treatment equipment.

- Selected flow: Electricity, supplied to product treatment
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated equipment load multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_batch`
- Sources: `tu-rice-milk-processing-2025`
- Range: Provisional treatment-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.50
  - Unit: kWh/kg rice milk
  - Basis: broad initial treatment-electricity estimate per 1 kg saleable rice milk; replace with metered data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Treatment heat (`treatment_heat`)

Record steam, fuel, or purchased heat for pasteurisation, sterilisation, or UHT processing and retain time-temperature records.

- Selected flow: Process heat supplied to thermal treatment
- Flow property / unit: Energy / MJ
- Amount rule: metered heat or fuel use converted with documented net calorific value and efficiency
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_batch`
- Sources: `tu-rice-milk-processing-2025`
- Range: Provisional treatment-heat screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.10
  - Upper: 3.00
  - Unit: MJ/kg rice milk
  - Basis: broad initial thermal-treatment energy estimate per 1 kg saleable rice milk; replace with metered data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Treated rice milk (`treated_rice_milk`)

Record treated product mass and actual homogenisation and heat-treatment parameters released to filling.

- Selected flow: Rice milk `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conforming product transferred to filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated rice milk output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_batch`
- Sources: `tu-rice-milk-processing-2025`

##### Waste flows

###### Off-spec treated product and cleaning wastewater (`treatment_losses`)

Record off-spec product, start-up or shutdown losses, and cleaning wastewater with destination.

- Selected flow: Treatment losses and wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled loss mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_batch`
- Range: Provisional treatment-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg rice milk
  - Basis: broad initial combined loss estimate per 1 kg saleable rice milk; replace with site records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Filling, packaging, cooling, and plant storage (`filling_storage`)

#### Inputs

##### Product flows

###### Treated rice milk (`filling_product_input`)

Record treated rice milk entering the filling line.

- Selected flow: Rice milk `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg saleable rice milk output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_storage_batch`

###### Primary and secondary packaging (`packaging_inputs`)

Record each packaging material and component separately, including container, closure, label, sleeve, carton, and pallet share when within the declared boundary.

- Selected flow: Declared beverage packaging materials
- Flow property / unit: Mass / kg
- Amount rule: issued packaging less documented returns and unused stock, reconciled to conforming filled units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_storage_batch`
- Sources: `eu-pef-2021`
- Range: Provisional packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.20
  - Unit: kg packaging/kg net rice milk
  - Basis: broad initial packaging estimate per 1 kg net saleable rice milk; replace with bill-of-material and fill-count records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filling and storage electricity (`filling_storage_electricity`)

Record electricity for filling, sealing, conveyors, cooling, and on-site product storage during the declared residence time.

- Selected flow: Electricity, supplied to filling and storage
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity allocated to released production using operating time or mass throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_storage_batch`
- Range: Provisional filling-and-storage electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.50
  - Unit: kWh/kg rice milk
  - Basis: broad initial electricity estimate including declared on-site storage; replace with metered data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Saleable packaged rice milk (`reference_product_output`)

This is the reference product output. Record net beverage mass separately from packaging mass and retain released fill-count and quality records.

- Selected flow: Rice milk `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net mass of released rice milk
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_filling_storage_batch`

##### Waste flows

###### Packaging scrap and off-spec filled product (`filling_waste`)

Record damaged packaging, line scrap, rejected filled units, and returned product separately by material and destination.

- Selected flow: Packaging and filled-product waste
- Flow property / unit: Mass / kg
- Amount rule: measured scrap and rejected-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable rice milk
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_storage_batch`
- Range: Provisional filling-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg rice milk
  - Basis: broad initial combined filling-loss estimate per 1 kg saleable rice milk; replace with site records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Processes producing rice milk and another valuable output | Avoid allocation by separately metering or subdividing independently operated preparation, separation, utility, and packaging activities whenever technically feasible. | `eu-pef-2021` |
| `allocation_physical_then_economic` | Marketable rice solids, syrup, or other co-products | Where subdivision is not feasible, use a documented physical causal relationship when it represents how inputs and energy generate the co-products; otherwise use economic allocation based on representative prices and disclose quantities, prices, period, and sensitivity. | `eu-pef-2021` |
| `allocation_waste_and_recycling` | Residues, wastewater, packaging scrap, and recovered materials | Classify each output as co-product, recyclable material, or waste before assigning burdens. Include foreground collection and treatment burdens; apply avoided-burden or recycling credits only when the downstream model declares the method and prevents double counting. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rice_preparation_batch` | `rice_preparation` | rice input, prepared transfer, and rejects | receiving tickets; lot records; scales; moisture or solids tests | lot_id; rice_form; supplier; origin; input_kg; moisture_or_solids_percent; prepared_output_kg; reject_kg; reject_destination | Calibrated mass measurement reconciled by production lot | kg; percent | Each received and processed lot | Declared representative production period | All rice preparation serving the reported product | Sum mass by lot and normalize to conforming reference product; preserve dry-matter adjustments separately | Scale calibration; supplier specification; lot traceability; moisture or solids test |
| `cp_slurry_conversion_batch` | `slurry_conversion` | water, enzymes, energy, converted slurry, and losses | recipe; water meter; ingredient issue; electricity meter; fuel or steam meter; batch transfer and discharge records | batch_id; water_kg; enzyme_product_kg; enzyme_activity; electricity_kWh; heat_MJ; slurry_output_kg; slurry_solids_percent; loss_kg | Batch recipe and calibrated meters; equipment-load calculation only when submetering is unavailable | kg; kWh; MJ; percent | Each batch with utility totals reconciled at least monthly | Declared representative production period | All conversion equipment and shared utilities serving the reported product | Sum product-specific records; allocate shared utilities by documented operating time or mass throughput; normalize to conforming reference product | Meter calibration; recipe approval; equipment runtime; conversion factor record |
| `cp_formulation_batch` | `separation_formulation` | formulation ingredients, beverage base, and residues | formulation sheet; ingredient issue; transfer scale; filter or residue records | batch_id; ingredient_id; ingredient_kg; concentration; base_output_kg; solids_percent; residue_wet_kg; residue_dry_matter_percent; destination | Batch-level mass records and laboratory solids measurements | kg; percent | Each batch | Declared representative production period | All separation and blending lines serving the reported product | Sum by formulation and normalize to conforming reference product; retain each ingredient separately | Approved formulation; scale calibration; laboratory method; residue destination ticket |
| `cp_treatment_batch` | `stabilisation_treatment` | treatment energy, product transfer, and losses | homogeniser log; time-temperature record; meters; batch release; cleaning and loss record | batch_id; input_kg; output_kg; electricity_kWh; heat_MJ; homogenisation_parameter; treatment_temperature; holding_time; loss_kg | Automated production logs and calibrated meters reconciled to batch mass | kg; kWh; MJ; process parameter | Each batch; utilities reconciled at least monthly | Declared representative production period | All homogenisation and thermal-treatment equipment serving the reported product | Sum released batches and normalize energy and losses to conforming reference product | Calibrated sensors and meters; validated heat-treatment program; batch release record |
| `cp_filling_storage_batch` | `filling_storage` | packaged output, packaging, electricity, and filling waste | packaging bill of materials; issue and return records; fill counts; checkweigher; electricity meter; storage log; scrap record | sku; packaging_material; issued_kg; returned_kg; good_units; net_fill_kg; product_output_kg; electricity_kWh; storage_duration; scrap_kg | Inventory reconciliation, calibrated checkweigher, and metered energy | kg; kWh; hour or day | Each production run; energy and inventory reconciled at least monthly | Declared representative production period | Filling, cooling, and on-site storage serving the reported product | Calculate net beverage separately from packaging; normalize material and energy totals to released beverage mass | Packaging specification; mass-balance reconciliation; checkweigher calibration; release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalisation` | All mass inventory rows | normalized amount = eligible foreground mass / net mass of released conforming rice milk | input, output, residue, or waste mass; released rice-milk mass | kg per kg rice milk |  |
| `calc_energy_normalisation` | Electricity and thermal energy | normalized energy = product-attributed energy / net mass of released conforming rice milk; document any shared-utility allocation | metered energy; allocation driver; released rice-milk mass | kWh or MJ per kg rice milk | `eu-pef-2021` |
| `calc_volume_to_mass` | Volume-based beverage and water records | mass = measured volume multiplied by density measured or documented for the relevant material, temperature, and batch | volume; density; measurement temperature | kg |  |
| `calc_packaging_intensity` | Packaging inputs | packaging intensity = (issued packaging - documented returns - unused closing stock attributable to the run) / net released beverage mass | packaging inventory; fill counts; net fill; released beverage mass | kg packaging per kg rice milk |  |
| `calc_mass_balance` | Each process and linked production batch | mass-balance difference = total mass inputs - total product, co-product, waste, measured loss, and stock-change outputs; report both kg and percent of total input and investigate material unexplained differences | all mass inputs and outputs; opening and closing stock | mass-balance difference in kg and percent |  |
| `calc_coproduct_allocation` | Shared burdens requiring allocation | Apply the selected physical or economic allocation factor consistently to shared inputs and emissions; retain the unallocated inventory and factor derivation | unallocated inventory; co-product quantities; physical relation or representative prices | allocated inventory per kg rice milk | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Use the specified Rice milk product-flow UUID and Mass property; declare all required qualifiers and confirm the product is rice-characterised and non-animal. | Tiangong identity readback; product specification; approved formulation |
| `dq_measurement` | Material and energy records | Use calibrated or verified measurement systems; retain original units, conversion factors, meter boundaries, and uncertainty or estimation method. | Calibration certificates; meter maps; calculation records; `eu-pef-2021` |
| `dq_temporal` | Foreground dataset | Cover the declared representative production period and include relevant seasonal, recipe, start-up, and operating modes, or disclose and justify exclusions. | Dated batch and utility records; production schedule; `eu-pef-2021` |
| `dq_completeness` | Process inventory | Account for every required process and every listed material, energy, product, residue, wastewater, and packaging role, or mark it not applicable with justification. | Completeness matrix; mass and energy reconciliation; waste records |
| `dq_geography_technology` | Foreground and upstream datasets | Match the actual plant geography, grid, fuel, rice source, treatment technology, packaging, and waste destinations; disclose proxy datasets and their limitations. | Site metadata; supplier records; dataset metadata; `eu-pef-2021` |
| `dq_product_quality` | Saleable rice milk | Link inventory totals only to batches released against the declared composition, solids, food-safety, stability, heat-treatment, fill, and storage specifications. | Approved specification; laboratory and release records; time-temperature log; `tu-rice-milk-processing-2025` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference product and functional unit | Verify that 1 kg net rice milk uses product flow `9f4c117d-e8ff-488f-89f6-c2ab7ca763e1`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; reject packaging-inclusive reference mass. |  |
| `validate_product_scope` | Product identity | Confirm rice is the characterising cereal ingredient, the beverage is non-animal and lactose-free, and every required qualifier is present; reject excluded product types. | `unsd-cpc-3-2025` |
| `validate_process_coverage` | Foreground boundary | Confirm each required process has records or an explicit not-applicable statement for route-specific operations, and confirm upstream and downstream boundary treatment is disclosed. | `eu-pef-2021`; `sahni-cereal-beverages-2023`; `tu-rice-milk-processing-2025` |
| `validate_inventory_provenance` | Inventory rows | Confirm every foreground or calculated amount links to its stated collection protocol and source record; flag unlabelled defaults and any reasoned estimate used as final foreground data. |  |
| `validate_mass_balance` | Each process and production period | Require reported mass-balance difference in kg and percent, investigate unexplained differences judged material to the dataset, and retain corrective-action or acceptance evidence. |  |
| `validate_allocation` | Co-products, residues, and recycled materials | Confirm classification of each output, documented allocation hierarchy and factor, sensitivity where economic allocation is used, and no double-counted recycling or avoided-burden credit. | `eu-pef-2021` |
| `validate_data_quality` | Dataset release | Confirm calibration, temporal coverage, technology and geography match, completeness, product release, and proxy disclosures meet the declared data-quality requirements. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for finished rice milk at the manufacturing plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product and process modelling where rice-milk formulation, production route, geography, time period, packaging, and storage state match the declared dataset or are adjusted transparently |
| excluded_use | Direct product comparisons or public comparative claims without equivalent functional performance, system boundary, allocation, data quality, geography, time period, and packaging; modelling excluded product types; use of provisional reasoned estimates as verified site data |
| required_metadata | PCR id and version when published; product-flow UUID; formulation and fortification; rice ingredient form and origin; solids content; production route; heat treatment; site geography; reference period; packaging; storage state; allocation; upstream datasets; collection protocols |
| required_quality_disclosure | Data coverage and gaps; metering and calculation methods; mass-balance result; allocation factors; proxy datasets; reasoned estimates; excluded stages; product release evidence; uncertainty and limitations |
| update_trigger | Material change in rice source or form, formulation, solids content, conversion or heat-treatment technology, plant or energy supply, packaging, storage regime, co-product route, allocation basis, waste treatment, or representative production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | CPC 24424 classification identity and rice-milk product scope |
| `eu-pef-2021` | Official guidance (`official_guidance`) | European Commission, *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations*, 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Life-cycle boundary linkage, purchased-input and packaging modelling, allocation hierarchy, data quality, and downstream disclosure |
| `sahni-cereal-beverages-2023` | Literature (`literature`) | Sahni et al., *A comprehensive review on functional beverages from cereal grains—characterization of nutraceutical potential, processing technologies and product types*, 2023, https://pmc.ncbi.nlm.nih.gov/articles/PMC10275771/ (retrieved 2026-08-11) | Commercial rice-milk process decomposition: milling, water addition, starch hydrolysis, filtering, fortification, and homogenisation |
| `tu-rice-milk-processing-2025` | Literature (`literature`) | Tu et al., *Influence of homogenization and pasteurization on the physical characteristics, antioxidant properties, and microbial content of VD20 rice milk*, Scientific Reports 15, 9683 (2025), DOI: 10.1038/s41598-025-88436-z | Rice-milk batch process stages, mass-transfer points, homogenisation, thermal-treatment records, and product-quality evidence |
