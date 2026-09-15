---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stoppers-caps-and-lids-including-crown-corks-capsules-for-bottles-threaded-bungs-bung-c-d6fc8692
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Stoppers, caps and lids (including crown corks), capsules for bottles, threaded bungs, bung covers, seals and other packing accessories, of base metal

## 1. Scope and Applicability

This PCR applies to unfilled stoppers, caps, lids, crown corks, bottle capsules, threaded bungs, bung covers, seals, and comparable packing accessories whose load-bearing or closure body is made of base metal. It covers steel or aluminium closure manufacture from purchased flat-rolled metal stock through blanking, press forming, conditional aqueous preparation, coating, printing, liner or sealing-compound application, curing, inspection, and the product at the factory gate.

The PCR excludes complete cans, drums, tanks, bottles and other containers; closures whose closure body is plastic, glass, cork, paperboard, or another non-metal material; filling and closing operations performed by the packer; manufacture of the packaged contents; distribution, use, opening, reuse, and end-of-life after the closure leaves the manufacturing gate. A polymer liner or gasket does not exclude a product when the closure body remains base metal. Purchased pre-coated or pre-printed stock is allowed, but the foreground package must prevent double counting between supplier and on-site operations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stoppers-caps-and-lids-including-crown-corks-capsules-for-bottles-threaded-bungs-bung-c-d6fc8692 |
| classification_refs | CPC 3.0: 42932 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Base-metal crown corks, screw caps and lids, bottle capsules, threaded bungs, bung covers, seals, and other base-metal packing accessories, including products with polymeric liners or gaskets |
| excluded_products | Complete containers; non-metal closure bodies; filling/closing services; packaged contents; post-gate use and end-of-life |
| representative_product | A finished, inspected, unfilled base-metal closure ready to leave the manufacturing site |
| production_route | Purchased steel/tinplate or aluminium sheet/strip → blanking and press forming → conditional cleaning, coating and printing → conditional liner or sealing-compound application and curing → inspection |
| market_state | Dry, finished and unfilled at the factory gate; coating, liner, dimensions, compatibility specification, and unit mass declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide finished base-metal closure accessories that close, cover, seal, or secure a declared container opening |
| How much | 1,000 kg of conforming finished closures at the factory gate |
| How well | Meets the declared dimensional, sealing, opening-torque or pressure-retention, corrosion-resistance, coating/liner compatibility, and food-contact requirements applicable to the product |
| How long or cycle | One manufacturing output at the factory gate; no use-life duration is assigned |
| reference_flow_link | `finished_base_metal_closures_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Stoppers, caps and lids (including crown corks), capsules for bottles, threaded bungs, bung covers, seals and other packing accessories, of base metal `24a22981-bd1e-4c1a-bd64-78df94ef256a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | closure subtype and opening interface; base-metal substrate, grade and thickness; coating/plating state; liner or gasket chemistry and mass; printing state; dimensions and mass per closure; recycled-content claim and accounting method; sealing, torque, pressure, corrosion and compatibility specification; food-contact status; purchased pre-finished stock and on-site finishing split; manufacturing geography, technology and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure dry mass of conforming closures leaving the gate. Exclude pallets, cartons and transport wrapping from the reference product mass and report them separately if they cross the boundary. |
| `piece_to_mass_conversion` | production records stated as pieces | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts with a product- and campaign-specific mean closure mass from a documented sample; retain sample size, weighing method and variability. |
| `material_mass_basis` | metal, coating, ink, liner, chemical, scrap and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received mass and separately disclose solids, moisture, solvent or active concentration when it changes material or emission balances. |
| `electricity_energy_basis` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered energy; when source records use kWh, convert with 1 kWh = 3.6 MJ and disclose voltage, grid mix, losses and delivery boundary. |
| `natural_gas_volume_basis` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State pressure, temperature, wet/dry basis and net calorific value used; do not combine gas volume with other fuels. |
| `mass_balance_check` | closure manufacturing | Mass | kg | Reconcile metal and liner inputs with conforming product, separately measured scrap, retained work-in-progress and other outputs for the declared period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased base-metal sheet, strip, or pre-finished stock enters the closure-manufacturing site; its substrate grade, thickness, coating/printing state and supplier gate are declared |
| starting_condition_role | Foreground manufacturing gate for conversion of purchased semi-finished metal into closures |
| product_classification_scope | Base-metal closure accessories represented by the reviewed semantic boundary; CPC 42932 is classification context, not canonical identity ownership |
| recursive_input_rule | If a purchased input is itself a finished base-metal closure within this category, record it once as a supplied product with an upstream dataset and exclude its already-completed manufacturing steps from the foreground process |
| upstream_dataset_requirement | Every purchased metal, polymer, chemical, coating, ink, electricity, fuel and treatment service must link to a geographically and technologically representative upstream dataset or remain an explicit data gap |
| disclosure | Declare which forming, preparation, coating, printing, lining, curing, inspection and on-site treatment operations occur; identify purchased pre-coated/pre-printed stock and any excluded shared operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate_foreground` | foreground closure manufacture | Include all on-site material and energy exchanges from receipt of purchased metal stock through conforming closure output, including rejects, direct emissions and wastes sent to treatment. | `ep3663427b1-crown-cap`; `eu-jrc-sts-bref-2007`; `us-epa-metal-can-coating-background` |
| `boundary_conditional_finishing` | purchased pre-finished stock | Include on-site cleaning, coating, printing and lining only when performed at the reporting site; otherwise require supplier datasets that include those operations and prevent double counting. | `eu-jrc-sts-bref-2007`; `us-epa-metal-can-coating-background` |
| `boundary_packaging_exclusion` | filling, distribution, use and end-of-life | Exclude filling with packaged contents and all post-factory-gate stages unless the study goal explicitly expands the system boundary; disclose any expansion separately. | `eu-pef-2021-2279` |
| `boundary_no_hidden_cutoff` | foreground completeness | Do not omit a material, energy, waste or elementary exchange solely because its mass is small; document measured zero, not applicable status, or an explicit data gap. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `closure_manufacturing` | Base-metal closure forming and finishing | required | Always; individual cleaning, coating, printing, lining and direct-emission rows apply only when the declared route uses them | Foreground production from purchased metal stock to finished closures | 1,000 kg conforming finished closures |

### Process: Base-metal closure forming and finishing (`closure_manufacturing`)

This aggregated foreground process covers the site route without creating artificial internal intermediate flows. Route-specific exchanges remain separate atomic rows and use explicit inclusion conditions.

#### Inputs

##### Product flows

###### Closure-grade tinplate steel sheet (`tinplate_sheet_input`)

Record this input only for a steel-body closure route. The selected exchange is closure-grade tinplate steel sheet as received, not generic steel, a finished can, or a collection of metals.

- Selected flow: Closure-grade tinplate steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Supplier receipt mass issued to the declared production campaign, corrected for returned unused stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `ep3663427b1-crown-cap`

###### Aluminium sheet exceeding 0.2 mm (`aluminium_sheet_input`)

Record this input only when the declared closure body uses aluminium sheet exceeding 0.2 mm. Do not use this UUID for aluminium foil or composite aluminium/copper stock.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Supplier receipt mass issued to the declared production campaign, corrected for returned unused stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `ep3663427b1-crown-cap`

###### Purchased electricity (`electricity_input`)

Record electricity delivered to presses, conveyors, preparation, coating, printing, liner forming, curing, inspection and directly attributable auxiliaries within the boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to the declared closure production campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `eu-jrc-sts-bref-2007`

###### Gaseous natural gas (`natural_gas_input`)

Record natural gas only when used directly for drying, coating or liner curing, thermal treatment, or emission control associated with the declared campaign.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled gas volume attributable to the declared campaign at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-jrc-sts-bref-2007`

###### Process water for aqueous cleaning (`process_water_input`)

Record process water only when aqueous cleaning, rinsing or surface preparation is performed on site.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up and rinse water crossing into the foreground process, excluding internally recirculated water counted more than once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_chemicals`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide_input`)

Record sodium hydroxide only when it is consumed in an on-site alkaline cleaning bath. Report solution concentration separately from active sodium-hydroxide mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass from purchase, dosing and bath make-up records attributable to the campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_chemicals`
- Sources: `eu-jrc-stm-bref-2006`

###### Metal-forming lubricating oil (`forming_lubricant_input`)

Record the lubricating oil supplied to blanking and press-forming equipment when it crosses into the product process; exclude closed equipment oil that does not become attributable consumption during the period.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Net lubricant make-up issued to the campaign after subtracting recovered reusable oil returned to stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources: `ep3663427b1-crown-cap`

###### Metal-packaging protective lacquer (`protective_lacquer_input`)

Record one declared protective lacquer formulation when it is applied on site. The formulation, solids content, carrier, food-contact status, application method and cured coating side must be stated.

- Selected flow: Metal-packaging protective lacquer
- Flow property / unit: Mass / kg
- Amount rule: Net as-supplied lacquer consumed, from opening and closing stock plus receipts minus recoverable return, with solids and volatile fractions disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_ink_liner_records`
- Sources: `eu-jrc-sts-bref-2007`; `us-epa-metal-can-coating-background`

###### Lithographic metal-decorating printing ink (`metal_decorating_ink_input`)

Record one formulated ink applied on site for each declared print station and colour. Distinct formulations must remain separate foreground exchanges rather than an aggregated ink mixture.

- Selected flow: Lithographic metal-decorating printing ink
- Flow property / unit: Mass / kg
- Amount rule: Net as-supplied ink consumed by the declared print station, with colour/formulation and volatile fraction disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_ink_liner_records`
- Sources: `eu-jrc-sts-bref-2007`

###### Polyethylene resin for in-house liner forming (`polyethylene_liner_resin_input`)

Record polyethylene only when the site forms a polyethylene-based liner from primary resin. Grade, additives and any separately purchased components must be individually disclosed in the foreground package.

- Selected flow: polyethylene `f4dfd1a4-b24e-471e-bd21-04ad7a45ea52`
- Flow property / unit: Mass / kg
- Amount rule: Net resin issued to in-house liner forming for the declared campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_ink_liner_records`
- Sources: `ep3663427b1-crown-cap`

###### E-PVC resin for in-house plastisol compounding (`epvc_resin_input`)

Record E-PVC resin only when the site compounds a PVC plastisol liner internally. Plasticizers, stabilizers and other additives crossing the boundary must be reported as separate concrete foreground exchanges.

- Selected flow: polyvinylchloride resin (E-PVC) `4f19f121-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net E-PVC resin issued to the declared in-house plastisol batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_ink_liner_records`
- Sources: `ep3663427b1-crown-cap`

###### Purchased PVC plastisol sealing compound (`pvc_plastisol_compound_input`)

Record purchased PVC plastisol only when a ready-to-use sealing compound crosses the site boundary; do not also record its upstream resin and additives as on-site inputs.

- Selected flow: PVC plastisol sealing compound
- Flow property / unit: Mass / kg
- Amount rule: Net as-supplied compound consumed by the declared lining operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_ink_liner_records`
- Sources: `ep3663427b1-crown-cap`; `eu-jrc-sts-bref-2007`

##### Waste flows

No waste input is prescribed for the foreground manufacturing process.

##### Elementary flows

No elementary input is prescribed beyond resources represented by purchased product flows. Any direct resource extraction at the site must be recorded as its own elementary flow.

#### Outputs

##### Product flows

###### Conforming finished base-metal closures (`finished_base_metal_closures_output`)

This is the quantitative reference output after inspection. The exact Tiangong Chinese baseName is used in the aligned Chinese rendering.

- Selected flow: Stoppers, caps and lids (including crown corks), capsules for bottles, threaded bungs, bung covers, seals and other packing accessories, of base metal `24a22981-bd1e-4c1a-bd64-78df94ef256a`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg of conforming finished closures at the factory gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Steel stamping scrap (`steel_scrap_output`)

Record steel skeleton, punched web, trim and rejected steel closure bodies as one ferrous scrap stream only when the steel route applies; do not mix aluminium or contaminated hazardous wastes into it.

- Selected flow: steel scrap `409ba088-e428-4cdf-a688-b5b4f074068d`
- Flow property / unit: Mass / kg
- Amount rule: Weighed ferrous production scrap leaving the foreground process, net of verified internal same-quality reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste_mass`
- Sources: `ep3663427b1-crown-cap`

###### Aluminium stamping scrap (`aluminium_scrap_output`)

Record aluminium skeleton, punched web, trim and rejected aluminium closure bodies as a separate scrap stream only when the aluminium route applies.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed aluminium production scrap leaving the foreground process, net of verified internal same-quality reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste_mass`
- Sources: `ep3663427b1-crown-cap`

###### Wastewater from aqueous cleaning (`cleaning_wastewater_output`)

Record cleaning and rinse wastewater when it leaves the foreground process for on-site or off-site treatment. State the aqueous-cleaning origin, contaminants, measurement point and treatment destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Measured wastewater mass at the transfer point, excluding recirculated water counted earlier in the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste_mass`
- Sources: `eu-jrc-stm-bref-2006`

###### Waste oil from forming (`waste_oil_output`)

Record spent oil removed from blanking or forming equipment when it leaves for recovery or disposal. Do not combine coolant, solvent or aqueous bath waste with this row.

- Selected flow: Waste oil `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent oil transferred from the declared process during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_waste_mass`
- Sources: `ep3663427b1-crown-cap`

##### Elementary flows

###### Fossil carbon dioxide from direct natural-gas combustion (`fossil_co2_to_air`)

Record only direct fossil CO2 from natural gas burned inside the foreground boundary. Upstream grid or fuel-supply emissions remain in background datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from metered natural gas using documented supplier composition, reference conditions, oxidation and carbon factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sts-bref-2007`

###### Xylene (mixed isomers) to unspecified outdoor air (`xylene_mixed_isomers_to_air`)

Record this single chemical-mixture exchange only when the declared coating, ink or cleaning formulation contains commercial mixed-isomer xylene and site records quantify that mixture released after capture and control. Do not substitute an individual p-xylene flow for a mixed-isomer result.

- Selected flow: Xylene (mixed isomers) to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Stack and fugitive mixed-isomer xylene release measured directly or calculated by a documented solvent mass balance after capture, destruction and recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming finished closures
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `us-epa-metal-can-coating-background`; `eu-jrc-sts-bref-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared lines and utilities | First subdivide meters, material issues, operating hours or equipment records so only exchanges attributable to the declared closures are included. | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | unavoidable multifunctionality | If subdivision or system expansion is not feasible, use a demonstrated relevant physical relationship; use another relationship only when physical allocation is not defensible, and disclose the rejected options, formula, factors and sensitivity. | `eu-pef-2021-2279` |
| `allocation_scrap_no_automatic_credit` | steel and aluminium scrap | Report scrap mass, composition, treatment destination and any revenue separately. Do not assign an avoided-primary-metal credit inside this foreground dataset unless the governing study method explicitly requires it. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `closure_manufacturing` | metal stock and forming lubricant inputs | purchase receipts, stock issues and returns | material identity; supplier; batch; substrate/grade; thickness; coating state; opening stock; receipts; issued mass; returned mass; closing stock | Reconcile ERP/warehouse records to production campaign and physical inventory | kg | Per receipt and campaign; aggregate monthly | At least 12 consecutive representative months or full campaign for seasonal/custom production | All facilities and lines represented by the dataset | Net consumed mass = opening stock + receipts − closing stock − verified return; allocate shared consumption under section 7 | Supplier specification, weighbridge/scale calibration, stock reconciliation and exception log |
| `cp_energy_meters` | `closure_manufacturing` | purchased electricity | interval or submeter readings | meter id; start/end reading; multiplier; kWh; line state; downtime; production mass; grid/voltage | Read calibrated meters and reconcile with invoice totals | kWh and MJ | At least monthly; campaign submetering preferred | Same representative period as product output | All included presses and finishing auxiliaries | Subtract documented non-production loads; convert kWh to MJ; normalize to conforming output | Meter calibration, invoice reconciliation and allocation worksheet |
| `cp_fuel_records` | `closure_manufacturing` | direct natural gas | meter and invoice records | meter id; gas volume; pressure; temperature; wet/dry basis; net calorific value; production mass | Reconcile site meter to supplier invoice and attributable equipment runtime | m3 and MJ | At least monthly | Same representative period as product output | All included direct-fired equipment and controls | Correct to stated reference conditions and normalize to conforming output | Meter calibration, invoice and supplier gas specification |
| `cp_water_and_chemicals` | `closure_manufacturing` | process water and sodium hydroxide | water meter, dosing and bath records | water meter readings; bath volume; make-up volume; sodium-hydroxide product mass; concentration; purge; recirculation; production mass | Meter make-up/rinse water and reconcile chemical dosing to inventory | kg | Per bath make-up and at least monthly | Same representative period as product output | All included cleaning and rinse stages | Count boundary-crossing make-up once; calculate active NaOH mass from product mass and concentration | Meter calibration, concentration test, dosing record and bath log |
| `cp_coating_ink_liner_records` | `closure_manufacturing` | coating, ink and liner materials | batch sheet and stock balance | formulation id; colour; solids; volatile fraction; opening/closing stock; receipts; returns; applied mass; recovered mass; product mass | Reconcile batch and warehouse records for each concrete formulation | kg | Per batch; aggregate by declared product | Same representative period as product output | Each included coating, printing and lining station | Calculate net as-supplied consumption separately for each formulation; prevent double counting of purchased compound and its upstream ingredients | Supplier SDS/specification, batch record, scale calibration and stock reconciliation |
| `cp_product_and_waste_mass` | `closure_manufacturing` | conforming product, metal scrap, wastewater and waste oil | production, quality, weighbridge and waste-transfer records | gross/net product mass; piece count; sample mass; rejects; scrap composition; wastewater mass; waste-oil mass; destination; transfer date | Weigh outputs at defined transfer points and reconcile with production records | kg | Per batch or transfer; aggregate monthly | Same representative period as inputs | All included lines and output destinations | Normalize each output to 1,000 kg conforming product; retain separate steel, aluminium, wastewater and oil streams | Scale calibration, quality release, waste manifest and mass-balance reconciliation |
| `cp_direct_air_emissions` | `closure_manufacturing` | direct fossil CO2 and mixed-isomer xylene | stack test, continuous monitor, solvent balance and fuel calculation | pollutant; emission point; measured concentration/flow; test period; formulation xylene content; capture/destruction/recovery; gas composition; oxidation factor; production mass | Use direct measurement where representative; otherwise documented fuel or solvent mass balance | kg | Per compliance test and monthly balance; update after material/control change | Representative operating period aligned with product output | All stacks and fugitive sources attributable to included operations | Sum controlled stack and fugitive releases without upstream electricity/fuel emissions; normalize to product mass | Laboratory accreditation, test method, control-efficiency evidence, supplier composition and calculation audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | every non-reference inventory row | normalized amount = period exchange × 1,000 / period conforming closure mass | period exchange; conforming product mass | exchange per 1,000 kg reference product | `eu-pef-2021-2279` |
| `calc_piece_mass` | count-based product records | product mass = accepted piece count × campaign-specific sampled mean mass per closure | accepted count; sampled mean mass | kg conforming product | `customs-union-tr-cu-005-2011` |
| `calc_active_naoh` | sodium-hydroxide input | active NaOH mass = as-supplied solution mass × measured or supplier-certified NaOH mass fraction | solution mass; NaOH mass fraction | kg active NaOH |  |
| `calc_fossil_co2` | fossil CO2 from natural gas | Use direct measured fossil CO2; otherwise calculate from metered gas, supplier carbon content or validated emission factor, oxidation fraction and molecular-mass conversion, documenting every factor and reference condition | gas volume; reference conditions; composition/factor; oxidation fraction | kg fossil CO2 |  |
| `calc_xylene_mixed_isomers` | mixed-isomer xylene to air | mixed-isomer xylene input in coating/ink/cleaner − xylene retained in product − recovered xylene − xylene transferred in wastes − xylene destroyed by control = mixed-isomer xylene released to air; include separately measured fugitives consistently | formulation records; stock balance; product/waste analyses; capture and destruction evidence | kg mixed-isomer xylene to air | `us-epa-metal-can-coating-background`; `eu-jrc-sts-bref-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare closure subtype, substrate, thickness, coating/plating, liner/gasket, print state, dimensions, unit mass, compatibility application and conformity specification. | Product drawing, bill of materials, supplier specifications and quality-release record |
| `dq_temporal_representativeness` | all foreground data | Use at least 12 consecutive representative months unless a full campaign is more representative; explain shutdowns, trials, abnormal production and substitutions. | Period coverage table and exception log |
| `dq_technology_geography` | foreground and upstream links | Describe forming, coating, printing, lining, curing and control technologies and the manufacturing geography; justify all upstream dataset geography/technology matches. | Process map, equipment list and dataset-link register |
| `dq_completeness_mass_balance` | material inventory | Reconcile metal and liner material inputs to conforming product, scrap, retained work-in-progress and other outputs; investigate and disclose unexplained imbalance. | Signed mass-balance worksheet and stock reconciliation |
| `dq_route_applicability` | conditional rows | Mark each conditional flow applicable or not applicable with product and route evidence; zero is not a substitute for a missing applicability decision. | Bill of materials, routing, batch sheet and site interview |
| `dq_uncertainty_and_gaps` | calculated and allocated values | Disclose measurement uncertainty, allocation sensitivity, missing UUIDs, missing external ranges and any proxy upstream dataset. | Uncertainty register, allocation worksheet and data-gap log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | reference flow | Confirm exactly 1,000 kg of conforming finished base-metal closures and verify that dispatch packaging is excluded from that mass. | `eu-pef-2021-2279` |
| `validate_identity_and_qualifiers` | product identity | Reject a data package missing any required reference-flow qualifier or mixing materially different substrate, liner or finishing routes without separate quantities. | `un-cpc-3-0-2025`; `customs-union-tr-cu-005-2011` |
| `validate_atomic_inventory` | inventory rows | Confirm that every reported exchange is one concrete product, waste or elementary flow and that steel/aluminium scrap, electricity/gas, and distinct liner materials remain separate. |  |
| `validate_route_and_double_counting` | conditional operations | Confirm that purchased pre-coated or pre-printed stock does not duplicate on-site coating or printing burdens and that purchased PVC compound is not double-counted with its upstream resin ingredients. | `eu-jrc-sts-bref-2007`; `us-epa-metal-can-coating-background` |
| `validate_mass_and_energy` | foreground balances | Reperform piece-to-mass, material-balance, kWh-to-MJ, gas-condition and normalization calculations from retained raw records. |  |
| `validate_emission_scope` | direct emissions | Confirm that fossil CO2 includes only on-site fossil combustion and that mixed-isomer xylene is reported only when formulation chemistry and environmental compartment match; do not include upstream electricity or fuel-supply emissions. | `us-epa-metal-can-coating-background` |
| `validate_product_performance_metadata` | declared conformity | Confirm that applicable sealing, torque, pressure, corrosion, coating/liner resistance and food-contact test requirements are identified; this PCR does not invent universal pass limits. | `customs-union-tr-cu-005-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-manufacturing dataset for one declared base-metal closure product or homogeneous product family |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and unresolved data gaps |
| allowed_use | Cradle-to-gate product studies, packaging-component inventories, supplier comparisons and downstream models whose closure specification and system boundary match |
| excluded_use | Complete container, filling or packaged-product claims; non-metal closure bodies; post-gate use/end-of-life claims; comparative assertions across unmatched closure functions, substrates, liners or performance specifications |
| required_metadata | PCR id/version; product and required qualifiers; site geography; technology; reference period; ownership; foreground/background dataset links; allocation; cut-offs; data gaps; uncertainty; review status |
| required_quality_disclosure | Meter and scale coverage; mass-balance result; route applicability; supplier-data quality; allocation sensitivity; control efficiency; unresolved UUID and range-evidence needs; deviations from this PCR |
| update_trigger | Material, coating, ink or liner formulation change; substrate/thickness change; new forming/curing/control technology; facility or grid change; allocation change; performance specification change; data older than the intended representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 42932 classification identity |
| `un-cpc-1-1-zh` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Chinese classification terminology cross-check; the authored title uses professional current terminology while Tiangong UUID displays retain exact Tiangong Chinese baseNames |
| `ep3663427b1-crown-cap` | `literature` | EP3663427B1, Steel sheet for crown cap, crown cap, and method for producing steel sheet for crown cap, https://patents.google.com/patent/EP3663427B1/en (retrieved 2026-09-05) | Crown-cap steel substrate, blanking, press forming, liner attachment and liner-resin examples |
| `eu-jrc-sts-bref-2007` | `official_guidance` | European Commission Joint Research Centre, Reference Document on Best Available Techniques on Surface Treatment Using Organic Solvents, August 2007, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-04/STS_Adopted082007.pdf (retrieved 2026-09-05) | Metal-packaging coating, printing and compound-lining process decomposition; energy, solvent and direct-emission collection scope |
| `eu-jrc-stm-bref-2006` | `official_guidance` | European Commission Joint Research Centre, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-05) | Conditional aqueous surface preparation, water and chemical inputs, wastewater and associated activities |
| `us-epa-metal-can-coating-background` | `official_guidance` | United States Environmental Protection Agency, National Emission Standards for Hazardous Air Pollutants for the Surface Coating of Metal Cans: Background Information for Proposed Standards, EPA-453/R-02-009, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1008FRH.TXT (retrieved 2026-09-05) | Applicability of can-end coating methods to metal crowns and closures; plant route variability; coating-related organic HAP/VOC scope |
| `customs-union-tr-cu-005-2011` | `standard` | Customs Union Technical Regulation TR CU 005/2011, On Safety of Packaging, official English translation hosted by the European Commission, https://food.ec.europa.eu/document/download/8a0639e9-5d76-46c6-a3eb-6a8f406081e8_en?filename=ia_eu-ru_sps-req_decision-769_16082011_en.pdf (retrieved 2026-09-05) | Closure performance, sealing, torque, pressure, corrosion, coating/liner resistance and food-contact qualifier categories; not empirical LCI ranges |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-05) | Functional/reference-flow framing, system boundary, foreground data quality and multifunctionality hierarchy |
