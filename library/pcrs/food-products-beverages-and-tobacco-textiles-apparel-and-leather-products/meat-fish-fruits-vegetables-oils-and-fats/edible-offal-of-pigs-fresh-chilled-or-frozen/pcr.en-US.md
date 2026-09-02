---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-pigs-fresh-chilled-or-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Edible offal of pigs, fresh, chilled or frozen

## 1. Scope and Applicability

This PCR governs foreground data packages for one specifically identified edible pig organ released at the reporting facility gate in exactly one declared market state: fresh, chilled or frozen. The reference product is never a pooled organ mix or a pooled state mix.

The foreground route starts either with accepted live pigs when slaughter is integrated in the reporting facility, or with one purchased recovered pig organ whose upstream slaughter dataset remains linked. The scope covers organ inspection and preparation, exactly one state-conditioning branch, packaging, state-appropriate storage, release, cleaning and disinfection, and conditional on-site wastewater management. Pig production, inbound transport, distribution, retail, cooking, consumption, and end-of-life remain outside this foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-pigs-fresh-chilled-or-frozen |
| classification_refs | CPC 3.0 21153 — Edible offal of pigs, fresh, chilled or frozen |
| covered_products | One jurisdictionally edible pig organ declared as pig liver, pig heart, pig kidney, pig tongue, pig stomach, pig small intestine, pig large intestine, pig lung or pig spleen, in exactly one fresh, chilled or frozen market state. |
| excluded_products | Pig meat and carcass as reference products; non-edible or condemned organs; organs of other species; mixed-organ reference products; salted, dried, smoked, prepared or preserved organ products; packaging. |
| representative_product | 1 kg net conforming mass of one declared edible pig organ at one declared market state, excluding packaging. |
| production_route | Integrated slaughter and organ recovery, or purchase of one recovered organ with a linked upstream slaughter dataset; exactly one route start must be declared. |
| market_state | Exactly one of fresh, chilled or frozen at facility-gate release; the applicable temperature-time and hygiene specification must be declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one specifically identified edible pig organ suitable for its declared market state and intended food use. |
| How much | 1 kg net conforming product mass at facility-gate release, excluding all packaging. |
| How well | The lot meets the declared organ identity, legal edible status, product form, hygiene release criteria, temperature-time specification and packaging specification. |
| How long or cycle | One released production lot through the facility gate, including preservation only up to the declared fresh, chilled or frozen release condition. |
| reference_flow_link | Output row `packaging_storage_and_release_reference_product` from process `packaging_storage_and_release`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming product, excluding packaging |
| Reference product flow | Edible offal of pigs, fresh, chilled or frozen `17a80845-90d9-42a4-8a70-fee47fe2b380` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact pig organ identity; legal edible status and jurisdiction; fresh, chilled or frozen state; product form and trimming status; release temperature and time specification; net mass and packaging exclusion; packaging bill of materials; integrated-slaughter or purchased-organ route start; facility and geography; reporting period; slaughter allocation method when applicable; installed refrigerant identity; wastewater destination and treatment status |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. Missing qualifiers make the reference-flow implementation incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net conforming product mass at release; preserve the kg reference and do not convert the reference object to item count. |
| `packaging_exclusion` | reference-product net mass | Mass | kg | Measure or calculate packaging mass separately and exclude it from the 1 kg reference amount. |
| `organ_mass_separation` | organ input, output, co-product and reject | Mass | kg | Keep measurements and mass balances separate by exact organ identity and lot. |
| `state_mass_separation` | fresh, chilled and frozen product | Mass | kg | Keep measurements separate by exactly one declared market state and never aggregate state branches. |
| `water_volume` | mains, ground and surface water | Volume | m3 | Preserve source-specific metered volume; any mass conversion must state density and conditions without changing source identity. |
| `energy_carrier_units` | electricity and thermal carriers | Energy | kWh for electricity; MJ for steam, hot water and natural gas | Retain original meter readings and conversion factors, and never combine separate carriers in one inventory row. |
| `fuel_mass` | diesel and liquefied petroleum gas | Mass | kg | Retain fuel identity and measured mass; if energy conversion is used, disclose the measured or supplier heating value. |
| `refrigerant_mass` | refrigerant make-up, recovery and release | Mass | kg | Balance each exact refrigerant substance separately and retain supplier composition for a refrigerant mixture. |
| `emission_mass` | single air or water pollutant | Mass | kg | Convert matched monitoring results to pollutant mass without aggregating chemical identities or environmental compartments. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Exactly one of: accepted live pig at the reporting facility for an integrated-slaughter route; or one specifically identified recovered pig organ at the reporting facility for a purchased-organ route. |
| starting_condition_role | The first foreground product input whose upstream production and inbound transport are represented by linked datasets rather than reopened inside this package. |
| product_classification_scope | CPC 3.0 21153 at release, restricted in each dataset to one exact pig organ and one exact fresh, chilled or frozen state. |
| recursive_input_rule | When an incoming product already belongs to this category, record its exact organ and state as one product input and link a separate upstream dataset; do not recursively reproduce its upstream foreground processes in the receiving package. |
| upstream_dataset_requirement | Integrated route: linked pig-production and inbound-transport datasets. Purchased-organ route: linked slaughter and organ-recovery dataset with organ-specific allocation, geography, period and quality disclosure. |
| disclosure | Declare route start, organ identity, state branch, facility boundary, included treatment, shared-service keys, upstream links, exclusions and any exceptional omission. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_start` | route start | Declare exactly one foreground start: accepted live pig for integrated slaughter, or one specifically identified recovered pig organ for a purchased-organ route; do not combine route starts. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `boundary_integrated_slaughter` | integrated slaughter | When integrated slaughter is selected, include receipt, ante-mortem control, slaughter, bleeding, evisceration, organ segregation, all named co-products, rejects, water, energy, direct emissions and wastewater generated inside the reporting boundary. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `boundary_purchased_organ` | purchased recovered organ | When a recovered organ is purchased, exclude the two integrated-slaughter foreground processes and require a separate upstream slaughter dataset with organ-specific allocation and quality disclosure. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `boundary_exact_organ` | product identity | Select one exact pig organ identity per dataset; do not pool organ masses, prices, rejects or process records. | `unsd-cpc-21153`; `eu-pef-2021-2279` |
| `boundary_exact_state` | market state | Select exactly one of fresh, chilled or frozen; include only its state-conditioning branch and retain its temperature-time specification through release. | `unsd-cpc-21153`; `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `boundary_upstream` | upstream exclusions | Keep pig production, feed, farm manure management and inbound transport upstream; represent them through linked upstream datasets rather than reopening them in this foreground package. | `eu-pef-2021-2279` |
| `boundary_downstream` | downstream exclusions | Exclude distribution beyond the reporting gate, retail, cooking, consumption and packaging or product end-of-life. | `eu-pef-2021-2279` |
| `boundary_packaging` | packaging | Include each primary, secondary and tertiary packaging component used before release as its own product input and waste output, but exclude packaging mass from the 1 kg reference amount. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `boundary_wastewater` | sanitation and wastewater | Include cleaning and disinfection throughout the foreground processes; include on-site wastewater treatment only when operated inside the reporting boundary, otherwise report each outgoing wastewater stream to its off-site destination. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `boundary_inventory_completeness` | LCI completeness | Record all material, energy, product, co-product, waste and elementary exchanges crossing the selected boundary as individual atomic rows; disclose a verified zero or documented exclusion rather than silently omitting an applicable row. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pig_receipt_and_ante_mortem` | Pig receipt and ante-mortem control | `conditional` | Include only when slaughter is integrated in the reporting facility; otherwise start with one purchased recovered organ. | Foreground receipt, acceptance and segregation before slaughter. | accepted live-pig mass transferred to slaughter |
| `slaughter_and_organ_recovery` | Slaughter and organ recovery | `conditional` | Include only for an integrated-slaughter route and apply the declared slaughter allocation. | Foreground slaughter, bleeding, scalding or skin handling, evisceration and segregation of each organ. | mass of each recovered pig organ transferred to preparation |
| `edible_organ_preparation` | Edible organ preparation | `required` | Always include for the one declared organ; purchased-organ routes enter here. | Foreground inspection, trimming, emptying where applicable, washing and hygienic preparation. | prepared mass of the one declared organ |
| `fresh_state_conditioning` | Fresh-state conditioning | `conditional` | Include if and only if the declared market state is fresh. | Foreground fresh-product draining, grading and short-duration handling without chilling or freezing. | mass of the declared organ released from fresh conditioning |
| `chilled_state_conditioning` | Chilled-state conditioning | `conditional` | Include if and only if the declared market state is chilled. | Foreground chilling and temperature-controlled holding of the declared organ. | mass of the declared organ released at the chilled specification |
| `frozen_state_conditioning` | Frozen-state conditioning | `conditional` | Include if and only if the declared market state is frozen. | Foreground freezing and frozen holding of the declared organ. | mass of the declared organ released at the frozen specification |
| `packaging_storage_and_release` | Packaging, state-controlled storage and release | `required` | Always include; accept one organ from exactly one fresh, chilled or frozen branch. | Foreground primary and secondary packaging, state-appropriate storage and reference-product release. | 1 kg net conforming reference product, excluding packaging |
| `sanitation_and_wastewater_management` | Sanitation and wastewater management | `required` | Always include cleaning and disinfection; include on-site treatment rows only when treatment is inside the reporting boundary. | Foreground cleaning-in-place or open-plant cleaning, disinfection, effluent segregation and conditional on-site treatment. | sanitation activity and wastewater load attributable to the 1 kg reference product |

### Process: Pig receipt and ante-mortem control (`pig_receipt_and_ante_mortem`)

#### Inputs

##### Product flows

###### Live-pig input (`pig_receipt_and_ante_mortem_live_pig`)

Record the measured mass of live pigs accepted at the reporting boundary; pig rearing and inbound transport remain upstream.

- Selected flow: Live pig
- Flow property / unit: Mass / kg
- Amount rule: Measured live-pig mass received for the declared production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_animal_receipt_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control potable mains water (`pig_receipt_and_ante_mortem_potable_mains_water`)

Record only potable mains water delivered to pig receipt and ante-mortem control as a separately metered product input.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: Metered mains-water volume attributable to this stage; no category default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control grid electricity (`pig_receipt_and_ante_mortem_grid_electricity`)

Record grid electricity crossing the facility boundary and consumed specifically by pig receipt and ante-mortem control; keep this carrier separate from every other carrier.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered, invoiced or stock-balanced grid electricity attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_electricity_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control purchased steam (`pig_receipt_and_ante_mortem_purchased_steam`)

Record purchased steam crossing the facility boundary and consumed specifically by pig receipt and ante-mortem control; keep this carrier separate from every other carrier.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased steam attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control purchased hot water (`pig_receipt_and_ante_mortem_purchased_hot_water`)

Record purchased hot water crossing the facility boundary and consumed specifically by pig receipt and ante-mortem control; keep this carrier separate from every other carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased hot water attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control natural gas (`pig_receipt_and_ante_mortem_natural_gas`)

Record natural gas crossing the facility boundary and consumed specifically by pig receipt and ante-mortem control; keep this carrier separate from every other carrier.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced natural gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control diesel fuel (`pig_receipt_and_ante_mortem_diesel_fuel`)

Record diesel fuel crossing the facility boundary and consumed specifically by pig receipt and ante-mortem control; keep this carrier separate from every other carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced diesel fuel attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control liquefied petroleum gas (`pig_receipt_and_ante_mortem_liquefied_petroleum_gas`)

Record liquefied petroleum gas crossing the facility boundary and consumed specifically by pig receipt and ante-mortem control; keep this carrier separate from every other carrier.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced liquefied petroleum gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

_No atomic exchange is defined for this direction and flow type._

##### Elementary flows

###### Pig receipt and ante-mortem control groundwater abstraction (`pig_receipt_and_ante_mortem_water_ground`)

Record direct groundwater abstraction crossing the elementary boundary for pig receipt and ante-mortem control; do not duplicate mains water.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: Metered groundwater abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control surface-water abstraction (`pig_receipt_and_ante_mortem_water_surface`)

Record direct surface-water abstraction crossing the elementary boundary for pig receipt and ante-mortem control; do not duplicate mains water.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: Metered surface-water abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Accepted live-pig transfer (`pig_receipt_and_ante_mortem_accepted_live_pig`)

Record pigs that pass ante-mortem control and transfer to the integrated slaughter process.

- Selected flow: Accepted live pig
- Flow property / unit: Mass / kg
- Amount rule: Calculated accepted mass from individual or lot receipt and rejection records under calc_receipt_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted live-pig output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_animal_receipt_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

###### Dead pig at reception (`pig_receipt_and_ante_mortem_dead_pig_at_reception`)

Record dead pig at reception leaving receipt as one weighed destination-specific waste stream.

- Selected flow: Dead pig at reception
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of dead pig at reception for the declared lot and recorded destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_receipt_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned live pig (`pig_receipt_and_ante_mortem_condemned_live_pig`)

Record condemned live pig leaving receipt as one weighed destination-specific waste stream.

- Selected flow: Condemned live pig
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of condemned live pig for the declared lot and recorded destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_receipt_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig manure from receipt (`pig_receipt_and_ante_mortem_pig_manure`)

Record pig manure leaving receipt as one weighed destination-specific waste stream.

- Selected flow: Pig manure
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig manure for the declared lot and recorded destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_receipt_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Soiled straw bedding from receipt (`pig_receipt_and_ante_mortem_soiled_straw_bedding`)

Record soiled straw bedding leaving receipt as one weighed destination-specific waste stream.

- Selected flow: Soiled straw bedding
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of soiled straw bedding for the declared lot and recorded destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_receipt_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### Pig receipt and ante-mortem control direct fossil carbon dioxide (`pig_receipt_and_ante_mortem_carbon_dioxide_fossil_air`)

Record only direct fossil carbon dioxide released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control direct carbon monoxide (`pig_receipt_and_ante_mortem_carbon_monoxide_air`)

Record only direct carbon monoxide released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control direct fossil methane (`pig_receipt_and_ante_mortem_methane_fossil_air`)

Record only direct fossil methane released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control direct nitrous oxide (`pig_receipt_and_ante_mortem_nitrous_oxide_air`)

Record only direct nitrous oxide released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control direct nitric oxide (`pig_receipt_and_ante_mortem_nitric_oxide_air`)

Record only direct nitric oxide released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control direct nitrogen dioxide (`pig_receipt_and_ante_mortem_nitrogen_dioxide_air`)

Record only direct nitrogen dioxide released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control direct sulfur dioxide (`pig_receipt_and_ante_mortem_sulfur_dioxide_air`)

Record only direct sulfur dioxide released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control direct particulate matter below 2.5 micrometres (`pig_receipt_and_ante_mortem_pm_below_2_5_air`)

Record only direct particulate matter below 2.5 micrometres released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig receipt and ante-mortem control direct particulate matter from 2.5 to 10 micrometres (`pig_receipt_and_ante_mortem_pm_2_5_to_10_air`)

Record only direct particulate matter from 2.5 to 10 micrometres released by on-site combustion assigned to pig receipt and ante-mortem control; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pig_receipt_and_ante_mortem_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

### Process: Slaughter and organ recovery (`slaughter_and_organ_recovery`)

#### Inputs

##### Product flows

###### Accepted live pig entering slaughter (`slaughter_and_organ_recovery_accepted_live_pig`)

Record the transfer from ante-mortem acceptance without duplicating the upstream live-pig input.

- Selected flow: Accepted live pig
- Flow property / unit: Mass / kg
- Amount rule: Calculated accepted mass transferred from pig_receipt_and_ante_mortem.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery potable mains water (`slaughter_and_organ_recovery_potable_mains_water`)

Record only potable mains water delivered to slaughter and organ recovery as a separately metered product input.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: Metered mains-water volume attributable to this stage; no category default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery grid electricity (`slaughter_and_organ_recovery_grid_electricity`)

Record grid electricity crossing the facility boundary and consumed specifically by slaughter and organ recovery; keep this carrier separate from every other carrier.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered, invoiced or stock-balanced grid electricity attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_electricity_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery purchased steam (`slaughter_and_organ_recovery_purchased_steam`)

Record purchased steam crossing the facility boundary and consumed specifically by slaughter and organ recovery; keep this carrier separate from every other carrier.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased steam attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery purchased hot water (`slaughter_and_organ_recovery_purchased_hot_water`)

Record purchased hot water crossing the facility boundary and consumed specifically by slaughter and organ recovery; keep this carrier separate from every other carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased hot water attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery natural gas (`slaughter_and_organ_recovery_natural_gas`)

Record natural gas crossing the facility boundary and consumed specifically by slaughter and organ recovery; keep this carrier separate from every other carrier.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced natural gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery diesel fuel (`slaughter_and_organ_recovery_diesel_fuel`)

Record diesel fuel crossing the facility boundary and consumed specifically by slaughter and organ recovery; keep this carrier separate from every other carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced diesel fuel attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery liquefied petroleum gas (`slaughter_and_organ_recovery_liquefied_petroleum_gas`)

Record liquefied petroleum gas crossing the facility boundary and consumed specifically by slaughter and organ recovery; keep this carrier separate from every other carrier.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced liquefied petroleum gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

_No atomic exchange is defined for this direction and flow type._

##### Elementary flows

###### Slaughter and organ recovery groundwater abstraction (`slaughter_and_organ_recovery_water_ground`)

Record direct groundwater abstraction crossing the elementary boundary for slaughter and organ recovery; do not duplicate mains water.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: Metered groundwater abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery surface-water abstraction (`slaughter_and_organ_recovery_water_surface`)

Record direct surface-water abstraction crossing the elementary boundary for slaughter and organ recovery; do not duplicate mains water.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: Metered surface-water abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Recovered pig liver (`slaughter_and_organ_recovery_recovered_liver`)

Record edible pig liver recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig liver
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig liver mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig heart (`slaughter_and_organ_recovery_recovered_heart`)

Record edible pig heart recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig heart
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig heart mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig kidney (`slaughter_and_organ_recovery_recovered_kidney`)

Record edible pig kidney recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig kidney mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig tongue (`slaughter_and_organ_recovery_recovered_tongue`)

Record edible pig tongue recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig tongue mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig stomach (`slaughter_and_organ_recovery_recovered_stomach`)

Record edible pig stomach recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig stomach mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig small intestine (`slaughter_and_organ_recovery_recovered_small_intestine`)

Record edible pig small intestine recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig small intestine mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig large intestine (`slaughter_and_organ_recovery_recovered_large_intestine`)

Record edible pig large intestine recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig large intestine mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig lung (`slaughter_and_organ_recovery_recovered_lung`)

Record edible pig lung recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig lung
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig lung mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig spleen (`slaughter_and_organ_recovery_recovered_spleen`)

Record edible pig spleen recovered and segregated as a separate co-product before preparation.

- Selected flow: Recovered pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Calculated recovered pig spleen mass under calc_slaughter_mass_balance from weighed organ records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig carcass (`slaughter_and_organ_recovery_pig_carcass`)

Record pig carcass only when it leaves slaughter for a documented beneficial use and participates in the declared allocation.

- Selected flow: Pig carcass
- Flow property / unit: Mass / kg
- Amount rule: Calculated co-product mass under calc_slaughter_mass_balance from weighing records; do not assign a default allocation share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig blood recovered as product (`slaughter_and_organ_recovery_pig_blood_for_recovery`)

Record pig blood for recovery only when it leaves slaughter for a documented beneficial use and participates in the declared allocation.

- Selected flow: Pig blood for recovery
- Flow property / unit: Mass / kg
- Amount rule: Calculated co-product mass under calc_slaughter_mass_balance from weighing records; do not assign a default allocation share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig skin recovered as product (`slaughter_and_organ_recovery_pig_skin_for_recovery`)

Record pig skin for recovery only when it leaves slaughter for a documented beneficial use and participates in the declared allocation.

- Selected flow: Pig skin for recovery
- Flow property / unit: Mass / kg
- Amount rule: Calculated co-product mass under calc_slaughter_mass_balance from weighing records; do not assign a default allocation share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig bristles recovered as product (`slaughter_and_organ_recovery_pig_bristles_for_recovery`)

Record pig bristles for recovery only when it leaves slaughter for a documented beneficial use and participates in the declared allocation.

- Selected flow: Pig bristles for recovery
- Flow property / unit: Mass / kg
- Amount rule: Calculated co-product mass under calc_slaughter_mass_balance from weighing records; do not assign a default allocation share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig feet recovered as product (`slaughter_and_organ_recovery_pig_feet_for_recovery`)

Record pig feet for recovery only when it leaves slaughter for a documented beneficial use and participates in the declared allocation.

- Selected flow: Pig feet for recovery
- Flow property / unit: Mass / kg
- Amount rule: Calculated co-product mass under calc_slaughter_mass_balance from weighing records; do not assign a default allocation share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig head after tongue removal (`slaughter_and_organ_recovery_pig_head_after_tongue_removal`)

Record pig head after tongue removal only when it leaves slaughter for a documented beneficial use and participates in the declared allocation.

- Selected flow: Pig head after tongue removal
- Flow property / unit: Mass / kg
- Amount rule: Calculated co-product mass under calc_slaughter_mass_balance from weighing records; do not assign a default allocation share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig abdominal fat recovered as product (`slaughter_and_organ_recovery_pig_abdominal_fat_for_recovery`)

Record pig abdominal fat for recovery only when it leaves slaughter for a documented beneficial use and participates in the declared allocation.

- Selected flow: Pig abdominal fat for recovery
- Flow property / unit: Mass / kg
- Amount rule: Calculated co-product mass under calc_slaughter_mass_balance from weighing records; do not assign a default allocation share.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

###### Condemned pig liver (`slaughter_and_organ_recovery_condemned_liver`)

Record pig liver rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig liver mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig heart (`slaughter_and_organ_recovery_condemned_heart`)

Record pig heart rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig heart mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig kidney (`slaughter_and_organ_recovery_condemned_kidney`)

Record pig kidney rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig kidney mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig tongue (`slaughter_and_organ_recovery_condemned_tongue`)

Record pig tongue rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig tongue mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig stomach (`slaughter_and_organ_recovery_condemned_stomach`)

Record pig stomach rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig stomach mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig small intestine (`slaughter_and_organ_recovery_condemned_small_intestine`)

Record pig small intestine rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig small intestine mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig large intestine (`slaughter_and_organ_recovery_condemned_large_intestine`)

Record pig large intestine rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig large intestine mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig lung (`slaughter_and_organ_recovery_condemned_lung`)

Record pig lung rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig lung mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig spleen (`slaughter_and_organ_recovery_condemned_spleen`)

Record pig spleen rejected as non-edible during post-mortem inspection as its own waste stream.

- Selected flow: Condemned pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned pig spleen mass and its recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted live-pig input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig stomach contents (`slaughter_and_organ_recovery_pig_stomach_contents`)

Record pig stomach contents leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Pig stomach contents
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig stomach contents and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig small-intestinal contents (`slaughter_and_organ_recovery_pig_small_intestinal_contents`)

Record pig small-intestinal contents leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Pig small-intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig small-intestinal contents and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig large-intestinal contents (`slaughter_and_organ_recovery_pig_large_intestinal_contents`)

Record pig large-intestinal contents leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Pig large-intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig large-intestinal contents and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Condemned pig carcass (`slaughter_and_organ_recovery_condemned_pig_carcass`)

Record condemned pig carcass leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Condemned pig carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of condemned pig carcass and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Discarded pig blood (`slaughter_and_organ_recovery_discarded_pig_blood`)

Record discarded pig blood leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Discarded pig blood
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of discarded pig blood and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Discarded pig skin (`slaughter_and_organ_recovery_discarded_pig_skin`)

Record discarded pig skin leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Discarded pig skin
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of discarded pig skin and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Discarded pig bristles (`slaughter_and_organ_recovery_discarded_pig_bristles`)

Record discarded pig bristles leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Discarded pig bristles
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of discarded pig bristles and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Discarded pig feet (`slaughter_and_organ_recovery_discarded_pig_feet`)

Record discarded pig feet leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Discarded pig feet
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of discarded pig feet and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Discarded pig head after tongue removal (`slaughter_and_organ_recovery_discarded_pig_head_after_tongue_removal`)

Record discarded pig head after tongue removal leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Discarded pig head after tongue removal
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of discarded pig head after tongue removal and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Discarded pig abdominal fat (`slaughter_and_organ_recovery_discarded_pig_abdominal_fat`)

Record discarded pig abdominal fat leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Discarded pig abdominal fat
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of discarded pig abdominal fat and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_slaughter_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig-slaughter wastewater (`slaughter_and_organ_recovery_pig_slaughter_wastewater`)

Record pig-slaughter wastewater leaving slaughter as a separate stream with its destination and treatment route.

- Selected flow: Pig-slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of pig-slaughter wastewater and recorded destination for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_and_organ_recovery_wastewater_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### Slaughter and organ recovery direct fossil carbon dioxide (`slaughter_and_organ_recovery_carbon_dioxide_fossil_air`)

Record only direct fossil carbon dioxide released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery direct carbon monoxide (`slaughter_and_organ_recovery_carbon_monoxide_air`)

Record only direct carbon monoxide released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery direct fossil methane (`slaughter_and_organ_recovery_methane_fossil_air`)

Record only direct fossil methane released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery direct nitrous oxide (`slaughter_and_organ_recovery_nitrous_oxide_air`)

Record only direct nitrous oxide released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery direct nitric oxide (`slaughter_and_organ_recovery_nitric_oxide_air`)

Record only direct nitric oxide released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery direct nitrogen dioxide (`slaughter_and_organ_recovery_nitrogen_dioxide_air`)

Record only direct nitrogen dioxide released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery direct sulfur dioxide (`slaughter_and_organ_recovery_sulfur_dioxide_air`)

Record only direct sulfur dioxide released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery direct particulate matter below 2.5 micrometres (`slaughter_and_organ_recovery_pm_below_2_5_air`)

Record only direct particulate matter below 2.5 micrometres released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Slaughter and organ recovery direct particulate matter from 2.5 to 10 micrometres (`slaughter_and_organ_recovery_pm_2_5_to_10_air`)

Record only direct particulate matter from 2.5 to 10 micrometres released by on-site combustion assigned to slaughter and organ recovery; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_and_organ_recovery_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

### Process: Edible organ preparation (`edible_organ_preparation`)

#### Inputs

##### Product flows

###### Recovered pig liver entering preparation (`edible_organ_preparation_recovered_liver`)

Record one declared recovered pig liver from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig liver for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig heart entering preparation (`edible_organ_preparation_recovered_heart`)

Record one declared recovered pig heart from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig heart for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig kidney entering preparation (`edible_organ_preparation_recovered_kidney`)

Record one declared recovered pig kidney from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig kidney for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig tongue entering preparation (`edible_organ_preparation_recovered_tongue`)

Record one declared recovered pig tongue from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig tongue for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig stomach entering preparation (`edible_organ_preparation_recovered_stomach`)

Record one declared recovered pig stomach from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig stomach for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig small intestine entering preparation (`edible_organ_preparation_recovered_small_intestine`)

Record one declared recovered pig small intestine from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig small intestine for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig large intestine entering preparation (`edible_organ_preparation_recovered_large_intestine`)

Record one declared recovered pig large intestine from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig large intestine for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig lung entering preparation (`edible_organ_preparation_recovered_lung`)

Record one declared recovered pig lung from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig lung for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Recovered pig spleen entering preparation (`edible_organ_preparation_recovered_spleen`)

Record one declared recovered pig spleen from integrated slaughter or a supplier dataset; do not combine organ identities.

- Selected flow: Recovered pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass of recovered pig spleen for the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation potable mains water (`edible_organ_preparation_potable_mains_water`)

Record only potable mains water delivered to edible organ preparation as a separately metered product input.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: Metered mains-water volume attributable to this stage; no category default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation grid electricity (`edible_organ_preparation_grid_electricity`)

Record grid electricity crossing the facility boundary and consumed specifically by edible organ preparation; keep this carrier separate from every other carrier.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered, invoiced or stock-balanced grid electricity attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_electricity_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation purchased steam (`edible_organ_preparation_purchased_steam`)

Record purchased steam crossing the facility boundary and consumed specifically by edible organ preparation; keep this carrier separate from every other carrier.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased steam attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation purchased hot water (`edible_organ_preparation_purchased_hot_water`)

Record purchased hot water crossing the facility boundary and consumed specifically by edible organ preparation; keep this carrier separate from every other carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased hot water attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation natural gas (`edible_organ_preparation_natural_gas`)

Record natural gas crossing the facility boundary and consumed specifically by edible organ preparation; keep this carrier separate from every other carrier.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced natural gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation diesel fuel (`edible_organ_preparation_diesel_fuel`)

Record diesel fuel crossing the facility boundary and consumed specifically by edible organ preparation; keep this carrier separate from every other carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced diesel fuel attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation liquefied petroleum gas (`edible_organ_preparation_liquefied_petroleum_gas`)

Record liquefied petroleum gas crossing the facility boundary and consumed specifically by edible organ preparation; keep this carrier separate from every other carrier.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced liquefied petroleum gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

_No atomic exchange is defined for this direction and flow type._

##### Elementary flows

###### Edible organ preparation groundwater abstraction (`edible_organ_preparation_water_ground`)

Record direct groundwater abstraction crossing the elementary boundary for edible organ preparation; do not duplicate mains water.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: Metered groundwater abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation surface-water abstraction (`edible_organ_preparation_water_surface`)

Record direct surface-water abstraction crossing the elementary boundary for edible organ preparation; do not duplicate mains water.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: Metered surface-water abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Prepared pig liver (`edible_organ_preparation_prepared_liver`)

Record hygienically prepared pig liver transferred to exactly one market-state branch.

- Selected flow: Prepared pig liver
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig heart (`edible_organ_preparation_prepared_heart`)

Record hygienically prepared pig heart transferred to exactly one market-state branch.

- Selected flow: Prepared pig heart
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig kidney (`edible_organ_preparation_prepared_kidney`)

Record hygienically prepared pig kidney transferred to exactly one market-state branch.

- Selected flow: Prepared pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig tongue (`edible_organ_preparation_prepared_tongue`)

Record hygienically prepared pig tongue transferred to exactly one market-state branch.

- Selected flow: Prepared pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig stomach (`edible_organ_preparation_prepared_stomach`)

Record hygienically prepared pig stomach transferred to exactly one market-state branch.

- Selected flow: Prepared pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig small intestine (`edible_organ_preparation_prepared_small_intestine`)

Record hygienically prepared pig small intestine transferred to exactly one market-state branch.

- Selected flow: Prepared pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig large intestine (`edible_organ_preparation_prepared_large_intestine`)

Record hygienically prepared pig large intestine transferred to exactly one market-state branch.

- Selected flow: Prepared pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig lung (`edible_organ_preparation_prepared_lung`)

Record hygienically prepared pig lung transferred to exactly one market-state branch.

- Selected flow: Prepared pig lung
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig spleen (`edible_organ_preparation_prepared_spleen`)

Record hygienically prepared pig spleen transferred to exactly one market-state branch.

- Selected flow: Prepared pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Calculated prepared mass under calc_organ_preparation_mass_balance from received and rejected mass records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_organ_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

###### Pig liver trimming waste (`edible_organ_preparation_liver_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig liver; keep this separate from every other organ.

- Selected flow: Pig liver trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig liver trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig heart trimming waste (`edible_organ_preparation_heart_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig heart; keep this separate from every other organ.

- Selected flow: Pig heart trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig heart trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig kidney trimming waste (`edible_organ_preparation_kidney_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig kidney; keep this separate from every other organ.

- Selected flow: Pig kidney trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig kidney trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig tongue trimming waste (`edible_organ_preparation_tongue_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig tongue; keep this separate from every other organ.

- Selected flow: Pig tongue trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig tongue trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig stomach trimming waste (`edible_organ_preparation_stomach_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig stomach; keep this separate from every other organ.

- Selected flow: Pig stomach trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig stomach trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig small intestine trimming waste (`edible_organ_preparation_small_intestine_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig small intestine; keep this separate from every other organ.

- Selected flow: Pig small intestine trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig small intestine trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig large intestine trimming waste (`edible_organ_preparation_large_intestine_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig large intestine; keep this separate from every other organ.

- Selected flow: Pig large intestine trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig large intestine trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig lung trimming waste (`edible_organ_preparation_lung_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig lung; keep this separate from every other organ.

- Selected flow: Pig lung trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig lung trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig spleen trimming waste (`edible_organ_preparation_spleen_trimming_waste`)

Record inedible or rejected trimmings removed specifically from pig spleen; keep this separate from every other organ.

- Selected flow: Pig spleen trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of pig spleen trimming waste and recorded treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation-process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_edible_organ_preparation_preparation_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig-organ-preparation wastewater (`edible_organ_preparation_pig_organ_preparation_wastewater`)

Record wastewater generated specifically by organ emptying, washing and preparation before sanitation-system aggregation.

- Selected flow: Pig-organ-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-estimated volume from collected wash-cycle records; no default water factor is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_wastewater_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### Edible organ preparation direct fossil carbon dioxide (`edible_organ_preparation_carbon_dioxide_fossil_air`)

Record only direct fossil carbon dioxide released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation direct carbon monoxide (`edible_organ_preparation_carbon_monoxide_air`)

Record only direct carbon monoxide released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation direct fossil methane (`edible_organ_preparation_methane_fossil_air`)

Record only direct fossil methane released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation direct nitrous oxide (`edible_organ_preparation_nitrous_oxide_air`)

Record only direct nitrous oxide released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation direct nitric oxide (`edible_organ_preparation_nitric_oxide_air`)

Record only direct nitric oxide released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation direct nitrogen dioxide (`edible_organ_preparation_nitrogen_dioxide_air`)

Record only direct nitrogen dioxide released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation direct sulfur dioxide (`edible_organ_preparation_sulfur_dioxide_air`)

Record only direct sulfur dioxide released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation direct particulate matter below 2.5 micrometres (`edible_organ_preparation_pm_below_2_5_air`)

Record only direct particulate matter below 2.5 micrometres released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Edible organ preparation direct particulate matter from 2.5 to 10 micrometres (`edible_organ_preparation_pm_2_5_to_10_air`)

Record only direct particulate matter from 2.5 to 10 micrometres released by on-site combustion assigned to edible organ preparation; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_edible_organ_preparation_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

### Process: Fresh-state conditioning (`fresh_state_conditioning`)

#### Inputs

##### Product flows

###### Prepared pig liver entering the fresh branch (`fresh_state_conditioning_prepared_liver`)

Record prepared pig liver only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig liver mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig heart entering the fresh branch (`fresh_state_conditioning_prepared_heart`)

Record prepared pig heart only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig heart mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig kidney entering the fresh branch (`fresh_state_conditioning_prepared_kidney`)

Record prepared pig kidney only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig kidney mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig tongue entering the fresh branch (`fresh_state_conditioning_prepared_tongue`)

Record prepared pig tongue only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig tongue mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig stomach entering the fresh branch (`fresh_state_conditioning_prepared_stomach`)

Record prepared pig stomach only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig stomach mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig small intestine entering the fresh branch (`fresh_state_conditioning_prepared_small_intestine`)

Record prepared pig small intestine only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig small intestine mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig large intestine entering the fresh branch (`fresh_state_conditioning_prepared_large_intestine`)

Record prepared pig large intestine only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig large intestine mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig lung entering the fresh branch (`fresh_state_conditioning_prepared_lung`)

Record prepared pig lung only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig lung mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig spleen entering the fresh branch (`fresh_state_conditioning_prepared_spleen`)

Record prepared pig spleen only when fresh is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig spleen mass entering the fresh branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning potable mains water (`fresh_state_conditioning_potable_mains_water`)

Record only potable mains water delivered to fresh-state conditioning as a separately metered product input.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: Metered mains-water volume attributable to this stage; no category default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning grid electricity (`fresh_state_conditioning_grid_electricity`)

Record grid electricity crossing the facility boundary and consumed specifically by fresh-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered, invoiced or stock-balanced grid electricity attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_electricity_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning purchased steam (`fresh_state_conditioning_purchased_steam`)

Record purchased steam crossing the facility boundary and consumed specifically by fresh-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased steam attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning purchased hot water (`fresh_state_conditioning_purchased_hot_water`)

Record purchased hot water crossing the facility boundary and consumed specifically by fresh-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased hot water attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning natural gas (`fresh_state_conditioning_natural_gas`)

Record natural gas crossing the facility boundary and consumed specifically by fresh-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced natural gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning diesel fuel (`fresh_state_conditioning_diesel_fuel`)

Record diesel fuel crossing the facility boundary and consumed specifically by fresh-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced diesel fuel attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning liquefied petroleum gas (`fresh_state_conditioning_liquefied_petroleum_gas`)

Record liquefied petroleum gas crossing the facility boundary and consumed specifically by fresh-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced liquefied petroleum gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

_No atomic exchange is defined for this direction and flow type._

##### Elementary flows

###### Fresh-state conditioning groundwater abstraction (`fresh_state_conditioning_water_ground`)

Record direct groundwater abstraction crossing the elementary boundary for fresh-state conditioning; do not duplicate mains water.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: Metered groundwater abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning surface-water abstraction (`fresh_state_conditioning_water_surface`)

Record direct surface-water abstraction crossing the elementary boundary for fresh-state conditioning; do not duplicate mains water.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: Metered surface-water abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Fresh pig liver (`fresh_state_conditioning_fresh_liver`)

Record fresh pig liver meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig liver
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig liver mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig heart (`fresh_state_conditioning_fresh_heart`)

Record fresh pig heart meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig heart
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig heart mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig kidney (`fresh_state_conditioning_fresh_kidney`)

Record fresh pig kidney meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig kidney mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig tongue (`fresh_state_conditioning_fresh_tongue`)

Record fresh pig tongue meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig tongue mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig stomach (`fresh_state_conditioning_fresh_stomach`)

Record fresh pig stomach meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig stomach mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig small intestine (`fresh_state_conditioning_fresh_small_intestine`)

Record fresh pig small intestine meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig small intestine mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig large intestine (`fresh_state_conditioning_fresh_large_intestine`)

Record fresh pig large intestine meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig large intestine mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig lung (`fresh_state_conditioning_fresh_lung`)

Record fresh pig lung meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig lung
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig lung mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig spleen (`fresh_state_conditioning_fresh_spleen`)

Record fresh pig spleen meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Fresh pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming fresh pig spleen mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected fresh pig liver (`fresh_state_conditioning_rejected_fresh_liver`)

Record fresh pig liver rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig liver mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig heart (`fresh_state_conditioning_rejected_fresh_heart`)

Record fresh pig heart rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig heart mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig kidney (`fresh_state_conditioning_rejected_fresh_kidney`)

Record fresh pig kidney rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig kidney mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig tongue (`fresh_state_conditioning_rejected_fresh_tongue`)

Record fresh pig tongue rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig tongue mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig stomach (`fresh_state_conditioning_rejected_fresh_stomach`)

Record fresh pig stomach rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig stomach mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig small intestine (`fresh_state_conditioning_rejected_fresh_small_intestine`)

Record fresh pig small intestine rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig small intestine mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig large intestine (`fresh_state_conditioning_rejected_fresh_large_intestine`)

Record fresh pig large intestine rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig large intestine mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig lung (`fresh_state_conditioning_rejected_fresh_lung`)

Record fresh pig lung rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig lung mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig spleen (`fresh_state_conditioning_rejected_fresh_spleen`)

Record fresh pig spleen rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected fresh pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected fresh pig spleen mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fresh-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fresh_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-pig-organ-conditioning wastewater (`fresh_state_conditioning_fresh_pig_organ_conditioning_wastewater`)

Record wastewater generated only by the fresh conditioning branch before sanitation-system aggregation.

- Selected flow: Fresh-pig-organ-conditioning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or calculated branch-specific wastewater volume from operation records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_wastewater_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### Fresh-state conditioning direct fossil carbon dioxide (`fresh_state_conditioning_carbon_dioxide_fossil_air`)

Record only direct fossil carbon dioxide released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning direct carbon monoxide (`fresh_state_conditioning_carbon_monoxide_air`)

Record only direct carbon monoxide released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning direct fossil methane (`fresh_state_conditioning_methane_fossil_air`)

Record only direct fossil methane released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning direct nitrous oxide (`fresh_state_conditioning_nitrous_oxide_air`)

Record only direct nitrous oxide released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning direct nitric oxide (`fresh_state_conditioning_nitric_oxide_air`)

Record only direct nitric oxide released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning direct nitrogen dioxide (`fresh_state_conditioning_nitrogen_dioxide_air`)

Record only direct nitrogen dioxide released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning direct sulfur dioxide (`fresh_state_conditioning_sulfur_dioxide_air`)

Record only direct sulfur dioxide released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning direct particulate matter below 2.5 micrometres (`fresh_state_conditioning_pm_below_2_5_air`)

Record only direct particulate matter below 2.5 micrometres released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-state conditioning direct particulate matter from 2.5 to 10 micrometres (`fresh_state_conditioning_pm_2_5_to_10_air`)

Record only direct particulate matter from 2.5 to 10 micrometres released by on-site combustion assigned to fresh-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fresh_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

### Process: Chilled-state conditioning (`chilled_state_conditioning`)

#### Inputs

##### Product flows

###### Prepared pig liver entering the chilled branch (`chilled_state_conditioning_prepared_liver`)

Record prepared pig liver only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig liver mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig heart entering the chilled branch (`chilled_state_conditioning_prepared_heart`)

Record prepared pig heart only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig heart mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig kidney entering the chilled branch (`chilled_state_conditioning_prepared_kidney`)

Record prepared pig kidney only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig kidney mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig tongue entering the chilled branch (`chilled_state_conditioning_prepared_tongue`)

Record prepared pig tongue only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig tongue mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig stomach entering the chilled branch (`chilled_state_conditioning_prepared_stomach`)

Record prepared pig stomach only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig stomach mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig small intestine entering the chilled branch (`chilled_state_conditioning_prepared_small_intestine`)

Record prepared pig small intestine only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig small intestine mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig large intestine entering the chilled branch (`chilled_state_conditioning_prepared_large_intestine`)

Record prepared pig large intestine only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig large intestine mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig lung entering the chilled branch (`chilled_state_conditioning_prepared_lung`)

Record prepared pig lung only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig lung mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig spleen entering the chilled branch (`chilled_state_conditioning_prepared_spleen`)

Record prepared pig spleen only when chilled is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig spleen mass entering the chilled branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning potable mains water (`chilled_state_conditioning_potable_mains_water`)

Record only potable mains water delivered to chilled-state conditioning as a separately metered product input.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: Metered mains-water volume attributable to this stage; no category default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning grid electricity (`chilled_state_conditioning_grid_electricity`)

Record grid electricity crossing the facility boundary and consumed specifically by chilled-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered, invoiced or stock-balanced grid electricity attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_electricity_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning purchased steam (`chilled_state_conditioning_purchased_steam`)

Record purchased steam crossing the facility boundary and consumed specifically by chilled-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased steam attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning purchased hot water (`chilled_state_conditioning_purchased_hot_water`)

Record purchased hot water crossing the facility boundary and consumed specifically by chilled-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased hot water attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning natural gas (`chilled_state_conditioning_natural_gas`)

Record natural gas crossing the facility boundary and consumed specifically by chilled-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced natural gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning diesel fuel (`chilled_state_conditioning_diesel_fuel`)

Record diesel fuel crossing the facility boundary and consumed specifically by chilled-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced diesel fuel attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning liquefied petroleum gas (`chilled_state_conditioning_liquefied_petroleum_gas`)

Record liquefied petroleum gas crossing the facility boundary and consumed specifically by chilled-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced liquefied petroleum gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning ammonia refrigerant (R-717) make-up (`chilled_state_conditioning_ammonia_r717_makeup`)

Record make-up of ammonia refrigerant (R-717) from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Mass of ammonia refrigerant (R-717) added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning HFC-134a refrigerant make-up (`chilled_state_conditioning_hfc134a_makeup`)

Record make-up of HFC-134a refrigerant from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: Mass of HFC-134a refrigerant added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning R-404A refrigerant mixture make-up (`chilled_state_conditioning_r404a_makeup`)

Record make-up of R-404A refrigerant mixture from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: R-404A refrigerant mixture
- Flow property / unit: Mass / kg
- Amount rule: Mass of R-404A refrigerant mixture added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

_No atomic exchange is defined for this direction and flow type._

##### Elementary flows

###### Chilled-state conditioning groundwater abstraction (`chilled_state_conditioning_water_ground`)

Record direct groundwater abstraction crossing the elementary boundary for chilled-state conditioning; do not duplicate mains water.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: Metered groundwater abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning surface-water abstraction (`chilled_state_conditioning_water_surface`)

Record direct surface-water abstraction crossing the elementary boundary for chilled-state conditioning; do not duplicate mains water.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: Metered surface-water abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Chilled pig liver (`chilled_state_conditioning_chilled_liver`)

Record chilled pig liver meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig liver
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig liver mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig heart (`chilled_state_conditioning_chilled_heart`)

Record chilled pig heart meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig heart
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig heart mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig kidney (`chilled_state_conditioning_chilled_kidney`)

Record chilled pig kidney meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig kidney mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig tongue (`chilled_state_conditioning_chilled_tongue`)

Record chilled pig tongue meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig tongue mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig stomach (`chilled_state_conditioning_chilled_stomach`)

Record chilled pig stomach meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig stomach mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig small intestine (`chilled_state_conditioning_chilled_small_intestine`)

Record chilled pig small intestine meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig small intestine mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig large intestine (`chilled_state_conditioning_chilled_large_intestine`)

Record chilled pig large intestine meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig large intestine mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig lung (`chilled_state_conditioning_chilled_lung`)

Record chilled pig lung meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig lung
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig lung mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig spleen (`chilled_state_conditioning_chilled_spleen`)

Record chilled pig spleen meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Chilled pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming chilled pig spleen mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected chilled pig liver (`chilled_state_conditioning_rejected_chilled_liver`)

Record chilled pig liver rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig liver mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig heart (`chilled_state_conditioning_rejected_chilled_heart`)

Record chilled pig heart rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig heart mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig kidney (`chilled_state_conditioning_rejected_chilled_kidney`)

Record chilled pig kidney rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig kidney mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig tongue (`chilled_state_conditioning_rejected_chilled_tongue`)

Record chilled pig tongue rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig tongue mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig stomach (`chilled_state_conditioning_rejected_chilled_stomach`)

Record chilled pig stomach rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig stomach mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig small intestine (`chilled_state_conditioning_rejected_chilled_small_intestine`)

Record chilled pig small intestine rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig small intestine mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig large intestine (`chilled_state_conditioning_rejected_chilled_large_intestine`)

Record chilled pig large intestine rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig large intestine mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig lung (`chilled_state_conditioning_rejected_chilled_lung`)

Record chilled pig lung rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig lung mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig spleen (`chilled_state_conditioning_rejected_chilled_spleen`)

Record chilled pig spleen rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected chilled pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled pig spleen mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilled-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-pig-organ-conditioning wastewater (`chilled_state_conditioning_chilled_pig_organ_conditioning_wastewater`)

Record wastewater generated only by the chilled conditioning branch before sanitation-system aggregation.

- Selected flow: Chilled-pig-organ-conditioning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or calculated branch-specific wastewater volume from operation records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_wastewater_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### Chilled-state conditioning direct fossil carbon dioxide (`chilled_state_conditioning_carbon_dioxide_fossil_air`)

Record only direct fossil carbon dioxide released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning direct carbon monoxide (`chilled_state_conditioning_carbon_monoxide_air`)

Record only direct carbon monoxide released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning direct fossil methane (`chilled_state_conditioning_methane_fossil_air`)

Record only direct fossil methane released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning direct nitrous oxide (`chilled_state_conditioning_nitrous_oxide_air`)

Record only direct nitrous oxide released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning direct nitric oxide (`chilled_state_conditioning_nitric_oxide_air`)

Record only direct nitric oxide released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning direct nitrogen dioxide (`chilled_state_conditioning_nitrogen_dioxide_air`)

Record only direct nitrogen dioxide released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning direct sulfur dioxide (`chilled_state_conditioning_sulfur_dioxide_air`)

Record only direct sulfur dioxide released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning direct particulate matter below 2.5 micrometres (`chilled_state_conditioning_pm_below_2_5_air`)

Record only direct particulate matter below 2.5 micrometres released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning direct particulate matter from 2.5 to 10 micrometres (`chilled_state_conditioning_pm_2_5_to_10_air`)

Record only direct particulate matter from 2.5 to 10 micrometres released by on-site combustion assigned to chilled-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning ammonia refrigerant release (`chilled_state_conditioning_ammonia_refrigerant_air`)

Record the direct release of ammonia refrigerant from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning HFC-134a release (`chilled_state_conditioning_hfc134a_air`)

Record the direct release of HFC-134a from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning HFC-125 release (`chilled_state_conditioning_hfc125_air`)

Record the direct release of HFC-125 from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-state conditioning HFC-143a release (`chilled_state_conditioning_hfc143a_air`)

Record the direct release of HFC-143a from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

### Process: Frozen-state conditioning (`frozen_state_conditioning`)

#### Inputs

##### Product flows

###### Prepared pig liver entering the frozen branch (`frozen_state_conditioning_prepared_liver`)

Record prepared pig liver only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig liver mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig heart entering the frozen branch (`frozen_state_conditioning_prepared_heart`)

Record prepared pig heart only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig heart mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig kidney entering the frozen branch (`frozen_state_conditioning_prepared_kidney`)

Record prepared pig kidney only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig kidney mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig tongue entering the frozen branch (`frozen_state_conditioning_prepared_tongue`)

Record prepared pig tongue only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig tongue mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig stomach entering the frozen branch (`frozen_state_conditioning_prepared_stomach`)

Record prepared pig stomach only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig stomach mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig small intestine entering the frozen branch (`frozen_state_conditioning_prepared_small_intestine`)

Record prepared pig small intestine only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig small intestine mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig large intestine entering the frozen branch (`frozen_state_conditioning_prepared_large_intestine`)

Record prepared pig large intestine only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig large intestine mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig lung entering the frozen branch (`frozen_state_conditioning_prepared_lung`)

Record prepared pig lung only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig lung mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Prepared pig spleen entering the frozen branch (`frozen_state_conditioning_prepared_spleen`)

Record prepared pig spleen only when frozen is the single declared market state; the other two state branches must be absent.

- Selected flow: Prepared pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured prepared pig spleen mass entering the frozen branch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning potable mains water (`frozen_state_conditioning_potable_mains_water`)

Record only potable mains water delivered to frozen-state conditioning as a separately metered product input.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: Metered mains-water volume attributable to this stage; no category default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning grid electricity (`frozen_state_conditioning_grid_electricity`)

Record grid electricity crossing the facility boundary and consumed specifically by frozen-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered, invoiced or stock-balanced grid electricity attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_electricity_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning purchased steam (`frozen_state_conditioning_purchased_steam`)

Record purchased steam crossing the facility boundary and consumed specifically by frozen-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased steam attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning purchased hot water (`frozen_state_conditioning_purchased_hot_water`)

Record purchased hot water crossing the facility boundary and consumed specifically by frozen-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased hot water attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning natural gas (`frozen_state_conditioning_natural_gas`)

Record natural gas crossing the facility boundary and consumed specifically by frozen-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced natural gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning diesel fuel (`frozen_state_conditioning_diesel_fuel`)

Record diesel fuel crossing the facility boundary and consumed specifically by frozen-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced diesel fuel attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning liquefied petroleum gas (`frozen_state_conditioning_liquefied_petroleum_gas`)

Record liquefied petroleum gas crossing the facility boundary and consumed specifically by frozen-state conditioning; keep this carrier separate from every other carrier.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced liquefied petroleum gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning ammonia refrigerant (R-717) make-up (`frozen_state_conditioning_ammonia_r717_makeup`)

Record make-up of ammonia refrigerant (R-717) from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Mass of ammonia refrigerant (R-717) added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning HFC-134a refrigerant make-up (`frozen_state_conditioning_hfc134a_makeup`)

Record make-up of HFC-134a refrigerant from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: Mass of HFC-134a refrigerant added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning R-404A refrigerant mixture make-up (`frozen_state_conditioning_r404a_makeup`)

Record make-up of R-404A refrigerant mixture from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: R-404A refrigerant mixture
- Flow property / unit: Mass / kg
- Amount rule: Mass of R-404A refrigerant mixture added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

_No atomic exchange is defined for this direction and flow type._

##### Elementary flows

###### Frozen-state conditioning groundwater abstraction (`frozen_state_conditioning_water_ground`)

Record direct groundwater abstraction crossing the elementary boundary for frozen-state conditioning; do not duplicate mains water.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: Metered groundwater abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning surface-water abstraction (`frozen_state_conditioning_water_surface`)

Record direct surface-water abstraction crossing the elementary boundary for frozen-state conditioning; do not duplicate mains water.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: Metered surface-water abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Frozen pig liver (`frozen_state_conditioning_frozen_liver`)

Record frozen pig liver meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig liver
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig liver mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig heart (`frozen_state_conditioning_frozen_heart`)

Record frozen pig heart meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig heart
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig heart mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig kidney (`frozen_state_conditioning_frozen_kidney`)

Record frozen pig kidney meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig kidney mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig tongue (`frozen_state_conditioning_frozen_tongue`)

Record frozen pig tongue meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig tongue mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig stomach (`frozen_state_conditioning_frozen_stomach`)

Record frozen pig stomach meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig stomach mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig small intestine (`frozen_state_conditioning_frozen_small_intestine`)

Record frozen pig small intestine meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig small intestine mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig large intestine (`frozen_state_conditioning_frozen_large_intestine`)

Record frozen pig large intestine meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig large intestine mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig lung (`frozen_state_conditioning_frozen_lung`)

Record frozen pig lung meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig lung
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig lung mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig spleen (`frozen_state_conditioning_frozen_spleen`)

Record frozen pig spleen meeting the declared organ, temperature, time and hygiene specification.

- Selected flow: Frozen pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Calculated conforming frozen pig spleen mass under calc_state_conditioning_mass_balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_state_mass_balance`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected frozen pig liver (`frozen_state_conditioning_rejected_frozen_liver`)

Record frozen pig liver rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig liver mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig heart (`frozen_state_conditioning_rejected_frozen_heart`)

Record frozen pig heart rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig heart mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig kidney (`frozen_state_conditioning_rejected_frozen_kidney`)

Record frozen pig kidney rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig kidney mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig tongue (`frozen_state_conditioning_rejected_frozen_tongue`)

Record frozen pig tongue rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig tongue mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig stomach (`frozen_state_conditioning_rejected_frozen_stomach`)

Record frozen pig stomach rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig stomach mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig small intestine (`frozen_state_conditioning_rejected_frozen_small_intestine`)

Record frozen pig small intestine rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig small intestine mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig large intestine (`frozen_state_conditioning_rejected_frozen_large_intestine`)

Record frozen pig large intestine rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig large intestine mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig lung (`frozen_state_conditioning_rejected_frozen_lung`)

Record frozen pig lung rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig lung mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig spleen (`frozen_state_conditioning_rejected_frozen_spleen`)

Record frozen pig spleen rejected at this branch as a separate waste stream with its treatment destination.

- Selected flow: Rejected frozen pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected frozen pig spleen mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per frozen-conditioned organ output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_state_conditioning_state_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-pig-organ-conditioning wastewater (`frozen_state_conditioning_frozen_pig_organ_conditioning_wastewater`)

Record wastewater generated only by the frozen conditioning branch before sanitation-system aggregation.

- Selected flow: Frozen-pig-organ-conditioning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or calculated branch-specific wastewater volume from operation records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_wastewater_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### Frozen-state conditioning direct fossil carbon dioxide (`frozen_state_conditioning_carbon_dioxide_fossil_air`)

Record only direct fossil carbon dioxide released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning direct carbon monoxide (`frozen_state_conditioning_carbon_monoxide_air`)

Record only direct carbon monoxide released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning direct fossil methane (`frozen_state_conditioning_methane_fossil_air`)

Record only direct fossil methane released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning direct nitrous oxide (`frozen_state_conditioning_nitrous_oxide_air`)

Record only direct nitrous oxide released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning direct nitric oxide (`frozen_state_conditioning_nitric_oxide_air`)

Record only direct nitric oxide released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning direct nitrogen dioxide (`frozen_state_conditioning_nitrogen_dioxide_air`)

Record only direct nitrogen dioxide released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning direct sulfur dioxide (`frozen_state_conditioning_sulfur_dioxide_air`)

Record only direct sulfur dioxide released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning direct particulate matter below 2.5 micrometres (`frozen_state_conditioning_pm_below_2_5_air`)

Record only direct particulate matter below 2.5 micrometres released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning direct particulate matter from 2.5 to 10 micrometres (`frozen_state_conditioning_pm_2_5_to_10_air`)

Record only direct particulate matter from 2.5 to 10 micrometres released by on-site combustion assigned to frozen-state conditioning; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning ammonia refrigerant release (`frozen_state_conditioning_ammonia_refrigerant_air`)

Record the direct release of ammonia refrigerant from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning HFC-134a release (`frozen_state_conditioning_hfc134a_air`)

Record the direct release of HFC-134a from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning HFC-125 release (`frozen_state_conditioning_hfc125_air`)

Record the direct release of HFC-125 from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-state conditioning HFC-143a release (`frozen_state_conditioning_hfc143a_air`)

Record the direct release of HFC-143a from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_state_conditioning_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

### Process: Packaging, state-controlled storage and release (`packaging_storage_and_release`)

#### Inputs

##### Product flows

###### Fresh pig liver entering packaging (`packaging_storage_and_release_fresh_liver`)

Record this input only when both pig liver and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig liver mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig heart entering packaging (`packaging_storage_and_release_fresh_heart`)

Record this input only when both pig heart and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig heart mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig kidney entering packaging (`packaging_storage_and_release_fresh_kidney`)

Record this input only when both pig kidney and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig kidney mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig tongue entering packaging (`packaging_storage_and_release_fresh_tongue`)

Record this input only when both pig tongue and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig tongue mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig stomach entering packaging (`packaging_storage_and_release_fresh_stomach`)

Record this input only when both pig stomach and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig stomach mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig small intestine entering packaging (`packaging_storage_and_release_fresh_small_intestine`)

Record this input only when both pig small intestine and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig small intestine mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig large intestine entering packaging (`packaging_storage_and_release_fresh_large_intestine`)

Record this input only when both pig large intestine and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig large intestine mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig lung entering packaging (`packaging_storage_and_release_fresh_lung`)

Record this input only when both pig lung and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig lung mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh pig spleen entering packaging (`packaging_storage_and_release_fresh_spleen`)

Record this input only when both pig spleen and fresh are the single declared organ-state combination.

- Selected flow: Fresh pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming fresh pig spleen mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig liver entering packaging (`packaging_storage_and_release_chilled_liver`)

Record this input only when both pig liver and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig liver mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig heart entering packaging (`packaging_storage_and_release_chilled_heart`)

Record this input only when both pig heart and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig heart mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig kidney entering packaging (`packaging_storage_and_release_chilled_kidney`)

Record this input only when both pig kidney and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig kidney mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig tongue entering packaging (`packaging_storage_and_release_chilled_tongue`)

Record this input only when both pig tongue and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig tongue mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig stomach entering packaging (`packaging_storage_and_release_chilled_stomach`)

Record this input only when both pig stomach and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig stomach mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig small intestine entering packaging (`packaging_storage_and_release_chilled_small_intestine`)

Record this input only when both pig small intestine and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig small intestine mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig large intestine entering packaging (`packaging_storage_and_release_chilled_large_intestine`)

Record this input only when both pig large intestine and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig large intestine mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig lung entering packaging (`packaging_storage_and_release_chilled_lung`)

Record this input only when both pig lung and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig lung mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled pig spleen entering packaging (`packaging_storage_and_release_chilled_spleen`)

Record this input only when both pig spleen and chilled are the single declared organ-state combination.

- Selected flow: Chilled pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming chilled pig spleen mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig liver entering packaging (`packaging_storage_and_release_frozen_liver`)

Record this input only when both pig liver and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig liver
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig liver mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig heart entering packaging (`packaging_storage_and_release_frozen_heart`)

Record this input only when both pig heart and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig heart
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig heart mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig kidney entering packaging (`packaging_storage_and_release_frozen_kidney`)

Record this input only when both pig kidney and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig kidney mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig tongue entering packaging (`packaging_storage_and_release_frozen_tongue`)

Record this input only when both pig tongue and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig tongue
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig tongue mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig stomach entering packaging (`packaging_storage_and_release_frozen_stomach`)

Record this input only when both pig stomach and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig stomach
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig stomach mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig small intestine entering packaging (`packaging_storage_and_release_frozen_small_intestine`)

Record this input only when both pig small intestine and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig small intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig small intestine mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig large intestine entering packaging (`packaging_storage_and_release_frozen_large_intestine`)

Record this input only when both pig large intestine and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig large intestine
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig large intestine mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig lung entering packaging (`packaging_storage_and_release_frozen_lung`)

Record this input only when both pig lung and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig lung
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig lung mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen pig spleen entering packaging (`packaging_storage_and_release_frozen_spleen`)

Record this input only when both pig spleen and frozen are the single declared organ-state combination.

- Selected flow: Frozen pig spleen
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming frozen pig spleen mass entering packaging and release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_mass_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### low-density polyethylene film packaging input (`packaging_storage_and_release_ldpe_primary_film`)

Record low-density polyethylene film mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared low-density polyethylene film mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### polyamide barrier film packaging input (`packaging_storage_and_release_polyamide_barrier_film`)

Record polyamide barrier film mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Polyamide barrier film
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared polyamide barrier film mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### polyethylene terephthalate tray packaging input (`packaging_storage_and_release_pet_tray`)

Record polyethylene terephthalate tray mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared polyethylene terephthalate tray mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### polypropylene tray packaging input (`packaging_storage_and_release_polypropylene_tray`)

Record polypropylene tray mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared polypropylene tray mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### expanded polystyrene tray packaging input (`packaging_storage_and_release_expanded_polystyrene_tray`)

Record expanded polystyrene tray mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Expanded polystyrene tray
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared expanded polystyrene tray mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### paperboard carton packaging input (`packaging_storage_and_release_paperboard_carton`)

Record paperboard carton mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared paperboard carton mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### corrugated fibreboard box packaging input (`packaging_storage_and_release_corrugated_fibreboard_box`)

Record corrugated fibreboard box mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared corrugated fibreboard box mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### aluminium foil packaging input (`packaging_storage_and_release_aluminium_foil`)

Record aluminium foil mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared aluminium foil mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### wooden pallet packaging input (`packaging_storage_and_release_wooden_pallet`)

Record wooden pallet mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared wooden pallet mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### low-density polyethylene stretch film packaging input (`packaging_storage_and_release_ldpe_stretch_film`)

Record low-density polyethylene stretch film mass from the product-specific packaging bill of materials; do not combine it with another packaging substance or article.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared low-density polyethylene stretch film mass used for the released lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_bom_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release potable mains water (`packaging_storage_and_release_potable_mains_water`)

Record only potable mains water delivered to packaging, state-controlled storage and release as a separately metered product input.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: Metered mains-water volume attributable to this stage; no category default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release grid electricity (`packaging_storage_and_release_grid_electricity`)

Record grid electricity crossing the facility boundary and consumed specifically by packaging, state-controlled storage and release; keep this carrier separate from every other carrier.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered, invoiced or stock-balanced grid electricity attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_electricity_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release purchased steam (`packaging_storage_and_release_purchased_steam`)

Record purchased steam crossing the facility boundary and consumed specifically by packaging, state-controlled storage and release; keep this carrier separate from every other carrier.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased steam attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release purchased hot water (`packaging_storage_and_release_purchased_hot_water`)

Record purchased hot water crossing the facility boundary and consumed specifically by packaging, state-controlled storage and release; keep this carrier separate from every other carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased hot water attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release natural gas (`packaging_storage_and_release_natural_gas`)

Record natural gas crossing the facility boundary and consumed specifically by packaging, state-controlled storage and release; keep this carrier separate from every other carrier.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced natural gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release diesel fuel (`packaging_storage_and_release_diesel_fuel`)

Record diesel fuel crossing the facility boundary and consumed specifically by packaging, state-controlled storage and release; keep this carrier separate from every other carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced diesel fuel attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release liquefied petroleum gas (`packaging_storage_and_release_liquefied_petroleum_gas`)

Record liquefied petroleum gas crossing the facility boundary and consumed specifically by packaging, state-controlled storage and release; keep this carrier separate from every other carrier.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced liquefied petroleum gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release ammonia refrigerant (R-717) make-up (`packaging_storage_and_release_ammonia_r717_makeup`)

Record make-up of ammonia refrigerant (R-717) from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Mass of ammonia refrigerant (R-717) added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release HFC-134a refrigerant make-up (`packaging_storage_and_release_hfc134a_makeup`)

Record make-up of HFC-134a refrigerant from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: Mass of HFC-134a refrigerant added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release R-404A refrigerant mixture make-up (`packaging_storage_and_release_r404a_makeup`)

Record make-up of R-404A refrigerant mixture from service and stock records only when that exact refrigerant is installed at this stage.

- Selected flow: R-404A refrigerant mixture
- Flow property / unit: Mass / kg
- Amount rule: Mass of R-404A refrigerant mixture added, recovered and reconciled through the stage refrigerant balance; no default leakage rate is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

_No atomic exchange is defined for this direction and flow type._

##### Elementary flows

###### Packaging, state-controlled storage and release groundwater abstraction (`packaging_storage_and_release_water_ground`)

Record direct groundwater abstraction crossing the elementary boundary for packaging, state-controlled storage and release; do not duplicate mains water.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: Metered groundwater abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release surface-water abstraction (`packaging_storage_and_release_water_surface`)

Record direct surface-water abstraction crossing the elementary boundary for packaging, state-controlled storage and release; do not duplicate mains water.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: Metered surface-water abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Reference product release (`packaging_storage_and_release_reference_product`)

Release exactly one declared pig organ in exactly one declared market state through the verified CPC 21153 product-flow identity; packaging mass is excluded.

- Selected flow: Edible offal of pigs, fresh, chilled or frozen `17a80845-90d9-42a4-8a70-fee47fe2b380`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Calculate and normalize the net conforming release mass to exactly 1 kg under calc_reference_product_normalization.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_reference_release_records`
- Sources: `unsd-cpc-21153`; `eu-pef-2021-2279`

##### Waste flows

###### Rejected fresh pig liver at release (`packaging_storage_and_release_rejected_at_release_fresh_liver`)

Record fresh pig liver rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig liver at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig heart at release (`packaging_storage_and_release_rejected_at_release_fresh_heart`)

Record fresh pig heart rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig heart at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig kidney at release (`packaging_storage_and_release_rejected_at_release_fresh_kidney`)

Record fresh pig kidney rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig kidney at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig tongue at release (`packaging_storage_and_release_rejected_at_release_fresh_tongue`)

Record fresh pig tongue rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig tongue at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig stomach at release (`packaging_storage_and_release_rejected_at_release_fresh_stomach`)

Record fresh pig stomach rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig stomach at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig small intestine at release (`packaging_storage_and_release_rejected_at_release_fresh_small_intestine`)

Record fresh pig small intestine rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig small intestine at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig large intestine at release (`packaging_storage_and_release_rejected_at_release_fresh_large_intestine`)

Record fresh pig large intestine rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig large intestine at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig lung at release (`packaging_storage_and_release_rejected_at_release_fresh_lung`)

Record fresh pig lung rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig lung at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected fresh pig spleen at release (`packaging_storage_and_release_rejected_at_release_fresh_spleen`)

Record fresh pig spleen rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected fresh pig spleen at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig liver at release (`packaging_storage_and_release_rejected_at_release_chilled_liver`)

Record chilled pig liver rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig liver at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig heart at release (`packaging_storage_and_release_rejected_at_release_chilled_heart`)

Record chilled pig heart rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig heart at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig kidney at release (`packaging_storage_and_release_rejected_at_release_chilled_kidney`)

Record chilled pig kidney rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig kidney at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig tongue at release (`packaging_storage_and_release_rejected_at_release_chilled_tongue`)

Record chilled pig tongue rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig tongue at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig stomach at release (`packaging_storage_and_release_rejected_at_release_chilled_stomach`)

Record chilled pig stomach rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig stomach at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig small intestine at release (`packaging_storage_and_release_rejected_at_release_chilled_small_intestine`)

Record chilled pig small intestine rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig small intestine at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig large intestine at release (`packaging_storage_and_release_rejected_at_release_chilled_large_intestine`)

Record chilled pig large intestine rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig large intestine at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig lung at release (`packaging_storage_and_release_rejected_at_release_chilled_lung`)

Record chilled pig lung rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig lung at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected chilled pig spleen at release (`packaging_storage_and_release_rejected_at_release_chilled_spleen`)

Record chilled pig spleen rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected chilled pig spleen at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig liver at release (`packaging_storage_and_release_rejected_at_release_frozen_liver`)

Record frozen pig liver rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig liver at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig heart at release (`packaging_storage_and_release_rejected_at_release_frozen_heart`)

Record frozen pig heart rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig heart at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig kidney at release (`packaging_storage_and_release_rejected_at_release_frozen_kidney`)

Record frozen pig kidney rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig kidney at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig tongue at release (`packaging_storage_and_release_rejected_at_release_frozen_tongue`)

Record frozen pig tongue rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig tongue at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig stomach at release (`packaging_storage_and_release_rejected_at_release_frozen_stomach`)

Record frozen pig stomach rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig stomach at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig small intestine at release (`packaging_storage_and_release_rejected_at_release_frozen_small_intestine`)

Record frozen pig small intestine rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig small intestine at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig large intestine at release (`packaging_storage_and_release_rejected_at_release_frozen_large_intestine`)

Record frozen pig large intestine rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig large intestine at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig lung at release (`packaging_storage_and_release_rejected_at_release_frozen_lung`)

Record frozen pig lung rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig lung at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Rejected frozen pig spleen at release (`packaging_storage_and_release_rejected_at_release_frozen_spleen`)

Record frozen pig spleen rejected during packaging, storage or final release as its own waste stream.

- Selected flow: Rejected frozen pig spleen at release
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass for this exact organ-state combination and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_release_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste low-density polyethylene film (`packaging_storage_and_release_waste_ldpe_primary_film`)

Record discarded low-density polyethylene film generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded low-density polyethylene film mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste polyamide barrier film (`packaging_storage_and_release_waste_polyamide_barrier_film`)

Record discarded polyamide barrier film generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste polyamide barrier film
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded polyamide barrier film mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste polyethylene terephthalate tray (`packaging_storage_and_release_waste_pet_tray`)

Record discarded polyethylene terephthalate tray generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded polyethylene terephthalate tray mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste polypropylene tray (`packaging_storage_and_release_waste_polypropylene_tray`)

Record discarded polypropylene tray generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded polypropylene tray mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste expanded polystyrene tray (`packaging_storage_and_release_waste_expanded_polystyrene_tray`)

Record discarded expanded polystyrene tray generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste expanded polystyrene tray
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded expanded polystyrene tray mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste paperboard carton (`packaging_storage_and_release_waste_paperboard_carton`)

Record discarded paperboard carton generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded paperboard carton mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste corrugated fibreboard box (`packaging_storage_and_release_waste_corrugated_fibreboard_box`)

Record discarded corrugated fibreboard box generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded corrugated fibreboard box mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste aluminium foil (`packaging_storage_and_release_waste_aluminium_foil`)

Record discarded aluminium foil generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded aluminium foil mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste wooden pallet (`packaging_storage_and_release_waste_wooden_pallet`)

Record discarded wooden pallet generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded wooden pallet mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste low-density polyethylene stretch film (`packaging_storage_and_release_waste_ldpe_stretch_film`)

Record discarded low-density polyethylene stretch film generated inside the packaging boundary as a separate material waste stream.

- Selected flow: Waste low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded low-density polyethylene stretch film mass and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_and_release_packaging_waste_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### Packaging, state-controlled storage and release direct fossil carbon dioxide (`packaging_storage_and_release_carbon_dioxide_fossil_air`)

Record only direct fossil carbon dioxide released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release direct carbon monoxide (`packaging_storage_and_release_carbon_monoxide_air`)

Record only direct carbon monoxide released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release direct fossil methane (`packaging_storage_and_release_methane_fossil_air`)

Record only direct fossil methane released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release direct nitrous oxide (`packaging_storage_and_release_nitrous_oxide_air`)

Record only direct nitrous oxide released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release direct nitric oxide (`packaging_storage_and_release_nitric_oxide_air`)

Record only direct nitric oxide released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release direct nitrogen dioxide (`packaging_storage_and_release_nitrogen_dioxide_air`)

Record only direct nitrogen dioxide released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release direct sulfur dioxide (`packaging_storage_and_release_sulfur_dioxide_air`)

Record only direct sulfur dioxide released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release direct particulate matter below 2.5 micrometres (`packaging_storage_and_release_pm_below_2_5_air`)

Record only direct particulate matter below 2.5 micrometres released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release direct particulate matter from 2.5 to 10 micrometres (`packaging_storage_and_release_pm_2_5_to_10_air`)

Record only direct particulate matter from 2.5 to 10 micrometres released by on-site combustion assigned to packaging, state-controlled storage and release; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release ammonia refrigerant release (`packaging_storage_and_release_ammonia_refrigerant_air`)

Record the direct release of ammonia refrigerant from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release HFC-134a release (`packaging_storage_and_release_hfc134a_air`)

Record the direct release of HFC-134a from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release HFC-125 release (`packaging_storage_and_release_hfc125_air`)

Record the direct release of HFC-125 from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Packaging, state-controlled storage and release HFC-143a release (`packaging_storage_and_release_hfc143a_air`)

Record the direct release of HFC-143a from this stage as a separate elementary exchange; for R-404A, use supplier composition without a PCR default fraction.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated under calc_refrigerant_mass_balance from charge, make-up, recovery and service records for this exact substance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_and_release_refrigerant_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

### Process: Sanitation and wastewater management (`sanitation_and_wastewater_management`)

#### Inputs

##### Product flows

###### sodium hydroxide input (`sanitation_and_wastewater_management_sodium_hydroxide`)

Record sodium hydroxide as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of sodium hydroxide used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### nitric acid input (`sanitation_and_wastewater_management_nitric_acid`)

Record nitric acid as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of nitric acid used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### sodium hypochlorite input (`sanitation_and_wastewater_management_sodium_hypochlorite`)

Record sodium hypochlorite as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of sodium hypochlorite used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### peracetic acid input (`sanitation_and_wastewater_management_peracetic_acid`)

Record peracetic acid as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of peracetic acid used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### hydrogen peroxide input (`sanitation_and_wastewater_management_hydrogen_peroxide`)

Record hydrogen peroxide as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of hydrogen peroxide used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### chlorine dioxide input (`sanitation_and_wastewater_management_chlorine_dioxide`)

Record chlorine dioxide as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Chlorine dioxide
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of chlorine dioxide used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### ferric chloride input (`sanitation_and_wastewater_management_ferric_chloride`)

Record ferric chloride as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of ferric chloride used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### calcium hydroxide input (`sanitation_and_wastewater_management_calcium_hydroxide`)

Record calcium hydroxide as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of calcium hydroxide used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### polyacrylamide flocculant input (`sanitation_and_wastewater_management_polyacrylamide_flocculant`)

Record polyacrylamide flocculant as one formulation-identity input from chemical issue or dosing records; do not aggregate it with another substance.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated-product mass of polyacrylamide flocculant used for cleaning, disinfection or treatment; record active concentration separately in the protocol fields.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_chemical_dosing_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management potable mains water (`sanitation_and_wastewater_management_potable_mains_water`)

Record only potable mains water delivered to sanitation and wastewater management as a separately metered product input.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: Metered mains-water volume attributable to this stage; no category default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management grid electricity (`sanitation_and_wastewater_management_grid_electricity`)

Record grid electricity crossing the facility boundary and consumed specifically by sanitation and wastewater management; keep this carrier separate from every other carrier.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered, invoiced or stock-balanced grid electricity attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_electricity_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management purchased steam (`sanitation_and_wastewater_management_purchased_steam`)

Record purchased steam crossing the facility boundary and consumed specifically by sanitation and wastewater management; keep this carrier separate from every other carrier.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased steam attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management purchased hot water (`sanitation_and_wastewater_management_purchased_hot_water`)

Record purchased hot water crossing the facility boundary and consumed specifically by sanitation and wastewater management; keep this carrier separate from every other carrier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced purchased hot water attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_thermal_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management natural gas (`sanitation_and_wastewater_management_natural_gas`)

Record natural gas crossing the facility boundary and consumed specifically by sanitation and wastewater management; keep this carrier separate from every other carrier.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered, invoiced or stock-balanced natural gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management diesel fuel (`sanitation_and_wastewater_management_diesel_fuel`)

Record diesel fuel crossing the facility boundary and consumed specifically by sanitation and wastewater management; keep this carrier separate from every other carrier.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced diesel fuel attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management liquefied petroleum gas (`sanitation_and_wastewater_management_liquefied_petroleum_gas`)

Record liquefied petroleum gas crossing the facility boundary and consumed specifically by sanitation and wastewater management; keep this carrier separate from every other carrier.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, invoiced or stock-balanced liquefied petroleum gas attributable to this stage; no default is permitted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_fuel_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Waste flows

###### Pig-slaughter wastewater entering wastewater management (`sanitation_and_wastewater_management_pig_slaughter_wastewater`)

Record this source-separated wastewater only when the corresponding process branch is included and the stream enters on-site management.

- Selected flow: Pig-slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Transferred wastewater volume reconciled to the originating process records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_balance_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig-organ-preparation wastewater entering wastewater management (`sanitation_and_wastewater_management_pig_organ_preparation_wastewater`)

Record this source-separated wastewater only when the corresponding process branch is included and the stream enters on-site management.

- Selected flow: Pig-organ-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Transferred wastewater volume reconciled to the originating process records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_balance_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Fresh-pig-organ-conditioning wastewater entering wastewater management (`sanitation_and_wastewater_management_fresh_pig_organ_conditioning_wastewater`)

Record this source-separated wastewater only when the corresponding process branch is included and the stream enters on-site management.

- Selected flow: Fresh-pig-organ-conditioning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Transferred wastewater volume reconciled to the originating process records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_balance_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Chilled-pig-organ-conditioning wastewater entering wastewater management (`sanitation_and_wastewater_management_chilled_pig_organ_conditioning_wastewater`)

Record this source-separated wastewater only when the corresponding process branch is included and the stream enters on-site management.

- Selected flow: Chilled-pig-organ-conditioning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Transferred wastewater volume reconciled to the originating process records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_balance_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Frozen-pig-organ-conditioning wastewater entering wastewater management (`sanitation_and_wastewater_management_frozen_pig_organ_conditioning_wastewater`)

Record this source-separated wastewater only when the corresponding process branch is included and the stream enters on-site management.

- Selected flow: Frozen-pig-organ-conditioning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Transferred wastewater volume reconciled to the originating process records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_balance_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### Sanitation and wastewater management groundwater abstraction (`sanitation_and_wastewater_management_water_ground`)

Record direct groundwater abstraction crossing the elementary boundary for sanitation and wastewater management; do not duplicate mains water.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: Metered groundwater abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management surface-water abstraction (`sanitation_and_wastewater_management_water_surface`)

Record direct surface-water abstraction crossing the elementary boundary for sanitation and wastewater management; do not duplicate mains water.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: Metered surface-water abstraction attributable to this stage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_water_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

#### Outputs

##### Product flows

_No atomic exchange is defined for this direction and flow type._

##### Waste flows

###### Segregated high-strength pig-organ-processing wastewater (`sanitation_and_wastewater_management_segregated_high_strength_pig_organ_wastewater`)

Record segregated high-strength pig-organ-processing wastewater as a separate output with the actual treatment or disposal destination; never net it against another stream.

- Selected flow: Segregated high-strength pig-organ-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured volume and destination of segregated high-strength pig-organ-processing wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_output_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Segregated low-strength pig-organ-processing wastewater (`sanitation_and_wastewater_management_segregated_low_strength_pig_organ_wastewater`)

Record segregated low-strength pig-organ-processing wastewater as a separate output with the actual treatment or disposal destination; never net it against another stream.

- Selected flow: Segregated low-strength pig-organ-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured volume and destination of segregated low-strength pig-organ-processing wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_output_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Treated pig-organ-processing effluent (`sanitation_and_wastewater_management_treated_pig_organ_effluent`)

Record treated pig-organ-processing effluent as a separate output with the actual treatment or disposal destination; never net it against another stream.

- Selected flow: Treated pig-organ-processing effluent
- Flow property / unit: Volume / m3
- Amount rule: Measured volume and destination of treated pig-organ-processing effluent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_output_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Wastewater-treatment sludge (`sanitation_and_wastewater_management_wastewater_treatment_sludge`)

Record wastewater-treatment sludge as a separate output with the actual treatment or disposal destination; never net it against another stream.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Volume / m3
- Amount rule: Measured volume and destination of wastewater-treatment sludge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_output_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Pig-organ-processing screen residue (`sanitation_and_wastewater_management_pig_organ_screen_residue`)

Record pig-organ-processing screen residue as a separate output with the actual treatment or disposal destination; never net it against another stream.

- Selected flow: Pig-organ-processing screen residue
- Flow property / unit: Mass / kg
- Amount rule: Measured mass and destination of pig-organ-processing screen residue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_output_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Waste pig fat from grease separation (`sanitation_and_wastewater_management_grease_separation_pig_fat`)

Record waste pig fat from grease separation as a separate output with the actual treatment or disposal destination; never net it against another stream.

- Selected flow: Waste pig fat from grease separation
- Flow property / unit: Mass / kg
- Amount rule: Measured mass and destination of waste pig fat from grease separation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_and_wastewater_management_wastewater_output_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

##### Elementary flows

###### chemical oxygen demand discharge (`sanitation_and_wastewater_management_chemical_oxygen_demand_water`)

Record chemical oxygen demand discharged to the receiving water compartment as its own elementary exchange after any on-site treatment.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged chemical oxygen demand under calc_wastewater_pollutant_load from matched effluent volume and concentration records; no default concentration is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_effluent_sampling_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### biochemical oxygen demand discharge (`sanitation_and_wastewater_management_biochemical_oxygen_demand_water`)

Record biochemical oxygen demand discharged to the receiving water compartment as its own elementary exchange after any on-site treatment.

- Selected flow: Biochemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged biochemical oxygen demand under calc_wastewater_pollutant_load from matched effluent volume and concentration records; no default concentration is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_effluent_sampling_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### suspended solids discharge (`sanitation_and_wastewater_management_suspended_solids_water`)

Record suspended solids discharged to the receiving water compartment as its own elementary exchange after any on-site treatment.

- Selected flow: Suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged suspended solids under calc_wastewater_pollutant_load from matched effluent volume and concentration records; no default concentration is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_effluent_sampling_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### ammonium as nitrogen discharge (`sanitation_and_wastewater_management_ammonium_as_n_water`)

Record ammonium as nitrogen discharged to the receiving water compartment as its own elementary exchange after any on-site treatment.

- Selected flow: Ammonium, as nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged ammonium as nitrogen under calc_wastewater_pollutant_load from matched effluent volume and concentration records; no default concentration is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_effluent_sampling_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### nitrate as nitrogen discharge (`sanitation_and_wastewater_management_nitrate_as_n_water`)

Record nitrate as nitrogen discharged to the receiving water compartment as its own elementary exchange after any on-site treatment.

- Selected flow: Nitrate, as nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged nitrate as nitrogen under calc_wastewater_pollutant_load from matched effluent volume and concentration records; no default concentration is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_effluent_sampling_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### nitrite as nitrogen discharge (`sanitation_and_wastewater_management_nitrite_as_n_water`)

Record nitrite as nitrogen discharged to the receiving water compartment as its own elementary exchange after any on-site treatment.

- Selected flow: Nitrite, as nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged nitrite as nitrogen under calc_wastewater_pollutant_load from matched effluent volume and concentration records; no default concentration is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_effluent_sampling_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### phosphate as phosphorus discharge (`sanitation_and_wastewater_management_phosphate_as_p_water`)

Record phosphate as phosphorus discharged to the receiving water compartment as its own elementary exchange after any on-site treatment.

- Selected flow: Phosphate, as phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged phosphate as phosphorus under calc_wastewater_pollutant_load from matched effluent volume and concentration records; no default concentration is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_effluent_sampling_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### chloride discharge (`sanitation_and_wastewater_management_chloride_water`)

Record chloride discharged to the receiving water compartment as its own elementary exchange after any on-site treatment.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged chloride under calc_wastewater_pollutant_load from matched effluent volume and concentration records; no default concentration is permitted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_effluent_sampling_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct fossil carbon dioxide (`sanitation_and_wastewater_management_carbon_dioxide_fossil_air`)

Record only direct fossil carbon dioxide released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct carbon monoxide (`sanitation_and_wastewater_management_carbon_monoxide_air`)

Record only direct carbon monoxide released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct fossil methane (`sanitation_and_wastewater_management_methane_fossil_air`)

Record only direct fossil methane released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct nitrous oxide (`sanitation_and_wastewater_management_nitrous_oxide_air`)

Record only direct nitrous oxide released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct nitric oxide (`sanitation_and_wastewater_management_nitric_oxide_air`)

Record only direct nitric oxide released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct nitrogen dioxide (`sanitation_and_wastewater_management_nitrogen_dioxide_air`)

Record only direct nitrogen dioxide released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct sulfur dioxide (`sanitation_and_wastewater_management_sulfur_dioxide_air`)

Record only direct sulfur dioxide released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct particulate matter below 2.5 micrometres (`sanitation_and_wastewater_management_pm_below_2_5_air`)

Record only direct particulate matter below 2.5 micrometres released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`

###### Sanitation and wastewater management direct particulate matter from 2.5 to 10 micrometres (`sanitation_and_wastewater_management_pm_2_5_to_10_air`)

Record only direct particulate matter from 2.5 to 10 micrometres released by on-site combustion assigned to sanitation and wastewater management; exclude upstream energy-supply emissions.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated stage-specific direct emission under calc_combustion_air_emissions from monitored emissions or the recorded single-fuel input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product after allocation to the declared organ and market state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_and_wastewater_management_air_emission_records`
- Sources: `eu-jrc-sa-bref`; `eu-pef-2021-2279`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground burden allocation | Avoid allocation by subdividing independently measurable organ preparation, state conditioning, packaging, sanitation and treatment processes before applying any allocation key. | `eu-pef-2021-2279` |
| `allocation_direct_assignment` | direct process assignment | Assign metered electricity, thermal carriers, fuels, water, chemicals, packaging, wastes and emissions directly to the process and organ-state lot that caused them whenever records permit. | `eu-pef-2021-2279` |
| `allocation_slaughter_coproducts` | integrated slaughter | Treat the selected edible organ, pig carcass and each beneficially used named output as separate slaughter co-products; keep condemned or discarded outputs as wastes. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `allocation_slaughter_relation` | residual slaughter burden | For residual inseparable slaughter burdens, use a documented physical causal relationship where it can be demonstrated; if it cannot, use reporting-period economic values for the exact co-products and disclose the sensitivity. | `eu-pef-2021-2279` |
| `allocation_no_defaults` | allocation factors | Calculate allocation shares from foreground co-product quantities and, where used, contemporaneous values; do not insert a PCR default share or price. | `eu-pef-2021-2279` |
| `allocation_purchased_organ` | purchased-organ route | Use the supplier slaughter dataset's disclosed organ allocation once and do not reallocate those upstream burdens again in the receiving preparation process. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | waste treatment | Assign treatment burdens to the process generating each named waste or wastewater stream unless an explicitly documented facility-wide causal key is required; do not credit a waste as a co-product without a documented beneficial product destination. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | allocation verification | Reconcile allocated process totals to unallocated facility totals and document any unassigned difference, shared-service key and organ-state denominator. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pig_receipt_and_ante_mortem_animal_receipt_records` | `pig_receipt_and_ante_mortem` | live-pig receipt and ante-mortem disposition | weighbridge and inspection record | lot_id; supplier_id; receipt_time; animal_count; gross_mass; tare_mass; acceptance_status; disposition | Reconcile calibrated weighbridge tickets with veterinary acceptance records by lot. | kg and count | each received lot | all lots in the reporting period | reporting facility | Sum accepted and rejected masses separately; retain lot identity. | weighbridge calibration; veterinary record; reconciliation sign-off |
| `cp_pig_receipt_and_ante_mortem_receipt_waste_records` | `pig_receipt_and_ante_mortem` | receipt waste mass and destination | waste weighing and dispatch record | lot_id; waste_identity; measured_mass; container_tare; destination; dispatch_date | Weigh each named waste stream and reconcile dispatch records. | kg | each lot or dispatch | all included receipt operations | reporting facility | Sum by exact waste identity and destination before allocation. | scale calibration; waste transfer record; mass-balance review |
| `cp_pig_receipt_and_ante_mortem_water_records` | `pig_receipt_and_ante_mortem` | single-source water consumption or abstraction | water meter and allocation record | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Read calibrated source-specific meters and reconcile shared meters to operating records. | m3 | continuous or each production shift | all operating and cleaning periods assigned to the stage | reporting facility and stated source point | Subtract opening from closing reading and allocate only with a documented causal key. | meter calibration; meter map; reading log; reconciliation |
| `cp_pig_receipt_and_ante_mortem_electricity_records` | `pig_receipt_and_ante_mortem` | grid-electricity consumption | electricity meter and invoice record | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Reconcile stage submeter readings with facility invoices. | kWh | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Calculate net consumption by meter and assign shared use with a disclosed causal key. | meter calibration; invoice reconciliation; submeter coverage |
| `cp_pig_receipt_and_ante_mortem_thermal_records` | `pig_receipt_and_ante_mortem` | single purchased thermal carrier consumption | thermal meter and supplier record | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | Meter steam and hot water separately and convert only with recorded thermodynamic conditions. | MJ with original meter unit retained | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Sum each carrier separately; never combine steam and hot water. | meter calibration; supplier record; conversion worksheet |
| `cp_pig_receipt_and_ante_mortem_fuel_records` | `pig_receipt_and_ante_mortem` | single fuel consumption | fuel meter, invoice and stock-balance record | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | Reconcile each fuel identity independently from tank, meter and invoice records. | kg or MJ as recorded | each delivery and monthly reconciliation | all fuel assigned to the stage | reporting facility | Opening stock plus receipts minus closing stock, separated by fuel identity. | tank calibration; invoices; stock reconciliation; fuel specification |
| `cp_pig_receipt_and_ante_mortem_air_emission_records` | `pig_receipt_and_ante_mortem` | single direct combustion emission | stack measurement or fuel-based calculation record | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | Use matched stack measurements where available; otherwise calculate separately for each pollutant and fuel from recorded activity and a disclosed factor. | kg | monitoring event and reporting-period calculation | all on-site combustion assigned to the stage | reporting facility direct releases | Apply calc_combustion_air_emissions by pollutant and stage; do not include upstream emissions. | monitoring report; fuel record; factor provenance; calculation review |
| `cp_slaughter_and_organ_recovery_slaughter_mass_balance` | `slaughter_and_organ_recovery` | slaughter input, recovered organ and co-product mass balance | lot-specific slaughter yield record | lot_id; accepted_live_mass; exact_output_identity; gross_output_mass; tare_mass; edible_status; destination; timestamp | Weigh each organ and each co-product separately and reconcile to accepted live-pig input. | kg | each slaughter lot | all integrated-slaughter lots in the reporting period | reporting slaughter line | Apply calc_slaughter_mass_balance by exact output identity; retain unaccounted-mass investigation. | scale calibration; veterinary disposition; signed mass-balance reconciliation |
| `cp_slaughter_and_organ_recovery_slaughter_waste_records` | `slaughter_and_organ_recovery` | single slaughter waste mass and destination | waste weighing and dispatch record | lot_id; exact_waste_identity; measured_mass; destination; treatment_route; timestamp | Weigh each named slaughter waste separately and reconcile with dispatch or treatment records. | kg | each lot or dispatch | all integrated-slaughter lots | reporting slaughter line | Sum by exact waste identity and destination; prohibit product-waste double counting. | scale calibration; disposition record; mass-balance reconciliation |
| `cp_slaughter_and_organ_recovery_wastewater_records` | `slaughter_and_organ_recovery` | process-specific wastewater generation | wastewater meter or batch wash record | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | Meter the named process wastewater or calculate volume from verified batch wash records. | m3 | each batch or continuous meter interval | all included production lots | reporting facility | Apply the recorded source-process link and avoid double counting sanitation water. | meter calibration; wash-cycle log; source-stream reconciliation |
| `cp_slaughter_and_organ_recovery_water_records` | `slaughter_and_organ_recovery` | single-source water consumption or abstraction | water meter and allocation record | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Read calibrated source-specific meters and reconcile shared meters to operating records. | m3 | continuous or each production shift | all operating and cleaning periods assigned to the stage | reporting facility and stated source point | Subtract opening from closing reading and allocate only with a documented causal key. | meter calibration; meter map; reading log; reconciliation |
| `cp_slaughter_and_organ_recovery_electricity_records` | `slaughter_and_organ_recovery` | grid-electricity consumption | electricity meter and invoice record | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Reconcile stage submeter readings with facility invoices. | kWh | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Calculate net consumption by meter and assign shared use with a disclosed causal key. | meter calibration; invoice reconciliation; submeter coverage |
| `cp_slaughter_and_organ_recovery_thermal_records` | `slaughter_and_organ_recovery` | single purchased thermal carrier consumption | thermal meter and supplier record | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | Meter steam and hot water separately and convert only with recorded thermodynamic conditions. | MJ with original meter unit retained | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Sum each carrier separately; never combine steam and hot water. | meter calibration; supplier record; conversion worksheet |
| `cp_slaughter_and_organ_recovery_fuel_records` | `slaughter_and_organ_recovery` | single fuel consumption | fuel meter, invoice and stock-balance record | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | Reconcile each fuel identity independently from tank, meter and invoice records. | kg or MJ as recorded | each delivery and monthly reconciliation | all fuel assigned to the stage | reporting facility | Opening stock plus receipts minus closing stock, separated by fuel identity. | tank calibration; invoices; stock reconciliation; fuel specification |
| `cp_slaughter_and_organ_recovery_air_emission_records` | `slaughter_and_organ_recovery` | single direct combustion emission | stack measurement or fuel-based calculation record | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | Use matched stack measurements where available; otherwise calculate separately for each pollutant and fuel from recorded activity and a disclosed factor. | kg | monitoring event and reporting-period calculation | all on-site combustion assigned to the stage | reporting facility direct releases | Apply calc_combustion_air_emissions by pollutant and stage; do not include upstream emissions. | monitoring report; fuel record; factor provenance; calculation review |
| `cp_edible_organ_preparation_organ_mass_balance` | `edible_organ_preparation` | received, prepared and trimmed organ mass | organ-lot mass-balance record | lot_id; exact_organ_identity; received_mass; prepared_mass; trimming_waste_mass; hold_or_drain_change; disposition | Weigh the one declared organ at receipt, after preparation and at each reject point. | kg | each organ lot | all prepared lots | reporting preparation line | Apply calc_organ_preparation_mass_balance for one organ identity at a time. | scale calibration; organ identity traceability; signed mass balance |
| `cp_edible_organ_preparation_preparation_waste_records` | `edible_organ_preparation` | organ-specific preparation reject mass | reject weighing and destination record | lot_id; exact_organ_identity; reject_identity; measured_mass; destination; timestamp | Weigh trimmings separately for the declared organ and record final destination. | kg | each organ lot | all prepared lots | reporting preparation line | Sum by exact organ and waste identity; reconcile to organ mass balance. | scale calibration; disposition record; mass-balance review |
| `cp_edible_organ_preparation_wastewater_records` | `edible_organ_preparation` | process-specific wastewater generation | wastewater meter or batch wash record | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | Meter the named process wastewater or calculate volume from verified batch wash records. | m3 | each batch or continuous meter interval | all included production lots | reporting facility | Apply the recorded source-process link and avoid double counting sanitation water. | meter calibration; wash-cycle log; source-stream reconciliation |
| `cp_edible_organ_preparation_water_records` | `edible_organ_preparation` | single-source water consumption or abstraction | water meter and allocation record | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Read calibrated source-specific meters and reconcile shared meters to operating records. | m3 | continuous or each production shift | all operating and cleaning periods assigned to the stage | reporting facility and stated source point | Subtract opening from closing reading and allocate only with a documented causal key. | meter calibration; meter map; reading log; reconciliation |
| `cp_edible_organ_preparation_electricity_records` | `edible_organ_preparation` | grid-electricity consumption | electricity meter and invoice record | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Reconcile stage submeter readings with facility invoices. | kWh | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Calculate net consumption by meter and assign shared use with a disclosed causal key. | meter calibration; invoice reconciliation; submeter coverage |
| `cp_edible_organ_preparation_thermal_records` | `edible_organ_preparation` | single purchased thermal carrier consumption | thermal meter and supplier record | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | Meter steam and hot water separately and convert only with recorded thermodynamic conditions. | MJ with original meter unit retained | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Sum each carrier separately; never combine steam and hot water. | meter calibration; supplier record; conversion worksheet |
| `cp_edible_organ_preparation_fuel_records` | `edible_organ_preparation` | single fuel consumption | fuel meter, invoice and stock-balance record | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | Reconcile each fuel identity independently from tank, meter and invoice records. | kg or MJ as recorded | each delivery and monthly reconciliation | all fuel assigned to the stage | reporting facility | Opening stock plus receipts minus closing stock, separated by fuel identity. | tank calibration; invoices; stock reconciliation; fuel specification |
| `cp_edible_organ_preparation_air_emission_records` | `edible_organ_preparation` | single direct combustion emission | stack measurement or fuel-based calculation record | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | Use matched stack measurements where available; otherwise calculate separately for each pollutant and fuel from recorded activity and a disclosed factor. | kg | monitoring event and reporting-period calculation | all on-site combustion assigned to the stage | reporting facility direct releases | Apply calc_combustion_air_emissions by pollutant and stage; do not include upstream emissions. | monitoring report; fuel record; factor provenance; calculation review |
| `cp_fresh_state_conditioning_state_mass_balance` | `fresh_state_conditioning` | single-organ state-conditioning mass balance | state-conditioning batch record | lot_id; exact_organ_identity; declared_state; input_mass; conforming_output_mass; reject_mass; start_time; end_time; temperature_record | Weigh one organ entering and leaving exactly one declared state branch and retain the temperature-time record. | kg and degrees Celsius with time | each state-conditioning lot | all lots in the selected state branch | reporting state-conditioning line | Apply calc_state_conditioning_mass_balance only within the selected organ-state combination. | scale calibration; calibrated temperature logger; branch-selection review |
| `cp_fresh_state_conditioning_state_waste_records` | `fresh_state_conditioning` | organ-state-specific reject mass | reject weighing and destination record | lot_id; exact_organ_identity; declared_state; measured_reject_mass; rejection_reason; destination | Weigh rejected product separately for the exact organ-state combination. | kg | each conditioning lot | all lots in the selected state branch | reporting state-conditioning line | Sum by exact organ, state and destination; reconcile to the state mass balance. | scale calibration; rejection record; destination evidence |
| `cp_fresh_state_conditioning_wastewater_records` | `fresh_state_conditioning` | process-specific wastewater generation | wastewater meter or batch wash record | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | Meter the named process wastewater or calculate volume from verified batch wash records. | m3 | each batch or continuous meter interval | all included production lots | reporting facility | Apply the recorded source-process link and avoid double counting sanitation water. | meter calibration; wash-cycle log; source-stream reconciliation |
| `cp_fresh_state_conditioning_water_records` | `fresh_state_conditioning` | single-source water consumption or abstraction | water meter and allocation record | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Read calibrated source-specific meters and reconcile shared meters to operating records. | m3 | continuous or each production shift | all operating and cleaning periods assigned to the stage | reporting facility and stated source point | Subtract opening from closing reading and allocate only with a documented causal key. | meter calibration; meter map; reading log; reconciliation |
| `cp_fresh_state_conditioning_electricity_records` | `fresh_state_conditioning` | grid-electricity consumption | electricity meter and invoice record | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Reconcile stage submeter readings with facility invoices. | kWh | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Calculate net consumption by meter and assign shared use with a disclosed causal key. | meter calibration; invoice reconciliation; submeter coverage |
| `cp_fresh_state_conditioning_thermal_records` | `fresh_state_conditioning` | single purchased thermal carrier consumption | thermal meter and supplier record | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | Meter steam and hot water separately and convert only with recorded thermodynamic conditions. | MJ with original meter unit retained | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Sum each carrier separately; never combine steam and hot water. | meter calibration; supplier record; conversion worksheet |
| `cp_fresh_state_conditioning_fuel_records` | `fresh_state_conditioning` | single fuel consumption | fuel meter, invoice and stock-balance record | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | Reconcile each fuel identity independently from tank, meter and invoice records. | kg or MJ as recorded | each delivery and monthly reconciliation | all fuel assigned to the stage | reporting facility | Opening stock plus receipts minus closing stock, separated by fuel identity. | tank calibration; invoices; stock reconciliation; fuel specification |
| `cp_fresh_state_conditioning_air_emission_records` | `fresh_state_conditioning` | single direct combustion emission | stack measurement or fuel-based calculation record | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | Use matched stack measurements where available; otherwise calculate separately for each pollutant and fuel from recorded activity and a disclosed factor. | kg | monitoring event and reporting-period calculation | all on-site combustion assigned to the stage | reporting facility direct releases | Apply calc_combustion_air_emissions by pollutant and stage; do not include upstream emissions. | monitoring report; fuel record; factor provenance; calculation review |
| `cp_chilled_state_conditioning_state_mass_balance` | `chilled_state_conditioning` | single-organ state-conditioning mass balance | state-conditioning batch record | lot_id; exact_organ_identity; declared_state; input_mass; conforming_output_mass; reject_mass; start_time; end_time; temperature_record | Weigh one organ entering and leaving exactly one declared state branch and retain the temperature-time record. | kg and degrees Celsius with time | each state-conditioning lot | all lots in the selected state branch | reporting state-conditioning line | Apply calc_state_conditioning_mass_balance only within the selected organ-state combination. | scale calibration; calibrated temperature logger; branch-selection review |
| `cp_chilled_state_conditioning_state_waste_records` | `chilled_state_conditioning` | organ-state-specific reject mass | reject weighing and destination record | lot_id; exact_organ_identity; declared_state; measured_reject_mass; rejection_reason; destination | Weigh rejected product separately for the exact organ-state combination. | kg | each conditioning lot | all lots in the selected state branch | reporting state-conditioning line | Sum by exact organ, state and destination; reconcile to the state mass balance. | scale calibration; rejection record; destination evidence |
| `cp_chilled_state_conditioning_wastewater_records` | `chilled_state_conditioning` | process-specific wastewater generation | wastewater meter or batch wash record | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | Meter the named process wastewater or calculate volume from verified batch wash records. | m3 | each batch or continuous meter interval | all included production lots | reporting facility | Apply the recorded source-process link and avoid double counting sanitation water. | meter calibration; wash-cycle log; source-stream reconciliation |
| `cp_chilled_state_conditioning_water_records` | `chilled_state_conditioning` | single-source water consumption or abstraction | water meter and allocation record | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Read calibrated source-specific meters and reconcile shared meters to operating records. | m3 | continuous or each production shift | all operating and cleaning periods assigned to the stage | reporting facility and stated source point | Subtract opening from closing reading and allocate only with a documented causal key. | meter calibration; meter map; reading log; reconciliation |
| `cp_chilled_state_conditioning_electricity_records` | `chilled_state_conditioning` | grid-electricity consumption | electricity meter and invoice record | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Reconcile stage submeter readings with facility invoices. | kWh | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Calculate net consumption by meter and assign shared use with a disclosed causal key. | meter calibration; invoice reconciliation; submeter coverage |
| `cp_chilled_state_conditioning_thermal_records` | `chilled_state_conditioning` | single purchased thermal carrier consumption | thermal meter and supplier record | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | Meter steam and hot water separately and convert only with recorded thermodynamic conditions. | MJ with original meter unit retained | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Sum each carrier separately; never combine steam and hot water. | meter calibration; supplier record; conversion worksheet |
| `cp_chilled_state_conditioning_fuel_records` | `chilled_state_conditioning` | single fuel consumption | fuel meter, invoice and stock-balance record | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | Reconcile each fuel identity independently from tank, meter and invoice records. | kg or MJ as recorded | each delivery and monthly reconciliation | all fuel assigned to the stage | reporting facility | Opening stock plus receipts minus closing stock, separated by fuel identity. | tank calibration; invoices; stock reconciliation; fuel specification |
| `cp_chilled_state_conditioning_air_emission_records` | `chilled_state_conditioning` | single direct combustion emission | stack measurement or fuel-based calculation record | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | Use matched stack measurements where available; otherwise calculate separately for each pollutant and fuel from recorded activity and a disclosed factor. | kg | monitoring event and reporting-period calculation | all on-site combustion assigned to the stage | reporting facility direct releases | Apply calc_combustion_air_emissions by pollutant and stage; do not include upstream emissions. | monitoring report; fuel record; factor provenance; calculation review |
| `cp_chilled_state_conditioning_refrigerant_records` | `chilled_state_conditioning` | single refrigerant charge, make-up, recovery and release balance | refrigeration service and stock record | equipment_id; exact_refrigerant_identity; opening_charge; make_up_mass; recovered_mass; closing_charge; service_date; supplier_composition | Reconcile each installed refrigerant separately from service logs and stock records. | kg | each service event and annual reconciliation | all refrigeration equipment assigned to the stage | reporting facility | Apply calc_refrigerant_mass_balance per exact substance; use supplier composition for R-404A constituents. | service certificate; calibrated cylinder scale; stock reconciliation; supplier specification |
| `cp_frozen_state_conditioning_state_mass_balance` | `frozen_state_conditioning` | single-organ state-conditioning mass balance | state-conditioning batch record | lot_id; exact_organ_identity; declared_state; input_mass; conforming_output_mass; reject_mass; start_time; end_time; temperature_record | Weigh one organ entering and leaving exactly one declared state branch and retain the temperature-time record. | kg and degrees Celsius with time | each state-conditioning lot | all lots in the selected state branch | reporting state-conditioning line | Apply calc_state_conditioning_mass_balance only within the selected organ-state combination. | scale calibration; calibrated temperature logger; branch-selection review |
| `cp_frozen_state_conditioning_state_waste_records` | `frozen_state_conditioning` | organ-state-specific reject mass | reject weighing and destination record | lot_id; exact_organ_identity; declared_state; measured_reject_mass; rejection_reason; destination | Weigh rejected product separately for the exact organ-state combination. | kg | each conditioning lot | all lots in the selected state branch | reporting state-conditioning line | Sum by exact organ, state and destination; reconcile to the state mass balance. | scale calibration; rejection record; destination evidence |
| `cp_frozen_state_conditioning_wastewater_records` | `frozen_state_conditioning` | process-specific wastewater generation | wastewater meter or batch wash record | source_process; stream_identity; meter_reading; batch_volume; start_time; end_time; organ_identity; state_identity | Meter the named process wastewater or calculate volume from verified batch wash records. | m3 | each batch or continuous meter interval | all included production lots | reporting facility | Apply the recorded source-process link and avoid double counting sanitation water. | meter calibration; wash-cycle log; source-stream reconciliation |
| `cp_frozen_state_conditioning_water_records` | `frozen_state_conditioning` | single-source water consumption or abstraction | water meter and allocation record | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Read calibrated source-specific meters and reconcile shared meters to operating records. | m3 | continuous or each production shift | all operating and cleaning periods assigned to the stage | reporting facility and stated source point | Subtract opening from closing reading and allocate only with a documented causal key. | meter calibration; meter map; reading log; reconciliation |
| `cp_frozen_state_conditioning_electricity_records` | `frozen_state_conditioning` | grid-electricity consumption | electricity meter and invoice record | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Reconcile stage submeter readings with facility invoices. | kWh | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Calculate net consumption by meter and assign shared use with a disclosed causal key. | meter calibration; invoice reconciliation; submeter coverage |
| `cp_frozen_state_conditioning_thermal_records` | `frozen_state_conditioning` | single purchased thermal carrier consumption | thermal meter and supplier record | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | Meter steam and hot water separately and convert only with recorded thermodynamic conditions. | MJ with original meter unit retained | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Sum each carrier separately; never combine steam and hot water. | meter calibration; supplier record; conversion worksheet |
| `cp_frozen_state_conditioning_fuel_records` | `frozen_state_conditioning` | single fuel consumption | fuel meter, invoice and stock-balance record | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | Reconcile each fuel identity independently from tank, meter and invoice records. | kg or MJ as recorded | each delivery and monthly reconciliation | all fuel assigned to the stage | reporting facility | Opening stock plus receipts minus closing stock, separated by fuel identity. | tank calibration; invoices; stock reconciliation; fuel specification |
| `cp_frozen_state_conditioning_air_emission_records` | `frozen_state_conditioning` | single direct combustion emission | stack measurement or fuel-based calculation record | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | Use matched stack measurements where available; otherwise calculate separately for each pollutant and fuel from recorded activity and a disclosed factor. | kg | monitoring event and reporting-period calculation | all on-site combustion assigned to the stage | reporting facility direct releases | Apply calc_combustion_air_emissions by pollutant and stage; do not include upstream emissions. | monitoring report; fuel record; factor provenance; calculation review |
| `cp_frozen_state_conditioning_refrigerant_records` | `frozen_state_conditioning` | single refrigerant charge, make-up, recovery and release balance | refrigeration service and stock record | equipment_id; exact_refrigerant_identity; opening_charge; make_up_mass; recovered_mass; closing_charge; service_date; supplier_composition | Reconcile each installed refrigerant separately from service logs and stock records. | kg | each service event and annual reconciliation | all refrigeration equipment assigned to the stage | reporting facility | Apply calc_refrigerant_mass_balance per exact substance; use supplier composition for R-404A constituents. | service certificate; calibrated cylinder scale; stock reconciliation; supplier specification |
| `cp_packaging_storage_and_release_release_mass_records` | `packaging_storage_and_release` | one organ-state product entering packaging and release | lot release and weighing record | lot_id; exact_organ_identity; declared_state; input_net_mass; reject_mass; released_net_mass; packaging_mass; release_time | Weigh the exact organ-state product and packaging separately at release. | kg | each released lot | all reference-product lots | reporting packaging and release line | Apply calc_reference_product_normalization to net product mass only. | scale calibration; lot release certificate; product-packaging tare record |
| `cp_packaging_storage_and_release_release_waste_records` | `packaging_storage_and_release` | organ-state-specific release reject mass | release reject and destination record | lot_id; exact_organ_identity; declared_state; reject_mass; rejection_reason; destination | Weigh release rejects separately for the exact organ-state combination. | kg | each released lot | all reference-product lots | reporting packaging and release line | Sum by exact organ, state and destination; reconcile with released mass. | scale calibration; release record; destination evidence |
| `cp_packaging_storage_and_release_packaging_bom_records` | `packaging_storage_and_release` | single packaging component input | product-specific packaging bill of materials and issue record | lot_id; packaging_component_identity; supplier; item_count; unit_mass; total_mass; recycled_content_if_claimed | Reconcile issued packaging with a product-specific bill of materials and measured or supplier-declared unit mass. | kg and item count | each packaging specification and released lot | all packaging used for the reference product | reporting packaging line | Calculate mass separately for each named component; exclude packaging from reference-product net mass. | approved BOM; supplier specification; scale or item-count reconciliation |
| `cp_packaging_storage_and_release_packaging_waste_records` | `packaging_storage_and_release` | single packaging-component waste mass | packaging reject and waste dispatch record | lot_id; exact_component_identity; measured_waste_mass; destination; timestamp | Weigh discarded packaging separately by exact component identity. | kg | each shift or dispatch | all packaging operations | reporting packaging line | Sum by exact component and destination; reconcile with packaging issued. | scale calibration; dispatch record; packaging mass balance |
| `cp_packaging_storage_and_release_reference_release_records` | `packaging_storage_and_release` | reference-product net release and normalization | final release and normalization record | lot_id; exact_organ_identity; declared_state; conforming_net_mass; packaging_mass; reference_normalization_factor; release_specification | Verify one organ and one state, exclude packaging mass, then normalize the conforming net mass to 1 kg. | kg | each released lot and reporting-period aggregation | all reference-product lots | reporting packaging and release line | Apply calc_reference_product_normalization without pooling organ or state identities. | release certificate; calibrated scale; branch-selection check; normalization worksheet |
| `cp_packaging_storage_and_release_water_records` | `packaging_storage_and_release` | single-source water consumption or abstraction | water meter and allocation record | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Read calibrated source-specific meters and reconcile shared meters to operating records. | m3 | continuous or each production shift | all operating and cleaning periods assigned to the stage | reporting facility and stated source point | Subtract opening from closing reading and allocate only with a documented causal key. | meter calibration; meter map; reading log; reconciliation |
| `cp_packaging_storage_and_release_electricity_records` | `packaging_storage_and_release` | grid-electricity consumption | electricity meter and invoice record | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Reconcile stage submeter readings with facility invoices. | kWh | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Calculate net consumption by meter and assign shared use with a disclosed causal key. | meter calibration; invoice reconciliation; submeter coverage |
| `cp_packaging_storage_and_release_thermal_records` | `packaging_storage_and_release` | single purchased thermal carrier consumption | thermal meter and supplier record | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | Meter steam and hot water separately and convert only with recorded thermodynamic conditions. | MJ with original meter unit retained | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Sum each carrier separately; never combine steam and hot water. | meter calibration; supplier record; conversion worksheet |
| `cp_packaging_storage_and_release_fuel_records` | `packaging_storage_and_release` | single fuel consumption | fuel meter, invoice and stock-balance record | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | Reconcile each fuel identity independently from tank, meter and invoice records. | kg or MJ as recorded | each delivery and monthly reconciliation | all fuel assigned to the stage | reporting facility | Opening stock plus receipts minus closing stock, separated by fuel identity. | tank calibration; invoices; stock reconciliation; fuel specification |
| `cp_packaging_storage_and_release_air_emission_records` | `packaging_storage_and_release` | single direct combustion emission | stack measurement or fuel-based calculation record | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | Use matched stack measurements where available; otherwise calculate separately for each pollutant and fuel from recorded activity and a disclosed factor. | kg | monitoring event and reporting-period calculation | all on-site combustion assigned to the stage | reporting facility direct releases | Apply calc_combustion_air_emissions by pollutant and stage; do not include upstream emissions. | monitoring report; fuel record; factor provenance; calculation review |
| `cp_packaging_storage_and_release_refrigerant_records` | `packaging_storage_and_release` | single refrigerant charge, make-up, recovery and release balance | refrigeration service and stock record | equipment_id; exact_refrigerant_identity; opening_charge; make_up_mass; recovered_mass; closing_charge; service_date; supplier_composition | Reconcile each installed refrigerant separately from service logs and stock records. | kg | each service event and annual reconciliation | all refrigeration equipment assigned to the stage | reporting facility | Apply calc_refrigerant_mass_balance per exact substance; use supplier composition for R-404A constituents. | service certificate; calibrated cylinder scale; stock reconciliation; supplier specification |
| `cp_sanitation_and_wastewater_management_wastewater_balance_records` | `sanitation_and_wastewater_management` | source-separated wastewater transfer balance | source-stream meter and transfer record | source_process; exact_stream_identity; source_volume; transferred_volume; bypass_volume; destination; timestamp | Reconcile each named source stream between generation and on-site management. | m3 | each batch or continuous interval | all included wastewater streams | reporting facility | Balance each source stream separately and investigate discrepancies. | meter calibration; flow diagram; transfer reconciliation |
| `cp_sanitation_and_wastewater_management_chemical_dosing_records` | `sanitation_and_wastewater_management` | single cleaning, disinfection or treatment chemical dose | chemical issue and dosing record | exact_chemical_identity; formulation_concentration; batch_or_meter_id; issued_mass; returned_mass; dose_time; target_operation | Reconcile each formulation identity separately from store issue, return and dosing records. | kg formulated product | each dose and monthly stock reconciliation | all cleaning, disinfection and on-site treatment operations | reporting facility | Issued minus returned mass by exact formulation; retain active concentration as metadata. | supplier SDS or specification; dosing calibration; stock reconciliation |
| `cp_sanitation_and_wastewater_management_wastewater_output_records` | `sanitation_and_wastewater_management` | single wastewater-treatment output mass or volume | treatment output and destination record | exact_output_identity; measured_mass_or_volume; sampling_or_dispatch_time; destination; treatment_status | Measure each output independently at the treatment or dispatch point. | kg or m3 as applicable | each batch, sampling event or dispatch | all on-site wastewater management | reporting facility | Sum by exact output identity and destination; do not net separate streams. | meter or scale calibration; dispatch record; treatment log |
| `cp_sanitation_and_wastewater_management_effluent_sampling_records` | `sanitation_and_wastewater_management` | single effluent pollutant load | matched effluent flow and laboratory result | sample_id; pollutant_identity; concentration; concentration_unit; effluent_volume; discharge_compartment; sample_time; laboratory_method | Match representative pollutant concentration with the corresponding discharged effluent volume. | kg after conversion | each required sampling event and reporting-period calculation | all discharged treated or untreated effluent | reporting facility discharge point | Apply calc_wastewater_pollutant_load separately for each pollutant and receiving compartment. | accredited laboratory report; chain of custody; flow-meter calibration; calculation review |
| `cp_sanitation_and_wastewater_management_water_records` | `sanitation_and_wastewater_management` | single-source water consumption or abstraction | water meter and allocation record | meter_id; water_source_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Read calibrated source-specific meters and reconcile shared meters to operating records. | m3 | continuous or each production shift | all operating and cleaning periods assigned to the stage | reporting facility and stated source point | Subtract opening from closing reading and allocate only with a documented causal key. | meter calibration; meter map; reading log; reconciliation |
| `cp_sanitation_and_wastewater_management_electricity_records` | `sanitation_and_wastewater_management` | grid-electricity consumption | electricity meter and invoice record | meter_id; supplier; tariff_or_grid_identity; opening_reading; closing_reading; timestamp; stage_allocation_key | Reconcile stage submeter readings with facility invoices. | kWh | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Calculate net consumption by meter and assign shared use with a disclosed causal key. | meter calibration; invoice reconciliation; submeter coverage |
| `cp_sanitation_and_wastewater_management_thermal_records` | `sanitation_and_wastewater_management` | single purchased thermal carrier consumption | thermal meter and supplier record | carrier_identity; meter_id; opening_reading; closing_reading; temperature; pressure; enthalpy_basis; timestamp; allocation_key | Meter steam and hot water separately and convert only with recorded thermodynamic conditions. | MJ with original meter unit retained | continuous or each production shift | all operating periods assigned to the stage | reporting facility | Sum each carrier separately; never combine steam and hot water. | meter calibration; supplier record; conversion worksheet |
| `cp_sanitation_and_wastewater_management_fuel_records` | `sanitation_and_wastewater_management` | single fuel consumption | fuel meter, invoice and stock-balance record | fuel_identity; opening_stock; receipts; closing_stock; meter_reading; lower_heating_value_if_used; timestamp; stage_allocation_key | Reconcile each fuel identity independently from tank, meter and invoice records. | kg or MJ as recorded | each delivery and monthly reconciliation | all fuel assigned to the stage | reporting facility | Opening stock plus receipts minus closing stock, separated by fuel identity. | tank calibration; invoices; stock reconciliation; fuel specification |
| `cp_sanitation_and_wastewater_management_air_emission_records` | `sanitation_and_wastewater_management` | single direct combustion emission | stack measurement or fuel-based calculation record | pollutant_identity; stack_id; concentration; exhaust_flow; monitoring_time; fuel_identity; fuel_quantity; approved_factor_if_used; allocation_key | Use matched stack measurements where available; otherwise calculate separately for each pollutant and fuel from recorded activity and a disclosed factor. | kg | monitoring event and reporting-period calculation | all on-site combustion assigned to the stage | reporting facility direct releases | Apply calc_combustion_air_emissions by pollutant and stage; do not include upstream emissions. | monitoring report; fuel record; factor provenance; calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_receipt_mass_balance` | pig_receipt_and_ante_mortem | Accepted live-pig mass equals measured received live-pig mass minus dead-at-reception and condemned-pig masses, with manure and bedding excluded from animal mass. | received live-pig mass; dead-pig mass; condemned-pig mass | accepted live-pig mass | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `calc_slaughter_mass_balance` | slaughter_and_organ_recovery | Reconcile accepted live-pig mass with every separately weighed organ, carcass, co-product and waste; investigate and disclose any unaccounted mass before allocation. | accepted live-pig mass; exact organ masses; carcass mass; co-product masses; waste masses | reconciled slaughter mass balance by exact output identity | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `calc_organ_preparation_mass_balance` | edible_organ_preparation | For the one declared organ, prepared mass equals received recovered-organ mass minus separately recorded trimming rejects and other measured mass loss, with retained moisture or drain change disclosed. | received exact-organ mass; exact-organ trimming waste; measured drain or moisture change | prepared exact-organ mass | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `calc_state_conditioning_mass_balance` | fresh_state_conditioning; chilled_state_conditioning; frozen_state_conditioning | Within exactly one selected state branch, conforming organ output equals prepared-organ input minus state-specific rejects and measured conditioning mass change; never pool states. | prepared exact-organ mass; state-specific reject mass; measured conditioning mass change | conforming exact-organ mass in the declared state | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `calc_combustion_air_emissions` | direct on-site combustion emissions | Calculate each named pollutant separately as matched stack concentration times exhaust volume, or as one exact fuel quantity times a disclosed approved factor when measurement is unavailable; allocate only the direct stage share. | pollutant-specific stack records or exact fuel quantity and disclosed factor; stage allocation key | stage-specific mass of one direct air pollutant | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `calc_refrigerant_mass_balance` | chilled_state_conditioning; frozen_state_conditioning; packaging_storage_and_release | For each exact refrigerant substance, release equals opening charge plus make-up minus recovered mass minus closing charge, adjusted only for documented transfers; R-404A constituent emissions use supplier composition. | opening charge; make-up; recovered mass; closing charge; documented transfers; supplier composition | mass released for one refrigerant substance | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `calc_wastewater_pollutant_load` | sanitation_and_wastewater_management | For each named pollutant and discharge compartment, load equals matched concentration times discharged effluent volume after unit conversion; subtracting treatment removal is allowed only when matched inlet and outlet records exist. | pollutant concentration; matched effluent volume; unit conversion; discharge compartment | mass of one pollutant discharged to water | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `calc_reference_product_normalization` | reference product release | Verify one declared organ and exactly one fresh, chilled or frozen branch, subtract packaging mass from gross release mass, then divide all allocated foreground exchanges by conforming net product mass to report exactly 1 kg. | exact organ identity; declared state; gross release mass; packaging mass; allocated foreground exchanges | inventory normalized to 1 kg net conforming reference product | `unsd-cpc-21153`; `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain exact pig organ identity, legal edible status, product form and one market state for every lot. | lot specification; legal release record; organ-state traceability |
| `dq_route_traceability` | route start | Retain whether the route starts from accepted live pig or a purchased recovered organ and link the corresponding upstream dataset. | supplier dataset or integrated-slaughter lot link |
| `dq_temporal_coverage` | all foreground records | Cover a representative reporting period and disclose shutdowns, seasonal patterns and missing intervals. | dated meter, batch, invoice and production records |
| `dq_meter_quality` | mass, water and energy | Use calibrated equipment, retain original units and document shared-meter allocation keys. | calibration certificates; meter map; reconciliation |
| `dq_mass_balance` | material transformation | Complete receipt, slaughter when applicable, organ, state and release mass balances by exact identity. | signed balance worksheets; discrepancy investigations |
| `dq_cold_chain` | chilled and frozen routes | Retain calibrated temperature-time records, refrigeration equipment identity and service history. | temperature logger files; service certificates |
| `dq_packaging` | packaging | Retain product-specific bill of materials, supplier specifications, component masses and packaging waste destinations. | approved BOM; supplier declaration; waste dispatch record |
| `dq_wastewater` | wastewater and pollutants | Retain stream source, volume, treatment status, sampling method, laboratory result and discharge compartment. | flow records; laboratory report; chain of custody |
| `dq_allocation` | shared and co-product burdens | Retain unallocated totals, direct assignments, allocation key, exact co-product quantities and any economic values used. | allocation worksheet; sales or transfer records; sensitivity disclosure |
| `dq_completeness` | LCI coverage | Reconcile material, water, energy, fuel, refrigerant, packaging, product, co-product, waste and emission records; disclose every applicable missing item. | PEF completeness checklist; facility reconciliation |
| `dq_supplier_data` | purchased organ and packaging | Record supplier, geography, period, technology, allocation and quality metadata for linked upstream datasets or specifications. | supplier dataset and quality review |
| `dq_change_control` | dataset maintenance | Retain versioned changes to organ scope, state, route, technology, refrigerant, packaging, treatment or allocation. | change log; approval record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Require UUID 17a80845-90d9-42a4-8a70-fee47fe2b380, Mass property UUID 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66 and unit kg for the reference object. | `unsd-cpc-21153` |
| `validation_reference_amount` | reference amount | Require exactly 1 kg net conforming product and verify that packaging mass is excluded. | `eu-pef-2021-2279` |
| `validation_single_organ` | organ identity | Require exactly one declared pig organ identity and reject any dataset that pools multiple organ identities under the reference amount. | `unsd-cpc-21153`; `eu-pef-2021-2279` |
| `validation_single_state` | market state | Require exactly one fresh, chilled or frozen branch; reject simultaneous or ambiguous state-branch records. | `unsd-cpc-21153`; `eu-pef-2021-2279` |
| `validation_route_exclusivity` | production route | Require exactly one route start and reject simultaneous inclusion of purchased recovered-organ input and integrated-slaughter upstream burdens for the same organ mass. | `eu-pef-2021-2279` |
| `validation_process_map` | process coverage | Require detailed inventories for edible_organ_preparation, packaging_storage_and_release and sanitation_and_wastewater_management, plus the applicable route and state processes. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `validation_atomic_selected_flow` | inventory identity | Require every Selected flow other than the verified category reference flow to describe one specific exchange; reject collection labels, selector instructions and combined carriers. | `eu-pef-2021-2279` |
| `validation_uuid_policy` | Tiangong identity | Accept only the three verified reference UUIDs in this candidate PCR; require any later non-reference UUID to have an exact hybrid match and direct public state=100 record before insertion. |  |
| `validation_mass_balance` | mass balance | Require reconciled receipt, slaughter when applicable, organ preparation, selected state and release mass balances with investigated discrepancies. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `validation_energy_separation` | energy inventory | Require grid electricity, purchased steam, purchased hot water, natural gas, diesel fuel and liquefied petroleum gas to remain separate wherever consumed. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `validation_refrigerant` | refrigeration inventory | For chilled, frozen and applicable state-controlled storage, require exact installed refrigerant identity, make-up and substance-specific release balance; reject an unspecified refrigerant total. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `validation_packaging` | packaging inventory | Require each used packaging component and each generated packaging-component waste to be separately recorded and reconciled to the product-specific bill of materials. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `validation_wastewater` | wastewater inventory | Require each wastewater stream, treatment output and discharged pollutant to be separately recorded, with concentration-volume matching for pollutant loads. | `eu-jrc-sa-bref`; `eu-pef-2021-2279` |
| `validation_no_defaults` | amount evidence | Reject category default amounts, uncited numeric ranges, modelled estimates and reasoned estimates; require foreground_record or calculated_value backed by a declared protocol. | `eu-pef-2021-2279` |
| `validation_quality_disclosure` | data quality | Require reporting-period coverage, geography, technology, allocation, missing-data, meter, laboratory, refrigerant and supplier-data disclosures before dataset release. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared edible pig organ in one declared fresh, chilled or frozen state. |
| downstream_use | Eligible after review for use as a `secondary_dataset` or `background_dataset` in product systems that require the same organ, state, route, geography, technology and period. |
| allowed_use | Facility-gate modelling of the declared organ-state combination when reference identity, boundary, allocation, collection protocols and quality disclosures are satisfied. |
| excluded_use | Pooled organs; pooled fresh, chilled and frozen states; pig meat or carcass as the reference product; prepared or preserved organ foods; retail, use or end-of-life modelling; substitution without comparability review. |
| required_metadata | PCR id; CPC coordinate; exact organ; legal edible status; state; product form; net mass; temperature-time specification; packaging BOM; route start; facility; geography; period; technology; refrigerant; wastewater treatment; allocation; upstream dataset links. |
| required_quality_disclosure | Completeness; mass-balance reconciliation; meter and scale calibration; temperature coverage; supplier-data quality; laboratory methods; missing data; allocation sensitivity; non-reference UUID gaps; uncertainty and review status. |
| update_trigger | Change in organ scope, legal edible status, state specification, route start, slaughter allocation, process technology, refrigerant, packaging, sanitation chemistry, wastewater treatment, data period or verified Tiangong identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-21153` | `dataset` | United Nations Statistics Division, CPC Version 3.0 retained structure CSV, subclass 21153. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official category title and restriction to pig edible offal in fresh, chilled or frozen states. |
| `eu-jrc-sa-bref` | `official_guidance` | European Commission Joint Research Centre, JRC135916, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries. https://doi.org/10.2760/18199 | Process decomposition for animal receipt, slaughter, organ recovery, chilling or freezing, storage, cleaning, energy, co-products, wastes, wastewater and direct emissions; no default quantities are imported. |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific foreground records, complete LCI coverage, allocation hierarchy, transparency, data quality, calculation and validation requirements. |
