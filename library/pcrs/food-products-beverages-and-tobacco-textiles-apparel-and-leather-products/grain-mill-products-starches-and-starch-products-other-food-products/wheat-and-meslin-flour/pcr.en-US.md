---
schema_version: 1
pcr_id: "pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wheat-and-meslin-flour"
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wheat and meslin flour

## 1. Scope and Applicability

This PCR covers the foreground production of food-grade wheat flour and meslin flour at a flour mill. Meslin is a wheat-and-rye mixture; the grain shares must be declared. The foreground starts with received food-grade milling grain and ends with finished flour at the mill gate, including cleaning, tempering, milling, separation, blending or finishing, storage, and packaging or bulk dispatch when performed by the reporting mill.

The record is applicable to refined, straight-grade, high-extraction, and wholemeal products only when the dataset explicitly declares the flour grade, extraction basis, composition, moisture basis, additives, and packaging state. Codex CXS 152 requirements are applied only to common-wheat or club-wheat flour within that standard's stated scope. Durum semolina and groats, flour of cereals other than wheat or meslin, isolated starch or gluten, prepared mixes or doughs, and bakery products are excluded.

This PCR supports plant-specific foreground data packages and mill-gate secondary datasets. It does not provide a default inventory. Site measurements and supplier-specific linked datasets take precedence over the screening ranges in this document.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wheat-and-meslin-flour |
| classification_refs | CPC 3.0 `23110`, Wheat and meslin flour, exact category context |
| covered_products | Food-grade flour made from wheat or meslin and sold at the mill gate, with declared grade, extraction basis, and composition |
| excluded_products | Durum semolina or groats; other cereal flours; isolated starch or gluten; prepared mixes or doughs; bakery products; non-food milling products |
| representative_product | Conventional refined wheat flour in bulk or declared packaging at the mill gate |
| production_route | Grain receipt and cleaning; conditioning or tempering; roller or equivalent milling and fractionation; blending or finishing; storage and bulk dispatch or packaging |
| market_state | Finished food-grade flour, as-produced, at the mill gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Wheat flour or meslin flour meeting the declared commercial specification |
| How much | 1 kg as-produced finished flour at the mill gate |
| How well | Food-grade; declared grain composition, flour grade or extraction basis, moisture, additives or fortification, and packaging state |
| How long or cycle | One representative production batch or campaign, including storage until transfer at the mill gate |
| reference_flow_link | The quantitative reference is 1 kg of the selected Tiangong product flow output from `blending_finishing_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg as-produced finished flour |
| Reference product flow | Wheat and meslin flour `2e07a69d-fe87-4f0f-9d12-b50ecdb9d8b4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wheat or meslin identity and wheat/rye shares; species or grain class where relevant; refined, straight-grade, high-extraction, or wholemeal designation; extraction-rate basis; as-produced flour moisture; additive, fortification, bleaching, or treatment status; bulk or packaged state and packaging bill of materials; plant geography and technology; applicable food specification |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference flour output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Set the quantitative reference to exactly 1 kg of as-produced finished flour at the mill gate. |
| `as_produced_moisture` | grain, intermediate, flour, and co-product masses | Mass | kg and mass % moisture | Record weighed mass and moisture on the same lot and time basis; do not mix as-produced and dry-matter quantities without conversion. |
| `dry_matter_conversion` | any dry-basis comparison | Mass | kg dry matter | Calculate dry matter as as-produced mass multiplied by `(1 - moisture_fraction)` and retain the measured moisture result. |
| `extraction_rate` | finished flour yield | Mass | % | Calculate extraction rate as finished flour mass divided by clean conditioned grain entering the first break, multiplied by 100; state whether the result covers straight-grade flour only or all flour streams. |
| `energy_conversion` | purchased electricity and fuels | Energy | kWh and MJ | Preserve the metered carrier unit and convert only with documented factors; use 1 kWh = 3.6 MJ for final-energy conversion. |
| `packaging_mass` | packaging supplied with product | Mass | kg | Record each packaging material by actual bill-of-material mass per 1 kg flour; enter zero only for verified bulk dispatch. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Food-grade wheat, rye, or meslin grain received at the reporting mill, with origin, moisture, quality class, transport boundary, and mass basis declared |
| starting_condition_role | Upstream product input to the mill-gate foreground system |
| product_classification_scope | CPC 3.0 `23110` finished wheat and meslin flour; upstream grain and co-products remain separately classified products |
| recursive_input_rule | A purchased input already classified as wheat or meslin flour must remain a linked upstream product dataset and must not be expanded through this PCR inside the same foreground system. Reworked flour generated within the reporting mill is an internal flow and must be identified separately. |
| upstream_dataset_requirement | Link grain production, grain drying or storage before receipt, inbound transport, electricity, fuels, water supply, ingredients, packaging production, and waste treatment to geographically and technologically appropriate upstream datasets. |
| disclosure | Declare whether the dataset starts at grain receipt or includes any upstream operation; list excluded on-site operations, outsourced milling stages, co-product treatment, packaging state, dust-control coverage, and cut-offs. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | mandatory_foreground_operations | Include receiving and cleaning, conditioning or tempering, milling and fractionation, flour blending or finishing, storage, and mill-gate dispatch when performed by the reporting mill. | `us-epa-ap42-wheat-milling-2003`; `epd-pcr-grain-mill-products-2013-04` |
| `boundary_rule_2` | conditional_foreground_operations | Include packaging, fortification, bleaching, drying, on-site utilities, wastewater handling, and dust collection when they occur for the represented product; otherwise document their absence. | `codex-cxs-152-2023`; `us-epa-ap42-wheat-milling-2003` |
| `boundary_rule_3` | upstream_and_downstream_links | Model upstream supplies and treatments as linked datasets and exclude distribution after the mill gate, flour use, baking, consumption, and end-of-life from the foreground inventory. | `eu-pef-method-2021` |
| `boundary_rule_4` | cutoff_and_recursive_inputs | Do not omit a material or energy flow merely because no UUID is available; retain a semantic row and resolve or disclose the link before publication. Prevent recursive expansion of purchased flour inputs. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `grain_receiving_cleaning` | Grain receiving, storage, and cleaning | required | Always for received milling grain | foreground preprocessing | kg clean grain released to tempering |
| `conditioning_tempering` | Conditioning and tempering | required | Always when water or holding time is used before milling | foreground preparation | kg conditioned grain released to milling |
| `milling_fractionation` | Milling, sifting, purification, and fractionation | required | Always | foreground conversion | kg unblended flour produced |
| `blending_finishing_packaging` | Blending, finishing, storage, and dispatch | required | Always; packaging inputs are conditional on packaged sale | final foreground process | 1 kg finished flour at the mill gate |

### Process: Grain receiving, storage, and cleaning (`grain_receiving_cleaning`)

#### Inputs

##### Product flows

###### Food-grade milling grain (`received_milling_grain`)

Record wheat and rye or pre-mixed meslin received for the represented flour. No Tiangong input UUID is prescribed until a food-grade grain flow with correct classification and reference property is confirmed.

- Selected flow: Food-grade wheat or meslin milling grain
- Flow property / unit: Mass / kg
- Amount rule: Weighed received mass assigned to accepted production lots, corrected only through the explicit moisture rule
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grain_lot_mass_quality`
- Sources: `usda-ars-soft-wheat-milling-methods`

###### Receiving and cleaning energy (`receiving_cleaning_energy`)

Record metered electricity and fuels for conveying, aspiration, separation, storage, and cleaning; allocate shared meters using documented operating records.

- Selected flow: Purchased electricity and fuels by actual carrier and supplier geography
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered consumption less unrelated loads, normalized to accepted clean grain or finished flour
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `us-epa-ap42-wheat-milling-2003`

##### Waste flows

###### Rejected screenings and cleaning residues (`cleaning_residues`)

Record stones, foreign material, rejected grain, and other cleaning residues by measured destination and classification; saleable animal-feed outputs are product co-products, not waste.

- Selected flow: Cleaning residues by actual treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or reconciled residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_balance`
- Sources: `us-epa-ap42-wheat-milling-2003`

##### Elementary flows

Record no particulate elementary flow here unless an air-compartment flow and a measured or permitted release basis are available. Captured material sent to treatment is a waste or product flow, not an elementary emission.

#### Outputs

##### Product flows

###### Cleaned milling grain (`cleaned_grain_internal`)

Transfer cleaned grain as an internal foreground flow with lot identity and moisture preserved.

- Selected flow: Cleaned milling grain, internal flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balance-reconciled clean grain released to tempering
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg clean grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grain_lot_mass_quality`
- Sources: `us-epa-ap42-wheat-milling-2003`

##### Waste flows

No additional waste output is required beyond `cleaning_residues`; identify any separately managed waste as its own stable row.

##### Elementary flows

No default elementary output is prescribed.

### Process: Conditioning and tempering (`conditioning_tempering`)

#### Inputs

##### Product flows

###### Cleaned grain from receiving (`cleaned_grain_input`)

Carry the internal cleaned-grain lot into conditioning without duplicating its upstream burden.

- Selected flow: Cleaned milling grain, internal flow
- Flow property / unit: Mass / kg
- Amount rule: Equal to the transferred output from `cleaned_grain_internal`, subject to documented storage change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tempering_water_moisture`
- Sources: `usda-ars-soft-wheat-milling-methods`

###### Tempering water (`tempering_water`)

Record actual water added to reach the declared target moisture and include losses or recirculation separately when material.

- Selected flow: Process water appropriate to the plant supply
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-dosed water addition reconciled against before-and-after grain mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tempering_water_moisture`
- Sources: `usda-ars-soft-wheat-milling-methods`

###### Tempering energy (`tempering_energy`)

Record metered conveying, water preparation, and conditioning energy where separable from other mill loads.

- Selected flow: Purchased electricity and fuels by actual carrier and supplier geography
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `us-epa-ap42-wheat-milling-2003`

##### Waste flows

Record drained or rejected water only when it leaves the process as a managed waste flow.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Conditioned grain (`conditioned_grain_internal`)

Transfer conditioned grain to milling with measured moisture and tempering time.

- Selected flow: Conditioned wheat or meslin grain, internal flow
- Flow property / unit: Mass / kg
- Amount rule: Measured conditioned-grain mass after water addition and holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned grain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tempering_water_moisture`
- Sources: `usda-ars-soft-wheat-milling-methods`

##### Waste flows

No default waste output is prescribed.

##### Elementary flows

No default elementary output is prescribed.

### Process: Milling, sifting, purification, and fractionation (`milling_fractionation`)

#### Inputs

##### Product flows

###### Conditioned grain to first break (`conditioned_grain_input`)

Use the transferred conditioned-grain mass as the extraction-rate denominator and retain its measured moisture.

- Selected flow: Conditioned wheat or meslin grain, internal flow
- Flow property / unit: Mass / kg
- Amount rule: Equal to the transferred output from `conditioned_grain_internal`, less separately measured handling loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_balance`
- Sources: `usda-ars-soft-wheat-milling-methods`

###### Milling energy (`milling_energy`)

Record electricity and other mill energy for break and reduction rolls, sifters, purifiers, pneumatic conveying, and dust collection.

- Selected flow: Purchased electricity and fuels by actual carrier and supplier geography
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered milling-stage energy normalized to finished flour; use the range only as a screen, never as a default value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `odunfa-joel-flour-milling-energy-2022`
- Range: Literature screening range for milling-stage energy intensity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.18749
  - Upper: 0.28037
  - Unit: MJ
  - Basis: per 1 kg flour output; values converted from 187.49 to 280.37 MJ per tonne reported for two mills
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `odunfa-joel-flour-milling-energy-2022`

##### Waste flows

###### Captured milling dust and non-saleable residue (`captured_milling_dust`)

Record captured dust and non-saleable residue by measured mass and treatment. Do not use a feed-grade or otherwise qualified database flow unless it matches the actual material.

- Selected flow: Captured milling dust or residue by actual treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed collection or reconciled dust-control record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_and_air_records`
- Sources: `us-epa-ap42-wheat-milling-2003`

##### Elementary flows

###### Particulate matter released to air (`particulate_to_air`)

Record only measured, permitted, or otherwise supported releases after control, using a Tiangong elementary flow with the correct air compartment and particle-size definition.

- Selected flow: Compartment-specific particulate matter to air, unresolved UUID
- Flow property / unit: Mass / kg
- Amount rule: Stack or permit result after control, or a documented site-specific factor multiplied by throughput
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_and_air_records`
- Sources: `us-epa-ap42-wheat-milling-2003`

#### Outputs

##### Product flows

###### Unblended flour streams (`unblended_flour_internal`)

Record all flour streams sent to blending or finishing and distinguish any stream sold directly.

- Selected flow: Unblended wheat or meslin flour, internal flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed flour output by stream and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_balance`
- Sources: `asb-extraction-rate`; `usda-ars-soft-wheat-milling-methods`
- Range: Typical efficient conventional refined-flour extraction screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 72
  - Upper: 76
  - Unit: percent
  - Basis: finished conventional refined flour divided by clean conditioned grain entering first break; not applicable as a limit for wholemeal or product-specific high-extraction routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `asb-extraction-rate`

###### Saleable bran, germ, middlings, and other fractions (`milling_coproducts`)

Record each saleable fraction as a product co-product with its actual name, moisture, quantity, destination, and unresolved or verified flow identity.

- Selected flow: Saleable milling fractions by actual product identity
- Flow property / unit: Mass / kg
- Amount rule: Weighed output by fraction and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_balance`
- Sources: `us-epa-ap42-wheat-milling-2003`

##### Waste flows

Captured dust is recorded under `captured_milling_dust`; add any other non-saleable fraction as a separate row.

##### Elementary flows

Particulate releases are recorded under `particulate_to_air`; add only supported compartment-specific releases.

### Process: Blending, finishing, storage, and dispatch (`blending_finishing_packaging`)

#### Inputs

##### Product flows

###### Flour streams for final blend (`flour_streams_input`)

Transfer measured flour streams without duplicating their upstream burden.

- Selected flow: Unblended wheat or meslin flour, internal flow
- Flow property / unit: Mass / kg
- Amount rule: Sum of transferred flour streams assigned to the represented product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass_balance`
- Sources: `codex-cxs-152-2023`

###### Ingredients, fortificants, and processing aids (`ingredients_additives`)

Record only materials actually added and distinguish retained ingredients from processing aids and unintentional carryover.

- Selected flow: Actual ingredient, fortificant, or processing-aid product flows
- Flow property / unit: Mass / kg
- Amount rule: Batch-sheet or dosing-system quantity assigned to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blend_pack_dispatch`
- Sources: `codex-cxs-152-2023`

###### Packaging materials (`packaging_materials`)

Record the actual primary, secondary, and tertiary packaging supplied with the product; omit only for verified bulk dispatch.

- Selected flow: Packaging material flows matching the bill of materials
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued packaging less verified losses, divided by packaged flour output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blend_pack_dispatch`
- Sources: `codex-cxs-152-2023`

###### Blending, storage, and dispatch energy (`finishing_energy`)

Record metered energy for blending, pneumatic transfer, storage, packing, and load-out.

- Selected flow: Purchased electricity and fuels by actual carrier and supplier geography
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `us-epa-ap42-wheat-milling-2003`

##### Waste flows

Record off-spec flour, packaging waste, and cleaning waste by measured destination; internally reworked flour remains an internal product flow.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Finished wheat or meslin flour (`finished_flour_reference`)

This output carries the quantitative reference and all required product qualifiers.

- Selected flow: Wheat and meslin flour `2e07a69d-fe87-4f0f-9d12-b50ecdb9d8b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg as-produced released finished flour at the mill gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg finished flour at the mill gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_blend_pack_dispatch`
- Sources: `codex-cxs-152-2023`

##### Waste flows

Record off-spec product or packaging waste only when it leaves the foreground system for treatment.

##### Elementary flows

No default elementary output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | process_subdivision | Avoid allocation by separately metering cleaning, tempering, milling, blending, packaging, and independently operated product lines wherever technically possible. | `eu-pef-method-2021` |
| `allocation_rule_2` | joint_milling_inventory | Before allocation, keep flour, bran, germ, middlings, and other saleable fractions in one reconciled joint mass balance; do not classify a saleable co-product as waste solely to avoid allocation. | `eu-pef-method-2021`; `us-epa-ap42-wheat-milling-2003` |
| `allocation_rule_3` | multifunctionality_hierarchy | Where subdivision cannot resolve multifunctionality, apply system expansion or substitution when a defensible displaced function is documented; otherwise use a relevant physical causal relationship, and use another relationship such as economic allocation only when physical causality cannot be established. | `eu-pef-method-2021` |
| `allocation_rule_4` | allocation_disclosure | Report the selected method, allocation factors, quantities, moisture basis, price geography and averaging period if economic allocation is used, and a sensitivity result for any material choice. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_grain_lot_mass_quality` | `grain_receiving_cleaning` | received grain and clean grain | weighbridge, intake, and laboratory records | lot id; supplier; species; wheat/rye shares; gross and net mass; moisture; quality class; rejection | Calibrated scale plus representative moisture and quality sampling | kg; mass % | each lot | all lots in representative period | reporting mill | Sum accepted lot masses; preserve lot-weighted moisture and composition | calibration, sampling, and acceptance records |
| `cp_tempering_water_moisture` | `conditioning_tempering` | cleaned grain, water, conditioned grain | batch and laboratory records | batch id; before and after grain mass; before and after moisture; added water; hold time | Calibrated dosing meter or batch addition plus moisture test | kg; mass %; h | each batch or shift | representative campaigns and seasons | reporting mill | Reconcile water addition and moisture change by batch, then mass-weight | meter checks, moisture method, batch reconciliation |
| `cp_process_energy` | all foreground processes | electricity and fuel | meter, invoice, runtime, and equipment records | meter id; start and end reading; carrier; equipment hours; production quantity; allocation driver | Submeter preferred; otherwise documented shared-meter allocation | kWh; MJ; carrier unit | continuous or each shift; monthly invoice reconciliation | at least 12 representative months where seasonality is material | reporting mill | Subtract unrelated loads, convert documented units, and normalize to released flour | meter calibration, invoices, runtime logs, reconciliation |
| `cp_output_mass_balance` | `grain_receiving_cleaning`; `milling_fractionation`; `blending_finishing_packaging` | flour, co-products, residues, and transfers | production, silo, bagging, dispatch, and waste records | input and output masses; moisture; stream identity; destination; rework; stock change | Calibrated scales and inventory reconciliation | kg; mass % | each batch or shift | representative production period including stock opening and closing | reporting mill | Sum by stream, account for stock change, and reconcile on as-produced and dry-matter bases | scale calibration, silo reconciliation, signed dispatch or waste records |
| `cp_dust_and_air_records` | `grain_receiving_cleaning`; `milling_fractionation` | captured dust and particulate releases | collection, stack-test, permit, and control records | source; particle fraction; compartment; control state; captured mass; released concentration; gas flow; hours | Weigh captured material and use site test or permit data for releases | kg; mg/m3; m3; h | each collection event and test; operating-period reconciliation | representative operating period | all relevant emission points | Keep captured material separate from released elementary flows and aggregate by particle fraction | test report, permit, control-operation log |
| `cp_blend_pack_dispatch` | `blending_finishing_packaging` | ingredients, packaging, finished flour | batch sheet, dosing, packaging issue, and dispatch records | formula; dose; packaging material and mass; packed or bulk quantity; product moisture; release specification | Calibrated dosing and packing equipment plus release testing | kg; mass % | each batch or product code | representative product mix | reporting mill | Attribute directly by product code; reconcile issued packaging and released output | batch approval, packaging BOM, release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | inventory normalization | Divide every attributable foreground amount by released finished-flour mass on the same as-produced basis. | attributable amount; released flour mass | amount per 1 kg finished flour |  |
| `calc_rule_2` | dry-matter balance | `dry_mass = as_produced_mass × (1 - moisture_fraction)`; apply separately to each input and output lot. | as-produced mass; measured moisture | kg dry matter | `usda-ars-soft-wheat-milling-methods` |
| `calc_rule_3` | extraction rate | `extraction_rate_percent = finished_flour_mass / clean_conditioned_grain_to_first_break × 100`; state which flour streams are included. | finished flour mass; clean conditioned grain mass | extraction rate, % | `asb-extraction-rate`; `usda-ars-soft-wheat-milling-methods` |
| `calc_rule_4` | energy conversion | `MJ = kWh × 3.6`; do not convert primary-energy literature values into electricity without a documented primary-energy factor. | metered kWh | final energy, MJ |  |
| `calc_rule_5` | process mass balance | Reconcile grain, tempering water, retained ingredients, outputs, waste, measured releases, and stock change on both as-produced and dry-matter bases; investigate unexplained differences before release. | all process inputs, outputs, moisture, and stock change | balance closure and unexplained difference | `eu-pef-method-2021` |
| `calc_rule_6` | allocation | Apply the ordered hierarchy in section 7 to the reconciled joint inventory and retain unallocated quantities and factors for audit. | joint inventory; co-product quantities; causal relation or economic data | allocated inventory per reference flow | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_req_1` | representativeness | Cover the declared technology, geography, flour grades, grain mix, and operating seasons; use at least 12 months when seasonal sourcing or mill operation materially changes results, or justify a shorter representative campaign. | production schedule, product mix, supplier and meter coverage |
| `quality_req_2` | metrology | Use calibrated mass, moisture, dosing, and energy instruments; identify estimation and shared-meter allocation separately. | calibration certificates, laboratory methods, invoices, allocation worksheets |
| `quality_req_3` | mass_balance | Close as-produced and dry-matter balances across each process and the full mill; explain stock changes, rework, evaporation, and all material residuals. | signed reconciliation with unresolved-difference review |
| `quality_req_4` | product_conformity | Record the applicable food specification. For products within CXS 152 scope, verify declared requirements including moisture not exceeding 15.5% by mass; do not apply this limit automatically outside that scope. | release certificate and cited specification |
| `quality_req_5` | source_linkage | Resolve product, energy, packaging, co-product, waste, and elementary flows to semantically correct datasets before publication; document every remaining gap without substituting a similar but incorrect UUID. | UUID review record and unresolved-flow register |
| `quality_req_6` | uncertainty | Treat extraction and energy ranges as screening evidence only; replace them with site observations and disclose range context, sample count, variation, and any outliers. | raw data summary and uncertainty statement |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | Require exactly one 1 kg as-produced finished-flour reference output using product flow `2e07a69d-fe87-4f0f-9d12-b50ecdb9d8b4`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. |  |
| `validation_rule_2` | product_identity | Require every reference-flow qualifier in section 3, including wheat/meslin composition, flour grade and extraction basis, moisture basis, treatments or additives, packaging state, geography, and applicable specification. | `codex-cxs-152-2023` |
| `validation_rule_3` | process_completeness | Require all four process ids in section 6 and a documented reason for any operation reported as not applicable or outsourced. | `us-epa-ap42-wheat-milling-2003` |
| `validation_rule_4` | mass_and_moisture_balance | Require reconciled as-produced and dry-matter balances and investigate any unexplained difference beyond the reporting mill's documented metering uncertainty. | `eu-pef-method-2021` |
| `validation_rule_5` | co_products_and_allocation | Require every saleable milling fraction, the multifunctionality hierarchy, allocation factors, and sensitivity disclosure where the allocation choice is material. | `eu-pef-method-2021` |
| `validation_rule_6` | emissions_and_waste | Reject double counting of captured dust as both waste and air emission; require an air compartment and particle-size definition for particulate elementary flows. | `us-epa-ap42-wheat-milling-2003` |
| `validation_rule_7` | source_and_uuid_integrity | Reject search snippets, invented identifiers, version-pinned UUID substitutions, or semantically mismatched flows; unresolved non-reference flows must remain explicit until a verified link is available. |  |
| `validation_rule_8` | codex_scope | For a product claiming CXS 152 conformity, require evidence that the product is within that standard's scope and verify its applicable composition, hygiene, packaging, labelling, and moisture requirements; otherwise do not make the claim. | `codex-cxs-152-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Plant-specific foreground mill-gate dataset for wheat or meslin flour production |
| downstream_use | Background input to food, feed, starch, ingredient, or other product systems where the declared flour matches the user's required specification |
| allowed_use | Comparative or non-comparative LCA after checking geography, technology, grain mix, flour grade, allocation, packaging, and temporal representativeness |
| excluded_use | Direct representation of durum semolina, other cereal flour, isolated starch or gluten, prepared dough, bakery product, or a different flour grade without adjustment |
| required_metadata | Plant geography; reference period; technology; wheat/rye shares; species or grain class; flour grade and extraction basis; moisture; additives, fortification, bleaching, or treatment; packaging BOM or bulk state; process coverage; upstream dataset choices; co-products and allocation; applicable food specification |
| required_quality_disclosure | Primary-data share; meter and lot coverage; mass-balance closure; uncertainty; screening-range use; allocation sensitivity; unresolved dataset links; deviations from this PCR |
| update_trigger | Material change in grain mix, flour grade, extraction, process technology, energy supply, product formulation, packaging, allocation, regulation or specification, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-152-2023` | standard | Codex Alimentarius, CXS 152-1985 Standard for Wheat Flour, amended 2023, https://www.fao.org/input/download/standards/50/CXS_152e.pdf | Product scope for common and club wheat flour; definition, moisture, ingredient, hygiene, packaging, and labelling controls; applied only within the standard's scope |
| `us-epa-ap42-wheat-milling-2003` | official_guidance | US EPA, AP-42 Section 9.9.1 Grain Elevators and Processes, wheat flour milling section, final 2003, https://www.epa.gov/sites/default/files/2020-10/documents/c9s0909-1.pdf | Mill process decomposition, cleaning and tempering operations, milling and fractionation, material handling, and particulate-source coverage |
| `epd-pcr-grain-mill-products-2013-04` | standard | EPD International, PCR 2013:04 Grain mill products, version 3.0.5, https://www.environdec.com/pcr-library/pcr2013-04 | Category and LCA-method context for UN CPC 2311; the programme page states that this PCR expired on 2026-05-30, so it is not treated as a currently valid quantitative authority |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | System-boundary completeness, linked upstream datasets, data quality, and multifunctionality hierarchy |
| `usda-ars-soft-wheat-milling-methods` | official_guidance | USDA Agricultural Research Service, Soft Wheat Quality Laboratory Materials and Methods, https://www.ars.usda.gov/midwest-area/wooster-oh/corn-soybean-and-wheat-quality-research/docs/soft-wheat-quality-laboratory-materials-and-methods/ | Lot moisture records, tempering method, milling stream measurement, and flour-yield calculation protocol |
| `asb-extraction-rate` | handbook | American Society of Baking, Extraction Rate, https://asbe.org/article/extraction-rate/?topic=analytical-methods | Extraction-rate definition and 72-76% screening context for efficient conventional refined flour milling |
| `odunfa-joel-flour-milling-energy-2022` | literature | Odunfa M. K. and Joel O. T., Energy audit and conservation opportunities in flour milling industry in Nigeria, Global Journal of Engineering and Technology Advances 13(1), 2022, DOI 10.30574/gjeta.2022.13.1.0120 | Reported 187.49-280.37 MJ per tonne milling-stage energy-intensity range used only as a contextual QA screen |
