---
pcr_id: pcr.gravity-fed-prefabricated-polyethylene-septic-tank-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gravity-fed prefabricated polyethylene septic-tank installation services

## 1. Scope and Applicability

This PCR covers first installation of a factory-made polyethylene gravity septic tank in a nontraffic location with demonstrated dry, non-buoyant site conditions. The accountable job includes utility clearance, actual excavation and level support preparation, vessel inspection/lowering, compatible inlet/outlet short stubs and sealing/tee connections, required access risers/lids, suitable backfill and compaction, surface drainage grading and erosion-resistant finish, and the actual specified installation-stage inspection/test. The gate is an accepted installed vessel bounded by explicitly located inlet and outlet stub endpoints. A tank by itself does not deliver a functioning complete septic treatment/dispersal system.

Exclude onsite tank manufacture, traffic-load or high-groundwater anchorage routes, pumps/dosing/aeration/disinfection units, drainfields, building drains, ongoing wastewater treatment, pumping-out and later maintenance. Actual permit/design and model-specific approved instructions determine compliance; the cited manufacturer example establishes route responsibilities rather than universal dimensions or test settings. If the site needs excluded buoyancy or drainage-control works, route fit must be reassessed before applying this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.gravity-fed-prefabricated-polyethylene-septic-tank-installation-services |
| classification_refs | cpc:3.0:54342; narrower than Septic system installation services |
| covered_products | Stub-bounded accepted installation of one actual factory polyethylene gravity septic tank with civil support, connection and reinstatement work |
| excluded_products | Whole operating septic systems and dispersal fields; pump/treatment units; tank production; traffic or buoyancy-control installations; later maintenance |
| representative_product | Actual approved IM-1060-type gravity tank installation at a dry qualified nontraffic site; model and local approval must be declared |
| production_route | Job-specific excavation/support, factory vessel integration, connection, backfill/compaction/finish and actual installation acceptance |
| market_state | Completed civil/connection installation service at defined stubs; factory tank is an upstream product input |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted gravity-fed nontraffic factory polyethylene septic-tank installation at defined stubs |
| How much | 1 Item(s) accepted actual installation |
| How well | Approved actual model/capacity/compartments and gravity duty; sound vessel; compatible correctly levelled stubs, tees/gaskets/risers/lids; accepted support/backfill/finish and required installation tests |
| How long or cycle | One job from first site preparation through signed handover, including attributable damaged parts, failed installation, repair and retest. Asset attribution additionally indexes production, service periods across other jobs, maintenance/replacement and final removal. Future tank operation is separate. |
| reference_flow_link | `accepted_tank_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted gravity-fed nontraffic factory polyethylene septic-tank installation at defined stubs |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Job/site and permit/design revision; manufacturer/model/capacity/compartments; gravity configuration; dry-site soil/groundwater qualification and nontraffic use; exact stub endpoints/inverts and dimensions with units; actual native/imported support/backfill, cover, risers/lids and finish; actual test/inspection method, units, tolerance, approving authority and acceptance record; exclusions and downstream interface owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| counted_handover | accepted_tank_installation | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One accepted installation is counted only after its complete stated civil/connection gate passes; capacity is a design qualifier and cannot convert different tank models into equivalent counts. |
| physical_measurements | all inventory rows | Actual exchange property | Actual recorded unit | Retain each quantity in its physically measured unit: mass, energy, service duration, transport work or actual equipment service unit. Verify each property-to-unitgroup chain for final binding. Record actual density/moisture and calibrated measurement if converting soil or water volume to mass; never infer mass from tank capacity or replace time/energy with count. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | An approved qualified nontraffic site and an upstream factory tank at its declared supply gate. In-situ native soil is environmental starting stock; job-specific excavation, soil handling, support and reinstatement are foreground responsibilities. |
| starting_condition_role | Declared site condition and upstream purchased-product gate; neither zero-burden new excavation nor a complete operating septic installation |
| product_classification_scope | Semantic tank-installation subset of CPC3.0 54342, with inlet/outlet stub limits |
| recursive_input_rule | Do not recursively consume this same accepted final service for the same job. An independently supplied excavation/support service is a distinct bounded provider input only when its real work, quantities, responsibility and acceptance handoff exist; otherwise its operations stay inside tank_installation. |
| upstream_dataset_requirement | Factory tank and actual separate materials require cradle-to-supply datasets. Machinery/provider coverage must state production, use/maintenance and removal coverage and fill real gaps once; delivery/packaging included upstream must not be added twice. |
| disclosure | Declare actual scope owner, supply-kit bill, soil custody, field methods, all site work, installation acceptance, failures/retests, stock carry-forward and machinery service-period attribution. Future wastewater operation and downstream drains remain separately owned. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers first installation of a factory-made polyethylene gravity septic tank in a nontraffic location with demonstrated dry, non-buoyant site conditions. The accountable job includes utility clearance, actual excavation and level support preparation, vessel inspection/lowering, compatible inlet/outlet short stubs and sealing/tee connections, required access risers/lids, suitable backfill and compaction, surface drainage grading and erosion-resistant finish, and the actual specified installation-stage inspection/test. The gate is an accepted installed vessel bounded by explicitly located inlet and outlet stub endpoints. A tank by itself does not deliver a functioning complete septic treatment/dispersal system. Exclude onsite tank manufacture, traffic-load or high-groundwater anchorage routes, pumps/dosing/aeration/disinfection units, drainfields, building drains, ongoing wastewater treatment, pumping-out and later maintenance. Actual permit/design and model-specific approved instructions determine compliance; the cited manufacturer example establishes route responsibilities rather than universal dimensions or test settings. If the site needs excluded buoyancy or drainage-control works, route fit must be reassessed before applying this PCR. |  |
| site_fit | tank_installation | Require approved actual utilities/soil/groundwater/nontraffic assessment. Include excavation and level compacted support. Unsuitable soil removal and suitable replacement are measured. Reject route use when excluded buoyancy/traffic works are actually necessary. | `ads-septic-tank-installation-2024` |
| complete_assembly | tank_installation | Reconcile factory bill of supply against vessel, gaskets, compatible stubs/tees, screws, lids and risers; record only genuine additional components separately. Lower undamaged tank, connect per actual permitted arrangement, support haunches, alternate sidewall backfill before top cover, compact and finish with drainage grading and erosion-resistant vegetation. | `ads-septic-tank-installation-2024` |
| water_and_tests | tank_installation | Require only actual manufacturer/jurisdiction installation inspection/test obligations with recorded units and limits. The source does not require universal pre-backfill water filling; protective filling applies to an excavation at risk of filling with rain/other water. Record actual protection/test water and destination. Oregon riser test figures and vacuum warnings are not universal defaults. | `ads-septic-tank-installation-2024` |
| period_assets | tank_installation | Index job phases preparation, lowering/connections, backfill/finish, inspection, repair/retest and handover. Link each shared excavator/compactor/tool asset to all consuming jobs and reporting periods, including production, service/maintenance/replacement and termination. Actual bounded provider coverage or evidence-based complete-life asset attribution must include capital and removal burdens without duplicating fuel/materials. |  |
| soil_custody | tank_installation | Track excavated native soil, onsite reused backfill, imported fill, closing stock and actual export by source/destination and actual product or waste status. Onsite transfer is a balance, not a new purchased soil input or co-product credit. Waste handoffs and characterized direct releases remain distinct. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tank_installation | Civil preparation, tank integration and installation acceptance | required | All in-scope jobs; protection/test water, extra components and replacement/retest use depend on actual records | foreground installation and assembly integration | 1 Item(s) accepted stub-bounded tank installation |

The single node owns excavation/support, vessel integration, backfill/finish and the inspection/repair loop. Damaged tank, incompatible connection, failed inspection or leakage is an off-spec state inside tank_installation until repaired and retested, returned under actual product custody, or discarded via the actual waste destination. A failed state is never an accepted second installation. No document receipt, permit or test certificate is a separate production node. Variable cards below expand to zero, one or multiple independently identified actual exchanges; heterogeneous materials, fuels, waste types or emitted substances are not summed into one generic flow.

### Process: Civil preparation, tank integration and installation acceptance (`tank_installation`)

#### Inputs

##### Product flows

###### Factory polyethylene septic tank at declared supply gate (`factory_tank`)

The complete purchased vessel is an upstream product. Declare model/capacity/compartments, factory penetrations and included fittings/lids/risers; resin alone is not its identity.

- Selected flow: Factory polyethylene septic tank at declared supply gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record actual gross tank receipts/issues attributable to the job, including installed and damaged/replacement vessels; distinguish real returns and closing stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual model-specific dispatch and job issue/serial records, replacement/damage log, supplier bill and stock custody are required; no universal tank mass or loss rate.

###### Separately supplied compatible inlet/outlet gaskets (`extra_gaskets`)

Each genuine extra gasket is an actual discrete component matched to the approved tank/pipe penetration.

- Selected flow: Separately supplied compatible inlet/outlet gaskets
- Flow property / unit: Number of items / Item(s)
- Amount rule: Record actual separately supplied gasket quantities by specific material/size, including replacement; omit a second burden for factory-included pieces.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual kit exclusion, compatible gasket specification, issue/return quantities and damage records are required; no assumed two extra gaskets.

###### Separately supplied compatible septic-tank pipe stub (`extra_pipe_tees_stub`)

Record only this independently identified separately supplied compatible septic-tank pipe stub at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible septic-tank pipe stub
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied allowed septic-tank tee (`extra_pipe_tees_tee`)

Record only this independently identified separately supplied allowed septic-tank tee at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied allowed septic-tank tee
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied compatible septic-tank access riser (`extra_access_parts_riser`)

Record only this independently identified separately supplied compatible septic-tank access riser at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible septic-tank access riser
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied compatible septic-tank access lid (`extra_access_parts_lid`)

Record only this independently identified separately supplied compatible septic-tank access lid at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible septic-tank access lid
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actually supplied erosion-control seed product (`finish_products_seed`)

Record only this independently identified actually supplied erosion-control seed product at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied erosion-control seed product
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_soil`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actually supplied erosion-control matting (`finish_products_matting`)

Record only this independently identified actually supplied erosion-control matting at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied erosion-control matting
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_soil`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual installation and test electricity (`installation_electricity`)

Actual supply mix/provider and metering boundary qualify the electricity product. Final binding requires an exact verified energy-property support chain.

- Selected flow: Actual installation and test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Record actual metered tool/charger/test electricity attributable to the job, separately from future wastewater operation and provider-included energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual supply identity, task meter/charging allocation, measurement uncertainty and observed job duration are required; no default test energy or machine power multiplication.

###### Actual supplied test or protective-fill water (`test_protection_water`)

Installation does not presume water filling. Any actual filling, test, repair and retest water is accountable, and subsequent retained water or discharge is recorded.

- Selected flow: Actual supplied test or protective-fill water
- Flow property / unit: Mass / kg
- Amount rule: Record actual purchased/supplied water only when the actual test or rain-protection instruction requires it; retain source/quality and repeated fill quantities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual applicable test/protection requirement, model-specific fill level, metered supply or volume with verified density and destination are required; no universal full-tank water quantity.

###### Complete septic-installation excavator service (`equipment_provision_excavator`)

Record only this independently identified complete septic-installation excavator service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `asset_share`; retain the explicit original formula below.

- Selected flow: Complete septic-installation excavator service
- Flow property / unit: Duration / h
- Amount rule: Final compatible equipment-service h per reference flow = independently attributed actual job service h / accepted tank-installation count. For a real owned complete-life-per-hour view, matching phase burden per h = complete supported phase burden / evidenced total service h across all consuming jobs and periods; account remaining/unused capacity and missing phases explicitly. Apply job h once, not an additional Count fraction. Actual h provider reference/scope must match; different native references require refinement.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete septic-installation compactor service (`equipment_provision_compactor`)

Record only this independently identified complete septic-installation compactor service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `asset_share`; retain the explicit original formula below.

- Selected flow: Complete septic-installation compactor service
- Flow property / unit: Duration / h
- Amount rule: Final compatible equipment-service h per reference flow = independently attributed actual job service h / accepted tank-installation count. For a real owned complete-life-per-hour view, matching phase burden per h = complete supported phase burden / evidenced total service h across all consuming jobs and periods; account remaining/unused capacity and missing phases explicitly. Apply job h once, not an additional Count fraction. Actual h provider reference/scope must match; different native references require refinement.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete septic-tank lifting-equipment service (`equipment_provision_lifting`)

Record only this independently identified complete septic-tank lifting-equipment service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `asset_share`; retain the explicit original formula below.

- Selected flow: Complete septic-tank lifting-equipment service
- Flow property / unit: Duration / h
- Amount rule: Final compatible equipment-service h per reference flow = independently attributed actual job service h / accepted tank-installation count. For a real owned complete-life-per-hour view, matching phase burden per h = complete supported phase burden / evidenced total service h across all consuming jobs and periods; account remaining/unused capacity and missing phases explicitly. Apply job h once, not an additional Count fraction. Actual h provider reference/scope must match; different native references require refinement.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete reusable hole-saw equipment service (`equipment_provision_hole_saw`)

Record only this independently identified complete reusable hole-saw equipment service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `asset_share`; retain the explicit original formula below.

- Selected flow: Complete reusable hole-saw equipment service
- Flow property / unit: Duration / h
- Amount rule: Final compatible equipment-service h per reference flow = independently attributed actual job service h / accepted tank-installation count. For a real owned complete-life-per-hour view, matching phase burden per h = complete supported phase burden / evidenced total service h across all consuming jobs and periods; account remaining/unused capacity and missing phases explicitly. Apply job h once, not an additional Count fraction. Actual h provider reference/scope must match; different native references require refinement.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual external transport and waste haulage services (`transport_service`)

Vehicle loading and actual empty/repositioning legs follow the chosen documented transport dataset; onsite earthmoving remains the installation task.

- Selected flow: Actual external transport and waste haulage services
- Flow property / unit: mass*distance / t*km
- Amount rule: Record each actual route/provider mass and distance including tank/material delivery, actual return and waste movements; add only transport outside upstream/service coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual consignment route, payload, distance, vehicle/provider and dataset included-leg boundaries are required; no generic kilometres or count conversion for freight.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted gravity-fed nontraffic factory polyethylene septic-tank installation at defined stubs (`accepted_tank_installation`)

The accepted output has completed actual excavation/support, undamaged vessel integration, stubs, required access components, backfill/compaction/finish and installation-stage acceptance. The count excludes unresolved failures and does not certify future treatment performance.

- Selected flow: Accepted gravity-fed nontraffic factory polyethylene septic-tank installation at defined stubs
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: The exact 1 Item(s) amount defines the reference, not an empirical range. Actual model/site/stub/acceptance record must demonstrate that this single completed job is the declared unit; no equivalence inferred from capacity.

###### Usable complete factory polyethylene tank returned outward (`usable_product_returns_tank`)

Record only this independently identified usable complete factory polyethylene tank returned outward at its actual state and supply or receiving gate. Actual complete usable original model/serial vessel product received outward, Count/Item(s) matching supply; measured kg auxiliary only. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable complete factory polyethylene tank returned outward
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count only the actual outward transfer of this complete usable product in Item(s), accepted by its named recipient at the documented handover. Match the original supplied SKU/configuration, usable state and selected Count/Item(s) reference; retain receipt/return IDs and upstream burden custody without a second return deduction. Closing stock, internal correction and discarded waste do not enter this product quantity. Normalize the attributable outward count once by the original accepted-service denominator; kg is an auxiliary measurement, not a second exchanged view.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable separately supplied tank gasket returned outward (`usable_product_returns_gasket`)

Record only this independently identified usable separately supplied tank gasket returned outward at its actual state and supply or receiving gate. Actual usable original separately supplied gasket SKU received outward in matching Item(s), no integral seal double count. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable separately supplied tank gasket returned outward
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count only the actual outward transfer of this complete usable product in Item(s), accepted by its named recipient at the documented handover. Match the original supplied SKU/configuration, usable state and selected Count/Item(s) reference; retain receipt/return IDs and upstream burden custody without a second return deduction. Closing stock, internal correction and discarded waste do not enter this product quantity. Normalize the attributable outward count once by the original accepted-service denominator; kg is an auxiliary measurement, not a second exchanged view.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Native-origin clean soil accepted outward as usable product (`usable_product_returns_clean_native_soil`)

Record only this independently identified native-origin clean soil accepted outward as usable product at its actual state and supply or receiving gate. Actual legal product acceptance/intended use for native-origin clean soil, with cp_soil site/excavation provenance and same transfer_id in cp_components; no original purchased lot or upstream soil manufacturing burden. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Native-origin clean soil accepted outward as usable product
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

###### Complete rejected polyethylene septic-tank waste (`solid_waste_tank`)

Record only this independently identified complete rejected polyethylene septic-tank waste at its actual state and supply or receiving gate. Actual rejected whole tank dispatched as waste, includes integral parts once; usable product return mutually exclusive. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete rejected polyethylene septic-tank waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual waste-status excavated-soil transfer (`solid_waste_soil`)

Record only this independently identified actual waste-status excavated-soil transfer at its actual state and supply or receiving gate. Only actual unsuitable/exported soil legally classified and accepted as waste, not native soil retained onsite or accepted clean-soil product. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual waste-status excavated-soil transfer
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual test or protection water handed to treatment (`water_waste`)

Collected contaminated test water crosses waste custody to a receiver only when that actual route occurs; a direct environmental discharge belongs in actual characterized releases.

- Selected flow: Actual test or protection water handed to treatment
- Flow property / unit: Mass / kg
- Amount rule: Record actual water discharged to a managed treatment/waste receiver by source event and receiving route, accounting for retained water and repeat tests.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ads-septic-tank-installation-2024`

Range evidence need: Actual receiving route, measured quantity, contamination/acceptance record, retained inventory and applicable disposal authorization are required; no assumed sewage-treatment load.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| job_attribution | tank_installation | Attribute direct actual job materials/energy/site work including failures, repair and retest to the finally accepted job. Internal repair loops do not create another accepted output. Incompatible configurations or incomplete jobs are separated and disclosed, never denominator dilution. |  |
| asset_attribution | `equipment_provision_excavator`; `equipment_provision_compactor`; `equipment_provision_lifting`; `equipment_provision_hole_saw` | For each asset index production, each service/reporting period and consumer job, maintenance/replacement and final removal. Use actual documented service activity shares against complete supported service coverage, with residual/unused capacity explained. Retain capital/maintenance/removal burdens or verified provider inclusion once; fill missing provider phases explicitly and avoid duplicating included operational fuel. Do not assume universal lifetime or amortization. |  |
| custody_attribution | `usable_product_returns_tank`; `usable_product_returns_gasket`; `usable_product_returns_clean_native_soil`; `solid_waste_tank`; `solid_waste_soil`; actual exchanges required by `refine_imported_support_fill` | Maintain gross opening stock/receipts/issues/installed or consumed disposition/real outward returns/waste/closing stock balance by actual identity. All material input cards use gross job receipts/issues; placement or consumption is a disposition, not an alternate input basis. Consumed-fuel exchanges exclude unused/returned fuel reconciled separately. Retained stock carries a declared unconsumed burden forward and is not a product output. Returned products have original-lot burden custody and do not earn automatic substitution credit. Native soil reused onsite has handling burdens and no purchased-production burden. Any genuine coproduct outside this scope requires explicit separate allocation review. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | tank_installation | vessel/components and usable returns | supplier bills and calibrated quantity/stock records | job_id; lot_id; product_identity; model; included_kit_parts; gross_receipts; gross_issues; installed_amount; real_outward_returns; waste_amount; closing_stock; mass_kg; matched_item_count; product_specific_mass_evidence; dimension_unit; native_soil_provenance; transfer_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile factory bill and actual distinct extra roles using gross material receipts/issues and all dispositions, never net consumed/placed input. Weigh actual mass or use traceable matching supplier dimensions/mass; keep counted vessel/gasket records. Record real custody returns once and retained stock carry-forward. Cross-reference cp_soil native-soil provenance by transfer_id; use actual mass evidence to close counted vessel/gasket receipts against mass-based returns. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. Count-supplied tank/gasket outward exchanges retain Item(s); measured kg is auxiliary balance evidence, never a second return flow. Native-origin clean soil uses site/excavation provenance linked to cp_soil, not a fictitious purchased-product lot or upstream soil-production burden. | kg; Item(s); actual dimensions | Each receipt/issue/install/return/replacement | All preparation through final handover and failed attempts | Job and supplying lots | per reference flow | Signed bills, serials, scale calibration, compatibility and lot balance |
| cp_soil | tank_installation | excavation/support/backfill and finish | site survey and material ledger | job_id; native_soil_suitability; groundwater_state; excavated_quantity; surveyed_volume_unit; reused_onsite_quantity; import_mass_kg; material_identity; gross_receipts; gross_issues; placed_or_consumed; real_outward_returns; waste_quantity; closing_quantity; disposition_unit; moisture_basis; density_unit; finish_product_identity; closing_stock; exported_quantity; destination; custody_status; transfer_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Measure actual excavation and soil/finish custody by material state; use field survey and weigh tickets, measured conversion properties and explicit balance uncertainty. Pair native-origin soil export with cp_components outward-custody record using transfer_id and actual measured mass, preserving site provenance rather than a purchased lot. Record local placement/compaction/grade acceptance with actual units and limits; onsite soil transfer creates no purchased input. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; actual surveyed volume and geometry units | Each excavation/import/placement/export and finish acceptance | Entire civil preparation, backfill, correction and finish | Actual excavation and controlled stock areas | per reference flow | Approved soil/site report, calibrated survey/scales and signed placement/compaction/grade records |
| cp_energy | tank_installation | fuels and electricity | meter and fuel stock/task logs | job_id; task_id; asset_id; period_id; fuel_identity; fuel_mass_kg; fuel_volume; fuel_volume_unit; density_value; density_unit; density_temperature; density_temperature_unit; electricity_kWh; charging_boundary; provider_inclusion; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile actual task fuel and metered electricity including rework. Any activity allocation uses recorded tasks and a documented denominator; identify provider included use and future operating-energy exclusion. Reconcile unused stock and unconsumed fuel returns outside the consumed-fuel exchange. Preserve each physical unit and conversion evidence. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; kWh | Each task/refuel/meter interval | Preparation through repair/retest/handover | Job equipment and declared charging supply | per reference flow | Meter/scale calibration, fuel/density evidence and provider coverage |
| cp_water | tank_installation | actual supplied and outgoing installation water | meter and test/disposition logs | job_id; event_id; actual_requirement; water_source; fill_level_unit; supply_mass_kg; measured_volume; measured_volume_unit; density_unit; retained_water; treatment_handoff; direct_release; receiving_medium; test_method; test_duration; test_duration_unit; test_pressure; pressure_unit; test_temperature; temperature_unit; test_volume; test_volume_unit; acceptance_limit_unit; test_result_value; result | Determine actual water requirement from applicable instructions. Meter each fill including retests; reconcile retained water, managed waste handoff and actual direct release. Record actual test/protection method and every applicable pressure, temperature, level, volume and duration unit with specified acceptance and authority; do not assume universal water filling or vacuum testing. | kg; actual volume/level/time/test units | Each actual fill, test and disposition | All installation-stage fill/repair/retest events | Tank/site and actual water receiver | per reference flow | Applicable approved instruction, calibrated meters, test/receiving records |
| cp_assets | tank_installation | shared reusable assets and provision | asset/service register and complete-life attribution | asset_id; provider_id; coverage_boundary; production_phase; service_period_id; consumer_job_id; task_duration_h; total_service_basis; maintenance_event; replacement_event; termination_event; removal_coverage; allocation_decision; uncovered_phase; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Link this node and all other consuming jobs/reporting periods to each asset. Retain actual job hours or contract unit and complete-life service basis; document phase-by-phase provider inclusion, operational/capital separation, any gaps, allocation and no duplicate event ownership. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h or actual verified contract service unit; h | Each asset/job/period and maintenance/replacement/termination event | Complete asset production/service/removal coverage plus this job | Actual assets/providers and all supported service consumers | per reference flow | Asset register, activity meters, provider dataset scope, lifetime/termination evidence and uncertainty |
| cp_transport | tank_installation | delivery return and waste movements | consignment and route records | job_id; transfer_id; provider_id; origin; destination; payload_mass_t; distance_km; vehicle_class; included_legs; upstream_coverage | Match actual outward/inward shipments and included transport to material/provider coverage. Compute actual transport work only from compatible payload and route units; document included empty legs and ensure no repeated freight record. | t km; original t and km | Each actual consignment/haul | All job deliveries, returns and waste disposition | Actual routes/providers | per reference flow | Tickets, route distance evidence, payload and dataset-leg coverage |
| cp_acceptance | tank_installation | accepted installation reference | signed installation inspection and test records | job_id; model; capacity_unit; compartments; design_revision; permit; nontraffic_state; groundwater_evidence; stub_endpoints; invert_units; cover_units; connection_parts; test_method; acceptance_source; limit_units; failed_state; correction_id; retest_result; handover_signature; accepted_count | Count only complete accepted stub-bounded jobs. Match actual model/site/support/components/backfill/grade and required test/inspection records. Record applicable limits with units and close each defect/correction/retest; denominator includes accepted jobs only and retains attributable failure burdens. | Item(s); actual design/test units | Every job acceptance and correction closure | First work through final signed handover | Actual installed tank and defined stubs | per reference flow | Permit/design, manufacturer instructions, field acceptance and closed defect/retest ledger |
| cp_waste | tank_installation | waste and actual environmental releases | custody tickets and characterized release records | job_id; event_id; material_identity; waste_status; composition; mass_kg; receiver; transfer_id; substance; receiving_medium; particle_size; activity_unit; factor_source; factor_basis; provider_inclusion; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Separate actual waste from usable return and internal stock. Weigh each waste stream and obtain receiver evidence. Establish substance/media and documented activity/factor or measurement for each direct release; deduplicate provider emissions and retain uncertainty. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; original factor/activity units | Each waste/release and corrective event | All attributable job and failed-work events | Job and actual receivers/media | per reference flow | Authorized receiver tickets, calibrated measurements, composition and compatible release factor evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | all inventory rows | Aggregate each distinct attributable actual exchange for the defined job boundary and divide by the matched accepted installation count; preserve its physical unit and all failed-work burdens. Do not aggregate unlike models without declared stratification. | Node-specific job records; accepted_count; cp_acceptance | Exchange amount per reference flow |  |
| stock_reconciliation | factory_tank; extra_gaskets; `extra_pipe_tees_stub`; `extra_pipe_tees_tee`; `extra_access_parts_riser`; `extra_access_parts_lid`; actual exchanges required by `refine_joint_consumables`; actual exchanges required by `refine_imported_support_fill`; `finish_products_seed`; `finish_products_matting`; `usable_product_returns_tank`; `usable_product_returns_gasket`; `usable_product_returns_clean_native_soil`; `solid_waste_tank`; `solid_waste_soil` | Reconcile opening stock and gross receipts with installed/consumed dispositions, actual outward custody returns, waste and closing stock separately by identity. Internal issues/transfers are paired ledger movements, not repeated external receipts. | cp_components; cp_soil; cp_waste | Identity-specific custody balance and carried-forward closing-stock burden |  |
| asset_share | `equipment_provision_excavator`; `equipment_provision_compactor`; `equipment_provision_lifting`; `equipment_provision_hole_saw` | Apply the documented actual job service share to complete supported asset phase burdens; reconcile all consumer/period shares and remaining capacity against the same service basis, with provider inclusions counted once. | cp_assets; cp_energy; verified provider scope | Attributed asset provision and explicit uncovered phase requirements |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_identity | tank_installation | Demonstrate actual nontraffic dry non-buoyant gravity route, permit/design/model, independent stub gate and full supply-kit completeness. | Approved site/design and actual bill of supply |
| quantity_quality | all inventory rows | Retain actual identity-specific units, calibration, temporal/site/lot scope, conversion moisture/density or supplier mass, missing activity and uncertainty. No inferred defaults or zero-as-missing values. | Node-specific protocols and original records |
| period_completeness | `equipment_provision_excavator`; `equipment_provision_compactor`; `equipment_provision_lifting`; `equipment_provision_hole_saw` | Complete asset phase/consumer/period coverage, replacement/termination and provider gaps; unresolved service-life evidence blocks final asset attribution. | Asset/service register and complete-life supporting records |
| acceptance_quality | accepted_tank_installation | Match accepted count to signed handover, actual inspection/test criteria with units and closed repair/retest path; a tank installation pass does not prove sewage-treatment performance. | cp_acceptance and applicable manufacturer/jurisdiction documents |
| custody_quality | `usable_product_returns_tank`; `usable_product_returns_gasket`; `usable_product_returns_clean_native_soil`; `solid_waste_tank`; `solid_waste_soil`; water_waste; actual exchanges required by `refine_direct_releases` | Reconcile source, quantity, condition, real receiver and status; stock carry-forward and wastewater retained onsite are balances, not fictitious outward exchanges. | Transfer, stock, water and waste ledgers |
| `refine_extra_pipe_tees` | `extra_pipe_tees_stub`; `extra_pipe_tees_tee` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Inlet/outlet stub endpoints and actual code-approved tee arrangement define this component boundary; building drain and drainfield pipe are excluded. Range evidence need: Actual stub endpoint/length/diameter/wall thickness units, pipe/tee bill, measured mass or verified linear mass and local configuration are required. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual component models/materials need independent records; building drain and drainfield pipe outside defined stubs. | `cp_components`; actual independent records and identity/unit evidence |
| `refine_extra_access_parts` | `extra_access_parts_riser`; `extra_access_parts_lid` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Access components required by the actual cover/model and local approval are integrated into the installed tank. Range evidence need: Actual compatible model/material/dimensions, quantities and measured or supplier-certified mass are required; no universal riser height or screw mass. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual independent fastener functions/SKUs and other access components require exact unit/quantity; factory-included riser/lid not duplicate. | `cp_components`; actual independent records and identity/unit evidence |
| `refine_joint_consumables` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Joinery consumables depend on the actual connection; supplied factory seals are not counted again. Chemical composition is recorded for any actual direct release. Range evidence need: Actual approved connection method, product composition, issued/remaining quantities and waste records are required; no blanket adhesive or solvent dosage. Gross receipt/issue and all custody dispositions must close for the same lot/state. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual separately supplied compatible joint/connection products by formulation/state/native unit and method; factory seals not duplicate and actual release composition separately recorded. | `cp_components`; actual independent records and identity/unit evidence |
| `refine_imported_support_fill` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Suitable native support may avoid imported bedding; imported material is included when actual soil support/backfill requires it. In-situ native soil movement remains in the soil ledger. Range evidence need: Actual excavation/support design, native-soil suitability, imported material weigh tickets/moisture, and field placed/stock balance are required; model examples do not prescribe universal volume or density. Gross receipt/issue and all custody dispositions must close for the same lot/state. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual independently imported material/grade/moisture/state/SKU in one unit, weighed or originally allowed evidenced density bridge, native suitable soil movements retain soil ledger without purchased upstream burden. | `cp_soil`; actual independent records and identity/unit evidence |
| `refine_finish_products` | `finish_products_seed`; `finish_products_matting` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Surface finish is part of the actual installation; record supplied seed, matting or other required materials only when actually used. Range evidence need: Actual approved finish specification, distinct product identities and weighed issues/stock are required; no universal seeding or matting rate. Gross receipt/issue and all custody dispositions must close for the same lot/state. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual finish materials or seed species/mixes/SKUs require exact independently supplied product records, no assumed finish use. | `cp_soil`; actual independent records and identity/unit evidence |
| `refine_installation_fuels` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Fuel use follows actual machine/task records; supplier fuel properties and measured volume/density support any conversion to mass. Range evidence need: Actual equipment/task meter records, fuel type, refuelling and stock logs, density/temperature and provider coverage are required; no generic excavator consumption factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Each actual fuel/equipment/task supply has unique native unit, actual volume/density state for any mass bridge, independent burned activity, stock/return and nonreturned waste/loss upstream supply burden; no provider-inclusive duplicate. | `cp_energy`; actual independent records and identity/unit evidence |
| `refine_equipment_provision` | `equipment_provision_excavator`; `equipment_provision_compactor`; `equipment_provision_lifting`; `equipment_provision_hole_saw` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Excavator, compactor, lifting gear, hole saw and hand/test tools may be shared across other jobs/periods. Provider-supplied services and owned assets need explicit nonduplicated coverage; service identity is not machine mass. Range evidence need: Actual asset id, installation task hours, all lifetime service periods/jobs, replacement/termination records and verified provider coverage are required; no universal lifetime, hours or ownership allocation. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual hand/test tool functions/models and incompatible native references require exact complete-life service/property/unit; keep all consumer periods, phase coverage/unused capacity and provider energy exclusions, no machine mass as service. | `cp_assets`; actual independent records and identity/unit evidence |
| `refine_usable_product_returns` | `usable_product_returns_tank`; `usable_product_returns_gasket`; `usable_product_returns_clean_native_soil` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Usable components, packaging or legally transferred clean soil leave as product only with actual accepted custody and intended-use evidence; retained closing stock is not an outward exchange. For native-origin clean-soil export, preserve site/excavation provenance in cp_soil and the same transfer_id in cp_components outward-custody records; no original purchased-product lot or upstream soil production burden is required. For counted tank/gasket returns, the exchange uses the same Number of items / Item(s) as the received product. Retain the matching item/serial count and independently measured or traceable product-specific kg for the same transfer_id as auxiliary physical-balance evidence only; no default conversion and no second kg return exchange. Range evidence need: Actual receiving-party acceptance, usable condition, component identity/mass and transfer/return note are required; no assumed reuse credit or recovery fraction. Native soil needs cp_soil source-state/provenance and actual mass evidence. Returned counted vessels/gaskets need matching actual mass evidence and transfer_id. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other components/packaging/material returns require original identity/state/recipient/native unit and burden bridge. Count-to-mass source observations retained only as nonadditive auxiliary; no separate kg return for same counted tank/gasket. | `cp_components`; actual independent records and identity/unit evidence |
| `refine_solid_waste` | `solid_waste_tank`; `solid_waste_soil` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Waste custody includes rejected vessels and unsuitable/exported soil that actually has waste status. Supplier-managed packaging/waste already covered upstream is reconciled; usable returns are separate. Range evidence need: Actual waste classification, weigh/destination tickets and included-service evidence are required for each stream; no generic all-soil waste label or displaced-production credit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other discarded components, packaging and hazardous/composite/receiver differences need independent identities; supplier-covered management not double, no fictitious excavation soil production. | `cp_waste`; actual independent records and identity/unit evidence |
| `refine_direct_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Potential machine exhaust, dust, joint-product release or lawful direct water release requires actual substance/media evidence. Waste shipments are not elementary emissions; background/provider-covered emissions are not added twice. Range evidence need: Actual substance identity, medium, measured or sourced factor and activity, abatement and uncertainty are required; broad exhaust/dust or discharged water mass cannot stand in for a pollutant UUID. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_waste`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator retains original configuration strata, accepted state/gate and actual causal attribution; no unlike jobs/branches/routes treated as equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_fit | tank_installation | Fail route fit for unqualified soil/groundwater/traffic, missing actual excavation/support ownership, unclear stubs or excluded equipment/works. | `ads-septic-tank-installation-2024` |
| validate_gate | accepted_tank_installation | Require one complete accepted installation, actual model/site/parts, backfill/compaction/finish and applicable test/inspection criteria with original units; close failed states before counting the output. Do not assert treatment performance. | `ads-septic-tank-installation-2024` |
| validate_kit_balance | all inventory rows | Reject duplicate kit component, supplier included packaging/freight, netted-plus-outward returns, untyped soil export or retained stock counted as an output. Expand variable umbrellas to actual distinct exchange identities. |  |
| validate_assets | `equipment_provision_excavator`; `equipment_provision_compactor`; `equipment_provision_lifting`; `equipment_provision_hole_saw` | Require all consuming jobs/periods and complete production/service/maintenance/replacement/removal scope, actual share basis and single ownership per shared event; unresolved lifetime/termination or provider gaps block completion. |  |
| validate_bindings | all inventory rows | Every final TIDAS exchange requires exact actual flow, property/unitgroup and destination support; unresolved semantic identities and unsupported Energy/Duration/Transport chains remain explicit data requirements. No near-match or count conversion for convenience. |  |
| validate_rework | tank_installation | Preserve damaged/off-spec materials, repair/replacement and repeated tests in the producing node, with actual internal loop, product return or waste exit. No discarded tank or unresolved failure enters accepted count. |  |
| `atomization_extra_pipe_tees_complete` | `extra_pipe_tees_stub`; `extra_pipe_tees_tee` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_extra_pipe_tees` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_extra_access_parts_complete` | `extra_access_parts_riser`; `extra_access_parts_lid` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_extra_access_parts` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_joint_consumables_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_joint_consumables` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_imported_support_fill_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_imported_support_fill` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_finish_products_complete` | `finish_products_seed`; `finish_products_matting` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_finish_products` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_installation_fuels_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_installation_fuels` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_equipment_provision_complete` | `equipment_provision_excavator`; `equipment_provision_compactor`; `equipment_provision_lifting`; `equipment_provision_hole_saw` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_equipment_provision` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_usable_product_returns_complete` | `usable_product_returns_tank`; `usable_product_returns_gasket`; `usable_product_returns_clean_native_soil` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_usable_product_returns` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_solid_waste_complete` | `solid_waste_tank`; `solid_waste_soil` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_solid_waste` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `atomization_direct_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_direct_releases` with actual records; unresolved required expansion blocks the dataset. | `ads-septic-tank-installation-2024` |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for one qualified stub-bounded gravity tank installation; process/lifecyclemodel are downstream projections |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Installation-stage comparisons only for matching declared site/model/interface/acceptance scope and asset/provider coverage |
| excluded_use | Full septic-system operation, wastewater removal performance, drainfield design, traffic/buoyancy variants, generic capacity-equivalence claims and potable-water approval |
| required_metadata | Actual site/time/permit/design and manufacturer model; material and kit identities; soil/groundwater and stubs; work/test/finish criteria; accepted count; upstream and asset phase/service coverage |
| required_quality_disclosure | Missing records and unresolved bindings/support chains; measured/conversion uncertainty; failure/retest quantities; stock/custody and waste/release pathways; asset lifetime/coverage attribution limits |
| update_trigger | Changed tank/site/route/interface, manufacturer/jurisdiction instruction, kit contents, test acceptance, provider or asset scope, new measured data or verified flow identity |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ads-septic-tank-installation-2024 | handbook | Infiltrator Water Technologies / ADS, Infiltrator Septic Tank General Installation Instructions, February 2024, pp1-3 and6; https://assets.adspipe.com/asset/2c4fb1a6-27dd-4e01-9d46-c24e90bcd72b/Tank-General-Installation-Instructions.pdf | Actual manufacturer route, nontraffic/site/soil and component instructions, backfill/finish, conditional protective filling and jurisdiction-specific testing; model examples are not universal values |
| un-cpc3-explanatory-notes-2025 | official_guidance | United Nations Statistics Division, CPC Version3.0 explanatory notes, 30June2025, printed pp289-290; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope of septic-system and leach/drainfield installation; narrower tank-only semantic boundary |
