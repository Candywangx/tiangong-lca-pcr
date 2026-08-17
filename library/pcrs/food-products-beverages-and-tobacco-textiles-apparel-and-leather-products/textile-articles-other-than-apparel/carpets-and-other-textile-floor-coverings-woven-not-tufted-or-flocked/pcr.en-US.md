---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-woven-not-tufted-or-flocked
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Carpets and other textile floor coverings, woven, not tufted or flocked

## 1. Scope and Applicability

This PCR applies to factory-gate foreground data packages for carpets and other textile floor coverings whose pile or surface structure is produced by weaving and is neither tufted nor flocked. It covers woven broadloom, rolls, rugs, and tiles when they retain this product identity, including products sold with integral backing or finishing layers.

Knotted carpets, tufted carpets, flocked floor coverings, felt floor coverings, resilient non-textile flooring, installation, use, maintenance, and end-of-life are excluded. Fibre, yarn, dyestuff, backing-compound, packaging, electricity, water, and waste-treatment production outside the reporting plant are represented by upstream datasets rather than recreated inside the foreground inventory.

The declared product is the saleable woven textile floor covering at the manufacturing plant gate. Wet processing, backing, coating, laminating, and other finishing steps are included only when performed for the declared product and must be disclosed as route qualifiers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-woven-not-tufted-or-flocked |
| classification_refs | CPC 3.0: 27220 (exact) |
| covered_products | Woven carpets and woven textile floor coverings, including broadloom, rolls, rugs, and tiles, that are neither tufted nor flocked |
| excluded_products | Knotted, tufted, flocked, felt, and non-textile floor coverings; installation, use, maintenance, and end-of-life services |
| representative_product | Saleable woven carpet or textile floor covering at the manufacturing plant gate |
| production_route | Yarn preparation and weaving; conditional wet processing; conditional backing or coating; cutting, inspection, and packaging |
| market_state | Finished product, manufactured; production mix at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Woven carpet or other woven textile floor covering providing a finished floor-covering product |
| How much | 1 kg of net saleable product at the manufacturing plant gate |
| How well | Conforms to the declared construction, fibre composition, dimensions, mass per area, backing or coating state, and quality grade |
| How long or cycle | One completed manufacturing batch; service life is outside this factory-gate reference |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the declared reference product output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Carpets and other textile floor coverings, woven, not tufted or flocked `d54c5255-fc7f-4613-86da-08cf2afe8632` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition by mass; woven construction; product form; dimensions; mass per area; backing or coating state and composition; dyeing or printing state; quality grade; manufacturing geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net saleable product mass after trimming and before shipment; exclude pallets and transport packaging from reference mass. |
| `area_to_mass` | production or sales records expressed by area | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert area to mass only with measured product-specific mass per area for the declared construction and batch; retain both the area record and measured conversion factor. |
| `moisture_basis` | yarn, textile intermediates, and finished product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State the moisture or conditioning basis whenever it materially affects mass balance; do not mix conditioned and as-received masses without a documented conversion. |
| `energy_conversion` | electricity and thermal-energy records | Energy | kWh or MJ | Preserve the invoiced or metered unit and conversion factor; use 1 kWh = 3.6 MJ when conversion is required and do not combine electricity with thermal energy in one exchange. |

## 5. System Boundary

The foreground boundary begins when yarn and any separately purchased dyes, auxiliaries, backing compounds, packaging, water, and energy enter the reporting plant. It includes yarn preparation performed at the plant, weaving, conditional wet processing, conditional backing or coating, drying or curing, cutting, inspection, packing, internal scrap handling, direct emissions, and wastewater leaving the plant. The boundary ends with the net saleable woven floor covering at the plant gate.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Yarn and other purchased materials received at the reporting plant gate with supplier identity, mass, composition, and upstream dataset references |
| starting_condition_role | Foreground manufacturing input boundary |
| product_classification_scope | Woven carpets and textile floor coverings that are neither tufted nor flocked |
| recursive_input_rule | A purchased input already within this product category is recorded once as a product input with an upstream dataset and is not recursively decomposed in the receiving foreground process |
| upstream_dataset_requirement | Use geographically, technologically, and temporally representative upstream datasets for yarn, chemicals, backing compounds, packaging, electricity, fuels, water supply, and waste or wastewater treatment |
| disclosure | Declare fibre composition, weaving construction, integrated and outsourced operations, wet-processing route, backing or coating route, recycled-content claim basis, plant geography, reporting period, cut-off decisions, and upstream-data substitutions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground system boundary | Include all on-site operations and exchanges from received yarn and auxiliary materials through net saleable packed product at the manufacturing plant gate. | `jrc-textiles-bref-2023`; `epd-cpcr004-2025` |
| `boundary_conditional_routes` | wet processing and backing or coating | Include each conditional operation when performed for the declared product and explicitly disclose whether it is on-site, outsourced with an upstream dataset, or not applicable. | `jrc-textiles-bref-2023` |
| `boundary_no_recursive_duplication` | same-category purchased inputs | Model a purchased same-category input as one upstream product exchange and do not reproduce its production inventory in the receiving process. | `ec-environmental-footprint-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_and_weaving` | Yarn preparation and weaving | required | Always included | Foreground formation of the woven carpet web | kg greige woven carpet output |
| `wet_processing` | Wet pretreatment, dyeing, printing, washing, and drying | conditional | Include when any wet operation is performed for the declared product | Foreground colouration and wet finishing | kg wet-finished woven carpet output |
| `finishing_and_packaging` | Backing or coating, curing, cutting, inspection, and packaging | required | Always include cutting, inspection, and packaging; include backing, coating, and curing only when performed | Foreground conversion to saleable plant-gate product | kg net saleable reference product |

### Process: Yarn preparation and weaving (`yarn_preparation_and_weaving`)

#### Inputs

##### Product flows

###### Wool carpet yarn input (`wool_carpet_yarn_input`)

Record wool carpet yarn only when it is the specific yarn crossing into this process. Other fibre compositions and distinct warp, weft, pile, or binding yarn identities require separate exchanges in the foreground dataset.

- Selected flow: Wool carpet yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issued yarn mass net of returned unused yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige woven carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Grid electricity for weaving (`grid_electricity_weaving`)

Record metered grid electricity consumed by yarn preparation, loom operation, dust extraction, and directly attributable auxiliaries.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity allocated to the weaving batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige woven carpet output (`greige_woven_carpet_output`)

Record the measured mass of woven carpet web accepted for wet processing or final finishing.

- Selected flow: Greige woven carpet
- Flow property / unit: Mass / kg
- Amount rule: measured accepted greige woven carpet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output before wet processing or finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Weaving textile offcuts (`weaving_textile_offcuts`)

Record only woven carpet loom-start and defective woven-piece offcuts sent to one declared treatment route. Yarn ends and other waste identities require separate foreground exchanges.

- Selected flow: Woven carpet loom-start offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

### Process: Wet pretreatment, dyeing, printing, washing, and drying (`wet_processing`)

#### Inputs

##### Product flows

###### Greige woven carpet input (`greige_woven_carpet_input`)

Record the measured greige woven carpet entering the wet-processing route.

- Selected flow: Greige woven carpet
- Flow property / unit: Mass / kg
- Amount rule: measured input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-finished woven carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Process water for wet finishing (`process_water_wet_finishing`)

Record metered freshwater entering pretreatment, dyeing, printing, washing, or rinsing operations.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered water supplied to the wet-processing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-finished woven carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Acid dyestuff input (`acid_dyestuff_input`)

Record one declared acid dyestuff formulation used for wool or polyamide fibre when applicable. Reactive, disperse, pigment, and other formulations require separate exchanges in the foreground dataset.

- Selected flow: Acid dyestuff formulation
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoiced formulation mass charged to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg wet-finished woven carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Grid electricity for wet finishing (`grid_electricity_wet_finishing`)

Record metered grid electricity used by wet-processing equipment, pumps, ventilation, and drying equipment; thermal energy is a separate exchange in a concrete dataset when used.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity allocated to the wet-processing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-finished woven carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-finished woven carpet output (`wet_finished_woven_carpet_output`)

Record the measured mass of conforming woven carpet leaving wet processing for final finishing.

- Selected flow: Wet-finished woven carpet
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: wet-processing output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

###### Wet-finishing wastewater (`wet_finishing_wastewater`)

Record wastewater leaving wet processing at its actual treatment state before on-site or off-site treatment.

- Selected flow: Textile wet-finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater volume discharged from the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wet-finished woven carpet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_batch_records`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

### Process: Backing or coating, curing, cutting, inspection, and packaging (`finishing_and_packaging`)

#### Inputs

##### Product flows

###### Greige woven carpet finishing input (`greige_woven_carpet_finishing_input`)

Record greige woven carpet entering final finishing only when the wet-processing route is not used.

- Selected flow: Greige woven carpet
- Flow property / unit: Mass / kg
- Amount rule: measured input mass; not applicable when wet-finished woven carpet enters this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Wet-finished woven carpet finishing input (`wet_finished_woven_carpet_finishing_input`)

Record wet-finished woven carpet entering final finishing only when the wet-processing route is used.

- Selected flow: Wet-finished woven carpet
- Flow property / unit: Mass / kg
- Amount rule: measured input mass; not applicable when greige woven carpet enters this process directly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Styrene-butadiene latex backing input (`styrene_butadiene_latex_input`)

Record styrene-butadiene latex backing formulation only when it is applied. Natural latex, polyurethane, hot-melt adhesive, fillers, and other distinct formulations require separate exchanges in the foreground dataset.

- Selected flow: Styrene-butadiene latex backing formulation
- Flow property / unit: Mass / kg
- Amount rule: weighed or metered compound mass consumed by the batch; not applicable when no backing or coating is applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Grid electricity for finishing (`grid_electricity_finishing`)

Record metered grid electricity used for backing or coating equipment, curing auxiliaries, cutting, inspection, and packing.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity allocated to the finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `jrc-textiles-bref-2023`

###### Polyethylene packaging film input (`polyethylene_packaging_film_input`)

Record the mass of polyethylene film crossing the system boundary as product packaging; other packaging components require separate exchanges.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-accounted film mass consumed by the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `epd-cpcr004-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable woven carpet reference product (`reference_woven_carpet_output`)

This is the exact public Tiangong reference product selected for CPC 27220 and is normalized to 1 kg.

- Selected flow: Carpets and other textile floor coverings, woven, not tufted or flocked `d54c5255-fc7f-4613-86da-08cf2afe8632`
- Flow property / unit: Mass / kg
- Amount rule: net accepted product mass divided by the same net accepted product mass, yielding exactly 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `unsd-cpc-3-2025`

##### Waste flows

###### Carpet trim waste output (`carpet_trim_waste_output`)

Record the measured mass of woven carpet edge trim and rejected cut pieces sent to one declared treatment route.

- Selected flow: Woven carpet trim waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch_records`
- Sources: `epd-cpcr004-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared operations and utilities | Subdivide or meter product lines and batches before applying allocation; record the meter, production time, or batch key used. | `ec-environmental-footprint-2021` |
| `allocation_physical_relation` | unavoidable shared foreground burdens | Allocate using a documented physical causal relation such as machine time, metered energy, processed mass, or occupied production time; use mass allocation only when no more representative causal relation is available. | `ec-environmental-footprint-2021` |
| `allocation_scrap_disclosure` | sold, recycled, or internally reused scrap | Record scrap quantity and destination separately and disclose any burden or credit treatment; do not reduce gross material input by scrap output without showing both exchanges. | `ec-environmental-footprint-2021`; `epd-pcr2019-14-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving_batch_records` | `yarn_preparation_and_weaving` | yarn, electricity, greige output, and offcut records | batch production record and utility meter allocation | batch_id; product_id; yarn_material_id; yarn_mass_kg; electricity_kwh; accepted_output_kg; offcut_kg; treatment_route | reconcile warehouse issues and returns, batch scales, loom counters, and submeter or documented meter allocation | kg; kWh | each batch, aggregated monthly | at least 12 representative months or the full shorter production campaign | every reporting-site weaving line producing the declared product | sum flow-specific records by batch, then divide by accepted greige output; do not combine different yarn identities before upstream datasets are assigned | calibrated scale records, meter records, stock reconciliation, batch release record, and treatment receipt |
| `cp_wet_processing_batch_records` | `wet_processing` | greige input, water, dyestuff, electricity, finished output, and wastewater records | recipe, batch record, meter record, and discharge record | batch_id; product_id; input_kg; chemical_id; chemical_mass_kg; water_m3; electricity_kwh; output_kg; wastewater_m3; treatment_state | reconcile recipe charges and weighed additions with inlet, utility, output, and discharge meters | kg; m3; kWh | each wet-processing batch, aggregated monthly | at least 12 representative months or the full shorter production campaign | every reporting-site wet-processing line used for the declared product | sum each chemically specific flow and utility separately, then divide by accepted wet-finished output | calibrated meters and scales, approved recipe, batch record, laboratory release record, and wastewater log |
| `cp_finishing_batch_records` | `finishing_and_packaging` | woven web, backing compound, electricity, packaging film, saleable product, and trim waste records | batch record, formulation issue, meter allocation, packing record, and quality release | batch_id; product_id; input_web_kg; compound_id; compound_kg; electricity_kwh; packaging_film_kg; accepted_product_kg; trim_waste_kg; treatment_route | reconcile material issues, line meter data, scales, packing records, and final quality release | kg; kWh | each finishing batch, aggregated monthly | at least 12 representative months or the full shorter production campaign | every reporting-site finishing line producing the declared product | sum each specific exchange by batch and normalize to net accepted product; exclude shipping pallets from reference mass | calibrated scale and meter records, formulation issue record, packaging reconciliation, quality release, and waste receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | all inventory rows | normalized amount = recorded exchange amount / net accepted product mass in kg | flow-specific recorded amount; accepted_product_kg | amount per kg reference product | `ec-environmental-footprint-2021` |
| `calc_area_to_mass` | area-based production and sales records | product mass = product area multiplied by measured batch-specific mass per area | product_area_m2; measured_mass_per_area_kg_per_m2 | product_mass_kg | `epd-cpcr004-2025` |
| `calc_energy_unit` | electricity or thermal-energy records | MJ = kWh multiplied by 3.6 when a common energy unit is required; keep electricity and thermal energy as distinct exchanges | recorded_energy_kwh | energy_MJ | `ec-environmental-footprint-2021` |
| `calc_mass_balance` | each process and reporting period | mass-balance difference = total mass inputs minus saleable and intermediate products, separately recorded wastes, and quantified direct mass emissions | mass input records; product output records; waste records; direct emission records | disclosed unexplained mass-balance difference | `jrc-textiles-bref-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product and material exchanges | Preserve product, fibre, chemical formulation, supplier, batch, and treatment-route identifiers needed to select one upstream flow per exchange. | purchase specification, recipe, batch record, and supplier declaration |
| `dq_measurement` | mass, water, and energy records | Use calibrated or legally controlled measurement devices where available and retain the allocation method when one meter serves multiple products. | calibration certificate, meter record, and allocation worksheet |
| `dq_temporal` | foreground reporting period | Cover at least 12 representative months unless the production campaign is shorter; document shutdowns, atypical batches, and seasonality. | dated batch and utility records with coverage statement |
| `dq_completeness` | process inventory | Reconcile purchased and issued materials, production output, packaging, waste, wastewater, and directly measured releases; explain missing or estimated exchanges. | mass balance, utility reconciliation, waste receipts, and exception log |
| `dq_upstream` | upstream datasets | Document geography, technology, reference year, substitution, and data quality for every material, energy, water, packaging, and treatment dataset. | upstream dataset register and substitution log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Require the exact CPC 27220 public product-flow UUID, Mass property UUID, Units of mass UUID, kg unit, and all required qualifiers. | `unsd-cpc-3-2025` |
| `validation_process_coverage` | foreground process map | Require weaving and finishing records; require wet-processing and backing or coating records whenever the declared route includes those operations. | `jrc-textiles-bref-2023`; `epd-cpcr004-2025` |
| `validation_atomic_exchanges` | inventory rows | Reject a row that combines multiple materials, utilities, fuels, wastes, or emissions; each exchange must have one identity, amount rule, property, unit, and treatment route where applicable. | `ec-environmental-footprint-2021` |
| `validation_collection_trace` | foreground amounts | Require every collected or calculated amount to trace to the declared protocol, reporting period, site scope, raw record, and normalization calculation. | `ec-environmental-footprint-2021` |
| `validation_mass_balance` | each foreground process | Report inputs, products, wastes, and quantified emissions on a consistent moisture basis and explain any material unexplained balance difference. | `jrc-textiles-bref-2023` |
| `validation_unresolved_uuid` | non-reference inventory flow identity | Before publication, resolve each manifest-listed row_id to one verified Tiangong flow UUID or document its explicit row-level rejection; never substitute a semantically broader or adjacent-category flow. | `unsd-cpc-3-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or product-family foreground manufacturing dataset that may be released as a secondary_dataset or background_dataset after review |
| downstream_use | Foreground process datasets and lifecyclemodel projections for woven carpets and textile floor coverings at the plant gate |
| allowed_use | Studies matching the declared woven construction, fibre composition, finishing route, backing or coating state, geography, technology, and reporting period |
| excluded_use | Knotted, tufted, flocked, felt, or non-textile floor coverings; installation, use, maintenance, or end-of-life without additional modules; products with materially different construction or formulation |
| required_metadata | PCR id and version; reference-flow UUIDs; required qualifiers; site and geography; reporting period; technology; product-family weighting; process coverage; allocation; cut-offs; upstream dataset register |
| required_quality_disclosure | primary-data share; temporal coverage; meter and scale basis; mass-balance result; data gaps; estimates; allocation; upstream substitutions; unresolved identity decisions; verification status |
| update_trigger | Material change in fibre composition, woven construction, wet-processing route, backing or coating formulation, plant technology, energy supply, product mass per area, allocation, reporting period, or upstream datasets |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 explanatory notes, code 27220, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Product boundary and classification identity |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, published January 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry (retrieved 2026-08-13) | Process decomposition, wet processing, finishing, carpet backing, collection, and mass-balance checks |
| `epd-cpcr004-2025` | Standard (`standard`) | International EPD System, c-PCR-004 Resilient, textile and laminate floor coverings (EN 16810), validity update 2025. https://www.environdec.com/pcr-library/pcr2019-14-c-pcr-004 (retrieved 2026-08-13) | Floor-covering product qualifiers, area-to-mass context, packaging, and route coverage |
| `epd-pcr2019-14-2025` | Standard (`standard`) | International EPD System, PCR 2019:14 Construction products (EN 15804+A2), version 2.0.1, 2025. https://www.environdec.com/pcr-library/pcr_6b99d07c-4b75-4763-4485-08dd775d2e49 (retrieved 2026-08-13) | Dataset profile, scrap disclosure, upstream datasets, and construction-product context |
| `ec-environmental-footprint-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, 15 December 2021. https://green-forum.ec.europa.eu/publications/commission-recommendation-eu-20212279-15-december-2021-use-environmental-footprint-methods-measure_en (retrieved 2026-08-13) | Foreground collection, normalization, allocation hierarchy, traceability, and atomic exchange validation |
