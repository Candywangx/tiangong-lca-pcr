---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-spark-ignition-reciprocating-compression-ignition-or-rotary-internal-combustio-a011c638
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of spark-ignition reciprocating, compression ignition or rotary internal combustion piston engines

## 1. Scope and Applicability

This PCR covers new, non-aircraft parts of spark-ignition reciprocating, compression-ignition, or rotary internal-combustion piston engines when manufactured from purchased engine-part blanks and delivered as conforming finished parts at the factory gate. Covered parts include, when sold separately, cylinder blocks and heads, pistons, piston rings, connecting rods, crankshafts, camshafts, flywheels, manifolds, and other parts whose principal identity is as a part of the covered engines.

The PCR applies to machining and dimensional finishing, conditional heat treatment or surface treatment, final cleaning, inspection, and packing. It excludes complete engines, aircraft-engine parts, turbo-jets and turbo-propellers, generic motor-vehicle parts not principally identified as engine parts, remanufactured parts, blank production before receipt at the reporting site, capital equipment, employee travel, use, maintenance, and end-of-life. On-site blank casting or forging requires an additional foreground process and verified atomic exchanges; it must not be hidden inside the purchased blank input.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-spark-ignition-reciprocating-compression-ignition-or-rotary-internal-combustio-a011c638 |
| classification_refs | CPC 3.0: 43151, exact |
| covered_products | New non-aircraft parts principally designed for spark-ignition reciprocating, compression-ignition, or rotary internal-combustion piston engines |
| excluded_products | Complete engines; aircraft-engine parts in CPC 43152; turbine parts; filters; generic vehicle parts; remanufactured parts; loose metal blanks sold without finished engine-part identity |
| representative_product | A conforming finished engine part produced from a purchased engine-part blank |
| production_route | Purchased blank receiving; machining and dimensional finishing; conditional heat or surface treatment; final cleaning, inspection, and packing |
| market_state | New, cleaned, inspected, conforming finished part at factory gate; packaging is recorded as a separate input |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a conforming finished non-aircraft part for a covered internal-combustion piston engine |
| How much | 1 kg net mass of finished conforming engine parts, excluding packaging |
| How well | Meets the declared drawing, material grade, dimensions and tolerances, heat-treatment or coating state, cleanliness requirement, and acceptance-test specification |
| How long or cycle | One completed manufacturing batch or reporting-period production lot at the factory gate; no use-phase service duration is credited |
| reference_flow_link | Net mass of accepted finished parts after final inspection, normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts of spark-ignition reciprocating, compression ignition or rotary internal combustion piston engines `1feb7c65-f70a-45fa-b290-0cdd5f7f56eb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part name and drawing or part number; intended engine type; material grade and blank-forming route; incoming blank state; machining route; heat-treatment state; surface-treatment or coating state; net finished mass; cleanliness and acceptance specification; production site and geography; reporting period; packaging configuration; allocation method; wastewater and waste destinations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | accepted finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished parts after required cleaning and treatment; exclude pallets, corrugated board, removable protective packaging, gauges, fixtures, and rejected parts. |
| `batch_normalization` | all process exchanges | Mass or the row-specific Tiangong property | row-specific reference unit | Aggregate exchanges for the same site, route, product family, and reporting period, then divide by accepted net finished-part mass and express per 1 kg reference product. |
| `electricity_conversion` | purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh and convert to MJ using 3.6 MJ per kWh; disclose meter boundary, voltage level, grid geography, and losses included. |
| `water_mass_conversion` | process-water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer a mass measurement; when water is metered by volume, convert with measured or documented density at the stated reference conditions and retain the original volume record. |
| `packaging_reuse` | reusable pallet input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Allocate only the pallet mass attributable to the reported shipment using verified reuse cycles and load utilization; if reuse is unverified, record the full pallet input. |

## 5. System Boundary

The foreground boundary begins with purchased engine-part blanks as received at the manufacturing site and ends with accepted finished parts and their packing materials at the factory gate. Upstream production and delivery of blanks, electricity, fuels, water, chemicals, and packaging require linked upstream datasets. Direct site wastes and elementary emissions are recorded after internal recovery and before external treatment or release, with destinations and control systems disclosed.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased engine-part blanks at site receipt, with part family, material grade, forming route, supplier, mass, and included upstream processing declared |
| starting_condition_role | Upstream product input and foreground manufacturing start |
| product_classification_scope | Finished non-aircraft parts in CPC 3.0 subclass 43151; CPC 43152 aircraft-engine parts remain outside this PCR |
| recursive_input_rule | A purchased flow already having finished CPC 43151 identity must be treated as an upstream component with its own dataset and must not be relabelled as a blank or counted again as the reference product; dataset-local intermediate transfers remain internal |
| upstream_dataset_requirement | Use geographically, technologically, and materially representative upstream datasets for each purchased blank, energy carrier, water, chemical, and packaging input |
| disclosure | Declare blank material and forming route, included upstream operations, site processes, outsourced treatments, internal recovery, abatement, waste destinations, packaging, exclusions, and allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_rule` | foreground_start | Start at measured receipt of purchased engine-part blanks; on-site casting or forging is an additional foreground process and may not be hidden in the blank input. | `us-epa-metal-products-machinery-2003` |
| `boundary_process_rule` | foreground_processes | Include machining, all on-site heat or surface treatment, final cleaning, inspection, and packing that are needed to meet the declared product specification. | `eu-sf-bat-2024`, `us-epa-metal-products-machinery-2003` |
| `boundary_end_rule` | foreground_end | End at accepted finished-part mass and separately measured packaging at the factory gate; record direct wastes and elementary releases after internal recovery. |  |
| `boundary_exclusion_rule` | excluded_life_cycle_stages | Exclude use, maintenance, end-of-life, capital equipment, employee travel, and processes already represented in linked upstream datasets. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machining` | Machining and dimensional finishing | `required` | Always include for the purchased-blank route; if a finished part needs no machining, this PCR route is not applicable without review | Foreground conversion of purchased blank to machined part | Accepted net finished-part mass |
| `heat_surface_treatment` | Heat treatment and surface treatment | `conditional` | Include every on-site heat treatment, alkaline cleaning, pickling, coating preparation, or surface-finishing operation required by the declared part specification | Conditional foreground treatment | Treated intermediate mass linked to accepted output |
| `final_inspection_packing` | Final cleaning, inspection and packing | `required` | Always include final inspection and packing; include aqueous cleaning rows only when water crosses the process boundary | Foreground acceptance and factory-gate preparation | Accepted net finished-part mass |

### Process: Machining and dimensional finishing (`machining`)

#### Inputs

##### Product flows

###### Purchased engine-part blank (`machining_blank_input`)

The measured blank entering machining is recorded with material grade, forming route, supplier, and incoming condition.

- Selected flow: Engine part blanks `abde866d-f4f6-4226-8f7b-571ea254ec5f`
- Flow property / unit: Mass / kg
- Amount rule: measured as-received blank mass issued to the reported production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`

###### Purchased machining electricity (`machining_electricity`)

Record net electricity delivered to machine tools, coolant systems, extraction, and directly associated machining equipment within the meter boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity attributable to the reported machining lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`

###### Process water used in machining (`machining_process_water`)

Record process water added to water-miscible coolant, chip handling, or machining rinses when it crosses the machining boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water make-up and rinse water attributable to the machining lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Cutting fluid make-up (`machining_cutting_fluid`)

Record the as-supplied cutting-fluid product added to the machining system; declare formulation, concentrate fraction, and recycled-fluid boundary.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchasing, issue, and sump make-up records attributable to the machining lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Machined engine parts (`machined_parts_output`)

Record the measured mass transferred from machining before any conditional heat or surface treatment.

- Selected flow: Machined engine parts `a203f078-d7e0-4345-b18f-9785059b4419`
- Flow property / unit: Mass / kg
- Amount rule: measured machined-part mass released from machining
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_machining_records`

##### Waste flows

###### Metal swarf and chips (`machining_metal_swarf`)

Record metal removed from workpieces and crossing the boundary as segregated swarf or chips after internal fluid drainage and metal recovery.

- Selected flow: Metal swarf and chips `97cead07-5379-4dc0-85a1-d53e89ad0cff`
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched swarf and chip mass, corrected for documented retained fluid when material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Spent machining coolant (`machining_spent_coolant`)

Record discarded coolant leaving the machining system for recovery, treatment, or disposal, separate from aqueous wastewater.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of spent coolant dispatched from the site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Machining wastewater (`machining_wastewater`)

Record the measured aqueous waste stream from machining-fluid bleed, chip drainage, or machining rinse operations; declare composition and destination.

- Selected flow: Machining wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured aqueous machining wastewater crossing the site boundary or entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

##### Elementary flows

###### Residual particulate matter to air (`machining_particulate_air`)

Record measured residual particulate matter released to air after collection and abatement; do not record collected dust here as an elementary emission.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: measured or site-calculated residual particulate release after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_machining_records`
- Sources: `eu-sf-bat-2024`

### Process: Heat treatment and surface treatment (`heat_surface_treatment`)

#### Inputs

##### Product flows

###### Machined parts entering treatment (`treatment_machined_parts_input`)

Record the machined-part mass entering on-site treatment and identify the required heat-treatment or surface-treatment route.

- Selected flow: Machined engine parts `a203f078-d7e0-4345-b18f-9785059b4419`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`

###### Treatment electricity (`treatment_electricity`)

Record electricity delivered to treatment furnaces, pumps, ventilation, rinsing, and directly associated equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity attributable to treated parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `eu-sf-bat-2024`

###### Natural gas for treatment heating (`treatment_natural_gas`)

Record gaseous natural gas combusted in treatment furnaces or directly associated heating equipment when the route uses it.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume attributable to treated parts at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `eu-sf-bat-2024`

###### Process water for treatment (`treatment_process_water`)

Record process water used for bath make-up, quenching, cleaning, or rinsing within the declared treatment route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured treatment-water input attributable to treated parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Sodium hydroxide for alkaline cleaning (`treatment_sodium_hydroxide`)

Record the as-supplied sodium-hydroxide mass used for alkaline cleaning only when this chemistry is present.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchasing and bath make-up records attributable to treated parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Hydrochloric acid for pickling (`treatment_hydrochloric_acid`)

Record as-supplied hydrochloric acid only when the declared route uses it; retain acid concentration and bath make-up records.

- Selected flow: Hydrochloric Acid `964d524a-87f5-4b63-a856-2e31a8f21b67`
- Flow property / unit: Mass / kg
- Amount rule: as-supplied acid mass issued to treatment baths
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated engine-part intermediate (`treated_parts_output`)

Record the mass transferred from the declared heat-treatment or surface-treatment route to final acceptance.

- Selected flow: Treated engine-part intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured treated-part mass released to final inspection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_records`

##### Waste flows

###### Spent hydrochloric-acid pickling solution (`treatment_spent_pickling_acid`)

Record spent hydrochloric-acid bath solution separately from rinse wastewater, with concentration, dissolved-metal content, and destination declared.

- Selected flow: Spent hydrochloric-acid pickling solution
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from the bath for recovery, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Metal-finishing wastewater (`treatment_wastewater`)

Record the aqueous wastewater generated by the declared cleaning, rinsing, pickling, quenching, or surface-treatment sequence, excluding separately removed spent baths.

- Selected flow: Metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater crossing the site boundary or entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

##### Elementary flows

###### Fossil carbon dioxide from treatment fuel (`treatment_fossil_co2_air`)

Record direct fossil carbon dioxide released from treatment-furnace fuel combustion; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from metered fuel and site fuel carbon content or measure the direct release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_records`

### Process: Final cleaning, inspection and packing (`final_inspection_packing`)

#### Inputs

##### Product flows

###### Inspection-ready engine-part intermediate (`final_part_input`)

Record the internal part mass entering final acceptance, whether directly machined or conditionally treated; identify the route and treatment state.

- Selected flow: Inspection-ready engine-part intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_records`

###### Final inspection and packing electricity (`final_electricity`)

Record electricity delivered to final cleaning, measurement, non-destructive testing, inspection, and packing equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered or documented allocated electricity attributable to accepted and rejected parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_records`

###### Process water for final aqueous cleaning (`final_process_water`)

Record process water only when a final aqueous-cleaning step is performed before acceptance.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured final-cleaning water attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Corrugated cardboard packaging (`packing_corrugated_cardboard`)

Record corrugated cardboard crossing the factory gate with the product; omit only when demonstrably absent or replaced by a separately modelled reusable container.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass assigned to shipped accepted parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_records`

###### Wooden pallet (`packing_wooden_pallet`)

Record the attributable mass of wooden pallets used for shipment when this packing route applies.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass allocated using verified reuse cycles and load utilization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished engine parts (`reference_engine_part_output`)

This is the reference product after all specified processing, cleaning, and acceptance checks; packaging mass is excluded.

- Selected flow: Parts of spark-ignition reciprocating, compression ignition or rotary internal combustion piston engines `1feb7c65-f70a-45fa-b290-0cdd5f7f56eb`
- Flow property / unit: Mass / kg
- Amount rule: 1.0 kg by reference-flow normalization from measured accepted net finished-part mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_records`

##### Waste flows

###### Wastewater from final cleaning (`final_cleaning_wastewater`)

Record the conditional aqueous waste stream from final parts cleaning, with cleaning chemistry, contamination, treatment, and destination declared.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured final-cleaning wastewater crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Rejected engine part (`rejected_engine_part`)

Record off-specification whole or partly completed engine parts leaving the foreground as waste, separate from machining swarf.

- Selected flow: Rejected engine part
- Flow property / unit: Mass / kg
- Amount rule: measured rejected-part mass dispatched to recovery, rework outside the boundary, treatment, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine parts
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_records`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared foreground operations | Prefer subdivision, submetering, machine-time records, and route-specific material issue records so exchanges are assigned directly to the reported part family. |  |
| `allocation_residual` | inseparable shared utilities | Allocate residual shared utilities using the most causal measured driver, such as machine time, treatment load, or occupied batch capacity; use mass only when no more causal record exists and disclose the sensitivity. |  |
| `allocation_internal_recovery` | internally recovered coolant, metal, water, or heat | Record only net make-up and net outputs crossing the process boundary; do not create a credit for internal recirculation and retain records proving the recovery loop. | `us-epa-metal-products-machinery-2003` |
| `allocation_exported_scrap` | exported swarf and rejected parts | Treat exported scrap and rejected parts as waste outputs without avoided-burden credit in the foreground result unless the study goal requires another recycling convention; disclose any alternative and test its effect. |  |
| `allocation_packaging_reuse` | reusable pallets | Allocate pallet mass by verified reuse cycles and actual load utilization; apply full pallet mass when those records are unavailable. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_machining_records` | `machining` | all machining inputs and outputs | meter, scale, issue, maintenance, waste-transfer, and emission-control records | lot id; part number; blank mass; accepted mass; electricity; water; cutting-fluid make-up; machined transfer; swarf; spent coolant; wastewater; residual dust | reconcile production, utility, sump, waste, and abatement records to the same lot or reporting period | kg; MJ; m3 as applicable | each lot or meter interval, aggregated monthly at most | representative continuous 12-month period or full shorter campaign with justification | all machining equipment and directly associated extraction serving the declared product | sum same-boundary records, subtract documented internal returns, then normalize by accepted net mass | calibrated scales and meters; invoices; issue records; sump logs; waste manifests; abatement monitoring; mass-balance reconciliation |
| `cp_treatment_records` | `heat_surface_treatment` | all conditional treatment inputs and outputs | batch ticket, meter, bath log, scale, fuel, waste-transfer, and stack-calculation records | treatment route; batch id; input and output mass; electricity; natural gas; water; sodium hydroxide; hydrochloric acid and concentration; spent bath; wastewater; direct fossil CO2 | reconcile treatment tickets, meters, bath additions, waste dispatches, and fuel records by route | kg; MJ; m3 as applicable | each batch or meter interval, aggregated monthly at most | representative continuous 12-month period or full shorter campaign with justification | every on-site heat-treatment and surface-treatment line used for the declared product | aggregate by treatment route, avoid double counting internal bath recirculation, and normalize by accepted net mass | calibrated meters; bath analyses; chemical invoices; fuel records; waste manifests; treatment specification; mass and carbon checks |
| `cp_final_records` | `final_inspection_packing` | final input, utilities, packaging, accepted product, cleaning wastewater, and rejects | scale, inspection, cleaning, packaging issue, shipment, and reject records | route state; input mass; electricity; water; cardboard; pallet mass and reuse cycles; accepted mass; cleaning wastewater; reject mass; acceptance result | reconcile inspection, packing, shipment, and reject records to the same production lot | kg; MJ as applicable | each lot or shipment, aggregated monthly at most | representative continuous 12-month period or full shorter campaign with justification | all final cleaning, inspection, test, and packing operations for the declared product | sum accepted net mass separately from packaging and rejects; normalize all rows by accepted net mass | calibrated scales and meters; inspection release; packaging issue; pallet reuse evidence; shipment records; reject disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = reporting-period row quantity / reporting-period accepted net finished-part mass | row quantity; accepted net finished-part mass | row amount per 1 kg reference product |  |
| `calc_electricity_mj` | all electricity rows | electricity MJ = metered kWh × 3.6 MJ/kWh | metered kWh | electricity in MJ |  |
| `calc_water_mass` | water and wastewater measured by volume | mass = measured volume × documented density at stated reference conditions | volume; density; temperature or reference condition | mass in kg |  |
| `calc_direct_fossil_co2` | `treatment_fossil_co2_air` | calculate direct fossil CO2 from metered fuel and documented carbon content or use a verified site emission calculation; do not include upstream electricity emissions | fuel quantity; fuel composition or verified site factor | direct fossil CO2 mass |  |
| `calc_pallet_allocation` | `packing_wooden_pallet` | attributable pallet mass = pallet mass × shipment load share / verified reuse cycles | pallet mass; load share; reuse cycles | allocated pallet mass |  |
| `calc_mass_reconciliation` | machining and final acceptance | blank input mass = accepted output mass + exported swarf + rejected-part mass + documented inventory change + other individually identified mass outputs, within stated measurement uncertainty | blank, accepted, swarf, rejects, inventory change, other identified outputs | mass-balance difference | `us-epa-metal-products-machinery-2003` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and intermediates | Declare part number, engine type, drawing revision, material grade, forming route, treatment state, and acceptance specification. | released drawing, bill of materials, route card, and inspection release |
| `dq_boundary` | all processes | Use the same site, process boundary, product family, and period for numerator and accepted-mass denominator; document outsourced and upstream processes. | process map, meter map, supplier declarations, and boundary reconciliation |
| `dq_measurement` | mass, energy, water, chemical, waste, and emission records | Use calibrated or verified instruments and preserve original units, conversion factors, and uncertainty or estimation flags. | calibration certificates, meter checks, scale tickets, and calculation workbook |
| `dq_temporal` | foreground inventory | Prefer a continuous 12-month period; justify shorter campaigns and show that start-up, shutdown, maintenance, and reject conditions are represented. | dated production and utility records and representativeness statement |
| `dq_completeness` | atomic exchanges | Reconcile blank mass, accepted mass, swarf, spent fluids, wastewater, rejects, packaging, energy, and conditional treatment chemicals; explain every excluded applicable row. | mass balance, utility reconciliation, waste manifests, and signed completeness review |
| `dq_route_specificity` | conditional treatment and packing rows | Mark each conditional row applicable or not applicable and retain evidence; a zero amount without an applicability statement is incomplete. | route card, treatment specification, cleaning record, and packing instruction |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | Confirm the dataset describes a finished non-aircraft CPC 43151 engine part and that all required qualifiers and the exact reference-flow UUID are present. | `un-cpc-3-0-structure-2025` |
| `validation_reference_amount` | reference flow | Confirm accepted net finished-part output equals 1 kg after normalization and excludes packaging and rejects. |  |
| `validation_inventory_accounting` | process inventory | Confirm every inventory card is one atomic exchange and each applicable row has a measured or calculated amount, unit, collection protocol, and disclosed destination or supply boundary. |  |
| `validation_mass_balance` | machining and final acceptance | Investigate mass-balance differences outside documented measurement uncertainty; do not force balance by inserting an unidentified waste flow. | `us-epa-metal-products-machinery-2003` |
| `validation_energy_water` | electricity, fuel, water, and wastewater | Reconcile meters to the same product period, verify kWh-to-MJ and volume-to-mass conversions, and prevent double counting between machining, treatment, and final cleaning. |  |
| `validation_treatment_route` | conditional treatment | Confirm treatment inputs, wastes, direct fuel emissions, and abatement outputs are present when the route applies and absent only with route evidence. | `eu-sf-bat-2024`, `us-epa-metal-products-machinery-2003` |
| `validation_allocation` | shared operations and reusable pallets | Confirm the causal allocation driver, internal recovery treatment, scrap convention, pallet reuse evidence, and sensitivity are disclosed. |  |
| `validation_unresolved_identity` | UUID-empty rows | Retain the concrete row name and manifest unresolved entry until one exact public state-100 Tiangong flow is verified; do not substitute a proxy. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Product carbon footprint, process LCA, supplier comparison, and lifecyclemodel construction for a declared engine-part family and manufacturing route |
| allowed_use | Use where part identity, material, blank route, treatment state, geography, technology, allocation, and reporting period are representative |
| excluded_use | Complete engines, aircraft-engine parts, remanufactured parts, use-phase performance, end-of-life, or an unqualified average across materially different part families and routes |
| required_metadata | PCR id and version; reference-flow UUID; part and engine identity; material and blank route; site and geography; technology; treatment and packing route; reporting period; upstream dataset links; allocation; cut-offs; data quality; unresolved identities |
| required_quality_disclosure | Primary-data share; meter and scale coverage; temporal and geographic representativeness; mass-balance result; estimation share; wastewater and waste destinations; abatement; allocation sensitivity; pallet reuse evidence; uncertainty |
| update_trigger | Drawing, material, supplier blank route, machining technology, treatment chemistry, energy supply, wastewater treatment, allocation, packing configuration, site, or data age changes that materially affect the result |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-05 | Official CPC 43151 product identity, hierarchy, and separation from aircraft-engine parts in CPC 43152 |
| `eu-sf-bat-2024` | `official_guidance` | Commission Implementing Decision (EU) 2024/2974 of 29 November 2024 establishing BAT conclusions for the smitheries and foundries industry, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ%3AL_202402974, retrieved 2026-09-05 | Finishing and heat-treatment process definitions, treatment energy context, and dust collection from finishing |
| `us-epa-metal-products-machinery-2003` | `official_guidance` | U.S. EPA, Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products & Machinery Point Source Category, EPA-821-B-03-001, February 2003, https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf, retrieved 2026-09-05 | Machining operations, cutting fluids, metal chips, rinsing, cleaning, spent fluids, and machining wastewater process decomposition |
