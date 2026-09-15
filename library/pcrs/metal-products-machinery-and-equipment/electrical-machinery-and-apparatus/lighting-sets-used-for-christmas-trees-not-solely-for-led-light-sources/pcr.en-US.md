---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.lighting-sets-used-for-christmas-trees-not-solely-for-led-light-sources
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Lighting sets used for Christmas trees, not solely for LED light sources

## 1. Scope and Applicability

This PCR applies to electrical lighting chains marketed for use on Christmas trees when the finished set contains at least one non-LED light source. It covers all-incandescent sets and mixed sets combining incandescent and LED modules, whether intended for indoor or outdoor use and whether connected in series, parallel, or a series/parallel combination. The product supplied at the factory gate includes its cable, lamp holders, light-source modules, plug or extra-low-voltage power supply when supplied, controller when supplied, and sales packaging.

Sets designed to use only LED light sources, general-purpose luminaires, rope lights, replacement lamps sold separately, Christmas trees, batteries sold separately, and decorative products without an electrical lighting function are excluded. The mandatory production boundary is cradle-to-factory-gate assembly and packaging from received components. Use and end-of-life are conditional modules included only when the study goal requires a lifecycle model.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.lighting-sets-used-for-christmas-trees-not-solely-for-led-light-sources |
| classification_refs | CPC 3.0: 46532, exact |
| covered_products | Christmas-tree lighting chains containing at least one non-LED light source, including all-incandescent and mixed incandescent/LED sets |
| excluded_products | Lighting sets designed solely for LED light sources; general luminaires; rope lights; separately sold replacement lamps; non-electrical decorations; Christmas trees |
| representative_product | A packaged mains-powered or extra-low-voltage Christmas-tree lighting chain with insulated copper cable and miniature incandescent lamps; LED modules and a controller may also be present |
| production_route | Receipt of finished components, cable cutting and termination, lamp-holder and source-module fitting, electrical test, final assembly, and packaging |
| market_state | Finished, tested, packaged lighting set at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide decorative electric lighting on a Christmas tree using a lighting chain that is not solely LED |
| How much | One complete lighting set with its supplied electrical accessories and sales packaging |
| How well | Meets the declared rated voltage, input power, circuit arrangement, indoor/outdoor rating, ingress-protection claim where applicable, lamp count, light-source technology mix, and applicable safety conformity |
| How long or cycle | One declared product service life, with rated or warranted operating life and expected annual operating hours stated when use is modelled |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished Christmas-tree lighting set, not solely LED |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | total cable length; number of light sources; count and technology of non-LED light sources; LED module count when present; replaceable or non-replaceable source construction; series, parallel, or series/parallel arrangement; rated input voltage; rated input power; mains-direct or extra-low-voltage supply; indoor or outdoor rating; ingress-protection rating when claimed; controller functions when present; total product mass excluding and including packaging; packaging composition; production geography and reference year; declared service life and operating-hours scenario when use is modelled |

When constructing a foreground data package, all required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_count` | reference product | Number of items | Item(s) | Normalize the dataset to exactly one complete saleable lighting set; state the number of sets represented by each production record before normalization. |
| `mu_component_mass` | component and packaging inputs | Mass | kg | Record net mass entering the model for each separately identified component or package; do not substitute purchase count unless a measured representative mass per item and the counted quantity are retained. |
| `mu_electricity_energy` | assembly and use electricity | Net calorific value | MJ | Preserve metered electricity and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose whether transformer and standby losses are included. |
| `mu_use_calculation` | conditional use phase | Net calorific value | MJ | Calculate electricity from declared measured rated input power, operating hours, duty cycle, and service life; model each declared mode separately before summing. |

## 5. System Boundary

The required foreground boundary starts when identified lighting-chain components and packaging enter the reporting facility and ends when one tested, packaged set leaves the factory gate. Supplier production of cable, lamps, modules, holders, plugs, power supplies, controllers, boxes, and bags is represented by compatible upstream datasets and must not be repeated as foreground manufacture unless the reporting facility actually performs it. Use and end-of-life are separate conditional modules.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_category_boundary` | product eligibility | Include only a Christmas-tree lighting chain containing at least one non-LED light source; reject a set designed solely for LED sources from this PCR. | `un-cpc-3-0-structure-2025` |
| `sb_production_boundary` | required cradle-to-gate dataset | Include received-component transport when within the declared study boundary, cable cutting and termination, source and holder fitting, controller or power-supply fitting when present, electrical testing, rework, rejects, packaging, and site energy attributable to the product. | `iec-60598-2-20-2022` |
| `sb_upstream_components` | purchased components | Link each received component to a compatible upstream product dataset and prevent double counting of component manufacture. |  |
| `sb_optional_lifecycle` | use and end-of-life modules | Include use and end-of-life only when required by the declared study goal; retain their assumptions separately from the mandatory production result. | `eu-weee-directive-2012-19` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified, quality-accepted lighting-chain components and packaging at the reporting facility receiving point |
| starting_condition_role | Foreground assembly starting condition; upstream component production remains linked background supply |
| product_classification_scope | Christmas-tree lighting sets containing at least one non-LED light source; solely LED sets are outside scope |
| recursive_input_rule | If a complete lighting set in this same category enters for repacking, rework, or bundling, record it once as a same-category product input and do not recursively expand it inside this foreground assembly dataset; disclose the upstream dataset used |
| upstream_dataset_requirement | Use geography-, technology-, material-, and time-representative datasets for every received component and packaging flow; disclose proxies and unrepresented mass |
| disclosure | Declare facility location, reporting period, purchased-versus-made component boundary, product configuration, reference amount, cut-off decisions, rework treatment, packaging boundary, and whether use or end-of-life modules are included |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_assembly_and_test` | Cable preparation, lighting-set assembly, electrical test, and rework | `required` | Always included | Foreground production | 1 saleable finished lighting set |
| `packaging` | Sales packaging | `required` | Always included for the factory-gate reference product | Foreground packaging | 1 packaged finished lighting set |
| `use_phase` | Electricity consumption during declared use | `conditional` | Include only for lifecycle studies with a declared operating scenario | Downstream use | 1 lighting set over its declared service life |
| `end_of_life` | Collection of the discarded lighting set | `conditional` | Include only when end-of-life lies within the study boundary | Downstream end-of-life | 1 discarded lighting set |

### Process: Cable preparation, lighting-set assembly, electrical test, and rework (`final_assembly_and_test`)

#### Inputs

##### Product flows

###### Insulated copper lighting-chain cable (`insulated_copper_cable_input`)

Record the measured mass of insulated copper cable consumed, including cable in saleable sets and attributable cutting loss.

- Selected flow: Insulated copper electrical cable for lighting chain
- Flow property / unit: Mass / kg
- Amount rule: measured net cable input allocated to saleable output and attributable rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Miniature incandescent lamps (`incandescent_lamp_input`)

Record all miniature incandescent lamps entering assembly. At least one non-LED light source must remain in the finished reference product.

- Selected flow: Miniature incandescent electric lamp
- Flow property / unit: Mass / kg
- Amount rule: measured mass of accepted and installed lamps attributable to one finished set
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `un-cpc-3-0-structure-2025`

###### LED modules for a mixed-source set (`led_module_input`)

Record LED modules only when the finished set combines LED and non-LED light sources. Do not use this row for a solely LED set.

- Selected flow: LED module `f0e13a6e-6380-4372-98a0-899623339d91`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of LED modules installed in the mixed-source finished set; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 complete mixed-source finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Thermoplastic lamp holders (`lamp_holder_input`)

Record the measured mass of moulded thermoplastic lamp holders or sockets installed in the set.

- Selected flow: Thermoplastic electric lamp holder for lighting chain
- Flow property / unit: Mass / kg
- Amount rule: measured mass installed in saleable output and attributable rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Household mains plug (`mains_plug_input`)

Record the measured mass of the mains plug when a mains-direct plug is supplied as part of the set.

- Selected flow: Household mains electrical plug
- Flow property / unit: Mass / kg
- Amount rule: measured mass of the supplied mains plug; not applicable when the set has no mains plug
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Extra-low-voltage power supply (`power_supply_input`)

Record the measured mass of the AC/DC power supply when supplied with an extra-low-voltage lighting set.

- Selected flow: Extra-low-voltage AC/DC power supply adapter
- Flow property / unit: Mass / kg
- Amount rule: measured mass of the supplied power supply; not applicable when no separate power supply is supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Electronic lighting controller (`lighting_controller_input`)

Record the measured mass of the electronic controller when the finished set provides flashing, dimming, sequencing, timing, or similar control.

- Selected flow: Electronic lighting controller assembly
- Flow property / unit: Mass / kg
- Amount rule: measured controller mass; not applicable when the finished set has no controller
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Assembly and electrical-test electricity (`electricity_assembly_input`)

Record electricity consumed by cable preparation, assembly, electrical testing, rework, and directly attributable support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented allocation from a facility meter, converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished Christmas-tree lighting set (`reference_product_output`)

Record saleable sets that passed the declared electrical and visual acceptance tests. This is the reference product output.

- Selected flow: Finished Christmas-tree lighting set, not solely LED
- Flow property / unit: Number of items / Item(s)
- Amount rule: exactly 1 complete saleable set after normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_outputs`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Insulated cable offcuts (`cable_offcut_waste`)

Record composite insulated copper cable offcuts leaving the assembly process as waste; do not record recovered clean copper under this row.

- Selected flow: Waste insulated copper electrical cable offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the assembly boundary as cable offcut waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_outputs`
- Sources:

###### Defective finished lighting sets (`defective_set_waste`)

Record fully or substantially assembled lighting sets discarded after failed test and not reworked into saleable output.

- Selected flow: Defective Christmas-tree lighting set manufacturing waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass of defective sets sent to waste treatment, excluding successfully reworked units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 complete finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_outputs`
- Sources:

##### Elementary flows

### Process: Sales packaging (`packaging`)

#### Inputs

##### Product flows

###### Corrugated board box (`corrugated_box_input`)

Record the net mass of each corrugated board box supplied with the reference product.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured box mass supplied with one finished set
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 packaged finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources:

###### Polyethylene packaging bag (`polyethylene_bag_input`)

Record the net mass of the polyethylene bag when one is supplied around or within the sales package.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: measured bag mass supplied with one finished set; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 packaged finished lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Electricity consumption during declared use (`use_phase`)

#### Inputs

##### Product flows

###### Use-phase electricity (`electricity_use_input`)

Calculate electricity only for a declared operating scenario, using measured rated input power and declared operating time. State geography, grid dataset, service life, duty cycle, controller mode, and transformer or standby losses.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: rated input power in kW × operating hours × duty cycle × 3.6 MJ/kWh over declared service life
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 lighting set over the declared service life
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_scenario`
- Sources: `iec-60598-2-20-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Collection of the discarded lighting set (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### Discarded lighting set (`end_of_life_set_waste`)

Record the discarded product as waste electrical and electronic equipment when end-of-life lies within the study boundary. Packaging waste is not included in this row.

- Selected flow: Waste electrical and electronic equipment `631c740a-468f-41e8-9513-72bb25121958`
- Flow property / unit: Mass / kg
- Amount rule: measured product mass excluding packaging, adjusted by the declared collection rate when the scenario does not collect all discarded sets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 discarded lighting set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `eu-weee-directive-2012-19`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | shared assembly and packaging operations | Subdivide or submeter product-specific operations wherever records permit before applying an allocation. |  |
| `al_shared_operations` | shared electricity and support operations | When subdivision is not possible, allocate shared burdens using a documented physical driver causally related to the operation, such as machine time, tested-set count, or measured throughput; do not use revenue unless no defensible physical driver exists. |  |
| `al_rework_and_rejects` | rework and rejected products | Assign rework energy and consumed components to the production lot that caused them; exclude successfully reworked units from waste output and include unrecovered defective sets as waste. |  |
| `al_recycling` | recyclable production waste and end-of-life material | Report waste treatment and any recycling credit separately. Do not subtract an avoided-product credit inside the foreground inventory unless the declared study method requires it, in which case disclose the method and substituted product. | `eu-weee-directive-2012-19` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `final_assembly_and_test` | received components installed or lost | approved bill of materials, purchase receipts, issue records, and representative component weighing | component identity; supplier; material or technology; units issued; units returned; measured unit mass; product configuration; accepted output count | Reconcile BOM and stock issues to the reporting lot and verify representative masses on calibrated scales | kg and Item(s) | Each product configuration and production lot | Complete reporting period, normally at least 12 consecutive months or the full campaign | All facilities producing the declared reference product | Sum net issued mass by atomic component and divide by saleable-set output; retain losses in the applicable waste row | BOM revision, supplier specification, scale calibration, stock reconciliation, and lot records |
| `cp_assembly_energy` | `final_assembly_and_test` | assembly and test electricity | submeter or facility electricity meter with allocation record | meter start and end; kWh; equipment scope; operating time; tested-set count; allocation driver; transformer or standby inclusion | Prefer product-line submetering; otherwise reconcile to facility invoices and allocate with a documented physical driver | kWh, converted to MJ | Monthly and each production campaign | Same period as production output | All assembly and test operations in the declared boundary | Sum attributable kWh, convert to MJ, and divide by saleable-set output | Meter calibration or invoice reconciliation and allocation worksheet |
| `cp_production_outputs` | `final_assembly_and_test` | saleable output and manufacturing wastes | production count, test log, rework log, and waste scale ticket | produced count; passed count; reworked count; rejected count; waste identity; gross and tare mass; treatment destination | Reconcile test disposition to production counts and weigh each segregated waste stream | Item(s) and kg | Each lot; wastes at each shipment | Same period as component and energy records | All included assembly facilities | Normalize passed output to one set; divide each net waste mass by passed-set count | Test records, rework disposition, calibrated scale evidence, and waste transfer note |
| `cp_packaging_bom` | `packaging` | sales packaging supplied | packaging BOM, supplier specification, and representative weighing | package identity; material; grade; recycled content; unit mass; units per set; supplier | Weigh each packaging component and reconcile count per finished set | kg and Item(s) | Each packaging specification change and representative lot | Same period as reference product | Packaging applied to the declared product | Multiply verified unit mass by units per set and normalize to one packaged set | Packaging drawing, supplier specification, scale calibration, and BOM revision |
| `cp_use_scenario` | `use_phase` | electricity during use | product electrical test and declared scenario | measured input power by mode; operating hours per year; duty cycle; service life; transformer losses; standby power; geography; grid dataset | Measure input power for the declared configuration and combine it with an explicitly named operating scenario | W, h, years, and MJ | Each product configuration and scenario revision | Measurement date and scenario reference year stated | Declared market and use geography | Sum mode-specific kW × hours × duty cycle, multiply by service years, and convert kWh to MJ | Calibrated power measurement, rated label, scenario rationale, and calculation worksheet |
| `cp_end_of_life_scenario` | `end_of_life` | discarded electrical equipment | product weighing and collection/treatment scenario | product mass excluding packaging; collection rate; treatment route; geography; reference year | Weigh the product and apply only a documented scenario-specific collection rate | kg and fraction | Each product configuration and scenario revision | Scenario reference year stated | Declared market and collection geography | Product mass × declared collection rate per discarded set | Scale calibration, scenario source, collection-system description, and treatment route |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all production inventory rows | normalized amount = reporting-period attributable amount ÷ saleable finished-set count | atomic input, energy, or waste amount; passed-set count | amount per 1 finished lighting set |  |
| `calc_component_reconciliation` | component inputs | net component input = opening stock + receipts − closing stock − documented returns; reconcile net input to product mass, waste, and inventory change | stock, receipts, returns, product mass, waste mass | reconciled component mass |  |
| `calc_electricity_mj` | electricity rows | electricity in MJ = metered or calculated electricity in kWh × 3.6 | kWh | MJ |  |
| `calc_use_electricity` | `electricity_use_input` | MJ = sum over declared modes of input power in kW × operating hours × duty cycle × service years × 3.6 | measured power, hours, duty cycle, service life | use-phase electricity in MJ per set | `iec-60598-2-20-2022` |
| `calc_eol_waste` | `end_of_life_set_waste` | collected waste mass = product mass excluding packaging × declared collection rate | product mass and collection rate | kg of waste electrical and electronic equipment per discarded set | `eu-weee-directive-2012-19` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and components | Retain model number, BOM revision, source-technology mix, lamp count, circuit arrangement, rated voltage and power, cable length, indoor/outdoor rating, and supplied accessories for each reported configuration. | Product specification, label photograph, BOM, and test record |
| `dq_temporal` | foreground production | Component, output, waste, and energy records must cover the same period; disclose campaign data shorter than 12 months and any seasonal representativeness limitation. | Dated source records and coverage reconciliation |
| `dq_completeness` | cradle-to-gate inventory | Reconcile all component and packaging mass to saleable product, manufacturing waste, documented returns, and inventory change; quantify excluded mass and justify every cut-off. | Mass reconciliation and cut-off register |
| `dq_measurement` | mass, count, and electricity | Use calibrated instruments or reconciled commercial records; retain conversion factors and uncertainty or allocation evidence. | Calibration certificates, invoices, meter records, and calculation worksheets |
| `dq_background` | upstream datasets | Document geography, technology, reference year, material grade, and proxy status for each component and packaging dataset. | Background-dataset mapping table |
| `dq_scenarios` | use and end-of-life | Keep production results separate from conditional scenario results and disclose every power, duty-cycle, lifetime, collection, and treatment assumption. | Scenario record and module-separated result table |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_category_eligibility` | product identity | Confirm that at least one installed light source is non-LED and that the product is marketed as a Christmas-tree lighting set; reject solely LED lighting sets. | `un-cpc-3-0-structure-2025` |
| `vr_reference_flow` | reference flow | Confirm exactly one complete saleable set, including supplied accessories and sales packaging, and all required qualifiers. | `iec-60598-2-20-2022` |
| `vr_inventory_balance` | production inventory | Confirm component and packaging mass reconciliation, passed-set count, rework disposition, waste mass, and any excluded mass for the same reporting period. |  |
| `vr_atomic_flows` | all inventory rows | Confirm that each row represents one atomic product, waste, or elementary exchange and that no row combines utilities, materials, packaging, or wastes. |  |
| `vr_electricity` | electricity rows | Confirm that electricity is reported in MJ, that each kWh conversion uses 3.6 MJ/kWh, and that grid geography and losses are disclosed. |  |
| `vr_optional_modules` | use and end-of-life | If included, confirm that use and end-of-life assumptions are scenario-specific, separately reported, and not embedded in the cradle-to-gate result. | `eu-weee-directive-2012-19` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset suitable for publication as a `secondary_dataset` or `background_dataset` after review; optional use and end-of-life modules remain separate lifecyclemodel projections |
| downstream_use | Product-footprint, supply-chain, and lifecycle models for Christmas-tree lighting sets containing at least one non-LED source |
| allowed_use | The declared product configuration, production geography, technology, reporting period, and explicitly documented lifecycle scenarios |
| excluded_use | Solely LED lighting sets; general luminaires; products with materially different source technology, voltage class, packaging, geography, or production route without representativeness review |
| required_metadata | PCR id; product model and BOM revision; reference amount; all required qualifiers; facility and market geography; reporting period; boundary; allocation; cut-offs; source-technology mix; packaging; upstream dataset mapping; optional-module status |
| required_quality_disclosure | Primary-data share; temporal coverage; mass and energy reconciliation; measurement and allocation evidence; proxy datasets; excluded mass; uncertainty limitations; use and end-of-life assumptions when present |
| update_trigger | BOM or source-technology change; change between mains-direct and extra-low-voltage supply; rated-power or controller change; cable or packaging redesign; supplier or geography change; new production technology; reporting data older than the declared validity period; material change to use or end-of-life scenarios |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 46532 product identity and exclusion of sets solely using LED light sources |
| `iec-60598-2-20-2022` | `standard` | IEC 60598-2-20:2022, Luminaires — Part 2-20: Particular requirements — Lighting chains, https://webstore.iec.ch/en/publication/73916 (retrieved 2026-09-04) | Lighting-chain identity; series, parallel, and series/parallel configurations; indoor/outdoor application; rated-voltage and product-qualification fields |
| `eu-weee-directive-2012-19` | `standard` | Directive 2012/19/EU of the European Parliament and of the Council on waste electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012L0019 (retrieved 2026-09-04) | Conditional end-of-life scope, separate collection, and waste electrical/electronic equipment treatment disclosure |
