---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-central-heating-boilers-for-producing-hot-water-or-low-pressure-steam
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Parts of central heating boilers producing hot water or low-pressure steam

## 1. Scope and Applicability

This candidate covers actual delivered parts, dedicated subassemblies and configured kits eligible as parts of central-heating boilers producing hot water or low-pressure steam. Preserve cast-iron sections and assembled heat blocks, welded steel pressure parts, aluminium or stainless condensing exchanger configurations, jackets, flue collectors, seals and dedicated interfaces where actually supplied. Gas, oil, solid-fuel and electric-host configurations remain conditional; one burner or loose casting does not represent the category. Output is the eligible part in its measured accepted completion state, not a whole boiler. One kg of accepted net parts cannot establish equal heating service.

Confirm principal use, host function, part number, fit, delivered completeness and applicable classification. Manufacturer spare-parts fit alone does not override separate classification of complete furnace burners, pumps, fans, valves, motors, electrical controls, sensors, general fasteners, raw materials or chemical consumables. Such goods may be actual purchased inputs without becoming this PCR's reference output. Exclude complete boilers, radiators and their parts, stand-alone water heaters, unrelated industrial steam generators, high-pressure power boilers and general-purpose heat exchangers. Review combined domestic-water/heating hosts and ambiguous independently functional kits rather than silently extending the category.

The Weil-McLain80 original submittal distinguishes individual cast sections, optional factory-assembled sections and an optional fire-tested packaged boiler, so its full-boiler fire test cannot be imposed on every spare part. Its observed document code is WM2602_SUB_001_80; no publication date is established. The undated Ultra Series3 parts catalogue distinguishes an exchanger kit with included sensors, fittings, electrodes, gaskets and hardware from smaller component assemblies. Viessmann's independent burner-service instructions5800 178-06, January2025, show refractory, mounting flange, burner tube, seals and separate fan/gas components. These are evidence of architecture and supplied interfaces; installer leakage checks and replacement recommendations are downstream, not measured factory defaults. The2024 Foundry BREF supports only actual site casting decomposition. The official CPC3.0 leaf and neighbours establish the coordinate. Obtain actual drawings/BOM and factory protocols for unshown pressure-part, electric or solid-fuel variants. Do not transplant catalogue mass, heat rating, pressure, efficiency, alloy recipe, yield, recycled fraction, fuel rate, warranty or service life.

Sources: `un-cpc-3-0-44833`; `weil-80`; `foundry-bref`; `viessmann-burner`; `weil-catalog`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-central-heating-boilers-for-producing-hot-water-or-low-pressure-steam |
| classification_refs | CPC3.0:44833 |
| covered_products | Full eligible central-heating hot-water/low-pressure-steam parts family in section1 |
| excluded_products | Complete boilers, independently classified goods and adjacent radiator/water-heater/high-pressure generator parts in section1 |
| representative_product | One actual accepted dedicated part/module/kit configuration; no representative weight across families |
| production_route | Actual cast section, welded pressure part, condensing exchanger or bought completed subassembly; retain seals/coatings/controls only where supplied |
| market_state | Accepted delivered part configuration with actual included components/retained fills; net mass excludes packaging/rejects |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one actual dedicated part/module/kit, not a complete host or its downstream heating service |
| How much | 1 kg accepted net delivered part/module/kit mass of the same configuration |
| How well | Meets declared combustion/leak/mechanical safety, function, interfaces and actual acceptance plan |
| How long or cycle | One manufacturing/delivery period; no default service lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts of central heating boilers for producing hot water or low pressure steam `acf2b6ec-7649-4251-b769-2f2b2cecc6ae` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | host central-heating hot-water or low-pressure-steam principal function; part classification; model revision; actual part number and fit; alloy/part material; pressure/temperature duty and fuel/electrical interfaces; actual refractory/seal/coating chemistry or gap; supplied accessories/fills; make/buy; delivered state; actual acceptance tests; calibrated net mass; N; site/period; utility delivery conditions; waste and species; upstream/treatment; allocation uncertainty |

Declare all required qualifiers in the package. Full category reference product identity is verified; its delivered part number and supplied state must still be declared; never replace the category with a whole host appliance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Measure Dnet as the sum of calibrated accepted net part masses for one configuration and period; use cp_mass. |
| `material_species` | physical material/species records | Mass | kg | Use each term own moisture/metal/chemical assay, stocks and reactions. Gross mass is not contained element; do not apply to electricity/transport. |
| `energy_interface` | electricity, steam, condensate and fuel | Delivered energy or fuel mass and NCV | MJ; kg; MJ/kg | Retain kWh electricity, 1 kWh=3.6 MJ. Steam supply and return each use own kg times own MJ/kg relative to common zero; distinguish gross/already-net, return deducted once. Fuel uses own mass and NCV, not purchased steam. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, eligible part fabrication/integration, factory part testing/rework, waste, assigned common services and packing through accepted release. | weil-80; foundry-bref |
| `make_buy` | supplier_interface | Each supplied component has an actual completion state: bought complete cast section, sealed block, exchanger or populated control includes its upstream once; own manufacture expands actual alloy feed, molding, welding, sealing and testing instead. Count only subsequent site work; pair internal transfers. | weil-catalog; viessmann-burner |
| `factory_use` | production | Factory pressure/leak water or gas, thermal/fuel tests, cleaning and electricity are included only for actual acceptance of the supplied part. Disclose reused fixtures and residual retained test fills separately from drained/consumed media. Installer commissioning, downstream replacement and lifetime heating are outside manufacturing. | weil-80; viessmann-burner |
| `bom_extension` | route | Atomic cards are conditional anchors, not a universal recipe. Audit every actual alloy, coating, refractory/seal chemistry, component, accessory, test medium, waste and emitted species; add missing atomic exchanges. Unknown differs from zero and evidenced not_applicable. | weil-catalog |
| `upstream` | links | Link each actual supplier and transport at actual chemistry, grade, completion state, geography and period; external waste treatment after measured transfer is separate from site emissions. Incomplete provider links do not establish a full cradle-to-gate footprint. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual selected inputs supplied grade, completion state and delivery interface |
| starting_condition_role | Factory foreground receipt boundary |
| product_classification_scope | Full eligible central-heating boiler parts category reviewed in section1 |
| recursive_input_rule | Same-category purchased precursor uses upstream once; expand subsequent site work only, cancel paired internal transfers without infinite recursion |
| upstream_dataset_requirement | Match actual grade, recipe, completed treatment, geography/period and supply interface; disclose missing providers/substitution |
| disclosure | Actual configuration, make/buy, coverage/conditional absence, transport/treatment, measured denominator and uncertainty |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Actual casting, pressure-part fabrication and finishing | conditional | Only actual site melting, mold/core preparation, casting, machining, tube forming, welding, cleaning, coating and scrap treatment; bought complete parts bypass embedded manufacture | foreground | per 1 kg reference flow |
| `integration` | Dedicated boiler part or kit integration | required | Actual eligible part drawing/BOM and supplied state; cast section, heat block, exchanger, casing, flue collector, seal or subassembly only if actual scope; do not assemble an imaginary complete boiler | foreground | per 1 kg reference flow |
| `test` | Actual factory part acceptance and rework | required | Only actual dimensional, pressure/leak, electrical, thermal or fuel/combustion tests for that supplied part; installer commissioning and lifetime heating excluded | foreground | per 1 kg reference flow |
| `dispatch` | Packing and accepted release | required | Same accepted part number/revision/completion-state configuration; identical kits counted separately from contained pieces or boilers | foreground | per 1 kg reference flow |
| `services` | Residual shared utilities and actual generation | conditional | Only unassigned residual after process meters and actual on-site generation | foreground | per 1 kg reference flow |

### Process: Actual casting, pressure-part fabrication and finishing (`fabrication`)

Only actual site melting, mold/core preparation, casting, machining, tube forming, welding, cleaning, coating and scrap treatment; bought complete parts bypass embedded manufacture.

#### Inputs

##### Product flows

###### Low carbon steel sheet (`steel_sheet`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Low carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Stainless steel sheet (`stainless`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual further-worked flat-rolled stainless supply, with supplier alloy/finish certificates; primary slab, raw coil, tube or bought complete exchanger needs a different actual identity.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Aluminium casting alloy ingot (`aluminium`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Aluminium casting alloy ingot
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Cast iron foundry charge (`cast_iron`)

Own foundry only; specify each actual charge grade, recycled fraction, stock and return. Do not treat primary cast metal as a finished boiler section or assume vanadium-bearing pig iron.

- Selected flow: Cast iron foundry charge
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: foundry-bref

###### Silica foundry sand (`silica_sand`)

Only actual foundry sand and supply treatment; internal sand regeneration is paired, fresh make-up and spent transfer separate.

- Selected flow: Silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: foundry-bref

###### Bentonite foundry binder (`bentonite`)

Only documented foundry-grade binder; wine-fining bentonite and raw mine clay cannot establish processed casting binder.

- Selected flow: Bentonite foundry binder
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Ferrosilicon alloy (`ferrosilicon`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual iron-silicon alloy additive, with its own silicon/iron assay and supplier grade; do not substitute silicon-calcium or impose a universal charge recipe.

- Selected flow: Ferrosilicon `aba73e7d-6fa9-4320-9e5c-62b018975000`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: foundry-bref

###### Carbon steel welding wire (`welding_wire`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Carbon steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Argon welding gas (`argon`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Argon welding gas
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Epoxy powder coating (`powder`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Epoxy powder coating
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Metalworking fluid concentrate (`coolant`)

Only actual formulated metalworking concentrate; dilution water, own assay, returns and stock separate; rolling oil is not automatically this formulation.

- Selected flow: Metalworking fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropanol (`ipa`)

Only actual IPA cleaning; own assay/water fraction, returns, captured media, stocks and species release required. Only matched actual CN at-plant IPA supply, with actual assay/provider and no assumed universal cleaner purity.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Process water (`water`)

Only external fresh make-up for actual site processes, not repeated internal circulation. Actual externally supplied process water; document treatment/specification and meter fresh water separately from internal loops.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`fabrication_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. Only actual CN user-side grid-average AC below1kV delivery. Other voltage/geography/provider requires its own identity; supplier generation must not be counted again as site fuel.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
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

Only actual untreated externally transferred steel production scrap with own alloy/moisture/metal assay; separate internal returns and processed scrap. Only actual external untreated steel production scrap from machining/forming at the plant; other alloy/state and internal returns separate.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent foundry sand (`foundry_sand`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Spent foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Iron foundry slag (`slag`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Iron foundry slag
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent isopropanol solvent (`spent_solvent`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Spent isopropanol solvent
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Metalworking wastewater (`effluent`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Metalworking wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Isopropanol to air (`ipa_air`)

Actual ordinary outdoor-air IPA release measured independently, never an unexplained solvent-balance remainder. Only actual ordinary unspecified outdoor-air IPA species release, not indoor/soil/wastewater identity.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Dedicated boiler part or kit integration (`integration`)

Actual eligible part drawing/BOM and supplied state; cast section, heat block, exchanger, casing, flue collector, seal or subassembly only if actual scope; do not assemble an imaginary complete boiler.

#### Inputs

##### Product flows

###### Cast iron boiler section (`cast_section`)

Only independently bought actual cast section at documented machined/tested state. Own casting is an internal paired transfer; assembled sealed block and one loose section are different supplied objects.

- Selected flow: Cast iron boiler section
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: weil-80

###### Welded carbon steel boiler tube (`steel_tube`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual welded tube route and documented carbon-steel pressure-duty grade; not seamless tube, stainless tube or completed exchanger.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Stainless steel condensing boiler heat exchanger (`ss_exchanger`)

Only independently bought completed stainless condensing exchanger with actual alloy, tube/plate geometry and included seals. Do not repeat its sheet, welding and factory test upstream.

- Selected flow: Stainless steel condensing boiler heat exchanger
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: weil-catalog

###### Cast aluminium boiler heat exchanger (`al_exchanger`)

Only actual completed cast-aluminium exchanger and documented alloy/finish; a generic aluminium ingot is not its finished identity.

- Selected flow: Cast aluminium boiler heat exchanger
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: weil-catalog

###### Gas boiler burner assembly (`gas_burner`)

Only actual bought gas-burner assembly used as an input to the reviewed eligible part configuration; its own independently classified complete burner output is not automatically covered. Embedded fan/valve/control counted once unless supplied separately.

- Selected flow: Gas boiler burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: viessmann-burner

###### Oil boiler burner assembly (`oil_burner`)

Only actual bought oil-burner input and supplied completion state; independent burner classification remains outside automatic output coverage.

- Selected flow: Oil boiler burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Boiler combustion air blower assembly (`blower`)

Only separately supplied actual fan/blower input; bought complete burner includes its blower once. A general-purpose blower output needs independent classification.

- Selected flow: Boiler combustion air blower assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: viessmann-burner

###### Boiler electronic control module (`control`)

Only bought populated boiler-control input at actual interface; its substrate, chips and solder embed upstream once. Independent electrical-control output requires classification review.

- Selected flow: Boiler electronic control module
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Boiler ignition electrode (`electrode`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Boiler ignition electrode
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: viessmann-burner

###### Boiler silicone rubber gasket (`gasket`)

Only verified actual silicone-rubber gasket chemistry, not assumed from the service-list word gasket. Other elastomer/fibre chemistries require their own exchange.

- Selected flow: Boiler silicone rubber gasket
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Boiler refractory blanket (`refractory`)

Actual documented refractory blanket formulation and supplied state; own forming/drying/cure needs actual material rows. Do not infer fibre chemistry from the word refractory.

- Selected flow: Boiler refractory blanket
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: weil-80; viessmann-burner

###### Aluminized steel boiler flue collector (`flue_collector`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Aluminized steel boiler flue collector
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: weil-80

###### Boiler condensate trap assembly (`trap`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Boiler condensate trap assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: weil-catalog

###### Boiler water temperature sensor (`sensor`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Boiler water temperature sensor
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: weil-catalog

###### Steel screw (`steel_fastener`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Actual separately supplied steel screw as assembly input, never proof that general-purpose screw output belongs to this PCR.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`integration_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. Only actual CN user-side grid-average AC below1kV delivery. Other voltage/geography/provider requires its own identity; supplier generation must not be counted again as site fuel.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
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

### Process: Actual factory part acceptance and rework (`test`)

Only actual dimensional, pressure/leak, electrical, thermal or fuel/combustion tests for that supplied part; installer commissioning and lifetime heating excluded.

#### Inputs

##### Product flows

###### Tap water (`test_water`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted part mass or consumer consumption. Only actually consumed or added supplied tap water for this factory acceptance plan; recycled loop and retained fill separate.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Nitrogen gas (`test_nitrogen`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted part mass or consumer consumption.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Compressed air (`test_air`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted part mass or consumer consumption. Native Volume/m3 at actual pressure, temperature, moisture and reference conditions; if weighed use this stream own measured density to convert kg to m3, never a universal ideal-gas density. Supplier-compressed air and site compressor electricity are alternative interfaces without double counting.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Natural gas (`test_natural_gas`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted part mass or consumer consumption.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Propane (`test_propane`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted part mass or consumer consumption. Only actual liquid-propane supplied state and documented composition; account actual vaporisation and retained/consumed quantities separately, not a generic already-gaseous fuel proxy.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Light fuel oil (`test_oil`)

Only actually used factory acceptance-test charge; disclose exact recipe/specification, fresh issue, reuse, stock and discharge. It is not accepted part mass or consumer consumption. Native Volume/m3 for actual catalytic-cracked light-fuel oil supplier grade; use actual temperature and own measured density if collected by kg. Nominal catalogue42000kJ/kg is not an adopted factory factor; obtain the actual fuel assay/NCV.

- Selected flow: light fuel oil `2a02a3f7-8d3b-4556-aebc-318fddcbfe1e`
- Flow property / unit: Volume / m3
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`test_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. Only actual CN user-side grid-average AC below1kV delivery. Other voltage/geography/provider requires its own identity; supplier generation must not be counted again as site fuel.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Rejected central heating boiler part (`part_reject`)

Actual irrecoverable rejected part; associated burdens remain attributable to accepted output, rejected mass excluded from accepted denominator.

- Selected flow: Rejected central heating boiler part
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide fossil to air (`co2`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual fossil-origin ordinary unspecified outdoor-air release, with source-specific post-control/fugitive evidence; no long-term-air proxy.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide fossil to air (`co`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual fossil ordinary outdoor-air CO species release, independently established rather than inferred from carbon closure.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide to air (`no2`)

Only actual molecular NO2, not nitrite or NOx expressed as NO2-equivalent.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Particulates less than 2.5 micrometre to air (`pm`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Particulates less than 2.5 micrometre to air
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Water vapour to air (`water_vapour`)

Actual factory water-vapour release only; no consumer heating or installer drain defaults. Only actual ordinary unspecified outdoor-air water-vapour release with matched own water mass/phase basis.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Packing and accepted release (`dispatch`)

Same accepted part number/revision/completion-state configuration; identical kits counted separately from contained pieces or boilers.

#### Inputs

##### Product flows

###### Corrugated board (`board`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual C/E/F corrugated board with fibre content at least80% and containing documented recycled material; no generic box, other grade or universal recycled-fraction assumption.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden EURO pallet (`pallet`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Only actual supplied wooden EURO pallet and documented reuse/treatment; other pallet standards need their own identity.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyethylene packaging film (`film`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased alternating-current electricity (`dispatch_electricity`)

Only measured actual electricity attributable to this process and selected configuration in the common period; not whole-site meter on top of subprocess loads. Only actual CN user-side grid-average AC below1kV delivery. Other voltage/geography/provider requires its own identity; supplier generation must not be counted again as site fuel.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Parts of central heating boilers producing hot water or low-pressure steam (`reference_product`)

Selected accepted part/module/kit configuration includes actual retained fills/accessories, excluding packaging and rejects.

- Selected flow: Parts of central heating boilers for producing hot water or low pressure steam `acf2b6ec-7649-4251-b769-2f2b2cecc6ae`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-3-0-44833

##### Waste flows

##### Elementary flows

### Process: Residual shared utilities and actual generation (`services`)

Only unassigned residual after process meters and actual on-site generation.

#### Inputs

##### Product flows

###### Purchased alternating-current electricity (`electricity`)

Only unassigned shared residual after process meters; actual delivery voltage/geography/provider required. Only actual CN user-side grid-average AC below1kV delivery. Other voltage/geography/provider requires its own identity; supplier generation must not be counted again as site fuel.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased steam heat (`steam`)

Only actual purchased steam thermal supply; record each supply and return mass and own enthalpy on common datum, and distinguish gross from already-net invoicing. Supplier fuel is upstream, not imagined site burning.

- Selected flow: Purchased steam heat
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Natural gas (`gas`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Condensate thermal return (`condensate`)

Only measured thermal return corresponding to actual gross steam supply; do not deduct twice from already-net invoice; physical mass separately reconciled.

- Selected flow: Condensate thermal return
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity and divide by accepted net part mass Dnet using cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated part configurations or use part mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted part/module/kit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | per 1 kg reference flow | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg; m3 | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | per 1 kg reference flow | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | per 1 kg reference flow | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | per 1 kg reference flow | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | per 1 kg reference flow | sampling/flow/combined uncertainty |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | Normalize directly as Qattr/Dnet for one configuration and period. Naccepted counts accepted delivered parts or identical modules/kits; M=Dnet/Naccepted and q_item=Qattr/Naccepted are same-configuration cross-checks. Preserve each native numerator unit and exact conversion; do not pool unlike parts. | Qattr; Dnet; Naccepted; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_emission_method | cp_emission | For each actual species use post-control concentration times matched exhaust or liquid flow over the same period; correct actual wet/dry basis, temperature/pressure, reference state and native units. Fugitive releases require an independently measured basis, not inferred from stack readings. Keep species/compartment and capture/destruction separate. | species sampling; matched flow/time; calibrated meters; fugitive evidence |
| parts_configuration | accepted output | Part number, revision, host fit, included count and supplied completion state define the accepted configuration. Kit net mass sums actually included accepted parts; N counts identical kits rather than contained pieces or hosts. Do not pool unlike parts. | BOM; drawing; shipment; acceptance; calibrated tare |
| part_routes | actual manufacture | Include casting, tube forming, welding, finishing, refractory forming, sealing or electronic integration only where performed; add each actual grade/formulation as an atomic exchange. Bought finished parts use subsequent work only without repeating embedded module inputs. Pressure/leak, thermal-cycle, mechanical or fuel tests follow the actual factory plan; downstream replacement and downstream boiler operation are separate. | actual route; make/buy; assay; factory test plan |
| native_volume | test_air; test_oil | Compressed air and light-fuel oil retain native m3 numerator units; record each actual pressure, temperature, moisture/density and reference state. If collected by mass use own measured density, not universal density, catalogue fuel heating value or another stream factor; Dnet remains accepted part kg. | supplier specification; measured density/state; native unit receipts |
| emission_assignment | actual source | Assign each fabrication or test release once to its actual source; never add whole-site totals on top of process species rows. Actual melting/drying exhaust requires additional atomic species rows where present. | source-specific matched concentration/flow/time; exhaust/fugitive ledger |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| period_normalization | all inventory rows | Qattr is each attributable exchange in the same configuration/common period including reject/rework/factory-test burdens; Naccepted is accepted count; Dnet is sum of calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Dnet excludes packing, reject and consumed test media; preserve each native numerator unit and exact conversion. | cp_mass; cp_material; cp_energy; cp_waste; cp_emission |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| contained_species | cp_material; cp_waste; cp_emission | For each element or chemical species use each term own measured gross mass times its own assay across inputs, product, scrap, sludge, liquids and releases. Gross alloy or sludge is not contained Fe, Cu or another element. Retain each own wet/dry basis, beginning/end stocks and reaction stoichiometry; paired internal returns cancel. Investigate closure against combined sampling, meter and allocation uncertainty. | own-term mass/assay/moisture; stocks; reaction; return ledger |
| water_stream_closure | cp_material; cp_waste; cp_emission | Convert each water stream with its own water fraction and density at actual temperature. Reconcile fresh imports, each input own moisture, reaction water and beginning stocks against ending stocks, retained product water, discharge and evaporation. Paired internal returns cancel; never use another stream water fraction or universal density, and never turn unexplained residual into evaporation. | own water fraction; density/temperature; stocks/reactions/retention/discharge/evaporation |
| solvent_fates | cp_material; cp_waste; cp_emission | Each solvent stream uses its own assay. Distinguish product retention, recovered returns, captured liquid/media, wastewater and other non-air fates, demonstrated destruction and independently established species air release. Capture is not destruction; recovered, retained, wastewater and media are non-air fates. Investigate unexplained residual, never assign it to air. | assay; stocks; recovery/capture/treatment; independent air measurements |
| utility_residual | cp_energy | Reconcile common-period imports, actual site generation, exports and storage changes with assigned fabrication, integration, test and dispatch meters in the same units. Shared utilities include ONLY unassigned residual. Investigate negative residual through period, unit, meter coverage and combined uncertainty, without clipping. Offsite supplier generation or boiler fuel is not fictional site combustion. | boundary/process meters; source/period/unit records; allocation uncertainty |
| heat_supply_return | cp_energy | For gross supply, heat is supply kg times supply own MJ/kg minus independently measured return kg times return own MJ/kg, each at actual temperature/pressure on one common datum. Already-net invoices must not subtract return again. Physical supply/return mass is reconciled independently; catalogue heating value or another stream enthalpy cannot replace own measured or verified properties. | supply/return mass, pressure, temperature, enthalpy; gross/net invoice |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm host central-heating hot-water/low-pressure-steam function, eligible part classification, part number/revision, delivered completion state and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. | un-cpc-3-0-44833 |
| `denominator` | all inventory rows | All inventory uses the same accepted cohort and common period. Verify calibrated accepted net mass and N; reject and packaging mass excluded. Check q_item=Q/N then normalization by same mean M; mixed configurations are invalid. |  |
| `double_count` | make_buy | Reconcile complete bought modules versus own materials and operations, retained fills/accessories versus factory consumption, paired internal transfers and external inputs. Count each actual burden once. |  |
| `water_close` | physical water records | For each term use its own measured water fraction, density and wet/dry basis: fresh and input moisture plus reaction water and beginning stocks minus final stocks, retained product, discharge and evaporation; internal returns cancel paired. Investigate measured closure against combined sampling/meter/allocation uncertainty; no universal tolerance. |  |
| `species_close` | material and chemical records | Close each contained metal/chemical separately using each input, product, scrap, sludge, liquid and release own matched assay and dry/wet basis, reaction stoichiometry and stocks. Gross mass is not contained element. No all-inventory mass rule applies to energy or transport. |  |
| `solvent_close` | solvent records | Distinguish retained solvent, recovered return, captured liquid/media, demonstrated destruction, wastewater/non-air residual and actual species air release. Capture is not destruction; an unexplained residual must be investigated, not assigned to air. |  |
| `utility_close` | energy records | Reconcile purchased imports, actual on-site generation, exports and storage changes with assigned fabrication/integration/test/dispatch loads in the same period and units. Shared row ONLY unassigned residual; investigate negative residual against period, unit and combined measurement uncertainty without clipping. |  |
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
| un-cpc-3-0-44833 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Conditional parts architecture/classification/supplied-state and actual site casting; not factory recipe or quantitative default |
| weil-80 | handbook | Weil-McLain 80 Cast Iron Boiler Submittal; WM2602_SUB_001_80; edition date unspecified; https://www.weil-mclain.com/wp-content/uploads/SUB_001_80-Submittal.pdf | Conditional parts architecture/classification/supplied-state and actual site casting; not factory recipe or quantitative default |
| foundry-bref | handbook | Best Available Techniques (BAT) Reference Document for the Smitheries and Foundries Industry; EUR40127, 2024; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | Conditional parts architecture/classification/supplied-state and actual site casting; not factory recipe or quantitative default |
| viessmann-burner | handbook | Viessmann Installation Instructions Burner Assembly; 5800 178 - 06, 01/2025; https://www.viessmann-us.com/content/dam/public-brands/ca/pdfs/doc/wb2b_rep/wb2b-sm_burner_assembly.pdf/_jcr_content/renditions/original./wb2b-sm_burner_assembly.pdf | Conditional parts architecture/classification/supplied-state and actual site casting; not factory recipe or quantitative default |
| weil-catalog | handbook | Weil-McLain Ultra Series 3 105 Heat Exchanger/Piping Parts; undated page; publisher HTML snapshot 2026-10-02; https://parts.weil-mclain.com/catalog?model_id=17&schematic_id=608 | Conditional parts architecture/classification/supplied-state and actual site casting; not factory recipe or quantitative default |
