---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-insulators-except-of-glass-or-ceramics-insulating-fittings-for-electrical-ma-98fdb176
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Electrical insulators, except of glass or ceramics; insulating fittings for electrical machines or equipment, except of ceramics or plastics; electrical conduit tubing and joints therefor, of base metal lined with insulating material

## 1. Scope and Applicability

This PCR applies to cradle-to-gate foreground data packages for three explicitly declared product families: electrical insulators made from materials other than glass or ceramics; insulating fittings for electrical machines or equipment made from materials other than ceramics or plastics; and electrical conduit tubing or conduit joints made from base metal and lined with electrically insulating material. The data producer shall select one product family and describe the finished product, material system, production route, and applicable performance specification.

The PCR covers receipt and preparation of materials, formation or application of the insulating body or liner, foreground fabrication and surface treatment of metal components when performed at the reporting site, assembly, curing, testing, marking, and market-ready packaging. It excludes glass insulators, ceramic insulators and ceramic insulating fittings, plastic insulating fittings, unlined metal conduit, conduit wholly made of insulating material, insulated wire and cable, installation, use, maintenance, and end-of-life. Upstream production of purchased materials and energy is represented by linked upstream datasets rather than recreated inside the foreground process.

The product families share an electrical-isolation purpose but are not interchangeable in service. A mass reference flow supports manufacturing inventory accounting; comparative claims additionally require the same product family, electrical rating, mechanical duty, dimensions, service environment, applicable standard, and declared service life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-insulators-except-of-glass-or-ceramics-insulating-fittings-for-electrical-ma-98fdb176 |
| classification_refs | CPC 3.0: 46940 |
| covered_products | Non-glass/non-ceramic electrical insulators; non-ceramic/non-plastic insulating fittings for electrical machines or equipment; base-metal electrical conduit tubing and joints with an electrical insulating liner |
| excluded_products | Glass or ceramic electrical insulators; ceramic or plastic insulating fittings; unlined metal conduit; conduit wholly of insulating material; insulated conductors and cable; installation products outside the declared factory-gate output |
| representative_product | A market-ready composite electrical insulator with a fibre-reinforced polymer core, polymeric insulating housing, and permanently attached metal end fittings; the conduit and insulating-fitting families remain covered conditional routes |
| production_route | Material preparation; insulating-body moulding or conduit-liner application and cure; conditional metal-component forming and surface treatment; assembly, testing, marking, and packaging |
| market_state | Finished, tested, marked, and packaged factory-gate product meeting the declared product specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a finished product that provides the declared electrical insulation, conductor support, equipment insulation, or insulated cable-management function |
| How much | 1 kg of market-ready product at the factory gate, including product-integrated components but excluding separable transport packaging |
| How well | Conforms to the declared product family, dimensions, electrical rating, mechanical duty, insulating-material system, liner construction where applicable, and named acceptance specification |
| How long or cycle | One factory-gate delivery; a comparative service study shall separately declare design life and ensure equivalent service duration |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished in-scope electrical insulator, insulating fitting, or lined base-metal electrical conduit |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family; insulating material and formulation; metal material and grade; product geometry and net mass; rated voltage and insulation level; mechanical rating or conduit resistance class; liner material and thickness for conduit; applicable acceptance standard; factory-gate geography; production technology; reporting period |

When constructing a foreground data package, every `Required qualifiers` item shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. The reference-product UUID remains unresolved; the exact product name and all qualifiers therefore form part of the foreground identity and shall not be replaced by a proxy UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net saleable product mass after final testing and before separable packaging; normalize all process totals to 1 kg of accepted output. |
| `separable_packaging_mass` | Corrugated boxes and wooden pallets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report packaging separately from product mass and allocate reusable pallet mass by documented trips or another disclosed reuse rule. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered energy before normalization; if the source meter records kWh, convert using 1 kWh = 3.6 MJ and disclose the conversion. |
| `gas_reference_conditions` | Gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record pressure and temperature reference conditions; do not combine volumes measured under different reference conditions without conversion. |
| `wet_dry_mass_consistency` | Chemicals, wastewater, coatings, and compound inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether mass is as supplied, dry solids, or active substance; use measured concentration and density for conversions and retain the laboratory or supplier evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased insulating materials, metal stock or tube, chemicals, packaging, energy, and water at the reporting-site gate |
| starting_condition_role | Upstream materials and energy enter as product flows with supplier-specific or representative upstream datasets; foreground transformation starts at receipt and preparation |
| product_classification_scope | One declared in-scope product family under the semantic boundary stated in Section 1; CPC 46940 is mapping context and does not replace the product description |
| recursive_input_rule | A purchased in-scope insulator, fitting, or lined conduit incorporated into the output is recorded as one product input with its own upstream dataset and is not recursively decomposed inside this foreground package |
| upstream_dataset_requirement | Each purchased material, component, fuel, electricity supply, water supply, and waste-treatment service shall link to a geographically and technologically representative upstream dataset or disclose the gap |
| disclosure | Declare product family, site geography, reporting period, technology, purchased-versus-foreground component boundary, surface-treatment route, insulating material, liner construction, abatement, packaging, and excluded downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | Foreground product system | Include material receipt through formation, cure, conditional metal fabrication and treatment, assembly, routine testing, marking, and packaging to the factory gate; exclude installation, use, maintenance, and end-of-life. | `line-power-polymer-insulator-manufacturing`; `elot-ts-1501-04-20-01-01-2023` |
| `boundary_route_declaration` | Product-family routes | Activate only the atomic rows that physically occur for the declared product family and route; record excluded conditional rows as not applicable rather than substituting another material. | `un-cpc-3-0-2025`; `iec-61109-2025`; `elot-ts-1501-04-20-01-01-2023` |
| `boundary_upstream_linking` | Purchased inputs and waste treatment | Represent upstream production and downstream waste treatment with linked datasets; do not include their internal emissions again as foreground releases. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `insulating_body_and_liner_forming` | Insulating body formation or metal-conduit liner application | required | Apply product-family-specific rows: composite body rows for polymer/composite insulators, and pipe/varnish rows for lined metal conduit; other rows are not applicable | Foreground insulation formation, bonding, moulding, cure, or liner application | Per 1 kg accepted factory-gate product |
| `metal_component_forming` | Metal component forming and surface treatment | conditional | Include when metal end fittings, metal tube or joints are cut, machined, formed, cleaned, or zinc-coated at the reporting site | Foreground metal fabrication and treatment | Per 1 kg accepted factory-gate product |
| `assembly_testing_packaging` | Assembly, routine testing, marking, and packaging | required | Always include; packaging rows apply only to components actually supplied with the product | Foreground completion and accepted output | 1 kg accepted factory-gate product |

### Process: Insulating body formation or metal-conduit liner application (`insulating_body_and_liner_forming`)

#### Inputs

##### Product flows

###### Purchased glass-fibre-reinforced polymer core material (`gfrp_core_material`)

Record purchased fibre-reinforced polymer core material consumed in a composite insulator. Apply only when the declared product contains this core system.

- Selected flow: glass fibre reinforced polymer `dab98d11-c76c-4d40-bac9-a3d082f1fb36`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass less documented reusable offcuts returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Silicone rubber compound for moulding (`silicone_rubber_compound`)

Record the specific moulding-grade silicone rubber compound consumed for the housing or sheds. Do not substitute tyre compound, caulk, or an individual filler.

- Selected flow: Silicone rubber compound for electrical-insulator moulding
- Flow property / unit: Mass / kg
- Amount rule: Measured compound issued to moulding, corrected for returned uncured compound
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Steel pipe substrate for lined conduit (`steel_pipe_substrate`)

Record purchased welded circular steel pipe consumed when manufacturing the lined metal-conduit product family.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: Measured pipe mass issued to the lined-conduit route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Electrical insulating varnish for conduit liner (`electrical_insulating_varnish`)

Record electrical insulating varnish retained as the internal liner of base-metal conduit or joints. Corrosion-only varnish is outside this row.

- Selected flow: Electrical insulating varnish
- Flow property / unit: Mass / kg
- Amount rule: As-supplied varnish mass consumed, with solids content separately recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_material`

###### Silane coupling agent (`silane_coupling_agent`)

Record silane coupling agent consumed for bonding the polymer housing to the core or another declared insulating interface.

- Selected flow: Silane coupling agent `69deb108-938a-4e85-8f37-3253e8e6e1ee`
- Flow property / unit: Mass / kg
- Amount rule: Measured as-supplied agent consumed, including documented preparation losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_material`

###### Forming and curing electricity (`forming_electricity`)

Record purchased electricity metered or allocated to grinding, mixing, moulding, liner application, ventilation, and cure equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`

###### Natural gas for thermal cure (`curing_natural_gas`)

Record gaseous natural gas combusted on site for ovens, mould heating, or liner cure. Apply only when this fuel is physically used.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas at declared reference conditions allocated to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cured silicone rubber trimming scrap (`cured_silicone_rubber_scrap`)

Record cured silicone-rubber flash, rejected sheds, and trimming scrap leaving the process; do not combine it with metal scrap or uncured compound returned to production.

- Selected flow: Cured silicone rubber scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed cured silicone-rubber scrap sent to its documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`nmvoc_to_air`)

Record direct NMVOC released from varnish, coupling-agent, coating, or cure operations after abatement. Apply only to measured or mass-balanced direct foreground releases.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack/fugitive monitoring result or documented solvent mass balance after capture and destruction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

###### Fossil carbon dioxide to air (`fossil_co2_to_air`)

Record direct fossil carbon dioxide from on-site natural-gas combustion only; upstream fuel and purchased-electricity emissions remain in upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site-monitored direct fossil CO2 assigned to thermal cure, or another documented facility combustion record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

### Process: Metal component forming and surface treatment (`metal_component_forming`)

#### Inputs

##### Product flows

###### Carbon-steel stock for end fittings or joints (`carbon_steel_fitting_stock`)

Record carbon-steel bar or rod consumed for foreground-formed end fittings, couplings, or conduit joints.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass / kg
- Amount rule: Measured stock issued to forming and machining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`

###### Zinc metal for galvanizing (`zinc_metal`)

Record special-high-grade zinc metal added to an on-site galvanizing bath and allocated to the declared product. Apply only when zinc coating occurs in the foreground.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass / kg
- Amount rule: Bath-addition mass allocated by measured coated surface or product mass using a documented rule
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_inputs`

###### Sodium hydroxide cleaner (`sodium_hydroxide_cleaner`)

Record sodium hydroxide product consumed in alkaline cleaning or surface preparation, with solution concentration declared.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: As-supplied sodium hydroxide product mass consumed, with active concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_inputs`

###### Process water for cleaning and rinsing (`process_water`)

Record process water supplied to metal cleaning and rinsing; cooling water in a closed loop is not included unless it crosses the boundary as make-up water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded water entering the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_inputs`

###### Industrial oxygen for thermal cutting (`industrial_oxygen`)

Record industrial oxygen used in on-site oxy-fuel cutting of metal stock. Apply only when that cutting technology is used.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered cylinder or bulk-supply volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_inputs`

###### Metalworking and treatment electricity (`metalworking_electricity`)

Record purchased electricity used by cutting, machining, forming, extraction, cleaning, and surface-treatment equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Record segregated steel offcuts, swarf, and rejected steel components leaving the foreground process for recycling or treatment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap dispatched, net of material returned directly to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater leaving metal cleaning or rinsing after any on-site pretreatment; disclose composition and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass or volume converted with measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

###### Fine particles to air (`fine_particles_to_air`)

Record direct particles in the PM0.2-PM2.5 size fraction released to unspecified air after capture from grinding or metalworking. Do not use this row for collected solid dust sent as waste.

- Selected flow: Particles (PM0.2 - PM2.5) `4d9a8790-3ddd-11dd-936e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured direct release after abatement for the exact size fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

### Process: Assembly, routine testing, marking, and packaging (`assembly_testing_packaging`)

#### Inputs

##### Product flows

###### Assembly and testing electricity (`testing_packaging_electricity`)

Record purchased electricity used for assembly, crimping, routine electrical/mechanical tests, marking, and packaging equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`

###### Corrugated board boxes (`corrugated_board_boxes`)

Record corrugated board boxes delivered with the saleable product. Apply only when this packaging component is used.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Bill-of-material or weighed box mass assigned to shipped accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`

###### Wooden pallets (`wooden_pallets`)

Record wooden pallets used for shipment, with one-way or reusable status and the allocation over uses declared.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Pallet mass assigned to shipments using documented expected or observed reuse count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference product (`reference_product`)

Record accepted, tested, market-ready in-scope product before separable transport packaging. The unresolved Tiangong UUID shall remain blank until an exact mass-based state-100 identity is confirmed.

- Selected flow: Finished in-scope electrical insulator, insulating fitting, or lined base-metal electrical conduit
- Flow property / unit: Mass / kg
- Amount rule: 1 kg accepted factory-gate product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared processes and product families | First subdivide metered processes, production lines, batches, or equipment time so that the declared product receives directly measured material, energy, waste, and emission records wherever practicable. |  |
| `allocation_physical_relation` | Unavoidable shared inputs and outputs | When subdivision is not practicable, allocate by a documented physical relationship that reflects causation, such as machine time, coated surface area, bath loading, test duration, or accepted product mass; do not default to revenue solely because products share a line. |  |
| `allocation_recycling_consistency` | Metal scrap and recovered material | Report scrap mass and destination separately; apply one disclosed recycling approach consistently between upstream material datasets and waste treatment so avoided burdens or recycled content are not double counted. | `mass-balance-identity` |
| `allocation_packaging_reuse` | Reusable wooden pallets | Divide pallet production burden by the documented expected or observed number of uses and disclose losses, repairs, and whether return transport is inside the study scope. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `insulating_body_and_liner_forming`; `metal_component_forming` | Core, rubber, pipe, and steel material inputs | Weigh ticket, inventory issue, supplier record | material identity; batch; issued mass; returned mass; scrap transfer; product family | Calibrated scale or reconciled inventory ledger | kg | Each batch or issue | Representative continuous 12-month period or declared campaign | All reporting-site lines producing the declared product | Sum net consumed mass and divide by accepted output mass; do not subtract waste leaving the system | Scale calibration and batch-to-ledger reconciliation |
| `cp_coating_material` | `insulating_body_and_liner_forming` | Varnish and coupling-agent inputs | Batch preparation and consumption record | product identity; as-supplied mass; solids or active concentration; returned mass; batch | Calibrated scale with formulation record | kg | Each prepared batch | Same period as product output | All applicable coating or bonding stations | Sum net as-supplied consumption and normalize to accepted output mass | Supplier specification, concentration evidence, and scale check |
| `cp_energy_metering` | all foreground processes | Electricity and natural gas | Utility submeter, invoice, or equipment log | meter start/end; energy or volume; reference conditions; equipment hours; product output | Prefer process submeter; otherwise documented engineering allocation | MJ or m3 | Continuous or each billing interval | At least 12 consecutive months unless campaign production is justified | Reporting-site meters and explicitly listed shared services | Subtract documented non-production use, allocate shared use by causal driver, and normalize to accepted output | Meter calibration, invoice reconciliation, and allocation worksheet |
| `cp_surface_treatment_inputs` | `metal_component_forming` | Zinc, sodium hydroxide, water, and oxygen | Bath log, stock issue, water meter, gas-supply record | product identity; amount; concentration; bath addition; meter volume; pressure; temperature; treated output | Calibrated scale/meter and reconciled stock records | kg or m3 | Each batch or shift | Same period as product output | All applicable metal-treatment operations | Sum route-specific consumption and normalize to accepted output mass | Calibration, bath analysis, supplier certificate, and stock reconciliation |
| `cp_waste_mass` | applicable foreground process | Cured rubber scrap, steel scrap, and cleaning wastewater | Waste ticket, container scale, wastewater meter | waste identity; mass or volume; density; contamination; destination; treatment route; date | Weigh ticket or calibrated meter; density measured when converting volume | kg | Each dispatch or discharge interval | Same period as product output | All reporting-site waste collection points for the declared processes | Sum each waste separately; subtract only documented internal return to the same process; normalize to accepted output | Waste contractor receipt, meter/scale calibration, and composition analysis where relevant |
| `cp_direct_emissions` | applicable foreground process | NMVOC, fossil CO2, and PM0.2-PM2.5 direct releases | Stack/fugitive monitoring, facility emissions record, or documented mass balance | pollutant; compartment; size fraction; concentration; gas flow; operating time; capture efficiency; destruction efficiency; assigned process | Approved site monitoring method or auditable facility record | kg | Monitoring campaign plus production-correlated operating records | Representative reporting period and operating states | All emission points and fugitive sources attributable to declared processes | Calculate released mass after abatement and allocate by causal operating driver; exclude upstream-dataset emissions | Laboratory report, instrument calibration, detection limits, and abatement logs |
| `cp_packaging_mass` | `assembly_testing_packaging` | Corrugated boxes and wooden pallets | Packaging bill of material and shipment record | packaging identity; unit mass; units used; return/reuse count; damaged units; shipped product mass | Calibrated weighing plus shipment reconciliation | kg | Each packaging specification and shipment batch | Same period as product output | All packaging supplied with the declared factory-gate product | Assign one-way packaging directly; divide reusable pallet mass by documented uses; normalize to accepted output | Packaging specification, scale check, and return records |
| `cp_output_mass` | `assembly_testing_packaging` | Accepted reference product | Final inspection and dispatch record | product family; product code; unit mass; accepted units; rejected units; test status; date | Calibrated final scale linked to acceptance record | kg | Each accepted batch | Same period as all inputs and outputs | All declared production lines | Sum only accepted product before separable packaging and use as denominator | Scale calibration, acceptance-test record, and dispatch reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | Every inventory row | normalized amount = period flow amount / accepted product mass for the same period | Period flow record; accepted product mass | Flow amount per 1 kg reference product | `mass-balance-identity` |
| `reconcile_material_balance` | Each production route | input material mass = accepted product mass + separately reported waste mass + measured direct material emissions + inventory change; investigate the residual rather than forcing it to zero | Net material inputs; accepted output; wastes; direct releases; stock change | Route material-balance residual and explanation | `mass-balance-identity` |
| `convert_metered_electricity` | Electricity rows | MJ = metered kWh × 3.6 | Metered kWh | Purchased electricity in MJ | `mass-balance-identity` |
| `convert_liquid_volume_to_mass` | Wastewater or liquid input recorded by volume | mass = measured volume × density at stated temperature; do not assume water density for concentrated solutions | Volume; measured density; temperature | Liquid mass in kg | `mass-balance-identity` |
| `allocate_reusable_pallet` | Wooden pallet input | assigned pallet mass = pallet mass × pallets used / documented expected or observed uses, adjusted for pallet loss according to the disclosed reuse model | Pallet mass; units shipped; reuse count; loss rule | Pallet mass per 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Product family, material system, ratings, geometry, standard, and finished state shall match the declared semantic boundary and be traceable to accepted output records. | Product specification, bill of material, drawings, and acceptance record |
| `dq_temporal_alignment` | All foreground rows | Inputs, outputs, wastes, emissions, and accepted product mass shall cover the same representative period; exceptions and shutdown/start-up treatment shall be disclosed. | Meter dates, batch dates, waste tickets, and production ledger |
| `dq_completeness` | Process map and conditional rows | Reconcile all measured foreground input mass and metered foreground energy to the applicable process records, and identify and explain every excluded or unassigned flow individually; do not apply an undocumented environmental significance cut-off. | Material and energy reconciliation worksheets |
| `dq_measurement` | Meters, scales, and laboratory results | Record instrument identity, calibration status, detection limit where relevant, reference conditions for gases, and wet/dry or active-content basis for chemicals. | Calibration certificates, laboratory reports, and supplier certificates |
| `dq_upstream_representativeness` | Linked upstream datasets | Document geography, technology, time period, product state, and any proxy use for each upstream dataset; an unresolved proxy shall be flagged in the produced data package. | Dataset metadata and supplier information |
| `dq_route_transparency` | Conditional product-family processes | Mark every conditional row applicable or not applicable and give the physical reason; zero shall not be used when the value is merely unknown. | Route checklist, process flow diagram, and bill of material |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail validation if product family, material exclusions, mass basis, market state, or any required qualifier is missing, or if a proxy UUID is used for the unresolved reference product. | `un-cpc-3-0-2025` |
| `validate_process_coverage` | Process map | Require both mandatory processes and require the conditional metal process when foreground records show metal cutting, forming, cleaning, coating, or joint fabrication. | `line-power-polymer-insulator-manufacturing`; `elot-ts-1501-04-20-01-01-2023` |
| `validate_atomic_flows` | Inventory rows | Require one physical, chemical, waste, or elementary exchange per row, exact direction and flow type, an applicable/not-applicable decision, and an unresolved record whenever no exact UUID is confirmed. |  |
| `validate_mass_energy_reconciliation` | Foreground inventory | Require accepted-output normalization, route material-balance residual disclosure, utility reconciliation, and investigation of unexplained duplicated or missing flows. | `mass-balance-identity` |
| `validate_direct_emissions` | NMVOC, fossil CO2, and fine particles | Require the exact compartment/size fraction, monitoring or mass-balance method, abatement basis, and exclusion of upstream electricity and fuel-supply emissions from direct rows. |  |
| `validate_bilingual_identity` | UUID-bearing Chinese display names | Require the exact state-100 TianGong Chinese baseName and the same UUID, property, unit group, and row id as the English inventory. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-gate foreground manufacturing data package for one declared in-scope product family and production site or representative production system |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-footprint and lifecyclemodel construction when the product family, ratings, material system, geography, technology, and boundary are representative; internal process improvement with foreground records |
| excluded_use | Direct comparison across unlike insulator, fitting, or conduit functions; service-life claims without equivalent performance and duration; substitution for glass, ceramic, or plastic categories; installation, use, or end-of-life claims not separately modelled |
| required_metadata | PCR id and version; product family; product specification; insulating and metal materials; electrical/mechanical ratings; liner construction where relevant; geography; site/technology; reporting period; accepted output mass; allocation; upstream datasets; packaging/reuse; abatement; unresolved identities and evidence gaps |
| required_quality_disclosure | Foreground coverage, temporal alignment, meter and scale calibration, laboratory methods, mass-balance residual, energy allocation, conditional-row decisions, upstream proxy use, and treatment of rejects, scrap, wastewater, and direct emissions |
| update_trigger | Change in product family, formulation, metal grade, liner construction, production technology, site, energy supply, surface treatment, abatement, packaging system, allocation method, applicable standard, or another documented change that materially alters normalized material or energy intensity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official category identity and exact English classification title |
| `iec-61109-2025` | standard | IEC 61109:2025, *Insulators for overhead lines – Composite suspension and tension insulators with AC voltage greater than 1 000 V and DC voltage greater than 1 500 V – Definitions, test methods and acceptance criteria*. https://webstore.iec.ch/en/publication/87026 (retrieved 2026-09-04) | Composite-insulator construction, product qualifiers, and acceptance context |
| `elot-ts-1501-04-20-01-01-2023` | standard | ELOT TS 1501-04-20-01-01:2023, *Cable ducting system with steel conduits*. https://technical-regulation-information-system.ec.europa.eu/lt/notification/23790/text/D/EN (retrieved 2026-09-04) | Steel-conduit and fitting scope, internal insulating liner, and conduit classification qualifiers |
| `line-power-polymer-insulator-manufacturing` | extension_guidance | Wuhan Line Power Transmission Equipment Co., Ltd., *Polymer Insulator Manufacturing Process*. https://www.composite-insulators.com/manufacturing-process (retrieved 2026-09-04) | Core preparation, crimping, silicone-rubber injection and cure, testing, marking, and packaging process decomposition |
| `mass-balance-identity` | method_factor | Conservation of mass and exact energy-unit conversion identities used in Section 8 | Foreground normalization, material reconciliation, and physical unit conversion |
