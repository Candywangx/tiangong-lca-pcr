---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.bituminous-or-oil-shale-and-tar-sands
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bituminous or oil shale and tar sands

## 1. Scope and Applicability

This rule covers mined bituminous shale, kerogen-bearing oil shale and natural-bitumen-bearing tar sands supplied as raw mineral at the mine handover point. It includes surface or underground excavation, drilling and blasting, internal haulage and actual mechanical crushing and screening. The endpoint precedes retorting, hot-water bitumen separation and upgrading; the resulting oils and bitumen recovered by in-situ thermal extraction are outside this product boundary. Raw sand mass must not represent recoverable oil mass. Sources: `un-cpc-3-2025`, `usgs-oil-shale-2018`, `usgs-natural-bitumen-2003`. This mining methodology needs raw-mineral mass, grade, moisture and waste-rock boundaries, independently of oil-production methodology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.bituminous-or-oil-shale-and-tar-sands |
| classification_refs | CPC 3.0: 12030 |
| covered_products | Unretorted bituminous and oil shale; tar sands before bitumen separation |
| excluded_products | Crude oil; shale oil; separated bitumen; synthetic crude; refinery bitumen; coal; paving asphalt mixtures |
| representative_product | Raw oil shale at mine handover |
| production_route | Surface or underground mining; declare actual mechanical preparation |
| market_state | Unretorted raw mineral, bulk delivery, with measured moisture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Raw oil shale of declared grade supplied at mine handover |
| How much | 1 kg |
| How well | Declare moisture, mineral composition and oil-yield assay method; no oil-recovery performance is promised |
| How long or cycle | One mine-product handover within the declared reporting period |
| reference_flow_link | `shale_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Raw oil shale |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Raw-mineral category; deposit and country; mining technology; handover point; reporting period; wet or dry basis; moisture test; particle size; kerogen or bitumen content; assay method; waste-rock/product separation; allocation method |

Tar-sands data packages use the same 1 kg raw-mineral mass basis but must replace the product name and reference link above with `sand_output`, supported by bitumen-bearing sand assays. Every data package declares exactly one concrete reference product. Required qualifiers belong in metadata or reference-flow comments.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use traceable net handover mass from cp_mass; exclude added water and transport packaging, preserve declared inherent moisture. |
| `moisture_basis` | reference product | Mass | kg | Record wet mass with paired moisture assays; calculate dry mass only with measured same-lot moisture, never substitute oil yield for raw-mineral mass. |
| `electricity_unit` | electricity | Energy | MJ | Convert metered kWh to MJ by multiplying by 3.6; preserve fuel mass separately from electricity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | In-ground deposit supported by geological and survey records; or separately declared purchased raw mineral |
| starting_condition_role | Extraction origin; purchased raw mineral must not conceal upstream mining |
| product_classification_scope | CPC 12030 raw mineral; excludes CPC 12012 oils |
| recursive_input_rule | Record purchased same-category raw mineral as a separate product input; do not recursively expand this process output into its own input |
| upstream_dataset_requirement | Link purchased raw mineral, electricity, diesel, lubricating oil and explosive to compatible upstream datasets; do not duplicate mining datasets for own-deposit resource extraction |
| disclosure | Disclose origin, handover, technology, upstream links, waste fate, internal circulation and infrastructure treatment |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_mineral` | mine-gate | End the foreground boundary before any thermal conversion or bitumen separation; in-situ thermally recovered oils are not raw-mineral outputs. | `un-cpc-3-2025`; `usgs-oil-shale-2018`; `usgs-natural-bitumen-2003` |
| `boundary_operations` | mine-gate; site-management | Include stripping, excavation, haulage, mechanical conditioning, pumping, waste-rock management and associated direct emissions; add separate atomic rows for actual additional chemicals. | `ifc-mining-2007` |
| `boundary_lifecycle` | site-management | Attribute development and closure activities over documented lifetime production; disclose infrastructure and land transformation separately, without unexplained cutoffs. | `ifc-mining-2007` |
| `boundary_water` | water; groundwater; mine_water | Record fresh abstraction, dewatering, reuse, stocks and discharge fate; do not count internal circulation as external abstraction; separate treatment transfers from direct environmental releases. | `ifc-mining-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mine-gate` | Extraction, internal haulage and mine handover | required | All packages; crushing, screening and blasting only when actually performed | foreground production | 1 kg reference flow |
| `site-management` | Site water, land and waste management | required | Actual site activities | foreground environmental management | 1 kg reference flow |

This inventory is a minimum collection framework, not a cutoff permission. Add required atomic rows for actual resource origins, overburden composition, explosive formulations and receiving compartments. The two routes are alternatives; never normalize tar-sand and shale outputs together as one product.

### Process: Extraction, internal haulage and mine handover (`mine-gate`)

#### Inputs

##### Product flows

###### Electricity (`electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Purchased electricity for excavation, conveying and any crushing; exclude electricity generated onsite already represented by fuel.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect using cp_energy and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ifc-mining-2007`

###### Diesel fuel (`diesel`)

Include when diesel is consumed by mine equipment or onsite generators; identify equipment and fuel specification.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_material and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-mining-2007`

###### lubricating oil (`lubricant`)

Include when mineral lubricating oil is consumed in mining equipment; reconcile stock changes.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_material and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-mining-2007`

###### Modified ammonium-nitrate fuel-oil explosive (`ammonium_nitrate`)

Include only where this prepared explosive formulation is used for drilling and blasting. Other formulations need separate atomic rows.

- Selected flow: Modified ammonium-nitrate fuel-oil explosive `2e5d50e4-c17c-4d76-87c0-6a14d0ba374b`
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_material and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifc-mining-2007`

##### Waste flows

##### Elementary flows

###### Oil shale, in ground (`shale_resource`)

Include for shale mining; determine extracted kerogen-bearing rock mass before rejects and losses. Generic shale is not an oil-shale identity.

- Selected flow: Oil shale, in ground
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_resource and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resource`
- Sources: `un-cpc-3-2025`

###### Tar sands, in ground (`sand_resource`)

Include for tar-sands mining; determine total extracted mineral mass and assay bitumen separately. An oil-mass or radioactivity reference is not a raw-sand mass.

- Selected flow: Tar sands, in ground
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_resource and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resource`
- Sources: `un-cpc-3-2025`

#### Outputs

##### Product flows

###### Raw oil shale (`shale_output`)

1 kg reference flow for the declared shale product, including measured inherent moisture; shale datasets use this reference row.

- Selected flow: Raw oil shale
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`

###### Raw tar sands (`sand_output`)

1 kg reference flow only for tar-sands datasets; replace the representative shale reference object and reference_flow_link with this row, never add both outputs as one reference.

- Selected flow: Raw tar sands
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`co2`)

Include direct fossil combustion emissions to air in the reporting period; exclude purchased-electricity upstream emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_air and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

###### Nitrogen dioxide, to air (`no2`)

Include actual nitrogen dioxide from combustion and blasting. Separate NO2 from NO, N2O and nitrite; aggregate NOx factors require documented speciation before use for this row.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_air and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

###### Particulate matter PM10, to air (`pm10`)

Include direct fugitive and combustion PM10 crossing the mine boundary; do not replace with coarse-only dust, soot or an urban-stack compartment.

- Selected flow: Particulate matter PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_air and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ifc-mining-2007`

### Process: Site water, land and waste management (`site-management`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

###### river water (`water`)

Include when freshwater is abstracted from a river for dust suppression or mine operations; internal recirculation is not fresh abstraction.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Collect using cp_water and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### ground water (`groundwater`)

Include groundwater abstraction or dewatering separately from river abstraction; identify aquifer, discharge and reuse.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Collect using cp_water and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### Mineral extraction site occupation (`land`)

Include occupied mine, stockpile and waste-dump area over time; preserve land class and distinguish transformation from occupation.

- Selected flow: mineral extraction site `b0744c5e-9859-470f-99dc-b117be5a32c5`
- Flow property / unit: Area*time / m2*a
- Amount rule: Collect using cp_land and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land`
- Sources: `ifc-mining-2007`

#### Outputs

##### Product flows

##### Waste flows

###### Mine waste rock (`overburden`)

Include barren rock removed in the declared mining route and handed to waste-dump management; record geological composition and fate. Soil overburden needs a distinct atomic row.

- Selected flow: Mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_waste and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-mining-2007`

###### Mine drainage water for treatment (`mine_water`)

Include only water transferred to a treatment operator; water directly discharged to nature must instead be recorded by receiving compartment and individual contaminants.

- Selected flow: Mine drainage water for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect using cp_water and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-mining-2007`

###### Used lubricating oil (`used_oil`)

Include collected used mineral lubricating oil sent to recovery or disposal; distinguish transfer from environmental leakage.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Collect using cp_waste and normalize to per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ifc-mining-2007`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_separate` | all inventory rows | First subdivide burdens using submeters and separate operation records; manage waste rock as waste without automatic co-product credits. |  |
| `allocate_joint` | all inventory rows | Allocate indivisible joint operations using documented physical causality; where no causal basis is established, use saleable raw-mineral dry mass in the same period and disclose moisture, total products, allocation shares and sensitivity; separately sold minerals require distinct descriptions. |  |
| `allocate_integrated` | mine-gate | Integrated oil-production facilities must isolate raw-mineral mining burdens with submeters; do not back-allocate retorting or bitumen-separation burdens into this raw-mineral dataset. | `usgs-oil-shale-2018`; `usgs-natural-bitumen-2003` |

The allocation procedure is this rule’s data-collection convention, not an LCA allocation standard prescribed by the geological or environmental documents above.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | mine-gate | reference product | weighbridge and assay | net handover mass; category; lot; moisture; grade; opening and closing stocks | Calibrated weighbridge and same-lot representative assays; separate handovers by mineral | kg | each lot | full declared period; cover seasonality | same deposit, route and handover | per 1 kg reference flow | calibration, assays, ledger and attribution records |
| cp_energy | mine-gate | electricity | meter | meter readings; submeter attribution; onsite generation; voltage; supply region | Separate purchased and generated electricity; collect process meters and invoices | MJ | each shift with monthly reconciliation | full declared period; cover seasonality | same deposit, route and handover | per 1 kg reference flow | calibration, assays, ledger and attribution records |
| cp_material | mine-gate | diesel; lubricant; ammonium_nitrate | stock ledger | receipts per material; opening/closing stocks; issue quantities; formulation; equipment | Reconcile net consumption by material stock and issue records; convert volume with measured density | kg | daily with monthly reconciliation | full declared period; cover seasonality | same deposit, route and handover | per 1 kg reference flow | calibration, assays, ledger and attribution records |
| cp_resource | mine-gate | shale_resource; sand_resource | survey and assay | extracted volume; in-situ density; seam; grade; dilution; losses | Survey excavation and in-situ density; reconcile with product handover, waste rock and stocks | kg | each survey period | full declared period; cover seasonality | same deposit, route and handover | per 1 kg reference flow | calibration, assays, ledger and attribution records |
| cp_air | mine-gate | co2; no2; pm10 | monitoring or activity model | fuel and carbon content; equipment hours; factor source; particle size; receiving compartment; control efficiency | Retain measured emissions or source-by-source activity models with original public factor texts and uncertainty; do not use ambient concentration as emission mass | kg | continuous or representative operations | full declared period; cover seasonality | same deposit, route and handover | per 1 kg reference flow | calibration, assays, ledger and attribution records |
| cp_water | site-management | water; groundwater; mine_water | water meters and transfer records | origin; abstraction; dewatering; reuse; stocks; discharge; treatment fate; samples | Build water balance from calibrated meters and transfer records; separate fresh abstraction from internal reuse | m3 | daily with monthly balance | full declared period; cover seasonality | same deposit, route and handover | per 1 kg reference flow | calibration, assays, ledger and attribution records |
| cp_waste | site-management | overburden; used_oil | weighing and manifest | waste mass; composition; hazard; receiver; transport; treatment route | Weighing or surveyed volume times measured density; retain disposal transfer and leakage records | kg | each transfer | full declared period; cover seasonality | same deposit, route and handover | per 1 kg reference flow | calibration, assays, ledger and attribution records |
| cp_land | site-management | land | GIS and mine plan | land class; occupied area; dates; restoration; transformation type | Measure period-specific area*time with GIS and mine plans; separately record land transformation and restoration | m2*a | annually and at major changes | full declared period; cover seasonality | same deposit, route and handover | per 1 kg reference flow | calibration, assays, ledger and attribution records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | Divide attributable exchange totals by net raw-mineral handover mass for the same basis and period; reference product output is 1 kg. | exchange totals; cp_mass; attribution records | exchange amount per 1 kg reference flow |  |
| `dry_mass` | reference product | Dry mass = measured wet mass × (1 − same-lot wet-basis moisture mass fraction); all normalization for a dry-basis dataset uses dry mass consistently. | cp_mass; paired moisture assay | dry mass |  |
| `electricity_conversion` | electricity | kWh × 3.6 = MJ; unit conversion, not an empirical energy-intensity factor. | cp_energy; kWh | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_traceability` | all inventory rows | Retain original records, units, attribution, time, site, technology and gaps; distinguish measurement from modelling. | collection protocols |
| `quality_balance` | mine-gate; site-management | Reconcile raw mineral, waste rock, water and stock changes; investigate discrepancies without substituting arbitrary ranges. | cp_mass; cp_resource; cp_water; cp_waste |
| `quality_ranges` | all inventory rows | This rule sets no external empirical ranges; collect separate deposit, grade, moisture and technology records; externally inferred ranges need at least two independent boundary-compatible original sources. | foreground records and future source synthesis |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Confirm one concrete raw-mineral reference flow, 1 kg basis, all qualifiers and paired assays; petroleum, generic shale and asphalt cannot proxy the raw mineral. | `un-cpc-3-2025` |
| `validate_measurement` | all inventory rows | Confirm aligned EN/ZH reference basis, collection aggregation and units; stock and moisture conversions use traceable records; unknown relationships require review. |  |
| `validate_boundary` | mine-gate; site-management | Check thermal-conversion exclusion, upstream links, waste treatment and direct emissions; avoid duplicating purchased-electricity emissions, circulation water and waste rock. | `ifc-mining-2007`; `usgs-natural-bitumen-2003` |
| `validate_identity` | all inventory rows | Require one concrete exchange per row; verify public UUID identity, property, compartment and unit before final use; missing UUIDs remain explicit, without proxy substitutions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Process or lifecycle model using raw-mineral inputs |
| allowed_use | Upstream raw-material supply matching mineral category, moisture basis and handover boundary |
| excluded_use | Representation of recoverable oil, shale oil, separated bitumen or in-situ thermally recovered petroleum |
| required_metadata | Qualifiers; reference flow; site; year; route; boundary; upstream links; allocation; treatment fate |
| required_quality_disclosure | Collection coverage, balance discrepancies, measured/modelled shares, factor sources, UUID and range-evidence gaps |
| update_trigger | Changes in deposit, grade, mining technology, moisture basis, energy, allocation or handover boundary |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, rows 447–456. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Raw-mineral versus oil classification boundary; verified 2026-09-30 |
| `mof-serbia-tariff-2024` | official_guidance | 财政部，2024年对塞尔维亚实施的协定税率表，PDF 第30页，第1649项，HS 27141000. https://m.mof.gov.cn/zcfb/202406/P020240625320768010766.pdf | Professional Chinese terminology only; no tariff or HS mapping adopted; verified 2026-09-30 |
| `usgs-oil-shale-2018` | official_guidance | USGS, Oil Shale, 7 December 2018, introductory kerogen description. https://www.usgs.gov/centers/central-energy-resources-science-center/science/oil-shale | Distinction between oil shale and converted oil; verified official page 2026-09-30 |
| `usgs-natural-bitumen-2003` | official_guidance | USGS Fact Sheet 70-03, Heavy Oil and Natural Bitumen—Strategic Petroleum Resources, August 2003, Production Technology. https://pubs.usgs.gov/fs/fs070-03/fs070-03.html | Distinguish sand mining, bitumen separation and upgrading; no case quantities adopted; retrieved 2026-09-30 |
| `ifc-mining-2007` | official_guidance | IFC / World Bank Group, Environmental, Health, and Safety Guidelines for Mining, 10 December 2007, pp. 1–2, 5, 12. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mine water balance, waste rock, used oil and air-emission collection framework; apply by site relevance; no emission limits treated as empirical ranges; verified 2026-09-30 |
