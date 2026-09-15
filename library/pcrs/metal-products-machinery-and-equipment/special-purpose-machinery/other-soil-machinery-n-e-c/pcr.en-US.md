---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-soil-machinery-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other soil machinery, n.e.c.

## 1. Scope and Applicability

This PCR applies to complete agricultural, horticultural or forestry machinery for soil preparation or cultivation, and lawn or sports-ground rollers, that belongs to the residual CPC 44119 subclass and is not separately classified in CPC 44111 through 44115. It covers manufacture from purchased materials and components through fabrication, joining, surface coating when performed, final assembly, factory testing and release of the finished machinery at the factory gate.

The category excludes ploughs; harrows, scarifiers, cultivators, weeders and hoes; seeders, planters and transplanters; manure spreaders and fertilizer distributors; parts sold separately; self-propelled earth-moving machinery; tractors; use, maintenance and end-of-life. A product must not be assigned here merely because its commercial name contains “soil machinery”; the producer shall document why no more specific soil-machinery subclass applies. The process pattern is for complete machinery manufacture and does not represent the manufacture of replacement parts as the reference product.

The bounded representative configuration used to make the minimum component schedule actionable is a non-self-propelled 24-inch by 36-inch steel tow lawn roller of the Agri-Fab 45-01791 type. The manufacturer manual identifies a welded-steel roller drum, scraper bar, two hitch tubes, two hitch brackets, two replaceable plastic bearings, washers, three bolt sizes, lock nuts, a fill plug, cotter pins, a hitch pin and a hair cotter pin. This configuration is a completeness case, not a narrowing of CPC 44119 and not a category-average bill of materials. A different CPC 44119 machine shall retain the residual-classification test and replace the representative schedule with its own model-specific atomic component rows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-soil-machinery-n-e-c |
| classification_refs | CPC 3.0: 44119, Other soil machinery, n.e.c. |
| covered_products | Complete non-self-propelled soil-preparation or cultivation machinery and lawn or sports-ground rollers that are not covered by the named CPC 44111–44115 subclasses |
| excluded_products | Ploughs; harrows, scarifiers, cultivators, weeders and hoes; seeders, planters and transplanters; manure spreaders and fertilizer distributors; separately supplied parts; tractors; self-propelled earth-moving machinery |
| representative_product | A declared complete CPC 44119 machine; the bounded completeness case is a 24-inch by 36-inch non-self-propelled steel tow lawn roller with welded drum, scraper, hitch, bearings, fasteners and fill plug |
| production_route | Factory manufacture from purchased metal products and components by cutting or forming, conditional welding, conditional pretreatment and coating, assembly and testing |
| market_state | Complete finished machinery at the manufacturer’s factory gate, including standard accessories and only the operating fluids actually supplied with the declared product; water or sand added by a user as lawn-roller ballast is outside factory-gate product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete residual soil-working machine or implement ready for its declared soil-preparation, cultivation or rolling function |
| How much | 1 kg of finished machinery at the factory gate |
| How well | Conforms to the declared model, configuration, working width or capacity, attachment or drive interface, applicable safety specification and supplied-accessory list |
| How long or cycle | One completed manufacturing cycle to factory-gate release; expected service life and duty cycle are declared separately and are not part of this mass-based manufacturing reference flow |
| reference_flow_link | `finished_machinery` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other soil machinery, n.e.c. `fb0ebf28-3523-4021-9119-dbfbb0a2f0f0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer and model; specific soil-working function; configuration and working width or capacity; attachment, power or drive interface; principal material grades; coating system; included accessories; installed fluid quantities; net product mass; factory-gate geography and year; allocation and recycled-material claims |

When constructing a foreground data package, every required qualifier shall be stated in dataset metadata, product description, process notes or the reference-flow comment. The public Tiangong reference-flow `generalComment` is empty, so it supplies none of these foreground qualifiers.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net finished-product mass after assembly and filling, excluding reusable transport fixtures and excluding packaging unless it is sold as part of the product. Normalize all inventory quantities to 1 kg of this reference product. |
| `energy_conversion` | Electricity and fuels | Energy or the selected fuel property | MJ, kWh, kg or m3 as recorded | Preserve the metered unit and conversion factor. Convert electricity between kWh and MJ only with 1 kWh = 3.6 MJ; do not convert fuel volume to mass without a documented density and reference conditions. |
| `material_mass` | Purchased materials, consumables, operating fluids and wastes | Mass | kg | Use received or issued mass net of reusable containers. If invoices report pieces, length, area or volume, retain the original record and document the measured or supplier-specific conversion to mass. |
| `direct_emission_mass` | Direct elementary emissions | Mass | kg | Report releases after capture or treatment at the actual release compartment. Do not substitute an emission factor or a differently classified air compartment without documenting the applicable process, control state and calculation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, consumables, energy carriers and operating fluids entering the manufacturing-site foreground boundary |
| starting_condition_role | Gate-to-gate manufacturing starting condition used with verified upstream datasets to construct a cradle-to-factory-gate result |
| product_classification_scope | Complete CPC 44119 machinery only; named CPC 44111–44115 products and separately supplied parts are outside the reference-product scope |
| recursive_input_rule | A purchased component that itself falls within soil-machinery classifications is recorded as one specific component product input with its own upstream dataset; it is not relabelled as the CPC 44119 reference product and its manufacture is not recursively expanded inside this foreground process unless actually performed on site |
| upstream_dataset_requirement | Link each purchased material, component, fuel, electricity supply, water supply, coating and treatment service to a temporally and geographically representative upstream dataset; disclose any proxy and avoid double counting supplier operations already included in the foreground |
| disclosure | Declare site, year, product model and configuration, process technologies, outsourced operations, coating route, welding route, testing fuel, treatment routes, packaging supplied at the gate and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_operations` | foreground_system_boundary | Include on-site material preparation, forming or machining, joining, surface preparation and coating when performed, assembly, operating-fluid fill, factory testing, internal handling and waste or emission control through factory-gate release. | `us-epa-ap42-electric-arc-welding-1995`; `us-epa-misc-metal-surface-coating-tsd-2001` |
| `boundary_purchased_inputs` | foreground_system_boundary | Record each purchased material, component, consumable, fuel, electricity supply and treatment service as an individual technosphere exchange and connect it to an appropriate upstream dataset. |  |
| `boundary_outsourced_steps` | foreground_system_boundary | Include outsourced fabrication, heat treatment, coating or other production services when they contribute to the declared finished product; disclose whether transport to and from the supplier is included. |  |
| `boundary_packaging` | foreground_system_boundary | Include each specific packaging component supplied with the product as a separate inventory exchange; exclude reusable factory fixtures that do not leave the site and document their treatment. |  |
| `boundary_exclusions` | foreground_system_boundary | Exclude product use, maintenance, replacement parts and end-of-life. Exclude capital equipment and building infrastructure unless the study goal explicitly includes them, in which case report them separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_fabrication` | Material preparation, fabrication and joining | required |  | Foreground conversion of purchased metal products and components into the machinery structure and working assemblies | Per 1 kg finished machinery |
| `surface_coating` | Surface preparation and coating | conditional | Include when any part is cleaned, pretreated, painted, powder-coated or otherwise coated within the reporting boundary. | Foreground corrosion-protection and finishing operation | Per 1 kg finished machinery and declared coated area |
| `final_assembly_testing` | Final assembly, filling, testing and release | required |  | Foreground assembly and factory-gate release of the finished reference product | Per 1 kg finished machinery |

### Process: Material preparation, fabrication and joining (`material_fabrication`)

#### Inputs

##### Product flows

###### Further-worked alloy steel plate (`fabrication_steel_plate`)

Record the mass of the selected Steel Plate input only when this further-worked alloy-steel plate state is present in the bill of materials. Other steel grades, sections, castings and non-ferrous products shall be added as separate atomic rows rather than aggregated here.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the process, including measured offcuts that arise within the foreground
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Flux-cored welding wire (`fabrication_flux_cored_wire`)

Record this exchange only for flux-cored arc welding. Solid wire, covered electrodes and other filler metals require separate rows with exact identities.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: measured wire issued less unopened returns for the declared welding route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Carbon dioxide shielding gas (`fabrication_carbon_dioxide_shielding`)

Record supplied carbon dioxide product only when used as a welding shielding gas. Other shielding gases and mixtures require separate atomic rows.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: supplier delivery mass or cylinder consumption allocated from documented opening and closing inventories
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Fabrication electricity (`fabrication_electricity`)

Record purchased electricity consumed by cutting, forming, machining, welding, ventilation and related fabrication equipment within this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated site-meter electricity using documented machine-hours and rated or measured loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Natural gas for direct fabrication heat (`fabrication_natural_gas`)

Record gaseous natural gas only when direct-fired heating or heat treatment assigned to this process is inside the boundary. The same metered fuel quantity shall feed the direct-combustion carbon calculation; generic space heat is excluded unless process-specific metering or a documented causal allocation establishes its manufacturing share.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered volume at documented reference conditions, net of unrelated site uses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Fabrication process water (`fabrication_process_water`)

Record process water only for a declared wet fabrication route. For the minimum route this row is limited to measured make-up water in a documented closed loop with no liquid discharge from the fabrication process. If single-pass water, bath dumping, drag-out or another liquid leaves the process, add each specific spent cutting fluid, cleaning solution, rinse or treatment stream as its own atomic output row; a generic wastewater row is not acceptable.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up or delivered water mass for this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel fabrication scrap (`fabrication_steel_scrap`)

Record ferrous offcuts, turnings and rejected steel parts leaving this process as waste. Keep stainless, alloy-specific, contaminated and wire wastes separate when those distinctions affect recovery or treatment.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: measured outbound scrap mass corrected for opening and closing scrap-bin inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Flux-cored welding slag (`fabrication_welding_slag`)

Record the solid slag removed from flux-cored welds when the declared wire and welding procedure generate a removable slag layer. Grinding dust, spent blasting media and general floor sweepings are different wastes and require separate atomic rows.

- Selected flow: Flux-cored arc-welding slag
- Flow property / unit: Mass / kg
- Amount rule: measured collected slag mass corrected for opening and closing dedicated-container stock and excluding base-metal offcuts already recorded as steel scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Welding particulate matter up to 10 micrometres to air (`fabrication_pm10_air`)

Record direct PM10 released after capture and control when electric-arc welding occurs. The Tiangong UUID remains unresolved because the available exact-size candidate is restricted to an urban high-stack compartment; the data package shall declare the actual release compartment and shall not use that candidate by assumption.

- Selected flow: Particulate matter, aerodynamic diameter up to 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: measured post-control release mass for the declared welding process, electrode, base metal and operating conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Fossil carbon dioxide from fabrication heat (`fabrication_combustion_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide released when the `fabrication_natural_gas` quantity is combusted inside this process. Keep this release separate from shielding-gas loss and factory-testing combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct release, or a documented fuel-carbon balance using metered gas, supplier carbon content and oxidation evidence; report only the actual release compartment and replace this flow when a more specific compartment applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

###### Fossil-origin carbon dioxide shielding-gas release (`fabrication_shielding_fossil_carbon_dioxide`)

Use this row only for the portion of supplied shielding carbon dioxide whose supplier evidence establishes fossil origin and that is released to the applicable air compartment. Do not infer fossil origin from the product-flow name.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: supplied fossil-origin shielding-gas mass minus cylinder residual returned to the supplier, documented recovery, mass retained in product and other measured destinations; use the exact actual air-compartment flow when known
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

###### Biogenic-origin carbon dioxide shielding-gas release (`fabrication_shielding_biogenic_carbon_dioxide`)

Use this row only for the portion of supplied shielding carbon dioxide whose supplier evidence establishes biogenic origin. Split mixed-origin supplies and do not combine this release with fossil carbon dioxide.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: supplied biogenic-origin shielding-gas mass minus cylinder residual returned to the supplier, documented recovery, mass retained in product and other measured destinations; use the exact actual air-compartment flow when known
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-ap42-electric-arc-welding-1995`

### Process: Surface preparation and coating (`surface_coating`)

#### Inputs

##### Product flows

###### Paint applied to machinery (`coating_paint`)

Record the mass of paint entering original-equipment coating. Resin system, solvent or water basis, solids content, colour and supplier are required qualifiers; powder coating and pretreatment chemicals require separate rows.

- Selected flow: Paint `b2aa1a35-1823-4b13-96db-d5b89eda2db5`
- Flow property / unit: Mass / kg
- Amount rule: measured paint issued less sealed returns, with recovered overspray separately recorded when reused
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `us-epa-misc-metal-surface-coating-tsd-2001`

###### Coating-line process water (`coating_process_water`)

Record process water only when aqueous cleaning, pretreatment or rinsing is actually used. Closed-loop circulation is not consumption; record only measured make-up and separately account for each bath dump, rinse discharge, drag-out destination and evaporative loss. A dry or nonaqueous route shall mark this row and the associated aqueous chemical and liquid-output rows not applicable with process evidence.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up and single-pass water supplied to the coating line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:

###### Coating-line electricity (`coating_electricity`)

Record purchased electricity used by pretreatment pumps, application equipment, ventilation, abatement, flash-off and curing equipment assigned to the included coating route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-submetered electricity; otherwise an allocation of reconciled coating-area electricity using measured equipment load and operating time, kept separate from fabrication and final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Natural gas for coating curing (`coating_natural_gas`)

Record gaseous natural gas only when a direct-fired coating oven or other route-specific thermal step consumes it. Electricity, steam and other fuels are separate atomic exchanges and shall not be combined here.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: oven or coating-line metered volume at documented reference conditions; otherwise allocation by measured burner operating time and rated or measured load after reconciliation to the site gas meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Sodium hydroxide for alkaline pretreatment (`coating_sodium_hydroxide`)

Record sodium hydroxide only when it is a documented constituent or replenishment chemical for an aqueous alkaline cleaning or pretreatment bath. Other cleaning agents, acids, conversion-coating chemicals and bath additives require their own exact rows.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active sodium-hydroxide mass received or issued, not gross solution mass; preserve concentration, solution mass and assay calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste paint (`coating_waste_paint`)

Record discarded paint, captured overspray and unusable mixed paint that leave the coating process as waste. Separate aqueous paint waste, solvent-rich waste and treatment sludge when their physical state or treatment route differs.

- Selected flow: Waste paint `d202996c-dc0d-4d90-a161-87a21f0e9616`
- Flow property / unit: Mass / kg
- Amount rule: measured waste paint mass at transfer to on-site or off-site treatment, net of reusable containers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `us-epa-misc-metal-surface-coating-tsd-2001`

###### Waste alkaline liquor from metal pretreatment (`coating_waste_alkaline_liquor`)

Record spent alkaline bath solution only when an aqueous alkaline bath is dumped or transferred for treatment. Keep it separate from rinse discharge, paint waste, treatment sludge and unused chemical returned to the supplier.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: measured transferred spent-liquor mass corrected for dedicated-tank opening and closing stock; record water content, active alkalinity, contaminants and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Aqueous metal-pretreatment rinse discharge (`coating_rinse_discharge`)

Record the measured liquid leaving a declared aqueous metal-pretreatment rinse stage for treatment or discharge. This is not a generic wastewater placeholder: identify the rinse stage, chemistry, counter-current or single-pass configuration, pollutant load and destination; separate other washwaters and bath dumps.

- Selected flow: Aqueous rinse discharge from metal surface pretreatment
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving the rinse stage, corrected for opening and closing rinse-tank stock and internal recirculation; convert volume only with measured density and reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Non-methane volatile organic compounds to air (`coating_nmvoc_air`)

Record post-control NMVOC releases from organic-solvent pretreatment, application, flash-off and curing when such materials are used.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release or a documented site-specific mass balance using formulation VOC content, captured waste, recovery and destruction records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-epa-misc-metal-surface-coating-tsd-2001`

###### Fossil carbon dioxide from coating-oven combustion (`coating_combustion_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide released when `coating_natural_gas` is combusted in the coating route. Do not include upstream fuel production or electricity emissions in this direct row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct release, or a documented carbon balance using the matched coating gas quantity, supplier carbon content and oxidation evidence; select the exact actual air compartment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Final assembly, filling, testing and release (`final_assembly_testing`)

#### Inputs

##### Product flows

The following component rows implement the complete Agri-Fab 45-01791-type representative schedule. The manual counts are completeness checks, not normalized amounts: record the measured mass of each exact part family for the declared model. For a part made inside the foreground, record its material and process burdens plus an internal transfer, and do not also count it as a purchased component. For a different CPC 44119 machine, replace this schedule with an equally explicit model-specific schedule while preserving the residual classification test.

| representative part | manual quantity | required row |
| --- | ---: | --- |
| welded steel roller assembly | 1 | `assembly_roller_assembly` |
| scraper bar | 1 | `assembly_scraper_bar` |
| hitch tube | 2 | `assembly_hitch_tube` |
| hitch bracket | 2 | `assembly_hitch_bracket` |
| replaceable plastic bearing | 2 | `assembly_plastic_bearing` |
| 5/16-18 × 3 inch hex bolt | 2 | `assembly_hex_bolt_5_16x3` |
| 5/16-18 × 2-1/4 inch hex bolt | 2 | `assembly_hex_bolt_5_16x2_25` |
| 5/16-18 × 1-3/4 inch hex bolt | 2 | `assembly_hex_bolt_5_16x1_75` |
| 5/16-18 hex lock nut | 6 | `assembly_hex_lock_nut` |
| 1 inch flat washer | 2 | `assembly_flat_washer` |
| lawn-roller fill plug | 1 | `assembly_fill_plug` |
| 5/32 × 1-1/2 inch cotter pin | 2 | `assembly_cotter_pin` |
| hitch pin | 1 | `assembly_hitch_pin` |
| 1/8 inch hair cotter pin | 1 | `assembly_hair_cotter_pin` |

###### Welded steel roller assembly (`assembly_roller_assembly`)

Record the complete welded steel drum-and-shaft assembly identified as Roller Ass'y for the representative configuration. Water or sand added during use is not part of this factory-gate component.

- Selected flow: Welded steel lawn-roller drum assembly
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of the one exact roller assembly installed per representative machine, separated into purchased input or documented internal transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### Scraper bar (`assembly_scraper_bar`)

Record the exact scraper bar installed in the representative roller; do not combine it with the drum or hitch tubes.

- Selected flow: Lawn-roller scraper bar
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of the one scraper bar installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### Hitch tube (`assembly_hitch_tube`)

Record the model-specific hitch tube as one component identity; the representative configuration uses two identical pieces.

- Selected flow: Model-specific lawn-roller hitch tube
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the two exact hitch tubes installed per representative machine, retaining per-piece mass and count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### Hitch bracket (`assembly_hitch_bracket`)

Record the model-specific hitch bracket separately from hitch tubes and pins; the representative configuration uses two identical pieces.

- Selected flow: Model-specific lawn-roller hitch bracket
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the two exact hitch brackets installed per representative machine, retaining per-piece mass and count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### Replaceable plastic bearing (`assembly_plastic_bearing`)

Record the replaceable plastic bearing separately from the steel washers and shaft; the representative configuration uses two identical bearings.

- Selected flow: Plastic lawn-roller plain bearing
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the two exact plastic bearings installed per representative machine, with polymer identity recorded from the supplier specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### 5/16-18 × 3 inch hex bolt (`assembly_hex_bolt_5_16x3`)

Record only the declared 5/16-18 × 3 inch hex bolts; the representative configuration uses two.

- Selected flow: Hex bolt, 5/16-18 × 3 inch
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the two exact bolts installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### 5/16-18 × 2-1/4 inch hex bolt (`assembly_hex_bolt_5_16x2_25`)

Record only the declared 5/16-18 × 2-1/4 inch hex bolts; the representative configuration uses two.

- Selected flow: Hex bolt, 5/16-18 × 2-1/4 inch
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the two exact bolts installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### 5/16-18 × 1-3/4 inch hex bolt (`assembly_hex_bolt_5_16x1_75`)

Record only the declared 5/16-18 × 1-3/4 inch hex bolts; the representative configuration uses two.

- Selected flow: Hex bolt, 5/16-18 × 1-3/4 inch
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the two exact bolts installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### 5/16-18 hex lock nut (`assembly_hex_lock_nut`)

Record only the declared 5/16-18 hex lock nuts; the representative configuration uses six.

- Selected flow: Hex lock nut, 5/16-18
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the six exact lock nuts installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### 1 inch flat washer (`assembly_flat_washer`)

Record only the declared 1 inch flat washers; the representative configuration uses two.

- Selected flow: Flat washer, 1 inch
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the two exact washers installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### Lawn-roller fill plug (`assembly_fill_plug`)

Record the exact fill plug installed in the representative roller and preserve its polymer or elastomer specification.

- Selected flow: Lawn-roller fill plug
- Flow property / unit: Mass / kg
- Amount rule: measured mass of the one exact plug installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### 5/32 × 1-1/2 inch cotter pin (`assembly_cotter_pin`)

Record only the declared 5/32 × 1-1/2 inch cotter pins; the representative configuration uses two.

- Selected flow: Cotter pin, 5/32 × 1-1/2 inch
- Flow property / unit: Mass / kg
- Amount rule: measured combined mass of the two exact cotter pins installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### Hitch pin (`assembly_hitch_pin`)

Record the exact hitch pin installed in the representative roller separately from its retaining hair cotter pin.

- Selected flow: Lawn-roller hitch pin
- Flow property / unit: Mass / kg
- Amount rule: measured mass of the one exact hitch pin installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### 1/8 inch hair cotter pin (`assembly_hair_cotter_pin`)

Record only the declared 1/8 inch hair cotter pin used to retain the hitch pin.

- Selected flow: Hair cotter pin, 1/8 inch
- Flow property / unit: Mass / kg
- Amount rule: measured mass of the one exact hair cotter pin installed per representative machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources: `agri-fab-steel-tow-roller-45-01791`

###### Assembly and test electricity (`assembly_electricity`)

Record purchased electricity used for assembly tools, material handling assigned to the product, test rigs, ventilation and release inspection.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented allocation of site-meter electricity to assembly and testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Installed hydraulic fluid (`assembly_hydraulic_fluid`)

The representative tow roller has no hydraulic circuit, so this row is not applicable to that configuration. For a declared hydraulic CPC 44119 machine, record new hydraulic fluid that remains in the delivered product or is consumed during testing only together with the exact cylinder, hose, valve, reservoir and coupling rows present in that model. Report drained test fluid as a separate waste flow when it does not remain in the product.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: measured fill mass plus test consumption less recovered uncontaminated fluid returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Hydraulic cylinder (`assembly_hydraulic_cylinder`)

This row is not applicable to the representative tow roller. Include it for a hydraulic variant only when the model-specific BOM identifies a complete hydraulic cylinder; cylinder parts and pneumatic cylinders are separate identities.

- Selected flow: Complete hydraulic cylinder assembly
- Flow property / unit: Mass / kg
- Amount rule: measured mass of each exact complete hydraulic cylinder installed in the delivered model, retaining part number, count and supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources:

###### Hydraulic hose (`assembly_hydraulic_hose`)

This row is not applicable to the representative tow roller. Include it for a hydraulic variant only when the delivered machine contains vulcanized-rubber hydraulic hose; plastic hose and loose hose without fittings require separate identities.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of the exact installed hydraulic hoses, retaining specification, fitting boundary, count and supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_schedule`
- Sources:

###### Diesel fuel for factory testing (`assembly_diesel_fuel`)

Record diesel fuel only when an engine, hydraulic power unit or towing test consumes diesel inside the manufacturing boundary. Fuel retained in a delivered tank is included and disclosed separately from fuel combusted during testing in the underlying record.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: measured fuel issued to the tested product or test rig less recovered fuel, separated into combusted and delivered-fill quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished other soil machinery (`finished_machinery`)

This is the complete reference product released at the factory gate after assembly, filling, inspection and testing.

- Selected flow: Other soil machinery, n.e.c. `fb0ebf28-3523-4021-9119-dbfbb0a2f0f0`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg by reference-flow normalization from measured net finished-product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg finished machinery at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from factory testing (`assembly_fossil_carbon_dioxide`)

Record direct fossil carbon dioxide released to air when fossil fuel is combusted in factory testing. Upstream electricity emissions are excluded from this direct row and belong in the electricity supply dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured post-combustion release mass for testing operations; if calculated, preserve fuel carbon-content and oxidation records in the data package
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | foreground_burden_allocation | Avoid allocation by metering fabrication, coating, assembly, testing and treatment operations separately for the declared product family wherever practicable. |  |
| `allocation_shared_operations` | foreground_burden_allocation | When shared operations cannot be subdivided, allocate measured burdens using the causal driver recorded for that operation, such as machine time, coated area, weld length or measured energy; use mass only when no more causal record exists and disclose the sensitivity. |  |
| `allocation_scrap` | foreground_burden_allocation | Report scrap and other waste at the point it leaves the foreground. Do not subtract an avoided virgin-material burden inside the manufacturing inventory; identify the chosen recycling or treatment modelling convention separately so downstream models can avoid double counting. |  |
| `allocation_rework` | foreground_burden_allocation | Assign rework and rejected-part burdens to the conforming output of the same production period unless the rejected material leaves as a separately modelled co-product; disclose any alternative treatment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `material_fabrication`; `surface_coating`; `final_assembly_testing` | Purchased materials, welding consumables, paint, process chemicals and installed fluid | Weigh tickets, purchase receipts, supplier invoices, issue ledgers, unused-material returns and opening/closing usable stock | exact material identity; grade or formulation; supplier; receipts; supplier returns; outbound unused material; opening usable stock; closing usable stock; issue quantity when an issue-ledger boundary is used; product model; period | Choose one stock boundary. For a storeroom balance use receipts and usable-stock changes; for a process-issue balance use issues less unused returns. Never add opening stock to issues or count the same transfer in both equations. | kg | Each receipt or issue; reconcile monthly | At least one representative production year, with shorter campaigns disclosed | All manufacturing sites in the dataset | Storeroom consumption = receipts + opening usable stock − closing usable stock − supplier returns − outbound unused material. Process-issue consumption = issues − returns to storeroom. Reconcile the two but use only one as the exchange quantity. | Calibrated scale records, invoices, stock reconciliation, issue logs and material specifications |
| `cp_component_schedule` | `final_assembly_testing` | Exact purchased or internally transferred assemblies and components | Model BOM, part drawings, supplier invoices, receiving weights, calibrated part weights and internal transfer records | part number; exact component name; material or composition; supplier or upstream process; piece count; mass per piece; installed mass; rejected count; opening and closing WIP; model and serial or batch | Reconcile every component in the declared model schedule. Record a purchased component as a technosphere input; record a site-made component as an internal transfer backed by its material and processing records; never do both. | kg with piece count retained | Each production batch; verify each model revision | Full period and every included model configuration | Assembly line and every supplying foreground process | Installed component mass = accepted count × verified mass per piece. Purchased receipts and internal transfers are separate ledgers; their model-specific installed masses shall reconcile to the finished-product BOM. | Approved BOM revision, supplier specification, receiving or part weights, transfer traveller and assembly completion record |
| `cp_energy_records` | `material_fabrication`; `surface_coating`; `final_assembly_testing` | Process-specific electricity, natural gas and diesel fuel | Utility meters, process submeters, fuel issue records, oven logs and test logs | meter identifier; process; opening and closing readings; unit; reference conditions for gas; fuel issued and recovered; retained versus combusted fuel; equipment load; operating time; product output | Prefer separate fabrication, coating and assembly/test submetering. Otherwise reconcile the site meter once and allocate each non-overlapping process share by measured load and operating time. | MJ; kWh; m3; kg | Meter interval or each fuel issue; aggregate monthly | At least one representative production year | All included fabrication, coating, assembly and test areas | Each process energy share is calculated once and all process shares plus excluded documented uses reconcile to the site total. Report delivered fuel fill separately from combusted fuel. | Meter calibration, invoices, issue logs, burner or test logs and reconciliation to site totals |
| `cp_water_records` | `material_fabrication`; `surface_coating` | Closed-loop make-up, single-pass supply, bath solution and specific liquid outputs | Water meters, bath-volume records, tank inventories, discharge meters and transfer manifests | source; stage; opening and closing tank stock; make-up; fresh supply; internal recirculation; evaporation estimate or measurement; drag-out; exact bath dump or rinse output; density; destination; product output | Build a stage-specific water balance. Internal recirculation is not consumption. Fabrication may use the minimum closed-loop make-up row only when records prove no liquid process output; every coating bath dump and rinse discharge is separately identified. | kg or m3 with documented density conversion | Meter interval, bath dump or batch; reconcile monthly | At least one representative production year | Every included wet stage | Fresh supply + opening liquid stock = closing liquid stock + exact liquid outputs + measured or justified evaporation + water retained in product or waste. Investigate the balance gap and do not hide it in generic wastewater. | Meter calibration, bath log, density record, discharge or transfer record and water-balance closure |
| `cp_waste_records` | `material_fabrication`; `surface_coating`; `final_assembly_testing` | Each exact generated waste, including steel scrap, welding slag, waste paint, waste alkaline liquor and rinse discharge | Weigh tickets, dedicated bin or tank inventories, manifests and treatment receipts | exact waste identity; source stage; physical state; mass; opening and closing waste stock; internal recovery; outbound transfer; destination; treatment route; hazardous classification | Weigh or meter at transfer, keep each waste identity separate and reconcile its accumulation without mixing purchased input stock | kg | Each transfer; reconcile monthly | At least one representative production year | All included production and treatment areas | Waste generated = outbound transfer + closing waste stock − opening waste stock + documented internal recovery from that waste stock. Exported waste = outbound transfer only. Report both and use generated waste as the process-output exchange unless the modelling convention explicitly requires the exported boundary. | Calibrated scales or meters, signed manifests, treatment receipts and waste-classification records |
| `cp_direct_emissions` | `material_fabrication`; `surface_coating`; `final_assembly_testing` | PM10, NMVOC, combustion carbon dioxide and shielding-gas carbon dioxide released to air | Stack or room-exhaust measurements, continuous monitoring, formulation balances, fuel-carbon records, supplier carbon-origin certificates and gas-cylinder inventories | pollutant identity; fossil or biogenic origin; release compartment; flow and concentration or mass; sampling period; control status; formulation VOC; captured waste; supplied shielding-gas mass and cylinder residual; fuel consumed; fuel unit and, when needed, density at stated reference conditions; carbon mass fraction; carbon-origin fraction; oxidation fraction or carbon in incomplete-combustion products and retained carbon; production output | Use validated direct measurements when available. For supplied shielding carbon dioxide and coating constituents that remain the same substance, use an unchanged-species loss balance only when every input, return, recovery, retention, captured output, destruction term and stock change is documented. For carbon dioxide formed by fuel combustion, use the separate combustion-carbon calculation and never treat reacted fuel as destroyed pollutant. Split fossil and biogenic carbon, keep fabrication heat, coating-oven and factory-test sources separate, and do not mix release compartments. | kg | Each compliance test, gas issue or representative campaign; continuous data aggregated monthly | Representative operating modes across the production year | Every included release point and fugitive source | Sum post-control releases by substance, origin, source and actual compartment, then divide by net kg conforming product. Calculate unchanged-species loss and combustion formation separately; do not count formed combustion products again in a supplied-substance balance. | Sampling report, calibration, detection limits, fuel or gas certificate, cylinder reconciliation, control-efficiency evidence and balance closure |
| `cp_finished_product_mass` | `final_assembly_testing` | Finished reference product | Final inspection and shipping mass records | serial or batch; model; configuration; included accessories; installed fluid; gross mass; packaging or fixture tare; net mass; release date | Weigh complete released product or use verified model-specific mass with periodic scale confirmation | kg | Each unit or statistically justified lot | Full production period represented by the inventory | Every included model and site | Sum net conforming finished-product mass; normalize inventory to 1 kg | Calibrated scale certificate, product specification and release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | Normalized amount = process-period exchange amount / net conforming finished-product mass for the same period. | exchange amount; net conforming finished-product mass | exchange per 1 kg finished machinery |  |
| `calc_purchased_input_consumption` | Purchased materials, components and fuels | Storeroom-basis consumption = receipts + opening usable stock − closing usable stock − supplier returns − outbound unused material. If the process boundary instead uses an issue ledger, process consumption = issues − unused returns to storeroom. Reconcile the ledgers and select one quantity; never add opening stock to issues. | receipts; usable opening and closing stock; supplier returns; outbound unused material; issues; returns to storeroom | one non-duplicated consumed-input amount |  |
| `calc_internal_component_transfer` | Site-made components transferred between foreground processes | Upstream transfer out + opening in-transit or WIP = downstream transfer in + closing in-transit or WIP + separately identified transfer loss. A site-made component is not also a purchased input. | upstream transfer; downstream receipt; opening and closing WIP or in-transit stock; exact transfer loss | reconciled internal movement and disclosed gap |  |
| `calc_waste_generation` | Each exact waste identity | Waste generated = outbound waste + closing dedicated waste stock − opening dedicated waste stock + documented internal recovery from that waste stock. Exported waste = outbound waste only. Do not enter exported waste a second time as generation. | outbound transfer; opening and closing waste stock; internal recovery | generated waste and separately disclosed exported waste |  |
| `calc_shared_operation_allocation` | Shared fabrication, coating, assembly or testing | Allocate the reconciled shared amount by the documented causal driver for the same period; the shares shall sum to one. | shared amount; product-specific causal-driver totals | product-specific exchange amount |  |
| `calc_emission_release` | Supplied shielding carbon dioxide and coating constituents released unchanged to air | Unchanged-species post-control release = supplied substance + opening usable stock − closing usable stock − returned or recovered − retained in product − captured in waste − destroyed by documented control. Apply by substance, fossil or biogenic origin and actual compartment. Do not apply this loss balance to fuel combustion, because combustion forms carbon dioxide from fuel carbon. Do not use the balance if any material term is unmeasured. | supplied substance; opening and closing usable stock; origin; retained amount; returned or recovered amount; captured amount; documented control destruction; compartment | unchanged post-control substance mass by origin and compartment | `us-epa-ap42-electric-arc-welding-1995`; `us-epa-misc-metal-surface-coating-tsd-2001` |
| `calc_combustion_carbon_dioxide` | Carbon dioxide formed by fabrication heat, coating-oven and factory-test fuel combustion | Prefer a validated direct carbon-dioxide measurement. Otherwise, for each source and carbon origin, formed carbon dioxide = consumed fuel mass × verified fuel carbon mass fraction × verified fossil or biogenic origin fraction × documented oxidation fraction × 44/12. When fuel is recorded by volume, convert it to mass only with a measured or supplier-specific density at stated reference conditions. As an alternative to an oxidation fraction, subtract carbon measured in carbon monoxide, methane, soot or ash, product retention and other documented unoxidized destinations from consumed fuel carbon before multiplying by 44/12; never use both adjustments for the same carbon, subtract reacted fuel as destroyed pollution, or count the formed carbon dioxide in another balance. Report each source in its actual compartment. | consumed fuel mass or measured volume and density; carbon mass fraction; fossil or biogenic origin fraction; oxidation fraction or carbon in incomplete-combustion and retained destinations; direct measurement; source; compartment | formed carbon-dioxide mass by source, origin and compartment |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Demonstrate that the complete product is residual CPC 44119 and not one of the named CPC 44111–44115 products or a separately supplied part. | Product specification, catalogue description, engineering drawing and classification rationale |
| `dq_completeness` | Foreground inventory | Reconcile the declared model-specific component schedule, purchased materials, internal component transfers, product output, exact wastes and direct releases. For the representative roller, verify every manual-listed part family and its count; for another CPC 44119 model, replace the schedule with its complete atomic BOM rather than adding an umbrella component row. | Approved bill of materials, part-count reconciliation, purchase and internal-transfer records, waste manifests, water balance and documented mass-balance gap |
| `dq_temporal` | All foreground records | Use a representative production year or full campaign; disclose ramp-up, shutdown, prototype or abnormal production and explain exclusions. | Dated meters, production logs and reconciliation period |
| `dq_technology` | Conditional routes | Declare welding process and consumable, removable slag, shielding-gas carbon origin and loss, coating formulation and control, coating energy and oven fuel, wet-stage bath and rinse closure, hydraulic configuration, testing fuel and release-point configuration. | Process specifications, gas-origin certificates, formulation and bath sheets, equipment, BOM and control-system records |
| `dq_geography` | Upstream links and direct releases | Match electricity mix, fuels, materials, water and treatment datasets to the manufacturing geography and record the actual elementary-flow compartment. | Supplier geography, utility contract, treatment destination and release-point record |
| `dq_uncertainty` | Allocated or calculated values | Preserve raw values, conversion factors, allocation drivers and uncertainty or data-quality limitations; do not replace missing records with the provisional range needs in the manifest. | Calculation workbook or machine-readable derivation and reviewer trace |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | foreground_dataset_conformance | Confirm that the reference product is a complete CPC 44119 product, the Tiangong reference UUID is used, and all required product qualifiers are present. | `un-cpc-3-0-structure-2025` |
| `validation_reference_mass` | foreground_dataset_conformance | Confirm that net conforming product mass is positive, the inventory is normalized to exactly 1 kg output, and packaging or reusable fixture tare is treated consistently. |  |
| `validation_process_coverage` | foreground_dataset_conformance | Confirm that all required processes are represented and that each conditional process or row is either included with data or explicitly marked not applicable with evidence. Coating shall close electricity or thermal energy, direct combustion, aqueous chemical, bath, rinse and water-balance routes; fabrication shall close fuel combustion, shielding-gas origin and release, welding slag and wet-route outputs. |  |
| `validation_atomic_inventory` | foreground_dataset_conformance | Confirm that every inventory card is one physical, chemical, waste or elementary exchange. Verify every part family in the representative or replacement model-specific component schedule, and reject umbrella fastener, component, energy, water, wastewater, waste or emissions rows. | `agri-fab-steel-tow-roller-45-01791` |
| `validation_uuid_property` | foreground_dataset_conformance | Confirm each populated Tiangong UUID by public state-100 identity, flow type, classification, property and unit group; keep `fabrication_pm10_air` unresolved until an exact release-compartment identity is available. |  |
| `validation_reconciliation` | foreground_dataset_conformance | Confirm the purchased-input, issue-ledger, internal-transfer, waste-generation, exported-waste, water and emission equations close separately for the declared period. Verify unchanged supplied-substance loss separately from combustion-product formation, including the 44/12 carbon-to-carbon-dioxide conversion and either oxidation fraction or incomplete-combustion carbon destinations. Confirm that reacted fuel is not subtracted as destroyed pollution and that opening inventory, issues, generated waste, outbound waste and formed combustion products are not double-counted; investigate and disclose unexplained gaps rather than forcing balance. |  |
| `validation_double_counting` | foreground_dataset_conformance | Confirm that upstream datasets exclude foreground operations already recorded and that recycling credits, outsourced services and transport are not counted twice. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for complete other soil machinery, n.e.c. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-system modelling of declared CPC 44119 machinery when product configuration, factory-gate boundary, geography, technology and period are compatible |
| excluded_use | Direct representation of ploughs, harrows, cultivators, seeders, planters, transplanters, manure spreaders, fertilizer distributors, separately sold parts, self-propelled earth-moving machinery, use-phase service, maintenance or end-of-life |
| required_metadata | PCR id and version; CPC rationale; manufacturer and model; function and configuration; net mass; working width or capacity; drive interface; complete model-specific component schedule and part masses; principal material grades; welding and coating routes; included accessories and fluids; site and year; upstream geography; allocation; treatment and release compartments |
| required_quality_disclosure | Foreground coverage; purchased-input, internal-transfer, waste and water reconciliations; allocation shares; proxy datasets; omitted flows; mass-balance gap; measurement uncertainty; conditional-route evidence; all unresolved inventory UUIDs and unresolved quantitative range evidence |
| update_trigger | Change in product classification, bill of materials, model mass, manufacturing site, principal process technology, welding consumable, coating system, energy supply, testing route, allocation method, waste treatment, emission controls or availability of an exact unresolved flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 Structure, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-10 | CPC 44119 identity and separation from CPC 44111–44115; does not support manufacturing quantities or life-cycle boundaries |
| `us-epa-ap42-electric-arc-welding-1995` | Official guidance (`official_guidance`) | U.S. EPA, AP-42 Chapter 12.19 Electric Arc Welding, Final Section, January 1995, https://www.epa.gov/sites/production/files/2020-11/documents/c12s19.pdf, retrieved 2026-09-11 | Welding process, consumable electrode and shielding-gas collection; direct particulate and gaseous-emission inclusion and operating qualifiers; no emission factor adopted |
| `us-epa-misc-metal-surface-coating-tsd-2001` | Official guidance (`official_guidance`) | U.S. EPA, National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document, agricultural and construction machinery industry, 2001 compilation, https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF, retrieved 2026-09-11 | Applicability of surface coating to farm machinery and conditional pretreatment, coating application, flash-off, curing, VOC and HAP emission points; no quantitative range adopted |
| `agri-fab-steel-tow-roller-45-01791` | Official manufacturer publication (`official_guidance`) | Agri-Fab, 24 × 36 Steel Tow Roller Model 45-01791 Owner's Manual and Parts List, Form No. 48362 (REV. 5/02), https://www.agri-fab.com/Portals/0/Manuals/IPL_45-01791.pdf, retrieved 2026-09-11 | Bounded representative lawn-roller configuration, welded-steel drum specification, shipped mass context, assembly sequence, and exact component names and piece counts; does not support category-wide masses, ranges or manufacturing energy |
