---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.base-metals-clad-with-silver-and-base-metals-silver-or-gold-clad-with-platinum-not-furt-2dfdd014
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Base metals clad with silver, and base metals, silver or gold clad with platinum, not further worked than semi-manufactured

## 1. Scope and Applicability

This PCR covers the gate-to-gate manufacture of semi-manufactured metal stock in which silver is metallurgically bonded to a base-metal substrate, or platinum is metallurgically bonded to a base-metal, silver, or gold substrate. Covered market states include declared strip, sheet, plate, bar, rod, wire, or profile forms whose processing has not advanced beyond semi-manufacture. The foreground package shall describe one concrete core metal, one concrete cladding metal, the layer arrangement, and one manufacturing route.

The representative route is silver-clad copper strip made by surface preparation, metallurgical bonding, rolling, annealing, finishing, inspection, and gate packing. The route is supported as representative process architecture, not as a quantitative benchmark. Platinum-clad variants and other base-metal cores may use this PCR only when their concrete material inputs, bonding technology, atmosphere, heat treatment, finishing operations, and direct releases are instantiated explicitly.

This PCR excludes electroplated articles where the coating is not a metallurgically clad layer; precious-metal alloys without a distinct clad construction; unwrought or powdered precious metals; finished components, jewellery, electrical contacts, coins, and other articles worked beyond semi-manufacture; and upstream mining, refining, and production of purchased metal stock. `un-cpc-3-0-2025` establishes the category boundary; `china-mof-research-goods-2026` verifies the professional Chinese terminology and the "not beyond semi-manufactured" extent.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.base-metals-clad-with-silver-and-base-metals-silver-or-gold-clad-with-platinum-not-furt-2dfdd014 |
| classification_refs | CPC 3.0: 41350 (exact classification context; mapping acceptance is maintained separately) |
| covered_products | Semi-manufactured base-metal stock clad with silver; semi-manufactured base-metal, silver, or gold stock clad with platinum; declared strip, sheet, plate, bar, rod, wire, or profile form |
| excluded_products | Electroplated rather than clad products; homogeneous precious-metal alloys; unwrought metal and powder; finished parts, jewellery, coins, contacts, and articles worked beyond semi-manufacture |
| representative_product | Silver-clad red-copper strip with a declared silver layer mass fraction and finished dimensions |
| production_route | Surface preparation, diffusion or roll bonding, hot or cold rolling, route-specific annealing, pickling or rinsing where used, slitting or cutting, inspection, and gate packing |
| market_state | Dry semi-manufactured clad-metal stock at the producing facility gate, with composition, layer construction, dimensions, surface state, and packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a declared semi-manufactured precious-metal-clad metal stock ready for downstream fabrication |
| How much | 1 kg net mass of conforming clad-metal product at the producing facility gate |
| How well | Conforms to the declared core and cladding metals, layer mass fractions, bond route, dimensions, temper, surface condition, and quality acceptance criteria |
| How long or cycle | One completed production lot; no service life is assigned to the semi-manufactured product |
| reference_flow_link | `final_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Silver-clad copper strip, semi-manufactured |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Core metal and grade; cladding metal and purity; layer sequence and number of clad faces; core and cladding mass fractions; product form and dimensions; bonding route; rolling schedule; annealing atmosphere and schedule; temper; surface finish; lot yield; recycled content by metal; packaging state; facility geography; production period |

When constructing a foreground data package, every `Required qualifiers` item shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A platinum-clad or non-copper-core instance shall replace the representative material identity with concrete atomic input rows and shall not retain the representative copper or silver row when that material is absent.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and all metal input/output rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg dry net conforming product. Exclude reusable pallet tare and separately measured removable packaging from product mass. |
| `layer_mass_accounting` | Core, cladding, product, and composite offcuts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record core and cladding masses separately. Reconcile precious-metal input with precious metal in product, composite offcuts, recovered residues, and measured losses for the same lot. |
| `electricity_conversion` | Alternating-current input | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter reading and voltage qualifier. When converting from kWh, use 1 kWh = 3.6 MJ and disclose whether transformer or distribution losses are inside the meter boundary. |
| `gas_reference_conditions` | Natural gas, nitrogen, and hydrogen inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume and the temperature, pressure, dry/wet basis, composition or purity, and standard-volume conversion used. |
| `wastewater_mass_conversion` | Cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement. If wastewater is metered by volume, convert using measured or documented density for the sampled stream and retain the original volume record. |
| `reusable_pallet_accounting` | Wooden pallet input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record pallet mass, ownership, expected or observed trips, losses, and return status; allocate only the attributable first-use or reuse share to the reference product. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_system_boundary | Include receipt and preparation of purchased metal stock; surface cleaning; bonding; hot and cold rolling where used; annealing; pickling, rinsing, and drying where used; slitting or cutting; inspection; on-site waste handling; and gate packing. Treat upstream production of purchased metals, electricity, fuels, gases, chemicals, lubricants, water, and packaging as linked upstream datasets. | `ding-et-al-ag-cu-2025`; `eu-jrc-nfm-bref-2017` |
| `boundary_variant_instantiation` | product_variant_scope | Model one declared core/cladding construction and one route. A different base-metal core or platinum-clad construction requires concrete atomic material rows and route-specific operations; do not aggregate alternative metals or technologies into one exchange. | `un-cpc-3-0-2025`; `ding-et-al-ag-cu-2025` |
| `boundary_wastes_and_emissions` | foreground_outputs | Include composite offcuts leaving the line, spent pickling acid, cleaning wastewater, direct fossil carbon dioxide from on-site natural-gas combustion, and any additional measured route-specific waste or elementary emission in the completed foreground package. | `eu-jrc-nfm-bref-2017` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased, dimensioned core and cladding metal stock with documented composition, surface state, recycled content, and supplier gate entering the integrated cladding line |
| starting_condition_role | foreground_boundary_input |
| product_classification_scope | The declared product must be a semi-manufactured silver-clad base-metal or platinum-clad base-metal, silver, or gold construction; CPC 3.0:41350 is classification context, not canonical identity ownership |
| recursive_input_rule | If an input is itself a product covered by this PCR, record it once as a purchased supplier product with an upstream dataset and declared clad composition; do not recursively reproduce its manufacturing inventory inside the current foreground line |
| upstream_dataset_requirement | Use supplier-specific datasets where available for core metal, cladding metal, electricity, natural gas, industrial gases, sulfuric acid, rolling oil, process water, plastic film, and wooden pallets; otherwise disclose representative technology, geography, recycled content, and substitution |
| disclosure | Declare the core/cladding pair, precious-metal mass fraction, layer arrangement, bonding route, rolling and annealing schedule, furnace energy, protective atmosphere, wet-cleaning route, offcut recovery destination, wastewater and spent-acid treatment, packaging, facility geography, data period, and all deviations from the representative Ag/Cu route |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_ag_cu_clad_strip_line` | Integrated Ag/Cu surface preparation, bonding, rolling, annealing, finishing, and gate packing | required | Representative route; another covered construction shall instantiate the same boundary with concrete route-specific atomic exchanges | foreground production | 1 kg net conforming silver-clad copper strip at facility gate |

### Process: Integrated Ag/Cu surface preparation, bonding, rolling, annealing, finishing, and gate packing (`integrated_ag_cu_clad_strip_line`)

#### Inputs

##### Product flows

###### Copper core stock (`copper_strip_input`)

Red-copper strip or sheet enters as the representative structural core. Record the accepted dry mass crossing the line boundary.

- Selected flow: Red Copper Strip and Sheet `7da5ca56-6c6e-41e4-b35b-f274a9a7577c`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted copper strip or sheet mass charged to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming clad strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_inputs`
- Sources: `ding-et-al-ag-cu-2025`; `eu-jrc-nfm-bref-2017`

###### Silver cladding stock (`silver_strip_input`)

Semi-manufactured silver strip enters as the representative cladding layer. The Tiangong UUID remains unresolved because the only name-matching public candidate has a conflicting building-stone classification.

- Selected flow: Silver strip, semi-manufactured
- Flow property / unit: Mass / kg
- Amount rule: measured accepted silver strip mass charged to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming clad strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_inputs`
- Sources: `ding-et-al-ag-cu-2025`

###### Alternating-current electricity (`alternating_current_input`)

Purchased alternating current supplies rolling, drives, ventilation, pumps, inspection, and electrically heated equipment inside the line meter boundary.

- Selected flow: alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered line electricity allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming clad strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Natural gas for on-site thermal equipment (`natural_gas_input`)

Gaseous natural gas is recorded when the bonding, annealing, drying, or protective-gas generation route uses on-site gas-fired equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gaseous natural gas consumed within the foreground line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming clad strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Gaseous nitrogen for protective atmosphere (`gaseous_nitrogen_input`)

Purchased gaseous nitrogen is recorded only when it crosses the site boundary for the declared annealing or bonding atmosphere. Liquid nitrogen is not substituted for this unresolved gaseous flow.

- Selected flow: Gaseous nitrogen
- Flow property / unit: Volume / m3
- Amount rule: metered purchased gaseous nitrogen consumed by the declared protective-atmosphere route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming clad strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Gaseous hydrogen for reducing atmosphere (`gaseous_hydrogen_input`)

Purchased gaseous hydrogen is recorded only when it crosses the site boundary as a component of the declared reducing atmosphere.

- Selected flow: Gaseous hydrogen
- Flow property / unit: Volume / m3
- Amount rule: metered purchased gaseous hydrogen consumed by the declared reducing-atmosphere route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming clad strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Cold-rolling oil make-up (`cold_rolling_oil_input`)

Cold-rolling oil entering the line is recorded as purchased make-up, net of internally recirculated oil that does not cross the foreground boundary.

- Selected flow: cold rolling oil `a9417245-6f45-4df3-8f04-227ed8a1be58`
- Flow property / unit: Mass / kg
- Amount rule: purchased cold-rolling oil make-up issued to the lot or allocated from line inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming clad strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Sulfuric acid for pickling (`sulfuric_acid_input`)

Sulfuric acid is recorded when acid pickling is used for copper or clad-strip surface preparation. Concentration and make-up basis shall be declared.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh sulfuric-acid mass added to the line during the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming clad strip output when acid pickling applies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water for wet cleaning and rinsing (`process_water_input`)

Process water is recorded when wet cleaning, pickling, rinsing, or line cooling water crosses the site or foreground boundary. Closed-loop recirculation is not counted repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered net process-water withdrawal attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming clad strip output when wet operations apply
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Plastic film for gate wrapping (`plastic_film_input`)

Plastic film is recorded when finished coils, sheets, or other semi-manufactured stock are wrapped at the producing facility gate. Polymer and recycled content remain required foreground qualifiers.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass / kg
- Amount rule: measured film mass consumed for the dispatched lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming clad strip output when film wrapping applies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Wooden pallet for gate packing (`wooden_pallet_input`)

Wooden pallets are recorded when they accompany the product across the facility gate. Attribute only the recorded first-use or reuse share.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: pallet mass multiplied by the attributable use share for the dispatched lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming clad strip output when palletized
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_and_packaging_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

No waste enters the representative integrated line. If recovered internal clad scrap is purchased from another operator, it shall be recorded as a separate concrete waste input and its composition and recovery boundary shall be disclosed.

##### Elementary flows

No elementary input is prescribed. Water and industrial gases crossing the technosphere boundary are represented above as product inputs.

#### Outputs

##### Product flows

###### Conforming silver-clad copper strip at facility gate (`final_product_output`)

This is the reference product output after finishing, inspection, and any declared gate packing. No exact public Tiangong product-flow UUID was confirmed.

- Selected flow: Silver-clad copper strip, semi-manufactured
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output equal to measured dry net conforming product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming silver-clad copper strip at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_waste_and_water_outputs`
- Sources: `un-cpc-3-0-2025`; `ding-et-al-ag-cu-2025`

##### Waste flows

###### Silver-copper composite line offcuts (`composite_offcuts_output`)

Bonded composite edge trim, end cuts, and rejected clad strip leaving the foreground line for metal recovery are recorded without reclassifying them as copper-only scrap.

- Selected flow: Silver-copper composite offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of bonded Ag/Cu offcuts transferred out of the line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming clad strip output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_waste_and_water_outputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Spent sulfuric-acid pickling bath (`spent_pickling_acid_output`)

Spent acid leaving the foreground line for recovery or treatment is recorded when acid pickling applies. The stream remains distinct from rinse wastewater.

- Selected flow: Spent sulfuric-acid pickling bath
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from the pickling circuit and transferred to recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming clad strip output when acid pickling applies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_waste_and_water_outputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Cleaning wastewater sent to treatment (`cleaning_wastewater_output`)

Wastewater from wet cleaning, pickling rinses, or line washing is recorded at transfer to on-site or off-site treatment. Dissolved copper, silver, acidity, and treatment destination shall be characterized.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving the production line before treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming clad strip output when wet cleaning applies
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_waste_and_water_outputs`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`fossil_co2_output`)

Fossil carbon dioxide from natural-gas combustion inside the foreground boundary is reported directly; upstream electricity emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack total or calculated fossil CO2 from metered natural gas and documented fuel carbon content
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming clad strip output when on-site natural gas is combusted
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_direct_emissions`
- Sources: `eu-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_lot` | core_cladding_and_product | Avoid allocation by maintaining one lot-level bill of materials for one declared core/cladding construction and by separately metering or calculating its product, offcuts, utilities, and emissions. |  |
| `allocation_shared_line` | shared_line_inputs | Where a meter serves several products, allocate electricity, gases, water, and line auxiliaries using measured run time and equipment load; use mass throughput only when it represents the physical driver and disclose the sensitivity. | `eu-jrc-nfm-bref-2017` |
| `allocation_scrap_recovery` | composite_offcuts | Report composite offcuts as a waste output with measured Ag/Cu composition and destination. Do not credit avoided primary metal inside the foreground inventory; any recycling credit or burden shall be applied consistently in the downstream model and disclosed. | `eu-jrc-nfm-bref-2017` |
| `allocation_reusable_packaging` | wooden_pallets | Allocate reusable pallet production by documented expected or observed trips, include losses and non-returns, and report the use-share calculation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging_inputs` | `integrated_ag_cu_clad_strip_line` | Metal stock, rolling oil, acid, water, film, and pallet inputs | Weigh tickets, purchase issues, tank or water meters, packaging issue records, and pallet-reuse log | lot_id; flow identity; supplier; metal grade or chemical concentration; gross and tare mass; meter opening and closing; recycled content; pallet trips; timestamp | Reconcile accepted receipts and inventory changes to the declared lot; exclude internal recirculation that does not cross the boundary | kg | Each lot, with monthly inventory reconciliation | Complete production campaign and any start-up or changeover assigned to it | All equipment and storage supplying the foreground line | Sum net boundary-crossing quantity by atomic flow and normalize by conforming product output | Calibrated scale or meter record, purchase issue, signed material reconciliation, and exception log |
| `cp_energy_and_gas_inputs` | `integrated_ag_cu_clad_strip_line` | Electricity, natural gas, nitrogen, and hydrogen | Utility meters, submeter historian, fuel invoice, and gas flowmeter | lot_id; meter_id; opening and closing reading; unit; voltage; temperature; pressure; dry or wet basis; gas composition or purity; allocation driver; timestamp | Use line submeter totals; where shared, apply the declared physical allocation driver and retain both total and allocated values | MJ or m3 | Continuous or per batch, reconciled monthly | Complete production campaign including heating, holding, rolling, ventilation, and shutdown energy assigned to the lot | Foreground line and directly serving utilities | Subtract verified non-production use, allocate shared meters, then normalize by conforming product output | Meter calibration, historian extract, invoice reconciliation, reference-condition calculation, and allocation worksheet |
| `cp_product_waste_and_water_outputs` | `integrated_ag_cu_clad_strip_line` | Product, composite offcuts, spent acid, and cleaning wastewater | Product scale, scrap scale, acid tank transfer, wastewater meter, laboratory analysis, and transfer manifest | lot_id; stream identity; gross and tare mass or volume; density; Cu and Ag content; pH; acid concentration; destination; timestamp | Measure each output at the line boundary and retain separate records for product, composite offcuts, spent acid, and wastewater | kg | Each lot or each transfer, reconciled monthly | Complete production campaign and all waste transfers attributable to it | Foreground production line before downstream treatment or recovery | Sum each atomic output; convert measured volume using documented density; normalize by net conforming product | Calibrated records, mass-balance reconciliation, laboratory report, and waste or recovery manifest |
| `cp_fuel_and_direct_emissions` | `integrated_ag_cu_clad_strip_line` | Direct fossil carbon dioxide | Stack measurement or fuel meter plus supplier carbon-content record | lot_id; natural_gas_volume; reference_conditions; fuel_composition; carbon_content; oxidation_basis; measured_stack_co2; timestamp | Prefer compliant direct measurement; otherwise calculate fossil CO2 from collected fuel quantity and documented carbon content without including upstream emissions | kg CO2 | Each lot or reporting period aligned to fuel use | Complete campaign including start-up and shutdown combustion allocated to the lot | On-site combustion units inside the foreground boundary | Calculate or aggregate direct fossil CO2, reconcile to fuel records, and normalize by product output | Meter calibration, fuel certificate, calculation worksheet, and stack-monitor QA record where available |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_inventory` | all_inventory_rows | Normalized amount = lot boundary-crossing amount / lot net conforming product mass | Atomic lot input or output; `final_product_output` mass | Amount per 1 kg reference product |  |
| `calc_layer_mass_balance` | core_cladding_product_offcuts | For each metal, input mass = metal in conforming product + metal in composite offcuts + metal in recovered residues + documented measured loss; report the unreconciled difference | Copper and silver input masses; product layer analysis; offcut mass and composition; recovered residue; measured loss | Metal-specific balance and reconciliation percentage |  |
| `calc_electricity_mj` | alternating_current_input | Electricity MJ = metered kWh × 3.6; retain original kWh and voltage level | Metered electricity in kWh | Electricity in MJ |  |
| `calc_wastewater_mass` | cleaning_wastewater_output | Wastewater mass = measured wastewater volume × documented stream density when direct mass is unavailable | Wastewater volume; density; sampling period | Wastewater mass in kg |  |
| `calc_pallet_use_share` | wooden_pallet_input | Attributable pallet mass = pallet mass / documented expected or observed trips, adjusted for recorded loss and non-return | Pallet mass; trips; loss and return records | Attributable pallet input mass |  |
| `calc_fossil_co2` | fossil_co2_output | Use measured fossil CO2 where available; otherwise convert collected natural-gas quantity and documented fossil carbon content to fully oxidized CO2 and disclose composition and oxidation assumptions | Natural-gas quantity; reference conditions; carbon content or composition; measured stack CO2 if available | Direct fossil CO2 in kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and metal inputs | Retain specification, composition or assay, dimensions, cladding arrangement, bond route, heat treatment, temper, surface finish, and lot acceptance evidence. | Certificate of analysis, product drawing, route sheet, inspection report, and lot release |
| `dq_temporal_coverage` | All foreground records | Cover a representative production period including normal start-up, shutdown, changeover, and reject handling; disclose excluded abnormal events. | Time-stamped meter extracts, production calendar, and exception log |
| `dq_mass_balance` | Copper, silver, product, offcuts, and metal-bearing liquid outputs | Reconcile metal inputs and outputs for the same lot and investigate any material unexplained difference before release. | Signed metal reconciliation and laboratory composition records |
| `dq_metering` | Electricity, gases, water, product, and wastes | Use calibrated meters or scales; retain raw readings, unit conversions, reference conditions, allocation drivers, and calibration status. | Calibration certificates, raw meter export, and calculation workbook |
| `dq_waste_destination` | Composite offcuts, spent acid, and wastewater | Record physical state, composition, hazardous status where applicable, transfer quantity, recipient, treatment or recovery route, and whether any downstream credit is applied. | Transfer manifest, analysis, recipient record, and downstream-model disclosure |
| `dq_uuid_and_localization` | Every inventory row | Use a directly verified state-100 Tiangong UUID only when identity, flow type, classification, property, unit group, and product state match; otherwise retain the concrete bilingual name and unresolved status. | UUID receipt audit or unresolved inventory review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_and_identity` | reference_flow | Confirm that the 1 kg reference output, core/cladding identities, layer mass fractions, product form, bond route, and market state describe one covered semi-manufactured clad-metal product. | `un-cpc-3-0-2025`; `china-mof-research-goods-2026` |
| `validate_atomic_inventory` | process_inventory | Confirm that every exchange is one atomic product, waste, or elementary flow; every conditional input is either supported by the declared route or marked not applicable; and every UUID-empty row remains registered unresolved. |  |
| `validate_metal_balance` | metal_mass_balance | Confirm separate copper and silver input records and reconcile product, composite offcuts, recovered residues, and measured losses for the same lot. |  |
| `validate_units_and_reference_conditions` | measurement_records | Confirm mass normalization, kWh-to-MJ conversion, gas reference conditions, wastewater density conversion, and pallet reuse calculation from retained raw records. |  |
| `validate_boundary_and_destinations` | system_boundary | Confirm that upstream supply burdens are linked rather than duplicated; direct on-site combustion is included; and offcuts, spent acid, and wastewater have declared treatment or recovery destinations. | `eu-jrc-nfm-bref-2017` |
| `validate_source_and_period` | data_quality | Confirm that source ids resolve, foreground records cover the declared production period, and any deviation from the representative Ag/Cu route is disclosed. | `ding-et-al-ag-cu-2025`; `eu-jrc-nfm-bref-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared semi-manufactured silver-clad or platinum-clad metal construction |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product carbon footprint, LCA, eco-design, procurement, and downstream fabrication studies when product identity, route, geography, time, and allocation are compatible |
| excluded_use | Electroplated coatings, finished articles, homogeneous precious-metal alloys, another undeclared core/cladding pair, or a platinum route represented by unmodified Ag/Cu inventory |
| required_metadata | Core and cladding identity and grade; layer fractions; dimensions; product form; bond and rolling route; annealing atmosphere and schedule; recycled content; facility geography; data period; product yield; utility mix; cleaning route; waste destinations; allocation; packaging and pallet reuse |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; metal mass-balance reconciliation; allocation shares; supplier dataset substitutions; unresolved UUIDs; unresolved range evidence; excluded abnormal operations; uncertainty and data gaps |
| update_trigger | Change in core or cladding metal, layer fraction, bond technology, rolling or annealing route, furnace fuel, protective atmosphere, surface treatment, packaging, scrap recovery, wastewater treatment, supplier mix, facility, or production period that materially affects the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Structure*, 30 June 2025, official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04; cached content SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official category identity and covered precious-metal-clad, semi-manufactured product boundary |
| `china-mof-research-goods-2026` | official_guidance | Ministry of Finance of the People's Republic of China, *免税科研货物清单* [List of duty-free goods for scientific research], 2026, pp. 15–16: https://m.mof.gov.cn/zcfb/202601/P020260114634207037460.pdf (retrieved 2026-09-04) | Professional Chinese terms for base-metal-backed silver-clad material and base-metal/silver/gold-backed platinum-clad material, including the extent not beyond semi-manufacture |
| `ding-et-al-ag-cu-2025` | literature | Ding, Z.-Y. et al., “Microstructural evolution and bonding characteristics of Ag/Cu interface in Ag/Cu bimetallic strips fabricated via diffusion welding,” *Journal of Iron and Steel Research International* 32 (2025) 1468–1476. https://doi.org/10.1007/s42243-024-01383-3 | Representative Ag/Cu strip identity and route decomposition through diffusion welding, rolling, and annealing; no quantitative PCR range is inferred |
| `eu-jrc-nfm-bref-2017` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries*, 2017, JRC107041: https://publications.jrc.ec.europa.eu/repository/handle/JRC107041 (retrieved 2026-09-04) | Semi-finished sheet and strip process steps; rolling energy and oil; annealing atmospheres; pickling, rinsing, wastewater, spent acid, scrap recovery, and gate-packing flow coverage; no quantitative PCR range is inferred |
