---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.refrigerators-and-freezers-household-type-electric-or-non-electric
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Refrigerators and freezers, household type, electric or non-electric

## 1. Scope and Applicability

This rule produces a foreground inventory for one complete household refrigerator, freezer, or combined refrigerator-freezer accepted at the factory gate. Electric compression and non-electric heat-driven absorption appliances fall within the product boundary; declare the actual cooling technology, energy source, and working fluid. Separately sold parts, commercial display cabinets, industrial cold stores, and air-conditioning equipment have different product identities. Use, distribution, and end-of-life are outside this factory-gate foreground boundary. The European household study mainly describes electric routes; the absorption source identifies technology only and supplies no category-wide amounts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.refrigerators-and-freezers-household-type-electric-or-non-electric` |
| classification_refs | CPC 3.0: 44811 (classification context, not PCR identity) |
| covered_products | Complete household refrigerators, freezers and combined refrigerator-freezers, electric or non-electric |
| excluded_products | Separately sold compressors, cabinets and refrigerants; commercial display cabinets; industrial refrigeration equipment; air conditioners |
| representative_product | One complete household refrigerating machine with declared configuration and acceptance record |
| production_route | Declare actual compression or absorption route; include material, charge and testing inputs only when applicable |
| market_state | New accepted machine at factory gate; net mass excludes transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One complete household machine delivering the declared refrigerating or freezing function |
| How much | One accepted finished machine of measured net mass M kg |
| How well | Meets declared model, cabinet volume, temperature class and cooling-route acceptance specification |
| How long or cycle | At factory acceptance; no use life is specified by this reference flow |
| reference_flow_link | `finished_appliance` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Refrigerators and freezers, household type, electric or non-electric `510dc598-5954-4045-a563-78869ea6d5ed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; accepted configuration; refrigerator/freezer type; cooling route; energy source; working fluid; net volume; temperature class; factory-gate state; measured net mass M |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `energy_meter` | `factory_electricity` | Energy | kWh | Collect factory electricity from meters and attribute it to accepted machines; exclude appliance use-phase electricity. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground boundary | Start when steel sheet, plastic sheet, insulation foam and refrigeration parts enter linked manufacturing; include cabinet fabrication, cooling-circuit assembly and charge, final assembly, acceptance testing and packaging; end when one accepted machine leaves the factory gate. Model use, distribution and end-of-life separately. | `bis-iso14044-2006`; `eu-household-refrigeration-review-2016` |
| `sb_route` | technology routes | Include only the refrigerant, absorption working fluid and test fuel used by the accepted configuration; disclose non-applicable routes row by row. | `eu-household-refrigeration-review-2016`; `usdoe-mref-tsd-2022` |
| `sb_upstream` | purchased inputs | Cover upstream production of purchased materials and components with linked datasets; do not count the same upstream burdens again in foreground manufacture. | `bis-iso14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Steel sheet, plastic sheet, insulation foam, refrigeration components and energy with declared provenance and state enter the manufacturing chain. |
| starting_condition_role | Starting inputs to foreground unit processes; linked datasets cover upstream purchased goods. |
| product_classification_scope | Complete household refrigerators or freezers; excludes goods sold only as components. |
| recursive_input_rule | When a same-category finished machine enters another model, record only the actual machine flow and link its upstream dataset; do not recursively duplicate manufacture. |
| upstream_dataset_requirement | Purchased materials, components, fuels and electricity need upstream datasets matched to supply state, geography and technology. |
| disclosure | Disclose manufacturing site, supplier coverage, route, working fluid, packaging boundary and any omitted process. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cabinet_fabrication` | Cabinet and insulation fabrication | `required` | at the manufacturing site or a linked first-tier supplier | fabrication foreground | per one accepted finished machine |
| `cooling_circuit` | Cooling-circuit assembly and charging | `required` | declare compression or absorption technology and actual charge | cooling-system foreground | per one accepted finished machine |
| `final_test_pack` | Final assembly, acceptance test and packaging | `required` | each accepted finished machine | factory-gate foreground | per one accepted finished machine |

### Process: Cabinet and insulation fabrication (`cabinet_fabrication`)

#### Inputs

##### Product flows

###### Pre-painted steel sheet (`steel_sheet`)

Record steel sheet entering cabinet forming, at the factory or first-tier supplier.

- Selected flow: Pre-painted steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record consumed sheet mass for one accepted finished machine from material issues and stock reconciliation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cabinet_material`
- Sources: `eu-household-refrigeration-review-2016`

###### Polystyrene sheet (`polystyrene_sheet`)

Record the polystyrene sheet transferred to inner-liner thermoforming.

- Selected flow: Polystyrene sheet
- Flow property / unit: Mass / kg
- Amount rule: Record issued sheet mass attributable to one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cabinet_material`
- Sources: `eu-household-refrigeration-review-2016`

###### Rigid polyurethane insulation foam (`pu_foam`)

Record rigid foam crossing from foam production into cabinet insulation; represent in-house foam production as its own linked supplier or unit process.

- Selected flow: Rigid polyurethane insulation foam
- Flow property / unit: Mass / kg
- Amount rule: Record foam mass attributable to one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cabinet_material`
- Sources: `eu-household-refrigeration-review-2016`

#### Outputs

##### Waste flows

###### Steel sheet offcut scrap (`steel_scrap`)

Record offcuts leaving cabinet forming as a separately weighed waste stream.

- Selected flow: Steel sheet offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: Record dispatched offcut mass per one accepted finished machine; do not net it against purchased sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `eu-household-refrigeration-review-2016`; `bis-iso14044-2006`

### Process: Cooling-circuit assembly and charging (`cooling_circuit`)

#### Inputs

##### Product flows

###### Copper tubing (`copper_tubing`)

Record copper tubing used in a compression cooling circuit when this material is present.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record installed tubing mass for one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_circuit_material`
- Sources: `eu-household-refrigeration-review-2016`

###### Isobutane refrigerant R600a (`r600a_charge`)

Include only a compression circuit charged with R600a; other refrigerants need their own separately verified flow.

- Selected flow: Isobutane refrigerant R600a
- Flow property / unit: Mass / kg
- Amount rule: Record first-fill R600a charged per one accepted finished machine, before deducting measured losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_circuit_material`
- Sources: `eu-household-refrigeration-review-2016`

###### Ammonia (`ammonia_charge`)

Include only an absorption circuit using an ammonia-water working system; record water separately when supplied across the boundary.

- Selected flow: Ammonia `9874382d-672c-4601-a3ce-9a4ae21e663b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record ammonia mass entering the absorption circuit per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_circuit_material`
- Sources: `usdoe-mref-tsd-2022`

#### Outputs

##### Elementary flows

###### Isobutane to outdoor air (`r600a_air`)

Include only measured release of R600a to outdoor ambient air during charging and leak test; distinguish indoor or captured gas.

- Selected flow: Isobutane to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Record monitored outdoor release per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_loss`
- Sources: `bis-iso14044-2006`

### Process: Final assembly, acceptance test and packaging (`final_test_pack`)

#### Inputs

##### Product flows

###### Alternating-current electricity (`factory_electricity`)

Record metered factory electricity attributable to assembly and acceptance testing, regardless of the appliance operating energy source.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record attributable meter energy in kWh per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `bis-iso14044-2006`

###### Propane (`propane_test`)

Include propane only when a fuel-fired absorption appliance is acceptance-tested on propane.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record propane mass consumed during factory testing per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources: `usdoe-mref-tsd-2022`

###### corrugated board boxes (`corrugated_box`)

Record corrugated board boxes supplied for the accepted appliance; exclude their mass from M.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Record box mass attributable to one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-household-refrigeration-review-2016`

#### Outputs

##### Product flows

###### Refrigerators and freezers, household type, electric or non-electric (`finished_appliance`)

Output one accepted complete household refrigerator or freezer at the factory gate, without transport packaging. Measure M using cp_mass.

- Selected flow: Refrigerators and freezers, household type, electric or non-electric `510dc598-5954-4045-a563-78869ea6d5ed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc3-notes-2025`; `bis-iso14044-2006`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | shared manufacturing | First subdivide shared forming, assembly or testing unit processes and meter their inputs and outputs directly. | `bis-iso14044-2006` |
| `al_physical` | remaining shared loads | If subdivision is infeasible, allocate shared electricity and materials using a causally related physical driver; record driver, total and accepted-machine count, and reconcile allocated totals. | `bis-iso14044-2006` |
| `al_disclose` | scrap and co-products | Report steel scrap and other co-products separately; do not silently treat them as negative manufacturing inputs. Disclose destination and any recycling allocation choice. | `bis-iso14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `final_test_pack` | finished_appliance | weighing/acceptance record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration | representative production period | factory gate | accepted net mass per machine | scale calibration and acceptance record |
| `cp_cabinet_material` | `cabinet_fabrication` | steel_sheet; polystyrene_sheet; pu_foam | material issue and stock record | material identity; lot; gross issues; returns; accepted count | Reconcile issued and returned material mass for the declared cabinet process and accepted output. | kg | per production lot | representative production period | site or first-tier supplier | attributable material mass / accepted machines | weigh tickets and stock ledger |
| `cp_circuit_material` | `cooling_circuit` | copper_tubing; r600a_charge; ammonia_charge | circuit bill of materials and charge log | route; component mass; charge cylinder before/after; accepted count | Reconcile installed tubing and working-fluid charge against the circuit specification and accepted count. | kg | per batch and charge event | representative production period | site or first-tier supplier | installed or charged mass / accepted machines | bill of materials and charge-scale record |
| `cp_scrap` | `cabinet_fabrication` | steel_scrap | waste dispatch record | offcut stream; tare; gross mass; accepted count | Weigh steel offcuts dispatched from the cabinet process separately from input steel. | kg | per dispatch | representative production period | site or first-tier supplier | offcut mass / accepted machines | weighbridge and recycler receipt |
| `cp_refrigerant_loss` | `cooling_circuit` | r600a_air | outdoor emission monitoring record | species; exhaust point; measured mass; accepted count | Measure and log actual R600a released to outdoor air at charging or leak test; retain capture-system records. | kg | per test event | representative production period | charging and test station | measured outdoor release / accepted machines | monitor calibration and capture log |
| `cp_energy` | `final_test_pack` | factory_electricity | electricity meter record | meter id; opening/closing kWh; allocation driver; accepted count | Read calibrated factory meters and isolate assembly and acceptance-test electricity. | kWh | per shift or batch | representative production period | factory | attributable kWh / accepted machines | meter and allocation ledger |
| `cp_fuel` | `final_test_pack` | propane_test | fuel cylinder test record | cylinder before/after mass; test model; accepted count | Weigh propane cylinder before and after tests of applicable absorption appliances. | kg | per test batch | representative production period | factory test station | attributable propane / accepted machines | cylinder scale and test log |
| `cp_packaging` | `final_test_pack` | corrugated_box | packaging issue record | box specification; unit mass; boxes issued; accepted count | Reconcile corrugated box issue and returns for accepted appliances. | kg | per packaging lot | representative production period | factory gate | box mass / accepted machines | supplier specification and issue ledger |

### Calculation Rules

The quantitative basis is per one accepted finished machine. Each collection protocol divides attributable batch inputs or outputs by the accepted count of the same configuration; `cp_mass` measures M separately. Do not misstate per-machine values as per-kg values.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | Check model, route, species, material state, supplier and flow type. | bill of materials, supplier specifications and process map |
| `dq_mass` | reference and material rows | Retain calibrated weighing record for net mass M and reconcile material issues, finished output and scrap. | weighing, stock and acceptance records |
| `dq_period` | all foreground rows | Disclose production period, site, accepted count, missing records and allocation drivers. | production, meter and allocation ledgers |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity` | reference and route | Confirm the output is a complete machine within CPC 44811 and declared route matches conditional inputs. | `un-cpc3-notes-2025` |
| `vr_mass` | reference and inventory | Reconcile `finished_appliance` M kg to `cp_mass` for the same configuration; every input and output uses the per-accepted-machine basis. | `bis-iso14044-2006` |
| `vr_balance` | material and emission rows | Check completeness of steel, refrigerant, packaging, scrap and emission records; never substitute an unverified reference range for measured data. | `bis-iso14044-2006`; `eu-household-refrigeration-review-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | household refrigeration appliance factory-gate foreground data package |
| downstream_use | machine-manufacturing inventory linked by `process` and `lifecyclemodel` |
| allowed_use | manufacturing analysis for the declared route and configuration |
| excluded_use | do not interpret this factory-gate package as lifetime use or end-of-life impact |
| required_metadata | model, configuration, route, energy source, working fluid, site, period, M, accepted count and supplier coverage |
| required_quality_disclosure | unresolved UUIDs and range evidence, foreground coverage, allocation, emission monitoring and upstream dataset match |
| update_trigger | material change in materials, refrigerant, manufacturing process, energy or supply chain |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-notes-2025` | official_guidance | CPC Ver. 3.0 Explanatory Notes (UNSD, 30 June 2025), p. 239, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | complete appliance identity and adjacent parts boundary |
| `eu-household-refrigeration-review-2016` | official_guidance | Preparatory/review study Commission Regulation (EC) No. 643/2009 with regard to ecodesign requirements for household refrigeration appliances and Commission Delegated Regulation (EU) No. 1060/2010 with regard to energy labelling of household refrigeration appliances: FINAL REPORT (VHK and ARMINES, 4 March 2016), pp. 49, 128, https://ecodesign-fridges.eu/sites/ecodesign-fridges.eu/files/Household%20Refrigeration%20Review%20FINAL%20REPORT%2020160304.pdf | EU electric-route manufacturing and collection topics; no quantitative transfer to non-electric routes |
| `bis-iso14044-2006` | standard | IS/ISO 14044:2006, Environmental Management — Life Cycle Assessment — Requirements and Guidelines, §§4.2.3.3, 4.3.2–4.3.4, https://fenix.ciencias.ulisboa.pt/downloadFile/2251937252647064/is.iso.14044.2006.pdf | unit-process boundary, measured inventory, allocation and quality |
| `usdoe-mref-tsd-2022` | official_guidance | Technical Support Document: Energy Efficiency Program for Consumer Products and Commercial and Industrial Equipment: Miscellaneous Refrigeration Products (US DOE, January 2022), §3.3.1.1, https://www.energy.gov/sites/default/files/2022-01/mref-pa-tsd.pdf | absorption technology description only; report market scope excludes ordinary refrigerators and freezers |
