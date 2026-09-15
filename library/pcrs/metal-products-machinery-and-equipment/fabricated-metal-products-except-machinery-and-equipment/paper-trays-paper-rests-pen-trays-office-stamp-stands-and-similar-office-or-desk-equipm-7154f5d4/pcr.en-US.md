---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.paper-trays-paper-rests-pen-trays-office-stamp-stands-and-similar-office-or-desk-equipm-7154f5d4
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Paper trays, paper rests, pen trays, office-stamp stands and similar office or desk equipment, of base metal, other than office furniture

## 1. Scope and Applicability

This PCR covers non-furniture office or desk articles whose load-bearing body is predominantly base metal, including paper or letter trays, paper rests, pen trays, office-stamp stands, and functionally similar desktop organizers. It applies to formed-sheet, formed-wire or mesh, and mixed base-metal constructions, whether uncoated, powder-coated, liquid-coated, plated, or otherwise surface-finished.

It excludes office furniture, floor-standing filing or storage furniture, paper or paperboard office trays, plastics-only organizers, loose-leaf binder fittings, paper clips, staples, electronic office equipment, and upstream metal production. Declare the article type, dimensions, net mass, principal metal or alloy, stock form, recycled-content claim, forming and joining route, surface finish, packaging, geography, reporting period, and factory-gate state.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.paper-trays-paper-rests-pen-trays-office-stamp-stands-and-similar-office-or-desk-equipm-7154f5d4 |
| classification_refs | CPC 3.0: 42994 |
| covered_products | Base-metal paper or letter trays, paper rests, pen trays, office-stamp stands, and similar non-furniture office or desk articles |
| excluded_products | Office furniture; floor-standing cabinets; paper, paperboard, plastics-only, or electronic articles; binder fittings, paper clips, and staples |
| representative_product | A finished powder-coated formed-sheet base-metal paper tray, ready for sale |
| production_route | Delivered base-metal stock; cutting and forming; route-dependent joining and mechanical finishing; route-dependent cleaning or pretreatment; route-dependent coating and curing; assembly, inspection, and packaging |
| market_state | Finished, dry, inspected product at the factory gate; packaging is separate from net reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished base-metal office or desk article for holding, supporting, or organizing paper, pens, stamps, or similar office items |
| How much | 1 kg net mass of finished product |
| How well | Conforms to the declared article type, dimensions, principal metal or alloy, finish, coating or plating specification, assembly state, and acceptance criteria |
| How long or cycle | One completed manufacturing batch to the factory gate; service life is outside this mass-based reference flow |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product, excluding packaging |
| Reference product flow | Paper trays, paper rests, pen trays, office-stamp stands and similar office or desk equipment, of base metal |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | article type and dimensions; principal metal or alloy and stock form; net mass; recycled-content claim and chain-of-custody basis; forming and joining route; pretreatment; coating, plating, or uncoated state; finish and colour; packaging; geography; reporting period; factory-gate state |

Every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted product after retained coatings and assembly components are fitted; exclude sales and transport packaging. |
| `material_mass_basis` | material, coating, chemical, packaging, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record physical mass crossing the boundary and normalize to 1 kg net product; do not substitute metal content, dry solids, or solvent mass unless explicitly required. |
| `electricity_energy_basis` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered energy; convert kWh using 1 kWh = 3.6 MJ and disclose voltage, grid geography, and meter boundary. |
| `gas_volume_basis` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume and reference temperature, pressure, composition or calorific value, and delivery boundary. |
| `water_mass_basis` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use metered mass or convert volume with documented density for the measured temperature and dissolved-solids state. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Metal stock, components, coatings, treatment chemicals, utilities, and packaging are received at the reporting factory, with upstream production represented by separate datasets |
| starting_condition_role | Factory-gate manufacturing start |
| product_classification_scope | Base-metal non-furniture office or desk articles within section 1 |
| recursive_input_rule | A bought-in article already within this PCR boundary is a product input with its own upstream dataset and is not recursively unfolded in this foreground process |
| upstream_dataset_requirement | Use geographically, technologically, temporally, and product-state representative upstream datasets for every purchased input |
| disclosure | Declare material and stock route, bought-in versus in-house operations, joining, pretreatment, finish, curing energy, scrap destinations, wastewater, air controls, packaging, geography, period, and omissions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include receiving, cutting, punching, bending or wire forming, joining, deburring or grinding, cleaning and pretreatment when used, coating or plating when used, curing or drying, assembly, inspection, packaging, direct wastes, and direct emissions. | `us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020` |
| `boundary_route_disclosure` | conditional operations | Report the actual uncoated, powder-coated, liquid-coated, plated, mechanically finished, aqueous-cleaned, solvent-cleaned, and abrasive-prepared routes; never substitute one route for another. | `us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020` |
| `boundary_upstream` | purchased inputs | Link upstream datasets for metals, electricity, fuels, chemicals, coatings, components, and packaging instead of recreating their supply chains here. |  |
| `boundary_exclusions` | other life-cycle stages | Exclude capital equipment, employee travel, distribution, retail, use, maintenance, and end-of-life unless the study goal includes and reports them separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication_finishing_packaging` | Fabrication, surface finishing, assembly, and packaging | required | All datasets; each conditional exchange below applies only when physically used | Foreground manufacture from delivered stock to packed factory-gate product | 1 kg net accepted finished product |

### Process: Fabrication, surface finishing, assembly, and packaging (`fabrication_finishing_packaging`)

#### Inputs

##### Product flows

###### Low-carbon steel sheet stock (`low_carbon_steel_sheet`)

Record this atomic input only for the low-carbon-steel sheet route.

- Selected flow: Low-carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted low-carbon-steel product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources:

###### Stainless-steel sheet stock (`stainless_steel_sheet`)

Record this atomic input only for the stainless-steel sheet route.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted stainless-steel product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources:

###### Aluminium sheet stock (`aluminium_sheet`)

Record this atomic input only for the aluminium sheet route.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net measured mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted aluminium product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources:

###### Purchased electricity (`electricity`)

Record purchased electrical energy crossing the manufacturing meter boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated by submetering or documented machine-hours
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Process water for aqueous cleaning or pretreatment (`process_water`)

Record water only when an aqueous cleaning or pretreatment route operates.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up and rinse water crossing the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product using aqueous treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide only when it is present in the cleaning formulation.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Dispensed active-substance mass; include only when present in the cleaning formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product using sodium-hydroxide cleaning
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`

###### Powder coating formulation (`powder_coating`)

Record the powder-coating formulation only for the powder route.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Coating issued minus uncontaminated powder returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg powder-coated product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`

###### Solventborne liquid coating formulation (`solventborne_coating`)

Record the complete liquid coating only for the solventborne route.

- Selected flow: Solventborne liquid metal coating
- Flow property / unit: Mass / kg
- Amount rule: Complete formulation issued minus sealed unused formulation returned; do not substitute resin-only mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg solventborne-coated product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020`

###### Natural gas for direct on-site heating (`natural_gas`)

Record gaseous natural gas only when combusted on site for drying or curing.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas for dry-off or curing, with stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product using gas-fired heating
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`

###### Corrugated board boxes (`corrugated_boxes`)

Record the corrugated board boxes shipped with the finished product.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Specification mass times packed units, reconciled with purchase issues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources:

###### Low-density polyethylene packaging film (`ldpe_film`)

Record this packaging film only when it is shipped with the finished product.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Specification mass times packed units, reconciled with purchase issues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg product packed with PE-LD film
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging`
- Sources:

##### Waste flows

No waste input crosses this foreground boundary.

##### Elementary flows

No elementary input crosses this foreground boundary.

#### Outputs

##### Product flows

###### Accepted factory-gate reference product (`reference_product`)

Record the accepted product output before packaging mass is added.

- Selected flow: Paper trays, paper rests, pen trays, office-stamp stands and similar office or desk equipment, of base metal
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net accepted finished product by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Iron and steel forming scrap (`ferrous_forming_scrap`)

Record segregated iron and steel scrap generated by cutting and forming.

- Selected flow: Iron and steel forming scrap `11d74955-1634-4ef7-94e9-b9e90783c510`
- Flow property / unit: Mass / kg
- Amount rule: Weighed offcuts, punchings, wire ends, and rejected formed parts leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg iron or steel product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Aluminium forming scrap (`aluminium_scrap`)

Record segregated aluminium scrap generated by cutting and forming.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed aluminium offcuts, punchings, and rejected formed parts leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg aluminium product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Unrecovered powder coating waste (`powder_coating_waste`)

Record only powder material that cannot be internally recovered or recirculated.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed contaminated or unrecoverable powder after internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg powder-coated product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`

###### Liquid-coating waste paint (`waste_paint`)

Record discarded paint-bearing waste only for a liquid-coating route.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded liquid coating and paint-bearing residue, excluding separately reported solvent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg liquid-coated product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020`

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record wastewater when it leaves aqueous cleaning or pretreatment for treatment or discharge.

- Selected flow: Metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-derived wastewater leaving for treatment or discharge, net of internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product using aqueous treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`fossil_co2`)

Record direct fossil CO2 from in-scope on-site gas combustion, excluding upstream emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from metered gas and documented fuel carbon content or a supplier-specific verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg product using on-site gas combustion
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_co2`
- Sources:

###### Volatile organic compounds from solventborne coating (`voc_emission`)

Record direct VOC from in-scope solventborne coating and related cleaning.

- Selected flow: Volatile organic compounds to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Measurement or solvent mass balance adjusted for retained, recovered, destroyed, and transferred solvent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg solventborne-coated product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_voc_balance`
- Sources: `us-epa-ap42-metal-furniture-coating-1995`, `eu-jrc-sts-bref-2020`

###### Particulate matter from mechanical finishing or coating (`particulate_matter`)

Record particulate matter released after abatement from in-scope particle-generating operations.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Representative measurement or documented captured-versus-uncaptured mass calculation after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg product using particulate-generating operations
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared lines | Prefer submetering, batch records, time-resolved equipment data, and physical subdivision so allocation is avoided. |  |
| `allocation_shared_inputs` | unavoidable shared totals | Allocate by a causal physical driver such as machine-hours, processed metal mass, coated area, oven occupancy, or throughput; disclose any non-physical basis. |  |
| `allocation_scrap` | scrap and coating wastes | Report gross input, product, each waste, internal recirculation, and destination separately; do not credit avoided primary production inside this foreground process unless a wider method requires it. |  |
| `allocation_consistency` | normalization | Apply one documented hierarchy across the period and reconcile allocated site totals before normalization. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging` | `fabrication_finishing_packaging` | Exact metal, chemical, coating, and package inputs | Purchase, issue, return, BOM, and package records | identity; supplier; grade or formulation; lot; issued and returned mass; package unit mass | Calibrated scales and reconciled stores records | kg | Per batch; monthly aggregation | 12 representative months or full shorter campaign | All in-scope lines and outsourced steps | Sum net issues by atomic flow and route; allocate causally; divide by net accepted mass | Calibration, supplier specification, stock reconciliation, batch traceability |
| `cp_utility_records` | `fabrication_finishing_packaging` | Electricity, process water, and natural gas | Meter, invoice, and equipment-hour records | meter id; readings; unit; gas reference conditions; hours; downtime; shared loads | Read calibrated meters and reconcile invoices | MJ, kg, m3 | Batch or shift; monthly aggregation | Same period as production | All in-scope utility users | Subtract excluded loads; allocate causally; normalize | Calibration, invoices, boundary diagram, allocation worksheet |
| `cp_waste_records` | `fabrication_finishing_packaging` | Each named waste | Scale ticket, manifest, tank meter, and recycler receipt | identity; origin; gross and tare; volume and density; date; destination; treatment; recovery | Weigh each transfer or use a calibrated meter | kg | Each transfer; monthly aggregation | Same period as production | Every storage and discharge point | Sum net exported mass by atomic waste and route; normalize | Calibration, manifests, receipts, mass balance |
| `cp_fuel_co2` | `fabrication_finishing_packaging` | Direct fossil CO2 | Gas meter and supplier fuel-quality records | gas volume; temperature; pressure; carbon content or verified factor; oxidation basis | Calculate from collected gas and supplier-specific carbon data | kg CO2 | Monthly | Same period as gas use | All in-scope combustion points | Sum direct fossil CO2; normalize | Calibration, supplier certificate, workbook, completeness check |
| `cp_voc_balance` | `fabrication_finishing_packaging` | Direct VOC | Coating, thinner, recovery, destruction, and waste records | formulation mass; VOC fraction; thinner; retained, recovered, destroyed, and waste solvent | Prefer measurement; otherwise close a facility mass balance | kg VOC | Per formulation and batch; monthly aggregation | Same period as coating | Every application, flash-off, oven, and cleaning point | VOC input minus documented retention, recovery, destruction, and transfer; normalize | SDS or certificate, controls, waste analysis, balance closure |
| `cp_emission_records` | `fabrication_finishing_packaging` | Particulate matter | Stack test, measurement, capture, and operating records | source; operation; flow; concentration; duration; captured dust; control efficiency | Representative measurement or captured-versus-uncaptured calculation | kg | Each test and period; monthly aggregation | Representative of reporting routes | All particulate sources and controls | Sum post-abatement release; normalize | Test report, calibration, log, control inspection |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | variable inventory rows | normalized amount = route-attributable amount / net accepted finished-product mass | atomic-flow amount; net product mass | amount per 1 kg net product |  |
| `calc_material_balance` | metal routes | metal input = retained product metal + exported scrap + work-in-progress change + documented losses; investigate imbalance | issued metal; product composition; scrap; work in progress | route-specific closure |  |
| `calc_voc` | `voc_emission` | VOC input minus retained, recovered, destroyed, and transferred VOC | formulation, solvent, control, and waste records | kg VOC to air per kg product | `us-epa-ap42-metal-furniture-coating-1995` |
| `calc_fossil_co2` | `fossil_co2` | Calculate from metered gas, fuel carbon, molecular conversion, and oxidation basis; exclude upstream electricity emissions | gas and fuel-carbon records | kg fossil CO2 per kg product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and exchanges | Preserve article, alloy, stock, coating chemistry, waste state, direction, type, property, and unit; never merge route alternatives. | Specifications, BOM, UUID audit, and manifests |
| `dq_temporal` | foreground dataset | Use 12 consecutive representative months, or the complete shorter campaign; disclose abnormal downtime and mix shifts. | Dated production, meter, store, and waste records |
| `dq_completeness` | foreground boundary | Reconcile metal, product, scrap, utilities, coatings, chemicals, packaging, wastes, and direct emissions; explain exclusions and estimates. | Balances, boundary diagram, completeness checklist |
| `dq_route` | conditional exchanges | Identify actual material, joining, pretreatment, coating, plating, curing, and abatement routes; exclude non-applicable rows from totals. | Process diagram, work instructions, operating logs |
| `dq_geography_technology` | upstream datasets | Match supplier region, technology, grade, recycled-content basis, grid, formulation, and delivery state; disclose proxies. | Supplier metadata and selection record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference flow | Confirm exactly 1 kg net accepted output, packaging excluded, and all required qualifiers present. | `unsd-cpc-3-0-structure-2025` |
| `validate_atomic_inventory` | inventory | Confirm each row is one exchange with correct direction, type, property, unit, route condition, UUID status, and localized display name. |  |
| `validate_balance` | metals and wastes | Reconcile issued stock, retained product metal, work-in-progress change, exported scrap, and documented loss by metal family. |  |
| `validate_energy_emissions` | utilities and emissions | Reconcile meters; include direct fossil CO2 only for in-scope combustion; reconcile VOC and particulate releases without adding upstream emissions. | `us-epa-ap42-metal-furniture-coating-1995` |
| `validate_sources_ranges` | ranges | Reject an externally inferred range without two independent, boundary-compatible original sources; otherwise require foreground collection and keep the need unresolved. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate manufacturing dataset for one declared base-metal office or desk article and route |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-footprint and life-cycle models requiring route-specific factory-gate manufacture of the declared article |
| excluded_use | Office furniture, paper or plastics-only articles, upstream metal production, use, or end-of-life without added evidence |
| required_metadata | PCR id and version; article; dimensions; net mass; alloy and stock; recycled-content basis; forming and joining; pretreatment; finish; curing energy; packaging; geography; technology; period; allocation; upstream datasets; waste destinations; abatement |
| required_quality_disclosure | Primary-data share; coverage; calibration; balance closure; route completeness; UUID gaps; proxies; allocation; estimates; omissions; unresolved range evidence |
| update_trigger | Material, supplier, recycled content, design, yield, process, finish, cure, fuel, abatement, package, waste route, site, or grid changes; or data older than programme requirements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | dataset | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 42994 identity and boundary |
| `hong-kong-censtatd-hs-2022` | official_guidance | Hong Kong Census and Statistics Department, Hong Kong Imports and Exports Classification List (Harmonized System), 2022 Edition, Volume Two, https://www.censtatd.gov.hk/en/data/stat_report/product/B2XX0012/att/B2XX0012012022XXXXB0100.pdf (retrieved 2026-09-04) | Bilingual terminology check; not quantitative evidence |
| `us-epa-ap42-metal-furniture-coating-1995` | method_factor | U.S. EPA, AP-42 Section 4.2.2.12, Metal Furniture Surface Coating, reformatted January 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2m.pdf (retrieved 2026-09-04) | Analogous cleaning, coating, curing, powder and liquid routes, VOC method, and facility-specific data requirement |
| `eu-jrc-sts-bref-2020` | official_guidance | European Commission JRC, Surface Treatment Using Organic Solvents including Wood and Wood Products Preservation with Chemicals BREF, adopted December 2020, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation (retrieved 2026-09-04) | Applicability of coating, painting, cleaning, and degreasing guidance to other metal goods |
