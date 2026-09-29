---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stoves-grates-braziers-and-similar-non-electric-domestic-appliances-other-than-cooking-3665f7e2
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Stoves, grates, braziers and similar non-electric domestic appliances (other than cooking appliances and plate warmers) of iron or steel

## 1. Scope and Applicability

This rule covers the factory-gate production of an accepted, complete iron or steel domestic non-electric appliance primarily used for local heating or an equivalent non-cooking fire function. It covers solid-, gas-, or liquid-fuel designs when their declared product configuration fits the category. The foreground starts at receipt of metal stock and purchased components, includes attributable factory fabrication, finishing, assembly and packaging, and ends with the accepted appliance at the factory gate. Supplier production is linked through purchased-input datasets. Use-phase fuel combustion, installation, distribution, maintenance and end of life are outside this production dataset. The exact fuel, construction, and operations must be stated; a fuel-specific regulatory limit is not a manufacturing inventory range. [un-cpc-3-2025; iso-14044-2006]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stoves-grates-braziers-and-similar-non-electric-domestic-appliances-other-than-cooking-3665f7e2 |
| classification_refs | CPC 3.0: 44822, identity context only |
| covered_products | Complete iron or steel non-electric domestic heating stoves, grates and braziers; fuel route declared |
| excluded_products | Cooking appliances and plate warmers; central-heating radiators; electric heaters; parts sold separately; outdoor cooking equipment |
| representative_product | One accepted complete steel-bodied or cast-iron-bodied non-electric domestic heating stove |
| production_route | Purchased steel stock and/or cast iron firebox components; attributable fabrication, finishing, assembly and packing |
| market_state | Sale-ready complete appliance at factory gate, without operating fuel and excluding transport packaging from net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one complete non-electric domestic local-heating appliance of the declared configuration. |
| How much | One accepted finished unit, represented by its measured net mass M kg. |
| How well | State model, fuel, iron/steel body construction, nominal heat-output designation and acceptance criteria. |
| How long or cycle | One accepted sale-ready unit at factory gate; no assumed service life is embedded in this production reference. |
| reference_flow_link | `finished_stove` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Stoves, grates, braziers and similar non-electric domestic appliances (other than cooking appliances and plate warmers) of iron or steel `e4f06ae9-21fe-4b4e-a2ba-46b1d8824f14` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | domestic non-electric heating purpose; model and fuel type; body material; accepted complete configuration; nominal heat-output designation; net mass M excludes transport packaging and fuel |

The package must declare every Required qualifier. One accepted unit equals M kg for the same configuration. Per-unit inventory is not assigned a fabricated mass; a later producer weighs M. A mass-normalized export may divide a measured per-unit exchange by that measured M, with the conversion disclosed. [iso-14044-2006]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock and components arrive at the factory gate with supplier production represented by linked upstream datasets. |
| starting_condition_role | Foreground manufacturing input boundary. |
| product_classification_scope | Complete iron or steel domestic non-electric heating appliance, independent of a classification code. |
| recursive_input_rule | A purchased complete appliance in the same category is a distinct upstream product, never silently reclassified as raw material; disclose its mass and avoid double counting. |
| upstream_dataset_requirement | Link specific upstream production datasets for each purchased material or component, including transport to the factory when included in the declared cradle-to-gate study. |
| disclosure | Declare model, fuel route, purchased versus in-house operations, supplier data coverage, excluded stages and any omitted exchange. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all processes | Include all attributable factory inputs and outputs through accepted product release, with purchased inputs linked upstream; document exclusions and cut-off decisions. | `iso-14044-2006`; `jauhiainen-2024` |
| `boundary_use_exclusion` | use stage | Do not add household operating fuel or use emissions to this manufacturing inventory; report any separate use model with its own scenario. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stove_factory` | Metal fabrication, finishing, assembly and packing | `required` | All accepted complete units; each conditional exchange applies only when physically used. | Foreground factory production | per one accepted finished unit |

### Process: Metal fabrication, finishing, assembly and packing (`stove_factory`)

#### Inputs

##### Product flows

###### Steel sheet for body fabrication (`steel_sheet`)

Include when the factory cuts or forms uncoated low-carbon sheet into the stove body; use the purchased sheet mass crossing the factory boundary.

- Selected flow: Uncoated low-carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Purchased sheet mass attributable per one accepted finished unit; collect using cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources:

###### Purchased cast firebox (`cast_firebox`)

Include only when a distinct cast-iron firebox is purchased and installed. An integrated foundry must be represented as a linked upstream foreground process with its own exchanges.

- Selected flow: Cast iron firebox casting
- Flow property / unit: Mass / kg
- Amount rule: Purchased casting mass attributable per one accepted finished unit; collect using cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources:

###### Purchased factory electricity (`factory_electricity`)

Record metered grid electricity used for attributable forming, joining, assembly, coating and packing operations; exclude supplier electricity already included in purchased part datasets.

- Selected flow: Grid alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Metered kWh attributable per one accepted finished unit; collect using cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

###### Powder coating consumed (`powder_coating`)

Include only when powder coating is applied inside the foreground factory; purchased precoated components retain their supplier dataset instead.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Powder coating feed mass attributable per one accepted finished unit; collect using cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`
- Sources:

###### Corrugated shipping box (`carton_box`)

Include one corrugated board box when supplied with the finished unit at the factory gate; its mass is excluded from M.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Box mass supplied per one accepted finished unit; collect using cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished non-electric domestic heater (`finished_stove`)

One accepted, sale-ready iron or steel domestic non-electric heater leaves the factory. Transport packaging and operating fuel are outside the measured net appliance mass M.

- Selected flow: Stoves, grates, braziers and similar non-electric domestic appliances (other than cooking appliances and plate warmers) of iron or steel `e4f06ae9-21fe-4b4e-a2ba-46b1d8824f14`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Factory steel offcuts and rejects (`steel_scrap`)

Include separated steel offcuts and rejected fabricated steel leaving the factory as post-industrial scrap; do not net them against steel-sheet purchases.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Dispatched steel scrap mass attributable per one accepted finished unit; collect using cp_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared factory operations | Subdivide metered lines and materials by model where possible before allocating shared exchanges. | `iso-14044-2006` |
| `allocation_physical` | residual shared factory exchanges | If subdivision is impossible, allocate by a documented physical driver such as machine time or measured mass that reflects the exchange; reconcile allocated totals to facility totals. | `iso-14044-2006` |
| `allocation_scrap` | steel scrap | Record scrap as a separate waste output; disclose the recycling boundary and do not subtract a speculative avoided-production credit from factory inputs. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `stove_factory` | accepted complete appliance mass | calibrated scale record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each model or representative accepted unit | current production campaign | reporting factory | accepted net mass per unit | scale calibration and acceptance record |
| `cp_materials` | `stove_factory` | purchased steel sheet or cast firebox | supplier invoice and bill of materials | material specification; delivered mass; used mass; model; accepted unit count | Reconcile supplier records, material issues and bill of materials for the same model; separate steel sheet and cast firebox. | kg | each production campaign | current production campaign | reporting factory | attributable material mass / accepted units | invoices; inventory issue log; bill of materials |
| `cp_electricity` | `stove_factory` | purchased grid electricity | meter and production log | meter kWh; line; period; model; accepted unit count | Read calibrated meters and allocate only attributable factory use to accepted units. | kWh | each production campaign | current production campaign | reporting factory | attributable kWh / accepted units | meter calibration and production log |
| `cp_coating` | `stove_factory` | powder coating feed | issue and return log | coating batch; issued kg; returned kg; model; accepted unit count | Weigh or reconcile net coating powder consumed by the model. | kg | each coating campaign | current production campaign | reporting factory | net coating feed kg / accepted units | material issue and return records |
| `cp_packaging` | `stove_factory` | corrugated board box | packaging bill of materials | box mass; count; model; accepted unit count | Weigh the supplied box or use traceable supplier mass for the specified box. | kg | each packaging specification | current specification | reporting factory | supplied box mass / accepted units | packaging specification and supplier record |
| `cp_scrap` | `stove_factory` | post-industrial steel scrap | weighbridge and dispatch log | scrap kg; grade; model or line; period; accepted unit count | Weigh separated steel scrap dispatched and allocate to the manufacturing campaign. | kg | each production campaign | current production campaign | reporting factory | attributable dispatched scrap kg / accepted units | weighbridge ticket and scrap transfer record |

### Calculation Rules

No additional calculation formula is prescribed for this per-unit reference. Each protocol states its aggregation; the measured net mass M is the linked reference amount.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all rows | Reconcile model, fuel, body material and accepted configuration across mass, bill of materials and meters. | acceptance record; bill of materials |
| `dq_period` | all rows | Use a declared current production campaign and disclose missing, estimated or supplier-proxy data. | dated records and gap log |
| `dq_completeness` | factory inputs and outputs | Add a separate atomic row for every other actual factory material, energy carrier, waste or direct emission before publishing a concrete dataset; document cut-off decisions. | reconciled material and energy balance; site inventory |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | finished_stove | Require a complete non-electric iron or steel domestic non-cooking heater with model and fuel recorded. | `un-cpc-3-2025` |
| `validate_reference_mass` | finished_stove | Require positive measured M for one accepted complete unit of the same configuration, excluding fuel and transport packaging. | `iso-14044-2006` |
| `validate_factory_balance` | stove_factory | Reconcile purchased materials, energy, finished units and separately dispatched scrap to the campaign records; explain unmatched quantities. | `iso-14044-2006`; `jauhiainen-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory production data package for one declared heater model and fuel route. |
| downstream_use | `secondary_dataset` or `background_dataset` after review; process and lifecyclemodel projections. |
| allowed_use | Manufacturing-stage LCA with linked supplier datasets and disclosed allocation. |
| excluded_use | Direct comparison of unlike heating functions, use-phase emissions or compliance certification without separate models. |
| required_metadata | Product model; fuel; body material; nominal heat designation; factory; year; M; packaging state; purchased components; site operations. |
| required_quality_disclosure | Data period; primary-data share; meters; supplier coverage; allocation drivers; unresolved flows and omitted exchanges. |
| update_trigger | Material, fuel, supplier, factory, coating route or measurement change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product identity and adjacent category exclusions, row 2365. |
| `iso-14044-2006` | `standard` | Environmental management — Life cycle assessment — Requirements and guidelines, IS/ISO 14044:2006; https://fenix.ciencias.ulisboa.pt/downloadFile/2251937252647064/is.iso.14044.2006.pdf | Unit-process boundary, foreground collection, allocation and data quality, clauses 4.2.3.3, 4.3.2 and 4.3.4. |
| `jauhiainen-2024` | `literature` | Selvitys puulämmitteisen tulisijan EPD-ympäristöselosteen laadinnasta, 2024; https://www.theseus.fi/bitstream/10024/867657/2/Jauhiainen_Katri.pdf | One Finnish wood-fired sauna-stove case supports factory material, energy, waste and component-weighing record types; no cross-product amounts or empirical ranges. |
