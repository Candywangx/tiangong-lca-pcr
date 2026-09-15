---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.granules-and-powders-of-pig-iron-and-spiegeleisen-or-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Granules and powders, of pig iron and spiegeleisen, or steel

## 1. Scope and Applicability

This PCR applies to gate-to-gate production of dry, saleable granules or powders made from pig iron, spiegeleisen, or steel. It covers the route actually operated in the reporting campaign: water, gas, or air atomization; mechanical comminution; or cut-wire granulation, followed as applicable by recovery, drying, classification, and internal recycling. The boundary begins with received metallic feedstock, atomizing media, and purchased electricity at the site gate and ends with dry bulk product after final classification.

The PCR excludes direct-reduced or sponge iron, ferro-alloy powders other than spiegeleisen, ferrous scrap and machining residues sold as waste, radioactive iron powder, medicinal products, downstream compaction, sintering, additive manufacturing, coating, packaging, transport, use, and end-of-life. Packaging is outside the default boundary; if a declared study includes it, each packaging component must be added as its own atomic exchange.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.granules-and-powders-of-pig-iron-and-spiegeleisen-or-steel` |
| classification_refs | CPC 3.0 `41117`, exact |
| covered_products | Dry, saleable granules and powders of pig iron, spiegeleisen, or steel, including shot and angular grit meeting the declared product specification |
| excluded_products | Direct-reduced or sponge iron; ferro-alloy powders other than spiegeleisen; scrap filings, turnings, and other wastes; radioactive or medicinal iron powders; compacted, sintered, coated, or otherwise downstream-fabricated articles |
| representative_product | Dry steel powder, with grade, particle-size distribution, morphology, and route declared |
| production_route | The one route actually operated: water, gas, or air atomization; mechanical comminution; or cut-wire granulation, with applicable recovery, drying, classification, and internal recycling |
| market_state | Dry bulk material at the factory gate, before packaging |

The official CPC leaf establishes the classification identity but does not by itself define a production technology. The declared material family, route, grade, dry state, morphology, and particle-size specification shall therefore accompany every reference flow.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dry, saleable granules or powder of pig iron, spiegeleisen, or steel meeting the declared specification |
| How much | 1,000 kg dry product |
| How well | Conforming product after final recovery, drying, and classification; grade, route, morphology, and particle-size distribution declared |
| How long or cycle | One representative production campaign within the reporting period |
| reference_flow_link | Process `granule_powder_production`, output row `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 |
| Reference product flow | Steel powder, dry |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Material family; alloy or grade; production route; dry product state; morphology; particle-size distribution and test method; site geography; production period; recycled-content accounting; moisture correction method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_dry_product_mass` | `reference_product`, metallic inputs, dry solid wastes, and mass emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh on calibrated scales. Report product and particulate solids on a dry-mass basis; retain measured wet mass, sampling time, moisture fraction, and drying method. |
| `measure_particle_size` | Reference product identity | Particle-size distribution | µm or mm | Report the test method, sieve or equivalent cut points, and retained/passing fractions. For customs-identity screening, granules have less than 90% by mass passing 1 mm and at least 90% passing 5 mm; powders have at least 90% passing 1 mm. Product specifications remain controlling. |
| `measure_electricity` | `electricity_input` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve raw meter readings and meter boundaries. When raw records are in kWh, apply the documented physical conversion 1 kWh = 3.6 MJ without changing the supply boundary. |
| `measure_liquids` | `demineralized_water_input` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use calibrated meters or tank mass/volume records; disclose temperature or density conversion when mass is converted to volume. |
| `measure_gases` | `natural_gas_input`, `industrial_oxygen_input`, `nitrogen_gas_input`, `argon_gas_input`, `compressed_air_input` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report supplied volume at the meter reference temperature and pressure; do not combine different gases or pressure levels. |
| `measure_pm10` | `pm10_air` | Mass | kg | Use a site-specific stack or fugitive-emission measurement or calculation. Document concentration, gas volume, capture efficiency, operating time, receiving compartment, and emission height. |
| `account_internal_recycle` | Returned oversize, undersize, and collected powder | Mass | kg | Record gross generation and return separately. Do not count an internal return as an external input or output; disclose purge and external transfer separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Metallic feedstock, atomizing media, and electricity received by the reporting facility |
| starting_condition_role | Upstream product inputs to the foreground production campaign |
| product_classification_scope | CPC 3.0 `41117` dry granules and powders of pig iron, spiegeleisen, or steel |
| recursive_input_rule | Upstream production of purchased feedstock, electricity, water, and gases is represented by linked upstream datasets, not reconstructed inside this foreground process |
| upstream_dataset_requirement | Use geographically and technologically representative supplier or market datasets and disclose any proxy; do not replace a missing exact flow with a differently named UUID |
| disclosure | Declare the operated route, material family and grade, site, reporting period, product moisture basis, internal recycle accounting, pollution-control boundary, and any optional packaging inclusion |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground production campaign | Include receipt and preparation of feedstock; route-specific melting or conditioning; atomization, comminution, or wire cutting; recovery; drying; classification; internal recycle handling; and on-site pollution control used by the campaign. | `mathias-metal-powder-production-2024` |
| `boundary_route_specific` | Declared production route | Include only operations and atomic exchanges used by the declared route. A row whose inclusion condition is false is absent, not zero-filled. | `mathias-metal-powder-production-2024` |
| `boundary_recursive_input` | Purchased product inputs | Model purchased products at their point of receipt and link upstream supply datasets separately. |  |
| `boundary_packaging` | Packaging | Exclude packaging by default. If included for a study, add each material and component as a separate exchange and disclose the expanded boundary. |  |
| `boundary_emissions_and_waste` | Direct releases and external waste transfers | Include measured or calculated direct releases and every externally transferred atomic waste flow. Keep internal recycle loops within the process and report purges separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `granule_powder_production` | Ferrous granule or powder production campaign | required | Always include; populate only the atomic rows applicable to the one route actually operated | Aggregate gate-to-gate foreground process | 1,000 kg dry conforming output in `reference_product` |

### Process: Ferrous granule or powder production campaign (`granule_powder_production`)

#### Inputs

##### Product flows

###### Pig-iron feedstock (`pig_iron_feedstock`)

Pig iron received in pigs crosses the site boundary as metallic feedstock when the declared product is made from pig iron.

- Selected flow: Pig iron, in pigs
- Flow property / unit: Mass / kg
- Amount rule: Measure the dry received mass charged to the campaign; include only when pig iron is an actual feedstock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `un-cpc-3-0-2025`, `uk-hmrc-iron-steel-classification-2022`

###### Spiegeleisen feedstock (`spiegeleisen_feedstock`)

Spiegeleisen received in pigs crosses the site boundary as metallic feedstock only for a declared spiegeleisen product or blend.

- Selected flow: Spiegeleisen, in pigs
- Flow property / unit: Mass / kg
- Amount rule: Measure the dry received mass charged to the campaign; include only when spiegeleisen is an actual feedstock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `un-cpc-3-0-2025`, `uk-hmrc-iron-steel-classification-2022`

###### Steel-ingot feedstock (`steel_ingot_feedstock`)

Steel ingot crosses the site boundary as the metallic feedstock for an atomized or mechanically comminuted steel-powder route when used.

- Selected flow: Steel ingot
- Flow property / unit: Mass / kg
- Amount rule: Measure the dry received mass charged to the campaign; include only when steel ingot is an actual feedstock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `mathias-metal-powder-production-2024`

###### Steel-wire feedstock (`steel_wire_feedstock`)

Steel wire crosses the site boundary as the metallic feedstock only for a cut-wire granule route.

- Selected flow: Steel wire
- Flow property / unit: Mass / kg
- Amount rule: Measure the dry received wire mass allocated to the campaign; include only for cut-wire production.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `uk-hmrc-iron-steel-classification-2022`

###### Alternating-current electricity (`electricity_input`)

Purchased alternating-current electricity crosses the site boundary for the equipment used by the production campaign.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sum campaign-attributable interval or submeter records; disclose voltage, provider, geography, supply technology, delivery boundary, and treatment of line losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources:

###### Gaseous natural gas (`natural_gas_input`)

Gaseous natural gas crosses the site boundary only when it is consumed by direct-fired melting, preheating, drying, or heat-treatment equipment attributable to the campaign.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Meter or reconcile purchased natural gas at the stated reference temperature and pressure; include only the quantity attributable to the campaign and disclose the combustion equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_media`
- Sources:

###### Industrial oxygen (`industrial_oxygen_input`)

Industrial oxygen crosses the site boundary only when oxygen enrichment or oxy-fuel operation is used by campaign-attributable melting or heating equipment.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Meter or reconcile purchased oxygen at the stated reference temperature and pressure; include only when used and disclose the consuming equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_media`
- Sources:

###### Demineralized water (`demineralized_water_input`)

Demineralized water crosses the site boundary only when consumed as the atomizing or conditioning liquid in the declared water-atomization route.

- Selected flow: Demineralized water
- Flow property / unit: Volume / m3
- Amount rule: Meter net make-up water attributable to the campaign; exclude internally recirculated water from external input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_media`
- Sources: `mathias-metal-powder-production-2024`

###### Nitrogen gas (`nitrogen_gas_input`)

Gaseous nitrogen crosses the site boundary only when used as the atomizing or protective gas in the declared route.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: Meter or reconcile purchased nitrogen at the stated reference temperature and pressure; include only when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_media`
- Sources: `mathias-metal-powder-production-2024`

###### Argon gas (`argon_gas_input`)

Gaseous argon crosses the site boundary only when used as the atomizing or protective gas in the declared route.

- Selected flow: Argon, gaseous
- Flow property / unit: Volume / m3
- Amount rule: Meter or reconcile purchased argon at the stated reference temperature and pressure; include only when used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_media`
- Sources: `mathias-metal-powder-production-2024`

###### Compressed air (`compressed_air_input`)

Compressed air crosses the site boundary only when purchased or centrally supplied to the air-atomization route and not already included in another site energy record.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Meter delivered air at the stated reference temperature and pressure; disclose compressor boundary and avoid double counting its electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_media`
- Sources: `mathias-metal-powder-production-2024`

##### Waste flows

No waste crosses the boundary as an input in the default process.

##### Elementary flows

No elementary flow crosses the boundary as an input in the default process.

#### Outputs

##### Product flows

###### Dry saleable steel powder (`reference_product`)

The representative reference product crosses the factory gate after recovery, drying, and final classification. For pig-iron, spiegeleisen, or granule datasets, replace the representative name only with the exact declared product while preserving the row id and reference-flow rules.

- Selected flow: Steel powder, dry
- Flow property / unit: Mass / kg
- Amount rule: Fix at 1,000 kg dry conforming output; measure gross production and moisture correction before normalization.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-3-0-2025`, `uk-hmrc-iron-steel-classification-2022`, `mathias-metal-powder-production-2024`

##### Waste flows

###### Off-specification steel powder (`off_spec_steel_powder`)

Dry off-specification powder crosses the boundary as waste only when it is transferred externally rather than returned internally to production.

- Selected flow: Steel powder waste, off-specification
- Flow property / unit: Mass / kg
- Amount rule: Weigh dry externally transferred off-specification powder; exclude recorded internal recycle and include only when generated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfers`
- Sources:

###### Iron-bearing atomization sludge (`atomization_sludge`)

Iron-bearing sludge crosses the boundary only when water-atomization solids are removed and transferred externally.

- Selected flow: Iron-bearing water-atomization sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet transfer mass and representative dry-solids fraction; report dry solids and disclose wet mass separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfers`
- Sources:

##### Elementary flows

###### PM10 emission to air (`pm10_air`)

Direct particulate matter smaller than 10 µm crosses the boundary to the receiving air compartment after the applicable control device.

- Selected flow: Particulate matter, <10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Use site-specific measured or calculated post-control PM10 attributable to the campaign; report stack and fugitive releases separately in supporting records and disclose emission height.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pm10_monitoring`
- Sources:

###### Fossil carbon dioxide emission to air (`fossil_co2_air`)

Fossil carbon dioxide from on-site combustion crosses the boundary to air only when fossil natural gas or another separately recorded fossil fuel is combusted in campaign-attributable equipment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate campaign-attributable fossil carbon dioxide from measured fuel consumption and documented fuel carbon content or direct stack evidence; exclude biogenic carbon dioxide and upstream fuel-supply emissions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fossil_co2`
- Sources:

###### Iron emission to water (`iron_to_water`)

Iron crosses the elementary-flow boundary to the receiving water compartment only when a measured campaign-attributable aqueous discharge remains after the treatment included within the foreground boundary.

- Selected flow: Iron, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged iron mass from the site-specific iron concentration and non-overlapping net effluent volume for the campaign; disclose dissolved or total-iron method, receiving compartment, and treatment boundary.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg dry conforming product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_iron_to_water`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared foreground operations | Subdivide campaigns by material family, alloy or grade, route, and product size class whenever meters, batch records, or production records permit. |  |
| `allocation_internal_recycle` | Internal ferrous returns | Keep returned oversize, undersize, and recovered powder inside the process. Record gross generation, return, and purge; assign neither an external input nor an avoided-product credit to the internal loop. |  |
| `allocation_external_coproduct` | Multiple saleable outputs | If more than one saleable co-product remains after subdivision, use a documented physical causal relation where demonstrable; otherwise allocate by dry mass and disclose quantities, prices, and a sensitivity check rather than defaulting to economic allocation. |  |
| `allocation_no_waste_credit` | External waste transfers | Report externally transferred off-specification powder and sludge as waste outputs. Do not claim avoided-production credit inside this gate-to-gate process; model any receiving recycling system separately. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `granule_powder_production` | Metallic feedstock inputs | Scale, receipt, and batch records | material identity; supplier; grade; gross and tare mass; moisture; batch id | Reconcile receipts to campaign charge and inventory change | kg dry | Each receipt and batch | Complete reporting campaign | Reporting facility | Sum campaign-attributable dry mass by atomic feedstock row | Calibration record, receipt, batch reconciliation |
| `cp_electricity_meter` | `granule_powder_production` | `electricity_input` | Interval meter and invoice | start/end readings; interval; meter boundary; kWh; provider; voltage; losses | Submeter campaign equipment or allocate documented shared-meter use by operating time and rated load | kWh raw; MJ reported | Interval or batch | Complete reporting campaign | Reporting facility | Sum campaign-attributable readings, then convert to MJ | Meter calibration, invoice, allocation worksheet |
| `cp_process_media` | `granule_powder_production` | Water, fuel-gas, oxygen, and atomizing-gas inputs | Meter, tank, and purchase records | medium identity; volume; reference temperature; pressure; opening/closing stock; consuming equipment | Reconcile meters and purchases by medium; subtract internal recirculation and exclude quantities already represented by another utility record | m3 | Each batch or meter interval | Complete reporting campaign | Reporting facility | Sum separately for demineralized water, natural gas, industrial oxygen, nitrogen, argon, and compressed air | Meter calibration, delivery ticket, stock reconciliation |
| `cp_product_output` | `granule_powder_production` | `reference_product` | Product scale and laboratory records | gross/tare mass; moisture; grade; route; morphology; size distribution | Weigh each conforming lot and determine representative moisture and size distribution | kg dry | Each lot | Complete reporting campaign | Reporting facility | Sum conforming dry mass before normalization | Scale calibration, laboratory method, certificate of analysis |
| `cp_waste_transfers` | `granule_powder_production` | Solid waste outputs | Scale ticket, analysis, transfer manifest | waste identity; wet mass; dry-solids fraction; destination; date | Reconcile generated, internally returned, stored, and externally transferred quantities | kg dry | Each transfer | Complete reporting campaign plus opening/closing stock | Reporting facility | Sum external dry-solid transfer separately by waste row | Scale calibration, laboratory result, signed manifest |
| `cp_pm10_monitoring` | `granule_powder_production` | `pm10_air` | Stack test, monitoring, or engineering calculation | concentration; gas volume; operating time; capture efficiency; compartment; height | Calculate post-control campaign PM10 from site-specific measurements or documented factors | kg | Test and operating interval | Representative operation within reporting period | Reporting process and control device | Sum stack and fugitive results without double counting | Test report, instrument calibration, calculation sheet |
| `cp_fossil_co2` | `granule_powder_production` | `fossil_co2_air` | Fuel meter, fuel carbon analysis, carbon balance, or direct stack evidence | fuel volume; reference conditions; carbon content; oxidation basis; operating period | Reconcile campaign fossil-fuel use and calculate fossil carbon dioxide without mixing upstream or biogenic emissions | kg | Each batch or meter interval | Complete reporting campaign | Reporting process and combustion equipment | Sum non-overlapping campaign-attributable fossil carbon dioxide results | Meter calibration, supplier composition or analysis, calculation sheet |
| `cp_iron_to_water` | `granule_powder_production` | `iron_to_water` | Effluent flow and iron-concentration records | net volume; sampling period; dissolved or total iron concentration; treatment boundary; receiving compartment | Pair representative concentration with the corresponding non-overlapping discharge volume after in-boundary treatment | kg | Sampling and meter interval | Complete reporting campaign | Reporting process and included treatment | Sum concentration-times-volume results by discharge point without double counting | Flow-meter calibration, laboratory report, discharge log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = campaign amount × 1,000 / campaign dry conforming product mass | Campaign exchange and `reference_product` dry mass | Exchange per 1,000 kg dry product |  |
| `calc_product_dry_mass` | `reference_product` and dry solid rows | dry mass = measured wet mass × (1 − moisture mass fraction) | Wet mass, representative moisture fraction | kg dry |  |
| `calc_sludge_dry_solids` | `atomization_sludge` | dry solids = wet sludge mass × dry-solids mass fraction | Wet transfer mass, dry-solids fraction | kg dry solids |  |
| `calc_gas_mass` | Optional supporting disclosure for gas inputs | mass = metered reference volume × documented density at the same reference conditions | Volume, gas identity, temperature, pressure, density | kg supporting value |  |
| `calc_pm10_emission` | `pm10_air` | post-control PM10 = measured concentration × dry gas volume, or documented uncontrolled emission × (1 − capture efficiency); use one non-overlapping method per source | Site measurement or calculation inputs | kg PM10 |  |
| `calc_fossil_co2_emission` | `fossil_co2_air` | fossil carbon dioxide = measured fossil-fuel amount × documented carbon content × documented oxidation and molecular-mass conversion, or a non-overlapping direct stack result | Fuel amount, carbon content, oxidation basis, direct stack evidence if used | kg fossil carbon dioxide |  |
| `calc_iron_to_water` | `iron_to_water` | discharged iron mass = matched net effluent volume × measured dissolved or total iron concentration | Net effluent volume, iron concentration, sampling coverage | kg iron to water |  |
| `calc_mass_balance` | Campaign material balance | closure = (dry product + external dry solid outputs + documented dry stock increase) / (dry metallic inputs + documented dry stock decrease) | Metallic inputs, product, solid wastes, inventory changes | Dimensionless closure ratio |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Verify CPC identity and declare material family, grade, route, morphology, size distribution, and dry market state. | Product specification, certificate of analysis, CPC and customs boundary sources |
| `dq_route` | Process inventory | Demonstrate that every included conditional row was used by the declared route and every inapplicable row was omitted. | Process flow diagram, batch recipe, operating log |
| `dq_measurement` | Foreground quantities | Use calibrated meters or reconciled primary records; disclose estimation and allocation for shared meters. | Calibration certificates, records, reconciliation worksheet |
| `dq_temporal` | All foreground data | Cover a representative campaign and state reporting dates, downtime treatment, abnormal operation, and stock changes. | Production calendar and operating log |
| `dq_completeness` | Material, waste, and direct-emission rows | Reconcile feedstock, product, internal recycle, inventory change, external transfers, and direct releases; investigate material-balance gaps. | Signed mass-balance review and emissions reconciliation |
| `dq_range_evidence` | External QA ranges | Do not publish a numeric external range without two mutually independent original-text sources with compatible boundary, unit, and product state. | Source audit and independence keys, or unresolved range-evidence need |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_state` | Reference product and dataset metadata | Declare an in-scope ferrous granule or powder, its material family, grade, route, dry state, morphology, particle-size distribution, site, and reporting period. | `un-cpc-3-0-2025`; `uk-hmrc-iron-steel-classification-2022` |
| `validate_reference_amount` | Reference flow and all exchanges | Require `reference_product` to equal 1,000 kg on the documented dry-mass basis and all other quantities to use the same normalization. |  |
| `validate_atomic_inventory` | Process inventory | Require every exchange to be one concrete physical, chemical, waste, or energy flow; no combined utility, fuel, packaging, waste, wastewater, or emission category is present. |  |
| `validate_route_consistency` | Conditional inventory rows | Require only rows applicable to the one operated route; conditional rows are absent rather than populated with zero. | `mathias-metal-powder-production-2024` |
| `validate_mass_balance` | Campaign material balance | Reconcile metallic inputs, dry product, internal recycle, stock changes, and external solid outputs, and investigate and disclose unexplained gaps. |  |
| `validate_waste_and_emissions` | External wastes and direct releases | Require each external waste, direct air release, and direct water release to have a destination or receiving compartment, measurement or calculation evidence, and no double counting with internal recycle or control-device capture. |  |
| `validate_uuid_state` | TianGong references | Require every adopted TianGong UUID to be directly verified at public `state_code=100` for base name, language, type, classification, property, unit group, state, geography, technology, and comment; unresolved rows remain UUID-empty and appear in manifest review metadata. |  |
| `validate_source_provenance` | External evidence | Require final sources to resolve to verified original official or peer-reviewed text; discovery metadata and snippets are not evidence, and any external range satisfies the two-independent-source rule. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset for dry ferrous granules or powders |
| downstream_use | Link to upstream supply datasets and downstream product systems or lifecycle models after route and reference-flow validation |
| allowed_use | Product-specific LCA modeling when material family, grade, route, dry state, size specification, geography, period, and foreground evidence are compatible |
| excluded_use | Automatic proxy for direct-reduced iron, ferro-alloy powder other than spiegeleisen, scrap, fabricated powder-metal articles, or a route and state not represented by the dataset |
| required_metadata | Canonical PCR id; CPC code; product family and grade; route; dry state; morphology; size distribution and test method; site and geography; reporting period; reference amount; electricity supply qualifiers; internal recycle treatment; allocation; UUID audit status |
| required_quality_disclosure | Meter coverage, estimation and shared-meter allocation, mass-balance closure, moisture corrections, waste destinations, PM10 method, missing exact UUIDs, and unresolved range-evidence needs |
| update_trigger | Material change in feedstock or grade, production route, product size specification, site or electricity supply, pollution control, allocation, reference-flow UUID availability, or verified range evidence |

## 11. Data Sources

| source_id | type | reference | original_text_verified | used_for | independence_key |
| --- | --- | --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Structure* and *Explanatory Notes* (2025). [Structure CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); [Explanatory Notes PDF](https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf) | Yes—official CSV row and PDF hierarchy were read directly. | CPC 41117 identity, wording, and separation from adjacent primary iron forms | `unsd-cpc-ver-3-0-2025` |
| `uk-hmrc-iron-steel-classification-2022` | `official_guidance` | UK HM Revenue & Customs, [Classifying iron and steel](https://www.gov.uk/guidance/classifying-iron-and-steel), updated 7 March 2022 | Yes—the original official page was read directly. | Heading 7205 granule and powder particle-size boundary, cut-wire inclusion, pig iron and spiegeleisen definitions, and exclusions | `uk-hmrc-heading-7205-guidance-2022` |
| `mathias-metal-powder-production-2024` | `literature` | Mathias et al., “Metal powder as feedstock for laser-based additive manufacturing: From production to powder modification,” *Journal of Materials Research* 39, 19–47 (2024). [DOI 10.1557/s43578-023-01271-8](https://doi.org/10.1557/s43578-023-01271-8) | Yes—the peer-reviewed full text was read directly. | Production-route taxonomy; atomization sequence; water, air, nitrogen, argon, and other gas roles; recovery, drying, sieving, and post-processing | `mathias-et-al-jmr-2024` |
| `china-customs-tariff-2021` | `official_guidance` | Guangzhou Municipal Commerce Bureau-hosted official tariff annex, [2021 tariff PDF](https://sw.gz.gov.cn/attachment/6/6733/6733943/6989367.pdf) | Yes—the original official PDF page containing heading 72.05 was read directly. | Professional Chinese product title “生铁、镜铁及钢铁的颗粒和粉末” | `china-tariff-schedule-2021` |
