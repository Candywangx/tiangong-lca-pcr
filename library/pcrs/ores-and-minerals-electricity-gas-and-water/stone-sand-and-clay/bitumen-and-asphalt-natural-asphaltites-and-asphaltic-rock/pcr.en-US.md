---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.bitumen-and-asphalt-natural-asphaltites-and-asphaltic-rock
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural bitumen and asphalt, asphaltites and asphaltic rock

## 1. Scope and Applicability

Supply the full natural category: native bitumen/asphalt, solid asphaltites and naturally asphaltic rock. Each foreground dataset fixes one actual geological family, accepted product state and extraction/preparation/loading or expressly included receipt gate. Native lake asphalt can retain natural mineral matter; asphaltites include geologically confirmed gilsonite, glance pitch or grahamite examples; asphaltic rock is naturally binder-bearing rock, not manufactured aggregate/binder mixture. The representative natural lake-asphalt gate does not restrict coverage or substitute its identity for other families. Actual lake/surface digging, solid-vein surface/underground mining or asphaltic-rock quarrying are distinct conditional routes. Preparation may be ore-only sorting/loading; crushing, grinding and size separation of asphaltites or asphaltic rock; physical removal of extraneous stones; free-water dewatering/drying; or controlled heating/sifting of natural lake asphalt preserving the declared native binder/mineral identity. Purely physical recovery of native bitumen from a separately identified mineral feed requires its own recovery, water, residue and measured natural-binder gate evidence, not automatic inclusion of tar-sand crude-oil production. Raw oil shale and tar sands have a separate mineral category; an input provider may supply them for an explicitly declared native-bitumen recovery gate, but the unsplit raw ore cannot be relabelled natural binder. Solvent separation, hot-water recovery or heating is included only when actually used and identity remains native; identify every solvent chemically and document recovery and residuals, never infer plant solvent use from laboratory solubility or prescribe a recipe. Foreground protocols initialize family-specific asphaltite/rock routes where external current operating evidence is unavailable; no universal hot refinery route is imposed. Exclude petroleum-refinery bitumen/residues even if called asphalt, oxidised or chemically transformed binder, upgrading/cracking/retorting or fuel/coke production, synthetic asphalt, coal tar/pitch, formulated cutbacks/emulsions/modified binders, asphalt concrete and other manufactured mixtures or finished paving/roofing articles. Heating for water removal and physical separation is not petroleum distillation; chemical alteration or diluent/refinery blend changes the product boundary and requires review. Include actual development/closure, attributable infrastructure, air/water/land controls, residues, storage/handling losses and gate transport; no assumed zero emissions or avoided paving burden. `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.bitumen-and-asphalt-natural-asphaltites-and-asphaltic-rock |
| classification_refs | CPC 3.0:15330 |
| covered_products | Natural bitumen/asphalt retaining native origin, including physically prepared mineral-bearing lake asphalt or independently identified separated natural binder; natural solid asphaltites; natural asphaltic rock in crude/crushed/ground grades |
| excluded_products | Petroleum-refinery bitumen and residues, coal tar/pitch, synthetic or oxidised/chemically transformed binder, pyrolysis/retorted/upgraded petroleum/fuels/coke; unseparated oil-shale/tar-sand reference products; diluted/emulsified/blended modified binder, asphalt concrete, manufactured mixtures and finished articles or transport-only services |
| representative_product | Physically prepared natural lake asphalt at declared gate |
| production_route | Natural-asphalt deposit development and rehabilitation; Family-specific native material extraction; Natural mineral sorting and sizing; Physical natural-asphalt conditioning; Native-mineral water air and residue management; Natural product acceptance packaging and delivery |
| market_state | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg accepted net as-received natural asphalt-category product of one identified family/state/gate; contained soluble native binder is a qualifier, not1 kg pure bitumen or1 kg finished paving mixture |
| How much | 1 kg |
| How well | site/year; native geological origin and actual family; raw mineral versus mineral-bearing asphalt versus separated binder gate; deposit/provider and actual supplier mix; route, physical separation/heating and no chemical upgrading; free water versus crystal water/volatile organic loss; dry-basis method-defined extractable native binder, insoluble mineral/ash and other relevant impurities; laboratory method/solvent and plant solvent separately; mass/stock/recovery and accepted grade/use/size/thermal state; electricity supplier/geography/voltage and heat source; fuels/water source; residue/emission fate; lifetime development/closure and allocation; packaging/transport. Reference natural lake asphalt UUID unresolved; generic Asphalt refinery-origin record is incompatible despite classification label; every other natural gate requires its own confirmed flow identity |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Physically prepared natural lake asphalt at declared gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; native geological origin and actual family; raw mineral versus mineral-bearing asphalt versus separated binder gate; deposit/provider and actual supplier mix; route, physical separation/heating and no chemical upgrading; free water versus crystal water/volatile organic loss; dry-basis method-defined extractable native binder, insoluble mineral/ash and other relevant impurities; laboratory method/solvent and plant solvent separately; mass/stock/recovery and accepted grade/use/size/thermal state; electricity supplier/geography/voltage and heat source; fuels/water source; residue/emission fate; lifetime development/closure and allocation; packaging/transport. Reference natural lake asphalt UUID unresolved; generic Asphalt refinery-origin record is incompatible despite classification label; every other natural gate requires its own confirmed flow identity |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received product kg at the selected natural product gate, excluding packaging/rejects/returns and reconciling stocks. Measure wet-basis free-water fraction w,0 <= w <1: dry product mass = D*(1-w). Crystal water in retained minerals and volatile native organics are not automatically free water; use a phase-preserving method and separate moisture, extraction, ash and ignition-loss results. For measured dry-basis extractable native-binder fraction gB,0 <= gB <=1, contained method-defined binder kg = D*(1-w)*gB; keep D denominator. Record assay solvent, extraction method, residual solvent correction, mineral insolubles and uncertainty; extractable binder, total organic carbon, volatile matter and asphaltenes are different quantities. Do not substitute dry-rock mass for binder mass or assume pure binder from asphaltite name. For separately recovered native binder use its own weighed accepted D and matched moisture/residual mineral/solvent assays; recovery = matched output dry mass*binder fraction / matched input dry mass*binder fraction after stock corrections, not output grade alone. Natural mineral matter within lake asphalt or asphaltic rock is part of one accepted physical product, not separately counted product output. Reconcile dry native organics/mineral solids across feed, accepted grades, separately recovered co-products, rejected rock/tails, captured dust, stock and actual organic losses. Measure new/recycled/evaporated/discharged water and actual solvent makeup/recovery/residuals separately; test physical preservation versus cracking/oxidation and route identity after heating. No assumed yield, default binder fraction, laboratory-solvent plant consumption, avoided refinery bitumen or carbon-storage credit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified native asphalt lake, asphaltite vein or naturally asphaltic rock deposit for integrated extraction; independently supplied named natural material for standalone preparation; native-binder recovery links actual mineral-feed provider and cancels internal transfers |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural bitumen/asphalt retaining native origin, including physically prepared mineral-bearing lake asphalt or independently identified separated natural binder; natural solid asphaltites; natural asphaltic rock in crude/crushed/ground grades |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; native geological origin and actual family; raw mineral versus mineral-bearing asphalt versus separated binder gate; deposit/provider and actual supplier mix; route, physical separation/heating and no chemical upgrading; free water versus crystal water/volatile organic loss; dry-basis method-defined extractable native binder, insoluble mineral/ash and other relevant impurities; laboratory method/solvent and plant solvent separately; mass/stock/recovery and accepted grade/use/size/thermal state; electricity supplier/geography/voltage and heat source; fuels/water source; residue/emission fate; lifetime development/closure and allocation; packaging/transport. Reference natural lake asphalt UUID unresolved; generic Asphalt refinery-origin record is incompatible despite classification label; every other natural gate requires its own confirmed flow identity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply the full natural category: native bitumen/asphalt, solid asphaltites and naturally asphaltic rock. Each foreground dataset fixes one actual geological family, accepted product state and extraction/preparation/loading or expressly included receipt gate. Native lake asphalt can retain natural mineral matter; asphaltites include geologically confirmed gilsonite, glance pitch or grahamite examples; asphaltic rock is naturally binder-bearing rock, not manufactured aggregate/binder mixture. The representative natural lake-asphalt gate does not restrict coverage or substitute its identity for other families. Actual lake/surface digging, solid-vein surface/underground mining or asphaltic-rock quarrying are distinct conditional routes. Preparation may be ore-only sorting/loading; crushing, grinding and size separation of asphaltites or asphaltic rock; physical removal of extraneous stones; free-water dewatering/drying; or controlled heating/sifting of natural lake asphalt preserving the declared native binder/mineral identity. Purely physical recovery of native bitumen from a separately identified mineral feed requires its own recovery, water, residue and measured natural-binder gate evidence, not automatic inclusion of tar-sand crude-oil production. Raw oil shale and tar sands have a separate mineral category; an input provider may supply them for an explicitly declared native-bitumen recovery gate, but the unsplit raw ore cannot be relabelled natural binder. Solvent separation, hot-water recovery or heating is included only when actually used and identity remains native; identify every solvent chemically and document recovery and residuals, never infer plant solvent use from laboratory solubility or prescribe a recipe. Foreground protocols initialize family-specific asphaltite/rock routes where external current operating evidence is unavailable; no universal hot refinery route is imposed. Exclude petroleum-refinery bitumen/residues even if called asphalt, oxidised or chemically transformed binder, upgrading/cracking/retorting or fuel/coke production, synthetic asphalt, coal tar/pitch, formulated cutbacks/emulsions/modified binders, asphalt concrete and other manufactured mixtures or finished paving/roofing articles. Heating for water removal and physical separation is not petroleum distillation; chemical alteration or diluent/refinery blend changes the product boundary and requires review. Include actual development/closure, attributable infrastructure, air/water/land controls, residues, storage/handling losses and gate transport; no assumed zero emissions or avoided paving burden. | `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Natural-asphalt deposit development and rehabilitation | conditional | Actual attributable development/closure | Foreground production | per 1 kg reference flow |
| extraction | Family-specific native material extraction | conditional | Actual lake digging, asphaltite vein mining or asphaltic-rock quarrying, not a universal mine | Foreground production | per 1 kg reference flow |
| preparation | Natural mineral sorting and sizing | conditional | Actual ore-only sorting crushing grinding sieving and clean loading | Foreground production | per 1 kg reference flow |
| conditioning | Physical natural-asphalt conditioning | conditional | Actual free-water removal/heating/sifting or verified native-binder physical separation; no refinery upgrading | Foreground production | per 1 kg reference flow |
| controls | Native-mineral water air and residue management | conditional | Actual mine/plant controls and measured releases | Foreground production | per 1 kg reference flow |
| dispatch | Natural product acceptance packaging and delivery | required | Every selected natural family gate; packaging and receipt delivery conditional | Foreground production | per 1 kg reference flow |

### Process: Natural-asphalt deposit development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Deposit-development diesel (`development_diesel`)

Actual diesel earthmoving/rehabilitation with supplier/grade attribution over lifetime accepted output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

### Process: Family-specific native material extraction (`extraction`)

#### Inputs

##### Product flows

###### Native-material extraction and onsite-haul diesel (`extraction_diesel`)

Actual excavation/loading/haul, supplier/grade confirmed, separate gate delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_extraction_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_diesel`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Purchased mine electricity (`mine_electricity`)

Actual drilling/pumps/conveying/compressed-air generation/underground ventilation by matched supplier/geography/voltage; no waste-incineration-generator identity assumption.

- Selected flow: Purchased mine electricity
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mine_electricity; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mine_electricity`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting where authorized for identified deposit; no mandatory explosive in combustible asphaltite or lake route; other explosives separately.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

##### Elementary flows

###### Natural asphalt in geological lake deposit (`lake_resource`)

Actual native lake material, including measured natural mineral constituents; not petroleum residue.

- Selected flow: Natural asphalt in geological lake deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_lake_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lake_resource`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Natural solid asphaltite in geological vein deposit (`asphaltite_resource`)

Actual identified asphaltite phase/type; gilsonite example is not all native solid carbonaceous material.

- Selected flow: Natural solid asphaltite in geological vein deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_asphaltite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asphaltite_resource`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Natural asphaltic limestone in geological deposit (`asphaltic_rock_resource`)

Actual natural binder-bearing limestone route; asphaltic sandstone needs own concrete resource identity, not tar-sand relabelling.

- Selected flow: Natural asphaltic limestone in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_asphaltic_rock_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asphaltic_rock_resource`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Rejected asphaltite-mine wall rock (`waste_rock`)

Actual rejected wall rock with native organic/mineral content and final fate; kept overburden or saleable rock separate.

- Selected flow: Rejected asphaltite-mine wall rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

### Process: Natural mineral sorting and sizing (`preparation`)

#### Inputs

##### Product flows

###### Supplied natural lake asphalt (`supplied_asphalt`)

Actual independent native lake material with mineral/water/binder assays and upstream provider; not generic refinery Asphalt.

- Selected flow: Supplied natural lake asphalt
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_asphalt; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_asphalt`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Supplied natural gilsonite asphaltite (`supplied_asphaltite`)

Actual independently supplied geologically confirmed gilsonite grade; other asphaltites each distinct identity; internal transfers cancel.

- Selected flow: Supplied natural gilsonite asphaltite
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_asphaltite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_asphaltite`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Supplied natural asphaltic limestone (`supplied_rock`)

Actual independently supplied binder-bearing natural limestone, own assay/provider; sandstone separately.

- Selected flow: Supplied natural asphaltic limestone
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_rock`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Purchased mineral-preparation electricity (`preparation_electricity`)

Actual sorting/crushing/grinding/sieving/pneumatic conveyance with family-specific meters and supplier/voltage; avoid duplicating compressor or mine loads.

- Selected flow: Purchased mineral-preparation electricity
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_preparation_electricity; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation_electricity`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Steel grinding balls (`steel_media`)

Only actual consumed grinding balls in applicable rock/mineral route; other media/tools individually.

- Selected flow: Steel grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_media; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_media`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Natural-asphalt preparation rejected stone (`screen_reject`)

Actual screened stone/reject separated from native asphalt with mineral/binder assay and fate; not product mineral content counted twice.

- Selected flow: Natural-asphalt preparation rejected stone
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_screen_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_screen_reject`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

### Process: Physical natural-asphalt conditioning (`conditioning`)

#### Inputs

##### Product flows

###### Purchased natural-asphalt conditioning electricity (`conditioning_electricity`)

Only actual heater/pump/dewatering/sifting/separation equipment, matched supplier and voltage; not hot-mix or refinery electricity.

- Selected flow: Purchased natural-asphalt conditioning electricity
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_conditioning_electricity; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_electricity`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Natural-asphalt process-heater natural gas (`heater_gas`)

Only actual gas-fired native-material water removal/physical conditioning; fuel composition/provider/meters required, other fuels separate.

- Selected flow: Natural-asphalt process-heater natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_heater_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heater_gas`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Purchased steam for natural-asphalt conditioning (`purchased_steam`)

Only actual external steam heat transfer with pressure/temperature/enthalpy and condensate, distinguish own boiler fuel; no duplicated thermal supply.

- Selected flow: Purchased steam for natural-asphalt conditioning
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_purchased_steam; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_steam`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Purchased treated conditioning make-up water (`makeup_water`)

Only actual compatible treated industrial water crossing boundary; raw abstraction separately, internal reuse not supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_makeup_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_makeup_water`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Native-bitumen separation mineral tailings slurry (`separation_tailings`)

Only actual native-binder separation residue with solids/binder/water and fate; ore-only products have no imposed separation tailings.

- Selected flow: Native-bitumen separation mineral tailings slurry
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_separation_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_separation_tailings`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

### Process: Native-mineral water air and residue management (`controls`)

#### Inputs

##### Product flows

###### Purchased mine-and-plant control electricity (`control_electricity`)

Actual drainage/dust/treatment meters with supplier/voltage and no duplicate conditioning power.

- Selected flow: Purchased mine-and-plant control electricity
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_electricity; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_electricity`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Anionic polyacrylamide flocculant (`polyacrylamide`)

Only actual specified settling polymer/active fraction; do not assume binder separation reagent.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_polyacrylamide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyacrylamide`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

##### Elementary flows

###### Fresh water abstracted from river (`river_water`)

Only actual basin/season river intake, other abstraction source separately.

- Selected flow: Fresh water abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Natural-asphalt process wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer with water/organic/mineral assay; direct release separately.

- Selected flow: Natural-asphalt process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Disposed asphaltite collector dust (`collector_dust`)

Actual captured dust disposal with binder/mineral composition, not returned product or airborne release.

- Selected flow: Disposed asphaltite collector dust
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_collector_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collector_dust`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

##### Elementary flows

###### Asphaltite PM10 released to outdoor air (`pm10_air`)

Only actual after-control asphaltite dust with size/composition/compartment; other mineral dust separately.

- Selected flow: Asphaltite PM10 released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Fossil carbon dioxide released to outdoor air (`co2_air`)

Actual foreground combustion evidence, not automatic oxidation of contained native binder or negative storage credit.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Suspended mineral solids released to receiving water (`tss_water`)

Actual receiving-water TSS discharge with matched volume/concentration/background; managed slurry is not release.

- Selected flow: Suspended mineral solids released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tss_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tss_water`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

### Process: Natural product acceptance packaging and delivery (`dispatch`)

#### Inputs

##### Product flows

###### Natural-product gate-handling diesel (`loading_diesel`)

Actual loading/handling with supplier/grade, distinct from extraction/delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Included natural-product delivery diesel (`delivery_diesel`)

Only actual expressly included receipt delivery; provider transport separately without double fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

###### Steel natural-asphalt drum (`steel_drum`)

Only actual consumed allocated drum mass at packaged native-asphalt gate, exclude from D and track return/reuse; bags/liners/pallets each separate.

- Selected flow: Steel natural-asphalt drum
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_drum; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_drum`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Physically prepared natural lake asphalt at declared gate (`final_product`)

Representative natural lake asphalt retaining native binder and measured native mineral matter after actual water removal/sifting. Naturalorigin Product/Mass UUID unresolved; refinery Asphalt is rejected. For an asphaltite, asphaltic rock or separately recovered natural-bitumen dataset replace the reference product with that one concrete confirmed gate identity and use its own independently measured D; keep all family-specific applicable rules, never treat the representative as universal or simultaneously sum different gates.

- Selected flow: Physically prepared natural lake asphalt at declared gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `wco-hs27-2022`, `usgs-native-bitumen-1957`, `tla-natural-preparation-2026`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide distinct natural lake, asphaltite/rock extraction, preparation and independently recovered binder/mineral circuits. Retain unallocated joint inventories and separate actual accepted co-output masses. Native binder and insoluble mineral within one sold asphaltic rock/lake-asphalt product are compositional fractions, not two co-products. Rejected mineral is saleable only with independently confirmed specification/mass/fate. Use demonstrated physical causality or matched grade/price/period economic allocation and sensitivity where needed; supplied mineral carries upstream dataset or documented justified cut-off. Lifetime development/closure allocated once over measured accepted production. No automatic virgin petroleum-bitumen, road durability, fuel, waste-disposal or storage credits. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_lake_resource | extraction | `lake_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_asphaltite_resource | extraction | `asphaltite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_asphaltic_rock_resource | extraction | `asphaltic_rock_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_extraction_diesel | extraction | `extraction_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mine_electricity | extraction | `mine_electricity` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Collect matched purchased electricity meter readings by equipment/site/period and actual supplier geography, generation mix, voltage and transmission point. Convert1 kWh =3.6 MJ; separately record onsite generation fuel and electricity transfers without double-counting. No incineration-specific generation flow assigned to generic purchased site power; resolve a compatible Product/Energy flow before complete dataset use. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_asphalt | preparation | `supplied_asphalt` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_asphaltite | preparation | `supplied_asphaltite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_rock | preparation | `supplied_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_preparation_electricity | preparation | `preparation_electricity` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Collect matched purchased electricity meter readings by equipment/site/period and actual supplier geography, generation mix, voltage and transmission point. Convert1 kWh =3.6 MJ; separately record onsite generation fuel and electricity transfers without double-counting. No incineration-specific generation flow assigned to generic purchased site power; resolve a compatible Product/Energy flow before complete dataset use. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_media | preparation | `steel_media` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_screen_reject | preparation | `screen_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_conditioning_electricity | conditioning | `conditioning_electricity` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Collect matched purchased electricity meter readings by equipment/site/period and actual supplier geography, generation mix, voltage and transmission point. Convert1 kWh =3.6 MJ; separately record onsite generation fuel and electricity transfers without double-counting. No incineration-specific generation flow assigned to generic purchased site power; resolve a compatible Product/Energy flow before complete dataset use. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_heater_gas | conditioning | `heater_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_purchased_steam | conditioning | `purchased_steam` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_makeup_water | conditioning | `makeup_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_separation_tailings | conditioning | `separation_tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | controls | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_electricity | controls | `control_electricity` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Collect matched purchased electricity meter readings by equipment/site/period and actual supplier geography, generation mix, voltage and transmission point. Convert1 kWh =3.6 MJ; separately record onsite generation fuel and electricity transfers without double-counting. No incineration-specific generation flow assigned to generic purchased site power; resolve a compatible Product/Energy flow before complete dataset use. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_polyacrylamide | controls | `polyacrylamide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_collector_dust | controls | `collector_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independent wet/dry mineral/organic net masses, phase-preserving free-water method, declared solvent-extraction binder assay, mineral insolubles/ash and stocks for same batch/period and actual provider/fate. Separate geological native organics from refinery or added solvent, analytical solvent from plant consumption, raw-rock output from recovered binder. No purity/yield default; matched feed/output assays required for recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tss_water | controls | `tss_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match net receiving-water discharge V m3 and TSS concentration c mg/L: mineral solids kg = c*V/1000. Retain sampling/background, mineral/binder composition, compartment/period and uncertainty. Dissolved organic species and suspended native binder require separate specific identities/assays without double-counting one physical release, not an undifferentiated hydrocarbons row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_drum | dispatch | `steel_drum` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net accepted gate weighing of positive D kg, excluding packaging/rejects/returns and matching stocks. Confirm native family/origin and selected actual product gate; measure free water w with method preserving binder and mineral crystal water, dry-basis extractable binder gB and mineral insolubles/ash with declared analytical extraction method and residual-solvent corrections. Dry mass D*(1-w), contained method-defined binder D*(1-w)*gB; maintain D denominator and no default composition. Raw asphaltite/rock versus separated binder each uses its own full accepted product mass and independent assay, not contained-binder kg substituted for product. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted native lake-asphalt, natural separated-bitumen, solid asphaltite or asphaltic-rock product with actual mineral/organic identity, free water, dry-basis extractable binder/insoluble mineral assay, particle/thermal state and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received product kg at the selected natural product gate, excluding packaging/rejects/returns and reconciling stocks. Measure wet-basis free-water fraction w,0 <= w <1: dry product mass = D*(1-w). Crystal water in retained minerals and volatile native organics are not automatically free water; use a phase-preserving method and separate moisture, extraction, ash and ignition-loss results. For measured dry-basis extractable native-binder fraction gB,0 <= gB <=1, contained method-defined binder kg = D*(1-w)*gB; keep D denominator. Record assay solvent, extraction method, residual solvent correction, mineral insolubles and uncertainty; extractable binder, total organic carbon, volatile matter and asphaltenes are different quantities. Do not substitute dry-rock mass for binder mass or assume pure binder from asphaltite name. For separately recovered native binder use its own weighed accepted D and matched moisture/residual mineral/solvent assays; recovery = matched output dry mass*binder fraction / matched input dry mass*binder fraction after stock corrections, not output grade alone. Natural mineral matter within lake asphalt or asphaltic rock is part of one accepted physical product, not separately counted product output. Reconcile dry native organics/mineral solids across feed, accepted grades, separately recovered co-products, rejected rock/tails, captured dust, stock and actual organic losses. Measure new/recycled/evaporated/discharged water and actual solvent makeup/recovery/residuals separately; test physical preservation versus cracking/oxidation and route identity after heating. No assumed yield, default binder fraction, laboratory-solvent plant consumption, avoided refinery bitumen or carbon-storage credit. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received product kg at the selected natural product gate, excluding packaging/rejects/returns and reconciling stocks. Measure wet-basis free-water fraction w,0 <= w <1: dry product mass = D*(1-w). Crystal water in retained minerals and volatile native organics are not automatically free water; use a phase-preserving method and separate moisture, extraction, ash and ignition-loss results. For measured dry-basis extractable native-binder fraction gB,0 <= gB <=1, contained method-defined binder kg = D*(1-w)*gB; keep D denominator. Record assay solvent, extraction method, residual solvent correction, mineral insolubles and uncertainty; extractable binder, total organic carbon, volatile matter and asphaltenes are different quantities. Do not substitute dry-rock mass for binder mass or assume pure binder from asphaltite name. For separately recovered native binder use its own weighed accepted D and matched moisture/residual mineral/solvent assays; recovery = matched output dry mass*binder fraction / matched input dry mass*binder fraction after stock corrections, not output grade alone. Natural mineral matter within lake asphalt or asphaltic rock is part of one accepted physical product, not separately counted product output. Reconcile dry native organics/mineral solids across feed, accepted grades, separately recovered co-products, rejected rock/tails, captured dust, stock and actual organic losses. Measure new/recycled/evaporated/discharged water and actual solvent makeup/recovery/residuals separately; test physical preservation versus cracking/oxidation and route identity after heating. No assumed yield, default binder fraction, laboratory-solvent plant consumption, avoided refinery bitumen or carbon-storage credit. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg accepted net as-received natural asphalt-category product of one identified family/state/gate; contained soluble native binder is a qualifier, not1 kg pure bitumen or1 kg finished paving mixture |
| excluded_use | Petroleum-refinery bitumen and residues, coal tar/pitch, synthetic or oxidised/chemically transformed binder, pyrolysis/retorted/upgraded petroleum/fuels/coke; unseparated oil-shale/tar-sand reference products; diluted/emulsified/blended modified binder, asphalt concrete, manufactured mixtures and finished articles or transport-only services |
| required_metadata | site/year; native geological origin and actual family; raw mineral versus mineral-bearing asphalt versus separated binder gate; deposit/provider and actual supplier mix; route, physical separation/heating and no chemical upgrading; free water versus crystal water/volatile organic loss; dry-basis method-defined extractable native binder, insoluble mineral/ash and other relevant impurities; laboratory method/solvent and plant solvent separately; mass/stock/recovery and accepted grade/use/size/thermal state; electricity supplier/geography/voltage and heat source; fuels/water source; residue/emission fate; lifetime development/closure and allocation; packaging/transport. Reference natural lake asphalt UUID unresolved; generic Asphalt refinery-origin record is incompatible despite classification label; every other natural gate requires its own confirmed flow identity |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| wco-hs27-2022 | official_guidance | WCO HS Nomenclature2022 Chapter27, original PDF p.4 headings2713/2714/2715. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0527_2022e.pdf?la=en | Natural bitumen/asphalt, asphaltites and asphaltic-rock identity versus petroleum residues and manufactured mixtures; oil-shale/tar-sand mineral gate separate. No new HS mapping or quantities. |
| usgs-native-bitumen-1957 | literature | Kenneth G. Bell, Uranium in Petroleum and Rock Asphalt, USGS Trace Elements Investigations697, September1957, preliminary report, original PDF pp.16–21 (printed12–17), Definitions and sampling paragraphs. https://pubs.usgs.gov/tei/697/report.pdf | Historical native asphalt, asphaltite and asphaltic-rock distinctions, including solid gilsonite/glance pitch/grahamite examples and host-mineral distinction. Preliminary terminology only, not modern intensity, solvent prescription, purity or radiological range. |
| tla-natural-preparation-2026 | literature | Lake Asphalt of Trinidad and Tobago (1978) Limited, About Us, original first-party web page, snapshot1 October2026, natural-asphalt heating/sifting and purchased-refinery-product paragraphs. https://trinidadlakeasphalt.com/about-us/ | One natural lake-asphalt heating/sifting preparation route versus separately manufactured emulsions/coatings and purchased petroleum bitumen. No marketing performance claims, universal temperatures, composition, yield or doses. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
