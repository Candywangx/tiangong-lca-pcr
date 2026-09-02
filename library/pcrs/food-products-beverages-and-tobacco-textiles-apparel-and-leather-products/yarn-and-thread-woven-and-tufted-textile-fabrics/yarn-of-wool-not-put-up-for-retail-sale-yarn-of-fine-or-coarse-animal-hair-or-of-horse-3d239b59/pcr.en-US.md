---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-not-put-up-for-retail-sale-yarn-of-fine-or-coarse-animal-hair-or-of-horse-3d239b59
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Yarn of Wool, Fine or Coarse Animal Hair, or Horse Hair

## 1. Scope and Applicability

This PCR governs foreground data packages for yarn whose defining fibre is wool, fine animal hair, coarse animal hair, or horse hair and whose product identity falls within CPC 3.0 subclass 26340. It covers woollen or worsted preparation, spinning, twisting or gimping, winding, and the conditioning needed to place the declared yarn at the mill gate. Raw-wool scouring and yarn wet finishing are included only when performed within the reporting facility or otherwise controlled as foreground operations.

The PCR does not cover sewing thread; retail-packaged hand-knitting yarn classified outside CPC 26340; yarn defined by cotton, silk, vegetable fibre, or man-made fibre classifications; woven, knitted, tufted, or nonwoven fabric; garment manufacture; animal husbandry; fibre production; off-site transport; use; or end of life. Blended yarn is covered only when CPC 26340 remains the justified product classification and every constituent fibre is disclosed separately. For non-wool yarn, the data package must use one species-specific prepared-fibre flow for each actual fibre input; it must not reuse a wool flow or a collective animal-hair label.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-not-put-up-for-retail-sale-yarn-of-fine-or-coarse-animal-hair-or-of-horse-3d239b59 |
| classification_refs | CPC 3.0: 26340 |
| covered_products | wool yarn not put up for retail sale; yarn of one declared fine animal-hair species; yarn of one declared coarse animal-hair species; horsehair yarn, including gimped horsehair yarn; qualifying blends classified to CPC 26340 |
| excluded_products | sewing thread; yarn classified by another defining fibre category; fabric and nonwoven products; garments; unspecified mixed-fibre yarn without a defensible CPC 26340 classification |
| representative_product | finished wool yarn on a declared winding support, at the yarn mill gate |
| production_route | received prepared fibre or wool top; optional foreground raw-wool scouring; carding or combing as applicable; drawing and blending; spinning; twisting or gimping when applicable; winding; optional foreground yarn wet finishing |
| market_state | saleable mill-gate yarn with declared fibre species and composition, woollen or worsted system, yarn count, twist, moisture or conditioning basis, colour or undyed state, and winding form |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | saleable yarn of wool, one declared fine or coarse animal-hair species, or horse hair |
| How much | 1 kg net dry-conditioned yarn at the declared mill gate |
| How well | conforms to the declared fibre composition, spinning system, yarn count, twist or gimp construction, moisture or conditioning basis, colour state, and winding form |
| How long or cycle | one completed production batch through the declared yarn-manufacturing gate |
| reference_flow_link | Reference amount and Tiangong product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Yarn of wool, not put up for retail sale, yarn of fine or coarse animal hair or of horse hair (including gimped horsehair yarn), whether or not put up for retail sale `e4318719-55db-447b-8b6d-08a745a3dfb5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre species; mass fraction of every constituent fibre; woollen, worsted, or horsehair route; yarn count system and value; twist direction and level or gimp construction; dry-mass and moisture or conditioning basis; dyed or undyed state; winding support and net-versus-gross mass basis; production geography; reporting period; foreground gate |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The reference mass excludes the winding support and any outer packaging.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_yarn_mass` | reference yarn | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net yarn mass on the declared dry-mass and moisture or conditioning basis; subtract winding supports and outer packaging. |
| `constituent_fibre_mass` | each fibre input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record every fibre species as a separate product input and reconcile the declared composition with batch input records. |
| `utility_measurement` | electricity, steam, and process water | flow-specific energy or mass property | kWh, kg, or another declared convertible unit | Preserve the metered unit and conversion factor, meter boundary, supply scenario, and allocation from shared meters before normalization. |

## 5. System Boundary

The foreground boundary starts at receipt of the declared prepared fibre or wool top. It starts at receipt of greasy shorn wool only when raw-wool scouring is performed within the foreground system. It ends with net saleable yarn on its declared winding support at the mill gate. The boundary includes material losses, recovered fibre, process water, utilities, auxiliaries, winding supports, direct wastes, wastewaters, and measured direct elementary flows of every included foreground process.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | received prepared fibre or wool top; greasy shorn wool only for an included foreground scouring route |
| starting_condition_role | disclosed product input to the first foreground process |
| product_classification_scope | CPC 3.0 subclass 26340 at the output gate; upstream fibre inputs retain their own product identities |
| recursive_input_rule | an unfinished yarn input that is already within CPC 26340 remains an explicit product input with its own upstream dataset and stage qualifier; it is not silently merged with the reference output |
| upstream_dataset_requirement | every purchased fibre, electricity supply, steam or heat supply, chemical, winding support, and other product input requires an upstream dataset or an explicit unresolved identity disclosure |
| disclosure | declare fibre origin and species, recycled content when present, preparation state, included process route, shared-utility allocation, recovery destinations, waste treatment destinations, and excluded operations |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_route` | foreground yarn production | Include carding or combing as applicable, drawing and blending, spinning, twisting or gimping when applicable, winding, conditioning, and all direct exchanges controlled by the reporting facility. | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`; `wiedemann-recycled-wool-lca-2022` |
| `boundary_conditional_scouring` | raw-wool scouring | Include scouring only when greasy wool is received and scoured within the declared foreground gate; otherwise require an upstream dataset for the received prepared fibre. | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `boundary_conditional_wet_finishing` | yarn wet finishing | Include yarn washing, dyeing, or finishing only when it is required to produce the declared saleable yarn and is controlled within the foreground gate. | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `boundary_no_hidden_extensions` | all included processes | Add each actual chemical, colourant, salt, fuel, packaging component, waste, wastewater, and direct emission as its own atomic exchange; do not represent an unlisted group or selector as one flow. | `eu-pef-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_wool_scouring` | Raw-wool scouring | conditional | include when greasy shorn wool is scoured within the foreground system | foreground fibre preparation | kg scoured wool output |
| `fibre_preparation_spinning_winding` | Fibre preparation, spinning, and winding | required | always included for the reference yarn | foreground yarn manufacture | kg net saleable yarn output |
| `yarn_wet_finishing` | Yarn wet finishing | conditional | include when washing, dyeing, or finishing is required for the declared saleable yarn and is controlled within the foreground system | foreground wet processing | kg net finished yarn output |

### Process: Raw-wool scouring (`raw_wool_scouring`)

#### Inputs

##### Product flows

###### Greasy shorn wool (`greasy_shorn_wool`)

Greasy shorn wool is recorded only when the reporting facility performs raw-wool scouring.

- Selected flow: Shorn wool, greasy, including fleece-washed shorn wool `bc0047e4-c6e8-4758-b86e-887af8a1f176`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net greasy-wool mass entering the scouring batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg scoured wool output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scouring_batch_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Scouring process water (`scouring_process_water`)

Water supplied to the scouring bowls and rinsing steps is recorded as one product input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or tank-balance water supplied to the scouring batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg scoured wool output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scouring_batch_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Non-ionic scouring detergent (`scouring_detergent`)

The actual non-ionic wool-scouring detergent formulation is recorded separately from every other scouring chemical.

- Selected flow: Non-ionic wool-scouring detergent formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued mass from batch formulation and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg scoured wool output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scouring_batch_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Scouring electricity (`scouring_grid_electricity`)

Grid electricity crossing the scouring process boundary is recorded for the declared medium-voltage supply scenario.

- Selected flow: Electricity, medium voltage, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg scoured wool output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scouring_batch_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Purchased scouring steam (`scouring_purchased_steam`)

Purchased steam is recorded only when this natural-gas-fired industrial supply scenario crosses the scouring boundary.

- Selected flow: Steam, purchased from a natural-gas-fired industrial boiler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered steam mass or supplier invoice allocated to the scouring batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg scoured wool output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scouring_batch_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

Record each measured direct resource extraction or emission as a separate elementary-flow row in the foreground data package.

#### Outputs

##### Product flows

###### Scoured wool (`scoured_wool_output`)

Scoured wool is the cleaned fibre output transferred to carding, combing, or an upstream/downstream dataset boundary.

- Selected flow: Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net scoured-wool mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg scoured wool output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scouring_batch_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Recovered wool grease (`recovered_wool_grease`)

Recovered wool grease is recorded as one co-product only when it is physically recovered and leaves for beneficial use.

- Selected flow: Wool grease (lanolin)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured recovered mass accepted as saleable or usable wool grease
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg scoured wool output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scouring_batch_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

###### Untreated wool-scouring wastewater (`scouring_wastewater`)

Untreated wastewater leaving scouring for treatment is recorded separately from sludge, recovered grease, or recycled internal water.

- Selected flow: Untreated wool-scouring wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered discharge mass or volume converted with a documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg scoured wool output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scouring_batch_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Elementary flows

Record each measured direct emission not carried in the wastewater as a separate elementary-flow row.

### Process: Fibre preparation, spinning, and winding (`fibre_preparation_spinning_winding`)

#### Inputs

##### Product flows

###### Scoured wool for the woollen route (`scoured_wool_input`)

Scoured wool is recorded when it is the specific prepared-fibre input to the declared woollen route.

- Selected flow: Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass issued to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `wiedemann-recycled-wool-lca-2022`

###### Wool top for the worsted route (`wool_top_input`)

Wool top is recorded instead of scoured loose wool when it is the specific prepared-fibre input to the declared worsted route.

- Selected flow: Wool Top `a19fde0b-23f4-4ab7-9832-317affa7ab44`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net wool-top mass issued to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Spinning electricity (`spinning_grid_electricity`)

Grid electricity crossing the fibre-preparation, spinning, and winding boundary is recorded for the declared medium-voltage supply scenario.

- Selected flow: Electricity, medium voltage, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `eu-textiles-bat-2022-2508`; `wiedemann-recycled-wool-lca-2022`

###### Purchased humidification steam (`spinning_purchased_steam`)

Purchased steam is recorded only when this natural-gas-fired industrial supply scenario is used for humidification or conditioning and crosses the process boundary.

- Selected flow: Steam, purchased from a natural-gas-fired industrial boiler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered steam mass or supplier invoice allocated to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `wiedemann-recycled-wool-lca-2022`

###### Spinning process water (`spinning_process_water`)

Water directly supplied for fibre conditioning or humidification is recorded when it crosses the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or tank-balance water supplied to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `wiedemann-recycled-wool-lca-2022`

###### Synthetic ester spinning lubricant (`spinning_lubricant`)

The actual synthetic ester textile spinning lubricant is recorded as one formulated product; mineral oil must not be substituted into this row.

- Selected flow: Synthetic ester textile spinning lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued mass from batch formulation and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `eu-textiles-bat-2022-2508`; `wiedemann-recycled-wool-lca-2022`

###### Cardboard winding core (`cardboard_winding_core`)

The cardboard tube or paper core that leaves with the yarn is recorded separately from the net yarn mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured issued mass of winding cores retained with saleable yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `wiedemann-recycled-wool-lca-2022`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

Record each measured direct resource extraction or emission as a separate elementary-flow row in the foreground data package.

#### Outputs

##### Product flows

###### Saleable wool or animal-hair yarn (`saleable_yarn_output`)

The output is the net yarn mass that satisfies the reference-flow qualifiers at the declared mill gate.

- Selected flow: Yarn of wool, not put up for retail sale, yarn of fine or coarse animal hair or of horse hair (including gimped horsehair yarn), whether or not put up for retail sale `e4318719-55db-447b-8b6d-08a745a3dfb5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net yarn mass after excluding winding cores and outer packaging, normalized to 1 kg reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `unsd-cpc-3-0-26340`

##### Waste flows

###### Wool spinning waste (`wool_spinning_waste`)

Wool spinning waste is recorded once as the mass leaving carding, drawing, spinning, or winding; its recovery or disposal destination is declared separately.

- Selected flow: wool spinning waste `db23708c-5c2f-4b7e-9098-910948275caa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed waste mass by batch and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spinning_batch_records`
- Sources: `wiedemann-recycled-wool-lca-2022`

##### Elementary flows

Record each measured direct emission as a separate elementary-flow row.

### Process: Yarn wet finishing (`yarn_wet_finishing`)

#### Inputs

##### Product flows

###### Unfinished wool yarn (`unfinished_yarn_input`)

Unfinished yarn is recorded as a same-category product input when wet finishing is a separate controlled foreground stage.

- Selected flow: Yarn of wool, not put up for retail sale, yarn of fine or coarse animal hair or of horse hair (including gimped horsehair yarn), whether or not put up for retail sale `e4318719-55db-447b-8b6d-08a745a3dfb5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net unfinished-yarn mass entering the wet-finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_batch_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Wet-finishing process water (`wet_finishing_process_water`)

Water supplied to washing, dyeing, rinsing, or finishing baths is recorded as one product input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or tank-balance water supplied to the wet-finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_batch_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Wet-finishing electricity (`wet_finishing_grid_electricity`)

Grid electricity crossing the wet-finishing boundary is recorded for the declared medium-voltage supply scenario.

- Selected flow: Electricity, medium voltage, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_batch_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Purchased wet-finishing steam (`wet_finishing_purchased_steam`)

Purchased steam is recorded only when this natural-gas-fired industrial supply scenario crosses the wet-finishing boundary.

- Selected flow: Steam, purchased from a natural-gas-fired industrial boiler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered steam mass or supplier invoice allocated to the wet-finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_batch_records`
- Sources: `eu-jrc-textiles-bref-2023`

###### Acetic acid (`wet_finishing_acetic_acid`)

Acetic acid is recorded only when the actual wet-finishing recipe uses this chemical; it is not a proxy for any other acid or auxiliary.

- Selected flow: Acetic acid `e2450fd4-acdc-4ab3-b8e3-269f8882a44e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued mass from batch recipe and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_batch_records`
- Sources: `wiedemann-recycled-wool-lca-2022`

Every actual dye, salt, surfactant, reducing or oxidizing agent, softener, and other chemical used by the declared recipe must be added to the foreground data package as its own named atomic product-flow row.

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

Record each measured direct resource extraction or emission as a separate elementary-flow row.

#### Outputs

##### Product flows

###### Finished saleable yarn (`finished_yarn_output`)

The output is the net wet-finished yarn mass satisfying the reference-flow qualifiers.

- Selected flow: Yarn of wool, not put up for retail sale, yarn of fine or coarse animal hair or of horse hair (including gimped horsehair yarn), whether or not put up for retail sale `e4318719-55db-447b-8b6d-08a745a3dfb5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net finished-yarn mass normalized to 1 kg reference output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wet_finishing_batch_records`
- Sources: `unsd-cpc-3-0-26340`

##### Waste flows

###### Untreated wool-yarn dyeing wastewater (`wet_finishing_wastewater`)

Untreated wastewater leaving the wet-finishing process for treatment is recorded separately from recovered bath liquor or sludge.

- Selected flow: Untreated wool-yarn dyeing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered discharge mass or volume converted with a documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_finishing_batch_records`
- Sources: `eu-jrc-textiles-bref-2023`

##### Elementary flows

Record each measured direct emission not carried in wastewater as a separate elementary-flow row.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | all multifunctional foreground operations | Subdivide by production line, batch, or process step and use directly measured relationships before applying allocation. | `eu-pef-recommendation-2021-2279` |
| `allocation_shared_utilities` | shared electricity, steam, water, and auxiliaries | Allocate shared records using a documented causal driver such as metered consumption, machine operating time, or batch mass; disclose the driver and retain the unallocated source record. | `eu-pef-recommendation-2021-2279` |
| `allocation_recovered_wool_grease` | scoured wool and recovered wool grease | Keep recovered wool grease as an explicit output. If subdivision and causal assignment cannot resolve shared burdens, apply and disclose a justified physical or economic allocation basis and report a sensitivity case; do not hide the output through a net credit. | `eu-pef-recommendation-2021-2279`; `eu-textiles-bat-2022-2508` |
| `allocation_spinning_waste` | recovered or disposed wool spinning waste | Record the full waste mass and destination. Any recycling or avoided-product credit belongs to the declared downstream modelling method and must not be embedded in the foreground exchange amount. | `eu-pef-recommendation-2021-2279`; `wiedemann-recycled-wool-lca-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_scouring_batch_records` | `raw_wool_scouring` | all scouring inputs and outputs | batch record, meter record, stock issue, invoice, weighbridge record, discharge record | batch_id; start/end time; input and output flow identity; gross, tare, and net mass; moisture basis; water meter; electricity meter; steam meter or invoice; detergent issue; grease recovery; wastewater quantity; waste destination | reconcile signed production, utility, stock, and discharge records to one batch identifier | kg, kWh, or declared source unit | each scouring batch and each relevant meter period | dates spanning the declared reporting period | every included scouring line and shared utility boundary | sum verified records, allocate shared meters with the documented causal driver, then normalize to measured scoured-wool output | calibration status; invoice or stock reconciliation; batch sign-off; missing-record log |
| `cp_spinning_batch_records` | `fibre_preparation_spinning_winding` | all fibre-preparation, spinning, winding, product, and waste exchanges | batch record, stock issue, meter record, core issue, product weighment, waste weighment | batch_id; fibre species and composition; spinning system; yarn count; twist; input mass and moisture; electricity; steam; process water; lubricant issue; core mass; net yarn mass; waste mass and destination | link production orders, meters, stock records, product weighments, and waste records to the same yarn batch | kg, kWh, or declared source unit | each production batch and each relevant meter period | dates spanning the declared reporting period | every included carding, combing, drawing, spinning, twisting, gimping, and winding line | sum verified records, subtract tare and core mass from reference yarn, allocate shared utilities with the documented driver, then normalize to net yarn output | scale and meter calibration; composition certificate; production-order closure; stock and waste reconciliation |
| `cp_wet_finishing_batch_records` | `yarn_wet_finishing` | all yarn wet-finishing inputs and outputs | recipe, batch record, stock issue, meter record, product weighment, discharge record | batch_id; unfinished-yarn mass; recipe chemical identities and issued masses; water; electricity; steam; finished-yarn mass; colour state; wastewater quantity; treatment destination | reconcile recipe, stock, meter, product, and discharge records to one wet-finishing batch | kg, kWh, or declared source unit | each wet-finishing batch and each relevant meter period | dates spanning the declared reporting period | every included yarn washing, dyeing, rinsing, and finishing line | sum verified records, allocate shared utilities with the documented driver, then normalize to net finished-yarn output | recipe approval; scale and meter calibration; stock reconciliation; colour and product release record; discharge record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass_exchange` | each mass-based exchange | measured exchange mass / measured net reference-stage output mass × 1 kg reference output | exchange mass; net process or reference output mass | kg exchange per kg output |  |
| `normalize_energy_exchange` | each energy-based exchange | metered or causally allocated energy / measured net reference-stage output mass × 1 kg reference output | metered energy; shared-meter allocation driver when applicable; net output mass | declared energy unit per kg output | `eu-textiles-bat-2022-2508` |
| `convert_volume_to_mass` | process water or wastewater recorded by volume | measured volume × documented batch temperature density; retain the original volume record and density source | measured volume; density; temperature when material | kg water or wastewater |  |
| `net_reference_yarn_mass` | yarn on winding supports | gross wound package mass − measured winding-support mass − other non-yarn tare | gross package mass; winding-support mass; tare mass | kg net reference yarn |  |
| `foreground_mass_reconciliation` | each included process | reconcile all measured product inputs and outputs, separately measured wastes, stock changes, and moisture changes; investigate and disclose every unexplained imbalance rather than forcing closure | verified batch masses; stock change; measured moisture basis | signed mass-reconciliation record | `eu-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference yarn | CPC 26340 scope, exact Tiangong reference-flow UUID, fibre species and composition, yarn system, count, twist or gimp construction, moisture basis, colour state, winding form, geography, period, and gate are all declared. | product specification; composition certificate; production order; dataset metadata |
| `dq_flow_identity` | every inventory exchange | Each exchange names one physical or chemical flow. UUID-bearing rows must match the verified Tiangong type and property; unresolved rows remain explicit and may not borrow a broader or semantically different UUID. | flow identity review; Tiangong lookup; unresolved-identity disclosure |
| `dq_temporal_representativeness` | all foreground records | The reporting period must represent the declared technology and product mix; start and end dates, downtime, abnormal batches, and substitutions are disclosed. | dated batch, meter, invoice, and maintenance records |
| `dq_completeness` | all included processes | Include all category-defining fibre inputs, utilities, auxiliaries, winding supports, product outputs, wastes, wastewaters, and measured direct elementary flows within the declared cutoff; disclose the cutoff and every excluded flow. | process-flow reconciliation; stock reconciliation; completeness checklist; exclusion log |
| `dq_consistency` | normalization and shared records | Use the same dry-mass basis, reference gate, conversion factors, and shared-record allocation drivers across the reporting period. | calculation workbook; meter map; conversion record; internal review |
| `dq_uncertainty_disclosure` | missing or allocated records | Mark substituted, estimated, or allocated records; state method, reason, affected share, and sensitivity. No AI-generated quantity range is a foreground record. | gap log; allocation record; sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The reference product UUID is `e4318719-55db-447b-8b6d-08a745a3dfb5`, its type is Product flow, its CPC leaf is 26340, its reference property is Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, and the normalized amount is 1 kg net yarn. | `unsd-cpc-3-0-26340` |
| `validate_required_qualifiers` | reference yarn | Reject a data package that omits fibre species, composition, spinning route, yarn count, twist or gimp construction, moisture basis, colour state, winding form, geography, reporting period, or foreground gate. | `unsd-cpc-3-0-26340` |
| `validate_atomic_inventory` | process inventory | Reject any inventory card that combines multiple fibres, chemicals, electricity scenarios, steam or heat supplies, fuels, packaging components, wastes, wastewaters, or elementary flows, or that uses a selector or placeholder as the selected flow. | `eu-pef-recommendation-2021-2279` |
| `validate_non_wool_route` | fine animal-hair, coarse animal-hair, or horsehair yarn | Require one species-specific prepared-fibre input per actual fibre; reject use of Scoured Wool, Wool Top, or a collective animal-hair identity as a proxy. | `unsd-cpc-3-0-26340` |
| `validate_unresolved_identity` | rows without a confirmed flow UUID | Treat validation as inconclusive until each used unresolved row is bound to one state_code 100 Tiangong flow with matching type, name semantics, property, and unit; do not copy a rejected candidate UUID. |  |
| `validate_foreground_amounts` | all inventory amounts | Require collected records or calculations linked to a collection protocol. Reject an AI estimate, an uncited default, or a literature value presented as a measured foreground amount. | `eu-pef-recommendation-2021-2279` |
| `validate_route_completeness` | included foreground processes | Confirm every required process and every applicable conditional process is present, actual recipe chemicals are separate rows, shared utilities are allocated transparently, and all waste and wastewater destinations are declared. | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `validate_mass_reconciliation` | each included process | Require a signed mass reconciliation and disclosure of every unresolved imbalance, moisture adjustment, stock change, recovered output, and waste stream. | `eu-pef-recommendation-2021-2279` |
| `validate_allocation` | multifunctional operations | Require subdivision or a documented causal driver first; where residual allocation remains, require the selected basis, justification, and sensitivity disclosure. | `eu-pef-recommendation-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process data package and aggregated yarn-mill dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | production of CPC 26340 wool, declared animal-hair, or horsehair yarn when reference qualifiers, fibre identity, route, geography, period, and gate match |
| excluded_use | raw-fibre production; generic textile yarn without fibre identity; fabric or garment manufacture; retail packaging; another CPC category; comparative assertion without a compatible reviewed study design |
| required_metadata | canonical PCR id; reference-flow UUID and property; fibre species and composition; virgin or recycled content; spinning system; yarn count; twist or gimp construction; moisture basis; colour state; winding form; geography; reporting period; technology; foreground gate; included conditional processes; data owners |
| required_quality_disclosure | source records and coverage; meter and scale calibration; shared-record allocation; unresolved flow identities; substitutions; cutoffs; exclusions; mass reconciliation; waste and wastewater destinations; uncertainty and sensitivity |
| update_trigger | change in fibre species or composition, CPC identity, reference-flow UUID, spinning system, wet-processing route, energy supply, allocation method, foreground gate, major technology, or source evidence that materially changes the rules |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-26340` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 26340, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/26340 (retrieved 2026-08-12) | product scope, classification identity, reference-product validation |
| `eu-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-12) | textile process decomposition, fibre preparation, pretreatment, dyeing, finishing, utility and waste coverage |
| `eu-textiles-bat-2022-2508` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-12) | raw-wool scouring, wool-grease recovery, spinning lubricant rule, energy and resource records |
| `wiedemann-recycled-wool-lca-2022` | literature | Wiedemann, S. G.; Biggs, L.; Clarke, S. J.; Russell, S. J. (2022), Reducing the Environmental Impacts of Garments through Industrially Scalable Closed-Loop Recycling: Life Cycle Assessment of a Recycled Wool Blend Sweater, Sustainability 14(3), 1081, https://doi.org/10.3390/su14031081 | empirical process decomposition and identification of spinning, water, steam, lubricant, winding-core, fibre-waste, and wet-finishing exchanges; no study quantities are adopted as PCR defaults |
| `eu-pef-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | functional-unit, system-boundary, completeness, company-specific data, allocation, data-quality, and validation rules |
