---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.office-type-sheet-fed-offset-printing-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Office type sheet-fed offset printing machinery

## 1. Scope and Applicability

This PCR applies to complete office-type offset printing machines that feed individual sheets and use offset printing components. The category is limited to machines using unfolded sheets with one side not exceeding 22 cm and the other side not exceeding 36 cm. It covers manufacture, assembly, acceptance testing, and packing through the factory gate.

It excludes reel-fed presses, larger industrial sheet-fed offset presses, flexographic, gravure, letterpress, screen and digital printing equipment, photocopiers, multifunction printers, separate prepress or postpress machinery, spare parts sold separately, outbound distribution, use, maintenance, and end-of-life. The size criterion follows HS subheading 8443.12; CPC 45150 and its neighboring exclusions establish the classification boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.office-type-sheet-fed-offset-printing-machinery |
| classification_refs | CPC 3.0: 45150; HS 2007: 8443.12 |
| covered_products | Complete office-type offset printing machines that feed individual sheets not exceeding 22 cm by 36 cm in the unfolded state |
| excluded_products | Reel-fed presses; larger industrial sheet-fed offset presses; non-offset and digital printing equipment; photocopiers and multifunction printers; ancillary printing machines; separately supplied parts |
| representative_product | A complete small-format office-type sheet-fed offset printing machine with mechanical printing assembly and electronic controls |
| production_route | Receipt of purchased mechanical and electronic assemblies; final assembly; lubricant filling; powered functional print test; inspection; packing |
| market_state | Complete, tested, saleable machine at the manufacturer's factory gate; packaging is inventoried separately from machine net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a complete office-type machine capable of offset printing on individually fed sheets |
| How much | One complete machine |
| How well | Passes the manufacturer's documented acceptance test and is designed for unfolded sheets with one side not exceeding 22 cm and the other side not exceeding 36 cm |
| How long or cycle | One delivery at the factory gate; operational service life is outside this cradle-to-gate PCR |
| reference_flow_link | Actual net machinery mass, in kg, required to provide one conforming complete machine |

| Field | Value |
| --- | --- |
| Reference amount | Measured net mass in kg of one conforming complete machine |
| Reference product flow | Office type sheet-fed offset printing machinery `b52484dd-3fcc-4fac-b7ea-d28c0019b431` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer and model; maximum unfolded sheet dimensions; number of colours or printing units; feed and delivery configuration; rated voltage and frequency; test status; net machinery mass; packaging mass; manufacturing site and geography; technology year |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_machine_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or otherwise document the net mass of one conforming complete machine; exclude shipping packaging and test consumables from reference-product mass. |
| `input_output_mass` | Material, component, consumable, packaging, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass crossing the foreground boundary; convert item counts or purchasing units only with documented item mass and reconciliation to the same production lot. |
| `electricity_energy` | Electricity input | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter readings and convert kWh to MJ using 1 kWh = 3.6 MJ; retain the original meter unit and conversion record. |
| `packaging_separation` | Reference machine and packaging inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report each packaging component separately and do not include its mass in the reference machine's net mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground production | Include receipt of purchased assemblies and consumables, final assembly, lubricant filling, functional print testing, inspection, and packing through release of the saleable machine at the manufacturing factory gate. | `ghg-protocol-product-standard-2011` |
| `boundary_upstream_inputs` | Purchased inputs | Link every purchased component, consumable, electricity supply, and packaging input to an upstream dataset matching its declared geography, technology, and product state. | `ghg-protocol-product-standard-2011` |
| `boundary_exclusions` | Downstream and non-production activities | Exclude outbound distribution, installation, use, maintenance, consumable replacement during use, and end-of-life; disclose the cradle-to-gate limitation and do not imply whole-life performance. | `ghg-protocol-product-standard-2011` |
| `boundary_product_identity` | Product eligibility | Accept only office-type sheet-fed offset machines within the 22 cm by 36 cm unfolded-sheet limit; reject larger, reel-fed, non-offset, digital, copying, multifunction, or ancillary machines. | `un-cpc-3-0-exp-notes-2025`; `wco-hs-2007-844312` |
| `boundary_additional_exchanges` | Site-specific foreground inventory | Add any other actual exchange as its own atomic flow row when it crosses the declared boundary; do not combine materials, fuels, utilities, wastes, or emissions. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased mechanical assemblies, electronic control units, consumables, and packaging materials received at the final manufacturing site |
| starting_condition_role | Cradle-to-gate foreground starting condition for the final manufacturer; upstream burdens remain connected through supplier datasets |
| product_classification_scope | Complete office-type sheet-fed offset printing machinery within CPC 3.0 subclass 45150 and the HS 8443.12 sheet-size criterion |
| recursive_input_rule | If a complete machine of this same category is consumed as an input, record it as a visible product input with its own upstream dataset and stated purpose; do not fold it into the reference output |
| upstream_dataset_requirement | Use product-specific supplier data when available; otherwise use a representative dataset with disclosed geography, technology, year, and product state |
| disclosure | Declare supplier-versus-in-house component boundaries, machine configuration, sheet-size eligibility, test recipe, net mass, packaging design, temporal coverage, allocation, exclusions, and unresolved flow identities |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| final_assembly_test_pack | Final assembly, functional test, and packing | `required` |  | Foreground manufacture and release of the complete machine | One conforming complete machine and its measured net mass |

### Process: Final assembly, functional test, and packing (`final_assembly_test_pack`)

#### Inputs

##### Product flows

###### Mechanical printing-machine subassembly (`mechanical_subassembly`)

Record one purchased mechanical subassembly incorporating the frame, sheet-feed mechanism, cylinders, rollers, and drive elements when it crosses into final assembly. If these parts are procured separately, replace this card with separate atomic part flows.

- Selected flow: Mechanical subassembly for office-type sheet-fed offset printing machinery
- Flow property / unit: Mass / kg
- Amount rule: measured mass incorporated in one conforming machine, net of reusable transport fixtures
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_mass_records`
- Sources:

###### Electronic control unit (`electronic_control_unit`)

Record the complete electronic control unit incorporated in the machine; rated voltage, control functions, and supplier remain product qualifiers.

- Selected flow: Electronic control unit `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- Flow property / unit: Mass / kg
- Amount rule: measured mass incorporated in one conforming machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_input_mass_records`
- Sources:

###### Purchased electricity (`electricity`)

Record electrical energy used by final assembly, testing, inspection, and packing, including attributable idle and start-up energy during the covered production period.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sub-metered energy or allocated site-meter energy attributable to one conforming machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources:

###### Machinery lubricating oil (`lubricating_oil`)

Record fresh lubricating oil filled into the machine or consumed during assembly and acceptance testing; declare grade and whether residual oil remains in the shipped machine.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus returned uncontaminated mass for one conforming machine
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumable_issue_return`
- Sources:

###### Planographic printing ink for acceptance testing (`planographic_printing_ink`)

Record planographic printing ink issued to the acceptance test. Colour and formulation are foreground qualifiers; separate another formulation only when it is physically used.

- Selected flow: Planographic Printing Ink `2a6023d7-6d4d-4ac3-9d87-3d940f408e25`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus uncontaminated returned mass for one conforming machine
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumable_issue_return`
- Sources:

###### Uncoated woodfree test paper (`uncoated_woodfree_paper`)

Record dry uncoated woodfree paper sheets fed during the acceptance test; declare sheet dimensions, grammage, supplier, and recycled content.

- Selected flow: paper, woodfree, uncoated `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of sheets fed during acceptance testing for one conforming machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_paper_records`
- Sources:

###### Corrugated-board boxes (`corrugated_board_boxes`)

Record corrugated-board boxes installed in the saleable shipping package. If no box is used, record zero with package-design evidence rather than substituting another packaging type.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured mass installed in the shipping package for one conforming machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one packaged conforming machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_records`
- Sources:

###### Solid-wood shipping pallet (`solid_wood_pallet`)

Record one solid-wood pallet when the released machine is shipped on that packaging component; declare dimensions, treatment, reuse status, and wood species or group.

- Selected flow: Solid-wood shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: measured mass installed in the shipping package for one conforming machine; zero only when package records prove no pallet was used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one packaged conforming machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_records`
- Sources:

###### Polyethylene stretch film (`polyethylene_stretch_film`)

Record polyethylene stretch film installed around the machine package; declare polymer grade, recycled content, thickness, and supplier.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured mass installed in the shipping package for one conforming machine; zero only when package records prove no film was used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one packaged conforming machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming complete machine (`reference_product`)

Record the tested, saleable machine released at the factory gate. The flow quantity is the machine's net mass; packaging remains in separate input rows.

- Selected flow: Office type sheet-fed offset printing machinery `b52484dd-3fcc-4fac-b7ea-d28c0019b431`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of one conforming complete machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product_mass`
- Sources:

##### Waste flows

###### Waste paper from functional testing (`waste_paper`)

Record discarded paper sheets leaving the test process as waste. Declare contamination and the receiving treatment route.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: measured wet-free mass of discarded test paper leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources:

###### Waste ink from functional testing (`waste_ink`)

Record unusable residual test ink leaving the process as waste. Declare composition, hazard classification, and receiving treatment route.

- Selected flow: Waste ink `28055998-65ea-4b15-b3cf-7b049ffc6553`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of waste ink leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared assembly, testing, inspection, or packing operations | First avoid allocation by process subdivision, sub-metering, lot records, and product-specific bills of material. | `ghg-protocol-product-standard-2011` |
| `allocation_physical_driver` | Residual shared foreground burdens | When subdivision is not feasible, use a documented physical causal driver such as machine-specific assembly hours, powered test time, or packaging-line time; apply the same method to similar inputs and outputs and disclose the choice. | `ghg-protocol-product-standard-2011` |
| `allocation_no_waste_credit` | Waste paper, waste ink, and returned materials | Report waste quantities and treatment datasets separately; do not subtract avoided burdens or recycling credits unless a separately declared study method requires them and the result is reported transparently. | `ghg-protocol-product-standard-2011` |
| `allocation_rework` | Reworked or failed machines | Attribute additional materials, energy, test consumables, and wastes to the production lot that caused them; divide the reconciled lot total only across conforming machines. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_input_mass_records` | final_assembly_test_pack | mechanical subassembly and electronic control unit | receiving, bill-of-material, and issue record | supplier item id; lot id; units issued; measured item mass; returns; conforming machine count | Reconcile receiving and production-issue records to product bills of material; verify representative item masses by calibrated scale | kg | each production lot | At least one representative production year or the declared shorter production period | All final manufacturing lines in the declared dataset site scope | Sum net issued mass and divide only by conforming machines from the same reconciled lot | Supplier specification; bill of material; scale calibration; lot reconciliation |
| `cp_electricity_records` | final_assembly_test_pack | purchased electricity | electricity meter and production-time record | meter start; meter end; kWh; line status; machine model; conforming units; downtime | Prefer sub-metering; otherwise allocate site-meter electricity with a documented physical driver and subtract only separately metered excluded loads | kWh and MJ | each production shift or lot | At least one representative production year or the declared shorter production period | Assembly, test, inspection, and packing loads in scope | Convert net kWh to MJ and divide reconciled energy by conforming machines | Meter id; calibration or utility check; timestamp coverage; allocation record |
| `cp_consumable_issue_return` | final_assembly_test_pack | lubricating oil and planographic printing ink | stores issue, return, and residual record | material id; formulation or grade; issued mass; clean return mass; waste mass; lot id; machine count | Weigh or use traceable inventory issue and return records for the same production lot | kg | each production lot | At least one representative production year or the declared shorter production period | All in-scope assembly and test stations | Net consumption equals issued mass minus uncontaminated returned mass; reconcile retained product and waste destinations | Calibrated scale or inventory system; material specification; issue-return reconciliation |
| `cp_test_paper_records` | final_assembly_test_pack | uncoated woodfree test paper | test sheet issue and count record | paper id; sheet length; sheet width; grammage; sheet count; issued mass; returned mass; waste mass; machine id | Weigh sheets or calculate mass from verified dimensions, grammage, and count; reconcile to waste and retained samples | kg | each acceptance test | All tests represented by the dataset | All in-scope functional-test stations | Sum paper fed per conforming machine and reconcile outputs | Paper specification; scale calibration or grammage certificate; test log; mass reconciliation |
| `cp_packaging_mass_records` | final_assembly_test_pack | corrugated-board box, solid-wood pallet, and polyethylene stretch film | packaging bill, issue, and measured-mass record | component id; material; units; unit mass; reuse status; package design revision; machine id | Record each packaging component separately from the approved package bill and verify unit mass by calibrated scale | kg | each package design revision and production lot | Package designs used during the declared production period | All packaging stations in scope | Sum installed mass of each atomic packaging component per packaged conforming machine | Package specification; supplier record; scale calibration; design revision |
| `cp_waste_mass_records` | final_assembly_test_pack | waste paper and waste ink | waste container and transfer record | waste id; gross mass; tare; net mass; contamination; hazard code; destination; lot id | Weigh each waste stream separately and reconcile shared containers to the covered production lot | kg | each waste transfer, reconciled by lot or month | Same period as represented production | All in-scope assembly, test, and packing areas | Sum net mass by atomic waste stream and divide by conforming machines using the declared physical driver | Scale calibration; transfer note; treatment acceptance; reconciliation |
| `cp_reference_product_mass` | final_assembly_test_pack | conforming complete machine | final inspection and net-mass record | serial number; model; configuration; net mass; packaging mass; acceptance status; release date | Weigh the complete machine before shipping packaging or use an audited configuration mass balance | kg | each configuration and whenever the bill of material changes | Configurations produced during the declared period | All final release stations in scope | Use the measured or audited net mass of each represented conforming configuration | Scale calibration; signed inspection record; bill-of-material revision; packaging exclusion check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | electricity | electricity_MJ = net_metered_kWh × 3.6 | net metered kWh attributable to the covered lot | MJ per conforming complete machine |  |
| `calc_consumable_net` | lubricating_oil; planographic_printing_ink | net_consumed_mass = issued_mass - uncontaminated_returned_mass | issued mass; uncontaminated returned mass; conforming machine count | kg consumed per conforming complete machine |  |
| `calc_test_paper_mass` | uncoated_woodfree_paper | when direct weighing is unavailable, paper_mass_kg = sheet_count × length_m × width_m × grammage_g_per_m2 / 1000 | sheet count; length; width; grammage | kg paper fed per conforming complete machine |  |
| `calc_waste_net_mass` | waste_paper; waste_ink | net_waste_mass = gross_container_mass - tare_mass | gross mass; tare; stream identity; conforming machine count | kg waste per conforming complete machine |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Retain model, configuration, serial or batch identity, maximum unfolded sheet dimensions, and acceptance status; prove that the product meets the office-type sheet-fed offset boundary. | Product specification; acceptance record; CPC and HS boundary check |
| `dq_temporal` | All foreground rows | Use records from one representative production year or disclose the exact shorter period and reasons; align numerator and conforming-unit denominator periods. | Dated meters, issue records, production logs, and waste transfers |
| `dq_completeness` | All foreground rows | Reconcile bills of material, consumables, electricity, test paper, packaging, wastes, and conforming output; add any omitted actual exchange as one atomic row. | Signed reconciliation with explained residuals |
| `dq_geography_technology` | Upstream datasets | Match production geography, supplier route, material grade, electricity mix, and technology year where material; disclose proxies and improvement plans. | Supplier records and upstream dataset metadata |
| `dq_measurement` | Mass and electricity records | Use calibrated instruments or traceable invoices and retain unit conversions, tare corrections, and allocation calculations. | Calibration certificates, invoices, meter ids, and calculation workbook |
| `dq_significant_processes` | Dataset quality disclosure | Report data sources, quality limitations, and planned improvements for significant inputs and processes. | Data quality assessment following the GHG Protocol Product Standard |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Product eligibility | Confirm offset printing technology, individual-sheet feed, office-type market description, and the 22 cm by 36 cm unfolded-sheet limit; fail if any criterion is absent or contradicted. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-exp-notes-2025`; `wco-hs-2007-844312` |
| `validate_reference_flow` | Reference flow | Confirm one conforming complete machine, its actual net mass in kg, the exact reference-product UUID, and every required qualifier; confirm packaging mass is excluded from net machine mass. |  |
| `validate_inventory_atomicity` | Process inventory | Confirm every recorded row is one physical product, waste, or energy exchange with direction, type, property, unit, amount rule, basis, evidence, and protocol; reject umbrella or selector rows. |  |
| `validate_uuid_identity` | Tiangong-linked rows | Confirm each stored UUID remains public state-code 100 and matches baseName, Chinese baseName, flow type, classification, property, unit group, product state, and foreground qualifiers; keep unresolved rows blank. |  |
| `validate_electricity_coverage` | electricity | Confirm meter timestamps cover assembly, testing, inspection, and packing and that any shared-load allocation uses the declared physical driver. | `ghg-protocol-product-standard-2011` |
| `validate_test_mass_balance` | test paper and ink | Reconcile paper and ink inputs to waste, material retained in the shipped machine or test samples, and any separately identified outputs; add atomic output or elementary-flow rows for material residuals rather than hiding discrepancies. |  |
| `validate_period_alignment` | Foreground dataset | Confirm all numerators and the conforming-machine denominator cover the same site scope and period and that failed or reworked units are treated by the declared allocation rule. |  |
| `validate_range_status` | Important inventory flows | Confirm foreground measurements are used because no two-source empirical ranges were established; keep every range-evidence need unresolved until two independent boundary-compatible original sources are reviewed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate foreground manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product footprint modelling, supplier and design improvement, and downstream lifecycle models when product identity, factory-gate boundary, geography, technology, period, and allocation are compatible |
| excluded_use | Whole-life performance claims; comparison with larger or non-offset printing equipment; operational energy or consumables; installation, maintenance, and end-of-life without separate downstream models |
| required_metadata | Manufacturer; model and configuration; maximum unfolded sheet dimensions; number of colours or printing units; rated voltage and frequency; site and geography; production period; net machine mass; package design and mass; test recipe; data sources; allocation; unresolved identities |
| required_quality_disclosure | Primary-data share; meter and scale coverage; supplier-data representativeness; temporal, geographic, and technological limitations; proxies; exclusions; mass-balance residuals; range-evidence gaps |
| update_trigger | Bill-of-material or package redesign; changed production site, electricity supply, test recipe, allocation, or supplier route; significant process change; resolved UUID or range evidence; more representative foreground data |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-08 | CPC 45150 identity and hierarchy |
| `un-cpc-3-0-exp-notes-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-09-08 | Product-category exclusions and distinction from other printing machinery |
| `wco-hs-2007-844312` | `standard` | World Customs Organization, Harmonized System 2007 nomenclature, subheading 8443.12, https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-older-edition/2007/hs2007_net_eng1.pdf, retrieved 2026-09-08 | Office-type sheet-fed offset identity and 22 cm by 36 cm unfolded-sheet criterion |
| `china-mofcom-844312` | `official_guidance` | Ministry of Commerce of the People's Republic of China, tariff line 84431200, https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=12750, retrieved 2026-09-08 | Professional Chinese terminology and confirmation of the 22 cm by 36 cm criterion |
| `ghg-protocol-product-standard-2011` | `standard` | World Resources Institute and World Business Council for Sustainable Development, Product Life Cycle Accounting and Reporting Standard, 2011, https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf, retrieved 2026-09-08 | Unit of analysis, reference flow, cradle-to-gate disclosure, process map, primary data quality, allocation hierarchy, and reporting limitations |
