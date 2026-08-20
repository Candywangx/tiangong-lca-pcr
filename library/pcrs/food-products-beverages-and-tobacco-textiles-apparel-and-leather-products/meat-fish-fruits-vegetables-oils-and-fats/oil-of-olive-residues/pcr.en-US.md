---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-of-olive-residues
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Oil of olive residues

## 1. Scope and Applicability

This PCR covers oil obtained by treating olive pomace with a non-halogenated solvent or another physical treatment, including crude olive-pomace oil, refined olive-pomace oil, and olive-pomace oil composed of refined olive-pomace oil and virgin olive oil. The dataset must declare the commercial grade, extraction route, refining status, blend status, package state, geography, and gate. The representative route is wet olive-pomace drying, technical-hexane extraction with solvent recovery, chemical refining, and bulk delivery at the production plant.

The PCR excludes virgin olive oil and refined olive oil produced directly from olives, the olive-pomace feedstock itself, exhausted pomace sold or burned as fuel, oil produced by re-esterification, mixtures with oils of kinds other than virgin olive oil where the declared grade permits that blend, chemically modified oil, and downstream food preparation or use. Product naming and grade declarations must not describe olive-pomace oil as “olive oil”. `unsd-cpc-3-0-2025`, `fao-who-cxs-33-1981-2024`, and `ioc-trade-standard-2026` define the category and product distinctions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-of-olive-residues |
| classification_refs | CPC 3.0: 21673, Oil of olive residues |
| covered_products | Crude olive-pomace oil; refined olive-pomace oil; olive-pomace oil composed of refined olive-pomace oil and virgin olive oil |
| excluded_products | Virgin olive oil; refined olive oil produced directly from olives; olive pomace as feedstock; exhausted olive pomace; re-esterified oil; mixtures with other kinds of oil; chemically modified oil |
| representative_product | Refined olive-pomace oil from dried olive pomace and recovered technical-hexane extraction |
| production_route | Olive-pomace receipt; drying; solvent extraction; solvent distillation and recovery; chemical refining when required; blending when declared; bulk storage or conditional consumer packaging |
| market_state | Declared crude, refined, or blended grade at the production-plant gate, in bulk or in a declared package |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Oil obtained from olive pomace for further refining, technical use, food manufacture, or direct consumption as permitted for the declared grade |
| How much | 1 kg |
| How well | Conforming to the declared crude, refined, or blended olive-pomace-oil grade and its applicable composition, quality, residual-solvent, moisture, impurity, and packaging requirements |
| How long or cycle | One production batch delivered at the declared factory gate; no service life is assigned |
| reference_flow_link | Reference amount and Tiangong product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Oil of olive residues `a398f8c0-8c39-4924-ae53-bb901e1eac90` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | commercial grade; crude or refined status; solvent or other physical extraction route; refining method; blend composition when applicable; edible or technical use; moisture basis; package state; geography; production period; declared gate |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference flow as net oil mass at the declared gate; container and pallet mass are separate exchanges. |
| `oil_grade_basis` | product identity and conformance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether the mass is crude olive-pomace oil, refined olive-pomace oil, or the permitted blend; do not combine grades in one reference flow without a mass-weighted blend record. |
| `solution_mass_basis` | sodium hydroxide solution | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record formulated solution mass and concentration; convert to active sodium hydroxide only in a separately reported calculation field. |
| `moisture_basis_consistency` | olive pomace and extracted pomace | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass and moisture or dry-matter fraction for each batch so pomace inputs, fuel use, residues, and oil yield remain comparable. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_pomace_to_gate` | foreground production | Start with olive pomace received at the extractor gate and include drying, extraction, solvent recovery, refining required for the declared grade, blending when applicable, storage, loading, and packaging when the declared gate includes it. | `alonso-farinas-olive-pomace-oil-lca-2020`; `fao-who-cxc-36-1987-2024` |
| `boundary_upstream_links` | purchased inputs | Link olive pomace, electricity, each fuel, water, each chemical, each packaging component, and treatment of each exported waste to geographically and temporally representative upstream datasets; do not hide them in combined utility or packaging exchanges. | `eu-environmental-footprint-2021-2279` |
| `boundary_direct_emissions` | foreground emissions | Include separately measured or calculated technical-hexane loss and each combustion emission that crosses the environment boundary. | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `boundary_capital_goods` | infrastructure | Exclude construction and decommissioning only when the study declares that omission and demonstrates it is immaterial for the intended use; otherwise include them consistently. | `alonso-farinas-olive-pomace-oil-lca-2020`; `eu-environmental-footprint-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | received_olive_pomace_at_extractor_gate |
| starting_condition_role | disclosed product input with upstream production and transport supplied by linked datasets |
| product_classification_scope | CPC 3.0 subclass 21673, Oil of olive residues |
| recursive_input_rule | An input already in CPC 21673, such as refined olive-pomace oil entering blending or finished oil entering storage or packaging, remains an explicit product input and links to its preceding foreground dataset; do not re-expand that preceding production inside the consuming process. |
| upstream_dataset_requirement | Link olive-pomace production and inbound transport separately and disclose origin mill, two-phase or three-phase origin when known, received mass, moisture, and transport distance. |
| disclosure | Declare product grade, starting pomace condition, solvent or physical extraction route, drying fuel, refining and blending status, allocation choice, packaging state, geography, reference period, and all excluded stages. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| integrated_pomace_oil_production | Integrated pomace drying, oil extraction, solvent recovery, and grade-specific refining | required |  | foreground production | 1 kg declared oil-of-olive-residues output |
| grade_specific_blending | Blending refined olive-pomace oil with virgin olive oil | conditional | Include only for a declared olive-pomace-oil blend grade. | foreground formulation | 1 kg blended olive-pomace oil |
| bulk_storage_and_loading | Bulk storage and loading | required |  | foreground storage and dispatch | 1 kg oil delivered at the declared bulk or packaging gate |
| consumer_packaging | Consumer packaging | conditional | Include when the declared gate is packaged product rather than bulk oil. | foreground packaging | 1 kg net packaged oil |

### Process: Integrated pomace drying, oil extraction, solvent recovery, and grade-specific refining (`integrated_pomace_oil_production`)

This process includes rotary drying, technical-hexane extraction, distillation and recovery of the solvent, and chemical refining when required for the declared grade. `alonso-farinas-olive-pomace-oil-lca-2020` reports one gate-to-gate case per metric tonne of wet olive-mill solid residue. That single case supports process context and the foreground fields to collect, but it is non-constraining evidence and must not populate an amount range.

#### Inputs

##### Product flows

###### Received olive pomace feedstock (`integrated_received_olive_pomace`)

Record the wet olive pomace crossing the extractor gate, including its moisture and origin condition.

- Selected flow: Olive pomace, olive mill solid residue `95c56835-2417-4ffa-8375-d0df138fd887`
- Flow property / unit: Mass / kg
- Amount rule: measured received wet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Purchased electricity (`integrated_grid_electricity`)

Record metered electricity entering the integrated production process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered purchased electricity minus separately metered exported electricity; do not net electricity against fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Natural gas used as drying fuel (`integrated_natural_gas`)

Record natural gas only when it is the actual drying fuel; the extracted-pomace fuel route is a separate card.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: metered or invoiced natural-gas volume used for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output for the natural-gas drying route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Extracted olive pomace used as drying fuel (`integrated_extracted_pomace_fuel`)

Record the measured mass of extracted olive pomace combusted on site when biomass replaces natural gas.

- Selected flow: Extracted olive pomace
- Flow property / unit: Mass / kg
- Amount rule: measured extracted-pomace mass charged to the dryer combustion unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output for the extracted-pomace drying route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Diesel used for extraction heat (`integrated_diesel`)

Record diesel only when the installed extraction route uses it for process heat.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: measured or invoiced diesel mass attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Process water (`integrated_process_water`)

Record process water entering extraction and chemical refining; tank-rinse water in storage is separate.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or mass-equivalent process-water input attributable to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Technical hexane makeup (`integrated_technical_hexane`)

Record fresh technical hexane crossing the boundary; recovered solvent recirculated inside the process is not counted again.

- Selected flow: Technical hexane
- Flow property / unit: Mass / kg
- Amount rule: purchased makeup hexane assigned to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `fao-who-cxs-33-1981-2024`; `alonso-farinas-olive-pomace-oil-lca-2020`

###### Sodium hydroxide solution for chemical refining (`integrated_sodium_hydroxide_solution`)

Record the formulated caustic-soda solution only when chemical neutralization is performed; disclose concentration.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: measured solution mass and concentration charged to neutralization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg refined olive-pomace oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Declared oil of olive residues output (`integrated_oil_output`)

Record the net mass of the declared crude or refined grade leaving integrated production.

- Selected flow: Oil of olive residues `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- Flow property / unit: Mass / kg
- Amount rule: measured net product mass at the process gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026`

###### Exported extracted olive pomace (`integrated_exhausted_pomace_output`)

Record only the extracted pomace that leaves the foreground system after subtracting the measured mass combusted on site.

- Selected flow: Extracted olive pomace
- Flow property / unit: Mass / kg
- Amount rule: measured exported mass after internal fuel use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

##### Waste flows

###### Soap stock sent to treatment (`integrated_soap_stock_waste`)

Record soap stock from chemical neutralization as a waste output unless reviewed evidence supports a separately marketed co-product.

- Selected flow: Soap stock from olive-pomace-oil refining
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg refined olive-pomace oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Refinery wastewater sent to treatment (`integrated_wastewater`)

Record wastewater as one aqueous waste stream; do not combine it with soap stock or solid pomace.

- Selected flow: Wastewater from olive-pomace-oil refining
- Flow property / unit: Volume / m3
- Amount rule: metered discharge volume sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Biomass combustion ash (`integrated_biomass_ash`)

Record ash only for the extracted-pomace fuel route and link its actual treatment or beneficial-use dataset.

- Selected flow: Ash from extracted olive-pomace combustion
- Flow property / unit: Mass / kg
- Amount rule: measured ash mass leaving the combustion unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output for the extracted-pomace fuel route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

##### Elementary flows

###### Technical hexane emitted to air (`integrated_hexane_air`)

Record fugitive and point-source technical-hexane loss to air after recovered solvent has been recirculated.

- Selected flow: Hexane emitted to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or documented solvent mass-balance loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Fossil carbon dioxide emitted to air (`integrated_fossil_co2_air`)

Record fossil carbon dioxide from the actual fuel route separately from biogenic carbon dioxide.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured fuel consumption and a documented combustion factor, or use verified stack measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Methane emitted to air (`integrated_methane_air`)

Record methane from foreground fuel combustion as a separate elementary emission.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured fuel consumption and a documented combustion factor, or use verified stack measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

###### Dinitrogen monoxide emitted to air (`integrated_n2o_air`)

Record dinitrogen monoxide from foreground fuel combustion as a separate elementary emission.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured fuel consumption and a documented combustion factor, or use verified stack measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg declared oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_integrated_batch_inventory`
- Sources: `alonso-farinas-olive-pomace-oil-lca-2020`

### Process: Blending refined olive-pomace oil with virgin olive oil (`grade_specific_blending`)

#### Inputs

##### Product flows

###### Refined olive-pomace oil entering blending (`blend_refined_pomace_oil`)

Record the mass of refined olive-pomace oil transferred from the preceding process dataset.

- Selected flow: Oil of olive residues `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass with grade declared as refined olive-pomace oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg blended olive-pomace oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_batch_inventory`
- Sources: `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026`

###### Virgin olive oil entering blending (`blend_virgin_olive_oil`)

Record virgin olive oil as its own product input and retain its grade and supplier dataset.

- Selected flow: Virgin olive oil
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg blended olive-pomace oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_batch_inventory`
- Sources: `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026`

###### Electricity used for blending (`blend_electricity`)

Record metered electricity used by pumps, mixing, and controls.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered blending electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg blended olive-pomace oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_batch_inventory`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Blended olive-pomace oil (`blend_oil_output`)

Record the net mass of the declared olive-pomace-oil blend.

- Selected flow: Oil of olive residues `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- Flow property / unit: Mass / kg
- Amount rule: measured blended product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg blended olive-pomace oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_batch_inventory`
- Sources: `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026`

##### Waste flows

###### Off-specification blended oil (`blend_offspec_oil`)

Record rejected blended oil sent to the declared rework or treatment route.

- Selected flow: Off-specification olive-pomace oil
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass leaving the blending process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted blended oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_batch_inventory`
- Sources:

##### Elementary flows

### Process: Bulk storage and loading (`bulk_storage_and_loading`)

#### Inputs

##### Product flows

###### Finished oil entering bulk storage (`storage_finished_oil_input`)

Record finished oil received from integrated production or blending.

- Selected flow: Oil of olive residues `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg oil delivered from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_storage_loading_inventory`
- Sources: `fao-who-cxc-36-1987-2024`

###### Electricity used for storage and loading (`storage_electricity`)

Record electricity used by pumps, instrumentation, and any electric trace heating.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered storage and loading electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg oil delivered from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_storage_loading_inventory`
- Sources: `fao-who-cxc-36-1987-2024`

###### Hot water used for tank heating (`storage_hot_water`)

Record delivered hot-water heat only when hot-water coils are used; steam is a separate alternative card.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered thermal energy from hot water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg oil delivered from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_storage_loading_inventory`
- Sources: `fao-who-cxc-36-1987-2024`

###### Low-pressure steam used for tank heating (`storage_steam`)

Record delivered steam heat only when steam coils or tracing are used; hot water is a separate alternative card.

- Selected flow: Steam, low pressure
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered steam energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg oil delivered from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_storage_loading_inventory`
- Sources: `fao-who-cxc-36-1987-2024`

###### Fresh water used for tank rinsing (`storage_rinse_water`)

Record fresh-water rinsing separately from production-process water.

- Selected flow: Fresh water
- Flow property / unit: Mass / kg
- Amount rule: metered rinse-water input assigned to the storage campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg oil delivered from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_storage_loading_inventory`
- Sources: `fao-who-cxc-36-1987-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Oil delivered at the bulk or packaging gate (`storage_oil_output`)

Record the net oil mass dispatched to bulk delivery or the packaging process.

- Selected flow: Oil of olive residues `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched net oil mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg oil delivered from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_storage_loading_inventory`
- Sources: `fao-who-cxc-36-1987-2024`

##### Waste flows

###### Tank-rinse wastewater (`storage_rinse_wastewater`)

Record the aqueous rinse stream sent to the declared treatment route.

- Selected flow: Wastewater from edible-oil tank rinsing
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg oil delivered from storage
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bulk_storage_loading_inventory`
- Sources: `fao-who-cxc-36-1987-2024`

##### Elementary flows

### Process: Consumer packaging (`consumer_packaging`)

Each packaging component below is a separate exchange. Apply only the cards matching the declared packaging bill of materials. For EU final-consumer olive-pomace oil, `eu-olive-oil-marketing-2022-2104` requires packages of no more than five litres with a first-opening system that cannot be resealed.

#### Inputs

##### Product flows

###### Bulk oil entering packaging (`packaging_bulk_oil_input`)

Record the net oil mass transferred from bulk storage.

- Selected flow: Oil of olive residues `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- Flow property / unit: Mass / kg
- Amount rule: measured net oil input to the filling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Electricity used for packaging (`packaging_electricity`)

Record electricity used by filling, capping, labelling, conveying, and pallet wrapping.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered packaging-line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Glass bottle (`packaging_glass_bottle`)

Record glass bottle mass only for a glass-bottle format.

- Selected flow: Glass bottle
- Flow property / unit: Mass / kg
- Amount rule: purchased bottle mass less separately recorded unused returnable stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources: `eu-olive-oil-marketing-2022-2104`

###### Polyethylene terephthalate bottle (`packaging_pet_bottle`)

Record PET bottle mass only for a PET-bottle format.

- Selected flow: Polyethylene terephthalate bottle
- Flow property / unit: Mass / kg
- Amount rule: purchased bottle mass less separately recorded unused returnable stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources: `eu-olive-oil-marketing-2022-2104`

###### Polypropylene tamper-evident closure (`packaging_pp_closure`)

Record the closure mass separately from the bottle.

- Selected flow: Polypropylene tamper-evident closure
- Flow property / unit: Mass / kg
- Amount rule: purchased closure mass consumed by accepted and rejected packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources: `eu-olive-oil-marketing-2022-2104`

###### Paper label (`packaging_paper_label`)

Record paper-label mass separately from the container and closure.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: issued label mass consumed by accepted and rejected packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources: `eu-olive-oil-marketing-2022-2104`

###### Corrugated fibreboard carton (`packaging_corrugated_carton`)

Record corrugated carton mass separately from primary packaging.

- Selected flow: Corrugated fibreboard carton
- Flow property / unit: Mass / kg
- Amount rule: issued carton mass consumed by accepted and rejected cases
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Wooden pallet (`packaging_wood_pallet`)

Record the allocated mass of non-returned wooden pallets; disclose the reuse count for reusable pallets.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: pallet mass divided by verified reuse count and allocated to dispatched packaged oil
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Low-density polyethylene stretch film (`packaging_ldpe_stretch_film`)

Record pallet stretch-film mass separately from cartons and primary packaging.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: issued film mass consumed by dispatched pallets
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged oil of olive residues (`packaging_oil_output`)

Record net oil mass only; packaging mass remains in the separate input cards.

- Selected flow: Oil of olive residues `a398f8c0-8c39-4924-ae53-bb901e1eac90`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net fill mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources: `eu-olive-oil-marketing-2022-2104`

##### Waste flows

###### Waste glass from bottle breakage (`packaging_waste_glass`)

Record rejected or broken glass separately from every other packaging waste.

- Selected flow: Waste glass
- Flow property / unit: Mass / kg
- Amount rule: measured glass waste leaving the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Waste polyethylene terephthalate (`packaging_waste_pet`)

Record rejected PET bottle material separately from every other packaging waste.

- Selected flow: Waste polyethylene terephthalate
- Flow property / unit: Mass / kg
- Amount rule: measured PET waste leaving the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Waste polypropylene (`packaging_waste_pp`)

Record rejected closure material separately from every other packaging waste.

- Selected flow: Waste polypropylene
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene waste leaving the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Waste paper labels (`packaging_waste_paper`)

Record rejected paper labels separately from every other packaging waste.

- Selected flow: Waste paper
- Flow property / unit: Mass / kg
- Amount rule: measured paper-label waste leaving the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Waste corrugated paperboard (`packaging_waste_paperboard`)

Record rejected corrugated carton material separately from every other packaging waste.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-paperboard waste leaving the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Waste low-density polyethylene (`packaging_waste_ldpe`)

Record stretch-film waste separately from every other packaging waste.

- Selected flow: Waste low-density polyethylene
- Flow property / unit: Mass / kg
- Amount rule: measured LDPE film waste leaving the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

###### Off-specification packaged oil (`packaging_offspec_oil`)

Record rejected oil drained from nonconforming packages and its declared rework or treatment route.

- Selected flow: Off-specification olive-pomace oil
- Flow property / unit: Mass / kg
- Amount rule: measured rejected oil mass leaving the packaging process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_run_inventory`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | separately metered processes and batches | Avoid allocation by subdividing drying, extraction, refining, blending, storage, and packaging records wherever direct metering or batch records permit. | `eu-environmental-footprint-2021-2279` |
| `allocation_internal_pomace_fuel` | extracted pomace combusted on site | Treat measured extracted pomace burned in the dryer as an internal product input and subtract it from exported extracted-pomace output; do not credit it again as exported fuel. | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `allocation_exported_co_products` | exported extracted olive pomace and other marketable outputs | If subdivision cannot isolate burdens, apply a documented physical relationship that reflects the process function; use another relationship only after explaining why subdivision, system expansion, and physical allocation are not feasible. | `eu-environmental-footprint-2021-2279` |
| `allocation_soap_stock` | soap stock | Treat soap stock as waste unless reviewed evidence demonstrates a marketable product and the foreground records support co-product treatment. | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `allocation_disclosure` | all multifunctional processes | Report output masses, internal use, exported quantities, chosen allocation method, factors, prices or physical parameters, reference period, and sensitivity result. | `eu-environmental-footprint-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_integrated_batch_inventory` | integrated_pomace_oil_production | all integrated production exchanges | batch production record and meter ledger | batch id; input and output masses; pomace moisture; electricity; each fuel; water; hexane purchased and recovered; sodium hydroxide solution mass and concentration; wastewater; each waste; each direct emission; product grade | calibrated scales and meters, invoices, solvent mass balance, laboratory records, and verified emission calculation | row-specific | per batch with monthly reconciliation | at least 12 representative months or the full shorter campaign | all foreground drying, extraction, recovery, and refining equipment | sum exchange records, reconcile mass and solvent balances, and divide by conforming oil mass | calibration records; invoices; laboratory results; meter reconciliation; documented emission factors |
| `cp_blending_batch_inventory` | grade_specific_blending | all blending exchanges | blend batch sheet | batch id; refined olive-pomace oil mass; virgin olive oil mass and grade; electricity; accepted output; rejected oil | calibrated batch scales, tank gauges, and electricity meter | row-specific | per blend batch | at least 12 representative months or the full shorter campaign | all foreground blending equipment | sum batch exchanges and divide by accepted blended-oil mass | scale calibration; supplier certificate; blend formula; mass-balance closure |
| `cp_bulk_storage_loading_inventory` | bulk_storage_and_loading | all storage and loading exchanges | tank and dispatch log | tank id; product grade; opening and closing mass; electricity; hot-water energy; steam energy; rinse water; dispatched mass; rinse wastewater; cleaning inspection | calibrated tank gauge or weighbridge, utility meters, and cleaning log | row-specific | per tank campaign and dispatch | at least 12 representative months or the full shorter campaign | all foreground tanks, pumps, heating, and loading equipment | reconcile opening stock plus receipts minus closing stock and losses, then divide utilities by dispatched oil mass | calibration; temperature log; cleaning inspection; previous-cargo declaration where relevant |
| `cp_packaging_run_inventory` | consumer_packaging | all packaging exchanges | packaging bill of materials and run reconciliation | run id; net oil input and output; electricity; mass of each container, closure, label, carton, pallet, and film; each material-specific scrap; rejected oil; pallet reuse count | purchase and issue records, component specifications, line meter, reject log, and net-fill checks | row-specific | per packaging run with monthly reconciliation | at least 12 representative months or the full shorter campaign | all foreground filling, capping, labelling, case packing, and palletizing equipment | reconcile each component separately and divide by accepted net packaged-oil mass | supplier specifications; count-to-mass conversion; meter calibration; reject log; net-fill verification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_exchange_to_reference_flow` | every inventory exchange | normalized amount = exchange amount attributable to the product / conforming declared oil mass | row-specific exchange record; conforming oil mass | row-specific amount per 1 kg reference flow | `eu-environmental-footprint-2021-2279` |
| `pomace_dry_matter` | received and extracted pomace | dry matter = wet mass × (1 − moisture mass fraction) | wet mass; moisture mass fraction | kg dry matter | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `solvent_loss_to_air` | technical hexane | hexane loss = opening solvent inventory + purchases − closing inventory − documented solvent in products and wastes; reconcile measured vent capture separately | solvent inventory; purchases; recovery; product and waste tests | kg technical hexane loss to air | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `exported_pomace_balance` | extracted olive pomace | exported extracted pomace = total extracted pomace produced − extracted pomace combusted on site − other measured internal use | total extracted-pomace output; internal fuel mass; other internal use | kg exported extracted olive pomace | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `blend_mass_balance` | olive-pomace-oil blend | accepted blend output + rejected oil + measured losses = refined olive-pomace oil input + virgin olive oil input | both oil inputs; accepted output; rejected output; measured loss | batch mass-balance closure and component mass fractions | `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026` |
| `packaging_component_mass` | each packaging component | component mass per kg oil = issued component count × verified unit mass / accepted net packaged-oil mass; reusable pallet mass is divided by verified reuse count | issued count; unit mass; net oil mass; reuse count when applicable | kg of the specific component per kg net oil | `eu-environmental-footprint-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain grade-specific laboratory certificates and declarations demonstrating CPC 21673 identity and distinguishing crude, refined, and blended olive-pomace oil from olive oil and re-esterified or other-oil mixtures. | product specification; laboratory results; `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026` |
| `dq_temporal_coverage` | foreground inventory | Use at least 12 representative months unless the campaign is shorter; disclose campaign dates, seasonality, downtime, and missing-data treatment. | production calendar; meter coverage; reconciliation report; `eu-environmental-footprint-2021-2279` |
| `dq_mass_balance` | pomace, oil, solvent, and waste records | Close wet and dry pomace balances, oil-grade balances, solvent balance, and packaging-component reconciliation; investigate material residuals rather than forcing closure. | signed balance sheets; moisture tests; tank and scale calibration |
| `dq_atomic_exchanges` | all inventory rows | Every electricity, hot-water, steam, natural-gas, diesel, chemical, packaging component, waste stream, and elementary emission actually used must be represented by its own atomic exchange. Any additional cleaning chemical or packaging component must be added as another row before conformance. | row-id audit; purchase ledger; bill of materials; waste manifest |
| `dq_storage_integrity` | bulk storage and loading | Retain tank cleanliness, dryness, material compatibility, temperature, previous-cargo, and loading inspection records, and minimize air contact and overheating. | inspection reports; temperature logs; previous-cargo declarations; `fao-who-cxc-36-1987-2024` |
| `dq_background_links` | upstream and treatment datasets | Match geography, technology, reference period, product grade, fuel route, packaging material, and waste-treatment route; disclose proxies and their sensitivity. | dataset metadata and data-quality assessment; `eu-environmental-footprint-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The product flow UUID, Mass property UUID, Units of mass UUID, kg unit, CPC 21673 coordinate, declared product grade, and full product semantics must all match. | `unsd-cpc-3-0-2025`; `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026` |
| `validate_grade_and_route` | product dataset | Reject a dataset that omits crude/refined/blended grade, solvent or physical extraction route, refining status, blend composition when applicable, intended use, or gate. | `fao-who-cxs-33-1981-2024`; `ioc-trade-standard-2026` |
| `validate_mass_and_moisture` | production inventory | Require measured oil output, wet pomace mass, pomace moisture or dry matter, extracted-pomace output, internal fuel use, and an investigated mass-balance residual. | `alonso-farinas-olive-pomace-oil-lca-2020` |
| `validate_solvent` | solvent extraction route | Require technical-hexane purchase, recovery, inventory, and loss records; reject halogenated-solvent use for a conforming edible product and apply the applicable residual-solvent quality checks. | `fao-who-cxs-33-1981-2024`; `alonso-farinas-olive-pomace-oil-lca-2020` |
| `validate_atomic_inventory` | all process inventories | Reject any selected flow that is a plural collection, combined carrier, combined packaging label, combined waste label, or unresolved selector instruction; every actual exchange must be a separate row. |  |
| `validate_allocation` | multifunctional processes | Require subdivision evidence or the documented allocation hierarchy, factors, co-product output quantities, internal use, and sensitivity result; reject double credit for extracted pomace used as on-site fuel. | `eu-environmental-footprint-2021-2279`; `alonso-farinas-olive-pomace-oil-lca-2020` |
| `validate_storage_and_packaging` | declared bulk or packaged gate | Require storage inspection and temperature records; for packaged product require a component-level bill of materials and jurisdiction-specific package and labelling conformance. | `fao-who-cxc-36-1987-2024`; `eu-olive-oil-marketing-2022-2104` |
| `validate_single_case_evidence` | literature case evidence | Treat the Alonso-Fariñas case only as non-constraining process and calculation context. Do not derive an amount range from one publication, one facility case, or two scenarios within that same case; foreground quantities require collected or independently calculated evidence. | `alonso-farinas-olive-pomace-oil-lca-2020` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Foreground or background modelling of crude, refined, or blended oil of olive residues with matching grade, route, geography, period, allocation, package state, and gate |
| excluded_use | Virgin or refined olive oil made directly from olives; olive pomace feedstock; exhausted pomace; re-esterified or chemically modified oil; undeclared mixtures; unmatched extraction or refining routes |
| required_metadata | reference-flow UUIDs; CPC coordinate; product grade; intended use; extraction solvent or physical treatment; drying fuel; refining and blending status; blend fractions; pomace origin and moisture; allocation method; packaging state; geography; reference period; gate |
| required_quality_disclosure | foreground coverage; calibration; mass, dry-matter, solvent, and blend balances; actual utility and packaging rows; direct-emission method; waste treatment; treatment of non-constraining literature cases; proxy datasets; data-quality assessment; unresolved UUIDs |
| update_trigger | Change in product standard, classification scope, extraction solvent or technology, drying fuel, refining or blending route, allocation method, package format, material yield, emission control, geography, or representative foreground evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | Dataset (`dataset`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 21673 title and hierarchy |
| `fao-who-cxs-33-1981-2024` | Standard (`standard`) | Codex Alimentarius Commission, CXS 33-1981, Standard for Olive Oils and Olive-Pomace Oils, revised 2024 and reformatted 2026, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+33-1981%2FCXS_033e.pdf | product definition, grade identity, quality, contaminants, naming, and analysis requirements |
| `ioc-trade-standard-2026` | Standard (`standard`) | International Olive Council, COI/T.15/NC No. 3/Rev. 22, Trade Standard Applying to Olive Oils and Olive Pomace Oils, June 2026, https://www.internationaloliveoil.org/wp-content/uploads/2026/07/COI-T.15NC-No.-3Rev.-22-_TRADE-STANDARD-REV-22_EN.pdf | current international-trade designations, crude/refined/blended distinctions, and quality criteria |
| `alonso-farinas-olive-pomace-oil-lca-2020` | Literature (`literature`) | Alonso-Fariñas et al., Environmental Assessment of Olive Mill Solid Waste Valorization via Anaerobic Digestion Versus Olive Pomace Oil Extraction, Processes 8(5), 626, 2020, https://doi.org/10.3390/pr8050626 | drying, solvent extraction and recovery, chemical refining, inventory-flow identification, route-specific fuel cases, wastewater, and direct-emission context; one non-constraining case, not an amount-range source |
| `eu-environmental-footprint-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Official Journal L 471, 30 December 2021, http://data.europa.eu/eli/reco/2021/2279/oj | system boundary, primary-data quality, allocation hierarchy, packaging inventory, and proxy disclosure |
| `fao-who-cxc-36-1987-2024` | Standard (`standard`) | Codex Alimentarius Commission, CXC 36-1987, Code of Practice for the Storage and Transport of Edible Fats and Oils in Bulk, revised 2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+36-1987%2FCXC_036e.pdf | storage boundary, tank condition, cleaning, heating, loading, temperature, and previous-cargo records |
| `eu-olive-oil-marketing-2022-2104` | Official guidance (`official_guidance`) | Commission Delegated Regulation (EU) 2022/2104 on marketing standards for olive oil, consolidated 10 June 2024, http://data.europa.eu/eli/reg_del/2022/2104/2024-06-10 | EU grade characteristics, final-consumer package capacity and first-opening system, legal name, and storage labelling |
