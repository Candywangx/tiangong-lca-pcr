---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cooking-appliances-and-plate-warmers-non-electric-domestic-of-iron-or-steel
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Domestic non-electric iron or steel cooking appliances and plate warmers

## 1. Scope and Applicability
This candidate governs foreground production of complete domestic iron/steel appliances whose actual principal heat function cooks food or warms plates without electric resistance or induction as that principal source. It retains gas, solid-fuel and liquid-fuel configurations, stainless sheet constructions, cast-iron hotplates/bodies and mixed iron/steel assemblies. Standalone non-electric domestic plate warmers remain covered; their actual design and thermal source must be collected, not inferred from a cooker brochure. No single model defines the whole category.
ESSE wood-fired cooking with incidental room heat is a counterexample to an automatic heating exclusion. AGA Rayburn combined cooking/hot-water/central-heating variants require actual principal-function and classification authority review. Ancillary electric ignition, pumps or controls do not automatically make the principal cooking heat electric. Ambiguous hybrid products require documented functional and classification review; do not silently narrow the category or assign an exact edge from a fuel label. Exclude heating-only stoves, electric-principal thermal cooking appliances, non-domestic thermal machinery and independently sold parts. Sources: esse-cookers; aga-rayburn; rangemaster-gas; un-cpc-3-0.

## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cooking-appliances-and-plate-warmers-non-electric-domestic-of-iron-or-steel |
| classification_refs | CPC 3.0 44821; parent 4482 is non-electric |
| covered_products | Actual domestic cooking appliances and plate warmers of iron or steel, non-electric principal heat |
| excluded_products | Heating-only 44822; electric-principal thermal 44817; non-domestic 44515; parts; unresolved hybrids until reviewed |
| representative_product | Declared actual gas hob, wood cooker, oil cooker or plate warmer configuration; no universal representative SKU |
| production_route | Actual make/buy combination of casting, sheet fabrication, finishing, assembly and factory testing |
| market_state | Accepted complete factory-gate product; thermal source, fuel interface and auxiliary power declared |

## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Supply one declared cooking/plate-warming equipment configuration for downstream dataset production |
| How much | 1 kg accepted complete net product |
| How well | Meets actual declared cooking or plate-warming acceptance specification, fuel interface and safety test |
| How long or cycle | One factory supply event; use life and cooking service belong to a separately defined downstream comparison |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Domestic non-electric iron or steel cooking appliances and plate warmers |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model; configuration; domestic cooking/plate-warming function; principal thermal source; actual fuel and nozzle; auxiliary electric functions; material grades; finish; make/buy matrix; geography; factory; period; net BOM; acceptance |

D is the sum of calibrated accepted net masses in one period/configuration; N counts these accepted units; M = D/N. Q is each attributable period exchange including reject/rework burdens. Retain q_item = Q/N and q_ref = Q/D. Exclude rejected units, packaging, free test water and test food from D; do not average across configurations. No fixed M, fuel use or service lifetime is prescribed.

## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference_product | Mass | kg | cp_mass measures positive D and accepted N; retain the same period/configuration BOM and calibrated net scope. |
| physical_species | physical material and species records | Mass | kg | Distinguish wet mass, dry solids and contained element; every stream has its OWN matched assay, including product, scrap, slag, sludge, wastewater and releases. |
| fuel_energy | test_gas, test_propane, test_oil, test_wood, firing_gas | Energy | MJ | Preserve actual fuel composition, moisture and net calorific value; volume conversion requires actual pressure/temperature/density. No brochure output or user consumption is factory energy. |

## 5. System Boundary

### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received grade-specific metal, completed casting/body or component and supplier completion state |
| starting_condition_role | foreground_start |
| product_classification_scope | Domestic non-electric cooking/plate-warming; accepted classification relation requires semantic review |
| recursive_input_rule | Purchased same-category complete appliance is one input with upstream product dataset, not repeated hidden manufacture |
| upstream_dataset_requirement | Actual grade/composition, supplier technology/geography, treatment completion and delivery interface; no generic basket substitutions |
| disclosure | Declare make/buy, route absence and unknowns; factory testing separated from later cooking/plate-warming fuel |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| gate | Include actual factory operations, supplier inputs, cleaning, finishes, acceptance repeat tests, rejects/rework, residues and packing. Exclude installation, user cooking fuel, customer food and lifetime heat service; incidental heat does not change product identity without review. | esse-cookers; aga-rayburn |
| make_buy | For every body/hotplate/support/burner/valve/control item, record whether fabricated here or purchased at the actual completion state. Bought enamelled body includes casting and enamel once; bought burner includes motor/pump/metals once; bought valve includes its alloy once. Do not combine finished purchase with its embedded in-house recipe. A partly processed bought item receives only remaining operations. | rangemaster-manufacture; aga-sustainability |
| conditional_routes | Do not force casting, enamelling, solvents, electric heaters or one fuel on every product. Add atomic grade/chemistry/component/fuel/waste/emission cards for actual unlisted exchanges and recheck; evidence-backed absence is not_applicable, unknown is not zero. | esse-cookers; rangemaster-gas; aga-rayburn |

## 6. Process Inventory Structure

### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| casting | In-house iron casting | conditional | Only actual melting, moulding, casting, shakeout and finishing; bought castings bypass this route | foreground | 1 kg |
| fabrication | Sheet and frame fabrication | conditional | Only actual cutting, pressing/forming, welding and machining | foreground | 1 kg |
| finish | Cleaning and surface finishing | conditional | Only actual washing, polishing, vitreous enamelling or specified alternative coating; bought finished body bypasses this route | foreground | 1 kg |
| assembly | Configuration assembly | required | Required assembly of actual cooking or plate-warming architecture and purchased components | foreground | 1 kg |
| test | Factory acceptance | required | Actual leak, ignition, controls, combustion/function or plate-warming checks; only performed tests consume fuel | foreground | 1 kg |
| dispatch | Packing and residual shared services | required | Actual dispatch packaging and unassigned residual utility loads | foreground | 1 kg |

Cards below are atomic conditional exchanges, not mandatory recipes. Grades, formulations, test species and provider interfaces must match actual supplier/site records; the source literature does not establish universal chemistry. Process rows and shared services reconcile the same site period. Returned materials and internal intermediate transfers are paired and cancel at the overall gate; do not re-add internal bodies as external purchases.

### Process: In-house iron casting (`casting`)

#### Inputs

##### Product flows

###### Foundry pig iron, declared grade (`iron_charge`)

Only externally purchased actual foundry charge; record own assay.
- Selected flow: Foundry pig iron, declared grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_iron_charge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_charge`
- Sources: `jrc-foundry-2024`

###### Segregated iron scrap charge, declared composition (`iron_scrap`)

External scrap only; paired internal sprues are not a second upstream purchase.
- Selected flow: Segregated iron scrap charge, declared composition
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_iron_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_iron_scrap`
- Sources: `jrc-foundry-2024`

###### Silica moulding sand (`silica_sand`)

Only actual sand-mould route with measured makeup and reclaimed stock.
- Selected flow: Silica moulding sand
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_silica_sand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_silica_sand`
- Sources: `jrc-foundry-2024`

###### Bentonite mould binder (`bentonite`)

Only actual green-sand binder; other actual binders need individual cards, not this assumed recipe.
- Selected flow: Bentonite mould binder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_bentonite.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bentonite`
- Sources: `jrc-foundry-2024`

###### Foundry coke (`coke`)

Only actual coke-fired furnace; induction is not assigned coke.
- Selected flow: Foundry coke
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_coke.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coke`
- Sources: `jrc-foundry-2024`

###### Purchased electricity at factory delivery interface (`casting_power`)

Actual melting and finishing submeter load; separate onsite generation.
- Selected flow: Purchased electricity at factory delivery interface
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_casting_power.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_power`
- Sources: `jrc-foundry-2024`

###### Industrial process water (`casting_water`)

Actual cooling makeup; internal circulation is not repeated supply.
- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_casting_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_casting_water`
- Sources: `jrc-foundry-2024`

#### Outputs

##### Waste flows

###### Iron-foundry slag (`slag`)

Only actual outgoing stream, own composition and destination.
- Selected flow: Iron-foundry slag
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_slag.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slag`
- Sources: `jrc-foundry-2024`

###### Spent silica moulding sand (`spent_sand`)

Only actual outgoing stream, own composition and destination.
- Selected flow: Spent silica moulding sand
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_spent_sand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spent_sand`
- Sources: `jrc-foundry-2024`

###### Captured iron-foundry filter dust (`foundry_dust`)

Only actual outgoing stream, own composition and destination.
- Selected flow: Captured iron-foundry filter dust
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_foundry_dust.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry_dust`
- Sources: `jrc-foundry-2024`

### Process: Sheet and frame fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled low-carbon steel sheet, declared supplier grade (`carbon_sheet`)

Only actual fabricated casing/frame or enamel substrate; no universal grade assigned.
- Selected flow: Cold-rolled low-carbon steel sheet, declared supplier grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_carbon_sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_sheet`
- Sources: `rangemaster-manufacture`

###### Stainless-steel sheet, declared supplier grade (`stainless_sheet`)

Actual stainless hob/body route; declare chromium/nickel assay and finish.
- Selected flow: Stainless-steel sheet, declared supplier grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_stainless_sheet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stainless_sheet`
- Sources: `rangemaster-manufacture`

###### Steel welding wire, declared alloy grade (`weld_wire`)

Only actual welded joints; separately specify any other filler alloy.
- Selected flow: Steel welding wire, declared alloy grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_weld_wire.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weld_wire`
- Sources: `rangemaster-manufacture`

###### Argon shielding gas (`argon`)

Only actual argon-shielded welding; other shielding species are separate rows.
- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_argon.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_argon`
- Sources: `rangemaster-manufacture`

###### Mineral straight cutting oil, declared formulation (`cutting_oil`)

Only actual neat-oil machining; water-emulsion concentrate is a separate supplied formulation.
- Selected flow: Mineral straight cutting oil, declared formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_cutting_oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_oil`
- Sources: `rangemaster-manufacture`

###### Purchased electricity at factory delivery interface (`fabrication_power`)

Actual cutting/forming/welding submeter load.
- Selected flow: Purchased electricity at factory delivery interface
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_fabrication_power.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_power`
- Sources: `rangemaster-manufacture`

#### Outputs

##### Waste flows

###### Low-carbon steel offcuts (`carbon_offcut`)

Segregated actual stream; wet/dry basis, oil contamination and own assay.
- Selected flow: Low-carbon steel offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_carbon_offcut.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_offcut`
- Sources: `rangemaster-manufacture`

###### Stainless-steel offcuts (`stainless_offcut`)

Segregated actual stream; wet/dry basis, oil contamination and own assay.
- Selected flow: Stainless-steel offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_stainless_offcut.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stainless_offcut`
- Sources: `rangemaster-manufacture`

###### Spent mineral cutting oil (`spent_oil`)

Segregated actual stream; wet/dry basis, oil contamination and own assay.
- Selected flow: Spent mineral cutting oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_spent_oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spent_oil`
- Sources: `rangemaster-manufacture`

### Process: Cleaning and surface finishing (`finish`)

#### Inputs

##### Product flows

###### Industrial process water (`wash_water`)

Actual washing and enamel-slurry makeup water; separate recirculation.
- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_wash_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_water`
- Sources: `rangemaster-manufacture`

###### Sodium hydroxide, declared concentration (`sodium_hydroxide`)

Only site-verified alkaline bath chemical; not a default cleaning recipe.
- Selected flow: Sodium hydroxide, declared concentration
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_sodium_hydroxide.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sodium_hydroxide`
- Sources: `rangemaster-manufacture`

###### Silicate vitreous-enamel frit, declared supplier formulation (`enamel_frit`)

Only actual enamel formulation; supplier oxide composition and retained coating mass required.
- Selected flow: Silicate vitreous-enamel frit, declared supplier formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_enamel_frit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enamel_frit`
- Sources: `rangemaster-manufacture`

###### Polyester powder coating, declared supplier formulation (`polyester_powder`)

Only actual alternative powder coating; never automatically add to vitreous enamel.
- Selected flow: Polyester powder coating, declared supplier formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_polyester_powder.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_polyester_powder`
- Sources: `rangemaster-manufacture`

###### Xylene, declared isomer composition (`xylene`)

Only actual solvent-containing formulation; no solvent assumed for water-based enamel or powder.
- Selected flow: Xylene, declared isomer composition
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_xylene.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_xylene`
- Sources: `rangemaster-manufacture`

###### Purchased electricity at factory delivery interface (`finish_power`)

Actual polishing, pumps or electric firing load.
- Selected flow: Purchased electricity at factory delivery interface
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_finish_power.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_power`
- Sources: `rangemaster-manufacture`

###### Natural gas at factory delivery interface (`firing_gas`)

Only actual gas-fired enamelling/curing; composition and net calorific value measured.
- Selected flow: Natural gas at factory delivery interface
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_firing_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_firing_gas`
- Sources: `rangemaster-manufacture`

#### Outputs

##### Waste flows

###### Vitreous-enamel wastewater treatment sludge (`enamel_sludge`)

Only actual outgoing stream; its own water/solids/species assays and treatment interface.
- Selected flow: Vitreous-enamel wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_enamel_sludge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enamel_sludge`
- Sources: `rangemaster-manufacture`

###### Metal-finishing wastewater to treatment (`finish_wastewater`)

Only actual outgoing stream; its own water/solids/species assays and treatment interface.
- Selected flow: Metal-finishing wastewater to treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_finish_wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_wastewater`
- Sources: `rangemaster-manufacture`

###### Xylene-bearing spent capture medium (`solvent_media`)

Only actual outgoing stream; its own water/solids/species assays and treatment interface.
- Selected flow: Xylene-bearing spent capture medium
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_solvent_media.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_media`
- Sources: `rangemaster-manufacture`

##### Elementary flows

###### Xylene to air, declared compartment (`xylene_air`)

Only actual measured/specifically evidenced release; capture is not destruction.
- Selected flow: Xylene to air, declared compartment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_xylene_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_xylene_air`
- Sources: `rangemaster-manufacture`

### Process: Configuration assembly (`assembly`)

#### Inputs

##### Product flows

###### Purchased finished enamelled iron cooker body (`bought_body`)

Only purchased completed body; exclude its duplicate casting/finishing/material inputs.
- Selected flow: Purchased finished enamelled iron cooker body
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_bought_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bought_body`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Purchased cast-iron pan support (`cast_support`)

Only actual purchased support; embedded iron/casting once.
- Selected flow: Purchased cast-iron pan support
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_cast_support.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cast_support`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Purchased gas cooking-burner assembly (`gas_burner`)

Actual gas configuration, fuel/nozzle/power qualifier; embedded metals once.
- Selected flow: Purchased gas cooking-burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_gas_burner.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_burner`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Purchased oil cooking-burner assembly (`oil_burner`)

Actual liquid-fuel configuration; embedded motor/pump and metals once.
- Selected flow: Purchased oil cooking-burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_oil_burner.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_oil_burner`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Purchased gas safety valve (`gas_valve`)

Only actual gas safety device; no duplicate brass or steel burden.
- Selected flow: Purchased gas safety valve
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_gas_valve.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_valve`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Purchased spark-ignition module (`igniter`)

Ancillary ignition does not establish electric principal cooking heat.
- Selected flow: Purchased spark-ignition module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_igniter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_igniter`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Purchased cooker control board (`control`)

Only actual board; embedded electronics once.
- Selected flow: Purchased cooker control board
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_control.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_control`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Aluminosilicate refractory firebrick, declared grade (`firebrick`)

Only actual firebox liner, supplier chemistry required.
- Selected flow: Aluminosilicate refractory firebrick, declared grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_firebrick.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_firebrick`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Borosilicate viewing glass, declared grade (`glass`)

Only actual confirmed glass chemistry; another glass-ceramic needs its own card.
- Selected flow: Borosilicate viewing glass, declared grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_glass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glass`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Glass-fibre rope door seal, declared formulation (`seal`)

Only confirmed actual seal formulation; ceramic fibre requires separate identity.
- Selected flow: Glass-fibre rope door seal, declared formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_seal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seal`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Steel fastener, declared grade (`fastener`)

Actual supplied fastener and coating; separate brass/copper components where present.
- Selected flow: Steel fastener, declared grade
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_fastener.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fastener`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### Purchased electricity at factory delivery interface (`assembly_power`)

Actual attributable assembly load only.
- Selected flow: Purchased electricity at factory delivery interface
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_assembly_power.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_power`
- Sources: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

#### Outputs

### Process: Factory acceptance (`test`)

#### Inputs

##### Product flows

###### Natural gas at factory delivery interface (`test_gas`)

Only actual factory gas firing test, not lifetime cooking fuel.
- Selected flow: Natural gas at factory delivery interface
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_test_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_gas`
- Sources: `rangemaster-manufacture`

###### Propane test fuel (`test_propane`)

Only actual propane test; mixed LPG requires actual separate mixture identity.
- Selected flow: Propane test fuel
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_test_propane.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_propane`
- Sources: `rangemaster-manufacture`

###### Kerosene test fuel, declared specification (`test_oil`)

Only actual kerosene test; HVO or other actual oil separately identified.
- Selected flow: Kerosene test fuel, declared specification
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_test_oil.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_oil`
- Sources: `rangemaster-manufacture`

###### Wood-log test fuel, declared species and moisture (`test_wood`)

Only actual wood test; actual other solid fuel needs its own row.
- Selected flow: Wood-log test fuel, declared species and moisture
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_test_wood.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_wood`
- Sources: `rangemaster-manufacture`

###### Purchased electricity at factory delivery interface (`test_power`)

Actual test instruments and ancillary ignition/control.
- Selected flow: Purchased electricity at factory delivery interface
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_test_power.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_power`
- Sources: `rangemaster-manufacture`

###### Industrial process water (`test_water`)

Only actual water used in factory tests; exclude cooking food from net reference mass.
- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_test_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_water`
- Sources: `rangemaster-manufacture`

#### Outputs

##### Waste flows

###### Wood-combustion test ash (`wood_ash`)

Only actual test ash; own unburned carbon and water assay.
- Selected flow: Wood-combustion test ash
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_wood_ash.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_ash`
- Sources: `rangemaster-manufacture`

###### Factory-test wastewater to treatment (`test_drain`)

Actual discharge and treatment interface; returned loop paired separately.
- Selected flow: Factory-test wastewater to treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_test_drain.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_drain`
- Sources: `rangemaster-manufacture`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Only actual species/size-resolved factory release; no lifetime emission or carbon-only inference of CO/NOx.
- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_fossil_co2.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fossil_co2`
- Sources: `rangemaster-manufacture`

###### Carbon dioxide, biogenic, to air (`biogenic_co2`)

Only actual species/size-resolved factory release; no lifetime emission or carbon-only inference of CO/NOx.
- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_biogenic_co2.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biogenic_co2`
- Sources: `rangemaster-manufacture`

###### Carbon monoxide to air (`carbon_monoxide`)

Only actual species/size-resolved factory release; no lifetime emission or carbon-only inference of CO/NOx.
- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_carbon_monoxide.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbon_monoxide`
- Sources: `rangemaster-manufacture`

###### Nitric oxide to air (`nitric_oxide`)

Only actual species/size-resolved factory release; no lifetime emission or carbon-only inference of CO/NOx.
- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_nitric_oxide.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nitric_oxide`
- Sources: `rangemaster-manufacture`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Only actual species/size-resolved factory release; no lifetime emission or carbon-only inference of CO/NOx.
- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_nitrogen_dioxide.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nitrogen_dioxide`
- Sources: `rangemaster-manufacture`

###### Particulate matter PM10 to air (`pm10`)

Only actual species/size-resolved factory release; no lifetime emission or carbon-only inference of CO/NOx.
- Selected flow: Particulate matter PM10 to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_pm10.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pm10`
- Sources: `rangemaster-manufacture`

### Process: Packing and residual shared services (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated-board transport packaging (`corrugated`)

Actual packaging only, outside product net mass; allocate actual reuse cycles from return records.
- Selected flow: Corrugated-board transport packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_corrugated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corrugated`
- Sources: `aga-sustainability`

###### Wood transport pallet (`wood_pallet`)

Actual packaging only, outside product net mass; allocate actual reuse cycles from return records.
- Selected flow: Wood transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_wood_pallet.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood_pallet`
- Sources: `aga-sustainability`

###### Polyethylene protective foam (`pe_foam`)

Actual packaging only, outside product net mass; allocate actual reuse cycles from return records.
- Selected flow: Polyethylene protective foam
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_pe_foam.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pe_foam`
- Sources: `aga-sustainability`

###### Purchased electricity at factory delivery interface (`residual_power`)

ONLY unassigned site residual after casting/fabrication/finish/assembly/test/packing; reconcile same period and units.
- Selected flow: Purchased electricity at factory delivery interface
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_residual_power.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_power`
- Sources: `aga-sustainability`

###### Purchased steam heat at factory delivery interface (`purchased_heat`)

Only actual purchased heat; measure supply and condensate return on common enthalpy basis; no supplier fuel duplication.
- Selected flow: Purchased steam heat at factory delivery interface
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable period exchange normalized per 1 kg reference flow using cp_purchased_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources: `aga-sustainability`

#### Outputs

##### Product flows

###### Domestic non-electric iron or steel cooking appliances and plate warmers (`reference_product`)

Actual accepted complete declared configuration at gate, unfilled with customer fuel; excludes packaging/test food/free test water.
- Selected flow: Domestic non-electric iron or steel cooking appliances and plate warmers
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `aga-sustainability`

## 7. Allocation and Co-product Handling
| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation | Separate model/configuration and fuel/material routes; subdivide measured operations first. Allocate remaining shared work using documented causal machine-hours, treated area, measured heat or test cycles. Retain reject/rework Q with accepted D. Record actual scrap/waste/co-product status and consistent upstream recycling allocation; no automatic avoided burden or credit for paired internal returns. | jrc-foundry-2024; aga-sustainability |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference_product | measurement | Model; configuration; period; serial; accepted calibrated net mass; N; D; BOM; rejects | Weigh each accepted complete declared appliance on a calibrated scale; exclude transport packaging, rejected units, free test water and test food; reconcile accepted serials and BOM; D sums same-configuration accepted net masses. | kg | Each accepted unit | Matched reporting period | One configuration/site | per 1 kg reference flow | Calibration; acceptance; net BOM |
| cp_iron_charge | casting | iron_charge | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_iron_scrap | casting | iron_scrap | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_silica_sand | casting | silica_sand | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_bentonite | casting | bentonite | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_coke | casting | coke | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_casting_power | casting | casting_power | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kWh | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_casting_water | casting | casting_water | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_slag | casting | slag | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_spent_sand | casting | spent_sand | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_foundry_dust | casting | foundry_dust | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_carbon_sheet | fabrication | carbon_sheet | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_stainless_sheet | fabrication | stainless_sheet | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_weld_wire | fabrication | weld_wire | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_argon | fabrication | argon | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_cutting_oil | fabrication | cutting_oil | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_fabrication_power | fabrication | fabrication_power | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kWh | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_carbon_offcut | fabrication | carbon_offcut | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_stainless_offcut | fabrication | stainless_offcut | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_spent_oil | fabrication | spent_oil | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_wash_water | finish | wash_water | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_sodium_hydroxide | finish | sodium_hydroxide | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_enamel_frit | finish | enamel_frit | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_polyester_powder | finish | polyester_powder | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_xylene | finish | xylene | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_finish_power | finish | finish_power | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kWh | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_firing_gas | finish | firing_gas | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. Fuel mass or metered volume uses actual composition, pressure/temperature, moisture and net calorific value; record actual repeated tests and fuel stocks, never user fuel. | MJ | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_enamel_sludge | finish | enamel_sludge | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_finish_wastewater | finish | finish_wastewater | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_solvent_media | finish | solvent_media | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_xylene_air | finish | xylene_air | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual species and receiving compartment with matched concentration and integrated stack/discharge flow, sampling duration, wet/dry and oxygen basis; documented species-specific factor may substitute only with actual fuel/process conditions. No carbon-only CO/NOx inference; preserve measured particle size definition. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_bought_body | assembly | bought_body | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_cast_support | assembly | cast_support | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_gas_burner | assembly | gas_burner | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_oil_burner | assembly | oil_burner | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_gas_valve | assembly | gas_valve | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_igniter | assembly | igniter | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_control | assembly | control | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_firebrick | assembly | firebrick | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_glass | assembly | glass | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_seal | assembly | seal | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_fastener | assembly | fastener | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_assembly_power | assembly | assembly_power | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kWh | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_test_gas | test | test_gas | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. Fuel mass or metered volume uses actual composition, pressure/temperature, moisture and net calorific value; record actual repeated tests and fuel stocks, never user fuel. | MJ | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_test_propane | test | test_propane | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. Fuel mass or metered volume uses actual composition, pressure/temperature, moisture and net calorific value; record actual repeated tests and fuel stocks, never user fuel. | MJ | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_test_oil | test | test_oil | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. Fuel mass or metered volume uses actual composition, pressure/temperature, moisture and net calorific value; record actual repeated tests and fuel stocks, never user fuel. | MJ | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_test_wood | test | test_wood | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. Fuel mass or metered volume uses actual composition, pressure/temperature, moisture and net calorific value; record actual repeated tests and fuel stocks, never user fuel. | MJ | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_test_power | test | test_power | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kWh | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_test_water | test | test_water | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_wood_ash | test | wood_ash | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_test_drain | test | test_drain | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_fossil_co2 | test | fossil_co2 | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual species and receiving compartment with matched concentration and integrated stack/discharge flow, sampling duration, wet/dry and oxygen basis; documented species-specific factor may substitute only with actual fuel/process conditions. No carbon-only CO/NOx inference; preserve measured particle size definition. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_biogenic_co2 | test | biogenic_co2 | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual species and receiving compartment with matched concentration and integrated stack/discharge flow, sampling duration, wet/dry and oxygen basis; documented species-specific factor may substitute only with actual fuel/process conditions. No carbon-only CO/NOx inference; preserve measured particle size definition. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_carbon_monoxide | test | carbon_monoxide | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual species and receiving compartment with matched concentration and integrated stack/discharge flow, sampling duration, wet/dry and oxygen basis; documented species-specific factor may substitute only with actual fuel/process conditions. No carbon-only CO/NOx inference; preserve measured particle size definition. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_nitric_oxide | test | nitric_oxide | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual species and receiving compartment with matched concentration and integrated stack/discharge flow, sampling duration, wet/dry and oxygen basis; documented species-specific factor may substitute only with actual fuel/process conditions. No carbon-only CO/NOx inference; preserve measured particle size definition. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_nitrogen_dioxide | test | nitrogen_dioxide | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual species and receiving compartment with matched concentration and integrated stack/discharge flow, sampling duration, wet/dry and oxygen basis; documented species-specific factor may substitute only with actual fuel/process conditions. No carbon-only CO/NOx inference; preserve measured particle size definition. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_pm10 | test | pm10 | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual species and receiving compartment with matched concentration and integrated stack/discharge flow, sampling duration, wet/dry and oxygen basis; documented species-specific factor may substitute only with actual fuel/process conditions. No carbon-only CO/NOx inference; preserve measured particle size definition. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_corrugated | dispatch | corrugated | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_wood_pallet | dispatch | wood_pallet | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_pe_foam | dispatch | pe_foam | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure actual attributable period Q with calibrated meters/weighing and reconcile receipts, beginning/end stock, internal paired transfers and reject/rework allocation. For physical materials record each own grade, concentration, moisture and wet/dry assay; for delivered components confirm completion state and upstream coverage once. | kg | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_residual_power | dispatch | residual_power | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Same-period site electricity balance reconciles imports plus actual onsite generation minus exports and storage change; subtract every assigned casting/fabrication/finish/assembly/test/packing load, allocate only unassigned residual using measured causal service. Investigate negative residual against measurement/period/unit/allocation uncertainty, never clip or add whole site total to submeters. | kWh | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |
| cp_purchased_heat | dispatch | purchased_heat | measurement | Period; configuration; Q; original unit; supplier/interface or compartment; meter; stock; allocation; own assay where physical; uncertainty | Measure delivered steam mass and supply enthalpy relative to one common reference, and separately measure actual condensate return mass/enthalpy; kg times MJ/kg gives net MJ. Reconcile assigned processes and residual; upstream supplier fuel is included once, onsite generation separately records actual fuel and releases. | MJ | Each batch/test or meter period | Matched reporting period | Declared process/configuration | per 1 kg reference flow | Calibrated records; assays; receipts; provider; uncertainty budget |

### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Use each attributable period exchange Q / D; preserve original numerator units; reference_product = 1 kg. | Q; D; cp_mass | q_ref | rangemaster-manufacture |

### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all applicable rows | Confirm actual UUID/property/unit, grade/formulation, fuel, supply state/geography and downstream waste treatment interface; unresolved is explicit, not a generic substitute. | Actual supplier/site records and direct identity reads |
| coverage | all exchanges | Same configuration/BOM/period and tests; actual route absence documented. Missing actual quantities, ranges or recipes remain unknown, not zero; no factory default inferred from brochure use specifications. | Measured raw records, route matrix and uncertainty |

## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_check | reference_product | Require positive D and N, calibrated accepted net same-configuration mass, and same-period Q including rejects/rework; 1 kg output and Q/D must reconcile. Cooking/heating hybrids require principal-function/classification authority evidence. | esse-cookers; aga-rayburn |
| water_closure | physical water and moisture records | Each wet stream uses its own measured moisture and wet/dry basis, including product, sludge, wastewater and residuals. External water plus input moisture plus beginning stock and reaction-generated water equal retained product moisture plus end stock, evaporation, discharge and reaction consumption. Pair internal returns; do not count circulation repeatedly. Investigate residual using actual combined meter/sampling/allocation uncertainty, not universal tolerance. | rangemaster-manufacture; jrc-foundry-2024 |
| metal_species_closure | physical material and species records | For each actual element/species, every input, product, scrap, slag, sludge, wastewater and release uses its OWN matched assay and wet/dry basis. Include beginning/end stocks, reaction transformations, retention and paired internal return cancellation. Gross material mass is not contained iron/chromium/nickel; investigate closure with actual combined measurement, sampling and allocation uncertainty. | jrc-foundry-2024 |
| solvent_closure | physical solvent records | For each actual solvent, reconcile fresh input and beginning stock against end stock, retained product, recovered solvent, solvent in capture media, verified destruction, air releases and non-air residues. Unknown solvent residual is not automatically an air emission. Recovery/capture is not destruction; paired returned solvent cancels once. Investigate residual against actual combined uncertainty; no assumed solvent for absent route. | rangemaster-manufacture |
| utility_closure | utility records | Process and shared-service rows reconcile SAME measured site period and units; shared service is only the unassigned residual. Do not add whole-factory meter totals to assigned submeters. Reconcile imports, actual onsite generation, exports, storage changes and steam/condensate returns; investigate negative residual using matched meter, sampling, period, stock and allocation uncertainty, never clip. Bought power is not source-specific incineration output; generation fuel is not purchased power. | rangemaster-manufacture |
| emission_evidence | elementary emissions and fuel records | Factory combustion/firing releases remain production; customer use remains separate. Fuel carbon closes total carbon but cannot prove CO, NO or NO2 amounts. Require species-specific measured/factor evidence, actual compartments and fossil/biogenic split. NOx as NO2 equivalent is a convention, not pure NO2; measured size-resolved PM10/PM2.5 are distinct, do not infer from unsized dust. Capture media and treatment residues need their own assays. | jrc-foundry-2024; esse-cookers |

## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing supply of declared configuration; downstream process/lifecyclemodel projection with independently defined cooking service |
| excluded_use | Universal cooker fuel/lifetime or equivalence defaults; unresolved hybrid classification; use-phase claims from factory mass |
| required_metadata | Qualifiers, D/N/M and raw Q, period, make/buy, actual routes, provider links, acceptance and downstream service boundary |
| required_quality_disclosure | Unresolved UUIDs, recipes, quantities, standalone plate-warmer evidence and classification hybrids; measurement/allocation uncertainty and completeness |
| update_trigger | Model/BOM/fuel/finish/supplier/test/route change or resolved evidence/identity gap |

## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, p.240, 4482/44821/44822 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category and adjacent classification boundaries only |
| esse-cookers | handbook | ESSE Range Cookers, COOK1023 ©2023, pp.9,23–27 https://www.esse.com/wp-content/themes/esse/media-library/brochures/esse-cooker-brochure.pdf | Actual wood cooking architecture, handmade assembly and cooking/heating counterexample; electric pages excluded; no factory quantities |
| rangemaster-gas | handbook | Rangemaster Built-In Appliances, undated inspected original, p.9 https://www.rangemaster.co.uk/sites/default/files/2019-05/RM_Built-In_Brochure_Sept2018_V1.pdf | Stainless gas hobs, cast-iron supports, LPG kit; neighboring electric models are counterevidence |
| rangemaster-manufacture | handbook | Rangemaster Quick Guide, undated inspected original, pp.2–3 https://www.rangemaster.co.uk/sites/default/files/2021-02/Rangemaster%20Quick%20Guide.pdf | Actual cooker steel press/cut/wash/polish/enamel, folded frame and testing; conditional routes only, no universal formulation or quantity |
| aga-sustainability | handbook | AGA Sustainability, publisher HTML https://old.agaliving.com/buying/sustainability | Actual cast-iron cooker melting and packaging; environmental marketing and percentages are not adopted factors |
| aga-rayburn | handbook | AGA Rayburn, publisher HTML https://www.agaliving.com/products/aga-rayburn/ | Oil/gas cast-iron cooking and warming ovens, vitreous enamel; combined heating needs actual principal-function review |
| jrc-foundry-2024 | official_guidance | JRC Smitheries and Foundries BREF, EUR 40127, 2024, section 2.2.1.1, pp.67–68, DOI 10.2760/4805267 https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | Conditional actual foundry process decomposition only; not a domestic-cooker recipe, emission factor or universal process requirement |
