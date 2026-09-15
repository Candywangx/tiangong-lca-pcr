---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.carbon-electrodes-carbon-brushes-lamp-carbons-battery-carbons-and-other-articles-of-gra-a6c41597
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Carbon electrodes, carbon brushes, lamp carbons, battery carbons and other articles of graphite or other carbon of a kind used for electrical purposes

## 1. Scope and Applicability

This PCR governs foreground data packages for finished graphite or other carbon articles whose declared function is electrical conduction, current transfer, electrolysis, arc-light operation, or battery current collection. Covered products include carbon and graphite electrodes, electrical carbon brushes, lamp carbons, battery carbons, and comparable shaped electrical-carbon articles at the factory gate.

The PCR excludes graphite or carbon powder sold as battery active material, complete primary cells, batteries and accumulators, non-electrical graphite or carbon articles, carbon fibre articles, and upstream coke, pitch, graphite, or carbon-black products sold without the finished electrical function. Use-phase consumption, downstream installation, distribution, and end-of-life are outside the default boundary. Product packaging is outside the reference product and must be modelled separately if the study goal includes it.

The category contains materially different formulations and heat-treatment routes. A conforming data package shall declare one actual product family and one actual production route; it shall not average carbon electrodes, brushes, lamp carbons, and battery carbons merely because they share CPC 46950.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.carbon-electrodes-carbon-brushes-lamp-carbons-battery-carbons-and-other-articles-of-gra-a6c41597 |
| classification_refs | CPC 3.0: 46950, exact classification context; the classification coordinate does not replace the semantic boundary |
| covered_products | Finished carbon or graphite electrodes; electrical carbon brushes; lamp carbons; battery carbons supplied as shaped electrical articles; other finished graphite or carbon articles made for electrical purposes |
| excluded_products | Graphite or carbon powder sold as battery active material; complete cells, batteries, accumulators, or electrical machines; non-electrical carbon articles; upstream coke, pitch, graphite, and carbon black; use, installation, distribution, end-of-life, and product packaging unless separately added by the study |
| representative_product | One declared finished electrical-carbon article from the covered product family, meeting its sale specification |
| production_route | Product-specific blending and forming followed by thermal consolidation; pitch impregnation and rebaking when used; graphitization when used; machining and attachment assembly when supplied with the article |
| market_state | Finished, quality-released, unpackaged factory-gate article; product family, grade, dimensions, density, electrical properties, metal content, and surface/attachment state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished graphite or other carbon article that performs the declared electrical conduction, contact, electrolysis, arc-light, or battery-current-collection function |
| How much | 1 kg net mass of quality-released finished article, excluding separate packaging |
| How well | Meets the declared product-family specification for grade, dimensions, apparent density, electrical resistivity or conductivity, mechanical integrity, metal content, and attachment or surface state |
| How long or cycle | One factory-gate production batch; no equal service life or duty cycle is implied, and comparative use claims require a separately defined performance- and lifetime-equivalent functional unit |
| reference_flow_link | `reference_product` output from `machining_and_assembly` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Finished electrical-carbon article (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family; carbon or graphite grade; natural/artificial graphite and coke feedstock classes; binder system; metal type and mass fraction; graphitized or non-graphitized route; impregnation count; nominal dimensions; net finished mass; apparent density; declared electrical property and test method; attachment and surface state; recycled carbon content; manufacturing site and geography; reference year; packaging exclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all carbonaceous material transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry or as-received mass consistently. Declare moisture and volatile-matter basis when either affects the recipe or mass balance. Exclude removable packaging, pallets, and transport fixtures from the 1 kg reference product. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity by stage where submetering exists. Convert kWh to MJ using exactly 3.6 MJ per kWh and disclose grid geography, voltage, losses, and whether on-site generation is separately modelled. |
| `gas_volume_conditions` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at the declared temperature and pressure, and retain supplier composition or heating-value records. Do not substitute a generic energy carrier or silently mix reference conditions. |
| `water_mass_conversion` | Process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If water is metered by volume, convert using a measured or documented density for the metering conditions and retain the volume, density, temperature, and conversion record. |
| `wastewater_volume` | Wastewater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report volume at the discharge or treatment-transfer point and disclose composition, suspended carbon, treatment state, and destination. Do not equate wastewater volume with process-water input without a measured balance. |

## 5. System Boundary

The default study is cradle-to-factory-gate. Foreground collection begins when purchased carbonaceous feedstocks, binders, metals, water, and energy cross the manufacturing-site boundary and ends when the declared finished article is quality released. Upstream production and transport of every purchased input are represented by compatible upstream datasets. Foreground includes blending, forming, required thermal consolidation, conditional impregnation/rebaking, conditional graphitization, machining, attachment assembly, internal recycling, direct emissions, and wastes. Packaging, distribution, use, installation, and end-of-life are excluded unless explicitly added outside this reference flow.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | Product system and purchased inputs | Include upstream production and inbound transport for each purchased feedstock, binder, metal, water, fuel, and electricity flow; include all foreground manufacturing stages through quality release of the unpackaged product. | `eu-2021-environmental-footprint-method`; `usitc-small-diameter-graphite-electrodes-2009` |
| `boundary_route_declaration` | Product-family and technology variants | Declare the actual product family, formulation, thermal route, impregnation count, graphitization technology, machining, and attachments. Include conditional stages only when performed; never average absent stages as zero without declaring route applicability. | `mersen-carbon-brush-technical-guide`; `resonac-graphite-electrode-process` |
| `boundary_direct_emissions` | Foreground combustion and carbonization | Record direct site emissions and wastes at their physical boundary. The fossil-carbon-dioxide rows cover only direct foreground emissions; upstream power- and fuel-supply emissions remain in their upstream datasets and shall not be duplicated. | `eu-2021-environmental-footprint-method` |
| `boundary_packaging_exclusion` | Reference product and downstream additions | Exclude removable sale and transport packaging from the 1 kg reference product. If packaging is required by the study goal, add each packaging component as a separate atomic flow outside this PCR reference product and disclose the extension. | `usitc-small-diameter-graphite-electrodes-2009` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased carbonaceous feedstocks, binders, metallic additions or attachments, process water, and delivered energy at the manufacturing-site gate; supplier product state and upstream coverage declared |
| starting_condition_role | Foreground manufacturing input boundary for the finished electrical-carbon article |
| product_classification_scope | Finished electrical-purpose graphite or other carbon articles within the semantic boundary represented by CPC 3.0 code 46950 |
| recursive_input_rule | A purchased article already within this finished-product category is recorded as a distinct input only when it physically enters the foreground product; do not recurse into this PCR. Link a compatible upstream dataset and disclose the purchased article, mass, grade, and supplier gate. Site-internal green, heat-treated, rebaked, and graphitized articles are internal transfer rows and receive no upstream burden. |
| upstream_dataset_requirement | Use geography-, technology-, product-state-, and reference-year-compatible upstream datasets for every purchased input. Preserve supplier-specific data where available and reject a dataset whose flow property or unit group cannot be reconciled without a documented conversion. |
| disclosure | Declare product family, grade, formulation, metal content, recycled content, all included and absent conditional stages, furnace and graphitization technology, energy supply, site geography, data period, allocation, internal recycling, direct-emission method, wastewater treatment state, attachment scope, and packaging exclusion. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_and_forming` | Material preparation and forming | `required` | Always include for the declared finished electrical-carbon article; individual formulation inputs apply only when actually used | Foreground recipe preparation, size reduction, mixing, compaction or extrusion | Net kg formed green article transferred toward 1 kg finished product |
| `thermal_consolidation` | Thermal consolidation or resin cure | `required` | Include the actual baking, carbonization, sintering, or resin-polymerization route used to make a mechanically coherent article | Foreground thermal processing | Net kg heat-treated article transferred toward 1 kg finished product |
| `pitch_impregnation_and_rebaking` | Pitch impregnation and rebaking | `conditional` | Include when a heat-treated article is impregnated with pitch and rebaked one or more times | Foreground densification | Net kg rebaked article per 1 kg finished product |
| `graphitization` | Graphitization | `conditional` | Include when the declared product is graphitized after heat treatment or rebaking | Foreground high-temperature conversion | Net kg graphitized article per 1 kg finished product |
| `machining_and_assembly` | Machining, quality release, and attachment assembly | `required` | Include the actual finishing steps; copper wire is included only when supplied as part of the finished article | Foreground finishing and product release | 1 kg net quality-released finished product |

### Process: Material preparation and forming (`material_preparation_and_forming`)

#### Inputs

##### Product flows

###### Needle-coke aggregate (`needle_coke_input`)

Record purchased needle coke only for a formulation that actually uses it; retain grade, calcination state, particle-size specification, supplier, moisture, and volatile matter.

- Selected flow: Needle coke (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured dry or as-received mass charged to accepted production lots, net of documented returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_material_mass`
- Sources: `resonac-graphite-electrode-process`; `usitc-small-diameter-graphite-electrodes-2009`

###### Natural-graphite feedstock (`natural_graphite_input`)

Record purchased natural graphite powder only for grades that use it; do not substitute graphite ore for beneficiated or grade-ready powder.

- Selected flow: Natural graphite powder (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged to accepted production lots on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_material_mass`
- Sources: `mersen-carbon-brush-technical-guide`

###### Artificial-graphite feedstock (`artificial_graphite_input`)

Record purchased artificial graphite for brush, lamp-carbon, battery-carbon, or other formulations that use externally supplied graphitized material.

- Selected flow: Graphite `46bbb7c0-ba7d-4cb6-a1cd-00ff0b7c4baa`
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged to accepted production lots on the declared grade and purity basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_material_mass`
- Sources: `mersen-carbon-brush-technical-guide`

###### Carbon-black feedstock (`carbon_black_input`)

Record carbon black only when it is a discrete purchased formulation input; declare grade and particle characteristics.

- Selected flow: Carbon Black `dee14a4f-c02b-4bf5-affc-9e66b1d9a8ce`
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged to accepted production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_material_mass`
- Sources: `mersen-carbon-brush-technical-guide`

###### Coal-tar-pitch binder (`coal_tar_pitch_binder`)

Record coal-tar pitch used as a formulation binder separately from impregnation pitch; retain softening point, supplier specification, and as-received mass.

- Selected flow: Coal-tar pitch (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass incorporated into accepted green-mix batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_material_mass`
- Sources: `resonac-graphite-electrode-process`; `usitc-small-diameter-graphite-electrodes-2009`

###### Phenolic-resin binder (`phenolic_resin_binder`)

Record thermosetting phenolic resin only for resin-bonded grades; retain formulation, solids content, catalyst or cure system, and supplier grade.

- Selected flow: Phenolic resin `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- Flow property / unit: Mass / kg
- Amount rule: measured as-received resin mass charged to accepted production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_material_mass`
- Sources: `mersen-carbon-brush-technical-guide`

###### Copper-powder addition (`copper_powder_input`)

Record metallic copper powder only for metal-graphite formulations that use it; do not substitute copper slag, copper salts, wire, or other product forms.

- Selected flow: Copper powder (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged to accepted metal-graphite production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_material_mass`
- Sources: `mersen-carbon-brush-technical-guide`

###### Forming electricity (`electricity_forming`)

Record purchased electricity used by milling, screening, mixing, conveying, pressing, extrusion, ventilation, and directly attributable dust collection.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: stage-submetered electricity or an auditable equipment-time allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources:

###### Forming-process water (`process_water_forming`)

Record process water only when it crosses the boundary for mixing, forming, cooling, or direct dust control in this stage; cooling water in a closed loop is recorded only as net make-up.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up water attributable to accepted production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed green electrical-carbon article (`formed_green_article`)

Record the net mass of accepted formed green article transferred to thermal consolidation; this internal intermediate carries no additional upstream dataset.

- Selected flow: Formed green electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted mass transferred after forming and before thermal consolidation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`; `mersen-carbon-brush-technical-guide`

##### Waste flows

###### Forming carbonaceous dust (`forming_carbon_dust`)

Record collected solid carbonaceous dust leaving the forming process; material returned internally is an internal transfer, not waste output.

- Selected flow: Carbonaceous forming dust (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured dust mass sent to external treatment or disposal, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_waste_mass`
- Sources:

###### Forming carbonaceous offcuts (`forming_carbon_offcuts`)

Record discrete carbonaceous screening rejects and forming offcuts that leave the process; do not combine their mass with collected dust.

- Selected flow: Carbonaceous forming offcuts (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured offcut mass sent to external treatment or disposal, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_waste_mass`
- Sources:

##### Elementary flows

### Process: Thermal consolidation or resin cure (`thermal_consolidation`)

#### Inputs

##### Product flows

###### Green article transferred to thermal consolidation (`green_article_to_thermal`)

Record the site-internal formed article entering the declared baking, carbonization, sintering, or polymerization cycle.

- Selected flow: Formed green electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass loaded to the thermal cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`; `mersen-carbon-brush-technical-guide`

###### Natural gas for thermal consolidation (`natural_gas_thermal`)

Record gaseous natural gas only when combusted for the declared thermal cycle; declare metering reference conditions and exclude gas used by unrelated site operations.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured stage gas volume at declared temperature and pressure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_natural_gas`
- Sources:

###### Thermal-consolidation electricity (`electricity_thermal`)

Record purchased electricity used by furnaces, controls, ventilation, material handling, and directly attributable pollution controls in this stage.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: stage-submetered electricity or an auditable equipment-time allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated electrical-carbon article (`heat_treated_article`)

Record the accepted baked, carbonized, sintered, or resin-cured article transferred to impregnation, graphitization, or finishing according to the declared route.

- Selected flow: Heat-treated electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted mass after the declared thermal cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`; `mersen-carbon-brush-technical-guide`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from thermal consolidation (`fossil_co2_thermal`)

Record direct fossil carbon dioxide from on-site fuel combustion and process-carbon release attributable to this stage. Do not include upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct stack release or calculated from collected fuel and process-carbon records under `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_fossil_co2`
- Sources:

### Process: Pitch impregnation and rebaking (`pitch_impregnation_and_rebaking`)

#### Inputs

##### Product flows

###### Heat-treated article transferred to impregnation (`heat_treated_article_to_impregnation`)

Record the site-internal heat-treated article entering pressure or vacuum pitch impregnation.

- Selected flow: Heat-treated electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass loaded to all impregnation cycles attributable to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`; `usitc-small-diameter-graphite-electrodes-2009`

###### Coal-tar-pitch impregnant (`coal_tar_pitch_impregnant`)

Record coal-tar pitch consumed during impregnation separately from the original formulation binder; retain supplier grade and all repeated-cycle additions.

- Selected flow: Coal-tar pitch (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass consumed across all declared impregnation cycles, net of recovered pitch returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_impregnation_material_mass`
- Sources: `resonac-graphite-electrode-process`; `usitc-small-diameter-graphite-electrodes-2009`

###### Natural gas for rebaking (`natural_gas_rebaking`)

Record gaseous natural gas only when combusted for rebaking after impregnation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured rebaking-stage gas volume at declared temperature and pressure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_natural_gas`
- Sources:

###### Impregnation and rebaking electricity (`electricity_impregnation_rebaking`)

Record electricity used by pitch handling, vacuum or pressure systems, rebaking furnaces, ventilation, and directly attributable controls.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: stage-submetered electricity or an auditable equipment-time allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rebaked electrical-carbon article (`rebaked_article`)

Record accepted impregnated and rebaked article after all declared cycles.

- Selected flow: Rebaked electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted mass after the last rebaking cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from rebaking (`fossil_co2_rebaking`)

Record direct fossil carbon dioxide from rebaking fuel combustion and impregnating-pitch carbonization; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct stack release or calculated from collected fuel and process-carbon records under `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_fossil_co2`
- Sources:

### Process: Graphitization (`graphitization`)

#### Inputs

##### Product flows

###### Heat-treated article transferred directly to graphitization (`heat_treated_article_to_graphitization`)

Record this internal transfer only when graphitization follows heat treatment without pitch impregnation.

- Selected flow: Heat-treated electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass loaded to graphitization from the non-impregnated route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`

###### Rebaked article transferred to graphitization (`rebaked_article_to_graphitization`)

Record this internal transfer only when graphitization follows pitch impregnation and rebaking.

- Selected flow: Rebaked electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rebaked-article mass loaded to graphitization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`

###### Graphitization electricity (`electricity_graphitization`)

Record electrical energy used for resistance or direct Joule heating, furnace auxiliaries, cooling, ventilation, and directly attributable controls.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: graphitization-stage submetered electricity or an auditable furnace-batch allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources: `resonac-graphite-electrode-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Graphitized electrical-carbon article (`graphitized_article`)

Record the accepted graphitized blank transferred to machining and assembly.

- Selected flow: Graphitized electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net accepted mass after graphitization and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`

##### Waste flows

##### Elementary flows

### Process: Machining, quality release, and attachment assembly (`machining_and_assembly`)

#### Inputs

##### Product flows

###### Non-graphitized heat-treated article transferred to finishing (`heat_treated_article_to_finishing`)

Record this internal input only for routes that proceed from thermal consolidation directly to finishing.

- Selected flow: Heat-treated electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to finishing from the non-impregnated, non-graphitized route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `mersen-carbon-brush-technical-guide`

###### Rebaked non-graphitized article transferred to finishing (`rebaked_article_to_finishing`)

Record this internal input only when the product is impregnated and rebaked but not graphitized.

- Selected flow: Rebaked electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rebaked-article mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `mersen-carbon-brush-technical-guide`

###### Graphitized article transferred to finishing (`graphitized_article_to_finishing`)

Record this internal input only for graphitized products.

- Selected flow: Graphitized electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured graphitized-article mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediate_mass`
- Sources: `resonac-graphite-electrode-process`

###### Copper-wire attachment (`copper_wire_attachment`)

Record copper lead or shunt wire only when it is supplied as part of the finished electrical-carbon article; declare alloy, cross-section, insulation, and attachment method.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass / kg
- Amount rule: measured net wire mass incorporated into accepted finished articles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_mass`
- Sources: `mersen-carbon-brush-technical-guide`

###### Finishing electricity (`electricity_finishing`)

Record purchased electricity used by sawing, turning, milling, drilling, grinding, quality testing, attachment assembly, ventilation, and directly attributable dust collection.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: stage-submetered electricity or an auditable equipment-time allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_electricity`
- Sources:

###### Finishing-process water (`process_water_finishing`)

Record process water only for wet machining, washing, or wet dust control; closed-loop coolant is represented by net make-up crossing the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up water attributable to accepted finished articles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-released finished electrical-carbon article (`reference_product`)

This is the reference product. Record net quality-released mass without removable packaging and preserve the declared product-family and performance qualifiers.

- Selected flow: Finished electrical-carbon article (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net quality-released finished article as the normalization output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_reference_product_mass`
- Sources: `eu-2021-environmental-footprint-method`

##### Waste flows

###### Machining carbonaceous dust (`machining_carbon_dust`)

Record collected carbonaceous machining dust leaving the site for treatment or disposal; separately account for material returned internally.

- Selected flow: Carbonaceous machining dust (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured dust mass sent to external treatment or disposal, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_waste_mass`
- Sources:

###### Machining carbonaceous offcuts (`machining_carbon_offcuts`)

Record discrete carbonaceous swarf and rejected machined offcuts leaving the site; do not combine their mass with collected dust.

- Selected flow: Carbonaceous machining offcuts (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured offcut mass sent to external treatment or disposal, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_waste_mass`
- Sources:

###### Wastewater from wet machining or dust control (`machining_wastewater`)

Record wastewater only when wet machining, washing, or wet dust control generates a liquid waste crossing the treatment or discharge boundary.

- Selected flow: Wastewater `ba1c2ea5-0ea3-4981-a893-45a0650fea62`
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater volume transferred to on-site treatment, off-site treatment, or discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished electrical-carbon article
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared equipment, furnaces, pollution controls, and multi-product lines | First obtain product- and stage-specific records or subdivide by meter, batch, equipment time, or another causal operating record. System expansion may be used only when the additional function and substituted system are demonstrated and disclosed. | `eu-2021-environmental-footprint-method` |
| `allocation_physical_relationship` | Unavoidable shared burdens | If subdivision or system expansion is not feasible, use a measured physical relationship causally connected to the shared burden, such as furnace occupancy-time-energy, processed mass, or machine time. Document the numerator, denominator, co-products, and allocation period. | `eu-2021-environmental-footprint-method` |
| `allocation_other_relationship` | Burdens without a defensible physical relationship | Economic or another relationship is permitted only after documenting why subdivision, system expansion, and physical allocation are infeasible. Report the prices, reference period, currency basis, allocation shares, and sensitivity to the next plausible method. | `eu-2021-environmental-footprint-method` |
| `allocation_internal_recycling` | Carbon dust, offcuts, pitch, and internal intermediates returned within the site | Treat same-site return as an internal transfer: subtract it from external waste and new purchased input only through a transparent mass balance. Do not award an avoided-production credit or count the same returned mass as both waste and input. | `eu-2021-environmental-footprint-method` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_purchased_material_mass` | `material_preparation_and_forming` | Purchased needle coke, natural graphite, artificial graphite, carbon black, coal-tar-pitch binder, phenolic resin, and copper powder | Scale tickets, batch recipes, inventory issues, supplier certificates | material identity; supplier; lot; gross mass; tare; net mass; moisture or solids; returned mass; accepted output lot | Reconcile calibrated scales and recipe issues to accepted production lots | kg | Each batch, aggregated monthly | At least 12 representative consecutive months or the complete campaign for campaign products | All production lines and shifts making the declared product | Sum net charged mass less documented same-process return; divide by net accepted reference-product mass | Scale calibration; signed batch record; supplier certificate; inventory reconciliation; mass-balance variance |
| `cp_stage_electricity` | all foreground manufacturing processes | Purchased electricity by process stage | Utility meter and stage submeter records; furnace or equipment runtime where allocation is necessary | meter id; start/end readings; unit; process stage; batch; runtime; allocation driver; on-site generation; exported energy | Prefer stage submeters; otherwise allocate site electricity using auditable causal equipment or furnace records | kWh and MJ | Continuous or each batch, aggregated monthly | At least 12 representative consecutive months or the complete campaign | All included lines, utilities, and directly attributable controls | Subtract exported and unrelated electricity; convert kWh to MJ by 3.6; allocate and divide by net accepted reference-product mass | Meter calibration; utility invoices; submeter coverage map; allocation reconciliation |
| `cp_process_water` | `material_preparation_and_forming`; `machining_and_assembly` | Process-water input and net closed-loop make-up | Calibrated water meters, tank records, or supplier invoices | meter id; volume or mass; temperature; density if converted; purpose; process; recirculation; blowdown; batch | Meter net water crossing the process boundary and reconcile recirculation | kg | Continuous or daily, aggregated monthly | At least 12 representative consecutive months or the complete campaign | All included wet forming, cooling, washing, machining, and dust-control operations | Convert only with documented density; exclude recirculated volume; divide net make-up by net accepted reference-product mass | Meter calibration; water balance; density record; invoice reconciliation |
| `cp_internal_intermediate_mass` | all foreground manufacturing processes | Green, heat-treated, rebaked, and graphitized internal article transfers | Batch traveller, calibrated scale, production execution record | product family; lot; stage; gross mass; tare; accepted mass; reject mass; destination; cycle count | Weigh accepted internal transfers at each declared stage | kg | Each batch | Complete production campaign or representative 12-month period | Every included process stage | Sum accepted transfer mass by route and reconcile stage inputs, outputs, rejects, and work in progress | Scale calibration; batch genealogy; route reconciliation; signed release record |
| `cp_carbon_waste_mass` | `material_preparation_and_forming`; `machining_and_assembly` | Carbon/graphite dust and offcuts leaving the site | Waste container scale ticket, manifest, internal return record | waste identity; composition; source stage; gross/tare/net mass; destination; treatment; internal return | Weigh each external waste movement and reconcile same-site return separately | kg | Each shipment, aggregated monthly | Same period as production data | All included dust collectors, screening rejects, offcuts, and machining rejects | Sum external net waste; exclude documented internal return; divide by net accepted reference-product mass | Scale ticket; waste manifest; composition evidence; internal return ledger; mass balance |
| `cp_stage_natural_gas` | `thermal_consolidation`; `pitch_impregnation_and_rebaking` | Gaseous natural gas combusted by included furnaces | Stage gas meters, supplier invoices, furnace batch logs | meter id; volume; temperature; pressure; heating value; composition; furnace; batch; start/end readings | Prefer stage metering and reconcile to supplier totals | m3 | Each batch or continuous, aggregated monthly | At least 12 representative consecutive months or the complete campaign | All included thermal and rebaking furnaces | Sum volume at one declared reference condition; allocate by causal furnace record; divide by net accepted reference-product mass | Meter calibration; supplier statement; reference-condition conversion; invoice reconciliation |
| `cp_impregnation_material_mass` | `pitch_impregnation_and_rebaking` | Coal-tar-pitch impregnant | Tank receipts, issue records, batch logs, recovery records | pitch grade; lot; gross input; recovered return; disposal; impregnation cycle; treated article mass | Reconcile pitch tank and batch records for all cycles | kg | Each impregnation batch | Complete included impregnation campaign | All impregnation and pitch-recovery systems serving the declared product | Sum purchased mass consumed net of documented same-process return; divide by net accepted reference-product mass | Tank calibration; supplier certificate; cycle log; pitch balance |
| `cp_direct_fossil_co2` | `thermal_consolidation`; `pitch_impregnation_and_rebaking` | Direct fossil carbon dioxide | Validated stack measurement or fuel and process-carbon balance | stack flow and concentration or fuel volume; fuel carbon content; oxidation factor; pitch/resin carbon input; retained carbon; measured carbonaceous waste; period | Use validated direct measurement where representative; otherwise apply the documented site carbon-balance calculation | kg | Each test and monthly calculation | Same representative production period as activity data | All included stacks and fugitive capture points; exclude upstream supply emissions | Apply `calc_direct_fossil_co2`, allocate only by documented causal records, and divide by net accepted reference-product mass | Test report; instrument calibration; fuel certificate; carbon balance; independent reconciliation |
| `cp_finishing_material_mass` | `machining_and_assembly` | Copper wire incorporated into finished articles | Bill of materials, issue records, finished-part weights | wire grade; alloy; insulation; gross issue; return; scrap; accepted articles; attachment method | Reconcile bill of materials and net issues to accepted finished lots | kg | Each batch, aggregated monthly | Complete campaign or representative 12-month period | All assembly lines for the declared product | Sum incorporated mass net of return and scrap; divide by net accepted reference-product mass | Supplier certificate; scale calibration; bill-of-material revision; issue-return reconciliation |
| `cp_reference_product_mass` | `machining_and_assembly` | Quality-released finished product | Calibrated final scale and quality-release records | lot; product family; grade; gross mass; tare; net mass; rejects; packaging mass; release status | Weigh unpackaged accepted product and reconcile rejects and packaging separately | kg | Each released lot | Complete campaign or representative 12-month period | All included finishing and release lines | Sum net quality-released mass excluding removable packaging; set normalized output to exactly 1 kg | Scale calibration; quality certificate; packaging tare; batch reconciliation |
| `cp_wastewater_volume` | `machining_and_assembly` | Wastewater from wet machining, washing, or wet dust control | Calibrated effluent meter, tank transfer, treatment record | volume; temperature; process origin; suspended carbon; treatment state; destination; sampling result | Meter at transfer to treatment or discharge and sample according to the site control plan | m3 | Continuous or each transfer, aggregated monthly | Same period as production data | All included wet-finishing discharge points | Sum process-attributable wastewater volume and divide by net accepted reference-product mass | Meter calibration; water balance; transfer record; analytical report; treatment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | Every inventory row | Normalized amount = period quantity attributable to the declared product divided by net kg of quality-released unpackaged reference product in the same period | Attributable flow quantity; net accepted reference-product mass | Flow amount per 1 kg reference product |  |
| `calc_electricity_mj` | Electricity rows | MJ = metered kWh × 3.6; do not apply a heating-value factor to electricity | Metered kWh | Purchased electricity in MJ |  |
| `calc_internal_mass_balance` | Internal intermediates and carbon waste | Purchased carbonaceous and metallic input mass = finished product + externally transferred waste + direct measured mass releases + closing work in progress − opening work in progress − documented internally returned mass adjustment; investigate rather than force-close material gaps | Purchased materials; internal transfers; product; waste; direct mass releases; work in progress; internal return | Disclosed mass-balance variance by route and period |  |
| `calc_direct_fossil_co2` | `fossil_co2_thermal`; `fossil_co2_rebaking` | Prefer representative direct measurement. If calculated, sum fossil carbon oxidized from metered fuels and process carbon, multiply carbon mass by 44/12, subtract only carbon demonstrably retained in product, recovered internally, or transferred in measured wastes, and retain every site-specific factor and uncertainty. | Fuel amount and fossil carbon content; pitch/resin fossil carbon; oxidation evidence; retained product carbon; measured carbonaceous wastes | kg direct fossil CO2 per 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Product family, grade, specification, dimensions, apparent density, electrical property and test method, metal content, graphitization state, impregnation count, attachment state, and packaging exclusion shall be traceable to each represented lot. | Product specification; certificate of analysis or conformity; batch genealogy; test report |
| `dq_temporal_coverage` | Foreground activity data | Use at least 12 representative consecutive months unless production is campaign-based; for a campaign, include the complete campaign and disclose why it represents the reference year. | Dated meter extracts; batch register; production calendar; representativeness note |
| `dq_route_completeness` | Process map and conditional rows | Every actually performed stage and formulation input shall be included; every omitted conditional stage or row shall have an explicit not-applicable statement in the produced dataset, not a silent zero. | Route sheet; process-flow diagram; recipe; equipment list; inclusion checklist |
| `dq_mass_energy_reconciliation` | Material, waste, fuel, water, and electricity records | Reconcile stage records to site totals and investigate unexplained gaps. Do not force a balance by adding an unspecified material, utility, waste, or emission flow. | Reconciliation workbook; signed variance review; calibration and invoice records |
| `dq_upstream_compatibility` | Purchased-input datasets | Upstream datasets shall match flow identity, product state, property, unit group, geography, technology, and reference year or document the limitation and conversion. | Dataset metadata; supplier data; conversion record; limitation statement |
| `dq_uuid_status` | UUID-bearing and unresolved flows | Use only audited state-100 UUIDs shown in this PCR. Preserve all unresolved rows as explicit concrete flows until an exact public identity is audited; do not substitute a proxy. | UUID audit receipt; unresolved-flow register; review decision |
| `dq_range_status` | Important flows | Foreground records remain mandatory. No external empirical ranges are asserted by this version; retain the unresolved range-evidence needs until at least two independent, original-text-verified, boundary-compatible sources support synthesis. | Manifest unresolved range-evidence register; source-review record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | Product identity and reference flow | Reject a package that lacks any required qualifier, includes removable packaging in the 1 kg reference mass, uses a non-mass reference property, or claims category-wide service equivalence without a performance- and lifetime-equivalent functional unit. | `un-cpc-3-0-2025`; `eu-2021-environmental-footprint-method` |
| `validate_route_and_atomic_inventory` | Process map and inventory | Confirm one actual product route; match every included detailed process to the process map; require each exchange to be one atomic physical, chemical, waste, or energy flow; reject umbrella flows and silent zeros for conditional stages. | `mersen-carbon-brush-technical-guide`; `resonac-graphite-electrode-process` |
| `validate_units_and_uuid` | Flow identity and measurement | Confirm every UUID, flow type, property, unit group, and Chinese display name against the audited identity. Reject proxy UUIDs, unrecorded density conversions, mixed gas reference conditions, or electricity not normalized in MJ. |  |
| `validate_no_double_counting` | Upstream and foreground emissions, internal recycling, and allocations | Reject double counting of upstream electricity or fuel-supply emissions as direct site emissions, counting the same internal return as both waste and input, or allocating shared burdens without the required hierarchy and disclosure. | `eu-2021-environmental-footprint-method` |
| `validate_completeness_and_quality` | Foreground period and reconciliation | Confirm temporal coverage, production denominator, meter and scale calibration, route completeness, mass and energy reconciliation, waste destinations, wastewater state, and direct-emission method. Report unresolved UUIDs and range-evidence needs as limitations. | `eu-2021-environmental-footprint-method` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for one declared finished electrical-carbon product and route |
| downstream_use | May be published after review as a `secondary_dataset` and used as a `background_dataset` only for studies whose product family, grade, route, geography, technology, reference year, and factory-gate boundary are compatible |
| allowed_use | Cradle-to-factory-gate modelling of the declared product; supplier comparisons after methodological and performance equivalence is established; downstream product-system modelling with transparent upstream links |
| excluded_use | Direct comparison across carbon electrodes, brushes, lamp carbons, or battery carbons without equivalent electrical performance and lifetime; modelling graphite powder active material, complete batteries, non-electrical carbon articles, use-stage consumption, packaging, distribution, or end-of-life without an explicit boundary extension |
| required_metadata | PCR id and version; product family and grade; product specification; dimensions; apparent density; electrical property and test method; formulation classes; metal content; graphitization and impregnation route; furnace technology; attachments; recycled content; site and geography; reference year and period; upstream datasets; allocation; internal recycling; direct-emission method; wastewater treatment; packaging exclusion; unresolved UUID and range limitations |
| required_quality_disclosure | Primary-data share; temporal, geographical, and technological representativeness; meter and scale coverage; allocation shares and sensitivity; mass and energy reconciliation; data gaps; proxy prohibition; unresolved UUIDs; absence of external empirical ranges; upstream dataset limitations |
| update_trigger | New exact public UUID for the reference product or unresolved flow; two-source range synthesis; material change in formulation, product family, furnace or graphitization technology, energy supply, site geography, allocation, direct-emission control, wastewater treatment, or product specification; revised classification or governing method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure*, row 46950, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official English classification identity only; not methodology or range evidence |
| `usitc-small-diameter-graphite-electrodes-2009` | `official_guidance` | U.S. International Trade Commission, *Small Diameter Graphite Electrodes from China*, Publication 4062, 2009. https://www.govinfo.gov/content/pkg/GOVPUB-ITC1-PURL-gpo14561/pdf/GOVPUB-ITC1-PURL-gpo14561.pdf (retrieved 2026-09-04) | Original-text-verified graphite-electrode stages, conditional pitch impregnation, finishing, and packaging boundary context; no quantitative range inferred |
| `mersen-carbon-brush-technical-guide` | `handbook` | Mersen, *Carbon Brushes for Motors and Generators*. https://www.mersen.com/sites/default/files/files_imported/2-ptt-carbon-brush-technical-guide-mersen.pdf (retrieved 2026-09-04) | Original-text-verified natural/artificial graphite, thermosetting-resin, metal-graphite, pressing, polymerization, heat treatment, and finishing variants; no quantitative range inferred |
| `resonac-graphite-electrode-process` | `extension_guidance` | Resonac Graphite Japan Corporation, *The Manufacturing Process of Graphite Electrodes*. https://www.rgj.resonac.com/en/products/summary.html (retrieved 2026-09-04) | Original-text-verified needle-coke and pitch preparation, extrusion, baking, impregnation, rebaking, electrically heated graphitization, and machining process decomposition; no quantitative range inferred |
| `eu-2021-environmental-footprint-method` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-04) | Original-text-verified system-boundary, multifunctionality/allocation hierarchy, data quality, materiality, and validation disclosure rules |
