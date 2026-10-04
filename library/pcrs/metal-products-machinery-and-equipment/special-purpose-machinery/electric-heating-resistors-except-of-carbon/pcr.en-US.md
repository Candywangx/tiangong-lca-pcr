---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-heating-resistors-except-of-carbon
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Electric heating resistors, except of carbon

## 1. Scope and Applicability

This PCR produces a foreground factory-gate dataset for one declared configuration of a complete non-carbon resistive heating element. It does not assert equal heating service per kilogram. Select actual architecture and make/buy boundary before collection; section5 provides the enforceable scope, exclusions and classification limitations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-heating-resistors-except-of-carbon |
| classification_refs | CPC 3.0 44818 |
| covered_products | Complete principal-heater metal-alloy, PTC ceramic, MoSi2 or refractory-metal elements; conditional industrial scope requires classification review. |
| excluded_products | Carbon/graphite heating bodies; complete appliances/furnaces; non-heating resistors and protection/sensor PTC; heat service. |
| representative_product | Declared finished NiCr tubular element; an architecture example, not the only permitted family. |
| production_route | Own conductor/ceramic preparation and assembly, or assembly from purchased bodies; declare every actual route. |
| market_state | Accepted complete solid element at plant, terminals/insulation included where specified; transport packaging separate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a specified complete resistive heating element for integration; no thermal-service equivalence claim. |
| How much | 1 kg accepted net element output of one configuration. |
| How well | Actual rated voltage/power, resistance tolerance and measurement temperature, insulation test, geometry, conductor grade, thermal interface, atmosphere and acceptance specification. |
| How long or cycle | One production acceptance and dispatch cycle; no lifetime or service operating time default. |
| reference_flow_link | `finished` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal heating function; complete-element interface; model/configuration; conductor chemistry/grade; PTC versus metallic/silicide; make/buy completion state; dimensions/net mass; rated voltage/power; resistance and test temperature; insulation/terminal/sheath/substrate; atmosphere and thermal interface; site/period/geography; acceptance cohort; classification decision; provider boundaries |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| normalize_inventory | all inventory rows | row-specific | row-specific | Every applicable non-reference amount uses normalize_mass; mass refers only to the product denominator, never converts an energy numerator to mass. |
| physical_assay | physical material and species records | Mass | kg | Keep gross physical mass and contained-species mass separate using each record own assay and wet/dry basis; no rule applies this assay to electricity or transport. |
| energy_units | utility records | Energy | MJ | Retain metered kWh and convert by 3.6 MJ/kWh; actual gas volume requires own conditions/composition/heating value. Steam mass cannot substitute for delivered heat. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual incoming grade-specific conductor/powder or purchased body/module completion state. |
| starting_condition_role | foreground input interface |
| product_classification_scope | Semantic non-carbon principal-heater elements; CPC44818 industrial/ceramic correspondence requires review. |
| recursive_input_rule | Bought same-category body is one incoming upstream component; omit its embedded production from own steps. |
| upstream_dataset_requirement | Specific materials/modules, each actual supply utility, inbound logistics and external treatment; gaps explicit. |
| disclosure | Incoming state, included own steps, exclusions, provider geography/technology/period, reactions and allocation evidence. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| scope | Complete non-carbon resistive heating elements whose principal designed function is heat generation are covered. Metal-alloy coil, tubular/cartridge, etched-foil, barium-titanate heater PTC, MoSi2 and refractory-metal designs are distinct conditional families. Exclude carbon/graphite heat-generating bodies; carbon in polymer insulation or carbonate feedstock does not by itself trigger that exclusion. | cpc-3-notes; tdk-ptc; kanthal-super; molytun-elements |
| classification | CPC3 places 44818 under domestic appliances but gives no detailed leaf note. Do not infer that every industrial or ceramic element is accepted into 44818. Keep actual principal function, conductor chemistry, apparatus versus element interface and classification decision; this methodology intentionally retains industrial conditional routes pending coordinate review. SiC and other chemically combined-carbon conductors require explicit carbon-boundary and classification review before extension; they are not silently treated as graphite or included as proved non-carbon. | cpc-3-notes |
| exclusion | Exclude complete appliances, industrial furnaces, supplied useful heat and operating service. Exclude non-heating resistor, protection-fuse, sensing and motor-start PTC unless the delivered product is evidenced as a principal heater. Factory powered acceptance is included; later appliance use, lifetime, replacement and end-of-life are outside this production dataset. | tdk-ptc; cpc-3-notes |
| make_buy | For each conductor, sheath, terminal, substrate, insulation and electronic sensor, declare bought completion state versus own steps. Complete bought module carries embedded metal/powder/sintering/etching once in its upstream dataset. Own manufacture takes specific feedstocks and actual operations, removing the equivalent bought module. Partial bought bodies include only downstream steps actually performed; internal intermediate transfers cancel, never a second external input. | watlow-tubular; watlow-flexible; tdk-ptc; epo-silicide |
| extension | Cards below are concrete conditional interface examples, not a compulsory BOM. For every actual grade, dopant, binder, coating, contact metallization, solvent, fuel, cooling chemical, coolant, packaging and waste absent from these examples, create a separate atomic card with verified identity and protocol. Do not place plural materials, unspecified chemicals or an all-material basket in one exchange. Missing actual identity or measurement is unknown, not zero; not_applicable needs route evidence. | tdk-ptc; epo-silicide |
| upstream | Include incoming supply and actual inbound transport; upstream provider must match chemistry, component completion state, electricity voltage/geography, steam gross/net return convention and waste treatment route. Foreground logs do not imply a complete cradle-to-gate result without these providers. Record each actual transport mode and tonne-kilometre leg separately; no shipment distance defaults. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| metal | Conductor cutting, winding and forming | conditional | In-house metal conductor manufacture; record actual wire/foil/strip/rod grade, forming, anneal and losses. | foreground | per 1 kg reference flow |
| etch | Foil patterning and cleaning | conditional | Only own chemical etching; purchased etched circuit excludes its upstream etchant and foil from foreground. | foreground | per 1 kg reference flow |
| ceramic | Ceramic resistor preparation and firing | conditional | Only own PTC or silicide body manufacture; actual formula, dopant, binder, atmosphere and process record govern. | foreground | per 1 kg reference flow |
| assembly | Insulation, sheathing and terminal assembly | conditional | Own complete element assembly; powder filling and compaction, swaging, joining, encapsulation or lamination only where performed. | foreground | per 1 kg reference flow |
| test | Factory acceptance and dispatch | required | All products; actual electrical/insulation/dimensional acceptance, rejection and retest plus dispatch packaging. | foreground | per 1 kg reference flow |
| services | Residual site utilities and treatment | conditional | Only unassigned residual common services, own generation, water and waste treatment; reconcile same site period. | foreground | per 1 kg reference flow |

### Process: Conductor cutting, winding and forming (`metal`)

#### Inputs

##### Product flows

###### NiCr 80 resistance wire (`nicr_wire`)

Only a certified NiCr 80 incoming wire and own forming; do not assign this grade to unspecified nickel-alloy designs.

- Selected flow: NiCr 80 resistance wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### Kanthal A-1 FeCrAl resistance wire (`fecral_wire`)

Only this certified incoming grade and own forming.

- Selected flow: Kanthal A-1 FeCrAl resistance wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `kanthal-a1`

###### NiCr 80 resistance foil (`nicr_foil`)

Only actual certified NiCr 80 foil; other nickel-alloy foil requires its own chemically specific card.

- Selected flow: NiCr 80 resistance foil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-flexible`

###### Molybdenum strip, Mo grade (`mo_strip`)

Only actual own conductor forming from this certified solid feedstock; purchased finished conductor is a distinct interface.

- Selected flow: Molybdenum strip, Mo grade
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `molytun-elements`

###### Tungsten rod, W grade (`w_rod`)

Only actual own conductor forming from this certified solid feedstock; purchased finished conductor is a distinct interface.

- Selected flow: Tungsten rod, W grade
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `molytun-elements`

###### Tantalum strip, Ta grade (`ta_strip`)

Only actual own conductor forming from this certified solid feedstock; purchased finished conductor is a distinct interface.

- Selected flow: Tantalum strip, Ta grade
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `molytun-elements`

###### Alternating current (`metal_mvac`)

Only purchased CN 1–35 kV consumption-mix supply matching actual site voltage, period and provider; internal transformation/generation is not bought twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Outputs

##### Waste flows

###### NiCr 80 wire offcut scrap (`alloy_scrap`)

Only externally transferred segregated scrap of this grade; internal reuse cancels as paired transfer.

- Selected flow: NiCr 80 wire offcut scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `watlow-tubular`

### Process: Foil patterning and cleaning (`etch`)

#### Inputs

##### Product flows

###### Ferric chloride aqueous etchant (`ferric_chloride`)

Only when actual bath records establish FeCl3 chemistry, concentration and supplier; no mandated etchant recipe.

- Selected flow: Ferric chloride aqueous etchant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-flexible`

###### Deionized rinse water (`rinse_water`)

Only actual fresh supply; internal cascade/recovery is not a second fresh input.

- Selected flow: Deionized rinse water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `watlow-flexible`

###### Alternating current (`etch_mvac`)

Only purchased CN 1–35 kV consumption-mix supply matching actual site voltage, period and provider; internal transformation/generation is not bought twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Outputs

##### Waste flows

###### Spent ferric chloride etching solution (`spent_etchant`)

Only this separately transferred waste; measure wet mass and own Fe/Ni/Cr/chloride assays.

- Selected flow: Spent ferric chloride etching solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `watlow-flexible`

### Process: Ceramic resistor preparation and firing (`ceramic`)

#### Inputs

##### Product flows

###### Barium carbonate powder, BaCO3 (`barium_carbonate`)

Only own PTC preparation using this actual precursor; purity, moisture, stocks and reaction records required.

- Selected flow: Barium carbonate powder, BaCO3
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `tdk-ptc`

###### Titanium dioxide powder, TiO2 (`titanium_dioxide`)

Only own PTC preparation using this actual precursor; purity, moisture, stocks and reaction records required.

- Selected flow: Titanium dioxide powder, TiO2
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `tdk-ptc`

###### Molybdenum disilicide powder, MoSi2 (`mosi2_powder`)

Only actual own silicide preparation from this powder; composition and upstream conversion boundary declared.

- Selected flow: Molybdenum disilicide powder, MoSi2
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epo-silicide`

###### Tungsten-containing molybdenum disilicide solid-solution powder (`wmosi2_powder`)

Only certified (MoxW1-x)Si2 feedstock with measured x and own preparation; alternative to pure MoSi2, not added automatically.

- Selected flow: Tungsten-containing molybdenum disilicide solid-solution powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epo-silicide`

###### Yttrium oxide powder, Y2O3 (`yttria`)

Only when this additive is in the actual silicide recipe; no patent example fraction becomes a default.

- Selected flow: Yttrium oxide powder, Y2O3
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epo-silicide`

###### Silicon dioxide powder, SiO2 (`silica`)

Only when this additive is in the actual silicide recipe; no patent example fraction becomes a default.

- Selected flow: Silicon dioxide powder, SiO2
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epo-silicide`

###### Nitrogen gas supplied for debinding (`nitrogen`)

Only actual nitrogen atmosphere with supplied-gas mass and own purge record.

- Selected flow: Nitrogen gas supplied for debinding
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epo-silicide`

###### Argon gas supplied for sintering (`argon`)

Only actual argon atmosphere; purchased gas production upstream once.

- Selected flow: Argon gas supplied for sintering
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epo-silicide`

###### Alternating current (`ceramic_mvac`)

Only purchased CN 1–35 kV consumption-mix supply matching actual site voltage, period and provider; internal transformation/generation is not bought twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Outputs

##### Waste flows

###### Rejected barium-titanate PTC ceramic body (`ceramic_reject`)

Only segregated PTC rejects sent outside; silicide rejects require a distinct composition-specific card.

- Selected flow: Rejected barium-titanate PTC ceramic body
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `tdk-ptc`

##### Elementary flows

###### Carbon dioxide from carbonate reaction, to air (`reaction_co2`)

Only actual carbonate reaction verified by input purity, conversion and retained carbonate plus stocks; do not confuse with fuel CO2.

- Selected flow: Carbon dioxide from carbonate reaction, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `tdk-ptc`

### Process: Insulation, sheathing and terminal assembly (`assembly`)

#### Inputs

##### Product flows

###### Purchased NiCr 80 formed heating coil (`purchased_coil`)

Only bought specified subassembly at the verified incoming interface; omit its embedded material, forming and firing from own foreground.

- Selected flow: Purchased NiCr 80 formed heating coil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### Purchased contacted barium-titanate PTC heating body (`purchased_ptc`)

Only bought specified subassembly at the verified incoming interface; omit its embedded material, forming and firing from own foreground.

- Selected flow: Purchased contacted barium-titanate PTC heating body
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `tdk-ptc`

###### Purchased finished MoSi2 heating body (`purchased_silicide`)

Only bought specified subassembly at the verified incoming interface; omit its embedded material, forming and firing from own foreground.

- Selected flow: Purchased finished MoSi2 heating body
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `kanthal-super`

###### Purchased etched NiCr 80 heating circuit (`purchased_foil`)

Only bought specified subassembly at the verified incoming interface; omit its embedded material, forming and firing from own foreground.

- Selected flow: Purchased etched NiCr 80 heating circuit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-flexible`

###### Alloy 800 sheath tube (`alloy800_tube`)

Only actual separately purchased component of this grade; alternatives and embedded modules are mutually exclusive for the same part.

- Selected flow: Alloy 800 sheath tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### AISI 304 stainless-steel sheath tube (`ss304_tube`)

Only actual separately purchased component of this grade; alternatives and embedded modules are mutually exclusive for the same part.

- Selected flow: AISI 304 stainless-steel sheath tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### Nickel terminal pin, Ni grade (`nickel_pin`)

Only actual separately purchased component of this grade; alternatives and embedded modules are mutually exclusive for the same part.

- Selected flow: Nickel terminal pin, Ni grade
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### Sintered alumina insulating former (`alumina_former`)

Only actual separately purchased component of this grade; alternatives and embedded modules are mutually exclusive for the same part.

- Selected flow: Sintered alumina insulating former
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### Electrical-grade magnesium oxide insulation powder (`mgo`)

Only own powder-filled sheathed route; moisture, purity, fill, spill and recovered powder measured; not universal to all heaters.

- Selected flow: Electrical-grade magnesium oxide insulation powder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### Fiberglass-reinforced silicone-rubber insulation sheet (`silicone_sheet`)

Only this actual insulation/seal constituent and supplier grade in the own assembly; document resin, solvent and cure chemistry separately.

- Selected flow: Fiberglass-reinforced silicone-rubber insulation sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-flexible`

###### Polyimide electrical-insulation film (`polyimide_film`)

Only this actual insulation/seal constituent and supplier grade in the own assembly; document resin, solvent and cure chemistry separately.

- Selected flow: Polyimide electrical-insulation film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-flexible`

###### Electrical-insulation fiberglass cord (`fiberglass_cord`)

Only this actual insulation/seal constituent and supplier grade in the own assembly; document resin, solvent and cure chemistry separately.

- Selected flow: Electrical-insulation fiberglass cord
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-flexible`

###### Silicone-resin end-seal compound (`silicone_seal`)

Only this actual insulation/seal constituent and supplier grade in the own assembly; document resin, solvent and cure chemistry separately.

- Selected flow: Silicone-resin end-seal compound
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### Isopropanol cleaning solvent (`ipa`)

Only actual IPA cleaning with grade and solution concentration verified; no universal cleaning route.

- Selected flow: Isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent`
- Sources: `watlow-flexible`

###### Alternating current (`assembly_mvac`)

Only purchased CN 1–35 kV consumption-mix supply matching actual site voltage, period and provider; internal transformation/generation is not bought twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Outputs

##### Waste flows

###### Spent isopropanol cleaning liquid (`waste_ipa`)

Only externally transferred liquid; use own IPA assay, water content and wet mass.

- Selected flow: Spent isopropanol cleaning liquid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent`
- Sources: `watlow-flexible`

##### Elementary flows

###### Isopropanol, to air (`ipa_air`)

Only species-specific measured release or a fully closed solvent fate balance; captured solvent is not destroyed solvent.

- Selected flow: Isopropanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent`
- Sources: `watlow-flexible`

###### Magnesium oxide particulate, to air (`mgo_dust`)

Only measured species-specific residual release after own capture; captured powder is not air emission.

- Selected flow: Magnesium oxide particulate, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `watlow-tubular`

### Process: Factory acceptance and dispatch (`test`)

#### Inputs

##### Product flows

###### Corrugated cardboard dispatch carton (`carton`)

Only actual dispatch packaging; exclude from accepted net product mass.

- Selected flow: Corrugated cardboard dispatch carton
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### LDPE dispatch bag (`ldpe_bag`)

Only actual specified polymer bag; exclude from accepted net mass.

- Selected flow: LDPE dispatch bag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `watlow-tubular`

###### Alternating current (`test_mvac`)

Only purchased CN 1–35 kV consumption-mix supply matching actual site voltage, period and provider; internal transformation/generation is not bought twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

#### Outputs

##### Product flows

###### Electric heating resistors, except of carbon (`finished`)

Accepted complete specified heater element at factory gate; packaging and rejected elements excluded.

- Selected flow: Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `cpc-3-notes`

### Process: Residual site utilities and treatment (`services`)

#### Inputs

##### Product flows

###### Alternating current (`services_mvac`)

Only purchased CN 1–35 kV consumption-mix supply matching actual site voltage, period and provider; internal transformation/generation is not bought twice.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Purchased low-voltage grid electricity (`lv_electricity`)

Alternative when the actual supply boundary is low voltage; supplier/geography/period-specific identity required; exclude MV import if already contained.

- Selected flow: Purchased low-voltage grid electricity
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Purchased saturated process steam (`steam`)

Only actual steam delivery at recorded pressure, temperature and dry fraction; Energy/MJ independently measured from kg and own enthalpy basis.

- Selected flow: Purchased saturated process steam
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Pipeline natural gas for own process heating (`natural_gas`)

Only own combustion; actual composition, metered quantity and own heating value, not bought heat plus embedded gas.

- Selected flow: Pipeline natural gas for own process heating
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Potable process makeup water (`makeup_water`)

Only actual fresh product-water supply to site treatment/cooling; record own provider interface.

- Selected flow: Potable process makeup water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

#### Outputs

##### Waste flows

###### Wastewater from heater manufacturing to external treatment (`wastewater`)

Actual discharge wet mass and each measured dissolved species; external treatment distinct from own treatment.

- Selected flow: Wastewater from heater manufacturing to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Metal-bearing wastewater-treatment sludge (`sludge`)

Only actual exported sludge; moisture and each Ni/Cr/Fe/Ba/Ti/Mo/W assay its own sampled values.

- Selected flow: Metal-bearing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Spent activated-carbon solvent-capture medium (`spent_carbon`)

Only actual externally transferred capture medium; embedded solvent counted in solvent fate once, not destroyed.

- Selected flow: Spent activated-carbon solvent-capture medium
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solvent`

##### Elementary flows

###### Water vapour, to air (`water_evap`)

Only actual site evaporation separately estimated/measured with stocks and moisture closure.

- Selected flow: Water vapour, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Carbon dioxide, fossil, to air (`fuel_co2`)

Only actual own combustion release with species-specific measurement or validated fuel/technology factor; fuel carbon closure alone does not establish CO or NOx.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`

###### Carbon monoxide, to air (`co`)

Only actual own combustion release with species-specific measurement or validated fuel/technology factor; fuel carbon closure alone does not establish CO or NOx.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`

###### Nitrogen dioxide, to air (`nox`)

Only actual own combustion release with species-specific measurement or validated fuel/technology factor; fuel carbon closure alone does not establish CO or NOx.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| subdivision | Prefer route/configuration subdivision and direct attributable records. Rework and rejects retain actual process and utility burden in the accepted-output cohort; do not normalize by total started or rejected mass. |  |
| shared | Allocate only measured unassigned shared residual by demonstrated causal driver, such as occupied furnace time with load/temperature evidence, calibrated machine meter or actual treatment load. Same-period assigned totals plus residual reconcile to the site ledger; disclose driver and uncertainty, no universal allocation fraction. |  |
| scrap | Internal recovered wire, powder, solvent and water are paired transfers with no avoided-production credit. Exported graded scrap and rejects retain measured composition and destination; disclose consistent recycling/provider convention, allocate genuine co-products only after physical causal subdivision is exhausted. Do not assign scrap sale value as automatic negative burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each batch and reconciled reporting period | same actual representative period; disclose outages and abnormal batches | declared site and same model/configuration cohort | accepted net mass per unit | calibration; traceable records; own assays; sampling and attribution uncertainty |
| cp_material | all | each atomic bought material or component | stock and BOM ledger | grade; supplier; incoming state; opening/closing stocks; weighed receipts/issues; internal returns; configuration; N; D | Collect dated scale/BOM/invoice records; net actual period consumption with stock change, paired returns and reject/rework use as attributable Q; q_item = Q/N for same accepted cohort then Q/D per 1 kg reference flow. Purchased part mass carries embedded materials only once. | kg | each batch and reconciled reporting period | same actual representative period; disclose outages and abnormal batches | declared site and same model/configuration cohort | attributable exchange / accepted units | calibration; traceable records; own assays; sampling and attribution uncertainty |
| cp_energy | all | each atomic utility supply and residual | meter and provider ledger | meter ID; interval; kWh/MJ; source voltage/geography; imports; generation; exports; storage; assigned/residual; steam kg; pressure; temperature; dryness; supply/return enthalpy; fuel conditions; N; D | Read calibrated site and process meters over same period. Assign process Q then only causal common residual; reconcile generation/exports/storage/loss. Steam delivered Energy/MJ independently follows mass times actual own enthalpy with shared zero for returns, gross/net convention once. Preserve gas composition/state/heating value; actual Q/N then Q/D. | MJ | each batch and reconciled reporting period | same actual representative period; disclose outages and abnormal batches | declared site and same model/configuration cohort | attributable exchange / accepted units | calibration; traceable records; own assays; sampling and attribution uncertainty |
| cp_water | all | water input, discharge and evaporation | meter, stock and moisture ledger | water meter; fresh quantity; moisture each stream; openings/closings; discharge; evaporation; reaction water; return transfer; N; D | Measure own supply/discharge and each actual stream moisture; independent water closure includes storage, evaporation and reaction production/consumption. Cancel paired internal transfers. Allocate actual Q to same cohort before Q/N and Q/D. | kg | each batch and reconciled reporting period | same actual representative period; disclose outages and abnormal batches | declared site and same model/configuration cohort | attributable exchange / accepted units | calibration; traceable records; own assays; sampling and attribution uncertainty |
| cp_waste | all | one specific exported physical waste | manifest and sampled assay | destination; wet/dry mass; species own assays; moisture; opening/closing stores; internal returns; N; D | Weigh each segregated exported waste; pair sample concentration with its own stream/date/basis, never assume product alloy assay for sludge/wastewater. Track disposal/recycling provider and stocks; Q/N then Q/D. | kg | each batch and reconciled reporting period | same actual representative period; disclose outages and abnormal batches | declared site and same model/configuration cohort | attributable exchange / accepted units | calibration; traceable records; own assays; sampling and attribution uncertainty |
| cp_solvent | assembly; services | each solvent and capture fate | solvent stock/fate ledger | chemical grade; solution mass; own assay; inventory; retained product; waste liquid; recovered output; capture medium; verified destruction; non-air residues; air measurement; N; D | Measure each own species fraction and all actual fate terms. Resolve stock/reaction/non-air residues; capture is not destruction and residual is not automatic air emission. Attribute actual Q with uncertainty then Q/N and Q/D. | kg | each batch and reconciled reporting period | same actual representative period; disclose outages and abnormal batches | declared site and same model/configuration cohort | attributable exchange / accepted units | calibration; traceable records; own assays; sampling and attribution uncertainty |
| cp_emission | all | one species to one compartment | emission measurement and reaction evidence | species; source; compartment; concentration; gas volume/state; treatment inlet/outlet; time; assay conversion; carbon stocks; uncertainty; N; D | Measure source-specific residual after treatment or verified technology/species factor with actual activity. For carbonate CO2 use actual reaction extent/assays and residual carbonate/stocks; fuel CO/NOx require independent evidence. Actual species Q/N then Q/D. | kg | each batch and reconciled reporting period | same actual representative period; disclose outages and abnormal batches | declared site and same model/configuration cohort | attributable exchange / accepted units | calibration; traceable records; own assays; sampling and attribution uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all inventory rows | Bind route, BOM, test and net mass to one actual accepted cohort; site integration does not mix configurations. | release record and cp_mass |
| completeness | all inventory rows | Record each actually present atomic exchange; applicability evidence for absent branches; no unsupported numerical range, recipe, yield, resistance, wire length or heating-service default. | route ledger; supplier and reaction records |
| acceptance | test | Record calibrated resistance measurement with actual measurement temperature and tolerance, voltage/current/power under the specified load and thermal interface, insulation resistance and dielectric test settings, dimensional checks, pass/fail and retest/rework by serial/batch. These records bind the same accepted cohort and factory test energy; do not turn nominal power or resistance into measured manufacturing consumption. | instrument calibration; actual drawing/specification; electrical test and release records |
| provider | upstream linked exchange | Verify actual supplier state, boundary, unit and technology/region/time; maintain UUID, range and provider gaps explicitly until independently resolved. | provider documentation; identity direct read |
| uncertainty | physical balances | Use each stream own assay and moisture, measured stocks, reaction terms and paired returns; investigate combined measurement/sampling/allocation uncertainty. | cp_material; cp_water; cp_solvent; cp_waste; cp_emission |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| identity | Confirm principal heating function, complete incoming/outgoing interface, same configuration and actual conductor grade. Validate every adopted flow UUID, property/unit, physical state, supply geography and contradictory comments; the generic output is an identity, not an empirical mix or heating-service performance claim. |  |
| denominator | For the same configuration and period, D is sum of calibrated accepted complete unit net masses, N is accepted count, M = D/N and Q is attributable exchange including reject/rework burden. Form q_item = Q/N before q_ref = q_item/M = Q/D. Same accepted cohort, BOM, test and weighing records govern every row; packaging/reject mass never enters D. |  |
| element_balance | For each physical material and contained element/species, independently use its own matched assay/purity, moisture basis and sampling date in feedstock, product, scrap, powder, slag if present, sludge, wastewater, releases and opening/closing stocks. Gross alloy/solution mass is not contained Ni/Cr/Fe/Ba/Ti/Mo/W/Y/Si mass. Include measured reactions, deposition and paired returns; input plus opening stock and net reaction production equals output plus closing stock and reaction consumption on the same element basis. No common assay applied to every term. |  |
| water_balance | For actual water, include fresh supply, incoming powder/solution moisture and opening stocks; compare with retained product/scrap/sludge/wastewater moisture, evaporation, discharge and closing stocks plus actual reaction generation/consumption. Pair internal recovered rinse/cooling/condensate transfers so they cancel. Resolve leaks and sampling uncertainty; water mass is distinct from wet stream gross mass. Each measured volume converts with that stream own measured density and temperature; each wet stream uses its own sampled water fraction, never gross wet mass as water. |  |
| solvent_fate | For each actual solvent, measure own species fraction in receipts, stocks, retained product, recovered output, waste liquid, capture medium and releases. Include verified chemical destruction with products separately; captured or recovered solvent is not destroyed. Residual input imbalance is not automatically air VOC: resolve non-air residues, spills, stock changes, reactions, detection limits and combined uncertainty. |  |
| energy_ledger | Reconcile same-period purchased imports plus own generation minus exports and storage increase against assigned metal/etch/ceramic/assembly/test loads plus measured common residual and documented losses. Common services contain only residual after assignments, not whole factory totals again. Negative residual requires investigation of period, units and meter uncertainty; never clip to zero. Internal generated electricity/steam is a transfer; external fuel/own generation emissions counted once. |  |
| steam_basis | Steam Energy/MJ is independent of mass/kg. Record delivered mass, own pressure/temperature/dryness and specific enthalpy; if net delivered heat uses condensate return, both supply and return enthalpies share one explicit reference zero. Calculate gross delivery from independently measured supply kg times its own MJ/kg, and net delivery subtracts independently measured return kg times its own MJ/kg at the common datum. Record gross supplied versus net heat provider convention; subtract return once for a gross provider and never deduct a second return from an already-net provider; never use boiler input fuel heat or a universal MJ/kg factor as delivered steam heat. |  |
| emissions | Match each source, measured species and receiving compartment. Carbonate reaction CO2 is separated from fossil-fuel CO2. CO/NOx cannot be derived from fuel carbon closure alone; include technology-specific evidence, own abatement and measured residuals. Record actual measured NO2 separately from total NOx reported as NO2-equivalent; an equivalent-mass total is not measured NO2 and does not establish an assumed NO/NO2 split. The nitrogen-dioxide card accepts actual NO2 only; unresolved total-NOx speciation stays an explicit measurement gap. Unknown composition or missing treatment provider blocks a claim of complete physical closure. |  |
| uncertainty | Investigate closure discrepancies against actual combined measurement, sampling, period attribution and allocation uncertainty with analytical detection limits; no universal tolerance, yield or loss fraction. Require all actual exchanges and route-negative evidence; conditional absence, zero measurement and unknown are distinct. Record unresolved UUID/range/provider/classification gaps honestly before downstream validation or publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matched element supply as input to appliance/process packages and downstream process/lifecyclemodel projections. |
| excluded_use | Heating service, appliance operation, comparative service performance or a claim of universal lifetime. |
| required_metadata | Configuration; chemistry; route and make/buy state; net mass denominator; acceptance performance; site period; classification decision; provider interface; exclusions and allocation. |
| required_quality_disclosure | Coverage, measurement and own assays; stocks/reaction/returns closure; uncertainty; missing UUID/ranges/providers; classification limits; qualitative sources are not empirical inventory. |
| update_trigger | Change to heater function, chemistry, component completion state, route, supply region, abatement, acceptance or measured cohort. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc-3-notes | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p240; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Leaf identity, hierarchy and adjacent-appliance boundary; no industrial assignment inferred. |
| watlow-tubular | handbook | Watlow Heating Solutions online original catalog, viewer p61 / printed p57, edition unspecified; https://watlow.cld.bz/Watlow-Heating-Solutions/61/ | Tubular NiCr/MgO/sheath/terminal architecture; qualitative only. |
| watlow-cartridge | handbook | Watlow original online catalog, viewer p419 / printed p415, edition unspecified; https://watlow.cld.bz/Watlow-Heating-Solutions/419/ | Conditional HT cartridge sheath, coil, insulation and lead architecture. |
| watlow-flexible | handbook | Watlow original online catalog, viewer p114 / printed p110, edition unspecified; https://watlow.cld.bz/Watlow-Heating-Solutions/114/ | Wire-wound fiberglass and etched nickel-alloy foil, polyimide/silicone conditional routes; no fixed foil grade or etchant recipe. |
| tdk-ptc | handbook | TDK Electronics, PTC Thermistors General technical information, April 2026, pp2 and4; https://www.tdk-electronics.tdk.com/download/539366/728d0d379187d1dfa0831555b8c93202/pdf-general-technical-information.pdf | PTC principal-heater versus protection/sensor distinctions; carbonate/oxide, forming, firing and contacting routes, no universal proportions. |
| kanthal-super | handbook | Kanthal, High power heating elements for furnace productivity — Kanthal Super, S-KA018-B-ENG 06.2021, p2; https://www.kanthal.com/globalassets/kanthal-global/downloads/high-power-heating-elements-for-furnace-productivity-kanthal-super_b_eng_lr.pdf | MoSi2 industrial heating body counterexample to all household coil or MgO architecture. |
| kanthal-a1 | handbook | Kanthal A-1 resistance-heating wire datasheet, updated2026-08-27 13:30; https://prodshop.kanthal.com/en/products/datasheets/material-datasheets/wire/resistance-heating-wire-and-resistance-wire/kanthal_a_1/ | Specific FeCrAl grade counterexample to all NiCr; no copied operating-temperature default. |
| molytun-elements | handbook | Molytun, Heating elements, original HTML snapshot2026-10-02; https://molytun.com/produkte/heating-elements/?lang=en | Tungsten/molybdenum/tantalum rod, strip, spiral and assembly interfaces; qualitative supplier scope only. |
| epo-silicide | literature | European Patent Office EP2921469B1, granted publication30January2019, paragraphs0027–0028; https://data.epo.org/publication-server/rest/v1.0/publication-dates/20190130/patents/EP2921469NWB1/document.pdf | One tungsten-containing silicide mixing/extrusion/debinding/firing example; binder identity and actual recipe require foreground records, patent numbers not defaults. |
