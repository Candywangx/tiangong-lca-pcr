---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dairy-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dairy machinery manufacture

## 1. Scope and Applicability

This PCR produces configuration-specific foreground data for manufacturing complete dairy machinery at the manufacturer gate. It covers dedicated cheese-making vats, curd cutting/draining/maturing/feeding and forming machinery, batch butter churns and continuous butter-working machinery, with only the modules actually delivered. It also accommodates other dedicated dairy machines where the documented engineering function establishes this category rather than a neighbouring category. Sources identify actual machine families, not a universal bill of materials or manufacturing recipe. [tetra-sh6-2024; gea-cheese-2024; gea-bue-2026; tetra-butter-handbook]

CPC 3.0 places dairy machinery in 4413 Milking and dairy machines under 441 Agricultural or forestry machinery and parts thereof. Milking machines (44131), separately supplied parts (44139), cream separators (44511), generic non-domestic cooking/heating equipment (44515), dairy products and milk-processing services are excluded. No 44512 leaf is inferred. A dairy destination alone does not convert a generic heater into dairy machinery: establish the main designed function and supplied unit, and seek classification review for dual-function assemblies. H7C milk skimming/standardisation equipment is an adjacent cream-separator counterexample, not the representative output here. [un-cpc3-2025; tetra-h7c-adjacent]

Manufacturing trials are included only from actual factory records. The machine's later dairy-production electricity, milk throughput, butter/cheese yields, cleaning cycles, maintenance and customer-site installation are outside this manufacturing dataset. Brochure operating consumption and rated capacity never substitute for measured factory consumption.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dairy-machinery |
| classification_refs | CPC 3.0: 44132 |
| covered_products | Complete dedicated dairy machinery; actual cheese-vat, curd-handling, butter-churn or continuous butter-worker configuration |
| excluded_products | Milking machines; cream separators; separately supplied parts; independently dispatched generic food heaters; dairy products; processing services |
| representative_product | The declared delivered machine model; no narrower representative fixes category identity |
| production_route | Drawing and make/buy verification; conditional sanitary fabrication and finish; module assembly; actual acceptance; dispatch |
| market_state | Accepted complete factory-gate machine with declared options, factory fill and supply exclusions |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and supply the declared complete dairy machine configuration |
| How much | 1 kg reference flow; same-configuration item records are normalized by measured net machine mass |
| How well | Passed documented mechanical, electrical, sanitary finish and functional acceptance requirements for the declared machine |
| How long or cycle | One manufacture and factory release; no assumed use lifetime or dairy service performance equivalence |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dairy machinery `2c706125-e4a7-4af1-a5c7-78ad7bce62f6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Machine function and model; accepted configuration and serial/BOM revision; batch or continuous family; sanitary material grades and finish; drive and control scope; supplied jacket, pump, vacuum, CIP and ancillary modules; factory-filled fluids; make/buy boundary; acceptance test medium and duration; site and production period; calibrated net mass; upstream provider geography and delivered state |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied sheet, tube, wire, chemicals and separately specified bought modules at receiving gate |
| starting_condition_role | foreground_start |
| product_classification_scope | Dedicated dairy-machine manufacture; classify multifunction or separately dispatched modules by actual design and supply boundary |
| recursive_input_rule | A bought complete same-category machine or module is an upstream supplied input with its own boundary; do not unfold its embodied inputs again in assembly |
| upstream_dataset_requirement | Link actual supplier-specific grade, technology, location, delivery and included operations once; unresolved providers remain explicit |
| disclosure | Declare family, site/period, supplied options, exclusions, factory test and make/buy matrix |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_gate | Include attributable upstream supplies, inbound freight, rejects/rework, manufacturing, finishing, assembly, factory acceptance, cleaning, waste treatment and packaging to factory gate. Include inbound transport as separate actual mode/load/distance rows in the concrete data package. | tetra-sh6-2024; gea-bue-2026 |
| boundary_routes | Record make, buy or not_applicable for body/jacket, shaft/knife/paddle/auger, vat/curd conveyor, texturizer, drive, pump, seal, PLC and supplied ancillary system; a bought complete unit replaces its embedded material and fabrication entries. Supplier casting/forging and heat treatment stay in upstream boundary unless genuinely performed here, when add actual separate process records. Other actual alloys, polymers, coatings, fuels and chemicals require one species/grade-specific card each; the listed alternatives are not a mandatory recipe. | tetra-sh6-2024; gea-cheese-2024; gea-bue-2026 |
| boundary_use | Keep milk-to-cheese/butter processing as machine function only; actual test media are burden-bearing test inputs, never a dairy product reference output. A functionally combined stretcher has a specific working mechanism; a separate generic heater is not automatically included. | un-cpc3-2025; gea-cheese-2024 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Fabrication of sanitary bodies and working members | conditional | When machining, forming, welding or polishing is performed by this manufacturer | foreground | per 1 kg reference flow; collected per one accepted finished machine |
| surface | Surface finishing and passivation | conditional | Only the actual food-contact finish or external finish route | foreground | per 1 kg reference flow; collected per one accepted finished machine |
| assembly | Configuration-specific assembly | required | Every complete machine; bought modules remain distinct from manufactured parts | foreground | per 1 kg reference flow; collected per one accepted finished machine |
| test | Factory acceptance and cleaning | required | Actual factory test and release record; wet test only when actually performed | foreground | per 1 kg reference flow; collected per one accepted finished machine |
| dispatch | Packing and manufacturer-gate release | required | Accepted declared configuration at dispatch | foreground | per 1 kg reference flow; collected per one accepted finished machine |
| services | Unassigned shared factory services | conditional | Only measured residual not assigned to preceding processes | foreground | per 1 kg reference flow; collected per one accepted finished machine |

### Process: Fabrication of sanitary bodies and working members (`fabrication`)

#### Inputs

##### Product flows

###### AISI 304 stainless steel sheet (`ss304_sheet`)

For the identified shell or frame drawing specifying this grade.

- Selected flow: AISI 304 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### AISI 316L stainless steel sheet (`ss316l_sheet`)

Only drawings specifying this food-contact grade; no substitution for 304.

- Selected flow: AISI 316L stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### AISI 304 sanitary stainless steel tube (`ss304_tube`)

Actual BOM or route only.

- Selected flow: AISI 304 sanitary stainless steel tube
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### ER316L stainless steel welding wire (`er316l_wire`)

Actual compatible weld procedure only.

- Selected flow: ER316L stainless steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Argon shielding gas (`argon`)

Shielded welding actually performed; pressure and temperature conversion required.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

###### Mineral-oil machining lubricant (`cutting_oil`)

Only actual SDS-defined machining lubricant; aqueous emulsion water and additives are separate.

- Selected flow: Mineral-oil machining lubricant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Purchased factory electricity at low voltage (`fab_electricity`)

Measured attributable fabrication electricity only.

- Selected flow: Purchased factory electricity at low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources:

#### Outputs

##### Waste flows

###### Segregated stainless steel machining scrap (`ss_scrap`)

Actual BOM or route only.

- Selected flow: Segregated stainless steel machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral-oil machining lubricant (`spent_oil`)

Actual BOM or route only.

- Selected flow: Spent mineral-oil machining lubricant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Surface finishing and passivation (`surface`)

#### Inputs

##### Product flows

###### Supplied process water (`surface_water`)

Actual wash, rinse and bath make-up; recycled internal transfers cancel.

- Selected flow: Supplied process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

###### Citric acid for stainless steel passivation (`citric`)

Actual citric route only; not a default recipe.

- Selected flow: Citric acid for stainless steel passivation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Nitric acid for stainless steel passivation (`nitric`)

Actual nitric route only; distinguish concentration and received solution from contained HNO3.

- Selected flow: Nitric acid for stainless steel passivation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Isopropyl alcohol cleaning solvent (`ipa`)

Actual solvent cleaning record only; physical anti-sticking treatment does not establish solvent use.

- Selected flow: Isopropyl alcohol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `gea-cheese-2024`

#### Outputs

##### Waste flows

###### Metal-bearing passivation wastewater (`surface_effluent`)

Actual BOM or route only.

- Selected flow: Metal-bearing passivation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Wet metal-hydroxide treatment sludge (`surface_sludge`)

Actual on-site treatment precipitate only.

- Selected flow: Wet metal-hydroxide treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent activated carbon from isopropanol capture (`solvent_media`)

Actual capture installation only; retained solvent mass measured separately.

- Selected flow: Spent activated carbon from isopropanol capture
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Isopropyl alcohol emitted to air (`ipa_air`)

Actual stack and fugitive release measurement; never unexplained balance residual.

- Selected flow: Isopropyl alcohol emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Chromium emitted to fresh water (`chromium_water`)

Actual final discharge to fresh water with own dissolved/particulate and Cr(III), Cr(VI) or total-Cr-as-element reporting method. Total elemental Cr is not whole-species mass or a pure Cr(VI) identity; stainless steel/passivation never implies Cr(VI). Wastewater sent to treatment is waste instead.

- Selected flow: Chromium emitted to fresh water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

### Process: Configuration-specific assembly (`assembly`)

#### Inputs

##### Product flows

###### Three-phase AC electric motor (`motor`)

Actual declared motor specification and rated configuration.

- Selected flow: Three-phase AC electric motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Purchased geared drive assembly (`gearbox`)

Bought complete drive only; do not also count its embodied steel, motor or gear oil.

- Selected flow: Purchased geared drive assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Programmable logic controller (`plc`)

Actual supplied control system only.

- Selected flow: Programmable logic controller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Food-contact EPDM seal (`epdm`)

Actual approved EPDM seal grade only; other polymers require their own atomic row.

- Selected flow: Food-contact EPDM seal
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Mineral gear oil factory fill (`oil_fill`)

Only fill performed here and not already contained in purchased drive.

- Selected flow: Mineral gear oil factory fill
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Purchased stainless steel sanitary valve (`sanitary_valve`)

Actual delivered valve module.

- Selected flow: Purchased stainless steel sanitary valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Purchased cheese-vat cutting shaft assembly (`knife_module`)

Bought complete shaft and knife frame, replacing corresponding in-house material and fabrication burdens.

- Selected flow: Purchased cheese-vat cutting shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Purchased butter-working texturizer module (`butter_module`)

Actual bought texturizer with specified supply boundary.

- Selected flow: Purchased butter-working texturizer module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Purchased vacuum pump (`vacuum`)

Only actual supplied butter-machine vacuum option.

- Selected flow: Purchased vacuum pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Purchased sanitary heating-jacket assembly (`jacket`)

Bought jacket only, not already embodied in complete bought vat.

- Selected flow: Purchased sanitary heating-jacket assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_bom.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bom`
- Sources: `tetra-sh6-2024`; `gea-bue-2026`

###### Purchased factory electricity at low voltage (`assembly_power`)

Attributable assembly consumption.

- Selected flow: Purchased factory electricity at low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources:

### Process: Factory acceptance and cleaning (`test`)

#### Inputs

##### Product flows

###### Supplied process water (`test_water`)

Actual hydrostatic, functional wet test or cleaning only; closed-loop circulation is not repeated purchased input.

- Selected flow: Supplied process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

###### Raw cow milk for recorded factory test (`test_milk`)

Only a documented test requiring this actual medium; not a manufacturing ingredient or default factory test.

- Selected flow: Raw cow milk for recorded factory test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Sodium hydroxide cleaning agent (`caustic`)

Actual factory CIP recipe only; record received concentration and separate carrier water.

- Selected flow: Sodium hydroxide cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Purchased factory electricity at low voltage (`test_power`)

Actual test and cleaning duration submeter record; rated power is not consumption.

- Selected flow: Purchased factory electricity at low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources:

###### Purchased saturated steam at factory interface (`steam`)

Only actual purchased steam for acceptance test; same-boundary enthalpy collection required.

- Selected flow: Purchased saturated steam at factory interface
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_steam.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources:

###### Purchased compressed air at factory interface (`compressed_air`)

Only purchased supply; in-house compressor electricity is counted instead.

- Selected flow: Purchased compressed air at factory interface
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

#### Outputs

##### Waste flows

###### Factory acceptance cleaning wastewater (`test_effluent`)

Actual BOM or route only.

- Selected flow: Factory acceptance cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

### Process: Packing and manufacturer-gate release (`dispatch`)

#### Inputs

##### Product flows

###### Sawn wood transport crate (`wood_pack`)

Actual BOM or route only.

- Selected flow: Sawn wood transport crate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Polyethylene protective film (`pe_pack`)

Actual BOM or route only.

- Selected flow: Polyethylene protective film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Product flows

###### Dairy machinery (`finished`)

Actual BOM or route only.

- Selected flow: Dairy machinery `2c706125-e4a7-4af1-a5c7-78ad7bce62f6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `un-cpc3-2025`

### Process: Unassigned shared factory services (`services`)

#### Inputs

##### Product flows

###### Purchased factory electricity at low voltage (`residual_power`)

Only reconciled unassigned residual including actual compressor, lighting and treatment load; no whole-factory total added to submeters.

- Selected flow: Purchased factory electricity at low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utility.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utility`
- Sources:

###### Natural gas supplied to factory boiler (`natural_gas`)

Actual in-house boiler only; never alongside purchased steam for same steam burden.

- Selected flow: Natural gas supplied to factory boiler
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources:

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`co2_air`)

Actual boiler carbon evidence and oxidation/product/stock accounting.

- Selected flow: Fossil carbon dioxide emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Nitrogen oxides emitted to air (`nox_air`)

Actual species-resolved stack evidence. Keep NO, NO2 and NOx-as-NO2-equivalent reporting distinct with evidenced actual molecular-mass conversion; aggregate NOx is not a pure NO2 identity and cannot derive from fuel carbon.

- Selected flow: Nitrogen oxides emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources:

###### Water vapour emitted to air (`water_vapour`)

Actual evaporation in finishing, testing or factory utilities; internal condensate is paired transfer.

- Selected flow: Water vapour emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_once | Assign job-specific inputs directly; allocate shared period inputs using measured causal machine hours, weld/finish area or metered work. Preserve rejects and rework attributable to accepted production; do not remove their burden from the numerator. Distinct configurations have distinct measured denominators. |  |
| scrap_boundary | Record sold segregated scrap and actual treatment destinations separately; disclose the chosen recycling allocation model consistently with upstream suppliers. No undocumented avoided-production credit, and internal metal recirculation cancels in paired transfers. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | finished | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | Each accepted machine | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | accepted net mass per machine | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |
| cp_material | fabrication; surface; test; dispatch | material input | ledger | grade; supplier; lot; SDS concentration; delivered state; receipts; issues; returns; opening and closing stocks; attributable period Q; accepted count N | Reconcile actual weighed receipts and job issues with returns, stocks and BOM; split carrier water and identified formulation constituents without double counting solution mass. | kg | Each batch and period | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | attributable period exchange / accepted machines | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |
| cp_bom | assembly | bought module | BOM | drawing revision; make/buy; supplier boundary; delivered module mass; included motor/material/oil; N; Q | Match delivered module identifiers, weighed mass and supplier scope to acceptance BOM; include upstream burden once and only site additions separately. | kg | Each delivered lot | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | attributable period exchange / accepted machines | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |
| cp_utility | fabrication; assembly; test; services | electricity | meter | period and units; imports; on-site generation; exports; opening/closing storage; assigned fabrication/assembly/test/dispatch meters; residual; causal driver; Q; N | Use synchronized calibrated site meters and submeters; calculate shared service residual after already assigned consumption, with measured causal allocation. Reconcile source-specific imports, generation, exports and storage; investigate negative residual using actual combined measurement uncertainty, never clip to zero. | kWh | Each meter interval | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | attributable period exchange / accepted machines | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |
| cp_steam | test | purchased steam | meter | delivered kg; own delivered enthalpy MJ/kg; delivered pressure temperature quality; independently measured return kg; own return enthalpy MJ/kg; return pressure temperature; time/boundary; Q; N | Meter delivered steam and returned condensate separately at the same supplier interface. Obtain each term's own enthalpy from its measured state and traceable thermodynamic method using the same common enthalpy reference datum. Q in MJ = delivered kg times own delivered MJ/kg minus independently measured return kg times own return MJ/kg; no assumed enthalpy or unmeasured equal return mass. In-house steam uses actual boiler fuel and auxiliaries instead of a purchased-steam upstream burden. | MJ | Each recorded test | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | attributable period exchange / accepted machines | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |
| cp_gas | fabrication; test; services | gas input | meter | identified gas; composition; supplied property; calibrated quantity; pressure; temperature; reference volume state; density; boundary; Q; N | Convert gas volume to mass only using its own documented state-specific density; compressed-air reference conditions must match provider; no rated consumption substitutes for measured amount. | kg; m3 | Each batch and meter interval | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | attributable period exchange / accepted machines | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |
| cp_water | surface; test; services | water balance | meter | supply; moisture of each input; return transfers; opening/closing bath and tank stocks; water in product/scrap/sludge/wastewater; evaporation; reaction water; actual destination; Q; N | Meter make-up separately from internal circulation; convert liquid volumes using own temperature/density and every wet material using its own moisture measurement. Cancel paired internal transfers and reconcile all terms at the actual site-period boundary. | kg | Each batch and period | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | attributable period exchange / accepted machines | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |
| cp_waste | fabrication; surface; test | waste | weighing and assay | separate stream; wet/dry mass; own moisture and species assay; recovered solvent; capture media loading; treatment/transfer destination; stocks; Q; N | Weigh each waste shipment and retained stock; sample the actual matrix. Resolve contained Fe, Cr, Ni or identified solvent using each stream's own matched assay and wet/dry basis, not feed composition. Record actual completed treatment boundary and do not count an off-site treatment release as direct factory emission. | kg | Each batch/shipment | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | attributable period exchange / accepted machines | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |
| cp_species | surface; services | species release | sampling | species and chemical form; compartment; stack/fugitive/discharge volume; own concentration; wet/dry and reference conditions; capture; destruction evidence; stock; uncertainty; Q; N | Use species-specific sampled releases or validated actual formulation balance at matching boundary. Capture into media is retention, not destruction; destruction needs actual performance evidence. Unexplained solvent residual is unresolved, not air. Carbon balance cannot establish CO or NOx. Separate CO2, CO, each NOx convention and each actual released metal form in the concrete dataset. | kg | Each relevant test and period | Same attributable production period and accepted configuration | Manufacturer site and actual supplier interface | attributable period exchange / accepted machines | Calibration; lot/SDS/BOM; acceptance; sampling and uncertainty records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| period_basis | physical production records | For each configuration collect attributable period exchange Q including rejects/rework, accepted count N and sum of calibrated accepted net masses. Define M as this sum divided by N; derive item amount as Q/N and reference amount as Q divided by that same mass sum. No mixed-configuration average; reject, package and drained test-medium mass never enter denominator. Protocol aggregation per reference flow retains these raw-period fields. | cp_mass; cp_material; cp_bom |
| own_assay | physical material and species records | For each contained Fe, Cr, Ni or other actual species, use EACH term's own matched assay and wet/dry basis for inputs, product, scrap, slag if present, sludge, wastewater, releases and stocks. Include measured reaction generation/consumption and cancel internal paired transfers; gross alloy mass is never contained-element mass. This rule does not impose composition assays on electricity or freight. | cp_material; cp_waste; cp_species |
| closure_uncertainty | material, water, solvent and utility balances | Include opening stock plus inputs and measured reaction generation; reconcile product, each waste/release/return/export, closing stocks and reaction consumption. Water includes each input moisture, product/waste moisture, evaporation and wastewater; solvent includes retained product, recovered solvent, capture-media loading, independently evidenced destruction and all non-air destinations. Investigate closure against actual combined weighing, metering, sampling and allocation uncertainty, never universal tolerance or invented yield. | cp_water; cp_waste; cp_species; cp_utility |
| route_state | all conditional records | Maintain applicability ledger: measured zero, documented not_applicable and unknown are different. Conditional actual species or grades absent from this candidate need an additional atomic card and matching provider identity; unresolved UUID or provider prevents final dataset use, not unsupported forced route exclusion. | BOM; route sheets; supplier boundary |
| sanitary_scope | supplied configuration and factory acceptance | Retain actual food-contact grade, surface roughness/finish specification, weld and passivation procedure, seal approval and acceptance record. Brochure physical anti-sticking treatment is a counterexample to mandatory PTFE coating; select actual finish, not a generic coating assumption. Separate closed-loop service circulation from imported make-up. | tetra-sh6-2024; gea-cheese-2024 |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_identity | Require actual designed dairy function, complete supplied machine, declared modules, current accepted BOM and correct factory-gate reference; reject adjacent cream separator, generic heater, dairy product and service substitutions. | un-cpc3-2025 |
| validate_mass | Require calibrated accepted net mass and configuration/period correspondence for Q, N and mass sum; audit every conversion and retain rejects/rework in numerator. |  |
| validate_balances | Enforce own_assay and closure_uncertainty for every actual physical material/species, water, solvent and stock balance. Investigate missing destinations and negative utility residuals using actual combined uncertainty; unresolved closure cannot be reported as zero or an inferred air emission. |  |
| validate_upstream | Check each make/buy substitution, actual provider boundary and utility source; eliminate embedded material/module duplicates, purchased steam/in-house boiler duplicates and total-meter/submeter duplicates. Steam delivered and returned terms have independent mass and own enthalpy at identical interface. |  |
| validate_test | Only actual factory test milk, water, cleaner and utilities are included; reject nameplate power, customer throughput and operating consumption as manufacturing defaults. Report each applicability, missing identity, missing factor and completeness honestly. | tetra-sh6-2024; gea-bue-2026 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual same-configuration machine manufacture datasets and downstream process/lifecyclemodel projections with declared supply boundary |
| excluded_use | Dairy-product production; milk-processing service; use-phase comparative performance; unresolved category substitution |
| required_metadata | All reference qualifiers, route applicability, make/buy matrix, measured period denominators and provider links |
| required_quality_disclosure | Unresolved UUIDs and providers; missing empirical ranges; route evidence; actual balance uncertainty and allocation; limitations of brochure evidence |
| update_trigger | Design, BOM, sanitary finish, supplier, module scope, site/period, test recipe or utility source changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Pages 230 and 236: actual dairy, milking, parts and cream-separator/thermal neighbouring classification; no manufacturing quantities |
| tetra-sh6-2024 | literature | Tetra Pak Cheese Vat OST SH6, footer 2024-03; https://www.tetrapak.com/content/dam/tetrapak/media-box/global/en/processing/technology-area-cheese/curdmaking/documents/tetra-pak-cheese-vat-OST%20SH6.pdf | Pages 1–3: functional vat, jacket, shaft/knife, drive, controls, sanitary connections and optional modules; closed heating-water loop footnote. Brochure net/gross weight and operational consumption not defaults |
| gea-cheese-2024 | literature | GEA CHEESE MAKING EQUIPMENT, EN 02/2024, published 29/02/2024; https://www.gea.com/assets/gea-cheese-making-equipment-digital-brochure-308361.pdf | Pages 4–16: actual curd-machine and forming families, supplied working members, dedicated stretcher versus generic heater boundary and physical anti-sticking counterexample |
| gea-bue-2026 | literature | GEA Butter Making Machine BUE, publisher page snapshot 2026-10-02; https://www.gea.com/en/products/centrifuges-separation/buttermaking/buttermaking-continuous-butter-bue/ | Continuous butter-worker housing, drive, oil, seals and actual optional modules; operating recipe/capacity does not establish factory-test medium |
| tetra-butter-handbook | handbook | Tetra Pak Dairy Processing Handbook, Butter chapter, publisher snapshot 2026-10-02; https://dairyprocessinghandbook.tetrapak.com/chapter/butter | Batch churn and continuous butter-machine alternatives, their working members and function; no machine manufacturing quantities |
| tetra-h7c-adjacent | literature | Tetra Pak Separator H7C, PD leaflet June 2025; https://www.tetrapak.com/content/dam/tetrapak/media-box/global/en/documents/tetra-pak-separator-h7c-pd-leaflet.pdf | Adjacent milk-skimming/standardisation counterexample only; its stainless grades, machine weight and consumption do not define 44132 |
