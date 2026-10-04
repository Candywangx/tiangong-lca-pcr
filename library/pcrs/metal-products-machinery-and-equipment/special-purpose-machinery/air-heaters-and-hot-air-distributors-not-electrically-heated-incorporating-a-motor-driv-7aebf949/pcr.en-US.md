---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.air-heaters-and-hot-air-distributors-not-electrically-heated-incorporating-a-motor-driv-7aebf949
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of iron or steel non-electrically heated air heaters and motor-driven hot-air distributors

## 1. Scope and Applicability

This PCR covers factory manufacture of complete iron or steel air heaters and hot-air distributors incorporating a motor-driven fan or blower and no electrical resistance heating. Electric fan motors, ignition and controls do not make the heat source electrical. Separate direct combustion, indirect combustion through an exchanger, supplied hydronic/steam heat and distribution of externally heated air. A distributor must actually deliver hot air, not merely be a generic ventilation fan. Exclude electric heaters, heat pumps, passive central-heating radiators, hot-water/steam-producing boilers, standalone fans, separate spare parts and installed heating systems. Manufacturing output is equipment, not a unit of delivered heat. References establish architectures; actual model and supplier records establish the implemented route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.air-heaters-and-hot-air-distributors-not-electrically-heated-incorporating-a-motor-driv-7aebf949 |
| classification_refs | CPC 3.0 44824 |
| covered_products | Iron/steel non-electrically heated fan/blower air heaters and hot-air distributors in declared actual configurations |
| excluded_products | Electric heaters; heat pumps; passive radiators; boilers; generic fans; spare parts; installation systems |
| representative_product | One accepted complete declared heater or hot-air distributor, not a universal burner-heated average |
| production_route | Actual metal fabrication and finishing or purchased assemblies, component assembly, configuration-specific factory QA and packaging |
| market_state | Accepted finished equipment at factory gate; installation excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one complete declared air-heating or supplied-hot-air distribution machine for downstream modelling |
| How much | One accepted finished machine, represented by measured net mass M kg |
| How well | Declared thermal/airflow, safety and acceptance requirements of actual configuration; no efficiency or heat rating prescribed |
| How long or cycle | One factory production/acceptance cycle; no lifetime heating service represented |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Air heaters and hot air distributors, not electrically heated, incorporating a motor-driven fan or blower, of iron or steel `bab3c9c3-6018-402d-835f-c56ee7db029c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and configuration; iron/steel housing and heat-transfer material grades; direct-fired, indirect-fired, hydronic/steam-coil or supplied-hot-air distribution technology; actual fuel or heat-transfer medium; fan/blower and motor specification; burner and heat exchanger presence; declared airflow with test conditions; actual heater rated thermal output, not_applicable for a supplied-hot-air distributor without a heat source; controls and safety equipment; factory acceptance procedure; coating; gate state; site and reporting period; measured net mass M; supplier geography/year |

Required qualifiers must be declared in the foreground package. Keep actual configurations separate; a mass-weighted family average is permitted only with disclosed production shares and technology strata. Equal equipment mass is not equal thermal service.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| component_mass | metal/component accounting | Mass | kg | Record actual composite steel, aluminium, purchased component and retained coating masses separately. Gross steel product mass is not elemental Fe mass; any element balance needs assays. Exclude packaging from M. |
| energy_units | electricity and fuels | Energy | MJ | Keep electricity kWh and fuel NCV MJ distinct; 1 kWh = 3.6 MJ. Fuel volume conversion requires actual temperature/pressure, density and calorific basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased sheet/tube, fabricated housing/exchanger or finished components at receiving gate, including their declared upstream production |
| starting_condition_role | foreground_starting_state |
| product_classification_scope | CPC 3.0 44824 |
| recursive_input_rule | A purchased same-category unit for assembly/rework is an upstream product with provenance; do not recurse into itself or duplicate completed supplier manufacture. |
| upstream_dataset_requirement | Link compatible supplier material/component manufacture, electricity supply, fuel supply, inbound transport and waste treatment exactly once, with geography/year and starting-state disclosure. |
| disclosure | Actual route, outsourcing, supplier operations, installed component scope, QA type, heat source, pollutant fate and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_factory | all processes | Include actual fabrication, surface finish, assembly, QA/repeated tests, rework, packaging, utilities and pollution controls before gate. Purchased finished components retain upstream material and production burdens; internal intermediate transfers cancel. | `reznor-udx-specification` |
| boundary_use | factory_acceptance | Only factory test energy/emissions belong here. Installation, field commissioning, lifetime fuel/fan power, maintenance replacement and end-of-life are excluded and require separate downstream scenarios. A supplied-hot-air distributor does not produce its heat upstream at this factory unless actual test heat is supplied. | `dantherm-direct-indirect` |
| boundary_atomic | site audit | Add every actual distinct fuel, solvent, joining alloy, purchased component, waste and emission species as an atomic row. These candidate rows require route audit; no omitted-as-zero. If cure combustion, purchased test steam/heat, direct water withdrawal or other services occur, add their individual exchanges and matched upstream/direct emissions. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| metal_fabrication | Receipt, cutting, forming and heat-transfer fabrication | conditional | For site-fabricated housing, ducts or exchanger: sheet/tube preparation, punching, bending, pressing, machining and actual joining. Purchased assemblies bypass only supplier-completed operations. | Foreground manufacturing | per one accepted finished machine |
| surface_finish | Surface preparation, coating and curing | conditional | Actual degreasing, rinse, abrasive cleaning, liquid or powder coating and cure; purchased finished parts retain supplier finishing burden. | Foreground manufacturing | per one accepted finished machine |
| assembly | Fan, heat-source and controls assembly | required | Fit actual fan/blower, motor, guards, fasteners, wiring and controls; burner and heat exchanger only if present. Supplied-hot-air distributor may have neither burner nor exchanger. | Foreground manufacturing | per one accepted finished machine |
| factory_acceptance | Factory acceptance and rework | required | Document actual fan/controls/electrical and dimensional checks. Leak/pressure testing applies to sealed fuel/heat-transfer circuits; combustion QA only to fired configurations actually tested at this factory. No universal testing duration or fuel. | Foreground manufacturing | per one accepted finished machine |
| dispatch | Packaging and factory gate release | required | Release one accepted complete declared configuration; separate protective packaging from net machine mass. | Foreground manufacturing | per one accepted finished machine |
| site_services | Shared utilities and pollution control | required | Attribute actual maintenance, compressed-air generation, water treatment and exhaust capture once; no duplication in process meters. | Foreground manufacturing | per one accepted finished machine |

### Process: Receipt, cutting, forming and heat-transfer fabrication (`metal_fabrication`)

#### Inputs

##### Product flows

###### Low-carbon steel sheet (`carbon_steel_sheet`)

Only actual grade/formulation and operation. Aluminized steel is one purchased composite sheet: do not add its coating metal again. Welding/brazing may be absent for press-fabricated exchangers; other actual alloys or flux formulations need their own cards.

- Selected flow: Low-carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_carbon_steel_sheet; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbon_steel_sheet`
- Sources: `reznor-udx-specification`

###### Stainless steel heat-exchanger tube (`stainless_tube`)

Only actual grade/formulation and operation. Aluminized steel is one purchased composite sheet: do not add its coating metal again. Welding/brazing may be absent for press-fabricated exchangers; other actual alloys or flux formulations need their own cards.

- Selected flow: Stainless steel heat-exchanger tube
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_stainless_tube; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stainless_tube`
- Sources: `reznor-udx-specification`

###### Aluminized steel sheet (`aluminized_sheet`)

Only actual grade/formulation and operation. Aluminized steel is one purchased composite sheet: do not add its coating metal again. Welding/brazing may be absent for press-fabricated exchangers; other actual alloys or flux formulations need their own cards.

- Selected flow: Aluminized steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_aluminized_sheet; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminized_sheet`
- Sources: `reznor-udx-specification`

###### Aluminium heat-exchanger fin sheet (`aluminium_fin`)

Only actual grade/formulation and operation. Aluminized steel is one purchased composite sheet: do not add its coating metal again. Welding/brazing may be absent for press-fabricated exchangers; other actual alloys or flux formulations need their own cards.

- Selected flow: Aluminium heat-exchanger fin sheet
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_aluminium_fin; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminium_fin`
- Sources: `reznor-udx-specification`

###### Carbon steel welding wire (`weld_wire`)

Only actual grade/formulation and operation. Aluminized steel is one purchased composite sheet: do not add its coating metal again. Welding/brazing may be absent for press-fabricated exchangers; other actual alloys or flux formulations need their own cards.

- Selected flow: Carbon steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_weld_wire; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_weld_wire`
- Sources: `reznor-udx-specification`

###### Copper-phosphorus brazing alloy (`braze_alloy`)

Only actual grade/formulation and operation. Aluminized steel is one purchased composite sheet: do not add its coating metal again. Welding/brazing may be absent for press-fabricated exchangers; other actual alloys or flux formulations need their own cards.

- Selected flow: Copper-phosphorus brazing alloy
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_braze_alloy; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_braze_alloy`
- Sources: `reznor-udx-specification`

###### Brazing flux containing potassium fluoroborate (`braze_flux`)

Only actual grade/formulation and operation. Aluminized steel is one purchased composite sheet: do not add its coating metal again. Welding/brazing may be absent for press-fabricated exchangers; other actual alloys or flux formulations need their own cards.

- Selected flow: Brazing flux containing potassium fluoroborate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_braze_flux; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_braze_flux`
- Sources: `reznor-udx-specification`

###### Metalworking cutting oil (`cutting_oil`)

Only actual grade/formulation and operation. Aluminized steel is one purchased composite sheet: do not add its coating metal again. Welding/brazing may be absent for press-fabricated exchangers; other actual alloys or flux formulations need their own cards.

- Selected flow: Metalworking cutting oil
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_cutting_oil; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cutting_oil`
- Sources: `reznor-udx-specification`

###### Argon welding shielding gas (`argon`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_argon; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_argon`
- Sources:

###### Purchased factory electricity (`metal_fabrication_electricity`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange amount per accepted machine from cp_metal_fabrication_electricity; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_fabrication_electricity`
- Sources:

###### Copper hydronic heat-exchanger tube (`copper_tube`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Copper hydronic heat-exchanger tube
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_copper_tube; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_copper_tube`
- Sources: `reznor-hydronic-manual`

#### Outputs

##### Waste flows

###### Carbon steel fabrication scrap (`steel_scrap`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Carbon steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_steel_scrap; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_scrap`
- Sources:

###### Stainless steel fabrication scrap (`stainless_scrap`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Stainless steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_stainless_scrap; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stainless_scrap`
- Sources:

###### Aluminium fin offcut scrap (`aluminium_scrap`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Aluminium fin offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_aluminium_scrap; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminium_scrap`
- Sources:

###### Spent metalworking cutting oil (`spent_cutting_oil`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Spent metalworking cutting oil
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_spent_cutting_oil; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_cutting_oil`
- Sources:

##### Elementary flows

###### Welding particulate matter smaller than 2.5 micrometres, to air (`weld_pm25`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Welding particulate matter smaller than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_weld_pm25; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_weld_pm25`
- Sources:

### Process: Surface preparation, coating and curing (`surface_finish`)

#### Inputs

##### Product flows

###### Sodium hydroxide for alkaline degreasing (`sodium_hydroxide`)

Conditional actual coating/preparation recipe only; retain concentration, solids and solvent composition. Powder and liquid paint are alternative routes unless both are actually used. Subdivide other chemicals and solvents individually.

- Selected flow: Sodium hydroxide for alkaline degreasing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_sodium_hydroxide; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_hydroxide`
- Sources: `epa-other-metal-coating`

###### Phosphoric acid for surface pretreatment (`phosphoric_acid`)

Conditional actual coating/preparation recipe only; retain concentration, solids and solvent composition. Powder and liquid paint are alternative routes unless both are actually used. Subdivide other chemicals and solvents individually.

- Selected flow: Phosphoric acid for surface pretreatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_phosphoric_acid; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_phosphoric_acid`
- Sources: `epa-other-metal-coating`

###### Steel grit abrasive (`steel_grit`)

Conditional actual coating/preparation recipe only; retain concentration, solids and solvent composition. Powder and liquid paint are alternative routes unless both are actually used. Subdivide other chemicals and solvents individually.

- Selected flow: Steel grit abrasive
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_steel_grit; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_grit`
- Sources: `epa-other-metal-coating`

###### Polyester powder coating (`polyester_powder`)

Conditional actual coating/preparation recipe only; retain concentration, solids and solvent composition. Powder and liquid paint are alternative routes unless both are actually used. Subdivide other chemicals and solvents individually.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_polyester_powder; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyester_powder`
- Sources: `epa-other-metal-coating`

###### Alkyd paint (`alkyd_paint`)

Conditional actual coating/preparation recipe only; retain concentration, solids and solvent composition. Powder and liquid paint are alternative routes unless both are actually used. Subdivide other chemicals and solvents individually.

- Selected flow: Alkyd paint
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_alkyd_paint; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_alkyd_paint`
- Sources: `epa-other-metal-coating`

###### Xylene coating thinner (`xylene`)

Conditional actual coating/preparation recipe only; retain concentration, solids and solvent composition. Powder and liquid paint are alternative routes unless both are actually used. Subdivide other chemicals and solvents individually.

- Selected flow: Xylene coating thinner
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_xylene; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_xylene`
- Sources: `epa-other-metal-coating`

###### Purchased factory electricity (`surface_finish_electricity`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange amount per accepted machine from cp_surface_finish_electricity; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_finish_electricity`
- Sources:

###### Natural gas for coating cure (`cure_gas`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Natural gas for coating cure
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual attributable exchange amount per accepted machine from cp_cure_gas; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure_gas`
- Sources: `epa-other-metal-coating`

#### Outputs

##### Waste flows

###### Phosphate surface-treatment sludge (`pretreatment_sludge`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Phosphate surface-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_pretreatment_sludge; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pretreatment_sludge`
- Sources: `epa-other-metal-coating`

###### Spent steel-grit abrasive (`spent_grit`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Spent steel-grit abrasive
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_spent_grit; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_grit`
- Sources: `epa-other-metal-coating`

###### Alkyd paint residue (`paint_residue`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Alkyd paint residue
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_paint_residue; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paint_residue`
- Sources: `epa-other-metal-coating`

###### Unrecovered polyester coating powder (`powder_residue`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Unrecovered polyester coating powder
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_powder_residue; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powder_residue`
- Sources: `epa-other-metal-coating`

##### Elementary flows

###### Xylene, to air (`xylene_air`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Xylene, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_xylene_air; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_xylene_air`
- Sources: `epa-other-metal-coating`

###### Carbon dioxide, fossil, to air (`cure_co2`)

Only actual fuel-fired curing; residual direct combustion release after controls. Electric curing has no onsite combustion exchange. NOx as NO2 reporting does not establish pure NO2 identity.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_cure_co2; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure_co2`
- Sources:

###### Carbon monoxide, to air (`cure_co`)

Only actual fuel-fired curing; residual direct combustion release after controls. Electric curing has no onsite combustion exchange. NOx as NO2 reporting does not establish pure NO2 identity.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_cure_co; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure_co`
- Sources:

###### Nitrogen oxides, as NO2, to air (`cure_nox`)

Only actual fuel-fired curing; residual direct combustion release after controls. Electric curing has no onsite combustion exchange. NOx as NO2 reporting does not establish pure NO2 identity.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_cure_nox; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cure_nox`
- Sources:

### Process: Fan, heat-source and controls assembly (`assembly`)

#### Inputs

##### Product flows

###### Purchased axial fan impeller (`fan_impeller`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased axial fan impeller
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_fan_impeller; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fan_impeller`
- Sources: `reznor-udx-specification`

###### Purchased centrifugal blower assembly (`blower`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased centrifugal blower assembly
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_blower; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_blower`
- Sources: `reznor-udx-specification`

###### Purchased electric fan motor (`motor`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased electric fan motor
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_motor; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_motor`
- Sources: `reznor-udx-specification`

###### Purchased heater electronic control board (`control_board`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased heater electronic control board
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_control_board; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_board`
- Sources: `reznor-udx-specification`

###### Purchased gas burner assembly (`gas_burner`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased gas burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_gas_burner; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas_burner`
- Sources: `reznor-udx-specification`

###### Purchased fuel-oil burner assembly (`oil_burner`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased fuel-oil burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_oil_burner; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oil_burner`
- Sources: `reznor-udx-specification`

###### Purchased gas safety valve (`gas_valve`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased gas safety valve
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_gas_valve; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas_valve`
- Sources: `reznor-udx-specification`

###### Purchased steel heat-exchanger assembly (`exchanger`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased steel heat-exchanger assembly
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_exchanger; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchanger`
- Sources: `reznor-udx-specification`

###### Purchased coated steel heater housing (`housing`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Purchased coated steel heater housing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_housing; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_housing`
- Sources: `reznor-udx-specification`

###### Steel bolts (`fasteners`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Steel bolts
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_fasteners; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fasteners`
- Sources: `reznor-udx-specification`

###### Insulated copper electrical wire (`wire`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Insulated copper electrical wire
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_wire; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wire`
- Sources: `reznor-udx-specification`

###### Silicone rubber sealing gasket (`gasket`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Silicone rubber sealing gasket
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_gasket; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gasket`
- Sources: `reznor-udx-specification`

###### Mineral wool thermal insulation (`insulation`)

Only the actual fitted component; fan impeller and purchased complete blower are alternative component scopes, not duplicates. If a purchased blower already includes the motor, omit the separate motor input. Link each supplier component burden once, including constituent materials and processing; do not also add its copper/steel/magnet as raw feed. Purchased housing/exchanger replaces its corresponding onsite route. Burner/valve absent on non-fired distributors; record actual bill of materials.

- Selected flow: Mineral wool thermal insulation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_insulation; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_insulation`
- Sources: `reznor-udx-specification`

###### Purchased factory electricity (`assembly_electricity`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange amount per accepted machine from cp_assembly_electricity; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_electricity`
- Sources:

### Process: Factory acceptance and rework (`factory_acceptance`)

#### Inputs

##### Product flows

###### Natural gas for factory combustion testing (`natural_gas`)

Only the actual test fuel consumed before factory gate on the fired route. Fan-only and hydronic units require no combustion input; later installation/startup/use fuel excluded.

- Selected flow: Natural gas for factory combustion testing
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual attributable exchange amount per accepted machine from cp_natural_gas; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas`
- Sources: `dantherm-direct-indirect`

###### Propane for factory combustion testing (`propane`)

Only the actual test fuel consumed before factory gate on the fired route. Fan-only and hydronic units require no combustion input; later installation/startup/use fuel excluded.

- Selected flow: Propane for factory combustion testing
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual attributable exchange amount per accepted machine from cp_propane; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_propane`
- Sources: `dantherm-direct-indirect`

###### Fuel oil for factory combustion testing (`fuel_oil`)

Only the actual test fuel consumed before factory gate on the fired route. Fan-only and hydronic units require no combustion input; later installation/startup/use fuel excluded.

- Selected flow: Fuel oil for factory combustion testing
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual attributable exchange amount per accepted machine from cp_fuel_oil; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel_oil`
- Sources: `dantherm-direct-indirect`

###### Water supplied for factory circuit leak testing (`test_water`)

Only actual water-based leak/pressure testing; measure makeup and drain, not recirculated throughput. Air-tested or distributor-only units may have no water test.

- Selected flow: Water supplied for factory circuit leak testing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_test_water; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_water`
- Sources:

###### Purchased factory electricity (`factory_acceptance_electricity`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange amount per accepted machine from cp_factory_acceptance_electricity; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_factory_acceptance_electricity`
- Sources:

###### Purchased hot-water heat for factory testing (`supplied_hotwater_heat`)

Only externally supplied hot-water test heat consumed within factory gate; count supplier heat provision once, separate circuit water makeup. No lifetime heating demand.

- Selected flow: Purchased hot-water heat for factory testing
- Flow property / unit: Net calorific value / MJ
- Amount rule: Actual attributable exchange amount per accepted machine from cp_supplied_hotwater_heat; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_hotwater_heat`
- Sources:

###### Purchased steam for factory testing (`steam`)

Only actual steam-tested configurations; record pressure, temperature and condensate return state, supplier production once.

- Selected flow: Purchased steam for factory testing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_steam; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources:

#### Outputs

##### Product flows

###### Returned factory-test steam condensate (`condensate`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Returned factory-test steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_condensate; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condensate`
- Sources:

##### Waste flows

###### Factory circuit-test wastewater (`test_water_waste`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Factory circuit-test wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_test_water_waste; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_water_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2`)

Conditional actual factory fuel combustion only. Distinguish direct/indirect exhaust pathway, capture and stack/room discharge; unresolved NOx mixture is not pure NO2. No use-phase exhaust here.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_co2; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2`
- Sources: `dantherm-direct-indirect`

###### Carbon monoxide, to air (`co`)

Conditional actual factory fuel combustion only. Distinguish direct/indirect exhaust pathway, capture and stack/room discharge; unresolved NOx mixture is not pure NO2. No use-phase exhaust here.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_co; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co`
- Sources: `dantherm-direct-indirect`

###### Nitrogen oxides, as NO2, to air (`nox`)

Conditional actual factory fuel combustion only. Distinguish direct/indirect exhaust pathway, capture and stack/room discharge; unresolved NOx mixture is not pure NO2. No use-phase exhaust here.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_nox; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nox`
- Sources: `dantherm-direct-indirect`

###### Sulfur dioxide, to air (`so2`)

Conditional actual factory fuel combustion only. Distinguish direct/indirect exhaust pathway, capture and stack/room discharge; unresolved NOx mixture is not pure NO2. No use-phase exhaust here.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_so2; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_so2`
- Sources: `dantherm-direct-indirect`

###### Particulate matter smaller than 2.5 micrometres, to air (`pm25`)

Conditional actual factory fuel combustion only. Distinguish direct/indirect exhaust pathway, capture and stack/room discharge; unresolved NOx mixture is not pure NO2. No use-phase exhaust here.

- Selected flow: Particulate matter smaller than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_pm25; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm25`
- Sources: `dantherm-direct-indirect`

### Process: Packaging and factory gate release (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard packaging (`cardboard`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Corrugated cardboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_cardboard; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cardboard`
- Sources:

###### Wooden shipping pallet (`wood`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Wooden shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_wood; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`
- Sources:

###### Polyethylene protective film (`pe_film`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Polyethylene protective film
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_pe_film; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pe_film`
- Sources:

###### Purchased factory electricity (`dispatch_electricity`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange amount per accepted machine from cp_dispatch_electricity; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dispatch_electricity`
- Sources:

#### Outputs

##### Product flows

###### Air heaters and hot air distributors, not electrically heated, incorporating a motor-driven fan or blower, of iron or steel (`final_product`)

One complete accepted machine of the exact declared configuration at factory gate; no transport packaging in net mass.

- Selected flow: Air heaters and hot air distributors, not electrically heated, incorporating a motor-driven fan or blower, of iron or steel `bab3c9c3-6018-402d-835f-c56ee7db029c`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

### Process: Shared utilities and pollution control (`site_services`)

#### Inputs

##### Product flows

###### Purchased factory electricity (`site_services_electricity`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange amount per accepted machine from cp_site_services_electricity; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_services_electricity`
- Sources:

###### Supplied process water (`process_water`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Supplied process water
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_process_water; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_process_water`
- Sources:

###### Maintenance lubricating oil (`lubricant`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Maintenance lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_lubricant; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lubricant`
- Sources:

#### Outputs

##### Waste flows

###### Metal fabrication and cleaning wastewater (`wastewater`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Metal fabrication and cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_wastewater; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources:

###### Metal fabrication wastewater-treatment sludge (`treatment_sludge`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Metal fabrication wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_treatment_sludge; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_sludge`
- Sources:

###### Collected metalworking exhaust filter dust (`filter_dust`)

Include only when this named exchange occurs in the declared configuration/route; unknown quantity is not zero.

- Selected flow: Collected metalworking exhaust filter dust
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange amount per accepted machine from cp_filter_dust; retain route-specific allocation and stock reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_filter_dust`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared plant | Prefer subdivision and metering, then justified physical causality. Allocation drivers reflect actual forming hours, coated area, cure load or test runtime, not assumed identical heat output. Other/economic allocation requires consistent prices, period and sensitivity with unallocated totals retained. | `ef-allocation-2021` |
| allocation_scrap_rework | rework and scrap | Retain repeat processing/test burdens; recovered powder and internal scrap reuse are internal transfers, not new virgin inputs or credits. External steel/aluminium scrap and coating residues carry measured destination and treatment; sale does not prove co-product status and no automatic avoided-material credit is allowed. Disclose selected recycling convention. | `ef-allocation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | final_product | measurement_record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted configuration/batch | Declared production period | Declared factory | accepted net mass per machine | Calibration; weighing and BOM reconciliation |
| cp_carbon_steel_sheet | metal_fabrication | carbon_steel_sheet | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_stainless_tube | metal_fabrication | stainless_tube | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_aluminized_sheet | metal_fabrication | aluminized_sheet | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_aluminium_fin | metal_fabrication | aluminium_fin | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_weld_wire | metal_fabrication | weld_wire | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_braze_alloy | metal_fabrication | braze_alloy | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_braze_flux | metal_fabrication | braze_flux | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_cutting_oil | metal_fabrication | cutting_oil | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_argon | metal_fabrication | argon | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_steel_scrap | metal_fabrication | steel_scrap | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_stainless_scrap | metal_fabrication | stainless_scrap | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_aluminium_scrap | metal_fabrication | aluminium_scrap | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_spent_cutting_oil | metal_fabrication | spent_cutting_oil | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_sodium_hydroxide | surface_finish | sodium_hydroxide | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_phosphoric_acid | surface_finish | phosphoric_acid | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_steel_grit | surface_finish | steel_grit | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_polyester_powder | surface_finish | polyester_powder | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_alkyd_paint | surface_finish | alkyd_paint | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_xylene | surface_finish | xylene | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_pretreatment_sludge | surface_finish | pretreatment_sludge | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_spent_grit | surface_finish | spent_grit | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_paint_residue | surface_finish | paint_residue | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_powder_residue | surface_finish | powder_residue | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_xylene_air | surface_finish | xylene_air | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Species-specific solvent balance after recovered solvent, retained coating solvent and collected waste, or measured capture/stack flows; do not map aggregate VOC to xylene. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_fan_impeller | assembly | fan_impeller | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_blower | assembly | blower | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_motor | assembly | motor | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_control_board | assembly | control_board | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_gas_burner | assembly | gas_burner | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_oil_burner | assembly | oil_burner | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_gas_valve | assembly | gas_valve | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_exchanger | assembly | exchanger | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_housing | assembly | housing | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_fasteners | assembly | fasteners | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_wire | assembly | wire | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_gasket | assembly | gasket | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_insulation | assembly | insulation | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_natural_gas | factory_acceptance | natural_gas | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Meter actual test consumption and repeated tests; retain fuel composition, pressure/temperature and measured net calorific value. Mass × NCV gives MJ; no assumed hours or consumption. | MJ | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_propane | factory_acceptance | propane | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Meter actual test consumption and repeated tests; retain fuel composition, pressure/temperature and measured net calorific value. Mass × NCV gives MJ; no assumed hours or consumption. | MJ | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_fuel_oil | factory_acceptance | fuel_oil | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Meter actual test consumption and repeated tests; retain fuel composition, pressure/temperature and measured net calorific value. Mass × NCV gives MJ; no assumed hours or consumption. | MJ | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_co2 | factory_acceptance | co2 | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Matched pollutant measurement, gas flow, reporting basis and test duration after control; fossil CO2 may use actual fuel carbon balance. Retain species and air compartment; no generic factor adopted. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_co | factory_acceptance | co | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Matched pollutant measurement, gas flow, reporting basis and test duration after control; fossil CO2 may use actual fuel carbon balance. Retain species and air compartment; no generic factor adopted. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_nox | factory_acceptance | nox | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Matched pollutant measurement, gas flow, reporting basis and test duration after control; fossil CO2 may use actual fuel carbon balance. Retain species and air compartment; no generic factor adopted. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_so2 | factory_acceptance | so2 | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Matched pollutant measurement, gas flow, reporting basis and test duration after control; fossil CO2 may use actual fuel carbon balance. Retain species and air compartment; no generic factor adopted. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_pm25 | factory_acceptance | pm25 | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Matched pollutant measurement, gas flow, reporting basis and test duration after control; fossil CO2 may use actual fuel carbon balance. Retain species and air compartment; no generic factor adopted. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_test_water | factory_acceptance | test_water | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_test_water_waste | factory_acceptance | test_water_waste | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_cardboard | dispatch | cardboard | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_wood | dispatch | wood | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_pe_film | dispatch | pe_film | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_metal_fabrication_electricity | metal_fabrication | metal_fabrication_electricity | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Process submeter and shared-service allocation; reconcile site bill, voltage, supply geography/year and meter intervals. Exclude lifetime fan energy. | kWh | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_surface_finish_electricity | surface_finish | surface_finish_electricity | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Process submeter and shared-service allocation; reconcile site bill, voltage, supply geography/year and meter intervals. Exclude lifetime fan energy. | kWh | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_assembly_electricity | assembly | assembly_electricity | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Process submeter and shared-service allocation; reconcile site bill, voltage, supply geography/year and meter intervals. Exclude lifetime fan energy. | kWh | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_factory_acceptance_electricity | factory_acceptance | factory_acceptance_electricity | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Process submeter and shared-service allocation; reconcile site bill, voltage, supply geography/year and meter intervals. Exclude lifetime fan energy. | kWh | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_dispatch_electricity | dispatch | dispatch_electricity | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Process submeter and shared-service allocation; reconcile site bill, voltage, supply geography/year and meter intervals. Exclude lifetime fan energy. | kWh | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_site_services_electricity | site_services | site_services_electricity | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Process submeter and shared-service allocation; reconcile site bill, voltage, supply geography/year and meter intervals. Exclude lifetime fan energy. | kWh | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_cure_gas | surface_finish | cure_gas | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Meter actual cure furnace fuel and measured NCV; electric-only cure has no gas input. Add actual combustion species separately if used. | MJ | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_process_water | site_services | process_water | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Meter actual external makeup for cleaning and treatment; exclude internal loop circulation. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_lubricant | site_services | lubricant | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_wastewater | site_services | wastewater | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Meter discharge to actual offsite treatment, document solids/contaminants; onsite-treated effluent species require individual receiving-compartment cards instead. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_treatment_sludge | site_services | treatment_sludge | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_filter_dust | site_services | filter_dust | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_weld_pm25 | metal_fabrication | weld_pm25 | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Actual residual welding fume after capture, measured with particle-size basis; collected filter dust stays a waste exchange. Do not turn total fume into PM2.5 without size evidence. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_copper_tube | metal_fabrication | copper_tube | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_supplied_hotwater_heat | factory_acceptance | supplied_hotwater_heat | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Meter heat from actual flow and inlet/return temperatures with validated fluid heat capacity; retain losses and recirculation boundary. | MJ | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_steam | factory_acceptance | steam | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_condensate | factory_acceptance | condensate | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Weigh actual external amount by batch; reconcile receipts, opening/closing stock and returns; retain supplier specification. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_cure_co2 | surface_finish | cure_co2 | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Fuel-carbon closure for fossil CO2 requires measured fuel carbon, retained carbon and known other carbon outputs including CO, hydrocarbons and soot; otherwise use matched species monitoring or an independently verified applicable factor. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_cure_co | surface_finish | cure_co | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Use species-specific matched concentration, gas flow and cure duration after controls, or an independently verified applicable species factor with actual fuel/device/control conditions. Fuel carbon closure alone cannot establish CO or NOx. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |
| cp_cure_nox | surface_finish | cure_nox | measurement_record | configuration; route applicability; period; raw amount and unit; meter or weighing record; stocks; accepted units; rejects; rework; allocation driver; uncertainty | Use species-specific matched concentration, gas flow and cure duration after controls, or an independently verified applicable species factor with actual fuel/device/control conditions. Fuel carbon closure alone cannot establish CO or NOx. | kg | Each batch/test or meter interval | Full year or justified representative campaign including rework | Declared configuration at factory and shared services | per one accepted finished machine | Original records; calibration; supplier certificates; route and fate evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_allocation | all inventory rows | Allocate reconciled reporting-period external exchanges to accepted machines of the same configuration; use actual accepted count. Keep rejects/rework in numerator. Product output is M kg for one accepted machine. | row protocols; accepted count; cp_mass | per one accepted finished machine |  |
| material_balance | metal_fabrication; assembly | For each material grade, opening stock + external receipts = closing stock + incorporated material + external scrap/waste + documented actual losses. Pair internal recovery generation and reuse by batch/process and cancel the matching transfer quantities at plant boundary; recovered material is never a fresh external receipt. Reconcile complete-machine mass to actual BOM and retained coating/fluids; purchased-component mass is counted once. Fe-element balance uses grade-specific assays, never gross steel mass. | weighing; BOM; stocks; waste; assays | Balance residual and measurement uncertainty |  |
| coating_balance | surface_finish | Account formulation solids and each solvent separately: opening stock + external receipts = closing stock + retained formulation constituents + externally recovered material/waste + direct air releases. Match and cancel internal powder/solvent recovery and reuse; do not count them as external receipts or external recovered outputs. Quantify captured waste separately from residual air releases; no generic VOC factor. | formulation; application/capture records; stocks | Component-specific closure | `epa-other-metal-coating` |
| energy_balance | utilities; factory_acceptance | Process and allocated auxiliary electricity totals reconcile to supply meters; document distribution losses. Test fuel carbon/energy balance uses actual measured fuel and test record; useful test heat, exhaust and losses remain distinguishable. Lifetime heat demand is outside this balance. | electric meters; fuel NCV/carbon; test records | Measured energy/closure, no invented tolerance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference and components | model and configuration; iron/steel housing and heat-transfer material grades; direct-fired, indirect-fired, hydronic/steam-coil or supplied-hot-air distribution technology; actual fuel or heat-transfer medium; fan/blower and motor specification; burner and heat exchanger presence; declared airflow with test conditions; actual heater rated thermal output, not_applicable for a supplied-hot-air distributor without a heat source; controls and safety equipment; factory acceptance procedure; coating; gate state; site and reporting period; measured net mass M; supplier geography/year | BOM; drawings; model; supplier records; factory acceptance |
| applicability | all rows | Distinguish measured zero, absent route, unknown and measured amount. Resolve flow type, material formulation, property/unit, geography/year and emission compartment before finalized data. | Route audit; direct flow records; QA evidence |
| representativeness | production | Stratify actual technology/model/metal grades and purchased-versus-site fabrication; disclose weighting, uncertainty, omitted exchanges and evidence limitations. No empirical intensity range is imposed. | Period totals and configuration production shares |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_mass | reference and inventory | Reference M must trace to cp_mass for the same configuration and exclude packaging. Every row uses the same one-accepted-machine denominator and a declared protocol; no assumed equipment weight. |  |
| validation_route | factory_acceptance | Check heat-source and component configuration; no mandatory burner, welding/brazing or combustion QA for all models. No missing fuel or direct emission when actual factory combustion occurs; no lifetime-use energy in manufacturing. | `reznor-udx-specification`; `dantherm-direct-indirect`; `reznor-hydronic-manual` |
| validation_balance | all processes | Reconcile material, stock, coating, energy and rework balances with uncertainty; verify supplier burdens, transport and waste fate exactly once. Unknown UUID or insufficient species evidence remains an explicit gap rather than an invented match. No generic incinerator power dataset as factory supply. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing equipment inputs to process/lifecyclemodel with separate installation and use scenarios |
| excluded_use | Standalone lifetime heating assessment; equipment kg as equivalent delivered heat; uncontrolled cross-technology average |
| required_metadata | model and configuration; iron/steel housing and heat-transfer material grades; direct-fired, indirect-fired, hydronic/steam-coil or supplied-hot-air distribution technology; actual fuel or heat-transfer medium; fan/blower and motor specification; burner and heat exchanger presence; declared airflow with test conditions; actual heater rated thermal output, not_applicable for a supplied-hot-air distributor without a heat source; controls and safety equipment; factory acceptance procedure; coating; gate state; site and reporting period; measured net mass M; supplier geography/year |
| required_quality_disclosure | Route coverage; supplier starting state; unresolved identities; empirical range gaps; acceptance evidence; uncertainty and allocation |
| update_trigger | Changed technology/BOM, heat source, manufacturing route, supplier, coating, acceptance tests or reference mass |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-air-heaters | official_guidance | UNSD, CPC Version 3.0, subclass 44824 and class 4482. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/44824 | Identity qualifiers: iron/steel, non-electrical heating and motor-driven fan/blower; adjacent subclasses distinguish radiators and boilers. Classification does not prescribe a burner, mass, efficiency or manufacturing route. |
| reznor-udx-specification | extension_guidance | Reznor, Model UDX Sample Specification, heat exchanger, burner and controls sections. https://assets.reznorhvac.com/download/150e5cee-9ce7-11ed-bfcb-0016e1e579b9 | One indirect gas-fired heater architecture: steel exchanger, axial fan, gas burner, valve and electronic controls. Press-fabricated exchanger explicitly avoids welding/brazing: joining is conditional, not universal. Manufacturer specifications are not category-wide intensities. |
| dantherm-direct-indirect | extension_guidance | Dantherm Group, Heating for large-scale construction projects, direct versus indirect-fired heaters. https://www.danthermgroup.com/uk/solutions/construction/heating-for-large-scale-construction-projects | Independent manufacturer distinguishes direct combustion into air from indirect heat exchanger separation; does not establish universal factory test time, fuel, mass or lifetime performance. |
| reznor-hydronic-manual | handbook | Reznor, UWS Hydronic Unit Heater. https://www.reznorhvac.com/product/uws/ | Hydronic hot-water heater counterexample uses copper rather than steel heat-exchanger tubes; establishes non-burner supply and material-route variability only. Iron/steel category applicability needs actual housing/product records. No operating figures adopted. |
| epa-other-metal-coating | official_guidance | US EPA, AP-42 section 4.2.2.4 Other Metal Coating, 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2d.pdf | Conditional liquid/powder coating and solvent loss pathways; use actual formulation and capture fate rather than historical generic factors. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Subdivision and justified physical/other allocation hierarchy; no claim of complete PEF conformance. |
