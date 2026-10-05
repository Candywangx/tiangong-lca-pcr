---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.tools-for-working-in-the-hand-pneumatic-hydraulic-or-with-self-contained-non-electric-motor
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Tools for working in the hand, pneumatic, hydraulic or with self-contained non-electric motor

## 1. Scope and Applicability

This PCR covers production of complete tools designed to work in the hand, driven pneumatically, hydraulically or by a self-contained non-electric motor. Preserve rotary, impact, reciprocating, drilling, grinding, sawing, cutting, forestry and horticultural variants whose principal function and actual architecture fall in this category, including petrol chainsaws and compatible handheld brush/hedge tools. Auxiliary ignition electricity does not make a petrol principal motor electric. Reference mass is a production normalization, not functional equivalence between tool families. Declare ambiguous hybrid or mower architecture for item-specific boundary review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.tools-for-working-in-the-hand-pneumatic-hydraulic-or-with-self-contained-non-electric-motor |
| classification_refs | CPC 3.0 44231 |
| covered_products | This PCR covers production of complete tools designed to work in the hand, driven pneumatically, hydraulically or by a self-contained non-electric motor. Preserve rotary, impact, reciprocating, drilling, grinding, sawing, cutting, forestry and horticultural variants whose principal function and actual architecture fall in this category, including petrol chainsaws and compatible handheld brush/hedge tools. Auxiliary ignition electricity does not make a petrol principal motor electric. Reference mass is a production normalization, not functional equivalence between tool families. Declare ambiguous hybrid or mower architecture for item-specific boundary review. |
| excluded_products | Electric handheld tools; ordinary unpowered hand tools; standalone engines/power packs; separate parts, tool holders and interchangeable tools; non-handheld stationary machine tools; mowers with another principal function. |
| representative_product | Actual complete delivered pneumatic grinder, hydraulic breaker/chainsaw or petrol handheld chainsaw; no universal configuration. |
| production_route | Actual-architecture receipt, make/buy components, assembly, factory test and release/packing. Magnesium die casting, aluminium gravity casting, steel forging and reinforced plastics are source-evidenced routes only; actual grades/recipes separately verified. |
| market_state | Complete accepted tool and actual included construction; separate spares/power source are not the reference output. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete powered handworking function of the declared configuration |
| How much | per 1 kg reference flow; no cross-tool functional equivalence |
| How well | Actual declared drive mechanism, rated conditions and acceptance criteria; catalogue values are not factory input defaults. |
| How long or cycle | Manufacture to factory accepted release; record actual qualification cycles, no assumed customer lifetime. |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tools for working in the hand, pneumatic, hydraulic or with self-contained non-electric motor `ec897060-cae0-4e73-ad3c-35b2c43228a4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model/revision; principal function; pneumatic/hydraulic/self-contained non-electric drive; rotary/impact/reciprocating mode; supplied accessories/fills; make/buy; same configuration/period; accepted count/net mass; actual test conditions; supplier/geography; hybrid boundary review. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual factory receipt and evidenced supplied component completion state |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC 3.0 44231; `un-cpc-44231`; `us-hs8467` |
| recursive_input_rule | Same-category complete tool input records actual completion state and upstream link, without repeating embedded manufacture in this package. |
| upstream_dataset_requirement | All actual supplied production/transport and outgoing-treatment interfaces must match. |
| disclosure | Disclose actual route/shipment/make-buy/tests/geography/period, unknown identity/provider links and incomplete coverage. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, mechanical/control assembly, integration, factory test/rework, common services, waste and packing through accepted release. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought tool housing/air motor/hydraulic motor/petrol engine/drive/ignition module includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `factory_use` | production | Include actual factory rotational/impact/reciprocating hand-tool acceptance and documented loaded sawing/drilling/grinding or applicable gardening qualification trials, actual test materials, cleaning water, electricity and consumed lubricant. Recovered trial materials uses measured returns and stocks. Customer machined materials/wood/vegetation and downstream tool operation are not machine manufacturing output. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown actual metal alloy/polymer reinforcement/two-component resin/coating/lubricant/fuel or treatment formulation requires actual supplied-state evidence. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Component fabrication | conditional | Actual site metal casting/forging/machining, plastic moulding or saw-chain manufacture; use actual feed grade and route. Bought complete modules exclude duplicate embedded manufacture. | foreground | per 1 kg reference flow |
| `finish` | Surface preparation and finishing | conditional | Actual cleaning, grinding and coating only where documented. Each actual coating/heat-treatment chemical and waste must be separately added. | foreground | per 1 kg reference flow |
| `integration` | Tool assembly and integration | required | Actual pneumatic/hydraulic/petrol architecture, controls, retained fill and supplied attachments; distinguish factory consumption. | foreground | per 1 kg reference flow |
| `test` | Factory acceptance and qualification | required | Actual acceptance and attributable loaded trials/rework; catalogue operating rates are not factory throughput. | foreground | per 1 kg reference flow |
| `dispatch` | Accepted release and packaging | required | Calibrated accepted net tool mass and actual supplied packing, excluding packing from reference denominator. | foreground | per 1 kg reference flow |
| `services` | Shared services and outgoing transfers | conditional | Only unassigned residual shared utilities after separately assigned fabrication/integration/test/dispatch loads; actual segregated wastes and species emissions. | foreground | per 1 kg reference flow |

### Process: Component fabrication (`fabrication`)

Actual site metal casting/forging/machining, plastic moulding or saw-chain manufacture; use actual feed grade and route. Bought complete modules exclude duplicate embedded manufacture.。

#### Inputs

##### Product flows

###### Non-alloy steel plate (`steel`)

Actual specific supplied Non-alloy steel plate grade, composition, completion state and provider require verification for the activated route. Record actual amount and applicable make/buy interface; identity remains pending. No inferred recipe, density or per-tool quantity.

- Selected flow: Non-alloy steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture`

###### Alloy steel billet (`alloy_billet`)

Actual supplied Alloy steel billet grade/composition/completion for evidenced site fabrication; own gross and contained-component assay, moisture/stocks/paired returns and subsequent operations. Complete bought component already embeds raw inputs once; no universal recipe. Only actual compatible alloy steel primary/semi-finished billet with matching declared chemistry, shape and supplied steel-production/provider interface; no alloy grade, billet dimensions or forging completion assumed.

- Selected flow: Alloy steel `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture`

###### Primary aluminium casting ingot (`aluminium`)

Actual supplied Primary aluminium casting ingot grade/composition/completion for evidenced site fabrication; own gross and contained-component assay, moisture/stocks/paired returns and subsequent operations. Complete bought component already embeds raw inputs once; no universal recipe. Only actual primary unwrought aluminium ingot, compatible global at-plant primary-production provider and composition. Actual hand-tool alloy, alloying inputs and casting route require independent evidence; not finished casting or bar stock.

- Selected flow: primary aluminium ingot `6a66bdce-5689-479f-8ee2-de0bfbcfbd8c`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture-slides`

###### Primary magnesium metal (`magnesium`)

Actual specific supplied Primary magnesium metal grade, composition, completion state and provider require verification for the activated route. Record actual amount and applicable make/buy interface; identity remains pending. No inferred recipe, density or per-tool quantity.

- Selected flow: Primary magnesium metal
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture-slides`

###### Polyamide 6 resin (`pa6`)

Actual supplied Polyamide 6 resin grade/composition/completion for evidenced site fabrication; own gross and contained-component assay, moisture/stocks/paired returns and subsequent operations. Complete bought component already embeds raw inputs once; no universal recipe. Only actual PA6 primary injection-moulding resin with compatible RER at-plant supplied/provider interface. Source appliance context does not establish this tool polymer grade or reinforcement fraction; no inference that all reinforced housings use PA6. Finished reinforced compound or housing is distinct.

- Selected flow: Nylon 6 `3cbbe99e-d5b9-438b-8cb6-665d220eb53c`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture`

###### Polypropylene resin (`pp`)

Actual specific supplied Polypropylene resin grade, composition, completion state and provider require verification for the activated route. Record actual amount and applicable make/buy interface; identity remains pending. No inferred recipe, density or per-tool quantity.

- Selected flow: Polypropylene resin
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture`

###### Glass fibre reinforcement (`glass`)

Actual supplied Glass fibre reinforcement grade/composition/completion for evidenced site fabrication; own gross and contained-component assay, moisture/stocks/paired returns and subsequent operations. Complete bought component already embeds raw inputs once; no universal recipe. Only actual E-glass sliver/roving/yarn/chopped-strand reinforcement matching37121, composition and provider; not woven cloth or finished reinforced-polymer housing. No universal glass fraction; bought compound already embeds reinforcement once.

- Selected flow: Fiber glass `12515acc-030c-4be2-ad20-fae5c0b35cfb`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture`

###### Alloy steel strip for saw-chain components (`strip`)

Actual specific supplied Alloy steel strip for saw-chain components grade, composition, completion state and provider require verification for the activated route. Record actual amount and applicable make/buy interface; identity remains pending. No inferred recipe, density or per-tool quantity.

- Selected flow: Alloy steel strip for saw-chain components
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-chain`

###### Petroleum lubricating oil (`oil`)

Actual supplied Petroleum lubricating oil grade/composition/completion for evidenced site fabrication; own gross and contained-component assay, moisture/stocks/paired returns and subsequent operations. Complete bought component already embeds raw inputs once; no universal recipe. Only actual petroleum-derived lubricating oil supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil, consistent with the CPC333 supplied interface, matching actual grade/additives, delivered state and provider; do not invent formulation fractions. Native Mass/kg; separate installed retained fill from actual factory consumption, losses and used contaminated Waste. Calorific namefield does not make oil an Energy flow or assume combustion.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture`

###### Water-miscible machining coolant concentrate (`coolant`)

Actual supplied Water-miscible machining coolant concentrate grade/composition/completion for evidenced site fabrication; own gross and contained-component assay, moisture/stocks/paired returns and subsequent operations. Complete bought component already embeds raw inputs once; no universal recipe. Only actual supplied liquid metalworking cutting-fluid preparation with matching actual water-miscible concentrate composition and35499/provider interface, verified dilution and supplier state; pure petroleum oil or neat process bath is different. Own concentrate/water/returns/stock and contained-chemical assays, no assumed dilution or carry-over loss.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture`

###### Municipal tap water (`tapwater`)

Actual supplied Municipal tap water grade/composition/completion for evidenced site fabrication; own gross and contained-component assay, moisture/stocks/paired returns and subsequent operations. Complete bought component already embeds raw inputs once; no universal recipe. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-manufacture`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Surface preparation and finishing (`finish`)

Actual cleaning, grinding and coating only where documented. Each actual coating/heat-treatment chemical and waste must be separately added.。

#### Inputs

##### Product flows

###### Isopropanol (`ipa`)

Actual supplied Isopropanol composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-metalworking`

###### Bonded aluminium-oxide grinding wheel (`abrasive`)

Actual supplied Bonded aluminium-oxide grinding wheel composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Only actual supplied finished bonded abrasive grinding wheel within37910, compatible material/bond/geometry/provider confirmed; broad Abrasives identity alone does not establish alumina composition. Raw abrasive grain, sandpaper and an installed separately sold cutting tool are distinct; include actual factory-consumed wheel only.

- Selected flow: Abrasives `685e7b7f-1555-4112-aa0b-3786e5508534`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-metalworking`

###### Epoxy powder coating (`powder`)

Actual supplied Epoxy powder coating composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Actual dry polymer powder formulation, own resin/additive grade, reclaim and cure; not a default polymer type.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-metalworking`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Tool assembly and integration (`integration`)

Actual pneumatic/hydraulic/petrol architecture, controls, retained fill and supplied attachments; distinguish factory consumption.。

#### Inputs

##### Product flows

###### Glass-fibre reinforced plastic hand-tool housing (`housing`)

Actual complete supplied reinforced-plastic hand-tool housing and included construction only; onsite moulding instead records actual separate resin/reinforcement/two-component feed and operations. Raw polymer is not a completed housing.

- Selected flow: Glass-fibre reinforced plastic hand-tool housing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Complete pneumatic vane motor (`airmotor`)

Actual supplied complete vane air motor for the corresponding pneumatic rotary tool; CP854 rotor/liner/endplates/blades and governor are model-specific. A reciprocal piston saw or cylinder is different. Replacements do not prove every bought motor ships.

- Selected flow: Complete pneumatic vane motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Complete hydraulic gear motor (`hydromotor`)

Actual supplied complete hydraulic gear motor compatible with the hydraulic-chain-saw drive; impact breaker piston/automatic valve is a different architecture. A cylinder, wind rotor or external power unit cannot replace this component.

- Selected flow: Complete hydraulic gear motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stanley-cs06`

###### Complete spark-ignition petrol engine for handheld tool (`engine`)

Actual complete bought spark-ignition non-vehicle handheld-tool engine, compatible displacement, fuel and mounting; onsite component manufacture is an alternative, counted once. A motor-vehicle43121 engine or independent aircraft/diesel unit is not this interface.

- Selected flow: Complete spark-ignition petrol engine for handheld tool
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `us-hs8467`

###### Finished dedicated hand-tool gear and shaft assembly (`gears`)

Actual finished dedicated tool gearing/shaft assembly, compatible actual rotary bevel-gear or hydraulic saw drive configuration; own machining instead uses real supplied stock and measured operations. Wind-turbine/vehicle assemblies are not matches.

- Selected flow: Finished dedicated hand-tool gear and shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Ball or roller bearings (`bearing`)

Actual supplied Ball or roller bearings composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Only actual supplied complete ball/roller bearing, compatible material, geometry and actual supplier; not shaft, housing or roller itself.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Finished nitrile-rubber O-ring seal (`seal`)

Actual supplied Finished nitrile-rubber O-ring seal composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Only actual complete supplied vulcanized-rubber sealing element, CN at-plant installed-assembly interface and actual NBR compound, geometry and fluid/pressure compatibility verified from supplier. Broad identity does not specify NBR or ring size; raw rubber and seals in a bought module are distinct.

- Selected flow: Sealing elements `a9943e4e-1a21-412c-859e-df09a2b5ee6f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Complete electronic engine ignition module (`ignition`)

Actual supplied Complete electronic engine ignition module composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Only actual finished internal-combustion-engine electrical ignition or starting equipment matching the relevant46910 branch, engine compatibility and supplier; vehicle lighting/wipers are not substitutes and control boards are not automatically ignition devices. Auxiliary ignition does not change the non-electric principal motor.

- Selected flow: Electrical ignition or starting equipment of a kind used for internal combustion engines, generators and cut-outs of a kind used in conjunction with internal combustion engines, electrical lighting or signalling equipment (except filament or discharge lamps), windscreen wipers, defrosters and demisters, of a kind used for cycles or motor vehicles `46a4d7e0-db60-4f6d-a637-28140132c05d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Insulated electric cable, <=1000 V (`cable`)

Actual supplied Insulated electric cable, <=1000 V composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Only actual supplied 0.6/1kV Cu/Al power cable with extruded insulation/sheath, matching GB/T 12706.1-2020 and actual supplier construction. This identity does not establish an arbitrary ignition lead, flexible cord or signal cable. Native Length m; measure issued, cut, installed and returned length/stocks; use the same actual construction measured kg/m only for separate physical mass reconciliation.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_length.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_length`
- Sources: `cp-grinder`

###### Vulcanised non-hard-rubber hydraulic hose (`hose`)

Actual supplied Vulcanised non-hard-rubber hydraulic hose composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Only actual supplied finished vulcanized non-hard-rubber hydraulic hose, compatible material/reinforcement/bore/pressure/fluid and provider, not unvulcanized intermediate or arbitrary gas hose. Native Mass/kg; no assumed length or linear density.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Finished chainsaw guide bar (`bar`)

Actual supplied finished guide bar only for a chainsaw configuration whose delivered list includes it; separately offered replacement or raw bar stock does not prove inclusion. Net delivered attachment mass and scope recorded.

- Selected flow: Finished chainsaw guide bar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Finished saw chain (`chain`)

Actual supplied completed saw chain when actually included; onsite steel-strip punching/polishing/hardening/riveting is separate make-route, not a purchased chain input. Standalone chain remains outside complete-tool reference scope.

- Selected flow: Finished saw chain
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stihl-chain`

###### Finished dedicated hand-tool guard (`guard`)

Actual completed dedicated guard/shroud fitting delivered model, including actual metal/plastic supply state; parts drawing does not establish raw grade or universal guards. Separately offered accessories are not presumed shipped.

- Selected flow: Finished dedicated hand-tool guard
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Lubricating grease (`grease`)

Actual retained assembly grease only if actual supplied fill and composition are evidenced; CP maintenance lubrication intervals do not prove factory quantity or shipment. Wax/solvent lubricant identity is not assumed compatible grease.

- Selected flow: Lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cp-grinder`

###### Mineral hydraulic oil (`hydraulic`)

Actual supplied Mineral hydraulic oil composition/finished state/geometry/provider for this compatible configuration and documented site operation; count embedded manufacture once, no duplicate raw inputs or maintenance-default quantity. Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources: `stanley-cs06`

###### Gaseous nitrogen (`nitrogen`)

Actual specific supplied Gaseous nitrogen grade, composition, completion state and provider require verification for the activated route. Record actual amount and applicable make/buy interface; identity remains pending. No inferred recipe, density or per-tool quantity.

- Selected flow: Gaseous nitrogen
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stanley-br87`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance and qualification (`test`)

Actual acceptance and attributable loaded trials/rework; catalogue operating rates are not factory throughput.。

#### Inputs

##### Product flows

###### Compressed air (`test_air`)

Actual measured factory-qualification Compressed air consumption/issue/returns/stocks for the declared tool mechanism and common accepted cohort, separately from retained fill and net tool mass. Customer operational throughput or catalogue rate is not factory load. Only actual compatible supplied compressed air with own delivery T/P/standard state, purity and supplier; native Volume/m3. Onsite compressor electricity and bought compressed-air provider burden cannot be counted twice. Only actual compatible supplied compressed air with own delivery T/P/standard state, purity and supplier; native Volume/m3. Onsite compressor electricity and bought compressed-air provider burden cannot be counted twice.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources: `cp-saw`

###### Mineral hydraulic oil (`test_hydraulic`)

Actual measured factory-qualification Mineral hydraulic oil consumption/issue/returns/stocks for the declared tool mechanism and common accepted cohort, separately from retained fill and net tool mass. Customer operational throughput or catalogue rate is not factory load. Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses. Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources: `stanley-cs06`

###### Unleaded gasoline (`gasoline`)

Actual measured factory-qualification Unleaded gasoline consumption/issue/returns/stocks for the declared tool mechanism and common accepted cohort, separately from retained fill and net tool mass. Customer operational throughput or catalogue rate is not factory load. Only actual gasoline matching33311 and supplier grade/formulation for documented factory petrol-tool qualification; actual unleaded grade, component assays, density and heating value separately evidenced. Generic identity does not prescribe formulation, premix ratio, geographic provider or fuel consumption; not customer-life fuel or an assumed shipped tankful.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `us-hs8467`

###### Two-stroke engine lubricating oil (`two_stroke_oil`)

Actual engine-grade two-stroke lubricant for documented factory tests only when that engine system requires it; verify actual additives and compatibility, with independently measured issue, returns and stocks. No default engine architecture or premix ratio.

- Selected flow: Two-stroke engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stanley-cs06`

###### Alloy steel billet (`test_steel`)

Actual measured factory-qualification Alloy steel billet consumption/issue/returns/stocks for the declared tool mechanism and common accepted cohort, separately from retained fill and net tool mass. Customer operational throughput or catalogue rate is not factory load. Only actual compatible alloy steel primary/semi-finished billet with matching declared chemistry, shape and supplied steel-production/provider interface; no alloy grade, billet dimensions or forging completion assumed. Only actual compatible alloy steel primary/semi-finished billet with matching declared chemistry, shape and supplied steel-production/provider interface; no alloy grade, billet dimensions or forging completion assumed.

- Selected flow: Alloy steel `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stanley-cs06`

###### Green coniferous sawnwood (`test_wood`)

Actual measured factory-qualification Green coniferous sawnwood consumption/issue/returns/stocks for the declared tool mechanism and common accepted cohort, separately from retained fill and net tool mass. Customer operational throughput or catalogue rate is not factory load. Only actual green/fresh coniferous sawnwood over6mm compatible31101 sawmill-gate delivery/provider, used in a documented factory sawing trial; green describes moisture not synthetic colour or all wood. Actual species/grade/moisture and consumption/recovery recorded; outside tool Dnet.

- Selected flow: Sawnwood (green), at sawmill gate `f15bb061-fd78-47b3-9fc2-216d58b7f9fb`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `stanley-cs06`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Accepted release and packaging (`dispatch`)

Calibrated accepted net tool mass and actual supplied packing, excluding packing from reference denominator.。

#### Inputs

##### Product flows

###### Corrugated fibreboard (`board`)

Actual supplied Corrugated fibreboard packaging, own net issue/returns/stocks and reuse record. Packing mass is separate from accepted complete-tool net denominator; no assumed reuse count. Actual C/E/F corrugated fibreboard with fibre at least80%; fibre content is not recycled content. Declare actual recycling fraction independently; supplied board is not a complete box.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-cpc-44231`

###### Unsupported non-cellular non-self-adhesive LDPE foil (`film`)

Actual supplied Unsupported non-cellular non-self-adhesive LDPE foil packaging, own net issue/returns/stocks and reuse record. Packing mass is separate from accepted complete-tool net denominator; no assumed reuse count. Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-cpc-44231`

###### EURO wooden pallet (`pallet`)

Actual supplied EURO wooden pallet packaging, own net issue/returns/stocks and reuse record. Packing mass is separate from accepted complete-tool net denominator; no assumed reuse count. Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `un-cpc-44231`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tools for working in the hand, pneumatic, hydraulic or with self-contained non-electric motor (`reference_product`)

Actual accepted complete delivered handworking tool, supplied configuration components/accessories and proven retained fill; calibrated net mass and accepted count for the same cohort/period. Packing/rejects/consumed factory-test stock excluded from Dnet. Only an actual accepted complete pneumatic, hydraulic or self-contained non-electric-motor handworking tool, finished manufactured at-plant44231 interface, actual model/configuration and supplied attachments/retained fills. Calibrated same-configuration net tool mass; exclude packing/rejects/consumed trial stock. Official Chinese手动 does not expand to ordinary unpowered hand tools. Electric tools, standalone parts/engine/powerpack/cutting tools are separate.

- Selected flow: Tools for working in the hand, pneumatic, hydraulic or with self-contained non-electric motor `ec897060-cae0-4e73-ad3c-35b2c43228a4`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-44231`; `us-hs8467`

##### Waste flows

##### Elementary flows

### Process: Shared services and outgoing transfers (`services`)

Only unassigned residual shared utilities after separately assigned fabrication/integration/test/dispatch loads; actual segregated wastes and species emissions.。

#### Inputs

##### Product flows

###### Electricity, user-side 1-35 kV (`electricity`)

Actual metered unassigned shared-service Electricity, user-side 1-35 kV residual only, same site/configuration/period after separately assigned loads, export and storage reconciliation. Actual onsite generation versus purchased provider route counted once. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-metalworking`

###### Compressed air (`compressed_air`)

Actual metered unassigned shared-service Compressed air residual only, same site/configuration/period after separately assigned loads, export and storage reconciliation. Actual onsite generation versus purchased provider route counted once. Only actual compatible supplied compressed air with own delivery T/P/standard state, purity and supplier; native Volume/m3. Onsite compressor electricity and bought compressed-air provider burden cannot be counted twice.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources: `jrc-metalworking`

###### Purchased industrial heat from natural gas (`heat`)

Actual metered unassigned shared-service Purchased industrial heat from natural gas residual only, same site/configuration/period after separately assigned loads, export and storage reconciliation. Actual onsite generation versus purchased provider route counted once. Only actual compatible CN at-plant natural-gas industrial heat Energy delivery and factory provider/period. Independently meter supply/return gross/net thermodynamic state; supplier fuel stays upstream, not site combustion.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-metalworking`

###### Natural gas for onsite process heat (`natural_gas`)

Actual specific supplied Natural gas for onsite process heat grade, composition, completion state and provider require verification for the activated route. Record actual amount and applicable make/buy interface; identity remains pending. No inferred recipe, density or per-tool quantity.

- Selected flow: Natural gas for onsite process heat
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-metalworking`

###### Municipal tap water (`services_water`)

Actual metered unassigned shared-service Municipal tap water residual only, same site/configuration/period after separately assigned loads, export and storage reconciliation. Actual onsite generation versus purchased provider route counted once. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-metalworking`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Unprocessed industrial steel scrap (`scrap`)

Actual measured outgoing Unprocessed industrial steel scrap transfer; own constituent assay/moisture/contamination, measured stocks, paired internal returns and actual receiver route; no avoided credit or generic treatment default. Only actual untreated industrial steel machining/forming scrap at plant, leaving without further treatment; own composition, moisture/contamination, stocks, paired internal returns and actual receiver route. No prepared secondary steel or avoided credits.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-metalworking`

###### Segregated aluminium machining scrap (`al_waste`)

Actual measured outgoing Segregated aluminium machining scrap transfer; own constituent assay/moisture/contamination, measured stocks, paired internal returns and actual receiver route; no avoided credit or generic treatment default.

- Selected flow: Segregated aluminium machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-metalworking`

###### Segregated magnesium machining scrap (`mg_waste`)

Actual outgoing magnesium-metal machining scrap segregated from aluminium/steel, own alloy assay/moisture/oil/stocks and paired internal melt returns, actual receiver route. Magnesium slag and unspecified heavy metal are not metal chips; no avoided credit.

- Selected flow: Segregated magnesium machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-metalworking`

###### Non-hazardous thermoplastic production scrap (`plastic_waste`)

Actual segregated outgoing thermoplastic production scrap with own polymer/reinforcement/contamination/moisture assay, stocks and paired internal regrind returns; actual receiver route separately recorded. Optical-assembly waste, packaging-only or mixed-metal/plastic output does not automatically match.

- Selected flow: Non-hazardous thermoplastic production scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-metalworking`

###### Used lubricating oil waste (`oil_waste`)

Actual measured outgoing Used lubricating oil waste transfer; own constituent assay/moisture/contamination, measured stocks, paired internal returns and actual receiver route; no avoided credit or generic treatment default. Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-metalworking`

###### Physical metal-component cleaning wastewater transfer (`wastewater`)

Actual physically transferred cleaning/process wastewater, own measured solution mass/water fraction/contained chemicals/moisture/density/stocks and actual receiver treatment. This Waste transfer is distinct from elementary emissions to water; landing-site untreated discharge identities are not factory transfer proxies.

- Selected flow: Physical metal-component cleaning wastewater transfer
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-metalworking`

###### Wood offcuts from actual factory acceptance trial (`wood_waste`)

Actual measured outgoing Wood offcuts from actual factory acceptance trial transfer; own constituent assay/moisture/contamination, measured stocks, paired internal returns and actual receiver route; no avoided credit or generic treatment default. Only actual non-agglomerated factory-trial sawdust, matched untreated at-plant combustion/recycling receiver route and own wood/contamination/moisture/stock assays. Other offcuts, briquettes, bark or collected air dust need their own identities. No avoided credit, universal recycling route or customer wood-throughput attribution.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-metalworking`

###### Dry epoxy powder-coating overspray waste (`powder_waste`)

Actual measured outgoing Dry epoxy powder-coating overspray waste transfer; own constituent assay/moisture/contamination, measured stocks, paired internal returns and actual receiver route; no avoided credit or generic treatment default. Only actual dry powder-coating overspray waste matching supplied waste type; wet sludge or captured liquid/filter media separately needs exact identity and assay.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-metalworking`

##### Elementary flows

###### Carbon dioxide, fossil, unspecified air (`co2`)

Actual independently measured Carbon dioxide, fossil, unspecified air release; matched post-control species concentration/flow/duration and T/P/wet-dry state, separate fugitive sampling and actual compartment; capture is not destruction and balance residual is not air. Only actual measured fossil-origin CO2 to ordinary unspecified air; not biogenic, indoor, water or long-term release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `jrc-metalworking`

###### Carbon monoxide, fossil, unspecified air (`co`)

Actual independently measured Carbon monoxide, fossil, unspecified air release; matched post-control species concentration/flow/duration and T/P/wet-dry state, separate fugitive sampling and actual compartment; capture is not destruction and balance residual is not air. Only actual measured fossil-origin CO to ordinary unspecified air; carbon closure alone cannot determine CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `jrc-metalworking`

###### Water vapour, unspecified air (`vapour`)

Actual independently measured Water vapour, unspecified air release; matched post-control species concentration/flow/duration and T/P/wet-dry state, separate fugitive sampling and actual compartment; capture is not destruction and balance residual is not air. Only independently measured actual water-vapour release to ordinary unspecified air; retained cooling water, wastewater and unrelated residual are not air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `jrc-metalworking`

###### Nitrogen dioxide, unspecified air (`no2`)

Actual independently measured molecular nitrogen-dioxide release to ordinary unspecified air, post-control matched concentration/flow/duration and T/P dry/wet basis; NOx-as-NO2-equivalent and nitrite-to-water are distinct. Unexplained fuel/chemical residual never assigned to air.

- Selected flow: Nitrogen dioxide, unspecified air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `jrc-metalworking`

###### Particulate matter, <=10 micrometres, unspecified air (`pm10`)

Actual independently measured Particulate matter, <=10 micrometres, unspecified air release; matched post-control species concentration/flow/duration and T/P/wet-dry state, separate fugitive sampling and actual compartment; capture is not destruction and balance residual is not air. Only actual independently measured whole PM10 particle release to ordinary unspecified air, including its fine fraction, using size-resolved same-period post-control concentration/flow/state and measured fugitive basis. PM2.5–PM10 coarse-only fraction, soot, total unspecified dust or captured powder must not replace this identity; prevent overlap if a fine fraction is separately reported.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `jrc-metalworking`

###### Isopropanol, unspecified air (`ipa_air`)

Actual independently measured Isopropanol, unspecified air release; matched post-control species concentration/flow/duration and T/P/wet-dry state, separate fugitive sampling and actual compartment; capture is not destruction and balance residual is not air. Only actual emitted IPA CAS67-63-0 to ordinary unspecified air, matched post-control sampling; not indoor, soil, liquid capture or long-term release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `jrc-metalworking`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated machine models or use machine mass automatically for every utility. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Adopted supplied identity conditions

| row_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| steel | steel | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| alloy_billet | alloy_billet | Only actual compatible alloy steel primary/semi-finished billet with matching declared chemistry, shape and supplied steel-production/provider interface; no alloy grade, billet dimensions or forging completion assumed. | actual supplied lot identity/state/interface evidence |
| aluminium | aluminium | Only actual primary unwrought aluminium ingot, compatible global at-plant primary-production provider and composition. Actual hand-tool alloy, alloying inputs and casting route require independent evidence; not finished casting or bar stock. | actual supplied lot identity/state/interface evidence |
| magnesium | magnesium | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| pa6 | pa6 | Only actual PA6 primary injection-moulding resin with compatible RER at-plant supplied/provider interface. Source appliance context does not establish this tool polymer grade or reinforcement fraction; no inference that all reinforced housings use PA6. Finished reinforced compound or housing is distinct. | actual supplied lot identity/state/interface evidence |
| pp | pp | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| glass | glass | Only actual E-glass sliver/roving/yarn/chopped-strand reinforcement matching37121, composition and provider; not woven cloth or finished reinforced-polymer housing. No universal glass fraction; bought compound already embeds reinforcement once. | actual supplied lot identity/state/interface evidence |
| strip | strip | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| oil | oil | Only actual petroleum-derived lubricating oil supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil, consistent with the CPC333 supplied interface, matching actual grade/additives, delivered state and provider; do not invent formulation fractions. Native Mass/kg; separate installed retained fill from actual factory consumption, losses and used contaminated Waste. Calorific namefield does not make oil an Energy flow or assume combustion. | actual supplied lot identity/state/interface evidence |
| coolant | coolant | Only actual supplied liquid metalworking cutting-fluid preparation with matching actual water-miscible concentrate composition and35499/provider interface, verified dilution and supplier state; pure petroleum oil or neat process bath is different. Own concentrate/water/returns/stock and contained-chemical assays, no assumed dilution or carry-over loss. | actual supplied lot identity/state/interface evidence |
| tapwater | tapwater | Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns. | actual supplied lot identity/state/interface evidence |
| ipa | ipa | Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration. | actual supplied lot identity/state/interface evidence |
| abrasive | abrasive | Only actual supplied finished bonded abrasive grinding wheel within37910, compatible material/bond/geometry/provider confirmed; broad Abrasives identity alone does not establish alumina composition. Raw abrasive grain, sandpaper and an installed separately sold cutting tool are distinct; include actual factory-consumed wheel only. | actual supplied lot identity/state/interface evidence |
| powder | powder | Actual dry polymer powder formulation, own resin/additive grade, reclaim and cure; not a default polymer type. | actual supplied lot identity/state/interface evidence |
| housing | housing | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| airmotor | airmotor | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| hydromotor | hydromotor | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| engine | engine | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| gears | gears | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| bearing | bearing | Only actual supplied complete ball/roller bearing, compatible material, geometry and actual supplier; not shaft, housing or roller itself. | actual supplied lot identity/state/interface evidence |
| seal | seal | Only actual complete supplied vulcanized-rubber sealing element, CN at-plant installed-assembly interface and actual NBR compound, geometry and fluid/pressure compatibility verified from supplier. Broad identity does not specify NBR or ring size; raw rubber and seals in a bought module are distinct. | actual supplied lot identity/state/interface evidence |
| ignition | ignition | Only actual finished internal-combustion-engine electrical ignition or starting equipment matching the relevant46910 branch, engine compatibility and supplier; vehicle lighting/wipers are not substitutes and control boards are not automatically ignition devices. Auxiliary ignition does not change the non-electric principal motor. | actual supplied lot identity/state/interface evidence |
| cable | cable | Only actual supplied 0.6/1kV Cu/Al power cable with extruded insulation/sheath, matching GB/T 12706.1-2020 and actual supplier construction. This identity does not establish an arbitrary ignition lead, flexible cord or signal cable. Native Length m; measure issued, cut, installed and returned length/stocks; use the same actual construction measured kg/m only for separate physical mass reconciliation. | actual supplied lot identity/state/interface evidence |
| hose | hose | Only actual supplied finished vulcanized non-hard-rubber hydraulic hose, compatible material/reinforcement/bore/pressure/fluid and provider, not unvulcanized intermediate or arbitrary gas hose. Native Mass/kg; no assumed length or linear density. | actual supplied lot identity/state/interface evidence |
| bar | bar | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| chain | chain | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| guard | guard | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| grease | grease | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| hydraulic | hydraulic | Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses. | actual supplied lot identity/state/interface evidence |
| nitrogen | nitrogen | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| test_air | test_air | Only actual compatible supplied compressed air with own delivery T/P/standard state, purity and supplier; native Volume/m3. Onsite compressor electricity and bought compressed-air provider burden cannot be counted twice. | actual supplied lot identity/state/interface evidence |
| test_hydraulic | test_hydraulic | Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses. | actual supplied lot identity/state/interface evidence |
| gasoline | gasoline | Only actual gasoline matching33311 and supplier grade/formulation for documented factory petrol-tool qualification; actual unleaded grade, component assays, density and heating value separately evidenced. Generic identity does not prescribe formulation, premix ratio, geographic provider or fuel consumption; not customer-life fuel or an assumed shipped tankful. | actual supplied lot identity/state/interface evidence |
| two_stroke_oil | two_stroke_oil | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| test_steel | test_steel | Only actual compatible alloy steel primary/semi-finished billet with matching declared chemistry, shape and supplied steel-production/provider interface; no alloy grade, billet dimensions or forging completion assumed. | actual supplied lot identity/state/interface evidence |
| test_wood | test_wood | Only actual green/fresh coniferous sawnwood over6mm compatible31101 sawmill-gate delivery/provider, used in a documented factory sawing trial; green describes moisture not synthetic colour or all wood. Actual species/grade/moisture and consumption/recovery recorded; outside tool Dnet. | actual supplied lot identity/state/interface evidence |
| reference_product | reference_product | Only an actual accepted complete pneumatic, hydraulic or self-contained non-electric-motor handworking tool, finished manufactured at-plant44231 interface, actual model/configuration and supplied attachments/retained fills. Calibrated same-configuration net tool mass; exclude packing/rejects/consumed trial stock. Official Chinese手动 does not expand to ordinary unpowered hand tools. Electric tools, standalone parts/engine/powerpack/cutting tools are separate. | actual supplied lot identity/state/interface evidence |
| board | board | Actual C/E/F corrugated fibreboard with fibre at least80%; fibre content is not recycled content. Declare actual recycling fraction independently; supplied board is not a complete box. | actual supplied lot identity/state/interface evidence |
| film | film | Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved. | actual supplied lot identity/state/interface evidence |
| pallet | pallet | Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count. | actual supplied lot identity/state/interface evidence |
| electricity | electricity | Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity. | actual supplied lot identity/state/interface evidence |
| compressed_air | compressed_air | Only actual compatible supplied compressed air with own delivery T/P/standard state, purity and supplier; native Volume/m3. Onsite compressor electricity and bought compressed-air provider burden cannot be counted twice. | actual supplied lot identity/state/interface evidence |
| heat | heat | Only actual compatible CN at-plant natural-gas industrial heat Energy delivery and factory provider/period. Independently meter supply/return gross/net thermodynamic state; supplier fuel stays upstream, not site combustion. | actual supplied lot identity/state/interface evidence |
| natural_gas | natural_gas | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| services_water | services_water | Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns. | actual supplied lot identity/state/interface evidence |
| scrap | scrap | Only actual untreated industrial steel machining/forming scrap at plant, leaving without further treatment; own composition, moisture/contamination, stocks, paired internal returns and actual receiver route. No prepared secondary steel or avoided credits. | actual supplied lot identity/state/interface evidence |
| al_waste | al_waste | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| mg_waste | mg_waste | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| plastic_waste | plastic_waste | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| oil_waste | oil_waste | Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default. | actual supplied lot identity/state/interface evidence |
| wastewater | wastewater | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| wood_waste | wood_waste | Only actual non-agglomerated factory-trial sawdust, matched untreated at-plant combustion/recycling receiver route and own wood/contamination/moisture/stock assays. Other offcuts, briquettes, bark or collected air dust need their own identities. No avoided credit, universal recycling route or customer wood-throughput attribution. | actual supplied lot identity/state/interface evidence |
| powder_waste | powder_waste | Only actual dry powder-coating overspray waste matching supplied waste type; wet sludge or captured liquid/filter media separately needs exact identity and assay. | actual supplied lot identity/state/interface evidence |
| co2 | co2 | Only actual measured fossil-origin CO2 to ordinary unspecified air; not biogenic, indoor, water or long-term release. | actual supplied lot identity/state/interface evidence |
| co | co | Only actual measured fossil-origin CO to ordinary unspecified air; carbon closure alone cannot determine CO. | actual supplied lot identity/state/interface evidence |
| vapour | vapour | Only independently measured actual water-vapour release to ordinary unspecified air; retained cooling water, wastewater and unrelated residual are not air. | actual supplied lot identity/state/interface evidence |
| no2 | no2 | Actual specific grade/state/provider must match; pending identities stay explicit. | actual supplied lot identity/state/interface evidence |
| pm10 | pm10 | Only actual independently measured whole PM10 particle release to ordinary unspecified air, including its fine fraction, using size-resolved same-period post-control concentration/flow/state and measured fugitive basis. PM2.5–PM10 coarse-only fraction, soot, total unspecified dust or captured powder must not replace this identity; prevent overlap if a fine fraction is separately reported. | actual supplied lot identity/state/interface evidence |
| ipa_air | ipa_air | Only actual emitted IPA CAS67-63-0 to ordinary unspecified air, matched post-control sampling; not indoor, soil, liquid capture or long-term release. | actual supplied lot identity/state/interface evidence |

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | accepted net mass per machine | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | attributable quantity / accepted machines | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | attributable energy / accepted machines | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | attributable waste / accepted machines | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | attributable emission / accepted machines | sampling/flow/combined uncertainty |
| cp_volume | all | specific supplied gas/fluid | meter | gas/fluid identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter native volume at actual state: gas T/P, liquid temperature and composition state. Mass conversion uses that actual stream measured density, not generic factors. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | attributable volume / accepted machines | T/P/flow/density/calibration |
| cp_length | integration | actual insulated low-voltage copper cable | length_meter | actual conductor/insulation/sheath and voltage; measured length m; cutting/installed/return; own linear density kg/m; stocks; Q; N | Reconcile native m against received/cut/installed length and return/stocks. If BOM mass is needed use that actual cable measured linear density kg/m, not a generic copper-mass or energy proxy. | m | each cut/installation lot | common manufacturing period | actual configuration cable supply interface | attributable length / accepted machines | calibrated length/cut sheet/actual construction/linear density |

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
| supplied_cable_interface | cable | Only actual supplied 0.6/1kV Cu/Al power cable with extruded insulation/sheath, matching GB/T 12706.1-2020 and actual supplier construction. This identity does not establish an arbitrary ignition lead, flexible cord or signal cable. Native Length m; measure issued, cut, installed and returned length/stocks; use the same actual construction measured kg/m only for separate physical mass reconciliation. | actual supplier standard/rated-voltage/construction and calibrated native-length records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, complete pneumatic/hydraulic/self-contained non-electric motor handworking function and rotary/impact/reciprocating/forestry/gardening supplied architecture, with separate electric tools/independent engines/external power packs/parts/tool holders/cutting tools/mowers, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `denominator` | all inventory rows | All inventory uses the same accepted cohort and common period. Verify calibrated accepted net mass and N; reject and packaging mass excluded. Check q_item=Q/N then normalization by same mean M; mixed configurations are invalid. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `double_count` | make_buy | Reconcile complete bought modules versus own materials and operations, retained fills/accessories versus factory consumption, paired internal transfers and external inputs. Count each actual burden once. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `water_close` | physical water records | For each term use its own measured water fraction, density and wet/dry basis: fresh and input moisture plus reaction water and beginning stocks minus final stocks, retained product, discharge and evaporation; internal returns cancel paired. Investigate measured closure against combined sampling/meter/allocation uncertainty; no universal tolerance. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `species_close` | material and chemical records | Close each contained metal/chemical separately using each input, product, scrap, sludge, liquid and release own matched assay and dry/wet basis, reaction stoichiometry and stocks. Gross mass is not contained element. No all-inventory mass rule applies to energy or transport. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `solvent_close` | solvent records | Distinguish retained solvent, recovered return, captured liquid/media, demonstrated destruction, wastewater/non-air residual and actual species air release. Capture is not destruction; an unexplained residual must be investigated, not assigned to air. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `utility_close` | energy records | Reconcile purchased imports, actual on-site generation, exports and storage changes with assigned fabrication/finish/integration/test/dispatch loads in the same period and units. Shared row ONLY unassigned residual; investigate negative residual against period, unit and combined measurement uncertainty without clipping. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `steam_close` | steam and condensate | Use supply kg times supply own MJ/kg and return kg times return own MJ/kg at measured pressure/temperature relative to common zero. If gross supply, subtract return once; if already-net invoice, do not subtract again. Keep physical steam/condensate mass balance independent from energy. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |
| `species_emissions` | air releases | Validate every emitted species and compartment independently. Fuel carbon balance cannot alone establish CO or NOx. NO2 mass is not NOx reported as NO2 equivalent; keep reporting conventions and actual species identities distinct. | `un-cpc-44231`; `us-hs8467`; `jrc-metalworking` |

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
| cp-grinder | handbook | CP854 Angle Grinder operators manual and parts; CP854/854E Model K CA156836 RevG; copyright2004; printed KEK/04-06 observed, no inferred print date; https://www.cp.com/content/dam/pim/itba/cp/technical-documents/CA156836.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| cp-3650 | handbook | CP3650 pneumatic angle grinder supplied construction; undated actual technical body retained snapshot2026-10-03; https://tools.cp.com/en-ca/products/grinders/cp3650-120ab5v-sku6151607900 | Product architecture/category boundary; not factory recipe or quantitative default |
| stihl-manufacture | handbook | MS 400 C-M manufacturing components; undated actual technical body retained snapshot2026-10-03; https://corporate.stihlusa.com/en/stihl-journal/corporate-insights/simplicity-itself | Product architecture/category boundary; not factory recipe or quantitative default |
| stihl-chain | handbook | How STIHL saw chains are produced; 29.08.2025 actual article body; https://www.stihl.co.uk/en/professional/knowledge/behind-the-scenes/stihl-chain-production | Product architecture/category boundary; not factory recipe or quantitative default |
| stanley-cs06 | handbook | STANLEY CS05 CS06 hydraulic chain saw user manual manufacturer authored dealer mirror; 66864 8/2018 Ver16; actual cover copyright2014, manufacturer-authored retained dealer mirror; https://www.intermtnsales.com/pub/media/wysiwyg/pdf/CS06/Owner%27s-Manual/CS05_06%20User%20Manual.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| stanley-br87 | handbook | STANLEY BR87 hydraulic breaker manufacturer user manual dealer mirror; 65778 User Manual6/2019 Ver27; actual manufacturer cover, retained dealer mirror; https://www.echopkins.com/wp-content/uploads/2020/06/SOM-BR87-65778-06-2019-v27-USER.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| cp-saw | handbook | CP7900 manufacturer reciprocating saw manual and exploded parts dealer mirror; CP7900 Model A 8940158336 RevB; copyright2004; printed KEK/07-06 observed, no inferred print date; https://assets.rs-online.com/image/upload/v1679047312/Datasheets/cdd93e64af74e89be271eaadaa3e39f7.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44231 | official_guidance | Central Product Classification Version3.0 Explanatory Notes; Version3.0 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| us-hs8467 | official_guidance | Schedule B Book - Chapter 84; 2022 Schedule B chapter; https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | Product architecture/category boundary; not factory recipe or quantitative default |
| jrc-metalworking | official_guidance | Best Environmental Management Practice in the Fabricated Metal Products sector; EUR 30025 EN, 2020; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| stihl-manufacture-slides | handbook | MS 400 C-M manufacturing components; undated actual technical body retained snapshot2026-10-03; https://corporate.stihlusa.com/en/stihl-journal/corporate-insights/simplicity-itself | Product architecture/category boundary; not factory recipe or quantitative default |
