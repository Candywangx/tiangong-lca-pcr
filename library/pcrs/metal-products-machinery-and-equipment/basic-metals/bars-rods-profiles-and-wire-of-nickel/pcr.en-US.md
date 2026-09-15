---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-profiles-and-wire-of-nickel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Bars, rods, profiles and wire, of nickel

## 1. Scope and Applicability

This PCR governs foreground data packages for nickel bars, rods, profiles, and wire at the manufacturing-site gate. It covers receipt and preparation of nickel-bearing feed or a same-category precursor, mechanical forming by rolling, forging, extrusion, drawing, straightening, or an equivalent declared route, route-required heat treatment and surface finishing, inspection, and release of conforming semi-finished product.

The category includes uncoated nickel and nickel-alloy semi-finished products sold in the stated forms when nickel is the defining commercial material. It excludes nickel ores and concentrates, nickel mattes and other metallurgical intermediates, ferro-nickel, unwrought nickel, nickel powders or flakes, plate, sheet, strip, foil, tube, finished fabricated articles, and dissimilar-metal clad or coated products whose identity is not the nickel semi-finished product. Upstream production of received feed, capital equipment, employee travel, product use, downstream fabrication, and end-of-life are outside the foreground boundary and are represented only by separately linked datasets when required by the study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-profiles-and-wire-of-nickel |
| classification_refs | CPC 3.0: 41522, Bars, rods, profiles and wire, of nickel |
| covered_products | Nickel or nickel-alloy bars, rods, open profiles, and wire in straight lengths or coils, before downstream fabrication into finished articles |
| excluded_products | Ores, concentrates, mattes, metallurgical intermediates, ferro-nickel, unwrought nickel, powders, flakes, plate, sheet, strip, foil, tube, finished articles, and dissimilar-metal clad or coated products |
| representative_product | Conforming nickel wire or rod released at the manufacturing-site gate |
| production_route | Declared sequence of feed preparation and mechanical forming, with heat treatment and surface finishing included only when performed for the represented product |
| market_state | Dry, inspected semi-finished nickel product in the declared form, alloy or grade, dimensions, temper, surface finish, and delivery state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Nickel bar, rod, profile, or wire meeting the declared commercial specification |
| How much | 1,000 kg net mass of conforming product |
| How well | Declared product form, nickel or alloy grade and composition, dimensions and tolerances, temper or heat-treatment condition, surface finish, and conformity criteria |
| How long or cycle | One manufacturing campaign or reporting period; no use-life function is assigned to the semi-finished product |
| reference_flow_link | `out_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Bars, rods, profiles and wire, of nickel `ba8e5505-ab12-42bb-8dc3-4680a6914899` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; nickel or alloy designation and composition basis; dimensions and tolerance; temper or heat-treatment condition; surface finish; manufacturing route; recycled-feed share and accounting method; site and geography; reporting period; delivery state |

When constructing a foreground data package, all required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or equivalent data-package fields. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product, nickel feed, precursor, and nickel scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry mass on calibrated scales; exclude pallets, reels, and transport packaging unless they are part of the sold product mass. |
| `electricity_energy` | electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter readings and convert kWh to MJ using 3.6 MJ per kWh; disclose whether auxiliary and shared line loads are included. |
| `gas_volume` | gaseous natural gas inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered gas volume and the reference temperature and pressure; do not compare or aggregate volumes before conversion to common reference conditions. |
| `water_and_chemical_mass` | process water and sodium hydroxide inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered mass; for solutions disclose concentration and calculate dry chemical mass separately without treating solution mass as pure reagent mass. |
| `wastewater_volume` | nickel-containing surface-treatment wastewater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter the segregated wastewater volume and report nickel concentration, treatment destination, recycled fraction, and reference conditions where material. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received unwrought nickel charge or received nickel bar, rod, profile, or wire precursor at the manufacturing-site gate |
| starting_condition_role | Upstream material whose prior production burden is represented by a linked dataset; only on-site preparation and transformation are foreground operations |
| product_classification_scope | Nickel bars, rods, profiles, and wire represented by the declared category identity; form, composition, and delivery state remain mandatory foreground qualifiers |
| recursive_input_rule | When a received precursor is itself in this PCR category, record it once as `in_semifinished_nickel_precursor`, link its upstream dataset, and do not recursively reapply this PCR to reconstruct that supplier dataset |
| upstream_dataset_requirement | Link composition-, product-state-, technology-, geography-, and time-representative upstream datasets for each received metal input, electricity, natural gas, water, and reagent |
| disclosure | Declare the starting feed state, process route, included and omitted operations, recycled-feed share, internal scrap loops, site boundary, geography, reporting period, and any shared-load allocation |

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `boundary_site_gate` | foreground manufacturing | Include on-site receipt and preparation, forming, route-required heat treatment and surface finishing, inspection, and release through the manufacturing-site gate. | `nickel-institute-11002`; `arya-et-al-2021`; `chen-et-al-2023` |
| `boundary_upstream_links` | received inputs | Exclude production of received metal and utilities from the foreground process but represent it through linked upstream datasets with no double counting. | `iso-14044-2006` |
| `boundary_route_condition` | conditional operations | Include heat treatment, remelting, alkaline cleaning, wet surface treatment, and fuel combustion only when records show that the operation served the represented product. | `nickel-institute-11002`; `chen-et-al-2023` |
| `boundary_downstream` | downstream life cycle | Exclude transport after the declared gate, downstream fabrication into finished articles, use, maintenance, and end-of-life unless the study explicitly expands the system beyond this PCR foreground boundary. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_preparation` | Feed receipt and preparation | required | Always include receipt, identity verification, weighing, cutting, and preparation actually performed at the site. | Foreground feed conditioning | Per 1,000 kg conforming reference product |
| `mechanical_forming` | Mechanical forming | required | Include the actual rolling, forging, extrusion, drawing, straightening, and associated line operations used for the represented product. | Foreground shape transformation | Per 1,000 kg conforming reference product |
| `heat_treatment` | Heat treatment | conditional | Include when annealing, solution treatment, stress relief, or another thermal cycle is performed for the represented product. | Foreground property conditioning | Per 1,000 kg conforming reference product |
| `surface_finishing` | Surface cleaning and finishing | conditional | Include when wet cleaning, alkaline cleaning, pickling, grinding, polishing, coating removal, or another surface operation is performed on site. | Foreground surface conditioning | Per 1,000 kg conforming reference product |
| `product_release` | Inspection and product release | required | Always include final weighing, conformity inspection, and release at the declared site gate. | Foreground product release | 1,000 kg conforming reference product |

### Process: Feed receipt and preparation (`feed_preparation`)

#### Inputs

##### Product flows

###### Unwrought nickel charge (`in_unwrought_nickel`)

Record this input only when the represented route melts or otherwise begins from unwrought nickel at the site. Keep alloy designation, composition, primary or secondary origin, form, supplier, and upstream dataset explicit; no exact Tiangong product-flow UUID was confirmed.

- Selected flow: Unwrought nickel
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of unwrought nickel charged to product-attributed campaigns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_material_records`
- Sources:

###### Same-category nickel precursor (`in_semifinished_nickel_precursor`)

Record a purchased nickel rod, bar, profile, or wire precursor once when direct rolling, drawing, or finishing begins from that state; apply the recursive-input rule and retain supplier product-state evidence.

- Selected flow: Bars, rods, profiles and wire, of nickel `ba8e5505-ab12-42bb-8dc3-4680a6914899`
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of same-category precursor consumed by product-attributed campaigns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_material_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Segregated recyclable feed scrap (`out_feed_scrap`)

Record only separately weighed nickel cuttings or rejected feed transferred to an internal closed loop or external recovery route; disclose composition, contamination, destination, and whether the loop stays inside the foreground system.

- Selected flow: Nickel Scrap `3bf7374b-cece-4fd3-84af-c5252799fd38`
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of segregated nickel scrap leaving feed preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_material_records`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Mechanical forming (`mechanical_forming`)

#### Inputs

##### Product flows

###### Forming-line electricity (`in_forming_electricity`)

Record metered electricity for rolling, forging, extrusion, drawing, straightening, pumps, controls, and attributable auxiliaries used by the represented campaign.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: campaign-attributed metered electricity converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_energy_records`
- Sources:

###### Natural gas for hot forming (`in_forming_natural_gas`)

Record gas only when directly fired heating serves hot forming or reheating within this process; do not include upstream gas-supply emissions as direct foreground emissions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: product-attributed metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_energy_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Segregated recyclable forming scrap (`out_forming_scrap`)

Record product-attributed trim, end cuts, breakage, and off-specification nickel metal that is separately recovered as a recyclable product flow.

- Selected flow: Nickel Scrap `3bf7374b-cece-4fd3-84af-c5252799fd38`
- Flow property / unit: Mass / kg
- Amount rule: measured net dry mass of segregated recyclable nickel scrap from forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_scrap_records`
- Sources:

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from hot forming (`out_forming_co2_fossil`)

Calculate only stack carbon dioxide from fossil natural gas combusted in forming furnaces. Exclude upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated direct fossil carbon dioxide from product-attributed fuel-carbon records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_energy_records`
- Sources:

### Process: Heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Heat-treatment electricity (`in_heat_electricity`)

Record electricity when resistance, induction, vacuum, or auxiliary equipment supplies a declared heat-treatment cycle.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: cycle- or campaign-attributed metered electricity converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_energy_records`
- Sources:

###### Natural gas for heat treatment (`in_heat_natural_gas`)

Record gas only for a gas-fired annealing or other declared heat-treatment cycle serving the represented product.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: cycle- or campaign-attributed metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_energy_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from heat treatment (`out_heat_co2_fossil`)

Calculate only stack carbon dioxide from fossil natural gas combusted for heat treatment. Do not report grid or upstream fuel emissions as direct releases.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated direct fossil carbon dioxide from product-attributed fuel-carbon records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_energy_records`
- Sources:

### Process: Surface cleaning and finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Process water for surface treatment (`in_surface_water`)

Record supplied process water for wet cleaning, rinsing, quenching, or finishing only when those operations are included; subtract verified recirculated water from fresh supplied input without erasing the internal recycle record.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh process-water mass supplied to product-attributed operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`in_surface_sodium_hydroxide`)

Record sodium hydroxide only when an alkaline-cleaning bath is used; report dry sodium-hydroxide mass separately from carrier water and other bath constituents.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: calculated dry sodium-hydroxide mass from replenishment records and verified concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

###### Surface-finishing electricity (`in_surface_electricity`)

Record electricity for pumps, polishing, grinding, bath control, extraction, and other surface-finishing equipment serving the represented product.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: operation-attributed metered electricity converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Nickel-containing surface-treatment wastewater (`out_nickel_wastewater`)

Record the segregated aqueous waste sent to on-site or off-site treatment, together with measured volume, nickel concentration, other declared constituents, treatment destination, and recycled fraction. No exact Tiangong waste-flow UUID was confirmed.

- Selected flow: Nickel-containing surface-treatment wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured segregated wastewater volume leaving the surface-treatment operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

##### Elementary flows

### Process: Inspection and product release (`product_release`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming nickel bars, rods, profiles, or wire (`out_reference_product`)

Report only conforming net product mass released at the declared site gate. The fixed amount establishes reference-flow normalization; measured campaign output and rejected product remain in the retained foreground records.

- Selected flow: Bars, rods, profiles and wire, of nickel `ba8e5505-ab12-42bb-8dc3-4680a6914899`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1,000 kg net conforming reference product after campaign normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared processes and meters | Prefer process subdivision, campaign records, sub-metering, or another demonstrated causal relation before applying allocation. | `iso-14044-2006` |
| `allocation_internal_scrap` | internal nickel scrap loops | Keep internally returned scrap inside the foreground system and retain the energy, material loss, and treatment burdens that generated and reprocessed it; do not report an internal loop as an external co-product. | `iso-14044-2006` |
| `allocation_external_scrap` | nickel scrap leaving the foreground system | Report separately weighed external nickel scrap as an output and disclose its composition, destination, and any recycling-credit method; do not apply avoided-primary-nickel credit automatically. | `iso-14044-2006` |
| `allocation_residual` | inseparable shared burdens | If subdivision and physical causality are not feasible, apply one declared mass, energy, time, or economic allocation basis consistently and disclose the rationale, denominator, affected rows, and sensitivity. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_material_records` | `feed_preparation` | metal feed and preparation scrap | weighbridge, scale, receiving, issue, and scrap-transfer records | lot id; supplier; material form; alloy or grade; composition evidence; gross, tare, and net mass; moisture or contamination; disposition | reconcile calibrated scale records with material ledger and campaign assignment | kg | each receipt, issue, and transfer | complete represented campaigns within reporting period | all feed-preparation areas serving the declared product | sum net product-attributed input and external scrap; keep internal returns as separate loop records | calibration certificates; supplier certificates; lot traceability; reconciliation sign-off |
| `cp_forming_energy_records` | `mechanical_forming` | electricity, natural gas, and direct combustion carbon | electricity meter; gas meter; furnace log; fuel specification | meter ids and readings; timestamps; product campaign; reference conditions; fuel carbon or verified supplier composition; allocation driver | use sub-metered readings where available and reconcile shared loads to production logs | MJ; m3; kg CO2 | each shift or batch with monthly reconciliation | complete represented campaigns within reporting period | forming lines and attributable auxiliaries | subtract validated baseline only when method is documented; allocate remaining shared load using one disclosed causal driver | meter calibration; invoices; furnace logs; allocation worksheet |
| `cp_forming_scrap_records` | `mechanical_forming` | recyclable forming scrap | scrap-bin scale and transfer records | campaign; product grade; scrap type; gross, tare, and net mass; contamination; internal or external destination | weigh each segregated batch and reconcile to material balance | kg | each transfer | complete represented campaigns within reporting period | forming lines serving the declared product | sum net external scrap; retain internal-return quantities separately | scale calibration; transfer ticket; grade-segregation check |
| `cp_heat_energy_records` | `heat_treatment` | electricity, natural gas, and direct combustion carbon | energy meters; furnace cycle logs; fuel specification | cycle id; furnace id; load mass; electricity; gas; reference conditions; fuel carbon or verified composition; timestamps; product assignment | link energy readings and fuel-carbon calculation to each declared thermal cycle | MJ; m3; kg CO2 | each cycle with monthly reconciliation | complete represented heat-treatment cycles | furnaces and attributable auxiliaries serving the declared product | aggregate product-attributed cycles and document shared-furnace allocation | calibration; cycle log; invoice reconciliation; calculation worksheet |
| `cp_surface_treatment_records` | `surface_finishing` | water, sodium hydroxide, electricity, and nickel-containing wastewater | meters; bath make-up and replenishment logs; chemical certificates; wastewater tank and laboratory records | operation id; water and wastewater readings; electricity; reagent quantity and concentration; nickel concentration; recycled volume; treatment destination | reconcile meter and batch records; calculate dry reagent mass from verified concentration | kg; MJ; m3 | each batch or shift with monthly reconciliation | complete represented surface-treatment operations | all included wet and mechanical finishing areas | aggregate product-attributed records; subtract documented internal water recirculation once | calibration; reagent certificate; laboratory report; waste transfer record |
| `cp_release_mass_records` | `product_release` | conforming reference product | final scale, inspection, and release records | product form; alloy or grade; dimensions; temper; finish; gross, tare, and net mass; accepted and rejected mass; release id | weigh released product and link inspection result to campaign | kg | each released lot | complete represented campaigns within reporting period | declared manufacturing site gate | sum accepted net mass and normalize all inventory rows to 1,000 kg | scale calibration; inspection certificate; release authorization; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = product-attributed period amount × 1,000 / accepted net product mass in kg | product-attributed amount; accepted net product mass | amount per 1,000 kg reference product | |
| `calc_electricity_conversion` | electricity inputs | electricity in MJ = metered electricity in kWh × 3.6 | metered kWh | MJ electricity | |
| `calc_dry_sodium_hydroxide` | sodium hydroxide input | dry sodium hydroxide mass = solution mass × verified sodium-hydroxide mass fraction | replenishment solution mass; concentration certificate or test | kg dry sodium hydroxide | |
| `calc_direct_fossil_co2` | direct natural-gas combustion | calculate fossil CO2 from product-attributed fuel quantity, verified carbon content, and documented oxidation basis; do not add upstream fuel or electricity emissions | fuel quantity; reference conditions; carbon content; oxidation basis | kg direct fossil CO2 | |
| `calc_mass_reconciliation` | nickel-bearing material balance | reconcile external nickel-bearing inputs with accepted product, external nickel scrap, declared wastewater nickel, other separately identified outputs, and inventory change; investigate unexplained difference | external feed; accepted product; external scrap; wastewater nickel; other outputs; inventory change | documented nickel-material balance and unexplained difference | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and metal inputs | Retain lot-level product form, alloy or grade, composition basis, dimensions, temper, finish, and supplier or release identity. | supplier certificate; internal specification; inspection and release record |
| `dq_measurement` | mass, energy, gas, water, reagent, and wastewater records | Use calibrated or verified instruments, preserve raw readings and units, and document conversions, reference conditions, concentration bases, and shared-load allocations. | calibration record; meter log; invoice reconciliation; calculation worksheet |
| `dq_temporal` | reporting period | Cover complete represented campaigns and disclose shutdowns, trial batches, abnormal events, and any extrapolation. | production calendar; campaign log; exception register |
| `dq_completeness` | process inventory | Reconcile all included processes and important exchanges; zero values require evidence of absence and conditional rows require an applicability decision. | signed completeness checklist; material and energy reconciliation |
| `dq_geography_technology` | foreground and upstream links | State the site geography and process technology and use upstream datasets representative of feed state, electricity mix, fuel supply, water supply, and reagent delivery. | dataset metadata; supplier and utility records; representativeness assessment |
| `dq_uncertainty` | missing external ranges | Preserve foreground values and explain uncertainty qualitatively until at least two independent boundary-compatible original sources support an external range. | unresolved-range register; review record; sensitivity analysis where material |

## 9. Validation Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Verify that output `out_reference_product` equals exactly 1,000 kg after normalization and carries every required qualifier. | `un-cpc-3-0-structure-2025` |
| `validation_process_applicability` | process map | Verify that all required processes are represented and that every conditional process and conditional exchange has a documented applicability decision. | `nickel-institute-11002`; `arya-et-al-2021`; `chen-et-al-2023` |
| `validation_atomic_flows` | inventory | Verify that each row is one atomic exchange with one direction, flow type, property, unit, amount rule, and route condition; reject umbrella flows and double counting. | `iso-14044-2006` |
| `validation_uuid_identity` | UUID-bearing flows | Verify each stored UUID against public state 100 for baseName, flow type, classification, property, unit group, and product state; unresolved rows remain UUID-empty. | |
| `validation_energy_emissions` | electricity, gas, and carbon dioxide | Verify common unit conversion, gas reference conditions, exclusion of upstream emissions from direct outputs, and agreement between fuel-carbon records and direct fossil CO2. | `iso-14044-2006` |
| `validation_material_balance` | nickel-bearing inputs and outputs | Review the documented nickel-material reconciliation and resolve unexplained differences material to the study before publication. | `iso-14044-2006` |
| `validation_allocation` | shared burdens and scrap | Verify subdivision priority, internal-loop treatment, external-scrap disposition, allocation basis, denominator, and sensitivity without automatic recycling credit. | `iso-14044-2006` |
| `validation_bilingual_alignment` | PCR renderings | Verify that English and Chinese files preserve the same rule ids, process ids, row ids, controlled values, UUIDs, inventory count, and source ids. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for nickel bar, rod, profile, or wire at the declared manufacturing-site gate |
| downstream_use | May serve as a secondary_dataset or background_dataset in downstream product systems when its product form, alloy or grade, route, geography, time, and gate are representative |
| allowed_use | Product carbon-footprint, life-cycle inventory, product-system, and lifecyclemodel studies that preserve the declared reference flow and system boundary |
| excluded_use | Direct representation of upstream nickel extraction or refining, a different nickel product form, dissimilar-metal clad product, finished fabricated article, use phase, or end-of-life without additional modelling |
| required_metadata | PCR id and version; product form; alloy or grade and composition basis; dimensions; temper; finish; route; feed state; recycled-feed share; site and geography; reporting period; technology; gate; allocation; upstream dataset links |
| required_quality_disclosure | Data coverage; measurement and calibration; allocation and shared loads; internal and external scrap; water recycling; gas reference conditions; direct-emission calculation; material-balance difference; unresolved UUIDs; missing external ranges; uncertainty and representativeness |
| update_trigger | Material change in product identity, composition, feed state, forming or heat-treatment route, surface treatment, energy system, recycling practice, allocation, site geography, reporting period, or source and UUID evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 41522 title and classification hierarchy |
| `nickel-institute-11002` | Handbook (`handbook`) | Nickel Institute, Nickel Alloys for Electronics, Publication 11002, https://nickelinstitute.org/media/1740/nickelalloysforelectronics_11002_.pdf (retrieved 2026-09-04) | Nickel-alloy rod and wire forming, annealing, and surface-finish process decomposition |
| `arya-et-al-2021` | Literature (`literature`) | A. Arya et al., Strength and microstructure evolution in nickel during large strain wire drawing, Acta Materialia 221 (2021) 117396, https://doi.org/10.1016/j.actamat.2021.117396 | Pure-nickel rolling, rod and wire drawing, and annealing process sequence |
| `chen-et-al-2023` | Literature (`literature`) | Y. Chen et al., Study on High-Temperature Oxidation Behavior of Platinum-Clad Nickel Composite Wire, Metals 13 (2023) 1264, https://doi.org/10.3390/met13071264 | Nickel rod and wire casting, rolling, drawing, cleaning, and annealing operations; process decomposition only |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://committee.iso.org/standard/38498.html (verified 2026-09-04) | LCI, reporting, review, system-boundary, and allocation framework |
