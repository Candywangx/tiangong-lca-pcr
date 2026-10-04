---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-wood-cork-bone-hard-rubber-hard-plastics-or-similar-hard-mate-e85d9e11
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Wood, cork and hard-material working machinery, woodboard presses and wood/cork treating machinery

## 1. Scope and Applicability

This candidate covers the FULL semantic category in scopebrief below: manual-feed and automated/CNC saws, planers, lathes, routers, drilling, sanding and joining/nailing/stapling machines working actual eligible hard materials; wood/ligneous board presses including continuous and batch/daylight architectures; actual other wood/cork treating equipment including impregnation installations. Classification is by the actual supplied principal function, not one CNC model or motor type. Wood, cork, bone, hard rubber and hard plastics stay explicit; wood test media never prove other material recipes. Independent forestry chippers, plastics forming machines and general dryers are assessed at their own category boundary. Integrated thermal treatment and hybrid lines require item-specific principal-function and delivered-scope review. Full CPC3.0 title includes woodboard presses and other wood/cork treating machinery. Source: `un-cpc-44222`.

HOMAG establishes welded-steel gantry/CNC variants and plastics saws; SCM shows electrospindle, clamping, integrated vacuum and dust interfaces. These are examples, not universal casting, spindle, software or extraction defaults. Dieffenbacher CPS shows continuous boardpress heating platens, cylinders, rolling rods and steel belts with optional release-agent equipment. Siempelkamp confirms woodboard multi-daylight architecture through drive modernization, not a newpress factory recipe. Scholz supplies steel/stainless autoclaves, vacuum/pressure pumps and alternative door drives. Störi demonstrates an electromechanical stationary nailer replacing hydraulic drive; hydraulic oil is therefore conditional, never mandatory for every nailer. User resin, preservative and board/wood/nail consumption are downstream; include only documented factory trials, never infer a shipped chemical fill. Sources: `homag-cnc`; `homag-plastics`; `scm-morbidelli`; `dieffenbacher-cps`; `siempelkamp-daylight`; `scholz-impregnation`; `stori-nailer`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-wood-cork-bone-hard-rubber-hard-plastics-or-similar-hard-mate-e85d9e11 |
| classification_refs | CPC3.0:44222 |
| covered_products | Complete fixed/stationary machines working wood, cork, bone, hard rubber, hard plastics or similar hard materials; presses making particleboard or fibre buildingboard from wood or other ligneous materials; other wood/cork treating machinery |
| excluded_products | Independently supplied powered hand tools, parts, metal/mineral/cold-glass machine tools, plastics/rubber forming/vulcanising equipment, forestry harvesting machines, independent conveying/extraction or unrelated general heating/drying apparatus; principal-function classification decides ambiguous integrated systems |
| representative_product | Complete accepted machine of one actual configuration; no representative mass |
| production_route | Actual mechanical fabrication, supplied working/press/treatment architecture, finishing, drive/control and factory testing; make/buy |
| market_state | Complete accepted delivered configuration with actual included components and retained initial lubricant; net mass excludes packing/test materials |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete hard-material working/woodboard press/wood-cork treating machine, not user processing service |
| How much | 1 kg accepted net complete machine mass of the same configuration |
| How well | Meets declared material/mechanism/safety and actual acceptance plan |
| How long or cycle | One manufacturing/delivery period; no default lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal function; workpiece material; model revision; stationary manualfeed/CNC; saw/plane/turn/route/drill/sand/join/nail/staple/press/treat architecture; pressure/heating design; make-buy; actual installed tools/retained fills/supplied accessories; factory test media; calibrated net mass/N; site/period; utility interface; waste/releases/uncertainty |

Declare all qualifiers in the package; the category reference establishes no factory recipe, quantity or performance default.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `physical_basis` | material/water/species | Mass | kg | Each term uses own assay/water fraction/wet-dry basis/density at actual temperature/stocks/reactions/returns; gross mass not contained element. |
| `utility_basis` | energy and gases | Delivered energy or volume | MJ; m3 | Electricity1 kWh=3.6 MJ; gas keeps m3 and actual T/P or declared standard conditions, mass conversion uses matching measured density; heat supply/return each own mass times own enthalpy/common datum; distinguish gross/already-net, return deducted once. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, mechanical/control assembly, integration, factory test/rework, common services, waste and packing through accepted release. |  |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought frame/spindle/press/vessel/motor/controller includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Include actual factory loaded working/pressing/treating trials, actual test materials, cleaning water, electricity and consumed lubricant. Recovered trial materials uses measured returns and stocks. User wood/plastic/board/preserved-wood outputs and downstream plant operation are not machine manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown cutting-surface or treatment formulation requires actual supplied-state evidence. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input supplied grade/completion state/delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Complete fixed/stationary machines working wood, cork, bone, hard rubber, hard plastics or similar hard materials; presses making particleboard or fibre buildingboard from wood or other ligneous materials; other wood/cork treating machinery |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site work only; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual grade/formulation/state/geography/period/provider; gaps explicit |
| disclosure | supplied list/make-buy/retained fill/factory test charge/conditional absence/denominator/uncertainty |

### Configuration and supplied-state matrix

| Configuration | Actual conditional interface | Evidence limits |
| --- | --- | --- |
| Stationary hard-material machine tools | Actual saw/planer/lathe/router/drill/sander, cutting surface, workholding and feed | Wood/plastics examples not bone/cork/hardrubber recipes; additional actual test grades/species |
| CNC architecture | Welded or cast frame as actually supplied, spindle/tool changer/axis drive/clamps/vacuum and safeguards | Whole bought modules embed manufacture once; linked cells classify distinct machines independently |
| Stationary nailing/stapling | Actual electromechanical or hydraulic actuation, hoppers/heads/guide and controls | Stori two-actuator example rejects universal hydraulics; consumable trial nails separate |
| Woodboard presses | Actual continuous belt or batch/daylight frames/platens/heating/cylinders/rollingrod/drive | Actual whole press/module boundary; source board recipe/power/speed not factory defaults |
| Wood/cork treating | Actual pressure shell closure, vacuum/pressure circuits, storage/control suppliedscope; other treatment declared | No mandatory woodpreservative shipped fill or generic thermal recipe; actual factory test chemical each atomic |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Frame, pressure and mechanical fabrication | conditional | Only actual site casting/forming/welding/machining; bought complete components bypass embedded manufacture | foreground | per 1 kg reference flow |
| `finish` | Cleaning and protective finishing | conditional | Actual cleaning/coating/cure; supplied completion state verified | foreground | per 1 kg reference flow |
| `integration` | Machine integration | required | Actual supplied tool/press/treatment/nailing architecture, control, retained fills and included accessories | foreground | per 1 kg reference flow |
| `test` | Factory tests and rework | required | Actual acceptance plan, no-load/loaded/pressure/safety trials only performed; attributable failures retained | foreground | per 1 kg reference flow |
| `dispatch` | Packing and accepted release | required | Complete accepted supplied configuration; packaging/test charge excluded from net output | foreground | per 1 kg reference flow |
| `services` | Residual utilities and actual generation | conditional | Only unassigned residual and actual onsite generation in same period | foreground | per 1 kg reference flow |

### Process: Frame, pressure and mechanical fabrication (`fabrication`)

Only actual site casting/forming/welding/machining; bought complete components bypass embedded manufacture。

#### Inputs

##### Product flows

###### Low-carbon cold-rolled steel sheet (`steel_sheet`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Low-carbon cold-rolled steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Further-worked flat stainless steel (`stainless`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual further-worked flat stainless stock and documented alloy; raw cold sheet/finished assembly different.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Straight hot-rolled steel shaft bar (`steel_bar`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Straight hot-rolled steel shaft bar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Welded carbon-steel pressure pipe (`steel_pipe`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual welded carbon-steel pipe grade and pressure-design specification matching supplied stock, not seamless or complete installed vessel.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Aluminium structural extrusion (`aluminium`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual extruded aluminium profile grade, not ingot or complete machine frame.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Cast-iron furnace charge (`cast_iron`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Cast-iron furnace charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Silica foundry sand (`sand`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Phenolic foundry binder resin (`binder`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual phenol/formaldehyde resin supplied precursor/formulation matching measured binder; catalysts/solvent added separately when onsite mixed.

- Selected flow: Phenolic resin `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Liquid metalworking fluid (`cutting_fluid`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual liquid metalworking formulation and concentration, not aerosol/gas or assumed mineral-oil recipe; own assay/water fraction and stocks.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Uncoated steel welding wire (`weld_wire`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Uncoated steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous argon welding supply (`argon`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Argon, gaseous `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`fabrication_electricity`)

Actual assigned subprocess load; residual services only unassigned common-period import/generation/export/storage balance after subprocesses. CN medium-voltage identity only actual corresponding user interface. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
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

###### Unprocessed external steel production scrap (`scrap`)

Actual steel production scrap measured as an outgoing untreated external Waste transfer; use each load own metal assay and wet/dry basis, beginning/end stocks and paired internal returns. Actual receiver and treatment route recorded; internal recycled metal is not a new purchased component and no avoided-product credit is assumed. Only untreated externally transferred steel production scrap; actual assay/moisture/stock/receiver matching required, not an elementary air exchange.

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

###### Spent phenolic foundry sand (`sand_waste`)

Only actual spent phenolic foundry sand leaving the factory as one Waste stream; weigh the sand and its own binder/metal contamination and moisture, reconcile stocks and paired reclaimed internal sand. Record actual external receiver/recovery or disposal; do not combine other spent mould media or claim a recycling credit.

- Selected flow: Spent phenolic foundry sand
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

### Process: Cleaning and protective finishing (`finish`)

Actual cleaning/coating/cure; supplied completion state verified。

#### Inputs

##### Product flows

###### Dry polymer powder-coating formulation (`powder`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual dry polymer powder formulation, own resin/additive grade, reclaim and cure; not a default polymer type.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
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

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

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

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

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

###### Delivered alternating-current electricity (`finish_electricity`)

Actual assigned subprocess load; residual services only unassigned common-period import/generation/export/storage balance after subprocesses. CN medium-voltage identity only actual corresponding user interface. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
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

###### Industrial cleaning wastewater (`wastewater`)

Only actual physical industrial-cleaning wastewater sent to an external treatment receiver as a technosphere Waste transfer. Measure own physical mass or matched volume/density, water fraction and dissolved/suspended load, bath stocks and paired returns. Direct measured discharge to an environmental compartment is a separate elementary exchange; neither captured pollutant nor an unexplained residual becomes an air emission.

- Selected flow: Industrial cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Powder-coating sludge (`sludge`)

Only actual physical powder-coating sludge transferred out to its documented Waste receiver. Weigh each stream on its own moisture/wet-dry basis with coating solids, contaminants, stocks and paired internal returns; recovered powder and spent filter media are separate actual streams. Record treatment/hazard classification without a default disposal route or avoided-product credit.

- Selected flow: Powder-coating sludge
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

### Process: Machine integration (`integration`)

Actual supplied tool/press/treatment/nailing architecture, control, retained fills and included accessories。

#### Inputs

##### Product flows

###### Finished cast-iron machine-tool frame (`frame`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Finished cast-iron machine-tool frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: homag-cnc

###### Complete machining electrospindle (`spindle`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Complete machining electrospindle
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: scm-morbidelli; homag-cnc

###### Installed carbide-tipped circular saw blade (`saw`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Installed carbide-tipped circular saw blade
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Installed high-speed-steel planer cutter (`cutter`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Installed high-speed-steel planer cutter
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Vulcanized rubber transmission belt (`belt`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual finished vulcanized rubber power-transmission belt; not uncured belt, leather or transport service.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Finished ball bearing (`bearing`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual independently supplied ball/roller bearing of specified matching subtype, not wind-pitch bearing.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete industrial induction motor (`motor`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Complete industrial induction motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete servo drive (`servo`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Complete servo drive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete ball screw assembly (`screw`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Complete ball screw assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: stori-nailer

###### Complete machine vacuum pump (`pump`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual included complete vacuum pump matching mechanism and supplied scope; independent air compressor not a proxy.

- Selected flow: Air or vacuum pumps, air or other gas compressors `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: scholz-impregnation; scm-morbidelli

###### Complete hydraulic press cylinder (`cylinder`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Complete hydraulic press cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: dieffenbacher-cps

###### Finished steel heated press platen (`platen`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Finished steel heated press platen
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: dieffenbacher-cps

###### Complete continuous-press steel belt (`press_belt`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Complete continuous-press steel belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: dieffenbacher-cps

###### Complete wood-treatment pressure vessel (`vessel`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Complete wood-treatment pressure vessel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: scholz-impregnation

###### Complete stationary nailing-head assembly (`nailer`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Complete stationary nailing-head assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: stori-nailer

###### Programmable industrial controller (`plc`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual supplied industrial PLC hardware matching rated voltage/interfaces/completion state, not software service or bare board.

- Selected flow: Programmable logic controller `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Insulated copper power cable (`cable`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Insulated copper power cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Pressure sensor (`sensor`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Pressure sensor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### EPDM sealing gasket (`seal`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: EPDM sealing gasket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Mineral lubricating oil (`oil`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Hydraulic fluid retained initial fill (`hydraulic`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual matching retained hydraulic base-oil/additive formulation; native m3 at measured temperature. If measured by mass use that fluid own measured density. Prefilled modules exclude duplicate issue; electromechanical nailers need no presumed fill.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Lubricating grease (`grease`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated.

- Selected flow: Lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`integration_electricity`)

Actual assigned subprocess load; residual services only unassigned common-period import/generation/export/storage balance after subprocesses. CN medium-voltage identity only actual corresponding user interface. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
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

### Process: Factory tests and rework (`test`)

Actual acceptance plan, no-load/loaded/pressure/safety trials only performed; attributable failures retained。

#### Inputs

##### Product flows

###### Sawn softwood factory-test charge (`timber`)

Only actual performed factory qualification; measured own grade/moisture/formulation, issue/returns/stocks. Test wood/plastic/cork/boards/nails/water consumed is not machine output net mass. Bone/hard-rubber and actual other test materials each require added atomic rows, not substitution by wood. Customer processing recipes/use loads are downstream. Only actual green coniferous sawnwood at sawmill gate, thickness>6mm, actual species/moisture/grade; dried timber uses another identity.

- Selected flow: Sawnwood (green), at sawmill gate `f15bb061-fd78-47b3-9fc2-216d58b7f9fb`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### PMMA rigid sheet factory-test charge (`plastic`)

Only actual performed factory qualification; measured own grade/moisture/formulation, issue/returns/stocks. Test wood/plastic/cork/boards/nails/water consumed is not machine output net mass. Bone/hard-rubber and actual other test materials each require added atomic rows, not substitution by wood. Customer processing recipes/use loads are downstream.

- Selected flow: PMMA rigid sheet factory-test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: homag-plastics

###### Agglomerated cork factory-test charge (`cork`)

Only actual performed factory qualification; measured own grade/moisture/formulation, issue/returns/stocks. Test wood/plastic/cork/boards/nails/water consumed is not machine output net mass. Bone/hard-rubber and actual other test materials each require added atomic rows, not substitution by wood. Customer processing recipes/use loads are downstream.

- Selected flow: Agglomerated cork factory-test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Particleboard factory-test charge (`board_test`)

Only actual performed factory qualification; measured own grade/moisture/formulation, issue/returns/stocks. Test wood/plastic/cork/boards/nails/water consumed is not machine output net mass. Bone/hard-rubber and actual other test materials each require added atomic rows, not substitution by wood. Customer processing recipes/use loads are downstream. Only actual wood particleboard grade/formulation matching supplied board; factory-test quantity only, other board or user press mat separately atomic.

- Selected flow: particle board `4f19ca17-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Steel nails factory-test charge (`nails`)

Only actual performed factory qualification; measured own grade/moisture/formulation, issue/returns/stocks. Test wood/plastic/cork/boards/nails/water consumed is not machine output net mass. Bone/hard-rubber and actual other test materials each require added atomic rows, not substitution by wood. Customer processing recipes/use loads are downstream. Only actual finished steel nails documented subtype/grade, not screw/bolt/staple substitutes; consumption in test excluded from Dnet.

- Selected flow: Steel fasteners `691b2092-38f6-4125-bfb4-cab3d86af41f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: stori-nailer

###### Tap water pressure-test charge (`tap_water`)

Only actual performed factory qualification; measured own grade/moisture/formulation, issue/returns/stocks. Test wood/plastic/cork/boards/nails/water consumed is not machine output net mass. Bone/hard-rubber and actual other test materials each require added atomic rows, not substitution by wood. Customer processing recipes/use loads are downstream. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Compressed air factory-test supply (`compressed_air`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Delivered alternating-current electricity (`test_electricity`)

Actual assigned subprocess load; residual services only unassigned common-period import/generation/export/storage balance after subprocesses. CN medium-voltage identity only actual corresponding user interface. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Wood particles factory press-trial charge (`wood_particles`)

Only actual performed factory loaded press trial and specified mat supply/formulation or thermal interface. Separate particles, fibres, measured resin solids/water and each other actual ingredient; finished trialboard never substitutes loose furnish. UF resin only if actually used, not universal board resin. Customer board production and resin supply are downstream. Purchased heat only matching actual provider/geography/interface; supplier boiler fuel not fictitious site combustion. Only actual supplied loose woodchips/particles with documented species, particle grading, moisture and packed bulk-volume basis; own bulk density/temperature/water fraction for mass conversion, not completed board or resin-coated mat.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Wood fibres factory press-trial charge (`wood_fibre`)

Only actual performed factory loaded press trial and specified mat supply/formulation or thermal interface. Separate particles, fibres, measured resin solids/water and each other actual ingredient; finished trialboard never substitutes loose furnish. UF resin only if actually used, not universal board resin. Customer board production and resin supply are downstream. Purchased heat only matching actual provider/geography/interface; supplier boiler fuel not fictitious site combustion.

- Selected flow: Wood fibres factory press-trial charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Urea-formaldehyde resin factory press-trial charge (`uf_resin`)

Only actual performed factory loaded press trial and specified mat supply/formulation or thermal interface. Separate particles, fibres, measured resin solids/water and each other actual ingredient; finished trialboard never substitutes loose furnish. UF resin only if actually used, not universal board resin. Customer board production and resin supply are downstream. Purchased heat only matching actual provider/geography/interface; supplier boiler fuel not fictitious site combustion.

- Selected flow: Urea-formaldehyde resin factory press-trial charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased natural-gas industrial heat factory-test supply (`heat`)

Only actual performed factory loaded press trial and specified mat supply/formulation or thermal interface. Separate particles, fibres, measured resin solids/water and each other actual ingredient; finished trialboard never substitutes loose furnish. UF resin only if actually used, not universal board resin. Customer board production and resin supply are downstream. Purchased heat only matching actual provider/geography/interface; supplier boiler fuel not fictitious site combustion. Only actual matching CN natural-gas industrial-heat delivered Energy interface; provider must match actual factory-test delivery. Own metering, gross/net return and supply state required; supplier fuel stays upstream.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
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

###### Factory-test wood offcuts (`wood_waste`)

Only actual loose wood offcuts from performed factory machine tests leaving the boundary as Waste; weigh own species/grade, moisture, contaminants and stock changes. Returned test wood or internal reused offcuts cancel paired and are not additional external waste. Agglomerated fuel blocks are a different supplied state; record the actual receiving route without presumed credit.

- Selected flow: Factory-test wood offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Factory-test PMMA offcuts (`plastic_waste`)

Only actual PMMA offcuts from performed factory machine tests leaving as one chemically identified Waste transfer. Weigh own polymer/additives, moisture/contamination, stocks and paired returns; recovered internal test pieces are not external waste. PP/PVC or mixed contaminated plastics require separate identities and actual receiving routes; no assumed substitution credit.

- Selected flow: Factory-test PMMA offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste mineral lubricating oil (`oil_waste`)

Only actual used contaminated mineral lubricating oil leaving the factory as one Waste transfer. Measure own gross mass, oil/water fraction and contamination assay, beginning/end stocks and paired recovered internal returns; retained shipped fill and unused return are separate states. Link actual receiver and treatment without prescribed recycling, combustion, disposal or avoided-product credit. Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
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

### Process: Packing and accepted release (`dispatch`)

Complete accepted supplied configuration; packaging/test charge excluded from net output。

#### Inputs

##### Product flows

###### Corrugated cardboard dispatch material (`cardboard`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Actual C/E/F corrugated board, fibre>=80%, recycled-containing with actual fraction documented; not every finished box.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### LDPE wrapping foil (`film`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden EURO pallet (`pallet`)

Conditional actual specified supplied grade/component; record composition, completion state and actual make/buy. Complete bought input embeds manufacture once; own fabrication instead uses its actual atomic materials/processes. Installed tool/fill/accessory is included only if supplied; loose spares and consumption separated. Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`dispatch_electricity`)

Actual assigned subprocess load; residual services only unassigned common-period import/generation/export/storage balance after subprocesses. CN medium-voltage identity only actual corresponding user interface. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
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

###### Wood/cork/hard-material working and board-press machinery (`reference_product`)

Selected complete accepted configuration includes actual retained fills/accessories, excluding packaging and rejects.

- Selected flow: Machine-tools for working wood, cork, bone, hard rubber, hard plastics or similar hard materials, presses for the manufacture of particle board or fibre building board of wood or other ligneous materials and other machinery for treating wood or cork `740d919d-5380-4e2e-b5aa-c374314b9743`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44222

##### Waste flows

##### Elementary flows

### Process: Residual utilities and actual generation (`services`)

Only unassigned residual and actual onsite generation in same period。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`services_electricity`)

Actual assigned subprocess load; residual services only unassigned common-period import/generation/export/storage balance after subprocesses. CN medium-voltage identity only actual corresponding user interface. Only actual matching composition, supplied state, geography, delivery interface and provider; preserve the verified native quantity and actual conversion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
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

###### Fossil carbon dioxide to unspecified air (`co2`)

Only independently measured actual species/air compartment after control, with matched concentration, gas flow, reporting state and sampling period, plus independently established fugitives. Allocate once to actual emitter; captured dust is waste, not air emission; unmeasured residual is not release. Only actual matching composition, state, geography and interface; ordinary unspecified-air species requires actual measured origin/compartment.

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

###### Fossil carbon monoxide to unspecified air (`co`)

Only independently measured actual species/air compartment after control, with matched concentration, gas flow, reporting state and sampling period, plus independently established fugitives. Allocate once to actual emitter; captured dust is waste, not air emission; unmeasured residual is not release. Only actual matching composition, state, geography and interface; ordinary unspecified-air species requires actual measured origin/compartment.

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

###### Water vapour to unspecified air (`vapour`)

Only independently measured actual species/air compartment after control, with matched concentration, gas flow, reporting state and sampling period, plus independently established fugitives. Allocate once to actual emitter; captured dust is waste, not air emission; unmeasured residual is not release. Only actual matching composition, state, geography and interface; ordinary unspecified-air species requires actual measured origin/compartment.

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

###### Isopropanol to unspecified air (`ipa_air`)

Only independently measured actual species/air compartment after control, with matched concentration, gas flow, reporting state and sampling period, plus independently established fugitives. Allocate once to actual emitter; captured dust is waste, not air emission; unmeasured residual is not release. Only actual matching composition, state, geography and interface; ordinary unspecified-air species requires actual measured origin/compartment.

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

###### PM10 particulate matter to unspecified air (`dust`)

Only independently measured actual species/air compartment after control, with matched concentration, gas flow, reporting state and sampling period, plus independently established fugitives. Allocate once to actual emitter; captured dust is waste, not air emission; unmeasured residual is not release. Only actual matching composition, state, geography and interface; ordinary unspecified-air species requires actual measured origin/compartment.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated machine models or use machine mass automatically for every utility. |  |
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
| cp_volume | all | specific supplied gas/fluid/bulk woodchips | meter | gas/fluid/bulk woodchips identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter native volume at actual state: gas T/P, liquid temperature or documented bulk-chip packing/moisture basis. Mass conversion uses that actual stream measured density, not generic factors. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | attributable volume / accepted machines | T/P/flow/density/calibration |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| cohort_raw | cohort | Naccepted, Dnet and Qattr share configuration/period. Dnet sums calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Qattr includes rejects/rework/factory tests; Dnet excludes packing/rejects/consumed trial charge. Preserve each native numerator unit. | calibration/actual-period ledgers |
| species_sampling | emissions | Post-control species concentration times matched same-period gas/liquid flow and duration with T/P/wet-dry/unit corrections; fugitives independently measured. Unknown residual not air release, capture not destruction; each metal/chemical/water term uses own assay/water fraction/density/stocks/reactions/paired returns. | actual concentration/flow/period/state records |
| contained_assay | physical balances | Each input/product/scrap/sludge/liquid/release uses own measured gross mass times own assay and wet/dry basis; gross alloy/sludge is not contained metal. Every water term uses own water fraction and density at actual temperature, including product retention/reaction/evaporation/discharge/beginning-end stocks; internal returns pair/cancel. | term-specific measurement/assay/moisture/stocks |
| solvent_fates | solvent records | Record recovered return/product retention/captured liquid or media/demonstrated destruction/wastewater separately. Recovered/retained/captured and wastewater/media are non-air fates; capture not destruction. Investigate unknown residual, never turn it into air release. | actual material/sampling/abatement records |
| utility_residual | energy | Reconcile common-period imports plus actual generation minus exports/storage changes against fabrication/finish/integration/test/dispatch loads; shared row ONLY unassigned residual. Investigate negative residual against period/units/combined uncertainty without clipping. | calibrated subprocess/site meters |
| heat_return | thermal interface | Gross heat equals measured supply kg times own MJ/kg minus independently measured return kg times return own MJ/kg, with common datum and actual T/P. Gross supply deducts return once; already-net bill never deducts again. Physical steam/condensate mass separate from heat; supplier boiler fuel not onsite combustion. | separate supply/return metering/thermodynamic state/invoice |
| cohort | all inventory rows | Same configuration/common period Qattr includes attributable reject/rework/test; Naccepted counts accepted complete machines; Dnet sums calibrated accepted net masses including actual supplied installed tools/retained fills/accessories, excluding packing/rejects/consumed test charge. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Preserve each numerator native unit and explicit conversion; no mixed configurations. | calibrated net mass/supplied list/acceptance/cohort raw-period records |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, stationary hard-material/boardpress/woodtreating function, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
| `denominator` | all inventory rows | All inventory uses the same accepted cohort and common period. Verify calibrated accepted net mass and N; reject and packaging mass excluded. Check q_item=Q/N then normalization by same mean M; mixed configurations are invalid. |  |
| `double_count` | make_buy | Reconcile complete bought modules versus own materials and operations, retained fills/accessories versus factory consumption, paired internal transfers and external inputs. Count each actual burden once. |  |
| `water_close` | physical water records | For each term use its own measured water fraction, density and wet/dry basis: fresh and input moisture plus reaction water and beginning stocks minus final stocks, retained product, discharge and evaporation; internal returns cancel paired. Investigate measured closure against combined sampling/meter/allocation uncertainty; no universal tolerance. |  |
| `species_close` | material and chemical records | Close each contained metal/chemical separately using each input, product, scrap, sludge, liquid and release own matched assay and dry/wet basis, reaction stoichiometry and stocks. Gross mass is not contained element. No all-inventory mass rule applies to energy or transport. |  |
| `solvent_close` | solvent records | Distinguish retained solvent, recovered return, captured liquid/media, demonstrated destruction, wastewater/non-air residual and actual species air release. Capture is not destruction; an unexplained residual must be investigated, not assigned to air. |  |
| `utility_close` | energy records | Reconcile purchased imports, actual on-site generation, exports and storage changes with assigned fabrication/finish/integration/test/dispatch loads in the same period and units. Shared row ONLY unassigned residual; investigate negative residual against period, unit and combined measurement uncertainty without clipping. |  |
| `steam_close` | steam and condensate | Use supply kg times supply own MJ/kg and return kg times return own MJ/kg at measured pressure/temperature relative to common zero. If gross supply, subtract return once; if already-net invoice, do not subtract again. Keep physical steam/condensate mass balance independent from energy. |  |
| `species_emissions` | air releases | Validate every emitted species and compartment independently. Fuel carbon balance cannot alone establish CO or NOx. NO2 mass is not NOx reported as NO2 equivalent; keep reporting conventions and actual species identities distinct. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual configuration factory foreground production and models with explicit completed upstream links |
| excluded_use | Cross-family functional equivalence, default customer processing service, default weight/manufacturing factors, complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| homag-cnc | handbook | CNC machining centers; publication date unconfirmed; original snapshot 2026-10-02; https://www.homag.com/en/machines/cnc-machining-centers | Product architecture/category boundary; not factory recipe or quantitative default |
| homag-plastics | handbook | HOMAG saws for plastics Complete solutions; 08/2019 E; part4-099-70-0122; https://www.homag.com/fileadmin/product/paneldividing/brochures/plastics/panel-dividing-saw-plastics-en.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| dieffenbacher-cps | handbook | CPS+ continuous press; publication date unconfirmed; original snapshot 2026-10-02; https://dieffenbacher.com/wood-based-panels/products/press-systems/cps-continuous-press | Product architecture/category boundary; not factory recipe or quantitative default |
| scholz-impregnation | handbook | Wood impregnating autoclaves; publication date unconfirmed; original snapshot 2026-10-02; https://www.scholz-autoclaves.com/en/systems/wood-impregnating-autoclaves | Product architecture/category boundary; not factory recipe or quantitative default |
| stori-nailer | handbook | Nailing machine SMPA500.2ED; publication date unconfirmed; original snapshot 2026-10-02; https://www.stoerimantel.com/files/nailing-machine-smpa-500-2-ed-brochure.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| siempelkamp-daylight | handbook | Multi-daylight presses; publication date unconfirmed; original snapshot 2026-10-02; https://www.sls-siempelkamp.com/en/modernization/product-overview/multi-daylight-presses/ | Product architecture/category boundary; not factory recipe or quantitative default |
| scm-morbidelli | handbook | Morbidelli m100/m200; REV.N.01 04.2018; https://www.scmgroup.com/products/docs/morbidelli_m100-m200_apr18_ING.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44222 | official_guidance | Central Product Classification Version3.0; 30June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product architecture/category boundary; not factory recipe or quantitative default |
