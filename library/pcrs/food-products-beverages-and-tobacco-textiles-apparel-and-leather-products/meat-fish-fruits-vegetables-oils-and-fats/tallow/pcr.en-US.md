---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tallow
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tallow

## 1. Scope and Applicability

This PCR governs foreground data packages for rendered tallow and the closely defined products within CPC 3.0 subclass 21523. It covers rendered fat from cattle, buffalo, sheep, or goats, together with greaves fat and oleo stock when the concrete dataset declares that subtype. It applies to food, feed, or technical grades only when the species, grade, intended use, product subtype, rendering route, any refining route, and factory-gate condition are stated.

For an edible-tallow claim, Codex CXS 211-1999 is used only for its stated scope: edible tallow obtained by rendering clean, sound fatty tissues, attendant muscles, and bones of healthy bovine animals and/or sheep fit for human consumption. That definition does not automatically establish food-grade status for buffalo fat, goat fat, greaves fat, oleo stock, or non-food tallow. Those products require the applicable jurisdictional specification and evidence. Refined edible tallow must be identified as refined rather than silently combined with unrefined edible tallow.

The PCR excludes unrendered animal fat; rendered pig or poultry fat; fish, fish-liver, shellfish, or marine-mammal fats and oils; oleo-oil, tallow oil, and other separately traded fractions; vegetable tallow; biodiesel and downstream oleochemicals; and mixtures for which species shares and upstream burdens cannot be traced. CXS 329-2017 confirms that fish oils are a separate product family and is used only to support that exclusion.

This is an intermediate-product, cradle-to-factory-gate rule. The foreground starts with receipt of the declared raw fatty material at the rendering facility and ends with conforming tallow in its declared dispatch condition. Upstream animal husbandry, slaughter, collection, and inbound logistics are represented by linked upstream datasets. Distribution after dispatch, conversion into food, feed, fuel, soaps, fatty acids, biodiesel, or other products, use, and end of life are outside this foreground boundary unless the study explicitly extends it and reports the extension separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tallow |
| classification_refs | CPC 3.0: 21523 Tallow (exact) |
| covered_products | Rendered fat from cattle, buffalo, sheep, or goats; greaves fat; oleo stock; edible, feed, or technical grade when explicitly declared |
| excluded_products | Unrendered animal fat; rendered pig or poultry fat; fish and marine oils; oleo-oil; tallow oil and separately traded fractions; vegetable tallow; downstream oleochemicals and fuels; untraceable mixed-species averages |
| representative_product | Rendered tallow from one declared species group, separated from water and solids and delivered at the rendering or refining facility gate |
| production_route | Receipt and preparation of declared fatty material; thermal rendering or melting; phase separation and filtration; conditional purification or refining; storage and dispatch |
| market_state | Bulk or packaged tallow at factory gate, with species, subtype, grade, intended use, refining status, physical state, and quality specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply tallow of the declared species, subtype, grade, intended use, and rendering/refining route at the factory gate |
| How much | 1 kg net mass of conforming tallow |
| How well | Meets the declared purchaser, regulatory, or product specification; an edible-tallow claim additionally follows the applicable CXS 211-1999 product definition and food-safety requirements |
| How long or cycle | One dispatch lot at the facility gate; no storage life or downstream service is credited |
| reference_flow_link | `tallow_at_factory_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | animal species or traceable species shares; product subtype; grade; intended use; raw-material eligibility; rendering technology; refining or modification steps; physical state and temperature at weighing; moisture/volatile-matter and insoluble-impurity basis; quality specification; geographic and temporal scope; packaging state; allocation method |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent data-package field. A dataset for a marketed mixed-species product may aggregate only traceable species-specific inventories using actual lot shares; an unspecified or unconditional average across cattle, buffalo, sheep, and goats is not conforming.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product at dispatch | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net mass at the declared dispatch temperature and physical state. Exclude pallets, containers, and other packaging from the reference amount; report tare determination and any stock correction. |
| `product_condition_basis` | Reference product quality and yield | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether mass is as-dispatched or corrected for moisture/volatile matter or insoluble impurities. Do not apply an unreported correction or compare yields on different bases. |
| `species_mass_separation` | Raw material, intermediate stocks, and output | Mass | kg | Record each animal species separately from receipt through burden assignment. If a physical blend is marketed, retain species-specific masses and calculate only the declared lot-weighted result. |
| `energy_unit_consistency` | Purchased electricity, fuels, steam, and recovered energy | Energy or fuel mass/volume | kWh, MJ, kg, or m3 as metered | Preserve the meter or invoice unit, state heating-value and steam-property conventions where conversion is needed, and normalize only after conversion factors are documented. |
| `water_mass_volume_conversion` | Process and cleaning water | Volume or Mass | m3 or kg | Preserve measured volume or mass. If converted, record water density and measurement temperature or use a documented facility convention. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fatty material received at the rendering facility, identified by animal species or traceable species shares, source establishment and lot, grade/eligibility, preservation condition, and mass basis |
| starting_condition_role | Foreground gate-in input; upstream animal husbandry, slaughter, collection, and inbound logistics remain linked upstream processes rather than disappearing at the gate |
| product_classification_scope | Rendered animal fats within the semantic scope of CPC 3.0 subclass 21523, independent of any classification tree as canonical identity |
| recursive_input_rule | Purchased tallow or another CPC 21523 product used as an input is recorded as a distinct upstream product flow with its own conforming dataset; it is not recursively re-rendered into the same foreground record or treated as burden-free feedstock |
| upstream_dataset_requirement | Provide species- and grade-specific upstream datasets for raw fatty material and other purchased inputs, including the declared slaughterhouse/rendering allocation status and inbound logistics. PEF-based studies must apply the applicable species-specific animal-husbandry and slaughterhouse rules rather than a cross-species average |
| disclosure | Declare included unit processes, species/subtype/grade/use, raw-material source and eligibility, rendering and refining technology, allocation, recycled or recovered energy, wastewater and air treatment, packaging, excluded processes, cut-offs, data gaps, and any boundary extension |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rendering_gate_to_gate` | foreground_rendering_system | Include receipt/preparation, rendering or melting, fat/water/solids separation, filtration, required purification or refining, internal transfers, storage, dispatch, cleaning, utilities, direct emissions, residues, wastewater, and on-site treatment attributable to the declared product. | `unsd-cpc-3-0-2025`; `eu-pef-2021` |
| `boundary_upstream_traceability` | raw_fatty_material | Link upstream husbandry, slaughter, collection, and inbound-logistics datasets by declared species and material grade; do not assign zero upstream burden merely because the material is called a by-product. | `eu-pef-2021` |
| `boundary_edible_claim` | edible_tallow | Apply the CXS 211-1999 edible-tallow definition only to eligible bovine and/or sheep raw material and retain evidence of fitness for human consumption; disclose refining and labelling status. | `codex-cxs-211-1999` |
| `boundary_fdm_bat_applicability` | regulatory_method_selection | Do not use the EU Food, Drink and Milk BAT conclusions as a rendering/fat-melting process benchmark: their scope explicitly excludes primary products from animal by-products such as rendering and fat melting. Use the applicable local permit and animal-by-product requirements instead. | `eu-fdm-bat-2019` |
| `boundary_no_silent_cutoff` | foreground_inventory | Record all known foreground inputs and outputs. Any goal-specific cut-off must be explicitly justified, quantified, and reported; a PEF-conformant study follows the PEF cut-off rule and limitations reporting. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt` | Raw-material receipt and preparation | required | Always | Identify, weigh, segregate, store, trim, and size-reduce eligible fatty material | Per mass of prepared rendering feed |
| `thermal_rendering` | Thermal rendering and phase separation | required | Always | Release fat and separate rendered fat from water and solids | Per mass of crude rendered tallow |
| `tallow_conditioning` | Tallow purification, refining, or modification | conditional | Include every washing, drying, neutralisation, bleaching, deodorisation, fractionation, hydrogenation, or other conditioning step used for the declared product | Produce the declared grade and specification | Per mass of conditioned tallow |
| `storage_dispatch` | Product storage and dispatch | required | Always | Store, maintain condition, weigh, package if applicable, and transfer conforming product at the factory gate | 1 kg net tallow at factory gate |

### Process: Raw-material receipt and preparation (`raw_material_receipt`)

#### Inputs

##### Product flows

###### Species- and grade-specific fatty material (`raw_fatty_material`)

Record every incoming lot of bovine, buffalo, sheep, or goat fatty material, greaves-fat feed, or oleo-stock feed separately. The record establishes eligibility and connects the foreground to its upstream burden.

- Selected flow: Declared raw fatty material by species and subtype
- Flow property / unit: Mass / kg
- Amount rule: Calibrated net receipt mass, corrected only for documented stock transfers or rejected material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final tallow at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_material_lots`
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared rendering feed (`prepared_rendering_feed`)

Record the species-segregated material transferred to the rendering equipment after documented preparation losses.

- Selected flow: Prepared fatty material
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or calculated receipt mass minus separately measured rejects and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final tallow at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

###### Rejected or ineligible source material (`receipt_rejects`)

Record material rejected during inspection, trimming, or preparation and its actual treatment route; do not net it silently from the receipt record.

- Selected flow: Rejected animal-derived material, route-specific
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass by reason and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final tallow at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Elementary flows

### Process: Thermal rendering and phase separation (`thermal_rendering`)

#### Inputs

##### Product flows

###### Prepared fatty material (`rendering_feed_input`)

Record the prepared feed transferred from receipt by species, lot, and grade.

- Selected flow: Prepared fatty material
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled transfer mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`

###### Thermal energy supplied to rendering (`rendering_thermal_energy`)

Record purchased steam, fuel, or separately metered recovered heat used by the rendering operation. Recovered energy must retain its source and allocation treatment.

- Selected flow: Steam, fuel, or recovered heat, route-specific
- Flow property / unit: Energy or fuel mass/volume / metered unit
- Amount rule: Metered use, invoice allocation supported by operating hours, or documented energy balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Electricity supplied to rendering and separation (`rendering_electricity`)

Record electricity for size reduction, cooking, presses, decanters, centrifuges, pumps, filtration, and attributable controls.

- Selected flow: Electricity, market or supplier-specific as documented
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption or documented facility-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Rendering and cleaning water (`rendering_water`)

Record water that enters the process or attributable cleaning system, segregated by source and use. A dry-rendering route may legitimately report no process water but must still record cleaning water.

- Selected flow: Water supply by source and treatment
- Flow property / unit: Volume / m3
- Amount rule: Metered or reconciled water supplied to rendering and attributable cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_cleaning`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Crude rendered tallow (`crude_tallow_output`)

Record rendered fat leaving primary phase separation, before any declared downstream conditioning.

- Selected flow: Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net mass, reconciled with tank inventory change and sampling losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per rendering batch or reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Separated edible or marketable solids (`rendering_coproducts`)

Record greaves, proteinaceous solids, bones, or other marketable outputs separately by legal category, grade, mass, destination, and value. Do not combine marketable products with wastes.

- Selected flow: Route-specific rendering co-product
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass by co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg crude tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

###### Rendering wastewater or separated aqueous phase (`rendering_wastewater`)

Record the aqueous phase and cleaning wastewater at the point it enters on-site treatment or leaves the facility, including its treatment destination and relevant pollutant load data.

- Selected flow: Wastewater, route- and treatment-specific
- Flow property / unit: Volume / m3
- Amount rule: Metered or water-balance-derived volume; pollutant loads use measured concentration and flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_waste`

###### Non-marketable rendering residues (`rendering_residues`)

Record solids, sludge, screenings, and off-specification material by legal status and actual treatment route.

- Selected flow: Rendering residue or treatment waste, route-specific
- Flow property / unit: Mass / kg
- Amount rule: Measured mass or documented container/hauler record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_waste`

##### Elementary flows

###### Direct air emissions from rendering and on-site combustion (`rendering_air_emissions`)

Record measured or calculated direct releases from rendering, odour-control equipment, boilers, and other included combustion. Do not duplicate emissions already represented by a purchased-energy dataset.

- Selected flow: Individual elementary flows to air selected for each reported substance
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data using a disclosed source-backed factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_and_waste`

### Process: Tallow purification, refining, or modification (`tallow_conditioning`)

#### Inputs

##### Product flows

###### Crude tallow sent to conditioning (`conditioning_feed`)

Record crude tallow entering each included purification, refining, or modification route without mixing species or grades in the inventory record.

- Selected flow: Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass and tank inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

###### Conditioning utilities and process aids (`conditioning_inputs`)

Record water, electricity, heat, acids, alkalis, bleaching media, filter aids, antioxidants, catalysts, hydrogen, and other inputs individually when used; the row is instantiated once per actual input.

- Selected flow: Actual utility or process-aid product
- Flow property / unit: Applicable mass, volume, or energy property / recorded unit
- Amount rule: Meter, batch sheet, invoice, dosing log, or stock-change record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned or refined tallow (`conditioned_tallow_output`)

Record the tallow leaving the last included conditioning step and state every applied refinement or modification.

- Selected flow: Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net mass reconciled with inventory and conditioning losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning batch or reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `codex-cxs-211-1999`

##### Waste flows

###### Conditioning residues and wastewater (`conditioning_waste`)

Record soapstock, spent media, sludge, wastewater, off-specification fractions, and other residues individually by mass or volume and treatment route.

- Selected flow: Actual conditioning waste or wastewater
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: Measured or reconciled quantity by waste type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_waste`

##### Elementary flows

###### Direct conditioning emissions (`conditioning_direct_emissions`)

Record direct air or water releases from included conditioning and treatment steps as individual elementary flows.

- Selected flow: Individual elementary flow selected for the emitted substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data with a disclosed source-backed factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned tallow output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_and_waste`

### Process: Product storage and dispatch (`storage_dispatch`)

#### Inputs

##### Product flows

###### Tallow transferred to product storage (`dispatch_feed`)

Record crude or conditioned tallow entering product storage, matching the declared product route.

- Selected flow: Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass and tank inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg tallow at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_and_quality`

###### Storage energy and dispatch packaging (`storage_dispatch_inputs`)

Record tank heating, pumping, loading electricity, inert gas, and packaging separately when used. Bulk reusable transport containers are modelled according to the study's documented reuse convention.

- Selected flow: Actual energy carrier, gas, or packaging product
- Flow property / unit: Applicable mass, volume, or energy property / recorded unit
- Amount rule: Meter, invoice, packaging issue, or documented reuse record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tallow at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_and_quality`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tallow at factory gate (`tallow_at_factory_gate`)

This is the reference product in the declared dispatch condition. Product identity and quality qualifiers must match the lot and the intended use.

- Selected flow: Tallow `74260d26-09ba-4d24-93bd-c7687c2f2511`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg calibrated net dispatch mass, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg tallow at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

###### Storage losses, off-specification product, and packaging waste (`storage_dispatch_waste`)

Record actual tank bottoms, spills recovered as waste, rejected product, and packaging waste separately with their destinations.

- Selected flow: Actual waste flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity, inventory reconciliation, or documented waste-transfer record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tallow at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_and_quality`

##### Elementary flows

###### Direct storage and loading releases (`storage_dispatch_emissions`)

Record actual direct releases from storage, heating, loading, spills, and on-site controls when they cross the environmental boundary.

- Selected flow: Individual elementary flow selected for the emitted substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data with a disclosed source-backed factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg tallow at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_and_waste`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multifunctional_foreground_processes | First subdivide directly attributable receipt, rendering, conditioning, storage, treatment, energy, water, and emission records by product, species, grade, and process. Use system expansion only when the additional function and substituted product can be modelled and justified for the study goal. | `eu-pef-2021` |
| `allocation_species_specific_upstream` | husbandry_slaughter_and_rendering_burdens | Keep cattle, buffalo, sheep, and goat upstream burdens separate. For PEF-based cattle, sheep, or goat studies, apply the applicable PEF animal-husbandry and slaughterhouse rules for that species group; do not calculate an unconditional cross-species average. Buffalo or other cases outside an explicit PEF default require a justified, source-backed or foreground allocation method. | `eu-pef-2021` |
| `allocation_remaining_coproducts` | non_subdividable_rendering_and_conditioning_flows | If subdivision or justified system expansion cannot resolve a multifunctional flow, use a relevant physical relationship only when it represents the function. Otherwise use economic allocation with contemporaneous output masses and market values at the same process gate and period, and disclose why higher-priority approaches were rejected. | `eu-pef-2021` |
| `allocation_waste_status` | residues_and_recovered_outputs | Determine product, co-product, by-product, residue, or waste status from actual legal status, market transaction, and destination. Do not remove burdens by relabelling a valuable output as waste, and include burdens of on-site waste management in the producing system unless a governing method explicitly requires another treatment. | `eu-pef-2021` |
| `allocation_physical_blend` | marketed_mixed_species_tallow | A marketed blend may be represented only from separately modelled species inventories using collected lot masses: blend burden equals the sum of each species-specific burden multiplied by its actual mass share. Report the shares and source datasets; do not use a generic equal-share or category-average blend. |  |
| `allocation_recovered_energy` | energy_recovery | Report exported or internally recovered energy separately, prevent double counting between avoided purchases and co-product credits, and apply the study's declared multifunctionality method consistently. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material_lots` | `raw_material_receipt` | Raw fatty material identity and receipt | Lot receipt, supplier declaration, weighbridge record, and eligibility record | date/time; supplier and source facility; lot id; species; species share if a physical blend; tissue/material subtype; legal category; grade; intended use; slaughter/fitness evidence when applicable; preservation state; gross, tare, and net mass; rejected mass; inbound route | Calibrated weighing linked to lot inspection and supplier documentation | kg and declared condition | Each receipt lot | All lots in the representative production period | Each source facility and rendering site | Sum accepted net mass by species, subtype, grade, and route; never aggregate unidentified species | Calibration record; lot traceability; supplier declaration; food-safety or legal eligibility evidence where applicable |
| `cp_energy_records` | `thermal_rendering` | Electricity, fuel, steam, and recovered heat | Meter, invoice, fuel stock, steam record, and operating log | meter id; opening/closing reading; fuel quantity; electricity; steam mass/pressure/temperature; recovered heat source; process operating hours; allocation driver; conversion factor and source | Submetering preferred; otherwise reconciled facility meter or invoice with documented allocation | kWh, MJ, kg, m3 | Each batch, shift, or meter interval | Representative production period including shutdown/start-up treatment | Each included process and site | Convert with documented factors, subtract separately metered non-process use, and normalize to process output | Meter calibration; invoice reconciliation; fuel/steam specification; allocation worksheet |
| `cp_water_and_cleaning` | `thermal_rendering` | Process and cleaning water | Water meter, cleaning log, and chemical dosing record | source; meter readings; process use; cleaning use; recirculation; discharge route; cleaning agent and dose | Metered by use where practical; otherwise water balance with documented allocation | m3, kg | Each batch, cleaning event, or meter interval | Representative production period | Each rendering, conditioning, and cleaning system | Sum by source and use; keep recirculated water separate from fresh withdrawal | Meter calibration; cleaning log; water balance closure |
| `cp_mass_balance` | `thermal_rendering` | Materials, products, co-products, rejects, residues, and stock | Batch sheet, tank gauge, weighbridge, laboratory sample, and inventory record | opening/closing stock; receipts/transfers; species; grade; crude and conditioned tallow; co-product masses; wastewater/aqueous phase; residues; sampling and spill losses | Direct weighing or calibrated tank measurement with reconciled stock change | kg and m3 where applicable | Each batch or continuous-production reconciliation period | Representative production period | Each process, species, grade, and site | Inputs plus opening stock equal outputs plus closing stock and recorded losses within a declared site-specific tolerance | Scale/tank calibration; signed batch records; reconciliation report and investigation of deviations |
| `cp_conditioning_records` | `tallow_conditioning` | Conditioning inputs and route | Batch recipe, dosing log, meter, and stock record | conditioning step; temperature/time where relevant; water; heat; electricity; acid/alkali; bleaching/filter media; catalyst or hydrogen; additives; input/output mass; residues | Batch records and calibrated dosing or utility measurement | kg, m3, kWh, MJ | Each conditioning batch or meter interval | All included conditioning campaigns | Each declared technology and site | Aggregate only identical species, grade, route, and product specification | Batch authorization; meter/dosing calibration; material specification; route traceability |
| `cp_direct_emissions_and_waste` | `thermal_rendering` | Direct air/water emissions and waste destinations | Stack/vent measurement, wastewater sample and flow, emission calculation, waste transfer, and treatment record | substance; compartment; point; flow; concentration; sampling time; activity data; factor and source; waste type; legal status; mass/volume; destination; on-site treatment | Direct measurement where required; otherwise calculation from collected activity using a disclosed source-backed factor | kg, m3, concentration unit | At permit/monitoring frequency and for each waste transfer | Representative production period, including abnormal events disclosed separately | Every included emission point and treatment route | Calculate loads from matched flow and concentration periods; sum by substance and compartment; normalize after treatment boundary is fixed | Laboratory accreditation/QA; sampling plan; monitor calibration; factor source; waste manifest; permit record |
| `cp_dispatch_and_quality` | `storage_dispatch` | Product mass, condition, quality, and packaging | Tank record, dispatch weigh ticket, certificate of analysis, packaging issue, and product release | lot id; species/subtype; grade/use; route; refining status; temperature/state; gross/tare/net mass; packaging; moisture/volatile matter; insoluble impurities; applicable quality tests; specification; release decision | Calibrated net weighing linked to lot release and laboratory record | kg and test-specific units | Each dispatch lot | All dispatched lots in the representative production period | Each product, storage system, and site | Sum only conforming net mass on the declared condition basis; keep off-specification product separate | Scale calibration; certificate of analysis; specification and release approval; traceability to input lots |
| `cp_allocation_records` | `thermal_rendering` | Allocation and co-product evidence | Output mass, sales record, market evidence, and allocation worksheet | output identity; species; grade; legal status; mass; price; currency; market and date; destination; directly attributable inputs; allocation method; justification; factor | Reconcile production and sales records at the same process gate and period | kg, currency/kg, dimensionless factor | Each reporting period and material method change | Same period as inventory data | Each multifunctional process and site | Apply subdivision first; calculate any economic shares from matched output masses and contemporaneous values; retain species-specific factors | Sales/invoice evidence; mass reconciliation; approved method rationale; sensitivity result where required |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_net_mass` | Dispatch lot | Net reference mass = gross dispatch mass - tare mass - excluded packaging mass; apply a stock correction only when the measurement boundary requires it and retain the reconciliation | gross mass; tare; packaging mass; stock correction | kg tallow at declared dispatch condition |  |
| `calc_normalized_inventory` | Each inventory row | Normalized amount = included-period row quantity / conforming reference-product net mass from the same period and scope | row quantity; conforming net tallow mass | row amount per 1 kg tallow | `eu-pef-2021` |
| `calc_material_balance` | Each material process | Balance difference = inputs + opening stock - outputs - closing stock - separately recorded losses; compare with the site's declared measurement-uncertainty tolerance and investigate exceedance | all material transfers; stocks; losses | reconciled mass balance and deviation |  |
| `calc_emission_load` | Direct measured emission | Emission load = matched concentration x matched flow, with unit and moisture/standard-condition conversions documented; calculated emissions instead use collected activity x disclosed source-backed factor | concentration and flow, or activity and factor | kg substance by compartment |  |
| `calc_economic_allocation` | Remaining non-subdividable multifunctional burden | Economic share for output i = (mass_i x contemporaneous gate price_i) / sum(mass_j x gate price_j); apply only after higher-priority options are rejected and keep species groups separate | output masses; matched prices; directly attributable burdens | allocation shares and allocated inventory | `eu-pef-2021` |
| `calc_traceable_species_blend` | Marketed physical blend | Blend inventory per kg = sum(actual mass share_s x species-specific inventory_s); shares must sum to one after rounding reconciliation | actual species masses and species-specific inventories | declared lot-weighted blend inventory |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference flow and raw material | Species, subtype, grade, intended use, raw-material eligibility, route, refining status, physical state, and specification must be traceable from receipt through dispatch. | Lot genealogy, supplier declarations, batch records, and product release record |
| `dq_measurement` | Mass, energy, water, and direct emissions | Use calibrated or verified instruments where available; document meter coverage, estimation method, unit conversions, uncertainty, and reconciliation. | Calibration certificates, meter map, invoices, laboratory QA, and calculation workbook |
| `dq_temporal` | Foreground reporting period | Cover a representative operating period and disclose dates, seasonality, campaigns, start-up/shutdown treatment, abnormal events, and missing intervals. | Production calendar, operating log, and completeness assessment |
| `dq_completeness` | Foreground inventory | Include all known product, co-product, waste, utility, and direct elementary flows for included processes; list and justify any exclusions or data gaps. | Process-flow diagram, input/output register, mass/energy/water reconciliation, and limitations register |
| `dq_species_separation` | Upstream and foreground aggregation | Preserve species-specific masses, upstream datasets, and allocation. A mixed-species marketed lot requires actual shares and separately modelled components. | Lot records, species declarations, allocation worksheet, and blend calculation |
| `dq_allocation` | Multifunctional processes | Demonstrate subdivision of attributable flows first and retain matched mass, price, market, time, and rationale for any remaining allocation. | Process-level meters/records, co-product sales evidence, method decision, and sensitivity analysis where required |
| `dq_source_scope` | External methods and standards | Apply each source only within its scope. In particular, do not treat CXS 211 as defining all CPC 21523 products or EU FDM BAT as a rendering/fat-melting benchmark. | Source applicability matrix and dataset methodological notes |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | The reference product UUID must be `74260d26-09ba-4d24-93bd-c7687c2f2511`, the Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference amount 1 kg net tallow. |  |
| `validate_required_qualifiers` | dataset_metadata | Reject an incomplete package when species or traceable shares, subtype, grade, intended use, route, refining status, physical state/temperature, quality basis, packaging state, or allocation method is missing. | `unsd-cpc-3-0-2025`; `codex-cxs-211-1999` |
| `validate_scope_exclusions` | product_identity | Reject pig fat, poultry fat, fish or marine oils, unrendered fat, oleo-oil, tallow oil/fractions, vegetable tallow, downstream oleochemicals/fuels, and untraceable mixtures as reference products under this PCR. | `unsd-cpc-3-0-2025`; `codex-cxs-329-2017` |
| `validate_edible_tallow_claim` | edible_tallow | An edible-tallow claim must identify eligible bovine and/or sheep material fit for human consumption and disclose any refining; other species or grades must use their applicable specification without claiming automatic CXS 211 coverage. | `codex-cxs-211-1999` |
| `validate_species_no_unconditional_average` | inventory_and_allocation | Fail validation when different species are pooled without actual lot shares, separate upstream inventories, and the traceable blend calculation, or when one species allocation factor is applied indiscriminately to another species. | `eu-pef-2021` |
| `validate_process_route` | process_inventory | The inventory must include all required processes and every conditioning step actually used; it must not include a generic refining route for an unrefined product or omit treatment and direct releases inside the declared boundary. | `eu-pef-2021` |
| `validate_mass_reconciliation` | material_inventory | Inputs, outputs, stock change, and separately recorded losses must reconcile within a declared, evidence-based site tolerance; missing co-products, wastewater, or residues make the check inconclusive rather than zero. |  |
| `validate_allocation_hierarchy` | multifunctional_processes | Verify subdivision first, then justified system expansion or a relevant physical relation, and only then another relationship such as economic allocation; verify consistent gates, periods, species, and output status. | `eu-pef-2021` |
| `validate_emissions_and_waste` | direct_environmental_flows | Confirm that direct air/water emissions and waste quantities use measured records or collected activity with disclosed source-backed factors and that on-site treatment is neither omitted nor double counted. | `eu-pef-2021` |
| `validate_source_applicability` | method_sources | Flag any use of EU FDM BAT rendering or fat-melting values as unsupported because that decision excludes primary animal-by-product rendering and fat melting from its scope. | `eu-fdm-bat-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a declared tallow product and route |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for studies needing species-, grade-, route-, geography-, and time-matched factory-gate tallow |
| allowed_use | Use for the declared species/subtype/grade/use and rendering/refining route, with compatible upstream slaughter/allocation modelling and explicit quality basis |
| excluded_use | Generic proxy across animal species, edible and non-edible grades, materially different refining routes, untraceable mixtures, pig/poultry/marine/vegetable fats, or downstream oleochemical/fuel production without an explicit model extension |
| required_metadata | PCR id and version; product-flow UUID; species or actual species shares; subtype; grade and intended use; raw-material eligibility; facility geography; technology and refining steps; reference condition; reporting period; allocation method/factors; upstream dataset identities; packaging; data sources; cut-offs and limitations |
| required_quality_disclosure | Meter and laboratory coverage; calibration; mass/energy/water reconciliation; temporal and site coverage; species traceability; allocation evidence; direct-emission method; missing flow UUIDs or data; source applicability; uncertainty and any inconclusive validation checks |
| update_trigger | Change in animal species or shares, raw-material eligibility or source, product grade/use/specification, rendering or refining technology, facility boundary, energy/water/emission treatment, co-product market or allocation method, upstream dataset, regulation/standard, or a material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, subclass 21523 Tallow, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Category inclusions and exclusions; distinction from unrendered, pig, poultry, marine, fractionated, and vegetable fats |
| `codex-cxs-211-1999` | `standard` | Codex Alimentarius, *Standard for Named Animal Fats (CXS 211-1999)*, amended through 2024, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf (retrieved 2026-08-12) | Edible bovine/sheep tallow and oleo-stock scope, raw-material fitness, refined-product disclosure, quality-basis context |
| `codex-cxs-329-2017` | `standard` | Codex Alimentarius, *Standard for Fish Oils (CXS 329-2017)*, amended through 2024, https://workspace.fao.org/sites/codex/Standards/CXS%20329-2017/CXS_329e.pdf (retrieved 2026-08-12) | Confirms fish and shellfish oils as a separate product family excluded from this PCR |
| `eu-pef-2021` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Functional unit, boundary, company-specific inventory, cut-off disclosure, multifunctionality hierarchy, and species-specific animal/slaughterhouse allocation rules |
| `eu-fdm-bat-2019` | `official_guidance` | European Commission, Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-12) | Applicability screen: explicitly excludes primary animal-by-product rendering and fat melting, preventing misuse of its sector values |
