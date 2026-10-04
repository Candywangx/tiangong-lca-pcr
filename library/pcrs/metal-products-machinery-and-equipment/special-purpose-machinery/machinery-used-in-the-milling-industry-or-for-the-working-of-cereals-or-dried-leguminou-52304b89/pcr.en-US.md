---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-used-in-the-milling-industry-or-for-the-working-of-cereals-or-dried-leguminou-52304b89
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Non-farm cereal milling and dried-pulse working machinery

## 1. Scope and Applicability

This method covers the manufacture of complete non-farm machines used for cereal milling or working cereals/dried pulses: roller, stone, hammer or impact grinding, rice husking, whitening/polishing, pulse dehulling/splitting and flour-purpose sifting where actual principal function is within this category. Preserve intended feed species and supplied configuration, rather than one wheat roller subtype. Sources: `un-cpc-44513`; `buhler-pulses`; `satake-polisher`.

Exclude farm-type equipment and independently classified seed/grain cleaning/sorting/grading machinery, separately supplied parts, standalone dryers, packers, conveyors, storage and thermal food machinery. Sifters separating milled flour differ from raw-grain grading; actual principal function governs a hybrid. A whole process-chain advertisement does not place every adjacent machine in this PCR. Included aspiration, sensors, pneumatic adjustment and tools follow actual supplied scope; separate plant services are not automatically incorporated. Sources: `un-cpc-44513`; `buhler-plansifters`; `buhler-pulses`.

Diorit shows a cast-iron frame, food-contact materials and configurable roller/control packages. Engsko establishes a contrasting stone-mill route with supplied mineral-composite stones; Satake HR10DDF-T documents rubber rolls, pneumatic roll pressure and husker/aspirator alternatives. KB polishing uses selected rolls and screens. These original bodies establish qualitative alternatives, not universal alloys, rubber formulations, material ratios, capacities, powers, factory test durations, weights, yields or lifetimes. Actual delivered BOM and make/buy determine the inventory. Sources: `buhler-diorit-2019`; `engsko-europemill`; `satake-husker`; `satake-polisher`.

Grain conditioning/dampening remains covered when the actual complete machine works cereals within the non-farm milling boundary. HS2022 Chapter84 explicitly places grain dampening in8437 rather than8419; its8437.10 cleaners,8437.80 other machinery and8437.90 parts remain distinct. Do not exclude a grain dampener solely because conditioning changes temperature; independently supplied dryers and unrelated thermal food equipment still need their own principal-function classification. Actual dosing, wetted contact, mixing, pump/valve/sensor interfaces and supplied attachments are declared; installation water and customer grain-processing loads remain downstream. Source: `wco-hs2022`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-used-in-the-milling-industry-or-for-the-working-of-cereals-or-dried-leguminou-52304b89 |
| classification_refs | CPC3.0:44513 |
| covered_products | Complete non-farm cereal/dried-pulse mills, dehullers, whiteners/polishers and milling-purpose sifters, with actual grain conditioning/dampening machines |
| excluded_products | Farm-type machinery, independently supplied seed/grain cleaners/sorters/graders, dryers, packers, conveyors/storage, unrelated thermal food machines and separate parts; mixed lines require item review |
| representative_product | Complete accepted machine of one actual configuration; no representative mass |
| production_route | Actual mechanical fabrication, supplied milling surfaces, finishing, drive/control and factory testing; make/buy |
| market_state | Complete accepted delivered configuration with actual included components and retained initial lubricant; net mass excludes packing/test grain |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a non-farm cereal/dried-pulse working machine, not user milling service |
| How much | 1 kg accepted net complete machine mass of the same configuration |
| How well | Meets declared material/mechanism/hygiene/safety and actual acceptance plan |
| How long or cycle | One manufacturing/delivery period; no default lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machinery used in the milling industry or for the working of cereals or dried leguminous vegetables other than farm-type machinery `777a709f-59dc-4927-843f-2e9546f5495e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-farm industrial function; model revision; feed species; roller/stone/hammer/dehulling/whitening/polishing/sifting mechanism; grade/food contact; supplied accessories/aspiration boundary; retained initial fill; make/buy; actual test grain/acceptance; calibrated net mass/N; site/period; utility interface; waste/releases/uncertainty |

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
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought frame/roller/millstone/motor/board includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Include actual factory loaded milling tests, test grain, cleaning water, electricity and consumed lubricant. Recovered trial grain uses measured returns and stocks. User milling, flour/rice/pulse outputs and downstream plant operation are not machine manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown grinding-surface formulation requires actual supplied-state evidence. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input supplied grade/completion state/delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Complete non-farm cereal/dried-pulse mills, dehullers, whiteners/polishers and milling-purpose sifters, with actual grain conditioning/dampening machines |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site work only; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual grade/formulation/state/geography/period/provider; gaps explicit |
| disclosure | supplied list/make-buy/retained fill/factory test charge/conditional absence/denominator/uncertainty |

### Configuration and supplied-state matrix

| Configuration | Actual conditional interface | Evidence limits |
| --- | --- | --- |
| Roller mill | Actual frame, rollers, feed, belt/drive and controls | Cast frame and food-contact example not all-machine material recipe; water cooling only actual supplied/tested |
| Stone mill | Complete bought grinding stones or actual own stone preparation | Emery/flint/magnesite example is not composition ratios; bought stone embeds upstream once |
| Husking and polishing | Actual rubber or abrasive roll, screen, pressure control and included aspirator | Different designs; no default rubber chemistry, fan or grain load |
| Dried-pulse and impact milling | Actual dehulling/splitting/hammer or impact surfaces | Process chain separates drying/cleaning; standalone modules classified separately |
| Milling-purpose sifting | Actual stack, frame, cloth/mesh, suspension and drive | Wooden or synthetic configurations as present; standalone raw-grain sorting excluded |
| Grain conditioning/dampening | Actual dosing/wetted mixing, included pump/control/valves and supplied scope | HS Chapter84 note2(A)(ii) preserves grain dampening in8437 despite8419 thermal heading; no universal conditioning recipe or user energy allocation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Frame and mechanical fabrication | conditional | Only actual site casting/machining/forming/welding/milling-surface finishing; complete bought components bypass embedded manufacture | foreground | per 1 kg reference flow |
| `finish` | Cleaning and protective finishing | conditional | Actual cleaning/coating/cure with food-contact and non-contact state distinguished | foreground | per 1 kg reference flow |
| `integration` | Machine integration | required | Actual complete grinding/dehulling/screening, drive and controls, supplied aspiration and tools | foreground | per 1 kg reference flow |
| `test` | Factory testing and rework | required | Actual acceptance plan including loaded grain tests only when performed; failed and repeat trials retained | foreground | per 1 kg reference flow |
| `dispatch` | Packing and accepted release | required | Complete accepted supplied configuration; packing/test grain excluded from net output | foreground | per 1 kg reference flow |
| `services` | Residual utilities and actual generation | conditional | Only unassigned residual and actual generation in common period | foreground | per 1 kg reference flow |

### Process: Frame and mechanical fabrication (`fabrication`)

Only actual site casting/machining/forming/welding/milling-surface finishing; complete bought components bypass embedded manufacture。

#### Inputs

##### Product flows

###### Low-carbon cold-rolled steel sheet (`steel_sheet`)

Only actual supplied grade/state and site route. Bought completed frame includes casting once; own casting requires additional actual alloy-charge, mould, binder and waste cards, not a primary cast-iron material proxy.

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

Only actual supplied grade/state and site route. Bought completed frame includes casting once; own casting requires additional actual alloy-charge, mould, binder and waste cards, not a primary cast-iron material proxy. Only actual further-worked flat stainless stock; no unworked sheet or complete finished mill part. Supplier alloy grade and food-contact finish verified separately.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: buhler-diorit-2019; buhler-plansifters

###### Straight hot-rolled steel shaft bar (`steel_bar`)

Only actual supplied grade/state and site route. Bought completed frame includes casting once; own casting requires additional actual alloy-charge, mould, binder and waste cards, not a primary cast-iron material proxy.

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

###### Metalworking-fluid concentrate (`cutting_fluid`)

Only actual supplied grade/state and site route. Bought completed frame includes casting once; own casting requires additional actual alloy-charge, mould, binder and waste cards, not a primary cast-iron material proxy.

- Selected flow: Metalworking-fluid concentrate
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

Only actual supplied grade/state and site route. Bought completed frame includes casting once; own casting requires additional actual alloy-charge, mould, binder and waste cards, not a primary cast-iron material proxy.

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

Only actual supplied grade/state and site route. Bought completed frame includes casting once; own casting requires additional actual alloy-charge, mould, binder and waste cards, not a primary cast-iron material proxy. Only actual gaseous pure argon supply with purity, provider and T/P-density conversion as needed; liquid/mixed gas not interchangeable.

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

Actual assigned process load; services ONLY unassigned shared residual after common-period imports/generation/exports/storage and subprocesses reconciled. Use identity only for CN 1–35kV user-side interface; no duplicate whole-site meter.

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

One actual external waste stream; own wet/dry assay, water fraction, stock/return and treatment transfer measured. Captured grain, returned oil or internal scrap is not an extra external purchase. Actual other trial-grain wastes require separate species cards.

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

##### Elementary flows

### Process: Cleaning and protective finishing (`finish`)

Actual cleaning/coating/cure with food-contact and non-contact state distinguished。

#### Inputs

##### Product flows

###### Polyester powder-coating formulation (`powder`)

Only documented actual cleaning or finishing route; actual formulation, own assay/water fraction, bath stocks/recovery and retained film required. Food-contact suitability is declared, not inferred from a coating name.

- Selected flow: Polyester powder-coating formulation
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

Only documented actual cleaning or finishing route; actual formulation, own assay/water fraction, bath stocks/recovery and retained film required. Food-contact suitability is declared, not inferred from a coating name. Only actual matching CN-produced chemical supply; record actual IPA assay and water fraction without a default concentration.

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

Only documented actual cleaning or finishing route; actual formulation, own assay/water fraction, bath stocks/recovery and retained film required. Food-contact suitability is declared, not inferred from a coating name.

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

###### Pipeline natural gas (`gas`)

Only actual onsite combustion supply; preserve composition/T/P/density and own NCV; project-specific power-station gas is not generic factory gas.

- Selected flow: Pipeline natural gas
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources:

###### Purchased natural-gas industrial heat (`heat`)

Only actual matched CN natural-gas industrial heat provider; other heat needs own identity. Supplier fuel is upstream, not fictional onsite combustion.

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

###### Delivered alternating-current electricity (`finish_electricity`)

Actual assigned process load; services ONLY unassigned shared residual after common-period imports/generation/exports/storage and subprocesses reconciled. Use identity only for CN 1–35kV user-side interface; no duplicate whole-site meter.

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

One actual external waste stream; own wet/dry assay, water fraction, stock/return and treatment transfer measured. Captured grain, returned oil or internal scrap is not an extra external purchase. Actual other trial-grain wastes require separate species cards.

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

One actual external waste stream; own wet/dry assay, water fraction, stock/return and treatment transfer measured. Captured grain, returned oil or internal scrap is not an extra external purchase. Actual other trial-grain wastes require separate species cards.

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

Actual complete grinding/dehulling/screening, drive and controls, supplied aspiration and tools。

#### Inputs

##### Product flows

###### Finished cast-iron milling-machine frame (`cast_frame`)

Only actual supplied grade/state and site route. Bought completed frame includes casting once; own casting requires additional actual alloy-charge, mould, binder and waste cards, not a primary cast-iron material proxy.

- Selected flow: Finished cast-iron milling-machine frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: buhler-diorit-2019

###### Finished fluted cereal grinding roller (`roller`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Finished fluted cereal grinding roller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: buhler-diorit-2019

###### Finished rubber paddy husking roller (`rubber_roll`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Finished rubber paddy husking roller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: satake-husker

###### Complete composite grinding millstone (`millstone`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Complete composite grinding millstone
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: engsko-europemill

###### Complete abrasive rice whitening roller (`abrasive_roll`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Complete abrasive rice whitening roller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: satake-polisher

###### Finished stainless-steel milling screen (`screen`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Finished stainless-steel milling screen
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: satake-polisher

###### Polyamide milling sieve cloth (`sieve`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Polyamide milling sieve cloth
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: buhler-plansifters

###### Complete industrial induction motor (`motor`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

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

###### Finished ball bearing (`bearing`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion. Only actual independently supplied ball or roller bearing matching declared subtype and net mass; not wind-turbine pitch bearing.

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

###### Vulcanized rubber transmission belt (`belt`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion. Only actually vulcanized rubber power-transmission belt matching supplied grade; not uncured belt build or conveyor transport service.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: buhler-diorit-2019

###### Complete industrial gearbox (`gearbox`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Complete industrial gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Populated industrial control board (`board`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Populated industrial control board
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

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

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

###### Rotation speed sensor (`sensor`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Rotation speed sensor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: buhler-diorit-2019; satake-husker

###### Complete pneumatic actuator (`pneumatic`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

- Selected flow: Complete pneumatic actuator
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: satake-husker

###### EPDM sealing gasket (`seal`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

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

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

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

###### Lubricating grease (`grease`)

Conditional actually supplied component/grade/formulation; complete bought state embeds upstream once. Separately supplied, partial, prefilled and sealed lifetime-lubricated states must be identified; do not refill or duplicate included motor, bearing, screen or board materials. Unknown chemistry is a collection gap, not a universal recipe or exclusion.

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

Actual assigned process load; services ONLY unassigned shared residual after common-period imports/generation/exports/storage and subprocesses reconciled. Use identity only for CN 1–35kV user-side interface; no duplicate whole-site meter.

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

###### Complete milling aspirator blower (`aspirator`)

Only actual supplied complete component/grade and principal machine function; independent fan or generic polymer/wood feedstock cannot substitute the assembly. Own manufacturing uses additional actual material/process rows; bought complete includes upstream once.

- Selected flow: Complete milling aspirator blower
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete cereal hammer-mill rotor assembly (`hammer_rotor`)

Only actual supplied complete component/grade and principal machine function; independent fan or generic polymer/wood feedstock cannot substitute the assembly. Own manufacturing uses additional actual material/process rows; bought complete includes upstream once.

- Selected flow: Complete cereal hammer-mill rotor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden flour-sifter frame (`wood_frame`)

Only actual supplied complete component/grade and principal machine function; independent fan or generic polymer/wood feedstock cannot substitute the assembly. Own manufacturing uses additional actual material/process rows; bought complete includes upstream once.

- Selected flow: Wooden flour-sifter frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyurethane flour-sifter frame (`pu_frame`)

Only actual supplied complete component/grade and principal machine function; independent fan or generic polymer/wood feedstock cannot substitute the assembly. Own manufacturing uses additional actual material/process rows; bought complete includes upstream once.

- Selected flow: Polyurethane flour-sifter frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete grain-dampener water-dosing pump (`dosing_pump`)

Only actual included bought dosing pump of declared mechanism, wet-side chemistry and completion state; no generic food/household pump proxy. Own pump manufacture requires separate actual material/process cards; trial water is factory consumption, installation/use water downstream.

- Selected flow: Complete grain-dampener water-dosing pump
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

##### Waste flows

##### Elementary flows

### Process: Factory testing and rework (`test`)

Actual acceptance plan including loaded grain tests only when performed; failed and repeat trials retained。

#### Inputs

##### Product flows

###### Wheat grain factory test charge (`wheat`)

Only actual factory trial/acceptance charge; its grade/moisture/stocks and recovered return measured. Grain and water consumed in test are excluded from accepted machine net mass. Other actual cereals/pulses each need an additional atomic card.

- Selected flow: Wheat grain factory test charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Unhusked paddy rice factory test charge (`rice`)

Only actual factory trial/acceptance charge; its grade/moisture/stocks and recovered return measured. Grain and water consumed in test are excluded from accepted machine net mass. Other actual cereals/pulses each need an additional atomic card.

- Selected flow: Rice paddy, other (not husked) `bdbb913b-620c-42a0-baf6-c5802a2b6c4b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Dry pea grain factory test charge (`pea`)

Only actual factory trial/acceptance charge; its grade/moisture/stocks and recovered return measured. Grain and water consumed in test are excluded from accepted machine net mass. Other actual cereals/pulses each need an additional atomic card.

- Selected flow: Peas, dry `e64a5cdb-c922-45d9-90ab-c9dd573032f7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Tap water for factory testing (`tap_water`)

Only actual factory trial/acceptance charge; its grade/moisture/stocks and recovered return measured. Grain and water consumed in test are excluded from accepted machine net mass. Other actual cereals/pulses each need an additional atomic card.

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

###### Compressed air for factory testing (`compressed_air`)

Actual pneumatic/factory test delivered air; keep native m3 at actual T/P or standard-state basis, with actual matching density if collected by mass. Onsite compressor electricity and bought compressed air cannot duplicate supply.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources:

###### Delivered alternating-current electricity (`test_electricity`)

Actual assigned process load; services ONLY unassigned shared residual after common-period imports/generation/exports/storage and subprocesses reconciled. Use identity only for CN 1–35kV user-side interface; no duplicate whole-site meter.

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

###### Spent wheat factory-test grain (`grain_waste`)

One actual external waste stream; own wet/dry assay, water fraction, stock/return and treatment transfer measured. Captured grain, returned oil or internal scrap is not an extra external purchase. Actual other trial-grain wastes require separate species cards.

- Selected flow: Spent wheat factory-test grain
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

One actual external waste stream; own wet/dry assay, water fraction, stock/return and treatment transfer measured. Captured grain, returned oil or internal scrap is not an extra external purchase. Actual other trial-grain wastes require separate species cards.

- Selected flow: Waste mineral lubricating oil
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

Complete accepted supplied configuration; packing/test grain excluded from net output。

#### Inputs

##### Product flows

###### Corrugated cardboard dispatch material (`cardboard`)

Actual packaging grade and supplied conversion state, measured issue/returns/stocks and demonstrated reuse; no invented reuse count. Packaging mass excluded from machine denominator. Only actual C/E/F corrugated board, fibre >=80%, with recycled content and actual documented recycled fraction; other grades or complete boxes need separate identity.

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

###### Polyethylene wrapping film (`film`)

Actual packaging grade and supplied conversion state, measured issue/returns/stocks and demonstrated reuse; no invented reuse count. Packaging mass excluded from machine denominator. Only actual non-cellular, non-self-adhesive, unreinforced PE-LD foil; laminated/reinforced or other polymer film needs its own identity, not generic PE.

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

Actual packaging grade and supplied conversion state, measured issue/returns/stocks and demonstrated reuse; no invented reuse count. Packaging mass excluded from machine denominator. Only actual EURO wooden pallet; other dimensions/materials separately verified.

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

Actual assigned process load; services ONLY unassigned shared residual after common-period imports/generation/exports/storage and subprocesses reconciled. Use identity only for CN 1–35kV user-side interface; no duplicate whole-site meter.

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

###### Non-farm cereal milling and dried-pulse working machinery (`reference_product`)

Selected complete accepted configuration includes actual retained fills/accessories, excluding packaging and rejects.

- Selected flow: Machinery used in the milling industry or for the working of cereals or dried leguminous vegetables other than farm-type machinery `777a709f-59dc-4927-843f-2e9546f5495e`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44513

##### Waste flows

##### Elementary flows

### Process: Residual utilities and actual generation (`services`)

Only unassigned residual and actual generation in common period。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`services_electricity`)

Actual assigned process load; services ONLY unassigned shared residual after common-period imports/generation/exports/storage and subprocesses reconciled. Use identity only for CN 1–35kV user-side interface; no duplicate whole-site meter.

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

Only actual measured post-control species/compartment and independently measured fugitives. Allocate once to actual emitter in fabrication/finish/test, never duplicate a site total. PM10 requires measured size fraction, not generic grain dust; captured dust is not air release. Supplier heat combustion is upstream.

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

Only actual measured post-control species/compartment and independently measured fugitives. Allocate once to actual emitter in fabrication/finish/test, never duplicate a site total. PM10 requires measured size fraction, not generic grain dust; captured dust is not air release. Supplier heat combustion is upstream.

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

Only actual measured post-control species/compartment and independently measured fugitives. Allocate once to actual emitter in fabrication/finish/test, never duplicate a site total. PM10 requires measured size fraction, not generic grain dust; captured dust is not air release. Supplier heat combustion is upstream.

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

Only actual measured post-control species/compartment and independently measured fugitives. Allocate once to actual emitter in fabrication/finish/test, never duplicate a site total. PM10 requires measured size fraction, not generic grain dust; captured dust is not air release. Supplier heat combustion is upstream.

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

###### Molecular nitrogen dioxide to unspecified air (`no2`)

Only actual measured post-control species/compartment and independently measured fugitives. Allocate once to actual emitter in fabrication/finish/test, never duplicate a site total. PM10 requires measured size fraction, not generic grain dust; captured dust is not air release. Supplier heat combustion is upstream.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
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

Only actual measured post-control species/compartment and independently measured fugitives. Allocate once to actual emitter in fabrication/finish/test, never duplicate a site total. PM10 requires measured size fraction, not generic grain dust; captured dust is not air release. Supplier heat combustion is upstream.

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
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated milling-machine models or use machine mass automatically for every utility. |  |
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
| cp_gas | all | specific supplied gas | meter | gas identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter volume at actual state; mass conversion uses corresponding measured density, not a generic gas factor. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | attributable volume / accepted machines | T/P/flow/density/calibration |

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
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, non-farm industrial function, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
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
| excluded_use | Cross-family functional equivalence, default user milling service, default weight/manufacturing factors, complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| buhler-diorit-2019 | handbook | Diorit Roller Mill MDDY/Z; Brochure en 10/19; https://dam.buhlergroup.com/asset/c7870175fc084f6eb3ce8a2c58ab8c5a/Brochure_Roller_Mill_Diorit_2019_EN.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| engsko-europemill | handbook | Europemill industrial horizontal stone grinding mills W-model; undated; snapshot 2026-10-02; https://unitedmillingsystems.com/wp-content/uploads/EUROPEMILL_W-1.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| buhler-pulses | handbook | From pulses to pulses flour; undated; HTML snapshot 2026-10-02; https://www.buhlergroup.com/global/en/process-chains/from-pulses-to-pulses-flour.html | Product architecture/category boundary; not factory recipe or quantitative default |
| buhler-plansifters | handbook | Plansifters; undated; HTML snapshot 2026-10-02; https://www.buhlergroup.com/content/buhlergroup/global/en/product-families/Plansifters.html | Product architecture/category boundary; not factory recipe or quantitative default |
| satake-polisher | handbook | Rice Polisher KB; undated; HTML snapshot 2026-10-02; https://www.satake-group.com/products/rice_processing_system_modular_plant_system/industrial_size_rice_milling/KB.html | Product architecture/category boundary; not factory recipe or quantitative default |
| satake-husker | handbook | Paddy Husker HR10DDF; February 2022; No.7028-00; https://www.satake-group.com/products/uploads/99603-HR10DDE.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44513 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| wco-hs2022 | official_guidance | HS2022 Chapter84 nomenclature; HS2022 Chapter84; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1684_2022e.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
