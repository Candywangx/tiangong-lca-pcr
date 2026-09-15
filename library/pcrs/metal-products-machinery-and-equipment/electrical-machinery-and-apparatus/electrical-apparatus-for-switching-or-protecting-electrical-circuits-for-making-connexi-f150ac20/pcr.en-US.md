---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-apparatus-for-switching-or-protecting-electrical-circuits-for-making-connexi-f150ac20
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V

## 1. Scope and Applicability

This PCR applies to factory-gate foreground data packages for discrete electrical apparatus whose principal function is switching, protecting, controlling by electromechanical switching, or making a connection to or within an electrical circuit, with a declared rated voltage not exceeding 1,000 V. Covered families include circuit-breakers and related protective devices; fuses, fuse-links, fuse-holders, and fuse-combination units; switches and disconnectors; relays and control-circuit switching devices; contactors and motor-starter switching devices; terminals, plugs, sockets, and electrical connectors. The declared product family and applicable product standard are mandatory scope facts.

This is a family-separated PCR, not a rule for an undifferentiated average of the entire category. A data package shall represent one declared product family and a homogeneous model group. It shall not extrapolate a household circuit-breaker, one industrial contactor, one fuse design, or one connector design to the whole category. Comparisons require the same product family, electrical function, rated-voltage basis, rated-current basis, duty or utilization category, protective or switching performance, pole or contact configuration, and reference-flow convention.

The default boundary is cradle-to-factory-gate production of tested finished apparatus. It includes received materials and purchased components, controlled component preparation, assembly, factory testing, direct utilities and process aids, production losses and wastes, and primary packaging when supplied with the product. Installation, switchboard or cabinet integration, use-phase losses and operations, maintenance, replacement, and end-of-life are outside the default boundary and require separate scenarios.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-apparatus-for-switching-or-protecting-electrical-circuits-for-making-connexi-f150ac20 |
| classification_refs | CPC 3.0: 46212 |
| covered_products | Discrete apparatus rated not above 1,000 V whose principal function is circuit switching, circuit protection, electromechanical control switching, or electrical connection, including circuit-breakers, fuses and fuse apparatus, switches and disconnectors, relays, contactors, motor-starter switching devices, terminals, plugs, sockets, and connectors. |
| excluded_products | Apparatus whose declared rated voltage exceeds 1,000 V; equipped boards, consoles, cabinets, and other assembled control or distribution bases; optical-fibre connectors; standalone power-conversion or programmable-control equipment whose principal function is not switching, protection, or connection; loose parts not placed on the market as the declared apparatus; installation, use, and end-of-life services. |
| representative_product | One declared homogeneous model group from one apparatus family; no single family is representative of all CPC 46212 products. |
| production_route | Receipt of materials and components; controlled forming, machining, moulding, contact or conductor preparation and surface treatment when performed; mechanical and electrical assembly; family-specific factory testing; and conditional primary packaging. |
| market_state | Tested finished apparatus at the factory gate, with separate packaging mass and the supplied accessories declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Tested finished low-voltage switching, protecting, control-switching, or electrical-connection apparatus from one declared product family and homogeneous model group. |
| How much | 1 kg net mass of apparatus, excluding separately reported packaging. |
| How well | Meets the declared applicable product standard and factory acceptance criteria for its family and declared electrical ratings; nonconforming, untested, or mixed-family output is excluded. |
| How long or cycle | One completed manufacturing and factory-testing cycle; service life and number of switching or mating operations are qualifiers, not part of the 1 kg production reference. |
| reference_flow_link | `conforming_tested_apparatus` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V `13907748-8b4f-4da3-8108-c81720ca7799` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | apparatus family; model or homogeneous model group; AC and/or DC application; rated operational voltage and confirmation that it does not exceed 1000 V; rated current or current per contact; number of poles or contact configuration; applicable product standard and edition; duty or utilization category; making or breaking or short-circuit or trip or protection characteristic when relevant; control or coil rating when relevant; connector contact count and mating characteristic when relevant; enclosure or ingress-protection class when relevant; net product mass; supplied accessories; factory-test plan; market geography and production period |

When constructing a foreground data package, every applicable item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A non-applicable qualifier shall be marked as such with the reason. Missing family identity or rated-performance qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the data package to 1 kg measured net mass of conforming tested apparatus. Do not include separately reported packaging, shipping accessories, test fixtures, or installation hardware unless sold as an inseparable part of the declared apparatus. |
| `model_group_mass` | multi-model production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts to mass using measured model-specific or production-lot net masses and production quantities; do not use one household or industrial device mass for another apparatus family. |
| `material_mass_reconciliation` | bill of materials and manufacturing losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile received and incorporated conductor, contact, ferrous, non-ferrous, polymer, elastomer, ceramic, electronic, magnetic, and other material masses with product output, measured scrap, rejects, and stock change over the same period. |
| `rated_parameter_identity` | family and performance declaration | Family-specific electrical property | declared engineering unit | Preserve nameplate or technical-file units for rated voltage, current, breaking or making capacity, trip or time-current characteristic, contact configuration, utilization category, and connector ratings. These parameters qualify the mass reference and shall not be averaged across incompatible families. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_family_separation` | all foreground data packages | Model one declared apparatus family and homogeneous model group. Separate circuit-breakers, fuses, switches or disconnectors, relays or control devices, contactors or starters, and connection devices whenever their bills of materials, manufacturing routes, or factory tests differ materially. | `iec-60947-1-2020`; `iec-60947-2-2024`; `iec-60947-3-2020`; `iec-60947-4-1-2023`; `iec-60947-5-1-2024`; `iec-60269-1-2024`; `iec-61984-2008` |
| `boundary_cradle_to_gate` | declared product system | Include upstream production of received materials and purchased components plus controlled component preparation, assembly, factory testing, direct utilities, process aids, production wastes, and primary packaging when supplied. | `iec-60947-1-2020`; `iec-ts-63058-2021` |
| `boundary_material_identity` | bill of materials | Record actual material and component identities and masses, including conductors, contacts and plating, structural metals, insulating polymers or thermosets, elastomers, ceramics, coils, magnets, electronics, arc-control parts, fasteners, and other family-specific parts. Do not substitute a generic household-device composition for the declared apparatus. | `iec-62474-2018`; `iec-60947-1-2020` |
| `boundary_factory_tests` | factory testing | Include the actual family-specific routine or acceptance tests, test electricity, consumed test articles or consumables, rework, rejects, and directly measured releases. Declare the applicable product standard and test plan. | `iec-60947-1-2020`; `iec-60947-2-2024`; `iec-60947-3-2020`; `iec-60947-4-1-2023`; `iec-60947-5-1-2024`; `iec-60269-1-2024`; `iec-61984-2008` |
| `boundary_use_and_system_exclusion` | downstream scenarios | Exclude installation, board or cabinet integration, operational losses, switching or contact wear, maintenance, replacement, and end-of-life from the default factory-gate result. Model them only in separately declared downstream scenarios using family-specific performance and service-life evidence. | `iec-ts-63058-2021`; `iec-60898-1-2015` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received raw materials, purchased components, and supplier-certified subassemblies at the reporting factory gate, with opening stock, purchases, returns, and closing stock identified for the reporting period. |
| starting_condition_role | Boundary start for foreground manufacturing and the link point to upstream datasets. |
| product_classification_scope | Discrete switching, protecting, electromechanical control-switching, or electrical-connection apparatus with declared rated voltage not exceeding 1,000 V; family identity remains explicit within the scope. |
| recursive_input_rule | A purchased input that is itself within this product category remains a visible product or subassembly input. Link it once to a supplier-specific or representative upstream dataset and do not recursively absorb or relabel it as the reporting factory's own finished product. |
| upstream_dataset_requirement | Every material, component, subassembly, energy carrier, treatment, and transport input crossing the starting boundary requires a geographically and technologically appropriate upstream dataset or a documented data gap. |
| disclosure | Declare apparatus family, model grouping, rated parameters, applicable standards, material and component coverage, supplier-data coverage, controlled versus purchased preparation, assembly route, test plan and pass/rework/reject treatment, packaging convention, geography, period, exclusions, and allocation choices. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | Component and conductive-path preparation | `conditional` | Include every forming, machining, stamping, moulding, contact or terminal preparation, plating, coil winding, fuse-element preparation, or insulating-part operation controlled by the reporting organization; otherwise represent the item as a purchased input with an upstream dataset. | Foreground or linked upstream component production | kg of accepted prepared components transferred to assembly |
| `apparatus_assembly` | Apparatus assembly | `required` | Always included. | Mechanical and electrical assembly of the declared family and model group | kg of assembled apparatus transferred to testing |
| `factory_testing` | Family-specific factory testing and disposition | `required` | Always included. | Verification, rework disposition, and release of conforming finished apparatus | 1 kg net conforming tested apparatus |
| `primary_packaging` | Primary packaging | `conditional` | Include when packaging is supplied with the factory-gate product; report packaging separately from net apparatus mass. | Packing of released product for dispatch | 1 kg net apparatus packed, with separate packaging inventory |

### Process: Component and conductive-path preparation (`component_preparation`)

#### Inputs

##### Product flows

###### Declared materials and purchased parts (`declared_materials_parts`)

Record the actual materials and purchased parts entering controlled preparation, separated at least into conductor and terminal metals, contact materials and plating, structural metals, polymers or thermosets, elastomers, ceramics or other insulation, coils or magnets, electronics, arc-control parts, and other family-specific components.

- Selected flow: Supplier- and material-specific product flows selected from the current Tiangong database
- Flow property / unit: Mass / kg
- Amount rule: measured receipts adjusted for returns and stock change, reconciled to issued material and component records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_receipts`
- Sources: `iec-62474-2018`

###### Preparation electricity (`preparation_electricity`)

Record metered electricity used by included forming, machining, stamping, moulding, plating, winding, and related preparation operations, allocated only after practical submetering or subdivision.

- Selected flow: Geography- and voltage-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity for included preparation operations divided by conforming reference-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_energy_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted prepared components (`accepted_prepared_components`)

Record components accepted for transfer to assembly after controlled preparation and inspection.

- Selected flow: Product- and family-specific prepared component flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or model-specific item count converted with measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted prepared components
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_transfer_records`
- Sources:

##### Waste flows

###### Preparation scrap and treatment outputs (`preparation_scrap`)

Record metal, polymer, ceramic, electronic, plating, and mixed scrap separately by material and actual treatment route; do not net recycling proceeds or avoided-product credits from the input inventory.

- Selected flow: Waste-specific flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured scrap, sludge, spent bath, and reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_waste_release_records`
- Sources:

##### Elementary flows

###### Direct preparation releases (`preparation_direct_releases`)

Record only directly measured or permit-calculated releases from included preparation operations, such as plating or surface-treatment emissions and discharges; do not duplicate releases already contained in upstream product or treatment datasets.

- Selected flow: Substance- and compartment-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: measured release or documented calculation from sampled concentration and treated volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_waste_release_records`
- Sources:

### Process: Apparatus assembly (`apparatus_assembly`)

#### Inputs

##### Product flows

###### Prepared and purchased functional components (`assembly_components`)

Record all prepared and purchased conductive paths, terminals, contacts, switching or protective mechanisms, fuse elements, coils, magnets, electronic modules, insulating housings, arc-control parts, fasteners, and accessories actually incorporated into the declared apparatus.

- Selected flow: Supplier- and component-specific product flows selected from the current Tiangong database
- Flow property / unit: Mass / kg
- Amount rule: measured issue quantities from the model-specific bill of materials, adjusted for returns and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom_receipts`
- Sources: `iec-62474-2018`

###### Assembly electricity (`assembly_electricity`)

Record metered electricity for mechanical assembly, fastening, soldering, joining, curing, marking, and in-line inspection.

- Selected flow: Geography- and voltage-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered assembly electricity divided by assembled output mass, using documented allocation for shared lines
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy_records`
- Sources:

###### Assembly aids and consumables (`assembly_aids`)

Record adhesives, solder, lubricants, cleaning agents, labels, and other consumables that physically enter the product or are consumed by assembly; retain substance identity and treatment route where relevant.

- Selected flow: Material-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: measured issue quantity adjusted for returns and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom_receipts`
- Sources: `iec-62474-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled apparatus transferred to testing (`assembled_apparatus`)

Record the assembled units transferred to the declared factory-test plan before final release.

- Selected flow: Declared family and model-group assembled apparatus
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or item count converted with model-specific measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_transfer_records`
- Sources:

##### Waste flows

###### Assembly scrap and non-reworkable rejects (`assembly_rejects`)

Record assembly scrap and non-reworkable rejected units by material or product identity and actual treatment destination.

- Selected flow: Waste-specific flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured reject and scrap mass net of documented rework returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled apparatus
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste_records`
- Sources:

##### Elementary flows

### Process: Family-specific factory testing and disposition (`factory_testing`)

#### Inputs

##### Product flows

###### Assembled apparatus submitted for testing (`test_input_apparatus`)

Record the family- and model-specific apparatus entering routine and acceptance testing.

- Selected flow: Declared family and model-group assembled apparatus
- Flow property / unit: Mass / kg
- Amount rule: measured input mass or tested item count converted with model-specific measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test_records`
- Sources: `iec-60947-1-2020`

###### Factory-test electricity and consumables (`test_energy_consumables`)

Record electricity, replaceable test articles, calibration gases or liquids, and other consumables used by the actual test plan. Keep destructive type-test campaigns separate from routine production testing and include them only when allocated to the declared production period.

- Selected flow: Geography-specific electricity and consumable-specific product flows
- Flow property / unit: Energy / kWh for electricity; Mass / kg or item for other consumables
- Amount rule: metered or logged test consumption assigned to the declared model group and divided by conforming output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test_records`
- Sources: `iec-60947-1-2020`; `iec-60947-2-2024`; `iec-60947-3-2020`; `iec-60947-4-1-2023`; `iec-60947-5-1-2024`; `iec-60269-1-2024`; `iec-61984-2008`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming tested apparatus (`conforming_tested_apparatus`)

This is the reference product output. Release only apparatus that passed the declared family-specific factory acceptance criteria; report family, ratings, standard, test plan, model-group mass, and pass quantity.

- Selected flow: Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V `13907748-8b4f-4da3-8108-c81720ca7799`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net conforming tested apparatus after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Test rejects and consumed test articles (`test_rejects`)

Record non-reworkable failed units, destructively tested articles, and consumed protective elements separately from units returned to rework. Assign their actual treatment routes and do not subtract recovery credits from production inputs.

- Selected flow: Product- or material-specific waste flow by treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured failed or consumed mass net of units documented as returned to rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test_records`
- Sources:

##### Elementary flows

### Process: Primary packaging (`primary_packaging`)

#### Inputs

##### Product flows

###### Released apparatus for packing (`released_apparatus`)

Record the net mass of conforming tested apparatus entering primary packaging without changing the reference-product mass.

- Selected flow: Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V `13907748-8b4f-4da3-8108-c81720ca7799`
- Flow property / unit: Mass / kg
- Amount rule: measured net apparatus mass transferred from factory testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch_records`
- Sources:

###### Primary packaging materials (`primary_packaging_materials`)

Record packaging supplied with the product by material and mass, including model-specific inserts, protective caps, bags, cartons, labels, and pallets when attributable. Packaging remains separate from net apparatus mass.

- Selected flow: Material-specific packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issue quantity divided by net dispatched apparatus mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed apparatus for dispatch (`packed_apparatus`)

Record 1 kg net conforming apparatus prepared for dispatch, with packaging mass reported as a separate input and metadata field.

- Selected flow: Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V `13907748-8b4f-4da3-8108-c81720ca7799`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net apparatus after normalization; packaging mass is excluded from this amount
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Packaging losses (`packaging_losses`)

Record packaging offcuts, damaged packaging, and rejected labels by material and destination.

- Selected flow: Waste-specific flow by packaging material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste mass divided by net dispatched apparatus mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming tested apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared production lines and utilities | First separate records by apparatus family, model group, production route, and test plan. Use physical submetering, work orders, machine time, test logs, and production quantities before applying allocation. | `iec-ts-63058-2021` |
| `allocation_causal_then_mass` | inseparable shared inputs and outputs | When subdivision is impracticable, use a documented causal driver such as machine time, test duration, or measured energy demand. Use net conforming product mass only when no defensible causal relation is available, and disclose the affected share and sensitivity. | `iec-ts-63058-2021` |
| `allocation_rework_and_rejects` | rework, rejects, and destructive testing | Return rework burdens to the model group that caused them. Assign non-reworkable rejects and destructive-test articles to the tested production lot; do not distribute one family's test burden across unrelated families. | `iec-60947-1-2020` |
| `allocation_recycling_separate` | manufacturing scrap and recovered materials | Report scrap mass, composition, and actual treatment route at the factory gate. Do not net scrap revenue, recycled-content claims, or avoided virgin-material credits from foreground inputs; any recycling credit requires a separately declared downstream method and sensitivity result. | `iec-ts-63058-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom_receipts` | `component_preparation` | materials, parts, contacts, conductors, insulation, and preparation aids | model-controlled BOM, purchase receipt, issue and return transaction, stock record, supplier material declaration | family, model, part number, supplier, material class, substance or plating identity where declared, quantity, unit mass, receipt, issue, return, opening stock, closing stock | reconcile controlled BOM revisions to purchase and stores transactions; verify unit masses by calibrated scale sampling | kg and item with kg/item conversion | each lot or transaction; periodic reconciliation | the complete declared representative reporting period or full production campaign | every reporting site and declared supplier tier coverage | sum net issued mass by model and material class; divide by conforming tested net mass; keep purchased subassemblies visible | BOM revision, scale calibration, supplier declaration, invoice, goods receipt, stock reconciliation, and exception log |
| `cp_assembly_bom_receipts` | `apparatus_assembly` | functional components and assembly aids | model-controlled BOM, component transfer, purchase receipt, issue and return transaction, stock record, supplier material declaration | family, model, part number, supplier, material class, component role, quantity, unit mass, receipt, issue, return, opening stock, closing stock | reconcile the assembly BOM to prepared-component transfers, purchase records, and stores transactions; verify unit masses by calibrated scale sampling | kg and item with kg/item conversion | each lot or transaction; periodic reconciliation | the complete declared representative reporting period or full production campaign | every reporting site and assembly line | sum net issued mass by model and component role; divide by assembled or conforming output mass as applicable | BOM revision, transfer record, scale calibration, supplier declaration, stock reconciliation, and exception log |
| `cp_preparation_energy_records` | `component_preparation` | preparation electricity and other metered utilities | calibrated meter, submeter, machine log, or invoice with allocation record | meter id, opening and closing reading, timestamp, preparation line, operating hours, model group, production mass, allocation driver | prefer submetering; otherwise reconcile invoice totals to submeters and allocate shared use with documented causal drivers | kWh or carrier-specific physical unit | continuous or per batch; periodic reconciliation | the same complete reporting period as prepared-component output | every included preparation line | subtract documented non-production and excluded loads; divide included use by conforming output mass | meter calibration, invoice reconciliation, downtime log, allocation worksheet, and coverage ratio |
| `cp_assembly_energy_records` | `apparatus_assembly` | assembly electricity and other metered utilities | calibrated meter, submeter, machine log, or invoice with allocation record | meter id, opening and closing reading, timestamp, assembly line, operating hours, model group, production mass, allocation driver | prefer submetering; otherwise reconcile invoice totals to submeters and allocate shared use with documented causal drivers | kWh or carrier-specific physical unit | continuous or per batch; periodic reconciliation | the same complete reporting period as assembled output | every included assembly line | subtract documented non-production and excluded loads; divide included use by assembled output mass | meter calibration, invoice reconciliation, downtime log, allocation worksheet, and coverage ratio |
| `cp_component_transfer_records` | `component_preparation` | accepted prepared-component transfers | work order, batch traveller, production execution record, count and scale record | family, model, lot, preparation process, input count, accepted count, rework count, reject count, sampled unit mass, transfer mass, timestamp | reconcile work-order quantities to calibrated scale or validated model-specific unit masses | kg and item | every batch or work order | same period as component materials and utilities | every included preparation line | convert counts with model-specific measured unit mass; aggregate accepted transfer mass without mixing families | signed batch record, scale calibration, mass sampling plan, and reconciliation exception log |
| `cp_assembly_transfer_records` | `apparatus_assembly` | assembled-apparatus transfers | work order, batch traveller, production execution record, count and scale record | family, model, lot, assembly line, input count, assembled count, rework count, reject count, sampled unit mass, transfer mass, timestamp | reconcile work-order quantities to calibrated scale or validated model-specific unit masses | kg and item | every batch or work order | same period as assembly materials and utilities | every included assembly line | convert counts with model-specific measured unit mass; aggregate assembled transfer mass without mixing families | signed batch record, scale calibration, mass sampling plan, and reconciliation exception log |
| `cp_factory_test_records` | `factory_testing` | test inputs, energy, consumables, pass, rework, rejects, and destructive samples | approved test plan, equipment log, test result, meter record, calibration record, nonconformance and disposition record | family, model, serial or lot, applicable standard, test type, rated parameters, start and end time, energy, consumables, pass result, rework, reject, destructive sample, disposition, tested mass | capture actual routine and acceptance tests; link results and consumption to serial number or lot; segregate type-test campaigns | kg, item, kWh, and test-specific engineering units | every test or test batch | same period as released production | every factory-test station used for the declared model group | sum tested inputs, passes, rework returns, rejects, samples, and test consumption; normalize to conforming net output mass | current test procedure, equipment calibration, traceable results, nonconformance closure, and pass/reject reconciliation |
| `cp_component_waste_release_records` | `component_preparation` | preparation scrap, rejects, sludge, wastewater, and direct releases | calibrated scale ticket, waste manifest, treatment record, discharge meter, laboratory result, permit calculation | preparation process, family or allocation pool, waste or substance identity, mass, volume, concentration, compartment, date, carrier, destination, treatment, rework return | measure at source where practical; reconcile site totals to preparation records; calculate releases only from documented sampled fields | kg, m3, and substance-specific unit | each shipment or discharge; periodic reconciliation | same period as prepared-component output | every included preparation process and discharge point | separate rework from waste; calculate concentration times volume where applicable; avoid duplication with upstream treatment datasets | scale calibration, signed manifest, laboratory QA, permit method, mass balance, and destination evidence |
| `cp_assembly_waste_records` | `apparatus_assembly` | assembly scrap and non-reworkable rejects | calibrated scale ticket, nonconformance record, waste manifest, and treatment record | family, model, assembly line, scrap or reject identity, mass, date, destination, treatment, rework return | measure assembly scrap and rejects at source and reconcile them to work orders and waste dispatches | kg | each batch or shipment; periodic reconciliation | same period as assembled output | every included assembly line | separate rework returns from waste; aggregate scrap and reject mass by family and destination | scale calibration, nonconformance disposition, signed manifest, mass balance, and destination evidence |
| `cp_packaging_dispatch_records` | `primary_packaging` | released product, packaging input, packaging loss, and dispatch | packing specification, material issue, scale record, dispatch record, waste record | family, model, net product mass, packaging material, packaging mass, issued amount, return, loss, shipped quantity, date | reconcile packing-specification issues and returns to dispatched net product and packaging waste | kg and item | each dispatch lot; monthly reconciliation | same period as released production | every packing and dispatch area | report packaging by material per kg net apparatus; exclude packaging from reference-product mass | approved packing specification, scale calibration, issue-return reconciliation, dispatch record, and waste evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_net_mass` | item-based production, test, and dispatch records | For each model, net mass = item count × measured model-specific net mass per item. Update the conversion after a BOM, enclosure, contact system, accessory set, or packaging-convention change. | item count; sampled net kg/item; model id; effective dates | kg net apparatus by model and period |  |
| `calc_material_balance` | materials and components | For each material or component class, net consumption = opening stock + receipts − returns − closing stock. Reconcile net consumption to incorporated product mass + measured scrap + rejects + documented stock or work-in-progress change. | stocks; receipts; returns; BOM issues; product mass; scrap; rejects; work in progress | kg input and reconciliation difference per kg conforming output | `iec-62474-2018` |
| `calc_energy_intensity` | preparation, assembly, and testing energy | Energy intensity = included metered energy ÷ net conforming tested apparatus mass for the same model group, site, and period. Allocate only residual shared energy with the declared causal driver. | meter readings; excluded loads; allocation driver; conforming output mass | kWh per kg net conforming apparatus |  |
| `calc_test_yield` | factory testing | Test yield = conforming released mass ÷ tested input mass. Report rework-return mass, non-reworkable rejects, and destructive samples separately so the ratio is auditable. | tested input; pass; rework; reject; destructive sample masses | dimensionless yield and kg dispositions per kg conforming output | `iec-60947-1-2020` |
| `calc_direct_release` | concentration-based direct releases | Release mass = sampled concentration × measured discharge or exhaust volume, with unit conversion and sampling-period coverage documented. | concentration; volume; sampling duration; conversion factor | kg substance per kg net conforming apparatus |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | product scope and reference flow | Preserve family, model group, AC/DC application, rated voltage, rated current, pole or contact configuration, applicable product standard, and all relevant switching, protection, control, or connector characteristics. Do not merge records with materially different BOMs or test plans. | controlled product master, nameplate or technical file, BOM, standard declaration, and model-grouping rationale |
| `dq_material_coverage` | materials and components | Quantify all BOM-controlled net product mass by identified material or component class and disclose every residual or unknown-material share. Contact materials, conductor metals, insulating plastics or thermosets, ceramics, electronics, coils or magnets, and arc-control parts shall not be hidden in an unexplained generic balance when present. | mass reconciliation, BOM coverage report, supplier declarations, and residual-material register |
| `dq_temporal_consistency` | all foreground records | Use one aligned, complete, and representative declared production period or complete production campaign. Explain shutdowns, abnormal test campaigns, design changes, and extrapolation. | dated raw records, production calendar, campaign dates, and representativeness assessment |
| `dq_measurement_traceability` | mass, energy, tests, and releases | Retain calibration status, sampling method, unit conversions, allocation worksheets, data owner, and raw-to-normalized lineage for every material inventory driver. | calibration certificates, meter and scale registers, laboratory QA, calculation workbook, and audit trail |
| `dq_supplier_and_upstream_coverage` | purchased materials, parts, and subassemblies | Report supplier-specific mass coverage and the share represented by secondary datasets. Match upstream datasets to material, technology, geography, and period; disclose proxies and missing links. | supplier coverage matrix, dataset mapping register, proxy rationale, and gap log |
| `dq_test_completeness` | factory testing | Demonstrate that released output passed the declared test plan and that test energy, consumables, rework, rejects, and destructive samples reconcile to the tested population. | approved test plan, test-result traceability, equipment calibration, and disposition reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_family_identity` | product identity | Reject a data package that omits apparatus family, homogeneous model-group rationale, applicable standard, rated-voltage basis, rated-current basis, pole or contact configuration, or any family-relevant switching, protection, control, or connector characteristic. | `iec-60947-1-2020`; `iec-60947-2-2024`; `iec-60947-3-2020`; `iec-60947-4-1-2023`; `iec-60947-5-1-2024`; `iec-60269-1-2024`; `iec-61984-2008` |
| `validate_voltage_scope` | product identity | Reject apparatus with a declared rated voltage exceeding 1,000 V or with ambiguous AC/DC rated-voltage evidence. Do not use a 440 V household circuit-breaker rule to validate unrelated industrial, photovoltaic, storage, charging, fuse, contactor, relay, or connector products. | `iec-60947-1-2020`; `iec-60898-1-2015` |
| `validate_reference_flow` | reference product | Require exactly 1 kg net conforming tested apparatus linked to product flow `13907748-8b4f-4da3-8108-c81720ca7799`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. Packaging mass shall be separate. |  |
| `validate_material_balance` | materials and production losses | Require material receipts, stock change, incorporated product mass, rework, scrap, rejects, and waste destinations to reconcile within a documented tolerance. Reject unexplained generic material compositions or a single-device BOM extrapolated to another family. | `iec-62474-2018` |
| `validate_process_and_test_coverage` | foreground boundary | Require assembly and family-specific factory testing for every data package. Require each controlled preparation operation and supplied primary packaging activity when applicable, together with energy, aids, wastes, direct releases, and dispositions. | `iec-60947-1-2020`; `iec-ts-63058-2021` |
| `validate_allocation` | shared production and test burdens | Require subdivision or a documented causal allocation driver before mass allocation. Reject undisclosed cross-family allocation and netting of scrap credits from material inputs. | `iec-ts-63058-2021` |
| `validate_data_lineage` | foreground records | Require aligned temporal coverage, site and supplier coverage, calibration evidence, raw-to-normalized calculations, upstream dataset links, proxy disclosure, and a quantified residual or unknown-material share. | `iec-62474-2018`; `iec-ts-63058-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-family-specific factory-gate foreground dataset for production of tested finished low-voltage switching, protecting, control-switching, or connection apparatus. |
| downstream_use | `secondary_dataset`; `background_dataset` for building, industrial, photovoltaic, energy-storage, charging-infrastructure, and other product systems when the declared family, ratings, geography, technology, and period match. |
| allowed_use | Cradle-to-gate inventories, supplier footprints, product-system models, and comparisons within the same apparatus family and equivalent declared performance class. |
| excluded_use | Whole-category average extrapolation from one family; comparison across incompatible electrical functions or ratings; claims about operational losses, service life, reliability, installation, board or cabinet performance, maintenance, replacement, or end-of-life without separate evidence and scenarios. |
| required_metadata | PCR id and version; apparatus family; model group; AC/DC application; rated voltage and current; poles or contacts; applicable standard and edition; switching, protection, control, or connector ratings; BOM and material coverage; contact, conductor, insulation, electronic, and arc-control composition where present; controlled and purchased processes; assembly and test plan; pass, rework, reject, and destructive-sample disposition; packaging convention; site, geography, period, supplier coverage, allocation, upstream datasets, proxies, and exclusions. |
| required_quality_disclosure | Foreground and supplier-data shares; material mass coverage and residual unknown share; temporal and geographic representativeness; measurement and calibration coverage; material, energy, waste, release, and test reconciliation; allocation drivers; proxy datasets; missing family qualifiers; and limitations on comparison. |
| update_trigger | Product-family or rated-performance change; BOM, contact, conductor, insulation, enclosure, electronics, or arc-control redesign; supplier or material change; production or test-route change; standard or test-plan revision; site, electricity, packaging, allocation, or upstream-dataset change that materially affects the result; or foreground data older than the review interval. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-60947-1-2020` | `standard` | IEC 60947-1:2020, Low-voltage switchgear and controlgear — Part 1: General rules, https://webstore.iec.ch/en/publication/26973 (retrieved 2026-08-09) | Common scope to 1,000 V AC, characteristics, supplied information, construction, performance verification, environmental aspects, material declaration example, and common factory-test boundary. |
| `iec-60947-2-2024` | `standard` | IEC 60947-2:2024, Low-voltage switchgear and controlgear — Part 2: Circuit-breakers, https://webstore.iec.ch/en/publication/66277 (retrieved 2026-08-09) | Circuit-breaker family scope, rating and breaking-performance qualifiers, and family-specific test coverage. |
| `iec-60947-3-2020` | `standard` | IEC 60947-3:2020 with Amendment 1:2025 consolidated version, Low-voltage switchgear and controlgear — Part 3: Switches, disconnectors, switch-disconnectors and fuse-combination units, https://webstore.iec.ch/en/publication/59785 (retrieved 2026-08-09) | Switch, disconnector, and fuse-combination family scope; DC and short-circuit test distinctions; conductor-connection and power-loss information. |
| `iec-60947-4-1-2023` | `standard` | IEC 60947-4-1:2023 corrected version 2026-03, Low-voltage switchgear and controlgear — Part 4-1: Contactors and motor-starters, https://webstore.iec.ch/en/publication/74487 (retrieved 2026-08-09) | Contactor, starter, contactor-relay, accessory, application, and test distinctions, including photovoltaic application considerations. |
| `iec-60947-5-1-2024` | `standard` | IEC 60947-5-1:2024, Low-voltage switchgear and controlgear — Part 5-1: Electromechanical control circuit devices, https://webstore.iec.ch/en/publication/65935 (retrieved 2026-08-09) | Relay and control-circuit device family scope, marking, construction, environmental information, and test distinctions. |
| `iec-60269-1-2024` | `standard` | IEC 60269-1:2024, Low-voltage fuses — Part 1: General requirements, https://webstore.iec.ch/en/publication/66096 (retrieved 2026-08-09) | Fuse and fuse-link family scope, rated-voltage and breaking-capacity identity, and family-specific test coverage. |
| `iec-61984-2008` | `standard` | IEC 61984:2008, Connectors — Safety requirements and tests, https://webstore.iec.ch/en/publication/6223 (retrieved 2026-08-09) | Connector-specific voltage and current-per-contact scope, connector family identity, and safety-test coverage. |
| `iec-62474-2018` | `standard` | IEC 62474:2018 with Amendment 1:2020 consolidated version, Material declaration for products of and for the electrotechnical industry, https://webstore.iec.ch/en/publication/29857 (retrieved 2026-08-09) | Material-class, substance, supplier declaration, BOM coverage, and material data-quality requirements. |
| `iec-ts-63058-2021` | `official_guidance` | IEC TS 63058:2021, Switchgear and controlgear and their assemblies for low voltage — Environmental aspects, https://webstore.iec.ch/en/publication/31177 (retrieved 2026-08-09) | Environmental information, supply-chain communication, factory-gate boundary disclosure, and allocation/data-quality rationale. |
| `iec-60898-1-2015` | `standard` | IEC 60898-1:2015 with Amendment 1:2019 consolidated version, Circuit-breakers for overcurrent protection for household and similar installations — Part 1, https://webstore.iec.ch/en/publication/21972 (retrieved 2026-08-09) | Evidence that a household AC circuit-breaker subset is limited to 440 V, 125 A, and 25 kA and must not represent the full product leaf. |
