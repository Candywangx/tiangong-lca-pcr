---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cream-separators
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Cream separators

## 1. Scope and Applicability

This PCR covers manufacture of complete machines whose principal function is separation of cream from milk: manual, small electric and industrial bowl/disc equipment. Actual Janschitz manual and electric configurations counter an all-industrial stainless-skid assumption; H7C is industrial architecture evidence, not a category average. Exclude generic laboratory or mineral centrifuges, entire dairy plants, independently supplied parts and downstream milk-separation services. Record actual technology and material by delivered configuration; throughput, fat ratio and service life are not factory manufacturing factors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cream-separators |
| classification_refs | CPC 3.0 44511 |
| covered_products | Complete manual, small electric and industrial cream separators |
| excluded_products | Generic/mineral centrifuges; whole dairy plants; separate parts; milk separation service |
| representative_product | No category average; Janschitz manual/electric and H7C industrial examples kept separate |
| production_route | Actual material or bought component → evidenced make operations → assembly → acceptance → packing; alternatives separated |
| market_state | Accepted complete machine at manufacturer delivery gate with declared configuration and fill state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture deliverable cream-separation equipment |
| How much | 1 kg net mass of accepted same-configuration machines; collection per accepted finished machine |
| How well | Conform to actual drawing, sanitary contact, drive and factory acceptance specifications; no category performance presumed |
| How long or cycle | One declared manufacture/acceptance period; no assumed service lifetime |
| reference_flow_link | finished_separator |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete cream separator |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; same configuration; manual/electric; bowl/discs; material/contact state; make/buy; included motor, drive, controls, frame, sanitary modules; net mass/factory fill; acceptance; site/period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `contained_assay` | physical material and species records | Mass | kg | Use own measured assay and wet/dry basis for each species; do not apply material assays to electricity or transport services. |
| `utility_units` | utility records | Energy/volume | kWh; MJ; m3 | Retain raw meter units/conditions; convert with documented calorific value, density or enthalpy; rated power cannot substitute consumed electricity. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `factory_gate` | all processes | Collect actual manufacture to accepted manufacturer gate including scrap, rework, factory lubrication and qualification. Operation at the dairy, installation, replacement and end of life are separate downstream stages. |  |
| `make_buy` | BOM interfaces | For every bowl, disc, drive, bearing, hygienic connection, housing, skid and control item record make/buy, supplied state, actual alloy/polymer/compound and included operations. Charge either upstream finished component plus local assembly, or raw input plus actual manufacture; never both. | tetrapak-h7c-2025; janschitz-separator-architectures |
| `route_gate` | actual route | Casting, forging, heat treatment, machining, forming, welding, passivation, anodizing, coating and polymer molding activate only on actual supplier/site route evidence. Product material does not prove its fabrication route; declared optional cards are not default recipes. | jrc-smitheries-foundries-2024; jrc-fabricated-metals-2020 |
| `extensions` | actual exchanges | Anchor cards are conditional examples. Add each actual grade, chemical, gas, waste, utility and emission as its own specific exchange, including super-duplex, shaft steel, seals, belt, sensors, auxiliary box and oil if independently supplied. Missing identity is an explicit gap, never exclusion or zero. |  |
| `upstream` | external interfaces | Match provider geography, period, supply state and completed processes; add input transport and external waste treatment links. Cancel paired internal material/utility transfers without erasing their operating burdens. Incomplete upstream links prohibit an undisclosed complete cradle-to-gate claim. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied material or component with declared completed operations |
| starting_condition_role | Foreground supplier-state boundary |
| product_classification_scope | Complete cream-separation equipment; classification leaf is not fabrication evidence |
| recursive_input_rule | Bought same-category unfinished machine charged upstream once, subsequent local operations separate; paired internal transfers cancel |
| upstream_dataset_requirement | Match actual grade, formulation, state, technology, geography, period and supply interface; disclose gaps |
| disclosure | Delivered configuration, BOM, make/buy, test scope, stocks, allocation, uncertainty and exclusions |

### Make/buy and architecture matrix

| Assembly | Rule |
| --- | --- |
| Bowl and discs | Bought finished versus actual blank processing; aluminium, duplex, super-duplex and stainless grades separate; do not infer forging from material |
| Manual drive or motor | Actual configuration only; embedded lubrication/electrical controls charged once; manual machine without motor has no motor input |
| Sanitary components and housing | Container, outlets, seals, connections, cast/molded part by drawing/material declaration; generic plastic/elastomer does not establish exact compound |
| Skid and control options | Actual supplied frame, sensors, PLC, auxiliary box and service kit; verify component inclusion and exclude unsupplied options |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `casting` | Conditional housing or bowl blank casting | conditional | Only actual site casting of documented alloy; purchased die-cast housing skips upstream casting | Foreground factory records | per 1 kg reference flow |
| `forging` | Conditional shaft or bowl blank forging and heat treatment | conditional | Only a route card establishes forging or heat treatment; duplex bowl material does not prove forging | Foreground factory records | per 1 kg reference flow |
| `fabrication` | Machining, disc forming, sheet fabrication and joining | conditional | Only actual make operations on measured parts; bought finished parts bypass their manufacture | Foreground factory records | per 1 kg reference flow |
| `finishing` | Conditional cleaning, passivation, anodizing or coating | conditional | Activate each evidenced treatment separately, with its actual formulation; never presume a universal sanitary bath | Foreground factory records | per 1 kg reference flow |
| `assembly` | Drive, bowl, sanitary circuit and configuration assembly | required | All machines; manual gearing and electric motor are alternatives; sensors and skid options follow delivered BOM | Foreground factory records | per 1 kg reference flow |
| `test` | Factory acceptance and conditional wet testing | required | All release checks; only actual wet milk, water or cleaning tests contribute media; customer operation excluded | Foreground factory records | per 1 kg reference flow |
| `utilities` | Residual shared services and conditional site generation | conditional | Only unassigned same-period utility loads; site generation documented separately | Foreground factory records | per 1 kg reference flow |
| `release` | Net weighing, packing and manufacturer-gate dispatch | required | One accepted complete configuration and its shipped package | Foreground factory records | per 1 kg reference flow |

### Process: Conditional housing or bowl blank casting (`casting`)

Only actual site casting of documented alloy; purchased die-cast housing skips upstream casting。

#### Inputs

##### Product flows

###### Aluminium casting alloy charge (`al_charge`)

Only for an actual aluminium casting batch; declare alloy grade, ingot or return state and charge assay.

- Selected flow: Aluminium casting alloy charge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `janschitz-separator-architectures`

###### Purchased factory electricity (`cast_power`)

Meter actual casting consumption; voltage and grid delivery geography must match supplier.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Aluminium casting dross (`al_dross`)

Only actual removed dross; weigh wet/dry basis and assay retained aluminium independently of charge.

- Selected flow: Aluminium casting dross
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Conditional shaft or bowl blank forging and heat treatment (`forging`)

Only a route card establishes forging or heat treatment; duplex bowl material does not prove forging。

#### Inputs

##### Product flows

###### Duplex stainless steel bowl blank (`duplex_blank`)

Only the actually specified duplex grade and supply state; super-duplex requires its own distinct exchange.

- Selected flow: Duplex stainless steel bowl blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`

###### Purchased factory electricity (`forge_power`)

Only actual forging or electric heat treatment; record furnace and operation period.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-smitheries-foundries-2024`

###### Natural gas supplied to factory burner (`forge_gas`)

Only actual gas heating; retain measured volume, gas composition, conditions and calorific conversion.

- Selected flow: Natural gas supplied to factory burner
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-smitheries-foundries-2024`

#### Outputs

##### Waste flows

###### Stainless steel forging scale (`forge_scale`)

Actual scale generation; own metal and oxygen composition, not nominal blank alloy assay.

- Selected flow: Stainless steel forging scale
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Machining, disc forming, sheet fabrication and joining (`fabrication`)

Only actual make operations on measured parts; bought finished parts bypass their manufacture。

#### Inputs

##### Product flows

###### AISI 304 stainless steel sheet (`steel304_sheet`)

Only actual sheet for sanitary container, outlets or frame; retain thickness and annealed/finished supply state.

- Selected flow: AISI 304 stainless steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`

###### AISI 316 stainless steel sheet (`steel316_sheet`)

Only specified AISI316 parts; do not replace 304 or duplex by one generic steel basket.

- Selected flow: AISI 316 stainless steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`

###### Aluminium sheet for separator discs (`al_disc_sheet`)

Only actual made discs; alloy, temper, surface and disc drawing require factory records.

- Selected flow: Aluminium sheet for separator discs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `janschitz-separator-architectures`

###### Straight mineral metalworking oil (`machining_oil`)

Conditional actual straight-oil machining route; supplier formulation and additions recorded; aqueous concentrate is a separate exchange if used.

- Selected flow: Straight mineral metalworking oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-fabricated-metals-2020`

###### Argon welding shielding gas (`argon`)

Only an evidenced actual argon shielded weld; mixed gas requires separate exact identity.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### AISI 316L stainless steel welding wire (`weld_wire`)

Only the actual qualified filler and welding record; this is not a compulsory filler grade.

- Selected flow: AISI 316L stainless steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased factory electricity (`fab_power`)

Actual machining, forming and joining submeter loads including rejects and rework.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Stainless steel machining chips (`steel_chips`)

Separate by actual alloy and contamination; measured mass and own assay, retained oil separate.

- Selected flow: Stainless steel machining chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Aluminium disc fabrication scrap (`al_scrap`)

Actual measured disc offcuts or rejects; internal remelt return cancels paired transfers.

- Selected flow: Aluminium disc fabrication scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral metalworking oil (`spent_oil`)

Actual removal to treatment; separate oil, water and suspended metals by analysis.

- Selected flow: Spent mineral metalworking oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Conditional cleaning, passivation, anodizing or coating (`finishing`)

Activate each evidenced treatment separately, with its actual formulation; never presume a universal sanitary bath。

#### Inputs

##### Product flows

###### Citric acid for passivation (`citric_acid`)

Only if actual recipe confirms citric passivation; record purity and solution concentration; nitric route requires independent nitric-acid card.

- Selected flow: Citric acid for passivation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Sulfuric acid for anodizing (`sulfuric_acid`)

Only documented aluminium anodizing with this acid; no inferred bath temperature, concentration or time.

- Selected flow: Sulfuric acid for anodizing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropyl alcohol cleaning solvent (`ipa`)

Only actual solvent cleaning; neat or formulated state, purity and recovered stocks recorded.

- Selected flow: Isopropyl alcohol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent`
- Sources:

###### Epoxy powder coating (`epoxy_powder`)

Only evidenced actual non-contact coated part; formulation, cure and capture records required; no coating presumed.

- Selected flow: Epoxy powder coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Factory supplied rinse water (`finish_water`)

Actual makeup water; internal circulation is not another external purchase.

- Selected flow: Factory supplied rinse water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Purchased factory electricity (`finish_power`)

Actual finishing loads; onsite generation is separately reconciled.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Metal-bearing surface treatment sludge (`finish_sludge`)

Measured sludge moisture and each contained metal own assay; treatment destination and recovered content recorded.

- Selected flow: Metal-bearing surface treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Surface treatment wastewater to external treatment (`finish_effluent`)

Actual discharged wastewater; water mass and dissolved/suspended species independently characterized.

- Selected flow: Surface treatment wastewater to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Spent activated carbon containing isopropyl alcohol (`solvent_capture`)

Only actual capture; measure retained solvent separately from gross media mass.

- Selected flow: Spent activated carbon containing isopropyl alcohol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent`
- Sources:

##### Elementary flows

###### Isopropyl alcohol emitted to air (`ipa_air`)

Actual air release measurement or validated species balance; no total solvent loss assigned to air by default.

- Selected flow: Isopropyl alcohol emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_solvent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent`
- Sources:

### Process: Drive, bowl, sanitary circuit and configuration assembly (`assembly`)

All machines; manual gearing and electric motor are alternatives; sensors and skid options follow delivered BOM。

#### Inputs

##### Product flows

###### Finished cream separator bowl assembly (`bought_bowl`)

Purchased assembly only; exact material, disc configuration and completed supplier operations must match; do not charge embedded alloy again.

- Selected flow: Finished cream separator bowl assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`; `janschitz-separator-architectures`

###### Manual cream separator gear and crank assembly (`manual_drive`)

Only the actual manual BOM; record gearing and lubrication state rather than presume a universal worm gear.

- Selected flow: Manual cream separator gear and crank assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `janschitz-separator-architectures`

###### Electric separator drive motor (`motor`)

Only actual electric drive; voltage, motor technology, power and supplied control state required; embedded copper and steel not charged twice.

- Selected flow: Electric separator drive motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`; `janschitz-separator-architectures`

###### Separator shaft bearing cartridge (`bearing`)

Only actual supplied bearing unit and shaft interface; material and oil content from provider declaration.

- Selected flow: Separator shaft bearing cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`

###### Finished stainless steel sanitary inlet module (`sanitary_module`)

Only purchased module for actual closed-feed machine; declare grade, connections, completed finish and included valves.

- Selected flow: Finished stainless steel sanitary inlet module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`

###### EPDM sanitary seal (`epdm_seal`)

Only BOM-verified EPDM compound and contact approval; FDA-approved elastomer statement alone does not prove EPDM.

- Selected flow: EPDM sanitary seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Finished aluminium die-cast separator housing (`bought_cast_housing`)

Only actual bought die-cast housing; retain alloy, supplied finish and included machining. Its upstream casting burden is charged once, with no parallel site casting charge.

- Selected flow: Finished aluminium die-cast separator housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `janschitz-separator-architectures`

###### Polycarbonate separator housing (`pc_housing`)

Only actual polymer declaration proves polycarbonate; manufacturer generic plastic label is insufficient.

- Selected flow: Polycarbonate separator housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Separator PLC control panel (`plc`)

Only supplied control package; list included sensor/electrical interfaces and keep auxiliary box separate if excluded by provider.

- Selected flow: Separator PLC control panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`

###### Mineral lubricating oil factory fill (`lube_fill`)

Only factory-filled oil outside purchased components; record actual grade and retained shipped fill; user-filled oil excluded.

- Selected flow: Mineral lubricating oil factory fill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased factory electricity (`assembly_power`)

Actual assembly electricity including electric tools and control qualification.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

### Process: Factory acceptance and conditional wet testing (`test`)

All release checks; only actual wet milk, water or cleaning tests contribute media; customer operation excluded。

#### Inputs

##### Product flows

###### Purchased factory electricity (`test_power`)

Actual factory run testing only; nameplate power and milk throughput are not manufacturing factors.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `tetrapak-h7c-2025`

###### Factory supplied test water (`test_water`)

Only actual wet acceptance or cleaning water; startup, drain and rework included.

- Selected flow: Factory supplied test water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Whole milk for factory separation test (`test_milk`)

Only an actually performed factory milk test; supplier composition and fat assay required; ordinary customer milk processing excluded.

- Selected flow: Whole milk for factory separation test
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `tetrapak-h7c-2025`

###### Sodium hydroxide cleaning agent (`test_naoh`)

Only actual factory clean-in-place using this agent; purity and concentration measured; no assumed recipe.

- Selected flow: Sodium hydroxide cleaning agent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Purchased compressed air (`test_air`)

Only actual purchased air; pressure, reference conditions and leaks recorded; own compressor energy appears once.

- Selected flow: Purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Cream recovered from factory test (`test_cream`)

Only actual useful exported cream; record fat assay and disposition; not automatic coproduct or performance yield.

- Selected flow: Cream recovered from factory test
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

###### Discarded factory-test skim milk (`test_milk_waste`)

Only discarded skim milk; own solids and fat assays and treatment destination required.

- Selected flow: Discarded factory-test skim milk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Factory-test cleaning wastewater (`test_effluent`)

Actual effluent after test; water, residual fat, metal and cleaner species collected separately.

- Selected flow: Factory-test cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

### Process: Residual shared services and conditional site generation (`utilities`)

Only unassigned same-period utility loads; site generation documented separately。

#### Inputs

##### Product flows

###### Purchased factory electricity (`shared_power`)

Only positive evidenced residual unassigned consumption after all process loads; investigate negative residual, never clip it.

- Selected flow: Purchased factory electricity
- Flow property / unit: Energy / kWh
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased factory steam (`shared_heat`)

Only actual purchased steam; delivery enthalpy and condensate return reconciled; not added atop own boiler fuel.

- Selected flow: Purchased factory steam
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_purchased_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources:

###### Natural gas supplied to onsite generator (`gen_gas`)

Only actual site generation; distinguish fuel from imported electricity and reconcile measured generated output.

- Selected flow: Natural gas supplied to onsite generator
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`co2_air`)

Only actual fossil combustion; carbon input and every carbon-bearing output/stock required; CO and NOx require separate species evidence.

- Selected flow: Fossil carbon dioxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Net weighing, packing and manufacturer-gate dispatch (`release`)

One accepted complete configuration and its shipped package。

#### Inputs

##### Product flows

###### Corrugated cardboard transport carton (`cardboard`)

Only actual carton; excluded from accepted machine net mass.

- Selected flow: Corrugated cardboard transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wood transport pallet (`wood_pallet`)

Only actual pallet; returnable ownership and trip burden disclosed.

- Selected flow: Wood transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyethylene protective film (`pe_film`)

Only actual film; declare polymer and measured packing use.

- Selected flow: Polyethylene protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete cream separator (`finished_separator`)

Delivered net machine configuration; supplied motor or manual drive, bowl, controls, frame and factory-retained fill included as actually shipped.

- Selected flow: Accepted complete cream separator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `tetrapak-h7c-2025`; `janschitz-separator-architectures`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `product_separation` | configuration groups | Separate manual, small electric and industrial configurations before allocation. Allocate shared measured production burdens by documented causal machine time, heat demand or work orders; retain driver, total, recipient and uncertainty. Do not average across configurations. |  |
| `scrap` | external recovered material | Record actual scrap destination and retained oil/metal content. No automatic avoided virgin-metal credit; disclose any recycling model separately. Internal return is a paired transfer, not an external coproduct. |  |
| `test_products` | factory test outputs | Discarded test milk and wastewater are wastes. Useful test cream or skim milk requires measured quantity, quality, destination and causal separation before any coproduct allocation; no default sale, yield or dairy-process allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | all applicable processes | reference mass | foreground_record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each batch or interval | same declared production period | same configuration/site/process | accepted net mass per machine | Calibration, matched samples, work orders, stocks, uncertainty and acceptance evidence |
| `cp_material` | all applicable processes | measured exchange | foreground_record | batch; drawing; make/buy; grade; supplier state; gross and net issued mass; stock; accepted units; rejected units; assay | Weigh and reconcile receipts, issue/return records and BOM for same configuration and period; retain actual supplied compound and embedded scope. | kg | each batch or interval | same declared production period | same configuration/site/process | attributable material / accepted machines | Calibration, matched samples, work orders, stocks, uncertainty and acceptance evidence |
| `cp_energy` | all applicable processes | measured exchange | foreground_record | meter; interval; process loads; imports; generation; export; storage; return; conditions; accepted units; allocation driver | Integrate calibrated interval meters for the same site period; reconcile whole-site meter and submeters without overlap; preserve purchased versus generated supply and measured causal allocation. | kWh; MJ; m3 | each batch or interval | same declared production period | same configuration/site/process | attributable electricity / accepted machines | Calibration, matched samples, work orders, stocks, uncertainty and acceptance evidence |
| `cp_water` | all applicable processes | measured exchange | foreground_record | water meter; input moisture; stock; evaporation; discharge; reaction; paired returns; assay; accepted units | Measure external water and every actual moisture/output term with paired circulation records; convert volume using measured density and conditions. | kg | each batch or interval | same declared production period | same configuration/site/process | attributable water / accepted machines | Calibration, matched samples, work orders, stocks, uncertainty and acceptance evidence |
| `cp_waste` | all applicable processes | measured exchange | foreground_record | waste lot; destination; measured mass; moisture; own metal/species assay; stock; paired return; accepted units | Use calibrated weighing and representative matched sampling for each stream; keep actual treatment and recycling destinations separate. | kg | each batch or interval | same declared production period | same configuration/site/process | attributable waste / accepted machines | Calibration, matched samples, work orders, stocks, uncertainty and acceptance evidence |
| `cp_solvent` | all applicable processes | measured exchange | foreground_record | solvent identity; fresh mass; concentration; opening/closing stock; recovered; retained; captured assay; destroyed; air/non-air releases; accepted units | Measure species-resolved solvent inventory and discharge/capture samples; retain air-flow integration and destruction reaction evidence separately. | kg | each batch or interval | same declared production period | same configuration/site/process | attributable solvent / accepted machines | Calibration, matched samples, work orders, stocks, uncertainty and acceptance evidence |
| `cp_emission` | all applicable processes | measured exchange | foreground_record | species; compartment; calibrated exhaust flow; concentration; time; fossil carbon; stocks; sampling uncertainty; accepted units | Integrate actual matched concentration and exhaust flow or validated species balance; no emission-factor or air-loss default. | kg | each batch or interval | same declared production period | same configuration/site/process | attributable emission / accepted machines | Calibration, matched samples, work orders, stocks, uncertainty and acceptance evidence |
| `cp_purchased_heat` | utilities | purchased steam net delivered heat | foreground_record | delivered steam mass kg; own steam specific enthalpy MJ/kg; pressure; temperature; quality; separately measured condensate return mass kg; own return enthalpy MJ/kg; common enthalpy reference; calibrated heat meter; period; configuration; accepted count | Measure delivered steam mass and its own specific enthalpy at actual pressure, temperature and quality; subtract separately measured condensate-return mass times its own return enthalpy on the SAME enthalpy reference to obtain net delivered MJ. Alternatively use a calibrated net heat meter with return treatment recorded. Keep the same site period, accepted output and configuration; no assumed enthalpy, kg-to-MJ equivalence or simultaneous own-boiler fuel charge. | MJ | each interval | same declared production period | same configuration/site/process | attributable purchased heat / accepted machines | Calibrated mass/heat meters, state measurements, enthalpy derivation, return ledger and uncertainty |

For the same configuration/period, Q is attributable period exchange including reject and rework burdens, N is accepted count, and M is summed calibrated accepted net mass/N. Obtain q_item=Q/N, then normalize_mass gives q_ref=Q/summed accepted net mass. Weigh actual shipped components and factory-retained fill, excluding drained test media, packaging and rejected mass; never average configurations.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all records | Same configuration, period, denominator and process coverage; unknown never becomes zero | Acceptance, BOM, work orders |
| traceable_balance | physical streams | Trace mass/species assays to actual samples and stocks; combined uncertainty guides investigation | Calibration, assays, transfer ledger |
| source_limit | methodology and providers | Product leaflet proves architecture, not every factory route or provider identity; supplement actual process/recipe records | Provider interface, route cards |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | reference product and BOM | Verify one complete accepted cream-separation machine, actual configuration, calibrated net mass, delivered fill, manual/electric architecture and BOM make/buy interfaces. Exclude packaging, rejected machines and downstream milk throughput from denominator. |  |
| `physical_mass` | physical material streams | For the same configuration and period reconcile external inputs plus opening stock plus reaction addition with accepted product, rejects, scraps, slag/dross, sludge, wastewater, releases and closing stock. Pair each internal return by transfer id and quantity; no double counted recycle. |  |
| `contained_species` | contained metal and chemical species records | For each actual Al, Fe, Cr, Ni, Mo, carbon, fat or bath species, multiply each term by that term's OWN matched measured assay and wet/dry basis. Include accepted product, scrap, scale, dross, sludge, wastewater and emissions plus stocks, reaction sources/sinks and paired returns. Gross alloy mass is never contained-element mass; nominal feed alloy assay cannot stand for residue/product assay. |  |
| `water_closure` | physical water and moisture records | Reconcile supplied water and input moisture plus opening stock and reaction formation against product/fill moisture, wet scrap/sludge, liquid effluent, evaporation, reaction consumption and closing stock. Pair recirculation, rinses and condensate returns; Each wet input, product/fill, scrap, sludge, wastewater and opening/closing stock term uses its OWN measured moisture or water fraction, density where volume is converted, and matched wet/dry basis; gross wastewater is not its contained water. |  |
| `solvent_closure` | actual solvent-bearing material records | For each actual solvent reconcile fresh plus opening stock and generation against retained product, recovered external solvent, closing stock, air release, captured-media solvent, wastewater solvent and actual destruction/reaction products. Capture is transfer, not destruction; non-air residuals cannot default to air. Unexplained balance residual must not automatically be assigned to air, including unmeasured losses; investigate it using actual combined measurement, sampling, stock and allocation uncertainty. |  |
| `utilities_closure` | utility energy and service-media records | Reconcile all process loads and unassigned residual services to same-period site meters in matching units: purchased imports plus actual site generation plus opening storage/returns equal attributed loads plus exports, losses and closing storage. Allocate only unassigned residual; never add whole-factory imports atop submeters. Investigate negative residuals using period, unit and combined uncertainty; never clip. |  |
| `emission_species` | actual combustion and release species records | Fossil carbon balance does not determine CO or NOx. Keep measured NO, NO2 and NOx reported as NO2-equivalent distinct, with actual reporting convention and molecular-mass conversion; never treat an aggregate convention as an individual-species identity. Each claimed emission needs own measured species, actual compartment and sampling/flow integration; characterize wastewater species without treating external treatment as direct elementary discharge. |  |
| `closure_uncertainty` | physical balance residuals | Investigate closure residuals against actual combined scale/meter, sampling/assay, stock, reaction and allocation uncertainty and record corrective evidence. No universal tolerance, invented loss, default yield or balancing plug is permitted. Distinguish not_applicable with absence evidence, measured zero and unknown. |  |
| `provider` | external flow links | Verify exact flow type, reference property, unit, physical/chemical state and supply interface before binding any UUID; incompatible generic centrifuge, battery separator scrap or source-specific generated power cannot substitute. Resolve candidate identity and quantitative gaps before publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same-configuration machine manufacture input, downstream process/lifecyclemodel projection; declared manufacture boundary after links completed |
| excluded_use | Dairy separation service, generic centrifuge, entire plant, default lifetime or unverified category average |
| required_metadata | Configuration, net mass, architecture, grades, supply state, make/buy, tests, site/period, allocation and providers |
| required_quality_disclosure | Identity/provider gaps, route/recipe evidence, uncertainty, coverage, unknown and not_applicable |
| update_trigger | Configuration, supplier-state, route, recipe, measurement or boundary change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| tetrapak-h7c-2025 | handbook | Tetra Pak Separator H7C; footer 2025-06; https://www.tetrapak.com/content/dam/tetrapak/media-box/global/en/documents/tetra-pak-separator-h7c-pd-leaflet.pdf | Industrial architecture, contact materials and in-house acceptance; operating water/energy/GWP and nominal mass not manufacturing defaults |
| janschitz-separator-architectures | handbook | Janschitz, Milky Cream separators — Farmland; undated publisher page; https://business.janschitz-gmbh.at/en/cream-separators.html | Manual/small electric material and die-cast housing counterexample to industrial architecture; no rated capacity/mass defaults |
| jrc-smitheries-foundries-2024 | official_guidance | JRC, Smitheries and Foundries Industry BREF, 2024, doi:10.2760/4805267, section1.2.1 | Conditional forging/post-processing decomposition; does not prove any bowl is forged |
| jrc-fabricated-metals-2020 | official_guidance | JRC, Best Environmental Management Practice in Fabricated Metal Products manufacturing, 2020, doi:10.2760/894966, printed190 | Actual metalworking oil selection/formulation state; no mandatory fluid recipe or quantitative range |
