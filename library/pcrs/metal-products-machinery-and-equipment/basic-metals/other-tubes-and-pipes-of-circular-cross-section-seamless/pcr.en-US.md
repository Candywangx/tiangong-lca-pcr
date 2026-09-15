---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-of-circular-cross-section-seamless
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other tubes and pipes, of circular cross-section, seamless

## 1. Scope and Applicability

This PCR applies to factory-gate production of seamless steel tubes and pipes with circular cross-section that are not line pipe for oil or gas pipelines and are not casing, tubing, or drill pipe for oil or gas drilling. It covers non-alloy, alloy, and high-chromium steel grades when the grade and route are declared. The foreground starts with purchased steel billet, bloom, or round bar and covers heating, piercing, elongation, final rolling or sizing, cooling, and in-line finishing. Separate heat treatment and cold reduction are included when required by the declared product specification.

Welded or open-seam pipe, cast pipe, non-circular tube or hollow profile, non-ferrous tube, pipe fittings, coating, galvanising, packaging, outbound transport, use, and end-of-life are excluded. Upstream production of the received steel semi-finished input, fuels, electricity, water, and rolling oils is represented by linked upstream datasets, not by duplicating those processes inside the foreground.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-of-circular-cross-section-seamless |
| classification_refs | CPC 3.0: 41283, exact semantic candidate pending mapping acceptance |
| covered_products | Other seamless steel tubes and pipes of circular cross-section, including hot-finished or cold-finished non-alloy, alloy, and high-chromium steel products |
| excluded_products | Seamless line pipe for oil or gas pipelines; seamless casing, tubing, and drill pipe for oil or gas drilling; welded or open-seam pipe; non-circular seamless profiles; cast or non-ferrous tube; fittings |
| representative_product | Uncoated and unpackaged circular-section seamless steel tube at the producing mill gate |
| production_route | Steel billet, bloom, or round bar heating, piercing, elongation, final rolling or sizing, cooling, and declared conditional heat treatment or cold reduction |
| market_state | Finished, uncoated, unpackaged tube or pipe at factory gate, with steel grade, dimensions, heat-treatment state, and hot- or cold-finished state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a declared circular-section seamless steel tube or pipe meeting the specified grade, dimensions, and delivery condition |
| How much | 1,000 kg net mass of conforming product |
| How well | Meets the declared steel grade, outside diameter, wall thickness, length, dimensional tolerance, heat-treatment state, surface condition, and applicable customer specification |
| How long or cycle | One production batch or campaign ending at the factory gate; no use-stage service life is represented |
| reference_flow_link | The net weighed conforming output after all included hot forming and declared conditional finishing, excluding packaging mass |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other tubes and pipes, of circular cross-section, seamless; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade and alloy family; billet, bloom, or round-bar input form; outside diameter; wall thickness; product length; hot-finished or cold-finished state; piercing and rolling technology; heat-treatment state; surface condition; furnace fuel; production site and geography; production period; allocation treatment; excluded coating and packaging confirmation |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and interprocess tube transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net product mass after removing rejected pieces, loose scale, process liquids, and packaging. Normalize all process totals to 1,000 kg conforming reference product. |
| `electricity_energy_conversion` | alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the site meter reading and convert kWh to MJ using 1 kWh = 3.6 MJ; do not add upstream electricity emissions as foreground elementary flows. |
| `fuel_quantity_basis` | gaseous natural gas and heavy fuel oil | Volume for natural gas; Mass for heavy fuel oil | m3; kg | Record natural gas at the site's declared reference conditions and heavy fuel oil by mass. Do not combine the two fuels; include only the atomic fuel rows that apply to the declared furnace route. |
| `water_mass_basis` | supplied process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record process water crossing the mill boundary by mass. If a volume meter is used, retain the measured volume, water temperature, and site density conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel billet, bloom, or round bar delivered at the seamless-tube mill gate, with steel grade, input form, mass, temperature state, and supplier dataset declared |
| starting_condition_role | Upstream semi-finished steel product entering foreground tube manufacture |
| product_classification_scope | Circular-section seamless steel tubes and pipes other than the excluded oil-and-gas line-pipe and drilling categories |
| recursive_input_rule | A tube input transferred between included foreground processes is an internal intermediate and is not linked to an additional same-category upstream dataset; purchased same-category tube entering only finishing is disclosed and linked to its upstream production dataset once |
| upstream_dataset_requirement | Link datasets for steel semi-finished input, each applicable fuel, electricity supply, process water, and each rolling oil at their actual supply geography and technology |
| disclosure | Declare included hot-forming, heat-treatment, and cold-finishing processes; furnace fuel; steel grade; input temperature; product state; recovery destinations; excluded coating, packaging, and transport; and any process operated outside the reporting site |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_hot_forming` | all datasets | Include input heating, piercing, elongation or stretching, final rolling or sizing, cooling, direct utilities, generated mill scale and scrap, and direct furnace emissions from the received steel semi-finished input through hot-finished tube output. | `ec-jrc-fmp-bref-2022` |
| `boundary_conditional_finishing` | heat-treated or cold-finished products | Include separate heat treatment and cold reduction only when performed for the declared reference product; identify interprocess tube transfers so they are not double counted as purchased inputs. | `ec-jrc-fmp-bref-2022` |
| `boundary_upstream_and_downstream` | linked supply and excluded stages | Represent upstream input production with linked datasets. Exclude coating, galvanising, packaging, outbound transport, use, and end-of-life unless a later study layer adds them transparently. | `unsd-cpc-3-0-structure-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hot_tube_forming` | Hot seamless-tube forming | required | Always required for production from steel billet, bloom, or round bar | Foreground production | 1,000 kg hot-finished conforming tube transferred or sold |
| `separate_heat_treatment` | Separate heat treatment | conditional | Include when normalising, tempering, or another separate thermal cycle is required after hot rolling | Foreground conditioning | 1,000 kg heat-treated conforming tube transferred or sold |
| `cold_tube_finishing` | Cold tube finishing | conditional | Include when cold drawing or cold pilgering reduces diameter or wall thickness or establishes the declared finish | Foreground conditioning | 1,000 kg cold-finished conforming tube |

### Process: Hot seamless-tube forming (`hot_tube_forming`)

#### Inputs

##### Product flows

###### Steel billet or bloom feed (`hf_steel_billet`)

Received grade-specific billet, bloom, or round bar crosses the foreground boundary before reheating and piercing.

- Selected flow: Steel billet or bloom; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured received net mass allocated to the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_material_mass`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity (`hf_electricity`)

Electricity powers the piercing, rolling, sizing, pumps, fans, handling, and cooling equipment assigned to hot forming.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hot_electricity`
- Sources: `ec-jrc-fmp-bref-2022`

###### Gaseous natural gas (`hf_natural_gas`)

Natural gas is recorded only when it crosses the boundary as fuel for input heating or in-line reheating.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered consumed volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_fuels`
- Sources: `ec-jrc-fmp-bref-2022`

###### Heavy fuel oil (`hf_heavy_fuel_oil`)

Heavy fuel oil is recorded only for an oil-fired input-heating or reheating furnace; it is not combined with natural gas.

- Selected flow: heavy fuel oil `9490cf0e-a790-44a1-9c2f-3793bbdb452d`
- Flow property / unit: Mass / kg
- Amount rule: tank-balance or invoice mass consumed by the assigned furnace
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_fuels`
- Sources: `ec-jrc-fmp-bref-2022`

###### Supplied process water (`hf_process_water`)

Supplied process water used for scale removal, equipment cooling, or direct-contact cooling is recorded as one concrete water product crossing the mill boundary; internal recirculation is not counted again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up water entering the assigned hot-forming water circuits
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_water`
- Sources: `ec-jrc-fmp-bref-2022`

###### Hot rolling oil (`hf_hot_rolling_oil`)

Hot rolling oil consumed by the rolling or mandrel-lubrication system is recorded net of recovered oil returned to the same system.

- Selected flow: Hot rolling oil `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus unused returned mass during the batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hot_oil`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot-finished seamless steel tube (`reference_product`)

The weighed hot-finished circular seamless steel tube is the process output, sold directly or transferred to declared heat treatment or cold finishing.

- Selected flow: Other tubes and pipes, of circular cross-section, seamless; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured conforming net output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per hot-forming production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_material_mass`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Recovered mill scale (`hf_mill_scale`)

Oxide scale physically removed from the heated and rolled steel and recovered from dry collection or the water circuit is recorded by mass.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: measured dry or as-received mass with moisture and oil content declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

###### Post-industrial steel scrap (`hf_steel_scrap`)

Crop ends, cuttings, pierced rejects, and rejected hot-formed tube sections leaving the foreground as steel scrap are recorded separately from mill scale.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap mass assigned to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

###### Direct fossil carbon dioxide (`hf_carbon_dioxide`)

Fossil carbon dioxide released by the hot-forming furnaces is recorded as a direct foreground emission; upstream electricity emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-measured mass or calculated mass from collected fuel carbon content and oxidation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hot_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Direct nitrogen oxides (`hf_nitrogen_oxides`)

Nitrogen oxides from input-heating and reheating furnace stacks are recorded at the monitored site compartment; the generic PCR uses unspecified air.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: monitored or permit-method mass assigned to the batch from measured concentration and dry-gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg hot-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hot_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Separate heat treatment (`separate_heat_treatment`)

#### Inputs

##### Product flows

###### Seamless tube entering heat treatment (`ht_seamless_tube_input`)

Hot-finished seamless tube crosses into a separately metered normalising, tempering, or other declared heat-treatment process.

- Selected flow: Circular-section seamless steel tube before heat treatment; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured input transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg heat-treated conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_mass`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity (`ht_electricity`)

Electricity assigned to the heat-treatment furnace auxiliaries, fans, pumps, handling, and controls is recorded separately from hot forming.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg heat-treated conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_electricity`
- Sources: `ec-jrc-fmp-bref-2022`

###### Gaseous natural gas (`ht_natural_gas`)

Natural gas is recorded only when used by the separate heat-treatment furnace.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered consumed volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg heat-treated conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_fuels`
- Sources: `ec-jrc-fmp-bref-2022`

###### Heavy fuel oil (`ht_heavy_fuel_oil`)

Heavy fuel oil is recorded only when used by the separate heat-treatment furnace and is not combined with natural gas.

- Selected flow: heavy fuel oil `9490cf0e-a790-44a1-9c2f-3793bbdb452d`
- Flow property / unit: Mass / kg
- Amount rule: tank-balance or invoice mass consumed by the assigned furnace
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg heat-treated conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_fuels`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated seamless steel tube (`ht_finished_tube`)

The conforming tube leaving the separate thermal cycle is weighed before transfer or sale.

- Selected flow: Other tubes and pipes, of circular cross-section, seamless; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured conforming net output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per heat-treatment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_mass`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide (`ht_carbon_dioxide`)

Fossil carbon dioxide released by the separate heat-treatment furnace is assigned only to that process.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-measured mass or calculated mass from collected fuel carbon content and oxidation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg heat-treated conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

###### Direct nitrogen oxides (`ht_nitrogen_oxides`)

Nitrogen oxides released by the separate heat-treatment furnace are assigned from the applicable stack record.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg
- Amount rule: monitored or permit-method mass calculated from measured concentration and dry-gas flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg heat-treated conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_emissions`
- Sources: `ec-jrc-fmp-bref-2022`

### Process: Cold tube finishing (`cold_tube_finishing`)

#### Inputs

##### Product flows

###### Seamless tube entering cold finishing (`cf_seamless_tube_input`)

Hot-finished or heat-treated seamless tube crosses into cold drawing or cold pilgering as a measured interprocess input.

- Selected flow: Circular-section seamless steel tube before cold finishing; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured input transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cold-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_mass`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity (`cf_electricity`)

Electricity assigned to cold drawing or pilgering, handling, and auxiliary equipment is separately submetered.

- Selected flow: alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cold-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_electricity`
- Sources: `ec-jrc-fmp-bref-2022`

###### Cold rolling oil (`cf_cold_rolling_oil`)

Cold rolling oil entering the cold reduction system is recorded net of unused oil returned to storage.

- Selected flow: cold rolling oil `a9417245-6f45-4df3-8f04-227ed8a1be58`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus unused returned mass during the batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cold-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_oil`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-finished seamless steel tube (`cf_finished_tube`)

The conforming cold-finished circular seamless steel tube is weighed after the declared reduction and inspection.

- Selected flow: Other tubes and pipes, of circular cross-section, seamless; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured conforming net output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cold-finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_mass`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

###### Post-industrial steel scrap (`cf_steel_scrap`)

Cold-finishing crop ends, cuttings, and rejected sections leaving the process are recorded as post-industrial steel scrap.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed scrap mass assigned to the cold-finishing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cold-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

###### Used lubricating oil (`cf_used_lubricating_oil`)

Cold rolling oil removed from service and transferred for treatment or recovery is recorded by waste transfer mass.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from the cold-finishing oil circuit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cold-finished conforming tube output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_wastes`
- Sources: `ec-jrc-fmp-bref-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separately metered process lines | Prefer subdivision using the three process ids and direct meter, scale, stack, and waste records; do not allocate a separately measured process burden. |  |
| `allocation_mass_shared` | unavoidable shared utilities and wastes | Allocate only an unavoidable shared total by net conforming product mass over the same measurement period, unless a documented causal engineering parameter better represents consumption. Disclose the parameter, denominator, and affected rows. |  |
| `allocation_recovered_material` | mill scale, steel scrap, and used oil | Record the full generated waste mass and destination. Do not subtract a recycling credit or avoided product from the foreground inventory; any downstream substitution belongs to the selected system model and must be disclosed separately. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hot_material_mass` | `hot_tube_forming` | billet input and hot tube output | scale and production record | batch_id; grade; input_form; input_mass_kg; output_mass_kg; reject_mass_kg | calibrated receiving and product scales reconciled to batch records | kg | each batch | all batches in reporting period | hot tube line | sum assigned masses and normalize by conforming output | scale calibration; batch reconciliation; reject log |
| `cp_hot_electricity` | `hot_tube_forming` | alternating-current electricity | submeter | meter_start_kWh; meter_end_kWh; downtime_kWh; batch_output_kg | read dedicated meter or documented engineering submeter | kWh | shift and batch | full reporting period | hot-forming equipment | net kWh multiplied by 3.6 and divided by conforming output | meter calibration; assignment log |
| `cp_hot_fuels` | `hot_tube_forming` | natural gas or heavy fuel oil | meter, tank, or invoice | fuel_identity; meter_or_mass_start; meter_or_mass_end; reference_conditions; assigned_output_kg | dedicated gas meter or tank mass balance | m3 or kg | shift and delivery | full reporting period | hot-forming furnaces | aggregate each fuel separately and normalize by conforming output | meter calibration; tank reconciliation; invoice |
| `cp_hot_water` | `hot_tube_forming` | supplied process water | make-up water meter | meter_start; meter_end; unit; temperature; density_if_converted; assigned_output_kg | meter external make-up only and exclude recirculated internal water | m3 or kg | shift | full reporting period | assigned hot-forming water circuits | convert to kg when needed and normalize by conforming output | meter calibration; circuit diagram; conversion record |
| `cp_hot_oil` | `hot_tube_forming` | hot rolling oil | stores and return record | issued_mass_kg; returned_unused_mass_kg; recovered_internal_mass_kg; batch_output_kg | reconcile issued and returned inventory | kg | batch | full reporting period | hot-forming lubrication system | issued minus unused returned; do not recount internal recovery | stores ledger; return ticket |
| `cp_hot_wastes` | `hot_tube_forming` | mill scale and steel scrap | scale and waste transfer record | waste_identity; gross_mass_kg; tare_mass_kg; moisture; oil_content; destination; batch_id | weigh each segregated waste stream | kg | container or batch | full reporting period | hot-forming line | net each waste separately and normalize by output | calibrated scale; transfer note; composition sample |
| `cp_hot_emissions` | `hot_tube_forming` | direct furnace emissions | stack monitoring and fuel record | stack_id; pollutant; concentration; dry_gas_flow; operating_hours; fuel_carbon; fuel_mass_or_volume; oxidation_basis | site monitoring or documented mass-balance calculation | kg | monitoring interval and batch | representative operating period covering reporting period | hot-forming furnaces only | calculate pollutant mass, assign by operating record, and normalize by output | monitor calibration; laboratory report; calculation sheet |
| `cp_heat_mass` | `separate_heat_treatment` | tube input and output | scale and batch record | batch_id; grade; input_mass_kg; output_mass_kg; reject_mass_kg | calibrated process scales | kg | each heat-treatment batch | all included batches | separate heat-treatment line | reconcile input, output, and rejects; normalize by conforming output | scale calibration; batch record |
| `cp_heat_electricity` | `separate_heat_treatment` | alternating-current electricity | submeter | meter_start_kWh; meter_end_kWh; batch_output_kg | dedicated meter | kWh | batch | all included batches | heat-treatment line | net kWh multiplied by 3.6 and normalized by output | meter calibration; batch assignment |
| `cp_heat_fuels` | `separate_heat_treatment` | natural gas or heavy fuel oil | meter, tank, or invoice | fuel_identity; meter_or_mass_start; meter_or_mass_end; reference_conditions; batch_output_kg | dedicated gas meter or tank mass balance | m3 or kg | batch | all included batches | heat-treatment furnace | aggregate each fuel separately and normalize by output | meter calibration; invoice; tank reconciliation |
| `cp_heat_emissions` | `separate_heat_treatment` | direct furnace emissions | stack monitoring and fuel record | stack_id; pollutant; concentration; dry_gas_flow; operating_hours; fuel_carbon; oxidation_basis | site monitoring or documented mass-balance calculation | kg | monitoring interval and batch | representative operating period | heat-treatment furnace only | calculate pollutant mass and normalize by heat-treated output | monitor calibration; laboratory report; calculation sheet |
| `cp_cold_mass` | `cold_tube_finishing` | tube input and output | scale and production record | batch_id; grade; input_mass_kg; output_mass_kg; reject_mass_kg | calibrated process scales | kg | each batch | all included batches | cold-finishing line | reconcile input, output, and rejects; normalize by conforming output | scale calibration; production log |
| `cp_cold_electricity` | `cold_tube_finishing` | alternating-current electricity | submeter | meter_start_kWh; meter_end_kWh; batch_output_kg | dedicated or documented engineering submeter | kWh | shift and batch | all included batches | cold-finishing line | net kWh multiplied by 3.6 and normalized by output | meter calibration; assignment log |
| `cp_cold_oil` | `cold_tube_finishing` | cold rolling oil | stores and return record | issued_mass_kg; returned_unused_mass_kg; recovered_internal_mass_kg; batch_output_kg | reconcile issued and returned inventory | kg | batch | all included batches | cold-finishing oil system | issued minus unused returned; do not recount internal recovery | stores ledger; return ticket |
| `cp_cold_wastes` | `cold_tube_finishing` | steel scrap and used lubricating oil | scale and waste transfer record | waste_identity; gross_mass_kg; tare_mass_kg; contamination; destination; batch_id | weigh each segregated waste stream | kg | container or batch | all included batches | cold-finishing line | net each waste separately and normalize by output | calibrated scale; waste transfer note |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | all electricity rows | Electricity MJ = net metered kWh × 3.6 | meter start and end; excluded downtime; output mass | MJ per process output basis |  |
| `calc_oil_consumed` | hot and cold rolling oil inputs | Consumed oil mass = issued oil - unused oil returned; oil recirculated within the same process is not a new input | stores issues; unused returns; batch output | kg oil per process output basis |  |
| `calc_furnace_pollutant_mass` | direct furnace CO2 and nitrogen oxides | Use site-approved fuel carbon balance or concentration × dry-gas-flow × operating-time method; document units, oxygen correction, moisture basis, and process assignment | fuel and stack records | kg pollutant per process output basis | `ec-jrc-fmp-bref-2022` |
| `calc_process_mass_balance` | each process | Reconcile input tube or billet mass with conforming tube output, segregated steel scrap, mill scale where applicable, and documented inventory change; investigate unexplained imbalance rather than forcing closure | material scale records; waste records; inventory change | documented mass-balance closure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and steel input | Retain grade certificate, input form, outside diameter, wall thickness, length, finish state, heat-treatment state, and classification rationale for every represented product family. | material certificate; product specification; batch traveller |
| `dq_measurement` | all foreground quantities | Use calibrated meters or scales, retain raw readings and conversions, and state detection limits and substitution methods for missing records. | calibration certificate; raw log; calculation sheet |
| `dq_temporal` | reporting period | Cover a representative continuous period that includes all declared routes and grades; disclose shutdown, start-up, trial, and abnormal-operation treatment. | production calendar; route coverage check |
| `dq_completeness` | process inventory | Reconcile each process mass balance and check that every applicable fuel, electricity, water, rolling oil, waste, and direct furnace-emission row is present or explicitly not applicable. | mass-balance review; applicability checklist |
| `dq_upstream_links` | purchased inputs | Match upstream datasets to steel grade and semi-finished state, electricity geography, fuel supply, water supply, and rolling-oil identity; disclose proxies. | supplier record; dataset link register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | The reference output must equal 1,000 kg net conforming uncoated and unpackaged circular-section seamless steel tube, and all required qualifiers must be present. | `unsd-cpc-3-0-structure-2025` |
| `validate_process_applicability` | process map | Hot forming must be included. Heat treatment and cold finishing must agree with the declared delivery state, and excluded processes must carry no foreground amounts. | `ec-jrc-fmp-bref-2022` |
| `validate_atomic_energy` | furnace and electricity inputs | Natural gas, heavy fuel oil, and alternating-current electricity must remain separate rows; only fuels actually used by the declared process may have amounts. | `ec-jrc-fmp-bref-2022` |
| `validate_mass_balance` | each process | Input and output mass records must reconcile after accounting for conforming output, steel scrap, mill scale where applicable, and inventory change; unexplained imbalance requires review. |  |
| `validate_direct_emissions` | fossil carbon dioxide and nitrogen oxides | Direct furnace emissions must reconcile to site fuel and stack records and must exclude upstream electricity or fuel-supply emissions. | `ec-jrc-fmp-bref-2022` |
| `validate_uuid_gaps` | unresolved product flows | Do not replace the unresolved reference product, steel billet, or interprocess tube UUIDs with an excluded sibling, grade-specific proxy, or non-ferrous flow. | `unsd-cpc-3-0-structure-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate secondary_dataset or background_dataset for declared circular-section seamless steel tube production |
| downstream_use | Linked production input for process and lifecyclemodel construction where upstream semi-finished steel and utility datasets are added separately |
| allowed_use | Studies matching the declared steel grade, dimensions, hot- or cold-finished state, heat-treatment route, furnace fuel, site geography, time period, and uncoated unpackaged factory-gate boundary |
| excluded_use | Seamless oil or gas line pipe; drilling casing, tubing, or drill pipe; welded, cast, non-circular, coated, packaged, or non-ferrous tube; cradle-to-gate use without upstream links |
| required_metadata | PCR id and version; product and grade specification; dimensions; delivery condition; process applicability; furnace fuels; input state; geography; technology; period; allocation; upstream dataset links; unresolved UUID disclosure |
| required_quality_disclosure | Meter and scale coverage; mass-balance closure; stack method; fuel reference conditions; water conversion; missing-data treatment; route and grade coverage; proxy use; recovery destinations |
| update_trigger | Change in steel grade family, input form or temperature, piercing or rolling technology, heat-treatment or cold-finishing route, furnace fuel, site, reporting period, allocation method, or any material input, waste, emission, or exact UUID evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-04 | Official product identity, steel parent hierarchy, and separation from line pipe, drilling pipe, welded pipe, and non-circular seamless profiles |
| `ec-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, 2022, DOI 10.2760/196475, https://publications.jrc.ec.europa.eu/repository/handle/JRC131649, retrieved 2026-09-04 | Tube-mill process decomposition; billet or bloom inputs; natural-gas or oil firing; conditional separate heat treatment and cold finishing; water, oil, waste, and direct furnace-emission collection candidates |
