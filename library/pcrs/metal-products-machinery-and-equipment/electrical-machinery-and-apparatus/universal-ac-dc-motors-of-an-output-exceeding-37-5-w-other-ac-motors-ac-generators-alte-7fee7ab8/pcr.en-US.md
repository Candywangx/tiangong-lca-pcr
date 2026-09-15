---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.universal-ac-dc-motors-of-an-output-exceeding-37-5-w-other-ac-motors-ac-generators-alte-7fee7ab8
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Universal AC/DC motors of an output exceeding 37.5 W; other AC motors; AC generators (alternators) other than photovoltaic generators

## 1. Scope and Applicability

This PCR governs factory-gate foreground data packages for complete rotating electrical machines within CPC 3.0 class 46112: universal AC/DC motors with rated output above 37.5 W, other AC motors, and AC generators (alternators) other than photovoltaic generators. Each data package shall represent one actual product configuration and production route; it shall not average motor and generator functions or multiply technology variants by packaging choices.

The record excludes motors of 37.5 W or less, other DC motors and DC generators, photovoltaic generators, generating sets, rotary converters, parts sold separately, installation, use, maintenance, outbound distribution, and end-of-life. Traction-motor and permanent-magnet literature supports process inclusion qualitatively; it does not define a category-wide composition or quantity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.universal-ac-dc-motors-of-an-output-exceeding-37-5-w-other-ac-motors-ac-generators-alte-7fee7ab8` |
| classification_refs | CPC 3.0 `46112` |
| covered_products | Complete universal AC/DC motors above 37.5 W; other complete AC motors; complete non-photovoltaic AC generators/alternators |
| excluded_products | Small motors at or below 37.5 W; other DC motors and DC generators; photovoltaic generators; generating sets; rotary converters; separately sold parts |
| representative_product | One declared finished rotating electrical machine configuration belonging to CPC 46112 |
| production_route | Purchased-material/component receipt through component manufacture, assembly, final test, and packaging |
| market_state | Finished, tested, saleable machine packaged at the manufacturing-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished rotating electrical machine in one declared CPC 46112 configuration |
| How much | 1 kg net finished product |
| How well | Meets the manufacturer's declared rating and applicable final-test acceptance criteria |
| How long or cycle | Production of the reported manufacturing batch or representative reporting period |
| reference_flow_link | `finished_rotating_electrical_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished rotating electrical machine |
| Reference flow property | Mass; `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass; `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Function; topology; rated output, voltage, frequency, phase count, pole count or speed, duty, cooling, protection, efficiency, test standard; net product mass; manufacturing geography and period; permanent-magnet and mechanical-commutation presence; packaging state |

The required qualifiers shall appear in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. The 1 kg reference supports mass-normalized inventory publication; it does not make products with different function, rating, efficiency, duty, or service life functionally equivalent.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_mass_inputs_outputs` | Solid/liquid materials, products, packaging, wastes, and mass emissions | Mass | kg | Record calibrated net mass crossing the boundary; exclude tare and reusable internal work-in-process. |
| `mu_electricity` | `manufacturing_electricity`, `testing_electricity` | Net calorific value | MJ | Convert metered kWh using 3.6 MJ/kWh; do not add upstream grid emissions to foreground elementary flows. |
| `mu_gases` | `natural_gas`, `industrial_oxygen` | Volume | m3 | Disclose reference temperature, pressure, and conversion; do not mix standard and operating volumes. |
| `mu_reference_product` | `finished_rotating_electrical_machine` | Mass | kg | Use net mass of accepted finished machines before external transport; report packaging separately. |
| `mu_normalization` | Every row | Row property | Row unit per kg product | Aggregate within one period and boundary, then divide by accepted reference-product mass from the same period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components as received at the manufacturing site |
| starting_condition_role | Foreground gate; upstream production is represented by linked background datasets |
| product_classification_scope | One actual complete machine within CPC 3.0 `46112` |
| recursive_input_rule | Record a purchased complete CPC 46112 machine incorporated without transformation as a product input; do not unfold it inside this foreground boundary |
| upstream_dataset_requirement | Link each purchased input and delivered energy carrier to representative supply data; disclose unresolved proxies |
| disclosure | Declare processes, outsourcing, sites, period, allocation, cut-offs, configuration, test regime, packaging state, and deviations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_include_factory` | Both foreground processes | Include receipt, component manufacture, applicable winding/impregnation, assembly, final testing, and packaging to the site gate. | `fleischer-et-al-2025-electric-mobility-production`; `iec-60034-1-2026`; `mahmouditabar-et-al-2025-ipm-lca` |
| `sb_background_inputs` | Purchased inputs | Keep upstream extraction and manufacture outside foreground but require linked background datasets. | `iso-14044-2006` |
| `sb_exclude_downstream` | Dataset | Exclude installation, use, maintenance, outbound distribution, and end-of-life. | `iso-14044-2006` |
| `sb_outsourcing` | Outsourced in-scope operations | Include through a supplier process dataset or documented service input; do not omit because it occurs off site. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture_and_assembly` | Component manufacture and machine assembly | required | Always; record only operations and conditional exchanges used by the declared route | Transforms purchased inputs into an assembled machine | Accepted assembled-machine mass transferred to final test |
| `final_test_and_packaging` | Final testing and packaging | required | Always; packaging rows apply only to materials in the declared gate state | Tests and prepares the accepted reference product | 1 kg accepted finished rotating electrical machine |

### Process: Component manufacture and machine assembly (`component_manufacture_and_assembly`)

#### Inputs

##### Product flows

###### Non-oriented electrical steel sheet (`electrical_steel_sheet`)

Record purchased electrical steel entering lamination or core manufacture.

- Selected flow: Non-oriented electrical steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Net measured receipt allocated to accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `fleischer-et-al-2025-electric-mobility-production`; `mahmouditabar-et-al-2025-ipm-lca`

###### Winding conductor (`magnet_wire`)

Record insulated conductor consumed in stator or rotor winding.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass less documented reusable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `fleischer-et-al-2025-electric-mobility-production`; `mahmouditabar-et-al-2025-ipm-lca`

###### Aluminium casting-alloy ingot for housing or rotor (`aluminium_ingot`)

Record the specified casting-alloy ingot only when the route casts aluminium parts on site.

- Selected flow: Aluminium casting-alloy ingot
- Flow property / unit: Mass / kg
- Amount rule: Measured furnace charge allocated to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `fleischer-et-al-2025-electric-mobility-production`; `mahmouditabar-et-al-2025-ipm-lca`

###### Shaft steel (`carbon_steel_bar`)

Record carbon-steel bar consumed in on-site shaft manufacture.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass less documented reusable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `mahmouditabar-et-al-2025-ipm-lca`

###### Rolling bearings (`rolling_bearing`)

Record purchased rolling bearings installed in accepted machines.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Installed mass plus attributable rejected-bearing mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `mahmouditabar-et-al-2025-ipm-lca`

###### Electrical insulation paper (`electrical_insulation_paper`)

Record electrical-grade paper or pressboard installed in slots or windings.

- Selected flow: Electrical insulation paper
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass less clean reusable offcut return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `fleischer-et-al-2025-electric-mobility-production`

###### Impregnation resin (`epoxy_resin`)

Record epoxy only when used for impregnation, potting, bonding, or coating.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Amount rule: Mixed resin charged less documented recoverable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resin_batch_records`
- Sources: `fleischer-et-al-2025-electric-mobility-production`; `mahmouditabar-et-al-2025-ipm-lca`

###### Permanent magnet (`ndfeb_magnet`)

Record installed NdFeB magnets only for a declared permanent-magnet topology.

- Selected flow: NdFeB magnet `a598b760-108c-4d70-93f9-59098959141e`
- Flow property / unit: Mass / kg
- Amount rule: Installed mass plus attributable rejected-magnet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `mahmouditabar-et-al-2025-ipm-lca`

###### Carbon brush (`carbon_brush`)

Record installed carbon brushes only for a machine with mechanical commutation.

- Selected flow: Carbon brush
- Flow property / unit: Mass / kg
- Amount rule: Installed mass plus attributable rejected-brush mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources:

###### Manufacturing electricity (`manufacturing_electricity`)

Record delivered electricity used by included operations and supporting equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered consumption allocated to included operations and converted using 3.6 MJ/kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

###### Natural gas for on-site thermal operations (`natural_gas`)

Record gaseous natural gas only when directly consumed by included furnaces, ovens, or heating.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered volume allocated to included operations at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_meters`
- Sources:

###### Oxygen for oxy-fuel operation (`industrial_oxygen`)

Record oxygen only when an included cutting, welding, or thermal operation consumes it.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory consumption at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_meters`
- Sources:

###### Process water for cleaning (`process_water`)

Record water only when aqueous cleaning or another included wet operation is used.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered use with disclosed volume-to-mass conversion; exclude recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_cleaning_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide only when the route uses an alkaline cleaning bath.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active NaOH mass from solution mass and verified concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_cleaning_records`
- Sources:

##### Waste flows

No waste input crosses this process boundary.

##### Elementary flows

No elementary input is prescribed; site-specific resource withdrawals, if any, shall be separate audited atomic exchanges.

#### Outputs

##### Product flows

The assembled machine is an internal transfer to final testing, not a factory-gate product exchange.

##### Waste flows

###### Steel scrap (`steel_scrap`)

Record segregated steel scrap leaving included cutting, stamping, and machining.

- Selected flow: Steel scrap `db39c2c0-61a0-4dde-8d68-db5777fe25a8`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound mass net of returned reusable stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

###### Copper scrap (`copper_scrap`)

Record segregated conductor scrap leaving winding or connection operations.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound mass allocated to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

###### Aluminium scrap (`aluminium_scrap`)

Record segregated aluminium scrap only when included casting or machining generates it.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound mass allocated to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater sent to treatment only when included aqueous cleaning generates it.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-balanced discharge excluding recirculated bath volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_cleaning_records`
- Sources:

###### Uncured epoxy waste (`uncured_epoxy_waste`)

Record discarded uncured mixed epoxy only when an applicable resin operation generates it.

- Selected flow: Uncured epoxy resin waste
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded mixed resin allocated to the declared product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_co2`)

Record only direct on-site fossil CO2 from combustion; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or documented fuel-carbon balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Non-methane volatile organic compounds (`nmvoc_to_air`)

Record direct NMVOC only when solvent-bearing resin, coating, or cleaning occurs inside the boundary.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack/fugitive measurement or solvent balance net of captured transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Final testing and packaging (`final_test_and_packaging`)

#### Inputs

##### Product flows

###### Electricity for final testing (`testing_electricity`)

Record delivered electricity consumed by final routine or acceptance testing and auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered test-cell electricity, converted using 3.6 MJ/kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_test`
- Sources: `iec-60034-1-2026`

###### Corrugated board box (`corrugated_board_boxes`)

Record corrugated boxes used in the declared gate packaging state.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Issued mass less documented reusable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_issues`
- Sources:

###### Wooden pallet (`wooden_pallet`)

Record pallets supplied with the product; exclude returnable pallets that do not leave as packaging.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Net issued non-returnable pallet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_issues`
- Sources:

###### Low-density polyethylene film (`pe_ld_film`)

Record PE-LD film used to wrap or protect accepted product only when present.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Net issued film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished rotating electrical machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_issues`
- Sources:

##### Waste flows

No waste input crosses this process boundary.

##### Elementary flows

No elementary input is prescribed.

#### Outputs

##### Product flows

###### Accepted finished rotating electrical machine (`finished_rotating_electrical_machine`)

Record accepted product crossing the factory gate; one data package covers one declared configuration.

- Selected flow: Finished rotating electrical machine
- Flow property / unit: Mass / kg
- Amount rule: Calibrated net mass of accepted finished machines; reference amount is 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg accepted finished rotating electrical machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_test`
- Sources: `un-cpc-3-0-structure-2025`; `iec-60034-1-2026`

##### Waste flows

Add rejects and packaging waste as separate atomic rows when they cross the boundary; no umbrella default is permitted.

##### Elementary flows

No elementary output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_avoid` | Shared operations and utilities | Prefer meters, batches, machine time, or direct material tracing that avoids allocation. | `iso-14044-2006` |
| `al_physical` | Unavoidable shared exchanges | Use a documented causal physical driver such as machine time, furnace charge, processed mass, or test time; do not default to revenue. | `iso-14044-2006` |
| `al_scrap` | Recoverable waste outputs | Report waste mass at the boundary without avoided-burden credit; disclose downstream recycling separately. | `iso-14044-2006` |
| `al_rejects` | Rework and rejects | Include attributable burdens in the accepted-product denominator; retain energy and losses from internal rework. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `component_manufacture_and_assembly` | Electrical steel | Invoice and stock ledger | mass, grade, lot, stocks, returns | Reconcile receipts and inventory | kg | Each lot; monthly close | Continuous 12 months or justified batch | Included sites | Net consumption by direct trace | Invoices, stock reconciliation |
| `cp_material_issues` | `component_manufacture_and_assembly` | Metals, conductor, insulation | Issue and return records | issued/returned mass, grade, order | Direct order trace | kg | Each issue | Output-matched period | Included sites | Net issues by product | ERP, weights, BOM |
| `cp_component_installation` | `component_manufacture_and_assembly` | Bearings, magnets, brushes | BOM and reject records | count, unit mass, rejects | Count times verified mass or weighing | kg | Each order | Output-matched period | Assembly sites | Installed plus rejects | BOM, scale, reject log |
| `cp_resin_batch_records` | `component_manufacture_and_assembly` | Epoxy | Mixing sheets | component mass, returns, discard | Weigh each batch | kg | Each batch | Output-matched period | Resin operations | Net mixed input | Batch sheet, calibration |
| `cp_energy_meters` | `component_manufacture_and_assembly` | Electricity | Meter intervals | meter, time, kWh, driver | Reconcile submeter to site meter | MJ | Continuous | Continuous 12 months or justified batch | Included operations | Convert and allocate physically | Calibration, reconciliation |
| `cp_gas_meters` | `component_manufacture_and_assembly` | Gas and oxygen | Meter/cylinder records | volume, conditions, operation | Meter or inventory difference | m3 | Each delivery/interval | Output-matched period | Thermal operations | Normalize conditions and allocate | Certificate, delivery record |
| `cp_water_and_cleaning_records` | `component_manufacture_and_assembly` | Water, NaOH, wastewater | Meter and bath records | water, solution, concentration, discharge | Meter plus bath balance | kg | Each bath; monthly close | Output-matched period | Wet operations | Exclude recirculation | Calibration, tests, discharge record |
| `cp_waste_dispatch` | `component_manufacture_and_assembly` | Wastes | Transfer records | type, net mass, destination, date | Weighed dispatch | kg | Each dispatch | Output-matched period | Included sites | Outbound mass by causal operation | Ticket, transfer note |
| `cp_direct_emissions` | `component_manufacture_and_assembly` | CO2 and NMVOC | Test or balance | concentration, flow, fuel carbon, solvent, capture | Measurement or documented balance | kg | Test/balance period | Output-matched period | Emission points | Direct releases only | Test, fuel, solvent logs |
| `cp_final_test` | `final_test_and_packaging` | Test energy and output | Test record | product, result, kWh, mass, rejects | Link serial/batch to meters/scales | MJ; kg | Each unit/batch | Output-matched period | Test sites | Accepted output plus reject burden | Reports, calibrations |
| `cp_packaging_issues` | `final_test_and_packaging` | Packaging | Issue/return records | type, count, mass, returnability | Direct trace | kg | Each shipment batch | Output-matched period | Packaging sites | Gate-state packaging only | Logs, specifications |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material` | Material inputs | Net consumption = receipts or issues + opening stock - closing stock - reusable returns | Mass and stock records | kg input | `iso-14044-2006` |
| `calc_normalize` | All rows | Normalized amount = allocated period amount / accepted product mass | Row amount; product mass | row unit per kg product | `iso-14044-2006` |
| `calc_electricity` | Electricity | MJ = kWh × 3.6 | kWh | MJ |  |
| `calc_solution_active` | `sodium_hydroxide` | Active mass = solution mass × measured mass fraction | Solution and concentration | kg NaOH |  |
| `calc_mass_balance` | Major materials | Input = incorporation + waste + inventory change + documented emissions/losses; investigate residual | Input/output/stock | Reconciled mass | `iso-14044-2006` |
| `calc_direct_co2` | `fossil_co2` | Measurement, or fuel × carbon content × oxidation × 44/12 | Fuel/carbon data | kg fossil CO2 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | Foreground rows | Use one consistent period, normally 12 continuous months; justify shorter campaigns and exclusions. | Dated records and reconciliation |
| `dq_technology` | Dataset | Match topology, rating, process route, controls, and test regime; do not generalize traction-specific evidence. | Specification and routing |
| `dq_geography` | Foreground/background | Identify sites and choose upstream data matching supplier geography and technology. | Site list and selection log |
| `dq_completeness` | Exchanges | Reconcile inputs, output, wastes, and stocks; document every cut-off. | Mass/energy balance and cut-off log |
| `dq_units` | Measurements | Retain raw units, factors, gas conditions, concentration, and calibration status. | Raw export and certificates |
| `dq_uuid` | Linked flows | Preserve audited identity, type, property, unit group, and state; keep six gaps unresolved until audited. | Search receipts and direct reads |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | Product identity | Product is one complete CPC 46112 machine and not an excluded product or part. | `un-cpc-3-0-structure-2025` |
| `val_reference` | Reference flow | Reference output is 1 kg accepted product and all required qualifiers are disclosed. | `iec-60034-1-2026` |
| `val_processes` | Process map | Both processes exist; conditional rows are included when applicable or evidenced not applicable. |  |
| `val_atomicity` | Inventory | Every row is one atomic exchange; no umbrella utility, packaging, waste, or emission row is used. |  |
| `val_units` | Inventory | UUID-bearing rows use audited property/unit group; electricity is MJ, gases m3, mass rows kg. |  |
| `val_balance` | Inventory | Product and material records reconcile within disclosed tolerance; residuals are investigated. | `iso-14044-2006` |
| `val_direct_emissions` | Elementary outputs | Foreground CO2 and NMVOC are direct releases and do not duplicate upstream emissions. |  |
| `val_allocation` | Shared operations | Shared-operation allocation uses a documented causal physical driver. | `iso-14044-2006` |
| `val_ranges` | External ranges | Publish no external range without two independent original, boundary-compatible sources. |  |
| `val_uuid_gaps` | UUID-empty rows | Keep six UUID-empty rows unresolved; do not fill with unaudited proxies. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground inventory rule for one declared CPC 46112 machine |
| downstream_use | TianGong flow, process, and lifecycle-model construction and review |
| allowed_use | Mass-normalized inventory and comparisons only after separate functional-equivalence review |
| excluded_use | Unqualified comparisons across function, rating, duty, efficiency, life, or technology; downstream claims |
| required_metadata | Qualifiers, specification, sites/period, process coverage, outsourcing, allocation, cut-offs, background choices, UUID status |
| required_quality_disclosure | Primary-data coverage, calibration, balance residuals, allocation, gaps, proxies, uncertainty, and no external ranges |
| update_trigger | Change in topology, rating, manufacturing route, site, energy, controls, testing, packaging, or UUID/range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division. CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 46112 identity and adjacent exclusions |
| `iec-60034-1-2026` | standard | IEC 60034-1:2026, Rotating electrical machines — Part 1: Rating and performance. https://webstore.iec.ch/en/publication/89961 | Rating qualifiers and final testing |
| `fleischer-et-al-2025-electric-mobility-production` | literature | Fleischer et al. (2025), Production technologies and systems for electric mobility, CIRP Annals 74, 1047–1072. https://doi.org/10.1016/j.cirp.2025.05.001 | Qualitative motor manufacturing sequence |
| `mahmouditabar-et-al-2025-ipm-lca` | literature | Mahmouditabar et al. (2025), Multi-Physics LCA-Based Design Optimization of an Interior Permanent Magnet Motor for EVs, Energies 18, 6167. https://doi.org/10.3390/en18236167 | Qualitative component identities |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://committee.iso.org/standard/38498.html | LCA scope, inventory, reporting, consistency, and review framework |
