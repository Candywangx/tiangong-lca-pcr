---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheet-strip-and-foil-of-nickel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Plates, sheet, strip and foil, of nickel

## 1. Scope and Applicability

This PCR covers factory-gate production of flat-surfaced nickel or nickel-alloy plate, sheet, strip, and foil, supplied in coils or cut lengths. The foreground boundary begins with received, composition-identified solid rolling feedstock or an explicitly declared internal rolling intermediate and ends with inspected saleable flat product at the manufacturing gate. It covers the applicable hot-rolling, cold-rolling, solution- or other heat-treatment, pickling or surface-conditioning, trimming, and inspection operations.

The PCR excludes nickel ore and concentrate production, primary smelting and refining unless separately modelled upstream, unwrought nickel sold as such, bars, rods, profiles, wire, tubes, pipes, powders, flakes, expanded metal, clad products whose primary material is not nickel, fabricated articles, use, and end-of-life. Packaging and outbound transport are outside the core reference product and must be added as separate downstream or supplementary processes when the study scope includes them.

The result is a gate-to-gate foreground production dataset with linked upstream datasets for all purchased inputs. It can support a cradle-to-gate result only when those upstream datasets are complete and compatible.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheet-strip-and-foil-of-nickel |
| classification_refs | CPC 3.0: 41523, exact context reference |
| covered_products | Flat-surfaced non-alloy nickel or nickel-alloy plate, sheet, strip, and foil, coiled or cut to length, including declared as-rolled, heat-treated, pickled, polished, or otherwise surface-finished delivery states that remain flat products |
| excluded_products | Ores, metallurgical intermediates, unwrought nickel sold as such, bars, rods, profiles, wire, tubes, pipes, powders, flakes, expanded metal, non-nickel-primary clad products, and fabricated articles |
| representative_product | Saleable nickel or nickel-alloy flat product meeting the declared grade, flat form, dimensions, temper or heat-treatment state, surface finish, and inspection specification |
| production_route | Received solid nickel-bearing rolling feedstock → hot and/or cold rolling → conditional heat treatment and surface conditioning → trimming and inspection |
| market_state | Dry saleable plate, sheet, strip, or foil at the manufacturing gate, in the declared coil or cut-length state and excluding packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Nickel or nickel-alloy flat product that provides the declared material grade, geometry, temper, surface condition, and conformity |
| How much | 1,000 kg net saleable product, excluding packaging |
| How well | Conforms to the declared customer or product specification for chemical composition, thickness, width, length or coil state, temper or heat treatment, surface finish, and inspection status |
| How long or cycle | One completed production lot at the manufacturing gate; no use-phase duration is represented |
| reference_flow_link | The functional unit is realized by 1,000 kg of the declared reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Plates, sheet, strip and foil, of nickel `ffa8544a-b9fb-44e1-abb5-14032f03ecf7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | nickel or nickel-alloy grade and composition; plate, sheet, strip, or foil form; thickness; width; cut length or coil mass and coil dimensions; hot-rolled, cold-rolled, or combined route; temper or heat-treatment state; surface finish and pickled state; edge condition; applicable product specification; manufacturing site and geography; reporting period; packaging exclusion or separate inclusion |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and nickel-bearing material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry mass on calibrated scales; exclude pallets, wraps, strapping, and other packaging. Normalize the accepted saleable output to exactly 1,000 kg. |
| `electricity_energy` | Electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Convert metered electricity to MJ using 1 kWh = 3.6 MJ, retain the original meter unit in records, and disclose grid, voltage level, geography, and included losses. |
| `gas_volume` | Gaseous natural gas inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at declared temperature and pressure reference conditions; do not mix standard and actual cubic metres without documented conversion. |
| `solution_product_mass` | Sulfuric acid and sodium hydroxide inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report mass of supplied product solution and disclose concentration; do not substitute active-solute mass unless the conversion and concentration evidence are retained. |
| `mass_balance_consistency` | Each process material balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile nickel-bearing input, saleable or intermediate output, metallic scrap, retained work in process, and measured losses over the same reporting period before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Composition-identified solid nickel or nickel-alloy rolling feedstock, or a declared internal nickel flat intermediate, measured at entry to the first included operation |
| starting_condition_role | Foreground gate-to-gate starting product; its upstream production is represented by a linked dataset rather than reconstructed inside this PCR |
| product_classification_scope | Nickel or nickel-alloy plate, sheet, strip, and foil within the reviewed semantic boundary represented by CPC 3.0 code 41523 |
| recursive_input_rule | When an input is already a nickel flat product within this category and undergoes further reduction or finishing, record it once as a product input with its upstream dataset; do not recursively recreate its earlier rolling history |
| upstream_dataset_requirement | Link composition-, product-state-, geography-, technology-, and time-compatible upstream datasets for purchased nickel feedstock, electricity, natural gas, water, cold rolling oil, sulfuric acid, and sodium hydroxide |
| disclosure | Declare feedstock form and recycled content, included rolling passes, furnace and pickling routes, internal recycle loops, on-site treatment, exclusions, cut-offs, allocation, data gaps, and whether the result is gate-to-gate or completed to cradle-to-gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground manufacturing | Include all on-site operations from first receipt or internal transfer of rolling feedstock through net saleable flat product, including route-specific rolling, heat treatment, surface conditioning, trimming, inspection, utilities, direct emissions, and wastes. | `baosteel-nuclear-power-steel-2018` |
| `boundary_upstream_links` | Purchased products and energy | Represent production before the declared starting condition through linked upstream datasets; disclose supplier-specific or regional proxy use and do not treat supplier or association-member averages as global industry averages. |  |
| `boundary_environmental_exchanges` | Direct exchanges | Account for measured water and energy use, generated waste, and direct air or water releases for included operations; do not hide on-site treatment or internal recycle loops. | `eu-jrc-nfm-bref-2017` |
| `boundary_exclusions` | Downstream stages | Exclude packaging, outbound transport, fabrication into components, use, maintenance, and end-of-life from the core result unless they are modelled and disclosed as separate processes. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `rolling` | Hot and/or cold rolling | required | Include the actual hot, cold, or combined pass sequence used for the declared product. | Foreground thickness reduction and flat-product forming | Mass of rolled nickel flat intermediate leaving the rolling line |
| `thermal_surface_conditioning` | Heat treatment and surface conditioning | conditional | Include when the declared temper, solution-treated state, oxide removal, pickled state, cleaning, or on-site neutralization requires it. | Foreground metallurgical and surface-state control | Mass of conditioned nickel flat intermediate leaving the operation |
| `finishing_inspection` | Final trimming and inspection | required | Always include final dimensional finishing, net-mass determination, conformity inspection, and factory-gate transfer. | Foreground final product preparation | 1,000 kg net saleable reference product |

### Process: Hot and/or cold rolling (`rolling`)

#### Inputs

##### Product flows

###### Nickel or nickel-alloy rolling feedstock (`rolling_feedstock`)

Record the measured mass of the identified solid nickel-bearing feedstock entering the first included rolling pass.

- Selected flow: Nickel or nickel-alloy rolling feedstock
- Flow property / unit: Mass / kg
- Amount rule: measured received or internally transferred feedstock mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_balance`
- Sources: `baosteel-nuclear-power-steel-2018`

###### Electricity supplied to rolling equipment (`rolling_electricity`)

Record electricity metered or allocated to drives, pumps, controls, and route-specific auxiliary equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity for the included rolling lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy`
- Sources:

###### Natural gas combusted for hot rolling (`rolling_natural_gas`)

Record gaseous natural gas only when reheating or another included rolling operation uses it.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural gas consumed by rolling furnaces for the included lot; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy`
- Sources:

###### Process water supplied for rolling-line descaling or rinsing (`rolling_process_water`)

Record make-up process water crossing the boundary for descaling or rinsing; exclude internally recirculated water from gross input and disclose the recycle loop.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up process water for the included rolling lot; not applicable when dry rolling has no water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_water`
- Sources:

###### Cold rolling oil supplied to the cold-rolling pass (`cold_rolling_oil`)

Record net make-up cold rolling oil only for routes using this lubricant; disclose formulation and recovered-oil return.

- Selected flow: cold rolling oil `a9417245-6f45-4df3-8f04-227ed8a1be58`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh oil added minus measured recoverable oil returned outside the reporting boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_balance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rolled nickel flat intermediate (`rolled_nickel_intermediate`)

Record the measured hot- or cold-rolled nickel flat intermediate transferred to conditioning or finishing.

- Selected flow: Rolled nickel flat product, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate output mass reconciled to the rolling material balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per rolling process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rolling_material_balance`
- Sources: `baosteel-nuclear-power-steel-2018`

##### Waste flows

###### Segregated nickel rolling and trimming scrap (`rolling_nickel_scrap`)

Record clean metallic nickel-bearing offcuts, edge trim, and cobbles leaving the foreground process for recycling or treatment; exclude internally remelted material that never crosses the boundary.

- Selected flow: Segregated nickel rolling and trimming scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass by destination for the included lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_material_balance`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide from rolling furnaces (`rolling_fossil_co2`)

Record direct stack carbon dioxide from fossil natural-gas combustion in included rolling furnaces; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-measured direct stack emission for the included lot; not applicable when no fossil fuel is combusted
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_air_emissions`
- Sources:

### Process: Heat treatment and surface conditioning (`thermal_surface_conditioning`)

#### Inputs

##### Product flows

###### Rolled nickel flat intermediate entering conditioning (`conditioning_nickel_intermediate`)

Record the measured rolled intermediate entering the included heat-treatment or surface-conditioning route.

- Selected flow: Rolled nickel flat product entering conditioning
- Flow property / unit: Mass / kg
- Amount rule: measured transferred intermediate mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_material_balance`
- Sources: `baosteel-nuclear-power-steel-2018`

###### Electricity supplied to conditioning equipment (`conditioning_electricity`)

Record electricity for furnaces, pumps, bath circulation, rinsing, ventilation, and other included conditioning equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity for the included conditioning lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_water`
- Sources:

###### Natural gas combusted for heat treatment (`conditioning_natural_gas`)

Record gaseous natural gas only when an included annealing or solution-treatment furnace uses it.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural gas consumed by included conditioning furnaces; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_water`
- Sources:

###### Process water supplied to pickling and rinsing (`conditioning_process_water`)

Record net make-up process water for bath preparation and rinsing when wet surface conditioning is included.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up water for the included conditioning lot; not applicable for dry-only conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_energy_water`
- Sources:

###### Sulfuric acid supplied to the declared pickling bath (`conditioning_sulfuric_acid`)

Record supplied sulfuric acid only when the site-specific pickling recipe uses it; disclose product concentration.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of supplied sulfuric-acid product charged to and replenishing the bath; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_material_balance`
- Sources:

###### Sodium hydroxide supplied to on-site neutralization (`conditioning_sodium_hydroxide`)

Record supplied sodium hydroxide only when on-site neutralization of the included pickling stream is inside the boundary; disclose product concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of supplied sodium-hydroxide product used for the included wastewater stream; not applicable when neutralization is off-site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_material_balance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned nickel flat intermediate (`conditioned_nickel_intermediate`)

Record the measured heat-treated or surface-conditioned nickel flat intermediate transferred to final finishing.

- Selected flow: Heat-treated or surface-conditioned nickel flat product, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned output mass reconciled to the conditioning material balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_material_balance`
- Sources: `baosteel-nuclear-power-steel-2018`

##### Waste flows

###### Nickel-containing acidic wastewater from pickling (`nickel_acidic_wastewater`)

Record the aqueous nickel-bearing acidic stream leaving pickling and rinsing for on-site or off-site treatment; disclose pH, dissolved nickel, suspended solids, and destination.

- Selected flow: Nickel-containing acidic wastewater from pickling
- Flow property / unit: Mass / kg
- Amount rule: measured mass of the defined wastewater stream at its transfer point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_wastewater`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct fossil carbon dioxide from conditioning furnaces (`conditioning_fossil_co2`)

Record direct stack carbon dioxide from fossil natural-gas combustion in included heat-treatment furnaces; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-measured direct stack emission for the included lot; not applicable when no fossil fuel is combusted
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_air_emissions`
- Sources:

### Process: Final trimming and inspection (`finishing_inspection`)

#### Inputs

##### Product flows

###### Nickel flat intermediate entering final finishing (`finishing_nickel_intermediate`)

Record the measured as-rolled or conditioned nickel flat intermediate entering final trimming and inspection.

- Selected flow: Nickel flat product, intermediate for final finishing
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate mass entering final finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_material_balance`
- Sources:

###### Electricity supplied to finishing equipment (`finishing_electricity`)

Record electricity for slitting, cutting, levelling, polishing when included, inspection equipment, and material handling within final finishing.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity for the included finishing lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable nickel plate, sheet, strip, or foil (`reference_nickel_flat_product`)

Record net conforming product mass after final inspection and before packaging.

- Selected flow: Plates, sheet, strip and foil, of nickel `ffa8544a-b9fb-44e1-abb5-14032f03ecf7`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net conforming output after normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_material_balance`
- Sources: `un-cpc-3-0-2025`; `baosteel-nuclear-power-steel-2018`

##### Waste flows

###### Segregated nickel scrap from final trimming (`finishing_nickel_scrap`)

Record clean metallic nickel-bearing edge trim and rejected cut pieces leaving final finishing for recycling or treatment.

- Selected flow: Segregated nickel scrap from final trimming
- Flow property / unit: Mass / kg
- Amount rule: measured final-trimming scrap mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_balance`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | Shared rolling, conditioning, and finishing operations | Prefer lot-, line-, or route-specific metering and subdivision so the declared product bears its measured operations and allocation is avoided. |  |
| `allocation_recycled_scrap` | Nickel-bearing scrap sent outside the foreground boundary | Report scrap mass, composition, destination, and any revenue separately. Do not subtract an avoided-primary-nickel credit inside the foreground inventory; apply the declared study-wide recycling method downstream. |  |
| `allocation_shared_utilities` | Utilities that cannot be subdivided | Allocate only the residual shared amount using a documented physical driver such as metered operating time, equipment load, or processed mass; disclose the driver and test sensitivity when it materially affects the result. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rolling_material_balance` | `rolling` | feedstock, cold rolling oil, rolled intermediate, and nickel scrap | Scale tickets, production orders, inventory movements, oil issue and recovery logs | lot id; grade; feedstock form; input mass; oil added; oil recovered; intermediate output mass; scrap mass; destination; work-in-process change | Calibrated scales and reconciled material ledger | kg | Each lot with monthly reconciliation | Representative continuous 12-month period or declared campaign | All rolling lines producing the declared product | Sum matched records, adjust for opening and closing work in process, then normalize to accepted output | Scale calibration, lot genealogy, stock reconciliation, and scrap dispatch records |
| `cp_rolling_energy` | `rolling` | electricity and natural gas | Submeters, utility invoices, and furnace logs | meter id; start and end readings; unit; allocation driver; furnace id; reference temperature and pressure | Direct submetering preferred; residual shared use allocated by documented physical driver | kWh, MJ, or m3 | Each lot or shift; monthly reconciliation | Same period and lines as product records | Included rolling equipment only | Subtract exports and documented non-product loads, convert units, and normalize to accepted output | Meter calibration, invoice reconciliation, and allocation worksheet |
| `cp_rolling_water` | `rolling` | net make-up process water | Water meter and recirculation records | source; meter readings; make-up; purge; return; unit; lot or period allocation | Direct metering at rolling-water system boundary | kg or m3 | Daily or per campaign; monthly reconciliation | Same period as rolling production | Included rolling water loop | Count only boundary-crossing make-up water and disclose recirculation | Meter checks and water-balance reconciliation |
| `cp_rolling_air_emissions` | `rolling` | direct fossil carbon dioxide | Continuous emission measurement or validated stack test records | stack id; timestamp; gas concentration; flow; operating time; covered furnace and lot | Site measurement at included stacks | kg | Continuous or each representative stack test campaign | Same reporting year with documented production coverage | Included rolling furnaces | Integrate measured emissions and allocate only by documented furnace operation | Instrument calibration, test method, detection limits, and coverage statement |
| `cp_conditioning_material_balance` | `thermal_surface_conditioning` | nickel intermediate, sulfuric acid, sodium hydroxide, and conditioned output | Transfer weights, bath make-up logs, chemical delivery records, and inventory records | lot id; grade; input and output mass; chemical product mass; concentration; bath id; treatment route | Calibrated scales and reconciled chemical inventory | kg | Each lot and each bath addition; monthly reconciliation | Representative continuous 12-month period or declared campaign | Included heat-treatment and conditioning lines | Sum matched additions and transfers, adjust inventory changes, and normalize to accepted output | Calibration, supplier certificates, concentration tests, and bath logs |
| `cp_conditioning_energy_water` | `thermal_surface_conditioning` | electricity, natural gas, and process water | Submeters, furnace logs, and water-system records | meter id; readings; unit; furnace or bath id; reference conditions; make-up; return; purge | Direct metering preferred; residual shared amounts use documented physical drivers | kWh, MJ, m3, or kg | Each lot or shift; monthly reconciliation | Same period as conditioning production | Included conditioning equipment and water loops | Convert units, count net boundary inputs, and normalize to accepted output | Meter calibration and utility reconciliation |
| `cp_conditioning_wastewater` | `thermal_surface_conditioning` | nickel-containing acidic wastewater | Transfer meter, tank weight, and laboratory analysis | stream id; mass or volume; density; pH; dissolved nickel; suspended solids; treatment destination; timestamp | Measure at the declared treatment-transfer point and sample the same stream | kg | Each discharge batch or continuous totalizer with representative sampling | Same period as included pickling production | Included pickling and rinse-water system | Convert volume only with measured density, sum batches, and normalize to accepted output | Meter calibration, chain of custody, laboratory method, and treatment receipts |
| `cp_conditioning_air_emissions` | `thermal_surface_conditioning` | direct fossil carbon dioxide | Continuous emission measurement or validated stack test records | stack id; timestamp; concentration; flow; operating time; covered furnace and lot | Site measurement at included stacks | kg | Continuous or each representative stack test campaign | Same reporting year with documented production coverage | Included conditioning furnaces | Integrate measured emissions and allocate only by documented furnace operation | Instrument calibration, test method, detection limits, and coverage statement |
| `cp_finishing_material_balance` | `finishing_inspection` | finishing input, reference product, and final trimming scrap | Transfer weights, finished-goods ledger, inspection records, and scrap tickets | lot id; grade; dimensions; temper; finish; input mass; accepted mass; rejected mass; scrap mass; destination | Calibrated scales linked to inspection disposition | kg | Each lot; monthly reconciliation | Representative continuous 12-month period or declared campaign | All finishing lines for the declared product | Reconcile input to accepted output, scrap, rejects, and work-in-process change; normalize accepted output to 1,000 kg | Scale calibration, inspection certificates, lot genealogy, and stock reconciliation |
| `cp_finishing_energy` | `finishing_inspection` | electricity | Submeters and equipment operating logs | meter id; readings; unit; equipment id; operating time; processed mass | Direct submetering preferred; residual shared use uses documented physical driver | kWh or MJ | Each lot or shift; monthly reconciliation | Same period as finished-product records | Included finishing equipment | Subtract non-product loads, convert to MJ, and normalize to accepted output | Meter calibration and allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | Every inventory row | normalized amount = period or lot amount × 1,000 kg / net accepted reference-product mass for the same boundary and period | row amount; net accepted product mass | Amount per 1,000 kg reference product |  |
| `convert_electricity_to_mj` | Electricity rows | electricity MJ = metered kWh × 3.6 MJ/kWh; retain the original kWh reading | metered kWh | Electricity in MJ |  |
| `reconcile_nickel_mass` | Each process material balance | nickel-bearing input = intermediate or product output + segregated scrap + other measured nickel-bearing outputs + closing work in process − opening work in process + investigated balance difference | input, output, scrap, other nickel outputs, work-in-process change | Reconciled mass balance and disclosed difference |  |
| `convert_water_volume_to_mass` | Process-water and wastewater rows | mass = measured volume × measured density at the recorded temperature; do not assume density when concentration materially changes it | volume, density, temperature | Water or wastewater mass in kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and nickel-bearing inputs | Retain grade or composition, form, dimensions, temper or heat treatment, surface condition, and lot genealogy for every included product record. | Product certificate, specification, production order, and inspection release |
| `dq_temporal_alignment` | All foreground records | Use the same representative 12-month period or explicitly declared campaign for production, utilities, chemicals, wastes, and emissions; explain substitutions and abnormal operations. | Dated ledgers, meter exports, and coverage reconciliation |
| `dq_measurement` | Metered and weighed flows | Use calibrated instruments with units and reference conditions recorded; document allocation only for residual shared flows. | Calibration certificates, meter maps, scale checks, and allocation worksheets |
| `dq_completeness` | Process inventory | Reconcile all included processes and disclose missing meters, excluded flows, zero or not-applicable rows, internal recycle loops, and treatment transfers. | Signed completeness checklist and process-flow review; `eu-jrc-nfm-bref-2017` |
| `dq_upstream_representativeness` | Linked upstream datasets | Match feedstock state, composition, technology, geography, and time; disclose proxy limitations and do not claim global representativeness for supplier or association-member averages. | Supplier data or dataset metadata and representativeness statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference product | Confirm that net accepted output is exactly 1,000 kg after normalization, excludes packaging, and carries every required qualifier. | `un-cpc-3-0-2025`; `baosteel-nuclear-power-steel-2018` |
| `validate_route_consistency` | Process map and inventory | Confirm that every included hot-rolling, cold-rolling, heat-treatment, pickling, finishing, and on-site treatment operation has its corresponding inputs, outputs, utilities, wastes, and direct emissions; mark non-applicable conditional rows explicitly. | `baosteel-nuclear-power-steel-2018`; `eu-jrc-nfm-bref-2017` |
| `validate_uuid_semantics` | UUID-bearing flows | Confirm flow type, English and Chinese base name, classification, property, unit group, product state, geography, technology, and general comment against a public state-100 direct read. |  |
| `validate_material_balance` | Rolling, conditioning, and finishing | Investigate and disclose each nickel-bearing mass-balance difference before release; do not conceal the difference through allocation or an unspecified waste row. |  |
| `validate_no_double_counting` | Energy, water, recycle, and upstream links | Confirm that internal recirculation, internally transferred intermediates, and upstream burdens are recorded once and that upstream electricity emissions are not repeated as direct emissions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for a declared nickel or nickel-alloy flat product |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product carbon footprint, LCA, EPD, supply-chain, and design studies whose product, route, geography, time, boundary, and data-quality needs match the declared dataset |
| excluded_use | Undisclosed substitution across materially different nickel grades, product forms, rolling or heat-treatment routes, surface conditions, geographies, or periods; use as a global industry average without demonstrated representativeness |
| required_metadata | PCR id and version; product grade and composition; flat form; dimensions; coil or cut-length state; temper or heat treatment; surface finish; site and geography; technology and process route; reporting period; recycled-content definition; upstream datasets; cut-offs; allocation; packaging treatment; data owner and review state |
| required_quality_disclosure | Meter and scale coverage; mass-balance difference; temporal, technological, and geographic representativeness; source and supplier data shares; allocation drivers; internal recycle treatment; wastewater and direct-emission coverage; uncertainty and unresolved evidence gaps |
| update_trigger | Material change in feedstock composition or source, product specification, rolling or furnace technology, pickling chemistry, energy or water system, treatment route, allocation, reporting period, or upstream dataset representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-04 | Official CPC 41523 English product identity and classification context |
| `baosteel-nuclear-power-steel-2018` | Handbook (`handbook`) | Baoshan Iron & Steel Co., Ltd., Nuclear Power Steel product manual, PDF modified 2018, https://ecommerce.ibaosteel.com/portal/download/manual/NPS.pdf, retrieved 2026-09-04 | Nickel-based alloy hot- and cold-rolled flat-product forms, solution treatment and pickling, delivery state, and dimensional qualifiers |
| `eu-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, EUR 28648 EN, JRC107041, DOI 10.2760/8224, https://publications.jrc.ec.europa.eu/repository/handle/JRC107041, retrieved 2026-09-04 | Non-ferrous-metal process boundary completeness for raw materials, water, energy, waste, and direct releases; integrated upstream disclosure |
