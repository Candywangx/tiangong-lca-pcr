---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.recovered-gases
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Recovered gases

## 1. Scope and Applicability

This PCR covers recovery and supply of combustible industrial by-product gases of solid carbonaceous origin: blast-furnace gas, basic-oxygen converter gas and other individually identified recovered process gases. It excludes coke-oven gas, gasworks gas, natural gas, refinery gases, biogas, and heat recovered by burning process gas without exporting a fuel-gas product. The Chinese category name 回收煤气 denotes recovered industrial fuel gas, rather than every recycled gas. Product definitions follow `un-energy-2026`; the classification title follows `un-cpc-2025`.

The concrete reference inventory represents a blast-furnace gas recovery center, with converter-gas co-supply conditional. For a converter-only or another covered gas, construct a separate product-specific package with its own concrete reference identity, measured state and route-specific atomic exchanges; never substitute a blast-furnace UUID. Shared method rules apply, while the representative inventory is not a claim that all plants produce both gases. Fossil-carbon air rows apply only to the fossil fraction; biomass-derived carbon requires separately identified biogenic exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.recovered-gases |
| classification_refs | CPC 3.0: 17203; `un-cpc-2025` |
| covered_products | Recovered solid-carbonaceous industrial fuel gases, including blast-furnace and converter gas |
| excluded_products | Coke-oven gas; gasworks gas; natural gas; refinery gas; biogas; combustion-only heat recovery |
| representative_product | Cleaned blast furnace gas |
| production_route | Capture; cooling and dedusting; gas handling; delivery; conditional flaring and pressure recovery |
| market_state | Gaseous fuel delivered at a metered recovery-center outlet |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of cleaned blast furnace gas as the representative recovered-gas product |
| How much | 1 kg of accepted dry cleaned gas; accompanying dry volume stated at 273.15 K and 101.325 kPa absolute pressure |
| How well | Meets the declared receiving gas-network specification; measured composition, gross and net calorific values and delivery pressure |
| How long or cycle | One declared representative operating period including normal operation, startups and shutdowns |
| reference_flow_link | reference_gas |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Blast furnace gas `67d9fe25-51ed-4d41-af35-f033a752d042` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Source furnace and gas type; fossil/biogenic carbon fraction; dry/wet state; metering temperature and absolute pressure; compressibility; gas composition; gross/net calorific value basis; outlet pressure; dust specification; upstream allocation; geography; period; flaring; delivery point |

Declare every required qualifier in the foreground package. Volume alone is not a functional equivalence claim between different gases. Retain measured energy content per reference mass, calculated using measured dry volume and density; report UN statistical energy on a gross-calorific basis without treating it as a net-calorific value.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| gas_state | reference_gas | Mass | kg | Collect accepted dry export mass through cp_export, using corrected dry volume and measured gas density on the same state basis. Correct meters using absolute pressure, temperature, moisture and compressibility; do not assume a wet operating m3 equals a reference m3. |
| energy_basis | reference_gas; converter_gas | Energy content | MJ | Keep gross and net calorific values distinct, on the same dry volume state; report energy as dry volume multiplied by measured calorific value. No fixed gas-density or heating-value default is supplied. |
| electricity_units | recovery_electricity; pressure_recovery_electricity | Net calorific value | MJ | Convert metered kWh to MJ by multiplying by 3.6; retain meter records. This electricity identity property is not a calorific-value test of electricity. |
| solids_state | bf_dust; bf_sludge; bof_dust; bof_sludge | Mass | kg | Retain as-transferred wet mass and dry-solids content separately. Use measured moisture to convert; never equate wet sludge mass with dry dust. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw by-product gas handed from its producing furnace to the recovery system, with documented upstream burden |
| starting_condition_role | Physical foreground inlet, not a zero-burden assumption |
| product_classification_scope | Recovered industrial fuel gases; CPC 17203 is classification context |
| recursive_input_rule | Use a measured transfer and one identified supplying process; net internal recirculation out of external exchange totals |
| upstream_dataset_requirement | Link furnace gas supply, utilities and external treatment to compatible datasets; document any unavailable upstream burden |
| disclosure | Declare furnace/recovery interface, cleaning route, network limits, gas storage, export meters, flare ownership and upstream allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_recovery | recovery | Include capture, cleaning, cooling, compression, gas holding, handling losses and delivery to the declared outlet. Include owned bypass/flare operation; exclude downstream customer combustion. | `eu-iron-steel-2013` |
| boundary_treatment | recovery | Record dust, sludge and wastewater at external-treatment handover and link treatment. Internal reused gas/water are balances, not repeated purchases. Full-combustion converter heat recovery is not a recovered fuel-gas output. | `eu-iron-steel-2013` |
| boundary_extend | foreground_package | Add each actual auxiliary, treatment chemical, dust stream and elementary pollutant as a separate identified exchange if present. A missing template row never authorizes a cut-off; substantiate any omission through cp_scope. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery | Integrated gas capture, conditioning and delivery | required | Covered fuel-gas recovery center | foreground production | per reference flow |

### Process: Gas capture, conditioning and delivery (`recovery`)

#### Inputs

##### Product flows

###### Raw blast furnace gas (`raw_bf`)

Record the raw gas transferred from ironmaking before cleaning, including moisture and dust state.

- Selected flow: Raw blast furnace gas
- Flow property / unit: Volume / m3
- Amount rule: Collected exchange per reference flow using cp_gas.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- inclusion_condition: Blast-furnace recovery route.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Raw converter gas (`raw_bof`)

Record captured converter gas before dedusting; distinguish diverted gas from accepted fuel gas.

- Selected flow: Raw converter gas
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow using cp_gas.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- inclusion_condition: Converter recovery route.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Alternating current (`recovery_electricity`)

Meter capture, gas-cleaning, cooling-water pumps, compression and gas-holder electricity; avoid repeated shared-meter totals.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per reference flow using cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: All operating recovery systems.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Production water for industrial use (`scrubber_water`)

Record supplied industrial-water makeup, excluding internal recirculation.

- Selected flow: Production water for industrial use `72dcdee6-846a-455a-95d1-942aa7ad3730`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per reference flow using cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: Wet scrubbing or industrial-water cooling makeup.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### de-ionised water (`cooling_deionised_water`)

Record separately supplied deionised-water makeup.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per reference flow using cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: A deionised-water cooling loop is present.
- Sources: `eu-iron-steel-2013`

###### Nitrogen gas (`purge_nitrogen`)

Record purchased gaseous nitrogen for purging the recovery network.

- Selected flow: Nitrogen gas `92233c86-8e75-441c-94de-03cc91bc7c10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per reference flow using cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: Nitrogen purging is used.
- Sources: `eu-iron-steel-2013`

#### Outputs

##### Product flows

###### Blast furnace gas (`reference_gas`)

One kilogram of accepted dry blast furnace gas is supplied at the declared outlet.

- Selected flow: Blast furnace gas `67d9fe25-51ed-4d41-af35-f033a752d042`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_export`
- inclusion_condition: Representative blast-furnace gas dataset.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Converter gas (`converter_gas`)

Record accepted converter gas exported from the same recovery center; keep its mass, density and energy separately.

- Selected flow: Converter gas `631f9452-a270-4d64-9103-de9dede592d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per reference flow using cp_export.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_export`
- inclusion_condition: The recovery center also exports converter gas.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Alternating current (`pressure_recovery_electricity`)

Record net electricity exported from gas-pressure recovery, excluding self-consumed generation.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per reference flow using cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- inclusion_condition: Top-pressure energy recovery exports electricity.
- Sources: `eu-iron-steel-2013`

##### Waste flows

###### Blast furnace gas-cleaning dust (`bf_dust`)

Weigh segregated dry dust at handover; retain metal and moisture analysis and receiving route.

- Selected flow: Blast furnace gas-cleaning dust
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow using cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: Dry coarse gas cleaning is used on the blast-furnace route.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Blast furnace gas-cleaning sludge (`bf_sludge`)

Weigh wet sludge and measure dry solids and zinc/lead content; avoid double-counting solids in effluent.

- Selected flow: Blast furnace gas-cleaning sludge
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow using cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: Wet gas cleaning produces separated sludge.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Converter gas-cleaning dust (`bof_dust`)

Weigh converter dry gas-cleaning dust separately from blast-furnace dust.

- Selected flow: Converter gas-cleaning dust
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow using cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: Dry converter-gas dedusting is used.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Converter gas-cleaning sludge (`bof_sludge`)

Weigh converter wet gas-cleaning sludge separately and report dry-solids content.

- Selected flow: Converter gas-cleaning sludge
- Flow property / unit: Mass / kg
- Amount rule: Collected exchange per reference flow using cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: Wet converter-gas dedusting is used.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### Gas-scrubber wastewater (`scrubber_effluent`)

Meter the aqueous effluent handed to wastewater treatment; record suspended solids, cyanide, ammonia and metals analyses.

- Selected flow: Gas-scrubber wastewater
- Flow property / unit: Volume / m3
- Amount rule: Collected exchange per reference flow using cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- inclusion_condition: Scrubber water is purged across the recovery boundary.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

##### Elementary flows

###### carbon monoxide (fossil) (`carbon_monoxide_air`)

Measure or reconcile fossil CO discharged by leaks, venting and incomplete foreground flare combustion.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per reference flow using cp_air.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Fossil-carbon gas is released to air.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

###### carbon dioxide (fossil) (`carbon_dioxide_air`)

Measure or reconcile fossil CO2 from foreground venting and flaring; include CO2 already in vented gas.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collected exchange per reference flow using cp_air.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- inclusion_condition: Fossil-carbon gas is vented or flared.
- Sources: `un-energy-2026`; `eu-iron-steel-2013`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_upstream | raw_bf; raw_bof | Obtain the producing-furnace burden allocated to each transferred gas through cp_upstream. Recovery does not establish zero burden or an avoided-emission credit. Disclose supplier allocation and assess uncertainty where burdens are unavailable. |  |
| allocation_shared | recovery | Assign dedicated meters directly. For remaining common conditioning services use a documented causal engineering driver, with measured driver totals and shares summing to one in cp_allocation. If no causal driver is defensible, state an economic allocation scenario using consistent-period revenues and provide sensitivity; never silently choose mass, volume or calorific value as universal allocation. |  |
| allocation_outputs | converter_gas; pressure_recovery_electricity; bf_dust; bf_sludge; bof_dust; bof_sludge | Treat independently exported gas/electricity as co-products where applicable. Determine dust/sludge product versus waste status from actual handover and quality records, and update the physical flow type accordingly. Do not credit recycling or pressure recovery twice; retain treatment responsibility. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_export | recovery | reference_gas; converter_gas | Export meters and gas laboratory records | Gas type; accepted dry mass; accepted dry volume; temperature; absolute pressure; water vapor; compressibility; composition; density; gross/net calorific value; delivery pressure | Reconcile calibrated export meters with representative gas sampling; obtain dry mass as corrected dry volume multiplied by measured density on that same state basis. Separate gas types and excluded flare diversion. | m3; kg; MJ | Continuous meters; routine composition sampling | Same declared representative period, including startup and shutdown | Declared recovery center and handover points | per reference flow | Calibrations; logs; source records; reconciliation and uncertainty |
| cp_gas | recovery | raw_bf; raw_bof | Furnace transfer records | Source furnace; inlet volume/mass; state; contaminants; diverted fraction | Reconcile transfer meters and furnace operating logs on matching gas-state bases. | m3; kg | Continuous and each converter heat | Same declared representative period, including startup and shutdown | Declared recovery center and handover points | per reference flow | Calibrations; logs; source records; reconciliation and uncertainty |
| cp_utilities | recovery | recovery_electricity; scrubber_water; cooling_deionised_water; purge_nitrogen; pressure_recovery_electricity | Dedicated meter and supply records | Meter id; exchange identity; gross input; self-consumption; exported output; allocation driver; unit conversion | Read dedicated electricity, water and nitrogen meters, reconciled to bills; use measured density if volume is converted to mass. | kWh; MJ; kg; m3 | Continuous; reconcile monthly | Same declared representative period, including startup and shutdown | Declared recovery center and handover points | per reference flow | Calibrations; logs; source records; reconciliation and uncertainty |
| cp_waste | recovery | bf_dust; bf_sludge; bof_dust; bof_sludge; scrubber_effluent | Weighbridge, effluent meters and analyses | Origin; mass/volume; moisture; dry solids; metals; cyanide; ammonia; destination; waste status | Measure each segregated waste at external-treatment handover; reconcile manifests and retained laboratory samples. | kg; m3 | Each transfer and representative samples | Same declared representative period, including startup and shutdown | Declared recovery center and handover points | per reference flow | Calibrations; logs; source records; reconciliation and uncertainty |
| cp_air | recovery | carbon_monoxide_air; carbon_dioxide_air | Flare, vent and leak inventory | Event duration; gas flow; composition; fossil fraction; flare operation; monitoring results; uncertainty | Use stack/vent monitoring or a documented event-level carbon balance; retain methods and uncertainties. Account for residual CO and inlet CO2 separately. | kg | Continuous or each event | Same declared representative period, including startup and shutdown | Declared recovery center and handover points | per reference flow | Calibrations; logs; source records; reconciliation and uncertainty |
| cp_upstream | recovery | raw_bf; raw_bof | Supplying-process and allocation dossier | Supplier; source dataset; furnace boundary; allocation; gas transfer basis; unresolved burden | Obtain and verify a compatible supplying-process dataset and its gas allocation; do not infer burden from gas price alone. | m3; kg | Each supply basis revision | Same declared representative period, including startup and shutdown | Declared recovery center and handover points | per reference flow | Calibrations; logs; source records; reconciliation and uncertainty |
| cp_allocation | recovery | recovery | Shared-service attribution records | Service; product; driver; measured totals; shares; revenues if used; sensitivity | Separate independently metered service totals; document residual allocation rationale and sum shares to one. | dimensionless | Each accounting period | Same declared representative period, including startup and shutdown | Declared recovery center and handover points | per reference flow | Calibrations; logs; source records; reconciliation and uncertainty |
| cp_scope | recovery | recovery | Equipment and exchange completeness register | Unit operations; chemicals; emissions; water loops; omitted exchanges; upstream/treatment links | Walk down the actual recovery system; reconcile every physical crossing, and justify conditional absences and omissions. | not applicable | Each configuration revision | Same declared representative period, including startup and shutdown | Declared recovery center and handover points | per reference flow | Calibrations; logs; source records; reconciliation and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_records | all inventory rows | For the same declared period, divide each attributable exchange total by accepted exported dry reference-gas mass; the reference output is 1 kg. Preserve numerator units and document allocation before division. | cp_export; cp_gas; cp_utilities; cp_waste; cp_air; cp_allocation | Exchange amount per reference flow |  |
| correct_gas_volume | raw_bf; reference_gas | Convert measured gas volume to the declared dry temperature/absolute-pressure basis using measured moisture and compressibility with a documented gas-state calculation or calibrated flow-computer record. Retain the complete conversion record. | cp_gas; cp_export | Dry gas volume at reference conditions |  |
| gas_energy | reference_gas; converter_gas | Multiply dry gas volume by its measured gross or net calorific value on the identical state basis; retain both results and never use an unrelated furnace-gas factor. | cp_export | Gross and net energy content, separately | `un-energy-2026` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_balance | recovery | Reconcile inlet, export, own use, flare, leakage and gas-holder stock changes by gas type. Explain differences against propagated measurement uncertainty. | cp_gas; cp_export; cp_air |
| quality_state | reference_gas; converter_gas | Declare dry/wet volume and calorific value state; use measured density when reconciling converter mass with volume. | cp_export |
| quality_completeness | recovery | Retain omitted-flow explanations; add actual route-specific atomic exchanges and identify upstream and external-treatment gaps. No external empirical quantity ranges are prescribed. | cp_scope; cp_upstream |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | foreground_package | Require concrete gas identity, accepted reference quantity, all qualifiers, state correction, measured calorific values and matched period/denominator. Reject interchangeable treatment of different gases or wet and dry volumes. | `un-energy-2026` |
| validate_exchanges | recovery | Each physical exchange must be atomic; unresolved UUIDs must retain specific physical names and review metadata. Prove conditional absences. Reject double-counted internal circulation, co-products or exported-gas combustion. |  |
| validate_balance | recovery | Require documented gas/carbon balances, utilities, waste destinations, measured allocation drivers and upstream-burden disclosure. Investigate negative amounts, unexplained balances and missing flare periods; flag estimates and missing records. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Gas supply inputs to receiving industrial processes; downstream process or lifecyclemodel projection |
| allowed_use | Only matching gas type, state, geography, period and upstream allocation; energy conversion from measured calorific values |
| excluded_use | Automatic substitution for natural gas or coke-oven gas; energy-only equivalence without quality checks; zero-burden or avoided-emission credits inferred from recovery |
| required_metadata | Gas identity; state; composition; measured energy; outlet specification; furnace source; period; site; allocation; boundaries; data gaps |
| required_quality_disclosure | Meter calibrations; sampling; balances; uncertainty; upstream and waste-treatment links; estimates and unresolved identities |
| update_trigger | Furnace feedstock, cleaning route, gas network, calorific value basis, allocation or supplying-process changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD, Central Product Classification Version 3.0 structure, 30 June 2025, rows 520-525. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-10-01 | Classification identity only; independence key: unsd-cpc-3-structure-2025 |
| un-energy-2026 | official_guidance | UNSD, Guidelines for the 2024 Annual Questionnaire on Energy Statistics, May 2026, pp. 13-14. https://unstats.un.org/unsd/energystats/questionnaire/documents/Energy-Questionnaire-Guidelines.pdf; retrieved 2026-10-01 | Recovered gas definition, exclusions and gross-energy reporting; independence key: unsd-energy-questionnaire-2026 |
| eu-iron-steel-2013 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for Iron and Steel Production, 2013, section 6.3.4 pp. 326-327 and section 7.2.2.1.2 pp. 372-373. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf; retrieved 2026-10-01 | Gas cleaning, wet/dry residues, suppressed combustion and flare diversion; no empirical ranges adopted; independence key: jrc-iron-steel-bref-2013 |
