---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-including-fillets-smoked
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish including fillets, smoked

## 1. Scope and Applicability

This PCR covers fish and fish fillets preserved by smoking and supplied as a saleable food product. It applies to hot-smoked and cold-smoked forms, whether whole, headed, gutted, portioned, or filleted, when smoking is the defining preservation or processing route. A foreground data package shall identify the species, incoming state, preparation form, salting or brining route, smoking route, smoke-generation medium, final storage condition, packaging, and net product mass.

The foreground boundary begins with fish received at the smoking facility and ends with packaged smoked fish at the facility gate, including on-site chilled or frozen holding before dispatch. Upstream capture or aquaculture, landing, primary chilling, and transport to the facility are represented by supplier-specific or appropriate upstream datasets. Distribution after dispatch, retail, preparation, consumption, and packaging end-of-life are outside this foreground boundary unless the study scope explicitly adds them.

Products preserved principally by canning, drying without smoking, cooking without smoking, salting alone, pickling, or fermentation are excluded. Smoke-flavoured products with no declared smoking operation shall not be represented as smoked fish unless the product specification and process records demonstrate that they meet the intended product boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-including-fillets-smoked |
| classification_refs | CPC 3.0: 21232, Fish including fillets, smoked |
| covered_products | Whole, portioned, or filleted fish for which hot smoking or cold smoking is the defining processing and preservation route |
| excluded_products | Fish preserved principally by canning, non-smoke drying, cooking without smoking, salting alone, pickling, or fermentation; products described only as smoke-flavoured without a declared smoking operation |
| representative_product | Packaged smoked fish or smoked fish fillet at the smoking-facility gate |
| production_route | Receipt and preparation of fish; optional salting or brining; smoking with recorded process controls; cooling; packaging; on-site conditioned storage |
| market_state | Saleable packaged product, with chilled, frozen, or other validated storage state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Smoked fish, including smoked fish fillets, supplied as a saleable food product |
| How much | 1 kg net mass of product, excluding tertiary transport packaging |
| How well | Conforming to the declared species, cut, smoking route, salt treatment, packaging, storage condition, food-safety plan, and market specification |
| How long or cycle | One production lot through packaged product at the facility gate; any on-site holding duration is declared |
| reference_flow_link | Net packaged smoked-fish output from `cool_pack_store` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fish including fillets, smoked `6d9e8d0f-edaf-4960-b9db-557ef8220d26` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species and scientific or accepted market name; whole, portioned, or filleted form; incoming fresh, chilled, or frozen state; hot- or cold-smoking route; direct or regenerated smoke and smoking medium; salting or brining route; final moisture or water-activity specification when controlled; net mass; packaging format and material; chilled, frozen, or other validated storage state and temperature; raw-fish origin and production system; processing geography; production and holding dates |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference smoked-fish output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net smoked-fish product. Exclude tare and packaging mass from the reference amount and report packaging separately. |
| `wet_mass_consistency` | Fish, salt, water, ice, residues, wastewater, and packaging | Mass | kg | Preserve measured wet-mass basis. When dry matter, salt concentration, or moisture is used, retain the measurement basis and conversion records rather than silently mixing wet and dry mass. |
| `energy_conversion` | Electricity and thermal energy | Energy | kWh or MJ | Preserve metered units and declared lower- or higher-heating-value basis; document every conversion and avoid treating electricity and thermal energy as interchangeable. |
| `lot_normalization` | Lot-level foreground records | Mass | kg/kg reference product | Aggregate records over the declared lot or representative period, then divide by conforming net smoked-fish output after excluding packaging mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fish received at the smoking facility, with species, supplier, capture or aquaculture origin, cut, fresh/chilled/frozen state, receipt mass, temperature, and transport condition declared |
| starting_condition_role | Purchased upstream product input and hand-off point between upstream fish production/logistics datasets and foreground smoking operations |
| product_classification_scope | Smoked fish and smoked fish fillets; the external CPC reference is classification context rather than canonical PCR identity |
| recursive_input_rule | A purchased input already meeting the smoked-fish category is recorded once as an upstream product input with its own dataset and shall not be recursively decomposed under this PCR; disclose any further smoking or repacking performed |
| upstream_dataset_requirement | Use supplier-specific datasets when available; otherwise use geographically, technologically, temporally, species-, and production-system-representative datasets for capture or aquaculture, landing, primary preservation, and inbound transport |
| disclosure | Declare excluded upstream and downstream stages, source-fish origin and state, process route, smoke-generation route, salting/brining, on-site cold storage, co-products, wastes, wastewater treatment, packaging, data period, and allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground package | Include receipt, thawing when used, washing and trimming, salting or brining when used, smoking, cooling, packaging, sanitation-related water and energy attributable to production, on-site conditioned storage, residues, wastewater, direct emissions, and refrigerant losses through the facility gate. | codex-cxc-52-2003; eu-pef-2021-2279 |
| `boundary_upstream_handoff` | Received fish and other purchased inputs | Represent capture or aquaculture, upstream primary preservation, input production, and inbound transport with disclosed upstream datasets; do not omit these from a cradle-to-gate model merely because they are outside the foreground process. | eu-pef-2021-2279 |
| `boundary_route_disclosure` | Product and processes | Record the actual hot- or cold-smoking route, smoke-generation medium, salting/brining, thermal controls, cooling, packaging, and storage condition; do not substitute an unrecorded generic route. | codex-cxc-52-2003 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare` | Fish receipt and preparation | required | Always included | Foreground receipt, thawing when applicable, washing, heading/gutting/trimming/filleting as performed | kg prepared fish transferred to curing and smoking |
| `cure_smoke` | Salting, brining, and smoking | required | Always included; salting/brining sub-operations are recorded as zero when demonstrably absent | Foreground preservation and defining smoking operation | kg smoked fish before final cooling and packaging |
| `cool_pack_store` | Cooling, packaging, and on-site storage | required | Always included; chilled, frozen, or other validated storage route is declared | Foreground product finishing and reference-flow delivery | 1 kg net packaged smoked fish |

### Process: Fish receipt and preparation (`receive_prepare`)

#### Inputs

##### Product flows

###### Received whole fish (`received_whole_fish`)

Record whole fish crossing the facility boundary, with species, supplier, origin, production system, and fresh, chilled, or frozen state retained as qualifiers.

- Selected flow: Raw whole fish
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted receipt mass for this product form, net of transport packaging and rejected loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_fish_receipts`

###### Received fish fillets (`received_fish_fillets`)

Record fish fillets crossing the facility boundary, with species, supplier, origin, production system, and fresh, chilled, or frozen state retained as qualifiers.

- Selected flow: Raw fish fillets
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted receipt mass for this product form, net of transport packaging and rejected loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_fish_receipts`

###### Preparation water (`preparation_water`)

Record metered or allocated water used for thawing, washing, product cleaning, and preparation operations attributable to the production lot.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered water or documented allocation from a calibrated shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Range: Provisional preparation-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared fish
  - Basis: broad replaceable water-use screen per process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ice used on site (`preparation_ice`)

Record purchased or on-site-produced ice used after receipt; do not double count the water and energy used for on-site ice production.

- Selected flow: Ice for food processing
- Flow property / unit: Mass / kg
- Amount rule: Purchased mass or production and issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ice_records`
- Range: Provisional ice-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg prepared fish
  - Basis: broad replaceable ice-use screen per process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fish transferred to smoking (`prepared_fish`)

Calculate the wet mass transferred after thawing, washing, cutting, and draining from batch weigh records.

- Selected flow: Prepared fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass; otherwise closing mass balance from collected receipt, residue, and loss records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_mass_balance`
- Range: Provisional preparation-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.25
  - Upper: 1.05
  - Unit: kg/kg accepted received fish
  - Basis: broad replaceable transfer-yield screen
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Removed fish heads (`preparation_fish_heads`)

Record fish heads removed during preparation as a separate material stream.

- Selected flow: Fish heads from preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured container or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Removed fish viscera (`preparation_fish_viscera`)

Record fish viscera removed during preparation as a separate material stream.

- Selected flow: Fish viscera from preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured container or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Removed fish bones (`preparation_fish_bones`)

Record fish bones removed during preparation as a separate material stream.

- Selected flow: Fish bones from preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured container or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Removed fish skin (`preparation_fish_skin`)

Record fish skin removed during preparation as a separate material stream.

- Selected flow: Fish skin from preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured container or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Fish trimmings (`preparation_fish_trimmings`)

Record fish trimmings removed during cutting or filleting as a separate material stream.

- Selected flow: Fish trimmings from preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured container or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Rejected raw fish (`preparation_rejected_fish`)

Record raw fish rejected after receipt or preparation separately from removed anatomical materials.

- Selected flow: Rejected raw fish
- Flow property / unit: Mass / kg
- Amount rule: Measured container or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, its destination, and whether its amount is measured or derived from water balance.

- Selected flow: Fish-preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge or calculated water balance with retained assumptions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`

##### Elementary flows



### Process: Salting, brining, and smoking (`cure_smoke`)

#### Inputs

##### Product flows

###### Prepared fish input (`prepared_fish_input`)

Record the matched transfer mass from `receive_prepare` without creating a second upstream fish input.

- Selected flow: Prepared fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: Matched batch transfer mass from `prepared_fish`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per smoking batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_mass_balance`

###### Food-grade salt (`food_grade_salt`)

Record food-grade sodium chloride used for dry salting or fresh brine make-up separately from recirculated brine.

- Selected flow: Food-grade salt for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass / kg
- Amount rule: Purchase, issue, formulation, and brine make-up records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_brine_records`
- Range: Provisional salt-input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg smoked fish
  - Basis: broad replaceable salt-input screen excluding process water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brining and cleaning water (`smoking_water`)

Record water used for brine make-up, rinsing, and smoking-area product-contact cleaning attributable to the lot or period.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Metered water or documented allocation from calibrated shared meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Range: Provisional smoking-area water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg smoked fish
  - Basis: broad replaceable water-use screen per process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hardwood logs for smoke generation (`smoking_hardwood_logs`)

Record untreated hardwood logs when they are the direct smoke-generation medium.

- Selected flow: Untreated hardwood logs for food smoking
- Flow property / unit: Mass / kg
- Amount rule: Purchase and batch issue records, net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_medium_records`

###### Hardwood chips for smoke generation (`smoking_hardwood_chips`)

Record untreated hardwood chips when they are the direct smoke-generation medium.

- Selected flow: Untreated hardwood chips for food smoking
- Flow property / unit: Mass / kg
- Amount rule: Purchase and batch issue records, net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_medium_records`

###### Hardwood sawdust for smoke generation (`smoking_hardwood_sawdust`)

Record untreated hardwood sawdust when it is the direct smoke-generation medium.

- Selected flow: Untreated hardwood sawdust for food smoking
- Flow property / unit: Mass / kg
- Amount rule: Purchase and batch issue records, net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_medium_records`

###### Liquid smoke preparation (`smoking_liquid_smoke`)

Record food-grade smoke condensate when regenerated smoke or a liquid-smoke preparation crosses the foreground boundary.

- Selected flow: Food-grade liquid smoke condensate
- Flow property / unit: Mass / kg
- Amount rule: Purchase and batch issue records, net of returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_medium_records`

###### Low-voltage grid electricity for curing and smoking (`smoking_grid_electricity_low_voltage`)

Record public-grid electricity supplied below 1 kV when that voltage and supply scenario apply.

- Selected flow: Grid electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or equipment-load-and-runtime calculation reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Medium-voltage grid electricity for curing and smoking (`smoking_grid_electricity_medium_voltage`)

Record public-grid electricity supplied at 1–35 kV when that voltage and supply scenario apply.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or equipment-load-and-runtime calculation reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Purchased process steam (`smoking_steam`)

Record purchased steam separately and retain supply pressure, temperature, and condensate-return conditions.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: Metered carrier or fuel quantity converted with recorded heating value and efficiency assumptions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Purchased hot water (`smoking_hot_water`)

Record purchased hot water separately and retain supply and return temperatures.

- Selected flow: Purchased industrial hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered carrier or fuel quantity converted with recorded heating value and efficiency assumptions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Natural gas for on-site heat (`smoking_natural_gas`)

Record natural gas supplied to on-site heat generation separately from every other fuel.

- Selected flow: Natural gas, burned in industrial furnace `4bfd1abb-9106-495a-a291-ce410f205691`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Metered carrier or fuel quantity converted with recorded heating value and efficiency assumptions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Liquefied petroleum gas for on-site heat (`smoking_lpg`)

Record liquefied petroleum gas supplied to on-site heat generation separately from every other fuel.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass / kg
- Amount rule: Metered carrier or fuel quantity converted with recorded heating value and efficiency assumptions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Diesel oil for on-site heat (`smoking_diesel`)

Record diesel oil supplied to on-site heat generation separately from every other fuel.

- Selected flow: Diesel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered carrier or fuel quantity converted with recorded heating value and efficiency assumptions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Heavy fuel oil for on-site heat (`smoking_fuel_oil`)

Record heavy fuel oil supplied to on-site heat generation separately from every other fuel.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Metered carrier or fuel quantity converted with recorded heating value and efficiency assumptions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Wood pellets for on-site heat (`smoking_wood_pellets`)

Record untreated wood pellets supplied as biomass fuel separately from smoking media and every other fuel.

- Selected flow: Untreated wood pellets
- Flow property / unit: Mass / kg
- Amount rule: Metered carrier or fuel quantity converted with recorded heating value and efficiency assumptions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Compressed air for curing and smoking (`smoking_compressed_air`)

Record compressed air supplied to pneumatic process equipment separately from electricity and fuels.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Metered compressed-air volume or compressor-load-and-runtime calculation reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Smoked fish before final packaging (`smoked_fish_intermediate`)

Record cooled or cooling-ready smoked-fish transfer mass and link it to the smoking control record.

- Selected flow: Smoked fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass after smoking and before final packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per smoking batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_batch_records`
- Range: Provisional smoking-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 1.2
  - Unit: kg/kg prepared fish input
  - Basis: broad replaceable yield screen including possible brine uptake and moisture loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent brine (`spent_brine`)

Record discarded curing brine separately from other wastewater and solid residues.

- Selected flow: Spent high-salinity brine
- Flow property / unit: Mass / kg
- Amount rule: Measured collection or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Spent smoking wood (`spent_smoking_wood`)

Record charred or otherwise spent hardwood logs from smoke generation as a separate waste material.

- Selected flow: Spent hardwood smoking logs
- Flow property / unit: Mass / kg
- Amount rule: Measured collection or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Spent smoking wood chips (`spent_smoking_wood_chips`)

Record spent hardwood chips from smoke generation as a separate waste material.

- Selected flow: Spent hardwood smoking chips
- Flow property / unit: Mass / kg
- Amount rule: Measured collection or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Spent smoking sawdust (`spent_smoking_sawdust`)

Record spent hardwood sawdust from smoke generation as a separate waste material.

- Selected flow: Spent hardwood smoking sawdust
- Flow property / unit: Mass / kg
- Amount rule: Measured collection or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Rejected smoked fish (`rejected_smoked_fish`)

Record smoked fish rejected before finishing separately from smoking media and brine residues.

- Selected flow: Off-specification smoked fish
- Flow property / unit: Mass / kg
- Amount rule: Measured collection or dispatch mass for this material, kept separate from other residues and destinations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Brining and smoking-area wastewater (`smoking_wastewater`)

Record non-brine wastewater from curing and smoking-area cleaning separately, retaining salt load, treatment, and destination records.

- Selected flow: Saline fish-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge or calculated water balance with retained assumptions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Range: Provisional smoking-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg smoked fish
  - Basis: broad replaceable discharge screen per process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide to air (`smoking_fossil_co2`)

Record fossil carbon dioxide from on-site fossil-fuel combustion as a separate elementary flow.

- Selected flow: Carbon dioxide (fossil), to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Biogenic carbon dioxide to air (`smoking_biogenic_co2`)

Record biogenic carbon dioxide from smoking wood or biomass fuel as a separate elementary flow.

- Selected flow: Carbon dioxide (biogenic), to air, unspecified `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Fossil carbon monoxide to air (`smoking_fossil_co`)

Record fossil-origin carbon monoxide from on-site fossil-fuel combustion separately.

- Selected flow: Carbon monoxide (fossil), to air, unspecified `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Biogenic carbon monoxide to air (`smoking_biogenic_co`)

Record biogenic-origin carbon monoxide from smoking wood or biomass fuel separately.

- Selected flow: Carbon monoxide (biogenic), to air
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Nitrogen oxides to air (`smoking_nox`)

Record nitrogen oxides using the monitored or factor-defined reporting basis and retain that basis.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Sulfur dioxide to air (`smoking_so2`)

Record sulfur dioxide from on-site fuel or smoke generation as a separate elementary flow.

- Selected flow: Sulfur dioxide, to air, unspecified `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Fine particulate matter to air (`smoking_pm25`)

Record fine particulate matter in the stated size fraction and retain the monitored stack or release context.

- Selected flow: Particles (PM0.2 - PM2.5) to air
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Fossil methane to air (`smoking_fossil_ch4`)

Record methane from fossil-fuel combustion separately from methane attributable to biomass.

- Selected flow: Methane (fossil), to air
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Biogenic methane to air (`smoking_biogenic_ch4`)

Record methane from smoking wood or biomass fuel separately from fossil-origin methane.

- Selected flow: Methane (biogenic), to air
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Nitrous oxide to air (`smoking_n2o`)

Record nitrous oxide from on-site fuel or smoke generation as a separate elementary flow.

- Selected flow: Nitrous oxide, to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

###### Non-methane volatile organic compounds to air (`smoking_nmvoc`)

Record non-methane volatile organic compounds on the monitored or factor-defined reporting basis.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or calculation from collected activity data and reviewed emission factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg smoked fish before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`

### Process: Cooling, packaging, and on-site storage (`cool_pack_store`)

#### Inputs

##### Product flows

###### Smoked fish transferred for finishing (`smoked_fish_input`)

Match this input to `smoked_fish_intermediate` by batch and mass.

- Selected flow: Smoked fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: Matched batch transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_smoking_batch_records`

###### Low-voltage grid electricity for finishing (`finishing_grid_electricity_low_voltage`)

Record public-grid electricity supplied below 1 kV for cooling, freezing, packaging, and storage when that voltage and supply scenario apply.

- Selected flow: Grid electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or documented allocation from equipment load, runtime, throughput, and facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Medium-voltage grid electricity for finishing (`finishing_grid_electricity_medium_voltage`)

Record public-grid electricity supplied at 1–35 kV for cooling, freezing, packaging, and storage when that voltage and supply scenario apply.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or documented allocation from equipment load, runtime, throughput, and facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Vacuum pouch (`packaging_vacuum_pouch`)

Record the mass of multilayer vacuum pouches when this primary packaging component is used.

- Selected flow: Multilayer plastic vacuum pouch
- Flow property / unit: Mass / kg
- Amount rule: Purchase and issue records reconciled to packed units, minus returned unused material for this component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polyethylene packaging film (`packaging_polyethylene_film`)

Record polyethylene heat-seal film separately from pouches, trays, cartons, and labels.

- Selected flow: Polyethylene heat-seal film
- Flow property / unit: Mass / kg
- Amount rule: Purchase and issue records reconciled to packed units, minus returned unused material for this component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polypropylene packaging tray (`packaging_polypropylene_tray`)

Record polypropylene trays separately when used for modified-atmosphere or other primary packaging.

- Selected flow: Polypropylene food packaging tray
- Flow property / unit: Mass / kg
- Amount rule: Purchase and issue records reconciled to packed units, minus returned unused material for this component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Corrugated cardboard packaging (`packaging_corrugated_cardboard`)

Record corrugated cardboard used for secondary cases or cartons separately.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Purchase and issue records reconciled to packed units, minus returned unused material for this component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Paper packaging label (`packaging_paper_label`)

Record paper labels separately from every structural packaging component.

- Selected flow: Paper label `64321117-433d-43a5-97f9-2ea624c15656`
- Flow property / unit: Mass / kg
- Amount rule: Purchase and issue records reconciled to packed units, minus returned unused material for this component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### R717 refrigerant make-up (`refrigerant_r717_makeup`)

Record R717 additions attributable to the reporting period separately from every other refrigerant.

- Selected flow: Refrigeration-grade anhydrous ammonia (R717)
- Flow property / unit: Mass / kg
- Amount rule: Service invoices, cylinder mass reconciliation, or maintenance-system addition records for this refrigerant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

###### R404A refrigerant make-up (`refrigerant_r404a_makeup`)

Record R404A additions attributable to the reporting period separately from every other refrigerant.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass / kg
- Amount rule: Service invoices, cylinder mass reconciliation, or maintenance-system addition records for this refrigerant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

###### R134a refrigerant make-up (`refrigerant_r134a_makeup`)

Record R134a additions attributable to the reporting period separately from every other refrigerant.

- Selected flow: Refrigerant R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- Flow property / unit: Mass / kg
- Amount rule: Service invoices, cylinder mass reconciliation, or maintenance-system addition records for this refrigerant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

###### R744 refrigerant make-up (`refrigerant_r744_makeup`)

Record R744 additions attributable to the reporting period separately from every other refrigerant.

- Selected flow: Refrigeration-grade carbon dioxide (R744)
- Flow property / unit: Mass / kg
- Amount rule: Service invoices, cylinder mass reconciliation, or maintenance-system addition records for this refrigerant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net packaged smoked fish reference output (`packaged_smoked_fish`)

Record saleable net product mass excluding packaging; this is the reference-flow output.

- Selected flow: Fish including fillets, smoked `6d9e8d0f-edaf-4960-b9db-557ef8220d26`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net mass after normalization from measured conforming lot output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_output_records`

##### Waste flows

###### Vacuum pouch scrap (`vacuum_pouch_scrap`)

Record rejected or trimmed multilayer vacuum pouches separately from other packaging waste.

- Selected flow: Multilayer plastic vacuum pouch scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-container, stock-reconciliation, or dispatch records for this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Polyethylene film scrap (`polyethylene_film_scrap`)

Record polyethylene packaging film scrap separately from other packaging waste.

- Selected flow: Polyethylene packaging film scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-container, stock-reconciliation, or dispatch records for this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Polypropylene tray scrap (`polypropylene_tray_scrap`)

Record rejected polypropylene trays separately from other packaging waste.

- Selected flow: Rejected polypropylene packaging trays
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-container, stock-reconciliation, or dispatch records for this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Corrugated cardboard packaging scrap (`corrugated_cardboard_scrap`)

Record corrugated cardboard trim and rejected cartons separately from other packaging waste.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-container, stock-reconciliation, or dispatch records for this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Paper label scrap (`paper_label_scrap`)

Record rejected paper labels separately from other packaging waste.

- Selected flow: Paper packaging label scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-container, stock-reconciliation, or dispatch records for this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

###### Off-specification finished smoked fish (`offspec_finished_smoked_fish`)

Record finished smoked fish rejected during packaging or release separately from packaging scraps.

- Selected flow: Off-specification finished smoked fish
- Flow property / unit: Mass / kg
- Amount rule: Measured waste-container, stock-reconciliation, or dispatch records for this material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`

##### Elementary flows

###### R717 refrigerant emission to air (`refrigerant_r717_emission`)

Report R717 loss as ammonia mass to air, adjusted for documented recovery, stock change, and transfers.

- Selected flow: Ammonia, to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculated from the collected balance for this refrigerant; never substitute carbon-dioxide-equivalent mass for substance mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R404A refrigerant emission to air (`refrigerant_r404a_emission`)

Report R404A loss as refrigerant-mixture mass; do not replace it with component flows without a reviewed composition and splitting rule.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from the collected balance for this refrigerant; never substitute carbon-dioxide-equivalent mass for substance mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R134a refrigerant emission to air (`refrigerant_r134a_emission`)

Report R134a loss as HFC-134a mass to air, adjusted for documented recovery, stock change, and transfers.

- Selected flow: HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculated from the collected balance for this refrigerant; never substitute carbon-dioxide-equivalent mass for substance mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### R744 refrigerant emission to air (`refrigerant_r744_emission`)

Report R744 loss as refrigerant carbon-dioxide mass to air without assigning fossil or biogenic origin unless the supply record supports it.

- Selected flow: Carbon dioxide from R744 to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from the collected balance for this refrigerant; never substitute carbon-dioxide-equivalent mass for substance mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged smoked fish
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | All multifunctional operations | First avoid allocation through process subdivision or expansion with separately measured process and destination records where technically justified. | eu-pef-2021-2279 |
| `allocation_residue_status` | Fish trimmings, recovered edible material, spent smoking medium, and other outputs | Classify each output as product, co-product, recyclable material, or waste using its documented destination and market function; do not assign co-product credit to material sent for treatment as waste. | eu-pef-2021-2279 |
| `allocation_physical_then_economic` | Unavoidable shared burdens | Where subdivision is not feasible, use a documented physical relationship that reflects the causal use of resources. If no defensible physical relationship exists, use economic allocation with prices, reference period, currency, and sensitivity disclosed. | eu-pef-2021-2279 |
| `allocation_mass_balance` | Lot outputs | Reconcile received fish, added ingredients, moisture change, reference product, co-products, residues, and wastewater before allocation; explain material imbalance outside measured uncertainty. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_fish_receipts` | `receive_prepare` | received fish | supplier and receiving records | supplier; species; origin; capture_or_aquaculture; cut; state; gross_mass; tare; accepted_mass; receipt_temperature; date; lot | Calibrated scale plus receiving and traceability records | kg; °C | every lot | full study period | all supplying routes to included site | sum accepted net mass by product and lot | scale calibration; supplier traceability; rejection log |
| `cp_water_records` | `receive_prepare`; `cure_smoke` | process water | meter and production records | opening_meter; closing_meter; shared_use_allocation; lot; process; date | Sub-meter or documented allocation from calibrated site meter | kg or m3 | daily or batch | full study period with seasonal coverage | all included water users | convert volume using recorded conditions when material; allocate shared use by documented causal driver | meter calibration; reconciliation to invoice or main meter |
| `cp_ice_records` | `receive_prepare` | ice | purchase or production records | purchased_mass; produced_mass; issued_mass; returned_mass; lot; date | Weighing, invoices, and issue records | kg | every lot or daily | full study period | included preparation operations | net issued ice; separately account on-site production water and energy | scale record; invoice; production log |
| `cp_preparation_mass_balance` | `receive_prepare` | preparation transfers | batch mass balance | accepted_fish; prepared_transfer; residues; wastewater; stock_change; lot | Calibrated batch scales and reconciled production records | kg | every batch | full study period | included preparation lines | calculate lot balance and aggregate mass-weighted values | calibration; batch reconciliation; explanation of imbalance |
| `cp_salt_brine_records` | `cure_smoke` | salt and brine | formulation and issue records | ingredient; concentration; fresh_makeup; recirculated_mass; discard_mass; lot; date | Formulation sheets, calibrated weighing, and tank records | kg; mass fraction | every batch | full study period | all included curing systems | count fresh input once; track recirculation internally | formulation approval; scale calibration; tank reconciliation |
| `cp_smoking_medium_records` | `cure_smoke` | smoking medium | purchase and issue records | medium_type; supplier; mass; moisture_basis; returned_mass; batch | Calibrated weighing and inventory reconciliation | kg | every batch or delivery | full study period | all smoke generators serving included production | net consumed mass by medium and batch | invoice; scale calibration; stock reconciliation |
| `cp_energy_records` | `cure_smoke`; `cool_pack_store` | electricity and thermal energy | meters, fuel records, and runtime logs | meter_start; meter_end; fuel_quantity; heating_value_basis; equipment; runtime; throughput; holding_duration; date | Sub-metering preferred; otherwise documented engineering allocation reconciled to facility totals | kWh; MJ; fuel unit | batch, daily, or monthly meter interval | at least one representative year or justified full campaign | all included equipment and storage zones | aggregate by energy carrier and allocate shared use using causal driver | meter calibration; invoice reconciliation; equipment log |
| `cp_smoking_batch_records` | `cure_smoke` | smoking controls and output | validated food-safety and batch records | species; cut; salting_or_brining; smoke_route; medium; chamber_time; chamber_temperature; product_temperature; moisture_or_aw_if_controlled; input_mass; output_mass; deviations; disposition | Approved batch record and calibrated control instruments | kg; time; °C; declared moisture or aw unit | every batch | full study period | every included smoking chamber and product route | retain batch values; aggregate mass-weighted only after deviation review | instrument calibration; food-safety plan; release authorization |
| `cp_residue_records` | `receive_prepare`; `cure_smoke`; `cool_pack_store` | residues and waste | weighing and destination records | material; mass; destination; product_or_waste_status; transporter; date; lot | Calibrated scale, container records, and dispatch documentation | kg | every batch or dispatch | full study period | all included process wastes and recovered outputs | sum by material, status, and destination; do not net unlike outputs | calibration; waste transfer note; sales record where applicable |
| `cp_wastewater_records` | `receive_prepare`; `cure_smoke` | wastewater | meter, balance, and treatment records | inflow; discharge; stock_change; evaporation; stream; salt_load_if_measured; treatment; destination; period | Discharge meter preferred; otherwise documented water balance | kg or m3; concentration where measured | daily, batch, or billing period | full study period | all included drains and segregated streams | convert and aggregate by stream and treatment route | meter calibration; sampling record; treatment invoice; balance closure |
| `cp_air_emission_records` | `cure_smoke` | direct air emissions | monitoring or factor calculation records | pollutant; measured_concentration; gas_flow; fuel; smoking_medium; factor; factor_source; runtime; control_device | Stack monitoring or calculation from recorded activity and reviewed factors | pollutant-specific mass | monitoring campaign or every calculation period | representative operating modes in study period | all included on-site combustion and smoke generation | pollutant-specific mass; retain method and uncertainty | laboratory report; instrument calibration; factor reference |
| `cp_packaging_records` | `cool_pack_store` | packaging | bill of materials and issue records | component; material; unit_mass; units_packed; scrap; returned_material; supplier | Component weighing and stock reconciliation | kg | each packaging specification and reporting period | full study period | all included packaging formats | component mass times packed units plus measured attributable scrap | specification; calibrated scale; purchase reconciliation |
| `cp_refrigerant_records` | `cool_pack_store` | refrigerant | service and stock-balance records | substance; opening_stock; purchases; additions; recovery; closing_stock; equipment; throughput; period | Maintenance system, invoices, and cylinder mass balance | kg by substance | every service event and annual closure | full study period | all refrigeration serving included operations | additions minus documented recovery and stock transfers, allocated by causal equipment use | service invoice; technician record; cylinder reconciliation |
| `cp_product_output_records` | `cool_pack_store` | reference product | packing and dispatch records | product_code; species; form; smoke_route; pack_count; gross_mass; tare; net_mass; rejects; lot; date | Calibrated checkweigher or batch scales linked to release records | kg | every lot | full study period | all included final products | sum conforming net mass excluding packaging | calibration; release record; inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = attributable period or lot amount / conforming net packaged smoked-fish mass | attributable amount; conforming net output | amount per 1 kg reference product | eu-pef-2021-2279 |
| `calc_preparation_yield` | `receive_prepare` | prepared-fish yield = prepared transfer mass / accepted received-fish mass | accepted received fish; prepared transfer | kg/kg | eu-pef-2021-2279 |
| `calc_smoking_yield` | `cure_smoke` | smoking yield = smoked-fish transfer mass / prepared-fish input mass; report ingredient uptake and moisture loss when measured | prepared fish; ingredients; smoked-fish transfer; measured moisture data | kg/kg and disclosed mass-change drivers | codex-cxc-52-2003 |
| `calc_water_balance` | Wastewater rows | wastewater = measured discharge, or water and ice inputs plus relevant product water released minus retained water, evaporation, and other documented outputs | water; ice; brine; stock change; retained water; evaporation | kg wastewater by stream | eu-pef-2021-2279 |
| `calc_refrigerant_loss` | `refrigerant_r717_emission`; `refrigerant_r404a_emission`; `refrigerant_r134a_emission`; `refrigerant_r744_emission` | substance loss = additions + opening stock + purchases - recovery - closing stock - documented transfers, constrained to the equipment boundary | substance-specific refrigerant records | kg substance emitted | eu-pef-2021-2279 |
| `calc_mass_balance` | Each process and whole foreground system | inputs + opening stock = products + co-products + wastes + measured emissions + closing stock + documented moisture change and uncertainty | all mass records | closure percentage and unexplained imbalance | eu-pef-2021-2279 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Raw fish and final product | Retain lot-level linkage for species, origin, capture or aquaculture system, incoming state, process route, packaging, and final storage specification. | Supplier traceability, receiving, batch, release, and dispatch records; codex-cxc-52-2003 |
| `dq_measurement` | Mass, water, energy, temperature, time, and control parameters | Use calibrated instruments appropriate to the decision and retain calibration status, units, missing-data treatment, and conversion basis. | Calibration certificates, meter reconciliation, approved procedures; codex-cxc-52-2003 |
| `dq_temporal` | Foreground study period | Cover a representative production year or the complete seasonal campaign and disclose shutdowns, atypical lots, storage duration, and substitutions. | Production calendar, meter periods, purchasing and dispatch reconciliation; eu-pef-2021-2279 |
| `dq_technology_geography` | Process and upstream datasets | Match smoking technology, smoke medium, hot/cold route, cooling/storage system, geography, species, and capture/aquaculture origin; document proxy use. | Site specification, supplier records, dataset metadata; eu-pef-2021-2279 |
| `dq_completeness` | Foreground inventory | Reconcile fish, ingredients, water, energy, packaging, products, co-products, wastes, wastewater, direct emissions, and refrigerant losses; explain exclusions and material imbalances. | Mass, water, energy, refrigerant, and waste balances; eu-pef-2021-2279 |
| `dq_food_safety_controls` | Smoking, cooling, packaging, and storage | Retain the approved product-specific control plan, monitored critical parameters, deviations, corrective action, and release decision; this PCR does not invent universal time-temperature, microbiological, contaminant, moisture, or shelf-life limits. | Food-safety plan and batch records; codex-cxc-52-2003 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference output | Confirm exactly 1 kg net packaged smoked fish using the declared product UUID, Mass property, mass unit group, and kg; packaging mass shall not be included. | unsd-cpc-3-0 |
| `validate_qualifiers` | Dataset metadata | Reject an incomplete package when required species, form, incoming state, smoking route and medium, salting/brining, storage state, packaging, origin, geography, or production/holding dates are absent. | unsd-cpc-3-0; codex-cxc-52-2003 |
| `validate_process_route` | Foreground inventory | Confirm that each required process has a matched detailed inventory, route-specific records, and no double counting of intermediate fish, smoking medium versus fuel, ice production, or shared utilities. | codex-cxc-52-2003 |
| `validate_mass_balance` | Process and system totals | Calculate process and overall mass-balance closure and require explanation of moisture change, stock change, measurement uncertainty, or missing flows for material imbalance. | eu-pef-2021-2279 |
| `validate_allocation` | Multifunctional processes | Confirm allocation avoidance was attempted first and that every remaining physical or economic allocation key, co-product status, data period, and sensitivity is disclosed. | eu-pef-2021-2279 |
| `validate_food_safety_evidence` | Smoking and finishing records | Confirm that the actual product specification supplies applicable smoking, cooling, storage, microbiological, chemical-contaminant, moisture or water-activity, and shelf-life criteria plus monitored release evidence; report inconclusive if these criteria are absent. | codex-cxc-52-2003 |
| `validate_provisional_ranges` | Important inventory flows | Treat every `reasoned_estimate` interval only as a QA flag. A value outside the interval requires explanation, while a value inside it does not constitute evidence; replace provisional ranges before publication-critical use. |  |
| `validate_data_quality` | Completed data package | Report temporal, geographical, technological, precision, completeness, consistency, and source representativeness, including proxy datasets and skipped checks. | eu-pef-2021-2279 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for smoked fish at the smoking-facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` when geography, species, production route, technology, storage state, and data-quality needs are compatible |
| allowed_use | Cradle-to-gate or broader models that add compatible upstream fish and input datasets and avoid overlap with this foreground boundary; comparisons only when functional, quality, storage, and route specifications are equivalent |
| excluded_use | Direct representation of unsmoked, canned, salted-only, dried-only, pickled, fermented, or merely smoke-flavoured fish; substitution across materially different species, hot/cold routes, production systems, storage states, or geographies without review |
| required_metadata | PCR id and status; product-flow UUID; species and form; origin and capture/aquaculture system; incoming state; smoking and smoke-generation route; salt/brine route; storage and packaging specification; facility geography and technology; study period; net output; upstream datasets; co-products and allocation; data sources and provisional estimates |
| required_quality_disclosure | Primary-data share; meter and scale coverage; temporal, geographical, and technological representativeness; data gaps and proxy datasets; mass/water/energy balance closure; food-safety control evidence; uncertainty; all `reasoned_estimate` uses and unresolved UUIDs |
| update_trigger | Change in species mix, sourcing or production system, smoking route or medium, formulation, equipment, energy carrier, cooling/freezing/storage route, packaging, co-product destination, allocation, wastewater or emissions control, refrigerant, regulation, product safety specification, or evidence causing a material inventory change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, code 21232, Fish including fillets, smoked. https://unstats.un.org/unsd/classifications/Econ/cpc | Product category boundary and classification context |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official Codex text (listed as revised through 2019). https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | Fish-processing route decomposition, hygiene and process-control records, smoking/cooling/packaging quality requirements |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279. http://data.europa.eu/eli/reco/2021/2279/oj | Boundary completeness, allocation hierarchy, foreground data quality, normalization, and validation disclosure |
