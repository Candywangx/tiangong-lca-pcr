---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fruits-and-nuts-uncooked-or-cooked-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fruits and nuts, uncooked or cooked, frozen

## 1. Scope and Applicability

This PCR covers factory-gate production of uncooked or cooked fruits and nuts preserved by freezing and supplied as a frozen food or ingredient. It covers single-species products and declared mixtures, with or without declared sweeteners or other ingredients, when the product identity remains frozen fruit or frozen nuts. The foreground starts with receipt of identified fruit or nut raw material and includes preparation, conditional cooking or blanching, freezing, conditional packaging, and on-site frozen storage up to dispatch from the producing facility.

The PCR does not cover fresh, dried, canned, fermented, juiced, pureed, pasted, jammed, provisionally preserved, roasted, salted, or otherwise prepared products whose primary market identity is not frozen fruit or frozen nuts. Agricultural production, inbound transport, downstream distribution, retail, consumer thawing or cooking, and end of life are outside the foreground process boundary but shall be represented by appropriate upstream or downstream datasets when the study boundary includes them.

The selected Tiangong product flow is named **Banana**. UUID `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` is a narrow representative identity for a frozen-banana case only. It shall not be treated as the product-flow identity for every fruit or nut in this PCR. A dataset for any other species, mixture, or materially different banana product shall replace this product flow with an appropriate reviewed Tiangong flow or undergo manual identity review before publication.

Codex product standards cited here are applied only to the products expressly covered by each standard. CXS 52-1981 applies to the specified quick-frozen strawberries and CXS 69-1981 to the specified quick-frozen raspberries. CXS 320-2015 is a standard for quick-frozen vegetables and supplies no category-wide requirement for the fruits and nuts covered by this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fruits-and-nuts-uncooked-or-cooked-frozen |
| classification_refs | CPC 3.0: 21493 - Fruits and nuts, uncooked or cooked, frozen |
| covered_products | Uncooked or cooked frozen fruits; uncooked or cooked frozen nuts; declared mixtures whose primary identity remains frozen fruit or frozen nuts; quick-frozen products only where the declared product and process meet the applicable product-specific standard |
| excluded_products | Fresh, dried, canned, fermented, juiced, pureed, pasted, jammed, provisionally preserved, roasted, salted, or otherwise prepared products outside the frozen-fruit-or-nut identity; frozen vegetables; products intended to be represented by a different principal food category |
| representative_product | Frozen banana for the supplied Tiangong product-flow UUID only; this representative is narrower than the category and is not a default identity for other species |
| production_route | Receipt and preparation of identified fruit or nut material; conditional cooking or blanching; freezing; conditional packaging; on-site frozen storage and factory-gate dispatch |
| market_state | Frozen product at factory gate, with species, composition, presentation, thermal condition, packaging condition, and intended market use declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an identified edible fruit or nut product in its declared frozen, uncooked or cooked condition at the producing-facility gate |
| How much | 1 kg net frozen product, excluding transport and sales packaging |
| How well | Conforming to the declared species or mixture, ingredient composition, preparation and cooking state, presentation, freezing process claim, release temperature specification, and applicable product-specific quality standard |
| How long or cycle | One production batch through factory-gate release; on-site frozen-storage duration and any declared shelf-life information shall be reported rather than assumed |
| reference_flow_link | The reference flow is the net mass of conforming frozen product needed to deliver the declared 1 kg unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net frozen product |
| Reference product flow | Banana `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Fruit or nut species and variety where material; single product or mixture composition; raw-material condition; uncooked, cooked, or blanched state; whole, sliced, diced, pure pieces, or other presentation; individual quick frozen, block frozen, or other declared freezing route; product-core release temperature specification and measured result; added ingredients and processing aids; net product mass and packaging exclusion; packaging format; production geography and reference period; on-site frozen-storage temperature and duration; intended direct-consumption or industrial use; applicable product-specific standard; confirmation that the Banana UUID is used only for frozen banana or evidence of replacement/manual identity review |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete. The Banana UUID is usable without replacement only when the represented product is frozen banana and all other qualifiers match the dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net conforming frozen product; exclude packaging mass and record glaze, added syrup, or other included food ingredients as part of product composition and net product mass. |
| `mass_basis_consistency` | Fruit, nut, ingredient, product, co-product, reject, and waste masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured wet mass in the condition crossing each process boundary. Do not convert to dry matter unless both the measured moisture basis and conversion are disclosed. |
| `utility_unit_preservation` | Electricity, heat, fuels, water, and refrigerants | Metered property | Meter or invoice unit, with documented conversion | Preserve raw meter or invoice units and conversion factors; normalize only after allocating the recorded quantity to the represented batch. |
| `temperature_claim` | Product-core and storage temperature | Temperature | °C | Record the measurement location, instrument, timestamp, stabilization condition, and applicable product specification. The -18 °C thermal-centre completion criterion from CXS 52-1981 and CXS 69-1981 is mandatory only for products claiming conformity to the respective strawberry or raspberry standard; it is not a default for banana or other products. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified fruit or nut raw material received at the processing facility, with species or mixture, supplier, origin, preparation state, mass, and temperature or preservation condition recorded |
| starting_condition_role | Foreground entry point for converting received fruit or nut material into conforming frozen product |
| product_classification_scope | Frozen fruits and nuts within the semantic scope of CPC 3.0 subclass 21493; classification does not authorize use of the Banana UUID for non-banana products |
| recursive_input_rule | A purchased frozen fruit or nut input in the same category shall be recorded as an upstream product input with its own supplier dataset and shall not be recursively reprocessed through this PCR unless the foreground facility actually performs the represented operation |
| upstream_dataset_requirement | Use product-, geography-, technology-, and time-representative datasets for agricultural production, ingredient production, packaging production, energy supply, water supply, refrigerant production, waste treatment, and inbound transport when those processes fall within the study boundary |
| disclosure | Declare raw-material entry condition, included facility processes, excluded life-cycle stages, product-specific standard claims, cold-chain hand-off point, allocation choices, data gaps, and whether the reference UUID is retained for frozen banana or replaced/manual-reviewed |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Foreground production | Include receiving and preparation, all performed cooking or blanching, freezing, all performed packaging, on-site frozen storage, cleaning attributable to the represented production, process waste and wastewater, utility use, and direct refrigerant losses through factory-gate release. | `eu-pef-2021-2279` |
| `boundary_upstream_links` | Upstream product inputs | Link every material, ingredient, packaging, energy carrier, water supply, refrigerant, and waste-treatment service to an appropriate upstream dataset when included in the study; do not substitute the Banana reference flow for another species. | `eu-pef-2021-2279` |
| `boundary_exclusions` | Excluded stages | Document and justify excluded processes. Downstream distribution, retail, use, and end of life are outside this factory-gate foreground profile unless the declared study adds them explicitly. | `eu-pef-2021-2279` |
| `boundary_standard_specificity` | Product-standard claims | Apply CXS 52-1981 only to its specified quick-frozen strawberries and CXS 69-1981 only to its specified quick-frozen raspberries. CXS 320-2015 covers quick-frozen vegetables and shall not be used as evidence for category-wide fruit or nut requirements. | `codex-cxs-52-1981`; `codex-cxs-69-1981`; `codex-cxs-320-2015` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Raw-material receiving and preparation | `required` | Always included | Foreground receipt, sorting, washing where performed, peeling, shelling, trimming, cutting, and formulation | kg prepared fruit or nut material leaving the process |
| `cooking_treatment` | Cooking, blanching, or thermal treatment | `conditional` | Include when the marketed product is cooked or when the facility performs blanching or another thermal treatment | Foreground thermal preparation | kg treated material leaving the process |
| `freezing` | Freezing and stabilization | `required` | Always included | Foreground freezing to the declared release condition | kg conforming frozen material leaving the freezer |
| `packaging` | Product packaging | `conditional` | Include when packaging or repacking occurs before factory-gate dispatch | Foreground packing and packaging-material use | kg net frozen product packed |
| `frozen_storage_dispatch` | On-site frozen storage and dispatch | `required` | Always included; record zero or minimal dwell only when supported by dispatch records | Foreground cold storage up to the factory-gate hand-off | 1 kg net conforming frozen product dispatched |

### Process: Raw-material receiving and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Received fruit or nut material (`received_raw_material`)

Record every received lot of fruit or nut material that enters the represented production, including species, supplier, origin, preparation state, and measured mass.

- Selected flow: Product-appropriate fruit or nut input; select the reviewed Tiangong flow for the actual species and state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum accepted and rejected received-lot masses attributable to the represented batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared fruit or nut material leaving `receiving_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`

###### Preparation water and added food ingredients (`preparation_inputs`)

Record measured water, sweeteners, antioxidants, acids, salt, oils, or other food ingredients actually added during washing, preparation, or formulation as separate foreground sub-records.

- Selected flow: Product-appropriate water or ingredient flow; no generic UUID is prescribed by this PCR
- Flow property / unit: Metered property and unit; mass inputs shall use Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or batch-issued quantity attributable to the represented batch, disaggregated by material identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared fruit or nut material leaving `receiving_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fruit or nut material (`prepared_material`)

Record the measured mass transferred to freezing or to the conditional cooking process and its preparation state.

- Selected flow: Internal prepared fruit or nut intermediate; no external product-flow UUID is prescribed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass of prepared material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`

##### Waste flows

###### Sorting, peeling, shelling, trimming, and preparation residues (`preparation_residues`)

Record each residue stream separately and identify whether it is food loss, a co-product, animal-feed material, recovery material, wastewater solids, or waste sent to treatment.

- Selected flow: Destination- and material-appropriate waste or product flow; select during dataset construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured residue mass by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared fruit or nut material leaving `receiving_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_water_records`

###### Preparation wastewater (`preparation_wastewater`)

Record measured or metered wastewater leaving preparation, including destination and any measured pollutant data used by the treatment model.

- Selected flow: Site-appropriate wastewater flow; select during dataset construction
- Flow property / unit: Volume or mass in the measured unit
- Amount rule: Metered discharge or documented water balance attributable to the represented batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared fruit or nut material leaving `receiving_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_water_records`

##### Elementary flows

### Process: Cooking, blanching, or thermal treatment (`cooking_treatment`)

#### Inputs

##### Product flows

###### Prepared material sent to thermal treatment (`material_to_treatment`)

Record the measured transfer of prepared material when cooking, blanching, or another thermal treatment is performed.

- Selected flow: Internal prepared fruit or nut intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured incoming transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg thermally treated material leaving `cooking_treatment`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`

###### Thermal-treatment utilities (`treatment_utilities`)

Record electricity, fuel, heat, steam, and process water used by the actual treatment route as separate meter or allocation records.

- Selected flow: Utility-specific product flows selected for the site supply
- Flow property / unit: Meter or invoice property and unit
- Amount rule: Directly metered use or documented allocation from shared meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg thermally treated material leaving `cooking_treatment`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Thermally treated fruit or nut material (`treated_material`)

Record treated-material mass and the declared cooking or blanching condition transferred to freezing.

- Selected flow: Internal treated fruit or nut intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass after treatment and draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`

##### Waste flows

###### Thermal-treatment wastewater and losses (`treatment_losses`)

Record wastewater, condensate sent to treatment, spills, and removed solids by destination; do not hide cooking or draining losses in yield.

- Selected flow: Destination-appropriate waste or wastewater flow
- Flow property / unit: Measured mass or volume unit
- Amount rule: Measured discharge and loss quantities attributable to the treatment batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg thermally treated material leaving `cooking_treatment`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_water_records`

##### Elementary flows

### Process: Freezing and stabilization (`freezing`)

#### Inputs

##### Product flows

###### Prepared or treated material sent to freezing (`material_to_freezing`)

Record the measured mass and temperature of material entering the freezer and identify whether it is uncooked or cooked.

- Selected flow: Internal prepared or treated fruit or nut intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured freezer-feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming frozen material leaving `freezing`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`

###### Freezing electricity and other energy (`freezing_energy`)

Record electricity and any fuel, heat, or cooling service used by freezing equipment and attributable auxiliaries.

- Selected flow: Site-supply-specific electricity or energy flow
- Flow property / unit: Energy in the metered or invoice unit
- Amount rule: Direct meter reading or documented shared-utility allocation for the represented batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen material leaving `freezing`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`

###### Refrigerant replenishment attributable to freezing (`freezing_refrigerant_input`)

Record refrigerant identity and replenishment from maintenance or inventory records; allocate shared-system replenishment only with a documented rule.

- Selected flow: Refrigerant-specific product flow selected for the installed system
- Flow property / unit: Mass / kg
- Amount rule: Replenishment mass attributable to the freezing system and reference period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming frozen material leaving `freezing`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming frozen fruit or nut material (`frozen_material`)

Record frozen output mass, core-temperature result, freezing route, conformity status, and any non-conforming frozen mass separately.

- Selected flow: Product-appropriate frozen fruit or nut flow; Banana `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` only for frozen banana
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured conforming frozen output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per freezing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_and_release_records`
- Sources: `codex-cxs-52-1981`; `codex-cxs-69-1981`

##### Waste flows

###### Non-conforming frozen material (`nonconforming_frozen_material`)

Record rejected, reworked, downgraded, or discarded frozen material separately by destination.

- Selected flow: Destination-appropriate waste or product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured non-conforming mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming frozen material leaving `freezing`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_water_records`

##### Elementary flows

###### Direct refrigerant emissions from freezing (`freezing_refrigerant_emission`)

Model identified refrigerant loss to air from equipment servicing, leakage records, or a documented stock balance; do not assign an unspecified generic refrigerant.

- Selected flow: Refrigerant-specific elementary flow selected for the installed system
- Flow property / unit: Mass / kg
- Amount rule: Calculated attributable refrigerant loss from collected replenishment, recovery, and inventory records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming frozen material leaving `freezing`
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

### Process: Product packaging (`packaging`)

#### Inputs

##### Product flows

###### Frozen material entering packaging (`frozen_material_to_packaging`)

Record the measured frozen material transferred to packaging or repacking.

- Selected flow: Product-appropriate frozen fruit or nut flow; Banana UUID only for frozen banana
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured incoming frozen material mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed frozen product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Primary, secondary, and tertiary packaging materials (`packaging_materials`)

Record each packaging component by material, supplier specification, recycled-content claim where relevant, and issued mass. Packaging remains outside the 1 kg net product reference mass.

- Selected flow: Material-specific packaging product flow selected during dataset construction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued packaging mass minus returned unused material, by component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packed frozen product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed frozen product (`packed_frozen_product`)

Record net product mass separately from packaging mass and retain lot-to-package traceability.

- Selected flow: Product-appropriate frozen fruit or nut flow; Banana `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` only for frozen banana
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Sum verified net product mass in conforming packages
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

###### Packaging scrap and rejected packs (`packaging_waste`)

Record packaging scrap and rejected packed product separately by material and destination; recover the food fraction as a separate material record when practical.

- Selected flow: Material- and destination-specific waste flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured scrap or rejected-pack mass by component and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packed frozen product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Elementary flows

### Process: On-site frozen storage and dispatch (`frozen_storage_dispatch`)

#### Inputs

##### Product flows

###### Frozen product entering on-site storage (`product_to_storage`)

Record lot mass, entry time, entry temperature, storage zone, and packaging condition.

- Selected flow: Product-appropriate frozen fruit or nut flow; Banana UUID only for frozen banana
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net frozen product mass entering on-site storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net frozen product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`

###### Cold-storage electricity and refrigerant replenishment (`storage_utilities`)

Record electricity and refrigerant replenishment for the on-site frozen store, preserving separate material identities and allocating shared use with mass-time or directly metered records.

- Selected flow: Site-specific electricity and refrigerant product flows
- Flow property / unit: Metered energy unit for electricity; Mass / kg for refrigerant
- Amount rule: Directly metered use or documented allocation over the recorded storage dwell time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net frozen product dispatched
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Factory-gate frozen product (`reference_product`)

This is the quantitative reference output. Retain the selected Banana UUID only for a frozen-banana dataset; replace it or complete manual identity review for every other product.

- Selected flow: Banana `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed reference amount of 1 kg net conforming frozen product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming frozen product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Storage and dispatch losses (`storage_dispatch_losses`)

Record thawed, damaged, expired, spilled, or otherwise non-conforming product by mass and destination.

- Selected flow: Destination-appropriate waste or product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured loss mass by lot and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net frozen product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`

##### Elementary flows

###### Direct refrigerant emissions from storage (`storage_refrigerant_emission`)

Calculate identified refrigerant loss to air from collected stock, recovery, and replenishment records for the cold-storage system.

- Selected flow: Refrigerant-specific elementary flow selected for the installed system
- Flow property / unit: Mass / kg
- Amount rule: Attributable refrigerant loss calculated from collected records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net frozen product dispatched
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output and shared processes | First avoid allocation by subdivision or by using directly metered batch, line, equipment, or storage-zone data. | `eu-pef-2021-2279` |
| `allocation_physical_relation` | Unavoidable multi-output process | Where subdivision is not possible, allocate inputs and emissions using an established physical relationship that reflects how changing output quantities changes burdens; disclose the parameter, data period, and calculation. | `eu-pef-2021-2279` |
| `allocation_other_relation` | No defensible physical relationship | If no defensible physical relationship exists, use another justified relationship, including economic allocation where appropriate, and report prices, reference period, sensitivity, and why physical allocation was not applicable. | `eu-pef-2021-2279` |
| `allocation_residue_status` | Peels, shells, trimmings, rejected food, recovered material, and other outputs | Classify each output as product, co-product, material for recovery, animal feed, wastewater constituent, or waste before allocation. Record destination and do not assign avoided burdens without an explicit downstream substitution model. | `eu-pef-2021-2279` |
| `allocation_shared_cold_store` | Shared frozen storage | Prefer dedicated metering. Otherwise allocate storage electricity and attributable refrigerant loss using recorded product mass multiplied by recorded dwell time, unless a validated engineering model better represents zone or temperature differences. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `receiving_preparation` | Raw, intermediate, ingredient, and conforming product masses across receiving, treatment, and freezing | Weighbridge, scale, batch, recipe, and transfer records | lot_id; species_or_mixture; supplier; origin; preparation_state; ingredient_id; gross_mass; tare_mass; net_mass; moisture_basis_if_used; timestamp; destination_batch | Calibrated weighing and controlled batch reconciliation | kg and original record units | Every represented lot and batch | Declared representative production period covering relevant seasonal and operating conditions | All facilities and lines included in the dataset | Sum by material identity and batch; subtract tare; link transfers; normalize only after conforming output is known | Calibration records; lot traceability; recipe authorization; reconciliation sign-off |
| `cp_utility_records` | `freezing` | Water, electricity, fuel, heat, steam, and shared utilities across included preparation, treatment, and freezing operations | Meters, invoices, equipment logs, and production schedules | meter_id; utility; opening_reading; closing_reading; unit; timestamp; equipment_or_area; batch_id; allocation_driver | Direct submetering preferred; otherwise documented allocation from synchronized production records | Original meter or invoice unit | Each batch where metered; otherwise at the shortest available billing interval | Same period as represented production | All included process equipment and shared systems | Difference readings; subtract documented non-production use; allocate shared totals using the disclosed causal driver | Meter calibration or verification; invoices; operating-hour logs; allocation worksheet |
| `cp_temperature_and_release_records` | `freezing` | Freezer operation, product-core temperature, stabilization, and release conformity | Calibrated probes, continuous logger, freezer control record, and release test | lot_id; product; standard_claim; probe_id; measurement_location; start_time; end_time; core_temperature; stabilization_condition; freezer_temperature; conformity_decision | Measure at defined representative or worst-case locations under the declared release procedure | °C and timestamp | Every represented batch or validated sampling plan | Same period as represented production | Every included freezer and product route | Retain batch results; do not average away a failed release result; apply product-specific standard only within its scope | Probe calibration; sampling plan; signed release record; deviation and corrective-action log |
| `cp_packaging_records` | `packaging` | Net product, packaging components, and packaging waste | Packaging bill of materials, issue/return records, checkweigher, and waste logs | packaging_component_id; material; supplier; unit_mass; issued_count; returned_count; net_product_mass; rejected_pack_count; scrap_mass; destination | Reconcile packaging issued, used, returned, and discarded with packed net product | kg, item count, and source units | Each packaging batch | Same period as represented production | Every included packaging line and format | Convert counts using verified component mass; aggregate by material; keep packaging mass outside net product mass | Supplier specification; component-mass check; checkweigher verification; reconciliation record |
| `cp_waste_and_water_records` | `receiving_preparation` | Residues, food losses, non-conforming product, wastewater, and destinations across included preparation, treatment, and freezing operations | Scales, containers, wastewater meters, manifests, and laboratory reports | stream_id; material_description; mass_or_volume; unit; batch_id; destination; treatment_route; recovery_status; pollutant_measurement; timestamp | Measure each material stream and retain destination evidence | kg, m3, and laboratory units | Each batch or waste collection event | Same period as represented production | All included processes and discharge points | Aggregate by stream and destination; prevent double counting between product loss and wastewater solids | Scale or meter verification; waste transfer record; laboratory report; destination confirmation |
| `cp_refrigerant_records` | `freezing` | Refrigerant stock, charge, replenishment, recovery, and attributable loss across freezing and frozen storage | Refrigerant log, service invoice, cylinder weighing, and equipment register | refrigerant_identity; equipment_id; opening_stock; additions; recovered_mass; closing_stock; service_date; leak_event; equipment_assignment | Reconcile identified refrigerant mass by equipment system and period | kg | Every service, replenishment, recovery, or inventory event | Same period as represented production, with opening and closing stock | All freezing and cold-storage systems serving included production | Calculate loss from the documented stock balance; allocate shared-system loss using disclosed service or mass-time data | Technician record; cylinder weight; service invoice; equipment charge register; stock-balance review |
| `cp_storage_dispatch_records` | `frozen_storage_dispatch` | Stored mass, dwell time, storage temperature, electricity allocation, and dispatch loss | Warehouse management system, zone logger, dispatch record, and storage submeter | lot_id; net_mass; entry_time; dispatch_time; storage_zone; setpoint; measured_temperature; electricity_reading; refrigerant_system; loss_mass; loss_destination | Link lot movements to zone temperature and energy records | kg, h, °C, kWh, and source units | Every lot movement plus continuous or validated interval logging | Same period as represented production | All on-site frozen stores used before factory-gate dispatch | Calculate mass-time by lot; allocate zone totals using the disclosed rule; retain excursions and losses separately | Logger and meter verification; warehouse traceability; dispatch confirmation; excursion investigation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Reference product | Net frozen product mass = gross packed mass - tare and packaging mass; normalize the completed inventory to exactly 1 kg net conforming product. | gross packed mass; tare mass; packaging mass; conforming status | kg net reference product | `eu-pef-2021-2279` |
| `calc_inventory_normalization` | Every foreground flow | Normalized amount = attributable batch amount / kg net conforming factory-gate product from the same represented production. | attributable flow quantity; net conforming product mass | flow quantity per kg reference product | `eu-pef-2021-2279` |
| `calc_process_mass_reconciliation` | Each material transformation | Reconcile measured incoming fruit or nut material plus added food ingredients and retained water against product, co-product, residue, wastewater solids where measured, samples, spills, and documented mass change; investigate unexplained imbalance rather than forcing closure. | all measured material inputs and outputs; moisture or evaporation evidence where relevant | batch mass-reconciliation record |  |
| `calc_shared_utility_allocation` | Shared utilities | Allocate only after subtracting documented unrelated use; use direct submetering where available, otherwise a disclosed causal driver synchronized to production. | shared meter total; non-production use; batch or equipment driver | utility quantity attributable to represented product | `eu-pef-2021-2279` |
| `calc_storage_mass_time` | Shared frozen storage | Product mass-time = sum of each lot's net mass multiplied by recorded dwell time; use the result as the default shared-zone allocation driver unless direct metering or a validated engineering model is available. | lot net mass; entry time; dispatch time; zone utility total | storage utility attributed to each product lot |  |
| `calc_refrigerant_loss` | Freezing and storage refrigerant emissions | Identified refrigerant loss = opening stock + additions - recovered mass - closing stock, reconciled with equipment service records and never below zero without investigation. | opening stock; additions; recovered mass; closing stock; equipment assignment | kg identified refrigerant loss |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_product_identity` | Reference flow and all product intermediates | Species or mixture, preparation state, composition, presentation, freezing route, release condition, and intended use shall be traceable to each represented lot. The Banana UUID shall appear only for frozen banana unless a documented manual review accepts the exact use. | Product specification; lot records; Tiangong flow selection; identity-review record where applicable |
| `dqr_temporal` | Foreground activity data | Use a declared period that represents the production route and relevant seasonal, start-up, shutdown, defrost, cleaning, and storage conditions; disclose excluded abnormal events and the reason. | Dataset reference period; production calendar; exception log |
| `dqr_technology_geography` | Facility processes and upstream links | Identify facility, line, freezer technology, storage system, refrigerant, energy supply geography, and raw-material origin sufficiently to select representative upstream data. | Equipment register; supplier records; utility contract; dataset metadata |
| `dqr_measurement` | Mass, utility, temperature, and refrigerant records | Retain instrument identity, unit, calibration or verification status, reading interval, allocation method, and responsible record. | Calibration certificates; meter checks; service logs; signed batch records |
| `dqr_completeness` | Foreground inventory | Include every process performed within the declared boundary and reconcile material outputs, food loss, wastewater, packaging, utility use, and direct refrigerant losses. Any omission shall be quantified where possible, justified, and tested for significance. | Process map; reconciliation; missing-data register; significance assessment |
| `dqr_source_scope` | Codex-based requirements | Demonstrate that the species, presentation, intended use, and process fall within the cited Codex standard before applying its requirements. Do not transfer CXS 52-1981, CXS 69-1981, or CXS 320-2015 limits to products outside their scope. | Applicable standard; product specification; conformity statement |
| `dqr_uncertainty` | Calculated and allocated values | Identify measured inputs, calculation formula, allocation driver, data gaps, and sensitivity to material allocation or missing-data choices. | Calculation workbook; allocation record; sensitivity result; quality disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference product flow | Fail validation when Banana UUID `ce6b2d04-9b60-4b60-a4e7-553d7ae67ce0` is used for a non-banana product, an undeclared mixture, or a materially different identity without documented manual review; require a replacement Tiangong product flow otherwise. |  |
| `validate_reference_mass` | Reference flow | Confirm that the quantitative reference is exactly 1 kg net conforming frozen product using Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, with packaging excluded. | `eu-pef-2021-2279` |
| `validate_process_coverage` | Foreground system | Confirm receiving and preparation, freezing, and on-site frozen storage/dispatch are represented; include cooking or blanching and packaging when performed; account for cleaning, waste, wastewater, energy, and direct refrigerant loss where applicable. | `eu-pef-2021-2279` |
| `validate_temperature_claim` | Quick-frozen strawberry or raspberry conformity claim | For a CXS 52-1981 strawberry or CXS 69-1981 raspberry claim, verify recorded thermal-centre temperature reached -18 °C after thermal stabilization and that handling, packaging, and product scope match the cited standard. Do not run this criterion for banana, nuts, or other non-covered products. | `codex-cxs-52-1981`; `codex-cxs-69-1981` |
| `validate_mass_reconciliation` | Material-transforming processes | Confirm measured inputs and outputs are reconciled and that rejects, residues, co-products, wastewater solids where measured, samples, and losses are not hidden in product yield. Investigate and disclose unexplained imbalance. |  |
| `validate_allocation` | Multi-output and shared processes | Confirm allocation was first avoided where practical; otherwise verify the selected relationship, driver, reference period, and sensitivity are documented and consistently applied. | `eu-pef-2021-2279` |
| `validate_source_scope` | All external-source rules | Reject a standard-derived rule when the represented product or process is outside the source scope. In particular, CXS 320-2015 shall not be treated as a frozen-fruit-or-nut standard. | `codex-cxs-320-2015` |
| `validate_data_quality` | Foreground package | Confirm traceability, temporal and technological representativeness, instrument evidence, completeness, missing-data disclosure, and calculation records meet Section 8 requirements. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground dataset for an identified frozen fruit or nut product |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Use in process or lifecycle models whose product identity, composition, preparation state, freezing route, geography, time, packaging condition, storage profile, and system boundary are compatible with the published dataset |
| excluded_use | Automatic representation of all CPC 21493 products by the Banana UUID; use for a non-banana species without flow replacement or manual review; use as a fresh, dried, canned, pureed, jammed, roasted, salted, or frozen-vegetable dataset; extrapolation of product-specific Codex requirements beyond covered products; undisclosed cradle-to-grave claims from this factory-gate profile |
| required_metadata | PCR id and status; actual product-flow name and UUID; explicit Banana-UUID applicability decision; species or mixture and variety where material; ingredient composition; raw-material state and origin; uncooked/cooked/blanched state; presentation and freezing route; release-temperature specification and result; facility geography and technology; reference period; packaging; on-site storage temperature and duration; applicable standards; boundary; allocation; upstream datasets; data-quality and uncertainty disclosures |
| required_quality_disclosure | Primary-data coverage; meter, scale, probe, and refrigerant-record evidence; process and mass reconciliation; allocation drivers; data gaps and exclusions; temporal, geographic, and technological representativeness; standard-scope checks; deviations and sensitivity results |
| update_trigger | New or corrected Tiangong product-flow identity; use for any non-banana product; changed species, composition, cooking state, freezing technology, release specification, packaging, storage system, refrigerant, facility, material supplier region, allocation relationship, product-specific standard, or material foreground data; evidence that a cited source has been revised or superseded |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21493` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21493, *Fruits and nuts, uncooked or cooked, frozen*, explanatory notes dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Classification reference and category-scope context only; not process, quantity, or UUID evidence |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method and Annex II PEFCR requirements, consolidated text, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230 (retrieved 2026-08-11) | Functional unit and reference flow; system-boundary documentation; process and flow completeness; allocation hierarchy; data-quality and validation principles |
| `codex-cxs-52-1981` | Standard (`standard`) | FAO and WHO Codex Alimentarius, CXS 52-1981, *Standard for Quick Frozen Strawberries*, amended 2019 and 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+52-1981%2FCXS_052e.pdf (retrieved 2026-08-11) | Strawberry-only quick-freezing completion, handling, packaging, product identity, and conformity checks; not extrapolated to banana, other fruits, or nuts |
| `codex-cxs-69-1981` | Standard (`standard`) | FAO and WHO Codex Alimentarius, CXS 69-1981, *Standard for Quick-Frozen Raspberries*, amended 2019 and 2022 with 2023 editorial correction, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ru/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B69-1981%252FCXS_069e.pdf (retrieved 2026-08-11) | Raspberry-only quick-freezing completion, handling, packaging, product identity, and conformity checks; not extrapolated to banana, other fruits, or nuts |
| `codex-cxs-320-2015` | Standard (`standard`) | FAO and WHO Codex Alimentarius, CXS 320-2015, *Standard for Quick-Frozen Vegetables*, amended 2017, 2020, and 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B320-2015%252FCXS_320e.pdf (retrieved 2026-08-11) | Scope-limitation evidence only: this vegetable standard is not applied as fruit-or-nut process or quantitative evidence |
