---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.beans-otherwise-prepared-or-preserved-not-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Beans, otherwise prepared or preserved, not frozen

## 1. Scope and Applicability

This PCR covers factory production of edible beans and pulses that are cooked, seasoned, canned, jarred, retort-pouched, aseptically packed, acidified, or otherwise prepared or preserved and supplied in a non-frozen state. It applies from receipt of raw or preprocessed beans and other purchased inputs at the manufacturing site through preparation, formulation, preservation, post-process handling, packaging, and release of the finished product at the manufacturing gate.

Fresh beans, unprepared dried beans, frozen prepared beans, bean flours or isolated bean ingredients, and composite meals in which beans do not define the product are outside this PCR. Cultivation, manufacture of purchased ingredients and packaging, inbound transport, distribution, retail, consumer preparation, and end-of-life are outside the foreground boundary but must be linked through upstream or downstream datasets when included in the study goal and scope. The representative route is shelf-stable beans thermally processed in a hermetically sealed container; alternative routes must declare their preservation mechanism and applicable safety controls.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.beans-otherwise-prepared-or-preserved-not-frozen |
| classification_refs | CPC 3.0: 21395, Beans, otherwise prepared or preserved, not frozen |
| covered_products | Non-frozen edible beans or pulses that are cooked, formulated, canned, jarred, pouched, aseptically packed, acidified, or otherwise prepared or preserved |
| excluded_products | Fresh beans; unprepared dried beans; frozen prepared beans; bean flours and isolated ingredients; composite meals not defined by beans |
| representative_product | Shelf-stable prepared beans with packing medium in a hermetically sealed container |
| production_route | Receipt and preparation; optional hydration, blanching, cooking, or formulation; filling and sealing; route-specific preservation; cooling and post-process packaging |
| market_state | Finished non-frozen product at the manufacturing gate; ambient shelf-stable or refrigerated state must be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Prepared or preserved edible beans supplied in the declared formulation, preservation route, and package format |
| How much | 1 kg net finished product, including edible bean solids and any packing medium but excluding packaging mass |
| How well | Saleable non-frozen product meeting the declared bean identity, formulation, solid or drained fraction, preservation controls, and applicable safety and quality specifications |
| How long or cycle | One released production lot at the manufacturing gate; shelf life or refrigerated holding requirement is a declared qualifier, not a normalization multiplier |
| reference_flow_link | The functional unit is realized by the single Tiangong product flow and 1 kg reference amount defined below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Beans, otherwise prepared or preserved, not frozen `e1ec238e-9181-4fd3-912e-a88b4a45ad56` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | bean species or commercial type; incoming bean state; recipe and packing medium; preservation route; net content basis; drained-solid or solid fraction when relevant; primary container type; ambient shelf-stable or refrigerated market state; production geography; production period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, the process description, reference-flow comment, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground inventory to 1 kg net finished beans and packing medium at the manufacturing gate; exclude all packaging mass from the reference amount while retaining packaging as inventory inputs. |
| `net_and_drained_mass` | Products sold in liquid packing medium | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net finished-product mass and, when a drained-weight claim or specification applies, record drained bean mass or solid fraction separately without substituting it for the reference amount. |
| `as_received_composition` | Beans, ingredients, rejects, and product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report material masses on the as-received basis; any dry-matter or moisture conversion must retain the measured moisture value and calculation. |
| `energy_carrier_units` | Electricity and thermal energy | Energy property selected for the dataset | kWh for electricity; MJ for fuels, steam, or heat | Preserve metered carrier units and document conversion factors before normalization to 1 kg reference product. |

## 5. System Boundary

Apply the following foreground-boundary rules:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_operations` | Directly controlled manufacturing | Include receiving and preparation, on-site hydration or cooking, formulation, filling, sealing, preservation, cooling, cleaning attributable to production, post-process handling, packaging, on-site utility use, rejects, wastewater, and directly controlled waste treatment when present. | `codex-cxs-297-2009`; `codex-cxc-23-1979`; `eu-2019-2031-fdm-bat` |
| `sb_upstream_links` | Purchased inputs | Represent purchased beans, ingredients, water supply, energy carriers, packaging, and any in-scope inbound transport as product inputs linked to appropriate upstream datasets; do not recreate their upstream production inside this foreground package. | `iso-14044-2006` |
| `sb_same_category_input` | Incoming prepared or preserved beans | If an input already belongs to this product category, record it once as a purchased product input with declared preparation state and supplier dataset; do not recursively apply this PCR to that input within the same foreground system. | `iso-14044-2006` |
| `sb_preservation_route` | Thermal, aseptic, acidified, or other preservation | Declare the preservation route and collect its critical control records. For low-acid or acidified low-acid food in hermetically sealed containers, use a scheduled process established by a competent authority or qualified process specialist and retain the applicable critical factors. | `codex-cxc-23-1979`; `us-ecfr-21-cfr-113` |
| `sb_post_gate_exclusion` | Downstream stages | Exclude distribution, retail, consumer storage or preparation, and packaging or product end-of-life from the foreground result unless the declared study scope explicitly adds them as separate downstream processes. | `iso-14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw, dried, fresh, pre-cooked, or otherwise preprocessed beans and all other purchased inputs are received at the manufacturing-site gate with their state, mass, supplier, origin, and upstream dataset references declared. |
| starting_condition_role | Manufacturing-gate starting condition for production of the first foreground data package. |
| product_classification_scope | Prepared or preserved edible beans supplied non-frozen; preservation route and market state remain mandatory qualifiers. |
| recursive_input_rule | Record incoming prepared or preserved beans once as an upstream product input with its supplier dataset and do not recurse into another instance of this PCR in the same foreground package. |
| upstream_dataset_requirement | Link purchased beans, ingredients, packaging, energy, water supply, and in-scope transport to geographically and temporally appropriate upstream datasets; disclose proxies and data gaps. |
| disclosure | Disclose incoming bean state, recipe, preservation route, net and drained-mass basis, package format, co-products, allocation, temporal coverage, site coverage, and omitted stages. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_preparation` | Bean receiving and preparation | required | Always include receipt, inspection, sorting, and preparation activities performed at the site. | Foreground material preparation | kg prepared bean intermediate |
| `cooking_and_formulation` | Hydration, cooking, and formulation | conditional | Include each hydration, blanching, cooking, sauce preparation, seasoning, or mixing operation performed at the site; document why omitted when fully preprocessed beans are received. | Foreground product conversion | kg cooked or formulated bean intermediate |
| `filling_and_preservation` | Filling, sealing, and preservation | required | Include the actual filling and preservation route, including thermal, aseptic, acidified, chilled, or other controls that establish the declared market state. | Foreground preservation and primary packing | kg stabilized filled product |
| `post_process_packaging` | Post-process handling, packaging, and release | required | Include cooling or drying after preservation when present, inspection, labelling, secondary or tertiary packaging, finished-goods holding, and release at the manufacturing gate. | Foreground finished-product release | 1 kg net reference product |

### Process: Bean receiving and preparation (`receiving_and_preparation`)

#### Inputs

##### Product flows

###### Raw or preprocessed beans received (`raw_beans_input`)

Record the measured mass and state of the beans entering the foreground site, including supplier, lot, moisture or preparation state, and linked upstream dataset.

- Selected flow: Beans, raw or preprocessed
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted bean mass entering the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources:
- Range: Provisional bean-input QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.4
  - Upper: 1.4
  - Unit: kg/kg net finished product
  - Basis: broad prior spanning hydrated dry-bean and fresh-bean routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation and washing water (`preparation_water`)

Record water crossing the foreground boundary for washing, sorting, soaking, or preparation and distinguish recirculated water from make-up water.

- Selected flow: Water supply
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-balanced make-up water attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-2019-2031-fdm-bat`
- Range: Provisional preparation-water QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 10
  - Unit: kg/kg net finished product
  - Basis: broad first-pass estimate for once-through and recirculating preparation systems
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared bean intermediate (`prepared_bean_intermediate`)

Track the internal bean intermediate transferred to cooking, formulation, or filling so that inter-process mass balance remains explicit.

- Selected flow: Prepared bean intermediate
- Flow property / unit: Mass / kg
- Amount rule: Accepted bean input plus retained water and ingredients minus measured rejects and wastewater transfer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot and per 1 kg net finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- Sources:

##### Waste flows

###### Sorting and preparation rejects (`preparation_rejects`)

Record removed damaged beans, stones, foreign material, skins, trimmings, and other solid rejects by measured destination.

- Selected flow: Bean preparation rejects
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by treatment or recovery destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- Sources:
- Range: Provisional solid-reject QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg net finished product
  - Basis: broad prior for different incoming bean states and sorting intensities
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, including measured volume or mass and the declared on-site or off-site treatment route.

- Selected flow: Wastewater from food preparation
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or water-balance estimate attributable to preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- Sources: `eu-2019-2031-fdm-bat`
- Range: Provisional preparation-wastewater QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net finished product
  - Basis: broad first-pass estimate bounded by metered water use and retained water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Hydration, cooking, and formulation (`cooking_and_formulation`)

#### Inputs

##### Product flows

###### Prepared beans transferred in (`prepared_beans_to_cooking`)

Record the internal transfer from preparation without adding a second upstream bean burden.

- Selected flow: Prepared bean intermediate
- Flow property / unit: Mass / kg
- Amount rule: Equal to the measured or calculated output of `receiving_and_preparation`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_records`
- Sources:

###### Recipe water, packing medium, and other ingredients (`recipe_inputs`)

Record added water, brine, sauce, oil, sugar, salt, acids, seasonings, and other recipe materials as separate supplier inputs where material to the study.

- Selected flow: Recipe ingredients and packing medium
- Flow property / unit: Mass / kg
- Amount rule: Batch recipe issue records reconciled to returned or unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_records`
- Sources: `codex-cxs-297-2009`
- Range: Provisional recipe-input QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg/kg net finished product
  - Basis: broad prior covering dry-pack, brine, sauce, and seasoned formulations
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooking electricity (`cooking_electricity`)

Record electricity used by pumps, conveyors, preparation equipment, mixers, and electric heating allocated to this process.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented allocation from equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_records`
- Sources: `eu-2019-2031-fdm-bat`
- Range: Provisional cooking-electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1
  - Unit: kWh/kg net finished product
  - Basis: broad first-pass estimate across preparation and cooking technologies
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooking thermal energy (`cooking_thermal_energy`)

Record steam, heat, or fuel energy used for soaking-water heating, blanching, cooking, and sauce preparation, with carrier and on-site combustion declared.

- Selected flow: Thermal energy carrier
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam or fuel use, or calculated heat from measured carrier consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_records`
- Sources: `eu-2019-2031-fdm-bat`
- Range: Provisional cooking-heat QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 10
  - Unit: MJ/kg net finished product
  - Basis: broad first-pass estimate across direct cooking, steam, and incoming pre-cooked routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooked or formulated bean intermediate (`cooked_formulated_intermediate`)

Record the mass transferred to filling after recipe additions, cooking losses, and process sampling.

- Selected flow: Cooked or formulated bean intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_records`
- Sources:

##### Waste flows

###### Cooking and formulation losses (`cooking_losses`)

Record spills, tank residues, off-specification material, and wastewater sent to recovery, treatment, or disposal.

- Selected flow: Cooking and formulation waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste records or process mass-balance difference with uncertainty disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_records`
- Sources:
- Range: Provisional cooking-loss QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net finished product
  - Basis: broad prior including process water and off-specification product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Filling, sealing, and preservation (`filling_and_preservation`)

#### Inputs

##### Product flows

###### Cooked or formulated beans transferred in (`beans_to_filling`)

Record the internal product transfer into filling and preservation.

- Selected flow: Cooked or formulated bean intermediate
- Flow property / unit: Mass / kg
- Amount rule: Equal to the measured or calculated output of `cooking_and_formulation`, or directly measured when that process is omitted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_records`
- Sources:

###### Primary containers and closures (`primary_packaging`)

Record cans, jars, lids, pouches, trays, cartons used as primary containers, and closures by material and mass; retain packaging outside the net reference-product mass.

- Selected flow: Primary food packaging materials
- Flow property / unit: Mass / kg
- Amount rule: Issued packaging mass minus returned unused packaging, plus documented line loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_records`
- Sources:
- Range: Provisional primary-packaging QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.8
  - Unit: kg/kg net finished product
  - Basis: broad prior covering flexible pouches, metal containers, and heavy glass jars
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation electricity and thermal energy (`preservation_energy`)

Record electricity, steam, heat, or fuel used for filling, sealing, retorting, pasteurization, aseptic processing, or other stabilization, separated by carrier in the produced dataset.

- Selected flow: Electricity and thermal energy carriers
- Flow property / unit: Energy / kWh and MJ by carrier
- Amount rule: Metered carrier use or documented equipment allocation for the preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_records`
- Sources: `codex-cxc-23-1979`; `eu-2019-2031-fdm-bat`
- Range: Provisional preservation-energy QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 8
  - Unit: MJ-equivalent/kg net finished product
  - Basis: broad first-pass combined energy prior; retain actual carriers and do not use this range as a conversion factor
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling and process water (`preservation_water`)

Record make-up water used for retort, cooling, seal protection, or other preservation services and distinguish recirculation from discharge.

- Selected flow: Water supply
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water attributable to the preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_records`
- Sources: `codex-cxc-23-1979`; `eu-2019-2031-fdm-bat`
- Range: Provisional preservation-water QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg/kg net finished product
  - Basis: broad prior across closed-loop, once-through, and no-water preservation systems
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized filled product (`stabilized_filled_product`)

Record filled product that has completed the declared preservation controls and is transferred to final inspection and packaging.

- Selected flow: Stabilized filled prepared beans
- Flow property / unit: Mass / kg net product
- Amount rule: Measured net filled product mass accepted after preservation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_records`
- Sources: `codex-cxs-297-2009`; `codex-cxc-23-1979`

##### Waste flows

###### Preservation wastewater and rejected units (`preservation_waste`)

Record cooling-water discharge, cleaning wastewater, leaking or underprocessed containers, packaging scrap, and product losses separately by treatment destination in the produced dataset.

- Selected flow: Preservation wastewater and rejected filled units
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge plus counted rejected units converted using measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_records`
- Sources: `codex-cxc-23-1979`; `eu-2019-2031-fdm-bat`
- Range: Provisional preservation-waste QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15
  - Unit: kg/kg net finished product
  - Basis: broad prior dominated by water-system design and reject rate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Post-process handling, packaging, and release (`post_process_packaging`)

#### Inputs

##### Product flows

###### Stabilized product transferred in (`stabilized_product_to_release`)

Record the accepted internal product transfer into inspection, labelling, case packing, and finished-goods holding.

- Selected flow: Stabilized filled prepared beans
- Flow property / unit: Mass / kg net product
- Amount rule: Equal to accepted output from `filling_and_preservation`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_records`
- Sources:

###### Secondary and tertiary packaging (`secondary_packaging`)

Record labels, cases, trays, stretch film, pallet share, and other distribution packaging by material and mass.

- Selected flow: Secondary and tertiary packaging materials
- Flow property / unit: Mass / kg
- Amount rule: Packaging issue records minus returned unused material, including documented line loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- Sources:
- Range: Provisional secondary-packaging QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.3
  - Unit: kg/kg net finished product
  - Basis: broad prior for cases, films, and allocated pallet mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Release-stage electricity (`release_electricity`)

Record electricity for conveyors, drying, inspection, labelling, case packing, and any declared refrigerated finished-goods holding.

- Selected flow: Electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented equipment and storage allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- Sources: `eu-2019-2031-fdm-bat`
- Range: Provisional release-electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kWh/kg net finished product
  - Basis: broad prior covering ambient release and refrigerated holding
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference product (`released_reference_product`)

This is the single reference product leaving the foreground system after final acceptance; packaging mass remains outside the 1 kg net product amount.

- Selected flow: Beans, otherwise prepared or preserved, not frozen `e1ec238e-9181-4fd3-912e-a88b4a45ad56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net finished reference product at the manufacturing gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Release rejects and packaging waste (`release_waste`)

Record damaged units, label or case scrap, and other release-stage wastes by material and treatment destination.

- Selected flow: Release-stage product and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass plus rejected-unit count multiplied by measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_records`
- Sources:
- Range: Provisional release-waste QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg net finished product
  - Basis: broad first-pass estimate for product rejects and packaging scrap
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

Apply allocation in the following order:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Separately measurable products, recipes, lines, or batches | Avoid allocation by subdividing operations or using direct lot, line, equipment, recipe, and metering records whenever technically feasible. | `iso-14044-2006` |
| `allocation_recovery` | Recovered materials or exported energy | Apply system expansion or substitution only when the goal and scope support it and the substituted product, quality, market, and method are documented; otherwise keep recovery treatment and any revenue-free waste burden in the foreground system. | `iso-14044-2006` |
| `allocation_physical` | Unavoidable shared burdens with multiple valuable outputs | Allocate by a documented physical relationship that reflects causality, such as product mass, dry bean solids, energy content, or measured process use; do not use net filled mass when differences in packing medium would distort the relationship. | `iso-14044-2006` |
| `allocation_economic_fallback` | Shared burdens lacking a defensible physical relationship | Use economic allocation only as a disclosed fallback with price period, currency, co-product status, and sensitivity analysis retained. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `receiving_and_preparation` | Beans, preparation water, prepared intermediate, rejects, and wastewater | Weighbridge, batch, water-meter, waste, and discharge records | lot_id; supplier; bean_state; incoming_mass_kg; accepted_mass_kg; water_makeup_kg; reject_mass_kg; wastewater_kg; destination | Reconcile calibrated scales and meters to batch and waste-transfer records | kg | Each lot or production shift | At least one representative annual or seasonal production period, with shutdown and abnormal periods identified | Each producing site | Sum accepted inputs and outputs by lot, then normalize to released net product mass | Calibration records; lot traceability; water balance; waste transfer documents; missing-data log |
| `cp_cooking_records` | `cooking_and_formulation` | Recipe inputs, electricity, heat, intermediate product, and losses | Batch recipe, material issue, meter, boiler, and production records | batch_id; ingredient_mass_kg; water_mass_kg; electricity_kWh; steam_or_fuel_quantity; carrier_unit; intermediate_mass_kg; loss_mass_kg | Record recipe issues and direct meters; allocate shared utilities using documented equipment time or throughput | kg; kWh; MJ or carrier unit | Each batch or shift | Representative operating period covering product and route variability | Each cooking or formulation line | Convert carriers without aggregation loss, calculate lot totals, and normalize to released net product mass | Recipe authorization; meter calibration; utility invoices; allocation worksheet; mass balance |
| `cp_preservation_records` | `filling_and_preservation` | Primary packaging, preservation energy and water, filled product, critical factors, wastewater, and rejected units | Packaging issue, filler, seamer, retort or preservation-system, meter, and quality records | lot_id; container_type; packaging_mass_kg; net_fill_kg; drained_mass_kg_if_applicable; initial_temperature; process_time; process_temperature; pH_or_aw_if_applicable; energy; water_makeup_kg; wastewater_kg; rejected_units | Capture contemporaneous line and scheduled-process records; reconcile packaging and utility totals to accepted filled units | kg; kWh; MJ; °C; min; pH or aw where applicable | Each lot, with critical-factor frequency set by the validated preservation process | All preservation campaigns in the reporting period | Each preservation line or system | Sum accepted product, packaging, water, energy, and rejects by lot and normalize to released net product mass | Scheduled-process authority; instrument calibration; container closure checks; deviation and disposition records |
| `cp_release_records` | `post_process_packaging` | Accepted product, secondary packaging, release electricity, rejects, and final reference output | Finished-goods, packaging issue, meter, quality release, and waste records | lot_id; accepted_net_product_kg; package_format; secondary_packaging_kg; electricity_kWh; storage_time_h; storage_temperature_if_applicable; reject_mass_kg; release_status | Reconcile released finished-goods mass with packaging use, storage, rejection, and waste records | kg; kWh; h; °C | Each released lot or shift | Same period as foreground production data | Each packaging and release line | Sum only released product, allocate shared storage by occupied mass-time, and normalize all inventory to 1 kg net product | Release authorization; inventory reconciliation; meter records; packaging specifications; rejected-lot disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground flows | normalized amount = lot-attributable flow amount / released net finished-product mass | lot flow amount; released net product kg | amount per 1 kg reference product | |
| `calc_net_product_mass` | Filled and released product | net product mass = gross filled unit mass - tare mass of primary container and closure; do not subtract packing medium | gross filled mass; container and closure tare | net finished-product kg | `codex-cxs-297-2009` |
| `calc_mass_balance` | Each process and complete foreground system | mass-balance difference = total mass inputs - product outputs - waste outputs - measured evaporation or other declared losses; investigate material unexplained differences | material inputs; product outputs; waste outputs; declared losses | mass-balance closure and unexplained difference | |
| `calc_energy_conversion` | Electricity, fuels, steam, and purchased heat | Convert each carrier to the declared reporting unit using a documented lower or higher heating value, steam enthalpy, or supplier factor while retaining the original quantity and factor | metered carrier quantity; conversion factor; factor basis | carrier-specific energy per reference product | |
| `calc_water_balance` | Preparation and preservation water | wastewater estimate = make-up water + water in inputs - retained water in product - measured evaporation - water in exported residues; do not use the estimate when a direct discharge meter is available without explaining the difference | make-up water; ingredient water; product water; evaporation; residue water | wastewater kg and water-balance closure | `eu-2019-2031-fdm-bat` |
| `calc_shared_burden_allocation` | Unavoidable shared operations | Apply the selected allocation basis consistently to all shared inputs, emissions, and wastes and retain a sensitivity result for any economic fallback | shared burdens; output quantities; allocation basis | allocated foreground inventory by product | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and incoming beans | Declare all required qualifiers and preserve the exact reference-flow UUID; distinguish raw, soaked, cooked, acidified, and otherwise preprocessed incoming states. | Product specification; recipe; supplier record; Tiangong identity reference |
| `dq_temporal_representativeness` | Foreground activity data | Use a representative production period that covers normal product and route variability; identify start and end dates, shutdowns, trials, and abnormal lots. | Production calendar; lot list; exclusion log |
| `dq_measurement_traceability` | Mass, water, energy, temperature, time, pH, aw, and waste records | Retain instrument identity, calibration or verification status, raw reading, unit, timestamp, operator or system source, and any transformation applied. | Calibration certificates; meter exports; signed batch or system records |
| `dq_inventory_completeness` | Complete foreground system | Reconcile bean, ingredient, product, packaging, water, energy, wastewater, and waste records across all included processes and document every proxy, zero, estimate, and data gap. | Mass and water balances; energy reconciliation; completeness checklist |
| `dq_preservation_controls` | Preserved product release | Retain route-specific critical factors and deviations. For applicable low-acid or acidified low-acid hermetically sealed products, retain the scheduled process, process authority, time, temperature, fill, headspace, pH or aw where relevant, container integrity, cooling, and release review. | Scheduled-process file; contemporaneous processing records; deviation disposition; `codex-cxc-23-1979`; `us-ecfr-21-cfr-113` |
| `dq_provisional_ranges` | Rows with reasoned estimates | Treat every `reasoned_estimate` range as a nonconformance-screening prior only; never replace measured foreground values with the midpoint and replace the range with reviewed evidence before publication-critical use. | Range-evidence review record and replacement plan |

## 9. Validation Rules

Validate a foreground data package against the following rules:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | The output must use product flow `e1ec238e-9181-4fd3-912e-a88b4a45ad56`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, normalized to exactly 1 kg net finished product. | |
| `val_required_qualifiers` | Dataset metadata | Bean type, incoming state, recipe or packing medium, preservation route, net-content basis, solid or drained fraction when relevant, container type, market state, geography, and production period must be declared. | `codex-cxs-297-2009`; `codex-cxc-23-1979` |
| `val_process_completeness` | Process inventory | Every required process and every applicable conditional process must be represented; any omitted conditional process must have a documented non-applicability reason. | |
| `val_packaging_separation` | Reference amount and packaging inventory | Primary, secondary, and tertiary packaging mass must not be included in the 1 kg net reference amount and must remain explicit inventory inputs when used. | |
| `val_mass_water_energy_balance` | Foreground calculations | Mass balance, water balance, carrier-specific energy reconciliation, and released-product reconciliation must be calculated, and material unexplained differences must be investigated and disclosed. | `eu-2019-2031-fdm-bat` |
| `val_preservation_record` | Preservation process | The declared route must have contemporaneous critical-factor records and deviation disposition; applicable low-acid or acidified low-acid hermetically sealed products must demonstrate conformity with the authorized scheduled process. | `codex-cxc-23-1979`; `us-ecfr-21-cfr-113` |
| `val_canned_fill_check` | Canned vegetable variants within CXS 297-2009 scope | For non-vacuum canned variants claiming conformity with CXS 297-2009, verify container fill against the standard's minimum-fill requirement and record drained weight where the applicable annex requires it. | `codex-cxs-297-2009` |
| `val_allocation_disclosure` | Multi-output operations | The allocation hierarchy, selected basis, quantities, co-product status, recovery treatment, and any sensitivity analysis must be present and arithmetically consistent. | `iso-14044-2006` |
| `val_estimate_status` | Provisional ranges | A reasoned-estimate range may only screen or initialize data; validation must flag use of a range midpoint as a foreground value and any publication-critical range lacking reviewed evidence. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for prepared or preserved non-frozen beans at the manufacturing gate |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` for food products, meals, catering, retail, and packaging or distribution models when scope and qualifiers match |
| allowed_use | Attributional or consequential modelling consistent with the declared allocation and recovery method; product, process, and lifecyclemodel projections using the same net-product basis |
| excluded_use | Direct comparison of products with different bean states, solid fractions, preservation routes, package formats, shelf-life requirements, or geography without adjustment; substitution for fresh, dried-unprepared, or frozen beans |
| required_metadata | PCR id; reference UUID; bean type; incoming state; recipe; preservation route; net and drained-mass basis; container and packaging materials; market state; geography; technology; reporting period; site coverage; allocation; upstream datasets |
| required_quality_disclosure | Data coverage; meter and calibration status; mass, water, and energy closure; scheduled-process applicability; deviations; proxies; provisional ranges; unresolved flow UUIDs; uncertainty and allocation sensitivity |
| update_trigger | Material change in bean source or state, recipe, solid fraction, preservation process, package format, energy or water system, site or geography, allocation, regulation or scheduled process, or a shift outside the represented production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-297-2009` | `standard` | Codex Alimentarius, CXS 297-2009, Standard for Certain Canned Vegetables, https://workspace.fao.org/sites/codex/Standards/CXS%20297-2009/CXS_297e.pdf, retrieved 2026-08-11 | Applicable canned-vegetable product definition; washing and preparation; packing media; heat stabilization; net, drained, and container-fill checks |
| `codex-cxc-23-1979` | `official_guidance` | Codex Alimentarius, CXC 23-1979, Code of Hygienic Practice for Low-Acid and Acidified Low-Acid Canned Foods, https://workspace.fao.org/sites/codex/Standards/CXC%2023-1979/CXC_023e.pdf, retrieved 2026-08-11 | Representative-route process decomposition; blanching, filling, sealing, thermal processing, critical factors, cooling water, container handling, records, and deviation controls |
| `us-ecfr-21-cfr-113` | `standard` | United States Electronic Code of Federal Regulations, 21 CFR Part 113, Thermally Processed Low-Acid Foods Packaged in Hermetically Sealed Containers, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-113, retrieved 2026-08-11 | Conditional requirements for U.S.-market low-acid hermetically sealed products; scheduled-process authority, critical factors, processing records, and review |
| `eu-2019-2031-fdm-bat` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj, retrieved 2026-08-11 | Water, energy, raw-material, wastewater, and waste-gas inventories; process flow sheets; water balances; key-process-parameter monitoring; resource-efficiency records |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including current amendments, https://www.iso.org/standard/38498.html, retrieved 2026-08-11 | LCI goal and scope, system-boundary links, recursive input treatment, allocation hierarchy, documentation, reporting, and sensitivity |
