---
pcr_id: pcr.constructions-and-construction-services.construction-services.demolition-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manual non-loadbearing fired-clay brick partition demolition services

## 1. Scope and Applicability

This PCR covers controlled hand-tool dismantling and clearance of a surveyed bare interior partition made of fired-clay bricks and cementitious mortar. The supplied function is completed removal, not the manufacture of replacement wall materials. The actual approved sequence, access, exclusion zone, floor loading, service isolation and hazard clearance govern each job. Structural or loadbearing walls, machine-led collapse, hazardous-material abatement, decorative finish stripping, replacement construction and off-site waste treatment are outside this category. Stop work when the survey or observed condition contradicts this scope; do not blend an incompatible job into the reference output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.demolition-services |
| classification_refs | cpc:3.0:54310; narrower than Demolition services |
| covered_products | Completed manual dismantling and cleared-area handover for the specified nonloadbearing partition |
| excluded_products | Whole-building or structural demolition; mechanical collapse; hazardous abatement; wall construction; independent recovery processing |
| representative_product | One square metre of net brick-partition elevation removed and accepted after clearance |
| production_route | Approved ready-to-work interface; controlled hand-tool removal; contained transfer of debris; segregation by actual receiving route; cleanup; inspection and corrective work; signed handover |
| market_state | Site-delivered completed demolition service with documented material custody at the declared collection gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted removal of the declared interior partition |
| How much | 1 m2 of net wall elevation measured once |
| How well | Entire declared thickness removed; retained structure stable; collection area cleared; unresolved inspection defects excluded from accepted area |
| How long or cycle | One documented job through corrective-work closure and signed handover; no building-use lifetime |
| reference_flow_link | `accepted_demolition` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted net-area non-loadbearing brick partition demolition service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | Location and reporting dates; wall geometry and thickness; brick and mortar identity; bare-surface condition; nonloadbearing survey; isolation and hazard clearance; approved hand-tool sequence; access and floor limits; actual dust control; accepted net removal area; material destinations; collection gate; transport/treatment burden owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_area` | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure removed elevation polygons in one wall plane, subtract unremoved openings and retained areas, and count neither the opposite face nor thickness as extra area. Record thickness independently. cp_area reconciles survey and signed completion; partial or rejected area is not accepted area. |
| `material_mass` | removed material and waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use tare-corrected measurements or traceable receiving weights with moisture/contamination basis. Area or volume cannot become mass through an assumed wall density. |
| `native_energy` | electricity | Energy | kWh | Keep metered or supplier energy in its native recorded unit; retain conversion evidence before changing units. Electricity property/support and supply identity must be verified for concrete exchanges. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing customer-owned bare brick/mortar partition surveyed as nonloadbearing, isolated and hazard-cleared; method and access approved |
| starting_condition_role | Physical stock and custody interface, not a new purchased brick input and not automatically an incoming waste exchange |
| product_classification_scope | The narrow completed partition-demolition service within cpc:3.0:54310 |
| recursive_input_rule | Subcontracted demolition of the same wall is an alternative service owner: partition responsibilities and quantities explicitly, with no parent-plus-subcontract double counting. |
| upstream_dataset_requirement | Link supplied consumables, water, electricity and bounded resource services to compatible upstream datasets. Historical wall manufacture/use is excluded at this removal interface and must be represented by its original owner when a whole-building model needs it. |
| disclosure | Declare stock ownership, prior survey/abatement boundary, job period, outgoing collection gate, tool/access/visit service coverage, capital exclusions, waste transport/treatment owner and any unmeasured inventory. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers controlled hand-tool dismantling and clearance of a surveyed bare interior partition made of fired-clay bricks and cementitious mortar. The supplied function is completed removal, not the manufacture of replacement wall materials. The actual approved sequence, access, exclusion zone, floor loading, service isolation and hazard clearance govern each job. Structural or loadbearing walls, machine-led collapse, hazardous-material abatement, decorative finish stripping, replacement construction and off-site waste treatment are outside this category. Stop work when the survey or observed condition contradicts this scope; do not blend an incompatible job into the reference output. |  |
| `ready_interface` | demolition | Require actual competent survey, method and isolation evidence before hand-tool work; use HSE planning guidance and OSHA masonry stability/loading principles as technical context, with applicable local requirements independently declared. No generic top-down instruction substitutes for the approved job sequence. | hse-demolition; osha-masonry-removal |
| `removal_gate` | demolition | The independent removal responsibility ends at stable retained structure, cleared accepted area and separately documented outgoing materials at the on-site collection gate. Screening and segregation here serve this gate; off-site crushing or recovery is not an embedded production node. |  |
| `stock_ledger` | demolition | Record the existing wall geometry/materials in a custody ledger. Reconcile removed mass, remaining stock, outgoing products/wastes and actual characterized releases; do not invent an exchange buying the existing wall or label it waste before the actual removal decision. |  |
| `resources` | demolition | Include attributable hand-tool/access/visit service, dust-control water/extraction power, consumed protection and cleanup materials, contained debris transfer, cleanup and corrective work when used. A bounded provider service owns its stated capital coverage; separately disclose any exclusion and never invent a tool lifetime. |  |
| `sharing` | demolition | Maintain shared asset/service ids with this demolition node and all other consuming jobs or reporting periods. Record service coverage, period totals, job use and attribution driver; meter local use first and allocate only a residual actually shared burden. |  |
| `exit_owner` | demolition | Record solid waste, wastewater and air releases at their actual distinct gates. Downstream transport/treatment is excluded from this on-site service inventory but its responsible dataset owner and transfer evidence are mandatory; no avoided virgin production or recovery credit is automatic. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| demolition | Manual partition removal and clearance | required | Applies only after the declared ready-to-work interface is proven | Independent removal; owns stock custody, debris clearance, local correction loop and outgoing collection gate | 1 m2 accepted net removal area |

The single node includes workfront checks, the actual engineer-approved hand-tool sequence, contained debris movement and signed clearance. Inspection failure loops back to this same node: retain all resources and repeat inspection; never count the area twice. Removed masonry not accepted for reuse exits as identified waste or remains segregated stock pending a documented destination. This map does not certify a safe method.

### Process: Manual partition removal and clearance (`demolition`)

#### Inputs

##### Product flows

###### Supplied dust-control or cleanup water (`dust_cleanup_water`)

Record only actual supplied water, with source and use; abstraction from nature would require a separate verified elementary input. Range evidence need: obtain job water measurements, control method and repeated-job dispersion; no universal wetting rate is supported.

- Selected flow: Supplied dust-control or cleanup water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable water delivered for dust control and cleanup; a documented nonuse is distinct from missing data
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`



###### Electricity for actual extraction and charging (`site_electricity`)

Include extraction and any attributable tool or service charging actually used; manual demolition does not imply zero electricity. Range evidence need: collect meter or verified provider energy records, operating duration and equipment state; no nameplate-to-consumption default.

- Selected flow: Electricity for actual extraction and charging
- Flow property / unit: Energy / kWh
- Amount rule: Metered or provider-recorded electricity attributable to this job, excluding energy already covered by a resource service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`



###### Separately supplied collection bag (`consumed_supplies_collection_bag`)

Record only this independently identified separately supplied collection bag at its actual state and supply or receiving gate. Actual bag SKU supplied and consumed outside other provider/package coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied collection bag
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied protective sheeting (`consumed_supplies_protection_sheet`)

Record only this independently identified separately supplied protective sheeting at its actual state and supply or receiving gate. Actual protective sheet SKU supplied and consumed outside other coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied protective sheeting
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied replacement filter (`consumed_supplies_filter`)

Record only this independently identified separately supplied replacement filter at its actual state and supply or receiving gate. Actual replacement filter supplied/consumed; exclude reusable equipment and service-included filters. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied replacement filter
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete provider access-equipment provision referenced to hours (`bounded_resource_service_access_provision`)

Record only this independently identified complete provider access-equipment provision referenced to hours at its actual state and supply or receiving gate. Only actual complete single access-provision service with matching h reference and documented provider asset/maintenance/energy coverage; no conversion from price or event. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete provider access-equipment provision referenced to hours
- Flow property / unit: Duration / h
- Amount rule: Independently record actual accepted provision hours for this provider/configuration, all consumers and included resources; normalize once by accepted demolition area.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete provider collection-container provision referenced to hours (`bounded_resource_service_container_provision`)

Record only this independently identified complete provider collection-container provision referenced to hours at its actual state and supply or receiving gate. Only actual complete single container-provision service with matching h reference and disclosed provider life coverage; waste treatment/transport are excluded unless expressly covered and not duplicated. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete provider collection-container provision referenced to hours
- Flow property / unit: Duration / h
- Amount rule: Independently record actual provision start/end and accepted service hours for the identified container/provider; retain actual consumer attribution and normalize once by accepted demolition area.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted net-area non-loadbearing brick partition demolition service (`accepted_demolition`)

The real reference output is completed removal and accepted clearance, including closed corrective work. Range decision: 1 m2 defines the normalization reference and is not a yield, recovery fraction or performance interval; retain actual accepted-area measurement uncertainty.

- Selected flow: Accepted net-area non-loadbearing brick partition demolition service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_area`



###### Removed fired-clay brick accepted for direct reuse at on-site handover (`reusable_removed_material_fired_clay_brick`)

Record only this independently identified removed fired-clay brick accepted for direct reuse at on-site handover at its actual state and supply or receiving gate. Only actual receiver acceptance of usable removed fired-clay bricks at on-site collection/handover, with no unmodelled downstream recovery processing; appearance alone is insufficient. Independently weigh accepted lots; no displacement credit. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Removed fired-clay brick accepted for direct reuse at on-site handover
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

###### Removed fired-clay brick and cementitious-mortar waste (`masonry_waste`)

Record actual mixed masonry waste at the collection gate; split different regulated classes and contaminated lots from their evidence. Range evidence need: receiving weights and measured wall stock/remaining quantities establish job mass closure; do not use density, area or assumed recovery as a mass factor.

- Selected flow: Removed fired-clay brick and cementitious-mortar waste
- Flow property / unit: Mass / kg
- Amount rule: Measured outgoing masonry waste, separately from accepted reusable product, retained stock and captured or emitted particulate
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`



###### Spent collection bag waste at its receiving gate (`supplies_waste_spent_bag`)

Record only this independently identified spent collection bag waste at its receiving gate at its actual state and supply or receiving gate. Actual spent bag independently dispatched; include its retained contents in whole-composite quantity where that is the dispatch state. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Spent collection bag waste at its receiving gate
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Spent protective-sheet waste at its receiving gate (`supplies_waste_spent_sheet`)

Record only this independently identified spent protective-sheet waste at its receiving gate at its actual state and supply or receiving gate. Actual spent sheeting independently dispatched. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Spent protective-sheet waste at its receiving gate
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Spent filter waste including retained captured material (`supplies_waste_spent_filter`)

Record only this independently identified spent filter waste including retained captured material at its actual state and supply or receiving gate. Actual complete spent filter/carrier independently dispatched; no extra exit for dust already in it. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Spent filter waste including retained captured material
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately dispatched captured dry residue waste (`supplies_waste_loose_captured_residue`)

Record only this independently identified separately dispatched captured dry residue waste at its actual state and supply or receiving gate. Actual loose collected dry residue physically separate from bags/filters/other composite dispatches; never a duplicate constituent quantity. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately dispatched captured dry residue waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual collected cleanup wastewater (`cleanup_wastewater`)

Conditional collected waste-liquid exit; identify solids, destination and treatment owner. Direct discharges need separately characterized elementary exchanges rather than relabelling this waste. Range evidence need: measured water/solids balance and collection records; no assumption that supplied water all becomes wastewater or evaporates.

- Selected flow: Actual collected cleanup wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured collected wastewater mass on declared solids/moisture basis, separately from dry residues
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`



##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `service_owner` | accepted_demolition | Assign removal and corrective-work burdens to the accepted demolition service. Unresolved defects remain in the same local work loop; do not create another accepted output for repeated work or erase failed-attempt resources. |  |
| `material_exits` | removed materials | Declare ownership and legal/product status of each outgoing lot. Retain demolition burdens with the demolition service under this service-boundary model; report reusable material separately without avoided-production credit. A later system requiring co-product allocation must declare a reviewed boundary/method and cannot silently overwrite this rule. |  |
| `shared_resources` | `bounded_resource_service_access_provision`; `bounded_resource_service_container_provision`; site_electricity | Identify each shared provider service, all consuming jobs/nodes and relevant service periods. Prefer direct activity records; allocate only the measured residual service total by recorded causal driver, preserving totals across consumers. State driver, coverage and uncertainty; do not allocate a service charge and its included electricity/capital twice. |  |
| `returns` | `consumed_supplies_collection_bag`; `consumed_supplies_protection_sheet`; `consumed_supplies_filter`; `supplies_waste_spent_bag`; `supplies_waste_spent_sheet`; `supplies_waste_spent_filter`; `supplies_waste_loose_captured_residue` | Usable packaging, containers and unused supplies return under actual stock/custody records or remain closing stock. Record issued, consumed, returned and retained quantities once; the return is not simultaneously waste and cannot receive a second net subtraction. Spent contaminated items follow their actual waste route. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_area | demolition | accepted removal area and initial stock | survey and signed handover | job_id; wall_id; geometry; openings; retained_area; thickness; brick_mortar_identity; survey_release; method_id; isolation_clearance; hazard_clearance; accepted_area; rework_events; handover_date | Measure polygons in one declared elevation plane; deduct openings and retained portions, match physically removed thickness and signed accepted area. Record dimensions, instrument tolerance and corrective-work closure. Attribute all job quantities to the same accepted net area before recording per reference flow. | m2 | Each wall and final handover | Complete job including corrective visits | The declared wall and collection area | per reference flow | Survey/dimension record; approved method; signed inspection; tolerance and area reconciliation |
| cp_resources | demolition | electricity supplies and bounded resource services | meters issue/return records and provider logs | job_id; resource_id; material_identity; provider; service_coverage; period_id; other_consumers; issued; consumed; returned; closing_stock; meter_readings; native_unit; direct_use; shared_total; driver_total; job_driver; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; unique_property; measurement_method_id; uncertainty | Use meter differences or verified supplier amounts; trace issue/consume/return/stock by material. For shared services enumerate every consumer and period, subtract directly attributed quantities from the shared pool, and distribute residual by documented causal use driver. Divide attributable job amount by cp_area accepted net area to record per reference flow. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; kWh; h or verified native service unit; h | Every resource event and service period close | Whole job and all contributing shared-service periods | Declared site; actual provider service boundary | per reference flow | Calibrated meters/scales; provider coverage; full consumer ledger; sum of assigned burdens equals pool; no overlap with included service energy |
| cp_water | demolition | supplied water and collected wastewater | water meter supply and collection records | job_id; source; supplied_mass; collected_wastewater_mass; suspended_solids; remaining_water; moisture_basis; meter_unit; conversion_evidence; receiver; transfer_id | Measure supplied water and collected waste liquid independently; retain native readings and validated conversion only where needed. Reconcile water retained with debris, discharged, evaporated or remaining without assuming a split. Divide attributable quantities by accepted net area. | kg | Each supply/collection event | Full job including final cleanup | Workfront through actual collection gate | per reference flow | Meter calibration; collection weights; moisture/solids basis; unexplained water balance and sampling uncertainty |
| cp_exits | demolition | removed masonry reuse waste and spent supplies | custody transfer and weighing | job_id; lot_id; transfer_id; material; status; tare; gross_mass; moisture; contamination; receiver; acceptance; retained_stock; transport_owner; treatment_owner; usable_return; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh or use traceable receiving weights, classify each lot once and retain acceptance/destination evidence. Link rejected reuse lots back to demolition stock then actual waste/retention route; prevent product/waste double classification. Divide actual outgoing mass by accepted net area. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each outgoing lot and closing stock count | From first removal to final collection-gate reconciliation | Declared on-site collection gate and documented receiver | per reference flow | Scale traceability; unique transfer ids; accepted product quality; waste classification; closing stock and mass reconciliation |
| cp_emissions | demolition | characterized air releases | measurement or validated estimation dossier | job_id; substance; particle_class; air_compartment; sampling_duration; control_state; emitted_mass; estimation_method; captured_mass; uncertainty; missing_coverage; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Use representative emission measurements or a validated job-specific total-release method with actual control state. Preserve species/particle basis and medium; do not convert worker exposure concentration to total release without a defensible mass calculation. Exclude measured captured waste and normalize attributed emitted mass by accepted net area. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each representative operation/control state and full-job estimate | Removal and cleanup including corrective work | Actual workfront receiving air compartment | per reference flow | Method validation; monitoring coverage; measurement uncertainty; explicit uncovered species/stages |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | all inventory rows | Record attributable job exchange quantity per reference flow by dividing by the measured accepted net removal area in m2. Sum disjoint accepted wall polygons once; record uncertainty and reject a zero or unresolved denominator. No area-to-mass conversion is implied. | cp_area; node-specific quantity protocol | Exchange quantity per reference flow |  |
| `shared_attribution` | `bounded_resource_service_access_provision`; `bounded_resource_service_container_provision`; site_electricity | Use direct job measurement first. Distribute only the residual shared pool by the documented job causal-use share of all consumers in that period; reconcile allocated totals to that residual. Apply area_normalization after attribution. | cp_resources; cp_area | Attributable resource quantity per reference flow |  |
| `custody_closure` | `reusable_removed_material_fired_clay_brick`; masonry_waste; `supplies_waste_spent_bag`; `supplies_waste_spent_sheet`; `supplies_waste_spent_filter`; `supplies_waste_loose_captured_residue`; cleanup_wastewater; actual exchanges required by `refine_characterized_air_release` | Compare removed stock and added supplies/water with accepted reusable exits, waste exits, actual emissions and remaining stock on compatible mass/moisture bases. Keep uncertain or unmeasured terms visible; do not infer missing air release as a balance residual or force an artificial zero. | cp_area; cp_resources; cp_water; cp_exits; cp_emissions | Material/water closure and unexplained difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | demolition | Prove nonloadbearing bare brick/mortar wall, isolation, hazard clearance and approved hand-tool method; stop on contradictory conditions. | Survey; engineering/method approval; local release record |
| dq_quantity | all inventory rows | Use the same accepted area denominator; disclose instrument error, stock carryover, moisture and incomplete measurements. Record nonuse separately from missing quantities. | cp_area and all linked protocols |
| dq_time | all inventory rows | Cover actual work and corrective visits with dated resource, transfer and completion events; disclose gaps instead of replacing them with zero. | Complete job/event ledger |
| dq_identity | all inventory rows | Resolve each actual exchange to a compatible concrete flow, property and unit with detail evidence. Conditional umbrella cards require actual foreground identities; support gaps remain explicit. | Identity dossier and actual material/provider/medium records |
| dq_ranges | all inventory rows | Replace missing Range evidence with observed job distributions or defensible technology-specific evidence when available. Retain the stated evidence need until resolved; no universal water, energy, dust, density or recovery coefficient is prescribed. | Per-card evidence needs; measurements with uncertainty |
| dq_gate | accepted_demolition; material exits | Keep inspection failure/rework and undecided material lots out of accepted service/product quantities. Close correction or disclose incomplete output. | Signed handover and custody acceptance records |
| `refine_consumed_supplies` | `consumed_supplies_collection_bag`; `consumed_supplies_protection_sheet`; `consumed_supplies_filter` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella for actual bags, protective sheeting, filters and cleanup substances consumed. Split by identified material/formulation in a concrete dataset. Range evidence need: document issued, returned, remaining and consumed quantities for each actual supply; no generic consumable coefficient. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual cleanup formulations and any other unlisted consumables require an actual SKU/formulation/unit roster before a further flow card; do not invent solvents or disinfectants. | `cp_resources`; actual independent records and identity/unit evidence |
| `refine_bounded_resource_service` | `bounded_resource_service_access_provision`; `bounded_resource_service_container_provision` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella for actually used provider services: hand tools, access equipment, containers and mobilization where applicable. Preserve provider native units and split concrete services; hours only describe timed use. Range evidence need: obtain actual service coverage, use logs, periods, shared consumers and driver evidence; no invented equipment lifetime. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual hand-tool functions, mobilization provider/mode/native reference, and any other service not truly the stated h-referenced complete function require concrete separate identity/property/unit refinement. Complete real bundles may remain one only with exact coverage. | `cp_resources`; actual independent records and identity/unit evidence |
| `refine_reusable_removed_material` | `reusable_removed_material_fired_clay_brick` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella only for material accepted as a reusable product at the documented on-site collection/handover gate; later receiver acceptance supports product status and does not include transport or treatment without unmodelled recovery processing. Identify material, condition, custody and acceptance; intact appearance alone is insufficient. Range evidence need: weigh actual accepted lots and retain receiver quality evidence; no default reuse fraction or displacement credit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Any other actual reusable removed product, state or recipient requires independent actual identity/native unit/quality/custody acceptance. No assumed recovery fraction or credit; transport/treatment beyond gate not silently included. | `cp_exits`; actual independent records and identity/unit evidence |
| `refine_supplies_waste` | `supplies_waste_spent_bag`; `supplies_waste_spent_sheet`; `supplies_waste_spent_filter`; `supplies_waste_loose_captured_residue` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella for spent bags, sheeting, filters and captured dust at their waste gates. Usable containers/parts return to provider stock under custody records instead of this waste card. Range evidence need: weigh each identified stream, distinguish collected dust from uncollected air releases, and document stock carryover. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other waste identities/hazard states and actual receiver splits require measured dispatch roster; do not add one generic residual exchange. | `cp_exits`; actual independent records and identity/unit evidence |
| `refine_characterized_air_release` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella for actual reported species or particle-size classes and receiving air compartment; no generic dust UUID or guessed silica content. Range evidence need: obtain representative measurements or validated job-specific release estimates with control effectiveness and uncertainty. Exposure concentrations alone are not total emitted mass; no measured value is not zero. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual measured or validated-estimate substance or disjoint particle-size fractions to actual receiving air compartments; captured waste excluded. | `cp_emissions`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_release` | demolition | Verify scope and actual approved sequence/limits against ready-to-work evidence. A structural, hazardous or unresolved wall cannot pass this category gate. | hse-demolition; osha-masonry-removal |
| `area_once` | accepted_demolition | Require 1 m2 reference with verified Area support; reconcile net accepted elevation, openings, thickness, no second wall face and all corrective work. Missing/zero accepted area blocks normalization. |  |
| `rework_gate` | demolition | Reconcile initial work, failed inspection, repeat cleanup/removal and final acceptance in one node. Exclude unresolved/rejected area; retain failed-attempt burdens. |  |
| `exit_closure` | material exits | Verify unique material/transfer ids, product acceptance versus waste status, retained stock and characterized air/water split. Missing receiving status cannot become reusable product or recovery credit. |  |
| `shared_conservation` | `bounded_resource_service_access_provision`; `bounded_resource_service_container_provision`; site_electricity | Verify actual shared consumers/periods, causal driver evidence, coverage and conservation of residual pool; reject overlap with energy/capital already inside a provider service. |  |
| `identity_coverage` | all inventory rows | Require verified concrete identity and property/unit before final dataset exchanges. Report unresolved umbrella/UUID/support identities and Range evidence gaps as coverage limits even when structural checks pass. |  |
| `atomization_consumed_supplies_complete` | `consumed_supplies_collection_bag`; `consumed_supplies_protection_sheet`; `consumed_supplies_filter` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_consumed_supplies` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_bounded_resource_service_complete` | `bounded_resource_service_access_provision`; `bounded_resource_service_container_provision` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_bounded_resource_service` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_reusable_removed_material_complete` | `reusable_removed_material_fired_clay_brick` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_reusable_removed_material` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_supplies_waste_complete` | `supplies_waste_spent_bag`; `supplies_waste_spent_sheet`; `supplies_waste_spent_filter`; `supplies_waste_loose_captured_residue` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_supplies_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_characterized_air_release_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_characterized_air_release` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground data package for completed manual nonloadbearing brick-partition demolition |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Building renovation or demolition models matching the declared wall, method, site and collection gate; downstream process and lifecyclemodel projections |
| excluded_use | Structural demolition; hazardous abatement; new wall production; machinery collapse; universal demolition benchmark; automatic recycling or avoided-production credit |
| required_metadata | Wall dimensions/thickness/materials; once-only net area; survey/method releases; actual hand tools/control system; reporting dates; providers and shared consumers; stock and waste ownership; collection and treatment gates |
| required_quality_disclosure | Area/mass uncertainty; incomplete air/water coverage; identity and Energy/Duration support gaps; unresolved Range evidence; local correction burdens; upstream wall and capital-service exclusions |
| update_trigger | Changed wall composition or thickness; method/control/access change; new supplier/service coverage; survey/hazard change; altered material destination; revised measurement or accepted gate |


## 11. Data Sources

| source_id | type | reference | Used for |
| --- | --- | --- | --- |
| hse-demolition | official_guidance | https://www.hse.gov.uk/construction/safetytopics/demolition.htm | Planning context for competent survey/method, structure/services/hazards and sequence-dependent stability/debris controls; not a universal national legal prescription |
| osha-masonry-removal | standard | OSHA 29 CFR 1926.854, Removal of walls, masonry sections, and chimneys; https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.854 | Technical context for masonry floor-load and remaining-wall stability constraints; apply actual local requirements and approved job limits |
| un-cpc3-notes-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, PDF p. 288; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Demolition services classification scope; no inventory factors |
