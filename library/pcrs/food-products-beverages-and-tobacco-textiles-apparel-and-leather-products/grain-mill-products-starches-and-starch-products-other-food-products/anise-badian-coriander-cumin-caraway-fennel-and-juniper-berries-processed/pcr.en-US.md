---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-processed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Anise, badian, coriander, cumin, caraway, fennel and juniper berries, processed

## 1. Scope and Applicability

This PCR applies to one processed spice product belonging to CPC 23924: anise fruit, star anise (badian) fruit, coriander fruit, cumin fruit, caraway fruit, sweet fennel fruit, or juniper berry that is crushed, cut, broken, ground, powdered, dried, cleaned, or otherwise processed. A foreground data package shall represent exactly one botanical species and one final style; it shall not average different species or average whole, cut, cracked, ground, and powdered styles.

The foreground boundary begins with receipt of the declared botanical material at the processing facility and ends with net conforming processed product packaged and released at the factory gate. It includes actual receipt and identity control, dry cleaning and grading, route-applicable washing, drying and cooling, route-applicable microbial reduction, route-applicable crushing or grinding and sieving, packaging, storage, cleaning and sanitation, and route-applicable on-site wastewater treatment. Cultivation, harvesting, inbound transport, manufacture of purchased materials and utilities, distribution, retail, use, and end-of-life are outside the foreground boundary and are represented by linked upstream or downstream datasets when the study scope requires them.

The data package shall declare the marketed plant part and scientific species, incoming fresh or dried state, incoming moisture or water activity basis, every processing operation actually performed, drying technology and heat source, final style, particle-size or sieve specification where relevant, microbial-reduction route, packaging configuration, facility geography, and reporting period. Unprocessed products classified under CPC 01654, other spices, multi-species blends, essential oils, oleoresins, extracts, and compound food preparations are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-processed |
| classification_refs | CPC 3.0: 23924, exact |
| covered_products | Processed anise fruit; star anise or badian fruit; coriander fruit; cumin fruit; caraway fruit; sweet fennel fruit; or juniper berry, each reported as one species and one whole, cut, broken, cracked, ground, powdered, or otherwise explicitly described processed style |
| excluded_products | Raw or unprocessed CPC 01654 products; spices outside the seven named plants; multi-species blends; essential oils; oleoresins; extracts; compound foods; unspecified or cross-species averages |
| representative_product | One declared species and declared processed style meeting the applicable contract, food-safety, moisture, particle-size, and packaging specifications |
| production_route | Species-specific receipt, identity control, cleaning and grading, conditional washing, conditional drying and cooling, conditional microbial reduction, conditional crushing or grinding and sieving, packaging, storage, sanitation, and conditional on-site wastewater treatment |
| market_state | Net conforming processed product at the factory gate, in its declared whole, cut, broken, cracked, ground, powdered, or otherwise processed state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A conforming processed product made from exactly one of anise, star anise, coriander, cumin, caraway, sweet fennel, or juniper berry |
| How much | 1 kg net product, excluding primary, secondary, and tertiary packaging |
| How well | Meets the declared species identity, final style, particle-size or sieve specification, moisture or water-activity criterion, food-safety specification, and release grade |
| How long or cycle | One completed manufacturing batch or reporting-period production lot released at the factory gate; storage duration is declared |
| reference_flow_link | The mass of net conforming CPC 23924 product released by the packaging and storage process |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Anise, badian, coriander, cumin, caraway, fennel and juniper berries, processed `1ae74dcb-8fbf-4b6d-a2d4-d2effa668cce` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact common and scientific species; marketed plant part; incoming state and moisture basis; processing route; drying technology and heat source; microbial-reduction route or explicit absence; final style; particle-size or sieve specification; net product mass; packaging configuration; release grade; site geography; reporting period; storage duration |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent fields. Missing qualifiers make the reference flow incomplete. Packaging mass is recorded as inventory input and is not included in the 1 kg reference amount.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg of net conforming product; exclude all packaging and rejected product from the reference mass. |
| `wet_dry_basis` | Botanical inputs, products, screenings, dust, and rejected material | Mass | kg | Record measured as-received mass and moisture or water activity; any dry-matter conversion shall retain the measurement method and calculation. |
| `stage_energy` | Electricity, steam, hot water, and each fuel | Energy or mass/volume with a documented conversion | kWh, MJ, kg, m3, or L | Record each carrier separately at the stage where used; do not substitute a combined energy total. |
| `water_balance` | Washing and sanitation water and wastewater | Volume or Mass | m3 or kg | Measure supplied water and each wastewater stream separately; document density when converting volume to mass. |
| `packaging_mass` | Each packaging component and its scrap | Mass | kg | Measure each material separately and exclude packaging from the net reference product mass. |
| `particle_size` | Cut, broken, cracked, ground, or powdered product | Declared sieve or particle-size metric | mm, µm, or retained/passing mass fraction | State the test method, sieve apertures, and measured distribution; do not pool different styles. |
| `emission_load` | Direct air and water emissions | Mass | kg | Use direct measurement or a transparent calculation from measured activity data and a cited or facility factor; report each substance separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One named botanical material received at the processing facility, with plant part, scientific species, fresh or dried state, moisture or water activity, origin, and supplier lot declared |
| starting_condition_role | Foreground gate input; cultivation, harvest, and inbound transport are linked upstream rather than included as processing operations |
| product_classification_scope | CPC 23924 only; one of the seven named species and one explicitly declared processed style |
| recursive_input_rule | If an input already meets CPC 23924, record it as a purchased processed-spice input with its own upstream dataset and do not recursively reapply this PCR to the same input within the foreground process |
| upstream_dataset_requirement | Link species-, origin-, state-, and supplier-representative datasets for botanical input, utilities, chemicals, packaging, irradiation services, and off-site treatment; disclose every proxy |
| disclosure | Report included and omitted stages, incoming state, all route choices, shared-equipment allocation, storage conditions, wastewater destination, waste disposition, and data gaps |

| rule_id | Rule |
| --- | --- |
| `boundary_species_lock` | A data package shall contain exactly one declared botanical species and one final product style; cross-species and cross-style averaging is prohibited. |
| `boundary_route_lock` | Include only operations actually performed for the declared batch or homogeneous production campaign, and mark every conditional process as applicable or not applicable with evidence. |
| `boundary_foreground_gate` | Collect facility operations from raw-material receipt through packaged-product release; model cultivation, inbound transport, purchased-input production, distribution, use, and end-of-life through linked datasets when required by the study. |
| `boundary_internal_transfer` | Internal intermediate transfers may be consolidated in the factory-gate process, but stage input, loss, waste, and emission records shall remain traceable to the process map and mass balance. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_identity_control` | Receipt, identity control, and initial sorting | required | Always included for a processed CPC 23924 product | Establish one-species lot identity, incoming state, accepted mass, rejected material, and incoming-packaging waste | Accepted botanical mass by supplier lot |
| `dry_cleaning_grading` | Dry cleaning, grading, and foreign-material removal | required | Always included; record the actual equipment train | Separate the declared botanical material from screenings, captured dust, stones, metal, and released dust | Cleaned botanical mass by lot |
| `wet_washing_draining` | Wet washing and draining | conditional | Included only when potable-water washing is actually performed | Record washing water, stage electricity, and species-specific washing wastewater | Washed botanical mass by lot |
| `controlled_drying_cooling` | Controlled drying and cooling | conditional | Included when the facility dries, re-dries, conditions, or actively cools the material | Record stage electricity, each thermal carrier, each fuel, refrigerant, and direct air emission | Dried botanical mass by lot |
| `microbial_reduction` | Microbial-reduction treatment | conditional | Included only for the declared steam, irradiation, or other legally permitted validated route | Record treatment-specific utilities or service and condensate | Treated botanical mass by lot |
| `crushing_grinding_sieving` | Crushing, grinding, and sieving | conditional | Included for cut, broken, cracked, ground, or powdered styles and any route using size reduction or sieving | Record electricity, compressed air, permitted anticaking agent, screenings, captured dust, and emitted dust | Conforming processed mass by style and sieve specification |
| `packaging_storage_release` | Packaging, controlled storage, and release | required | Always included; refrigerated storage is conditional | Record each packaging material, storage electricity, refrigerant, packaging scrap, rejected product, and the reference output | Net released product mass |
| `cleaning_sanitation` | Equipment and area cleaning and sanitation | required | Dry cleaning is preferred; liquid cleaning and each chemical are recorded only when used | Record water, heat, electricity, each chemical, and its wastewater stream | Cleaned equipment area or production campaign |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Included when process wastewater is treated inside the foreground facility | Record each incoming wastewater, treatment input, sludge, effluent, and each water emission | Treated wastewater volume |

### Process: Receipt, identity control, and initial sorting (`receipt_and_identity_control`)

#### Inputs

##### Product flows

###### Anise raw material (`anise_material_input`)

Anise fruit from *Pimpinella anisum* crosses the facility gate for the declared single-species production lot; its mass, marketed state, moisture, and supplier lot are recorded.

- Selected flow: Anise fruit for food processing
- Flow property / unit: Mass / kg
- Amount rule: Record accepted and rejected as-received mass by supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming product of the same species and style
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `un-cpc-3-0`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Star anise raw material (`star_anise_material_input`)

Star anise fruit from *Illicium verum* crosses the facility gate for the declared single-species production lot; its mass, marketed state, moisture, and supplier lot are recorded.

- Selected flow: Star anise fruit for food processing
- Flow property / unit: Mass / kg
- Amount rule: Record accepted and rejected as-received mass by supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming product of the same species and style
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `un-cpc-3-0`, `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### Coriander raw material (`coriander_material_input`)

Coriander fruit from *Coriandrum sativum* crosses the facility gate for the declared single-species production lot; its mass, marketed state, moisture, and supplier lot are recorded.

- Selected flow: Coriander fruit for food processing
- Flow property / unit: Mass / kg
- Amount rule: Record accepted and rejected as-received mass by supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming product of the same species and style
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `un-cpc-3-0`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Cumin raw material (`cumin_material_input`)

Cumin fruit from *Cuminum cyminum* crosses the facility gate for the declared single-species production lot; its mass, marketed state, moisture, and supplier lot are recorded.

- Selected flow: Cumin fruit for food processing
- Flow property / unit: Mass / kg
- Amount rule: Record accepted and rejected as-received mass by supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming product of the same species and style
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `un-cpc-3-0`, `codex-cxs-327-2017`, `eu-pef-2021-2279`

###### Caraway raw material (`caraway_material_input`)

Caraway fruit from *Carum carvi* crosses the facility gate for the declared single-species production lot; its mass, marketed state, moisture, and supplier lot are recorded.

- Selected flow: Caraway fruit for food processing
- Flow property / unit: Mass / kg
- Amount rule: Record accepted and rejected as-received mass by supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming product of the same species and style
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `un-cpc-3-0`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Sweet fennel raw material (`fennel_material_input`)

Sweet fennel fruit from *Foeniculum vulgare* crosses the facility gate for the declared single-species production lot; its mass, marketed state, moisture, and supplier lot are recorded.

- Selected flow: Sweet fennel fruit for food processing
- Flow property / unit: Mass / kg
- Amount rule: Record accepted and rejected as-received mass by supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming product of the same species and style
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `un-cpc-3-0`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Juniper raw material (`juniper_material_input`)

Juniper berries from *Juniperus communis* cross the facility gate for the declared single-species production lot; their mass, marketed state, moisture, and supplier lot are recorded.

- Selected flow: Juniper berries for food processing
- Flow property / unit: Mass / kg
- Amount rule: Record accepted and rejected as-received mass by supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net conforming product of the same species and style
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `un-cpc-3-0`, `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### Receipt electricity (`receipt_electricity_input`)

Metered grid electricity powers unloading, lot identification, weighing, initial inspection, and sorting equipment.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage submeter reading or calculate from measured equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg accepted botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows



###### Used jute sack (`receipt_jute_sack_waste`)

Jute sacks removed from incoming botanical lots leave receipt as a separately weighed waste stream.

- Selected flow: Used jute sack
- Flow property / unit: Mass / kg
- Amount rule: Record the measured mass and documented reuse, recycling, or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg accepted botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Used polypropylene woven sack (`receipt_pp_sack_waste`)

Polypropylene woven sacks removed from incoming botanical lots leave receipt as a separately weighed waste stream.

- Selected flow: Used polypropylene woven sack
- Flow property / unit: Mass / kg
- Amount rule: Record the measured mass and documented reuse, recycling, or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg accepted botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Used polyethylene bag liner (`receipt_pe_liner_waste`)

Polyethylene liners removed from incoming botanical lots leave receipt as a separately weighed waste stream.

- Selected flow: Used polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: Record the measured mass and documented recycling or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg accepted botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `eu-pef-2021-2279`

###### Rejected anise fruit (`rejected_anise_material`)

Anise fruit rejected during receipt inspection is weighed separately and assigned its actual recovery or disposal route.

- Selected flow: Rejected anise fruit
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass by supplier lot and rejection reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Rejected star anise fruit (`rejected_star_anise_material`)

Star anise fruit rejected during receipt inspection is weighed separately and assigned its actual recovery or disposal route.

- Selected flow: Rejected star anise fruit
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass by supplier lot and rejection reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted star anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### Rejected coriander fruit (`rejected_coriander_material`)

Coriander fruit rejected during receipt inspection is weighed separately and assigned its actual recovery or disposal route.

- Selected flow: Rejected coriander fruit
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass by supplier lot and rejection reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted coriander fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Rejected cumin fruit (`rejected_cumin_material`)

Cumin fruit rejected during receipt inspection is weighed separately and assigned its actual recovery or disposal route.

- Selected flow: Rejected cumin fruit
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass by supplier lot and rejection reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted cumin fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxs-327-2017`, `eu-pef-2021-2279`

###### Rejected caraway fruit (`rejected_caraway_material`)

Caraway fruit rejected during receipt inspection is weighed separately and assigned its actual recovery or disposal route.

- Selected flow: Rejected caraway fruit
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass by supplier lot and rejection reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted caraway fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Rejected sweet fennel fruit (`rejected_fennel_material`)

Sweet fennel fruit rejected during receipt inspection is weighed separately and assigned its actual recovery or disposal route.

- Selected flow: Rejected sweet fennel fruit
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass by supplier lot and rejection reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted sweet fennel fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Rejected juniper berries (`rejected_juniper_material`)

Juniper berries rejected during receipt inspection are weighed separately and assigned their actual recovery or disposal route.

- Selected flow: Rejected juniper berries
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass by supplier lot and rejection reason.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg accepted juniper berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### Separated stones (`foreign_stone_waste`)

Stones removed during incoming inspection and sorting are collected and weighed independently from botanical rejects.

- Selected flow: Separated stones from food raw material
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass removed from the declared supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg accepted botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxs-327-2017`, `eu-pef-2021-2279`

###### Separated ferrous metal (`foreign_metal_waste`)

Ferrous metal removed by magnets or inspection is collected and weighed independently from stones and botanical rejects.

- Selected flow: Separated ferrous metal from food raw material
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass removed from the declared supplier lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg accepted botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity`
- Sources: `codex-cxs-327-2017`, `eu-pef-2021-2279`

##### Elementary flows

### Process: Dry cleaning, grading, and foreign-material removal (`dry_cleaning_grading`)

#### Inputs

##### Product flows

###### Dry-cleaning electricity (`dry_cleaning_electricity_input`)

Metered grid electricity powers screens, aspirators, graders, magnets, conveyors, and dust-control equipment in dry cleaning.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage submeter reading or calculate from measured equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg cleaned botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `fao-herb-spice-processing`, `eu-bat-fdm-2019-2031`

###### Dry-cleaning compressed air (`dry_cleaning_compressed_air_input`)

Compressed air supplied to the dry-cleaning line is recorded when it crosses the process boundary for aspiration or equipment cleaning.

- Selected flow: Compressed air for food-processing equipment
- Flow property / unit: Volume / m3
- Amount rule: Record metered delivered volume and pressure, excluding electricity already recorded for a site compressor when that would double count.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg cleaned botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Anise cleaning screenings (`anise_cleaning_screenings`)

Plant fragments and undersize material separated specifically from anise fruit during dry cleaning are weighed as one waste stream.

- Selected flow: Anise cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass and documented disposition for the anise lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `codex-cxc-78-2017`

###### Star anise cleaning screenings (`star_anise_cleaning_screenings`)

Plant fragments and undersize material separated specifically from star anise fruit during dry cleaning are weighed as one waste stream.

- Selected flow: Star anise cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass and documented disposition for the star anise lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned star anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `codex-cxs-358-2024`

###### Coriander cleaning screenings (`coriander_cleaning_screenings`)

Plant fragments and undersize material separated specifically from coriander fruit during dry cleaning are weighed as one waste stream.

- Selected flow: Coriander cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass and documented disposition for the coriander lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned coriander fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `codex-cxc-78-2017`

###### Cumin cleaning screenings (`cumin_cleaning_screenings`)

Plant fragments and undersize material separated specifically from cumin fruit during dry cleaning are weighed as one waste stream.

- Selected flow: Cumin cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass and documented disposition for the cumin lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned cumin fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `codex-cxs-327-2017`

###### Caraway cleaning screenings (`caraway_cleaning_screenings`)

Plant fragments and undersize material separated specifically from caraway fruit during dry cleaning are weighed as one waste stream.

- Selected flow: Caraway cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass and documented disposition for the caraway lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned caraway fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `codex-cxc-78-2017`

###### Sweet fennel cleaning screenings (`fennel_cleaning_screenings`)

Plant fragments and undersize material separated specifically from sweet fennel fruit during dry cleaning are weighed as one waste stream.

- Selected flow: Sweet fennel cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass and documented disposition for the sweet fennel lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned sweet fennel fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `codex-cxc-78-2017`

###### Juniper cleaning screenings (`juniper_cleaning_screenings`)

Plant fragments and undersize material separated specifically from juniper berries during dry cleaning are weighed as one waste stream.

- Selected flow: Juniper berry cleaning screenings
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass and documented disposition for the juniper lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned juniper berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `codex-cxc-42-1995`, `codex-cxs-358-2024`

###### Captured anise dust (`captured_anise_cleaning_dust`)

Dust collected from anise cleaning by a cyclone or filter is weighed separately from emitted anise dust.

- Selected flow: Captured anise fruit dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured star anise dust (`captured_star_anise_cleaning_dust`)

Dust collected from star anise cleaning by a cyclone or filter is weighed separately from emitted star anise dust.

- Selected flow: Captured star anise fruit dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned star anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured coriander dust (`captured_coriander_cleaning_dust`)

Dust collected from coriander cleaning by a cyclone or filter is weighed separately from emitted coriander dust.

- Selected flow: Captured coriander fruit dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned coriander fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured cumin dust (`captured_cumin_cleaning_dust`)

Dust collected from cumin cleaning by a cyclone or filter is weighed separately from emitted cumin dust.

- Selected flow: Captured cumin fruit dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned cumin fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured caraway dust (`captured_caraway_cleaning_dust`)

Dust collected from caraway cleaning by a cyclone or filter is weighed separately from emitted caraway dust.

- Selected flow: Captured caraway fruit dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned caraway fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured sweet fennel dust (`captured_fennel_cleaning_dust`)

Dust collected from sweet fennel cleaning by a cyclone or filter is weighed separately from emitted sweet fennel dust.

- Selected flow: Captured sweet fennel fruit dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned sweet fennel fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured juniper dust (`captured_juniper_cleaning_dust`)

Dust collected from juniper cleaning by a cyclone or filter is weighed separately from emitted juniper dust.

- Selected flow: Captured juniper berry dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg cleaned juniper berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

###### Anise dust to air (`anise_cleaning_dust_to_air`)

Anise fruit dust released beyond the dry-cleaning control device is quantified as a direct air emission.

- Selected flow: Anise fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack or workplace-exhaust measurement; otherwise calculate from measured throughput and a documented facility emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg cleaned anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Star anise dust to air (`star_anise_cleaning_dust_to_air`)

Star anise fruit dust released beyond the dry-cleaning control device is quantified as a direct air emission.

- Selected flow: Star anise fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack or workplace-exhaust measurement; otherwise calculate from measured throughput and a documented facility emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg cleaned star anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Coriander dust to air (`coriander_cleaning_dust_to_air`)

Coriander fruit dust released beyond the dry-cleaning control device is quantified as a direct air emission.

- Selected flow: Coriander fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack or workplace-exhaust measurement; otherwise calculate from measured throughput and a documented facility emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg cleaned coriander fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Cumin dust to air (`cumin_cleaning_dust_to_air`)

Cumin fruit dust released beyond the dry-cleaning control device is quantified as a direct air emission.

- Selected flow: Cumin fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack or workplace-exhaust measurement; otherwise calculate from measured throughput and a documented facility emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg cleaned cumin fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Caraway dust to air (`caraway_cleaning_dust_to_air`)

Caraway fruit dust released beyond the dry-cleaning control device is quantified as a direct air emission.

- Selected flow: Caraway fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack or workplace-exhaust measurement; otherwise calculate from measured throughput and a documented facility emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg cleaned caraway fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Sweet fennel dust to air (`fennel_cleaning_dust_to_air`)

Sweet fennel fruit dust released beyond the dry-cleaning control device is quantified as a direct air emission.

- Selected flow: Sweet fennel fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack or workplace-exhaust measurement; otherwise calculate from measured throughput and a documented facility emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg cleaned sweet fennel fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

###### Juniper dust to air (`juniper_cleaning_dust_to_air`)

Juniper berry dust released beyond the dry-cleaning control device is quantified as a direct air emission.

- Selected flow: Juniper berry dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack or workplace-exhaust measurement; otherwise calculate from measured throughput and a documented facility emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg cleaned juniper berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_cleaning`
- Sources: `eu-bat-fdm-2019-2031`

### Process: Wet washing and draining (`wet_washing_draining`)

#### Inputs

##### Product flows

###### Potable washing water (`washing_water_input`)

Potable water enters the wet-washing process only for the declared lot for which washing is actually performed.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Record the washing-water meter reading and exclude sanitation water recorded in another process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg washed botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `codex-cxc-78-2017`, `fao-herb-spice-processing`, `eu-bat-fdm-2019-2031`

###### Washing electricity (`washing_electricity_input`)

Metered grid electricity powers washers, conveyors, drainage equipment, and pumps used for wet washing.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage submeter reading or calculate from measured equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg washed botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Anise washing wastewater (`anise_washing_wastewater`)

Wastewater generated by washing anise fruit is metered separately from sanitation wastewater and other species.

- Selected flow: Anise fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, destination, and sampling period for the anise lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg washed anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Star anise washing wastewater (`star_anise_washing_wastewater`)

Wastewater generated by washing star anise fruit is metered separately from sanitation wastewater and other species.

- Selected flow: Star anise fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, destination, and sampling period for the star anise lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg washed star anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Coriander washing wastewater (`coriander_washing_wastewater`)

Wastewater generated by washing coriander fruit is metered separately from sanitation wastewater and other species.

- Selected flow: Coriander fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, destination, and sampling period for the coriander lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg washed coriander fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Cumin washing wastewater (`cumin_washing_wastewater`)

Wastewater generated by washing cumin fruit is metered separately from sanitation wastewater and other species.

- Selected flow: Cumin fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, destination, and sampling period for the cumin lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg washed cumin fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `codex-cxc-78-2017`, `codex-cxs-327-2017`, `eu-bat-fdm-2019-2031`

###### Caraway washing wastewater (`caraway_washing_wastewater`)

Wastewater generated by washing caraway fruit is metered separately from sanitation wastewater and other species.

- Selected flow: Caraway fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, destination, and sampling period for the caraway lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg washed caraway fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Sweet fennel washing wastewater (`fennel_washing_wastewater`)

Wastewater generated by washing sweet fennel fruit is metered separately from sanitation wastewater and other species.

- Selected flow: Sweet fennel fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, destination, and sampling period for the sweet fennel lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg washed sweet fennel fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Juniper washing wastewater (`juniper_washing_wastewater`)

Wastewater generated by washing juniper berries is metered separately from sanitation wastewater and other species.

- Selected flow: Juniper berry washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, destination, and sampling period for the juniper lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg washed juniper berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_washing`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

##### Elementary flows

### Process: Controlled drying and cooling (`controlled_drying_cooling`)

#### Inputs

##### Product flows

###### Drying electricity (`drying_electricity_input`)

Metered grid electricity powers fans, conveyors, controls, heat pumps, and cooling equipment for the declared drying route.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the drying-stage submeter reading or calculate from measured equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### Purchased drying steam (`drying_steam_input`)

Purchased steam crosses the drying boundary only when the declared dryer or heat exchanger uses steam.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Record metered delivered steam energy or mass with pressure, temperature, condensate return, and enthalpy calculation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Purchased drying hot water (`drying_hot_water_input`)

Purchased hot water crosses the drying boundary only when it supplies a heat exchanger or active conditioning loop.

- Selected flow: Purchased hot water for food processing
- Flow property / unit: Energy / MJ
- Amount rule: Calculate delivered heat from measured flow and inlet and outlet temperatures; retain the heat-capacity basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-bat-fdm-2019-2031`

###### Natural gas for dryer (`dryer_natural_gas_input`)

Natural gas burned for the declared dryer is recorded separately from every other fuel.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record metered fuel volume and convert with the supplier lower heating value.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Diesel for dryer (`dryer_diesel_input`)

Diesel burned for the declared dryer is recorded separately from natural gas, LPG, and kerosene.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record tank withdrawal or invoice-balanced mass attributable to the drying campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Liquefied petroleum gas for dryer (`dryer_lpg_input`)

Liquefied petroleum gas burned for the declared dryer is recorded separately from natural gas, diesel, and kerosene.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record cylinder or tank mass withdrawal attributable to the drying campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Kerosene for dryer (`dryer_kerosene_input`)

Kerosene burned for the declared dryer is recorded separately from natural gas, diesel, and LPG.

- Selected flow: Kerosene
- Flow property / unit: Mass / kg
- Amount rule: Record tank withdrawal or invoice-balanced mass attributable to the drying campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `fao-herb-spice-processing`

###### Dry firewood for smoke dryer (`dryer_firewood_input`)

Dry firewood burned in a declared smoke-drying house is recorded separately from natural gas, diesel, LPG, and kerosene.

- Selected flow: Dry firewood for spice smoke drying
- Flow property / unit: Mass / kg
- Amount rule: Record weighed dry firewood supplied to the applicable smoke-drying campaign and its measured moisture basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoke-dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Ammonia refrigerant makeup (`drying_r717_makeup_input`)

R717 ammonia added to the active cooling system is recorded from maintenance and charging records when that refrigerant is used.

- Selected flow: Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: Record charged makeup mass attributable to the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg actively cooled botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-pef-2021-2279`

###### Carbon dioxide refrigerant makeup (`drying_r744_makeup_input`)

R744 carbon dioxide added to the active cooling system is recorded from maintenance and charging records when that refrigerant is used.

- Selected flow: Carbon dioxide refrigerant R744
- Flow property / unit: Mass / kg
- Amount rule: Record charged makeup mass attributable to the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg actively cooled botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-pef-2021-2279`

###### Propane refrigerant makeup (`drying_r290_makeup_input`)

R290 propane added to the active cooling system is recorded from maintenance and charging records when that refrigerant is used.

- Selected flow: Propane refrigerant R290
- Flow property / unit: Mass / kg
- Amount rule: Record charged makeup mass attributable to the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg actively cooled botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from dryer combustion (`dryer_fossil_co2_to_air`)

Fossil carbon dioxide from on-site combustion of the recorded drying fuel is reported as a single direct air emission.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from each measured fuel quantity and its documented carbon or emission factor without combining fuel activity records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

###### Biogenic carbon dioxide from dryer combustion (`dryer_biogenic_co2_to_air`)

Biogenic carbon dioxide from on-site combustion of the recorded dry firewood is reported separately from fossil carbon dioxide.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured dry-firewood quantity, measured moisture, and a documented biogenic carbon or emission factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoke-dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Carbon monoxide from dryer combustion (`dryer_co_to_air`)

Carbon monoxide from on-site dryer combustion is quantified separately from carbon dioxide and nitrogen oxides.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack measurement or calculate by fuel from measured consumption and a documented factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-bat-fdm-2019-2031`

###### Nitrogen oxides from dryer combustion (`dryer_nox_to_air`)

Nitrogen oxides from on-site dryer combustion are quantified separately from carbon monoxide and sulfur oxides.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack measurement or calculate by fuel from measured consumption and a documented factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-bat-fdm-2019-2031`

###### Sulfur oxides from dryer combustion (`dryer_sox_to_air`)

Sulfur oxides from on-site dryer combustion are quantified separately from nitrogen oxides and particulate matter.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack measurement or calculate by fuel from measured consumption and documented sulfur content.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-bat-fdm-2019-2031`

###### PM10 from dryer combustion (`dryer_pm10_to_air`)

Direct particulate matter with aerodynamic diameter no greater than 10 µm from dryer combustion is reported separately.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack measurement or calculate by fuel from measured consumption and a documented size-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-bat-fdm-2019-2031`

###### PM2.5 from dryer combustion (`dryer_pm25_to_air`)

Direct particulate matter with aerodynamic diameter no greater than 2.5 µm from dryer combustion is reported separately.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct stack measurement or calculate by fuel from measured consumption and a documented size-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg dried botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-bat-fdm-2019-2031`

###### Ammonia refrigerant to air (`drying_r717_to_air`)

R717 ammonia lost from the active cooling system is reported as a direct air emission based on the refrigerant balance.

- Selected flow: Ammonia refrigerant R717 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate opening charge plus additions minus closing charge and recovered mass for the reporting period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg actively cooled botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-pef-2021-2279`

###### Carbon dioxide refrigerant to air (`drying_r744_to_air`)

R744 carbon dioxide lost from the active cooling system is reported as a direct air emission based on the refrigerant balance.

- Selected flow: Carbon dioxide refrigerant R744 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate opening charge plus additions minus closing charge and recovered mass for the reporting period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg actively cooled botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-pef-2021-2279`

###### Propane refrigerant to air (`drying_r290_to_air`)

R290 propane lost from the active cooling system is reported as a direct air emission based on the refrigerant balance.

- Selected flow: Propane refrigerant R290 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate opening charge plus additions minus closing charge and recovered mass for the reporting period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg actively cooled botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `eu-pef-2021-2279`

###### Anise drying dust to air (`anise_drying_dust_to_air`)

Anise fruit dust released from the declared dryer or cooler is quantified independently from combustion particulate matter.

- Selected flow: Anise fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use control-device or exhaust measurement attributable to the anise drying campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg dried anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Star anise drying dust to air (`star_anise_drying_dust_to_air`)

Star anise fruit dust released from the declared dryer or cooler is quantified independently from combustion particulate matter.

- Selected flow: Star anise fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use control-device or exhaust measurement attributable to the star anise drying campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg dried star anise fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Coriander drying dust to air (`coriander_drying_dust_to_air`)

Coriander fruit dust released from the declared dryer or cooler is quantified independently from combustion particulate matter.

- Selected flow: Coriander fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use control-device or exhaust measurement attributable to the coriander drying campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg dried coriander fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Cumin drying dust to air (`cumin_drying_dust_to_air`)

Cumin fruit dust released from the declared dryer or cooler is quantified independently from combustion particulate matter.

- Selected flow: Cumin fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use control-device or exhaust measurement attributable to the cumin drying campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg dried cumin fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `codex-cxs-327-2017`, `eu-bat-fdm-2019-2031`

###### Caraway drying dust to air (`caraway_drying_dust_to_air`)

Caraway fruit dust released from the declared dryer or cooler is quantified independently from combustion particulate matter.

- Selected flow: Caraway fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use control-device or exhaust measurement attributable to the caraway drying campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg dried caraway fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Sweet fennel drying dust to air (`fennel_drying_dust_to_air`)

Sweet fennel fruit dust released from the declared dryer or cooler is quantified independently from combustion particulate matter.

- Selected flow: Sweet fennel fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use control-device or exhaust measurement attributable to the sweet fennel drying campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg dried sweet fennel fruit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

###### Juniper drying dust to air (`juniper_drying_dust_to_air`)

Juniper berry dust released from the declared dryer or cooler is quantified independently from combustion particulate matter.

- Selected flow: Juniper berry dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use control-device or exhaust measurement attributable to the juniper drying campaign.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg dried juniper berries
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_cooling`
- Sources: `codex-cxc-78-2017`, `eu-bat-fdm-2019-2031`

### Process: Microbial-reduction treatment (`microbial_reduction`)

#### Inputs

##### Product flows

###### Microbial-reduction electricity (`microbial_reduction_electricity_input`)

Metered grid electricity powers the declared steam-treatment, irradiation, UV, conveying, ventilation, or control equipment.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the treatment-stage submeter reading or calculate from measured equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg treated botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_reduction`
- Sources: `codex-cxc-42-1995`, `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Product-contact steam (`microbial_reduction_steam_input`)

Product-contact steam is recorded only when steam microbial reduction is actually applied to the declared lot.

- Selected flow: Food-grade product-contact steam
- Flow property / unit: Mass / kg
- Amount rule: Record metered steam mass and pressure supplied to the treatment chamber.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg steam-treated botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_reduction`
- Sources: `codex-cxc-42-1995`, `codex-cxc-78-2017`

###### Steam-treatment water (`microbial_reduction_water_input`)

Potable water used to generate direct product-contact steam is recorded when it crosses this process boundary and is not already included in purchased steam.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Record metered make-up water and avoid double counting water embedded in purchased steam.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg steam-treated botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_reduction`
- Sources: `codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

###### Gamma irradiation service (`gamma_irradiation_service_input`)

A contracted gamma-irradiation service crosses the process boundary only when the declared lot receives that legally permitted treatment.

- Selected flow: Gamma irradiation treatment service for food
- Flow property / unit: Mass / kg treated
- Amount rule: Record the treated lot mass, contracted service, absorbed-dose record, and treatment facility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg gamma-irradiated botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_reduction`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Electron-beam irradiation service (`electron_beam_service_input`)

A contracted electron-beam irradiation service crosses the process boundary only when the declared lot receives that legally permitted treatment.

- Selected flow: Electron-beam irradiation treatment service for food
- Flow property / unit: Mass / kg treated
- Amount rule: Record the treated lot mass, contracted service, absorbed-dose record, and treatment facility.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg electron-beam-treated botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_reduction`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steam-treatment condensate (`microbial_reduction_condensate`)

Condensate drained from product-contact steam treatment is metered separately from washing and sanitation wastewater.

- Selected flow: Steam-treatment condensate from food processing
- Flow property / unit: Volume / m3
- Amount rule: Record measured condensate volume and its reuse or wastewater destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg steam-treated botanical material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_reduction`
- Sources: `codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

##### Elementary flows

### Process: Crushing, grinding, and sieving (`crushing_grinding_sieving`)

#### Inputs

##### Product flows

###### Milling electricity (`milling_electricity_input`)

Metered grid electricity powers cutting, crushing, grinding, conveying, sieving, and dust-control equipment for the declared final style.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage submeter reading or calculate from measured equipment power and operating time for the declared style.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg conforming processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxs-327-2017`, `codex-cxs-358-2024`, `eu-bat-fdm-2019-2031`

###### Milling compressed air (`milling_compressed_air_input`)

Compressed air supplied to pneumatic conveying or mill cleaning is recorded when it crosses the process boundary.

- Selected flow: Compressed air for food-processing equipment
- Flow property / unit: Volume / m3
- Amount rule: Record metered delivered volume and pressure, excluding compressor electricity already recorded when that would double count.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg conforming processed product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

###### Silicon dioxide anticaking agent (`silicon_dioxide_input`)

Food-grade silicon dioxide is recorded only when it is legally permitted and actually added to the declared powdered product formulation.

- Selected flow: Silicon dioxide, food grade
- Flow property / unit: Mass / kg
- Amount rule: Record batch-weighed addition and formulation specification; otherwise mark this atomic row not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming powdered product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxs-327-2017`, `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### Tricalcium phosphate anticaking agent (`tricalcium_phosphate_input`)

Food-grade tricalcium phosphate is recorded only when it is legally permitted and actually added to the declared powdered product formulation.

- Selected flow: Tricalcium phosphate, food grade
- Flow property / unit: Mass / kg
- Amount rule: Record batch-weighed addition and formulation specification; otherwise mark this atomic row not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming powdered product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxs-327-2017`, `codex-cxs-358-2024`, `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Anise milling oversize (`anise_milling_oversize`)

Anise material retained outside the declared sieve specification is weighed separately when it leaves the milling process as waste rather than rework.

- Selected flow: Anise milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass, sieve aperture, and final disposition; exclude material returned internally for rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming anise product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxc-42-1995`, `eu-pef-2021-2279`

###### Star anise milling oversize (`star_anise_milling_oversize`)

Star anise material retained outside the declared sieve specification is weighed separately when it leaves the milling process as waste rather than rework.

- Selected flow: Star anise milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass, sieve aperture, and final disposition; exclude material returned internally for rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming star anise product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### Coriander milling oversize (`coriander_milling_oversize`)

Coriander material retained outside the declared sieve specification is weighed separately when it leaves the milling process as waste rather than rework.

- Selected flow: Coriander milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass, sieve aperture, and final disposition; exclude material returned internally for rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming coriander product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxc-42-1995`, `eu-pef-2021-2279`

###### Cumin milling oversize (`cumin_milling_oversize`)

Cumin material retained outside the declared sieve specification is weighed separately when it leaves the milling process as waste rather than rework.

- Selected flow: Cumin milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass, sieve aperture, and final disposition; exclude material returned internally for rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming cumin product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxs-327-2017`, `eu-pef-2021-2279`

###### Caraway milling oversize (`caraway_milling_oversize`)

Caraway material retained outside the declared sieve specification is weighed separately when it leaves the milling process as waste rather than rework.

- Selected flow: Caraway milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass, sieve aperture, and final disposition; exclude material returned internally for rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming caraway product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxc-42-1995`, `eu-pef-2021-2279`

###### Sweet fennel milling oversize (`fennel_milling_oversize`)

Sweet fennel material retained outside the declared sieve specification is weighed separately when it leaves the milling process as waste rather than rework.

- Selected flow: Sweet fennel milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass, sieve aperture, and final disposition; exclude material returned internally for rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming sweet fennel product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxc-42-1995`, `eu-pef-2021-2279`

###### Juniper milling oversize (`juniper_milling_oversize`)

Juniper material retained outside the declared sieve specification is weighed separately when it leaves the milling process as waste rather than rework.

- Selected flow: Juniper berry milling oversize
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass, sieve aperture, and final disposition; exclude material returned internally for rework.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming juniper product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### Captured anise milling dust (`captured_anise_milling_dust`)

Anise dust discharged from the milling cyclone or filter is weighed separately from anise dust emitted to air.

- Selected flow: Captured anise milling dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming anise product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured star anise milling dust (`captured_star_anise_milling_dust`)

Star anise dust discharged from the milling cyclone or filter is weighed separately from star anise dust emitted to air.

- Selected flow: Captured star anise milling dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming star anise product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured coriander milling dust (`captured_coriander_milling_dust`)

Coriander dust discharged from the milling cyclone or filter is weighed separately from coriander dust emitted to air.

- Selected flow: Captured coriander milling dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming coriander product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured cumin milling dust (`captured_cumin_milling_dust`)

Cumin dust discharged from the milling cyclone or filter is weighed separately from cumin dust emitted to air.

- Selected flow: Captured cumin milling dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming cumin product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured caraway milling dust (`captured_caraway_milling_dust`)

Caraway dust discharged from the milling cyclone or filter is weighed separately from caraway dust emitted to air.

- Selected flow: Captured caraway milling dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming caraway product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured sweet fennel milling dust (`captured_fennel_milling_dust`)

Sweet fennel dust discharged from the milling cyclone or filter is weighed separately from sweet fennel dust emitted to air.

- Selected flow: Captured sweet fennel milling dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming sweet fennel product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Captured juniper milling dust (`captured_juniper_milling_dust`)

Juniper dust discharged from the milling cyclone or filter is weighed separately from juniper dust emitted to air.

- Selected flow: Captured juniper berry milling dust
- Flow property / unit: Mass / kg
- Amount rule: Record measured collector discharge mass and final disposition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming juniper product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

###### Anise milling dust to air (`anise_milling_dust_to_air`)

Anise dust passing beyond the milling control device is quantified as a direct air emission.

- Selected flow: Anise fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use exhaust measurement or calculate from measured throughput and a documented facility factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming anise product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Star anise milling dust to air (`star_anise_milling_dust_to_air`)

Star anise dust passing beyond the milling control device is quantified as a direct air emission.

- Selected flow: Star anise fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use exhaust measurement or calculate from measured throughput and a documented facility factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming star anise product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Coriander milling dust to air (`coriander_milling_dust_to_air`)

Coriander dust passing beyond the milling control device is quantified as a direct air emission.

- Selected flow: Coriander fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use exhaust measurement or calculate from measured throughput and a documented facility factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming coriander product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Cumin milling dust to air (`cumin_milling_dust_to_air`)

Cumin dust passing beyond the milling control device is quantified as a direct air emission.

- Selected flow: Cumin fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use exhaust measurement or calculate from measured throughput and a documented facility factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming cumin product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Caraway milling dust to air (`caraway_milling_dust_to_air`)

Caraway dust passing beyond the milling control device is quantified as a direct air emission.

- Selected flow: Caraway fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use exhaust measurement or calculate from measured throughput and a documented facility factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming caraway product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Sweet fennel milling dust to air (`fennel_milling_dust_to_air`)

Sweet fennel dust passing beyond the milling control device is quantified as a direct air emission.

- Selected flow: Sweet fennel fruit dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use exhaust measurement or calculate from measured throughput and a documented facility factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming sweet fennel product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

###### Juniper milling dust to air (`juniper_milling_dust_to_air`)

Juniper dust passing beyond the milling control device is quantified as a direct air emission.

- Selected flow: Juniper berry dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use exhaust measurement or calculate from measured throughput and a documented facility factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming juniper product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_sieving`
- Sources: `eu-bat-fdm-2019-2031`

### Process: Packaging, controlled storage, and release (`packaging_storage_release`)

#### Inputs

##### Product flows

###### Packaging and storage electricity (`packaging_electricity_input`)

Metered grid electricity powers filling, sealing, labelling, palletizing, ventilation, and storage controls for the declared package.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the process submeter reading or calculate from measured equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031`

###### Kraft paper sack (`kraft_paper_sack_input`)

Kraft paper sacks entering the packaging line are weighed as one material component when used for the declared product.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass less documented unused returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxc-42-1995`, `eu-pef-2021-2279`

###### Polypropylene woven sack (`pp_woven_sack_input`)

Polypropylene woven sacks entering the packaging line are weighed as one material component when used for the declared product.

- Selected flow: Polypropylene woven sack
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass less documented unused returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Low-density polyethylene liner (`ldpe_liner_input`)

Low-density polyethylene liners entering the packaging line are weighed independently from outer sacks and closures.

- Selected flow: Low-density polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass less documented unused returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxc-42-1995`, `eu-pef-2021-2279`

###### High-density polyethylene jar (`hdpe_jar_input`)

High-density polyethylene jars entering the packaging line are weighed independently from labels, closures, and cartons.

- Selected flow: High-density polyethylene jar
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass less documented unused returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Glass jar (`glass_jar_input`)

Glass jars entering the packaging line are weighed independently from labels, closures, and cartons.

- Selected flow: Clear glass jar
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass less documented unused returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Tinplate can (`tinplate_can_input`)

Tinplate cans entering the packaging line are weighed independently from labels, closures, and cartons.

- Selected flow: Tinplate food can
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass less documented unused returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Corrugated fibreboard box (`corrugated_box_input`)

Corrugated fibreboard boxes entering the packaging line are weighed separately from primary containers and pallet wrap.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass less documented unused returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Paper label (`paper_label_input`)

Paper labels entering the packaging line are weighed independently from containers and cartons.

- Selected flow: Paper product label
- Flow property / unit: Mass / kg
- Amount rule: Record issued label mass less documented unused returns for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Wood pallet (`wood_pallet_input`)

Wood pallets newly consumed or lost during the reporting period are recorded separately from reusable pallet circulation.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Record new pallet mass attributable to released lots after documented reuse cycles.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene stretch film (`ldpe_stretch_film_input`)

Low-density polyethylene stretch film used to secure pallets is weighed independently from liners and sacks.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Record roll mass consumed for the released production lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Storage ammonia refrigerant makeup (`storage_r717_makeup_input`)

R717 ammonia added to refrigerated product storage is recorded from charging and maintenance records when that refrigerant is used.

- Selected flow: Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: Record charged makeup mass attributable to the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg refrigerated released product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Storage carbon dioxide refrigerant makeup (`storage_r744_makeup_input`)

R744 carbon dioxide added to refrigerated product storage is recorded from charging and maintenance records when that refrigerant is used.

- Selected flow: Carbon dioxide refrigerant R744
- Flow property / unit: Mass / kg
- Amount rule: Record charged makeup mass attributable to the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg refrigerated released product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Storage propane refrigerant makeup (`storage_r290_makeup_input`)

R290 propane added to refrigerated product storage is recorded from charging and maintenance records when that refrigerant is used.

- Selected flow: Propane refrigerant R290
- Flow property / unit: Mass / kg
- Amount rule: Record charged makeup mass attributable to the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg refrigerated released product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference processed spice output (`reference_product_output`)

The sole reference output is the net conforming processed product of the one declared species and final style released at the factory gate.

- Selected flow: Anise, badian, coriander, cumin, caraway, fennel and juniper berries, processed `1ae74dcb-8fbf-4b6d-a2d4-d2effa668cce`
- Flow property / unit: Mass / kg
- Amount rule: Set to exactly 1 kg net conforming product after excluding every packaging component and rejected product.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming product with all required qualifiers declared
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_release`
- Sources: `un-cpc-3-0`, `codex-cxs-327-2017`, `codex-cxs-358-2024`

##### Waste flows

###### Kraft paper sack scrap (`kraft_paper_sack_scrap`)

Damaged or trimmed kraft paper sack material from packaging is weighed independently from other paper and plastic waste.

- Selected flow: Kraft paper sack scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured scrap mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Polypropylene woven sack scrap (`pp_woven_sack_scrap`)

Damaged or trimmed polypropylene woven sack material from packaging is weighed independently from other plastic waste.

- Selected flow: Polypropylene woven sack scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured scrap mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene liner scrap (`ldpe_liner_scrap`)

Damaged or trimmed low-density polyethylene liner material from packaging is weighed independently from stretch-film waste.

- Selected flow: Low-density polyethylene liner scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured scrap mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### High-density polyethylene jar scrap (`hdpe_jar_scrap`)

Rejected high-density polyethylene jars from packaging are weighed independently from other plastic waste.

- Selected flow: High-density polyethylene jar scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected-container mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Glass jar scrap (`glass_jar_scrap`)

Broken or rejected glass jars from packaging are weighed independently from tinplate and plastic waste.

- Selected flow: Clear glass jar scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected-container mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Tinplate can scrap (`tinplate_can_scrap`)

Rejected tinplate cans from packaging are weighed independently from glass and plastic waste.

- Selected flow: Tinplate food can scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected-container mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Corrugated fibreboard box scrap (`corrugated_box_scrap`)

Damaged or trimmed corrugated fibreboard boxes from packaging are weighed independently from paper sack and label waste.

- Selected flow: Corrugated fibreboard box scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured scrap mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Paper label scrap (`paper_label_scrap`)

Rejected paper labels from packaging are weighed independently from corrugated box and paper sack waste.

- Selected flow: Paper product label scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured scrap mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Wood pallet waste (`wood_pallet_waste`)

Wood pallets that leave reuse circulation as damaged waste are weighed separately from corrugated fibreboard waste.

- Selected flow: Damaged wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Record measured pallet mass leaving circulation and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene stretch-film scrap (`ldpe_stretch_film_scrap`)

Discarded low-density polyethylene stretch film from palletizing is weighed independently from liner waste.

- Selected flow: Low-density polyethylene stretch film scrap
- Flow property / unit: Mass / kg
- Amount rule: Record measured scrap mass and documented recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Off-specification processed anise (`offspec_anise_product`)

Processed anise that fails the declared release specification and leaves the system without rework is weighed separately.

- Selected flow: Off-specification processed anise
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass, failed specification, and final recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released anise product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Off-specification processed star anise (`offspec_star_anise_product`)

Processed star anise that fails the declared release specification and leaves the system without rework is weighed separately.

- Selected flow: Off-specification processed star anise
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass, failed specification, and final recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released star anise product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-358-2024`, `eu-pef-2021-2279`

###### Off-specification processed coriander (`offspec_coriander_product`)

Processed coriander that fails the declared release specification and leaves the system without rework is weighed separately.

- Selected flow: Off-specification processed coriander
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass, failed specification, and final recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released coriander product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Off-specification processed cumin (`offspec_cumin_product`)

Processed cumin that fails the declared release specification and leaves the system without rework is weighed separately.

- Selected flow: Off-specification processed cumin
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass, failed specification, and final recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released cumin product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-327-2017`, `eu-pef-2021-2279`

###### Off-specification processed caraway (`offspec_caraway_product`)

Processed caraway that fails the declared release specification and leaves the system without rework is weighed separately.

- Selected flow: Off-specification processed caraway
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass, failed specification, and final recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released caraway product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Off-specification processed sweet fennel (`offspec_fennel_product`)

Processed sweet fennel that fails the declared release specification and leaves the system without rework is weighed separately.

- Selected flow: Off-specification processed sweet fennel
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass, failed specification, and final recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released sweet fennel product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxc-78-2017`, `eu-pef-2021-2279`

###### Off-specification processed juniper (`offspec_juniper_product`)

Processed juniper berry that fails the declared release specification and leaves the system without rework is weighed separately.

- Selected flow: Off-specification processed juniper berry
- Flow property / unit: Mass / kg
- Amount rule: Record measured rejected mass, failed specification, and final recovery or disposal route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released juniper product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `codex-cxs-358-2024`, `eu-pef-2021-2279`

##### Elementary flows

###### Storage ammonia refrigerant to air (`storage_r717_to_air`)

R717 ammonia lost from refrigerated product storage is reported as a direct air emission using the storage-system balance.

- Selected flow: Ammonia refrigerant R717 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate opening charge plus additions minus closing charge and recovered mass for the reporting period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg refrigerated released product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Storage carbon dioxide refrigerant to air (`storage_r744_to_air`)

R744 carbon dioxide lost from refrigerated product storage is reported as a direct air emission using the storage-system balance.

- Selected flow: Carbon dioxide refrigerant R744 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate opening charge plus additions minus closing charge and recovered mass for the reporting period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg refrigerated released product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

###### Storage propane refrigerant to air (`storage_r290_to_air`)

R290 propane lost from refrigerated product storage is reported as a direct air emission using the storage-system balance.

- Selected flow: Propane refrigerant R290 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate opening charge plus additions minus closing charge and recovered mass for the reporting period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg refrigerated released product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-pef-2021-2279`

### Process: Equipment and area cleaning and sanitation (`cleaning_sanitation`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water_input`)

Potable water used for liquid cleaning of equipment or areas is metered separately from product washing water; dry cleaning remains separately documented.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Record the sanitation-water meter reading for the declared campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

###### Sanitation electricity (`sanitation_electricity_input`)

Metered grid electricity powers vacuums, cleaning machines, dosing systems, and pumps used for sanitation.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the sanitation submeter reading or calculate from measured equipment power and operating time.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### Sanitation hot water (`sanitation_hot_water_input`)

Purchased hot water used for equipment or area cleaning is recorded separately from steam and dryer heat.

- Selected flow: Purchased hot water for food processing
- Flow property / unit: Energy / MJ
- Amount rule: Calculate delivered heat from measured flow and inlet and outlet temperatures.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-bat-fdm-2019-2031`

###### Sodium hydroxide cleaner (`sodium_hydroxide_cleaner_input`)

Sodium hydroxide used for alkaline equipment cleaning is weighed separately from every acid and disinfectant.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record active-ingredient mass from dosing logs and supplier concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### Nitric acid cleaner (`nitric_acid_cleaner_input`)

Nitric acid used for acid cleaning is weighed separately from sodium hydroxide, peracetic acid, and sodium hypochlorite.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record active-ingredient mass from dosing logs and supplier concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### Peracetic acid disinfectant (`peracetic_acid_disinfectant_input`)

Peracetic acid used for disinfection is weighed separately from cleaners and other disinfectants.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record active-ingredient mass from dosing logs and supplier concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

###### Sodium hypochlorite disinfectant (`sodium_hypochlorite_disinfectant_input`)

Sodium hypochlorite used for disinfection is weighed separately from cleaners and peracetic acid.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record active-ingredient mass from dosing logs and supplier concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `codex-cxc-42-1995`, `eu-bat-fdm-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Alkaline cleaning wastewater (`alkaline_cleaning_wastewater`)

Wastewater generated by the sodium-hydroxide cleaning step is metered or calculated separately when it remains a segregated stream.

- Selected flow: Sodium-hydroxide cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, measured pH, destination, and campaign association.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-bat-fdm-2019-2031`

###### Nitric-acid cleaning wastewater (`nitric_acid_cleaning_wastewater`)

Wastewater generated by the nitric-acid cleaning step is metered or calculated separately when it remains a segregated stream.

- Selected flow: Nitric-acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, measured pH, destination, and campaign association.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-bat-fdm-2019-2031`

###### Peracetic-acid disinfection wastewater (`peracetic_acid_wastewater`)

Wastewater generated by peracetic-acid disinfection is metered or calculated separately when it remains a segregated stream.

- Selected flow: Peracetic-acid disinfection wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, destination, and campaign association.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-bat-fdm-2019-2031`

###### Sodium-hypochlorite disinfection wastewater (`hypochlorite_wastewater`)

Wastewater generated by sodium-hypochlorite disinfection is metered or calculated separately when it remains a segregated stream.

- Selected flow: Sodium-hypochlorite disinfection wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record discharged volume, residual chlorine where measured, destination, and campaign association.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wwt_electricity_input`)

Metered grid electricity powers screening, pumping, aeration, clarification, dewatering, and controls at the on-site treatment plant.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the treatment-plant submeter reading and allocate only the share serving the listed process wastewater streams.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`, `eu-pef-2021-2279`

###### Ferric chloride coagulant (`wwt_ferric_chloride_input`)

Ferric chloride dosed in on-site wastewater treatment is recorded separately from pH-control chemicals and flocculant.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record active-ingredient mass from dosing logs and supplier concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Wastewater-treatment sodium hydroxide (`wwt_sodium_hydroxide_input`)

Sodium hydroxide dosed for wastewater pH control is recorded separately from sanitation sodium hydroxide.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record active-ingredient mass from treatment dosing logs and supplier concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Polyacrylamide flocculant (`wwt_polyacrylamide_input`)

Polyacrylamide flocculant dosed in on-site wastewater treatment is recorded separately from ferric chloride.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Record active-polymer mass from dosing logs and supplier concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

##### Waste flows

###### Anise washing wastewater to treatment (`wwt_anise_washing_wastewater_input`)

Anise washing wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Anise fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the anise washing process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Star anise washing wastewater to treatment (`wwt_star_anise_washing_wastewater_input`)

Star anise washing wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Star anise fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the star anise washing process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Coriander washing wastewater to treatment (`wwt_coriander_washing_wastewater_input`)

Coriander washing wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Coriander fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the coriander washing process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Cumin washing wastewater to treatment (`wwt_cumin_washing_wastewater_input`)

Cumin washing wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Cumin fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the cumin washing process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Caraway washing wastewater to treatment (`wwt_caraway_washing_wastewater_input`)

Caraway washing wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Caraway fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the caraway washing process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Sweet fennel washing wastewater to treatment (`wwt_fennel_washing_wastewater_input`)

Sweet fennel washing wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Sweet fennel fruit washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the sweet fennel washing process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Juniper washing wastewater to treatment (`wwt_juniper_washing_wastewater_input`)

Juniper washing wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Juniper berry washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the juniper washing process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Alkaline cleaning wastewater to treatment (`wwt_alkaline_wastewater_input`)

Sodium-hydroxide cleaning wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Sodium-hydroxide cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the sanitation process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Nitric-acid cleaning wastewater to treatment (`wwt_nitric_wastewater_input`)

Nitric-acid cleaning wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Nitric-acid cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the sanitation process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Peracetic-acid wastewater to treatment (`wwt_peracetic_wastewater_input`)

Peracetic-acid disinfection wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Peracetic-acid disinfection wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the sanitation process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Sodium-hypochlorite wastewater to treatment (`wwt_hypochlorite_wastewater_input`)

Sodium-hypochlorite disinfection wastewater enters on-site treatment as a distinct internal waste flow when that route is active.

- Selected flow: Sodium-hypochlorite disinfection wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record influent volume transferred from the sanitation process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated process wastewater (`treated_process_wastewater_output`)

Treated wastewater from the listed CPC 23924 washing and sanitation streams leaves the on-site plant as one measured effluent stream before environmental discharge.

- Selected flow: Treated CPC 23924 process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record final-effluent flow and destination; do not substitute pollutant loads for effluent volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Dewatered biological sludge (`wwt_biological_sludge_output`)

Dewatered biological sludge generated by the on-site wastewater plant is weighed separately from screen rejects.

- Selected flow: Dewatered biological wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass, measured dry-solids fraction, and final treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Wastewater-treatment screen rejects (`wwt_screen_rejects_output`)

Coarse solids removed by wastewater-treatment screens are weighed separately from biological sludge.

- Selected flow: Wastewater-treatment screen rejects from spice processing
- Flow property / unit: Mass / kg
- Amount rule: Record measured wet mass, sampling period, and final treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per m3 treated process wastewater
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

Chemical oxygen demand in final effluent is reported as a separate water-emission load.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply measured flow by contemporaneous COD concentration using a documented composite-sampling period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Biochemical oxygen demand to water (`bod5_to_water`)

Five-day biochemical oxygen demand in final effluent is reported as a separate water-emission load.

- Selected flow: Biochemical oxygen demand, five-day, to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply measured flow by contemporaneous BOD5 concentration using the documented test method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Total organic carbon to water (`toc_to_water`)

Total organic carbon in final effluent is reported as a separate water-emission load rather than combined with COD.

- Selected flow: Total organic carbon to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply measured flow by contemporaneous TOC concentration using the documented test method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Total nitrogen to water (`total_nitrogen_to_water`)

Total nitrogen in final effluent is reported as a separate water-emission load.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply measured flow by contemporaneous total-nitrogen concentration using the documented test method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Total phosphorus to water (`total_phosphorus_to_water`)

Total phosphorus in final effluent is reported as a separate water-emission load.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply measured flow by contemporaneous total-phosphorus concentration using the documented test method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Total suspended solids to water (`tss_to_water`)

Total suspended solids in final effluent are reported as a separate water-emission load.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply measured flow by contemporaneous TSS concentration using the documented test method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

###### Chloride to water (`chloride_to_water`)

Chloride in final effluent is reported as a separate water-emission load when relevant to actual cleaning and treatment chemistry.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: Multiply measured flow by contemporaneous chloride concentration using the documented test method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wwt`
- Sources: `eu-bat-fdm-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| `allocation_avoid_first` | Use species-, style-, batch-, and stage-specific meters and records to avoid allocation. Never allocate one species' material losses or direct emissions to another species. |
| `allocation_shared_utilities` | When a meter serves multiple products, allocate only with a contemporaneous causal driver such as measured operating time multiplied by equipment load, delivered heat, or treated volume; disclose the driver, period, and residual. Production-mass allocation is allowed only when no more causal record exists and shall be flagged. |
| `allocation_rework` | Material returned to the same process as documented rework is an internal loop and is not reported as waste or co-product; record rework mass to close the stage balance. |
| `allocation_residue_status` | Screenings, captured dust, off-specification product, packaging scrap, sludge, and screen rejects remain waste unless a documented recipient, specification, and economic transaction demonstrate a co-product function. Report each species or material separately. |
| `allocation_no_cross_style_average` | Whole, cut, broken, cracked, ground, powdered, and otherwise processed styles shall not share averaged yield, energy, loss, or packaging data unless the actual campaign produces an inseparable single declared style. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_identity` | `receipt_and_identity_control` | Botanical inputs, receipt electricity, incoming-package waste, rejected botanical material, stones, and metal | Weighbridge, scale, inspection, supplier, and meter records | species; scientific name; plant part; lot; incoming state; origin; gross and tare mass; moisture or water activity; accepted mass; reject reason; electricity; waste mass; destination | Reconcile supplier delivery, calibrated mass readings, identity checks, and inspection disposition by lot | kg; kWh | Each lot and monthly reconciliation | Study-period lots | Declared processing facility | Sum only the one declared species and incoming state; normalize after mass reconciliation | Calibration record; supplier specification; identity result; lot ledger; waste receipt |
| `cp_dry_cleaning` | `dry_cleaning_grading` | Electricity, compressed air, species-specific screenings, captured dust, and dust to air | Submeter, operating log, collector weighing, and emission measurement | equipment; runtime; power; air volume and pressure; inlet mass; screenings mass; collector mass; exhaust flow; dust concentration; species | Read stage meters and weigh every separated fraction by lot; match emission sample to the campaign | kWh; m3; kg | Each campaign with reporting-period reconciliation | Representative campaigns covering study period | Declared processing facility | No cross-species pooling; calculate emitted load from matched flow and concentration | Meter record; scale check; collector log; emission test |
| `cp_wet_washing` | `wet_washing_draining` | Washing water, electricity, and species-specific washing wastewater | Water meter, electricity meter, batch, and wastewater records | species; lot; inlet mass; water volume; electricity; wastewater volume; destination; sampling time | Difference-check supplied water, retained moisture, and wastewater; keep sanitation water separate | m3; kWh; kg | Each washing campaign | All applicable study-period campaigns | Declared processing facility | Sum only campaigns using the same species and washing route | Meter calibration; batch sheet; discharge record |
| `cp_drying_cooling` | `controlled_drying_cooling` | Electricity, steam, hot water, each fuel, refrigerant, combustion emission, and species-specific dust | Submeter, fuel, steam, temperature, refrigerant, batch, and emission records | dryer; species; inlet and outlet mass and moisture; runtime; electricity; steam mass and state; hot-water flow and temperatures; fuel quantity and heating value; refrigerant balance; stack flow and concentrations | Match utility and emission records to the declared dryer campaign; document indirect versus direct heating | kWh; MJ; kg; m3; L | Each campaign, with annual refrigerant reconciliation | Representative campaigns and full reporting period | Declared processing facility | Allocate shared dryer records by measured runtime and load; never average species without disaggregation | Meter calibration; fuel invoice; heating-value certificate; maintenance log; stack test; moisture test |
| `cp_microbial_reduction` | `microbial_reduction` | Electricity, product-contact steam, water, irradiation service, and condensate | Treatment batch, utility meter, service certificate, dose, and discharge record | technology; species; lot mass; electricity; steam mass and state; water; absorbed dose; provider; condensate volume; validation result | Reconcile treated lot mass with validated route and utility or service records | kg; kWh; m3; kGy where applicable | Each treated lot | All applicable study-period lots | Declared and contracted treatment facilities | Keep steam, gamma, electron-beam, and UV routes separate | Batch release; meter record; treatment certificate; validation record |
| `cp_milling_sieving` | `crushing_grinding_sieving` | Electricity, compressed air, each anticaking agent, species-specific oversize, captured dust, and emitted dust | Batch, formulation, submeter, sieve, collector, and emission records | species; style; mill; sieve apertures; particle distribution; runtime; electricity; compressed air; additive mass; feed and product mass; oversize; collector mass; exhaust data | Match material balance and energy to one species, one style, and one sieve specification | kg; kWh; m3; mm; µm | Each campaign | Representative campaigns covering study period | Declared processing facility | No pooling across species or styles; exclude internal rework from waste | Batch record; formulation; sieve test; calibration; collector log; emission test |
| `cp_packaging_release` | `packaging_storage_release` | Electricity, each packaging component, refrigerant, packaging scrap, off-specification product, and reference output | Packaging issue, production, warehouse, maintenance, and release records | species; style; particle specification; net product mass; package component and mass; rejected package mass; released units; electricity; refrigerant opening, additions, recovery, closing; storage time; release status | Reconcile issued components, returned stock, scrap, packaged gross mass, packaging tare, and net released mass | kg; kWh; day | Each packaging lot with monthly and annual reconciliation | All packaging lots in the full reporting period | Declared processing facility | Normalize only to net released product; exclude packaging and off-specification mass | Scale calibration; packaging BOM; stock ledger; release certificate; refrigerant log |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | Water, electricity, hot water, each cleaning or disinfection chemical, and each wastewater stream | Sanitation schedule, meter, dosing, supplier, and discharge records | area or equipment; dry-cleaning action; water; electricity; hot-water flow and temperatures; chemical identity, concentration and dose; wastewater volume, pH and destination | Record each chemical active ingredient separately and associate liquid discharge with the cleaning step | m3; kWh; MJ; kg | Each sanitation event with campaign allocation | All applicable sanitation events in the full reporting period | Entire foreground facility areas serving declared product | Allocate shared sanitation by cleaned equipment time or area and campaign use; disclose driver | Meter record; dosing log; safety data sheet; sanitation verification; discharge record |
| `cp_onsite_wwt` | `onsite_wastewater_treatment` | Each influent wastewater, electricity, each treatment chemical, effluent, sludge, screen rejects, and each pollutant | Flow meter, dosing, laboratory, sludge, and waste records | source stream; influent and effluent flow; electricity; chemical identity and dose; pH; COD; BOD5; TOC; total nitrogen; total phosphorus; TSS; chloride; sludge wet mass and dry solids; destination | Use time-matched flow-proportional composite sampling where available and retain laboratory method | m3; kWh; kg; mg/L | Flow continuously or per batch; pollutants at permitted or representative frequency | Full reporting period | On-site treatment serving declared facility | Calculate each pollutant load from matched flow and concentration; allocate shared treatment by measured source load or volume | Flow calibration; laboratory report; dosing log; sludge ticket; discharge permit record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground exchange | normalized amount = reporting-period exchange amount / net conforming product mass of the same species and style | Reconciled exchange record; net released mass excluding packaging | Amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_stage_electricity` | Stage electricity without a dedicated submeter | stage electricity = measured equipment power × operating time × documented load factor; reconcile to the facility meter | Power measurement; runtime; load factor; facility meter | Stage-specific kWh | `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031` |
| `calc_hot_water_heat` | Purchased hot water | delivered heat = measured mass flow × documented heat capacity × (inlet temperature - outlet temperature) | Flow; temperatures; heat capacity | MJ delivered heat | `eu-bat-fdm-2019-2031` |
| `calc_steam_heat` | Purchased steam | delivered heat = steam mass × (supply specific enthalpy - returned condensate specific enthalpy) | Steam mass; pressure; temperature; condensate return state | MJ delivered heat | `eu-bat-fdm-2019-2031` |
| `calc_refrigerant_balance` | Each R717, R744, or R290 system | loss = opening charge + additions - closing charge - recovered mass; negative or unexplained balances require correction | Opening and closing inventory; additions; recovery | kg of the same refrigerant to air | `eu-pef-2021-2279` |
| `calc_combustion_emission` | Each dryer-combustion air emission | emission = measured fuel quantity × fuel-specific documented factor, or directly measured stack load; retain separate fuel activity records | Fuel use; heating value where applicable; factor or stack measurement | kg of one named air substance | `eu-pef-2021-2279`, `eu-bat-fdm-2019-2031` |
| `calc_water_pollutant_load` | Each final-effluent pollutant | load = time-matched effluent volume × measured concentration with unit conversion | Effluent flow; one pollutant concentration | kg of one named pollutant to water | `eu-bat-fdm-2019-2031` |
| `calc_mass_balance` | Each species-specific campaign | incoming botanical mass + measured additives = net released product + each measured botanical loss + measured retained or removed water + closing work in progress; investigate residual | Lot masses; moisture; additives; screenings; dust; rejects; product; work in progress | Species- and style-specific balance and residual | `codex-cxc-78-2017`, `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_identity` | Botanical input and reference output | Scientific species, marketed plant part, supplier lot, and final style shall be verified and traceable; mixed-species records are invalid. | Supplier specification, identity test, lot ledger, release record |
| `dq_route_representativeness` | All processes | Records shall represent the actual equipment, incoming state, drying route, microbial treatment, style, particle-size specification, packaging, site, and reporting period. | Process flow sheet, batch sheets, equipment logs, package BOM |
| `dq_meter_traceability` | Mass, water, energy, fuel, refrigerant, and emissions | Retain calibration status, meter boundary, reading period, unit conversion, missing-data treatment, and reconciliation. | Calibration certificate, meter export, invoice, calculation workbook |
| `dq_no_default_quantity` | All inventory cards | No source value in this PCR is a default amount. Each applicable amount shall come from foreground collection or a transparent calculation from collected records. | Record-to-card trace and calculation record |
| `dq_conditional_closure` | Conditional processes and cards | Each conditional process and atomic exchange shall be marked applicable or not applicable with route evidence; silence is not evidence of zero. | Route declaration, equipment list, formulation, treatment and sanitation records |
| `dq_source_transparency` | Proxies, factors, allocation, and background links | Disclose source, version, geography, technology, time, transformation, and reason for every proxy or factor. | Data-source register, calculation notes, DQR assessment |
| `dq_mass_and_release` | Botanical material and product | Reconcile as-received and dry-basis mass, internal rework, each species-specific loss, packaging tare, and net conforming release. | Mass-balance worksheet, moisture results, release and scrap records |

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| `validate_reference_identity` | The reference flow UUID, Mass property UUID, Units-of-mass UUID, 1 kg amount, CPC 23924 identity, and required qualifiers shall all be present and consistent. |
| `validate_one_species_style` | Exactly one of the seven named species and one final style shall be active; reject a dataset that averages species or whole/cut/broken/cracked/ground/powdered styles. |
| `validate_atomic_exchange` | Every inventory card shall contain one concrete material, carrier, fuel, refrigerant, packaging component, waste stream, pollutant, or emission; reject category labels and selection instructions. |
| `validate_route_closure` | Washing, controlled drying, microbial reduction, milling, refrigerated storage, liquid sanitation, and on-site wastewater treatment shall each have an applicability decision supported by records. |
| `validate_uuid_gate` | The reference product UUID is the only populated Selected-flow UUID in this candidate; every other UUID shall remain blank until hybrid search and public state-100 direct read both confirm exact semantics. |
| `validate_quantity_provenance` | Every applicable quantity shall be `foreground_record` or `calculated_value` from collected records, except the fixed 1 kg reference output; reject uncited defaults, ranges, and undocumented estimates. |
| `validate_mass_balance` | Species-specific input, moisture change, additives, product, rework, screenings, captured dust, rejected material, and work in progress shall close within the facility's documented measurement uncertainty; explain and correct material residuals. |
| `validate_energy_separation` | Electricity, purchased steam, purchased hot water, natural gas, diesel, LPG, and kerosene shall remain separate stage records; reject a combined energy or fuel total. |
| `validate_refrigerant_balance` | For every active R717, R744, or R290 system, makeup and direct air loss shall reconcile to opening, closing, and recovered charge records without mixing refrigerants. |
| `validate_wastewater_loads` | Each reported COD, BOD5, TOC, total nitrogen, total phosphorus, TSS, and chloride load shall use time-matched flow and concentration records and shall remain a separate emission. |
| `validate_packaging_exclusion` | Packaging inputs and scrap shall be complete by material, but no packaging mass may be included in the 1 kg net reference product. |
| `validate_bilingual_alignment` | English and Chinese process IDs, row IDs, ordered machine tokens, selected-flow identities, UUIDs, protocols, rule IDs, and source IDs shall match exactly. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Species-, style-, route-, site-, and period-specific foreground data package for manufacture of one CPC 23924 product |
| downstream_use | Construction of factory-gate process datasets and lifecycle models with linked upstream botanical, utility, material, service, treatment, and packaging datasets |
| allowed_use | Modelling the declared species, incoming state, manufacturing route, final style, particle-size specification, package, geography, and period |
| excluded_use | Cross-species averages; unspecified processed spice; unprocessed CPC 01654 product; multi-species blend; essential oil, oleoresin, or extract; route or package not represented by the records |
| required_metadata | Scientific species; plant part; incoming state and moisture basis; source origin; all process applicability decisions; drying and microbial-reduction route; final style and particle specification; package BOM; net release mass; site; period; storage duration; allocation; background links |
| required_quality_disclosure | Meter and scale coverage; calibration; batch representativeness; moisture method; mass-balance residual; shared-resource allocation; emission calculation; wastewater sampling; refrigerant balance; proxies; data gaps; verification status |
| update_trigger | Change in species, supplier state, drying or treatment technology, final style, particle specification, formulation, package, energy or refrigerant system, wastewater route, site, or reporting period; or material change in measured yield, loss, utility, or emission profile |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations Statistics Division, CPC Version 3.0 retained raw structure CSV, CPC 23924 and CPC 01654, retrieved 2026-06-23; source URL: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retained SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | Exact processed-product classification and exclusion of unprocessed products |
| `codex-cxc-42-1995` | standard | Codex Alimentarius, Code of Hygienic Practice for Spices and Dried Aromatic Herbs, CXC 42-1995, revised through 2014, https://www.fao.org/input/download/standards/27/CXP_042e_2014.pdf | Cleaning, sorting, drying, grinding or cracking, microbial-reduction, packaging, sanitation, dry-cleaning preference, and contamination-control process structure |
| `codex-cxc-78-2017` | standard | Codex Alimentarius, Code of Practice for the Prevention and Reduction of Mycotoxins in Spices, CXC 78-2017, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B78-2017%252FCXC_078e.pdf | Incoming-state disclosure, sorting, conditional washing, natural or controlled drying, hot-air fuel separation, irradiation, storage, lot controls, and species-specific loss structure |
| `codex-cxs-327-2017` | standard | Codex Alimentarius, Standard for Cumin, CXS 327-2017, amended 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ua/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B327-2017%252FCXS_327e.pdf | Cumin species identity, cleaning/drying/grinding/sifting route, whole/cracked/ground styles, quality controls, and conditional anticaking-agent rule |
| `codex-cxs-358-2024` | standard | Codex Alimentarius, Standard for Spices Derived from Dried or Dehydrated Fruits and Berries: Allspice, Juniper Berry and Star Anise, CXS 358-2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B358-2024%252FCXS_358e.pdf | Exact juniper and star-anise identities, whole/cut/broken/ground/powdered styles, sizing declaration, packaging and labelling, and conditional powdered-product anticaking agents |
| `fao-herb-spice-processing` | extension_guidance | FAO, Quality Assurance for Small-scale Rural Food Industries, Chapter 2.2 Herb and Spice Products, https://www.fao.org/4/V5380E/V5380E09.htm | Washing, grading and cleaning, drying, grinding, packaging, wet/dry-area separation, and foreground process-map corroboration |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document in the Food, Drink and Milk Industries, JRC118627, 2019, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | Sector boundary, process/resource inventory, water and energy management, cleaning, wastewater, waste gas, residues, and monitoring structure; no BAT quantity is adopted as a PCR default |
| `eu-bat-fdm-2019-2031` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Separate inventories of water, energy, raw materials, wastewater and waste gas; stage flow sheets; cleaning; COD/TOC/nitrogen/phosphorus/chloride; dust, CO, NOx and SOx; packaging exclusion from product mass; no BAT-AEL is used as a default amount |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific BOM, company-specific manufacturing data, complete LCI of energy/water/material/product/co-product/waste and air/water/soil emissions, allocation, data quality, transparency, and verification |
