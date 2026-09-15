---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.chain-except-articulated-link-chain-and-parts-thereof-of-iron-or-steel-chain-and-parts-58cc71fb
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Chain (except articulated link chain) and parts thereof, of iron or steel; chain and parts thereof, of copper

## 1. Scope and Applicability

This PCR governs foreground data packages for finished iron or steel chain other than articulated link chain, finished copper chain, and separately marketed parts of those chains. It covers factory operations from receipt of purchased metal wire or rod and other purchased inputs through any applicable drawing, cutting, link or part forming, electric welding or other joining, heat treatment, cleaning, surface finishing, proof testing, final inspection, and release of the unpackaged product at the factory gate.

Articulated link chain, wire rope, stranded wire or cable, chain slings assembled with hooks or other lifting accessories, upstream primary metal production, use, maintenance, repair, transport beyond the factory gate, packaging, and end-of-life are outside this PCR. A data package may include only operations that actually occur, but it shall disclose every omitted conditional operation and shall add any actual site exchange not represented by the baseline atomic rows below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.chain-except-articulated-link-chain-and-parts-thereof-of-iron-or-steel-chain-and-parts-58cc71fb |
| classification_refs | CPC 3.0: 42991 (exact) |
| covered_products | Iron or steel skid, stud-link, welded-link and other non-articulated chain; copper chain; and separately marketed parts thereof |
| excluded_products | Articulated link chain; wire rope, stranded wire and cable; complete chain slings or assemblies whose reference product includes hooks or other accessories; chains of materials other than iron, steel or copper |
| representative_product | Unpackaged factory-gate finished non-articulated iron/steel chain, copper chain, or a separately marketed chain part |
| production_route | Purchased wire or rod preparation followed by applicable drawing, cutting, forming, joining/welding, heat treatment, cleaning, coating, testing and inspection |
| market_state | Saleable, unpackaged, dry finished chain or chain part at the manufacturing site gate; material, grade, dimensions, joining method, heat treatment, coating and test status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished chain or chain part within this PCR boundary |
| How much | 1 kg net product mass |
| How well | Conforms to the declared material, grade, dimensional, joining, heat-treatment, coating, proof-load and other applicable product specifications |
| How long or cycle | One production lot released at the factory gate; no service-life function is credited |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Chain (except articulated link chain) or chain part, of iron, steel or copper |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | chain or part; iron, steel or copper and alloy/grade; link or part geometry and nominal dimensions; calibrated/non-calibrated status where applicable; joining or welding method; heat-treatment route; coating/finish; proof-load or test specification and result where applicable; net product mass; production site and geography; production period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalized inputs/outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh dry, unpackaged conforming product and normalize all inventory to 1 kg net product. Do not include pallets, reels, drums or removable packaging in reference mass. |
| `metal_mass_balance` | Metal feedstock, finished product and segregated metal scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured material and alloy routes separately. Reconcile input metal mass to conforming product, segregated scrap, scale/sludge retained in other recorded waste, and documented inventory change. |
| `electricity_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh to MJ using 3.6 MJ/kWh; retain the original meter value, voltage level, grid geography, contract mix and included site losses. |
| `gas_volume` | Natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at declared reference temperature and pressure and state whether the meter value is corrected to standard conditions; do not substitute energy without retaining the conversion basis. |
| `solution_mass` | Purchased acids, oxidants and alkali | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record supplied solution mass and declared concentration. Do not report active-substance mass as solution mass without a documented conversion. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground chain manufacturing | Include all site operations from receipt of purchased metal feedstock through release of dry, unpackaged conforming chain or chain parts, including internal recycling and pollution-control operations attributable to the product. | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |
| `boundary_actual_routes` | Conditional operations | Include wire drawing, electric welding or other joining, heat treatment/quenching, acid or mechanical cleaning, coating, proof testing and effluent or off-gas treatment only when performed; disclose absent and outsourced operations and require a supplier dataset for outsourced production steps. | `ec-fmp-bat-2022`; `eu-chain-certification-1973` |
| `boundary_upstream_inputs` | Purchased product and waste-treatment inputs | Link each purchased metal, chemical, fuel, electricity, water and waste-treatment service to a geographically and technologically representative upstream dataset; do not include upstream burdens as direct foreground emissions. | `ec-fmp-bat-2022` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased iron/non-alloy steel wire, alloy-steel wire or copper wire rod at the chain-manufacturing site gate, with material grade, form, dimensions, coating, recycled-content claim and supplier geography declared |
| starting_condition_role | Purchased formed-metal feedstock; upstream metal production and wire/rod manufacture are represented by linked upstream datasets |
| product_classification_scope | Finished non-articulated iron/steel chain and parts, plus copper chain and parts, consistent with CPC 3.0 42991 |
| recursive_input_rule | If purchased chain or an in-scope chain part enters the foreground system, record it as a separate technosphere input with supplier dataset and declared mass; do not recursively recreate its production inside this PCR |
| upstream_dataset_requirement | Use supplier-specific data when available; otherwise use a documented geography-, alloy/grade-, technology-, recycled-content- and product-state-compatible dataset for each purchased input |
| disclosure | Declare material route, feedstock state, forming/joining technology, heat treatment, cleaning chemistry, coating, testing, internal recycling, wastewater/off-gas treatment, outsourced steps, production geography and production period |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `chain_manufacturing` | Integrated chain and chain-part manufacturing | required | All applicable operations performed by or attributable to the manufacturing site are consolidated; route-conditional exchanges are recorded only when present | Foreground manufacturing from purchased metal feedstock to dry, unpackaged conforming factory-gate product | 1 kg net conforming product |

### Process: Integrated chain and chain-part manufacturing (`chain_manufacturing`)

The consolidated process avoids artificial internal intermediate flows while preserving operation-level meter, batch and treatment records. The dataset shall identify which forming, joining, thermal, wet-treatment, coating and testing operations occur.

#### Inputs

##### Product flows

###### Non-alloy steel wire (`non_alloy_steel_wire`)

Record purchased non-alloy steel wire consumed in iron/non-alloy-steel chain or part production.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass minus measured reusable return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `ec-fmp-bat-2022`; `eu-chain-certification-1973`

###### Alloy-steel wire (`alloy_steel_wire`)

Record low-alloy or other alloy-steel wire only for an alloy-steel product route.

- Selected flow: Wire drawing, steel `461d98b3-a825-41bb-9b16-056331873326`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass minus measured reusable return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `ec-fmp-bat-2022`; `eu-chain-certification-1973`

###### Copper wire rod (`copper_wire_rod`)

Record purchased copper wire rod only for copper chain or part production.

- Selected flow: Copper wire rod `99715c69-4245-44ff-a438-0e0d68377386`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass minus measured reusable return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-brass-wire-mill-1971`

###### Purchased electricity (`electricity`)

Record delivered electricity for forming, drawing, welding, heat treatment, cleaning, coating, testing and attributable auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered delivered electricity allocated from operation-level or site-level records, converted under `electricity_conversion`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `ec-fmp-bat-2022`

###### Natural gas (`natural_gas`)

Record gaseous natural gas delivered to onsite furnaces or other directly attributable combustion equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered delivered volume under declared reference conditions, net of separately metered non-product uses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `ec-fmp-bat-2022`

###### Process water (`process_water`)

Record net make-up process water entering cleaning, rinsing, quenching, scrubbing or other product-attributable operations; do not count recirculated water repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water plus documented tank additions minus recovered water exported from the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### Hydrochloric acid solution, 30% (`hydrochloric_acid_30pct`)

Record purchased 30% hydrochloric acid solution only when used for pickling, stripping or acid make-up.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass / kg
- Amount rule: Net purchased or issued solution mass at 30% concentration, excluding recovered acid reused within the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `ec-fmp-bat-2022`

###### Sulfuric acid (`sulfuric_acid`)

Record purchased sulfuric acid only when used for steel or copper pickling or acid regeneration make-up.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Net purchased or issued solution mass at declared concentration, excluding recovered acid reused within the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### Hydrogen peroxide solution, 27.5% (`hydrogen_peroxide_27_5pct`)

Record purchased 27.5% hydrogen peroxide solution only when used in copper bright pickling or an equivalent declared oxidation step.

- Selected flow: Hydrogen peroxide (27.5%) `445b37f0-46b7-400d-a369-530e17d598af`
- Flow property / unit: Mass / kg
- Amount rule: Net issued solution mass at 27.5% concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `us-epa-brass-wire-mill-1971`

###### Sodium hydroxide (`sodium_hydroxide`)

Record sodium hydroxide used for alkaline cleaning, neutralization or attributable wastewater treatment.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Net issued product or solution mass, with supplied concentration declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### Zinc metal (`zinc_metal`)

Record special-high-grade unwrought zinc consumed only when the finished chain or part is zinc-coated onsite.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass / kg
- Amount rule: Purchased zinc charged to the coating system minus measured recovered metal and closing inventory, assigned to conforming product and separately recorded residues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `ec-fmp-bat-2022`

###### Calcium stearate drawing lubricant (`drawing_lubricant_calcium_stearate`)

Record calcium stearate make-up only when it is the specific dry-drawing lubricant used; UUID remains unresolved.

- Selected flow: Calcium stearate
- Flow property / unit: Mass / kg
- Amount rule: Net issued fresh lubricant minus separately recovered reusable lubricant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### Quenching oil (`quenching_oil`)

Record fresh quenching-oil make-up only for an onsite oil-quench heat-treatment route.

- Selected flow: Quenching Oil `02f62137-e204-46e6-8e72-e88b450fbdc4`
- Flow property / unit: Mass / kg
- Amount rule: Net fresh oil addition minus recovered oil exported for reuse; do not count recirculated bath inventory as consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `ec-fmp-bat-2022`; `eu-chain-certification-1973`

##### Waste flows

None expected as inputs. If a site receives waste for treatment or recycling in the chain process, add each concrete waste stream as a separate foreground row.

##### Elementary flows

None expected as direct inputs. Natural resource extraction embodied in purchased materials belongs in linked upstream datasets.

#### Outputs

##### Product flows

###### Reference chain or chain part (`reference_product`)

Record only dry, unpackaged conforming chain or separately marketed chain parts released at the factory gate. The exact TianGong product-flow UUID is unresolved.

- Selected flow: Chain (except articulated link chain) or chain part, of iron, steel or copper
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net conforming product by definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `un-cpc-3-0-2025`; `eu-chain-certification-1973`

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated steel offcuts, flash, cropped ends and rejected steel links leaving for recycling or treatment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured outbound mass plus documented inventory change, excluding internally remelted or directly reused pieces
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `ec-fmp-bat-2022`

###### Copper scrap (`copper_scrap`)

Record segregated copper offcuts and rejected copper links or parts leaving for recycling or treatment.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured outbound mass plus documented inventory change, excluding internally reused copper
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `us-epa-brass-wire-mill-1971`

###### Spent pickling acid (`spent_pickling_acid`)

Record spent hydrochloric- or sulfuric-acid pickling liquor leaving the site boundary, with acid type, residual concentration, dissolved metals and recovery destination declared; UUID remains unresolved.

- Selected flow: Spent pickling acid
- Flow property / unit: Mass / kg
- Amount rule: Measured outbound mass plus documented tank inventory change, net of onsite-regenerated acid returned to use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### Acidic metal-bearing rinse wastewater (`acidic_rinse_wastewater`)

Record segregated acidic rinse wastewater exported to sewer or offsite treatment after subtracting water recirculated onsite; declare pH, principal acid, dissolved metals and treatment destination. UUID remains unresolved.

- Selected flow: Acidic metal-bearing rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-balanced net wastewater crossing the site boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

##### Elementary flows

###### Particulate matter to air (`particulate_matter_air`)

Record measured net particulate matter released to air after capture and abatement from forming, drawing, welding, mechanical cleaning, heat treatment and finishing.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Sum measured channelled and quantified fugitive releases after abatement; avoid double counting captured dust recorded as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `ec-fmp-bat-2022`

###### Hydrogen chloride to air (`hydrogen_chloride_air`)

Record measured net hydrogen chloride released to air from hydrochloric-acid pickling or stripping after abatement.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured channelled plus quantified fugitive HCl release after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `ec-fmp-bat-2022`

###### Nitrogen oxides to air (`nitrogen_oxides_air`)

Record measured aggregate NOx released to air from onsite fuel combustion using the facility's declared reporting convention; UUID remains unresolved and nitrous oxide shall not be substituted.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Measured channelled plus quantified fugitive NOx release after abatement, with NO2-equivalent or other reporting basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `ec-fmp-bat-2022`

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil_air`)

Record direct fossil carbon dioxide from onsite natural-gas combustion or other declared fossil sources; upstream electricity emissions are excluded from this foreground row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct stack measurement or a disclosed site carbon balance based on collected fuel records, with method and factor source retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `ec-fmp-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | Distinct product families, material routes and major operations | Prefer subdivision using operation meters, batch records and product-specific material issues. Keep iron/non-alloy steel, alloy steel and copper routes separate whenever records permit. | `ec-fmp-bat-2022` |
| `allocation_shared_operations` | Shared forming, heat treatment, cleaning, coating, testing and auxiliaries | If subdivision is not possible, allocate shared burdens by a documented causal driver such as machine time, furnace load-time, treated surface area, bath throughput or metered energy. Use mass only when no more causal driver exists and disclose the sensitivity. | `ec-fmp-bat-2022` |
| `allocation_scrap_no_avoided_burden` | Steel scrap, copper scrap and recovered treatment materials | Report all output masses and destinations. Do not assign avoided primary-metal or treatment credits inside the foreground inventory; apply any recycling or substitution convention in a separately disclosed downstream model. | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `chain_manufacturing` | Each metal feedstock row | Purchase, issue, return and inventory records | material/grade; supplier; lot; opening stock; receipts; issues; reusable returns; closing stock; mass | Calibrated scales reconciled to stores and production records | kg | Each lot; aggregate monthly | Representative continuous 12-month period or declared shorter campaign | All lines producing the declared product | receipts + opening stock - closing stock - reusable returns, assigned by product route | Scale calibration, supplier certificates, lot traceability and stock reconciliation |
| `cp_energy_inputs` | `chain_manufacturing` | Electricity and natural gas | Utility meters, invoices and operating logs | meter id; opening/closing reading; unit; reference conditions; operation; downtime; product quantity | Submeter preferred; otherwise site meter allocated by causal driver | kWh, MJ, m3 | Continuous or each shift; aggregate monthly | Representative continuous 12-month period or declared shorter campaign | All attributable production and pollution-control equipment | Net delivered amount less excluded uses, allocated and normalized to conforming product mass | Meter calibration, invoice reconciliation, allocation worksheet and operating-hours log |
| `cp_water_chemicals` | `chain_manufacturing` | Each water or chemical row | Meter, batch, purchase, issue and tank-inventory records | substance; concentration; lot; opening/closing inventory; additions; recovered return; export; treated product mass | Calibrated flow meter or scale plus bath/tank balance | kg | Each batch or shift; aggregate monthly | Representative continuous 12-month period or declared shorter campaign | Each applicable cleaning, drawing, heat-treatment, coating or treatment line | Net fresh input = additions + receipts + opening stock - closing stock - recovered export; normalize to product mass | Calibration, safety data sheet, concentration analysis, batch sheet and tank balance |
| `cp_product_output` | `chain_manufacturing` | Reference product | Release, scale and quality records | product id; material/grade; dimensions; joining method; heat treatment; coating; test specification/result; dry net mass; rejects | Calibrated scale linked to release inspection | kg | Each production lot | Representative continuous 12-month period or declared shorter campaign | All conforming product made at the declared site | Sum dry unpackaged released mass; exclude rejects, packaging and stock not released | Scale calibration, inspection record, material certificate and test certificate where applicable |
| `cp_waste_outputs` | `chain_manufacturing` | Each waste row | Waste scales/manifests, tank levels and recovery logs | waste identity; composition; origin; mass; opening/closing inventory; recovery; destination; treatment | Weighbridge/scale or documented density-volume conversion with tank balance | kg | Each shipment; reconcile monthly | Representative continuous 12-month period or declared shorter campaign | All attributable waste and wastewater leaving the site | Outbound mass + closing stock - opening stock; subtract internal reuse and prevent duplicate reporting | Scale calibration, manifest, laboratory composition/pH, tank record and recycler/treatment receipt |
| `cp_direct_emissions` | `chain_manufacturing` | Each elementary emission row | Continuous monitoring, stack tests, mass balance and fugitive estimate records | pollutant; source; flow; concentration; test period; abatement status; reporting basis; operating time | Applicable calibrated monitoring or validated site calculation | kg | Continuous where installed; otherwise each required test and monthly calculation | Representative continuous 12-month period or declared shorter campaign | All attributable point and quantified fugitive sources | Sum post-abatement releases by pollutant and normalize to conforming product mass | Calibration, sampling standard, laboratory report, detection limit, uncertainty and operating log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | Every inventory exchange | normalized amount = period exchange amount / dry unpackaged conforming product mass | Exchange record; `cp_product_output` mass | Amount per 1 kg reference product |  |
| `calc_net_input` | Materials, water and chemicals | net fresh input = receipts + opening inventory - closing inventory - reusable material returned outside the accounted product system | Purchase, stock, issue, recovery and return records | Net product input by atomic flow | `ec-fmp-bat-2022` |
| `calc_net_waste` | Waste outputs | net waste crossing boundary = shipments + closing waste inventory - opening waste inventory; exclude material internally reused in the same period | Waste manifests, scales, tanks and inventory | Net waste output by atomic flow | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |
| `calc_electricity_mj` | Electricity | MJ = metered kWh × 3.6 | Metered kWh | Delivered electricity in MJ |  |
| `calc_shared_burden` | Unsubdivided shared operations | Allocate by the documented causal driver; if mass is the fallback, share = product mass / total conforming mass through the shared operation | Shared burden; driver by product; total driver | Product-attributed shared burden | `ec-fmp-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Retain product drawing/specification, material and grade, link/part geometry, joining method, heat treatment, coating, test status, net mass and lot identity. | Product specification, material certificate, route card, inspection and test records |
| `dq_time` | All foreground rows | Use one representative continuous production period of at least 12 months where available; disclose shorter campaigns, shutdowns, abnormal operations and seasonal gaps. | Dated meters, batch records, production logs and completeness reconciliation |
| `dq_completeness` | Process and emissions inventory | Reconcile material, energy, water, chemical, waste and emission records across every applicable operation and pollution-control unit; explain all missing or estimated exchanges. | Mass/energy/water balances, chemical inventory, waste and waste-gas/wastewater inventories |
| `dq_technology` | Conditional routes | Identify forming/drawing, joining, furnace/quench, cleaning, coating, proof-test and abatement technology and whether each step is onsite, outsourced or absent. | Process flow sheet, equipment register and supplier records |
| `dq_measurement` | Meters, scales and analyses | Retain calibration status, sampling method, detection limit, concentration/reference-condition conversion and uncertainty for every material measurement. | Calibration certificates, laboratory reports and conversion worksheets |
| `dq_upstream` | Linked datasets | Match geography, material/alloy, product state, technology, recycled content and time; document any proxy and its expected direction of bias. | Supplier dataset or documented dataset-selection record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Fail if the product is articulated link chain, a chain assembly outside the boundary, a material other than iron/steel/copper, or lacks material/grade, dimensions, route, finish, test status and net-mass qualifiers. | `un-cpc-3-0-2025`; `eu-chain-certification-1973` |
| `validate_reference_mass` | Reference flow | Confirm exactly 1 kg dry unpackaged conforming product and exclude rejects and packaging from the denominator. |  |
| `validate_routes` | Process map | Confirm every onsite and outsourced drawing, forming, joining, heat-treatment, cleaning, coating, testing and treatment step is declared and every applicable exchange is present. | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |
| `validate_balance` | Metal, water and chemicals | Require documented metal reconciliation and net-consumption treatment for recirculated water, acid, lubricant, quench oil and recovered coating metal; investigate unexplained imbalance. | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |
| `validate_emissions` | Direct emissions | Confirm emissions are post-abatement foreground releases, use the declared compartment/reporting basis, exclude upstream electricity emissions and do not substitute nitrous oxide for unresolved NOx. | `ec-fmp-bat-2022` |
| `validate_allocation` | Shared burdens and recyclable outputs | Confirm subdivision or causal allocation is documented and no avoided-burden recycling credit is embedded in the foreground inventory. | `ec-fmp-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or site-average factory-gate foreground production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-gate product systems and downstream models requiring a qualified factory-gate chain or chain-part dataset |
| excluded_use | Articulated link chain; chain slings/assemblies including accessories; other materials; use-phase performance; repair; end-of-life; or comparative assertions when material route, product state, geography, technology or data quality are incompatible |
| required_metadata | PCR id/version; product and part/chain status; material/alloy/grade; dimensions; calibrated status where applicable; joining method; heat treatment; coating; proof/test specification and result where applicable; site/geography; period; net mass; process routes; allocation; upstream datasets; unresolved UUIDs |
| required_quality_disclosure | Temporal coverage and completeness; meter/scale calibration; concentration and reference-condition conversions; route-specific allocation; metal/water/chemical balances; waste and emission methods; uncertainty; proxies; exclusions and outsourced steps |
| update_trigger | Material, grade, feedstock, forming/joining technology, furnace/quench, cleaning chemistry, coating, abatement, supplier electricity/fuel, allocation method, site, production mix, regulation, reference-flow UUID or evidence changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure and Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | English product-category identity and articulated-link-chain exclusion |
| `un-cpc-1-1-zh-2004` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, ST/ESA/STAT/SER.M/77/Ver.1.1, https://digitallibrary.un.org/record/536544/files/M_77ver1_1c.pdf | Professional Chinese rendering of the unchanged CPC 42991 product identity |
| `ec-fmp-bat-2022` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2022/2110 establishing BAT conclusions for the ferrous metals processing industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2110/oj/eng | Wire drawing, heating, pickling, coating, energy, water, chemicals, residues, waste-gas/wastewater inventories and monitoring |
| `us-epa-brass-wire-mill-1971` | `official_guidance` | U.S. Environmental Protection Agency, Brass Wire Mill Process Changes and Waste Abatement, Recovery and Reuse, Project 12010 DPF, November 1971, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100XAZP.TXT | Copper wire-rod drawing, annealing, repeated pickling/rinsing, lubricant use, copper recovery and treatment-residue process decomposition |
| `eu-chain-certification-1973` | `standard` | Council Directive 73/361/EEC of 19 November 1973 on certification and marking of wire-ropes, chains and hooks, https://eur-lex.europa.eu/eli/dir/1973/361/oj/eng | Conditional round-steel-chain material, dimensions, joining, heat treatment, proof-load, breaking-strength, test and marking qualifiers |
