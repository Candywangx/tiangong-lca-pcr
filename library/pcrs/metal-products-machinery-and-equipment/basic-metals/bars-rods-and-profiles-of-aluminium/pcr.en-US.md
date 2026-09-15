---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-and-profiles-of-aluminium
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bars, rods and profiles, of aluminium

## 1. Scope and Applicability

This PCR applies to mill-finished aluminium or aluminium-alloy bars, rods, and profiles produced by hot extrusion of a homogenized billet and delivered at the extrusion-plant gate. It covers billet preheating, billet shearing when performed at the extrusion plant, extrusion through a die, cooling or quenching, stretching or straightening, cutting, and age hardening when required by the declared temper.

The PCR excludes aluminium tubes and pipes, wire, rolled plate, sheet and strip, foil, powders and flakes, unwrought aluminium production, billet casting and homogenization, transport to and from the foreground plant, packaging, downstream machining or assembly, anodizing, painting, lacquering, installation, use, and end-of-life treatment. A dataset that includes any excluded operation must report it as a separately identified process and may not represent the result as this gate-to-gate mill-finished profile dataset without disaggregation.

The semantic boundary is a semi-finished aluminium product defined by its elongated bar, rod, or constant-cross-section profile form, not by a particular alloy, application, or external classification code. No other material PCR in the repository was found with this same identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-and-profiles-of-aluminium |
| classification_refs | CPC 3.0: 41532, Bars, rods and profiles, of aluminium |
| covered_products | Mill-finished solid aluminium or aluminium-alloy bars and rods; open or hollow constant-cross-section aluminium profiles other than products sold as tubes or pipes |
| excluded_products | Tubes and pipes; wire; rolled plate, sheet and strip; foil; powders and flakes; unwrought aluminium; coated or anodized products unless the finishing process is separately disaggregated |
| representative_product | Mill-finished hot-extruded aluminium profile cut to sale length |
| production_route | Homogenized extrusion billet preheating, hot extrusion, cooling or quenching, straightening, cutting, and conditional age hardening |
| market_state | Semi-finished, mill-finished, saleable length at extrusion-plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a saleable mill-finished aluminium bar, rod, or profile with declared alloy, geometry, temper, and surface condition |
| How much | 1 m3 net solid-metal volume of saleable product |
| How well | Conforms to the declared alloy designation, dimensional tolerance, temper, surface condition, and acceptance specification |
| How long or cycle | One production lot through the extrusion and thermal-finishing route; no use-stage duration is assigned |
| reference_flow_link | The reference flow is the net solid-metal volume of conforming product after cropping, cutting, rejection, and process-scrap separation, determined from accepted cross-section and length or from net mass and verified alloy density |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Section bar extrusion, aluminium `779eeee0-048a-4559-aa19-cf246c835580` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | product form (bar, rod, or profile); alloy designation; primary and recycled content basis of the billet; nominal cross-section and dimensions; solid-metal volume method; verified alloy density and mass equivalent; temper and heat-treatment state; cooling or quenching route; surface condition; production geography; technology and press class; reporting period; whether any excluded finishing operation is separately reported |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_volume` | reference product | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use net solid-metal volume, excluding hollow voids, packaging, and non-product attachments. Determine volume from accepted cross-section and length or divide verified net mass by documented alloy density. Normalize inventory quantities to 1 m3. |
| `metal_mass` | billet input and aluminium scrap output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use verified net mass. Exclude pallets, wraps, racks, and other packaging, and preserve the mass records used for metal-balance validation. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity and convert kWh to MJ using exactly 3.6 MJ per kWh; disclose voltage level, grid geography, contractual instrument treatment, and whether transformer losses are included. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report volume at the supplier or meter reference temperature and pressure and retain those conditions; do not compare volumes with different reference conditions without conversion. |
| `water_mass` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured delivered mass or convert a measured volume using a documented temperature-appropriate density; exclude recirculation that does not cross the foreground boundary. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Homogenized aluminium extrusion billet received at the extrusion-plant gate, identified by alloy, billet dimensions, supplier, recycled-content basis, and upstream dataset |
| starting_condition_role | Purchased or transferred semi-finished metal input to the foreground extrusion process |
| product_classification_scope | Mill-finished aluminium or aluminium-alloy bars, rods, and constant-cross-section profiles; excludes tubes, pipes, wire, rolled products, foil, powder, flake, and unwrought metal |
| recursive_input_rule | A purchased bar, rod, or profile used as an input is recorded as an upstream same-category product flow with its own dataset and is not re-created inside this foreground process |
| upstream_dataset_requirement | Each billet input must link to a geographically, technologically, compositionally, and temporally representative upstream billet dataset and disclose primary/recycled metal accounting |
| disclosure | Declare alloy, product form, dimensions, temper, cooling route, press and heating technology, mill-finish state, site geography, reporting period, yield basis, scrap destination, internal-return treatment, and every excluded or separately reported operation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground extrusion dataset | Begin with received homogenized extrusion billet and end with net saleable mill-finished bars, rods, or profiles at the extrusion-plant gate. Include billet preheating, shearing at the plant, extrusion, cooling or quenching, stretching or straightening, cutting, and route-applicable age hardening. | `european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022` |
| `boundary_excluded_operations` | operations outside the declared product state | Exclude billet manufacture, transport, packaging, anodizing, painting, lacquering, downstream fabrication or assembly, installation, use, and end-of-life. If collected for a broader study, keep each operation separately disaggregated. | `aluminum-association-extruded-aluminum-epd-2022` |
| `boundary_scrap_loop` | extrusion process scrap | Record all aluminium cropping, discard, cutting, trimming, and rejected-length scrap leaving the process. Internal return is not a zero-burden input: disclose the loop and avoid counting the same metal both as billet input and recovered output. | `european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `aluminium_extrusion_and_thermal_finishing` | Aluminium extrusion and thermal finishing | required | Always included for the declared product | foreground production | 1 m3 net solid-metal volume of saleable mill-finished aluminium bar, rod, or profile |

### Process: Aluminium extrusion and thermal finishing (`aluminium_extrusion_and_thermal_finishing`)

#### Inputs

##### Product flows

###### Homogenized aluminium extrusion billet (`homogenized_aluminium_ingot`)

Record the mass of homogenized billet crossing the plant gate into the extrusion route, including billet pieces later cropped or rejected.

- Selected flow: Homogenized aluminum ingot `5f84bf23-8a6f-4816-98ec-cb358579250f`
- Flow property / unit: Mass / kg
- Amount rule: measured received billet mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m3 net solid-volume reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aluminium_billet_receipts`
- Sources: `european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022`

###### Purchased electricity (`electricity`)

Record electricity imported across the site boundary for billet heating, press drives, cooling, handling, straightening, cutting, age-hardening equipment, and allocated auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered imported electricity assigned to the production lot and converted according to `electricity_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 net solid-volume reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `european-aluminium-environmental-profile-2018`

###### Gaseous natural gas (`natural_gas`)

Record purchased natural gas only when it crosses the foreground boundary for direct-fired billet or age-hardening furnaces; otherwise report the row as not applicable in the produced dataset.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: reference-condition-corrected supplier or meter volume assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 net solid-volume reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_meter`
- Sources: `european-aluminium-environmental-profile-2018`

###### Direct process water (`process_water`)

Record make-up or once-through water that crosses the process boundary for quenching or direct cooling. Do not count closed-loop recirculation as repeated input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up and once-through water assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 net solid-volume reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_meter`
- Sources: `aluminum-association-extruded-aluminum-epd-2022`

##### Waste flows

No waste flow is an input to the declared foreground process.

##### Elementary flows

No elementary flow is an input to the declared foreground process.

#### Outputs

##### Product flows

###### Net saleable aluminium bars, rods and profiles (`aluminium_bars_rods_profiles`)

Record only conforming mill-finished product released for sale. The selected state-100 reference flow is the representative aluminium extrusion profile within CPC 41532; product-form qualifiers extend the PCR boundary to bars and rods without changing this reference identity.

- Selected flow: Section bar extrusion, aluminium `779eeee0-048a-4559-aa19-cf246c835580`
- Flow property / unit: Volume / m3
- Amount rule: exactly 1 m3 net solid-metal volume of saleable reference product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 m3 net solid-volume reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Aluminium process scrap (`aluminium_process_scrap`)

Record aluminium billet ends, extrusion discard, cutting and trimming scrap, and rejected lengths that leave the process for internal or external recovery. Keep contaminated scrap separately described in dataset metadata.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned to the production lot before any recycling credit or substitution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 m3 net solid-volume reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aluminium_scrap_mass`
- Sources: `european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`carbon_dioxide_fossil_to_air`)

Record direct fossil carbon dioxide emitted at the foreground site from combustion of natural gas included in this process. Do not add upstream electricity emissions here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-specific monitored value or documented fuel-carbon mass balance assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 net solid-volume reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `european-aluminium-environmental-profile-2018`

###### Direct nitrogen oxides to air (`nitrogen_oxides_to_air`)

Record nitrogen oxides from foreground fuel combustion as the facility reports them, including the declared NOx-as-NO2 convention. Keep the UUID unresolved because the audited candidates were nitrous oxide rather than nitrogen oxides.

- Selected flow: nitrogen oxides
- Flow property / unit: Mass / kg
- Amount rule: site-specific stack-monitoring or permit-report mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 net solid-volume reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `european-aluminium-environmental-profile-2018`

No external numerical ranges are prescribed. Each important flow remains a foreground collection requirement until at least two independent, boundary-compatible original sources or reviewed foreground datasets support an empirical range.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared meters and multi-product extrusion lines | Prefer subdivision by production lot, press, furnace, or measured operating interval. Where subdivision is not feasible, allocate shared material and energy by a documented causal parameter such as equipment time and load; use net conforming product mass only when no more causal parameter is available. | `aluminum-association-extruded-aluminum-epd-2022` |
| `allocation_scrap_no_credit` | aluminium process scrap | Report scrap mass and destination without assigning an avoided-primary-metal credit inside the foreground inventory. Keep any substitution, recycled-content, cut-off, or closed-loop convention explicit in the downstream model and prevent double counting between billet composition and scrap recovery. | `european-aluminium-environmental-profile-2018`; `aluminum-association-extruded-aluminum-epd-2022` |
| `allocation_rework` | internally reworked or re-extruded material | Count all energy, water, emissions, and unrecovered losses of rework in the lot that yields the conforming product; do not count an internal transfer as a second external billet input or final product output. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_aluminium_billet_receipts` | `aluminium_extrusion_and_thermal_finishing` | homogenized aluminium ingot input | receiving scale, ERP receipt, and lot genealogy | timestamp; supplier; billet lot; alloy; dimensions; gross mass; tare mass; recycled-content basis | reconcile calibrated receiving-scale records to ERP issues and press lot | kg | each receipt and production lot | full reporting period | all billet entering the declared process | sum net billet mass assigned to conforming and rejected lot output; prevent double counting of internal returns | scale calibration; receipt; ERP reconciliation; lot trace |
| `cp_electricity_meter` | `aluminium_extrusion_and_thermal_finishing` | purchased electricity input | revenue meter and submeters | opening reading; closing reading; interval use; unit; meter id; press/furnace assignment; loss boundary | reconcile site imports to equipment submeters and allocate residual auxiliaries causally | kWh and MJ | interval data aggregated by lot, at least monthly reconciliation | full reporting period | all equipment inside the declared process | subtract exports, convert kWh to MJ, assign by measured interval or documented equipment load and time, normalize by net solid product volume | meter calibration; utility invoice; submeter reconciliation; allocation worksheet |
| `cp_natural_gas_meter` | `aluminium_extrusion_and_thermal_finishing` | gaseous natural gas input | supplier invoice and furnace meter | volume; reference temperature; reference pressure; meter id; furnace; operating interval; lot assignment | reconcile supplier volume to furnace meters | m3 | interval data aggregated by lot, at least monthly reconciliation | full reporting period | direct-fired equipment inside the declared process | correct to declared reference conditions, subtract out-of-boundary uses, allocate by measured furnace interval, normalize by net solid product volume | meter calibration; supplier statement; furnace log; reconciliation |
| `cp_process_water_meter` | `aluminium_extrusion_and_thermal_finishing` | direct process water input | make-up or once-through water meter | opening reading; closing reading; source; destination; recirculation status; discharge linkage; lot assignment | meter boundary-crossing make-up and once-through water; exclude internal recirculation | kg or m3 | interval data aggregated by lot, at least monthly reconciliation | full reporting period | quench and direct-cooling systems inside the declared process | convert volume with documented density when needed, subtract non-process uses, normalize by net solid product volume | meter calibration; water balance; density basis; maintenance record |
| `cp_product_mass` | `aluminium_extrusion_and_thermal_finishing` | net saleable product output | final scale, geometry record, dispatch record, and quality release | lot; alloy; form; accepted cross-section; length; density; solid volume; gross mass; tare; rejected mass; release status | determine solid-metal volume from accepted geometry or verified net mass and alloy density, then reconcile to dispatch and quality records | m3 and kg | each lot | full reporting period | all conforming output inside the declared process | sum net released solid-metal volume only; exclude voids, packaging, attachments, and rejected material | scale and dimensional-equipment calibration; density basis; release certificate; dispatch reconciliation; dimensional and temper inspection |
| `cp_aluminium_scrap_mass` | `aluminium_extrusion_and_thermal_finishing` | aluminium process scrap output | scrap scale and container movement record | lot; scrap type; alloy; contamination state; gross mass; tare; destination; internal return flag | weigh each scrap movement and reconcile to billet/product mass balance | kg | each movement and production lot | full reporting period | all process scrap generated inside the declared process | sum net scrap by state and destination; identify internal returns; normalize by net solid product volume | scale calibration; movement ticket; destination receipt; mass-balance reconciliation |
| `cp_direct_air_emissions` | `aluminium_extrusion_and_thermal_finishing` | direct fossil carbon dioxide and nitrogen oxides outputs | stack monitoring, permit report, and fuel-carbon calculation records | pollutant; concentration; gas flow; operating time; fuel volume; fuel composition; oxidation factor; NOx reporting convention; stack; lot assignment | use calibrated continuous or periodic monitoring where available; otherwise use a documented facility fuel-carbon balance for fossil CO2 | kg | monitoring interval or permit frequency with monthly lot reconciliation | full reporting period | direct-fired equipment inside the declared process | subtract non-process sources, aggregate pollutant mass by stack and lot, normalize by net solid product volume; never include upstream electricity emissions | analyzer calibration; laboratory certificate; permit report; fuel analysis; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_volume` | every inventory row | normalized amount = lot-assigned exchange amount / net solid-metal volume of conforming unpackaged product | exchange amount; accepted cross-section and length or net mass and verified alloy density | exchange per 1 m3 reference product |  |
| `calc_metal_mass_balance` | billet, product, scrap, and documented metal loss | billet metal input = conforming product + aluminium scrap + separately measured unrecovered metal loss, after accounting for documented internal transfers | billet mass; product mass; scrap mass; internal transfers; measured metal loss | reconciled metal balance and closure percentage | `european-aluminium-environmental-profile-2018` |
| `calc_electricity_conversion` | purchased electricity | electricity in MJ = metered kWh × 3.6 | metered electricity in kWh | purchased electricity in MJ |  |
| `calc_water_volume_to_mass` | process water when recorded by volume | water mass = metered volume × documented water density at the declared temperature | water volume; temperature; density | process-water mass in kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and billet | Preserve lot-level alloy, form, dimensions, temper, surface condition, and billet genealogy; do not aggregate coated or anodized products into this mill-finished dataset. | material certificates; lot genealogy; quality release; product specification |
| `dq_measurement` | mass, electricity, gas, water, and emissions | Use calibrated instruments or reconciled supplier records, retain units and reference conditions, and document conversions and allocation keys. | calibration certificates; invoices; meter extracts; calculation worksheets |
| `dq_temporal` | all foreground exchanges | Cover one representative continuous 12-month period where practicable; disclose shutdowns, start-ups, abnormal campaigns, missing intervals, and substitutions. | reporting-period register; production calendar; gap log |
| `dq_completeness` | process inventory | Reconcile billet, product and scrap mass and site-to-submeter energy. Explain every material or energy residual and every omitted direct emission relevant to permits or monitoring. | mass and energy balance; reconciliation report; permit inventory; omission register |
| `dq_representativeness` | published dataset | Report production-weighted alloy, form, temper, press class, heating route, geography, and technology coverage; do not claim broader representativeness than the collected sites and period. | production summary; site list; weighting file; representativeness statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference flow and dataset metadata | Fail validation when canonical PCR id, product form, alloy, temper, surface condition, production geography, reporting period, solid-volume method, alloy density, or mass equivalent is absent or inconsistent. | `unsd-cpc-3-0-structure-2025` |
| `validation_boundary` | process map and inventory | Fail validation when billet manufacture, packaging, coating, anodizing, downstream fabrication, transport, use, or end-of-life is aggregated into the foreground result without separate disaggregation. | `aluminum-association-extruded-aluminum-epd-2022` |
| `validation_mass_balance` | billet, product, scrap, and metal loss | Require a documented metal mass balance; flag unexplained imbalance and reject double counting of internal returns as both external input and recovered output. | `european-aluminium-environmental-profile-2018` |
| `validation_energy_and_emissions` | electricity, natural gas, fossil carbon dioxide, and nitrogen oxides | Require explicit applicability, measurement boundary, units, allocation, and direct-versus-upstream distinction. A not-applicable gas row requires evidence that no natural gas crosses the boundary. | `european-aluminium-environmental-profile-2018` |
| `validation_uuid_and_ranges` | UUID-empty rows and important-flow ranges | Treat the unresolved nitrogen-oxides UUID and the recorded independent-range evidence needs as review findings; never substitute a proxy UUID or an unsupported numerical range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset suitable for publication as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | gate-to-gate building block for product LCAs and lifecycle models of mill-finished aluminium bars, rods, and profiles |
| allowed_use | studies whose alloy, product form, temper, surface state, technology, geography, time period, billet supply, and allocation conventions are compatible or explicitly adjusted |
| excluded_use | unwrought aluminium, billet manufacture, rolled products, tubes and pipes, wire, coated or anodized product without added finishing processes, downstream fabrication, or cradle-to-gate claims lacking compatible upstream datasets |
| required_metadata | canonical PCR id; reference product and amount; alloy; form and dimensions; temper; surface condition; geography; technology and press class; reporting period; billet recycled-content basis; upstream dataset links; energy and water boundaries; scrap destination; allocation method; UUID resolution status |
| required_quality_disclosure | source coverage; measurement and calibration basis; temporal coverage; site weighting; mass and energy reconciliation; missing data; substitutions; direct-emission method; uncertainty; unresolved UUIDs and range-evidence needs |
| update_trigger | change in billet supply or recycled-content accounting, alloy/product mix, press or furnace technology, cooling route, temper mix, site coverage, energy supply, allocation method, direct-emission controls, reference-flow identity, or evidence that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official product-category identity for CPC 41532 |
| `european-aluminium-environmental-profile-2018` | dataset | European Aluminium, Environmental Profile Report for the European Aluminium Industry, 2018, https://european-aluminium.eu/wp-content/uploads/2022/10/environmental-profile-report-for-the-european-aluminium-industry.pdf (retrieved 2026-09-04) | Extrusion starting material and process sequence, relevant direct material and energy exchanges, process-scrap generation and recycling boundary, and European technology context |
| `aluminum-association-extruded-aluminum-epd-2022` | dataset | The Aluminum Association, Environmental Product Declaration: Extruded Aluminum, 2022, https://www.aluminum.org/sites/default/files/2022-10/104.1_EPD_AA_Extrusion.pdf (retrieved 2026-09-04) | Delivered product state, extrusion/cooling/stretching/cutting/aging sequence, distinction of coating and packaging operations, foreground boundary, and scrap handling |
