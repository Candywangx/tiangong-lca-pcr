---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-wool-or-fine-animal-hair-containing-less-than-85-by-weight-of-wool-or-56d3e175
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Woven fabrics of wool or fine animal hair, containing less than 85% by weight of wool or fine animal hair

## 1. Scope and Applicability

This PCR applies to the factory-gate production of woven fabrics whose wool and/or fine-animal-hair content is less than 85% by mass. It covers fabric manufacture from purchased yarn, including yarn preparation and weaving, and includes on-site wet processing, finishing, and dispatch packaging only when those operations are performed for the reported production lot.

The PCR excludes fabrics containing 85% or more wool or fine animal hair, knitted or crocheted fabrics, nonwoven fabrics, carpets, yarn production, fibre production, garment manufacture, distribution, use, and end-of-life. Upstream production of purchased yarn, water, energy, chemicals, and packaging is represented by linked upstream datasets rather than reproduced inside the foreground process.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-wool-or-fine-animal-hair-containing-less-than-85-by-weight-of-wool-or-56d3e175 |
| classification_refs | CPC 3.0: 26540 (exact) |
| covered_products | Woven fabrics containing less than 85% by mass of wool and/or fine animal hair, including blends with other declared fibres |
| excluded_products | Woven fabrics containing 85% or more wool or fine animal hair; knitted, crocheted, nonwoven, tufted, carpet, yarn, fibre, and finished-garment products |
| representative_product | A production-lot-specific roll of woven wool- or fine-animal-hair-blend fabric at the reporting factory gate |
| production_route | Purchased yarn preparation and weaving, with lot-applicable on-site wet processing, finishing, inspection, and roll packaging |
| market_state | Factory-gate woven fabric in the declared greige, dyed, or finished state, supplied in rolls or another declared dispatch form |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate woven fabric meeting the declared fibre-composition, construction, and finishing specification |
| How much | 1 kg net fabric mass |
| How well | Conforming output with declared wool/fine-animal-hair share below 85% by mass and declared blend, weave, width, mass per area, colour, and finish |
| How long or cycle | One reported production lot at factory gate; no use-life duration is assigned |
| reference_flow_link | 1 kg of compliant reference-product output from `integrated_woven_fabric_manufacturing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of wool or fine animal hair, containing less than 85% by weight of wool or fine animal hair `89be6289-db50-45f3-9a41-389357845e7f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition by mass; wool and fine-animal-hair mass share; other fibre constituents; weave construction; fabric width; mass per area; greige/dyed/finished state; colour or shade; finish and treatment route; production geography; production period; dispatch and packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net compliant fabric mass, excluding roll cores and other dispatch packaging, at the declared conditioning or moisture state. Preserve the measured state and do not apply an unrecorded dry-mass correction. |
| `lot_normalization` | foreground exchanges | Row-specific property | Row-specific unit | Record each exchange in its metered or transaction unit and normalize it to 1 kg of net compliant reference-product output for the same production lot and boundary. |
| `packaging_separation` | dispatch packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging component separately as an input; do not include packaging mass in the reference-product mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include purchased-yarn receipt and preparation, weaving, in-process inspection, and factory-gate dispatch; include on-site wet processing, finishing, and packaging when performed for the reported lot. | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |
| `boundary_upstream_links` | purchased inputs | Represent upstream production of yarn, water, electricity, steam, process chemicals, and packaging with linked upstream datasets; do not reproduce those upstream processes in the foreground inventory. |  |
| `boundary_route_disclosure` | route-dependent operations | Declare whether wet processing, dyeing, finishing, and packaging occur on site, are purchased as services, or are absent; include only exchanges that cross the selected foreground boundary and prevent double counting with linked datasets. | `eu-bat-textiles-2022` |
| `boundary_atomic_inventory` | all foreground exchanges | Record every actually used material, process chemical, energy carrier, packaging component, waste stream, and elementary emission as its own exchange with an exact identity; do not use grouped or selector flows. | `eu-bat-textiles-2022` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased yarns with declared fibre composition, yarn form, mass, supplier, and upstream dataset references at receipt to the reporting site |
| starting_condition_role | Foreground boundary entry for fabric manufacture |
| product_classification_scope | Woven fabrics containing less than 85% by mass of wool and/or fine animal hair |
| recursive_input_rule | If an input already belongs to this same woven-fabric category, record it once as a linked upstream product dataset and exclude its internal manufacture from this foreground process. |
| upstream_dataset_requirement | Link each purchased yarn, utility, chemical, packaging component, and outsourced treatment to a geographically and temporally appropriate upstream dataset or disclose the unresolved gap. |
| disclosure | Declare yarn composition, supplier state, included on-site operations, outsourced operations, allocation choices, packaging state, production period, geography, and any excluded exchange. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_woven_fabric_manufacturing` | Integrated woven fabric manufacturing | required | Applies to every reported production lot; route-specific wet processing, steam use, and packaging inputs are recorded only when they occur within the reporting site boundary. | foreground production | 1 kg net compliant woven-fabric output |

### Process: Integrated woven fabric manufacturing (`integrated_woven_fabric_manufacturing`)

#### Inputs

##### Product flows

###### Wool-blend weaving yarn input (`wool_blend_yarn_input`)

Wool-blend weaving yarn is recorded separately when wool-bearing yarn crosses the factory boundary for the reported lot.

- Selected flow: Wool-blend weaving yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded received mass attributable to the reported production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_inputs`
- Sources:

###### Fine-animal-hair-blend weaving yarn input (`fine_animal_hair_blend_yarn_input`)

Fine-animal-hair-blend weaving yarn is recorded separately when such yarn crosses the factory boundary for the reported lot.

- Selected flow: Fine-animal-hair-blend weaving yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded received mass attributable to the reported production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_inputs`
- Sources:

###### Process water input (`process_water_input`)

Process water is recorded when it is supplied to on-site sizing, washing, dyeing, finishing, cleaning, or another lot-attributable manufacturing operation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded process-water mass attributable to the reported production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-bat-textiles-2022`

###### Medium-voltage electricity input (`electricity_medium_voltage_input`)

Medium-voltage electricity supplied to yarn preparation, weaving, on-site finishing, inspection, and dispatch operations is recorded for the reported lot.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: foreground-recorded metered or allocated electricity use attributable to the reported production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-bat-textiles-2022`

###### Purchased steam input (`steam_input`)

Purchased steam is recorded when it crosses the site boundary for lot-attributable wet processing, drying, heat-setting, or finishing.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded purchased steam mass attributable to the reported production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam`
- Sources: `eu-bat-textiles-2022`

###### Paperboard roll core input (`paperboard_core_input`)

The paperboard core is recorded when it is supplied with the dispatched fabric roll.

- Selected flow: Paperboard roll core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded mass of paperboard cores supplied with the reported lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_packaging`
- Sources:

###### Low-density polyethylene packaging film input (`ldpe_packaging_film_input`)

Low-density polyethylene film is recorded when it wraps or protects the dispatched fabric.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded mass of low-density polyethylene packaging film supplied with the reported lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference woven fabric output (`reference_fabric_output`)

The compliant factory-gate woven fabric is the quantitative reference for all lot-normalized exchanges.

- Selected flow: Woven fabrics of wool or fine animal hair, containing less than 85% by weight of wool or fine animal hair `89be6289-db50-45f3-9a41-389357845e7f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded net compliant fabric mass at the declared conditioning or moisture state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `unsd-cpc-v3-26540`

##### Waste flows

###### Woven-fabric offcuts output (`textile_offcuts_output`)

Edge trimmings, rejected pieces, and other solid offcuts matching the reported fabric lot are combined only when they form one physically managed waste stream with the same treatment route.

- Selected flow: Woven-fabric offcuts matching the reference-product composition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded mass leaving the foreground process as this specific offcut waste stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_textile_offcuts`
- Sources:

###### Wet-processing wastewater output (`wet_processing_wastewater_output`)

Textile wet-processing wastewater is recorded when it leaves an on-site wet process for treatment, sewer discharge, recycling outside the process, or another declared destination.

- Selected flow: Wastewater, textile wet processing, to water `a60031a7-ea29-49ef-b578-90de910fcf8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: foreground-recorded wastewater mass attributable to the reported production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net compliant reference-product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_wastewater`
- Sources: `eu-bat-textiles-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared foreground operations | Avoid allocation by separately metering or subdividing yarn preparation, weaving, wet processing, finishing, and packaging whenever records permit. |  |
| `allocation_lot_linkage` | multiple fabric lots | Assign inputs and outputs directly to the production lot using machine, batch, recipe, meter, and dispatch records before applying any allocation. |  |
| `allocation_residual` | unavoidable shared inputs and outputs | When subdivision and direct assignment are not possible, disclose the chosen physical relationship and calculation; do not treat waste as a co-product unless it leaves as a separately documented product with an intended function. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_inputs` | `integrated_woven_fabric_manufacturing` | wool-blend and fine-animal-hair-blend yarn inputs | goods receipt, issue record, and fibre-composition certificate | yarn identity; supplier; lot; fibre composition by mass; received mass; issued mass; returned mass | reconcile purchase/receipt and production issue records to the reported fabric lot | kg | each receipt and lot issue | full reporting period and reported lot | reporting factory | sum net yarn mass attributable to the lot by exact yarn identity | calibrated scale record; supplier certificate; lot traceability |
| `cp_process_water` | `integrated_woven_fabric_manufacturing` | process water input | meter, batch record, or tank balance | meter start/end; batch volume or mass; density when volume is converted to mass; reuse quantity; lot link | read process-level meters or documented batch balances and exclude internally recycled water from repeated boundary counting | kg | each batch or meter interval | full reporting period and reported lot | reporting factory | aggregate net boundary input attributable to the lot | meter calibration; water balance; batch log |
| `cp_electricity` | `integrated_woven_fabric_manufacturing` | medium-voltage electricity input | electricity meter and machine runtime record | meter start/end; machine line; runtime; lot; allocation driver | use submetered consumption where available and document any allocation of shared electricity | kWh | each meter interval or production lot | full reporting period and reported lot | reporting factory | aggregate lot-attributable electricity without upstream generation losses | meter calibration; energy audit; runtime log |
| `cp_steam` | `integrated_woven_fabric_manufacturing` | purchased steam input | steam meter and batch record | steam meter start/end; supplier; pressure or condition; condensate return; lot link | use boundary steam-meter readings and assign only the net purchased quantity to the lot | kg | each meter interval or batch | full reporting period and reported lot | reporting factory | aggregate lot-attributable purchased steam | meter calibration; supplier invoice; batch log |
| `cp_dispatch_packaging` | `integrated_woven_fabric_manufacturing` | paperboard core and LDPE film inputs | packaging issue and dispatch record | component identity; material; component mass; quantity issued; returned quantity; lot link | reconcile packaging-store issues with dispatched rolls | kg | each dispatch lot | full reporting period and reported lot | reporting factory | sum each packaging component separately; exclude packaging from product mass | scale record; packaging specification; dispatch record |
| `cp_reference_product` | `integrated_woven_fabric_manufacturing` | reference woven fabric output | production and quality release record | product identity; lot; gross mass; tare; net mass; fibre composition; width; mass per area; finish; moisture or conditioning state; accepted and rejected mass | use calibrated net-mass measurement for quality-released output | kg | each production lot | full reporting period and reported lot | reporting factory | sum compliant net fabric mass only | calibrated scale; quality release; composition test or supplier traceability |
| `cp_textile_offcuts` | `integrated_woven_fabric_manufacturing` | woven-fabric offcuts output | waste weighing and transfer record | waste identity; source line; lot; mass; storage change; destination | weigh the specific offcut stream and reconcile transfers and inventory change | kg | each transfer and reporting-period close | full reporting period and reported lot | reporting factory | sum net mass leaving as the declared offcut stream | calibrated scale; waste transfer note; inventory reconciliation |
| `cp_wet_processing_wastewater` | `integrated_woven_fabric_manufacturing` | wet-processing wastewater output | effluent meter and treatment/discharge record | flow or mass; density when converted; batch or line; destination; recycled quantity; lot link | meter the wastewater boundary flow and exclude water recycled within the same foreground process | kg | each discharge interval or batch | full reporting period and reported lot | reporting factory | aggregate net wastewater leaving the process boundary | meter calibration; water balance; treatment or discharge record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_lot_normalization` | every foreground exchange | Divide the foreground-recorded lot quantity by the net compliant reference-product mass from the same lot and boundary; preserve the exchange's stated unit. | lot exchange quantity; lot net compliant fabric mass | exchange amount per 1 kg reference product |  |
| `calc_textile_mass_reconciliation` | yarn inputs, reference fabric, and textile offcuts | Reconcile net yarn inputs against compliant fabric output, offcut outputs, other separately identified textile outputs, and documented inventory change; investigate rather than hide any residual. | net yarn input; compliant fabric output; each textile waste/output; work-in-progress change | disclosed textile mass-balance reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate the exact product name, Product flow type, CPC 26540 classification, Mass property, kg reference unit, and lot-specific fibre composition below 85% wool and/or fine animal hair by mass. | state_code 100 Tiangong identity read; product specification; composition certificate or test |
| `dq_temporal_linkage` | all exchanges | Use records covering the same production period and link batch, machine, meter, material, waste, and dispatch records to the reported lot or disclose the allocation basis. | dated primary records and lot traceability |
| `dq_input_output_inventory` | integrated process | Maintain a reviewed inventory of textile materials, process chemicals, water, energy, wastewater, waste gas, and solid waste that identifies quantities and relevant characteristics. | `eu-bat-textiles-2022`; site input/output inventory |
| `dq_atomic_chemical_records` | process chemicals | Record each actually used chemical formulation as a separate product-flow exchange with its exact commercial or chemical identity and measured lot quantity; aggregated chemical classes are incomplete. | chemical inventory; safety data sheet; batch recipe; issue record |
| `dq_route_completeness` | wet processing and finishing | When on-site wet processing or finishing is declared, retain water and energy balances, exact chemical records, wastewater records, and treatment/discharge destinations for the same route and period. | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022`; meter and batch records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require the exact reference-product UUID, Product flow type, CPC 26540 identity, Mass flow property UUID, kg unit, and all required qualifiers. | `unsd-cpc-v3-26540` |
| `validate_composition_threshold` | reference product | Reject a dataset if the declared wool and fine-animal-hair mass share is missing or is not less than 85% of the fabric mass. | `unsd-cpc-v3-26540` |
| `validate_reference_mass` | reference amount | Confirm that the denominator is 1 kg net compliant fabric at the declared conditioning or moisture state and excludes dispatch packaging. |  |
| `validate_process_boundary` | foreground process | Confirm that weaving is included, every on-site route step is declared, upstream purchased-input production is linked rather than duplicated, and outsourced operations are disclosed. | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |
| `validate_atomic_exchanges` | process inventory | Reject grouped, plural, selector, or placeholder exchanges; each material, chemical, energy supply, packaging component, waste stream, and elementary emission must have its own row and exact identity. | `eu-bat-textiles-2022` |
| `validate_foreground_evidence` | inventory amounts | Require foreground meter, transaction, batch, mass-balance, or dispatch evidence for every reported amount; do not substitute an AI-authored quantity or range. |  |
| `validate_wet_route` | on-site wet processing | If wet processing is present, require process-water and wastewater records, exact chemical rows, energy records, treatment destination, and prevention of double counting for reused water. | `eu-bat-textiles-2022` |
| `validate_mass_reconciliation` | textile materials | Require a documented reconciliation of yarn inputs, compliant fabric output, each textile waste/output, and inventory change, with any residual investigated and disclosed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate product dataset for woven wool- or fine-animal-hair-blend fabric |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product-footprint, process, and lifecyclemodel studies whose product composition, route, geography, period, and finishing state match the declared dataset |
| excluded_use | Fabrics with 85% or more wool/fine animal hair, nonwoven or knitted products, yarn production, garments, or undisclosed extrapolation across materially different wet-processing and finishing routes |
| required_metadata | canonical PCR id; reference-product UUID; fibre composition; wool/fine-animal-hair mass share; weave; width; mass per area; colour; finish; conditioning or moisture state; geography; period; technology; on-site and outsourced operations; allocation; packaging state |
| required_quality_disclosure | primary-record coverage; meter and scale status; lot linkage; exact chemical inventory; water and energy balances where applicable; wastewater destination; mass-balance residual; unresolved UUIDs and upstream dataset gaps |
| update_trigger | Change in fibre blend, yarn route, weaving technology, wet-processing or finishing recipe, site energy/water system, packaging specification, allocation method, geography, or reporting period that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-26540` | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, code 26540, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-08-12) | Product-category name, hierarchy, and less-than-85% composition boundary |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://eippcb.jrc.ec.europa.eu/reference/textiles-industry (accessed 2026-08-12) | Textile process decomposition, wet-processing applicability, input/output inventory, water, energy, chemicals, and waste controls |
| `eu-bat-textiles-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 (accessed 2026-08-12) | Foreground input/output inventory, weaving energy, water balance, chemical inventory, wastewater, route disclosure, and validation rules |
