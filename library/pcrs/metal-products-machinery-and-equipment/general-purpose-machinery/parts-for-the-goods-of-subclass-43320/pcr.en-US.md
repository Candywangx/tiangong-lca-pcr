---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43320
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclass 43320

## 1. Scope and Applicability

This PCR applies to factory-gate production of separately supplied parts identifiable solely or principally as parts of the goods in CPC 43320: transmission shafts and cranks; bearing housings and plain shaft bearings; gears and gearing; ball or roller screws; gear boxes and other speed changers; flywheels and pulleys; clutches and shaft couplings; and articulated link chain. The rule covers machined parts made from purchased metal stock or preforms and includes heat treatment and aqueous cleaning when those operations occur within the reporting facility.

The PCR excludes complete CPC 43320 goods, parts of ball or roller bearings in CPC 43310, general-purpose fasteners not identifiable as parts of CPC 43320 goods, upstream production of purchased metal stock or preforms, removable sales packaging, outbound transport, installation, use, maintenance, and end-of-life. A data package for a non-representative material or manufacturing route shall retain this functional unit and add each route-specific exchange as a separate atomic inventory row.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43320 |
| classification_refs | CPC 3.0: 43332, exact |
| covered_products | Separately supplied parts identifiable solely or principally as parts of CPC 43320 transmission shafts and cranks, bearing housings and plain shaft bearings, gears and gearing, ball or roller screws, gear boxes and other speed changers, flywheels and pulleys, clutches and shaft couplings, or articulated link chain |
| excluded_products | Complete CPC 43320 goods; parts of CPC 43310 ball or roller bearings; general-purpose fasteners; non-articulated chain parts; packaged sets whose primary identity is a complete gearbox, clutch, coupling, pulley, or other assembled CPC 43320 good |
| representative_product | An inspection-released, separately supplied alloy-steel component machined for incorporation into a CPC 43320 transmission or driving-element good |
| production_route | Purchased alloy-steel bar or documented preform; machining and dimensional finishing; conditional heat treatment; conditional aqueous alkaline cleaning; final inspection and release |
| market_state | Finished, accepted, unpackaged part at the manufacturing-facility gate; material grade, geometry, heat-treatment state, surface condition, and tolerance class declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished and accepted separately supplied part for a CPC 43320 transmission or driving-element good |
| How much | 1 kg net mass of accepted finished part |
| How well | Conforms to the declared drawing or part number, material grade, heat-treatment specification, dimensional and tolerance requirements, surface condition, and acceptance criteria |
| How long or cycle | One factory-gate lot release; no service life or use cycle is included |
| reference_flow_link | One reference amount equals 1 kg of accepted net finished-part mass leaving final inspection |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts for the goods of subclass 43320 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part family and drawing or part number; intended CPC 43320 parent good; material and alloy grade; purchased stock or preform state; manufacturing route; heat-treatment route and state; surface-treatment route and condition; dimensional and tolerance class; accepted-lot status; net-mass basis; geography; technology; reporting period; factory-gate condition |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate the net mass of accepted finished parts after removal of chips, free liquid, temporary fixtures, and removable sales packaging; rejected parts are not reference product. |
| `material_and_waste_mass` | alloy-steel input, machining chips, waste metalworking fluid, sodium hydroxide, cleaning wastewater, and fossil carbon dioxide | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report mass at the point the exchange crosses its process boundary; document moisture, adhering-fluid, solution-concentration, and solids conventions where relevant. |
| `water_mass_conversion` | process-water inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | If a water meter reports volume, convert with the measured or documented density at the stated reference conditions and retain the meter total and conversion basis. |
| `electricity_energy_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve purchased electricity as delivered electrical energy; convert kWh to MJ using 1 kWh = 3.6 MJ and disclose grid, voltage, losses, and meter allocation. |
| `natural_gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gas volume at declared reference conditions; if an energy bill is the primary record, retain the supplier conversion factor and do not infer a generic volume. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal bar, rod, or documented near-net preform accepted at the reporting facility, with material grade, mass, supplier, geography, and delivery state recorded |
| starting_condition_role | Upstream material-production cut-in point for the foreground manufacturing data package |
| product_classification_scope | Separately supplied parts for CPC 43320 goods; the classification reference informs scope but does not replace part-family, material, and route qualifiers |
| recursive_input_rule | If a purchased input is itself a separately supplied part within this PCR category, record it once as an atomic product input with its own upstream dataset and do not recursively reconstruct that supplier's foreground operations |
| upstream_dataset_requirement | Use supplier-specific or otherwise representative upstream datasets for every purchased metal stock, preform, electricity supply, fuel, water, and chemical input; disclose geography, technology, and data age |
| disclosure | Declare which shaping occurred upstream, the received stock or preform state, included on-site processes, outsourced operations, heat and surface treatments, rejected-part treatment, waste destinations, metering allocations, and gate condition |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_to_gate` | foreground manufacturing boundary | Include machining and dimensional finishing, applicable heat treatment and aqueous cleaning, final inspection, on-site energy and water use, direct fossil carbon dioxide, and wastes generated before the accepted unpackaged part crosses the facility gate. | `nist-ir-7913-2013`; `ec-jrc-sf-bref-2024`; `ec-jrc-stm-bref-2006` |
| `sb_route_specific` | process applicability | Include a conditional process only when the foreground route performs it; identify every additional route-specific material, energy, waste, and elementary exchange as its own atomic row rather than substituting a combined utility, chemical, waste, or emission label. | `nist-ir-7913-2013`; `ec-jrc-fmp-bref-2022` |
| `sb_exclusions` | background and downstream stages | Exclude upstream production already represented by purchased-input datasets, capital equipment unless the study explicitly requires it, removable sales packaging, outbound transport, installation, use, maintenance, and end-of-life; disclose any study-specific expansion. |  |
| `sb_outsourced_operations` | outsourced shaping, heat treatment, or surface treatment | Record an outsourced operation as a purchased processing input or linked upstream process dataset with transported mass and route disclosed; do not claim it as zero burden. | `nist-ir-7913-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machining_and_dimensional_finishing` | Machining and dimensional finishing | required | Always required for the representative route; a demonstrably near-net part may report zero machining only with drawing and acceptance evidence | Foreground material removal and dimensional finishing | Mass of accepted finished part attributable to the reporting lot |
| `heat_treatment` | Heat treatment | conditional | Include when thermal treatment is performed on-site for the declared alloy and required mechanical properties | Foreground structure-change process | Mass of treated part entering the accepted lot |
| `aqueous_alkaline_cleaning` | Aqueous alkaline cleaning | conditional | Include when sodium-hydroxide-based aqueous cleaning or rinsing is performed on-site | Foreground surface preparation | Mass of cleaned part entering final inspection |
| `final_inspection_and_release` | Final inspection and release | required | Always required | Foreground acceptance and reference-product release | Net mass of accepted unpackaged part |

### Process: Machining and dimensional finishing (`machining_and_dimensional_finishing`)

#### Inputs

##### Product flows

###### Alloy-steel bar machining stock (`alloy_steel_bar_input`)

Purchased alloy-steel bar crosses the foreground boundary as the representative machining stock. Declare alloy grade, bar dimensions, supplier, geography, received mass, and whether any upstream forging or other shaping is embodied in the input.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: measured received mass charged to the reporting lot, adjusted for documented opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alloy_steel_bar_input`
- Sources:

###### Purchased electricity for machining (`machining_electricity`)

Purchased electricity powers machine tools, pumps, local extraction, and directly attributable machining auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or a documented allocation from a common meter using machine operating time and rated or measured load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_electricity`
- Sources: `nist-ir-7913-2013`

###### Process water for machining (`machining_process_water`)

Process water is recorded when it is supplied across the machining boundary for coolant make-up or part rinsing; closed-loop recirculation inside the process is not counted repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water charged to machining during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_process_water`
- Sources:

###### Water-miscible metalworking-fluid concentrate (`metalworking_fluid_concentrate`)

Record one commercially supplied water-miscible metalworking-fluid concentrate input. Product formulation, concentration, supplier, and inventory change remain mandatory foreground qualifiers; no exact public TianGong flow UUID is confirmed.

- Selected flow: Water-miscible metalworking-fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: purchased concentrate plus opening inventory minus closing inventory and documented transfers, allocated to the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metalworking_fluid_concentrate`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Low-alloy steel machining chips (`low_alloy_steel_machining_chips`)

Collect low-alloy steel chips separately at the machining process boundary. Declare adhering fluid, mixed-alloy contamination, weighing condition, and recovery destination.

- Selected flow: Steel scrap, low-alloyed (machining chips), at plant `826431d5-0492-4345-9051-8342d1f6c4d5`
- Flow property / unit: Mass / kg
- Amount rule: measured chip mass removed from the reporting lot, on the declared adhering-fluid basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_low_alloy_steel_machining_chips`
- Sources:

###### Waste metalworking fluid (`waste_metalworking_fluid`)

Spent metalworking fluid leaving the machining system for off-site recovery, treatment, or disposal is recorded once at transfer.

- Selected flow: Waste metalworking fluid `2468f4c0-46fa-4a8b-8075-686cf7391b00`
- Flow property / unit: Mass / kg
- Amount rule: measured waste-transfer mass allocated to the reporting lot using documented production or fluid-use records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_metalworking_fluid`
- Sources:

##### Elementary flows

### Process: Heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Gaseous natural gas for the heat-treatment furnace (`heat_treatment_natural_gas`)

Natural gas is included only when a gas-fired furnace serves the declared on-site heat-treatment route.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: calibrated meter or supplier-bill volume attributable to heat-treatment cycles for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_natural_gas`
- Sources: `ec-jrc-sf-bref-2024`

###### Purchased electricity for heat treatment (`heat_treatment_electricity`)

Electricity powers furnace controls, fans, pumps, material handling, and other directly attributable auxiliaries; electric furnace heating is included here when used.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered or documented allocated electricity for heat-treatment cycles serving the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_electricity`
- Sources: `ec-jrc-sf-bref-2024`; `ec-jrc-fmp-bref-2022`

###### Process water for quench-system make-up (`quench_process_water`)

Process water is included only for a water-based quench or quench-system make-up. Recirculated water is not counted repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water supplied to the heat-treatment quench system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quench_process_water`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from furnace combustion (`heat_treatment_fossil_co2`)

Report only direct fossil carbon dioxide from natural-gas combustion inside the foreground heat-treatment boundary. Upstream fuel and purchased-electricity emissions remain in their background datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from measured foreground natural-gas consumption using the documented site fuel-carbon and oxidation method, or use compliant direct stack measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_fossil_co2`
- Sources:

### Process: Aqueous alkaline cleaning (`aqueous_alkaline_cleaning`)

#### Inputs

##### Product flows

###### Sodium hydroxide for the cleaning bath (`cleaning_sodium_hydroxide`)

Sodium hydroxide is recorded when it is purchased for the declared aqueous alkaline cleaning route. Report active-product mass and solution concentration separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased sodium-hydroxide product plus opening inventory minus closing inventory and documented transfers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sodium_hydroxide`
- Sources: `ec-jrc-stm-bref-2006`

###### Process water for aqueous cleaning (`cleaning_process_water`)

Record make-up water crossing into cleaning and rinsing; internal recirculation is not counted repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water supplied to cleaning and rinse stages
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_process_water`
- Sources: `ec-jrc-stm-bref-2006`

###### Purchased electricity for aqueous cleaning (`cleaning_electricity`)

Electricity powers bath heating, pumps, extraction, and directly attributable material handling.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered or documented allocated electricity for cleaning the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_electricity`
- Sources: `ec-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater from aqueous cleaning (`cleaning_wastewater`)

Record cleaning wastewater when it leaves the cleaning system for on-site or off-site treatment. Declare pH, dissolved and suspended metal content, solids basis, collection point, and treatment destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass, or volume converted with documented density, leaving the cleaning system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-stm-bref-2006`

##### Elementary flows

### Process: Final inspection and release (`final_inspection_and_release`)

#### Inputs

##### Product flows

###### Purchased electricity for inspection (`inspection_electricity`)

Electricity powers dimensional metrology, non-destructive testing, cleaning retained within inspection, and directly attributable handling.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented equipment-runtime allocation for inspection and release of the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspection_electricity`
- Sources: `nist-ir-7913-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished reference product (`reference_product`)

The reference product is the net mass of accepted, unpackaged parts released from final inspection. No exact public TianGong product-flow UUID is confirmed for the separately supplied CPC 43332 part boundary.

- Selected flow: Parts for the goods of subclass 43320
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted finished parts released from the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `un-cpc-3-0-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | shared machines, meters, and treatment systems | Avoid allocation by subdividing processes, using dedicated meters, or assigning measured machine time and load to the reporting lot. Document the allocation key and unallocated remainder. |  |
| `alloc_rejects_and_rework` | rejected parts and rework | Assign all burdens incurred before rejection to the production lot; assign additional rework burdens to accepted product and report rejected mass separately as its actual waste or recovery flow. |  |
| `alloc_scrap_no_avoided_burden` | low-alloy steel machining chips | Record gross chip mass and its actual destination at the foreground boundary. Do not subtract an avoided primary-steel credit inside this foreground process; any recycling substitution belongs to the declared downstream modelling method. |  |
| `alloc_unavoidable_multioutput` | other saleable co-products | If subdivision cannot resolve a material co-product, apply a documented causal physical relation; use mass only when it represents causality, report the choice, and test sensitivity against an alternative defensible relation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_alloy_steel_bar_input` | `machining_and_dimensional_finishing` | alloy-steel bar input | receiving, issue, and inventory records | material grade; supplier; received and issued mass; opening and closing stock; lot link | reconciled weighbridge, scale, ERP, and stores records | kg | each receipt and issue | complete reporting period | all stock charged to included lots | receipts + opening stock - closing stock - documented transfers | scale calibration; supplier certificate; inventory reconciliation |
| `cp_machining_electricity` | `machining_and_dimensional_finishing` | electricity | meter and machine-runtime records | meter start/end; kWh; machine id; runtime; measured or rated load; lot link | dedicated submeter preferred; otherwise documented runtime-load allocation | kWh and MJ | each shift or batch | complete reporting period | all included machining equipment and auxiliaries | convert kWh to MJ and divide attributable total by accepted reference-product mass | meter calibration; allocation reconciliation; operating log |
| `cp_machining_process_water` | `machining_and_dimensional_finishing` | process-water make-up | water meter and tank records | meter start/end; tank additions; density basis; lot link | dedicated make-up meter or reconciled tank additions | kg or m3 | each batch or daily | complete reporting period | machining coolant and rinse systems | exclude recirculation; convert volume to mass where needed; normalize to accepted mass | meter calibration; tank log; leak and purge record |
| `cp_metalworking_fluid_concentrate` | `machining_and_dimensional_finishing` | concentrate input | purchase, issue, and inventory records | product name; formulation; concentration; mass; opening and closing inventory; transfers | reconciled purchase and stores records | kg | each issue | complete reporting period | all included machining fluid systems | purchases + opening inventory - closing inventory - transfers, allocated to included lots | supplier document; scale record; inventory reconciliation |
| `cp_low_alloy_steel_machining_chips` | `machining_and_dimensional_finishing` | machining-chip output | chip-container weighing and dispatch records | alloy family; gross and tare mass; adhering-fluid condition; contamination; destination; lot link | calibrated container scale and dispatch reconciliation | kg | each container | complete reporting period | chips generated by included machining | net container mass allocated to included lots; keep adhering-fluid basis consistent | scale calibration; photos or inspection; waste transfer note |
| `cp_waste_metalworking_fluid` | `machining_and_dimensional_finishing` | waste fluid | tank level, mass, and waste-transfer records | fluid identity; mass or volume; density; collection date; destination; lot allocation | calibrated tank or transfer weighing with inventory reconciliation | kg | each transfer | complete reporting period | spent fluid leaving included machining systems | opening waste stock + generation - closing stock - internal reuse, normalized to accepted mass | transfer manifest; density record; tank calibration |
| `cp_heat_treatment_natural_gas` | `heat_treatment` | furnace natural gas | gas meter, bill, and cycle records | meter start/end; reference conditions; cycle id; furnace id; loaded mass; lot link | dedicated calibrated meter preferred; otherwise documented cycle allocation | m3 | each cycle or daily | complete included heat-treatment period | included furnaces and directly linked burners | allocate measured volume by metered branch or documented cycle consumption; normalize to treated accepted mass | meter calibration; supplier bill reconciliation; cycle log |
| `cp_heat_treatment_electricity` | `heat_treatment` | electricity | submeter and cycle records | kWh; furnace id; auxiliary loads; cycle id; loaded mass; lot link | dedicated submeter or cycle-time/load allocation | kWh and MJ | each cycle | complete included heat-treatment period | included furnaces and auxiliaries | convert kWh to MJ and normalize attributable total to accepted mass | meter calibration; cycle log; allocation reconciliation |
| `cp_quench_process_water` | `heat_treatment` | quench make-up water | make-up meter and tank records | make-up amount; purge; leak; density basis; cycle and lot link | calibrated make-up meter or tank balance | kg or m3 | each cycle or daily | complete included quench period | included water-based quench system | count make-up only; convert volume to mass; normalize to accepted mass | meter calibration; tank balance; maintenance log |
| `cp_heat_treatment_fossil_co2` | `heat_treatment` | direct fossil carbon dioxide | fuel analysis, gas meter, and emission-calculation or stack records | natural-gas volume; reference conditions; carbon content or supplier factor; oxidation basis; measured CO2 where available; cycle link | documented fuel-carbon calculation or compliant direct measurement | kg | each cycle or reporting interval | complete included combustion period | on-site furnace combustion only | calculate and normalize direct fossil CO2; exclude upstream fuel and purchased-electricity emissions | meter calibration; factor provenance; calculation check or instrument QA |
| `cp_cleaning_sodium_hydroxide` | `aqueous_alkaline_cleaning` | sodium hydroxide | purchase, bath-make-up, and inventory records | product mass; concentration; opening/closing inventory; bath additions; transfers; lot link | reconciled purchase and bath records | kg | each addition | complete included cleaning period | included alkaline cleaning baths | product purchases + opening inventory - closing inventory - transfers; report product and active mass distinctly | supplier specification; scale calibration; bath analysis |
| `cp_cleaning_process_water` | `aqueous_alkaline_cleaning` | cleaning and rinse make-up water | make-up meter and bath records | meter start/end; bath additions; rinse make-up; reuse; density basis; lot link | calibrated make-up meter or bath balance | kg or m3 | each shift or daily | complete included cleaning period | included baths and rinses | count make-up crossing the process boundary once; convert volume to mass; normalize to accepted mass | meter calibration; bath log; reuse record |
| `cp_cleaning_electricity` | `aqueous_alkaline_cleaning` | electricity | submeter and operating records | kWh; bath heater; pump and extraction loads; operating time; lot link | dedicated submeter or documented runtime-load allocation | kWh and MJ | each shift | complete included cleaning period | included cleaning equipment and auxiliaries | convert kWh to MJ and normalize attributable total to accepted mass | meter calibration; operating log; allocation reconciliation |
| `cp_cleaning_wastewater` | `aqueous_alkaline_cleaning` | cleaning wastewater | discharge or transfer meter and analysis records | mass or volume; density; pH; dissolved and suspended metals; solids; destination; lot link | calibrated meter or tank transfer with representative sampling | kg or m3 | each discharge or transfer | complete included cleaning period | wastewater leaving included cleaning system | subtract documented internal reuse; convert volume to mass; normalize to accepted mass | meter calibration; sampling record; laboratory result; transfer note |
| `cp_inspection_electricity` | `final_inspection_and_release` | inspection electricity | submeter and equipment-runtime records | kWh; equipment id; runtime; load; lot link | dedicated submeter or documented runtime-load allocation | kWh and MJ | each lot or shift | complete reporting period | included metrology and test equipment | convert kWh to MJ and normalize attributable total to accepted mass | meter calibration; equipment log; allocation reconciliation |
| `cp_reference_product` | `final_inspection_and_release` | accepted finished part | accepted-lot and weighing records | part number; accepted count; individual or batch net mass; rejected count/mass; release status | calibrated scale linked to final acceptance record | kg | each lot | complete reporting period | all accepted unpackaged parts in the dataset | sum accepted net mass only; reconcile against input, chips, waste, rejects, and inventory change | scale calibration; signed release record; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = attributable exchange quantity / accepted net reference-product mass | collected exchange quantity; accepted reference-product mass | exchange per 1 kg accepted finished part |  |
| `calc_electricity_mj` | electricity rows | MJ = metered kWh × 3.6 | metered or allocated kWh | delivered electrical energy in MJ |  |
| `calc_water_mass` | water and wastewater rows measured by volume | mass = measured volume × documented density at stated conditions | volume; density; reference conditions | kg water or wastewater |  |
| `calc_fossil_co2` | `heat_treatment_fossil_co2` | apply the documented site fuel-carbon and oxidation method to measured natural-gas consumption; keep factor provenance and reference conditions, or use quality-assured direct measurement | foreground gas quantity; carbon or emission factor; oxidation basis, or measured stack result | kg direct fossil carbon dioxide |  |
| `calc_material_balance` | reporting lot | reconcile alloy-steel input with accepted product, machining chips, rejected parts, other declared wastes, and stock change; investigate and disclose the residual | input mass; output and waste mass; opening/closing work in progress | mass-balance residual and completeness finding |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Part family, intended CPC 43320 parent good, drawing or part number, material grade, heat-treatment state, surface condition, tolerance class, and accepted-lot status shall be unambiguous. | drawing; material certificate; route card; inspection release |
| `dq_measurement` | measured exchanges | Use calibrated instruments with units, reference conditions, calibration status, and data-gap treatment retained. | calibration certificates; meter logs; scale checks |
| `dq_temporal` | foreground data | Cover a representative continuous period or enough complete lots to capture normal operating, start-up, shutdown, purge, and waste-transfer events; report exclusions. | production calendar; lot register; operating logs |
| `dq_completeness` | inventory | Reconcile purchased inputs, meters, waste transfers, and accepted output; identify all additional route-specific atomic exchanges and explain material or energy gaps. | mass and energy reconciliations; invoices; transfer manifests |
| `dq_allocation` | shared utilities and processes | Retain the measured or calculated allocation key, denominator, unallocated remainder, and sensitivity where allocation is material. | submeter data; runtime records; allocation workbook |
| `dq_background_links` | purchased inputs and outsourced operations | Background datasets shall match declared material, geography, technology, product state, and time period as closely as available; disclose proxies. | supplier dataset; dataset metadata; proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | reference product | Fail if the output is a complete CPC 43320 good, a CPC 43310 bearing part, a general-purpose fastener, or another product not identifiable as a separately supplied part for a CPC 43320 good. | `un-cpc-3-0-2025` |
| `val_reference_amount` | reference flow | Fail if the declared reference amount is not 1 kg accepted net finished-part mass or if removable packaging, rejects, free liquid, or temporary fixtures are included. |  |
| `val_route_coverage` | process map | Fail if an on-site machining, heat-treatment, aqueous-cleaning, or inspection operation is performed but omitted, or if an outsourced operation is represented as zero burden. | `nist-ir-7913-2013`; `ec-jrc-sf-bref-2024`; `ec-jrc-stm-bref-2006` |
| `val_atomic_inventory` | inventory rows | Fail if one row combines multiple materials, energy carriers, chemicals, wastes, or elementary emissions, or instructs a future route choice instead of naming one exchange. |  |
| `val_uuid_and_localization` | flow identities | Fail if a UUID-bearing flow differs from its verified public identity, property, or unit group; flag unresolved reference-product and metalworking-fluid UUIDs for review; require the official TianGong Chinese baseName in the Chinese rendering for every adopted UUID. |  |
| `val_mass_balance` | material inventory | Fail if input, accepted product, machining chips, rejects, other wastes, and stock change are not reconciled or the unexplained residual lacks investigation and disclosure. |  |
| `val_range_evidence` | amount ranges | Fail any externally inferred range unless at least two independent original sources support compatible system boundary, functional unit, and product state; an absent range remains an explicit foreground evidence need and shall not be replaced by a single case value. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared separately supplied part of a CPC 43320 good |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product carbon-footprint, life-cycle assessment, supply-chain, and mechanical-equipment models whose part identity, material, route, geography, technology, and gate condition match the declared qualifiers |
| excluded_use | Complete gearboxes, shafts, clutches, couplings, pulleys, bearing assemblies, or articulated chains; bearing parts of CPC 43310; unidentified generic metal parts; use-phase performance; end-of-life without an explicit downstream model |
| required_metadata | PCR id and version; part family; intended parent good; drawing or part number; material and alloy grade; received stock or preform state; route; heat and surface treatment; accepted-lot status; geography; technology; reporting period; facility gate; allocation; background dataset links; unresolved UUID disclosures |
| required_quality_disclosure | Instrument coverage and calibration; temporal and production coverage; mass-balance residual; meter allocation; rejects and rework; fluid and wastewater basis; outsourced operations; background proxies; data gaps; uncertainty; absence of two-source empirical ranges |
| update_trigger | Change in part family, material grade, purchased stock or preform state, machining technology, heat-treatment route, cleaning route, facility, electricity or fuel supply, allocation, waste destination, reference-product identity, or any newly confirmed exact TianGong UUID or compatible two-source range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 structure and explanatory notes, updated 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43332 identity and its relationship to the goods of subclass 43320 |
| `un-cpc-1-1-zh-2004` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition. https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Established professional Chinese rendering of CPC 43332 |
| `nist-ir-7913-2013` | `literature` | National Institute of Standards and Technology, NISTIR 7913, Review on Sustainability Characterization for Manufacturing Processes, 2013. https://nvlpubs.nist.gov/nistpubs/ir/2013/NIST.IR.7913.pdf (retrieved 2026-09-05) | Unit-process decomposition, including machining, heat treatment, finishing, assembly, inspection, inputs, energy, and scrap |
| `ec-jrc-sf-bref-2024` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, 2024, DOI 10.2760/4805267. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry (retrieved 2026-09-05) | Machining, cooling and finishing, heat-treatment, forging, and foundry process context for metal parts |
| `ec-jrc-stm-bref-2006` | `official_guidance` | European Commission Joint Research Centre, Surface Treatment of Metals and Plastics BREF, adopted August 2006. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-05) | Water-based electrolytic and chemical surface-treatment boundary and aqueous-cleaning applicability |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, Ferrous Metals Processing Industry BREF, adopted December 2022. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry (retrieved 2026-09-05) | Heat treatment, cleaning, pickling, finishing, and route-conditioned ferrous-metal processing sequence |
