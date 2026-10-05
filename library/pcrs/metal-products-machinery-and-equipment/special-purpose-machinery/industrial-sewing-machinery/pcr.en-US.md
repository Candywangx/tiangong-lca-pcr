---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.industrial-sewing-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Industrial single-needle lockstitch sewing workstation manufacturing

## 1. Scope and Applicability

Complete electrically driven industrial single-needle flatbed lockstitch sewing workstations in one declared supplied configuration: sewing head, installed drive and control, table top and load-bearing stand, foot control, thread stand, required fitted guards and retained lubricants. Direct-drive and belt-drive configurations are separate variants. This narrower category covers only this manufacturing boundary within CPC44621, not all industrial sewing machines.

Household and book-sewing machines; overlock, coverstitch, chainstitch, embroidery, buttonhole and programmable pattern machines; knitting/weaving machinery; head-only delivery, independently sold table/stand/motor/control or spare parts; customer sewing production, operating electricity, textile output, maintenance/lubrication replenishment, lifetime needle replacement and end-of-life. Installation/service contracts and factory building manufacture are outside this module. Extra spare needles/bobbins and separately bottled accessories require separate supplied-product accounting.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.industrial-sewing-machinery |
| classification_refs | CPC:3.0:44621; narrower |
| covered_products | Declared complete single-needle flatbed industrial lockstitch workstation, electric drive, exact new accepted supply. |
| excluded_products | Household and book-sewing machines; overlock, coverstitch, chainstitch, embroidery, buttonhole and programmable pattern machines; knitting/weaving machinery; head-only delivery, independently sold table/stand/motor/control or spare parts; customer sewing production, operating electricity, textile output, maintenance/lubrication replenishment, lifetime needle replacement and end-of-life. Installation/service contracts and factory building manufacture are outside this module. Extra spare needles/bobbins and separately bottled accessories require separate supplied-product accounting. |
| representative_product | One accepted workstation with needle-bar/rotary-hook/bobbin/feed-dog/presser-foot system, matched drive/control and complete table/stand/foot-control/thread-stand/guard supply. A direct-drive unit and a belt-driven unit are distinct configurations, not one interchangeable BOM. |
| production_route | Receipt of prepared castings/stock or finished components; actual machining and finishing if performed; sewing-head and workstation assembly; adjustment/testing/release; actual packing. Supplier foundry, heat treatment, motor winding and electronic-board manufacture are upstream unless explicitly expanded with measured inventories. |
| market_state | New accepted complete workstation ready for shipment; all required supplied parts and retained fluids included, transport packaging and test textiles excluded from net mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and delivery of the declared accepted complete workstation, not sewing of cloth or a seam service. |
| How much | 1 kg accepted net complete workstation in one configuration; a normalized share of the whole machine, not a kilogram component independently able to sew. |
| How well | Conforms to released BOM/drawings and current signed model acceptance plan: mechanism timing, feed/needle/hook compatibility, stitch formation at specified test conditions, drive/control function, guards and electrical conformity. No universal sewing speed, stitch length, power, thread tension or service life is set. |
| How long or cycle | One manufacture/acceptance cycle; customer operating time, lifetime seams and needle replacement excluded. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sewing machines, except book sewing machines and household sewing machines `9744fffe-2c8c-4fb9-b05f-486605652e8c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/BOM revision; serial/batch; single-needle flatbed lockstitch; direct/belt drive and motor/control inclusions; needle system/hook/feed/presser configuration; table/stand/pedal/thread stand/guards; body/shaft grades and supplied states; retained lubricant grade/mass and dry/filled shipping; measured net M; actual test fabric/thread/conditions/pass criteria; site/period; make-or-buy and conditional operations; supplier/upstream/transport links; packaging/extras exclusion |

Declare every required qualifier in dataset metadata/reference comments. The broad public product identity is narrowed to the exact complete workstation supplied. Normalization by mass alone does not make direct-drive/belt-drive machines or different sewing functions equivalent.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| electricity_units | fabrication_electricity; finishing_electricity; assembly_electricity; acceptance_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert measured kWh by3.6 MJ/kWh before normalization; retain actual below1kV meter/provider boundary. Other utility carriers are separate exchanges. |

Weigh the complete assembled accepted workstation, including all required delivered table/stand/drive/control/guards and retained lubricant, before transport disassembly. Traceable component weigh records reconcile dismantled shipment back to this M; they do not replace complete weighing. Exclude shipping braces/packaging, spare sets and test fabric/thread. Do not count a head weight as workstation M. For dry delivery disclose dry retained state; separately bottled oil is a separate supplied product. Oil volume records require measured same-temperature density or direct mass weighing before kg accounting; no generic density or per-machine weight is given. Count accepted machines of the same configuration and period; M and numerator q_item must match.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One manufacturer receives stock/castings or finished components; this is not an assumed raw-ore-to-machine boundary. |
| starting_condition_role | Declared manufacturing foreground module starting point. |
| product_classification_scope | Complete electrically driven industrial single-needle flatbed lockstitch sewing workstations in one declared supplied configuration: sewing head, installed drive and control, table top and load-bearing stand, foot control, thread stand, required fitted guards and retained lubricants. Direct-drive and belt-drive configurations are separate variants. This narrower category covers only this manufacturing boundary within CPC44621, not all industrial sewing machines. |
| recursive_input_rule | Stop bought-in head/body/motor/control at documented supplied boundary; contained needle/hook/shaft/bearings/circuitry/coating/oil replace separate inputs. Site-made internal transfers are not extra purchases. Complete incoming head still needs full supply and mass reconciliation. |
| upstream_dataset_requirement | Expanded assessment links actual compatible component/material suppliers, outsourced operations, inbound transport and waste treatment. Missing identity/provider/amount are distinct gaps; UUID supplies no impact inventory. |
| disclosure | Declare site/period, full supplied workstation, dry/filled state, make-or-buy, supplier processes, actual utilities/consumables, test media/rework, packing and capital/bench treatment. This receipt-to-dispatch module alone is not complete cradle-to-gate coverage. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_supply | workstation | JUKI installation sections show table seating, oil pan, belt cover and thread stand; Brother shows direct-drive head/motor and control connections. These historical examples establish configuration distinctions only. Current supply list governs table/stand/motor/control inclusions. | juki-ddl8700; brother-s7100a |
| boundary_oil | lubrication | Actual factory fill/loss is recorded separately from retained delivered oil and user replenishment. Neither JUKI operating break-in instructions nor Brother approximate oil amount is a universal manufacturing test or factor. | juki-ddl8700; brother-s7100a |
| boundary_downstream | customer_use | Exclude customer seam-production textiles/energy and operating life. Factory stitch-test consumption and measured manufacturing emissions are included only when actually incurred. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Body and shaft machining | conditional | Only actual site machining of declared incoming casting/bar; supplier casting and finished-component manufacture are upstream. Add actual coolant, tools, abrasives and other operations before claiming completeness. | foreground_production | per 1 kg reference flow |
| finishing | Surface cleaning and coating | conditional | Only actual site cleaning/coating with identified formulation and utility carrier; finished supplier coating substitutes this operation. Listed polyester powder and isopropanol are optional examples, not prescribed recipes. | foreground_production | per 1 kg reference flow |
| assembly | Sewing mechanism and workstation assembly | required | Fit actual needle/rotary hook/bobbin/feed/presser mechanism, drive/control, table/stand/foot control, thread stand and guards within declared supply. Reconcile make-or-buy and lubricant retained state. | foreground_production | per 1 kg reference flow |
| acceptance | Adjustment, testing and release | required | Use current model-specific factory test plan, including actual stitch testing when prescribed; record test fabric/thread, energy, rejects and rework, then weigh the accepted complete workstation. | foreground_production | per 1 kg reference flow |
| packing | Transport packing and dispatch | conditional | Only actual packing/protection; excludes packing from M and reconciles all required delivered parts after any transport disassembly. | foreground_production | per 1 kg reference flow |

Each row is one defined exchange. This is an initial collection framework, not a complete universal BOM or a mandatory cast-iron/polyester/solvent recipe. Reconcile actual needle bar, take-up lever, hook shaft, bobbin case, needle plate, feed linkage, bearings, seals, rubber cushions, oil pan/tank, knee lifter, hinge, belt guard, cables, thread trimmer and tension device as separate components if not contained in bought-in assemblies. Add each actual omitted material/chemical, utility carrier, tool consumable, effluent or waste species before claiming completeness. Substitution requires a separate exact flow, not a multi-material placeholder. Preserve applicable, not-applicable, measured zero and missing distinctly.

### Process: Body and shaft machining (`fabrication`)

Only actual site machining of declared incoming casting/bar; supplier casting and finished-component manufacture are upstream. Add actual coolant, tools, abrasives and other operations before claiming completeness.

#### Inputs

##### Product flows

###### Grey cast-iron sewing-machine body casting (`iron_head_blank`)

Conditional bought-in grey cast-iron body blank for actual site machining, grade and cast state recorded; omit when a finished head/body is purchased. Other alloys require separate rows.

- Selected flow: Grey cast-iron sewing-machine body casting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Carbon-steel shaft bar blank (`steel_shaft_blank`)

Conditional one specified carbon-steel bar grade for a site-machined main shaft; no alloy substitution or assumed hardening.

- Selected flow: Carbon-steel shaft bar blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Alternating current (`fabrication_electricity`)

Conditional metered machining/extraction demand, delivered grid AC below1kV, consumption mix; upstream generation emissions not factory emissions.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Only separately weighed dry carbon-steel machining scrap leaving without further treatment; cast-iron chips and oily swarf are separate. No automatic recycling credit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Grey cast-iron machining chips (`iron_chips`)

Conditional identified dry grey-iron chips; weigh separately from steel scrap and collected dust.

- Selected flow: Grey cast-iron machining chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Captured carbon-steel grinding dust (`captured_steel_dust`)

Only actual captured dry steel grinding dust sent to documented handler; neither airborne emission nor cast-iron waste.

- Selected flow: Captured carbon-steel grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

##### Elementary flows

###### Particulate matter, particle size unspecified (`particulate_air`)

Conditional measured post-control outdoor air particulate mass, unspecified subcompartment and particle size only. Particle fractions require distinct identities; collection efficiency alone gives no emission.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

### Process: Surface cleaning and coating (`finishing`)

Only actual site cleaning/coating with identified formulation and utility carrier; finished supplier coating substitutes this operation. Listed polyester powder and isopropanol are optional examples, not prescribed recipes.

#### Inputs

##### Product flows

###### Powder Coating (`polyester_powder`)

Only actual declared polyester powder formulation for site-coated body/stand; recipe and SDS, returns and recovered powder recorded. Not required when supplier coating is complete.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

###### Liquid isopropanol cleaning solvent (`isopropanol_liquid`)

Optional actual factory surface-cleaning pure propan-2-ol CAS67-63-0; verify purity and liquid supplied state. Aqueous blends need separate composition-specific rows.

- Selected flow: Liquid isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

###### Alternating current (`finishing_electricity`)

Conditional measured cleaning/powder spraying and electric cure demand below1kV; actual gas/other curing carrier requires its own added row.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

#### Outputs

##### Waste flows

###### Discarded polyester powder-coating overspray (`polyester_powder_waste`)

Conditional unreused dry polyester powder overspray sent off site, actual formulation and handler declared; internally recovered powder is not external waste.

- Selected flow: Discarded polyester powder-coating overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

###### Cotton wiping cloth contaminated with isopropanol (`ipa_wipes`)

Optional actual cotton wiping cloth leaving as contaminated solid waste; wet mass, solvent loading and handler recorded; other cloth/contaminants split.

- Selected flow: Cotton wiping cloth contaminated with isopropanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

##### Elementary flows

###### isopropanol (`isopropanol_air`)

Only measured propan-2-ol CAS67-63-0 released outdoors after controls, air unspecified subcompartment; not total VOC, indoor exposure or liquid effluent. No default evaporation rate.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

### Process: Sewing mechanism and workstation assembly (`assembly`)

Fit actual needle/rotary hook/bobbin/feed/presser mechanism, drive/control, table/stand/foot control, thread stand and guards within declared supply. Reconcile make-or-buy and lubricant retained state.

#### Inputs

##### Product flows

###### Finished cast-iron sewing-machine body (`finished_body`)

One supplied finished body with alloy/coating/contained parts declared, alternative to site-made body; exclude duplicated casting/coating. No complete head counted as body only.

- Selected flow: Finished cast-iron sewing-machine body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel sewing-machine main shaft (`main_shaft`)

One actual specified finished main shaft, purchased only when not made under fabrication; included bearings/gear declared, no mixed shaft set.

- Selected flow: Finished steel sewing-machine main shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Steel rotary sewing hook (`rotary_hook`)

One finished rotary hook of actual alloy/coating and supplied assembly boundary, not textile/clothing hook; contained bobbin case not duplicated.

- Selected flow: Steel rotary sewing hook
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Steel industrial machine-sewing needle (`needle`)

Fitted actual machine needle system/size/alloy/coating; hand sewing needle category rejected. Extra spare needles outside M recorded as separately supplied extras.

- Selected flow: Steel industrial machine-sewing needle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Steel sewing bobbin (`bobbin`)

One fitted steel bobbin, actual alloy and tare; exclude test thread and spare bobbins from M.

- Selected flow: Steel sewing bobbin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Steel sewing-machine presser foot (`presser_foot`)

One fitted specified steel presser foot and finish; other attachment variants separate.

- Selected flow: Steel sewing-machine presser foot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Steel sewing-machine feed dog (`feed_dog`)

One fitted steel feed dog of specified geometry/grade, not a complete feeder.

- Selected flow: Steel sewing-machine feed dog
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### AC servo motor for sewing drive (`servo_motor`)

One declared AC servo motor, direct or belt-driven connection and included encoder/drive boundary documented. Other motor architectures need separate rows.

- Selected flow: AC servo motor for sewing drive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Sewing-machine electronic control box (`control_box`)

One finished control box with electronics and input voltage specified; distinguish motor-integrated driver to avoid duplicate circuitry.

- Selected flow: Sewing-machine electronic control box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Laminated plywood sewing-machine table top (`table_top`)

Only actual laminated plywood finished table top, species/ply/laminate/finish and cut-out declared; not unspecified plywood stock or an assumed40mm thickness. Other tabletop types replace this row.

- Selected flow: Laminated plywood sewing-machine table top
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel sewing-machine table stand (`steel_stand`)

One actual steel load-bearing table stand with finish and fitted members recorded; table top and pedal counted only if not contained.

- Selected flow: Finished steel sewing-machine table stand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Sewing-machine foot-control pedal (`pedal`)

One fitted foot-control pedal with actual mechanical/electrical linkage boundary; separate from required table stand.

- Selected flow: Sewing-machine foot-control pedal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Sewing-machine thread stand (`thread_stand`)

One fitted thread stand, actual pole/base/tray composition and supply boundary declared; spools/test thread excluded from its tare.

- Selected flow: Sewing-machine thread stand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Conveyor or transmission belts or belting, of vulcanized rubber (`rubber_belt`)

Only one specified finished vulcanized-rubber V-belt for actual belt drive; omit for direct drive. No leather/conveyor belt or uncured rubber substitute.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Steel fasteners (`steel_screws`)

One identified steel screw specification at a time, coating/dimensions and supplied mass stated; nuts/washers/different screws need their own rows.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Mineral sewing-machine lubricating oil (`lubricating_oil`)

Only actual mineral-based manufacturer-approved oil grade factory filled/consumed, weighed kg; retained oil included once in M. Record sold dry, separately bottled oil and purge separately; no historic150ml default.

- Selected flow: Mineral sewing-machine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_electricity`)

Measured below1kV assembly-tool and connection demand; bought-in motor/control manufacture outside site boundary.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

### Process: Adjustment, testing and release (`acceptance`)

Use current model-specific factory test plan, including actual stitch testing when prescribed; record test fabric/thread, energy, rejects and rework, then weigh the accepted complete workstation.

#### Inputs

##### Product flows

###### Cotton Fabric (`test_cotton`)

Only actual100% woven cotton factory stitch-test fabric if compatible with selected identity and current test plan; actual other test textiles add distinct rows. Reused cloth is an internal loop.

- Selected flow: Cotton Fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Polyester machine-sewing thread (`test_thread`)

Actual specified100% polyester sewing thread, top and bobbin net new consumption separately metered when different; not polyester fiber or non-sewing yarn.

- Selected flow: Polyester machine-sewing thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Alternating current (`acceptance_electricity`)

Actual below1kV bench motor/control and measured setup/rework/testing demand; no nameplate-times-assumed duration or customer use imported.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Sewing machines, except book sewing machines and household sewing machines (`finished_machine`)

1kg accepted complete single-needle flatbed industrial lockstitch workstation, actual head/drive/control/table/stand/pedal/thread stand/guards and retained oil, using measured net M.

- Selected flow: Sewing machines, except book sewing machines and household sewing machines `9744fffe-2c8c-4fb9-b05f-486605652e8c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Discarded cotton stitch-test swatches containing polyester thread (`test_swatches`)

One defined removed stitched cotton test specimen with quantified polyester thread fraction, not general textile waste; separate from unused cloth returns.

- Selected flow: Discarded cotton stitch-test swatches containing polyester thread
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

### Process: Transport packing and dispatch (`packing`)

Only actual packing/protection; excludes packing from M and reconciles all required delivered parts after any transport disassembly.

#### Inputs

##### Product flows

###### Polyethylene film (`pe_film`)

Actual PE film formulation/thickness and net issues, unfilled film mass; packaging excluded from M.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Corrugated cardboard (`corrugated_board`)

Only actual C/E/F flute, fiber≥80%, recycled-containing multilayer board satisfying public identity; verify specification rather than infer all boxes fit. Other boards separate.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | Prefer serial/work-order issues and submeters. Under cp_allocation partition shared machining, extraction, cure and test-bench demand by measured causal demand or measured load and time; justify each driver and reconcile allocated plus excluded consumption to the total. No fixed share or universal mass allocation. |  |
| allocation_variants | configurations | Keep drive/head/table/test configurations separate; machine count alone is not a causal driver for unlike machining or test demands. Any fallback mass/economic method needs measured justification, sensitivity and explicit review. |  |
| allocation_waste | scrap_and_tests | Track actual scrap/test specimen outputs without automatic avoided-steel/textile credit. Valid component returns and internally reused test cloth are internal loops, not new purchases and external co-products. If an independently marketable output exists, declare its quality/amount and justified co-product treatment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Keep matched stock issues/returns, BOM and make-or-buy revisions, work orders, accepted counts, bench records, measured utilities and waste dispatches for the same site/configuration/period. Use net new test cloth/thread rather than gross repeated passes; remove test specimens before M weighing. Record dry versus filled shipping and purge separately. No manufacturer catalogue number replaces a measured production amount.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted serial/configuration | same manufacturing period | same manufacturer and fitted supply boundary | accepted net mass per machine | calibration; complete supply BOM; retained fill; signed release |
| cp_fabrication | fabrication | each atomic row in this process | measurement | casting/bar grade and supplied state; net issues/returns; actual machine-tool time/load; kWh; dry steel/iron chip masses; capture and outlet PM monitoring; coolant/tool records | Weigh each stock/return/scrap separately; meter actual machining demand. Measure outlet particulate concentration with matched standard-condition dry gas flow/time, controls and particle-size basis; document uncertainty, no assumed release fraction. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted machines | calibration; supplier specification; stock/count closure; missing records |
| cp_finishing | finishing | each atomic row in this process | measurement | polyester powder formulation/SDS; net issues/recovery; liquid isopropanol purity/mass; kWh; cure route; cotton-wipe wet mass; unreused overspray; measured CAS-specific air release | Weigh each chemical and waste; meter actual route and shared demand. Measure CAS-specific post-control release or a validated matched solvent balance with liquid/solid retention and recovery; total VOC cannot be labelled isopropanol. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted machines | calibration; supplier specification; stock/count closure; missing records |
| cp_assembly | assembly | each atomic row in this process | measurement | model/BOM/serial; supplied component boundaries; net issues/returns; needle/hook/feed matching; drive/control/table/stand mass; oil grade and filled/dry state; retained oil mass; kWh | Trace each actual supplied component and weigh mass; avoid motor-contained electronics/head-contained parts duplication. Weigh factory oil issues/returns/retained fill separately and reconcile empty/filled shipping; meter tools and connections. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted machines | calibration; supplier specification; stock/count closure; missing records |
| cp_acceptance | acceptance | each atomic row in this process | measurement | serial/configuration; current signed test plan; needle system; fabric fiber/weave/finish and thread specification; stitch quality/timing results; guard/electrical/drive checks; actual test time/kWh; new fabric/thread and removed specimen masses; rejects/rework; M | Record actual model tests and meter setup/rework/test demand; weigh net new test textile consumption and discarded stitched specimens with known composition. Trace reusable cloth inventory separately; no universal stitch speed or operating break-in factor. | kg; MJ | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted machines | calibration; supplier specification; stock/count closure; missing records |
| cp_packing | packing | each atomic row in this process | measurement | PE film recipe/thickness and mass; board flute/fiber/recycled specification and mass; issues/returns; serial/dispatch complete-part checklist | Weigh each packing material separately and exclude from M; reconcile all required workstation parts after disassembly. Actual additional foam/timber/tape materials each need an added atomic row. | kg | each work order/batch/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; matched accepted count | same site/configuration; outsourcing disclosed | attributable exchange amount / accepted machines | calibration; supplier specification; stock/count closure; missing records |
| cp_allocation | manufacturing | shared_demand | measurement | total utility; submeter demand; measured load/time; work orders/products served; excluded consumption | Submeter or measure causal shared load and actual operating time; justify exchange-specific driver and reconcile against total supply. | MJ; h | each shared batch; monthly reconciliation | same manufacturing period | all served configurations and excluded operations | partition by measured causal demand; attributable amount / accepted machines | closure; submeter comparison; uncertainty; sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | iron_head_blank; steel_shaft_blank; fabrication_electricity; steel_scrap; iron_chips; captured_steel_dust; particulate_air; polyester_powder; isopropanol_liquid; finishing_electricity; polyester_powder_waste; ipa_wipes; isopropanol_air; finished_body; main_shaft; rotary_hook; needle; bobbin; presser_foot; feed_dog; servo_motor; control_box; table_top; steel_stand; pedal; thread_stand; rubber_belt; steel_screws; lubricating_oil; assembly_electricity; test_cotton; test_thread; acceptance_electricity; test_swatches; pe_film; corrugated_board | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

First derive q_item from matched configuration/period: net issues after valid returns, attributable utility, or actual external waste/species divided by accepted machine count. Carry reject/rework burdens to accepted output. Apply the stated division by measured M, preserving kg or MJ exchange numerators; no arbitrary density or nameplate-times-duration. Keep allocation and unit conversions separately traceable. Aggregate compatible variants only after configuration-specific normalization with disclosed mass weighting and scope.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | flows | Verify supplied material/grade/phase/composition, reference property/unit, route/geography and exact environmental medium. Flow identity does not establish supplier impacts or amount. | supplier sheets; identity/property/unit audit |
| quality_complete | workstation | Reconcile fitted supply and retained fluids to measured M, all actual manufacturing consumables/utilities, losses and tests. Do not fill missing part mass from residual. | BOM; calibrated complete weigh; stock balances; signed release |
| quality_period | records | Disclose representative complete period, site, supplier/outsourcing coverage, route changes, idle/setup demand and uncertainty. Historical manuals provide model cases only, not current LCI or universal tests. | work orders; meter sheets; source limitations |
| quality_acceptance | release | Retain model-specific stitch-test materials/conditions and signed functional/electrical/guard acceptance. Record false starts and rework; do not infer factory limits from customer operating instructions. | current released test plan; serial result; calibration |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require1kg output, measured cp_mass M for the complete supplied workstation, installed table/stand/drive/control/guards and retained lubricant. No head-only catalogue mass or test textiles in M. |  |
| validation_normalization | inventory | Every applicable non-reference row links normalize_mass and its declared protocol; check denominator direction, exchange units, matching configuration/period and accepted counts. |  |
| validation_routes | processes | Match machining/cleaning/coating and direct/belt drive to actual work orders/BOM. Supplier-finished head/body or integrated motor driver must replace contained inputs; missing actual routes remain gaps. |  |
| validation_species | elementary_flows | Check measured unspecified-size particulate and CAS67-63-0 isopropanol outdoor-air unspecified subcompartment. Indoor exposure, total VOC, captured dust/wipes and aqueous effluent are different exchanges. No assumed emission fraction. |  |
| validation_coverage | dataset | Distinguish measured/calculated/estimated/excluded/not-applicable/missing, reconcile material/output and allocated demand, and disclose unresolved identities/providers. Structural/measurement pass does not approve methodology or establish complete cradle-to-gate coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing module for exact supplied industrial lockstitch workstation/site/period; expanded assessment only with independently established upstream/transport/treatment coverage. |
| excluded_use | Customer seam or textile-production service, operating/lifetime energy, generic stitch-machine equivalence, head-only product accounting and unsupported complete cradle-to-gate claims. |
| required_metadata | PCR id; model/configuration/BOM and supplied head/table/stand/drive/control boundary; measured M/retained oil; test plan/materials; site/period; make-or-buy and routes; suppliers/providers/transport; utilities; packing; allocation and sources/version. |
| required_quality_disclosure | Primary measured coverage, unresolved identities/amounts/providers, excluded and missing routes, historic source limits, conversion/allocation justification, emissions monitoring, uncertainty and review state. |
| update_trigger | Supply/BOM/drive/table change; material/coating/oil/test-plan revision; supplier/utility change; new representative period; resolved identity/evidence gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| juki-ddl8700 | handbook | JUKI DDL-8700 Instruction Manual English, retained historical edition with PDF modification metadata2013; sections2,3,5,6; PDFpp.3–5, printedpp.1–3. https://www.juki.co.jp/industrial_j/download_j/manual_j/ddl8700/menu/ddl8700/pdf/instruction_eg.pdf | Model-specific table/head/oil-pan, belt cover and thread-stand architecture; no numerical speed, break-in, oil demand, mass, manufacturing route or lifetime inferred. |
| brother-s7100a | handbook | Brother S-7100A Instruction Manual, retained historical PDF2015 metadata; machine specifications and installation sections2-2 to2-4; PDFpp.11–17, printedpp.1–7. https://download.brother.com/pub/com/ism/pdf/s7100a_in.pdf | Independent maker direct-drive servo, table/head/control connection and oil-tank configuration example. Approximate head weight/oil volume, nameplate power and table thickness are not adopted; current site supply and measured amounts govern. |
