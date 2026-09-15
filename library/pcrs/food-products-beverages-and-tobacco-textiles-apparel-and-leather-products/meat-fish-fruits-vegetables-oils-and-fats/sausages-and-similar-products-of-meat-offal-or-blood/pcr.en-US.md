---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sausages-and-similar-products-of-meat-offal-or-blood
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sausages and similar products of meat, offal or blood

## 1. Scope and Applicability

This candidate PCR covers CPC 21184 products made as one concrete sausage or sausage-like form from meat, one explicitly named edible organ, or blood. Covered forms include fresh sausage, cooked sausage, cured sausage, fermented sausage, dried sausage, smoked sausage, liver or another named-organ sausage, blood sausage or blood pudding, and galantine, meat paste, pâté, or rillettes only when supplied in a casing or sausage form. The exact foreground package shall lock one product form, the animal species and anatomical or blood identity of every animal-derived component, one approved formulation, the ordered treatment sequence, the casing or exact shape-forming method, the final market state, and the storage condition. `un-cpc-3-2025`, `codex-cxs-192-1995`

Complete meals are excluded. Meat, offal, blood, galantine, meat paste, pâté, and rillettes products supplied outside a casing or sausage form are excluded. Animal husbandry, slaughter, ingredient manufacture, casing manufacture, packaging manufacture, and purchased-energy production are upstream background requirements. Distribution after the facility gate, retail, consumer preparation, use, and end-of-life are outside the foreground boundary. No listed species, recipe, treatment, packaging, waste, pollutant, or emission is a category default: an actual in-scope exchange absent from the cards requires a new exact atomic row before validation. `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxc-58-2005`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sausages-and-similar-products-of-meat-offal-or-blood` |
| classification_refs | CPC 3.0: 21184 — Sausages and similar products of meat, offal or blood (`exact`) |
| covered_products | One concrete sausage or sausage-like product made from meat, a named edible organ, or blood; includes fresh, cured, fermented, dried, smoked, cooked, chilled, frozen, or shelf-stable routes and galantine, meat paste, pâté, or rillettes only in a casing or sausage form. |
| excluded_products | Complete meals; related meat, offal, blood, galantine, meat paste, pâté, or rillettes products outside a casing or sausage form; any package that averages species, organs, blood sources, recipes, treatment routes, or market states. |
| representative_product | One product-specific 1 kg net conforming sausage or sausage-like product matching a single final-product card. |
| production_route | Exact batch sequence beginning with ingredient receipt and comprising only the named applicable operations among comminution, mixing, forming, curing, fermentation, drying, smoking, heat treatment, cooling, packaging, storage, hygiene, onsite heat generation, and onsite wastewater treatment. |
| market_state | Exactly one documented release state, such as fresh chilled, frozen, cooked chilled, fermented dried shelf-stable, or another explicit in-scope state; never a combined state. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one concrete, specification-conforming CPC 21184 sausage or sausage-like food product at the manufacturing facility gate. |
| How much | 1 kg net conforming edible product, excluding every packaging material. |
| How well | Meets the locked product specification, formulation revision, process-control release criteria, and final temperature or shelf-stability condition. |
| How long or cycle | One released production batch; storage duration through facility-gate release is disclosed. |
| reference_flow_link | The reference amount is assigned to exactly one concrete final-product output row in `packaging_cold_storage_release`; every other final-product row is not applicable. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sausages and similar products of meat, offal or blood `d4e41d5c-a905-4fb7-ad9d-8f442be1f833` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact product form; animal species and skeletal meat or named organ or blood identity for every animal-derived recipe component; exact mass-based formulation and revision; ordered treatment sequence; casing species or casing polymer or exact sausage-shape forming method; treatment time, temperature, humidity, airflow, and smoke application where applicable; release state and storage temperature; exact packaging composition; net conforming mass; co-product, reject, waste, wastewater, and emission routing |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. The broad Tiangong reference flow supplies category identity only; it does not permit a multi-form, multi-species, multi-recipe, or multi-state average. `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net conforming edible product at facility gate; exclude every packaging material from reference mass. | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `single_product_lock` | all foreground rows | Product identity | one exact route | Lock one concrete product form, animal and tissue or blood formulation, exact recipe, ordered treatment sequence, and final market state before collecting amounts. | `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995` |
| `recipe_mass_basis` | recipe components | Mass | kg | Record actual mass as supplied for every concrete component; retain grade, purity, moisture basis, and batch lot without substituting a recipe default. | `eu-pef-2021-2279`, `codex-cxs-192-1995` |
| `water_ice_separation` | formulation water and ice | Mass | kg | Record potable liquid water and potable ice as separate exchanges and prevent duplicate counting when ice melts. | `eu-pef-2021-2279` |
| `energy_carrier_separation` | electricity and heat carriers | Energy or mass | kWh; MJ; kg | Preserve electricity, purchased steam, purchased hot water, onsite-generated steam, onsite-generated hot water, natural gas, diesel, and LPG as separate carriers. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `refrigerant_identity` | refrigeration systems | Mass | kg | Reconcile R717, R744, and R290 separately by equipment; do not report a generic refrigerant amount. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `packaging_exclusion` | packaging | Mass | kg | Exclude packaging from the 1 kg reference amount while recording each packaging material as its own inventory exchange. | `eu-pef-2021-2279` |
| `waste_state_consistency` | product and waste mass | Mass | kg | Measure products, rejects, residues, and material-specific packaging scrap over the same campaign and on a disclosed wet or dry basis. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `wastewater_load` | wastewater pollutants | Mass and volume | kg; m3 | Calculate each pollutant load only from a pollutant-specific concentration and the matching measured wastewater volume. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `normalization` | all amount rows | Reference mass | kg/kg | Normalize batch-attributable records to 1 kg net conforming output only after route-specific mass reconciliation. | `eu-pef-2021-2279` |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Food-grade meat, each named edible organ, each named blood source, animal fat, casing, recipe component, packaging material, and purchased utility physically received at the sausage-manufacturing facility. |
| starting_condition_role | Foreground facility-gate inputs with upstream production represented by separate supplier or background datasets. |
| product_classification_scope | CPC 21184 only, constrained to one concrete sausage or sausage-like product route; complete meals and related products outside a casing or sausage form are excluded. |
| recursive_input_rule | An externally purchased CPC 21184 intermediate is recorded as one exact product input with its own species, anatomical material, recipe, treatment state, and supplier dataset; do not recursively reproduce its upstream manufacture inside the receiving row. |
| upstream_dataset_requirement | Require upstream datasets for animal production and slaughter, every food ingredient and additive, casing, packaging material, purchased electricity and heat, each fuel, refrigerant manufacture, cleaning chemical, and wastewater-treatment chemical. |
| disclosure | Disclose exact product identity, recipe revision, batch boundary, process sequence, applicable conditional operations, shared-resource attribution, internal rework, final state, excluded stages, and every unresolved flow UUID. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | foreground system | Begin at receipt of food-grade meat, named organ, blood, fat, casing, recipe component, packaging material, and purchased utility at the manufacturing facility. | `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxc-58-2005` |
| `upstream_requirement` | animal and recipe inputs | Animal production, slaughter, ingredient manufacture, casing manufacture, packaging manufacture, and purchased energy production require separate upstream datasets. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `route_lock` | foreground package | One package shall represent exactly one product form, one exact animal-derived formulation, one approved recipe revision, one ordered treatment sequence, and one final market state. | `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995` |
| `scope_inclusions` | product identity | Include sausages, liver or other named-organ sausages, blood sausages or puddings, and galantine, meat paste, pâté, or rillettes only when supplied in a casing or sausage form. | `un-cpc-3-2025`, `codex-cxs-192-1995` |
| `scope_exclusions` | product identity | Exclude complete prepared meals and related meat, offal, blood, galantine, meat paste, pâté, or rillettes products supplied outside a casing or sausage form. | `un-cpc-3-2025` |
| `route_processes` | treatment sequence | Include curing, fermentation, drying, smoking, thermal processing, freezing, or cold storage only when the locked route contains that named operation. | `codex-cxs-192-1995`, `codex-cxc-58-2005` |
| `cleaning_boundary` | hygiene | Include campaign-attributable product-contact and area cleaning, each cleaning chemical, resulting wastewater, and residue removal. | `jrc-sa-bref-2024`, `codex-cxc-58-2005` |
| `wastewater_boundary` | wastewater treatment | Include onsite treatment only when physically inside the foreground boundary; otherwise record each wastewater stream crossing the facility boundary. | `jrc-sa-bref-2024`, `eu-pef-2021-2279` |
| `heat_boundary` | heat supply | Use purchased heat cards when heat crosses the facility boundary and onsite heat-generation cards when fuel and feedwater cross the boundary; never count both for the same heat quantity. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `rework_boundary` | rework | Keep internal rework inside the batch mass balance and record it once; rework imported from another campaign is a separately named product input. | `eu-pef-2021-2279` |
| `downstream_exclusion` | downstream stages | Distribution beyond the facility gate, retail, consumer preparation, use, and packaging or food end-of-life are outside the foreground boundary. | `eu-pef-2021-2279` |
| `unlisted_atomic_row` | unlisted valid variant | When an in-scope species, named organ, blood source, recipe component, casing, product form, package material, waste, pollutant, or emission is absent from the cards, add one new exact atomic row before dataset validation. | `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formulation_material_receiving` | Formulation material receiving and cold storage | `required` | Always include for food-grade animal materials and other formulation inputs entering the facility. | Foreground receipt, lot identity, weighing, and cold-storage activity. | mass of each incoming material for the locked production batch |
| `comminution_batching_mixing` | Comminution, batching and mixing | `required` | Always include; record the exact recipe and equipment sequence used by the locked product. | Foreground size reduction, recipe dosing, and mixture preparation. | mass of one product-specific mixture batch |
| `portion_forming` | Portion forming | `required` | Always include the exact casing-filling or sausage-shape forming operation used. | Foreground filling, linking, clipping, moulding, or equivalent product-specific forming. | mass of one concrete formed product before treatment |
| `curing` | Curing | `conditional` | Include only when the locked treatment sequence contains a curing step. | Foreground salt or curing-agent contact under recorded time and temperature conditions. | mass of the one concrete cured intermediate |
| `fermentation` | Fermentation | `conditional` | Include only when the locked treatment sequence contains controlled fermentation. | Foreground starter addition and controlled fermentation. | mass of the one concrete fermented intermediate |
| `drying` | Drying | `conditional` | Include only when the locked treatment sequence contains hot-air, vacuum, or another explicitly named drying technology. | Foreground moisture removal under recorded time, temperature, humidity, and airflow. | mass of the one concrete dried intermediate |
| `smoking` | Smoking | `conditional` | Include only when the locked treatment sequence contains direct smoke or smoke-condensate treatment. | Foreground smoke generation or condensate application for one named product. | mass of the one concrete smoked intermediate |
| `thermal_processing` | Thermal processing and controlled cooling | `conditional` | Include only when the locked treatment sequence contains cooking, pasteurisation, sterilisation, or another named heat treatment. | Foreground heat treatment with documented process parameters and subsequent controlled cooling. | mass of the one concrete heat-treated intermediate |
| `packaging_cold_storage_release` | Packaging, cold storage and release | `required` | Always include the actual packaging system, final storage state, and one concrete saleable product output. | Foreground primary and secondary packaging, final temperature control, inspection, and gate release. | 1 kg net conforming saleable product, excluding packaging |
| `hygiene_cleaning_sanitation` | Hygiene cleaning and sanitation | `required` | Always include product-contact and area cleaning attributable to the locked production campaign. | Foreground cleaning, rinsing, sanitation, and residue removal. | cleaning campaign attributable to the locked product batch |
| `onsite_heat_generation` | Onsite heat generation | `conditional` | Include only when steam or hot water is generated within the foreground facility. | Foreground boiler or heater operation for internally supplied steam or hot water. | measured onsite steam or hot-water output attributable to the locked batch |
| `onsite_wastewater_treatment` | Onsite wastewater treatment | `conditional` | Include only when wastewater is treated inside the foreground facility boundary. | Foreground physical, chemical, and biological treatment of the two named wastewater streams. | measured wastewater volume treated for the locked production campaign |

### Process: Formulation material receiving and cold storage (`formulation_material_receiving`)

Foreground receipt, lot identity, weighing, and cold-storage activity. Always include for food-grade animal materials and other formulation inputs entering the facility.

#### Inputs

##### Product flows

###### Receive Pork skeletal meat (`receive_pork_skeletal_meat`)

Pork skeletal meat is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork skeletal meat physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Beef skeletal meat (`receive_beef_skeletal_meat`)

Beef skeletal meat is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef skeletal meat physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Chicken skeletal meat (`receive_chicken_skeletal_meat`)

Chicken skeletal meat is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken skeletal meat physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Turkey skeletal meat (`receive_turkey_skeletal_meat`)

Turkey skeletal meat is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Turkey skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Turkey skeletal meat physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Sheep skeletal meat (`receive_sheep_skeletal_meat`)

Sheep skeletal meat is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sheep skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sheep skeletal meat physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Goat skeletal meat (`receive_goat_skeletal_meat`)

Goat skeletal meat is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Goat skeletal meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Goat skeletal meat physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Pig liver (`receive_pig_liver`)

Pig liver is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig liver
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig liver physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Cattle liver (`receive_cattle_liver`)

Cattle liver is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle liver
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle liver physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Chicken liver (`receive_chicken_liver`)

Chicken liver is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken liver
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken liver physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Pig heart (`receive_pig_heart`)

Pig heart is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig heart
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig heart physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Cattle heart (`receive_cattle_heart`)

Cattle heart is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle heart
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle heart physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Pig kidney (`receive_pig_kidney`)

Pig kidney is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig kidney physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Cattle kidney (`receive_cattle_kidney`)

Cattle kidney is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle kidney
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle kidney physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Pig blood (`receive_pig_blood`)

Pig blood is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig blood physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Cattle blood (`receive_cattle_blood`)

Cattle blood is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle blood
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle blood physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Pork backfat (`receive_pork_backfat`)

Pork backfat is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork backfat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork backfat physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Receive Cattle adipose fat (`receive_cattle_adipose_fat`)

Cattle adipose fat is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle adipose fat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_material_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle adipose fat physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Meter chilled-receiving electricity (`receiving_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Record Ammonia (R717) refrigerant makeup (`receiving_r717_makeup`)

Ammonia (R717) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Carbon dioxide (R744) refrigerant makeup (`receiving_r744_makeup`)

Carbon dioxide (R744) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Propane (R290) refrigerant makeup (`receiving_r290_makeup`)

Propane (R290) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Remove Pork skeletal meat receiving reject (`receiving_reject_pork_meat`)

Pork skeletal meat receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork skeletal meat receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork skeletal meat receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef skeletal meat receiving reject (`receiving_reject_beef_meat`)

Beef skeletal meat receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef skeletal meat receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef skeletal meat receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Chicken skeletal meat receiving reject (`receiving_reject_chicken_meat`)

Chicken skeletal meat receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken skeletal meat receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken skeletal meat receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Turkey skeletal meat receiving reject (`receiving_reject_turkey_meat`)

Turkey skeletal meat receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Turkey skeletal meat receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Turkey skeletal meat receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig liver receiving reject (`receiving_reject_pig_liver`)

Pig liver receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig liver receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig liver receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle liver receiving reject (`receiving_reject_cattle_liver`)

Cattle liver receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle liver receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle liver receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig blood receiving reject (`receiving_reject_pig_blood`)

Pig blood receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig blood receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle blood receiving reject (`receiving_reject_cattle_blood`)

Cattle blood receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle blood receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle blood receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork backfat receiving reject (`receiving_reject_pork_fat`)

Pork backfat receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork backfat receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork backfat receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle adipose fat receiving reject (`receiving_reject_cattle_fat`)

Cattle adipose fat receiving reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle adipose fat receiving reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle adipose fat receiving reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Low-density polyethylene inbound liner waste (`receiving_reject_ldpe_liner`)

Low-density polyethylene inbound liner waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Low-density polyethylene inbound liner waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Low-density polyethylene inbound liner waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Corrugated fibreboard inbound carton waste (`receiving_reject_fibreboard_carton`)

Corrugated fibreboard inbound carton waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Corrugated fibreboard inbound carton waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Corrugated fibreboard inbound carton waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Wooden inbound pallet waste (`receiving_reject_wood_pallet`)

Wooden inbound pallet waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Wooden inbound pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Wooden inbound pallet waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Elementary flows

###### Release Ammonia (R717) to air (`receiving_r717_release`)

Ammonia (R717) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon dioxide (R744) to air (`receiving_r744_release`)

Carbon dioxide (R744) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Propane (R290) to air (`receiving_r290_release`)

Propane (R290) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Comminution, batching and mixing (`comminution_batching_mixing`)

Foreground size reduction, recipe dosing, and mixture preparation. Always include; record the exact recipe and equipment sequence used by the locked product.

#### Inputs

##### Product flows

###### Dose Potable formulation water (`mixing_input_potable_water`)

Potable formulation water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potable formulation water
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potable formulation water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Potable ice (`mixing_input_potable_ice`)

Potable ice is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potable ice
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potable ice physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sodium chloride (`mixing_input_sodium_chloride`)

Sodium chloride is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium chloride physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sucrose (`mixing_input_sucrose`)

Sucrose is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sucrose physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Dextrose (`mixing_input_dextrose`)

Dextrose is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Dextrose
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Dextrose physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Potato starch (`mixing_input_potato_starch`)

Potato starch is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potato starch
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potato starch physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Soy protein isolate (`mixing_input_soy_protein_isolate`)

Soy protein isolate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Soy protein isolate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Soy protein isolate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Skim milk powder (`mixing_input_skim_milk_powder`)

Skim milk powder is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Skim milk powder
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Skim milk powder physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Porcine gelatin (`mixing_input_porcine_gelatin`)

Porcine gelatin is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Porcine gelatin
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Porcine gelatin physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Black pepper powder (`mixing_input_black_pepper`)

Black pepper powder is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Black pepper powder
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Black pepper powder physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Paprika powder (`mixing_input_paprika`)

Paprika powder is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Paprika powder
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Paprika powder physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Garlic powder (`mixing_input_garlic`)

Garlic powder is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Garlic powder
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Garlic powder physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Nutmeg powder (`mixing_input_nutmeg`)

Nutmeg powder is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Nutmeg powder
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Nutmeg powder physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Coriander seed powder (`mixing_input_coriander`)

Coriander seed powder is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Coriander seed powder
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Coriander seed powder physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sodium nitrite (`mixing_input_sodium_nitrite`)

Sodium nitrite is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium nitrite
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium nitrite physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Potassium nitrate (`mixing_input_potassium_nitrate`)

Potassium nitrate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potassium nitrate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potassium nitrate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sodium ascorbate (`mixing_input_sodium_ascorbate`)

Sodium ascorbate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium ascorbate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium ascorbate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sodium erythorbate (`mixing_input_sodium_erythorbate`)

Sodium erythorbate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium erythorbate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium erythorbate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sodium tripolyphosphate (`mixing_input_sodium_tripolyphosphate`)

Sodium tripolyphosphate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium tripolyphosphate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium tripolyphosphate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sodium lactate (`mixing_input_sodium_lactate`)

Sodium lactate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium lactate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium lactate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Meter comminution and mixing electricity (`mixing_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Meter compressed air (`mixing_compressed_air`)

Compressed air is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_utility_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Compressed air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Produce Pork fresh sausage batter (`mixing_output_pork_fresh`)

Pork fresh sausage batter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fresh sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork fresh sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Beef cooked sausage batter (`mixing_output_beef_cooked`)

Beef cooked sausage batter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef cooked sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef cooked sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Pork fermented sausage batter (`mixing_output_pork_fermented`)

Pork fermented sausage batter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fermented sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork fermented sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Pig blood pudding batter (`mixing_output_pig_blood`)

Pig blood pudding batter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood pudding batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig blood pudding batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cattle blood pudding batter (`mixing_output_cattle_blood`)

Cattle blood pudding batter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle blood pudding batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle blood pudding batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Pork liver sausage batter (`mixing_output_pork_liver`)

Pork liver sausage batter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork liver sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork liver sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Beef heart sausage batter (`mixing_output_beef_heart`)

Beef heart sausage batter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef heart sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef heart sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Pork kidney sausage batter (`mixing_output_pork_kidney`)

Pork kidney sausage batter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork kidney sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork kidney sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Chicken galantine sausage mixture (`mixing_output_chicken_galantine`)

Chicken galantine sausage mixture is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken galantine sausage mixture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken galantine sausage mixture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Beef meat paste sausage mixture (`mixing_output_beef_meat_paste`)

Beef meat paste sausage mixture is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef meat paste sausage mixture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef meat paste sausage mixture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Pork pâté sausage mixture (`mixing_output_pork_pate`)

Pork pâté sausage mixture is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork pâté sausage mixture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork pâté sausage mixture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Pork rillettes sausage mixture (`mixing_output_pork_rillettes`)

Pork rillettes sausage mixture is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork rillettes sausage mixture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork rillettes sausage mixture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### Remove Pork skeletal meat comminution loss (`mixing_loss_pork_skeletal_meat`)

Pork skeletal meat comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork skeletal meat comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork skeletal meat comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef skeletal meat comminution loss (`mixing_loss_beef_skeletal_meat`)

Beef skeletal meat comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef skeletal meat comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef skeletal meat comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Chicken skeletal meat comminution loss (`mixing_loss_chicken_skeletal_meat`)

Chicken skeletal meat comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken skeletal meat comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken skeletal meat comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Turkey skeletal meat comminution loss (`mixing_loss_turkey_skeletal_meat`)

Turkey skeletal meat comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Turkey skeletal meat comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Turkey skeletal meat comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Sheep skeletal meat comminution loss (`mixing_loss_sheep_skeletal_meat`)

Sheep skeletal meat comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sheep skeletal meat comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sheep skeletal meat comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Goat skeletal meat comminution loss (`mixing_loss_goat_skeletal_meat`)

Goat skeletal meat comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Goat skeletal meat comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Goat skeletal meat comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig liver comminution loss (`mixing_loss_pig_liver`)

Pig liver comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig liver comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig liver comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle liver comminution loss (`mixing_loss_cattle_liver`)

Cattle liver comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle liver comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle liver comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Chicken liver comminution loss (`mixing_loss_chicken_liver`)

Chicken liver comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken liver comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken liver comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig heart comminution loss (`mixing_loss_pig_heart`)

Pig heart comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig heart comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig heart comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle heart comminution loss (`mixing_loss_cattle_heart`)

Cattle heart comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle heart comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle heart comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig kidney comminution loss (`mixing_loss_pig_kidney`)

Pig kidney comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig kidney comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig kidney comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle kidney comminution loss (`mixing_loss_cattle_kidney`)

Cattle kidney comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle kidney comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle kidney comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig blood comminution loss (`mixing_loss_pig_blood`)

Pig blood comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig blood comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle blood comminution loss (`mixing_loss_cattle_blood`)

Cattle blood comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle blood comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle blood comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork backfat comminution loss (`mixing_loss_pork_backfat`)

Pork backfat comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork backfat comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork backfat comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle adipose fat comminution loss (`mixing_loss_cattle_adipose_fat`)

Cattle adipose fat comminution loss is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle adipose fat comminution loss
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle adipose fat comminution loss physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Sodium chloride spill (`mixing_waste_sodium_chloride`)

Sodium chloride spill is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium chloride spill
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium chloride spill physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Potato starch spill (`mixing_waste_potato_starch`)

Potato starch spill is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potato starch spill
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potato starch spill physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Black pepper powder spill (`mixing_waste_black_pepper`)

Black pepper powder spill is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Black pepper powder spill
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Black pepper powder spill physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Paprika powder spill (`mixing_waste_paprika`)

Paprika powder spill is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Paprika powder spill
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Paprika powder spill physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Garlic powder spill (`mixing_waste_garlic`)

Garlic powder spill is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Garlic powder spill
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Garlic powder spill physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Mixer washout wastewater (`mixing_waste_washout`)

Mixer washout wastewater is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Mixer washout wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Mixer washout wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

##### Elementary flows

###### Release Potato starch dust to air (`mixing_dust_potato_starch`)

Potato starch dust to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potato starch dust to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potato starch dust to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Black pepper dust to air (`mixing_dust_black_pepper`)

Black pepper dust to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Black pepper dust to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Black pepper dust to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Paprika dust to air (`mixing_dust_paprika`)

Paprika dust to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Paprika dust to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Paprika dust to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Portion forming (`portion_forming`)

Foreground filling, linking, clipping, moulding, or equivalent product-specific forming. Always include the exact casing-filling or sausage-shape forming operation used.

#### Inputs

##### Product flows

###### Feed Pork fresh sausage batter (`forming_input_pork_fresh`)

Pork fresh sausage batter is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fresh sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork fresh sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Beef cooked sausage batter (`forming_input_beef_cooked`)

Beef cooked sausage batter is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef cooked sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef cooked sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Pork fermented sausage batter (`forming_input_pork_fermented`)

Pork fermented sausage batter is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fermented sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork fermented sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Pig blood pudding batter (`forming_input_pig_blood`)

Pig blood pudding batter is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood pudding batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig blood pudding batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cattle blood pudding batter (`forming_input_cattle_blood`)

Cattle blood pudding batter is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle blood pudding batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle blood pudding batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Pork liver sausage batter (`forming_input_pork_liver`)

Pork liver sausage batter is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork liver sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork liver sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Beef heart sausage batter (`forming_input_beef_heart`)

Beef heart sausage batter is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef heart sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef heart sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Pork kidney sausage batter (`forming_input_pork_kidney`)

Pork kidney sausage batter is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork kidney sausage batter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork kidney sausage batter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Chicken galantine sausage mixture (`forming_input_chicken_galantine`)

Chicken galantine sausage mixture is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken galantine sausage mixture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken galantine sausage mixture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Beef meat paste sausage mixture (`forming_input_beef_meat_paste`)

Beef meat paste sausage mixture is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef meat paste sausage mixture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef meat paste sausage mixture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Pork pâté sausage mixture (`forming_input_pork_pate`)

Pork pâté sausage mixture is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork pâté sausage mixture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork pâté sausage mixture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Pork rillettes sausage mixture (`forming_input_pork_rillettes`)

Pork rillettes sausage mixture is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork rillettes sausage mixture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork rillettes sausage mixture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Natural hog casing (`forming_casing_hog`)

Natural hog casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural hog casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casing_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural hog casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Natural sheep casing (`forming_casing_sheep`)

Natural sheep casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural sheep casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casing_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural sheep casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Natural cattle casing (`forming_casing_cattle`)

Natural cattle casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural cattle casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casing_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural cattle casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Collagen casing (`forming_casing_collagen`)

Collagen casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Collagen casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casing_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Collagen casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Cellulose casing (`forming_casing_cellulose`)

Cellulose casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cellulose casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casing_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cellulose casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Polyamide synthetic casing (`forming_casing_polyamide`)

Polyamide synthetic casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polyamide synthetic casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casing_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polyamide synthetic casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Meter forming electricity (`forming_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Meter casing preparation water (`forming_process_water`)

Potable process water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potable process water
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxc-58-2005`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potable process water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Produce Raw pork fresh sausage links (`forming_output_pork_fresh`)

Raw pork fresh sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw pork fresh sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw pork fresh sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Raw beef cooked-sausage links (`forming_output_beef_cooked`)

Raw beef cooked-sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw beef cooked-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw beef cooked-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Raw pork fermented-sausage links (`forming_output_pork_fermented`)

Raw pork fermented-sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw pork fermented-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw pork fermented-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Filled pig blood pudding (`forming_output_pig_blood`)

Filled pig blood pudding is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pig blood pudding
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pig blood pudding physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Filled cattle blood pudding (`forming_output_cattle_blood`)

Filled cattle blood pudding is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled cattle blood pudding
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled cattle blood pudding physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Filled pork liver sausage (`forming_output_pork_liver`)

Filled pork liver sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pork liver sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pork liver sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Filled beef heart sausage (`forming_output_beef_heart`)

Filled beef heart sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled beef heart sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled beef heart sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Filled pork kidney sausage (`forming_output_pork_kidney`)

Filled pork kidney sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pork kidney sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pork kidney sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Chicken galantine in casing (`forming_output_chicken_galantine`)

Chicken galantine in casing is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken galantine in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken galantine in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Beef meat paste in casing (`forming_output_beef_meat_paste`)

Beef meat paste in casing is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef meat paste in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef meat paste in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Pork pâté in casing (`forming_output_pork_pate`)

Pork pâté in casing is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork pâté in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork pâté in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Pork rillettes in casing (`forming_output_pork_rillettes`)

Pork rillettes in casing is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork rillettes in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork rillettes in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### Remove Natural hog casing trim waste (`forming_casing_waste_hog`)

Natural hog casing trim waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural hog casing trim waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural hog casing trim waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Natural sheep casing trim waste (`forming_casing_waste_sheep`)

Natural sheep casing trim waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural sheep casing trim waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural sheep casing trim waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Natural cattle casing trim waste (`forming_casing_waste_cattle`)

Natural cattle casing trim waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural cattle casing trim waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural cattle casing trim waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Collagen casing trim waste (`forming_casing_waste_collagen`)

Collagen casing trim waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Collagen casing trim waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Collagen casing trim waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cellulose casing trim waste (`forming_casing_waste_cellulose`)

Cellulose casing trim waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cellulose casing trim waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cellulose casing trim waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Polyamide synthetic casing trim waste (`forming_casing_waste_polyamide`)

Polyamide synthetic casing trim waste is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polyamide synthetic casing trim waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polyamide synthetic casing trim waste physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Raw pork fresh sausage links forming reject (`forming_reject_pork_fresh`)

Raw pork fresh sausage links forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw pork fresh sausage links forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw pork fresh sausage links forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Raw beef cooked-sausage links forming reject (`forming_reject_beef_cooked`)

Raw beef cooked-sausage links forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw beef cooked-sausage links forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw beef cooked-sausage links forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Raw pork fermented-sausage links forming reject (`forming_reject_pork_fermented`)

Raw pork fermented-sausage links forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw pork fermented-sausage links forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw pork fermented-sausage links forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Filled pig blood pudding forming reject (`forming_reject_pig_blood`)

Filled pig blood pudding forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pig blood pudding forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pig blood pudding forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Filled cattle blood pudding forming reject (`forming_reject_cattle_blood`)

Filled cattle blood pudding forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled cattle blood pudding forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled cattle blood pudding forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Filled pork liver sausage forming reject (`forming_reject_pork_liver`)

Filled pork liver sausage forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pork liver sausage forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pork liver sausage forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Filled beef heart sausage forming reject (`forming_reject_beef_heart`)

Filled beef heart sausage forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled beef heart sausage forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled beef heart sausage forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Filled pork kidney sausage forming reject (`forming_reject_pork_kidney`)

Filled pork kidney sausage forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pork kidney sausage forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pork kidney sausage forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Chicken galantine in casing forming reject (`forming_reject_chicken_galantine`)

Chicken galantine in casing forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken galantine in casing forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken galantine in casing forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef meat paste in casing forming reject (`forming_reject_beef_meat_paste`)

Beef meat paste in casing forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef meat paste in casing forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef meat paste in casing forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork pâté in casing forming reject (`forming_reject_pork_pate`)

Pork pâté in casing forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork pâté in casing forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork pâté in casing forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork rillettes in casing forming reject (`forming_reject_pork_rillettes`)

Pork rillettes in casing forming reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork rillettes in casing forming reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork rillettes in casing forming reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### 灌装机冲洗废水 (`forming_machine_washout`)

Filling-machine washout wastewater is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filling-machine washout wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filling-machine washout wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

##### Elementary flows

### Process: Curing (`curing`)

Foreground salt or curing-agent contact under recorded time and temperature conditions. Include only when the locked treatment sequence contains a curing step.

#### Inputs

##### Product flows

###### Feed Raw pork fermented-sausage links (`curing_input_pork_fermented`)

Raw pork fermented-sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw pork fermented-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw pork fermented-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Raw beef cooked-sausage links (`curing_input_beef_cooked`)

Raw beef cooked-sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw beef cooked-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw beef cooked-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Filled pork liver sausage (`curing_input_pork_liver`)

Filled pork liver sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pork liver sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pork liver sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Filled beef heart sausage (`curing_input_beef_heart`)

Filled beef heart sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled beef heart sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled beef heart sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Filled pork kidney sausage (`curing_input_pork_kidney`)

Filled pork kidney sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pork kidney sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pork kidney sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Potable curing water (`curing_input_water`)

Potable curing water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potable curing water
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potable curing water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sodium chloride (`curing_input_salt`)

Sodium chloride is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium chloride physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Sodium nitrite (`curing_input_nitrite`)

Sodium nitrite is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium nitrite
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium nitrite physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Dose Potassium nitrate (`curing_input_nitrate`)

Potassium nitrate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potassium nitrate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potassium nitrate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Meter curing electricity (`curing_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Record Ammonia (R717) refrigerant makeup (`curing_r717_makeup`)

Ammonia (R717) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Carbon dioxide (R744) refrigerant makeup (`curing_r744_makeup`)

Carbon dioxide (R744) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Propane (R290) refrigerant makeup (`curing_r290_makeup`)

Propane (R290) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Produce Cured pork fermented-sausage links (`curing_output_pork_fermented`)

Cured pork fermented-sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured pork fermented-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured pork fermented-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cured beef cooked-sausage links (`curing_output_beef_cooked`)

Cured beef cooked-sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured beef cooked-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured beef cooked-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cured pork liver sausage (`curing_output_pork_liver`)

Cured pork liver sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured pork liver sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured pork liver sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cured beef heart sausage (`curing_output_beef_heart`)

Cured beef heart sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured beef heart sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured beef heart sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cured pork kidney sausage (`curing_output_pork_kidney`)

Cured pork kidney sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured pork kidney sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured pork kidney sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### Remove Cured pork fermented-sausage links curing reject (`curing_reject_pork_fermented`)

Cured pork fermented-sausage links curing reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured pork fermented-sausage links curing reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured pork fermented-sausage links curing reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cured beef cooked-sausage links curing reject (`curing_reject_beef_cooked`)

Cured beef cooked-sausage links curing reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured beef cooked-sausage links curing reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured beef cooked-sausage links curing reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cured pork liver sausage curing reject (`curing_reject_pork_liver`)

Cured pork liver sausage curing reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured pork liver sausage curing reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured pork liver sausage curing reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cured beef heart sausage curing reject (`curing_reject_beef_heart`)

Cured beef heart sausage curing reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured beef heart sausage curing reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured beef heart sausage curing reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cured pork kidney sausage curing reject (`curing_reject_pork_kidney`)

Cured pork kidney sausage curing reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured pork kidney sausage curing reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured pork kidney sausage curing reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### 废氯化钠腌制盐水 (`curing_spent_brine`)

Spent sodium-chloride curing brine is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent sodium-chloride curing brine
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent sodium-chloride curing brine physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

##### Elementary flows

###### Release Ammonia (R717) to air (`curing_r717_release`)

Ammonia (R717) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon dioxide (R744) to air (`curing_r744_release`)

Carbon dioxide (R744) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Propane (R290) to air (`curing_r290_release`)

Propane (R290) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Fermentation (`fermentation`)

Foreground starter addition and controlled fermentation. Include only when the locked treatment sequence contains controlled fermentation.

#### Inputs

##### Product flows

###### Use Cured pork fermented-sausage links (`fermentation_input_cured_pork`)

Cured pork fermented-sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured pork fermented-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured pork fermented-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Raw pork fermented-sausage links (`fermentation_input_raw_pork`)

Raw pork fermented-sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw pork fermented-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw pork fermented-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Lactiplantibacillus plantarum starter culture (`fermentation_input_plantarum`)

Lactiplantibacillus plantarum starter culture is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Lactiplantibacillus plantarum starter culture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Lactiplantibacillus plantarum starter culture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Pediococcus pentosaceus starter culture (`fermentation_input_pediococcus`)

Pediococcus pentosaceus starter culture is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pediococcus pentosaceus starter culture
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pediococcus pentosaceus starter culture physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Dextrose (`fermentation_input_dextrose`)

Dextrose is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Dextrose
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Dextrose physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Meter fermentation electricity (`fermentation_grid_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Record Ammonia (R717) refrigerant makeup (`fermentation_r717_makeup`)

Ammonia (R717) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Carbon dioxide (R744) refrigerant makeup (`fermentation_r744_makeup`)

Carbon dioxide (R744) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Propane (R290) refrigerant makeup (`fermentation_r290_makeup`)

Propane (R290) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 发酵猪肉香肠段 (`fermentation_output_pork`)

Fermented pork sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fermented pork sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fermented pork sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### 发酵不合格猪肉香肠 (`fermentation_reject_pork`)

Fermentation-rejected pork sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fermentation-rejected pork sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fermentation-rejected pork sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Elementary flows

###### Release Ammonia (R717) to air (`fermentation_r717_release`)

Ammonia (R717) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon dioxide (R744) to air (`fermentation_r744_release`)

Carbon dioxide (R744) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Propane (R290) to air (`fermentation_r290_release`)

Propane (R290) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Drying (`drying`)

Foreground moisture removal under recorded time, temperature, humidity, and airflow. Include only when the locked treatment sequence contains hot-air, vacuum, or another explicitly named drying technology.

#### Inputs

##### Product flows

###### Feed fermented pork sausage links (`drying_input_pork`)

Fermented pork sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fermented pork sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fermented pork sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Grid electricity, medium voltage (`drying_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Purchased steam (`drying_purchased_steam`)

Purchased steam is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Purchased steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Purchased hot water (`drying_purchased_hot_water`)

Purchased hot water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Purchased hot water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Onsite-generated steam (`drying_onsite_steam`)

Onsite-generated steam is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Onsite-generated hot water (`drying_onsite_hot_water`)

Onsite-generated hot water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated hot water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Natural gas (`drying_natural_gas`)

Natural gas is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural gas physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Diesel fuel (`drying_diesel`)

Diesel fuel is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Diesel fuel physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Liquefied petroleum gas (`drying_lpg`)

Liquefied petroleum gas is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Liquefied petroleum gas physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Ammonia (R717) refrigerant makeup (`drying_r717_makeup`)

Ammonia (R717) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Carbon dioxide (R744) refrigerant makeup (`drying_r744_makeup`)

Carbon dioxide (R744) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Propane (R290) refrigerant makeup (`drying_r290_makeup`)

Propane (R290) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 发酵干燥猪肉香肠 (`drying_output_pork`)

Fermented dried pork sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fermented dried pork sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fermented dried pork sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### 干燥不合格猪肉香肠 (`drying_reject_pork`)

Drying-rejected pork sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Drying-rejected pork sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Drying-rejected pork sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Elementary flows

###### Release Water vapour to air (`drying_release_water_vapour`)

Water vapour to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Water vapour to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Ammonia (R717) to air (`drying_release_r717`)

Ammonia (R717) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon dioxide (R744) to air (`drying_release_r744`)

Carbon dioxide (R744) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Propane (R290) to air (`drying_release_r290`)

Propane (R290) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Fossil carbon dioxide to air (`drying_release_co2`)

Fossil carbon dioxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fossil carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fossil carbon dioxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Nitrogen oxides (NOx) to air (`drying_release_nox`)

Nitrogen oxides (NOx) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Nitrogen oxides (NOx) to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Nitrogen oxides (NOx) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Sulfur oxides (SOx) to air (`drying_release_sox`)

Sulfur oxides (SOx) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sulfur oxides (SOx) to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sulfur oxides (SOx) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Particulate matter, ≤2.5 µm, to air (`drying_release_pm25`)

Particulate matter, ≤2.5 µm, to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Particulate matter, ≤2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Particulate matter, ≤2.5 µm, to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon monoxide to air (`drying_release_co`)

Carbon monoxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon monoxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Smoking (`smoking`)

Foreground smoke generation or condensate application for one named product. Include only when the locked treatment sequence contains direct smoke or smoke-condensate treatment.

#### Inputs

##### Product flows

###### Use Cured pork fermented-sausage links (`smoking_input_cured_pork`)

Cured pork fermented-sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cured pork fermented-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cured pork fermented-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Fermented pork sausage links (`smoking_input_fermented_pork`)

Fermented pork sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fermented pork sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fermented pork sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Raw beef cooked-sausage links (`smoking_input_raw_beef`)

Raw beef cooked-sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw beef cooked-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw beef cooked-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Beech wood chips (`smoking_input_beech_chips`)

Beech wood chips is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beech wood chips
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beech wood chips physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Oak wood sawdust (`smoking_input_oak_sawdust`)

Oak wood sawdust is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Oak wood sawdust
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Oak wood sawdust physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Beech wood smoke condensate (`smoking_input_beech_condensate`)

Beech wood smoke condensate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beech wood smoke condensate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_component_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beech wood smoke condensate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Grid electricity, medium voltage (`smoking_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Purchased steam (`smoking_purchased_steam`)

Purchased steam is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Purchased steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Onsite-generated steam (`smoking_onsite_steam`)

Onsite-generated steam is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Produce Smoked pork sausage links (`smoking_output_pork`)

Smoked pork sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Smoked pork sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Smoked pork sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Smoked beef sausage links (`smoking_output_beef`)

Smoked beef sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Smoked beef sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Smoked beef sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### Remove Beech wood ash (`smoking_waste_beech_ash`)

Beech wood ash is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beech wood ash
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beech wood ash physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Oak wood ash (`smoking_waste_oak_ash`)

Oak wood ash is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Oak wood ash
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Oak wood ash physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Spent smoke filter (`smoking_waste_filter`)

Spent smoke filter is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent smoke filter
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent smoke filter physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Elementary flows

###### Release Particulate matter, ≤2.5 µm, to air (`smoking_release_pm25`)

Particulate matter, ≤2.5 µm, to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Particulate matter, ≤2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Particulate matter, ≤2.5 µm, to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Non-methane volatile organic carbon to air (`smoking_release_nmvoc`)

Non-methane volatile organic carbon to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Non-methane volatile organic carbon to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Non-methane volatile organic carbon to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon monoxide to air (`smoking_release_co`)

Carbon monoxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon monoxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Nitrogen oxides (NOx) to air (`smoking_release_nox`)

Nitrogen oxides (NOx) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Nitrogen oxides (NOx) to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Nitrogen oxides (NOx) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Thermal processing and controlled cooling (`thermal_processing`)

Foreground heat treatment with documented process parameters and subsequent controlled cooling. Include only when the locked treatment sequence contains cooking, pasteurisation, sterilisation, or another named heat treatment.

#### Inputs

##### Product flows

###### Feed Raw pork fresh sausage links (`thermal_input_pork_fresh`)

Raw pork fresh sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw pork fresh sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw pork fresh sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Raw beef cooked-sausage links (`thermal_input_beef_cooked`)

Raw beef cooked-sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw beef cooked-sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw beef cooked-sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Filled pig blood pudding (`thermal_input_pig_blood`)

Filled pig blood pudding is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pig blood pudding
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pig blood pudding physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Filled cattle blood pudding (`thermal_input_cattle_blood`)

Filled cattle blood pudding is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled cattle blood pudding
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled cattle blood pudding physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Filled pork liver sausage (`thermal_input_pork_liver`)

Filled pork liver sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pork liver sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pork liver sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Filled beef heart sausage (`thermal_input_beef_heart`)

Filled beef heart sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled beef heart sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled beef heart sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Filled pork kidney sausage (`thermal_input_pork_kidney`)

Filled pork kidney sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Filled pork kidney sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Filled pork kidney sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Chicken galantine in casing (`thermal_input_chicken_galantine`)

Chicken galantine in casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken galantine in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken galantine in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Beef meat paste in casing (`thermal_input_beef_meat_paste`)

Beef meat paste in casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef meat paste in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef meat paste in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Pork pâté in casing (`thermal_input_pork_pate`)

Pork pâté in casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork pâté in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork pâté in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Pork rillettes in casing (`thermal_input_pork_rillettes`)

Pork rillettes in casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork rillettes in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork rillettes in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Grid electricity, medium voltage (`thermal_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Purchased steam (`thermal_purchased_steam`)

Purchased steam is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Purchased steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Purchased hot water (`thermal_purchased_hot_water`)

Purchased hot water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Purchased hot water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Onsite-generated steam (`thermal_onsite_steam`)

Onsite-generated steam is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Onsite-generated hot water (`thermal_onsite_hot_water`)

Onsite-generated hot water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated hot water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Natural gas (`thermal_natural_gas`)

Natural gas is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural gas physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Diesel fuel (`thermal_diesel`)

Diesel fuel is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Diesel fuel physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Liquefied petroleum gas (`thermal_lpg`)

Liquefied petroleum gas is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Liquefied petroleum gas physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Potable cooking water (`thermal_water`)

Potable cooking water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potable cooking water
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potable cooking water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Ammonia (R717) refrigerant makeup (`thermal_r717_makeup`)

Ammonia (R717) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Carbon dioxide (R744) refrigerant makeup (`thermal_r744_makeup`)

Carbon dioxide (R744) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Propane (R290) refrigerant makeup (`thermal_r290_makeup`)

Propane (R290) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Produce Cooked pork sausage links (`thermal_output_pork_fresh`)

Cooked pork sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked beef sausage links (`thermal_output_beef_cooked`)

Cooked beef sausage links is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked pig blood pudding (`thermal_output_pig_blood`)

Cooked pig blood pudding is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pig blood pudding
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pig blood pudding physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked cattle blood pudding (`thermal_output_cattle_blood`)

Cooked cattle blood pudding is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked cattle blood pudding
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked cattle blood pudding physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked pork liver sausage (`thermal_output_pork_liver`)

Cooked pork liver sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork liver sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork liver sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked beef heart sausage (`thermal_output_beef_heart`)

Cooked beef heart sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef heart sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef heart sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked pork kidney sausage (`thermal_output_pork_kidney`)

Cooked pork kidney sausage is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork kidney sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork kidney sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked chicken galantine in casing (`thermal_output_chicken_galantine`)

Cooked chicken galantine in casing is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked chicken galantine in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked chicken galantine in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked beef meat paste in casing (`thermal_output_beef_meat_paste`)

Cooked beef meat paste in casing is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef meat paste in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef meat paste in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked pork pâté in casing (`thermal_output_pork_pate`)

Cooked pork pâté in casing is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork pâté in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork pâté in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Produce Cooked pork rillettes in casing (`thermal_output_pork_rillettes`)

Cooked pork rillettes in casing is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork rillettes in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork rillettes in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### Remove Cooked pork sausage links thermal reject (`thermal_reject_pork_fresh`)

Cooked pork sausage links thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork sausage links thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork sausage links thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked beef sausage links thermal reject (`thermal_reject_beef_cooked`)

Cooked beef sausage links thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef sausage links thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef sausage links thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked pig blood pudding thermal reject (`thermal_reject_pig_blood`)

Cooked pig blood pudding thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pig blood pudding thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pig blood pudding thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked cattle blood pudding thermal reject (`thermal_reject_cattle_blood`)

Cooked cattle blood pudding thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked cattle blood pudding thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked cattle blood pudding thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked pork liver sausage thermal reject (`thermal_reject_pork_liver`)

Cooked pork liver sausage thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork liver sausage thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork liver sausage thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked beef heart sausage thermal reject (`thermal_reject_beef_heart`)

Cooked beef heart sausage thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef heart sausage thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef heart sausage thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked pork kidney sausage thermal reject (`thermal_reject_pork_kidney`)

Cooked pork kidney sausage thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork kidney sausage thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork kidney sausage thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked chicken galantine in casing thermal reject (`thermal_reject_chicken_galantine`)

Cooked chicken galantine in casing thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked chicken galantine in casing thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked chicken galantine in casing thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked beef meat paste in casing thermal reject (`thermal_reject_beef_meat_paste`)

Cooked beef meat paste in casing thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef meat paste in casing thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef meat paste in casing thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked pork pâté in casing thermal reject (`thermal_reject_pork_pate`)

Cooked pork pâté in casing thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork pâté in casing thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork pâté in casing thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cooked pork rillettes in casing thermal reject (`thermal_reject_pork_rillettes`)

Cooked pork rillettes in casing thermal reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork rillettes in casing thermal reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork rillettes in casing thermal reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### 肉制品蒸煮冷凝废水 (`thermal_cooking_condensate`)

Meat-cooking condensate wastewater is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Meat-cooking condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Meat-cooking condensate wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

##### Elementary flows

###### Release Ammonia (R717) to air (`thermal_release_r717`)

Ammonia (R717) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon dioxide (R744) to air (`thermal_release_r744`)

Carbon dioxide (R744) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Propane (R290) to air (`thermal_release_r290`)

Propane (R290) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Fossil carbon dioxide to air (`thermal_release_co2`)

Fossil carbon dioxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fossil carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fossil carbon dioxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Nitrogen oxides (NOx) to air (`thermal_release_nox`)

Nitrogen oxides (NOx) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Nitrogen oxides (NOx) to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Nitrogen oxides (NOx) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Sulfur oxides (SOx) to air (`thermal_release_sox`)

Sulfur oxides (SOx) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sulfur oxides (SOx) to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sulfur oxides (SOx) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Particulate matter, ≤2.5 µm, to air (`thermal_release_pm25`)

Particulate matter, ≤2.5 µm, to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Particulate matter, ≤2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Particulate matter, ≤2.5 µm, to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon monoxide to air (`thermal_release_co`)

Carbon monoxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon monoxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Packaging, cold storage and release (`packaging_cold_storage_release`)

Foreground primary and secondary packaging, final temperature control, inspection, and gate release. Always include the actual packaging system, final storage state, and one concrete saleable product output.

#### Inputs

##### Product flows

###### Feed Raw pork fresh sausage links to packaging (`packaging_input_raw_pork`)

Raw pork fresh sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Raw pork fresh sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Raw pork fresh sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked pork sausage links to packaging (`packaging_input_cooked_pork`)

Cooked pork sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked beef sausage links to packaging (`packaging_input_cooked_beef`)

Cooked beef sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Fermented dried pork sausage to packaging (`packaging_input_dried_pork`)

Fermented dried pork sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fermented dried pork sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fermented dried pork sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Smoked pork sausage links to packaging (`packaging_input_smoked_pork`)

Smoked pork sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Smoked pork sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Smoked pork sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Smoked beef sausage links to packaging (`packaging_input_smoked_beef`)

Smoked beef sausage links is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Smoked beef sausage links
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Smoked beef sausage links physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked pig blood pudding to packaging (`packaging_input_pig_blood`)

Cooked pig blood pudding is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pig blood pudding
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pig blood pudding physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked cattle blood pudding to packaging (`packaging_input_cattle_blood`)

Cooked cattle blood pudding is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked cattle blood pudding
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked cattle blood pudding physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked pork liver sausage to packaging (`packaging_input_pork_liver`)

Cooked pork liver sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork liver sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork liver sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked beef heart sausage to packaging (`packaging_input_beef_heart`)

Cooked beef heart sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef heart sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef heart sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked pork kidney sausage to packaging (`packaging_input_pork_kidney`)

Cooked pork kidney sausage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork kidney sausage
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork kidney sausage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked chicken galantine in casing to packaging (`packaging_input_chicken_galantine`)

Cooked chicken galantine in casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked chicken galantine in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked chicken galantine in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked beef meat paste in casing to packaging (`packaging_input_beef_meat_paste`)

Cooked beef meat paste in casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked beef meat paste in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked beef meat paste in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked pork pâté in casing to packaging (`packaging_input_pork_pate`)

Cooked pork pâté in casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork pâté in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork pâté in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Feed Cooked pork rillettes in casing to packaging (`packaging_input_pork_rillettes`)

Cooked pork rillettes in casing is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cooked pork rillettes in casing
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_product_mass`
- Sources: `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cooked pork rillettes in casing physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Low-density polyethylene film (`packaging_material_ldpe_film`)

Low-density polyethylene film is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Low-density polyethylene film physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Polyamide film (`packaging_material_polyamide_film`)

Polyamide film is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polyamide film
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polyamide film physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Polypropylene tray (`packaging_material_pp_tray`)

Polypropylene tray is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polypropylene tray physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Polyethylene terephthalate tray (`packaging_material_pet_tray`)

Polyethylene terephthalate tray is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polyethylene terephthalate tray physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Corrugated fibreboard carton (`packaging_material_fibreboard`)

Corrugated fibreboard carton is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Corrugated fibreboard carton
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Corrugated fibreboard carton physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Tinplate steel can (`packaging_material_tinplate`)

Tinplate steel can is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Tinplate steel can
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Tinplate steel can physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Aluminium foil pouch (`packaging_material_aluminium_pouch`)

Aluminium foil pouch is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Aluminium foil pouch
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Aluminium foil pouch physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Paper label (`packaging_material_paper_label`)

Paper label is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Paper label physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Wooden pallet (`packaging_material_wood_pallet`)

Wooden pallet is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Wooden pallet physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Meter packaging electricity (`packaging_packaging_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Meter final cold-storage electricity (`packaging_cold_store_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Record Ammonia (R717) refrigerant makeup (`packaging_r717`)

Ammonia (R717) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Carbon dioxide (R744) refrigerant makeup (`packaging_r744`)

Carbon dioxide (R744) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Record Propane (R290) refrigerant makeup (`packaging_r290`)

Propane (R290) refrigerant makeup is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) refrigerant makeup
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) refrigerant makeup physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Release Pork fresh sausage, chilled (`final_product_pork_fresh_chilled`)

Pork fresh sausage, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fresh sausage, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork fresh sausage, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork fresh sausage, frozen (`final_product_pork_fresh_frozen`)

Pork fresh sausage, frozen is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fresh sausage, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork fresh sausage, frozen; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork cooked sausage, chilled (`final_product_pork_cooked_chilled`)

Pork cooked sausage, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork cooked sausage, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork cooked sausage, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork cooked sausage, frozen (`final_product_pork_cooked_frozen`)

Pork cooked sausage, frozen is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork cooked sausage, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork cooked sausage, frozen; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Beef cooked sausage, chilled (`final_product_beef_cooked_chilled`)

Beef cooked sausage, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef cooked sausage, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Beef cooked sausage, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Beef cooked sausage, frozen (`final_product_beef_cooked_frozen`)

Beef cooked sausage, frozen is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef cooked sausage, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Beef cooked sausage, frozen; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork fermented dried sausage, shelf-stable (`final_product_pork_fermented_dry`)

Pork fermented dried sausage, shelf-stable is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fermented dried sausage, shelf-stable
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork fermented dried sausage, shelf-stable; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork smoked sausage, chilled (`final_product_pork_smoked_chilled`)

Pork smoked sausage, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork smoked sausage, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork smoked sausage, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Beef smoked sausage, chilled (`final_product_beef_smoked_chilled`)

Beef smoked sausage, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef smoked sausage, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Beef smoked sausage, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pig blood pudding, chilled (`final_product_pig_blood_chilled`)

Pig blood pudding, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood pudding, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pig blood pudding, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pig blood pudding, frozen (`final_product_pig_blood_frozen`)

Pig blood pudding, frozen is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood pudding, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pig blood pudding, frozen; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Cattle blood pudding, chilled (`final_product_cattle_blood_chilled`)

Cattle blood pudding, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle blood pudding, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Cattle blood pudding, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork liver sausage, chilled (`final_product_pork_liver_chilled`)

Pork liver sausage, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork liver sausage, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork liver sausage, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork liver sausage, frozen (`final_product_pork_liver_frozen`)

Pork liver sausage, frozen is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork liver sausage, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork liver sausage, frozen; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Beef heart sausage, chilled (`final_product_beef_heart_chilled`)

Beef heart sausage, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef heart sausage, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Beef heart sausage, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork kidney sausage, chilled (`final_product_pork_kidney_chilled`)

Pork kidney sausage, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork kidney sausage, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork kidney sausage, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Chicken galantine in casing, chilled (`final_product_chicken_galantine_chilled`)

Chicken galantine in casing, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken galantine in casing, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Chicken galantine in casing, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Beef meat paste in casing, chilled (`final_product_beef_meat_paste_chilled`)

Beef meat paste in casing, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef meat paste in casing, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Beef meat paste in casing, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork pâté in casing, chilled (`final_product_pork_pate_chilled`)

Pork pâté in casing, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork pâté in casing, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork pâté in casing, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Release Pork rillettes in casing, chilled (`final_product_pork_rillettes_chilled`)

Pork rillettes in casing, chilled is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork rillettes in casing, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Sources: `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: This is one concrete CPC 21184 output route. Use it only when the locked product form, named animal-derived recipe, treatment sequence, and final market state exactly match Pork rillettes in casing, chilled; otherwise use another concrete atomic output row.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### Remove Pork fresh sausage, chilled release reject (`final_reject_pork_fresh_chilled`)

Pork fresh sausage, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fresh sausage, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork fresh sausage, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork fresh sausage, frozen release reject (`final_reject_pork_fresh_frozen`)

Pork fresh sausage, frozen release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fresh sausage, frozen release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork fresh sausage, frozen release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork cooked sausage, chilled release reject (`final_reject_pork_cooked_chilled`)

Pork cooked sausage, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork cooked sausage, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork cooked sausage, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork cooked sausage, frozen release reject (`final_reject_pork_cooked_frozen`)

Pork cooked sausage, frozen release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork cooked sausage, frozen release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork cooked sausage, frozen release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef cooked sausage, chilled release reject (`final_reject_beef_cooked_chilled`)

Beef cooked sausage, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef cooked sausage, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef cooked sausage, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef cooked sausage, frozen release reject (`final_reject_beef_cooked_frozen`)

Beef cooked sausage, frozen release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef cooked sausage, frozen release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef cooked sausage, frozen release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork fermented dried sausage, shelf-stable release reject (`final_reject_pork_fermented_dry`)

Pork fermented dried sausage, shelf-stable release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fermented dried sausage, shelf-stable release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork fermented dried sausage, shelf-stable release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork smoked sausage, chilled release reject (`final_reject_pork_smoked_chilled`)

Pork smoked sausage, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork smoked sausage, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork smoked sausage, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef smoked sausage, chilled release reject (`final_reject_beef_smoked_chilled`)

Beef smoked sausage, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef smoked sausage, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef smoked sausage, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig blood pudding, chilled release reject (`final_reject_pig_blood_chilled`)

Pig blood pudding, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood pudding, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig blood pudding, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig blood pudding, frozen release reject (`final_reject_pig_blood_frozen`)

Pig blood pudding, frozen release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood pudding, frozen release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig blood pudding, frozen release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Cattle blood pudding, chilled release reject (`final_reject_cattle_blood_chilled`)

Cattle blood pudding, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Cattle blood pudding, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Cattle blood pudding, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork liver sausage, chilled release reject (`final_reject_pork_liver_chilled`)

Pork liver sausage, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork liver sausage, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork liver sausage, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork liver sausage, frozen release reject (`final_reject_pork_liver_frozen`)

Pork liver sausage, frozen release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork liver sausage, frozen release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork liver sausage, frozen release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef heart sausage, chilled release reject (`final_reject_beef_heart_chilled`)

Beef heart sausage, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef heart sausage, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef heart sausage, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork kidney sausage, chilled release reject (`final_reject_pork_kidney_chilled`)

Pork kidney sausage, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork kidney sausage, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork kidney sausage, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Chicken galantine in casing, chilled release reject (`final_reject_chicken_galantine_chilled`)

Chicken galantine in casing, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken galantine in casing, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken galantine in casing, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef meat paste in casing, chilled release reject (`final_reject_beef_meat_paste_chilled`)

Beef meat paste in casing, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef meat paste in casing, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef meat paste in casing, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork pâté in casing, chilled release reject (`final_reject_pork_pate_chilled`)

Pork pâté in casing, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork pâté in casing, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork pâté in casing, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork rillettes in casing, chilled release reject (`final_reject_pork_rillettes_chilled`)

Pork rillettes in casing, chilled release reject is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork rillettes in casing, chilled release reject
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork rillettes in casing, chilled release reject physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Low-density polyethylene film packaging scrap (`packaging_scrap_ldpe_film`)

Low-density polyethylene film packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Low-density polyethylene film packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Low-density polyethylene film packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Polyamide film packaging scrap (`packaging_scrap_polyamide_film`)

Polyamide film packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polyamide film packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polyamide film packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Polypropylene tray packaging scrap (`packaging_scrap_pp_tray`)

Polypropylene tray packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polypropylene tray packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polypropylene tray packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Polyethylene terephthalate tray packaging scrap (`packaging_scrap_pet_tray`)

Polyethylene terephthalate tray packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polyethylene terephthalate tray packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polyethylene terephthalate tray packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Corrugated fibreboard carton packaging scrap (`packaging_scrap_fibreboard`)

Corrugated fibreboard carton packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Corrugated fibreboard carton packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Corrugated fibreboard carton packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Tinplate steel can packaging scrap (`packaging_scrap_tinplate`)

Tinplate steel can packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Tinplate steel can packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Tinplate steel can packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Aluminium foil pouch packaging scrap (`packaging_scrap_aluminium_pouch`)

Aluminium foil pouch packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Aluminium foil pouch packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Aluminium foil pouch packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Paper label packaging scrap (`packaging_scrap_paper_label`)

Paper label packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Paper label packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Paper label packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Wooden pallet packaging scrap (`packaging_scrap_wood_pallet`)

Wooden pallet packaging scrap is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Wooden pallet packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Wooden pallet packaging scrap physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Elementary flows

###### Release Ammonia (R717) to air (`packaging_r717_release`)

Ammonia (R717) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia (R717) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon dioxide (R744) to air (`packaging_r744_release`)

Carbon dioxide (R744) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon dioxide (R744) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Propane (R290) to air (`packaging_r290_release`)

Propane (R290) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Propane (R290) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_reconciliation`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Propane (R290) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Hygiene cleaning and sanitation (`hygiene_cleaning_sanitation`)

Foreground cleaning, rinsing, sanitation, and residue removal. Always include product-contact and area cleaning attributable to the locked production campaign.

#### Inputs

##### Product flows

###### Use Potable cleaning water (`hygiene_input_water`)

Potable cleaning water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Potable cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_water_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Potable cleaning water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Grid electricity, medium voltage (`hygiene_input_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Purchased steam (`hygiene_input_purchased_steam`)

Purchased steam is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Purchased steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Purchased hot water (`hygiene_input_purchased_hot_water`)

Purchased hot water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Purchased hot water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Onsite-generated steam (`hygiene_input_onsite_steam`)

Onsite-generated steam is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Onsite-generated hot water (`hygiene_input_onsite_hot_water`)

Onsite-generated hot water is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated hot water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Natural gas (`hygiene_input_natural_gas`)

Natural gas is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural gas physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Diesel fuel (`hygiene_input_diesel`)

Diesel fuel is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Diesel fuel physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Liquefied petroleum gas (`hygiene_input_lpg`)

Liquefied petroleum gas is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Liquefied petroleum gas physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Sodium hydroxide (`hygiene_input_sodium_hydroxide`)

Sodium hydroxide is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium hydroxide physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Nitric acid (`hygiene_input_nitric_acid`)

Nitric acid is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Nitric acid physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Phosphoric acid (`hygiene_input_phosphoric_acid`)

Phosphoric acid is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Phosphoric acid physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Peracetic acid (`hygiene_input_peracetic_acid`)

Peracetic acid is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Peracetic acid physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Sodium hypochlorite (`hygiene_input_sodium_hypochlorite`)

Sodium hypochlorite is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium hypochlorite physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Remove High-strength sausage-processing cleaning wastewater (`hygiene_output_high_strength`)

High-strength sausage-processing cleaning wastewater is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: High-strength sausage-processing cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when High-strength sausage-processing cleaning wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Remove Low-strength final-rinse wastewater (`hygiene_output_final_rinse`)

Low-strength final-rinse wastewater is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Low-strength final-rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Low-strength final-rinse wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Remove Pork sausage meat floor residue (`hygiene_output_pork_residue`)

Pork sausage meat floor residue is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork sausage meat floor residue
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork sausage meat floor residue physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Beef sausage meat floor residue (`hygiene_output_beef_residue`)

Beef sausage meat floor residue is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef sausage meat floor residue
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef sausage meat floor residue physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pig blood product floor residue (`hygiene_output_pig_blood_residue`)

Pig blood product floor residue is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pig blood product floor residue
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pig blood product floor residue physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Pork liver product floor residue (`hygiene_output_pork_liver_residue`)

Pork liver product floor residue is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork liver product floor residue
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork liver product floor residue physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Chicken galantine floor residue (`hygiene_output_chicken_galantine_residue`)

Chicken galantine floor residue is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chicken galantine floor residue
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chicken galantine floor residue physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Spent sodium hydroxide cleaning solution (`hygiene_output_spent_caustic`)

Spent sodium hydroxide cleaning solution is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent sodium hydroxide cleaning solution
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent sodium hydroxide cleaning solution physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Remove Spent nitric acid cleaning solution (`hygiene_output_spent_nitric`)

Spent nitric acid cleaning solution is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent nitric acid cleaning solution
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent nitric acid cleaning solution physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Remove Spent phosphoric acid cleaning solution (`hygiene_output_spent_phosphoric`)

Spent phosphoric acid cleaning solution is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent phosphoric acid cleaning solution
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent phosphoric acid cleaning solution physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Remove Spent peracetic acid sanitising solution (`hygiene_output_spent_peracetic`)

Spent peracetic acid sanitising solution is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent peracetic acid sanitising solution
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent peracetic acid sanitising solution physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Remove Spent sodium hypochlorite sanitising solution (`hygiene_output_spent_hypochlorite`)

Spent sodium hypochlorite sanitising solution is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent sodium hypochlorite sanitising solution
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`, `codex-cxc-58-2005`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent sodium hypochlorite sanitising solution physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

##### Elementary flows

### Process: Onsite heat generation (`onsite_heat_generation`)

Foreground boiler or heater operation for internally supplied steam or hot water. Include only when steam or hot water is generated within the foreground facility.

#### Inputs

##### Product flows

###### Use Natural gas (`heat_input_natural_gas`)

Natural gas is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Natural gas physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Diesel fuel (`heat_input_diesel`)

Diesel fuel is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Diesel fuel physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Liquefied petroleum gas (`heat_input_lpg`)

Liquefied petroleum gas is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Liquefied petroleum gas physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Grid electricity, medium voltage (`heat_input_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Boiler feedwater (`heat_input_feedwater`)

Boiler feedwater is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Boiler feedwater
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Boiler feedwater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Produce Onsite-generated steam (`heat_output_steam`)

Onsite-generated steam is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured onsite heat-output campaign attributable to the locked product batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated steam physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Produce Onsite-generated hot water (`heat_output_hot_water`)

Onsite-generated hot water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Onsite-generated hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured onsite heat-output campaign attributable to the locked product batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_heat_output`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Onsite-generated hot water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

##### Waste flows

###### Remove Boiler blowdown wastewater (`heat_waste_blowdown`)

Boiler blowdown wastewater is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Boiler blowdown wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Remove Spent ion-exchange resin (`heat_waste_resin`)

Spent ion-exchange resin is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent ion-exchange resin
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent ion-exchange resin physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Elementary flows

###### Release Fossil carbon dioxide to air (`heat_release_co2`)

Fossil carbon dioxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Fossil carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Fossil carbon dioxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Nitrogen oxides (NOx) to air (`heat_release_nox`)

Nitrogen oxides (NOx) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Nitrogen oxides (NOx) to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Nitrogen oxides (NOx) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Sulfur oxides (SOx) to air (`heat_release_sox`)

Sulfur oxides (SOx) to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sulfur oxides (SOx) to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sulfur oxides (SOx) to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Particulate matter, ≤2.5 µm, to air (`heat_release_pm25`)

Particulate matter, ≤2.5 µm, to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Particulate matter, ≤2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Particulate matter, ≤2.5 µm, to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Carbon monoxide to air (`heat_release_co`)

Carbon monoxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_measurement`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Carbon monoxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

### Process: Onsite wastewater treatment (`onsite_wastewater_treatment`)

Foreground physical, chemical, and biological treatment of the two named wastewater streams. Include only when wastewater is treated inside the foreground facility boundary.

#### Inputs

##### Product flows

###### Use Grid electricity, medium voltage (`wwtp_input_electricity`)

Grid electricity, medium voltage is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Grid electricity, medium voltage physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, meter coverage, time interval, and any batch attribution calculation.

###### Use Ferric chloride (`wwtp_input_ferric_chloride`)

Ferric chloride is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ferric chloride physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Aluminium sulfate (`wwtp_input_aluminium_sulfate`)

Aluminium sulfate is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Aluminium sulfate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Aluminium sulfate physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Polyacrylamide flocculant (`wwtp_input_polyacrylamide`)

Polyacrylamide flocculant is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Polyacrylamide flocculant physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Sodium hydroxide (`wwtp_input_sodium_hydroxide`)

Sodium hydroxide is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Sodium hydroxide physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Use Calcium hydroxide (`wwtp_input_calcium_hydroxide`)

Calcium hydroxide is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_chemical_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Calcium hydroxide physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Waste flows

###### Treat High-strength sausage-processing cleaning wastewater (`wwtp_input_high_strength`)

High-strength sausage-processing cleaning wastewater is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: High-strength sausage-processing cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when High-strength sausage-processing cleaning wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Treat Low-strength final-rinse wastewater (`wwtp_input_final_rinse`)

Low-strength final-rinse wastewater is recorded as one atomic input exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Low-strength final-rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Low-strength final-rinse wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Remove Treated sausage-processing wastewater (`wwtp_output_treated_effluent`)

Treated sausage-processing wastewater is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Treated sausage-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Treated sausage-processing wastewater physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain meter resolution, calibration status, sampling interval, density conversion where used, and temporal coverage.

###### Remove Dissolved-air-flotation sludge (`wwtp_output_daf_sludge`)

Dissolved-air-flotation sludge is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Dissolved-air-flotation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sludge_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Dissolved-air-flotation sludge physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Biological wastewater-treatment sludge (`wwtp_output_biological_sludge`)

Biological wastewater-treatment sludge is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Biological wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sludge_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Biological wastewater-treatment sludge physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Wastewater bar-screen solids (`wwtp_output_screenings`)

Wastewater bar-screen solids is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Wastewater bar-screen solids
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Wastewater bar-screen solids physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Separated pork-fat scum (`wwtp_output_pork_fat_scum`)

Separated pork-fat scum is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Separated pork-fat scum
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Separated pork-fat scum physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Separated beef-fat scum (`wwtp_output_beef_fat_scum`)

Separated beef-fat scum is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Separated beef-fat scum
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Separated beef-fat scum physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

###### Remove Spent activated carbon (`wwtp_output_activated_carbon`)

Spent activated carbon is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Spent activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Record the measured foreground amount crossing this process boundary for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_waste_mass`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Spent activated carbon physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain scale resolution, calibration status, tare method, moisture basis where relevant, and batch reconciliation difference.

##### Elementary flows

###### Release Chemical oxygen demand to water (`wwtp_release_cod`)

Chemical oxygen demand to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chemical oxygen demand to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Biochemical oxygen demand, 5-day, to water (`wwtp_release_bod5`)

Biochemical oxygen demand, 5-day, to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Biochemical oxygen demand, 5-day, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Biochemical oxygen demand, 5-day, to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Total suspended solids to water (`wwtp_release_tss`)

Total suspended solids to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Total suspended solids to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Ammonium nitrogen to water (`wwtp_release_ammonium`)

Ammonium nitrogen to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonium nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonium nitrogen to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Nitrate nitrogen to water (`wwtp_release_nitrate`)

Nitrate nitrogen to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Nitrate nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Nitrate nitrogen to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Phosphate phosphorus to water (`wwtp_release_phosphate`)

Phosphate phosphorus to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Phosphate phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Phosphate phosphorus to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Chloride to water (`wwtp_release_chloride`)

Chloride to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Chloride to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Pork fat to water (`wwtp_release_pork_fat`)

Pork fat to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Pork fat to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Pork fat to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Beef fat to water (`wwtp_release_beef_fat`)

Beef fat to water is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Beef fat to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Beef fat to water physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Methane to air (`wwtp_release_methane`)

Methane to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Methane to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Nitrous oxide to air (`wwtp_release_nitrous_oxide`)

Nitrous oxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Nitrous oxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Biogenic carbon dioxide to air (`wwtp_release_biogenic_co2`)

Biogenic carbon dioxide to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Biogenic carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Biogenic carbon dioxide to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

###### Release Ammonia to air (`wwtp_release_ammonia`)

Ammonia to air is recorded as one atomic output exchange in this process; it is not a proxy for any other material, carrier, waste, or emission.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the batch-attributable amount only from the foreground records defined by the linked protocol.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming saleable reference product at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_load`
- Sources: `eu-pef-2021-2279`, `jrc-sa-bref-2024`
- UUID status: Unresolved; blank pending exact dual-kernel verification.
- Applicability: Record only when Ammonia to air physically crosses the process boundary for the single locked product formulation and treatment sequence; otherwise mark this atomic row not applicable.
- Uncertainty: Retain sampling or mass-balance method, detection limit, temporal representativeness, conversion records, and analytical uncertainty.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | all processes | Use batch-specific recipe, submeter, production-time, equipment-state, and waste records to avoid allocation wherever possible. | `eu-pef-2021-2279` |
| `recipe_partition` | shared formulation records | Partition material inputs by the actual locked batch recipe and scale tickets; do not use a category-average formula. | `eu-pef-2021-2279` |
| `utility_partition` | shared utilities | Partition shared electricity, heat, refrigeration, cleaning, and wastewater records using measured process time, meter intervals, mass throughput, or another documented causal driver. | `eu-pef-2021-2279` |
| `physical_relation` | multi-output processes | Use a physical causal relation when it explains resource use or emission generation; document the relation and calculation. | `eu-pef-2021-2279` |
| `mass_allocation` | unresolved physical split | Use mass allocation only when no more direct physical relation is available and all output masses share the same campaign basis. | `eu-pef-2021-2279` |
| `economic_residual` | residual multifunctionality | Use economic allocation only as a documented residual method when physical relations cannot represent the function; retain price period, geography, and sensitivity disclosure. | `eu-pef-2021-2279` |
| `rework_once` | internal rework | Do not allocate a second burden to internal rework that remains within the same locked batch mass balance. | `eu-pef-2021-2279` |
| `waste_no_credit` | waste outputs | Do not assign an avoided-product credit to a waste stream without a separately evidenced downstream substitution model outside this foreground package. | `eu-pef-2021-2279` |
| `route_no_average` | product families | Do not average fresh, cooked, fermented, dried, smoked, chilled, frozen, meat, organ, or blood routes into one reference output. | `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_material_mass` | formulation_material_receiving | animal-derived formulation inputs | delivery lot mass records | supplier lot id; species; anatomical material; receiving state; gross mass; tare mass; accepted mass; rejected mass | Calibrated receiving scale reconciled to supplier delivery documents. | kg | each delivery lot | complete production campaign | all incoming animal-material receiving points | Sum accepted net mass by exact material identity and allocate only to the locked batch. | Scale calibration, supplier specification, lot traceability, acceptance record |
| `cp_stage_electricity` | multiple | stage electricity | submeter interval records | meter id; opening reading; closing reading; timestamp; process state; batch id | Read a dedicated submeter; where one meter covers several batches, retain the causal attribution calculation. | kWh | each batch or metered interval | complete production campaign | all included foreground stages | Difference meter readings and attribute only intervals demonstrably serving the locked batch. | Meter calibration, interval log, coverage statement |
| `cp_refrigerant_reconciliation` | multiple | refrigerant makeup and release | refrigerant inventory records | refrigerant identity; opening stock; purchases; additions; recovery; transfer; closing stock; equipment id; batch attribution | Reconcile each refrigerant separately using inventory and service records. | kg | each service event and reporting campaign | complete production campaign | Calculate unrecovered release separately for R717, R744, and R290; do not net different refrigerants. | Service invoices, cylinder weights, stock reconciliation | undefined |
| `cp_material_waste_mass` | multiple | specific solid or product waste | waste scale records | row_id; exact material identity; gross mass; tare mass; destination; batch id | Weigh each named waste stream separately before storage or dispatch. | kg | each container or batch | complete production campaign | Sum net mass by row_id and locked batch; no cross-material consolidation. | Scale calibration, waste ticket, destination record | undefined |
| `cp_recipe_component_mass` | comminution_batching_mixing | recipe component | batch formulation records | component identity; supplier grade; lot id; gross mass; tare mass; actual charged mass; batch id | Use calibrated dosing scales or mass-flow records for every concrete component. | kg | each charge | complete production campaign | Sum actual charged mass by exact component and reconcile to the approved locked recipe. | Scale calibration, recipe revision, supplier specification | undefined |
| `cp_process_utility_volume` | comminution_batching_mixing | compressed air | utility meter records | meter id; opening reading; closing reading; pressure basis; temperature basis; batch id | Read the dedicated utility meter and preserve standard-condition conversion inputs. | m3 | each batch or interval | complete production campaign | Difference readings on one declared condition basis and attribute to the locked batch. | Meter calibration, condition-conversion record | undefined |
| `cp_intermediate_product_mass` | multiple | specific intermediate product | batch scale records | exact intermediate name; batch id; gross mass; tare mass; net mass; treatment state | Weigh each concrete intermediate at the named process transfer. | kg | each transfer | complete production campaign | Sum only the one locked product route and reconcile transfers between consecutive stages. | Scale calibration, batch traveller, route record | undefined |
| `cp_process_water_mass` | multiple | process water | water meter or weighed charge records | water source; meter id or scale id; opening; closing; charged mass; batch id | Meter or weigh the named process-water exchange separately from cleaning water. | kg | each batch or interval | complete production campaign | Calculate net water mass on the recorded density basis and attribute to the locked batch. | Meter or scale calibration, water-source record | undefined |
| `cp_wastewater_volume` | multiple | specific wastewater stream | flow-meter records | stream identity; meter id; opening; closing; timestamp; batch id | Meter each named wastewater stream before mixing with another stream. | m3 | continuous total with batch reconciliation | complete production campaign | Difference readings and attribute the measured volume to the locked campaign. | Flow-meter calibration, drainage map, batch reconciliation | undefined |
| `cp_direct_emission_measurement` | multiple | specific direct air emission | stack or workplace emission measurements | pollutant identity; sampling point; sample time; concentration; flow; detection limit; operating state; batch id | Use validated direct monitoring or sampling for the one named pollutant. | kg | each valid sampling campaign | representative operation during the production campaign | Integrate measured concentration and flow over attributable operating time; do not substitute an uncited factor. | Laboratory report, method id, detection limit, operating log | undefined |
| `cp_casing_mass` | portion_forming | specific casing | casing issue and return records | casing identity; species or polymer; lot id; issued mass; returned mass; trim mass; batch id | Weigh each exact casing material issued, returned, and trimmed. | kg | each casing lot and batch | complete production campaign | Issued mass minus verified return; retain trim as its own waste row. | Scale calibration, casing specification, issue-return log | undefined |
| `cp_purchased_heat` | multiple | purchased steam or purchased hot water | utility meter and invoice records | carrier identity; meter id; mass or energy; inlet state; outlet state; timestamp; batch id | Meter purchased steam and purchased hot water as separate carriers. | MJ | each batch or utility interval | complete production campaign | Use metered energy or calculate enthalpy only from recorded state data; never combine the two carriers. | Meter calibration, invoice, state record | undefined |
| `cp_internal_heat_output` | multiple | onsite steam or onsite hot water | heat-output meter records | carrier identity; output meter id; mass; temperature; pressure; enthalpy basis; timestamp; batch id | Meter onsite-generated steam and onsite-generated hot water separately at the generator outlet and point of use. | MJ | each batch or utility interval | complete production campaign | Reconcile generator output and process use by carrier; prevent double counting with purchased heat. | Meter calibration, state record, heat-balance reconciliation | undefined |
| `cp_fuel_inventory` | multiple | specific fuel | tank, mass-flow, or invoice records | fuel identity; opening stock; receipts; closing stock; meter reading; density; batch id | Reconcile natural gas, diesel, and LPG separately; preserve supplier lower-heating-value data if energy conversion is required. | kg | each batch or reporting interval | complete production campaign | Opening plus receipts minus closing and verified transfers, attributed only to the operating interval serving the locked batch. | Meter or tank calibration, invoice, supplier fuel specification | undefined |
| `cp_packaging_material_mass` | packaging_cold_storage_release | specific packaging material | packaging issue and return records | material identity; supplier grade; lot id; issued mass; returned mass; scrap mass; batch id | Weigh each packaging material separately; do not infer one material from total pack count. | kg | each packaging lot and batch | complete production campaign | Issued mass minus verified return; reconcile scrap to the matching material-specific waste row. | Scale calibration, supplier specification, issue-return log | undefined |
| `cp_final_product_mass` | packaging_cold_storage_release | one concrete final product | release scale and quality records | exact product name; animal and tissue identity; formulation id; route sequence; market state; gross mass; tare mass; packaging mass; conforming net mass; batch id | Weigh conforming saleable food mass after final treatment and before including packaging mass. | kg | each released batch | complete production campaign | Sum only conforming net product for one locked product row; exclude packaging and all rejects. | Scale calibration, release certificate, product specification, route record | undefined |
| `cp_cleaning_water_mass` | hygiene_cleaning_sanitation | cleaning water | dedicated meter records | meter id; opening; closing; cleaning event id; equipment or area; batch attribution | Meter potable cleaning water separately from formulation and cooking water. | kg | each cleaning event | complete attributable cleaning campaign | Difference readings and attribute only the cleaning event serving the locked campaign. | Meter calibration, sanitation schedule, event log | undefined |
| `cp_cleaning_chemical_mass` | hygiene_cleaning_sanitation | specific cleaning chemical | chemical issue records | chemical identity; concentration as supplied; lot id; issued mass; returned mass; event id; batch attribution | Weigh sodium hydroxide, nitric acid, phosphoric acid, peracetic acid, and sodium hypochlorite separately. | kg | each cleaning event | complete attributable cleaning campaign | Issued mass minus verified return for the exact chemical; retain concentration as supplied. | Scale calibration, safety data sheet, chemical issue log | undefined |
| `cp_wwtp_chemical_mass` | onsite_wastewater_treatment | specific wastewater-treatment chemical | chemical dosing records | chemical identity; concentration as supplied; opening stock; receipts; closing stock; dosing meter; campaign id | Reconcile each named treatment chemical separately. | kg | each treatment campaign | complete attributable treatment campaign | Opening plus receipts minus closing and verified transfer, reconciled with dosing records. | Scale or dosing-pump calibration, invoice, stock record | undefined |
| `cp_sludge_mass` | onsite_wastewater_treatment | specific sludge | dewatered sludge scale records | sludge identity; gross mass; tare mass; dry matter; destination; campaign id | Weigh each named sludge separately and retain measured dry-matter content. | kg | each container or dispatch | complete attributable treatment campaign | Sum net wet mass by sludge identity; disclose dry matter without converting unless required. | Scale calibration, dry-matter test, dispatch ticket | undefined |
| `cp_wastewater_pollutant_load` | onsite_wastewater_treatment | specific water or air pollutant | flow and laboratory records | pollutant identity; sample point; concentration; detection limit; wastewater flow; air flow where relevant; time interval; campaign id | Use validated sampling for each named pollutant and pair it with the corresponding measured flow. | kg | each representative sampling interval | complete attributable treatment campaign | Calculate load as concentration times matching flow and integrate over the attributable campaign; keep each pollutant separate. | Laboratory accreditation, analytical method, detection limit, flow-meter calibration | undefined |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference` | all inventory amounts | normalized_amount = batch_attributable_amount / net_conforming_product_mass | batch_attributable_amount; net_conforming_product_mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `recipe_reconciliation` | formulation | recipe_difference = accepted_animal_materials + charged_components - mixture_output - named_losses | accepted material masses; component charges; mixture output; named losses | recipe mass-balance difference | `eu-pef-2021-2279` |
| `forming_reconciliation` | portion forming | forming_difference = mixture_input + casing_input - formed_product_output - casing_trim - product_reject | mixture mass; casing mass; formed output; trim; reject | forming mass-balance difference | `eu-pef-2021-2279` |
| `refrigerant_release` | each refrigerant | release = opening_stock + purchases + additions - closing_stock - recovered_mass - verified_transfers | refrigerant inventory fields for one chemical | unrecovered refrigerant release | `eu-pef-2021-2279` |
| `wastewater_pollutant_load` | each wastewater pollutant | pollutant_load = concentration × matching_wastewater_volume with documented unit conversion | pollutant concentration; matching flow volume | pollutant mass | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `packaging_use` | each packaging material | packaging_use = issued_mass - returned_unused_mass | issued mass; returned unused mass | packaging material input | `eu-pef-2021-2279` |
| `packaging_scrap` | each packaging material | packaging_scrap = trim_mass + damaged_mass + unrecovered_setup_mass | trim; damaged material; setup loss | material-specific packaging waste | `eu-pef-2021-2279` |
| `fuel_reconciliation` | each fuel | fuel_use = opening_stock + receipts - closing_stock - verified_transfers | stock and meter records for one fuel | fuel mass attributable to the campaign | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `heat_reconciliation` | steam and hot water | heat_difference = measured_generator_output + purchased_heat - measured_process_heat_use - measured_distribution_loss | carrier-specific generator, purchase, use, and loss records | carrier-specific heat reconciliation | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `yield` | final product | conforming_yield = net_conforming_product_mass / total_locked_recipe_input_mass | net conforming output; locked recipe input mass | route-specific conforming yield | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference and final output | Retain exact product name, animal species, skeletal meat or named organ or blood identity, formulation revision, casing or shape-forming method, ordered treatment sequence, and final market state. | Approved product specification and batch traveller |
| `dq_lot_traceability` | animal and recipe inputs | Retain supplier, lot, receiving state, acceptance decision, and link from each concrete input to the locked batch. | Supplier certificate, receiving log, batch genealogy |
| `dq_measurement` | mass and utility records | Use calibrated equipment and retain raw readings, tare, units, timestamps, and operator or automated record identity. | Calibration certificate and immutable raw record |
| `dq_treatment_parameters` | curing, fermentation, drying, smoking and heat treatment | Retain actual time, temperature, humidity, airflow, smoke application, and internal product temperature fields applicable to the locked route. | Validated process record and control chart |
| `dq_cold_chain` | receiving, cooling and storage | Retain continuous or batch-resolved temperature records and deviations for chilled or frozen material and product. | Temperature logger record and deviation disposition |
| `dq_completeness` | complete LCI | Account for every concrete recipe component, utility carrier, refrigerant, cleaning chemical, package material, product, reject, waste stream, wastewater pollutant, and direct air emission that physically crosses the boundary. | Row-level completeness checklist tied to process map |
| `dq_mass_balance` | material processes | Reconcile recipe, forming, treatment, packaging, product, and waste masses for the same campaign; investigate unexplained differences. | Signed batch mass-balance worksheet |
| `dq_temporal` | campaign data | Use records from the same production campaign or a disclosed representative period with exact route equivalence. | Time-stamped production and utility records |
| `dq_specificity` | shared records | Document every attribution driver and demonstrate that it represents the single locked product rather than a facility or CPC-category average. | Allocation worksheet and meter map |
| `dq_wastewater` | wastewater and pollutants | Retain sampling point, method, detection limit, matching flow interval, treatment state, and laboratory accreditation. | Laboratory report and flow-meter record |
| `dq_emissions` | direct emissions | Retain pollutant-specific monitoring or sampling method, operating state, detection limit, and temporal representativeness. | Monitoring report and operating log |
| `dq_no_defaults` | all quantitative rows | Do not replace missing foreground data with uncited default amounts, ranges, or estimates in this candidate PCR. | Data-gap register identifying the missing record |
| `dq_source_transparency` | method rules | Retain source identifiers and disclose where CPC scope, Codex process categories, JRC process structure, or PEF modelling rules are applied. | Source-to-rule traceability record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | reference flow | Reference product UUID shall equal `d4e41d5c-a905-4fb7-ad9d-8f442be1f833`, flow property UUID shall equal `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID shall equal `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit shall be kg. | `un-cpc-3-2025` |
| `val_single_route` | dataset identity | Reject a package that does not lock one concrete product form, named animal and tissue or blood recipe, exact formulation revision, ordered treatment sequence, and final market state. | `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995` |
| `val_scope` | product identity | Reject complete meals and any galantine, meat paste, pâté, or rillettes output that is not supplied in a casing or sausage form. | `un-cpc-3-2025` |
| `val_reference_mass` | reference amount | Reference amount shall be 1 kg net conforming edible product and shall exclude packaging. | `eu-pef-2021-2279` |
| `val_atomic_selected_flow` | inventory cards | Reject any Selected flow that names a collection, selector, alternative list, unspecified ingredient, seasoning, casing, carrier, packaging material, waste, pollutant, or emission. | `eu-pef-2021-2279` |
| `val_uuid_policy` | inventory identity | Every non-reference UUID shall remain blank unless both exact hybrid-search and public state-100 direct-read evidence confirm the same atomic semantics. | `eu-pef-2021-2279` |
| `val_manifest_closure` | inventory identity | Every blank inventory UUID row_id shall have exactly one unresolved manifest entry with the same candidate flow and a concrete rejection reason. | `eu-pef-2021-2279` |
| `val_process_map` | process inventory | Every required process shall have one detailed section; each conditional process shall be present exactly when its named operation occurs in the locked route. | `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005` |
| `val_recipe_completeness` | formulation | Reject a package with any actual meat, named organ, blood, fat, water, ice, salt, spice, additive, binder, starter, or casing hidden inside an aggregate recipe row. | `eu-pef-2021-2279`, `codex-cxs-192-1995` |
| `val_casing_identity` | portion forming | Require the exact animal species for natural casing or exact polymer for manufactured casing; reject a generic casing exchange. | `codex-cxs-192-1995` |
| `val_energy_split` | utilities | Require separate rows for grid electricity, purchased steam, purchased hot water, onsite steam, onsite hot water, natural gas, diesel, and LPG when applicable. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `val_heat_double_count` | heat | Reject simultaneous counting of purchased heat and its onsite fuel-generation burden for the same heat quantity. | `eu-pef-2021-2279` |
| `val_refrigerant_split` | refrigeration | Require separate makeup and release reconciliation for each refrigerant actually used; reject a generic refrigerant flow. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `val_chemical_split` | chemicals | Require one row per exact additive, curing agent, cleaning chemical, sanitiser, and wastewater-treatment chemical. | `eu-pef-2021-2279`, `codex-cxs-192-1995`, `codex-cxc-58-2005` |
| `val_packaging_split` | packaging | Require one row per exact packaging material and a matching material-specific scrap row when scrap occurs. | `eu-pef-2021-2279` |
| `val_product_output` | final output | Exactly one concrete final-product output row shall carry the 1 kg normalized reference amount; all other final-product rows shall be not applicable. | `un-cpc-3-2025`, `eu-pef-2021-2279` |
| `val_waste_split` | wastes | Require separate rows for each concrete product reject, casing trim, packaging scrap, sludge, residue, and wastewater stream that occurs. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `val_pollutant_split` | emissions | Require one row per named water pollutant and one row per named air emission; reject a combined pollutants or emissions row. | `eu-pef-2021-2279`, `jrc-sa-bref-2024` |
| `val_mass_balance` | mass balance | Recipe, forming, treatment, final product, reject, and waste records shall reconcile for the same campaign or disclose and investigate the difference. | `eu-pef-2021-2279` |
| `val_nonnegative` | amounts | Reject negative mass, energy, volume, concentration, or emission values. | `eu-pef-2021-2279` |
| `val_foreground_modes` | amount production | Inventory amounts shall use foreground_record or calculated_value only; reject fixed_value, modelled_estimate, reasoned_estimate, and uncited ranges. | `eu-pef-2021-2279` |
| `val_protocol_links` | collection | Every collected_record or calculated_from_collection row shall reference an existing collection protocol. | `eu-pef-2021-2279` |
| `val_source_whitelist` | sources | Source ids shall be limited to the retained UN CPC 3.0 source, JRC135916, Recommendation (EU) 2021/2279, CXC 58-2005, and CXS 192-1995. | `un-cpc-3-2025`, `jrc-sa-bref-2024`, `eu-pef-2021-2279`, `codex-cxc-58-2005`, `codex-cxs-192-1995` |
| `val_bilingual` | translation | English and Chinese shall preserve identical ordered process_id, row_id, direction, flow_type, Selected flow, controlled tokens, protocol ids, source ids, and normative rule ids. | `eu-pef-2021-2279` |
| `val_temperature_records` | treated products | Require actual time and temperature records for heat treatment and actual time, temperature, humidity, or airflow records for each applicable conditioning step. | `codex-cxc-58-2005`, `codex-cxs-192-1995` |
| `val_unlisted_variant` | scope variants | Reject use of an aggregate fallback row for an in-scope unlisted species, organ, blood source, formulation component, product form, package, waste, pollutant, or emission; add an exact atomic row first. | `un-cpc-3-2025`, `eu-pef-2021-2279`, `codex-cxs-192-1995` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` candidate suitable for later reviewed use as a `background_dataset` only when all exact-route requirements and validation rules are satisfied. |
| downstream_use | Product-specific process and lifecycle-model construction for the same concrete product form, animal-derived formulation, treatment sequence, market state, geography, technology, and period. |
| allowed_use | Use for a matching sausage or sausage-like product when the complete product identity, recipe, applicable process map, atomic inventory, allocation, data quality, and unresolved UUID disclosures are available. |
| excluded_use | Do not use as a CPC-wide average, a proxy across animal species, organs, blood sources, recipes, casing systems, treatment routes, or market states, or for complete meals and related products outside a casing or sausage form. |
| required_metadata | PCR id; CPC 21184; exact product name; animal species and anatomical material identity; formulation revision; batch id and dates; ordered route; casing or forming method; treatment controls; final state; net reference mass; packaging composition; site and geography; technology; allocation method; source ids; UUID-resolution status. |
| required_quality_disclosure | Meter and scale coverage; calibration; recipe and mass-balance differences; conditional-process applicability; cold-chain and treatment records; sampling methods and detection limits; shared-resource attribution; data gaps; unresolved UUID rows; deviations and corrective actions. |
| update_trigger | New product form, animal species, organ, blood source, formulation revision, casing, treatment technology, refrigerant, package material, waste route, pollutant, emission, site configuration, source revision, or verified Tiangong UUID. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0, retained raw structure dated 30 June 2025, code 21184, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-13). | Exact CPC 21184 category title and semantic scope boundary, including the distinction from complete meals and related non-sausage-form products. |
| `jrc-sa-bref-2024` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, EUR 31752 EN, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 (retrieved 2026-08-13). | Process decomposition for animal-derived material handling, utilities, refrigeration, cleaning, wastes, wastewater treatment, and named emissions; no default quantities imported. |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-13). | Product-specific bill of materials, company-specific manufacturing data, complete LCI, allocation, data quality, reporting, and verification. |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+58-2005%2FCXC_058e.pdf (retrieved 2026-08-13). | Manufactured-meat process control, sanitation, wastewater drainage, temperature control, heat-treatment parameter records, storage, and batch verification structure; no default quantities imported. |
| `codex-cxs-192-1995` | `standard` | Codex Alimentarius, General Standard for Food Additives, CXS 192-1995, food-category descriptions 08.3 and 08.4, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+192-1995%2FCXS_192e.pdf (retrieved 2026-08-13). | Official full-text taxonomy for cured, dried, fermented, heat-treated and frozen comminuted meat products and concrete natural, collagen, cellulose, and synthetic casing identities; additive limits were not imported. |
