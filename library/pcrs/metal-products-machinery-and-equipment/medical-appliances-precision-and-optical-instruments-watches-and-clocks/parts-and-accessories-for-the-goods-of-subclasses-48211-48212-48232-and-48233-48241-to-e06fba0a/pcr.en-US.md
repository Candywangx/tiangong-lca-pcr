---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48211-48212-48232-and-48233-48241-to-e06fba0a
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for specified optical, photographic, cinematographic, precision, medical and surgical equipment; microtomes

## 1. Scope and Applicability

This PCR applies to one declared market-ready product within the CPC 48281 boundary: parts and accessories for the referenced optical, photographic, cinematographic, precision, medical or surgical machines, instruments, apparatus and appliances, and microtomes. It covers manufacture from purchased material stock and purchased subassemblies through shaping or machining, cleaning, any declared in-house forming or surface treatment, final assembly, acceptance testing and product-specific packaging at the factory gate.

The foreground starts with purchased alloy-steel stock, components, chemicals, packaging and delivered utilities. Their upstream production is represented by supplier or background datasets. Distribution beyond the factory gate, installation, maintenance, use, replacement, host-equipment production and end-of-life are excluded. Sterilization is excluded unless the declared product is supplied sterile; an included sterilization route requires its own concrete process, atomic exchanges and evidence. Optical finishing, polymer moulding, electronic subassembly manufacture and other material routes are not silently represented by the alloy-steel route: when present, they must be declared and instantiated with their actual atomic inputs and outputs.

The representative route is a precision alloy-steel instrument part produced by machining and polishing, optionally formed or aqueous-surface-treated, mechanically assembled with any applicable purchased electronics, tested and packaged. This route provides a configurable data-production structure; it does not claim that all products in the category have the same material composition or processing sequence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48211-48212-48232-and-48233-48241-to-e06fba0a |
| classification_refs | CPC 3.0: 48281 (exact) |
| covered_products | Market-ready parts and accessories for the goods named by CPC 48281; microtomes; and other parts and accessories within that official category boundary. |
| excluded_products | Complete host equipment classified outside CPC 48281; installation, repair and maintenance services; generic raw materials and subassemblies sold independently outside the category; and packaging sold as a separate product. |
| representative_product | A mechanically assembled, packaged precision instrument part made principally from machined and polished alloy steel. |
| production_route | Purchased alloy-steel bar/rod → machining and polishing → conditional forming and aqueous surface treatment → final assembly, acceptance testing and packaging. |
| market_state | Finished, accepted and packaged at the manufacturing factory gate; sterile or non-sterile state and any included sterilization must be declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of one declared market-ready CPC 48281 part, accessory or microtome providing its specified compatibility or sectioning function. |
| How much | 1 kg net mass of accepted product, excluding packaging. |
| How well | Meets the declared dimensional, surface, optical, electrical, medical, compatibility and acceptance specifications applicable to the selected product. |
| How long or cycle | One delivery at the factory gate; service life and use cycles are outside this cradle-to-gate reference. |
| reference_flow_link | 1 kg of the declared accepted reference product at the factory gate. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts and accessories for the goods of subclasses 48211, 48212, 48232 and 48233, 48241 to 48249, 48251 to 48253, microtomes, parts and accessories n.e.c., for optical, photographic, cinematographic, precision, medical or surgical machines, instruments, apparatus and appliances `4e3c502e-82f3-4d0e-9cba-7e9b49eae4cb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type (part, accessory or microtome); host-equipment class and compatibility or microtome function; principal material and complete material composition; net product mass; manufacturing route; forming, cleaning and surface-treatment specification; dimensional and performance acceptance specification; electronics presence; sterile/non-sterile state and sterilization inclusion; packaging configuration; manufacturing geography and technology; data period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net product mass without packaging; normalize all process exchanges to 1 kg of accepted product. |
| `mu_material_mass` | material, intermediate, scrap and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use weighed mass on a consistent dry/as-received basis stated for each stream; reconcile stock input, product, scrap, waste and inventory change. |
| `mu_electricity` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Retain metered electricity in its original energy unit and convert consistently to MJ for the selected TianGong flow; document the conversion and meter boundary. |
| `mu_water_and_solutions` | process water, wastewater and aqueous bath rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement; if volume is measured, record temperature, density source and conversion, and keep added water separate from formulated chemicals. |
| `mu_packaging_separation` | packaging inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each packaging component separately and exclude all packaging mass from the 1 kg net-product reference amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased alloy-steel stock and declared purchased components, chemicals, packaging and delivered utilities at the manufacturing-site gate. |
| starting_condition_role | Upstream production is outside the foreground and must be linked through supplier-specific or representative background datasets. |
| product_classification_scope | One declared product within CPC 48281; variant material and process routes are instantiated only when they apply to that product. |
| recursive_input_rule | A purchased input already within CPC 48281 is recorded as an upstream product input with its own dataset; do not recursively reproduce its manufacturing inventory inside this foreground process. |
| upstream_dataset_requirement | Each purchased stock, component, chemical, packaging item and delivered energy input requires a geographically and technologically representative upstream dataset or a documented data gap. |
| disclosure | Declare product subtype, principal and auxiliary materials, route selection, outsourced/in-house steps, reject treatment, packaging, sterile state, geography, technology, data period and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground system | Include shaping/machining, polishing, cleaning, applicable in-house forming or surface treatment, final assembly, acceptance testing and packaging through the factory gate; exclude downstream distribution, use and end-of-life. | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `sb_actual_route` | product-specific route | Include only process steps that physically occur for the declared product, and record every material, energy, waste and elementary exchange that crosses each included foreground boundary. | `ec-pef-2021` |
| `sb_outsourced_steps` | outsourced processing | Represent outsourced forming, finishing, component manufacture or sterilization with a supplier process dataset and avoid duplicating its internal exchanges in the foreground. | `ec-pef-2021` |
| `sb_waste_destination` | waste outputs | Keep low-alloy steel scrap, spent coolant, cleaning wastewater and waste alkaline liquor as separate exchanges and declare their treatment or recovery destinations. | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `precision_machining` | Precision machining and polishing | `required` | Applies to the representative route; replace with another declared shaping route only when the product is not machined. | Convert purchased alloy-steel stock to inspected machined and polished instrument parts. | Mass of machined and polished parts leaving the process. |
| `forming_surface_treatment` | Configured forming and aqueous surface treatment | `conditional` | Include when the declared product undergoes further forming, alkaline cleaning, electrolytic or chemical surface treatment in-house. | Produce a formed and finished part meeting the declared surface specification. | Mass and treated surface area of conforming finished parts. |
| `assembly_test_packaging` | Final assembly, acceptance testing and packaging | `required` | Required for the declared market-ready product; individual conditional component rows apply only when physically present. | Assemble applicable components, test the specified function and package accepted product. | Net mass of accepted product, normalized to 1 kg. |

### Process: Precision machining and polishing (`precision_machining`)

#### Inputs

##### Product flows

###### Alloy-steel bar or rod stock (`input_alloy_steel_bar_stock`)

Purchased alloy-steel bar or rod crosses the site gate as the principal material for the representative part. Record actual alloy grade, dimensions, purchased mass and stock changes.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: purchased stock mass issued to the product lot, corrected for opening and closing inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Electricity for machining and polishing (`input_machining_electricity`)

Meter electricity used by cutting, milling, turning, grinding, polishing, pumps and directly attributable auxiliaries within the machining boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submeter-allocated electrical energy attributable to the product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Process water for machining (`input_machining_process_water`)

Record process water added to cutting-fluid make-up and direct part washing within the machining cell; exclude closed-loop recirculation until it crosses the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up water crossing the machining process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Cutting-fluid make-up (`input_cutting_fluid`)

Record purchased cutting-fluid concentrate or ready-to-use fluid added to the machining system, separate from process water.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchased cutting-fluid mass added during the reporting period, inventory-corrected
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Machined and polished instrument parts (`output_machined_polished_parts`)

Weigh conforming machined and polished parts leaving this process before optional further forming or surface treatment.

- Selected flow: Machined and polished instrument parts `3e316c61-0e12-46f9-a442-7abf779d3346`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of conforming parts transferred to the next process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_machining_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Waste flows

###### Segregated low-alloy steel machining scrap (`output_low_alloy_steel_scrap`)

Weigh chips, swarf, offcuts and rejected low-alloy steel parts sent to the same declared recovery or treatment route; do not mix non-ferrous, polymer or electronic rejects into this row.

- Selected flow: Low-alloy steel scrap `afedcccd-b9f3-4941-8ba4-d3135b8abb67`
- Flow property / unit: Mass / kg
- Amount rule: measured segregated scrap mass leaving the machining process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Spent machining coolant (`output_spent_coolant`)

Record drained spent coolant leaving the recirculating machining system for recovery or treatment, including its declared water and metal contamination state.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: measured mass from waste shipment, tank drawdown and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Elementary flows

### Process: Configured forming and aqueous surface treatment (`forming_surface_treatment`)

#### Inputs

##### Product flows

###### Machined and polished parts entering treatment (`input_machined_parts_for_treatment`)

Include this transfer only when the conditional process occurs in-house. It is an internal intermediate and must equal the corresponding transfer from `precision_machining` after inventory changes.

- Selected flow: Machined and polished instrument parts `3e316c61-0e12-46f9-a442-7abf779d3346`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred into the conditional process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_inputs`
- Sources: `ec-jrc-stm-bref-2006`

###### Electricity for forming and surface treatment (`input_surface_electricity`)

Include electricity for directly attributable forming equipment, bath circulation, rectification, pumps, rinsing and drying when this conditional process is present.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submeter-allocated electricity attributable to treated product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_inputs`
- Sources: `ec-jrc-stm-bref-2006`

###### Process water for baths and rinsing (`input_surface_process_water`)

Include fresh make-up and rinse water crossing the conditional surface-treatment boundary; do not count internal recirculation as a new input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up and rinse-water mass attributable to treated product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_inputs`
- Sources: `ec-jrc-stm-bref-2006`

###### Sodium hydroxide for alkaline treatment (`input_sodium_hydroxide`)

Include sodium hydroxide only when physically added for alkaline cleaning, etching or bath adjustment; declare concentration and solution/product mass basis.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active-product mass purchased and added, corrected for bath inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_inputs`
- Sources: `ec-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed and finished instrument parts (`output_formed_finished_parts`)

Weigh conforming parts after the declared forming, treatment, rinsing and drying sequence.

- Selected flow: Formed and finished instrument parts `1931c303-d934-4e2c-8c43-5e2ad198699a`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of conforming finished parts transferred to final assembly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_outputs`
- Sources: `ec-jrc-stm-bref-2006`

##### Waste flows

###### Segregated aqueous cleaning wastewater (`output_cleaning_wastewater`)

Record aqueous cleaning and rinse wastewater transferred to treatment. Declare metal, cleaner and suspended-solids composition and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving the conditional process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_outputs`
- Sources: `ec-jrc-stm-bref-2006`; `us-epa-fabricated-metal-products-1995`

###### Waste alkaline liquor (`output_waste_alkaline_liquor`)

Record spent alkaline bath solution separately from routine rinse wastewater, with chemistry, concentration, contamination and destination.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: measured tank drawdown or waste shipment mass leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_outputs`
- Sources: `ec-jrc-stm-bref-2006`

##### Elementary flows

### Process: Final assembly, acceptance testing and packaging (`assembly_test_packaging`)

#### Inputs

##### Product flows

###### Untreated machined parts entering assembly (`input_machined_parts_for_assembly`)

Include this atomic transfer only when `forming_surface_treatment` is not applicable and the machined and polished part proceeds directly to assembly.

- Selected flow: Machined and polished instrument parts `3e316c61-0e12-46f9-a442-7abf779d3346`
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass entering assembly when the conditional treatment process is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Formed and finished parts entering assembly (`input_finished_parts_for_assembly`)

Include this atomic transfer only when `forming_surface_treatment` applies; reconcile it to the corresponding process output after inventory changes.

- Selected flow: Formed and finished instrument parts `1931c303-d934-4e2c-8c43-5e2ad198699a`
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass entering assembly from the conditional process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `ec-jrc-stm-bref-2006`

###### Instrument electronics and sensing subassembly (`input_electronics_subassembly`)

Include the purchased electronic/sensing subassembly only for a declared product containing it; preserve its supplier manufacturing dataset outside this assembly process.

- Selected flow: Instrument electronics and sensing subassemblies `9ac88fe8-230b-4c72-8165-d3d9908264e8`
- Flow property / unit: Mass / kg
- Amount rule: measured purchased subassembly mass incorporated into accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `ec-pef-2021`

###### Steel screws for mechanical assembly (`input_steel_screws`)

Record steel screw mass physically incorporated into the accepted product; declare grade, coating and dimensions.

- Selected flow: Steel screw `35a4d7dc-1c42-4eb2-a48a-0f9a5abce9d6`
- Flow property / unit: Mass / kg
- Amount rule: purchased screw mass issued minus unused returned inventory and assembly rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `ec-pef-2021`

###### Polyethylene protective bag (`input_polyethylene_bag`)

Record each single polyethylene bag used to protect the declared product. Resin grade, film thickness, recycled content and dimensions are product qualifiers.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of polyethylene bags packed with accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `ec-pef-2021`

###### Corrugated board shipping boxes (`input_corrugated_board_boxes`)

Record corrugated board boxes separately from the polyethylene bag and any additional packaging component.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of corrugated board boxes packed with accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `ec-pef-2021`

###### Electricity for assembly and acceptance testing (`input_assembly_electricity`)

Meter electricity for directly attributable assembly tools, inspection, functional testing and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or submeter-allocated electricity attributable to accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `ec-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted market-ready reference product (`output_reference_product`)

This output is the accepted, functionally tested and delivery-packaged product expressed as net product mass. Packaging mass remains in separate input rows.

- Selected flow: Parts and accessories for the goods of subclasses 48211, 48212, 48232 and 48233, 48241 to 48249, 48251 to 48253, microtomes, parts and accessories n.e.c., for optical, photographic, cinematographic, precision, medical or surgical machines, instruments, apparatus and appliances `4e3c502e-82f3-4d0e-9cba-7e9b49eae4cb`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product output normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_output`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | shared manufacturing processes | Avoid allocation by submetering or subdividing product-specific production lots, machining cells, treatment lines, assembly and packaging wherever practical. | `ec-pef-2021` |
| `al_physical_causality` | remaining shared inputs and outputs | When subdivision is not possible, allocate shared electricity, water, chemicals and wastes using a documented causal physical driver such as measured machine time, treated surface area, bath loading or product mass; do not use arbitrary equal shares. | `ec-pef-2021`; `ec-jrc-stm-bref-2006` |
| `al_scrap_reporting` | low-alloy steel scrap | Record scrap as a separate waste output with its actual destination. Do not credit avoided primary material inside the foreground process; apply any recycling convention consistently in the downstream lifecycle model. | `ec-pef-2021` |
| `al_rework` | reworked or rejected parts | Assign additional processing and attributable utilities to the product lot causing rework; include unrecoverable segregated alloy-steel rejects in `output_low_alloy_steel_scrap`. | `us-epa-fabricated-metal-products-1995` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_inputs` | `precision_machining` | purchased stock, cutting fluid, process water and electricity | purchase, inventory, batch issue and meter records | lot_id; product_id; stock_grade; opening_inventory; receipts; issues; closing_inventory; water_meter; electricity_meter; cutting_fluid_addition | Reconcile material issues to inventory; read dedicated meters or allocate documented submeters to the production lot. | kg; MJ | each lot with monthly reconciliation | representative continuous 12-month period or disclosed shorter campaign | all site operations within machining boundary | sum attributable records, subtract inventory changes, divide by accepted net product mass | calibrated scale and meter records; purchase invoices; lot traveller; inventory reconciliation |
| `cp_machining_outputs` | `precision_machining` | machined part, low-alloy scrap and spent coolant | transfer, scale, tank and waste shipment records | lot_id; conforming_part_mass; scrap_mass; scrap_grade; coolant_drawdown; coolant_shipment; destination | Weigh conforming transfer and segregated scrap; reconcile spent coolant by tank level and shipment documents. | kg | each lot and waste shipment | same period as machining inputs | machining cell and coolant system | sum outputs by lot and reconcile with inputs and stock changes | calibrated scale; transfer record; waste manifest; tank-level log |
| `cp_surface_inputs` | `forming_surface_treatment` | parts, sodium hydroxide, process water and electricity | batch, bath, dosing and meter records | lot_id; input_part_mass; process_sequence; treated_area; water_meter; electricity_meter; sodium_hydroxide_receipts; bath_opening; bath_closing | Collect only when the conditional process applies; reconcile additions and bath inventory by treatment campaign. | kg; m2; MJ | each treatment batch with monthly bath reconciliation | same period as product dataset | all in-house forming and aqueous treatment lines used for product | sum attributable batch inputs and divide by accepted net product mass | batch traveller; bath analysis; calibrated dosing and utility meters |
| `cp_surface_outputs` | `forming_surface_treatment` | finished part, cleaning wastewater and waste alkaline liquor | transfer, effluent meter/tank and waste shipment records | lot_id; finished_part_mass; wastewater_mass_or_volume; density; wastewater_composition; spent_bath_mass; destination | Weigh finished transfer; meter or weigh segregated aqueous streams; retain composition samples and destination records. | kg | each batch and discharge/shipment | same period as surface inputs | treatment line through transfer to treatment or recovery | sum each distinct stream; convert volume only with documented density | calibrated scale/meter; laboratory analysis; tank log; waste manifest |
| `cp_assembly_inputs` | `assembly_test_packaging` | mechanical parts, electronics, screws, packaging and electricity | bill of materials, goods issue, assembly, meter and packaging records | lot_id; part_mass; electronics_mass; screw_mass; bag_mass; box_mass; electricity_meter; accepted_count; reject_count | Reconcile issued components and packaging to accepted units and returned inventory; meter attributable electricity. | kg; MJ | each assembly lot | same period as final output | final assembly, acceptance test and packaging area | sum net issues and attributable energy, divide by accepted net product mass | approved bill of materials; calibrated scale/meter; batch record; acceptance record |
| `cp_final_output` | `assembly_test_packaging` | accepted reference product | final inspection and dispatch records | lot_id; product_type; compatibility_or_function; accepted_count; accepted_net_mass; packaging_mass; reject_mass; specification_result | Weigh accepted product without packaging and link it to passed acceptance specifications and dispatch records. | kg | each finished lot | representative continuous 12-month period or disclosed campaign | all accepted production at declared site | sum accepted net mass and normalize all rows to 1 kg | calibrated final scale; inspection release; nonconformance log; dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized exchange = attributable exchange during reporting period / accepted net product mass during the same period | attributable exchange; accepted net product mass | exchange per 1 kg reference product | `ec-pef-2021` |
| `calc_machining_mass_balance` | `precision_machining` | Reconcile alloy-steel stock issued with machined-part transfer, low-alloy scrap and measured work-in-process change; investigate and disclose any material residual instead of forcing balance. | stock issued; part mass; scrap mass; work-in-process change | documented machining mass-balance residual | `us-epa-fabricated-metal-products-1995` |
| `calc_surface_mass_balance` | `forming_surface_treatment` | Reconcile input-part mass, finished-part mass, bath additions, wastewater, waste alkaline liquor and process inventory changes for the actual treatment chemistry; create a new concrete flow row for any omitted material. | batch inputs; batch outputs; bath inventory changes | documented surface-treatment mass-balance residual | `ec-jrc-stm-bref-2006` |
| `calc_transfer_reconciliation` | internal part transfers | Upstream output mass equals downstream input mass adjusted only for measured inventory change and declared loss; the two alternate assembly input rows are mutually exclusive for a given lot. | transfer records; inventory changes; route flag | reconciled internal transfer | `ec-pef-2021` |
| `calc_packaging_separation` | packaging and reference product | Report polyethylene bag and corrugated box masses separately; accepted net product mass excludes packaging. | gross packed mass; net product mass; bag mass; box mass | separated net-product and packaging exchanges | `ec-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference flow | Identify exact product type, compatible host or microtome function, material composition, net mass, performance specification, sterile state and packaging configuration. | approved product specification, bill of materials, drawing, acceptance and release records |
| `dq_route_coverage` | process boundary | Confirm every process-map inclusion condition against the actual route and document outsourced steps without double counting. | process traveller, supplier scope, route diagram and dataset links |
| `dq_measurement` | foreground exchanges | Use calibrated meters/scales or documented allocation from a representative measurement boundary; retain original units and conversion records. | calibration certificates, meter exports, scale tickets and allocation workbook |
| `dq_temporal` | reporting period | Prefer a continuous 12-month period covering normal variability; disclose campaign or shorter-period data and justify representativeness. | production calendar, batch list, downtime and maintenance records |
| `dq_completeness` | inventory | Reconcile bills of material, purchase and waste records; add concrete product, waste or elementary rows for applicable exchanges absent from the representative pattern. | mass balances, invoice reconciliation, waste manifests and exception log |
| `dq_uuid_identity` | TianGong references | Preserve verified UUID, flow type, property and unit group; product-specific qualifiers must not be inferred from an empty TianGong general comment. | direct state-100 identity audit and foreground product specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_complete` | reference flow | Fail validation when any required qualifier, net product mass, acceptance specification or exact reference-product UUID is missing. | `un-cpc-3-0-structure-2025` |
| `vr_route_consistent` | process map | Require `precision_machining` and `assembly_test_packaging` for the representative route; require all conditional surface-treatment rows when `forming_surface_treatment` is declared and reject those rows when the process is absent. | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `vr_atomic_inventory` | inventory rows | Require each row to contain one atomic exchange with verified UUID, flow type, property, unit, amount rule, collection protocol and applicable route condition. | `ec-pef-2021` |
| `vr_mass_reconciliation` | material and intermediate transfers | Check machining, treatment, assembly and packaging mass reconciliations and require investigation and disclosure of material residuals. | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `vr_allocation_documented` | shared operations | Require subdivision evidence or a causal physical allocation driver and prohibit arbitrary equal or undisclosed economic allocation. | `ec-pef-2021` |
| `vr_data_quality` | completed dataset | Check temporal coverage, calibration, bill-of-material completeness, waste destinations, supplier dataset links and normalization consistency. | `ec-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may serve as `background_dataset` only for products matching the declared subtype, compatibility/function, composition, route and market state. |
| downstream_use | Foreground process and lifecyclemodel construction for the declared CPC 48281 product at the factory gate. |
| allowed_use | Cradle-to-gate studies and downstream product systems using a product-specific, geographically and technologically representative match. |
| excluded_use | Unqualified category-average substitution across dissimilar optical, electronic, polymer, medical, surgical or microtome products; use-phase, service-life, sterilization or end-of-life claims not included in the dataset. |
| required_metadata | PCR id and version; product type; host compatibility or microtome function; bill of materials; net mass; route; surface treatment; electronics; sterile state; packaging; geography; technology; data period; allocation; upstream dataset links; exclusions. |
| required_quality_disclosure | Primary-data share; temporal and geographic coverage; meter and scale calibration; allocation drivers; mass-balance residuals; waste destinations; supplier-data quality; data gaps and deviations. |
| update_trigger | Change in product design or material composition, host compatibility/function, principal manufacturing route, treatment chemistry, electronics, sterilization, packaging, site/geography, allocation method, or a material shift in measured inputs, outputs or data quality. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official category identity, parent scope and reference-product classification. |
| `us-epa-fabricated-metal-products-1995` | `official_guidance` | U.S. Environmental Protection Agency, Profile of the Fabricated Metal Products Industry, EPA/310-R-95-007, September 1995, https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/fabmetsn.pdf (retrieved 2026-09-07) | Representative metal shaping, machining, cleaning and finishing sequence; cutting fluids; waste and emission points; foreground process decomposition. |
| `ec-jrc-stm-bref-2006` | `official_guidance` | European Commission, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-07) | Conditional aqueous/electrolytic/chemical treatment boundary, pretreatment, rinsing, drying, utilities, wastewater and spent-solution segregation. |
| `ec-pef-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, 15 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-07) | Life-cycle boundary completeness, company-specific data quality, physical allocation hierarchy, consistency and completeness checks. |
