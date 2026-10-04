---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-non-electric-water-heaters
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Other non-electric water heaters

## 1. Scope and Applicability

This PCR covers complete other non-electric instantaneous or storage water heaters in their declared supplied configuration. Gas-fired instantaneous and storage designs are distinct; actual oil/other-fuel or indirect heat configurations require their own function, heat-source interface and supply-list evidence. Electric ignition, controls, fans and pumps can be auxiliary components of a non-electric heating architecture. A generic tank, exchanger, burner or solar-ready tank is not automatically a complete category output. Mass normalizes manufacture and does not make unlike water-heating services equivalent. Sources: `un-cpc-44827`; `wco-hs2022`; `rinnai-condensing`; `bw-gas-storage`; `bw-indirect`; `bock-oil`.

CPC 3.0 44827 explicitly references HS 2022 8419.11 (instantaneous gas) and 8419.19 (other); solar water heaters are 44826/8419.12, electric heaters 44817 and central boilers 44825. HS84.19 places non-electric instantaneous/storage water heaters in a separate phrase after a semicolon from general non-domestic thermal machinery. The CPC domestic parent heading cannot on its own prove domestic-only coverage of every HS-linked item. Declare domestic/commercial/industrial intended function and review doubtful industrial/multi-service hybrids, boiler combinations, generic indirect tanks and separate heat exchange units/parts against their actual supply state.

Rinnai documents a condensing tankless gas appliance with included isolation/relief kit and distinct installer-supplied venting. Bradford White gas storage documents enamel lining, anode, foam and convertible gas control, while its indirect model documents a glass-coated carbon-steel coil and boiler supply/return without asserting a burner. Bock oil storage documentation lists a shipping weight excluding burner/controls, so completion of the supplied heater must be checked. These are contrasting product facts, not one universal gas-model recipe. Separately supplied components and STIEBEL solar-ready hybrid tanks are adjacent counterexamples (`stiebel-hybrid-adjacent`); Rheem solar/boosted units are adjacent rather than automatic other-heater identity (`rheem-solar-adjacent`). Catalogue capacity, nominal fuel input, shipping weight, efficiency, warranty, lifetime and temperatures are not factory production defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.other-non-electric-water-heaters |
| classification_refs | CPC 3.0:44827; HS 2022:8419.11,8419.19 |
| covered_products | Complete other non-electric instantaneous/storage heaters; actual gas/storage/other-fuel/indirect configurations subject to principal-function and supplied-state review |
| excluded_products | Solar/electric water heating, central heating boilers, separate tank/exchanger/burner/parts as complete output; industrial multifunction boundary unresolved until review |
| representative_product | One declared complete accepted configuration, not one gas model universalized |
| production_route | Actual make/buy vessel/exchanger/burner/controls/lining/insulation/integration and factory test route |
| market_state | Complete accepted factory supply list including separately boxed included accessories and actual retained fill; installation-only supplies excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete non-electric water heater, not consumer hot-water service |
| How much | 1 kg accepted net complete machine mass of the same configuration |
| How well | Meets actual hydraulic, combustion, pressure, leak, safety and declared acceptance requirements |
| How long or cycle | One manufacturing/delivery period; no default lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other non-electric water heaters `5df9cf00-65b4-4cb5-b2b9-46664241c680` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal function and domestic/commercial/industrial market; actual classification/supply boundary; model/revision; instantaneous/storage; actual gas/fuel/indirect source; condensing/non-condensing; tank/coil/burner make-buy; corrosion lining/anode/insulation formulation; vent/fan/controls; included vs installer accessories; actual retained fill; pressure/leak/burner/electrical factory acceptance; calibrated net mass/common-period accepted N; providers/geography/voltage/units; species/compartment and uncertainty |

Declare every qualifier in the package; complete-category reference identity matched, but actual supplied state/principal function still requires verification. Mass does not establish equivalent user heat service.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `physical_basis` | material/water/species | Mass | kg | Each term uses its own assay, moisture, wet/dry basis, measured temperature/density, stocks and reactions; gross mass is not contained element. |
| `gas_state` | test gas | Volume | m3 | Declare meter reference state and actual T/P/humidity; mass/volume conversion uses actual composition/density, never power-plant case factors. |
| `energy_interface` | energy | Delivered energy | MJ | Electricity 1 kWh=3.6 MJ. Heat supply mass times own enthalpy minus independent return mass times own enthalpy/common datum; gross subtract return once, already-net never twice. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include receipt, actual site fabrication/corrosion/insulation, integration, factory acceptance/rework, services, wastes and packing to accepted release. | rinnai-condensing; bw-gas-storage; bw-indirect; bock-oil |
| `make_buy` | supplier_interface | Bought complete tank/burner/exchanger/controller embeds its upstream materials and operations once. Own fabrication uses feedstocks and actual operations instead. Partial supplied modules disclose remaining work. Pair internal transfers and count each burden once. | rinnai-condensing; bw-gas-storage; bw-indirect; bock-oil |
| `factory_use` | production | Include actual factory hydrostatic/leak and burner/function test water, gas/oil/electricity and losses; separate retained shipped fills and accessories. User fuel/hot water, installation vent/pipe/commissioning and use-phase condensate are outside factory production. Manufacturer installer instructions do not prove factory test amounts. |  |
| `bom_extension` | route | Atomic cards are conditional anchors, not a universal recipe. Add each actual grade, coating ingredient, foam precursor/blowing agent, weld gas, fuel, accessory, fill, waste and emitted species; require actual formulation/assay and route. not_applicable requires absence evidence; unknown is not zero. |  |
| `upstream` | links | Actual upstream production/transport and external treatment links need supplied state/geography/period. Supplier boiler fuel embedded in purchased heat is not onsite combustion; no complete cradle-to-gate claim before missing providers are resolved. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input grade/completed state and supplier delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Complete other non-electric water heater, actual principal function and supplied state reviewed |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site work only; paired internal transfers cancel |
| upstream_dataset_requirement | Actual grade/formulation/state/provider/geography/period; link complete bought units without expanding embedded material twice |
| disclosure | make-buy; complete supply list; site process; test fuel/water; retained fill; installer exclusions; classification gaps; denominator/uncertainty |

### Architecture and supplied-state matrix

| Configuration | Actual fabrication/integration | Limits |
| --- | --- | --- |
| Gas instantaneous | Actual burner, exchanger, ignition, gas valve, sensing, vent/fan and conditional condensate path | No storage tank imposed; condensing and non-condensing need actual metallurgy and architecture |
| Gas storage | Actual vessel/flue, lining, anode, insulation, jacket, burner and controls | Manufactured-home roof-jack source is a specific configuration, not default supplied kit |
| Oil/other-fuel | Actual supplied burner/fuel pump/combustion interface and vessel/exchanger; add each real fuel/species | Bock shipping weight excludes burner/controls; use weighed complete supply state; other-fuel recipe unresolved |
| Indirect/hybrid | Actual heating coil and external heat supply/return, tank and controls; actual backup declared | Generic coil tank, separate exchanger, central boiler and solar-ready/electric backup hybrids need classification review; no compulsory onsite burner |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Vessel, exchanger and housing fabrication | conditional | Conditional own forming/welding/brazing, cleaning, corrosion lining/firing, insulation and jacket; bought complete tank/exchanger bypasses embedded fabrication | foreground | per 1 kg reference flow |
| `integration` | Heater integration | required | Actual burner or indirect heat interface, controls, valves, fan/vent, refractory, seals and shipped accessories/fills; gas tankless does not require storage tank | foreground | per 1 kg reference flow |
| `test` | Factory acceptance and rework | required | Actual pressure/leak/corrosion integrity, burner ignition/gas safety/thermal function and electrical auxiliaries; trace fuel and test medium consumed; installer commissioning excluded | foreground | per 1 kg reference flow |
| `dispatch` | Packing and accepted release | required | Complete accepted actual supply list; exclude transport packaging and consumed test loads from net product mass | foreground | per 1 kg reference flow |
| `services` | Residual utilities | conditional | Only common-period unassigned residual and actual onsite generation, not duplicated whole-site imports | foreground | per 1 kg reference flow |

### Process: Vessel, exchanger and housing fabrication (`fabrication`)

Conditional own forming/welding/brazing, cleaning, corrosion lining/firing, insulation and jacket; bought complete tank/exchanger bypasses embedded fabrication。

#### Inputs

##### Product flows

###### Carbon steel sheet (`steel_sheet`)

Only actual certified carbon-steel plate for own vessel/jacket. Do not adopt a sheet-piling or contradictory bilingual identity; record grade/state and own Fe/C assay.

- Selected flow: Carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Stainless steel sheet (`stainless`)

Conditional actual further-worked stainless flat stock and supplier grade for own exchanger/vessel/housing; unfinished rolled stock needs another matching identity.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Copper tube (`copper_tube`)

Actual certified pressure tube for own exchanger fabrication; recreational-tubing comment is incompatible, UUID unresolved.

- Selected flow: Copper tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Silver brazing alloy (`braze`)

Only actual silver-bearing brazing alloy consumed on site; collect own Ag/Cu chemistry and flux separately; solder is not automatically this alloy.

- Selected flow: Silver brazing alloy
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Steel welding wire (`weld_wire`)

Own welding actual wire grade and chemistry; non-consumable route can evidence absence.

- Selected flow: Steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Argon gas (`argon`)

Actual pure gaseous shielding/purge argon only; liquid procurement or CO2 mixture differs and requires its own supplied-state row.

- Selected flow: Argon gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Vitreous enamel frit (`enamel`)

Actual own enamel frit/formulation and lining/firing; a completed bought lined tank embeds it once. Other surface pretreatment/coating chemistry requires separate atomic rows.

- Selected flow: Vitreous enamel frit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Magnesium anode rod (`magnesium`)

Actual completed magnesium corrosion anode supplied with heater; collect alloy and net included mass, never substitute graphite/carbon anode.

- Selected flow: Magnesium anode rod
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Glass wool insulation (`glass_wool`)

Only actual glass wool insulation grade. Do not transfer published bulk density as a factory mass factor.

- Selected flow: Glass Wool `85977f80-d866-44ec-bac9-52cb2d9fb421`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Rigid polyurethane insulation foam (`pu_foam`)

Only actual purchased cured rigid polyurethane insulation; onsite foaming instead records each real polyol/isocyanate/blowing agent/catalyst and losses separately, no generic OSB adhesive recipe.

- Selected flow: Rigid polyurethane insulation foam
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Process water (`water`)

Actual fabrication wash/process supply; actual water fraction, density at measured temperature and recirculation stocks required.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Isopropanol (`ipa`)

Only actual chemical IPA cleaning input; commercial mixed cleaner requires its actual composition row; no assumed evaporation fraction.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Carbon steel tube (`steel_tube`)

Actual carbon-steel tube for own indirect coil or tank flue; preserve certified grade and pressure/surface state; bought complete coated coil embeds fabrication once.

- Selected flow: Carbon steel tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Polyether polyol (`polyol`)

Only actual propylene-oxide block-polymerization polyether polyol at chemical-plant supply, matching this selected route for own polyurethane foaming. Other polyether grades/routes need their own identity; require actual formulation, hydroxyl and assay records without generic recipe, bio-content or performance assumptions.

- Selected flow: Polyether Polyol `328068ba-3cd2-44c7-a118-8274c9c7885b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Polymeric methylene diphenyl diisocyanate (`pmdi`)

Only actual foam-grade polymeric MDI; OSB adhesive resin is incompatible. Actual isocyanate chemistry, assay and other blowing agent/catalyst rows required; supplied cured foam bypasses onsite formulation.

- Selected flow: Polymeric methylene diphenyl diisocyanate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

###### Purchased alternating-current electricity (`fabrication_electricity`)

Actual metered process load, not stacked with whole-site/residual electricity; selected CN1–35kV requires actual delivery interface match.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: bw-indirect; bw-gas-storage

###### Natural gas (`fabrication_natural_gas`)

Meter actual factory burner test or onsite firing gas; project-specific power-station composition/provider rejected. Declare actual gas specification and meter T/P/humidity/density; no use-phase fuel burden.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bw-indirect; bw-gas-storage

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap (`steel_scrap`)

Actual distinct offsite waste transfer with own composition/moisture/stock and treatment interface; keep recovered internal return paired. Waste mass is not elemental discharge to water/air.

- Selected flow: Steel scrap `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: bw-indirect; bw-gas-storage

###### Copper scrap (`copper_scrap`)

Actual distinct offsite waste transfer with own composition/moisture/stock and treatment interface; keep recovered internal return paired. Waste mass is not elemental discharge to water/air.

- Selected flow: Copper scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: bw-indirect; bw-gas-storage

###### Enamelling wastewater sludge (`enamel_sludge`)

Actual distinct offsite waste transfer with own composition/moisture/stock and treatment interface; keep recovered internal return paired. Waste mass is not elemental discharge to water/air.

- Selected flow: Enamelling wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: bw-indirect; bw-gas-storage

###### Spent isopropanol solvent (`spent_solvent`)

Actual distinct offsite waste transfer with own composition/moisture/stock and treatment interface; keep recovered internal return paired. Waste mass is not elemental discharge to water/air.

- Selected flow: Spent isopropanol solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: bw-indirect; bw-gas-storage

##### Elementary flows

###### Isopropanol (`ipa_air`)

Actual independently measured species release to unspecified ordinary air, matched post-control concentration/flow/time/state and separate fugitive evidence. Assign each measured release to its actual fabrication or factory-test emitter/source and period once; do not stack duplicated whole-site totals over process rows. Only actual site source, no inferred residual-to-air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: bw-indirect; bw-gas-storage

###### Carbon dioxide fossil (`fabrication_co2`)

Actual independently measured species release to unspecified ordinary air, matched post-control concentration/flow/time/state and separate fugitive evidence. Assign each measured release to its actual fabrication or factory-test emitter/source and period once; do not stack duplicated whole-site totals over process rows. Only actual site source, no inferred residual-to-air.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: bw-indirect; bw-gas-storage

###### Carbon monoxide fossil (`fabrication_co`)

Actual independently measured species release to unspecified ordinary air, matched post-control concentration/flow/time/state and separate fugitive evidence. Assign each measured release to its actual fabrication or factory-test emitter/source and period once; do not stack duplicated whole-site totals over process rows. Only actual site source, no inferred residual-to-air.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: bw-indirect; bw-gas-storage

###### Nitrogen dioxide (`fabrication_no2`)

Actual measured molecular NO2 to air only; nitrite and NOx reported as NO2-equivalent are different identities, unresolved.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: bw-indirect; bw-gas-storage

###### Sulfur dioxide (`fabrication_so2`)

Actual measured molecular SO2 from applicable site combustion, ordinary air compartment; indoor/stratosphere/water candidates rejected.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: bw-indirect; bw-gas-storage

###### Water vapour (`fabrication_water_vapour`)

Actual independently measured species release to unspecified ordinary air, matched post-control concentration/flow/time/state and separate fugitive evidence. Assign each measured release to its actual fabrication or factory-test emitter/source and period once; do not stack duplicated whole-site totals over process rows. Only actual site source, no inferred residual-to-air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: bw-indirect; bw-gas-storage

### Process: Heater integration (`integration`)

Actual burner or indirect heat interface, controls, valves, fan/vent, refractory, seals and shipped accessories/fills; gas tankless does not require storage tank。

#### Inputs

##### Product flows

###### Glass-lined water heater tank (`tank_module`)

Only actual supplied glass-lined storage tank in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Glass-lined water heater tank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Gas water heater burner assembly (`burner_module`)

Only actual supplied gas water heater burner in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Gas water heater burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Oil burner assembly (`oil_burner`)

Only actual supplied oil burner in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Oil burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Water heater heat exchanger (`exchanger_module`)

Only actual supplied water heater exchanger in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Water heater heat exchanger
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Water heater pressure relief valve (`valve`)

Only actual supplied pressure relief valve in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Water heater pressure relief valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Water heater gas control valve (`gas_valve`)

Only actual supplied gas control valve in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Water heater gas control valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Water heater electronic controller (`controller`)

Only actual supplied electronic controller in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Water heater electronic controller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Water heater combustion fan (`fan`)

Only actual supplied combustion fan in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Water heater combustion fan
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Water heater flue vent (`vent`)

Only actual supplied flue vent in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Water heater flue vent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Fireclay refractory brick (`refractory`)

Only actual supplied fireclay brick in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Fireclay refractory brick
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Silicone rubber gasket (`gasket`)

Only actual supplied silicone gasket in declared heater configuration. Bought complete state embeds upstream once; own manufacture uses actual feedstocks/operations and cancels internal transfers. Included versus installer-supplied accessory verified.

- Selected flow: Silicone rubber gasket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Deionised water (`retained_water`)

Only actual DI water retained in factory-shipped product; most drained test water is not shipped mass. Other retained fills require actual composition and separate identity.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Brass drain valve (`drain_valve`)

Actual included brass drain valve, independently weighed supplied finished state; not generic bulk brass or installer-only valve.

- Selected flow: Brass drain valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Steel mounting bracket (`bracket`)

Actual supplied steel mounting bracket and included kit; Rinnai indoor kit differs from outdoor configuration and separately bought roof-jack.

- Selected flow: Steel mounting bracket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Purchased alternating-current electricity (`integration_electricity`)

Actual metered process load, not stacked with whole-site/residual electricity; selected CN1–35kV requires actual delivery interface match.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: rinnai-condensing; bock-oil

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance and rework (`test`)

Actual pressure/leak/corrosion integrity, burner ignition/gas safety/thermal function and electrical auxiliaries; trace fuel and test medium consumed; installer commissioning excluded。

#### Inputs

##### Product flows

###### Tap water (`test_water`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Audit missing actual exchanges separately; no universal recipe.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Compressed air (`test_air`)

Only actual verified supplied grade/state in the selected configuration; bought finished state includes upstream manufacturing once. Audit missing actual exchanges separately; no universal recipe.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Natural gas (`natural_gas`)

Meter actual factory burner test or onsite firing gas; project-specific power-station composition/provider rejected. Declare actual gas specification and meter T/P/humidity/density; no use-phase fuel burden.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Propane (`propane`)

Actual propane factory test only; liquefied supply and vaporization interface documented. Mixed LPG is not pure propane and requires actual mixture identity.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Light fuel oil (`oil_fuel`)

Only actual matched light fuel oil consumed in factory test; selected flow native Volume/m3, convert mass using independently measured batch density/temperature. Do not adopt catalogue density or heating-value factors.

- Selected flow: light fuel oil `2a02a3f7-8d3b-4556-aebc-318fddcbfe1e`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: rinnai-condensing; bock-oil

###### Purchased alternating-current electricity (`test_electricity`)

Actual metered process load, not stacked with whole-site/residual electricity; selected CN1–35kV requires actual delivery interface match.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: rinnai-condensing; bock-oil

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Water heater factory test wastewater (`effluent`)

Actual distinct offsite waste transfer with own composition/moisture/stock and treatment interface; keep recovered internal return paired. Waste mass is not elemental discharge to water/air.

- Selected flow: Water heater factory test wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: rinnai-condensing; bock-oil

###### Rejected non-electric water heater (`heater_reject`)

Actual terminal rejected heater transferred offsite; repairable returns stay paired internal rework; rejected mass excluded from accepted denominator.

- Selected flow: Rejected non-electric water heater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: rinnai-condensing; bock-oil

##### Elementary flows

###### Carbon dioxide fossil (`co2`)

Actual independently measured species release to unspecified ordinary air, matched post-control concentration/flow/time/state and separate fugitive evidence. Assign each measured release to its actual fabrication or factory-test emitter/source and period once; do not stack duplicated whole-site totals over process rows. Only actual site source, no inferred residual-to-air.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: rinnai-condensing; bock-oil

###### Carbon monoxide fossil (`co`)

Actual independently measured species release to unspecified ordinary air, matched post-control concentration/flow/time/state and separate fugitive evidence. Assign each measured release to its actual fabrication or factory-test emitter/source and period once; do not stack duplicated whole-site totals over process rows. Only actual site source, no inferred residual-to-air.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: rinnai-condensing; bock-oil

###### Nitrogen dioxide (`no2`)

Actual measured molecular NO2 to air only; nitrite and NOx reported as NO2-equivalent are different identities, unresolved.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: rinnai-condensing; bock-oil

###### Sulfur dioxide (`so2`)

Actual measured molecular SO2 from applicable site combustion, ordinary air compartment; indoor/stratosphere/water candidates rejected.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: rinnai-condensing; bock-oil

###### Water vapour (`water_vapour`)

Actual independently measured species release to unspecified ordinary air, matched post-control concentration/flow/time/state and separate fugitive evidence. Assign each measured release to its actual fabrication or factory-test emitter/source and period once; do not stack duplicated whole-site totals over process rows. Only actual site source, no inferred residual-to-air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: rinnai-condensing; bock-oil

### Process: Packing and accepted release (`dispatch`)

Complete accepted actual supply list; exclude transport packaging and consumed test loads from net product mass。

#### Inputs

##### Product flows

###### Corrugated board (`board`)

Only actual C, E or F multi-layer corrugated fibreboard containing recycled material with fibre content at least80%, matching this selected identity; retain supplier composition/state evidence. This is board, not any cardboard or a bought complete box. Outside accepted net mass.

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

###### Polyethylene packaging film (`pe_film`)

Actual polyethylene film packaging, not resin or luggage article; contradictory supplied-state classification remains identity review.

- Selected flow: Polyethylene packaging film
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

Actual EURO wooden pallet only when matching supply specification; other pallet designs need own identity. Packaging excluded from accepted net mass.

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

###### Purchased alternating-current electricity (`dispatch_electricity`)

Actual metered process load, not stacked with whole-site/residual electricity; selected CN1–35kV requires actual delivery interface match.

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

###### Other non-electric water heater (`reference_product`)

Selected complete accepted configuration includes actual retained fills/accessories, excluding packaging and rejects.

- Selected flow: Other non-electric water heaters `5df9cf00-65b4-4cb5-b2b9-46664241c680`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Residual utilities (`services`)

Only common-period unassigned residual and actual onsite generation, not duplicated whole-site imports。

#### Inputs

##### Product flows

###### Purchased steam heat (`purchased_heat`)

Only actual CN natural-gas district/industrial delivered heat matching the selected identity; not a universal steam provider. Record actual thermal interface; net heat supply/return independently reconciled, supplier upstream fuel not onsite.

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

###### Purchased alternating-current electricity (`electricity`)

Only unassigned residual matching CN1–35kV user-side supply; actual other voltage/geography needs its own identity; onsite generation separate.

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

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated non-electric heater configurations or use heater mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | accepted net mass per machine | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; native unit; gas actual T/P/humidity and meter reference state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg; m3 | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | attributable quantity / accepted machines | grade/composition tests/meters/stocks |
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
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-configuration mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| cohort_raw | common-period records | Naccepted, Dnet and Qattr share configuration/period. Dnet sums calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Qattr includes rejects/rework/factory tests; Dnet excludes packing/rejects/consumed test media; preserve each native numerator unit. | actual period/calibrated acceptance ledger |
| species_sampling | air or liquid releases | Post-control species concentration times matched same-period gas/liquid flow or integrated duration; correct temperature/pressure/wet-dry/units; fugitives independently measured. Carbon closure cannot derive CO/NOx; NO2 not NOx-equivalent. | actual sampling/flow/period/state records |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, intended market, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
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
| excluded_use | Cross-configuration functional equivalence, default consumer service, default weight/manufacturing factors, complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| rinnai-condensing | handbook | Tankless Water Heater Installation and Operation Manual; 100000467; 10/2017; https://media.rinnai.us/salsify_asset/s-378ffc11-7201-4965-a2f1-22e2286e360c/100000467-N%20Series%20Residential%20Condensing%20Installation%20and%20Operation%20Manual.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| bw-gas-storage | handbook | Energy Saver Gas Water Heater; 107-B-0213-A; copyright2013; https://docs.bradfordwhite.com/Spec_Sheets/107_0213.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| bw-indirect | handbook | Residential Single-Wall Indirect Water Heater; INT554-1125; copyright2025; https://docs.bradfordwhite.com/Spec_Sheets/INT554_Current.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| bock-oil | handbook | Oil-Fired Water Heaters — Turboflue heat exchanger; Doc80014 Rev1/16; Bock authored distributor-hosted original; https://cdn.lsicloud.net/torrcosupl/productdocs/Bock_Water_32E_Specification_Sheet.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44827 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| wco-hs2022 | official_guidance | HS2022 Chapter84 nomenclature; HS2022 Chapter84; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1684_2022e.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| rheem-solar-adjacent | handbook | Premier Hiline Solar Water Heater Owner’s Guide and Installation Instructions; 347490 RevA March2014; https://assets.ctfassets.net/phagqs82lusw/54M47Qq3UcOeGSEmag42WK/1aa2a920b6ad04b7293a09d15a630595/installinstruct-Rheemsolarpremierhiline52Cseries-347490RevA-2014Mar.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| stiebel-hybrid-adjacent | handbook | SB-E Single Coil DHW Tanks with Integral Backup Heating Element; undated publisher page; inspected 2026-10-02; https://www.stiebel-eltron-usa.com/products/sb-e-single-coil-domestic-hot-water-tanks-ingetral-backup-element-solar-geothermal-or-hydronic-applications | Product architecture/category boundary; not factory recipe or quantitative default |
