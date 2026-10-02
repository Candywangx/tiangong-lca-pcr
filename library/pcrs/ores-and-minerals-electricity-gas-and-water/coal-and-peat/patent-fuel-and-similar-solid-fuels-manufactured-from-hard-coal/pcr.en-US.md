---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.patent-fuel-and-similar-solid-fuels-manufactured-from-hard-coal
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Patent fuel and similar solid fuels manufactured from hard coal

## 1. Scope and Applicability

This PCR covers foreground data packages for patent fuel and similar solid fuels manufactured by formulation and shaping of hard-coal fines. Patent fuel means binder-agglomerated hard-coal fuel, not a legal patent claim. Brown-coal and peat briquettes, wood charcoal, coke and semi-coke have distinct boundaries. Coal rank, binder, moisture, forming and curing route materially affect collection requirements; brown-coal or charcoal energy intensities cannot be transferred without evidence. `unsd-cpc-3-structure-2025`; `unsd-energy-questionnaire-2024`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.patent-fuel-and-similar-solid-fuels-manufactured-from-hard-coal |
| classification_refs | CPC 3.0:11020 |
| covered_products | Patent fuel and similar shaped hard-coal solid fuels; bituminous and anthracite formulations |
| excluded_products | Unshaped raw coal; brown-coal or peat briquettes; wood charcoal; coke and semi-coke; standard-coal equivalents |
| representative_product | Accepted hard-coal briquette fuel at factory gate |
| production_route | Feed receipt and size preparation; binder preparation and mixing; pressure forming; drying or curing when needed; screening and internal recycle; storage and dispatch packaging |
| market_state | Solid shaped fuel, as-produced moisture, bulk or declared packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide combustible manufactured hard-coal fuel accepted at the factory gate |
| How much | 1 kg reference flow |
| How well | Declare coal rank, formulation, moisture, ash, sulfur and as-produced net calorific value; accepted to the declared sales specification |
| How long or cycle | One factory-gate production delivery; subsequent combustion heat service is outside the declaration |
| reference_flow_link | finished_fuel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hard-coal briquette fuel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Coal rank; hard-coal origin; individual binder/additive masses; curing route; moisture; net calorific value and basis; ash and sulfur; size and strength specification; packaging; site and year |

Record every qualifier in the data package. Net reference product mass includes product moisture and binder, excludes packaging, and must not be replaced by standard-coal equivalent.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Weigh net fuel mass as produced; every inventory row uses the same denominator per 1 kg reference flow. Use cp_output. |
| moisture_basis | coal feed and finished fuel | Mass | kg | Record wet-basis moisture separately. Dry mass equals wet mass multiplied by one minus the wet-basis moisture fraction; retain original wet mass. |
| carrier_units | electricity_input; dryer_gas; steam_input | Energy; Volume; Mass | MJ; m3; kg | Convert electricity using 1 kWh = 3.6 MJ. Declare natural-gas meter temperature and pressure. Record steam mass; do not treat it directly as delivered heat energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received hard-coal feed of declared rank, moisture and particle size plus separately supplied binders |
| starting_condition_role | Foreground modelling entry, not an upstream burden exclusion |
| product_classification_scope | Patent fuel and similar hard-coal manufactured solid fuels; CPC 3.0:11020 |
| recursive_input_rule | Record externally purchased same-category recycled briquettes as a separate supplier input linked to upstream data. Internal fines and broken-briquette recycle is a loop, not a new external input, output or credit. |
| upstream_dataset_requirement | Link applicable upstream datasets for coal extraction, beneficiation and delivery to site, binder, packaging and utilities; disclose missing coverage. |
| disclosure | Feed origin; received state; recycle flows; route and pollution control; upstream links; gate boundary and exceptions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | manufacture | Include actual feed preparation, mixing, forming, conditioning, internal handling, losses and pollution control from receipt through the product gate. Drying and binder requirements depend on coal characteristics; do not assume a universal route. | epa-coal-conversion-1979 |
| boundary_upstream | foreground data package | Represent upstream supplies with linked datasets; received feed is not burden-free. Document delivery links. Post-gate distribution, combustion and packaging disposal belong to separately declared downstream scenarios. |  |
| boundary_inventory | manufacture | Record all actual external exchanges within the declared collection boundary. For other binders, fuels or packaging actually used, add specific atomic rows and collection records; never use category rows or assumed zeros. Capital-equipment construction is outside this operating package and must be disclosed. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Manufactured hard-coal fuel production | required | All covered products | foreground_production | 1 kg reference flow |

Receipt, mixing, forming, conditioning, screening and packaging form one integrated foreground process with a common gate-output denominator; retain unit-operation measurements when available. The EPA report supports process identification only, not a current industry consumption range. Card inclusion conditions determine applicability; absence requires evidence.

### Process: Manufactured hard-coal fuel production (`manufacture`)

#### Inputs

##### Product flows

###### Bituminous hard-coal feed (`bituminous_feed`)

When bituminous hard coal is used; supplier rank and fines size must be declared.

- Selected flow: hard coal `a2bec48b-8347-4582-8cca-fa9d09ce0ac1`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_material; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Inclusion condition: When bituminous hard coal is used; supplier rank and fines size must be declared.

- Sources: `epa-coal-conversion-1979`

###### Anthracite feed (`anthracite_feed`)

When anthracite is used, including blends with bituminous coal; do not duplicate the same feed mass.

- Selected flow: hard coal, anthracite `9ff1d63b-2eab-4f82-969a-71dd1474f0f1`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_material; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Inclusion condition: When anthracite is used, including blends with bituminous coal; do not duplicate the same feed mass.

- Sources: `epa-coal-conversion-1979`

###### Coal-tar pitch binder (`pitch_binder`)

When coal-tar pitch is added as binder; not petroleum asphalt.

- Selected flow: Coal-tar pitch
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_material; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Inclusion condition: When coal-tar pitch is added as binder; not petroleum asphalt.

- Sources: `epa-coal-conversion-1979`

###### Starch binder solids (`starch_binder`)

When neat starch is used as binder; record any water separately.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_material; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Inclusion condition: When neat starch is used as binder; record any water separately.

- Sources: `epa-coal-conversion-1979`

###### Purchased tap water (`mixing_water`)

When tap water crosses the site boundary for mixing, cleaning or dust suppression; internal recirculation is not a new input.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_material; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Inclusion condition: When tap water crosses the site boundary for mixing, cleaning or dust suppression; internal recirculation is not a new input.

###### Manufacturing electricity (`electricity_input`)

Include metered electricity for size preparation, mixing, pressing, conditioning, handling and pollution control.

- Selected flow: Alternating current `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- Flow property / unit: Energy / MJ
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_energy; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Inclusion condition: Include metered electricity for size preparation, mixing, pressing, conditioning, handling and pollution control.

###### Purchased steam (`steam_input`)

When industrial steam is purchased for binder heating or drying; declare steam conditions and condensate return.

- Selected flow: Industrial steam `ea4e839d-d854-4a7a-a362-b4ccb8dc61ff`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_energy; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Inclusion condition: When industrial steam is purchased for binder heating or drying; declare steam conditions and condensate return.

###### Natural gas for on-site heating (`dryer_gas`)

When natural gas is burned on site; separate it from coal incorporated into the finished fuel.

- Selected flow: Pipeline-quality natural gas `7766e51e-0b64-4fbb-89cb-489c33293137`
- Flow property / unit: Volume / m3
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_energy; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Inclusion condition: When natural gas is burned on site; separate it from coal incorporated into the finished fuel.

###### Polyethylene film packaging (`pe_film`)

When polyethylene film is used for dispatch packaging; exclude packaging from the reference product mass.

- Selected flow: Polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_material; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Inclusion condition: When polyethylene film is used for dispatch packaging; exclude packaging from the reference product mass.

#### Outputs

##### Product flows

###### Saleable hard-coal manufactured fuel (`finished_fuel`)

Always include accepted net fuel output at the factory gate; retain as-produced moisture.

- Selected flow: Hard-coal briquette fuel
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Inclusion condition: Always include accepted net fuel output at the factory gate; retain as-produced moisture.

##### Waste flows

###### Collected coal dust sent for disposal (`coal_dust_disposal`)

When collected coal dust leaves the site as waste; internally recycled fines are not an external waste output.

- Selected flow: Collected coal dust for disposal
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_waste; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Inclusion condition: When collected coal dust leaves the site as waste; internally recycled fines are not an external waste output.

###### Briquetting process wastewater sent for treatment (`process_wastewater`)

When a distinct process wastewater stream is transferred to treatment; record its composition and treatment destination.

- Selected flow: Coal-briquetting process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_waste; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Inclusion condition: When a distinct process wastewater stream is transferred to treatment; record its composition and treatment destination.

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2`)

When fossil fuel is burned within the manufacturing boundary; exclude later combustion of the saleable product.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_air; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Inclusion condition: When fossil fuel is burned within the manufacturing boundary; exclude later combustion of the saleable product.

###### Fossil carbon monoxide to air (`fossil_co`)

When on-site fossil combustion emits carbon monoxide to outdoor air.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_air; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Inclusion condition: When on-site fossil combustion emits carbon monoxide to outdoor air.

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

When nitrogen dioxide is emitted to outdoor air; a NOx-as-NO2 total is not a measured NO2 species amount.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_air; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Inclusion condition: When nitrogen dioxide is emitted to outdoor air; a NOx-as-NO2 total is not a measured NO2 species amount.

###### Sulfur dioxide to air (`sulfur_dioxide`)

When sulfur dioxide is emitted to outdoor air from on-site heating or conditioning.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_air; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Inclusion condition: When sulfur dioxide is emitted to outdoor air from on-site heating or conditioning.

###### Total particulate dust to air (`particulate_air`)

When stack or fugitive particulate dust is emitted; report total particulate without pretending a PM10 size cut.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured exchange per 1 kg reference flow using cp_air; retain campaign totals and net output weighing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Inclusion condition: When stack or fugitive particulate dust is emitted; report total particulate without pretending a PM10 size cut.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | manufacture | Separate formulations using distinct campaigns, unit-operation measurements and operating time. Partition shared electricity with measured operating time and power; disclose and test alternatives when causality is not demonstrated. |  |
| allocation_grade | saleable_outputs | For multiple grades of the same fuel from one indivisible campaign, partition joint operating burdens by actual net saleable mass; disclose calorific differences and energy-allocation sensitivity. |  |
| allocation_recycle | internal_fines | Internal fines receive no avoided-burden credit; their rehandling and repressing energy remains included. Link waste treatment; declare product or waste status for any sold by-product and prevent duplicate credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | manufacture | finished_fuel | weighing | campaign; net finished mass; tare; moisture; ash; sulfur; NCV; acceptance |Weigh accepted fuel on calibrated scales excluding packaging; test representative same-campaign samples and record methods| kg | batch and shift | declared complete campaign including downtime and start-up | same plant and formulation | per 1 kg reference flow | calibration; weigh tickets; assay and acceptance records |
| cp_material | manufacture | material_inputs | weighing | individual flow; supplier; receipts and stock; dosing; moisture; recipe; packaging mass |Reconcile each material using weighing, dosing and opening/closing stock; volume-to-mass conversion requires measured density; divide campaign totals by same-period cp_output net finished mass to obtain the per-kg intensity.| kg | batch and campaign boundaries | same period as cp_output | manufacturing boundary | per 1 kg reference flow | weigh/supplier tickets; stock ledger; dosing; calibration |
| cp_energy | manufacture | electricity_input; steam_input; dryer_gas | metering | meter start/end; steam pressure/temperature; gas temperature/pressure; same-period output; shared-load drivers |Meter electricity, steam and gas separately; convert electricity to MJ; reconcile purchase records and shared-load partition; divide campaign totals by same-period cp_output net finished mass to obtain the per-kg intensity.| MJ; kg; m3 | shift and campaign | same period as cp_output | manufacturing and pollution-control equipment | per 1 kg reference flow | calibration; invoices; operating time and partition evidence |
| cp_waste | manufacture | coal_dust_disposal; process_wastewater | waste_transfer | individual waste mass; moisture/composition; destination; recycle amount; transfer records |Weigh coal dust and wastewater separately; reconcile transfer and recycle ledgers; wastewater volume conversion requires measured density; divide campaign totals by same-period cp_output net finished mass to obtain the per-kg intensity.| kg | each transfer | same period as cp_output | site exports | per 1 kg reference flow | transfer records; water assay; destination; recycle ledger |
| cp_air | manufacture | fossil_co2; fossil_co; nitrogen_dioxide; sulfur_dioxide; particulate_air | emission_measurement | species; release point; concentration; gas volume; hours; method; fuel carbon; fossil fraction; particle size; captured mass |Prefer monitoring; integrate species concentration times gas volume on matching temperature/pressure basis. CO2 may use a measured fuel-carbon balance with oxidation and non-CO2 carbon flows. Without a method or representative sample, do not enter zero; divide campaign totals by same-period cp_output net finished mass to obtain the per-kg intensity.| kg | representative modes and full operating duration | same period as cp_output | site stack and fugitive releases | per 1 kg reference flow | monitoring; calibration; carbon balance; mode representativeness; detection limits |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_intensity | all inventory rows | Divide each campaign exchange total by same-period accepted net finished fuel mass; finished product row is fixed to 1 kg. | cp_output; cp_material; cp_energy; cp_waste; cp_air | exchange amount per 1 kg reference flow |  |
| moisture_conversion | bituminous_feed; anthracite_feed; finished_fuel | Dry mass equals wet mass times one minus wet-basis moisture fraction; diagnostic balance only, not a replacement gate denominator. | cp_output; cp_material | diagnostic dry mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_formulation | manufacture | Declare coal rank, all actual binders/additives, formulation, route and controls; illustrative rows do not replace the actual recipe. | recipe ledger and supplier specification |
| dq_representative | all inventory rows | Collect all operating modes, losses and recycle for the same period; disclose gaps and substitutions; distinguish missing from zero. | raw records and completeness ledger |
| dq_energy | finished_fuel | Distinguish wet/dry and gross/net calorific bases; declare measured as-produced NCV per kg gate mass; embodied fuel energy is not manufacturing energy input. | same-batch tests and method disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | finished_fuel | Confirm manufactured hard-coal fuel and all qualifiers; reference amount and output row both equal 1 kg; packaging is outside the denominator. | unsd-energy-questionnaire-2024 |
| validate_balance | manufacture | Reconcile coal, binder, water, net product, recycle and exports; disclose moisture evaporation, stock change and balance residual; interpret with instrument uncertainty rather than an invented tolerance. |  |
| validate_atomic | all inventory rows | Each row represents one exchange or species; check unit, applicability, destination and evidence. Do not treat NOx-as-NO2 totals as NO2 or sum total particulate with its size fractions. |  |
| validate_normalization | all inventory rows | Check same period, formulation and per 1 kg reference flow denominator. Exclude later product combustion; do not repeat upstream purchased-steam combustion emissions on site. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply processes for declared hard-coal fuel formulation and gate state, linked into later life-cycle models |
| excluded_use | Unqualified heat-service equivalence, comparison across coal rank or binder, and brown-coal, charcoal or coke substitution |
| required_metadata | Site; year; coal rank; formulation; moisture/NCV basis; boundary; collection period; allocation; upstream and treatment links |
| required_quality_disclosure | Missing exchanges and identities; estimates; monitoring representativeness; uncertainty; balance residual; absence evidence |
| update_trigger | Change in feed, recipe, equipment, heating source, controls or sales-moisture specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-structure-2025 | official_guidance | UNSD, Central Product Classification Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; rows 432-444; retrieved 2026-09-30 | Classification identity and neighbouring categories |
| unsd-energy-questionnaire-2024 | official_guidance | UNSD, Guidelines for the 2022 Annual Questionnaire on Energy Statistics, May 2024, page 8. https://unstats.un.org/unsd/energy/energy-questionnaire-guidelines.pdf ; retrieved 2026-09-30 | Patent-fuel definition and brown-coal, peat and coke exclusions; semantic basis for professional Chinese title |
| epa-coal-conversion-1979 | official_guidance | US EPA, Coal Conversion Control Technology, Volume II: Gaseous Emissions; Solid Wastes, EPA-600/7-79-228b, October 1979, printed page 813. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101FVE8.TXT ; retrieved 2026-09-30 | Forming, binder, fines recycle and conditional drying process identification; historical discussion is not a current range |
