---
pcr_id: pcr.construction-services.existing-commercial-office-space-category-a-base-building-services-and-finishes-integrated-refurbishment-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing Commercial Office Space Category A Base-Building Services and Finishes Integrated Refurbishment Services

## 1. Scope and Applicability

This PCR covers a completed integrated landlord Category A refurbishment within a surveyed retained commercial office space. Its product is an actual contract-defined base-building services and basic-finishes state ready for later tenant fit-out. The landlord acceptance gate coordinates retained conditions, physical installations and required testing; it is not an assertion that every typical Cat A component is present or that a tenant can occupy an operational Cat B workplace. [wdi-cat-a-b-fitout]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-commercial-office-space-category-a-base-building-services-and-finishes-integrated-refurbishment-services |
| classification_refs | cpc:3.0:54122 (narrower) |
| covered_products | Integrated retained-office Cat A landlord refurbishment under actual contract scope. |
| excluded_products | New buildings; extensions/new floor area; structural rebuilding; change of use; tenant Cat B; future operation. |
| representative_product | Accepted retained office-space base-building services and basic finishes at landlord handover. |
| production_route | Survey/isolate → selective stripout and substrate release → coordinated Cat A installation → testing/retesting and defect-closed landlord handover. |
| market_state | Completed construction/refurbishment service, not an at-plant material package or occupied tenant office. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Landlord-accepted integrated Cat A office refurbishment within the declared retained footprint. |
| How much | 1 m2 |
| How well | Actual contracted interface/system schedule and required tests, records and defect closure accepted by landlord. |
| How long or cycle | One actual intervention from prework survey through sectional/final acceptance, with phase/period IDs; no assumed service life. |
| reference_flow_link | `accepted_cat_a_office` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| product_flow | Completed landlord-accepted Cat A office refurbishment service |
| flow_property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| unit_group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| reference_unit | m2 |
| required_qualifiers | building_id; footprint_polygons; survey_convention; retained_replaced_schedule; occupancy_phasing; contract_cat_a_scope; base_services_interface_points; common_core_attribution; test_criteria; defect_closed_landlord_acceptance |

A is the unique accepted net internal office floor area. Keep associated common cores and external/shared system burdens causally attributed once; include their area in A only when the same declared survey convention explicitly includes it once. Never add floor, ceiling and trade areas. Multiple zones/buildings are not automatically comparable.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_area` | accepted_cat_a_office | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A>0 is unique surveyed accepted net internal office area under the declared convention; count accepted polygons once after coordinated gate closure. Associated cores/external systems enter causal burdens, not free exclusions or extra denominator area. |
| `native_units` | all inventory rows | Actual native property | actual native unit | Preserve supplied Area, Count, Length, Volume, Mass and service units. A separate needed mass view requires actual SKU density, state, moisture and temperature with units/source; it is nonadditive to the native ledger. Energy/Time and provider-native support require independent verification. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed retained office footprint with actual substrates, existing services/capacity, occupancy and approved scope. |
| starting_condition_role | Retained context and intervention starting state, not a purchased new building. |
| product_classification_scope | Commercial-office repair/alteration subset of CPC 54122. |
| recursive_input_rule | Treat same-category completed subcontract work as upstream only with distinct physical scope/native result and complete burden coverage; exclude duplicated direct resources and internal office-state transfers. |
| upstream_dataset_requirement | Actual SKU/provider/geography/technology/native-unit datasets with explicit supply, freight, asset and waste coverage; expand gaps before finalization. |
| disclosure | Retained/replaced conditions, common/core causal scope, occupancy/phases, contract interfaces, test gates, covered upstream resources and exclusions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers a completed integrated landlord Category A refurbishment within a surveyed retained commercial office space. Its product is an actual contract-defined base-building services and basic-finishes state ready for later tenant fit-out. The landlord acceptance gate coordinates retained conditions, physical installations and required testing; it is not an assertion that every typical Cat A component is present or that a tenant can occupy an operational Cat B workplace. [wdi-cat-a-b-fitout] | `wdi-cat-a-b-fitout` |
| `retained_start` | all nodes | Start from surveyed retained building, demised footprint, live occupancy/phasing, retained-capacity/fire/access survey and retained/replaced services schedule. Own actual selective stripout, hazard controls and substrate release. Existing historic assets are neither new purchases nor negative receipts. | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `contract_cat_a` | integration; test_handover | The actual approved landlord contract defines Cat A components, interface points and test criteria. Floors/ceilings/basic finishes and coordinated base electrical/lighting, HVAC/wet/fire services are included when actually required. The label is not a universal specification or tenant occupation certificate. | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `support_ownership` | site_support | Own direct, rental, provider, test, spare, transport and temporary utility resources once for all nodes. Attribute actual needed common cores and retained whole-system upgrades causally to the footprint and other beneficiaries; unresolved coverage blocks completed data. |  |
| `exclusions` | all nodes | Exclude new whole buildings, extensions/new floor space, structural rebuilding, use conversion, Cat B bespoke partitions/furniture/IT/equipment and future office operation. Riverside evidences phased interface work only; exclude its extension/new area/Cat B, webpage zero statistics, BREEAM grade and case dimensions as defaults. | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stripout` | Survey, isolate and selectively strip out | required | Actual declared contract and footprint | Source is retained office fittings; independent removal responsibility releases substrate to integration and dispatches removed waste to receiving treatment. | per reference flow |
| `integration` | Integrate actual Cat A base services and basic finishes | required | Actual declared contract and footprint | Integrates actual surface/component/service roles into installed office state for testing; embedded finishes and flushing have no separate claimed handoff. | per reference flow |
| `test_handover` | Coordinate tests and landlord acceptance | required | Actual declared contract and footprint | Owns actual coordinated tests and record/defect closure; failures loop to integration; only closed accepted polygons enter A. | per reference flow |
| `site_support` | Own project support resources across all phases | required | Actual declared contract and footprint | Owns shared access/power/provider/test/freight/asset/emission ledgers for all nodes and periods once; event owning_node links preserve physical responsibility. | per reference flow |

### Process: Survey, isolate and selectively strip out (`stripout`)

#### Inputs

##### Product flows

###### Removal collection bag (`stripout_consumables_bag`)

One independently identified removal collection bag. This is a conditional independent object supported within the original stripout_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual bags, barriers, protection, cutting and cleaning consumables used to release the retained substrate; split by actual product and hazard role. Historic fittings are retained context, not new material receipts. Actual removed fit-for-reuse historical equipment or fittings MUST be instantiated as separate historical Product outlets in actual Count/Area/Length/Volume/Mass units, recording origin, usable state, native quantity/unit, receiver, transfer and unique owner; never default these to waste, current-supply returns or negative new receipts.

- Selected flow: Removal collection bag
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_consumables_bag_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumable temporary barrier (`stripout_consumables_barrier`)

One independently identified consumable temporary barrier. This is a conditional independent object supported within the original stripout_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual bags, barriers, protection, cutting and cleaning consumables used to release the retained substrate; split by actual product and hazard role. Historic fittings are retained context, not new material receipts. Actual removed fit-for-reuse historical equipment or fittings MUST be instantiated as separate historical Product outlets in actual Count/Area/Length/Volume/Mass units, recording origin, usable state, native quantity/unit, receiver, transfer and unique owner; never default these to waste, current-supply returns or negative new receipts.

- Selected flow: Consumable temporary barrier
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_consumables_barrier_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumable retained-surface protection (`stripout_consumables_protection`)

One independently identified consumable retained-surface protection. This is a conditional independent object supported within the original stripout_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual bags, barriers, protection, cutting and cleaning consumables used to release the retained substrate; split by actual product and hazard role. Historic fittings are retained context, not new material receipts. Actual removed fit-for-reuse historical equipment or fittings MUST be instantiated as separate historical Product outlets in actual Count/Area/Length/Volume/Mass units, recording origin, usable state, native quantity/unit, receiver, transfer and unique owner; never default these to waste, current-supply returns or negative new receipts.

- Selected flow: Consumable retained-surface protection
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_consumables_protection_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Cutting consumable (`stripout_consumables_cutting`)

One independently identified cutting consumable. This is a conditional independent object supported within the original stripout_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual bags, barriers, protection, cutting and cleaning consumables used to release the retained substrate; split by actual product and hazard role. Historic fittings are retained context, not new material receipts. Actual removed fit-for-reuse historical equipment or fittings MUST be instantiated as separate historical Product outlets in actual Count/Area/Length/Volume/Mass units, recording origin, usable state, native quantity/unit, receiver, transfer and unique owner; never default these to waste, current-supply returns or negative new receipts.

- Selected flow: Cutting consumable
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_consumables_cutting_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Surface cleaning formulation (`stripout_consumables_cleaning`)

One independently identified surface cleaning formulation. This is a conditional independent object supported within the original stripout_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual bags, barriers, protection, cutting and cleaning consumables used to release the retained substrate; split by actual product and hazard role. Historic fittings are retained context, not new material receipts. Actual removed fit-for-reuse historical equipment or fittings MUST be instantiated as separate historical Product outlets in actual Count/Area/Length/Volume/Mass units, recording origin, usable state, native quantity/unit, receiver, transfer and unique owner; never default these to waste, current-supply returns or negative new receipts.

- Selected flow: Surface cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_consumables_cleaning_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


#### Outputs

##### Product flows

###### Retained office footprint released for Cat A integration (`released_office_state`)

Internal handoff after actual service isolation, selective removals and substrate/hazard clearance; survey polygons and release IDs connect to installation. This does not meet final Cat A acceptance.

- Selected flow: Retained office footprint released for Cat A integration
- Flow property / unit: Area / m2
- Amount rule: Measured released footprint area divided by A; internal activity only, no new purchase or final credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stripout_release`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Survey the actual released polygons and their service-isolation/substrate/hazard clearances; retain unreleased and partly cleared area separately. Investigate discrepancies with the installation transfer; no fixed release-area yield is evidenced.

###### Usable outward return of removal collection bag (`stripout_usable_return_bag`)

The same actual usable product/SKU as stripout_consumables_bag. This is a conditional independent object supported within the original stripout_usable_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only usable current-project supplies returned beyond the foreground boundary with matching incoming SKU and lot. Closing stock is not an outward return; historical recovered fittings are not negative new purchases.

- Selected flow: Usable outward return of removal collection bag
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_usable_return_bag_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Matched weighed usable return divided by A; use gross-with-outlets or consumed-only netting once, without extra credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of consumable temporary barrier (`stripout_usable_return_barrier`)

The same actual usable product/SKU as stripout_consumables_barrier. This is a conditional independent object supported within the original stripout_usable_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only usable current-project supplies returned beyond the foreground boundary with matching incoming SKU and lot. Closing stock is not an outward return; historical recovered fittings are not negative new purchases.

- Selected flow: Usable outward return of consumable temporary barrier
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_usable_return_barrier_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Matched weighed usable return divided by A; use gross-with-outlets or consumed-only netting once, without extra credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of consumable retained-surface protection (`stripout_usable_return_protection`)

The same actual usable product/SKU as stripout_consumables_protection. This is a conditional independent object supported within the original stripout_usable_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only usable current-project supplies returned beyond the foreground boundary with matching incoming SKU and lot. Closing stock is not an outward return; historical recovered fittings are not negative new purchases.

- Selected flow: Usable outward return of consumable retained-surface protection
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_usable_return_protection_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Matched weighed usable return divided by A; use gross-with-outlets or consumed-only netting once, without extra credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of cutting consumable (`stripout_usable_return_cutting`)

The same actual usable product/SKU as stripout_consumables_cutting. This is a conditional independent object supported within the original stripout_usable_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only usable current-project supplies returned beyond the foreground boundary with matching incoming SKU and lot. Closing stock is not an outward return; historical recovered fittings are not negative new purchases.

- Selected flow: Usable outward return of cutting consumable
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_usable_return_cutting_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Matched weighed usable return divided by A; use gross-with-outlets or consumed-only netting once, without extra credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of surface cleaning formulation (`stripout_usable_return_cleaning`)

The same actual usable product/SKU as stripout_consumables_cleaning. This is a conditional independent object supported within the original stripout_usable_return scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Only usable current-project supplies returned beyond the foreground boundary with matching incoming SKU and lot. Closing stock is not an outward return; historical recovered fittings are not negative new purchases.

- Selected flow: Usable outward return of surface cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_usable_return_cleaning_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Matched weighed usable return divided by A; use gross-with-outlets or consumed-only netting once, without extra credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

###### Removed ceiling waste (`stripout_waste_ceiling`)

One independently identified removed ceiling waste. This is a conditional independent object supported within the original stripout_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual hazardous and nonhazardous removed ceilings, floors, obsolete services, dust and contaminated consumables by composition and receiving treatment. Waste remains owned through evidenced treatment/transport; no assumed recycling credit.

- Selected flow: Removed ceiling waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_waste_ceiling_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Tare-corrected measured consignments divided by A; reconcile origin and destination; retained historic mass carries no new-manufacture receipt.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Removed floor waste (`stripout_waste_floor`)

One independently identified removed floor waste. This is a conditional independent object supported within the original stripout_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual hazardous and nonhazardous removed ceilings, floors, obsolete services, dust and contaminated consumables by composition and receiving treatment. Waste remains owned through evidenced treatment/transport; no assumed recycling credit.

- Selected flow: Removed floor waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_waste_floor_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Tare-corrected measured consignments divided by A; reconcile origin and destination; retained historic mass carries no new-manufacture receipt.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Removed obsolete service equipment waste (`stripout_waste_service`)

One independently identified removed obsolete service equipment waste. This is a conditional independent object supported within the original stripout_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual hazardous and nonhazardous removed ceilings, floors, obsolete services, dust and contaminated consumables by composition and receiving treatment. Waste remains owned through evidenced treatment/transport; no assumed recycling credit.

- Selected flow: Removed obsolete service equipment waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_waste_service_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Tare-corrected measured consignments divided by A; reconcile origin and destination; retained historic mass carries no new-manufacture receipt.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Captured stripout dust (`stripout_waste_dust`)

One independently identified captured stripout dust. This is a conditional independent object supported within the original stripout_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual hazardous and nonhazardous removed ceilings, floors, obsolete services, dust and contaminated consumables by composition and receiving treatment. Waste remains owned through evidenced treatment/transport; no assumed recycling credit.

- Selected flow: Captured stripout dust
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_waste_dust_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Tare-corrected measured consignments divided by A; reconcile origin and destination; retained historic mass carries no new-manufacture receipt.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Contaminated stripout consumable waste (`stripout_waste_consumable`)

One independently identified contaminated stripout consumable waste. This is a conditional independent object supported within the original stripout_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate actual hazardous and nonhazardous removed ceilings, floors, obsolete services, dust and contaminated consumables by composition and receiving treatment. Waste remains owned through evidenced treatment/transport; no assumed recycling credit.

- Selected flow: Contaminated stripout consumable waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_stripout_waste_consumable_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Tare-corrected measured consignments divided by A; reconcile origin and destination; retained historic mass carries no new-manufacture receipt.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stripout_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


### Process: Integrate actual Cat A base services and basic finishes (`integration`)

#### Inputs

##### Product flows

###### Retained office footprint released for Cat A integration (`released_office_feed`)

Accept the internal release from stripout by the same transfer and polygon IDs, without buying the retained building or multiplying quantities by trade count.

- Selected flow: Retained office footprint released for Cat A integration
- Flow property / unit: Area / m2
- Amount rule: Actual received released area divided by A; match released_office_state and disclose any unreleased or excluded polygons.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_state`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Match actual received released polygons/transfer IDs, unreleased interfaces and exclusions to stripout records; investigate mismatches rather than forcing the received area to accepted A.

###### Raised-access-floor panel (`area_components_raised_floor_panel`)

One independently identified raised-access-floor panel. This is a conditional independent object supported within the original area_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand only actual raised-access-floor panels, ceiling boards/grids or area-supplied basic coverings. Record each independent material role and layer once; their supplied or installed m2 are not final office area.

- Selected flow: Raised-access-floor panel
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_area_components_raised_floor_panel_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Ceiling board (`area_components_ceiling_board`)

One independently identified ceiling board. This is a conditional independent object supported within the original area_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand only actual raised-access-floor panels, ceiling boards/grids or area-supplied basic coverings. Record each independent material role and layer once; their supplied or installed m2 are not final office area.

- Selected flow: Ceiling board
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_area_components_ceiling_board_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Area-supplied ceiling grid assembly (`area_components_ceiling_grid`)

One independently identified area-supplied ceiling grid assembly. This is a conditional independent object supported within the original area_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand only actual raised-access-floor panels, ceiling boards/grids or area-supplied basic coverings. Record each independent material role and layer once; their supplied or installed m2 are not final office area.

- Selected flow: Area-supplied ceiling grid assembly
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_area_components_ceiling_grid_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Area-supplied basic covering (`area_components_basic_covering`)

One independently identified area-supplied basic covering. This is a conditional independent object supported within the original area_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand only actual raised-access-floor panels, ceiling boards/grids or area-supplied basic coverings. Record each independent material role and layer once; their supplied or installed m2 are not final office area.

- Selected flow: Area-supplied basic covering
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_area_components_basic_covering_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Complete luminaire (`count_components_luminaire`)

One independently identified complete luminaire. This is a conditional independent object supported within the original count_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Complete luminaire
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_count_components_luminaire_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Complete electrical distribution equipment (`count_components_distribution_equipment`)

One independently identified complete electrical distribution equipment. This is a conditional independent object supported within the original count_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Complete electrical distribution equipment
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_count_components_distribution_equipment_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Complete control equipment (`count_components_control_equipment`)

One independently identified complete control equipment. This is a conditional independent object supported within the original count_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Complete control equipment
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_count_components_control_equipment_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Complete HVAC terminal (`count_components_hvac_terminal`)

One independently identified complete hvac terminal. This is a conditional independent object supported within the original count_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Complete HVAC terminal
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_count_components_hvac_terminal_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Complete HVAC plant (`count_components_hvac_plant`)

One independently identified complete hvac plant. This is a conditional independent object supported within the original count_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Complete HVAC plant
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_count_components_hvac_plant_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Complete wet-service device (`count_components_wet_device`)

One independently identified complete wet-service device. This is a conditional independent object supported within the original count_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Complete wet-service device
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_count_components_wet_device_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Complete fire-service device (`count_components_fire_device`)

One independently identified complete fire-service device. This is a conditional independent object supported within the original count_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Complete fire-service device
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_count_components_fire_device_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied mounting assembly (`count_components_mounting_assembly`)

One independently identified separately supplied mounting assembly. This is a conditional independent object supported within the original count_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only.

- Selected flow: Separately supplied mounting assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_count_components_mounting_assembly_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Length-supplied cable (`length_components_cable`)

One independently identified length-supplied cable. This is a conditional independent object supported within the original length_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual cables, pipework, ducts or containment when the supplier dataset and records use length; retain material, section, rating and delivered state. Count-supplied fittings belong in count_components.

- Selected flow: Length-supplied cable
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_length_components_cable_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Length-supplied pipe (`length_components_pipe`)

One independently identified length-supplied pipe. This is a conditional independent object supported within the original length_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual cables, pipework, ducts or containment when the supplier dataset and records use length; retain material, section, rating and delivered state. Count-supplied fittings belong in count_components.

- Selected flow: Length-supplied pipe
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_length_components_pipe_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Length-supplied duct (`length_components_duct`)

One independently identified length-supplied duct. This is a conditional independent object supported within the original length_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual cables, pipework, ducts or containment when the supplier dataset and records use length; retain material, section, rating and delivered state. Count-supplied fittings belong in count_components.

- Selected flow: Length-supplied duct
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_length_components_duct_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Length-supplied service containment (`length_components_containment`)

One independently identified length-supplied service containment. This is a conditional independent object supported within the original length_components scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual cables, pipework, ducts or containment when the supplier dataset and records use length; retain material, section, rating and delivered state. Count-supplied fittings belong in count_components.

- Selected flow: Length-supplied service containment
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_length_components_containment_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Adhesive formulation (`mass_consumables_adhesive`)

One independently identified adhesive formulation. This is a conditional independent object supported within the original mass_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual adhesives, basic paints, sealants, fixings and cleaning materials; retain product composition and application state. Do not invent coating recipes or translate a complete kit into duplicate individual purchases.

- Selected flow: Adhesive formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_mass_consumables_adhesive_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Basic paint formulation (`mass_consumables_paint`)

One independently identified basic paint formulation. This is a conditional independent object supported within the original mass_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual adhesives, basic paints, sealants, fixings and cleaning materials; retain product composition and application state. Do not invent coating recipes or translate a complete kit into duplicate individual purchases.

- Selected flow: Basic paint formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_mass_consumables_paint_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Sealant formulation (`mass_consumables_sealant`)

One independently identified sealant formulation. This is a conditional independent object supported within the original mass_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual adhesives, basic paints, sealants, fixings and cleaning materials; retain product composition and application state. Do not invent coating recipes or translate a complete kit into duplicate individual purchases.

- Selected flow: Sealant formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_mass_consumables_sealant_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Separately supplied fixing (`mass_consumables_fixing`)

One independently identified separately supplied fixing. This is a conditional independent object supported within the original mass_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual adhesives, basic paints, sealants, fixings and cleaning materials; retain product composition and application state. Do not invent coating recipes or translate a complete kit into duplicate individual purchases.

- Selected flow: Separately supplied fixing
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_mass_consumables_fixing_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Cleaning formulation (`mass_consumables_cleaner`)

One independently identified cleaning formulation. This is a conditional independent object supported within the original mass_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual adhesives, basic paints, sealants, fixings and cleaning materials; retain product composition and application state. Do not invent coating recipes or translate a complete kit into duplicate individual purchases.

- Selected flow: Cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_mass_consumables_cleaner_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Purchased hydronic fluid formulation (`volume_fluids_hydronic_fluid`)

One independently identified purchased hydronic fluid formulation. This is a conditional independent object supported within the original volume_fluids scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual purchased hydronic/test fluids or water supplied to this node when volume is the documented native unit. A mass-supplied refrigerant or chemical MUST be expanded as a separate mass input with verified support; do not invent a fluid or convert it to fit this card.

- Selected flow: Purchased hydronic fluid formulation
- Flow property / unit: Volume / m3
- Amount rule: Independently measure actual_volume_fluids_hydronic_fluid_quantity in fixed m3; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Purchased test fluid formulation (`volume_fluids_test_fluid`)

One independently identified purchased test fluid formulation. This is a conditional independent object supported within the original volume_fluids scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual purchased hydronic/test fluids or water supplied to this node when volume is the documented native unit. A mass-supplied refrigerant or chemical MUST be expanded as a separate mass input with verified support; do not invent a fluid or convert it to fit this card.

- Selected flow: Purchased test fluid formulation
- Flow property / unit: Volume / m3
- Amount rule: Independently measure actual_volume_fluids_test_fluid_quantity in fixed m3; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Purchased integration water (`volume_fluids_water`)

One independently identified purchased integration water. This is a conditional independent object supported within the original volume_fluids scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand actual purchased hydronic/test fluids or water supplied to this node when volume is the documented native unit. A mass-supplied refrigerant or chemical MUST be expanded as a separate mass input with verified support; do not invent a fluid or convert it to fit this card.

- Selected flow: Purchased integration water
- Flow property / unit: Volume / m3
- Amount rule: Independently measure actual_volume_fluids_water_quantity in fixed m3; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


#### Outputs

##### Product flows

###### Installed Cat A base-building office state awaiting coordinated tests (`installed_office_state`)

Internal installed-state handoff to test_handover with component schedule, test points and unresolved defects. The coordinated assembly includes actual floors, ceilings/basic finishes and electrical, HVAC, wet and fire interfaces required by the contract; absent typical features are documented rather than fabricated.

- Selected flow: Installed Cat A base-building office state awaiting coordinated tests
- Flow property / unit: Area / m2
- Amount rule: Actual uniquely installed footprint area divided by A; no acceptance or saleable output for unresolved failures.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration_state`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Survey actual installed polygons and service interface/test-point schedule, with unfinished/unreleased and failed portions retained outside accepted A. Link to test_handover rather than assuming installed area is accepted output.

###### Usable outward return of raised-access-floor panel (`integration_usable_returns_raised_floor_panel`)

The same actual usable product/SKU as area_components_raised_floor_panel. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of raised-access-floor panel
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_integration_usable_returns_raised_floor_panel_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of ceiling board (`integration_usable_returns_ceiling_board`)

The same actual usable product/SKU as area_components_ceiling_board. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of ceiling board
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_integration_usable_returns_ceiling_board_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of area-supplied ceiling grid assembly (`integration_usable_returns_ceiling_grid`)

The same actual usable product/SKU as area_components_ceiling_grid. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of area-supplied ceiling grid assembly
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_integration_usable_returns_ceiling_grid_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of area-supplied basic covering (`integration_usable_returns_basic_covering`)

The same actual usable product/SKU as area_components_basic_covering. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of area-supplied basic covering
- Flow property / unit: Area / m2
- Amount rule: Independently measure actual_integration_usable_returns_basic_covering_quantity in fixed m2; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of complete luminaire (`integration_usable_returns_luminaire`)

The same actual usable product/SKU as count_components_luminaire. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of complete luminaire
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_integration_usable_returns_luminaire_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of complete electrical distribution equipment (`integration_usable_returns_distribution_equipment`)

The same actual usable product/SKU as count_components_distribution_equipment. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of complete electrical distribution equipment
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_integration_usable_returns_distribution_equipment_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of complete control equipment (`integration_usable_returns_control_equipment`)

The same actual usable product/SKU as count_components_control_equipment. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of complete control equipment
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_integration_usable_returns_control_equipment_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of complete hvac terminal (`integration_usable_returns_hvac_terminal`)

The same actual usable product/SKU as count_components_hvac_terminal. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of complete hvac terminal
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_integration_usable_returns_hvac_terminal_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of complete hvac plant (`integration_usable_returns_hvac_plant`)

The same actual usable product/SKU as count_components_hvac_plant. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of complete hvac plant
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_integration_usable_returns_hvac_plant_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of complete wet-service device (`integration_usable_returns_wet_device`)

The same actual usable product/SKU as count_components_wet_device. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of complete wet-service device
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_integration_usable_returns_wet_device_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of complete fire-service device (`integration_usable_returns_fire_device`)

The same actual usable product/SKU as count_components_fire_device. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of complete fire-service device
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_integration_usable_returns_fire_device_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of separately supplied mounting assembly (`integration_usable_returns_mounting_assembly`)

The same actual usable product/SKU as count_components_mounting_assembly. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of separately supplied mounting assembly
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently measure actual_integration_usable_returns_mounting_assembly_quantity in fixed Item(s); retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of length-supplied cable (`integration_usable_returns_cable`)

The same actual usable product/SKU as length_components_cable. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of length-supplied cable
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_integration_usable_returns_cable_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of length-supplied pipe (`integration_usable_returns_pipe`)

The same actual usable product/SKU as length_components_pipe. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of length-supplied pipe
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_integration_usable_returns_pipe_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of length-supplied duct (`integration_usable_returns_duct`)

The same actual usable product/SKU as length_components_duct. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of length-supplied duct
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_integration_usable_returns_duct_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of length-supplied service containment (`integration_usable_returns_containment`)

The same actual usable product/SKU as length_components_containment. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of length-supplied service containment
- Flow property / unit: Length / m
- Amount rule: Independently measure actual_integration_usable_returns_containment_quantity in fixed m; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of adhesive formulation (`integration_usable_returns_adhesive`)

The same actual usable product/SKU as mass_consumables_adhesive. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of adhesive formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_usable_returns_adhesive_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of basic paint formulation (`integration_usable_returns_paint`)

The same actual usable product/SKU as mass_consumables_paint. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of basic paint formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_usable_returns_paint_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of sealant formulation (`integration_usable_returns_sealant`)

The same actual usable product/SKU as mass_consumables_sealant. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of sealant formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_usable_returns_sealant_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of separately supplied fixing (`integration_usable_returns_fixing`)

The same actual usable product/SKU as mass_consumables_fixing. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of separately supplied fixing
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_usable_returns_fixing_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of cleaning formulation (`integration_usable_returns_cleaner`)

The same actual usable product/SKU as mass_consumables_cleaner. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_usable_returns_cleaner_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of purchased hydronic fluid formulation (`integration_usable_returns_hydronic_fluid`)

The same actual usable product/SKU as volume_fluids_hydronic_fluid. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of purchased hydronic fluid formulation
- Flow property / unit: Volume / m3
- Amount rule: Independently measure actual_integration_usable_returns_hydronic_fluid_quantity in fixed m3; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of purchased test fluid formulation (`integration_usable_returns_test_fluid`)

The same actual usable product/SKU as volume_fluids_test_fluid. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of purchased test fluid formulation
- Flow property / unit: Volume / m3
- Amount rule: Independently measure actual_integration_usable_returns_test_fluid_quantity in fixed m3; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Usable outward return of purchased integration water (`integration_usable_returns_water`)

The same actual usable product/SKU as volume_fluids_water. This is a conditional independent object supported within the original integration_usable_returns scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return.

- Selected flow: Usable outward return of purchased integration water
- Flow property / unit: Volume / m3
- Amount rule: Independently measure actual_integration_usable_returns_water_quantity in fixed m3; retain actual native measurements, instrument/dimension/count and same-identity/state conversion evidence, leaving one exchange quantity after conversion. Determine this child's physical numerator using the original CP stock, receipts/issues, installed/consumed, rework, usable exit, waste, period and attribution method, then divide once by original reference denominator A; A=0 blocks normalization. Never copy a parent total, assumed proportion, alternate-unit view or family Range. Original quantity convention, with original CP operands: Native-unit matched usable outward returns divided by A, as one nonadditive outlet view under the declared gross or net convention.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Waste flows

###### Discarded integration packaging (`integration_waste_packaging`)

One independently identified discarded integration packaging. This is a conditional independent object supported within the original integration_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual segregated packaging, offcuts, removed failed parts, cured residues and contained waste fluids. Subdivide by hazardous state and evidenced destination; collected dust is waste, escaped dust is an elementary release.

- Selected flow: Discarded integration packaging
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_waste_packaging_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed net waste mass divided by A; use evidenced SKU/state density only where a separate nonadditive mass view is needed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Integration material offcut (`integration_waste_offcut`)

One independently identified integration material offcut. This is a conditional independent object supported within the original integration_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual segregated packaging, offcuts, removed failed parts, cured residues and contained waste fluids. Subdivide by hazardous state and evidenced destination; collected dust is waste, escaped dust is an elementary release.

- Selected flow: Integration material offcut
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_waste_offcut_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed net waste mass divided by A; use evidenced SKU/state density only where a separate nonadditive mass view is needed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Removed failed integration part (`integration_waste_failed_part`)

One independently identified removed failed integration part. This is a conditional independent object supported within the original integration_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual segregated packaging, offcuts, removed failed parts, cured residues and contained waste fluids. Subdivide by hazardous state and evidenced destination; collected dust is waste, escaped dust is an elementary release.

- Selected flow: Removed failed integration part
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_waste_failed_part_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed net waste mass divided by A; use evidenced SKU/state density only where a separate nonadditive mass view is needed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Cured integration formulation residue (`integration_waste_cured_residue`)

One independently identified cured integration formulation residue. This is a conditional independent object supported within the original integration_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual segregated packaging, offcuts, removed failed parts, cured residues and contained waste fluids. Subdivide by hazardous state and evidenced destination; collected dust is waste, escaped dust is an elementary release.

- Selected flow: Cured integration formulation residue
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_integration_waste_cured_residue_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual weighed net waste mass divided by A; use evidenced SKU/state density only where a separate nonadditive mass view is needed.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_integration_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


### Process: Coordinate tests and landlord acceptance (`test_handover`)

#### Inputs

##### Product flows

###### Installed Cat A base-building office state awaiting coordinated tests (`installed_office_feed`)

Receive the same installed polygons and interface IDs from integration; inspections and test attempts are activity records and do not create additional office area.

- Selected flow: Installed Cat A base-building office state awaiting coordinated tests
- Flow property / unit: Area / m2
- Amount rule: Measured received installed footprint area divided by A, matched to installed_office_state without a second purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: Match actual installed polygons, interface state and defect IDs to integration; retain incomplete, excluded and failed sections and repeated test attempts without new purchased area.

###### Test tracer formulation (`test_consumables_tracer`)

One independently identified test tracer formulation. This is a conditional independent object supported within the original test_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record actual tracers, cleaning or test consumables and replacement test articles only if used. Durable test instruments and provider physical services belong to site_support.

- Selected flow: Test tracer formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_test_consumables_tracer_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_test_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Test-stage cleaning formulation (`test_consumables_cleaner`)

One independently identified test-stage cleaning formulation. This is a conditional independent object supported within the original test_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record actual tracers, cleaning or test consumables and replacement test articles only if used. Durable test instruments and provider physical services belong to site_support.

- Selected flow: Test-stage cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_test_consumables_cleaner_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_test_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Expendable replacement test article (`test_consumables_test_article`)

One independently identified expendable replacement test article. This is a conditional independent object supported within the original test_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record actual tracers, cleaning or test consumables and replacement test articles only if used. Durable test instruments and provider physical services belong to site_support.

- Selected flow: Expendable replacement test article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_test_consumables_test_article_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_test_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


#### Outputs

##### Product flows

###### Completed landlord-accepted Cat A office refurbishment service (`accepted_cat_a_office`)

Final service at defect-closed landlord signoff, with record drawings/O&M and the actual contract-required electrical, HVAC balancing/control, wet and fire/life-safety evidence. This provides a base for later tenant fit-out and does not certify tenant occupation readiness.

- Selected flow: Completed landlord-accepted Cat A office refurbishment service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handover`
- Sources: `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment`

Range evidence need: 1 m2 defines normalization only. Measure actual accepted nonoverlapping net internal polygons under the declared survey convention and verify the complete actual contract gate; retain incomplete/failed area separately. No empirical yield or service-life interval is asserted.

##### Waste flows

###### Spent test article (`test_waste_test_article`)

One independently identified spent test article. This is a conditional independent object supported within the original test_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual spent test articles, collected cleaning residues and contained discharged test fluids classified by actual state/destination. Direct discharge to the environment MUST instead be expanded as measured medium-specific elementary exchanges.

- Selected flow: Spent test article
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_test_waste_test_article_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Tare-corrected actual waste consignments divided by A; document receiving treatment coverage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_test_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Collected test-stage cleaning residue (`test_waste_cleaning_residue`)

One independently identified collected test-stage cleaning residue. This is a conditional independent object supported within the original test_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Actual spent test articles, collected cleaning residues and contained discharged test fluids classified by actual state/destination. Direct discharge to the environment MUST instead be expanded as measured medium-specific elementary exchanges.

- Selected flow: Collected test-stage cleaning residue
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_test_waste_cleaning_residue_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Tare-corrected actual waste consignments divided by A; document receiving treatment coverage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_test_material`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


### Process: Own project support resources across all phases (`site_support`)

#### Inputs

##### Product flows

###### Actual supplied construction and commissioning electricity (`supplied_electricity`)

Own temporary lighting, access, tools, HVAC trials, occupied-site continuity and retests for all three production nodes. Retain supplier voltage/mix/geography and provider coverage; no future routine office operation.

- Selected flow: Actual supplied construction and commissioning electricity
- Flow property / unit: Energy / kWh
- Amount rule: Retain separate gross import, export and onsite-generation registers; attribute actual consumed supply, test/retest losses and compatible physical drivers once, divided by A. Actual export is a separate output without input netting or extra credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_energy`

Range evidence need: Retain actual gross meter supply, source/mix/voltage/geography, start/end readings, phase allocation and all actual tool/HVAC/test/retest cycles; reconcile provider coverage and nonproject loads. No default kWh/m2 or trial duration.

###### Actual supplied liquid fuel for temporary plant and provider activities (`supplied_fuel`)

Expand only actual supplied fuel grade and state. Upstream fuel supply and actual combustion are separate; the supply quantity is not itself an air emission or assumed burn.

Retain the actual ticket-native unit and conversion operands; the platform volume-group child unit is l, with 1 L = 1 l = 0.001 m3. Uppercase L is not a separately verified platform unit identifier; preserve ticket units and avoid repeated conversion.

- Selected flow: Actual supplied liquid fuel for temporary plant and provider activities
- Flow property / unit: Volume / l
- Amount rule: S = opening + net_receipts - closing in this SKU's native unit. Declare one view: gross-with-outlets input S / A, or consumed-only input (S - usable_outward_return) / A. Include all nonreturned loss/waste and failed-work consumption; keep matched physical return evidence without a second deduction or credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_fuel`

Range evidence need: Collect actual grade/state and receipt-native units, calibrated stock and measured burn OR complete disjoint fate records including returns/nonburned waste/uncontained loss/carry. Investigate unknown loss and uncertainty; no residual burn or fuel intensity default.

###### Actual purchased water for temporary facilities and tests (`support_water`)

Meter actual supplied water used for temporary welfare/protection, cleaning and tests owned here, excluding water already owned by volume_fluids. Environmental abstraction is a different role requiring expansion.

- Selected flow: Actual purchased water for temporary facilities and tests
- Flow property / unit: Volume / m3
- Amount rule: Actual supply meter or documented delivered volume attributable to this project divided by A.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_water`

Range evidence need: Read actual supplied-water meters/deliveries, source, test/cleaning cycles, retained charge and contained/environmental destinations; reconcile water already owned by integration. No generic flushing or commissioning water volume.


###### Reusable scaffold asset equivalent (`shared_assets_scaffold`)

One independently identified reusable scaffold asset equivalent. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: One asset-equivalent view of actual scaffolds/platforms, extraction plant, instruments, distribution assets and durable tools shared by stripout, integration and test_handover across phases. Include manufacture, maintenance, replacements and end of life across all consumers/jobs/periods.

- Selected flow: Reusable scaffold asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator A for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by A once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by A once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Reusable access platform asset equivalent (`shared_assets_platform`)

One independently identified reusable access platform asset equivalent. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: One asset-equivalent view of actual scaffolds/platforms, extraction plant, instruments, distribution assets and durable tools shared by stripout, integration and test_handover across phases. Include manufacture, maintenance, replacements and end of life across all consumers/jobs/periods.

- Selected flow: Reusable access platform asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator A for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by A once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by A once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Extraction plant asset equivalent (`shared_assets_extraction`)

One independently identified extraction plant asset equivalent. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: One asset-equivalent view of actual scaffolds/platforms, extraction plant, instruments, distribution assets and durable tools shared by stripout, integration and test_handover across phases. Include manufacture, maintenance, replacements and end of life across all consumers/jobs/periods.

- Selected flow: Extraction plant asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator A for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by A once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by A once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Test instrument asset equivalent (`shared_assets_instrument`)

One independently identified test instrument asset equivalent. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: One asset-equivalent view of actual scaffolds/platforms, extraction plant, instruments, distribution assets and durable tools shared by stripout, integration and test_handover across phases. Include manufacture, maintenance, replacements and end of life across all consumers/jobs/periods.

- Selected flow: Test instrument asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator A for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by A once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by A once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Temporary distribution asset equivalent (`shared_assets_distribution`)

One independently identified temporary distribution asset equivalent. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: One asset-equivalent view of actual scaffolds/platforms, extraction plant, instruments, distribution assets and durable tools shared by stripout, integration and test_handover across phases. Include manufacture, maintenance, replacements and end of life across all consumers/jobs/periods.

- Selected flow: Temporary distribution asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator A for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by A once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by A once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Durable tool asset equivalent (`shared_assets_tool`)

One independently identified durable tool asset equivalent. This is a conditional independent object supported within the original shared_assets scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: One asset-equivalent view of actual scaffolds/platforms, extraction plant, instruments, distribution assets and durable tools shared by stripout, integration and test_handover across phases. Include manufacture, maintenance, replacements and end of life across all consumers/jobs/periods.

- Selected flow: Durable tool asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Retain the original PCR method and denominator A for this independent object. For an owned asset use the original complete-life physical-driver share a_rj=A_rj/sum(A_rk), with positive complete all-consumer denominator, period ownership and manufacture/maintenance/replacement/end-of-life evidence; divide this asset share by A once. For a purchased service use an independently completed physical event count and actual consumer share only when its real contract defines this completed function in Item(s); divide by A once. Hourly hire or another unit cannot become a fictitious counted event and remains blocked refinement. Exclude duplicate energy, freight, operator or asset burdens already included. Never copy the parent quantity or Range; missing lifecycle, event definition, actual unit or assignment evidence blocks completion.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_assets`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Actual inbound, outbound and provider freight service (`freight_services`)

Own actual material, waste, return and equipment logistics not already covered by provider/supply datasets. Record actual load, route, vehicle and empty returns; passenger/provider travel requires a separate native physical service expansion when present.

- Selected flow: Actual inbound, outbound and provider freight service
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Sum actual load_kg * actual distance_km for covered legs divided by A, with actual empty-return service burden and coverage disclosed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_support_freight`

Range evidence need: Obtain actual consignment load and load unit, route distance and distance unit, vehicle/coverage and empty-return evidence. Retain real conversion to kg*km and separately covered empty-return burden; no default distance, payload or return factor.

##### Elementary flows

###### Water withdrawn from the declared environmental source (`direct_environmental_water_withdrawal`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. This is an elementary INPUT from the actual water source, never an emission or purchased-water supply. Meter each actual source separately and avoid duplicate supplied-water and recirculated-water entries.

- Selected flow: Water withdrawn from the declared environmental source
- Flow property / unit: Volume / m3
- Amount rule: Actual measured attributable environmental water withdrawal in m3 divided by A once, with the actual source compartment.
- Value mode: `foreground_record`
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_environment`

Range evidence need: Determine actual species and receiving medium with measured mass or valid matched activity-factor/whole-fluid composition-fate evidence; independently meter actual environmental water Volume and gas native quantities with their compartments and conversion conditions. Water volume never uses a pollutant species formula; no invented species, SDS emission quantity or missing-as-zero.


#### Outputs

##### Product flows

###### Actual usable liquid fuel returned outward (`fuel_usable_return`)

Record only documented usable fuel sent outside the foreground boundary with grade, state, lot and incoming match. Recovered spill retained at closing is closing stock.

Retain the actual ticket-native unit and conversion operands; the platform volume-group child unit is l, with 1 L = 1 l = 0.001 m3. Uppercase L is not a separately verified platform unit identifier; preserve ticket units and avoid repeated conversion.

- Selected flow: Actual usable liquid fuel returned outward
- Flow property / unit: Volume / l
- Amount rule: Actual matched native-volume outward return / A. Under gross-with-outlets retain this measured outlet; under consumed-only it is a nonadditive physical audit record, already deducted once from supplied_fuel. No extra credit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_support_fuel`

Range evidence need: Record actual usable grade/lot/state, measured return in receipt-native units and physical receiver matched to incoming fuel; recovered closing remains closing. No return fraction or additional avoided-supply credit.

##### Waste flows

###### Spent support filter (`support_waste_filter`)

One independently identified spent support filter. This is a conditional independent object supported within the original support_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Collected filters, temporary protection, contained fuel waste and water treatment residues go to actual receiving treatment. Recovered closing fuel and direct uncontrolled releases are separate mutually exclusive fates.

- Selected flow: Spent support filter
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_support_waste_filter_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net weighed consignments divided by A; a volume-to-mass view needs actual fuel/SKU density and state and is nonadditive.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded temporary protection (`support_waste_protection`)

One independently identified discarded temporary protection. This is a conditional independent object supported within the original support_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Collected filters, temporary protection, contained fuel waste and water treatment residues go to actual receiving treatment. Recovered closing fuel and direct uncontrolled releases are separate mutually exclusive fates.

- Selected flow: Discarded temporary protection
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_support_waste_protection_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net weighed consignments divided by A; a volume-to-mass view needs actual fuel/SKU density and state and is nonadditive.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Water-treatment residue (`support_waste_treatment_residue`)

One independently identified water-treatment residue. This is a conditional independent object supported within the original support_waste scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Collected filters, temporary protection, contained fuel waste and water treatment residues go to actual receiving treatment. Recovered closing fuel and direct uncontrolled releases are separate mutually exclusive fates.

- Selected flow: Water-treatment residue
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_support_waste_treatment_residue_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: Actual net weighed consignments divided by A; a volume-to-mass view needs actual fuel/SKU density and state and is nonadditive.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support_waste`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows


###### Water discharged to the declared environmental receiving compartment (`direct_water_discharge`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Record measured actual direct water discharge separately from captured wastewater transferred to treatment. A water-balance gap is not a discharge measurement.

- Selected flow: Water discharged to the declared environmental receiving compartment
- Flow property / unit: Volume / m3
- Amount rule: Actual measured attributed direct water discharge in m3 divided by A once; record source/receiver and no species-mass factor.
- Value mode: `foreground_record`
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_environment`

Range evidence need: Determine actual species and receiving medium with measured mass or valid matched activity-factor/whole-fluid composition-fate evidence; independently meter actual environmental water Volume and gas native quantities with their compartments and conversion conditions. Water volume never uses a pollutant species formula; no invented species, SDS emission quantity or missing-as-zero.


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_output` | final output | One intended output is accepted Cat A service area. Internal state transfers and tested trade surfaces are not co-products; exclude unresolved or failed polygons from A until defect closure. No avoided-burden credit for historic recovered material. |  |
| `stocks_returns` | materials and fuel | S = attributed opening stock + external net tare-corrected receipts - carried closing stock. Internal issues/installed activity are not new purchases. Choose gross-with-outlets OR consumed-only matched usable outward-return netting once; no extra credit. All nonreturned loss/waste retains upstream supply burden. |  |
| `shared_complete_life` | site_support | Identify each shared access/utility/tool/test asset, all consuming nodes stripout/integration/test_handover and all external jobs/nodes/periods over full life. Use compatible actual job_driver / full_life_driver with observed life OR observed history plus evidenced remainder, replacements, termination and end of life; retain sources, uncertainty, sensitivity and update. Asset-equivalent amount=(job_driver/full_life_driver)/A with complete manufacture/maintenance/replacement/EOL burden; alternatively a lifecycle-complete per-driver service quantity=job_driver/A in matching unit, never both. |  |
| `phases_rework` | all nodes | Index survey/isolation, stripout, installation, testing/retesting and signed sectional/final completion by actual phase and period. Failed tests return affected installed state to integration with defect IDs; discarded/replaced items exit via the owning waste row. Retain all failed attempt and replacement burdens with accepted A once, without a second sale, year or area denominator. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules


Keep elementary resource intakes and environmental releases in opposite directions. Direct environmental water withdrawal is an input; direct water discharge and substance emissions are outputs, each with actual source/receiver and compatible units. Any actual gas-resource intake or gas release still requires its own substance, direction, state, measured quantity and concrete exchange; this collection obligation is not a generic selected gas flow. The existing intervention boundary and no-occurrence/no-invented-quantity rules remain.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stripout_material` | `stripout` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; lot_id; hazard_state; historic_origin; reusable_state; reusable_quantity; reusable_native_unit; reusable_receiver; reusable_transfer_id; unique_owner; opening; gross_receipts; tare; closing; usable_outward_return; contained_waste_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; treatment_destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; net_receipts; receipt_basis; gross_receipt_mass_kg; tare_mass_kg; receipt_measurement_unit; receipt_conversion_sku_state; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Weigh and reconcile each actual material/waste lot and matched usable outward return with containment and receiving records.  Retain external net_receipts in quantity_unit and its receipt_basis. Apply stock_throughput to that net native quantity; raw gross_receipts/tare are audit observations with explicit measurement units, not automatic native-unit operands. For a weighed route preserve gross_receipt_mass_kg and tare_mass_kg and any same-SKU/state conversion; for an already net or nonweighed receipt record its net quantity and mark inapplicable weighing fields explicitly, with no second tare deduction. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_stripout_release` | `stripout` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; area; area_unit; retained_services; isolation_record; hazard_clearance; substrate_release; recipient_id | Survey nonoverlapping released polygons and witness isolation, hazard clearance and substrate acceptance before installation. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_integration_material` | `integration` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; component_role; layer; retained_replaced_state; lot_id; package_bom_view; opening; gross_receipts; tare; closing; installed_quantity; usable_outward_return; offcut; failed_part; contained_waste; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; net_receipts; receipt_basis; gross_receipt_mass_kg; tare_mass_kg; receipt_measurement_unit; receipt_conversion_sku_state; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Reconcile procurement, deliveries, stock, installed scope, returns and waste for every actual SKU/native unit and package/BOM ownership.  Retain external net_receipts in quantity_unit and its receipt_basis. Apply stock_throughput to that net native quantity; raw gross_receipts/tare are audit observations with explicit measurement units, not automatic native-unit operands. For a weighed route preserve gross_receipt_mass_kg and tare_mass_kg and any same-SKU/state conversion; for an already net or nonweighed receipt record its net quantity and mark inapplicable weighing fields explicitly, with no second tare deduction. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_integration_state` | `integration` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; area; area_unit; component_schedule; interface_id; installation_release; defect_id; recipient_id | Witness release and installed-state transfers using the same polygons, component schedule and unresolved defects. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_handover` | `test_handover` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; polygon_id; survey_convention; accepted_area; area_unit; contract_scope; system_test_id; test_criterion; criterion_source; test_result; retest_id; defect_id; closure_record; record_drawing; om_record; landlord_signature; acceptance_date | Measure accepted_area = A in m2 from surveyed records under one reference_gate_id; all other protocols take accepted_area_A and its unit from that same final gate, without extra A from trades or repeat tests. Attach actual contract criteria, witnessed tests/retests, defect closure and landlord signature; never infer success from the Cat A label. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_test_material` | `test_handover` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; sku; lot_id; opening; gross_receipts; tare; closing; usable_outward_return; test_attempt; contained_waste_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; destination; quantity_unit; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; net_receipts; receipt_basis; gross_receipt_mass_kg; tare_mass_kg; receipt_measurement_unit; receipt_conversion_sku_state; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Reconcile each actual test/final-cleaning lot and waste across initial and repeat attempts with receiving records.  Retain external net_receipts in quantity_unit and its receipt_basis. Apply stock_throughput to that net native quantity; raw gross_receipts/tare are audit observations with explicit measurement units, not automatic native-unit operands. For a weighed route preserve gross_receipt_mass_kg and tare_mass_kg and any same-SKU/state conversion; for an already net or nonweighed receipt record its net quantity and mark inapplicable weighing fields explicitly, with no second tare deduction. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_energy` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; supplier_id; supply_source; retained_onsite_generation_source; meter_id; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_consumed; onsite_generation_resource_scope; test_cycle_id; retest_cycle_id; cycle_energy; distribution_loss; quantity_unit; nonproject_use; consuming_node; attribution_driver; attribution_driver_unit; coverage; provider_overlap | Read calibrated phase gross-import and gross-export registers separately with actual supply source and retained onsite generation; meter every actual test/retest cycle and loss with physical attribution_driver_unit. Own complete attributed onsite-generation fuel/assets/maintenance/emission scope and provider coverage once; actual exported energy MUST expand into a separate Product outlet, never net against input or claim avoided-supply credit. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_fuel` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; fuel_grade; lot_id; ticket_native_unit; ticket_quantity; volume_conversion_factor; volume_conversion_source; opening; gross_receipts; tare; closing; usable_outward_return; measured_burn; nonburned_waste; uncontained_loss; recovered_closing; total_spill_audit; fate_method; unknown_loss; uncertainty; quantity_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; net_receipts; receipt_basis; gross_receipt_mass_kg; tare_mass_kg; receipt_measurement_unit; receipt_conversion_sku_state | Read actual fuel stock/meter records. Use measured burn or audit complete disjoint native fates with uncertainty and investigate unknown loss; never infer burn as a residual.  Retain external net_receipts in quantity_unit and its receipt_basis. Apply stock_throughput to that net native quantity; raw gross_receipts/tare are audit observations with explicit measurement units, not automatic native-unit operands. For a weighed route preserve gross_receipt_mass_kg and tare_mass_kg and any same-SKU/state conversion; for an already net or nonweighed receipt record its net quantity and mark inapplicable weighing fields explicitly, with no second tare deduction. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_water` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; supply_id; source_compartment; meter_id; start_reading; end_reading; delivered_volume; retained_volume; contained_wastewater; direct_discharge; receiving_compartment; quantity_unit; coverage; provider_overlap | Read actual delivered/supply meters and distinguish product supply, direct abstraction, retained charge, contained waste and environmental discharge by physical destination. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_provider` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; provider_id; completed_result; service_unit; service_quantity; native_unit; unit_property_id; unit_group_id; support_reference_unit; native_to_support_factor; support_source; physical_scope; included_materials; included_energy; included_freight; included_assets; included_waste; excluded_scope; uncovered_resources; acceptance_record; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Obtain physical completed-result records and supplier complete upstream scope; expand every uncovered resource in its own native unit. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_assets` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; asset_id; consumer_id; all_consumers_jobs_nodes_periods; job_driver; full_life_driver; driver_unit; observed_history; evidenced_remainder; manufacture_burden; maintenance_burden; replacement_events; termination_event; eol_burden; attribution_view; service_burden_unit; life_source; uncertainty; sensitivity; observed_full_life_record; remainder_source; termination_source; eol_source; update_trigger; update_date; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Build an asset register covering all consumers and complete lifecycle, observed life or history plus evidenced remainder, maintenance/replacements/termination/EOL; test uncertainty/sensitivity and update before reuse. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | actual native unit | Every receipt/transfer/event and phase close | Full life across all consumers/jobs/nodes/periods, including observed history, evidenced remainder, replacements, termination and EOL; update when life/driver/scope evidence changes | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_freight` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; leg_id; provider_id; cargo_id; load; load_unit; distance; distance_unit; vehicle; empty_return; transport_factor; factor_unit; factor_source; dataset_coverage; provider_overlap | Obtain actual weighed loads, actual route distances, empty-return records and provider/supply scope; keep kg and km conversion operands. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_waste` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; waste_id; composition; hazard_state; gross; tare; net_mass; contained_waste_volume; waste_volume_unit; waste_state; waste_receiver; mass_unit; container_id; receiving_treatment; transport_coverage; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Weigh contained wastes by actual composition/hazard/destination with receiving treatment and transport chain. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |
| `cp_support_environment` | `site_support` | Linked actual physical roles | Traceable actual measurement and event record | site_id; job_id; building_id; footprint_id; process_id; phase_id; period_id; event_id; transfer_id; reference_gate_id; accepted_area_A; reference_area_unit; owning_node; source_activity; direction; species; flow_role; source_compartment; receiving_compartment; measurement_method; measured_mass; mass_unit; measured_water_volume; water_volume_unit; water_source_id; water_receiver_id; water_measurement_interval; measured_gas_quantity; gas_quantity_unit; pressure; pressure_unit; temperature; temperature_unit; actual_burn; activity; activity_unit; whole_fluid_release; whole_fluid_unit; density; density_unit; density_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; species_factor; factor_unit; factor_basis; factor_source; uncertainty; release_event_id; provider_coverage; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | By linked actual event and owning node, measure each actual species/medium or use matched activity-factor or measured whole-fluid composition/fate; independently meter actual direct water/gas environmental roles. Document zero only with coverage evidence; no generic VOC, SDS or safety threshold surrogate. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | actual native unit | Every receipt/transfer/event and phase close | Actual intervention from prework survey through defect-closed landlord acceptance, every phase/period and attempt | Named building and footprint plus causally attributed shared/provider scope | per reference flow | Calibrations, invoices/returns, witness records and supplier scope; uncertainty and missingness disclosed |

### Calculation Rules

The algebra below defines foreground accounting protocols using actual raw records and unit definitions. WDI supports the Cat A practice boundary and phased handoff only; it supplies no stock, combustion, species or full-life mathematical factor.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | all inventory rows | Q_norm = Q_attributed / A; A is the unique accepted net internal office area, with A>0; normalize each attributed physical ledger once. | Q_attributed; A; cp_handover | Physical native-unit amount per reference flow |  |
| `stock_throughput` | stripout_consumables_bag; stripout_consumables_barrier; stripout_consumables_protection; stripout_consumables_cutting; stripout_consumables_cleaning; atomic_stripout_consumables; area_components_raised_floor_panel; area_components_ceiling_board; area_components_ceiling_grid; area_components_basic_covering; atomic_area_components; count_components_luminaire; count_components_distribution_equipment; count_components_control_equipment; count_components_hvac_terminal; count_components_hvac_plant; count_components_wet_device; count_components_fire_device; count_components_mounting_assembly; atomic_count_components; length_components_cable; length_components_pipe; length_components_duct; length_components_containment; atomic_length_components; mass_consumables_adhesive; mass_consumables_paint; mass_consumables_sealant; mass_consumables_fixing; mass_consumables_cleaner; atomic_mass_consumables; volume_fluids_hydronic_fluid; volume_fluids_test_fluid; volume_fluids_water; atomic_volume_fluids; test_consumables_tracer; test_consumables_cleaner; test_consumables_test_article; atomic_test_consumables; supplied_fuel | S = opening + net_receipts - closing; choose gross-with-outlets OR consumed-only S - usable_outward_return once; retain nonreturned waste/loss upstream.  opening, net_receipts, closing and usable_outward_return must all use this same SKU/state native quantity_unit. net_receipts is the externally received quantity after any actual packaging/tare correction, exactly once: use a directly recorded net native receipt for count/area/length/volume routes; only for actual weighing first calculate net_mass_kg = gross_receipt_mass_kg - tare_mass_kg in kg, then apply an evidenced same-SKU/state conversion if the stock unit is not kg. Never subtract kg tare from m2, Item(s), m or l, and never deduct tare again from an already net receipt. Record receipt_basis and unit/conversion evidence; missing required conversion prevents finalization, while a nonweighing route marks mass/tare fields not applicable rather than fabricating zero. | opening; net_receipts; closing; usable_outward_return; receipt_basis; gross_receipt_mass_kg; tare_mass_kg; conversion_factor; conversion_unit; conversion_source | Declared native-unit supply throughput |  |
| `asset_share` | shared_assets_scaffold; shared_assets_platform; shared_assets_extraction; shared_assets_instrument; shared_assets_distribution; shared_assets_tool; atomic_shared_assets | Asset_equivalent = (job_driver / full_life_driver) / A; use compatible drivers and complete-life burden, or lifecycle-complete per-driver service amount = job_driver / A, never both. | job_driver; full_life_driver; A; cp_support_assets | Nonadditive complete-life asset-equivalent or matched service quantity |  |
| `freight_activity` | freight_services | Freight = sum(load_kg * distance_km) / A; include actual empty-return coverage through its evidenced service burden, without inventing loaded mass. | load; load_unit; distance; distance_unit; empty_return; A; cp_support_freight | Actual kg*km per reference flow and disclosed empty-return coverage |  |
| `release_activity` | atomic_actual_species_releases | Release_mass = measured_mass OR activity * species_factor OR whole_fluid_release * composition * fate_fraction; applies only to actual species mass on one complete compatible basis. Direct environmental water uses Water_volume = measured_water_volume, and gas uses separate measured_gas_quantity with actual unit/state/compartment; water Volume never uses a species-mass formula. | measured_mass; measured_water_volume; measured_gas_quantity; activity; species_factor; whole_fluid_release; composition; fate_fraction; cp_support_environment | Actual species/medium release or direct water/gas quantity before one division by A |  |
| `direct_water_measurement` | direct_environmental_water_withdrawal; direct_water_discharge | For each actual source or receiver, quantity = measured attributed water volume in m3 / A once. Environmental withdrawal is an input; direct discharge is an output. Do not net the two, infer discharge from missing balance, apply a species-mass factor, or count purchased/captured-treatment water again. | measured_water_volume; source_compartment; receiving_compartment; direction; A; cp_support_environment | Separate actual water input/output in m3 per reference flow |  |
| atomic_child_normalization | stripout_consumables_bag; stripout_consumables_barrier; stripout_consumables_protection; stripout_consumables_cutting; stripout_consumables_cleaning; stripout_usable_return_bag; stripout_usable_return_barrier; stripout_usable_return_protection; stripout_usable_return_cutting; stripout_usable_return_cleaning; stripout_waste_ceiling; stripout_waste_floor; stripout_waste_service; stripout_waste_dust; stripout_waste_consumable; area_components_raised_floor_panel; area_components_ceiling_board; area_components_ceiling_grid; area_components_basic_covering; count_components_luminaire; count_components_distribution_equipment; count_components_control_equipment; count_components_hvac_terminal; count_components_hvac_plant; count_components_wet_device; count_components_fire_device; count_components_mounting_assembly; length_components_cable; length_components_pipe; length_components_duct; length_components_containment; mass_consumables_adhesive; mass_consumables_paint; mass_consumables_sealant; mass_consumables_fixing; mass_consumables_cleaner; volume_fluids_hydronic_fluid; volume_fluids_test_fluid; volume_fluids_water; integration_usable_returns_raised_floor_panel; integration_usable_returns_ceiling_board; integration_usable_returns_ceiling_grid; integration_usable_returns_basic_covering; integration_usable_returns_luminaire; integration_usable_returns_distribution_equipment; integration_usable_returns_control_equipment; integration_usable_returns_hvac_terminal; integration_usable_returns_hvac_plant; integration_usable_returns_wet_device; integration_usable_returns_fire_device; integration_usable_returns_mounting_assembly; integration_usable_returns_cable; integration_usable_returns_pipe; integration_usable_returns_duct; integration_usable_returns_containment; integration_usable_returns_adhesive; integration_usable_returns_paint; integration_usable_returns_sealant; integration_usable_returns_fixing; integration_usable_returns_cleaner; integration_usable_returns_hydronic_fluid; integration_usable_returns_test_fluid; integration_usable_returns_water; integration_waste_packaging; integration_waste_offcut; integration_waste_failed_part; integration_waste_cured_residue; test_consumables_tracer; test_consumables_cleaner; test_consumables_test_article; test_waste_test_article; test_waste_cleaning_residue; shared_assets_scaffold; shared_assets_platform; shared_assets_extraction; shared_assets_instrument; shared_assets_distribution; shared_assets_tool; support_waste_filter; support_waste_protection; support_waste_treatment_residue | Record independent_physical_quantity separately by atomic_flow_row_id; actual_<row_id>_quantity is its named alias only, never a copied family amount. Materials retain original CP per-identity/state gross/net stock and outward-return conventions; transfers use actual paired custody quantity; usable exits and wastes use independent actual fate quantities. Owned assets use this PCR original job_driver/full_life_driver complete-life asset-equivalent method including manufacture, maintenance, replacement and end of life, with complete every-consumer positive denominator. Purchased services use only actual complete physical tasks whose real contract defines Item(s), with original actual attribution; hours, days and prices cannot become event counts. atomic_child_intensity = independent_physical_quantity / A, where A is unique surveyed accepted net internal Cat A office area in m2 under the original acceptance rule; A=0 blocks normalization. Non-exchange parent role ledgers and original CP operands retain their stock, transfer, closure and ownership functions, without adding a second exchange or changing the method. | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; A; cp_stripout_material; cp_integration_material; cp_test_material; cp_support_provider; cp_support_assets; cp_support_waste; cp_support_environment | atomic_child_intensity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `scope_trace` | all nodes | Keep actual building/job/footprint/process/phase/period/event/transfer IDs and reconcile retained/replaced and provider scope. | Survey, contract, stock and transfer records |
| `actual_factors` | all calculations | Retain raw operands, compatible units including temperature_unit, factor/composition/fate bases and sources. No guessed lives, dimensions, fuel burns, emission factors or numeric ranges. | Actual measurement/calibration and factor records |
| `complete_resources` | all nodes | All actual resources, shared/core scope, tests/retests and failures remain counted once. Missing provider/asset/elementary coverage blocks finalization, not zero. | Coverage matrix and uncertainty/sensitivity evidence |
| atomic_stripout_consumables | stripout; cp_stripout_material | Former stripout_consumables is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual bags, barriers, protection, cutting and cleaning consumables used to release the retained substrate; split by actual product and hazard role. Historic fittings are retained context, not new material receipts. Actual removed fit-for-reuse historical equipment or fittings MUST be instantiated as separate historical Product outlets in actual Count/Area/Length/Volume/Mass units, recording origin, usable state, native quantity/unit, receiver, transfer and unique owner; never default these to waste, current-supply returns or negative new receipts. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_stripout_material; actual_child_register; parent_ledger_id |
| atomic_stripout_usable_return | stripout; cp_stripout_material | Former stripout_usable_return is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Only usable current-project supplies returned beyond the foreground boundary with matching incoming SKU and lot. Closing stock is not an outward return; historical recovered fittings are not negative new purchases. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_stripout_material; actual_child_register; parent_ledger_id |
| atomic_stripout_waste | stripout; cp_stripout_material | Former stripout_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate actual hazardous and nonhazardous removed ceilings, floors, obsolete services, dust and contaminated consumables by composition and receiving treatment. Waste remains owned through evidenced treatment/transport; no assumed recycling credit. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_stripout_material; actual_child_register; parent_ledger_id |
| atomic_area_components | integration; cp_integration_material | Former area_components is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand only actual raised-access-floor panels, ceiling boards/grids or area-supplied basic coverings. Record each independent material role and layer once; their supplied or installed m2 are not final office area. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_integration_material; actual_child_register; parent_ledger_id |
| atomic_count_components | integration; cp_integration_material | Former count_components is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual specified luminaires, distribution/control equipment, HVAC terminals or plant, wet/fire devices and mounting assemblies according to retained/replaced scope. A factory-complete package and its BOM may be one purchased view only. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_integration_material; actual_child_register; parent_ledger_id |
| atomic_length_components | integration; cp_integration_material | Former length_components is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand actual cables, pipework, ducts or containment when the supplier dataset and records use length; retain material, section, rating and delivered state. Count-supplied fittings belong in count_components. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_integration_material; actual_child_register; parent_ledger_id |
| atomic_mass_consumables | integration; cp_integration_material | Former mass_consumables is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual adhesives, basic paints, sealants, fixings and cleaning materials; retain product composition and application state. Do not invent coating recipes or translate a complete kit into duplicate individual purchases. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_integration_material; actual_child_register; parent_ledger_id |
| atomic_volume_fluids | integration; cp_integration_material | Former volume_fluids is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand actual purchased hydronic/test fluids or water supplied to this node when volume is the documented native unit. A mass-supplied refrigerant or chemical MUST be expanded as a separate mass input with verified support; do not invent a fluid or convert it to fit this card. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_integration_material; actual_child_register; parent_ledger_id |
| atomic_integration_usable_returns | integration; cp_integration_material | Former integration_usable_returns is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand each returned supply by actual Area, Count, Length, Mass or Volume with matching incoming SKU, condition, amount and verified support. Never merge unlike units or treat closing inventory as outward return. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_integration_material; actual_child_register; parent_ledger_id |
| atomic_integration_waste | integration; cp_integration_material | Former integration_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual segregated packaging, offcuts, removed failed parts, cured residues and contained waste fluids. Subdivide by hazardous state and evidenced destination; collected dust is waste, escaped dust is an elementary release. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_integration_material; actual_child_register; parent_ledger_id |
| atomic_test_consumables | test_handover; cp_test_material | Former test_consumables is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record actual tracers, cleaning or test consumables and replacement test articles only if used. Durable test instruments and provider physical services belong to site_support. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_test_material; actual_child_register; parent_ledger_id |
| atomic_test_waste | test_handover; cp_test_material | Former test_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Actual spent test articles, collected cleaning residues and contained discharged test fluids classified by actual state/destination. Direct discharge to the environment MUST instead be expanded as measured medium-specific elementary exchanges. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_test_material; actual_child_register; parent_ledger_id |
| atomic_provider_services | site_support; cp_support_provider | Former provider_services is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Expand provider physical completed results using the actual documented native unit and complete upstream coverage: surveys, hazard specialists, hired access, specialist interface works, balancing and independent tests where specified. Price or labour hours cannot be converted into Count; remove resources already embodied in an evidenced lifecycle-complete service dataset. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_support_provider; actual_child_register; parent_ledger_id |
| atomic_shared_assets | site_support; cp_support_assets | Former shared_assets is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: One asset-equivalent view of actual scaffolds/platforms, extraction plant, instruments, distribution assets and durable tools shared by stripout, integration and test_handover across phases. Include manufacture, maintenance, replacements and end of life across all consumers/jobs/periods. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_support_assets; actual_child_register; parent_ledger_id |
| atomic_support_waste | site_support; cp_support_waste | Former support_waste is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Collected filters, temporary protection, contained fuel waste and water treatment residues go to actual receiving treatment. Recovered closing fuel and direct uncontrolled releases are separate mutually exclusive fates. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_support_waste; actual_child_register; parent_ledger_id |
| atomic_actual_species_releases | site_support; cp_support_environment | Former actual_species_releases is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Resolve substance and air/water/soil receiver separately. This output contains no environmental resource withdrawal and no whole-water volume. Preserve measured-mass, complete species-factor or composition/fate alternatives without duplicate factors. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_support_environment; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | stripout; integration; test_handover; site_support | Legacy roles are non-exchange stock, activity, fate or closure keys in the original CP. Independent child exchanges carry quantities; atomic_ requirements retain mandatory remaining-roster refinement and finalization blocks. Original raw fields, helpers and native-unit operands retain their responsibilities and reconcile by child identity and compatible unit, never adding parent totals or unlike units. Source-table Applies-to migration: stripout_consumables => stripout_consumables_bag, stripout_consumables_barrier, stripout_consumables_protection, stripout_consumables_cutting, stripout_consumables_cleaning, atomic_stripout_consumables; stripout_usable_return => stripout_usable_return_bag, stripout_usable_return_barrier, stripout_usable_return_protection, stripout_usable_return_cutting, stripout_usable_return_cleaning, atomic_stripout_usable_return; stripout_waste => stripout_waste_ceiling, stripout_waste_floor, stripout_waste_service, stripout_waste_dust, stripout_waste_consumable, atomic_stripout_waste; area_components => area_components_raised_floor_panel, area_components_ceiling_board, area_components_ceiling_grid, area_components_basic_covering, atomic_area_components; count_components => count_components_luminaire, count_components_distribution_equipment, count_components_control_equipment, count_components_hvac_terminal, count_components_hvac_plant, count_components_wet_device, count_components_fire_device, count_components_mounting_assembly, atomic_count_components; length_components => length_components_cable, length_components_pipe, length_components_duct, length_components_containment, atomic_length_components; mass_consumables => mass_consumables_adhesive, mass_consumables_paint, mass_consumables_sealant, mass_consumables_fixing, mass_consumables_cleaner, atomic_mass_consumables; volume_fluids => volume_fluids_hydronic_fluid, volume_fluids_test_fluid, volume_fluids_water, atomic_volume_fluids; integration_usable_returns => integration_usable_returns_raised_floor_panel, integration_usable_returns_ceiling_board, integration_usable_returns_ceiling_grid, integration_usable_returns_basic_covering, integration_usable_returns_luminaire, integration_usable_returns_distribution_equipment, integration_usable_returns_control_equipment, integration_usable_returns_hvac_terminal, integration_usable_returns_hvac_plant, integration_usable_returns_wet_device, integration_usable_returns_fire_device, integration_usable_returns_mounting_assembly, integration_usable_returns_cable, integration_usable_returns_pipe, integration_usable_returns_duct, integration_usable_returns_containment, integration_usable_returns_adhesive, integration_usable_returns_paint, integration_usable_returns_sealant, integration_usable_returns_fixing, integration_usable_returns_cleaner, integration_usable_returns_hydronic_fluid, integration_usable_returns_test_fluid, integration_usable_returns_water, atomic_integration_usable_returns; integration_waste => integration_waste_packaging, integration_waste_offcut, integration_waste_failed_part, integration_waste_cured_residue, atomic_integration_waste; test_consumables => test_consumables_tracer, test_consumables_cleaner, test_consumables_test_article, atomic_test_consumables; test_waste => test_waste_test_article, test_waste_cleaning_residue, atomic_test_waste; provider_services => atomic_provider_services; shared_assets => shared_assets_scaffold, shared_assets_platform, shared_assets_extraction, shared_assets_instrument, shared_assets_distribution, shared_assets_tool, atomic_shared_assets; support_waste => support_waste_filter, support_waste_protection, support_waste_treatment_residue, atomic_support_waste; actual_species_releases => atomic_actual_species_releases | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | stripout; integration; test_handover; site_support | The following routes each child to its original role, node, unique unit and method CP. Independently apply that original role measurement, stock, source/fate, rework, share, conversion and normalization method to each actual identity/state child. Retain the original helper/selector role parameter as legacy_parent_role, but supply quantity operands from this child independent records; ROW_UNIT(child_row_id) is the explicit unit below. Reconcile stocks/transfers only within the same identity/state and compatible native unit, grouping different materials, media, states and units separately. Parent totals are non-exchange diagnostics, never copied as child operands or summed across unlike units. Unsupported original-helper applicability or missing actual conversion, denominator or evidence blocks finalization; field records cannot choose a new method. Original role-named formula operands remain ledger names rather than duplicate exchanges. A cross-unit legacy role executes by this mapping and actual child unit instead of inheriting a wrong fixed unit. Routing: stripout_consumables_bag => role=stripout_consumables, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_consumables_barrier => role=stripout_consumables, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_consumables_protection => role=stripout_consumables, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_consumables_cutting => role=stripout_consumables, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_consumables_cleaning => role=stripout_consumables, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_usable_return_bag => role=stripout_usable_return, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_usable_return_barrier => role=stripout_usable_return, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_usable_return_protection => role=stripout_usable_return, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_usable_return_cutting => role=stripout_usable_return, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_usable_return_cleaning => role=stripout_usable_return, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_waste_ceiling => role=stripout_waste, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_waste_floor => role=stripout_waste, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_waste_service => role=stripout_waste, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_waste_dust => role=stripout_waste, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; stripout_waste_consumable => role=stripout_waste, node=stripout, property=Mass, unit=kg, CP=cp_stripout_material; area_components_raised_floor_panel => role=area_components, node=integration, property=Area, unit=m2, CP=cp_integration_material; area_components_ceiling_board => role=area_components, node=integration, property=Area, unit=m2, CP=cp_integration_material; area_components_ceiling_grid => role=area_components, node=integration, property=Area, unit=m2, CP=cp_integration_material; area_components_basic_covering => role=area_components, node=integration, property=Area, unit=m2, CP=cp_integration_material; count_components_luminaire => role=count_components, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; count_components_distribution_equipment => role=count_components, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; count_components_control_equipment => role=count_components, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; count_components_hvac_terminal => role=count_components, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; count_components_hvac_plant => role=count_components, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; count_components_wet_device => role=count_components, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; count_components_fire_device => role=count_components, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; count_components_mounting_assembly => role=count_components, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; length_components_cable => role=length_components, node=integration, property=Length, unit=m, CP=cp_integration_material; length_components_pipe => role=length_components, node=integration, property=Length, unit=m, CP=cp_integration_material; length_components_duct => role=length_components, node=integration, property=Length, unit=m, CP=cp_integration_material; length_components_containment => role=length_components, node=integration, property=Length, unit=m, CP=cp_integration_material; mass_consumables_adhesive => role=mass_consumables, node=integration, property=Mass, unit=kg, CP=cp_integration_material; mass_consumables_paint => role=mass_consumables, node=integration, property=Mass, unit=kg, CP=cp_integration_material; mass_consumables_sealant => role=mass_consumables, node=integration, property=Mass, unit=kg, CP=cp_integration_material; mass_consumables_fixing => role=mass_consumables, node=integration, property=Mass, unit=kg, CP=cp_integration_material; mass_consumables_cleaner => role=mass_consumables, node=integration, property=Mass, unit=kg, CP=cp_integration_material; volume_fluids_hydronic_fluid => role=volume_fluids, node=integration, property=Volume, unit=m3, CP=cp_integration_material; volume_fluids_test_fluid => role=volume_fluids, node=integration, property=Volume, unit=m3, CP=cp_integration_material; volume_fluids_water => role=volume_fluids, node=integration, property=Volume, unit=m3, CP=cp_integration_material; integration_usable_returns_raised_floor_panel => role=integration_usable_returns, node=integration, property=Area, unit=m2, CP=cp_integration_material; integration_usable_returns_ceiling_board => role=integration_usable_returns, node=integration, property=Area, unit=m2, CP=cp_integration_material; integration_usable_returns_ceiling_grid => role=integration_usable_returns, node=integration, property=Area, unit=m2, CP=cp_integration_material; integration_usable_returns_basic_covering => role=integration_usable_returns, node=integration, property=Area, unit=m2, CP=cp_integration_material; integration_usable_returns_luminaire => role=integration_usable_returns, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; integration_usable_returns_distribution_equipment => role=integration_usable_returns, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; integration_usable_returns_control_equipment => role=integration_usable_returns, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; integration_usable_returns_hvac_terminal => role=integration_usable_returns, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; integration_usable_returns_hvac_plant => role=integration_usable_returns, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; integration_usable_returns_wet_device => role=integration_usable_returns, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; integration_usable_returns_fire_device => role=integration_usable_returns, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; integration_usable_returns_mounting_assembly => role=integration_usable_returns, node=integration, property=Number of items, unit=Item(s), CP=cp_integration_material; integration_usable_returns_cable => role=integration_usable_returns, node=integration, property=Length, unit=m, CP=cp_integration_material; integration_usable_returns_pipe => role=integration_usable_returns, node=integration, property=Length, unit=m, CP=cp_integration_material; integration_usable_returns_duct => role=integration_usable_returns, node=integration, property=Length, unit=m, CP=cp_integration_material; integration_usable_returns_containment => role=integration_usable_returns, node=integration, property=Length, unit=m, CP=cp_integration_material; integration_usable_returns_adhesive => role=integration_usable_returns, node=integration, property=Mass, unit=kg, CP=cp_integration_material; integration_usable_returns_paint => role=integration_usable_returns, node=integration, property=Mass, unit=kg, CP=cp_integration_material; integration_usable_returns_sealant => role=integration_usable_returns, node=integration, property=Mass, unit=kg, CP=cp_integration_material; integration_usable_returns_fixing => role=integration_usable_returns, node=integration, property=Mass, unit=kg, CP=cp_integration_material; integration_usable_returns_cleaner => role=integration_usable_returns, node=integration, property=Mass, unit=kg, CP=cp_integration_material; integration_usable_returns_hydronic_fluid => role=integration_usable_returns, node=integration, property=Volume, unit=m3, CP=cp_integration_material; integration_usable_returns_test_fluid => role=integration_usable_returns, node=integration, property=Volume, unit=m3, CP=cp_integration_material; integration_usable_returns_water => role=integration_usable_returns, node=integration, property=Volume, unit=m3, CP=cp_integration_material; integration_waste_packaging => role=integration_waste, node=integration, property=Mass, unit=kg, CP=cp_integration_material; integration_waste_offcut => role=integration_waste, node=integration, property=Mass, unit=kg, CP=cp_integration_material; integration_waste_failed_part => role=integration_waste, node=integration, property=Mass, unit=kg, CP=cp_integration_material; integration_waste_cured_residue => role=integration_waste, node=integration, property=Mass, unit=kg, CP=cp_integration_material; test_consumables_tracer => role=test_consumables, node=test_handover, property=Mass, unit=kg, CP=cp_test_material; test_consumables_cleaner => role=test_consumables, node=test_handover, property=Mass, unit=kg, CP=cp_test_material; test_consumables_test_article => role=test_consumables, node=test_handover, property=Mass, unit=kg, CP=cp_test_material; test_waste_test_article => role=test_waste, node=test_handover, property=Mass, unit=kg, CP=cp_test_material; test_waste_cleaning_residue => role=test_waste, node=test_handover, property=Mass, unit=kg, CP=cp_test_material; shared_assets_scaffold => role=shared_assets, node=site_support, property=Number of items, unit=Item(s), CP=cp_support_assets; shared_assets_platform => role=shared_assets, node=site_support, property=Number of items, unit=Item(s), CP=cp_support_assets; shared_assets_extraction => role=shared_assets, node=site_support, property=Number of items, unit=Item(s), CP=cp_support_assets; shared_assets_instrument => role=shared_assets, node=site_support, property=Number of items, unit=Item(s), CP=cp_support_assets; shared_assets_distribution => role=shared_assets, node=site_support, property=Number of items, unit=Item(s), CP=cp_support_assets; shared_assets_tool => role=shared_assets, node=site_support, property=Number of items, unit=Item(s), CP=cp_support_assets; support_waste_filter => role=support_waste, node=site_support, property=Mass, unit=kg, CP=cp_support_waste; support_waste_protection => role=support_waste, node=site_support, property=Mass, unit=kg, CP=cp_support_waste; support_waste_treatment_residue => role=support_waste, node=site_support, property=Mass, unit=kg, CP=cp_support_waste | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| atomic_range_noninheritance | stripout_consumables_bag; stripout_consumables_barrier; stripout_consumables_protection; stripout_consumables_cutting; stripout_consumables_cleaning; stripout_usable_return_bag; stripout_usable_return_barrier; stripout_usable_return_protection; stripout_usable_return_cutting; stripout_usable_return_cleaning; stripout_waste_ceiling; stripout_waste_floor; stripout_waste_service; stripout_waste_dust; stripout_waste_consumable; area_components_raised_floor_panel; area_components_ceiling_board; area_components_ceiling_grid; area_components_basic_covering; count_components_luminaire; count_components_distribution_equipment; count_components_control_equipment; count_components_hvac_terminal; count_components_hvac_plant; count_components_wet_device; count_components_fire_device; count_components_mounting_assembly; length_components_cable; length_components_pipe; length_components_duct; length_components_containment; mass_consumables_adhesive; mass_consumables_paint; mass_consumables_sealant; mass_consumables_fixing; mass_consumables_cleaner; volume_fluids_hydronic_fluid; volume_fluids_test_fluid; volume_fluids_water; integration_usable_returns_raised_floor_panel; integration_usable_returns_ceiling_board; integration_usable_returns_ceiling_grid; integration_usable_returns_basic_covering; integration_usable_returns_luminaire; integration_usable_returns_distribution_equipment; integration_usable_returns_control_equipment; integration_usable_returns_hvac_terminal; integration_usable_returns_hvac_plant; integration_usable_returns_wet_device; integration_usable_returns_fire_device; integration_usable_returns_mounting_assembly; integration_usable_returns_cable; integration_usable_returns_pipe; integration_usable_returns_duct; integration_usable_returns_containment; integration_usable_returns_adhesive; integration_usable_returns_paint; integration_usable_returns_sealant; integration_usable_returns_fixing; integration_usable_returns_cleaner; integration_usable_returns_hydronic_fluid; integration_usable_returns_test_fluid; integration_usable_returns_water; integration_waste_packaging; integration_waste_offcut; integration_waste_failed_part; integration_waste_cured_residue; test_consumables_tracer; test_consumables_cleaner; test_consumables_test_article; test_waste_test_article; test_waste_cleaning_residue; shared_assets_scaffold; shared_assets_platform; shared_assets_extraction; shared_assets_instrument; shared_assets_distribution; shared_assets_tool; support_waste_filter; support_waste_protection; support_waste_treatment_residue | Retired parent numerical ranges, per-exchange screening instructions and rationales are retained only in implementation audit, applying to neither new child exchanges nor parent-family sums and never proportionally allocated. Each new child has independent evidence needs for actual quantity, identity/state, measurement/conversion, uncertainty and comparable independent observations. Add its own interval only after review confirms applicability to this independent object; never validate a batch with its own maximum. Original ranges of unchanged semantically compatible atomic objects retain their original status. | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_area` | reference and handover | Require surveyed convention/polygons and A>0, no overlaps or premature partial area, actual contract system schedule and all applicable electrical/HVAC balancing/control/wet/fire tests, retests, record drawings/O&M, defect closure and landlord signoff. Actual approval requirements remain project-specific; Cat A alone proves none. | `wdi-cat-a-b-fitout`; `wdi-riverside-refurbishment` |
| `balance_native` | all inventory rows | Reconcile native supply, matched returns, contained wastes, installed stocks and direct releases by event/SKU. Reconcile opening, external receipts and closing balances; recovered fuel retained at the boundary is already included in closing, never an additional fate. Outward return, nonburned waste, uncontained loss and closing are disjoint destinations. Historic assets cannot offset new supply; no duplicate kit/BOM, provider/direct or freight coverage. |  |
| `fuel_species` | site_support | Actual burn uses measured burn OR an audited complete set of disjoint native-unit fates with uncertainty and unknown-loss investigation. Return, nonburned waste, uncontained loss and carry are mutually exclusive; no residual inferred burn. Total spill is audit only and recovered closing is already closing. Require actual species/medium and measured mass, matched activity-factor or measured whole-fluid composition/fate basis; whole-fluid and species views are nonadditive, SDS/no-VOC claims are not quantities. |  |
| `shared_rework` | all nodes | Check full-life consumers/periods, compatible drivers, replacements/termination/EOL and one burden view; unknown full-life coverage blocks finalization. Match transfer/defect IDs and waste destinations; no rejected state in accepted A. Required actual direct water/gas roles must be expanded with dedicated measured exchanges and CP operands before final data. |  |
| `identity_coverage` | all inventory rows | Expand every actual SKU/provider/waste/species umbrella into verified concrete exchanges with native property/unit support. Unresolved identities or omitted physical provider, temporary/test/spare/transport resources block final data; a candidate check is not publication or UUID verification. |  |
| close_atomic_stripout_consumables | stripout; cp_stripout_material | Block final foreground completion until every actual object in atomic_stripout_consumables is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_stripout_usable_return | stripout; cp_stripout_material | Block final foreground completion until every actual object in atomic_stripout_usable_return is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_stripout_waste | stripout; cp_stripout_material | Block final foreground completion until every actual object in atomic_stripout_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_area_components | integration; cp_integration_material | Block final foreground completion until every actual object in atomic_area_components is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_count_components | integration; cp_integration_material | Block final foreground completion until every actual object in atomic_count_components is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_length_components | integration; cp_integration_material | Block final foreground completion until every actual object in atomic_length_components is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_mass_consumables | integration; cp_integration_material | Block final foreground completion until every actual object in atomic_mass_consumables is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_volume_fluids | integration; cp_integration_material | Block final foreground completion until every actual object in atomic_volume_fluids is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_integration_usable_returns | integration; cp_integration_material | Block final foreground completion until every actual object in atomic_integration_usable_returns is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_integration_waste | integration; cp_integration_material | Block final foreground completion until every actual object in atomic_integration_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_test_consumables | test_handover; cp_test_material | Block final foreground completion until every actual object in atomic_test_consumables is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_test_waste | test_handover; cp_test_material | Block final foreground completion until every actual object in atomic_test_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_provider_services | site_support; cp_support_provider | Block final foreground completion until every actual object in atomic_provider_services is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_shared_assets | site_support; cp_support_assets | Block final foreground completion until every actual object in atomic_shared_assets is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_support_waste | site_support; cp_support_waste | Block final foreground completion until every actual object in atomic_support_waste is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_actual_species_releases | site_support; cp_support_environment | Block final foreground completion until every actual object in atomic_actual_species_releases is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | Verify actual source/receipt evidence, original physical quantities/units and ownership for the same material/state/event/gate. Traceable reuse of the same signed measurement is allowed; copied parent totals, overwritten receipts and forced unknown equality are prohibited. Unexplained differences without uncertainty, actual loss or state-transition responsibility evidence block completion; verify exactly one normalization per card. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for one declared retained-office Cat A intervention and its process/lifecyclemodel projections. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Comparisons of matched retained conditions, actual Cat A contract scope, area convention, shared/core attribution and acceptance gates. |
| excluded_use | New building, extension or Cat B claims; tenant operating readiness, future office energy, generic legal compliance or case-performance defaults. |
| required_metadata | PCR id, actual building/footprint/periods, survey convention/A, retained/replaced systems, contract interfaces, tests/gate, common attribution and upstream coverage. |
| required_quality_disclosure | Measured/calculated status, concrete identity gaps, provider/native support gaps, coverage, uncertainty/sensitivity, source applicability and excluded adjacent work. |
| update_trigger | Scope/system/area/retained-condition change; new test/defect evidence; changed provider coverage or full-life asset attribution; verified identities and stronger measurements. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| wdi-cat-a-b-fitout | literature | https://www.willmottdixoninteriors.co.uk/difference-between-cat-a-and-cat-b-fit-outs/ | Contractor practice description: Cat A base-service/basic-finish purpose versus tenant Cat B. Typical feature list, not a universal legal standard, fixed BOM or numeric factor. |
| wdi-riverside-refurbishment | literature | https://www.willmottdixoninteriors.co.uk/case-studies/riverside-house/ | Existing-office phased live-site and common-service interface practice. Case includes excluded extension/new area/Cat B; zero webpage stats, dimensions and rating supply no defaults. |
