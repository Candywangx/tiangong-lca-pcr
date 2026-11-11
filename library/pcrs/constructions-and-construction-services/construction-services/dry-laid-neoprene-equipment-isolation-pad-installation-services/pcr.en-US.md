---
pcr_id: pcr.constructions-and-construction-services.construction-services.dry-laid-neoprene-equipment-isolation-pad-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dry-laid neoprene equipment isolation pad installation services

## 1. Scope and Applicability

This PCR covers a separately contracted first installation of single-layer, unbonded, modular neoprene vibration-isolation pads beneath one indoor machine on an existing accepted support surface. The actual equipment and pad supplier must permit an unanchored dry-laid arrangement at the declared location. Equipment arrives at the installation position, stopped and isolated, with lifting points and loading information available. The installer surveys supports, confirms the approved pad schedule, hand-cuts complete modules where needed, lifts locally, places pads, lowers the equipment, inspects the loaded arrangement, corrects defects and hands over the accepted isolation installation.

Exclude equipment manufacture or general equipment installation, long-distance positioning, floor or foundation construction, anchoring and seismic restraint, adhesives or grout, stacked pads or added shims, spring mounts, wall/ceiling acoustic finishes, old-pad removal, powered cutting, chemical cleaning, operating-performance tests and subsequent operation. If any excluded activity is necessary, this category alone is insufficient; do not omit it from a larger system. This gate establishes installation conformity, not a numerical vibration reduction or an operating-machine commissioning result. Mason SW illustrates modular neoprene supply and some unbolted applications, not a universal no-anchor design (`mason-super-w-2014`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.dry-laid-neoprene-equipment-isolation-pad-installation-services |
| classification_refs | cpc:3.0:54651 — Sound or vibration insulation services; narrower |
| covered_products | First dry placement of single-layer modular neoprene pads under a declared indoor machine; local lifting, loaded inspection, correction and signed isolation-only handover |
| excluded_products | Complete machinery installation; foundations; restraints; bonded, shimmed or multilayer systems; spring isolators; acoustic wall finishes; replacements; machinery operation |
| representative_product | Accepted single-machine dry-laid neoprene isolation installation |
| production_route | Approve actual support/load schedule → receive pads and equipment interface → hand-cut complete modules → local lift and dry place → lower, inspect and correct → signed handover |
| market_state | Completed isolation installation service on customer equipment, before equipment commissioning |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted single-machine dry-laid neoprene isolation installation |
| How much | 1 Item(s) complete accepted installation for one declared equipment configuration |
| How well | Actual supplier-approved pad grade, module arrangement and per-support loads; complete bearing contact, stable level placement and no unintended rigid bridge; signed installation inspection |
| How long or cycle | One installation work order including correction and final acceptance; asset burdens may span reporting periods; no machine operating life assigned |
| reference_flow_link | `accepted_isolation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted dry-laid neoprene equipment isolation installation |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | site and work order; equipment identifier, supported mass and load distribution; lowest disturbing frequency used in design; actual supplier design approval for unanchored use; neoprene grade, hardness, thickness, module dimensions and layout; per-support design loads; installation instruction edition; lifting method; loaded inspection criteria and actual results; starting-condition exclusions; acceptance date; resource and waste owners |

Group only installations with equivalent disclosed equipment/load/layout and gate. Split materially different configurations; a counted installation does not establish equal acoustic performance. Actual signed accepted count D must be positive. A rejected job is not included in D.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_count | accepted_isolation | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | D is the independently recorded count of completed accepted same-configuration installations in cp_gate. Count one entire installation, not individual pads or supports. |
| mass_records | neoprene_pads; actual exchanges required by `refine_packaging`; `usable_returns_pad_module`; `usable_returns_usable_offcut`; `installation_waste_neoprene` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh actual material by grade and custody state. Piece-to-mass conversion requires the actual SKU and verified unit mass; rated supported load, gross shipping weight and pad plan area are not pad net mass. |
| interface_count | equipment_interface | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Record actual equipment custody once, including unsuccessful jobs; do not fix its input count to the final reference or purchase the customer equipment again. |
| service_units | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access`; installation_electricity | Actual verified count, service or energy property | Item(s); actual service unit; kWh | Keep metered energy distinct from rated power. A service packet is countable only with a defined scope and quantity; hourly hire keeps its duration unit and verified support chain. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Customer equipment stopped and isolated at the prepared position; accepted existing support surface, approved loading and pad schedule, authorized lifting arrangement and verified permission for unanchored dry placement |
| starting_condition_role | Customer equipment and existing substrate are physical interfaces; supplied pads enter as new consumables |
| product_classification_scope | Isolation installation only, a narrow part of CPC 54651; excludes machinery installation and acoustic finishing services |
| recursive_input_rule | A purchased isolation subcontract is either a documented external service package or disaggregated foreground work, never both; do not recursively add another complete copy of the same isolation service |
| upstream_dataset_requirement | Supply-chain data for actually consumed pads, packaging, electricity, owned-resource shares and external services at matching gates; no second manufacture of customer equipment or existing building |
| disclosure | Declare which party owns equipment, lifting tools, transport, packaging, rejects and external treatment. Link to a wider project when excluded work is necessary; no claim of a whole machine or building life cycle |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers a separately contracted first installation of single-layer, unbonded, modular neoprene vibration-isolation pads beneath one indoor machine on an existing accepted support surface. The actual equipment and pad supplier must permit an unanchored dry-laid arrangement at the declared location. Equipment arrives at the installation position, stopped and isolated, with lifting points and loading information available. The installer surveys supports, confirms the approved pad schedule, hand-cuts complete modules where needed, lifts locally, places pads, lowers the equipment, inspects the loaded arrangement, corrects defects and hands over the accepted isolation installation. Exclude equipment manufacture or general equipment installation, long-distance positioning, floor or foundation construction, anchoring and seismic restraint, adhesives or grout, stacked pads or added shims, spring mounts, wall/ceiling acoustic finishes, old-pad removal, powered cutting, chemical cleaning, operating-performance tests and subsequent operation. If any excluded activity is necessary, this category alone is insufficient; do not omit it from a larger system. This gate establishes installation conformity, not a numerical vibration reduction or an operating-machine commissioning result. Mason SW illustrates modular neoprene supply and some unbolted applications, not a universal no-anchor design (`mason-super-w-2014`). | `mason-super-w-2014` |
| installation_gate | place_inspect | The two physical component roles are customer equipment interface and supplied isolation pads. Existing floor is a declared substrate interface. Only local lifting for pad placement belongs here; accept all supports as one installation after loaded inspection. |  |
| route_eligibility | neoprene_pads; accepted_isolation | Use single-layer neoprene complete modules and actual approved layout. Manufacturer information supports this product family and selected unbolted applications, not all locations; anchoring or stacking requirements move the work outside this scope. | mason-super-w-2014 |
| design_inputs | accepted_isolation | Retain actual per-support loads, number and arrangement of pads and disturbing-frequency/design evidence. Do not assume even load sharing merely by dividing total weight by pad count. Actual product design approval controls execution. | karman-isolator-selection |
| event_ownership | all cards | Record receipt, local lifting, cutting, correction, inspection, cleanup and exits for the entire work order. Include measured battery charging and external support when present. Check chemical use or powered work as scope changes, not zero-valued emissions. |  |
| time_boundary | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access` | Index acquisition, maintenance, replacement and retirement of reusable equipment separately from work-order activity and acceptance dates; keep charges and transfers attributable to the actual reporting period. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| place_inspect | Dry placement and loaded inspection | required | Eligible first installation with approved unanchored single-layer neoprene layout | Integrate pads with customer equipment; inspect and retain all correction burdens; release only accepted isolation installation | accepted_isolation |

One node owns local lifting, hand cutting, placement and inspection. Incorrect pad grade, damaged modules, unstable support, an unapproved load distribution or rigid bridging is an off-spec state. Correct within place_inspect and repeat inspection, or classify actual material exit under `usable_returns_pad_module`; `usable_returns_usable_offcut` or `installation_waste_neoprene`. Unresolved rejects have no accepted reference output.

### Process: Dry placement and loaded inspection (`place_inspect`)

#### Inputs

##### Product flows

###### Customer equipment at pad-placement interface (`equipment_interface`)

Record the actual customer-owned machine received for local pad placement and its return at handover. This is an interface/custody exchange; its upstream manufacture is outside this separately declared service and is not an additional purchased machine.

- Selected flow: Customer equipment at pad-placement interface
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual machines entering the work order, including unaccepted jobs, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`

Range evidence need: retain actual machine IDs, receipts and final status. A universal one-input-per-accepted-output ratio would hide unsuccessful work.

###### Modular neoprene vibration-isolation pads at site supply (`neoprene_pads`)

Actual selected neoprene grade and module geometry for single-layer compression placement. Include gross material drawn into the work order, hand-cut losses and replacements. Separate unused returns and waste so receipts are not netted twice.

- Selected flow: Modular neoprene vibration-isolation pads at site supply
- Flow property / unit: Mass / kg
- Amount rule: Actual pad mass drawn from reconciled stock, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `mason-super-w-2014`

Range evidence need: per-support design and actual SKU net masses determine consumption; supplier load ratings in kg describe supported equipment, not pad mass. No generic kg per installation interval is established.

###### Whole owned lifting-jack asset equivalent (`owned_resources_jack`)

Record only this independently identified whole owned lifting-jack asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `resource_share`; retain the explicit original formula below.

- Selected flow: Whole owned lifting-jack asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: For this exact whole-life resource packet, attributable share s_j = u_j / sum(u_all); exchange quantity = s_j / D Item(s). Retain positive complete all-consumer denominator, period ownership and lifecycle maintenance/replacement/retirement without overlap; no one-whole-tool purchase per installation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Whole owned lifting-sling asset equivalent (`owned_resources_sling`)

Record only this independently identified whole owned lifting-sling asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `resource_share`; retain the explicit original formula below.

- Selected flow: Whole owned lifting-sling asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: For this exact whole-life resource packet, attributable share s_j = u_j / sum(u_all); exchange quantity = s_j / D Item(s). Retain positive complete all-consumer denominator, period ownership and lifecycle maintenance/replacement/retirement without overlap; no one-whole-tool purchase per installation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Whole owned hand-cutter asset equivalent (`owned_resources_hand_cutter`)

Record only this independently identified whole owned hand-cutter asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `resource_share`; retain the explicit original formula below.

- Selected flow: Whole owned hand-cutter asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: For this exact whole-life resource packet, attributable share s_j = u_j / sum(u_all); exchange quantity = s_j / D Item(s). Retain positive complete all-consumer denominator, period ownership and lifecycle maintenance/replacement/retirement without overlap; no one-whole-tool purchase per installation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Whole owned inspection-gauge asset equivalent (`owned_resources_gauge`)

Record only this independently identified whole owned inspection-gauge asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `resource_share`; retain the explicit original formula below.

- Selected flow: Whole owned inspection-gauge asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: For this exact whole-life resource packet, attributable share s_j = u_j / sum(u_all); exchange quantity = s_j / D Item(s). Retain positive complete all-consumer denominator, period ownership and lifecycle maintenance/replacement/retirement without overlap; no one-whole-tool purchase per installation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete contract-defined local support service package (`contracted_services`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Activate only for an actual provider-defined complete counted package. This Item(s) card never represents hourly hire or freight workload. Record actual scope and covered burdens once.

- Selected flow: Complete contract-defined local support service package
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual defined provider service packages attributable to the work order, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: actual contract scope, trips or hire records and upstream inclusion; no universal count, hours or distance.


###### Complete actual hourly local handling service (`local_support_hourly_service_handling`)

Record only this independently identified complete actual hourly local handling service at its actual state and supply or receiving gate. Only actual handling-provider service with h reference and matching complete lifecycle/resource coverage; not the same event as whole counted package. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete actual hourly local handling service
- Flow property / unit: Duration / h
- Amount rule: Independently record actual handling-service hours by provider/configuration/period and evidenced consumer share; normalize once by accepted equipment installation count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete actual hourly local access service (`local_support_hourly_service_access`)

Record only this independently identified complete actual hourly local access service at its actual state and supply or receiving gate. Only actual access-provider service with h reference and matching complete lifecycle/resource coverage; no conversion from counted package or freight. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete actual hourly local access service
- Flow property / unit: Duration / h
- Amount rule: Independently record actual contracted access-service hours and all-user share by period; normalize once by accepted installation count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_resources`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Electricity for installation instruments or charging (`installation_electricity`)

Conditional on actual electricity used in the defined installation work. Manual pad cutting and placement do not imply zero instrument charging. Separate shared charging by measured use and do not count electricity embedded in a provider service twice. Equipment operating energy is outside the handover gate.

- Selected flow: Electricity for installation instruments or charging
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered electricity including charging losses, divided by D
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: meter/charging-session records and allocation basis; no inference from equipment motor rating, battery label or operating power.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dry-laid neoprene equipment isolation installation (`accepted_isolation`)

One complete installation under the declared machine, after grade/layout, load compatibility, contact, level/stability and rigid-bridge checks with actual acceptance criteria. Keep signed records and all rework. No operating attenuation claim follows from static acceptance.

- Selected flow: Accepted dry-laid neoprene equipment isolation installation
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`

Reference amount is a normalization definition, not an empirical yield Range. Keep D and rejected-job counts independently recorded.

###### Usable unchanged uninstalled neoprene pad module returned (`usable_returns_pad_module`)

Record only this independently identified usable unchanged uninstalled neoprene pad module returned at its actual state and supply or receiving gate. Actual receiver-accepted complete usable module outward, matching inbound SKU/native kg; closing stock is not outward. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged uninstalled neoprene pad module returned
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable neoprene pad offcut accepted outward (`usable_returns_usable_offcut`)

Record only this independently identified usable neoprene pad offcut accepted outward at its actual state and supply or receiving gate. Only actual accepted usable offcut with evidenced fit/quality/state and receiver; no assumed recovery or credit. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable neoprene pad offcut accepted outward
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

###### Collected unusable neoprene pad waste (`installation_waste_neoprene`)

Record only this independently identified collected unusable neoprene pad waste at its actual state and supply or receiving gate. Actual separately dispatched neoprene offcuts/rejected pads/captured neoprene residue at one identified state/receiver; no duplicate constituents or separate whole-versus-offcut total. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Collected unusable neoprene pad waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exits`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retain_rework | place_inspect | Keep every repeated lift, cut, replacement and inspection in the originating work order. Unaccepted equipment does not increase D. If D is zero, retain a failed-job inventory without division; connect its burden to an evidenced subsequent service or report it separately. |  |
| materials_and_returns | neoprene_pads; actual exchanges required by `refine_packaging`; `usable_returns_pad_module`; `usable_returns_usable_offcut`; `installation_waste_neoprene` | Track stock and exits by material and ownership. Net procurement may exclude genuinely returned unused supplies only with consistent upstream inventory adjustment; never subtract the same return from input mass and again as avoided production. No displacement credit is supplied here. A genuine sold co-product requires a separately reviewed allocation decision. |  |
| shared_life | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge` | For each actual resource packet, enumerate all consuming nodes, jobs and periods, maintenance/replacement/retirement events and measured causal use. Assign s_j = u_j / sum(u_all); shares over all beneficiaries sum to 1. Do not assign the full purchase to every period or use job-only hours as the whole-life denominator. Missing lifetime activity remains a disclosed blocker, not an assumed default. |  |
| service_ownership | contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access`; installation_electricity | Separate provider-owned resources from owned-resource packets; a packaged service and its embedded energy/assets are mutually exclusive representations of the same burden. Physical custody of reusable packaging does not scale with its upstream burden share. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules


Use Item(s) only for an actual complete counted provider package and h only for an actual matching hourly service; the same event may use one representation. Actual freight and waste-treatment services retain their own verified physical reference units and separate concrete service exchanges, never a conversion from hours, distance or mass to a fictitious counted event. Shared/provider inclusions and all-consumer attribution remain required.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | place_inspect | equipment_interface; accepted_isolation | custody and acceptance record | work_id; machine_id; configuration; loading_schedule; pad_layout; eligibility_approval; inspection_criteria; observations; correction_id; receipt_count; accepted_count; D; date | Reconcile each received machine with signed installation acceptance or documented reject status; inspect every support under actual static load. | Item(s) | each receipt, correction and acceptance | complete work order through signed handover | actual site and configuration | per reference flow | D positive and independently counted; originals and inspector identity; raw receipt count divided by D; no unaccepted job in D |
| cp_materials | place_inspect | neoprene_pads; actual exchanges required by `refine_packaging` | stock and mass record | SKU; grade; dimensions; opening_stock; receipts; closing_stock; drawn_mass; packaging_material; scale_id; tare; return_ticket; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile work-order draw from stock with weighed receipts and unused holdings; determine net pad mass separately from packaging and supported machine weight. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each receipt, draw and stock closure | entire work order including corrections | actual site store and installation node | per reference flow | Material-specific stock balance and scale checks; gross draw includes downstream returns and waste; each drawn_mass divided by D |
| cp_resources | place_inspect | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access` | resource and supplier record | asset_id; owner; whole_life_packet; acquisition; maintenance; replacement; retirement; all_consumers; period; u_j; u_all; provider; service_scope; actual_unit; activity; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile actual equipment-use logs and contracts; select packet versus disaggregated service representation; verify full-life denominator and period allocation. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s) per defined packet; original service unit retained; Item(s); h | each asset or service event | work order and documented whole resource life | all shared consuming sites/jobs and target node | per reference flow | Whole-life packet evidence, shares sum to 1; count packet shares or actual service quantities and divide by D; retain unknown retirement/lifetime evidence as unresolved |
| cp_energy | place_inspect | installation_electricity | meter or charging record | meter_id; start; end; session; owner; charging_losses; attribution_basis; allocated_kWh | Read actual installation-only meters or allocate shared charging using measured session use; exclude separately inventoried provider energy. | kWh | each use or charging session | sessions causally assigned to work order | site supply or evidenced offsite charging | per reference flow | Calibrated readings and session ownership; sum allocated_kWh including losses then divide by D; absent use needs explicit records, not assumed zero |
| cp_exits | place_inspect | `usable_returns_pad_module`; `usable_returns_usable_offcut`; `installation_waste_neoprene` | custody and receiving record | material; condition; quantity; tare; ticket; owner; destination; receiver; treatment_scope; correction_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh and reconcile separate reusable returns and waste at release, link to actual recipient and originating work-order material. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each exit | work order and linked later exit | node release and declared receiver gate | per reference flow | Signed tickets and material balance; sum each classified exit mass and divide by D; do not recategorize waste as product for a UUID match |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all non-reference cards | For actual work-order quantity Q_i, q_i = Q_i / D; D > 0. Keep separate quantities for each material, asset packet and real service unit. | Q_i; D; cp_gate; cp_materials; cp_resources; cp_energy; cp_exits | quantity per reference flow |  |
| stock_closure | neoprene_pads; actual exchanges required by `refine_packaging` | For each material, opening stock + receipts = closing unused stock + retained installation material + usable returns + waste + documented discrepancy. Correct attribution and weighing differences; do not force discrepancies into emissions. | cp_materials; cp_exits; installation records | reconciled material inventory |  |
| resource_share | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge` | For each declared whole-life packet, s_j = u_j / sum(u_all); q_resource = s_j / D. Require positive complete denominator, period ownership and no overlapping maintenance or retirement packet. | cp_resources; cp_gate | resource packet share per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | accepted_isolation | Keep grade, load distribution, module geometry and design-approved eligibility; separate different designs rather than claiming equal performance. | supplier/project design and signed gate records |
| range_evidence | all cards | Develop quantitative guardrails only from comparable independent measured jobs or verified SKU data. Manufacturer supported-load tables are neither consumed material masses nor installation yields. | card-specific actual evidence and independent sample scope |
| identity | all cards | Resolve actual exchange identity, state, provider/destination, property and unit before final dataset production. A conditional umbrella expands into actual exchanges and never receives an assumed universal UUID. | full matching flow and property/unit evidence |
| periods | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access` | Close ownership and period allocations, replacements and retirement; prevent duplicate burdens across jobs and services. | resource life and all-consumer ledger |
| `refine_packaging` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand by actual material and single-use or returnable custody. Do not count packaging already included in a supplier inventory again. Returnable packaging physical mass remains separate from its allocated upstream burden. Range evidence need: actual packing specification, weighing and reuse/custody evidence; gross delivery mass is insufficient. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual material/SKU one-use or reusable packaging receipts, retained stock, returns and waste; physical mass and life/burden share separate, supplier-included manufacture once. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_owned_resources` | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: For actually used jacks, slings, hand cutters, gauges and other owned assets, define each whole-resource-life packet including procurement, maintenance, replacements and retirement. Allocate its burden using measured causal use across every job/node/period; retain physical asset IDs and avoid recounting provider-owned equipment. Range evidence need: asset-specific whole-life service evidence and actual use logs; no assumed lifetime or fixed equipment-consumption fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual asset functions/models require exact whole-life reference; actual provider-owned equipment excluded. Each equivalent explicitly uses resource_share, not whole purchase per job. | `cp_resources`; actual independent records and identity/unit evidence |
| `refine_local_support_hourly_service` | `local_support_hourly_service_handling`; `local_support_hourly_service_access` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Activate only when the actual provider dataset is referenced to service hours with matching scope and complete lifecycle coverage. Do not also count the same event as a whole service package. Time is not a material count. Range evidence need: actual contract scope, trips or hire records and upstream inclusion; no universal count, hours or distance. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other functions or native references require their actual identity/unit; complete counted and timed views are mutually exclusive for same event. | `cp_resources`; actual independent records and identity/unit evidence |
| `refine_usable_returns` | `usable_returns_pad_module`; `usable_returns_usable_offcut` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional actual reusable offcuts, uninstalled pad modules and returnable packaging leaving the work order for a named owner and destination. Distinguish contamination and damage; no automatic sale, co-product or recycling credit. Range evidence need: weighed return tickets, condition and ownership; no assumed recoverable fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual reusable packaging products and other returned grades/states require exact identities/receivers; retained work-order stock is not boundary exit. | `cp_exits`; actual independent records and identity/unit evidence |
| `refine_installation_waste` | `installation_waste_neoprene` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Expand actual waste by neoprene/material identity, contamination, condition and named receiving treatment gate. Include irrecoverable corrections and captured debris; solid offcuts are waste, not automatically airborne elementary emissions. Disposal services and waste-transfer mass must have compatible nonduplicated treatment ownership. Range evidence need: actual cutting plan, waste tickets and correction history; no preset scrap or recycling fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual discarded packaging, other captured debris and contamination/receiver differences need actual roster and independent quantities; no automatic airborne release or recycling credit. | `cp_exits`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| gate_complete | accepted_isolation | Check supplier/project authorization for no restraint, approved per-support loads and layout, actual contact/level/stability/bridge criteria and correction closure. Missing design approval or inspection criteria blocks acceptance; do not assert a numerical operating attenuation. |  |
| row_completeness | all cards | Verify each actual input, return, waste and conditional service at place_inspect; reconcile material and equipment custody. Actual excluded activities require boundary extension, not silent deletion. |  |
| resource_closure | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge`; contracted_services; `local_support_hourly_service_handling`; `local_support_hourly_service_access` | All consumers and periods must be represented; shares sum to 1 and owned/provider burdens do not overlap. Unknown lifetime, replacement or retirement allocation blocks finalization. |  |
| normalization_check | all cards | D must be positive and exclude rejected jobs. Reference output is exactly 1 Item(s); other quantities come from actual records and are not fixed to one. Preserve real service units, energy and mass conversions. |  |
| exchange_readiness | all cards | Require exact verified identities, property/unit chains and traceable quantities for final exchanges; no checker result substitutes for these records. |  |
| `atomization_packaging_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_packaging` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_owned_resources_complete` | `owned_resources_jack`; `owned_resources_sling`; `owned_resources_hand_cutter`; `owned_resources_gauge` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_owned_resources` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_local_support_hourly_service_complete` | `local_support_hourly_service_handling`; `local_support_hourly_service_access` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_local_support_hourly_service` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_usable_returns_complete` | `usable_returns_pad_module`; `usable_returns_usable_offcut` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_usable_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_installation_waste_complete` | `installation_waste_neoprene` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_installation_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground isolation-installation service data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching first dry-laid single-layer neoprene equipment isolation services with the same disclosed gate and configuration |
| excluded_use | Whole-machine manufacture/installation/operation, seismic design, spring or layered isolation, acoustic performance guarantees and unqualified category averages |
| required_metadata | Location, dates, equipment and pad configuration, load schedule, approved eligibility, inspection gate, D, method/source editions, ownership and boundary interfaces |
| required_quality_disclosure | Actual versus absent conditional activity; UUID and quantitative gaps; service unit conversions; resource-life allocations; material discrepancies and configuration representativeness |
| update_trigger | Changed pad grade, support design, restraint requirement, installation technique, handover criterion or verified evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Ver.3.0 explanatory notes, 30 June 2025, pp.295 and 298; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only: vibration insulation versus acoustic wall/ceiling finishing |
| mason-super-w-2014 | handbook | Mason Industries, Bulletin SW-16-3, May 2014; https://mason-ind.com/download/36780/ | Modular neoprene supply, complete-module cutting and selected unbolted applications; no generic inventory quantities |
| karman-isolator-selection | handbook | Karman Rubber, Selecting the Right Vibro-Isolators; https://karman.com/products/selection-steps | Design inputs and load-distribution qualification; no adopted performance percentage or generic load/mass factor |
