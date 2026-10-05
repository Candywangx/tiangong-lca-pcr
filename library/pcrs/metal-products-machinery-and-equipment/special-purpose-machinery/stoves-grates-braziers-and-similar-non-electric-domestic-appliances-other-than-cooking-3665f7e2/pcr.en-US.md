---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stoves-grates-braziers-and-similar-non-electric-domestic-appliances-other-than-cooking-3665f7e2
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Non-electric domestic iron or steel room-heating stoves, grates and braziers

## 1. Scope and Applicability

This candidate covers complete non-electric domestic iron or steel room-heating stoves, grates, braziers and similar appliances. Preserve solid-fuel, oil and gas architectures, freestanding/inset/open-grate/open-brazier designs and cast iron, fabricated steel or mixed iron/steel construction. One configuration-specific factory package is normalized by accepted net equipment mass; it does not make different heating services functionally equivalent. Scope is not automatically expanded to whole aluminium or ceramic appliances merely because they contain a steel screw or grate.

Exclude cooking appliances and plate warmers, electric heating appliances, central-heating boilers and radiators, industrial furnaces and separately supplied parts. Assess principal function of cook/heater hybrids rather than selecting by appearance or fuel. Non-electric air heaters/hot-air distributors incorporating a motor fan or blower are adjacent CPC44824: an auxiliary-blower design needs actual principal-function review. CPC3.0:44822 is the classification coordinate, not a recipe or evidence that every retained leaf has usable methodology.

Jotul's inspected manufacturing descriptions distinguish own foundry alloy adjustment and sand molding from imported finished castings assembled at another plant, and cover gas/wood stoves and inserts with sheet-metal production. Independent Gazco/Stovax product bodies distinguish steel body/cast door gas appliances with conventional or balanced flues and manual or optional remote controls; steel stove ranges include boiler counterexamples requiring review. Franco Belge's original brochure describes oil room-heaters using kerosene and identifies lining, door rope, glass and grates as conditional parts. The Stovax original manual covers domestic solid-fuel grates and gas inserts and separates installation commissioning from use. These cases show alternatives, not universal BOMs or factory data. AGA/ESSE cooking and cook/heater examples are adjacent counterevidence, not accepted generic room-heater evidence. No catalogue weight, power, efficiency, fuel rate, marketing recycled percentage or warranty is adopted as a factory default. Actual configuration records resolve unshown braziers and unknown materials.

Sources: `un-cpc-3-0-44822`; `jotul-cast-iron`; `jotul-manufacture`; `stovax-stoves`; `gazco-gas`; `stovax-steel`; `franco-oil`; `stovax-open-grate`; `aga-adjacent-cooking`; `esse-adjacent-cook-heat`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stoves-grates-braziers-and-similar-non-electric-domestic-appliances-other-than-cooking-3665f7e2 |
| classification_refs | CPC3.0:44822 |
| covered_products | Full non-electric domestic iron/steel noncooking room-heating family in section1 |
| excluded_products | Adjacent principal functions and non-domestic/electric/cooking/separate parts in section1 |
| representative_product | One actual complete accepted domestic appliance configuration; no representative weight across families |
| production_route | Actual foundry versus steel fabrication versus bought castings; fuel-specific combustion, lining/window/controls where present |
| market_state | Complete accepted delivered configuration with actual accessories/fills; net mass excludes packaging/rejects |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one actual domestic-function appliance, not its downstream domestic service |
| How much | 1 kg accepted net complete appliance mass of the same configuration |
| How well | Meets declared combustion/leak/mechanical safety, function, interfaces and actual acceptance plan |
| How long or cycle | One manufacturing/delivery period; no default service lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Stoves, grates, braziers and similar non-electric domestic appliances (other than cooking appliances and plate warmers) of iron or steel `e4f06ae9-21fe-4b4e-a2ba-46b1d8824f14` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal function; domestic market; model revision; fuel and room-heating principal function; iron/steel body; combustion/flue architecture; actual lining/coating chemistry or gap; supplied accessories/fills; make/buy; delivered state; actual acceptance tests; calibrated net mass; N; site/period; utility delivery conditions; waste and species; upstream/treatment; allocation uncertainty |

Declare all required qualifiers in the package. Full category reference product identity is verified; never substitute one subtype or component for the category.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `material_species` | physical material/species records | Mass | kg | Use each term own moisture/metal/chemical assay, stocks and reactions. Gross mass is not contained element; do not apply to electricity/transport. |
| `energy_interface` | electricity, steam, condensate and fuel | Delivered energy or fuel mass and NCV | MJ; kg; MJ/kg | Retain kWh electricity, 1 kWh=3.6 MJ. Steam supply and return each use own kg times own MJ/kg relative to common zero; distinguish gross/already-net, return deducted once. Fuel uses own mass and NCV, not purchased steam. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, fuel-specific burner/grate integration, integration, factory test/rework, common services, waste and packing through accepted release. | jotul-manufacture; stovax-stoves |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought casting/burner/valve/window/lining module includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. | jotul-manufacture; jotul-cast-iron |
| `factory_use` | production | Actual factory fuels, leak-test gases, cleaning water and test electricity are production burdens when consumed; reusable fixtures need stock/reuse records. Separate actual factory burner-test exhaust/ash from household lifetime combustion, chimney/building installation and installer commissioning. The latter are downstream, not manufacturing defaults. | stovax-open-grate |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unresolved actual lining/coating chemistry retains the relevant architecture and requires a specific matched identity. | franco-oil; gazco-gas |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual selected inputs supplied grade, completion state and delivery interface |
| starting_condition_role | Factory foreground receipt boundary |
| product_classification_scope | Full non-electric domestic iron/steel room-heating category reviewed in section1 |
| recursive_input_rule | Same-category purchased precursor uses upstream once; expand subsequent site work only, cancel paired internal transfers without infinite recursion |
| upstream_dataset_requirement | Match actual grade, recipe, completed treatment, geography/period and supply interface; disclose missing providers/substitution |
| disclosure | Actual configuration, make/buy, coverage/conditional absence, transport/treatment, measured denominator and uncertainty |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Actual casting or sheet fabrication and finishing | conditional | Only actual site foundry melting, molding, machining, forming, welding, cleaning or coating; bought castings bypass embedded manufacture | foreground | per 1 kg reference flow |
| `integration` | Room-heating appliance integration | required | Actual cast/steel body, fuel-specific burner or grate, lining, window, seals and controls; open brazier need not have enclosed lining/window/burner | foreground | per 1 kg reference flow |
| `test` | Factory acceptance tests and rework | required | Only actual leak, safety, functional and burner/combustion tests; lifetime household combustion and site installation excluded | foreground | per 1 kg reference flow |
| `dispatch` | Packing and accepted release | required | Actual complete accepted configuration; separately sold parts not complete output | foreground | per 1 kg reference flow |
| `services` | Residual shared utilities and actual generation | conditional | Only unassigned residual after process meters and actual generation | foreground | per 1 kg reference flow |

### Process: Actual casting or sheet fabrication and finishing (`fabrication`)

Only actual site foundry melting, molding, machining, forming, welding, cleaning or coating; bought castings bypass embedded manufacture.

#### Inputs

##### Product flows

###### Low carbon steel sheet (`steel_sheet`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Low carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: stovax-stoves; jotul-manufacture

###### Cast iron foundry charge (`cast_iron`)

Only own foundry actual charge and each specified primary/recycled metal fraction. Source scrap-melting example does not establish a universal recipe; separate each actual grade and stock-return exchange.

- Selected flow: Cast iron foundry charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jotul-cast-iron

###### Silica foundry sand (`silica_sand`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jotul-cast-iron

###### Bentonite foundry binder (`bentonite`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Bentonite foundry binder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Ferrosilicon alloy (`ferrosilicon`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Ferrosilicon alloy
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Graphite carburiser (`graphite`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Graphite carburiser
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Carbon steel welding wire (`welding_wire`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Carbon steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Argon welding gas (`argon`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Argon welding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Vitreous enamel frit (`enamel`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Vitreous enamel frit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Silicone resin high temperature coating (`paint`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Silicone resin high temperature coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Metalworking fluid concentrate (`coolant`)

Only actual formulated concentrate; dilution water separately measured; unknown chemistry needs formulation evidence.

- Selected flow: Metalworking fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropanol (`ipa`)

Only actual IPA cleaning, with own assay, water fraction, capture/return and stock records. Only actual China at-plant IPA, measured assay and provider; diluted formulation requires its own identity.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Process water (`water`)

Only fresh make-up for site cooling, washing or dilution; paired internal recirculation is not new import. Only actual process-water makeup; use own water fraction and density, pair internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`fabrication_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. Only actual China below1kV user-side delivered electricity; other voltage/geography needs matched identity, preserve kWh and3.6MJ/kWh.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel fabrication scrap (`steel_scrap`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual untreated external steel fabrication scrap; own alloy/water/coolant assay, do not classify foundry slag as scrap.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent foundry sand (`foundry_sand`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Spent foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Iron foundry slag (`slag`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Iron foundry slag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent isopropanol solvent (`spent_solvent`)

Own alcohol/water fraction and actual treatment; captured/recovered solvent is not automatically destroyed.

- Selected flow: Spent isopropanol solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Metalworking wastewater (`effluent`)

Measured liquid and own composition/treatment, not inferred consumer-drain use.

- Selected flow: Metalworking wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Isopropanol to air (`ipa_air`)

Only independently established IPA air release; unclosed residual is not an air emission. Only independently established IPA release to unspecified air; captured/recovered solvent and unclosed residual are not air emissions.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Room-heating appliance integration (`integration`)

Actual cast/steel body, fuel-specific burner or grate, lining, window, seals and controls; open brazier need not have enclosed lining/window/burner.

#### Inputs

##### Product flows

###### Cast iron stove body casting (`cast_body`)

Only independently bought finished cast-iron body casting of actual completion state; count supplier foundry burden once. On-site cast bodies are paired internal transfers, not this import.

- Selected flow: Cast iron stove body casting
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jotul-manufacture

###### Glass ceramic stove window (`glass`)

Only actual enclosed stove window with verified heat-resistant material; not mandatory for open brazier/grate.

- Selected flow: Glass ceramic stove window
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: franco-oil

###### Refractory fireclay brick (`firebrick`)

Only independently supplied actual fireclay lining grade; avoid duplicate lining inside bought finished body.

- Selected flow: Refractory fireclay brick
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: franco-oil; stovax-open-grate

###### Vermiculite firebox board (`vermiculite`)

Only verified actual vermiculite firebox board; do not convert installation backfill from the manual into a factory default.

- Selected flow: Vermiculite firebox board
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: franco-oil

###### Glass fibre rope gasket (`gasket`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Glass fibre rope gasket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: franco-oil; jotul-cast-iron

###### Cast iron combustion grate (`grate`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Cast iron combustion grate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: stovax-open-grate; franco-oil

###### Complete gas room heater burner assembly (`gas_burner`)

Only actual domestic gas burner module; exclude industrial furnace burners. Complete bought module embeds valve/control materials unless separately supplied.

- Selected flow: Complete gas room heater burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: gazco-gas

###### Complete oil stove burner assembly (`oil_burner`)

Only actual domestic oil burner module and its documented supply state; not universal to solid-fuel or open grates.

- Selected flow: Complete oil stove burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: franco-oil

###### Gas control valve (`gas_valve`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Gas control valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gas flame safety thermocouple (`thermocouple`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Gas flame safety thermocouple
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Steel screw (`steel_fastener`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual bought steel screw of matching grade and coating; a bought complete module already includes its screw.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Steel stove air damper (`damper`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Steel stove air damper
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Refractory fire cement (`fire_cement`)

Only actual factory-applied refractory cement with own dry solids/water formulation; installer masonry/sealing is downstream.

- Selected flow: Refractory fire cement
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: stovax-open-grate

###### Gas stove thermostatic remote controller (`remote_control`)

Only actually shipped gas-stove remote controller; manual-control configuration does not imply it. Declare electronics and any included battery chemistry; add each actual separate battery exchange after matching identity.

- Selected flow: Gas stove thermostatic remote controller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: gazco-gas

###### Gas stove fuel-effect log assembly (`fuel_effect`)

Only actually supplied gas-stove decorative log-effect assembly; identify its actual material and paint, without imposing ceramic chemistry from appearance.

- Selected flow: Gas stove fuel-effect log assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: gazco-gas

###### Purchased alternating-current electricity (`integration_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. Only actual China below1kV user-side delivered electricity; other voltage/geography needs matched identity, preserve kWh and3.6MJ/kWh.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance tests and rework (`test`)

Only actual leak, safety, functional and burner/combustion tests; lifetime household combustion and site installation excluded.

#### Inputs

##### Product flows

###### Dry firewood (`test_wood`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only actual split/chopped wood factory test charge with measured moisture/species; no brochure fuel consumption or carbon-neutral credit.

- Selected flow: Split or Chop Firewood, Kindling, Firewood `1af6be97-b46a-4d37-b1c7-3158f08bc377`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Anthracite coal (`test_coal`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only actual anthracite test charge and own assay/NCV; other smokeless or manufactured fuels need their own row.

- Selected flow: hard coal, anthracite `9ff1d63b-2eab-4f82-969a-71dd1474f0f1`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Kerosene (`test_kerosene`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only actual kerosene grade and factory-test quantity; actual C2 specification/provider needed, not an aviation-fuel proxy.

- Selected flow: Kerosene `4489ad5c-84f0-440f-9e21-82e4e109495f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: franco-oil

###### Natural gas (`test_natural_gas`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Propane (`test_propane`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption. Only verified actual propane supplied liquid state with separately recorded vaporisation; do not impute all LPG mixtures this single species.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Nitrogen gas (`test_nitrogen`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted appliance mass or consumer consumption.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`test_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. Only actual China below1kV user-side delivered electricity; other voltage/geography needs matched identity, preserve kWh and3.6MJ/kWh.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Stove solid fuel test ash (`ash`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Stove solid fuel test ash
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Rejected complete non-electric room heating stove (`appliance_reject`)

Only actual irrecoverable whole reject; its burdens stay in accepted numerator, its mass excluded from denominator.

- Selected flow: Rejected complete non-electric room heating stove
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide fossil to air (`co2`)

Only actual combustion/reaction CO2 with matched own carbon and oxidation evidence. Only independently established fossil CO2 to unspecified air from actual factory combustion/reaction.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon dioxide biogenic to air (`co2_bio`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only independently established biogenic CO2 to unspecified air; keep fossil and biogenic carbon separate without zero-emission assumption.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide fossil to air (`co`)

Own CO measurement or verified actual fuel/technology factor; carbon closure alone cannot establish CO. Only independently measured fossil CO to unspecified air; wood CO needs own biogenic identity, carbon closure alone is insufficient.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide to air (`no2`)

Only separately established NO2 species mass; NOx as NO2-equivalent is another identity.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Particulates less than 2.5 micrometre to air (`pm`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Particulates less than 2.5 micrometre to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Water vapour to air (`water_vapour`)

Only actual factory evaporation/steam discharge; exclude consumer water defaults. Only actual factory water vapour to unspecified air, own water mass records.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Packing and accepted release (`dispatch`)

Actual complete accepted configuration; separately sold parts not complete output.

#### Inputs

##### Product flows

###### Corrugated cardboard box (`box`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden pallet (`pallet`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyethylene stretch film (`film`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`dispatch_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. Only actual China below1kV user-side delivered electricity; other voltage/geography needs matched identity, preserve kWh and3.6MJ/kWh.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Non-electric domestic iron or steel room-heating stoves, grates and braziers (`reference_product`)

Selected complete accepted configuration includes actual retained fills/accessories, excluding packaging and rejects.

- Selected flow: Stoves, grates, braziers and similar non-electric domestic appliances (other than cooking appliances and plate warmers) of iron or steel `e4f06ae9-21fe-4b4e-a2ba-46b1d8824f14`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-3-0-44822

##### Waste flows

##### Elementary flows

### Process: Residual shared utilities and actual generation (`services`)

Only unassigned residual after process meters and actual generation.

#### Inputs

##### Product flows

###### Purchased alternating-current electricity (`electricity`)

ONLY unassigned shared residual after each process meter; purchased delivery voltage/geography/provider required. Only actual China below1kV user-side delivered electricity; other voltage/geography needs matched identity, preserve kWh and3.6MJ/kWh.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased steam heat (`steam`)

Only actual supply kg times its own MJ/kg relative to common zero; return condensate separately, net invoice return deducted once.

- Selected flow: Purchased steam heat
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Natural gas (`gas`)

Only actual burner/boiler fuel and own composition/NCV; purchased steam not duplicated with imaginary on-site boiler.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Condensate thermal return (`condensate`)

Only actual return kg times its own MJ/kg at measured state; do not subtract again from already-net supply.

- Selected flow: Condensate thermal return
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated appliance models or use appliance mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | accepted net mass per machine | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | attributable quantity / accepted machines | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | attributable energy / accepted machines | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | attributable waste / accepted machines | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | attributable emission / accepted machines | sampling/flow/combined uncertainty |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_emission_method | cp_emission | For each actual species use post-control concentration times matched exhaust or liquid flow over the same period; correct actual wet/dry basis, temperature/pressure, reference state and native units. Fugitive releases require an independently measured basis, not inferred from stack readings. Keep species/compartment and capture/destruction separate. | species sampling; matched flow/time; calibrated meters; fugitive evidence |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| period_normalization | all inventory rows | Qattr is each attributable exchange in the same configuration/common period including reject/rework/factory-test burdens; Naccepted is accepted count; Dnet is sum of calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Dnet excludes packing, reject and consumed test media; preserve each native numerator unit and exact conversion. | cp_mass; cp_material; cp_energy; cp_waste; cp_emission |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, domestic market, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. | un-cpc-3-0-44822 |
| `denominator` | all inventory rows | All inventory uses the same accepted cohort and common period. Verify calibrated accepted net mass and N; reject and packaging mass excluded. Check q_item=Q/N then normalization by same mean M; mixed configurations are invalid. |  |
| `double_count` | make_buy | Reconcile complete bought modules versus own materials and operations, retained fills/accessories versus factory consumption, paired internal transfers and external inputs. Count each actual burden once. |  |
| `water_close` | physical water records | For each term use its own measured water fraction, density and wet/dry basis: fresh and input moisture plus reaction water and beginning stocks minus final stocks, retained product, discharge and evaporation; internal returns cancel paired. Investigate measured closure against combined sampling/meter/allocation uncertainty; no universal tolerance. |  |
| `species_close` | material and chemical records | Close each contained metal/chemical separately using each input, product, scrap, sludge, liquid and release own matched assay and dry/wet basis, reaction stoichiometry and stocks. Gross mass is not contained element. No all-inventory mass rule applies to energy or transport. |  |
| `solvent_close` | solvent records | Distinguish retained solvent, recovered return, captured liquid/media, demonstrated destruction, wastewater/non-air residual and actual species air release. Capture is not destruction; an unexplained residual must be investigated, not assigned to air. |  |
| `utility_close` | energy records | Reconcile purchased imports, actual on-site generation, exports and storage changes with assigned fabrication/drive/electronics/integration/test/dispatch loads in the same period and units. Shared row ONLY unassigned residual; investigate negative residual against period, unit and combined measurement uncertainty without clipping. |  |
| `steam_close` | steam and condensate | Use supply kg times supply own MJ/kg and return kg times return own MJ/kg at measured pressure/temperature relative to common zero. If gross supply, subtract return once; if already-net invoice, do not subtract again. Keep physical steam/condensate mass balance independent from energy. |  |
| `species_emissions` | air releases | Validate every emitted species and compartment independently. Fuel carbon balance cannot alone establish CO or NOx. NO2 mass is not NOx reported as NO2 equivalent; keep reporting conventions and actual species identities distinct. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual configuration factory foreground production and models with explicit completed upstream links |
| excluded_use | Cross-family functional equivalence, default consumer service, default weight/manufacturing factors, complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jotul-cast-iron | handbook | Cast iron, at the heart of our know how; undated inspected original; acquired 2026-10-02; https://www.jotul.com/us/guides-and-inspiration/cast-iron-heart-our-know-how | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| jotul-manufacture | handbook | Jotul North America expands operation; undated inspected original; acquired 2026-10-02; https://www.jotul.com/us/press-release/jotul-north-america-expands-operation-include-wood-stove-production | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| franco-oil | handbook | Franco Belge Stoves; undated inspected original; acquired 2026-10-02; https://harworthheating.co.uk/documents/Brochures/Franco%20Belge/Franco%20Belge%20Stoves%20September%202017.pdf | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| stovax-stoves | handbook | Woodburning and Multi-fuel Stove Collection; STOV0326; © Stovax Ltd2026 verified footer; https://brochures.stovax.com/brochures/pdf/stovax-stoves.pdf | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| gazco-gas | handbook | Stockton2 Small and Medium Gas Stoves; undated actual web body inspected 2026-10-02; https://www.stovax.com/stove-fire/stockton-gas-stoves/stockton2-small-gas-stoves-medium-gas-stoves/ | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| stovax-steel | handbook | Steel Stoves; undated actual web body inspected 2026-10-02; https://www.stovax.com/appliance/stoves/wood-burning-stoves/buying-wood-burning-stove/steel-stoves/ | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| stovax-open-grate | handbook | Classic Non-Convector Fireplaces; Cast Iron Tiled Fireplace and Cast Iron London Fronts; PM284 Issue5 March2015; actual web PDF body inspected; https://www.stovax.com/download/Technical%20Documents/3.%20Fireplaces/Classic%20Fireplaces/Cast%20Iron%20Hob%20Grates/Classic%20Non%20Convector%20%26%20Cast%20Iron%20Fronts%20Installation%20%26%20User%20Instructions.pdf | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| un-cpc-3-0-44822 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| aga-adjacent-cooking | handbook | AGA Sustainability; publisher HTML snapshot 2026-10-02; https://old.agaliving.com/buying/sustainability | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
| esse-adjacent-cook-heat | handbook | ESSE Range Cookers; COOK1023; ©2023 verified footer; https://www.esse.com/wp-content/themes/esse/media-library/brochures/esse-cooker-brochure.pdf | Product architecture/category boundary or adjacent cooking counterevidence; not factory recipe or quantitative default |
