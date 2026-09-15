---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-coarse-animal-hair-or-of-horsehair
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Woven fabrics of coarse animal hair or of horsehair

## 1. Scope and Applicability

This PCR applies to woven fabrics whose distinguishing fibre is coarse animal hair or horsehair and whose foreground manufacturing route starts with purchased yarn, proceeds through yarn preparation and weaving, includes wet processing when performed at the reporting site, and ends with inspected fabric packaged for dispatch at the factory gate. The declared fabric may be greige, dyed, printed, coated, or otherwise finished only when its actual route and finishing state are reported.

The PCR excludes yarn, unspun or merely prepared fibre, woven fabrics of wool or fine animal hair, knitted or crocheted fabrics, felt, tufted or pile fabrics, carpets, narrow fabrics classified elsewhere, made-up textile articles, apparel, and use or end-of-life stages. Upstream production of purchased yarn and other purchased inputs is represented by traceable upstream datasets rather than re-created inside the foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-coarse-animal-hair-or-of-horsehair |
| classification_refs | CPC 3.0: 26550, exact mapping context |
| covered_products | Woven fabrics of coarse animal hair; woven fabrics of horsehair; mixtures only when the declared product remains within this semantic category and its full fibre composition is disclosed |
| excluded_products | Yarn; wool or fine-animal-hair fabrics; nonwoven, knitted, tufted, pile, felt, carpet, narrow-fabric, made-up article, apparel, use-stage, and end-of-life products |
| representative_product | One factory-gate lot of woven fabric made from coarse-animal-hair yarn or horsehair yarn, in the declared greige or finished state |
| production_route | Purchased yarn preparation and weaving; conditional wet preparation, dyeing, printing, coating, and finishing; inspection, trimming, rolling, and packaging |
| market_state | Saleable woven fabric at the manufacturing gate, with fibre composition, weave construction, dimensions, mass per area, moisture-conditioning basis, and finishing state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide saleable woven textile fabric made from coarse animal hair or horsehair in the declared construction and finishing state |
| How much | 1 kg net mass of saleable fabric at the factory gate |
| How well | Conforms to the producer's declared fibre composition, weave construction, width, mass per area, moisture-conditioning basis, finishing state, and quality acceptance criteria |
| How long or cycle | One production lot at factory gate; no use-stage service duration is assigned |
| reference_flow_link | The reference amount is the net mass of accepted fabric output, excluding cores, wrapping, pallets, and other dispatch packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre route: coarse animal hair or horsehair; animal species or commercial fibre designation; complete fibre composition by mass; weave construction; fabric width; mass per area; moisture-conditioning basis; greige/dyed/printed/coated/finished state; production site and reporting period; packaging excluded from reference mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference fabric | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net accepted fabric mass using calibrated weighing records at the declared moisture-conditioning basis; exclude paperboard cores, wrapping, pallets, and other dispatch packaging. |
| `mass_per_area_consistency` | fabric geometry and mass records | Mass and area | kg and m2 | Report width, length or area, and mass per area for the same conditioned lot; the calculated mass must reconcile with weighed net fabric mass within the site's documented measurement uncertainty. |
| `energy_unit_preservation` | electricity, purchased steam heat, and natural gas | Energy or the confirmed calorific-value property | kWh or MJ | Preserve the metered or invoiced energy unit, state whether a calorific value is gross or net, and document every conversion factor; do not infer energy from equipment rating alone. |
| `water_mass_conversion` | process water and textile wastewater | Mass | kg | Prefer measured mass; when a volume record is converted to mass, retain the measured volume, temperature or density basis, and conversion calculation. |

## 5. System Boundary

The foreground boundary begins when purchased coarse-animal-hair yarn or horsehair yarn and other purchased inputs enter the reporting site. It includes yarn preparation, warping and sizing when performed, weaving, extraction and collection of fibre dust, on-site wet preparation and dyeing or finishing when performed, direct on-site energy use and emissions, inspection, trimming, rolling, packaging, and management of foreground wastes and wastewater up to their transfer across the site boundary. It ends with accepted woven fabric and separately recorded packaging ready for dispatch.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased coarse-animal-hair yarn or purchased horsehair yarn received at the reporting site, with supplier, composition, mass, and lot identity recorded |
| starting_condition_role | Upstream product input to foreground fabric manufacture |
| product_classification_scope | Woven fabrics of coarse animal hair or of horsehair; CPC 3.0 26550 is classification context, not the canonical PCR identity |
| recursive_input_rule | If an input is already a fabric within this same product category, record it once as a purchased intermediate product input with its upstream dataset and declared state; do not recursively re-create its upstream manufacturing inside this foreground package. |
| upstream_dataset_requirement | Use traceable upstream datasets for yarn, water, energy, chemicals, packaging, and external waste treatment; disclose geography, technology, temporal coverage, and any proxy choice. |
| disclosure | Declare the fibre route, actual starting material state, included process route, wet-processing and finishing operations, on-site combustion, wastewater route, waste destinations, packaging boundary, and every omitted operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_route` | all foreground processes | Include every on-site operation from receipt of purchased yarn through accepted and packaged woven fabric; mark wet operations conditional only when site records demonstrate that they were not performed. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_upstream_inputs` | purchased yarn and other purchased products | Represent production before the declared purchased-input gate with traceable upstream datasets and do not duplicate those burdens in foreground exchanges. | `iso-14044-2006` |
| `boundary_waste_and_emissions` | waste, wastewater, and direct emissions | Record each waste transfer and each directly monitored or calculated emission as a separate atomic exchange, and disclose the destination or receiving compartment. | `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_weaving` | Yarn preparation and weaving | required | Always included for fabric manufactured from purchased yarn | Foreground fabric formation | 1 kg accepted woven fabric leaving the process |
| `wet_processing` | Wet preparation, dyeing, and finishing | conditional | Include every operation actually performed on-site, including washing, scouring, bleaching, dyeing, printing, coating, rinsing, drying, heat-setting, or chemical finishing | Foreground wet and thermal treatment | 1 kg accepted wet-processed fabric leaving the process |
| `inspection_cutting_packaging` | Inspection, trimming, rolling, and packaging | required | Always included through the factory gate | Foreground quality release and dispatch preparation | 1 kg net accepted reference fabric |

### Process: Yarn preparation and weaving (`yarn_preparation_and_weaving`)

#### Inputs

##### Product flows

###### Coarse-animal-hair yarn input (`coarse_animal_hair_yarn_input`)

Record this row only for a coarse-animal-hair route. It is separate from horsehair yarn and from wool or fine-animal-hair yarn.

- Selected flow: Yarn of coarse animal hair
- Flow property / unit: Mass / kg
- Amount rule: Weighed or supplier-delivery mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue_records`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`

###### Horsehair yarn input (`horsehair_yarn_input`)

Record this row only for a horsehair route. Do not merge it with coarse-animal-hair yarn in the foreground inventory.

- Selected flow: Horsehair yarn
- Flow property / unit: Mass / kg
- Amount rule: Weighed or supplier-delivery mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue_records`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`

###### Medium-voltage electricity for yarn preparation and weaving (`weaving_electricity`)

Record metered or allocated electricity consumed by winding, warping, sizing, loom operation, extraction, and other equipment in this process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or an allocation from a reconciled site meter for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `jrc-textiles-bref-2023`

###### Cassava starch sizing input (`cassava_starch_sizing_input`)

Record this row only when cassava starch is the actual sizing chemical issued to the lot. Other sizing chemicals must be represented by their own specific atomic product-flow rows.

- Selected flow: Cassava Starch `00f8688a-9af4-40bf-95fd-8529f7bc70ce`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cassava starch issued according to the lot recipe, net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe_records`
- Sources: `jrc-textiles-bref-2023`

###### Loom lubricating oil input (`loom_lubricating_oil`)

Record lubricating oil actually added to loom and yarn-preparation equipment during the reporting period; exclude oil retained in capital equipment before the period.

- Selected flow: Lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus receipts minus closing stock and separately recovered oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process; water and fuels crossing the technosphere boundary must be recorded as product inputs in the process where they are consumed.

#### Outputs

##### Product flows

###### Woven fabric output from weaving (`woven_fabric_after_weaving`)

Record the woven fabric mass accepted by the next on-site process or, for a greige route, by final inspection.

- Selected flow: Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Conditioned and weighed accepted fabric output from the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_output_records`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`

##### Waste flows

###### Coarse-animal-hair yarn waste (`coarse_animal_hair_yarn_waste`)

Record separately collected coarse-animal-hair yarn waste from breaks, ends, and rejected yarn only on the coarse-animal-hair route.

- Selected flow: Coarse animal hair yarn waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste transferred from the process during the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `jrc-textiles-bref-2023`

###### Horsehair yarn waste (`horsehair_yarn_waste`)

Record separately collected horsehair yarn waste from breaks, ends, and rejected yarn only on the horsehair route.

- Selected flow: Horsehair yarn waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste transferred from the process during the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `jrc-textiles-bref-2023`

###### Coarse-animal-hair fabric offcuts from weaving (`coarse_animal_hair_fabric_offcuts_weaving`)

Record coarse-animal-hair fabric selvedges and rejected pieces separately from yarn waste.

- Selected flow: Coarse animal hair fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed offcuts and rejected woven pieces transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `jrc-textiles-bref-2023`

###### Horsehair fabric offcuts from weaving (`horsehair_fabric_offcuts_weaving`)

Record horsehair fabric selvedges and rejected pieces separately from yarn waste.

- Selected flow: Horsehair fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed offcuts and rejected woven pieces transferred from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

###### Coarse-animal-hair fibre dust to air (`coarse_animal_hair_dust_to_air`)

Record this route-specific elementary emission only when coarse-animal-hair fibre dust crosses the site boundary to air after extraction and abatement; collected dust is a separate waste flow.

- Selected flow: Coarse animal hair fibre dust to air
- Flow property / unit: Mass / kg
- Amount rule: Site monitoring record or a documented mass-balance result based on collected dust and abatement performance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources: `eu-textiles-bat-2022`

###### Horsehair fibre dust to air (`horsehair_dust_to_air`)

Record this route-specific elementary emission only when horsehair fibre dust crosses the site boundary to air after extraction and abatement; collected dust is a separate waste flow.

- Selected flow: Horsehair fibre dust to air
- Flow property / unit: Mass / kg
- Amount rule: Site monitoring record or a documented mass-balance result based on collected dust and abatement performance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted woven fabric leaving yarn preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources: `eu-textiles-bat-2022`

### Process: Wet preparation, dyeing, and finishing (`wet_processing`)

#### Inputs

##### Product flows

###### Woven fabric input to wet processing (`woven_fabric_input_wet_processing`)

Record the actual mass transferred from weaving into wet or thermal processing.

- Selected flow: Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Conditioned and weighed fabric input to the wet-processing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_transfer_records`
- Sources: `jrc-textiles-bref-2023`

###### Process water input (`process_water_input`)

Record process water supplied to washing, scouring, bleaching, dyeing, rinsing, or aqueous finishing for this product route.

- Selected flow: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered water supplied to the wet-processing lot, excluding separately metered domestic use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

###### Medium-voltage electricity for wet processing (`wet_process_electricity`)

Record electricity used by wet-treatment equipment, pumps, dosing, extraction, drying, heat-setting, and abatement assigned to this route.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or an allocation from a reconciled site meter for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `jrc-textiles-bref-2023`

###### Purchased steam heat input (`purchased_steam_heat`)

Record purchased steam heat only when it crosses the foreground boundary; do not merge it with electricity or on-site natural gas.

- Selected flow: Heat, steam
- Flow property / unit: Energy / MJ
- Amount rule: Supplier meter or invoice assigned to the wet-processing lot, with condensate treatment documented separately when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_meter_records`
- Sources: `jrc-textiles-bref-2023`

###### Sodium carbonate input (`sodium_carbonate_input`)

Record sodium carbonate only when it is issued to the declared preparation, dyeing, or finishing recipe.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Weighed product mass issued to the wet-processing lot, net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe_records`
- Sources: `jrc-textiles-bref-2023`

###### Hydrogen peroxide input (`hydrogen_peroxide_input`)

Record hydrogen peroxide only when it is issued to the declared bleaching or treatment recipe.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulated-product mass and concentration issued to the wet-processing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe_records`
- Sources: `jrc-textiles-bref-2023`

###### Acetic acid input (`acetic_acid_input`)

Record acetic acid only when it is issued to the declared pH-control, dyeing, or finishing recipe.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulated-product mass and concentration issued to the wet-processing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_recipe_records`
- Sources: `jrc-textiles-bref-2023`

###### Natural gas input for direct or indirect heating (`natural_gas_input`)

Record natural gas only when it is consumed on-site for direct heating, drying, heat-setting, or an associated boiler within this process boundary.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered gas energy on the supplier-declared gross-calorific-value basis assigned to the wet-processing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_meter_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Wet-processed woven fabric output (`wet_processed_fabric_output`)

Record the accepted fabric leaving the declared wet and thermal treatment route.

- Selected flow: Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Conditioned and weighed accepted fabric output from the wet-processing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_output_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Textile process wastewater sent to treatment (`textile_process_wastewater`)

Record the wastewater stream transferred to on-site or off-site treatment. Do not also record its contained substances as direct elementary emissions unless they cross the environment boundary after treatment.

- Selected flow: Wastewater, textile process (to water) `48438fa9-4988-405c-ba44-646f134e2ecc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered wastewater mass or documented conversion from measured volume assigned to the wet-processing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil_to_air`)

Record fossil carbon dioxide crossing the site boundary from on-site natural-gas combustion assigned to this process. Do not include upstream fuel-production emissions in this foreground row.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack monitoring record or a documented site combustion calculation retained with the foreground evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted wet-processed fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources: `eu-textiles-bat-2022`

### Process: Inspection, trimming, rolling, and packaging (`inspection_cutting_packaging`)

#### Inputs

##### Product flows

###### Woven fabric input to inspection and packaging (`woven_fabric_input_packaging`)

Record the accepted fabric transferred from weaving or wet processing into final quality release.

- Selected flow: Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Conditioned and weighed fabric entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_transfer_records`
- Sources: `jrc-textiles-bref-2023`

###### Medium-voltage electricity for inspection and packaging (`packaging_electricity`)

Record electricity used by inspection, trimming, rolling, local extraction, and packaging equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or an allocation from a reconciled site meter for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter_records`
- Sources: `jrc-textiles-bref-2023`

###### Paperboard core input (`paperboard_core_input`)

Record the mass of paperboard cores incorporated into dispatched rolls separately from the fabric reference mass.

- Selected flow: Paperboard core
- Flow property / unit: Mass / kg
- Amount rule: Weighed cores issued to dispatched rolls in the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_issue_records`
- Sources: `jrc-textiles-bref-2023`

###### Polyethylene film packaging input (`polyethylene_film_input`)

Record polyethylene film applied to dispatched fabric rolls; do not merge it with paperboard cores or pallets.

- Selected flow: Polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Weighed film issued to dispatched rolls in the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_issue_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Net accepted reference fabric output (`reference_fabric_output`)

Record the net mass of saleable fabric after inspection and trimming, excluding all dispatch packaging.

- Selected flow: Woven fabrics of coarse animal hair or of horsehair `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Conditioned and calibrated net weighing record for accepted fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_output_records`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`

##### Waste flows

###### Coarse-animal-hair fabric offcuts from final trimming (`coarse_animal_hair_fabric_offcuts_packaging`)

Record coarse-animal-hair fabric removed during final trimming separately from weaving waste.

- Selected flow: Coarse animal hair fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed final-trimming offcuts transferred from the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `jrc-textiles-bref-2023`

###### Horsehair fabric offcuts from final trimming (`horsehair_fabric_offcuts_packaging`)

Record horsehair fabric removed during final trimming separately from weaving waste.

- Selected flow: Horsehair fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: Weighed final-trimming offcuts transferred from the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste_records`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

No elementary output is prescribed for this process; any directly monitored emission must be added as its own specific elementary-flow row.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | shared foreground equipment and utilities | Prefer process subdivision, dedicated metering, lot records, or documented operating-time allocation so burdens are assigned without co-product allocation whenever practicable. | `iso-14044-2006` |
| `allocation_physical_relation` | unavoidable joint production | When subdivision is not practicable, allocate by a documented physical causal relation, such as measured mass, machine time, or energy demand, that reflects how inputs and emissions change with the outputs. | `iso-14044-2006` |
| `allocation_other_relation` | joint production without a defensible physical relation | Use another documented relationship only after explaining why a physical relation is not practicable; disclose the method and test a materially plausible alternative. | `iso-14044-2006` |
| `allocation_recovery` | recoverable yarn waste, offcuts, oils, packaging waste, and wastewater residues | Keep each recovered output separate; do not assign avoided-burden credits inside the foreground process unless the downstream system and allocation method are explicitly included and disclosed. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issue_records` | `yarn_preparation_and_weaving` | route-specific yarn inputs | purchase receipt, stock ledger, and lot issue record | supplier; material name; fibre route; lot id; gross mass; tare; net mass; issue and return mass | reconcile receipts, stock movement, and lot issues | kg | each receipt and production lot | complete reporting period | all yarn stores and weaving lines in scope | sum net issues minus documented returns by route and lot | calibrated scale record, supplier document, and stock reconciliation |
| `cp_electricity_meter_records` | all processes | process electricity | submeter or reconciled main-meter record | meter id; start and end reading; timestamp; process; downtime; allocation key | read submeters or allocate a reconciled site meter using documented operating records | kWh | at least monthly and by lot when available | complete reporting period | all included equipment and shared services | sum readings and allocate only the reconciled shared remainder | meter calibration or utility invoice and reconciliation |
| `cp_chemical_recipe_records` | `yarn_preparation_and_weaving`; `wet_processing` | each individual chemical product | batch recipe, issue ticket, return, and concentration record | product name; formulation or concentration; supplier; batch id; issued mass; returned mass | record every recipe chemical as its own product flow | kg | each batch | complete wet-processing and sizing campaigns | all in-scope dosing points | sum net product mass by exact chemical product and batch | approved recipe, issue ticket, and concentration certificate |
| `cp_lubricant_records` | `yarn_preparation_and_weaving` | loom lubricating oil | stock and maintenance issue record | product name; opening stock; receipts; closing stock; recovered mass; process | stock balance supported by maintenance issues | kg | monthly | complete reporting period | all included weaving and preparation equipment | opening plus receipts minus closing and separately recovered oil | stock reconciliation and maintenance log |
| `cp_fabric_transfer_records` | `wet_processing`; `inspection_cutting_packaging` | intermediate fabric | lot transfer and weighing record | lot id; route; source process; destination process; conditioned mass; timestamp | weigh and reconcile transfers between process steps | kg | each lot transfer | complete reporting period | all included production lines | sum conditioned transfers by route and lot | calibrated scale and signed transfer record |
| `cp_fabric_output_records` | all processes | accepted fabric output | production and quality-release record | lot id; fibre route; composition; weave; width; length; area; mass per area; moisture basis; net mass; rejects | condition, weigh, and release accepted output | kg | each lot | complete reporting period | all included lines | sum accepted net mass; keep rejected mass separate | calibration, conditioning record, and quality release |
| `cp_solid_waste_records` | `yarn_preparation_and_weaving`; `inspection_cutting_packaging` | each route-specific solid waste | container weighing and waste transfer record | waste name; fibre route; process; container id; gross mass; tare; net mass; destination | weigh each segregated waste stream at transfer | kg | each transfer | complete reporting period | all in-scope waste collection points | sum net mass by exact waste identity, process, and destination | scale record and transfer receipt |
| `cp_air_emission_records` | `yarn_preparation_and_weaving`; `wet_processing` | each direct air emission | stack or workplace-extraction monitoring and supporting calculation | pollutant identity; source; method; concentration; gas flow; duration; abatement state; result | use compliant monitoring or retain the complete site calculation evidence | kg | permit or BAT-consistent frequency and each material process change | representative operation within the reporting period | all included emission points | aggregate only the same pollutant and compartment after source-level records are retained | laboratory report, method, calibration, and operating-state evidence |
| `cp_water_meter_records` | `wet_processing` | process water | water submeter or reconciled supply record | meter id; readings; timestamp; process; batch; excluded domestic use | meter wet-process supply and reconcile with site supply | kg or m3 | each batch or at least monthly | complete wet-processing period | all in-scope wet lines | sum readings by process; document volume-to-mass conversion | meter calibration, supply invoice, and reconciliation |
| `cp_steam_meter_records` | `wet_processing` | purchased steam heat | supplier or submeter record | meter id; steam quantity; pressure; enthalpy or invoiced energy; condensate return; batch | use supplier meter or calibrated submeter and preserve energy basis | MJ | each batch or at least monthly | complete wet-processing period | all in-scope steam users | sum supplied energy and allocate only reconciled shared use | meter calibration, invoice, and energy-basis calculation |
| `cp_fuel_meter_records` | `wet_processing` | on-site natural gas | gas meter and supplier calorific-value statement | meter readings; volume or energy; pressure; temperature; gross calorific value; timestamp; equipment | reconcile process meters to supplier totals and retain the gross-calorific-value basis | MJ | at least monthly | complete reporting period | all in-scope direct heaters and boilers | sum metered gross-calorific-value energy by process | meter calibration and supplier statement |
| `cp_wastewater_records` | `wet_processing` | textile process wastewater | effluent meter, sampling, and transfer or discharge record | discharge route; meter readings; volume or mass; density basis; sampling time; treatment destination | meter each route and reconcile with water input and retained water | kg or m3 | continuous or batch-total measurement with BAT-consistent sampling | complete wet-processing period | all in-scope discharge and transfer points | aggregate by route only after source-level records are retained | meter calibration, sampling report, and treatment receipt |
| `cp_packaging_issue_records` | `inspection_cutting_packaging` | each packaging component | packaging stock and issue record | component name; material; unit mass; count; issued mass; returned mass; lot | weigh or calculate from verified unit mass and count for each component separately | kg | each dispatch lot | complete reporting period | all in-scope packing stations | sum net issued mass by exact packaging component | unit-mass verification, stock reconciliation, and dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | every mass-based inventory row | normalized amount = recorded net row mass / net accepted process-output mass | row net mass; accepted process-output mass | kg per kg process output or reference flow |  |
| `calc_area_mass_check` | reference fabric | calculated fabric mass = reported area × reported mass per area; compare with conditioned weighed mass and retain the difference | width and length or area; mass per area; conditioned weighed mass | reconciliation result |  |
| `calc_energy_conversion` | electricity and steam records | convert only with documented unit identities and conversion factors; retain original readings and converted values | meter or invoice value; original unit; conversion factor | kWh or MJ per kg process output |  |
| `calc_gas_energy` | natural gas | gas energy = measured gas quantity × supplier-declared gross calorific value on a consistent pressure and temperature basis | metered gas quantity; supplier gross calorific value; basis conditions | MJ gross calorific value per kg process output | `eu-textiles-bat-2022` |
| `calc_water_mass` | process water and wastewater | when mass is not directly measured, converted mass = measured volume × documented density at the stated condition | volume; density; condition | kg per kg process output |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference fabric and intermediate fabric | Retain lot-level evidence for fibre route, animal species or commercial fibre designation, full composition, weave, width, mass per area, moisture basis, and finishing state. | product specification, bill of materials, lot traveller, and quality release |
| `dq_route_completeness` | all foreground processes | Reconcile the declared process map with production records; disclose every omitted or externally performed preparation, wet, thermal, and finishing operation. | process flow diagram, production log, supplier service record, and boundary disclosure |
| `dq_atomic_recipe` | sizing and wet-processing chemicals | Represent every chemical product in the actual batch recipe as a separate atomic product-flow exchange with product name, concentration, and net issued mass; do not use a combined chemical or dye selector. | approved recipe, safety or specification sheet, issue ticket, and return record |
| `dq_mass_balance` | each process and reporting lot | Reconcile material inputs to accepted output, route-specific waste, retained moisture change, wastewater-carried material where measured, and documented stock change; investigate material discrepancies. | signed lot mass balance and discrepancy investigation |
| `dq_energy_reconciliation` | electricity, steam, and natural gas | Reconcile process meters and allocations to supplier totals and state the allocation key for shared services. | meter register, utility invoice, allocation calculation, and calibration evidence |
| `dq_wet_environmental_records` | wet processing and associated combustion | Retain water-use, wastewater-route, chemical-inventory, energy-use, and direct-emission records at a frequency representative of actual operating conditions and material route changes. | monitoring plan, meter records, laboratory reports, and operating logs |
| `dq_no_double_counting` | wastewater and direct emissions | Do not count a substance both inside a wastewater waste flow and as a direct elementary emission unless records demonstrate separate boundary crossings. | discharge map, treatment boundary, sampling point identity, and inventory reconciliation |
| `dq_temporal_site_coverage` | all foreground data | Cover a representative reporting period and all included lines at the declared site; document shutdowns, abnormal operation, missing data, and substitutions. | production calendar, line list, meter coverage, and gap log |
| `dq_packaging_separation` | dispatch packaging | Exclude packaging from the 1 kg fabric reference mass and record each component separately. | net/gross weighing record, packaging issue record, and dispatch specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require the confirmed product UUID, Mass property UUID, 1 kg reference amount, and all required product qualifiers; fail when the product is a yarn, wool/fine-hair fabric, nonwoven, knitted, tufted, pile, felt, carpet, made-up article, or apparel. | `unsd-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_mass` | reference fabric | Verify that reference mass is net conditioned fabric mass and excludes every packaging component; reconcile mass, area, and mass-per-area records. |  |
| `validate_process_route` | process map | Require yarn preparation and weaving plus inspection and packaging; require each wet, thermal, dyeing, printing, coating, or finishing operation when production records show it occurred. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_atomic_flows` | process inventory | Require one concrete product, chemical, energy carrier, packaging component, waste, or elementary emission per row; reject plural collections, alternatives, selectors, and placeholder flows. |  |
| `validate_direction_and_type` | every inventory row | Verify that process, direction, flow type, row id, selected UUID when present, property, unit, and route condition are mutually consistent. |  |
| `validate_foreground_evidence` | every amount | Require a real foreground record and the linked collection protocol; reject AI-derived amounts and undocumented default ranges. |  |
| `validate_wet_processing` | wet processing | Reconcile process water, wastewater, each recipe chemical, electricity, steam, natural gas, direct emissions, and accepted output for the actual route, without double counting transferred wastewater and direct releases. | `eu-textiles-bat-2022` |
| `validate_allocation` | shared operations and joint outputs | Require allocation avoidance where practicable; otherwise require the selected relationship, rationale, inputs, outputs, and alternative-method sensitivity disclosure. | `iso-14044-2006` |
| `validate_source_traceability` | external rules and non-default evidence | Require every cited source id to resolve to the Data Sources table and every foreground record to retain its auditable site evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` after methodology review; eligible for `background_dataset` use only after independent quality review and declared representativeness |
| downstream_use | Foreground process datasets and downstream `process` or `lifecyclemodel` projections for woven fabrics of coarse animal hair or of horsehair |
| allowed_use | Product-footprint, supply-chain, process-improvement, and comparative modelling when product identity, route, geography, time period, allocation, and data quality match the study goal and scope |
| excluded_use | Yarn, wool/fine-animal-hair fabrics, other textile structures, made-up articles, apparel, undisclosed proxies, or claims outside the declared geography, technology, period, and finishing state |
| required_metadata | PCR id and version; product and flow UUIDs; fibre route and composition; weave, width, mass per area, moisture basis, finishing state; site and period; process route; geography and technology; allocation; upstream dataset choices; wastewater and waste destinations; packaging boundary |
| required_quality_disclosure | Primary-data coverage; meter and scale coverage; temporal, geographic, and technological representativeness; missing-data treatment; mass and energy reconciliation; recipe completeness; emission-monitoring basis; allocation sensitivity; review status |
| update_trigger | Change in fibre route or composition, weave technology, wet or thermal route, chemical formulation, energy source, wastewater treatment, allocation method, packaging configuration, site representativeness, reference-flow identity, or authoritative source requirements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, CPC 26550, 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Product-category boundary, included woven-fabric identity, and exclusions from neighbouring textile categories |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Textiles Industry*, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf (retrieved 2026-08-12) | Process decomposition, textile preparation, fabric production, wet processing, finishing, utilities, emissions, and monitoring context |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI: https://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-12) | Wet-processing scope, associated fabric production and combustion, environmental records, wastewater, direct emissions, and route validation |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, including Amendments 1 and 2, https://www.iso.org/standard/38498.html (retrieved 2026-08-12) | Goal-and-scope consistency, inventory documentation, upstream dataset boundary, and allocation framework |
