---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.motorcycle-structural-parts
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bare TIG-welded steel motorcycle main-frame manufacture

## 1. Scope and Applicability

New complete bare motorcycle structural main frames made from declared low-carbon steel tubes and integral steel mounts by actual argon-shielded TIG welding. Include the drawing-defined steering head and integral engine/swingarm mounting datums, received-versus-fabricated subpart scope, applicable mechanical finishing and cleaning, dimensional/weld/net-mass acceptance and factory-gate protection. This record is a narrower route within CPC 49941; TIG is the chosen applicable route, not a claim that all motorcycles use TIG.

Exclude complete motorcycles/sidecars, engine/powertrain, bearings, suspension, wheels, fuel tanks, body panels, bolted rear subframes and uninstalled accessories; aluminium/cast/composite/CrMo frames, MIG/laser/brazed or undeclared joining routes, repaired frames, vehicle assembly, phosphating/painting/powder-coating, riding/transport services and end of life. Any alternate material, joining or coated supply state needs separate methodology assessment.

Manufacturer process descriptions support separating welded frame, painting and complete-vehicle assembly only. They do not establish low-carbon grade, TIG process, net M or frame-only factory inventory. TWI provides generic TIG process identity and optional filler/gas context; actual factory procedures establish applicability. No source supports a universal frame mass, lifetime or crash/fatigue acceptance range. Scientific review remains pending. Receipt-to-acceptance foreground is not complete cradle-to-gate without compatible verified upstream links.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.motorcycle-structural-parts |
| classification_refs | CPC 3.0 49941; narrower bare steel TIG motorcycle main-frame route; context only |
| covered_products | New complete bare motorcycle structural main frames made from declared low-carbon steel tubes and integral steel mounts by actual argon-shielded TIG welding. Include the drawing-defined steering head and integral engine/swingarm mounting datums, received-versus-fabricated subpart scope, applicable mechanical finishing and cleaning, dimensional/weld/net-mass acceptance and factory-gate protection. This record is a narrower route within CPC 49941; TIG is the chosen applicable route, not a claim that all motorcycles use TIG. |
| excluded_products | Exclude complete motorcycles/sidecars, engine/powertrain, bearings, suspension, wheels, fuel tanks, body panels, bolted rear subframes and uninstalled accessories; aluminium/cast/composite/CrMo frames, MIG/laser/brazed or undeclared joining routes, repaired frames, vehicle assembly, phosphating/painting/powder-coating, riding/transport services and end of life. Any alternate material, joining or coated supply state needs separate methodology assessment. |
| representative_product | One accepted complete drawing-defined main frame of positive measured M |
| production_route | Stock/subpart preparation; fixture TIG welding; conditional finishing/cleaning; dimensional/weld/physical mass acceptance; conditional protection |
| market_state | New accepted bare uncoated main frame before vehicle assembly |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one specified complete bare structural main frame |
| How much | 1 kg accepted frame net mass; per-unit collection normalized using measured M |
| How well | Actual drawing/datums, qualified weld route and dimensional/weld acceptance; equal mass is not equal structural performance |
| How long or cycle | One manufacturing/acceptance cycle; no distance, crash cycle, riding lifetime or service unit |
| reference_flow_link | finished_frame |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted uncoated TIG-welded steel motorcycle main frame |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model/site/period; frame part number/revision/serial and controlled drawing; low-carbon grade, tube section/wall and stock supply state; actual integral steering-head/mount completeness, received subparts versus fabrication; argon supply and actual TIG procedure, weld map/filler/electrode specification and qualifications; actual finishing/cleaning/residual oil; dimensional/weld inspection and release; actual same-configuration calibrated net frame mass M kg, scale/tare/uncertainty; actual stock/meter/gas/waste records, rework/allocation and supplier upstream compatibility; packing/rack exclusion and data gaps |

M includes actual welded integral mounts/steering head and retained weld metal/residual oil in the declared bare state. Exclude engines, fixtures, loose bearings, bolt-on rear subframe, spares, racks and packaging. Required qualifiers must be in concrete dataset metadata/notes; absent qualifiers make the reference incomplete. Catalogue bike/frame mass, calculated tube volume/density or shipping gross weight cannot establish M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Complete unit here is one complete specified main frame, not a motorcycle. Physically weigh each accepted same-part/revision frame on a suitable calibrated scale with measured fixture tare; record weld/mount completeness, cleaning/oil state, date/operator, uncertainty and positive net M linked to signed release. Same-configuration batch counts need actual count and traceable frame mass measurements; no assumed weight. Reconcile tube/plate, filler incorporation, rejects/chips and delivered frame state without counting shielding gas as incorporated mass. |
| `energy_units` | each electricity row | Net calorific value | MJ | Use verified energy-unit conversion 1 kWh = 3.6 MJ; preserve actual intake voltage/provider, welding/machine/ventilation idle-active meter boundaries. No arc current, nameplate power or guessed welding duration replaces actual metered electricity. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified uncoated low-carbon tube/plate and received finished subparts |
| starting_condition_role | Receipt-to-accepted-bare-main-frame operating manufacturing foreground |
| product_classification_scope | New complete bare motorcycle structural main frames made from declared low-carbon steel tubes and integral steel mounts by actual argon-shielded TIG welding. Include the drawing-defined steering head and integral engine/swingarm mounting datums, received-versus-fabricated subpart scope, applicable mechanical finishing and cleaning, dimensional/weld/net-mass acceptance and factory-gate protection. This record is a narrower route within CPC 49941; TIG is the chosen applicable route, not a claim that all motorcycles use TIG. |
| recursive_input_rule | Never input the same finished frame to its own manufacture. Received finished steering head/bracket replaces contained stock and machining; own internal subpart is not a boundary input |
| upstream_dataset_requirement | Match actual grade/section, supplied subpart completeness, TIG filler/electrode/gas state, cleaning concentration, site/period/provider and original reference property/unit; disclose incompatible links |
| disclosure | manufacturer/model/site/period; frame part number/revision/serial and controlled drawing; low-carbon grade, tube section/wall and stock supply state; actual integral steering-head/mount completeness, received subparts versus fabrication; argon supply and actual TIG procedure, weld map/filler/electrode specification and qualifications; actual finishing/cleaning/residual oil; dimensional/weld inspection and release; actual same-configuration calibrated net frame mass M kg, scale/tare/uncertainty; actual stock/meter/gas/waste records, rework/allocation and supplier upstream compatibility; packing/rack exclusion and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all stages | Include actual preparation/welding, applicable finishing/cleaning, attributable rework, inspection/net weighing and protection. Avoid duplicate outsourced-service exchanges and their contained resources. Later coating, complete bike assembly and use lie outside. Long-lived machines/fixtures and factory infrastructure are excluded from core operating foreground; disclose and add any separately modelled capital contribution with actual traced applicability. |  |
| `boundary_completeness` | actual weld/production records | Required welding does not make every filler/electrode/cleaner card mandatory. Add each actual tube lubricant/coolant, heat carrier, cutting tool, NDT chemical, welding filter dust and verified individual emission omitted from candidate cards with original specification/metrology. Retain actual welding extraction/filtration utilities and consumed electrode records. Do not infer NOx, ozone, iron/manganese fume or tungsten release merely from an arc; assign species, destination and quantity only when evidenced. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `preparation` | Tube and bracket preparation | required | Actual specified steel tubular frame | foreground | one accepted same-configuration finished unit, normalized using M |
| `welding` | Fixture fit-up and TIG frame welding | required | Declared argon-shielded TIG steel frame route | foreground | one accepted same-configuration finished unit, normalized using M |
| `finishing` | Mechanical weld finishing and datum machining | conditional | Only actual drawing-required post-weld operations | foreground | one accepted same-configuration finished unit, normalized using M |
| `cleaning` | Conditional bare-frame cleaning | conditional | Only actual cleaning before bare-frame acceptance | foreground | one accepted same-configuration finished unit, normalized using M |
| `acceptance` | Frame dimensional, weld and mass acceptance | required | Every accepted complete main frame | foreground | one accepted same-configuration finished unit, normalized using M |
| `packing` | Factory-gate protection | conditional | Only actual declared factory-gate protection | foreground | one accepted same-configuration finished unit, normalized using M |

Preparation feeds fixture fit-up/TIG welding, then actual finishing/cleaning and frame acceptance; protection is conditional. Every card needs actual route/chemistry applicability. Do not count received subpart and its contained stock together.

### Process: Tube and bracket preparation (`preparation`)

Receive traceable uncoated low-carbon tube, plate, steering head and bracket states. Cut, notch, bend and machine only actual in-house steps using drawing-controlled geometry. Purchased formed subparts replace their contained stock and processing. Record actual coolant/tool wear and metal chips separately.

#### Inputs

##### Product flows

###### Uncoated low-carbon steel structural tube (`steel_tube`)

Actual drawing grade, section/wall and tube manufacturing state; measured net issue/return. Not CrMo, stainless, aluminium or coated tube.

- Selected flow: Uncoated low-carbon steel structural tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_preparation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `yamaha`

###### Uncoated low-carbon steel bracket plate (`steel_plate`)

Only actual in-house bracket plate stock; externally finished bracket replaces its contained plate.

- Selected flow: Uncoated low-carbon steel bracket plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_preparation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `yamaha`

###### Machined low-carbon steel motorcycle steering-head tube (`steering_head`)

Only actually received finished steering-head tube, no installed bearings; suppress if made in-house from included tube.

- Selected flow: Machined low-carbon steel motorcycle steering-head tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_preparation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `yamaha`

###### Formed low-carbon steel motorcycle engine-mount bracket (`mounting_bracket`)

Only actually received specified formed bracket; not engine itself or a collection of accessories; suppress contained plate/formation.

- Selected flow: Formed low-carbon steel motorcycle engine-mount bracket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_preparation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `yamaha`

###### Factory-intake alternating-current electricity (`preparation_electricity`)

Only metered attributable actual supply kWh converted to MJ, with voltage/provider and actual active/idle shared driver. No rated welding amperage multiplied by guessed time.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_preparation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `yamaha`

#### Outputs

##### Waste flows

###### Low-carbon steel machining chip waste (`preparation_steel_chips`)

Only measured segregated chips/offcuts from actual stage and destination; do not duplicate transferred chips or count rework as accepted output.

- Selected flow: Low-carbon steel machining chip waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_preparation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation`
- Sources: `yamaha`

### Process: Fixture fit-up and TIG frame welding (`welding`)

Record actual weld map, fit-up fixture, approved plant welding procedure, operator/qualification and actual arc/pre/post-flow jobs, net shielding-gas consumption and filler only when used. TIG source explains process identity, not a universal motorcycle factory recipe. No MIG, brazing or laser substitution. Retain actual extraction/filter records; do not invent inevitable species emissions.

#### Inputs

##### Product flows

###### Gaseous argon TIG shielding supply (`argon`)

Only actual pure argon gas with documented supplier state, weighed cylinder net consumption/returns or actual compatible metrology. No unspecified gas density factor or liquid-argon substitution.

- Selected flow: Gaseous argon TIG shielding supply
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_welding`
- Sources: `twi`

###### ER70S-6 carbon-steel TIG filler rod (`filler_rod`)

Only if actual compatible plant weld procedure uses this filler; exact spec, net issue/return and incorporated mass. Autogenous welding omits filler; no universal grade prescribed.

- Selected flow: ER70S-6 carbon-steel TIG filler rod
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_welding`
- Sources: `twi`

###### Pure tungsten TIG electrode (`tungsten_electrode`)

Only actual pure tungsten electrode wear/issue; doped tungsten requires different identity; no automatic thoriated electrode.

- Selected flow: Pure tungsten TIG electrode
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_welding`
- Sources: `twi`

###### Factory-intake alternating-current electricity (`welding_electricity`)

Only metered attributable actual supply kWh converted to MJ, with voltage/provider and actual active/idle shared driver. No rated welding amperage multiplied by guessed time.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_welding`
- Sources: `twi`

### Process: Mechanical weld finishing and datum machining (`finishing`)

Record actual deburring/grinding, bore/datum machining, distortion correction and associated rejection/rework. Do not presume heat treatment, stress relief, sand blasting or removal of every weld bead. Use actual abrasive/coolant identity and collected residues.

#### Inputs

##### Product flows

###### Aluminium-oxide bonded grinding disc (`abrasive_disc`)

Only actual complete bonded abrasive disc composition and measured consumption; not pure bulk alumina.

- Selected flow: Aluminium-oxide bonded grinding disc
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `bmw`

###### Factory-intake alternating-current electricity (`finishing_electricity`)

Only metered attributable actual supply kWh converted to MJ, with voltage/provider and actual active/idle shared driver. No rated welding amperage multiplied by guessed time.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `bmw`

#### Outputs

##### Waste flows

###### Low-carbon steel machining chip waste (`finishing_steel_chips`)

Only measured segregated chips/offcuts from actual stage and destination; do not duplicate transferred chips or count rework as accepted output.

- Selected flow: Low-carbon steel machining chip waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `bmw`

###### Spent aluminium-oxide grinding disc waste (`spent_disc`)

Only actual transferred used disc retaining steel contamination, measured net waste; not elementary alumina.

- Selected flow: Spent aluminium-oxide grinding disc waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `bmw`

### Process: Conditional bare-frame cleaning (`cleaning`)

Declare actual cleaning ingredient/concentration, water/solvent balance and drying. Aqueous and IPA cards are separate conditional examples, never a required recipe. Keep actual residual oil state. Powder coating, phosphating and paint curing are outside this uncoated product gate.

#### Inputs

##### Product flows

###### Process Water (`cleaning_water`)

Only actual supplied process water measured mass, not natural withdrawal or wastewater.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `yamaha`

###### Anhydrous isopropanol cleaning solvent (`isopropanol`)

Only actual CAS67-63-0 anhydrous IPA, net issues/recovery; not 70% disinfectant or ethanol.

- Selected flow: Anhydrous isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `yamaha`

###### Nonwoven polyester cleaning wipe (`cleaning_wipe`)

Only actual finished wipe net dry mass; do not substitute converting substrate.

- Selected flow: Nonwoven polyester cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `yamaha`

###### Factory-intake alternating-current electricity (`cleaning_electricity`)

Only metered attributable actual supply kWh converted to MJ, with voltage/provider and actual active/idle shared driver. No rated welding amperage multiplied by guessed time.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `yamaha`

#### Outputs

##### Waste flows

###### Aqueous oily steel-frame cleaning wastewater (`cleaning_effluent`)

Only actual wastewater treatment transfer with measured composition/destination, not natural water release.

- Selected flow: Aqueous oily steel-frame cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `yamaha`

###### Isopropanol-contaminated polyester wipe waste (`spent_wipe`)

Only actual used wipe transfer with retained IPA measured, distinct from air release.

- Selected flow: Isopropanol-contaminated polyester wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `yamaha`

#### Outputs

##### Elementary flows

###### isopropanol (`isopropanol_air`)

Only evidenced CAS67-63-0 immediate air/unspecified release from species-specific emission measurement or closed solvent balance; not all solvent issue, indoor/water/long-term release. No obligatory emission.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_cleaning.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cleaning`
- Sources: `yamaha`

### Process: Frame dimensional, weld and mass acceptance (`acceptance`)

Control part/revision, steering-head and swingarm/engine mounting datums, drawing dimensions, weld inspection scope and actual release criteria. Actual NDT method, personnel and consumables require records; no universal destructive fatigue/crash test or invented weld limit. Weigh the accepted complete bare main frame physically, excluding fixtures and shipping protection.

#### Inputs

##### Product flows

###### Factory-intake alternating-current electricity (`acceptance_electricity`)

Only metered attributable actual supply kWh converted to MJ, with voltage/provider and actual active/idle shared driver. No rated welding amperage multiplied by guessed time.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `bmw`

#### Outputs

##### Product flows

###### Accepted uncoated TIG-welded steel motorcycle main frame (`finished_frame`)

One specified complete structural main frame with welded steering head and integral specified mounts; exclude engine, bearings, suspension, bolt-on rear subframe, temporary fixture, packaging and loose spares.

- Selected flow: Accepted uncoated TIG-welded steel motorcycle main frame
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `bmw`

### Process: Factory-gate protection (`packing`)

Measure each actual protection item; exclude rack/dunnage and packaging from M. Trace returnable rack reuse and separately attribute actual service, never assume lifetime.

#### Inputs

##### Product flows

###### Corrugated cardboard box (`carton`)

Only actual measured corrugated shipping box, excluded from M.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`protective_film`)

Only actual LDPE protection net issue, excluded from frame M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Factory-intake alternating-current electricity (`packing_electricity`)

Only metered attributable actual supply kWh converted to MJ, with voltage/provider and actual active/idle shared driver. No rated welding amperage multiplied by guessed time.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | Directly attribute configured stock/filler/gas issues, actual machine/welding/ventilation meters and inspection including rework. For inseparable resources use measured causal machine/fixture occupation and actual load: share = order driver / sum of covered order drivers. Keep covered period/denominator; equal frame counts, catalogue mass or rated amperage alone are not default drivers. |  |
| `allocation_qualification` | qualification and accepted production | Separate independent R&D/prototype from actual production qualification. Attribute applicable destructive weld/fatigue qualification to actual covered orders with traced scope, driver and sensitivity; destroyed frames do not enter accepted output. Actual per-frame inspection is direct. No assumed test schedule, fixture lifetime or universal qualification allocation. |  |
| `allocation_recovery` | scrap, rejects and rework | Count each physical scrap/chip/waste transfer once, with actual destination and period balance. Internal rework stays with accepted production. Recyclability does not justify avoided-steel or disposal credits. Actual saleable co-product allocation requires evidenced causal/economic originals and sensitivity. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | accepted physical weighing record | model; configuration; serial number; accepted net mass M; part number/revision; frame scale reading; fixture tare; oil/cleaning state; calibration/uncertainty; drawing; signed release | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | actual manufacturing and acceptance period | declared frame acceptance gate | accepted net mass per unit | actual calibrated physical single-frame weighing, measured tare and controlled drawing/release |
| `cp_preparation` | `preparation` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual calibrated stock issues/returns, tube/bend/machine jobs, chip transfer and meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_welding` | `welding` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual weld procedure/map, metered power/gas, filler net issues, electrode wear and filter/waste records | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_finishing` | `finishing` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read finishing/machining jobs, actual disc wear/chips, correction/rework and meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_cleaning` | `cleaning` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual recipe/SDS, net cleaning supplies, drying meters, solvent balances and waste transfers | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_acceptance` | `acceptance` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read controlled drawing, dimensional/weld inspection, calibration, actual physical net weighing and release | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_packing` | `packing` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual packaging issues/returns, tare and rack reuse movements | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Use mass_record_provenance actual physical frame weighing, same part/revision/completeness, calibrated scale/tare/uncertainty and positive M kg. Reconcile welded filler/mounts and residual oil, excluding temporary fixture, engine, bolt-on rear subframe and protection. No tube-density sum or catalogue mass substitutes; missing original weighing requires scientific/data review. | actual weighing/calibration, frame drawing and release |
| `quality_identity` | every exchange | Check one physical/chemical identity and actual supplied grade/route/concentration. Steering-head tube is not generic motorcycle accessories; ER70S-6 is not stainless MIG wire; pure tungsten is not thoriated tungsten; gas argon is not liquid argon; IPA solvent is not disinfectant. Preserve original public property/unit and media; unresolved identity stays specific. | actual supplier specifications/SDS and public identity records |
| `quality_weld` | cp_welding; cp_acceptance | Retain actual weld map, procedure qualification, filler compatibility, preparation/fit-up, gas supply, electrode specification, controlled drawing datums and actual visual/NDT release plan. Record distortion, cracks, lack of fusion and other actual defects against producer-defined criteria. No universal frame geometry, fatigue/crash limit, weld energy or inspection method inferred from generic TIG guidance. | actual qualified procedure/drawing, metrology/NDT/acceptance originals |
| `quality_balance` | stock, filler, gas, solvent, water and energy | Reconcile actual stock/net issue, incorporated frame and filler, rejects/chips/returns and cylinder gas net consumption separately. Measured gas volume needs original pressure/temperature/state and justified conversion; no default gas density. Water supply, treatment wastewater and environmental withdrawal/release are distinct. IPA-air requires measured species/medium or closed balance with retained/recovered solvent, not all issues. Welding extraction/filter dust and each species release require actual evidence before dataset completion. | actual stock/gas/material/species balances, meters and waste records |
| `quality_coverage` | actual dataset and upstream links | Distinguish measured, calculated, missing and evidenced not_applicable. Audit actual complete weld/production map, supplier-contained subpart processing, NDT/drying/coolant/filter exchanges missing from cards, capital exclusions, allocation and uncertainty. Compatible verified upstream links are needed for full cradle-to-gate claims. Contract check cannot establish actual factory completion or scientific approval. | actual full manufacturing map and transparent gap register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference/output | Require current positive actual M kg with cp_mass. Exact reference name equals finished_frame; empty UUID registers that precise row in unresolved_flow_identities. Actual bare main-frame completeness excludes engine/fixtures/packing/rear subframe; no vehicle gross mass. |  |
| `validate_basis` | all rows/protocols | Check identical ordered lower-case row/rule/protocol IDs and actual generated references in both languages. q_item per accepted finished unit, M kg, explicit normalize_mass and identical same-configuration counts. Never rewrite public number/area/energy properties as Mass. |  |
| `validate_route` | weld and production map | Require actual low-carbon tube/stock route, TIG argon procedure, exact filler/electrode conditions, received-head/bracket containment, applicable finishing/NDT and actual emission evidence. Manufacturer frame/vehicle example is not this configuration’s empirical inventory. Missing actual records or applicability requires review. |  |
| `validate_use` | dataset use | Disclose exact frame drawing/configuration, uncoated gate, mass evidence, omitted actual exchanges, unresolved identities and upstream compatibility. Equal kg is not equal frame stiffness, fatigue/crash performance or life. Candidate is not published or scientifically approved. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset and background_dataset after actual data completion/review |
| downstream_use | Specified bare motorcycle main-frame input into separately bounded coating/vehicle manufacture |
| allowed_use | Compare matching configured frame route/gate per kg with actual mass, acceptance scope and upstream links disclosed |
| excluded_use | Exclude complete motorcycles/sidecars, engine/powertrain, bearings, suspension, wheels, fuel tanks, body panels, bolted rear subframes and uninstalled accessories; aluminium/cast/composite/CrMo frames, MIG/laser/brazed or undeclared joining routes, repaired frames, vehicle assembly, phosphating/painting/powder-coating, riding/transport services and end of life. Any alternate material, joining or coated supply state needs separate methodology assessment. |
| required_metadata | manufacturer/model/site/period; frame part number/revision/serial and controlled drawing; low-carbon grade, tube section/wall and stock supply state; actual integral steering-head/mount completeness, received subparts versus fabrication; argon supply and actual TIG procedure, weld map/filler/electrode specification and qualifications; actual finishing/cleaning/residual oil; dimensional/weld inspection and release; actual same-configuration calibrated net frame mass M kg, scale/tare/uncertainty; actual stock/meter/gas/waste records, rework/allocation and supplier upstream compatibility; packing/rack exclusion and data gaps |
| required_quality_disclosure | Measured/calculated/missing data, weighing/weld/inspection originals, identity and scope gaps, capital exclusion, allocation and uncertainty; candidate and scientific review pending |
| update_trigger | Actual frame drawing, grade/section, supply subpart state, joining/filler/gas/electrode route, finishing/coating gate, mass/inspection, site or upstream changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `yamaha` | literature | [Yamaha Motor manufacturing jobs/processes](https://global.yamaha-motor.com/jp/recruit/graduates/highschool/works-mc/) | HTML プレス、溶接、塗装、ユニット組付 and 車体・ユニット組立: manufacturer forming/welding/painting and assembly context. Does not identify actual frame steel, TIG procedure, frame M or factory intensity. Separate outboard/engine and finished-vehicle tests are not frame-only evidence. Undated description supports qualitative process separation only. |
| `bmw` | literature | [BMW Group Plant Berlin](https://www.bmwgroup.jobs/content/grpw/websites/bmwgroup-werke_com/berlin/en.html) | HTML Welding shop, Assembly and Paint shop headings distinguish frame manufacture, engine/frame marriage and later frame powder coating. Aluminium-tank welding, engine tolerance, complete-bike dynamometer checks and plant counts cannot be transferred to this bare low-carbon TIG main frame. No numeric constraints adopted. |
| `twi` | extension_guidance | [TWI: Tungsten inert gas TIG or GTA welding](https://www.twi-global.com/technical-knowledge/job-knowledge/tungsten-inert-gas-tig-or-gta-welding-006) | HTML Process characteristics, Electrode and Shielding gas paragraphs: non-consumable tungsten, inert shielding and separately added optional filler; argon can weld steel. Generic process guidance, not a motorcycle factory specification or mandatory pure-tungsten/filler recipe. No gas rate, electrode life, power, efficiency, weld qualification or emission factors adopted. |
