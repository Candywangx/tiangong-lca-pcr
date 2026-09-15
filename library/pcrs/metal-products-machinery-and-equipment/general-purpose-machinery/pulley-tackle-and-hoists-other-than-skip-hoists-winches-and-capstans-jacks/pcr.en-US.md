---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pulley-tackle-and-hoists-other-than-skip-hoists-winches-and-capstans-jacks
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Pulley tackle and hoists other than skip hoists; winches and capstans; jacks

## 1. Scope and Applicability

This PCR applies to manufacture of complete pulley tackle, lifting hoists other than skip hoists, winches, capstans, and mechanical or hydraulic jacks supplied as market-ready products. Covered products may be manually, electrically, hydraulically, pneumatically, or engine powered. The foreground gate-to-gate boundary begins with received materials, purchased components, fuels, utilities, and packaging and ends with the complete tested and packaged product at the factory gate.

Skip hoists; lifts, escalators, and moving walkways; cranes; conveyors; standalone chains, ropes, slings, hooks, electric motors, hydraulic pumps, gearboxes, and other parts sold separately; installation at the use site; distribution; use, maintenance, and end-of-life are outside this PCR. A lifting accessory that does not itself constitute pulley tackle, a hoist, winch, capstan, or jack is excluded. The data package shall declare the exact subtype and whether on-site fabrication, joining, coating, powered testing, and each packaging route occur.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pulley-tackle-and-hoists-other-than-skip-hoists-winches-and-capstans-jacks |
| classification_refs | CPC 3.0: 43510 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Complete pulley tackle; chain, wire-rope, lever, and other hoists except skip hoists; winches; capstans; mechanical and hydraulic jacks |
| excluded_products | Skip hoists; lifts; cranes; conveyors; lifting accessories and parts sold separately; installation, distribution, use, maintenance, and end-of-life services |
| representative_product | One declared complete hoist, winch, capstan, pulley-tackle assembly, or jack configuration |
| production_route | Receipt of materials/components; conditional cutting, forming and machining; conditional joining; conditional surface preparation and coating; final assembly and factory testing; packaging |
| market_state | Complete, factory-tested, labelled, and packaged or explicitly declared unpackaged product at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared lifting, pulling, tensioning, or load-support function |
| How much | One declared product unit operating at its stated maximum working load and configuration |
| How well | Meet the declared functional specification and applicable factory acceptance criteria, including required static and dynamic testing |
| How long or cycle | The declared design service life or rated operating-cycle life for the specified duty class and environment |
| reference_flow_link | The measured mass of the one complete factory-tested product, including fluids and factory-gate packaging, required to provide the functional unit |

| Field | Value |
| --- | --- |
| Reference amount | Measured mass of one complete factory-tested product in its declared factory-gate packaging state |
| Reference product flow | Pulley tackle and hoists other than skip hoists, winches and capstans, jacks `7984041f-134f-4b73-89b9-30d9be48684f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; manual/electric/hydraulic/pneumatic/engine drive; maximum working load and configuration; lifting height or rope/chain travel where applicable; duty class; design service life or rated cycles; product mass; included motor, controls, rope, chain, hook, hydraulic fluid and accessories; static/dynamic factory-test status; packaging state; production site; market geography; reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or derive from traceable component and packaging mass records the complete unit in the declared factory-gate state; do not substitute rated lifting capacity for product mass. |
| `electricity_energy_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh in raw records and convert to MJ using 1 kWh = 3.6 MJ; disclose voltage, grid geography, supplier mix, and whether losses to the site meter are included. |
| `gas_volume_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record the metered or invoiced volume and its reference temperature, pressure, and dry/wet basis; do not combine different gases. |
| `liquid_mass_conversion` | process water, cleaning wastewater, lubricating oil, hydraulic fluid and diesel fuel | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; if volume is converted to mass, retain measured or supplier-specific density and its reference conditions. |
| `allocation_meter_basis` | shared foreground meters and batch records | Quantity appropriate to the atomic flow | declared row unit | Allocate only after documented subdivision is impracticable and retain the physical driver, denominator, production period, and reconciliation to the site total. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials, purchased components, energy carriers, process water, and packaging as received at the manufacturing-site gate |
| starting_condition_role | Upstream product inputs with their production and inbound supply burdens represented by linked upstream datasets, not recreated inside the foreground manufacturing inventory |
| product_classification_scope | Complete products within the semantic boundary of CPC 3.0 code 43510; classification is context and does not replace product qualifiers |
| recursive_input_rule | A complete incoming product within this same PCR category is recorded once as a purchased product input with an upstream dataset and is not recursively decomposed unless the supplier provides component-level primary data |
| upstream_dataset_requirement | Use geographically, technologically, temporally, and product-state representative upstream datasets for every purchased material, component, fuel, utility, and packaging input |
| disclosure | Declare product subtype, drive, site, technology route, process inclusion, testing, packaging state, cut-offs, shared-process allocation, and every material or emission not represented by the listed atomic patterns |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground manufacturing boundary | Include all known material, component, energy, water, product, waste, and direct elementary exchanges for included on-site processes from receipt through factory testing and packaging. | `eu-commission-pef-method-2021` |
| `boundary_rule_2` | purchased inputs | Represent upstream production and inbound supply of purchased inputs with linked upstream datasets; do not add upstream direct emissions again to the foreground inventory. | `eu-commission-pef-method-2021` |
| `boundary_rule_3` | downstream stages | Exclude distribution after the factory gate, installation, use-phase electricity or fuel, maintenance, replacement parts, and end-of-life unless the declared study expands the boundary and reports those stages separately. | `eu-commission-pef-method-2021` |
| `boundary_rule_4` | factory acceptance | Include energy, fuel, fluids, rejected materials, wastes, and direct emissions caused by factory assembly and the static/dynamic tests performed before the product leaves the factory gate. | `eu-machinery-regulation-2023-1230` |
| `boundary_rule_5` | cut-offs and additional exchanges | Do not treat this inventory pattern as a cut-off list: add any product-specific atomic exchange identified by bills of materials, process records, permits, or mass/energy reconciliation and disclose any justified exclusion. | `eu-commission-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Component cutting, forming and machining | conditional | Include when the reporting site cuts, forms, drills, mills, turns, grinds, or otherwise machines received metal | foreground component manufacture | One complete product's fabricated components |
| `joining` | Joining and structural assembly | conditional | Include when welding or oxygen-assisted cutting is performed at the reporting site | foreground joining | One complete product's joined frame and load-bearing assemblies |
| `surface_treatment` | Surface preparation and coating | conditional | Include when aqueous cleaning, alkaline preparation, painting, curing, or related coating occurs at the reporting site | foreground finishing | Coated area/components for one complete product |
| `final_assembly_testing` | Final assembly, fluid fill and factory testing | required | Always include; declare non-applicable drive-specific inputs individually | foreground assembly and quality assurance | One complete tested product |
| `packaging` | Packaging and factory-gate release | required | Always include the declared factory-gate packaging state; record no packaging only when the product is demonstrably supplied unpackaged | foreground packaging | One complete packaged or declared unpackaged product |

### Process: Component cutting, forming and machining (`component_fabrication`)

#### Inputs

##### Product flows

###### Carbon-steel material (`carbon_steel_input`)

Record carbon steel that crosses the site boundary and is consumed in frames, drums, gears, load-bearing members, housings, or other product components. Include only the actual declared grade and received product forms.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass / kg
- Amount rule: measured consumed mass from product-specific bill of materials, receipts, issues, returns, and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Cast-iron material (`cast_iron_input`)

Record cast iron only when it is received and consumed in housings, jack bodies, bases, or other components. No exact Tiangong UUID is adopted because the exact-name candidate fails classification review.

- Selected flow: Cast iron
- Flow property / unit: Mass / kg
- Amount rule: measured consumed mass from product-specific bill of materials, receipts, issues, returns, and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Primary aluminium-alloy sheet (`primary_aluminium_alloy_sheet_input`)

Record primary aluminium-alloy sheet only for variants that consume this received sheet in guards, housings, covers, or structural components.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass / kg
- Amount rule: measured consumed mass from product-specific bill of materials, receipts, issues, returns, and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Fabrication electricity (`fabrication_electricity`)

Record electricity used by cutting, forming, machining, grinding, local extraction, and directly attributable auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or physically allocated electricity in kWh multiplied by 3.6 MJ/kWh
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_inputs`
- Sources: `eu-commission-pef-method-2021`

###### Fabrication process water (`fabrication_process_water`)

Record process water supplied to wet machining, aqueous part washing, or directly attributable fabrication uses; exclude closed-loop recirculation that does not cross the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured makeup-water mass or metered volume converted using recorded density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Machining lubricating oil (`machining_lubricating_oil`)

Record lubricating oil added to and consumed by product-attributable machining and metal-forming operations; do not combine it with hydraulic fluid or waste oil.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued oil less traceable returns and closing inventory, allocated to the reference product using machine time or measured throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated carbon-steel offcuts, chips, turnings, and rejected steel components leaving the foreground boundary; do not net this mass from carbon-steel input.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured mass at the point of transfer, reconciled to internal scrap bins and product-specific fabrication records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Aluminium scrap (`aluminium_scrap`)

Record aluminium-alloy offcuts, chips, and rejected aluminium parts separately from steel scrap whenever aluminium fabrication occurs.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured mass at the point of transfer, reconciled to internal scrap bins and product-specific fabrication records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Used lubricating oil (`used_lubricating_oil`)

Record used lubricating oil removed from machining systems and transferred for treatment; do not combine with metal chips, aqueous wastewater, or hydraulic fluid.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass from waste manifests, tank change, or container weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Elementary flows

###### Fabrication particulate matter to air (`fabrication_particulate_air`)

Record uncaptured particulate matter released to air from cutting, grinding, machining, and directly attributable extraction. Keep captured dust as a separate waste row if it is generated and transferred.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: site measurement or calculation from product-specific activity, a documented emission factor, capture efficiency, and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

### Process: Joining and structural assembly (`joining`)

#### Inputs

##### Product flows

###### Joining electricity (`joining_electricity`)

Record electricity used by welding equipment, positioners, fume extraction, and directly attributable joining auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or physically allocated electricity in kWh multiplied by 3.6 MJ/kWh
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_joining_inputs`
- Sources: `eu-commission-pef-method-2021`

###### Flux-cored welding wire (`flux_cored_welding_wire`)

Record flux-cored wire consumed when that welding route is used; create separate atomic rows for other electrode or filler products actually consumed.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: issued wire less traceable returns and reusable remnants, allocated to the reference product from job or batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Industrial oxygen (`industrial_oxygen`)

Record industrial oxygen only when consumed by oxygen-assisted cutting or joining within this process; do not combine it with other gases.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or cylinder-accounted oxygen volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Joining particulate matter to air (`joining_particulate_air`)

Record uncaptured welding and thermal-cutting particulate matter released to air; use measured particle-size-specific rows instead when defensible monitoring data exist.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: site measurement or calculation from joining activity, documented emission factor, capture efficiency, and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_joining_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

### Process: Surface preparation and coating (`surface_treatment`)

#### Inputs

##### Product flows

###### Coating electricity (`coating_electricity`)

Record electricity used by cleaning, pumping, ventilation, paint application, curing, and directly attributable treatment equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or physically allocated electricity in kWh multiplied by 3.6 MJ/kWh
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_inputs`
- Sources: `eu-commission-pef-method-2021`

###### Coating natural gas (`coating_natural_gas`)

Record gaseous natural gas only when burned for oven curing, bath heating, or other directly attributable coating operations.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered or invoice-reconciled gas volume at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_inputs`
- Sources: `eu-commission-pef-method-2021`

###### Coating and cleaning process water (`coating_process_water`)

Record process water crossing the site boundary for cleaning, rinsing, bath makeup, and water-curtain booths within the declared treatment route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured makeup-water mass or metered volume converted using recorded density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Sodium hydroxide for alkaline preparation (`coating_sodium_hydroxide`)

Record sodium hydroxide only when it is consumed in alkaline cleaning or bath makeup; preserve solution concentration and calculate pure-product mass consistently.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued solution mass multiplied by recorded sodium-hydroxide mass fraction, less traceable returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Oil-based paint (`oil_based_paint`)

Record oil-based paint only for the solvent-borne painting route; create separate atomic rows for powder coating, water-based paint, primer, thinner, or other coating products actually used.

- Selected flow: Paint `6be227e2-532c-4989-89cb-61c7c02c1d55`
- Flow property / unit: Mass / kg
- Amount rule: paint issued to the job less documented returns, including material retained in the final coating and material becoming waste or direct emissions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste paint (`waste_paint`)

Record discarded oil-based paint, overspray residue, and unusable mixed paint transferred as one waste-paint stream; separate contaminated absorbents, filters, solvents, and wastewater when generated.

- Selected flow: Waste paint `d202996c-dc0d-4d90-a161-87a21f0e9616`
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass from container weights and waste manifests
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Cleaning wastewater (`cleaning_wastewater`)

Record cleaning and rinse wastewater leaving the foreground process for on-site or off-site treatment; disclose chemistry, treatment state, and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or metered volume converted using recorded density, net only of documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Elementary flows

###### Fossil carbon dioxide from coating fuel (`coating_fossil_co2`)

Record only direct fossil carbon dioxide released by on-site combustion of coating natural gas; exclude upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated from collected natural-gas volume, supplier or jurisdictional carbon content, and documented oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_outputs`
- Sources: `eu-commission-pef-method-2021`

###### Non-methane volatile organic compounds to air (`coating_nmvoc_air`)

Record direct non-methane volatile organic compounds released from paint storage, mixing, application, drying, and cleanup after accounting for captured or destroyed mass.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release or solvent mass balance using product VOC content, applied mass, transfer efficiency, captured waste, and abatement efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_outputs`
- Sources: `us-epa-fabricated-metal-products-1995`

### Process: Final assembly, fluid fill and factory testing (`final_assembly_testing`)

#### Inputs

##### Product flows

###### Purchased electric motor (`electric_motor`)

Record a complete electric motor only for powered variants that receive it across the site boundary; disclose whether gearbox, brake, controls, and cables are inside or outside the purchased component boundary.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: measured or bill-of-material mass of the complete purchased motor incorporated into the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_inputs`
- Sources: `eu-machinery-regulation-2023-1230`

###### Assembly and factory-test electricity (`assembly_electricity`)

Record electricity used by assembly tools, fluid-fill systems, controls commissioning, test benches, static/dynamic tests, and directly attributable auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or physically allocated electricity in kWh multiplied by 3.6 MJ/kWh
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_test_inputs`
- Sources: `eu-machinery-regulation-2023-1230`

###### Hydraulic fluid fill (`hydraulic_fluid`)

Record hydraulic fluid incorporated in the shipped product or consumed during factory fill and testing of applicable hydraulic variants; separately record recovered fluid if it leaves as waste.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: measured fill plus test consumption less traceable recovered reuse and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_inputs`
- Sources: `eu-machinery-regulation-2023-1230`

###### Diesel fuel for factory testing (`test_diesel_fuel`)

Record diesel fuel only when an engine-driven product or test rig burns diesel during product-attributable factory testing; do not combine it with other fuels.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: measured issued fuel less traceable returns, reconciled to test duration and equipment records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_inputs`
- Sources: `eu-machinery-regulation-2023-1230`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from diesel testing (`test_fossil_co2`)

Record only direct fossil carbon dioxide released by on-site diesel combustion during factory testing; exclude upstream fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated from collected diesel mass, supplier or jurisdictional carbon content, and documented oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_test_outputs`
- Sources: `eu-commission-pef-method-2021`

### Process: Packaging and factory-gate release (`packaging`)

#### Inputs

##### Product flows

###### Corrugated board boxes (`corrugated_board_boxes`)

Record corrugated board boxes incorporated in the delivered packaging; disclose board grade, recycled content, and whether the box is new or reused.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass or product-specific packaging specification reconciled to issues and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-commission-pef-method-2021`

###### EURO wooden pallet (`euro_wooden_pallet`)

Record a EURO wooden pallet only when this standardized pallet crosses the factory gate with the product; disclose new/reused state and allocation across multiple products.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass multiplied by the documented fraction assigned to the reference product shipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-commission-pef-method-2021`

###### Polyethylene packaging film (`polyethylene_film_packaging`)

Record polyethylene stretch, shrink, or protective film only when it is incorporated in the delivered packaging. No exact Tiangong UUID is adopted because the exact-name candidate fails classification review.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured film mass or product-specific packaging specification reconciled to issues and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-commission-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete factory-gate reference product (`reference_product`)

Record the complete factory-tested product in its declared packaging state. The output mass includes incorporated fluids and delivered packaging and shall reconcile with the Reference Flow table.

- Selected flow: Pulley tackle and hoists other than skip hoists, winches and capstans, jacks `7984041f-134f-4b73-89b9-30d9be48684f`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of one complete product in its declared factory-gate packaging state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one complete packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `un-cpc-3-0-structure-2025`, `eu-machinery-regulation-2023-1230`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared foreground processes | Avoid allocation by subdividing meters, work orders, production cells, batches, coating lines, test benches, and waste records to the declared product or homogeneous product family. | `eu-commission-pef-method-2021` |
| `allocation_rule_2` | residual shared energy and material use | When subdivision is impracticable, allocate using a documented physical driver causally related to consumption, such as machine time, test time, mass throughput, coated area, or counted packaging units; economic allocation requires explicit justification and sensitivity analysis. | `eu-commission-pef-method-2021` |
| `allocation_rule_3` | steel, aluminium, used oil and waste paint | Report transferred scrap and wastes as separate outputs at measured mass; do not subtract avoided primary production or downstream recycling credits inside the foreground manufacturing process. | `eu-commission-pef-method-2021` |
| `allocation_rule_4` | rework and rejected products | Attribute rework energy/materials and rejected-product wastes to the production period and product family that caused them; disclose whether saleable off-specification equipment is a co-product and apply subdivision before any allocation. | `eu-commission-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_inputs` | `component_fabrication` | received materials, electricity, water and lubricant | bills of materials, purchase/issue/return records, meters | product id; material/flow id; grade/state; gross/return mass; meter start/end; kWh or m3; density; batch; timestamp | reconcile job records to procurement, stock change and submeters | kg, kWh, m3 | each job or meter interval | representative continuous 12 months or complete low-volume campaign | all reporting-site fabrication cells and attributable auxiliaries | sum by atomic flow and product family; convert units; allocate only residual shared totals by documented physical driver | calibrated meter/weigh scale records, signed inventory reconciliation, supplier specifications |
| `cp_fabrication_outputs` | `component_fabrication` | segregated scrap, used oil and particulate emission | weigh tickets, waste manifests, monitoring and operating records | waste id; material; mass; destination; activity; emission factor; capture efficiency; operating time; timestamp | reconcile segregated transfers and emission calculations to process activity | kg | each transfer and reporting interval | same period as fabrication inputs | all reporting-site fabrication cells and controls | sum by atomic flow; subtract only documented internal reuse that never crosses the boundary | waste manifests, calibration, laboratory/permit reports, calculation workbook |
| `cp_joining_inputs` | `joining` | electricity, welding wire and oxygen | work orders, issue/return records, meters and cylinder logs | product id; wire id/mass; oxygen volume; reference conditions; kWh; joint/process; timestamp | reconcile job consumption and meters to joining work orders | kg, m3, kWh | each job or batch | same production period as reference product | all reporting-site joining cells and extraction | sum by atomic flow; convert electricity to MJ; allocate residual shared totals by arc time or documented work time | issue records, gas certificates, calibrated meters, work-order traceability |
| `cp_joining_outputs` | `joining` | direct particulate emission | monitoring, fume-control and joining activity records | joining process; consumable mass; operating time; emission factor; capture/abatement efficiency; measured concentration/flow; timestamp | direct measurement or transparent activity-factor calculation | kg | each monitoring interval or homogeneous process batch | same production period as joining inputs | all reporting-site joining release points | calculate uncaptured emitted mass and normalize to reference product | permit/stack-test evidence, control-maintenance records, calculation workbook |
| `cp_coating_inputs` | `surface_treatment` | electricity, natural gas, water, sodium hydroxide and oil-based paint | meters, batch sheets, purchase/issue/return and bath records | product id; coated area; kWh; gas m3 and conditions; water; chemical solution mass/concentration; paint mass/VOC content; timestamp | reconcile line records to utility meters, inventories and bath makeup | kg, m3, kWh | each coating batch and meter interval | representative continuous 12 months or complete coating campaign | all reporting-site cleaning, painting, curing and attributable controls | sum by atomic flow; convert electricity and solution concentration; allocate residual shared totals by coated area or line time | calibrated meters, supplier SDS/specifications, bath analyses, inventory reconciliation |
| `cp_coating_outputs` | `surface_treatment` | waste paint, cleaning wastewater, fossil CO2 and NMVOC | waste manifests, effluent meters, fuel records, coating/abatement records | waste mass; wastewater mass/volume/density; gas volume/carbon content/oxidation; paint VOC content; transfer and destruction efficiency; timestamp | weigh/meter outputs and calculate direct emissions from collected activity | kg | each transfer, batch or reporting interval | same period as coating inputs | all reporting-site coating waste and release points | sum by atomic flow; preserve treatment destination; avoid upstream emission double counting | manifests, laboratory results, calibrated meters, supplier factors, permit/abatement evidence |
| `cp_assembly_test_inputs` | `final_assembly_testing` | motor, electricity, hydraulic fluid and diesel | bill of materials, fill sheets, test logs, meters, fuel issue records | product serial; component mass; kWh; fluid/fuel mass; test type; maximum working load; test duration; timestamp | trace each serial or homogeneous batch through assembly and test | kg, kWh | each product or homogeneous test batch | complete reporting production period | all assembly stations and factory test benches | sum direct records; convert electricity to MJ; allocate test-bench residuals by test time | serial traceability, calibrated load/test equipment, signed test report, meter and issue records |
| `cp_assembly_test_outputs` | `final_assembly_testing` | fossil CO2 from diesel testing | fuel and test records | diesel mass; carbon content; oxidation factor; product serial; test duration; timestamp | calculate direct CO2 from collected fuel and documented factors | kg | each test batch | same period as assembly/test inputs | reporting-site diesel test equipment | sum direct emitted mass and normalize to reference product | fuel specification, test log, calculation workbook |
| `cp_packaging_release` | `packaging` | packaging inputs and reference-product output | packaging specification, issue/return records and final weighing | product serial; packaging component id; mass; count; pallet allocation/reuse; complete product mass; timestamp | reconcile packaging issues to each released product and final scale reading | kg | each shipment configuration | complete reporting production period | packaging and release area at reporting site | sum each atomic packaging material and reconcile packaged product output to final weight | approved packaging specification, calibrated scale, shipment and serial records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | every electricity row | electricity_MJ = metered_or_allocated_kWh × 3.6 | kWh by process and allocation record | MJ per reference product | `eu-commission-pef-method-2021` |
| `calc_solution_active_mass` | sodium hydroxide | NaOH_mass = solution_mass × measured_or_supplier_mass_fraction | solution mass; NaOH mass fraction | kg sodium hydroxide per reference product | `us-epa-fabricated-metal-products-1995` |
| `calc_liquid_mass` | volume-recorded water, wastewater, oil, hydraulic fluid or diesel | liquid_mass = measured_volume × documented_density_at_reference_conditions | volume; density; temperature/reference conditions | kg per reference product | `eu-commission-pef-method-2021` |
| `calc_fossil_co2` | coating natural gas and diesel test combustion | fossil_CO2_mass = collected_fuel_amount × documented_fossil_carbon_content × oxidation_fraction × 44/12, with unit conversions shown | fuel amount; carbon content; oxidation fraction | kg fossil CO2 per reference product | `eu-commission-pef-method-2021` |
| `calc_nmvoc` | oil-based painting | emitted_NMVOC = applied_paint_mass × VOC_mass_fraction - captured_liquid_VOC - destroyed_VOC, bounded by documented mass balance | paint mass; VOC content; captured waste; destruction efficiency | kg NMVOC to air per reference product | `us-epa-fabricated-metal-products-1995` |
| `calc_shared_process_allocation` | residual shared records | product_amount = reconciled_process_total × product_physical_driver / sum_physical_drivers | reconciled total; product and total driver values | atomic flow amount per reference product | `eu-commission-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and purchased components | Preserve serial/product-family traceability and declare subtype, drive, rated load, configuration, duty, design life/cycles, included components and packaging state. | product specification, bill of materials, label, serial record and test report |
| `dq_completeness` | all included processes | Reconcile all known material, energy, water, product, waste, and direct-emission records to site totals; explain additions, zero/not-applicable conditions, exclusions, and data gaps. | reconciliation workbook, process map, meter/waste totals and signed exception log |
| `dq_measurement` | meters, scales, concentrations and test equipment | Use calibrated or verified equipment and retain unit, reference conditions, calibration status, sampling method, uncertainty, and conversions. | calibration certificate, laboratory report, supplier specification and calculation workbook |
| `dq_temporal` | foreground reporting period | Use a representative continuous 12-month period or a complete production campaign for low-volume products; disclose seasonality, downtime, rework, and abnormal production. | dated production, meter, inventory, waste and shipment records |
| `dq_representativeness` | foreground and upstream datasets | Assess technological, geographical and time representativeness and precision; justify any proxy dataset or allocation driver. | data-quality assessment using TeR, GeR, TiR and precision criteria |
| `dq_uuid_localization` | UUID-bearing flows | Verify public state 100, flow type, classification, property and unit group, and preserve the official Tiangong Chinese baseName in the aligned Chinese rendering. | finalized receipt-backed direct-read audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR and reference-product identity | Confirm that the manifest id, English and Chinese frontmatter, canonical PCR id, CPC context, reference-product UUID, flow property, unit group, and required qualifiers are mutually consistent. | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | functional unit | Reject a dataset that substitutes one kilogram of unspecified equipment for the declared lifting/pulling/support function; rated load, quality/test status, and design life or cycles must be present. | `eu-commission-pef-method-2021`, `eu-machinery-regulation-2023-1230` |
| `validation_rule_3` | inventory completeness | Confirm that every included process has all known atomic inputs and outputs, each conditional row states why it applies, and actual product-specific exchanges absent from the pattern have been added rather than hidden by cut-off. | `eu-commission-pef-method-2021` |
| `validation_rule_4` | mass and waste reconciliation | Reconcile material inputs with product mass, retained coatings/fluids, segregated scrap, wastes, emissions, stock change, and documented moisture or unmeasured differences without netting recycling credits. | `us-epa-fabricated-metal-products-1995` |
| `validation_rule_5` | energy and direct emissions | Reconcile electricity, natural gas and diesel to meters/invoices; verify kWh-to-MJ conversion; confirm fossil CO2 includes only direct on-site combustion and NMVOC/particulate calculations include documented controls. | `eu-commission-pef-method-2021`, `us-epa-fabricated-metal-products-1995` |
| `validation_rule_6` | factory testing | Confirm that required static/dynamic test status, test load basis, test energy/fuel, rejected material and rework are represented for products ready to be put into service. | `eu-machinery-regulation-2023-1230` |
| `validation_rule_7` | UUID and bilingual alignment | Confirm every UUID is public state 100 and matches flow type, classification, property and unit; English and Chinese inventories must have the same ordered row ids, UUIDs and controlled values and use official Chinese flow names. |  |
| `validation_rule_8` | unresolved evidence | Keep cast iron and polyethylene packaging film UUIDs unresolved until exact public identities are verified, and do not convert single studies, specifications, or author judgment into empirical ranges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing dataset for a complete factory-tested product at the factory gate |
| downstream_use | May be published as a secondary_dataset or background_dataset after methodology review, validation, uncertainty/data-quality assessment, and resolution or explicit governance of identity gaps |
| allowed_use | Cradle-to-gate product studies when combined with representative upstream datasets; broader life-cycle models that add distribution, installation, use, maintenance and end-of-life explicitly; comparison only for equivalent functions, rated loads, duty classes, design lives and system boundaries |
| excluded_use | Direct representation of skip hoists, lifts, cranes, conveyors, standalone parts or lifting accessories; use-phase or whole-life results without added downstream stages; unqualified comparison by product mass alone |
| required_metadata | PCR id/version; product subtype; drive; rated load/configuration; lift/travel; duty class; design life/cycles; product and packaging mass; included components/fluids; site/geography/year; process route; test status; allocation; cut-offs; upstream dataset identities |
| required_quality_disclosure | Foreground period and coverage; completeness reconciliation; calibration; uncertainty; TeR/GeR/TiR/precision assessment; proxy and allocation sensitivity; waste destinations; emission controls; unresolved UUID and range-evidence needs |
| update_trigger | Change in product design or rated function; material/component substitution; drive or test route; coating chemistry; manufacturing site/technology; packaging; allocation; emission control; upstream dataset representativeness; or evidence sufficient to resolve UUID/range needs |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, row 43510. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official product classification identity and separation from the parts class |
| `eu-commission-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (retrieved 2026-09-05) | Functional unit/reference flow; system boundary; company-specific inventory completeness; allocation; calculation and data-quality rules |
| `eu-machinery-regulation-2023-1230` | Standard (`standard`) | Regulation (EU) 2023/1230 of 14 June 2023 on machinery. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32023R1230 (retrieved 2026-09-05) | Maximum working load, operating-cycle/service-life qualifiers, factory fitness-for-purpose and static/dynamic testing |
| `us-epa-fabricated-metal-products-1995` | Official guidance (`official_guidance`) | US EPA, Profile of the Fabricated Metal Products Industry, EPA/310-R-95-007, September 1995. https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/fabmetsn.pdf (retrieved 2026-09-05) | Cutting/forming/machining, surface preparation and painting process decomposition; atomic material, wastewater, waste and air-emission candidates |
