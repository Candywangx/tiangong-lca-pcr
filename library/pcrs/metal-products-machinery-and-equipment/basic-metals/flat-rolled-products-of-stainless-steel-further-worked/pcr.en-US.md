---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-stainless-steel-further-worked
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of stainless steel, further worked

## 1. Scope and Applicability

This PCR applies to gate-to-gate production of saleable stainless-steel flat-rolled products whose declared market state has undergone at least one operation beyond the state described merely as hot-rolled or merely as cold-rolled. The foreground boundary begins with receipt of a declared stainless-steel flat-rolled feed and ends with the inspected, further-worked product at the producer gate. The data package shall identify the actual sequence of annealing, pickling, cold reduction, temper or skin-pass rolling, mechanical surface finishing, cutting or slitting, protective-film application, and packing operations at the reporting site, and shall identify the post-rolling operation that establishes the further-worked state. Primary cold reduction by itself does not establish that state.

The PCR does not cover primary stainless-steel melting, casting, or production of the incoming flat-rolled feed unless those processes are separately linked through upstream datasets. It excludes bars, rods, wire, sections, tubes, fabricated articles, non-stainless flat-rolled steel, and stainless-steel flat-rolled products whose declared market state is only hot-rolled or only cold-rolled. Product use and end-of-life are outside this gate-to-gate rule.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-stainless-steel-further-worked |
| classification_refs | CPC 3.0: 41232, exact classification context |
| covered_products | Stainless-steel strip, sheet, plate, or coil sold in a flat-rolled form after at least one declared further-working operation beyond a merely hot-rolled or merely cold-rolled state |
| excluded_products | Merely hot-rolled or merely cold-rolled stainless-steel flat products; non-stainless steel; silicon-electrical or high-speed steel; long products, tubes, wire, cast products, and fabricated articles |
| representative_product | Saleable stainless-steel flat-rolled strip, sheet, plate, or coil in the producer-declared grade, dimensions, surface finish, and delivery condition |
| production_route | Site-specific sequence selected from feed preparation, annealing and descaling, acid pickling and rinsing, cold reduction, temper or skin-pass rolling, mechanical surface finishing, and final conversion and packing; identify at least one operation after the final primary hot or cold rolling step that establishes the further-worked state |
| market_state | Dry, inspected producer-gate product in the declared coil, sheet, strip, or plate form; packaging is reported separately and is excluded from net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a stainless-steel flat-rolled product in a declared further-worked market state |
| How much | 1,000 kg net saleable product, excluding packaging |
| How well | Conforming to the declared stainless-steel grade, thickness, width, surface finish, edge condition, dimensional tolerance, and delivery condition |
| How long or cycle | One production lot at the producer gate; no use-stage duration is assigned |
| reference_flow_link | `output_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net saleable product |
| Reference product flow | Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | stainless-steel grade and composition standard; input and output product state; route-defining further-working operations; thickness and width; coil, sheet, strip, or plate form; surface finish; edge condition; annealing atmosphere; pickling chemistry; net product moisture or surface-liquid condition; producer geography; reporting period; allocation approach; packaging configuration |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net saleable product mass after trimming and inspection and before adding packaging; normalize all inventory to 1,000 kg of this product. |
| `intermediate_mass_linking` | Internal stainless-steel intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Link consecutive unit processes with the same measured or mass-balanced intermediate amount and do not count an internal transfer as an external input or output. |
| `electricity_energy` | Electricity inputs | Energy | MJ | Preserve the supplier billing unit in raw records and convert to MJ with the declared exact conversion; disclose voltage, provider, geography, supply technology, delivery boundary, and treatment of line losses. |
| `gas_volume_conditions` | Natural-gas input | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record supplier-metered gas volume together with temperature, pressure, dry or wet basis, and conversion to the declared reference conditions; do not substitute an energy amount without retaining the conversion basis. |
| `acid_solution_mass` | Pickling acids and neutralizer | Mass | kg | Record purchased or make-up solution mass and concentration separately; report the selected-flow amount as solution mass and retain active-substance mass as a calculated field. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Stainless-steel flat-rolled feed at site receipt, with grade, mass, dimensions, surface state, and prior hot-rolled or cold-rolled condition declared |
| starting_condition_role | Purchased or transferred upstream flat-rolled feed entering the foreground further-working route |
| product_classification_scope | Stainless-steel flat-rolled products matching the semantic boundary of CPC 3.0 subclass 41232; classification is contextual and does not replace the product-state declaration |
| recursive_input_rule | When an input is itself a further-worked stainless-steel flat-rolled product, record it once as an upstream product flow and link a separately bounded upstream dataset; do not recursively reproduce this PCR inside the same foreground process |
| upstream_dataset_requirement | Use supplier-specific data when available; otherwise use a geographically, technologically, grade-, and product-state-representative upstream dataset for the incoming flat-rolled feed |
| disclosure | Declare included unit operations, combined-line aggregation, outsourced operations, feed state, product state, scrap destinations, acid recovery, water recirculation, air and water abatement, packaging, and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_definition` | foreground_system_boundary | Include every on-site process that changes the received stainless-steel flat-rolled feed into the declared further-worked product, including associated line utilities, recirculation, abatement, and directly generated wastes; identify at least one operation after the final primary hot or cold rolling step that establishes the further-worked state. | `eu-jrc-fmp-bref-2022`; `un-cpc-v3-explanatory-notes-2025` |
| `boundary_upstream_separation` | upstream_product_system | Model primary steelmaking, casting, and production of purchased feed through linked upstream datasets unless those processes are explicitly inside the reporting organization and separately inventoried without double counting. | `eu-jrc-fmp-bref-2022` |
| `boundary_outsourced_operations` | outsourced_further_working | Include an outsourced route-defining operation through a supplier-specific process dataset or a documented representative dataset, and preserve mass linkage to the returned product. | `eu-jrc-fmp-bref-2022` |
| `boundary_pollution_control` | line_pollution_control | Include electricity, water, reagents, recovered materials, wastes, wastewater, and direct releases from pickling fume control, acid recovery, emulsion treatment, filtration, and wastewater treatment when operated for the declared product route. | `eu-jrc-fmp-bref-2022`; `us-epa-iron-steel-effluent-2002` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_preparation` | Feed receipt and preparation | required | Always included from receipt, inspection, joining, cropping, and routing to the first further-working unit | Foreground preparation and mass reconciliation | Per 1,000 kg net saleable reference product |
| `annealing_and_descaling` | Annealing and thermal descaling | conditional | Include when the declared route heats the strip for annealing, scale conditioning, or metallurgical-property control | Foreground heat treatment | Per 1,000 kg net saleable reference product |
| `acid_pickling_and_rinsing` | Acid pickling, rinsing, and line treatment | conditional | Include when acid pickling or chemical descaling/passivation occurs on site | Foreground chemical surface treatment and associated abatement | Per 1,000 kg net saleable reference product |
| `cold_rolling_and_temper` | Cold reduction and temper rolling | conditional | Include when cold reduction, skin-pass, or temper rolling occurs; declare whether it is primary cold reduction or a post-rolling operation that contributes to the further-worked state | Foreground mechanical reduction | Per 1,000 kg net saleable reference product |
| `mechanical_surface_finishing` | Mechanical surface finishing | conditional | Include when grinding, polishing, brushing, or abrasive finishing occurs on site | Foreground surface finishing | Per 1,000 kg net saleable reference product |
| `product_finalization` | Final conversion, inspection, and packing | required | Always include final slitting or cutting when performed, inspection, net-mass determination, and actual packing | Foreground product finalization | 1,000 kg net saleable reference product |

### Process: Feed receipt and preparation (`feed_preparation`)

#### Inputs

##### Product flows

###### Received stainless-steel flat-rolled feed (`input_stainless_flat_rolled_feed`)

The weighed incoming coil, sheet, strip, or plate crosses the foreground boundary with grade, dimensions, and surface state declared.

- Selected flow: Stainless-steel flat-rolled feed
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_scrap_mass`
- Sources:

###### Preparation-line electricity (`input_preparation_electricity`)

Electricity used by handling, joining, cropping, inspection, and preparation equipment is recorded as a separate supplied energy flow.

- Selected flow: Alternating-current electricity supplied to feed preparation
- Flow property / unit: Energy / MJ
- Amount rule: Submetered use or allocated feeder-meter use for the preparation line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared strip intermediate (`output_prepared_strip_intermediate`)

The prepared material is linked to the next included unit process as a site-specific internal product flow.

- Selected flow: Prepared stainless-steel flat-rolled strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: Calculated from incoming mass minus weighed preparation scrap and documented stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_and_scrap_mass`
- Sources:

##### Waste flows

###### Preparation stainless-steel scrap (`output_preparation_scrap`)

Cropping, weld-tab, and preparation losses are weighed as one physically specific stainless-steel scrap stream; destinations are disclosed separately.

- Selected flow: Stainless-steel preparation scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap leaving feed preparation, net of any documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_and_scrap_mass`
- Sources:

##### Elementary flows

### Process: Annealing and thermal descaling (`annealing_and_descaling`)

#### Inputs

##### Product flows

###### Strip before annealing (`input_strip_before_annealing`)

The actual stainless-steel strip state entering the furnace is linked from the preceding included process.

- Selected flow: Stainless-steel strip before annealing
- Flow property / unit: Mass / kg
- Amount rule: Linked measured or mass-balanced intermediate mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_annealing_records`
- Sources:

###### Natural gas for furnace firing (`input_annealing_natural_gas`)

This flow is recorded only for a fuel-fired furnace and uses supplier volume at disclosed reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Supplier-metered or dedicated-submeter volume attributable to included annealing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources:

###### Annealing-line electricity (`input_annealing_electricity`)

Electric furnace power, drives, fans, controls, and recirculation electricity are recorded for the included annealing route.

- Selected flow: Alternating-current electricity supplied to annealing
- Flow property / unit: Energy / MJ
- Amount rule: Submetered line use or documented allocation from a common feeder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources:

###### Nitrogen protective gas (`input_nitrogen_protective_gas`)

Nitrogen supplied to the furnace is recorded when the declared annealing atmosphere uses it.

- Selected flow: Industrial nitrogen gas
- Flow property / unit: Volume / m3
- Amount rule: Metered purchased or on-site-supplied nitrogen at disclosed pressure and reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources:

###### Hydrogen protective gas (`input_hydrogen_protective_gas`)

Hydrogen supplied to the furnace is recorded when present in the declared protective atmosphere.

- Selected flow: Industrial hydrogen gas
- Flow property / unit: Volume / m3
- Amount rule: Metered purchased or on-site-supplied hydrogen at disclosed pressure and reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Annealed strip intermediate (`output_annealed_strip_intermediate`)

The annealed strip is linked to the next included operation with its furnace exit state declared.

- Selected flow: Annealed stainless-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced furnace output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_annealing_records`
- Sources:

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from furnace combustion (`output_fossil_carbon_dioxide_to_air`)

Fossil carbon dioxide from on-site fuel combustion is measured or calculated without claiming a more specific air compartment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Stack measurement or calculation from foreground fuel carbon and documented oxidation assumptions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_annealing_records`
- Sources:

### Process: Acid pickling, rinsing, and line treatment (`acid_pickling_and_rinsing`)

#### Inputs

##### Product flows

###### Strip before pickling (`input_strip_before_pickling`)

The stainless-steel strip entering the actual pickling sequence is linked from the preceding included operation.

- Selected flow: Stainless-steel strip before pickling
- Flow property / unit: Mass / kg
- Amount rule: Linked measured or mass-balanced intermediate mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_records`
- Sources:

###### Nitric acid solution (`input_nitric_acid`)

Nitric acid make-up is recorded only when it is an actual component of the declared stainless-steel pickling bath.

- Selected flow: Nitric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased or tank-mass-balance solution mass with concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources:

###### Hydrofluoric acid solution (`input_hydrofluoric_acid`)

Hydrofluoric acid make-up is recorded only when it is an actual component of the declared pickling bath.

- Selected flow: Hydrofluoric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased or tank-mass-balance solution mass with concentration recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources:

###### Pickling process water (`input_pickling_process_water`)

Fresh or externally supplied water used for bath make-up, rinsing, and fume treatment is recorded net of internal recycle.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered make-up water entering the included pickling and abatement system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources:

###### Pickling-line electricity (`input_pickling_electricity`)

Electricity for strip handling, pumps, ventilation, recovery, and wastewater treatment is recorded for the included system.

- Selected flow: Alternating-current electricity supplied to pickling
- Flow property / unit: Energy / MJ
- Amount rule: Submetered use or documented allocation from the relevant feeder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources:

###### Calcium hydroxide neutralizer (`input_calcium_hydroxide`)

Calcium hydroxide is recorded when actually used for treatment of the declared pickling wastewater or spent bath.

- Selected flow: Slaked lime `49bf5000-b2da-4a30-8349-b0bb44171616`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchased or issued mass attributable to the pickling treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pickled strip intermediate (`output_pickled_strip_intermediate`)

The rinsed and dried pickled strip is linked to the next included operation.

- Selected flow: Pickled stainless-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced pickling-line output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_records`
- Sources:

##### Waste flows

###### Spent mixed-acid pickle liquor (`output_spent_pickle_liquor`)

Spent nitric-hydrofluoric pickle liquor leaving the foreground for recovery, treatment, or disposal is recorded separately from rinse water.

- Selected flow: Spent nitric-hydrofluoric pickle liquor
- Flow property / unit: Mass / kg
- Amount rule: Weighed or tank-level mass balance of liquor crossing the site boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_records`
- Sources:

###### Pickling neutralization sludge (`output_pickling_sludge`)

Wet sludge generated by neutralization and solids separation is reported with dry-solids content and destination.

- Selected flow: Stainless-steel pickling neutralization sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet mass with sampled dry-solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources:

###### Acidic pickling rinse wastewater (`output_acidic_rinse_wastewater`)

Rinse wastewater discharged to on-site or off-site treatment is recorded net of internal countercurrent recycle.

- Selected flow: Acidic stainless-steel pickling rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Discharge flow measurement converted to mass at measured density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_records`
- Sources:

##### Elementary flows

###### Hydrogen fluoride released to air (`output_hydrogen_fluoride_to_air`)

Hydrogen fluoride crossing the air-emission boundary after capture and treatment is recorded when the mixed-acid route is used.

- Selected flow: Hydrogen fluoride to air
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by dry standardized exhaust-gas volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pickling_records`
- Sources:

### Process: Cold reduction and temper rolling (`cold_rolling_and_temper`)

#### Inputs

##### Product flows

###### Pickled strip for rolling (`input_pickled_strip_for_rolling`)

The cleaned strip entering cold reduction or temper rolling is linked from the preceding operation.

- Selected flow: Pickled stainless-steel strip for cold rolling
- Flow property / unit: Mass / kg
- Amount rule: Linked measured or mass-balanced intermediate mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_rolling_records`
- Sources:

###### Cold-rolling electricity (`input_cold_rolling_electricity`)

Electricity for roll drives, strip transport, hydraulics, filtration, and controls is recorded for the included line.

- Selected flow: Alternating-current electricity supplied to cold rolling
- Flow property / unit: Energy / MJ
- Amount rule: Submetered line use or documented allocation from a common feeder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources:

###### Cold-rolling oil (`input_cold_rolling_oil`)

The specific rolling oil or lubricant formulation issued to the line is recorded net of recovered oil returned to the same system.

- Selected flow: cold rolling oil `a9417245-6f45-4df3-8f04-227ed8a1be58`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchase and issue records reconciled with opening stock, closing stock, and recovered oil
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_rolling_records`
- Sources:

###### Rolling-emulsion make-up water (`input_rolling_emulsion_water`)

Externally supplied make-up water is recorded when a water-based rolling emulsion is used.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered make-up water net of recovered water returned to the emulsion system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-rolled strip intermediate (`output_cold_rolled_strip_intermediate`)

The rolled strip is linked to the next included operation with thickness reduction and temper state declared.

- Selected flow: Cold-rolled stainless-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced rolling-line output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_rolling_records`
- Sources:

##### Waste flows

###### Spent rolling emulsion (`output_spent_rolling_emulsion`)

Spent water-oil rolling emulsion leaving the foreground for treatment or disposal is recorded as a distinct waste stream.

- Selected flow: Spent stainless-steel cold-rolling emulsion
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or tank mass balance of emulsion leaving the line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_rolling_records`
- Sources:

###### Oily metal-fines sludge (`output_oily_metal_fines_sludge`)

Sludge removed from rolling-fluid filtration is weighed and characterized for moisture and oil content.

- Selected flow: Oily stainless-steel fines sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet mass leaving the rolling-fluid treatment system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources:

##### Elementary flows

### Process: Mechanical surface finishing (`mechanical_surface_finishing`)

#### Inputs

##### Product flows

###### Strip before mechanical finishing (`input_strip_before_mechanical_finishing`)

The strip entering grinding, polishing, brushing, or abrasive finishing is linked from the preceding operation.

- Selected flow: Stainless-steel strip before mechanical surface finishing
- Flow property / unit: Mass / kg
- Amount rule: Linked measured or mass-balanced intermediate mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

###### Mechanical-finishing electricity (`input_mechanical_finishing_electricity`)

Electricity for grinding, polishing, brushing, extraction, filtration, and wet-finishing circulation is recorded.

- Selected flow: Alternating-current electricity supplied to mechanical finishing
- Flow property / unit: Energy / MJ
- Amount rule: Submetered line use or documented allocation from a common feeder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

###### Aluminium oxide abrasive (`input_aluminium_oxide_abrasive`)

Aluminium oxide abrasive issued to the line is recorded when used for the declared finish.

- Selected flow: Aluminium oxide abrasive
- Flow property / unit: Mass / kg
- Amount rule: Issued abrasive mass net of unused material returned to stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

###### Wet-finishing process water (`input_wet_finishing_water`)

Externally supplied make-up water is recorded when the actual grinding or polishing route is wet.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered make-up water net of internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Surface-finished strip intermediate (`output_surface_finished_strip_intermediate`)

The surface-finished strip is linked to final conversion with the finish designation declared.

- Selected flow: Surface-finished stainless-steel strip intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced finishing-line output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

##### Waste flows

###### Collected stainless-steel grinding dust (`output_stainless_steel_grinding_dust`)

Dry dust captured from stainless-steel grinding or polishing is weighed separately from wet sludge.

- Selected flow: Collected stainless-steel grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Weighed dust removed from extraction and filtration equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

###### Oily grinding sludge (`output_oily_grinding_sludge`)

Wet grinding sludge containing stainless-steel solids, water, and oil is weighed and its solids content retained.

- Selected flow: Oily stainless-steel grinding sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge leaving the finishing system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

##### Elementary flows

###### Particulate matter released to air (`output_particulate_matter_to_air`)

Uncaptured particulate matter crossing the air-emission boundary is reported here only when the monitoring record does not resolve a particle-size fraction; a size-resolved measurement requires a separately audited, more specific elementary flow.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured concentration multiplied by standardized exhaust volume, or validated capture balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

### Process: Final conversion, inspection, and packing (`product_finalization`)

#### Inputs

##### Product flows

###### Finished strip for finalization (`input_finished_strip_for_finalization`)

The last included further-working intermediate enters slitting, cutting, inspection, and packing.

- Selected flow: Further-worked stainless-steel strip before finalization
- Flow property / unit: Mass / kg
- Amount rule: Linked measured or mass-balanced intermediate mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalization_records`
- Sources:

###### Finalization electricity (`input_finalization_electricity`)

Electricity for slitting, cutting, inspection, handling, and packing equipment is recorded for the production lot.

- Selected flow: Alternating-current electricity supplied to product finalization
- Flow property / unit: Energy / MJ
- Amount rule: Submetered use or documented allocation from the relevant feeder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalization_records`
- Sources:

###### Polyethylene protective film (`input_polyethylene_protective_film`)

Protective film remaining with the shipped product is recorded when applied on site.

- Selected flow: Polyethylene protective film
- Flow property / unit: Mass / kg
- Amount rule: Issued roll mass minus unused returned film, cross-checked by area and basis weight
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalization_records`
- Sources:

###### Steel strapping (`input_steel_strapping`)

Steel strapping remaining with the dispatch unit is recorded when used.

- Selected flow: Steel packing strap
- Flow property / unit: Mass / kg
- Amount rule: Issued strap mass or length converted using measured linear mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalization_records`
- Sources:

###### Wooden pallet (`input_wooden_pallet`)

The pallet crossing the producer gate with the product is recorded when used, with reuse status declared.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured or supplier-declared pallet mass, adjusted only for documented reuse allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finalization_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Further-worked stainless-steel flat-rolled reference product (`output_reference_product`)

This row is the net inspected saleable product linked to the reference-flow definition and the directly audited public Tiangong product flow for CPC 41232.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Normalize certified net saleable product mass to exactly 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_product_mass`
- Sources:

##### Waste flows

###### Final stainless-steel edge-trim scrap (`output_final_edge_trim_scrap`)

Edge trim and off-size cuttings generated during final conversion are weighed as stainless-steel scrap and their destination is declared.

- Selected flow: Stainless-steel final edge-trim scrap
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap leaving final conversion, net of documented internal return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finalization_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_operations | Subdivide or meter unit processes and product lots before applying allocation; document any combined-line period and reconcile its mass and energy balances. | `eu-jrc-fmp-bref-2022` |
| `allocation_internal_scrap` | internally_recycled_stainless_scrap | Treat scrap returned within the declared foreground boundary as an internal loop: retain the collection and remelting burdens inside their actual processes and do not credit or count the same scrap as an external output. |  |
| `allocation_exported_scrap` | exported_stainless_scrap | Report exported preparation scrap, edge trim, grinding dust, or recoverable metal-bearing residue at the point it leaves the foreground; do not apply an avoided-primary-steel credit inside the foreground inventory unless the downstream study adds a separately declared consequential scenario. |  |
| `allocation_recovered_acid` | recovered_acid_and_by_products | Prefer physical subdivision of acid recovery. If recovered acid returns to the same line, model it as an internal loop; if a saleable by-product leaves the system, disclose the allocation variable, values, period, and sensitivity. | `us-epa-iron-steel-effluent-2002` |
| `allocation_packaging_reuse` | reusable_shipping_items | Allocate reusable pallet or stillage production over documented expected uses and include repair and return burdens only when they are inside the declared boundary; do not assume reuse without records. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_and_scrap_mass` | `feed_preparation` | Incoming feed, prepared intermediate, and preparation scrap | Calibrated scale tickets and production-lot ledger | lot_id; grade; form; dimensions; feed_mass_kg; preparation_scrap_kg; internal_return_kg; stock_change_kg | Reconcile receiving scales, line counters, scrap scales, and stock records | kg | Each lot, aggregated monthly or over the declared reporting period | At least 12 consecutive representative months, or all lots for a shorter campaign with justification | All preparation equipment serving the declared product | Sum attributable masses; reconcile feed = prepared intermediate + exported scrap + internal return + measured stock change | Scale calibration, lot traceability, stock reconciliation, and signed exception log |
| `cp_preparation_energy` | `feed_preparation` | Preparation electricity | Electricity submeter or feeder meter | timestamp; meter_id; opening_MJ; closing_MJ; downtime; shared_throughput_kg | Read dedicated meter; if shared, allocate by documented operating time and power or metered throughput | MJ | Shift or daily | Same reporting period as product mass | Preparation equipment and local extraction only | Sum readings, subtract documented unrelated loads, and divide by reference-product mass | Meter calibration or utility-grade specification and allocation reconciliation |
| `cp_annealing_records` | `annealing_and_descaling` | Annealing intermediates, electricity, gas, atmosphere gases, and fossil CO2 | Furnace batch log, utility meters, gas invoices, and emissions calculation or monitoring record | lot_id; input_mass_kg; output_mass_kg; electricity_MJ; gas_m3; gas_reference_conditions; nitrogen_m3; hydrogen_m3; fuel_carbon; stack_CO2_kg | Link furnace logs to dedicated meters or reconciled utility records and retain the emissions method | kg; MJ; m3 | Each furnace batch or continuous-line shift | Same reporting period as product mass and representative operating modes | All annealing furnaces, atmosphere supply, fans, and directly associated controls | Sum included batches; normalize to linked net product; prevent overlap between metered gas and derived energy | Meter calibration, invoice reconciliation, furnace recipe, gas certificates, and emissions-method record |
| `cp_pickling_records` | `acid_pickling_and_rinsing` | Pickling intermediates, acids, water, electricity, wastes, and HF release | Bath ledger, tank levels, purchase issues, water and electricity meters, waste manifests, discharge and stack monitoring | lot_id; strip_mass_kg; acid_solution_kg; acid_concentration; water_kg; electricity_MJ; recovered_acid_kg; spent_liquor_kg; sludge_kg; sludge_solids; wastewater_m3; density; HF_concentration; exhaust_Nm3 | Reconcile bath make-up and recovery; meter utilities; weigh wastes; sample discharges and exhaust under the site monitoring plan | kg; MJ; m3; Nm3 | Each batch or shift for bath and utilities; each waste transfer; permit or campaign frequency for monitoring | Same reporting period as product mass and inclusive of start-up and maintenance events | Pickling tanks, rinses, drying, ventilation, fume treatment, acid recovery, and directly associated wastewater treatment | Calculate net external inputs and outputs after internal recycle; normalize by linked net product mass | Instrument calibration, laboratory QA/QC, chain-of-custody, bath balance closure, and waste manifests |
| `cp_cold_rolling_records` | `cold_rolling_and_temper` | Rolling intermediates, electricity, oil, make-up water, emulsion, and sludge | Coil tracking, electricity meter, stock ledger, tank balance, and waste transfer record | lot_id; input_mass_kg; output_mass_kg; electricity_MJ; oil_opening_kg; oil_purchased_kg; oil_closing_kg; recovered_oil_kg; make_up_water_kg; spent_emulsion_kg; sludge_kg | Link coils to line meters and reconcile rolling-fluid stock and waste transfers | kg; MJ | Each coil or shift; monthly stock reconciliation | Same reporting period as product mass and representative rolling schedules | Included rolling stands, hydraulics, emulsion circulation, filtration, and controls | Sum linked coils; calculate net oil and water input; normalize to net product; avoid counting recirculated emulsion | Meter calibration, coil traceability, inventory reconciliation, and waste manifests |
| `cp_mechanical_finishing_records` | `mechanical_surface_finishing` | Finishing intermediate, electricity, abrasive, water, dust, sludge, and particulate release | Coil or sheet route record, meters, material issues, waste weights, and exhaust monitoring | lot_id; input_mass_kg; output_mass_kg; finish_code; electricity_MJ; abrasive_kg; water_kg; dust_kg; sludge_kg; sludge_solids; particulate_concentration; exhaust_Nm3 | Link actual finish route to utility and material records; weigh captured waste; monitor exhaust or validate capture balance | kg; MJ; Nm3 | Each lot or shift; each waste transfer; monitoring-plan frequency for air releases | Same reporting period as product mass and representative finish mix | Included grinding, polishing, brushing, extraction, filtration, and wet systems | Sum actual route records and normalize to linked net product; keep dry dust and wet sludge separate | Meter calibration, material ledger, scale checks, finish traceability, and monitoring QA/QC |
| `cp_finalization_records` | `product_finalization` | Finalization intermediate, electricity, packaging, and final scrap | Lot ledger, electricity meter, packaging bill of materials, scale tickets, and reuse log | lot_id; input_mass_kg; saleable_mass_kg; electricity_MJ; film_kg; strap_length_m; strap_linear_mass; pallet_count; pallet_mass; pallet_reuse_count; scrap_kg | Link slitting, cutting, inspection, and dispatch records to meters and packaging issues | kg; MJ; m; count | Each lot, aggregated over reporting period | Same reporting period as product mass | Final conversion, inspection, handling, and packing equipment | Sum only packaging that crosses the gate; calculate strap and pallet mass; normalize to net product | Scale and meter calibration, bill-of-material reconciliation, dispatch records, and reuse evidence |
| `cp_final_product_mass` | `product_finalization` | Net saleable reference product | Certified dispatch scale and inspection release | lot_id; gross_dispatch_mass_kg; packaging_mass_kg; net_product_mass_kg; grade; dimensions; finish; edge_condition; release_status | Determine net product mass from calibrated scale records and release only conforming product | kg | Each saleable lot | Same reporting period as all foreground exchanges | All saleable products covered by the declared data package | Sum net conforming mass and normalize to exactly 1,000 kg; exclude packaging and rejected product | Scale calibration, inspection certificate, dispatch record, and mass reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | Every foreground exchange | normalized_amount = reporting_period_amount / net_saleable_product_mass × 1,000 kg | reporting_period_amount; net_saleable_product_mass | Exchange per 1,000 kg net saleable product |  |
| `calc_internal_mass_link` | Consecutive stainless-steel intermediates | For each linked lot, upstream intermediate output equals downstream intermediate input after separately recorded stock change; investigate any unassigned difference | upstream_output_mass; downstream_input_mass; stock_change | Reconciled intermediate mass and balance exception |  |
| `calc_acid_active_mass` | Nitric acid, hydrofluoric acid, and neutralizer | active_substance_mass = solution_mass × measured_mass_fraction; retain both solution mass and active-substance mass | solution_mass; measured_mass_fraction | Active-substance mass for disclosure | `eu-jrc-fmp-bref-2022` |
| `calc_gas_reference_volume` | Natural gas and protective gases | Convert measured volume to the declared reference temperature and pressure using the site-approved compressibility method; retain measured and converted values | measured_volume; temperature; pressure; moisture_basis; compressibility_factor | Gas volume at declared reference conditions |  |
| `calc_fossil_co2` | Furnace fossil carbon dioxide | Use validated stack measurement or calculate fossil CO2 from foreground fuel carbon and documented oxidation; do not include biogenic carbon in this flow | fuel_amount; fuel_carbon_content; oxidation_factor; stack_measurement | Fossil CO2 to air |  |
| `calc_wastewater_mass` | Acidic pickling rinse wastewater | wastewater_mass = measured_discharge_volume × measured_or_validated_density | discharge_volume; density | Wastewater mass crossing the boundary | `us-epa-iron-steel-effluent-2002` |
| `calc_air_release` | HF and particulate releases | release_mass = validated_concentration × dry standardized exhaust volume, with unit and moisture corrections retained | concentration; exhaust_volume; standard_conditions; moisture_correction | Pollutant mass to air | `eu-jrc-fmp-bref-2022` |
| `calc_packaging_mass` | Steel strap and wooden pallet | strap_mass = strap_length × measured_linear_mass; pallet_mass_allocated = pallet_count × pallet_mass / documented_expected_uses when the pallet is demonstrably reusable | strap_length; strap_linear_mass; pallet_count; pallet_mass; expected_uses | Packaging mass per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and feed | Retain grade or composition standard, form, dimensions, finish, edge condition, input state, output state, and the operation establishing further-worked status for every covered product family. | Mill certificates, route cards, inspection release, and classification review |
| `dq_route_completeness` | Process map | Demonstrate that at least one operation after the final primary hot or cold rolling step establishes the further-worked state and that every on-site or outsourced operation for the product is represented once. | Route diagram, equipment list, outsourcing records, and mass-linked process ledger |
| `dq_mass_balance` | Stainless-steel feed, intermediates, product, and scrap | Reconcile mass over the reporting period and investigate unexplained differences before release; disclose measured stock change and unassigned loss. | Calibrated scale records, stock ledger, scrap manifests, and signed balance review |
| `dq_utility_coverage` | Electricity, gas, and water | Cover start-up, shutdown, idle, recirculation, abatement, and directly associated treatment loads attributable to the declared route; disclose shared-meter allocation. | Meter map, calibration, operating log, and allocation workbook |
| `dq_chemical_identity` | Pickling and finishing chemicals | Retain product name, concentration or formulation, supplier, density where used, safety data sheet, and batch or reporting-period issue quantities. | Purchase record, SDS, certificate of analysis, tank ledger, and sampling record |
| `dq_emissions_and_wastes` | Direct releases and waste outputs | Retain sampling method, standard conditions, detection limits, moisture basis, waste moisture or solids content, destination, and monitoring-period representativeness. | Laboratory QA/QC, monitoring report, chain-of-custody, and waste transfer documentation |
| `dq_temporal_representativeness` | Foreground dataset | Prefer at least 12 consecutive representative months; justify shorter campaigns and document production mix, maintenance, abnormal events, and capacity utilization. | Production calendar, maintenance log, event register, and coverage calculation |
| `dq_no_unverified_uuid_proxy` | All Tiangong references | Keep a UUID empty when an exact public state-code-100 identity is not directly verified; do not replace a missing route-, state-, geography-, or technology-specific identity with a broader proxy. | UUID audit and unresolved-identity register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_state` | reference_product | Fail conformance when stainless-steel grade, flat-rolled form, input state, output further-worked state, or route-defining operation is missing or inconsistent with the product boundary. | `un-cpc-v3-structure-2025`; `un-cpc-v3-explanatory-notes-2025` |
| `validate_reference_mass` | reference_flow | Confirm that the output row `output_reference_product` equals 1,000 kg net saleable product after normalization and excludes packaging mass. |  |
| `validate_route_presence` | process_inventory | Confirm that feed preparation and product finalization are present and that a declared annealing, pickling, temper or skin-pass rolling, mechanical surface finishing, or other documented operation occurring after the final primary hot or cold rolling step establishes the further-worked status; primary cold reduction alone is insufficient. | `eu-jrc-fmp-bref-2022` |
| `validate_atomic_flows` | process_inventory | Confirm that each row is one atomic material, energy, waste, or elementary exchange and that conditional applicability is declared by process or row rather than by a combined selector label. |  |
| `validate_mass_reconciliation` | foreground_mass_balance | Confirm that feed, linked intermediates, product, scrap, wastes, and measured stock changes reconcile for the reporting period; flag unexplained imbalance for review. |  |
| `validate_pickling_route` | acid_pickling_and_rinsing | When pickling is included, require bath chemistry and concentration, water recycle, acid recovery, fume treatment, wastewater destination, sludge solids, and monitored applicable air releases. | `eu-jrc-fmp-bref-2022`; `us-epa-iron-steel-effluent-2002` |
| `validate_energy_identity` | electricity_and_gas_inputs | Reject unqualified electricity or gas identities that omit the required supply, geography, technology, delivery-boundary, or reference-condition disclosures. |  |
| `validate_unresolved_identities` | flow_references | Report every UUID-empty inventory row as unresolved and verify that no non-exact or non-public candidate has been promoted. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared family of further-worked stainless-steel flat-rolled products |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and resolution or explicit acceptance of identity gaps |
| allowed_use | Attributional gate-to-gate modelling of a declared producer, route, grade family, product state, and reporting period; linking to separately modelled upstream feed production and downstream fabrication |
| excluded_use | Primary stainless-steel production without linked upstream datasets; generic use-stage claims; consequential scrap-credit claims; products outside the semantic boundary; substitution across undisclosed grade, finish, route, or geography |
| required_metadata | PCR id and version state; producer and geography; reporting period; grade family; dimensions; finish; edge and delivery condition; feed state; further-working operations; combined-line aggregation; capacity utilization; upstream dataset choices; allocation; packaging; unresolved UUIDs |
| required_quality_disclosure | Mass-balance closure; meter and scale coverage; shared-utility allocation; chemical concentrations; gas reference conditions; water recycle; acid recovery; abatement boundary; waste moisture and destination; emissions monitoring; temporal and technological representativeness |
| update_trigger | Change in grade family or product state, route-defining operation, furnace fuel, pickling chemistry, rolling or finishing technology, abatement, supplier mix, geography, allocation, packaging, or a material change in annual mass, energy, water, chemical, waste, or emission performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-03 | Official CPC 41232 classification identity |
| `un-cpc-v3-explanatory-notes-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, p. 208, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-09-03 | Class and subclass context, exclusions, and semantic product boundary |
| `eu-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, December 2022, especially Chapter 3, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf, retrieved 2026-09-03 | Stainless-steel cold-rolling route, annealing and pickling sequence, process inputs and outputs, mechanical finishing, utilities, waste, emissions, recirculation, abatement, and monitoring design |
| `us-epa-iron-steel-effluent-2002` | Official guidance (`official_guidance`) | United States Environmental Protection Agency, Development Document for Final Effluent Limitations Guidelines and Standards for the Iron and Steel Manufacturing Point Source Category, EPA-821-R-02-004, April 2002, https://www.epa.gov/sites/default/files/2015-10/documents/ironsteel_dd_2002.pdf, retrieved 2026-09-03 | Steel-finishing rinse-water management, fume-scrubber recycle, acid recovery and purification, spent-liquor and sludge treatment, and wastewater collection boundary |
