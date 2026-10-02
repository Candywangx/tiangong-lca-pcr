---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Peat

## 1. Scope and Applicability

This PCR covers extraction and gate supply of unagglomerated peat for fuel, horticultural or other material use. It covers milled particles and cut peat dried without agglomeration. The declared unit is a production mass reference, not an equivalence of fuel energy or horticultural service. Briquettes, coke, peat tar and formulated growing media are excluded. Different moisture and intended uses require separate dataset qualifiers. (`un-cpc-3-2025`; `ipcc-wetlands-2006`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.peat |
| classification_refs | CPC 3.0 11051 |
| covered_products | Unagglomerated milled peat and cut peat |
| excluded_products | Peat briquettes; peat coke; peat tar; formulated growing media |
| representative_product | Bulk unagglomerated peat at declared moisture |
| production_route | Peatland preparation and drainage; milling or cutting; natural drying; collection; stockpiling and gate loading |
| market_state | Bulk peat, declared wet-basis moisture and intended use; no additives |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unagglomerated peat at production gate |
| How much | 1 kg reference flow |
| How well | Declared moisture, ash, peat type, particle state and intended use; disclose net calorific value for fuel use |
| How long or cycle | One gate supply; representative complete production year including seasonal drainage |
| reference_flow_link | peat_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Peat `485febdb-01e0-47ad-8ebe-c500a35669bd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Site and source peatland; prior land use; climate; drainage dates and ditch fraction; peat type; milling or cutting; moisture wet basis; ash basis; intended use; gate; stockpile duration; production year; carbon accounting convention and restoration scenario |

Declare all required qualifiers in the foreground package; missing qualifiers make the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use net gate mass at declared wet-basis moisture; packaging excluded; collect using cp_mass. All inventory uses per 1 kg reference flow. |
| moisture_basis | peat_resource, peat_output | Mass | kg | Record wet mass and moisture fraction w on the same sample basis; dry mass equals wet mass times (1-w). Do not replace declared wet reference mass with dry mass. |
| electricity_unit | electricity_input | Energy | MJ | Preserve metered kWh; multiply by 3.6 to obtain MJ; collect using cp_energy. |
| gas_basis | peatland_nitrous_oxide, soil_carbon_dioxide | Mass | kg | Convert carbon mass to CO2 by 44/12 and N2O-N to N2O by 44/28 only when raw factors use those element bases. Do not apply conversion twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Source peat deposit with documented prior land use and drainage history |
| starting_condition_role | Natural resource entry; prior drainage remains attributable where caused by peat extraction |
| product_classification_scope | Unagglomerated peat; CPC reference does not imply usable methodology for briquettes |
| recursive_input_rule | Purchased peat is a product input requiring its own extraction dataset; do not replace it by an elementary extraction or recursively recreate its supplier |
| upstream_dataset_requirement | Link geographically matched fuel and electricity production, external treatment and any purchased peat; avoid duplicate supplier extraction |
| disclosure | Report active, preparation and inactive drained areas, historical conversion and restoration horizon; disclose all exclusions and carbon stocks exported |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | foreground | Include preparation, drainage maintenance, harvesting, drying, storage and loading; include on-site GHG and land occupation. Collect omitted actual fuels, chemicals, wastes and emissions as separate atomic exchanges before dataset acceptance. | ipcc-wetlands-2006 |
| boundary_carbon | peatland_management | Keep soil carbon loss, fuel combustion and exported peat carbon separate. Include land conversion and attributable drained inactive areas; disclose a site-specific post-extraction drainage/restoration scenario separately from annual operating inventory, including its allocation to recovered peat. | ipcc-wetlands-2006; ipcc-wetlands-2013 |
| boundary_downstream | gate | Exclude downstream peat combustion, horticultural oxidation, growing-media formulation and customer delivery. Do not treat exported carbon as an emission at the gate or award an automatic sequestration credit. | ipcc-wetlands-2006 |
| boundary_water | drainage_doc, drainage_effluent | Wastewater transferred to treatment and direct environmental DOC release are different destinations; do not count the same untreated DOC again as both treatment input and direct release. Quantify downstream DOC oxidation only in an explicitly separate scenario. | ipcc-wetlands-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| peatland_management | Peatland land and drainage accounting | required | All source sites | Land and direct emissions accounting | per 1 kg reference flow |
| peat_production | Extraction, natural drying and gate supply | required | All production routes | Foreground physical production including site utilities | per 1 kg reference flow |

### Process: Peatland management (`peatland_management`)

#### Inputs

##### Elementary flows

###### Occupation of peat extraction land (`land_occupation`)

Collect occupied area and duration attributable to peat extraction, including drained inactive areas.

- Selected flow: Occupation of peat extraction land
- Flow property / unit: Area*time / m2*a
- Amount rule: Collect occupied area and duration attributable to peat extraction, including drained inactive areas. Report measured period total divided by net gate peat output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`
- Sources: `ipcc-wetlands-2013`

###### Transformation of natural peatland to extraction land (`land_transformation`)

Record newly converted area and original peatland state; allocate establishment across documented recoverable production without repeating it annually.

- Selected flow: Transformation of natural peatland to extraction land
- Flow property / unit: Area / m2
- Amount rule: Record newly converted area and original peatland state; allocate establishment across documented recoverable production without repeating it annually. Report measured period total divided by net gate peat output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`
- Sources: `ipcc-wetlands-2013`

#### Outputs

##### Waste flows

###### Peat extraction drainage effluent sent to treatment (`drainage_effluent`)

Include only when drainage effluent leaves for treatment; measure the transferred water mass and identify receiver and treatment.

- Selected flow: Peat extraction drainage effluent sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Include only when drainage effluent leaves for treatment; measure the transferred water mass and identify receiver and treatment. Report measured period total divided by net gate peat output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ipcc-wetlands-2013`

##### Elementary flows

###### Carbon dioxide from peatland carbon-stock loss to air (`soil_carbon_dioxide`)

Quantify on-site soil and vegetation carbon losses during preparation, extraction and attributable drainage; exclude carbon exported in product.

- Selected flow: Carbon dioxide from peatland carbon-stock loss to air
- Flow property / unit: Mass / kg
- Amount rule: Quantify on-site soil and vegetation carbon losses during preparation, extraction and attributable drainage; exclude carbon exported in product. Report measured period total divided by net gate peat output in kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ghg`
- Sources: `ipcc-wetlands-2013`

###### Methane to non-urban air (`peatland_methane`)

Collect soil and ditch methane fluxes or apply documented region-appropriate factors to mapped areas and durations.

- Selected flow: Methane to non-urban air
- Flow property / unit: Mass / kg
- Amount rule: Collect soil and ditch methane fluxes or apply documented region-appropriate factors to mapped areas and durations. Report measured period total divided by net gate peat output in kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ghg`
- Sources: `ipcc-wetlands-2013`

###### Nitrous oxide to non-urban air (`peatland_nitrous_oxide`)

Collect N2O fluxes or calculate from matched land-use, climate and drainage activity data; preserve N2O versus N2O-N distinction.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c6-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect N2O fluxes or calculate from matched land-use, climate and drainage activity data; preserve N2O versus N2O-N distinction. Report measured period total divided by net gate peat output in kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ghg`
- Sources: `ipcc-wetlands-2013`

###### Dissolved organic carbon to fresh water (`drainage_doc`)

Include when drainage discharges to fresh water; integrate discharge volume and measured dissolved organic carbon concentration; record kg carbon, not kg water.

The public flow has no Chinese baseName; retain the canonical English name.

- Selected flow: DOC, Dissolved Organic Carbon `21291e2b-f570-4264-a430-1522a6d67805`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Include when drainage discharges to fresh water; integrate discharge volume and measured dissolved organic carbon concentration; record kg carbon, not kg water. Report measured period total divided by net gate peat output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ipcc-wetlands-2013`

### Process: Peat production (`peat_production`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel_input`)

Measure diesel consumed by site preparation, pumps, milling or cutting, collecting and stockpile handling; separate own combustion from contracted complete services.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure diesel consumed by site preparation, pumps, milling or cutting, collecting and stockpile handling; separate own combustion from contracted complete services. Report measured period total divided by net gate peat output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ipcc-wetlands-2006`

###### Electricity (`electricity_input`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Meter purchased electricity for pumps and production; convert kWh to MJ using 3.6 MJ/kWh. Include only when purchased electricity is used.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter purchased electricity for pumps and production; convert kWh to MJ using 3.6 MJ/kWh. Include only when purchased electricity is used. Report measured period total divided by net gate peat output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ipcc-wetlands-2006`

##### Elementary flows

###### Peat in ground, extracted mass (`peat_resource`)

Measure excavated peat mass and moisture; reconcile dry matter with final product, stock changes and physical losses. Do not assume resource depletion equals wet gate mass.

- Selected flow: Peat in ground, extracted mass
- Flow property / unit: Mass / kg
- Amount rule: Measure excavated peat mass and moisture; reconcile dry matter with final product, stock changes and physical losses. Do not assume resource depletion equals wet gate mass. Report measured period total divided by net gate peat output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `ipcc-wetlands-2006`

#### Outputs

##### Product flows

###### Peat (`peat_output`)

1 kg reference flow; collect net unagglomerated peat output at declared gate moisture.

- Selected flow: Peat `485febdb-01e0-47ad-8ebe-c500a35669bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `ipcc-wetlands-2006`

##### Elementary flows

###### Carbon dioxide fossil to non-urban air (`diesel_carbon_dioxide`)

Determine diesel combustion CO2 from measured fuel carbon and oxidation or traceable combustion factors; exclude soil carbon loss.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-9c13-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Determine diesel combustion CO2 from measured fuel carbon and oxidation or traceable combustion factors; exclude soil carbon loss. Report measured period total divided by net gate peat output in kg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_combustion`
- Sources: `ipcc-wetlands-2006`

###### PM10 to air (`peat_pm10`)

Include emitted PM10 from extraction and handling using size-specific monitoring or a documented site model; do not substitute total dust.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Include emitted PM10 from extraction and handling using size-specific monitoring or a documented site model; do not substitute total dust. Report measured period total divided by net gate peat output in kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_combustion`
- Sources: `ipcc-wetlands-2006`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | foreground | Use dedicated site and route records before allocating common burdens; exclude internal peat rehandling from saleable output. |  |
| allocation_common | multiple_peat_grades | For inseparable common burdens of unagglomerated peat grades, use measured dry-matter output shares so moisture does not change burden share; disclose shares, rejected material and sensitivity to an alternative allocation. Preparation and closure burdens use documented lifetime recovered dry-matter production and reconcile annually. No avoided-product credit in the gate dataset. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | peat_production | peat mass | weighing | net gate mass; excavated mass; moisture fraction w; dry-matter stock change; rejects | Calibrated weighbridge or scales and representative paired moisture samples; record mass balance and stock surveys. | kg | Each lot; reconcile annually | One complete representative year plus attributable establishment/closure | Source peatland and production gate | per 1 kg reference flow | Calibration; field records; model/factor provenance; boundary reconciliation |
| cp_energy | peat_production | diesel and electricity records | meter_log | diesel kg; density for litre conversion; electricity kWh; equipment hours; contracted service boundary | Read calibrated meters, fuel receipts and stock changes; assign preparation, pumping and extraction without double counting. | kg; kWh | Monthly and production season | One complete representative year plus attributable establishment/closure | Source peatland and production gate | per 1 kg reference flow | Calibration; field records; model/factor provenance; boundary reconciliation |
| cp_land | peatland_management | land use | survey | area m2; occupation years; prior land state; converted area; active and inactive drained area; ditch widths and lengths | GIS survey and drainage history; verify mapped dates, ownership and restoration plan; retain production lifetime basis. | m2; a | Annually and each conversion | One complete representative year plus attributable establishment/closure | Source peatland and production gate | per 1 kg reference flow | Calibration; field records; model/factor provenance; boundary reconciliation |
| cp_ghg | peatland_management | peatland gases | monitoring_model | CO2-C; CH4; N2O-N; climate; nutrient class; flux intervals; ditch fraction; model and factors; production kg | Use seasonally representative chamber or flux monitoring, or document IPCC method tier and matched activity/factors. Separate conversion, soil loss and ditch flux; include nonproduction season. | kg; m2; a | Seasonal integration over full year | One complete representative year plus attributable establishment/closure | Source peatland and production gate | per 1 kg reference flow | Calibration; field records; model/factor provenance; boundary reconciliation |
| cp_water | peatland_management | drainage | sampling | discharge volume; DOC concentration; receiver; treatment-transfer mass; sample dates and storms | Measure discharge and flow-weighted DOC samples across season and storms; retain treatment receipts and receiving-water identity. | kg; m3; mg/L | Seasonal and storm-event coverage | One complete representative year plus attributable establishment/closure | Source peatland and production gate | per 1 kg reference flow | Calibration; field records; model/factor provenance; boundary reconciliation |
| cp_combustion | peat_production | combustion and dust | monitoring_model | diesel carbon; oxidation; CO2 factors; measured PM10; activity; controls; model uncertainty | Use fuel-carbon balance for CO2 and PM10-specific monitoring or validated site model. Add other actual combustion pollutants as separate atomic rows. | kg | Production-season records and annual reconciliation | One complete representative year plus attributable establishment/closure | Source peatland and production gate | per 1 kg reference flow | Calibration; field records; model/factor provenance; boundary reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Inventory intensity = attributable period exchange total / net gate peat output in kg; reference output is 1 kg. Both numerator and denominator refer to the same period and moisture state. | cp_mass; cp_energy; cp_land; cp_ghg; cp_water; cp_combustion | exchange per 1 kg reference flow |  |
| dry_matter_reconcile | peat_resource, peat_output | Dry mass = wet mass * (1-w); resource dry mass plus opening stocks equals sold dry mass plus closing stocks plus accounted losses; report residual and sampling uncertainty. | cp_mass | dry-matter reconciliation |  |
| ghg_activity | soil_carbon_dioxide, peatland_methane, peatland_nitrous_oxide | Integrate observed flux * area * duration, or sum matched area * duration * applicable factor by stratum. Retain units and factor provenance; distinguish ditch area and soil surface to avoid overlap. Convert element-basis factors before normalization. | cp_ghg; cp_land; cp_mass | gas mass per reference flow | ipcc-wetlands-2013 |
| doc_mass | drainage_doc | DOC kg = sum(discharge m3 * DOC mg/L) * 0.001; normalize using normalize_period; retain sampling uncertainty and direct-discharge boundary. | cp_water; cp_mass | kg dissolved organic carbon per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_site | all | Match peat type, climate, drainage history and harvest technology; use a full representative year and disclose production variability. | cp_land; cp_mass; ipcc-wetlands-2013 |
| quality_balance | all | Reconcile energy invoices, production and stocks; report losses and missing exchange coverage explicitly. Add site-specific thermal drying or packaging only with identified individual exchanges and matching protocols. | cp_energy; cp_mass |
| quality_carbon | peatland_management | Retain carbon-stock boundaries and model/factor version; disclose uncertainty and avoid treating extraction as instant release of all exported carbon. | cp_ghg; ipcc-wetlands-2006; ipcc-wetlands-2013 |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | peat_output | Require 1 kg net gate peat, declared moisture and all reference qualifiers; do not compare wet and dry datasets as equivalent. |  |
| validate_completeness | all | Require every applicable atomic exchange, matching collection records and upstream links; unresolved UUIDs remain explicit. Absence needs physical evidence, not an invented zero. |  |
| validate_carbon | peatland_management | Check land-area and duration coverage, ditch fractions, element-to-gas units, DOC destination and separate diesel versus soil carbon; disclose post-extraction scenario and allocation. | ipcc-wetlands-2013 |
| validate_balance | peat_resource, peat_output | Check dry-matter reconciliation and residual uncertainty before acceptance; no universal loss or energy range is specified. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared unagglomerated peat gate supply with matched moisture and use qualifiers |
| excluded_use | Briquette manufacture; downstream combustion or horticultural function equivalence; carbon-neutral peat claims |
| required_metadata | Reference qualifiers; site; year; routes; upstream providers; allocation; land history; scenario horizon |
| required_quality_disclosure | Missing UUIDs; data coverage; uncertainty; moisture and carbon balance; omitted flows; closure scenario sensitivity |
| update_trigger | Drainage or restoration change; new harvest route; moisture or product-use change; updated site measurements or emission methodology |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product identity, peat versus briquettes; accessed 2026-09-30 |
| ipcc-wetlands-2006 | official_guidance | IPCC, 2006 Guidelines, Volume 4 Chapter 7, section 7.2, p.7.8. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_07_Ch7_Wetlands.pdf | Preparation, extraction and post-extraction phases and gate/downstream carbon distinction; accessed 2026-09-30 |
| ipcc-wetlands-2013 | official_guidance | IPCC, 2014, 2013 Wetlands Supplement, Chapter 2, sections 2.2.1–2.2.3. https://www.ipcc-nggip.iges.or.jp/public/wetlands/pdf/Wetlands_Supplement_Entire_Report.pdf | Drained organic-soil GHG, ditch area, activity collection, DOC distinction; no empirical production ranges adopted; accessed 2026-09-30 |
