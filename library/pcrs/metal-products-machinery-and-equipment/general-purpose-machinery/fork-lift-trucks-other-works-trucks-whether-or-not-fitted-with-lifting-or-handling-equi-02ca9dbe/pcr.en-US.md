---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fork-lift-trucks-other-works-trucks-whether-or-not-fitted-with-lifting-or-handling-equi-02ca9dbe
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fork-lift trucks, other works trucks, and railway-station platform tractors

## 1. Scope and Applicability

This PCR covers cradle-to-gate production of new, complete fork-lift trucks, other works trucks with or without lifting or handling equipment, and tractors designed for railway-station platform work. It applies to manually operated or automated industrial trucks with electric or internal-combustion powertrains. It excludes crane-fitted works trucks whose principal function is lifting by crane, separately sold parts, remanufactured trucks, distribution, use, maintenance, and end-of-life. Downstream studies shall add the excluded life-cycle stages explicitly.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fork-lift-trucks-other-works-trucks-whether-or-not-fitted-with-lifting-or-handling-equi-02ca9dbe |
| classification_refs | CPC 3.0:43530 |
| covered_products | Fork-lift trucks; other works trucks with or without lifting or handling equipment; railway-station platform tractors |
| excluded_products | Crane-fitted works trucks classified by their crane function; lifts and conveyors; separately sold parts; remanufactured trucks |
| representative_product | One new, complete, factory-tested industrial truck in its declared delivered configuration |
| production_route | Purchased-material and component receipt; metal fabrication; surface finishing; powertrain and final assembly; factory testing |
| market_state | New complete truck at the manufacturing-site gate, with delivered attachments, traction battery, fluids, and initial fuel explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one new industrial truck capable of the declared lifting, carrying, towing, pushing, stacking, or platform-tractor function |
| How much | One complete truck |
| How well | Conforming to the declared model specification, rated load or towing capacity, lift height where applicable, powertrain, tyre construction, attachments, and acceptance-test result |
| How long or cycle | Factory-gate product; design life and warranted duty shall be disclosed for downstream use but are not normalized in this cradle-to-gate PCR |
| reference_flow_link | Net mass of the same complete truck reported as the reference product output |

| Field | Value |
| --- | --- |
| Reference amount | Measured net mass in kg of one complete delivered truck |
| Reference product flow | Fork-lift trucks, other works trucks whether or not fitted with lifting or handling equipment, tractors of the type used on railway station platforms `16db3897-10b6-48ba-a91a-d4b4bc52f185` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and configuration; industrial-truck function; rated load or towing capacity; lift height where applicable; operator or automation mode; powertrain and energy carrier; traction-battery chemistry, capacity, mass and inclusion; tyre construction; attachments; counterweight inclusion; hydraulic-fluid inclusion; initial-fuel inclusion; factory-gate geography; production period; net-mass method; acceptance-test status |

Missing required qualifiers make a foreground data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the complete delivered configuration after final test; exclude reusable factory handling fixtures and separately reported transport packaging, and disclose battery, attachment, fluid, counterweight, and initial-fuel inclusion. |
| `mu_count_to_mass` | item-count purchase records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass using lot-specific measured net mass or supplier documentation; retain the count, mass factor, lot and uncertainty. |
| `mu_electricity` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh and convert to MJ using 1 kWh = 3.6 MJ; do not add upstream generation emissions as direct factory emissions. |
| `mu_gas_volume` | gaseous inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record meter reference temperature and pressure and convert all gaseous volumes to one disclosed reference condition. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, energy carriers and process auxiliaries received at the manufacturing site |
| starting_condition_role | Foreground manufacturing starts at site receipt; upstream production remains linked through supplier-specific or representative upstream datasets |
| product_classification_scope | New complete products within the semantic boundary above, independent of powertrain, operator mode or optional handling equipment |
| recursive_input_rule | A complete same-category truck purchased for conversion is recorded once as a product input with an upstream PCR-conforming dataset; do not recursively reproduce its manufacturing inventory |
| upstream_dataset_requirement | Every purchased material, component, fuel, electricity and treatment service shall have a geographically and technologically representative upstream dataset and disclosed substitution where supplier data are unavailable |
| disclosure | Declare site, production period, model family, included processes, excluded attributable processes and justification, outsourced operations, allocation, data gaps, and all deviations from the delivered configuration |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate` | cradle-to-gate foreground boundary | Include receipt, controlled metal fabrication, surface preparation and coating, powertrain and final assembly, fluid filling, factory testing, rework, on-site treatment, and directly controlled utilities through release of the finished truck. | `ghg-protocol-product-standard-2011` |
| `sb_upstream` | purchased inputs | Link upstream production and inbound supply datasets without moving them into the foreground unless the reporting organization controls the process. | `ghg-protocol-product-standard-2011` |
| `sb_exclusions` | attributable processes | Disclose and justify every exclusion; an attributable process may be omitted only after the data gap, inability to estimate, and insignificance assessment are documented. | `ghg-protocol-product-standard-2011` |
| `sb_route` | variant-specific processes | Include only processes and atomic flows applicable to the declared configuration; never average electric and internal-combustion routes without a disclosed, representative production-weighted model. | `toyota-industries-materials-handling-equipment` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_fabrication` | Metal fabrication | required |  | Controlled cutting, forming, machining and welding | Per complete truck released to finishing |
| `surface_finishing` | Surface preparation and finishing | required |  | Cleaning, pretreatment, coating and curing | Per complete truck released to assembly |
| `final_assembly` | Powertrain and final assembly | required |  | Component installation, fluid filling and configuration | Per complete truck entering factory test |
| `factory_testing` | Factory testing and release | required |  | Acceptance testing, rework attribution and product release | Per complete accepted truck |

### Process: Metal fabrication (`metal_fabrication`)

#### Inputs

##### Product flows

###### Structural steel sheet (`mf_steel_sheet`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Non-Alloy Steel `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass plus attributable cutting and forming losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mf_inputs`
- Sources:

###### Cast-iron components (`mf_cast_iron`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Cast iron `abfe4e3d-cbaf-5c44-a687-a49d83a0430c`
- Flow property / unit: Mass / kg
- Amount rule: Received cast-iron mass incorporated plus attributable rejected mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mf_inputs`
- Sources:

###### Flux-cored welding wire (`mf_welding_wire`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Issued wire less verified unused return, only when flux-cored welding is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mf_inputs`
- Sources:

###### Fabrication electricity (`mf_electricity`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity converted from kWh under `mu_electricity`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mf_inputs`
- Sources:

###### Cutting oxygen (`mf_oxygen`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory oxygen only when oxy-fuel cutting is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mf_inputs`
- Sources:

##### Waste flows

Record each actual off-site ferrous scrap, spent machining fluid, abrasive or treatment residue as its own waste exchange in the foreground package.

##### Elementary flows

Record measured releases from controlled fabrication equipment as species-specific elementary flows.

#### Outputs

##### Product flows

Internal fabricated assemblies are internal transfers and are not duplicated as external exchanges.

##### Waste flows

##### Elementary flows

### Process: Surface preparation and finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Process water (`sf_process_water`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered water mass used for cleaning, rinsing and bath make-up.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sf_inputs`
- Sources:

###### Sodium hydroxide (`sf_sodium_hydroxide`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass charged, only when used in the declared bath recipe.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sf_inputs`
- Sources:

###### Industrial protective coating (`sf_coating`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Industrial Maintenance Coatings `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- Flow property / unit: Mass / kg
- Amount rule: Coating issued less verified reusable return; declare formulation, solids and application route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sf_inputs`
- Sources:

###### Finishing electricity (`sf_electricity`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity converted from kWh.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sf_inputs`
- Sources:

###### Curing natural gas (`sf_natural_gas`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Standardized metered volume only when natural-gas curing or bath heating is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sf_inputs`
- Sources:

##### Waste flows

Record each spent bath, wastewater stream, coating sludge and spent filter separately by physical state and treatment route.

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from finishing combustion (`sf_co2_fossil`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack mass or calculated fossil-carbon balance for on-site natural-gas combustion; exclude upstream electricity emissions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sf_emissions`
- Sources:

### Process: Powertrain and final assembly (`final_assembly`)

#### Inputs

##### Product flows

###### Assembly electricity (`fa_electricity`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered assembly electricity converted from kWh.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fa_inputs`
- Sources:

###### Hydraulic-fluid fill (`fa_hydraulic_fluid`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Net new hydraulic-fluid mass retained in the delivered truck plus attributable fill loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fa_inputs`
- Sources:

###### Lead-acid traction battery (`fa_lead_acid_battery`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Lead-acid traction battery
- Flow property / unit: Mass / kg
- Amount rule: Delivered battery-pack mass, only for a configuration supplied with a lead-acid traction battery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fa_inputs`
- Sources:

###### Lithium-ion traction battery (`fa_lithium_ion_battery`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Lithium-ion traction battery
- Flow property / unit: Mass / kg
- Amount rule: Delivered battery-pack mass, only for a configuration supplied with a lithium-ion traction battery.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fa_inputs`
- Sources:

###### Solid industrial-truck tyre (`fa_solid_tyre`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Solid rubber industrial-truck tyre
- Flow property / unit: Mass / kg
- Amount rule: Installed tyre mass, only for a configuration fitted with solid or cushion rubber tyres.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fa_inputs`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory testing and release (`factory_testing`)

#### Inputs

##### Product flows

###### Test electricity (`ft_electricity`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered charging and test-bench electricity converted from kWh, only for electrically tested configurations.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ft_inputs`
- Sources:

###### Test diesel (`ft_diesel`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Net diesel consumed in factory acceptance testing, only for diesel configurations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ft_inputs`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete industrial truck (`ft_reference_product`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: Fork-lift trucks, other works trucks whether or not fitted with lifting or handling equipment, tractors of the type used on railway station platforms `16db3897-10b6-48ba-a91a-d4b4bc52f185`
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of the accepted delivered configuration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: One complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources:

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from diesel testing (`ft_co2_fossil`)

This card records one atomic exchange crossing the named foreground process boundary; its amount is obtained under the cited collection protocol.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured exhaust mass or calculated fossil-carbon balance for diesel consumed during factory testing.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per complete accepted truck
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ft_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | shared lines, utilities and rework | Avoid allocation by submetering, batch tracking, process subdivision, or configuration-specific production records. | `ghg-protocol-product-standard-2011` |
| `al_physical` | unavoidable shared burdens | Allocate by the causal physical relationship, such as machine time, metered energy, coating area, weld length, or tested units; mass alone is permitted only when it represents causality. | `ghg-protocol-product-standard-2011` |
| `al_fallback` | no defensible physical relationship | Use economic or another justified relationship only after documenting why physical allocation is infeasible and test sensitivity. | `ghg-protocol-product-standard-2011` |
| `al_waste` | scrap and wastes | Do not allocate manufacturing burdens to outputs without economic value; disclose treatment and any credit method for sold recyclable material. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mf_inputs` | `metal_fabrication` | material and energy inputs | ERP issue/return, invoices, scales, gas and electricity meters | item id; lot; issued and returned quantity; net mass; kWh; gas volume; meter conditions; accepted units | Reconcile lot and submeter records to released fabricated assemblies | kg; kWh; m3 | each lot and monthly | representative 12 consecutive months | all controlled fabrication lines | Sum net consumption and divide by accepted configuration-equivalent trucks | calibrated scale/meter records; ERP reconciliation; scrap balance |
| `cp_sf_inputs` | `surface_finishing` | water, chemical, coating and energy inputs | meters, bath make-up logs, coating issue/return and invoices | water volume; density; chemical concentration; solution mass; coating issue/return; kWh; gas volume; accepted units | Reconcile meters and recipe logs to finished bodies | kg; kWh; m3 | each batch and monthly | representative 12 consecutive months | all preparation and coating lines | Sum attributable inputs and divide by accepted trucks | meter calibration; recipe and inventory reconciliation |
| `cp_sf_emissions` | `surface_finishing` | direct combustion emissions | stack measurements or fuel carbon-balance records | fuel volume; carbon content; oxidation factor; measured CO2; accepted units | Use verified stack data or documented carbon balance | kg | each test or monthly calculation | same period as inputs | all on-site finishing combustion | Sum direct fossil CO2 and divide by accepted trucks | analyzer calibration or signed calculation workbook |
| `cp_fa_inputs` | `final_assembly` | assembly inputs | BOM, supplier declarations, issue/return, fill and electricity meters | component identity; count; net mass; chemistry; capacity; fluid mass; kWh; accepted units | Reconcile as-built serial-number BOM and meters | kg; kWh | each truck and monthly | representative 12 consecutive months | all assembly lines | Sum configuration-specific inputs and divide by accepted trucks | as-built BOM; supplier specification; calibrated fill and energy meters |
| `cp_ft_inputs` | `factory_testing` | test energy inputs | test logs, chargers, fuel issue/return and meters | serial number; test cycle; kWh; fuel mass; rework; pass/fail | Link each test and retest to the truck serial number | kg; kWh | each test | same period as production | all test stations | Include all attributable tests and retests per accepted truck | signed acceptance log; calibrated meter; fuel reconciliation |
| `cp_ft_emissions` | `factory_testing` | direct diesel-test emissions | exhaust measurements or fuel carbon-balance records | fuel mass; carbon content; oxidation factor; measured CO2; serial number | Use verified exhaust data or documented carbon balance | kg | each representative test or monthly | same period as testing | all combustion tests | Sum attributable fossil CO2 per accepted truck | analyzer calibration or signed calculation workbook |
| `cp_product_output` | `factory_testing` | reference product | final scale and release record | serial number; model; configuration; net mass; included battery, fluids, attachments and fuel; pass status | Weigh after final acceptance under `mu_reference_mass` | kg | each truck | same period as inputs | all release points | Report model-specific mean only when individual records are unavailable; retain distribution | scale calibration; signed release and configuration record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | all electricity rows | MJ = metered kWh × 3.6 | metered kWh | electricity in MJ |  |
| `calc_water_mass` | `sf_process_water` | water mass = metered volume × measured or documented density at recorded conditions | volume; density; temperature | kg process water |  |
| `calc_active_naoh` | `sf_sodium_hydroxide` | active NaOH mass = solution mass × measured concentration | solution mass; concentration | kg NaOH |  |
| `calc_direct_co2` | `sf_co2_fossil`; `ft_co2_fossil` | Prefer measured CO2; otherwise apply the documented fuel carbon content and oxidation balance without adding upstream emissions | fuel quantity; carbon content; oxidation factor | kg fossil CO2 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Preserve serial/model identity and every required qualifier. | release record and as-built configuration |
| `dq_completeness` | all foreground processes | Reconcile the complete as-built BOM, energy meters, fuel and chemical inventories, waste manifests, direct emissions, rejects and rework; unlisted actual exchanges remain mandatory. | reconciliation workbook and completeness statement |
| `dq_temporal` | foreground data | Use a representative continuous 12-month period or justify a shorter campaign and seasonality treatment. | dated records and production counts |
| `dq_upstream` | purchased inputs | Document supplier, geography, technology, recycled content where material, dataset age and any proxy. | supplier evidence and dataset mapping |
| `dq_route` | product variants | Keep electric, diesel, LPG, hydrogen, automated, manual and attachment configurations separable; justify aggregation weights. | configuration-specific production records |
| `dq_uncertainty` | calculated and allocated values | Retain meter accuracy, conversion factors, missing-data estimates, allocation drivers and sensitivity results. | calculation workbook and calibration records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | reference flow | Confirm one accepted truck, its measured net mass, Tiangong product UUID and all required qualifiers refer to the same delivered configuration. | `un-cpc-3-0-structure-2025` |
| `vr_boundary` | system boundary | Confirm every controlled required process is present and every excluded attributable process is disclosed and justified. | `ghg-protocol-product-standard-2011` |
| `vr_inventory` | foreground inventory | Confirm every reported row is one atomic exchange and BOM, energy, fuel, water, chemical, waste, emission, reject and rework reconciliations are complete. |  |
| `vr_route` | configuration applicability | Reject averaging across incompatible powertrains or test routes unless production weights and all route-specific inclusions are disclosed. | `toyota-industries-materials-handling-equipment` |
| `vr_allocation` | shared burdens | Confirm subdivision was attempted, the selected driver is causal, and fallback allocation is justified and sensitivity-tested. | `ghg-protocol-product-standard-2011` |
| `vr_uuid` | Tiangong references | Confirm every UUID resolves to the stated public identity, flow type, property and unit group; unresolved rows remain explicit. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Cradle-to-gate product footprinting and lifecycle models for the declared complete industrial-truck configuration |
| allowed_use | Product-system models that preserve model, powertrain, capacity, battery, tyre, attachment, geography, period, boundary, allocation and data-quality qualifiers |
| excluded_use | Whole-life or use-phase comparisons without added use, maintenance and end-of-life models; comparisons across unlike rated functions; an average truck used without representative production weights |
| required_metadata | PCR id; version; site and geography; period; model/configuration; rated function; net mass; powertrain; battery; tyres; attachments; process coverage; allocation; upstream datasets; unresolved items |
| required_quality_disclosure | Primary-data share; temporal, geographic and technological representativeness; meter and scale evidence; BOM and mass reconciliation; data gaps; proxies; allocation and uncertainty |
| update_trigger | Material change in model or rated function, powertrain or battery, delivered configuration, BOM, coating route, plant process, energy supply, allocation, geography, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43530 identity and hierarchy |
| `toyota-industries-materials-handling-equipment` | official_guidance | Toyota Industries, “Materials Handling Equipment,” https://www.toyota-industries.com/products/industrial_vehicles/ | Official product evidence for internal-combustion and electric lift-truck variants, the broad rated-capacity range, and tow tractors |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf | Attributable-process boundary disclosure and allocation hierarchy |
