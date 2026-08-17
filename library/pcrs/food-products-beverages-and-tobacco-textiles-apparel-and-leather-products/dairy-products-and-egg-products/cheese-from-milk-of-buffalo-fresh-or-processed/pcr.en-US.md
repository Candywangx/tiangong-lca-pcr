---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-buffalo-fresh-or-processed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cheese from milk of buffalo, fresh or processed

## 1. Scope and Applicability

This PCR applies to cheese whose milk origin is exclusively buffalo and that leaves the reporting factory as fresh/unripened cheese, ripened cheese, or processed cheese for direct consumption or further processing. It covers bulk, retail, food-service, brined, unbrined, unpackaged, and packaged market states when the declared reference product and foreground records identify the applicable state.

The category is milk-species specific. The foreground data package shall demonstrate buffalo origin for every milk and milk-derived input. A product containing milk, cream, curd, cheese, milkfat, milk solids, whey material, or another milk-derived ingredient from cattle, sheep, goats, or another non-buffalo species is not automatically covered. It requires an explicit classification determination based on the product as supplied and all contributing animal species; until that determination is documented, this PCR shall not be used as an exact category rule.

Products that are not cheese, plant-based analogues, whey products sold separately, cheese made exclusively from non-buffalo milk, and mixed-milk cheeses without an accepted category determination are excluded. Farm production of buffalo milk and production of purchased ingredients or packaging are represented by upstream datasets rather than repeated inside the cheese factory foreground boundary.

Codex product standards are used here to identify and describe applicable cheese states and dairy-origin claims. Their composition, quality, hygiene, additive, and labelling provisions are not converted into default life-cycle inventory quantities, yields, recipes, loss factors, energy demands, or emission factors. All such quantities shall come from site- and batch-specific records unless this PCR explicitly provides an applicable method formula.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-buffalo-fresh-or-processed |
| classification_refs | CPC 3.0: 22252, Cheese from milk of buffalo, fresh or processed (`unsd-cpc-3-0`) |
| covered_products | Cheese made exclusively from buffalo milk and buffalo milk-derived ingredients; fresh/unripened, ripened, or processed; brined or unbrined; with declared ingredients and packaging state |
| excluded_products | Cheese containing any non-buffalo milk-derived input unless a separate documented classification decision establishes applicability; non-cheese dairy products; plant-based analogues; separately marketed whey products |
| representative_product | Factory-gate buffalo-milk cheese in the declared product state |
| production_route | Receipt and verification of buffalo milk and milk-derived materials; preparation and cheesemaking; draining, salting or brining as applicable; ripening or processed-cheese manufacture as applicable; packaging and factory storage as applicable |
| market_state | Declare fresh/unripened, ripened, or processed; brined or unbrined; ingredient/formulation state; packaged or unpackaged; storage condition; and net-mass basis |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Buffalo-milk cheese in the declared fresh/unripened, ripened, or processed market state |
| How much | 1 kg net cheese product at the reporting factory gate |
| How well | Conforms to the declared product specification and buffalo-only milk-origin claim; no product-quality threshold is used as an LCI factor |
| How long or cycle | One completed production lot through the declared factory-gate release point, including ripening, brining, packaging, and factory storage only when applicable |
| reference_flow_link | The functional unit is realized by the single Tiangong product flow and mass reference object below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cheese from milk of buffalo, fresh or processed `4b760369-5f64-47c7-b922-9dbe4b8abf98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | milk animal species and buffalo-only evidence; mixed-milk determination if triggered; cheese state as fresh/unripened, ripened, or processed; named variety or product specification; salt and brine state; ingredients and processing aids; packaging format and packaged/unpackaged state; reference net-mass basis; factory-gate storage condition; production lot and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference cheese output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the released reference cheese on the declared net-product basis. Exclude packaging mass and separately present free brine from the 1 kg cheese reference amount; inventory them separately. If commercial records use another basis, retain the original record and document the conversion. |
| `measurement_milk_species` | milk and milk-derived inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each animal species and supplier lot separately. Do not merge non-buffalo milk-derived material into a generic milk total; any non-buffalo quantity triggers the mixed-milk classification rule. |
| `measurement_product_state` | reference product and intermediate cheese | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve the measured state at each weighing point and declare whether mass is before or after draining, salting/brining, ripening, processing, and packaging. Do not apply a standard moisture, yield, or retention factor. |
| `measurement_brine` | salt and brine inputs and outputs | Mass or volume with measured density | kg or m3 | Record make-up salt, make-up water, purchased brine, recirculated internal brine, purge, carry-over, and wastewater separately. Convert volume to mass only with batch- or period-specific density evidence. |
| `measurement_energy` | electricity, fuels, steam, heat, cooling, and compressed air | Delivered energy or physical carrier quantity | kWh, MJ, kg, or m3 as recorded | Retain original meter or invoice units and conversion factors. Allocate common utilities only after separately metered process use has been exhausted; do not use a generic cheese-energy factor. |
| `measurement_packaging` | primary, secondary, and tertiary packaging | Mass or item count with measured item mass | kg | Record packaging by material and format. Convert item counts to mass using supplier specifications or measured lot-average item mass, and keep packaging outside the net cheese reference mass. |

## 5. System Boundary

The foreground boundary begins when buffalo milk and other purchased materials are received at the reporting cheese facility. It includes identity checks and reception, storage and preparation of milk, thermal treatment or standardisation when performed, coagulation and curd handling, whey separation, salting or brining, ripening, processed-cheese operations, packaging, factory storage, cleaning, refrigeration, on-site utility use, direct emissions, waste handling, and on-site wastewater treatment when these activities serve the declared product. Upstream production of buffalo milk, ingredients, energy carriers, water, packaging, and purchased services is represented by linked supplier-specific or appropriate secondary datasets. Distribution after the declared factory gate, retail, consumer use, and end-of-life are outside this foreground dataset unless a downstream lifecycle model adds them transparently.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Buffalo milk and all other milk-derived inputs received at the reporting facility, identified by supplier, lot, animal species, physical state, and quantity |
| starting_condition_role | Upstream product inputs with linked production datasets; the cheese factory foreground starts at receipt |
| product_classification_scope | Buffalo-only cheese in CPC 3.0 subclass 22252; the cheese state may be fresh/unripened, ripened, or processed when declared |
| recursive_input_rule | Purchased buffalo cheese or curd used to make the reference product is recorded as an input with its own upstream dataset and is not recursively recreated inside this foreground dataset. Purchased mixed-species cheese or curd triggers classification determination before use of this PCR. |
| upstream_dataset_requirement | Link buffalo milk, purchased buffalo cheese/curd, other ingredients, energy, water, packaging, and external treatment or transport services to temporally, geographically, and technologically representative upstream datasets; disclose proxies |
| disclosure | Declare animal-species evidence, milk and milk-derived ingredient composition, cheese state, salt/brine state, ingredients and aids, packaging state, net-mass basis, facility and lot coverage, co-products, allocation, exclusions, and all upstream proxies |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_buffalo_origin` | all milk and milk-derived inputs | Include this product category only when supplier and batch evidence supports buffalo origin for every milk-derived input. Any non-buffalo input triggers an explicit classification determination before modelling proceeds. | `codex-cxs-206-1999`; `unsd-cpc-3-0` |
| `boundary_route_state` | foreground process selection | Include only process modules actually used by the declared route, but do not omit ripening, brining, processing, packaging, cold storage, cleaning, refrigeration, waste, or wastewater activities when they occur. | `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |
| `boundary_upstream_links` | purchased inputs and services | Represent production of received materials and purchased services with linked upstream datasets rather than duplicating them in the cheese factory foreground. | `eu-pef-2021` |
| `boundary_bat_applicability` | application of EU FDM BAT evidence | Use EU FDM BAT requirements or performance information only when the reporting installation and operating basis fall within the Decision's stated scope and the cited dairy condition applies. Never transfer facility-level or product-quality values into a universal cheese LCI. | `eu-fdm-bat-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `milk_reception_preparation` | Buffalo milk reception and preparation | required | Always included | Foreground receipt, identity control, storage, and preparation | kg buffalo milk and milk-derived material received by lot |
| `cheesemaking_separation` | Cheesemaking and whey separation | required | Always included | Foreground coagulation, curd handling, draining, salting, and separation | kg cheese output and co-products by batch |
| `ripening_brining` | Ripening and brining | conditional | Include when the declared product is ripened or held in brine, or when brine management occurs | Foreground maturation, brine management, storage, and losses | kg cheese entering and leaving the operation by batch |
| `processed_cheese_manufacture` | Processed-cheese manufacture | conditional | Include when the declared reference product is processed cheese | Foreground blending, heating/emulsifying, forming, and cooling | kg processed cheese output by batch |
| `packaging_factory_storage` | Packaging and factory storage | conditional | Include when packaging or storage occurs before the declared factory gate | Foreground packing, refrigeration, and release | kg net cheese released and packaging used |
| `cleaning_wastewater` | Cleaning and on-site wastewater or waste handling | required | Always include cleaning; include on-site treatment operations that serve the product | Foreground support and environmental control | allocated activity and outputs per reporting period |

### Process: Buffalo milk reception and preparation (`milk_reception_preparation`)

#### Inputs

##### Product flows

###### Buffalo milk and buffalo milk-derived materials received (`buffalo_milk_inputs`)

Record each supplier lot of buffalo milk, cream, milk solids, or other buffalo milk-derived material that crosses the facility boundary. Keep animal-species evidence and physical state with the quantity record.

- Selected flow: Buffalo milk or applicable buffalo milk-derived product; use the exact Tiangong flow selected for the supplier material
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by supplier lot and material state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milk_origin_receipts`
- Sources: `codex-cxs-206-1999`

###### Water used in milk preparation (`preparation_water`)

Record water added to product or used directly in preparation separately from cleaning water.

- Selected flow: Process water matched to the site supply
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: measured batch use; no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-fdm-bat-2019`

###### Electricity and thermal utilities for receipt and preparation (`preparation_energy`)

Record metered electricity and delivered fuels, steam, heat, cooling, or compressed air used for receiving, storage, pumping, thermal treatment, separation, or standardisation.

- Selected flow: Site-specific electricity and energy-carrier flows
- Flow property / unit: Energy / kWh or MJ; carrier mass or volume in original record unit
- Amount rule: measured process use or documented allocation from common meters; no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Rejected milk or reception residues (`rejected_milk`)

Record rejected, spilled, or discarded milk-derived material by fate; do not net it against accepted input.

- Selected flow: Rejected milk or applicable organic waste flow matched to actual fate
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or lost mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared buffalo milk for cheesemaking (`prepared_buffalo_milk`)

Track the internal prepared-milk quantity and state to support batch mass balance; it does not cross the product system boundary when consumed on site.

- Selected flow: Internal prepared buffalo milk
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch transferred to cheesemaking
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Cheesemaking and whey separation (`cheesemaking_separation`)

#### Inputs

##### Product flows

###### Prepared buffalo milk (`cheesemaking_milk`)

Record prepared buffalo milk entering the vat by batch and preserve its link to reception lots.

- Selected flow: Internal prepared buffalo milk
- Flow property / unit: Mass / kg
- Amount rule: measured vat input mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cheesemaking batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `codex-cxs-283-1978`

###### Cultures, coagulants, salt, ingredients, and processing aids (`cheesemaking_ingredients`)

Record every material added to the cheese, curd, surface, or process, including starter cultures, coagulating agents, salt, permitted ingredients, additives, and processing aids. Preserve ingredient function and whether material remains in product, co-product, wastewater, or waste.

- Selected flow: Ingredient- and formulation-specific product flow
- Flow property / unit: Mass / kg or original auditable purchasing unit
- Amount rule: batch issue or dosing record; no standard recipe or retention factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_dosing_records`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`

###### Cheesemaking water and utilities (`cheesemaking_water_energy`)

Record process water, electricity, heat, steam, cooling, and compressed air consumed in cheesemaking, curd handling, and separation.

- Selected flow: Site-specific water and utility flows
- Flow property / unit: Volume, mass, or energy in original auditable units
- Amount rule: measured process use or documented common-meter allocation; no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Cheesemaking losses and off-specification material (`cheesemaking_waste`)

Record curd fines, spilled material, filters, and off-specification cheese separately by treatment or recovery route.

- Selected flow: Waste flow matched to material and actual management route
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled waste by batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

#### Outputs

##### Product flows

###### Buffalo-milk cheese before conditional finishing (`primary_cheese_output`)

Measure cheese leaving the primary cheesemaking step and identify whether it is released as fresh cheese or transferred to ripening, brining, processed-cheese manufacture, or packaging.

- Selected flow: Cheese from milk of buffalo, fresh or processed `4b760369-5f64-47c7-b922-9dbe4b8abf98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured batch output at the declared transfer state; no default yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cheesemaking batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release_records`
- Sources: `codex-cxs-283-1978`; `codex-cxs-221-2001`

###### Whey and other milk-derived co-products (`whey_coproducts`)

Record whey, cream, whey cream, or recovered milk solids as separate product outputs only when they leave the process for beneficial use and meet the declared destination specification.

- Selected flow: Co-product-specific flow matched to actual state and destination
- Flow property / unit: Mass / kg
- Amount rule: measured output mass by batch and destination; no default whey yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cheesemaking batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources:

##### Waste flows

###### Whey sent to waste treatment (`whey_to_treatment`)

Whey without a beneficial product destination is a waste output and shall not be reported as a co-product.

- Selected flow: Whey waste matched to actual treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cheesemaking batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources:

##### Elementary flows

### Process: Ripening and brining (`ripening_brining`)

#### Inputs

##### Product flows

###### Cheese entering ripening or brining (`ripening_input_cheese`)

Record cheese mass and state at entry and link it to the originating batch.

- Selected flow: Internal buffalo-milk cheese
- Flow property / unit: Mass / kg
- Amount rule: measured entry mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per ripening or brining batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ripening_brining_records`
- Sources: `codex-cxs-283-1978`

###### Brine, salt, water, and ripening utilities (`ripening_brine_utilities`)

Record brine make-up and purge constituents, washing or surface-treatment materials, electricity, cooling, heat, and humidity-control utilities used during the declared operation.

- Selected flow: Material- and utility-specific flows matched to site supply
- Flow property / unit: Mass, volume, or energy in original auditable units
- Amount rule: measured batch or period use, with recirculated internal brine excluded from new external input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cheese leaving ripening or brining
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ripening_brining_records`
- Sources: `codex-cxs-283-1978`; `eu-fdm-bat-2019`

##### Waste flows

#### Outputs

##### Product flows

###### Ripened or brined buffalo-milk cheese (`ripened_brined_cheese`)

Record cheese mass, ripening duration, brine state, and release condition. Free brine accompanying the market product remains a separately inventoried material and is not included in net cheese mass.

- Selected flow: Cheese from milk of buffalo, fresh or processed `4b760369-5f64-47c7-b922-9dbe4b8abf98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured released cheese mass by batch; no standard aging-loss factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per ripening or brining batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release_records`
- Sources: `codex-cxs-283-1978`

##### Waste flows

###### Brine purge and ripening losses (`brine_ripening_waste`)

Record spent brine, surface material, trim, and spoiled cheese separately by fate.

- Selected flow: Waste flow matched to material state and destination
- Flow property / unit: Mass / kg or Volume / m3
- Amount rule: measured batch or reporting-period output; no default loss factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cheese leaving ripening or brining
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

### Process: Processed-cheese manufacture (`processed_cheese_manufacture`)

#### Inputs

##### Product flows

###### Buffalo cheese and declared formulation inputs (`processed_cheese_inputs`)

Record each cheese, dairy ingredient, water, salt, emulsifying salt, additive, and other formulation input by batch. Every milk-derived input remains subject to the buffalo-only rule.

- Selected flow: Ingredient-specific flow; buffalo cheese uses the reference product flow when applicable
- Flow property / unit: Mass / kg
- Amount rule: measured batch formulation quantity; no standard recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg processed cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processed_cheese_batch_records`
- Sources: `codex-cxs-206-1999`

###### Processing electricity and thermal energy (`processed_cheese_energy`)

Record energy for blending, heating/emulsifying, forming, and cooling from meters or documented common-utility allocation.

- Selected flow: Site-specific electricity and energy-carrier flows
- Flow property / unit: Energy / kWh or MJ; carrier quantity in original record unit
- Amount rule: measured batch or reporting-period use; no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg processed cheese output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

#### Outputs

##### Product flows

###### Processed buffalo-milk cheese output (`processed_cheese_output`)

Measure finished processed cheese and retain the complete formulation and animal-species evidence.

- Selected flow: Cheese from milk of buffalo, fresh or processed `4b760369-5f64-47c7-b922-9dbe4b8abf98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured batch output; no default conversion yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per processed-cheese batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release_records`
- Sources:

##### Waste flows

###### Processed-cheese residues and off-specification product (`processed_cheese_waste`)

Record residues and off-specification outputs by recovery, rework, or waste route without netting them against product output.

- Selected flow: Waste or rework flow matched to actual destination
- Flow property / unit: Mass / kg
- Amount rule: measured batch output by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per processed-cheese batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

### Process: Packaging and factory storage (`packaging_factory_storage`)

#### Inputs

##### Product flows

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and allocated tertiary packaging by material, format, supplier, and batch or reporting period.

- Selected flow: Packaging-material-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: measured issue quantity or item count converted with supplier or measured item mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Packaging and storage utilities (`packaging_storage_energy`)

Record electricity, heat, cooling, compressed air, and other utilities used before factory-gate release.

- Selected flow: Site-specific utility flow
- Flow property / unit: Energy / kWh or MJ; carrier quantity in original record unit
- Amount rule: measured process use or documented common-meter allocation; no default quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Packaging waste and damaged product (`packaging_waste`)

Record unused or damaged packaging and product losses separately by material and destination.

- Selected flow: Waste flow matched to material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured reporting-period output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Refrigerant emissions from factory cooling (`refrigerant_emissions`)

Calculate direct refrigerant emissions from verified additions, recoveries, stock changes, and equipment records for the product-serving cooling system.

- Selected flow: Refrigerant-specific elementary emission flow
- Flow property / unit: Mass / kg
- Amount rule: calculated loss by refrigerant from collected service and stock records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021`

#### Outputs

##### Product flows

###### Factory-gate reference cheese (`reference_cheese_output`)

This is the declared fresh/unripened, ripened, or processed buffalo-milk cheese released at the factory gate on the net cheese mass basis.

- Selected flow: Cheese from milk of buffalo, fresh or processed `4b760369-5f64-47c7-b922-9dbe4b8abf98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net released product mass; normalize all inventory to 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release_records`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Cleaning and on-site wastewater or waste handling (`cleaning_wastewater`)

#### Inputs

##### Product flows

###### Cleaning water, chemicals, and treatment materials (`cleaning_treatment_inputs`)

Record cleaning-in-place and other sanitation water, detergents, disinfectants, and on-site wastewater or waste-treatment materials serving the modelled production.

- Selected flow: Material-specific site supply flow
- Flow property / unit: Mass / kg or Volume / m3
- Amount rule: measured use by system or documented allocation from reporting-period totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_treatment_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater, sludge, and treatment residues (`wastewater_residues`)

Record wastewater volume and relevant loads, plus sludge and other residues, at the actual hand-off or emission point. Keep diverted whey, brine, and product losses visible rather than hiding them in a generic wastewater total.

- Selected flow: Wastewater or residue flow matched to actual treatment and destination
- Flow property / unit: Volume / m3, Mass / kg, and measured pollutant load as applicable
- Amount rule: measured discharge and laboratory or treatment records; no default discharge factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Direct air and water emissions from on-site operations (`direct_site_emissions`)

Record measured or calculated elementary emissions from boilers, refrigeration, wastewater treatment, and other included site operations by substance and method.

- Selected flow: Substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: site measurement or calculation from collected operating records and an applicable documented method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference cheese output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared operations and utilities | Avoid allocation by separately metering or otherwise subdividing reception, cheesemaking, ripening/brining, processed-cheese manufacture, packaging, storage, cleaning, and treatment activities whenever the records permit. | `eu-pef-2021` |
| `allocation_internal_recycling` | internal whey, curd, brine, rework, and recovered heat | Model internal recirculation once and do not create a co-product credit for material or energy that does not cross the product system boundary. | `eu-pef-2021` |
| `allocation_coproduct_status` | whey and other milk-derived outputs | Treat an output as a co-product only when it leaves for documented beneficial use and has an upstream-recognised product function; otherwise model it as waste to its actual treatment route. | `eu-pef-2021` |
| `allocation_residual_burdens` | cheese and co-products after subdivision | If subdivision or a defensible physical causal relation cannot resolve shared burdens, use a documented allocation basis consistent across the reporting period, disclose quantities and prices or physical parameters, and test sensitivity to an alternative relevant basis. Do not prescribe a universal whey or cheese allocation factor. | `eu-pef-2021` |
| `allocation_waste_treatment` | waste and wastewater treatment | Assign treatment inputs, direct emissions, and residues to the generating processes where traceable; otherwise allocate the common system using measured causal drivers such as wastewater volume and pollutant load, and disclose the method. | `eu-fdm-bat-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_milk_origin_receipts` | `milk_reception_preparation` | milk and milk-derived inputs | supplier delivery, certificate, and receiving record | supplier; lot; material; animal species; milk origin claim; mass; physical state; acceptance; date | reconcile receiving scale or calibrated meter with supplier documents and identity evidence | kg | every delivery lot | all lots in reporting period | all supplying sites and reporting facility | sum accepted mass by material, species, lot, and state; never merge species before classification check | calibrated measurement; supplier certificate; lot traceability; exception log |
| `cp_ingredient_dosing_records` | `cheesemaking_separation` | ingredients and processing aids | recipe issue, dosing, and stock record | batch; material; supplier lot; animal species where milk-derived; issued mass; returned mass; function | reconcile batch dosing with inventory movement and formulation | kg or original unit | every batch | representative production period including all declared products | reporting facility | net issued quantity by batch and ingredient; preserve fate and milk species | approved formulation; scale calibration; stock reconciliation |
| `cp_water_records` | `milk_reception_preparation` | preparation water | meter, batch sheet, and invoice | meter; start; end; batch; use; source; density if converted | direct meter preferred; documented allocation only for unmetered common supply | m3 or kg | every batch or meter interval | full reporting period | reporting facility | subtract verified non-product uses, then normalize to released cheese | meter calibration; reconciliation; allocation record |
| `cp_water_energy_records` | `cheesemaking_separation` | cheesemaking water and utilities | meter and operating record | utility; meter; start; end; batch; operating hours; carrier quantity | direct process metering or documented common-meter allocation | original meter unit | batch, shift, or meter interval | full reporting period | reporting facility | aggregate by utility and process, then normalize to released cheese | calibration; invoices; meter coverage; allocation key |
| `cp_energy_utility_records` | multiple | process utilities | meter, fuel invoice, and operating record | process; carrier; meter; start; end; purchase; stock change; conversion factor | reconcile submeter totals with facility purchases and stock changes | kWh, MJ, kg, or m3 | meter interval and monthly reconciliation | full reporting period including seasonal storage | reporting facility | process use first; allocate residual common use with documented causal driver | calibration; invoices; stock reconciliation; conversion source |
| `cp_batch_mass_balance` | `cheesemaking_separation` | internal transfers and batch balance | batch production record | all material inputs; internal transfers; outputs; losses; start and end stock; state | weigh or meter each material at defined transfer points | kg | every batch | all included batches | reporting facility | reconcile inputs, outputs, and stock change by batch before period aggregation | calibrated scales; batch closure; exception investigation |
| `cp_product_release_records` | multiple | cheese outputs and reference product | batch release and warehouse record | batch; product; state; net mass; brine state; packaging; release date; disposition | verified production scale and released-stock reconciliation | kg | every released lot | all released lots in reporting period | reporting facility | sum released net cheese mass by declared product state; exclude free brine and packaging | scale calibration; release approval; warehouse reconciliation |
| `cp_coproduct_records` | `cheesemaking_separation` | whey and milk-derived co-products | transfer and dispatch record | batch; output; state; mass; destination; sale or beneficial use evidence | measure at transfer and reconcile dispatch | kg | every batch or dispatch | full reporting period | reporting facility and direct recipient | sum separately by output state and destination; classify non-beneficial output as waste | calibrated meter or scale; dispatch note; recipient evidence |
| `cp_ripening_brining_records` | `ripening_brining` | cheese, brine, salt, water, and utilities | batch, brine-management, and storage log | cheese entry and exit mass; dates; brine make-up; purge; carry-over; salt; water; utilities; losses | weigh cheese at entry and exit and meter or reconcile brine materials and utilities | kg, m3, kWh, or MJ | every batch and brine intervention | full ripening or brining duration for released lots | reporting facility | link all records to originating and released lots; distinguish recirculation from external input | scale and meter calibration; brine log; stock and batch reconciliation |
| `cp_processed_cheese_batch_records` | `processed_cheese_manufacture` | processed-cheese formulation | batch formulation and production record | each input; milk species; mass; output; rework; temperature/time where used for process identity | reconcile issued formulation with measured outputs and residues | kg | every batch | all included processed-cheese batches | reporting facility | aggregate only batches matching declared formulation and buffalo-only rule | approved formulation; calibrated scales; batch closure |
| `cp_packaging_records` | `packaging_factory_storage` | packaging materials | packaging issue, supplier specification, and reject record | material; format; supplier lot; issued items or mass; returned items; rejects; item mass | reconcile packaging issues with packed output and rejects | kg or item | each packaging lot with monthly reconciliation | full reporting period | reporting facility | convert counts using lot-specific mass and sum by material | supplier specification; measured item mass; stock reconciliation |
| `cp_waste_records` | multiple | material losses and wastes | waste transfer, scale, and destination record | source process; material; state; mass; destination; recovery; date | measure at collection or dispatch and reconcile with batch or period balance | kg or m3 | each transfer with monthly reconciliation | full reporting period | reporting facility and direct treatment destination | aggregate by source, material, and treatment route without netting against inputs | scale or meter evidence; transfer note; treatment receipt |
| `cp_cleaning_treatment_records` | `cleaning_wastewater` | cleaning and treatment inputs | cleaning programme, dosing, meter, and stock record | system; chemical; water; dose; operating cycle; stock movement; served processes | direct dosing and water metering or documented allocation | kg or m3 | every cleaning cycle or meter interval | full reporting period | reporting facility | aggregate by served system and allocate residual common cleaning using documented driver | calibration; stock reconciliation; cleaning log |
| `cp_wastewater_records` | `cleaning_wastewater` | wastewater and residues | flow meter, sample, laboratory, and treatment record | discharge volume; sampling time; concentration; pollutant load; destination; sludge and residue mass | flow measurement and representative sampling appropriate to the discharge | m3, kg, or mg/L with load calculation | continuous or permit/management frequency | full reporting period with variability retained | reporting facility discharge and on-site treatment | calculate loads from matched flow and concentration data; allocate with documented causal drivers | meter calibration; laboratory QA; sample representativeness; treatment reconciliation |
| `cp_refrigerant_records` | `packaging_factory_storage` | refrigerant losses | equipment inventory, service, purchase, recovery, and stock record | refrigerant; equipment; opening stock; additions; recovery; closing stock; transfer | annual or reporting-period mass balance by refrigerant and equipment system | kg | each service event and period close | full reporting period | systems serving included operations | calculate unrecovered loss and allocate only across served products with documented driver | service certificates; cylinder weights; inventory reconciliation |
| `cp_direct_emission_records` | `cleaning_wastewater` | direct site emissions | monitoring and operating record | source; substance; compartment; measured value; flow; operating time; method; calculation factor | use applicable monitoring or calculation method and preserve original observations | kg and original measurement unit | method- or permit-specific | full reporting period | included site sources | calculate period mass by substance, then attribute to served operations | method record; calibration; laboratory QA; applicability statement |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_buffalo_origin_check` | all milk-derived inputs | List every milk-derived input by animal species. Applicability is buffalo-only when all such inputs are evidenced as buffalo. Any non-buffalo or unknown species result is a classification-review trigger, not a quantity to be silently included. | supplier and batch animal-species records; formulation | buffalo-only pass or mixed/unknown classification trigger | `codex-cxs-206-1999`; `unsd-cpc-3-0` |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributable reporting-period or batch amount / released net reference cheese mass on the declared basis | attributable amount; released net cheese mass | amount per 1 kg reference cheese | `eu-pef-2021` |
| `calc_net_cheese_mass` | reference product | net cheese mass = gross marketed unit mass - packaging mass - separately present free brine mass; use measured values for the same lot and declare any commercial convention that differs | gross unit mass; packaging mass; free brine mass | kg net cheese |  |
| `calc_batch_mass_balance` | milk preparation, cheesemaking, ripening/brining, and processing | measured inputs + opening stock = measured outputs + closing stock + measured or reconciled losses; investigate unexplained imbalance rather than forcing a standard yield | batch input, output, stock, and loss records | reconciled batch balance and unexplained difference |  |
| `calc_brine_balance` | brining | external brine inputs = make-up water + make-up salt + purchased brine; outputs and stock change shall separately identify product carry-over, purge, wastewater, recovery, and closing stock | brine composition, make-up, purge, carry-over, and stock records | material-specific brine balance |  |
| `calc_utility_allocation` | common utilities | attributable utility = measured process use; for unmetered residuals, apply a disclosed causal driver over the same period and retain both facility total and allocation denominator | meters; invoices; operating driver; product output | utility by process and product | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `calc_refrigerant_loss` | refrigeration systems | loss by refrigerant = opening stock + additions + received transfers - closing stock - recovered quantity - outgoing transfers, reconciled with service events | refrigerant stock and service records | kg direct emission by refrigerant | `eu-pef-2021` |
| `calc_wastewater_load` | wastewater | pollutant load shall be calculated from temporally matched discharge flow and measured concentration using the documented sampling and aggregation method; do not substitute a cheese quality or facility benchmark | flow; concentration; sampling interval | kg pollutant by reporting period | `eu-fdm-bat-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_traceability` | milk and milk-derived inputs | Trace every input to supplier and lot animal-species evidence; unknown or non-buffalo origin blocks exact use of this PCR pending classification determination. | supplier certificate; receiving record; formulation and lot link |
| `dq_state_traceability` | reference cheese | Link the released mass to fresh/unripened, ripened, or processed state; brine/salt state; formulation; packaging; storage condition; and net-mass basis. | product specification; batch release; packaging and warehouse records |
| `dq_measurement` | foreground quantities | Use calibrated meters or scales where available, preserve original units, and document all conversions and allocations. | calibration certificates; meter coverage; conversion record |
| `dq_temporal` | reporting period | Cover a representative production period and the full ripening or storage duration attributable to released lots; disclose seasonal, campaign, shutdown, and product-mix effects. | production calendar; lot genealogy; reporting-period reconciliation |
| `dq_completeness` | foreground boundary | Reconcile milk, ingredients, cheese, co-products, wastes, water, energy, brine, packaging, wastewater, and direct emissions; disclose missing streams and proxies. | mass and utility balances; completeness checklist; exception log |
| `dq_source_applicability` | external rules and benchmarks | Record jurisdiction, installation threshold, product mix, process state, and other applicability conditions before using a source. Product-quality limits and BAT facility indicators shall not be treated as universal LCI amounts. | source applicability statement linked to each use |
| `dq_upstream` | linked datasets | Prefer supplier-specific buffalo milk and material datasets when available; otherwise document geographic, temporal, and technological representativeness and proxy limitations. | dataset metadata; supplier linkage; proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Require product flow UUID `4b760369-5f64-47c7-b922-9dbe4b8abf98`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, reference unit kg, and reference amount 1 kg. |  |
| `validation_buffalo_only` | category applicability | Pass exact category applicability only when every milk and milk-derived input has buffalo-origin evidence. | `codex-cxs-206-1999`; `unsd-cpc-3-0` |
| `validation_mixed_milk` | category applicability | If any non-buffalo or unknown-species milk-derived input exists, require a documented classification determination and do not report this PCR as an exact match until accepted. | `codex-cxs-206-1999`; `unsd-cpc-3-0` |
| `validation_product_state` | reference product | Require declaration of fresh/unripened, ripened, or processed state; named variety or specification; salt/brine state; ingredients; packaging; storage condition; and net-mass basis. | `codex-cxs-283-1978`; `codex-cxs-221-2001` |
| `validation_process_coverage` | process inventory | Require both required process modules and every conditional module triggered by the declared route, including brining, ripening, processed-cheese manufacture, packaging, storage, refrigeration, and on-site treatment when applicable. | `eu-fdm-bat-2019` |
| `validation_mass_balance` | each production route | Require reconciled batch or period mass balances with unexplained differences investigated and disclosed; reject substitution of a generic yield or loss factor. |  |
| `validation_allocation` | co-products and shared operations | Require subdivision evidence or a documented causal/allocation basis, co-product destination evidence, consistent reporting-period application, and sensitivity where residual allocation is material. | `eu-pef-2021` |
| `validation_source_scope` | use of standards and BAT evidence | Require an applicability statement for every externally sourced constraint. Reject any use of Codex product-quality limits or EU FDM BAT facility indicators as universal recipe, yield, energy, water, wastewater, or emission values. | `codex-cxs-283-1978`; `codex-cxs-221-2001`; `eu-fdm-bat-2019` |
| `validation_foreground_records` | quantitative inventory | Require site- and batch-specific records or an explicit PCR calculation rule for all material quantities. Missing records remain data gaps and shall not be replaced by undocumented defaults. | `eu-pef-2021`; `eu-fdm-bat-2019` |
| `validation_inventory_completeness` | foreground dataset | Require milk and ingredients, product and co-products, water and utilities, brine, packaging, waste, wastewater, and direct-emission checks with skipped or non-applicable items reported explicitly. | `eu-fdm-bat-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset suitable for publication as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Factory-gate process datasets and lifecycle models for declared buffalo-only fresh/unripened, ripened, or processed cheese products |
| allowed_use | Use for products matching buffalo-only origin, product state, formulation, brine, packaging, storage, geography, technology, and time represented by the dataset; broader use requires documented representativeness review |
| excluded_use | Mixed-milk cheese without classification determination; cattle-, sheep-, goat-, or other non-buffalo cheese; non-cheese products; routes or market states not represented; direct use of Codex quality limits or BAT facility indicators as LCI defaults |
| required_metadata | PCR id and version used; Tiangong reference flow UUID; CPC context; facility geography and technology; reporting period; animal-species evidence; product state and specification; salt/brine, ingredient, packaging, net-mass, and storage state; process coverage; upstream links; co-product status and allocation |
| required_quality_disclosure | Primary-data coverage; calibration and reconciliation; temporal, geographic, and technological representativeness; missing flows; allocation and sensitivity; data-source applicability; proxy datasets; uncertainty and review status |
| update_trigger | Change in milk species or supplier-origin evidence, formulation, cheese state, brine practice, packaging, technology, facility, allocation, co-product destination, upstream dataset, reporting period representativeness, or material water/energy/emission performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory notes, subclass 22252, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-12) | Classification identity and buffalo-milk product boundary only |
| `codex-cxs-206-1999` | standard | Codex Alimentarius, General Standard for the Use of Dairy Terms, CXS 206-1999, amended 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B206-1999%2FCXS_206e.pdf (retrieved 2026-08-12) | Milk and milk-product definitions, animal-species declaration, and mixed-species trigger; not LCI quantities |
| `codex-cxs-283-1978` | standard | Codex Alimentarius, General Standard for Cheese, CXS 283-1978, amended 2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B283-1978%2FCXS_283e.pdf (retrieved 2026-08-12) | Cheese identity, ripening and brine-state descriptors, and candidate process/ingredient coverage; composition and quality provisions are not LCI factors |
| `codex-cxs-221-2001` | standard | Codex Alimentarius, Group Standard for Unripened Cheese Including Fresh Cheese, CXS 221-2001, amended 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B221-2001%2FCXS_221e.pdf (retrieved 2026-08-12) | Fresh/unripened product-state identity and candidate ingredient/process coverage; quality provisions are not LCI factors |
| `eu-pef-2021` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Life-cycle boundary, data, allocation, calculation, quality, and disclosure principles; no cheese-specific default quantities |
| `eu-fdm-bat-2019` | official_guidance | European Commission, Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, http://data.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Applicable dairy process coverage, resource and emission inventory, water/wastewater, energy, and monitoring topics; facility scope and operating conditions must be checked before use |
