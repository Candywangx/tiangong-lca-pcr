---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.measuring-checking-regulating-or-controlling-instruments-appliances-and-machines-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Measuring, checking, regulating or controlling instruments, appliances and machines n.e.c.

## 1. Scope and Applicability

This PCR guides production of a foreground data package for factory-gate manufacture of finished measuring, checking, regulating or controlling instruments, appliances and machines that fall within CPC 3.0 subclass 48269. It applies to the declared product model or homogeneous product family and its actual manufacturing route, including assembly and integration, route-applicable finishing and cleaning, configuration, performance verification or calibration, final testing, and packaging for factory-gate release.

The category is residual (`n.e.c.`), not a license to combine unlike instruments without disclosure. A conforming data package shall identify the measured or controlled quantity, operating principle, measuring range, accuracy class or uncertainty specification where relevant, product configuration, included accessories, power-supply form, calibration or verification state, production route, site, geography, and reporting period. Electrical/electronic, mechanical, pneumatic, hydraulic, optical, or mixed implementations are included only when the finished product remains within CPC 48269.

The foreground boundary ends at factory-gate release. Upstream production of purchased materials, components, subassemblies, energy carriers, and packaging is represented by linked upstream datasets. Distribution, installation, use, maintenance, recalibration after sale, and end-of-life are outside this foreground package and may be added in a downstream lifecycle model. Products assigned to CPC 48261, 48262, 48263, 48264, or 48266, and separately supplied parts and accessories assigned to CPC 48284, are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.measuring-checking-regulating-or-controlling-instruments-appliances-and-machines-n-e-c |
| classification_refs | CPC 3.0: 48269 (exact classification context; no accepted repository mapping is asserted by this PCR) |
| covered_products | Finished measuring, checking, regulating or controlling instruments, appliances and machines classified in CPC 48269, represented by one declared model or a demonstrably homogeneous product family |
| excluded_products | Products classified in CPC 48261, 48262, 48263, 48264, or 48266; separately supplied parts and accessories classified in CPC 48284; installation, use, maintenance, post-sale recalibration, and end-of-life services |
| representative_product | One declared finished instrument model, or a production-weighted homogeneous family with common function, performance specification, bill-of-material structure, manufacturing route, and factory-gate state |
| production_route | Purchased-material and component receipt; mechanical/electronic subassembly and integration as applicable; final assembly; route-applicable finishing and cleaning; configuration; performance verification or calibration; final testing; packaging and factory-gate release |
| market_state | Finished, manufactured, tested and released at the factory gate; calibration or verification state and included accessories declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate manufacture of the declared finished instrument model or homogeneous product family |
| How much | 1 kg net mass of finished product |
| How well | Meets the declared function, measured or controlled quantity, operating principle, measuring range, accuracy class or uncertainty specification where relevant, configuration, verification or calibration status, and release criteria |
| How long or cycle | One declared production campaign or reporting period, normalized to qualifying factory-gate output; no use-stage service duration is included |
| reference_flow_link | The quantitative reference is the Tiangong CPC 48269 finished-product flow identified below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished-product mass |
| Reference product flow | Measuring, checking, regulating or controlling instruments, appliances and machines n.e.c. `a4e0f811-b832-4e6b-8360-3c32184b14a0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product model or family; measured or controlled quantity; operating principle; measuring range; accuracy class or uncertainty specification where relevant; electrical/mechanical/pneumatic/hydraulic/optical implementation; configuration and firmware where applicable; included accessories; net product mass; packaging exclusion; calibration or verification status; release criteria; production route; manufacturing site and geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net mass of released finished product. Exclude separately reported transport packaging; declare whether detachable accessories are included in the product mass. |
| `count_to_mass` | item-count production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts using measured net mass by model and lot or another documented representative sampling plan. Do not use an unverified nominal catalogue mass. |
| `intermediate_mass_continuity` | intermediate instruments and subassemblies | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate transfers between foreground processes and retain reject, rework, scrap, and stock-change records; do not assume one-to-one mass throughput. |
| `energy_unit_preservation` | electricity, fuel, heat, compressed air, and other utilities | native metered property | native meter unit plus documented conversion | Preserve the original meter or invoice unit and conversion factor. Convert only through a documented unit chain and keep carrier-specific inputs separate. |
| `calibration_record_separation` | calibration and performance verification | declared measurand and uncertainty or acceptance result | unit appropriate to the declared measurand | Treat calibration or verification results as product-quality evidence. Record consumed standards, reference materials, energy, and external services as separate inventory inputs; calibration itself does not add product mass. |

## 5. System Boundary

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing boundary | Include on-site processes from receipt of purchased materials, components, and subassemblies through qualifying finished-product release and packaging at the factory gate. | `un-cpc-3-48269`; `eu-pef-2021-2279`; `iec-63366-2025` |
| `boundary_upstream_links` | purchased inputs | Link each material, component, subassembly, utility, packaging material, and externally performed manufacturing or calibration service to an upstream dataset at the point it enters the foreground boundary. | `eu-pef-2021-2279`; `iec-63366-2025` |
| `boundary_route_conditions` | conditional processes | Include finishing, coating, cleaning, firmware loading, calibration, environmental conditioning, burn-in, and other route-specific steps only when performed for the declared product; disclose excluded non-applicable steps. | `eu-pef-2021-2279`; `bipm-jcgm-200-2012` |
| `boundary_downstream_exclusion` | downstream lifecycle stages | Exclude distribution, installation, use, maintenance, post-sale recalibration, and end-of-life from this factory-gate foreground package; add them only in a declared downstream lifecycle model without double counting. | `eu-pef-2021-2279`; `iec-63366-2025` |
| `boundary_no_silent_cutoff` | completeness and exclusions | Do not omit a flow solely because its mass is small. Record measured or estimated missing coverage, the reason for exclusion, and the sensitivity or materiality check used to justify any omission. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, subassemblies, energy carriers, packaging, and external services as received at the declared manufacturing site boundary |
| starting_condition_role | Foreground entry gate for instrument manufacture |
| product_classification_scope | Finished products in CPC 3.0 subclass 48269 only, with sibling subclasses 48261, 48262, 48263, 48264, and 48266 and parts subclass 48284 excluded |
| recursive_input_rule | When an incoming instrument or subassembly is itself within CPC 48269, record it once as a distinct upstream product input with its own product identity, quantity, supplier boundary, and dataset reference; do not recursively expand the same foreground package into itself. |
| upstream_dataset_requirement | Use a geographically, temporally, technologically, and functionally representative upstream dataset for every purchased input crossing the starting boundary; disclose proxies, aggregation, supplier coverage, and missing datasets. |
| disclosure | Declare product model or family, route, site, geography, period, boundary start and end, outsourced steps, included accessories, calibration or verification status, packaging treatment, upstream proxies, exclusions, and any same-category recursive input. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `instrument_assembly` | Instrument subassembly, integration, and final assembly | required | Always; adapt the mechanical, electrical/electronic, pneumatic, hydraulic, optical, or mixed route to the declared product | Foreground production | kg assembled unverified instrument transferred onward |
| `finishing_cleaning` | Surface finishing, coating, and cleaning | conditional | Include when performed on-site or controlled by the reporting producer for the declared route | Foreground conditioning | kg conditioned instrument transferred onward |
| `configuration_verification` | Configuration, calibration or performance verification, and final test | required | Always include release testing; include calibration, firmware loading, environmental conditioning, or burn-in when performed for the declared product | Foreground quality release | kg verified instrument meeting release criteria |
| `packaging_release` | Packaging and factory-gate release | required | Always; separately declare included accessories and excluded transport packaging mass | Foreground release | 1 kg net released finished product |

### Process: Instrument subassembly, integration, and final assembly (`instrument_assembly`)

#### Inputs

##### Product flows

###### Bill-of-material materials, components, and subassemblies (`bom_inputs`)

Record each purchased material, electronic or mechanical component, sensor, transducer, enclosure, cable, fastener, optical part, pneumatic or hydraulic part, and subassembly that crosses the foreground boundary. Preserve item identity and supplier dataset references instead of collapsing the bill of materials into an unspecified mass.

- Selected flow: Product-specific purchased flow selected from a confirmed Tiangong `state_code=100` Product flow for each actual item
- Flow property / unit: Mass / kg, or item count with measured count-to-mass conversion
- Amount rule: Net issued quantity plus attributable losses and stock changes for the declared production output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_component_records`
- Sources: `eu-pef-2021-2279`; `iec-63366-2025`

###### Assembly utilities and consumables (`assembly_utilities_consumables`)

Record electricity, fuels, heat, compressed air, process gases, solder, adhesives, lubricants, cleaning agents, test fixtures consumed, and other utilities or consumables used in assembly and integration. Keep materially different carriers and substances as separate exchanges.

- Selected flow: Site- and carrier-specific product flows; select confirmed Tiangong identities before dataset publication
- Flow property / unit: Native metered or purchasing property and unit; preserve conversion records
- Amount rule: Metered, invoiced, or stores-issued quantity attributable to the declared assembly output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources: `eu-pef-2021-2279`; `iec-63366-2025`

##### Waste flows

No waste inputs are prescribed. Record returned or recycled input streams as product or waste flows according to the actual legal and physical status, with the choice disclosed.

##### Elementary flows

Record direct resource withdrawals only when they cross the environment-to-technosphere boundary at the manufacturing site; purchased water and energy remain product flows.

#### Outputs

##### Product flows

###### Assembled unverified instrument transferred to the next foreground step (`assembled_unverified_output`)

Record the measured transfer mass of the assembled instrument before route-applicable finishing and release verification.

- Selected flow: Product-specific intermediate instrument flow; do not substitute the final CPC 48269 reference flow unless the intermediate has the same released state and qualifiers
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass adjusted for documented work-in-progress stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_and_output_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Assembly scrap, rejects, and removed materials (`assembly_waste`)

Record each waste stream by material and treatment destination, separating recoverable scrap, hazardous waste, electronic waste, and mixed residual waste. Rework returned within the foreground route is tracked separately and is not counted as final waste unless it leaves the route.

- Selected flow: Waste-specific Tiangong flow selected for the actual material and destination before dataset publication
- Flow property / unit: Mass / kg
- Amount rule: Weighed or reconciled quantity leaving assembly, net of documented internal rework returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rework_records`
- Sources: `eu-pef-2021-2279`; `iec-63366-2025`

##### Elementary flows

###### Direct assembly releases to air, water, or soil (`assembly_direct_releases`)

Record measured, permitted, or calculated direct releases caused by on-site assembly operations, using substance- and compartment-specific elementary flow identities. Do not copy upstream emissions from purchased electricity or materials into the foreground site inventory.

- Selected flow: Substance- and compartment-specific confirmed Tiangong Elementary flow
- Flow property / unit: Property and unit of the selected elementary flow
- Amount rule: Site monitoring or documented calculation allocated to the declared assembly output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

### Process: Surface finishing, coating, and cleaning (`finishing_cleaning`)

#### Inputs

##### Product flows

###### Instrument and finishing inputs (`finishing_inputs`)

When this conditional process applies, record the incoming instrument plus coating materials, solvents, detergents, process water, utilities, and other finishing inputs as separate exchanges.

- Selected flow: Product-specific intermediate instrument and confirmed material, water, energy, and consumable flows
- Flow property / unit: Mass / kg for material flows; native metered property and unit for utilities
- Amount rule: Measured transfer, stores issue, invoice, or meter quantity attributable to the declared conditioned output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

No waste inputs are prescribed.

##### Elementary flows

Record direct resource withdrawals only when they cross the environment boundary at the site.

#### Outputs

##### Product flows

###### Conditioned instrument transferred to verification (`conditioned_instrument_output`)

Record the measured mass and declared surface or cleanliness state of the instrument transferred onward.

- Selected flow: Product-specific intermediate instrument flow with declared finishing state
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred mass adjusted for documented work-in-progress stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_and_output_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Finishing wastes and wastewater (`finishing_waste`)

Record spent baths, solvents, coating residues, wastewater, sludge, filters, wipes, and other wastes by material and destination when generated.

- Selected flow: Waste-specific Tiangong flow selected for the actual stream and treatment destination
- Flow property / unit: Mass / kg or measured liquid volume with documented density conversion
- Amount rule: Weighed, metered, or treatment-manifest quantity attributable to the declared conditioned output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Direct finishing releases (`finishing_direct_releases`)

Record substance- and compartment-specific direct emissions from coating, cleaning, curing, or wastewater treatment under operational control.

- Selected flow: Substance- and compartment-specific confirmed Tiangong Elementary flow
- Flow property / unit: Property and unit of the selected elementary flow
- Amount rule: Site monitoring or documented calculation attributable to the declared conditioned output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_release_records`
- Sources: `eu-pef-2021-2279`

### Process: Configuration, calibration or performance verification, and final test (`configuration_verification`)

#### Inputs

##### Product flows

###### Instrument, reference standards, test media, utilities, and external services (`verification_inputs`)

Record the incoming instrument and all consumed energy, test media, reference materials, replaceable standards, test fixtures, and externally purchased calibration or testing services. Capital reference standards are included only when the declared capital-equipment policy brings them into scope.

- Selected flow: Product-specific intermediate instrument plus confirmed utility, consumable, reference-material, and service flows
- Flow property / unit: Mass / kg for the instrument and consumables; native unit for utilities and services
- Amount rule: Measured transfer, meter, stores, service, and calibration records attributable to qualifying released output, including failed-test and rework cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_calibration_test_records`
- Sources: `bipm-jcgm-200-2012`; `eu-pef-2021-2279`; `iec-63366-2025`

##### Waste flows

No waste inputs are prescribed.

##### Elementary flows

Record direct releases only when testing or conditioning causes an environment-boundary exchange at the site.

#### Outputs

##### Product flows

###### Verified instrument meeting release criteria (`verified_instrument_output`)

Record only output that meets the declared configuration, functional test, accuracy or uncertainty specification where relevant, calibration or verification status, and release criteria.

- Selected flow: Product-specific verified intermediate instrument; the final reference flow is used only after packaging and release state is declared
- Flow property / unit: Mass / kg
- Amount rule: Measured qualifying output mass reconciled to failed tests, rework, and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_calibration_test_records`
- Sources: `bipm-jcgm-200-2012`; `eu-pef-2021-2279`

##### Waste flows

###### Failed-test rejects and non-returned test consumables (`verification_waste`)

Record rejected units that leave the rework loop and consumed test articles, reference materials, filters, batteries, fluids, or other wastes by destination.

- Selected flow: Waste-specific Tiangong flow selected for the actual stream and destination
- Flow property / unit: Mass / kg, or the native property of the selected waste flow
- Amount rule: Reconciled reject and disposal records, excluding units returned to internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rework_records`
- Sources: `bipm-jcgm-200-2012`; `eu-pef-2021-2279`

##### Elementary flows

No universal direct elementary output is prescribed. Record substance- and compartment-specific releases when present.

### Process: Packaging and factory-gate release (`packaging_release`)

#### Inputs

##### Product flows

###### Verified instrument and packaging materials (`packaging_inputs`)

Record the verified instrument, protective materials, retail packaging, transport packaging, labels, manuals, included accessories, and packaging utilities as separate exchanges. State which accessories belong to the reference product and keep packaging mass outside the net reference mass.

- Selected flow: Product-specific verified instrument plus material-specific confirmed packaging and accessory flows
- Flow property / unit: Mass / kg, or item count with documented count-to-mass conversion
- Amount rule: Measured packaging bill of materials and issued quantities attributable to released output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release_records`
- Sources: `eu-pef-2021-2279`; `iec-63366-2025`

##### Waste flows

No waste inputs are prescribed.

##### Elementary flows

No universal direct elementary input is prescribed.

#### Outputs

##### Product flows

###### Released CPC 48269 finished instrument (`reference_product_output`)

Record the qualifying finished-product output using the exact Tiangong product flow and mass reference chain. The output is net product mass; separately report packaging and declare included accessories.

- Selected flow: Measuring, checking, regulating or controlling instruments, appliances and machines n.e.c. `a4e0f811-b832-4e6b-8360-3c32184b14a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg net qualifying finished-product output by definition of the reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-48269`

##### Waste flows

###### Packaging and release waste (`packaging_release_waste`)

Record damaged packaging, label backing, offcuts, rejected manuals, pallets not returned, and other waste leaving the packaging step by material and destination.

- Selected flow: Waste-specific Tiangong flow selected for the actual material and destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed or reconciled packaging waste attributable to released output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualifying finished product at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

No universal direct elementary output is prescribed. Record site-specific releases when present.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | multi-product and shared foreground processes | First avoid allocation by subdividing processes, meters, work orders, and material issues so that product-specific inputs, outputs, wastes, and releases are directly assigned. | `eu-pef-2021-2279` |
| `allocation_physical_causality` | remaining shared burdens | When subdivision is not practicable, use a documented physical causal driver such as machine time, test time, energy demand, mass throughput, or occupied production time that reflects resource use; do not default to product mass when it is not causal. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | shared burdens without a defensible physical relation | Use economic allocation only when subdivision and a defensible physical causal relationship are unavailable. Record prices, period, currency, source, allocation shares, and a sensitivity check. | `eu-pef-2021-2279` |
| `allocation_rework_and_rejects` | rework loops and failed units | Keep burdens of internal rework and failed tests with the qualifying output; count only rejects leaving the foreground route as waste and prevent the same unit or input from being counted twice. | `eu-pef-2021-2279` |
| `allocation_recovery_no_double_credit` | recyclable scrap and recovered materials | Record the outgoing waste or recovered-material flow and treatment destination. Do not assign an avoided-product credit inside this factory-gate foreground package unless a declared downstream method requires it; disclose any such method and prevent double credit with downstream recycling modelling. | `eu-pef-2021-2279`; `iec-63366-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_component_records` | `instrument_assembly` | materials, components, subassemblies, included accessories | approved BOM, purchasing, stores issue, supplier, and stock records | item id; revision; description; supplier; Tiangong flow id; quantity; unit; measured unit mass; issued amount; returns; opening and closing stock; lot; product model | reconcile approved BOM to actual stores issues and supplier receipts by product and lot | native purchasing unit and kg after documented conversion | each production lot or work order, aggregated for the declared period | full declared reporting period with start and end dates | every site and outsourced assembly step in scope | sum net issues plus attributable stock change; normalize through `calc_reference_normalization` | approved BOM revision, issue/return records, supplier identity, mass measurement record, reconciliation sign-off |
| `cp_utility_and_consumable_records` | `instrument_assembly` | utilities and assembly consumables | meters, invoices, stores issues, equipment logs | carrier or material; meter id; start and end reading; invoice quantity; unit; conversion factor; allocation driver; downtime; product output | read dedicated meters where available; otherwise reconcile invoices or stores issues to documented causal drivers | native meter or invoice unit plus normalized unit | meter or invoice interval, aggregated for the declared period | same period as qualifying production, with gaps identified | every controlled production area in scope | subtract non-production and out-of-scope use; allocate by documented causal driver; normalize through `calc_reference_normalization` | meter calibration or verification record, invoice, stores record, driver calculation, coverage statement |
| `cp_intermediate_and_output_mass` | `instrument_assembly`; `finishing_cleaning`; `configuration_verification`; `packaging_release` | intermediate and qualifying output transfers | scales, production counters, transfer records, release records | product model; lot; gross mass; tare; net mass; item count; measured unit mass; transfer state; opening and closing work in progress; pass/fail status | measure net mass by lot or validated sampling plan and reconcile transfers to work-in-progress | kg | each lot or transfer, aggregated for the declared period | full declared reporting period | all foreground steps and outsourced controlled transfers | calculate net qualifying transfer and stock-adjusted output; normalize through `calc_reference_normalization` | scale status, sampling plan, transfer record, release authorization, stock reconciliation |
| `cp_waste_and_rework_records` | `instrument_assembly`; `configuration_verification` | scrap, rejects, rework, and disposal | waste scales, manifests, nonconformance and rework logs | waste type; material; mass; destination; hazardous status; lot; reject reason; rework entry; rework exit; final disposition | reconcile weighed waste and disposition documents to nonconformance and rework records | kg or native selected waste-flow unit | each removal, reject, or rework event, aggregated for the declared period | same period as qualifying production | all foreground sites and controlled contractors | count only waste leaving the route; retain rework burdens with qualifying output; normalize through `calc_reference_normalization` | scale record, waste manifest, treatment receipt, nonconformance log, rework closure |
| `cp_direct_release_records` | `instrument_assembly`; `finishing_cleaning` | direct releases to air, water, or soil | continuous or periodic monitoring, permits, mass-balance calculations | substance; compartment; sampling point; concentration; volume; duration; detection limit; calculation factor; operating status; product allocation driver | use site monitoring or documented engineering calculation for releases under operational control | property and unit of selected elementary flow | monitoring or permit interval, aggregated for the declared period | same period as qualifying production, with non-detects and gaps disclosed | every emission point serving in-scope operations | calculate released quantity from measured concentration and volume or approved formula; allocate by documented causal driver | laboratory result, instrument status, permit report, formula and factor source, QA review |
| `cp_finishing_records` | `finishing_cleaning` | finishing inputs, output, waste, and wastewater | batch sheets, meters, stores issues, treatment manifests | route; bath or coating id; material; issued amount; recovered amount; water; energy; incoming and outgoing product mass; waste; wastewater; release | reconcile route-specific batch records to issued materials, utilities, outputs, and treatment records | native unit and kg after documented conversion | each finishing batch, aggregated for the declared period | all applicable finishing batches in the declared period | every in-scope finishing line and controlled contractor | sum net consumption and releases by route; normalize through `calc_reference_normalization` | batch record, meter or invoice, chemical issue, waste receipt, mass-balance review |
| `cp_configuration_calibration_test_records` | `configuration_verification` | configuration, calibration, verification, tests, failures, and qualifying output | configuration logs, calibration certificates, test records, equipment logs, service invoices | product serial or lot; firmware or configuration; measurand; range; acceptance limit; result; measurement uncertainty where applicable; reference standard; traceability chain; certificate; test duration; energy; consumables; pass/fail; rework; final release | link each qualifying unit or statistically controlled lot to configuration and release evidence; reconcile utilities and consumables to test activity | declared measurand unit, time, energy, mass, and service unit as applicable | each unit, lot, or test campaign, aggregated for the declared period | all qualifying output and all failed or reworked tests in the declared period | every controlled test station and outsourced calibration or testing service | count qualifying output only after release; include failed-test and rework burdens; normalize through `calc_reference_normalization` | signed test result, calibration certificate, traceability evidence, equipment status, service invoice, release authorization |
| `cp_packaging_and_release_records` | `packaging_release` | packaging materials, included accessories, final product, and packaging waste | packaging BOM, stores issues, scales, release and shipment-preparation records | product model; packaging item; material; issued quantity; returned quantity; unit mass; included accessory; net product mass; packaging mass; waste; lot; release status | reconcile packaging BOM and issues to net released product and separately weighed packaging | item and kg | each released lot, aggregated for the declared period | all qualifying releases in the declared period | every in-scope packaging site | sum net packaging issues and waste; keep packaging outside net product mass; normalize through `calc_reference_normalization` | approved packaging BOM, issue/return record, scale record, release record, reconciliation sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory amount | normalized amount = attributable amount for the declared period / net kg of qualifying released CPC 48269 product for the same period | attributable input, output, waste, or release; net qualifying output mass; matched time, site, model, and route boundary | amount per 1 kg net qualifying finished product | `eu-pef-2021-2279` |
| `calc_count_to_mass` | item-count records | converted mass = item count × measured representative net mass per item; stratify by model or configuration and retain the sampling result | item count; measured unit mass; model or lot stratum | kg | `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | each mass-bearing foreground process | residual = stock-adjusted material inputs − product transfers − waste outputs − measured direct mass releases; investigate and disclose the residual rather than forcing it to zero | opening and closing stock; material inputs; product outputs; wastes; direct releases | mass-balance residual and reconciliation status | `eu-pef-2021-2279` |
| `calc_shared_utility_allocation` | shared utilities and services | attributable amount = shared total × documented causal-driver share; use subdivision first and economic allocation only as the declared fallback | shared total; product-specific driver; total driver; allocation method and period | allocated utility or service amount | `eu-pef-2021-2279` |
| `calc_rework_accounting` | failed tests and rework loops | include all extra materials, utilities, tests, and wastes caused by rework in the period numerator; include only finally qualifying output in the denominator and count final rejects once | rework entries and exits; additional inputs; final disposition; qualifying output | rework-adjusted normalized inventory | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and every product-specific row | Match the declared model or homogeneous family, CPC 48269 scope, Tiangong reference-flow UUID, function, range, accuracy or uncertainty specification where relevant, configuration, accessories, and release state. | product specification, approved BOM and revisions, classification record, flow lookup confirmation, release record |
| `dq_temporal_alignment` | all foreground records | Use records covering the same declared production period and identify start and end dates, shutdowns, ramp-up, abnormal batches, data gaps, and any extrapolation. | meter and production timestamps, invoices, work orders, gap and representativeness assessment |
| `dq_geographic_technology` | site and supplier coverage | Identify every manufacturing and controlled outsourced site, route, technology, and supplier dataset geography; disclose aggregation and proxies. | site list, route map, supplier records, dataset metadata, proxy register |
| `dq_completeness` | BOM, utilities, wastes, releases, and outsourced steps | Reconcile the bill of materials, utilities, outputs, wastes, direct releases, and outsourced operations to production records. Quantify missing coverage and document every exclusion and materiality or sensitivity check. | reconciliation tables, missing-data register, exclusion rationale, sensitivity result |
| `dq_measurement_traceability` | scales, meters, tests, and calibration records | Retain equipment identity, measurement method, status, resolution, uncertainty where applicable, calibration or verification evidence, and the traceability chain used for product release measurements. | equipment register, calibration certificate, verification record, measurement procedure, uncertainty statement |
| `dq_allocation_transparency` | shared processes and multi-product operations | Report subdivision decisions, causal drivers, economic fallback data if used, allocation shares, period, and sensitivity; ensure shares reconcile to the shared total. | meter map, work-order time, driver calculation, price record, sensitivity analysis |
| `dq_source_and_conversion_traceability` | all mapped flows and conversions | Preserve original record unit, conversion factor, selected Tiangong flow identity, source or supplier dataset, and reviewer approval for each mapping. | raw record, conversion worksheet, UUID lookup confirmation, mapping log, review sign-off |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity_and_scope` | product identity | Fail if the reference product is not demonstrably within CPC 48269, if a sibling subclass or separately supplied part is represented, or if model/family, function, range, performance specification, configuration, release state, route, site, geography, or period is missing. | `un-cpc-3-48269` |
| `validation_reference_uuid_chain` | reference flow | Fail unless the reference product flow is `a4e0f811-b832-4e6b-8360-3c32184b14a0`, the reference flow property is `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference unit is kg. | `un-cpc-3-48269` |
| `validation_qualifiers_and_mass` | quantitative reference | Fail if net qualifying output mass is not measured or documented, packaging treatment or included accessories are unclear, or item-to-mass conversion lacks model- or lot-specific evidence. | `eu-pef-2021-2279` |
| `validation_process_and_protocol_coverage` | process inventory | Fail if a required process lacks a detailed inventory, if an applicable conditional process is omitted without disclosure, or if a collected/calculated row lacks its named collection protocol and matching period/site boundary. | `eu-pef-2021-2279`; `iec-63366-2025` |
| `validation_mass_reconciliation` | mass-bearing processes | Flag as error an unexplained mass-balance residual or a one-to-one intermediate mass assumption unsupported by records; report measured stock change, rework, rejects, waste, and direct releases. | `eu-pef-2021-2279` |
| `validation_calibration_release` | configuration, calibration, verification, and final test | Fail if the declared calibration or verification state is not supported by release records, or where calibration is claimed, if the reference, procedure, result, uncertainty where applicable, and metrological traceability evidence are missing. | `bipm-jcgm-200-2012` |
| `validation_allocation_and_recycling` | shared burdens, rejects, and recovered materials | Fail if shared burdens lack subdivision or an explicit allocation method and driver, if allocation shares do not reconcile, if internal rework is counted as both waste and product, or if recycling credit is double counted. | `eu-pef-2021-2279`; `iec-63366-2025` |
| `validation_completeness_and_sources` | data package quality | Fail if BOM, utilities, wastes, direct releases, outsourced steps, upstream datasets, unit conversions, exclusions, missing coverage, proxies, or source references cannot be traced to evidence and a declared completeness review. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package that may be published after review as a `secondary_dataset` and/or `background_dataset` |
| downstream_use | Construction of product-specific or representative `process` datasets and downstream `lifecyclemodel` projections for declared CPC 48269 instrument manufacture |
| allowed_use | Factory-gate modelling for the declared model or homogeneous family, function, performance specification, configuration, route, site, geography, period, calibration or verification state, accessory scope, and packaging treatment |
| excluded_use | Use as a cradle-to-grave result without added downstream stages; comparison of products with different functions, measuring ranges, accuracy or uncertainty performance, service lives, or configurations without an additional functionally equivalent basis; automatic use for sibling CPC subclasses or separately supplied parts |
| required_metadata | canonical PCR id; CPC reference; product model/family and homogeneity rationale; function; measured or controlled quantity; operating principle; range; accuracy class or uncertainty specification where relevant; implementation type; configuration and firmware where applicable; included accessories; net mass; packaging treatment; calibration/verification status; release criteria; route; sites; geography; reporting period; outsourced steps; upstream dataset links; allocation; exclusions; proxies; collection protocols; source ids |
| required_quality_disclosure | record coverage; BOM and mass reconciliation; temporal, geographic, and technology representativeness; meter and scale status; calibration and metrological traceability evidence where applicable; allocation drivers; rework and reject treatment; missing data; proxies; exclusions; sensitivity/materiality checks; uncertainty and reviewer limitations |
| update_trigger | Reassess and update when product function or performance specification, BOM, included accessories, configuration or firmware, manufacturing route or site, supplier mix, utility source, finishing or test technology, calibration or release method, allocation driver, packaging, classification scope, Tiangong UUID identity, or data representativeness changes materially. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-48269` | official_guidance | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, 30 June 2025, p. 267, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-09) | CPC 48269 title, hierarchy, category boundary, sibling-category and parts exclusions |
| `iec-63366-2025` | standard | IEC 63366:2025, *Product category rules for life cycle assessment of electrical and electronic products and systems*, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-08-09) | Horizontal PCR context for electrical/electronic implementations, lifecycle modelling, reporting, and need for recorded product-specific specifications when no narrower PSR is available |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annexes I-II, Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-09) | Functional unit, system boundary, company-specific data, process coverage, allocation hierarchy, materiality, data quality, reporting, and verification rules |
| `bipm-jcgm-200-2012` | standard | JCGM 200:2012, *International vocabulary of metrology - Basic and general concepts and associated terms (VIM), 3rd edition*, sections 2.39-2.42, https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf (retrieved 2026-08-09) | Calibration, calibration hierarchy, metrological traceability, and traceability-chain requirements for release evidence |
