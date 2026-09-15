---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-ceramic-or-ferrite-magnets
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Permanent ceramic or ferrite magnets

## 1. Scope and Applicability

This PCR applies to finished permanent ceramic or hard-ferrite magnets supplied at the manufacturing plant gate. It covers sintered isotropic or anisotropic ferrite magnets and polymer- or elastomer-bonded ferrite magnets made by injection moulding, extrusion, calendering, compression moulding, or an equivalent declared forming route. It is independent of magnet shape and end application.

The product must obtain its permanent-magnet function primarily from hard ferrite. The PCR excludes permanent metallic magnets, rare-earth magnets, alnico magnets, electromagnets, temporary magnets, soft-ferrite cores and powders, un-fired green bodies, ferrite powder sold as such, and motor, loudspeaker, power-supply, or consumer-electronics assemblies in which the magnet is not the separately declared product. A finishing-only operation on a purchased magnet blank is not a complete foreground system unless the blank has a compatible upstream dataset and the omitted manufacturing stages are disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-ceramic-or-ferrite-magnets |
| classification_refs | CPC 3.0: 46932, Permanent ceramic or ferrite magnets (exact) |
| covered_products | Finished sintered and bonded permanent ceramic or hard-ferrite magnets, including rigid and flexible products, all commercial shapes, and isotropic or anisotropic grades |
| excluded_products | Permanent metallic and rare-earth magnets; alnico magnets; electromagnets; temporary magnets; soft-ferrite components; ferrite powder; pressed green bodies; non-separable magnet-containing assemblies |
| representative_product | A finished, quality-released hard-ferrite permanent magnet at the manufacturing plant gate |
| production_route | Sintered route: ferrite powder preparation, forming with declared orientation method, sintering, finishing, magnetization, testing, and packaging; bonded route: hard-ferrite powder and binder compounding, moulding/extrusion/calendering/compression, finishing where needed, magnetization, testing, and packaging |
| market_state | Finished manufactured product, magnetized or explicitly supplied unmagnetized to a declared customer specification, at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished permanent ceramic or hard-ferrite magnet |
| How much | 1 kg net mass of accepted finished magnets |
| How well | Conforming to the declared ferrite composition or grade, magnetic-property specification, dimensions and tolerances, magnetization state or pattern, and surface condition |
| How long or cycle | One representative production lot or campaign at the manufacturing plant gate |
| reference_flow_link | Net accepted output of `finishing_magnetization_packaging`, excluding reusable transport packaging and rejected product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Permanent ceramic or ferrite magnets `59fbfc86-a725-413c-b3df-d6f7683036d5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturing route (sintered or bonded and forming method); ferrite chemistry and commercial grade; isotropic or anisotropic orientation; magnetization state, direction, and pole pattern; product geometry, dimensions, and tolerances; surface coating or treatment; binder type and formulation share for bonded magnets; in-house or purchased ferrite-powder starting condition; manufacturing site, geography, and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net mass of accepted finished magnets. Exclude rejected product, grinding sludge, offcuts, and all packaging from the reference amount. |
| `count_to_mass` | Output recorded by piece count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass from a lot-specific verified piece mass or from a calibrated scale measurement; retain count, sampled or measured mass, and calculation record. |
| `internal_flow_consistency` | Ferrite powder and magnet blanks transferred between foreground processes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use consistent dry-mass or as-received conventions at both sides of each internal transfer and disclose moisture or binder basis where relevant. Internal transfers must not be counted as external inputs. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of iron oxide, barium or strontium carbonate, additives, and utilities when ferrite powder is made on site; otherwise receipt of quality-qualified hard-ferrite powder. Bonded routes additionally begin with receipt of the declared polymer or elastomer binder and compounding additives. |
| starting_condition_role | Foreground manufacturing gate input; purchased materials require compatible upstream production datasets. |
| product_classification_scope | Finished permanent ceramic or hard-ferrite magnets across sintered and bonded routes, without restriction to one shape or application. |
| recursive_input_rule | A purchased finished magnet within this PCR category is an upstream product input, not a zero-burden internal intermediate. Use its compatible upstream dataset and disclose any rework, remanufacturing, or assembly role. |
| upstream_dataset_requirement | Provide upstream datasets for purchased ferrite powder or its iron-oxide and carbonate precursors, binders, additives, fuels, electricity, water, finishing consumables, coatings, and packaging. Do not substitute metallic-permanent-magnet datasets. |
| disclosure | Declare route, starting material state, powder source, binder formulation for bonded products, orientation method, thermal operations, finishing and coating steps, magnetization state, site, geography, period, and included pollution-control operations. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | Foreground process selection | Include the complete declared sintered or bonded route through quality release and packaging. A dataset must not combine route averages unless the production shares and weighting method are recorded. | `cui-et-al-2022-part-i`; `cui-et-al-2022-part-ii` |
| `boundary_sintered_route` | Sintered magnets | Include ferrite powder preparation when performed on site, forming and any magnetic-field orientation, drying where applicable, sintering and controlled cooling, machining or grinding, magnetization, testing, and packaging. | `cui-et-al-2022-part-i`; `ec-ceramic-bref-2007` |
| `boundary_bonded_route` | Bonded magnets | Include hard-ferrite powder and binder compounding and the declared calendering, injection-moulding, extrusion, compression-moulding, or equivalent forming operation, plus curing or cooling, finishing, magnetization, testing, and packaging where applicable. | `cui-et-al-2022-part-ii` |
| `boundary_environmental_controls` | All included processes | Include energy and water supply at the foreground gate, dust collection, combustion and process emissions, wastewater treatment, and internal recycle or external treatment of powder, sludge, offcuts, rejects, and packaging waste. | `ec-ceramic-bref-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ferrite_powder_preparation` | Ferrite powder preparation | conditional | Required when hard-ferrite powder is synthesized, calcined, milled, or conditioned within the reporting site; otherwise model purchased powder upstream | Foreground precursor preparation | kg quality-qualified ferrite powder transferred to forming |
| `sintered_forming_and_firing` | Sintered magnet forming and firing | conditional | Required for every sintered-product dataset | Foreground sintered-magnet production | kg sintered magnet blanks transferred to finishing |
| `bonded_compounding_and_forming` | Bonded magnet compounding and forming | conditional | Required for every bonded-product dataset | Foreground bonded-magnet production | kg bonded magnet blanks transferred to finishing |
| `finishing_magnetization_packaging` | Finishing, magnetization, testing, and packaging | required | Always required; record any inapplicable operation explicitly | Foreground final product production | kg accepted finished magnet output |

At least one of `sintered_forming_and_firing` and `bonded_compounding_and_forming` is required. If both routes are represented, maintain route-separated inventories before any declared production-share aggregation.

### Process: Ferrite powder preparation (`ferrite_powder_preparation`)

#### Inputs

##### Product flows

###### Ferrite precursor materials and additives (`powder_precursors`)

Record iron oxide, barium carbonate or strontium carbonate, and each composition, sintering, dispersing, or forming additive consumed by on-site powder preparation.

- Selected flow: Foreground-selected product flow for each received precursor; no universal input UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: measured net material issued to the process minus documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg quality-qualified ferrite powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_materials`
- Sources: `cui-et-al-2022-part-i`

###### Powder-preparation energy carriers (`powder_energy`)

Record metered electricity and each fuel used for mixing, granulation, calcination, crushing, milling, classification, drying, material transfer, and emission control.

- Selected flow: Foreground-selected electricity and fuel product flows
- Flow property / unit: Energy / kWh or MJ, preserving the metered unit and conversion factor
- Amount rule: measured process energy or allocated facility energy under `calc_shared_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg quality-qualified ferrite powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_utilities`
- Sources: `ec-ceramic-bref-2007`

###### Powder-preparation water (`powder_water`)

Record freshwater and reused water used in wet milling, slurry handling, washing, and pollution-control operations, keeping withdrawals and internal recirculation separate.

- Selected flow: Foreground-selected water product flow
- Flow property / unit: Volume / m3 or Mass / kg with recorded conversion basis
- Amount rule: metered intake and separately metered or calculated recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg quality-qualified ferrite powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_utilities`
- Sources: `ec-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-qualified hard-ferrite powder (`prepared_ferrite_powder`)

Record ferrite powder released for sintered or bonded forming, with chemistry, dry-mass basis, particle specification, and internal transfer destination.

- Selected flow: Foreground-defined hard-ferrite powder intermediate; not the finished reference-product flow
- Flow property / unit: Mass / kg
- Amount rule: measured released powder mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg quality-qualified ferrite powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_outputs`
- Sources: `cui-et-al-2022-part-i`

##### Waste flows

###### Powder-preparation residues and wastewater (`powder_residues`)

Record collected dust, off-spec powder, filter residues, wastewater, and sludge by treatment destination, including quantities internally recycled.

- Selected flow: Foreground-selected waste flow for each residue or wastewater stream
- Flow property / unit: Mass / kg; wastewater may use m3 when concentration and density basis are retained
- Amount rule: measured transfer, treatment, or inventory-change record by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg quality-qualified ferrite powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_powder_outputs`
- Sources: `ec-ceramic-bref-2007`

##### Elementary flows

###### Direct calcination and powder-handling emissions (`powder_direct_emissions`)

Record each measured or permitted direct air or water emission separately, including combustion gases, particulate matter, and composition-dependent pollutants when present.

- Selected flow: Foreground-selected elementary flow for each reported substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: stack or discharge measurement, validated engineering calculation, or regulatory report attributable to this process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg quality-qualified ferrite powder output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_powder_outputs`
- Sources: `ec-ceramic-bref-2007`

### Process: Sintered magnet forming and firing (`sintered_forming_and_firing`)

#### Inputs

##### Product flows

###### Hard-ferrite powder and forming aids (`sintered_powder_and_aids`)

Record transferred or purchased hard-ferrite powder, water, binder, lubricant, and other forming aids, with wet- or dry-pressing and magnetic-orientation conditions identified.

- Selected flow: Foreground-selected product flow for each powder and forming input
- Flow property / unit: Mass / kg
- Amount rule: measured net input to the sintered route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sintered magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sintered_inputs`
- Sources: `cui-et-al-2022-part-i`

###### Sintered-route electricity and fuels (`sintered_energy`)

Record electricity and each fuel for pressing, dewatering or drying, sintering, controlled cooling, conveying, and emission control.

- Selected flow: Foreground-selected electricity and fuel product flows
- Flow property / unit: Energy / kWh or MJ, preserving metered unit and conversion factor
- Amount rule: measured process energy or allocated facility energy under `calc_shared_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sintered magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sintered_inputs`
- Sources: `cui-et-al-2022-part-i`; `ec-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sintered hard-ferrite magnet blanks (`sintered_blanks`)

Record quality-accepted sintered blanks transferred to finishing, including route, orientation, and dry-mass basis.

- Selected flow: Foreground-defined sintered hard-ferrite magnet intermediate; not the finished reference-product flow
- Flow property / unit: Mass / kg
- Amount rule: measured accepted blank mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sintered magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sintered_outputs`
- Sources: `cui-et-al-2022-part-i`

##### Waste flows

###### Sintered-route rejects, dust, sludge, and wastewater (`sintered_losses`)

Record green and fired rejects, collected dust, spent filters, sludge, and wastewater by internal recycle, external recovery, treatment, or disposal destination.

- Selected flow: Foreground-selected waste flow for each material and treatment route
- Flow property / unit: Mass / kg; wastewater may use m3 with retained concentration and density basis
- Amount rule: measured reject, collection, and transfer records by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sintered magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sintered_outputs`
- Sources: `ec-ceramic-bref-2007`

##### Elementary flows

###### Direct sintering and forming emissions (`sintered_direct_emissions`)

Record direct stack and fugitive emissions by substance and compartment, including fuel-combustion emissions, particulate matter, and emissions from removal of organic forming aids when applicable.

- Selected flow: Foreground-selected elementary flow for each reported substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measurement, validated engineering calculation, or regulatory record attributable to the sintered route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sintered magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sintered_outputs`
- Sources: `ec-ceramic-bref-2007`

### Process: Bonded magnet compounding and forming (`bonded_compounding_and_forming`)

#### Inputs

##### Product flows

###### Hard-ferrite powder, binder, and compounding additives (`bonded_materials`)

Record ferrite powder, polymer or elastomer binder, and each additive used in the declared formulation; retain formulation mass fractions and supplier lot identities.

- Selected flow: Foreground-selected product flow for each ferrite powder, binder, and additive
- Flow property / unit: Mass / kg
- Amount rule: measured net material issued to compounding and forming minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bonded magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bonded_inputs`
- Sources: `cui-et-al-2022-part-ii`

###### Bonded-route electricity and thermal energy (`bonded_energy`)

Record electricity and thermal energy for compounding, pelletizing, mould heating, injection, extrusion, calendering or compression, curing or cooling, and pollution control.

- Selected flow: Foreground-selected electricity and energy-carrier product flows
- Flow property / unit: Energy / kWh or MJ, preserving metered unit and conversion factor
- Amount rule: measured process energy or allocated facility energy under `calc_shared_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bonded magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bonded_inputs`
- Sources: `cui-et-al-2022-part-ii`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bonded hard-ferrite magnet blanks (`bonded_blanks`)

Record released moulded, extruded, calendered, or compression-bonded blanks, including binder formulation, orientation method, and transfer mass.

- Selected flow: Foreground-defined bonded hard-ferrite magnet intermediate; not the finished reference-product flow
- Flow property / unit: Mass / kg
- Amount rule: measured accepted blank mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bonded magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bonded_outputs`
- Sources: `cui-et-al-2022-part-ii`

##### Waste flows

###### Bonded-route purge, trim, and off-spec material (`bonded_losses`)

Record compounding residues, moulding purge, edge trim, cuttings, and off-spec product by internal recycle, external recovery, or disposal route.

- Selected flow: Foreground-selected waste flow for each material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured collection and transfer records net of documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bonded magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bonded_outputs`
- Sources: `cui-et-al-2022-part-ii`

##### Elementary flows

###### Direct bonded-route emissions (`bonded_direct_emissions`)

Record direct volatile, particulate, or other reported emissions from compounding, heating, curing, forming, and pollution-control operations by substance and compartment.

- Selected flow: Foreground-selected elementary flow for each reported substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measurement, validated engineering calculation, or regulatory record attributable to the bonded route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bonded magnet blanks released to finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bonded_outputs`
- Sources: `cui-et-al-2022-part-ii`; `ec-ceramic-bref-2007`

### Process: Finishing, magnetization, testing, and packaging (`finishing_magnetization_packaging`)

#### Inputs

##### Product flows

###### Route-specific magnet blanks (`magnet_blanks`)

Record sintered or bonded blanks transferred from the declared route. Do not combine internal transfer mass with purchased finished magnets.

- Selected flow: `sintered_blanks` or `bonded_blanks`, with route identity retained
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass received by finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `cui-et-al-2022-part-i`; `cui-et-al-2022-part-ii`

###### Finishing consumables, coating materials, water, and packaging (`finishing_materials`)

Record grinding or cutting media, water, cleaning agents, coating materials, adhesives, and primary and secondary packaging when used.

- Selected flow: Foreground-selected product flow for each consumed material
- Flow property / unit: Mass / kg or Volume / m3 for water with retained conversion basis
- Amount rule: measured net consumption by material and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `ec-ceramic-bref-2007`

###### Finishing and magnetization electricity (`finishing_energy`)

Record electricity for cutting, grinding, cleaning, coating or curing, magnetization, inspection, conveying, and packaging.

- Selected flow: Foreground-selected electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: measured process electricity or allocated facility electricity under `calc_shared_energy`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `cui-et-al-2022-part-i`; `ec-ceramic-bref-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished permanent ceramic or ferrite magnets (`reference_product`)

Record only magnets released after dimensional and magnetic-quality checks, preserving declared route and all required qualifiers.

- Selected flow: Permanent ceramic or ferrite magnets `59fbfc86-a725-413c-b3df-d6f7683036d5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: net measured mass of accepted finished product; normalized to 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_release`
- Sources: `iec-60404-8-1-2023`

##### Waste flows

###### Finishing rejects, offcuts, grinding residues, and wastewater (`finishing_losses`)

Record off-spec magnets, cuttings, collected dust, grinding sludge, spent abrasives, wastewater, coating residues, and packaging waste by destination and internal recycle status.

- Selected flow: Foreground-selected waste flow for each material and treatment route
- Flow property / unit: Mass / kg; wastewater may use m3 with retained concentration and density basis
- Amount rule: measured collection, transfer, and treatment records net of documented internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `ec-ceramic-bref-2007`

##### Elementary flows

###### Direct finishing and coating emissions (`finishing_direct_emissions`)

Record direct particulate, volatile, or waterborne emissions from finishing and coating by substance and compartment when present.

- Selected flow: Foreground-selected elementary flow for each reported substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measurement, validated engineering calculation, or regulatory record attributable to finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished magnet output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `ec-ceramic-bref-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Multi-product equipment and shared operations | First avoid allocation by subdivision, separate metering, campaign records, or expansion where appropriate. Record the isolated inputs and outputs attributable to the declared magnet product. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_physical` | Shared burdens that cannot be subdivided | Allocate by a documented causal physical relationship, such as equipment time, metered energy, throughput, or treated mass, when it represents the burden driver. Do not automatically allocate all burdens by product mass. | `eu-pef-2021-2279` |
| `allocation_other` | No defensible physical relationship | Use another relationship, including economic allocation only as a last documented choice; disclose prices, period, products, rationale, and a sensitivity result against a plausible physical basis. | `eu-pef-2021-2279` |
| `recycle_and_rework` | Internal powder, trim, rejects, and rework | Subtract only the quantity demonstrably returned to the same foreground process from external waste output. Retain the energy, water, emissions, and losses caused by recovery and reprocessing; do not credit internal recycle as an avoided virgin product. | `ec-ceramic-bref-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_powder_materials` | `ferrite_powder_preparation` | precursor materials and additives | purchase, warehouse issue, return, and formulation records | material id; supplier lot; chemistry; moisture basis; gross issue; return; unit | reconcile calibrated scales and inventory transactions to each powder lot | kg | each lot; monthly reconciliation | full reporting period | all on-site powder lines in scope | net issued mass by material divided by released powder mass | calibration records; supplier specification; inventory reconciliation |
| `cp_powder_utilities` | `ferrite_powder_preparation` | electricity, fuels, and water | meters, fuel invoices, and operating logs | meter id; start/end reading; fuel quantity; water withdrawal; recirculation; operating hours | direct submetering preferred; otherwise apply `calc_shared_energy` | kWh; MJ; m3 | continuous or each batch; monthly reconciliation | full reporting period | included powder preparation and controls | sum by utility, subtract verified exports, normalize to released powder | meter calibration; invoice reconciliation; allocation log |
| `cp_powder_outputs` | `ferrite_powder_preparation` | powder output, residues, wastewater, and emissions | scale tickets, transfer logs, waste manifests, stack/discharge tests | powder mass; dry basis; residue mass; destination; wastewater volume; substance; concentration; flow rate | weigh outputs and use validated monitoring or regulatory calculation for emissions | kg; m3 | each transfer; monitoring frequency required by permit | full reporting period | included powder line and control devices | aggregate by output, destination, substance, and compartment | scale calibration; chain of custody; laboratory and permit reports |
| `cp_sintered_inputs` | `sintered_forming_and_firing` | powder, aids, water, electricity, and fuels | batch sheets, warehouse issues, meters, and kiln logs | powder lot; additive; water; meter readings; fuel; press route; orientation; kiln cycle | reconcile batch recipe and utility records to released blank lots | kg; kWh; MJ; m3 | each batch or kiln cycle | full reporting period | all included sintered lines | aggregate by declared product grade and route before normalization | recipe approval; meter calibration; kiln trace |
| `cp_sintered_outputs` | `sintered_forming_and_firing` | blanks, rejects, waste, wastewater, and emissions | transfer weights, reject logs, waste manifests, monitoring records | blank mass; reject stage; recycle mass; waste destination; wastewater; emitted substance | weigh transfers and losses; calculate monitored emissions from retained raw measurements | kg; m3 | each batch or transfer; monitoring frequency required by permit | full reporting period | all included sintered lines and controls | aggregate separately by product, recycle, treatment route, substance, and compartment | scale calibration; mass reconciliation; laboratory and permit reports |
| `cp_bonded_inputs` | `bonded_compounding_and_forming` | ferrite powder, binder, additives, and energy | formulation, issue, return, meter, and machine logs | powder lot; binder type; additive; issued/returned mass; machine energy; cycle or run time | reconcile approved formulation and measured consumption to each product run | kg; kWh; MJ | each compounding or forming run | full reporting period | all included bonded-magnet lines | aggregate by formulation and forming route before normalization | formulation approval; supplier specification; meter and scale calibration |
| `cp_bonded_outputs` | `bonded_compounding_and_forming` | blanks, purge, trim, rejects, and emissions | transfer weights, scrap logs, recycling records, monitoring records | accepted blank mass; purge; trim; reject; recycle; destination; substance; concentration | weigh all material outputs and calculate emissions from retained measurements | kg | each run or transfer; monitoring frequency required by permit | full reporting period | all included bonded-magnet lines and controls | aggregate separately by output, recycle, waste route, substance, and compartment | scale calibration; scrap reconciliation; laboratory or permit report |
| `cp_finishing_inputs` | `finishing_magnetization_packaging` | blanks, consumables, water, electricity, and packaging | transfer, issue, return, meter, and work-order records | blank mass; consumable; coating; water; electricity; packaging; work order | reconcile line inputs and utility meters to quality-released lots | kg; kWh; m3 | each lot; monthly reconciliation | full reporting period | all included finishing, magnetization, and packaging lines | net consumption by material and route divided by accepted output | calibration; work-order reconciliation; approved bill of materials |
| `cp_finishing_outputs` | `finishing_magnetization_packaging` | rejects, residues, wastewater, and direct emissions | reject logs, waste manifests, discharge and air-monitoring records | reject mass; offcut; sludge; wastewater; destination; substance; concentration; flow rate | weigh transfers and calculate releases from validated measurements | kg; m3 | each transfer; monitoring frequency required by permit | full reporting period | included finishing lines and controls | aggregate by route, destination, substance, and compartment | scale calibration; chain of custody; laboratory and permit reports |
| `cp_quality_release` | `finishing_magnetization_packaging` | accepted reference product and specification evidence | calibrated scale, lot release, dimensional inspection, and magnetic test records | lot id; route; net mass; count; grade; dimensions; tolerance; magnetic test; magnetization pattern; coating; acceptance status | weigh accepted output and link it to released inspection and magnetic-test records | kg | each released lot | full reporting period | all product lines represented by the dataset | sum accepted net mass only; preserve route-separated totals | scale calibration; inspection-system calibration; signed release record; test report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output` | Reference product | Sum accepted net lot mass after quality release; exclude packaging and all rejected or reworked mass. Normalize the inventory by this mass. | accepted lot masses; rejection and rework status | kg accepted finished magnet and normalization denominator | `iec-60404-8-1-2023` |
| `calc_material_consumption` | Material inputs | Net consumed mass = opening stock + receipts - closing stock - documented returns or transfers out; reconcile to lot-level issues where available. | inventory and lot issue records | kg net material consumed by input | `iso-14044-2006` |
| `calc_shared_energy` | Shared utilities | Prefer direct submetering. If unavailable, shared utility = total metered utility multiplied by the documented causal driver share after excluding out-of-scope loads. | meter total; out-of-scope loads; equipment time, throughput, or other causal driver | kWh or MJ attributable to the product | `eu-pef-2021-2279` |
| `calc_direct_emission` | Stack and discharge measurements | Emitted mass = validated concentration multiplied by corrected flow and operating time, with unit, moisture, temperature, pressure, and detection-limit treatment retained. | concentration; flow; operating time; correction data | kg substance by compartment | `ec-ceramic-bref-2007` |
| `calc_route_weighting` | Dataset representing more than one route | Aggregate only after separate route inventories are complete; weighted amount = sum(route amount multiplied by accepted-output share). | route-specific normalized inventories; accepted output by route | production-share-weighted inventory | `iso-14044-2006` |
| `calc_mass_balance` | Each process and complete foreground system | Reconcile material inputs with product outputs, externally transferred waste, measured releases, internal recycle, and stock change using a consistent moisture and binder basis; investigate rather than force-close residuals. | all material inputs and outputs; inventory changes | documented mass-balance residual and explanation | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Link each represented lot to route, chemistry or grade, orientation, magnetization state or pattern, geometry, tolerance, coating, and bonded formulation where relevant. | signed lot release and product specification |
| `dq_technology` | Process coverage | Demonstrate that the selected processes and forming method represent the actual sintered or bonded technology; report production shares rather than substituting an unrepresentative route. | process map, work orders, route-separated production totals |
| `dq_time` | All foreground data | Use a continuous, representative reporting period, normally at least 12 months, or justify a shorter campaign and document seasonality, downtime, and abnormal operation. | meter coverage, production calendar, exception log |
| `dq_geography` | Site and upstream data | Record manufacturing site and geography and select upstream electricity, fuel, water, material, and treatment datasets that match the represented supply situation. | site metadata, supplier origin, dataset-selection record |
| `dq_completeness` | Inputs, outputs, and controls | Reconcile purchase, meter, production, reject, waste, wastewater, and emission records; document missing records and exclusions without using an unsupported zero. | completeness matrix and mass/energy reconciliation |
| `dq_measurement` | Foreground records | Use calibrated meters and scales and validated laboratory or regulatory methods; preserve raw readings, units, conversions, detection limits, and uncertainty. | calibration certificates, laboratory reports, calculation workbook |
| `dq_allocation` | Shared or multi-output processes | Retain subdivision evidence, driver data, allocation factors, and sensitivity results required by the selected allocation rule. | meter map, driver calculation, allocation and sensitivity record |
| `dq_external_data` | Upstream and treatment datasets | Record dataset name, version, geography, reference year, technology, provider, and any substitution or proxy rationale. | dataset register and representativeness review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require the exact finished-product flow UUID, Mass property UUID, Units of mass group UUID, kg unit, and all required qualifiers; reject metallic-magnet, green-body, ferrite-powder, or generic magnet flow substitutions. | `iec-60404-8-1-2023` |
| `validate_route_completeness` | Process map | Require exactly identified sintered, bonded, or separately weighted mixed-route coverage; require the corresponding forming process and the common finishing, magnetization, testing, and packaging process. | `cui-et-al-2022-part-i`; `cui-et-al-2022-part-ii` |
| `validate_internal_transfers` | Powder and blank flows | Confirm that internal ferrite powder and blank transfers balance between processes and are not also counted as purchased external inputs or final products. | `iso-14044-2006` |
| `validate_mass_balance` | Each process and full system | Require a documented mass balance on consistent moisture and binder bases; flag unexplained residuals and any unsupported zero for waste or emissions. | `iso-14044-2006` |
| `validate_energy_and_controls` | Thermal and forming operations | Require electricity, every used fuel, water where used, pollution-control utilities, collected residues, wastewater, and direct emissions or an evidence-backed not-applicable determination. | `ec-ceramic-bref-2007` |
| `validate_quality_release` | Accepted finished output | Require lot-level dimensional and magnetic-property test evidence appropriate to the declared grade and magnetization state, and exclude rejected or unreleased product from the reference mass. | `iec-60404-8-1-2023` |
| `validate_allocation` | Shared and multi-output processes | Require the allocation hierarchy, causal driver, factors, period, affected outputs, and sensitivity disclosure; fail unexplained mass-only or economic allocation. | `eu-pef-2021-2279` |
| `validate_data_quality` | Dataset package | Require technological, geographical, temporal, completeness, precision, and uncertainty disclosures and the evidence listed in section 8. | `eu-pef-2021-2279`; `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for finished permanent ceramic or hard-ferrite magnets |
| downstream_use | May be published as a `secondary_dataset` and used as a `background_dataset` for motors, loudspeakers, power supplies, consumer electronics, and other systems when product and route qualifiers match |
| allowed_use | Cradle-to-gate or broader product-system studies that add compatible upstream material and energy datasets and downstream transport, assembly, use, and end-of-life processes according to the study goal |
| excluded_use | Substitution for metallic, rare-earth, alnico, electromagnet, soft-ferrite, powder, green-body, or magnet-containing assembly datasets; shape- or grade-specific claims without matching qualifiers; use-phase or end-of-life claims not modelled downstream |
| required_metadata | PCR id; exact reference-flow UUID; route and forming method; ferrite chemistry and grade; orientation; magnetization state and pattern; geometry and tolerance; coating; binder and formulation share for bonded magnets; starting material state; site; geography; reference period; production volume; allocation; upstream dataset register |
| required_quality_disclosure | Meter and scale coverage; calibration; lot and supplier coverage; route shares; mass and energy reconciliation; waste and emissions coverage; allocation and sensitivity; technology, geography, time, completeness, precision, uncertainty, exclusions, proxies, and data gaps |
| update_trigger | Material change in ferrite chemistry or grade, binder formulation, forming or orientation method, kiln or curing technology, fuel or electricity supply, finishing or coating, magnetization specification, site, allocation, pollution control, upstream datasets, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-60404-8-1-2023` | standard | IEC 60404-8-1:2023, Magnetic materials - Part 8-1: Specifications for individual materials - Permanent magnet (magnetically hard) materials. https://webstore.iec.ch/en/publication/68440 (accessed 2026-08-09) | Finished-product magnetic-property and dimensional-tolerance quality declarations |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines. https://www.iso.org/standard/38498.html (confirmed current in 2022; accessed 2026-08-09) | LCI scope, inventory consistency, allocation, mass balance, data quality, and reporting framework |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (accessed 2026-08-09) | Functional unit, system boundary, allocation hierarchy, representativeness, data quality, and disclosure |
| `ec-ceramic-bref-2007` | official_guidance | European Commission, Reference Document on Best Available Techniques in the Ceramic Manufacturing Industry, August 2007. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf (accessed 2026-08-09) | Technical-ceramic process decomposition; energy and water inputs; dust, combustion emissions, wastewater, residues, finishing, and pollution-control coverage |
| `cui-et-al-2022-part-i` | literature | Cui, J. et al. (2022), Manufacturing Processes for Permanent Magnets: Part I-Sintering and Casting, JOM 74, 1279-1295. https://doi.org/10.1007/s11837-022-05156-9 | Ferrite product scope and sintered-route powder preparation, forming, sintering, machining, magnetization, and testing |
| `cui-et-al-2022-part-ii` | literature | Cui, J. et al. (2022), Manufacturing Processes for Permanent Magnets: Part II-Bonding and Emerging Methods, JOM 74, 2492-2506. https://doi.org/10.1007/s11837-022-05188-1 | Bonded ferrite materials and calendering, injection moulding, extrusion, compression bonding, finishing, and route distinctions |
