---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44918
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Parts for semiconductor, integrated-circuit and flat-panel-display manufacturing machinery

## 1. Scope and Applicability

This PCR develops factory foreground data for accepted parts solely or principally used with machines of subclass44918. Preserve hosts for semiconductor boules/wafers, devices, integrated circuits and flat-panel displays, including mask/reticle manufacture or repair, device/IC assembly and their dedicated lifting, handling, loading and unloading. A supplier semiconductor label or customer address does not establish a machinery-part identity. CPC44943 and its8486.90 context require individual supplied-item review.

The chapter84 exclusions remain explicit: ceramic machinery parts are separately treated in chapter69; technical glass machinery parts in7019/7020 and laboratory glass in7017. A quartz boat, crucible or ceramic ring is not automatically44943. Review actual constituent material, complete composite/assembly character, dedicated fit and applicable exclusion before adopting the finished reference. FPD substrate fabrication is distinct from manufacturing glass, assembling PCBs/electronic components onto the panel, and CRT production. General valves/pumps/robots/electronics, infrastructure, interchangeable tools and consumables require their own boundaries.

UCT documents dedicated weldments and gas-distribution products with stainless steel, aluminium and Hastelloy families, CNC tube bending/cutting, orbital/TIG welding, cleaning, leak checking and CMM. Its facility infrastructure and other high-purity industries are boundary counterexamples. These families do not prove316L tube grade, alloy composition, weld wire or a universally accepted finished manifold. Actual part drawings and principal host fit decide the supplied boundary.

Kyocera documents precision cordierite stages and high-purity ceramic vacuum chucks, polishing plates and CVD-related components. The chuck is not automatically alumina. Its semiconductor packages, chips and optical/general actuator examples do not prescribe tool-part BOM. CoorsTek distinguishes recrystallized and CVD SiC furnace components, Si-impregnated SiC and SiC-coated graphite alternatives, actual forming/casting, firing, precision CNC machining, plasma coating and cleaning. Raw SiC powder, CVD reactants and bought complete coated components are separate interfaces. All ceramic/glass examples remain subject to the explicit classification exclusion.

Ferrotec documents SiFusion polysilicon, high-purity quartz, SiC and precision metal/component assembly plus diamond or ordinary carbide machining alternatives, chemical/pure-water cleaning and surface treatments. Polysilicon is not doped Czochralski monocrystalline rod. Cleaning an existing customer part is a separately declared service/reconditioning scope rather than manufacture of a new part by assumption. CoorsTek glass-substrate or photomask-substrate products and Ferrotec dummy wafers are not automatically machinery reference parts.

Entegris distinguishes PVD, ALD and hybrid oxide coatings for actual chamber walls/showerheads and substrate-dependent preparation. Yttria/alumina coating names do not establish a specific sputtering target, ALD precursor, coating thickness or recipe. Count bought finished coating once; own deposition collects actual species, carrier/reactant gas, target/precursor completion, deposits, spent media, captured residues and measured releases. Customer wafer yield and process plasma are not part-factory quantities.

The reference is1kg calibrated accepted net physical output of one declared complete supplied part configuration. Dnet/Naccepted/M use the same cohort; only actual retained hardware or proven included fill enters Dnet. Packing, rejects, consumed leak/cleaning/qualification media, customer wafers and services are separate. Conditional cards cover observed or potentially required route-specific atomic identities, never a universal material recipe. Actual additional alloys, precursors, abrasives, weld/shield media, seals, components, waste and emitted species need their own bounded directed query and measurement.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44918 |
| classification_refs | CPC3.0 44943 |
| covered_products | Accepted parts solely/principally for44918 boule/wafer/device/IC/FPD hosts and mask/reticle manufacture/repair, assembly and dedicated handling, with individual material-exclusion review |
| excluded_products | Applicable chapter69 ceramic,7017 laboratory and7019/7020 technicalglass exclusions, general independent parts/infrastructure/consumables, customer wafers/products/recipes and cleaning services; not automatically reference parts |
| representative_product | One actual complete accepted dedicated part supply configuration |
| production_route | Actual cutting/bending/welding/machining/forming/firing/deposition/cleaning/integration/qualification or bought completed inputs, route-specific rather than universal recipe |
| market_state | Actual completed part and retained hardware, excluding packing/consumed trial/customer wafer/service |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete accepted part configuration with declared dedicated host and classification boundary |
| How much | 1 kg accepted net physical output |
| How well | Actual material/supplied completion/dedicated fit/acceptance, no universal performance/netmass |
| How long or cycle | Manufacture through cohort acceptance, observed factory tests only, not customer wafer lifetime/cycles |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts for the goods of subclass 44918 `1b076837-a2aa-4682-9a61-c9a1859b99fd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual sole/principal44918 host/function; material/composite completion and applicable chapter69/7017/7019/7020 exclusions; model/drawing revision/serial cohort; supply completion/geography/period; each make/buy raw/target/precursor/coating interface; included retained hardware/fill measured state/quantity; excluded packing/testconsumption/reject/customerwafer/service; same-cohort calibratedDnet/Naccepted/M andQattr; own assay/stocks/recovery/acceptance |

Declare all qualifiers in metadata or equivalent notes; missing qualifiers make the reference incomplete.

One measurement unit is one complete accepted dedicated part of the declared configuration. Unit count and calibrated net mass refer to this part, not its host machine.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `native_numerator` | all inventory rows | actual native reference property | kg; MJ; m; m3 | Preserve native numeratorq_ref=q_item/M. Cablem and own same-constructionkg/m only for physical balance; gasm3 actualT/P/wet-dry/density. Additional solidVolume needs actual solid geometry/density, liquid own composition/temperature/density, not generic gasT/P; no power/capacity-to-mass. |
| `energy_conversion` | electricity and actual heat | Energy | MJ | Measured electricitykWh×3.6=MJ with matching geography/voltage; own supply/return mass/enthalpy/common datum, gross deduct once and net notagain, not customer tool power or supplier boiler fuel. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual external raw/completed part receipt by observed make/buy interface |
| starting_condition_role | foreground_start |
| product_classification_scope | 44918 sole/principal parts across full host scope, individual material/completion/exclusion review |
| recursive_input_rule | Bought completion embeds upstream once, own raw/operations separate, internal transfers paired |
| upstream_dataset_requirement | Actual supply grade/formulation/completion/geography/period/treatment matched |
| disclosure | Factory foreground, no complete cradle-to-gate footprint claim with unfinished upstream |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Actual part receipt/fabrication/surface preparation/deposition/integration/cleaning/qualification, attributable rejects/rework, packing/wastes/common services through accepted release. |  |
| `make_buy` | supplier_interface | Complete bought components/coatings embed upstream once; site manufacture uses separately measured actual raw inputs/reactants and operations. Pair internal transfers. Raw powder, finished target, precursor and finished coated part are different interfaces. |  |
| `factory_use` | production | Only actual part-factory leak/CMM/cleanliness/electrical/thermal qualification burden. Consumed test material excludedDnet; retained shipment proven separately. Customer wafer/device/FPD recipes and fab gas throughput are outside. |  |
| `bom_extension` | route | Conditional cards require actual grade/formulation/state/provider. Every missing actual alloy/target/precursor/gas/weld medium/component/waste/species receives own bounded directed identity query and collection rule. Unknown differs from zero/absence. |  |
| `upstream` | links | Each actual matched supplier geography/completion/period and external treatment needs an upstream interface. Without completed links disclose foreground-only, no complete footprint. Dedicated host and ceramic/glass/general-part exclusions independently reviewed. |  |

### Actual architecture and supplied variants

| variant | actual_configuration | scope_condition |
| --- | --- | --- |
| Dedicated metal/composite parts | Actual declared chamber/showerhead/manifold/stage/housing or dedicated handling/assembly replacementpart | Sole/principal hostfit and complete supplied interface; generic facility infrastructure excluded |
| Ceramic/glass examples | Actualmaterial/finishedcomposite/suppliedpurpose and chapter69/7017/7019/7020 review | Supplier semiconductor application alone not44943 proof; no automatic quartz/ceramic reference |
| Surface route | Actual PVD/ALD/CVD/plasma/anodizing preparation and completed coating versus raw inputs | Exact target/precursor/reactants queried and measured, no universal powder/coatingrecipe |
| Factory release | Actual accepted configured part and calibrated net cohort, observed factory trials | Packing/testconsumption/customer wafers/services separated; retainedfill proven |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Actual dedicated part fabrication | conditional | Only observed metal cutting/bending/welding or ceramic forming/firing/machining and subsequent work on bought blanks; each actual route and supplied completion independently declared | foreground | per 1 kg reference flow |
| `coating` | Actual surface and coating manufacture | conditional | Only observed PVD/ALD/plasma/anodizing/CVD or other qualified route with its actual target/precursor/reactants and own measured deposition/fates; no universal chemistry | foreground | per 1 kg reference flow |
| `assembly` | Part integration and precision cleaning | required | Actual retained part components and observed cleaning/inspection; bought complete modules include constituent manufacture once | foreground | per 1 kg reference flow |
| `qualification` | Part factory qualification | required | Actual leak/CMM/cleanliness/thermal/electrical acceptance, rejects/rework and observed test media; customer semiconductor production excluded | foreground | per 1 kg reference flow |
| `dispatch` | Accepted part release and packing | required | Actual accepted dedicated part configuration and independently measured transport packing | foreground | per 1 kg reference flow |
| `services` | Unassigned common manufacturing services | conditional | Only reconciled common-period unassigned utility residual after subprocess attribution | foreground | per 1 kg reference flow |

### Process: Actual dedicated part fabrication (`fabrication`)

Only observed metal cutting/bending/welding or ceramic forming/firing/machining and subsequent work on bought blanks; each actual route and supplied completion independently declared.

#### Inputs

##### Product flows

###### aluminium billet (`aluminium`)

Only actual measured aluminium billet with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: aluminium billet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: uct-weldment

###### 316L stainless steel tube (`stainless`)

Only actual measured 316l stainless steel tube with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: 316L stainless steel tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: uct-weldment

###### Hastelloy tube (`hastelloy`)

Only actual measured hastelloy tube with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: Hastelloy tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: uct-weldment

###### fused quartz blank (`quartz`)

Only actual measured fused quartz blank with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: fused quartz blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ferrotec-catalog

###### alumina ceramic powder (`alumina`)

Actual own fresh raw aluminium oxide candidate active35499 conflicts with raw metal-oxide34220 identity; no compatible supplied preparation explanation. Keep queried gap. Actual powder purity/particle grade/route measured separately; no completechuck/ALD precursor substitution.

- Selected flow: alumina ceramic powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### aluminium nitride powder (`aln`)

Only actual measured aluminium nitride powder with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: aluminium nitride powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### silicon carbide powder (`sic`)

Actual own fresh rawSiC candidate active35499 conflicts with carbide34280 identity; semiconductor purpose alone doesnotresolve classification. Keep queried gap. Actual powder grade/phase/forming versus CVD reactant/finishedboat/impregnatedSiC separately reviewed.

- Selected flow: silicon carbide powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: coorstek-furnace; coorstek-guide

###### high purity graphite blank (`graphite`)

Only actual measured high purity graphite blank with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: high purity graphite blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: coorstek-guide

###### single crystal silicon blank (`silicon`)

Only actual doped Czochralski monocrystalline silicon rod matching35470 with supplier verified doping/resistivity/purity/form, used in observed own component machining. Not Ferrotec SiFusion polysilicon, undoped silicon, finished customer wafer or generic silicon blank.

- Selected flow: Monocrystalline silicon rod `f8ca9a93-74aa-4c4a-9af8-ecbb1875c604`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ferrotec-catalog

###### cordierite ceramic blank (`cordierite`)

Only actual measured cordierite ceramic blank with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: cordierite ceramic blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: kyocera-stage

###### PFA resin (`pfa`)

Only actual measured pfa resin with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: PFA resin
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### polyvinyl alcohol binder (`binder`)

Actual polyvinyl alcohol primary polymer with own hydrolysis/molecular grade and measured binder formulation if genuinely used in ceramic forming; not polyvinyl acetate or an assumed universal binder. Track actual burnout reactions and separately queried emitted species/non-air fates; no fixed binder fraction.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### diamond abrasive (`diamond`)

Actual industrial diamond dust/powder matching38230, separately verified abrasive grade/particle/form and own consumption/returns. Not complete bonded wheel/interchangeable tool or gemstone. Actual carbide tool alternatives require their own independent identity.

- Selected flow: Industrial diamonds, worked, dust and powder of natural or synthetic precious or semi-precious stones `427ace16-590b-4f33-ac11-ad4c130205a9`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ferrotec-catalog

###### metal cutting fluid (`cutting_fluid`)

Actual compatible metal-cutting-fluid concentrate and own formulation/dilution/stock records; do not substitute allcoolant or count boughtdilution and concentrate together. Own water and additives separately reconciled.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### process water (`water`)

Only actual measured process water with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ferrotec-catalog

###### electricity medium voltage (`fabrication_electricity`)

Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### stainless steel process scrap (`steel_scrap`)

Only actual outgoing stainless steel process scrap with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. Slag39310 or external316Lsupply doesnotestablish own stainless machiningoffcut.

- Selected flow: stainless steel process scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### aluminium process scrap (`al_scrap`)

Only actual outgoing aluminium process scrap with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. Match actual cast/contaminated scrap supply and processing/recycling receiver, not every clean wrought scrap.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### fused quartz cutting waste (`quartz_waste`)

Only actual outgoing fused quartz cutting waste with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit.

- Selected flow: fused quartz cutting waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### alumina ceramic grinding waste (`ceramic_waste`)

Only actual outgoing alumina ceramic grinding waste with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit.

- Selected flow: alumina ceramic grinding waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### particulates PM10 air (`dust`)

Only independently measured particulates pm10 air to ordinary unspecified air, own species/origin; post-control concentration × matched same-period flow/time with T/P/wet-dry/unit corrections plus measured fugitives, or demonstrated species balance including non-air fates. Capture not destruction; unknown residual not air.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Actual surface and coating manufacture (`coating`)

Only observed PVD/ALD/plasma/anodizing/CVD or other qualified route with its actual target/precursor/reactants and own measured deposition/fates; no universal chemistry.

#### Inputs

##### Product flows

###### yttrium oxide sputtering target (`yttria`)

Only actual measured yttrium oxide sputtering target with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: yttrium oxide sputtering target
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: entegris-coating

###### alumina sputtering target (`alumina_target`)

Only actual measured alumina sputtering target with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: alumina sputtering target
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: entegris-coating

###### argon gas (`argon`)

Identity remains unresolved: gaseous-name candidate has active35499 prepared-chemical classification with empty route/mix/comment, incompatible with34210 rare-gas identity. Do not assign it to elemental Ar; actual grade/purity/phase/provider and manufacturing role still require evidence.

- Selected flow: argon gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### nitrogen gas (`nitrogen`)

Actual gaseous N2 CAS7727-37-9 air-separation supply with own purity/pressure/provider and observed manufacturing/test role; nativeMass/kg. Propertymean1.25 is not density or recipe. Source does not mandate gas; bought charged component and embedded gas not both imported.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### electricity medium voltage (`coating_electricity`)

Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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

### Process: Part integration and precision cleaning (`assembly`)

Actual retained part components and observed cleaning/inspection; bought complete modules include constituent manufacture once.

#### Inputs

##### Product flows

###### isopropyl alcohol (`ipa`)

Actual isopropylalcohol CAS67-63-0 with own assay/purity/suppliedform matching atplant chemical interface, only observed partfactorycleaning. Own retained/recovered/captured/destroyed/nonair and species airfates independently measured.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### nitric acid (`nitric`)

Actual supplied40% aqueous nitric acid, CAS7697-37-2, independently compatible industrial/high-purity cleaning interface; gross solution issue and own measured HNO3 assay/water balance separately. General comment commercial68% is not the supplied concentration. Actual part-factory cleaning only; no customer wafer recipe.

- Selected flow: Nitric acid `bf883501-c052-414e-8e21-e6f53cc257ba`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### hydrofluoric acid (`hf`)

Actual own fresh aqueousHF candidate active35499 conflicts with inorganicacid34231 identity; no compatible supplied preparation explanation. Keep queried gap. Verify actual concentration/purity/phase and own HF/water/fates for observed partcleaning, not customerwafer recipe.

- Selected flow: hydrofluoric acid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### deionised water (`di_water`)

Actual chemical-grade deionized water matching own supplied purity and plant/provider interface, separately measured rinsing/recovery/stocks; no automatic ultra-pure specification or customer wafer rinse quantity.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ferrotec-catalog

###### electric heating resistor (`heater`)

Actual completed non-carbon electric heating resistor44818 matching physical supplied heater/resistor completion and model fit. Not CTUe reference, carbon QCH heater, whole furnace or power-to-mass conversion; complete bought heated assembly embeds it once.

- Selected flow: Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### wafer chuck electrode (`electrode`)

Only actual measured wafer chuck electrode with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: wafer chuck electrode
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### copper electrical cable (`cable`)

Actual <=1000V copper0.6/1kV cable construction and supply completion, native Length/m with own issued/cut/installed/returned/stocks. Only own same-construction measured kg/m converts physical balance; not power-to-mass or generic wire.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_length.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_length`
- Sources:

###### vulcanised nitrile sealing element (`seal`)

Actual vulcanized nitrile rubber sealing element36270 only if own compound/assay/cure state and supplied model fit match. Not all semiconductor seals, PTFE/TPU/FFKM/metal; other compounds require separate identity.

- Selected flow: Sealing elements `a9943e4e-1a21-412c-859e-df09a2b5ee6f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### steel threaded fastener (`fastener`)

Only actual measured steel threaded fastener with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### electricity medium voltage (`assembly_electricity`)

Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### part cleaning wastewater (`effluent`)

Only actual outgoing part cleaning wastewater with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. Actual acid/metal/solvent species and externalWaste receiver; discharged-to-water elementary interface is not treatmentWaste.

- Selected flow: part cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### spent isopropyl alcohol (`solvent_waste`)

Only actual outgoing spent isopropyl alcohol with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. Verify spentIPA/water/contaminant assay and recovered return before external treatment; wasteoil/coolant/distillation residue not automatically spentIPA.

- Selected flow: spent isopropyl alcohol
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### isopropanol air (`ipa_air`)

Only independently measured isopropanol air to ordinary unspecified air, own species/origin; post-control concentration × matched same-period flow/time with T/P/wet-dry/unit corrections plus measured fugitives, or demonstrated species balance including non-air fates. Capture not destruction; unknown residual not air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### water vapour air (`vapour`)

Only independently measured water vapour air to ordinary unspecified air, own species/origin; post-control concentration × matched same-period flow/time with T/P/wet-dry/unit corrections plus measured fugitives, or demonstrated species balance including non-air fates. Capture not destruction; unknown residual not air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Part factory qualification (`qualification`)

Actual leak/CMM/cleanliness/thermal/electrical acceptance, rejects/rework and observed test media; customer semiconductor production excluded.

#### Inputs

##### Product flows

###### helium leak test gas (`helium`)

Only actual measured helium leak test gas with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: helium leak test gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### process water (`test_water`)

Only actual measured process water with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### electricity medium voltage (`qualification_electricity`)

Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
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

Actual accepted dedicated part configuration and independently measured transport packing.

#### Inputs

##### Product flows

###### corrugated cardboard box (`cardboard`)

Actual finished corrugatedC/E/F packingbox with at least80percent recycledfibres matching supplied construction. Weigh ownbox; no contents/voidvolume-to-mass. Exclude transportpacking fromDnet.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### LDPE packaging foil (`film`)

Actual PE-LD non-self-adhesive noncellular nonreinforced nonlaminated unsupported packing film/foil of verified supplied state and grade, referenceinternal1 Mass/kg; no arbitraryPEfilm or semiconductor protective polymer.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### wood pallet (`pallet`)

Actual compatible woodenEUROpallet supplied/used mass and stocks/returns, not generic metal/plasticpallet or assumed fixedpalletweight. Transportpacking outsideDnet.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### electricity medium voltage (`dispatch_electricity`)

Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### parts for semiconductor manufacturing equipment (`reference_product`)

Actual accepted finished part solely/principally for the declared44918 host and compatible8486.90 boundary. Individually review chapter69 ceramic and technical/laboratory glass exclusions, composite completion and dedicated fit. No generic component, infrastructure, consumable, customer wafer, service, packing or test consumption as reference mass.

- Selected flow: Parts for the goods of subclass 44918 `1b076837-a2aa-4682-9a61-c9a1859b99fd`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44943; census-semiconductor

##### Waste flows

##### Elementary flows

### Process: Unassigned common manufacturing services (`services`)

Only reconciled common-period unassigned utility residual after subprocess attribution.

#### Inputs

##### Product flows

###### electricity medium voltage (`electricity`)

Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### district industrial natural gas heat (`heat`)

Actual purchased CN natural-gas district/industrial heat matching delivered gross-calorific Energy/MJ interface and own supplier/period. Independently measured supply/return mass and own enthalpy/common datum; subtract once only gross invoice, not again net invoice. Supplier boiler fuel not onsite combustion.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### tap water (`tap_water`)

Only actual measured tap water with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### compressed air (`compressed_air`)

Actual supplied compressed air nativeVolume/m3 with own reference and observed pressure/temperature/wet-dry/composition, metered delivery/returns. Same-state density for physical balances only; no generic T/P conversion of solid volume or catalogue flow-hours.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
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
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated machining functions or different supplied configurations or use part mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | accepted net mass per unit | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | attributable quantity / accepted units | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | attributable energy / accepted units | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | attributable waste / accepted units | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | attributable emission / accepted units | sampling/flow/combined uncertainty |
| cp_gas | all | specific supplied gas | meter | compressed-air identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter compressed-air volume at actual state; mass conversion uses corresponding measured density, not a generic gas factor. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | attributable volume / accepted units | T/P/flow/density/calibration |
| cp_length | assembly | specific native-length cable | length_measurement | cable construction; conductor/insulation; supplier; issued/cut/installed/returned length; own kg/m; Q; N | Measure actual matching cable length, paired returns and stocks; same-construction measured kg/m only for physical mass balance. Native m retained, never infer mass from electrical rating. | m | each installation lot | common manufacturing period | same component configuration/site and supplier | attributable length / accepted units | construction/length/stock/mass records |

The weighing protocol applies to the declared accepted part and excludes transport packing.

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| supplied_reference_config | actual configuration | Actual accepted finished part solely/principally for the declared44918 host and compatible8486.90 boundary. Individually review chapter69 ceramic and technical/laboratory glass exclusions, composite completion and dedicated fit. No generic component, infrastructure, consumable, customer wafer, service, packing or test consumption as reference mass. Dnet only calibrated net retained physical output; record drawing/revision/serial cohort andNaccepted, no catalogue mass. One accepted unit is one complete accepted dedicated part, not its host machine. | un-cpc-44943; census-semiconductor; actual drawing/shipment/calibration |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| cohort_raw | cohort | Naccepted, Dnet and Qattr share configuration/period. Dnet sums calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Qattr includes rejects/rework/factory tests; Dnet excludes packing/rejects/consumed trial charge. Preserve each native numerator unit. | calibration/actual-period ledgers |
| species_sampling | emissions | Post-control species concentration times matched same-period gas/liquid flow and duration with T/P/wet-dry/unit corrections; fugitives independently measured. Unknown residual not air release, capture not destruction; each metal/chemical/water term uses own assay/water fraction/density/stocks/reactions/paired returns. | actual concentration/flow/period/state records |
| contained_assay | physical balances | Each input/product/scrap/sludge/liquid/release uses own measured gross mass times own assay and wet/dry basis; gross alloy/sludge is not contained metal. Every water term uses own water fraction and density at actual temperature, including product retention/reaction/evaporation/discharge/beginning-end stocks; internal returns pair/cancel. | term-specific measurement/assay/moisture/stocks |
| solvent_fates | solvent records | Record recovered return/product retention/captured liquid or media/demonstrated destruction/wastewater separately. Recovered/retained/captured and wastewater/media are non-air fates; capture not destruction. Investigate unknown residual, never turn it into air release. | actual material/sampling/abatement records |
| utility_residual | energy | Reconcile common-period imports plus actual generation minus exports/storage changes against fabrication/finish/integration/test/dispatch loads; shared row ONLY unassigned residual. Investigate negative residual against period/units/combined uncertainty without clipping. | calibrated subprocess/site meters |
| heat_return | thermal interface | Gross heat equals measured supply kg times own MJ/kg minus independently measured return kg times return own MJ/kg, with common datum and actual T/P. Gross supply deducts return once; already-net bill never deducts again. Physical steam/condensate mass separate from heat; supplier boiler fuel not onsite combustion. | separate supply/return metering/thermodynamic state/invoice |
| dust_overlap | actual particulate releases | PM10 is measured gross particulate mass of the specified size fraction. When actually present, independently measure contained crystalline silica or another species; that contained mass is not additional gross particulate mass. Each actual species needs its own identity and measurement row; declare LCIA reporting conventions and prevent repeated full characterization of the same release, without inventing silica release. | actual test-media species/size-fraction sampling and LCIA reporting convention |
| machine_architecture | actual configuration | Preserve all dedicated boule/wafer/device/IC/FPD hosts, mask/reticle manufacture/repair, device/IC assembly and dedicated handling. Metallic/composite precision parts, integrated stages/manifolds and actual coated components vary; ceramic/glass exclusions reviewed individually. | census-semiconductor; actual host fit/material/part character |
| test_install_roles | actual configuration | Actual factory leak/cleanliness/CMM/thermal/electrical test media and attributable rejects/rework enterQattr with stocks/recoveries/non-air fates. Consumed tests, customer wafer recipe and packing outsideDnet; retained fills only proven accepted shipment, no capacity assumption. | actual test/acceptance/shipment records |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

PM10 is measured gross particulate mass of the specified size fraction; a separately measured contained chemical species is not additional gross particulate mass. Add each actual species according to tested medium and release, declare LCIA reporting conventions and prevent repeated full characterization.

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| optical_acceptance | actual configuration | Actual PVD/ALD/hybrid/plasma/CVD/anodizing and raw-target/precursor/finished-coating supply interfaces separately declared. Substrate and deposited chemistry measured with actual geometry/thickness/density/assay/stocks; no fixed thickness or powder as ALD precursor. Bought coated part embeds coating once. | entegris-coating; actual route/precursor/target/deposition/stock records |

### Supplied identity and native measurement conditions

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| qualified_cutting_fluid | cutting_fluid | Actual compatible metal-cutting-fluid concentrate and own formulation/dilution/stock records; do not substitute allcoolant or count boughtdilution and concentrate together. Own water and additives separately reconciled. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_water | water | Only actual measured process water with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_test_water | test_water | Only actual measured process water with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_ipa | ipa | Actual isopropylalcohol CAS67-63-0 with own assay/purity/suppliedform matching atplant chemical interface, only observed partfactorycleaning. Own retained/recovered/captured/destroyed/nonair and species airfates independently measured. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_cable | cable | Actual <=1000V copper0.6/1kV cable construction and supply completion, native Length/m with own issued/cut/installed/returned/stocks. Only own same-construction measured kg/m converts physical balance; not power-to-mass or generic wire. Native property/unit group: 838aaa23-0117-11db-92e3-0800200c9a66; 838aaa22-0117-11db-92e3-0800200c9a66 | supplier specification/actual native metering |
| qualified_seal | seal | Actual vulcanized nitrile rubber sealing element36270 only if own compound/assay/cure state and supplied model fit match. Not all semiconductor seals, PTFE/TPU/FFKM/metal; other compounds require separate identity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_fastener | fastener | Only actual measured steel threaded fastener with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_heater | heater | Actual completed non-carbon electric heating resistor44818 matching physical supplied heater/resistor completion and model fit. Not CTUe reference, carbon QCH heater, whole furnace or power-to-mass conversion; complete bought heated assembly embeds it once. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_nitrogen | nitrogen | Actual gaseous N2 CAS7727-37-9 air-separation supply with own purity/pressure/provider and observed manufacturing/test role; nativeMass/kg. Propertymean1.25 is not density or recipe. Source does not mandate gas; bought charged component and embedded gas not both imported. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_al_scrap | al_scrap | Only actual outgoing aluminium process scrap with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. Match actual cast/contaminated scrap supply and processing/recycling receiver, not every clean wrought scrap. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_ipa_air | ipa_air | Only independently measured isopropanol air to ordinary unspecified air, own species/origin; post-control concentration × matched same-period flow/time with T/P/wet-dry/unit corrections plus measured fugitives, or demonstrated species balance including non-air fates. Capture not destruction; unknown residual not air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_vapour | vapour | Only independently measured water vapour air to ordinary unspecified air, own species/origin; post-control concentration × matched same-period flow/time with T/P/wet-dry/unit corrections plus measured fugitives, or demonstrated species balance including non-air fates. Capture not destruction; unknown residual not air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_dust | dust | Only independently measured particulates pm10 air to ordinary unspecified air, own species/origin; post-control concentration × matched same-period flow/time with T/P/wet-dry/unit corrections plus measured fugitives, or demonstrated species balance including non-air fates. Capture not destruction; unknown residual not air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_cardboard | cardboard | Actual finished corrugatedC/E/F packingbox with at least80percent recycledfibres matching supplied construction. Weigh ownbox; no contents/voidvolume-to-mass. Exclude transportpacking fromDnet. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_film | film | Actual PE-LD non-self-adhesive noncellular nonreinforced nonlaminated unsupported packing film/foil of verified supplied state and grade, referenceinternal1 Mass/kg; no arbitraryPEfilm or semiconductor protective polymer. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_pallet | pallet | Actual compatible woodenEUROpallet supplied/used mass and stocks/returns, not generic metal/plasticpallet or assumed fixedpalletweight. Transportpacking outsideDnet. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_electricity | electricity | Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200c9a66; 93a60a57-a3c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_heat | heat | Actual purchased CN natural-gas district/industrial heat matching delivered gross-calorific Energy/MJ interface and own supplier/period. Independently measured supply/return mass and own enthalpy/common datum; subtract once only gross invoice, not again net invoice. Supplier boiler fuel not onsite combustion. Native property/unit group: 93a60a56-a3c8-14da-a746-0800200c9a66; 93a60a57-a3c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_tap_water | tap_water | Only actual measured tap water with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_compressed_air | compressed_air | Actual supplied compressed air nativeVolume/m3 with own reference and observed pressure/temperature/wet-dry/composition, metered delivery/returns. Same-state density for physical balances only; no generic T/P conversion of solid volume or catalogue flow-hours. Native property/unit group: 93a60a56-a3c8-22da-a746-0800200c9a66; 93a60a57-a3c8-12da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_di_water | di_water | Actual chemical-grade deionized water matching own supplied purity and plant/provider interface, separately measured rinsing/recovery/stocks; no automatic ultra-pure specification or customer wafer rinse quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_binder | binder | Actual polyvinyl alcohol primary polymer with own hydrolysis/molecular grade and measured binder formulation if genuinely used in ceramic forming; not polyvinyl acetate or an assumed universal binder. Track actual burnout reactions and separately queried emitted species/non-air fates; no fixed binder fraction. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_diamond | diamond | Actual industrial diamond dust/powder matching38230, separately verified abrasive grade/particle/form and own consumption/returns. Not complete bonded wheel/interchangeable tool or gemstone. Actual carbide tool alternatives require their own independent identity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_nitric | nitric | Actual supplied40% aqueous nitric acid, CAS7697-37-2, independently compatible industrial/high-purity cleaning interface; gross solution issue and own measured HNO3 assay/water balance separately. General comment commercial68% is not the supplied concentration. Actual part-factory cleaning only; no customer wafer recipe. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_silicon | silicon | Only actual doped Czochralski monocrystalline silicon rod matching35470 with supplier verified doping/resistivity/purity/form, used in observed own component machining. Not Ferrotec SiFusion polysilicon, undoped silicon, finished customer wafer or generic silicon blank. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_fabrication_electricity | fabrication_electricity | Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default. | matched delivery interface/submeter records |
| qualified_coating_electricity | coating_electricity | Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default. | matched delivery interface/submeter records |
| qualified_assembly_electricity | assembly_electricity | Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default. | matched delivery interface/submeter records |
| qualified_qualification_electricity | qualification_electricity | Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default. | matched delivery interface/submeter records |
| qualified_dispatch_electricity | dispatch_electricity | Actual CN user1–35kV delivered electricity matching site/provider/period and voltage. kWh×3.6=MJ, Energy native; subprocesses attributed first and common row only residual. No rated customer tool power or cross-geography default. | matched delivery interface/submeter records |
| outgoing_steel_scrap | steel_scrap | Only actual outgoing stainless steel process scrap with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. Slag39310 or external316Lsupply doesnotestablish own stainless machiningoffcut. | sampling/weighing/stocks/actual receiver tickets |
| outgoing_quartz_waste | quartz_waste | Only actual outgoing fused quartz cutting waste with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. | sampling/weighing/stocks/actual receiver tickets |
| outgoing_ceramic_waste | ceramic_waste | Only actual outgoing alumina ceramic grinding waste with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. | sampling/weighing/stocks/actual receiver tickets |
| outgoing_effluent | effluent | Only actual outgoing part cleaning wastewater with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. Actual acid/metal/solvent species and externalWaste receiver; discharged-to-water elementary interface is not treatmentWaste. | sampling/weighing/stocks/actual receiver tickets |
| outgoing_solvent_waste | solvent_waste | Only actual outgoing spent isopropyl alcohol with own assay/species/moisture/contamination, weighed transfers/stocks/paired internal returns and disclosed external receiver/treatment. Separate solvent capture and non-air fates; not fresh input or unknown air residual; no default credit. Verify spentIPA/water/contaminant assay and recovered return before external treatment; wasteoil/coolant/distillation residue not automatically spentIPA. | sampling/weighing/stocks/actual receiver tickets |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| unconfirmed_aluminium | aluminium | Only actual measured aluminium billet with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_stainless | stainless | Only actual measured 316l stainless steel tube with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_hastelloy | hastelloy | Only actual measured hastelloy tube with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_quartz | quartz | Only actual measured fused quartz blank with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_alumina | alumina | Actual own fresh raw aluminium oxide candidate active35499 conflicts with raw metal-oxide34220 identity; no compatible supplied preparation explanation. Keep queried gap. Actual powder purity/particle grade/route measured separately; no completechuck/ALD precursor substitution. | own supplied-state/specification/measurement |
| unconfirmed_aln | aln | Only actual measured aluminium nitride powder with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_sic | sic | Actual own fresh rawSiC candidate active35499 conflicts with carbide34280 identity; semiconductor purpose alone doesnotresolve classification. Keep queried gap. Actual powder grade/phase/forming versus CVD reactant/finishedboat/impregnatedSiC separately reviewed. | own supplied-state/specification/measurement |
| unconfirmed_graphite | graphite | Only actual measured high purity graphite blank with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_cordierite | cordierite | Only actual measured cordierite ceramic blank with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_pfa | pfa | Only actual measured pfa resin with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_yttria | yttria | Only actual measured yttrium oxide sputtering target with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_alumina_target | alumina_target | Only actual measured alumina sputtering target with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_argon | argon | Identity remains unresolved: gaseous-name candidate has active35499 prepared-chemical classification with empty route/mix/comment, incompatible with34210 rare-gas identity. Do not assign it to elemental Ar; actual grade/purity/phase/provider and manufacturing role still require evidence. | own supplied-state/specification/measurement |
| unconfirmed_hf | hf | Actual own fresh aqueousHF candidate active35499 conflicts with inorganicacid34231 identity; no compatible supplied preparation explanation. Keep queried gap. Verify actual concentration/purity/phase and own HF/water/fates for observed partcleaning, not customerwafer recipe. | own supplied-state/specification/measurement |
| unconfirmed_electrode | electrode | Only actual measured wafer chuck electrode with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |
| unconfirmed_helium | helium | Only actual measured helium leak test gas with independently verified grade, supplied completion, physical state and supplier interface for this part route. Complete bought component includes constituent manufacture once; own manufacture records real raw inputs/operations. No universal recipe. | own supplied-state/specification/measurement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Verify accepted dedicated44918 part and actual boule/wafer/device/IC/FPD, mask/reticle, assembly or handling host. Explicitly review chapter69 ceramic parts,7019/7020 technical and7017 laboratoryglass, general independent components/infrastructure/consumables. Each exchange own chemistry/grade/supplied state/native property/provider; unknown notzero. |  |
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
| excluded_use | Cross-part functional equivalence, customer semiconductor/wafer recipe, default mass/manufacturing factors or complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| uct-weldment | handbook | Ultra Clean Holdings, Inc. - Products; publication date unconfirmed; actual original snapshot 2026-10-03; https://www.uct.com/products/weldment/default.aspx | Product architecture/category boundary; not factory recipe or quantitative default |
| kyocera-stage | handbook | Kyocera Technology Supporting the Semiconductor Industry ｜ KYOCERA; publication date unconfirmed; actual original snapshot 2026-10-03; https://global.kyocera.com/prdct/web_solution/semicon/index.html | Product architecture/category boundary; not factory recipe or quantitative default |
| coorstek-furnace | handbook | Silicon Carbide Furnace Components; edition unconfirmed; footer ©2025 CoorsTek 01711 H; https://www.coorstek.com/media/4254/semiconductor-furnace-components-silicon-carbide-components.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| coorstek-guide | handbook | Semiconductor Related Products; edition unconfirmed; back cover ©2024.1 CoorsTek GK; URL2025 and PDF creation2025 do not prove publication date; https://www.coorstek.com/media/8933/2025_products_guide_eng_ver2.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| ferrotec-catalog | handbook | Semiconductor Equipment-related Business; actual edition code 202508G20-EN; ©2025 Ferrotec Corporation; https://www.ferrotec.co.jp/assets/pdf/en/catalog_2025_2.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| entegris-coating | handbook | Three Successful Precision Engineered Techniques for Coating Plasma Chamber Components; ©2019 Entegris;9000-10300FRA-0419; https://www.entegris.com/content/dam/web/resources/pictograms/pictogram_advanced-coating_10300.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44943 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| census-semiconductor | official_guidance | Schedule B Book - Chapter 84; 2022 Schedule B chapter; https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | Product architecture/category boundary; not factory recipe or quantitative default |
