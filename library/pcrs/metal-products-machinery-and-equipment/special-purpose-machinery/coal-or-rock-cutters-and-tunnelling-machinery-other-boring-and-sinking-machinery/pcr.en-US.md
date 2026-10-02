---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.coal-or-rock-cutters-and-tunnelling-machinery-other-boring-and-sinking-machinery
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Coal or rock cutters and tunnelling machinery; other boring and sinking machinery

## 1. Scope and Applicability

Manufacturing methodology for complete coal or rock cutting machines, tunnel excavation machines and other boring or sinking machines released at a declared factory gate. Declare the actual family, host, propulsion, drive and supplied configuration. A representative double-shield TBM does not replace continuous miners, roadheaders, raise-boring rigs or shaft-sinking machines. Mass is a production accounting unit and does not establish equivalent excavation performance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.coal-or-rock-cutters-and-tunnelling-machinery-other-boring-and-sinking-machinery |
| classification_refs | CPC 3.0 44412; reviewed complete-machine boundary; code is not a canonical identity |
| covered_products | Coal cutters; continuous, bolter and borer miners; rock-cutting roadheaders; open/gripper and shield TBMs; raise, boxhole and downward boring rigs; shaft sinking and other boring machines with actual declared delivery configuration |
| excluded_products | Independent underground conveyors/elevators; cranes and independent hauling vehicles; independently supplied site separation plants; excavators/loaders; separately supplied spare parts or cutting tools; metalworking boring machine-tools; drilling/excavation services; tunnel lining manufacture and mine production |
| representative_product | An accepted complete double-shield TBM with explicitly declared cutterhead, drive, shields and included back-up; illustrative, not a mass or recipe default |
| production_route | Supplier-qualified raw stock and bought modules; actual fabrication, machining and conditional treatment; family integration, electrical/hydraulic assembly, factory testing and dispatch |
| market_state | Accepted new finished machine at plant, including documented initial fill and installed tools; shipping split modules reconcile to the same complete configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one configuration-qualified machine capable of its declared cutting, tunnelling, boring or sinking function |
| How much | 1 kg accepted net complete-machine output; report accepted unit count and measured mass alongside |
| How well | Meets actual purchase drawing, cutting/boring architecture, interface, controls and recorded factory acceptance criteria |
| How long or cycle | One manufacturing and factory acceptance cycle; operating lifetime, excavation distance and output remain separately evidenced downstream scenarios |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Coal or rock cutters and tunnelling machinery, other boring and sinking machinery `52fdea74-4411-454d-8b7f-e7bd43044586` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | family; model/revision; serial/configuration; integrated host/propulsion; cutting or drilling mechanism; supplier/make-buy matrix; exact supplied modules/back-up/initial fill; nominal functional ratings from actual specifications; factory gate and acceptance; geography and period; calibrated net mass; packaging excluded; excluded site plant and spare parts |

Declare every required qualifier in the data package. No machine weight, service lifetime, material grade, yield, energy intensity or empirical range is assumed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `material_species_basis` | physical material and species records in cp_material, cp_waste, cp_water and cp_emission | Mass | kg | Gross purchased alloy, mixture, emulsion or sludge is not contained element mass. Each term needs its own moisture and element/species assay on a compatible wet/dry basis. Do not apply this material rule to electricity or transport. |
| `energy_interface` | cp_energy records | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain raw kWh and meter interface; use verified unit conversion only. Fuel requires actual supplied quantity and calorific value, not electricity equivalence. Water volume needs actual density, not a universal screening density. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `factory_gate` | all inventory rows | Include upstream supply once and all attributable factory operations through acceptance, correction, initial fill and packing. Exclude transport after declared gate, installation/excavation energy, mined coal/rock, routine cutter replacement, tunnel segments, grout and lifetime service unless explicitly modelled as a separate downstream scenario. Factory test materials and energy remain included. | `sandvik-testing-2026`; `herrenknecht-follo-2018` |
| `configuration_boundary` | reference_product | Integral carrier, gathering mechanism, machine belt and installed handling equipment belong only when accepted in the same complete-machine BOM. Independently sold conveyors, cranes, transport vehicles, separation plants and tools have separate identity. A supplied VSM lowering/winch/control/separation module explicitly included in the accepted modular product BOM is retained once as a manufacturing input; its downstream shaft-water, rock/slurry and lining service is excluded. A self-propelled cutter does not become an excavator merely because it has tracks. For ambiguous integrated systems verify drawing, sales object and classification before mapping; no silent scope change. | `un-cpc-2025`; `sandvik-cutting-2024`; `herrenknecht-double-shield`; `herrenknecht-vsm` |
| `make_buy_once` | all inventory rows | For each serial/configuration build a make/buy matrix for structure, shields, cutterhead/drum, motor, gears, bearing, hydraulics and controls. Purchased completed modules carry embedded material, processing, motor and supplied oil once; no parallel raw inputs for those burdens. For actual in-house fabrication use material/consumable/energy/output records, not a second purchased completed module. Partial supplier state retains only completed upstream steps. | `sandvik-zeltweg-manufacturing` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory receipt of composition- and state-qualified raw stock or completed supplier modules |
| starting_condition_role | Foreground manufacturing starting state; upstream production remains required |
| product_classification_scope | Complete machines in reviewed category; supplied integrated configuration must be declared |
| recursive_input_rule | A purchased same-category completed machine used as a base is an explicit upstream input with inherited manufacture once; model only actual incremental work; never recursively create its full manufacturing inventory again |
| upstream_dataset_requirement | Supplier processes match grade, module state, voltage, geography and delivery interface; unresolved providers remain disclosed and block a complete burden claim |
| disclosure | Actual factory and gate; routes performed; subcontract steps; bought modules; included carrier/back-up; meter period; acceptance/reject/rework; gaps and downstream exclusions |

### Family and make/buy matrix

| Family | Actual assemblies | Scope decision |
| --- | --- | --- |
| Coal/rock cutter | Drum or boom, track/base, gathering and conditional integral bolter | Make or buy each named module; no universal TBM shield or disc-cutter recipe |
| Tunnel machine | Cutterhead, bearing/drive, gripper or shields, thrust, machine belt and declared erector/back-up | Shield and lining mechanism are conditional; external tunnel conveyor and lining concrete are excluded |
| Other boring/sinking | Base/columns, rotary drive, thrust cylinders, pipe handler; actual shaft cutting boom/pump/lowering apparatus and explicitly included control/separation modules | Raise-boring and VSM are counterexamples to a tunnel-only structure; site foundation, shaft rings and separation service are downstream |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Structural fabrication and component machining | conditional | Actual in-house plate cutting, forming, welding, turning, milling, gear cutting or grinding | Foreground manufacturing | per 1 kg reference flow |
| `treatment` | Conditional heat treatment and surface coating | conditional | Only documented in-house treatment; outsourced finished parts retain prior treatment in supplier datasets | Foreground manufacturing | per 1 kg reference flow |
| `cutters` | Coal and rock cutting machine integration | conditional | Continuous miner, bolter miner, borer miner or roadheader configuration | Foreground manufacturing | per 1 kg reference flow |
| `tunnel` | Tunnel boring machine integration | conditional | Actual gripper or shield machine and declared back-up configuration; no assumed universal shield | Foreground manufacturing | per 1 kg reference flow |
| `boring` | Other boring and sinking machine integration | conditional | Actual raise-boring, boxhole, downward boring, shaft-sinking or drilling configuration | Foreground manufacturing | per 1 kg reference flow |
| `assembly` | Common drive, hydraulics and control integration | required | Every machine; instantiate only its actual modules and make/buy interfaces | Foreground manufacturing | per 1 kg reference flow |
| `test` | Factory acceptance, correction and release preparation | required | All accepted units; actual load, leak, function, control and safety tests before gate | Foreground manufacturing | per 1 kg reference flow |
| `utilities` | Residual shared services and conditional on-site generation | conditional | Only unassigned load of the same metered period after process and test assignments | Foreground manufacturing | per 1 kg reference flow |
| `release` | Packing and factory-gate handover | required | All accepted configurations; disassembled shipping modules reconciled to accepted complete machine | Foreground manufacturing | per 1 kg reference flow |

Activate actual routes only. Cards are specific conditional exchanges, not a default BOM or closed list. Add individual rows for every actual omitted alloy, machining consumable, gas, purchased heat, chemical, installed module, emission or residue with its own collection and identity evidence. Treatment includes only actual recipes and completed stages. Shared service cards contain residuals only; repeated electricity cards must reconcile to one site balance.

### Process: Structural fabrication and component machining (`fabrication`)

Actual in-house plate cutting, forming, welding, turning, milling, gear cutting or grinding

#### Inputs

##### Product flows

###### Steel Plate (`plate`)

Hot-rolled low-alloy high-strength plate is actually issued. Use this UUID only when the actual supplied grade and interface are documented as Q345/Q355 or an independently verified matching low-alloy high-strength family. S355, AR400, stainless steel or another unverified grade requires its separate verified identity or an unresolved row; declare actual grade, heat number, thickness and supplier. Neither the OEM fabrication source nor this UUID sets a grade default

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Alloy-steel forged shaft blank (`forged_blank`)

Machined shaft blank is purchased; retain alloy and supplied heat-treatment state

- Selected flow: Alloy-steel forged shaft blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Carbon-steel arc-welding wire (`weld_wire`)

Actual qualified welding procedure uses carbon-steel wire; document classification and composition

- Selected flow: Carbon-steel arc-welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Carbon dioxide welding shielding gas (`shield_gas`)

CO2 shielding is actually used; mixed shielding gas needs its separately verified composition-qualified flow

- Selected flow: Carbon dioxide welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Water-miscible mineral-oil machining concentrate (`coolant`)

Actual coolant formulation uses mineral-oil concentrate; record concentration separately from dilution water

- Selected flow: Water-miscible mineral-oil machining concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Treated process dilution water (`dilution_water`)

Coolant is mixed on site; record source, treatment and temperature-specific measured density

- Selected flow: Treated process dilution water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `sandvik-zeltweg-manufacturing`

###### Alternating current (`fabrication_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `sandvik-zeltweg-manufacturing`

#### Outputs

##### Waste flows

###### Alloy-steel machining swarf (`swarf`)

Swarf leaves for recovery; separate attached coolant, water and alloy assays

- Selected flow: Alloy-steel machining swarf
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `sandvik-zeltweg-manufacturing`

###### Spent mineral-oil machining emulsion (`spent_coolant`)

Spent emulsion leaves for treatment; measured oil fraction and moisture are not steel mass

- Selected flow: Spent mineral-oil machining emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `sandvik-zeltweg-manufacturing`

###### Captured iron-bearing welding filter dust (`weld_dust`)

Captured dust leaves for treatment; retain Fe and other actual element assays

- Selected flow: Captured iron-bearing welding filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `sandvik-zeltweg-manufacturing`

### Process: Conditional heat treatment and surface coating (`treatment`)

Only documented in-house treatment; outsourced finished parts retain prior treatment in supplier datasets

#### Inputs

##### Product flows

###### Pipeline natural gas for heat treatment (`gas_heat`)

Actual on-site gas furnace; supplier gas composition and calorific value required

- Selected flow: Pipeline natural gas for heat treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `sandvik-zeltweg-manufacturing`

###### Mineral-oil quench fluid (`quench_oil`)

Actual oil-quench recipe; reused bath transfer is internal, replenishment is external

- Selected flow: Mineral-oil quench fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Nitrogen heat-treatment gas (`nitrogen`)

Actual furnace atmosphere contains supplied nitrogen

- Selected flow: Nitrogen heat-treatment gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Two-component epoxy protective coating (`epoxy`)

Actual purchased formulation is applied; retain SDS, resin/hardener ratio and solvent fractions; no assumed universal coating

- Selected flow: Two-component epoxy protective coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Methyl ethyl ketone cleaning solvent (`mek`)

Actual site cleaning recipe uses MEK; no default solvent

- Selected flow: Methyl ethyl ketone cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Treated coating-process water (`coat_water`)

Actual aqueous cleaning or rinsing

- Selected flow: Treated coating-process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `sandvik-zeltweg-manufacturing`

###### Alternating current (`treatment_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `sandvik-zeltweg-manufacturing`

#### Outputs

##### Waste flows

###### Epoxy coating-treatment sludge (`coat_sludge`)

Actual collected sludge leaves for treatment; measure water, coating and contained elements separately

- Selected flow: Epoxy coating-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `sandvik-zeltweg-manufacturing`

##### Elementary flows

###### Methyl ethyl ketone, emission to air (`mek_air`)

Species-resolved measurement or supported solvent balance establishes actual uncaptured MEK

- Selected flow: Methyl ethyl ketone, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `sandvik-zeltweg-manufacturing`

### Process: Coal and rock cutting machine integration (`cutters`)

Continuous miner, bolter miner, borer miner or roadheader configuration

#### Inputs

##### Product flows

###### Completed coal-cutting drum module (`cut_drum`)

Purchased dedicated drum is fitted; cutter-tool material and supplied drive coverage are declared

- Selected flow: Completed coal-cutting drum module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-cutting-2024`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed roadheader cutter-boom module (`cut_boom`)

Purchased roadheader boom is fitted instead of making its structural and drive parts on site

- Selected flow: Completed roadheader cutter-boom module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-cutting-2024`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed steel crawler-track module (`track`)

Integral crawler is in the accepted machine; separately sold hauling vehicle is excluded

- Selected flow: Completed steel crawler-track module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-cutting-2024`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed continuous-miner gathering-arm module (`gathering`)

Actual integral gathering equipment is supplied as part of machine

- Selected flow: Completed continuous-miner gathering-arm module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-cutting-2024`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Alternating current (`cutters_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `sandvik-cutting-2024`

### Process: Tunnel boring machine integration (`tunnel`)

Actual gripper or shield machine and declared back-up configuration; no assumed universal shield

#### Inputs

##### Product flows

###### Completed tunnel-boring cutterhead module (`cutterhead`)

Purchased cutterhead, including declared fitted cutters; otherwise use actual fabrication BOM once

- Selected flow: Completed tunnel-boring cutterhead module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-double-shield`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed TBM main-bearing module (`bearing`)

Purchased main bearing; declared seal and lubricant supply state

- Selected flow: Completed TBM main-bearing module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-double-shield`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed steel shield-body module (`shield`)

Actual shielded route purchases this module; open gripper machine has no assumed shield

- Selected flow: Completed steel shield-body module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-double-shield`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed tunnel-segment erector module (`erector`)

Integral erector is accepted in configuration; concrete segments used later are excluded

- Selected flow: Completed tunnel-segment erector module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-double-shield`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed TBM internal belt module (`machine_belt`)

Internal transfer belt included in accepted BOM; separate tunnel conveyor system is excluded

- Selected flow: Completed TBM internal belt module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-double-shield`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Alternating current (`tunnel_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `herrenknecht-double-shield`

### Process: Other boring and sinking machine integration (`boring`)

Actual raise-boring, boxhole, downward boring, shaft-sinking or drilling configuration

#### Inputs

##### Product flows

###### Completed raise-boring rotary-drive module (`rotary`)

Purchased rotary drive; record variable-frequency/electric or hydraulic configuration

- Selected flow: Completed raise-boring rotary-drive module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed steel raise-boring guide-column module (`column`)

Purchased column rather than in-house fabrication

- Selected flow: Completed steel raise-boring guide-column module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed boring-rig pipe-handling module (`pipe_handler`)

Actual accepted mechanized pipe handler is supplied

- Selected flow: Completed boring-rig pipe-handling module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Alloy-steel drill rod (`rod`)

Only rods included in accepted delivery configuration; later consumable replacement is outside gate

- Selected flow: Alloy-steel drill rod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed shaft-sinking cutting-boom module (`shaft_boom`)

Actual VSM or shaft-boring configuration has this assembly

- Selected flow: Completed shaft-sinking cutting-boom module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed submersible shaft-muck pump (`muck_pump`)

Accepted sinking machine includes this pump; separate site separation plant remains separately declared

- Selected flow: Completed submersible shaft-muck pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed shaft-sinking lowering unit (`lowering`)

Actual lowering unit is included in accepted modular machine supply; site foundation and shaft lining remain downstream

- Selected flow: Completed shaft-sinking lowering unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed shaft-sinking recovery winch (`winch`)

Actual recovery winch is included in accepted configuration; standalone crane is not this machine

- Selected flow: Completed shaft-sinking recovery winch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed shaft-muck separation module (`separation`)

Included only when the accepted delivered modular machine BOM explicitly includes this module; an independently supplied plant has separate identity. Manufacturing of included module is counted once; operating shaft-water/slurry/rock service is downstream

- Selected flow: Completed shaft-muck separation module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Alternating current (`boring_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `herrenknecht-raise-2024`; `herrenknecht-vsm`

### Process: Common drive, hydraulics and control integration (`assembly`)

Every machine; instantiate only its actual modules and make/buy interfaces

#### Inputs

##### Product flows

###### Completed industrial electric drive motor (`motor`)

Only separately purchased motor not embedded in a purchased drive module; record power, topology and supplier

- Selected flow: Completed industrial electric drive motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed machine planetary gearbox (`gearbox`)

Actual planetary gearbox not already counted inside rotary drive; record ratios and delivery state

- Selected flow: Completed machine planetary gearbox
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed hydraulic thrust cylinder (`cylinder`)

Actual cylinder is separately purchased; piston/rod/tube raw material not also charged

- Selected flow: Completed hydraulic thrust cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Reinforced rubber hydraulic hose (`hose`)

Actual separately installed hose; record rubber, reinforcement and fittings

- Selected flow: Reinforced rubber hydraulic hose
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Completed programmable logic controller (`plc`)

Actual control unit; declare sensors, software hardware and supplied cabinet coverage separately

- Selected flow: Completed programmable logic controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Electronic pressure sensor (`sensor`)

Actual separately purchased pressure sensor not embedded in control assembly

- Selected flow: Electronic pressure sensor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Copper-conductor power cable (`cable`)

Actual cable; retain conductor section, insulation and voltage

- Selected flow: Copper-conductor power cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Mineral-oil hydraulic fluid initial fill (`hydraulic_fill`)

Actual qualified mineral-oil grade; fluid already supplied inside modules is not a second external input

- Selected flow: Mineral-oil hydraulic fluid initial fill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Lithium-soap mineral-oil lubricating grease (`grease`)

Actual approved grease; retain grade and retained versus consumed amount

- Selected flow: Lithium-soap mineral-oil lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-zeltweg-manufacturing`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Alternating current (`assembly_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `sandvik-zeltweg-manufacturing`

### Process: Factory acceptance, correction and release preparation (`test`)

All accepted units; actual load, leak, function, control and safety tests before gate

#### Inputs

##### Product flows

###### Treated factory hydraulic-test water (`test_water`)

Actual water-filled factory test; record reused stock and return separately

- Selected flow: Treated factory hydraulic-test water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `sandvik-testing-2026`; `herrenknecht-follo-2018`

###### Mineral-oil factory-test hydraulic fluid (`test_oil`)

Actual test circuit uses oil; distinguish retained delivery fill, reused rig oil and drained waste

- Selected flow: Mineral-oil factory-test hydraulic fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-testing-2026`; `herrenknecht-follo-2018`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Rock block for factory cutting test (`test_rock`)

Actual acceptance test consumes documented rock; record lithology and only manufacturing test quantity

- Selected flow: Rock block for factory cutting test
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sandvik-testing-2026`; `herrenknecht-follo-2018`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Alternating current (`test_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `sandvik-testing-2026`; `herrenknecht-follo-2018`

#### Outputs

##### Waste flows

###### Factory cutting-test rock residue (`test_rock_waste`)

Actual factory test residue leaves; excavation production rock is excluded

- Selected flow: Factory cutting-test rock residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `sandvik-testing-2026`; `herrenknecht-follo-2018`

###### Spent factory-test mineral hydraulic oil (`spent_oil`)

Actual externally removed oil; internal recovered test oil is not waste

- Selected flow: Spent factory-test mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `sandvik-testing-2026`; `herrenknecht-follo-2018`

###### Oil-bearing factory-test wastewater (`test_effluent`)

Actual test-water discharge leaves to treatment; measure water, oil and contained metals separately

- Selected flow: Oil-bearing factory-test wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `sandvik-testing-2026`; `herrenknecht-follo-2018`

### Process: Residual shared services and conditional on-site generation (`utilities`)

Only unassigned load of the same metered period after process and test assignments

#### Inputs

##### Product flows

###### Treated residual factory-service water (`service_water`)

Only residual attributable supply after fabrication, coating and test water assignments

- Selected flow: Treated residual factory-service water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Diesel fuel for factory generator (`diesel`)

Only actual on-site generation; purchased electricity carries external generation emissions once

- Selected flow: Diesel fuel for factory generator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Alternating current (`utilities_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Elementary flows

###### Carbon dioxide, fossil, emission to air (`fossil_co2`)

Actual on-site combustion with fuel carbon and oxidation evidence; imported power has no direct stack CO2 here

- Selected flow: Carbon dioxide, fossil, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide, emission to air (`no2`)

Actual species-resolved exhaust evidence; fuel carbon does not establish NO2

- Selected flow: Nitrogen dioxide, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide, emission to air (`co`)

Actual CO exhaust measurement or applicable documented factor; no inference from carbon closure alone

- Selected flow: Carbon monoxide, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Packing and factory-gate handover (`release`)

All accepted configurations; disassembled shipping modules reconciled to accepted complete machine

#### Inputs

##### Product flows

###### Sawn softwood shipping support (`timber`)

Actual transport support excluded from machine net mass; reusable ownership tracked

- Selected flow: Sawn softwood shipping support
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-follo-2018`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Low-density polyethylene shipping film (`film`)

Actual shipping wrap excluded from net reference mass

- Selected flow: Low-density polyethylene shipping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `herrenknecht-follo-2018`

Cited OEM evidence supports the conditional architecture or manufacturing stage only; it does not establish this exact grade, formulation, module supply state or quantity. Retain the actual supplier/site specification under cp_material before activating the row.

###### Alternating current (`release_power`)

CN grid supply at 1–35 kV only; actual process-assigned electricity, or residual only for utilities; retain voltage, year and supplier; different interfaces require another verified identity

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `herrenknecht-follo-2018`

#### Outputs

##### Product flows

###### Coal or rock cutters and tunnelling machinery, other boring and sinking machinery (`reference_product`)

Accepted complete machine configuration at factory gate; product UUID does not establish any supplier process

- Selected flow: Coal or rock cutters and tunnelling machinery, other boring and sinking machinery `52fdea74-4411-454d-8b7f-e7bd43044586`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `herrenknecht-follo-2018`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rejects` | all inventory rows | Assign specific jobs and meters before allocation. Keep all attributable rejects, rework and repeated factory tests in Q; denominator includes only N accepted units of one configuration and their calibrated net masses. Do not pool unlike families or use packaging/reject mass. For shared processing use measured machine time, test duration or another documented physical cause, with complete reconciliation. |  |
| `scrap_transfer` | swarf; weld_dust; coat_sludge | Record each external recovery/treatment transfer, composition and actual destination. Internal rework and reusable oil transfers cancel as paired internal records. Do not credit avoided virgin metal or energy without an explicitly evidenced, separately disclosed downstream method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | release | reference_product | acceptance/weighing | model; configuration; serial number; accepted net mass M; accepted N; summed accepted mass D; weighing tare; retained delivery fill | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record.  | kg | each accepted machine | same accepted cohort and Q period | accepted configuration at factory gate | accepted net mass per machine | scale calibration, tare, module/BOM reconciliation and acceptance signature |
| `cp_material` | all | specific raw stock/module/chemical | material issue/BOM | row id; grade; formulation; composition; moisture; supplier state; opening/closing stock; purchase/issue/return; serial/job; Q; N; D | Reconcile received stock, issues and returns to jobs and make/buy BOM; weigh actual modules and material, retain reject/rework quantities. Each material balance term carries its own assay and wet/dry basis; no utility is subjected to a material assay. Q is attributable period exchange including rejects/rework; derive q_item = Q/N and M = D/N only for this configuration. | kg | each issue and period closure | matched production and acceptance period | actual performed factory stages and supplier interface | attributable material / accepted machines | certificates, SDS, receipts, calibrated weighing, stock reconciliation |
| `cp_energy` | all | individual electricity/fuel exchange | meter/fuel ledger | row id; import/generation/export; voltage/grid/year; submeter; site meter; period; Q; job/load duration; storage change; N; D | Read calibrated process meters and same-period site balances; retain measured test and rework load. Convert kWh to MJ with verified unit group; fuel retains actual mass/volume and measured calorific value. Allocate only residual unassigned services by measured causal activity. Q includes attributable reject/rework load; q_item = Q/N for same configuration. | MJ | continuous meters and each test/job | same period as N and D | factory meter boundary; actual supplier voltage and geography | attributable electricity / accepted machines | meter calibration, electricity invoices, fuel certificates and full site reconciliation |
| `cp_water` | all | each water exchange | water meter/bath record | row id; source/treatment; density/temperature; input moisture of each material; retained water; stock; return; effluent; evaporation; actual reaction water; Q; N; D | Meter each external supply and discharge; convert actual volume using measured density. Sample moisture for each physical term independently; maintain paired internal returns and actual stock/reaction records. No assumption of universal water density. Q includes attributable reject/rework demand for same configuration; q_item = Q/N. | kg | each batch/test and matched period | same period as material and accepted mass | actual factory supply, test circuit and treatment transfer | attributable water / accepted machines | meter calibration, measured density, moisture samples and closure uncertainty |
| `cp_waste` | all | one specific residue per row | waste consignment/weighing | row id; gross/wet/dry mass; moisture; each contained-element assay; attached oil; opening/closing stock; paired rework return; destination; Q; N; D | Weigh external transfer and retain receiver treatment interface; separately sample moisture, oil and actual metals for each residue, including sludge and effluent. Internally returned scrap/oil is paired and not an external credit. Q is attributable period external waste including rejects; q_item = Q/N. | kg | each consignment and period stock | same production period | factory-to-treatment transfer | attributable waste / accepted machines | weighbridge calibration, laboratory assays, moisture basis and receiver receipts |
| `cp_emission` | all | one elementary species and compartment | species measurement/balance | species; compartment; stack/fugitive point; sampling method; gas flow/time; capture/destruction; fuel composition; own fractions; stock; non-air residual; Q; N; D | Use actual species-resolved sampling and measured gas volume/time, or a documented applicable species factor/balance with uncertainty. Include own solvent fractions, retained product, recovery, capture medium, actual destruction and residues; CO and NO2 require independent species evidence. Q is attributable measured period release including test/rework; q_item = Q/N. | kg | representative operating conditions and each relevant test | matched production period | actual controlled/fugitive factory boundary | attributable emissions / accepted machines | sampling calibration, species identity, factor applicability and combined uncertainty |

For shipping in modules retain calibrated net module-weight records, cancel duplicated attached parts and reconcile the complete accepted BOM without excluding included delivery fill. All period Q records retain reject and rework burdens and use the same configuration, acceptance cohort and period as N and D. Calculate q_item = Q/N, M = D/N; final q_item/M equals Q/D. Do not replace D with the mass of one representative machine. Collection-table aggregation labels state the per-accepted-machine intermediate; the calculation table states the final per-reference basis; raw totals, stocks, allocation and paired internal returns are retained in the data package.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| `water_balance` | dilution_water; coat_water; test_water; service_water | For one matched period close water inputs plus input moisture, opening stock and actual reaction formation against retained product water, each waste moisture, effluent water, evaporation, closing stock and actual reaction consumption. Use the moisture of each actual term, cancel paired internal coolant/test-water returns, and retain combined meter, sampling, density and allocation uncertainty. Investigate residuals beyond that evidence; no universal tolerance or clipping. | cp_water; cp_material; cp_waste | water closure and uncertainty |  |
| `metal_balance` | plate; forged_blank; swarf; weld_dust; coat_sludge | Close each actual metal separately using the own matched assay and wet/dry basis of every input, accepted product, scrap, dust, sludge, effluent, release and opening/closing stock; include actual reaction partitioning and cancel paired internal transfers. Product BOM metal mass and waste gross mass are never automatically contained Fe, Mn, Ni or other element. Compare residual with combined weighing, assay, sampling and allocation uncertainty; investigate, do not invent yield. | cp_material; cp_waste; cp_emission; cp_mass | each contained-metal closure and uncertainty |  |
| `solvent_oil_balance` | mek; epoxy; hydraulic_fill; test_oil | Balance each actual solvent and oil separately with own composition fractions, retained product, opening/closing stocks, recovered returns, capture media, actual destruction and non-air residues. Internal recovered fluid is paired, not new external input or fictitious waste. A total VOC result cannot establish MEK; disclose unresolved species. | cp_material; cp_waste; cp_emission | species closure and uncertainty |  |
| `utility_balance` | all inventory rows | For identical period and units reconcile purchased imports plus measured on-site generation and storage discharge against assigned fabrication/treatment/integration/assembly/test/dispatch load, exports, storage charge and only unassigned residual shared services. Apply measured causal allocation only to residual. Never add factory total to submeters; investigate negative residuals with meter and timing uncertainty, do not clip. Fuel, actual generation and stack species are separate; carbon balance cannot alone establish CO or NO2. | cp_energy; cp_water | reconciled allocation of assigned and residual loads |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_records` | all inventory rows | Retain independent family/module state, actual supplier data and the make/buy ledger; product identity is not supplier evidence | Drawing, BOM, purchase order and direct identity |
| `period_completeness` | all inventory rows | Disclose every missing exchange, provider and quantity; no default ranges or zero substitution. Verify total utility assignments and each physical closure with actual combined uncertainty | Calibrated logs, samples, closure ledgers and gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `accepted_denominator` | all inventory rows | Verify family/configuration, accepted N > 0, traceable calibrated net masses and acceptance records match Q period and BOM; normalize_mass is applied to each non-reference row; 1 kg output contains no transport package or rejects. Missing mass or allocation is unknown, not zero. |  |
| `route_identity` | all inventory rows | Every active physical exchange has one exact substance, grade/module/state and interface, supplier or disposal destination; add separate atomic rows for every actual omitted exchange. not_applicable requires evidence of absence, zero requires measurement and unknown requires a gap. UUIDs never prove completed upstream burdens; CN medium-voltage electricity cannot represent another grid or voltage. |  |
| `water_closure` | dilution_water; coat_water; test_water; service_water; spent_coolant; coat_sludge; test_effluent | For one matched period close water inputs plus input moisture, opening stock and actual reaction formation against retained product water, each waste moisture, effluent water, evaporation, closing stock and actual reaction consumption. Use the moisture of each actual term, cancel paired internal coolant/test-water returns, and retain combined meter, sampling, density and allocation uncertainty. Investigate residuals beyond that evidence; no universal tolerance or clipping. |  |
| `contained_metal_closure` | plate; forged_blank; weld_wire; swarf; weld_dust; coat_sludge; test_effluent; reference_product | Close each actual metal separately using the own matched assay and wet/dry basis of every input, accepted product, scrap, dust, sludge, effluent, release and opening/closing stock; include actual reaction partitioning and cancel paired internal transfers. Product BOM metal mass and waste gross mass are never automatically contained Fe, Mn, Ni or other element. Compare residual with combined weighing, assay, sampling and allocation uncertainty; investigate, do not invent yield. |  |
| `solvent_and_oil_closure` | coolant; quench_oil; epoxy; mek; hydraulic_fill; grease; test_oil; spent_oil; mek_air | Balance each actual solvent and oil separately with own composition fractions, retained product, opening/closing stocks, recovered returns, capture media, actual destruction and non-air residues. Internal recovered fluid is paired, not new external input or fictitious waste. A total VOC result cannot establish MEK; disclose unresolved species. |  |
| `utility_reconciliation` | all inventory rows | For identical period and units reconcile purchased imports plus measured on-site generation and storage discharge against assigned fabrication/treatment/integration/assembly/test/dispatch load, exports, storage charge and only unassigned residual shared services. Apply measured causal allocation only to residual. Never add factory total to submeters; investigate negative residuals with meter and timing uncertainty, do not clip. Fuel, actual generation and stack species are separate; carbon balance cannot alone establish CO or NO2. |  |
| `test_use_split` | test; reference_product | Retain before-gate test power, water, oil, test medium, rejected parts and corrective work; identify acceptance dates. Later excavation feed, rock removal, support concrete, cutter changes and operating energy belong only to a separately stated use/service model. OEM project performance and cutter weights are not manufacturing defaults. | `sandvik-testing-2026`; `herrenknecht-follo-2018` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections retain same boundary |
| allowed_use | Configuration-qualified factory manufacture and explicitly linked upstream production; separately evidenced downstream scenario |
| excluded_use | Per-kg mass alone as equivalent excavation service; unexplained fleet average; lifetime impact without operating scenario; complete upstream claim with unresolved providers |
| required_metadata | Required qualifiers; supplier/make-buy gates; N, D and M; Q period; actual routes; acceptance and uncertainty |
| required_quality_disclosure | Every unresolved UUID/provider, omitted exchange, source/recipe and quantitative gap; not_applicable/zero/unknown distinctions and measured closure |
| update_trigger | Change of family/model/BOM, supplier or treatment state, test boundary, voltage/geography, factory route or acceptance criteria |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes (30 June 2025), p.234, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full category and adjacent independent underground conveyors and earthmoving machinery; title establishes classification, not a recipe |
| `sandvik-cutting-2024` | handbook | Sandvik Cutting Catalogue 2024, 2024, https://www.rocktechnology.sandvik/siteassets/product-documents/rock-tools/cutting/sandvik_cutting_catalog_2024.pdf | Printed p.13 / PDF p.7: continuous/bolter/borer miners and roadheaders; integral track, cutter and control alternatives; no numerical defaults |
| `sandvik-zeltweg-manufacturing` | handbook | Sandvik Zeltweg Contract Manufacturing, publisher brochure; acquired 2026-10-02, https://www.mining.sandvik/globalassets/products/mechanical-cutting-equipment/pdf/lohnfertigung-brochure-english.pdf | Undated brochure, pp.3 and 6: actual machining, welding, treatment and assembly capability; site examples are conditional, not universal |
| `herrenknecht-double-shield` | handbook | Herrenknecht Double Shield TBM, snapshot 2026-10-02, https://www.herrenknecht.com/en/products/productdetail/double-shield-tbm/ | Architecture, internal belt versus external transport, shields/thrust/bearing and erector; operational water/lining is not factory input by default |
| `herrenknecht-raise-2024` | handbook | Herrenknecht Full Range Raise Boring, 05.2024 / HK3774, https://www.herrenknecht.com/?eID=file_download&file=fileadmin%2Fuser_upload%2FMain_Website%2F03_Produkte%2F02_Mining%2F02_Raise-Boring-Rig%2F02_Content%2FHK3774_DB_Mining_RBR_Full_Range_Raise_Borig_GB_20240514_MidRes.pdf | 05.2024 HK3774 p.1: modular raise-boring and variable-frequency drives/rod handling; counterexample to tunnel-only architecture |
| `herrenknecht-vsm` | handbook | Herrenknecht Vertical Shaft Sinking Machine VSM, snapshot 2026-10-02, https://www.herrenknecht.com/en/products/productdetail/vertical-shaft-sinking-machine-vsm/ | Shaft-sinking boom, pump and lowering architecture; separate site separation and shaft lining uses |
| `sandvik-testing-2026` | handbook | Sandvik 175 years at mining’s cutting edge, 20 March 2026, https://www.mining.sandvik/en/solid-ground/sandvik-perspective/2026/03/175-years-at-minings-cutting-edge/ | 20 March 2026: dedicated factory machine validation and cutting test facility; no measured consumption default |
| `herrenknecht-follo-2018` | handbook | Herrenknecht Double Breakthrough on the Follo Line, publisher press release; acquired 2026-10-02, https://www.herrenknecht.com/fileadmin/user_upload/Herrenknecht_Press_Release__Double_Breakthrough_on_the_Follo_Line.pdf | 28 September 2018 press release p.2: factory acceptance precedes site assembly and tunnelling; project cutter mass/performance not adopted |
