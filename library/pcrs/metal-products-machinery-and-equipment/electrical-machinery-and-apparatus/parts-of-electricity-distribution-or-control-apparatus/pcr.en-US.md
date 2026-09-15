---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electricity-distribution-or-control-apparatus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of electricity distribution or control apparatus

## 1. Scope and Applicability

This PCR covers factory-gate production of discrete parts designed solely or principally for electricity distribution or control apparatus. Covered examples include conductive connections and contacts, busbar links, terminals, mechanical operating parts, dedicated housings, mounting pieces, and insulating supports supplied as parts rather than complete apparatus.

The foreground boundary begins with production-ready purchased inputs at the factory gate and ends with a conforming finished part ready for dispatch. It includes applicable forming, moulding, machining, joining, assembly, inspection and testing, aqueous surface treatment, coating preparation, and on-site thermal energy. Upstream production of purchased inputs must be represented by linked datasets.

Complete apparatus, equipped boards or cabinets, optical-fibre connectors, general-purpose fasteners, buildings, capital equipment, installation, use, distribution after the factory gate, and end of life are excluded. Packaging is outside the reference-product mass; when included in study scope, each actual packaging component must be added as a separate atomic exchange.

Because CPC 46220 spans materially different parts, each dataset must represent one declared part or homogeneous family. Unlike functions, materials, voltage classes, or routes must not be averaged without disclosure and production-weighted aggregation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electricity-distribution-or-control-apparatus |
| classification_refs | CPC 3.0: 46220, Parts of electricity distribution or control apparatus |
| covered_products | Discrete conductive, mechanical, enclosure, mounting and insulating parts designed solely or principally for electricity distribution or control apparatus and supplied as parts |
| excluded_products | Complete apparatus in CPC 4621; equipped boards, consoles or cabinets; optical-fibre connectors; generic fasteners; transformers and transformer parts; cables; buildings; capital equipment; installation, use and end-of-life services |
| representative_product | A conforming, production-ready connection, contact, terminal, busbar link, mechanism, housing, mounting piece or insulating support supplied as a part |
| production_route | Purchased production-ready inputs; forming, moulding or machining; optional surface treatment or oxygen-assisted cutting; joining or assembly; inspection and testing; factory-gate release |
| market_state | Finished part at factory gate, with specification revision, function, material grade, voltage class where relevant, surface or insulation specification, mass, route and geography declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a conforming part designed solely or principally for electricity distribution or control apparatus |
| How much | 1 kg net mass of finished conforming part, excluding packaging |
| How well | Meets the declared drawing, material grade, tolerances, function, voltage class where relevant, and surface-finish or insulation specification |
| How long or cycle | One production lot released at the factory gate; no use-stage service life is credited |
| reference_flow_link | Exactly 1 kg of the declared reference product flow realizes the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts of electricity distribution or control apparatus `a7efcaee-e37f-42ab-8b39-2ae4d572bb2b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number or homogeneous family; drawing or specification revision; part function; material grade and purchased form; net part mass; voltage class where relevant; surface or insulation specification; manufacturing route, technology, geography and reporting period; recycled-content claim if used; packaging exclusion; rejects and scrap treatment |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize inventory to 1 kg net mass of accepted finished parts. Use dry or as-received mass consistently as declared; exclude packaging and rejects from the denominator. |
| `electricity_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the meter basis and convert kWh to MJ with 1 kWh = 3.6 MJ. Do not include upstream grid emissions as direct elementary flows. |
| `gas_volume_basis` | gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at declared temperature and pressure; retain any normal- or standard-cubic-metre reference condition and conversion. |
| `water_mass_basis` | process water and aqueous wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass metering. Convert volume only with recorded volume, density assumption, temperature and formula. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Production-ready purchased materials, components, chemicals and energy carriers received at the foreground factory gate |
| starting_condition_role | Foreground manufacturing starts at receipt; extraction, refining and manufacture of purchased inputs are represented by upstream datasets |
| product_classification_scope | Dedicated parts supplied separately for electricity distribution or control apparatus; complete apparatus and general-purpose items are excluded |
| recursive_input_rule | A purchased CPC 46220 input is recorded once with its upstream dataset and is not recursively remanufactured inside this foreground boundary |
| upstream_dataset_requirement | Each purchased product or energy input links to a geographically and technologically representative dataset with declared state and delivery boundary |
| disclosure | Declare product definition, composition, purchased forms, included and subcontracted operations, geography, period, energy supply, scrap destinations, wastewater and sludge hand-off, and omissions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include all on-site operations from receipt through release of the conforming part; exclude distribution, installation, use, maintenance and end of life. | `schneider-electric-masterpact-rear-connection-pep-2024` |
| `boundary_surface_treatment` | aqueous surface treatment | Include water, each chemical, electricity and heat, bath losses, wastewater, sludge, and directly measured emissions when aqueous treatment applies; otherwise document each row as not applicable. | `eu-jrc-stm-bref-2006` |
| `boundary_actual_materials` | purchased inputs | Add one atomic product-input row for every actual purchased material or component; never substitute an umbrella material-family row. | `schneider-electric-masterpact-rear-connection-pep-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_manufacturing` | Part manufacturing, finishing and release | required | Always included; route-conditional exchanges are identified on their atomic cards | Foreground forming, moulding, machining, optional treatment, joining, assembly, inspection and testing | 1 kg net mass of conforming finished part at factory gate |

### Process: Part manufacturing, finishing and release (`part_manufacturing`)

#### Inputs

##### Product flows

###### Refined copper stock (`refined_copper_input`)

Record refined copper only when consumed in the declared part; declare grade, alloy, form, recycled content and supplier boundary.

- Selected flow: Refined copper `176d7abf-4f6c-4584-a720-f9a518ce7d2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: accepted copper stock issued to the lot minus documented unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `schneider-electric-masterpact-rear-connection-pep-2024`

###### Cold-rolled steel sheet (`steel_sheet_input`)

Record this row only for a steel-sheet route. Its UUID remains unresolved after bounded state-100 review.

- Selected flow: Cold-rolled steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: accepted cold-rolled steel sheet issued to the lot minus documented unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `schneider-electric-masterpact-rear-connection-pep-2024`

###### Purchased electricity (`manufacturing_electricity_input`)

Record electricity delivered to all included production and allocated site-support equipment. Exclude upstream generation emissions from direct outputs.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered or production-accounted purchased electricity attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Process water (`process_water_input`)

Record process water for applicable cleaning, rinsing, surface treatment or testing; declare quality, source and delivery boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: metered or tank-balance process water; not applicable when no water-using operation is included
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Record sodium hydroxide only when consumed by the declared cleaning or treatment bath; retain supplied state and concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: active sodium-hydroxide mass charged or replenished; not applicable when absent from the chemistry
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Industrial oxygen (`industrial_oxygen_input`)

Record supplied oxygen only for an applicable oxygen-assisted operation; declare purity, pressure and volume reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: metered or cylinder-inventory oxygen consumed; not applicable when oxygen-assisted processing is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Gaseous natural gas (`natural_gas_input`)

Record natural gas only when on-site combustion supplies attributable process heat; declare composition, supply geography and reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: metered or invoice-balanced natural gas; not applicable when natural gas is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished part (`reference_product_output`)

Record only accepted finished-part mass; exclude rejected parts, packaging and dispatch accessories.

- Selected flow: Parts of electricity distribution or control apparatus `a7efcaee-e37f-42ab-8b39-2ae4d572bb2b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: fixed reference output of 1 kg net mass of conforming finished part
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap_output`)

Record segregated steel offcuts, punchings and rejected pieces leaving as waste; do not net scrap against material input.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured steel scrap dispatched or accumulated; not applicable when no steel is processed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

###### Copper scrap (`copper_scrap_output`)

Record segregated copper offcuts, punchings, turnings and rejected pieces; declare sorting, contamination and destination.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured copper scrap dispatched or accumulated; not applicable when no copper is processed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

###### Surface-treatment wastewater (`surface_treatment_wastewater_output`)

Record aqueous wastewater from rinsing, bath dumps and cleaning; declare composition, water basis and treatment hand-off. Its UUID remains unresolved.

- Selected flow: Wastewater from metal surface treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: metered or tank-balance wastewater leaving the foreground boundary; not applicable when none is generated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `eu-jrc-stm-bref-2006`

###### Metal-bearing surface-treatment sludge (`surface_treatment_sludge_output`)

Record bath-maintenance or wastewater-treatment sludge; declare wet or dry basis, metals, hazardous classification and destination. Its UUID remains unresolved.

- Selected flow: Metal-bearing surface-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured sludge leaving the boundary on the declared basis; not applicable when none is generated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_carbon_dioxide_output`)

Record only fossil CO2 emitted directly from foreground combustion; exclude upstream electricity, fuel-supply and material emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured or fuel-balance-calculated direct fossil CO2; not applicable when no fossil fuel is combusted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared lines and services | First avoid allocation through lot-, line- or equipment-level metering and subdivision. | |
| `allocation_physical` | unavoidable shared exchanges | Allocate using a documented causal physical driver such as machine time, metered energy, processed mass, bath loading or occupied volume; do not default to revenue. | |
| `allocation_scrap` | recoverable scrap | Report gross inputs and gross scrap outputs without netting. Declare the end-of-waste boundary and recycling method; do not credit avoided production inside this foreground inventory unless explicitly required by goal and scope. | |
| `allocation_quality` | family datasets | Allow production-weighted family averages only for sufficiently homogeneous functions, specifications, materials and routes; otherwise publish separate datasets. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `part_manufacturing` | purchased material input | ERP issues, returns and weigh tickets | identity; grade; form; supplier; lot; issued and returned mass; recycled content | reconcile ERP movements, lot travellers and calibrated scales | kg | each lot; monthly reconciliation | at least 12 representative months or full shorter campaign | all included lines and subcontracted additions | issued mass minus documented unopened returns; normalize by accepted output | specification; supplier declaration; traveller; calibration; reconciliation |
| `cp_energy_records` | `part_manufacturing` | electricity and gas input | meter, invoice, cylinder or tank inventory | carrier; readings; quantity; reference conditions; allocation driver | dedicated meters where available; otherwise reconcile commercial or inventory records | MJ; m3 | meter or delivery interval; monthly reconciliation | production reporting period | included operations and allocated support | remove unrelated loads; allocate with declared driver; normalize by output | calibration; invoice; inventory reconciliation; allocation worksheet |
| `cp_water_chemical_records` | `part_manufacturing` | water and chemical input | meter, tank balance, batch sheet, concentration certificate | water quantity; density; solution mass; active concentration; bath charge and replenishment | reconcile meters and batches; calculate active chemical mass | kg | each charge or meter interval; monthly reconciliation | production reporting period | each included aqueous line | sum attributable input; convert volume with documented density; normalize by output | calibration; certificate; batch sheet; tank reconciliation |
| `cp_output_mass` | `part_manufacturing` | product and waste output | inspection release, scale, manifest, tank record | product mass; waste identity; wet or dry basis; composition; destination; dispatch mass | weigh accepted product and segregated wastes; reconcile tanks and manifests | kg | each lot or dispatch; monthly reconciliation | production reporting period | all included operations and hand-off points | sum atomic outputs separately; normalize by output; no scrap netting | release; calibration; manifest; analysis; mass balance |
| `cp_direct_emission` | `part_manufacturing` | direct fossil CO2 | stack or fuel record | emission; fuel; carbon content; fossil fraction; oxidation basis; driver | compliant measurement or disclosed calculation from collected fuel data | kg | test or accounting interval; monthly reconciliation | production reporting period | included combustion sources | sum attributable direct fossil CO2; normalize by output | stack report or fuel certificate; worksheet; fuel balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = attributable exchange / net accepted finished-part mass | exchange quantity; accepted output mass | amount per 1 kg reference product | |
| `calc_electricity` | purchased electricity | MJ = metered kWh × 3.6 | kWh | MJ electricity | |
| `calc_active_naoh` | sodium-hydroxide solution | active NaOH mass = solution mass × certified mass fraction | solution mass; fraction | kg active sodium hydroxide | |
| `calc_water_mass` | water measured by volume | water mass = volume × documented density at declared temperature | volume; density; temperature | kg water or wastewater | |
| `calc_direct_fossil_co2` | on-site combustion | Use direct measurement or a disclosed calculation from collected fuel quantity, carbon content, fossil fraction and oxidation basis | stack or fuel records | kg direct fossil CO2 | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and materials | Retain family rule, drawing revision, function, voltage class where relevant, grade, purchased form and surface or insulation specification. | specification; drawing; bill of materials; supplier certificate |
| `dq_time` | foreground records | Use one representative reporting period; justify abnormal batches and periods shorter than 12 months. | calendar; monthly reconciliation; exception log |
| `dq_measurement` | quantities | Use calibrated instruments or reconciled commercial records; retain units, reference conditions, conversions and allocation drivers. | calibration; invoices; meter extracts; workbook |
| `dq_completeness` | inventory | Reconcile accepted output, major inputs and wastes; document exclusions and each not-applicable conditional row. | mass balance; manifests; route checklist |
| `dq_geography_technology` | upstream and foreground data | Match declared material state, geography, energy supply and technology or explain substitutions. | dataset metadata; supplier geography; justification |
| `dq_uncertainty` | rows without ranges | Preserve foreground evidence and do not invent benchmark ranges; retain unresolved two-source range needs for review. | unresolved range-evidence register; review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference flow | Confirm one 1 kg CPC 46220 reference output and all required qualifiers. | `un-cpc-3-0-structure-2025` |
| `validate_atomic_rows` | inventory | Confirm every selected flow is one atomic exchange; reject umbrella material, energy, utility, packaging, waste or emission rows. | |
| `validate_applicability` | conditional exchanges | Require a collected value or documented not-applicable determination tied to the route. | `eu-jrc-stm-bref-2006` |
| `validate_mass_balance` | foreground manufacturing | Check accepted output plus wastes against mass inputs on consistent bases; investigate differences. | |
| `validate_energy_boundary` | electricity and fuels | Keep purchased electricity and on-site fuel separate; report only foreground direct combustion emissions as elementary outputs. | |
| `validate_uuid_semantics` | UUID rows | Reconfirm state-100 identity, names, flow type, classification, property, unit group, state and general comment. | |
| `validate_unresolved` | UUID and range gaps | Keep gaps visible; never substitute proxy UUIDs or invented ranges. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review and publication |
| downstream_use | Cradle-to-gate input for a specified electricity distribution or control apparatus, assembly, process or lifecycle model |
| allowed_use | Declared part or homogeneous family, site and period while qualifiers, route, composition, allocation, upstream links and quality remain representative |
| excluded_use | Complete apparatus; dissimilar families; undisclosed function or voltage change; installation, use or end-of-life claims; unweighted cross-site or cross-route averages |
| required_metadata | PCR id; CPC ref; product definition; revision; function; voltage; materials; net mass; surface or insulation specification; route; site; geography; period; energy; allocation; waste destinations; unresolved items |
| required_quality_disclosure | foreground share; coverage; measurement quality; bill-of-materials completeness; upstream substitutions; allocation; mass balance; not-applicable rows; subcontracting; uncertainty |
| update_trigger | material, drawing, function, voltage, finish, insulation, route, supplier, site, energy, allocation or period change that materially alters inventory; UUID or range resolution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Classification identity and separation of parts in 4622/46220 from complete apparatus in 4621 |
| `schneider-electric-masterpact-rear-connection-pep-2024` | Dataset (`dataset`) | Schneider Electric, *PEP ecopassport SCHN-01170-V01.01-EN: Rear horizontal connection, MasterPact MTZ2 fixed/drawout, 3P, top connection, 2500A-3200A*, September 2024, https://download.se.com/files?p_Doc_Ref=ENVPEP2404003EN&p_File_Name=PEP+ecopassport+SCHN-01170-V01.01-EN.pdf&p_enDocType=Environmental+Disclosure (retrieved 2026-09-04) | Separate connection-part identity, copper and steel constituents, and manufacturing-stage separation |
| `eu-jrc-stm-bref-2006` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, *Surface Treatment of Metals and Plastics BREF*, adopted August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-04) | Conditional electrolytic or chemical treatment boundary, water-based operations and associated activities |
