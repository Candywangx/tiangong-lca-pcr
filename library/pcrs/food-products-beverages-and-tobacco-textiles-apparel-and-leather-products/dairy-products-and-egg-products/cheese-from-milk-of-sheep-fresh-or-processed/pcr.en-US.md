---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-sheep-fresh-or-processed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cheese from milk of sheep, fresh or processed

## 1. Scope and Applicability

This PCR applies to cheese manufactured exclusively from sheep milk or sheep-milk-derived dairy materials and delivered at the cheese manufacturing facility gate. It covers fresh or unripened cheese, whey cheese and curd, ripened cheese (including mould-ripened forms), grated or powdered cheese, cheese in brine, and processed cheese when every dairy cheese or milk ingredient is traceable to sheep milk.

The foreground route shall declare whether the reference product is fresh/unripened, ripened, whey cheese or curd, grated/powdered, or processed. It shall also declare whether the product is sold drained or in brine, the formulation and added-ingredient state, and whether the reference mass is unpackaged, bulk-packed, or retail-packed.

Cheese made from goat, cattle, buffalo, or other non-sheep milk is excluded. A mixed-milk cheese or a processed cheese containing any non-sheep dairy ingredient is outside this PCR and shall be reclassified; the non-sheep fraction shall not be hidden by allocation or mass balancing. Non-dairy cheese analogues are excluded. Sheep farming and milk production are represented by upstream datasets rather than repeated inside the cheese-factory foreground boundary. Distribution, retail, consumer use, and end-of-life are outside the default facility-gate boundary.

Codex product standards are used only to identify applicable product states, ingredients, and declarations. Their compositional, additive, hygiene, or quality provisions do not provide inventory amounts. No common milk-to-cheese yield, recipe, salt dose, water use, or energy intensity is imposed across the category; these quantities shall come from site- and batch-specific records.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-sheep-fresh-or-processed |
| classification_refs | CPC 3.0: 22253, Cheese from milk of sheep, fresh or processed |
| covered_products | Sheep-milk fresh/unripened cheese, whey cheese and curd, ripened or mould-ripened cheese, grated or powdered cheese, cheese in brine, and processed cheese made only from sheep-milk dairy ingredients |
| excluded_products | Goat-, cattle-, buffalo-, other-animal-, or mixed-milk cheese; processed cheese containing non-sheep dairy ingredients; non-dairy cheese analogues |
| representative_product | Market-ready sheep-milk cheese in the declared fresh/ripened/processed, brine, ingredient, and packaging state |
| production_route | Receipt of sheep milk or a traceable sheep-milk cheese intermediate; route-specific coagulation or whey recovery; conditional salting, ripening, brining, grinding, or processing; final conditioning and packaging |
| market_state | Facility-gate product; fresh/unripened, ripened, whey cheese/curd, grated/powdered, or processed state and drained/in-brine and packaging basis declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of sheep-milk cheese in the declared product and market state at the cheese manufacturing facility gate |
| How much | 1 kg of reference product on the declared net, drained, or as-packed mass basis |
| How well | Conforms to the producer's declared product specification and applicable market requirements; species origin and product-state declarations are complete |
| How long or cycle | One completed production batch through facility-gate release; ripening or holding duration is recorded when applicable |
| reference_flow_link | The mass-normalized output of `final_conditioning_packaging`, linked to the declared product state and the batch records that establish sheep-only dairy origin |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cheese from milk of sheep, fresh or processed `d2800438-b79a-4065-98ab-b7b0fe10ce97` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sheep milk only; product state (fresh/unripened, ripened, whey cheese/curd, grated/powdered, or processed); raw-milk or heat-treatment status where relevant; ripening or holding duration where applicable; drained or in-brine basis; ingredient and formulation declaration; packaging basis; facility-gate geography and period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comments, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure released product mass on the declared basis. Exclude packaging and free brine unless the reference product is explicitly declared as-packed; for cheese in brine, declare both cheese solids mass and brine mass and state whether the 1 kg reference is drained or as-packed. |
| `sheep_origin_mass` | Milk and dairy ingredients | Mass | kg | Record each received dairy lot by mass and species origin. Do not combine non-sheep dairy mass with sheep-milk inputs; any non-sheep dairy input requires reclassification. |
| `volume_to_mass` | Volumetrically metered milk, water, or brine | Mass or volume | kg or m3 | Retain measured volume and convert to mass only with a density applicable to the recorded material, temperature, and batch or supplier specification; do not apply a universal density. |
| `ingredient_mass_basis` | Salt, cultures, coagulants, acids, emulsifying salts, and other ingredients | Mass | kg | Use batch issue, dosing, or reconciliation records. Codex permissions or quality limits do not constitute inventory quantities. |
| `energy_conversion` | Electricity, thermal energy, and fuels | Energy or mass/volume | kWh, MJ, kg, or m3 | Retain meter or purchase units and the site-specific conversion factors, calorific values, and meter boundaries used to normalize energy to the reference flow. |
| `packaging_mass` | Primary, secondary, and tertiary packaging | Mass | kg | Convert packaging counts to mass using packaging specifications or weighed lot samples and keep each material separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sheep milk received at the cheese facility for primary manufacture, or separately identified sheep-milk cheese/whey intermediate received for processed or whey-cheese manufacture |
| starting_condition_role | Defines the factory foreground entry point and preserves whether the route starts from sheep milk, sheep whey, or a sheep-milk cheese intermediate |
| product_classification_scope | Cheese whose dairy origin is exclusively sheep milk and whose fresh/ripened/processed, brine, ingredient, and packaging state is declared |
| recursive_input_rule | A sheep-milk cheese input used to make processed, grated, powdered, or otherwise further-processed cheese remains an explicit technosphere input with its own upstream dataset; do not recreate or double-count its prior cheese manufacture inside the receiving process |
| upstream_dataset_requirement | Use traceable upstream datasets for sheep milk and all received sheep-milk dairy intermediates, ingredients, energy carriers, water, packaging, transport to the facility when in study scope, and waste treatment |
| disclosure | Declare the foreground entry material, sheep-only evidence, process route, raw-milk/heat-treatment status where relevant, fresh/ripened/processed state, ripening or holding time, brine basis, ingredients, packaging basis, geography, technology, allocation method, and data period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_sheep_only` | All dairy material entering the foreground system | Include only lots documented as sheep milk or sheep-milk-derived material. A mixed-species lot or non-sheep dairy ingredient makes the product outside this PCR and requires reclassification. | `unsd-cpc-3-0-2025`; `codex-cxs-206-1999` |
| `boundary_factory_gate` | Foreground process chain | Include receipt and conditioning, applicable cheesemaking or processing operations, facility utilities and cleaning, product losses, wastewater and waste streams, final conditioning, packaging, and on-site storage through facility-gate release. | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `boundary_route_declaration` | Product state and route | Include only the operations actually performed and declare every omitted conditional process. Fresh/unripened, ripened, whey-cheese, brined, grated/powdered, and processed routes shall not be represented by one assumed recipe or process intensity. | `codex-cxs-283-1978`; `codex-cxs-221-2001`; `codex-cxs-208-1999` |
| `boundary_upstream_link` | Sheep milk and sheep-milk dairy intermediates | Link upstream datasets rather than recursively reproducing their inventories; preserve supplier, geography, production system, and period compatibility. | `eu-pef-2021` |
| `boundary_exclusions` | Downstream stages | Exclude distribution, retail, consumer use, and end-of-life unless the study explicitly expands the boundary and reports those stages separately. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_conditioning` | Sheep milk reception and conditioning | conditional | Required when sheep milk enters the foreground facility | Establish sheep-only identity, received mass, losses, and conditioned milk output | kg conditioned sheep milk by batch |
| `primary_cheesemaking` | Primary curd formation and whey separation | conditional | Required for cheese manufactured directly from sheep milk; adapted to the declared fresh or ripened route | Coagulation or equivalent cheese formation, curd handling, and whey separation | kg cheese intermediate and kg whey by batch |
| `whey_cheese_recovery` | Sheep-whey cheese recovery | conditional | Required when whey cheese or whey curd is produced as the reference product or as a co-product | Heat/acid or declared route for recovery from sheep-milk whey | kg whey cheese and residual whey by batch |
| `salting_ripening_brining` | Salting, ripening, and brining | conditional | Required when any of these operations is performed | Product-specific salt/brine management, ripening, turning, washing, drying, and storage | kg conditioned cheese output by lot |
| `processed_cheese_manufacture` | Processed, grated, or powdered sheep-milk cheese manufacture | conditional | Required for processed, grated, powdered, blended, or remelted products | Formula-controlled further processing of sheep-milk cheese inputs | kg processed cheese output by batch |
| `facility_utilities_cleaning` | Facility utilities, refrigeration, and cleaning | required | Record the services attributable to included foreground operations | Electricity, thermal energy, water, cleaning materials, wastewater, and refrigerant records | Measured service quantities allocated to qualifying output |
| `final_conditioning_packaging` | Final conditioning, packaging, and on-site storage | required | Applies to bulk, unpackaged, or retail-packed release; packaging inputs are conditional on the declared market state | Reconcile saleable output, packaging, storage losses, and reference-flow release | 1 kg released reference product |

### Process: Sheep milk reception and conditioning (`milk_reception_conditioning`)

#### Inputs

##### Product flows

###### Received sheep milk (`received_sheep_milk`)

Record only milk lots with evidence of sheep origin. Supplier, lot, received mass, temperature, composition or quality data used for process control, and raw-milk or heat-treatment status shall remain linked to the batch.

- Selected flow: Sheep milk
- Flow property / unit: Mass / kg
- Amount rule: measured accepted sheep milk mass for each batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`
- Sources: `codex-cxs-206-1999`; `codex-cxs-283-1978`

#### Outputs

##### Product flows

###### Conditioned sheep milk (`conditioned_sheep_milk`)

Record mass transferred to cheesemaking after any filtration, separation, standardization, or heat treatment actually performed.

- Selected flow: Conditioned sheep milk
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or batch mass reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_output_records`

##### Waste flows

###### Rejected milk and reception residues (`reception_rejects`)

Keep rejected milk, filter residues, spills, and their destinations separate from accepted milk.

- Selected flow: Rejected milk and dairy residues
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled rejected mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_loss_waste_records`

### Process: Primary curd formation and whey separation (`primary_cheesemaking`)

#### Inputs

##### Product flows

###### Conditioned sheep milk input (`cheesemaking_milk_input`)

Transfer the conditioned sheep milk mass without substituting a generic milk-to-cheese yield.

- Selected flow: Conditioned sheep milk
- Flow property / unit: Mass / kg
- Amount rule: measured batch transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`

###### Cultures, coagulants, salt, and route-specific ingredients (`cheesemaking_ingredients`)

Record each ingredient separately with supplier, lot, species origin where dairy-derived, active preparation, and batch dose. A Codex-permitted ingredient or additive class is not an inventory quantity.

- Selected flow: Route-specific cheesemaking ingredients
- Flow property / unit: Mass / kg
- Amount rule: batch issue or dosing record for each ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_formula_records`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`

#### Outputs

##### Product flows

###### Fresh curd or cheese intermediate (`fresh_cheese_intermediate`)

Record the actual batch output and its route disposition: direct fresh-cheese release, ripening/brining, or transfer to further processing.

- Selected flow: Fresh sheep-milk cheese or curd intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured output mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_records`

###### Sheep-milk whey (`sheep_milk_whey`)

Measure whey by mass or validated volume-to-mass conversion and record whether it is sold, internally recovered, treated, or discarded.

- Selected flow: Sheep-milk whey
- Flow property / unit: Mass / kg
- Amount rule: measured or batch-reconciled whey mass by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_output_records`

##### Waste flows

###### Curd fines, spills, and off-specification losses (`cheesemaking_losses`)

Record separately by recovery, feed, treatment, or disposal destination.

- Selected flow: Cheesemaking dairy residues
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled loss mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_loss_waste_records`

### Process: Sheep-whey cheese recovery (`whey_cheese_recovery`)

#### Inputs

##### Product flows

###### Sheep-milk whey input (`whey_recovery_input`)

Keep the whey source lot and any upstream allocation or burden attached to the input dataset.

- Selected flow: Sheep-milk whey
- Flow property / unit: Mass / kg
- Amount rule: measured received or transferred whey mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`

###### Whey-cheese ingredients (`whey_cheese_ingredients`)

Record acidulants, salt, milk additions, or other route-specific ingredients from batch formulation records; any dairy addition shall be sheep-derived.

- Selected flow: Whey-cheese ingredients
- Flow property / unit: Mass / kg
- Amount rule: batch issue or dosing record for each ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_formula_records`

#### Outputs

##### Product flows

###### Recovered whey cheese or curd (`whey_cheese_output`)

Record the saleable mass and declared fresh, packed, or further-conditioned state.

- Selected flow: Sheep-whey cheese or curd
- Flow property / unit: Mass / kg
- Amount rule: measured batch output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_records`

##### Waste flows

###### Residual whey and recovery losses (`residual_whey`)

Record mass, concentration when relevant to treatment, and destination without assuming a fixed recovery rate.

- Selected flow: Residual sheep-milk whey
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled residual mass by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_loss_waste_records`

### Process: Salting, ripening, and brining (`salting_ripening_brining`)

#### Inputs

##### Product flows

###### Fresh sheep-milk cheese input (`ripening_cheese_input`)

Record lot mass, product state, moisture or dry-matter measurement if used for process control, and entry time.

- Selected flow: Fresh sheep-milk cheese intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured lot transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`

###### Salt and brine make-up (`salt_brine_input`)

Record dry salt, water, reused brine, and make-up or replacement separately; do not infer a recipe from product quality limits.

- Selected flow: Salt and process brine
- Flow property / unit: Mass / kg
- Amount rule: measured make-up, addition, and transfer quantities by lot or tank cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brine_records`
- Sources: `codex-cxs-208-1999`

#### Outputs

##### Product flows

###### Ripened or brined cheese (`ripened_brined_cheese`)

Record released mass, ripening or brining duration, and drained or in-brine state. Mass change during ripening shall be calculated from recorded entry and exit masses, not a category default.

- Selected flow: Ripened or brined sheep-milk cheese
- Flow property / unit: Mass / kg
- Amount rule: measured lot output on the declared mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_records`

##### Waste flows

###### Spent brine and ripening losses (`spent_brine_ripening_losses`)

Keep spent brine, washings, rind trimming, rejected cheese, and evaporative mass change distinct.

- Selected flow: Spent brine and ripening residues
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or reconciled loss by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_loss_waste_records`

### Process: Processed, grated, or powdered sheep-milk cheese manufacture (`processed_cheese_manufacture`)

#### Inputs

##### Product flows

###### Sheep-milk cheese intermediates (`processed_cheese_inputs`)

Record each cheese input lot and verify that all dairy cheese and milk ingredients are sheep-derived. Mixed-species inputs require reclassification.

- Selected flow: Sheep-milk cheese intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured mass of each input lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_lot_records`

###### Added ingredients and process water (`processed_cheese_ingredients`)

Record each ingredient, water addition, processing aid, and dairy origin from the approved batch formulation. Do not convert Codex permissions into a default formula.

- Selected flow: Processed-cheese ingredients and water
- Flow property / unit: Mass / kg
- Amount rule: batch issue, dosing, or formulation reconciliation for each material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_formula_records`
- Sources: `codex-cxs-283-1978`

#### Outputs

##### Product flows

###### Processed, grated, or powdered cheese output (`processed_cheese_output`)

Record mass and the exact processed state and formulation associated with the batch.

- Selected flow: Processed sheep-milk cheese
- Flow property / unit: Mass / kg
- Amount rule: measured saleable batch output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_records`

##### Waste flows

###### Processing and product losses (`processed_cheese_losses`)

Record start-up, trimming, filter, off-specification, and cleaning-recovery losses by destination.

- Selected flow: Processed-cheese residues
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_loss_waste_records`

### Process: Facility utilities, refrigeration, and cleaning (`facility_utilities_cleaning`)

#### Inputs

##### Product flows

###### Electricity and thermal energy (`facility_energy`)

Record electricity and each fuel or purchased thermal-energy carrier separately at the narrowest available meter boundary. EU FDM BAT performance levels may be used only as contextual comparison for installations and averaging bases within their stated scope, never as a sheep-cheese default or substitute for site records.

- Selected flow: Electricity and route-specific thermal energy carriers
- Flow property / unit: Energy / kWh or MJ; fuel mass or volume in recorded unit
- Amount rule: metered or purchased quantities attributed to included processes using documented site allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bat-2019`

###### Process and cleaning water (`facility_water`)

Record process, cleaning, cooling, and other water uses separately where metering permits and identify recycled or reused streams without double counting.

- Selected flow: Process and cleaning water
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: metered quantity or documented allocation from a facility meter balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bat-2019`

###### Cleaning and sanitation materials (`cleaning_materials`)

Record each chemical or prepared solution by purchased product mass and active concentration when needed for the selected upstream dataset.

- Selected flow: Cleaning and sanitation materials
- Flow property / unit: Mass / kg
- Amount rule: issue, dosing, or purchase reconciliation for the data period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

#### Outputs

##### Waste flows

###### Facility wastewater (`facility_wastewater`)

Record discharge volume and destination; retain sampling data for relevant load parameters and keep separately managed uncontaminated water streams distinct. BAT indicative performance levels are contextual checks only when their stated applicability and denominator match.

- Selected flow: Dairy facility wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or validated water-balance calculation by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Refrigerant losses to air (`refrigerant_losses`)

Record refrigerant type and loss from service logs and mass reconciliation; do not apply an assumed leakage rate when records exist.

- Selected flow: Refrigerant emission to air by substance
- Flow property / unit: Mass / kg
- Amount rule: calculated from refrigerant charge, recovery, and top-up records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

### Process: Final conditioning, packaging, and on-site storage (`final_conditioning_packaging`)

#### Inputs

##### Product flows

###### Qualified sheep-milk cheese (`qualified_cheese_input`)

Record the cheese lot entering final conditioning with the product-state qualifiers required by this PCR.

- Selected flow: Qualified sheep-milk cheese
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering final release operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_output_records`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary materials separately and state which packaging level is included in the facility-gate dataset.

- Selected flow: Packaging materials by material and component
- Flow property / unit: Mass / kg
- Amount rule: packaging issue records or count-to-mass conversion using verified component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

#### Outputs

##### Product flows

###### Released reference product (`released_sheep_cheese`)

This output is the declared sheep-milk cheese in its stated fresh/ripened/processed, brine, ingredient, and packaging state.

- Selected flow: Cheese from milk of sheep, fresh or processed `d2800438-b79a-4065-98ab-b7b0fe10ce97`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg on the declared reference mass basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging and final product losses (`final_packaging_losses`)

Record damaged packaging, trim, start-up or changeover product, returns before gate release, and their destinations separately.

- Selected flow: Packaging waste and final cheese residues
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled loss mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_loss_waste_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Distinct product lines, routes, and batches | Subdivide or meter fresh, ripened, whey-cheese, brined, and processed routes and shared services before applying allocation. Do not use one category-wide factor. | `eu-pef-2021` |
| `allocation_whey_and_coproducts` | Cheese, whey, cream, fines, and other valuable co-products | First determine whether process subdivision or an independently measurable physical relationship avoids allocation. If residual multifunctionality remains, document the selected physical or economic relationship, site-period masses and values, and a sensitivity result; do not infer a factor from Codex composition provisions. | `eu-pef-2021` |
| `allocation_internal_whey` | Whey transferred to `whey_cheese_recovery` | Treat the whey as an explicit intermediate transfer and prevent double counting between primary cheesemaking and whey-cheese recovery. The final dataset shall state how upstream burdens accompany that transfer. | `eu-pef-2021` |
| `allocation_shared_utilities` | Electricity, heat, refrigeration, water, cleaning, and wastewater | Use submetering where available; otherwise apply a documented causal driver such as operating time, equipment load, cleaned surface, water balance, or batch throughput. Record the driver and reconcile it to the facility total. | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `allocation_non_sheep_prohibited` | Mixed-species dairy inputs | Allocation shall never be used to relabel a mixed-milk or non-sheep-dairy product as sheep-milk cheese. Such a product is outside scope and shall be reclassified. | `unsd-cpc-3-0-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_lot_records` | `milk_reception_conditioning`; `primary_cheesemaking`; `whey_cheese_recovery`; `salting_ripening_brining`; `processed_cheese_manufacture` | Milk, whey, and cheese intermediate inputs and transfers | receiving ticket, batch sheet, tank or scale record, supplier declaration | lot_id; supplier; animal_species; material_state; raw_or_heat_treated_status; gross_mass; tare_mass; net_mass; volume; density_basis; timestamp; destination_batch | Calibrated weighing or metering linked to lot and batch; retain sheep-origin evidence | kg; L or m3 with applicable density | Each receipt and transfer | All qualifying batches in the declared period | Each included facility and supplier lot | Sum accepted net mass by material and batch; keep rejects and non-sheep lots separate | Scale or meter calibration; supplier species declaration; lot trace; reconciliation to inventory |
| `cp_ingredient_formula_records` | `primary_cheesemaking`; `whey_cheese_recovery`; `processed_cheese_manufacture` | Cultures, coagulants, salt, acidulants, water additions, and other ingredients | approved formulation, issue ticket, dosing log | batch_id; ingredient_id; supplier_lot; dairy_species_origin; issued_mass; returned_mass; dosed_mass; concentration; formulation_revision | Reconcile issued, returned, and dosed quantities to approved batch formula | kg; L with density where applicable | Each batch | All qualifying batches | Each product and formulation at each facility | Net ingredient use by batch and ingredient; no default recipe substitution | Formula approval; lot trace; dosing-device calibration; issue-return reconciliation |
| `cp_batch_output_records` | `milk_reception_conditioning`; `primary_cheesemaking`; `whey_cheese_recovery`; `salting_ripening_brining`; `processed_cheese_manufacture`; `final_conditioning_packaging` | Intermediates, co-products, and saleable output | batch yield sheet, scale record, tank meter, warehouse release | batch_id; product_state; entry_mass; output_mass; whey_mass_or_volume; brine_state; ripening_start_end; pack_basis; disposition; timestamp | Direct weighing or metering, linked across process steps and dispositions | kg; L or m3 with applicable density | Each batch or lot movement | All qualifying batches | Each included process line | Sum measured outputs by batch and disposition; normalize only after qualified reference mass is known | Calibration; batch genealogy; warehouse reconciliation; retained product-state declaration |
| `cp_brine_records` | `salting_ripening_brining` | Salt, make-up water, reused brine, cheese carried brine, and spent brine | tank log, dosing log, laboratory record, discharge ticket | tank_id; cycle_id; initial_mass_or_volume; salt_addition; water_addition; transferred_in_out; concentration; cheese_lot; spent_brine_mass_or_volume; destination | Meter or weigh additions and removals; sample concentration when used in process calculation | kg; m3; concentration in recorded unit | Each tank cycle and cheese lot | All applicable cycles | Each brine system | Tank mass balance by cycle; allocate only with documented cheese-lot driver | Meter/scale calibration; sample result; tank reconciliation; destination record |
| `cp_utility_records` | `facility_utilities_cleaning` | Electricity, fuels, thermal energy, water, and cleaning materials | meter, invoice, stock issue, production log | meter_id; opening_closing_reading; carrier; unit; fuel_quality_or_calorific_value; water_use; chemical_id; concentration; operating_time; process_or_line | Read submeters where available; reconcile invoices and stocks; document shared-service allocation driver | kWh; MJ; kg; m3 | Per batch where metered, otherwise daily or monthly | Representative declared period including seasonal and product-mix variation | Each facility and meter boundary | Subtract verified non-process use; allocate shared totals with a documented causal driver; reconcile to facility total | Meter calibration; invoice; stock reconciliation; allocation worksheet; completeness check |
| `cp_wastewater_records` | `facility_utilities_cleaning` | Wastewater and separately managed water streams | discharge meter, water balance, sample and treatment record | stream_id; destination; volume; sampling_time; pH; temperature; COD_or_TOC; nitrogen; phosphorus; chloride; conductivity; treatment | Meter discharge where possible; otherwise validated water balance; sample parameters relevant to treatment and permit context | m3 and parameter-specific units | Continuous or per discharge; representative sampling | Declared period | Each discharge point and treatment destination | Sum by stream and destination; report loads only from matched flow and concentration data | Meter calibration; laboratory method; sampling plan; water-balance reconciliation |
| `cp_refrigerant_records` | `facility_utilities_cleaning` | Refrigerant losses | equipment service and refrigerant inventory log | equipment_id; refrigerant; opening_charge; additions; recovery; closing_charge; service_date; leak_event | Substance-specific mass reconciliation over the declared period | kg | Each service event and period close | Declared period | All refrigeration serving included operations | Additions plus opening charge minus recovered and closing charge, checked for unexplained imbalance | Service certificate; cylinder records; equipment inventory; reconciliation sign-off |
| `cp_packaging_records` | `final_conditioning_packaging` | Primary, secondary, and tertiary packaging | bill of materials, issue record, component specification, weighed sample | packaging_component; material; supplier; component_mass; count_issued; count_returned; scrap_count; recycled_content_claim; pack_format | Reconcile issued and returned counts; convert using supplier specification or representative weighing | item; kg | Each pack format and batch | All qualifying production | Each product and packaging format | Net count multiplied by verified component mass; keep materials and packaging levels separate | Current specification; sample-weighing record; issue-return reconciliation |
| `cp_loss_waste_records` | all included processes | Rejected material, spills, curd fines, residual whey, spent brine, off-specification cheese, packaging waste, and other losses | waste scale, production loss log, transfer note, treatment or sales record | batch_id; material; mass_or_volume; solids_or_concentration_if_relevant; cause; destination; recovery_status; ticket_id | Weigh or meter at transfer; otherwise close a documented material balance | kg; m3 | Each event or batch | Declared period | Each process and destination | Sum by material, cause, and destination; do not net valuable co-products against waste | Scale/meter evidence; destination ticket; mass-balance reconciliation; supervisor review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | Divide the qualifying period or batch quantity by released reference-product mass on the same declared net, drained, or as-packed basis. | Row quantity; qualified released mass; packaging/brine basis | Quantity per 1 kg reference product | `eu-pef-2021` |
| `calc_product_mass_basis` | Brined and packaged products | Reference mass equals measured cheese mass when declared drained/net; when declared as-packed, separately report cheese, free brine, and packaging and include only components explicitly stated by the functional unit. | Gross, tare, drained cheese, free brine, and packaging masses | Declared reference-product mass and component disclosure | `codex-cxs-208-1999`; `eu-pef-2021` |
| `calc_batch_mass_balance` | Each included batch and process step | Reconcile measured inputs, outputs, transfers, retained inventory, and identified losses. Report the unexplained difference; do not force it into whey, wastewater, or product yield. | Opening and closing inventory; all measured inputs and outputs | Mass-balance residual and completeness flag | `mass-balance-identity`; `eu-fdm-bat-2019` |
| `calc_volume_to_mass` | Milk, whey, brine, and liquid ingredients | Multiply measured volume by a batch-, temperature-, or supplier-applicable density; retain original volume and density provenance. | Volume; density; material and temperature context | Mass in kg | `mass-balance-identity` |
| `calc_shared_services` | Shared utilities and cleaning | Allocate only after direct metering and subdivision are exhausted, using the documented causal driver and reconciling allocated totals to facility totals. | Shared total; driver values; qualifying output mass | Allocated service quantity per reference product | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `calc_coproduct_allocation` | Residual multi-output processes | Apply the reviewed site-period physical or economic relationship only when subdivision or a measurable physical relationship does not avoid allocation; preserve unallocated masses and sensitivity results. | Co-product masses; physical driver or revenue; period; currency and prices where used | Documented allocation factors and sensitivity result | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_traceability` | All milk, whey, cheese, and dairy ingredients | Evidence shall demonstrate sheep-only dairy origin for every lot. Any mixed or unresolved species origin blocks use of this PCR. | Supplier declaration, lot genealogy, formula and receiving records |
| `dq_route_representativeness` | Product and process route | Data shall represent the declared fresh/unripened, ripened, whey-cheese, brined, grated/powdered, or processed route and its actual technology, product mix, and operating pattern. | Process flow diagram, batch list, formulation revision, technology and operating records |
| `dq_temporal_coverage` | Foreground inventory | Use a stated period that captures relevant seasonal milk composition, product mix, ripening occupancy, cleaning, and utility variation; justify exclusions and abnormal events. | Coverage register, production calendar, meter completeness report |
| `dq_measurement` | Mass, volume, energy, packaging, and discharge data | Identify meter and scale boundaries, calibration status, conversions, missing-data treatment, and reconciliation residuals. | Calibration certificates, raw readings, conversion worksheet, mass and water balances |
| `dq_no_standard_as_lci` | Codex and BAT references | Do not use product permissions, quality limits, BAT applicability thresholds, or indicative performance levels as foreground inventory values unless a separate, applicability-matched modelling decision is explicitly documented. | Source applicability review and site-record comparison |
| `dq_upstream_compatibility` | Sheep milk and dairy intermediate datasets | Disclose supplier geography, production system, time, species, raw/processed state, and allocation method; explain proxies and avoid goat-milk substitution. | Upstream dataset metadata and supplier linkage |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The product-flow UUID shall equal `d2800438-b79a-4065-98ab-b7b0fe10ce97`, the flow-property UUID shall equal `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit-group UUID shall equal `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference amount shall be 1 kg. |  |
| `validate_sheep_only` | Product and input identity | Fail when any dairy input is goat, cattle, buffalo, other-animal, mixed-species, or unresolved species origin. Mixed-milk products require reclassification. | `unsd-cpc-3-0-2025`; `codex-cxs-206-1999` |
| `validate_required_qualifiers` | Dataset metadata | Fail when product state, raw-milk/heat-treatment status where relevant, ripening/holding duration where applicable, brine mass basis, ingredient/formulation state, packaging basis, facility-gate geography, or period is missing. | `codex-cxs-283-1978`; `codex-cxs-221-2001`; `codex-cxs-208-1999` |
| `validate_route_processes` | Process map and inventory | Every included operation shall have a matching process section and records; every omitted conditional operation shall be justified against the declared route. | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `validate_mass_reconciliation` | Batch and period balances | Report input, output, transfer, inventory-change, and loss terms plus the unexplained residual. Fail completeness when a material stream is silently forced into product, whey, wastewater, or waste. | `mass-balance-identity`; `eu-fdm-bat-2019` |
| `validate_no_universal_intensity` | Yield, recipe, salt, water, energy, and waste quantities | Fail when a Codex limit, BAT contextual level, or generic category value is inserted as site foreground data without an applicability-matched source and declared modelling role. | `codex-cxs-283-1978`; `eu-fdm-bat-2019` |
| `validate_allocation` | Multi-output and shared-service processes | Require subdivision assessment, the selected causal or allocation relationship, site-period inputs, reconciliation, and sensitivity disclosure; fail if allocation is used to conceal non-sheep dairy material. | `eu-pef-2021` |
| `validate_sources_and_period` | Foreground and upstream data | Require source provenance, temporal coverage, facility and supplier scope, measurement or calculation method, and disclosure of proxies and missing-data treatment. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a completed, reviewed foreground data package |
| downstream_use | Product or process LCA for exclusively sheep-milk cheese at the declared facility-gate state; lifecycle model inputs with compatible geography, technology, product state, and time |
| allowed_use | Fresh/unripened, ripened, whey-cheese/curd, brined, grated/powdered, or processed sheep-milk cheese when route, species origin, brine basis, ingredients, packaging, allocation, and data quality match |
| excluded_use | Goat-, cattle-, buffalo-, other-animal-, or mixed-milk cheese; non-dairy analogues; substitution across unreported product states; use of Codex or BAT values as unverified foreground inventory |
| required_metadata | PCR id; reference UUIDs; CPC context; sheep-only origin evidence; route and product state; raw-milk/heat-treatment status where relevant; ripening/holding duration; brine and packaging basis; formulation; facility geography and technology; period; upstream links; allocation method |
| required_quality_disclosure | Batch and period coverage; calibration and meter boundaries; mass, water, and utility reconciliation; product and co-product yields from records; missing-data and proxy treatment; upstream compatibility; allocation drivers and sensitivity; source applicability |
| update_trigger | Change in species or dairy origin, product state, recipe, brine or packaging basis, process technology, facility boundary, supplier or upstream dataset, allocation method, representative period, or applicable PCR/source rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, subclass 22253, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Sheep-milk-only CPC scope; included fresh, whey/curd, grated/powdered, processed, blue-veined and other cheese states; exclusions of goat, cattle, buffalo, and other-animal cheese |
| `codex-cxs-206-1999` | `standard` | Codex Alimentarius, *General Standard for the Use of Dairy Terms*, CXS 206-1999, amended 2022. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+206-1999%2FCXS_206e.pdf (retrieved 2026-08-12) | Dairy terminology and animal-origin declaration context; not an LCI quantity source |
| `codex-cxs-283-1978` | `standard` | Codex Alimentarius, *General Standard for Cheese*, CXS 283-1978, amended 2024. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+283-1978%2FCXS_283e.pdf (retrieved 2026-08-12) | General cheese definition, product-state and ingredient applicability, and route declarations; no inferred recipe, yield, or LCI amount |
| `codex-cxs-221-2001` | `standard` | Codex Alimentarius, *Group Standard for Unripened Cheese Including Fresh Cheese*, CXS 221-2001, amended 2022. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+221-2001%2FCXS_221e.pdf (retrieved 2026-08-12) | Applicability to unripened/fresh cheese and associated ingredient and product-state declarations; no inferred formulation or LCI amount |
| `codex-cxs-208-1999` | `standard` | Codex Alimentarius, *Group Standard for Cheeses in Brine*, CXS 208-1999, amended 2022. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+208-1999%2FCXS_208e.pdf (retrieved 2026-08-12) | Brined-cheese applicability and the need to declare drained versus in-brine state; no inferred salt or brine amount |
| `eu-pef-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint Method. http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Functional unit and reference flow, system boundary, company-specific data, data quality, multifunctionality, allocation hierarchy, and reporting |
| `eu-fdm-bat-2019` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. http://data.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Process, water, energy, raw-material, wastewater, waste-gas, and waste inventory design; metering and reconciliation; applicability-limited contextual checks only |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass identity implemented through `calc_batch_mass_balance`; all terms are obtained from foreground records. | Batch completeness, volume-to-mass support, and unexplained-residual reporting; no category-wide yield factor |
