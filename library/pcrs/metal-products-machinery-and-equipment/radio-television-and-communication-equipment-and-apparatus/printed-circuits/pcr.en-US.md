---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.printed-circuits
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Printed circuits

## 1. Scope and Applicability

This PCR applies to finished, unpopulated printed circuits supplied as rigid, flexible, or rigid-flex boards or circuits. It covers single-sided, double-sided, and multilayer constructions and additive, semi-additive, subtractive, or mixed conductor-formation routes. The product carries a specified conductive pattern on or within an insulating base and is ready for component assembly after the declared solder mask, legend, surface finish, profiling, inspection, and electrical testing steps.

The PCR covers the manufacture of the unpopulated printed circuit from purchased or internally produced base materials, laminates, copper foils, bonding materials, process chemicals, and other declared inputs through saleable printed circuit output at the manufacturing gate. It does not cover mounting or soldering electronic components, printed circuit board assemblies (PCBAs), semiconductor fabrication, separate electronic components, bare laminates without a formed circuit, waste printed circuits, or downstream equipment assembly and use.

Layer count, rigid or flexible construction, substrate and resin system, halogen and flame-retardant status, board thickness, copper weight and conductor density, hole and interconnect technology, surface finish, solder mask, panel format and utilization, quality class, production geography, manufacturing route, and application class can materially change the inventory. Every conforming foreground data package shall declare these facts rather than treating a narrow board design as representative of all printed circuits.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.printed-circuits |
| classification_refs | CPC 3.0: 47130, exact classification context |
| covered_products | Finished unpopulated rigid, flexible, and rigid-flex printed circuits; single-sided, double-sided, and multilayer printed circuits; boards made by additive, semi-additive, subtractive, or mixed routes |
| excluded_products | Populated PCBAs and printed wiring assemblies; mounted electronic components; semiconductors; unprocessed laminates and copper-clad panels without a formed circuit; electronic equipment; waste or scrap printed circuits; treatment services for waste boards |
| representative_product | One kilogram net mass of saleable, finished, unpopulated printed circuits at the manufacturing gate |
| production_route | Base-material and panel preparation; lamination when applicable; drilling or other interconnect formation; cleaning and surface preparation; imaging and masking; catalyst and electroless deposition when applicable; electroplating or other conductor build-up; etching and stripping when applicable; solder mask and legend; final surface finishing; profiling, electrical testing, inspection, and packaging |
| market_state | Finished, tested, unpopulated printed circuit ready for declared component-assembly operations, excluding transport packaging from reference product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished unpopulated printed circuit that carries the declared conductive pattern and is ready for the declared component-assembly process |
| How much | 1 kg net mass of accepted finished printed circuits at the manufacturing gate |
| How well | Meets the declared drawing, material system, layer stack, conductor and hole specification, surface finish, solder mask, dimensional tolerances, electrical test, acceptance criteria, and quality class |
| How long or cycle | One declared production lot or reporting period; service life belongs to the downstream assembly or equipment system and is not assumed here |
| reference_flow_link | The quantitative reference is exactly 1 kg of accepted finished unpopulated printed circuits; rejects, coupons, break-away rails, tooling areas, and transport packaging are excluded from the reference output and recorded separately |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed circuits `b230e7cd-7afd-4398-84bd-71beab1f6626` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | rigid, flexible, or rigid-flex construction; substrate and resin system; layer count and stack-up; finished board thickness; copper weight or conductor thickness; panel dimensions and utilization; conductor density or declared design family; through-hole, blind-via, buried-via, microvia, or other interconnect technology; additive, semi-additive, subtractive, or mixed route; solder mask and legend system; surface finish; halogen and flame-retardant declaration; acceptance and quality class; production geography; lot and reporting period; included boundary; net-mass convention |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete for that data package.

The Tiangong reference product flow is generic to CPC 47130 and uses mass as its quantitative reference. Do not substitute a PCBA or electronic-components flow, a layer-count- or application-specific board flow, or an area-referenced bare-board intermediate for this generic reference flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg of accepted finished unpopulated printed circuits. Exclude transport packaging, rejected boards, test coupons, break-away rails, tooling strips, and recoverable production scrap from reference product mass. |
| `panel_to_product_conversion` | Panel-, area-, or item-based production records | Mass and measured area or item count | kg; m2; item(s) | Convert panel, area, and item records to the mass reference using measured accepted-product mass and the actual panel map for the declared product family and lot. Do not use a generic areal density or board mass when a product-specific measurement is available. |
| `material_mass_separation` | Base materials and finished product | Mass | kg | Preserve separate dry masses for substrate or laminate, copper and other conductors, bonding materials, solder mask, legend ink, surface-finish metals or coatings, and other intentionally incorporated materials. |
| `chemical_solution_basis` | Process chemicals and baths | Mass, volume, and concentration | kg; m3; kg substance/kg solution or equivalent | Record purchased formulation, make-up, replenishment, bail-out, drag-out, bath life, active constituent concentration, and treatment route without treating solution mass as active-substance mass. |
| `water_source_and_reuse` | Process water, rinse water, and cooling water | Volume | m3 | Separate make-up water by source from internally recirculated water, and separate process-contact water from non-contact cooling or utility water to prevent double counting. |
| `energy_carrier_preservation` | Electricity, heat, and fuels | Energy and carrier quantity | kWh; MJ; carrier-specific unit | Preserve carrier, voltage or supply type, heating-value convention, and metered unit. Do not aggregate electricity, supplied heat, and fuels into one undifferentiated energy value. |
| `metal_and_waste_mass_balance` | Copper and other metals, rejects, spent baths, sludge, and recovered materials | Mass | kg | Reconcile purchased and opening-stock metal, additions, product incorporation, recoveries, closing stock, wastewater or sludge transfer, and other losses over the same reporting period; disclose unresolved imbalance. |

## 5. System Boundary

The default dataset boundary is cradle-to-gate for saleable unpopulated printed circuits. Upstream material, energy, chemical, water-supply, transport, and treatment burdens are represented by linked datasets; the foreground boundary covers the manufacturing operations and on-site management under the producer's control. A gate-to-gate dataset may be produced only when its starting condition and every omitted upstream stage are explicit.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or internally produced copper-clad laminate, flexible substrate, ceramic or other declared insulating base, copper foil, prepreg or bonding material, and process chemicals entering the declared printed-circuit manufacturing system |
| starting_condition_role | Upstream product inputs to the first foreground panel-preparation or lamination operation |
| product_classification_scope | Finished unpopulated printed circuits conforming to the semantic boundary of CPC 3.0 code 47130; classification is mapping context and does not define the canonical PCR identity |
| recursive_input_rule | An input already representing a finished in-scope printed circuit shall be recorded as an upstream product flow and shall not be expanded again inside the receiving foreground process. Intermediate panels made within the same foreground system shall be linked between process stages without duplicating upstream burdens. |
| upstream_dataset_requirement | Use separately documented datasets for substrates, laminates, copper foil and other metals, resins and bonding materials, process chemicals, electricity, heat, fuels, water supply, packaging, inbound transport, and off-site waste or wastewater treatment; disclose proxy use and data quality. |
| disclosure | Declare product construction, stack-up, material system, manufacturing route, site and geography, reporting period, panel utilization, yield, internal recycling, wastewater and air-emission controls, off-site treatment, allocation, and the exact terminal boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_scope` | Product identity | Include rigid, flexible, and rigid-flex printed circuits and their declared single-, double-, or multilayer routes; exclude component mounting and PCBA operations from the printed-circuit foreground boundary. | `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `boundary_required_manufacturing` | Foreground production | Include applicable base-material preparation, lamination, drilling or other interconnect formation, cleaning, imaging and masking, catalyst and electroless deposition, conductor build-up, electroplating, etching and stripping, solder mask and legend, final surface finish, profiling, testing, inspection, and packaging. Mark non-applicable route steps explicitly. | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `boundary_material_energy_water` | All foreground stages | Include all purchased and internally transferred materials, process chemicals, bath make-up and replenishment, water by source and use, electricity, heat, fuels, compressed air or other material utilities, and actual internal recycle loops without double counting. | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `boundary_waste_emissions` | All foreground stages | Include rejects, routing and drilling residues, spent masks and resists, spent baths and etchants, drag-out, rinse wastewater, wastewater-treatment sludge, recovered metals, other hazardous and non-hazardous wastes, and measured or calculated releases to air, water, and soil. | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `boundary_cutoff_disclosure` | Completeness | Do not omit a known material, chemical, energy, water, transport, waste, or emission flow merely because it lacks a preferred dataset. Record it as unresolved, use a disclosed proxy, or justify its exclusion under the declared study rule. | `iso-14044-2006` |
| `boundary_downstream_exclusion` | Default cradle-to-gate dataset | Exclude component manufacture and mounting, PCBA soldering and cleaning, downstream equipment assembly, distribution of the assembled equipment, use, and end-of-life unless a lifecycle model explicitly adds those stages without double counting. | `ifc-electronics-ehs-2007`; `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | Base-material preparation and lamination | required | Always; lamination-specific inputs apply only when the declared construction uses lamination | Foreground preparation of the insulating and conductor stack | Prepared panel mass needed for 1 kg accepted finished printed circuits |
| `hole_and_surface_preparation` | Drilling, interconnect formation, and surface preparation | required | Always; hole-formation steps are marked not applicable only for a declared route without holes or other formed interconnects | Foreground mechanical and chemical preparation | Prepared board area and mass entering imaging for 1 kg accepted product |
| `conductor_formation` | Imaging, masking, plating, etching, and stripping | required | Always; individual additive, semi-additive, subtractive, catalyst, plating, and etching steps follow the declared route | Foreground formation of the conductive pattern | Patterned board output needed for 1 kg accepted product |
| `finishing_and_release` | Solder mask, legend, surface finish, profiling, testing, inspection, and packaging | required | Always; the selected surface-finish sequence follows the declared product specification | Foreground completion and release of saleable printed circuits | 1 kg accepted finished printed circuits |
| `wastewater_and_waste_management` | Process-wastewater, bath, residue, and sludge management | required | Always; model on-site treatment directly and off-site treatment through linked service datasets | Foreground segregation, treatment, recovery, and transfer of manufacturing residuals | Residuals generated while producing 1 kg accepted product |

### Process: Base-material preparation and lamination (`material_preparation`)

#### Inputs

##### Product flows

###### Substrates, copper foils, and copper-clad laminates (`base_materials`)

Record each insulating base, copper foil, copper-clad laminate, flexible film, ceramic base, metal-core base, and other structural material by supplier specification and lot.

- Selected flow: Select material- and supplier-specific Tiangong product flows
- Flow property / unit: Mass / kg; area / m2 retained as supporting activity data
- Amount rule: Purchase-and-stock reconciliation or measured issue to the declared product family, adjusted for returned stock and normalized by accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_bom_and_stock`
- Sources: `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`

###### Prepreg, bonding films, resins, and lamination auxiliaries (`lamination_materials`)

Record prepreg, adhesive or bonding film, coverlay, resin, release film, separator, and other lamination materials when used.

- Selected flow: Select formulation-specific Tiangong product flows
- Flow property / unit: Mass / kg; area / m2 where purchased by area
- Amount rule: Measured batch issue less documented unused return, allocated to the actual panel map and accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits from routes using lamination
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_bom_and_stock`
- Sources: `us-epa-pwb-surface-finishes`

###### Electricity and thermal energy for preparation and lamination (`material_preparation_energy`)

Record electricity, supplied heat, and fuels for cutting, lay-up, pressing, curing, ventilation, and route-specific preparation.

- Selected flow: Select carrier-, voltage-, technology-, and geography-specific Tiangong product flows
- Flow property / unit: Energy / kWh or MJ; fuel in metered carrier unit
- Amount rule: Sub-metered consumption or documented equipment-load calculation allocated under section 7
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `ifc-electronics-ehs-2007`

##### Waste flows

#### Outputs

##### Product flows

###### Prepared or laminated panel (`prepared_panel`)

Record the dry mass, area, panel count, stack-up, and material composition of prepared panels transferred to the next foreground process.

- Selected flow: Product-specific prepared printed-circuit panel intermediate
- Flow property / unit: Mass / kg; area / m2; number of items / item(s)
- Amount rule: Measured transfer quantity reconciled with material issue, retained stock, trim, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: prepared panel needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_route_yield`
- Sources: `us-epa-pwb-surface-finishes`

##### Waste flows

###### Offcuts, separator waste, and lamination rejects (`preparation_scrap`)

Record each residue by material composition and actual recovery, recycling, or disposal route.

- Selected flow: Select material- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste and rejected-panel mass, reconciled to issued materials and prepared output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery`
- Sources: `us-epa-pcb-p2-1990`

##### Elementary flows

###### Lamination and preparation releases to air (`preparation_air_releases`)

Record measured or permit-calculated releases from cutting, heating, curing, cleaning, and ventilation by substance and compartment.

- Selected flow: Select substance- and compartment-specific Tiangong elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Continuous or periodic measurement, material balance, or documented permit method for the declared reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

### Process: Drilling, interconnect formation, and surface preparation (`hole_and_surface_preparation`)

#### Inputs

##### Product flows

###### Prepared panels entering hole and surface preparation (`prepared_panel_input`)

Transfer prepared panels without duplicating their upstream burdens.

- Selected flow: Product-specific prepared printed-circuit panel intermediate
- Flow property / unit: Mass / kg; area / m2; number of items / item(s)
- Amount rule: Measured transfer from `material_preparation`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: prepared panels needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_route_yield`
- Sources: `us-epa-pwb-surface-finishes`

###### Drill, routing, desmear, cleaning, and conditioning materials (`hole_preparation_materials`)

Record drill and routing consumables, abrasives, cleaners, desmear and conditioning chemicals, catalysts, and all bath make-up and replenishment used by the declared interconnect route.

- Selected flow: Select equipment- and formulation-specific Tiangong product flows
- Flow property / unit: Mass / kg; volume / m3; item count for tools
- Amount rule: Measured issue, bath make-up and additions, tool-change records, and purchase-and-stock reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per prepared-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_chemicals_and_baths`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

###### Process and rinse water for hole and surface preparation (`hole_preparation_water`)

Record make-up water by source and use, separately from recirculated and non-contact water.

- Selected flow: Select source- and geography-specific Tiangong water product flows
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water or reconciled tank and rinse-line balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per prepared-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

###### Electricity and utilities for drilling and surface preparation (`hole_preparation_energy`)

Record electricity and material utilities for drilling, routing, cleaning, pumping, ventilation, and bath temperature control.

- Selected flow: Select carrier-, voltage-, and geography-specific Tiangong product flows
- Flow property / unit: Energy / kWh or MJ; utility in metered unit
- Amount rule: Sub-metered consumption or documented equipment-load calculation allocated under section 7
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per prepared-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `ifc-electronics-ehs-2007`

##### Waste flows

#### Outputs

##### Product flows

###### Drilled and conditioned panel (`conditioned_panel`)

Record the transferred panel mass, area, count, hole technology, and accepted quantity.

- Selected flow: Product-specific drilled and conditioned panel intermediate
- Flow property / unit: Mass / kg; area / m2; number of items / item(s)
- Amount rule: Measured accepted transfer to conductor formation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: conditioned panels needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_route_yield`
- Sources: `us-epa-pwb-surface-finishes`

##### Waste flows

###### Drilling and routing residues and worn tools (`mechanical_preparation_waste`)

Record collected dust, swarf, backing or entry material, worn tools, filters, and rejected panels by composition and route.

- Selected flow: Select material- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg; item(s) for tools with supporting mass
- Amount rule: Measured waste-container and tool-change records reconciled to production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_recovery`
- Sources: `us-epa-pcb-p2-1990`

###### Spent preparation baths and contact wastewater (`hole_preparation_wastewater`)

Record spent bath solution, drag-out, rinses, filter media, and wastewater transferred to recovery or treatment.

- Selected flow: Select composition- and treatment-specific Tiangong waste flows
- Flow property / unit: Volume / m3 and mass / kg of identified constituents
- Amount rule: Metered transfer and bath-disposal records with measured concentration or defensible composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_effluent`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

##### Elementary flows

###### Dust, acid mist, and volatile releases (`hole_preparation_air_releases`)

Record releases from mechanical preparation, cleaning, and ventilation by substance and compartment after controls.

- Selected flow: Select substance- and compartment-specific Tiangong elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Measured or method-calculated controlled release for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

### Process: Imaging, masking, plating, etching, and stripping (`conductor_formation`)

#### Inputs

##### Product flows

###### Conditioned panels entering conductor formation (`conditioned_panel_input`)

Transfer conditioned panels without duplicating burdens from previous foreground stages.

- Selected flow: Product-specific drilled and conditioned panel intermediate
- Flow property / unit: Mass / kg; area / m2; number of items / item(s)
- Amount rule: Measured transfer from `hole_and_surface_preparation`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: conditioned panels needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_route_yield`
- Sources: `us-epa-pwb-surface-finishes`

###### Imaging, resist, developer, and stripping materials (`imaging_materials`)

Record films, photoresists, screen inks, developers, stripping agents, cleaners, and related formulation-specific inputs for the actual route.

- Selected flow: Select formulation-specific Tiangong product flows
- Flow property / unit: Mass / kg; volume / m3; area / m2 where supplied as film
- Amount rule: Measured batch issue, bath make-up and replenishment, and purchase-and-stock reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per patterned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_chemicals_and_baths`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

###### Copper, catalysts, plating salts, and etchants (`conductor_chemicals`)

Record catalyst, electroless and electrolytic copper, other conductor or resist metals, etchants, additives, reducers, complexing agents, acids, alkalis, and every bath make-up, addition, bail-out, and replacement.

- Selected flow: Select substance- and formulation-specific Tiangong product flows
- Flow property / unit: Mass / kg; volume / m3; concentration retained for each formulation
- Amount rule: Purchase-and-stock reconciliation plus bath logs, normalized through measured patterned-panel output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per patterned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_chemicals_and_baths`
- Sources: `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

###### Process and rinse water for conductor formation (`conductor_formation_water`)

Record make-up water by process line and source, separately from recirculated water.

- Selected flow: Select source- and geography-specific Tiangong water product flows
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water or reconciled line balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per patterned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

###### Electricity and utilities for conductor formation (`conductor_formation_energy`)

Record electricity, heat, cooling, ventilation, pumping, compressed air, and other material utilities by line.

- Selected flow: Select carrier-, voltage-, and geography-specific Tiangong product flows
- Flow property / unit: Energy / kWh or MJ; utility in metered unit
- Amount rule: Sub-metered consumption or documented equipment-load calculation allocated under section 7
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per patterned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_utilities`
- Sources: `ifc-electronics-ehs-2007`

##### Waste flows

#### Outputs

##### Product flows

###### Patterned printed-circuit panel (`patterned_panel`)

Record accepted patterned-panel mass, area, count, route, conductor build, and transfer to finishing.

- Selected flow: Product-specific patterned printed-circuit panel intermediate
- Flow property / unit: Mass / kg; area / m2; number of items / item(s)
- Amount rule: Measured accepted transfer from the declared conductor-formation route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: patterned panels needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_route_yield`
- Sources: `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### Waste flows

###### Spent resists, masks, films, and contaminated solids (`imaging_waste`)

Record spent films, masks, resists, filters, wipes, containers, and rejected panels by composition and route.

- Selected flow: Select material- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste and rejected-panel mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per patterned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery`
- Sources: `us-epa-pcb-p2-1990`

###### Spent plating baths, etchants, drag-out, and wastewater (`conductor_wastewater`)

Record each segregated spent bath, etchant, rinse stream, drag-out recovery stream, and wastewater transfer with metal and relevant constituent concentrations.

- Selected flow: Select composition- and treatment-specific Tiangong waste flows
- Flow property / unit: Volume / m3; mass / kg of identified constituents
- Amount rule: Metered transfer, bath logs, and concentration analyses over the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per patterned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_effluent`
- Sources: `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### Elementary flows

###### Controlled releases from imaging, plating, and etching (`conductor_air_releases`)

Record acid mist, volatile organic compounds, particulates, and other measured or calculated releases after controls.

- Selected flow: Select substance- and compartment-specific Tiangong elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Stack or workplace exhaust measurement, material balance, or documented permit calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per patterned-panel output needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

### Process: Solder mask, surface finish, testing, and release (`finishing_and_release`)

#### Inputs

##### Product flows

###### Patterned panels entering finishing (`patterned_panel_input`)

Transfer patterned panels without duplicating upstream burdens.

- Selected flow: Product-specific patterned printed-circuit panel intermediate
- Flow property / unit: Mass / kg; area / m2; number of items / item(s)
- Amount rule: Measured transfer from `conductor_formation`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: patterned panels needed for 1 kg accepted finished printed circuits
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_route_yield`
- Sources: `us-epa-pwb-surface-finishes`

###### Solder mask, legend, and final surface-finish materials (`finishing_materials`)

Record solder mask and legend formulations, cleaners, microetch, catalysts, fluxes, solder or alternative coatings, nickel, gold, palladium, silver, tin, organic preservative, and all route-specific bath materials.

- Selected flow: Select formulation- and metal-specific Tiangong product flows
- Flow property / unit: Mass / kg; volume / m3; concentration for each bath or formulation
- Amount rule: Purchase-and-stock reconciliation plus bath make-up, addition, bail-out, and replacement logs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_chemicals_and_baths`
- Sources: `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

###### Finishing water, electricity, and material utilities (`finishing_utilities`)

Record make-up water, electricity, heat, cooling, ventilation, compressed air, test energy, and other material utilities for finishing, profiling, testing, and packing.

- Selected flow: Select source-, carrier-, voltage-, technology-, and geography-specific Tiangong product flows
- Flow property / unit: Volume / m3; energy / kWh or MJ; utility in metered unit
- Amount rule: Sub-metered consumption or documented allocation from line and facility records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_water_finishing`
- Sources: `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

###### Transport packaging materials (`transport_packaging`)

Record bags, desiccants, separators, labels, cartons, trays, reels, pallets, and reusable packaging separately from product mass.

- Selected flow: Select material- and supplier-specific Tiangong product flows
- Flow property / unit: Mass / kg; item(s) with measured mass
- Amount rule: Measured packaging issued to accepted shipment less documented reusable returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_packaging_and_release`

##### Waste flows

#### Outputs

##### Product flows

###### Accepted finished printed circuits (`finished_printed_circuits`)

Record accepted net product mass after final profiling, electrical test, dimensional and visual inspection, excluding transport packaging.

- Selected flow: Printed circuits `b230e7cd-7afd-4398-84bd-71beab1f6626`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: exactly 1 kg accepted net product output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Profiling residues, test rejects, and finishing solids (`finishing_scrap`)

Record routing residues, test coupons, break-away rails, rejected boards, spent filters, contaminated packaging, and other finishing solids by material and route.

- Selected flow: Select material- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste and reject mass, reconciled to patterned-panel input and accepted product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_recovery`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

###### Spent finishing baths and wastewater (`finishing_wastewater`)

Record spent surface-finish baths, rinses, drag-out, cleaning solutions, and wastewater transfers by chemistry and destination.

- Selected flow: Select composition- and treatment-specific Tiangong waste flows
- Flow property / unit: Volume / m3; mass / kg of identified constituents
- Amount rule: Metered transfer, bath records, and concentration analyses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_effluent`
- Sources: `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### Elementary flows

###### Controlled finishing releases to air (`finishing_air_releases`)

Record releases from mask curing, legend printing, surface-finishing baths, hot-air leveling when used, profiling, and ventilation after controls.

- Selected flow: Select substance- and compartment-specific Tiangong elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Measured or documented method-calculated release over the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

### Process: Process-wastewater, bath, residue, and sludge management (`wastewater_and_waste_management`)

#### Inputs

##### Product flows

###### Treatment chemicals, water, energy, and services (`treatment_inputs`)

Record treatment reagents, filtration media, water, electricity, fuels, and externally supplied recovery or treatment services for the actual contaminant-specific system.

- Selected flow: Select chemical-, carrier-, and service-specific Tiangong product flows
- Flow property / unit: Mass / kg; volume / m3; energy / kWh or MJ; service-specific unit
- Amount rule: Measured treatment-system records and invoices allocated to the reported manufacturing streams
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: residuals generated while producing 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_effluent`
- Sources: `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### Waste flows

###### Segregated spent baths, wastewater, and residues entering management (`residuals_to_treatment`)

Record each internal residual transfer once, preserving source process, chemistry, volume, mass, concentration, and hazardous classification.

- Selected flow: Select composition- and treatment-specific Tiangong waste flows
- Flow property / unit: Volume / m3; mass / kg of total stream and identified constituents
- Amount rule: Sum of verified transfers from foreground production stages after removing documented internal returns to process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: residuals generated while producing 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_effluent`
- Sources: `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

#### Outputs

##### Product flows

###### Recovered copper and other materials (`recovered_materials`)

Record materials that meet the declared recovery output specification, destination, and allocation treatment; do not classify an unverified waste transfer as recovered product.

- Selected flow: Select recovered-material-specific Tiangong product flows
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted recovery output or verified off-site recovery receipt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_recovery`
- Sources: `us-epa-pcb-p2-1990`; `ifc-electronics-ehs-2007`

##### Waste flows

###### Wastewater-treatment sludge and concentrated residues (`treatment_sludge`)

Record dewatered sludge, filter cake, spent media, concentrated liquids, and other treatment residues by composition and destination.

- Selected flow: Select composition- and treatment-specific Tiangong waste flows
- Flow property / unit: Mass / kg; dry matter and wet mass both retained where relevant
- Amount rule: Measured dispatch mass and moisture or solids content, reconciled with treatment input and effluent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_recovery`
- Sources: `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

##### Elementary flows

###### Treated effluent released to water (`treated_effluent`)

Record effluent volume and each reported pollutant after treatment at the actual receiving compartment.

- Selected flow: Select water-quantity and pollutant-specific Tiangong elementary flows for the receiving compartment
- Flow property / unit: Volume / m3 for water; mass / kg for each pollutant
- Amount rule: Discharge flow multiplied by representative measured concentration, with direct load measurements used when available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished printed circuits
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_effluent`
- Sources: `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Multi-product facilities and shared lines | First separate processes, lines, meters, batches, and product-family records so direct inputs, outputs, wastes, and emissions remain assigned to the products that caused them. | `iso-14044-2006` |
| `allocation_shared_operations` | Shared energy, water, ventilation, baths, testing, and utilities | Use measured causal drivers such as sub-metered consumption, equipment operating time, processed panel area, bath loading, number of test cycles, or contaminant load. Mass-only allocation is permitted only when the shared operation is demonstrated to scale with product mass. | `iso-14044-2006`; `us-epa-pwb-surface-finishes` |
| `allocation_yield_and_rejects` | Production losses and rejected boards | Include the burdens of normal scrap, coupons, rails, test failures, and rework in accepted saleable output. Do not remove the burdens of rejected production from the denominator. | `iso-14044-2006` |
| `allocation_wastewater_treatment` | Combined wastewater and sludge treatment | Allocate by measured stream volume and pollutant load or other treatment-driving characteristics. Do not allocate chemically dissimilar streams by volume alone when contaminant loading materially differs. | `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `allocation_recovered_materials` | Copper and other recovered materials | Prefer subdivision and direct mass accounting. If a recovered material is treated as a co-product or receives a recycling credit, declare the method, point of substitution, quality adjustment, and sensitivity; do not combine allocation and substitution credits for the same recovered amount. | `iso-14044-2006` |
| `allocation_internal_recycling` | Internal bath, rinse, metal, panel, or material loops | Record internal returns explicitly, but count only make-up inputs and net releases across the foreground boundary. Internal circulation shall not create an avoided-burden credit. | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_output` | `finishing_and_release` | Product identity and accepted output | Specification, route traveller, test record, scale record, release record | product code; drawing revision; construction; stack-up; material system; thickness; copper weight; panel map; interconnect technology; surface finish; solder mask; acceptance class; accepted net mass; packaging mass; lot | Controlled production and release records linked to calibrated weighing | kg; m2; item(s) | Each lot, aggregated monthly | At least 12 representative consecutive months or the full campaign for seasonal or campaign production | Every included site and outsourced operation | Sum accepted net mass by declared product family; retain lot-level qualifiers and exclude packaging | Calibration record; released specification; lot traceability; electrical and dimensional acceptance evidence |
| `cp_material_bom_and_stock` | `material_preparation` | Material inputs | BOM, purchase, stores issue, return, and stock record | material id; supplier; lot; composition; issued quantity; returned quantity; opening and closing stock; panel assignment | Purchase-and-stock reconciliation checked against product BOM and actual panel map | kg; m2; item(s) | Per issue and monthly reconciliation | Same period as accepted output | Every included site | Opening stock + purchases - closing stock - documented returns, assigned to product family and normalized to accepted output | Supplier specification; stock ledger; BOM revision; material lot traceability |
| `cp_batch_route_yield` | all production processes | Intermediate transfers, route, and yield | Batch traveller and production execution record | process step; route; panel id; input and output count; input and output mass or area; rework; reject code; transfer time | Lot-level process tracking with reconciliation between consecutive stages | kg; m2; item(s) | Each batch | Same period as accepted output | Every included site and outsourced stage | Sum accepted transfers and losses by route; normalize through accepted output | Route traveller; production-system audit trail; reject disposition |
| `cp_process_chemicals_and_baths` | `hole_and_surface_preparation`; `conductor_formation`; `finishing_and_release` | Process chemicals and baths | Purchase, stock, bath make-up, replenishment, analysis, bail-out, and disposal record | formulation; constituent concentration; bath volume; additions; sampling; bail-out; drag-out recovery; replacement; destination | Batch and line logs reconciled to purchase and stock records | kg; m3; concentration-specific unit | Each addition or disposal; monthly reconciliation | Same period as accepted output | Every wet-process line | Opening inventory + purchases + internal returns - closing inventory - disposal - documented losses, assigned to line and product family | Supplier SDS or specification; bath analysis; calibrated dosing record; inventory reconciliation |
| `cp_energy_and_utilities` | `material_preparation`; `hole_and_surface_preparation`; `conductor_formation` | Electricity, heat, fuels, and utilities | Meter, fuel, equipment-runtime, and utility invoice record | carrier; meter id; start and end reading; runtime; load; heating value; allocation driver | Sub-metering preferred; otherwise documented equipment calculation reconciled to facility totals | kWh; MJ; carrier-specific unit | Continuous or per shift; monthly reconciliation | Same period as accepted output | Every included site | Sum by carrier and line, subtract unrelated use, allocate under section 7, normalize to accepted output | Meter calibration or invoice; runtime log; reconciliation to site total |
| `cp_water_balance` | `hole_and_surface_preparation`; `conductor_formation` | Process, rinse, and cooling water | Meter, tank, rinse-line, recycle, and discharge record | source; use; make-up volume; recirculated volume; discharge volume; tank change; concentration where relevant | Source and line sub-metering or reconciled water balance | m3 | Continuous or daily; monthly reconciliation | Same period as accepted output | Every included site | Count make-up water once; report recirculation separately; reconcile supply, product retention, evaporation, transfer, and discharge | Meter calibration; water invoice; line log; water-balance closure |
| `cp_energy_water_finishing` | `finishing_and_release` | Finishing water, energy, and utilities | Meter, bath, equipment-runtime, and test-system record | source or carrier; meter; use; runtime; bath or test line; allocation driver | Sub-metered records or documented line calculation | m3; kWh; MJ; utility-specific unit | Continuous or per shift; monthly reconciliation | Same period as accepted output | Every finishing and testing line | Sum by line and allocate under section 7 to accepted output | Meter or invoice; runtime log; line reconciliation |
| `cp_product_packaging_and_release` | `finishing_and_release` | Product release and packaging | Packing list, material issue, shipment, and reusable-return record | packaging material; issued mass and count; returned reusable units; shipment lot; accepted product mass | Measured issue and shipment reconciliation | kg; item(s) | Each shipment; monthly reconciliation | Same period as accepted output | Every dispatch site | Net packaging issued divided by accepted net product mass | Packing specification; scale record; reusable packaging ledger |
| `cp_wastewater_and_effluent` | `hole_and_surface_preparation`; `conductor_formation`; `finishing_and_release`; `wastewater_and_waste_management` | Wastewater, bath transfer, treatment, and effluent | Flow meter, batch disposal, laboratory analysis, treatment log, and discharge record | source line; stream id; volume; pH; constituent concentrations; treatment step; sludge transfer; discharge compartment | Metered flows and representative accredited or qualified laboratory analyses | m3; kg constituent; concentration-specific unit | Continuous flow where available; sample frequency sufficient for permit and process variability | Same period as accepted output | Every included site and receiving treatment system | Calculate loads from matched flow and concentration; preserve segregated streams; reconcile treatment input, effluent, sludge, recovery, and stock | Sampling plan; chain of custody; laboratory QA; meter calibration; treatment reconciliation |
| `cp_waste_and_recovery` | all processes | Solid, liquid, hazardous, and recovered residuals | Container weighing, waste manifest, recycler receipt, sludge analysis, and internal transfer record | source; material; hazardous classification; gross and tare mass; moisture or solids; destination; recovery output; certificate | Weighed dispatch and verified destination records | kg; item(s) with supporting mass | Each transfer; monthly reconciliation | Same period as accepted output | Every included site and contractor | Sum net mass by composition and destination; distinguish waste transfer from accepted recovered product | Calibrated scale; manifest; analysis; recycler or treatment receipt |
| `cp_air_emissions` | all production processes | Air emissions after controls | Stack test, continuous monitor, material balance, operating hours, and permit calculation | source; substance; flow; concentration; control efficiency; operating hours; method | Measurement preferred; otherwise documented method using foreground activity data | kg substance; concentration-specific unit | Per regulatory and process-representative schedule | Same period as accepted output | Every material emission source | Calculate released mass after controls and allocate by causal operation | Test report; monitor QA; method reference; control operating record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output` | Accepted product | Sum accepted finished printed-circuit net mass after final test and inspection, excluding packaging, coupons, rails, and rejects. | Lot release and calibrated scale records | kg accepted net product |  |
| `calc_material_consumption` | Each purchased material | Opening stock + purchases + internal receipts - closing stock - documented return; assign by traced batch or the section 7 allocation rule. | Stock, purchase, issue, return, and batch records | kg or m2 material per kg accepted product |  |
| `calc_chemical_consumption` | Each process formulation or constituent | Reconcile opening bath and stock, make-up, additions, internal recovery, bail-out, closing inventory, transfers, and disposal; convert solution to constituent mass using documented concentration. | Bath, dosing, stock, and analysis records | kg formulation and kg constituent per kg accepted product | `us-epa-pwb-surface-finishes` |
| `calc_makeup_water` | Water use | Make-up water supplied from each source; report recirculated water separately and do not add internal recirculation to net withdrawal. | Source meters, line meters, tank and recycle records | m3 make-up water per kg accepted product | `ifc-electronics-ehs-2007` |
| `calc_energy` | Each energy carrier | Sum metered carrier use for included operations, subtract documented unrelated use, and apply the section 7 allocation driver. | Meter, invoice, runtime, and production records | kWh, MJ, or carrier unit per kg accepted product |  |
| `calc_stage_yield` | Each production stage | Accepted output quantity divided by input quantity on a consistent mass, area, or item basis; retain rework and reject disposition. | Batch route, transfer, and reject records | Stage yield and loss by declared route |  |
| `calc_wastewater_load` | Each wastewater constituent | Matched discharge or transfer volume multiplied by representative measured concentration; sum by stream and reporting period before normalization. | Flow and laboratory records | kg constituent per kg accepted product | `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `calc_material_balance` | Product, metals, and treatment system | For each selected balance domain, inputs + opening stock = accepted product + recoveries + waste + releases + closing stock; report absolute and relative unresolved difference. | Material, product, stock, waste, recovery, wastewater, and emission records | Reconciliation and unresolved balance by material | `us-epa-pwb-surface-finishes` |
| `calc_normalization` | All inventory rows | Divide the allocated reporting-period quantity by accepted net product mass from `calc_reference_output`. | Allocated quantity; accepted net product mass | Inventory quantity per 1 kg accepted finished printed circuits |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Product and reference flow | Preserve drawing revision, construction, stack-up, substrate, layer count, conductor and interconnect specification, surface finish, acceptance class, and net-mass convention for every represented product family. | Released specifications, route travellers, BOMs, and lot traceability |
| `dq_technological` | Process route | Data shall represent the declared additive, semi-additive, subtractive, or mixed route and the actual hole, plating, etching, mask, finish, test, and control technologies. | Process map, equipment list, bath list, and production records |
| `dq_temporal` | Foreground activity data | Use at least 12 representative consecutive months when continuous production exists; for campaign or new production, cover the full campaign and disclose its limitations. | Dated records and coverage statement |
| `dq_geographical` | Site and upstream data | Identify every production and outsourced site and match electricity, water, transport, treatment, and material datasets to the represented geography where feasible. | Site list, supplier and contractor records, dataset metadata |
| `dq_measurement` | Mass, water, energy, concentration, and emission records | Use calibrated or verified instruments and retain sampling, detection-limit, conversion-factor, and laboratory QA information. | Calibration certificates, sampling plan, laboratory QA, meter reconciliation |
| `dq_completeness` | Inventory | Cover all required process stages and all known material, chemical, energy, water, transport, waste, recovery, and emission flows; unresolved items shall be disclosed rather than silently omitted. | Completeness checklist and material, water, and metal balance |
| `dq_allocation` | Shared operations | Document the causal allocation driver, coverage, numerator, denominator, and sensitivity for each shared operation or combined treatment system. | Allocation workbook and sensitivity record |
| `dq_upstream_proxies` | Linked datasets | Record provider, geography, technology, time, version, representativeness, and proxy rationale for each linked upstream or treatment dataset. | Dataset registry and proxy log |
| `dq_outsourced_operations` | Outsourced manufacturing or treatment | Obtain primary activity records or supplier-specific datasets for material outsourced stages; otherwise disclose the proxy and uncertainty. | Supplier data, treatment receipt, audit, or documented proxy |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | Product identity | Fail unless the product is an unpopulated printed circuit and the required construction, material, layer, route, finish, quality, geography, period, and boundary qualifiers are declared; reject PCBA, component, laminate-only, equipment, and waste-board substitutions. | `ifc-electronics-ehs-2007`; `us-epa-pwb-surface-finishes` |
| `validate_reference_flow` | Quantitative reference | Require exactly 1 kg accepted net output using Printed circuits `b230e7cd-7afd-4398-84bd-71beab1f6626`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66`, and unit kg; packaging and production residues shall be separate. |  |
| `validate_route_boundary` | Process map and boundary | Require every applicable operation in `boundary_required_manufacturing`, an explicit not-applicable declaration for route steps not used, and separate exclusion of PCBA and downstream equipment stages. | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `validate_intermediate_links` | Foreground stage transfers | Require prepared, conditioned, and patterned panel transfers to reconcile between adjacent foreground stages without duplicate upstream burdens. |  |
| `validate_material_and_yield` | Material balance and output | Require accepted product mass, stage yields, material inputs, rejects, residues, recoveries, and unresolved mass-balance difference on one reporting period and declared normalization basis. | `us-epa-pwb-surface-finishes` |
| `validate_chemicals_and_metals` | Wet-process inventory | Require formulation, concentration, bath make-up, additions, bail-out or disposal, metal incorporation, recovery, and treatment records for every applicable imaging, plating, etching, and finishing line. | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes` |
| `validate_water_and_wastewater` | Water and effluent | Require source-separated make-up water, internal recirculation disclosure, contact and non-contact separation, wastewater volume, relevant constituent loads, treatment route, effluent, and sludge reconciliation. | `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `validate_energy` | Energy and utilities | Require carrier-separated electricity, heat, fuel, and material utility records and a documented allocation driver for shared systems. | `ifc-electronics-ehs-2007` |
| `validate_waste_recovery_emissions` | Residuals and releases | Require wastes by composition and destination, verified recovered outputs, sludge and spent-bath records, and substance- and compartment-specific air, water, and soil releases where applicable. | `us-epa-pcb-p2-1990`; `us-epa-pwb-surface-finishes`; `ifc-electronics-ehs-2007` |
| `validate_allocation` | Multi-product and shared operations | Require allocation avoidance where feasible, a causal driver for every shared operation, inclusion of normal reject burdens in accepted output, and no simultaneous allocation and substitution credit for the same recovered amount. | `iso-14044-2006` |
| `validate_data_quality` | Dataset package | Require protocol coverage, temporal and site coverage, calibration and laboratory evidence, upstream dataset and proxy disclosure, allocation documentation, and a list of unresolved completeness items. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground printed-circuit manufacturing dataset normalized to 1 kg accepted net unpopulated printed circuits |
| downstream_use | `secondary_dataset`; `background_dataset`; input to downstream `process` or `lifecyclemodel` records for PCB assembly, electronic components, equipment, or other products |
| allowed_use | Product footprint, LCA, supply-chain inventory, ecodesign, procurement, and hotspot analysis when construction, route, geography, time, quality, and boundary match the intended use |
| excluded_use | Generic representation of PCBAs, mounted components, semiconductor manufacture, all printed circuits regardless of construction or route, waste treatment, or comparative assertions when reference-flow qualifiers, boundaries, and data quality are not equivalent |
| required_metadata | Canonical PCR id and version; product drawing family; rigid, flexible, or rigid-flex construction; substrate and resin system; stack-up and layer count; thickness; copper weight and conductor density; interconnect technology; surface finish; solder mask; halogen and flame-retardant declaration; acceptance class; site and geography; reporting period; panel utilization and yield; route; included processes; allocation; linked datasets; net-mass convention |
| required_quality_disclosure | Primary-data share; temporal and site coverage; calibration and laboratory QA; stage yield and material-balance closure; water and wastewater reconciliation; chemical and bath coverage; air-emission method; waste and recovery destinations; allocation drivers; outsourced-stage coverage; proxy and missing-flow list; uncertainty limitations |
| update_trigger | Material change in construction, substrate, stack-up, layer count, conductor density, via technology, additive or subtractive route, plating or etching chemistry, surface finish, solder mask, site, electricity or water supply, wastewater or air controls, panel utilization, yield, allocation, supplier dataset, or reporting period; or correction of a referenced Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `us-epa-pcb-p2-1990` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, *Guides to Pollution Prevention: The Printed Circuit Board Manufacturing Industry*, EPA/625/7-90/007, June 1990, https://archive.epa.gov/sectors/web/pdf/01050.pdf (retrieved 2026-08-09) | Printed-circuit process decomposition; raw materials; cleaning, surface preparation, electroless plating, imaging, electroplating and etching; waste, bath, rinse, air-emission, and recovery inventory coverage |
| `us-epa-pwb-surface-finishes` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency Design for the Environment, *Printed Wiring Board Surface Finishes: Cleaner Technologies Substitutes Assessment, Volume 1*, https://www.epa.gov/sites/default/files/2013-12/documents/pwb_surface_finishes_ctsa_vol1_0.pdf (retrieved 2026-08-09) | Rigid, flexible and rigid-flex scope; layer types; multilayer production sequence; surface-finish alternatives; process material balance; water, wastewater, spent bath, sludge, solid-waste, and recovery accounting |
| `ifc-electronics-ehs-2007` | Official guidance (`official_guidance`) | International Finance Corporation / World Bank Group, *Environmental, Health, and Safety Guidelines for Semiconductors & Other Electronics Manufacturing*, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-semiconductors-electronic-ehs-guidelines-en.pdf (retrieved 2026-08-09) | PCB and PCBA boundary distinction; additive, semi-additive and subtractive routes; board preparation, imaging, plating, finishing and testing; hazardous materials, wastes, air emissions, energy, wastewater segregation, treatment, and recovery |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, including published amendments, https://www.iso.org/standard/38498.html (retrieved 2026-08-09) | Goal and scope, life-cycle inventory, allocation, reporting, review, completeness, and data-quality framework |
