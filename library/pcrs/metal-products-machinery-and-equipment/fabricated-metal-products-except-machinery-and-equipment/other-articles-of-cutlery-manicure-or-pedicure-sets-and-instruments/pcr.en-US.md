---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.other-articles-of-cutlery-manicure-or-pedicure-sets-and-instruments
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other articles of cutlery; manicure or pedicure sets and instruments

## 1. Scope and Applicability

This PCR covers factory-gate production of non-powered base-metal other-cutlery articles and manicure or pedicure sets and instruments. Examples include paper knives, letter openers, erasing knives, pencil sharpeners and blades, nail files, nail clippers, cuticle nippers and pushers, supplied singly or as declared sets. The declared article or set must have a base-metal functional body; minor non-metal components may be present.

The boundary begins with purchased metal sheet, strip or another declared semi-finished metal at the manufacturing-site gate and ends with the conforming article or set and its sale packaging at the factory gate. Include forming, conditional heat treatment, grinding/polishing, conditional aqueous cleaning or surface treatment, assembly, packaging, direct emissions, scrap, wastewater and treatment residues. Purchased-input production is linked as upstream data. Distribution, retail, use, maintenance, end-of-life, capital equipment and buildings are excluded.

Razors and razor blades; separately classified knives and scissors; spoons, forks and similar kitchen or table ware; powered grooming equipment; manicure/pedicure preparations; and manufacturing, repair or trade services are excluded. `un-cpc-3-0-2025` establishes the CPC identity; `china-hainan-import-tax-list-2025` verifies professional Chinese product terminology and the distinction from table ware.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.other-articles-of-cutlery-manicure-or-pedicure-sets-and-instruments |
| classification_refs | CPC 3.0: 42915, exact classification context |
| covered_products | Non-powered base-metal other-cutlery articles and manicure/pedicure articles or sets |
| excluded_products | Razors; separately classified knives, scissors and kitchen/table ware; powered equipment; preparations; services |
| representative_product | All-metal stainless-steel manicure instrument or small set with ground/polished surfaces, applicable aqueous passivation, and corrugated-board sale packaging |
| production_route | Purchased stainless sheet/strip -> forming -> conditional heat treatment -> grinding/polishing -> conditional aqueous surface operation -> assembly/inspection -> packaging |
| market_state | Clean, dry, conforming finished article or declared set in sale packaging at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of the declared manually operated other-cutlery or manicure/pedicure article or set with specified functional surfaces and contents |
| How much | 1 kg net mass of conforming articles or set contents, excluding packaging |
| How well | Declared alloy, dimensions, set composition, hardness/performance, surface finish, corrosion protection, cleanliness and applicable specification |
| How long or cycle | One factory-gate production lot; service life is outside this gate-to-gate record |
| reference_flow_link | Same product as `final_product_output`; packaging is inventoried separately |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product |
| Reference product flow | Other articles of cutlery, manicure or pedicure sets and instruments `b5ddb141-e885-4a62-98fa-8249518d609c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article function; single article or set and contents; net mass; alloy and mass composition; dimensions; hardness/performance; finish and coating/passivation route; packaging composition/mass; site/geography; technology; period; reject treatment |

All required qualifiers must be declared in dataset metadata, process notes, reference-flow comments, product description or equivalent fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh conforming article/set contents without packaging and normalize all inventory to 1 kg net product. |
| `set_mass_conversion` | item/set records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert with same-product, same-period measured mean net mass; retain sample size, calibration and variability. |
| `electricity_conversion` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Retain raw kWh and convert using 1 kWh = 3.6 MJ; never combine electricity and fuel. |
| `solution_mass_basis` | alkali and acid | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report purchased solution mass and concentration separately; active mass is supplementary unless the linked dataset requires it. |
| `waste_wet_dry_basis` | wastewater/sludge | Mass | kg | State wet, dry or as-received basis and retain density, moisture or solids evidence for conversions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased semi-finished metal received with alloy, geometry, mass, supplier and delivery state identified |
| starting_condition_role | Factory-gate product input to foreground forming |
| product_classification_scope | Physical CPC 42915 articles/sets, excluding services |
| recursive_input_rule | Record any CPC 42915 component, repair input or return as a separate product input with its own upstream dataset; do not absorb prior production recursively |
| upstream_dataset_requirement | Link representative datasets for metal, chemicals, abrasive, water, electricity, gas, packaging and outsourced operations; disclose substitutions |
| disclosure | Declare material, product/set configuration, unit operations, outsourced work, surface chemistry, packaging, waste destinations, allocation and period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | all processes | Include exchanges from receipt of semi-finished metal through packaged conforming product, including direct emissions and wastes. | `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003` |
| `boundary_conditional_routes` | heat/surface routes | Include each route only when used; otherwise document not-applicable production evidence rather than a zero amount. | `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003` |
| `boundary_outsourced_operations` | outsourced work | Keep outsourced forming, treatment, finishing or packaging inside the system using supplier or representative process data. | `eu-pef-method-2021` |
| `boundary_no_cutoff_by_cost` | all flows | Do not omit a flow solely for low financial value; quantify or bound and justify exclusions for mass, energy and environmental relevance. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Material preparation and forming | `required` | Include actual cutting, blanking, stamping or shaping | Foreground conversion | 1 kg net product |
| `heat_treatment` | Heat treatment | `conditional` | Include when controlled heating/cooling changes properties | Thermal treatment | 1 kg treated net product |
| `grinding_polishing` | Grinding and polishing | `required` | Include actual deburring, sharpening, grinding, polishing or buffing | Removing/finishing | 1 kg net product |
| `aqueous_surface` | Aqueous cleaning and surface treatment | `conditional` | Include when aqueous cleaning, passivation, pickling or chemical/electrochemical treatment is used | Surface operation | 1 kg routed net product |
| `assembly_packaging` | Assembly, inspection and packaging | `required` | Include final assembly if any, inspection and sale packaging | Final completion | 1 kg net product |

### Process: Material preparation and forming (`forming`)

#### Inputs

##### Product flows

###### Stainless-steel sheet or strip (`stainless_steel_sheet_input`)

Record representative-route purchased stainless sheet/strip; declare grade, thickness, delivery state and supplier. Another alloy requires its own exact foreground flow.

- Selected flow: Stainless-steel sheet or strip
- Flow property / unit: Mass / kg
- Amount rule: Purchased mass issued minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`

###### Forming electricity (`electricity_forming`)

Record metered electrical energy for cutting and forming separately from fuel.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Attributable metered kWh converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated forming scrap (`steel_scrap_forming`)

Record cut-outs and offcuts leaving forming before any downstream recycling credit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed as-received segregated scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`

##### Elementary flows

### Process: Heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Natural gas for heat treatment (`natural_gas_heat`)

Measure gaseous natural gas consumed by fuel-fired heat-treatment equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Attributable metered volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product receiving fuel-fired heat treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`

###### Heat-treatment electricity (`electricity_heat`)

Measure electricity consumed by furnaces, controls and attributable heat-treatment auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Attributable metered kWh converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product receiving heat treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_co2_heat`)

Record on-site combustion CO2 separately from upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Monitored CO2 or calculation from metered gas and documented site/period fuel-carbon data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg product receiving fuel-fired heat treatment
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`

### Process: Grinding and polishing (`grinding_polishing`)

#### Inputs

##### Product flows

###### Grinding and polishing electricity (`electricity_grinding`)

Measure electricity attributable to grinding, sharpening, deburring and polishing operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Attributable metered kWh converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003`

###### Process water for wet grinding or rinsing (`process_water_grinding`)

Measure process water supplied to wet grinding and its attributable rinsing steps.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or batch-calculated water attributable to wet grinding/rinsing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product receiving the wet route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-mpm-2003`

###### Alumina abrasive (`alumina_abrasive`)

Declare grade, grit, compound/carrier and documented reuse.

- Selected flow: alumina `7bdf8e03-06f3-4377-bd78-ec92647a53ab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased alumina issued minus documented unused return/reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-mpm-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Metal-and-abrasive grinding sludge (`grinding_sludge_output`)

Measure the dewatered metal-and-abrasive sludge leaving wet grinding or polishing treatment.

- Selected flow: Metal-and-abrasive grinding sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge, retaining moisture/solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `us-epa-mpm-2003`

##### Elementary flows

###### Metal-grinding particulate matter to air (`grinding_particulate_output`)

Record emissions after controls with measured fraction and actual compartment; the UUID remains unresolved rather than using a PM-fraction proxy.

- Selected flow: Metal-grinding particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Validated exhaust measurement attributable to grinding/polishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grinding_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`

### Process: Aqueous cleaning and surface treatment (`aqueous_surface`)

#### Inputs

##### Product flows

###### Surface-operation process water (`process_water_surface`)

Measure water supplied to cleaning, pickling, passivation and their attributable rinses.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered/batch-calculated water entering baths, cleaning and rinses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product receiving aqueous operations
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide_surface`)

Measure sodium hydroxide as purchased and retain solution concentration as foreground metadata.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased solution/solid issued, with concentration and unused return documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product receiving alkaline cleaning
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-mpm-2003`

###### Nitric acid for passivation or pickling (`nitric_acid_surface`)

Do not substitute hydrochloric acid; retain purchased concentration.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Purchased nitric-acid solution issued minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product receiving the nitric-acid route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-mpm-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Contaminated metal-finishing wastewater (`finishing_wastewater_output`)

Measure the contaminated wastewater transferred from aqueous surface operations to treatment.

- Selected flow: Contaminated metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered volume times measured density, or directly weighed discharge, sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg product receiving aqueous operations
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003`

###### Metal-hydroxide treatment sludge (`metal_hydroxide_sludge_output`)

Measure dewatered metal-hydroxide sludge generated by on-site wastewater treatment.

- Selected flow: Metal-hydroxide treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed attributable sludge with wet/dry basis and solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg product receiving aqueous operations
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-mpm-2003`

##### Elementary flows

### Process: Assembly, inspection and packaging (`assembly_packaging`)

#### Inputs

##### Product flows

###### Assembly and packaging electricity (`electricity_assembly`)

Measure electricity attributable to assembly, inspection and sale-package preparation.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Attributable metered kWh converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`

###### Corrugated-board sale boxes (`corrugated_box_packaging`)

Additional packaging components require separate concrete flow cards in the foreground package.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Bill-of-material or packaging-issue box mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `eu-jrc-fabricated-metal-products-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished product (`final_product_output`)

Report only conforming CPC 42915 articles or sets at the declared factory-gate state.

- Selected flow: Other articles of cutlery, manicure or pedicure sets and instruments `b5ddb141-e885-4a62-98fa-8249518d609c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed output of 1 kg net conforming product, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared operations | Subdivide and use product-code meters/batch records so only attributable exchanges are assigned. | `eu-pef-method-2021` |
| `allocation_physical_driver` | remaining shared operations | Use a documented causal physical driver such as metered energy, treatment time or processed mass; validate it and retain sensitivity. | `eu-pef-method-2021` |
| `allocation_other_relationship` | no defensible physical driver | Use another relationship, including economic value only last, and disclose rejected alternatives, data and sensitivity. | `eu-pef-method-2021` |
| `allocation_scrap_boundary` | scrap/residues | Report factory-gate waste outputs without avoided-production credit; apply any downstream recycling model once and disclose it. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_records` | `forming` | metal, electricity, scrap | issue/return ledger; scales; submeters | product/lot; alloy; issued/returned kg; kWh; scrap kg/destination; time | Reconcile stock, scales and meters by lot | kg; kWh | lot/month | representative 12 months or complete campaign | all relevant lines | Sum included lots / net product kg | calibration; stock reconciliation; scrap tickets |
| `cp_heat_records` | `heat_treatment` | gas, electricity, CO2 | meters; furnace logs; fuel/emission records | batch; treated kg; gas m3/conditions; kWh; carbon factor/monitored CO2; time | Dedicated meters or validated furnace driver; monitored or collected-data CO2 | m3; kWh; kg | batch/month | representative 12 months or complete campaign | all relevant routes | Sum route exchanges / routed product kg | calibration; furnace log; gas specification; emission QA |
| `cp_grinding_records` | `grinding_polishing` | electricity, water, alumina, sludge, particulate | meters; issue ledger; manifests; air monitoring | lot; kWh; water kg; alumina issue/return; sludge/solids; particulate/fraction/compartment; time | Meter, reconcile, weigh and monitor atomic exchanges | kWh; kg | shift/lot/month | representative 12 months or complete campaign | all relevant equipment | Sum included lots / net product kg | calibration; stock record; manifest; sampling/control record |
| `cp_surface_records` | `aqueous_surface` | water, chemicals, wastewater, sludge | bath/issue logs; meters; analyses; manifests | product/bath; water; chemical/solution mass/concentration; wastewater volume/density; sludge/solids; route; time | Reconcile bath/chemical records; meter water/discharge; measure density/solids | kg; m3; fraction | bath/lot/month | representative 12 months or complete campaign | all on-site/outsourced routes | Assign by bath throughput or validated driver / routed product kg | calibration; certificate; bath log; analysis; manifest |
| `cp_assembly_records` | `assembly_packaging` | electricity, boxes, product | meter; packaging BOM/issue; final scale/inspection | lot; kWh; box code/count/unit mass; conforming/rejected kg; time | Meter, reconcile packaging and weigh net output | kWh; kg | lot/month | representative 12 months or complete campaign | all final lines | Sum / net product kg | calibration; BOM; release/lot reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | normalized amount = period exchange / period net conforming mass | exchange; final mass | amount per kg |  |
| `calc_electricity_mj` | electricity | MJ = kWh x 3.6 | kWh | MJ |  |
| `calc_fossil_co2` | `fossil_co2_heat` | Prefer quality-assured monitoring; otherwise metered fuel x documented site/period fossil-carbon factor; exclude upstream emissions | gas; factor or monitoring | direct fossil CO2 |  |
| `calc_solution_active_mass` | acid/alkali supplementary reporting | active mass = solution mass x certified/measured fraction; inventory retains solution mass unless linked dataset requires active mass | solution mass; fraction | active mass |  |
| `calc_wastewater_mass` | wastewater | mass = metered volume x measured density | volume; density | kg |  |
| `calc_metal_mass_balance` | route | net metal input = product metal + scrap + metal in residues + WIP change; investigate residual | input; composition; scrap; residue analyses; WIP | balance/residual | `eu-jrc-fabricated-metal-products-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | product | Retain code, contents, mass, specification revision, alloy, performance and finish for every lot. | BOM; specification; inspection; traceability |
| `dq_temporal` | all data | Use representative 12 months, or capture all lots and disclose seasonality/abnormal events for a shorter campaign. | dated production, utility, maintenance and waste records |
| `dq_measurement` | measured rows | Use calibrated instruments; document resolution, shared-meter allocation and uncertainty. | certificates; meter map; worksheets |
| `dq_completeness` | all processes | Reconcile material, product, scrap, wastewater/residue and explain exclusions/estimates without merging atomic flows. | balance; checklist; manifests; stock reconciliation |
| `dq_supplier_data` | purchased/outsourced | Use supplier-specific or representative upstream data; disclose geography, technology, age, substitution and limits. | supplier declarations; dataset metadata; substitution log |
| `dq_surface_chemistry` | surface route | Retain chemical identity, concentration, bath make-up/discharge; never infer one chemical from a total. | SDS; certificate; bath log; purchase ledger |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | reference flow | Confirm exactly 1 kg net conforming product excluding packaging and verify item/set conversion. |  |
| `validate_route_consistency` | process map | Include every used/outsourced process and evidence every unused conditional process. | `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003` |
| `validate_atomic_rows` | inventory | Require one exchange and one property/unit per row; reject combined utilities, chemicals, packaging, wastes or emissions. |  |
| `validate_uuid_semantics` | UUID rows | Confirm state 100, names, type, classification, property and unit group; never replace unresolved rows with proxies. |  |
| `validate_metal_balance` | route | Investigate residual against uncertainty, WIP and unmeasured residues. | `eu-jrc-fabricated-metal-products-2020` |
| `validate_energy_emissions` | energy/CO2 | Separate electricity/gas, verify conversion and ensure direct CO2 excludes upstream electricity. |  |
| `validate_waste_basis` | wastes | Verify destination, wet/dry basis, density/solids conversion and no wastewater/sludge/emission double count. | `us-epa-mpm-2003` |
| `validate_source_period` | package | Confirm sources, period, coverage, calibration, gaps and absence of unsupported external ranges. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for later review as `secondary_dataset` or `background_dataset` |
| downstream_use | CPC 42915 product systems with matching material, finish, technology, geography and packaging |
| allowed_use | Cradle-to-gate and supply-chain models; comparisons only after function, performance, life and set configuration are equivalent |
| excluded_use | Unlike functions/set contents; powered equipment; use-stage claims; other cutlery categories; use without unresolved-flow treatment |
| required_metadata | PCR/version; product/set; net mass; alloy/composition; dimensions; performance; finish; site/geography; technology; period; packaging; outsourced work; allocation; UUID status |
| required_quality_disclosure | Primary-data share; calibration; temporal/site coverage; supplier representativeness; balance residual; waste basis/destination; emission method; gaps/uncertainty |
| update_trigger | Material/product/set, technology, heat source, chemistry, site, packaging, allocation, supplier data or waste-treatment change; or more than three years since reference period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-09-05). | CPC 42915 identity/title |
| `china-hainan-import-tax-list-2025` | `official_guidance` | Ministry of Finance, General Administration of Customs and State Taxation Administration, Annex: Import Taxable Goods List, 2025, p. 34. https://www.gov.cn/zhengce/zhengceku/202507/P020250723546212625804.pdf (accessed 2026-09-05). | Chinese terminology and distinction from kitchen/table ware |
| `eu-jrc-fabricated-metal-products-2020` | `official_guidance` | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN, JRC119281, 2020. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf (accessed 2026-09-05). | Process map and material/energy/water/waste relevance |
| `us-epa-mpm-2003` | `official_guidance` | U.S. EPA, Development Document for Metal Products & Machinery Point Source Category, EPA-821-B-03-001, 2003. https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf (accessed 2026-09-05). | Grinding, polishing, heat treatment, cleaning, wastewater/sludge |
| `eu-pef-method-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-09-05). | Boundary, data quality and allocation hierarchy |
