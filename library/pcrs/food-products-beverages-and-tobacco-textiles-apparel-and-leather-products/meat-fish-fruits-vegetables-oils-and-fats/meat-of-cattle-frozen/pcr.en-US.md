---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat of cattle, frozen

## 1. Scope and Applicability

This PCR applies to cattle meat preserved by freezing and supplied as carcasses, sides, quarters, bone-in cuts, boneless cuts, trimmings, or minced meat at the frozen-meat production gate. It covers integrated abattoir routes and routes that purchase chilled cattle meat for cutting, packaging, and freezing. A data package shall declare the cattle species or commercial class, product presentation, bone-in or boneless state, packaging form, freezing technology, production geography, and gate.

The foreground begins with slaughter-ready live cattle at the abattoir gate for an integrated route, or with traceable purchased carcasses or chilled cattle meat at the receiving gate for a partial route. It ends with net frozen cattle meat at the declared plant gate, ready for cold-chain dispatch after freezing and any included frozen storage. Upstream cattle rearing, feed production, slaughter or chilling omitted by a partial route, manufacture of purchased energy and materials, retail, cooking, consumption, and end-of-life after the declared gate require linked datasets and are not silently absorbed into the foreground.

Fresh or chilled cattle meat, edible offal, prepared meals, cooked or cured meat products, non-cattle meat, and meat that is merely surface-chilled without meeting the declared frozen state are excluded. Food-safety conformity is a prerequisite for producing inventory data; this PCR does not replace competent-authority requirements, HACCP plans, or product specifications.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-frozen |
| classification_refs | CPC 3.0:21131 Meat of cattle, frozen |
| covered_products | Frozen cattle carcasses, sides, quarters, bone-in cuts, boneless cuts, trimmings, and minced cattle meat |
| excluded_products | Fresh or chilled cattle meat; edible offal; cooked, cured, seasoned, or otherwise prepared meat; non-cattle meat; retail or food-service products beyond the declared plant gate |
| representative_product | Packaged frozen boneless cattle meat at the frozen-meat production plant gate |
| production_route | Slaughter and dressing where integrated; chilling; cutting or deboning as applicable; packaging; quick freezing; frozen storage to the declared gate |
| market_state | Frozen, hygienically handled, traceable by lot, packaged or otherwise protected as declared, and maintained at -18 °C or colder after thermal stabilization |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Frozen cattle meat supplied for subsequent distribution, processing, retail, or food service |
| How much | 1 kg net product mass, excluding transport packaging and separately declared ice or glaze |
| How well | Product identity and presentation declared; thermal centre at -18 °C or colder after stabilization; food-safety release requirements met; cold-chain condition preserved to the declared gate |
| How long or cycle | One production lot through the declared foreground route and included frozen-storage duration |
| reference_flow_link | `frozen_cattle_meat_reference` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of cattle, frozen `16e6d353-2acd-4dc3-99b3-fce9d27fbbd7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cattle species or commercial class; product presentation (carcass / cut / trimming / minced); bone-in or boneless state; net product mass basis; packaging form; freezing technology; thermal-centre release temperature; included storage duration; production geography; production period; plant gate |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg of net frozen cattle meat as the quantitative reference; exclude pallets, reusable transport items, and separately reported packaging. |
| `net_product_mass` | product and intermediate meat masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated scale records. State whether weights are hot carcass, chilled carcass, prepared meat, or frozen net product, and do not mix these bases without an explicit conversion. |
| `frozen_state_temperature` | freezing release and frozen storage | Temperature | °C | Measure the thermal-centre release temperature and record time-resolved cold-store temperatures; the product shall reach -18 °C or colder after stabilization and remain at -18 °C or colder subject only to documented applicable tolerances. |
| `water_mass_conversion` | water inputs and wastewater outputs | Mass or volume | kg or m3 | Preserve measured volume and temperature; when converting volume to mass, record the density assumption and conversion formula. |
| `storage_duration` | frozen storage | Time | day | Record entry and exit timestamps by lot and calculate storage duration; storage electricity and losses shall be normalized using the same lot-time coverage. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Slaughter-ready live cattle at the abattoir gate for an integrated route, or purchased traceable chilled cattle carcasses or meat at the receiving gate for a partial route |
| starting_condition_role | Primary material input whose upstream production and any omitted slaughter or chilling are represented by linked upstream datasets |
| product_classification_scope | Frozen cattle meat corresponding to CPC 3.0:21131; fresh or chilled cattle meat and edible offal remain outside this product identity |
| recursive_input_rule | If frozen cattle meat in the same category is used as an input, record it once as a traceable upstream product input with its own dataset and do not recursively recreate its already completed production stages |
| upstream_dataset_requirement | Link geographically and temporally representative datasets for live cattle or purchased chilled meat and for purchased electricity, fuels, water, packaging, cleaning agents, refrigerants, transport, and waste treatment |
| disclosure | Declare the actual starting material, included and omitted unit processes, product presentation, co-product treatment, cut-offs, storage duration, temperature-control regime, data gaps, and unresolved flow identities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_accounting` | all foreground routes | Include every foreground operation from the declared starting condition through released frozen cattle meat, including animal deconstruction where applicable, packaging, refrigeration, water use, wastewater handling, and within-plant transport; explicitly disclose any omitted operation and its upstream dataset. | `fao-leap-large-ruminants-2016`; `codex-cxc-58-2005` |
| `boundary_quick_freezing` | quick freezing and transfer to storage | Include energy, refrigerant make-up and leakage, product losses, freezing release checks, and transfer to cold storage; freezing is complete only after the thermal centre reaches -18 °C or colder after stabilization. | `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991` |
| `boundary_cold_storage` | frozen storage before the declared gate | Include storage electricity, refrigerant losses, defrost-related resources, product losses, and the actual lot storage duration; preserve the cold-chain temperature record. | `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991` |
| `boundary_cutoff_disclosure` | material and energy flows | Do not omit a flow known to be environmentally or mass-balance significant. Any screened-out flow shall be identified with the screening basis and included in completeness and sensitivity review. | `fao-leap-large-ruminants-2016` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_and_dressing` | Cattle receiving, slaughter, dressing, and primary chilling | conditional | Include when live cattle enter the foreground; omit only when a verified purchased-carcass or chilled-meat dataset covers these operations | foreground primary processing | kg dressed and chilled cattle meat transferred to the next included process |
| `cutting_and_packaging` | Cutting, deboning, trimming, portioning, mincing, and packaging | conditional | Include the operations actually used to obtain the declared product presentation and packaging form | foreground product preparation | kg prepared chilled cattle meat transferred to freezing |
| `quick_freezing` | Quick freezing and release | required | Always required for the frozen product identity | foreground state conversion | kg frozen cattle meat released at -18 °C or colder at the thermal centre |
| `frozen_storage` | Frozen storage to the declared plant gate | required | Include storage from freezing release until the declared gate; a zero-duration direct transfer shall still be recorded | foreground conditioning and holding | kg net frozen cattle meat at the declared gate and lot-days stored |

### Process: Cattle receiving, slaughter, dressing, and primary chilling (`slaughter_and_dressing`)

#### Inputs

##### Product flows

###### Slaughter-ready live cattle (`live_cattle_input`)

Record accepted cattle lots and measured live weight entering the integrated abattoir route. The Tiangong product-flow UUID is unresolved and shall be selected by exact lookup before publication.

- Selected flow: Slaughter-ready live cattle (UUID unresolved)
- Flow property / unit: Mass / kg live weight
- Amount rule: Sum accepted live-weight records for cattle attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen cattle meat reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_material_balance`
- Sources: `fao-leap-large-ruminants-2016`; `codex-cxc-58-2005`
- Range: Provisional live-weight input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.3
  - Upper: 5.0
  - Unit: kg live weight/kg net frozen cattle meat
  - Basis: broad candidate-stage screen spanning carcass, bone-in, and boneless product routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity used in slaughter and chilling (`slaughter_electricity`)

Record metered or defensibly sub-metered electricity for receiving, slaughter, dressing, chilling, pumps, compressed air, lighting, and sanitation.

- Selected flow: Electricity, supplied at plant (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity allocated to the process and production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional slaughter and chilling electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5.0
  - Unit: kWh/kg dressed chilled meat
  - Basis: broad candidate-stage facility electricity screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water supplied to slaughter, dressing, chilling, and sanitation (`slaughter_water`)

Record incoming process and sanitation water, preserving measured volume and any conversion to mass.

- Selected flow: Process water (UUID unresolved)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered water entering the process during the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `fao-leap-large-ruminants-2016`; `codex-cxc-58-2005`
- Range: Provisional slaughter water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 30
  - Unit: kg water/kg dressed chilled meat
  - Basis: broad candidate-stage water-use screen requiring site-data replacement
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fuels and thermal energy used on site (`slaughter_thermal_energy`)

Record each fuel or purchased thermal-energy carrier separately. Direct combustion emissions shall be inventoried as substance-specific elementary flows when combustion occurs inside the foreground.

- Selected flow: Fuel or thermal energy, carrier-specific (UUID unresolved)
- Flow property / unit: Energy or mass / MJ, kWh, or kg
- Amount rule: Metered or invoiced carrier quantity allocated to slaughter and primary chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional thermal-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ/kg dressed chilled meat
  - Basis: broad candidate-stage thermal-energy screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed and chilled cattle meat transferred for preparation or freezing (`dressed_chilled_meat_output`)

Calculate the accepted chilled meat output from calibrated lot weights after dressing and primary chilling.

- Selected flow: Dressed and chilled cattle meat (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured chilled carcass and edible meat mass transferred to the next included process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot and per 1 kg downstream net frozen cattle meat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_material_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional dressed-meat output fraction QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 0.8
  - Unit: kg dressed chilled meat/kg accepted live weight
  - Basis: broad candidate-stage mass-yield screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Revenue-generating slaughter co-products (`slaughter_coproducts`)

Record each revenue-generating hide, edible co-product, tallow, rendering material, or other product separately by mass and revenue category. Flow UUIDs remain unresolved pending exact lookup.

- Selected flow: Slaughter co-product, product-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of each saleable co-product by production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot and per 1 kg dressed chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_material_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional co-product mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4.0
  - Unit: kg co-products/kg dressed chilled meat
  - Basis: broad candidate-stage aggregate screen; review each co-product separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Non-revenue slaughter residuals and condemned material (`slaughter_waste`)

Record condemned material, gut contents, screenings, and other non-revenue residuals by treatment route without recasting saleable co-products as waste.

- Selected flow: Slaughter residual or condemned material, route-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass dispatched to each treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastes`
- Sources: `fao-leap-large-ruminants-2016`; `codex-cxc-58-2005`
- Range: Provisional slaughter-waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3.0
  - Unit: kg waste/kg dressed chilled meat
  - Basis: broad candidate-stage residual screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater sent to treatment (`slaughter_wastewater`)

Record wastewater volume or mass, treatment destination, and measured or sampled load indicators required by the selected treatment dataset.

- Selected flow: Wastewater from meat processing (UUID unresolved)
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Metered wastewater discharge plus documented unmetered streams
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastes`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional slaughter-wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 35
  - Unit: kg wastewater/kg dressed chilled meat
  - Basis: broad candidate-stage discharge screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cutting, deboning, trimming, portioning, mincing, and packaging (`cutting_and_packaging`)

#### Inputs

##### Product flows

###### Chilled cattle meat received for preparation (`chilled_meat_input`)

Record internal transfer or purchased chilled cattle meat by presentation and lot. Purchased meat requires a traceable upstream dataset covering omitted production stages.

- Selected flow: Chilled cattle meat (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured chilled meat mass accepted for the declared preparation route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared chilled meat sent to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_material_balance`
- Sources: `codex-cxc-58-2005`; `fao-leap-large-ruminants-2016`
- Range: Provisional chilled-meat input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 3.0
  - Unit: kg chilled meat/kg prepared chilled meat
  - Basis: broad candidate-stage screen spanning bone-in and boneless preparation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_input`)

Record primary and secondary packaging by material and mass; exclude reusable transport items from net product mass and model them separately when in scope.

- Selected flow: Food-contact and secondary packaging material, material-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Issued packaging less documented returns and unused stock, by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared chilled meat sent to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_material_balance`
- Sources: `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg packaging/kg prepared chilled meat
  - Basis: broad candidate-stage packaging screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity used in cutting and packaging (`cutting_electricity`)

Record electricity for cutting, deboning, mincing, packaging, room cooling, compressed air, and sanitation attributable to this process.

- Selected flow: Electricity, supplied at plant (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity allocated to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_utilities`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional preparation electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 3.0
  - Unit: kWh/kg prepared chilled meat
  - Basis: broad candidate-stage electricity screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared chilled cattle meat sent to freezing (`prepared_chilled_meat_output`)

Record the net prepared meat transferred to freezing, preserving presentation, bone status, packaging form, and lot identity.

- Selected flow: Prepared chilled cattle meat (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted net meat mass transferred to freezing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen cattle meat reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_material_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional prepared-meat transfer QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.5
  - Unit: kg prepared chilled meat/kg net frozen cattle meat
  - Basis: broad candidate-stage pre-freezing loss screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Revenue-generating preparation co-products (`cutting_coproducts`)

Record bones, fat, trimmings, or other saleable outputs separately when they leave for another market.

- Selected flow: Preparation co-product, product-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of each revenue-generating output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_material_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional preparation co-product QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.0
  - Unit: kg co-products/kg prepared chilled meat
  - Basis: broad candidate-stage screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation rejects and packaging waste (`cutting_waste`)

Record non-revenue meat rejects and packaging scrap separately by treatment route.

- Selected flow: Meat-processing or packaging waste, route-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass dispatched to each treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_material_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional preparation-waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg waste/kg prepared chilled meat
  - Basis: broad candidate-stage rejection and scrap screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Quick freezing and release (`quick_freezing`)

#### Inputs

##### Product flows

###### Prepared chilled cattle meat entering the freezer (`freezing_meat_input`)

Record the net meat mass and temperature entering the freezing equipment by lot.

- Selected flow: Prepared chilled cattle meat (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured input mass to the quick-freezing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released frozen cattle meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_batch_energy`
- Sources: `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- Range: Provisional freezing-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.3
  - Unit: kg chilled meat/kg released frozen meat
  - Basis: broad candidate-stage freezing-loss screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity used by quick freezing (`freezing_electricity`)

Record freezer, fan, pump, conveyor, defrost, and attributable auxiliary electricity during the batch or continuous production period.

- Selected flow: Electricity, supplied at plant (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity allocated to frozen product released in the same operating period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released frozen cattle meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_batch_energy`
- Sources: `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- Range: Provisional quick-freezing electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5.0
  - Unit: kWh/kg released frozen meat
  - Basis: broad candidate-stage technology screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up supplied to freezer system (`freezing_refrigerant_makeup`)

Record each refrigerant species added to equipment serving quick freezing and allocate only the attributable portion.

- Selected flow: Refrigerant, substance-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant additions allocated from a documented system mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released frozen cattle meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional refrigerant make-up QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg refrigerant/kg released frozen meat
  - Basis: deliberately broad candidate-stage leak screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen cattle meat released to storage (`released_frozen_meat`)

Release only lots whose thermal-centre temperature and food-safety checks meet the declared requirements.

- Selected flow: Frozen cattle meat, internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured net frozen product mass released after thermal stabilization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg released frozen cattle meat before included storage losses
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_batch_energy`
- Sources: `codex-cxc-8-1976-2008`
- Range: Freezing mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.7
  - Upper: 1.0
  - Unit: kg released frozen meat/kg prepared chilled meat input
  - Basis: candidate-stage mass-balance screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Freezing rejects and product losses (`freezing_waste`)

Record rejected product, purge, damaged packaging, and other losses by treatment route.

- Selected flow: Freezing reject or product loss, route-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected or lost mass leaving the freezing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released frozen cattle meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_batch_energy`
- Sources: `codex-cxc-8-1976-2008`
- Range: Provisional freezing-waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg waste/kg released frozen meat
  - Basis: broad candidate-stage loss screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant emitted to air from freezer system (`freezing_refrigerant_emission`)

Inventory each leaked refrigerant as a substance-specific elementary flow; do not use an aggregate refrigerant-emissions proxy. UUIDs remain unresolved until the specific refrigerant is known and exactly matched.

- Selected flow: Refrigerant emitted to air, substance-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered refrigerant loss attributable to quick freezing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released frozen cattle meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional refrigerant-emission QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg refrigerant/kg released frozen meat
  - Basis: deliberately broad candidate-stage leak screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Frozen storage to the declared plant gate (`frozen_storage`)

#### Inputs

##### Product flows

###### Released frozen cattle meat entering storage (`stored_frozen_meat_input`)

Record lot mass, entry time, packaging form, and thermal condition at cold-store entry.

- Selected flow: Released frozen cattle meat, internal transfer (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured net frozen meat mass accepted into storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen cattle meat at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_lot_energy_temperature`
- Sources: `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- Range: Provisional storage-input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 1.2
  - Unit: kg storage input/kg net frozen meat at gate
  - Basis: broad candidate-stage storage-loss screen
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity used in frozen storage (`storage_electricity`)

Record cold-store compressors, fans, pumps, defrost, lighting, controls, and attributable auxiliaries over the actual lot storage duration.

- Selected flow: Electricity, supplied at plant (UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Time- and capacity-consistent allocation of metered cold-store electricity to stored lot mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg-month of frozen meat stored, then normalized to the actual reference-lot duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_lot_energy_temperature`
- Sources: `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991`
- Range: Provisional frozen-storage electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 2.0
  - Unit: kWh/(kg·month)
  - Basis: broad candidate-stage cold-store screen
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up supplied to cold store (`storage_refrigerant_makeup`)

Record each refrigerant species added to equipment serving frozen storage and allocate only the attributable portion.

- Selected flow: Refrigerant, substance-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant additions allocated from the cold-store system mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg-month of frozen meat stored, then normalized to actual duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional cold-store refrigerant QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg refrigerant/(kg·month)
  - Basis: deliberately broad candidate-stage leak screen
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net frozen cattle meat at declared plant gate (`frozen_cattle_meat_reference`)

This row realizes the functional unit after all included storage losses. The Tiangong product UUID is held only in the reference-flow definition and is not repeated as an inventory UUID.

- Selected flow: Meat of cattle, frozen, reference product
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net frozen cattle meat at the declared plant gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `codex-cxc-8-1976-2008`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: exact quantitative reference
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `codex-cxc-8-1976-2008`

##### Waste flows

###### Frozen-storage product losses (`storage_product_loss`)

Record dehydration, damaged packs, temperature-abuse rejects, and expired lots by treatment route; do not net losses silently from the reference product.

- Selected flow: Frozen meat storage loss, route-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured inventory loss and rejected mass during the declared storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen cattle meat at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_lot_energy_temperature`
- Sources: `fao-meat-cold-store-1991`; `codex-cxc-8-1976-2008`
- Range: Provisional packaged-storage loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg loss/kg net frozen meat at gate
  - Basis: broad candidate-stage screen; the FAO handbook reports higher evaporation risk for unpackaged meat and requires packaging and temperature history to be retained
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant emitted to air from cold store (`storage_refrigerant_emission`)

Inventory each leaked refrigerant as a substance-specific elementary flow using the same system mass balance as refrigerant make-up.

- Selected flow: Refrigerant emitted to air, substance-specific (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered refrigerant loss attributable to stored lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg-month of frozen meat stored, then normalized to actual duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `fao-leap-large-ruminants-2016`
- Range: Provisional cold-store refrigerant-emission QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg refrigerant/(kg·month)
  - Basis: deliberately broad candidate-stage leak screen
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multifunctional foreground processes | First subdivide separately metered slaughter, dressing, cutting, freezing, storage, rendering, and utility operations wherever technically feasible; apply allocation only to genuinely shared burdens. | `fao-leap-large-ruminants-2016` |
| `allocation_revenue_products` | meat and revenue-generating co-products | When subdivision cannot resolve shared primary-processing burdens, allocate those burdens among frozen meat and all revenue-generating co-products using the revenue share for a representative period; retain quantities, prices, currency, geography, period, and calculation. | `fao-leap-large-ruminants-2016` |
| `allocation_residuals_and_waste` | non-revenue residuals and waste | Assign no product share to a material with no revenue at the processing gate, but retain collection, treatment, transport, and direct-emission burdens caused inside the foreground; do not classify a revenue-generating output as waste. | `fao-leap-large-ruminants-2016` |
| `allocation_shared_species` | facilities processing multiple animal species | Prefer species-specific metering or campaigns. If shared burdens remain, document the allocation basis using processed mass and operational differences; do not transfer burdens between species without an explicit calculation and sensitivity check. | `fao-leap-large-ruminants-2016` |
| `allocation_consistency` | all allocated results | Use one internally consistent allocation period and method across mass balance, utility use, waste handling, and co-product revenue; disclose sensitivity to materially different prices or methods. | `fao-leap-large-ruminants-2016` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_slaughter_material_balance` | `slaughter_and_dressing` | live cattle, dressed meat, and saleable co-products | lot weight and dispatch records | lot_id; animal_count; live_weight; hot_carcass_weight; chilled_weight; co_product_type; co_product_mass; timestamp | calibrated scales reconciled to production and dispatch records | kg | each lot | all production days in the representative period | each included abattoir | sum by lot and output category; reconcile opening and closing work-in-process | scale calibration, lot traceability, reconciliation sign-off, and exception log |
| `cp_slaughter_utilities` | `slaughter_and_dressing` | electricity, fuels, thermal energy, and water | meter, invoice, and operating-hour records | meter_id; opening_reading; closing_reading; fuel_quantity; water_volume; operating_hours; production_mass; allocation_basis | direct meters or documented sub-meter/allocation method | kWh; MJ; kg; m3 | shift, day, or invoice period | representative continuous 12-month period where available | each included facility and utility system | subtract non-production uses; allocate shared use consistently; normalize to chilled output | meter calibration, invoices, allocation worksheet, and missing-data flags |
| `cp_slaughter_wastes` | `slaughter_and_dressing` | wastewater, condemned material, and non-revenue residuals | flowmeter, weighbridge, manifest, and laboratory records | stream_id; mass_or_volume; destination; treatment_route; COD; nitrogen; sampling_time | metering or weighing plus representative composite sampling where treatment data require composition | kg; m3; mg/L | each dispatch and scheduled sampling | same period as product and utilities | each included discharge and waste route | aggregate by stream and route; preserve sampled loads and uncertainty | meter or scale checks, laboratory report, waste manifest, and mass-balance reconciliation |
| `cp_cutting_material_balance` | `cutting_and_packaging` | chilled meat, prepared meat, packaging, co-products, and rejects | batch weights and stock issue records | batch_id; input_mass; output_mass; presentation; bone_state; packaging_material; packaging_mass; co_product_mass; reject_mass | calibrated scales and inventory issue/return records | kg | each batch | all batches in representative period | each included cutting or packaging line | reconcile mass by batch; aggregate only like presentations | calibration, batch traveller, packaging bill, and yield reconciliation |
| `cp_cutting_utilities` | `cutting_and_packaging` | cutting-room and packaging electricity | meter and operating records | meter_id; reading; operating_hours; line_output; allocation_basis | sub-meter or documented engineering allocation from facility meter | kWh | shift or day | same period as prepared-meat output | each included line and shared utility | allocate shared electricity consistently and normalize to prepared output | meter evidence, equipment schedule, and allocation review |
| `cp_freezing_batch_energy` | `quick_freezing` | meat input, frozen output, electricity, rejects, and release temperature | batch or continuous-run records | lot_id; input_mass; output_mass; electricity; start_time; end_time; inlet_temperature; thermal_centre_temperature; reject_mass | calibrated scales, electricity meter, and calibrated product-temperature sensors | kg; kWh; °C; h | each lot or continuous run | all freezing runs in representative period | each freezer and production line | match energy and mass time windows; normalize to released frozen output | meter calibration, temperature-sensor calibration, release record, and downtime log |
| `cp_refrigerant_balance` | `quick_freezing` | freezer and cold-store refrigerant make-up and emissions | refrigerant inventory and service records | refrigerant_species; opening_inventory; additions; recovery; transfers; closing_inventory; equipment_id; service_date | mass balance from weighed cylinders, purchase records, and service logs | kg | each service event with annual reconciliation | representative 12-month period including seasonal operation | each refrigeration system serving included processes | calculate unrecovered loss by species and allocate using documented equipment service or load basis | cylinder weights, invoices, technician logs, leak test, and reconciliation |
| `cp_storage_lot_energy_temperature` | `frozen_storage` | stored mass, duration, electricity, temperatures, losses, and release mass | warehouse management, interval meter, temperature logger, and loss records | lot_id; entry_mass; exit_mass; entry_time; exit_time; interval_kWh; air_temperature; product_temperature; loss_reason; loss_mass | lot timestamps linked to interval electricity and calibrated continuous temperature loggers | kg; day; kWh; °C | continuous temperature and meter intervals; each lot movement | complete declared storage period and representative annual facility period | each included cold room and lot | calculate lot-days; allocate electricity consistently by capacity and time; reconcile losses | logger and meter calibration, alarm history, stock reconciliation, and corrective-action record |
| `cp_coproduct_revenue` | `slaughter_and_dressing` | allocation shares for meat and co-products | sales and production records | product_id; mass; net_price; currency; market; transaction_date; excluded_fees | audited or traceable invoices matched to production quantities | kg and currency/kg | each transaction, summarized monthly | representative 12-month period aligned with inventory | each included facility and output market | calculate revenue by product and representative revenue shares; test material price variation | invoice sample, currency method, reconciliation to accounts, and sensitivity worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground amounts | normalized amount = attributable lot or period amount / net frozen cattle meat mass at the declared gate | attributable amount; net reference-product mass | amount per 1 kg reference flow | `fao-leap-large-ruminants-2016` |
| `calc_process_yield` | slaughter, preparation, freezing, and storage | process yield = accepted process output mass / accepted process input mass; report numerator and denominator states separately | accepted input mass; accepted output mass | mass yield and loss fraction | `fao-leap-large-ruminants-2016` |
| `calc_water_mass` | water and wastewater | converted mass = measured volume × documented density at the recorded or justified temperature; preserve original volume | measured volume; density; temperature | kg water or wastewater |  |
| `calc_refrigerant_loss` | freezing and storage refrigeration | unrecovered loss by species = opening inventory + additions + inbound transfers - recovery - outbound transfers - closing inventory; negative results require investigation | inventory and service records by refrigerant species | kg refrigerant emitted or unresolved balance | `fao-leap-large-ruminants-2016` |
| `calc_storage_energy` | frozen storage | allocated storage electricity = interval electricity × documented lot allocation share; lot result = sum allocated electricity over entry-to-exit intervals | interval electricity; lot mass; occupied capacity; entry and exit time | kWh per stored lot and kWh/(kg·month) | `codex-cxc-8-1976-2008`; `fao-meat-cold-store-1991` |
| `calc_revenue_share` | shared slaughter and preparation burdens | revenue share_i = quantity_i × representative net price_i / sum(quantity_j × representative net price_j) for all revenue-generating co-products j | product quantities; net prices; currency and period | allocation share by product | `fao-leap-large-ruminants-2016` |
| `calc_mass_balance` | each process and full foreground | mass-balance gap = total measured inputs - total measured product outputs - total measured waste outputs - documented inventory change; investigate rather than force-close material gaps | inputs; outputs; wastes; inventory change | absolute and relative mass-balance gap | `fao-leap-large-ruminants-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | cattle, meat, co-products, and reference product | Preserve lot linkage from declared starting material through the frozen reference product and declare presentation, bone state, packaging, route, and gate. | receiving, production, warehouse, and release records linked by lot identifier |
| `dq_temporal_representativeness` | routine foreground data | Use a recent representative 12-month period where available, or justify a shorter campaign and disclose seasonality, downtime, and exceptional operation. | dated raw records, production calendar, and representativeness statement |
| `dq_measurement_control` | mass, energy, water, temperature, and refrigerant data | Use calibrated instruments or traceable invoices; identify estimated intervals and the substitution method. | calibration certificates, invoices, meter register, and gap log |
| `dq_completeness` | process and foreground mass and energy balance | Account for material inputs, meat outputs, co-products, wastes, water, wastewater, packaging, energy, refrigerants, and storage losses; explain every material balance gap and cut-off. | process mass balances, utility reconciliation, cut-off register, and corrective actions |
| `dq_temperature_history` | freezing release and storage | Retain thermal-centre release measurement, continuous or sufficiently frequent storage temperature records, alarms, excursions, and corrective actions for the declared lot period. | calibrated logger export, release record, alarm log, and disposition decision |
| `dq_allocation` | multifunctional processes | Retain subdivision decisions, all revenue-generating outputs, representative prices, currency treatment, allocation shares, and sensitivity to materially different prices or methods. | allocation workbook, invoice evidence, and sensitivity result |
| `dq_uncertainty_and_estimates` | reasoned estimates, proxy data, and calculated values | Flag every estimate, retain its basis and range, quantify or qualitatively discuss uncertainty, and replace candidate-stage reasoned estimates with records or reviewed evidence before publication unless explicitly accepted. | data-quality register, uncertainty statement, reviewer decision, and replacement record |
| `dq_geography_and_technology` | upstream and background datasets | Match facility geography, electricity market, fuel, water, treatment route, refrigerant species, freezing technology, and reference year; document every proxy. | dataset metadata and proxy-justification log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require exactly 1 kg net Meat of cattle, frozen with product UUID `16e6d353-2acd-4dc3-99b3-fce9d27fbbd7`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; reject substitution by fresh/chilled meat or edible offal. |  |
| `validate_required_qualifiers` | reference product metadata | Fail conformance when cattle class, product presentation, bone state, net mass basis, packaging form, freezing technology, release temperature, storage duration, geography, period, or gate is missing. |  |
| `validate_route_completeness` | process map and upstream links | Require quick freezing and frozen storage records. When live cattle enter the foreground require slaughter and dressing; when purchased chilled meat enters require a linked upstream dataset covering omitted stages. | `fao-leap-large-ruminants-2016`; `codex-cxc-58-2005` |
| `validate_frozen_state` | quick freezing release and cold storage | Require evidence that the thermal centre reached -18 °C or colder after stabilization and that storage maintained -18 °C or colder subject only to documented applicable tolerances; treat missing temperature evidence as inconclusive. | `codex-cxc-8-1976-2008` |
| `validate_mass_balance` | every included process and full foreground | Calculate and report mass-balance gaps; any unexplained gap outside the reviewed tolerance is an error and shall not be hidden by adjusting the reference product. | `fao-leap-large-ruminants-2016` |
| `validate_allocation` | shared foreground burdens | Require subdivision evidence or complete revenue allocation across all revenue-generating co-products, with no allocation share assigned to non-revenue residuals and no saleable product misclassified as waste. | `fao-leap-large-ruminants-2016` |
| `validate_refrigerants` | freezing and storage refrigeration | Require refrigerant species, equipment scope, inventory balance, and substance-specific elementary emissions; reject an unidentified aggregate refrigerant emission as final inventory. | `fao-leap-large-ruminants-2016` |
| `validate_data_coverage` | foreground records | Report accepted inputs, checks performed, checks skipped, findings, and completeness; missing required process, utility, wastewater, temperature, allocation, or loss evidence makes validation inconclusive. | `fao-leap-large-ruminants-2016`; `codex-cxc-8-1976-2008` |
| `validate_reasoned_estimates` | all reasoned_estimate ranges | Treat candidate-stage ranges only as QA guardrails, never as collected values or publication-critical allowed ranges; require replacement or explicit methodology-review acceptance before publication. |  |
| `validate_unresolved_uuids` | non-reference inventory identities | Before publication, resolve every used product, waste, and elementary flow to the correct Tiangong identity or document an approved identity exception; never reuse the reference-product UUID for another inventory role. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground frozen-cattle-meat production data package and its process or lifecyclemodel projection |
| downstream_use | `secondary_dataset`; `background_dataset` when geography, technology, allocation, and data-quality metadata are adequate for the intended model |
| allowed_use | Attributional LCA and inventory construction for the declared frozen cattle meat route, presentation, geography, period, gate, and storage duration |
| excluded_use | Fresh or chilled meat, edible offal, cooked or prepared products, non-cattle meat, undisclosed proxy routes, food-safety certification, or comparative assertions without harmonized scope and reviewed quality |
| required_metadata | PCR id and version; CPC reference; product qualifiers; facility geography; reference year; route and gate; included processes; upstream dataset links; storage duration; temperature regime; allocation method; cut-offs; data sources; unresolved identities; reviewer status |
| required_quality_disclosure | Primary-data share and coverage; instrument and invoice basis; mass-balance gaps; temperature excursions; allocation sensitivity; refrigerant balance; wastewater characterization; proxy datasets; reasoned estimates; uncertainty; limitations |
| update_trigger | Change in product presentation, starting condition, freezing or refrigeration technology, refrigerant species, packaging, storage duration, facility geography, energy supply, allocation economics, regulation, source evidence, or a material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-large-ruminants-2016` | Official guidance (`official_guidance`) | FAO. Environmental performance of large ruminant supply chains: Guidelines for assessment, Version 1, 2016, ISBN 978-92-5-109523-2. https://openknowledge.fao.org/handle/20.500.14283/i6494en (retrieved 2026-08-11) | Primary meat-processing boundary, material-flow accounting, energy/water/refrigerant/wastewater collection, co-product allocation, representativeness, data quality, and uncertainty |
| `codex-cxc-8-1976-2008` | Standard (`standard`) | Codex Alimentarius. Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976, revised 2008. https://www.fao.org/input/download/standards/285/CXP_008e.pdf (retrieved 2026-08-11) | Quick-freezing definition, -18 °C thermal-centre and cold-chain condition, packaging, cold storage, temperature records, and transfer controls |
| `codex-cxc-58-2005` | Standard (`standard`) | Codex Alimentarius. Code of Hygienic Practice for Meat, CXC 58-2005. https://www.fao.org/input/download/standards/10196/CXP_058e.pdf (retrieved 2026-08-11) | Slaughter and dressing process scope, meat hygiene prerequisites, traceability, handling, chilling, sanitation, and transport controls |
| `fao-meat-cold-store-1991` | Handbook (`handbook`) | Cano-Muñoz, G. Manual on meat cold store operation and management. FAO Animal Production and Health Paper 92, 1991, ISBN 92-5-102788-9. https://www.fao.org/4/T0098E/T0098E00.htm (retrieved 2026-08-11) | Meat chilling and freezing process decomposition, packaging and frozen-storage mechanisms, cold-room operation, product losses, and temperature-history requirements |
