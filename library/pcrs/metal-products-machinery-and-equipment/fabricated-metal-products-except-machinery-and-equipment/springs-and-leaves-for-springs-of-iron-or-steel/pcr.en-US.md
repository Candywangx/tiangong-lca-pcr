---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.springs-and-leaves-for-springs-of-iron-or-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Springs and leaves for springs, of iron or steel

## 1. Scope and Applicability

This PCR covers factory-gate production of finished, inspected springs, spring leaves, and spring units whose principal product identity is an iron or steel spring. Covered forms include hot- or cold-formed leaf springs and leaves, helical compression, extension, and torsion springs, flat spiral springs, disc springs, and other iron or steel spring forms. The foreground boundary starts with purchased steel wire, strip, or rod and ends with conforming product after applicable forming, heat treatment, surface finishing, and inspection.

The PCR excludes copper and other non-ferrous springs, polymer or elastomer springs, clock and watch springs, spring washers and lock washers, shock absorbers, and assemblies whose principal identity is not the spring product. Steelmaking, wire drawing, strip or rod production, production of purchased chemicals and energy, capital goods, separate packaging, outbound distribution, installation, use, maintenance, and end-of-life are outside the foreground boundary. A data package shall disclose any integrated upstream operation or separately packaged market state that departs from this boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.springs-and-leaves-for-springs-of-iron-or-steel |
| classification_refs | CPC 3.0: 42945, exact |
| covered_products | Finished iron or steel leaf springs and leaves, helical springs, compression springs, extension springs, torsion springs, flat spiral springs, disc springs, and spring units sold with a spring as their principal product identity |
| excluded_products | Non-ferrous, polymer, or elastomer springs; clock and watch springs; spring or lock washers; shock absorbers; non-spring assemblies |
| representative_product | Finished and inspected iron or steel spring or spring leaf conforming to the declared drawing and acceptance specification |
| production_route | Purchased spring-steel wire, strip, or rod; cutting and forming; route-applicable heat treatment; grinding, deburring, cleaning, passivation, shot peening, or corrosion protection when performed; final inspection |
| market_state | Conforming finished spring product at the factory gate, excluding separate packaging; coating or preservative retained on the product is included and declared |

The CPC identity and hierarchy are verified in `un-cpc-3-0-structure-2025`. Product-form distinctions and mass reporting are supported by `eu-prodcom-2006-springs`; the purchased-feedstock manufacturing boundary is supported by `us-census-naics-2022-spring-manufacturing`.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a conforming iron or steel spring product with the declared elastic function, geometry, and acceptance class at the factory gate |
| How much | 1 kg net mass of conforming finished spring or spring leaf, excluding separate packaging |
| How well | Meets the declared steel grade, dimensional tolerances, load-deflection or torque-deflection requirement, surface condition, heat-treatment state, and inspection acceptance criteria |
| How long or cycle | One production and delivery lot; service life and fatigue-cycle performance are declared as product qualifiers but are not converted into a use-phase functional duration |
| reference_flow_link | 1 kg of accepted reference-product output from `finishing_inspection` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Springs and leaves for springs, of iron or steel `650cda2f-7baa-413f-ac22-ff0da54ea8ba` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | spring form and application; drawing or part identifier; iron or steel grade; wire, strip, or rod feedstock form; hot- or cold-forming route; heat-treatment and quench route; surface-treatment and coating state; load-deflection or torque-deflection class; fatigue or service-cycle requirement when specified; net-mass basis; geography; reference year; packaging exclusion or inclusion statement |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | Reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg net accepted spring product after inspection. Exclude separate packaging mass; include coating, preservative, and permanently assembled spring elements that are part of the sold product. |
| `mu_feedstock_mass` | Purchased steel wire, strip, and rod | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual received mass by feedstock form and steel grade. Do not combine wire, strip, and rod or substitute nominal design mass for received mass. |
| `mu_electricity_conversion` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter data in kWh and convert to MJ using 1 kWh = 3.6 MJ before normalization; disclose the grid, voltage level, losses, and meter boundary. |
| `mu_gas_volume` | Natural gas used in heat treatment | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume and its temperature, pressure, and dry or wet reference conditions. Do not mix standard and actual cubic metres without an explicit conversion. |
| `mu_mass_balance` | Each foreground process and the total product system | Mass | kg | Reconcile steel entering, internal intermediate transfers, saleable output, offcuts, rejects, retained coating, and accumulated stock over the reporting period. Explain any residual greater than the facility's documented measurement uncertainty. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | Foreground product system | Include receipt and handling of purchased wire, strip, or rod; cutting and forming; route-applicable heat treatment and quenching; grinding, deburring, cleaning, passivation, shot peening, corrosion protection, and inspection when performed; and on-site waste handling up to transfer from the facility. | `us-census-naics-2022-spring-manufacturing`; `us-epa-james-spring-wire`; `eu-rfcs-lighttech-2020` |
| `sb_upstream_separation` | Purchased products and energy | Represent steelmaking, wire drawing, strip or rod production, purchased chemical production, and energy supply with separate upstream datasets. Do not recreate upstream burdens as direct foreground elementary flows. | `us-census-naics-2022-spring-manufacturing` |
| `sb_conditional_routes` | Heat treatment and surface finishing | Include only the thermal, quench, cleaning, peening, passivation, plating, painting, or rust-prevention steps actually used for the declared product. Record every applied material and generated waste as a distinct exchange; do not average mutually exclusive routes without production-weighted records. | `us-epa-james-spring-wire`; `eu-rfcs-lighttech-2020` |
| `sb_exclusions` | Product system exclusions | Exclude capital goods, employee commuting, research and development, separate packaging, outbound distribution, installation, use, maintenance, and end-of-life unless the study explicitly expands the boundary and reports those additions separately. |  |
| `sb_direct_emissions` | Foreground elementary flows | Report only emissions crossing directly from the facility to the environment. Upstream emissions embodied in electricity, natural gas, steel, water, or chemicals remain in their supplier datasets. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel wire, strip, or rod crosses the facility gate with supplier, grade, dimensions, mass, heat-treatment state, coating state, recycled-content claim if used, and upstream dataset reference declared |
| starting_condition_role | Upstream product input to foreground spring forming |
| product_classification_scope | Iron or steel springs, spring leaves, and spring units whose principal product identity falls within CPC 3.0 code 42945 |
| recursive_input_rule | If a finished spring in this same category is purchased and incorporated into a spring unit, record it once as a separately quantified upstream product input with its own dataset; do not reopen or duplicate its spring-manufacturing foreground chain |
| upstream_dataset_requirement | Use supplier- and grade-specific datasets where available; otherwise use a technologically and geographically representative dataset for the exact wire, strip, or rod form and disclose the proxy |
| disclosure | Declare spring form, grade, feedstock form, forming temperature, heat-treatment and quench route, finishing and coating steps, internal versus outsourced operations, net product mass, rejects, packaging treatment, facility geography, reference year, and any integrated upstream production |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Feedstock preparation and spring forming | required | Always included for purchased wire, strip, or rod; disclose outsourced forming if it is not performed on site | Foreground cutting, bending, winding, coiling, pressing, or leaf forming | kg formed spring blank transferred |
| `heat_treatment` | Heat treatment and quenching | conditional | Include when heating, stress relieving, hardening, tempering, austempering, or quenching is performed for the declared product | Foreground thermal conditioning | kg heat-treated spring blank transferred |
| `finishing_inspection` | Surface finishing and final inspection | required | Always include final inspection; include grinding, deburring, cleaning, passivation, shot peening, or corrosion protection only when performed | Foreground finishing and accepted-product release | kg accepted reference product |

### Process: Feedstock preparation and spring forming (`forming`)

#### Inputs

##### Product flows

###### Purchased iron or non-alloy steel wire (`steel_wire`)

Record this input only for wire-formed springs when the purchased wire is iron or non-alloy steel as defined by the selected flow classification. The foreground record shall identify grade, diameter, supplier, coating, and incoming thermal state.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Measured received steel-wire mass consumed by the declared product lots, adjusted for opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-census-naics-2022-spring-manufacturing`

###### Purchased low-alloy steel wire (`low_alloy_steel_wire`)

Record this input only for wire-formed springs when the purchased wire is low-alloy steel. Declare the exact alloy grade, spring-wire specification, diameter, supplier, coating, incoming thermal state, and upstream wire-drawing boundary.

- Selected flow: Wire drawing, steel `461d98b3-a825-41bb-9b16-056331873326`
- Flow property / unit: Mass / kg
- Amount rule: Measured received low-alloy steel-wire mass consumed by the declared product lots, adjusted for opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-census-naics-2022-spring-manufacturing`

###### Purchased spring-steel strip (`steel_strip`)

Record this input only for leaf, flat, disc, or spiral springs made from strip. Keep the UUID blank until an exact public spring-steel strip identity is verified.

- Selected flow: Spring-steel strip
- Flow property / unit: Mass / kg
- Amount rule: Measured received spring-steel strip mass consumed by the declared product lots, adjusted for opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-census-naics-2022-spring-manufacturing`; `eu-prodcom-2006-springs`

###### Purchased spring-steel rod (`steel_rod`)

Record this input only for hot-wound or other rod-formed springs. The foreground record shall identify spring-steel grade, diameter, supplier, and incoming thermal state.

- Selected flow: Spring-steel rod
- Flow property / unit: Mass / kg
- Amount rule: Measured received spring-steel rod mass consumed by the declared product lots, adjusted for opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-census-naics-2022-spring-manufacturing`; `eu-prodcom-2006-springs`

###### Forming electricity (`forming_electricity`)

Record metered electricity used by cutting, coiling, winding, pressing, handling, and forming auxiliaries allocated to the declared product lots.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity converted from kWh to MJ and normalized to accepted product output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_energy`
- Sources:

###### Mineral-oil-based forming lubricant (`forming_lubricant`)

Record only lubricant that is consumed, carried out on parts, or lost during cutting and forming; recirculated inventory is adjusted for opening and closing stock.

- Selected flow: Mineral-oil-based metal-forming lubricant
- Flow property / unit: Mass / kg
- Amount rule: Purchased plus opening stock minus closing stock, recovered lubricant, and documented transfers, assigned to the declared product lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_consumables`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formed steel spring blank transferred to the next operation (`formed_blank_output`)

This internal intermediate preserves the declared alloy, geometry, and as-formed state. Measure it before route-specific heat treatment or finishing.

- Selected flow: Formed steel spring blank
- Flow property / unit: Mass / kg
- Amount rule: Measured mass transferred from forming to heat treatment or directly to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_outputs`
- Sources: `us-census-naics-2022-spring-manufacturing`

##### Waste flows

###### Steel offcuts and forming rejects (`steel_offcuts`)

Record segregated steel offcuts and rejected blanks leaving forming for recycling, treatment, or disposal; do not net their mass against steel input.

- Selected flow: Steel scrap, offcuts `57ac39af-dc0e-4c66-b357-56a68b7d892b`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of offcuts and rejected blanks leaving forming, net of documented internal remelt or rework returned to the same period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_outputs`
- Sources:

##### Elementary flows

### Process: Heat treatment and quenching (`heat_treatment`)

#### Inputs

##### Product flows

###### Formed steel spring blank entering heat treatment (`formed_blank_heat_input`)

This internal input equals the portion of `formed_blank_output` routed to heat treatment in the same reporting period after stock adjustment.

- Selected flow: Formed steel spring blank
- Flow property / unit: Mass / kg
- Amount rule: Measured mass entering the declared heat-treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources: `us-epa-james-spring-wire`

###### Heat-treatment electricity (`heat_treatment_electricity`)

Record electricity used by electric furnaces, induction systems, circulation, quench handling, and thermal-control equipment when these operations are included.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity converted from kWh to MJ and assigned to the treated product lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_records`
- Sources:

###### Natural gas for heat treatment (`natural_gas_heat_treatment`)

Record natural gas only for gas-fired furnaces or direct-fired thermal operations. Declare meter reference conditions and exclude gas used by unrelated products or buildings.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume assigned to the declared heat-treatment batches at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources:

###### Quenching oil (`quenching_oil`)

Record fresh or make-up quenching oil only when an oil-quench route is used. Declare the formulation used and adjust bulk tank additions for opening and closing stock and recovered oil.

- Selected flow: Quenching Oil `02f62137-e204-46e6-8e72-e88b450fbdc4`
- Flow property / unit: Mass / kg
- Amount rule: Purchased plus opening stock minus closing stock, recovered oil, and documented transfers during oil-quench production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated steel spring blank transferred to finishing (`heat_treated_blank_output`)

This internal intermediate preserves the declared alloy, geometry, furnace route, thermal cycle, quench medium, and post-treatment state.

- Selected flow: Heat-treated steel spring blank
- Flow property / unit: Mass / kg
- Amount rule: Measured mass released from heat treatment to finishing after heat-treatment rejects are separated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_outputs`
- Sources: `us-epa-james-spring-wire`

##### Waste flows

###### Spent quenching oil (`spent_quenching_oil`)

Record quenching oil removed from service and transferred for regeneration, energy recovery, treatment, or disposal without netting it against make-up oil.

- Selected flow: spent quench oil `0f997fd8-26b1-432f-a8b8-e2703616b018`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented transfer mass of quenching oil removed from service and assigned to treated product lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_outputs`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide from gas-fired heat treatment (`fossil_co2_heat_treatment`)

Record only fossil carbon dioxide emitted directly by on-site natural-gas combustion. Do not add upstream electricity, gas-supply, or steel-production emissions here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured direct emission mass or calculated mass from metered natural gas using a documented facility-approved factor and oxidation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

### Process: Surface finishing and final inspection (`finishing_inspection`)

#### Inputs

##### Product flows

###### Formed blank entering finishing without post-forming heat treatment (`formed_blank_finishing_input`)

Record this internal input only for a declared route that transfers an as-formed blank directly to finishing. It shall reconcile with the corresponding forming output after stock adjustment.

- Selected flow: Formed steel spring blank
- Flow property / unit: Mass / kg
- Amount rule: Measured as-formed blank mass entering finishing when post-forming heat treatment is not applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Heat-treated blank entering finishing (`heat_treated_blank_finishing_input`)

Record this internal input only for a declared heat-treated route. It shall reconcile with `heat_treated_blank_output` after stock adjustment.

- Selected flow: Heat-treated steel spring blank
- Flow property / unit: Mass / kg
- Amount rule: Measured heat-treated blank mass entering finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_records`
- Sources:

###### Finishing electricity (`finishing_electricity`)

Record electricity used by grinding, deburring, shot peening, cleaning, drying, coating, material handling, and inspection equipment actually used for the declared lots.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity converted from kWh to MJ and assigned to the declared finishing lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-james-spring-wire`

###### Process water for cleaning and finishing (`process_water_finishing`)

Record process water crossing the finishing boundary for cleaning, rinsing, passivation make-up, or dust control. Closed-loop recirculation is not repeatedly counted; record net make-up.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balanced net process-water make-up assigned to the declared finishing lots
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-james-spring-wire`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide_finishing`)

Record sodium hydroxide only when the declared cleaning or surface-treatment chemistry uses it. Report dry-equivalent sodium-hydroxide mass from concentration and solution mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Solution mass multiplied by verified sodium-hydroxide mass fraction, adjusted for stock and recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `us-epa-james-spring-wire`

###### Steel shot for shot peening (`steel_shot`)

Record steel-shot make-up only for a declared shot-peening route. Adjust additions for opening and closing machine inventory and recovered reusable shot.

- Selected flow: Steel shot
- Flow property / unit: Mass / kg
- Amount rule: Purchased plus opening stock minus closing stock, recovered reusable shot, and documented transfers during declared shot-peening production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_records`
- Sources: `eu-rfcs-lighttech-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished spring product (`reference_product`)

Record only spring products that pass the declared dimensional, mechanical, surface, and lot-acceptance requirements. Separate packaging is excluded from this mass.

- Selected flow: Springs and leaves for springs, of iron or steel `650cda2f-7baa-413f-ac22-ff0da54ea8ba`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of conforming finished product released at final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `un-cpc-3-0-structure-2025`; `eu-prodcom-2006-springs`

##### Waste flows

###### Spent steel shot (`spent_steel_shot`)

Record steel shot removed from service and transferred for recycling, treatment, or disposal; exclude reusable shot returned to the machine.

- Selected flow: Spent steel shot from shot peening
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented transfer mass of spent shot removed from the declared shot-peening route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `eu-rfcs-lighttech-2020`

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record wastewater transferred from spring cleaning, rinsing, passivation, or surface treatment to on-site or off-site treatment. Do not combine it with uncontaminated cooling water or sanitary wastewater.

- Selected flow: Metal-finishing wastewater from spring cleaning and surface treatment
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass or volume converted using measured density, net of separately metered uncontaminated water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `us-epa-james-spring-wire`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | Shared forming, heat-treatment, and finishing equipment | Prefer subdivision by product lot, machine time, furnace charge, meter, tank balance, or production campaign before applying allocation. |  |
| `al_mass_energy_drivers` | Residual shared inputs and outputs | Allocate steel and mass-related consumables by measured product mass and process yield; allocate electricity and fuel by submetered use, equipment time multiplied by measured load, or furnace charge energy. Do not use revenue when a causal physical driver is available. |  |
| `al_scrap` | Steel offcuts and rejects | Record scrap mass and destination as a distinct output. Do not subtract avoided primary-steel burden or assign a recycling credit inside the foreground inventory unless a separately declared consequential or substitution model is required by the study. |  |
| `al_co_products` | Multiple saleable spring products from one run | Treat separately specified spring products as co-products only when outputs cannot be subdivided. Use documented mass allocation by default, or another causal physical relation when mass does not represent the shared process; report the method and sensitivity. |  |
| `al_no_double_count` | Internal intermediates and rework | Internal formed and heat-treated blank transfers carry no new upstream burden. Rework returned within the same reporting period is counted once and reconciled through stock and reject records. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `forming` | steel wire, strip, and rod inputs | purchase receipt, weighbridge record, stock ledger, material certificate | supplier; steel grade; form; diameter or thickness; coating; heat-treatment state; received mass; opening stock; closing stock; lot ids | Reconcile certified receipts and physical stock to product-lot consumption | kg | each receipt and monthly stock close | At least one representative 12-month period, or the complete shorter campaign | All facilities producing the declared product | Sum consumed mass by form and grade; normalize to accepted product mass | Calibrated scale records, material certificates, stock reconciliation, supplier invoice |
| `cp_forming_energy` | `forming` | forming electricity | submeter or equipment energy log | meter id; opening and closing kWh; machine id; operating hours; product lot; production mass | Read dedicated meter; where shared, allocate measured load-hours to lots | kWh and MJ | each shift or batch; monthly reconciliation | Same period as product output | Forming equipment and direct auxiliaries | Convert kWh to MJ; sum assigned energy; divide by accepted product mass | Meter calibration, load test, production log, allocation worksheet |
| `cp_forming_consumables` | `forming` | forming lubricant | purchase, issue, recovery, and stock records | product name; composition or safety data sheet; mass purchased; opening stock; closing stock; recovered mass; lot ids | Tank or container mass balance | kg | each issue; monthly stock close | Same period as product output | Forming operations only | Purchased plus opening stock minus closing stock, recovery, and transfers; divide by accepted product mass | Stock reconciliation, scale calibration, purchase and recovery records |
| `cp_forming_outputs` | `forming` | formed blank and steel offcuts | transfer weight, reject log, scrap ticket | lot id; blank mass; offcut mass; reject mass; rework return; opening and closing work-in-process | Weigh transfers and scrap containers; reconcile work in process | kg | each batch; monthly reconciliation | Same period as product output | Forming output boundary | Sum net transfers and waste after stock change; normalize to accepted product mass | Scale calibration, transfer log, scrap ticket, reject disposition |
| `cp_heat_records` | `heat_treatment` | heat-treatment inputs | batch card, furnace meter, gas meter, oil stock record | batch id; blank mass; furnace route; temperature-time program; kWh; gas m3 and reference conditions; oil additions; oil stock; quench medium | Capture furnace batch and dedicated meter records; balance quench oil | kg, kWh, MJ, m3 | each furnace batch; monthly utility reconciliation | Complete included heat-treatment campaigns | Included furnaces and quench systems | Assign batch-specific inputs to treated mass; normalize to accepted product mass | Calibrated meters, furnace chart, batch traceability, tank balance |
| `cp_heat_outputs` | `heat_treatment` | heat-treated blank and spent quenching oil | release weight, reject log, hazardous-waste manifest | batch id; released mass; reject mass; spent oil mass; destination; stock change | Weigh released intermediates and outgoing oil containers | kg | each batch or waste shipment | Same period as heat-treatment inputs | Included heat-treatment and quench systems | Sum released mass and removed oil; normalize to accepted product mass | Scale calibration, batch release, waste manifest, stock reconciliation |
| `cp_combustion_emissions` | `heat_treatment` | direct fossil carbon dioxide | stack test, continuous monitor, gas meter, approved calculation sheet | measured CO2 mass or concentration and flow; gas volume; reference conditions; emission factor; oxidation factor; operating hours | Prefer direct measurement; otherwise calculate from metered gas using documented facility-approved factors | kg | continuous, test campaign, or each reporting period | Same period as gas consumption | Direct furnace emission points only | Aggregate direct fossil CO2 and divide by accepted product mass | Monitor calibration, stack-test report, meter record, factor approval and calculation trace |
| `cp_finishing_records` | `finishing_inspection` | finishing inputs | transfer weight, submeter, water meter, chemical issue, shot inventory | incoming blank mass by route; kWh; water mass or volume and density; sodium-hydroxide solution mass and concentration; shot additions, recovery, and stock; lot ids | Reconcile route-specific meters, batch sheets, chemical issues, and stock | kg, kWh, MJ | each batch or shift; monthly reconciliation | Same period as product output | Finishing and inspection equipment used by declared lots | Calculate net make-up and route-specific use; normalize to accepted product mass | Meter and scale calibration, concentration certificate, stock reconciliation, route log |
| `cp_finishing_outputs` | `finishing_inspection` | accepted product, spent shot, and wastewater | final weight, inspection release, waste transfer, discharge meter | accepted mass; rejected mass; inspection result; spent-shot mass; wastewater volume or mass; density; destination; lot ids | Weigh accepted product and wastes; meter wastewater; retain inspection disposition | kg and m3 | each lot and each waste transfer; monthly reconciliation | Same period as finishing inputs | Final inspection and finishing waste boundary | Sum accepted mass and each waste separately; normalize to accepted product mass | Calibrated scales and meters, inspection certificate, waste manifest, laboratory or density record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | All inventory rows | normalized amount = reporting-period amount assigned to declared lots / reporting-period accepted net product mass | assigned flow amount; accepted reference-product mass | amount per 1 kg accepted product |  |
| `calc_electricity` | Electricity rows | MJ = metered kWh × 3.6; normalized MJ = MJ / accepted product kg | kWh; accepted product kg | MJ/kg reference product |  |
| `calc_sodium_hydroxide` | Sodium hydroxide | dry NaOH mass = solution mass × verified NaOH mass fraction | solution mass; concentration certificate or laboratory result | kg NaOH/kg reference product |  |
| `calc_water_mass` | Process water and wastewater | mass = measured volume × measured period-representative density; do not assume density when dissolved or suspended solids make it material | volume; density; accepted product kg | kg/kg reference product |  |
| `calc_internal_balance` | Internal intermediates | opening work in process + process output - closing work in process = downstream transfer + rejects + documented rework return | transfer weights; work-in-process stock; rejects; rework | reconciled intermediate mass |  |
| `calc_total_mass_balance` | Total foreground system | steel inputs + retained non-steel material inputs = accepted product + exported wastes + stock increase + measured direct mass emissions + residual | all mass rows; stock change | mass-balance residual and percentage |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and steel feedstocks | Preserve lot traceability from material certificate through accepted product and declare grade, form, drawing, heat treatment, and surface state. | Material certificate, routing card, inspection release, product specification |
| `dq_measurement` | Mass, electricity, gas, water, and chemical records | Use calibrated meters or documented stock balances; record calibration status, unit, reference conditions, detection limit where relevant, and uncertainty. | Calibration certificate, meter log, tank or stock reconciliation |
| `dq_temporal` | Foreground dataset | Cover at least one representative 12-month period unless production is campaign-based or newer; explain shutdowns, atypical batches, and shorter periods. | Production calendar, monthly totals, representativeness review |
| `dq_completeness` | Foreground inventory | Reconcile purchased steel, internal transfers, accepted output, rejects, wastes, direct emissions, utilities, and stock changes; document excluded flows and their screening basis. | Mass and energy balance, waste register, permit inventory, exclusion log |
| `dq_route` | Conditional heat treatment and finishing | Identify each route actually used and its production share. Do not average mutually exclusive furnace, quench, peening, cleaning, or coating routes without production-weighted primary records. | Routing cards, furnace recipes, bath logs, production shares |
| `dq_geography_technology` | Upstream datasets | Match steel form and grade, energy geography, supplier technology, and reference year; disclose every proxy and its expected direction of bias. | Supplier dataset metadata, proxy assessment, geography and technology statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | Reference product | Confirm that the reference output uses UUID `650cda2f-7baa-413f-ac22-ff0da54ea8ba`, Mass, kg, and exactly 1 kg net accepted product excluding separate packaging. | `un-cpc-3-0-structure-2025`; `eu-prodcom-2006-springs` |
| `val_product_scope` | Product identity | Confirm the product is principally an iron or steel spring, spring leaf, or spring unit and that excluded washers, shock absorbers, clock or watch springs, non-ferrous springs, and non-spring assemblies are not represented by this PCR. | `un-cpc-3-0-structure-2025`; `eu-prodcom-2006-springs` |
| `val_feedstock_route` | Forming inputs | Exactly the steel wire, strip, and rod forms actually consumed shall carry non-zero amounts, and each shall declare grade, dimensions, supplier, and incoming state. | `us-census-naics-2022-spring-manufacturing` |
| `val_internal_transfers` | Internal intermediates | Reconcile formed and heat-treated blank outputs to downstream inputs after work-in-process stock change, rejects, and rework; do not create burden on internal transfers. |  |
| `val_conditional_processes` | Heat treatment and finishing | Verify every applied furnace, quench, grinding, cleaning, passivation, shot-peening, or corrosion-protection route has its atomic inputs and outputs recorded, and every non-applied route is explicitly documented. | `us-epa-james-spring-wire`; `eu-rfcs-lighttech-2020` |
| `val_energy_emissions` | Energy and direct emissions | Reconcile electricity and gas meters to included equipment and confirm direct fossil CO2 excludes upstream supplier emissions. Any calculated emission shall retain its factor, oxidation basis, and calculation trace. |  |
| `val_mass_balance` | Foreground product system | Pass the documented facility mass-balance tolerance or explain the residual with measurement uncertainty, stock change, unmeasured coating retention, or a corrective action. |  |
| `val_data_period` | Dataset quality | Confirm input, output, waste, energy, and emission records cover the same representative period and facility scope. |  |
| `val_uuid_status` | UUID-bearing flows | Confirm every stored flow, flow-property, and unit-group UUID remains public at state code 100 and still matches the recorded English and Chinese base names, flow type, classification, property, and unit group. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground spring-manufacturing dataset suitable for review and later publication as a secondary_dataset or background_dataset |
| downstream_use | Product carbon footprint, process LCA, supply-chain comparison, and lifecyclemodel construction for products consuming iron or steel springs or spring leaves |
| allowed_use | Use for the declared spring form, steel grade, forming route, heat treatment, finishing state, facility geography, technology, and reference period, or with a documented representativeness assessment |
| excluded_use | Do not use as a proxy for non-ferrous or polymer springs, spring washers, shock absorbers, clock or watch springs, unmodelled integrated steel production, downstream use or service life, or routes with materially different heat treatment or surface treatment without adjustment |
| required_metadata | PCR id and version state; product and flow UUIDs; spring form and application; drawing or part family; steel grade and feedstock form; forming and heat-treatment route; quench medium; finishing and coating; net-mass and packaging treatment; facility geography; reference year and period; production volume; allocation; upstream dataset choices; cut-offs; unresolved UUID disclosures |
| required_quality_disclosure | Primary-data share; meter and scale calibration; material and internal-transfer mass-balance result; temporal, geographic, and technological representativeness; route production shares; data gaps and proxies; uncertainty; excluded flows; direct-emission method; waste destination; reviewer status |
| update_trigger | Update when product scope, steel grade family, feedstock form, forming technology, furnace or quench route, finishing or coating route, facility energy supply, allocation, waste treatment, reference period, or a material data source changes; also update when an unresolved flow UUID or range-evidence need is resolved |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Exact CPC 42945 product identity and hierarchy |
| `us-census-naics-2022-spring-manufacturing` | official_guidance | U.S. Census Bureau, 2022 NAICS Manual, Spring and Wire Product Manufacturing and Spring Manufacturing, p. 234, https://www.census.gov/naics/reference_files_tools/2022_NAICS_Manual.pdf (retrieved 2026-09-05) | Purchased wire, strip, or rod starting boundary and forming process decomposition |
| `us-epa-james-spring-wire` | official_guidance | U.S. Environmental Protection Agency, James Spring and Wire Company facility description, https://19january2021snapshot.epa.gov/hwcorrectiveactionsites/hazardous-waste-cleanup-james-spring-and-wire-company-incorporated-frazer_.html (retrieved 2026-09-05) | Grinding, cleaning, passivation, heat treating, surface treatment, assembly, packaging, and facility waste-stream evidence |
| `eu-prodcom-2006-springs` | official_guidance | Commission Regulation (EC) No 317/2006, PRODCOM 2005 list, Official Journal L 60, pp. 168-169, https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2006:060:0001:0282:EN:PDF (retrieved 2026-09-05) | Covered hot- and cold-formed leaf, helical, flat spiral, disc, and other steel spring forms; kg reporting unit |
| `eu-rfcs-lighttech-2020` | official_guidance | European Commission, Synopsis of RFCS Projects 2017-2020, LIGHTTECH project 799787, p. 127, https://research-and-innovation.ec.europa.eu/system/files/2020-12/synopsis_of_rfcs_projects_2017-2020.pdf (retrieved 2026-09-05) | Stress shot peening as a route-specific process for high-strength steel leaf springs |
| `china-mof-2026-research-import-list` | official_guidance | Ministry of Finance of the People's Republic of China, 2026 tax-exempt research goods list, p. 16, heading 7320, https://m.mof.gov.cn/zcfb/202601/P020260114634207037460.pdf (retrieved 2026-09-05) | Verified professional Chinese product terminology |
