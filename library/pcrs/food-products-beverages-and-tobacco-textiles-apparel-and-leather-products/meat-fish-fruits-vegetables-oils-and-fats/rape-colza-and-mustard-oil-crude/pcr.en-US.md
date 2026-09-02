---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-crude
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Rape, colza and mustard oil, crude

## 1. Scope and Applicability

This PCR governs foreground data packages for crude oil obtained from rape/rapeseed, colza, or mustard seed at the oil-mill or extraction-plant gate. It covers seed receiving and preparation, mechanical pressing and/or solvent extraction when used, crude-oil separation and desolventizing, route-relevant clarification or degumming before dispatch, co-product handling, and bulk storage up to the declared plant-gate output.

The PCR applies to crude oil that has not undergone the refining sequence that produces refined edible oil. Refining operations such as alkali neutralisation, bleaching, deodorisation, winterisation, fractionation, hydrogenation, interesterification, retail filling, distribution, use, and end-of-life are excluded. Seed cultivation and transport to the oil mill are represented by upstream datasets rather than by the foreground oil-mill inventory. Virgin or cold-pressed claims may be modelled only when the declared route and records demonstrate the applicable mechanical-processing conditions; this PCR does not create such a claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-crude |
| classification_refs | CPC 3.0: 21641, Rape, colza and mustard oil, crude (exact mapping context) |
| covered_products | Bulk crude oil obtained from rape/rapeseed, colza, or mustard seed by mechanical pressing, pre-press plus solvent extraction, direct solvent extraction, or another declared oil-mill route that stops before refining |
| excluded_products | Refined rape/colza/mustard oil; finished bottled cooking oil; biodiesel and other chemically converted products; oilseed meal or press cake as the reference product; seed cultivation datasets |
| representative_product | One kilogram of crude rape/colza/mustard oil at the extraction-plant gate, as received and before refining |
| production_route | Seed receiving and preparation followed by mechanical and/or solvent extraction, crude-oil recovery, route-relevant clarification or degumming, and bulk storage |
| market_state | Bulk crude oil at oil-mill or extraction-plant gate; species/feedstock, low-erucic or canola status when claimed, extraction route, conditioning state, moisture/volatile matter basis, and any degumming or clarification must be declared |

Codex CXS 210-1999 identifies the relevant mustard and rapeseed botanical sources and distinguishes mechanically obtained virgin or cold-pressed oils from other oil states. Codex identity or composition criteria may be used as declared product-quality evidence, but they do not replace facility-specific mass and energy records.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Crude rape, colza, or mustard oil delivered as a bulk product before refining |
| How much | 1 kg |
| How well | Product identity, seed species/type, low-erucic or canola claim when applicable, extraction route, crude-oil conditioning state, mass basis, and plant-gate state are declared; refined oil is excluded |
| How long or cycle | One production batch or a documented reporting-period production mix normalized to 1 kg of qualifying crude oil output |
| reference_flow_link | The functional unit is realized by the declared 1 kg reference product flow at the oil-mill or extraction-plant gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Rape, colza and mustard oil, crude `092932e3-7b6d-430d-b6e5-722b8f4e1c6d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | seed species/type; low-erucic or canola status when claimed; extraction route; solvent used when applicable; crude-oil clarification/degumming state; as-received or dry-matter basis; moisture and volatile matter basis; plant and geography; reporting period; allocation method and co-products |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference crude-oil output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the foreground package to exactly 1 kg of qualifying crude oil at the declared plant gate. Do not convert an oil-volume record to mass without a measured batch density or a declared product-specific density source. |
| `mass_basis_consistency` | Seed, crude oil, meal/cake, hulls, foots, sludge, and other mass flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether each mass is as received or dry matter. Use measured moisture or volatile-matter data for any conversion and retain the original measurements. |
| `energy_conversion` | Purchased electricity and thermal energy | Energy property selected for the site carrier | kWh or MJ | Retain invoice or meter units. Convert electricity only with 1 kWh = 3.6 MJ; do not convert fuel mass or volume to energy without a recorded net calorific value and source. |
| `solvent_balance_unit` | Solvent-extraction route | Property of the actual solvent flow | kg or L | Use one consistent property and unit across purchase, recovery, stock, product/meal carryover, wastewater, and air-loss records. Any mass-volume conversion requires measured or supplier-specific density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Oil-bearing rape/rapeseed, colza, or mustard seed received at the oil-mill gate, with species/type, supplier origin, moisture, foreign matter, and mass basis declared |
| starting_condition_role | Upstream product input to the foreground oil-mill processes |
| product_classification_scope | Crude rape, colza, and mustard oil only; the boundary ends before refining to CPC 21642 or another refined-oil product |
| recursive_input_rule | If qualifying crude oil of the same category is purchased as an intermediate input, record it once as a separate upstream product dataset and exclude the corresponding extraction operations from the foreground package; disclose the amount, origin, conditioning state, and aggregation rule |
| upstream_dataset_requirement | Use separate upstream datasets for seed cultivation and transport to the oil mill. Their geography, technology, temporal coverage, and mass basis must be compatible with the declared seed supply |
| disclosure | Declare seed types and shares, extraction and solvent route, included preparation/clarification steps, allocation method, co-products, cut-offs, reporting period, site coverage, purchased intermediate crude oil, and departures from this boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crude_oil_gate` | All conforming datasets | Include foreground operations from seed receipt through qualifying bulk crude-oil storage or dispatch; exclude downstream refining, filling, distribution, use, and end-of-life. | us-epa-ap42-9-11-1-vegetable-oil-processing; codex-cxs-210-named-vegetable-oils |
| `boundary_route_condition` | Mechanical and solvent routes | Include only route steps that actually occur. Solvent extraction requires extraction, oil and meal desolventizing, solvent recovery, and relevant emission/wastewater records; a mechanical-only route must not inherit solvent operations. | us-epa-ap42-9-11-1-vegetable-oil-processing |
| `boundary_upstream_seed` | Seed supply | Represent seed cultivation and inbound transport with compatible upstream datasets and prevent double counting when site records already aggregate an upstream stage. | eu-pef-2021-2279 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_receiving_preparation` | Seed receiving and preparation | required | Always include operations performed after the seed crosses the oil-mill gate; disclose outsourced or omitted preparation | Prepare declared oilseed for the selected extraction route | kg prepared seed delivered to extraction |
| `oil_extraction_recovery` | Oil extraction and crude-oil recovery | required | Include the actual mechanical, pre-press, direct-solvent, or combined route | Separate crude oil from prepared seed and recover route-specific solvent where applicable | kg crude-oil intermediate recovered |
| `crude_oil_clarification_storage` | Crude-oil clarification and bulk storage | required | Include filtration, settling, centrifugation, route-relevant degumming, transfer, and storage operations that occur before the declared plant gate | Deliver qualifying crude oil in the declared market state | 1 kg qualifying crude-oil output |

### Process: Seed receiving and preparation (`seed_receiving_preparation`)

#### Inputs

##### Product flows

###### Oil-bearing seed received at the mill (`seed_input`)

Record each rape/rapeseed, colza, or mustard seed stream that crosses the oil-mill boundary. Preserve species/type, supplier, origin, moisture, foreign matter, and mass basis rather than merging unlike seed streams before quality checks.

- Selected flow: Rape or colza seed `be87e81e-303f-4607-a1f5-0cb5ef2d8f74` for qualifying rape/colza seed; resolve a matching public mustard-seed product flow for mustard routes
- Flow property / unit: Mass / kg
- Amount rule: Measured inbound accepted seed mass, adjusted only by documented weighbridge corrections and reported on the declared mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg prepared seed delivered to extraction and subsequently normalized to 1 kg reference crude oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_receipts`
- Sources: `codex-cxs-210-named-vegetable-oils`; `us-epa-ap42-9-11-1-vegetable-oil-processing`

###### Preparation electricity and thermal energy (`preparation_energy`)

Record metered or allocated electricity and each thermal-energy carrier used for conveying, cleaning, drying, cracking, conditioning, dehulling, flaking, or pressing preparation.

- Selected flow: Site-specific purchased electricity and thermal-energy carrier matching invoices and meters
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use, or an explicitly documented allocation from a shared meter to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg prepared seed delivered to extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

##### Waste flows

#### Outputs

##### Product flows

###### Prepared seed transferred to extraction (`prepared_seed_output`)

Record the prepared seed mass after removal of foreign matter and route-specific hull fractions. This is an internal foreground transfer and must reconcile with seed input, removed material, moisture change, and recorded losses.

- Selected flow: Internal prepared rape/colza/mustard seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or calculated mass balance from accepted seed, removed material, and measured moisture change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg prepared seed delivered to extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_receipts`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

##### Waste flows

###### Foreign matter and rejected seed material (`seed_preparation_residue`)

Record foreign material, rejected seed, and route-specific separated material according to its actual destination. A material sold or used as a co-product must be a product flow rather than waste.

- Selected flow: Site-specific seed-cleaning residue or rejected-seed waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed or otherwise measured outbound quantity by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg prepared seed delivered to extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_outputs`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

##### Elementary flows

###### Preparation particulate emissions to air (`preparation_particulate_air`)

Record measured or permitted particulate emissions from receiving, conveying, cleaning, drying, cracking, dehulling, and flaking when these emissions cross the environment boundary. Do not use AP-42 factors as facility measurements when site records are available.

- Selected flow: Site-specific particulate matter emission flow with compartment declared
- Flow property / unit: Mass / kg
- Amount rule: Stack or fugitive-emission measurement, permit inventory, or disclosed site model; report the method and control device
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg prepared seed delivered to extraction
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_wastewater`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

### Process: Oil extraction and crude-oil recovery (`oil_extraction_recovery`)

#### Inputs

##### Product flows

###### Prepared oilseed transferred from preparation (`prepared_seed_input`)

Record the internal prepared-seed transfer using the same batch identity, mass basis, and amount as the upstream prepared-seed output.

- Selected flow: Internal prepared rape/colza/mustard seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: Equal to `prepared_seed_output` for the linked batch or reporting-period balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg crude-oil intermediate recovered
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_seed_receipts`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

###### Extraction electricity and thermal energy (`extraction_energy`)

Record electricity and every fuel, steam, or heat carrier used by presses, extractors, evaporators, desolventizers, condensers, pumps, dryers, and solvent recovery equipment.

- Selected flow: Site-specific purchased electricity and thermal-energy carrier matching invoices and meters
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered use or documented shared-utility allocation to the extraction process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg crude-oil intermediate recovered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`; `eu-pef-2021-2279`

###### Extraction solvent make-up (`extraction_solvent_makeup`)

Include this row only for a solvent-extraction route. Select the actual solvent product flow; do not substitute a generic organic-solvent UUID when the purchased material is known.

- Selected flow: Site-specific extraction solvent product flow, normally hexane where facility records identify hexane
- Flow property / unit: Mass / kg or Volume / L, consistently with the solvent balance
- Amount rule: Purchases plus opening stock minus closing stock, corrected for transfers and recovered solvent returned from outside the balance boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per kg crude-oil intermediate recovered
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

##### Waste flows

#### Outputs

##### Product flows

###### Crude-oil intermediate recovered (`crude_oil_intermediate`)

Record crude oil after pressing and/or solvent removal and before final plant-gate clarification or bulk-storage adjustments.

- Selected flow: Rape, colza and mustard oil, crude `092932e3-7b6d-430d-b6e5-722b8f4e1c6d`
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass to crude-oil clarification or storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg crude-oil intermediate recovered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_outputs`
- Sources: `codex-cxs-210-named-vegetable-oils`; `us-epa-ap42-9-11-1-vegetable-oil-processing`

###### Meal, press cake, and recoverable hull co-products (`oilseed_coproducts`)

Record each marketable meal, press cake, hull, or other co-product separately with its actual identity, composition basis, mass, and destination. Do not use a soybean-meal flow for rape/colza/mustard meal.

- Selected flow: Route- and feedstock-specific meal, press-cake, or hull product flow resolved from foreground output identity
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound or internal-transfer mass by co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg crude-oil intermediate recovered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_outputs`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`; `eu-pef-2021-2279`

##### Waste flows

###### Extraction residues and spent materials (`extraction_waste`)

Record spent filters, unrecovered sludge, contaminated absorbents, off-spec material, and other wastes by treatment destination. Materials recovered as products or recycled solvent are not waste flows.

- Selected flow: Site-specific waste flow by composition and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed shipment, waste manifest, or inventory-change balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg crude-oil intermediate recovered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_outputs`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

##### Elementary flows

###### Solvent emissions to air (`solvent_emission_air`)

Include this row only when solvent is used. Calculate the loss from a closed solvent balance and reconcile it with available measured or permitted air emissions, wastewater carryover, and solvent retained in products or co-products.

- Selected flow: Actual solvent emitted to air with compartment declared
- Flow property / unit: Mass / kg
- Amount rule: Closed solvent balance, with measured emissions preferred and all non-air destinations separately recorded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg crude-oil intermediate recovered
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

### Process: Crude-oil clarification and bulk storage (`crude_oil_clarification_storage`)

#### Inputs

##### Product flows

###### Crude-oil intermediate received (`crude_oil_intermediate_input`)

Link the intermediate input to the extraction output without changing product identity or mass basis. If purchased crude oil enters this process, apply the recursive input rule and keep it separate from site-produced oil.

- Selected flow: Rape, colza and mustard oil, crude `092932e3-7b6d-430d-b6e5-722b8f4e1c6d`
- Flow property / unit: Mass / kg
- Amount rule: Measured linked transfer plus separately measured qualifying purchased crude oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_outputs`
- Sources: `codex-cxs-210-named-vegetable-oils`

###### Clarification, transfer, and storage utilities (`clarification_utilities`)

Record electricity, heat, water, inert gas, filter aid, and other processing aids only when used to achieve the declared crude-oil state.

- Selected flow: Site-specific utility or processing-aid product flow matching foreground records
- Flow property / unit: Property and unit of the selected flow
- Amount rule: Metered, purchased, or inventory-balanced quantity by utility or aid
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `codex-cxs-210-named-vegetable-oils`; `us-epa-ap42-9-11-1-vegetable-oil-processing`

##### Waste flows

#### Outputs

##### Product flows

###### Qualifying crude oil at plant gate (`reference_crude_oil_output`)

This is the reference output. It must remain crude oil and must not include alkali refining, bleaching, deodorisation, or other downstream refining operations.

- Selected flow: Rape, colza and mustard oil, crude `092932e3-7b6d-430d-b6e5-722b8f4e1c6d`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg after normalization; retain the measured unnormalized output and declared mass basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_material_outputs`
- Sources: `codex-cxs-210-named-vegetable-oils`

##### Waste flows

###### Foots, sludge, spent filter aid, and wastewater (`clarification_waste`)

Record each waste stream from settling, centrifugation, filtration, degumming when included, tank cleaning, and spill control. If a stream is sold or beneficially used, classify it as a product co-output and include it in allocation review.

- Selected flow: Site-specific waste flow by composition and treatment route
- Flow property / unit: Mass / kg or Volume / m3 as measured
- Amount rule: Weighed shipment, wastewater meter, manifest, or documented balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg qualifying crude-oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions_wastewater`
- Sources: `us-epa-ap42-9-11-1-vegetable-oil-processing`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Multi-output preparation and extraction processes | First subdivide directly attributable operations or expand the system when justified by the study goal. Do not allocate burdens that can be assigned from separate meters, batches, or process records. | eu-pef-2021-2279 |
| `allocation_physical_then_other` | Remaining shared burdens among crude oil, meal/cake, hulls, and other co-products | If allocation cannot be avoided, use a documented relevant physical relationship. If no relevant physical relationship can be demonstrated, use another justified relationship such as economic value with a representative price period. Apply one internally consistent method and disclose the rationale. | eu-pef-2021-2279; ilcd-format-1-1-process |
| `allocation_fraction_check` | Every allocated multi-output process | Allocation fractions must cover all co-products, use the same reporting period and basis, and sum to 1.000 within rounding tolerance. Report unallocated wastes separately and perform a sensitivity result when allocation choice materially changes the crude-oil result. | ilcd-format-1-1-process |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_receipts` | `seed_receiving_preparation` | Seed input and prepared-seed transfer | Weighbridge, intake inspection, moisture test, and batch record | date; batch_id; supplier; origin; seed species/type; low-erucic/canola claim; gross_mass; tare_mass; accepted_mass; moisture; foreign_matter; rejected_mass; mass_basis | Calibrated weighbridge and documented sampling/test method | kg; % | Each delivery or batch | Complete reporting period, normally 12 consecutive months or the full seasonal campaign | Every facility and included intake line | Sum accepted mass by seed type and batch; keep moisture-basis conversions separate | Calibration records; laboratory method; reconciliation to supplier invoice and stock movement |
| `cp_energy_utilities` | all | Electricity, fuel, steam, heat, water, inert gas, and processing aids | Meter, invoice, tank dip, or inventory record | timestamp; meter_id; opening; closing; purchases; stock_change; carrier; unit; process_assignment; allocation_key | Calibrated submeter preferred; otherwise documented allocation from facility total | kWh; MJ; kg; L; m3 | Meter interval and monthly close | Same period as product output | Each facility and utility system | Sum direct meters; allocate only shared use with documented causal key | Meter calibration; invoices; stock reconciliation; allocation worksheet |
| `cp_material_outputs` | all | Crude oil, prepared seed, meal/cake, hulls, residues, and other outputs | Scale ticket, production log, tank gauge, shipment, or inventory record | date; batch_id; material_identity; product_or_waste; gross_mass; tare_mass; moisture_or_volatiles; destination; opening_stock; closing_stock | Calibrated scale or tank measurement with documented density where volume is converted | kg; L; m3; % | Each batch or transfer and monthly close | Complete reporting period | Every included process and storage location | Sum by identity and destination; reconcile transfers and stock change; normalize only after period closure | Calibration; delivery/manifest records; stock reconciliation; product test certificate |
| `cp_solvent_balance` | `oil_extraction_recovery` | Solvent make-up, recovery, stock, carryover, wastewater, and air loss | Purchase, tank, recovery meter, laboratory, emission, and wastewater records | solvent_identity; purchases; opening_stock; closing_stock; recovered_internal; offsite_transfer; oil_carryover; meal_carryover; wastewater_load; measured_air_release; density; unit | Closed mass balance using consistent unit; reconcile with measured emissions and discharge data | kg or L | Daily or batch record with monthly closure | Entire solvent-route reporting period | Complete solvent system including tanks and recovery | Inputs minus stocks, outputs, recovered transfers, and non-air destinations equals residual loss; explain imbalance | Tank calibration; invoices; laboratory tests; emission and discharge reports; signed balance review |
| `cp_emissions_wastewater` | all | Particulate, solvent, wastewater, and treatment residues | Stack/fugitive test, permit inventory, wastewater meter/sample, and waste manifest | source; substance; compartment; concentration; flow_rate; duration; volume; treatment; destination; method; detection_limit | Site measurement or disclosed regulatory calculation | kg; m3 | By monitoring plan and each shipment | Same period as production | Every included emission point and discharge | Integrate measured load over operating time; subtract neither treatment nor recovery without records | Accredited test or method reference; permit report; manifest; detection-limit handling |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_seed_mass` | Seed receipts | accepted_seed_mass = gross_mass - tare_mass - separately weighed rejected material; any dry-matter conversion uses measured moisture for the same batch | gross_mass; tare_mass; rejected_mass; measured_moisture; declared mass basis | accepted seed mass by type and basis | us-epa-ap42-9-11-1-vegetable-oil-processing |
| `calc_period_normalization` | All inventory rows | normalized_amount = reporting_period_amount / qualifying_crude_oil_output_mass | closed-period flow amount; qualifying crude-oil mass on the same basis | amount per 1 kg reference crude oil | eu-pef-2021-2279 |
| `calc_stock_change` | Stored seed, solvent, crude oil, co-products, and wastes | consumed_or_produced = measured transfers adjusted by opening stock minus closing stock using one cut-off time | purchases/transfers; opening stock; closing stock; measurement basis | closed-period material amount | eu-pef-2021-2279 |
| `calc_solvent_loss` | Solvent route | residual solvent loss = solvent inputs + opening stock - closing stock - recovered/offsite solvent - quantified carryover to oil, meal, wastewater, and other destinations; compare the residual with measured air release and disclose imbalance | all `cp_solvent_balance` fields | solvent loss and reconciliation gap per kg crude oil | us-epa-ap42-9-11-1-vegetable-oil-processing |
| `calc_allocation_fraction` | Multi-output process | allocation_fraction_i = selected allocation basis for co-product i / sum of the same basis across all co-products | co-product outputs; physical relationship data or representative values/prices | allocation fraction for each co-product; total = 1.000 | eu-pef-2021-2279; ilcd-format-1-1-process |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and seed inputs | Retain seed type/species, crude versus refined state, extraction route, conditioning/degumming state, low-erucic or canola claim when applicable, and matching Tiangong flow identity. | Product specification; batch record; flow UUID; Codex identity test or supplier certificate when used |
| `dq_temporal` | All foreground data | Use one closed, representative reporting period shared by inputs and outputs; normally 12 consecutive months or a complete seasonal campaign. Explain outages, abnormal campaigns, and extrapolation. | Dated meter, production, stock, and shipment records; period reconciliation |
| `dq_measurement` | Mass, utilities, solvent, emissions, and wastewater | Use calibrated instruments or traceable invoices. Preserve raw units, conversion factors, detection limits, shared-meter allocation, and stock adjustments. | Calibration certificates; invoices; laboratory/permit reports; calculation workbook |
| `dq_completeness` | Each included process | Reconcile seed, oil, co-products, wastes, solvent, and stocks. List excluded flows and demonstrate that route-conditional solvent and emission rows were not silently omitted. | Signed mass/solvent balance; completeness checklist; exception log |
| `dq_representativeness` | Aggregated production mix | Report site coverage, geography, seed shares, technology shares, capacity/utilisation, and reasons the period represents the published dataset. | Facility roster; production summary; supplier and technology records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference product UUID must be `092932e3-7b6d-430d-b6e5-722b8f4e1c6d`, the property must be Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group must be Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and normalized amount must equal 1 kg. | codex-cxs-210-named-vegetable-oils |
| `validate_crude_state` | Product identity and boundary | Reject a package that includes alkali neutralisation, bleaching, deodorisation, or another refining step in the reference-product process without separating it into a downstream refined-oil dataset. Require the declared clarification/degumming state. | codex-cxs-210-named-vegetable-oils; us-epa-ap42-9-11-1-vegetable-oil-processing |
| `validate_route_completeness` | Mechanical and solvent routes | The process map and inventory must match the declared route. If solvent is used, require solvent identity, make-up, recovery, stock, carryover, wastewater, and air-loss reconciliation; if not used, mark those checks not applicable. | us-epa-ap42-9-11-1-vegetable-oil-processing |
| `validate_mass_balance` | Seed preparation, extraction, and storage | Require linked internal transfers and a disclosed mass balance across seed, crude oil, co-products, wastes, moisture change, and stocks. Unexplained imbalance must be reported and reviewed. | eu-pef-2021-2279 |
| `validate_allocation` | Multi-output processes | Require allocation hierarchy, basis, period, fractions, co-product list, and fractions summing to 1.000 within rounding tolerance; reject soybean-meal or other semantically mismatched proxy identities. | eu-pef-2021-2279; ilcd-format-1-1-process |
| `validate_qualifiers` | Dataset metadata | Require all reference-flow qualifiers, site/geography, reporting period, source ids, measurement basis, and unresolved UUID declarations before publication. | ilcd-format-1-1-process |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for crude rape/colza/mustard oil production, publishable after review as a secondary_dataset and, when representative, as a background_dataset |
| downstream_use | Process and lifecyclemodel construction for products consuming qualifying crude oil before downstream refining or conversion |
| allowed_use | Site-specific or declared production-mix cradle-to-plant-gate modelling when product identity, route, boundary, allocation, geography, and period match the study |
| excluded_use | Refined-oil reference product; retail cooking oil; biodiesel or chemical conversion; comparative assertion without compatible reviewed scope; extrapolation to an undeclared seed type or extraction route |
| required_metadata | PCR id; product flow UUID; seed types and shares; extraction route; solvent identity when applicable; clarification/degumming state; mass basis; geography; sites; reporting period; allocation method; co-products; upstream seed datasets; data sources |
| required_quality_disclosure | Measurement coverage; meter and scale calibration; stock reconciliation; seed and oil mass balance; solvent balance where applicable; shared-utility allocation; missing flows; cut-offs; uncertainty; representativeness; unresolved UUIDs |
| update_trigger | Material change in product identity, flow UUID, feedstock mix, extraction technology, solvent, boundary, allocation method, site coverage, reporting period, quality specification, or external method/source requirements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-named-vegetable-oils` | standard | Codex Alimentarius Commission, CXS 210-1999, Standard for Named Vegetable Oils, amended 2024 and published with 2026 correction, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+210-1999%2FCXS_210e.pdf (retrieved 2026-08-10) | Rapeseed and mustard-seed oil identity; crude-oil composition/quality context; distinction of virgin and cold-pressed processing claims |
| `us-epa-ap42-9-11-1-vegetable-oil-processing` | official_guidance | U.S. Environmental Protection Agency, AP-42 Section 9.11.1 Vegetable Oil Processing, November 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf (retrieved 2026-08-10) | Generic oilseed handling and preparation; route-conditional solvent extraction, desolventizing, solvent recovery, crude-oil storage, particulate and solvent inventory requirements; no soybean-specific amount is adopted as a rapeseed/mustard default |
| `eu-pef-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-10) | Company-specific manufacturing data, inventory consistency, allocation decision hierarchy, and representative reporting |
| `ilcd-format-1-1-process` | official_guidance | European Commission Joint Research Centre, ILCD Format 1.1 Documentation — Process data set, https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_ProcessDataSet.html (retrieved 2026-08-10) | Allocation fraction documentation, modelling and validation metadata, completeness, review, and data-quality disclosure |
