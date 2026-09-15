---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-of-meat-or-meat-offal-inedible-greaves
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat and Bone Meal from Mammalian Animal By-products

## 1. Scope and Applicability

This PCR covers one route only: bulk, inedible meat and bone meal (MBM) made from declared mammalian slaughter and meat-processing animal by-products by size reduction, Method 1 pressure sterilisation, continuous dry rendering with purchased steam and grid electricity, fat draining and screw pressing, grinding, screening, and bulk storage at the rendering-plant gate. The foreground starts when accepted animal by-products cross the rendering-plant receiving boundary and ends when released MBM and separately marketed rendered fat leave plant storage. Upstream animal production, slaughter, purchased steam and electricity production, inbound and outbound transport, MBM use, and end-of-life are represented by linked upstream or downstream datasets rather than this foreground.

The PCR does not average the full CPC 21190 class. It excludes meat meal without a declared bone fraction, poultry by-product meal, feather meal, blood meal, fish meal, edible meal, greaves sold as the final product, wet rendering, batch dry rendering, pelletising, packaged retail product, and any route with on-site fuel combustion for steam. A dataset using a different animal-risk category, legal processing method, energy supply, product form, or co-product configuration requires a different route-specific foreground description and shall not claim conformance to this route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-of-meat-or-meat-offal-inedible-greaves |
| classification_refs | CPC 3.0: 21190 — Flours, meals and pellets of meat or meat offal, inedible; greaves |
| covered_products | Bulk mammalian meat and bone meal produced as the solid protein-and-mineral co-product of the declared continuous dry-rendering route |
| excluded_products | Meat meal without a declared bone fraction; poultry, feather, blood, fish or edible meals; greaves as final product; pellets; wet- or batch-rendered meal; products from undeclared mixed routes |
| representative_product | Meat and bone meal (MBM), production mix at rendering plant, GLO |
| production_route | Mammalian animal by-products; ≤50 mm size reduction; Method 1 pressure sterilisation; continuous indirect-steam dry rendering; draining and screw pressing; grinding and screening; bulk storage; purchased steam and grid electricity |
| market_state | Dry, screened, bulk inedible meal at rendering-plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Released bulk mammalian meat and bone meal from the declared route |
| How much | 1 kg as-produced MBM at the plant gate |
| How well | A released lot with declared animal species mix, animal-by-product category, processing method, moisture, crude protein, crude fat, ash, particle-size specification, and legal use restriction |
| How long or cycle | One representative production campaign within the declared reporting period, normalised to 1 kg released MBM |
| reference_flow_link | Output row `meat_and_bone_meal` from process `meal_finishing_storage` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat and bone meal (MBM) `c9d74b2c-9179-4330-a54e-f63cc2c86f95` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | mammalian species mix; animal-by-product regulatory category; Method 1 critical-control-point status; continuous dry-rendering technology; geography; reporting period; purchased-steam source; electricity mix; moisture; crude protein; crude fat; ash; particle-size specification; bulk state; rendered-fat co-product status; allocation method; legal use restriction |

All required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent foreground data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | released MBM | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the reference flow as 1 kg as-produced released MBM; do not silently convert to dry matter. |
| `dry_matter_disclosure` | MBM, raw animal by-products, press cake, rendered fat and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and kg dry matter | Record wet mass and measured moisture when dry-matter balances or allocation factors are calculated. |
| `energy_carrier_separation` | purchased electricity and steam | Energy | kWh for electricity; MJ or kg for steam | Meter electricity and purchased steam separately. Do not report a combined energy or utilities flow; preserve the supplier unit and document every conversion. |
| `water_stream_separation` | process water, condensate and discharged wastewater | Mass or volume | kg or m3 | Keep supplied process water, recovered condensate, and wastewater discharge as distinct streams; state density assumptions for volume-to-mass conversion. |
| `reporting_period_normalisation` | all foreground exchanges | exchange-specific property | exchange-specific unit per kg MBM | Aggregate accepted records over the same campaign and reporting period, subtract documented internal recycle, then divide by released MBM mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted mammalian slaughter and meat-processing animal by-products weighed at the rendering-plant receiving point, with species mix, regulatory category, source facility, receipt time, moisture sampling plan, and rejection records declared |
| starting_condition_role | Foreground raw material entering the route; upstream livestock production and slaughter burdens remain in linked supplier datasets |
| product_classification_scope | Route-specific subset of CPC 3.0 21190 represented by mammalian MBM only |
| recursive_input_rule | Externally purchased MBM or same-category meal used in blending shall be recorded as an upstream product input and shall not be recursively regenerated inside this foreground; internal documented rework is netted once and disclosed |
| upstream_dataset_requirement | Link supplier datasets for animal by-products, purchased steam, electricity, process water, sodium hypochlorite, and all other purchased inputs; datasets shall match geography, technology and reporting period as closely as practicable |
| disclosure | Declare cut-offs, rejected loads, storage time before processing, Method 1 control records, internal recycle, purchased-steam source, water treatment, emission-control technology, co-product quantities and prices, allocation method, and any missing measurements |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_lock` | foreground dataset | Include only the declared mammalian MBM route; do not average greaves, meat meal, poultry meal, wet rendering, batch rendering, pelletising, or on-site steam generation into this dataset. | `unsd-cpc30-21190`; `epa-ap42-953`; `woodgate-2023-rendering` |
| `boundary_gate_to_gate` | foreground and linked background | Collect every exchange from accepted raw material at receiving through released bulk MBM and rendered fat at plant storage; represent excluded upstream and downstream stages only through explicit linked datasets. | `ec-pef-2021` |
| `boundary_method1_controls` | size reduction and pressure sterilisation | When Method 1 is declared, retain daily size-reduction checks and uninterrupted time, core-temperature and absolute-pressure records; the route target is ≤50 mm, >133 °C, ≥20 minutes and ≥3 bar absolute, subject to the currently applicable jurisdictional rule. | `eu-reg-142-2011-method1` |
| `boundary_pollution_control` | rendering air and water controls | Include captured cooking and pressing vapours, condensate, scrubber inputs, wastewater, sludge, and residual releases; do not hide them in a combined utilities, waste or emissions placeholder. | `epa-ap42-953` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_size_reduction` | Raw-material receiving and size reduction | `required` | Always | Foreground acceptance, weighing and ≤50 mm preparation | kg accepted raw animal by-products |
| `sterilisation_dry_rendering` | Method 1 sterilisation and continuous dry rendering | `required` | Always | Foreground hygienisation, dehydration and cell disruption using purchased steam | kg sterilised rendered material |
| `fat_separation_pressing` | Fat draining and screw pressing | `required` | Always | Foreground separation of rendered fat and protein-mineral solids | kg press cake and kg rendered fat |
| `meal_finishing_storage` | Grinding, screening and bulk storage | `required` | Always | Foreground production and release of screened MBM | 1 kg released MBM |
| `odor_wastewater_control` | Odour and wastewater control | `required` | Always | Foreground treatment of captured vapours, condensate and cleaning water | kg treated streams per kg released MBM |

### Process: Raw-material receiving and size reduction (`receiving_size_reduction`)

#### Inputs

##### Product flows

###### Accepted mammalian animal by-products (`raw_mammalian_animal_byproducts`)

Accepted offal, bone, tissue and other declared mammalian animal by-products cross the plant boundary here and supply all material entering the MBM route.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Mammalian slaughter and meat-processing animal by-products
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh every accepted load and subtract separately weighed receiving rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: calibrated receiving-scale records; process role supported by `epa-ap42-953`
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`
- Range: Provisional raw-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1.2
  - Upper: 10
  - Unit: kg/kg released MBM
  - Basis: accepted raw animal by-products per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grid electricity for receiving and size reduction (`receiving_electricity`)

Electricity powers receiving conveyors, pumps, metal removal, the crusher and local ventilation; it is recorded separately from steam.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: allocate a dedicated submeter or time-and-load calculation to accepted raw material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: plant meter and equipment runtime records
- Sources: `epa-ap42-953`
- Range: Provisional receiving-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh/kg released MBM
  - Basis: receiving and size-reduction electricity per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Size-reduced animal by-products (`size_reduced_animal_byproducts`)

Accepted material reduced to the declared particle size transfers to sterilisation without becoming a market product.

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Size-reduced mammalian animal by-products
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculate accepted input minus measured rejects and documented receiving losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: receiving mass balance and Method 1 size-control record
- Sources: `eu-reg-142-2011-method1`

##### Waste flows

###### Receiving rejects (`receiving_rejects`)

Foreign material and rejected animal material removed before rendering leave as a separately weighed waste stream with destination and treatment recorded.

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Receiving rejects from animal-by-product preparation
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh by reject class before dispatch or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Source / estimate basis: waste tickets and reject logs
- Sources: `epa-ap42-953`

##### Elementary flows

###### Uncaptured receiving VOC release to air (`receiving_voc_air`)

Fugitive volatile organic compounds from raw-material receiving and short-term holding are quantified when stack, boundary, permit or engineering records identify a release.

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Volatile organic compounds, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated mass release for the reporting period; zero is permitted only with documented enclosure and capture evidence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: facility monitoring, permit calculations or source testing; emission relevance supported by `epa-ap42-953`
- Sources: `epa-ap42-953`

### Process: Method 1 sterilisation and continuous dry rendering (`sterilisation_dry_rendering`)

#### Inputs

##### Product flows

###### Size-reduced animal by-products to sterilisation (`size_reduced_feed`)

The prepared material from receiving enters pressure sterilisation and the continuous dry-rendering line.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Size-reduced mammalian animal by-products
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: equal the transferred output from `size_reduced_animal_byproducts` after documented hold-up adjustment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: inter-process mass-transfer record
- Sources: `epa-ap42-953`; `eu-reg-142-2011-method1`

###### Purchased saturated steam (`purchased_steam`)

Purchased steam supplies Method 1 pressure sterilisation and indirect heat for continuous dehydration; upstream steam generation is outside this foreground and shall be linked explicitly.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Saturated steam, purchased
- Tiangong UUID: not resolved
- Flow property / unit: Energy / MJ; supplier mass / kg may also be retained
- Amount rule: meter delivered steam or calculate it from calibrated condensate return and documented losses without combining it with electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: steam meter, invoice and condensate records; route role supported by `epa-ap42-953` and `woodgate-2023-rendering`
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`; `eu-reg-142-2011-method1`
- Range: Provisional purchased-steam screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.2
  - Upper: 15
  - Unit: MJ/kg released MBM
  - Basis: purchased steam energy per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grid electricity for sterilisation and rendering (`rendering_electricity`)

Electricity powers steriliser controls, continuous cooker drives, pumps, vapour handling and instrumentation.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: use a dedicated meter or equipment-level runtime calculation for this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: plant meter and runtime records
- Sources: `epa-ap42-953`
- Range: Provisional rendering-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/kg released MBM
  - Basis: sterilisation and rendering electricity per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None at process input.

##### Elementary flows

None at process input.

#### Outputs

##### Product flows

###### Sterilised rendered material (`sterilised_rendered_material`)

Dehydrated cooked material containing released fat and protein-mineral solids transfers to draining and pressing.

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Sterilised rendered animal material
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measure transfer mass or close the cooker mass balance using feed, condensate, captured vapour and measured losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: cooker discharge and mass-balance records
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`

##### Waste flows

###### Cooker condensate (`cooker_condensate`)

Condensed water removed during dehydration is retained as a distinct wastewater input to the control process and is not merged with supplied water.

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Rendering cooker condensate
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: meter condensate volume and convert with measured or documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Source / estimate basis: condensate flowmeter and tank records
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`
- Range: Provisional cooker-condensate screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 10
  - Unit: kg/kg released MBM
  - Basis: condensate transferred to treatment per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Captured cooker off-gas (`captured_cooker_offgas`)

Enclosed cooker vapours and non-condensables transfer to the declared odour-control system as a separately tracked waste-gas stream.

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Captured rendering cooker off-gas
- Tiangong UUID: not resolved
- Flow property / unit: Gas volume / Nm3 and pollutant mass / kg
- Amount rule: record standardised gas volume and pollutant loading from flow and concentration measurements or permit calculations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: duct flow, source testing and control-device records
- Sources: `epa-ap42-953`

##### Elementary flows

###### Uncaptured cooker VOC release to air (`cooker_voc_air`)

VOC that bypasses capture at the cooker is reported as a direct elementary release rather than netted against captured off-gas.

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Volatile organic compounds, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: calculate released pollutant mass from measured flow, concentration, capture efficiency and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: source test or permit calculation; cooker VOC relevance supported by `epa-ap42-953`
- Sources: `epa-ap42-953`

### Process: Fat draining and screw pressing (`fat_separation_pressing`)

#### Inputs

##### Product flows

###### Sterilised rendered material to pressing (`rendered_material_to_press`)

Sterilised rendered material enters draining and screw pressing for physical separation of liquid fat from solids.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Sterilised rendered animal material
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: equal the transferred cooker output after documented hold-up adjustment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: inter-process mass-transfer record
- Sources: `epa-ap42-953`

###### Grid electricity for draining and pressing (`pressing_electricity`)

Electricity powers the drainer, screw press, fat pumps and separation controls.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: use a dedicated meter or runtime-and-load calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: plant meter and equipment runtime records
- Sources: `epa-ap42-953`
- Range: Provisional pressing-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh/kg released MBM
  - Basis: draining and pressing electricity per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None at process input.

##### Elementary flows

None at process input.

#### Outputs

##### Product flows

###### Pressed protein-mineral solids (`pressed_solids`)

Pressed solids containing protein, bone mineral and residual fat transfer to grinding and screening.

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Rendered solid fraction, greaves, press cake
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh press cake or calculate it from press input, rendered fat, fines and measured losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: press-cake scale and press mass balance
- Sources: `epa-ap42-953`

###### Rendered mammalian fat co-product (`rendered_fat`)

Separately marketed rendered fat leaves the press train as a co-product whose quantity and plant-gate value are required for allocation.

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Rendered mammalian fat
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: meter or weigh saleable fat after separation and before storage losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: tank gauge, flowmeter and dispatch records; co-product role supported by `epa-ap42-953`
- Sources: `epa-ap42-953`; `woodgate-2023-rendering`
- Range: Provisional rendered-fat yield screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kg/kg released MBM
  - Basis: saleable rendered fat per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Press fines and separation sludge (`press_fines_sludge`)

Protein fines and non-saleable separation sludge that are not internally recycled leave as a separately weighed waste stream.

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Rendering press fines and separation sludge
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh dispatched material; document and subtract internal recycle once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Source / estimate basis: waste tickets, tank records and recycle ledger
- Sources: `epa-ap42-953`

###### Captured press off-gas (`captured_press_offgas`)

Enclosed press vapours transfer to the odour-control process as a separate waste-gas stream.

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Captured rendering press off-gas
- Tiangong UUID: not resolved
- Flow property / unit: Gas volume / Nm3 and pollutant mass / kg
- Amount rule: record standardised flow and pollutant loading using source testing or permit calculations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: duct flow and concentration records
- Sources: `epa-ap42-953`

##### Elementary flows

###### Uncaptured press VOC release to air (`press_voc_air`)

VOC that bypasses press capture is quantified separately as a direct release to air.

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Volatile organic compounds, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: calculate released pollutant mass from measured flow, concentration, capture efficiency and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: source test or permit calculation; press VOC relevance supported by `epa-ap42-953`
- Sources: `epa-ap42-953`

### Process: Grinding, screening and bulk storage (`meal_finishing_storage`)

#### Inputs

##### Product flows

###### Pressed solids to finishing (`pressed_solids_to_finishing`)

Pressed protein-mineral solids enter grinding and screening without blending with other meal routes.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Rendered solid fraction, greaves, press cake
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: equal transferred `pressed_solids` after documented hold-up adjustment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass`
- Source / estimate basis: inter-process transfer and storage records
- Sources: `epa-ap42-953`

###### Grid electricity for grinding and screening (`finishing_electricity`)

Electricity powers grinding, screening, dust collection, conveying and bulk-storage handling.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: use a dedicated meter or equipment-level runtime calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: plant meter and runtime records
- Sources: `epa-ap42-953`
- Range: Provisional finishing-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kWh/kg released MBM
  - Basis: finishing and storage electricity per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None at process input.

##### Elementary flows

None at process input.

#### Outputs

##### Product flows

###### Released meat and bone meal (`meat_and_bone_meal`)

Screened, released bulk MBM is the reference product and shall remain separate from off-specification meal and other meal routes.

- Direction: `outputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Meat and bone meal (MBM) `c9d74b2c-9179-4330-a54e-f63cc2c86f95`
- Tiangong UUID: `c9d74b2c-9179-4330-a54e-f63cc2c86f95`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg released as-produced MBM after all rejected and internally recycled material is excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_release`
- Source / estimate basis: released-lot scale, laboratory certificate and verified Tiangong flow identity
- Sources: `unsd-cpc30-21190`; `woodgate-2023-rendering`

##### Waste flows

###### Off-specification meal (`offspec_meal`)

Meal that fails the declared release specification and is not internally reworked leaves as a distinct waste stream with treatment recorded.

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Off-specification meat and bone meal
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh rejected lots; document rework separately and net it once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Source / estimate basis: quality-release log, rework ledger and waste ticket
- Sources: `eu-reg-142-2011-method1`

##### Elementary flows

###### Particulate matter from grinding and screening to air (`grinding_pm_air`)

Residual particulate matter after the declared dust-control device is reported as a direct elementary release.

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Particulate matter, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: calculate emitted mass from measured exhaust flow, particulate concentration, control efficiency and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: source testing or permit calculation; grinding PM relevance supported by `epa-ap42-953`
- Sources: `epa-ap42-953`

### Process: Odour and wastewater control (`odor_wastewater_control`)

#### Inputs

##### Product flows

###### Process water for wet scrubbing and cleaning (`control_process_water`)

Supplied water used in the selected multistage wet-scrubber and process-area cleaning route is metered separately from condensate and wastewater.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Process water
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg or volume / m3
- Amount rule: meter supplied water to scrubber make-up and cleaning separately, then sum only for this process total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Source / estimate basis: water submeter and cleaning logs
- Sources: `epa-ap42-953`
- Range: Provisional process-water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kg/kg released MBM
  - Basis: supplied control and cleaning water per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium hypochlorite for odour scrubbing (`sodium_hypochlorite`)

Sodium hypochlorite used by the selected wet-scrubber route is recorded as its delivered solution mass and active concentration.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Sodium hypochlorite solution
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg solution and kg active substance
- Amount rule: sum purchase and dosing-meter records, adjusted for opening and closing stock; declare active concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_control_chemicals`
- Source / estimate basis: chemical invoice, tank inventory and dosing log; scrubber-agent role supported by `epa-ap42-953`
- Sources: `epa-ap42-953`

###### Grid electricity for pollution control (`control_electricity`)

Electricity powers capture fans, pumps, wet scrubbing, wastewater transfer and treatment controls.

- Direction: `inputs`
- Flow type: `product`
- Requirement: `required`
- Selected flow: Grid electricity, medium voltage
- Tiangong UUID: not resolved
- Flow property / unit: Energy / kWh
- Amount rule: use a dedicated meter or runtime-and-load calculation for control equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Source / estimate basis: plant meter and equipment runtime records
- Sources: `epa-ap42-953`

##### Waste flows

###### Cooker condensate to wastewater control (`cooker_condensate_to_control`)

The complete condensate output from rendering enters wastewater control without being combined with supplied process water in the raw records.

- Direction: `inputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Rendering cooker condensate
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: equal transferred `cooker_condensate` after documented storage change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater`
- Source / estimate basis: inter-process flow and tank-level records
- Sources: `epa-ap42-953`

###### Captured cooker off-gas to odour control (`cooker_offgas_to_control`)

Captured cooker off-gas enters the selected multistage wet-scrubber train as a separate inlet stream.

- Direction: `inputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Captured rendering cooker off-gas
- Tiangong UUID: not resolved
- Flow property / unit: Gas volume / Nm3 and pollutant mass / kg
- Amount rule: equal transferred `captured_cooker_offgas` after documented duct losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: control-device inlet flow and concentration records
- Sources: `epa-ap42-953`

###### Captured press off-gas to odour control (`press_offgas_to_control`)

Captured screw-press off-gas enters the wet-scrubber train as its own inlet stream and is not merged with cooker off-gas in source records.

- Direction: `inputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Captured rendering press off-gas
- Tiangong UUID: not resolved
- Flow property / unit: Gas volume / Nm3 and pollutant mass / kg
- Amount rule: equal transferred `captured_press_offgas` after documented duct losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: control-device inlet flow and concentration records
- Sources: `epa-ap42-953`

##### Elementary flows

None at process input.

#### Outputs

##### Product flows

None.

##### Waste flows

###### Treated wastewater discharge (`treated_wastewater`)

Final wastewater leaving foreground treatment is recorded separately from condensate and supplied water, with destination and measured quality declared.

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Treated rendering wastewater
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg or volume / m3
- Amount rule: meter discharged volume and retain concentration and load records for regulated parameters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Source / estimate basis: effluent flowmeter, laboratory results and discharge records
- Sources: `epa-ap42-953`
- Range: Provisional wastewater-discharge screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 15
  - Unit: kg/kg released MBM
  - Basis: treated wastewater discharged per kg released MBM
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment and scrubber sludge (`control_sludge`)

Separated sludge from wastewater and wet-scrubber control leaves as a distinct solid or slurry waste with water content and destination recorded.

- Direction: `outputs`
- Flow type: `waste`
- Requirement: `required`
- Selected flow: Rendering wastewater and scrubber sludge
- Tiangong UUID: not resolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg as received and kg dry matter
- Amount rule: weigh dispatched sludge and measure or document moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Source / estimate basis: waste ticket, sludge tank record and moisture result
- Sources: `epa-ap42-953`

##### Elementary flows

###### Residual controlled VOC release to air (`controlled_voc_air`)

VOC remaining after the wet-scrubber train is reported as a direct release and is not combined with uncaptured cooker or press VOC.

- Direction: `outputs`
- Flow type: `elementary`
- Requirement: `required`
- Selected flow: Volatile organic compounds, unspecified, to air
- Tiangong UUID: not resolved
- Flow property / unit: Mass / kg
- Amount rule: calculate outlet pollutant mass from measured standardised flow, concentration and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released MBM
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Source / estimate basis: control-device outlet testing and operating records
- Sources: `epa-ap42-953`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all multi-output foreground processes | First subdivide meters and records so receiving, sterilisation/rendering, pressing, finishing and control exchanges are directly assigned wherever technically possible. Do not allocate exchanges that can be measured for one process or output. | `ec-pef-2021` |
| `allocation_shared_rendering` | MBM and rendered fat | For genuinely shared rendering exchanges that cannot be subdivided or expanded, test and document a relevant physical relationship. If none represents the distinct functions of meal and fat, allocate by each co-product's positive annual plant-gate net revenue using the same reporting period; disclose price, mass and factor for both outputs. | `ec-pef-2021` |
| `allocation_waste_and_rework` | rejects, fines, sludge, off-spec meal and internal rework | Assign treatment burdens to the process generating each waste; give no avoided-burden credit without an explicit expanded-system study. Net internal rework once and retain both gross and net records. | `ec-pef-2021` |
| `allocation_sensitivity` | published secondary or background dataset | Report an unallocated joint-process inventory and a mass-allocation sensitivity result alongside the selected revenue allocation when shared burdens materially affect the MBM result. | `ec-pef-2021`; `woodgate-2023-rendering` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `receiving_size_reduction`; `sterilisation_dry_rendering`; `fat_separation_pressing`; `meal_finishing_storage` | raw material, intermediates, MBM and rendered fat | scale, flowmeter, tank and stock records | timestamp; lot; stream; gross; tare; net mass; moisture; opening stock; closing stock; recycle | calibrated scales/meters plus reconciled stock change | kg; kg dry matter | each load/lot; daily reconciliation | complete representative reporting period declared and justified by the dataset producer | all equipment and storage serving the declared route | sum accepted mass by stream, adjust stock change and internal recycle once, then normalise to released MBM | calibration, lot traceability, stock reconciliation and signed mass-balance review |
| `cp_energy` | all processes | electricity and purchased steam | meter, invoice, condensate and runtime records | meter id; opening; closing; unit; steam pressure; steam temperature; condensate return; equipment power; runtime | dedicated meters preferred; documented allocation only for shared meters | kWh; MJ; kg steam | continuous/daily meter; monthly invoice | same period as mass records | all route equipment; shared services disclosed | convert with documented factors, preserve carrier separation, subtract exports, normalise to released MBM | meter calibration, invoice reconciliation and conversion worksheet |
| `cp_water_wastewater` | `sterilisation_dry_rendering`; `odor_wastewater_control` | supplied water, condensate and wastewater | flowmeter, tank and laboratory records | stream; volume; mass; density; COD; BOD; total suspended solids; nitrogen; phosphorus; discharge destination | separate meters and representative laboratory sampling | kg; m3; kg pollutant | continuous/daily volume; sampling at permit or campaign frequency | same period as production | all route water inlets, internal transfers and discharge points | keep streams separate, calculate pollutant load as concentration × volume, normalise to released MBM | meter calibration, chain of custody, method and detection-limit record |
| `cp_air_emissions` | all processes | VOC, particulate and controlled off-gas | source test, continuous/periodic monitor, duct flow, permit and runtime records | source id; pollutant; concentration; standardised flow; temperature; moisture; capture efficiency; control efficiency; operating hours | direct source test preferred; otherwise documented regulatory calculation | kg pollutant; Nm3 gas | each test and operating-period calculation | representative operating states across reporting period | every declared source and control-device inlet/outlet | concentration × standardised flow × time, adjusted only by measured capture/control efficiency, normalised to released MBM | test report, calibration, operating log and uncertainty statement |
| `cp_waste` | all processes | rejects, fines, off-spec meal and sludge | waste ticket, scale, tank and treatment records | date; waste class; gross; tare; net mass; moisture; destination; treatment; internal recycle | weigh each shipment or calibrated tank drawdown | kg as received; kg dry matter | each shipment; monthly reconciliation | same period as production | all route waste points | sum by atomic waste stream and destination, subtract documented internal recycle once, normalise to released MBM | signed ticket, receiver, treatment code and moisture evidence |
| `cp_control_chemicals` | `odor_wastewater_control` | sodium hypochlorite | invoice, tank inventory and dosing records | product; active concentration; opening stock; purchases; closing stock; dosing meter | stock balance reconciled to dosing meter | kg solution; kg active substance | batch/monthly | same period as production | all route scrubbers | opening + purchases − closing, report solution and active mass, normalise to released MBM | supplier specification, invoice and dosing calibration |
| `cp_method1_ccp` | `receiving_size_reduction`; `sterilisation_dry_rendering` | particle size, time, core temperature and absolute pressure | daily size check and sterilisation batch/continuous control records | timestamp; line; maximum particle size; core temperature; residence time; absolute pressure; alarm; deviation; disposition | validated instruments with uninterrupted electronic record and daily crusher check | mm; °C; min; bar absolute | continuous for sterilisation; daily for size reduction | every production campaign represented | complete declared route | flag any interval below the declared minimum; segregate affected output until disposition is documented | calibration, validation, alarm history, deviation investigation and release approval |
| `cp_product_release` | `meal_finishing_storage` | released MBM quality and reference mass | lot scale and laboratory certificate | lot; species mix; category; moisture; crude protein; crude fat; ash; particle size; release decision; legal use restriction | representative sampling and laboratory method declared by dataset producer | kg; mass %; mm | each released lot | all released lots in reporting period | all MBM silos serving route | mass-weight lot results and report distribution; reference quantity remains as-produced mass | sampling plan, method, laboratory QA/QC and authorised release |
| `cp_allocation` | `fat_separation_pressing`; shared services | MBM/fat allocation | dispatch, invoice, cost and production records | product; saleable mass; net revenue; price period; currency; shared exchange; allocation factor | reconcile annual mass and positive net revenue to audited records | kg; currency; fraction | monthly, aggregated annually | same period as inventory | declared plant and route | apply subdivision first; otherwise calculate selected and sensitivity factors from co-period output data | audited reconciliation, price source, formula and factor sum check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise_reference` | every foreground exchange | exchange per kg MBM = reporting-period exchange ÷ reporting-period released as-produced MBM mass | atomic exchange record; released MBM mass | exchange/kg MBM | `ec-pef-2021` |
| `calc_mass_balance` | each process and complete foreground | closure = (total mass input − total mass output − documented stock increase) ÷ total mass input; investigate stream-specific causes rather than forcing closure | wet mass; moisture; stock change; recycle | wet- and dry-matter closure | `epa-ap42-953`; `woodgate-2023-rendering` |
| `calc_pollutant_load` | air and water pollutants | load = concentration × standardised gas flow or wastewater volume × operating time; apply capture/control efficiency only when measured for the same state | concentration; flow; time; efficiency | kg pollutant | `epa-ap42-953` |
| `calc_revenue_allocation` | inseparable shared burdens | factor_i = positive net revenue_i ÷ sum positive net revenue of MBM and rendered fat in the same period; factors shall sum to 1 | saleable mass; net price/revenue for both co-products | shared-burden allocation factor | `ec-pef-2021` |
| `calc_dry_matter` | moisture-bearing material streams | dry mass = wet mass × (1 − moisture mass fraction) using co-period representative moisture | wet mass; moisture | kg dry matter | `woodgate-2023-rendering` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | dataset and reference flow | Demonstrate mammalian MBM, declared species/category and exact route; exclude other CPC 21190 forms. | supplier declarations, process diagram, release specification and Tiangong reference identity |
| `dq_temporal` | all foreground data | Use one common representative reporting period, justify its duration and disclose shutdowns, abnormal events and substitutions. | meter coverage report and production calendar |
| `dq_completeness` | atomic flow inventory | Reconcile every listed card or document a card-specific zero with evidence; combined utilities, energy, water, waste or emissions entries are nonconforming. | completeness matrix and source ledger |
| `dq_ccp` | Method 1 route | Retain complete size, time, temperature and pressure evidence and disposition every deviation. | validated electronic record, daily check and deviation log |
| `dq_mass_energy` | material, electricity and steam | Reconcile meters to invoices, stock changes and production; disclose shared-meter allocation and conversion factors. | calibration, invoices, reconciliation and uncertainty statement |
| `dq_air_water` | emissions and wastewater | Retain source-test and laboratory methods, detection limits, standard conditions, sampling representativeness and load calculations. | test reports, chain of custody, calculations and permits |
| `dq_allocation` | shared rendering burdens | Preserve unallocated inventory, selected factors, prices/revenues and mass sensitivity for the same period. | `cp_allocation` worksheet and audited records |
| `dq_estimates` | every `reasoned_estimate` range | Treat provisional ranges as screening aids only; foreground records replace them and publication-critical allowed ranges require reviewed evidence. | range register and reviewer disposition |
| `dq_uuid` | Tiangong-linked rows | Use only directly verified UUIDs without dataset versions; unresolved inventory UUIDs remain explicitly unresolved. | UUID verification record outside PCR content and manifest review metadata |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_route` | identity and process map | Fail if the dataset mixes non-mammalian meals, greaves as final product, meat meal, wet/batch rendering, pelletising or on-site steam generation into the declared route. | `unsd-cpc30-21190`; `epa-ap42-953` |
| `validate_reference` | reference product | Require exactly 1 kg as-produced released MBM linked to `c9d74b2c-9179-4330-a54e-f63cc2c86f95`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, with every required qualifier declared. | `woodgate-2023-rendering` |
| `validate_method1` | size reduction and sterilisation | Require complete route evidence for ≤50 mm, >133 °C, ≥20 minutes uninterrupted and ≥3 bar absolute, plus documented disposition of deviations; also verify the currently applicable jurisdictional rule. | `eu-reg-142-2011-method1` |
| `validate_atomic_flows` | process inventory | Require each atomic flow card to retain non-empty description, direction, flow type, requirement, quantity rule, unit, source/estimate basis and verified-or-unresolved Tiangong UUID state. | `epa-ap42-953`; `ec-pef-2021` |
| `validate_mass_balance` | each process and complete foreground | Report wet- and dry-matter closure and investigate any imbalance outside a dataset-specific reviewed acceptance criterion; do not force closure by changing the reference output. | `epa-ap42-953`; `woodgate-2023-rendering` |
| `validate_energy_water` | electricity, steam and water streams | Fail when electricity and steam are combined or when supplied water, condensate and wastewater are merged in raw records. | `ec-pef-2021` |
| `validate_emissions_waste` | air, wastewater and solid waste | Require atomic source/destination records for VOC, particulate matter, condensate, wastewater, rejects, fines, off-spec meal and sludge, including documented zeros where applicable. | `epa-ap42-953` |
| `validate_allocation` | MBM and rendered fat | Require subdivision evidence, same-period co-product mass and positive net revenue, factors summing to 1, unallocated inventory, and mass sensitivity; fail unexplained zero-burden or avoided-burden treatment. | `ec-pef-2021` |
| `validate_provisional_ranges` | reasoned estimates | Flag every provisional range as replaceable and prohibit its use as a publication-critical allowed range without reviewed evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route-specific foreground data package that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Gate-to-gate MBM supply for product systems whose product, legal use and route match the declared qualifiers |
| allowed_use | Attributional LCA, supply-chain screening and foreground model construction with explicit upstream animal-by-product, steam, electricity and treatment links |
| excluded_use | Full CPC 21190 average; meat meal, greaves, poultry/fish/blood/feather meal; other regulatory categories or technologies; comparative public claims without critical review; legal compliance determination |
| required_metadata | canonical PCR id; reference UUID/property; location; technology; reporting period; species mix; animal-by-product category; Method 1 records; product composition; energy suppliers; water and emission controls; co-product outputs; allocation factors; cut-offs; uncertainty; data owner and review status |
| required_quality_disclosure | measurement coverage; calibration; mass/dry-matter closure; energy and water reconciliation; emission and wastewater methods; missing data; reasoned estimates; allocation sensitivity; unresolved UUIDs; deviations and corrective action |
| update_trigger | material change in raw-material mix, regulatory category, hygienisation method, cooker/press technology, energy supply, control system, product specification, allocation relationship, geography, or data older than the programme review interval |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc30-21190` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0, Explanatory Notes*, code 21190, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-20). | Official classification title and confirmation that the canonical CPC class is broader than this MBM route |
| `epa-ap42-953` | `official_guidance` | U.S. Environmental Protection Agency, *AP-42 Section 9.5.3: Meat Rendering Plants*, September 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c9s05-3_0.pdf (retrieved 2026-08-20). | Continuous dry-rendering decomposition; raw material handling; draining, pressing, grinding and screening; VOC/PM sources; wet-scrubber control |
| `eu-reg-142-2011-method1` | `standard` | European Commission, Commission Regulation (EU) No 142/2011, consolidated text of 23 June 2020, Annex IV, Chapter III, Method 1. https://eur-lex.europa.eu/eli/reg/2011/142/2020-06-23/eng (retrieved 2026-08-20). | Route-specific particle-size, time, temperature, pressure and record controls; users must verify the currently applicable law |
| `ec-pef-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-20). | Functional-unit framing, foreground/background boundary, data quality, inventory completeness and multi-functionality hierarchy |
| `woodgate-2023-rendering` | `literature` | Woodgate, S. L. (2023), “Meat industry by-products: a bio-refinery approach to the production of safe, value added products for sustainable agriculture applications,” *Frontiers in Animal Science* 4:1259200. https://doi.org/10.3389/fanim.2023.1259200 (open full text verified 2026-08-20). | Peer-reviewed full-text corroboration of size reduction, indirect high-pressure steam heating, water evaporation, fat separation, sterilisation, MBM and rendered-fat co-production; no quantitative inventory factor taken from the paper |

OpenAlex discovery was completed centrally with three MBM route queries and one exact-title query. Thirty-eight result records were screened. Most route-query results concerned aquaculture feed, waste valorisation, cement fuel, or unrelated processes and were rejected. The exact-title query confirmed `woodgate-2023-rendering`; it remains adopted only because the Frontiers original full text was independently verified for qualitative rendering-process support. No abstract, metadata record or search snippet supports a rule or quantitative value.
