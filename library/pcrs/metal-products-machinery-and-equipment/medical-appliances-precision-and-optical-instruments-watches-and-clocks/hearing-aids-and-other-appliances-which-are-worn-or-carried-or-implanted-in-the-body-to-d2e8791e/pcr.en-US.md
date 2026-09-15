---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hearing-aids-and-other-appliances-which-are-worn-or-carried-or-implanted-in-the-body-to-d2e8791e
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Hearing aids and other appliances which are worn or carried, or implanted in the body, to compensate for a defect or disability

## 1. Scope and Applicability

This PCR applies to a finished appliance whose manufacturer-stated intended purpose is to compensate for a defect or disability and that is worn, carried, or implanted in the body. It covers hearing aids and other active or passive compensatory appliances supplied as finished devices. The foreground producer must identify the appliance subtype, intended compensatory function, active or passive operation, worn/carried/implantable state, configuration, power system, sterile state, geographic market, and declared service life.

Orthopaedic appliances, splints, fracture appliances, artificial body parts, general diagnostic or therapeutic equipment, medical furniture, software supplied independently, chargers or accessories supplied independently, and replacement parts supplied independently are excluded. A multi-product kit is covered only when the declared reference appliance and every included accessory are identified separately in the bill of materials. This boundary follows the CPC 48172 product identity and does not treat the classification leaf as a substitute for a product-specific bill of materials or manufacturing model (`un-cpc-3-0-2025`, `ec-pef-2021`, `eu-mdr-2017-745`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hearing-aids-and-other-appliances-which-are-worn-or-carried-or-implanted-in-the-body-to-d2e8791e |
| classification_refs | CPC 3.0 48172, exact contextual reference |
| covered_products | Finished hearing aids and other finished appliances worn, carried, or implanted in the body to compensate for a defect or disability |
| excluded_products | Orthopaedic appliances, splints, fracture appliances, artificial body parts, general diagnostic or therapeutic equipment, medical furniture, independently supplied software, accessories, chargers, and replacement parts |
| representative_product | One finished, tested, and configured compensatory appliance; the producer must state the concrete appliance subtype and included accessories |
| production_route | Product-specific component manufacture or procurement, final assembly, testing, packaging, and, where applicable, validated sterilization; distribution, use, maintenance, and end-of-life are conditional extensions |
| market_state | Finished appliance at the manufacturer gate, with sterile/non-sterile state, configuration, included accessories, and sale geography declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the manufacturer-stated function that compensates for the declared defect or disability |
| How much | One finished and configured appliance for one declared user application; paired or multi-unit systems must state the number of appliance units |
| How well | Conforming to the manufacturer-stated intended purpose, performance specification, configuration, and applicable release tests |
| How long or cycle | The declared expected service life or use-cycle basis; cradle-to-gate datasets must still disclose this qualifier and must not include use-stage burdens |
| reference_flow_link | Net mass in kg of the one finished appliance required to realize the functional unit; included accessories and packaging are separate product inputs and are not added to net appliance mass |

| Field | Value |
| --- | --- |
| Reference amount | Product-specific net mass of one finished appliance, measured in kg |
| Reference product flow | Hearing aids and other appliances which are worn or carried, or implanted in the body, to compensate for a defect or disability `702d21c4-fc45-412a-8beb-e685dd9a623a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | concrete appliance subtype; intended compensatory function; active or passive operation; worn, carried, or implantable state; unit count; net appliance mass; configuration and included accessories; power-source chemistry; sterile state and sterilization method when applicable; manufacturer-gate geography; sale geography; expected service life or use-cycle basis; cradle-to-gate or cradle-to-grave boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass of the finished appliance after final testing and before packaging; report accessory and packaging masses separately. |
| `count_to_mass` | components or cells recorded by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to kg with product-specific measured unit mass and retain count, unit-mass sample, and conversion records; do not apply a generic count-to-mass factor. |
| `electrical_energy` | assembly, sterilization, and use-stage charging electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Record metered electricity and convert kWh to MJ using 1 kWh = 3.6 MJ; preserve meter boundary, voltage level, grid geography, and loss boundary. |
| `service_life_normalization` | conditional use and end-of-life stages | Mass and declared appliance count | kg and item | Scale use-stage exchanges to the declared number of appliance units, duty cycle, replacement schedule, and expected service life; report all four parameters. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_specific_bom` | all production datasets | Use a product-specific bill of materials or bill of components and company-specific manufacturing activity data; identify each included accessory and packaging component separately. | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca` |
| `boundary_required_production` | cradle-to-gate foreground system | Include component or material inputs crossing the final-manufacturing boundary, in-house forming, final assembly, testing, rejects, packaging, and applicable sterilization through release of the finished appliance at the manufacturer gate. | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`; `eu-mdr-2017-745` |
| `boundary_conditional_life_cycle` | cradle-to-grave extension | Include distribution, use electricity, replacement consumables, maintenance, collection, dismantling, recycling, incineration, and landfill only when the declared scope includes those stages; state geography and scenario assumptions. | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca` |
| `boundary_sterile_device` | appliances supplied sterile | Include the validated sterilization operation and sterile-barrier packaging when the appliance is placed on the market sterile; disclose sterilization method and maintain the sterile state through the declared manufacturer-gate boundary. | `eu-mdr-2017-745` |
| `boundary_no_hidden_cutoff` | all foreground and linked upstream processes | Do not omit a material, component, energy, waste, or direct emission merely because its mass is small; quantify and disclose any justified cut-off and assess electronics, batteries, precious-metal contacts, and sterile packaging explicitly. | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material or component at the point it enters the reporting manufacturer's controlled production system |
| starting_condition_role | Product input with upstream production represented by a linked background or supplier-specific dataset |
| product_classification_scope | Finished CPC 48172 compensatory appliances; components and materials retain their own product identities |
| recursive_input_rule | A purchased unfinished or finished appliance in the same category is recorded as a separate product input with supplier identity and mass; its upstream production is linked once and is not recreated inside the receiving process |
| upstream_dataset_requirement | Each purchased component, material, battery, packaging item, and energy carrier must link to a geographically and technologically representative upstream dataset; proxies are disclosed and never relabelled as exact identities |
| disclosure | Declare manufacturer-gate geography, product subtype, BOM revision, component make-or-buy boundary, active/passive and worn/carried/implantable state, sterile state, allocation method, cut-offs, background dataset versions, and conditional life-cycle stages included |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `device_assembly` | Component preparation, device assembly, testing, and release | `required` | Always | Foreground production | Net mass of conforming finished appliance |
| `packaging` | Final product packaging | `required` | Always; every individual packaging component used must be added as an atomic row | Foreground production | One declared appliance sales unit |
| `sterilization` | Sterilization and maintenance of sterile state | `conditional` | Include only for appliances placed on the market sterile; include the actual validated route and add route-specific exchanges | Foreground production | Mass or count of sterile released appliance |
| `use_and_maintenance` | Operation and scheduled consumable replacement | `conditional` | Include only for cradle-to-grave scopes or a separately declared use-stage dataset | Use | Declared appliance count, duty cycle, and expected service life |
| `end_of_life` | Collection and transfer of used appliance to treatment | `conditional` | Include only when end-of-life is inside the declared system boundary | End-of-life | Mass of used appliance and separately removed cells |

### Process: Component preparation, device assembly, testing, and release (`device_assembly`)

#### Inputs

##### Product flows

###### Hearing-aid electronic module input (`hearing_aid_electronic_module`)

Record the populated hearing-aid electronic module when an electronically active hearing aid uses this purchased assembly. Other active appliance subtypes must add their exact electronic assembly as a separate row rather than reuse this hearing-aid-specific identity.

- Selected flow: Hearing aid electronic module assembly `7a71d9b8-bfb0-43e5-bf72-4d6455be5a2f`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted module mass entering assemblies that yield conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming finished appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `selhorst-et-al-2025-hearing-aid-lca`

###### ABS granulate for an in-house moulded housing (`abs_granulate`)

Record ABS granulate only when the reporting site moulds an ABS housing or other ABS appliance component. A purchased housing is instead added as its exact component product flow.

- Selected flow: Acrylonitrile-butadiene-styrene (ABS) copolymer, granulate `8f1317c1-aa51-4524-8692-74079c923e2c`
- Flow property / unit: Mass / kg
- Amount rule: measured issued ABS granulate mass net of returned unopened material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming finished appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`

###### Medical-grade silicone earpiece or dome (`silicone_earpiece_component`)

Record the finished silicone earpiece or dome only for a hearing-aid configuration that includes this component. Its TianGong UUID remains unresolved; do not substitute silicon, silica, or ferroalloy identities.

- Selected flow: Medical-grade silicone hearing-aid earpiece or dome
- Flow property / unit: Mass / kg
- Amount rule: measured component mass accepted into the declared appliance configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming finished appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `selhorst-et-al-2025-hearing-aid-lca`

###### Installed lithium-ion rechargeable button cell (`lithium_ion_rechargeable_button_cell`)

Record one lithium-ion rechargeable button-cell product exchange only when this chemistry and cell form are installed in the declared appliance. The exact TianGong UUID remains unresolved.

- Selected flow: Lithium-ion rechargeable hearing-aid button cell
- Flow property / unit: Mass / kg
- Amount rule: measured installed cell mass, with cell count and measured unit mass retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming finished appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `selhorst-et-al-2025-hearing-aid-lca`

###### Factory-supplied zinc-air primary button cell (`zinc_air_primary_button_cell_factory`)

Record zinc-air primary button cells supplied with the appliance but not included in its net mass. The exact TianGong UUID remains unresolved; zinc-manganese batteries are not accepted as a proxy.

- Selected flow: Zinc-air primary hearing-aid button cell
- Flow property / unit: Mass / kg
- Amount rule: supplied cell count multiplied by product-specific measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared appliance sales unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `selhorst-et-al-2025-hearing-aid-lca`

###### Assembly and test electricity (`assembly_electricity`)

Record electricity crossing the final-assembly and testing meter boundary. Exclude upstream electricity already embedded in purchased component datasets.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered assembly and test electricity allocated to conforming appliance output using the rule in section 7
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_energy`
- Sources: `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished compensatory appliance (`finished_compensatory_appliance`)

Record the released appliance at the manufacturer gate after all required testing and, when applicable, sterilization. Packaging and separately supplied accessories are excluded from net appliance mass.

- Selected flow: Hearing aids and other appliances which are worn or carried, or implanted in the body, to compensate for a defect or disability `702d21c4-fc45-412a-8beb-e685dd9a623a`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming finished appliance output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow amount
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `un-cpc-3-0-2025`; `eu-mdr-2017-745`

##### Waste flows

###### Rejected populated printed wiring board (`populated_pwb_reject`)

Record populated board assemblies rejected or damaged within the foreground production boundary and transferred for treatment.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred out as populated-board waste, net of documented rework returned to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_rejects`
- Sources: `selhorst-et-al-2025-hearing-aid-lca`

###### ABS injection-moulding scrap (`abs_moulding_scrap`)

Record separately collected ABS runners, sprues, and rejected mouldings transferred out of the foreground system. The TianGong UUID remains unresolved; generic plastic waste is not an exact identity.

- Selected flow: Waste ABS injection-moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: measured ABS scrap mass transferred out, net of verified in-process regrind reused in the same reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_rejects`
- Sources: `ec-pef-2021`

##### Elementary flows

### Process: Final product packaging (`packaging`)

#### Inputs

##### Product flows

###### Paperboard sales carton (`paper_box`)

Record the individual paper box containing the declared sales unit. Add inserts, manuals, films, pouches, and other packaging as separate atomic rows when present.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: measured paper-box mass multiplied by boxes used per declared appliance sales unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared appliance sales unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Sources: `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Sterilization and maintenance of sterile state (`sterilization`)

#### Inputs

##### Product flows

###### Ethylene oxide sterilant (`ethylene_oxide_sterilant`)

Record ethylene oxide only for an on-site validated ethylene-oxide sterilization route. Other sterilization agents must be added as separate exact chemical rows.

- Selected flow: Ethylene Oxide `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- Flow property / unit: Mass / kg
- Amount rule: measured sterilant mass charged to validated cycles allocated to released sterile appliance output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net sterile appliance released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sterilization_records`
- Sources: `eu-mdr-2017-745`

###### Sterilization electricity (`sterilization_electricity`)

Record metered electricity for on-site sterilization, aeration, and abatement equipment; do not include electricity already represented by an off-site sterilization supplier dataset.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to released sterile appliance output by cycle load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net sterile appliance released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sterilization_records`
- Sources: `ec-pef-2021`; `eu-mdr-2017-745`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct ethylene oxide emission to air (`ethylene_oxide_to_air`)

Record measured post-abatement ethylene oxide released directly to air from the foreground sterilization process. Do not include upstream emissions embedded in the sterilant or electricity datasets.

- Selected flow: ethylene oxide `fe0acd60-3ddc-11dd-a488-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack and fugitive ethylene oxide mass released after abatement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net sterile appliance released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sterilization_records`
- Sources: `eu-mdr-2017-745`

### Process: Operation and scheduled consumable replacement (`use_and_maintenance`)

#### Inputs

##### Product flows

###### Charging electricity (`charging_electricity`)

Record delivered electricity only for a rechargeable appliance during the declared use period. Charger losses are included when inside the meter boundary and the grid geography is declared.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured or product-specific charging energy per cycle multiplied by documented charging cycles over declared service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared appliance use cycle and expected service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario`
- Sources: `selhorst-et-al-2025-hearing-aid-lca`; `eu-mdr-2017-745`

###### Replacement zinc-air primary button cells (`zinc_air_primary_button_cells_use`)

Record replacement zinc-air primary hearing-aid button cells only for a disposable-cell configuration. The exact TianGong UUID remains unresolved.

- Selected flow: Zinc-air primary hearing-aid button cell
- Flow property / unit: Mass / kg
- Amount rule: documented replacement-cell count multiplied by product-specific measured unit mass over declared service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared appliance use cycle and expected service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario`
- Sources: `selhorst-et-al-2025-hearing-aid-lca`; `eu-mdr-2017-745`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent zinc-air primary button cells (`spent_zinc_air_button_cells`)

Record intact spent zinc-air button cells transferred from the user system to a declared collection or treatment route. The exact TianGong UUID remains unresolved; zinc scrap or slag is not an acceptable proxy.

- Selected flow: Spent zinc-air primary hearing-aid button cell
- Flow property / unit: Mass / kg
- Amount rule: documented spent-cell count multiplied by product-specific measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared appliance use cycle and expected service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario`
- Sources: `selhorst-et-al-2025-hearing-aid-lca`

##### Elementary flows

### Process: Collection and transfer of used appliance to treatment (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### Used compensatory appliance entering end-of-life (`used_compensatory_appliance`)

Record the used appliance as a specific waste input to the end-of-life system. The exact TianGong waste UUID remains unresolved; unspecified solid waste is not accepted.

- Selected flow: Used hearing aid or other compensatory appliance
- Flow property / unit: Mass / kg
- Amount rule: measured collected used-appliance mass excluding separately removed cells
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared appliance reaching end-of-life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_records`
- Sources: `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared manufacturing and sterilization operations | Subdivide product lines, meters, work orders, and sterilization loads wherever product-specific records are available before applying allocation. | `ec-pef-2021` |
| `allocation_physical_driver` | remaining shared energy, utilities, and rejects | Allocate remaining shared exchanges with a documented causal physical driver such as machine time, cycle load, or measured mass throughput; do not use revenue when a causal physical driver is available. | `ec-pef-2021` |
| `allocation_conforming_output` | assembly and packaging | Normalize foreground exchanges to conforming released appliance output; include rejects in the process that generated them and do not divide burdens by total gross input. | `ec-pef-2021` |
| `allocation_recycling_credit` | recycled content and end-of-life recovery | Report recycled input, treatment burdens, recovered material, and any substitution or credit method separately; do not claim avoided virgin production without a declared, consistently applied end-of-life method. | `ec-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_assembly_bom` | `device_assembly` | purchased components, installed cells, supplied cells, and finished appliance | approved BOM, goods receipts, scale records, production output | part identity, chemistry, supplier, accepted quantity, unit count, sampled unit mass, finished net mass, lot, configuration | reconcile approved BOM to receipts and calibrated weighing | item and kg | each BOM revision and production lot | representative reporting year | each reporting site and product configuration | sum accepted mass and normalize to conforming net appliance mass; retain count-to-mass calculation | BOM revision, supplier specification, calibration record, lot reconciliation, release record |
| `cp_assembly_energy` | `device_assembly` | assembly and test electricity | submeter, machine log, production record | meter start/end, kWh, line, machine time, conforming output mass, grid geography, voltage | read calibrated submeters or reconcile machine energy logs to utility meter | kWh and MJ | each shift or batch | representative reporting year | each assembly and test line | subtract non-production periods, allocate by causal driver, convert kWh to MJ, normalize to conforming output | meter calibration, utility invoice reconciliation, production log |
| `cp_assembly_rejects` | `device_assembly` | populated-board rejects and ABS scrap | reject log, waste scale ticket, rework record | material identity, gross reject mass, rework return mass, transfer mass, hazardous status, destination | reconcile quality rejects to weighed waste transfers and in-process reuse | kg | each transfer and production lot | representative reporting year | each reporting site | transferred waste equals rejects minus verified rework or same-period reuse; normalize to conforming output | calibrated scale, transfer note, rework record, mass-balance check |
| `cp_packaging_bom` | `packaging` | paper box and other individually added packaging | packaging specification, purchase record, scale record | component identity, material, unit mass, units per sales unit, recycled content, print specification | weigh a documented sample and reconcile use to packed sales units | item and kg | each packaging revision and production lot | representative reporting year | each packing site and sales configuration | unit mass times units used, normalized to declared appliance sales unit | packaging drawing, sample record, scale calibration, packed-unit reconciliation |
| `cp_sterilization_records` | `sterilization` | sterilant, electricity, and direct ethylene oxide release | cycle batch record, chemical issue record, electricity meter, continuous or batch emission monitoring | cycle id, load mass, released product mass, sterilant charged and recovered, kWh, stack flow, concentration, fugitive estimate, abatement status | reconcile validated cycle records, meters, chemical inventory, and post-abatement monitoring | kg and kWh | every cycle; emissions at permit or validated monitoring frequency | representative reporting year | each sterilization and abatement system | aggregate complete cycles and normalize to released sterile output; keep stack and fugitive releases explicit | sterilization validation, batch release, meter calibration, chemical mass balance, monitoring report |
| `cp_use_scenario` | `use_and_maintenance` | charging electricity, replacement cells, and spent cells | product test, charger measurement, service-life record, replacement log or declared scenario | appliance count, operating hours, charge energy, charger loss boundary, charge cycles, cell chemistry, replacement count, unit mass, service life, geography | use product-specific tests or documented user/maintenance records; identify scenario data separately | item, kWh, MJ, kg, hour, year | each test or maintenance event | declared expected service life | declared user geography and appliance configuration | scale measured per-cycle exchanges by documented cycles and appliance count; reconcile supplied and spent disposable cells | test report, charger meter calibration, service-life statement, replacement record, scenario justification |
| `cp_end_of_life_records` | `end_of_life` | used appliance collection | collection receipt, scale record, dismantling record | appliance subtype, configuration, gross mass, removed cell mass, collection geography, destination, treatment route | weigh collected appliances and separately removed cells at custody transfer | kg | each collection or transfer | declared end-of-life scenario period | each collection geography and route | aggregate appliance mass net of separately recorded cells and normalize to appliances reaching end-of-life | calibrated scale, chain-of-custody record, treatment acceptance record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_mass` | component, packaging, and cell rows using item records | mass_kg = accepted_or_used_item_count × measured_mean_unit_mass_kg; sample and configuration must match the reporting product | item count, product-specific unit-mass sample | component mass in kg per reference flow | `ec-pef-2021` |
| `calc_shared_energy` | assembly or sterilization energy not directly metered by product | product_energy_MJ = shared_energy_kWh × 3.6 × product_causal_driver / total_causal_driver | shared meter reading, machine time or cycle load, conforming output | allocated MJ per reference flow or process output | `ec-pef-2021` |
| `calc_ethylene_oxide_release` | direct ethylene oxide emission to air | released_mass = integrated post-abatement concentration × dry gas volume + documented fugitive release; use consistent temperature and pressure reference conditions | concentration, gas flow or volume, monitoring interval, fugitive estimate | kg ethylene oxide to air per sterile process output | `eu-mdr-2017-745` |
| `calc_use_electricity` | rechargeable appliance use | lifetime_electricity_MJ = measured_charge_energy_kWh × charge_cycles × appliance_count × 3.6 | measured energy per charge, cycles, count, service life | MJ electricity per declared service-life functional unit | `selhorst-et-al-2025-hearing-aid-lca` |
| `calc_replacement_cells` | disposable zinc-air cell use | supplied_or_spent_mass_kg = documented_cell_count × product-specific_measured_unit_mass_kg | cell count, unit mass, appliance count, service life | kg cells per declared service-life functional unit | `selhorst-et-al-2025-hearing-aid-lca` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all inventory rows | Match product subtype, chemical identity, flow type, product state, property, and unit; do not replace unresolved exact identities with broad or related flows. | approved BOM, supplier specification, TianGong state-100 UUID audit, unresolved-flow register |
| `dq_mass_balance` | assembly, packaging, and end-of-life | Reconcile accepted material and component mass to conforming output, returned material, rework, rejects, packaging, and transferred waste for the same period. | signed mass-balance worksheet, calibrated scale records, transfer notes |
| `dq_temporal` | all foreground records | Use a representative continuous 12-month period where available; otherwise disclose the shorter period, seasonality, campaigns, and extrapolation. | dated meter extracts, production calendar, invoices, batch logs |
| `dq_technology` | assembly, sterilization, power system, and use | Record product configuration, BOM revision, cell chemistry, manufacturing line, sterilization route and abatement, charger technology, and duty cycle; do not combine incompatible technologies without weighted records. | engineering change record, process specification, validation report, product test |
| `dq_geography` | electricity, supply chain, use, and end-of-life | State manufacturer site, grid mix geography, supplier geography where known, sale/use geography, and end-of-life route geography. | site metadata, utility contract, supplier declaration, scenario record |
| `dq_completeness` | all inventory | Screen the complete product-specific BOM and all foreground meters, chemicals, direct emissions, rejects, packaging, accessories, and conditional stages; quantify and justify exclusions. | completeness checklist cross-referenced to BOM, meters, permits, and waste register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product category and reference flow | Confirm the declared product is a finished worn, carried, or implantable compensatory appliance and that the reference UUID, mass property, and kg unit are unchanged. | `un-cpc-3-0-2025` |
| `validate_qualifiers` | foreground data package | Fail completeness when appliance subtype, intended purpose, active/passive state, worn/carried/implantable state, unit count, mass, configuration, power chemistry, sterile state, geography, service life, or boundary is missing. | `eu-mdr-2017-745`; `ec-pef-2021` |
| `validate_bom` | production inventory | Confirm every BOM component and every packaging item is represented by an atomic inventory row or a disclosed, quantified exclusion; verify that included accessories are not hidden in the reference-product mass. | `ec-pef-2021`; `selhorst-et-al-2025-hearing-aid-lca` |
| `validate_conditions` | conditional rows and processes | Confirm that battery chemistry, silicone earpiece, ABS moulding, sterilization route, use, and end-of-life rows are included only when their explicit conditions apply and that applicable rows are not omitted. | `eu-mdr-2017-745`; `selhorst-et-al-2025-hearing-aid-lca` |
| `validate_no_double_count` | electricity, purchased components, off-site services, and waste | Confirm foreground exchanges exclude burdens already embedded in linked supplier datasets and that off-site sterilization is not also represented as on-site sterilant and energy. | `ec-pef-2021` |
| `validate_allocation` | shared operations | Confirm subdivision was attempted first and every remaining allocation uses a recorded causal physical driver with numerator, denominator, and period. | `ec-pef-2021` |
| `validate_mass_balance` | assembly and end-of-life | Confirm input, conforming output, rework, reject, separately supplied accessory, packaging, and waste masses reconcile within a declared tolerance; explain any imbalance. | `ec-pef-2021` |
| `validate_range_status` | important inventory flows | Confirm foreground values come from the declared collection protocols. Treat external range evidence as unresolved until at least two independent, boundary-compatible original sources support a synthesized interval. | `ec-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground production dataset; conditional stage datasets may be published separately and linked |
| downstream_use | `secondary_dataset` or `background_dataset` for a declared appliance configuration and geography; input to a lifecyclemodel only when conditional stages and reference-flow conversion are explicit |
| allowed_use | Modelling the named appliance subtype, BOM revision, production route, sterile state, manufacturer-gate geography, power system, and declared time period; scenario-specific use or end-of-life only where those stages are included |
| excluded_use | Generic use for unrepresented appliance subtypes, implantable versus non-implantable substitution, different battery chemistry, different sterile state, or comparative claims without equivalent function, service life, boundary, and data quality |
| required_metadata | canonical PCR id; product and reference-flow UUIDs; appliance subtype and intended purpose; active/passive and worn/carried/implantable state; unit count and net mass; BOM revision; configuration and accessories; power chemistry; sterile state and method; site and market geography; technology; reporting period; service life; boundary; allocation; cut-offs; background dataset versions |
| required_quality_disclosure | primary-data share; meter and mass coverage; BOM completeness; unresolved UUIDs; proxy datasets; allocation drivers; mass-balance result; temporal, technological, and geographic representativeness; excluded flows and stages; uncertainty; range-evidence gaps |
| update_trigger | Change in intended purpose, product subtype, BOM or accessory configuration, cell chemistry, housing material, electronic module, assembly line, sterilization route or abatement, packaging, supplier geography, grid mix, service-life claim, use scenario, end-of-life route, or evidence that materially changes inventory results |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official CPC 48172 classification identity and English title |
| `ec-pef-2021` | `official_guidance` | European Commission, Annex I, Product Environmental Footprint Method, Commission Recommendation (EU) 2021/2279, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (retrieved 2026-09-06) | Functional-unit structure, product-specific BOM and manufacturing data, life-cycle stages, allocation, cut-off, collection, and end-of-life modelling rules |
| `eu-mdr-2017-745` | `standard` | Regulation (EU) 2017/745 of the European Parliament and of the Council on medical devices, consolidated official text, https://eur-lex.europa.eu/eli/reg/2017/745/oj/eng (retrieved 2026-09-06) | Intended-purpose, implantable-device, sterile-state, sterilization-method, identification, performance, and expected-lifetime qualifiers |
| `selhorst-et-al-2025-hearing-aid-lca` | `literature` | Selhorst, R. da R.; Alves, C.; Li, C.; Silva, A. (2025), Life Cycle Assessment of Hearing Aid Devices: Environmental Impact Analysis and Improvement Opportunities, Recycling 10(6), 219, https://doi.org/10.3390/recycling10060219 (retrieved 2026-09-06) | Hearing-aid-specific process decomposition and primary-data methods for BOM, component mass, manufacturing energy, packaging, distribution, use consumables, and end-of-life |
