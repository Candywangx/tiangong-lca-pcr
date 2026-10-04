---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-n-e-c-of-machinery-for-processing-tobacco
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Dedicated parts n.e.c. of tobacco-processing machinery

## 1. Scope and Applicability

This candidate covers the FULL parts n.e.c. of machinery for processing tobacco category. Determine each actual host's principal function and the dedicated supplied part interface: primary bale opening/slicing, conditioning, flattening/cutting/blending, tobacco reconstitution and secondary rod/filter/mouthpiece processing. The reference is one accepted dedicated part or declared assembly in one supplied configuration; it is not a whole machine, arbitrary spare bundle or customer tobacco-processing service. Generic hardware, an independent material article or cutting tool requires its own product-boundary review. Use in a tobacco factory alone does not qualify a part. Independent general drying, conveying or packaging hosts and their parts retain their actual boundaries. Source: `un-cpc-44523`.

COMAS conditioning-cylinder architecture describes paddles/pins, heated body and services cubicle with actual water/steam interfaces. Stem-flattening equipment describes hardened rotating rollers, overload side pistons and vibratory feeding; blending describes doffers, bottom slat retention and a common carriage. Reconstitution describes grinding/mixing and roll-coating/laminating with integral drying. These actual host interfaces anchor conditional drum/paddle/roller/slat assemblies, not universal part BOM, material grades or first fills. Customer tobacco slurry/gum formulation, humidity, throughput and finished tobacco are outside part manufacture; they become factory qualification media only if an actual part acceptance trial consumes them. Sources: `comas-dcrb`; `comas-flatten`; `comas-blending`; `comas-recon`.

SAMI describes actual cigarette/filter garniture format units, filter attachment drums, glue rollers, guides and knife-head assemblies. Whitson manufactures AND sources parts to OEM drawings, including cutter knife feed pawls/tappets/shear pins and brass conveyor slats; determine actual make versus bought completion separately. Körber MSM identifies modular filter/segment/mouthpiece architectures; G.D maker source is only a product directory and supports scope, not part manufacturing or detailed BOM. Packer/overwrapper knives or format units in SAMI/Steellogy lists are not automatically dedicated tobacco-processing parts: review the actual host principal function and generic packaging boundary separately. Sources: `sami-parts`; `whitson-parts`; `koerber-msm`; `gd-maker`.

Steellogy's actual manufacturer description supports drawing/sample-specific manufacture, machining, in-house heat treatment, grinding and inspection of supplied knives. Different steel/carbide/HSS/ceramic alternatives, proprietary OEM geometries and customer wear comparisons do not establish one grade, hardness recipe or production energy. Review an independently supplied knife/tool versus a dedicated assembled cutter head or tobacco-machine component; material alone does not settle the category. COMAS original spare/wear supply and repair/refurbishment service are different interfaces. New part production and declared used-part refurbishment must not share an unstated starting state. Sources: `steellogy-knives`; `comas-parts`.

Akyurek's actual slicer and DCC cases show conditional feed knife/cylinder/paddle, drive and vacuum-filter/pulse-valve interfaces. The slicer prose and knife material table disagree, so no default knife grade is accepted; contact-surface 304L does not imply all-part stainless steel. DCC polyurethane thickness and wing count, leaf moisture and customer throughput are case details, not part BOM quantities or manufacturing denominator. Only actual supplied components, retained initial fill and accessories enter accepted net part mass. Consumed qualification leaf, cut tobacco, paper, filter rods, water/gas and lubricant belong in attributable Q and remain outside Dnet; replacement availability does not prove shipment. Each atomic card is conditional; collect every additional actual alloy, coating/adhesive, wear element, media, waste and emission separately. Source: `akyurek-processing`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-n-e-c-of-machinery-for-processing-tobacco |
| classification_refs | CPC3.0:44523 |
| covered_products | Dedicated parts of tobacco-processing machinery n.e.c., covering primary processing, reconstitution, tobacco-rod and filter/mouthpiece machinery interfaces |
| excluded_products | Complete hosts, customer tobacco production, general hardware, independent material/cutting-tool articles and parts of generic packaging/wrapping machines |
| representative_product | Actual finished dedicated part of one supplied configuration; no representative mass |
| production_route | Actual forming/heat treatment/machining/joining/grinding/cleaning/conditional coating, assembly and part acceptance; make/buy and new/reconditioned starting states separated |
| market_state | Actual accepted dedicated part or declared subassembly with evidenced included fills/accessories; not complete host or consumed trial load |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and supply dedicated tobacco-processing machinery parts n.e.c. across primary, reconstitution and rod/filter/mouthpiece interfaces |
| How much | 1 kg accepted net part mass of the same supplied configuration |
| How well | Meets declared dedicated interface/material/function/safety and actual part acceptance requirements |
| How long or cycle | One manufacturing/delivery period; no default service life |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dedicated parts n.e.c. of machinery for processing tobacco; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dedicated part and primary/reconstitution/tobacco-rod/filter/mouthpiece host principal function; model/drawing/revision/dedicated interface; forming/heat treatment/machining/finish/mechanical and relevant water/gas architecture; independent tool/material and general packaging boundaries; new/reconditioned actual starting state; actual material/formulation/completion state; make-buy; supplied accessory/retained initial-fill evidence; test media; accepted calibrated net mass/count; period/site; native units/providers; waste receiver/emitted species/uncertainty |

Declare all qualifiers; normalize directly by accepted net part mass of the same configuration and period. Marketed host capacity and customer tobacco/cigarette/filter throughput mass cannot replace this denominator.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Reference is 1 kg accepted net part; cp_mass measures same-configuration/common-period net masses, excluding complete host, packing/rejects/consumed test media. |
| `physical_basis` | material/water/species | Mass | kg | Each term uses own assay/moisture/wet-dry basis/density at actual temperature/stocks/reactions/paired returns; gross mass is not contained element. |
| `native_interfaces` | energy/gas/length | Delivered energy/volume/length | MJ; m3; m | Preserve native units; electricity 1 kWh=3.6 MJ; gas uses actual T/P or declared standard state and stream-specific density. Cable/hose length uses actual construction own kg/m only if mass conversion needed. Heat supply/return each own mass times own enthalpy/common datum; distinguish gross/already-net, return deducted once. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, mechanical/control assembly, integration, factory test/rework, common services, waste and packing through accepted release. |  |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought conditioning drum/paddle, flattening roller, cutter head, garniture, filter-attaching drum/glue roller or conveyor slat includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Include actual factory dimensional/material/hardness/motion and actually applicable safety acceptance and documented manufacturing qualification trials, actual test media, cleaning water, electricity and consumed lubricant. Recovered trial materials uses measured returns and stocks. Customer tobacco, cigarettes or filter rods and downstream plant operation are not dedicated part manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown actual alloy, heat-treatment medium, coating, adhesive or trial-media formulation requires actual supplied-state evidence. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input supplied grade/state/delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Dedicated parts of tobacco-processing machinery n.e.c., covering primary processing, reconstitution, tobacco-rod and filter/mouthpiece machinery interfaces |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site operations only; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual supplier/receiver grade/state/formulation/geography/technology/period; gaps explicit |
| disclosure | Actual part supplied list/make-buy/fill-accessory versus trial-media roles/conditional exclusions/denominator/uncertainty |

### Part architecture and supplied-interface matrix

| Configuration | Actual interface | Limits |
| --- | --- | --- |
| Primary conditioning part | Actual drum/paddle/pin/frame/service interface and supplied completion | Contact grade is local; no universal water/steam/oil fill |
| Flattening/cutting part | Actual hardened roller, overload mechanism or cutter head/drawing | Knife/tool material boundary and grade conflict reviewed; no default quantities |
| Blending/conveying part | Actual dedicated doffer/slat/pawl/carriage geometry and host fit | General conveyor host or brass stock is not finished dedicated part |
| Reconstitution part | Actual roll-coater/laminator and integral-dryer part interface | Customer tobacco slurry recipe outside part manufacture |
| Rod/filter/mouthpiece part | Actual garniture/tipping drum/glue roller/suction band dedicated supply | Packaging list alone insufficient; media consumed in actual factory test only |
| New or refurbished part | Actual drawing/revision, raw or used starting state and make/buy | Repair service not new-part recipe; spare availability not shipment |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Actual dedicated part fabrication | conditional | Only actual stock/blank and machining/forming/joining/heat treatment; bought finished input bypasses embedded operations | foreground | per 1 kg reference flow |
| `finish` | Actual precision finishing cleaning and coating | conditional | Actual grinding/fluid dilution/cleaning/coating formulation; no universal surface treatment | foreground | per 1 kg reference flow |
| `integration` | Actual supplied part or assembly completion | conditional | Only actual included dedicated components and assembly/retained fills; no host or spare bundle default | foreground | per 1 kg reference flow |
| `test` | Part acceptance and attributable rework | required | Actual dimension/material/hardness/motion and relevant safety qualification, only documented loaded trial; consumed media outside Dnet | foreground | per 1 kg reference flow |
| `dispatch` | Accepted part release and packing | required | Calibrated accepted net supplied part mass with actual included components/fills; external packing separate | foreground | per 1 kg reference flow |
| `services` | Residual utilities and outgoing streams | conditional | Only unassigned common-period utility residual and actual waste/emissions, no customer tobacco production | foreground | per 1 kg reference flow |

### Process: Actual dedicated part fabrication (`fabrication`)

Only actual stock/blank and machining/forming/joining/heat treatment; bought finished input bypasses embedded operations。

#### Inputs

##### Product flows

###### Non-alloy steel plate (`steel`)

Actual supplied non-alloy steel plate for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe.

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

###### Cold-rolled stainless steel sheet (`stainless`)

Actual supplied cold-rolled stainless steel sheet for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe.

- Selected flow: Cold-rolled stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: akyurek-processing; comas-blending

###### Alloy tool steel bar (`tool_steel`)

Actual supplied alloy tool steel bar for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe.

- Selected flow: Alloy tool steel bar
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: steellogy-knives

###### Brass bar (`brass`)

Actual supplied brass bar for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe. Only actual supplied copper-zinc brass bar matching CPC41512 bar/rod/profile, actual Cu/Zn/other assay, grade, dimensions and provider. No forged blank, finished conveyor slat or universal Cu/Zn fraction inferred.

- Selected flow: Brass `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: whitson-parts

###### Uncoated steel welding wire (`weldwire`)

Actual supplied uncoated steel welding wire for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe.

- Selected flow: Uncoated steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous argon (`argon`)

Actual supplied gaseous argon for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe.

- Selected flow: Gaseous argon
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous natural gas (`naturalgas`)

Actual supplied gaseous natural gas for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe. Actual gaseous fuel mass needs its own composition/state/provider and calorific conversion; project-specific CHP Volume and expert-assumed oven Energy records are not compatible fuel-mass identities.

- Selected flow: Gaseous natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`fabrication_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

### Process: Actual precision finishing cleaning and coating (`finish`)

Actual grinding/fluid dilution/cleaning/coating formulation; no universal surface treatment。

#### Inputs

##### Product flows

###### Water-miscible metalworking fluid concentrate (`coolant`)

Actual supplied water-miscible metalworking fluid concentrate for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe.

- Selected flow: Water-miscible metalworking fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Bonded alumina grinding wheel (`abrasive`)

Actual supplied bonded alumina grinding wheel for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe.

- Selected flow: Bonded alumina grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: steellogy-knives

###### Isopropanol (`ipa`)

Actual supplied isopropanol for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

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

Actual supplied tap water for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

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

Actual supplied deionised water for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe. Only actual deionised supplied water with compatible purity and provider; no municipal water, arbitrary process water or universal plating-water default.

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

###### Epoxy powder coating (`powder`)

Actual supplied epoxy powder coating for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe. Only actual compatible dry epoxy resin/additive supply; no coating on every part. Actual dry polymer powder formulation, own resin/additive grade, reclaim and cure; not a default polymer type.

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

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

### Process: Actual supplied part or assembly completion (`integration`)

Only actual included dedicated components and assembly/retained fills; no host or spare bundle default。

#### Inputs

##### Product flows

###### Finished tobacco conditioning-cylinder support frame (`frame`)

Actual supplied finished tobacco conditioning-cylinder support frame included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished tobacco conditioning-cylinder support frame
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-dcrb

###### Finished stainless tobacco conditioning drum (`drum`)

Actual supplied finished stainless tobacco conditioning drum included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished stainless tobacco conditioning drum
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-dcrb

###### Finished stainless conditioning-cylinder paddle (`paddle`)

Actual supplied finished stainless conditioning-cylinder paddle included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished stainless conditioning-cylinder paddle
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-dcrb; akyurek-processing

###### Finished hardened tobacco stem-flattening roller (`rolls`)

Actual supplied finished hardened tobacco stem-flattening roller included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished hardened tobacco stem-flattening roller
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-flatten

###### Complete tobacco cutter knife-head assembly (`knifehead`)

Actual supplied complete tobacco cutter knife-head assembly included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Complete tobacco cutter knife-head assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: sami-parts; steellogy-knives; whitson-parts

###### Complete cigarette-maker garniture format unit (`garniture`)

Actual supplied complete cigarette-maker garniture format unit included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Complete cigarette-maker garniture format unit
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: sami-parts

###### Finished filter-attaching tipping drum (`tippingdrum`)

Actual supplied finished filter-attaching tipping drum included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished filter-attaching tipping drum
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: sami-parts; koerber-msm

###### Finished filter-attaching glue roller (`glueroller`)

Actual supplied finished filter-attaching glue roller included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished filter-attaching glue roller
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: sami-parts

###### Finished brass tobacco conveyor band slat (`slats`)

Actual supplied finished brass tobacco conveyor band slat included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished brass tobacco conveyor band slat
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: whitson-parts; comas-blending

###### Finished tobacco-reconstitution roll-coater roller (`reconroller`)

Actual supplied finished tobacco-reconstitution roll-coater roller included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished tobacco-reconstitution roll-coater roller
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-recon

###### Finished steel cigarette-maker suction band (`suctionband`)

Actual supplied finished steel cigarette-maker suction band included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM.

- Selected flow: Finished steel cigarette-maker suction band
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete ball or roller bearing (`bearing`)

Actual supplied complete ball or roller bearing included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM. Only actual supplied complete ball/roller bearing, compatible material, geometry and actual supplier; not shaft, housing or roller itself.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete alternating-current motor (`motor`)

Actual supplied complete alternating-current motor included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM. Only actual supplied industrial AC induction motor fitting CPC46112 interface and actual voltage/power/type; generic entry does not determine winding, magnet or metal recipe. Bundled drive counted once.

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

###### Petroleum lubricating oil (`oil`)

Actual supplied petroleum lubricating oil included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM. Only actual petroleum-derived lubricating oil supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil, consistent with the CPC333 supplied interface, matching actual grade/additives, delivered state and provider; do not invent formulation fractions. Native Mass/kg; separate installed retained fill from actual factory consumption, losses and used contaminated Waste. Calorific namefield does not make oil an Energy flow or assume combustion.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Insulated copper power cable (`cable`)

Actual supplied insulated copper power cable included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM. Only actual insulated copper <=1000V power cable with extruded insulation/sheath. Native Length m; own actual cable linear density kg/m if a separate BOM mass conversion is needed.

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

###### Mineral hydraulic oil (`hydraulic`)

Actual supplied mineral hydraulic oil included in the declared dedicated part or subassembly and compatible with its host/drawing/interface. Bought completed state embeds manufacture once; collect only subsequent site work. Separate retained fill from consumed/lost lubricant; replacement list is not supplied BOM. Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Collect attributable quantity with cp_volume; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Delivered alternating-current electricity (`integration_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

### Process: Part acceptance and attributable rework (`test`)

Actual dimension/material/hardness/motion and relevant safety qualification, only documented loaded trial; consumed media outside Dnet。

#### Inputs

##### Product flows

###### Cured tobacco leaf factory trial (`leaf`)

Actual cured tobacco leaf factory trial consumed only in a documented factory qualification of the dedicated supplied part, with measured issue/return/stocks and own wet mass/composition. Customer operating recipes or throughput do not prove factory consumption; consumed medium enters Qattr, never Dnet.

- Selected flow: Cured tobacco leaf factory trial
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-dcrb

###### Cut manufactured tobacco factory trial (`cut_trial`)

Actual cut manufactured tobacco factory trial consumed only in a documented factory qualification of the dedicated supplied part, with measured issue/return/stocks and own wet mass/composition. Customer operating recipes or throughput do not prove factory consumption; consumed medium enters Qattr, never Dnet. Only actual finished manufactured tobacco cut filler compatible with the supplied25091/HS24.03 interface and supplier, actual tobacco or substitute composition and cut/form reviewed. Official Chinese display does not establish an artificially synthesised material; extracts and uncut mixtures are not this cut feed. Intermediate uncut blend, fresh leaf, recon sheet and complete cigarettes are different supplies; no one grade or recipe presumed. Factory trials only, excluded from part Dnet.

- Selected flow: Manufactured tobacco `0b1039e5-6251-4030-a2fd-707a1f32f365`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: gd-maker

###### Cigarette paper factory trial (`paper`)

Actual cigarette paper factory trial consumed only in a documented factory qualification of the dedicated supplied part, with measured issue/return/stocks and own wet mass/composition. Customer operating recipes or throughput do not prove factory consumption; consumed medium enters Qattr, never Dnet. Only actual cigarette paper supplied in compatible cut shape/booklet/tube or roll width≤5cm; actual grade, width, wet mass and paper-web provider reviewed; no general tissue/packing board or wider roll proxy.

- Selected flow: Cigarette Paper `ae3a445e-c064-4cba-abd3-cfeab698f8ca`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: sami-parts

###### Finished cellulose-acetate cigarette filter rod factory trial (`filterrod`)

Actual finished cellulose-acetate cigarette filter rod factory trial consumed only in a documented factory qualification of the dedicated supplied part, with measured issue/return/stocks and own wet mass/composition. Customer operating recipes or throughput do not prove factory consumption; consumed medium enters Qattr, never Dnet.

- Selected flow: Finished cellulose-acetate cigarette filter rod factory trial
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: koerber-msm

###### Tap water factory qualification (`test_water`)

Actual tap water factory qualification consumed only in a documented factory qualification of the dedicated supplied part, with measured issue/return/stocks and own wet mass/composition. Customer operating recipes or throughput do not prove factory consumption; consumed medium enters Qattr, never Dnet. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

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

###### Gaseous nitrogen factory qualification (`nitrogen`)

Actual gaseous nitrogen factory qualification consumed only in a documented factory qualification of the dedicated supplied part, with measured issue/return/stocks and own wet mass/composition. Customer operating recipes or throughput do not prove factory consumption; consumed medium enters Qattr, never Dnet. Only actual GLO at-plant protective-atmosphere gaseous nitrogen compatible with documented factory part qualification, actual purity/state and supplier; not universal bottled/liquid gas, vent loss or customer production consumption.

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

###### Delivered alternating-current electricity (`test_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

### Process: Accepted part release and packing (`dispatch`)

Calibrated accepted net supplied part mass with actual included components/fills; external packing separate。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`dispatch_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

###### Corrugated fibreboard packing (`board`)

Actual corrugated fibreboard packing issued for shipment, measured independently of accepted net part mass; document composition, stocks, returns and actual reuse, without default box dimensions or reuse count. Actual C/E/F corrugated fibreboard with fibre≥80% and evidenced recycled-content construction; supplied board not complete crate.

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

###### LDPE packing foil (`foil`)

Actual ldpe packing foil issued for shipment, measured independently of accepted net part mass; document composition, stocks, returns and actual reuse, without default box dimensions or reuse count. Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved.

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

Actual wooden euro pallet issued for shipment, measured independently of accepted net part mass; document composition, stocks, returns and actual reuse, without default box dimensions or reuse count. Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count.

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

###### Finished dedicated tobacco-processing machinery part (`reference_product`)

Actual accepted dedicated tobacco-processing part of one declared supplied configuration, weighed net with included components and evidenced retained fills/accessories. Exclude whole hosts, arbitrary spare bundles, generic material/tool articles, packing, rejects and consumed factory trial media; no nominal mass or customer tobacco throughput denominator.

- Selected flow: Finished dedicated tobacco-processing machinery part
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44523

##### Waste flows

##### Elementary flows

### Process: Residual utilities and outgoing streams (`services`)

Only unassigned common-period utility residual and actual waste/emissions, no customer tobacco production。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`services_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

###### Purchased industrial natural-gas heat (`heat`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual compatible CN at-plant natural-gas industrial heat Energy delivery and factory provider/period. Independently meter supply/return gross/net thermodynamic state; supplier fuel stays upstream, not site combustion.

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

Actual supplied compressed air for the evidenced part fabrication/finishing route, matching its own grade, chemistry, form/completion and supplier; measure issue, returns and stocks. A finished bought component bypasses its embedded raw stock and operations; no universal grade or recipe. Only actual compatible supplied compressed air with own delivery T/P/standard state, purity and supplier; native Volume/m3. Onsite compressor electricity and bought compressed-air provider burden cannot be counted twice.

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

Actual measured outgoing untreated steel machining scrap from this part manufacturing or evidenced factory qualification; weigh/sample its own composition, moisture, contamination and stocks, pair internal returns and document the actual receiver route. Physical waste transfer is distinct from elementary releases; no assumed avoided credit. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

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

###### Copper cable offcut waste (`copper_waste`)

Actual measured outgoing copper cable offcut waste from this part manufacturing or evidenced factory qualification; weigh/sample its own composition, moisture, contamination and stocks, pair internal returns and document the actual receiver route. Physical waste transfer is distinct from elementary releases; no assumed avoided credit. This anchor concerns segregated copper metal only, not whole insulated cable; add actual polymer/other fractions independently. Only actual segregated copper-metal cable offcuts matching own Cu assay/moisture/contamination/stocks and measured outgoing receiver interface; selected hydrometallurgical route requires the actual compatible receiver. Entire insulated cable mixture is not copper metal; collect polymer and other residue separately if actual. No avoided credit.

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

###### Factory-trial tobacco solid residue (`tobacco_waste`)

Actual measured outgoing factory-trial tobacco solid residue from this part manufacturing or evidenced factory qualification; weigh/sample its own composition, moisture, contamination and stocks, pair internal returns and document the actual receiver route. Physical waste transfer is distinct from elementary releases; no assumed avoided credit.

- Selected flow: Factory-trial tobacco solid residue
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Factory-trial cigarette-paper offcut waste (`paper_waste`)

Actual measured outgoing factory-trial cigarette-paper offcut waste from this part manufacturing or evidenced factory qualification; weigh/sample its own composition, moisture, contamination and stocks, pair internal returns and document the actual receiver route. Physical waste transfer is distinct from elementary releases; no assumed avoided credit. Only actual measured outgoing paper waste compatible with unspecified recovered paper CPC39249, own cigarette-paper offcut composition/moisture/contamination and receiver route; no inferred cigarette factory throughput, internal-return double count or avoided credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Used lubricating oil waste (`oil_waste`)

Actual measured outgoing used lubricating oil waste from this part manufacturing or evidenced factory qualification; weigh/sample its own composition, moisture, contamination and stocks, pair internal returns and document the actual receiver route. Physical waste transfer is distinct from elementary releases; no assumed avoided credit. Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default.

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

###### Industrial cleaning wastewater (`wastewater`)

Actual measured outgoing industrial cleaning wastewater from this part manufacturing or evidenced factory qualification; weigh/sample its own composition, moisture, contamination and stocks, pair internal returns and document the actual receiver route. Physical waste transfer is distinct from elementary releases; no assumed avoided credit. Measure actual physical cleaning wastewater receiver transfer; the reviewed discharged-to-water generic record is not adopted.

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

###### Dry epoxy-powder overspray waste (`powder_waste`)

Actual measured outgoing dry epoxy-powder overspray waste from this part manufacturing or evidenced factory qualification; weigh/sample its own composition, moisture, contamination and stocks, pair internal returns and document the actual receiver route. Physical waste transfer is distinct from elementary releases; no assumed avoided credit. Only actual dry powder-coating overspray waste matching supplied waste type; wet sludge or captured liquid/filter media separately needs exact identity and assay.

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

##### Elementary flows

###### Fossil carbon dioxide to ordinary air (`co2`)

Actual independently quantified fossil carbon dioxide to ordinary air after control, using species/size matched concentration and same-period exhaust flow/duration/state or measured fugitives. Fuel carbon closure cannot alone establish this species; captured media, wastewater and unknown residual are separate fates. Only actual measured fossil-origin CO2 to ordinary unspecified air; not biogenic, indoor, water or long-term release.

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

###### Fossil carbon monoxide to ordinary air (`co`)

Actual independently quantified fossil carbon monoxide to ordinary air after control, using species/size matched concentration and same-period exhaust flow/duration/state or measured fugitives. Fuel carbon closure cannot alone establish this species; captured media, wastewater and unknown residual are separate fates. Only actual measured fossil-origin CO to ordinary unspecified air; carbon closure alone cannot determine CO.

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

Actual independently quantified water vapour to ordinary air after control, using species/size matched concentration and same-period exhaust flow/duration/state or measured fugitives. Fuel carbon closure cannot alone establish this species; captured media, wastewater and unknown residual are separate fates. Only independently measured actual water-vapour release to ordinary unspecified air; retained cooling water, wastewater and unrelated residual are not air.

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

Actual independently quantified isopropanol to ordinary air after control, using species/size matched concentration and same-period exhaust flow/duration/state or measured fugitives. Fuel carbon closure cannot alone establish this species; captured media, wastewater and unknown residual are separate fates. Only actual emitted IPA CAS67-63-0 to ordinary unspecified air, matched post-control sampling; not indoor, soil, liquid capture or long-term release.

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

###### Whole PM10 particulate to ordinary air (`pm10`)

Actual independently quantified whole pm10 particulate to ordinary air after control, using species/size matched concentration and same-period exhaust flow/duration/state or measured fugitives. Fuel carbon closure cannot alone establish this species; captured media, wastewater and unknown residual are separate fates. Only actual independently measured whole PM10 particle release to ordinary unspecified air, including its fine fraction, using size-resolved same-period post-control concentration/flow/state and measured fugitive basis. PM2.5–PM10 coarse-only fraction, soot, total unspecified dust or captured powder must not replace this identity; prevent overlap if a fine fraction is separately reported.

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
| dedicated_scope | reference product | Verify actual44517 tobacco-processing host principal function and dedicated part drawing/interface across primary/reconstitution/rod/filter/mouthpiece; review independent material/tool and43921 general packaging parts separately, factory use alone insufficient. Declare new/used-refurbishment starting state; material conflicts yield no default grade; contact304L or PU thickness/wing-count case cannot generalize. | actual drawings/supply list/host-function primary evidence/acceptance |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| scrap_state | steel waste | Actual post-industrial steel scrap untreated within factory and transferred without further treatment; retain own composition/moisture/stocks/paired internal returns and receiving treatment interface, no generic recycling proxy. | actual scrap tickets/composition/state/receiver evidence |
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
| `identity` | dataset | Confirm dedicated part interface and tobacco-processing host principal function across primary/reconstitution/rod/filter/mouthpiece architecture, and independent material/tool/general packaging boundaries, model/drawing/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
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
| comas-parts | handbook | Parts and Materials; undated actual body; retained snapshot 2026-10-02; https://www.comasitaly.com/en/services/parts-and-materials | Product architecture/category boundary; not factory recipe or quantitative default |
| steellogy-knives | handbook | Tobacco Cutter Cut-off and Tipping Knives; undated actual body; retained snapshot 2026-10-02; https://www.steellogy.com/products/tobacco | Product architecture/category boundary; not factory recipe or quantitative default |
| sami-parts | handbook | SAMI MCD Tobacco machinery parts; undated actual body; retained snapshot 2026-10-02; https://sami-spares.com/ | Product architecture/category boundary; not factory recipe or quantitative default |
| whitson-parts | handbook | Cigarette and Tobacco Machinery Spares; undated actual body; retained snapshot 2026-10-02; https://www.wes-ltd.net/index.php/3 | Product architecture/category boundary; not factory recipe or quantitative default |
| akyurek-processing | handbook | Tobacco Processing; undated actual body; retained snapshot 2026-10-02; https://akyurek.com/catalog/Tutun-Genel.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| comas-dcrb | handbook | DCRB Direct Conditioning Cylinder; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/dcrb-series-conditioning | Product architecture/category boundary; not factory recipe or quantitative default |
| comas-flatten | handbook | CLM Tobacco Stem Flattening Machine; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/clm-series-flattening | Product architecture/category boundary; not factory recipe or quantitative default |
| comas-recon | handbook | Reconstituted Tobacco Process Line; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/recon-process-line | Product architecture/category boundary; not factory recipe or quantitative default |
| comas-blending | handbook | SAM Tobacco Blending Silos; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/silos-sam-series | Product architecture/category boundary; not factory recipe or quantitative default |
| gd-maker | handbook | 121 Double Rod Cigarette Maker; undated; actual original HTML snapshot 2026-10-02; https://www.gidi.it/en/solutions/product/121 | Product architecture/category boundary; not factory recipe or quantitative default |
| koerber-msm | handbook | Modular THP Maker; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/insights-and-events/modular-thp-maker | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44523 | official_guidance | Central Product Classification Version3.0 Explanatory Notes; Version3.0 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
