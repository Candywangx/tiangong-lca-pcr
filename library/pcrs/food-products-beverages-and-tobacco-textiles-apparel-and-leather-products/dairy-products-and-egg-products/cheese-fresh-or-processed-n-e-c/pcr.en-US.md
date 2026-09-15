---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-fresh-or-processed-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cheese, fresh or processed, n.e.c.

## 1. Scope and Applicability

This PCR applies only to a cheese product for which an auditable classification decision places the product in CPC Version 3.0 subclass 22259. CPC 22259 is the residual animal-species subclass for fresh or processed cheese made from milk of animals other than cattle, buffalo, sheep, or goats. It can include fresh cheese, whey cheese and curd, grated or powdered cheese, processed cheese, blue-veined cheese, and other cheese only after the species gate below is passed. The generic Tiangong flow name `Cheese` identifies a database flow; it does not establish that every cheese belongs to this PCR.

The following is a hard applicability gate:

1. A product classifiable as cheese from cattle milk (CPC 22251), buffalo milk (CPC 22252), sheep milk (CPC 22253), or goat milk (CPC 22254) shall not use this PCR.
2. The dataset shall identify every milk-producing animal species represented in the milk, dairy ingredients, or cheese feedstocks that determine the product's cheese identity.
3. A mixed-species product, or a product from another animal species, may use this PCR only when the data package retains an auditable CPC classification basis that explicitly supports CPC 22259 for the product. A trade name, the word “cheese”, or the generic Tiangong flow is not sufficient evidence.
4. When the evidence does not establish CPC 22259, classification is `manual_review` and this PCR shall not be selected until a competent reviewer records the classification decision.

The concrete data package shall declare the product state as fresh/unripened, ripened, mould-ripened, or processed; whether it is sold, preserved, or ripened in brine; whether free brine is included in commercial net content; all characterizing non-milk ingredients and processing additions; product form such as whole, portioned, sliced, grated, or powdered; and the packaging configuration at the declared factory gate. CXS 221-2001 is used only for the fresh/unripened branch. CXS 283-1978 is used only for products within its cheese definition. No Codex composition or quality provision is converted into a universal LCI yield, recipe, or input amount, and no uniform processed-cheese formula is inferred from those standards.

This PCR covers foreground operations from receipt of milk, dairy ingredients, or cheese feedstocks at the manufacturing site through production, applicable ripening or brining, processing, finishing, on-site cold storage, and the declared packaged or unpackaged factory-gate product. Upstream milk production, production of purchased ingredients and packaging, inbound and outbound transport, retail, consumer use, and end-of-life are represented by separate datasets when included in the study, not by invented foreground values in this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-fresh-or-processed-n-e-c |
| classification_refs | CPC 3.0: 22259, Cheese, fresh or processed, n.e.c. (`exact` semantic scope; accepted mapping evidence is separate) |
| covered_products | Fresh/unripened, ripened, mould-ripened, whey, curd, grated, powdered, or processed cheese whose auditable classification basis places the product in CPC 22259 after the animal-species gate is passed |
| excluded_products | Cheese classifiable under CPC 22251, 22252, 22253, or 22254; plant-based cheese substitutes; dairy preparations that do not satisfy the applicable cheese identity; products with unresolved or unaudited CPC 22259 classification |
| representative_product | One declared factory-gate cheese product from an animal species other than cattle, buffalo, sheep, or goats, or an explicitly reviewed mixed-species product classified to CPC 22259 |
| production_route | Declared lot-specific route: primary cheesemaking from milk or dairy ingredients, and/or processed-cheese manufacture from cheese feedstocks, with applicable fresh, ripened, mould-ripened, brined, grated, powdered, portioned, or packaged operations |
| market_state | Factory-gate product with declared ripening/processing state, brine and draining convention, incorporated ingredient/coating state, product form, storage condition, and packaged or unpackaged state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared CPC 22259 cheese product at the factory gate |
| How much | 1 kg net cheese product |
| How well | Meets the declared product specification and the hard species/classification gate; state, composition, brine convention, product form, and packaging are disclosed |
| How long or cycle | One production lot delivered to the factory gate; lot production dates, on-site storage duration, and declared shelf-life or maturation condition are reported rather than standardized |
| reference_flow_link | The reference flow equals the measured net mass of conforming cheese output after the declared draining convention, excluding packaging mass and excluding free brine unless the data package explicitly defines and reports a different commercial net-content convention |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net cheese product at the declared factory-gate state |
| Reference product flow | Cheese `8b7b59ae-0b3c-4424-9d8f-a7fc304c7e77` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal species and mass share or documented basis for each milk-derived component; auditable CPC 22259 classification decision; fresh/unripened, ripened, mould-ripened, or processed state; primary-cheesemaking or processed-cheese route; free-brine inclusion and draining convention; incorporated ingredients, coatings, and surface treatments; whole, portioned, sliced, grated, or powdered form; moisture or dry-matter specification used for product identity; packaging included in inventory and packaging excluded from reference mass; factory-gate storage condition and duration; lot and site |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference cheese output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure conforming net cheese mass using a documented lot method. Exclude packaging mass. For a brined product, declare the draining method and whether free brine is excluded or included in the commercial net-content convention. |
| `ingredient_mass_basis` | Milk, cheese feedstocks, dairy ingredients, salt, cultures, coagulants, additives, and other ingredients | Mass | kg | Record actual batch issue or consumption mass and identify water, solids, or concentration basis where relevant; do not apply a category-wide recipe or conversion factor. |
| `species_composition_basis` | Milk-derived inputs used to establish CPC scope | Mass or supplier composition basis | kg or documented fraction | Preserve supplier and batch evidence for animal species and the basis of each species share. Do not infer species from the generic flow name or product trade name. |
| `energy_carrier_preservation` | Electricity, fuels, steam, heat, and refrigeration | Energy or carrier mass/volume | source unit and MJ or kWh conversion | Retain the original metered or invoice unit and carrier identity. Convert only with a documented factor and do not combine electricity, fuel, steam, and cooling into an undocumented energy total. |
| `water_stream_separation` | Process, brine-makeup, cooling, and cleaning water | Mass or volume | kg or m3 | Record by use and convert volume to mass only with a documented density and condition. Keep fresh water, recirculated water, and condensate separate. |
| `packaging_mass_separation` | Primary, secondary, and transport packaging installed before the factory gate | Mass | kg | Record packaging material and mass per lot separately. Packaging may be in the inventory but shall not be included in the 1 kg cheese reference mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Milk, dairy ingredients, cheese feedstocks, characterizing ingredients, processing aids, cleaning materials, packaging, water, and energy carriers as received at the manufacturing-site gate, with supplier identity and state declared |
| starting_condition_role | Foreground manufacturing entry point; upstream production and delivery burdens are linked through separate datasets |
| product_classification_scope | Only a product with auditable CPC 3.0 subclass 22259 evidence after excluding products classifiable to 22251, 22252, 22253, or 22254 |
| recursive_input_rule | When cheese in the same product category enters processed-cheese or blending operations, record it once as a purchased or transferred product input with its upstream dataset and declared species/classification basis; do not recursively unfold the same production inside this foreground package |
| upstream_dataset_requirement | Separate representative upstream datasets are required for each milk or cheese feedstock, other material input, energy carrier, water supply, packaging material, transport service when in study scope, and waste-treatment service |
| disclosure | Declare included unit processes; animal species and CPC decision; product route and state; free-brine and draining convention; ingredients and coatings; packaged state; on-site storage; shared operations; allocation choices; upstream dataset identities; exclusions; data gaps; and any deviation from this boundary |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_gate` | PCR selection | Stop before modelling unless the retained evidence supports CPC 22259 and excludes classification to CPC 22251, 22252, 22253, and 22254. Mixed-species and other-species products require an auditable classification record. | `unsd-cpc-3-0` |
| `boundary_foreground_extent` | Manufacturing foreground | Include all site operations causally required from receipt through conforming factory-gate cheese output, including applicable coagulation, whey separation, salting, brining, ripening, processing, finishing, packaging, cold storage, cleaning, and on-site treatment. Report process exclusions. | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `boundary_recursive_cheese_input` | Same-category cheese input | Stop recursion at a purchased or transferred cheese input; link a separate upstream dataset and retain the input's species, classification, composition, amount, and allocation status. | `eu-pef-2021-2279` |
| `boundary_packaging_and_storage` | Factory-gate state | Include packaging installed and on-site storage used before the declared gate when present, but exclude packaging mass from the cheese reference mass. Declare brine and draining conventions separately. | `eu-pef-2021-2279` |
| `boundary_no_default_lci_from_standards` | Source use | Codex product definitions and EU BAT method or performance information shall not be converted into a universal yield, energy, water, recipe, emission, or waste value. Use site and lot records for quantities. | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_scope_control` | Ingredient receipt and CPC scope control | `required` | Always | Establish input identity, animal species, batch traceability, and applicability before production data are accepted | Per production lot linked to reference output |
| `primary_cheesemaking` | Primary cheesemaking and curd/whey separation | `conditional` | Include when the declared route coagulates milk or dairy material and separates curd, fresh cheese, or whey cheese | Foreground conversion | Per measured curd or cheese output of the process |
| `ripening_and_brining` | Ripening, surface treatment, and brining | `conditional` | Include when the product is ripened, mould-ripened, brined, coated, or surface-treated | Foreground conditioning | Per measured conditioned cheese output |
| `processed_cheese_manufacture` | Processed-cheese blending and thermal processing | `conditional` | Include when cheese or dairy feedstocks are formulated and processed into processed cheese | Foreground conversion | Per measured processed-cheese output |
| `finishing_and_factory_gate` | Portioning, grating, powdering, packaging, and factory-gate storage | `required` | Always; record only operations actually present | Final product conditioning and gate output | Per measured conforming net cheese output |
| `cleaning_and_on_site_treatment` | Cleaning, sanitation, and on-site wastewater or waste treatment | `required` | Always; treatment substeps are included only when operated on site | Shared or process-specific support | Allocated or directly metered per production lot and normalized to reference output |

### Process: Ingredient receipt and CPC scope control (`receipt_and_scope_control`)

#### Inputs

##### Product flows

###### Milk, dairy ingredient, or cheese feedstock received (`received_milk_or_cheese_feedstock`)

Record every received milk-derived feedstock that determines product identity, including its animal species, supplier, lot, physical state, mass, and upstream dataset. For a mixed-species or other-species product, attach the auditable CPC classification decision before the dataset is allowed to use this PCR.

- Selected flow: Site-specific milk, dairy ingredient, or cheese feedstock
- Flow property / unit: Mass / kg
- Amount rule: Measured received and accepted batch mass by feedstock and animal species
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_identity_and_scope`
- Sources: `unsd-cpc-3-0`; `codex-cxs-206-1999`; `codex-cxs-283-1978`

#### Outputs

##### Waste flows

###### Rejected or redirected received material (`rejected_received_material`)

Record received material rejected or redirected before production by actual disposition. Do not count a usable redirected product as waste when it retains product status.

- Selected flow: Rejected or redirected dairy material
- Flow property / unit: Mass / kg
- Amount rule: Measured lot mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_and_destination`
- Sources:

### Process: Primary cheesemaking and curd/whey separation (`primary_cheesemaking`)

#### Inputs

##### Product flows

###### Milk and dairy material charged to cheesemaking (`cheesemaking_dairy_charge`)

Record actual batch charges of milk, cream, whey cream, buttermilk, milk solids, or other dairy material used in the declared route, separated by animal species and material state.

- Selected flow: Site-specific milk and dairy material
- Flow property / unit: Mass / kg
- Amount rule: Batch-scale or verified transfer mass charged to the cheesemaking vessel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured output of `primary_cheesemaking`, then normalized to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials_and_recipe`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`

###### Cultures, coagulants, salt, and processing ingredients (`cheesemaking_minor_inputs`)

Record each culture, enzyme or coagulant, salt, permitted processing ingredient, and processing aid separately from actual batch issue records. Codex lists possible ingredients only within the applicable product standard; it does not set an LCI recipe.

- Selected flow: Site-specific culture, coagulant, salt, ingredient, or processing aid
- Flow property / unit: Mass / kg or documented activity unit with mass conversion
- Amount rule: Actual batch issue or consumption by named material; retain concentration and activity basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured output of `primary_cheesemaking`, then normalized to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials_and_recipe`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`

###### Process water supplied to cheesemaking (`cheesemaking_process_water`)

Record potable or process water that becomes an ingredient or contacts the product separately from cooling and cleaning water.

- Selected flow: Process water
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: Metered, weighed, or batch-dosed water by use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured output of `primary_cheesemaking`, then normalized to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_cleaning_records`
- Sources: `eu-fdm-bat-2019`

###### Electricity, heat, cooling, and fuels for cheesemaking (`cheesemaking_utilities`)

Record utility carriers separately for milk preparation, coagulation, cutting, cooking, draining, pressing, cooling, and associated transfers. No EU BAT performance level is used as a batch LCI default.

- Selected flow: Site-specific electricity, heat, cooling, steam, or fuel carrier
- Flow property / unit: Energy or carrier quantity / kWh, MJ, kg, m3, or source unit
- Amount rule: Process meter reading or documented allocation from a site meter for the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured output of `primary_cheesemaking`, then normalized to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_refrigeration_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Curd, fresh cheese, or whey cheese intermediate (`primary_cheese_intermediate`)

Measure the batch output at the declared drainage and temperature condition. The output state determines whether ripening, brining, processing, or finishing follows.

- Selected flow: Cheese intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming intermediate mass by lot and declared drainage condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured output of `primary_cheesemaking`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_and_state`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`

###### Whey or recovered dairy co-product (`whey_or_dairy_coproduct`)

Record sweet whey, acid whey, cream, permeate, or another recovered dairy stream separately when it leaves the process as a product or co-product. Retain composition, destination, and product-versus-waste decision.

- Selected flow: Site-specific whey or recovered dairy co-product
- Flow property / unit: Mass / kg
- Amount rule: Measured batch mass and solids or composition basis at transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured output of `primary_cheesemaking`, then normalized to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_and_destination`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Cheesemaking losses and wastewater (`cheesemaking_losses_and_wastewater`)

Record spilled or off-spec material, fines, unrecovered whey, and process wastewater by actual collection point and destination. Do not merge recoverable whey with wastewater.

- Selected flow: Cheesemaking waste or wastewater
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Measured, tank-gauged, or calculated from documented site records by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured output of `primary_cheesemaking`, then normalized to the reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_and_destination`
- Sources: `eu-fdm-bat-2019`

### Process: Ripening, surface treatment, and brining (`ripening_and_brining`)

#### Inputs

##### Product flows

###### Cheese entering ripening or brining (`cheese_for_conditioning`)

Record the incoming cheese lot mass, state, moisture basis, and previous process link.

- Selected flow: Cheese intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass into the conditioning step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured conditioned cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_and_state`
- Sources: `codex-cxs-283-1978`

###### Brine, salt, cultures, coatings, and surface materials (`conditioning_materials`)

Record make-up brine and salt separately from recirculated brine, and record cultures, coatings, wash solutions, herbs, spices, or other surface materials actually used. Declare which material remains incorporated in the reference product.

- Selected flow: Site-specific brine, salt, culture, coating, or surface material
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Actual lot charge, make-up, or net consumption after documented recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured conditioned cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials_and_recipe`
- Sources: `codex-cxs-283-1978`

###### Ripening, brining, and refrigeration utilities (`conditioning_utilities`)

Record electricity, heat, cooling, humidification, ventilation, and other utilities for the actual residence period and equipment used.

- Selected flow: Site-specific electricity, heat, cooling, or fuel carrier
- Flow property / unit: Energy or carrier quantity / kWh, MJ, kg, m3, or source unit
- Amount rule: Metered use or documented allocation for the lot's occupied time and storage condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured conditioned cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_refrigeration_records`
- Sources: `eu-fdm-bat-2019`

#### Outputs

##### Product flows

###### Conditioned, ripened, or brined cheese (`conditioned_cheese_output`)

Record output mass after the declared ripening, surface, or draining condition together with residence time, temperature regime, and whether free brine accompanies the product.

- Selected flow: Cheese intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming output mass using the declared draining and surface convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured conditioned cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_and_state`
- Sources: `codex-cxs-283-1978`

##### Waste flows

###### Brine purge, surface loss, and conditioning waste (`conditioning_waste`)

Record brine purge, wash-off, rind or trim removed as waste, off-spec product, and wastewater separately by treatment or recovery destination.

- Selected flow: Conditioning waste, spent brine, or wastewater
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Measured purge, removal, or disposal quantity by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured conditioned cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_and_destination`
- Sources: `eu-fdm-bat-2019`

### Process: Processed-cheese blending and thermal processing (`processed_cheese_manufacture`)

#### Inputs

##### Product flows

###### Cheese and dairy feedstocks charged to processed-cheese manufacture (`processed_cheese_feedstocks`)

Record every cheese and dairy feedstock by supplier or internal lot, animal species, CPC basis, composition, and mass. Same-category cheese input follows the recursive input rule.

- Selected flow: Site-specific cheese or dairy feedstock
- Flow property / unit: Mass / kg
- Amount rule: Actual batch formulation mass by feedstock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured processed-cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials_and_recipe`
- Sources: `unsd-cpc-3-0`; `codex-cxs-206-1999`

###### Water, salts, characterizing ingredients, additives, and processing aids (`processed_cheese_other_inputs`)

Record the actual batch formula by named material, concentration, function, and incorporated-versus-removed state. No uniform recipe or yield is authorized by this PCR.

- Selected flow: Site-specific water, salt, ingredient, additive, or processing aid
- Flow property / unit: Mass / kg
- Amount rule: Actual batch issue or consumption by named material and concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured processed-cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_materials_and_recipe`
- Sources:

###### Blending, melting, cooling, and refrigeration utilities (`processed_cheese_utilities`)

Record electricity, heat, steam, cooling, and fuels separately for the actual equipment and batch.

- Selected flow: Site-specific electricity, heat, cooling, steam, or fuel carrier
- Flow property / unit: Energy or carrier quantity / kWh, MJ, kg, m3, or source unit
- Amount rule: Metered use or documented process allocation for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured processed-cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_refrigeration_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Processed-cheese intermediate (`processed_cheese_output`)

Record conforming output mass and its actual recipe, product specification, temperature, and state before finishing.

- Selected flow: Cheese intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming batch output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per measured processed-cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_and_state`
- Sources:

##### Waste flows

###### Processed-cheese residues and off-spec material (`processed_cheese_waste`)

Record retained vessel material, start-up and changeover loss, off-spec product, and wastewater by actual disposition.

- Selected flow: Processed-cheese residue, off-spec material, or wastewater
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Measured or documented lot quantity by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per measured processed-cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_and_destination`
- Sources: `eu-fdm-bat-2019`

### Process: Portioning, grating, powdering, packaging, and factory-gate storage (`finishing_and_factory_gate`)

#### Inputs

##### Product flows

###### Cheese entering final conditioning (`cheese_for_finishing`)

Record the cheese mass and state entering the final operation, linked to the preceding process or purchased-feedstock record.

- Selected flow: Cheese intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass into finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output_and_state`
- Sources:

###### Packaging materials installed before the factory gate (`packaging_materials`)

Record each primary, secondary, and transport packaging material installed within the declared boundary. Packaging mass is never part of the 1 kg cheese reference amount.

- Selected flow: Site-specific packaging material
- Flow property / unit: Mass or count / kg or item with measured mass conversion
- Amount rule: Actual packaging issue, bill of materials, or counted units converted with verified unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_gate_state`
- Sources: `eu-pef-2021-2279`

###### Finishing, packaging, and cold-storage utilities (`finishing_and_storage_utilities`)

Record electricity, heat, compressed air, cooling, and fuel for operations actually used, including the lot's on-site storage duration.

- Selected flow: Site-specific electricity, heat, cooling, compressed air, or fuel carrier
- Flow property / unit: Energy or carrier quantity / kWh, MJ, kg, m3, or source unit
- Amount rule: Metered use or documented allocation for finishing and actual on-site storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_refrigeration_records`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Conforming factory-gate cheese (`reference_cheese_output`)

This row is the quantitative reference. The selected Tiangong flow is generic; the required qualifiers and CPC gate provide the product-specific meaning.

- Selected flow: Cheese `8b7b59ae-0b3c-4424-9d8f-a7fc304c7e77`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg measured net conforming cheese at the declared draining, ingredient, product-form, storage, and packaging state
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Trim, fines, rejected product, and packaging waste (`finishing_waste`)

Record cheese trim or fines, off-spec product, and packaging scrap separately, including whether each stream is reworked, sold, recycled, treated, or disposed.

- Selected flow: Finishing or packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured lot quantity by material, status, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net conforming reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_and_destination`
- Sources:

### Process: Cleaning, sanitation, and on-site wastewater or waste treatment (`cleaning_and_on_site_treatment`)

#### Inputs

##### Product flows

###### Cleaning water and cleaning or sanitation agents (`cleaning_inputs`)

Record water, cleaning chemicals, and sanitation agents by circuit or allocated operation. Keep clean-in-place recovery and fresh make-up separate where records permit.

- Selected flow: Site-specific cleaning water or cleaning agent
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Metered, tank-gauged, purchased, or batch-dosed quantity by cleaning event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Directly assigned or allocated to the production lot, then per 1 kg reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_cleaning_records`
- Sources: `eu-fdm-bat-2019`

###### Utilities for cleaning and on-site treatment (`cleaning_treatment_utilities`)

Record electricity, heat, steam, fuels, and treatment chemicals separately for cleaning and on-site treatment.

- Selected flow: Site-specific utility or treatment chemical
- Flow property / unit: Energy, Mass, or Volume / kWh, MJ, kg, m3, or source unit
- Amount rule: Metered or documented allocation for cleaning and treatment operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Directly assigned or allocated to the production lot, then per 1 kg reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_refrigeration_records`
- Sources: `eu-fdm-bat-2019`

#### Outputs

##### Waste flows

###### Wastewater transferred to treatment (`wastewater_to_treatment`)

Record wastewater volume or mass, treatment route, and available load or concentration measurements at the most specific metered boundary. Keep whey, brine purge, and product losses identifiable.

- Selected flow: Wastewater to treatment
- Flow property / unit: Volume or Mass / m3 or kg
- Amount rule: Metered or tank-gauged quantity by stream and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Directly assigned or allocated to the production lot, then per 1 kg reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_direct_emissions`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Direct emissions from manufacturing and on-site treatment (`direct_site_emissions`)

Record measured emissions to air, water, or soil, or calculate them from site activity records and an identified factor. Do not substitute a product-quality limit or BAT-associated level for actual LCI emissions.

- Selected flow: Site-specific elementary emission
- Flow property / unit: Mass / kg or measured source unit
- Amount rule: Direct measurement or calculation from collected site activity data and a documented factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Directly assigned or allocated to the production lot, then per 1 kg reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_direct_emissions`
- Sources: `eu-fdm-bat-2019`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Multi-output foreground processes | First avoid allocation by submetering and subdividing directly attributable operations; investigate system expansion only when the study goal and complete added functions support it. | `eu-pef-2021-2279` |
| `allocation_coproduct_status` | Whey, cream, permeate, recovered cheese, brine, and other output streams | Determine product, co-product, recyclable material, or waste status from documented quality, legal status, destination, and revenue or service evidence. Do not classify a recoverable stream as waste merely to avoid allocation. | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_physical_then_other` | Residual shared burdens | When subdivision or justified system expansion is not possible, use a relevant causal physical relationship supported by site data. If no such relationship exists, use another documented relationship such as economic value, report the period and prices, and test material sensitivity. This PCR supplies no default factor. | `eu-pef-2021-2279` |
| `allocation_shared_operations` | Cleaning, refrigeration, ripening rooms, utilities, storage, and on-site treatment | Prefer direct meters, occupied time, equipment load, volume, or another causal driver. Document the driver and ensure all allocation shares for the shared operation reconcile to the complete measured total. | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_upstream_feedstocks` | Purchased milk, dairy ingredients, and cheese feedstocks | Do not recreate upstream animal-husbandry or milk allocation in this foreground PCR. Use representative upstream datasets consistent with the declared species, geography, technology, and allocation method, and disclose mismatches. | `eu-pef-2021-2279` |
| `allocation_brine_and_rework` | Recirculated brine and reworked cheese | Record gross input, recovery or recirculation, purge, carry-over, and stock change. Assign only the measured net requirement and treatment burden to output; do not treat recovered material as burden-free or double count it as a new input. | `eu-fdm-bat-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_identity_and_scope` | `receipt_and_scope_control` | Product identity and CPC gate | Supplier record, receipt record, recipe, product specification, and classification decision | site; lot; supplier lot; animal species; species-share basis; material name; product designation; CPC code; reviewer; decision reference; decision date | Reconcile approved supplier and lot documents to the production order; retain the explicit reason CPC 22259 applies and named subclasses do not | document and kg or fraction | Every received lot and every recipe or classification change | All lots represented by the dataset | Each manufacturing site and product | No averaging across unresolved species or CPC decisions; aggregate only accepted lots with the same declared classification basis | Signed or controlled classification record, supplier evidence, production order, and review trace |
| `cp_batch_materials_and_recipe` | `primary_cheesemaking`; `ripening_and_brining`; `processed_cheese_manufacture` | Material and formulation inputs | Scale ticket, batch sheet, inventory issue, tank level, and composition certificate | lot; material; supplier lot; animal species where milk-derived; gross and net amount; concentration; solids; activity basis; rework; returned amount; incorporated state | Reconcile actual batch issues and returns to the production record; separate fresh, recovered, and recirculated material | kg, m3, or documented activity unit | Every production lot | All lots represented by the dataset | Process line and site | Sum net actual use by material and normalize only after conforming output is measured | Calibrated scale or tank record, inventory reconciliation, certificate, and operator approval |
| `cp_product_output_and_state` | `primary_cheesemaking`; `ripening_and_brining`; `processed_cheese_manufacture`; `finishing_and_factory_gate` | Intermediate and final product output | Scale ticket, production report, quality release, storage record, and draining-method record | lot; process; gross mass; net cheese mass; free-brine mass or inclusion; packaging mass; drainage method; product form; ripening or processing state; storage time and condition; conforming and rejected mass | Weigh at defined transfer and gate points; reconcile quality release and declared state to the same lot | kg, time, temperature, and documented state | Every lot and transfer; storage by actual residence period | All lots represented by the dataset | Process line, storage area, and site | Sum only conforming output under the same reference convention; report other states separately | Scale calibration, release record, lot genealogy, draining instruction, and storage log |
| `cp_energy_and_refrigeration_records` | `primary_cheesemaking`; `ripening_and_brining`; `processed_cheese_manufacture`; `finishing_and_factory_gate`; `cleaning_and_on_site_treatment` | Electricity, heat, cooling, steam, and fuels | Submeter, utility meter, fuel issue, operating-hour log, and engineering allocation | meter id; start and end reading; carrier; unit; equipment; operating time; product lot; storage occupancy; allocation driver; conversion factor | Prefer process submeters; otherwise reconcile site meter totals and allocate with a documented causal driver | kWh, MJ, kg, m3, or source unit | Per batch where metered; otherwise no less frequent than the site accounting period with lot linkage | Representative production periods covering actual operation and storage | Equipment, process area, and site | Preserve carriers; subtract documented exports; allocate reconciled totals; normalize to conforming output | Meter calibration, invoices, fuel records, run logs, and allocation reconciliation |
| `cp_water_and_cleaning_records` | `primary_cheesemaking`; `cleaning_and_on_site_treatment` | Process, cooling, cleaning water and agents | Water submeter, dosing record, clean-in-place log, purchase and stock record | water source; fresh, recycled, or condensate status; use; volume or mass; agent; concentration; cycle; recovery; meter id; lot or line | Meter or batch-dose by use; reconcile cleaning-agent purchases and stock changes; separate process and cleaning streams | m3, kg, and concentration | Each production or cleaning cycle where available; otherwise accounting period with process linkage | Representative cycles at each site | Process line, cleaning circuit, and site | Sum by source and use; deduct only verified recirculation without double counting; allocate shared cleaning by documented driver | Meter calibration, dosing system record, clean-in-place log, and stock reconciliation |
| `cp_coproduct_waste_and_destination` | `receipt_and_scope_control`; `primary_cheesemaking`; `ripening_and_brining`; `processed_cheese_manufacture`; `finishing_and_factory_gate` | Co-products, rework, rejects, wastes, brine purge, and destinations | Scale, tank, dispatch, waste manifest, sales record, and rework log | stream; product or waste status; mass or volume; solids or composition; destination; revenue if used; treatment; rework linkage; stock change | Measure at transfer; reconcile product, co-product, rework, waste, and stock movements to the same production period | kg, m3, composition, and currency when economic allocation is used | Every lot or dispatch; reconcile each accounting period | All represented production and accounting periods, including stock changes | All relevant process lines and site | Aggregate by status and destination only after lot reconciliation; do not merge whey, brine, wastewater, and solid waste | Scale or tank evidence, dispatch document, legal status, destination receipt, and ledger reconciliation |
| `cp_packaging_and_gate_state` | `finishing_and_factory_gate` | Packaging inventory and gate configuration | Packaging bill of materials, issue and return record, unit count, unit-mass test, and finished-goods specification | material; component; count; verified unit mass; gross issue; return; scrap; packaged state; product net mass; packaging level | Reconcile bill of materials to actual issues and returns; periodically verify unit mass | kg and item | Every packaging configuration and production lot; unit-mass checks on controlled schedule | All represented packaging configurations and production periods | Each line and site | Calculate net installed packaging by material and normalize to net cheese mass; keep packaging outside reference mass | Controlled bill of materials, count reconciliation, scale test, and product specification |
| `cp_wastewater_and_direct_emissions` | `cleaning_and_on_site_treatment` | Wastewater and direct elementary flows | Flow meter, tank record, laboratory result, stack or discharge measurement, activity record, and factor record | stream; point; flow; pH; temperature; measured parameter; concentration; load; sampling time; air, water, or soil compartment; activity; factor; treatment route | Use site monitoring at the most specific point; calculate only from collected activity and a documented factor when direct measurement is unavailable | m3, kg, concentration, and source unit | At the applicable site monitoring frequency and linked to the production period | Representative production and discharge periods, including normal and relevant abnormal operation | All relevant discharge and emission points | Calculate loads from matched flow and concentration; reconcile treated and bypassed streams; allocate only after site total is complete | Meter and laboratory QA, sampling record, factor citation, treatment log, and discharge reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_net_mass` | Final reference output | Net reference cheese mass = gross weighed unit or lot mass minus excluded packaging mass minus free brine excluded by the declared draining convention. If commercial net content uses another convention, report both masses and select one explicit reference convention. | Gross mass; packaging mass; free-brine mass; draining method; conformity status | kg net conforming cheese | `codex-cxs-283-1978`; `eu-pef-2021-2279` |
| `calc_inventory_normalization` | Every inventory amount | Normalized amount = reconciled amount attributable to represented lots divided by net conforming reference cheese output for the same lots. | Reconciled row amount; net conforming output; allocation share where applicable | Row amount per 1 kg reference output | `eu-pef-2021-2279` |
| `calc_batch_mass_reconciliation` | Each production process | Reconcile input mass, output cheese, co-products, rework, waste, direct mass releases, evaporation or moisture change, and stock change. Report the residual and investigate it; this PCR supplies no default cheese yield. | Batch material records; measured outputs; waste; emissions; stock change; moisture or evaporation evidence | Process mass-balance table and unresolved residual | `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `calc_energy_conversion` | Utility records | Convert original energy or carrier units only with a cited factor appropriate to the carrier and condition; retain the original quantity and report each carrier separately. | Meter or invoice quantity; carrier; conversion factor and source | kWh or MJ plus preserved source quantity | `eu-pef-2021-2279` |
| `calc_water_and_wastewater_load` | Water and wastewater | Water or wastewater load = matched stream volume multiplied by measured concentration where load is not directly measured. Keep process, cooling, cleaning, brine, and condensate streams distinct. | Stream volume; concentration; sampling period; density where mass conversion is used | Stream quantity and pollutant load by period | `eu-fdm-bat-2019` |
| `calc_shared_operation_allocation` | Shared utilities and support operations | Attributable amount = complete reconciled shared total multiplied by the documented causal allocation share; shares across all users shall sum to one for the same total and period. | Shared total; allocation driver; all user shares; production period | Attributable shared-operation amount | `eu-pef-2021-2279` |
| `calc_coproduct_allocation` | Residual multi-output burden | Apply the selected hierarchy in Section 7. Do not calculate an allocation factor until output status, quantities, physical relation, and any economic data are documented for the same representative period. | Complete process inventory; output quantities and status; chosen relation; price period if relevant | Documented allocation factors and sensitivity result | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | PCR selection and reference product | Every represented lot passes the CPC 22259 gate and retains animal-species and classification evidence. Unresolved mixed-species classification is excluded from aggregation. | Controlled classification decision, supplier evidence, recipe, and reviewer identity |
| `dq_product_state` | Reference output | Fresh/unripened, ripened, mould-ripened, or processed state; brine and draining convention; ingredients and coatings; product form; packaging; and storage are complete and consistent across reference mass and inventory. | Product specification, batch record, label or release record, draining instruction, and packaging bill of materials |
| `dq_temporal_representativeness` | Foreground activity data | The dataset reports dates, number of lots, production volume, operating modes, storage periods, and exceptional events. Seasonal or campaign differences are retained when material. | Lot genealogy, production calendar, meter periods, and representativeness assessment |
| `dq_technological_and_geographical_representativeness` | Site and route | Declare manufacturing site, equipment route, capacity or operating mode, upstream dataset geography and technology, and any mismatch. Do not combine materially different fresh, ripened, or processed routes without separate results. | Process flow sheet, site record, route description, and upstream dataset metadata |
| `dq_measurement_and_reconciliation` | Material, energy, water, waste, and emission records | Retain units, meter or scale identity, calibration or QA evidence, data transformations, allocation, and reconciliation residuals. Missing numerical values remain explicit data gaps and are not filled from Codex limits or EU BAT performance levels. | Calibration and laboratory QA, raw records, formulas, source citations, and reconciliation report |
| `dq_completeness` | Foreground processes | Quantify all known material and energy inputs, products, co-products, waste, wastewater, and direct elementary flows for included processes, or document why a row is not applicable or remains a gap. | Completed process checklist, raw-field coverage matrix, and approved gap log |
| `dq_source_scope` | Use of standards and guidance | Record which source provision supports identity, boundary, collection, or allocation. Do not extend fresh-cheese rules to ripened or processed cheese and do not use quality limits as LCI amounts. | Source-to-rule matrix and reviewer check |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope_gate` | Product category | Fail when animal-species evidence or the auditable classification decision is missing, when CPC 22259 is unresolved, or when the product is classifiable under CPC 22251, 22252, 22253, or 22254. | `unsd-cpc-3-0`; `codex-cxs-206-1999` |
| `validate_reference_identity` | Reference flow | Fail unless the product flow UUID, Mass UUID, unit-group UUID, kg unit, 1 kg amount, and net-mass convention match Section 3. The word `Cheese` alone never satisfies scope. | `eu-pef-2021-2279` |
| `validate_state_qualifiers` | Product state | Fail when ripening/processing state, brine and draining convention, incorporated ingredients and coatings, product form, packaging state, storage condition, lot, or site is absent. Apply CXS 221-2001 only to fresh/unripened product and CXS 283-1978 only within its scope. | `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `validate_process_route` | Process inventory | Fail when a route process declared present lacks its detailed inventory, or when a detailed process is not linked to the process map and represented lots. | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `validate_mass_and_flow_reconciliation` | Process and factory-gate balances | Fail when reference output is not measured, packaging or excluded free brine is included without disclosure, co-products or wastes are omitted, or the reported residual lacks investigation. No default yield is accepted. | `eu-pef-2021-2279`; `eu-fdm-bat-2019` |
| `validate_foreground_quantities` | LCI quantities | Fail any category-wide default copied from a Codex product-quality provision, EU BAT performance level, or uncited assumption. Material, energy, water, recipe, yield, waste, and emission amounts require site and lot records or a transparent calculation from them. | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019`; `eu-pef-2021-2279` |
| `validate_allocation` | Multi-output and shared operations | Fail when allocation is used without documenting attempts to avoid it, output status, method, data period, factors, reconciliation to the complete total, and sensitivity when a non-physical relationship is material. | `eu-pef-2021-2279` |
| `validate_upstream_and_recursive_inputs` | Purchased milk, cheese, other inputs, and treatment services | Fail when a material input lacks a representative upstream dataset or when same-category cheese is recursively unfolded instead of linked once with its classification and species basis. | `eu-pef-2021-2279` |
| `validate_source_scope` | Evidence use | Fail when a source is applied outside its stated product or installation scope, or when a quality, composition, permit, or BAT value is treated as an observed LCI quantity. | `codex-cxs-206-1999`; `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for one declared CPC 22259 cheese route and factory-gate state |
| downstream_use | `secondary_dataset` for documented studies and `background_dataset` only when the user's product, species/classification basis, route, geography, technology, time, brine convention, and packaging state are sufficiently representative |
| allowed_use | Factory-gate modelling of the declared fresh/unripened, ripened, mould-ripened, or processed CPC 22259 cheese; downstream life-cycle models that link separate upstream, distribution, use, and end-of-life datasets |
| excluded_use | Any cheese classified to CPC 22251-22254; unresolved mixed-species cheese; plant-based substitutes; generic “all cheese” averages; use of Codex limits or EU BAT performance levels as observed inventory; undisclosed transfer across materially different product states or routes |
| required_metadata | PCR id and version used; CPC decision and evidence; animal species and share basis; product and route state; brine and draining convention; recipe and incorporated ingredients; product form; packaging and reference-mass convention; site and geography; technology; represented dates and lots; storage; process map; upstream datasets; allocation; source versions |
| required_quality_disclosure | Coverage by process and raw field; measured versus calculated values; meter, scale, laboratory, and calibration evidence; mass, energy, water, and waste reconciliation; allocation drivers and sensitivity; representativeness; data gaps; uncertainty; source-scope limits; deviations |
| update_trigger | Change in animal species or CPC decision, recipe or product identity, fresh/ripened/processed route, brine or draining convention, packaging or reference-mass basis, site or technology, allocation or co-product destination, upstream dataset, material supplier, monitoring method, or represented period; or evidence that a cited source has materially changed |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 22259 and sibling subclasses 22251-22254, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, accessed 2026-08-12 | Residual category scope, named-species exclusions, and classification gate |
| `codex-cxs-206-1999` | `standard` | Codex Alimentarius, General Standard for the Use of Dairy Terms, CXS 206-1999, amended 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B206-1999%252FCXS_206e.pdf, accessed 2026-08-12 | Dairy identity, animal-species declaration, milk-product and composite-milk-product terminology; not quantitative LCI evidence |
| `codex-cxs-283-1978` | `standard` | Codex Alimentarius, General Standard for Cheese, CXS 283-1978, amended 2024, official Codex standards portal: https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/, accessed 2026-08-12 | General cheese identity and declared ripened/unripened state where applicable; possible ingredient and surface-state disclosure; not a universal yield, recipe, or LCI value |
| `codex-cxs-221-2001` | `standard` | Codex Alimentarius, Group Standard for Unripened Cheese Including Fresh Cheese, CXS 221-2001, amended 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B221-2001%252FCXS_221e.pdf, accessed 2026-08-12 | Fresh/unripened branch identity and applicable ingredient disclosure only; not ripened or processed-cheese LCI evidence |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint method, consolidated English text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng, accessed 2026-08-12 | Functional unit and reference flow, process boundary disclosure, company-specific foreground data, normalization, data quality, upstream datasets, and multi-functionality hierarchy |
| `eu-fdm-bat-2019` | `official_guidance` | European Commission, Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng, accessed 2026-08-12 | Process-level inventory of water, energy, raw materials, wastewater, emissions, residues, and monitoring strategy; BAT performance and quality levels are not used as foreground LCI defaults |
