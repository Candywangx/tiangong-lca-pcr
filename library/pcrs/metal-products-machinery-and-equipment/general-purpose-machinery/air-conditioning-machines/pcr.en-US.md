---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-conditioning-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Air-conditioning machines

## 1. Scope and Applicability

This rule describes a factory-gate foreground data package for complete, electrically driven vapour-compression machines that cool or heat indoor air. Declare the actual model, capacity, indoor/outdoor configuration, compressor, heat-exchanger technology, refrigerant and factory operations. The room-air-conditioner manufacturing sequence in the DOE source is a representative route, not a universal bill of materials. Include each on-site operation when performed, and model each purchased alternative as a concrete upstream product in the data package. Exclude installation, operation, maintenance and end of life from this factory-gate inventory. [un-cpc-3-2025; eu-206-2012; us-doe-rac-1997-v2]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-conditioning-machines |
| classification_refs | CPC 3.0: 43912, Air-conditioning machines |
| covered_products | Complete factory-accepted air-conditioning machines with an electric vapour-compression circuit for indoor-air cooling or heating. |
| excluded_products | Separate refrigeration/freezing equipment and heat pumps without the declared indoor-air-conditioning function; loose parts; fans alone; installation service. |
| representative_product | Factory-accepted R32-charged room air conditioner with sheet-metal cabinet and aluminium-fin/copper-tube exchanger. |
| production_route | Cabinet and exchanger fabrication when in house; final assembly, refrigerant charging and leak test; utilities; packaging. |
| market_state | Complete accepted machine at factory gate, before transport or installation. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete air-conditioning machine for indoor-air cooling or heating. |
| How much | One accepted complete machine of the declared configuration. |
| How well | Declare rated cooling/heating capacity, refrigerant, electrical supply and model; performance is product metadata, not a fixed PCR amount. |
| How long or cycle | At factory acceptance; no operational service life is assumed. |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Air-conditioning machines `a38dcbe4-4dd1-4ce8-a67b-5455ff82e9e0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and configuration; rated cooling/heating capacity; refrigerant identity and factory charge; compressor and heat-exchanger technology; factory-gate acceptance state; manufacturing site and period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_unit` | plant_electricity | Net calorific value | MJ | Convert metered kWh to MJ using 3.6 MJ/kWh; preserve the original meter record and period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and parts enter the factory at receipt; in-house fabrication starts at issued stock. |
| starting_condition_role | Foreground factory gate; upstream products link to separate supplier datasets. |
| product_classification_scope | Complete air-conditioning machines, CPC 3.0 43912; components are separately classified inputs. |
| recursive_input_rule | If a complete machine is used as an input, disclose it and link its upstream dataset once rather than recursively re-counting the same manufacture. |
| upstream_dataset_requirement | Link each purchased atomic material, component, electricity and packaging input to a compatible upstream product dataset; keep plant operations foreground. |
| disclosure | Declare model, factory route, purchased versus in-house components, charge state, temporal/geographic coverage and excluded stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all foreground processes | Include site fabrication when performed, assembly, charging, leak testing, packaging, attributable electricity, waste and direct refrigerant releases through factory acceptance. | `us-doe-rac-1997-v2` |
| `boundary_exclusions` | downstream stages | Report installation, operation, maintenance and end-of-life outside this factory-gate package; do not silently include use-phase leakage. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cabinet_fabrication | Cabinet sheet fabrication | conditional | When the factory cuts/forms cold-rolled steel cabinet sheet. | foreground fabrication | per accepted machine |
| heat_exchanger_fabrication | Heat exchanger fabrication | conditional | When the factory forms aluminium fins and copper tube exchangers. | foreground fabrication | per accepted machine |
| final_assembly_test | Final assembly, charge and test | required | All covered machines; R32 charge and emission rows only for R32 models. | foreground assembly and test | per accepted machine |
| plant_utilities | Plant purchased electricity | required | Record electricity attributable to the declared foreground operations. | foreground utility | per accepted machine |
| packaging | Factory packaging and acceptance | required | Corrugated box row only when supplied. | foreground finishing | one accepted machine |

### Process: Cabinet sheet fabrication (`cabinet_fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled carbon steel sheet (`steel_sheet`)

Include only where the cabinet is fabricated from cold-rolled carbon-steel sheet at the site; purchased cabinets require their own atomic input identity.

- Selected flow: Cold-rolled carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record issued sheet mass for on-site cabinet fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_sheet`
- Sources: `us-doe-rac-1997-v2`

#### Outputs

##### Waste flows

###### Steel scrap (`steel_scrap`)

Include only for on-site cabinet fabrication; keep externally recycled scrap as waste output before downstream treatment.

- Selected flow: Steel scrap `b8179640-66c9-4734-80a4-bd2effc29b4b`
- Flow property / unit: Mass / kg
- Amount rule: Weigh offcuts and rejected steel sent to waste handling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_scrap`
- Sources: `us-doe-rac-1997-v2`

### Process: Heat exchanger fabrication (`heat_exchanger_fabrication`)

#### Inputs

##### Product flows

###### aluminium sheet (`aluminium_sheet`)

Use this flow only for aluminium sheet thicker than 0.2 mm; thinner foil needs a separately reviewed flow.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record aluminium sheet issued to fin forming.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aluminium_sheet`
- Sources: `us-doe-rac-1997-v2`

###### Copper tubing (`copper_tubing`)

Include only when copper-tube heat exchangers are fabricated at the site.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: Record copper tube mass issued to heat-exchanger fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_copper_tubing`
- Sources: `us-doe-rac-1997-v2`

#### Outputs

### Process: Final assembly, charge and test (`final_assembly_test`)

#### Inputs

##### Product flows

###### Hermetic refrigeration compressor (`compressor`)

Use only for models with a purchased hermetic refrigeration compressor; other compressor designs need their own flow.

- Selected flow: Hermetic refrigeration compressor `a2a3427c-5d93-494b-a1fd-bcab42fea432`
- Flow property / unit: Mass / kg
- Amount rule: Record installed compressor mass from model BOM and receipts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_compressor`
- Sources: `us-doe-rac-1997-v2`

###### Refrigerant R32 (difluoromethane) (`r32_charge`)

Conditional on declared R32 charge; never substitute R404A or an elementary emission flow for purchased refrigerant.

- Selected flow: Refrigerant R32 (difluoromethane)
- Flow property / unit: Mass / kg
- Amount rule: Record R32 transferred into accepted R32-configured machines and test losses separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_r32_charge`
- Sources: `us-doe-rac-1997-v2`

###### Electric axial-fan motor (`fan_motor`)

Purchased electric motor driving the axial fan; record its installed mass only when this separate motor is on the BOM.

- Selected flow: Electric axial-fan motor
- Flow property / unit: Mass / kg
- Amount rule: Collect installed component mass from model BOM and receipt records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fan_motor`
- Sources: `us-doe-rac-1997-v2`

###### Axial fan rotor (`axial_fan_rotor`)

Purchased axial fan rotor or impeller, excluding the separately recorded motor; include only when this component is installed.

- Selected flow: Axial fan rotor
- Flow property / unit: Mass / kg
- Amount rule: Collect installed component mass from model BOM and receipt records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fan_rotor`
- Sources: `us-doe-rac-1997-v2`

###### Electronic control printed circuit board assembly (`control_board`)

Purchased assembled electronic control board installed in the machine; use a separately verified identity if the control design differs.

- Selected flow: Electronic control printed circuit board assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect installed component mass from model BOM and receipt records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_control_board`
- Sources: `us-doe-rac-1997-v2`

###### Moulded plastic front grille (`plastic_front_grille`)

Purchased front grille made of moulded plastic; disclose the actual resin and exclude this input when the grille is moulded within the site boundary.

- Selected flow: Moulded plastic front grille
- Flow property / unit: Mass / kg
- Amount rule: Collect installed component mass from model BOM and receipt records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_plastic_grille`
- Sources: `us-doe-rac-1997-v2`

#### Outputs

##### Elementary flows

###### HFC-32 (`r32_to_air`)

Conditional on R32 use and an evidenced release; TianGong has no Chinese baseName for this selected elementary flow.

- Selected flow: HFC-32 `4d9a8790-3ddd-11dd-9ca4-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual unrecovered HFC-32 release to unspecified air from charging and leak testing.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_r32_emission`
- Sources:

### Process: Plant purchased electricity (`plant_utilities`)

#### Inputs

##### Product flows

###### Electricity (`plant_electricity`)

Include fabrication, assembly, charging, testing and packaging electricity within the declared site boundary.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record attributable purchased electricity in MJ; convert meter kWh by 3.6 MJ/kWh.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

#### Outputs

### Process: Factory packaging and acceptance (`packaging`)

#### Inputs

##### Product flows

###### corrugated board boxes (`corrugated_box`)

Include only if a corrugated box is supplied with the factory-gate product; exclude transport packaging from M.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record corrugated box mass issued for the accepted machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_box`
- Sources: `us-doe-rac-1997-v2`

#### Outputs

##### Product flows

###### Air-conditioning machines (`finished_machine`)

One complete accepted machine of the declared configuration; M excludes transport packaging and includes factory-installed refrigerant.

- Selected flow: Air-conditioning machines `a38dcbe4-4dd1-4ce8-a67b-5455ff82e9e0`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_energy` | shared plant electricity | Prefer submetered model-specific electricity. Where shared, allocate measured electricity by logged machine-hours for the same period; disclose the denominator and uncertainty. |  |
| `allocation_steel_scrap` | steel scrap | Record steel scrap as a separate waste output. Do not credit avoided virgin steel within the factory-gate foreground inventory; disclose downstream recycling separately. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_sheet | cabinet_fabrication | steel_sheet | material or waste ledger | model; configuration; lot; issued mass; returned mass; accepted count | Reconcile lot and model-specific issue, return, recovery and dispatch records; weigh where direct mass is unavailable. | kg | each production lot | production period | factory site | attributable steel_sheet / accepted machines | meter, BOM, stock and recovery reconciliation |
| cp_steel_scrap | cabinet_fabrication | steel_scrap | material or waste ledger | model; configuration; lot; issued mass; returned mass; accepted count | Reconcile lot and model-specific issue, return, recovery and dispatch records; weigh where direct mass is unavailable. | kg | each production lot | production period | factory site | attributable steel_scrap / accepted machines | meter, BOM, stock and recovery reconciliation |
| cp_aluminium_sheet | heat_exchanger_fabrication | aluminium_sheet | material or waste ledger | model; configuration; lot; issued mass; returned mass; accepted count | Reconcile lot and model-specific issue, return, recovery and dispatch records; weigh where direct mass is unavailable. | kg | each production lot | production period | factory site | attributable aluminium_sheet / accepted machines | meter, BOM, stock and recovery reconciliation |
| cp_copper_tubing | heat_exchanger_fabrication | copper_tubing | material or waste ledger | model; configuration; lot; issued mass; returned mass; accepted count | Reconcile lot and model-specific issue, return, recovery and dispatch records; weigh where direct mass is unavailable. | kg | each production lot | production period | factory site | attributable copper_tubing / accepted machines | meter, BOM, stock and recovery reconciliation |
| cp_compressor | final_assembly_test | compressor | material or waste ledger | model; configuration; lot; issued mass; returned mass; accepted count | Reconcile lot and model-specific issue, return, recovery and dispatch records; weigh where direct mass is unavailable. | kg | each production lot | production period | factory site | attributable compressor / accepted machines | meter, BOM, stock and recovery reconciliation |
| cp_fan_motor | final_assembly_test | fan_motor | component receipt and BOM | model; configuration; installed component mass; accepted count | Reconcile component receipts, model BOM and assembly issue records. | kg | each production lot | production period | factory site | installed fan_motor mass / accepted machines | receipt, BOM and assembly record |
| cp_fan_rotor | final_assembly_test | axial_fan_rotor | component receipt and BOM | model; configuration; installed component mass; accepted count | Reconcile component receipts, model BOM and assembly issue records. | kg | each production lot | production period | factory site | installed axial_fan_rotor mass / accepted machines | receipt, BOM and assembly record |
| cp_control_board | final_assembly_test | control_board | component receipt and BOM | model; configuration; installed component mass; accepted count | Reconcile component receipts, model BOM and assembly issue records. | kg | each production lot | production period | factory site | installed control_board mass / accepted machines | receipt, BOM and assembly record |
| cp_plastic_grille | final_assembly_test | plastic_front_grille | component receipt and BOM | model; configuration; installed component mass; accepted count | Reconcile component receipts, model BOM and assembly issue records. | kg | each production lot | production period | factory site | installed plastic_front_grille mass / accepted machines | receipt, BOM and assembly record |
| cp_r32_charge | final_assembly_test | r32_charge | material or waste ledger | model; configuration; lot; issued mass; returned mass; accepted count | Reconcile lot and model-specific issue, return, recovery and dispatch records; weigh where direct mass is unavailable. | kg | each production lot | production period | factory site | attributable r32_charge / accepted machines | meter, BOM, stock and recovery reconciliation |
| cp_electricity | plant_utilities | plant_electricity | meter and production ledger | meter reading; period; machine-hours | Read calibrated meter or ledger, convert kWh to MJ, and allocate by logged machine-hours. | MJ | each production lot | production period | factory site | attributable plant_electricity / accepted machines | meter, BOM, stock and recovery reconciliation |
| cp_r32_emission | final_assembly_test | r32_to_air | refrigerant mass balance ledger | R32 issued for test and charge; retained in accepted machines; recovered mass; returned mass; waste dispatch mass; accepted count | Reconcile charging, leak-test, recovery and stock records for the same period and calculate unrecovered release to air. | kg | each production lot | production period | factory site | released R32 mass / accepted machines | charge, recovery, stock and waste records |
| cp_box | packaging | corrugated_box | material or waste ledger | model; configuration; lot; issued mass; returned mass; accepted count | Reconcile lot and model-specific issue, return, recovery and dispatch records; weigh where direct mass is unavailable. | kg | each production lot | production period | factory site | attributable corrugated_box / accepted machines | meter, BOM, stock and recovery reconciliation |
| cp_mass | packaging | finished_machine | weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted machine | production period | factory site | accepted net mass per machine | calibration and acceptance record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `r32_mass_balance` | r32_to_air | Released R32 = R32 issued for charging and tests - R32 retained in accepted machines - R32 recovered - R32 returned to stock - R32 sent off-site as waste. | R32 issue; retained charge; recovery; returns; waste dispatch | kg HFC-32 to air |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all inventory rows | Use one declared model/configuration and production period; verify accepted machine count and purchased-versus-fabricated route. | BOM, acceptance and process records |
| `dq_refrigerant` | r32_charge; r32_to_air | Reconcile R32 purchase, factory charge, recovery, waste and stocks; disclose unmeasured losses rather than force zero. | charge and recovery logs |
| `dq_mass` | finished_machine | Retain calibrated net-mass measurement for the same accepted configuration; exclude shipping packaging. | cp_mass record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine | Confirm one finished machine output equals measured M kg and matches the reference UUID, model and acceptance record. |  |
| `validate_balance` | materials and refrigerant | Check material and R32 issue/return balances, record waste and fugitive release separately, and explain any residual. |  |
| `validate_identity` | all UUID-bearing rows | Use only verified public state-100 flow identities with matching product state, property, unit and classification; keep unresolved rows blank. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground data package for complete factory-gate air-conditioning machine production |
| downstream_use | secondary_dataset; background_dataset after review |
| allowed_use | Model the declared machine configuration and factory route; link compatible upstream datasets. |
| excluded_use | Do not infer use-phase efficiency or refrigerant leakage from this production inventory. |
| required_metadata | model; configuration; capacity; refrigerant and charge; factory route; site and period; measured M; accepted count |
| required_quality_disclosure | coverage, allocation, mass-balance residuals, unresolved flow identities and absent empirical ranges |
| update_trigger | model, refrigerant, BOM, fabrication route, site or meter boundary changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UNSD, CPC Version 3.0 Structure (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43912 identity and separation from adjacent classes; verified original row 2205 |
| `eu-206-2012` | standard | Commission Regulation (EU) No 206/2012, Article 2(1), 2017 consolidated text archived from UK legislation.gov.uk at https://upload.wikimedia.org/wikipedia/commons/a/a0/EUR_2012-206.pdf | Representative electric vapour-compression air-conditioner definition; regulation scope is narrower than this PCR |
| `us-doe-rac-1997-v2` | official_guidance | U.S. DOE / LBNL, Technical Support Document for Energy Conservation Standards for Room Air Conditioners, Volume 2 (September 1997), p. 1-2, https://www1.eere.energy.gov/buildings/appliance_standards/pdfs/tsdracv2.pdf | Representative room-air-conditioner manufacturing sequence and materials; no generic quantity range |
