---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-crude
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Soya bean oil, crude

## 1. Scope and Applicability

This PCR covers the gate-to-gate production of crude soya bean oil from soya beans at an oilseed-processing plant. It begins with received soya beans and includes receiving and storage, cleaning, drying or tempering when performed, cracking, dehulling, conditioning, flaking, mechanical and/or solvent extraction, oil and meal desolventizing when applicable, solvent recovery, crude-oil cooling, storage, and loadout. It includes on-site utility use, recovered internal solvent loops, co-products, wastes, wastewater, and direct releases attributable to these operations.

The representative route is conventional hexane solvent extraction with solvent recovery because official process guidance identifies it as the widely used route. Mechanical pressing or combined pre-pressing and solvent extraction is covered when the route is declared and route-specific inputs, yields, co-products, and releases are collected. The reference product is unrefined, desolventized soya bean oil at the extraction-plant gate for further processing or loadout.

Refining operations such as alkali neutralization, bleaching, deodorization, and production of finished refined oil are outside this PCR. Soya bean oil that has undergone those operations, oil from other oilseeds, chemically modified oils, used cooking oils, oil/solvent miscella, biodiesel, and formulated food products are excluded. Product-food-safety compliance is not certified by this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-crude |
| classification_refs | CPC 3.0: 21611 — Soya bean oil, crude |
| covered_products | Crude soya bean oil derived from seeds of *Glycine max* by mechanical pressing, solvent extraction, or a declared combined route; oil may be settled, filtered, cooled, stored, or water-degummed only when the degumming status is explicitly declared and no refining claim is made |
| excluded_products | Refined soya bean oil; oils from other botanical sources; oil/hexane miscella; hydrogenated, interesterified, re-esterified, or otherwise chemically modified oils; used cooking oil; biodiesel; consumer-ready formulations |
| representative_product | Desolventized crude soya bean oil from conventional hexane extraction, at extraction-plant gate |
| production_route | Soya bean receiving and preparation, extraction, solvent and meal desolventizing where applicable, solvent recovery, crude-oil cooling, storage, and loadout; mechanical or combined routes require explicit declaration |
| market_state | Bulk crude/unrefined oil at plant gate, intended for subsequent refining or other declared industrial use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Crude soya bean oil supplied at the extraction-plant gate as an unrefined feedstock for subsequent processing |
| How much | 1 kg net mass, excluding packaging |
| How well | Derived from soya beans; crude/unrefined; desolventized for a solvent route; extraction route, degumming status, and product specification declared |
| How long or cycle | One production lot or accounting-period output; storage duration and conditions before loadout declared |
| reference_flow_link | `crude_soya_bean_oil_at_plant_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | extraction route; soya bean origin and grade; received moisture and foreign-matter basis; plant geography; crude/unrefined state; desolventizing status; degumming status; solvent identity and recovery configuration when applicable; storage duration; allocation method; temporal coverage |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference crude soya bean oil | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net oil mass at the plant-gate transfer point after desolventizing and before downstream refining; exclude packaging and normalize all inventory amounts to 1 kg reference product. |
| `soybean_mass_basis` | Received soya beans, prepared flakes, hulls, meal, and rejects | Mass | kg | Preserve measured as-received masses and moisture; when a dry or clean basis is used, retain the original measurement and document the moisture, foreign-matter, and conversion equation. |
| `solvent_inventory_basis` | Fresh, recovered, stored, exported, and lost extraction solvent | Mass or volume with measured density | kg preferred; L allowed with density and temperature | Keep fresh make-up solvent separate from internal recovered solvent. Convert volume to mass only with batch- or period-representative density and temperature; never count the full circulating solvent as an external input. |
| `energy_unit_consistency` | Electricity, steam, fuel, and purchased heat | Energy | kWh or MJ | Preserve the metered unit and energy carrier. Any kWh-to-MJ or steam-to-energy conversion must state the conversion factor, steam condition, and source; do not mix energy and fuel mass. |
| `codex_identity_measurements` | Optional crude-oil identity testing | Relative density, refractive index, saponification value, iodine value, unsaponifiable matter | Codex CXS 210-1999 Table A2 units | When these tests are used, retain test method, temperature, sample identity, and result. The Codex ranges are identity screens, not substitutes for process mass records or a food-safety conformity decision. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Soya beans weighed at receipt into the extraction plant, with origin, grade, moisture, foreign matter, damaged-seed basis, and any prior off-site conditioning disclosed |
| starting_condition_role | Foreground gate input; upstream cultivation and delivery burdens are linked through separate supplier or background datasets |
| product_classification_scope | Crude soya bean oil only; CPC 3.0 code 21611 is classification context and does not broaden the product to refined or chemically modified oil |
| recursive_input_rule | Any crude soya bean oil used as rework, blend stock, or transferred intermediate is recorded as an upstream product input with quantity, source, and prior burden; do not recursively reconstruct its production inside the same foreground package |
| upstream_dataset_requirement | Link soya bean production and delivery, electricity, fuels or purchased heat, water, solvent manufacture, auxiliary materials, nitrogen, and treatment services using geography-, time-, and technology-appropriate datasets |
| disclosure | Declare extraction route, plant geography, accounting period, soybean moisture basis, solvent system and recovery controls, degumming status, storage boundary, co-product handling, allocation method, excluded operations, and every temporary default |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground crude-oil production | Include receiving and storage, cleaning, preparation, extraction, desolventizing, solvent recovery, crude-oil finishing and storage, co-product handling inside the plant, utilities, wastes, wastewater, and direct releases up to crude-oil loadout. | `us-epa-ap42-9-11-1-1995` |
| `boundary_refining_exclusion` | Downstream oil treatment | Exclude alkali neutralization, bleaching, deodorization, and finished refined-oil production. If these occur at the same site, meter or subdivide them and assign only pre-refining burdens to this PCR. | `unsd-cpc-3-2025`; `us-epa-ap42-9-11-1-1995` |
| `boundary_solvent_route` | Solvent extraction route | Include solvent make-up, storage changes, recovery, vents and leaks, residual solvent leaving in oil or meal when measured, wastewater-related losses, and control equipment. Do not treat recovered internal solvent as a new external input. | `us-epa-ap42-9-11-1-1995` |
| `boundary_upstream_linking` | Purchased inputs | Keep upstream production outside the foreground gate while linking each material, energy, water, and service input to an appropriate upstream dataset; disclose missing or proxy datasets. | `iso-14044-2006` |
| `boundary_route_specificity` | Mechanical, solvent, or combined route | Declare one route and include only operations actually performed. Solvent-only rows are not zero-filled for a mechanical route; they are marked not applicable with route evidence. | `us-epa-ap42-9-11-1-1995` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `soybean_receiving_preparation` | Soya bean receiving and preparation | required | Always included from plant receipt; drying, tempering, and dehulling are included only when performed | Foreground preparation of received beans for extraction | kg prepared beans or flakes transferred to extraction, reconciled to 1 kg final crude oil |
| `oil_extraction_recovery` | Oil extraction, desolventizing, and recovery | required | Declare mechanical, solvent, or combined route; solvent and recovery rows apply only to a solvent route | Foreground separation of crude oil and co-products | kg intermediate crude oil transferred to storage, reconciled to 1 kg final crude oil |
| `crude_oil_storage_loadout` | Crude-oil finishing, storage, and loadout | required | Always included; filtration, water degumming, inerting, and heating are included when performed | Foreground preparation of reference product at plant gate | 1 kg net crude soya bean oil at loadout |

### Process: Soya bean receiving and preparation (`soybean_receiving_preparation`)

#### Inputs

##### Product flows

###### Received soya beans (`received_soya_beans`)

Record all soya beans entering the extraction plant, including accepted lots and the measured basis used to determine moisture and foreign matter.

- Selected flow: Soya beans, other
- Flow property / unit: Mass / kg
- Amount rule: weigh received soya beans and normalize accepted input to 1 kg final crude oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_soybean_receipts`
- Sources: `us-epa-ap42-9-11-1-1995`

- Range: Preliminary soybean-input QA screen inferred from reported soybean oil content and residual oil after extraction; replace with facility mass balance
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 4
  - Upper: 8
  - Unit: kg
  - Basis: per 1 kg final crude soya bean oil
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `us-epa-ap42-9-11-1-1995`

###### Preparation electricity (`preparation_electricity`)

Record metered electricity for conveying, aspiration, cleaning, cracking, dehulling, flaking, and preparation auxiliaries.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: meter or allocate electricity to preparation using a documented sub-metering rule
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Preparation heat (`preparation_heat`)

Record fuel, purchased heat, or steam used for drying, tempering, and conditioning only when these operations occur.

- Selected flow: Route-specific heat or fuel supply
- Flow property / unit: Energy / MJ
- Amount rule: meter energy by carrier and operation; mark not applicable when no thermal preparation occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final crude soya bean oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared soya bean flakes or press feed (`prepared_soya_feed`)

Record the mass transferred to extraction as an internal product flow so process subdivision remains mass-balanced.

- Selected flow: Prepared soya bean flakes or press feed, internal
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass corrected only with documented moisture conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_transfer_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Soya bean hulls (`soybean_hulls`)

Record recovered hulls as a co-product when sold or used beneficially; otherwise classify them as waste with the actual treatment route.

- Selected flow: Soya bean hulls, facility market state
- Flow property / unit: Mass / kg
- Amount rule: weigh hull output by destination and retain moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Waste flows

###### Cleaning rejects (`cleaning_rejects`)

Record foreign material, damaged material rejected from production, and unrecovered screenings by treatment destination.

- Selected flow: Oilseed cleaning rejects
- Flow property / unit: Mass / kg
- Amount rule: weigh or reconcile rejects from receiving and cleaning records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Elementary flows

###### Preparation particulate releases (`preparation_particulate_releases`)

Record measured or permitted direct particulate releases from receiving, conveying, aspiration, cleaning, cracking, dehulling, drying, and flaking after controls.

- Selected flow: Particulate matter to air, size fraction reported
- Flow property / unit: Mass / kg
- Amount rule: use stack tests, continuous records, or a disclosed approved emission calculation for each source and control configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_release_records`
- Sources: `us-epa-ap42-9-11-1-1995`

### Process: Oil extraction, desolventizing, and recovery (`oil_extraction_recovery`)

#### Inputs

##### Product flows

###### Prepared soya bean feed (`prepared_soya_feed_input`)

Record the internal prepared feed entering extraction and reconcile it with the preparation-process output.

- Selected flow: Prepared soya bean flakes or press feed, internal
- Flow property / unit: Mass / kg
- Amount rule: equal the corresponding internal transfer output after any documented storage change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_transfer_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Fresh make-up extraction solvent (`hexane_makeup`)

For a solvent route, record purchased or externally supplied make-up solvent adjusted for opening and closing stock; do not record the total circulating solvent as input.

- Selected flow: Hexane or declared extraction solvent, make-up supply
- Flow property / unit: Mass / kg
- Amount rule: external receipts plus opening stock minus closing stock minus documented external transfers, converted from volume only with measured density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Extraction electricity (`extraction_electricity`)

Record metered electricity for extractors or presses, pumps, vacuum systems, condensers, meal handling, and recovery auxiliaries.

- Selected flow: Electricity, facility supply mix
- Flow property / unit: Energy / kWh
- Amount rule: meter or allocate electricity to the extraction and recovery line using documented sub-metering
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Extraction steam or heat (`extraction_steam_heat`)

Record route-specific steam, purchased heat, or fuel used for conditioning, oil stripping, meal desolventizing and toasting, drying, and solvent recovery.

- Selected flow: Steam, heat, or fuel supply by carrier
- Flow property / unit: Energy / MJ
- Amount rule: meter by carrier and steam condition; separate on-site fuel combustion from purchased heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Process and cooling water (`extraction_water`)

Record make-up water crossing the plant boundary for steam generation, condensers, scrubbing, and other extraction-line uses; do not count recirculating water repeatedly.

- Selected flow: Process water or cooling-water make-up
- Flow property / unit: Mass / kg
- Amount rule: meter make-up water by use and subtract only measured return flows that cross the same boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Intermediate desolventized crude soya bean oil (`intermediate_crude_oil`)

Record the crude oil transferred to storage before downstream refining and reconcile it to final loadout, storage changes, samples, spills, and off-spec material.

- Selected flow: Crude soya bean oil, internal transfer
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after oil desolventizing or pressing and clarification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_transfer_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Soya bean meal or press cake (`soybean_meal_cake`)

Record desolventized meal, white flakes, press cake, or other protein-rich co-product separately by market state, moisture, protein grade, and destination.

- Selected flow: Soya bean meal, flakes, or press cake by declared grade
- Flow property / unit: Mass / kg
- Amount rule: weigh each co-product stream and retain moisture and grade basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Recovered solvent for internal reuse (`recovered_solvent_internal`)

Record recovered solvent as an internal loop for solvent-balance checking; it receives no upstream burden and is not added to external make-up input.

- Selected flow: Recovered extraction solvent, internal
- Flow property / unit: Mass / kg
- Amount rule: measured recovered solvent returned to the process loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_balance_records`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Waste flows

###### Solvent-bearing wastewater and oily residues (`solvent_wastewater_residues`)

Record wastewater, separator residues, spent scrubber materials, sludges, and oily solids by measured quantity and treatment route.

- Selected flow: Facility-specific wastewater or extraction residue
- Flow property / unit: Mass / kg
- Amount rule: meter wastewater and weigh residues; retain solvent concentration when measured
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_waste_records`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Elementary flows

###### Direct extraction-solvent release to air (`hexane_voc_release`)

For a solvent route, record total direct solvent loss to air from vents, leaks, storage, shutdowns, and other fugitive sources using a plant-specific period balance whenever available.

- Selected flow: Hexane or declared extraction solvent to air
- Flow property / unit: Mass / kg
- Amount rule: calculate from the site solvent balance and separately report measured residual solvent leaving in products or wastewater to avoid double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Direct combustion and process releases (`extraction_direct_releases`)

Record each direct elementary flow from on-site boilers, dryers, meal coolers, vents, and control devices; purchased energy carries upstream emissions in its supplier dataset instead.

- Selected flow: Each measured elementary flow to air or water
- Flow property / unit: Mass / kg
- Amount rule: use monitored values or a disclosed approved calculation tied to fuel, stack, operating time, and control efficiency
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg intermediate crude oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_release_records`
- Sources: `us-epa-ap42-9-11-1-1995`

### Process: Crude-oil finishing, storage, and loadout (`crude_oil_storage_loadout`)

#### Inputs

##### Product flows

###### Intermediate crude soya bean oil (`intermediate_crude_oil_input`)

Record the internal crude-oil transfer and reconcile it with storage inventory and final loadout.

- Selected flow: Crude soya bean oil, internal transfer
- Flow property / unit: Mass / kg
- Amount rule: equal the extraction-process output after documented transfer loss or sampling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loadout_records`
- Sources: `us-epa-ap42-9-11-1-1995`

###### Storage and loadout utilities (`storage_utilities`)

Record electricity, heat, filtration aids, nitrogen, and water only when they cross the boundary for crude-oil storage, optional water degumming, filtration, or loadout.

- Selected flow: Utility or auxiliary material by actual carrier
- Flow property / unit: Carrier-appropriate property and unit
- Amount rule: meter or obtain purchase/issue records for each material; do not aggregate unlike carriers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loadout_records`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude soya bean oil at plant gate (`crude_soya_bean_oil_at_plant_gate`)

This is the quantitative reference output after desolventizing, cooling, declared crude-oil finishing, storage, and loadout preparation.

- Selected flow: Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize measured net loadout mass to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_loadout_records`
- Sources: `unsd-cpc-3-2025`; `codex-cxs-210-1999-2026`; `us-epa-ap42-9-11-1-1995`

##### Waste flows

###### Off-spec oil, filter residue, and spills (`storage_oil_waste`)

Record off-spec material, filter residue, tank bottoms, and spills that leave the product inventory, including recovery or treatment destination.

- Selected flow: Crude-oil storage waste by actual treatment route
- Flow property / unit: Mass / kg
- Amount rule: weigh or calculate from reconciled tank and incident records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loadout_records`
- Sources: `us-epa-ap42-9-11-1-1995`

##### Elementary flows

###### Storage and loadout releases (`storage_loadout_releases`)

Record measured direct solvent or other emissions from tanks and loadout that are not already included in the extraction-line period balance.

- Selected flow: Facility-specific elementary flow to air or water
- Flow property / unit: Mass / kg
- Amount rule: use tank records, monitoring, or a disclosed approved calculation; demonstrate no overlap with `hexane_voc_release`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final crude soya bean oil at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_release_records`
- Sources: `us-epa-ap42-9-11-1-1995`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Crude oil, meal or cake, hulls, and other co-products | First avoid allocation by sub-metering and subdividing receiving, preparation, extraction, meal handling, and storage operations wherever their inputs and releases can be measured separately. | `iso-14044-2006` |
| `allocation_physical_then_other` | Remaining shared burdens | Where subdivision or system expansion consistent with the study goal is not feasible, allocate using a documented physical relationship that reflects the shared process. If no defensible physical relationship exists, use another relationship such as economic value and justify the choice. | `iso-14044-2006` |
| `allocation_measure_before_partition` | All product and co-product streams | Measure oil, meal or cake, hulls, recovered saleable products, wastes, moisture, and storage changes before calculating allocation factors; allocation must not hide an omitted mass stream. | `iso-14044-2006`; `us-epa-ap42-9-11-1-1995` |
| `allocation_internal_recovery` | Recovered solvent, water, heat, and internal transfers | Treat closed internal recovery loops as internal flows without avoided-product credit. Record only net external inputs and direct losses at the foreground boundary. | `iso-14044-2006`; `us-epa-ap42-9-11-1-1995` |
| `allocation_sensitivity_disclosure` | Comparative or public downstream studies | Report the allocation basis and factors and test at least one plausible alternative for materially important co-products; disclose the influence on the crude-oil result. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_soybean_receipts` | `soybean_receiving_preparation` | Received soya beans | Weighbridge, receiving inspection, and supplier lot records | lot_id; supplier; origin; receipt_time; gross_mass; tare_mass; net_mass; moisture; foreign_matter; damaged_seed_fraction; accepted_mass | Calibrated weighbridge plus representative lot sampling | kg; mass % | Every delivery | At least 12 consecutive months or all campaigns in the declared period | All supplying lots to the represented plant | Sum accepted net mass; retain rejected mass separately; calculate weighted moisture and foreign matter | Scale calibration, sample plan, laboratory results, and reconciliation to inventory |
| `cp_utility_records` | `soybean_receiving_preparation`; `oil_extraction_recovery` | Electricity, fuel, steam, heat, and water | Meters, invoices, boiler logs, and sub-meter records | carrier; meter_id; opening_reading; closing_reading; unit; steam_pressure_temperature; fuel_LHV_HHV_basis; allocation_driver; operating_hours | Prefer calibrated sub-metering; otherwise documented engineering allocation from whole-site records | kWh; MJ; kg steam; kg water; carrier-specific | Continuous or each billing period | Same period as product and co-product records | All included equipment and on-site utility systems | Sum by carrier and process; convert only with documented factors; normalize after period reconciliation | Meter calibration, invoices, boiler efficiency records, and allocation worksheet |
| `cp_process_transfer_records` | `soybean_receiving_preparation`; `oil_extraction_recovery` | Prepared feed and intermediate crude oil | Belt-scale, tank gauge, batch sheet, and transfer log | timestamp; source_process; destination_process; mass_or_volume; density; temperature; moisture; opening_stock; closing_stock; samples | Direct measurement at internal transfer points | kg preferred; L with density and temperature | Every batch or continuous totalizer | Same period as reference output | All internal transfers between included processes | Reconcile sending and receiving records and storage changes before normalization | Calibration, batch traceability, and signed transfer reconciliation |
| `cp_solvent_balance_records` | `oil_extraction_recovery` | Fresh, recovered, stored, transferred, residual, and released solvent | Purchase records, tank gauges, flow meters, recovery meters, product/residue tests, and incident logs | solvent_identity; receipts; opening_stock; closing_stock; external_transfers; recovered_internal; residual_in_oil; residual_in_meal; residual_in_wastewater; measured_vent_release; spill_release | Period material balance with measured stock change and separately measured non-air exits | kg preferred; L with measured density | Each delivery and daily or batch stock; period balance monthly and annually | Full declared production period | Entire solvent system, storage, recovery, vents, products, and wastewater | Calculate net make-up and reconcile destinations; prevent double counting of storage and vent losses | Tank calibration, density and temperature records, purchase invoices, recovery-meter checks, and incident reports |
| `cp_coproduct_waste_records` | `soybean_receiving_preparation`; `oil_extraction_recovery` | Hulls, meal or cake, rejects, wastewater, and residues | Scales, tank meters, laboratory tests, waste manifests, and sales records | stream_id; quantity; moisture; grade; protein_or_oil_content_if_relevant; destination; sale_or_waste_status; treatment | Measure each distinct stream and destination | kg; kg water; m3 only with density where mass conversion is required | Every batch, shipment, or disposal | Same period as reference output | All co-products and wastes from included processes | Sum by stream, grade, and destination; do not net co-products against inputs | Scale calibration, sales invoices, manifests, laboratory results, and mass-balance reconciliation |
| `cp_storage_loadout_records` | `crude_oil_storage_loadout` | Crude-oil storage, finishing, and reference loadout | Tank gauges, load-cell or flow-meter tickets, utility issue records, and quality tests | tank_id; opening_stock; closing_stock; receipts; loadout_mass; density; temperature; filtration_or_degumming_status; storage_days; nitrogen; utilities; samples; off_spec; spills | Calibrated tank and custody-transfer measurement plus lot testing | kg preferred; L with density and temperature | Every transfer and daily stock; each loadout lot | Full declared production period | All crude-oil tanks and loadout lines in scope | Reconcile extraction transfer, stock change, loadout, samples, off-spec material, and spills; normalize net conforming loadout | Calibration and custody-transfer tickets, tank reconciliation, batch genealogy, and laboratory reports |
| `cp_direct_release_records` | `soybean_receiving_preparation`; `oil_extraction_recovery`; `crude_oil_storage_loadout` | Direct elementary releases | Stack tests, continuous monitoring, solvent balance, permit calculations, wastewater tests, and incident logs | source_id; pollutant; method; concentration; flow_rate; operating_time; control_device; control_efficiency; discharge_quantity; incident_quantity | Source-specific monitoring or disclosed approved calculation | kg pollutant; concentration and flow supporting fields | Monitoring frequency required by method or permit; incidents when they occur | Same period as activity data | Every included vent, stack, discharge, tank, and fugitive source | Calculate each elementary flow separately and reconcile solvent releases to the solvent balance | Method reference, calibration, detection limit, control operating log, and reviewer trace |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized amount = reconciled period quantity / reconciled net kg of conforming crude soya bean oil loaded out | Period flow quantity; net reference-product loadout | Amount per 1 kg reference product | `iso-14044-2006` |
| `calc_soybean_dry_clean_basis` | Soya bean inputs and solid co-products | dry clean mass = as-received mass × (1 − moisture fraction − separately measured foreign-matter fraction); retain the as-received value and avoid subtracting overlapping fractions | As-received mass; moisture; foreign matter; sampling basis | Dry clean mass with conversion audit trail | `us-epa-ap42-9-11-1-1995` |
| `calc_solvent_makeup_balance` | Solvent route | net external make-up = external receipts + opening stock − closing stock − documented external transfers; reconcile net make-up to air loss, residuals in products and wastewater, spills, and unexplained difference | Solvent receipts, stocks, transfers, residual tests, releases, and incidents | Net make-up and destination balance per period and per kg oil | `us-epa-ap42-9-11-1-1995` |
| `calc_hexane_temporary_screen` | Solvent route with missing plant-specific balance | The AP-42 3.3 L/Mg raw-soybean factor is a D-rated temporary screening default only. Convert it using documented density and measured soybean throughput, label the result as temporary, and replace it before comparative or publication-grade use. | Raw-soybean throughput; 3.3 L/Mg screening factor; representative density | Explicitly flagged temporary total-loss screen | `us-epa-ap42-9-11-1-1995` |
| `calc_process_mass_balance` | Each process and full foreground system | reconcile measured inputs = products + co-products + wastes + releases + stock change + documented measurement difference on consistent moisture and solvent bases | All mass flows, stocks, moisture, and residual-solvent records | Balance closure and unexplained difference | `iso-14044-2006`; `us-epa-ap42-9-11-1-1995` |
| `calc_allocation_factors` | Shared process burdens | allocation factor for output i = declared allocation quantity or value for i / sum of the same basis over all co-products; factors must sum to 1 within rounding tolerance | Measured co-product quantities, chosen physical relation or values, and declared period | Allocation factors and sensitivity case | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | Reference product | Verify the product-flow UUID, Product flow type, Mass reference property, CPC 21611 classification, crude/unrefined state, and separation from CPC 21612 refined oil. | Tiangong flow readback, batch specification, and classification record |
| `dq_temporal_representativeness` | All foreground activity | Use at least 12 consecutive months or all campaigns in the declared period; explain shutdowns, start-ups, atypical lots, and partial-year extrapolation. | Production calendar, meter coverage, purchase records, and loadout ledger |
| `dq_technology_route` | Extraction and recovery | Declare mechanical, solvent, or combined route, solvent identity, recovery and control equipment, meal-desolventizing route, optional degumming, and actual included operations. | Process flow diagram, equipment list, operating procedure, and source-specific records |
| `dq_mass_completeness` | Foreground inventory | Reconcile soya beans, oil, meal or cake, hulls, rejects, wastes, solvent, wastewater, stock changes, and direct releases; disclose unexplained differences and omitted streams. | Signed mass-balance worksheet and variance investigation |
| `dq_primary_over_default` | Important inputs and releases | Prefer calibrated measurements and period records. Any AP-42 or other default must be identified as temporary, quality-rated, and replaced when plant-specific records become available. | Meter and calibration evidence, invoices, tests, and explicit default register |
| `dq_geographic_supplier_fit` | Upstream datasets | Match the plant, soybean origin, electricity market, fuels, solvent, water, and treatment services to the represented geography and period or disclose proxies. | Supplier metadata, dataset geography and year, and proxy justification |
| `dq_allocation_transparency` | Co-product burdens | Retain pre-allocation inventory, co-product measurements, chosen hierarchy step, factors, rationale, and sensitivity result. | Allocation workbook and reviewer sign-off |
| `dq_test_method_traceability` | Crude-oil identity screens | For Codex-related property screens, retain test method, temperature, units, sample and lot identity, laboratory, detection limits, and result. | Laboratory certificate and sampling chain of custody |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference output must be 1 kg net Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3` using Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg. | `unsd-cpc-3-2025` |
| `validate_scope_and_route` | Product and process boundary | Confirm soya bean origin, crude/unrefined state, declared extraction route, desolventizing and degumming status, and absence or subdivision of alkali refining, bleaching, deodorization, and other refined-oil operations. | `unsd-cpc-3-2025`; `us-epa-ap42-9-11-1-1995` |
| `validate_process_coverage` | Process map | Receiving and preparation, route-specific extraction and recovery, crude-oil storage and loadout, utilities, co-product handling, wastes, wastewater, and direct releases must be represented or explicitly not applicable with evidence. | `us-epa-ap42-9-11-1-1995` |
| `validate_solvent_balance` | Solvent route | Check net make-up, stock change, internal recovery, residual solvent in products and wastewater when measured, direct air loss, spills, and unexplained difference; reject double counting of circulating recovered solvent. | `us-epa-ap42-9-11-1-1995` |
| `validate_mass_and_allocation` | Full foreground system | Require a documented mass balance, measured co-product streams, allocation factors summing to 1 within declared rounding tolerance, and preservation of the unallocated inventory. | `iso-14044-2006`; `us-epa-ap42-9-11-1-1995` |
| `validate_codex_crude_oil_screen` | Optional identity-test results | When Codex Table A2 tests are used, screen ordinary crude soyabean oil against relative density 0.919–0.925 at 20 °C, refractive index 1.466–1.470 at 40 °C, saponification value 189–195 mg KOH/g oil, iodine value 124–139, and unsaponifiable matter no more than 15 g/kg. Any result outside the screen requires investigation and disclosure; the screen is not a food-safety certification. | `codex-cxs-210-1999-2026` |
| `validate_temporary_defaults` | Publication and comparative use | Identify every temporary factor or proxy. A result using the AP-42 D-rated 3.3 L/Mg soybean hexane-loss default fails publication-grade completeness until replaced by a plant-specific period balance or explicitly accepted by review for a limited use. | `us-epa-ap42-9-11-1-1995`; `iso-14044-2006` |
| `validate_bilingual_and_period_alignment` | Dataset package | Confirm that qualifiers, period totals, calculations, allocation basis, and source identifiers are internally consistent and that no process amount is normalized to a different oil output period. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for crude soya bean oil at extraction-plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Gate-to-gate oilseed-processing studies; cradle-to-gate models when upstream soya bean and utility datasets are linked; downstream refined-oil models using crude oil as an input; scenario analysis with disclosed route and allocation |
| excluded_use | Representation of refined soya bean oil or consumer-ready edible oil; food-safety certification; undisclosed substitution for another vegetable oil; public comparative assertions when temporary defaults, unresolved identity, material balance gaps, or unreviewed allocation choices remain |
| required_metadata | PCR id; reference UUID and unit support; plant geography; period; soybean origin, grade, moisture, and foreign matter; extraction route; solvent and recovery system; degumming status; storage duration; process coverage; co-product grades and destinations; allocation basis and factors; upstream dataset identities |
| required_quality_disclosure | Meter and scale coverage; calibration; sampling and laboratory methods; mass- and solvent-balance closure; stock changes; direct-release method; missing streams; proxy datasets; temporary defaults and quality ratings; allocation sensitivity; Codex identity-screen results when used |
| update_trigger | Material change in soybean supply, extraction or recovery technology, energy system, solvent, emission control, degumming or storage practice, co-product market or allocation relation, plant geography, product specification, source standard, UUID support, or a temporary default being replaced by foreground evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0, structure dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-10) | CPC 21611 identity, crude/refined category distinction, and classification scope |
| `codex-cxs-210-1999-2026` | `standard` | Codex Alimentarius Commission, CXS 210-1999, Standard for Named Vegetable Oils, current 2026 publication, https://openknowledge.fao.org/handle/20.500.14283/cd9108en (retrieved 2026-08-10) | Botanical soya bean oil identity and optional crude-oil composition and physical-property screening ranges |
| `us-epa-ap42-9-11-1-1995` | `official_guidance` | United States Environmental Protection Agency, AP-42 Section 9.11.1 Vegetable Oil Processing and its background report, Supplement A, November 1995: final section https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf; background report https://www.epa.gov/sites/default/files/2020-10/documents/b9s11-1.pdf (retrieved 2026-08-10) | Soybean-processing decomposition, crude/refined boundary, solvent recovery, co-products, particulate and hexane releases, plant-specific solvent balance, source oil-content and residual-oil observations used only to infer the temporary soybean-input QA guardrail, and the D-rated temporary hexane-loss screen |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-10) | System-boundary consistency, allocation hierarchy, transparency, data quality, sensitivity, and reporting rules |
