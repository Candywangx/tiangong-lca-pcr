---
status: candidate
content_maturity: authored_methodology
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.refrigerators-and-freezers-household-type-electric-or-non-electric
language: en-US
sync_with: pcr.zh-CN.md
---

# Household refrigerators and freezers, electric or non-electric

## 1. Scope and Applicability

This PCR develops a foreground factory production package for household-type refrigerators, stand-alone chest/upright freezers and combined refrigerator-freezers. The delivered configuration may be freestanding or built-in, electric vapour compression, gas/thermal absorption, or verified thermoelectric/other cooling design. Actual intended household refrigeration function, compartment temperature/capacity and supplied state establish applicability; power source alone does not. Do not reduce this category to one compressor refrigerator or R600a recipe. [dometic-technologies; dometic-rm2350; doe-refrigeration-rfi]

Commercial display/cold-chain equipment, industrial refrigeration, air conditioners and standalone replacement parts are excluded. Passive ice boxes are not presumed refrigerators. Portable/camping/RV or minibar marketing neither proves nor disproves household type: review actual principal function and original specification, with classification uncertainty disclosed. DOE compressor-only energy-standard definitions are a narrower historical counterexample, not this category boundary. Original operating capacities/energy ratings do not supply manufacturing factors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.refrigerators-and-freezers-household-type-electric-or-non-electric |
| classification_refs | CPC 3.0 44811; candidate semantic relation, mapping acceptance separate |
| covered_products | Household refrigerator; household freezer; combined refrigerator-freezer; verified electric/non-electric architectures |
| excluded_products | Commercial/industrial refrigeration; air conditioning; standalone spare parts; passive ice boxes without verified applicability |
| representative_product | No model is a universal BOM; a configured household appliance at factory gate |
| production_route | Declare make/buy cabinet, liner, insulation, cooling module and controls; selected cooling route and charging state |
| market_state | Accepted complete manufactured appliance with specified supplied accessories, at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the specified household refrigeration appliance |
| How much | 1 kg accepted net appliance; service capacity separately declared |
| How well | Declared compartment volumes/temperature ratings, cooling route, climate/voltage/fuel configuration and acceptance criteria |
| How long or cycle | Factory production and acceptance only; no default service lifetime or annual operating energy |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Refrigerators and freezers, household type, electric or non-electric `510dc598-5954-4045-a563-78869ea6d5ed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; configuration; household principal function; cooling architecture; chest/upright/combined state; compartment capacity and ratings; refrigerant/working-fluid species and actual charge; insulation recipe; net mass; supplied accessories; make/buy boundary; plant/year/geography; voltage/fuel; provider scope; acceptance record |

Accepted net mass includes the actual supplied doors, shelves, baskets, controller, cooling module and retained working charge of that configuration; exclude transport packaging, rejected units, test water or simulated food loads. Confirm actual thermoelectric semiconductor/metal composition from the supplier; a principle explanation does not establish a recipe.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| physical_species | Physical material and chemical-species rows only | Mass | kg | Separate gross material, moisture, contained species and reaction products; every term uses its own matched assay and wet/dry basis. This rule does not require electricity or transport to be in kg. |
| utilities | Energy utility rows | Energy | kWh; MJ | Preserve actual meter units; 1 kWh = 3.6 MJ only for energy conversion, not appliance mass. Heat uses independently measured supply and return, own enthalpies and common zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual delivered metal/resin/components or complete purchased assemblies with charging/insulation state disclosed |
| starting_condition_role | Purchased input interface defines supplier versus foreground work |
| product_classification_scope | Household appliance principal function and actual supplied state, independent of one legal energy definition |
| recursive_input_rule | Bought same-category partly/fully made appliance is one explicit upstream input; include only remaining site work and no recursive duplicate manufacture |
| upstream_dataset_requirement | Match grade, chemistry, charging and supply state, provider geography/year and included processes; unresolved provider is disclosed |
| disclosure | Configuration-specific make/buy matrix, module contents, process meters and missing identity/evidence |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_factory | Include attributable receipt, actual forming/moulding/foaming, assembly, charging, drying/vacuum, tests, rejects/rework, treatment and dispatch packaging. Exclude downstream foods, consumer use energy, distribution and disposal from this production package. | dometic-rm2350; doe-refrigeration-rfi |
| b_makebuy | Bought complete modules include their embedded metals/motors/oil/fluids/controllers/insulation once. Separate site manufacture records actual inputs and direct operations instead; never add a density mix or invented kit recipe. | dometic-technologies |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Cabinet, liner and insulation manufacture | conditional | Actual configuration/make-buy operations only | foreground | finished |
| assembly | Cooling architecture and appliance assembly | required | Actual configuration/make-buy operations only | foreground | finished |
| charge_test | Circuit charging and factory acceptance tests | conditional | Actual configuration/make-buy operations only | foreground | finished |
| services_dispatch | Residual factory services and dispatch | required | Actual configuration/make-buy operations only | foreground | finished |

Cards are conditional alternatives, not a default bill of materials. Complete the selected route by adding one separately identified row per actual additional grade, chemical, fuel, packaging, waste or emission species; retain the same collection and normalization rules. Demonstrably absent means not_applicable with evidence; zero requires measurement, and unknown remains missing. Working fluid, blowing agent and burner fuel have different functions even if the same species occurs. Hydrocarbon pentanes are not HFCs. No universal GWP, charge, leak or recipe is imposed.

EPA original guidance identifies rigid polyurethane insulation foam for domestic refrigerators/freezers separately from commercial refrigeration and building foam; it does not establish this factory recipe, density, amounts or substitute approval. [epa-appliance-foam]

### Process: Cabinet, liner and insulation manufacture (`fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled low-carbon steel sheet (`steel_sheet`)

Only if this purchased grade is formed into the cabinet; identify grade/coating and actual yield.

- Selected flow: Cold-rolled low-carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Stainless steel sheet (`stainless_sheet`)

Only for actual stainless panels; record alloy assay and avoid substituting coated carbon steel.

- Selected flow: Stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Copper refrigerant tube (`copper_tube`)

Only where copper tube is fabricated at site; record alloy, dimensions and purchased state.

- Selected flow: Copper refrigerant tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Aluminium evaporator assembly (`aluminium_evaporator`)

Purchased finished evaporator; its upstream fabrication is included once.

- Selected flow: Aluminium evaporator assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### High-impact polystyrene resin pellets (`hips_resin`)

Match actual HIPS granulate grade and supplier; this identity supplies no generic refrigerator recipe.

Only for actual liner thermoforming/moulding; record grade and supplier, not a default liner resin.

- Selected flow: high impact polystyrene granulate (HIPS) `4f19a303-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Acrylonitrile-butadiene-styrene resin pellets (`abs_resin`)

Use this China production-mix at-plant procurement identity only for matched ABS granulate; actual grade and provider/year remain required.

Alternative actual plastic moulding route; distinguish from HIPS and bought liner.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Rigid polyurethane formulated polyol component (`polyol`)

Site foaming using separate components; declare supplied formulation, embedded catalyst/water/blowing agent.

- Selected flow: Rigid polyurethane formulated polyol component
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Polymeric methylene diphenyl diisocyanate (`pmdi`)

Only actual separate isocyanate component; do not add when already in a complete two-component kit.

- Selected flow: Polymeric methylene diphenyl diisocyanate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Rigid polyurethane two-component foam kit (`foam_kit`)

Alternative complete purchased kit; supplier-defined contents replace separate resin/hardener inputs, not duplicate them.

- Selected flow: Rigid polyurethane two-component foam kit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Cyclopentane blowing agent (`cyclopentane`)

Only actual separately supplied species, not already embedded in polyol or kit; record retained foam stock and releases.

- Selected flow: Cyclopentane blowing agent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Isopentane blowing agent (`isopentane`)

Only actual separately supplied isomer; split each blend constituent with own assay.

- Selected flow: Isopentane blowing agent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### 1,1,1,3,3-Pentafluoropropane blowing agent (`hfc245fa`)

Conditional verified HFC-245fa recipe; no inference from a pentane label.

- Selected flow: 1,1,1,3,3-Pentafluoropropane blowing agent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Insulated refrigerator cabinet assembly (`cabinet`)

Bought complete cabinet/insulation replaces embedded sheet/resin/foaming inputs; assembly labour remains foreground.

- Selected flow: Insulated refrigerator cabinet assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Thermoformed refrigerator liner (`liner`)

Bought liner replaces embedded resin and forming energy.

- Selected flow: Thermoformed refrigerator liner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


#### Outputs

##### Waste flows

###### Carbon steel sheet offcut scrap (`steel_scrap`)

Match manufacturing sheet-metal offcuts at plant; this Waste-flow identity leaves treatment unclassified, requiring actual grade/coating, contamination and receiver evidence; no recycling credit follows from identity.

Actual sheet offcut leaving site, weigh separately from aluminium and copper scrap.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


### Process: Cooling architecture and appliance assembly (`assembly`)

#### Inputs

##### Product flows

###### Household hermetic refrigeration compressor assembly (`compressor`)

Compression route, bought specified compressor; upstream includes embedded motor, oil, metals once.

- Selected flow: Household hermetic refrigeration compressor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Charged household vapour-compression cooling module (`compression_module`)

Bought complete charged module replaces its compressor, condenser, evaporator, tube, oil and initial charge rows.

- Selected flow: Charged household vapour-compression cooling module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Household refrigerator condenser assembly (`condenser`)

Actual purchased condenser if not embedded in complete cooling module.

- Selected flow: Household refrigerator condenser assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Charged ammonia-water-hydrogen absorption cooling unit (`absorption_module`)

Thermal absorption alternative, supplier-defined complete unit; do not add embedded working-fluid stocks.

- Selected flow: Charged ammonia-water-hydrogen absorption cooling unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Thermoelectric Peltier cooling module (`peltier`)

Verified solid-state route; no compressor/refrigerant charge inferred.

- Selected flow: Thermoelectric Peltier cooling module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Aluminium thermoelectric heat sink (`heatsink`)

Actual separate thermoelectric heat exchanger, not module-embedded.

- Selected flow: Aluminium thermoelectric heat sink
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Refrigerator air circulation fan assembly (`fan`)

Actual separate fan; embedded motor is not a second input.

- Selected flow: Refrigerator air circulation fan assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Refrigerator electronic controller board assembly (`controller`)

Purchased finished controller; no duplicate bare-board/metals/chip manufacture.

- Selected flow: Refrigerator electronic controller board assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Refrigerator wiring harness (`harness`)

Actual separate configured harness with insulation and connectors included.

- Selected flow: Refrigerator wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Absorption refrigerator gas burner assembly (`burner`)

Actual gas-heated design; distinguish gas burner from electric heater.

- Selected flow: Absorption refrigerator gas burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Absorption refrigerator electric heater (`heater`)

Only actual separately supplied electric heater.

- Selected flow: Absorption refrigerator electric heater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Refrigerator door gasket (`gasket`)

Record actual polymer and magnetic insert supplier scope.

- Selected flow: Refrigerator door gasket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Tempered glass refrigerator shelf (`shelf`)

Supplied accepted shelf included in net mass; bought glass upstream once.

- Selected flow: Tempered glass refrigerator shelf
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Coated steel freezer basket (`basket`)

Actual supplied basket; not universal accessory.

- Selected flow: Coated steel freezer basket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Steel refrigerator door hinge (`hinge`)

Actual separate hinge assembly.

- Selected flow: Steel refrigerator door hinge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Refrigerator LED lighting assembly (`light`)

Only actual supplied lighting.

- Selected flow: Refrigerator LED lighting assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


#### Outputs

### Process: Circuit charging and factory acceptance tests (`charge_test`)

#### Inputs

##### Product flows

###### Isobutane refrigerant, R600a (`r600a`)

Only actual compressor route R600a charge; CAS 75-28-5, not propane R290 or normal butane; initial purchased module charge excluded here.

- Selected flow: Isobutane refrigerant, R600a
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Propane refrigerant, R290 (`r290`)

Only verified propane circuit; actual species and measured charge, not an R600a substitute.

- Selected flow: Propane refrigerant, R290
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### 1,1,1,2-Tetrafluoroethane refrigerant, R134a (`r134a`)

Only actual HFC-134a circuit; no category-wide charge or leakage factor.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant, R134a
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Ammonia absorption working fluid (`ammonia`)

Only actual site-filled absorption circuit; quantify ammonia using supplied solution own assay, not total solution as pure ammonia.

- Selected flow: Ammonia absorption working fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Hydrogen absorption working gas (`hydrogen`)

Only actual absorption recipe and site fill; use metered gas with actual pressure/temperature/state.

- Selected flow: Hydrogen absorption working gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Deionized absorption working water (`working_water`)

Match separately supplied deionised water, quality and actual provider; do not count water contained in ammonia solution again.

Only actual separate working water; do not duplicate water already in ammonia solution.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Sodium chromate corrosion inhibitor (`chromate`)

Only verified absorption recipe; Dometic RM2350 confirms conditional presence, not a universal mass fraction.

- Selected flow: Sodium chromate corrosion inhibitor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Nitrogen leak-test gas (`nitrogen`)

Only matched gaseous nitrogen industrial supply at plant in China for purging/leak tests, not liquid nitrogen. Inventory uses native Volume / m3 at declared temperature and pressure. When collected by net cylinder mass, divide each batch mass by its own measured kg/m3 nitrogen density at those conditions before aggregating volume; no default density. Verify purity and provider/year.

Only actual leak/dry test consumption, subtract cylinder return/stock; no fixed test factor.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Refrigeration compressor lubricating oil (`oil`)

Actual separately added oil only; not embedded purchased compressor oil.

- Selected flow: Refrigeration compressor lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Purchased electricity for factory acceptance testing (`test_power`)

Use this UUID only for Chinese grid-average 1–35 kV consumption mix delivered to the user. Match actual meter boundary, voltage, supply geography/year and provider; other voltage/geography needs its own flow. Native property is Net calorific value / MJ; retain metered kWh and convert once by 1 kWh = 3.6 MJ before normalization. Do not add transmission/distribution again when provider includes it.

Meter actual test bench, vacuum/drying, thermal/power checks including rejected/retested units; annual consumer label is not factory consumption.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`


###### Propane fuel for factory absorption burner testing (`test_propane`)

Only actual propane test fuel with composition/calorific value; do not treat refrigerant propane as burned fuel.

- Selected flow: Propane fuel for factory absorption burner testing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Tap water for factory test-load circulation (`test_water`)

Match actual treated tap-water supply/provider; collect only fresh net supply, not circulating test load; use own measured density if converting volume.

Actual net crossing test boundary including makeup/discharge; internal circulation cancels.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


#### Outputs

##### Product flows

###### Reusable recovered isobutane refrigerant (`reusable_r600a`)

Actual verified reusable isobutane transferred outside the factory boundary as a product, with purity/supply specification and measured amount; internal paired recovery/recharge transfers cancel. No automatic avoided-production credit.

- Selected flow: Reusable recovered isobutane refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`

##### Waste flows

###### Discarded recovered isobutane refrigerant (`recovered_r600a`)

Discarded or contaminated recovered isobutane transferred for treatment as waste; weigh its own species content and stock changes, with no automatic credit.

- Selected flow: Discarded recovered isobutane refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


##### Elementary flows

###### Isobutane emission to outdoor air (`isobutane_air`)

Only a demonstrated release of this species to outdoor air. This UUID is the ordinary unspecified-air compartment; use a separate correctly identified urban/non-urban/high-stack flow when that subcompartment is known. Never use indoor, stratospheric, soil or long-term flows for this exchange, nor infer an air amount from unexplained residual.

Only actual identified fugitive R600a release; measure/balance species, identify compartment; no default leak.

- Selected flow: isobutane `4d9a8790-3ddd-11dd-9355-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`


###### Ammonia emission to outdoor air (`ammonia_air`)

Only a demonstrated release of this species to outdoor air. This UUID is the ordinary unspecified-air compartment; use a separate correctly identified urban/non-urban/high-stack flow when that subcompartment is known. Never use indoor, stratospheric, soil or long-term flows for this exchange, nor infer an air amount from unexplained residual.

Actual species emission; aqueous absorption/capture is not destruction or automatic air emission.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`


###### Carbon dioxide emission to air (`carbon_dioxide`)

Only a demonstrated release of this species to outdoor air. This UUID is the ordinary unspecified-air compartment; use a separate correctly identified urban/non-urban/high-stack flow when that subcompartment is known. Never use indoor, stratospheric, soil or long-term flows for this exchange, nor infer an air amount from unexplained residual. Fossil-carbon identity applies only to actual fossil burner-fuel carbon; do not include biogenic carbon under it.

Only site combustion/cure release actually supported; species measured or matched carbon accounting, not upstream utility emission.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`


###### Carbon monoxide emission to air (`carbon_monoxide`)

Only a demonstrated release of this species to outdoor air. This UUID is the ordinary unspecified-air compartment; use a separate correctly identified urban/non-urban/high-stack flow when that subcompartment is known. Never use indoor, stratospheric, soil or long-term flows for this exchange, nor infer an air amount from unexplained residual. Fossil-carbon identity applies only to actual fossil burner-fuel carbon; do not include biogenic carbon under it.

Species-specific test/stack evidence; cannot infer from carbon closure alone.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`


###### Nitrogen dioxide emission to air (`nitrogen_dioxide`)

Actual NO2 species; reported NOx as NO2 equivalent is not measured NO2.

- Selected flow: Nitrogen dioxide emission to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`


### Process: Residual factory services and dispatch (`services_dispatch`)

#### Inputs

##### Product flows

###### Purchased electricity for fabrication and assembly (`factory_power`)

Use this UUID only for Chinese grid-average 1–35 kV consumption mix delivered to the user. Match actual meter boundary, voltage, supply geography/year and provider; other voltage/geography needs its own flow. Native property is Net calorific value / MJ; retain metered kWh and convert once by 1 kWh = 3.6 MJ before normalization. Do not add transmission/distribution again when provider includes it.

Actual process meters, cooling/compressed-air service allocation; not test power again.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`


###### Purchased electricity for unassigned factory services (`residual_power`)

Use this UUID only for Chinese grid-average 1–35 kV consumption mix delivered to the user. Match actual meter boundary, voltage, supply geography/year and provider; other voltage/geography needs its own flow. Native property is Net calorific value / MJ; retain metered kWh and convert once by 1 kWh = 3.6 MJ before normalization. Do not add transmission/distribution again when provider includes it.

Only unassigned measured residual after all process/test/dispatch meters; reconcile imports, onsite generation, export, storage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`


###### Purchased hot-water heat (`heat`)

Actual independent supply and return masses times each own enthalpy relative to common zero; if gross already net, do not subtract return twice.

- Selected flow: Purchased hot-water heat
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`


###### Tap water for factory washing (`process_water`)

Match actual treated tap-water supply and provider geography/year; use measured water density for volume-to-mass collection, not an assumed density.

Actual process water with input moisture, stock and discharge; not total factory added to submeter.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Isopropanol cleaning solvent (`ipa`)

Only matched China production-mix at-plant isopropanol chemical supply. No purity is declared by this identity: require actual assay and provider; do not substitute a 70 vol% aqueous formulation or apply solution mass as pure IPA.

Actual cleaning grade and concentration only; solvent retained/recovered/captured/destructed distinct.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Corrugated fibreboard transport carton (`carton`)

Actual dispatch packaging excluded from accepted net appliance mass denominator.

- Selected flow: Corrugated fibreboard transport carton
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Low-density polyethylene packaging film (`film`)

Only matched non-cellular LDPE film; record thickness, additives and actual supplier; no upstream geography is established by this identity.

Only actual film polymer; not total mixed packaging.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


#### Outputs

##### Product flows

###### Refrigerators and freezers, household type, electric or non-electric `510dc598-5954-4045-a563-78869ea6d5ed` (`finished`)

Accepted finished household appliance of the declared configuration and supplied accessories.

- Selected flow: Refrigerators and freezers, household type, electric or non-electric `510dc598-5954-4045-a563-78869ea6d5ed`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`


##### Waste flows

###### Factory washing wastewater (`wastewater`)

Weigh actual wet wastewater; assay each contained species separately on own basis.

- Selected flow: Factory washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Factory wastewater treatment sludge (`sludge`)

Actual wet sludge leaving boundary with moisture and species assays; not elemental mass.

- Selected flow: Factory wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Isopropanol-bearing spent activated carbon (`spent_carbon`)

Only actual solvent capture waste; own retained-solvent assay; capture not destruction.

- Selected flow: Isopropanol-bearing spent activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


###### Rigid polyurethane foam trimming waste (`foam_waste`)

Actual waste with blowing-agent retention assay if balanced.

- Selected flow: Rigid polyurethane foam trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_exchange`


##### Elementary flows

###### Isopropanol emission to outdoor air (`ipa_air`)

Only a demonstrated release of this species to outdoor air. This UUID is the ordinary unspecified-air compartment; use a separate correctly identified urban/non-urban/high-stack flow when that subcompartment is known. Never use indoor, stratospheric, soil or long-term flows for this exchange, nor infer an air amount from unexplained residual.

Only actual outdoor air release after supported capture/destruction and non-air residual accounting.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| a_causal | Avoid allocation by metering or subdividing actual configuration and operations. Otherwise use documented causal machine-hours, metered test load or measured material throughput for the specific shared service. Do not use accepted appliance mass for every utility by default; reconcile shares to the same period and service total. |  |
| a_reject | Assign attributable rejects/rework and quality-test burden to accepted output of the same configuration. Report scrap as physical waste with treatment interface, without automatic avoided-metal credit. Internal reuse cancels paired transfers, not upstream acquisitions twice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | services_dispatch | finished | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | matched production period | same factory and configuration | accepted net mass per machine | calibration; tare; acceptance/BOM reconciliation |
| cp_exchange | all | atomic physical exchange | weighing; assay | period; batch; supplier; grade; phase; species; gross/net mass; moisture; own assay; density/temperature; stocks; returns; rejects; nitrogen gas volume/temperature/pressure/density; N | Measure each actual atomic exchange crossing its process boundary, use own solution density and concentration for volume-to-mass/species conversion; reconcile inventory and reaction/return records. For nitrogen use native gas volume at declared conditions; net cylinder mass is divided by each batch's measured gas density at those same conditions before aggregation; retain both mass and volume records. Q includes attributable reject/rework consumption; N is accepted units of the same configuration. | kg; m3 | each batch and period | matched production period | selected process/configuration | attributable exchange / accepted machines | calibrated balances/meters; actual SDS/assay; transfer manifests |
| cp_utilities | all | atomic utility | metering | period; meter start/end; process/test assignment; imports; generation; export; storage change; supply/return mass; supply/return enthalpy; N | Use actual process and test meters for assigned loads. Shared services include only unassigned residual after assigned loads. Reconcile all to same site period/units, investigate negative residual and measurement uncertainty without clipping. Independent heat supply and return each use kg times own MJ/kg relative to common zero; record gross/net interface. For gross supply, subtract independently measured return once; a provider amount already net of return is used directly without a second subtraction. | kWh; MJ | meter interval and period | matched production period | same site service with causal configuration share | attributable utility / accepted machines | meter calibration; reconciliation; causal allocation evidence |
| cp_emissions | all | each actual air-emission species | synchronized sampling/metering | period; species; compartment; concentration; dry gas flow; time; temperature; pressure; moisture; abatement inlet/outlet; stock; allocation; N | Measure species concentration with synchronized dry exhaust flow and time at the same declared standard conditions; convert concentration to kg per volume before integrating. Use actual abatement outlet for discharged mass; do not subtract capture again from an already post-abatement measurement. Fugitive refrigerant/solvent release requires species-specific charge/stock/recovery/non-air-residual evidence, not unexplained remainder labelled air. CO2 carbon accounting includes actual fuel carbon, reaction formation, product retention, CO and every other supported carbon sink; CO and NO2 require independent species measurement. NOx as NO2 equivalent is not actual NO2. | kg | each test interval and production period | matched production period | actual outlet/fugitive compartment and same configuration | attributable exchange / accepted machines | calibrated flow/analyser; blanks; synchronized records; conditions; abatement and sampling uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_sheet; stainless_sheet; copper_tube; aluminium_evaporator; hips_resin; abs_resin; polyol; pmdi; foam_kit; cyclopentane; isopentane; hfc245fa; cabinet; liner; steel_scrap; compressor; compression_module; condenser; absorption_module; peltier; heatsink; fan; controller; harness; burner; heater; gasket; shelf; basket; hinge; light; r600a; r290; r134a; ammonia; hydrogen; working_water; chromate; nitrogen; oil; isobutane_air; ammonia_air; recovered_r600a; test_power; test_propane; test_water; carbon_dioxide; carbon_monoxide; nitrogen_dioxide; factory_power; residual_power; heat; process_water; ipa; ipa_air; wastewater; sludge; spent_carbon; foam_waste; carton; film; reusable_r600a | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| period_normalization | all inventory rows | Q is attributable period exchange including assigned reject/rework burden; N is accepted unit count of the same configuration; D is the sum of calibrated accepted net masses excluding packaging/rejects/test loads; M = D/N; q_item = Q/N; q_ref = Q/D. Preserve actual period totals and numerator units; finished = 1 kg. | Q; N; D; M; cp_mass; cp_exchange; cp_utilities; cp_emissions | q_ref | |

For the same model/configuration and matched period, N is accepted count, D is the sum of calibrated accepted net appliance masses and M = D/N. For each applicable exchange collect attributable period total Q, including rejects/rework assigned to that cohort: q_item = Q/N, so q_ref = Q/D. Do not average masses across configurations; exclude transport packaging/reject/test-load mass from D. Keep these raw period totals alongside normalized quantities.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and every selected input | Match actual product state, grade, species, supply interface, property/unit and provider scope; a UUID is identity, not a manufacturing factor. | BOM; supplier original; direct dataset read |
| dq_balance | physical materials and species | Use opening stock + receipts + reaction formation = closing stock + accepted retention + rejects/scrap + recovery/return exports + wastewater/sludge + measured releases + reaction consumption. Every contained species term uses its own assay on matching wet/dry basis. Gross metal mass is not elemental mass. Internal paired transfers cancel; recovery is not destruction. | weighing; each stream assay; stock/reaction/transfer evidence |
| dq_water | actual water | Close water receipts and input moisture with stock change, water retained in product/waste, evaporation, discharge and reaction water; own moisture assays and paired internal returns, not circulation counted as fresh supply. | water meters; moisture; discharge; reaction records |
| dq_solvent | actual solvent/blowing/working-fluid species | Separate retained product, recovered/exported fluid, capture-media retention, verified destruction and non-air residual. Do not declare air emissions as all unexplained residual. Investigate closure using actual combined measurement, sampling and allocation uncertainty; no universal tolerance. | species stock/charge/recovery logs; assay; sampling uncertainty |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| v_scope | Require household principal-function evidence, declared complete configuration and route; gaps remain candidate review, never force absorption/thermoelectric exclusion because UUID is missing. | dometic-technologies; doe-refrigeration-rfi |
| v_mass | Require positive N and calibrated D for same configuration, M = D/N, accepted output and q_item/M conversion for each applicable exchange; include reject/rework burden, not reject mass in denominator. |  |
| v_makebuy | Reject duplicated bought module/component upstream burdens and its embedded initial charge, resin/hardener or oil. Verify each actual refrigerant, working-fluid and foaming-agent species separately with charge/retention/leak/recovery evidence; no universal default. | dometic-rm2350 |
| v_utilities | Require same-period process/test/service reconciliation with only unassigned residual, imports/generation/export/storage balance and investigation of negative residual; verify supply/return heat independent masses and own enthalpies, return subtraction once. |  |
| v_species | Require physical water and each contained species closure including own assays, stocks, reactions, scrap/sludge/wastewater/releases and paired internal returns. Fuel carbon balance alone cannot establish CO or NOx; NO2 is not NOx equivalent. Missing actual species or unknown destruction is incomplete data, not zero. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground collection package |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections |
| allowed_use | Configured household appliance factory production inventory |
| excluded_use | Unqualified architecture comparison; assumed food cooling service/lifetime; commercial refrigeration or consumer operating-energy factors |
| required_metadata | All reference qualifiers; actual make/buy and charged state; source/UUID/provider gaps; Q,N,D,M and period; method and allocation; treatment interfaces |
| required_quality_disclosure | Conditional absence versus zero/unknown; metering/assay uncertainty and balance residuals; no empirical factory factor supplied by product originals |
| update_trigger | Configuration, architecture, chemistry, make/buy, provider, method or source changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| dometic-technologies | handbook | Dometic, Cooling technologies explained; original HTML snapshot 2026-10-02; https://support.dometic.com/en/cf-coolers/Cooling-technologies-explained-4910 | Conditional absorption, thermoelectric and compression architecture; cooler/RV scope limitations, not factory coefficients |
| dometic-rm2350 | handbook | Dometic RM 2350 Operating Instructions; footer 4445103434 2021-04-20, inner 03/2020; printed p7; https://media.dometic.com/externalassets/dometic-rm-2350-_9600029484_81557.pdf | Gas/AC/DC absorption, ammonia/hydrogen and conditional sodium chromate; RV example requires applicability review; no mass/recipe transferred |
| doe-refrigeration-rfi | official_guidance | DOE, EERE-2017-BT-STD-0003 Consumer Refrigeration RFI; undated prepublication original with date placeholders; pp11–12, Table II.1 and II.4; https://www.energy.gov/cmei/buildings/articles/refrigerator-freezers-ecs-rfi | Independent historical counterboundary: narrower integral-compressor definitions and upright/chest classes; not current legal requirements or manufacturing energy |
| epa-appliance-foam | official_guidance | EPA, Substitutes in Foam Blowing Agents; original last updated March24 2026, snapshot2026-10-02; https://www.epa.gov/snap/substitutes-foam-blowing-agents | Domestic rigid-PU foam boundary and separate commercial scope counterexample; no recipe or factor |
