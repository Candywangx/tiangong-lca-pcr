---
pcr_id: pcr.constructions-and-construction-services.construction-services.electrical-wiring-and-fitting-services
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Screw-terminal grounded duplex receptacle fitting installation services

## 1. Scope and Applicability

This PCR covers the first fitting of an indoor, non-electronic 15 A, 125 V grounded duplex receptacle on a single-feed circuit. The installer side-terminates prepared compatible copper conductors, fixes the fitting in an existing suitable box, fits its plate, restores the circuit under competent control and hands over a tested, accepted installation. The physical interface and signed acceptance define the service; brand alone does not define membership.

The scope excludes branch-circuit construction or extension, new boxes or panels, removal/replacement of an existing fitting, split-feed conversion, push-in connections, GFCI/AFCI and electronic or smart receptacles, fire/burglar alarms, telecommunications, appliances, and electricity consumed after handover. Drilling a substrate and extending cable are outside this selected route. Manufacturer instructions illustrate the route; the delivered model instructions and applicable jurisdiction/design determine actual compatibility and acceptance. [leviton-receptacle-installation; leviton-5320-product]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.electrical-wiring-and-fitting-services |
| classification_refs | CPC 3.0 54611; narrower |
| covered_products | First-installed grounded single-feed screw-terminal duplex receptacle fittings, with plate and documented acceptance. |
| excluded_products | The construction, replacement, connection methods, electronic devices and later-use activities excluded in section 1. |
| representative_product | Leviton 5320-family grounded duplex fitting; an example, with no universal mass, conductor gauge or installation inventory implied. |
| production_route | Receive fitting/plate; verify prepared interfaces and isolate/prove dead; prepare and side-terminate conductors; mount fitting/plate; controlled restoration; test, correct, retest and sign acceptance. |
| market_state | Complete installed fitting at signed installer handover, with the disclosed existing circuit/box/earth interfaces. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted first-installed grounded single-feed duplex receptacle fitting with plate at installer handover |
| How much | 1 Item(s) |
| How well | Exact model/rating and compatible screw-terminal copper conductor material/gauge; single-feed state; suitable existing box/circuit/earth; plate/fixing inclusions; design/jurisdiction; isolation/proof-dead and termination, earth, polarity and functional test records; correction/retest closure and signed acceptance. |
| How long or cycle | One receipt-to-acceptance job cycle, including its unsuccessful attempts and retests. Link the job dates to the acquisition/manufacture, service/reporting periods, maintenance/replacement and retirement/termination phases of each shared resource; no operating-year functional benefit is claimed. |
| reference_flow_link | `accepted_installation` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted first-installed grounded single-feed duplex receptacle fitting with plate at installer handover |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Model/rating; conductor material/gauge and screw compatibility; single-feed configuration; existing box/circuit/earth responsibility; supplied plate/fixings; jurisdiction/design; isolation/proof-dead record; termination/earth/polarity/functional tests; correction/retest results; installation dates; signed acceptance. |

Establish D by independently counting accepted complete installations of the same disclosed configuration before normalization; D must be positive. Component counts, tests and progress percentages cannot replace D. Split materially different configurations unless equivalence is evidenced. One counted output has no mass-equivalence formula.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | reference product; owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Use positive independently evidenced D and the same job/configuration boundary. Item(s) means a complete accepted output, an exact reusable-asset fraction or a genuine whole contracted event, as applicable. |
| mass_conversion | receptacle; plate_and_fixings_wallplate; plate_and_fixings_permanent_fixing; atomic_plate_and_fixings; atomic_incoming_packaging; unused_product_return_receptacle_return; unused_product_return_wallplate_return; unused_product_return_fixing_return; atomic_unused_product_return; installation_waste_conductor_offcut; installation_waste_failed_receptacle; installation_waste_failed_wallplate; installation_waste_failed_fixing; atomic_installation_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net weighing or traceable count/length-to-mass factors for the matching SKU. Retain the factor, unit and uncertainty; heterogeneous totals are diagnostics, not one exchange. |
| energy_preservation | installation_electricity | Energy | kWh | Retain actual supplied metered kWh and its meter/provider/voltage boundary. Energy support remains unverified; NCV, Ah, rated power and elapsed time cannot substitute for actual energy. |
| contract_reference | hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only a genuine complete bought event with its exact service definition. An hourly contract needs Duration support and review; do not invent counted events. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Suitable existing box with compatible prepared single-feed circuit, conductors and earth interface accepted as ready, plus receipt of actual fitting/plate supplies. |
| starting_condition_role | Disclosed pre-existing interface; readiness is neither a new supply nor a credit. |
| product_classification_scope | Narrower electrical fitting service within CPC 3.0 54611; no claim to all wiring or fitting technologies. |
| recursive_input_rule | For purchased same-category prior installation, identify the actual incoming state and non-overlapping upstream gate; do not recursively replay accepted installation or count it again. Unreviewed expansion requires separate scope review. |
| upstream_dataset_requirement | Match exact supplies to upstream manufacture, actual inbound delivery and packaging inclusion boundaries, assigning every burden once. |
| disclosure | Declare existing circuit/box/earth ownership and suitability, receipt and handover dates, supply inclusions, actual model instructions/design, shared resource periods and all omissions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers the first fitting of an indoor, non-electronic 15 A, 125 V grounded duplex receptacle on a single-feed circuit. The installer side-terminates prepared compatible copper conductors, fixes the fitting in an existing suitable box, fits its plate, restores the circuit under competent control and hands over a tested, accepted installation. The physical interface and signed acceptance define the service; brand alone does not define membership. The scope excludes branch-circuit construction or extension, new boxes or panels, removal/replacement of an existing fitting, split-feed conversion, push-in connections, GFCI/AFCI and electronic or smart receptacles, fire/burglar alarms, telecommunications, appliances, and electricity consumed after handover. Drilling a substrate and extending cable are outside this selected route. Manufacturer instructions illustrate the route; the delivered model instructions and applicable jurisdiction/design determine actual compatibility and acceptance. [leviton-receptacle-installation; leviton-5320-product] | `leviton-receptacle-installation`; `leviton-5320-product` |
| installation_gate | install_accept | The installer owns receipt and landed supply, receptacle/plate/permanent fixing integration, safety verification, termination, mounting, controlled restoration, tests, corrections, retests and signed handover. Prepared conductor/box construction and post-handover use are outside this gate. | `leviton-receptacle-installation`; `leviton-5320-product` |
| supply_custody | install_accept | Track physical incoming packaging even where upstream manufacture already includes it. Separate packaging burden only if excluded upstream; use the delivery/packaging inclusion ledger to prevent duplication. |  |
| resource_boundary | install_accept | Exact installer-owned tools, testers, external chargers and access assets may serve install_accept instances in other jobs and reporting periods; enumerate every consumer and phase in cp_services. Providers own hired-asset lifecycle; ledger any included foreground energy. |  |
| period_gate | install_accept | Index manufacture/acquisition, each service/reporting period, maintenance/replacement and retirement/termination separately. Link inputs, assets, accepted outputs and events to job and period; unresolved remaining-life or termination evidence prevents final attribution. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_accept | Fit, test and accept the receptacle | required | Selected first-installation scope and prepared interfaces are demonstrated. | Integrate supplied receptacle, plate and permanent fixings with prepared conductors; independently own termination, mounting, testing and acceptance. | accepted_installation |

All receipt, termination, fastening and acceptance responsibilities belong to this single integration node. Loose/incorrect terminals, wrong polarity, unsatisfactory earth or failed function are unaccepted states: identify the actual defect and original job event, correct and retest within install_accept, or record a usable return or material-specific waste exit with receiver. Downgrade or recovery requires its actual destination and evidence and is never an accepted installation. Losses remain with the original job, and unfinished or unresolved failed fittings cannot increase D. No phase-only exchange is introduced.

### Process: Fit, test and accept the receptacle (`install_accept`)

Each conditional card is an obligation to resolve zero, one or multiple actual exchanges by SKU, material/state and receiver, rather than a fixed mixed identity. Absence is accepted only with explicit activity/custody evidence. Missing records never imply zero. No universal amount bounds are established; per-card evidence needs below must be resolved for a complete data package.

#### Inputs

##### Product flows

###### Supplied grounded duplex receptacle (`receptacle`)

Actual compatible non-electronic 15 A, 125 V single-feed copper screw-terminal receptacle received before fitting; supplied device screws belong here once. Range evidence need: Matching model/SKU net supply and installed, stock, return and failure quantities are needed before any per-installation range.

- Selected flow: Supplied grounded duplex receptacle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual attributable net receptacle supply mass / D; preserve independent receipts and the materials reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `leviton-receptacle-installation`; `leviton-5320-product`

###### Separately supplied receptacle wallplate (`plate_and_fixings_wallplate`)

One actual independently identified separately supplied receptacle wallplate. This is a conditional independent object supported within the original plate_and_fixings scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each actual plate and separately supplied fixing; separate materials/SKUs and exclude hardware already included with the receptacle.

- Selected flow: Separately supplied receptacle wallplate
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_plate_and_fixings_wallplate_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied permanent receptacle fixing (`plate_and_fixings_permanent_fixing`)

One actual independently identified separately supplied permanent receptacle fixing. This is a conditional independent object supported within the original plate_and_fixings scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each actual plate and separately supplied fixing; separate materials/SKUs and exclude hardware already included with the receptacle.

- Selected flow: Separately supplied permanent receptacle fixing
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_plate_and_fixings_permanent_fixing_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.



###### Owned installation hand tool lifecycle share (`owned_equipment_attribution_hand_tool`)

One actual independently identified owned installation hand tool lifecycle share. This is a conditional independent object supported within the original owned_equipment_attribution scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each actually used hand/powered tool, tester, external charger and access asset by manufacturer/model/serial. This is the resource lifecycle share, not a permanent fitting or an assumed whole new tool.

- Selected flow: Owned installation hand tool lifecycle share
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Owned powered installation tool lifecycle share (`owned_equipment_attribution_powered_tool`)

One actual independently identified owned powered installation tool lifecycle share. This is a conditional independent object supported within the original owned_equipment_attribution scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each actually used hand/powered tool, tester, external charger and access asset by manufacturer/model/serial. This is the resource lifecycle share, not a permanent fitting or an assumed whole new tool.

- Selected flow: Owned powered installation tool lifecycle share
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

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each actually used hand/powered tool, tester, external charger and access asset by manufacturer/model/serial. This is the resource lifecycle share, not a permanent fitting or an assumed whole new tool.

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

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each actually used hand/powered tool, tester, external charger and access asset by manufacturer/model/serial. This is the resource lifecycle share, not a permanent fitting or an assumed whole new tool.

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

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each actually used hand/powered tool, tester, external charger and access asset by manufacturer/model/serial. This is the resource lifecycle share, not a permanent fitting or an assumed whole new tool.

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


###### Pre-handover supplied electricity (`installation_electricity`)

Resolve actual provider, voltage, site and meter boundary for external tool/charger/test and commissioning electricity. No later receptacle use is included. Range evidence need: Meter differences, shared activity, included test load and exact Energy support are needed; power or battery capacity cannot supply a range.

- Selected flow: Pre-handover supplied electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable metered electricity / D; maintain kWh and foreground inclusion ledger.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

###### Completed contracted installation transport event (`hired_support_service_transport_event`)

One actual independently identified completed contracted installation transport event. This is a conditional independent object supported within the original hired_support_service scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each genuine bought transport/access/test/support event and service configuration. The provider owns equipment lifecycle; identify any included foreground energy. An hourly hire awaits Duration support and review.

- Selected flow: Completed contracted installation transport event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Completed contracted installation access event (`hired_support_service_access_event`)

One actual independently identified completed contracted installation access event. This is a conditional independent object supported within the original hired_support_service scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each genuine bought transport/access/test/support event and service configuration. The provider owns equipment lifecycle; identify any included foreground energy. An hourly hire awaits Duration support and review.

- Selected flow: Completed contracted installation access event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator D for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by D once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by D once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Completed contracted pre-handover test event (`hired_support_service_test_event`)

One actual independently identified completed contracted pre-handover test event. This is a conditional independent object supported within the original hired_support_service scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each genuine bought transport/access/test/support event and service configuration. The provider owns equipment lifecycle; identify any included foreground energy. An hourly hire awaits Duration support and review.

- Selected flow: Completed contracted pre-handover test event
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

No incoming waste is part of this fitting route.

##### Elementary flows

No default direct resource extraction is specified.

#### Outputs

##### Product flows

###### Usable unchanged receptacle returned outward (`unused_product_return_receptacle_return`)

One actual independently identified usable unchanged receptacle returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each usable component/material leaving installer custody without transformation; preserve SKU and original supply identity, receipt and return event, condition and receiver.

- Selected flow: Usable unchanged receptacle returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_receptacle_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable unchanged wallplate returned outward (`unused_product_return_wallplate_return`)

One actual independently identified usable unchanged wallplate returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each usable component/material leaving installer custody without transformation; preserve SKU and original supply identity, receipt and return event, condition and receiver.

- Selected flow: Usable unchanged wallplate returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_wallplate_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable unchanged permanent fixing returned outward (`unused_product_return_fixing_return`)

One actual independently identified usable unchanged permanent fixing returned outward. This is a conditional independent object supported within the original unused_product_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each usable component/material leaving installer custody without transformation; preserve SKU and original supply identity, receipt and return event, condition and receiver.

- Selected flow: Usable unchanged permanent fixing returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_unused_product_return_fixing_return_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Accepted first-installed grounded single-feed duplex receptacle fitting with plate at installer handover (`accepted_installation`)

Only completed, tested and signed installations of the declared configuration enter D. Keep each correction/retest linked to the original install_accept event.

- Selected flow: Accepted first-installed grounded single-feed duplex receptacle fitting with plate at installer handover
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Unit group: Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: 1 Item(s)
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `leviton-receptacle-installation`; `leviton-5320-product`

##### Waste flows

###### Discarded conductor offcut (`installation_waste_conductor_offcut`)

One actual independently identified discarded conductor offcut. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve separate packaging, conductor offcut and removed failed-component waste by material/state/hazard and authorised receiver. Retain original issue/rework event. Tool electronics/battery residue belongs here only where the owned resource lifecycle actually owns its disposal event; electronic receptacles are excluded.

- Selected flow: Discarded conductor offcut
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_conductor_offcut_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed complete receptacle (`installation_waste_failed_receptacle`)

One actual independently identified discarded failed complete receptacle. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve separate packaging, conductor offcut and removed failed-component waste by material/state/hazard and authorised receiver. Retain original issue/rework event. Tool electronics/battery residue belongs here only where the owned resource lifecycle actually owns its disposal event; electronic receptacles are excluded.

- Selected flow: Discarded failed complete receptacle
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_receptacle_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed wallplate (`installation_waste_failed_wallplate`)

One actual independently identified discarded failed wallplate. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve separate packaging, conductor offcut and removed failed-component waste by material/state/hazard and authorised receiver. Retain original issue/rework event. Tool electronics/battery residue belongs here only where the owned resource lifecycle actually owns its disposal event; electronic receptacles are excluded.

- Selected flow: Discarded failed wallplate
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_wallplate_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded failed permanent fixing (`installation_waste_failed_fixing`)

One actual independently identified discarded failed permanent fixing. This is a conditional independent object supported within the original installation_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve separate packaging, conductor offcut and removed failed-component waste by material/state/hazard and authorised receiver. Retain original issue/rework event. Tool electronics/battery residue belongs here only where the owned resource lifecycle actually owns its disposal event; electronic receptacles are excluded.

- Selected flow: Discarded failed permanent fixing
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_installation_waste_failed_fixing_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator D; D=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_releases`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows

No universal emission is inferred from conductor preparation or an unexplained balance residual. If an actual direct release is evidenced, identify species/particle size and receiving medium, measured or justified method, captured versus emitted fraction and its original job in cp_releases. Such evidence requires scope/identity review before adding a concrete exchange; generic dust or VOC cannot be an invented pollutant UUID.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reject_burden | install_accept | There is no intended co-product. Retain unsuccessful work, damaged inputs, corrective work and retesting with the original accepted job. Rework stays in install_accept; usable return and actual waste/recovery/discard exit need event, state and recipient. Unresolved rejects do not enter accepted output and returns receive no avoided-production credit. |  |
| resource_share | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; atomic_hired_support_service | For exact resource r and job j, a_rj = A_rj / sum(A_rk), with every benefiting job k across the same resource lifecycle packet and a common causal physical activity basis. Require positive complete denominator and sum(a_rj) = 1. Attribute asset quantity a_rj / D Item(s) and burden B_r * a_rj / D. Record period-specific shares and their evidence; output-count allocation is inappropriate where use differs. Never invent lifetime or omit other jobs. |  |
| phase_reconciliation | install_accept | Tie resource manufacture/acquisition, every service/reporting period, maintenance/replacement and retirement/termination to identifiable packets, jobs and dates. Replacement has its own actual event; remaining-use uncertainty is explicit. Reconcile phase totals once and carry each packet only once; provider asset manufacture is not an additional installer input when a hired service includes it. Job-specific losses retain their job owner. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_accept | accepted installation and corrections | job_acceptance | job/configuration/model/rating; BOM; circuit/box/earth/design; isolation/proof-dead; termination/earth/polarity/function test results; failure/correction/retest events; dates; signature; independently counted D | Inspect actual scope and compatible interfaces; retain competent test and signed acceptance records and reconcile complete accepted jobs separately from components, attempts and rejects. Establish positive D from independent accepted complete installation count. | Item(s) | every job and retest | receipt through signed acceptance | declared indoor fitting site/configuration | per reference flow | signed tests; exclusion reconciliation; dates and configuration coverage |
| cp_materials | install_accept | supplies, packaging and usable returns | material_custody | shipment/job/date; SKU/material/state; net mass; counts/lengths and matching factors; installed/stock/return/waste; receipt/return receiver; upstream manufacture/delivery/packaging inclusions; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Weigh net quantities with calibrated equipment or use traceable matching-SKU conversion records; follow each source pool from receipt to installed retention, closing stock and original event-linked exits. Calculate actual attributable mass / D by SKU and state. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity is the named alias of this CP independent_physical_quantity keyed by atomic_flow_row_id and governed by atomic_child_normalization; it is neither another observation nor a copy of the parent total. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg | every shipment and custody event | opening stock through job closure | all supplies attributable to declared jobs | per reference flow | calibration; factor/SKU match; supplier boundary; receiver and residual ledger |
| cp_energy | install_accept | supplied pre-handover electricity | meter_record | provider/voltage/site/meter; job/tool/charger/test/load; start/end kWh and dates; all shared consumers/activity; contract energy inclusions | Read actual meter differences at the declared boundary and attribute shared supply using recorded activity; preserve raw energy apart from rated power, Ah and elapsed time. Calculate attributable actual kWh / D. | kWh | every metered activity/period | installation through acceptance only | declared meters and all benefiting consumers | per reference flow | meter calibration/resolution; inclusion ledger; complete activity denominator; Energy support gap |
| cp_services | install_accept | owned assets and purchased support | resource_lifecycle | manufacturer/model/serial or provider/contract/event; ownership; reference unit; every consuming node/job and period; physical activity A_rj and complete sum(A_rk); manufacture/acquisition/service/maintenance/replacement/retirement packets; B_r; remaining use; energy inclusions; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Reconcile exact asset and contract logs across all jobs and phases; record the actual causal share decision for each period and purchased complete event; distinguish hourly hire and unresolved Duration support. Calculate attributed resource fraction or complete event count / D. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity is the named alias of this CP independent_physical_quantity keyed by atomic_flow_row_id and governed by atomic_child_normalization; it is neither another observation nor a copy of the parent total. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | Item(s) | every use, event and phase change | entire resource packet, all service/reporting periods and termination | install_accept instances and every other benefiting job/period | per reference flow | complete consumer list; positive activity denominator; share closure; provider ownership; remaining-life uncertainty |
| cp_releases | install_accept | waste exits and direct-release evidence | exit_record | original issue/rework/job/date; material/SKU/state/hazard; waste/return ticket and recipient; net mass; captured/retained/emitted distinction; species/particle size/receiving medium; measured or justified method and uncertainty; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Reconcile recipient tickets with original custody and defect events; collect relevant release evidence separately from captured waste and unexplained residuals, disclosing every closure gap. Calculate each attributable evidenced exit mass / D. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity is the named alias of this CP independent_physical_quantity keyed by atomic_flow_row_id and governed by atomic_child_normalization; it is neither another observation nor a copy of the parent total. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg | every exit or evidenced release | receipt/correction through closure, including an owned lifecycle event only when attributable | declared jobs and actual authorised receivers | per reference flow | receiver tickets; calibrated mass; hazard/state evidence; release method; closure tolerance and gap |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| actual_normalization | all nonreference inventory rows | q_i = N_i / D; N_i is independently collected attributable actual numerator in its own row unit; D is positive independently counted accepted complete same-configuration installations. Preserve raw N_i and its protocol; never solve N_i from a target reference quantity. | N_i; D; cp_acceptance; cp_materials; cp_energy; cp_services; cp_releases | q_i |  |
| custody_closure | receptacle; plate_and_fixings_wallplate; plate_and_fixings_permanent_fixing; atomic_plate_and_fixings; atomic_incoming_packaging; unused_product_return_receptacle_return; unused_product_return_wallplate_return; unused_product_return_fixing_return; atomic_unused_product_return; installation_waste_conductor_offcut; installation_waste_failed_receptacle; installation_waste_failed_wallplate; installation_waste_failed_fixing; atomic_installation_waste | For each identifiable source pool, opening stock + receipts = installed retained material + closing stock + usable returns + actual waste + identified releases + residual. Document tolerance and residual; unresolved mass is a gap, not dust. Heterogeneous mass totals are diagnostic only. | cp_materials; cp_releases | pool closure and residual |  |
| asset_attribution | owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; atomic_owned_equipment_attribution | a_rj = A_rj / sum(A_rk); attributed quantity = a_rj / D; attributed burden = B_r * a_rj / D. Apply resource_share to the complete lifecycle packet and retain every period-specific owner and phase total once. | A_rj; A_rk; B_r; D; cp_services | asset quantity and burden share |  |
| atomic_child_normalization | plate_and_fixings_wallplate; plate_and_fixings_permanent_fixing; owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; unused_product_return_receptacle_return; unused_product_return_wallplate_return; unused_product_return_fixing_return; installation_waste_conductor_offcut; installation_waste_failed_receptacle; installation_waste_failed_wallplate; installation_waste_failed_fixing | For each atomic_flow_row_id retain its independent physical numerator independent_physical_quantity. actual_<row_id>_quantity is its named alias only, never a parent family total. Material inputs use the original CP stock gross/net and outward-return convention after independent weighing or same-SKU conversion and reconciliation; internal transfers use actual paired custody quantity; usable exits and wastes use their independently measured actual fate quantities. Owned-asset child quantity is the original complete-life asset equivalent a_rj=A_rj/sum(A_rk), with every consumer and positive complete denominator; purchased-service child quantity uses only actual completed events whose real contract defines Item(s), with the original attribution, never hours or price converted into count. atomic_child_intensity = independent_physical_quantity / D, where D is the original independently accepted complete same-configuration installation count from cp_acceptance; D=0 blocks normalization, and denominator/allocation cannot change. | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; D; cp_acceptance; cp_materials; cp_services; cp_releases | atomic_child_intensity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration_quality | install_accept | Match site, period, model, technical instructions, single-feed state, interfaces, BOM and acceptance. Do not transfer example product specs to all installations. | cp_acceptance; actual model/design records |
| measurement_quality | all inventory rows | Keep calibration, traceable SKU-specific conversion, raw numerators and independent positive D. Missing data and conditional absence require evidence; no zero imputation. | all linked protocols and uncertainty ledger |
| identity_quality | all inventory rows | Preserve actual function/state/gate, exact property/unit support and separate concrete exchanges; unsupported UUID, Energy/Duration and quantitative range evidence remain explicit gaps. | actual foreground identity and support records |
| resource_quality | cp_services | Cover every consumer, period and phase; record causal decision, complete activity denominator, remaining-use uncertainty, share closure and unique burden ownership. | serial/contract logs; lifecycle and inclusion packets |
| atomic_plate_and_fixings | install_accept; cp_materials | Former plate_and_fixings is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Resolve each actual plate and separately supplied fixing; separate materials/SKUs and exclude hardware already included with the receptacle. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_materials; actual_child_register; parent_ledger_id |
| atomic_incoming_packaging | install_accept; cp_materials | Former incoming_packaging is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Track each actual packaging material/SKU for the shipment through receipt, retained stock and disposal; retain physical custody when its manufacture burden is embedded upstream. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_materials; actual_child_register; parent_ledger_id |
| atomic_owned_equipment_attribution | install_accept; cp_services | Former owned_equipment_attribution is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Resolve each actually used hand/powered tool, tester, external charger and access asset by manufacturer/model/serial. This is the resource lifecycle share, not a permanent fitting or an assumed whole new tool. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_services; actual_child_register; parent_ledger_id |
| atomic_hired_support_service | install_accept; cp_services | Former hired_support_service is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Resolve each genuine bought transport/access/test/support event and service configuration. The provider owns equipment lifecycle; identify any included foreground energy. An hourly hire awaits Duration support and review. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_services; actual_child_register; parent_ledger_id |
| atomic_unused_product_return | install_accept; cp_materials | Former unused_product_return is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Resolve each usable component/material leaving installer custody without transformation; preserve SKU and original supply identity, receipt and return event, condition and receiver. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_materials; actual_child_register; parent_ledger_id |
| atomic_installation_waste | install_accept; cp_releases | Former installation_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Resolve separate packaging, conductor offcut and removed failed-component waste by material/state/hazard and authorised receiver. Retain original issue/rework event. Tool electronics/battery residue belongs here only where the owned resource lifecycle actually owns its disposal event; electronic receptacles are excluded. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_releases; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | install_accept | Legacy role keys remain only as non-exchange stock, activity or closure ledger keys in the original CP. All current quantity-bearing exchanges use named child cards and independent raw quantities; atomic_ requirements are mandatory refinement gates for the remaining actual roster, never mixed exchanges. Applies-to links in measurement, boundary, allocation, calculation, quality and validation tables migrate to these child cards/requirements. Original raw fields and physical calculation operands remain without being added again as parent exchanges. Mapping: plate_and_fixings => plate_and_fixings_wallplate, plate_and_fixings_permanent_fixing, atomic_plate_and_fixings; incoming_packaging => atomic_incoming_packaging; owned_equipment_attribution => owned_equipment_attribution_hand_tool, owned_equipment_attribution_powered_tool, owned_equipment_attribution_electrical_tester, owned_equipment_attribution_external_charger, owned_equipment_attribution_access_asset, atomic_owned_equipment_attribution; hired_support_service => hired_support_service_transport_event, hired_support_service_access_event, hired_support_service_test_event, atomic_hired_support_service; unused_product_return => unused_product_return_receptacle_return, unused_product_return_wallplate_return, unused_product_return_fixing_return, atomic_unused_product_return; installation_waste => installation_waste_conductor_offcut, installation_waste_failed_receptacle, installation_waste_failed_wallplate, installation_waste_failed_fixing, atomic_installation_waste | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | install_accept | The following routes each child to its original role, node, unique unit and method CP. Independently apply that original role measurement, stock, source/fate, rework, share, conversion and normalization method to each actual identity/state child. Retain the original helper/selector role parameter as legacy_parent_role, but supply quantity operands from this child independent records; ROW_UNIT(child_row_id) is the explicit unit below. Reconcile stocks/transfers only within the same identity/state and compatible native unit, grouping different materials, media, states and units separately. Parent totals are non-exchange diagnostics, never copied as child operands or summed across unlike units. Unsupported original-helper applicability or missing actual conversion, denominator or evidence blocks finalization; field records cannot choose a new method. Original role-named formula operands remain ledger names rather than duplicate exchanges. A cross-unit legacy role executes by this mapping and actual child unit instead of inheriting a wrong fixed unit. Routing: plate_and_fixings_wallplate => role=plate_and_fixings, node=install_accept, property=Mass, unit=kg, CP=cp_materials; plate_and_fixings_permanent_fixing => role=plate_and_fixings, node=install_accept, property=Mass, unit=kg, CP=cp_materials; owned_equipment_attribution_hand_tool => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_powered_tool => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_electrical_tester => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_external_charger => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; owned_equipment_attribution_access_asset => role=owned_equipment_attribution, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_transport_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_access_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; hired_support_service_test_event => role=hired_support_service, node=install_accept, property=Number of items, unit=Item(s), CP=cp_services; unused_product_return_receptacle_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_materials; unused_product_return_wallplate_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_materials; unused_product_return_fixing_return => role=unused_product_return, node=install_accept, property=Mass, unit=kg, CP=cp_materials; installation_waste_conductor_offcut => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_receptacle => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_wallplate => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases; installation_waste_failed_fixing => role=installation_waste, node=install_accept, property=Mass, unit=kg, CP=cp_releases | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| atomic_range_noninheritance | plate_and_fixings_wallplate; plate_and_fixings_permanent_fixing; owned_equipment_attribution_hand_tool; owned_equipment_attribution_powered_tool; owned_equipment_attribution_electrical_tester; owned_equipment_attribution_external_charger; owned_equipment_attribution_access_asset; hired_support_service_transport_event; hired_support_service_access_event; hired_support_service_test_event; unused_product_return_receptacle_return; unused_product_return_wallplate_return; unused_product_return_fixing_return; installation_waste_conductor_offcut; installation_waste_failed_receptacle; installation_waste_failed_wallplate; installation_waste_failed_fixing | Retired parent numerical ranges, per-exchange screening instructions and rationales are retained only in implementation audit, applying to neither new child exchanges nor parent-family sums and never proportionally allocated. Each new child has independent evidence needs for actual quantity, identity/state, measurement/conversion, uncertainty and comparable independent observations. Add its own interval only after review confirms applicability to this independent object; never validate a batch with its own maximum. Original ranges of unchanged semantically compatible atomic objects retain their original status. | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_and_acceptance | install_accept | Check the declared first-installation exclusions and prepared box/circuit/earth interfaces, actual model compatibility and every required qualifier; require signed termination/earth/polarity/function tests and completed correction/retest. | `leviton-receptacle-installation`; `leviton-5320-product` |
| reference_integrity | accepted_installation | Check independently positive D, same-configuration equivalence, exclusion of unfinished/rejected work, and matching reference name, card id, property, unit and explicit 1 Item(s) output in both languages. |  |
| custody_and_route | install_accept | Check each actual SKU/state supply and installed/stock/return/waste/release closure, recipient and original producing event. Confirm correction remains linked to install_accept and every reject has a verified return, rework, recovery or discard route. No mixed identity, residual-as-pollutant or missing-record zero is permitted. |  |
| shared_period_integrity | install_accept | Verify exact asset/service, every consuming node/job and service/reporting period, acquisition/manufacture, maintenance/replacement and retirement/termination links, physical share decision and positive complete denominator. Check sum(a_rj) = 1 within each packet, reconcile period/phase totals once, and prevent repeated delivery, packaging, provider capital or test energy. Missing replacement/remaining-use/termination evidence blocks final attribution. |  |
| evidence_completeness | all inventory rows | Check collection/calculation/protocol links, actual numerator basis and fixed or unresolved identity/support counts. Report checks performed, skipped, findings and completeness separately from missing Range warnings; a structural check does not verify concrete UUIDs or resolve Energy/Duration and quantitative evidence gaps. |  |
| close_atomic_plate_and_fixings | install_accept; cp_materials | Block final foreground completion until every actual object in atomic_plate_and_fixings is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_incoming_packaging | install_accept; cp_materials | Block final foreground completion until every actual object in atomic_incoming_packaging is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_owned_equipment_attribution | install_accept; cp_services | Block final foreground completion until every actual object in atomic_owned_equipment_attribution is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_hired_support_service | install_accept; cp_services | Block final foreground completion until every actual object in atomic_hired_support_service is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_unused_product_return | install_accept; cp_materials | Block final foreground completion until every actual object in atomic_unused_product_return is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_installation_waste | install_accept; cp_releases | Block final foreground completion until every actual object in atomic_installation_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | Verify actual source/receipt evidence, original physical quantities/units and ownership for the same material/state/event/gate. Traceable reuse of the same signed measurement is allowed; copied parent totals, overwritten receipts and forced unknown equality are prohibited. Unexplained differences without uncertainty, actual loss or state-transition responsibility evidence block completion; verify exactly one normalization per card. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground fitting-installation package, with downstream process or lifecyclemodel projections. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible first-installation scope, exact configuration, prepared interface and acceptance gate. |
| excluded_use | Whole-building equivalence; different termination/device routes; replacement; later operating electricity, maintenance or monitoring; lifetime/performance guarantees. |
| required_metadata | Site/time; exact model/configuration/BOM; interfaces/design/jurisdiction; quantity and positive D; test/acceptance; supply datasets; inventory/protocols; resource ownership/periods and attribution. |
| required_quality_disclosure | Coverage, uncertainty, custody residuals, missing consumer/period evidence, identity/property support and quantitative range gaps, and actual validation completeness. |
| update_trigger | Changed model, interface, route, BOM, acceptance design or stronger measured/identity evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-explanatory-notes | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 3.0 explanation, PDF page 293: electrical fitting subset and separation from alarm/telecommunications services; classification alone creates no PCR identity. |
| leviton-receptacle-installation | handbook | https://leviton.com/content/dam/leviton/residential/product_documents/instruction_sheet/15a-receptacle-instruction-sheet.pdf | Representative isolation/proof-off, side-screw copper termination, separate hot/neutral/earth, mounting and plate/restoration route. Model-specific strip length/torque/gauge are not universal inventory ranges. Foreground protocols specify actual collection without inventing quantities. |
| leviton-5320-product | official_guidance | https://leviton.com/products/5320-4w | Representative 15 A 125 V two-pole three-wire grounding duplex fitting; actual materials, strap, supplied hardware and model compatibility. It establishes no complete service mass, energy, waste, asset life or bounds. |
