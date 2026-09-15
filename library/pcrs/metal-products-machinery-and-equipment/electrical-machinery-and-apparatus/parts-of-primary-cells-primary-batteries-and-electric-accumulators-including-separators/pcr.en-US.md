---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-primary-cells-primary-batteries-and-electric-accumulators-including-separators
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of primary cells, primary batteries and electric accumulators (including separators)

## 1. Scope and Applicability

This PCR applies to the gate-to-gate manufacture of separately supplied, ready-for-assembly parts dedicated to primary cells, primary batteries, or electric accumulators. It provides route-specific foreground rules for microporous polyolefin separators, coated lithium-ion electrodes, and lead-acid grids or plates. A data package shall select only the process route and atomic flows that physically apply to its declared part.

The boundary begins with purchased, specification-controlled materials at the part-manufacturing gate and ends with a conforming part released at the same facility gate. It excludes upstream production of purchased active materials, metals, polymers, chemicals, electricity, fuels, and water; complete-cell or complete-battery assembly; electrolyte filling of complete cells; battery-management electronics; use; transport after the manufacturing gate; and end-of-life treatment. Outbound distribution packaging is outside this reference flow and shall be disclosed if a study adds it.

The confirmed reference product is a battery separator. The process and data rules may guide other covered part families, but a non-separator dataset shall use its own exact approved product flow and shall not reuse the Battery Separator UUID.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-primary-cells-primary-batteries-and-electric-accumulators-including-separators |
| classification_refs | CPC 3.0: 46430, exact classification context |
| covered_products | Separately marketed battery separators; coated positive or negative electrodes; lead-acid grids and pasted or formed plates; other dedicated ready-for-assembly parts only when an exact product flow and route-specific inventory are supplied |
| excluded_products | Complete primary cells, primary batteries, and electric accumulators; upstream active-material powders sold as chemicals; generic metal or plastic articles without demonstrated battery dedication; electrolyte sold separately; battery-management systems; production scrap sold or transferred as waste; repair services |
| representative_product | Microporous polyolefin battery separator, dry and released for battery assembly |
| production_route | Conditional polyolefin-separator conversion, lithium-ion electrode coating and finishing, or lead-acid grid/plate manufacture; the selected route and technology shall be declared |
| market_state | Conforming, separately supplied, ready-for-assembly part at the manufacturing gate; dry, dimensions and specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A conforming microporous battery separator released for assembly into a declared cell or battery system |
| How much | 1 kg net dry mass of accepted separator product, excluding outbound distribution packaging |
| How well | Meets the producer's declared material construction, thickness, porosity, mechanical, thermal, cleanliness, and compatibility specifications; rejected product is excluded from the reference amount |
| How long or cycle | One production reporting period, with lot and campaign coverage disclosed |
| reference_flow_link | The accepted output `separator_product` normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Battery Separator `e99018c0-aaf6-4f02-81cd-3dadeda4fabb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part family; primary or rechargeable battery application; electrochemical system; separator polymer and layer construction; coating material and coating status; dry or wet separator process; thickness; porosity or air-permeability specification; width and delivery form; accepted-product moisture basis; recycled-content claim; production geography; technology; reporting period; allocation method; packaging exclusion or inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference product and all mass-normalized rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize exchanges to 1 kg net dry mass of accepted product. Record moisture or retained process-oil basis where it affects measured mass, and do not include rejected material or distribution packaging in the denominator. |
| `measurement_electricity` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert to MJ using 1 kWh = 3.6 MJ; declare meter boundary and any submeter allocation. |
| `measurement_natural_gas` | natural-gas rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volume at the supplier or meter reference conditions and declare temperature, pressure, and whether the value is standard or actual volume. |
| `measurement_solutions` | sulfuric acid, NMP, liquid paraffin, and process-water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross purchased or replenishment mass crossing the boundary and separately declare concentration, purity, recovered fraction, and retained or evaporated fraction where applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased polymers, metals, active materials, binders, solvents, chemicals, water, fuels, and electricity are received at the battery-part manufacturing facility with specification and supplier identity records. |
| starting_condition_role | Upstream product inputs to route-specific foreground conversion |
| product_classification_scope | Separately supplied ready-for-assembly parts of primary cells, primary batteries, and electric accumulators, with a confirmed reference object for battery separators |
| recursive_input_rule | A purchased item already within this product category is recorded once as an upstream product input with its exact part identity; do not recursively include its manufacture inside the same foreground process unless the facility performs that manufacture and records it as a separate subprocess. |
| upstream_dataset_requirement | Use supplier- and geography-specific upstream datasets when available; otherwise disclose proxy geography, technology, product state, recycled content, and any missing supplier data. |
| disclosure | Declare part family, chemistry, route, included operations, purchased-versus-on-site material preparation, solvent recovery, emission controls, scrap destination, accepted-output mass, exclusions, and any added packaging or transport. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | all foreground data packages | Include exactly the route-specific processes and atomic exchanges that physically occur for the declared part; do not combine separator, lithium-ion electrode, and lead-acid grid/plate routes into an average unless a documented product mix and common reference product justify aggregation. | `mun-won-polyolefin-separator-manufacturing-2021`; `hawley-li-ion-electrode-manufacturing-2019`; `us-epa-ap42-storage-battery-production-1995` |
| `boundary_upstream_inputs` | purchased materials and utilities | End the foreground boundary at receipt of purchased inputs and link each input to an upstream dataset; do not reproduce upstream polymerization, mining, refining, active-material synthesis, metal production, electricity generation, gas supply, or water supply inside the foreground route. |  |
| `boundary_controls_and_recovery` | solvent recovery and air-pollution controls | Include energy, water, recovered material, captured waste, and residual direct emissions from on-site recovery and control equipment when that equipment serves the selected route. | `hawley-li-ion-electrode-manufacturing-2019`; `us-epa-ap42-storage-battery-production-1995` |
| `boundary_complete_battery_exclusion` | downstream assembly | Exclude cell stacking or winding, complete battery assembly, electrolyte filling of complete cells, formation of complete batteries, use, and end-of-life unless the declared product is itself the corresponding separately supplied part and the operation occurs before its release gate. | `un-cpc-3-0-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `separator_manufacturing` | Microporous polyolefin separator manufacture | `conditional` | Include when the reference product is a polyolefin battery separator; choose dry PP, wet PE, multilayer, and ceramic-coating operations according to the declared technology. | Foreground film conversion, pore formation, coating, finishing, and release | 1 kg accepted dry separator |
| `lithium_ion_electrode_manufacturing` | Lithium-ion electrode manufacture | `conditional` | Include when the product is a separately supplied coated lithium-ion anode or cathode; record only the declared polarity, chemistry, solvent, and current collector. | Foreground slurry preparation, coating, drying, solvent recovery, calendaring, slitting, and release | 1 kg accepted dry electrode |
| `lead_acid_grid_plate_manufacturing` | Lead-acid grid or plate manufacture | `conditional` | Include when the product is a separately supplied lead-acid grid or pasted/formed plate; distinguish cast or stamped grid and pasted or formed plate state. | Foreground alloy melting, casting or stamping, paste preparation, pasting, curing, optional formation, finishing, and release | 1 kg accepted grid or plate |

### Process: Microporous polyolefin separator manufacture (`separator_manufacturing`)

#### Inputs

##### Product flows

###### Polyethylene resin (`separator_polyethylene`)

Record polyethylene in primary form when the declared separator uses a PE wet-process or PE-containing multilayer route.

- Selected flow: polyethylene `f4dfd1a4-b24e-471e-bd21-04ad7a45ea52`
- Flow property / unit: Mass / kg
- Amount rule: measured net polyethylene charged to the route, including startup material and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

###### Polypropylene resin (`separator_polypropylene`)

Record separator-grade polypropylene in primary form only for dry PP or PP-containing multilayer routes; the exact Tiangong UUID remains unresolved.

- Selected flow: Polypropylene resin
- Flow property / unit: Mass / kg
- Amount rule: measured net polypropylene charged to the route, including startup material and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

###### Liquid paraffin process oil (`separator_liquid_paraffin`)

Record liquid paraffin used as the pore-forming diluent only for a wet separator process; do not substitute paraffin wax or generic mineral oil.

- Selected flow: Liquid paraffin process oil
- Flow property / unit: Mass / kg
- Amount rule: measured fresh and make-up liquid paraffin entering the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

###### Aluminium oxide coating powder (`separator_aluminium_oxide`)

Record aluminium oxide only when an alumina-coated separator is produced; declare purity, particle specification, and whether the material is supplied in a coating formulation.

- Selected flow: Aluminium oxide `1ab686e8-5888-4f37-8fe7-3030773ddc9e`
- Flow property / unit: Mass / kg
- Amount rule: measured dry aluminium oxide entering the coating operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

###### Electricity (`separator_electricity`)

Record metered electricity for extrusion, stretching, extraction, coating, drying, winding, ventilation, and route-dedicated auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured route electricity at the declared meter boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

###### Process water (`separator_process_water`)

Record process water that crosses the boundary for cooling, washing, extraction support, or coating preparation; exclude closed-loop recirculation that does not cross the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh and make-up process water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

###### Natural gas (`separator_natural_gas`)

Record gaseous natural gas only when it is burned on site for route-dedicated thermal duty; exclude upstream fuel-supply emissions from direct elementary outputs.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured natural gas delivered to route-dedicated heaters or allocated from a documented common meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted battery separator (`separator_product`)

Record only separator mass that passes release inspection. Startup web, edge trim, and rejected rolls are excluded from this output.

- Selected flow: Battery Separator `e99018c0-aaf6-4f02-81cd-3dadeda4fabb`
- Flow property / unit: Mass / kg
- Amount rule: accepted net dry separator mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

##### Waste flows

###### Polyethylene separator offcut scrap (`separator_pe_offcut_waste`)

Record dry PE startup web, edge trim, and rejected separator only when transferred out of the process as a distinct solid waste stream; declare contamination state.

- Selected flow: Polyethylene battery separator offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed PE separator offcut and reject mass leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

###### Polypropylene separator offcut scrap (`separator_pp_offcut_waste`)

Record dry PP startup web, edge trim, and rejected separator only when transferred out of the process as a distinct solid waste stream; declare contamination state.

- Selected flow: Polypropylene battery separator offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed PP separator offcut and reject mass leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources: `mun-won-polyolefin-separator-manufacturing-2021`

##### Elementary flows

###### Fossil carbon dioxide to air (`separator_carbon_dioxide`)

Record measured direct fossil carbon dioxide from on-site natural-gas combustion serving this route; do not include upstream electricity or fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or facility-verified direct stack emission allocated to the separator route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted separator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separator_records`
- Sources:

### Process: Lithium-ion electrode manufacture (`lithium_ion_electrode_manufacturing`)

#### Inputs

##### Product flows

###### Nickel-rich NMC cathode active material (`electrode_nickel_rich_nmc`)

Record this input only for a declared nickel-rich NMC cathode; do not use it for other cathode chemistries.

- Selected flow: Ni-rich NMC `f9e483f6-34da-43a9-bb96-c86bca4b494b`
- Flow property / unit: Mass / kg
- Amount rule: measured dry active material charged to cathode slurry or dry-electrode mixing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Graphite active-material powder (`electrode_graphite_powder`)

Record battery-grade graphite powder only for a graphite negative-electrode route; the exact Tiangong UUID remains unresolved.

- Selected flow: Battery-grade graphite active-material powder
- Flow property / unit: Mass / kg
- Amount rule: measured dry graphite powder charged to anode slurry or dry-electrode mixing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Carbon black conductive additive (`electrode_carbon_black`)

Record carbon black used as a conductive additive; do not combine it with active material or binder.

- Selected flow: Carbon black
- Flow property / unit: Mass / kg
- Amount rule: measured dry carbon black charged to electrode mixing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### PVDF binder (`electrode_pvdf`)

Record PVDF only when the declared electrode formulation uses this binder.

- Selected flow: Polyvinylidene Fluoride（PVDF） `f7f888c7-9524-4326-9a36-86f91e184a0b`
- Flow property / unit: Mass / kg
- Amount rule: measured dry PVDF binder charged to mixing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### NMP solvent (`electrode_nmp`)

Record gross fresh and make-up NMP entering the foreground boundary for an NMP-based wet coating route; separately record recovery and residual air release.

- Selected flow: N-Methyl-2-pyrrolidone (NMP) `5c41bfdd-a740-4672-aa66-88df7ea25f81`
- Flow property / unit: Mass / kg
- Amount rule: measured purchased and make-up NMP crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Aluminium current-collector foil (`electrode_aluminium_foil`)

Record aluminium foil only for an electrode manufactured on aluminium current collector; declare alloy, thickness, and surface treatment.

- Selected flow: Aluminum foil `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- Flow property / unit: Mass / kg
- Amount rule: measured aluminium foil issued to coating, including edge trim and startup losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Copper current-collector foil (`electrode_copper_foil`)

Record copper foil only for an electrode manufactured on copper current collector; declare thickness, temper, and surface treatment.

- Selected flow: Copper Foil `2e6d00db-7f50-43db-b13d-f8d4c14e51c5`
- Flow property / unit: Mass / kg
- Amount rule: measured copper foil issued to coating, including edge trim and startup losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Electricity (`electrode_electricity`)

Record metered electricity for mixing, coating, drying, solvent recovery, calendaring, slitting, ventilation, dry-room service allocated to this route, and inspection.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured route electricity at the declared meter boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Process water (`electrode_process_water`)

Record water crossing the boundary for aqueous slurry, equipment cleaning, cooling make-up, or control equipment; declare its role.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh and make-up process water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Natural gas (`electrode_natural_gas`)

Record gaseous natural gas only when burned on site for electrode drying or solvent recovery.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured natural gas delivered to route-dedicated thermal equipment or allocated from a documented common meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted graphite anode (`electrode_graphite_anode_product`)

Record this output only for a conforming graphite negative electrode released ready for battery assembly.

- Selected flow: Graphite Anode `ec5373c5-73d9-4831-9cb3-374ed54dba65`
- Flow property / unit: Mass / kg
- Amount rule: accepted net dry electrode mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted graphite anode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Accepted lithium-ion cathode (`electrode_cathode_product`)

Record this output only for a conforming coated cathode released ready for battery assembly; its exact Tiangong UUID remains unresolved.

- Selected flow: Ready-for-assembly lithium-ion battery cathode
- Flow property / unit: Mass / kg
- Amount rule: accepted net dry cathode mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted cathode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

##### Waste flows

###### Coated NMC cathode offcut scrap (`electrode_nmc_cathode_offcut_waste`)

Record coated aluminium-foil startup material, edge trim, and rejected nickel-rich NMC cathodes as one composition-specific solid waste stream; do not combine with waste solvent or anode scrap.

- Selected flow: Coated nickel-rich NMC cathode offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed coated NMC cathode offcuts and rejects leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Coated graphite anode offcut scrap (`electrode_graphite_anode_offcut_waste`)

Record coated copper-foil startup material, edge trim, and rejected graphite anodes as one composition-specific solid waste stream; do not combine with waste solvent or cathode scrap.

- Selected flow: Coated graphite anode offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed coated graphite-anode offcuts and rejects leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

##### Elementary flows

###### NMP to air (`electrode_nmp_to_air`)

Record measured residual NMP released to air after recovery and controls; do not use purchased solvent minus recovered solvent without accounting for retained solvent, waste solvent, and stock change.

- Selected flow: 1-methyl-2-pyrrolidone `fe0acd60-3ddc-11dd-a784-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured residual NMP air emission for the electrode route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources: `hawley-li-ion-electrode-manufacturing-2019`

###### Fossil carbon dioxide to air (`electrode_carbon_dioxide`)

Record measured direct fossil carbon dioxide from on-site natural-gas combustion serving drying or recovery; do not include upstream electricity or gas-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or facility-verified direct stack emission allocated to the electrode route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted electrode
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_records`
- Sources:

### Process: Lead-acid grid or plate manufacture (`lead_acid_grid_plate_manufacturing`)

#### Inputs

##### Product flows

###### Lead-antimony alloy (`lead_antimony_alloy`)

Record lead-antimony alloy only for a declared cast-grid or small-part route using this alloy; declare alloy composition and recycled content.

- Selected flow: Lead-antimony alloy `1f4bc7a0-5cc5-4cc6-bb83-5b05a6653732`
- Flow property / unit: Mass / kg
- Amount rule: measured alloy charged to grid or small-part casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted lead-acid grid or plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Lead oxide powder (`lead_oxide`)

Record lead oxide powder only when paste is prepared on site; do not combine it with lead alloy.

- Selected flow: Lead oxide powder
- Flow property / unit: Mass / kg
- Amount rule: measured dry lead oxide charged to paste mixing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted lead-acid plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Sulfuric acid (`lead_sulfuric_acid`)

Record sulfuric acid entering paste preparation or separate plate formation; declare concentration and operation.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: measured gross acid solution crossing the foreground boundary, with acid concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted lead-acid plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Barium sulfate expander (`lead_barium_sulfate`)

Record refined barium sulfate only when used in a declared negative-paste expander formulation; natural barite is not an exact substitute.

- Selected flow: Refined barium sulfate
- Flow property / unit: Mass / kg
- Amount rule: measured dry barium sulfate charged to negative-paste mixing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted negative plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Carbon black expander (`lead_carbon_black`)

Record carbon black only when it is separately charged to a negative-paste expander formulation.

- Selected flow: Carbon black
- Flow property / unit: Mass / kg
- Amount rule: measured dry carbon black charged to negative-paste mixing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted negative plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Process water (`lead_process_water`)

Record process water crossing the boundary for paste mixing, plate rinsing, cooling make-up, or emission-control equipment; declare its role.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh and make-up process water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted lead-acid grid or plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Electricity (`lead_electricity`)

Record metered electricity for mixing, pasting, curing, optional plate formation, cutting, ventilation, controls, and inspection.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured route electricity at the declared meter boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted lead-acid grid or plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Natural gas (`lead_natural_gas`)

Record gaseous natural gas only when burned on site for alloy melting, curing, drying, or route-dedicated thermal duty.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: measured natural gas delivered to route equipment or allocated from a documented common meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted lead-acid grid or plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted lead-acid battery grid (`lead_grid_product`)

Record this output only for a conforming cast or stamped grid released as a separately supplied part; the exact Tiangong UUID remains unresolved.

- Selected flow: Ready-for-assembly lead-acid battery grid
- Flow property / unit: Mass / kg
- Amount rule: accepted net grid mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted grid
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Accepted lead-acid battery plate (`lead_plate_product`)

Record this output only for a conforming pasted, cured, or separately formed plate released as a separately supplied part; declare plate polarity and state. The exact Tiangong UUID remains unresolved.

- Selected flow: Ready-for-assembly lead-acid battery plate
- Flow property / unit: Mass / kg
- Amount rule: accepted net dry plate mass normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

##### Waste flows

###### Lead-antimony battery-grid scrap (`lead_grid_scrap_waste`)

Record lead-antimony casting scrap, grid offcuts, and rejected grids leaving the foreground process as a declared solid waste stream; internal remelt is not an external output.

- Selected flow: Lead-antimony battery-grid scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed lead-antimony grid scrap transferred off site or to an independently modelled treatment process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted lead-acid grid or plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Pasted lead-acid battery-plate scrap (`lead_plate_scrap_waste`)

Record rejected pasted or formed lead-acid plates and plate offcuts leaving the foreground process as a declared solid waste stream; disclose polarity, acid state, and whether the scrap is wet or dry.

- Selected flow: Pasted lead-acid battery-plate scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed pasted or formed plate scrap transferred off site or to an independently modelled treatment process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted lead-acid plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

##### Elementary flows

###### Lead to air (`lead_to_air`)

Record measured lead and lead-compound releases to air expressed as elemental lead after on-site controls; use another compartment-specific flow only when release context is verified.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured total operational lead release to unspecified air allocated to the selected part route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted lead-acid grid or plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Sulfuric acid mist to air (`lead_sulfuric_acid_mist`)

Record measured sulfuric acid mist only when plate formation or another acid operation occurs within this part boundary; the exact Tiangong UUID remains unresolved.

- Selected flow: Sulfuric acid mist to air
- Flow property / unit: Mass / kg
- Amount rule: measured sulfuric acid mist released after controls from part-level acid operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted lead-acid plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources: `us-epa-ap42-storage-battery-production-1995`

###### Fossil carbon dioxide to air (`lead_carbon_dioxide`)

Record measured direct fossil carbon dioxide from on-site natural-gas combustion serving alloy melting, curing, or drying; do not include upstream electricity or gas-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or facility-verified direct stack emission allocated to the lead-part route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted lead-acid grid or plate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lead_part_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | mixed part families and technologies | Subdivide separator, electrode, grid, and plate routes and separately meter route-specific material, energy, waste, and emission flows before applying allocation. |  |
| `allocation_common_services` | common utilities and pollution controls | Allocate only genuinely common services using a documented causal driver such as metered energy, machine time, exhaust volume, treated mass, or accepted dry output mass; do not allocate by revenue when a physical causal driver is available. |  |
| `allocation_scrap_and_recovery` | scrap, recovered solvent, and internal recycle | Report off-site scrap and recovered solvent as separate outputs without netting them against gross material inputs. Internal recycle does not cross the system boundary; record the associated on-site energy and losses and disclose the recycle loop. | `hawley-li-ion-electrode-manufacturing-2019`; `us-epa-ap42-storage-battery-production-1995` |
| `allocation_unavoidable_choice` | residual multi-output allocation | When subdivision and causal allocation cannot resolve a residual burden, use dry output mass, disclose the affected flows and allocation fraction, and test a plausible alternative driver in sensitivity analysis. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_separator_records` | `separator_manufacturing` | all separator inputs, accepted output, offcut waste, and direct emissions | batch issue records; utility meters; weighbridge or waste manifests; release inspection; stack or facility emission records | material identity; supplier; lot; opening and closing stock; issued mass; returned mass; electricity; gas volume and reference conditions; water; accepted dry output; offcut mass; direct CO2; route and coating state | reconcile purchasing and inventory movements to batch records; read dedicated meters or allocate documented common meters; weigh accepted and rejected web; use verified direct-emission records | kg; MJ; m3 | each batch with monthly aggregation | representative consecutive production period, normally at least 12 months or the full shorter campaign | all on-site operations serving the declared separator route | subtract documented returns and stock change from gross issues; normalize each exchange by accepted dry separator mass; keep dry and wet routes separate | calibrated meter and scale records; material certificates; batch sheets; release test results; waste transfer records; emission-monitoring or verified inventory records |
| `cp_electrode_records` | `lithium_ion_electrode_manufacturing` | all electrode inputs, accepted outputs, offcut waste, NMP emission, and direct CO2 | formulation and batch records; foil issue records; meters; solvent recovery logs; reject logs; release inspection; air-emission records | polarity; chemistry; dry ingredients; solvent; foil type and mass; electricity; gas; water; recovered NMP; waste solvent; accepted dry electrode; offcut mass; NMP to air; direct CO2 | reconcile weighed formulation and foil records with inventory change; meter utilities; reconcile solvent input, recovery, waste, retained solvent, stock change, and measured release; weigh accepted and rejected electrode | kg; MJ; m3 | each batch and roll with monthly aggregation | representative consecutive production period, normally at least 12 months or the full shorter campaign | all on-site operations serving the declared electrode route, including allocated dry-room and recovery services | keep cathode and anode, chemistry, solvent route, and current collector separate; normalize by accepted dry electrode mass | calibrated scales and meters; formulation certificates; coating and drying logs; solvent-recovery balance; release tests; waste manifests; emission records |
| `cp_lead_part_records` | `lead_acid_grid_plate_manufacturing` | all lead-part inputs, accepted outputs, scrap, lead emission, acid mist, and direct CO2 | melt and casting logs; paste recipes; acid and water records; meters; curing or formation logs; scrap records; release inspection; emission records | alloy composition and mass; lead oxide; acid mass and concentration; barium sulfate; carbon black; water; electricity; gas reference conditions; accepted grid or plate mass; plate polarity and state; lead scrap; lead to air; acid mist; direct CO2 | reconcile material issues and stock change; read meters; weigh accepted product and off-site scrap; use route-specific measured emissions after controls | kg; MJ; m3 | each batch with monthly aggregation | representative consecutive production period, normally at least 12 months or the full shorter campaign | all on-site operations serving the declared grid or plate route and its controls | separate cast and stamped grids, positive and negative pastes, and formed and unformed plate states; normalize by accepted dry grid or plate mass | calibrated scales and meters; alloy and chemical certificates; batch and cure records; release tests; waste manifests; stack-test or verified emission records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_accepted_mass` | all collected inventory rows | normalized exchange = reporting-period exchange crossing the boundary / reporting-period accepted dry product mass | reconciled exchange quantity; accepted product mass | exchange per 1 kg accepted product |  |
| `calc_inventory_reconciliation` | purchased materials and solvents | consumed input = opening stock + receipts - closing stock - documented returns; report gross boundary input before subtracting internal recovery | stock records; purchase receipts; returns; internal recovery logs | reconciled input mass |  |
| `calc_common_meter_allocation` | common utility meters | allocated utility = common-meter quantity × documented causal share; causal shares shall sum to one over the meter boundary | common-meter reading; route driver totals | route-specific electricity, gas, or water |  |
| `calc_output_and_scrap_balance` | accepted product and solid scrap | reconcile input solids with accepted output, off-site scrap, captured residues, retained process material, and documented stock change; investigate unexplained imbalance rather than assigning it to a generic waste row | material issues; accepted output; scrap; residues; stock change | disclosed mass-balance closure |  |
| `calc_solvent_balance` | NMP and wet-separator process oil | reconcile fresh input, recovered internal recycle, off-site waste, residual product retention, air release, and stock change without double counting internal recycle as a boundary flow | solvent or process-oil input; recovery; waste; retained mass; air emission; stock change | disclosed solvent balance | `hawley-li-ion-electrode-manufacturing-2019`; `mun-won-polyolefin-separator-manufacturing-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and route outputs | Declare part family, polarity where relevant, chemistry, material construction, dimensions, dry or wet process, formed or unformed state, specification, and accepted-product mass. | Product specification; bill of materials; release inspection; batch and lot traceability |
| `dq_temporal_representativeness` | all foreground data | Cover a representative consecutive period, normally 12 months; if a shorter campaign is used, disclose dates, production volume, startup effects, and seasonality limitation. | Meter dates; batch records; production calendar; explanation of exclusions |
| `dq_completeness` | all route exchanges | Reconcile purchased inputs, accepted output, internal recycle, off-site waste, and direct emissions; document every excluded operation and zero row as not applicable rather than silently omitting it. | Mass and solvent balances; meter reconciliation; waste manifests; emission records |
| `dq_meter_allocation` | shared services | Identify the physical meter boundary and causal allocation driver; report the share assigned to the selected route and retain evidence that shares sum to one. | Meter map; driver records; allocation worksheet |
| `dq_uuid_and_localization` | Tiangong references | Use only directly verified state-100 UUIDs and exact Tiangong Chinese baseNames. Keep unresolved rows UUID-empty until an exact identity, classification, property, unit group, product state, and compartment are confirmed. | Finalized UUID-search receipts; direct-read identity records; unresolved manifest entries |
| `dq_range_status` | important inventory amounts | Treat all amounts as foreground requirements. No external empirical range is approved until at least two independent original sources with compatible boundary, reference unit, and product state support a synthesis. | Foreground records; manifest range-evidence needs; future source review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | reference flow | The separator route shall report exactly 1 kg accepted Battery Separator as the reference output and shall exclude offcut, reject, moisture-basis, and outbound packaging mass from that amount. A non-separator product shall not use the separator UUID. |  |
| `validation_route_exclusivity` | process selection | At least one declared route shall apply, and every included process and row shall match the declared part family, chemistry, polarity, material, and technology; unrelated conditional rows shall be marked not applicable. |  |
| `validation_atomic_flows` | process inventory | Each inventory card shall represent one atomic exchange with direction, flow type, property, unit, amount source, basis, evidence, and applicable route; combined utilities, materials, wastes, or emission groups fail validation. |  |
| `validation_mass_and_solvent_balance` | foreground calculations | The data package shall present accepted-output, solid-material, and applicable solvent balances and explain material imbalances rather than assigning them to unspecified losses. | `hawley-li-ion-electrode-manufacturing-2019`; `mun-won-polyolefin-separator-manufacturing-2021`; `us-epa-ap42-storage-battery-production-1995` |
| `validation_emission_scope` | direct elementary flows | Direct lead, sulfuric acid mist, NMP, and fossil CO2 rows shall be included only when the emitting operation occurs inside the foreground boundary; upstream electricity and purchased-input emissions shall remain in linked upstream datasets. | `hawley-li-ion-electrode-manufacturing-2019`; `us-epa-ap42-storage-battery-production-1995` |
| `validation_unresolved_identity` | UUID-empty rows | UUID-empty rows are review-required and shall not be silently mapped to broader, differently classified, differently measured, or wrong-compartment candidates. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; eligible for `background_dataset` use only after methodology review, exact output-flow resolution for the declared part, and complete quality disclosure |
| downstream_use | Foreground product-system construction for separately supplied battery parts; process and lifecyclemodel projections; supplier or technology comparison within the same declared part family and reference-flow definition |
| allowed_use | Use for a declared separator route with the confirmed reference flow, or for another covered part only after an exact approved product flow and route inventory are supplied; compare datasets only when part state, chemistry, specification, boundary, allocation, geography, and period are compatible |
| excluded_use | Complete battery or cell results; performance-per-kWh claims without a separate functional model; cross-chemistry or cross-part comparison without functional equivalence; reuse of the separator UUID for electrodes, grids, plates, or other parts; use of unresolved UUIDs as confirmed identities |
| required_metadata | PCR id and version state; part family; exact product flow; chemistry and polarity; material construction; route and technology; dimensions and delivery form; accepted-output mass and moisture basis; geography; reporting period; meter boundaries; allocation; solvent recovery; emission controls; scrap destination; exclusions; upstream dataset choices |
| required_quality_disclosure | Primary-data share; temporal, geographical, and technological representativeness; material and solvent balance closure; metering and allocation coverage; unresolved flow identities; data gaps; proxies; verification status; absence of approved external amount ranges |
| update_trigger | Change in part family, chemistry, active material, polymer, layer construction, coating, current collector, alloy, dry/wet process, formation state, solvent or recovery system, energy source, emission controls, scrap route, facility geography, allocation driver, reference product identity, or evidence supporting ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 46430 classification identity and separation from complete cells, batteries, and accumulators |
| `us-epa-ap42-storage-battery-production-1995` | `official_guidance` | U.S. EPA, AP-42 Section 12.15, Storage Battery Production, January 1995, https://www.epa.gov/sites/default/files/2020-11/documents/c12s15.pdf | Lead-acid grid, paste, plate, curing, formation, scrap, control, lead-emission, and sulfuric-acid-mist process decomposition |
| `mun-won-polyolefin-separator-manufacturing-2021` | `literature` | Mun, S. C.; Won, J. H. Manufacturing Processes of Microporous Polyolefin Separators for Lithium-Ion Batteries and Correlations between Mechanical and Physical Properties. Crystals 2021, 11, 1013. https://doi.org/10.3390/cryst11091013 | Dry PP and wet PE separator process routes; extrusion, annealing, stretching, extraction, multilayer, and coating decisions |
| `hawley-li-ion-electrode-manufacturing-2019` | `literature` | Hawley, W. B.; Li, J. Electrode manufacturing for lithium-ion batteries—Analysis of current and next generation processing. Journal of Energy Storage 25 (2019) 100862. https://doi.org/10.1016/j.est.2019.100862 | Electrode mixing, slurry, coating, drying, solvent recovery, current-collector, calendaring, waste, and quality-control process decomposition |
