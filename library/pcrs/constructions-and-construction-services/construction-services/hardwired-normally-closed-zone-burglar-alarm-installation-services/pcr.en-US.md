---
pcr_id: pcr.constructions-and-construction-services.construction-services.hardwired-normally-closed-zone-burglar-alarm-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hardwired normally-closed-zone burglar alarm installation services

## 1. Scope and Applicability

This category covers first installation and commissioning at a construction site of a single-panel hardwired intruder alarm with normally-closed detection zones, a separate global tamper loop, hardwired keypad, compatible contacts/detectors, external sounder and permanent rechargeable standby battery. No communication monitoring interface is supplied. The purchased output is a complete accepted installation, with its actual layout and interfaces disclosed.

Wireless, hybrid, networked or addressable systems; fire/smoke and other life-safety alarms; cameras and access control; remote signalling, monitoring and telecommunications provision; periodic servicing; new upstream mains distribution; and post-handover operation are excluded. CPC 54613 includes a broader range of burglar-alarm installations and excludes monitoring/maintenance. The proposed classification relation therefore describes a narrower subset (`unsd-cpc3-explanatory-notes`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.hardwired-normally-closed-zone-burglar-alarm-installation-services |
| classification_refs | CPC 3.0 54613; proposed narrower scope |
| covered_products | Complete accepted first installation of the disclosed normally-closed-zone/global-tamper hardwired intruder alarm |
| excluded_products | The technologies and services excluded in section 1; incomplete systems and separately manufactured components |
| representative_product | Texecom Veritas8/R8 illustrates the architecture; actual compatible model instructions and design govern without a mandatory brand |
| production_route | Receive and identify supplies; confirm existing isolated interfaces; mount and wire components; install permanent batteries; configure; test intrusion response and user control; correct and retest; restore normal state; hand over |
| market_state | Site-integrated, configured and accepted installation at installer/customer handover |

The manufacturer installation manual supports the selected route and interface roles. Its different mains/battery power-up descriptions do not establish a universal sequence here: competent installers use the applicable approved model instructions. Model cable/current/capacity specifications are design qualifiers, not per-installation inventory quantities (`texecom-veritas-installation`).

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted complete hardwired normally-closed-zone burglar alarm installation and commissioning |
| How much | One complete accepted installation; D independently counts actual accepted same-configuration installations before normalization |
| How well | Declared design and BOM; successful occupied-zone, sounder, tamper and set/unset checks; corrections closed and normal state restored; signed customer handover |
| How long or cycle | One receipt-to-acceptance installation cycle, including failures and retests; no operating-year or lifetime benefit |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete hardwired normally-closed-zone burglar alarm installation and commissioning |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Panel model; normally-closed zones and occupied/disabled zone schedule; separate global tamper loop; exact keypad/contact/PIR/sounder BOM; permanent standby battery chemistry/model/capacity and supply inclusion; existing mains interface and installer feeder responsibility; cable/containment; programming and customer controls; walk/sounder/tamper/set-unset/normal-state test results; installation dates and signed acceptance |

Declare these qualifiers in the foreground package. Justify configuration equivalence before pooling D; materially different designs require separate packages. The reference service is counted independently and has no mass-equivalence equation. Lifecycle periods for shared resources are separate from the installation cycle.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count complete accepted same-configuration jobs using cp_acceptance; require D > 0 before dividing actual numerators by D. |
| `m_mass` | all mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net quantities with calibrated scales or traceable matching-SKU count/length-to-mass factors in cp_materials for inputs and cp_releases for return, waste and release outputs. Never equate a heterogeneous total to one exchange. |
| `m_energy` | installation_electricity | Energy | kWh | Keep measured external electricity in kWh using cp_energy. Battery Ah, power rating, test duration and NCV do not replace actual energy. |
| `m_service` | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only an exact asset lifecycle fraction or a genuine complete contracted event using cp_services. Hourly hire needs actual Duration support and reviewed units. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials received and identified; mounting premises and isolated existing mains/earth interface actually accepted and recorded |
| starting_condition_role | Disclosed existing readiness condition; not a new product input or avoided burden |
| product_classification_scope | Only the declared normally-closed-zone hardwired burglar-alarm installation subset |
| recursive_input_rule | Record actual delivered state and bounded upstream responsibility for same-category purchased prior installation; unresolved overlap blocks acceptance |
| upstream_dataset_requirement | Matching manufacture/landed-supply packets with explicit inbound delivery, packaging and accessory inclusion; physical custody remains traceable |
| disclosure | Actual site/date/design/interface responsibilities, supplies, test and correction records, handover, upstream scope, assets/periods and remaining evidence gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This category covers first installation and commissioning at a construction site of a single-panel hardwired intruder alarm with normally-closed detection zones, a separate global tamper loop, hardwired keypad, compatible contacts/detectors, external sounder and permanent rechargeable standby battery. No communication monitoring interface is supplied. The purchased output is a complete accepted installation, with its actual layout and interfaces disclosed. Wireless, hybrid, networked or addressable systems; fire/smoke and other life-safety alarms; cameras and access control; remote signalling, monitoring and telecommunications provision; periodic servicing; new upstream mains distribution; and post-handover operation are excluded. CPC 54613 includes a broader range of burglar-alarm installations and excludes monitoring/maintenance. The proposed classification relation therefore describes a narrower subset (`unsd-cpc3-explanatory-notes`). | `unsd-cpc3-explanatory-notes` |
| b_scope | install_accept | Own receipt, mounting, wiring, termination, permanent-battery installation, programming, intrusion testing, correction, retest and customer handover. Supplied controller, field devices, battery, wiring and permanent accessories remain separate input roles. No fire/life-safety method or remote monitoring is included. | `texecom-veritas-installation` |
| b_upstream | all material inputs | Require compatible supplier packets for manufacture and actual inbound delivery. Record included packaging and accessories once. Preserve incoming packaging custody even when its manufacturing burden is included upstream; add a separate packaging burden only for an excluded upstream contribution. |  |
| b_readiness | starting interface | Record accepted existing mounting surfaces and isolated mains/earth interface. Readiness is a disclosed condition, neither an invented purchased input nor a credit. A purchased same-category prior installation requires its actual delivered state and upstream scope; unresolved overlap blocks acceptance. |  |
| b_rework | install_accept | Zone response failure, open tamper circuit, defective sounder or unsuccessful set/unset leaves the installation unaccepted. Link correction/retest back to install_accept and the original job. Classify actual removed material as usable return, recovery/waste exit or retained repair; unfinished or failed systems cannot enter accepted_installation. | `texecom-veritas-installation` |
| b_assets | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | Identify installer-owned tools, testers, external chargers and access equipment by model/serial, with every consuming job/node and period. Use a lifecycle packet from acquisition/manufacture through service, maintenance/replacement and retirement/termination. The hire provider owns its equipment lifecycle; audit foreground energy inclusions to prevent duplicate ownership. |  |
| b_gate | accepted_installation | End at signed complete installation acceptance and control handover after corrections, retests and restoration of the agreed normal state. Exclude subsequent use electricity, maintenance, monitoring and new upstream mains distribution. | `texecom-veritas-installation` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `install_accept` | Intruder alarm integration, commissioning and acceptance | required | All installations in this declared category | Own component integration, tests, corrections and final handover; repairs/retests remain in this node; returns and wastes retain original event links | `accepted_installation`; independently measured D |

One node owns the complete installer responsibility. There are no artificial phase-transfer exchanges. Conditional cards expand into zero, one or multiple actual exchanges only after activity/custody evidence establishes presence or absence; missing records cannot be zero-filled. Quantities below share one actual job/configuration, temporal scope and positive D.

### Process: Intruder alarm integration, commissioning and acceptance (`install_accept`)

#### Inputs

##### Product flows

###### Supplied control panel assembly (`control_panel`)

The actual factory-supplied controller, enclosure and transformer for normally-closed zones and separate global tamper enter before site integration. Preserve exact model and included parts. Matching-SKU net mass and supply-inclusion evidence is required before a quantity range can be supported.

- Selected flow: Supplied control panel assembly
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net panel mass / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### Compatible burglar alarm keypad (`alarm_keypad`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views.

- Selected flow: Compatible burglar alarm keypad
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net mass for each device SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### Compatible magnetic opening contact (`magnetic_contact`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views.

- Selected flow: Compatible magnetic opening contact
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net mass for each device SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### Compatible passive infrared detector (`pir_detector`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views.

- Selected flow: Compatible passive infrared detector
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net mass for each device SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### Compatible standalone external alarm sounder (`external_sounder`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Only a separately supplied standalone sounder; do not duplicate a complete sounder/strobe assembly.

- Selected flow: Compatible standalone external alarm sounder
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net mass for each device SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### Compatible standalone external alarm strobe (`external_strobe`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Only a separately supplied standalone strobe; do not duplicate a complete sounder/strobe assembly.

- Selected flow: Compatible standalone external alarm strobe
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net mass for each device SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### Compatible complete external sounder-strobe assembly (`external_sounder_strobe_assembly`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Alternative to the separately supplied sounder/strobe cards when supplied as one actual factory assembly.

- Selected flow: Compatible complete external sounder-strobe assembly
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net mass for each device SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`

###### Compatible internal alarm loudspeaker (`internal_loudspeaker`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views.

- Selected flow: Compatible internal alarm loudspeaker
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable supplied net mass for each device SKU / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `texecom-veritas-installation`


###### Separately supplied control-panel standby battery (`permanent_batteries_panel_standby_battery`)

one actual panel standby battery model/chemistry/SKU; complete battery product. This is a conditional independent object supported within the original permanent_batteries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record each actual rechargeable standby battery in the panel and any self-activating sounder, including chemistry, model, capacity and supply inclusion. Installed batteries are permanent product parts. Chemistry-specific SKU mass and inclusion evidence is needed; capacity alone proves neither mass nor lifetime.

- Selected flow: Separately supplied control-panel standby battery
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_permanent_batteries_panel_standby_battery_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied self-activating sounder standby battery (`permanent_batteries_sounder_standby_battery`)

one actual separately supplied SAB battery model/chemistry/SKU; complete battery product. This is a conditional independent object supported within the original permanent_batteries scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record each actual rechargeable standby battery in the panel and any self-activating sounder, including chemistry, model, capacity and supply inclusion. Installed batteries are permanent product parts. Chemistry-specific SKU mass and inclusion evidence is needed; capacity alone proves neither mass nor lifetime.

- Selected flow: Separately supplied self-activating sounder standby battery
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_permanent_batteries_sounder_standby_battery_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### New alarm-zone cable (`alarm_cable_zone_cable`)

One actual independently identified new alarm-zone cable. This is a conditional independent object supported within the original alarm_cable scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual zone, tamper, keypad and sounder cable SKUs and any installer-supplied mains feeder by segment, conductor and insulation. Existing upstream wiring is readiness. Actual measured lengths and matching linear-mass factors or weighing are needed; design cable limits do not set an inventory range.

- Selected flow: New alarm-zone cable
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_alarm_cable_zone_cable_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### New global-tamper cable (`alarm_cable_tamper_cable`)

One actual independently identified new global-tamper cable. This is a conditional independent object supported within the original alarm_cable scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual zone, tamper, keypad and sounder cable SKUs and any installer-supplied mains feeder by segment, conductor and insulation. Existing upstream wiring is readiness. Actual measured lengths and matching linear-mass factors or weighing are needed; design cable limits do not set an inventory range.

- Selected flow: New global-tamper cable
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_alarm_cable_tamper_cable_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### New keypad-network cable (`alarm_cable_keypad_cable`)

One actual independently identified new keypad-network cable. This is a conditional independent object supported within the original alarm_cable scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual zone, tamper, keypad and sounder cable SKUs and any installer-supplied mains feeder by segment, conductor and insulation. Existing upstream wiring is readiness. Actual measured lengths and matching linear-mass factors or weighing are needed; design cable limits do not set an inventory range.

- Selected flow: New keypad-network cable
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_alarm_cable_keypad_cable_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### New sounder connection cable (`alarm_cable_sounder_cable`)

One actual independently identified new sounder connection cable. This is a conditional independent object supported within the original alarm_cable scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual zone, tamper, keypad and sounder cable SKUs and any installer-supplied mains feeder by segment, conductor and insulation. Existing upstream wiring is readiness. Actual measured lengths and matching linear-mass factors or weighing are needed; design cable limits do not set an inventory range.

- Selected flow: New sounder connection cable
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_alarm_cable_sounder_cable_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Installer-supplied control-panel mains feeder cable (`alarm_cable_mains_feeder`)

One actual independently identified installer-supplied control-panel mains feeder cable. This is a conditional independent object supported within the original alarm_cable scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual zone, tamper, keypad and sounder cable SKUs and any installer-supplied mains feeder by segment, conductor and insulation. Existing upstream wiring is readiness. Actual measured lengths and matching linear-mass factors or weighing are needed; design cable limits do not set an inventory range.

- Selected flow: Installer-supplied control-panel mains feeder cable
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_alarm_cable_mains_feeder_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Separately supplied alarm-device mounting fitting (`fixings_and_containment_mounting_fitting`)

One actual independently identified separately supplied alarm-device mounting fitting. This is a conditional independent object supported within the original fixings_and_containment scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual mounting fittings, containment, glands, labels and accessories not already included in panel/device packets. Keep material and SKU distinctions. Actual issues, installed quantities, matching mass and upstream inclusion records are needed.

- Selected flow: Separately supplied alarm-device mounting fitting
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_fixings_and_containment_mounting_fitting_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied alarm cable containment product (`fixings_and_containment_cable_containment`)

One actual independently identified separately supplied alarm cable containment product. This is a conditional independent object supported within the original fixings_and_containment scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual mounting fittings, containment, glands, labels and accessories not already included in panel/device packets. Keep material and SKU distinctions. Actual issues, installed quantities, matching mass and upstream inclusion records are needed.

- Selected flow: Separately supplied alarm cable containment product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_fixings_and_containment_cable_containment_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied alarm cable gland (`fixings_and_containment_cable_gland`)

One actual independently identified separately supplied alarm cable gland. This is a conditional independent object supported within the original fixings_and_containment scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual mounting fittings, containment, glands, labels and accessories not already included in panel/device packets. Keep material and SKU distinctions. Actual issues, installed quantities, matching mass and upstream inclusion records are needed.

- Selected flow: Separately supplied alarm cable gland
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_fixings_and_containment_cable_gland_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied alarm identification label (`fixings_and_containment_identification_label`)

One actual independently identified separately supplied alarm identification label. This is a conditional independent object supported within the original fixings_and_containment scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual mounting fittings, containment, glands, labels and accessories not already included in panel/device packets. Keep material and SKU distinctions. Actual issues, installed quantities, matching mass and upstream inclusion records are needed.

- Selected flow: Separately supplied alarm identification label
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_fixings_and_containment_identification_label_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.



###### Owned alarm-installation hand tool lifecycle share (`owned_equipment_attribution_hand_tool`)

One actual independently identified owned alarm-installation hand tool lifecycle share. This is a conditional independent object supported within the original owned_equipment_attribution scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual hand/powered tool, external charger, electrical tester and access asset needs manufacturer/model/serial identity. Include all jobs/nodes and periods drawing from the same resource-life packet. Resource-life activity, other consumers and remaining-use evidence are needed; do not invent a lifetime range.

- Selected flow: Owned alarm-installation hand tool lifecycle share
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Owned powered alarm-installation tool lifecycle share (`owned_equipment_attribution_powered_tool`)

One actual independently identified owned powered alarm-installation tool lifecycle share. This is a conditional independent object supported within the original owned_equipment_attribution scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual hand/powered tool, external charger, electrical tester and access asset needs manufacturer/model/serial identity. Include all jobs/nodes and periods drawing from the same resource-life packet. Resource-life activity, other consumers and remaining-use evidence are needed; do not invent a lifetime range.

- Selected flow: Owned powered alarm-installation tool lifecycle share
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Owned electrical tester lifecycle share (`owned_equipment_attribution_electrical_tester`)

One actual independently identified owned electrical tester lifecycle share. This is a conditional independent object supported within the original owned_equipment_attribution scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual hand/powered tool, external charger, electrical tester and access asset needs manufacturer/model/serial identity. Include all jobs/nodes and periods drawing from the same resource-life packet. Resource-life activity, other consumers and remaining-use evidence are needed; do not invent a lifetime range.

- Selected flow: Owned electrical tester lifecycle share
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Owned external tool charger lifecycle share (`owned_equipment_attribution_external_charger`)

One actual independently identified owned external tool charger lifecycle share. This is a conditional independent object supported within the original owned_equipment_attribution scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual hand/powered tool, external charger, electrical tester and access asset needs manufacturer/model/serial identity. Include all jobs/nodes and periods drawing from the same resource-life packet. Resource-life activity, other consumers and remaining-use evidence are needed; do not invent a lifetime range.

- Selected flow: Owned external tool charger lifecycle share
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Owned work-access asset lifecycle share (`owned_equipment_attribution_access_asset`)

One actual independently identified owned work-access asset lifecycle share. This is a conditional independent object supported within the original owned_equipment_attribution scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual hand/powered tool, external charger, electrical tester and access asset needs manufacturer/model/serial identity. Include all jobs/nodes and periods drawing from the same resource-life packet. Resource-life activity, other consumers and remaining-use evidence are needed; do not invent a lifetime range.

- Selected flow: Owned work-access asset lifecycle share
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### External installation electricity (`installation_electricity`)

Measure externally supplied tool, charger and test electricity and commissioning demand before handover, with provider, voltage, site and meter boundary. Keep Energy / kWh. Actual meter/activity records and compatible supply evidence are required. Exact Energy support remains unresolved; power, battery capacity and NCV are not substitutes.

- Selected flow: External installation electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable external meter energy in kWh / D
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

###### Completed contracted alarm-installation transport event (`hired_support_service_transport_event`)

One actual independently identified completed contracted alarm-installation transport event. This is a conditional independent object supported within the original hired_support_service scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each genuine whole contracted transport, access, testing or support event by provider and configuration. Provider equipment lifecycle stays in its service packet; verify energy inclusions. Hourly hire requires reviewed Duration support. Actual contract reference unit, event count, activity and inclusion evidence are required before any quantity range.

- Selected flow: Completed contracted alarm-installation transport event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Completed contracted alarm-installation access event (`hired_support_service_access_event`)

One actual independently identified completed contracted alarm-installation access event. This is a conditional independent object supported within the original hired_support_service scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each genuine whole contracted transport, access, testing or support event by provider and configuration. Provider equipment lifecycle stays in its service packet; verify energy inclusions. Hourly hire requires reviewed Duration support. Actual contract reference unit, event count, activity and inclusion evidence are required before any quantity range.

- Selected flow: Completed contracted alarm-installation access event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Completed contracted alarm commissioning test event (`hired_support_service_test_event`)

One actual independently identified completed contracted alarm commissioning test event. This is a conditional independent object supported within the original hired_support_service scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each genuine whole contracted transport, access, testing or support event by provider and configuration. Provider equipment lifecycle stays in its service packet; verify energy inclusions. Hourly hire requires reviewed Duration support. Actual contract reference unit, event count, activity and inclusion evidence are required before any quantity range.

- Selected flow: Completed contracted alarm commissioning test event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

No exchange of this kind is specified for this route; actual evidence of one requires scope review.

##### Elementary flows

No exchange of this kind is specified for this route; actual evidence of one requires scope review.

#### Outputs

##### Product flows

###### Usable complete control-panel assembly returned outward (`unused_product_return_controller_return`)

One actual independently identified usable complete control-panel assembly returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable complete control-panel assembly returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_controller_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable keypad returned outward (`unused_product_return_keypad_return`)

One actual independently identified usable keypad returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable keypad returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_keypad_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable magnetic contact returned outward (`unused_product_return_contact_return`)

One actual independently identified usable magnetic contact returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable magnetic contact returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_contact_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable PIR detector returned outward (`unused_product_return_pir_return`)

One actual independently identified usable pir detector returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable PIR detector returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_pir_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable standalone sounder returned outward (`unused_product_return_sounder_return`)

One actual independently identified usable standalone sounder returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable standalone sounder returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_sounder_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable standalone strobe returned outward (`unused_product_return_strobe_return`)

One actual independently identified usable standalone strobe returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable standalone strobe returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_strobe_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable complete sounder-strobe assembly returned outward (`unused_product_return_sounder_strobe_return`)

One actual independently identified usable complete sounder-strobe assembly returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable complete sounder-strobe assembly returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_sounder_strobe_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable internal loudspeaker returned outward (`unused_product_return_speaker_return`)

One actual independently identified usable internal loudspeaker returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable internal loudspeaker returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_speaker_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable separately supplied standby battery returned outward (`unused_product_return_battery_return`)

One actual independently identified usable separately supplied standby battery returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable separately supplied standby battery returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_battery_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable unchanged alarm cable returned outward (`unused_product_return_cable_return`)

One actual independently identified usable unchanged alarm cable returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence.

- Selected flow: Usable unchanged alarm cable returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_cable_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Accepted complete hardwired normally-closed-zone burglar alarm installation and commissioning (`accepted_installation`)

Count the actual complete accepted same-configuration intrusion installation at signed installer handover. Tests/components/progress cannot substitute for complete output. All corrections and required retests precede acceptance. Actual acceptance and configuration-equivalence evidence establish the counted output; no universal operating-life range is inferred.

- Selected flow: Accepted complete hardwired normally-closed-zone burglar alarm installation and commissioning
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Sources: `texecom-veritas-installation`

##### Waste flows

###### Discarded alarm cable offcut (`installation_waste_cable_offcut`)

One actual independently identified discarded alarm cable offcut. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Selected flow: Discarded alarm cable offcut
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_cable_offcut_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed complete control-panel assembly (`installation_waste_failed_control_panel`)

One actual independently identified discarded failed complete control-panel assembly. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Selected flow: Discarded failed complete control-panel assembly
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_control_panel_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed keypad (`installation_waste_failed_keypad`)

One actual independently identified discarded failed keypad. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Selected flow: Discarded failed keypad
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_keypad_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed alarm detector (`installation_waste_failed_detector`)

One actual independently identified discarded failed alarm detector. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Selected flow: Discarded failed alarm detector
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_detector_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed standalone sounder (`installation_waste_failed_sounder`)

One actual independently identified discarded failed standalone sounder. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Selected flow: Discarded failed standalone sounder
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_sounder_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed standalone strobe (`installation_waste_failed_strobe`)

One actual independently identified discarded failed standalone strobe. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Selected flow: Discarded failed standalone strobe
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_strobe_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed complete sounder-strobe assembly (`installation_waste_failed_sounder_strobe`)

One actual independently identified discarded failed complete sounder-strobe assembly. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Selected flow: Discarded failed complete sounder-strobe assembly
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_sounder_strobe_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded separately supplied standby battery (`installation_waste_failed_battery`)

One actual independently identified discarded separately supplied standby battery. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established.

- Selected flow: Discarded separately supplied standby battery
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_battery_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_jobs | install_accept | Assume no intended co-product. Keep original job failures, additional components, labour activity, tests and retests with that job. Link every actual return or waste/recovery exit to its originating event and receiver; give no avoided-production credit and do not erase rejected work. |  |
| a_shared | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | For resource r and job j, a_rj = A_rj / sum(A_rk), with k covering every benefiting job/node over the same complete resource-life packet. Use one evidenced causal physical activity basis; require a positive total and sum(a_rj) = 1. Record equipment identity, consuming nodes, service periods, activity method and ownership. Do not assume equivalent output counts or a generic tool lifetime. |  |
| a_quantity | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution | Attributed asset quantity = a_rj / D Item(s); attributed lifecycle burden = B_r * a_rj / D. D is actual accepted same-configuration installation count. Keep B_r, physical activity and installation count independently observed. Remaining-life uncertainty or missing consumers prevents complete attribution. |  |
| a_periods | all inventory rows | Index procurement/manufacture, each service/reporting period, maintenance, replacement and retirement/termination. Link inputs, assets, outputs and correction/return events to dated job and period. Record each period-specific attribution decision and its evidence. Replacements are actual event packets, not automatically a whole asset per job. Reconcile each resource and period total once across all consumers and retain unresolved future-use/termination evidence. |  |
| a_hire | hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service; installation_electricity | Use actual provider service references and inclusion ledger. Do not add provider capital manufacture separately or repeat fuel/electricity already in the purchased service. A genuinely whole contracted event may be counted; an hourly contract needs actual Duration support and review. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules


Reconcile every actual field-device SKU with the approved accepted-system BOM, separately supplied accessories and replacements used in correction. Device cards are conditional alternatives, not a mandatory kit. Batteries remain in their existing separate card. Actual combined devices and their included components cannot both introduce purchase burdens; keep actual measured SKU mass or evidenced count-to-mass conversion, without a mixed equipment total or a universal devices-per-system assumption.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `install_accept` | accepted_installation | acceptance record | job id; site; panel model; zone/tamper schedule; BOM; mains interface; battery; programming; test results; corrections/retests; normal-state restoration; dates; customer signature; accepted count D | Inspect each installation design and competent signed test/handover record; independently count complete accepted same-configuration installations; Aggregation: per reference flow; retain actual positive D and raw acceptance events before normalization | Item(s) | Every job and acceptance/retest event | Actual receipt-to-handover dates including corrective work | Actual premises and declared configuration | per reference flow | Signed acceptance; competent tests; rejected/unfinished exclusion; configuration-equivalence evidence |
| `cp_materials` | `install_accept` | control_panel; alarm_keypad; magnetic_contact; pir_detector; external_sounder; external_strobe; external_sounder_strobe_assembly; internal_loudspeaker; permanent_batteries; alarm_cable; fixings_and_containment; incoming_packaging | material custody record | job; shipment; SKU; material/state; supply boundary; included accessories/packaging/delivery; net mass; counts/lengths; conversion factors; stock; installed/return/waste amounts; original event; receiver; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Calibrated net weighing or traceable matching-SKU count/length mass conversion; inspect supplier inclusion and event-linked custody records; Aggregation: per reference flow; sum attributable measured numerators for each matching SKU and divide by D Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity is the named alias of this CP independent_physical_quantity keyed by atomic_flow_row_id and governed by atomic_child_normalization; it is neither another observation nor a copy of the parent total. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg | Every shipment, issue and custody change | All installation dates and relevant stock opening/closing dates | Actual job, supplier packet and material pool | per reference flow | Calibration; matching factor provenance; supply inclusion ledger; balance residual and tolerance |
| `cp_energy` | `install_accept` | installation_electricity | meter and activity record | job; provider; voltage; meter boundary/id; start/end kWh; tool/charger/test/commissioning activity; times; all shared consumers; inclusion ledger | Read meters for actual external supply before handover; attribute shared measured energy by recorded causal activity and inspect purchased service inclusions; Aggregation: per reference flow; attributable actual kWh divided by D | kWh | Every metered interval and activity | Actual pre-handover intervals across all contributing dates | Actual premises and external charging site if used | per reference flow | Meter accuracy; interval completeness; shared activity reconciliation; no Ah/power/duration substitution |
| `cp_services` | `install_accept` | owned_equipment_attribution; hired_support_service | resource and contract record | asset manufacturer/model/serial; owner; provider; contract reference/unit; genuine whole event count; all consumer jobs/nodes; physical activity; reporting periods; manufacture/service/maintenance/replacement/retirement packets; B_r; remaining use; energy inclusion; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Inspect serial-specific lifecycle records, complete consumer activity and actual provider invoices; separate owned assets from provider-owned services and document period decisions; Aggregation: per reference flow; actual asset share a_rj or genuine attributed whole event count divided by D Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity is the named alias of this CP independent_physical_quantity keyed by atomic_flow_row_id and governed by atomic_child_normalization; it is neither another observation nor a copy of the parent total. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | Item(s) | Every asset use, contract event, replacement and attribution-period closure | Full resource-life packet and each actual service/reporting period; unresolved remaining use disclosed | All benefiting jobs/nodes and periods, including other premises | per reference flow | Positive complete activity total; sum(a_rj) = 1; ownership/inclusion ledger; actual replacement/termination evidence |
| `cp_releases` | `install_accept` | unused_product_return; installation_waste; airborne_particulate | return waste and release record | original job/event; SKU/material/species; state; hazard; particle size; air compartment; recipient; ticket; net mass; drilling/capture activity; retained/captured/emitted quantities; method; uncertainty; residual; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Weigh returns and separate waste streams with receiver tickets; use measured or justified species/size/compartment release evidence for actual work; reconcile material custody without inferring emissions from residuals; Aggregation: per reference flow; attributable quantity of each exact return/waste/release divided by D Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity is the named alias of this CP independent_physical_quantity keyed by atomic_flow_row_id and governed by atomic_child_normalization; it is neither another observation nor a copy of the parent total. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg | Every return, waste transfer and relevant release event | Actual installation and correction/retest dates through handover | Actual job and named receiving site/air compartment | per reference flow | Receiver confirmation; calibrated mass; release method and uncertainty; capture distinction; closure gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_actual` | all inventory rows | q_i = N_i / D; N_i is the independently retained attributable actual numerator for the individual exchange; D is independently counted accepted same-configuration installations. Never backsolve N_i from an expected reference output. | N_i; D; cp_acceptance; cp_materials; cp_energy; cp_services; cp_releases | q_i |  |
| `c_custody` | material custody pools | opening stock + receipts = installed retained material + closing stock + usable returns + actual waste + identified releases + residual. Reconcile each exact source pool and report residual/tolerance; a mixed mass diagnostic is not one flow or service mass. | cp_materials; cp_releases; source pool; measured quantities | custody reconciliation |  |
| `c_resource` | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution | a_rj = A_rj / sum(A_rk); attributed asset quantity = a_rj / D; attributed burden = B_r * a_rj / D. Use all consumers of the same lifecycle packet, positive total activity and sum(a_rj) = 1. | A_rj; A_rk; B_r; D; cp_services | asset share and lifecycle burden |  |
| atomic_child_normalization | permanent_batteries_panel_standby_battery; permanent_batteries_sounder_standby_battery; alarm_cable_zone_cable; alarm_cable_tamper_cable; alarm_cable_keypad_cable; alarm_cable_sounder_cable; alarm_cable_mains_feeder; fixings_and_containment_mounting_fitting; fixings_and_containment_cable_containment; fixings_and_containment_cable_gland; fixings_and_containment_identification_label; owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; unused_product_return_controller_return; unused_product_return_keypad_return; unused_product_return_contact_return; unused_product_return_pir_return; unused_product_return_sounder_return; unused_product_return_strobe_return; unused_product_return_sounder_strobe_return; unused_product_return_speaker_return; unused_product_return_battery_return; unused_product_return_cable_return; installation_waste_cable_offcut; installation_waste_failed_control_panel; installation_waste_failed_keypad; installation_waste_failed_detector; installation_waste_failed_sounder; installation_waste_failed_strobe; installation_waste_failed_sounder_strobe; installation_waste_failed_battery | For each atomic_flow_row_id retain its independent physical numerator independent_physical_quantity. actual_<row_id>_quantity is its named alias only, never a parent family total. Material inputs use the original CP stock gross/net and outward-return convention after independent weighing or same-SKU conversion and reconciliation; internal transfers use actual paired custody quantity; usable exits and wastes use their independently measured actual fate quantities. Owned-asset child quantity is the original complete-life asset equivalent a_rj=A_rj/sum(A_rk), with every consumer and positive complete denominator; purchased-service child quantity uses only actual completed events whose real contract defines Item(s), with the original attribution, never hours or price converted into count. atomic_child_intensity = independent_physical_quantity / D, where D is the original independently accepted complete same-configuration installation count from cp_acceptance; D=0 blocks normalization, and denominator/allocation cannot change. Standby-battery kg uses actual matching-model mass, not Ah; a battery already inside a charged complete device is not purchased again. | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; D; cp_acceptance; cp_materials; cp_services; cp_releases | atomic_child_intensity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | Retain exact model/SKU/state/provider/receiver or species/size/medium; verify concrete flow and compatible support chains before final binding. | Supplier and receiver records; verified identity support |
| `dq_measurement` | all measured quantities | Retain calibration, factor matching, raw actual numerators, units, coverage and uncertainty. No universal component weight, waste factor, tool life or service energy range is established. | Meter/scale records; conversion provenance; matching packet |
| `dq_complete` | all collection protocols | Cover all contributing dates, sites, stock changes, failures, corrections, returns and consumers. Report unknown remaining use and missing records; never zero-fill an absent record. | Event ledger; period/consumer reconciliation; acceptance linkage |
| `dq_range` | all inventory rows | Quantity guidance needs actual matching component/packaging, energy/activity/contract, return/reject receiver and species-release evidence; supplier point specifications apply only to matching models. | Primary measured records and applicability assessment |
| atomic_alarm_cable | install_accept; cp_materials | Former alarm_cable is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate actual zone, tamper, keypad and sounder cable SKUs and any installer-supplied mains feeder by segment, conductor and insulation. Existing upstream wiring is readiness. Actual measured lengths and matching linear-mass factors or weighing are needed; design cable limits do not set an inventory range. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_materials; actual_child_register; parent_ledger_id |
| atomic_fixings_and_containment | install_accept; cp_materials | Former fixings_and_containment is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand actual mounting fittings, containment, glands, labels and accessories not already included in panel/device packets. Keep material and SKU distinctions. Actual issues, installed quantities, matching mass and upstream inclusion records are needed. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_materials; actual_child_register; parent_ledger_id |
| atomic_incoming_packaging | install_accept; cp_materials | Former incoming_packaging is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate received packaging by shipment, material and actual packaging SKU. Maintain its physical input and waste/return path even where upstream supply already owns manufacture. Shipment weighing and supplier packaging inclusions are required; no duplicate manufacturing burden is permitted. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_materials; actual_child_register; parent_ledger_id |
| atomic_owned_equipment_attribution | install_accept; cp_services | Former owned_equipment_attribution is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Each actual hand/powered tool, external charger, electrical tester and access asset needs manufacturer/model/serial identity. Include all jobs/nodes and periods drawing from the same resource-life packet. Resource-life activity, other consumers and remaining-use evidence are needed; do not invent a lifetime range. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_services; actual_child_register; parent_ledger_id |
| atomic_hired_support_service | install_accept; cp_services | Former hired_support_service is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand each genuine whole contracted transport, access, testing or support event by provider and configuration. Provider equipment lifecycle stays in its service packet; verify energy inclusions. Hourly hire requires reviewed Duration support. Actual contract reference unit, event count, activity and inclusion evidence are required before any quantity range. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_services; actual_child_register; parent_ledger_id |
| atomic_unused_product_return | install_accept; cp_releases | Former unused_product_return is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Each actual unchanged usable component/material returned out of installer custody retains its original SKU, supply identity, receipt/return event and receiver. No avoided-production credit follows. Event-linked weighed returns and receiver confirmation are needed; missing return records are not proof of absence. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_releases; actual_child_register; parent_ledger_id |
| atomic_installation_waste | install_accept; cp_releases | Former installation_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand actual packaging, offcuts and failed removed components by material, physical state, hazard and authorised recipient, including electronics/battery rejects when present. Link issue and rework events to install_accept; mixed waste is not a concrete identity. Waste tickets, state/hazard and destination evidence are needed; no universal waste fraction is established. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_releases; actual_child_register; parent_ledger_id |
| atomic_airborne_particulate | install_accept; cp_releases | Former airborne_particulate is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record only actually released identified species and particle-size fraction entering a specified air compartment. Distinguish captured dust sent to waste and substrate retained in place. Actual drilling/capture activity, species/size/medium and measured or justified release evidence are needed. Never assign all unexplained mass to dust. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_releases; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | install_accept | Legacy role keys remain only as non-exchange stock, activity or closure ledger keys in the original CP. All current quantity-bearing exchanges use named child cards and independent raw quantities; atomic_ requirements are mandatory refinement gates for the remaining actual roster, never mixed exchanges. Applies-to links in measurement, boundary, allocation, calculation, quality and validation tables migrate to these child cards/requirements. Original raw fields and physical calculation operands remain without being added again as parent exchanges. Mapping: permanent_batteries => permanent_batteries_panel_standby_battery, permanent_batteries_sounder_standby_battery; alarm_cable => alarm_cable_zone_cable, alarm_cable_tamper_cable, alarm_cable_keypad_cable, alarm_cable_sounder_cable, alarm_cable_mains_feeder, atomic_alarm_cable; fixings_and_containment => fixings_and_containment_mounting_fitting, fixings_and_containment_cable_containment, fixings_and_containment_cable_gland, fixings_and_containment_identification_label, atomic_fixings_and_containment; incoming_packaging => atomic_incoming_packaging; owned_equipment_attribution => owned_equipment_attribution_hand_tool, owned_equipment_attribution_powered_tool, owned_equipment_attribution_electrical_tester, owned_equipment_attribution_external_charger, owned_equipment_attribution_access_asset, atomic_owned_equipment_attribution; hired_support_service => hired_support_service_transport_event, hired_support_service_access_event, hired_support_service_test_event, atomic_hired_support_service; unused_product_return => unused_product_return_controller_return, unused_product_return_keypad_return, unused_product_return_contact_return, unused_product_return_pir_return, unused_product_return_sounder_return, unused_product_return_strobe_return, unused_product_return_sounder_strobe_return, unused_product_return_speaker_return, unused_product_return_battery_return, unused_product_return_cable_return, atomic_unused_product_return; installation_waste => installation_waste_cable_offcut, installation_waste_failed_control_panel, installation_waste_failed_keypad, installation_waste_failed_detector, installation_waste_failed_sounder, installation_waste_failed_strobe, installation_waste_failed_sounder_strobe, installation_waste_failed_battery, atomic_installation_waste; airborne_particulate => atomic_airborne_particulate | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | install_accept | The following routes each child to its original role, node, unique unit and method CP. Independently apply that original role measurement, stock, source/fate, rework, share, conversion and normalization method to each actual identity/state child. Retain the original helper/selector role parameter as legacy_parent_role, but supply quantity operands from this child independent records; ROW_UNIT(child_row_id) is the explicit unit below. Reconcile stocks/transfers only within the same identity/state and compatible native unit, grouping different materials, media, states and units separately. Parent totals are non-exchange diagnostics, never copied as child operands or summed across unlike units. Unsupported original-helper applicability or missing actual conversion, denominator or evidence blocks finalization; field records cannot choose a new method. Original role-named formula operands remain ledger names rather than duplicate exchanges. A cross-unit legacy role executes by this mapping and actual child unit instead of inheriting a wrong fixed unit. Routing: permanent_batteries_panel_standby_battery => role=permanent_batteries, node=install_accept, property=Mass, unit=kg, CP=cp_materials; permanent_batteries_sounder_standby_battery => role=permanent_batteries, node=install_accept, property=Mass, unit=kg, CP=cp_materials; alarm_cable_zone_cable => role=alarm_cable, node=install_accept, property=Mass, unit=kg, CP=cp_materials; alarm_cable_tamper_cable => role=alarm_cable, node=install_accept, property=Mass, unit=kg, CP=cp_materials; alarm_cable_keypad_cable => role=alarm_cable, node=install_accept, property=Mass, unit=kg, CP=cp_materials; alarm_cable_sounder_cable => role=alarm_cable, node=install_accept, property=Mass, unit=kg, CP=cp_materials; alarm_cable_mains_feeder => role=alarm_cable, node=install_accept, property=Mass, unit=kg, CP=cp_materials; fixings_and_containment_mounting_fitting => role=fixings_and_containment, node=install_accept, property=Mass, unit=kg, CP=cp_materials; fixings_and_containment_cable_containment => role=fixings_and_containment, node=install_accept, property=Mass, unit=kg, CP=cp_materials; fixings_and_containment_cable_gland => role=fixings_and_containment, node=install_accept, property=Mass, unit=kg, CP=cp_materials; fixings_and_containment_identification_label => role=fixings_and_containment, node=install_accept, property=Mass, unit=kg, CP=cp_materials; owned_equipment_attribution_hand_tool => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_powered_tool => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_electrical_tester => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_external_charger => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_access_asset => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_transport_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_access_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_test_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; unused_product_return_controller_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_keypad_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_contact_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_pir_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_sounder_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_strobe_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_sounder_strobe_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_speaker_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_battery_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; unused_product_return_cable_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_cable_offcut => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_control_panel => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_keypad => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_detector => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_sounder => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_strobe => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_sounder_strobe => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_battery => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| atomic_range_noninheritance | permanent_batteries_panel_standby_battery; permanent_batteries_sounder_standby_battery; alarm_cable_zone_cable; alarm_cable_tamper_cable; alarm_cable_keypad_cable; alarm_cable_sounder_cable; alarm_cable_mains_feeder; fixings_and_containment_mounting_fitting; fixings_and_containment_cable_containment; fixings_and_containment_cable_gland; fixings_and_containment_identification_label; owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; unused_product_return_controller_return; unused_product_return_keypad_return; unused_product_return_contact_return; unused_product_return_pir_return; unused_product_return_sounder_return; unused_product_return_strobe_return; unused_product_return_sounder_strobe_return; unused_product_return_speaker_return; unused_product_return_battery_return; unused_product_return_cable_return; installation_waste_cable_offcut; installation_waste_failed_control_panel; installation_waste_failed_keypad; installation_waste_failed_detector; installation_waste_failed_sounder; installation_waste_failed_strobe; installation_waste_failed_sounder_strobe; installation_waste_failed_battery | Retired parent numerical ranges, per-exchange screening instructions and rationales are retained only in implementation audit, applying to neither new child exchanges nor parent-family sums and never proportionally allocated. Each new child has independent evidence needs for actual quantity, identity/state, measurement/conversion, uncertainty and comparable independent observations. Add its own interval only after review confirms applicability to this independent object; never validate a batch with its own maximum. Original ranges of unchanged semantically compatible atomic objects retain their original status. | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference product | Require all declared configuration and interface qualifiers, compatible BOM, normally-closed zone schedule and independent global tamper design. Manual capabilities for fire/PA or later service do not enlarge this scope. | `texecom-veritas-installation` |
| v_intrusion | install_accept | For actual occupied zones, retain detector/contact walk response, sounder/strobe operation as supplied, global tamper response, set/unset and customer-control checks. Record disabled zones, settings, faults, corrective actions, retests and restored normal state with competent test and signed handover evidence; missing or failed required tests block accepted output. | `texecom-veritas-installation` |
| v_reference | accepted_installation | Require independently counted positive D for complete accepted installations of the same justified configuration. The reference link, semantic name, Number of items support, Item(s) unit and explicit 1 Item(s) output must agree. Components, tests, progress and unfinished work cannot substitute for D. |  |
| v_custody | all material inputs and outputs | Reconcile each matching source pool through receipts, installed retention, stock, usable returns, waste and identified releases. Distinguish permanent batteries from tool assets; link reject exits to install_accept and their actual receiver. Report residuals and measurement tolerances; missing records never imply zero. |  |
| v_resource | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | Verify all consumers and periods, positive physical-activity denominator, share closure, actual replacement/termination treatment and one owner per lifecycle burden. Check delivery, packaging, hire capital and energy inclusions for duplication. Incomplete remaining-life or consumer evidence blocks final attribution. |  |
| v_identity | all inventory rows | Expand conditional cards into separate actual SKU/state/provider/receiver or species-compartment exchanges. No heterogeneous fixed UUID or generic dust identity is allowed. Verify concrete flow and support chains before final binding, with actual protocol and calculation linkage; unresolved Energy or hourly Duration support remains a gap. |  |
| v_quality | all inventory rows | Report performed and skipped checks, findings and completeness separately from fixed/unresolved identity counts and quantity-range gaps. Inconclusive measurement, unverified support or missing foreground evidence cannot be described as a complete final-binding or publication pass. |  |
| close_atomic_alarm_cable | install_accept; cp_materials | Block final foreground completion until every actual object in atomic_alarm_cable is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_fixings_and_containment | install_accept; cp_materials | Block final foreground completion until every actual object in atomic_fixings_and_containment is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_incoming_packaging | install_accept; cp_materials | Block final foreground completion until every actual object in atomic_incoming_packaging is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_owned_equipment_attribution | install_accept; cp_services | Block final foreground completion until every actual object in atomic_owned_equipment_attribution is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_hired_support_service | install_accept; cp_services | Block final foreground completion until every actual object in atomic_hired_support_service is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_unused_product_return | install_accept; cp_releases | Block final foreground completion until every actual object in atomic_unused_product_return is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_installation_waste | install_accept; cp_releases | Block final foreground completion until every actual object in atomic_installation_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_airborne_particulate | install_accept; cp_releases | Block final foreground completion until every actual object in atomic_airborne_particulate is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | Verify actual source/receipt evidence, original physical quantities/units and ownership for the same material/state/event/gate. Traceable reuse of the same signed measurement is allowed; copied parent totals, overwritten receipts and forced unknown equality are prohibited. Unexplained differences without uncertainty, actual loss or state-transition responsibility evidence block completion; verify exactly one normalization per card. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation package; secondary_dataset or background_dataset only with compatible scope, configuration and acceptance gate |
| downstream_use | process and lifecyclemodel projections of the same foreground package |
| allowed_use | Declared single-panel normally-closed-zone/global-tamper intruder installation through signed handover |
| excluded_use | Operation/monitoring/maintenance; fire-alarm equivalence; alternative technologies; whole-building equivalence; unsubstantiated long-term performance or lifetime claims |
| required_metadata | Site/time; actual model/configuration and quantity; interface/design/BOM; test/correction/acceptance; supply sources; inventories/protocols; resource owners/periods/decisions |
| required_quality_disclosure | Actual measured coverage, uncertainties and custody residuals; concrete identity/support gaps; quantity-range evidence gaps; remaining resource life and skipped checks |
| update_trigger | Changed model, route, interface, BOM or acceptance design; stronger measured quantity, attribution or identity evidence |

A candidate authoring check does not establish publication readiness or verified final exchanges. Resolve actual foreground and identity/support evidence before using a completed package as final methodology.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-explanatory-notes` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 54613 inclusion of construction-site burglar-alarm installation and exclusion of monitoring/maintenance; narrower subset scope |
| `texecom-veritas-installation` | handbook | https://texecom-live.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/02/01102935/INS034-14-Veritas-Compact_8_R8-Install_low.pdf | INS034-14, PDF pages 5–15 and 19–20: representative panel/keypad, normally-closed zones/global tamper, sounder, battery, mounting/wiring, programming/tests/correction and normal-state completion; no universal per-service quantities |
