---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44242
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Parts for non-electrical joining and gas-operated surface-tempering apparatus

## 1. Scope and Applicability

This candidate covers dedicated parts of both non-electrical soldering/brazing/welding apparatus and gas-operated surface-tempering machines or appliances. The finished reference is one actually supplied dedicated part or declared subassembly, not a whole host, arbitrary spare-parts bundle or customer joining/heat-treatment service. Review the host principal function and unique part interface: an auxiliary electric pump, controller or motion drive does not alone change the principal gas heat source into electric joining. Combined cutting/joining products require actual principal-function evidence; cutting-only equipment and generic standalone hardware do not qualify by resemblance. Source: `un-cpc-44256`.

Harris23A90/5090 welding/brazing tips provide a specific lead-free tellurium-copper and swaged example with metal-to-metal mixer seat; this does not establish all nozzle alloys, tin/lead solder formulations or a universal need for thread sealant. Its equal-pressure versus injector mixer tables identify actual fuel/handle/tip compatibility. The43-2 joining/cutting kit gives a forged-brass handle and stainless connection example; a replacement list or kit capacity does not establish the contents of a separately supplied part. Use actual part drawings/BOM and receipt records for blank, swaging, precision turning/drilling/threading, joining, seal fabrication and subsequent assembly. These are conditional factory routes, not manufacturer-wide production factors. Source: `harris-parts`.

IBEDA describes custom burner and water-quench geometry and relative motion, with fuel-specific gas-path interfaces. FTS documents separate spare flame heads/torch fronts, gas/oxygen/water ports and cleaning or replacement, while its host architecture distinguishes spin, progressive scanning, tooth-at-a-time, combination and stationary systems with conditional quench, movement and control modules. These examples support review of dedicated heat/quench/motion parts across the FULL category; flame-hardening examples do not prove that every surface-tempering part has the same function or quench design. Customer workpiece alloy, hardness/depth, feed rate, capacity and service advice are not a part manufacturing recipe. Sources: `ibeda`; `fts`; `fts-machine-architecture`.

Keep actual make/buy, materials and site operations separate. Bought completed mixer/head/quench/motion assemblies embed upstream manufacture once; partial blanks require actual subsequent site operations. Actual factory leak/pressure/flow/ignition/thermal/quench verification media and attributable reject/rework are manufacturing burdens, not shipped part net mass. Only evidenced retained initial fill or installed supplied accessory belongs in the accepted configuration: an empty cylinder capacity never proves fill and a spare listing never proves shipment. All cards are conditional atomic anchors, not mandatory recipes; add every actual missing alloy, chemical, fuel, waste and species separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44242 |
| classification_refs | CPC3.0:44256 |
| covered_products | Dedicated parts for FULL non-electrical soldering, brazing or welding apparatus AND gas-operated surface-tempering machines/appliances, including eligible gas-path, heat-source, quench and motion subassemblies |
| excluded_products | Complete hosts, solely electric joining/hot-spray parts, cutting-only apparatus without eligible joining principal function, generic standalone valves/pumps/motors/hoses, ordinary heating/furnace burners, consumable fuel/flux/filler or customer surface-treatment service |
| representative_product | Actual finished dedicated part of one supplied configuration; no representative mass |
| production_route | Actual blank forming/swaging/machining/joining/seal fabrication, cleaning/finish, integration and part acceptance; make/buy separated |
| market_state | Actual accepted dedicated part or declared subassembly with evidenced included fills/accessories; not complete host or consumed trial load |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and supply dedicated nonelectric joining and gas surface-tempering apparatus parts |
| How much | 1 kg accepted net part mass of the same supplied configuration |
| How well | Meets declared dedicated interface/material/function/safety and actual part acceptance requirements |
| How long or cycle | One manufacturing/delivery period; no default service life |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dedicated parts for nonelectric joining and gas-operated surface-tempering apparatus; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dedicated part and host principal function; soldering/brazing/welding or gas surface tempering; model/revision/dedicated interface; heat/quench/motion/gas-path architecture; actual material/formulation/completion state; make-buy; supplied accessory/retained initial-fill evidence; test media; accepted calibrated net mass/count; period/site; native units/providers; waste receiver/emitted species/uncertainty |

Declare all qualifiers; normalize directly by accepted net part mass of the same configuration and period. Host capacity, cylinder volume and customer workpiece mass cannot replace this denominator.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Reference is1 kg accepted net part; cp_mass measures same-configuration/common-period net masses, excluding complete host, packing/rejects/consumed test media. |
| `physical_basis` | material/water/species | Mass | kg | Each term uses own assay/moisture/wet-dry basis/density at actual temperature/stocks/reactions/paired returns; gross mass is not contained element. |
| `native_interfaces` | energy/gas/length | Delivered energy/volume/length | MJ; m3; m | Preserve native units; electricity1 kWh=3.6 MJ; gas uses actual T/P or declared standard state and stream-specific density. Cable/hose length uses actual construction own kg/m only if mass conversion needed. Heat supply/return each own mass times own enthalpy/common datum; distinguish gross/already-net, return deducted once. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, mechanical/control assembly, integration, factory test/rework, common services, waste and packing through accepted release. |  |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought dedicated mixer/flame head/quench or motion subassembly/motor/controller includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Include actual factory part pressure/leak/function and documented joining or flame/quench trials, actual test materials, cleaning water, electricity and consumed lubricant. Recovered trial materials uses measured returns and stocks. Customer joined or surface-treated workpieces and downstream plant operation are not dedicated part manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown gas-path/quench-head joining or treatment formulation requires actual supplied-state evidence. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input supplied grade/state/delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Dedicated parts for FULL non-electrical soldering, brazing or welding apparatus AND gas-operated surface-tempering machines/appliances, including eligible gas-path, heat-source, quench and motion subassemblies |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site operations only; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual supplier/receiver grade/state/formulation/geography/technology/period; gaps explicit |
| disclosure | Actual part supplied list/make-buy/fill-accessory versus trial-media roles/conditional exclusions/denominator/uncertainty |

### Part architecture and supplied-interface matrix

| Configuration | Actual interface | Limits |
| --- | --- | --- |
| Soldering/brazing/welding gas-path part | Actual handle/mixer/tip/body/seat, fuel/purity/pressure and connection grade; dedicated delivered state | 23A90/5090 tellurium copper/swaging/metal seat are model-specific; no all-tip copper or solder recipe |
| Gas surface-tempering heat and quench part | Actual fuel/oxygen/water ports and burner/quench geometry; combined or separate heads and supply/return cooling | Review actual tempering/hardening principal function; no default workpiece alloy/feed/heat/quench chemical |
| Dedicated traverse/spin/fixture part | Actual supplied scanning carriage, spin/lift/lathe mechanism or stationary mount and dedicated interface | Host operating architecture does not prove stand-alone spare BOM or shipment; generic bearings/drive separate |
| Pressure/control/cooling subassembly | Only actual included dedicated unit; generic bought valve/pump/motor/cable input stays independently identified | Auxiliary electricity does not redefine principal gas heat; no universal hydraulic fill or retained coolant |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Dedicated blank and gas/thermal/mechanical part fabrication | conditional | Only actual supplied alloy/blank state and site swaging/forming/machining/joining/seal operations; bought finished parts bypass embedded manufacture | foreground | per 1 kg reference flow |
| `finish` | Actual cleaning and protective finishing | conditional | Actual formulation and performed cleaning/coating/cure only; oxygen-service compatibility independently evidenced | foreground | per 1 kg reference flow |
| `integration` | Dedicated part or subassembly integration | required | Actual part configuration and included gas-path/heat/quench/movement/control inputs, not full host assembly by default | foreground | per 1 kg reference flow |
| `test` | Part acceptance verification and attributable rework | required | Actual leak/pressure/flow/function or documented loaded joining/flame/quench verification only; media outside part denominator | foreground | per 1 kg reference flow |
| `dispatch` | Accepted dedicated part release and packing | required | Calibrated accepted net actual part configuration, evidenced included fills/accessories; external packing separate | foreground | per 1 kg reference flow |
| `services` | Residual utility and measured outgoing streams | conditional | Only unassigned common-period utility residual and actual assigned waste/species transfer; no customer use burdens | foreground | per 1 kg reference flow |

### Process: Dedicated blank and gas/thermal/mechanical part fabrication (`fabrication`)

Only actual supplied alloy/blank state and site swaging/forming/machining/joining/seal operations; bought finished parts bypass embedded manufacture。

#### Inputs

##### Product flows

###### Tellurium copper bar (`tellurium_copper`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Tellurium copper bar
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: harris-parts

###### Forged brass blank (`brass`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Forged brass blank
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: harris-parts

###### Non-alloy steel plate (`steel`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Non-alloy steel plate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Stainless steel tube (`stainless`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Stainless steel tube
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### PTFE resin (`ptfe`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Only actual virgin polymer-grade PTFE resin CAS9002-84-0 at plant used in evidenced own moulding/sintering resin fabrication. Bought PTFE plate/rod or completed valve seat is a different supplied state and must not use this resin UUID; completed bought seat embeds polymer manufacture once.

- Selected flow: PTFE resin `f1adfc87-da88-4bcb-ace7-d6b809049f56`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Silver-copper-zinc brazing alloy (`silver_braze`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Silver-copper-zinc brazing alloy
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Borax brazing flux (`flux`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Borax brazing flux
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous nitrogen (`nitrogen`)

Actual protective-atmosphere nitrogen consumed in evidenced part fabrication, with own issue/returns and beginning/end stocks; no universal purging or retained gas fill. Only actual gaseous nitrogen used as a protective atmosphere at plant with compatible GLO production-mix supplier, actual purity and supplied interface. Native Mass kg; measured gas volume conversion uses own actual pressure/temperature/purity density. Bottling-line vented make-up nitrogen, liquid supply and unspecified leak-test gas are not this anchor.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous oxygen (`oxygen`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Actual gaseous oxygen from compatible cryogenic air-separation atplant supplier/purity interface, not liquid oxygen, vaporisation, ambient air or filled-cylinder capacity.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: harris-parts; ibeda

###### Gaseous acetylene (`acetylene`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Actual gaseous ethyne/acetylene fuel matching supplied chemistry/provider; consumed fabrication or part-test gas recorded separately from any demonstrated retained delivery fill. No cylinder solvent or capacity default.

- Selected flow: ethyne; acetylene `0ee52d35-6fea-4c7a-8922-fe2164a5d84b`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: harris-parts; ibeda

###### Delivered alternating-current electricity (`fabrication_electricity`)

Actual attributable subprocess electricity; common service row is only unassigned residual after common-period meters/imports/actual generation/exports/storage reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
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

### Process: Actual cleaning and protective finishing (`finish`)

Actual formulation and performed cleaning/coating/cure only; oxygen-service compatibility independently evidenced。

#### Inputs

##### Product flows

###### Isopropanol (`ipa`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Tap water (`water`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Deionised water (`deionized`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Actual supplied deionised water meeting actual factory grade/provider; no assumed universal purity or quantity.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyester powder coating (`powder`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Actual dry polymer powder formulation, own resin/additive grade, reclaim and cure; not a default polymer type.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`finish_electricity`)

Actual attributable subprocess electricity; common service row is only unassigned residual after common-period meters/imports/actual generation/exports/storage reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
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

### Process: Dedicated part or subassembly integration (`integration`)

Actual part configuration and included gas-path/heat/quench/movement/control inputs, not full host assembly by default。

#### Inputs

##### Product flows

###### Tellurium-copper welding tip (`tip`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Tellurium-copper welding tip
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: harris-parts

###### Oxy-fuel welding mixer (`mixer`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Oxy-fuel welding mixer
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: harris-parts

###### Water-cooled gas surface-tempering flame head (`head`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Water-cooled gas surface-tempering flame head
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ibeda; fts

###### Dedicated water-quench manifold (`quench`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Dedicated water-quench manifold
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ibeda; fts-machine-architecture

###### Dedicated burner traverse carriage (`carrier`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Dedicated burner traverse carriage
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: fts-machine-architecture

###### Oxygen-service valve (`valve`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Oxygen-service valve
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### PTFE valve seat (`seal`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: PTFE valve seat
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Rubber oxy-fuel hose (`hose`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Rubber oxy-fuel hose
- Flow property / unit: Length / m
- Amount rule: Collect attributable quantity with cp_length; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_length`
- Sources: harris-parts; ibeda

###### Complete centrifugal water pump (`pump`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Actual completed supplied centrifugal liquid-water pump within included dedicated quench module, verified actual mechanism/provider/state; standalone generic pump remains its own category, not the reference part.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: fts-machine-architecture

###### AC induction motor (`motor`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Only actual supplied industrial AC induction motor fitting CPC46112 interface and actual voltage/power/type; generic entry does not determine winding, magnet or metal recipe. Bundled drive counted once.

- Selected flow: Electric motor `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Dedicated gas-burner control panel (`control`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Dedicated gas-burner control panel
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: fts-machine-architecture

###### Insulated copper cable (`cable`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Only actual insulated copper <=1000V power cable with extruded insulation/sheath. Native Length m; own actual cable linear density kg/m if a separate BOM mass conversion is needed.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Collect attributable quantity with cp_length; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_length`
- Sources:

###### Mineral lubricating oil (`oil`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`integration_electricity`)

Actual attributable subprocess electricity; common service row is only unassigned residual after common-period meters/imports/actual generation/exports/storage reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
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

### Process: Part acceptance verification and attributable rework (`test`)

Actual leak/pressure/flow/function or documented loaded joining/flame/quench verification only; media outside part denominator。

#### Inputs

##### Product flows

###### Gaseous propane (`propane`)

Only actual factory verification medium consumed by acceptance tests of this part, with measured stocks/returns; exclude customer processing and consumed trials from accepted part net mass.

- Selected flow: Gaseous propane
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: harris-parts; ibeda

###### Non-alloy steel trial coupon (`trial_steel`)

Only actual factory verification medium consumed by acceptance tests of this part, with measured stocks/returns; exclude customer processing and consumed trials from accepted part net mass.

- Selected flow: Non-alloy steel trial coupon
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Tin solder alloy (`solder`)

Only actual factory verification medium consumed by acceptance tests of this part, with measured stocks/returns; exclude customer processing and consumed trials from accepted part net mass.

- Selected flow: Tin solder alloy
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`test_electricity`)

Actual attributable subprocess electricity; common service row is only unassigned residual after common-period meters/imports/actual generation/exports/storage reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
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

### Process: Accepted dedicated part release and packing (`dispatch`)

Calibrated accepted net actual part configuration, evidenced included fills/accessories; external packing separate。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`dispatch_electricity`)

Actual attributable subprocess electricity; common service row is only unassigned residual after common-period meters/imports/actual generation/exports/storage reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Corrugated board packing component (`carton`)

Actual measured external packing of accepted parts, separate from accepted net part mass; record return/reuse cycles only when traced. No assumed package recipe. Only actual C/E/F corrugated board with fibre fraction at least80% and actual compatible recycled content; measured board used in packing, not arbitrary complete box weight.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### LDPE packing foil (`film`)

Actual measured external packing of accepted parts, separate from accepted net part mass; record return/reuse cycles only when traced. No assumed package recipe. Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden EURO pallet (`pallet`)

Actual measured external packing of accepted parts, separate from accepted net part mass; record return/reuse cycles only when traced. No assumed package recipe. Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
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

###### Parts for nonelectric joining and gas surface-tempering apparatus (`reference_product`)

One actually supplied accepted dedicated part of a declared configuration; accepted net part mass excludes complete host, packing and consumed factory trial media.

- Selected flow: Parts for nonelectric joining and gas surface-tempering apparatus
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44256

##### Waste flows

##### Elementary flows

### Process: Residual utility and measured outgoing streams (`services`)

Only unassigned common-period utility residual and actual assigned waste/species transfer; no customer use burdens。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`services_electricity`)

Actual attributable subprocess electricity; common service row is only unassigned residual after common-period meters/imports/actual generation/exports/storage reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Industrial natural-gas heat (`heat`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Only actual matching CN natural-gas industrial-heat delivered Energy interface; provider must match actual factory-test delivery. Own metering, gross/net return and supply state required; supplier fuel stays upstream.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Compressed air (`compressed_air`)

Only actual supplied grade and completion state of this dedicated part; audit actual make/buy interface and subsequent factory work. No complete host or universal formulation is inferred. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Collect attributable quantity with cp_volume; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Untreated steel machining scrap (`scrap`)

Actual measured outgoing untreated steel machining scrap transfer; own assay, moisture and wet/dry basis, beginning/end stocks and paired internal returns. Record the actual receiver route; no treatment/emission equivalence or avoided-product credit. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Copper machining scrap (`copper_waste`)

Actual measured outgoing copper machining scrap transfer; own assay, moisture and wet/dry basis, beginning/end stocks and paired internal returns. Record the actual receiver route; no treatment/emission equivalence or avoided-product credit. Only actual copper machining waste transferred to a receiver with the native hydrometallurgical recycling route and matching contained-copper/impurity composition. Different untreated receiver routes require separate identity; no avoided credit.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Brass machining scrap (`brass_waste`)

Actual measured outgoing brass machining scrap transfer; own assay, moisture and wet/dry basis, beginning/end stocks and paired internal returns. Record the actual receiver route; no treatment/emission equivalence or avoided-product credit.

- Selected flow: Brass machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Industrial cleaning wastewater (`wastewater`)

Actual measured outgoing industrial cleaning wastewater transfer; own assay, moisture and wet/dry basis, beginning/end stocks and paired internal returns. Record the actual receiver route; no treatment/emission equivalence or avoided-product credit.

- Selected flow: Industrial cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Dry powder-coating overspray waste (`sludge`)

Actual measured outgoing dry powder-coating overspray waste transfer; own assay, moisture and wet/dry basis, beginning/end stocks and paired internal returns. Record the actual receiver route; no treatment/emission equivalence or avoided-product credit. Only actual dry powder-coating overspray waste matching supplied waste type; wet sludge or captured liquid/filter media separately needs exact identity and assay.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste mineral oil (`oil_waste`)

Actual measured outgoing waste mineral oil transfer; own assay, moisture and wet/dry basis, beginning/end stocks and paired internal returns. Record the actual receiver route; no treatment/emission equivalence or avoided-product credit. Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent isopropanol solvent (`spent_ipa`)

Actual measured outgoing spent isopropanol solvent transfer; own assay, moisture and wet/dry basis, beginning/end stocks and paired internal returns. Record the actual receiver route; no treatment/emission equivalence or avoided-product credit.

- Selected flow: Spent isopropanol solvent
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide fossil to ordinary air (`co2`)

Only independently measured actual carbon dioxide fossil to ordinary air release with the matched compartment and same-period post-control species concentration/flow/state or independently measured fugitive basis. Captured liquid/media, retained water/solvent and unexplained residual are separate non-air fates. Only actual measured fossil-origin CO2 to ordinary unspecified air; not biogenic, indoor, water or long-term release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide fossil to ordinary air (`co`)

Only independently measured actual carbon monoxide fossil to ordinary air release with the matched compartment and same-period post-control species concentration/flow/state or independently measured fugitive basis. Captured liquid/media, retained water/solvent and unexplained residual are separate non-air fates. Only actual measured fossil-origin CO to ordinary unspecified air; carbon closure alone cannot determine CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Water vapour to ordinary air (`vapour`)

Only independently measured actual water vapour to ordinary air release with the matched compartment and same-period post-control species concentration/flow/state or independently measured fugitive basis. Captured liquid/media, retained water/solvent and unexplained residual are separate non-air fates. Only independently measured actual water-vapour release to ordinary unspecified air; retained cooling water, wastewater and unrelated residual are not air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Isopropanol to ordinary air (`ipa_air`)

Only independently measured actual isopropanol to ordinary air release with the matched compartment and same-period post-control species concentration/flow/state or independently measured fugitive basis. Captured liquid/media, retained water/solvent and unexplained residual are separate non-air fates. Only actual emitted IPA CAS67-63-0 to ordinary unspecified air, matched post-control sampling; not indoor, soil, liquid capture or long-term release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Particulates PM10 to ordinary air (`pm10`)

Only independently measured actual particulates pm10 to ordinary air release with the matched compartment and same-period post-control species concentration/flow/state or independently measured fugitive basis. Captured liquid/media, retained water/solvent and unexplained residual are separate non-air fates. Only actual independently measured whole PM10 particle release to ordinary unspecified air, including its fine fraction, using size-resolved same-period post-control concentration/flow/state and measured fugitive basis. PM2.5–PM10 coarse-only fraction, soot, total unspecified dust or captured powder must not replace this identity; prevent overlap if a fine fraction is separately reported.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated part configurations or use part mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | part drawing/revision; configuration; accepted part identifiers; gross/tare and each calibrated accepted net mass; Naccepted; Dnet; included components/fills; exclusions | Weigh the accepted dedicated part on a calibrated scale, excluding transport packaging and consumed trial media; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | per 1 kg reference flow | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | per 1 kg reference flow | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | per 1 kg reference flow | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | per 1 kg reference flow | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | per 1 kg reference flow | sampling/flow/combined uncertainty |
| cp_volume | all | specific supplied gas/fluid | meter | gas/fluid identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter native volume at actual state: gas T/P, liquid temperature and composition state. Mass conversion uses that actual stream measured density, not generic factors. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | per 1 kg reference flow | T/P/flow/density/calibration |
| cp_length | integration | actual supplied cable or eligible hose | length_meter | actual linear-product construction; cable branch conductor/insulation/sheath/voltage; hose branch material/reinforcement/internal diameter/pressure and gas-liquid compatibility; measured length m; cutting/installed/return; own linear density kg/m; stocks; Q; N | Reconcile native m against received/cut/installed length and return/stocks. If BOM mass is needed use that actual cable or hose measured linear density kg/m, not a generic copper-mass or energy proxy. | m | each cut/installation lot | common manufacturing period | actual configuration linear-product supply interface | per 1 kg reference flow | calibrated length/cut sheet/actual construction/linear density |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `direct_cohort_normalization` | all inventory rows | Divide each attributable native quantity by the sum of calibrated accepted net part masses of the same configuration and period; raw fields are retained in collection and quality tables. | Qattr; Dnet; cp_mass | per 1 kg reference flow |  |

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
| cohort | all inventory rows | Same configuration/common period Qattr includes attributable reject/rework/test; Naccepted counts accepted complete parts; Dnet sums calibrated accepted net masses including actual supplied installed part components/retained fills/accessories, excluding packing/rejects/consumed test charge. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Preserve each numerator native unit and explicit conversion; no mixed configurations. | calibrated net mass/supplied list/acceptance/cohort raw-period records |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, nonelectric joining or gas-operated surface-tempering host principal function and dedicated part interface, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
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
| harris-parts | handbook | Harris International Industrial Equipment Catalogue; Undated catalogue; body footer AB_INT0623_EN; https://d347awuzx0kdse.cloudfront.net/harrisproducts/content-file/Harris%20International%20Industrial%20Equipment%20Catalogue.pdf?v=ebf3379622181d378ba2d3273b0d324d22333bb8 | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44256 | official_guidance | Central Product Classification Version3.0 Explanatory Notes; Version3.0 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| fts-machine-architecture | handbook | Flame Hardening Machines; public snapshot2026-10-02; publication date unconfirmed; https://flametreatingsystems.com/flame-hardening-machines/ | Product architecture/category boundary; not factory recipe or quantitative default |
| ibeda | handbook | Heating burners for flame hardening; public snapshot 2026-10-02; body publication date unconfirmed; https://www.ibeda.com/en/autogenous-engineering/methods-and-characteristics/heating-burners-for-flame-hardening | Product architecture/category boundary; not factory recipe or quantitative default |
| fts | handbook | Flame Treatment Systems products and services; public snapshot 2026-10-02; body publication date unconfirmed; https://flametreatingsystems.com/products-and-services/ | Product architecture/category boundary; not factory recipe or quantitative default |
