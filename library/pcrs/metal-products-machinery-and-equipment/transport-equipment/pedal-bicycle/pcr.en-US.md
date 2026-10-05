---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.pedal-bicycle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Lug-brazed steel pedal bicycle manufacture

## 1. Scope and Applicability

New complete nonfolding human-powered two-wheel bicycles with lug-brazed alloy-steel frame, rigid steel fork, derailleur chain drivetrain, cable-operated rim brakes and pneumatic clincher tyres with inner tubes. Declare an actual road/utility model, geometry, wheel and component configuration. No electric or combustion propulsion. Manufacturing foreground starts at declared stock or received finished assemblies and ends at configured factory acceptance and protection. This is a narrower product/process route within CPC 49921, not all nonmotorized cycles.

Exclude e-bikes, auxiliary-motor cycles, motorcycles, tricycles, tandems, recumbents, folding bicycles, cargo-specific multiwheel cycles, toys/sidewalk-specific designs, track-racing fixed-gear bicycles, suspension/disc-brake bicycles, welded aluminium/composite/titanium and other undeclared frame routes, frame-only kits, used/repair/remanufactured products, riding/transport services, rider food metabolism, route infrastructure, maintenance use and end of life.

Mercian provides a lug-brazing/finishing example; Rivendell provides CrMo lugged frame, crowned fork and rim-brake configuration context. These are examples, not a universal supplier, alloy, fuel, coating recipe or nominal bicycle mass. CPSC guidance is US-market-specific with product exemptions, not a universal production-test schedule. Scientific review is pending. The receipt-to-acceptance foreground is not complete cradle-to-gate unless compatible upstream links are verified.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.pedal-bicycle |
| classification_refs | CPC 3.0 49921; narrower lug-brazed steel pedal bicycle route; context only |
| covered_products | New complete nonfolding human-powered two-wheel bicycles with lug-brazed alloy-steel frame, rigid steel fork, derailleur chain drivetrain, cable-operated rim brakes and pneumatic clincher tyres with inner tubes. Declare an actual road/utility model, geometry, wheel and component configuration. No electric or combustion propulsion. Manufacturing foreground starts at declared stock or received finished assemblies and ends at configured factory acceptance and protection. This is a narrower product/process route within CPC 49921, not all nonmotorized cycles. |
| excluded_products | Exclude e-bikes, auxiliary-motor cycles, motorcycles, tricycles, tandems, recumbents, folding bicycles, cargo-specific multiwheel cycles, toys/sidewalk-specific designs, track-racing fixed-gear bicycles, suspension/disc-brake bicycles, welded aluminium/composite/titanium and other undeclared frame routes, frame-only kits, used/repair/remanufactured products, riding/transport services, rider food metabolism, route infrastructure, maintenance use and end of life. |
| representative_product | One accepted complete configured bicycle with positive measured M |
| production_route | Conditional frame/fork fabrication and finishing; mechanical assembly, net weighing and acceptance; conditional packing |
| market_state | New complete accepted bicycle at declared factory gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one complete configured human-powered bicycle |
| How much | 1 kg accepted complete bicycle net mass; per-unit collection normalized using measured M |
| How well | Declared mechanical/safety/configuration acceptance; equal mass does not imply equal bicycle performance |
| How long or cycle | One manufacture/acceptance cycle; no distance, lifetime or passenger-km service unit |
| reference_flow_link | finished_bicycle |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete lug-brazed steel pedal bicycle |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model/serial; frame size, geometry, steel grade/tube dimensions, lug joints, rigid-fork specification and received-versus-fabricated scope; finish formulation/route; wheel/rim/hub completeness, pneumatic tyre/tube specification and measured inflation state; gear range and actual chain/crank/cassette/derailleur/controls; cable rim-brake configuration; steering/saddle/pedals, all integral reflectors/guards/fittings and installed lubrication; actual market/type and production acceptance plan; same-serial calibrated complete net mass M kg, measured tare and integral detached parts; manufacturing gate/site/period, supply completeness, allocation, upstream links, uncertainties and exclusions |

M includes installed pedals, inflated tyres/tubes, attached integral guards/reflectors/fittings and actual installed lubrication. Exclude packaging, rider/payload, fixtures, loose tools and spares. Reconcile measured integral parts temporarily detached for shipment to the same serial once. Neither a catalogue weight that omits pedals nor frame weight, shipping gross mass or rider capacity establishes M. Required qualifiers must appear in the concrete dataset; absent qualifiers mean incomplete reference definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Weigh the actual accepted bicycle with suitable calibrated scale, measured fixture/tare, controlled installed-component list and serial release. Record pedal installation, tyre pressure/state, lubrication and all delivered integral parts. Reconcile component records against whole-bicycle measurement with uncertainty, scale resolution/date/operator and positive net M. Detached integral parts require measured records; catalogue estimates or a parts sum alone do not replace physical weighing. |
| `energy_units` | each electricity row | Net calorific value | MJ | Use verified energy unit-group conversion 1 kWh = 3.6 MJ. Preserve actual electricity supply voltage and route, distinct from riding work, mass and fuel energy; no heating-value/density factor supplied. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified steel stock and received finished bicycle components |
| starting_condition_role | Declared receipt-to-accepted-bicycle manufacturing foreground |
| product_classification_scope | New complete nonfolding human-powered two-wheel bicycles with lug-brazed alloy-steel frame, rigid steel fork, derailleur chain drivetrain, cable-operated rim brakes and pneumatic clincher tyres with inner tubes. Declare an actual road/utility model, geometry, wheel and component configuration. No electric or combustion propulsion. Manufacturing foreground starts at declared stock or received finished assemblies and ends at configured factory acceptance and protection. This is a narrower product/process route within CPC 49921, not all nonmotorized cycles. |
| recursive_input_rule | Never input the same finished bicycle to its own manufacture. Received finished frame/fork or complete wheel replaces its contained stock/parts and processing. In-house stages have their own measured exchanges |
| upstream_dataset_requirement | Match actual steel grade/tube state, component specification/supplied completeness, finish, site/period/provider and reference property/unit; disclose incompatible or missing upstream links |
| disclosure | manufacturer/model/serial; frame size, geometry, steel grade/tube dimensions, lug joints, rigid-fork specification and received-versus-fabricated scope; finish formulation/route; wheel/rim/hub completeness, pneumatic tyre/tube specification and measured inflation state; gear range and actual chain/crank/cassette/derailleur/controls; cable rim-brake configuration; steering/saddle/pedals, all integral reflectors/guards/fittings and installed lubrication; actual market/type and production acceptance plan; same-serial calibrated complete net mass M kg, measured tare and integral detached parts; manufacturing gate/site/period, supply completeness, allocation, upstream links, uncertainties and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all processes | Include actual fabrication, coating, assembly, attributable rework, factory acceptance and protection. Attribute outsourced coating/test services with actual scope/unit; do not duplicate supplier-contained processes. Riding, service transport and end of life remain outside this manufacturing gate. |  |
| `boundary_completeness` | BOM and delivered bicycle | Record every actual integral component and supply completeness. Add separate actual gear cables/housings, brake pads, fasteners, retainers, decals, guards and fittings absent from candidate cards. Complete-wheel input excludes separately supplied tyre/tube/cassette unless explicitly contained; if contained, suppress corresponding separate cards. Received frame/fork is used only when not already made by the modelled fabrication stages. Actual heating carriers, coating species and emissions need separate evidenced exchanges; candidate cards are not a universal exhaustive recipe. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Frame and rigid-fork fabrication | conditional | Only actual in-house tube cutting, lug brazing and alignment; received finished frame/fork replaces these exchanges | foreground | one accepted configured complete bicycle, normalized using M |
| `finishing` | Frame surface preparation and finishing | conditional | Only actual in-house cleaning, coating and curing; exclude supplier-contained finish | foreground | one accepted configured complete bicycle, normalized using M |
| `assembly` | Mechanical bicycle assembly and adjustment | required | Every declared complete bicycle; actual received assembly scope and drivetrain configuration govern each card | foreground | one accepted configured complete bicycle, normalized using M |
| `acceptance` | Complete configuration, net mass and safety acceptance | required | Every accepted complete bicycle | foreground | one accepted configured complete bicycle, normalized using M |
| `packing` | Shipment protection | conditional | Only actual packaging at the manufacturing gate | foreground | one accepted configured complete bicycle, normalized using M |

Conditional fabrication and finishing feed assembly; complete bicycle acceptance precedes conditional protection. Assign shared resources once. Each row within required stages still requires actual configuration/chemistry applicability. No emissions are presumed mandatory.

### Process: Frame and rigid-fork fabrication (`fabrication`)

Record exact steel grade/tube geometry, joint drawing, filler and flux formulations, actual heat source and net issues. Mercian documents a particular open-hearth lug-brazing route, not a universal fuel or alloy. Add each actual heat carrier and species-specific emission separately with measured evidence; no invented brazing fuel demand.

#### Inputs

##### Product flows

###### Alloy-steel bicycle frame tube (`steel_tube`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Alloy-steel bicycle frame tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `mercian-craft`

###### Steel bicycle head-tube lug (`head_lug`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Steel bicycle head-tube lug
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `mercian-craft`

###### Steel bicycle fork crown (`fork_crown`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Steel bicycle fork crown
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `mercian-craft`

###### Steel bicycle rear dropout (`rear_dropout`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Steel bicycle rear dropout
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `mercian-craft`

###### Copper-zinc brass brazing rod (`brass_rod`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Copper-zinc brass brazing rod
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `mercian-craft`

###### Borate-fluoride brazing flux (`brazing_flux`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Borate-fluoride brazing flux
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `mercian-craft`

###### Factory-intake alternating-current electricity (`fabrication_electricity`)

Only actual attributable metered kWh, converted to MJ; no bicycle riding energy or nameplate-power estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `mercian-craft`

#### Outputs

##### Waste flows

###### Alloy-steel tube offcut waste (`steel_offcut`)

Only actual measured fabrication waste transfer; not a co-product or avoided-steel credit by default.

- Selected flow: Alloy-steel tube offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `mercian-craft`

### Process: Frame surface preparation and finishing (`finishing`)

Declare actual primer and enamel product formulation with SDS, blasting abrasive, heating route and collection method. Candidate alkyd cards apply only if formulation confirmed. Manufacturer stove-enamel example does not prove universal alkyd chemistry or solvent species; add each actual clearcoat, abrasive and emission separately.

#### Inputs

##### Product flows

###### Alkyd etch primer coating (`primer`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Alkyd etch primer coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

###### Alkyd stoving enamel coating (`enamel`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Alkyd stoving enamel coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

###### Process Water (`cleaning_water`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

###### Anhydrous isopropanol cleaning solvent (`isopropanol`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Anhydrous isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

###### Nonwoven polyester cleaning wipe (`cleaning_wipe`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Nonwoven polyester cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

###### Factory-intake alternating-current electricity (`finishing_electricity`)

Only actual attributable metered kWh, converted to MJ; no bicycle riding energy or nameplate-power estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

#### Outputs

##### Waste flows

###### Isopropanol-contaminated polyester wipe waste (`spent_wipe`)

Only actual contaminated wipe destination/mass; separate retained solvent from actual air release.

- Selected flow: Isopropanol-contaminated polyester wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

###### Aqueous steel-frame cleaning wastewater (`cleaning_effluent`)

Only actual effluent transferred to treatment, with measured composition and solids; not natural water or elementary-water release.

- Selected flow: Aqueous steel-frame cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

#### Outputs

##### Elementary flows

###### isopropanol (`isopropanol_air`)

Only actually evidenced IPA cleaning emission, CAS 67-63-0, unspecified air and immediate; use measured species-specific solvent balance or verified emission measurement, not all solvent issued. Absence of actual route means not_applicable with evidence; indoor air or long-term releases need a different identity.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `mercian-craft`

### Process: Mechanical bicycle assembly and adjustment (`assembly`)

Install frame/fork, steering, wheels, pneumatic tyres/tubes, pedals/chain transmission, cable rim brakes and seating. Use a received complete wheel or crankset only once; do not also enter its contained rim/hub/spokes or crank/chainrings. Check wheel true, tyre seating, alignment, bearing preload, chain length, derailleur limits, cable routing and brake adjustment against actual component instructions.

#### Inputs

##### Product flows

###### Finished lug-brazed steel bicycle frame (`received_frame`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Finished lug-brazed steel bicycle frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Finished rigid steel bicycle fork (`received_fork`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Finished rigid steel bicycle fork
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle headset bearing assembly (`headset`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle headset bearing assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle handlebar stem (`stem`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle handlebar stem
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Aluminium bicycle handlebar (`handlebar`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Aluminium bicycle handlebar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Rubber bicycle handlebar grip (`grip`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Rubber bicycle handlebar grip
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Aluminium bicycle seat post (`seatpost`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Aluminium bicycle seat post
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Complete bicycle saddle (`saddle`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Complete bicycle saddle
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Complete aluminium-rim bicycle wheel (`wheel`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Complete aluminium-rim bicycle wheel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Pneumatic bicycle tyre (`pneumatic_tyre`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Pneumatic bicycle tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Butyl-rubber bicycle inner tube (`inner_tube`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Butyl-rubber bicycle inner tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Nylon bicycle rim tape (`rim_tape`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Nylon bicycle rim tape
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle bottom-bracket bearing assembly (`bottom_bracket`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle bottom-bracket bearing assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle crankset with chainrings (`crankset`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle crankset with chainrings
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Complete bicycle pedal (`pedal`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Complete bicycle pedal
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle steel roller chain (`roller_chain`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle steel roller chain
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle rear sprocket cassette (`cassette`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle rear sprocket cassette
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle rear derailleur (`rear_derailleur`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle rear derailleur
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle gear shifter (`gear_shifter`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle gear shifter
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Cable-operated bicycle rim brake caliper (`rim_brake`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Cable-operated bicycle rim brake caliper
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle brake lever (`brake_lever`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle brake lever
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Stainless-steel bicycle brake cable (`brake_cable`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Stainless-steel bicycle brake cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle brake-cable outer housing (`brake_housing`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle brake-cable outer housing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Bicycle passive reflector (`reflector`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Bicycle passive reflector
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Lithium-soap lubricating grease (`bearing_grease`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Lithium-soap lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Mineral lubricating oil for bicycle chain (`chain_oil`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

- Selected flow: Mineral lubricating oil for bicycle chain
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

###### Factory-intake alternating-current electricity (`assembly_electricity`)

Only actual attributable metered kWh, converted to MJ; no bicycle riding energy or nameplate-power estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `rivendell-sam`

### Process: Complete configuration, net mass and safety acceptance (`acceptance`)

Record complete configured mechanical and visual acceptance, same-serial calibrated physical net weighing and release. Distinguish production checks from destructive regulatory/type qualification. CPSC requirements apply to products within its US market scope; actual market and component acceptance criteria govern elsewhere. No universal test load, life or pass threshold is supplied here.

#### Inputs

##### Product flows

###### Factory-intake alternating-current electricity (`acceptance_electricity`)

Only actual attributable metered kWh, converted to MJ; no bicycle riding energy or nameplate-power estimate.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `cpsc-bicycle`

#### Outputs

##### Product flows

###### Accepted complete lug-brazed steel pedal bicycle (`finished_bicycle`)

Complete same-configuration bicycle with integral pedals and declared pneumatic-tyre state, excluding packaging, rider and loose spares. Positive measured M and cp_mass establish per-kg output; no catalogue weight assumed.

- Selected flow: Accepted complete lug-brazed steel pedal bicycle
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `cpsc-bicycle`

### Process: Shipment protection (`packing`)

Measure each packing component separately. Shipment removal of integral pedals, front wheel or handlebar does not change accepted complete-bicycle M: reconcile these measured parts to the same serial once. Packaging remains outside product M.

#### Inputs

##### Product flows

###### Corrugated cardboard box (`carton`)

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

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

Use only the actually installed or consumed item with declared specification and net issue/return record; contained parts of a received complete assembly are excluded to prevent double counting.

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

Only actual attributable metered kWh, converted to MJ; no bicycle riding energy or nameplate-power estimate.

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
| `allocation_orders` | shared factory resources | First directly attribute configured net issues, metered electricity, coating batches, assembly and acceptance jobs, including rework. For inseparable resources require measured causal machine/fixture occupancy and actual load or another documented physical driver: share = order driver / sum of covered order drivers. Retain full period and denominator. Equal bicycle counts, catalogue masses, paint colour count or rider capacity are not default allocation rules. |  |
| `allocation_tests` | type qualification and production acceptance | Distinguish destructive qualification/prototype units from saleable accepted bicycles. Attribute per-unit production checks directly; shared type-test burdens require documented actual product applicability and causal allocation, alternatives and sensitivity. Exclude independent R&D; do not include destroyed test-unit mass in accepted output. Purchased test service and its contained electricity cannot both represent the same resource. | `cpsc-bicycle` |
| `allocation_recovery` | offcuts, rejects and rework | Document actual waste versus saleable co-product, destination and period mass balance. Internal rework stays with accepted production. Recyclability alone does not justify avoided-primary-steel, disposal or substitution credits. Any actual co-product allocation requires declared method, causal/economic originals and sensitivity. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | accepted physical weighing record | model; configuration; serial number; accepted net mass M; installed BOM; complete-bicycle scale reading; fixture tare; pedals and inflated-tyre state; detached integral parts; calibration and uncertainty; signed release | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | actual manufacturing and acceptance period | declared bicycle acceptance gate | accepted net mass per unit | actual calibrated physical weighing, measured tare and configured integral-part reconciliation |
| `cp_fabrication` | `fabrication` | inventory | actual stage exchange records | serial/configuration; exact exchange/specification; net issues/returns/stocks; component containment; kg; metered kWh; waste destination; emission method; shared driver; test phase | Read cutting/brazing/alignment job, supplier specifications, net issues and actual heat meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original specifications/calibrations, bills/issues, meters, acceptance and transfer records |
| `cp_finishing` | `finishing` | inventory | actual stage exchange records | serial/configuration; exact exchange/specification; net issues/returns/stocks; component containment; kg; metered kWh; waste destination; emission method; shared driver; test phase | Read coating batch/SDS, cleaning and cure job, water/energy meters, solvent balance and waste-transfer originals | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original specifications/calibrations, bills/issues, meters, acceptance and transfer records |
| `cp_assembly` | `assembly` | inventory | actual stage exchange records | serial/configuration; exact exchange/specification; net issues/returns/stocks; component containment; kg; metered kWh; waste destination; emission method; shared driver; test phase | Read serial-linked BOM and component supply completeness, net issues/returns, adjustment jobs and meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original specifications/calibrations, bills/issues, meters, acceptance and transfer records |
| `cp_acceptance` | `acceptance` | inventory | actual stage exchange records | serial/configuration; exact exchange/specification; net issues/returns/stocks; component containment; kg; metered kWh; waste destination; emission method; shared driver; test phase | Read actual market/type plan, production acceptance reports, serial release, scale calibration and net weighing originals | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original specifications/calibrations, bills/issues, meters, acceptance and transfer records |
| `cp_packing` | `packing` | inventory | actual stage exchange records | serial/configuration; exact exchange/specification; net issues/returns/stocks; component containment; kg; metered kWh; waste destination; emission method; shared driver; test phase | Read actual packing bills, issues/returns and detached integral-part reconciliation | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original specifications/calibrations, bills/issues, meters, acceptance and transfer records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Implement mass_record_provenance with current same-serial physical weighing. Include installed pedals, inflation and lubrication state and measured detached integral parts; exclude packing, rider/load and fixtures. Actual scale calibration/uncertainty and whole-unit/BOM reconciliation are prerequisites. No catalogue bicycle/frame weight, shipping gross mass or assumed part sum substitutes for M. Missing original measurement requires scientific/data review. | actual physical weighing, calibration, BOM and release originals |
| `quality_atomic` | every exchange | Verify one physical or formulated identity, chemistry/concentration and supply route/completeness. Steel lug differs from weld wire, finished fork from generic bicycle parts, mineral oil from PAO and anhydrous IPA from disinfectant. Keep actual public reference property/unit, species and medium; unresolved identities remain specific rows with declared reasons. | actual drawings, supplier specification/SDS, receipts and verified flow records |
| `quality_acceptance` | cp_acceptance | Declare actual market and product exemptions, assembly instructions and serial-linked production check criteria. Record mechanical alignment/steering, wheel retention/true, tyre seating, chain/derailleur motion, cable routing, rim-brake action, seating/pedals and required guards/reflectors. Separate qualification and destructive tests; CPSC US guidance is not a universal test schedule or global certification. Record failures and attributable rework. | actual market acceptance plan/component instructions, original reports and release; CPSC applicable US context only |
| `quality_balance` | material, water, solvent and electricity | Reconcile period inputs with incorporation, measured returns/stock, rejects/waste and actually measured releases. Technical process water, wastewater treatment transfer and natural withdrawal are distinct. IPA-air release requires chemistry, immediate air/unspecified medium and a closed species balance or measured release; solvent issue is not emission. Record actual heat source and add each fuel/heat/abrasive/paint species exchange before data completion. No universal fuel, heating intensity or mandatory emission is inferred. | original batch/spec/SDS, stock/material/solvent balances, meters and transfers |
| `quality_coverage` | dataset and upstream links | Distinguish measured, calculated, missing and demonstrated not_applicable. Audit all actual hardware beyond candidate cards, foreground gaps, supplier boundary mismatch, unresolved identities, allocations and uncertainty. Complete cradle-to-gate coverage requires verified compatible upstream links; structural/finite measurement pass does not establish actual data, safety or methodology approval. | actual complete BOM/process map and transparent data gap register |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference and accepted output | Require positive current same-configuration measured M with cp_mass. Exact reference product name equals finished_bicycle; if UUID absent, register that exact row in unresolved_flow_identities. Integral pedals, tyres and delivered detached parts are reconciled once; no packaging/rider mass. |  |
| `validate_basis` | all inventory rows | Verify ordered identical lower-case row/rule/protocol IDs in both languages and generated projection, accepted-unit q_item, M kg, explicit normalize_mass and matching denominators. Public quantity/area/energy properties must never be relabelled as Mass. |  |
| `validate_boundary` | process map and BOM | Audit received versus fabricated frame/fork and supplier-contained coating/parts, complete-wheel and crankset containment, outsourced versus direct resources, acceptance versus qualification, all actual missing exchanges and emissions evidence. Missing actual factory records or unresolved applicability requires review; candidate cards alone do not establish completeness. |  |
| `validate_use` | dataset use | Disclose exact model/configuration, manufacturing gates, mass evidence, data gaps, allocation/upstream compatibility and review state. Equal mass is not equal riding performance, lifetime or transport service. Finite check is not scientific approval, publication or market safety certification. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset and background_dataset after actual-data completion and review |
| downstream_use | Configured bicycle manufacturing input into a separately bounded bicycle lifecycle model |
| allowed_use | Compare compatible manufacturing gates/configurations and upstream links per kg; disclose different performance and mass state |
| excluded_use | Exclude e-bikes, auxiliary-motor cycles, motorcycles, tricycles, tandems, recumbents, folding bicycles, cargo-specific multiwheel cycles, toys/sidewalk-specific designs, track-racing fixed-gear bicycles, suspension/disc-brake bicycles, welded aluminium/composite/titanium and other undeclared frame routes, frame-only kits, used/repair/remanufactured products, riding/transport services, rider food metabolism, route infrastructure, maintenance use and end of life. |
| required_metadata | manufacturer/model/serial; frame size, geometry, steel grade/tube dimensions, lug joints, rigid-fork specification and received-versus-fabricated scope; finish formulation/route; wheel/rim/hub completeness, pneumatic tyre/tube specification and measured inflation state; gear range and actual chain/crank/cassette/derailleur/controls; cable rim-brake configuration; steering/saddle/pedals, all integral reflectors/guards/fittings and installed lubrication; actual market/type and production acceptance plan; same-serial calibrated complete net mass M kg, measured tare and integral detached parts; manufacturing gate/site/period, supply completeness, allocation, upstream links, uncertainties and exclusions |
| required_quality_disclosure | Measured/calculated/missing status, actual mass and acceptance provenance, omissions, unresolved identities/ranges, allocation and uncertainty; candidate and pending scientific review |
| update_trigger | Actual steel/frame joining, wheel/brake/drivetrain configuration, supplied completeness, coating route, mass protocol, market acceptance, plant or upstream data changes |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `mercian-craft` | literature | [Mercian Our Craft](https://www.merciancycles.co.uk/our-craft) | Headings Skilled/Traditional/Bespoke, Precision Brazing by Hand, Final Frame Details, and stove-enamel finishing: an actual manufacturer example of mitering/alignment, pinned lug brazing, shot blasting and staged paint cure. No universal fuel/alloy/coating chemistry, fixed curing duration, numerical resource demand, lifetime or product mass adopted. Actual foreground specifications govern. |
| `rivendell-sam` | literature | [Rivendell Sam Hillborne 2025](https://www.rivbike.com/products/frame-sam-hillborne-2025) | FRAME, Frame Specification, BRAKES and LOOKS GOOD TO US: CrMo frame tubing, rim-brake compatibility, lug joints and crowned fork. This frameset page is configuration context, not complete-bicycle BOM/weight or acceptance evidence. No wheel-size/geometry, load, price, rider limit or lifetime adopted as a PCR constraint. |
| `cpsc-bicycle` | official_guidance | [CPSC Bicycles FAQ](https://www.cpsc.gov/FAQ/Bicycles) | Purpose/definition/exemptions, general testing, assembly, braking, steering, pedals, chain, tyre/wheel/hub, frame/fork, seating, reflectors and instructions sections: US regulatory applicability and offered-for-sale/assembled condition. Use actual applicable market criteria and product exemptions; no numeric thresholds translated into universal production QA, net-M method or lifetime. This methodology is not certification. |
