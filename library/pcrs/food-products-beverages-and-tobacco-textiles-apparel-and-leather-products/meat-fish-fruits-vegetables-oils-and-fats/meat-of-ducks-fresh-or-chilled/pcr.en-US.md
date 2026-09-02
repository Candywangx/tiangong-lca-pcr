---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of ducks, fresh or chilled

## 1. Scope and Applicability

This PCR governs foreground data packages for edible duck meat that leaves primary processing fresh or chilled, as a whole carcass or declared cut, and has not been frozen or transformed into a meat preparation or meat product. The normal foreground route begins with live ducks received at a slaughter facility and ends with saleable fresh or chilled duck meat at the processing-facility gate after slaughter, dressing, inspection, washing, chilling, and any declared cutting and packaging.

The PCR covers industrial, small commercial, and equivalent hygienically controlled slaughter routes when the actual technology and market state are disclosed. Duck farming, hatchery operations, feed production, and transport before the declared slaughterhouse receiving point are represented by upstream datasets or separately modelled processes. Retail, cooking, consumption, downstream refrigerated distribution, frozen duck meat, foie gras, edible offal sold as a separate product, rendered fat, mechanically separated meat, and further-prepared or cured products are outside the reference product scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-fresh-or-chilled |
| classification_refs | CPC 3.0: 21122, Meat of ducks, fresh or chilled (exact mapping context) |
| covered_products | Edible duck carcasses and declared duck-meat cuts, bone-in or boneless and skin-on or skinless, supplied fresh or chilled and never frozen |
| excluded_products | Frozen duck meat; duck foie gras; edible duck offal marketed separately; rendered or unrendered poultry fat; mechanically separated meat; minced meat, meat preparations, cooked, cured, smoked, canned, or otherwise further-processed duck products |
| representative_product | Chilled, eviscerated saleable duck carcass or declared duck-meat cut at the primary-processing gate |
| production_route | Live-duck reception; ante-mortem controls; stunning and slaughter; bleeding; scalding and defeathering; evisceration; post-mortem inspection; washing; chilling; optional cutting and packaging |
| market_state | Fresh or chilled; never frozen; packaging, cut form, bone and skin status, edible-yield convention, and dispatch temperature declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible meat of ducks supplied fresh or chilled at the primary-processing facility gate |
| How much | 1 kg net product mass |
| How well | Fit for human consumption under applicable inspection and hygiene controls; never frozen; declared carcass or cut, bone and skin status, packaging, and product temperature |
| How long or cycle | One production lot at facility-gate release; no use-stage duration is assigned |
| reference_flow_link | The reference amount is the measured net mass of the declared saleable duck-meat product, excluding transport packaging unless explicitly included and reported separately |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of ducks, fresh or chilled `787f4c92-60eb-4533-8ee0-a0fbeda9d5c8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | duck species or commercial type; whole carcass or cut; bone-in or boneless; skin-on or skinless; packaging inclusion; fresh or chilled state; never-frozen confirmation; dispatch temperature; edible-yield convention; facility geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference duck-meat product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use verified net product mass at facility-gate release. State whether bones, skin, primary packaging, and absorbed or retained process water are included; do not use live weight as the reference amount. |
| `cold_product_state` | Reference duck-meat product | Temperature and product-state record | °C and categorical state | Record product temperature at release and demonstrate that the product remained fresh or chilled and was never frozen. Apply the governing jurisdictional limit; where EU Regulation (EC) No 853/2004 is the applicable rule, poultry meat is chilled as soon as possible to no more than 4 °C. |
| `normalization_units` | All inventory rows | Row-appropriate property | kg, m3, kWh, MJ, or declared SI-convertible unit | Preserve measured units in source records, document conversion factors, and normalize every amount to 1 kg reference product without mixing mass, volume, energy, and concentration quantities. |
| `mass_balance_basis` | Live ducks, meat, co-products, waste, and retained matter | Mass | kg | Reconcile received live mass and any other material inputs with saleable meat, separately marketed co-products, waste, wastewater-carried solids where measured, and documented stock change on a consistent wet-mass basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live ducks are received at the slaughter facility with origin, delivered mass, mortality or condemnation status, and whether inbound transport is embedded in the upstream dataset declared |
| starting_condition_role | Upstream product input to the foreground slaughter and primary-processing system |
| product_classification_scope | Fresh or chilled edible duck meat corresponding semantically to CPC 3.0 code 21122; the classification reference does not define canonical PCR identity |
| recursive_input_rule | Any fresh or chilled duck meat rework or purchased meat entering the foreground system is recorded once as a product input with its own upstream dataset and is not recursively regenerated as the reference product; its quantity and disposition are disclosed |
| upstream_dataset_requirement | Use representative upstream datasets for delivered live ducks and for electricity, fuels, water supply, chemicals, packaging, refrigerants, transport, and treatment services; disclose geography, technology, time, and whether transport and losses are included |
| disclosure | Declare included unit operations, facility gate, cut and edible-yield convention, chilling system, on-site versus off-site by-product and wastewater treatment, packaging boundary, allocation method and keys, exclusions, data period, and any substitution of secondary for foreground data |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_primary_processing` | Required foreground route | Include slaughter, blood and feather removal, evisceration, inspection, washing, cooling, and all resource use and wastes needed to make the declared saleable fresh or chilled product. Include cutting and packaging when performed before the declared facility gate. | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |
| `boundary_upstream_live_ducks` | Delivered live-duck input | Represent duck farming and feed production through an upstream dataset. Model inbound live-bird transport separately unless it is demonstrably included in the delivered-live-duck dataset. | `fao-leap-poultry-2016` |
| `boundary_hygiene_and_cold_chain` | Dressing, washing, chilling, cutting, storage, and dispatch | Include potable-water use, cleaning and sanitation, refrigeration energy, refrigerant losses, temperature control, and separation measures necessary to prevent contamination; do not exclude these activities merely because they are support operations. | `codex-cxc-58-2005`; `eu-regulation-853-2004`; `eu-sa-bref-2023` |
| `boundary_waste_and_treatment` | Inedible material, condemned material, wastewater, sludge, and packaging waste | Include on-site treatment and direct releases. For off-site treatment, record the waste flow at the facility gate and link a representative treatment dataset; retain quantity and destination evidence. | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |
| `boundary_exclusions` | Downstream and non-reference products | Exclude retail, consumer storage and cooking, consumption, and end-of-life after the processing gate. Exclude further processing and freezing unless explicitly added by the study, in which case report them as processes outside this PCR reference boundary. | `fao-leap-poultry-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `duck_slaughter_dressing` | Duck reception, slaughter, dressing, inspection, and washing | required | Always included for slaughter-derived duck meat | Foreground primary processing | Per kg dressed carcass and normalized to 1 kg reference product |
| `duck_chilling_cutting_packaging` | Chilling, optional cutting, packaging, and facility-gate release | required | Chilling and release are always included; cutting and packaging are included when performed before the declared gate | Foreground conditioning and product finishing | Per kg saleable fresh or chilled duck meat |
| `residuals_and_wastewater_management` | By-product, waste, and wastewater management | conditional | Include on-site operations when present; otherwise record exported flows and connect off-site treatment datasets | Foreground or linked treatment | Per kg reference product and by treatment route |

### Process: Duck reception, slaughter, dressing, inspection, and washing (`duck_slaughter_dressing`)

#### Inputs

##### Product flows

###### Delivered live ducks (`live_ducks_received`)

Record live ducks crossing the slaughterhouse receiving gate, including delivered mass and disposition of dead-on-arrival or condemned birds.

- Selected flow: Live ducks; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured delivered live mass assigned to the processed lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional live-mass screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 3
  - Unit: kg delivered live duck/kg reference product
  - Basis: broad first-pass screening interval pending duck-specific facility yield evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Potable process and sanitation water (`slaughter_process_water`)

Record metered water used for scalding, carcass washing, equipment cleaning, and sanitation in this process.

- Selected flow: Potable water; Tiangong UUID unresolved
- Flow property / unit: Volume / m3
- Amount rule: Metered water allocated to slaughter and dressing, less separately metered recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `codex-cxc-58-2005`; `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional water-use screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.1
  - Unit: m3/kg reference product
  - Basis: broad first-pass screening interval; not an allowed performance range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Slaughter and dressing energy (`slaughter_energy`)

Record electricity and fuels by carrier for stunning, scalding, defeathering, line operation, ventilation, hot water, and cleaning; do not combine carriers until energy conversions are documented.

- Selected flow: Electricity and thermal-energy carriers; Tiangong UUIDs unresolved
- Flow property / unit: Energy / kWh and MJ by carrier
- Amount rule: Metered or invoice-reconciled facility energy allocated to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional combined-energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.05
  - Upper: 20
  - Unit: MJ/kg reference product
  - Basis: broad first-pass screening interval after documented conversion of all carriers to MJ
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and sanitation agents (`cleaning_agents`)

Record purchased and consumed cleaning and sanitation formulations by product and active concentration where available.

- Selected flow: Cleaning and sanitation agents; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Stock-change-adjusted consumption assigned to the production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_records`
- Sources: `codex-cxc-58-2005`; `fao-leap-poultry-2016`
- Range: Provisional cleaning-agent screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg formulation/kg reference product
  - Basis: broad first-pass screening interval pending facility chemical records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required. Returned rework or imported residual material must be declared as a separate input with origin and intended treatment.

##### Elementary flows

Direct water abstraction or on-site fuel combustion inputs are recorded separately when they cross the environment boundary; otherwise use product-flow supply datasets.

#### Outputs

##### Product flows

###### Inspected dressed duck carcass (`dressed_duck_carcass`)

Record the mass passed to chilling after defeathering, evisceration, inspection, and washing, using the facility's declared edible-yield convention.

- Selected flow: Dressed duck carcass; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured dressed-carcass mass passed to chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg output of this process and reconciled to the reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional dressed-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 0.9
  - Unit: kg dressed carcass/kg delivered live duck
  - Basis: broad mass-balance screen pending duck-specific facility evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Separated edible and marketable co-products (`slaughter_coproducts`)

Record edible offal and any other separately marketed material by distinct product and destination; these outputs are not part of the reference duck-meat mass.

- Selected flow: Declared duck-slaughter co-products; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by co-product stream and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered live duck and per 1 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_and_waste_records`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional co-product mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.7
  - Unit: kg/kg delivered live duck
  - Basis: broad screen for all separated co-products combined
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Condemned and inedible slaughter material (`slaughter_waste`)

Record condemned birds or parts, feathers, blood, viscera, and other inedible material as separate waste or residual streams according to actual legal and commercial disposition.

- Selected flow: Duck slaughter residuals and waste; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by stream and destination, with waste and marketable co-product status kept separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_and_waste_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional solid-residual screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: broad screen before stream-specific duck facility records are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Slaughter and cleaning wastewater (`slaughter_wastewater`)

Record wastewater volume and, where available, pollutant concentrations or loads before on-site or off-site treatment.

- Selected flow: Slaughterhouse wastewater; Tiangong UUID unresolved
- Flow property / unit: Volume / m3, with pollutant concentrations in kg/m3 or mg/L
- Amount rule: Metered discharge volume and sampled concentration by reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional wastewater-volume screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.1
  - Unit: m3/kg reference product
  - Basis: broad first-pass screen; pollutant loads require measured volume and concentration
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Direct air, water, or soil emissions from on-site combustion or uncontrolled releases are recorded individually when they occur; do not duplicate emissions already represented in linked supply or treatment datasets.

### Process: Chilling, optional cutting, packaging, and facility-gate release (`duck_chilling_cutting_packaging`)

#### Inputs

##### Product flows

###### Inspected dressed duck carcass input (`dressed_carcass_input`)

Transfer the measured dressed-carcass mass from the preceding process without adding an upstream burden a second time.

- Selected flow: Dressed duck carcass; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Equal to the transferred output of `dressed_duck_carcass`, adjusted only for documented storage transfer differences
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `fao-leap-poultry-2016`

###### Refrigeration and cutting electricity (`chilling_electricity`)

Record metered electricity for chilling, cold storage before release, cutting, packing, pumps, fans, and associated controls.

- Selected flow: Electricity; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented allocation from facility electricity records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional chilling-electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh/kg reference product
  - Basis: broad first-pass screen sensitive to technology, climate, storage time, and cut form
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up (`refrigerant_makeup`)

Record refrigerant purchases and stock changes for systems serving the declared foreground boundary.

- Selected flow: Declared refrigerant by chemical; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Annual make-up mass allocated to the system served, with opening and closing stocks reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional refrigerant-loss screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg refrigerant/kg reference product
  - Basis: deliberately broad screen pending system-specific service and leakage records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material placed with the product or consumed before the facility gate; disclose whether its mass is excluded from the 1 kg reference product.

- Selected flow: Packaging materials by polymer, paper, board, metal, or other material; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Purchased quantity minus stock change and separately measured packaging waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_records`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional packaging screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg packaging/kg reference product
  - Basis: broad first-pass screen; unpackaged output may be zero
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required; returned packaging or product rework must be recorded separately if it crosses this process boundary.

##### Elementary flows

No elementary input is prescribed beyond any directly abstracted water or on-site energy resource already represented in facility records.

#### Outputs

##### Product flows

###### Fresh or chilled duck meat reference product (`reference_duck_meat_output`)

Record measured net mass at facility-gate release, aligned with all declared reference-flow qualifiers.

- Selected flow: Meat of ducks, fresh or chilled `787f4c92-60eb-4533-8ee0-a0fbeda9d5c8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg reference output after measured net-mass normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `fao-leap-poultry-2016`; `eu-regulation-853-2004`
- Range: Reference-flow mass identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: fixed normalized reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `fao-leap-poultry-2016`

##### Waste flows

###### Packaging and trimming waste (`finishing_waste`)

Record packaging scrap, non-marketable trim, and rejected product by material and actual destination.

- Selected flow: Packaging and finishing waste by material; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_and_waste_records`
- Sources: `fao-leap-poultry-2016`
- Range: Provisional finishing-waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: broad screen pending product-form and facility records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant released to air (`refrigerant_to_air`)

Record refrigerant leakage by chemical when it is not already included in a linked refrigeration service dataset.

- Selected flow: Refrigerant emission to air by chemical; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconciled make-up minus documented recovery and stock change, allocated to the systems served
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional refrigerant-emission screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg refrigerant/kg reference product
  - Basis: broad screen pending service and recovery records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: By-product, waste, and wastewater management (`residuals_and_wastewater_management`)

#### Inputs

##### Product flows

###### Treatment energy and chemicals (`treatment_inputs`)

When treatment is on site, record electricity, fuels, treatment chemicals, and any supplemental water separately by carrier or material.

- Selected flow: Treatment inputs by carrier or material; Tiangong UUIDs unresolved
- Flow property / unit: Energy or Mass / kWh, MJ, or kg
- Amount rule: Metered or stock-reconciled use assigned to the treatment operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference duck-meat output and per m3 or kg treated stream
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional treatment-input screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ-equivalent/kg reference product
  - Basis: broad combined-energy screen; chemicals remain reported separately by mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Wastewater and residuals accepted for treatment (`streams_to_treatment`)

Transfer each wastewater, sludge, condemned-material, and inedible-residual stream from the producing process without changing its recorded mass or volume.

- Selected flow: Declared waste and wastewater streams; Tiangong UUIDs unresolved
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Equal to the linked producing-process output after documented storage changes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`

##### Elementary flows

No elementary input is prescribed except direct abstraction or resources that cross the environment boundary and are not represented as supplied product flows.

#### Outputs

##### Product flows

###### Recovered or rendered products (`recovered_products`)

Record any saleable rendered material, recovered fat, meal, or energy as a distinct product with measured quantity, destination, and revenue evidence.

- Selected flow: Recovered products by actual identity; Tiangong UUIDs unresolved
- Flow property / unit: Mass or Energy / kg, kWh, or MJ
- Amount rule: Measured output by product and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_and_waste_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`

##### Waste flows

###### Treatment sludge and final waste (`treatment_residues`)

Record sludge and final residues by dry or wet mass basis, moisture convention, and destination.

- Selected flow: Treatment sludge and final waste; Tiangong UUIDs unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured output by stream and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional treatment-residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg wet residue/kg reference product
  - Basis: broad screen pending treatment technology and moisture-basis records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated wastewater discharge (`treated_wastewater_discharge`)

Record discharged volume and measured pollutant loads after on-site treatment; use a linked off-site treatment dataset instead when the facility exports untreated wastewater.

- Selected flow: Treated wastewater and reported emissions to water; Tiangong UUIDs unresolved
- Flow property / unit: Volume and Mass / m3 and kg pollutant
- Amount rule: Discharge volume multiplied by representative concentration for each pollutant, with sampling basis retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference duck-meat output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `fao-leap-poultry-2016`; `eu-sa-bref-2023`
- Range: Provisional treated-water volume screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: m3/kg reference product
  - Basis: broad screen; pollutant loads require measured concentrations and are not estimated from this volume range
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Slaughter, cutting, rendering, refrigeration, and treatment operations | First subdivide the system and directly assign measured inputs, outputs, and emissions to the process or product that causes them whenever technically feasible. | `fao-leap-poultry-2016` |
| `allocation_joint_products` | Jointly generated edible meat and non-edible or separately marketed co-products | When subdivision and a defensible physical causal relation are not feasible, allocate remaining joint burdens by the relative annual net revenue of the product groups at the point of separation. Use facility- and period-specific mass and revenue records; do not apply the illustrative chicken factors in the source as duck defaults. | `fao-leap-poultry-2016` |
| `allocation_residuals_and_waste` | Residual materials and wastes | A zero-burden cut-off applies only to a residual that has a subsequent use and no positive or negative economic value at the boundary. If the facility pays for treatment or disposal, classify the stream as waste and include treatment burdens in the foreground system or linked treatment dataset. | `fao-leap-poultry-2016` |
| `allocation_internal_energy_recovery` | Energy recovered from on-site waste | Credit only energy used on site by subtracting the displaced purchased energy within the documented facility balance. For exported energy, disclose and justify system expansion or an alternative allocation consistent with the study goal. | `fao-leap-poultry-2016` |
| `allocation_disclosure` | All allocated foreground results | Report product grouping, separation points, revenue period and currency basis, treatment of edible offal, fat, feathers, blood, bones, condemned material, and sensitivity to an alternative mass or economic allocation where the choice materially changes results. | `fao-leap-poultry-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `duck_slaughter_dressing`; `duck_chilling_cutting_packaging` | Live input, dressed carcass, saleable meat, rework, loss, and stock change | Weighbridge, calibrated scale, batch and production records | lot_id; duck_type; live_mass; dead_or_condemned_mass; dressed_mass; saleable_mass; rework_mass; stock_change; cut_form; bone_skin_status | Reconcile batch scales to daily production totals and investigate unmatched mass | kg | Each lot, aggregated daily and monthly | At least 12 consecutive representative months where practicable | Each included facility and line | Sum compatible wet-mass fields; retain lot-level traceability; normalize only after monthly reconciliation | Calibration records, lot logs, reconciliation sign-off, and documented moisture or drip-loss convention |
| `cp_water_and_wastewater` | `duck_slaughter_dressing`; `residuals_and_wastewater_management` | Supplied water, reused water, wastewater volume, and pollutant load | Meters, invoices, flow meters, and representative laboratory samples | meter_start; meter_end; source; reuse_volume; discharge_volume; sample_time; COD; BOD; TSS; nitrogen; phosphorus; other_regulated_parameters | Read meters at consistent intervals and pair flow-weighted or justified representative concentrations with discharge volumes | m3 and mg/L or kg/m3 | Metered continuously or daily; sampling per permit and process variability | At least 12 representative months | Each facility; submeter major operations where available | Purchased or abstracted water minus documented non-process uses; pollutant load = volume × concentration with unit conversion | Meter calibration, invoice reconciliation, laboratory accreditation or validated method, sampling plan |
| `cp_energy_records` | `duck_slaughter_dressing`; `duck_chilling_cutting_packaging`; `residuals_and_wastewater_management` | Electricity and fuel by process | Submeters, utility invoices, fuel receipts, tank and stock records | carrier; meter_start; meter_end; purchase; opening_stock; closing_stock; process_share; heating_value; conversion_factor | Prefer submeters; otherwise allocate facility totals using documented equipment, runtime, or engineering evidence | kWh, MJ, kg, L, or m3 by carrier | Monthly, with interval data retained when available | At least 12 representative months | Each facility and major energy system | Reconcile purchases and stock; preserve carrier-specific totals; convert with documented lower or higher heating value consistently | Meter and invoice reconciliation, fuel specifications, allocation worksheet, and energy-balance review |
| `cp_material_records` | `duck_slaughter_dressing`; `duck_chilling_cutting_packaging` | Cleaning agents and packaging | Purchase, formulation, stock, and waste records | material_id; formulation; active_concentration; purchase_mass; opening_stock; closing_stock; returned_mass; waste_mass; product_assignment | Stock-change-adjusted material balance by declared formulation and packaging material | kg | Monthly | At least 12 representative months | Each facility and product family | Consumption = purchases + opening stock - closing stock - returns; reconcile packaging to packed output and waste | Invoices, stock counts, bill of materials, packaging specifications, chemical safety data sheets |
| `cp_temperature_records` | `duck_chilling_cutting_packaging` | Chilling and facility-gate product state | Calibrated probes, continuous loggers, and release records | lot_id; timestamp; location; product_temperature; room_temperature; corrective_action; release_status; never_frozen_confirmation | Measure representative product points and retain time-temperature history under the applicable food-safety plan | °C | Continuous room monitoring and each lot at release | Full reporting period | Each chilling, cutting, storage, and dispatch area | Retain raw values; report lot maxima and exceptions without averaging away non-conformance | Probe calibration, logger records, HACCP verification, release authorization, corrective-action record |
| `cp_coproduct_and_waste_records` | `duck_slaughter_dressing`; `duck_chilling_cutting_packaging`; `residuals_and_wastewater_management` | Co-products, residuals, condemned material, and waste | Scales, transfer notes, invoices, disposal records, and destination confirmations | stream_id; status; mass; moisture_basis; destination; revenue; treatment_cost; currency; date; transport_inclusion | Weigh each material stream where practicable and retain evidence distinguishing product, residual, and waste status | kg and currency | Each shipment, aggregated monthly | Same period as the main production data | Each facility and external destination | Sum by stream and status; use consistent net-revenue period for allocation; reconcile to mass balance | Scale records, invoices, waste manifests, destination receipts, legal classification, allocation review |
| `cp_refrigerant_records` | `duck_chilling_cutting_packaging` | Refrigerant stock, make-up, recovery, and leakage | Service logs, cylinder records, leak inspections, and equipment inventory | refrigerant; charge; opening_stock; purchases; recovered; closing_stock; system_served; leak_event | Reconcile each chemical and system; do not infer leakage from a generic factor when service records exist | kg | Each service event and annual reconciliation | At least 12 representative months | Each refrigeration system serving the foreground boundary | Estimated release = purchases + opening stock - closing stock - recovered - documented transfers, subject to non-negative reconciliation | Certified service records, cylinder receipts, leak-test results, equipment inventory |
| `cp_treatment_records` | `residuals_and_wastewater_management` | On-site treatment inputs and outputs | Treatment meters, operator logs, laboratory results, and transfer records | treatment_route; input_mass_or_volume; energy; chemicals; recovered_product; sludge; discharge; operating_time | Reconcile each treatment route to accepted streams and measured outputs | kg, m3, kWh, and MJ | Daily or each batch, aggregated monthly | Same period as production data | Each on-site treatment unit | Sum by treatment route; maintain dry/wet basis and pollutant-load calculations separately | Operator logs, meter calibration, laboratory results, treatment performance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory amount | Normalized amount = period amount assigned to the product / period net mass of conforming reference duck meat | Assigned flow amount; conforming reference-product mass | Flow amount per 1 kg reference product | `fao-leap-poultry-2016` |
| `calc_product_yield` | Slaughter and finishing mass balance | Product yield = net reference duck-meat mass / delivered live-duck mass; report dressed-carcass and edible-product conventions separately | Delivered live mass; dressed mass; saleable reference-product mass | Dimensionless yield and kg/kg live duck | `fao-leap-poultry-2016` |
| `calc_material_consumption` | Cleaning agents, packaging, fuels, and refrigerants | Consumption = purchases + opening stock - closing stock - returns or documented transfers; preserve chemical or carrier identity | Purchase and stock records | Consumed mass or energy by material | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |
| `calc_wastewater_load` | Wastewater pollutant rows | Pollutant load = representative discharge volume × concentration, with concentration and volume units converted explicitly; use flow-weighted averaging where data support it | Discharge volume; concentration; sampling basis | kg pollutant per period and per kg reference product | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |
| `calc_joint_economic_allocation` | Remaining indivisible joint burdens | Allocation fraction for product group i = net revenue of group i / sum of positive net revenues of all allocated product groups for the same facility and period | Product quantities; contemporaneous prices or revenues; separable burdens | Allocated foreground burden by product group | `fao-leap-poultry-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and inputs | Product identity, duck type, cut form, bone and skin status, packaging convention, fresh or chilled state, facility geography, and production period must be unambiguous. | Product specification, lot and release records, and exact reference-flow UUID check |
| `dq_temporal` | Foreground activity data | Use at least 12 consecutive representative months where practicable to capture seasonality, downtime, cleaning, and refrigeration loads; justify a shorter campaign and disclose extrapolation. | Dated raw records, coverage calculation, and representativeness statement |
| `dq_measurement` | Mass, water, energy, temperature, and emissions | Use calibrated or verified measurement systems; retain original readings and conversion factors; do not replace measurable foreground quantities with the provisional ranges in this PCR. | Calibration certificates, meter logs, invoices, laboratory methods, and reconciliation records |
| `dq_completeness` | Process and material balance | Cover all required processes and at least 95% of assessed impact per reported category where the FAO LEAP method is used; known small flows remain in the inventory or are estimated and disclosed rather than silently omitted. | Completeness checklist, cut-off register, scoping analysis, and mass/energy balance |
| `dq_allocation` | Co-products, residuals, and waste | Allocation status, separation points, facility-period quantities, net revenues, treatment costs, and alternative-method sensitivity must be reviewable. | Allocation worksheet, invoices, destination records, and sensitivity calculation |
| `dq_hygiene_temperature` | Food-safety-related operating state | Retain records demonstrating inspection, sanitation, chilling, and release-temperature compliance under the applicable jurisdiction. | HACCP or equivalent records, inspection disposition, sanitation logs, calibrated temperature logs |
| `dq_secondary_data` | Upstream and off-site datasets | Select data representative of geography, technology, time, and treatment route; disclose mismatches and avoid double counting transport, treatment, or refrigerant emissions. | Dataset metadata, selection rationale, and boundary reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The product-flow UUID must resolve exactly to an approved Product flow for Meat of ducks, fresh or chilled with CPC 21122 and the Mass reference property; stored PCR references must omit dataset versions. |  |
| `validate_reference_qualifiers` | Dataset metadata and reference exchange | Reject or mark incomplete any data package missing cut or carcass form, bone status, skin status, packaging inclusion, fresh or chilled state, never-frozen confirmation, release temperature, edible-yield convention, geography, or production period. | `fao-leap-poultry-2016`; `eu-regulation-853-2004` |
| `validate_process_coverage` | Foreground process map | Confirm that slaughter and dressing, chilling and facility-gate release, process water, cleaning, energy, refrigeration, co-products, waste, and wastewater are present or explicitly justified as not applicable or represented by a linked dataset. | `fao-leap-poultry-2016`; `codex-cxc-58-2005`; `eu-sa-bref-2023` |
| `validate_mass_balance` | Live-duck to product and residual flows | Reconcile mass on consistent wet-mass and stock-change conventions. Investigate and disclose unexplained differences; do not force the balance by changing the fixed 1 kg reference output. | `fao-leap-poultry-2016` |
| `validate_temperature_state` | Chilling, storage, and release | Verify calibrated lot-level temperature evidence and never-frozen status against the applicable jurisdictional rule. When EU Regulation (EC) No 853/2004 applies, confirm chilling as soon as possible to no more than 4 °C. | `eu-regulation-853-2004`; `codex-cxc-58-2005` |
| `validate_allocation` | Co-product handling | Confirm subdivision before allocation, consistent product grouping, contemporaneous facility-period net-revenue keys for remaining joint burdens, waste-treatment inclusion, and disclosed sensitivity where allocation choice is material. | `fao-leap-poultry-2016` |
| `validate_provisional_ranges` | All reasoned-estimate ranges | Treat provisional ranges only as screening signals. A value outside a range requires investigation, while a value inside a range does not prove quality; publication-critical defaults require reviewed source evidence. |  |
| `validate_data_coverage` | Foreground data package | Report accepted inputs, checks performed, checks skipped, findings, and completeness. Missing required raw records, unresolved units, or unsupported allocation makes validation inconclusive rather than silently passing. | `fao-leap-poultry-2016`; `eu-sa-bref-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for fresh or chilled duck meat at the primary-processing facility gate |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` after methodology and data review |
| allowed_use | Product carbon footprint or LCA modelling where the declared product form, facility gate, geography, technology, data period, allocation, and temperature state match the study |
| excluded_use | Frozen duck meat; live-duck farm-gate production; edible offal, fat, or foie gras as the reference product; further-processed duck products; unqualified global or sector averages; comparative public claims without required review |
| required_metadata | PCR id and version when published; product-flow UUID; product qualifiers; facility geography; production period; process coverage; upstream dataset identities; allocation method and keys; packaging convention; release temperature; data-owner and review status |
| required_quality_disclosure | Foreground coverage; measurement and calibration evidence; temporal representativeness; mass and energy reconciliation; cut-offs; secondary-data substitutions; unresolved UUIDs; provisional-range use; allocation sensitivity; validation checks skipped |
| update_trigger | Material change in product form, slaughter or chilling technology, facility geography, energy or water system, refrigerant, packaging, treatment route, allocation economics, applicable hygiene rule, data older than the intended representativeness period, or resolution of provisional evidence and UUID gaps |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-58-2005` | standard | Codex Alimentarius Commission. CXC 58-2005, Code of Hygienic Practice for Meat. Official FAO/WHO Codex PDF: https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf (retrieved 2026-08-11). | Slaughter and dressing hygiene, potable-water washing, sanitation, chilling facilities, contamination prevention, inspection and process-control records |
| `eu-regulation-853-2004` | standard | European Parliament and Council. Regulation (EC) No 853/2004 laying down specific hygiene rules for food of animal origin, consolidated version of 2026-05-07, Annex III Section II. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02004R0853-20260507 (retrieved 2026-08-11). | Current poultry slaughter, cutting, chilling, storage, and temperature-state requirements; 4 °C conditional rule when applicable |
| `eu-sa-bref-2023` | official_guidance | European Commission Joint Research Centre. Best Available Techniques Reference Document for Slaughterhouses, Animal By-products and/or Edible Co-products Industries, 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-02/SA%20BREF.pdf (retrieved 2026-08-11). | Slaughterhouse boundary, input-output inventories, water and energy management, refrigeration, waste, by-products, and wastewater treatment |
| `fao-leap-poultry-2016` | official_guidance | FAO. 2016. Greenhouse gas emissions and fossil energy use from poultry supply chains: Guidelines for assessment. Livestock Environmental Assessment and Performance Partnership. ISBN 978-92-5-109496-9. Official record: https://openknowledge.fao.org/handle/20.500.14283/i6421en (retrieved 2026-08-11). | Product-weight reference flow, primary-processing process map, material balance, foreground collection, system boundary, co-product allocation, cut-off disclosure, and data-quality rules |
