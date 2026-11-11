---
pcr_id: pcr.constructions-and-construction-services.construction-services.conventional-wired-fire-alarm-system-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Conventional wired fire-alarm system installation services

## 1. Scope and Applicability

This PCR covers installing and commissioning one conventional wired building fire-alarm system with one control panel, separate detector/manual initiation and notification circuits, and its permanent standby battery pair. Work starts from an accepted design, mounting positions/routes and an existing dedicated isolated mains interface. The installer receives materials, prepares and mounts the panel/devices, routes and terminates wiring, connects and configures the system, corrects defects, completes the actual test schedule and hands over the documented accepted system. The CFP Standard manual is route evidence, not a substitute for the applicable project design or competent acceptance decision (`ctec-standard`, PDF pages 6–8, 10–13, 15, 17 and 23).

Addressable, wireless, two-wire AlarmSense, repeater/network systems, extinguishant control, remote monitoring, upstream building/power provision and post-handover operation/maintenance are excluded. Different panel, zone, device, cable or standby configurations are not automatically functionally equivalent. Installing a component, energising a circuit or recording an inspection is not itself an accepted complete output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.conventional-wired-fire-alarm-system-installation-services |
| classification_refs | CPC 3.0 54612 Fire alarm installation services; this PCR covers the declared conventional wired subset |
| covered_products | Complete single-panel conventional wired fire-alarm installation and commissioning accepted at the installer gate |
| excluded_products | Addressable; wireless; two-wire AlarmSense; repeaters/networks; extinguishant; remote monitoring; operations and maintenance |
| representative_product | Conventional CFP Standard panel with compatible detector/manual initiation and polarised sounder circuits, actual end-of-line devices and permanent VRLA standby pair |
| production_route | Receive and verify; prepare/mount; route/terminate/connect; configure; test/correct/retest; restore normal state and obtain signed acceptance |
| market_state | Installed, connected, configured, function-tested and documented system at signed installer handover |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete accepted conventional wired fire-alarm system installation and commissioning of the same disclosed configuration |
| How much | 1 Item(s) |
| How well | Actual approved design/BOM, circuit integrity and cause/effect, compatible standby supply, documented test results, restored normal state and signed competent acceptance |
| How long or cycle | One actual installation-to-acceptance cycle including corrections and retests; disclose job dates. Reusable asset packets retain manufacture, all service periods, maintenance/replacement and retirement phases separately. No operational service period is implied. |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete conventional wired fire-alarm system installation and commissioning |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Actual panel manufacturer/model; single-panel configuration; zones and detector/sounder circuits; exact device and accessory BOM/counts; circuit and installer feeder lengths/SKUs; permanent battery pair model/capacity/approval; existing isolated mains interface and installer segment; mounting/routes; design and acceptance specification; actual cause/effect and standby schedule; test/correction/restoration records; signed handover gate and dates |

Declare these qualifiers in the data package and retain D, the independently counted number of complete accepted systems of that same configuration, in `cp_acceptance`. D must be positive for normalization. Separate materially different configurations; count alone establishes neither equivalent coverage nor equivalent fire safety performance.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | accepted_installation | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Use cp_acceptance to count complete accepted same-configuration systems, not devices, zones, tests or progress. Every inventory quantity uses that same D. |
| mass_numerators | actual exchanges required by `refine_incoming_packaging`; control_panel; smoke_detector; heat_detector; detector_base; manual_call_point; polarised_sounder; end_of_line_device; standby_batteries; `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder`; `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label`; detector_test_agent; `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation`; actual exchanges required by `refine_unused_product_return`; actual exchanges required by `refine_dry_material_waste`; `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery`; `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue`; actual exchanges required by `refine_airborne_particulate`; actual exchanges required by `refine_test_agent_constituent_to_air` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep separate SKU/material/state/recipient numerators. Use calibrated net weighing or traceable matching-SKU count/length-to-mass conversion. Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` has reference kg factor 1. Never apply this conversion to electricity or service duration. |
| energy_preservation | installation_electricity | Energy | kWh | Meter actual pre-handover kWh and causal shares using cp_energy. Energy support must be verified for downstream exchange construction; NCV, battery Ah, mass and elapsed hours alone do not provide it. |
| resource_count | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Owned assets use exact attributed item fractions; counted hire requires genuine complete contract events. Item(s) reference factor is 1. An hourly contract requires true Duration support and review, not count conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted conventional design and routes/mounting interfaces; prepared building and major trays; existing dedicated isolated mains supply at an explicitly located interface; supplied components at installer receipt |
| starting_condition_role | Boundary readiness facts and existing interfaces, not a newly produced exchange or credit |
| product_classification_scope | The conventional wired single-panel installation/commissioning subset of CPC 3.0 54612 |
| recursive_input_rule | If same-category prior installation enters the job, identify its actual handed-over state and upstream package; do not recursively recreate the accepted service or imply that readiness is a service input. A changed scope requires separate review. |
| upstream_dataset_requirement | Match actual supplied component/SKU/state and geography/technology; require upstream manufacture and landed delivery/packaging disclosure. Separate supply manufacture from foreground installation and prevent duplicated embedded packaging. |
| disclosure | Actual design, starting interfaces, installer feeder responsibility, site/job period, supply datasets and inclusions, accepted configuration/D, resource ownership and unclosed evidence gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers installing and commissioning one conventional wired building fire-alarm system with one control panel, separate detector/manual initiation and notification circuits, and its permanent standby battery pair. Work starts from an accepted design, mounting positions/routes and an existing dedicated isolated mains interface. The installer receives materials, prepares and mounts the panel/devices, routes and terminates wiring, connects and configures the system, corrects defects, completes the actual test schedule and hands over the documented accepted system. The CFP Standard manual is route evidence, not a substitute for the applicable project design or competent acceptance decision (`ctec-standard`, PDF pages 6–8, 10–13, 15, 17 and 23). Addressable, wireless, two-wire AlarmSense, repeater/network systems, extinguishant control, remote monitoring, upstream building/power provision and post-handover operation/maintenance are excluded. Different panel, zone, device, cable or standby configurations are not automatically functionally equivalent. Installing a component, energising a circuit or recording an inspection is not itself an accepted complete output. | `ctec-standard` |
| boundary_install | install_accept | One node owns receipt, preparation/mounting, detector and sounder circuit termination, permanent battery connection, configuration, actual tests/corrections and signed acceptance. Phase journals do not create new product exchanges. Keep compatible EOL, mains segregation and screen/earth interfaces in the actual design record. | `ctec-standard` |
| boundary_mains | `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder`; installation_electricity | Existing dedicated isolated mains provision is an explicit starting interface. Include the actual installer-supplied feeder segment, connection and pre-handover metered use; exclude upstream building distribution works and later operation. | `ctec-standard` |
| boundary_components | control_panel; smoke_detector; heat_detector; detector_base; manual_call_point; polarised_sounder; end_of_line_device; standby_batteries | Permanent panel power supply/charger, batteries and connected devices are installed product components. They are not reusable tool capital. Disclose accessory inclusions and the actual CFP approval/design battery condition rather than generalising it across models. | `ctec-standard` |
| boundary_residuals | install_accept | Own every actual reject, correction, usable return and residual exit once. Link original issue/event/transfer and actual receiver. Internal retermination or configuration has no fictitious intermediate output; unclassified missing mass is a gap. | |
| boundary_resources | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access` | Identify each shared asset: operator-owned tool/tester/external charger/access equipment and provider-owned services used across jobs/periods. Index every benefiting job and period, from manufacture/acquisition through service, maintenance/replacement to retirement/termination. Preserve actual remaining-use uncertainty. Do not repeat provider asset manufacture. |  |
| boundary_packaging | actual exchanges required by `refine_incoming_packaging`; actual exchanges required by `refine_dry_material_waste` | Keep received packaging in a physical source pool even where its manufacture is embedded in landed supply. Add a separate packaging burden only if excluded upstream; never invent a receipt from its outgoing waste. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_accept | Conventional wired system installation and acceptance | required | Actual accepted-design conventional wired job | One accountable assembly, test/correction and handover responsibility | accepted_installation; 1 Item(s) |

Receiving/readiness, cabling/mounting, connection/configuration, testing/correction and closeout are journal phases of install_accept. A failed panel/device, damaged cable or defective battery remains linked to its correction/replacement and final accepted job. Actual repair, unchanged-stock return, recovery receiver and discard are distinct paths; neither disposal nor recovery is presumed.

### Process: Conventional wired system installation and acceptance (`install_accept`)

#### Inputs

##### Product flows

###### Owned drilling-tool asset equivalent (`owned_equipment_attribution_drill`)

Record only this independently identified owned drilling-tool asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `owned_asset_normalize`; retain the explicit original formula below.

- Selected flow: Owned drilling-tool asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Whole-asset manufacture fraction = N_asset * A_job / A_life / D Item(s) for this exact asset packet. N_asset is actual packet count; actual job and all-consumer full-life activity use the same documented basis and positive complete denominator. Scale manufacture once; maintenance/replacement/retirement follow their actual benefiting periods separately, no full tool consumed per system.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned fire-alarm tester asset equivalent (`owned_equipment_attribution_tester`)

Record only this independently identified owned fire-alarm tester asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `owned_asset_normalize`; retain the explicit original formula below.

- Selected flow: Owned fire-alarm tester asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Whole-asset manufacture fraction = N_asset * A_job / A_life / D Item(s) for this exact asset packet. N_asset is actual packet count; actual job and all-consumer full-life activity use the same documented basis and positive complete denominator. Scale manufacture once; maintenance/replacement/retirement follow their actual benefiting periods separately, no full tool consumed per system.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Owned external equipment-charger asset equivalent (`owned_equipment_attribution_external_charger`)

Record only this independently identified owned external equipment-charger asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `owned_asset_normalize`; retain the explicit original formula below.

- Selected flow: Owned external equipment-charger asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Whole-asset manufacture fraction = N_asset * A_job / A_life / D Item(s) for this exact asset packet. N_asset is actual packet count; actual job and all-consumer full-life activity use the same documented basis and positive complete denominator. Scale manufacture once; maintenance/replacement/retirement follow their actual benefiting periods separately, no full tool consumed per system.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Conventional wired fire-alarm control panel at receipt (`control_panel`)

Record the actual supplied conventional panel model and included accessory BOM. Weigh its net product mass or multiply that exact SKU count by a traceable net mass factor. The supplied permanent power supply/battery charger stays in this panel packet; do not repeat accessories also recorded under field devices or fixings. Link receipts, final installation and any removed unit to the same part record.

Quantity calculation is specified in section 8 `normalize_exchange`. Range evidence need: actual panel mass, count and accessory boundary are required. A single-panel reference does not supply a mass interval covering different models.

- Selected flow: Conventional wired fire-alarm control panel at receipt
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

###### Compatible conventional smoke detector (`smoke_detector`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Only the actual approved smoke-detection technology/SKU is supplied here; exclude separately supplied base and already included accessories.

- Selected flow: Compatible conventional smoke detector
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

###### Compatible conventional heat detector (`heat_detector`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Conditional on an actual approved heat detector in the installation BOM; it is not mandatory for every system.

- Selected flow: Compatible conventional heat detector
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

###### Compatible separately supplied detector base (`detector_base`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Do not repurchase a base included in the detector package.

- Selected flow: Compatible separately supplied detector base
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

###### Compatible manual fire alarm call point (`manual_call_point`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Preserve actual initiation circuit and supplied accessories once.

- Selected flow: Compatible manual fire alarm call point
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

###### Compatible polarised fire alarm sounder (`polarised_sounder`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Keep notification-circuit identity separate from detector/manual initiation circuits.

- Selected flow: Compatible polarised fire alarm sounder
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

###### Compatible circuit end-of-line device (`end_of_line_device`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Use the actual approved termination component identity and circuit, not an invented resistance or component quantity.

- Selected flow: Compatible circuit end-of-line device
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`


###### Permanent new VRLA standby batteries by SKU (`standby_batteries`)

For the representative CFP route, record the two compatible new 12 V VRLA batteries connected in series, including exact capacity, approval applicability and supplied condition. Weigh each SKU or use its traceable count-to-net-mass factor. Battery sizing must follow the actual load, required standby/alarm periods and applicable manufacturer approval; the cited approval condition is not a universal battery specification. Pre-handover recharge electricity belongs to installation_electricity, separately from battery manufacture.

Quantity calculation is specified in section 8 `normalize_exchange`. Range evidence need: exact battery datasheet, approval/design requirement, accepted pair BOM and actual mass are required. Manufacturer standby Ah examples are neither installation energy nor universal battery consumption ranges.

- Selected flow: Permanent new VRLA standby batteries by SKU
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

###### Complete supplied fire-resistant screened alarm-circuit cable (`alarm_cable_alarm_circuit`)

Record only this independently identified complete supplied fire-resistant screened alarm-circuit cable at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete supplied fire-resistant screened alarm-circuit cable
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actually supplied downstream control-panel feeder cable (`alarm_cable_panel_feeder`)

Record only this independently identified actually supplied downstream control-panel feeder cable at its actual state and supply or receiving gate. Only actual installer-supplied segment downstream of agreed isolated mains interface; existing dedicated supply not new input. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied downstream control-panel feeder cable
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fire-alarm installation screw (`fixings_and_containment_screw`)

Record only this independently identified separately supplied fire-alarm installation screw at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fire-alarm installation screw
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fire-alarm installation anchor (`fixings_and_containment_anchor`)

Record only this independently identified separately supplied fire-alarm installation anchor at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fire-alarm installation anchor
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fire-alarm cable gland (`fixings_and_containment_gland`)

Record only this independently identified separately supplied fire-alarm cable gland at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fire-alarm cable gland
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied local alarm-cable support (`fixings_and_containment_support`)

Record only this independently identified separately supplied local alarm-cable support at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied local alarm-cable support
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied short local alarm-cable containment (`fixings_and_containment_containment`)

Record only this independently identified separately supplied short local alarm-cable containment at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied short local alarm-cable containment
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fire-alarm identification label (`fixings_and_containment_label`)

Record only this independently identified separately supplied fire-alarm identification label at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fire-alarm identification label
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual physically consumed detector test formulation (`detector_test_agent`)

Activate only where a compatible physical aerosol or other formulation was actually used. Record exact product, current SDS, can gross/tare and before/after quantity, returned product and residual disposition; measure consumed formulation kg separately from empty container mass. Electronic/heat testing or a count of tested devices does not create this chemical input. Identify any emitted species independently under actual exchanges required by `refine_test_agent_constituent_to_air`.

Quantity calculation is specified in section 8 `normalize_exchange`. Range evidence need: compatible product/SDS, actual can mass changes and same-method dose observations are required; no verified generic grams-per-test factor is available.

- Selected flow: Actual physically consumed detector test formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `ctec-standard`

###### Separately supplied fire-alarm test or cleaning wipe (`test_cleaning_consumables_wipe`)

Record only this independently identified separately supplied fire-alarm test or cleaning wipe at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fire-alarm test or cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied fire-alarm cleaning formulation (`test_cleaning_consumables_cleaning_formulation`)

Record only this independently identified separately supplied fire-alarm cleaning formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied fire-alarm cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Metered installation and pre-handover test electricity (`installation_electricity`)

Read calibrated supply-meter start/end kWh for the actual installation, external tool charging, panel energisation, standby-battery recharge, tests and repeated tests before handover. Attribute evidenced other-user consumption using the same meter interval and causal records; record each charging boundary once. Preserve Energy/kWh; do not weigh electricity, use mass conversion, substitute NCV or infer it from battery Ah. Later monitoring, standby and operation are outside this service cycle.

Quantity calculation is specified in section 8 `energy_normalize`. Range evidence need: actual meter intervals, background supply/charging ownership, other users, accepted-system attribution and comparable observed kWh/reference records are required. Energy/kWh identity support is unresolved; no source-backed range is available.

- Selected flow: Metered installation and pre-handover test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable numerator divided by D; retain raw records and the corresponding measurement basis
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources:

###### Complete contracted fire-alarm installation access event (`hired_support_service_access`)

Record only this independently identified complete contracted fire-alarm installation access event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete contracted fire-alarm installation access event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

#### Outputs

##### Product flows

###### Accepted complete conventional wired fire-alarm system installation and commissioning (`accepted_installation`)

Count only a complete installed, connected, configured, documented and signed accepted single-panel system of the same declared configuration. cp_acceptance links the actual design and BOM to initiation/notification, fault, mains-failure/standby, cause/effect and restored-normal-state evidence. Count systems, not zones, devices, tests, partial progress or rejected work. Repeated tests and corrections retain resource burdens without increasing D.

Quantity calculation is specified in section 8 `reference_output`. Range evidence need: 1 Item(s) is the exact normalized reference output, not an observed yield range. Accepted denominator, failed/held work and configuration separation require traceable records.

- Selected flow: Accepted complete conventional wired fire-alarm system installation and commissioning
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_acceptance`
- Sources: `accepted-count-normalization`

##### Waste flows

###### Complete rejected fire-alarm panel waste (`rejected_component_waste_panel`)

Record only this independently identified complete rejected fire-alarm panel waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete rejected fire-alarm panel waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete rejected smoke-detector waste (`rejected_component_waste_detector`)

Record only this independently identified complete rejected smoke-detector waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete rejected smoke-detector waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete rejected heat-detector waste (`rejected_component_waste_heat_detector`)

Record only this independently identified complete rejected heat-detector waste at its actual state and supply or receiving gate. Actual approved heat detector used and discarded; not inferred from generic detector total. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete rejected heat-detector waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately discarded detector-base waste (`rejected_component_waste_base`)

Record only this independently identified separately discarded detector-base waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately discarded detector-base waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete rejected manual-call-point waste (`rejected_component_waste_call_point`)

Record only this independently identified complete rejected manual-call-point waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete rejected manual-call-point waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete rejected fire-alarm sounder waste (`rejected_component_waste_sounder`)

Record only this independently identified complete rejected fire-alarm sounder waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete rejected fire-alarm sounder waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately discarded end-of-line device waste (`rejected_component_waste_eol`)

Record only this independently identified separately discarded end-of-line device waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately discarded end-of-line device waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete damaged fire-alarm cable waste (`rejected_component_waste_cable`)

Record only this independently identified complete damaged fire-alarm cable waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete damaged fire-alarm cable waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete failed VRLA standby-battery waste (`rejected_component_waste_vrla_battery`)

Record only this independently identified complete failed vrla standby-battery waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete failed VRLA standby-battery waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Contaminated fire-alarm test or cleaning wipe waste (`contaminated_solid_waste_wipe`)

Record only this independently identified contaminated fire-alarm test or cleaning wipe waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated fire-alarm test or cleaning wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Contaminated fire-alarm test or cleaning container waste (`contaminated_solid_waste_container`)

Record only this independently identified contaminated fire-alarm test or cleaning container waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated fire-alarm test or cleaning container waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately dispatched fire-alarm formulation residue waste (`contaminated_solid_waste_loose_residue`)

Record only this independently identified separately dispatched fire-alarm formulation residue waste at its actual state and supply or receiving gate. Actual separate loose residue stream, not constituents already inside a contaminated wipe/container. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately dispatched fire-alarm formulation residue waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocate_job | install_accept | Attribute actual material, electricity, test agent, service and correction burdens to the same accepted configuration/job. Subdivide independently recorded jobs before using a justified causal share. Rejects, repeated tests and failed work do not increase D or escape the job burden. The sole intended product output is accepted_installation; unchanged usable stock is a return rather than an intended co-product. | |
| allocate_returns | actual exchanges required by `refine_unused_product_return`; actual exchanges required by `refine_incoming_packaging` | Preserve gross custody entry and actual unchanged return separately. The upstream consumed-supply numerator is gross issues less evidenced usable returns and remaining stock attributable elsewhere. Return handling/resources remain with this job; do not both net supply and grant a second avoided-product credit. Packaging already embedded in supply has no second manufacture burden. |  |
| allocate_asset | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | For each exact asset manufacture packet use its count times actual job service activity divided by documented same-basis total lifetime activity. Enumerate install_accept and every other consuming job/period; shares reconcile to one over the declared life. Unknown service-life or remaining-use evidence blocks finalized attribution. No whole asset per job, default life or reuse count is allowed. |  |
| allocate_period | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | Use one asset/phase/period index for manufacture/acquisition, all service jobs, maintenance/replacement and retirement/termination. Assign actual maintenance/replacement packets to evidenced benefiting periods or their causal job, with this specific assignment taking precedence over a general lifetime share. Index retirement once and disclose its burden owner. Closed assets use actual history; an in-service remaining-use estimate needs evidence and uncertainty. Do not annualize an already lifetime-attributed packet or count an original and replacement as simultaneous whole inputs. |  |
| allocate_service | `hired_support_service_access`; installation_electricity | Provider service owns its included rented asset manufacture/maintenance and operating resources. Use actual completed-event shares among all consumers and disclose inclusions; only add electricity or other resources outside that service packet. Owned-asset embodied shares and metered electricity are different packets, each counted once. |  |
| allocate_residual | actual exchanges required by `refine_dry_material_waste`; `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery`; `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | Declare actual repair, stock return, recycling/recovery receiver or discard for each state; retain collection and any modelled treatment with its disclosed owner. Destination alone grants no automatic recovery/substitution credit. A downstream recovered-product model requires its own evidence and boundary. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules


Identify each actual detection, initiation, notification, base and termination SKU separately against the accepted circuit BOM. Conditional cards do not prescribe a device count or universal detector technology. An actual combined factory device is one supplied assembly, with included components excluded from additional purchases. Retain all replacements consumed in correction and exact SKU-specific count-to-mass evidence; any additional actual device still requires its own concrete identity.

### Variable and Physical Ledger Definitions

D is the positive count of complete accepted same-configuration systems in cp_acceptance. Q denotes an actual attributable numerator in its own unit; it never denotes a mixed sum of material, energy, asset fractions and service events. Preserve raw gross observations before burden normalization. For each compatible SKU/material pool, reconcile opening stock plus actual receipts/withdrawals with closing stock, installed retained material, unchanged returns and separately measured residual exits. The accepted service output is counted in Item(s), not included as a kg term. Track actual preparation substrate where relevant to dust without inventing new material consumption.

For formulation constituents, use measured consumed formulation and exact composition on a compatible basis, then reconcile retained, captured/residual and independently evidenced emitted fractions. A carbon or water constraint can test only a compatible actual constituent pool; no generic water balance, oxygen exchange or residual-as-emission shortcut is applicable. Unknown occurrence is an evidence gap, not zero. Keep inventory diagnostics separate from actual concrete exchanges; a heterogeneous mass total is not a selectable flow identity.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_accept | accepted_installation | signed acceptance ledger | job/configuration/system IDs; panel/model/zones; exact device BOM; circuit/feeder lengths; battery pair/capacity/approval; design/cause-effect/standby schedule; tests/corrections/normal restoration; status/signature/date; D | Inspect the complete installed system against actual design and test/acceptance records. Count only final signed accepted same-configuration systems; keep held/failed/progress records separately. | Item(s) | each system and correction; final closeout | actual installation start through signed acceptance | one declared site/job and configuration | per reference flow | signed design/BOM/test/restoration record; denominator reconciliation |
| cp_materials | install_accept | physical supplied materials, packaging and usable returns | receipt/issue/return and installed-state ledger | job/date/event/transfer IDs; supplier/SKU/state; gross/net/tare; count or length; matching kg/item or kg/m evidence; shipment/pack material; upstream inclusions; stock; retained installed mass; usable return; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh net materials with calibrated scales or use traceable same-SKU count/length mass factors. Trace gross custody inputs, actual unchanged returns, stock change and installed state separately; retain packaging physical pool independent of upstream burden owner. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; Item(s); m | each receipt/withdrawal/return and final installed BOM | all original and correction events through closeout | install_accept custody and declared shipment interfaces | per reference flow | calibration/tare records; SKU factors; paired transfers; stock and BOM reconciliation |
| cp_energy | install_accept | installation_electricity | meter interval and user-share ledger | job/date; meter ID/calibration; start/end kWh; supply/charging boundary; installation/test/retest/recharge interval; other users; causal shares; signed acceptance cutoff | Read actual supply meters, including external tool charging and pre-handover panel/battery recharge; reconcile shared-user intervals, subtract only evidenced other-user use and exclude post-handover operation. | kWh | each attributable operating/test/charging interval | installation start through handover cutoff including corrections | actual supply meter boundary serving install_accept | per reference flow | meter readings/calibration; interval coverage; user shares; no battery-Ah substitution |
| cp_services | install_accept | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access` | asset/event and lifetime-period attribution ledger | asset/model/serial/owner; manufacture packet/count; job activity; same-basis lifetime activity; all jobs/consumers/periods; maintenance/replacement/retirement event and beneficiaries; remaining-use evidence; service contract/configuration/completion/count; provider resource inclusions; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Index actual asset manufacture/acquisition, every use job/reporting period, actual maintenance/replacement and retirement. Measure job and lifetime activity consistently; identify causal maintenance beneficiaries. For genuine counted hire inspect contract and completed-event count plus all consumer shares; retain true hourly rental quantity for separate review. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); actual service activity basis disclosed | each job/event and each asset-period update | job dates plus documented asset life and phase history | install_accept and every other consumer of selected resource | per reference flow | asset history/BOM; documented utilization/uncertainty; contract/invoice/completion; reconciled all-consumer shares |
| cp_residuals | install_accept | waste streams and direct airborne species/particles | residual dispatch, monitoring and constituent ledger | job/date/event; original issue/source pool; material/SKU/state; waste code/recipient/transfer; gross/tare kg; fault/removal/retest; substrate/tool/capture/particle basis/air compartment; test product/SDS/composition; measured consumed/captured/residual quantities; matching factor/activity and uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh each dispatched material/state/recipient separately and pair with custody/correction records. For actual air releases measure species/particle mass or use independently supported matching activity/composition/partition methods; distinguish captured waste and usable stock, and never turn unclosed residual into emission. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each residual event/dispatch and actual emitting test or preparation event | all installation/correction events to residual closeout | install_accept exits and actual receiving medium/receiver | per reference flow | weighbridge/tare/receiver records; monitored or justified factors; SDS and compatible constituent balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | actual exchanges required by `refine_incoming_packaging`; control_panel; smoke_detector; heat_detector; detector_base; manual_call_point; polarised_sounder; end_of_line_device; standby_batteries; `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder`; `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label`; detector_test_agent; `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation`; `hired_support_service_access`; actual exchanges required by `refine_unused_product_return` | normalized quantity = Q / D. Q is the actual attributable material kg or genuine completed service-event count, each separately measured; preserve gross issues, stock and returns before applying allocate_returns to consumed supply. | Q; D; cp_materials; cp_services; cp_acceptance | normalized concrete exchange in its original unit per reference flow |  |
| energy_normalize | installation_electricity | normalized electricity = E_job / D. E_job is measured interval kWh less only evidenced other-user kWh; include attributable pre-handover charging/correction intervals once. | meter start/end; other-user records; E_job; D; cp_energy; cp_acceptance | kWh per reference flow |  |
| owned_asset_normalize | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | normalized manufacture asset fraction = N_asset * A_job / A_life / D. N_asset is the actual count of the exact asset packet; A_job and A_life use the same documented service-activity basis. Maintenance/replacement/retirement packets follow allocate_period separately. | N_asset; A_job; A_life; D; cp_services; cp_acceptance | attributed Item(s) per reference flow |  |
| residual_normalize | actual exchanges required by `refine_dry_material_waste`; `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery`; `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | normalized waste = W_stream / D. W_stream is independently measured net kg at the actual material/state/receiver gate, never an unexplained difference. | W_stream; D; cp_residuals; cp_acceptance | stream-specific waste kg per reference flow |  |
| emission_normalize | actual exchanges required by `refine_airborne_particulate` | normalized airborne particulate = P_air / D. P_air is monitored mass or measured activity times an independently supported matching substrate/tool/capture/particle-basis factor; retain source, unit conversion and uncertainty. | P_air; matching factor and activity or monitoring; D; cp_residuals; cp_acceptance | particle-basis and air-compartment-specific kg per reference flow |  |
| solvent_partition | actual exchanges required by `refine_test_agent_constituent_to_air` | normalized constituent emission = S_air / D. Determine S_air from species measurement or actual consumed formulation times exact constituent fraction times independently supported released fraction; reconcile retained/captured/residual fractions on the same constituent basis. Do not default release to all consumption. | actual formulation consumption; SDS/composition; partition or species monitoring; S_air; D; cp_residuals; cp_acceptance | identified species and air-compartment kg per reference flow |  |
| reference_output | accepted_installation | normalized accepted output = D / D = 1 Item(s). Only final accepted same-configuration systems contribute to D. | D; cp_acceptance | 1 Item(s) per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_reference | accepted_installation | Keep all qualifiers, independently counted D and failed/held work; separate different configurations. | cp_acceptance |
| dq_pools | all inventory rows | Retain gross input, stock, retained state, returns and measured residuals by SKU/state/recipient; heterogeneous sums are diagnostics only. | cp_materials; cp_residuals |
| dq_ownership | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access`; installation_electricity | Reconcile manufacture/supply inclusions, all users/periods, actual maintenance/replacement/retirement and remaining-use evidence; avoid duplicate service/electricity packets. | cp_services; cp_energy |
| dq_occurrence | all inventory rows | Unknown occurrence, missing measurement or identity is not zero; finalize concrete identity and Energy/Duration support before downstream exchange construction. | actual source and quantity records |
| dq_range_incoming_packaging | actual exchanges required by `refine_incoming_packaging` | Range evidence need: shipment-specific material weights, pack sizes, actual reuse/return history and supplier packaging boundary are required; no universal packaging mass per system is established. | cp_materials; actual matching-domain quantity evidence |
| dq_range_owned_equipment_attribution | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | Range evidence need: exact asset manufacture/BOM, actual maintenance, all consuming jobs/periods, service-life utilization and remaining-use uncertainty are required. No default lifetime, reuse count or generic embodied mass per system is justified. | cp_services; actual matching-domain quantity evidence |
| dq_range_control_panel | control_panel | Range evidence need: actual panel mass, count and accessory boundary are required. A single-panel reference does not supply a mass interval covering different models. | cp_materials; actual matching-domain quantity evidence |
| dq_range_field_alarm_devices | smoke_detector; heat_detector; detector_base; manual_call_point; polarised_sounder; end_of_line_device | Range evidence need: actual device-type BOM, compatible SKU masses, circuit loading and design coverage are required; one heterogeneous device total and a universal devices-per-system interval are invalid. | cp_materials; actual matching-domain quantity evidence |
| dq_range_standby_batteries | standby_batteries | Range evidence need: exact battery datasheet, approval/design requirement, accepted pair BOM and actual mass are required. Manufacturer standby Ah examples are neither installation energy nor universal battery consumption ranges. | cp_materials; actual matching-domain quantity evidence |
| dq_range_alarm_cable | `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder` | Range evidence need: actual circuit lengths, core/rating, slack and termination requirements, exact kg/m evidence and cutting/rework records are needed; no universal cable mass per system is established. | cp_materials; actual matching-domain quantity evidence |
| dq_range_fixings_and_containment | `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label` | Range evidence need: accepted configuration, actual installed/issued counts and SKU masses are required; prepared major supports and building structure cannot supply a new-material interval. | cp_materials; actual matching-domain quantity evidence |
| dq_range_detector_test_agent | detector_test_agent | Range evidence need: compatible product/SDS, actual can mass changes and same-method dose observations are required; no verified generic grams-per-test factor is available. | cp_materials; actual matching-domain quantity evidence |
| dq_range_test_cleaning_consumables | `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation` | Range evidence need: actual object/event coverage, SKU and issued/returned/residue/wipe measurements are required; dose observations apply only to the same device and method. | cp_materials; actual matching-domain quantity evidence |
| dq_range_installation_electricity | installation_electricity | Range evidence need: actual meter intervals, background supply/charging ownership, other users, accepted-system attribution and comparable observed kWh/reference records are required. Energy/kWh identity support is unresolved; no source-backed range is available. | cp_energy; actual matching-domain quantity evidence |
| dq_range_hired_support_service | `hired_support_service_access` | Range evidence need: actual event definition or hourly contract, configuration/capacity, provider inclusions and all consumer shares are required. Hourly Duration is unresolved and is not covered by this count unit. | cp_services; actual matching-domain quantity evidence |
| dq_range_unused_product_return | actual exchanges required by `refine_unused_product_return` | Range evidence need: linked measured gross issues, unchanged state and actual returns by SKU are required; no default return fraction or automatic credit is established. | cp_materials; actual matching-domain quantity evidence |
| dq_range_dry_material_waste | actual exchanges required by `refine_dry_material_waste` | Range evidence need: weighed stream-specific manifests, source-pool links and actual diversion routes are required. Nominal component mass gives no waste-rate interval. | cp_residuals; actual matching-domain quantity evidence |
| dq_range_rejected_component_waste | `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery` | Range evidence need: actual fault, removal/retest, original issue, classification and weighed dispatch records are required. There is no default defect rate; zero requires complete event coverage. | cp_residuals; actual matching-domain quantity evidence |
| dq_range_contaminated_solid_waste | `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | Range evidence need: formulation-specific residue, container tare, wipe mass and recipient acceptance are required; no all-chemical evaporation assumption is valid. | cp_residuals; actual matching-domain quantity evidence |
| dq_range_airborne_particulate | actual exchanges required by `refine_airborne_particulate` | Range evidence need: matching substrate/tool/capture, particle-size basis, activity and release-factor/monitoring evidence are required; generic dust or balancing-loss quantities are unavailable. | cp_residuals; actual matching-domain quantity evidence |
| dq_range_test_agent_constituent_to_air | actual exchanges required by `refine_test_agent_constituent_to_air` | Range evidence need: exact product/SDS, constituent composition and delivered/captured/residual fractions are required. No generic aerosol/VOC interval or air subcompartment is inferred. | cp_residuals; actual matching-domain quantity evidence |
| dq_range_accepted_installation | accepted_installation | Range evidence need: 1 Item(s) is the exact normalized reference output, not an observed yield range. Accepted denominator, failed/held work and configuration separation require traceable records. | cp_acceptance; actual matching-domain quantity evidence |
| `refine_incoming_packaging` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Keep packaging received with components, batteries, cable and consumables in a physical custody pool linked to its shipment. Weigh each material or use verified pack counts and tare. Create a separate burden-bearing input only where the landed component dataset excludes that packaging; embedded packaging manufacture is already owned upstream. Reconcile reuse, return, stock and waste without deriving receipts from waste exits. Quantity calculation is specified in section 8 normalize_exchange. Range evidence need: shipment-specific material weights, pack sizes, actual reuse/return history and supplier packaging boundary are required; no universal packaging mass per system is established. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual material/pack/shipment custody, verified net mass/count and tare, real reuse/return/stock/waste, upstream included packaging has physical audit only, no waste-to-receipt inference. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_owned_equipment_attribution` | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Identify each actual drilling/cable preparation tool, tester, external equipment charger or access asset by model and serial number. Measure job service activity and the documented lifetime activity on the same basis; apply owned_asset_normalize to the manufacture packet of that exact asset. Link actual maintenance, replacement and retirement packets to their benefiting jobs/periods under section 7. The permanent panel charger and standby batteries are installed components; rented equipment is owned by the provider service. This is an attributed Item(s) fraction, not installed mass or a whole tool consumed per job. Quantity calculation is specified in section 8 owned_asset_normalize. Range evidence need: exact asset manufacture/BOM, actual maintenance, all consuming jobs/periods, service-life utilization and remaining-use uncertainty are required. No default lifetime, reuse count or generic embodied mass per system is justified. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual cable-preparation tool functions and access-asset types need exact model/function/life packet; permanent panel charger and standby batteries installed components, rented assets provider-owned. Use owned_asset_normalize fraction N_asset*A_job/A_life/D, maintenance/replacement/retirement by allocate_period. | `cp_services`; actual independent records and identity/unit evidence |
| `refine_alarm_cable` | `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Identify each actual fire-resistant screened alarm cable by construction and rating. Retain measured route, termination slack, issued length, offcuts and replacement length; obtain kg using direct weighing or the matching SKU kg/m factor. Record a panel feeder only for the segment actually supplied by this installer downstream of the agreed isolated mains interface. Existing dedicated supply and major trays are starting-condition assets, not new cable consumption. Quantity calculation is specified in section 8 normalize_exchange. Range evidence need: actual circuit lengths, core/rating, slack and termination requirements, exact kg/m evidence and cutting/rework records are needed; no universal cable mass per system is established. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Different actual construction/core/rating SKUs require independent records; same physical SKU/segment not bought twice across roles. Retain route/slack/cut/rework and exact kg/m auxiliary factor. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_fixings_and_containment` | `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate actual supplied screws, anchors, glands, supports, short containment and labels separately. Weigh each material/SKU or use its measured unit mass and actual issue count. Link installed counts to the accepted wall/routes and distinguish prepared building structure or major existing trays. Cable-entry preparation and screen/earth terminations remain assembly duties, not a separate fabricated product. Quantity calculation is specified in section 8 normalize_exchange. Range evidence need: accepted configuration, actual installed/issued counts and SKU masses are required; prepared major supports and building structure cannot supply a new-material interval. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual distinct containment functions/models require own SKU/unit; prepared major supports/building structure starting interface, no separately fabricated-product gate from cable entry/earth termination. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_test_cleaning_consumables` | `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Include only actual consumed wipes, cleaning products or other reset/test materials. Record the cleaned/tested object and event, exact SKU, issues, unused returns, container tare and residue; quantify net product mass by weighing or matching SKU factor. A reused reset key or tester is equipment, not consumable material. Separate wipe substrate, supplied formulation and outgoing contamination to avoid counting the same constituent twice. Quantity calculation is specified in section 8 normalize_exchange. Range evidence need: actual object/event coverage, SKU and issued/returned/residue/wipe measurements are required; dose observations apply only to the same device and method. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual reset/test materials need exact SKU and one native unit; reusable reset key/tester are equipment. Prewetted complete wipe includes supplied formulation once; keep actual object/event/dose records. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_hired_support_service` | `hired_support_service_access` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Use this counted card only for an actual complete provider-defined event with explicit equipment/configuration and deliverable, evidenced by contract and completion record. Count completed events and their actual consumer share under cp_services. A real hourly rental retains its true quantity and requires scope/measurement review and verified Duration support; never convert hours into an invented Item(s) event. Record provider manufacture, maintenance, fuel and electricity inclusions before adding any separate resource. Quantity calculation is specified in section 8 normalize_exchange. Range evidence need: actual event definition or hourly contract, configuration/capacity, provider inclusions and all consumer shares are required. Hourly Duration is unresolved and is not covered by this count unit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual contracted equipment functions/native references require precise complete provider-reference identity and unit. A real hourly rental is not Count; retain manufacture/maintenance/fuel/electricity scope once. | `cp_services`; actual independent records and identity/unit evidence |
| `refine_unused_product_return` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record actual usable unchanged components, cable, consumables or reusable packaging that leave installer custody. Preserve original SKU/state and recipient, and measure net mass by weighing or exact count/length-to-mass factor. Pair the return transfer with its original issue. Keep gross issues and returns as auditable observations; charge net consumed upstream supply once under section 7 without deducting the return twice. Failed or contaminated items are not usable returns. Quantity calculation is specified in section 8 normalize_exchange. Range evidence need: linked measured gross issues, unchanged state and actual returns by SKU are required; no default return fraction or automatic credit is established. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual unchanged usable SKU/state/recipient matched to original issue and native kg for mass supplies; verified count/length conversion auxiliary only, actual gross/net bridge once, failed/contaminated items not usable. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_dry_material_waste` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Weigh each real dry material stream with container tare and dispatch evidence, retaining material, state and actual receiver. Link packaging waste to its received physical pool even when packaging burden is embedded upstream. Keep captured dust in the applicable waste stream; an actual atmospheric fraction is distinct. Separate recycling destination evidence from any downstream treatment/recovery model; do not claim an avoided-product credit here. Quantity calculation is specified in section 8 residual_normalize. Range evidence need: weighed stream-specific manifests, source-pool links and actual diversion routes are required. Nominal component mass gives no waste-rate interval. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual dry stream/substrate/composite/state/receiver with tare and source custody; captured dust waste, independent air fraction separate; no downstream avoided-product credit. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_rejected_component_waste` | `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Link each nonusable panel, detector/base, manual call point, sounder/EOL part, damaged cable assembly or failed battery to its original issue, defect and correction event. Weigh each actual waste state or use exact SKU count/mass, with dispatch and authorised recipient. Keep battery, electronic and cable wastes separate. Internal repair is not a new product transfer; usable unchanged parts return under actual exchanges required by `refine_unused_product_return`. Quantity calculation is specified in section 8 residual_normalize. Range evidence need: actual fault, removal/retest, original issue, classification and weighed dispatch records are required. There is no default defect rate; zero requires complete event coverage. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual component/SKU/hazard/receiver records require refinement; each physical complete assembly includes internal parts once. Link original issue, defect/correction/removal, authorized recipient; internal repair no new product transfer, usable unchanged return not waste. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_contaminated_solid_waste` | `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record each actual contaminated wipe/container or residual formulation stream at its accepted waste receiver, with composition, physical state, gross mass and tare. Distinguish clean recyclable packaging and usable returns. Reconcile the supplied wipe/formulation constituent pool with retained residue and any independently evidenced emission. Gross chemical issues are not automatically evaporation. Quantity calculation is specified in section 8 residual_normalize. Range evidence need: formulation-specific residue, container tare, wipe mass and recipient acceptance are required; no all-chemical evaporation assumption is valid. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual chemistry/state/hazard/receiver differences need individual records; keep original constituent pool and independent emission reconciliation, gross chemical issue not full evaporation. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_airborne_particulate` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Activate only for a measured or independently supported atmospheric release from actual drilling/cable preparation. Identify substrate/material, tool, capture control, particle-size/fraction basis and actual receiving air compartment. Quantify by monitoring or a matching material/tool/control-specific factor times measured activity, then apply emission_normalize. Captured dust remains waste; never use unexplained custody residuals as an air release. Quantity calculation is specified in section 8 emission_normalize. Range evidence need: matching substrate/tool/capture, particle-size basis, activity and release-factor/monitoring evidence are required; generic dust or balancing-loss quantities are unavailable. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_test_agent_constituent_to_air` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: For actual physically consumed test agent, identify each substance and receiving subcompartment before defining an elementary exchange. Use species monitoring or a product-specific SDS composition and evidenced delivered/captured/residual partition method under solvent_partition. Keep constituent quantities compatible with the consumed formulation pool. Neither device-test count, an undifferentiated VOC label nor a 100% release assumption establishes substance mass or destination. Quantity calculation is specified in section 8 solvent_partition. Range evidence need: exact product/SDS, constituent composition and delivered/captured/residual fractions are required. No generic aerosol/VOC interval or air subcompartment is inferred. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_residuals`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_installation | Require all reference qualifiers, positive D and signed complete acceptance. Confirm actual initiation/notification and cause/effect, fault/mains-failure/standby and final restored-normal-state records against the project acceptance schedule. A programmed test mode or a component check is not whole-system acceptance. | `ctec-standard` |
| validate_identity | all inventory rows | Before a downstream exchange is finalized, verify each actual SKU/material/state/recipient or species/air-compartment identity and compatible property/unit. Conditional umbrellas expand to zero, one or multiple concrete exchanges according to actual occurrence; unknown is not zero. Count support does not verify a service UUID. | |
| validate_quantity | all inventory rows | Match each raw numerator, unit, CP, applicable section 8 calculation and common D. Check separate gross/return/stock/retained/residual pools; reject mixed-material UUIDs, mass conversion of electricity and event conversion of hourly rent. Missing compatible Energy or Duration support remains an explicit gap. | |
| validate_rework | `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery`; accepted_installation | Link original component/cable/battery defect, repair/replacement, repeat test and actual exit to install_accept. Keep failed/held work out of D while retaining its burdens. Every exit has actual state and receiver; no undocumented recovery path or credit. |  |
| validate_shared_period | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access` | Reconcile all resource consumers and periods, actual service-life shares and manufacture/maintenance/replacement/retirement event ownership. Missing remaining-use/replacement/termination evidence blocks finalized attribution. Prevent whole-tool defaults, repeated lifetime/annual allocation and duplicates across provider service, owned assets and electricity. |  |
| validate_ranges | all inventory rows | Preserve each role-specific range evidence need in section 8. A manufacturer design limit, nominal factor or exact 1 Item(s) reference is not an empirical quantity interval. Missing ranges remain disclosed; do not manufacture bounds to make a validation warning disappear. | |
| `atomization_incoming_packaging_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_incoming_packaging` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_owned_equipment_attribution_complete` | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_owned_equipment_attribution` with actual records; unresolved required expansion blocks the dataset. | `ctec-standard` |
| `atomization_alarm_cable_complete` | `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_alarm_cable` with actual records; unresolved required expansion blocks the dataset. | `ctec-standard` |
| `atomization_fixings_and_containment_complete` | `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_fixings_and_containment` with actual records; unresolved required expansion blocks the dataset. | `ctec-standard` |
| `atomization_test_cleaning_consumables_complete` | `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_test_cleaning_consumables` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_hired_support_service_complete` | `hired_support_service_access` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_hired_support_service` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_unused_product_return_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_unused_product_return` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_dry_material_waste_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_dry_material_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_rejected_component_waste_complete` | `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_rejected_component_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_contaminated_solid_waste_complete` | `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_contaminated_solid_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_airborne_particulate_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_airborne_particulate` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_test_agent_constituent_to_air_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_test_agent_constituent_to_air` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation-to-acceptance data package for one disclosed conventional wired system configuration |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Installation and commissioning contributions for the same explicit scope, starting interfaces, configuration and handover gate, with actual compatible supply datasets |
| excluded_use | Automatic comparison across different coverage/configurations; standalone device manufacture; addressable/wireless/two-wire AlarmSense/network/repeater/extinguishant systems; remote monitoring and operational service |
| required_metadata | Panel and zones; exact device/accessory/BOM; actual circuit/feeder lengths; compatible standby pair/design; site/job/period; design and test/acceptance gate; D; supply/packaging boundaries; asset/service owners; all-consumer/phase index; quantity/identity evidence |
| required_quality_disclosure | Unresolved concrete identities and Energy/conditional Duration support; role-specific range gaps; meter and balance completeness; faults/rework; asset remaining-use and period uncertainty; omitted/unknown occurrence and limits on functional equivalence |
| update_trigger | Changed panel/configuration/route/design or scope/interface; changed battery/device specification; new actual quantity/range evidence; changed supply/resource boundary; verified identities; updated acceptance or asset history |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ctec-standard | handbook | C-TEC CFP 2/4/8 Zone Standard installation and maintenance manual, Approved Document DFU7004010 Rev 4, 01/11/21; https://c-tec.com/download?wpdmdl=13537 ; PDF pages 6–8, 10–13, 15, 17, 23 | Conventional separate detector/manual initiation and polarised sounder circuits; actual cable/mounting/earth/mains interfaces and component duties; permanent charger and compatible new VRLA pair; test-mode restoration and setup records; load/standby-specific battery completeness. No installation electricity, test-agent dose, asset lifetime or universal service-normalized quantity range is taken from the manual. |
| accepted-count-normalization | method_factor | Count normalization identity for positive accepted D: D / D = 1; this PCR sections 3 and 8; D contains only complete accepted same-configuration systems | Exact normalized reference output 1 Item(s); not an empirical yield or inventory range |
