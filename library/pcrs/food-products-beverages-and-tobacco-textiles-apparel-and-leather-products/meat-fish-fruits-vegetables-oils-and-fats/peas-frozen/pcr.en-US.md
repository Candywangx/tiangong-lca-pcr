---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peas-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Peas, frozen

## 1. Scope and Applicability

This PCR specifies foreground data production for unseasoned quick-frozen peas made from young, tender peas of *Pisum sativum* L. It covers receipt of fresh peas, shelling when required, cleaning, sorting, washing, blanching, cooling and draining, quick freezing, inspection, packaging, and on-site frozen storage up to release at the factory cold-store gate. It is suitable for bulk or retail-packed, sized or unsized, individually quick-frozen or block-frozen peas when the presentation is declared.

Agricultural cultivation, harvested-pea transport to the factory, manufacture of purchased energy, water, packaging and refrigerants, outbound distribution, retail, cooking, consumption, and end-of-life are outside the foreground boundary. Those stages require linked upstream or downstream datasets when a complete life-cycle model is constructed. Peas canned, dried, fresh, mixed with other foods, seasoned, sauced, or otherwise preserved but not frozen are outside this category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peas-frozen |
| classification_refs | CPC 3.0: 21312, Peas, frozen, exact scope reference |
| covered_products | Quick-frozen whole green or garden peas of *Pisum sativum* L.; sized or unsized; IQF or block-frozen; bulk or packaged; optional declared ingredients permitted by the applicable product specification |
| excluded_products | Fresh green peas; dry peas; canned peas; peas otherwise prepared or preserved but not frozen; field peas of *Vigna* spp.; pea-and-vegetable mixtures; seasoned or sauced pea dishes; products intended for further industrial processing when they do not meet the declared finished-product specification |
| representative_product | Unseasoned, individually quick-frozen garden peas, packaged or bulk, released from the factory cold store |
| production_route | Fresh-pea receipt and optional shelling; cleaning, sorting and washing; blanching; cooling and draining; quick freezing; inspection and packing; frozen storage |
| market_state | Finished frozen food at the factory cold-store gate, with thermal-centre freezing completed and product maintained at -18 °C or colder, subject only to declared competent-authority tolerances |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Frozen edible peas that retain the declared product quality and are suitable for cold-chain distribution and subsequent cooking or consumption |
| How much | 1 kg net product mass, excluding all packaging |
| How well | Clean, sound, whole, young and tender *Pisum sativum* peas; sufficiently blanched; quick-frozen; conforming to the declared grade, size and ingredient specification; thermal-centre temperature at or below -18 °C after stabilization |
| How long or cycle | One declared production lot through release from the factory cold store; the on-site storage duration is reported |
| reference_flow_link | `reference_frozen_peas` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net frozen peas |
| Reference product flow | Peas, frozen `7ee41d34-76b1-42c5-8f39-c3cdae327118` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pea species and declared variety or type; sized or unsized and declared size class; IQF or block-frozen presentation; ingredient and additive statement; applicable grade or quality specification; bulk or packaging format; net-mass basis; fresh-pea input state at receipt; production geography and period; freezing technology; product release temperature; on-site frozen-storage duration; foreground allocation method; cold-chain boundary |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference frozen-pea output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the foreground inventory to exactly 1 kg net frozen peas at factory cold-store release; exclude primary, secondary and tertiary packaging mass. |
| `wet_mass_release_basis` | Fresh, intermediate and final pea masses | Mass | kg | Use as-weighed wet mass at the recorded process point. Record tare correction, scale identity and measurement time; do not convert to dry matter unless a separately disclosed calculation is required. |
| `water_volume_basis` | Purchased and recirculated water | Volume | m3 | Record net purchased water separately from internally recirculated water. Do not count recirculated water as a new technosphere input; disclose any density conversion used. |
| `energy_carrier_separation` | Electricity, fuel and purchased steam or heat | Energy or Mass | kWh, MJ, or kg | Preserve the metered carrier and unit. Convert only with a documented factor and do not combine electricity with thermal energy before inventory publication. |
| `cold_chain_temperature` | Freezer exit and cold storage | Temperature | °C | Measure product thermal-centre or validated representative package temperature after stabilization and maintain records demonstrating -18 °C or colder at release and during on-site storage. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh peas received at the processing-site gate, with whether pods are present, harvest condition, supplier, origin, receipt mass, receipt time and temperature declared |
| starting_condition_role | Foreground entry condition for conversion of fresh peas into finished frozen peas |
| product_classification_scope | Quick-frozen whole peas of *Pisum sativum* L. represented by CPC 3.0 code 21312 as an exact classification reference |
| recursive_input_rule | Internally generated frozen-pea rework remains inside the same lot mass balance and is not a new product input. Externally purchased frozen peas are recorded as a separate technosphere input with their own upstream dataset and are not recursively remodelled as this foreground production route. |
| upstream_dataset_requirement | Link upstream datasets for received fresh peas, inbound transport when included in the study, electricity, fuels or purchased heat, water supply, packaging materials, refrigerant make-up, and off-site waste or wastewater treatment |
| disclosure | Declare shelling responsibility, process technologies, included sanitation and utilities, start and end gates, storage duration, temperature history, exclusions, allocation choices, rework treatment and all linked upstream or downstream datasets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground production | Include receipt and optional shelling, cleaning, sorting, washing, blanching, cooling, draining, quick freezing, inspection, packaging, on-site frozen storage, sanitation, direct releases, organic rejects, packaging waste and wastewater through factory cold-store release. | `codex-cxs-320-2015`; `codex-cxc-8-1976`; `usda-frozen-peas-standard`; `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_links` | Purchased inputs and off-site treatment | Keep purchased-input production and off-site treatment outside the foreground processes, but represent each material amount with a linked geographically and temporally appropriate upstream dataset. | `eu-pef-2021-2279` |
| `boundary_cold_chain` | On-site and downstream cold chain | Include on-site refrigeration through release. Outbound refrigerated transport, distribution and retail are downstream; when included in a lifecycle model, link separate cold-chain datasets and preserve temperature records. | `codex-cxc-8-1976` |
| `boundary_foreground_completeness` | Measured foreground flows | Record all measured material, water and energy inputs, product and waste outputs, wastewater, and direct refrigerant releases. Do not omit a foreground flow solely because its amount is small; disclose any unavailable measurement. | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pea_receipt_preparation` | Pea receipt and preparation | required | Always included; shelling is included when peas arrive in pods | Foreground material preparation | kg prepared peas leaving sorting and washing |
| `blanching_cooling` | Blanching, cooling and draining | required | Always included for product within this PCR | Foreground enzyme inactivation and conditioning | kg cooled blanched peas |
| `quick_freezing` | Quick freezing | required | Always included | Foreground freezing | kg frozen peas at freezer exit |
| `packing_cold_storage` | Inspection, packing and on-site cold storage | required | Always included; packaging material may be zero for declared unpackaged bulk transfer | Foreground finishing and storage | 1 kg net frozen peas released from factory cold store |

### Process: Pea receipt and preparation (`pea_receipt_preparation`)

#### Inputs

##### Product flows

###### Fresh peas received (`fresh_peas_input`)

Record the as-received fresh pea mass crossing the site gate, including pods only when shelling occurs within the foreground boundary.

- Selected flow: Fresh green peas
- Flow property / unit: Mass / kg
- Amount rule: measured accepted and rejected receipt mass attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `codex-cxs-320-2015`; `usda-frozen-peas-standard`
- Range: Provisional fresh-pea input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.02
  - Upper: 1.30
  - Unit: kg
  - Basis: per 1 kg net frozen peas released; broad estimate to be replaced by reviewed yield evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record net purchased water used for washing, fluming and preparation; meter recirculated water separately without counting it again as a purchased input.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: metered or invoice-reconciled net water supplied to preparation, allocated by process meter or documented engineering calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg raw peas processed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_metering`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Frozen fruit-and-vegetable water-use screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 5
  - Upper: 43
  - Unit: m3
  - Basis: per 1,000 kg raw fruit and vegetables; use only as a broad screening comparator, not a default value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-fdm-bref-2019`

###### Preparation electricity (`preparation_electricity`)

Record electricity for conveyors, shellers, sorters, washers and preparation equipment.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or operating-hours multiplied by measured equipment demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg frozen peas produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Preparation electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 28
  - Unit: kWh
  - Basis: per 1,000 kg frozen vegetables produced
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared peas (`prepared_peas_output`)

Record peas accepted after shelling, cleaning, sorting and washing as the intermediate product transferred to blanching.

- Selected flow: Prepared green peas
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or fresh-pea input minus measured preparation rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `usda-frozen-peas-standard`

##### Waste flows

###### Preparation rejects (`preparation_rejects`)

Record pods, stones, soil, foreign plant material and peas rejected during preparation by destination and regulatory status.

- Selected flow: Organic and field preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination; do not subtract saleable material without applying the allocation rules
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_wastewater`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional preparation-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 0.30
  - Unit: kg
  - Basis: per 1 kg net frozen peas released; broad estimate to be replaced by reviewed plant data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Blanching, cooling and draining (`blanching_cooling`)

#### Inputs

##### Product flows

###### Prepared peas entering blancher (`prepared_peas_input`)

Record the transferred prepared-pea mass without creating a second upstream burden.

- Selected flow: Prepared green peas
- Flow property / unit: Mass / kg
- Amount rule: equal to `prepared_peas_output` after documented transfer losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `usda-frozen-peas-standard`

###### Blanching thermal energy (`blanching_thermal_energy`)

Record purchased steam, fuel or heat used to achieve the validated blanching schedule, keeping each carrier separate.

- Selected flow: Purchased steam, fuel or heat
- Flow property / unit: Energy or Mass / MJ, kWh, or kg
- Amount rule: metered carrier use or calculated use from boiler fuel and documented efficiency
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg cooled blanched peas
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `codex-cxc-8-1976`; `eu-jrc-fdm-bref-2019`
- Range: Provisional steam-equivalent screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 0.50
  - Unit: kg steam-equivalent
  - Basis: per 1 kg cooled blanched peas; broad technology-dependent estimate to be replaced by reviewed evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Blanching and cooling electricity (`blanching_electricity`)

Record electricity for blancher drives, pumps, fans and process cooling assigned to this stage.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or operating-hours multiplied by measured equipment demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg frozen peas produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Blancher electricity screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 1
  - Upper: 30
  - Unit: kWh
  - Basis: per 1,000 kg frozen vegetables produced across cited blancher and cooling configurations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooled blanched peas (`cooled_blanched_peas`)

Record peas after the validated blanching schedule, cooling and draining, immediately before quick freezing.

- Selected flow: Cooled blanched peas
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass; reconcile with prepared-pea mass, removed solids and wastewater-associated product loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `codex-cxs-320-2015`; `codex-cxc-8-1976`

##### Waste flows

###### Blanching and cooling wastewater (`blanching_wastewater`)

Record discharged blanching and cooling water after internal reuse, together with treatment destination and available load indicators.

- Selected flow: Food-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume allocated to the lot; retain BOD, COD, suspended-solids, nitrogen and phosphorus analyses when available
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg frozen peas produced
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_wastewater`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Provisional wastewater-volume screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 43
  - Unit: m3
  - Basis: per 1,000 kg raw peas; bounded by the broad frozen fruit-and-vegetable water-use evidence and to be replaced by reviewed discharge data
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Quick freezing (`quick_freezing`)

#### Inputs

##### Product flows

###### Cooled peas entering freezer (`cooled_peas_input`)

Record the drained, cooled peas transferred to the quick-freezing equipment.

- Selected flow: Cooled blanched peas
- Flow property / unit: Mass / kg
- Amount rule: equal to `cooled_blanched_peas` after documented transfer loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `codex-cxc-8-1976`

###### Freezing electricity (`freezing_electricity`)

Record electricity for the freezing system, fans, conveyors, pumps and assigned defrost operation, net of separately recorded cold-storage electricity.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or allocated compressor-system electricity using documented operating data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg frozen peas at freezer exit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `eu-jrc-fdm-bref-2019`
- Range: Deep-freezing electricity screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 80
  - Upper: 280
  - Unit: kWh
  - Basis: per 1,000 kg frozen vegetables produced
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-fdm-bref-2019`

###### Refrigerant make-up (`refrigerant_makeup`)

Record refrigerant purchased or added to systems serving freezing and on-site cold storage, allocated using service records.

- Selected flow: Refrigerant, technology-specific
- Flow property / unit: Mass / kg
- Amount rule: beginning inventory plus purchases minus ending inventory and documented recovery, allocated between freezing and storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- Sources: `codex-cxc-8-1976`
- Range: Provisional refrigerant make-up screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.005
  - Unit: kg
  - Basis: per 1 kg net frozen peas released; deliberately broad estimate pending reviewed system-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen peas at freezer exit (`frozen_peas_bulk`)

Record frozen peas only after the thermal-centre temperature reaches -18 °C or colder after stabilization.

- Selected flow: Peas, frozen `7ee41d34-76b1-42c5-8f39-c3cdae327118`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net frozen-pea mass transferred to inspection and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `codex-cxs-320-2015`; `codex-cxc-8-1976`

##### Waste flows

##### Elementary flows

###### Refrigerant released to air (`refrigerant_emission`)

Record verified leakage by refrigerant species; do not report total make-up as an emission when recovery or inventory change is documented.

- Selected flow: Refrigerant emission to air, species-specific
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass balance minus documented recovery and retained inventory, allocated to the production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- Sources: `codex-cxc-8-1976`
- Range: Provisional direct-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.005
  - Unit: kg
  - Basis: per 1 kg net frozen peas released; broad upper screen pending reviewed equipment evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Inspection, packing and on-site cold storage (`packing_cold_storage`)

#### Inputs

##### Product flows

###### Frozen peas entering finishing (`frozen_peas_bulk_input`)

Record the transfer from quick freezing without adding another upstream product burden.

- Selected flow: Peas, frozen `7ee41d34-76b1-42c5-8f39-c3cdae327118`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: equal to `frozen_peas_bulk` after documented transfer losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_quality`
- Sources: `codex-cxc-8-1976`

###### Packaging materials (`packaging_materials`)

Record primary, secondary and tertiary packaging by material and mass, including bulk liners and pallets when attributable.

- Selected flow: Packaging materials, material-specific
- Flow property / unit: Mass / kg
- Amount rule: purchase or bill-of-material mass adjusted for inventory change and allocated to packed net product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxc-8-1976`; `eu-pef-2021-2279`
- Range: Provisional packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.20
  - Unit: kg
  - Basis: per 1 kg net frozen peas released; broad estimate covering bulk and retail formats pending reviewed packaging data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cold-storage electricity (`cold_storage_electricity`)

Record electricity attributable to on-site storage between freezer exit and factory release using volume, pallet-space, mass-time or direct submetering.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from cold-store electricity, occupied volume and storage duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 occupied cold-storage volume per year
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_temperature_storage`
- Sources: `eu-jrc-fdm-bref-2019`; `codex-cxc-8-1976`
- Range: Frozen-vegetable storage electricity screening range
  - Range role: Typical range (`typical_range`)
  - Lower: 20
  - Upper: 65
  - Unit: kWh
  - Basis: per m3 occupied cold-storage volume per year
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference frozen peas (`reference_frozen_peas`)

This is the packaged or declared bulk frozen-pea output that realizes the functional unit at factory cold-store release.

- Selected flow: Peas, frozen `7ee41d34-76b1-42c5-8f39-c3cdae327118`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net product after normalization; packaging excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `codex-cxs-320-2015`; `eu-pef-2021-2279`

##### Waste flows

###### Packaging and final product rejects (`packing_rejects`)

Record damaged packaging, off-specification peas and spillages by material and destination; separately identify product rework returned within the system.

- Selected flow: Packaging and frozen-product rejects
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass minus documented internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen peas released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_wastewater`
- Sources: `codex-cxc-8-1976`
- Range: Provisional finishing-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: per 1 kg net frozen peas released; replace with reviewed lot data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared processes and utilities | Avoid allocation by subdividing processes and using process meters, lot masses, operating time, occupied cold-store volume and storage duration. System expansion may be used only when the additional function and substituted system are demonstrated and reported. | `eu-pef-2021-2279` |
| `allocation_internal_rework` | Peas reworked within the same production system | Treat internal rework as an internal transfer. Retain its mass in the lot balance and assign no avoided-product credit. | `eu-pef-2021-2279` |
| `allocation_residue_status` | Pods, rejected peas and other organic residues | Classify residues as waste unless a stable intended product function and market are documented. If they are co-products, first apply a relevant quantifiable physical relationship; use another relationship such as economic value only when physical allocation is not defensible, and disclose prices, period and sensitivity. | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |
| `allocation_waste_treatment` | Waste and wastewater treatment | Assign on-site treatment directly where measured. Allocate shared treatment using a documented causal driver such as wastewater volume and pollutant load; link off-site treatment to the measured outgoing waste flow. | `eu-pef-2021-2279`; `eu-jrc-fdm-bref-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_quality` | `pea_receipt_preparation`; `blanching_cooling`; `quick_freezing`; `packing_cold_storage` | Pea inputs, intermediates, final output and product quality | Scale tickets, batch records and laboratory or quality-control records | lot_id; timestamp; gross_mass; tare_mass; net_mass; process_point; supplier; pea_type; size_grade; reject_reason; blanch_schedule; freezer_exit_temperature; final_grade | Calibrated scales and documented sampling or release tests linked by lot | kg; °C; min | Each lot and each material transfer | Full declared production campaign; aggregate no less than one complete representative campaign | All foreground lines and storage locations represented by the dataset | Sum compatible net masses; retain lot traceability; calculate mass-weighted values per kg released product | Calibration records; tare checks; sampling plan; release authorization; outlier log |
| `cp_water_metering` | `pea_receipt_preparation`; `blanching_cooling` | Purchased, reused and discharged water | Meter logs, invoices and reuse-loop records | meter_id; opening_reading; closing_reading; timestamp; process_area; reuse_volume; downtime; production_mass | Calibrated meters reconciled to invoices; estimate only with documented engineering calculation | m3 | Daily or per batch, reconciled monthly | Same period as production data | Site and process-area meters covering washing, blanching, cooling and sanitation | Net purchased water equals gross supply minus documented non-production uses; internal reuse reported separately | Meter calibration; invoice reconciliation; missing-data log |
| `cp_energy_metering` | `pea_receipt_preparation`; `blanching_cooling`; `quick_freezing`; `packing_cold_storage` | Electricity and thermal-energy carriers | Submeters, fuel invoices, boiler and equipment logs | carrier; meter_id; opening_reading; closing_reading; fuel_mass_or_volume; steam_mass; operating_hours; equipment_power; production_mass | Carrier-specific meter or invoice reconciliation; engineering calculation only where submetering is absent | kWh; MJ; kg; m3 | Continuous or daily, reconciled monthly | Same period as production data and seasonal campaign | All processing, refrigeration, storage and shared utilities assigned to the declared site | Preserve carrier; subtract documented non-production use; allocate shared loads by causal driver | Meter calibration; invoice reconciliation; equipment run logs; conversion-factor source |
| `cp_waste_wastewater` | `pea_receipt_preparation`; `blanching_cooling`; `packing_cold_storage` | Solid residues, rejects, packaging waste and wastewater | Weighbridge tickets, waste manifests, discharge meters and laboratory results | waste_type; mass; volume; destination; regulatory_status; rework_mass; BOD; COD; TSS; nitrogen; phosphorus; sampling_time | Weighing and metering by stream; laboratory analysis under the site's applicable method | kg; m3; mg/L | Each shipment or continuous discharge with representative sampling | Same period as production data | All on-site waste and wastewater outlets | Sum by stream and destination; exclude documented internal rework from outgoing waste | Scale and meter checks; manifests; laboratory reports; chain of custody |
| `cp_refrigerant_inventory` | `quick_freezing`; `packing_cold_storage` | Refrigerant make-up, recovery and release | Refrigerant inventory, purchase, maintenance and recovery records | refrigerant_species; opening_inventory; purchases; additions; recovered_mass; closing_inventory; equipment_id; service_date | Annual or campaign mass balance by refrigerant species and equipment system | kg | Each service event; reconciled annually or per complete campaign | Same period as production data, including shutdown service | All refrigeration equipment serving freezing and on-site storage | Release equals opening plus purchases minus closing inventory and documented recovery, with unexplained imbalance disclosed | Certified service records; cylinder weights; inventory reconciliation |
| `cp_packaging_records` | `packing_cold_storage` | Packaging material inputs | Bills of materials, purchase and inventory records | packaging_format; material; unit_mass; units_used; opening_stock; purchases; closing_stock; packed_product_mass | Verified bill of materials reconciled to stock change | kg | Each packaging format; reconciled monthly | Same period as production data | All primary, secondary and attributable tertiary packaging | Material mass per kg net packed product; bulk unpackaged product reported as zero with evidence | Supplier specification; sample weigh checks; stock reconciliation |
| `cp_temperature_storage` | `quick_freezing`; `packing_cold_storage` | Freezer completion, cold-store temperature and storage electricity allocation | Product-probe readings, continuous logger data and warehouse records | lot_id; probe_id; location; timestamp; product_temperature; store_temperature; pallet_days; occupied_volume; electricity; alarms; corrective_action | Validated temperature probes and continuous cold-store monitoring linked to inventory movements | °C; day; m3; kWh | Each lot at freezer exit; continuous storage monitoring | Entire on-site storage period for included lots | Freezer exits and all cold rooms used by the dataset | Calculate mass- or volume-time-weighted storage demand; retain excursions separately | Probe calibration; logger completeness; alarm and corrective-action records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | All inventory amounts | normalized amount = period or lot amount / net kg conforming frozen peas released | Collected flow amount; `reference_frozen_peas` net mass | Amount per 1 kg reference flow | `eu-pef-2021-2279` |
| `calc_pea_mass_balance` | Pea material through all four processes | fresh pea input + external frozen-pea input = reference frozen peas + outgoing rejects + measured product losses + inventory change; internal transfers and rework cancel | Mass records from `cp_lot_mass_quality` and `cp_waste_wastewater` | Reconciled pea mass balance and unexplained difference | `eu-pef-2021-2279` |
| `calc_net_water` | Purchased and reused water | net technosphere water input = gross site supply - documented non-production use; internal reuse is reported but not added again | Meter and invoice fields from `cp_water_metering` | Net purchased water and reuse indicator | `eu-jrc-fdm-bref-2019` |
| `calc_refrigerant_release` | Refrigeration systems | release = opening inventory + purchases - closing inventory - documented recovery; negative or unexplained values require investigation | Refrigerant fields from `cp_refrigerant_inventory` | Species-specific direct air emission | `codex-cxc-8-1976` |
| `calc_storage_energy` | On-site cold storage | allocated storage electricity = cold-store electricity × lot occupied-volume-time / total occupied-volume-time, unless direct submetering is available | kWh, occupied m3 and duration from `cp_temperature_storage` | kWh per kg reference flow | `eu-jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Product and reference flow | Maintain lot-level linkage from received peas through finished frozen-pea release and retain the exact Tiangong reference-flow UUID, flow-property UUID and unit-group UUID. | Lot genealogy, batch records and dataset metadata |
| `dq_temporal_coverage` | Foreground activity data | Cover one complete representative production campaign for seasonal processing and all included on-site storage; disclose dates, downtime and any extrapolation. Prefer a consecutive 12-month period when the site operates year-round. | Production calendar, meter coverage and missing-data log |
| `dq_measurement_quality` | Mass, water, energy, temperature and refrigerant records | Use calibrated instruments or reconciled invoices. Record estimation method, conversion factors, missing-data treatment and uncertainty whenever direct measurement is unavailable. | Calibration certificates, invoices, reconciliation and calculation files |
| `dq_completeness` | Process inventory | Demonstrate reconciled pea mass, water and refrigerant balances; include all listed required processes and all measured direct releases, waste and wastewater streams. Quantify rather than silently discard unexplained differences. | Balance worksheets, waste manifests, discharge records and review sign-off |
| `dq_representativeness` | Published dataset | Report technological, geographical and time representativeness and precision for company-specific activity data, with the declared pea type, processing route, freezing technology, packaging and storage configuration. | Representativeness assessment and data-quality review record referencing `eu-pef-2021-2279` |
| `dq_temperature_records` | Quick freezing and storage | Retain validated records showing that freezing was completed at -18 °C or colder at the thermal centre after stabilization and that on-site cold-chain conditions were maintained. | Probe calibration, freezer-exit checks, continuous logger data and corrective actions |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail validation unless the reference output is exactly 1 kg net `Peas, frozen` with product-flow UUID `7ee41d34-76b1-42c5-8f39-c3cdae327118`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validate_product_scope` | Product identity | Fail validation when the product is not whole quick-frozen *Pisum sativum* peas or when excluded mixtures, seasonings or preservation routes are represented without a separate PCR decision. | `codex-cxs-320-2015`; `usda-frozen-peas-standard` |
| `validate_required_qualifiers` | Dataset metadata | Fail validation when any required qualifier is missing, including presentation, quality specification, fresh-pea receipt state, freezing technology, release temperature, storage duration and packaging format. | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `validate_process_coverage` | Foreground boundary | Fail validation unless all four required processes and their linked mass, water, energy, waste, wastewater and direct-emission records are present, or a documented zero/not-applicable value is provided. | `eu-jrc-fdm-bref-2019` |
| `validate_blanching` | Blanching process | Fail validation unless the blanching schedule and evidence of adequate enzyme-inactivation or equivalent declared quality outcome are retained. | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `validate_freezing_temperature` | Freezer exit and cold storage | Fail validation unless the product reaches -18 °C or colder at its thermal centre after stabilization and on-site storage records demonstrate maintenance at -18 °C or colder, subject only to declared competent-authority tolerances. | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `validate_mass_balance` | Pea inputs and outputs | Fail validation when the pea mass balance is absent or has an unexplained difference; the dataset shall disclose the balance result and disposition of rejects and rework. | `eu-pef-2021-2279` |
| `validate_allocation` | Shared utilities and co-products | Fail validation when allocation is used without documenting why subdivision or system expansion was not applied, the causal relationship selected, all factors and the treatment of organic residues. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | Reasoned estimates | Treat every `reasoned_estimate` range as a non-binding screening guardrail. Fail publication review if any such range is used as the reported foreground amount without accepted supporting evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for frozen peas at the factory cold-store gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Site-, technology- and product-specific LCI modelling of qualifying frozen peas; linking as the manufacturing-stage dataset in a broader food product lifecycle model; comparison only when functional unit, scope, geography, time, quality, packaging and cold-chain assumptions are aligned |
| excluded_use | Agricultural pea cultivation; fresh, canned, dried or otherwise preserved peas; mixed or seasoned products; consumer cooking; downstream distribution without separate cold-chain modelling; public comparative claims without the required review |
| required_metadata | Canonical PCR id and version; Tiangong flow identity; CPC reference; pea species/type and size; ingredient and grade specification; fresh-pea receipt state; production geography, facility and period; technologies; packaging format; net mass; freezer-exit and release temperatures; on-site storage duration; process coverage; upstream datasets; allocation and cut-off choices |
| required_quality_disclosure | Data source by row; measured versus calculated amounts; meter and scale coverage; mass, water and refrigerant balance results; missing-data and estimation methods; technological, geographical and temporal representativeness; precision; provisional reasoned ranges; exclusions; independent review status |
| update_trigger | Change in product specification, raw-pea state, process route, blanching schedule, freezing or refrigeration technology, refrigerant, packaging format, storage profile, allocation method, source evidence, reference UUID, or material foreground performance; otherwise review when the represented production period is no longer current |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-320-2015` | standard | FAO and WHO, CXS 320-2015, Standard for Quick-Frozen Vegetables, including Annex on Peas, official PDF: https://www.fao.org/input/download/standards/13928/CXS_320e_2015.pdf (retrieved 2026-08-11) | Product definition, covered pea characteristics, blanching, quick-freezing completion, -18 °C cold-chain condition, packaging and quality requirements |
| `codex-cxc-8-1976` | official_guidance | FAO and WHO, CXC 8-1976, Code of Practice for the Processing and Handling of Quick Frozen Foods, official Codex page: https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-11) | Process decomposition, blanching, quick freezing, packaging, temperature measurement, frozen storage, transport boundary and refrigerant management |
| `usda-frozen-peas-standard` | standard | USDA Agricultural Marketing Service, United States Standards for Grades of Frozen Peas, official PDF: https://www.ams.usda.gov/sites/default/files/media/Frozen_Peas_Standard%5B1%5D.pdf (retrieved 2026-08-11) | Pea product identity, shelling, washing, blanching, sorting, draining, freezing, preservation and quality attributes |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, official PDF: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-11) | Frozen-vegetable process structure; water, electricity and storage ranges; blanching technology; solid residues; wastewater and refrigerant-related inventory requirements |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, official PDF: https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Functional unit and reference flow, lifecycle inventory, upstream linkage, foreground completeness, allocation hierarchy, data quality and verification |
