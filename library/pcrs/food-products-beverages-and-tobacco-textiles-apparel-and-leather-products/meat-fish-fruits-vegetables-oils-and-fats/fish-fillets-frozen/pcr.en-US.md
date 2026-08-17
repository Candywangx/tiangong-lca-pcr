---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fish fillets, frozen

## 1. Scope and Applicability

This PCR covers unbreaded fish fillets that are cut from food-grade fish, quick-frozen, optionally glazed, packed, and supplied frozen at the processing-facility gate for direct consumption after normal food preparation. It supports wild-caught and aquaculture species when the source-fish production system, species, origin, and upstream dataset are declared.

The foreground boundary starts with accepted fish at the processing facility and includes receiving and cold holding, filleting, trimming, washing, optional skinning and deboning, quick freezing, optional glazing, packing, frozen storage, and factory-gate dispatch preparation. Source-fish production and inbound transport are represented by linked upstream datasets. Breaded or battered products, minced fish, formed portions, smoked, dried, salted, canned, cooked, ready-to-eat products, products declared for further industrial processing, retail distribution, consumer cooking, and end-of-life are outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-frozen |
| classification_refs | CPC 3.0: 21222, Fish fillets, frozen (exact mapping context) |
| covered_products | Unbreaded frozen or quick-frozen fish fillets, including individually quick-frozen or block-packed fillets, with or without skin or bones, and with or without glaze |
| excluded_products | Fresh or chilled fillets; frozen minced fish or fish meat that is not presented as fillets; breaded or battered portions; smoked, dried, salted, canned, cooked, or ready-to-eat fish; products labelled for further industrial processing |
| representative_product | Packed, unbreaded quick-frozen fish fillets for direct consumption after normal food preparation |
| production_route | Food-grade source fish receipt → filleting/trimming/washing → quick freezing → optional glazing → packing → frozen storage → factory gate |
| market_state | Frozen at -18 °C or colder at the thermal centre after stabilization; net fish mass declared exclusive of glaze and packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide edible, unbreaded frozen fish fillet suitable for direct consumption after normal food preparation |
| How much | 1 kg net mass of fish fillet, excluding glaze and packaging |
| How well | Product is cut as fillet, quick-frozen to -18 °C or colder at the thermal centre after stabilization, maintained frozen, and meets the declared species, presentation, glazing, and food-safety specifications |
| How long or cycle | One production lot through freezing, packing, and the declared factory frozen-storage period, delivered at the facility gate |
| reference_flow_link | rf_frozen_fish_fillets |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net fish mass |
| Reference product flow | Frozen Fish `130aa38f-8c63-4d0b-ad05-0b2c4426cdd8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species; wild-caught or aquaculture origin; catch or farm origin and source-fish dataset; fillet presentation and cut; skin and bone status; glazing status and glaze mass; freezing technology; processing location; frozen-storage duration; net mass excluding glaze and packaging |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1 kg net fish fillet mass; exclude glaze, free ice, and packaging from the reference amount. |
| `glaze_mass_separation` | Glazed product | Mass | kg | Measure gross frozen mass and glaze mass separately by a documented deglazing or equivalent verified method; do not credit glaze as fish product mass. |
| `lot_mass_balance` | Fish, fillets, co-products, residues, and wastewater solids | Mass | kg | Use calibrated mass measurements on a consistent wet-mass basis and reconcile inputs with edible product, co-products, residues, and retained or discharged material for each aggregation period. |
| `energy_conversion` | Electricity and fuels | Energy | kWh or MJ | Preserve metered units and conversion factors; report electricity in kWh and fuels in their measured unit with lower- or higher-heating-value basis declared before conversion to MJ. |
| `temperature_record` | Freezing and frozen storage | Temperature | °C | Record calibrated product thermal-centre temperature at freezing completion and continuous or interval storage temperatures; the freezing endpoint is -18 °C or colder after thermal stabilization. |
| `packaging_mass` | Primary, secondary, and tertiary packaging | Mass | kg | Record packaging by material and normalize purchased mass minus documented returned or unused mass to the net reference product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Food-grade fish received at the processing facility with species, origin, preservation state, lot mass, and linked upstream production and inbound-transport datasets declared |
| starting_condition_role | Upstream product input to the foreground filleting and freezing system |
| product_classification_scope | Unbreaded frozen fish fillets represented by CPC 3.0 code 21222 as classification context; PCR identity remains classification-independent |
| recursive_input_rule | When already-frozen fillets in this same category enter repacking or re-freezing, record them once as a linked upstream product dataset and model only the additional foreground operations; do not recursively regenerate the upstream fillet system |
| upstream_dataset_requirement | Supplier-, species-, origin-, and production-system-specific datasets for source fish and inbound transport are required where available; proxy use must be disclosed with geography, technology, and temporal limitations |
| disclosure | Declare source-fish production system, species, origin, preservation at receipt, filleting route, freezing and glazing technology, co-product handling, frozen-storage duration, electricity mix, refrigerant, allocation method, and excluded downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Foreground processing | Include all material and energy flows from facility receipt of source fish through filleting, trimming, washing, quick freezing, optional glazing, packing, and frozen storage to the facility gate. | `codex-cxs-190-1995`; `codex-cxc-52-2003` |
| `boundary_upstream_links` | Source fish and inbound supplies | Link upstream datasets for source fish, inbound transport, water, energy carriers, packaging, and other purchased materials; do not omit their burdens from a cradle-to-gate result. | `eu-pef-2021-2279` |
| `boundary_cold_chain` | Freezing and frozen storage | Include electricity, fuel, refrigerant losses, and product losses associated with freezing and the declared factory frozen-storage period. | `codex-cxs-190-1995`; `codex-cxc-52-2003` |
| `boundary_waste_treatment` | Residues, wastewater, and packaging waste | Include on-site treatment and link off-site transport and treatment datasets for wastes crossing the facility boundary; separately identify co-products that leave for beneficial use. | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | Downstream stages | Exclude post-gate distribution, retail, thawing, consumer cooking, consumption, and end-of-life unless the study explicitly expands the declared system; disclose every added downstream stage. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_fillets` | Receiving, filleting, trimming, and washing | required | Always included for source fish processed into fillets; document any received pre-filleted input | Foreground product preparation | kg prepared fillet leaving the step |
| `quick_freeze_glaze` | Quick freezing and optional glazing | required | Freezing is always included; glazing rows apply only when glaze is used | Foreground preservation | kg frozen fillet leaving the step, with glaze tracked separately |
| `pack_store` | Packing and factory frozen storage | required | Always included through the declared factory-gate storage period | Foreground packing and cold storage | 1 kg net frozen fish fillet at facility gate |

### Process: Receiving, filleting, trimming, and washing (`prepare_fillets`)

#### Inputs

##### Product flows

###### Food-grade source fish (`source_fish_input`)

Record the received species-specific fish input, including its preservation state and linked upstream production and inbound-transport datasets.

- Selected flow: Food-grade fish, species- and origin-specific (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured accepted lot mass entering filleting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxs-190-1995`; `codex-cxc-52-2003`
- Range: Provisional source-fish input QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg net frozen fish fillet
  - Basis: source fish input per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation and washing water (`preparation_water`)

Record potable or otherwise food-safe water supplied for washing fish, fillets, equipment-contact carryover, and related preparation uses that cross the process boundary.

- Selected flow: Process water, food-contact quality (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance water supplied to the preparation step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fillet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxs-190-1995`; `codex-cxc-52-2003`
- Range: Provisional preparation-water QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg prepared fillet
  - Basis: water supplied per prepared fillet output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record metered electricity for receiving, conveyors, cutting, skinning, deboning, washing, and preparation-area refrigeration allocated to this step.

- Selected flow: Electricity, facility supply mix (UUID pending exact Tiangong review)
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment load and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fillet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg prepared fillet
  - Basis: electricity per prepared fillet output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste enters this process as a required foreground input.

##### Elementary flows

No elementary input is prescribed; water and energy carriers are technosphere product inputs.

#### Outputs

##### Product flows

###### Prepared fish fillets (`prepared_fillets_output`)

Measure edible fillets transferred to freezing after trimming, washing, and any declared skinning or deboning.

- Selected flow: Prepared fish fillets, not yet frozen (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured prepared fillet wet mass leaving the step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted source fish input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxs-190-1995`; `codex-cxc-52-2003`
- Range: Provisional prepared-fillet yield QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 1
  - Unit: kg/kg accepted source fish
  - Basis: prepared fillet wet mass per accepted source fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Edible or marketable fish co-products (`fish_coproducts`)

Record separately measured edible portions or other marketable fish materials that leave the foreground system as co-products rather than wastes.

- Selected flow: Species-specific fish co-product by declared use (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured co-product mass by destination and marketable product class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted source fish input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `eu-pef-2021-2279`
- Range: Provisional co-product mass QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg/kg accepted source fish
  - Basis: separately marketed co-product wet mass per accepted source fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Fish residues and rejects (`fish_residues`)

Record heads, frames, skin, bones, trimmings, rejected fish, and spoiled material by destination when they are not classified as co-products.

- Selected flow: Fish processing residue or waste by destination (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass of residues and rejects leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted source fish input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxc-52-2003`
- Range: Provisional fish-residue QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg/kg accepted source fish
  - Basis: fish residue wet mass per accepted source fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, including entrained solids where measured separately from fish residues.

- Selected flow: Fish-processing wastewater (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured discharge volume converted using measured or documented density, with separately measured solids reported
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fillet output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-wastewater QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg prepared fillet
  - Basis: wastewater discharge per prepared fillet output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary output is prescribed; report measured direct releases separately when present.

### Process: Quick freezing and optional glazing (`quick_freeze_glaze`)

#### Inputs

##### Product flows

###### Prepared fillets transferred to freezing (`prepared_fillets_input`)

Carry forward the measured prepared fillet mass from `prepare_fillets` without creating a second upstream burden.

- Selected flow: Prepared fish fillets, not yet frozen (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: equals measured `prepared_fillets_output` transferred to this process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxs-190-1995`; `codex-cxc-52-2003`
- Range: Provisional prepared-fillet input QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg net frozen fish fillet
  - Basis: prepared fillet input per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing electricity (`freezing_electricity`)

Record metered electricity for freezers, pumps, fans, conveyors, defrosting, and process-area refrigeration assigned to freezing.

- Selected flow: Electricity, facility supply mix (UUID pending exact Tiangong review)
- Flow property / unit: Energy / kWh
- Amount rule: submetered freezing electricity or documented equipment load and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxs-190-1995`; `codex-cxc-52-2003`
- Range: Provisional freezing-electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg net frozen fish fillet
  - Basis: freezing electricity per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

When glazing is used, record potable water or clean seawater applied as glaze and retain it separately from net fish mass.

- Selected flow: Potable water or clean seawater for glazing (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured glazing water retained on product, determined from gross and deglazed net mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxs-190-1995`
- Range: Provisional glaze-mass QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net frozen fish fillet
  - Basis: retained glaze mass per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste enters this process as a required foreground input.

##### Elementary flows

No elementary input is prescribed; electricity and water are technosphere product inputs.

#### Outputs

##### Product flows

###### Frozen fillets transferred to packing (`frozen_fillets_intermediate`)

Record frozen fillet mass after thermal stabilization, with retained glaze tracked separately.

- Selected flow: Frozen fish fillets, unpacked intermediate (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured frozen gross mass minus separately determined glaze mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxs-190-1995`
- Range: Provisional freezing-stage net-yield QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg net frozen fish fillet
  - Basis: unpacked net frozen fillet transferred per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Glazing and defrost wastewater (`freezing_wastewater`)

Record water discharged from glazing, freezer defrost, and cleaning assigned to this process.

- Selected flow: Fish-processing wastewater (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured discharge volume converted using measured or documented density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional freezing-wastewater QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg net frozen fish fillet
  - Basis: freezing-stage wastewater per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant released during freezing (`freezing_refrigerant_loss`)

Calculate direct refrigerant emissions from inventory change, purchases, recovery, and transfers for equipment serving the freezing process.

- Selected flow: Refrigerant substance, chemical-specific emission to air (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: opening charge plus additions minus recovered, transferred, and closing charge, allocated to freezing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional refrigerant-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net frozen fish fillet
  - Basis: chemical-specific refrigerant loss per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packing and factory frozen storage (`pack_store`)

#### Inputs

##### Product flows

###### Frozen fillets transferred to packing (`frozen_fillets_input`)

Carry forward frozen net fillet and separately tracked glaze mass from `quick_freeze_glaze` without duplicating upstream burdens.

- Selected flow: Frozen fish fillets, unpacked intermediate (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: equals `frozen_fillets_intermediate` transferred to packing, with glaze mass separate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxs-190-1995`
- Range: Provisional packing-input QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg net frozen fish fillet
  - Basis: unpacked net frozen fillet input per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and allocated tertiary packaging by material type, including liners, cartons, films, labels, and pallets where applicable.

- Selected flow: Packaging material, material-specific (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: purchased packaging issued minus returned unused packaging, by material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-mass QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kg/kg net frozen fish fillet
  - Basis: total packaging material input per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-storage electricity (`storage_electricity`)

Record electricity for packing equipment, cold rooms, fans, pumps, lighting, and defrosting over the declared factory storage period.

- Selected flow: Electricity, facility supply mix (UUID pending exact Tiangong review)
- Flow property / unit: Energy / kWh
- Amount rule: submetered packing and cold-storage electricity allocated by measured use, time, and occupied capacity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxs-190-1995`; `codex-cxc-52-2003`
- Range: Provisional storage-electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net frozen fish fillet
  - Basis: packing and factory-storage electricity per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste enters this process as a required foreground input.

##### Elementary flows

No elementary input is prescribed; electricity and packaging are technosphere product inputs.

#### Outputs

##### Product flows

###### Packed frozen fish fillets (`reference_product_output`)

This is the quantitative reference output; net fish mass excludes glaze and packaging.

- Selected flow: Frozen Fish `130aa38f-8c63-4d0b-ad05-0b2c4426cdd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net fish fillet mass at facility gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-190-1995`
- Range: Reference-flow identity range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: net fish mass excluding glaze and packaging
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `codex-cxs-190-1995`

##### Waste flows

###### Packaging waste and damaged product packs (`packaging_waste`)

Record packaging scrap, damaged packs, and rejected packed product by material and destination without netting them from purchased packaging inputs.

- Selected flow: Packaging waste, material-specific (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured packaging and damaged-pack waste leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-waste QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net frozen fish fillet
  - Basis: packaging and damaged-pack waste per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant released during frozen storage (`storage_refrigerant_loss`)

Calculate direct chemical-specific refrigerant emissions from equipment serving packing and frozen storage.

- Selected flow: Refrigerant substance, chemical-specific emission to air (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: opening charge plus additions minus recovered, transferred, and closing charge, allocated to packing and storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish fillet at facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional storage-refrigerant-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net frozen fish fillet
  - Basis: chemical-specific refrigerant loss per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared preparation, freezing, packing, and storage operations | Avoid allocation where possible by submetering and subdividing operations, lots, equipment, and storage periods so inputs and outputs are directly assigned to the frozen fillet product. | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | Unresolved multifunctional processes | When subdivision or system expansion is not practicable, apply a documented causal physical relationship; for jointly processed fish outputs with no stronger causal parameter, use wet mass measured at the separation point and test sensitivity to dry matter or another functionally relevant property. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | Co-products lacking a defensible physical relationship | Use economic allocation only when no defensible physical relationship can be established; use representative annual average net prices at the same market boundary and disclose price sources, period, currency, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste_no_credit` | Fish residues, wastewater, packaging waste, and rejected product | Do not assign co-product credit to material classified and managed as waste. Include treatment burdens and report any system-expansion or avoided-product credit separately with the substituted function and dataset disclosed. | `eu-pef-2021-2279` |
| `allocation_mass_reconciliation` | All co-products and wastes | Preserve the unallocated wet-mass balance before applying allocation and report allocation factors that sum to one across burden-bearing products. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_identity` | `prepare_fillets`; `quick_freeze_glaze`; `pack_store` | Fish inputs, intermediates, product, co-products, residues, glaze | Weighbridge, scale, batch, and product-specification records | lot_id; species; origin; production_system; preservation_state; gross_mass; tare_mass; glaze_mass; net_fish_mass; co_product_mass; residue_mass; destination | Calibrated scales with linked lot and transfer records; verified deglazing or equivalent method for glaze | kg | Each lot and transfer | At least 12 consecutive representative months or the full seasonal campaign | Each included processing site and relevant line | Sum valid masses by lot and process; reconcile transfers; normalize to accepted net reference product | Calibration certificates; lot traceability; product specification; deglazing method; reconciliation log |
| `cp_water_records` | `prepare_fillets`; `quick_freeze_glaze` | Preparation and glazing water | Meter, tank, and batch records | meter_id; opening_reading; closing_reading; batch_volume; water_source; food_contact_quality; allocation_key | Submetered supply or documented tank balance linked to operating period | kg or m3 | Daily and each glazing lot | Same representative period as production | Each included site and water system | Convert volume using measured or documented density; subtract documented non-process use; normalize to process output | Meter checks; potable or clean-seawater verification; batch records |
| `cp_energy_records` | `prepare_fillets`; `quick_freeze_glaze`; `pack_store` | Electricity and fuels | Meter, invoice, equipment-runtime, and storage-occupancy records | meter_id; opening_reading; closing_reading; fuel_quantity; unit; equipment_power; operating_hours; storage_days; occupied_capacity; allocation_key | Submeter first; otherwise reconcile invoices with documented equipment load, runtime, and occupied capacity | kWh, MJ, or purchased fuel unit | Monthly plus batch or shift submetering where available | At least 12 consecutive representative months or full seasonal campaign | Each included site, line, freezer, and cold room | Assign direct meters; allocate residual shared use by documented physical driver; normalize to process output | Meter calibration; invoices; runtime logs; allocation worksheet; energy balance |
| `cp_wastewater_records` | `prepare_fillets`; `quick_freeze_glaze` | Wastewater and entrained solids | Effluent meter, tank, sampling, and treatment records | discharge_volume; density; solids_mass; treatment_route; sampling_time; process_assignment | Meter or tank balance with representative sampling and treatment-route records | kg or m3 | Daily or per discharge event | Same representative period as production | Each included discharge point | Convert volume to mass; keep separately measured solids distinct; normalize to process output | Meter checks; laboratory reports; discharge and treatment manifests |
| `cp_refrigerant_records` | `quick_freeze_glaze`; `pack_store` | Chemical-specific refrigerant loss | Equipment charge, purchase, service, recovery, and transfer records | refrigerant_id; opening_charge; additions; recovered; transferred; closing_charge; equipment_service | Annual or campaign inventory balance by refrigerant and equipment group | kg | Each service event and annual close | At least one complete inventory balance covering the production period | Each included freezer and cold-storage equipment group | Loss = opening + additions - recovered - transferred - closing; allocate by equipment service or documented cooling load | Service invoices; cylinder logs; recovery records; inventory sign-off |
| `cp_packaging_records` | `pack_store` | Packaging input and waste | Purchase, issue, bill-of-material, return, and scrap records | material_id; material_type; purchased_mass; issued_mass; returned_mass; scrap_mass; packs_produced; pallet_reuse_cycles | Mass reconciliation by packaging material and product format | kg | Each packaging run, aggregated monthly | Same representative period as production | Each included packing line and product format | Net input = issued - returned; keep scrap output separate; allocate reusable tertiary packaging by verified use cycles | Supplier specification; purchase records; stock reconciliation; scrap tickets |
| `cp_temperature_records` | `quick_freeze_glaze`; `pack_store` | Freezing endpoint and frozen storage | Calibrated probe and cold-room logger records | lot_id; probe_id; thermal_centre_temperature; stabilization_time; room_temperature; timestamp; excursion_action | Product-core measurements at validated locations plus continuous or justified interval storage logging | °C | Each lot at freezing completion; continuous or justified interval for storage | Entire included production and storage period | Each freezer, lot, and cold room | Retain lot minimum/maximum and excursion duration; link corrective action to affected lot | Calibration certificate; validation study; logger record; excursion and corrective-action log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | Normalized amount = valid foreground amount / net frozen fish fillet mass at facility gate | Valid flow amount; `net_fish_mass` excluding glaze and packaging | Amount per 1 kg reference flow | `codex-cxs-190-1995` |
| `calc_net_fish_mass` | Glazed products | Net fish mass = gross frozen product mass - verified glaze mass; packaging is excluded from both product masses | `gross_mass`; `glaze_mass`; packaging tare | `net_fish_mass` | `codex-cxs-190-1995` |
| `calc_process_mass_balance` | `prepare_fillets` and `quick_freeze_glaze` | Mass-balance difference = accepted material inputs - separately measured product, co-product, waste, retained glaze, and discharged material outputs; investigate material unexplained differences | Lot masses; water retained where relevant; product, co-product, residue, wastewater-solid, and glaze masses | Reconciled mass-balance record and unexplained difference | `codex-cxc-52-2003` |
| `calc_refrigerant_loss` | Freezing and storage equipment | Refrigerant loss = opening charge + additions - recovered - transferred - closing charge | Chemical-specific equipment inventory fields | kg refrigerant emitted, allocated to process output | `eu-pef-2021-2279` |
| `calc_physical_allocation` | Joint products | Allocation factor_i = selected causal physical quantity_i / sum of that quantity for all burden-bearing products | Measured quantities at separation point; selected physical property | Product-specific allocation factors summing to one | `eu-pef-2021-2279` |
| `calc_economic_allocation` | Economic fallback | Allocation factor_i = representative net market value_i / sum of net market values for all burden-bearing co-products at the same boundary | Annual average prices; measured co-product quantities | Economic allocation factors summing to one | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Source fish and product lots | Preserve species, wild-caught or aquaculture production system, origin, supplier, receipt state, lot links, presentation, skin/bone status, glaze status, and product destination. | Supplier specification, receiving record, lot genealogy, product label |
| `dq_temporal_representativeness` | All foreground flows | Cover at least 12 consecutive representative months or the complete seasonal production campaign; disclose shutdowns, missing periods, and extrapolation. | Dated meter, batch, invoice, service, and production records |
| `dq_site_coverage` | Multi-site datasets | Include every site represented by the dataset or report production-weighted coverage and excluded sites; do not silently extrapolate one site to another. | Site list, production totals, coverage calculation |
| `dq_measurement_control` | Mass, energy, water, refrigerant, and temperature | Use calibrated or verified instruments, retain units and conversion factors, and document estimates used when direct metering is unavailable. | Calibration certificates, meter checks, conversion worksheet, estimation rationale |
| `dq_mass_completeness` | Fish, co-products, residues, glaze, and packaging | Reconcile all major material inputs and outputs and investigate unexplained differences; preserve waste and co-product destinations. | Process mass balance, stock reconciliation, waste manifests, sales records |
| `dq_food_safety_quality` | Finished product | Demonstrate suitable source-fish quality, food-contact water quality, freezing endpoint, frozen-storage control, net mass exclusive of glaze, and applicable lot-acceptance checks. | HACCP or food-safety plan, water test, temperature logs, net-content test, inspection record |
| `dq_upstream_dataset_fit` | Source fish and purchased inputs | Document geography, technology, time period, production system, and proxy limitations for each material upstream dataset. | Dataset metadata and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require exactly 1 kg net fish fillet mass linked to product flow `130aa38f-8c63-4d0b-ad05-0b2c4426cdd8`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `codex-cxs-190-1995` |
| `validate_required_qualifiers` | Dataset metadata | Fail completeness when species, production system and origin, fillet presentation, skin/bone status, glazing status and mass, freezing technology, processing location, storage duration, or net-mass basis is missing. | `codex-cxs-190-1995`; `codex-cxc-52-2003` |
| `validate_freezing_endpoint` | Each finished-product lot | Require evidence that the thermal centre reached -18 °C or colder after stabilization and that the product remained frozen during the included storage period; flag unassessed excursions. | `codex-cxs-190-1995` |
| `validate_glaze_exclusion` | Glazed products | Require separately measured glaze and confirm that declared net fish mass excludes glaze and packaging. | `codex-cxs-190-1995` |
| `validate_process_coverage` | Foreground inventory | Require receiving/preparation, filleting/trimming/washing, quick freezing, optional glazing when used, packing, factory frozen storage, co-product and waste handling, wastewater, energy, and refrigerant records or explicit justified zero/not-applicable declarations. | `codex-cxs-190-1995`; `codex-cxc-52-2003` |
| `validate_mass_balance` | Each aggregation period | Require accepted source fish and other retained material inputs to reconcile with net product, co-products, residues, glaze, wastewater solids, and stock change; report the unexplained difference and corrective action rather than silently balancing it. | `codex-cxc-52-2003` |
| `validate_allocation` | Multifunctional processes | Require documented subdivision attempt, selected physical relationship or justified economic fallback, allocation factors summing to one, and sensitivity disclosure where the method could materially change results. | `eu-pef-2021-2279` |
| `validate_temporal_site_coverage` | Foreground dataset | Require the declared representative period and site coverage, with missing periods, excluded sites, and extrapolation disclosed. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | Candidate QA ranges | Treat every `reasoned_estimate` range only as a screening flag; do not replace foreground records with the range and require review or replacement before publication-critical use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground frozen-fish-fillet production dataset normalized to 1 kg net product at the processing-facility gate |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for food-product LCAs when species, origin, production system, geography, technology, storage duration, allocation, and data quality fit the study |
| allowed_use | Cradle-to-gate or downstream product systems that need a transparent frozen fish fillet input and preserve the declared upstream source-fish datasets and qualifiers |
| excluded_use | Direct representation of fresh fish, minced fish, breaded/battered products, smoked/dried/salted/canned/cooked products, retail or consumer stages, or another species/origin/technology without a documented representativeness assessment |
| required_metadata | PCR id and version; product flow UUID; species; wild-caught or aquaculture production system; source origin; upstream datasets; fillet presentation; skin/bone and glaze status; net-mass method; processing site; freezing technology; storage duration; electricity mix; refrigerant; co-product destinations; allocation method; reference period |
| required_quality_disclosure | Site and temporal coverage; mass-balance difference; meter and scale quality; temperature and food-safety evidence; source-data gaps; proxy datasets; provisional estimates; allocation sensitivity; excluded stages |
| update_trigger | Material change in species or source-fish production system, filleting yield, freezing or glazing technology, packaging, electricity mix, refrigerant, storage duration, co-product market, allocation basis, site coverage, food-safety requirement, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius Commission. CXS 190-1995, Standard for Quick-Frozen Fish Fillets, amended 2024 and redesigned 2026. https://openknowledge.fao.org/handle/20.500.14283/ce0070en (retrieved 2026-08-11) | Product scope and definition; quick-freezing endpoint; deep-frozen handling; glazing-water quality; net contents excluding glaze; labelling, sampling, defects, and lot acceptance |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius Commission. CXC 52-2003, Code of Practice for Fish and Fishery Products, 2019 edition. https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf (retrieved 2026-08-11) | Fish-processing step decomposition; hygienic handling; water, temperature, traceability, process control, waste, and cold-chain data requirements |
| `eu-pef-2021-2279` | `official_guidance` | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. CELEX 32021H2279. https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Life-cycle boundary completeness; multifunctionality hierarchy of subdivision/system expansion, physical relationship, and economic fallback; upstream dataset and allocation disclosure |
