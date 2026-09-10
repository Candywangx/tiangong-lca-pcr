---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-accumulators
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Electric accumulators

## 1. Scope and Applicability

This PCR governs factory-gate foreground packages for finished rechargeable cells, batteries, modules, and packs in CPC 46420. Lead-acid, nickel-cadmium, nickel-metal-hydride, lithium-ion, and another rechargeable chemistry are covered only when chemistry, product level, application, facility, and route are declared. Primary cells, separately sold parts, spent batteries, chargers, inverters, and complete energy-storage installations are excluded.

The foreground boundary starts at materials, electrodes or plates, electrolytes, separators, housings, electronics, finished cells, and utilities received by the facility and ends at the conforming accumulator released at the factory gate. Distribution, use, second life, and end-of-life are downstream. Every purchased input requires an upstream dataset or an explicit data gap.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-accumulators |
| classification_refs | CPC 3.0: 46420 Electric accumulators |
| covered_products | Finished rechargeable cells, batteries, modules, and packs |
| excluded_products | Primary batteries; separately sold parts; spent batteries; chargers; power-conversion equipment; complete storage installations |
| representative_product | A conforming 3C lithium battery; representative only for that verified route |
| production_route | Route-specific electrode or plate preparation; cell assembly; formation and testing; optional module or pack assembly; carrier-specific utilities |
| market_state | New conforming accumulator released at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate production of a conforming finished rechargeable electric accumulator |
| How much | 1 kg of released finished product |
| How well | Meets declared chemistry, voltage, capacity, energy, safety configuration, and release-test specification |
| How long or cycle | One production lot; lifetime performance remains a separate qualifier |
| reference_flow_link | Net released-product mass normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 3C Lithium Battery `000abc1e-59e3-4336-bfd6-66575a4b0bda` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | chemistry; product level; application; model; voltage; capacity; rated energy where applicable; state of charge; included components and packaging; route; facility; geography; period |

The state100 flow is Product/Mass and classified exactly to CPC 46420. It is not an identity for lead-acid, nickel-based, or other accumulator routes; those products remain UUID-unresolved until an exact state100 flow is verified.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Finished product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net released-product mass with a calibrated scale and preserve the packaging convention. |
| `material_mass` | Each named material, component, waste, or released substance | Mass | kg | Record each atomic exchange separately; count-to-mass conversion requires model-specific item mass. |
| `electricity_energy` | Each electricity row | Energy | kWh | Preserve imported, returned, reused, and exported registers separately. |
| `thermal_carrier_energy` | Steam, hot water, natural gas, diesel, LPG | Energy | MJ | Meter and convert each named carrier separately; never report generic heat. |
| `water_stream` | Water and wastewater | Mass or volume | kg or m3 | Preserve stream identity; calculate each elemental water release from concentration and flow. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_declaration` | All packages | Declare chemistry, product level, starting condition, process applicability, and included utilities before selecting rows. | `eu-batteries-regulation-2023`; `ec-battery-pefcr-2018` |
| `boundary_atomic_inventory` | Materials, energy, waste, wastewater, air and water releases | Use one concrete exchange per row; add a new named row when the actual substance, material, carrier, compartment, or waste differs. | `ec-pef-method-2021`; `us-epa-battery-effluent-guidelines` |
| `boundary_purchased_inputs` | Purchased materials, components, cells, utilities, packaging | Keep every input visible and link an upstream dataset; do not recursively reproduce a purchased accumulator. | `ec-pef-method-2021` |
| `boundary_terminal_gate` | Reference product | End at factory-gate release; keep use and end-of-life downstream. | `eu-batteries-regulation-2023` |
| `boundary_no_route_extrapolation` | Route evidence | Do not generalize lithium-ion, lead-acid, nickel-cadmium, or nickel-metal-hydride identities or quantities to another route. | `ec-battery-pefcr-2018`; `argonne-battery-lca-2010` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare whether the facility receives active materials, prepared electrodes or plates, finished rechargeable cells, finished modules, or another named intermediate, including chemistry, physical state, and included components. |
| starting_condition_role | The starting condition determines which electrode, plate, cell, formation, module, pack, utility, and treatment operations are foreground and which purchased inputs require upstream datasets. |
| product_classification_scope | CPC 3.0 code 46420, limited to finished electric accumulators; primary batteries, separately sold parts, spent batteries, chargers, power-conversion equipment, and complete storage installations remain outside scope. |
| recursive_input_rule | Keep a purchased finished cell, module, or other accumulator as one visible product input linked to its upstream dataset; do not recursively reproduce its manufacturing inventory inside the receiving process. |
| upstream_dataset_requirement | Link every purchased atomic material, component, cell, utility carrier, refrigerant, and included packaging item to a geographically, technologically, and temporally representative upstream dataset, or record a specific unresolved data gap. |
| disclosure | Disclose chemistry, product level, starting condition, applicable and omitted processes, cut-offs, internal returns, waste and emission treatment, included packaging, and every proxy or unresolved upstream link. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `electrode_plate_preparation` | Electrode and plate preparation | conditional | Include only for electrodes or plates made or finished on-site. | Chemistry-specific electrode or plate manufacture | kg of conforming prepared electrode or plate |
| `cell_assembly_sealing` | Cell assembly, electrolyte filling, and sealing | conditional | Include when rechargeable cells are manufactured on-site. | Chemistry-specific cell manufacture | kg of sealed unformed cells |
| `formation_ageing_testing` | Formation, ageing, and release testing | required | Apply to on-site formation and every final release-test operation. | Electrical activation and quality release | kg of conforming tested accumulator |
| `module_pack_assembly` | Module and pack assembly | conditional | Include when cells, modules, controls, interconnects, housings, cooling parts, or included packaging are assembled on-site. | Final accumulator assembly | kg of conforming finished accumulator |
| `site_utilities_treatment` | Site utilities and pollution control | conditional | Include each carrier or treatment train only when it serves the declared product and is not already measured in another foreground process. | Carrier-specific utility supply and release accounting | kg of conforming finished accumulator served |

### Process: Electrode and plate preparation (`electrode_plate_preparation`)

#### Inputs

##### Product flows

###### Lithium nickel manganese cobalt oxide cathode active material (`nmc_cathode_active_input`)

Lithium-ion NMC cathode route only.

- Selected flow: Lithium nickel manganese cobalt oxide cathode active material
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Lithium iron phosphate cathode active material (`lfp_cathode_active_input`)

Lithium-ion LFP cathode route only.

- Selected flow: Lithium iron phosphate cathode active material
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Lithium manganese oxide cathode active material (`lmo_cathode_active_input`)

Lithium-ion LMO cathode route only.

- Selected flow: Lithium manganese oxide cathode active material
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Graphite anode active material (`graphite_anode_active_input`)

Lithium-ion graphite-anode route only.

- Selected flow: Graphite anode active material
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Lead oxide for battery paste (`lead_oxide_active_input`)

Lead-acid plate route only.

- Selected flow: Lead oxide for battery paste
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Lead alloy grid (`lead_alloy_grid_input`)

Lead-acid plate route only.

- Selected flow: Lead alloy grid
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Nickel hydroxide positive-electrode material (`nickel_hydroxide_active_input`)

Nickel-cadmium and nickel-metal-hydride positive-electrode routes only.

- Selected flow: Nickel hydroxide positive-electrode material
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Cadmium hydroxide negative-electrode material (`cadmium_hydroxide_active_input`)

Nickel-cadmium negative-electrode route only.

- Selected flow: Cadmium hydroxide negative-electrode material
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Hydrogen-storage metal alloy negative-electrode material (`metal_hydride_alloy_input`)

Nickel-metal-hydride negative-electrode route only.

- Selected flow: Hydrogen-storage metal alloy negative-electrode material
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Polyvinylidene fluoride binder (`pvdf_binder_input`)

Lithium-ion solvent-based electrode route only.

- Selected flow: Polyvinylidene fluoride binder
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Styrene-butadiene rubber binder (`sbr_binder_input`)

Lithium-ion water-based graphite-anode route only.

- Selected flow: Styrene-butadiene rubber binder
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Carbon black conductive additive (`carbon_black_input`)

Only routes whose approved formulation contains carbon black.

- Selected flow: Carbon black conductive additive
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### N-Methyl-2-pyrrolidone (NMP) (`nmp_solvent_input`)

Lithium-ion PVDF electrode-slurry route only; record virgin and externally recovered NMP separately from internal recirculation.

- Selected flow: N-Methyl-2-pyrrolidone (NMP) `5c41bfdd-a740-4672-aa66-88df7ea25f81`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Deionised water (`deionised_water_slurry_input`)

Only water-based slurry, washing, or paste routes; do not merge with cooling water.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`

###### Aluminium foil current collector (`aluminium_foil_collector_input`)

Lithium-ion cathode route only.

- Selected flow: Aluminium foil current collector
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `us-epa-nickel-battery-1996`

###### Copper foil current collector (`copper_foil_collector_input`)

Lithium-ion graphite-anode route only.

- Selected flow: Copper foil current collector
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `us-epa-nickel-battery-1996`

###### Nickel-plated steel electrode substrate (`nickel_plated_steel_substrate_input`)

Applicable nickel-based electrode routes only.

- Selected flow: Nickel-plated steel electrode substrate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `ec-battery-pefcr-2018`; `us-epa-nickel-battery-1996`

###### Electricity, alternating current, at plant (`electrode_electricity_input`)

Site-metered electricity attributable to electrode or plate preparation; applicable to every on-site route using electrical equipment.

- Selected flow: Electricity, alternating current, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity for mixing, coating, drying, curing, calendaring, slitting, ventilation, and dry-room service attributable to this process; do not merge it with thermal carriers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_utilities`
- Sources: `ec-battery-pefcr-2018`; `porzio-scown-2021`

#### Outputs

##### Product flows

###### Prepared lithium-ion cathode electrode (`lithium_cathode_electrode_output`)

Lithium-ion route only.

- Selected flow: Prepared lithium-ion cathode electrode
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### Prepared lithium-ion anode electrode (`lithium_anode_electrode_output`)

Lithium-ion route only.

- Selected flow: Prepared lithium-ion anode electrode
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### Prepared lead-acid positive plate (`lead_positive_plate_output`)

Lead-acid route only.

- Selected flow: Prepared lead-acid positive plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### Prepared lead-acid negative plate (`lead_negative_plate_output`)

Lead-acid route only.

- Selected flow: Prepared lead-acid negative plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### Prepared nickel hydroxide positive plate (`nickel_positive_plate_output`)

Nickel-cadmium or nickel-metal-hydride route only.

- Selected flow: Prepared nickel hydroxide positive plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### Prepared cadmium negative plate (`cadmium_negative_plate_output`)

Nickel-cadmium route only.

- Selected flow: Prepared cadmium negative plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### Prepared metal-hydride negative plate (`metal_hydride_negative_plate_output`)

Nickel-metal-hydride route only.

- Selected flow: Prepared metal-hydride negative plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_materials`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

##### Waste flows

###### NMP distillation residue (`nmp_distillation_residue_output`)

Lithium-ion NMP recovery route only.

- Selected flow: NMP distillation residue
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Lithium-ion cathode coating scrap (`lithium_cathode_coating_scrap_output`)

Lithium-ion cathode route only.

- Selected flow: Lithium-ion cathode coating scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Lithium-ion anode coating scrap (`lithium_anode_coating_scrap_output`)

Lithium-ion anode route only.

- Selected flow: Lithium-ion anode coating scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Lead-bearing paste scrap (`lead_paste_scrap_output`)

Lead-acid route only.

- Selected flow: Lead-bearing paste scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Cadmium-bearing plate scrap (`cadmium_plate_scrap_output`)

Nickel-cadmium route only.

- Selected flow: Cadmium-bearing plate scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Nickel-bearing plate scrap (`nickel_plate_scrap_output`)

Nickel-based routes only.

- Selected flow: Nickel-bearing plate scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

##### Elementary flows

###### N-Methyl-2-pyrrolidone to air (`nmp_to_air_output`)

Lithium-ion NMP route only.

- Selected flow: N-Methyl-2-pyrrolidone to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Lead to air (`lead_to_air_output`)

Lead-acid route only.

- Selected flow: Lead to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Nickel to air (`nickel_to_air_output`)

Nickel-based routes only.

- Selected flow: Nickel to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Cadmium to air (`cadmium_to_air_output`)

Nickel-cadmium route only.

- Selected flow: Cadmium to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrode_waste_releases`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

### Process: Cell assembly, electrolyte filling, and sealing (`cell_assembly_sealing`)

#### Inputs

##### Product flows

###### Prepared lithium-ion cathode electrode (`lithium_cathode_electrode_input`)

Lithium-ion route only.

- Selected flow: Prepared lithium-ion cathode electrode
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Prepared lithium-ion anode electrode (`lithium_anode_electrode_input`)

Lithium-ion route only.

- Selected flow: Prepared lithium-ion anode electrode
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Prepared lead-acid positive plate (`lead_positive_plate_input`)

Lead-acid route only.

- Selected flow: Prepared lead-acid positive plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Prepared lead-acid negative plate (`lead_negative_plate_input`)

Lead-acid route only.

- Selected flow: Prepared lead-acid negative plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Prepared nickel hydroxide positive plate (`nickel_positive_plate_input`)

Nickel-based routes only.

- Selected flow: Prepared nickel hydroxide positive plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Prepared cadmium negative plate (`cadmium_negative_plate_input`)

Nickel-cadmium route only.

- Selected flow: Prepared cadmium negative plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Prepared metal-hydride negative plate (`metal_hydride_negative_plate_input`)

Nickel-metal-hydride route only.

- Selected flow: Prepared metal-hydride negative plate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Polyethylene battery separator (`polyethylene_separator_input`)

Only product designs specifying PE separator.

- Selected flow: Polyethylene battery separator
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Polypropylene battery separator (`polypropylene_separator_input`)

Only product designs specifying PP separator.

- Selected flow: Polypropylene battery separator
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Glass-fibre mat battery separator (`glass_fibre_mat_separator_input`)

Absorbent-glass-mat lead-acid route only.

- Selected flow: Glass-fibre mat battery separator
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Ethylene carbonate electrolyte solvent (`ethylene_carbonate_input`)

Lithium-ion carbonate-electrolyte route only.

- Selected flow: Ethylene carbonate electrolyte solvent
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Dimethyl carbonate electrolyte solvent (`dimethyl_carbonate_input`)

Lithium-ion carbonate-electrolyte route only.

- Selected flow: Dimethyl carbonate electrolyte solvent
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Lithium hexafluorophosphate electrolyte salt (`lithium_hexafluorophosphate_input`)

Lithium-ion LiPF6 electrolyte route only.

- Selected flow: Lithium hexafluorophosphate electrolyte salt
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Sulfuric acid electrolyte (`sulfuric_acid_electrolyte_input`)

Lead-acid route only.

- Selected flow: Sulfuric acid electrolyte
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Potassium hydroxide electrolyte (`potassium_hydroxide_electrolyte_input`)

Nickel-cadmium and nickel-metal-hydride routes only.

- Selected flow: Potassium hydroxide electrolyte
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Steel cell can (`steel_cell_can_input`)

Only steel-can product configurations.

- Selected flow: Steel cell can
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Aluminium-plastic pouch laminate (`aluminium_pouch_laminate_input`)

Pouch-cell configuration only.

- Selected flow: Aluminium-plastic pouch laminate
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Polypropylene battery case (`polypropylene_battery_case_input`)

Only polypropylene-case configurations.

- Selected flow: Polypropylene battery case
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Copper battery terminal (`copper_terminal_input`)

Only designs specifying a copper terminal.

- Selected flow: Copper battery terminal
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Lead battery terminal (`lead_terminal_input`)

Lead-acid designs specifying a lead terminal.

- Selected flow: Lead battery terminal
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Electricity, alternating current, at plant (`cell_assembly_electricity_input`)

Site-metered electricity attributable to cell assembly, filling, sealing, vacuum, and dry-room equipment.

- Selected flow: Electricity, alternating current, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity for stacking or winding, filling, sealing, vacuum, dry-room, and directly attributable ventilation; do not merge with thermal carriers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_utilities`
- Sources: `ec-battery-pefcr-2018`; `porzio-scown-2021`

#### Outputs

##### Product flows

###### Unformed lithium-ion rechargeable cell (`unformed_lithium_ion_cell_output`)

Lithium-ion route only.

- Selected flow: Unformed lithium-ion rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Unformed lead-acid rechargeable cell (`unformed_lead_acid_cell_output`)

Lead-acid route only.

- Selected flow: Unformed lead-acid rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Unformed nickel-cadmium rechargeable cell (`unformed_nickel_cadmium_cell_output`)

Nickel-cadmium route only.

- Selected flow: Unformed nickel-cadmium rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### Unformed nickel-metal-hydride rechargeable cell (`unformed_nickel_metal_hydride_cell_output`)

Nickel-metal-hydride route only.

- Selected flow: Unformed nickel-metal-hydride rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_materials`
- Sources: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

##### Waste flows

###### Ethylene carbonate electrolyte waste (`ethylene_carbonate_waste_output`)

Lithium-ion carbonate-electrolyte route only; determine this constituent from direct segregation or a documented waste-composition balance.

- Selected flow: Ethylene carbonate electrolyte waste
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### Dimethyl carbonate electrolyte waste (`dimethyl_carbonate_waste_output`)

Lithium-ion carbonate-electrolyte route only; determine this constituent from direct segregation or a documented waste-composition balance.

- Selected flow: Dimethyl carbonate electrolyte waste
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### Lithium hexafluorophosphate electrolyte-salt waste (`lithium_hexafluorophosphate_waste_output`)

Lithium-ion LiPF6 electrolyte route only; determine this constituent from direct segregation or a documented waste-composition balance.

- Selected flow: Lithium hexafluorophosphate electrolyte-salt waste
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### Spent sulfuric acid electrolyte (`sulfuric_acid_electrolyte_waste_output`)

Lead-acid route only.

- Selected flow: Spent sulfuric acid electrolyte
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### Spent potassium hydroxide electrolyte (`potassium_hydroxide_electrolyte_waste_output`)

Nickel-based alkaline-electrolyte routes only.

- Selected flow: Spent potassium hydroxide electrolyte
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### Polyethylene separator scrap (`polyethylene_separator_scrap_output`)

Only PE-separator configurations.

- Selected flow: Polyethylene separator scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### Polypropylene separator scrap (`polypropylene_separator_scrap_output`)

Only PP-separator configurations.

- Selected flow: Polypropylene separator scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

##### Elementary flows

###### Ethylene carbonate to air (`ethylene_carbonate_to_air_output`)

Lithium-ion routes using ethylene carbonate only; keep separate from every other electrolyte solvent.

- Selected flow: Ethylene carbonate to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `us-epa-ap42-lead-acid-1995`; `ec-battery-pefcr-2018`

###### Dimethyl carbonate to air (`dimethyl_carbonate_to_air_output`)

Lithium-ion routes using dimethyl carbonate only; keep separate from every other electrolyte solvent.

- Selected flow: Dimethyl carbonate to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `us-epa-ap42-lead-acid-1995`; `ec-battery-pefcr-2018`

###### Sulfuric acid mist to air (`sulfuric_acid_mist_cell_to_air_output`)

Lead-acid assembly and filling route only.

- Selected flow: Sulfuric acid mist to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cell_waste_releases`
- Sources: `us-epa-ap42-lead-acid-1995`; `ec-battery-pefcr-2018`

### Process: Formation, ageing, and release testing (`formation_ageing_testing`)

#### Inputs

##### Product flows

###### Unformed lithium-ion rechargeable cell (`unformed_lithium_ion_cell_input`)

Lithium-ion route only.

- Selected flow: Unformed lithium-ion rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

###### Unformed lead-acid rechargeable cell (`unformed_lead_acid_cell_input`)

Lead-acid route only.

- Selected flow: Unformed lead-acid rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

###### Unformed nickel-cadmium rechargeable cell (`unformed_nickel_cadmium_cell_input`)

Nickel-cadmium route only.

- Selected flow: Unformed nickel-cadmium rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

###### Unformed nickel-metal-hydride rechargeable cell (`unformed_nickel_metal_hydride_cell_input`)

Nickel-metal-hydride route only.

- Selected flow: Unformed nickel-metal-hydride rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

###### Electricity, alternating current, at plant (`formation_electricity_input`)

Imported site-metered electricity attributable to formation, ageing, cycling, and release testing.

- Selected flow: Electricity, alternating current, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record imported metered electricity for formation, ageing, cycling, and release testing before subtracting separately metered electricity returned and reused.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`; `porzio-scown-2021`

###### Deionised water (`formation_cooling_water_input`)

Make-up deionised water crossing the formation-cooling boundary; applicable only where this water quality is actually used.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record make-up deionised cooling water only when it crosses the process boundary; do not record closed-loop recirculation as repeated input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

#### Outputs

##### Product flows

###### Tested lithium-ion rechargeable cell (`tested_lithium_ion_cell_output`)

Lithium-ion route only.

- Selected flow: Tested lithium-ion rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

###### Tested lead-acid rechargeable cell (`tested_lead_acid_cell_output`)

Lead-acid route only.

- Selected flow: Tested lead-acid rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

###### Tested nickel-cadmium rechargeable cell (`tested_nickel_cadmium_cell_output`)

Nickel-cadmium route only.

- Selected flow: Tested nickel-cadmium rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

###### Tested nickel-metal-hydride rechargeable cell (`tested_nickel_metal_hydride_cell_output`)

Nickel-metal-hydride route only.

- Selected flow: Tested nickel-metal-hydride rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-battery-pefcr-2018`

###### Electricity exported from formation testing (`formation_exported_electricity_output`)

Separately metered electricity that leaves formation testing and crosses the declared foreground boundary.

- Selected flow: Electricity exported from formation testing
- Flow property / unit: Energy / kWh
- Amount rule: Record only electricity separately metered as crossing the foreground boundary; do not also subtract it from imported electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `ec-pef-method-2021`

##### Waste flows

###### Rejected lithium-ion rechargeable cell (`rejected_lithium_ion_cell_output`)

Lithium-ion route only.

- Selected flow: Rejected lithium-ion rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

###### Rejected lead-acid rechargeable cell (`rejected_lead_acid_cell_output`)

Lead-acid route only.

- Selected flow: Rejected lead-acid rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

###### Rejected nickel-cadmium rechargeable cell (`rejected_nickel_cadmium_cell_output`)

Nickel-cadmium route only.

- Selected flow: Rejected nickel-cadmium rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

###### Rejected nickel-metal-hydride rechargeable cell (`rejected_nickel_metal_hydride_cell_output`)

Nickel-metal-hydride route only.

- Selected flow: Rejected nickel-metal-hydride rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

###### Formation-process wastewater (`formation_wastewater_output`)

Only when a physically collected formation wastewater stream leaves this process; substance releases to water remain separate elementary flows.

- Selected flow: Formation-process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

##### Elementary flows

###### Hydrogen to air (`formation_hydrogen_to_air_output`)

Lead-acid formation route when vented hydrogen crosses the boundary.

- Selected flow: Hydrogen to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `us-epa-ap42-lead-acid-1995`

###### Sulfuric acid mist to air (`sulfuric_acid_mist_formation_to_air_output`)

Lead-acid formation route only.

- Selected flow: Sulfuric acid mist to air
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formation_testing`
- Sources: `us-epa-ap42-lead-acid-1995`

### Process: Module and pack assembly (`module_pack_assembly`)

#### Inputs

##### Product flows

###### Tested lithium-ion rechargeable cell (`tested_lithium_ion_cell_input`)

Lithium-ion module or pack route only.

- Selected flow: Tested lithium-ion rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Tested lead-acid rechargeable cell (`tested_lead_acid_cell_input`)

Lead-acid battery assembly route only.

- Selected flow: Tested lead-acid rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Tested nickel-cadmium rechargeable cell (`tested_nickel_cadmium_cell_input`)

Nickel-cadmium battery assembly route only.

- Selected flow: Tested nickel-cadmium rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Tested nickel-metal-hydride rechargeable cell (`tested_nickel_metal_hydride_cell_input`)

Nickel-metal-hydride battery assembly route only.

- Selected flow: Tested nickel-metal-hydride rechargeable cell
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Aluminium battery-pack enclosure (`aluminium_pack_enclosure_input`)

Only designs specifying an aluminium enclosure.

- Selected flow: Aluminium battery-pack enclosure
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Steel battery-pack enclosure (`steel_pack_enclosure_input`)

Only designs specifying a steel enclosure.

- Selected flow: Steel battery-pack enclosure
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Copper busbar (`copper_busbar_input`)

Only designs specifying a copper busbar.

- Selected flow: Copper busbar
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Insulated copper cable (`insulated_copper_cable_input`)

Only designs containing this cable.

- Selected flow: Insulated copper cable
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Printed circuit board for battery management system (`battery_management_pcb_input`)

Only products containing a battery-management circuit.

- Selected flow: Printed circuit board for battery management system
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Electrical connector for battery pack (`electrical_connector_input`)

Only products containing this connector.

- Selected flow: Electrical connector for battery pack
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Ethylene glycol coolant (`ethylene_glycol_coolant_input`)

Only liquid-cooled designs using ethylene glycol.

- Selected flow: Ethylene glycol coolant
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Deionised water (`deionised_water_coolant_input`)

Only liquid-cooled designs using deionised water; record separately from ethylene glycol.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Corrugated cardboard carton (`corrugated_cardboard_carton_input`)

Only packaging included at the declared factory gate.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Wood pallet (`wood_pallet_input`)

Only pallets included at the declared factory gate.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Polyethylene packaging film (`polyethylene_packaging_film_input`)

Only film included at the declared factory gate.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### Electricity, alternating current, at plant (`pack_assembly_electricity_input`)

Site-metered electricity attributable to module or pack joining, fastening, welding, controls installation, and final testing.

- Selected flow: Electricity, alternating current, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity for joining, fastening, welding, electronics installation, leak testing, and final assembly; do not merge with heat or fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`

#### Outputs

##### Product flows

###### 3C Lithium Battery (`reference_product_output`)

The verified CPC 46420 Product/Mass reference output, applicable only to the declared 3C lithium-battery route.

- Selected flow: 3C Lithium Battery `000abc1e-59e3-4336-bfd6-66575a4b0bda`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Set exactly 1 kg for the CPC 46420 representative lithium-battery route after release-test acceptance; another chemistry must remain unresolved until an exact Product/Mass CPC 46420 state100 flow is verified.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg of conforming finished reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `unsd-cpc-3-0`

##### Waste flows

###### Aluminium enclosure scrap (`aluminium_enclosure_scrap_output`)

Aluminium-enclosure route only.

- Selected flow: Aluminium enclosure scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`

###### Steel enclosure scrap (`steel_enclosure_scrap_output`)

Steel-enclosure route only.

- Selected flow: Steel enclosure scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`

###### Copper busbar scrap (`copper_busbar_scrap_output`)

Copper-busbar route only.

- Selected flow: Copper busbar scrap
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`

###### Battery-management electronic waste (`battery_electronic_waste_output`)

Only products with battery-management electronics.

- Selected flow: Battery-management electronic waste
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`

###### Corrugated cardboard packaging waste (`cardboard_packaging_waste_output`)

Only when cardboard becomes waste inside the declared gate.

- Selected flow: Corrugated cardboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`

###### Polyethylene packaging-film waste (`polyethylene_packaging_waste_output`)

Only when film becomes waste inside the declared gate.

- Selected flow: Polyethylene packaging-film waste
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack_assembly`
- Sources: `ec-battery-pefcr-2018`

### Process: Site utilities and pollution control (`site_utilities_treatment`)

#### Inputs

##### Product flows

###### Steam supplied to battery manufacturing (`site_steam_input`)

Metered steam serving the declared battery-manufacturing route; keep separate from hot water and fuels.

- Selected flow: Steam supplied to battery manufacturing
- Flow property / unit: Energy / MJ
- Amount rule: Record metered purchased or generated steam; do not relabel it as generic heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources: `ec-battery-pefcr-2018`

###### Hot water supplied to battery manufacturing (`site_hot_water_input`)

Metered hot-water energy serving the declared battery-manufacturing route; keep separate from steam.

- Selected flow: Hot water supplied to battery manufacturing
- Flow property / unit: Energy / MJ
- Amount rule: Record metered hot water separately from steam.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources: `ec-battery-pefcr-2018`

###### Natural gas combusted on site (`site_natural_gas_input`)

Metered natural gas combusted in equipment serving the declared product; keep separate from other fuels.

- Selected flow: Natural gas combusted on site
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered lower-heating-value energy of this single fuel used for the declared product; do not merge different fuels.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources: `ec-pef-method-2021`

###### Diesel fuel combusted on site (`site_diesel_input`)

Metered diesel combusted in equipment serving the declared product; keep separate from other fuels.

- Selected flow: Diesel fuel combusted on site
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered lower-heating-value energy of this single fuel used for the declared product; do not merge different fuels.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources: `ec-pef-method-2021`

###### Liquefied petroleum gas combusted on site (`site_lpg_input`)

Metered LPG combusted in equipment serving the declared product; keep separate from other fuels.

- Selected flow: Liquefied petroleum gas combusted on site
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered lower-heating-value energy of this single fuel used for the declared product; do not merge different fuels.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources: `ec-pef-method-2021`

###### Refrigerant R-134a (`site_r134a_refrigerant_input`)

Named R-134a make-up charged to cooling equipment serving the declared product; other refrigerants require separate rows.

- Selected flow: Refrigerant R-134a
- Flow property / unit: Mass / kg
- Amount rule: Record purchased make-up R-134a charged to equipment serving the declared product; any other refrigerant must be a separate named row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_utilities`
- Sources: `ec-pef-method-2021`

#### Outputs

##### Waste flows

###### Lead-bearing battery-manufacturing wastewater (`lead_bearing_wastewater_output`)

Lead-acid route only. Record the physically collected wastewater mass or volume; do not use it in place of substance releases to water.

- Selected flow: Lead-bearing battery-manufacturing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`

###### Nickel-bearing battery-manufacturing wastewater (`nickel_bearing_wastewater_output`)

Nickel-based routes only. Record the physically collected wastewater mass or volume; do not use it in place of substance releases to water.

- Selected flow: Nickel-bearing battery-manufacturing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`

###### Cadmium-bearing battery-manufacturing wastewater (`cadmium_bearing_wastewater_output`)

Nickel-cadmium route only. Record the physically collected wastewater mass or volume; do not use it in place of substance releases to water.

- Selected flow: Cadmium-bearing battery-manufacturing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`

###### Cobalt-bearing battery-manufacturing wastewater (`cobalt_bearing_wastewater_output`)

Cobalt-containing lithium-ion route only. Record the physically collected wastewater mass or volume; do not use it in place of substance releases to water.

- Selected flow: Cobalt-bearing battery-manufacturing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Record the route-specific foreground quantity from reconciled receipts, issues, meters, laboratory results, or waste records; use zero only with a documented not-applicable determination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`

##### Elementary flows

###### Lead to water (`lead_to_water_output`)

Lead-acid route only.

- Selected flow: Lead to water
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### Nickel to water (`nickel_to_water_output`)

Nickel-based routes only.

- Selected flow: Nickel to water
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### Cadmium to water (`cadmium_to_water_output`)

Nickel-cadmium route only.

- Selected flow: Cadmium to water
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### Cobalt to water (`cobalt_to_water_output`)

Cobalt-containing lithium-ion route only.

- Selected flow: Cobalt to water
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### Carbon dioxide, fossil, to air (`carbon_dioxide_fossil_to_air_output`)

Only on-site fossil-fuel combustion attributable to the declared product.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### Nitric oxide to air (`nitric_oxide_to_air_output`)

Only measured or calculated on-site combustion releases.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### Nitrogen dioxide to air (`nitrogen_dioxide_to_air_output`)

Only measured or calculated on-site combustion releases reported as nitrogen dioxide mass.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### Sulfur dioxide to air (`sulfur_dioxide_to_air_output`)

Only measured or calculated on-site combustion releases.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### Refrigerant R-134a to air (`r134a_to_air_output`)

Only measured or mass-balance leakage of R-134a.

- Selected flow: Refrigerant R-134a to air
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of this single named substance released to the stated compartment from monitoring or a documented substance balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of the conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_releases`
- Sources: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared operations | Subdivide by chemistry, model, line, lot, and meter before allocation. | `ec-pef-method-2021` |
| `allocation_causal_driver` | Residual shared utilities | Use a documented causal driver such as metered energy, equipment time, dry-room volume-time, treated volume, or throughput; mass is the last resort. | `ec-pef-method-2021`; `porzio-scown-2021` |
| `allocation_internal_recovery` | Scrap, solvent, water, and electricity returned internally | Model internal return once; record make-up, recovery burden, and losses, and prohibit duplicate credit. | `ec-pef-method-2021` |
| `allocation_export` | Exported electricity and material leaving the system | Keep as a separate output and disclose the downstream method; do not also subtract or credit it in the foreground total. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_electrode_materials` | electrode_plate_preparation | Route-specific materials and prepared electrodes | source records | receipts, issues, returns, stock, batch output | Reconcile named exchange records to process output and stock change | kg | each lot; monthly reconciliation | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_electrode_utilities` | electrode_plate_preparation | Electricity | source records | meter id, readings, allocation driver, output mass | Reconcile named exchange records to process output and stock change | kWh | continuous; monthly reconciliation | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_electrode_waste_releases` | electrode_plate_preparation | Scrap and single-substance air releases | source records | waste identity, mass, substance, compartment, concentration, volume | Reconcile named exchange records to process output and stock change | kg | each shipment or monitoring event | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_cell_materials` | cell_assembly_sealing | Cell components, electrolyte constituents, and sealed cells | source records | BOM revision, item, lot, issue, return, output mass | Reconcile named exchange records to process output and stock change | kg | each lot; monthly reconciliation | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_cell_utilities` | cell_assembly_sealing | Electricity | source records | meter id, readings, allocation driver, output mass | Reconcile named exchange records to process output and stock change | kWh | continuous; monthly reconciliation | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_cell_waste_releases` | cell_assembly_sealing | Material-specific waste and single-substance air releases | source records | waste identity, mass, substance, compartment, concentration, volume | Reconcile named exchange records to process output and stock change | kg | each shipment or monitoring event | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_formation_testing` | formation_ageing_testing | Cells, electricity, water, rejects, wastewater, and releases | source records | cycler log, meter readings, batch, pass/fail, mass, discharge result | Reconcile named exchange records to process output and stock change | kg, kWh | each cycle and batch | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_pack_assembly` | module_pack_assembly | Cells, pack parts, packaging, electricity, product, and material-specific waste | source records | as-built BOM, issue, return, meter, release mass, waste ticket | Reconcile named exchange records to process output and stock change | kg, kWh | each lot; monthly reconciliation | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_site_utilities` | site_utilities_treatment | Steam, hot water, fuels, and refrigerant make-up | source records | carrier identity, meter or invoice, heating value, allocation driver | Reconcile named exchange records to process output and stock change | kg, MJ | continuous or each invoice | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |
| `cp_site_releases` | site_utilities_treatment | Route-specific wastewater and single-substance releases | source records | stream identity, volume, substance, concentration, compartment, treatment | Reconcile named exchange records to process output and stock change | kg, m3 | each monitoring event; monthly reconciliation | same representative period | all serving lines and systems | aggregate only identical flow, route, compartment, and unit | calibration, invoice, BOM, laboratory, or manifest evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every row | Attributable period amount / net kg of conforming released product. | named period exchange; stock change; released mass | amount per 1 kg reference product |  |
| `calc_material_consumption` | Each material or component | Receipts + opening stock - closing stock - external returns; cancel documented internal transfers once. | item-specific stock records | net external consumption |  |
| `calc_substance_release` | Each air or water substance | Concentration × measured flow or documented input-output substance balance, with conversions retained. | substance concentration; flow; density when needed | kg by substance and compartment | `us-epa-battery-effluent-guidelines` |
| `calc_energy_register` | Electricity | Imported electricity minus separately metered internal return; exported electricity stays a separate output. | import; internal return; export | net input and separate export | `ec-pef-method-2021` |
| `calc_mass_balance` | Each process and package | Reconcile inputs and opening stock to products, each waste, each release, and closing stock; investigate residuals. | atomic rows and stock | residual and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and route | Preserve chemistry, product level, model, application, capacity, energy, state of charge, starting condition, and BOM revision. | specification, release certificate, BOM |
| `dq_atomicity` | Every inventory row | One named exchange, one direction, one flow type, one property, one unit, one route condition, and one compartment when elementary. | row-level mapping review |
| `dq_completeness` | Foreground boundary | Reconcile every applicable material, utility carrier, waste, wastewater, and air or water release; document not-applicable rows. | process map, meters, manifests, permits |
| `dq_traceability` | Collected or calculated values | Preserve raw record, conversion, allocation driver, calculation version, reviewer, and link to normalized value. | audit trail and calculation digest |
| `dq_uuid_identity` | Tiangong-linked rows | Require hybrid-search discovery and direct state100 confirmation of exact semantics, type, property, and unit before adding a UUID. | search result and state100 read record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference product | Require exactly 1 kg, CPC 46420, Product flow, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, and unit group `93a60a57-a4c8-11da-a746-0800200c9a66`. | `unsd-cpc-3-0` |
| `validate_route_applicability` | Inventory | Require one declared route and include only applicable atomic rows; prohibit replacing absent rows with a chemistry-specific collection label. | `ec-battery-pefcr-2018` |
| `validate_no_unverified_uuid` | Inventory links | Reject any UUID lacking both exact hybrid-search and state100 evidence. |  |
| `validate_no_estimated_range` | Inventory amounts | Reject reasoned-estimate, AI-generated, or broad all-route quantity ranges; use foreground records or explicit calculation rules. |  |
| `validate_carrier_separation` | Utilities | Require electricity, steam, hot water, natural gas, diesel, LPG, and each refrigerant to remain separate. | `ec-pef-method-2021` |
| `validate_release_separation` | Wastewater and elementary flows | Require physical wastewater streams and each named substance-to-air or substance-to-water exchange separately. | `us-epa-battery-effluent-guidelines` |
| `validate_bilingual_alignment` | Canonical and translation | Require identical process_id, row_id, rule_id, source_id, UUID, and card order. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground package for one specified finished rechargeable accumulator |
| downstream_use | Link the package to representative upstream datasets for cradle-to-gate modelling, or use it as the production stage in a process or lifecyclemodel that adds distribution, use, second life, and end-of-life consistently. |
| allowed_use | Cradle-to-gate modelling with linked upstream datasets; facility improvement; downstream lifecycle models |
| excluded_use | Cradle-to-grave claim without downstream stages; comparison based only on kg; substitution across chemistry routes |
| required_metadata | chemistry; product level; application; model; facility; geography; period; state of charge; starting condition; BOM; route; boundary; allocation; packaging |
| required_quality_disclosure | Temporal, geographical, and technological representativeness; meter, scale, BOM, waste, and emission-record coverage; allocation shares and drivers; stock corrections; mass-balance residual; data gaps, proxies, cut-offs, measurement uncertainty, reviewer, and calculation traceability. |
| update_trigger | Material change in chemistry, format, BOM, electrode route, electrolyte, facility, electricity, dry-room, formation, allocation, or packaging |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 46420 Electric accumulators, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-13) | Official CPC identity and exclusions. |
| `eu-batteries-regulation-2023` | Standard (`standard`) | Regulation (EU) 2023/1542 concerning batteries and waste batteries, consolidated text, https://eur-lex.europa.eu/eli/reg/2023/1542/2024-07-18/eng (retrieved 2026-08-13) | Life-cycle stage separation; model and plant-specific carbon-footprint information; bill of materials, energy, and auxiliaries. |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en (retrieved 2026-08-13) | Primary data, allocation hierarchy, consistency, and data-quality rules. |
| `ec-battery-pefcr-2018` | Official guidance (`official_guidance`) | European Commission, Product Environmental Footprint Category Rules for High Specific Energy Rechargeable Batteries for Mobile Applications, version 2018, https://www.sazp.sk/dokument/f/baterie-a-akumulatory-pdf.pdf (retrieved 2026-08-13) | Mobile-battery scope limitation; bill-of-material activity data; chemistry-specific materials; manufacturing operations, utilities, waste, and direct-release data fields. |
| `jrc-cfb-battery-2025` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Rules for calculating the Carbon Footprint of Batteries, https://eplca.jrc.ec.europa.eu/LCDN/developerEF.xhtml (retrieved 2026-08-13) | Status and applicability of EU battery carbon-footprint rules; no draft EV value is generalized to all CPC 46420 products. |
| `argonne-battery-lca-2010` | Literature (`literature`) | Sullivan and Gaines, A Review of Battery Life-Cycle Analysis: State of Knowledge and Critical Needs, ANL/ESD/10-7, Argonne National Laboratory, 2010, https://publications.anl.gov/anlpubs/2010/11/68455.pdf (retrieved 2026-08-13) | Multi-chemistry boundary and manufacturing-stage separation. |
| `argonne-lib-flows-2012` | Literature (`literature`) | Dunn et al., Material and Energy Flows in the Materials Production, Assembly, and End-of-Life Stages of the Automotive Lithium-Ion Battery Life Cycle, Argonne National Laboratory, 2012, https://publications.anl.gov/anlpubs/2012/06/73645.pdf (retrieved 2026-08-13) | LMO lithium-ion route material identities and process decomposition only; no quantities generalized. |
| `porzio-scown-2021` | Literature (`literature`) | Porzio and Scown, Life-Cycle Assessment Considerations for Batteries and Battery Materials, Advanced Energy Materials 11 (2021), DOI 10.1002/aenm.202100771, https://www.osti.gov/pages/biblio/1808206 (retrieved 2026-08-13) | Peer-reviewed guidance on facility-scale electrode, dry-room, solvent-recovery, formation, and service-functional-unit data needs. |
| `us-epa-ap42-lead-acid-1995` | Official guidance (`official_guidance`) | US EPA, AP-42 Section 12.15 Storage Battery Production, 1995, https://www.epa.gov/sites/default/files/2020-11/documents/c12s15.pdf (retrieved 2026-08-13) | Lead-acid grid, paste, curing, assembly, formation, reclaim, lead particulate, and sulfuric-acid mist identities. |
| `us-epa-nickel-battery-1996` | Official guidance (`official_guidance`) | US EPA, Locating and Estimating Air Emissions from Sources of Nickel, battery manufacturing section, 1996, https://www.epa.gov/sites/default/files/2020-11/documents/nickel.pdf (retrieved 2026-08-13) | Nickel-cadmium and nickel-based electrode materials, substrate preparation, washing, and nickel/cadmium compound releases. |
| `us-epa-battery-effluent-guidelines` | Official guidance (`official_guidance`) | US EPA, Battery Manufacturing Effluent Guidelines, https://www.epa.gov/eg/battery-manufacturing-effluent-guidelines (retrieved 2026-08-13) | Route-specific wastewater sources and separately regulated lead, cadmium, nickel, zinc, cobalt, copper, iron, and manganese releases. |
| `eu-bref-battery-status-2026` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, BAT reference documents portal, Production of Batteries in Giga-Factories status: drawing up started, https://eippcb.jrc.ec.europa.eu/reference (retrieved 2026-08-13) | Records that a battery-gigafactory BREF is under development, so no draft BAT value is treated as an adopted CPC-wide requirement. |
