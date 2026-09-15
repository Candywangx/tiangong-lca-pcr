---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bees

## 1. Scope and Applicability

This PCR guides foreground data package construction for live bees transferred as live animals at a declared apiary, breeder, package producer, queen producer, holding, or delivery gate. It covers honey bees and other managed bee species where the product is live bees, including colonies, nucleus colonies, packages, queen bees with attendants, brood frames, or comparable live-bee units.

Excluded products are natural honey, beeswax, propolis, royal jelly, venom, pollination service, beekeeping service, honey extraction equipment, downstream crop pollination, and downstream honey or wax production unless a study explicitly expands scope and declares allocation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees` |
| classification_refs | CPC 3.0 `02196`, `Bees` |
| covered_products | live bees transferred as colonies, nucleus colonies, packages, queen bees with attendants, brood frames, or comparable live-bee units |
| excluded_products | honey; beeswax; propolis; royal jelly; bee venom; pollination service; beekeeping service; beekeeping equipment; downstream crop pollination; downstream honey or wax production |
| representative_product | live bees at declared colony or package condition and declared health status |
| production_route | colony stock entry, apiary establishment, colony management and feeding, health treatment and hive maintenance, live-bee packing and dispatch |
| market_state | live animal, unprocessed, at declared species, life stage, caste mix, package or colony unit, colony strength, health status, and transfer gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | live bees at declared transfer gate |
| How much | 1 kg live bee mass |
| How well | declared species, life stage, caste mix, colony or package unit, queen status, colony strength, health status, and live-bee mass or count conversion |
| How long or cycle | one declared colony production, split, queen production, package production, or dispatch cycle |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Bees `0be7ee1d-758e-458f-9dba-56d8c5298875` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg live bee mass |
| Required qualifiers | species; life stage; caste mix; colony, nucleus, package, queen, brood-frame, or other unit type; queen presence and status; colony strength or bee count basis; health or certification status; geography and declared gate; transport inclusion status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass live bee basis is the primary reference flow. Colony count, package count, queen count, brood-frame count, or bee-count records may be used only when a documented conversion to live bee mass is provided.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_bee_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live bee mass | The reference flow must be expressed as kg live bees at the declared transfer gate. |
| `count_to_mass_conversion` | colony, package, queen, brood-frame, or bee-count records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live bee mass | Count-based live-bee records must include measured mass or a documented conversion by unit type, bee count, or colony strength. |
| `colony_strength_basis` | colony and nucleus units | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` and Mass | frames, seams, adult bee count, brood area, or kg live bee mass | Declare the colony-strength metric used and preserve enough information to convert to the reference mass where needed. |
| `supplemental_feed_basis` | sugar syrup, candy, pollen substitute, and feed supplements | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg sugar, kg dry matter, or kg as-fed | Feed records must state concentration, dry matter, sugar content, or as-fed basis before normalization. |
| `treatment_active_ingredient_basis` | veterinary and pest-control treatments | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg active ingredient or product-specific unit | Treatment records must identify product, active ingredient where available, dose, treated colony count, and withholding or certification relevance. |
| `energy_inventory` | electricity, fuel, refrigeration, holding, and dispatch energy | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ or kWh | State whether each energy value is final electricity, fuel lower heating value, refrigeration energy, or transport service energy. |

## 5. System Boundary

The default boundary is foreground data collection to the declared live-bee transfer gate:

1. Live bee stock, queen stock, nucleus or package inputs, hive consumables, feed, water, medicines, pest-control products, packaging, cages, fuel, electricity, and purchased services when they are part of the foreground data package.
2. Apiary establishment and colony management: splits, queen rearing, feeding, inspections, hive maintenance, moving colonies inside the foreground system, and swarm or loss management.
3. Bee health and pest control: monitoring, sampling, treatments, certification checks, and recordkeeping for diseases and pests where material.
4. Live-bee packing, caging, holding, ventilation, temperature control, dispatch, and delivery when included in the declared gate.

Honey extraction, wax rendering, pollination service delivered to crops, and downstream crop production are outside the default boundary. Hive boxes and durable equipment are included only when the declared data package scope includes capital goods or when replacement materials cross the foreground boundary as consumables.

This boundary is a data-production abstraction. Declared parent colonies, purchased queens, packages, or nucleus colonies are starting-condition records. Same-category live-bee inputs are not recursively traced as a new live-bee PCR inside the same package; their identity, unit type, mass or count conversion, source, and prior-burden treatment are disclosed.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | parent_colony_or_live_bee_stock_entry |
| starting_condition_role | live_bee_identity_and_reproduction_condition |
| product_classification_scope | current CPC 3.0 product category `02196`, `Bees` |
| recursive_input_rule | input flow in the same product category that causes recursive tracing is recorded as declared starting condition or purchased live-bee stock entry, with prior-burden treatment disclosed |
| upstream_dataset_requirement | disclose source, unit type, species, life stage, caste mix, queen status, health status, mass or count conversion, acquisition date, and whether upstream live-bee burdens are included, excluded, or represented by secondary data |
| disclosure | record apiary or breeder boundary, production route, colony-strength basis, live-bee mass conversion, health or certification status, feed basis, treatment regime, mortality or escape fate, package or cage state, and declared gate |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| live_bee_stock_entry | Live Bee Stock Entry | required |  | foreground | live bee stock entering the foreground system |
| colony_management_and_feeding | Colony Management and Feeding | required |  | foreground | maintained colony, nucleus, package, queen, or brood unit |
| health_treatment_and_hive_maintenance | Health Treatment and Hive Maintenance | required |  | foreground | treated and maintained live-bee unit |
| live_bee_packing_and_dispatch | Live Bee Packing and Dispatch | conditional | include when the declared gate includes caging, package assembly, holding, loading, or delivery | foreground/downstream | live bees transferred at declared gate |

### Process: Live Bee Stock Entry (`live_bee_stock_entry`)

#### Inputs

##### Product flows

###### Parent colony or purchased live bee stock (`parent_colony_or_purchased_live_bee_stock`)

Parent colonies, purchased queens, packages, nucleus colonies, brood frames, or comparable live-bee stock are recorded as the live-bee starting condition.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured live bee mass or documented count-to-mass conversion by unit type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per live-bee stock entry lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_stock_entry_records`
- Sources: `fao-good-beekeeping-2019`, `woah-bee-diseases`
- Range: Provisional live-bee stock entry screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg live bee input/kg live bee output
  - Basis: broad first-pass live-bee stock mass entering the foreground system
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hive consumables for stock entry (`hive_consumables_for_stock_entry`)

Frames, comb foundation, cages, feed cans, screens, and short-life hive consumables are recorded when they cross the foreground boundary for live-bee production.

- Selected flow: Select applicable hive, cage, frame, wax foundation, or packaging material flow
- Flow property / unit: Mass or number of items / kg or item
- Amount rule: measured material mass or item count, with unit mass where count-based
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per live-bee stock entry lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Range: Provisional hive consumable screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg material/kg live bee output
  - Basis: broad first-pass short-life hive, cage, frame, or package material input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required for stock entry. Include recovered comb, used cages, or other recovered materials only when they cross the foreground boundary as inputs.

##### Elementary flows

No elementary input is normally required beyond land or site occupation when the declared data package includes apiary land occupation.

#### Outputs

##### Product flows

###### Accepted live bee stock for management (`accepted_live_bee_stock_for_management`)

Accepted live bee stock is the live-bee output entering colony management and feeding.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: accepted live bee mass or count-to-mass conversion after stock-entry inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: stock entry process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_stock_entry_records`
- Range: Accepted live-bee stock identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg stock entry process output
  - Basis: accepted live-bee stock process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejected or dead bees at stock entry (`rejected_or_dead_bees_at_stock_entry`)

Dead bees, rejected queens, failed packages, or condemned stock are recorded with mass or count conversion and fate.

- Selected flow: Select applicable bee mortality, biological waste, or rejected live-animal flow
- Flow property / unit: Mass / kg
- Amount rule: measured or estimated live bee mass and disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per live-bee stock entry lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_escape_and_reject_records`
- Sources: `fao-good-beekeeping-2019`
- Range: Provisional stock-entry reject screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg live bee stock entry
  - Basis: broad first-pass rejected or dead bee mass at stock entry
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Record direct site emissions only when site-specific records show material emissions from stock entry operations.

### Process: Colony Management and Feeding (`colony_management_and_feeding`)

#### Inputs

##### Product flows

###### Live bee stock under management (`live_bee_stock_under_management`)

Live bee stock under management is the accepted stock maintained, split, requeened, or grown for transfer.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or documented count-to-mass conversion by colony, package, queen, nucleus, or brood unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed live-bee unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_colony_management_records`
- Range: Managed live-bee stock reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg managed live bee/kg live bee output
  - Basis: broad first-pass live-bee mass retained, split, or prepared for sale
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplemental sugar feed (`supplemental_sugar_feed`)

Sugar syrup, candy, fondant, dry sugar, and similar supplemental carbohydrate feeds are recorded by product mass and sugar concentration.

- Selected flow: Glucose `7c6f0597-0a8b-4677-abca-a5f59b1c012c`; sugar syrup or feed selected from site records
- Flow property / unit: Mass / kg sugar, kg dry matter, or kg as-fed
- Amount rule: measured feed issue and concentration or dry matter basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed colony, package, queen-production batch, or kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_water_records`
- Sources: `fao-good-beekeeping-2019`
- Range: Provisional supplemental sugar feed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg sugar/kg live bee output
  - Basis: broad first-pass supplemental sugar feed assigned to live-bee production
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Protein feed and supplements (`protein_feed_and_supplements`)

Pollen substitute, pollen patties, protein supplements, and mineral or vitamin supplements are recorded when used.

- Selected flow: Prepared fermentable feed `b25e209d-4bef-4a2f-8fad-46e4d7de3d76`
- Flow property / unit: Mass / kg as-fed and kg dry matter where available
- Amount rule: measured feed issue and declared composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per managed colony, batch, or kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_water_records`
- Range: Provisional protein supplement screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg feed/kg live bee output
  - Basis: broad first-pass protein supplement assigned to live-bee production
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water for feeding and handling (`water_for_feeding_and_handling`)

Water used to mix feed, maintain bees, clean equipment, or support holding is recorded by source and use.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg, L, or m3
- Amount rule: measured water use or calculated water content of prepared feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed colony, batch, or kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_water_records`
- Range: Provisional water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg live bee output
  - Basis: broad first-pass water used for feed mixing, handling, and holding
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Apiary energy and movement fuel (`apiary_energy_and_movement_fuel`)

Electricity and fuel used for apiary visits, lifting, feeding, ventilation, short-distance movement, refrigeration, and holding are recorded by carrier.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- Flow property / unit: Net calorific value / MJ or kWh
- Amount rule: measured meter, fuel invoice, equipment log, or route allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed colony, batch, route, or kg live-bee output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_movement_records`
- Range: Provisional apiary energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg live bee output
  - Basis: broad first-pass energy and movement fuel assigned to live-bee production
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required for colony management. Include recovered feed, used packaging, or other recovered materials only when they cross the foreground boundary as inputs.

##### Elementary flows

###### Water withdrawal for live bee management (`water_withdrawal_for_live_bee_management`)

Water withdrawal is calculated from feed-mixing, cleaning, and holding water records when elementary water flows are reported.

- Selected flow: water `419682fe-60fb-4b43-be89-bf2824b51104`
- Flow property / unit: Mass / kg
- Amount rule: calculated from water source and quantity records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_and_water_records`
- Range: Provisional water withdrawal screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg water/kg live bee output
  - Basis: broad first-pass water withdrawal for live-bee management
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Managed live bee unit (`managed_live_bee_unit`)

Managed live bee unit is the colony, nucleus, package, queen batch, or brood unit prepared for health treatment, maintenance, or dispatch.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or documented count-to-mass conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: colony management process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_colony_management_records`
- Range: Managed live-bee output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg colony management process output
  - Basis: managed live-bee process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Dead bees, failed queens, and swarm loss (`dead_bees_failed_queens_and_swarm_loss`)

Dead bees, failed queens, non-marketable colonies, swarm losses, and escape losses are recorded with mass or count conversion and fate.

- Selected flow: Select applicable bee mortality, biological waste, escaped live-animal, or rejected live-bee flow
- Flow property / unit: Mass / kg
- Amount rule: measured or estimated live bee mass by event and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per managed colony, batch, or kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_escape_and_reject_records`
- Sources: `fao-good-beekeeping-2019`, `woah-bee-diseases`
- Range: Provisional mortality and swarm-loss screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg live bee output
  - Basis: broad first-pass dead bees, failed queens, non-marketable stock, and swarm loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from apiary energy (`fossil_carbon_dioxide_from_apiary_energy`)

Fossil carbon dioxide from apiary energy is calculated from fuel and electricity records with declared emission factors.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: energy quantity multiplied by declared fuel or electricity emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per fuel inventory
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_movement_records`
- Range: Provisional apiary energy fossil CO2 screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg CO2/kg live bee output
  - Basis: broad first-pass fossil CO2 from apiary energy and movement fuel
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Health Treatment and Hive Maintenance (`health_treatment_and_hive_maintenance`)

#### Inputs

##### Product flows

###### Veterinary and pest-control treatments (`veterinary_and_pest_control_treatments`)

Bee medicines, varroa or pest treatments, disinfectants, sanitation chemicals, and other health inputs are recorded when applied or material to certification.

- Selected flow: Veterinary Chemical Drug Raw Materials `b2891b2b-41b0-46b5-bf2f-e5726c977d74`; Cypermethrin `7fcf6100-764e-41ca-af06-056495e2b8c4` only when specifically used
- Flow property / unit: Mass or product-specific unit / kg active ingredient, kg product, dose, or item
- Amount rule: measured product amount, active ingredient where available, treated colony count, date, and treatment purpose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per treated colony, batch, or kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_and_health_records`
- Sources: `fao-good-beekeeping-2019`, `woah-varroosis-code`
- Range: Provisional treatment input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg product/kg live bee output
  - Basis: broad first-pass bee health and pest-control product input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hive repair and maintenance materials (`hive_repair_and_maintenance_materials`)

Replacement frames, comb foundation, cages, screens, fasteners, paint, cleaning materials, and other short-life materials are recorded when used.

- Selected flow: Select applicable hive repair, frame, wax foundation, cage, screen, or maintenance material flow
- Flow property / unit: Mass or number of items / kg or item
- Amount rule: measured material mass or item count, with unit mass where count-based
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per maintained colony, batch, or kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Range: Provisional maintenance material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg material/kg live bee output
  - Basis: broad first-pass hive maintenance and short-life material input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required for health treatment and hive maintenance.

##### Elementary flows

Include direct emissions from treatment application only when the declared method, product label, or site record supports an emission flow.

#### Outputs

##### Product flows

###### Healthy live bee unit for dispatch (`healthy_live_bee_unit_for_dispatch`)

Healthy live bee unit for dispatch is the treated or inspected live-bee product output.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or documented count-to-mass conversion after inspection or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: health treatment process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_inspection_and_certification_records`
- Range: Healthy live-bee output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg health treatment process output
  - Basis: treated or inspected live-bee process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Treatment residues and condemned bee material (`treatment_residues_and_condemned_bee_material`)

Treatment packaging, contaminated comb, condemned bees, diseased colonies, and rejected hive materials are recorded with mass and fate.

- Selected flow: Select applicable treatment residue, biological waste, contaminated comb, or rejected hive material flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue or condemned material mass and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treated colony, batch, or kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_residue_and_waste_records`
- Sources: `fao-good-beekeeping-2019`, `woah-bee-diseases`
- Range: Provisional treatment residue screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue/kg live bee output
  - Basis: broad first-pass treatment residue, condemned bee material, or contaminated comb
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Declare product-specific direct emissions only when a treatment method, measurement record, or reviewed emission factor supports the flow.

### Process: Live Bee Packing and Dispatch (`live_bee_packing_and_dispatch`)

#### Inputs

##### Product flows

###### Live bee unit entering pack-out (`live_bee_unit_entering_pack_out`)

Live bees entering pack-out are recorded when caging, package assembly, queen shipment, holding, loading, or delivery is inside the declared gate.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or count-to-mass conversion entering pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: pack-out input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_packing_dispatch_records`
- Range: Pack-out live-bee input reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.5
  - Unit: kg/kg dispatched live bee output
  - Basis: live-bee mass entering pack-out relative to dispatched output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live bee packaging and holding materials (`live_bee_packaging_and_holding_materials`)

Cages, package boxes, screens, cans, queen cages, labels, feed for transit, absorbents, and other dispatch materials are recorded by item count and mass where available.

- Selected flow: Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; specific cage or package material selected from site records
- Flow property / unit: Mass or number of items / kg or item
- Amount rule: measured item count, material mass, and unit capacity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per package, queen shipment, colony shipment, or kg live-bee output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hive_material_and_packaging_records`
- Range: Provisional live-bee packaging screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg packaging/kg live bee output
  - Basis: broad first-pass cage, package, and transit material input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dispatch energy and transport service (`dispatch_energy_and_transport_service`)

Electricity, ventilation, cooling, fuel, and route-specific transport service are recorded when included in the declared gate.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; electricity or transport service selected from route records
- Flow property / unit: Net calorific value or transport service / MJ, kWh, or tonne-km
- Amount rule: measured fuel, electricity, carrier invoice, route distance, or tonne-km
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per dispatched kg live bee mass
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_energy_and_transport_records`
- Range: Provisional dispatch energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg dispatched live bee mass
  - Basis: broad first-pass holding, ventilation, cooling, and route energy
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is normally required.

##### Elementary flows

Include direct combustion emissions from dispatch only when fuel is combusted inside the foreground system.

#### Outputs

##### Product flows

###### Declared transferred live bees (`declared_transferred_live_bees`)

Declared transferred live bees are the reference product output at the declared gate.

- Selected flow: Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- Flow property / unit: Mass / kg live bee mass
- Amount rule: measured mass or documented count-to-mass conversion at declared transfer gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: PCR reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_bee_packing_dispatch_records`
- Range: Live-bee reference output identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg PCR reference output
  - Basis: live-bee reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Dispatch mortalities and returned packaging (`dispatch_mortalities_and_returned_packaging`)

Dead bees during holding or dispatch, failed shipments, returned cages, feed cans, and packaging waste are recorded with mass and fate.

- Selected flow: Select applicable bee mortality, biological waste, packaging waste, or returned package material flow
- Flow property / unit: Mass / kg
- Amount rule: measured or estimated dead bee mass, package material mass, and disposal or reuse route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per dispatched kg live bee mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_mortality_and_packaging_waste_records`
- Range: Provisional dispatch mortality and packaging waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg waste/kg dispatched live bee mass
  - Basis: broad first-pass dispatch mortality and package waste
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from dispatch energy (`fossil_carbon_dioxide_from_dispatch_energy`)

Fossil carbon dioxide from dispatch energy is calculated from fuel and energy records.

- Selected flow: carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: dispatch fuel or energy quantity multiplied by declared emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per dispatch energy inventory
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_energy_and_transport_records`
- Range: Provisional dispatch fossil CO2 screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg CO2/kg dispatched live bee mass
  - Basis: broad first-pass fossil CO2 from dispatch energy and route fuel
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

No allocation is required when the only product output is transferred live bees and dead bees or packaging residues are treated as wastes with declared treatment. If honey, wax, propolis, royal jelly, venom, pollination service, queen breeding service, hive products, or another co-product is credited inside the foreground boundary, allocation must be declared before publication.

Preferred hierarchy:

1. Subdivide processes when records separate live-bee production from honey extraction, wax rendering, pollination service, or other co-product routes.
2. Use physical allocation only when a causal physical relationship is documented, such as mass for hive product streams or colony-use time for pollination service.
3. Use economic allocation when physical allocation is not defensible and market values are available.
4. Report system expansion or substitution only as an additional scenario, with substituted product, geography, and avoided-burden dataset disclosed.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_live_bee_stock_entry_records | live_bee_stock_entry | parent colony or purchased live bee stock | purchase, split, queen, package, nucleus, brood-frame, or receiving record | source; species; unit type; queen status; life stage; caste mix; colony strength; bee count or mass; health status; acquisition date; upstream burden treatment | receiving record, breeder certificate, health certificate, scale record, colony inspection, or count-to-mass conversion | kg live bee mass, colony, nucleus, package, queen, frame, or head | per stock entry or batch | production cycle | apiary, breeder, or stock-entry lot | convert unit records to live bee mass and reconcile accepted, rejected, dead, or escaped bees | scale record, receiving record, health certificate, inspection record |
| cp_live_bee_colony_management_records | colony_management_and_feeding | managed live bee stock | colony inspection, split, queen rearing, package production, or apiary management record | colony id; unit type; queen status; brood stage; adult bee estimate; frame or seam count; date; management action | apiary log, inspection record, production batch record, or breeder log | colony, frame, seam, head, or kg live bee mass | inspection, batch, week, month, or production cycle | production cycle | apiary, breeder yard, queen yard, or package production unit | reconcile live-bee stock entries, splits, losses, and outputs by unit type and mass conversion | apiary log, inspection sheet, breeder record |
| cp_feed_and_water_records | colony_management_and_feeding | supplemental feed and water | feed issue, syrup preparation, water, or feeding record | feed type; sugar concentration; dry matter or as-fed basis; product mass; water quantity; treated colonies; date | feed log, invoice, syrup mixing sheet, meter, or tank record | kg, L, m3, kg dry matter, kg sugar | per feeding event, batch, or reporting period | production cycle | apiary, feed room, or production batch | convert to kg sugar or dry matter where needed and allocate by colony, batch, or live-bee output | invoice, feed log, mixing sheet, meter record |
| cp_energy_and_movement_records | colony_management_and_feeding | apiary energy and movement fuel | electricity, fuel, equipment, or movement record | carrier; quantity; route; operation; colonies served; period; allocation method | utility bill, fuel invoice, route log, equipment log, or telematics | kWh, MJ, L, kg fuel, km, or tonne-km | operation, route, month, or cycle | production cycle | apiary, route, holding room, or production site | convert to MJ or kWh and allocate to live-bee production using documented basis | invoice, meter record, fuel log, route record |
| cp_treatment_and_health_records | health_treatment_and_hive_maintenance | veterinary and pest-control treatments | treatment, pest monitoring, medicine, or certification record | product; active ingredient; dose; treated colony count; date; target pest or disease; certification relevance | treatment log, veterinary record, product label, laboratory result, health certificate, or inspection record | kg, L, dose, strip, item, or product-specific unit | per treatment or inspection event | production cycle | apiary, colony, queen yard, or package lot | sum active ingredient or product amount and normalize to treated units and live-bee output | treatment log, product label, inspection result, health certificate |
| cp_hive_material_and_packaging_records | live_bee_stock_entry; health_treatment_and_hive_maintenance; live_bee_packing_and_dispatch | hive consumables and packaging | material purchase, cage, frame, comb, package, or dispatch material record | material type; mass; item count; capacity; reuse status; batch or shipment | inventory issue record, packing log, invoice, or unit mass specification | kg or item | per batch, shipment, replacement, or reporting period | production cycle or dispatch period | apiary, shop, packing room, or shipment | sum material mass and item count; allocate reusable materials by declared reuse or depreciation rule only when in scope | invoice, packing log, inventory record |
| cp_health_inspection_and_certification_records | health_treatment_and_hive_maintenance | healthy live bee unit for dispatch | inspection, certification, or release record | species; unit type; queen status; colony strength; disease or pest status; treatment status; release date | apiary inspection, veterinary certificate, lab result, or dispatch approval | kg live bee mass, colony, package, queen, or frame | per inspection, lot, or shipment | dispatch cycle | apiary, breeder, or dispatch lot | identify accepted live-bee units and convert to reference mass | certificate, inspection record, laboratory result |
| cp_treatment_residue_and_waste_records | health_treatment_and_hive_maintenance | treatment residues and condemned bee material | residue, contaminated comb, condemned colony, or disposal record | waste type; mass; treatment product; colony or batch; fate | scale record, disposal ticket, treatment log, or inspection record | kg | per event or reporting period | production cycle | apiary, treatment area, or waste route | sum residue and condemned material mass by fate | disposal ticket, treatment log, inspection record |
| cp_live_bee_packing_dispatch_records | live_bee_packing_and_dispatch | declared transferred live bees | package, queen cage, colony, nucleus, brood frame, or shipment record | unit type; unit count; bee count or mass; queen status; shipment id; gate; date; receiver; health status | packing log, scale record, shipping document, certificate, or count-to-mass conversion | kg live bee mass, package, colony, queen, frame, or head | per shipment or batch | dispatch period | packing room, apiary, holding room, or route | convert package or colony records to kg live bee mass and reconcile dispatched output | packing log, scale record, dispatch note, health certificate |
| cp_dispatch_energy_and_transport_records | live_bee_packing_and_dispatch | dispatch energy and transport | holding, ventilation, cooling, carrier, fuel, or route record | route; distance; vehicle; energy; fuel; carrier invoice; shipment mass; holding duration | carrier invoice, route log, fuel log, utility meter, or dispatch record | kWh, MJ, L fuel, km, tonne-km | per shipment or dispatch period | dispatch period | holding room, loading area, route, or declared gate | normalize route-specific energy to dispatched kg live bee mass | carrier invoice, route record, fuel or energy record |
| cp_mortality_escape_and_reject_records | live_bee_stock_entry; colony_management_and_feeding | mortality, rejected bees, and swarm loss | dead bee, failed queen, rejected stock, swarm, escape, or non-marketable colony record | unit id; event date; unit type; estimated mass or count; cause where available; fate | apiary log, inspection record, disposal record, or count-to-mass estimate | kg live bee mass, head, colony, queen, or package | per event or reporting period | production cycle | apiary, breeder yard, holding room, or shipment | convert event records to mass, sum by fate, and normalize to live-bee output | apiary log, inspection record, disposal record |
| cp_dispatch_mortality_and_packaging_waste_records | live_bee_packing_and_dispatch | dispatch mortalities and returned packaging | shipment loss, returned package, cage, feed can, or waste record | shipment id; dead bee count or mass; returned material; waste mass; fate | receiving claim, return record, scale ticket, or waste contractor record | kg or item | per shipment or return | dispatch period | route, receiver, packing room, or waste route | sum dispatch mortality and package waste by fate | claim record, return log, disposal ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_live_bee_mass_output | reference product | kg transferred live bee mass / PCR reference amount | cp_live_bee_packing_dispatch_records | kg live bees per reference output | `mass-balance-identity` |
| convert_count_to_live_bee_mass | colony, package, queen, brood-frame, or bee-count records | convert count-based units to kg live bee mass using documented mass, unit conversion, or colony-strength basis | cp_live_bee_stock_entry_records; cp_live_bee_colony_management_records; cp_live_bee_packing_dispatch_records | kg live bee mass by unit type | `fao-good-beekeeping-2019` |
| normalize_supplemental_feed | supplemental feed | convert syrup, candy, dry sugar, pollen substitute, and protein feed to declared sugar, dry matter, or as-fed basis and allocate by colony, batch, or live-bee output | cp_feed_and_water_records | kg feed per reference output | `fao-good-beekeeping-2019` |
| calculate_apiary_energy_co2 | apiary energy fossil CO2 | fuel and electricity quantity multiplied by declared emission factors and normalized to live-bee output | cp_energy_and_movement_records | kg fossil CO2 per reference output |  |
| calculate_dispatch_energy_co2 | dispatch energy fossil CO2 | dispatch energy or fuel quantity multiplied by declared emission factor and normalized to dispatched live-bee mass | cp_dispatch_energy_and_transport_records | kg fossil CO2 per reference output |  |
| allocate_colony_coproducts | co-products | subdivide or allocate burdens when honey, wax, pollination service, queen breeding service, or other co-products are credited inside the foreground boundary | cp_live_bee_colony_management_records; co-product records | allocation factors or subdivision rule | `fao-leap-guidelines` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_live_bee_identity | live bee identity | Species, unit type, life stage, caste mix, queen status, colony strength or bee-count basis, health status, geography, and declared gate must be stated for the reference flow and major live-bee lots. | inspection record, breeder certificate, health certificate, dispatch record |
| dq_mass_conversion | count and colony records | Count, colony, package, queen, and frame records must include measured mass or a documented conversion to kg live bee mass. | scale record, unit conversion note, colony-strength record |
| dq_feed_basis | supplemental feed | Feed records must preserve feed type, concentration, dry matter or sugar basis, treated colony count, and time period. | invoice, feed log, syrup mixing sheet |
| dq_health_status | disease and pest status | Health, pest monitoring, treatment, inspection, certification, and rejection status must be documented when live bees are transferred. | treatment log, inspection result, laboratory result, health certificate |
| dq_temporal_coverage | production cycle | Foreground records should cover the declared colony, package, queen, or dispatch production cycle; annualized apiary records must disclose allocation method. | apiary log, stock entry record, dispatch record |
| dq_completeness | material flows | Live-bee stock, feed, water where used, treatments, short-life hive or packaging materials, energy and movement, mortality, rejects, and dispatch waste must be addressed or explicitly excluded with rationale. | collection protocol checklist and data quality review |

## 9. Validation Rules

Before publishing a foreground data package using this PCR, check:

- reference flow is expressed as kg live bees and includes species, unit type, queen status, colony strength or bee-count basis, health status, geography, and declared gate
- live-bee product is not confused with honey, wax, pollination service, beekeeping service, or equipment
- starting-condition treatment for parent colonies, purchased queens, packages, nucleus colonies, brood frames, and same-category live-bee inputs is declared
- count-to-mass conversion and colony-strength basis are documented
- supplemental feed, water where used, treatments, hive consumables, packaging, energy, and movement or dispatch transport are addressed
- disease, pest, treatment, inspection, certification, rejected stock, mortality, and swarm or escape losses have declared records and fates
- co-product handling is declared when honey, wax, pollination service, queen breeding service, or other outputs are credited
- values outside provisional screening ranges include source notes, corrected data, or method rationale

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream live-bee supply chain, apiary input, queen or package production, colony replacement, pollination-service model input, or managed-bee inventory modelling where live-bee qualifiers, geography, production route, and declared gate match the dataset metadata |
| excluded_use | honey, wax, propolis, royal jelly, venom, pollination service, beekeeping service, equipment manufacture, and downstream crop pollination unless separately modelled |
| required_metadata | reference flow; geography; production cycle; species; unit type; life stage; caste mix; queen status; colony strength or bee-count basis; live-bee mass conversion; health status; treatment status; declared gate; transport inclusion; collection protocol coverage; DQR |
| required_quality_disclosure | record coverage, allocation choices, starting-condition treatment, count-to-mass conversion, calculation rules, measurement devices or primary records, unresolved omissions, and data quality scores |
| update_trigger | material change in species, unit type, production route, geography, feed basis, treatment regime, disease or certification status, packaging route, declared gate, transport inclusion, collection protocol coverage, or data quality score |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-beekeeping-2019` | official_guidance | <https://openknowledge.fao.org/handle/20.500.14283/ca4271en> | good beekeeping practice, bee health, management records, disease control, and production boundary context |
| `woah-bee-diseases` | official_guidance | <https://www.woah.org/en/disease/diseases-of-bees/> | listed bee diseases, health status, inspection, and certification context |
| `woah-varroosis-code` | official_guidance | <https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_varroa_spp.htm> | live bee, queen, larva, pupa, and brood-comb health recommendations for varroosis context |
| `oregon-honeybee-colony-evaluation` | extension_guidance | <https://extension.oregonstate.edu/catalog/pnw-623-evaluating-honey-bee-colonies-pollination> | colony-strength and managed honey bee colony evaluation context |
| `fao-leap-guidelines` | official_guidance | <https://www.fao.org/partnerships/leap/resources/publications/fao-leap-guidelines/en> | livestock and animal supply-chain LCA boundary, data quality, and allocation context |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for live-bee output, stock reconciliation, and process reference outputs. | QA guardrails for reference outputs and live-bee mass-balance checks |
