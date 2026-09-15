---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-primary-cells-primary-batteries-and-electric-accumulators-spent-prim-9f1a4593
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Waste and scrap of primary cells, primary batteries and electric accumulators; spent primary cells, primary batteries and electric accumulators

## 1. Scope and Applicability

This PCR governs foreground data packages for waste or spent primary cells, primary batteries, and rechargeable electric accumulators from the first controlled collection or receiving gate through declared preparation and recycling operations. It covers intact cells, modules, packs, damaged or defective batteries, manufacturing scrap that has waste status, sorted chemistry-specific lots, and battery-derived fractions only while their origin, state, and route remain traceable.

The category is intentionally chemistry-neutral. A conforming data package must partition materially different chemistries and routes rather than average lead-acid, nickel-cadmium, zinc-manganese, lithium-ion, sodium-based, or other systems without disclosure. New battery manufacture, battery use, ordinary repair, and generic electrical and electronic equipment waste are outside the default boundary. A battery embedded in equipment enters only after the battery share is separately identified; upstream device dismantling is included only when expressly declared.

Waste identity is not interchangeable with product-flow type. Incoming batteries remain waste unless the applicable jurisdiction and receiving contract establish otherwise. Black mass, crushed powder, recovered casing fractions, salts, and metals are separate outputs: each must be recorded as a waste or as a tradable secondary material according to its documented status at the declared gate. No black-mass or metal-product UUID is prescribed by default because composition, processing state, and status vary by chemistry and route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-primary-cells-primary-batteries-and-electric-accumulators-spent-prim-9f1a4593 |
| classification_refs | CPC 3.0: 39380, exact classification context |
| covered_products | Waste and scrap of primary cells, primary batteries, and electric accumulators; spent cells, batteries, modules, and packs; waste battery manufacturing scrap; separately identified battery-derived fractions with traceable origin |
| excluded_products | New batteries and accumulators; battery manufacturing as a product system; batteries still in normal use; generic WEEE, vehicles, or mixed municipal waste before battery identification; unrelated electronic scrap; secondary materials whose battery origin and processing state are not traceable |
| representative_product | A separately collected, as-received waste-battery lot with declared chemistry mix, configuration, waste status, state of charge, safety condition, gross and net mass basis, and preparation state |
| production_route | Collection and receipt; identification and safe handling; preparation for recycling; conditional mechanical preprocessing; conditional pyrometallurgical, hydrometallurgical, direct-recycling, or other declared material-recovery route |
| market_state | Waste held for controlled management at the reference gate; not a new battery and not a secondary raw material unless a separate output has documented product or end-of-waste status |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Controlled management and declared transformation of an as-received waste-battery lot |
| How much | 1 kg of waste batteries at the declared reference gate |
| How well | The lot is characterized by chemistry, configuration, waste status, charge and safety condition, preparation state, included mass components, collection origin, and destination route; all outgoing fractions retain a documented fate and status |
| How long or cycle | From the declared first controlled collection or receiving gate through the last foreground operation claimed by the data package |
| reference_flow_link | The quantitative reference is the as-received waste-battery mass; stage-specific outputs are reported separately and must not replace it without redefining the data package |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg as received at the declared gate |
| Reference product flow | Battery `921de03b-28b1-4c75-8642-204afbc79d2d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | waste-status basis and applicable jurisdiction; battery family and chemistry or measured chemistry mix; primary or rechargeable status; cell, module, pack, or scrap configuration; embedded-battery removal status; state of charge or verified safe state; damaged, defective, recalled, critical, or normal end-of-life condition; gross mass and net battery mass basis; included casing, electrolyte, fluids, and non-battery attachments; collection source, geography, and period; preparation state; intended recycling or transfer route |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The selected Tiangong row is a generic CPC 39380 `Product flow`; it does not by itself change the declared waste status. Chemistry-specific rows for spent lithium-ion, zinc-manganese, or LMO batteries may be selected only when the foreground lot matches that chemistry and state.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference waste-battery lot | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the as-received gross mass at the declared gate and identify whether outer pack casing, electrolyte, free liquid, transport packaging, and non-battery attachments are included. |
| `net_battery_mass` | Battery-only material balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Derive net battery mass only from measured gross mass and separately measured excluded components; retain both values and the calculation. |
| `dry_mass_basis` | Recycling-efficiency or material-recovery claims | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg dry matter | If a dry-mass calculation is used, record the wet mass, sampling and moisture method, separated impurities, outer-casing treatment, and every conversion factor; do not silently substitute dry mass for the reference amount. |
| `chemistry_partition` | Mixed battery lots | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass fraction | Determine chemistry shares by continuous sorting records or a documented representative sampling plan and preserve an unclassified remainder rather than reallocating it to known chemistries. |
| `state_and_safety_record` | Each received lot or separately managed sub-lot | Descriptive record | not applicable | Record state of charge or safe-state evidence, damage and leakage condition, thermal-event status, terminal protection, isolation or packaging, and the decision that routes the lot to storage, discharge, dismantling, transport, or emergency handling. |
| `output_status_record` | Black mass, crushed powder, metals, salts, plastics, residues, and other outgoing fractions | Mass plus descriptive record | kg | Measure each output at the declared gate and record whether it remains waste, is an intermediate fraction requiring further treatment, or is a product or secondary material with documented acceptance status. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_waste_identity` | Incoming battery lots | Begin with a lot whose waste or spent status, holder, collection origin, and applicable legal or contractual basis are declared; a Tiangong Product-flow type must not be interpreted as proof that the lot has ceased to be waste. | `unsd-cpc-3-2025`; `eu-batteries-reg-2023-1542` |
| `boundary_controlled_collection` | Collection and transport | Include collection, consolidation, route transport, and associated packaging when controlled by the reporting organization; otherwise link the delivered lot to a separate upstream collection dataset and declare the receiving gate. | `eu-batteries-reg-2023-1542`; `us-epa-used-lib-safety` |
| `boundary_safe_receipt` | Receipt and storage | Include identification, weighing, inspection, chemistry segregation, state-of-charge or safe-state assessment, terminal protection, damaged-battery isolation, spill or leakage handling, and controlled storage that occur within the foreground. | `us-epa-used-lib-safety` |
| `boundary_preparation` | Preparation for recycling | Keep sorting, storage, handling, pack dismantling, removal of non-battery fractions, and other preparation activities distinct from the subsequent recycling process. | `eu-batteries-reg-2023-1542`; `eu-waste-battery-recycling-2025-606` |
| `boundary_route_specific_recycling` | Recycling operations | Include only the declared mechanical, thermal, hydrometallurgical, pyrometallurgical, direct-recycling, purification, or refining steps actually controlled by the foreground site; route-specific processes must not be generalized across chemistries. | `us-epa-lib-recycling`; `eu-waste-battery-recycling-2025-606` |
| `boundary_output_gate` | Outgoing fractions | End each foreground branch at a measured outgoing fraction. Distinguish intermediate fractions sent for further treatment from final output fractions, and preserve waste, product, or end-of-waste status at that gate. | `eu-waste-battery-recycling-2025-606`; `us-epa-lib-recycling` |
| `boundary_exclusions` | Default category boundary | Exclude new battery production, use-phase electricity or service, generic WEEE or vehicle treatment before battery identification, unrelated electronic scrap, downstream manufacture of new cathodes or batteries, and avoided-primary-material credits unless the study explicitly expands the boundary and documents the method. | `unsd-cpc-3-2025`; `iso-14044-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A separately identified waste-battery lot handed over at the first controlled collection or receiving gate, with as-received mass and safety condition recorded |
| starting_condition_role | Waste input requiring controlled management; the reference flow is not a new-battery product and not an automatically qualified secondary raw material |
| product_classification_scope | CPC 3.0 39380; chemistry, configuration, preparation state, and output status are mandatory subcategory qualifiers |
| recursive_input_rule | When a waste-battery flow in this same category enters a later foreground step, record it once as a visible input with its upstream dataset reference and preparation state; do not recursively reattach the full category chain inside that step |
| upstream_dataset_requirement | Purchased or transferred battery fractions must link to a dataset that declares origin, chemistry, included mass, preparation operations, waste or product status, geography, period, and allocation method |
| disclosure | Declare every foreground gate, controlled collection segment, chemistry split, preparation step, recovery route, off-site transfer, cut-off, storage change, and final or intermediate output status |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collection_and_transport` | Controlled collection, consolidation, and transport | conditional | Include when the reporting organization controls a collection route before receipt | Move an identified waste-battery lot without mixing it with municipal recycling or generic WEEE | Per kg delivered waste batteries and measured tonne-kilometre |
| `receipt_characterization` | Receipt, identification, safety assessment, sorting, and storage | required | Always required at the declared receiving gate | Establish mass, chemistry, configuration, waste identity, charge and safety state, and accepted or rejected fractions | Per kg as-received reference flow |
| `preparation_for_recycling` | Discharge or safe-state conditioning, dismantling, and removal of non-battery fractions | conditional | Include each operation performed before the first recycling transformation | Produce traceable prepared battery or battery fractions and separately measured removals | Per kg accepted waste batteries |
| `mechanical_preprocessing` | Size reduction and physical fraction separation | conditional | Include when crushing, shredding, sieving, magnetic, density, or related separation occurs | Produce black mass or other intermediate fractions and recovered casing fractions | Per kg prepared battery input |
| `material_recovery` | Thermal, hydrometallurgical, pyrometallurgical, direct, or other material recovery | conditional | Include only the chemistry- and technology-specific route controlled by the foreground site | Convert battery-derived fractions into measured intermediate or final outputs and residues | Per kg battery-derived fraction entering the route |

### Process: Controlled collection, consolidation, and transport (`collection_and_transport`)

#### Inputs

##### Product flows

###### Collected waste batteries (`collected_waste_batteries`)

The separately identified lot enters the controlled collection route with waste identity, chemistry information, safety condition, and gross mass recorded.

- Selected flow: Battery `921de03b-28b1-4c75-8642-204afbc79d2d`
- Flow property / unit: Mass / kg
- Amount rule: measured mass loaded into the controlled route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg waste batteries delivered to the receiving gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection_route`

###### Collection transport service (`collection_transport_service`)

Record each materially different vehicle or mode leg from measured lot mass and route distance; do not substitute a generic route when actual route records exist.

- Selected flow: Transport service, candidate to be selected for the declared mode and geography
- Flow property / unit: Transport service / tkm
- Amount rule: delivered battery mass in tonnes multiplied by measured route distance in kilometres for each leg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg waste batteries delivered to the receiving gate
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collection_route`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Delivered waste-battery lot (`delivered_waste_batteries`)

The delivered lot remains a waste-battery flow at receipt; delivery does not establish secondary-material status.

- Selected flow: Battery `921de03b-28b1-4c75-8642-204afbc79d2d`
- Flow property / unit: Mass / kg
- Amount rule: measured mass unloaded at the receiving gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg waste batteries delivered to the receiving gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection_route`

##### Waste flows

##### Elementary flows

### Process: Receipt, identification, safety assessment, sorting, and storage (`receipt_characterization`)

#### Inputs

##### Product flows

###### As-received waste-battery lot (`received_waste_batteries`)

The quantitative reference enters with all required qualifiers and a traceable weighing record.

- Selected flow: Battery `921de03b-28b1-4c75-8642-204afbc79d2d`
- Flow property / unit: Mass / kg
- Amount rule: measured gross mass at receipt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg as-received reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_batch`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted and segregated waste-battery sub-lots (`accepted_battery_sublots`)

Record separate output masses for each chemistry, configuration, preparation state, and safety route. Use the generic flow UUID only with these qualifiers; a matching chemistry-specific Tiangong flow may replace it for a genuinely homogeneous lot.

- Selected flow: Battery `921de03b-28b1-4c75-8642-204afbc79d2d`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass by segregated sub-lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg as-received reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_batch`

##### Waste flows

###### Rejected non-battery material and unaccepted lots (`receipt_rejects`)

Record packaging, attached equipment, contamination, and lots refused or diverted for safety reasons separately, with their destination and waste status.

- Selected flow: Reject or waste flow selected by measured material identity; no generic UUID prescribed
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg as-received reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_batch`

##### Elementary flows

### Process: Discharge or safe-state conditioning, dismantling, and removal of non-battery fractions (`preparation_for_recycling`)

#### Inputs

##### Product flows

###### Accepted waste batteries for preparation (`batteries_for_preparation`)

The input is the measured chemistry- and safety-segregated sub-lot entering the declared preparation sequence.

- Selected flow: Battery `921de03b-28b1-4c75-8642-204afbc79d2d`
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted waste batteries entering preparation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`

###### Preparation electricity and fuels (`preparation_energy`)

Record metered electricity and fuels used for safe-state conditioning, ventilation, dismantling, and material handling; select geography- and technology-matched flows during dataset construction.

- Selected flow: Energy carriers selected for the foreground site; no universal UUID prescribed
- Flow property / unit: Energy or mass / metered unit
- Amount rule: metered use allocated to the prepared batch after subdivision where feasible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared battery output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared waste batteries or battery fractions (`prepared_battery_fraction`)

Record intact cells, modules, or battery fractions after the declared preparation step, retaining chemistry, state, and waste status.

- Selected flow: Battery `921de03b-28b1-4c75-8642-204afbc79d2d` when the output remains within CPC 39380; otherwise select a state-matched candidate after review
- Flow property / unit: Mass / kg
- Amount rule: measured prepared output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg waste batteries entering preparation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`

##### Waste flows

###### Removed casings, packaging, fluids, and non-battery parts (`preparation_removals`)

Measure each removal separately and preserve its composition, hazard classification, destination, and waste or product status.

- Selected flow: Material-specific waste flow; no generic UUID prescribed
- Flow property / unit: Mass / kg
- Amount rule: measured mass by separated fraction and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg waste batteries entering preparation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`

##### Elementary flows

### Process: Size reduction and physical fraction separation (`mechanical_preprocessing`)

#### Inputs

##### Product flows

###### Prepared battery feed (`prepared_feed_to_mechanical`)

Record the exact chemistry, configuration, charge or safe state, and preparation history of the battery-derived feed entering size reduction.

- Selected flow: Battery `921de03b-28b1-4c75-8642-204afbc79d2d` only when the prepared feed retains that identity; otherwise use a reviewed state-matched flow
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared battery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_balance`

###### Mechanical-processing energy and auxiliaries (`mechanical_energy_auxiliaries`)

Record electricity, inert gas, cooling, dust-control media, and other auxiliaries actually consumed by the declared equipment.

- Selected flow: Site- and technology-matched inputs selected during dataset construction
- Flow property / unit: Energy, mass, or volume / metered unit
- Amount rule: metered or purchased quantity allocated to the processed batch after subdivision where feasible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared battery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified tradable black mass or battery-derived intermediate (`tradable_battery_intermediate`)

Use this product output only when composition, moisture, battery origin, acceptance specification, and non-waste or tradable-secondary-material status are documented. Black mass has no universal composition or default UUID.

- Selected flow: Reviewed chemistry- and state-matched product flow; no default UUID prescribed
- Flow property / unit: Mass / kg
- Amount rule: measured output mass by lot, with moisture and composition results linked
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared battery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_balance`

###### Recovered casing metals and other qualified products (`qualified_separated_products`)

Record steel, copper, aluminium, plastics, or other fractions as products only when their specification, destination, and status at the gate are documented.

- Selected flow: Material-specific product flow selected after composition and status review
- Flow property / unit: Mass / kg
- Amount rule: measured output mass by material and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared battery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_balance`

##### Waste flows

###### Black mass or crushed fraction remaining waste (`waste_battery_intermediate`)

Use this waste output when the fraction requires further treatment or lacks documented product or end-of-waste status; record receiving facility and next operation.

- Selected flow: Chemistry- and state-matched waste flow when available; no default UUID prescribed
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing waste-intermediate mass by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared battery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_balance`

###### Mechanical residues and pollution-control wastes (`mechanical_residues`)

Record dust, filter media, fines, contaminated liquids, and other residues separately by hazard and destination.

- Selected flow: Residue-specific waste flow selected during dataset construction
- Flow property / unit: Mass or volume / measured unit
- Amount rule: measured mass or volume by residue and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared battery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_balance`

##### Elementary flows

###### Direct particulate and volatile releases (`mechanical_direct_releases`)

Record only releases that cross the environmental boundary after control; captured material remains a waste or product output.

- Selected flow: Elementary flow matched to the monitored substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from measured concentration and exhaust volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared battery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mechanical_emissions`

### Process: Thermal, hydrometallurgical, pyrometallurgical, direct, or other material recovery (`material_recovery`)

#### Inputs

##### Product flows

###### Battery-derived recovery feed (`battery_recovery_feed`)

Record black mass, electrode material, cells, alloy, slag, solution, or other battery-derived feed with chemistry, moisture, status, and upstream preparation history.

- Selected flow: Chemistry- and state-matched feed flow selected after review; no generic UUID prescribed
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass on both the as-received and declared dry basis when relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg battery-derived recovery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery_balance`

###### Recovery reagents, energy, and water (`recovery_operating_inputs`)

Record actual electricity, fuels, water, acids, bases, reductants, extractants, precipitants, and other route-specific inputs; do not transfer an inventory across chemistries without evidence.

- Selected flow: Site-, geography-, and technology-matched input flows selected during dataset construction
- Flow property / unit: Mass, energy, or volume / measured unit
- Amount rule: metered, weighed, or purchased amount attributed to the processed batch after subdivision where feasible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg battery-derived recovery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery_balance`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified recovered metals, compounds, or active materials (`qualified_recovered_products`)

Record each metal, salt, alloy, precursor, active material, or other final output separately with composition, purity or specification, mass, destination, and documented status.

- Selected flow: Product-specific flow selected only after composition and specification review
- Flow property / unit: Mass / kg
- Amount rule: measured saleable or accepted output mass by product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg battery-derived recovery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery_balance`

##### Waste flows

###### Recovery residues and wastewater (`recovery_residues`)

Record slags, leach residues, neutralization solids, spent solutions, wastewater, and pollution-control wastes separately with composition, hazard status, and destination.

- Selected flow: Residue-specific waste flow selected during dataset construction
- Flow property / unit: Mass or volume / measured unit
- Amount rule: measured outgoing mass or volume by residue and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg battery-derived recovery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery_balance`

##### Elementary flows

###### Direct recovery-process releases (`recovery_direct_releases`)

Record monitored air, water, and soil releases after control by substance and compartment; captured material is not an elementary flow.

- Selected flow: Elementary flow matched to the monitored substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: monitored release or calculation from measured concentration and carrier-flow volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg battery-derived recovery feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_recovery_emissions`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_chemistry_route` | Mixed chemistries, routes, and operating lines | First subdivide records by chemistry, configuration, safety route, preparation state, and recovery technology whenever metering or batch records permit. | `iso-14044-2006`; `eu-waste-battery-recycling-2025-606` |
| `allocation_preserve_direct_measurement` | Separately measured inputs and outputs | Assign directly measured batch inputs, outputs, emissions, residues, and storage changes to that batch before allocating shared burdens. | `iso-14044-2006` |
| `allocation_shared_operations` | Shared collection, storage, utilities, and pollution control | When subdivision is not feasible, use a documented physical relationship that reflects causality; mass may be used only when it is a reasonable proxy, and the chosen basis and sensitivity must be disclosed. | `iso-14044-2006` |
| `allocation_output_status` | Black mass, metals, salts, plastics, and residues | Do not treat an intermediate fraction as a final co-product merely because it has market value. Apply product or co-product treatment only after its gate, specification, destination, and waste or end-of-waste status are documented. | `eu-batteries-reg-2023-1542`; `eu-waste-battery-recycling-2025-606` |
| `allocation_no_automatic_credit` | Recycling benefits and recovered-material substitution | Do not embed avoided virgin-material production, recycled-content credit, or downstream battery-manufacturing credit in the foreground inventory by default. Any substitution, system expansion, or circular-footprint method belongs to the declared downstream study and must avoid double counting. | `iso-14044-2006` |
| `allocation_negative_value_waste` | Fees, negative-value wastes, and paid treatment | Price sign does not determine physical flow type or burden allocation. Record waste-management service, material flow, and any recovered outputs separately, then disclose the study-specific allocation convention. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_collection_route` | `collection_and_transport` | collected and delivered battery mass; route service | weighbridge or calibrated scale records; route logs; load manifests | load_id; origin; destination; battery chemistry; safety status; loaded_mass_kg; delivered_mass_kg; vehicle_or_mode; distance_km; packaging; incident_or_loss | Link each load manifest to weighing and route evidence; calculate each leg separately | kg; km; tkm | every load and route leg | entire declared collection period | all controlled collection points and vehicles | Sum mass by lot and tkm by mode; report losses and rejected loads separately | scale calibration; route record; chain-of-custody manifest; incident log |
| `cp_receipt_batch` | `receipt_characterization` | received, accepted, segregated, and rejected fractions | receipt log; scale record; inspection and sorting record | lot_id; receipt_time; supplier; origin; gross_mass_kg; net_battery_mass_kg; chemistry; configuration; state_of_charge_or_safe_state; damage; leakage; temperature_event; accepted_mass_kg; reject_mass_kg; destination | Weigh at receipt, inspect before mixing, and retain chemistry and safety routing decisions by sub-lot | kg; mass fraction; descriptive state | every received lot | entire declared reporting period | every receiving and storage area in scope | Reconcile received mass to accepted sub-lots, rejects, and measured storage change | calibration certificate; photographs or inspection record; chemistry evidence; waste manifest; storage ledger |
| `cp_preparation_batch` | `preparation_for_recycling` | prepared battery fraction; removals; preparation energy | batch traveler; scale records; meter and purchase records; safety log | batch_id; input_mass_kg; chemistry; initial_safe_state; discharge_or_conditioning_method; dismantling_steps; output_mass_kg; removal_type; removal_mass_kg; electricity; fuel; incident; storage_change | Record every preparation operation and weigh the input, prepared output, and separated removals | kg; kWh; fuel unit; descriptive state | every batch, with meters read at batch or justified campaign level | entire declared preparation campaign | all preparation equipment and controlled storage in scope | Allocate campaign utilities after subdivision using the disclosed physical driver; preserve direct batch measurements | scale and meter calibration; batch traveler; safety authorization; removal destination record |
| `cp_mechanical_balance` | `mechanical_preprocessing` | mechanical feed, operating inputs, product fractions, and waste fractions | batch production record; scales; meters; laboratory analysis; dispatch record | batch_id; chemistry; feed_mass_kg; feed_moisture; safe_state; electricity; auxiliary_input; output_fraction_id; output_mass_kg; moisture; composition; status; destination; storage_change | Weigh all feeds and outputs and link representative composition and moisture samples to the same batch | kg; kWh; auxiliary unit; mass fraction | every batch; continuous meter totals reconciled at least per campaign | entire declared mechanical-processing campaign | all shredding, crushing, separation, dust-control, and storage units in scope | Report each output fraction separately; reconcile input, additions, outputs, captured residues, direct releases, and storage change | scale and meter calibration; sampling plan; laboratory QA; dispatch or acceptance document |
| `cp_mechanical_emissions` | `mechanical_preprocessing` | direct particulate and volatile releases | stack or workplace exhaust monitoring; flow-meter records; analytical reports | source_id; substance; compartment; concentration; carrier_flow; duration; control_device; captured_mass; detection_limit | Calculate emitted mass from paired concentration and carrier-flow records or use direct validated mass monitoring | kg substance; concentration; volume | each compliance test and continuous period where available | representative of the declared campaign and operating state | every direct environmental release point in scope | Integrate by operating time; report non-detect treatment and captured mass separately | accredited analysis; instrument calibration; sampling conditions; control-device log |
| `cp_recovery_balance` | `material_recovery` | recovery feed, reagents, energy, recovered products, residues, and storage | batch records; scales; tank measurements; meters; purchase and dispatch records; laboratory analysis | batch_id; route; chemistry; feed_mass_wet; feed_mass_dry; moisture; reagent; reagent_amount; energy; water; output_id; output_mass; composition; purity; waste_or_product_status; destination; storage_change | Link all input and output records to the declared recovery batch and preserve elemental or compound analyses used in recovery calculations | kg; kg dry matter; kWh; m3; mass fraction | every batch; continuous meters reconciled at least per campaign | entire declared recovery campaign | all controlled recovery, purification, refining, and storage units in scope | Reconcile wet and dry bases separately; do not count added reagents as battery-derived recovered material | calibration; laboratory QA; material acceptance; dispatch record; inventory reconciliation |
| `cp_recovery_emissions` | `material_recovery` | direct air, water, and soil releases | stack, effluent, and other environmental monitoring records | source_id; substance; compartment; concentration; carrier_flow; duration; control_device; captured_mass; detection_limit | Calculate released mass from validated concentration and carrier-flow records or direct mass monitoring | kg substance; concentration; volume | each compliance test and continuous period where available | representative of the declared route and operating state | every direct environmental release point in scope | Integrate by operating time and separate captured material from environmental releases | accredited analysis; instrument calibration; sampling conditions; treatment-system log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_collection_tkm` | Each collection route leg | tonne-kilometre = delivered battery mass in tonnes multiplied by measured one-way distance in kilometres; empty return travel is a separate declared assumption or record | delivered_mass_kg; distance_km; route leg; vehicle or mode | tkm by route leg and mode |  |
| `calc_net_battery_mass` | Receipt and preparation | net battery mass = measured gross lot mass minus separately measured transport packaging, unrelated equipment, and other declared non-battery attachments; do not remove battery casing or electrolyte unless the chosen basis explicitly requires it | gross_mass_kg; excluded_component_mass_kg by component | net_battery_mass_kg with inclusion list | `eu-waste-battery-recycling-2025-606` |
| `calc_chemistry_share` | Mixed received lot | chemistry mass fraction = measured or sampled mass assigned to a chemistry divided by total classified battery mass; retain unclassified mass as its own share | chemistry_mass_kg; classified_battery_mass_kg; unclassified_mass_kg | chemistry shares and unclassified share | `eu-waste-battery-recycling-2025-606` |
| `calc_process_mass_balance` | Each foreground process and campaign | reconcile measured inputs plus opening inventory with measured outputs plus closing inventory and recorded direct releases; report the signed unresolved difference without forcing it to zero | input masses; output masses; captured wastes; direct releases; opening and closing inventory | mass-balance statement and unresolved difference | `eu-waste-battery-recycling-2025-606` |
| `calc_battery_derived_output` | Recovery claims | quantify only the element or compound mass demonstrably derived from battery input; added reagents, atmospheric oxygen, water, and non-battery impurities remain separately identified according to the applicable method | dry input composition; output mass and composition; reagent additions; impurity and moisture records | battery-derived recovered mass by element or compound | `eu-waste-battery-recycling-2025-606` |
| `calc_route_intensity` | Process energy, water, reagent, emission, and residue rows | normalized amount = measured or calculated campaign amount divided by the mass basis declared for that process; preserve the original measurement and basis conversion | campaign amount; process input or output mass; time and storage reconciliation | amount per declared process basis |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Every reference lot and sub-lot | Preserve supplier or holder, collection origin, waste-status basis, chemistry evidence, configuration, preparation state, and unique lot linkage. | Waste manifest, chain-of-custody record, inspection record, label or analytical evidence |
| `dq_safety_state` | Batteries before transport, storage, dismantling, or shredding | Document state of charge or verified safe state, damage and leakage condition, terminal protection, isolation, thermal-event history, and routing decision; do not infer safety from chemistry name alone. | Safety inspection, voltage or state-of-charge measurement, incident record, packaging record |
| `dq_mass_traceability` | All foreground processes | Retain calibrated mass records for inputs, outputs, rejects, residues, transfers, and inventory changes; disclose every unresolved mass-balance difference rather than reallocating it. | Calibration certificates, batch balances, storage ledger, dispatch records |
| `dq_chemistry_representativeness` | Mixed lots and sampled composition | State sorting coverage, sampling design, laboratory method, detection limits, sample dates, and unclassified share; do not use a chemistry-specific inventory as a generic category average. | Sorting log, sampling plan, laboratory QA report, representativeness assessment |
| `dq_output_status` | Black mass and all recovered or residual fractions | Retain composition, moisture, specification, destination, acceptance documentation, and waste, intermediate, product, or end-of-waste status at the declared gate. | Laboratory certificate, sales or acceptance specification, waste transfer note, regulatory determination where applicable |
| `dq_temporal_technology_scope` | Site and route dataset | Report actual operating period, throughput, technology configuration, control equipment, downtime, abnormal events, and whether records are batch, campaign, or annual; no minimum coverage is assumed silently. | Operating log, production report, maintenance and incident records |
| `dq_source_and_method_currency` | Legal, safety, recycling-efficiency, and recovery claims | Identify the jurisdiction, method edition, applicability date, and calculation scope used; a PCR source supports modelling structure but does not by itself prove regulatory compliance. | Applicable legal text or method, dated compliance assessment, calculation workbook |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Fail conformance if waste status, chemistry or mix, configuration, charge or safe state, condition, included mass components, collection origin, preparation state, or intended route is missing. | `unsd-cpc-3-2025`; `us-epa-used-lib-safety` |
| `validation_flow_type_status` | Incoming and outgoing technosphere flows | Verify Tiangong flow type and UUID independently from waste, product, intermediate, or end-of-waste status; require documentary status evidence for every outgoing secondary material. | `eu-batteries-reg-2023-1542`; `eu-waste-battery-recycling-2025-606` |
| `validation_chemistry_route` | Process inventory | Reject undisclosed averaging across materially different chemistries, configurations, charge states, or recovery routes; retain an unclassified share when evidence is incomplete. | `eu-waste-battery-recycling-2025-606` |
| `validation_collection_safety` | Collection, transport, receipt, and storage | Require lot-level safety assessment and documented protection or isolation before handling; lithium-ion batteries must not be modelled as ordinary municipal recycling. | `us-epa-used-lib-safety` |
| `validation_preparation_recycling_split` | Process boundary | Verify that collection, sorting, storage, handling, dismantling, and other preparation steps are not silently merged with recycling when the applicable calculation method distinguishes them. | `eu-batteries-reg-2023-1542`; `eu-waste-battery-recycling-2025-606` |
| `validation_mass_balance` | Each foreground process | Require measured input, output, inventory-change, residue, and direct-release records and report the unresolved mass-balance difference; do not force closure by assigning the difference to a saleable product. | `eu-waste-battery-recycling-2025-606` |
| `validation_black_mass_status` | Black mass and crushed battery powder | Reject a default product classification or default UUID when chemistry, moisture, composition, preparation state, destination, and waste or secondary-material status are not documented. | `us-epa-lib-recycling`; `eu-waste-battery-recycling-2025-606` |
| `validation_battery_derived_recovery` | Recovered-material claim | Exclude added reagents, water, atmospheric inputs, non-battery impurities, and energy recovery from battery-derived material recovery unless the applicable official method explicitly provides otherwise and the calculation shows it. | `eu-waste-battery-recycling-2025-606` |
| `validation_allocation` | Shared burdens and recycling benefits | Require subdivision decision, allocation basis, sensitivity where material, and a check that recycling or substitution benefits are not double counted. | `iso-14044-2006` |
| `validation_excluded_systems` | Scope claim | Fail a generic CPC 39380 claim if the default boundary includes new battery manufacture, battery use, generic WEEE or vehicle treatment before battery identification, or downstream manufacture of new batteries without explicit system expansion. | `unsd-cpc-3-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for one declared waste-battery collection, receipt, preparation, preprocessing, or recovery route; combined routes must preserve stage- and chemistry-resolved records |
| downstream_use | `secondary_dataset` and `background_dataset` for LCA process or lifecyclemodel construction when reference-flow qualifiers and gate coverage match the study |
| allowed_use | Stage-specific waste-battery management and recycling inventories; chemistry-specific comparisons with matched boundaries; measured mass-flow and recovery calculations under the declared method |
| excluded_use | New-battery manufacturing inventory; generic electronic-waste treatment; substitution across unmatched chemistries or routes; claims that black mass is automatically a product; regulatory compliance, recycling-efficiency, or recovery-target claims without the applicable official calculation and verification method |
| required_metadata | PCR id; lot and site identifiers; geography and period; waste-status basis; battery family, chemistry, configuration, charge or safe state, and condition; gross and net mass basis; collection and preparation state; technology route and gates; flow UUID decisions; output composition, moisture, status, and destination; allocation method |
| required_quality_disclosure | Data coverage and sampling; scale, meter, and laboratory QA; mass-balance difference; unclassified chemistry share; storage change; abnormal events; missing UUIDs; secondary-data substitutions; legal and method editions; limitations on representativeness |
| update_trigger | Change in chemistry mix, battery configuration, collection system, safety-conditioning practice, preparation or recovery technology, output specification or status, allocation method, applicable legal method, site controls, or evidence that materially changes mass, energy, emission, residue, or recovery results |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-07 | Official CPC 39380 identity and separation of waste-battery goods from new batteries and unrelated products |
| `eu-batteries-reg-2023-1542` | Standard (`standard`) | Regulation (EU) 2023/1542 concerning batteries and waste batteries, consolidated text 31 July 2025, https://eur-lex.europa.eu/eli/reg/2023/1542/2025-07-31/eng, retrieved 2026-08-07 | Waste-battery definitions; collection, treatment, preparation for recycling, reuse and repurposing distinctions; output-status boundary |
| `eu-waste-battery-recycling-2025-606` | Standard (`standard`) | Commission Delegated Regulation (EU) 2025/606 establishing the methodology for calculation and verification of recycling efficiency and material recovery from waste batteries, https://eur-lex.europa.eu/eli/reg_del/2025/606/oj/eng, retrieved 2026-08-07 | Input and output fraction accounting; chemistry separation; dry-mass, process-step, mass-balance, and battery-derived recovery records |
| `us-epa-lib-recycling` | Official guidance (`official_guidance`) | United States Environmental Protection Agency, Lithium-Ion Battery Recycling, https://www.epa.gov/hw/lithium-ion-battery-recycling, retrieved 2026-08-07 | Collection-to-shredding process decomposition; black-mass variability; separation of foils, plastics, steel, electrolyte, and recovery routes |
| `us-epa-used-lib-safety` | Official guidance (`official_guidance`) | United States Environmental Protection Agency, Used Lithium-Ion Batteries, https://www.epa.gov/recycle/used-lithium-ion-batteries, retrieved 2026-08-07 | Separate collection, terminal protection, damage handling, residual-charge, and fire-risk controls for lithium-ion batteries |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html, confirmed standard; retrieved 2026-08-07 | LCA inventory boundary, allocation, reporting, interpretation, and review framework |
