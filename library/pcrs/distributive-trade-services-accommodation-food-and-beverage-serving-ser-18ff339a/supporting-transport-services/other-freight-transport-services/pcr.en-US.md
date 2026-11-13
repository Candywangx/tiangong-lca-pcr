---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-freight-transport-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Freight logistics planning and independent transport-document support

## 1. Scope and Applicability

This PCR covers a bounded subset: logistics consulting/planning/design and defined operational-support deliverables for transportation, warehousing or distribution, including multimodal logistics plans; and independent non-intermediation preparation, issue or acquisition of transport documents/waybills. Each job must positively demonstrate one of these functions. An integrated package contains only those included deliverables. This does not claim coverage of every arranging/organizing service in67910. [Source: `un-cpc-67910`]

Exclude passenger/freight intermediation, sea-freight forwarding, air-cargo agency, organization/forwarding of consignments on behalf of clients, and customs brokers acting for clients. Absence of vehicles, a service fee or a coordination title does not prove applicability; separate the positive consulting/document function from these excluded roles and omit an inseparable mixed job. Independent document acquisition means obtaining the specified document, not procuring carriage for a client. Physical carriage, cargo handling, storage operation, customs authority action and goods manufacture are separate modules. [Source: `un-cpc-85630`] When sold in a larger freight package, decompose the support contribution and link each carrier/terminal/storage stage independently in the freight-system model. A support-only inventory never establishes that the cargo has no transport emissions. Existing cargo and customer-supplied documents/data are custody/information objects, not newly produced goods or extra support outputs. Digital document exchange still requires actual computing/transmission suppliers; paperless operation is not automatically impact-free. The Commission source supplies technical data-exchange context only, no universal compliance, certification or reduction claim. [Source: `ec-efti-context`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-freight-transport-services |
| classification_refs | CPC3.0 67910 |
| covered_products | Transportation/warehousing/distribution logistics planning/design/support deliverables, including multimodal plans; independently demonstrated non-intermediary transport-document issue/acquisition |
| excluded_products | Passenger/freight intermediation; sea/air freight agents; on-behalf-client organization/forwarding or customs brokerage; actual carriage/handling/storage; public authority decisions; goods production |
| representative_product | One accepted scope-qualified freight-support engagement of one declared family or genuine integrated package |
| production_route | Accept bounded instructions/data and verify non-intermediary function → develop logistics study/support or independent document deliverable → reconcile interfaces/version and accept completion |
| market_state | Completed bounded commercial support service with traceable job and deliverable; customer cargo retains its identity |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the specifically contracted logistics-consulting/support or independently demonstrated non-intermediary transport-document task |
| How much | One accepted engagement with enumerated consignments, network/scenario extent, documents and deliverable scope as applicable |
| How well | Actual completeness, interface consistency, revision/change-control and client acceptance criteria; no invented regulatory approval or guaranteed transport savings |
| How long or cycle | Actual start/end, active effort and support window through contracted completion; revisions/failed attempts remain attributable |
| reference_flow_link | `support_job` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed qualified freight-support engagement |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | job/provider and client; positively evidenced non-intermediary planning/document role and separability; no client forwarding/carrier procurement/customs brokerage; family or eligible package; actual activity and acceptance scope; start/end and effort; modes/routes/legs/handoff nodes; consignments and cargo attributes as descriptors; counterparties and responsibility limits; logistics network/sites/horizon/scenarios/constraints/deliverables; document types/identifiers/master-house relation/versions/copies/languages/channels; procurement versus issue and completion evidence; corrections/rework; computing/network configuration and suppliers; site/travel/asset boundaries; period and allocation |

item is the singular local alias of formal Item(s), which is used for export. It counts a defined accepted engagement, not a tonne, tonne-kilometre, invoice or employee-hour. One network study, operational-support engagement and independent document task are not interchangeable. Build separate datasets for each family/configuration and retain actual complexity, time and extent; a genuine contracted package is one job with all constituent burdens, not additional component outputs. Separately sold component jobs require disjoint scopes and allocation. For repeat production, count only compatible accepted jobs N greater than zero; corrections and authorized copies of the same document are not extra completed jobs unless a separately defined contracted output. Retain incomplete/cancelled work and its disposition without counting it as conforming completion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `job_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count cp_service accepted defined jobs; actual complexity/time/route/document extent remain mandatory descriptors. No fee or cargo-distance conversion. |
| `electricity_energy` | electricity | Energy | kWh | Meter actual local work/support energy, separating hosted-provider included consumption and shared premises allocation. |
| `material_mass` | paper; toner; petrol | Mass | kg | Use actual net material/fuel records; paper count needs measured size/grammage, toner cartridge count needs net toner and tare, and petrol volume needs documented density at stated conditions. |
| `gas_mass` | r134a_input; r134a_air | Mass | kg | Apply species-specific stock/equipment/transfer balance; replenishment does not directly equal emissions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Client instructions and cargo/route/network data accepted for a positively verified planning/support or independent document role; forwarding/brokerage excluded |
| starting_condition_role | foreground_start |
| product_classification_scope | Limited logistics planning/design/support and independent non-intermediary transport-document issue/acquisition; not all67910 organization |
| recursive_input_rule | A purchased support-only subtask enters once with its own delivered extent and upstream inventory; distinguish principal/subcontractor work and component overlap |
| upstream_dataset_requirement | Actual local energy/material supply; configured hosting/data transmission; staff passenger travel; assets and disposal; accepted support subtask. Cargo carriage/handling/storage linked separately at freight-system level |
| disclosure | Contracted role/interfaces, accepted extent, effort, actual suppliers and shared assets; incomplete/rework burdens; carrier/storage boundary and gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_multimodal` | For a multimodal logistics plan, specify at least two modelled modes, each planned leg/carrier/terminal interface, handoff constraints, scenario assumptions and accepted plan/support deliverable. Do not undertake client forwarding or carrier procurement as a presumed eligible plan; modelled interfaces are not execution of carriage. Classify by actual function and separability, not fees or vehicle ownership. | un-cpc-67910; un-cpc-85630 |
| `boundary_plan` | For consulting/support, specify transportation/warehouse/distribution problem, sites/network, horizon, scenarios, constraints, input-data quality and accepted plan or operational-support deliverable. Actual implementation/warehouse operation is a separately identified module. |  |
| `boundary_documents` | For independent non-intermediary issue/acquisition, record issuer/requester, type, consignment link, unique identifier, master/house relationship, version, copies, authorization and delivery/receipt. Positively establish the separate document function; exclude documents inseparable from client forwarding, carrier procurement or customs brokerage. Obtaining a carrier document does not itself make the service carrier or prove67910 eligibility. Corrections, replicas and repeated electronic submission are not duplicate new support outputs. | ec-efti-context |
| `boundary_supplier` | Map hosting/network/specialist supplier responsibilities, time/configuration and included power, cooling, hardware and document processing. Either use the complete purchased service or its justified decomposition once; fees and whole-freight invoices are not physical quantities. |  |
| `boundary_actual` | Include attributable site/IT, printing, travel, maintenance and assets for the actual family; screen actual heating/cooling gases, other fuels, storage/data services and waste, adding each real atomic exchange. Unknown consumption is not zero. |  |
| `boundary_resource_placement` | Resource placement does not restrict eligibility to one service family: include actual task-related fieldwork/coordination travel for an independent document job and actual printing for a planning/support deliverable. Apply each card and protocol to the real eligible task, retain all corrections/retries and common-resource attribution once, and do not create an extra planning or document reference output. Digital-only tasks have no assumed paper use; absent travel needs documented applicability rather than an invented trip. |  |

## 6. Process Inventory Structure

Common resources are recorded once across the selected family or genuine package. Conditional row placement below describes their usual role, not a ban on measured coordination travel or printed consulting deliverables. Attribute each such actual row to the real task without duplicate common inputs. Electronic and hardcopy routes remain separate scenarios.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| support | Execute, support and close the qualified job | required | Every actual accepted job with shared resources and unique output | foreground_production | per reference flow |
| multimodal_plan | Develop multimodal logistics planning deliverable | conditional | Verified non-intermediary multimodal plan/support component; actual independent consulting subcontract only | foreground_production | per reference flow |
| planning | Perform task-related fieldwork, coordination and staff travel | conditional | Actual fieldwork or staff travel for the selected eligible planning/support or independent document task; no travel is presumed | foreground_production | per reference flow |
| documents | Prepare eligible deliverable records and actual printed copies | conditional | Actual independent transport-document processing or printing for an eligible planning/support deliverable; electronic-only tasks do not imply printing | foreground_production | per reference flow |

### Process: Develop multimodal logistics planning deliverable (`multimodal_plan`)

#### Inputs

##### Product flows

###### Multimodal logistics planning consultancy, defined deliverable (`planning_subcontract`)

Only an independently identifiable planning-consultancy subcontract, with its own modelled modes, network/consignment scope, interfaces and accepted plan. Exclude carrier procurement, forwarding and customs brokerage on behalf of clients, actual carriage and the principal own work already covered.

- Selected flow: Multimodal logistics planning consultancy, defined deliverable
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_supplier.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplier`
- Sources:

### Process: Perform task-related fieldwork, coordination and staff travel (`planning`)

#### Inputs

##### Product flows

###### Petrol, unleaded (`petrol`)

Only actual operator-controlled petrol-car travel for fieldwork, coordination, planning/support or the independent document task within the eligible job; measure actual fuel and allocation. This is staff travel, not customer freight carriage.

- Selected flow: Petrol, unleaded
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_travel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_travel`
- Sources:

###### Petrol passenger car (`car_asset`)

Only an actual controlled vehicle used for the eligible job fieldwork, coordination or independent document task; allocate supported lifetime utilization and identify included maintenance/tyres/oil. Hired travel services that already include vehicle production are not charged this asset again.

- Selected flow: Petrol passenger car
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Rail passenger transport service (`rail_travel`)

Actual staff journey passengers multiplied by actual route distance, with train/class/geography and supplier scope. pkm means one passenger carried one kilometre; customer cargo distance is excluded.

- Selected flow: Rail passenger transport service
- Flow property / unit: Passenger-distance / pkm
- Amount rule: Attributable measured exchange amount per reference flow; cp_travel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_travel`
- Sources:

###### Air passenger transport service (`air_travel`)

Conditional actual project travel, retaining itinerary, cabin class, passengers and supplier emissions/asset boundary; no assumed flight per consignment. Airline combustion is upstream once, not an office direct emission.

- Selected flow: Air passenger transport service
- Flow property / unit: Passenger-distance / pkm
- Amount rule: Attributable measured exchange amount per reference flow; cp_travel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_travel`
- Sources:

### Process: Prepare eligible deliverable records and actual printed copies (`documents`)

#### Inputs

##### Product flows

###### Uncoated woodfree printing paper (`paper`)

Only actual printed planning/support deliverables or independent transport documents, including corrections and authorized copies within the declared eligible job; reconcile paper issued, returns and spoiled sheets by actual stock/print records. Electronic records do not imply zero hosting or transmission.

- Selected flow: Uncoated woodfree printing paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_documents.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_documents`
- Sources:

###### Black electrophotographic printer toner (`toner`)

Actual net toner use for the eligible printed deliverable, including reprints, with cartridge tare/remaining toner and supplier product boundary; other inks are separate specific rows.

- Selected flow: Black electrophotographic printer toner
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_documents.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_documents`
- Sources:

###### Electrophotographic office printer (`printer`)

Actual eligible-deliverable printing hardware share by supported lifetime and observed printing utilization; toner and cartridge inclusion checked to avoid double counting.

- Selected flow: Electrophotographic office printer
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

### Process: Execute, support and close the qualified job (`support`)

#### Inputs

##### Product flows

###### Electricity, alternating current (`electricity`)

Actual office, workstation, local server, printing, communications, cooling and UPS losses attributable to the declared jobs. Hosted-provider electricity already inside a purchased service is not imported again as local electricity.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Hosted virtual-machine instance computing service, specified configuration (`host_compute`)

Actual configured instance-hours for route comparison, warehouse/distribution modelling, multimodal tracking or document generation; retain vCPU, memory, storage inclusion, region and allocated shared-runtime evidence. A server-hour is not an employee-hour.

- Selected flow: Hosted virtual-machine instance computing service, specified configuration
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per reference flow; cp_digital.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_digital`
- Sources:

###### Internet data transmission service (`network_data`)

Actual attributable transmitted data for carrier/terminal interfaces and freight documents; GB means decimal 1000000000 bytes. Retain provider, traffic boundary and upstream inclusions; do not treat messages or documents as fixed byte amounts.

- Selected flow: Internet data transmission service
- Flow property / unit: Data volume / GB
- Amount rule: Attributable measured exchange amount per reference flow; cp_digital.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_digital`
- Sources:

###### Laptop computer (`laptop`)

Actual analyst/coordinator hardware manufacturing and retirement share using supported physical life and task utilization; do not duplicate hardware included in a hosted-service inventory.

- Selected flow: Laptop computer
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Office building (`office_building`)

Actual allocated workspace construction/retirement share; retain floor area, physical life, occupancy and job-time driver, excluding separately inventoried equipment.

- Selected flow: Office building
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Valve-regulated lead-acid UPS battery (`lead_battery`)

Only actual local UPS chemistry and capacity; initial/replacement battery coverage must be separate from supplier hardware and supported by observed service life. Other chemistries require independent rows.

- Selected flow: Valve-regulated lead-acid UPS battery
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### 1,1,1,2-Tetrafluoroethane, refrigerant R134a (`r134a_input`)

Only actual office/server cooling of this species; reconcile stock, contractor additions, initial equipment charge, returns and recovery. Another refrigerant is not represented by this card.

- Selected flow: 1,1,1,2-Tetrafluoroethane, refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

#### Outputs

##### Product flows

###### Completed qualified freight-support engagement (`support_job`)

One accepted task with family-specific deliverable and interfaces under cp_service. The following actual waste/release rows retain the source task and physical origin.

- Selected flow: Completed qualified freight-support engagement
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources:

##### Waste flows

###### Discarded uncoated printing paper (`waste_paper`)

Actual spoiled/superseded hardcopies disposed within the job boundary; confidential shredding and receiving recycling/treatment are documented once, no automatic virgin-paper credit.

- Selected flow: Discarded uncoated printing paper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded laptop computer (`waste_laptop`)

Actual retirement allocated to delivered jobs with receiver, electronics treatment and physical configuration; do not infer disposal per completed document.

- Selected flow: Discarded laptop computer
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent valve-regulated lead-acid UPS battery (`waste_battery`)

Actual same-capacity UPS unit retirement, distinct from another battery chemistry; receiving recycling and residual treatment explicit.

- Selected flow: Spent valve-regulated lead-acid UPS battery
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent black electrophotographic toner cartridge (`waste_cartridge`)

Actual spent cartridge with remaining toner, take-back/reuse and receiving treatment; do not duplicate residual toner mass as both separate waste and whole cartridge.

- Selected flow: Spent black electrophotographic toner cartridge
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2_air`)

Only actual controlled petrol-car combustion attributed to support travel; cargo trucks/vessels/trains/aircraft are not these office direct emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide, to air (`co_air`)

Actual controlled petrol-vehicle CO with measured or justified vehicle/fuel/duty-specific evidence, separately from CO2.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen monoxide, to air (`no_air`)

Resolve actual NO species from duty evidence; a total NOx-as-NO2 factor is not automatically a measured NO mass.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide, to air (`no2_air`)

Separate actual NO2 from NO; supplier-controlled rail/air combustion stays in purchased passenger-service inventories.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Particulate matter, aerodynamic diameter below 2.5 micrometres, to air (`pm25_air`)

Actual fine combustion fraction from controlled vehicle, with non-overlapping particle fractions; assess actual tyre/brake/road-wear species separately when included.

- Selected flow: Particulate matter, aerodynamic diameter below 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### 1,1,1,2-Tetrafluoroethane, to air (`r134a_air`)

Actual species loss after stock, equipment-charge and recovery/transfer reconciliation; purchased refrigerant or contractor refill alone is not atmospheric loss.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_direct` | Prefer direct job logs, metering and runtime/document records. Allocate shared office/IT by documented causal capacity/time/activity drivers; retain standby, administration, rejected attempts and rework attributable to delivery. |  |
| `allocate_families` | Partition genuinely different families, complexity/route/network/document scopes and channels before repeat-job normalization. A combined contract is not multiplied into a multimodal plan, other planning support and document output each carrying the whole burden. |  |
| `allocate_assets` | Use supported physical service lives and actual utilization for office, laptops, printing, UPS batteries and staff vehicles; financial depreciation is not assumed life. Respect hosted/rental-service included equipment and initial charges. |  |
| `allocate_goods` | Cargo, existing documents and information remain custody objects; no cargo sale/co-product allocation. Link each actual carrier/warehouse/handling burden once downstream; no automatic avoided freight, inventory, paper or fuel credit from the recommended plan. |  |
| `allocate_gas` | Separate actual recovered/transferred refrigerant from atmospheric loss; document recycling treatment without assumed substitution credit. | epa-gas-balance |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | support | support_job | foreground record | job/family/package; client instructions; modes/legs/consignments/handoffs; plan sites/horizon/scenarios/constraints; document identifiers/versions/copies/channels; actual effort/start/end; acceptance/rework | Reconcile delivered scope against contract and client acceptance; use positive role/separability proof, planned provider/carrier interface matrix, plan-review record or authorized independent document receipt as applicable; retain revisions and failed work. | item | each engagement and revision | same declared job/reporting period | identified actual site/provider and job | per reference flow | accepted delivery, change-control and cross-party reconciliation |
| cp_supplier | support | planning_subcontract | foreground record | subcontractor role/output; modes/extent; functional boundary; own/provider split; included documents/IT/carriage; quantity | Direct-read actual independent planning/support deliverable and supplier upstream boundary; exclude client forwarding, carrier procurement, customs brokerage and carriage, rather than converting a total invoice into support quantity. | item | each supplier task | same declared job/reporting period | identified actual site/provider and job | per reference flow | supplier deliverable, boundary and duplication check |
| cp_energy | support | electricity | foreground record | meter/time; task/site/circuit; local IT/cooling/UPS and office support; allocation; supplier supply | Measure actual local consumption and physical task allocation; reconcile site totals without importing hosted-provider energy twice. | kWh | meter period and job | same declared job/reporting period | identified actual site/provider and job | per reference flow | meter calibration, bills and job utilization |
| cp_digital | support | host_compute; network_data | foreground record | provider/region/configuration; instance-runtime; storage inclusion; data bytes; job/call/document ids; power/hardware/cooling coverage | Reconcile actual configured runtime and transmitted bytes with task records; separate replicas/retries from new outputs and supplier aggregates from component inventories. | h; GB | job/runtime and billing period | same declared job/reporting period | identified actual site/provider and job | per reference flow | usage exports and supplier boundary/version |
| cp_documents | support | paper; toner | foreground record | deliverable/job id; eligible planning/support or independent transport-document purpose; type/version/copies; print pages; paper size/grammage or mass; toner net/tare; issue/return/spoil; digital route | Track actual material balances for eligible planning/support printouts or independent transport documents, including corrections and authorized copies. Count the accepted support_job once rather than printed copies, and retain actual inputs used by rejected versions. | kg | each job/print and stock period | same declared job/reporting period | identified actual site/provider and job | per reference flow | print/stock logs, measured net material and version audit |
| cp_travel | support | petrol; rail_travel; air_travel | foreground record | purpose/job; actual itinerary/passengers; route distance; vehicle/class; fuel stock/use; shared trip; purchased-service coverage | Collect only actual staff support journeys; reconcile fuel or passenger-distance separately by mode and attribute shared trips using documented task purpose, never cargo tonne-kilometres. | kg; pkm | each journey | same declared job/reporting period | identified actual site/provider and job | per reference flow | journey records, fuel evidence and supplier scope |
| cp_asset | support | laptop; office_building; lead_battery; car_asset; printer | foreground record | asset/configuration/capacity; floor area; actual life/utilization; initial components; replacement/retirement; supplier inclusions | Bind actual assets and physical lifetime evidence to job use; allocate manufacture/maintenance/retirement while excluding duplicated upstream service coverage. | item; m2 | asset event and period | same declared job/reporting period | identified actual site/provider and job | per reference flow | asset/maintenance records and supported life/utilization |
| cp_gas | support | r134a_input; r134a_air | foreground record | species; opening/closing stored inventory; acquisitions; offsite/recovery transfers; equipment charge start/end; function share | Reconcile actual species stocks and equipment content with contractor records; additions from existing site stock are not additional acquisitions; loss and upstream supply are different quantities. | kg | each transfer and period boundary | same declared job/reporting period | identified actual site/provider and job | per reference flow | cylinder/service/recovery records and complete balance |
| cp_waste | support | waste_paper; waste_laptop; waste_battery; waste_cartridge | foreground record | specific waste; mass/unit configuration; residual content; source task; receiver/reuse/treatment; allocated share | Measure each real waste separately, retaining data-confidentiality handling and receiver boundary; reconcile whole cartridge/battery units and residual material without duplication. | kg; item | each transfer | same declared job/reporting period | identified actual site/provider and job | per reference flow | waste/take-back receipts and receiver evidence |
| cp_emission | support | co2_air; co_air; no_air; no2_air; pm25_air | foreground record | controlled vehicle/fuel/duty; actual fuel; species/fraction; measured exhaust or factor/version/unit; attribution | Measure actual species or use justified vehicle/fuel/duty evidence; convert NOx only with defensible speciation and distinguish upstream passenger/freight emissions. | kg | actual controlled journey and period | same declared job/reporting period | identified actual site/provider and job | per reference flow | fuel/exhaust evidence, factor applicability and species audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_denominator | support_job | N is the count of compatible accepted jobs in the explicitly defined family/configuration and extent. One actual job has N=1; require N positive, exclude duplicate versions/copies and record incomplete work disposition. | cp_service | N |  |
| physical_allocation | all inventory rows | Attribute each measured numerator directly to the job or by documented causal site/runtime/activity shares, then divide by N. Sum allocation shares within the measured supplier/site period to its reconciled total. No fees, freight tkm or nominal number of documents substitute for measured resource use. | cp_service; cp_energy; cp_digital; cp_documents; cp_travel | exchange per reference flow |  |
| gas_loss | r134a_air | Actual loss = opening stored stock + acquisitions + opening equipment content - closing stored stock - offsite transfers - closing equipment content. Recovery remains in closing stock or offsite transfer once; investigate negative/unclosed balances, then allocate measured job share per N. If actual content is unavailable, any capacity-based approximation must explicitly assess undercharge and uncertainty rather than claim exact physical closure. | cp_gas; cp_service | species loss per reference flow | epa-gas-balance |
| asset_share | laptop; office_building; lead_battery; car_asset; printer | Allocate actual asset manufacture, maintenance and retirement using supported physical life and actual utilization; attribute period job shares per N. Do not infer replacement intervals or multiply hosted-provider hardware twice. | cp_asset; cp_service | asset share per reference flow |  |
| benefit_separation | logistics plan or digital-route benefit claims | Any claimed saved fuel, distance, stock or paper requires a separately defined baseline/counterfactual with equal delivered function, actual adoption, boundaries and uncertainty. Keep comparison outside the positive support inventory; no default negative exchange. | cp_service; comparison study | separate comparison disclosure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_deliverable | support_job | Verify family, accepted physical extent/complexity and completion evidence; invoice title, fee or a file count alone is inadequate. | cp_service |
| dq_interfaces | planning_subcontract | Modelled modes/legs/carrier and terminal interface constraints with duplicate-plan/document checks; prove supplier independent planning role, not forwarding or brokerage. | cp_supplier; cp_service |
| dq_inputs | host_compute; network_data; paper; toner | Match instance configuration, actual runtime/bytes, paper/toner balance and revision/retry scope; preserve independent provider processing versus own work. | cp_digital; cp_documents |
| dq_lifecycle | all inventory rows | Report actual geography/period, supplier/asset lives, gas/travel uncertainty and upstream omissions; unknown or unresolved data is not zero. | cp_energy; cp_asset; cp_gas; cp_travel |
| dq_identity | all inventory rows | Resolve each flow and applicable support identity before linked production; historical reference-count support does not resolve inventory flow UUIDs. | direct identity verification |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_scope` | Require positively evidenced logistics consulting/planning/support or separable independent non-intermediary transport-document issue/acquisition. Exclude85610/85630 roles including sea/air freight agents, on-behalf-client organization/forwarding and customs brokerage. Fees, non-ownership of vehicles or coordination wording do not establish applicability. | un-cpc-67910; un-cpc-85630 |
| `validate_reference` | Require unique support_job at1 item, positive N, complete family-specific extent/complexity/time/interfaces and acceptance. Reject pooled unrelated jobs, duplicate document/copy outputs and a fee/tkm-based output. |  |
| `validate_inventory` | Verify actual computing/network/document/field-work resources and each atomic exchange; reconcile supplier power/hardware, original assets and hosted service, materials/wastes and gas stocks without duplication. |  |
| `validate_system` | A support-only boundary must disclose separately linked actual carrier/storage/handling burdens in the freight system, never imply transport is emission-free. No default optimization/paperless credit or certification follows. |  |
| `validate_unit_export` | Treat item only as the singular local alias of the formal Number of items unit Item(s). Export Item(s) with the same numerical count and the fully qualified service definition; changing the display token does not change the flow property, service extent or normalization denominator. Do not convert a service item to time, mass, distance or a different family by relabelling its unit, or normalize an already per-reference quantity again. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process defined freight-support engagement |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same positively evidenced non-intermediary planning/document family or eligible package, responsibility, completion, complexity/extent and physical boundaries; separate actual freight modules |
| excluded_use | Universal per-consignment/document/tkm fee factor; client forwarding/carrier procurement/customs brokerage; all67910 arranging; whole freight-chain footprint; assumed optimization savings |
| required_metadata | All required qualifiers; accepted N and actual effort; planning mode/handoff interface matrix and role/separability proof; planning acceptance or document-version reconciliation; runtime/material/travel/asset data and supplier coverage |
| required_quality_disclosure | UUID/support gaps; job comparability limits; cancelled/rework allocation; supplier/asset duplication audit; carrier/storage links; digital/gas/travel/lifetime uncertainties |
| update_trigger | Family/contract/route/mode/network/consignment or document-system change; hosting configuration/region, supplier boundary, material/travel/asset/lifetime or data-quality change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-67910 | official_guidance | UNSD CPC3.0 67910. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67910 | Three support-service families and passenger/freight intermediation exclusions. |
| un-cpc-85630 | official_guidance | UNSD CPC3.0 explanatory notes, PDF pages453-454,85630. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | Counterevidence: freight agents, client consignment organization/forwarding and customs brokerage are included in intermediation; conservative functional separation. |
| ec-efti-context | official_guidance | European Commission, Towards Paperless Freight Transport: EU takes a step forward with eFTI Regulation implementation,2025-01-09. https://transport.ec.europa.eu/news-events/news/towards-paperless-freight-transport-eu-takes-step-forward-efti-regulation-implementation-2025-01-09_en | Technical context for paper/electronic freight information and integrated IT data exchange; no implementation date, cost saving, universal certification or LCA reduction factor adopted. |
| epa-gas-balance | official_guidance | US EPA, Direct Fugitive Emissions from Refrigeration, Air Conditioning, Fire Suppression, and Industrial Gases,2020,section2.3. https://www.epa.gov/sites/default/files/2020-12/documents/fugitiveemissions.pdf | Species/stock/acquisition/equipment/offsite balance principle for actual cooling; physical-content and capacity approximation distinguished; no default leakage factor or GWP. |
