---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.drafting-tables-and-machines-and-other-drawing-marking-out-or-mathematical-calculating-817a935c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Drafting tables and machines, and other drawing, marking-out or mathematical calculating instruments

## 1. Scope and Applicability

This PCR applies to factory-gate foreground data packages for finished drafting tables and drafting machines and for dedicated drawing, marking-out, or mathematical calculating instruments within the category identity below. It covers the declared in-house combination of metal fabrication, surface preparation and coating, assembly and testing, and dispatch packaging. Each dataset shall identify the particular product variant and record only the conditional routes that actually occur.

Precision balances, hand-held length-measuring instruments, separately supplied parts and accessories, general-purpose furniture, and general-purpose electronic computers or calculators are excluded. Use and maintenance, distribution after the factory gate, and end-of-life are outside this PCR. The category boundary follows the official CPC structure (`un-cpc-3-0-structure-2025`); manufacturing-stage coverage is informed by the official metal-fabrication and surface-treatment descriptions (`us-epa-municipal-pretreatment-1993`, `eu-jrc-surface-treatment-metals-plastics-2006`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.drafting-tables-and-machines-and-other-drawing-marking-out-or-mathematical-calculating-817a935c |
| classification_refs | CPC 3.0: 48232, exact scope context |
| covered_products | Finished drafting tables and machines, and dedicated drawing, marking-out or mathematical calculating instruments |
| excluded_products | Precision balances; hand-held instruments for measuring length; separately supplied parts and accessories; general-purpose furniture; general-purpose electronic computing equipment |
| representative_product | The declared finished product variant produced by the reporting facility |
| production_route | Route-specific combination of component fabrication, optional surface preparation and powder coating, final assembly and testing, and packaging |
| market_state | Conforming finished product at the factory gate, ready for dispatch; reference mass excludes dispatch packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished product capable of the declared drafting, drawing, marking-out, or mathematical calculating function |
| How much | 1 kg net mass of conforming finished product |
| How well | Meets the manufacturer's declared product-variant dimensions, accuracy or alignment criteria, stability criteria, and release inspection |
| How long or cycle | One factory-gate production output; service life is declared separately and is not part of the reference amount |
| reference_flow_link | The reference amount equals the net mass of `as_finished_product`; dispatch packaging is inventoried separately and excluded from that net mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Drafting tables and machines, and other drawing, marking-out or mathematical calculating instruments `c1e54809-bd7b-4f5b-bc54-8ef236a2889b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family and model; drafting table, drafting machine, drawing instrument, marking-out instrument, or mathematical calculating instrument; net product mass; principal materials and purchased-component bill; in-house processes; surface-finish route; packaging configuration; production geography; reporting period; release-test criteria |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_net_product_mass` | reference product and `as_finished_product` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass from calibrated weighing or a verified component mass roll-up; exclude corrugated boxes, film, pallets, manuals, and other dispatch packaging. |
| `mu_material_mass` | material and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass or inventory mass converted to kg; retain stock-form, alloy or composition, and moisture qualifiers where they materially affect identity. |
| `mu_electricity_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Convert metered electricity from kWh to MJ using 1 kWh = 3.6 MJ and disclose the original meter unit, voltage level, grid geography, and any allocation from shared meters. |
| `mu_gas_volume` | industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the reference temperature and pressure for metered or supplier-reported gas volume; do not combine oxygen and shielding gas in one quantity. |
| `mu_water_mass` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement; when volume is metered, document density and reference conditions used for conversion to kg. |

## 5. System Boundary

The foreground boundary starts when purchased material stock, ready-to-assemble components, treatment chemicals, utilities, and packaging are received by the reporting facility. It ends when a conforming product has passed release testing and is packaged for dispatch. Upstream production and delivery of all purchased inputs shall be linked to supplier-specific or representative upstream datasets; onsite fabrication, finishing, assembly, testing, rejects, and waste management transfers are foreground records.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased stock and ready-to-assemble components at facility receiving, with material grade, component state, supplier, and delivered mass declared |
| starting_condition_role | Upstream-to-foreground hand-off |
| product_classification_scope | Finished products within the semantic CPC 3.0 subclass 48232 boundary, independently of the external classification path |
| recursive_input_rule | A purchased input already meeting this same finished-product category is recorded as an upstream product input with its own dataset and is not recursively disassembled inside the foreground model |
| upstream_dataset_requirement | Link every purchased material, component, chemical, utility, and packaging flow to a geographically and technologically representative upstream dataset; disclose proxies |
| disclosure | Declare included and excluded process routes, product variant, net-mass method, bill of materials, finishing chemistry, release test, waste destinations, geography, reporting period, allocation, and any proxy dataset |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | all datasets | Include receiving through packaged factory-gate output; exclude downstream distribution, use, maintenance, and end-of-life unless a separate study expands the boundary. | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |
| `sb_route_specificity` | conditional processes and rows | Include a conditional process or exchange only when the declared product variant and site records show that route occurs; do not populate mutually exclusive routes as simultaneous defaults. | `us-epa-municipal-pretreatment-1993`; `eu-jrc-surface-treatment-metals-plastics-2006` |
| `sb_upstream_links` | purchased inputs | Keep supplier production outside the foreground gate but connect each purchased input to an upstream dataset with disclosed geography, technology, and product state. | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_component_fabrication` | Metal component cutting, forming, machining, and joining | `conditional` | Include when steel or aluminium stock is cut, formed, machined, or joined onsite; omit when all metal components arrive ready for assembly | Foreground component fabrication | kg net fabricated metal incorporated in conforming output |
| `surface_preparation_and_powder_coating` | Metal surface preparation and powder coating | `conditional` | Include when aqueous cleaning, chemical preparation, or powder coating occurs onsite | Foreground surface finishing | m2 treated surface and kg coated part output, both reported |
| `final_assembly_and_testing` | Final assembly, adjustment, and release testing | `required` | Always included for the declared finished product | Foreground product assembly and quality release | kg conforming finished product before dispatch packaging |
| `packaging` | Dispatch packaging | `required` | Always included; zero use requires documented reusable or packaging-free dispatch | Foreground packing | kg conforming finished product packed for dispatch |

### Process: Metal component cutting, forming, machining, and joining (`metal_component_fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled carbon-steel sheet (`mf_cold_rolled_steel_sheet`)

Record cold-rolled carbon-steel sheet entering onsite cutting, forming, machining, or joining when it appears in the declared bill of materials. Its Tiangong UUID remains unresolved because the sheet-like candidates have conflicting bilingual identities.

- Selected flow: Cold-rolled carbon-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured received or issued mass attributable to conforming production plus the corresponding measured steel scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources:

###### Aluminium sheet (`mf_aluminium_sheet`)

Record aluminium sheet entering onsite fabrication only for product variants that use it.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured received or issued mass attributable to conforming production plus the corresponding measured aluminium scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources:

###### Fabrication electricity (`mf_electricity`)

Record purchased electricity consumed by cutting, forming, machining, welding, extraction, and directly associated fabrication equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented allocation from a facility meter to fabrication equipment and production lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

###### Industrial oxygen for thermal cutting or welding (`mf_industrial_oxygen`)

Record industrial oxygen only when an onsite thermal-cutting or oxygen-consuming welding route is used.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered volume or supplier-cylinder withdrawal attributable to the included route, at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_gases`
- Sources:

###### Carbon-dioxide shielding gas (`mf_carbon_dioxide_shielding`)

Record carbon dioxide product only when it is supplied as shielding gas for an included welding route.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: cylinder mass withdrawal or supplier delivery less closing inventory attributable to the included welding route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_gases`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`mf_post_industrial_steel_scrap`)

Record segregated carbon-steel offcuts, chips, and rejected metal pieces leaving fabrication for recovery or treatment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_scrap`
- Sources:

###### Aluminium scrap (`mf_aluminium_scrap`)

Record segregated aluminium offcuts, chips, and rejected metal pieces leaving fabrication for recovery or treatment.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_scrap`
- Sources:

##### Elementary flows

### Process: Metal surface preparation and powder coating (`surface_preparation_and_powder_coating`)

#### Inputs

##### Product flows

###### Process water for surface preparation and rinsing (`sf_process_water`)

Record water crossing the process boundary for aqueous cleaning, bath make-up, and rinsing in the included finishing route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-record water supplied to the included finishing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`sf_sodium_hydroxide`)

Record sodium hydroxide product only when used in the declared aqueous alkaline cleaning or bath-control recipe; report solution concentration separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active sodium-hydroxide mass from purchase, make-up, and concentration records attributable to included production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_inputs`
- Sources:

###### Powder coating (`sf_powder_coating`)

Record powder coating consumed by the included coating line; declare resin chemistry, colour, and reclaimed-powder practice.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus receipts minus closing inventory and separately measured recoverable return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_inputs`
- Sources:

###### Finishing electricity (`sf_electricity`)

Record electricity for cleaning-line pumps, ventilation, powder application, curing, and directly associated treatment equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented allocation from a facility meter to the finishing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Surface-treatment wastewater (`sf_surface_treatment_wastewater`)

Record the aqueous waste stream transferred from cleaning, rinsing, and bath maintenance before or after onsite treatment, with the transfer point and chemistry declared. No exact Tiangong UUID is confirmed.

- Selected flow: Surface-treatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or transfer mass attributable to included finishing production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources:

###### Metal-hydroxide treatment sludge (`sf_metal_hydroxide_sludge`)

Record dewatered metal-hydroxide sludge only when onsite treatment of surface-treatment wastewater produces it; declare dry-solids fraction and hazardous classification. No exact Tiangong UUID is confirmed.

- Selected flow: Metal-hydroxide treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass transferred offsite, accompanied by measured or laboratory dry-solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources:

###### Powder-coating waste (`sf_powder_coating_waste`)

Record unreclaimed overspray, booth-cleaning residue, and rejected powder coating that leaves as one segregated powder-coating waste stream.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing waste mass attributable to included finishing production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources:

##### Elementary flows

### Process: Final assembly, adjustment, and release testing (`final_assembly_and_testing`)

#### Inputs

##### Product flows

###### Purchased ABS plastic component (`as_abs_component`)

Record a purchased, ready-to-assemble ABS component only when it appears in the declared bill of materials. Primary-form ABS granulates are not substitutes for this component identity, and no exact Tiangong UUID is confirmed.

- Selected flow: Purchased ABS plastic component
- Flow property / unit: Mass / kg
- Amount rule: received component mass issued to conforming product lots, net of separately documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources:

###### Laminated medium-density fibreboard worktop (`as_laminated_mdf_worktop`)

Record a purchased laminated MDF worktop only for drafting-table variants that contain it. No exact Tiangong UUID is confirmed.

- Selected flow: Laminated medium-density fibreboard worktop
- Flow property / unit: Mass / kg
- Amount rule: received component mass issued to conforming product lots, net of separately documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources:

###### Assembly and testing electricity (`as_electricity`)

Record electricity consumed by assembly tools, adjustment equipment, release-test equipment, lighting allocated to the line, and directly associated extraction.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented allocation from a facility meter to assembly and testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished product (`as_finished_product`)

Record only product that passes the declared release inspection; rejected units remain in rework or are inventoried through their specific material waste streams when discarded.

- Selected flow: Drafting tables and machines, and other drawing, marking-out or mathematical calculating instruments `c1e54809-bd7b-4f5b-bc54-8ef236a2889b`
- Flow property / unit: Mass / kg
- Amount rule: calibrated net mass of conforming released product, excluding dispatch packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Dispatch packaging (`packaging`)

#### Inputs

##### Product flows

###### Corrugated-board boxes (`pk_corrugated_board_boxes`)

Record corrugated-board boxes delivered with the finished product at the factory gate.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured box mass multiplied by boxes consumed for the conforming output lot, adjusted for returned unused boxes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources:

###### Low-density polyethylene film (`pk_ldpe_film`)

Record PE-LD film delivered as wrapping or protective packaging with the finished product.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: measured roll withdrawal attributable to the conforming output lot, net of returned unused film
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources:

###### Packaging electricity (`pk_electricity`)

Record electricity consumed by wrapping, sealing, strapping, labelling, and directly associated packing-line equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented allocation from a facility meter to dispatch packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | shared processes and meters | First subdivide by production line, equipment, batch, or measured operating time wherever physically separable. | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |
| `al_shared_burdens` | residual shared electricity, water, treatment, and packaging burdens | After subdivision, allocate residual shared burdens by a documented causal driver such as machine time, metered throughput, treated surface area, or number of packed units; use mass only when no better causal driver is available and disclose the sensitivity. | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |
| `al_scrap_and_rework` | scrap, rejects, and rework | Return rework burdens to the production lot that generated them. Record scrap at the measured factory-gate waste transfer; do not subtract an avoided-primary-material credit inside this attributional foreground inventory. | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `metal_component_fabrication` | steel and aluminium stock inputs | receiving, stock issue, and return records | material identity; grade; stock form; lot; opening mass; receipts; returns; closing mass | reconcile calibrated scale records with inventory movements and the bill of materials | kg | each lot, aggregated monthly | representative consecutive 12 months or full shorter campaign | all onsite fabrication lines serving the product | net issued mass divided by conforming net product mass | scale calibration; material certificates; stock reconciliation |
| `cp_process_energy` | all included processes | electricity | submeter or facility energy record | meter id; opening and closing reading; original unit; process operating time; allocation driver | read submeters; otherwise allocate a reconciled facility meter using documented operating data | kWh and MJ | monthly or each campaign | same period as production denominator | all included equipment and directly associated services | convert kWh to MJ, allocate, then divide by conforming net product mass | meter calibration or invoice reconciliation; allocation worksheet |
| `cp_fabrication_gases` | `metal_component_fabrication` | industrial oxygen and carbon-dioxide shielding gas | gas meter, cylinder, and purchase record | gas identity; purity; opening inventory; receipts; closing inventory; returned cylinders; reference temperature and pressure | reconcile metered or cylinder withdrawal with supplier records | m3 or kg | each cylinder or monthly meter reading | same period as included cutting or welding route | all included gas-consuming equipment | net consumption attributable to product divided by conforming net product mass | supplier specification; cylinder log; meter check |
| `cp_fabrication_scrap` | `metal_component_fabrication` | segregated steel and aluminium scrap | waste scale ticket and internal scrap log | waste identity; alloy family; gross, tare, and net mass; lot; destination | weigh each outgoing segregated stream and reconcile with material balance | kg | each transfer | same period as fabrication inputs | all included fabrication lines | summed net mass by material divided by conforming net product mass | scale ticket; waste transfer record; material-balance reconciliation |
| `cp_finishing_inputs` | `surface_preparation_and_powder_coating` | water, sodium hydroxide, and powder coating | meter, purchase, bath, and inventory records | material identity; concentration; opening inventory; receipts; closing inventory; water reading; reclaimed powder | reconcile meters and inventories; calculate active chemical mass from solution mass and measured concentration | kg | each batch and monthly | same period as included finishing output | all included onsite finishing lines | net input or calculated active mass divided by conforming net product mass | meter check; concentration test; purchase and inventory reconciliation |
| `cp_finishing_outputs` | `surface_preparation_and_powder_coating` | wastewater, metal-hydroxide sludge, and powder-coating waste | discharge meter, treatment log, laboratory result, and waste ticket | stream identity; transfer point; wet mass; dry-solids fraction; chemistry; hazardous status; destination | meter wastewater and weigh each outgoing waste; retain representative analyses | kg | each discharge or transfer | same period as included finishing inputs | all included finishing and treatment equipment | summed measured mass by atomic stream divided by conforming net product mass | laboratory report; meter record; waste transfer document; water balance |
| `cp_assembly_materials` | `final_assembly_and_testing` | purchased ABS component and laminated MDF worktop | bill of materials, receiving, issue, and return records | component identity; composition; supplier; lot; unit mass; quantity issued; returns | verify unit mass and reconcile issued quantities to conforming lots | kg | each product lot | representative consecutive 12 months or full shorter campaign | all assembly lines serving the product | net issued component mass divided by conforming net product mass | approved bill of materials; supplier specification; scale check |
| `cp_finished_product` | `final_assembly_and_testing` | conforming finished product | calibrated weighing and release record | model; serial or lot; gross mass; packaging tare; net mass; test result; reject or rework status | weigh released output or verify component roll-up, then exclude dispatch packaging | kg | each lot | same period as all inventory numerators | all product variants included in the dataset | sum conforming net mass; normalize inventory to 1 kg | scale calibration; signed release record; mass roll-up reconciliation |
| `cp_packaging_materials` | `packaging` | corrugated-board box and PE-LD film | packaging issue, unit-mass, roll, and return records | packaging identity; specification; unit mass; quantity issued; roll opening and closing mass; returns | weigh representative units and reconcile issue or roll withdrawal to packed lots | kg | each lot, aggregated monthly | same period as packed conforming output | all dispatch packing stations serving the product | net consumed mass divided by conforming net product mass | packaging specification; scale check; inventory reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = attributable row amount / conforming net finished-product mass | row numerator; `as_finished_product` net mass | amount per 1 kg reference product | |
| `calc_electricity_conversion` | electricity rows | electricity (MJ) = metered electricity (kWh) × 3.6 before normalization | reconciled kWh; process allocation driver; net product mass | MJ per 1 kg reference product | |
| `calc_active_sodium_hydroxide` | `sf_sodium_hydroxide` | active NaOH mass = solution mass × measured NaOH mass fraction | solution mass; laboratory or supplier concentration | kg active NaOH per 1 kg reference product | |
| `calc_packaging_box_mass` | `pk_corrugated_board_boxes` | box mass = verified unit mass × boxes consumed minus returned-unused-box mass | unit mass; issued count; return mass | kg boxes per 1 kg reference product | |
| `calc_material_balance` | fabrication and finishing | reconcile each material input to incorporated mass, same-material scrap, inventory change, and documented loss without combining different materials or waste streams | material-specific input; output; scrap; inventory change | material-specific closure percentage and discrepancy | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product and waste rows | Preserve the atomic flow identity, product or waste state, composition or grade, supplier, geography, and Tiangong UUID status; do not substitute a broader flow silently. | supplier specification, direct-read UUID identity, bill of materials, waste profile |
| `dq_temporal` | all foreground records | Use a representative consecutive 12-month period; a shorter campaign is allowed only when it covers the complete production campaign and seasonality is not material. | dated meter, inventory, production, and transfer records |
| `dq_completeness` | all included processes | Reconcile input, product, scrap, wastewater, and inventory-change records; explain material discrepancies and any omitted route. | material and water balances; route checklist; reconciliation worksheet |
| `dq_measurement` | measured quantities | Use calibrated or verified meters and scales, retain original units, and document every conversion and shared-meter allocation. | calibration certificates; meter logs; invoices; calculation workbook |
| `dq_representativeness` | upstream links | Match geography, technology, product state, material grade, electricity grid, and waste destination; disclose each proxy and its expected influence. | supplier data; dataset metadata; proxy justification |
| `dq_range_status` | all important flows | Until independent boundary-compatible ranges are reviewed, use foreground values without source-backed default substitution and flag unusual values through mass, water, and energy reconciliation. | foreground records and unresolved range-evidence register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Confirm UUID, Mass property, kg unit, exact product variant qualifiers, and equality between the reference amount and normalized `as_finished_product`. | `un-cpc-3-0-structure-2025` |
| `val_process_routes` | process map and inventory | Confirm every required process is present, every conditional process states whether its condition applies, and absent routes do not carry non-zero exchanges. | `us-epa-municipal-pretreatment-1993`; `eu-jrc-surface-treatment-metals-plastics-2006` |
| `val_atomic_inventory` | all inventory rows | Confirm every row contains one physical, chemical, waste, or energy exchange; UUID-empty rows must match the manifest unresolved register exactly. | |
| `val_mass_and_water_balance` | fabrication and finishing | Check material-specific mass closure and the finishing water balance; investigate and document discrepancies before release. | `us-epa-municipal-pretreatment-1993` |
| `val_energy_and_units` | electricity and gas rows | Confirm kWh-to-MJ conversion, gas reference conditions, original-unit retention, and reconciliation to meters or supplier records. | |
| `val_allocation_disclosure` | shared processes | Confirm subdivision was attempted first and every residual allocation driver, denominator, and sensitivity is documented. | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |
| `val_bilingual_and_uuid` | published data package | Confirm UUID-bearing Chinese displays use the exact Tiangong Chinese baseName and that product state, property, unit group, geography, technology, and generalComment reviews remain compatible. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from a verified foreground data package |
| downstream_use | Attributional process datasets and lifecycle models for products within the declared variant, route, geography, technology, and reporting-period scope |
| allowed_use | Use as a factory-gate product dataset when the consumer matches the required qualifiers and includes compatible upstream datasets and waste-treatment links |
| excluded_use | Do not use as a service-life functional comparison, for excluded product categories, or as a substitute for materially different product mass, bill of materials, finishing route, geography, or technology |
| required_metadata | canonical PCR id; product model and function; net product mass; principal materials and purchased components; included processes; finishing route; packaging; geography; technology; reporting period; allocation; UUIDs and unresolved identities; upstream links |
| required_quality_disclosure | primary-data share; meter and scale verification; temporal coverage; mass, water, and energy reconciliation; allocation drivers; proxy datasets; waste destinations; unresolved UUID and range-evidence needs |
| update_trigger | material product redesign; principal-material or component change; new or removed onsite process; coating-chemistry change; supplier or grid change; waste-treatment change; production relocation; or foreground data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Product-category identity and exclusions from adjacent CPC subclasses |
| `hk-csd-merchandise-trade-july-2007` | `dataset` | Census and Statistics Department, Hong Kong SAR, External Merchandise Trade, July 2007, https://www.statistics.gov.hk/pub/B10200032007MM07B0700.pdf (retrieved 2026-09-07) | Verified professional Chinese terminology for the product-category title |
| `us-epa-municipal-pretreatment-1993` | `official_guidance` | U.S. EPA, Guides to Pollution Prevention: Municipal Pretreatment Programs, EPA/625/R-93/006, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30004M80.TXT (retrieved 2026-09-07) | Metal fabrication, cleaning, coating, machining, and wastewater process decomposition |
| `eu-jrc-surface-treatment-metals-plastics-2006` | `official_guidance` | European Commission Joint Research Centre, Surface Treatment of Metals and Plastics BREF, adopted August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-07) | Conditional aqueous chemical and electrolytic surface-treatment boundary |
| `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` | `official_guidance` | European Commission Joint Research Centre, International Reference Life Cycle Data System (ILCD) Handbook — General guide for Life Cycle Assessment — Detailed guidance, EUR 24708 EN, 2010, https://publications.jrc.ec.europa.eu/repository/handle/JRC48157 (retrieved 2026-09-07) | System-boundary, inventory, reporting, allocation, and review framework |
