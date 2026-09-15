---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.photographic-including-cinematographic-cameras
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Photographic (including cinematographic) cameras

## 1. Scope and Applicability

This PCR applies to the factory-gate production of finished photographic cameras and cinematographic cameras that expose a declared photosensitive film format. It covers still-film cameras, motion-picture film cameras, and single-use film cameras when delivered as complete cameras. The foreground boundary starts with purchased camera components, process materials, utilities, and packaging at the reporting site and ends with an accepted camera in its declared factory-gate package state.

Digital cameras optimized for still images, television cameras, professional video cameras, video camera recorders, web cameras, objective lenses sold separately, cinematographic projectors, photographic film, photographic chemicals, and camera parts or accessories sold separately are excluded. The CPC 3.0 structure and explanatory notes keep these products in distinct subclasses. A data package shall identify whether the camera is still or cinematographic, the film format, body and optical configuration, power configuration, included accessories, package state, production geography, and manufacturing technology.

The minimum inventory below represents common camera assembly, cleaning, testing, and packing exchanges. Every additional material, component, utility, waste, and direct elementary emission that crosses the actual foreground boundary shall be added as its own atomic flow; absence shall be supported by process records rather than by an unspecified residual category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.photographic-including-cinematographic-cameras |
| classification_refs | CPC 3.0: 48322, exact candidate mapping context |
| covered_products | Finished still-film cameras; finished motion-picture film cameras; finished single-use film cameras |
| excluded_products | Digital cameras; television and professional video cameras; video camera recorders and web cameras; separately sold objective lenses; projectors; photographic film and chemicals; separately sold camera parts and accessories |
| representative_product | One accepted photographic or cinematographic film camera in the declared factory-gate package state |
| production_route | Receipt of purchased components and process materials; component preparation when performed at the reporting site; assembly; cleaning; functional testing; primary packing |
| market_state | Finished, accepted, factory-gate camera, declared as body-only, fixed-lens, or supplied kit and with package contents identified |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A camera device that exposes a declared photosensitive film format to still or motion-picture images according to its declared optical and mechanical performance |
| How much | One accepted finished camera in the declared factory-gate package state |
| How well | Conforming to the manufacturer's model-specific exposure, shutter, film-transport, optical, safety, and final-inspection requirements |
| How long or cycle | One manufactured camera; use-phase exposures and service life are outside this factory-gate functional unit |
| reference_flow_link | Output row `finished_camera` normalized by the measured mass of one accepted camera |

| Field | Value |
| --- | --- |
| Reference amount | Measured mass in kg of one accepted finished camera in the declared package state |
| Reference product flow | Photographic (including cinematographic) cameras `62021d26-e0c1-433c-90b7-0cee3dbced9a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | camera type: still-film or cinematographic; film format; body-only, fixed-lens, or kit configuration; included lens and accessories; power configuration; primary package contents; net camera mass and packaged mass; accepted-product test specification; production geography; manufacturing technology; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted cameras in the declared package state or sum verified net-product and included-package masses; report the number of cameras represented and divide all foreground exchanges by accepted output mass. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered energy record; when records are in kWh, convert to MJ using 1 kWh = 3.6 MJ and retain the original reading. |
| `water_mass_conversion` | process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; when water is metered by volume, convert with measured or declared density for the recorded temperature and retain the volume, density, and conversion basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased camera components, process materials, utilities, and packaging delivered to the reporting manufacturing site; their supplier, delivered state, and upstream dataset links are declared |
| starting_condition_role | Factory-gate foreground starting condition for camera assembly, on-site component preparation, cleaning, testing, and packing |
| product_classification_scope | Finished photographic and cinematographic film cameras within the semantic boundary stated in sections 1 and 2 |
| recursive_input_rule | A camera input already satisfying this PCR boundary is recorded as a purchased product input with its own upstream dataset and is not recursively decomposed inside the same foreground process |
| upstream_dataset_requirement | Link each purchased component, process material, electricity supply, water supply, and packaging product to a geography-, technology-, and product-state-representative upstream dataset; disclose any proxy |
| disclosure | Declare site, reporting period, camera model family, film format, body and lens configuration, included accessories, package contents, on-site operations, outsourced operations, electricity supply, water source, solvent recovery, waste destinations, and direct-emission measurement or calculation method |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground system boundary | Include receipt and handling of purchased inputs, all on-site preparation, assembly, cleaning, testing, rework, reject handling, and primary packing up to transfer of the accepted packaged camera at the factory gate. | `us-epa-camera-manufacturing-1977` |
| `sb_upstream_links` | purchased inputs | Represent the production of purchased components, process materials, utilities, and packaging with linked upstream datasets; do not silently absorb them into the foreground camera process. | `eu-pef-method-2021` |
| `sb_operation_completeness` | site operations | Reconcile the declared operation list to production routing, equipment, meters, solvent records, waste manifests, and final inspection so that an on-site molding, forming, machining, polishing, plating, coating, cleaning, or packing operation is not omitted. | `us-epa-camera-manufacturing-1977` |
| `sb_atomic_additions` | additional exchanges | Add every additional crossing exchange as one concrete product, waste, or elementary flow and state the condition under which it occurs; do not use an umbrella material, utility, waste, or emission row. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `camera_manufacturing` | Camera component preparation, assembly, cleaning, testing, and packing | required | Always include; individual conditional exchanges are recorded only when present in the declared camera configuration and site route | Foreground manufacture of the factory-gate reference camera | Accepted finished-camera mass in kg |

### Process: Camera component preparation, assembly, cleaning, testing, and packing (`camera_manufacturing`)

This process aggregates the reporting site's controlled camera-production operations while preserving each boundary-crossing exchange as an individual inventory row. Production routing and equipment records shall disclose which operations occur at the site.

#### Inputs

##### Product flows

###### Camera housing component (`camera_housing_component`)

Record the mass of the one housing component or housing subassembly installed in accepted and rejected cameras. Declare its material construction, supplier, delivered state, and whether fabrication occurs at the reporting site.

- Selected flow: Camera housing component
- Flow property / unit: Mass / kg
- Amount rule: measured or verified bill-of-material mass entering the camera manufacturing process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-camera-manufacturing-1977`

###### Photographic-camera optical lens element (`optical_lens_element`)

Record the mass of the optical lens element installed in the declared fixed-lens camera or supplied camera kit. For a body-only camera with no lens included, document non-applicability; separately sold objective lenses remain outside the product boundary.

- Selected flow: Photographic camera optical lens element
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-verified mass of the included optical lens element
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-camera-manufacturing-1977`

###### Photographic-camera shutter assembly (`camera_shutter_assembly`)

Record the mass of the one shutter assembly installed in accepted and rejected cameras, including the declared mechanical or electromechanical shutter state but excluding unrelated structural assemblies.

- Selected flow: Photographic camera shutter assembly
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-verified shutter assembly mass issued to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-camera-manufacturing-1977`

###### Photographic-camera film transport mechanism (`film_transport_mechanism`)

Record the mass of the one film transport mechanism installed in accepted and rejected cameras. Declare manual or powered transport and the supported film format.

- Selected flow: Photographic camera film transport mechanism
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-verified film transport mechanism mass issued to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-camera-manufacturing-1977`

###### Purchased electricity (`electricity`)

Record electricity delivered to the camera-production operations, including allocated line support and testing loads but excluding upstream generation emissions from the foreground elementary-flow inventory.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or invoice-reconciled electricity attributable to camera production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources:

###### Process water (`process_water`)

Record process water delivered for on-site cleaning, plating, polishing, or other camera-production operations. Sanitary and unrelated building water is excluded unless directly attributable.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water mass attributable to camera production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `us-epa-camera-manufacturing-1977`

###### Isopropanol cleaning solvent (`isopropanol_input`)

Record Isopropanol crossing the foreground boundary for camera or component cleaning. Declare purity, recovery and return status, and whether quantities are issued, recovered, or purchased net.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: net measured Isopropanol input after documented returns and recovered solvent carried across the reporting-period boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_isopropanol`
- Sources:

###### Corrugated board box (`corrugated_board_box`)

Record the mass of the corrugated board box included in the declared primary package. Other packaging components, when present, shall be added as separate material-specific product flows.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-specified mass of corrugated board boxes used for accepted cameras
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished photographic or cinematographic camera (`finished_camera`)

Record only cameras that passed the declared final inspection and are in the declared factory-gate package state. Keep accepted output separate from reworked, rejected, or work-in-progress units.

- Selected flow: Photographic (including cinematographic) cameras `62021d26-e0c1-433c-90b7-0cee3dbced9a`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted finished-camera mass in the declared package state
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one accepted camera represented by its measured kg output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_output`
- Sources:

##### Waste flows

###### Rejected complete camera assembly (`rejected_camera_assembly`)

Record the mass of complete camera assemblies rejected from final inspection and transferred to recycling, rework outside the reporting period, treatment, or disposal. Do not combine this row with lens scrap, packaging waste, or mixed manufacturing waste.

- Selected flow: Rejected photographic camera assembly
- Flow property / unit: Mass / kg
- Amount rule: measured mass of rejected complete camera assemblies leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rejected_camera`
- Sources:

###### Wastewater generated by cleaning (`cleaning_wastewater`)

Record cleaning wastewater when it leaves the foreground process for on-site or off-site treatment. Declare composition, hazardous status, treatment destination, and whether the amount is measured directly or derived from a water balance.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured or water-balance-derived mass of cleaning wastewater transferred for treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `us-epa-camera-manufacturing-1977`

##### Elementary flows

###### Isopropanol emitted to air (`isopropanol_to_air`)

Record direct Isopropanol releases to unspecified air from foreground cleaning, drying, handling, and storage after subtracting documented recovery and waste transfers. Do not include upstream emissions from solvent production.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct air release or solvent-balance residual assigned to air with documented assumptions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted finished camera output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_isopropanol_air`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared camera-production operations | Avoid allocation by metering or otherwise subdividing camera lines, operations, and support loads wherever direct attribution is feasible. | `eu-pef-method-2021` |
| `allocation_physical` | unavoidable shared burdens | When subdivision is not feasible, use a documented causal physical relationship such as machine time, measured energy, water use, solvent issue, occupied production time, or accepted product mass; justify why the driver represents the shared burden. | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | burdens lacking a defensible physical relationship | Economic allocation may be used only after documenting why subdivision, system expansion, and a causal physical relationship are infeasible; report prices, currency, averaging period, and sensitivity. | `eu-pef-method-2021` |
| `allocation_waste_and_rework` | rejects, rework, recycling, and waste transfers | Assign burdens through the point of rejection to the reporting-period camera production; subtract neither waste nor recyclable material burdens unless a separately documented downstream system-expansion or allocation model is applied. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_mass` | `camera_manufacturing` | housing, lens, shutter, and film-transport component inputs | bill of materials, issue records, supplier specifications, and verification weights | component identity; material; supplier; delivered state; mass per component; units issued; returns; rejects; camera model | reconcile production issues and returns to the approved bill of materials; verify representative component masses on calibrated scales | kg | each model or bill-of-material revision; aggregate monthly | complete reporting period with opening and closing work-in-progress reconciled | every reporting site and outsourced operation included in the foreground boundary | sum net issued mass by component and model, then divide by accepted output mass | approved bill of materials; supplier specification; calibration record; issue-return reconciliation |
| `cp_electricity` | `camera_manufacturing` | purchased electricity input | submeter readings and reconciled electricity invoices | meter id; opening and closing reading; unit; line; downtime; shared-load driver; invoice total | read dedicated meters where available and reconcile to site invoices; allocate shared loads under section 7 | kWh and MJ | at least monthly | complete reporting period | all camera-production and attributable support equipment at each site | convert kWh to MJ, sum attributable energy, and divide by accepted output mass | meter calibration or utility record; invoice reconciliation; allocation worksheet |
| `cp_water` | `camera_manufacturing` | process water input | water meter, batch record, and water-source record | meter id; volume or mass; temperature; density if converted; operation; source; reuse; discharge link | meter process water or reconcile batch additions and returns; exclude unrelated sanitary water | kg and m3 | each batch or at least monthly | complete reporting period | all included cleaning, plating, polishing, and other wet operations | convert volume to mass when needed, subtract documented closed-loop carryover only, and divide by accepted output mass | meter calibration; batch sheet; density basis; water balance |
| `cp_isopropanol` | `camera_manufacturing` | Isopropanol product input | purchase, issue, return, recovery, and stock records | purity; beginning stock; purchases; issues; returns; recovered stock; ending stock; waste transfer | perform a reporting-period solvent inventory by material identity and reconcile storage changes | kg | each issue and monthly reconciliation | complete reporting period | all included cleaning stations, storage, and recovery units | beginning stock plus purchases minus ending stock, documented returns, and exported recovered solvent; divide net input by accepted output mass | stock ledger; purchase records; issue tickets; recovery records |
| `cp_packaging` | `camera_manufacturing` | corrugated board box input | packaging bill of materials, supplier specification, and verification weights | box grade; dimensions; mass per box; boxes issued; returns; damaged boxes; cameras packed | reconcile boxes issued and returned; verify representative mass on a calibrated scale | kg | each packaging revision; aggregate monthly | complete reporting period | every packing line in the foreground boundary | multiply verified box mass by net boxes used and divide by accepted output mass | packaging specification; scale calibration; issue-return reconciliation |
| `cp_finished_output` | `camera_manufacturing` | accepted finished camera output | final inspection, packing, count, and mass records | model; serial or lot; accepted count; rejected count; net mass; packaged mass; package contents; inspection status | count only passed units and weigh a representative sample or every unit under a documented sampling plan | kg and item | each lot or shift | complete reporting period | all final inspection and packing points | sum accepted packaged mass by declared configuration; use as the normalization denominator | final inspection record; scale calibration; sampling plan; packing record |
| `cp_rejected_camera` | `camera_manufacturing` | rejected complete camera assembly output | nonconformance, rework, and waste transfer records | model; reject reason; mass; disposition; rework return date; destination | segregate complete-camera rejects from component scrap and packaging waste; weigh transfers | kg | each event; aggregate monthly | complete reporting period including unresolved rework stock | all final inspection and rework areas | sum complete-camera rejects leaving the process and divide by accepted output mass | nonconformance report; scale calibration; transfer manifest; rework reconciliation |
| `cp_cleaning_wastewater` | `camera_manufacturing` | cleaning wastewater output | discharge meter, tank transfer, composition analysis, and water balance | mass or volume; density; operation; contaminants; hazardous status; destination; treatment route | meter or weigh each transfer; if calculated, reconcile water inputs, retained moisture, evaporation, and other documented outlets | kg and m3 | each transfer or at least monthly | complete reporting period | every cleaning operation and wastewater transfer point | sum transferred mass or calculate from a closed water balance, then divide by accepted output mass | meter or scale record; laboratory analysis; transfer manifest; water-balance worksheet |
| `cp_isopropanol_air` | `camera_manufacturing` | direct Isopropanol emission to air | stack or workplace emission measurement and solvent balance | measured concentration and flow or solvent input; recovered mass; product retention; wastewater and waste mass; stock change; abatement efficiency | prefer representative emission measurement; otherwise calculate the residual of a reconciled Isopropanol balance and document the share assigned to air | kg | measurement campaign plus monthly balance | representative operating conditions and complete reporting period | all included cleaning, drying, storage, and abatement points | sum measured releases or calculated air residual and divide by accepted output mass | analytical report; flow calibration; solvent-balance closure; abatement operating record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = reporting-period exchange amount / accepted finished-camera mass in the declared package state | exchange amount; accepted finished-camera mass | exchange per kg reference product |  |
| `calc_electricity_mj` | electricity input | electricity MJ = metered kWh × 3.6; retain both values before normalization | metered kWh | electricity MJ |  |
| `calc_water_mass` | process water and cleaning wastewater | water mass = measured volume × measured or declared density at the recorded condition | volume; density; temperature; direct mass when available | water or wastewater mass in kg |  |
| `calc_isopropanol_input` | Isopropanol input | net Isopropanol input = beginning stock + purchases + transferred-in recovered solvent − ending stock − supplier returns − exported recovered solvent | stock and transaction records by purity-adjusted mass | net Isopropanol product input in kg |  |
| `calc_isopropanol_air` | Isopropanol direct air emission | air release = net Isopropanol input − mass retained in product − mass in wastewater − mass in exported solvent waste − other measured outputs; negative or materially unclosed balances are invalid | net input; product retention; wastewater; waste transfer; measured outputs | Isopropanol emitted to air in kg |  |
| `calc_mass_reconciliation` | product and waste mass | reconcile purchased component and packaging mass with accepted output, rejects, measured wastes, stock changes, and documented emissions; investigate material imbalance instead of assigning it to an unspecified flow | component inputs; packaging inputs; output; rejects; wastes; stock change; direct emissions | mass-balance closure statement |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Identify camera type, film format, model family, body and optical configuration, included accessories, package contents, product state, and production route. | product specification; packaging bill of materials; final inspection record |
| `dq_temporal` | all foreground records | Cover a continuous representative reporting period and disclose shutdowns, start-up, abnormal production, model changeovers, and opening or closing work-in-progress that materially affect results. | dated meter, production, inventory, and quality records |
| `dq_completeness` | inventory completeness | Reconcile purchasing, issue, meter, production, waste, and emission records; add each material crossing flow omitted from the minimum inventory as one atomic exchange. | reconciliation worksheet; operation map; bill of materials; waste manifests |
| `dq_measurement` | mass, water, electricity, solvent, and emissions | Use calibrated instruments or traceable supplier and utility records; retain original units, conversions, sampling plans, detection limits, and allocation drivers. | calibration certificates; invoices; supplier specifications; laboratory reports |
| `dq_upstream_representativeness` | linked background datasets | Match component or material identity, delivered state, geography, technology, and time; disclose and justify every proxy. | dataset metadata; supplier declaration; proxy assessment |
| `dq_uncertainty` | calculated and allocated values | Document measurement uncertainty, sampling variability, balance closure, and sensitivity to material allocation choices; do not replace missing foreground values with uncited typical ranges. | uncertainty calculation; sensitivity record; reviewer note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | product category and reference flow | Confirm that the output is a finished photographic or cinematographic film camera and not a digital camera, video camera, separately sold lens, projector, film, chemical, part, or accessory. | `un-cpc-3-0-structure-2025`, `un-cpc-3-0-explanatory-notes-2025` |
| `validation_reference_mass` | functional unit and normalization | Confirm that one accepted camera is represented by measured kg in the declared package state and that every normalized amount uses the same accepted-output denominator. |  |
| `validation_inventory_reconciliation` | foreground inventory | Confirm that production routing, bills of materials, meters, solvent records, waste manifests, and final inspection reconcile to the 12 minimum rows plus separately declared additional atomic exchanges. | `us-epa-camera-manufacturing-1977` |
| `validation_electricity` | electricity input | Confirm original kWh or MJ readings, the 3.6 MJ/kWh conversion when used, invoice reconciliation, and the allocation driver for shared loads. |  |
| `validation_water_and_wastewater` | process water and cleaning wastewater | Confirm source, original meter basis, density conversion, cleaning origin, treatment destination, and water-balance consistency. | `us-epa-camera-manufacturing-1977` |
| `validation_solvent_balance` | Isopropanol input and air emission | Confirm chemical identity, purity adjustment, stocks, purchases, recovery, wastewater or waste transfers, abatement, air measurement or calculation, and nonnegative solvent-balance closure. |  |
| `validation_rejects` | rejected camera assemblies | Confirm that complete-camera rejects are measured separately from reworked units, component scrap, lens scrap, packaging waste, and mixed manufacturing waste. |  |
| `validation_allocation` | shared processes | Confirm that subdivision was attempted first and that any remaining allocation uses a disclosed, reproducible causal driver or a fully justified last-resort economic basis. | `eu-pef-method-2021` |
| `validation_evidence_gaps` | ranges and unresolved UUIDs | Confirm that UUID-empty rows remain registered in manifest review metadata and that absent empirical ranges are not replaced with single-study values, snippets, or invented bounds. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared photographic or cinematographic film camera configuration |
| downstream_use | May be used as a secondary_dataset or background_dataset for systems consuming a camera at the factory gate when identity, geography, technology, time, and package state are representative |
| allowed_use | Cradle-to-gate camera production studies; supply-chain inventories for film-based imaging equipment; comparative studies only when functional unit, included lens and accessories, package state, and boundary are equivalent |
| excluded_use | Digital-camera production; television or video camera production; separately sold lens or part production; camera use, film consumption, developing, image processing, maintenance, or end-of-life without additional life-cycle modules |
| required_metadata | PCR id and version; camera type; film format; model family; body and lens configuration; included accessories; package contents; net and packaged mass; production geography; technology; reporting period; on-site and outsourced operations; upstream dataset links; allocation methods; UUID gaps |
| required_quality_disclosure | Foreground coverage; meter and scale basis; bill-of-material reconciliation; sample sizes; balance closure; solvent recovery and air-emission method; wastewater composition and destination; reject disposition; proxies; uncertainty; unresolved range evidence |
| update_trigger | Change in camera configuration, film format, included lens or accessories, package design, component supplier or delivered state, production site or route, energy or water supply, cleaning solvent or recovery, waste treatment, allocation driver, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48322 identity and hierarchy; distinct sibling product identities |
| `un-cpc-3-0-explanatory-notes-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-07) | Product-boundary separation from digital cameras, television cameras, video camera recorders, lenses, projectors, film, chemicals, parts, and accessories |
| `un-cpc-1-1-chinese-2010` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/cpc_v1_1_complete%28pdf%29_chinese.zip (retrieved 2026-09-07) | Verified professional Chinese rendering of stable code 48322 as 照相机（包括电影摄影机） |
| `us-epa-camera-manufacturing-1977` | Official guidance (`official_guidance`) | Clark, R.; Burch, J.; Ayers, R.; Brown, D.; Dick, R.; Henning, H. J.; Hooie, D.; Sharp, R. Potential Environmental Impact of Compounding and Fabricating Industries: A Preliminary Assessment. U.S. EPA, EPA-600/2-77-160, August 1977. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100PHTX.TXT (retrieved 2026-09-07) | Camera-manufacturing process decomposition; molding, metal forming, assembly, plating and cleaning water, and lens-processing waste checkpoints |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, 15 December 2021, consolidated English text. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-07) | System-boundary linkage, data representativeness, and multifunctionality decision hierarchy |
