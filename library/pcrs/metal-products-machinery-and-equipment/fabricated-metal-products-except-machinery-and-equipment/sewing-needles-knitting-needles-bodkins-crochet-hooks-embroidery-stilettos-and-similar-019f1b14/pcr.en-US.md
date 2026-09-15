---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.sewing-needles-knitting-needles-bodkins-crochet-hooks-embroidery-stilettos-and-similar-019f1b14
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sewing needles, knitting needles, bodkins, crochet hooks, embroidery stilettos and similar articles, safety pins and other pins, clothing and luggage fittings, tubular or bifurcated rivets, beads and spangles of iron, steel or other base metal

## 1. Scope and Applicability

This PCR applies to the factory-gate production of the finished small metal articles identified by CPC 3.0 subclass 42997. It covers hand-use sewing and knitting needles, bodkins, crochet hooks, embroidery stilettos and similar iron or steel articles; safety pins and other iron or steel pins not elsewhere classified; base-metal clasps, clasp frames, buckles, buckle-clasps, hooks, eyes and eyelets for clothing, footwear, awnings, handbags, travel goods and other made-up articles; tubular or bifurcated base-metal rivets; and base-metal beads and spangles.

The rule covers wire, strip or sheet preparation; cutting, drawing, stamping, piercing, bending, heading, forming, machining, sharpening, grinding, polishing, heat treatment, cleaning, pickling, plating or other surface treatment when performed; assembly; inspection; and release of the finished article. Route-specific exchanges are included only when the declared product and technology use that route.

It excludes sewing-machine needles, ordinary solid rivets classified with general fasteners, locks and furniture fittings, metal ornaments outside the stated clothing or made-up-article use, upstream primary-metal production except through linked supplier datasets, capital equipment, employee travel, outbound distribution, retail packaging unless explicitly brought into scope, product use, maintenance and end-of-life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.sewing-needles-knitting-needles-bodkins-crochet-hooks-embroidery-stilettos-and-similar-019f1b14 |
| classification_refs | CPC 3.0: 42997 (exact classification context) |
| covered_products | Finished hand-use iron or steel needles and related tools; iron or steel safety pins and other pins n.e.c.; base-metal clothing, footwear, awning, handbag, travel-goods and made-up-article fittings; tubular or bifurcated base-metal rivets; base-metal beads and spangles. |
| excluded_products | Sewing-machine needles; general solid rivets and fasteners; locks, furniture or building fittings; unrelated ornaments; unfinished generic wire, strip, sheet or metal scrap sold as such. |
| representative_product | A declared finished article within the covered category, with product family, base metal or alloy, dimensions, finish and acceptance specification recorded. |
| production_route | Cold forming or stamping from steel wire, stainless-steel wire, brass strip or aluminium strip; optional machining, sharpening, heat treatment, alkaline cleaning, hydrochloric-acid pickling, zinc or nickel plating; assembly and inspection. |
| market_state | Saleable finished article at the manufacturing-site gate, unpackaged by default; any included packaging is separately declared and inventoried. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished covered metal article that provides the declared hand-use, fastening, joining or decorative function. |
| How much | 1 kg of accepted finished product at the manufacturing-site gate. |
| How well | Conforms to the declared product-family specification for alloy, dimensions, mechanical condition, point or edge geometry where relevant, surface finish, coating and acceptance criteria. |
| How long or cycle | Production-stage reference only; no service-life equivalence is asserted. If comparative use requires durability, the declared service life and replacement rate must be added outside this gate-to-gate reference. |
| reference_flow_link | The functional unit is realized by 1 kg of the accepted finished CPC 42997 product flow. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sewing needles, knitting needles, bodkins, crochet hooks, embroidery stilettos and similar articles, for use in the hand, of iron or steel, safety pins and other pins of iron or steel n.e.c., clasps, frames with clasps, buckles, buckle-clasps, hooks, eyes, eyelets and the like, of base metal, of a kind used for clothing, footwear, awnings, handbags, travel goods or other made-up articles, tubular or bifurcated rivets, of base metal, beads and spangles of base metal `714e90b5-8c5e-4c5b-aac5-8c156b8f20f9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family; article design or part number; base metal and alloy grade; wire, strip or sheet feedstock form; dimensions or size class; heat-treatment state when applicable; surface finish and coating system; coating thickness when applicable; accepted-product moisture-free mass basis; manufacturing geography; technology route; reporting period; packaging inclusion status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Accepted finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all exchanges to 1 kg of accepted finished article after final inspection. Exclude pallets, cartons, bags, reels and other packaging unless the study explicitly includes and inventories them. |
| `count_to_mass_conversion` | Production records kept by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass using a representative, traceable batch weighing for the same product family, alloy, size and finish; retain sampled count, net mass, scale identifier and sampling date. |
| `solution_mass_basis` | Sodium hydroxide and hydrochloric-acid solution inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report purchased solution on an as-received mass basis and declare concentration. The selected hydrochloric-acid UUID applies only to 30% solution; a different concentration requires its own exact flow identity and must not be silently converted to this flow. |
| `gas_volume_basis` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at declared reference temperature and pressure; disclose any conversion from operating to reference conditions and any allocation from a shared meter. |
| `electricity_energy_basis` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter's energy quantity and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose voltage level, grid geography, losses boundary and shared-meter allocation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel wire, stainless-steel wire, brass strip or aluminium strip and other process inputs received at the manufacturing-site gate, with supplier identity, material grade, mass, recycled-content claim if used, and upstream dataset references declared. |
| starting_condition_role | The purchased feedstocks and chemicals are the foreground manufacturing starting condition; their production and inbound supply burdens are represented by linked upstream datasets, not recreated inside the foreground process. |
| product_classification_scope | Finished products within CPC 3.0 subclass 42997, bounded by the covered and excluded products in Section 2. |
| recursive_input_rule | If a purchased semi-finished article already belongs to the same product category, record it once as a product input, identify the inherited manufacturing stages, and collect only the additional foreground stages; do not recursively reproduce the supplier's CPC 42997 process. |
| upstream_dataset_requirement | Use supplier-specific or technologically and geographically representative datasets for each metal feedstock, chemical, electricity and fuel. Keep feedstock alloy, product state and energy-delivery boundary consistent with the foreground qualifiers. |
| disclosure | Declare the exact starting feedstock form, alloy, included fabrication and finishing steps, outsourced steps, included packaging, cut-off decisions, treatment destinations, manufacturing geography and reporting period. |

### Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_fabrication_gate` | foreground manufacturing | Include all on-site cutting, drawing, stamping, piercing, bending, forming, machining, sharpening, grinding, heat treatment, cleaning, pickling, surface treatment, assembly and inspection used by the declared product route through accepted product at the site gate. | `us-epa-fabricated-metal-products-1995` |
| `boundary_conditional_finishing` | route-specific finishing | Include alkaline cleaning, acid pickling, rinsing, zinc plating and nickel plating only when performed; record each actual chemical, water, energy, waste and direct emission separately. | `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022` |
| `boundary_outsourced_operations` | outsourced foreground step | When a covered operation is outsourced, link a representative supplier process and disclose its geography, technology, product state and data quality; do not omit the operation because it occurs off site. | `eu-pef-2021-2279` |
| `boundary_exclusions` | excluded life-cycle stages | Exclude capital equipment, employee travel, outbound distribution, use and end-of-life from this gate-to-gate dataset. Packaging remains excluded unless explicitly included and separately inventoried. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication_finishing` | Material forming, machining, heat treatment and surface finishing | `required` | Always include the forming route; include each machining, heat-treatment, cleaning, pickling or plating exchange only when that operation is performed for the declared product. | Foreground production | Per 1 kg accepted finished product |
| `inspection_dispatch` | Final inspection and factory-gate release | `required` | Always include final acceptance and release; packaging remains outside the default boundary. | Foreground quality release | Per 1 kg accepted finished product |

### Process: Material forming, machining, heat treatment and surface finishing (`fabrication_finishing`)

#### Inputs

##### Product flows

###### Non-alloy steel wire feedstock (`steel_wire_input`)

Record steel wire entering drawing, cutting or forming when the declared article uses iron or non-alloy steel wire.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Net batch mass issued to the covered fabrication orders, less traceable unused return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Stainless-steel wire feedstock (`stainless_steel_wire_input`)

Record stainless-steel wire only for product orders that declare a stainless-steel wire route; the UUID remains unresolved and no non-alloy or low-alloy proxy is permitted.

- Selected flow: Stainless-steel wire
- Flow property / unit: Mass / kg
- Amount rule: Net batch mass issued to the covered fabrication orders, less traceable unused return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Brass plate and strip feedstock (`brass_strip_input`)

Record brass strip or plate entering stamping, piercing, drawing or forming when the declared article uses brass.

- Selected flow: Brass plate and strip `fff74890-cdbb-4184-84cc-b2d90582b28f`
- Flow property / unit: Mass / kg
- Amount rule: Net batch mass issued to the covered fabrication orders, less traceable unused return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Aluminium strip feedstock (`aluminium_strip_input`)

Record aluminium strip entering stamping, piercing or forming when the declared article uses aluminium strip.

- Selected flow: Aluminum strip `2eac52b0-66e2-4fe0-9329-655d6ee0a1c2`
- Flow property / unit: Mass / kg
- Amount rule: Net batch mass issued to the covered fabrication orders, less traceable unused return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Fabrication electricity (`fabrication_electricity`)

Record purchased electricity used by forming presses, wire-drawing equipment, machine tools, grinders, polishers, heat-treatment equipment, pumps, rectifiers and local exhaust serving the covered orders.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or shared-meter electricity allocated by equipment power and verified operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### Metal-forming lubricating oil (`forming_lubricating_oil`)

Record lubricating oil consumed in wire drawing, stamping, pressing, machining or grinding; exclude oil returned unchanged to inventory.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus purchases and issues minus closing inventory, unused returns and separately recovered oil
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### Natural gas for direct-fired heat treatment (`heat_treatment_natural_gas`)

Record gaseous natural gas only when a direct-fired furnace or other gas-fired heating equipment serves the covered orders; do not use this row for electric heating.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas at declared reference conditions, net of demonstrably unrelated users
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `eu-ferrous-metals-bat-2022`

###### Process water for cleaning, quenching or rinsing (`process_water_input`)

Record process water crossing the foreground boundary for the covered fabrication, quenching, cleaning, pickling or plating route; cooling water in a closed loop is recorded only for net make-up crossing the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balance net process-water input assigned to the covered orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide_input`)

Record sodium hydroxide on an as-received mass basis only when used in an alkaline cleaning bath serving the covered products; declare solution concentration and any bath reuse.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Opening bath inventory plus additions minus closing inventory and documented transfer, assigned to the covered orders
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### Hydrochloric acid solution for pickling (`hydrochloric_acid_30_input`)

Record only purchased 30% hydrochloric-acid solution used for pickling or acid cleaning of covered steel articles. Other concentrations require a separate exact flow identity.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass / kg
- Amount rule: Opening bath inventory plus 30% solution additions minus closing inventory and documented transfer, assigned to the covered orders
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### Zinc metal for zinc electroplating (`zinc_metal_input`)

Record special-high-grade zinc metal consumed only when zinc electroplating is performed; declare purity, anode or replenishment form and plating bath system.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass / kg
- Amount rule: Opening zinc inventory plus receipts and additions minus closing inventory, recovered zinc and documented transfer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### Nickel metal for nickel electroplating (`nickel_metal_input`)

Record high-purity nickel metal consumed only when nickel electroplating is performed; declare purity, anode form and plating bath system.

- Selected flow: Nickel metal (＞99.9% Ni) `8a1cacfb-0b44-404e-93e0-01a9b7a4403c`
- Flow property / unit: Mass / kg
- Amount rule: Opening nickel inventory plus receipts and additions minus closing inventory, recovered nickel and documented transfer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Uninspected finished article transferred to final inspection (`uninspected_article_output`)

Record the net mass of covered articles that have completed all declared fabrication and finishing operations and are transferred to final inspection. This internal intermediate has no confirmed TianGong UUID.

- Selected flow: Uninspected finished CPC 42997 article
- Flow property / unit: Mass / kg
- Amount rule: Net mass transferred to final inspection, including later accepted and rejected units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_output`
- Sources:

##### Waste flows

###### Segregated steel offcuts (`steel_offcut_scrap`)

Record clean steel wire or sheet offcuts generated by cutting, stamping, piercing and forming separately from oily swarf and mixed rejects.

- Selected flow: Steel scrap, offcuts `57ac39af-dc0e-4c66-b357-56a68b7d892b`
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated offcuts leaving the process for reuse, recycling or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Segregated brass strip offcuts (`brass_offcut_scrap`)

Record clean brass strip offcuts separately from ferrous, aluminium and mixed scrap. The UUID remains unresolved; a generic metal-scrap proxy is prohibited.

- Selected flow: Brass strip offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated brass offcuts leaving the process for reuse, recycling or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Segregated aluminium strip offcuts (`aluminium_offcut_scrap`)

Record clean aluminium strip offcuts separately from steel, brass and mixed scrap.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated aluminium offcuts leaving the process for reuse, recycling or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Steel swarf from sharpening and grinding (`steel_grinding_swarf`)

Record steel swarf generated by machining, sharpening or grinding separately from clean offcuts; declare moisture and oil contamination.

- Selected flow: Steel swarf `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- Flow property / unit: Mass / kg
- Amount rule: Weighed as-generated swarf leaving the process, with moisture and entrained-oil basis documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Spent alkaline cleaning liquor (`spent_alkaline_cleaner`)

Record spent alkaline bath solution removed from cleaning equipment separately from rinse wastewater.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or tank-volume-and-density-derived spent liquor sent to recovery, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### Spent hydrochloric-acid pickling solution (`spent_hydrochloric_pickling_solution`)

Record spent hydrochloric-acid pickling solution separately from fresh acid, alkaline liquor and rinse wastewater. The UUID remains unresolved; generic waste acid is not an exact substitute.

- Selected flow: Spent hydrochloric-acid pickling solution
- Flow property / unit: Mass / kg
- Amount rule: Weighed or tank-volume-and-density-derived spent solution sent to acid recovery, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `eu-ferrous-metals-bat-2022`

###### Zinc-electroplating rinse wastewater (`zinc_plating_rinse_wastewater`)

Record the zinc-plating rinse stream crossing the process boundary separately from nickel-plating wastewater and spent baths. The UUID remains unresolved.

- Selected flow: Zinc-electroplating rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered volume converted using measured density, or direct mass, for wastewater sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### Nickel-electroplating rinse wastewater (`nickel_plating_rinse_wastewater`)

Record the nickel-plating rinse stream crossing the process boundary separately from zinc-plating wastewater and spent baths. The UUID remains unresolved.

- Selected flow: Nickel-electroplating rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered volume converted using measured density, or direct mass, for wastewater sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`fossil_co2_emission`)

Record only direct fossil carbon dioxide from on-site natural-gas combustion serving the covered orders; upstream electricity emissions are excluded from this foreground row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected natural-gas use using a separately documented, geographically applicable combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

###### Hydrogen chloride emitted to air from pickling (`hydrogen_chloride_air_emission`)

Record direct hydrogen chloride released to the unspecified-air compartment when hydrochloric-acid pickling is performed, after accounting for the declared capture and treatment system.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack mass measurement or stack flow multiplied by representative measured HCl concentration for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

### Process: Final inspection and factory-gate release (`inspection_dispatch`)

#### Inputs

##### Product flows

###### Uninspected finished article received from fabrication (`uninspected_article_input`)

Record the same internal intermediate transferred from fabrication. The input and output transfer masses must agree for the reporting period after documented work-in-progress change.

- Selected flow: Uninspected finished CPC 42997 article
- Flow property / unit: Mass / kg
- Amount rule: Net mass received for final inspection, adjusted for documented opening and closing work in progress
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_output`
- Sources:

###### Inspection electricity (`inspection_electricity`)

Record purchased electricity used by inspection, testing and factory-gate release equipment for the covered orders.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or shared-meter electricity allocated by verified equipment power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources:

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Accepted finished product (`reference_product_output`)

Record only finished articles that pass the declared acceptance specification. Inspection rejects returned for rework remain within the foreground system; material ultimately discarded is included in the applicable segregated scrap or swarf output.

- Selected flow: Sewing needles, knitting needles, bodkins, crochet hooks, embroidery stilettos and similar articles, for use in the hand, of iron or steel, safety pins and other pins of iron or steel n.e.c., clasps, frames with clasps, buckles, buckle-clasps, hooks, eyes, eyelets and the like, of base metal, of a kind used for clothing, footwear, awnings, handbags, travel goods or other made-up articles, tubular or bifurcated rivets, of base metal, beads and spangles of base metal `714e90b5-8c5e-4c5b-aac5-8c156b8f20f9`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg accepted finished product after final inspection
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`

##### Waste flows

No separate inspection-waste flow is prescribed. Reworked rejects remain internal; discarded rejects are recorded by actual metal and physical waste state in the fabrication waste rows.

##### Elementary flows

No direct elementary output is prescribed for this process.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared equipment and multi-product lines | First subdivide meters, production orders, bath additions, waste records and operating time so that exchanges are directly attributable to the covered product family. | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | remaining shared foreground exchanges | If subdivision is not practicable, allocate using a documented physical relationship that drives the exchange, such as verified machine operating time and load for electricity or treated surface area for a plating bath. Use mass only when it demonstrably represents the driver for the co-produced article families. | `eu-pef-2021-2279` |
| `allocation_other_relationship` | no defensible physical relationship | Use another relationship, including economic value, only after documenting why subdivision and a relevant physical relationship are not practicable; report the factor, period, co-products and sensitivity. | `eu-pef-2021-2279` |
| `allocation_scrap_no_avoided_burden` | steel, brass and aluminium scrap outputs | Report scrap at the mass crossing the foreground boundary without subtracting an avoided primary-metal burden in this foreground dataset. Any recycling benefit or circular-footprint treatment belongs to the chosen downstream system model and must be disclosed separately. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `fabrication_finishing` | metal feedstocks and lubricating oil | weighbridge tickets, invoices, issue/return records and stock ledger | product_family, order_id, material_id, alloy_grade, product_state, opening_mass, received_mass, issued_mass, returned_mass, closing_mass | Reconcile physical inventory and production-order issues; retain supplier and grade evidence. | kg | Each receipt and production order; monthly reconciliation | At least 12 consecutive representative months, or every batch for a shorter campaign | All equipment and stores serving the declared product | Sum net consumption by exact material identity and normalize to accepted product mass. | Calibrated scale records, purchase documents, inventory reconciliation and unexplained-loss review |
| `cp_energy_inputs` | `fabrication_finishing`; `inspection_dispatch` | electricity and natural gas | utility meters, submeter logs and equipment operating records | meter_id, start_reading, end_reading, unit, reference_temperature, reference_pressure, equipment_id, operating_time, rated_or_measured_load, product_order | Prefer dedicated meters; otherwise allocate by verified operating time and load and document unrelated users. | MJ for electricity; m3 for natural gas | Meter interval or batch; monthly reconciliation | At least 12 consecutive representative months, or every batch for a shorter campaign | All covered production and inspection equipment | Convert electricity using 1 kWh = 3.6 MJ; normalize each energy carrier separately. | Meter calibration, bills, allocation worksheet and reconciliation to site totals |
| `cp_surface_chemicals` | `fabrication_finishing` | alkaline cleaner, pickling acid, zinc and nickel | purchase, bath make-up, analysis, drag-out recovery and inventory records | bath_id, chemical_identity, concentration, opening_inventory, additions, closing_inventory, recovered_mass, transfer_mass, product_order, treated_area | Close a bath-specific material balance; keep different chemicals and concentrations separate. | kg | Each addition and bath change; monthly balance | Complete reporting period | Each bath serving the covered product | Net consumption equals opening inventory plus additions minus closing inventory, recovery and transfer; normalize to accepted product mass. | Supplier specification, bath-analysis results, calibrated dosing and inventory records |
| `cp_water_and_liquid_wastes` | `fabrication_finishing` | process water and liquid wastes | water meters, tank levels, density measurements, manifests and wastewater analysis | stream_id, source_operation, volume, density, mass, pH, metal_concentration, acid_or_alkali_identity, destination, date | Meter each segregated stream where practicable; convert volume to mass only with a representative measured density. | kg | Continuous or per discharge/bath change; monthly reconciliation | Complete reporting period including all discharges | All cleaning, pickling and plating streams serving covered orders | Keep process water, spent alkaline liquor, spent acid, zinc rinse wastewater and nickel rinse wastewater separate; normalize mass to accepted product. | Meter calibration, tank calibration, laboratory reports and waste manifests |
| `cp_solid_wastes` | `fabrication_finishing` | metal offcuts and steel swarf | bin weights, tare records and shipment manifests | waste_identity, alloy, contamination_state, gross_mass, tare_mass, net_mass, destination, date, product_order | Weigh each segregated waste container and document moisture or oil basis for swarf. | kg | Each container or shipment | Complete reporting period | All covered forming, machining, sharpening and grinding operations | Sum by exact metal and physical state; subtract no recycling credit in the foreground inventory. | Scale calibration, segregation inspection and receiving/recycling manifest |
| `cp_direct_air_emissions` | `fabrication_finishing` | fossil CO2 and hydrogen chloride | fuel meter, combustion factor record, stack flow and concentration measurements | fuel_volume, reference_conditions, factor_id, stack_flow, HCl_concentration, sampling_time, control_status, production_order | Calculate fossil CO2 from collected fuel and a documented applicable factor; calculate HCl mass from representative concentration and stack flow or use direct mass measurement. | kg | Fuel each meter period; HCl at permit or representative campaign frequency | Complete reporting period with operating and control-system coverage | Direct-fired equipment and hydrochloric-acid pickling exhaust serving covered orders | Aggregate only periods with equivalent technology and abatement, then normalize to accepted product. | Fuel records, factor provenance, accredited stack report, control-device logs and coverage statement |
| `cp_intermediate_and_output` | `fabrication_finishing`; `inspection_dispatch` | internal transfer and accepted product | production order, work-in-progress ledger, inspection and scale records | product_family, order_id, transfer_mass, opening_wip, closing_wip, accepted_mass, reject_mass, rework_mass, scale_id | Reconcile transferred, accepted, rejected, reworked and work-in-progress masses by product family. | kg | Each batch or order | Complete reporting period | All covered production and final-inspection points | Adjust transfer for work-in-progress change; accepted output is the denominator for normalization. | Calibrated scales, signed transfer records, inspection disposition and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | every inventory row | normalized exchange = reporting-period exchange / reporting-period accepted finished-product mass | exchange quantity; accepted mass from `cp_intermediate_and_output` | exchange per 1 kg accepted finished product |  |
| `calc_material_consumption` | feedstocks and bath materials | net consumption = opening inventory + receipts or additions - closing inventory - unused return - documented recovery or transfer | stock, purchase, issue, return, recovery and transfer records | kg consumed |  |
| `calc_energy_allocation` | shared electricity or gas meter | covered energy = meter difference × documented allocation fraction; fraction is based on verified operating time and measured or rated load unless a more direct physical driver is demonstrated | meter readings; operating time; load; covered orders | MJ electricity or m3 natural gas | `eu-pef-2021-2279` |
| `calc_liquid_mass` | water and liquid waste recorded by volume | liquid mass = metered volume × representative measured density; retain reference temperature and density sampling basis | volume; density | kg liquid |  |
| `calc_fossil_co2` | direct-fired natural-gas combustion | fossil CO2 mass = collected natural-gas quantity × separately documented applicable combustion factor; do not count upstream electricity emissions | natural-gas record; factor identity and unit conversion | kg fossil CO2 |  |
| `calc_hcl_air` | hydrochloric-acid pickling exhaust | HCl mass = representative measured HCl concentration × dry or wet stack-gas volume on a consistent condition basis; account for control bypass periods separately | concentration; stack flow; sampling duration; moisture/reference conditions | kg HCl to air | `eu-ferrous-metals-bat-2022` |
| `calc_metal_balance` | each declared metal route | metal-balance difference = feedstock metal + deposited coating metal - accepted product metal - segregated scrap - swarf - measured metal in liquid waste - documented inventory change; investigate material differences before release | material inputs, output composition, wastes and inventory change | kg and percent mass-balance difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and feedstocks | Declare product family, part or design, alloy, feedstock form, dimensions, heat-treatment state and finish; UUID identity does not replace these foreground qualifiers. | Product specification, bill of material, supplier certificate and inspection plan |
| `dq_temporal_representativeness` | all foreground exchanges | Use at least 12 consecutive representative months unless the product is a shorter campaign; explain shutdowns, trials, abnormal batches and substitutions. | Reporting-period calendar, production log and exclusion record |
| `dq_meter_and_scale_control` | mass, electricity, gas and water | Use calibrated instruments suitable for the measured range and retain calibration status for the reporting period. | Calibration certificate, verification log and instrument identifier |
| `dq_completeness` | process inventory | Reconcile production, material, energy, water, waste and direct-emission records; disclose excluded exchanges and quantify any cut-off against the accepted-product mass where practicable. | Reconciliation worksheet and signed completeness review |
| `dq_route_specificity` | conditional operations | Mark each heat-treatment, cleaning, pickling and plating route as performed, outsourced or not applicable; do not populate a route-specific row with zero merely because records are missing. | Process flow diagram, routing sheet, supplier operation record and operator confirmation |
| `dq_liquid_stream_identity` | surface-treatment wastes | Keep spent baths and rinse waters separated by operation and dominant chemistry; retain pH, concentration, metal analysis and treatment destination. | Laboratory report, tank/bath identifier and waste manifest |
| `dq_geography_technology` | upstream datasets | Match metal product state, alloy where possible, electricity grid, fuel delivery, geography and production technology; document proxies and sensitivity. | Supplier data, dataset metadata and representativeness assessment |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the exact reference product UUID, Mass property, mass unit group and kg reference unit; reject datasets that omit any required qualifier. | `un-cpc-3-0-2025` |
| `validate_inventory_reconciliation` | process inventory | Confirm that every one of the 26 prescribed atomic rows is present or explicitly marked not applicable under its route condition, and that no plural utility, chemical, packaging, waste or emission selector replaces an atomic exchange. |  |
| `validate_internal_transfer` | process linkage | Reconcile `uninspected_article_output` and `uninspected_article_input` after documented work-in-progress change. |  |
| `validate_metal_balance` | each metal route | Review the metal-balance difference by alloy route and do not release the dataset until unexplained losses, mixed scrap or unrecorded coating transfers are documented and judged acceptable. |  |
| `validate_energy_separation` | electricity and natural gas | Keep electricity and natural gas as separate exchanges; verify electricity conversion and natural-gas reference conditions. | `eu-ferrous-metals-bat-2022` |
| `validate_surface_treatment` | cleaning, pickling and plating | For every performed bath operation, confirm separate chemical input, water input, spent-bath or rinse-waste output, direct HCl emission where applicable, and treatment destination; retain BAT or permit conformance separately from inventory amounts. | `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022` |
| `validate_allocation` | shared processes | Verify the allocation hierarchy, physical driver, factor, co-products, period and sensitivity; reject undocumented mass or economic allocation. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` and `background_dataset` for a declared product family and manufacturing route |
| downstream_use | Foreground supply-chain modelling of covered small metal articles and aggregation into lifecyclemodel systems when product, alloy, finish, geography and technology are compatible. |
| allowed_use | Use for the declared factory-gate product family and route; scale by accepted product mass; combine with compatible upstream feedstock, energy, chemical and treatment datasets. |
| excluded_use | Do not use as a generic proxy for sewing-machine needles, general fasteners, locks, furniture fittings, unrelated ornaments, other alloys or finishes, use-phase performance, packaged retail product or cradle-to-grave comparison without added stages. |
| required_metadata | PCR id and version; reference UUID; product family and part/design; alloy and feedstock form; dimensions; heat treatment; finish and coating; route; performed and outsourced operations; site and geography; reporting period; accepted output; allocation method; packaging status; upstream dataset identities; unresolved UUID disclosures. |
| required_quality_disclosure | Temporal coverage; meter and scale calibration; data completeness; material and internal-transfer reconciliation; shared-meter and shared-line allocation; liquid-stream separation; direct-emission method; supplier-data quality; technological and geographic representativeness; cut-offs; proxy use and sensitivity. |
| update_trigger | Update when product family, alloy, feedstock form, forming technology, heat-treatment fuel, surface-treatment chemistry, coating system, abatement, waste route, supplier geography, electricity mix or allocation basis changes materially, or when more representative data or exact unresolved UUIDs become available. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure*, 30 June 2025, row 42997. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; cached file SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official classification identity and covered-product wording. |
| `us-epa-fabricated-metal-products-1995` | official_guidance | U.S. Environmental Protection Agency, *Profile of the Fabricated Metal Products Industry*, EPA/310-R-95-007, September 1995. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000DGC.TXT (retrieved 2026-09-05) | Original-text process descriptions for shearing, forming, machining, surface preparation, cleaning, pickling, plating, rinsing and associated waste streams. |
| `eu-ferrous-metals-bat-2022` | standard | Commission Implementing Decision (EU) 2022/2110 establishing BAT conclusions for the ferrous metals processing industry, 11 October 2022. https://eur-lex.europa.eu/eli/dec_impl/2022/2110/oj/eng (retrieved 2026-09-05) | Original-text rules for degreasing, pickling, rinsing, water management, lubricant reuse, spent solutions, HCl air emissions and treatment controls. |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, consolidated text of 30 December 2021, Annex I section 4.5. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-05) | Original-text hierarchy for subdivision, system expansion, physical allocation and other allocation relationships. |
