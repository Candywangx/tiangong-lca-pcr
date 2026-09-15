---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-buffalo
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Butter and Other Fats and Oils Derived from Milk of Buffalo

## 1. Scope and Applicability

This PCR applies only to butter and other fats and oils derived exclusively from buffalo milk or buffalo-milk products. It covers buffalo-milk butter, dairy spreads, butterfat whether or not fractionated, anhydrous milkfat, butter oil, ghee, and other product forms within CPC 3.0 subclass 22242. The declared product form and production route determine which conditional processes apply.

Products derived from cattle milk (CPC 22241), milk of animals other than cattle or buffalo (CPC 22249), mixed-species milk, and products in which non-milk constituents replace milk constituents are outside scope. Codex CXS 279-1971, CXS 280-1973, and CXS 206-1999 support product identity and route distinctions; their composition, quality, contaminant, additive, and labelling limits are not default life-cycle inventory amounts.

The foreground data package covers the declared facility route from receipt of traceable buffalo milk, buffalo cream, or an eligible buffalo-milk intermediate through fat separation or concentration, finishing, packaging, storage, on-site utilities, cleaning, and waste or wastewater handling to the declared plant gate. Upstream buffalo farming and milk production remain linked upstream datasets unless directly controlled and explicitly added to the foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-buffalo |
| classification_refs | CPC 3.0: 22242, exact |
| covered_products | Butter and other fats and oils derived exclusively from buffalo milk or buffalo-milk products, including butter, dairy spread, butterfat, fractionated milkfat, anhydrous milkfat, butter oil, and ghee |
| excluded_products | Cattle-milk products under CPC 22241; products from other animals under CPC 22249; mixed-species milk products; vegetable-fat or other non-milk substitutes; products whose true identity is not a buffalo-milk fat product |
| representative_product | Packaged buffalo-milk butter or declared buffalo-milk fat product at the facility gate |
| production_route | Receipt and species verification; optional cream separation or standardisation; churning, fat concentration, recombination, fractionation, dehydration, or ghee finishing as applicable; packaging; storage; utility, cleaning, and wastewater support |
| market_state | Packaged or bulk product at the declared facility gate; physical state, salt/culture status, fat-product designation, packaging format, and storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Buffalo-milk butter or another declared fat or oil product derived exclusively from buffalo milk |
| How much | 1 kg net product |
| How well | Product family, buffalo-only origin, physical state, formulation or salt status, packaging state, and applicable product-identity claim are declared |
| How long or cycle | One production batch through the declared facility gate; no use-phase duration is represented |
| reference_flow_link | The 1 kg net product is represented by the Tiangong product flow and mass references below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Buffalo-milk butter and fats `554cfc76-a4ac-4cda-9e06-d60256918b58` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | buffalo-only milk origin; product designation; production route; batch or campaign; net or dry mass basis; water-content or solids basis when used for conversion; salted, cultured, recombined, fractionated, dehydrated, or ghee status as applicable; packaging format; storage condition; facility gate; geography; reference period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference product as net product mass in kg and state whether packaging is excluded from that mass. |
| `mass_basis_conversion` | Material inputs, intermediates, co-products, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured wet, dry, fat, water, or solids basis; convert only with batch-specific measured composition data and retain the original measurement and conversion record. |
| `energy_carrier_units` | Electricity, fuels, steam, hot water, and refrigeration | Energy or mass/volume property selected for the carrier | declared source unit and normalized unit | Preserve meter, invoice, and fuel units; document every conversion factor and normalize the resulting amount to 1 kg net reference product. |
| `water_stream_units` | Process, cleaning, cooling, condensate, and wastewater streams | Volume or mass selected for the stream | m3 or kg | Keep water streams separated by purpose and treatment need; state density assumptions when converting mass and volume. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `buffalo_origin_boundary` | Product and dairy inputs | Include only lots documented as buffalo milk or buffalo-milk products; exclude cattle, other-animal, and mixed-species dairy inputs from this PCR dataset. | `unsd-cpc-3-0-2025`; `codex-cxs-206-1999` |
| `foreground_gate_boundary` | Foreground facility | Include receiving, species and lot verification, storage, applicable separation or standardisation, fat concentration or churning, applicable finishing or dehydration, packaging, storage, cleaning, utilities, and on-site waste or wastewater operations through the declared facility gate. | `eu-fdm-bat-2019-2031` |
| `upstream_link_boundary` | Purchased inputs | Link traceable upstream datasets for buffalo milk or buffalo-milk intermediates, energy carriers, process water, ingredients, cleaning agents, refrigerants, packaging, and outsourced treatment or transport when those activities are outside direct foreground control. | `eu-pef-2021-2279` |
| `direct_emission_boundary` | Foreground releases | Include measured or calculated direct releases to air and water, refrigerant losses, wastewater sent off site, residues, rejects, and packaging waste without converting Codex quality criteria or BAT performance levels into inventory values. | `eu-fdm-bat-2019-2031` |
| `route_condition_boundary` | Product variants | Apply only the unit processes actually used for the declared product: churning for butter, near-total removal of water and non-fat solids for the CXS 280 product families, and any recombination, fractionation, salting, culturing, or ghee finishing that occurred. | `codex-cxs-279-1971`; `codex-cxs-280-1973` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable buffalo milk, buffalo cream, or eligible buffalo-milk intermediate accepted at the foreground facility gate, with species origin, supplier, lot, mass, composition basis, temperature or storage state, and acceptance status recorded |
| starting_condition_role | Upstream-linked dairy product input and first foreground custody point |
| product_classification_scope | CPC 3.0 subclass 22242 only; cattle 22241, other animals 22249, and mixed-species inputs are excluded |
| recursive_input_rule | An input already meeting this same PCR category remains an explicit product input with supplier dataset and batch linkage; do not recursively reopen its prior production inside the receiving process unless the boundary is intentionally expanded |
| upstream_dataset_requirement | Use a species-specific buffalo-milk or buffalo-milk-intermediate upstream dataset with geography, technology, reference period, composition basis, allocation, and data-quality disclosure; generic or cattle-milk proxies require explicit non-conformance disclosure and are not treated as exact buffalo data |
| disclosure | Declare starting dairy material, excluded upstream activities, included facility processes, product route, co-products, allocation decisions, outsourced operations, packaging state, storage, and plant-gate endpoint |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_storage` | Buffalo dairy input receipt and storage | required |  | Foreground custody, identity verification, and chilled or controlled storage | accepted buffalo dairy input and transferred mass |
| `fat_separation_standardisation` | Fat separation and standardisation | conditional | Include when whole buffalo milk is separated, cream is standardised, or fat content is adjusted at the facility | Foreground dairy fractionation and intermediate preparation | mass of dairy input and each separated output |
| `butter_or_fat_formation` | Butter or milkfat formation | required |  | Foreground churning, concentration, recombination, or other declared formation step | mass of product intermediate and co-products |
| `dehydration_fractionation_finishing` | Dehydration, fractionation, and route-specific finishing | conditional | Include for anhydrous milkfat, butter oil, ghee, fractionated, melted, salted, cultured, or otherwise finished variants | Foreground route-specific finishing | mass of input intermediate and finished bulk product |
| `packaging_and_product_storage` | Packaging and product storage | required |  | Foreground final packing, cold or controlled storage, and plant-gate output | 1 kg net reference product |
| `utilities_cleaning_wastewater` | Utilities, cleaning, and wastewater management | required |  | Shared foreground support and direct environmental exchanges | allocated service to 1 kg net reference product |

### Process: Buffalo Dairy Input Receipt and Storage (`receipt_and_storage`)

#### Inputs

##### Product flows

###### Accepted buffalo dairy material (`buffalo_dairy_input`)

Record every accepted lot of buffalo milk, buffalo cream, or eligible buffalo-milk intermediate crossing the facility gate. Supplier and species documentation must exclude mixed-species material.

- Selected flow: Buffalo milk, buffalo cream, or declared buffalo-milk intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted mass by lot on the recorded wet, dry, fat, or solids basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources: `unsd-cpc-3-0-2025`; `codex-cxs-206-1999`

###### Receipt and storage energy (`receipt_storage_energy`)

Record metered or allocated electricity, fuel, steam, or refrigeration service used for unloading, pumping, cooling, and storage before transfer to production.

- Selected flow: Declared electricity, fuel, steam, or refrigeration service
- Flow property / unit: Carrier-specific energy, mass, or volume / declared source unit
- Amount rule: Metered amount where submetering exists; otherwise a documented allocation from the shortest representative facility interval
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Rejected or spilled dairy material (`receipt_dairy_rejects`)

Record rejected lots, spills, and line-clearance dairy material by destination without netting them against accepted input.

- Selected flow: Buffalo dairy reject or spill to declared recovery, treatment, or disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or mass-balance-derived quantity by incident and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct_waste_mass`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

#### Outputs

##### Product flows

###### Transferred buffalo dairy material (`accepted_dairy_to_production`)

Record the mass and composition basis transferred from storage to the next applicable process.

- Selected flow: Accepted buffalo dairy material transferred to production
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass reconciled to accepted input, storage change, rejects, and spills
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receipt batch and per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Fat Separation and Standardisation (`fat_separation_standardisation`)

#### Inputs

##### Product flows

###### Buffalo dairy material to separation (`separation_dairy_input`)

Record the transferred buffalo milk, cream, or intermediate and its batch-specific composition basis.

- Selected flow: Buffalo dairy material to separator or standardisation step
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per process batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources: `codex-cxs-206-1999`

###### Separation and standardisation energy (`separation_energy`)

Record energy used by separators, pumps, heat treatment, cooling, and holding equipment in this step.

- Selected flow: Declared electricity, fuel, steam, or refrigeration service
- Flow property / unit: Carrier-specific energy, mass, or volume / declared source unit
- Amount rule: Metered process amount or documented interval allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg declared process output and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Buffalo cream or standardised fat intermediate (`buffalo_fat_intermediate`)

Record the buffalo-milk fat intermediate transferred to the formation step, including mass and measured composition basis.

- Selected flow: Buffalo cream or standardised buffalo-milk fat intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured output mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per separation batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources:

###### Buffalo skim-milk co-product (`buffalo_skim_coproduct`)

Record each marketable or internally used buffalo skim-milk fraction separately from the fat intermediate.

- Selected flow: Buffalo skim milk or other declared dairy co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured co-product mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per separation batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Separation residues and losses (`separation_residues`)

Record non-product residues, separator sludge, and unrecovered dairy losses by destination.

- Selected flow: Separation residue or dairy loss to declared destination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed quantity or batch mass-balance residual, with derivation retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per separation batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct_waste_mass`
- Sources:

##### Elementary flows

### Process: Butter or Milkfat Formation (`butter_or_fat_formation`)

#### Inputs

##### Product flows

###### Buffalo dairy feed to formation (`formation_dairy_input`)

Record the batch of buffalo cream, buffalo-milk fat intermediate, or eligible buffalo-milk input entering churning, concentration, recombination, or other declared formation equipment.

- Selected flow: Declared buffalo dairy feed to formation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch input mass and composition basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per formation batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources: `codex-cxs-279-1971`; `codex-cxs-280-1973`

###### Formation energy (`formation_energy`)

Record electricity, heat, cooling, compressed air, or other energy services used by the declared formation route.

- Selected flow: Declared electricity, fuel, steam, cooling, or compressed-air service
- Flow property / unit: Carrier-specific energy, mass, or volume / declared source unit
- Amount rule: Metered process amount or documented interval allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg formation output and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-fdm-bat-2019-2031`

###### Water, salt, culture, or route ingredient (`formation_auxiliaries`)

Record only potable water, salt, culture, or another declared route input actually added. Do not infer an amount from a Codex permitted-ingredient or composition provision.

- Selected flow: Declared process water or route ingredient
- Flow property / unit: Mass or volume selected for the material / kg or m3
- Amount rule: Measured batch addition from scale, dosing, or issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per formation batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_cip_ingredients`
- Sources: `codex-cxs-279-1971`; `codex-cxs-280-1973`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed buffalo-milk fat product (`formed_buffalo_fat_product`)

Record the butter or milkfat intermediate transferred to optional finishing or directly to packaging.

- Selected flow: Formed buffalo-milk butter or fat intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch output mass and declared product family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per formation batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources: `codex-cxs-279-1971`; `codex-cxs-280-1973`

###### Buttermilk or aqueous dairy co-product (`formation_dairy_coproduct`)

Record buttermilk or another separately used aqueous dairy stream as a co-product only when it has a documented beneficial use or market destination.

- Selected flow: Buttermilk or declared aqueous buffalo dairy co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured co-product mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per formation batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Formation losses and non-product dairy stream (`formation_losses`)

Record product loss, flush material, and non-beneficial dairy streams by treatment destination.

- Selected flow: Formation loss or non-product dairy stream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed amount or batch mass-balance residual
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per formation batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct_waste_mass`
- Sources:

##### Elementary flows

### Process: Dehydration, Fractionation, and Route-Specific Finishing (`dehydration_fractionation_finishing`)

#### Inputs

##### Product flows

###### Buffalo-milk fat intermediate to finishing (`finishing_product_input`)

Record the batch transferred to melting, dehydration, fractionation, recombination, salting, culturing, flavour development, or another declared finishing route.

- Selected flow: Buffalo-milk fat intermediate to finishing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch input mass and composition basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources: `codex-cxs-280-1973`

###### Finishing energy and auxiliaries (`finishing_energy_auxiliaries`)

Record route-specific heat, vacuum, cooling, electricity, water, and actual additives or ingredients without applying a generic recipe.

- Selected flow: Declared energy service, process water, or route auxiliary
- Flow property / unit: Carrier-specific energy, mass, or volume / declared source unit
- Amount rule: Metered, weighed, or batch-issued amount for the actual finishing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finishing output and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `codex-cxs-280-1973`; `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished bulk buffalo-milk fat product (`finished_bulk_product`)

Record finished bulk butter, milkfat, butter oil, ghee, fraction, or other in-scope product transferred to packaging.

- Selected flow: Declared finished bulk buffalo-milk fat product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net bulk output mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources: `codex-cxs-279-1971`; `codex-cxs-280-1973`

##### Waste flows

###### Removed aqueous or non-fat material (`finishing_removed_material`)

Record water, non-fat solids, off-spec material, and residues removed during finishing, classified by actual recovery, treatment, or release route.

- Selected flow: Removed aqueous or non-fat material to declared destination
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measured quantity or batch mass-balance-derived quantity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per finishing batch and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coproduct_waste_mass`
- Sources: `codex-cxs-280-1973`

##### Elementary flows

### Process: Packaging and Product Storage (`packaging_and_product_storage`)

#### Inputs

##### Product flows

###### Finished bulk product to packaging (`bulk_product_to_packaging`)

Record the mass of in-scope finished bulk product entering the packaging line.

- Selected flow: Finished bulk buffalo-milk butter or fat product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured batch or packaging-run input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging run and per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dairy_mass_traceability`
- Sources:

###### Primary, secondary, and tertiary packaging (`packaging_materials`)

Record each packaging material and reusable transport item separately by material, mass, recycled-content claim where relevant, and packaging level.

- Selected flow: Declared packaging material or reusable transport item
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg, or count converted with measured item mass
- Amount rule: Purchasing and line-issue records less documented returns, normalized with packaging-run output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

###### Packaging and storage energy (`packaging_storage_energy`)

Record packaging-line electricity, compressed air, cold-room or controlled-storage energy, and related utility demand through the declared gate.

- Selected flow: Declared electricity, fuel, refrigeration, or compressed-air service
- Flow property / unit: Carrier-specific energy, mass, or volume / declared source unit
- Amount rule: Metered amount or documented allocation over the packaging and storage interval
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net reference product at facility gate (`reference_product_output`)

The output is the declared buffalo-milk butter or fat product meeting the reference-flow qualifiers. Packaging mass is not part of the 1 kg net product.

- Selected flow: Buffalo-milk butter and fats `554cfc76-a4ac-4cda-9e06-d60256918b58`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net reference product at the declared facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

###### Packaging rejects and product loss (`packaging_rejects`)

Record packaging trim, damaged packs, off-spec packed product, and recovered or discarded product separately by destination.

- Selected flow: Declared packaging reject or packed-product loss
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or inventory-reconciled amount by packaging run and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Elementary flows

###### Refrigerant releases (`refrigerant_release`)

Record direct refrigerant loss associated with in-scope cooling and storage from service records and inventory reconciliation.

- Selected flow: Declared refrigerant emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Refrigerant mass balance from opening stock, additions, recoveries, closing stock, and documented equipment transfer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product over the declared reference period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_effluent`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Utilities, Cleaning, and Wastewater Management (`utilities_cleaning_wastewater`)

#### Inputs

##### Product flows

###### Shared energy and fuel (`shared_energy_fuel`)

Record fuels, electricity, steam generation inputs, compressed air, cooling, and other shared utilities serving the in-scope route.

- Selected flow: Declared shared electricity, fuel, steam, cooling, or compressed-air input
- Flow property / unit: Carrier-specific energy, mass, or volume / declared source unit
- Amount rule: Metered site or utility-system amount allocated to the in-scope route using documented causal meters or service drivers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### Cleaning water and chemicals (`cleaning_water_chemicals`)

Record water and each cleaning or disinfection chemical used for tanks, pipes, separators, churns, finishing equipment, packaging equipment, and floors. Retain CIP cycle and dosing records.

- Selected flow: Process water or declared cleaning and disinfection chemical
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered water and measured chemical issue or dosing amount by cleaning cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cleaning cycle and per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_cip_ingredients`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

###### Wastewater sent to treatment (`wastewater_to_treatment`)

Record segregated process, cleaning, cooling, and sanitary wastewater streams by volume, destination, and whether treatment is on site or off site.

- Selected flow: Declared wastewater stream to treatment
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: Metered or water-balance-derived flow by stream and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_effluent`
- Sources: `eu-fdm-bat-2019-2031`

###### Treatment sludge and separated residues (`treatment_residues`)

Record wastewater-treatment sludge, screenings, recovered fat, and other separated residues by wet or dry basis and destination.

- Selected flow: Declared treatment sludge or separated residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed amount or documented treatment inventory balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_mass`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct releases to water (`direct_water_releases`)

For on-site discharge, record effluent volume and each monitored pollutant load as separate elementary exchanges. Off-site wastewater remains a waste flow to the receiving treatment process.

- Selected flow: Declared elementary emission to water
- Flow property / unit: Pollutant-specific mass / kg
- Amount rule: Monitoring-period load calculated from matched effluent flow and concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product over the matched reporting period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_effluent`
- Sources: `eu-fdm-bat-2019-2031`

###### Direct combustion or process releases to air (`direct_air_releases`)

Record relevant measured or calculation-supported direct air releases from in-scope utility and process equipment. Do not substitute BAT-associated performance values for site data.

- Selected flow: Declared elementary emission to air
- Flow property / unit: Pollutant-specific mass / kg
- Amount rule: Matched stack monitoring, fuel record and approved factor, or other documented site calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product over the matched reporting period
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_effluent`
- Sources: `eu-fdm-bat-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Separation, formation, finishing, packaging, and shared utilities | First use process subdivision, separate meters, batch records, and route-specific inventories to avoid allocation wherever the directly attributable flows can be isolated. | `eu-pef-2021-2279` |
| `allocation_system_expansion_check` | Multi-functional processes | If subdivision is not possible, evaluate whether system expansion represents the additional co-product functions; report the expanded function and do not present an individual-product result as though no expansion occurred. | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | Buffalo skim milk, buttermilk, recovered fat, and other co-products | When subdivision and system expansion are not applied, use a relevant, quantifiable physical relationship only when it reflects the causal relationship between inputs, outputs, and the functions provided; retain batch composition and mass evidence. | `eu-pef-2021-2279` |
| `allocation_other_relationship` | Remaining multi-functionality | Use another relationship such as economic allocation only after documenting why subdivision, system expansion, and a relevant physical relationship are not applicable; use process-stage, geography, and reference-period-specific records and disclose sensitivity. | `eu-pef-2021-2279` |
| `allocation_no_default_factor` | All co-product systems | This PCR provides no universal allocation factor: the selected method, co-product status, data sources, calculation, and consistency across upstream and foreground dairy stages must be disclosed for the actual facility and reference period. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dairy_mass_traceability` | receipt_and_storage; fat_separation_standardisation; butter_or_fat_formation; dehydration_fractionation_finishing; packaging_and_product_storage | Dairy input, intermediate, and product mass and identity | Scale ticket, tank gauge, batch sheet, laboratory composition record, supplier certificate | supplier; farm or processor; animal species; lot; product designation; gross and tare mass; net mass; wet/dry/fat/solids basis; sample time; test method; transfer time; destination | Calibrated scale or tank measurement linked to batch and species documentation | kg plus declared composition basis | Every receipt, transfer, and finished batch | Complete reference period, including start/end inventory | Each included facility, tank, and line | Reconcile opening stock + receipts - transfers - rejects - closing stock by batch; normalize completed route to net product mass | Calibration status; chain-of-custody record; species declaration; sample and test record; reconciliation sign-off |
| `cp_energy_and_fuel` | receipt_and_storage; fat_separation_standardisation; butter_or_fat_formation; dehydration_fractionation_finishing; packaging_and_product_storage; utilities_cleaning_wastewater | Electricity, fuel, heat, refrigeration, and compressed-air demand | Submeter, main meter, invoice, fuel delivery, boiler or refrigeration log | meter id; carrier; opening/closing reading; multiplier; fuel quantity; calorific or conversion basis; operating hours; process line; downtime; production mass | Prefer process submetering; otherwise shortest representative interval with documented causal allocation | source unit and normalized kWh, MJ, kg, or m3 | Continuous or each billing/production interval | Complete reference period with inventory changes | Each included utility and production line | Sum matched consumption, subtract documented exports, allocate shared service with a causal driver, normalize to net product | Meter calibration; invoice reconciliation; conversion source; operating log; allocation review |
| `cp_water_cip_ingredients` | butter_or_fat_formation; dehydration_fractionation_finishing; utilities_cleaning_wastewater | Process water, ingredients, cleaning water, and chemicals | Water meter, CIP log, dosing record, batch issue record | stream; meter; cycle id; chemical or ingredient; concentration as purchased; dose; return/reuse; rinse endpoint; batch; line; product mass | Metered water and calibrated dosing or weighed issue linked to cycle and batch | m3 or kg | Every batch or CIP cycle; continuous where metered | Complete reference period including atypical cleaning | Each included line, CIP circuit, and utility area | Sum by purpose and stream; deduct documented reuse only once; normalize to net product | Meter and dosing calibration; CIP trace; purchase reconciliation; reuse record; hygiene release |
| `cp_coproduct_waste_mass` | receipt_and_storage; fat_separation_standardisation; butter_or_fat_formation; dehydration_fractionation_finishing; packaging_and_product_storage; utilities_cleaning_wastewater | Co-products, rejects, residues, sludge, and product losses | Scale ticket, batch balance, waste manifest, recovery or sales record | stream identity; mass; wet/dry basis; batch; destination; beneficial-use evidence; waste code where applicable; calculation inputs | Direct weighing preferred; otherwise documented mass balance from matched batch records | kg | Every batch, shipment, or waste collection | Complete reference period | Each included process and destination | Sum separately by product, co-product, waste, and destination; do not net beneficial outputs against inputs | Scale calibration; destination receipt; mass-balance closure; classification approval |
| `cp_packaging_records` | packaging_and_product_storage | Packaging inputs, reusable items, rejects, and packed output | Purchasing, item specification, line issue, return, reject, and finished-goods record | material; supplier; item mass; count; packaging level; recycled-content claim; reuse count; issued; returned; rejected; packed net product | Weigh representative item or use verified specification; reconcile counts and line issues | kg and count | Every packaging run; specification change checked when it occurs | Complete reference period | Each packaging line and product format | Convert counts using verified item mass; subtract documented returns; report each material separately per net product | Item-mass sample; supplier specification; issue/return reconciliation; reject record |
| `cp_direct_emissions_effluent` | packaging_and_product_storage; utilities_cleaning_wastewater | Refrigerant loss, wastewater flow and pollutants, and direct air emissions | Refrigerant service log, effluent flow meter, laboratory result, stack test, fuel record, permit report | substance; equipment or outlet; opening/closing stock; additions; recovery; flow; concentration; sample time; method; operating state; fuel use; factor source | Mass balance, direct monitoring, or calculation from temporally matched measured activity and approved factor | kg, m3, concentration unit, and kg load | At each service event and at legally or technically appropriate monitoring intervals | Matched to production reference period and operating state | Each in-scope equipment item, stack, and discharge point | Calculate substance-specific mass; concentration × matched flow for water load; normalize only after temporal matching | Service invoice; chain of custody; laboratory accreditation; meter calibration; factor/version record; permit report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | All quantitative inventory rows | normalized amount = matched foreground amount / matched net reference-product mass; preserve the unnormalized record and basis | foreground amount; net reference-product mass; batch or interval linkage | amount per 1 kg net reference product | `eu-pef-2021-2279` |
| `dairy_batch_mass_balance` | Receipt, separation, formation, finishing, and packaging | opening inventory + inputs = outputs + closing inventory + measured losses + reconciled residual; investigate rather than silently distribute a material residual | opening and closing inventory; input/output/co-product/waste masses; composition basis | signed batch balance and documented residual |  |
| `water_pollutant_load` | Direct releases to water | pollutant load = temporally matched effluent volume × concentration after unit conversion; report each substance separately | flow; concentration; sampling period; conversion factors | pollutant mass by outlet and period | `eu-fdm-bat-2019-2031` |
| `refrigerant_mass_balance` | Refrigeration equipment | release = opening stock + additions - recovered amount - closing stock - documented equipment transfer, with sign and stock reconciliation | refrigerant stock, additions, recoveries, transfers | refrigerant mass released by substance | `eu-fdm-bat-2019-2031` |
| `multifunctionality_decision` | Co-products and shared services | apply subdivision or system expansion first; if neither is applied, calculate burdens using a justified physical relationship, otherwise another disclosed relationship with sensitivity | process map; separate records; co-product quantities and properties; market data if used | allocated or expanded inventory with method record | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_identity` | All dairy inputs and products | Maintain lot-level evidence that dairy material is buffalo-only; any cattle, other-animal, or mixed-species lot is excluded from this PCR dataset. | Supplier declaration, chain of custody, receiving record, product specification, and applicable verification test |
| `dq_completeness` | Foreground inventory | Cover all applicable mapped processes and all material, energy, water, co-product, waste, direct-emission, packaging, and storage records for the reference period; explain omissions. | Process flow sheet, record inventory, meter list, mass and water balances, and completeness review |
| `dq_representativeness` | Foreground and upstream datasets | Disclose technological, geographical, and time representativeness and precision; use higher-quality data for material processes and do not represent a cattle-milk proxy as exact buffalo data. | Data-quality assessment, dataset metadata, source record, and proxy justification |
| `dq_temporal_matching` | Activity and emission data | Match production, utilities, inventories, wastewater, direct emissions, co-products, and waste to the same batch or defensible reporting interval. | Timestamped records, interval reconciliation, operating log, and normalization workbook |
| `dq_measurement_traceability` | Measured and calculated amounts | Retain raw readings, calibration status, unit conversions, calculation formulas, factor identities and versions, reviewer, and correction history. | Calibration certificate, raw export, controlled calculation, factor reference, and review sign-off |
| `dq_no_generic_performance_values` | Product specifications and BAT evidence | Do not use Codex composition or quality limits, or BAT-associated consumption or emission performance values, as a generic foreground LCI. Use site, batch, supplier, or approved factor records. | Source-use review and row-level evidence-kind audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference product flow UUID must be `554cfc76-a4ac-4cda-9e06-d60256918b58`, the Mass UUID must be `93a60a56-a3c8-11da-a746-0800200b9a66`, the Units of mass UUID must be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the unit must be kg, with no dataset versions appended. |  |
| `validate_buffalo_only_scope` | Product and dairy inputs | Every dairy input and the reference product must be documented as buffalo-only; reject cattle-milk, other-animal, mixed-species, and substitute-fat records from this PCR dataset. | `unsd-cpc-3-0-2025`; `codex-cxs-206-1999` |
| `validate_product_route` | Product identity and process map | The declared product designation and actual route must select the applicable butter, milkfat, butter-oil, ghee, fractionation, recombination, salting, culturing, dehydration, packaging, and storage processes without treating a Codex permission as proof that a process occurred. | `codex-cxs-279-1971`; `codex-cxs-280-1973` |
| `validate_reference_amount` | Quantitative inventory | The product output must equal 1 kg net product after normalization; packaging mass must remain separate and all wet, dry, fat, water, or solids conversions must retain batch-specific evidence. |  |
| `validate_process_and_record_coverage` | Foreground inventory | Every required and applicable conditional process must have linked foreground records for material, energy, water, co-products, wastes, direct emissions, packaging, and storage, or a documented non-applicability reason. | `eu-fdm-bat-2019-2031` |
| `validate_mass_and_stream_balance` | Dairy and water systems | Receipt-to-output dairy mass balances and separated water-stream balances must reconcile within a site-defined, documented measurement uncertainty; unexplained residuals are findings, not hidden allocations. | `eu-fdm-bat-2019-2031` |
| `validate_allocation_hierarchy` | Multi-functional processes | The dataset must document subdivision and system-expansion checks before physical or other allocation, identify every co-product and shared service, and retain the selected relationship and sensitivity evidence. | `eu-pef-2021-2279` |
| `validate_source_use` | Numerical and method claims | Every non-foreground numerical factor must identify its source and version; Codex composition or quality limits and BAT performance values must not appear as default LCI amounts. | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `eu-fdm-bat-2019-2031` |
| `validate_data_quality` | Dataset profile | Completeness, methodological consistency, technological, geographical and temporal representativeness, precision, documentation, nomenclature, and review status must be disclosed. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process or aggregated gate-to-gate dataset for a declared buffalo-milk butter or fat-product route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | LCA modelling of the declared CPC 22242 buffalo-milk product when species origin, product form, route, geography, technology, reference period, boundary, allocation, packaging, storage, and data quality are compatible |
| excluded_use | Cattle-milk products; other-animal products; mixed-species products; generic dairy-fat averages presented as buffalo-specific; substitute-fat products; cradle-to-gate claims when required upstream buffalo milk datasets are absent; comparisons that ignore material boundary or allocation differences |
| required_metadata | PCR id; Tiangong reference UUIDs; buffalo-only evidence; product designation and qualifiers; facility and geography; reference period; route and technology; included and excluded processes; upstream dataset links; co-products and allocation; packaging; storage; record coverage; normalization workbook; source and factor versions |
| required_quality_disclosure | Completeness; methodological consistency; technological, geographical, and temporal representativeness; precision; measurement uncertainty; missing records; proxy use; mass and water balance results; allocation sensitivity; review status; deviations from this PCR |
| update_trigger | Species-origin evidence changes; product or route change; material process, technology, energy, water, packaging, storage, waste treatment, co-product use, or allocation change; reference-period rollover; material data-quality improvement; source revision; or replacement of a provisional or proxy input with verified foreground or buffalo-specific data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 22242, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-08-12) | Exact buffalo-milk category identity, included product forms, and exclusions of CPC 22241 and 22249 |
| `codex-cxs-279-1971` | standard | Codex Alimentarius, CXS 279-1971, Standard for Butter, official standards register: https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/ (accessed 2026-08-12) | Butter identity, milk-only derivation, water-in-oil route concept, and possible route ingredients; composition and quality values are not LCI defaults |
| `codex-cxs-280-1973` | standard | Codex Alimentarius, CXS 280-1973, Standard for Milkfat Products, official standards register: https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/ (accessed 2026-08-12) | Identity and route distinction for anhydrous milkfat, milkfat, butter oil, and ghee; composition and quality values are not LCI defaults |
| `codex-cxs-206-1999` | standard | Codex Alimentarius, CXS 206-1999, General Standard for the Use of Dairy Terms, official standards register: https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/ (accessed 2026-08-12) | Dairy product identity, animal-origin declaration, recombined or reconstituted status, and exclusion of misleading mixed or substitute products |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, ELI: https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (accessed 2026-08-12) | Functional-unit structure, reference flow, system boundary, allocation hierarchy, data collection materiality, and data-quality disclosure |
| `eu-fdm-bat-2019-2031` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, ELI: https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (accessed 2026-08-12) | Process flow inventory, water, energy, raw material, wastewater, waste-gas and residue records, monitoring strategy, cleaning/CIP, and resource-efficiency practices; BAT performance values are not LCI defaults |
