---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.bridges-bridge-sections-towers-and-lattice-masts-of-iron-or-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bridges, bridge sections, towers and lattice masts, of iron or steel

## 1. Scope and Applicability

This PCR covers factory fabrication of iron or steel bridges, bridge sections, towers, and lattice masts supplied as transportable structural products. It applies to complete shop-fabricated products and identifiable factory-fabricated sections at the manufacturer's gate, whether uncoated, painted, thermally sprayed, or hot-dip galvanized, provided the delivered product state is declared.

The foreground boundary includes receiving and handling of purchased steel and auxiliaries; marking, cutting, drilling, forming, machining, welding, bolting and assembly performed by the manufacturer; route-specific surface cleaning and corrosion protection; inspection, repair performed before release, internal movement, and preparation for factory-gate dispatch. Purchased material production is represented by linked upstream datasets.

This PCR excludes concrete decks and foundations, cables and mechanical/electrical equipment not permanently incorporated by the reporting manufacturer, construction-site erection, civil works, installation services, outbound distribution after the factory gate, use, maintenance, demolition, and end-of-life treatment. A constructed bridge asset, a structural-steel erection service, and a general bridge-construction service are different product-system boundaries.

The CPC title establishes classification identity, while this semantic boundary establishes the canonical PCR identity. The same methodology is applicable to the covered bridge and tower/mast products because they share mass-based structural-steel fabrication, joining, finishing, inspection, and factory-gate data-production rules. Product subtype and actual fabrication route remain mandatory qualifiers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.bridges-bridge-sections-towers-and-lattice-masts-of-iron-or-steel |
| classification_refs | CPC 3.0: 42110 (exact classification context) |
| covered_products | Factory-fabricated iron or steel bridges; bridge sections; towers; lattice masts; permanently incorporated shop-applied fasteners and corrosion-protection layers when supplied with those products |
| excluded_products | Constructed bridge assets; elevated highways; structural-steel erection and bridge-construction services; prefabricated buildings; residual structural-metal products outside this category; temporary transport fixtures; site installation, use, maintenance and end-of-life services |
| representative_product | A released factory-fabricated structural-steel bridge section or tower/mast section ready for downstream transport and erection |
| production_route | Drawing-controlled receipt of steel plate and sections, cutting/forming/machining, welding or mechanical joining, route-specific surface preparation and protection, inspection and factory release |
| market_state | Uncoated weathering steel, shop-primed or painted steel, thermally sprayed steel, or hot-dip galvanized steel at the manufacturer's gate; declared per dataset |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a factory-fabricated load-bearing iron or steel bridge, bridge section, tower, or lattice mast product ready for the declared downstream transport and erection scope |
| How much | 1,000 kg net mass of released product at the factory gate |
| How well | Conforming to the declared drawings, steel grades, dimensional tolerances, joint and weld requirements, inspection status, and corrosion-protection specification |
| How long or cycle | One released fabrication lot at the factory gate; no service-life claim is included because the covered output is an intermediate structural product |
| reference_flow_link | 1,000 kg of the declared covered product, normalized from lot-specific released net mass |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net released product mass |
| Reference product flow | Bridges, bridge sections, towers and lattice masts, of iron or steel `4a0df357-537a-4fce-aa35-87678778a6e4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; complete product or section scope; drawing and revision; steel grade and applicable material specification; net product mass method; fabrication and joining route; weld process and consumable classification; corrosion-protection state and coating system; permanent fastener inclusion; factory-gate release condition; manufacturing geography; reporting period; supplier and recycled-content disclosure where available |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate the released net mass of permanent product components, including permanent fasteners and shop-applied metallic or paint coatings; exclude reusable lifting and transport fixtures and separately shipped installation consumables. |
| `mass_input_consistency` | Steel, welding consumables, chemicals, coatings and scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record physical mass crossing the foreground boundary. For solutions or formulated coatings, record delivered product mass and declare concentration, solids content, density conversion, and unused return separately where relevant. |
| `metered_electricity` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the original metered energy unit and apply an auditable exact unit conversion to MJ; do not derive electricity from cost. Declare grid, voltage level, geography, losses boundary, and any on-site generation or export separately. |
| `gas_reference_conditions` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume only with the temperature, pressure, wet/dry basis and meter correction or supplier reference conditions needed to make the volume reproducible. |
| `fuel_and_water_basis` | Diesel fuel and process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered or consumed mass. Any volume-to-mass conversion must use lot- or supplier-specific density and retain the source record and reference conditions. |
| `no_cross_route_averaging` | Route-conditional inputs and outputs | Declared row property | Declared row unit | Mark a conditional row not applicable when its route is absent. Do not average galvanizing, paint, welding, cutting, fuel, or water exchanges across products that did not undergo those operations. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel plate, structural sections, permanent bought-in components, welding consumables, auxiliaries, coating materials, fuels and utilities as received at the reporting factory boundary |
| starting_condition_role | Purchased-input gate for foreground factory fabrication |
| product_classification_scope | Factory-fabricated iron or steel bridges, bridge sections, towers and lattice masts; not completed construction assets or erection/construction services |
| recursive_input_rule | If a purchased bridge section, tower section, or other input is itself within this PCR category, record it as a distinct product input with supplier quantity and an upstream dataset ending at that supplier's gate; do not silently fold it into the reporting factory's own output or create a self-referential aggregate. |
| upstream_dataset_requirement | Link each purchased material, utility, fuel, chemical and externally fabricated component to a geographically and technologically representative upstream dataset; disclose proxies and supplier-specific data gaps. |
| disclosure | Declare included factory operations, outsourced operations, coating route, joining route, treatment of internal returns, allocation method, cut-offs, added atomic exchanges, factory location, reporting period, and the exact factory-gate release condition. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | Include all material, energy, water, waste and direct-emission exchanges attributable to receiving, fabrication, joining, route-specific finishing, inspection, repair before release, internal movement and factory-gate dispatch preparation. | `eu-pef-2021-2279`; `fhwa-bridge-welding-reference-manual-2020` |
| `boundary_outsourced_steps` | outsourced_fabrication | Include outsourced cutting, forming, welding, heat treatment, surface preparation or coating that is part of the released product, using supplier-specific activity data or a disclosed representative dataset; do not omit it because it occurs off site. | `eu-pef-2021-2279` |
| `boundary_exclusions` | downstream_and_capital_scope | Exclude construction-site erection, civil works, distribution after the factory gate, use, maintenance, demolition and end-of-life. Exclude capital goods only when the study's governing method permits it and disclose the exclusion. | `eu-pef-2021-2279` |
| `boundary_complete_atomic_flows` | foreground_inventory_completeness | Add every actual material, fastener, welding consumable, shielding gas, abrasive, chemical, coating component, fuel, utility, waste and elementary emission as a separate atomic exchange when it crosses the declared boundary, even when it is not one of the common rows below. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_structural_fabrication` | Integrated structural fabrication and factory finishing | required | Always; individual cutting, welding, cleaning, coating, fuel and water rows apply only when used by the declared lot | Foreground manufacture from received structural materials through cutting/forming, joining, route-specific finishing, inspection and release | 1,000 kg net released product mass |

### Process: Integrated structural fabrication and factory finishing (`integrated_structural_fabrication`)

#### Inputs

##### Product flows

###### Structural steel plate input (`in_medium_plate`)

Medium plate entering cutting, forming, machining or assembly is recorded from lot-specific purchasing and material-issue records. Steel grade, dimensions, coating state and supplier route must be declared.

- Selected flow: Medium Plate `53818733-c47c-4e11-a23d-af2720338592`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured issued mass less documented unused material returned to stock for the declared lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net released product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources:

###### Hot-rolled structural section input (`in_hot_rolled_large_section`)

Hot-rolled large sections entering cutting, drilling, forming or assembly are recorded separately from plate. The actual section geometry, grade and supplier route are required qualifiers.

- Selected flow: Hot-rolled large section `cbeefeb8-2dfc-48f5-b643-f35aed0d52a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured issued mass less documented unused sections returned to stock for the declared lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net released product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources:

###### Flux-cored welding wire input (`in_flux_cored_wire`)

Flux-cored wire is recorded only for lots using flux-cored arc welding. Other electrode, wire, flux and shielding-gas products used by the declared welding procedure must be added as separate atomic exchanges.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: issued mass minus sealed unused wire returned to controlled stock for the declared lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released product mass for lots using flux-cored arc welding; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources: `fhwa-bridge-welding-reference-manual-2020`

###### Industrial oxygen input (`in_industrial_oxygen`)

Industrial oxygen is recorded only when supplied across the foreground boundary for oxy-fuel cutting, heating or another declared fabrication operation. Oxygen used by absent routes is not averaged into the lot.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: supplier-corrected or metered volume at declared reference conditions attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released product mass for oxygen-using operations; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_fuel_records`
- Sources:

###### Natural gas input (`in_natural_gas`)

Gaseous natural gas is recorded only for direct-fired heating, thermal cutting, curing or other declared factory use. Composition, reference conditions and biogenic blending must be disclosed.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: corrected metered or invoiced volume allocated to the lot under the declared allocation rule
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net released product mass when natural gas is used; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_fuel_records`
- Sources:

###### Purchased electricity input (`in_electricity`)

Purchased electrical energy used for cutting, machining, welding, ventilation, compressed air, coating, internal handling and inspection is recorded from meters or an auditable allocation from facility meters.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered purchased electricity attributable to the declared lot, converted to MJ with an auditable exact unit conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net released product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_fuel_records`
- Sources: `eu-pef-2021-2279`; `fhwa-bridge-welding-reference-manual-2020`

###### Diesel fuel input (`in_diesel_fuel`)

Diesel consumed by owned mobile equipment, generators or direct-fired equipment inside the foreground boundary is recorded separately. Contractor fuel is included only when that contracted activity is inside the product boundary and is not already represented by a supplier dataset.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured or inventory-reconciled consumed mass attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net released product mass when diesel is used; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_fuel_records`
- Sources:

###### Process water input (`in_process_water`)

Process water is recorded only when used for wet cleaning, rinsing, water-based surface preparation or another declared factory operation. Cooling water in a closed loop or a distinct supplied water grade must be represented separately.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: metered or batch-recorded consumed mass attributable to the declared lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released product mass for water-using operations; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_fuel_records`
- Sources:

###### Sodium hydroxide input (`in_sodium_hydroxide`)

Sodium hydroxide is recorded only when the declared surface-treatment route uses it. Delivered solution mass and concentration are recorded without treating pure NaOH mass and solution mass as interchangeable.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: delivered product mass consumed by the declared lot, with solution concentration and unused return documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released product mass for alkaline-cleaning operations; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources:

###### Special High Grade zinc metal input (`in_shg_zinc_metal`)

Special High Grade zinc metal is recorded only when that grade is added to a hot-dip galvanizing bath for the declared product. Other zinc grades, zinc-aluminium wires and bath-alloy additions are separate atomic exchanges.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: bath make-up mass attributable to the declared lot using documented bath inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released hot-dip galvanized product mass; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources: `fhwa-thermal-spray-coatings-2014`

###### Two-component zinc-rich epoxy primer input (`in_zinc_rich_epoxy_primer`)

The wet, mixed two-component zinc-rich epoxy primer crossing the factory boundary is recorded only for the declared paint system. Its Tiangong flow UUID remains unresolved because the audited candidates did not verify the required formulation.

- Selected flow: Two-component zinc-rich epoxy primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: mixed wet product mass applied plus documented spray and mixing loss attributable to the lot, net of separately measured recoverable return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net released product mass for lots using this primer; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources: `fhwa-one-coat-steel-bridges-2011`

##### Waste flows

No waste input is prescribed. If a waste-derived input crosses the boundary, add the specific waste flow as an atomic input and document its treatment and end-of-waste state.

##### Elementary flows

No elementary input is prescribed by this common pattern. Add any measured elementary resource input as its own atomic exchange.

#### Outputs

##### Product flows

###### Released reference product (`out_reference_product`)

The released output is the measured or calculated net mass of the covered factory-fabricated product that passed the declared acceptance and inspection requirements.

- Selected flow: Bridges, bridge sections, towers and lattice masts, of iron or steel `4a0df357-537a-4fce-aa35-87678778a6e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1,000 kg after normalization from lot-specific released net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net released product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_release_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Post-industrial steel scrap output (`out_post_industrial_steel_scrap`)

Steel offcuts, turnings and rejected steel pieces leaving the fabrication process as post-industrial scrap are measured separately from reusable material returned to stock and from non-ferrous or coated hazardous waste.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured mass leaving the foreground boundary as post-industrial steel scrap, net of internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net released product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_and_waste_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from natural-gas combustion (`out_co2_fossil_natural_gas`)

Direct fossil carbon dioxide from natural gas burned inside the foreground boundary is calculated or measured separately from upstream gas-supply emissions. It is absent when no natural gas is combusted on site.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: direct monitored mass or measured natural-gas quantity multiplied by a documented composition- and geography-appropriate fossil CO2 factor; keep upstream emissions excluded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released product mass when natural gas is combusted; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_records`
- Sources:

###### Fossil carbon dioxide from diesel combustion (`out_co2_fossil_diesel`)

Direct fossil carbon dioxide from diesel burned inside the foreground boundary is calculated or measured separately from upstream diesel-supply emissions and from any declared biogenic fraction.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: direct monitored mass or measured diesel quantity multiplied by a documented grade-, composition- and geography-appropriate fossil CO2 factor; keep upstream emissions excluded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net released product mass when diesel is combusted; otherwise not applicable
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | foreground_burden_allocation | Avoid allocation by separately metering, batch-recording or otherwise subdividing operations and utilities directly attributable to the declared product lot. | `eu-pef-2021-2279` |
| `allocation_physical_causality` | shared_factory_operations | When subdivision is not feasible, use a documented causal physical driver such as measured machine time, weld length, cutting time, coating area, lifted mass-distance or occupied process time. Product mass alone is permitted only when shown to represent the shared operation's physical causality. | `eu-pef-2021-2279` |
| `allocation_other_relationship` | residual_multifunctionality | Use another relationship, including economic allocation, only after documenting why subdivision, system expansion and a relevant physical relationship are not feasible; disclose prices, period and sensitivity when economic allocation is used. | `eu-pef-2021-2279` |
| `allocation_scrap_no_hidden_credit` | post_industrial_steel_scrap | Record post-industrial steel scrap at its measured mass and destination. Do not apply an avoided-primary-steel credit or recycling substitution inside this factory-gate inventory unless the governing study method explicitly requires it and the method is disclosed without double counting. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_consumable_records` | `integrated_structural_fabrication` | `in_medium_plate`; `in_hot_rolled_large_section`; `in_flux_cored_wire`; `in_sodium_hydroxide`; `in_shg_zinc_metal`; `in_zinc_rich_epoxy_primer` | Purchase receipt, material certificate, stock issue/return, batch mix and bath inventory record | product identity; supplier; lot; grade/formulation; gross issued quantity; unused return; concentration or solids; unit; date; linked product lot | Reconcile traceable receipt and issue records to the fabrication lot; use calibrated weighing where available and retain conversions | kg | Per receipt and issue; reconcile per lot and reporting period | Complete production period represented by the dataset | All included lines and storage/issue points at the reporting factory, plus in-scope outsourced records | Sum consumed quantity by atomic product identity, subtract only documented reusable return, then normalize by released net product mass | Purchase records; material certificates; stock ledger; scale calibration; batch sheet; bath reconciliation; lot traceability |
| `cp_utility_and_fuel_records` | `integrated_structural_fabrication` | `in_industrial_oxygen`; `in_natural_gas`; `in_electricity`; `in_diesel_fuel`; `in_process_water` | Calibrated submeter, supplier invoice, tank/stock reconciliation or equipment log | meter start/end; corrected quantity; unit; reference conditions; fuel grade; meter location; operating hours; allocation driver; lot; date | Prefer lot or process submeters; otherwise reconcile facility totals and allocate using the documented causal driver | m3, MJ or kg as specified by the row | Continuous or per delivery, aggregated at least monthly and reconciled to the lot | Same period as released product, with opening/closing inventory where relevant | All in-scope meters, tanks and equipment; exclude quantities already included in outsourced datasets | Subtract exports and out-of-boundary uses, allocate only the remaining in-scope quantity, convert units audibly, then normalize | Meter calibration; invoices; tank dip or stock balance; equipment log; allocation worksheet; reference-condition record |
| `cp_product_release_records` | `integrated_structural_fabrication` | `out_reference_product` | Release certificate, calibrated scale record, shipping mass record or drawing-controlled permanent-component BOM | product subtype; lot; drawing revision; component mass; permanent fastener mass; coating mass; excluded fixture mass; acceptance status; release date | Prefer direct calibrated weighing; otherwise sum verified permanent-component masses and reconcile against shipping or weighbridge data | kg | Per released lot | Complete reporting period | All covered products released by the reporting factory | Include accepted permanent product mass only; exclude reusable fixtures and unreleased/reworked inventory; sum lots before normalization | Release certificate; inspection acceptance; scale calibration; signed BOM; shipping mass reconciliation |
| `cp_scrap_and_waste_records` | `integrated_structural_fabrication` | `out_post_industrial_steel_scrap` | Segregated waste scale ticket and stock movement record | waste identity; alloy/coating contamination; mass; container tare; source lot/process; internal reuse; destination; date | Weigh each outbound segregated scrap stream; reconcile internal return before classifying material as waste | kg | Per shipment with monthly reconciliation | Same period as production records | All fabrication, repair and rejection areas in scope | Sum only scrap crossing the foreground boundary, net of documented internal reuse; keep other wastes as separate atomic rows | Calibrated scale tickets; waste transfer note; recycler receipt; internal return ledger |
| `cp_direct_combustion_records` | `integrated_structural_fabrication` | `out_co2_fossil_natural_gas`; `out_co2_fossil_diesel` | Continuous emission monitor or fuel-consumption and emission-factor calculation record | fuel row; quantity; composition/grade; fossil fraction; factor value; factor unit; factor source and year; oxidation assumption; monitor result; lot allocation | Use direct monitoring when representative; otherwise multiply measured fuel use by a documented factor compatible with fuel, geography and period, and keep gas and diesel calculations separate | kg CO2 | Per monitoring interval or fuel reconciliation; aggregate with production period | Same period as fuel and released-product records | All direct combustion sources inside the foreground boundary | Sum direct fossil CO2 by fuel and source, exclude upstream supply emissions, allocate using the same causal driver as fuel, then normalize | Monitor QA record or complete factor citation; fuel record; calculation workbook; allocation record; independent check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized amount = period or lot amount × 1,000 / released net product mass in kg; calculate before rounding and preserve the unrounded value | atomic lot or period amount; released net product mass | row amount per 1,000 kg reference product | `eu-pef-2021-2279` |
| `calc_released_net_mass` | `out_reference_product` | Prefer calibrated direct mass. If calculated, sum permanent accepted steel, permanent fasteners and shop-applied coating mass, subtract only documented reusable fixtures and packaging not sold as product, and reconcile with shipping mass. | accepted component/BOM masses; coating mass; scale or shipping reconciliation | released net product mass | `eu-pef-2021-2279` |
| `calc_shared_resource_allocation` | Shared utilities and consumables | Allocate the reconciled in-scope total using the selected causal physical driver; allocation fractions across all products sharing the total must sum to 1 before normalization. | reconciled resource total; product-specific driver values | allocated lot resource quantity | `eu-pef-2021-2279` |
| `calc_direct_fossil_co2` | `out_co2_fossil_natural_gas`; `out_co2_fossil_diesel` | For each fuel separately, direct fossil CO2 = measured fuel quantity × documented compatible fossil CO2 factor, adjusted only for a documented fossil fraction; do not add upstream supply emissions to these elementary rows. | measured fuel quantity; factor; fossil fraction; direct monitor result when used | direct fossil CO2 mass by fuel |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_traceability` | Reference product and steel inputs | Link each released lot to drawings, product subtype, steel grades, material certificates, component/BOM records, joining route, coating state and release acceptance. | Drawing register; material certificates; route card; release certificate |
| `dq_temporal_completeness` | All foreground rows | Cover a representative continuous production period, normally at least 12 months where production is recurring; disclose shorter campaigns, shutdowns, atypical projects and inventory changes. | Production calendar; meter/invoice period reconciliation; lot list |
| `dq_atomic_completeness` | Foreground inventory | Reconcile the actual BOM, consumable ledger, utility meters, fuel records, waste records and environmental permits. Add every additional crossing as an atomic row and justify any omission under the governing cut-off rule. | Signed completeness reconciliation and cut-off log |
| `dq_measurement_quality` | Measured quantities | Record instrument, calibration status, resolution, reference conditions, conversion factors and estimation share; flag missing or expired calibration. | Calibration certificates; meter register; conversion worksheet |
| `dq_representativeness` | Upstream datasets and shared allocations | Evaluate technological, geographical and temporal match; identify proxies and quantify the foreground share based on estimates rather than direct records. | Data-quality assessment; supplier geography; dataset metadata; allocation worksheet |
| `dq_route_separation` | Welding, coating, fuel and water rows | Demonstrate that not-applicable routes were excluded and that route-specific exchanges were not averaged into products that did not undergo those operations. | Route card; work order; coating/welding procedure; lot-level allocation |
| `dq_emission_factor_provenance` | Calculated direct emissions | Retain full factor identity, publisher, version/year, fuel basis, geography, units, oxidation and fossil-fraction assumptions; an undocumented default factor is not acceptable. | Factor source and calculation review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference_flow_and_metadata | Confirm the reference UUID, 1,000 kg mass basis, product subtype, drawing/revision, steel grade, fabrication route, coating state, geography, period and factory-gate release condition. | `un-cpc-3-0-structure-2025`; `eu-pef-2021-2279` |
| `validation_process_coverage` | foreground_processes | Confirm all in-scope receipt, cutting/forming/machining, joining, route-specific finishing, inspection, repair, internal movement and dispatch-preparation operations are represented directly or through a disclosed in-scope outsourced dataset. | `eu-pef-2021-2279`; `fhwa-bridge-welding-reference-manual-2020` |
| `validation_atomic_inventory` | process_inventory | Confirm each exchange is one physical product, waste or elementary flow; split additional electrodes, fluxes, gases, fasteners, abrasives, coatings, fuels, water grades, wastes and emissions rather than using collection labels. | `eu-pef-2021-2279` |
| `validation_mass_reconciliation` | steel_and_product_mass | Reconcile issued steel = released product steel content + post-industrial steel scrap + internal return + work-in-progress change + measured process loss, with every residual investigated and disclosed. |  |
| `validation_utility_reconciliation` | electricity_fuels_gases_water | Reconcile submeter or allocated lot totals to facility meters, invoices and opening/closing stocks; allocation fractions for each shared total must sum to 1. | `eu-pef-2021-2279` |
| `validation_route_conditions` | conditional_rows | Verify each conditional input and output against work orders and procedure records; absent oxygen, natural gas, diesel, water, sodium hydroxide, galvanizing zinc, primer or direct-combustion routes must be marked not applicable rather than zero-filled into an average. | `fhwa-bridge-welding-reference-manual-2020`; `fhwa-thermal-spray-coatings-2014`; `fhwa-one-coat-steel-bridges-2011` |
| `validation_coating_compatibility` | coated_products | Confirm coating identity, layer/system, surface preparation, application location, wet/dry basis and inclusion of permanent coating mass are consistent with the declared released product. | `fhwa-thermal-spray-coatings-2014`; `fhwa-one-coat-steel-bridges-2011` |
| `validation_direct_emissions` | direct_combustion | Confirm natural-gas and diesel fossil CO2 rows include direct foreground combustion only, use measured fuel or representative monitoring, and retain compatible factor provenance and fossil fraction without double counting upstream emissions. |  |
| `validation_data_quality` | dataset_release | Confirm temporal coverage, calibration, source traceability, data gaps, proxy use, cut-offs, allocation and uncertainty disclosures are complete enough for the stated downstream role. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or facility-average factory-gate inventory dataset for a declared iron/steel bridge, bridge section, tower or lattice mast product |
| downstream_use | May be used as a secondary_dataset or background_dataset for construction, infrastructure, energy or communications systems when product subtype, geography, technology, period and factory-gate boundary match |
| allowed_use | Product-specific modelling; supplier or facility benchmarking with aligned scopes; downstream construction and asset models that add transport, erection, use, maintenance and end-of-life explicitly |
| excluded_use | Constructed-bridge or installed-tower results; erection/construction service datasets; generic structural steel production; use-stage durability claims; substitution or recycling credits not documented by the consuming method |
| required_metadata | PCR id and version/status; reference UUID and amount; product subtype; complete/section scope; drawing/specification; steel grade; joining and coating routes; net-mass method; factory and geography; period; allocation; cut-offs; upstream dataset list; added atomic exchanges |
| required_quality_disclosure | Foreground versus estimated shares; measurement/calibration status; temporal, geographical and technological representativeness; material and utility reconciliation; factor provenance; unresolved flow identities; uncertainty and proxy use |
| update_trigger | Material change in product design or mass, steel grade or supplier route, welding/assembly technology, coating system, factory energy mix, fuel, allocation method, outsourced scope, emission factor, geography, or reporting period; or resolution of an unresolved UUID/range evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Dataset (`dataset`) | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, row 42110, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official classification identity and English product title |
| `china-mof-2013-tariff-schedule` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, tariff schedule, page 127, lines 73081000 and 73082000, https://gss.mof.gov.cn/gzdt/zhengcefabu/201306/P020130708509079068339.pdf (retrieved 2026-09-05) | Professional Chinese product terminology for bridge sections, towers and lattice masts |
| `fhwa-bridge-welding-reference-manual-2020` | Handbook (`handbook`) | U.S. Federal Highway Administration, Bridge Welding Reference Manual, FHWA-HIF-19-088, September 2019 with September 2020 errata, https://www.fhwa.dot.gov/bridge/steel/pubs/hif19088.pdf (retrieved 2026-09-05) | Welding-process decomposition, welding-consumable roles, electric welding equipment, inspection and quality records |
| `fhwa-one-coat-steel-bridges-2011` | Official guidance (`official_guidance`) | U.S. Federal Highway Administration, Performance Evaluation of One-Coat Systems for New Steel Bridges, FHWA-HRT-11-046, June 2011, https://www.fhwa.dot.gov/publications/research/infrastructure/bridge/11046/001.cfm (retrieved 2026-09-05) | Abrasive surface preparation and zinc-rich primer/coating-system process scope |
| `fhwa-thermal-spray-coatings-2014` | Official guidance (`official_guidance`) | U.S. Federal Highway Administration, Slip and Creep of Thermal Spray Coatings, FHWA-HRT-14-083, September 2014, https://www.fhwa.dot.gov/publications/research/infrastructure/structures/bridge/14083/index.cfm (retrieved 2026-09-05) | Corrosion-protection route distinctions, blast cleaning, zinc-bearing coatings, hot-dip galvanizing and coating quality records |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, Official Journal L 471, 30 December 2021, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-09-05) | Declared-unit and reference-flow method, company-specific BOM and manufacturing data, boundary and completeness rules, data quality, and allocation hierarchy |
