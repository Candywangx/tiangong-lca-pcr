---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.optical-fibre-cables-made-up-of-individually-sheathed-fibres
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Optical fibre cables made up of individually sheathed fibres

## 1. Scope and Applicability

This PCR applies to factory production of optical fibre cables made up of individually sheathed fibres. It covers cable designs for communication, data, control, or image transmission, whether or not the finished cable also incorporates electric conductors or is fitted with optical-fibre connectors. The foreground boundary begins when purchased optical fibres, cable compounds, strength members, optional conductors or connectors, and packaging enter the cable-manufacturing site and ends with tested cable wound and protected for dispatch at the factory gate.

The PCR includes fibre colouring where performed on site, fibre buffering or micromodule formation, core grouping or stranding, water blocking, strength-member placement, sheath extrusion, marking, optional conductor assembly, optional connector fitting, testing, winding, and dispatch packaging. It excludes manufacture of bare optical fibres, manufacture of upstream polymers, metals, glass reinforcement, connectors, and packaging, installation, network operation, maintenance, removal, and end-of-life treatment. Upstream inputs remain linked product flows and require geographically and technologically representative supplier or background datasets.

Cable construction, fibre count and type, sheath formulation, fire-performance class, water-blocking system, reinforcement or armour, incorporated conductors, connector state, application environment, and delivery form must be declared. This authored candidate provides data-production rules; it does not prescribe an externally inferred numeric range where two independent, boundary-compatible original sources have not been verified.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.optical-fibre-cables-made-up-of-individually-sheathed-fibres |
| classification_refs | CPC 3.0: 46360 (exact classification context) |
| covered_products | Optical fibre cables made up of individually sheathed fibres; products may incorporate electric conductors or be fitted with optical-fibre connectors |
| excluded_products | Bare optical fibres; optical fibre bundles and cables whose fibres are not individually sheathed; electric-only wire or cable; separately supplied connectors; installed cable systems and network services |
| representative_product | Tested, saleable optical fibre communication cable wound on its dispatch drum at the factory gate |
| production_route | Fibre preparation and buffering or micromodule formation, core assembly, water blocking, reinforcement, sheath extrusion, marking, testing, optional conductor or connector integration, and dispatch packaging |
| market_state | Finished cable at factory gate, declared by mass and accompanied by its dispatch packaging inventory |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished optical fibre cable capable of transmitting declared optical signals while meeting the declared mechanical, environmental, and fire-performance requirements |
| How much | 1 kg of saleable cable at the factory gate, excluding dispatch packaging mass |
| How well | Meets the declared optical attenuation, fibre type and count, tensile, crush, impact, bending, temperature, water-blocking, and applicable fire-performance specifications |
| How long or cycle | One manufacturing output at factory gate; service life is not normalized in this cradle-to-gate PCR |
| reference_flow_link | One kilogram of tested saleable cable output after process loss, with length-per-kilogram and fibre-kilometres disclosed for functional comparison |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Optical fibre cable made up of individually sheathed fibres |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cable construction and application; fibre type and count; fibre-kilometres and cable length per kg; sheath polymer and fire-performance class; water-blocking and reinforcement system; metallic armour or incorporated conductor type and mass; connector state and interface; factory geography and technology; dispatch packaging; reference product UUID unresolved |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference flow comment, product description, or an equivalent field. The mass reference supports material and manufacturing inventory normalization; length and fibre-kilometres must also be disclosed because transmission function is construction-dependent.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference cable output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net saleable cable mass without dispatch packaging and normalize all inventory rows to 1 kg; retain cable length and fibre count so cable-kilometres and fibre-kilometres can be reconstructed. |
| `packaging_separation` | Wooden drum, steel band, and protective film | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each dispatch-packaging component separately and do not include its mass in the 1 kg reference cable output. |
| `electricity_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter reading in kWh and convert to MJ using 1 kWh = 3.6 MJ; do not add upstream grid emissions as foreground elementary exchanges. |
| `material_net_consumption` | Cable materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calculate consumed mass as opening stock plus receipts minus closing stock minus returned material; separately measured internal regrind remains inside the foreground boundary and is not counted again as a new input. |
| `waste_route_measurement` | Manufacturing scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each chemically or physically distinct waste at the point it leaves the foreground boundary and disclose moisture, contamination, and contracted treatment route. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased optical fibre, cable compounds, strength members, optional conductors or connectors, and dispatch-packaging components received at the manufacturing site |
| starting_condition_role | Upstream product inputs to foreground cable manufacture |
| product_classification_scope | Optical fibre cables made up of individually sheathed fibres, including designs assembled with electric conductors or fitted with connectors |
| recursive_input_rule | If a purchased input is itself an in-scope finished optical fibre cable, record it once as a product input with an upstream dataset and do not recursively reproduce its manufacturing inventory in this foreground process. |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise use geography-, technology-, recycled-content-, and product-state-representative background datasets for every purchased input. |
| disclosure | Declare factory geography, reporting period, cable construction, included operations, supplier-data coverage, cut-offs, internal recycling, treatment routes, and all deviations from the required boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground system | Include all on-site operations from receipt of materials through testing, winding, and dispatch packaging; installation, use, and end-of-life remain outside this cradle-to-gate foreground boundary. | `cablescom-optical-fibre-duct-cable-epd-2022`; `iec-tr-62839-1-2025` |
| `boundary_variant_components` | Product variants | Include incorporated conductors and fitted connectors only when present in the declared reference product, and record each as its own atomic exchange. | `unsd-industrial-commodity-statistics-yearbook-2014` |
| `boundary_upstream` | Purchased products | Link upstream production and inbound supply to representative datasets; do not report upstream dataset emissions as direct foreground elementary flows. | `cablescom-optical-fibre-duct-cable-epd-2022` |
| `boundary_capital_goods` | Capital goods | Exclude buildings and production equipment unless the study goal, applicable program rule, or documented significance assessment explicitly requires them; disclose the decision. | `cablescom-optical-fibre-duct-cable-epd-2022` |

## 6. Process Inventory Structure

The foreground process aggregates the physically connected cable line to avoid creating unaudited database identities for internal micromodules, cable cores, or unfinished cable. Facilities must retain submeter or production-step records where available and disclose whether fibre preparation, buffering, core assembly, sheath extrusion, connector fitting, testing, and packaging were performed on site.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cable_manufacturing_and_packaging` | Optical fibre cable manufacturing, testing, winding, and packaging | required | Always included for an in-scope factory-gate cable | Foreground production | 1 kg tested saleable optical fibre cable output, excluding dispatch packaging mass |

### Process: Optical fibre cable manufacturing, testing, winding, and packaging (`cable_manufacturing_and_packaging`)

#### Inputs

##### Product flows

###### Silica optical fibre (`optical_fibre`)

Record the mass of purchased silica optical fibres entering the cable line, including applied primary coatings received with the fibre when they cannot be separated by supplier data.

- Selected flow: Silica optical fibre for telecommunications cable
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass consumed in saleable and rejected cable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Polybutylene terephthalate granules (`pbt_granules`)

Record PBT granules consumed when fibre buffers, loose tubes, or micromodules are extruded on site.

- Selected flow: Polybutylene terephthalate granules
- Flow property / unit: Mass / kg
- Amount rule: Measured net PBT mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Water-blocking polyester yarn (`water_blocking_polyester_yarn`)

Record polyester yarn impregnated or coated to provide the declared cable water-blocking function. Use `not_applicable` only for a design with no such yarn.

- Selected flow: Water-blocking polyester yarn
- Flow property / unit: Mass / kg
- Amount rule: Measured net yarn mass consumed; zero only when absence is demonstrated by the bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### High-density polyethylene sheath material (`hdpe_material`)

Record primary-form HDPE compounded for outer-sheath extrusion; disclose grade, recycled content, additives, and supplier.

- Selected flow: High-density polyethylene material, HDPE `ef7b2077-b2c6-49e3-b9d7-7fce4d3f27a0`
- Flow property / unit: Mass / kg
- Amount rule: Measured net HDPE compound mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Glass-fibre-reinforced polymer strength member (`glass_reinforced_polymer`)

Record glass-fibre-reinforced polymer rods or equivalent strength members incorporated into the cable; disclose resin system and geometry.

- Selected flow: glass fibre reinforced polymer `dab98d11-c76c-4d40-bac9-a3d082f1fb36`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass incorporated plus separately recorded production offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Aramid reinforcement yarn (`aramid_yarn`)

Record aramid yarn only for cable constructions that incorporate it as tensile reinforcement.

- Selected flow: Aramid reinforcement yarn
- Flow property / unit: Mass / kg
- Amount rule: Measured net aramid yarn mass consumed; zero only when absence is demonstrated by the bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Insulated copper conductor (`insulated_copper_conductor`)

Record the mass of an insulated copper conductor only when it is assembled into the declared optical fibre cable.

- Selected flow: Insulated copper conductor for hybrid optical fibre cable
- Flow property / unit: Mass / kg
- Amount rule: Measured mass incorporated into the reference cable; zero only when the product specification confirms no electric conductor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `unsd-industrial-commodity-statistics-yearbook-2014`

###### Optical-fibre cable connector (`optical_fibre_connector`)

Record finished optical-fibre connectors only when fitted at the manufacturing site before the cable crosses the factory gate.

- Selected flow: Connectors for optical fibres, optical fibre bundles or cables `5f90c9f6-a484-428c-8846-89bece3a62ec`
- Flow property / unit: Mass / kg
- Amount rule: Measured connector mass incorporated into the reference cable; zero only when the cable is supplied unterminated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `unsd-industrial-commodity-statistics-yearbook-2014`

###### Cable marking ink (`cable_marking_ink`)

Record the specific ink formulation consumed for sheath or tube identification and disclose carrier chemistry and hazardous constituents.

- Selected flow: Cable marking ink
- Flow property / unit: Mass / kg
- Amount rule: Measured or stock-balanced ink mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Purchased electricity (`electricity`)

Record purchased electricity consumed by the included cable line and allocated support operations. Grid mix, voltage, geography, and loss boundary are required foreground qualifiers.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity converted from kWh to MJ and allocated according to Section 7
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Wooden cable drum (`wooden_cable_drum`)

Record the mass of wooden drums and staves supplied with the cable; identify reused drums and allocate their actual use cycle consistently.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch mass attributable to the reference cable shipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Steel packaging band (`steel_packaging_band`)

Record the mass of finished steel baling band used to secure the cable drum or its protection. Disclose coating or galvanization, width, thickness, grade, reuse status, supplier geography, and delivery boundary; do not substitute baling wire or generic metal strip.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch mass attributable to the reference cable shipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Plastic-coated paperboard protective film (`plastic_coated_paperboard_film`)

Record the mass of the plastic-coated paperboard protector wrapped around the dispatch drum; do not substitute a generic packaging category.

- Selected flow: Plastic-coated paperboard protective film
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch mass attributable to the reference cable shipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

##### Waste flows

##### Elementary flows

No direct elementary exchange is prescribed without a demonstrated on-site release. Upstream grid and material-production emissions remain in linked background datasets. Any measured on-site release must be added as its individual substance and compartment, never as an aggregate emissions row.

#### Outputs

##### Product flows

###### Tested saleable optical fibre cable (`reference_optical_fibre_cable`)

Record the tested cable output excluding the mass of its wooden drum, steel band, and protective film. The exact TianGong reference-product UUID remains unresolved.

- Selected flow: Optical fibre cable made up of individually sheathed fibres
- Flow property / unit: Mass / kg
- Amount rule: 1 kg after normalization from measured net saleable output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_mass`
- Sources: `un-cpc-3-0-2025`; `unsd-industrial-commodity-statistics-yearbook-2014`

##### Waste flows

###### Separately collected polyethylene sheath scrap (`waste_polyethylene`)

Record clean or contaminated polyethylene start-up pieces, trim, and rejected sheath that leave the foreground boundary; internal regrind does not cross the boundary.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass / kg
- Amount rule: Measured net waste mass sent off site, by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Polybutylene terephthalate buffer-tube scrap (`waste_pbt`)

Record PBT start-up pieces, trim, and rejected buffer tube that leave the foreground boundary; do not merge this polymer with PET or other plastic waste.

- Selected flow: Waste polybutylene terephthalate
- Flow property / unit: Mass / kg
- Amount rule: Measured net waste mass sent off site, by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Silica optical-fibre offcuts (`waste_optical_fibre`)

Record cut lengths and rejected silica optical fibre that leave the foreground boundary, including inseparable primary coating when present.

- Selected flow: Silica optical-fibre offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured net waste mass sent off site, by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

###### Glass-reinforced plastic strength-member offcuts (`waste_glass_reinforced_plastic`)

Record rejected or trimmed glass-reinforced plastic strength members that leave the foreground boundary.

- Selected flow: Glass-reinforced plastic waste `52db6bdb-3bc0-4f88-84fe-7bfec8bf74c5`
- Flow property / unit: Mass / kg
- Amount rule: Measured net waste mass sent off site, by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tested saleable cable output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `cablescom-optical-fibre-duct-cable-epd-2022`

##### Elementary flows

No product-stage elementary output is prescribed without direct site evidence. Record any site release as a separate substance-and-compartment flow and audit its TianGong identity before use.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Foreground operations | Avoid allocation by using product-specific bills of material, cable-line production records, dedicated meters, and separately weighed waste wherever available. | `cablescom-optical-fibre-duct-cable-epd-2022` |
| `allocation_shared_inputs` | Shared energy, auxiliary materials, packaging, and waste | When physical subdivision is not feasible, allocate shared quantities by net saleable cable mass produced during the same reporting period; disclose the products, quantities, and allocation shares. | `cablescom-optical-fibre-duct-cable-epd-2022` |
| `allocation_internal_recycling` | Internal regrind and rework | Keep material internally reprocessed into the same reporting period inside the foreground boundary; count only net purchased input and waste leaving the boundary, and prevent double counting. |  |
| `allocation_recycling_outputs` | Scrap sent for recycling or recovery | Apply the polluter-pays principle at the foreground boundary and do not claim avoided production unless a downstream model explicitly applies a documented recycling method. | `cablescom-optical-fibre-duct-cable-epd-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `cable_manufacturing_and_packaging` | Each cable material input | ERP issue and return records, purchase receipts, stock counts, bill of materials | material identity; supplier; grade; opening stock; receipts; closing stock; returns; internal regrind; cable product code | Reconcile stock balance to cable-line issue records and approved bill of materials | kg | Per batch with monthly reconciliation | Representative continuous twelve-month period or justified campaign | Each included factory and cable line | Net consumption by material and product code, then allocate only shared residues under Section 7 | Purchase documents, supplier specifications, stock reconciliation, and approved bill of materials |
| `cp_electricity` | `cable_manufacturing_and_packaging` | Purchased electricity | Utility invoices and calibrated submeter readings | meter id; opening and closing reading; kWh; voltage; supplier; grid product; line hours; reporting period | Prefer dedicated cable-line meters; reconcile submeters to site invoice and allocate documented shared loads | kWh | Continuous or batch-level, reconciled monthly | Same period as output records | Each included factory and cable line | Convert kWh to MJ and divide by allocated saleable cable mass | Invoice, meter calibration or verification, reconciliation, and allocation worksheet |
| `cp_packaging_mass` | `cable_manufacturing_and_packaging` | Each dispatch-packaging component | Packing list, packaging issue record, and scale record | component identity; material; supplier; reused status; gross mass; tare mass; shipment; cable product code | Weigh each component or use verified supplier mass per item multiplied by dispatched count | kg | Per shipment | Same period as output records | Each included factory | Sum each component separately and divide by associated saleable cable mass | Packing list, scale record or supplier specification, and reuse-cycle evidence |
| `cp_output_mass` | `cable_manufacturing_and_packaging` | Tested saleable cable output | Production counter, length meter, scale, and final-test record | product code; batch; cable length; cable net mass; fibre count; test disposition; drum tare; packaging mass | Weigh net cable or subtract verified packaging tare from gross mass; reconcile length and mass to accepted test disposition | kg, m, fibre-km | Per finished drum or batch | Same period as input records | Each included factory and cable line | Sum accepted net cable mass; exclude rejected output and dispatch packaging | Calibrated scale and length meter, test certificate, and production reconciliation |
| `cp_waste_mass` | `cable_manufacturing_and_packaging` | Each distinct waste output | Waste scale ticket, container log, and contractor receipt | waste identity; source process; gross and tare mass; moisture; contamination; internal regrind; destination; treatment route | Weigh each waste separately at dispatch; reconcile to contractor receipts and exclude internal regrind | kg | Per dispatch with monthly reconciliation | Same period as input and output records | Each included factory and cable line | Net each waste by identity and route; divide by saleable cable mass | Scale ticket, contractor receipt, container log, and mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_intensity` | Each material input | (opening stock + receipts - closing stock - returns - material transferred to other products) / saleable cable mass | Stock, receipt, return, transfer, and output records | kg material per kg cable |  |
| `calc_electricity_intensity` | Purchased electricity | (metered kWh × 3.6 MJ/kWh × allocation share) / saleable cable mass | Meter readings, allocation share, saleable output mass | MJ electricity per kg cable |  |
| `calc_packaging_intensity` | Each packaging component | packaging component mass associated with shipment / net cable mass in that shipment | Packing and output records | kg packaging component per kg cable |  |
| `calc_waste_intensity` | Each waste output | net off-site waste mass by identity and route / saleable cable mass | Waste and output records | kg waste per kg cable |  |
| `calc_fibre_kilometres` | Functional disclosure | cable length in km × number of optical fibres | Length meter and declared fibre count | fibre-km per reference-flow batch |  |
| `calc_mass_balance` | Foreground completeness | Compare total measured material inputs with saleable cable output, separately measured waste outputs, stock change, retained samples, and documented measurement uncertainty; investigate unexplained imbalance. | Material, output, waste, stock, and sample records | Mass-balance reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain product specification, cable drawing, bill of materials, applicable test standards, fibre type and count, construction, conductor and connector state, and fire-performance class. | Approved technical file and final-test certificate |
| `dq_temporal` | All foreground rows | Use one representative twelve-month period where practicable; disclose shutdowns, start-up campaigns, product-mix changes, and any shorter justified period. | Dated source records and representativeness statement |
| `dq_geography_technology` | Foreground and upstream links | Declare factory geography and cable-line technology; document supplier, production route, recycled content, and geography for major upstream materials. | Site metadata and supplier documentation |
| `dq_measurement` | Mass, length, and electricity | Use calibrated or verified instruments, document resolution and uncertainty, and reconcile submeters and shipment records to controlling records. | Calibration or verification records and reconciliations |
| `dq_completeness` | Inventory | Cover every required atomic row and all additional site exchanges; justify absence using bills of material, meter scope, or waste records and complete the mass balance. | Row-level inclusion review and mass-balance worksheet |
| `dq_uuid` | Flow identity | Use only directly audited public state-100 TianGong identities; retain unresolved rows without UUID rather than selecting a broad proxy. | UUID audit record and unresolved review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | Reference flow | Confirm that cable net mass equals the declared reference amount after normalization and that packaging mass is excluded; cable length and fibre-kilometres must be disclosed. |  |
| `validate_scope` | Product identity | Confirm the product contains individually sheathed optical fibres; reject bare fibre, non-individually-sheathed fibre bundles or cables, and electric-only cable from this PCR. | `un-cpc-3-0-2025`; `unsd-industrial-commodity-statistics-yearbook-2014` |
| `validate_variants` | Conditional construction | Require explicit applicable or not-applicable decisions for water-blocking yarn, aramid reinforcement, incorporated conductor, and fitted connector based on the product bill of materials. | `unsd-industrial-commodity-statistics-yearbook-2014`; `cablescom-optical-fibre-duct-cable-epd-2022` |
| `validate_atomicity` | Inventory rows | Reject combined utilities, materials, packaging, waste, or emissions; every exchange must retain one flow identity, direction, property, unit, and treatment or compartment where applicable. |  |
| `validate_mass_balance` | Foreground inventory | Require documented reconciliation of material inputs to cable output, waste, stock change, retained samples, internal regrind, and measurement uncertainty; investigate and disclose unexplained imbalance. |  |
| `validate_electricity` | Electricity | Reconcile line and allocated support electricity to the site controlling meter and verify the kWh-to-MJ conversion. |  |
| `validate_sources` | Quantitative ranges | Reject external empirical ranges unless at least two independent original sources are verified and shown boundary-compatible; absence of an accepted range does not replace foreground collection. |  |
| `validate_uuid` | UUID-bearing rows | Confirm public state_code 100, English and Chinese base names, flow type, classification, property, unit group, product state, and general comment; fail any proxy or unverified UUID. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` generated from reviewed foreground records |
| downstream_use | Construction of product-flow, process, and lifecyclemodel datasets for individually sheathed-fibre optical cable manufacture |
| allowed_use | Cradle-to-gate cable production modelling for the declared construction, factory, reporting period, and geography; comparison only after aligning reference mass, cable length, fibre-kilometres, performance, boundary, and data quality |
| excluded_use | Bare optical fibre production; non-individually-sheathed optical bundles or cables; electric-only cable; installation, network operation, maintenance, removal, or end-of-life without additional rules and data |
| required_metadata | PCR id and status; product code and specification; cable construction; fibre type and count; length and fibre-kilometres per kg; sheath, water-blocking, reinforcement, armour, conductor, and connector state; factory and supplier geography; technology; period; allocation; packaging; cut-offs; UUID status |
| required_quality_disclosure | Primary-data share; meter and scale coverage; temporal, geographical, and technological representativeness; supplier-data quality; mass-balance result; allocation shares; internal recycling; waste routes; unresolved UUIDs and range evidence needs |
| update_trigger | Material change in cable construction, compound or supplier, recycled content, fibre count or type, conductor or connector state, production line, energy supply, packaging, allocation, waste route, factory, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 46360 classification identity |
| `unsd-industrial-commodity-statistics-yearbook-2014` | official_guidance | United Nations Statistics Division, 2014 Industrial Commodity Statistics Yearbook: Production Statistics (2005-2014), Volume I, ST/ESA/STAT/SER.P/54, published 2017. https://unstats.un.org/unsd/publication/SeriesP/SeriesP_54_vol_I.pdf | Original-text product boundary including cables assembled with electric conductors or fitted with connectors |
| `iec-tr-62839-1-2025` | standard | IEC TR 62839-1:2025, Environmental declaration - Part 1: Communication wires and cables - Product specific rules. https://webstore.iec.ch/en/publication/84774 | Applicability of communication-cable LCA rules to products comprising optical fibre and relationship to IEC 60794 |
| `cablescom-optical-fibre-duct-cable-epd-2022` | dataset | Cables de Comunicaciones Zaragoza S.L., Environmental Product Declaration for optical fibre cables for telecommunication networks through duct installation, registration S-P-05723, revised 8 April 2022. https://www.cablescom.com/sites/default/files/Documents/EPD_Cablescom_Duct_rev01.pdf | Original-text product composition, micromodule and sheathing process decomposition, factory-gate boundary, electricity and packaging inclusion, waste accounting, and allocation hierarchy |
