---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-ignition-or-starting-equipment-of-a-kind-used-for-internal-combustion-engine-dccedb01
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Electrical ignition or starting equipment of a kind used for internal combustion engines; generators and cut-outs of a kind used in conjunction with internal combustion engines; electrical lighting or signalling equipment (except filament or discharge lamps), windscreen wipers, defrosters and demisters, of a kind used for cycles or motor vehicles

## 1. Scope and Applicability

This PCR applies to the gate-to-gate manufacture of finished electrical ignition or starting equipment for internal combustion engines; generators and cut-outs used with such engines; and electrical lighting or signalling equipment, windscreen wipers, defrosters, and demisters for cycles or motor vehicles. It covers integrated forming, moulding, winding, surface treatment when used, assembly, testing, and packaging at the reporting manufacturing site.

The PCR excludes filament and discharge lamps, ignition wiring sets supplied as separate products, general-purpose connectors or leads, internal-combustion engines, traction batteries, vehicle assembly, distribution after the factory gate, use, maintenance, and end-of-life. Purchased materials and components enter at the manufacturing-site gate with separately linked upstream datasets; this foreground module does not claim a cradle-to-grave result.

Because the category contains functionally different finished equipment, each data package shall declare one representative product family and shall not average starters, generators, lamps, signals, wipers, defrosters, and demisters unless the production-weighted product mix and all material differences are disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-ignition-or-starting-equipment-of-a-kind-used-for-internal-combustion-engine-dccedb01 |
| classification_refs | CPC 3.0: 46910 (exact classification context; no accepted mapping edge is asserted by this PCR) |
| covered_products | Finished spark-ignition and starting equipment; engine-coupled generators and cut-outs; cycle or motor-vehicle electrical lighting or signalling equipment other than filament or discharge lamps; windscreen wipers; defrosters; demisters |
| excluded_products | Filament lamps; discharge lamps; separately supplied ignition wiring sets; generic connectorized leads; engines; batteries; complete cycles and vehicles; replacement service and repair |
| representative_product | One declared finished equipment family and model meeting its specified electrical, mechanical, optical, wiping, defrosting, or demisting performance |
| production_route | Product-specific combination of metal forming, polymer moulding, winding, aqueous cleaning or surface treatment, assembly, functional testing, and packaging |
| market_state | Saleable finished equipment at the manufacturing-site factory gate, net of transport-packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a declared finished item within this product category at the manufacturing-site factory gate |
| How much | 1 kg net mass of saleable finished equipment, excluding transport-packaging mass |
| How well | Conforms to the declared model's applicable electrical, mechanical, optical, wiping, defrosting, or demisting performance specification and has passed routine final inspection |
| How long or cycle | One reporting-period production output; no vehicle service-life performance is included |
| reference_flow_link | The reference product output row `out_reference_product` from process `integrated_equipment_manufacturing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Electrical ignition or starting equipment of a kind used for internal combustion engines, generators and cut-outs of a kind used in conjunction with internal combustion engines, electrical lighting or signalling equipment (except filament or discharge lamps), windscreen wipers, defrosters and demisters, of a kind used for cycles or motor vehicles `46a4d7e0-db60-4f6d-a637-28140132c05d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared equipment family and model; ignition, starting, generating, cut-out, lighting, signalling, wiping, defrosting, or demisting function; vehicle or cycle application; rated voltage, power, torque, light output, wiping performance, or thermal performance as applicable; product net mass; production route; material composition or bill of materials; recycled-content claims; site and country; reporting period; packaging configuration; pass/fail specification; allocation method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all process exchanges to 1 kg of conforming finished equipment. Exclude corrugated-box mass from the reference-product mass but include the box as a separate input. |
| `mass_balance_basis` | Material and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated receiving, issue, output, and waste measurements on the same dry/wet and gross/net basis. State moisture or coating basis where material. |
| `electricity_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity and convert kWh to MJ using exactly 3.6 MJ per kWh; do not treat electricity as a mass flow. |
| `gas_reference_conditions` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare meter temperature, pressure, and whether the volume is standard or actual. Do not convert volume to mass without documented composition and density. |
| `sludge_basis` | Metal-bearing surface-treatment sludge | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report wet sludge mass and measured dry-solids fraction separately so wet and dry quantities are not mixed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, formed components, chemicals, utilities, and packaging are received at the reporting manufacturing-site gate with supplier identity and upstream dataset links disclosed. |
| starting_condition_role | Gate-to-gate foreground starting condition for integrated equipment manufacture |
| product_classification_scope | One declared finished equipment family within the CPC 46910 semantic boundary; product-mix averaging is allowed only with production weights and disclosed model composition. |
| recursive_input_rule | A purchased input that itself falls within this PCR's product category is recorded as a separate product input with its own supplier dataset; it is not recursively manufactured inside the same process unless the site actually performs those operations. |
| upstream_dataset_requirement | Link each purchased material, component, utility, and packaging input to a geographically and technologically representative upstream dataset. Model inbound transport separately when it is not included in the supplier dataset. |
| disclosure | Declare site, reporting period, equipment family, model mix, production route, outsourced operations, surface-treatment chemistry, test regime, packaging, allocation, cut-offs, and all upstream dataset boundaries. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | Foreground manufacturing module | Include all on-site forming, moulding, winding, cleaning or surface treatment, assembly, functional testing, rework, waste handling before off-site transfer, and packaging needed to deliver the reference product at the factory gate. | `eu-pef-recommendation-2021`; `unece-alca-proposal-2025` |
| `boundary_conditional_surface_treatment` | Aqueous cleaning or electrolytic or chemical surface treatment | Include water, electricity, heat fuel, bath chemicals, drag-out losses, wastewater-treatment residues, and direct releases only when the declared production route performs the operation; otherwise document the operation as absent or outsourced. | `ec-jrc-stm-bref-2006` |
| `boundary_no_silent_cutoff` | Inventory completeness | Do not omit a material, energy, waste, or elementary flow solely because it is small. Any cut-off shall be quantified, justified against the study goal, and reported with an estimated completeness effect. | `eu-pef-recommendation-2021` |
| `boundary_exclusions` | Downstream life-cycle stages | Exclude distribution after the factory gate, installation, vehicle use, replacement, maintenance, and end-of-life from this foreground module; downstream users shall add these stages when the study goal requires them. | `unece-alca-proposal-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_equipment_manufacturing` | Integrated component forming, surface treatment, assembly, testing, and packaging | `required` | — | Gate-to-gate foreground manufacture; route-specific operations and rows apply only when physically performed for the declared product | 1 kg conforming finished equipment at the factory gate, net of transport packaging |

### Process: Integrated component forming, surface treatment, assembly, testing, and packaging (`integrated_equipment_manufacturing`)

#### Inputs

##### Product flows

###### Cold-rolled non-alloy steel sheet (`in_cold_rolled_steel_sheet`)

Record steel sheet received for housings, brackets, laminations, or other formed parts only when present in the declared bill of materials. The selected identity remains UUID-unresolved because the audited candidates did not establish an exact bilingual cold-rolled non-alloy sheet.

- Selected flow: Cold-rolled non-alloy steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass minus returned unused stock, normalized to conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Primary aluminum alloy sheet (`in_primary_aluminium_alloy_sheet`)

Record primary aluminum alloy sheet only when it enters the declared product route as sheet for housings, brackets, or heat-spreading parts. Alloy, temper, thickness, and recycled-content claim shall be retained with the foreground record.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass minus returned unused stock, normalized to conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Insulated winding wire (`in_magnet_wire`)

Record purchased magnet wire when the declared starter, generator, wiper motor, actuator, or other equipment contains on-site-produced windings. Declare conductor material, enamel system, and wire gauge.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass minus returned reels and unused wire, normalized to conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Polyamide 6 moulding granulate (`in_pa6_granulate`)

Record PA6 granulate only when the declared route moulds PA6 housings, connectors, fans, gears, or other parts on site. Retain grade, reinforcement, additives, recycled content, and moisture-conditioning basis.

- Selected flow: Polyamide 6 (PA6) granulate `55be6cb7-2fb9-4c6f-b37f-08c849c72cf5`
- Flow property / unit: Mass / kg
- Amount rule: Measured dry granulate issued to moulding minus returned material, normalized to conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Purchased electricity (`in_electricity`)

Record metered electricity consumed by forming, moulding, winding, cleaning, surface treatment, assembly, testing, rework, local waste treatment, and packaging within the foreground boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the declared product family and converted from kWh using `electricity_conversion`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources: `ec-jrc-stm-bref-2006`

###### Gaseous natural gas (`in_natural_gas`)

Record gaseous natural gas only when combusted on site for bath heating, drying, space heating allocated to production, or other declared manufacturing heat. Do not include upstream combustion emissions as direct site emissions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered production-attributable gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas`
- Sources: `ec-jrc-stm-bref-2006`

###### Process water (`in_process_water`)

Record process water when used on site for aqueous cleaning, rinsing, surface treatment, cooling make-up, or other manufacturing operations. Exclude sanitary water unless the study goal explicitly includes it and allocation is disclosed.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered process-water mass or volume converted with documented density, minus separately metered internally recycled water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_water`
- Sources: `ec-jrc-stm-bref-2006`

###### Sodium hydroxide for aqueous cleaning or treatment (`in_sodium_hydroxide`)

Record sodium hydroxide only when purchased sodium hydroxide is added to an on-site cleaning, etching, treatment, or wastewater-treatment bath. Report solution mass and active NaOH concentration so active mass can be calculated.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Purchased solution mass multiplied by verified active NaOH mass fraction, normalized to conforming product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_chemicals`
- Sources: `ec-jrc-stm-bref-2006`

###### Corrugated board boxes (`in_corrugated_board_boxes`)

Record corrugated board boxes that leave the manufacturing site with the declared product. Reusable transport packaging is recorded only for the consumed share assigned by documented reuse cycles.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured box mass consumed for shipped conforming product, including the allocated loss of reusable boxes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

No waste input is prescribed. If the site uses a waste-derived material, record that specific waste in an added atomic row and disclose its legal status and upstream treatment boundary.

##### Elementary flows

No elementary input is prescribed for the foreground process. Resource extractions associated with purchased products belong to their linked upstream datasets.

#### Outputs

##### Product flows

###### Conforming reference product (`out_reference_product`)

Record only finished equipment that passes the declared routine inspection and is released for sale. Nonconforming output sent to rework remains inside the process boundary.

- Selected flow: Electrical ignition or starting equipment of a kind used for internal combustion engines, generators and cut-outs of a kind used in conjunction with internal combustion engines, electrical lighting or signalling equipment (except filament or discharge lamps), windscreen wipers, defrosters and demisters, of a kind used for cycles or motor vehicles `46a4d7e0-db60-4f6d-a637-28140132c05d`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net mass of conforming finished equipment after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-recommendation-2021`

##### Waste flows

###### Steel sheet offcuts and rejected steel parts (`out_steel_scrap`)

Record segregated ferrous offcuts and rejected steel parts transferred from the foreground site as waste. If the output has ceased to be waste and is sold as a co-product, reclassify it consistently and apply the allocation rules in Section 7.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap transferred off site minus verified internal recycling to the same production system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

###### Metal-bearing surface-treatment wastewater sludge (`out_metal_bearing_surface_treatment_sludge`)

Record dewatered sludge leaving on-site treatment of aqueous cleaning, electroplating, anodising, or chemical surface-treatment wastewater. The selected identity remains UUID-unresolved because audited candidates did not establish an exact industrial metal-bearing sludge.

- Selected flow: Metal-bearing surface-treatment wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge leaving the site with dry-solids fraction, treatment route, and hazardous classification recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `ec-jrc-stm-bref-2006`

##### Elementary flows

###### Direct fossil carbon dioxide from on-site natural-gas combustion (`out_carbon_dioxide_fossil`)

Record only fossil carbon dioxide released directly by on-site combustion inside the foreground boundary. Exclude carbon dioxide embedded in upstream electricity or fuel datasets to prevent double counting.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from metered natural-gas consumption, verified gas carbon content, oxidation factor, and carbon-to-carbon-dioxide molecular-mass ratio; use stack measurement when representative and quality-assured
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished equipment
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared lines, utilities, and treatment systems | Subdivide or meter the declared equipment family directly wherever technically feasible. Use production time, machine energy, bath loading, or another causal physical driver only when direct subdivision is unavailable. | `eu-pef-recommendation-2021` |
| `allocation_product_mix` | Multiple finished product families | Allocate shared burdens with a documented physical relationship that reflects resource use. Production mass alone is not acceptable when models have materially different power, cycle time, treatment area, or test demand unless equivalence is demonstrated. | `eu-pef-recommendation-2021` |
| `allocation_scrap_status` | Steel scrap and other recovered outputs | Determine and disclose whether the output is waste or a co-product at the factory gate. Do not assign an avoided-production credit inside this gate-to-gate inventory. If it is a co-product and subdivision is impossible, apply a documented physical relationship; use economic allocation only when no defensible physical relationship exists and report a sensitivity check. | `eu-pef-recommendation-2021` |
| `allocation_rework` | Internal rework and recycling | Keep internally reworked products and internally recycled process material inside the foreground boundary; assign their additional material and energy to conforming output and do not count the internal loop as an external product or waste flow. | `eu-pef-recommendation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `integrated_equipment_manufacturing` | Steel sheet, aluminum alloy sheet, magnet wire, and PA6 inputs | Approved bill of materials, warehouse issues and returns, scale records | product_model; lot_id; material_identity; supplier; grade_or_specification; issued_mass; returned_mass; moisture_or_coating_basis; conforming_output_mass | Reconcile controlled BOM quantities to weighed or invoiced issues and returns for each product lot | kg | Per production lot; aggregate monthly | At least 12 consecutive representative months or the full campaign for seasonal/campaign production | All lines and outsourced steps attributed to the declared site and product family | Sum net issued mass by atomic material and divide by conforming net product mass | BOM revision, supplier specification, calibrated scale certificate, inventory reconciliation |
| `cp_electricity` | `integrated_equipment_manufacturing` | Purchased electricity | Revenue meter and submeter logs | meter_id; opening_kWh; closing_kWh; production_line; downtime; product_model; conforming_output_mass | Read calibrated meters; subtract documented non-production loads; allocate remaining shared loads causally | kWh converted to MJ | Continuous or shift; aggregate monthly | Same period as production output, normally at least 12 representative months | All foreground operations at the reporting site | Net attributable kWh × 3.6 divided by conforming net product mass | Meter calibration, bill reconciliation, allocation worksheet |
| `cp_natural_gas` | `integrated_equipment_manufacturing` | On-site natural gas | Gas meter and fuel invoice records | meter_id; volume; temperature; pressure; standard_or_actual_basis; gas_composition; heating_use; product_model; output_mass | Reconcile submetered production gas to invoices and declared reference conditions | m3 | Daily or batch; aggregate monthly | Same period as production output | On-site combustion within the foreground boundary | Sum attributable volume at one declared reference condition and divide by conforming net product mass | Meter calibration, invoice reconciliation, gas-quality certificate |
| `cp_process_water` | `integrated_equipment_manufacturing` | Process water | Water submeter, tank and recycle-loop records | source; input_volume; density; recycled_volume; discharge_volume; operation; product_model; output_mass | Meter fresh and recycled water separately; convert volume to mass only with documented density | kg | Shift or batch; aggregate monthly | Same period as production output | Manufacturing water only; sanitary water separately disclosed | Fresh process-water mass divided by conforming net product mass; do not subtract water embodied in exported waste twice | Meter calibration, water balance, recycle-loop log |
| `cp_surface_treatment_chemicals` | `integrated_equipment_manufacturing` | Sodium hydroxide | Purchase, stock, bath make-up and concentration records | solution_mass; active_mass_fraction; bath_id; operation; opening_stock; closing_stock; spill_or_loss; product_model; output_mass | Reconcile purchases and stock changes to bath additions; verify concentration by certificate or analysis | kg active NaOH | Each bath addition; aggregate monthly | Same period as treated production | On-site aqueous cleaning, treatment, and wastewater treatment | Sum solution mass × active fraction allocated to the declared product and divide by conforming net product mass | Supplier certificate, bath analysis, stock reconciliation |
| `cp_packaging` | `integrated_equipment_manufacturing` | Corrugated board boxes | Packaging specification, issue and shipment records | box_type; unit_mass; quantity_issued; quantity_returned; reuse_cycles; shipped_product_mass | Weigh each box type and reconcile issues to shipments; allocate reusable-box loss over verified cycles | kg | Per shipment; aggregate monthly | Same period as production output | Packaging leaving the reporting site with the product | Consumed or allocated box mass divided by shipped conforming net product mass | Packaging specification, scale record, shipment reconciliation |
| `cp_finished_output` | `integrated_equipment_manufacturing` | Conforming reference product | Final inspection, release and calibrated scale records | product_model; serial_or_lot; gross_mass; packaging_mass; net_product_mass; test_result; rejected_mass; rework_mass | Weigh released product net of transport packaging and reconcile to final inspection release | kg | Per lot or shipment; aggregate monthly | Same period as all inputs and outputs | All conforming products within the declared family at the site | Sum conforming net product mass; normalize all exchanges to 1 kg | Calibration record, release record, reconciliation to shipments |
| `cp_waste_outputs` | `integrated_equipment_manufacturing` | Steel scrap and metal-bearing sludge | Waste scale ticket, manifest, laboratory and destination records | waste_identity; container_tare; gross_mass; net_mass; dry_solids_fraction; hazardous_status; destination; internal_recycle_mass; product_model | Weigh each segregated waste; subtract tare and verified internal recycling; sample sludge dry solids representatively | kg | Each transfer; aggregate monthly | Same period as production output | All waste generated inside the foreground boundary and transferred off site | Sum net external transfer by atomic waste and divide by conforming net product mass | Calibrated scale ticket, legal manifest, laboratory result, recycler receipt |
| `cp_direct_emissions` | `integrated_equipment_manufacturing` | Direct fossil carbon dioxide | Fuel-meter, gas-composition and stack-test records | gas_volume; reference_conditions; carbon_content; oxidation_factor; measured_CO2; operating_hours; product_model; output_mass | Calculate carbon balance from metered fuel and verified composition, or use representative quality-assured stack measurement | kg CO2 | Monthly calculation and after material fuel or burner change | Same period as fuel and product output | On-site combustion only | Attribute only foreground combustion; reconcile calculated and measured values where both exist; divide by conforming net product mass | Gas-quality certificate, meter record, calculation sheet, stack-test report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | All inventory rows | normalized exchange = period exchange attributable to the declared product family / conforming net product mass for the same period | Attributable exchange; conforming net product mass | Exchange per 1 kg reference product | `eu-pef-recommendation-2021` |
| `calc_electricity_mj` | `in_electricity` | MJ electricity = metered kWh × 3.6 | Metered kWh | MJ electricity | — |
| `calc_active_naoh` | `in_sodium_hydroxide` | active NaOH mass = solution mass × verified active mass fraction | Solution mass; active mass fraction | kg active NaOH | — |
| `calc_direct_fossil_co2` | `out_carbon_dioxide_fossil` | fossil CO2 mass = metered fuel amount × verified fuel carbon content × oxidation factor × 44/12; adapt units explicitly and compare with representative stack measurement when available | Fuel amount; carbon content; oxidation factor; measured CO2 where available | kg direct fossil CO2 | — |
| `calc_mass_reconciliation` | Product, material, and waste mass | Reconcile net purchased material mass with conforming product, off-site waste, documented internal recycle inventory change, and measured process losses; investigate rather than force-close unexplained imbalance | Net material issues; product output; waste transfers; stock change; measured losses | Material-specific mass-balance discrepancy | `ec-jrc-stm-bref-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and all UUID-bearing rows | Match the declared product or exchange to the stated UUID identity, flow type, property, unit group, and official bilingual base names; retain product-specific grade and state as foreground qualifiers. | Public state-100 direct-read identity plus supplier or product specification |
| `dq_temporal` | All foreground exchanges | Use one common representative reporting period, normally at least 12 consecutive months; justify shorter campaigns and disclose shutdowns, start-up, and abnormal production. | Dated meter, purchase, production, test, and waste records |
| `dq_technology` | Product route | Document which forming, moulding, winding, surface-treatment, assembly, and test operations are on site, outsourced, or absent. | Process flow diagram, work instructions, outsourcing records |
| `dq_completeness` | Bill of materials and utilities | Reconcile every BOM material and separately metered utility to the product family; add atomic rows for material flows not represented by the default inventory rather than combining them into an umbrella row. | BOM-to-purchase reconciliation, meter balance, completeness checklist |
| `dq_surface_treatment` | Aqueous or electrolytic treatment route | Retain bath identity, active concentration, water balance, treatment-residue identity, dry-solids basis, and direct-release monitoring; do not apply these rows to products without the route. | Bath log, laboratory report, water balance, waste manifest, permit monitoring |
| `dq_uncertainty` | Shared allocations and calculated values | Quantify the effect of material shared-load allocations, fuel composition, sludge moisture, and product-mix variation; document data gaps without substituting unverified proxy UUIDs. | Sensitivity calculation, uncertainty record, unresolved-item register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm the UUID is the public state-100 CPC 46910 product identity, the reference property is Mass, the unit is kg, and every required qualifier is present. | `un-cpc-3-0-structure-2025` |
| `validate_boundary_period` | Foreground inventory | Confirm inputs, conforming output, waste transfers, and direct emissions use the same site and reporting period and that outsourced and downstream operations are not silently mixed into the gate-to-gate module. | `eu-pef-recommendation-2021`; `unece-alca-proposal-2025` |
| `validate_atomic_bom` | Material inventory | Reconcile the declared product BOM to individual atomic inventory rows. Reject umbrella rows, duplicate flows, and unqualified substitutions; unresolved UUIDs remain explicit. | `unece-alca-proposal-2025` |
| `validate_conditional_routes` | Surface treatment, gas use, winding, and moulding | Require evidence that each conditional row is physically present for the declared route; otherwise record it as not applicable without assigning a zero-looking measured value. | `ec-jrc-stm-bref-2006` |
| `validate_mass_balance` | Mass inputs and outputs | Investigate unexplained material-specific imbalance after accounting for conforming product, waste, internal recycle, inventory change, and measured losses. Do not force the balance by altering measured exchanges. | `ec-jrc-stm-bref-2006` |
| `validate_energy_emissions` | Natural gas and direct fossil CO2 | Confirm gas reference conditions, carbon content, oxidation factor, and unit conversion; confirm that upstream electricity and fuel emissions are not repeated as direct foreground emissions. | `eu-pef-recommendation-2021` |
| `validate_allocation` | Shared processes and recovered outputs | Confirm subdivision was attempted first, causal drivers are documented, recovered-output status is consistent, and any economic allocation includes a sensitivity disclosure. | `eu-pef-recommendation-2021` |
| `validate_completeness_disclosure` | Dataset release | Confirm data sources, cut-offs, data gaps, UUID gaps, range-evidence needs, model mix, route, packaging, allocation, and uncertainty are disclosed before the dataset is used for comparison. | `eu-pef-recommendation-2021`; `unece-alca-proposal-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after review and publication |
| downstream_use | Foreground gate-to-gate manufacturing module for a declared automotive or cycle electrical-equipment family; link to upstream material and utility datasets and, when required, distribution, vehicle use, maintenance, and end-of-life modules |
| allowed_use | Product-footprint modelling, supply-chain exchange, hotspot analysis, and product-specific scenario modelling when the declared product family, route, site, period, and allocation match the study |
| excluded_use | Unqualified comparison across starters, generators, lighting, signalling, wipers, defrosters, or demisters; cradle-to-grave claims without added stages; use as a generic vehicle dataset; proxying excluded lamps or wiring sets |
| required_metadata | PCR id and version; product UUID; equipment family and model; performance specification; net mass; BOM and material states; production route; site and geography; reporting period; energy mix and gas reference conditions; surface-treatment route; packaging; allocation; upstream dataset links |
| required_quality_disclosure | Primary-data share; temporal, geographic, and technological representativeness; meter and scale calibration; BOM completeness; product-mix weighting; cut-offs; allocation sensitivity; sludge moisture; direct-emission calculation; unresolved UUIDs and range-evidence needs |
| update_trigger | Material change in product design, BOM, recycled content, production route, site, electricity supply, fuel composition, surface-treatment chemistry, test regime, packaging, allocation basis, upstream datasets, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Original-text verification of CPC 46910 identity and stated exclusions |
| `ec-jrc-stm-bref-2006` | `official_guidance` | European Commission, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-04) | Conditional surface-treatment decomposition; water, electricity, fuel, chemical, waste, and emission collection requirements |
| `eu-pef-recommendation-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-04) | Functional unit, reference flow, boundary disclosure, allocation hierarchy, completeness, data quality, and validation |
| `unece-alca-proposal-2025` | `official_guidance` | UNECE Working Party on Pollution and Energy, ECE/TRANS/WP.29/GRPE/2025/17, Proposal for Mutual Resolution No. 5 concerning Automotive Life Cycle Assessment, https://documents.un.org/doc/undoc/gen/g25/123/24/pdf/g2512324.pdf (retrieved 2026-09-05) | Automotive material-production and parts-production boundary and transparent reporting of system boundaries, data, assumptions, and limitations; treated as a working proposal, not binding regulation |
