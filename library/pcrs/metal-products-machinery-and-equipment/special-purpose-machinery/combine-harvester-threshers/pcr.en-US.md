---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.combine-harvester-threshers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Combine harvester-threshers

## 1. Scope and Applicability

This methodology covers complete machines combining crop harvesting with threshing, separation and cleaning, whether self-propelled or trailed. Rotary, conventional drum with straw walkers, and hybrid drum/rotor architectures are conditional configurations, not one representative route imposed on the category. Exclude stand-alone threshers, separately supplied headers/parts, mowers, balers, root/tuber harvesters, forage harvesters without integrated grain threshing, tractors, and fixed post-harvest cleaning/grading plants. A delivered base combine without its separately supplied header remains declared as such; do not silently add a header to its mass. A header shipped in the declared product is included once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.combine-harvester-threshers |
| classification_refs | CPC 3.0:44122 |
| covered_products | Combine harvester-threshers |
| excluded_products | Standalone threshers; separate parts/headers; other harvesting machinery; tractors |
| representative_product | Declared accepted grain combine with its actual harvesting interface |
| production_route | Conditional fabrication/joining/coating; bought or internally made systems; assembly/filling/test/dispatch |
| market_state | Accepted new complete machine at manufacturing gate, declared accessories and retained fills |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of accepted complete combine harvester-thresher |
| How much | 1 kg |
| How well | Configuration-specific mechanical, hydraulic and electrical acceptance; no promised field output |
| How long or cycle | One supply at factory gate; no service-life default |
| reference_flow_link | `combine_harvester` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Combine harvester / threshers `09941fc2-9cbe-480c-94f1-533065c78b66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | factory and period; model/configuration; self-propelled or trailed; crop and harvesting attachment; delivered header inclusion; rotary, walker or hybrid architecture; wheel/track and slope system; engine or PTO drive; cab, HVAC, controls and battery; delivered fills; net accepted mass; test protocol; make/buy boundary; packaging |

Declare all qualifiers. For one period and SAME configuration: N is accepted machine count, D is sum of calibrated accepted net masses, M = D/N, Q is attributable period exchange including reject/rework burden. First obtain q_item = Q/N, then q_ref = q_item/M = Q/D. Keep configuration strata separate. D excludes rejected machines, transport packaging, reusable fixtures and test crop; declared delivered attachments and retained fills are included. Manufacturer operating/base mass is not a proxy for D.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| species_basis | physical material and species records | Mass | kg | For each contained metal/species j separately, calculate each stream mass times its OWN matched assay on a declared wet/dry basis. Include purchased material, opening/closing stock, accepted product, scrap, dust, slag, sludge, wastewater and environmental releases plus reaction transformation. Never equate gross scrap/sludge mass with contained metal or reuse feed assay for product/waste. |
| water_balance | physical water and moisture records | Mass | kg | Close actual water: external water plus input moisture and opening stocks plus reaction-generated water equals shipped retained water, waste/effluent moisture, measured evaporation, reaction-consumed water and closing stocks. Pair and cancel internal return transfers. Each moisture term has its own matched assay, basis and uncertainty; circulating water is not external input. |
| carrier_conversion | energy rows | Energy | kWh; MJ | Retain metered electricity separately; 1 kWh = 3.6 MJ. Gas volume requires actual composition, NCV and reference temperature/pressure; fluid volumes need actual density. Do not apply material assays to electricity/transport. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased materials and assemblies delivered to plant; identify finished/intermediate state and supplier operations |
| starting_condition_role | Foreground supply interface |
| product_classification_scope | Combine harvester-threshers |
| recursive_input_rule | Bought complete same-category machine carries separate supplier burden once; internal rework is not another purchased reference output |
| upstream_dataset_requirement | Qualified geography/year/technology and actual transport for each supplied material, module, utility and treatment |
| disclosure | factory and period; model/configuration; self-propelled or trailed; crop and harvesting attachment; delivered header inclusion; rotary, walker or hybrid architecture; wheel/track and slope system; engine or PTO drive; cab, HVAC, controls and battery; delivered fills; net accepted mass; test protocol; make/buy boundary; packaging |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| factory_gate | all processes | Include actual receiving, manufacture, assembly, filling, acceptance, handling, pollution control and delivery preparation through gate. Later harvesting service, farm fuel, crop yield, wear replacement and end-of-life are separately modelled downstream. |  |
| make_buy | assembly | Maintain BOM make/buy matrix for every physical subsystem: supplied module boundary, own inputs/processes, retained fill, and shipped configuration. Bought engine/motor/transmission carries embedded metals, machining and supplier fills once; do not also add constituent raw material. Internally made cab, feeder, tank or separation systems require their actual material, part and process cards. Every additional motor, gear, sensor, tyre, bearing or chemical crossing separately gets a named atomic row; assembly names cannot conceal purchased parts. | `deere-s-series-4592208`; `claas-trion-walker`; `claas-trion-hybrid` |
| paint_kit_boundary | joining_coating | Record base resin and hardener separately only when they cross separately: liquid is base resin excluding hardener. If a complete two-component kit is the supplied product, replace both separate cards with one kit card whose amount and upstream boundary include its actual hardener once. Bought pre-coated modules include coating upstream once; validate kit/base/hardener mutual exclusion against procurement and composition. | |
| delivery_configuration | dispatch | Declare header included/absent; tracks versus mounted wheels, slope equipment, cab/HVAC and controls, aftertreatment and fluids. Trailed configuration includes actual drawbar/PTO, excludes supplying tractor and later tractor fuel; do not force a diesel engine or cab on it. Reusable dispatch fixture is excluded from M but its attributable service, loss and maintenance burden is included. Capital exclusions require stated rationale and coverage. | `claas-history`; `deere-s-series-4592208` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Fabrication and machining | conditional | Only actual in-house plate/tube cutting, forming, machining and heat treatment; bought finished structures retain supplier burdens. | Foreground production | per 1 kg reference flow; collected per one accepted finished machine |
| joining_coating | Joining, pretreatment and coating | conditional | Actual welding, cleaning, abrasive blasting, liquid or powder coating and cure; outsourced operations accounted at purchased interface. | Foreground production | per 1 kg reference flow; collected per one accepted finished machine |
| assembly | System and machine assembly | required | Reconcile configuration-specific structures, harvesting, threshing, separation, cleaning, handling, mobility, drive and control systems. | Foreground production | per 1 kg reference flow; collected per one accepted finished machine |
| filling_testing | Factory filling and acceptance testing | required | Actual pre-gate fills and mechanical/hydraulic/electrical acceptance; crop-load testing only where actually performed. | Foreground production | per 1 kg reference flow; collected per one accepted finished machine |
| dispatch | Delivery preparation | required | Declared factory-gate product and accessories; actual preservation, packaging and handling. | Foreground production | per 1 kg reference flow; collected per one accepted finished machine |
| shared_services | Shared utilities and pollution control | conditional | Unassigned residual service loads only, plus actual waste/effluent treatment and control media. | Foreground production | per 1 kg reference flow; collected per one accepted finished machine |

### Process: Fabrication and machining (`fabrication`)

#### Inputs

##### Product flows

###### Carbon-steel structural plate (`steel_plate`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Carbon-steel structural plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steel_plate.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_plate`
- Sources:

###### Carbon-steel structural tube (`steel_tube`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Carbon-steel structural tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steel_tube.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_tube`
- Sources:

###### Alloy-steel shaft bar (`steel_bar`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Alloy-steel shaft bar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steel_bar.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_bar`
- Sources:

###### Aluminium enclosure sheet (`al_sheet`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Aluminium enclosure sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_al_sheet.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_al_sheet`
- Sources:

###### Machining coolant emulsion (`coolant`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Machining coolant emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coolant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coolant`
- Sources:

###### Purchased grid electricity (`fabrication_electricity`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Purchased grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication_electricity`
- Sources:

###### Natural gas for process heat (`fabrication_gas`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Natural gas for process heat
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication_gas`
- Sources:

#### Outputs

##### Waste flows

###### Carbon-steel fabrication scrap (`steel_scrap`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Carbon-steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steel_scrap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_scrap`
- Sources:

###### Aluminium fabrication scrap (`al_scrap`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Aluminium fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_al_scrap.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_al_scrap`
- Sources:

###### Spent machining coolant emulsion (`spent_coolant`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Spent machining coolant emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_spent_coolant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_coolant`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fabrication_co2`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication_co2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication_co2`
- Sources:

### Process: Joining, pretreatment and coating (`joining_coating`)

#### Inputs

##### Product flows

###### Carbon-steel welding wire (`weld_wire`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Carbon-steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_weld_wire.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_weld_wire`
- Sources:

###### Argon shielding gas (`argon`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_argon.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_argon`
- Sources:

###### Carbon dioxide shielding gas (`co2_shield`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Carbon dioxide shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_co2_shield.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_shield`
- Sources:

###### Steel blasting grit (`grit`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Steel blasting grit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_grit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grit`
- Sources:

###### Sodium hydroxide cleaning agent (`naoh`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Sodium hydroxide cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_naoh.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_naoh`
- Sources:

###### Polyester machinery powder coating (`powder`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Polyester machinery powder coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powder`
- Sources:

###### Polyurethane machinery coating base resin (`liquid`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Polyurethane machinery coating base resin
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_liquid.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_liquid`
- Sources:

###### Polyisocyanate coating hardener (`hardener`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Polyisocyanate coating hardener
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hardener.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hardener`
- Sources:

###### Xylene cleaning solvent (`solvent`)

Actual work order, supplier safety/formulation data and inventory issue records must establish this named chemistry; the historical permit proves only a conditional process route, not this chemical identity.

Conditional site-selected route and actual formulation only; this card is not a claim that every factory uses this chemistry. Add a separate card for each different actual component; do not substitute this named substance for an unknown formulation.

- Selected flow: Xylene cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent`
- Sources:

###### Purchased grid electricity (`joining_coating_electricity`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Purchased grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining_coating_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining_coating_electricity`
- Sources:

###### Natural gas for process heat (`joining_coating_gas`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Natural gas for process heat
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining_coating_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining_coating_gas`
- Sources:

#### Outputs

##### Waste flows

###### Captured welding filter dust (`weld_dust`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Captured welding filter dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_weld_dust.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_weld_dust`
- Sources: `new-holland-permit-1995`

###### Water-curtain paint booth sludge (`paint_sludge`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Water-curtain paint booth sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_paint_sludge.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paint_sludge`
- Sources: `new-holland-permit-1995`

###### Spent paint booth dry filter (`spent_filter`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Spent paint booth dry filter
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_spent_filter.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_filter`
- Sources: `new-holland-permit-1995`

###### Waste polyester powder coating (`powder_waste`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Waste polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powder_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powder_waste`
- Sources: `new-holland-permit-1995`

###### Recovered xylene solvent for external treatment (`solvent_waste`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Recovered xylene solvent for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent_waste`
- Sources: `new-holland-permit-1995`

##### Elementary flows

###### Xylene, to air (`xylene_air`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Xylene, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_xylene_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_xylene_air`
- Sources:

###### Particulate matter below 10 micrometres, to air (`weld_pm`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Particulate matter below 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_weld_pm.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_weld_pm`
- Sources:

###### Carbon dioxide, fossil, to air (`joining_coating_co2`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining_coating_co2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining_coating_co2`
- Sources:

### Process: System and machine assembly (`assembly`)

#### Inputs

##### Product flows

###### Purchased combine structural frame (`frame`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased combine structural frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_frame`
- Sources: `deere-s-series-4592208`

###### Purchased complete diesel engine (`engine`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased complete diesel engine
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_engine.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_engine`
- Sources: `deere-s-series-4592208`

###### Purchased combine propulsion transmission (`transmission`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased combine propulsion transmission
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_transmission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transmission`
- Sources: `deere-s-series-4592208`

###### Purchased combine PTO driveline (`pto`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased combine PTO driveline
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pto.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pto`
- Sources: `deere-s-series-4592208`

###### Purchased grain cutting header (`header`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased grain cutting header
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_header.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_header`
- Sources: `deere-s-series-4592208`

###### Purchased maize harvesting header (`maize_head`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased maize harvesting header
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_maize_head.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maize_head`
- Sources: `deere-s-series-4592208`

###### Purchased combine feederhouse (`feeder`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased combine feederhouse
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_feeder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feeder`
- Sources: `deere-s-series-4592208`

###### Purchased rotary threshing-separation module (`rotor`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased rotary threshing-separation module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rotor.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rotor`
- Sources: `deere-s-series-4592208`

###### Purchased tangential threshing drum module (`drum`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased tangential threshing drum module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_drum.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drum`
- Sources: `deere-s-series-4592208`

###### Purchased straw-walker separation module (`walker`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased straw-walker separation module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_walker.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_walker`
- Sources: `deere-s-series-4592208`

###### Purchased hybrid secondary-separation rotor module (`hybrid_rotor`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased hybrid secondary-separation rotor module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hybrid_rotor.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hybrid_rotor`
- Sources: `deere-s-series-4592208`

###### Purchased combine cleaning shoe and fan module (`cleaner`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased combine cleaning shoe and fan module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaner.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaner`
- Sources: `deere-s-series-4592208`

###### Purchased combine grain tank (`tank`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased combine grain tank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tank.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tank`
- Sources: `deere-s-series-4592208`

###### Purchased unloading auger module (`auger`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased unloading auger module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_auger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_auger`
- Sources: `deere-s-series-4592208`

###### Purchased straw chopper module (`chopper`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased straw chopper module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chopper.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chopper`
- Sources: `deere-s-series-4592208`

###### Purchased mounted agricultural wheel and tyre (`wheel`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased mounted agricultural wheel and tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wheel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wheel`
- Sources: `deere-s-series-4592208`

###### Purchased combine rubber-track undercarriage (`track`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased combine rubber-track undercarriage
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_track.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_track`
- Sources: `deere-s-series-4592208`

###### Purchased steering axle (`axle`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased steering axle
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_axle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_axle`
- Sources: `deere-s-series-4592208`

###### Purchased hydraulic pump (`hydraulic`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased hydraulic pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulic.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulic`
- Sources: `deere-s-series-4592208`

###### Purchased hydraulic cylinder (`cylinder`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cylinder.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cylinder`
- Sources: `deere-s-series-4592208`

###### Purchased hydraulic hose (`hose`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased hydraulic hose
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hose.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hose`
- Sources: `deere-s-series-4592208`

###### Purchased operator cab module (`cab`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased operator cab module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cab`
- Sources: `deere-s-series-4592208`

###### Purchased cab air-conditioning module (`hvac`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased cab air-conditioning module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hvac.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hvac`
- Sources: `deere-s-series-4592208`

###### Purchased electronic machine controller (`controller`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased electronic machine controller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_controller.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controller`
- Sources: `deere-s-series-4592208`

###### Purchased copper-conductor wiring harness (`harness`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased copper-conductor wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_harness.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harness`
- Sources: `deere-s-series-4592208`

###### Purchased operator display (`display`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased operator display
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_display.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_display`
- Sources: `deere-s-series-4592208`

###### Purchased GNSS receiver (`gps`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased GNSS receiver
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gps.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gps`
- Sources: `deere-s-series-4592208`

###### Purchased lead-acid starter battery (`battery`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased lead-acid starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_battery.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_battery`
- Sources: `deere-s-series-4592208`

###### Purchased steel fastener (`fastener`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased steel fastener
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fastener.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fastener`
- Sources: `deere-s-series-4592208`

###### Purchased rubber drive belt (`belt`)

Match one actual supplied BOM item and make/buy state. Bought modules carry their embedded materials/components/fills upstream once; own manufacture replaces the module input with actual constituent and process cards. Rotary, walker and hybrid assemblies, wheel/track alternatives and header types are configuration-specific, not cumulative defaults.

- Selected flow: Purchased rubber drive belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_belt.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_belt`
- Sources: `deere-s-series-4592208`

###### Purchased grid electricity (`assembly_electricity`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Purchased grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_electricity`
- Sources:

### Process: Factory filling and acceptance testing (`filling_testing`)

#### Inputs

##### Product flows

###### Diesel fuel for factory acceptance (`diesel`)

Use only actual pre-gate consumption/fill; separate amount retained in delivered machine from burned, leaked, drained or returned amount. Identify actual fluid chemistry and fill already included in bought module. Test crop is conditional actual batch, not later farm yield.

- Selected flow: Diesel fuel for factory acceptance
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_diesel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diesel`
- Sources:

###### Hydraulic oil factory fill (`hydraulic_oil`)

Use only actual pre-gate consumption/fill; separate amount retained in delivered machine from burned, leaked, drained or returned amount. Identify actual fluid chemistry and fill already included in bought module. Test crop is conditional actual batch, not later farm yield.

- Selected flow: Hydraulic oil factory fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulic_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulic_oil`
- Sources:

###### Diesel engine lubricating oil factory fill (`engine_oil`)

Use only actual pre-gate consumption/fill; separate amount retained in delivered machine from burned, leaked, drained or returned amount. Identify actual fluid chemistry and fill already included in bought module. Test crop is conditional actual batch, not later farm yield.

- Selected flow: Diesel engine lubricating oil factory fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_engine_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_engine_oil`
- Sources:

###### Transmission gear oil factory fill (`gear_oil`)

Use only actual pre-gate consumption/fill; separate amount retained in delivered machine from burned, leaked, drained or returned amount. Identify actual fluid chemistry and fill already included in bought module. Test crop is conditional actual batch, not later farm yield.

- Selected flow: Transmission gear oil factory fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gear_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gear_oil`
- Sources:

###### Ethylene-glycol engine coolant factory fill (`coolant_fill`)

Use only actual pre-gate consumption/fill; separate amount retained in delivered machine from burned, leaked, drained or returned amount. Identify actual fluid chemistry and fill already included in bought module. Test crop is conditional actual batch, not later farm yield.

- Selected flow: Ethylene-glycol engine coolant factory fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coolant_fill.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coolant_fill`
- Sources:

###### Aqueous urea diesel exhaust fluid (`def`)

Use only actual pre-gate consumption/fill; separate amount retained in delivered machine from burned, leaked, drained or returned amount. Identify actual fluid chemistry and fill already included in bought module. Test crop is conditional actual batch, not later farm yield.

- Selected flow: Aqueous urea diesel exhaust fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_def.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_def`
- Sources:

###### R134a cab refrigerant factory charge (`r134a`)

Use only actual pre-gate consumption/fill; separate amount retained in delivered machine from burned, leaked, drained or returned amount. Identify actual fluid chemistry and fill already included in bought module. Test crop is conditional actual batch, not later farm yield.

- Selected flow: R134a cab refrigerant factory charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_r134a.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_r134a`
- Sources:

###### Wheat grain for factory acceptance test (`test_wheat`)

Use only actual pre-gate consumption/fill; separate amount retained in delivered machine from burned, leaked, drained or returned amount. Identify actual fluid chemistry and fill already included in bought module. Test crop is conditional actual batch, not later farm yield.

- Selected flow: Wheat grain for factory acceptance test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_wheat.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_wheat`
- Sources:

###### Purchased grid electricity (`filling_testing_electricity`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Purchased grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_filling_testing_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_filling_testing_electricity`
- Sources:

#### Outputs

##### Waste flows

###### Spent hydraulic oil from factory test (`spent_oil`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Spent hydraulic oil from factory test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_spent_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_oil`
- Sources:

###### Waste wheat grain from factory test (`test_crop_waste`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Waste wheat grain from factory test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_test_crop_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_crop_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`diesel_co2`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_diesel_co2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diesel_co2`
- Sources:

###### Carbon monoxide, to air (`diesel_co`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_diesel_co.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diesel_co`
- Sources:

###### Nitrogen monoxide, to air (`diesel_no`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_diesel_no.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diesel_no`
- Sources:

###### Nitrogen dioxide, to air (`diesel_no2`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_diesel_no2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diesel_no2`
- Sources:

###### R134a, to air (`refrigerant_loss`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: R134a, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_refrigerant_loss.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant_loss`
- Sources:

### Process: Delivery preparation (`dispatch`)

#### Inputs

##### Product flows

###### Wooden transport support (`wood_pack`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Wooden transport support
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wood_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood_pack`
- Sources:

###### Polyethylene transport protection film (`film_pack`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Polyethylene transport protection film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_film_pack.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_film_pack`
- Sources:

###### Temporary corrosion-protection oil (`rust_oil`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Temporary corrosion-protection oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_rust_oil.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rust_oil`
- Sources:

###### Purchased grid electricity (`dispatch_electricity`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Purchased grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dispatch_electricity`
- Sources:

#### Outputs

##### Product flows

###### Combine harvester / threshers (`combine_harvester`)

Accepted complete delivered configuration; exclude transport packaging and reject mass from net denominator. Include only declared shipped attachments and retained fills.

- Selected flow: Combine harvester / threshers `09941fc2-9cbe-480c-94f1-533065c78b66`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources:

### Process: Shared utilities and pollution control (`shared_services`)

#### Inputs

##### Product flows

###### Purchased grid electricity (`shared_services_electricity`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Purchased grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_shared_services_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shared_services_electricity`
- Sources:

###### Purchased industrial process water (`water`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Purchased industrial process water
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

#### Outputs

##### Waste flows

###### Industrial wastewater transferred to treatment (`wastewater`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Industrial wastewater transferred to treatment
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastewater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources:

###### Metal-bearing wastewater treatment sludge (`sludge`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Metal-bearing wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_sludge.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sludge`
- Sources:

##### Elementary flows

###### Water vapour, to air (`water_air`)

Include only when this specific exchange crosses the actual route boundary; declare grade, formulation, supplier interface and stock/return state.

- Selected flow: Water vapour, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water_air.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_air`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint manufacturing | Subdivide first; otherwise use demonstrated physical causality (operation time, treated area, machine/test loads). Economic fallback requires consistent period/price and sensitivity. Preserve unallocated totals; do not allocate purely by machine mass without explaining configuration differences. | `ef-allocation-2021` |
| rework_waste | all rows | Q includes rejected/reworked machine processing and retesting; N and D contain accepted output only. Cancel internal transfers, retain repeated energy/material losses. Account actual external scrap and treatment once; no automatic avoided-metal credits. Test grain/straw are test outputs, not default machine coproducts or agricultural yield. | `ef-allocation-2021` |
| shared_residual | utilities | Reconcile each utility in one site period/unit: purchased imports plus actual generation plus opening storage equals assigned fabrication/coating/assembly/test/dispatch use plus unassigned residual plus exports and closing storage/loss. Shared services carry only causal share of unassigned residual. Verify negative residual against period, unit, stock and meter uncertainty; never clip it to zero. Purchased heat, own fuel generation and recovery transfers are distinct. Meter actual recovered test-cabin heat and paired internal transfer; cancel internal transfer on site aggregation. Reduce actual external heat requirement only through its measured resulting meter consumption; do not add an avoided-power credit or a second avoided-heat credit. Exports, if any, need separate measured destination and allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | combine_harvester | measurement_record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted unit | Same reporting period | Same factory and configuration | accepted net mass per machine | Calibration; acceptance and BOM; N and D reconciliation |
| cp_steel_plate | fabrication | steel_plate | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_steel_tube | fabrication | steel_tube | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_steel_bar | fabrication | steel_bar | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_al_sheet | fabrication | al_sheet | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_coolant | fabrication | coolant | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_steel_scrap | fabrication | steel_scrap | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_al_scrap | fabrication | al_scrap | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_spent_coolant | fabrication | spent_coolant | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_weld_wire | joining_coating | weld_wire | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_argon | joining_coating | argon | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_co2_shield | joining_coating | co2_shield | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_grit | joining_coating | grit | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_naoh | joining_coating | naoh | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_powder | joining_coating | powder | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_liquid | joining_coating | liquid | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_hardener | joining_coating | hardener | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_solvent | joining_coating | solvent | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_weld_dust | joining_coating | weld_dust | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_paint_sludge | joining_coating | paint_sludge | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_spent_filter | joining_coating | spent_filter | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_powder_waste | joining_coating | powder_waste | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_solvent_waste | joining_coating | solvent_waste | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_xylene_air | joining_coating | xylene_air | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Measure post-control species concentration and matched exhaust flow/time, plus separately evidenced fugitives; reconcile species stocks, retention, recovery, capture and destruction. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_weld_pm | joining_coating | weld_pm | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Measure actual post-control particle fraction and exhaust volume; captured dust is separate waste and not emitted mass. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_frame | assembly | frame | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_engine | assembly | engine | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_transmission | assembly | transmission | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_pto | assembly | pto | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_header | assembly | header | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_maize_head | assembly | maize_head | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_feeder | assembly | feeder | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_rotor | assembly | rotor | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_drum | assembly | drum | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_walker | assembly | walker | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_hybrid_rotor | assembly | hybrid_rotor | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_cleaner | assembly | cleaner | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_tank | assembly | tank | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_auger | assembly | auger | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_chopper | assembly | chopper | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_wheel | assembly | wheel | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_track | assembly | track | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_axle | assembly | axle | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_hydraulic | assembly | hydraulic | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_cylinder | assembly | cylinder | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_hose | assembly | hose | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_cab | assembly | cab | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_hvac | assembly | hvac | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_controller | assembly | controller | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_harness | assembly | harness | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_display | assembly | display | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_gps | assembly | gps | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_battery | assembly | battery | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_fastener | assembly | fastener | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_belt | assembly | belt | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_diesel | filling_testing | diesel | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_hydraulic_oil | filling_testing | hydraulic_oil | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_engine_oil | filling_testing | engine_oil | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_gear_oil | filling_testing | gear_oil | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_coolant_fill | filling_testing | coolant_fill | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_def | filling_testing | def | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_r134a | filling_testing | r134a | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_test_wheat | filling_testing | test_wheat | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_spent_oil | filling_testing | spent_oil | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_test_crop_waste | filling_testing | test_crop_waste | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_diesel_co2 | filling_testing | diesel_co2 | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use species-specific actual factory test/charging measurements, matched exhaust or leak quantity and operating time; fuel carbon balance supports carbon accounting only and cannot determine CO or NO/NO2. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_diesel_co | filling_testing | diesel_co | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use species-specific actual factory test/charging measurements, matched exhaust or leak quantity and operating time; fuel carbon balance supports carbon accounting only and cannot determine CO or NO/NO2. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_diesel_no | filling_testing | diesel_no | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use species-specific actual factory test/charging measurements, matched exhaust or leak quantity and operating time; fuel carbon balance supports carbon accounting only and cannot determine CO or NO/NO2. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_diesel_no2 | filling_testing | diesel_no2 | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use species-specific actual factory test/charging measurements, matched exhaust or leak quantity and operating time; fuel carbon balance supports carbon accounting only and cannot determine CO or NO/NO2. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_refrigerant_loss | filling_testing | refrigerant_loss | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use species-specific actual factory test/charging measurements, matched exhaust or leak quantity and operating time; fuel carbon balance supports carbon accounting only and cannot determine CO or NO/NO2. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_wood_pack | dispatch | wood_pack | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_film_pack | dispatch | film_pack | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_rust_oil | dispatch | rust_oil | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Weigh issue, receipt and external returns on calibrated instruments; reconcile batch BOM, opening/closing stocks, internal transfers and rejects/rework. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_fabrication_electricity | fabrication | fabrication_electricity | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use matched-period calibrated submeter and causal allocation; shared_services receives only residual after assigned loads, not whole-site totals again. Identify grid supplier and voltage. | kWh | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_joining_coating_electricity | joining_coating | joining_coating_electricity | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use matched-period calibrated submeter and causal allocation; shared_services receives only residual after assigned loads, not whole-site totals again. Identify grid supplier and voltage. | kWh | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_assembly_electricity | assembly | assembly_electricity | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use matched-period calibrated submeter and causal allocation; shared_services receives only residual after assigned loads, not whole-site totals again. Identify grid supplier and voltage. | kWh | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_filling_testing_electricity | filling_testing | filling_testing_electricity | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use matched-period calibrated submeter and causal allocation; shared_services receives only residual after assigned loads, not whole-site totals again. Identify grid supplier and voltage. | kWh | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_dispatch_electricity | dispatch | dispatch_electricity | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use matched-period calibrated submeter and causal allocation; shared_services receives only residual after assigned loads, not whole-site totals again. Identify grid supplier and voltage. | kWh | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_shared_services_electricity | shared_services | shared_services_electricity | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Use matched-period calibrated submeter and causal allocation; shared_services receives only residual after assigned loads, not whole-site totals again. Identify grid supplier and voltage. | kWh | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_fabrication_gas | fabrication | fabrication_gas | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Meter actual fuel quantity with composition, reference temperature/pressure, NCV and burner route; supplier gas is separate from purchased heat. | MJ | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_fabrication_co2 | fabrication | fabrication_co2 | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Match actual fuel carbon assay, consumption, combustion state and carbon retained in other species; do not add upstream fuel-production CO2. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_joining_coating_gas | joining_coating | joining_coating_gas | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Meter actual fuel quantity with composition, reference temperature/pressure, NCV and burner route; supplier gas is separate from purchased heat. | MJ | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_joining_coating_co2 | joining_coating | joining_coating_co2 | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Match actual fuel carbon assay, consumption, combustion state and carbon retained in other species; do not add upstream fuel-production CO2. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_water | shared_services | water | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Measure external makeup, actual transfer, discharge/evaporation and stocks separately; match moisture and each constituent assay with wet/dry state and treatment destination. Cancel paired internal returns. | m3 | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_wastewater | shared_services | wastewater | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Measure external makeup, actual transfer, discharge/evaporation and stocks separately; match moisture and each constituent assay with wet/dry state and treatment destination. Cancel paired internal returns. | m3 | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_sludge | shared_services | sludge | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Measure external makeup, actual transfer, discharge/evaporation and stocks separately; match moisture and each constituent assay with wet/dry state and treatment destination. Cancel paired internal returns. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |
| cp_water_air | shared_services | water_air | measurement_record | site; period; model/configuration; serial/batch; amount/unit; stock and returns; N; D; uncertainty; allocation; route applicability | Measure external makeup, actual transfer, discharge/evaporation and stocks separately; match moisture and each constituent assay with wet/dry state and treatment destination. Cancel paired internal returns. | kg | Each batch or meter interval | Same period, including rejects/rework | Declared factory and configuration | attributable exchange amount / accepted machines | Original records; calibrated measurement; matched assays and allocation evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all exchanges | Actual product/species/provider/compartment identity and units must be resolved before dataset completion; no generic basket, unknown-as-zero or UUID-hit-driven scope restriction. | Supplier specification; direct flow identity; BOM |
| finite_balance | physical streams | For each contained metal/species j separately, calculate each stream mass times its OWN matched assay on a declared wet/dry basis. Include purchased material, opening/closing stock, accepted product, scrap, dust, slag, sludge, wastewater and environmental releases plus reaction transformation. Never equate gross scrap/sludge mass with contained metal or reuse feed assay for product/waste. Close actual water: external water plus input moisture and opening stocks plus reaction-generated water equals shipped retained water, waste/effluent moisture, measured evaporation, reaction-consumed water and closing stocks. Pair and cancel internal return transfers. Each moisture term has its own matched assay, basis and uncertainty; circulating water is not external input. Close each actual solvent species with formulation assays for purchased input, stocks, retained coating, recovered solvent, capture media, waste/liquid transfers, actual destruction and measured air releases. An unexplained residual is investigated, never automatically an air emission. Use combined measurement, sampling and allocation uncertainty, not a universal closure tolerance. | Own assay per term; stocks; reaction and uncertainty records |
| no_defaults | all rows | Collect measured site/configuration quantities; no universal machine weight, manufacturing energy, yield, operating productivity, lifetime or emission factor. Not-applicable needs route evidence and differs from measured zero/unknown. | Full representative period; route register; retained records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | combine_harvester | Verify N>0, D>0 and M same period/configuration, calibrated net acceptance, declared shipped header/fills, matching reference and denominator; reject weight/productivity proxies. |  |
| validate_physical | physical water/material/species rows | For each contained metal/species j separately, calculate each stream mass times its OWN matched assay on a declared wet/dry basis. Include purchased material, opening/closing stock, accepted product, scrap, dust, slag, sludge, wastewater and environmental releases plus reaction transformation. Never equate gross scrap/sludge mass with contained metal or reuse feed assay for product/waste. Close actual water: external water plus input moisture and opening stocks plus reaction-generated water equals shipped retained water, waste/effluent moisture, measured evaporation, reaction-consumed water and closing stocks. Pair and cancel internal return transfers. Each moisture term has its own matched assay, basis and uncertainty; circulating water is not external input. Close each actual solvent species with formulation assays for purchased input, stocks, retained coating, recovered solvent, capture media, waste/liquid transfers, actual destruction and measured air releases. An unexplained residual is investigated, never automatically an air emission. Use combined measurement, sampling and allocation uncertainty, not a universal closure tolerance. |  |
| validate_energy | utility rows | Reconcile each utility in one site period/unit: purchased imports plus actual generation plus opening storage equals assigned fabrication/coating/assembly/test/dispatch use plus unassigned residual plus exports and closing storage/loss. Shared services carry only causal share of unassigned residual. Verify negative residual against period, unit, stock and meter uncertainty; never clip it to zero. Purchased heat, own fuel generation and recovery transfers are distinct. Meter actual recovered test-cabin heat and paired internal transfer; cancel internal transfer on site aggregation. Reduce actual external heat requirement only through its measured resulting meter consumption; do not add an avoided-power credit or a second avoided-heat credit. Exports, if any, need separate measured destination and allocation. |  |
| validate_test | filling_testing | Separate retained diesel/oil/refrigerant from actual factory consumption, recovery and leak; resolve CO, NO and NO2 with species-specific evidence, not fuel carbon alone. Include actual pre-gate test crop and waste, exclude later farm use/yield. | `kappa-claas-test` |
| validate_coverage | dataset | Audit all actual routes/BOM/exchanges and upstream links. Incomplete UUID, amount, conversion, species or compartment prevents complete dataset status; candidate methodology finite check is not publication or factual factory verification. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | process; lifecyclemodel |
| allowed_use | Declared combine manufacturing with qualified upstream links |
| excluded_use | Full harvest service comparison without downstream modelling; standalone threshers/parts/tractors |
| required_metadata | factory and period; model/configuration; self-propelled or trailed; crop and harvesting attachment; delivered header inclusion; rotary, walker or hybrid architecture; wheel/track and slope system; engine or PTO drive; cab, HVAC, controls and battery; delivered fills; net accepted mass; test protocol; make/buy boundary; packaging |
| required_quality_disclosure | Make/buy, route, quantity/identity gaps, uncertainty, allocation, upstream coverage and waste fate |
| update_trigger | Configuration, supplier, fabrication/coating/test route, acceptance or delivery state change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 44122 and adjacent 44121–44129 identity; no manufacturing quantities. |
| un-cpc-notes-2025 | official_guidance | UNSD, CPC 3.0 Explanatory Notes, 30 June 2025, PDF/printed page 229. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Complete combine label and adjacent n.e.c. machinery/parts. No subclass-specific explanatory paragraph; exclusion of standalone threshers follows semantic integrated-machine boundary review, not an explicit quoted exclusion. |
| deere-s-series-4592208 | handbook | John Deere, S-Series Combines, brochure 4592208, PDF created February 2024, pp. 6, 14, 22–23. https://www.deere.com/assets/pdfs/region-4/products/harvesting/s-series-combines/4592208-s-series-combines.pdf | Rotary engine/feeding/cleaning/grain-handling, cab/controls and tyres/tracks; base specification excludes header. No mass, capacity or fuel-intensity default adopted; source mass text has a malformed value. |
| claas-trion-walker | handbook | CLAAS, TRION 600 / 500, original HTML snapshot 2 October 2026, APS WALKER and straw walker sections. https://www.claas.com/en-gb/agricultural-machinery/combine-harvesters/trion-600 | Walker configuration counterexample to rotary-only scope; no performance factor adopted. |
| claas-trion-hybrid | handbook | CLAAS, TRION 700, original HTML snapshot 2 October 2026, APS HYBRID SYSTEM. https://www.claas.com/en-gb/agricultural-machinery/combine-harvesters/trion-700 | Tangential threshing and axial secondary separation; no performance factor adopted. |
| claas-history | handbook | CLAAS, History, original HTML snapshot 2 October 2026. https://www.claas.com/en-ca/about-claas/history-light | Historical trailed SUPER and subsequent self-propelled combines support propulsion boundary, not present-day sales mix or manufacturing intensity. |
| new-holland-permit-1995 | official_guidance | Pennsylvania DEP, Operating Permit 36-2028, New Holland North America Inc., issued 17 October 1995, original PDF pp. 2–3. https://www.epa.gov/sites/default/files/2017-08/documents/new_holland_north_america.pdf | Historical agricultural-equipment metal cleaning, liquid spray, water curtain/dry filter and drying ovens; composition/use/waste records. Not proof every combine factory uses these operations or named formulations; no permit limit used as an emission factor. |
| kappa-claas-test | handbook | Kappa Filter Systems, Future-proof test bench technology at CLAAS, original supplier case HTML snapshot 2 October 2026. https://www.kappa-fs.com/en/blog/stories-5/lufttechnik-fur-agrarmaschinen-49 | Actual factory test case: function testing, diesel exhaust capture, demand-controlled cabin ventilation and waste-heat recovery. No universal duration, fuel, efficiency or emission factor. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Allocation hierarchy only; no claim of complete PEF compliance. |
